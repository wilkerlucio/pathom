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
var G__62526 = target;
if(cljs.core.truth_(cljs.core.meta(source))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__62526,new cljs.core.Keyword(null,"meta","meta",1499536964),cljs.core.meta(source));
} else {
return G__62526;
}
});
com.wsscode.pathom.parser.symbol__GT_ast = (function com$wsscode$pathom$parser$symbol__GT_ast(k){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),k,new cljs.core.Keyword(null,"key","key",-1516042587),k], null);
});
com.wsscode.pathom.parser.keyword__GT_ast = (function com$wsscode$pathom$parser$keyword__GT_ast(k){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"prop","prop",-515168332),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),k,new cljs.core.Keyword(null,"key","key",-1516042587),k], null);
});
com.wsscode.pathom.parser.union_entry__GT_ast = (function com$wsscode$pathom$parser$union_entry__GT_ast(p__62527){
var vec__62528 = p__62527;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62528,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62528,(1),null);
var component = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(v));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"union-entry","union-entry",223335750),new cljs.core.Keyword(null,"union-key","union-key",1529707234),k,new cljs.core.Keyword(null,"query","query",-1288509510),v,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.parser.expr__GT_ast),v)], null),(((component == null))?null:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component","component",1555936782),component], null))], 0));
});
com.wsscode.pathom.parser.union__GT_ast = (function com$wsscode$pathom$parser$union__GT_ast(m){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"union","union",2142937499),new cljs.core.Keyword(null,"query","query",-1288509510),m,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.parser.union_entry__GT_ast),m)], null);
});
com.wsscode.pathom.parser.call__GT_ast = (function com$wsscode$pathom$parser$call__GT_ast(p__62541){
var vec__62542 = p__62541;
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62542,(0),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62542,(1),null);
var call = vec__62542;
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
var G__62553 = com.wsscode.pathom.parser.mark_meta(call,ast);
if((new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510).cljs$core$IFn$_invoke$arity$1(ast) instanceof cljs.core.Symbol)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__62553,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"call","call",-519999866));
} else {
return G__62553;
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
var vec__62567 = cljs.core.first(join);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62567,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62567,(1),null);
var ast = (com.wsscode.pathom.parser.expr__GT_ast.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom.parser.expr__GT_ast.cljs$core$IFn$_invoke$arity$1(k) : com.wsscode.pathom.parser.expr__GT_ast.call(null,k));
var type = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"call","call",-519999866),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(ast)))?new cljs.core.Keyword(null,"call","call",-519999866):new cljs.core.Keyword(null,"join","join",-758861890));
var component = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(v));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ast,com.wsscode.pathom.parser.mark_meta(join,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"query","query",-1288509510),v], null)),(((component == null))?null:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component","component",1555936782),component], null)),(cljs.core.truth_(query_root_QMARK_)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query-root","query-root",359781888),true], null):null),((((typeof v === 'number') || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"...","...",-1926939749,null),v))))?null:((cljs.core.vector_QMARK_(v))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.parser.expr__GT_ast),v)], null):((cljs.core.map_QMARK_(v))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.parser.union__GT_ast(v)], null)], null):(function(){throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Invalid join, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(join)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("error","invalid-join","error/invalid-join",1594073006)], null))})()
)))], 0));
});
com.wsscode.pathom.parser.ident__GT_ast = (function com$wsscode$pathom$parser$ident__GT_ast(p__62579){
var vec__62580 = p__62579;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62580,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62580,(1),null);
var ref = vec__62580;
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
return cljs.core.with_meta((function (){var G__62590 = expr;
if((expr instanceof cljs.core.Keyword)){
return (new cljs.core.List(null,G__62590,null,(1),null));
} else {
return G__62590;
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
var G__62602 = arguments.length;
switch (G__62602) {
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

com.wsscode.pathom.parser.ast__GT_expr.cljs$core$IFn$_invoke$arity$2 = (function (p__62605,unparse_QMARK_){
var map__62606 = p__62605;
var map__62606__$1 = (((((!((map__62606 == null))))?(((((map__62606.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62606.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62606):map__62606);
var ast = map__62606__$1;
var ast_meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62606__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62606__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62606__$1,new cljs.core.Keyword(null,"component","component",1555936782));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"root","root",-448657453),type)){
var G__62611 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.with_meta(cljs.core.PersistentVector.EMPTY,ast_meta),cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (map__62606,map__62606__$1,ast,ast_meta,type,component){
return (function (p1__62595_SHARP_){
return com.wsscode.pathom.parser.ast__GT_expr.cljs$core$IFn$_invoke$arity$2(p1__62595_SHARP_,unparse_QMARK_);
});})(map__62606,map__62606__$1,ast,ast_meta,type,component))
),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(ast));
if((!((component == null)))){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(G__62611,cljs.core.assoc,new cljs.core.Keyword(null,"component","component",1555936782),component);
} else {
return G__62611;
}
} else {
var map__62616 = ast;
var map__62616__$1 = (((((!((map__62616 == null))))?(((((map__62616.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62616.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62616):map__62616);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62616__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62616__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var query_root = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62616__$1,new cljs.core.Keyword(null,"query-root","query-root",359781888));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62616__$1,new cljs.core.Keyword(null,"params","params",710516235));
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
var map__62629 = ast;
var map__62629__$1 = (((((!((map__62629 == null))))?(((((map__62629.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62629.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62629):map__62629);
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62629__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var query_meta = cljs.core.meta(query);
if(((((1) === cljs.core.count(children))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"union","union",2142937499),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.first(children)))))){
return cljs.core.with_meta(cljs.core.PersistentArrayMap.createAsIfByAssoc([key__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$3((function (){var G__62633 = cljs.core.with_meta(cljs.core.PersistentArrayMap.EMPTY,ast_meta);
if(cljs.core.truth_(component)){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(G__62633,cljs.core.assoc,new cljs.core.Keyword(null,"component","component",1555936782),component);
} else {
return G__62633;
}
})(),cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (map__62629,map__62629__$1,children,query_meta,key__$1,map__62616,map__62616__$1,key,query,query_root,params,map__62606,map__62606__$1,ast,ast_meta,type,component){
return (function (p__62636){
var map__62638 = p__62636;
var map__62638__$1 = (((((!((map__62638 == null))))?(((((map__62638.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62638.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62638):map__62638);
var union_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62638__$1,new cljs.core.Keyword(null,"union-key","union-key",1529707234));
var children__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62638__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var component__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62638__$1,new cljs.core.Keyword(null,"component","component",1555936782));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [union_key,(function (){var G__62643 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (map__62638,map__62638__$1,union_key,children__$1,component__$1,map__62629,map__62629__$1,children,query_meta,key__$1,map__62616,map__62616__$1,key,query,query_root,params,map__62606,map__62606__$1,ast,ast_meta,type,component){
return (function (p1__62598_SHARP_){
return com.wsscode.pathom.parser.ast__GT_expr.cljs$core$IFn$_invoke$arity$2(p1__62598_SHARP_,unparse_QMARK_);
});})(map__62638,map__62638__$1,union_key,children__$1,component__$1,map__62629,map__62629__$1,children,query_meta,key__$1,map__62616,map__62616__$1,key,query,query_root,params,map__62606,map__62606__$1,ast,ast_meta,type,component))
),children__$1);
if((!((component__$1 == null)))){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(G__62643,cljs.core.assoc,new cljs.core.Keyword(null,"component","component",1555936782),component__$1);
} else {
return G__62643;
}
})()], null);
});})(map__62629,map__62629__$1,children,query_meta,key__$1,map__62616,map__62616__$1,key,query,query_root,params,map__62606,map__62606__$1,ast,ast_meta,type,component))
),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(cljs.core.first(children)))]),ast_meta);
} else {
return cljs.core.with_meta(cljs.core.PersistentArrayMap.createAsIfByAssoc([key__$1,(function (){var G__62645 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.with_meta(cljs.core.PersistentVector.EMPTY,query_meta),cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (map__62629,map__62629__$1,children,query_meta,key__$1,map__62616,map__62616__$1,key,query,query_root,params,map__62606,map__62606__$1,ast,ast_meta,type,component){
return (function (p1__62599_SHARP_){
return com.wsscode.pathom.parser.ast__GT_expr.cljs$core$IFn$_invoke$arity$2(p1__62599_SHARP_,unparse_QMARK_);
});})(map__62629,map__62629__$1,children,query_meta,key__$1,map__62616,map__62616__$1,key,query,query_root,params,map__62606,map__62606__$1,ast,ast_meta,type,component))
),children);
if((!((component == null)))){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(G__62645,cljs.core.assoc,new cljs.core.Keyword(null,"component","component",1555936782),component);
} else {
return G__62645;
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
var s_index = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__62652_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"union-key","union-key",1529707234).cljs$core$IFn$_invoke$arity$1(p1__62652_SHARP_),p1__62652_SHARP_],null));
})),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(sub_ast));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(query_ast,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (s_index){
return (function (children,p__62656){
var map__62658 = p__62656;
var map__62658__$1 = (((((!((map__62658 == null))))?(((((map__62658.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62658.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62658):map__62658);
var union_entry = map__62658__$1;
var union_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62658__$1,new cljs.core.Keyword(null,"union-key","union-key",1529707234));
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
return (function (children,p__62667){
var map__62671 = p__62667;
var map__62671__$1 = (((((!((map__62671 == null))))?(((((map__62671.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62671.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62671):map__62671);
var focus = map__62671__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62671__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62671__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var temp__5718__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(q_index,key);
if(cljs.core.truth_(temp__5718__auto__)){
var source = temp__5718__auto__;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (source,temp__5718__auto__,map__62671,map__62671__$1,focus,key,type,q_index){
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
});})(source,temp__5718__auto__,map__62671,map__62671__$1,focus,key,type,q_index))
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
com.wsscode.pathom.parser.parser = (function com$wsscode$pathom$parser$parser(p__62714){
var map__62715 = p__62714;
var map__62715__$1 = (((((!((map__62715 == null))))?(((((map__62715.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62715.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62715):map__62715);
var read = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62715__$1,new cljs.core.Keyword(null,"read","read",1140058661));
var mutate = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62715__$1,new cljs.core.Keyword(null,"mutate","mutate",1422419038));
return ((function (map__62715,map__62715__$1,read,mutate){
return (function com$wsscode$pathom$parser$parser_$_self(env,tx){
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword("com.wsscode.pathom.trace","trace*","com.wsscode.pathom.trace/trace*",-80191782)))){
var trace_id__22799__auto__ = com.wsscode.pathom.trace.trace_enter.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","parse-loop","com.wsscode.pathom.parser/parse-loop",1506208195)], null));
var res__22800__auto__ = (function (){var map__62725 = com.wsscode.pathom.parser.query__GT_ast(tx);
var map__62725__$1 = (((((!((map__62725 == null))))?(((((map__62725.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62725.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62725):map__62725);
var tx_ast = map__62725__$1;
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62725__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var tx__$1 = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(tx,cljs.core.assoc,new cljs.core.Keyword("com.wsscode.pathom.parser","ast","com.wsscode.pathom.parser/ast",1639399903),tx_ast);
var env__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword(null,"parser","parser",-1543495310),com$wsscode$pathom$parser$parser_$_self);
var res = cljs.core.PersistentArrayMap.EMPTY;
var G__62740 = children;
var vec__62745 = G__62740;
var seq__62746 = cljs.core.seq(vec__62745);
var first__62747 = cljs.core.first(seq__62746);
var seq__62746__$1 = cljs.core.next(seq__62746);
var map__62748 = first__62747;
var map__62748__$1 = (((((!((map__62748 == null))))?(((((map__62748.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62748.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62748):map__62748);
var ast = map__62748__$1;
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62748__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62748__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62748__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62748__$1,new cljs.core.Keyword(null,"params","params",710516235));
var tail = seq__62746__$1;
var res__$1 = res;
var G__62740__$1 = G__62740;
while(true){
var res__$2 = res__$1;
var vec__62780 = G__62740__$1;
var seq__62781 = cljs.core.seq(vec__62780);
var first__62782 = cljs.core.first(seq__62781);
var seq__62781__$1 = cljs.core.next(seq__62781);
var map__62783 = first__62782;
var map__62783__$1 = (((((!((map__62783 == null))))?(((((map__62783.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62783.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62783):map__62783);
var ast__$1 = map__62783__$1;
var query__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62783__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var key__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62783__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var type__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62783__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var params__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62783__$1,new cljs.core.Keyword(null,"params","params",710516235));
var tail__$1 = seq__62781__$1;
if(cljs.core.truth_(ast__$1)){
var _ = com.wsscode.pathom.trace.trace(env__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","process-key","com.wsscode.pathom.parser/process-key",1272337224),new cljs.core.Keyword(null,"key","key",-1516042587),key__$1], null));
var env__$2 = (function (){var G__62792 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([env__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ast","ast",-860334068),ast__$1,new cljs.core.Keyword(null,"query","query",-1288509510),query__$1], null)], 0));
var G__62792__$1 = (((query__$1 == null))?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__62792,new cljs.core.Keyword(null,"query","query",-1288509510)):G__62792);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"...","...",-1926939749,null),query__$1)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__62792__$1,new cljs.core.Keyword(null,"query","query",-1288509510),tx__$1);
} else {
return G__62792__$1;
}
})();
var value = (function (){var G__62807 = type__$1;
var G__62807__$1 = (((G__62807 instanceof cljs.core.Keyword))?G__62807.fqn:null);
switch (G__62807__$1) {
case "call":
if(cljs.core.truth_(mutate)){
} else {
throw (new Error(["Assert failed: ","Parse mutation attempted but no :mutate function supplied","\n","mutate"].join('')));
}

var map__62813 = (mutate.cljs$core$IFn$_invoke$arity$3 ? mutate.cljs$core$IFn$_invoke$arity$3(env__$2,key__$1,params__$1) : mutate.call(null,env__$2,key__$1,params__$1));
var map__62813__$1 = (((((!((map__62813 == null))))?(((((map__62813.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62813.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62813):map__62813);
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62813__$1,new cljs.core.Keyword(null,"action","action",-811238024));
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
var G__66249 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(res__$2,com.wsscode.pathom.parser.ast__GT_out_key(ast__$1),value);
var G__66250 = tail__$1;
res__$1 = G__66249;
G__62740__$1 = G__66250;
continue;
} else {
return res__$2;
}
break;
}
})();
com.wsscode.pathom.trace.trace_leave.cljs$core$IFn$_invoke$arity$3(env,trace_id__22799__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","parse-loop","com.wsscode.pathom.parser/parse-loop",1506208195)], null));

return res__22800__auto__;
} else {
var map__62834 = com.wsscode.pathom.parser.query__GT_ast(tx);
var map__62834__$1 = (((((!((map__62834 == null))))?(((((map__62834.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62834.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62834):map__62834);
var tx_ast = map__62834__$1;
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62834__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var tx__$1 = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(tx,cljs.core.assoc,new cljs.core.Keyword("com.wsscode.pathom.parser","ast","com.wsscode.pathom.parser/ast",1639399903),tx_ast);
var env__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword(null,"parser","parser",-1543495310),com$wsscode$pathom$parser$parser_$_self);
var res = cljs.core.PersistentArrayMap.EMPTY;
var G__62847 = children;
var vec__62848 = G__62847;
var seq__62849 = cljs.core.seq(vec__62848);
var first__62850 = cljs.core.first(seq__62849);
var seq__62849__$1 = cljs.core.next(seq__62849);
var map__62851 = first__62850;
var map__62851__$1 = (((((!((map__62851 == null))))?(((((map__62851.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62851.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62851):map__62851);
var ast = map__62851__$1;
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62851__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62851__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62851__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62851__$1,new cljs.core.Keyword(null,"params","params",710516235));
var tail = seq__62849__$1;
var res__$1 = res;
var G__62847__$1 = G__62847;
while(true){
var res__$2 = res__$1;
var vec__62920 = G__62847__$1;
var seq__62921 = cljs.core.seq(vec__62920);
var first__62922 = cljs.core.first(seq__62921);
var seq__62921__$1 = cljs.core.next(seq__62921);
var map__62923 = first__62922;
var map__62923__$1 = (((((!((map__62923 == null))))?(((((map__62923.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62923.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62923):map__62923);
var ast__$1 = map__62923__$1;
var query__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62923__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var key__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62923__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var type__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62923__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var params__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62923__$1,new cljs.core.Keyword(null,"params","params",710516235));
var tail__$1 = seq__62921__$1;
if(cljs.core.truth_(ast__$1)){
var _ = com.wsscode.pathom.trace.trace(env__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","process-key","com.wsscode.pathom.parser/process-key",1272337224),new cljs.core.Keyword(null,"key","key",-1516042587),key__$1], null));
var env__$2 = (function (){var G__62940 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([env__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ast","ast",-860334068),ast__$1,new cljs.core.Keyword(null,"query","query",-1288509510),query__$1], null)], 0));
var G__62940__$1 = (((query__$1 == null))?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__62940,new cljs.core.Keyword(null,"query","query",-1288509510)):G__62940);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"...","...",-1926939749,null),query__$1)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__62940__$1,new cljs.core.Keyword(null,"query","query",-1288509510),tx__$1);
} else {
return G__62940__$1;
}
})();
var value = (function (){var G__62951 = type__$1;
var G__62951__$1 = (((G__62951 instanceof cljs.core.Keyword))?G__62951.fqn:null);
switch (G__62951__$1) {
case "call":
if(cljs.core.truth_(mutate)){
} else {
throw (new Error(["Assert failed: ","Parse mutation attempted but no :mutate function supplied","\n","mutate"].join('')));
}

var map__62961 = (mutate.cljs$core$IFn$_invoke$arity$3 ? mutate.cljs$core$IFn$_invoke$arity$3(env__$2,key__$1,params__$1) : mutate.call(null,env__$2,key__$1,params__$1));
var map__62961__$1 = (((((!((map__62961 == null))))?(((((map__62961.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62961.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62961):map__62961);
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62961__$1,new cljs.core.Keyword(null,"action","action",-811238024));
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
var G__66253 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(res__$2,com.wsscode.pathom.parser.ast__GT_out_key(ast__$1),value);
var G__66254 = tail__$1;
res__$1 = G__66253;
G__62847__$1 = G__66254;
continue;
} else {
return res__$2;
}
break;
}
}
});
;})(map__62715,map__62715__$1,read,mutate))
});
com.wsscode.pathom.parser.async_parser = (function com$wsscode$pathom$parser$async_parser(p__62987){
var map__62988 = p__62987;
var map__62988__$1 = (((((!((map__62988 == null))))?(((((map__62988.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62988.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62988):map__62988);
var read = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62988__$1,new cljs.core.Keyword(null,"read","read",1140058661));
var mutate = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62988__$1,new cljs.core.Keyword(null,"mutate","mutate",1422419038));
return ((function (map__62988,map__62988__$1,read,mutate){
return (function com$wsscode$pathom$parser$async_parser_$_self(env,tx){
var c__45808__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__45808__auto__,map__62988,map__62988__$1,read,mutate){
return (function (){
var f__45809__auto__ = (function (){var switch__45525__auto__ = ((function (c__45808__auto__,map__62988,map__62988__$1,read,mutate){
return (function (state_63469){
var state_val_63475 = (state_63469[(1)]);
if((state_val_63475 === (121))){
var inst_63397 = (state_63469[(7)]);
var inst_63416 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_63397);
var state_63469__$1 = state_63469;
var statearr_63481_66259 = state_63469__$1;
(statearr_63481_66259[(2)] = inst_63416);

(statearr_63481_66259[(1)] = (123));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63475 === (65))){
var inst_63211 = ["Assert failed: ","Parse read attempted but no :read function supplied","\n","read"].join('');
var inst_63212 = (new Error(inst_63211));
var inst_63213 = (function(){throw inst_63212})();
var state_63469__$1 = state_63469;
var statearr_63486_66260 = state_63469__$1;
(statearr_63486_66260[(2)] = inst_63213);

(statearr_63486_66260[(1)] = (66));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63475 === (70))){
var inst_63082 = (state_63469[(8)]);
var inst_63073 = (state_63469[(9)]);
var inst_63115 = (state_63469[(10)]);
var inst_63232 = (state_63469[(2)]);
var inst_63233 = com.wsscode.pathom.parser.ast__GT_out_key(inst_63115);
var inst_63234 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_63073,inst_63233,inst_63232);
var inst_63073__$1 = inst_63234;
var inst_63074 = inst_63082;
var state_63469__$1 = (function (){var statearr_63490 = state_63469;
(statearr_63490[(9)] = inst_63073__$1);

(statearr_63490[(11)] = inst_63074);

return statearr_63490;
})();
var statearr_63491_66261 = state_63469__$1;
(statearr_63491_66261[(2)] = null);

(statearr_63491_66261[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63475 === (62))){
var inst_63205 = (state_63469[(2)]);
var state_63469__$1 = state_63469;
var statearr_63492_66263 = state_63469__$1;
(statearr_63492_66263[(2)] = inst_63205);

(statearr_63492_66263[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63475 === (74))){
var inst_63269 = (state_63469[(2)]);
var state_63469__$1 = state_63469;
if(cljs.core.truth_(inst_63269)){
var statearr_63493_66267 = state_63469__$1;
(statearr_63493_66267[(1)] = (78));

} else {
var statearr_63495_66268 = state_63469__$1;
(statearr_63495_66268[(1)] = (79));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63475 === (110))){
var inst_63441 = (state_63469[(12)]);
var inst_63441__$1 = (state_63469[(2)]);
var inst_63442 = com.wsscode.common.async_cljs.chan_QMARK_(inst_63441__$1);
var state_63469__$1 = (function (){var statearr_63498 = state_63469;
(statearr_63498[(12)] = inst_63441__$1);

return statearr_63498;
})();
if(inst_63442){
var statearr_63499_66269 = state_63469__$1;
(statearr_63499_66269[(1)] = (132));

} else {
var statearr_63500_66271 = state_63469__$1;
(statearr_63500_66271[(1)] = (133));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63475 === (130))){
var inst_63388 = (state_63469[(13)]);
var inst_63436 = (state_63469[(2)]);
var inst_63437 = (read.cljs$core$IFn$_invoke$arity$1 ? read.cljs$core$IFn$_invoke$arity$1(inst_63388) : read.call(null,inst_63388));
var state_63469__$1 = (function (){var statearr_63501 = state_63469;
(statearr_63501[(14)] = inst_63436);

return statearr_63501;
})();
var statearr_63502_66272 = state_63469__$1;
(statearr_63502_66272[(2)] = inst_63437);

(statearr_63502_66272[(1)] = (110));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63475 === (128))){
var state_63469__$1 = state_63469;
var statearr_63504_66273 = state_63469__$1;
(statearr_63504_66273[(2)] = null);

(statearr_63504_66273[(1)] = (130));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63475 === (7))){
var inst_63459 = (state_63469[(2)]);
var state_63469__$1 = state_63469;
var statearr_63506_66274 = state_63469__$1;
(statearr_63506_66274[(2)] = inst_63459);


cljs.core.async.impl.ioc_helpers.process_exception(state_63469__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63475 === (59))){
var inst_63200 = (state_63469[(15)]);
var inst_63199 = (state_63469[(2)]);
var inst_63200__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_63199,new cljs.core.Keyword(null,"action","action",-811238024));
var state_63469__$1 = (function (){var statearr_63510 = state_63469;
(statearr_63510[(15)] = inst_63200__$1);

return statearr_63510;
})();
if(cljs.core.truth_(inst_63200__$1)){
var statearr_63511_66275 = state_63469__$1;
(statearr_63511_66275[(1)] = (60));

} else {
var statearr_63512_66276 = state_63469__$1;
(statearr_63512_66276[(1)] = (61));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63475 === (86))){
var inst_63303 = (state_63469[(2)]);
var state_63469__$1 = state_63469;
var statearr_63513_66277 = state_63469__$1;
(statearr_63513_66277[(2)] = inst_63303);

(statearr_63513_66277[(1)] = (83));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63475 === (20))){
var state_63469__$1 = state_63469;
var statearr_63514_66281 = state_63469__$1;
(statearr_63514_66281[(2)] = true);

(statearr_63514_66281[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63475 === (72))){
var inst_63247 = (state_63469[(16)]);
var inst_63258 = inst_63247.cljs$lang$protocol_mask$partition0$;
var inst_63259 = (inst_63258 & (64));
var inst_63260 = inst_63247.cljs$core$ISeq$;
var inst_63261 = (cljs.core.PROTOCOL_SENTINEL === inst_63260);
var inst_63262 = ((inst_63259) || (inst_63261));
var state_63469__$1 = state_63469;
if(cljs.core.truth_(inst_63262)){
var statearr_63515_66282 = state_63469__$1;
(statearr_63515_66282[(1)] = (75));

} else {
var statearr_63517_66283 = state_63469__$1;
(statearr_63517_66283[(1)] = (76));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63475 === (58))){
var inst_63178 = (state_63469[(17)]);
var state_63469__$1 = state_63469;
var statearr_63520_66284 = state_63469__$1;
(statearr_63520_66284[(2)] = inst_63178);

(statearr_63520_66284[(1)] = (59));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63475 === (60))){
var inst_63200 = (state_63469[(15)]);
var inst_63202 = (inst_63200.cljs$core$IFn$_invoke$arity$0 ? inst_63200.cljs$core$IFn$_invoke$arity$0() : inst_63200.call(null));
var state_63469__$1 = state_63469;
var statearr_63521_66285 = state_63469__$1;
(statearr_63521_66285[(2)] = inst_63202);

(statearr_63521_66285[(1)] = (62));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63475 === (27))){
var inst_63002 = (state_63469[(18)]);
var inst_63240 = (state_63469[(2)]);
var inst_63241 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983)];
var inst_63242 = [new cljs.core.Keyword("com.wsscode.pathom.parser","parse-loop","com.wsscode.pathom.parser/parse-loop",1506208195)];
var inst_63243 = cljs.core.PersistentHashMap.fromArrays(inst_63241,inst_63242);
var inst_63244 = com.wsscode.pathom.trace.trace_leave.cljs$core$IFn$_invoke$arity$3(env,inst_63002,inst_63243);
var state_63469__$1 = (function (){var statearr_63522 = state_63469;
(statearr_63522[(19)] = inst_63244);

return statearr_63522;
})();
var statearr_63523_66290 = state_63469__$1;
(statearr_63523_66290[(2)] = inst_63240);

(statearr_63523_66290[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63475 === (1))){
var state_63469__$1 = state_63469;
var statearr_63527_66291 = state_63469__$1;
(statearr_63527_66291[(2)] = null);

(statearr_63527_66291[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63475 === (69))){
var inst_63224 = (state_63469[(20)]);
var state_63469__$1 = state_63469;
var statearr_63528_66292 = state_63469__$1;
(statearr_63528_66292[(2)] = inst_63224);

(statearr_63528_66292[(1)] = (70));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63475 === (101))){
var inst_63353 = (state_63469[(21)]);
var inst_63355 = (state_63469[(22)]);
var inst_63354 = (state_63469[(23)]);
var inst_63277 = (state_63469[(24)]);
var inst_63363 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword(null,"key","key",-1516042587)];
var inst_63365 = [new cljs.core.Keyword("com.wsscode.pathom.parser","process-key","com.wsscode.pathom.parser/process-key",1272337224),inst_63355];
var inst_63366 = cljs.core.PersistentHashMap.fromArrays(inst_63363,inst_63365);
var inst_63367 = com.wsscode.pathom.trace.trace(inst_63277,inst_63366);
var inst_63371 = [new cljs.core.Keyword(null,"ast","ast",-860334068),new cljs.core.Keyword(null,"query","query",-1288509510)];
var inst_63373 = [inst_63353,inst_63354];
var inst_63374 = cljs.core.PersistentHashMap.fromArrays(inst_63371,inst_63373);
var inst_63375 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_63277,inst_63374], 0));
var inst_63376 = (inst_63354 == null);
var state_63469__$1 = (function (){var statearr_63529 = state_63469;
(statearr_63529[(25)] = inst_63375);

(statearr_63529[(26)] = inst_63367);

return statearr_63529;
})();
if(cljs.core.truth_(inst_63376)){
var statearr_63531_66294 = state_63469__$1;
(statearr_63531_66294[(1)] = (104));

} else {
var statearr_63532_66295 = state_63469__$1;
(statearr_63532_66295[(1)] = (105));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63475 === (24))){
var inst_63042 = (state_63469[(27)]);
var state_63469__$1 = state_63469;
var statearr_63535_66296 = state_63469__$1;
(statearr_63535_66296[(2)] = inst_63042);

(statearr_63535_66296[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63475 === (102))){
var inst_63316 = (state_63469[(28)]);
var state_63469__$1 = state_63469;
var statearr_63537_66298 = state_63469__$1;
(statearr_63537_66298[(2)] = inst_63316);

(statearr_63537_66298[(1)] = (103));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63475 === (135))){
var inst_63445 = (state_63469[(2)]);
var inst_63446 = com.wsscode.common.async_cljs.throw_err(inst_63445);
var state_63469__$1 = state_63469;
var statearr_63538_66301 = state_63469__$1;
(statearr_63538_66301[(2)] = inst_63446);

(statearr_63538_66301[(1)] = (134));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63475 === (55))){
var state_63469__$1 = state_63469;
var statearr_63539_66303 = state_63469__$1;
(statearr_63539_66303[(2)] = false);

(statearr_63539_66303[(1)] = (56));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63475 === (85))){
var state_63469__$1 = state_63469;
var statearr_63540_66305 = state_63469__$1;
(statearr_63540_66305[(2)] = false);

(statearr_63540_66305[(1)] = (86));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63475 === (39))){
var inst_63238 = (state_63469[(2)]);
var state_63469__$1 = state_63469;
var statearr_63541_66306 = state_63469__$1;
(statearr_63541_66306[(2)] = inst_63238);

(statearr_63541_66306[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63475 === (88))){
var inst_63289 = (state_63469[(29)]);
var state_63469__$1 = state_63469;
var statearr_63548_66307 = state_63469__$1;
(statearr_63548_66307[(2)] = inst_63289);

(statearr_63548_66307[(1)] = (89));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63475 === (46))){
var inst_63224 = (state_63469[(20)]);
var inst_63224__$1 = (state_63469[(2)]);
var inst_63225 = com.wsscode.common.async_cljs.chan_QMARK_(inst_63224__$1);
var state_63469__$1 = (function (){var statearr_63550 = state_63469;
(statearr_63550[(20)] = inst_63224__$1);

return statearr_63550;
})();
if(inst_63225){
var statearr_63551_66311 = state_63469__$1;
(statearr_63551_66311[(1)] = (68));

} else {
var statearr_63552_66312 = state_63469__$1;
(statearr_63552_66312[(1)] = (69));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63475 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_63469,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_62997 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword("com.wsscode.pathom.trace","trace*","com.wsscode.pathom.trace/trace*",-80191782));
var state_63469__$1 = state_63469;
if(cljs.core.truth_(inst_62997)){
var statearr_63554_66314 = state_63469__$1;
(statearr_63554_66314[(1)] = (5));

} else {
var statearr_63555_66315 = state_63469__$1;
(statearr_63555_66315[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63475 === (77))){
var inst_63266 = (state_63469[(2)]);
var state_63469__$1 = state_63469;
var statearr_63558_66316 = state_63469__$1;
(statearr_63558_66316[(2)] = inst_63266);

(statearr_63558_66316[(1)] = (74));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63475 === (106))){
var inst_63354 = (state_63469[(23)]);
var inst_63381 = (state_63469[(2)]);
var inst_63382 = new cljs.core.Symbol(null,"...","...",-1926939749,null);
var inst_63383 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_63382,inst_63354);
var state_63469__$1 = (function (){var statearr_63563 = state_63469;
(statearr_63563[(30)] = inst_63381);

return statearr_63563;
})();
if(inst_63383){
var statearr_63564_66319 = state_63469__$1;
(statearr_63564_66319[(1)] = (107));

} else {
var statearr_63566_66320 = state_63469__$1;
(statearr_63566_66320[(1)] = (108));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63475 === (119))){
var state_63469__$1 = state_63469;
var statearr_63567_66321 = state_63469__$1;
(statearr_63567_66321[(2)] = false);

(statearr_63567_66321[(1)] = (120));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63475 === (95))){
var state_63469__$1 = state_63469;
var statearr_63568_66322 = state_63469__$1;
(statearr_63568_66322[(2)] = true);

(statearr_63568_66322[(1)] = (97));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63475 === (54))){
var state_63469__$1 = state_63469;
var statearr_63571_66323 = state_63469__$1;
(statearr_63571_66323[(2)] = true);

(statearr_63571_66323[(1)] = (56));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63475 === (92))){
var inst_63330 = (state_63469[(31)]);
var inst_63337 = inst_63330.cljs$lang$protocol_mask$partition0$;
var inst_63338 = (inst_63337 & (64));
var inst_63339 = inst_63330.cljs$core$ISeq$;
var inst_63340 = (cljs.core.PROTOCOL_SENTINEL === inst_63339);
var inst_63341 = ((inst_63338) || (inst_63340));
var state_63469__$1 = state_63469;
if(cljs.core.truth_(inst_63341)){
var statearr_63572_66324 = state_63469__$1;
(statearr_63572_66324[(1)] = (95));

} else {
var statearr_63573_66325 = state_63469__$1;
(statearr_63573_66325[(1)] = (96));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63475 === (104))){
var inst_63375 = (state_63469[(25)]);
var inst_63378 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(inst_63375,new cljs.core.Keyword(null,"query","query",-1288509510));
var state_63469__$1 = state_63469;
var statearr_63574_66326 = state_63469__$1;
(statearr_63574_66326[(2)] = inst_63378);

(statearr_63574_66326[(1)] = (106));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63475 === (15))){
var inst_63004 = (state_63469[(32)]);
var state_63469__$1 = state_63469;
var statearr_63575_66327 = state_63469__$1;
(statearr_63575_66327[(2)] = inst_63004);

(statearr_63575_66327[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63475 === (48))){
var state_63469__$1 = state_63469;
var statearr_63578_66328 = state_63469__$1;
(statearr_63578_66328[(2)] = null);

(statearr_63578_66328[(1)] = (50));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63475 === (50))){
var inst_63118 = (state_63469[(33)]);
var inst_63123 = (state_63469[(34)]);
var inst_63161 = (state_63469[(35)]);
var inst_63178 = (state_63469[(17)]);
var inst_63176 = (state_63469[(2)]);
var inst_63178__$1 = (mutate.cljs$core$IFn$_invoke$arity$3 ? mutate.cljs$core$IFn$_invoke$arity$3(inst_63161,inst_63118,inst_63123) : mutate.call(null,inst_63161,inst_63118,inst_63123));
var inst_63180 = (inst_63178__$1 == null);
var inst_63181 = cljs.core.not(inst_63180);
var state_63469__$1 = (function (){var statearr_63580 = state_63469;
(statearr_63580[(17)] = inst_63178__$1);

(statearr_63580[(36)] = inst_63176);

return statearr_63580;
})();
if(inst_63181){
var statearr_63581_66331 = state_63469__$1;
(statearr_63581_66331[(1)] = (51));

} else {
var statearr_63582_66332 = state_63469__$1;
(statearr_63582_66332[(1)] = (52));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63475 === (116))){
var state_63469__$1 = state_63469;
var statearr_63583_66334 = state_63469__$1;
(statearr_63583_66334[(2)] = false);

(statearr_63583_66334[(1)] = (117));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63475 === (75))){
var state_63469__$1 = state_63469;
var statearr_63584_66335 = state_63469__$1;
(statearr_63584_66335[(2)] = true);

(statearr_63584_66335[(1)] = (77));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63475 === (99))){
var inst_63330 = (state_63469[(31)]);
var state_63469__$1 = state_63469;
var statearr_63585_66339 = state_63469__$1;
(statearr_63585_66339[(2)] = inst_63330);

(statearr_63585_66339[(1)] = (100));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63475 === (21))){
var state_63469__$1 = state_63469;
var statearr_63587_66340 = state_63469__$1;
(statearr_63587_66340[(2)] = false);

(statearr_63587_66340[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63475 === (31))){
var state_63469__$1 = state_63469;
var statearr_63591_66341 = state_63469__$1;
(statearr_63591_66341[(2)] = true);

(statearr_63591_66341[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63475 === (113))){
var inst_63391 = ["Assert failed: ","Parse mutation attempted but no :mutate function supplied","\n","mutate"].join('');
var inst_63392 = (new Error(inst_63391));
var inst_63393 = (function(){throw inst_63392})();
var state_63469__$1 = state_63469;
var statearr_63593_66343 = state_63469__$1;
(statearr_63593_66343[(2)] = inst_63393);

(statearr_63593_66343[(1)] = (114));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63475 === (32))){
var state_63469__$1 = state_63469;
var statearr_63594_66344 = state_63469__$1;
(statearr_63594_66344[(2)] = false);

(statearr_63594_66344[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63475 === (40))){
var inst_63145 = (state_63469[(37)]);
var inst_63148 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(inst_63145,new cljs.core.Keyword(null,"query","query",-1288509510));
var state_63469__$1 = state_63469;
var statearr_63595_66346 = state_63469__$1;
(statearr_63595_66346[(2)] = inst_63148);

(statearr_63595_66346[(1)] = (42));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63475 === (129))){
var inst_63432 = ["Assert failed: ","Parse read attempted but no :read function supplied","\n","read"].join('');
var inst_63433 = (new Error(inst_63432));
var inst_63434 = (function(){throw inst_63433})();
var state_63469__$1 = state_63469;
var statearr_63596_66347 = state_63469__$1;
(statearr_63596_66347[(2)] = inst_63434);

(statearr_63596_66347[(1)] = (130));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63475 === (91))){
var inst_63457 = (state_63469[(2)]);
var state_63469__$1 = state_63469;
var statearr_63597_66348 = state_63469__$1;
(statearr_63597_66348[(2)] = inst_63457);

(statearr_63597_66348[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63475 === (117))){
var inst_63414 = (state_63469[(2)]);
var state_63469__$1 = state_63469;
if(cljs.core.truth_(inst_63414)){
var statearr_63602_66349 = state_63469__$1;
(statearr_63602_66349[(1)] = (121));

} else {
var statearr_63605_66350 = state_63469__$1;
(statearr_63605_66350[(1)] = (122));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63475 === (108))){
var inst_63381 = (state_63469[(30)]);
var state_63469__$1 = state_63469;
var statearr_63615_66351 = state_63469__$1;
(statearr_63615_66351[(2)] = inst_63381);

(statearr_63615_66351[(1)] = (109));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63475 === (56))){
var inst_63191 = (state_63469[(2)]);
var state_63469__$1 = state_63469;
var statearr_63616_66352 = state_63469__$1;
(statearr_63616_66352[(2)] = inst_63191);

(statearr_63616_66352[(1)] = (53));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63475 === (33))){
var inst_63106 = (state_63469[(2)]);
var state_63469__$1 = state_63469;
var statearr_63618_66353 = state_63469__$1;
(statearr_63618_66353[(2)] = inst_63106);

(statearr_63618_66353[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63475 === (13))){
var inst_63019 = (state_63469[(2)]);
var state_63469__$1 = state_63469;
var statearr_63619_66354 = state_63469__$1;
(statearr_63619_66354[(2)] = inst_63019);

(statearr_63619_66354[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63475 === (22))){
var inst_63060 = (state_63469[(2)]);
var state_63469__$1 = state_63469;
var statearr_63624_66356 = state_63469__$1;
(statearr_63624_66356[(2)] = inst_63060);

(statearr_63624_66356[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63475 === (90))){
var inst_63330 = (state_63469[(31)]);
var inst_63317 = (state_63469[(38)]);
var inst_63329 = cljs.core.seq(inst_63317);
var inst_63330__$1 = cljs.core.first(inst_63329);
var inst_63331 = cljs.core.next(inst_63329);
var inst_63334 = (inst_63330__$1 == null);
var inst_63335 = cljs.core.not(inst_63334);
var state_63469__$1 = (function (){var statearr_63630 = state_63469;
(statearr_63630[(31)] = inst_63330__$1);

(statearr_63630[(39)] = inst_63331);

return statearr_63630;
})();
if(inst_63335){
var statearr_63633_66357 = state_63469__$1;
(statearr_63633_66357[(1)] = (92));

} else {
var statearr_63635_66358 = state_63469__$1;
(statearr_63635_66358[(1)] = (93));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63475 === (109))){
var inst_63356 = (state_63469[(40)]);
var inst_63388 = (state_63469[(2)]);
var state_63469__$1 = (function (){var statearr_63639 = state_63469;
(statearr_63639[(13)] = inst_63388);

return statearr_63639;
})();
var G__63640_66362 = inst_63356;
var G__63640_66363__$1 = (((G__63640_66362 instanceof cljs.core.Keyword))?G__63640_66362.fqn:null);
switch (G__63640_66363__$1) {
case "call":
var statearr_63641_66365 = state_63469__$1;
(statearr_63641_66365[(1)] = (111));


break;
case "prop":
case "join":
case "union":
var statearr_63642_66366 = state_63469__$1;
(statearr_63642_66366[(1)] = (127));


break;
default:
var statearr_63643_66367 = state_63469__$1;
(statearr_63643_66367[(1)] = (131));



}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63475 === (36))){
var inst_63115 = (state_63469[(10)]);
var inst_63115__$1 = (state_63469[(2)]);
var inst_63117 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_63115__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var inst_63118 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_63115__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var inst_63121 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_63115__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var inst_63123 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_63115__$1,new cljs.core.Keyword(null,"params","params",710516235));
var state_63469__$1 = (function (){var statearr_63647 = state_63469;
(statearr_63647[(41)] = inst_63117);

(statearr_63647[(33)] = inst_63118);

(statearr_63647[(34)] = inst_63123);

(statearr_63647[(10)] = inst_63115__$1);

(statearr_63647[(42)] = inst_63121);

return statearr_63647;
})();
if(cljs.core.truth_(inst_63115__$1)){
var statearr_63648_66369 = state_63469__$1;
(statearr_63648_66369[(1)] = (37));

} else {
var statearr_63650_66370 = state_63469__$1;
(statearr_63650_66370[(1)] = (38));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63475 === (41))){
var inst_63145 = (state_63469[(37)]);
var state_63469__$1 = state_63469;
var statearr_63651_66371 = state_63469__$1;
(statearr_63651_66371[(2)] = inst_63145);

(statearr_63651_66371[(1)] = (42));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63475 === (118))){
var state_63469__$1 = state_63469;
var statearr_63652_66372 = state_63469__$1;
(statearr_63652_66372[(2)] = true);

(statearr_63652_66372[(1)] = (120));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63475 === (89))){
var inst_63275 = (state_63469[(43)]);
var inst_63287 = (state_63469[(44)]);
var inst_63311 = (state_63469[(2)]);
var inst_63312 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_63311,new cljs.core.Keyword(null,"query","query",-1288509510));
var inst_63313 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_63311,new cljs.core.Keyword(null,"key","key",-1516042587));
var inst_63314 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_63311,new cljs.core.Keyword(null,"type","type",1174270348));
var inst_63315 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_63311,new cljs.core.Keyword(null,"params","params",710516235));
var inst_63316 = inst_63287;
var inst_63317 = inst_63275;
var state_63469__$1 = (function (){var statearr_63656 = state_63469;
(statearr_63656[(38)] = inst_63317);

(statearr_63656[(45)] = inst_63315);

(statearr_63656[(28)] = inst_63316);

(statearr_63656[(46)] = inst_63314);

(statearr_63656[(47)] = inst_63312);

(statearr_63656[(48)] = inst_63313);

return statearr_63656;
})();
var statearr_63658_66376 = state_63469__$1;
(statearr_63658_66376[(2)] = null);

(statearr_63658_66376[(1)] = (90));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63475 === (100))){
var inst_63353 = (state_63469[(21)]);
var inst_63353__$1 = (state_63469[(2)]);
var inst_63354 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_63353__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var inst_63355 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_63353__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var inst_63356 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_63353__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var inst_63357 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_63353__$1,new cljs.core.Keyword(null,"params","params",710516235));
var state_63469__$1 = (function (){var statearr_63664 = state_63469;
(statearr_63664[(21)] = inst_63353__$1);

(statearr_63664[(22)] = inst_63355);

(statearr_63664[(49)] = inst_63357);

(statearr_63664[(40)] = inst_63356);

(statearr_63664[(23)] = inst_63354);

return statearr_63664;
})();
if(cljs.core.truth_(inst_63353__$1)){
var statearr_63665_66377 = state_63469__$1;
(statearr_63665_66377[(1)] = (101));

} else {
var statearr_63666_66378 = state_63469__$1;
(statearr_63666_66378[(1)] = (102));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63475 === (131))){
var state_63469__$1 = state_63469;
var statearr_63669_66379 = state_63469__$1;
(statearr_63669_66379[(2)] = null);

(statearr_63669_66379[(1)] = (110));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63475 === (122))){
var inst_63397 = (state_63469[(7)]);
var state_63469__$1 = state_63469;
var statearr_63671_66380 = state_63469__$1;
(statearr_63671_66380[(2)] = inst_63397);

(statearr_63671_66380[(1)] = (123));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63475 === (43))){
var inst_63151 = (state_63469[(50)]);
var inst_63029 = (state_63469[(51)]);
var inst_63158 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_63151,new cljs.core.Keyword(null,"query","query",-1288509510),inst_63029);
var state_63469__$1 = state_63469;
var statearr_63672_66381 = state_63469__$1;
(statearr_63672_66381[(2)] = inst_63158);

(statearr_63672_66381[(1)] = (45));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63475 === (61))){
var state_63469__$1 = state_63469;
var statearr_63673_66382 = state_63469__$1;
(statearr_63673_66382[(2)] = null);

(statearr_63673_66382[(1)] = (62));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63475 === (29))){
var state_63469__$1 = state_63469;
var statearr_63674_66384 = state_63469__$1;
(statearr_63674_66384[(2)] = false);

(statearr_63674_66384[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63475 === (44))){
var inst_63151 = (state_63469[(50)]);
var state_63469__$1 = state_63469;
var statearr_63675_66385 = state_63469__$1;
(statearr_63675_66385[(2)] = inst_63151);

(statearr_63675_66385[(1)] = (45));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63475 === (93))){
var state_63469__$1 = state_63469;
var statearr_63676_66388 = state_63469__$1;
(statearr_63676_66388[(2)] = false);

(statearr_63676_66388[(1)] = (94));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63475 === (6))){
var inst_63247 = (state_63469[(16)]);
var inst_63247__$1 = com.wsscode.pathom.parser.query__GT_ast(tx);
var inst_63251 = (inst_63247__$1 == null);
var inst_63252 = cljs.core.not(inst_63251);
var state_63469__$1 = (function (){var statearr_63678 = state_63469;
(statearr_63678[(16)] = inst_63247__$1);

return statearr_63678;
})();
if(inst_63252){
var statearr_63684_66391 = state_63469__$1;
(statearr_63684_66391[(1)] = (72));

} else {
var statearr_63685_66392 = state_63469__$1;
(statearr_63685_66392[(1)] = (73));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63475 === (111))){
var state_63469__$1 = state_63469;
if(cljs.core.truth_(mutate)){
var statearr_63690_66393 = state_63469__$1;
(statearr_63690_66393[(1)] = (112));

} else {
var statearr_63691_66394 = state_63469__$1;
(statearr_63691_66394[(1)] = (113));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63475 === (28))){
var inst_63081 = (state_63469[(52)]);
var inst_63094 = inst_63081.cljs$lang$protocol_mask$partition0$;
var inst_63095 = (inst_63094 & (64));
var inst_63100 = inst_63081.cljs$core$ISeq$;
var inst_63101 = (cljs.core.PROTOCOL_SENTINEL === inst_63100);
var inst_63102 = ((inst_63095) || (inst_63101));
var state_63469__$1 = state_63469;
if(cljs.core.truth_(inst_63102)){
var statearr_63696_66396 = state_63469__$1;
(statearr_63696_66396[(1)] = (31));

} else {
var statearr_63699_66397 = state_63469__$1;
(statearr_63699_66397[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63475 === (134))){
var inst_63353 = (state_63469[(21)]);
var inst_63316 = (state_63469[(28)]);
var inst_63331 = (state_63469[(39)]);
var inst_63449 = (state_63469[(2)]);
var inst_63450 = com.wsscode.pathom.parser.ast__GT_out_key(inst_63353);
var inst_63451 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_63316,inst_63450,inst_63449);
var inst_63316__$1 = inst_63451;
var inst_63317 = inst_63331;
var state_63469__$1 = (function (){var statearr_63702 = state_63469;
(statearr_63702[(38)] = inst_63317);

(statearr_63702[(28)] = inst_63316__$1);

return statearr_63702;
})();
var statearr_63705_66398 = state_63469__$1;
(statearr_63705_66398[(2)] = null);

(statearr_63705_66398[(1)] = (90));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63475 === (64))){
var state_63469__$1 = state_63469;
var statearr_63709_66402 = state_63469__$1;
(statearr_63709_66402[(2)] = null);

(statearr_63709_66402[(1)] = (66));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63475 === (103))){
var inst_63455 = (state_63469[(2)]);
var state_63469__$1 = state_63469;
var statearr_63711_66403 = state_63469__$1;
(statearr_63711_66403[(2)] = inst_63455);

(statearr_63711_66403[(1)] = (91));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63475 === (51))){
var inst_63178 = (state_63469[(17)]);
var inst_63183 = inst_63178.cljs$lang$protocol_mask$partition0$;
var inst_63184 = (inst_63183 & (64));
var inst_63185 = inst_63178.cljs$core$ISeq$;
var inst_63186 = (cljs.core.PROTOCOL_SENTINEL === inst_63185);
var inst_63187 = ((inst_63184) || (inst_63186));
var state_63469__$1 = state_63469;
if(cljs.core.truth_(inst_63187)){
var statearr_63712_66404 = state_63469__$1;
(statearr_63712_66404[(1)] = (54));

} else {
var statearr_63713_66405 = state_63469__$1;
(statearr_63713_66405[(1)] = (55));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63475 === (25))){
var inst_63040 = (state_63469[(53)]);
var inst_63028 = (state_63469[(54)]);
var inst_63068 = (state_63469[(2)]);
var inst_63069 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_63068,new cljs.core.Keyword(null,"query","query",-1288509510));
var inst_63070 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_63068,new cljs.core.Keyword(null,"key","key",-1516042587));
var inst_63071 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_63068,new cljs.core.Keyword(null,"type","type",1174270348));
var inst_63072 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_63068,new cljs.core.Keyword(null,"params","params",710516235));
var inst_63073 = inst_63040;
var inst_63074 = inst_63028;
var state_63469__$1 = (function (){var statearr_63714 = state_63469;
(statearr_63714[(55)] = inst_63072);

(statearr_63714[(56)] = inst_63071);

(statearr_63714[(57)] = inst_63070);

(statearr_63714[(9)] = inst_63073);

(statearr_63714[(11)] = inst_63074);

(statearr_63714[(58)] = inst_63069);

return statearr_63714;
})();
var statearr_63718_66409 = state_63469__$1;
(statearr_63718_66409[(2)] = null);

(statearr_63718_66409[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63475 === (34))){
var inst_63081 = (state_63469[(52)]);
var inst_63112 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_63081);
var state_63469__$1 = state_63469;
var statearr_63720_66410 = state_63469__$1;
(statearr_63720_66410[(2)] = inst_63112);

(statearr_63720_66410[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63475 === (125))){
var state_63469__$1 = state_63469;
var statearr_63722_66411 = state_63469__$1;
(statearr_63722_66411[(2)] = null);

(statearr_63722_66411[(1)] = (126));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63475 === (17))){
var inst_63042 = (state_63469[(27)]);
var inst_63052 = inst_63042.cljs$lang$protocol_mask$partition0$;
var inst_63053 = (inst_63052 & (64));
var inst_63054 = inst_63042.cljs$core$ISeq$;
var inst_63055 = (cljs.core.PROTOCOL_SENTINEL === inst_63054);
var inst_63056 = ((inst_63053) || (inst_63055));
var state_63469__$1 = state_63469;
if(cljs.core.truth_(inst_63056)){
var statearr_63723_66414 = state_63469__$1;
(statearr_63723_66414[(1)] = (20));

} else {
var statearr_63724_66415 = state_63469__$1;
(statearr_63724_66415[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63475 === (3))){
var inst_62993 = (state_63469[(2)]);
var state_63469__$1 = state_63469;
var statearr_63726_66416 = state_63469__$1;
(statearr_63726_66416[(2)] = inst_62993);


cljs.core.async.impl.ioc_helpers.process_exception(state_63469__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63475 === (12))){
var state_63469__$1 = state_63469;
var statearr_63729_66419 = state_63469__$1;
(statearr_63729_66419[(2)] = false);

(statearr_63729_66419[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63475 === (2))){
var inst_63461 = (state_63469[(2)]);
var state_63469__$1 = state_63469;
return cljs.core.async.impl.ioc_helpers.return_chan(state_63469__$1,inst_63461);
} else {
if((state_val_63475 === (66))){
var inst_63161 = (state_63469[(35)]);
var inst_63215 = (state_63469[(2)]);
var inst_63216 = (read.cljs$core$IFn$_invoke$arity$1 ? read.cljs$core$IFn$_invoke$arity$1(inst_63161) : read.call(null,inst_63161));
var state_63469__$1 = (function (){var statearr_63733 = state_63469;
(statearr_63733[(59)] = inst_63215);

return statearr_63733;
})();
var statearr_63734_66421 = state_63469__$1;
(statearr_63734_66421[(2)] = inst_63216);

(statearr_63734_66421[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63475 === (107))){
var inst_63276 = (state_63469[(60)]);
var inst_63381 = (state_63469[(30)]);
var inst_63385 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_63381,new cljs.core.Keyword(null,"query","query",-1288509510),inst_63276);
var state_63469__$1 = state_63469;
var statearr_63738_66422 = state_63469__$1;
(statearr_63738_66422[(2)] = inst_63385);

(statearr_63738_66422[(1)] = (109));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63475 === (23))){
var inst_63042 = (state_63469[(27)]);
var inst_63065 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_63042);
var state_63469__$1 = state_63469;
var statearr_63741_66426 = state_63469__$1;
(statearr_63741_66426[(2)] = inst_63065);

(statearr_63741_66426[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63475 === (47))){
var state_63469__$1 = state_63469;
if(cljs.core.truth_(mutate)){
var statearr_63743_66427 = state_63469__$1;
(statearr_63743_66427[(1)] = (48));

} else {
var statearr_63744_66428 = state_63469__$1;
(statearr_63744_66428[(1)] = (49));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63475 === (35))){
var inst_63081 = (state_63469[(52)]);
var state_63469__$1 = state_63469;
var statearr_63747_66429 = state_63469__$1;
(statearr_63747_66429[(2)] = inst_63081);

(statearr_63747_66429[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63475 === (127))){
var state_63469__$1 = state_63469;
if(cljs.core.truth_(read)){
var statearr_63749_66430 = state_63469__$1;
(statearr_63749_66430[(1)] = (128));

} else {
var statearr_63750_66431 = state_63469__$1;
(statearr_63750_66431[(1)] = (129));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63475 === (82))){
var state_63469__$1 = state_63469;
var statearr_63755_66432 = state_63469__$1;
(statearr_63755_66432[(2)] = false);

(statearr_63755_66432[(1)] = (83));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63475 === (76))){
var state_63469__$1 = state_63469;
var statearr_63756_66433 = state_63469__$1;
(statearr_63756_66433[(2)] = false);

(statearr_63756_66433[(1)] = (77));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63475 === (97))){
var inst_63345 = (state_63469[(2)]);
var state_63469__$1 = state_63469;
var statearr_63757_66434 = state_63469__$1;
(statearr_63757_66434[(2)] = inst_63345);

(statearr_63757_66434[(1)] = (94));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63475 === (19))){
var inst_63063 = (state_63469[(2)]);
var state_63469__$1 = state_63469;
if(cljs.core.truth_(inst_63063)){
var statearr_63760_66436 = state_63469__$1;
(statearr_63760_66436[(1)] = (23));

} else {
var statearr_63762_66437 = state_63469__$1;
(statearr_63762_66437[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63475 === (57))){
var inst_63178 = (state_63469[(17)]);
var inst_63196 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_63178);
var state_63469__$1 = state_63469;
var statearr_63763_66438 = state_63469__$1;
(statearr_63763_66438[(2)] = inst_63196);

(statearr_63763_66438[(1)] = (59));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63475 === (68))){
var inst_63224 = (state_63469[(20)]);
var state_63469__$1 = state_63469;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63469__$1,(71),inst_63224);
} else {
if((state_val_63475 === (11))){
var state_63469__$1 = state_63469;
var statearr_63764_66442 = state_63469__$1;
(statearr_63764_66442[(2)] = true);

(statearr_63764_66442[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63475 === (115))){
var inst_63397 = (state_63469[(7)]);
var inst_63403 = inst_63397.cljs$lang$protocol_mask$partition0$;
var inst_63404 = (inst_63403 & (64));
var inst_63405 = inst_63397.cljs$core$ISeq$;
var inst_63406 = (cljs.core.PROTOCOL_SENTINEL === inst_63405);
var inst_63407 = ((inst_63404) || (inst_63406));
var state_63469__$1 = state_63469;
if(cljs.core.truth_(inst_63407)){
var statearr_63770_66443 = state_63469__$1;
(statearr_63770_66443[(1)] = (118));

} else {
var statearr_63771_66444 = state_63469__$1;
(statearr_63771_66444[(1)] = (119));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63475 === (9))){
var state_63469__$1 = state_63469;
var statearr_63772_66447 = state_63469__$1;
(statearr_63772_66447[(2)] = false);

(statearr_63772_66447[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63475 === (5))){
var inst_63004 = (state_63469[(32)]);
var inst_62999 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983)];
var inst_63000 = [new cljs.core.Keyword("com.wsscode.pathom.parser","parse-loop","com.wsscode.pathom.parser/parse-loop",1506208195)];
var inst_63001 = cljs.core.PersistentHashMap.fromArrays(inst_62999,inst_63000);
var inst_63002 = com.wsscode.pathom.trace.trace_enter.cljs$core$IFn$_invoke$arity$2(env,inst_63001);
var inst_63004__$1 = com.wsscode.pathom.parser.query__GT_ast(tx);
var inst_63006 = (inst_63004__$1 == null);
var inst_63007 = cljs.core.not(inst_63006);
var state_63469__$1 = (function (){var statearr_63773 = state_63469;
(statearr_63773[(18)] = inst_63002);

(statearr_63773[(32)] = inst_63004__$1);

return statearr_63773;
})();
if(inst_63007){
var statearr_63776_66449 = state_63469__$1;
(statearr_63776_66449[(1)] = (8));

} else {
var statearr_63778_66450 = state_63469__$1;
(statearr_63778_66450[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63475 === (112))){
var state_63469__$1 = state_63469;
var statearr_63779_66451 = state_63469__$1;
(statearr_63779_66451[(2)] = null);

(statearr_63779_66451[(1)] = (114));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63475 === (83))){
var inst_63306 = (state_63469[(2)]);
var state_63469__$1 = state_63469;
if(cljs.core.truth_(inst_63306)){
var statearr_63782_66452 = state_63469__$1;
(statearr_63782_66452[(1)] = (87));

} else {
var statearr_63783_66453 = state_63469__$1;
(statearr_63783_66453[(1)] = (88));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63475 === (14))){
var inst_63004 = (state_63469[(32)]);
var inst_63024 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_63004);
var state_63469__$1 = state_63469;
var statearr_63785_66454 = state_63469__$1;
(statearr_63785_66454[(2)] = inst_63024);

(statearr_63785_66454[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63475 === (45))){
var inst_63121 = (state_63469[(42)]);
var inst_63161 = (state_63469[(2)]);
var state_63469__$1 = (function (){var statearr_63788 = state_63469;
(statearr_63788[(35)] = inst_63161);

return statearr_63788;
})();
var G__63789_66455 = inst_63121;
var G__63789_66456__$1 = (((G__63789_66455 instanceof cljs.core.Keyword))?G__63789_66455.fqn:null);
switch (G__63789_66456__$1) {
case "call":
var statearr_63791_66458 = state_63469__$1;
(statearr_63791_66458[(1)] = (47));


break;
case "prop":
case "join":
case "union":
var statearr_63792_66459 = state_63469__$1;
(statearr_63792_66459[(1)] = (63));


break;
default:
var statearr_63793_66460 = state_63469__$1;
(statearr_63793_66460[(1)] = (67));



}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63475 === (53))){
var inst_63194 = (state_63469[(2)]);
var state_63469__$1 = state_63469;
if(cljs.core.truth_(inst_63194)){
var statearr_63798_66462 = state_63469__$1;
(statearr_63798_66462[(1)] = (57));

} else {
var statearr_63800_66463 = state_63469__$1;
(statearr_63800_66463[(1)] = (58));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63475 === (78))){
var inst_63247 = (state_63469[(16)]);
var inst_63271 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_63247);
var state_63469__$1 = state_63469;
var statearr_63807_66464 = state_63469__$1;
(statearr_63807_66464[(2)] = inst_63271);

(statearr_63807_66464[(1)] = (80));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63475 === (132))){
var inst_63441 = (state_63469[(12)]);
var state_63469__$1 = state_63469;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63469__$1,(135),inst_63441);
} else {
if((state_val_63475 === (26))){
var inst_63074 = (state_63469[(11)]);
var inst_63081 = (state_63469[(52)]);
var inst_63080 = cljs.core.seq(inst_63074);
var inst_63081__$1 = cljs.core.first(inst_63080);
var inst_63082 = cljs.core.next(inst_63080);
var inst_63084 = (inst_63081__$1 == null);
var inst_63085 = cljs.core.not(inst_63084);
var state_63469__$1 = (function (){var statearr_63811 = state_63469;
(statearr_63811[(8)] = inst_63082);

(statearr_63811[(52)] = inst_63081__$1);

return statearr_63811;
})();
if(inst_63085){
var statearr_63812_66470 = state_63469__$1;
(statearr_63812_66470[(1)] = (28));

} else {
var statearr_63813_66471 = state_63469__$1;
(statearr_63813_66471[(1)] = (29));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63475 === (123))){
var inst_63420 = (state_63469[(61)]);
var inst_63419 = (state_63469[(2)]);
var inst_63420__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_63419,new cljs.core.Keyword(null,"action","action",-811238024));
var state_63469__$1 = (function (){var statearr_63816 = state_63469;
(statearr_63816[(61)] = inst_63420__$1);

return statearr_63816;
})();
if(cljs.core.truth_(inst_63420__$1)){
var statearr_63817_66472 = state_63469__$1;
(statearr_63817_66472[(1)] = (124));

} else {
var statearr_63823_66473 = state_63469__$1;
(statearr_63823_66473[(1)] = (125));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63475 === (16))){
var inst_63028 = (state_63469[(54)]);
var inst_63042 = (state_63469[(27)]);
var inst_63027 = (state_63469[(2)]);
var inst_63028__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_63027,new cljs.core.Keyword(null,"children","children",-940561982));
var inst_63029 = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(tx,cljs.core.assoc,new cljs.core.Keyword("com.wsscode.pathom.parser","ast","com.wsscode.pathom.parser/ast",1639399903),inst_63027);
var inst_63030 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword(null,"parser","parser",-1543495310),com$wsscode$pathom$parser$async_parser_$_self);
var inst_63040 = cljs.core.PersistentHashMap.EMPTY;
var inst_63041 = cljs.core.seq(inst_63028__$1);
var inst_63042__$1 = cljs.core.first(inst_63041);
var inst_63044 = cljs.core.next(inst_63041);
var inst_63048 = (inst_63042__$1 == null);
var inst_63049 = cljs.core.not(inst_63048);
var state_63469__$1 = (function (){var statearr_63824 = state_63469;
(statearr_63824[(62)] = inst_63044);

(statearr_63824[(53)] = inst_63040);

(statearr_63824[(54)] = inst_63028__$1);

(statearr_63824[(51)] = inst_63029);

(statearr_63824[(27)] = inst_63042__$1);

(statearr_63824[(63)] = inst_63030);

return statearr_63824;
})();
if(inst_63049){
var statearr_63826_66476 = state_63469__$1;
(statearr_63826_66476[(1)] = (17));

} else {
var statearr_63829_66477 = state_63469__$1;
(statearr_63829_66477[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63475 === (133))){
var inst_63441 = (state_63469[(12)]);
var state_63469__$1 = state_63469;
var statearr_63830_66478 = state_63469__$1;
(statearr_63830_66478[(2)] = inst_63441);

(statearr_63830_66478[(1)] = (134));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63475 === (81))){
var inst_63289 = (state_63469[(29)]);
var inst_63295 = inst_63289.cljs$lang$protocol_mask$partition0$;
var inst_63296 = (inst_63295 & (64));
var inst_63297 = inst_63289.cljs$core$ISeq$;
var inst_63298 = (cljs.core.PROTOCOL_SENTINEL === inst_63297);
var inst_63299 = ((inst_63296) || (inst_63298));
var state_63469__$1 = state_63469;
if(cljs.core.truth_(inst_63299)){
var statearr_63836_66479 = state_63469__$1;
(statearr_63836_66479[(1)] = (84));

} else {
var statearr_63837_66480 = state_63469__$1;
(statearr_63837_66480[(1)] = (85));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63475 === (120))){
var inst_63411 = (state_63469[(2)]);
var state_63469__$1 = state_63469;
var statearr_63840_66481 = state_63469__$1;
(statearr_63840_66481[(2)] = inst_63411);

(statearr_63840_66481[(1)] = (117));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63475 === (79))){
var inst_63247 = (state_63469[(16)]);
var state_63469__$1 = state_63469;
var statearr_63842_66482 = state_63469__$1;
(statearr_63842_66482[(2)] = inst_63247);

(statearr_63842_66482[(1)] = (80));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63475 === (38))){
var inst_63073 = (state_63469[(9)]);
var state_63469__$1 = state_63469;
var statearr_63843_66483 = state_63469__$1;
(statearr_63843_66483[(2)] = inst_63073);

(statearr_63843_66483[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63475 === (126))){
var inst_63425 = (state_63469[(2)]);
var state_63469__$1 = state_63469;
var statearr_63852_66484 = state_63469__$1;
(statearr_63852_66484[(2)] = inst_63425);

(statearr_63852_66484[(1)] = (110));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63475 === (98))){
var inst_63330 = (state_63469[(31)]);
var inst_63350 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_63330);
var state_63469__$1 = state_63469;
var statearr_63854_66485 = state_63469__$1;
(statearr_63854_66485[(2)] = inst_63350);

(statearr_63854_66485[(1)] = (100));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63475 === (124))){
var inst_63420 = (state_63469[(61)]);
var inst_63422 = (inst_63420.cljs$core$IFn$_invoke$arity$0 ? inst_63420.cljs$core$IFn$_invoke$arity$0() : inst_63420.call(null));
var state_63469__$1 = state_63469;
var statearr_63859_66486 = state_63469__$1;
(statearr_63859_66486[(2)] = inst_63422);

(statearr_63859_66486[(1)] = (126));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63475 === (87))){
var inst_63289 = (state_63469[(29)]);
var inst_63308 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_63289);
var state_63469__$1 = state_63469;
var statearr_63861_66487 = state_63469__$1;
(statearr_63861_66487[(2)] = inst_63308);

(statearr_63861_66487[(1)] = (89));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63475 === (30))){
var inst_63110 = (state_63469[(2)]);
var state_63469__$1 = state_63469;
if(cljs.core.truth_(inst_63110)){
var statearr_63862_66488 = state_63469__$1;
(statearr_63862_66488[(1)] = (34));

} else {
var statearr_63863_66489 = state_63469__$1;
(statearr_63863_66489[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63475 === (73))){
var state_63469__$1 = state_63469;
var statearr_63864_66490 = state_63469__$1;
(statearr_63864_66490[(2)] = false);

(statearr_63864_66490[(1)] = (74));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63475 === (96))){
var state_63469__$1 = state_63469;
var statearr_63865_66491 = state_63469__$1;
(statearr_63865_66491[(2)] = false);

(statearr_63865_66491[(1)] = (97));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63475 === (10))){
var inst_63022 = (state_63469[(2)]);
var state_63469__$1 = state_63469;
if(cljs.core.truth_(inst_63022)){
var statearr_63878_66492 = state_63469__$1;
(statearr_63878_66492[(1)] = (14));

} else {
var statearr_63879_66493 = state_63469__$1;
(statearr_63879_66493[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63475 === (18))){
var state_63469__$1 = state_63469;
var statearr_63880_66494 = state_63469__$1;
(statearr_63880_66494[(2)] = false);

(statearr_63880_66494[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63475 === (105))){
var inst_63375 = (state_63469[(25)]);
var state_63469__$1 = state_63469;
var statearr_63884_66495 = state_63469__$1;
(statearr_63884_66495[(2)] = inst_63375);

(statearr_63884_66495[(1)] = (106));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63475 === (52))){
var state_63469__$1 = state_63469;
var statearr_63885_66496 = state_63469__$1;
(statearr_63885_66496[(2)] = false);

(statearr_63885_66496[(1)] = (53));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63475 === (114))){
var inst_63355 = (state_63469[(22)]);
var inst_63388 = (state_63469[(13)]);
var inst_63357 = (state_63469[(49)]);
var inst_63397 = (state_63469[(7)]);
var inst_63395 = (state_63469[(2)]);
var inst_63397__$1 = (mutate.cljs$core$IFn$_invoke$arity$3 ? mutate.cljs$core$IFn$_invoke$arity$3(inst_63388,inst_63355,inst_63357) : mutate.call(null,inst_63388,inst_63355,inst_63357));
var inst_63399 = (inst_63397__$1 == null);
var inst_63400 = cljs.core.not(inst_63399);
var state_63469__$1 = (function (){var statearr_63887 = state_63469;
(statearr_63887[(64)] = inst_63395);

(statearr_63887[(7)] = inst_63397__$1);

return statearr_63887;
})();
if(inst_63400){
var statearr_63890_66497 = state_63469__$1;
(statearr_63890_66497[(1)] = (115));

} else {
var statearr_63891_66498 = state_63469__$1;
(statearr_63891_66498[(1)] = (116));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63475 === (67))){
var state_63469__$1 = state_63469;
var statearr_63892_66499 = state_63469__$1;
(statearr_63892_66499[(2)] = null);

(statearr_63892_66499[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63475 === (71))){
var inst_63228 = (state_63469[(2)]);
var inst_63229 = com.wsscode.common.async_cljs.throw_err(inst_63228);
var state_63469__$1 = state_63469;
var statearr_63894_66500 = state_63469__$1;
(statearr_63894_66500[(2)] = inst_63229);

(statearr_63894_66500[(1)] = (70));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63475 === (42))){
var inst_63117 = (state_63469[(41)]);
var inst_63151 = (state_63469[(2)]);
var inst_63155 = new cljs.core.Symbol(null,"...","...",-1926939749,null);
var inst_63156 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_63155,inst_63117);
var state_63469__$1 = (function (){var statearr_63897 = state_63469;
(statearr_63897[(50)] = inst_63151);

return statearr_63897;
})();
if(inst_63156){
var statearr_63899_66501 = state_63469__$1;
(statearr_63899_66501[(1)] = (43));

} else {
var statearr_63904_66502 = state_63469__$1;
(statearr_63904_66502[(1)] = (44));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63475 === (80))){
var inst_63289 = (state_63469[(29)]);
var inst_63275 = (state_63469[(43)]);
var inst_63274 = (state_63469[(2)]);
var inst_63275__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_63274,new cljs.core.Keyword(null,"children","children",-940561982));
var inst_63276 = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(tx,cljs.core.assoc,new cljs.core.Keyword("com.wsscode.pathom.parser","ast","com.wsscode.pathom.parser/ast",1639399903),inst_63274);
var inst_63277 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword(null,"parser","parser",-1543495310),com$wsscode$pathom$parser$async_parser_$_self);
var inst_63287 = cljs.core.PersistentHashMap.EMPTY;
var inst_63288 = cljs.core.seq(inst_63275__$1);
var inst_63289__$1 = cljs.core.first(inst_63288);
var inst_63290 = cljs.core.next(inst_63288);
var inst_63292 = (inst_63289__$1 == null);
var inst_63293 = cljs.core.not(inst_63292);
var state_63469__$1 = (function (){var statearr_63906 = state_63469;
(statearr_63906[(60)] = inst_63276);

(statearr_63906[(29)] = inst_63289__$1);

(statearr_63906[(65)] = inst_63290);

(statearr_63906[(43)] = inst_63275__$1);

(statearr_63906[(44)] = inst_63287);

(statearr_63906[(24)] = inst_63277);

return statearr_63906;
})();
if(inst_63293){
var statearr_63907_66503 = state_63469__$1;
(statearr_63907_66503[(1)] = (81));

} else {
var statearr_63910_66504 = state_63469__$1;
(statearr_63910_66504[(1)] = (82));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63475 === (37))){
var inst_63117 = (state_63469[(41)]);
var inst_63118 = (state_63469[(33)]);
var inst_63115 = (state_63469[(10)]);
var inst_63030 = (state_63469[(63)]);
var inst_63133 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword(null,"key","key",-1516042587)];
var inst_63134 = [new cljs.core.Keyword("com.wsscode.pathom.parser","process-key","com.wsscode.pathom.parser/process-key",1272337224),inst_63118];
var inst_63135 = cljs.core.PersistentHashMap.fromArrays(inst_63133,inst_63134);
var inst_63136 = com.wsscode.pathom.trace.trace(inst_63030,inst_63135);
var inst_63142 = [new cljs.core.Keyword(null,"ast","ast",-860334068),new cljs.core.Keyword(null,"query","query",-1288509510)];
var inst_63143 = [inst_63115,inst_63117];
var inst_63144 = cljs.core.PersistentHashMap.fromArrays(inst_63142,inst_63143);
var inst_63145 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_63030,inst_63144], 0));
var inst_63146 = (inst_63117 == null);
var state_63469__$1 = (function (){var statearr_63912 = state_63469;
(statearr_63912[(37)] = inst_63145);

(statearr_63912[(66)] = inst_63136);

return statearr_63912;
})();
if(cljs.core.truth_(inst_63146)){
var statearr_63913_66505 = state_63469__$1;
(statearr_63913_66505[(1)] = (40));

} else {
var statearr_63914_66506 = state_63469__$1;
(statearr_63914_66506[(1)] = (41));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63475 === (63))){
var state_63469__$1 = state_63469;
if(cljs.core.truth_(read)){
var statearr_63915_66507 = state_63469__$1;
(statearr_63915_66507[(1)] = (64));

} else {
var statearr_63916_66508 = state_63469__$1;
(statearr_63916_66508[(1)] = (65));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63475 === (94))){
var inst_63348 = (state_63469[(2)]);
var state_63469__$1 = state_63469;
if(cljs.core.truth_(inst_63348)){
var statearr_63917_66509 = state_63469__$1;
(statearr_63917_66509[(1)] = (98));

} else {
var statearr_63918_66510 = state_63469__$1;
(statearr_63918_66510[(1)] = (99));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63475 === (8))){
var inst_63004 = (state_63469[(32)]);
var inst_63011 = inst_63004.cljs$lang$protocol_mask$partition0$;
var inst_63012 = (inst_63011 & (64));
var inst_63013 = inst_63004.cljs$core$ISeq$;
var inst_63014 = (cljs.core.PROTOCOL_SENTINEL === inst_63013);
var inst_63015 = ((inst_63012) || (inst_63014));
var state_63469__$1 = state_63469;
if(cljs.core.truth_(inst_63015)){
var statearr_63919_66511 = state_63469__$1;
(statearr_63919_66511[(1)] = (11));

} else {
var statearr_63920_66512 = state_63469__$1;
(statearr_63920_66512[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63475 === (49))){
var inst_63172 = ["Assert failed: ","Parse mutation attempted but no :mutate function supplied","\n","mutate"].join('');
var inst_63173 = (new Error(inst_63172));
var inst_63174 = (function(){throw inst_63173})();
var state_63469__$1 = state_63469;
var statearr_63921_66513 = state_63469__$1;
(statearr_63921_66513[(2)] = inst_63174);

(statearr_63921_66513[(1)] = (50));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63475 === (84))){
var state_63469__$1 = state_63469;
var statearr_63923_66514 = state_63469__$1;
(statearr_63923_66514[(2)] = true);

(statearr_63923_66514[(1)] = (86));


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
});})(c__45808__auto__,map__62988,map__62988__$1,read,mutate))
;
return ((function (switch__45525__auto__,c__45808__auto__,map__62988,map__62988__$1,read,mutate){
return (function() {
var com$wsscode$pathom$parser$async_parser_$_self_$_state_machine__45526__auto__ = null;
var com$wsscode$pathom$parser$async_parser_$_self_$_state_machine__45526__auto____0 = (function (){
var statearr_63928 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_63928[(0)] = com$wsscode$pathom$parser$async_parser_$_self_$_state_machine__45526__auto__);

(statearr_63928[(1)] = (1));

return statearr_63928;
});
var com$wsscode$pathom$parser$async_parser_$_self_$_state_machine__45526__auto____1 = (function (state_63469){
while(true){
var ret_value__45527__auto__ = (function (){try{while(true){
var result__45528__auto__ = switch__45525__auto__(state_63469);
if(cljs.core.keyword_identical_QMARK_(result__45528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45528__auto__;
}
break;
}
}catch (e63929){if((e63929 instanceof Object)){
var ex__45529__auto__ = e63929;
var statearr_63930_66515 = state_63469;
(statearr_63930_66515[(5)] = ex__45529__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_63469);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e63929;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66516 = state_63469;
state_63469 = G__66516;
continue;
} else {
return ret_value__45527__auto__;
}
break;
}
});
com$wsscode$pathom$parser$async_parser_$_self_$_state_machine__45526__auto__ = function(state_63469){
switch(arguments.length){
case 0:
return com$wsscode$pathom$parser$async_parser_$_self_$_state_machine__45526__auto____0.call(this);
case 1:
return com$wsscode$pathom$parser$async_parser_$_self_$_state_machine__45526__auto____1.call(this,state_63469);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$parser$async_parser_$_self_$_state_machine__45526__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$parser$async_parser_$_self_$_state_machine__45526__auto____0;
com$wsscode$pathom$parser$async_parser_$_self_$_state_machine__45526__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$parser$async_parser_$_self_$_state_machine__45526__auto____1;
return com$wsscode$pathom$parser$async_parser_$_self_$_state_machine__45526__auto__;
})()
;})(switch__45525__auto__,c__45808__auto__,map__62988,map__62988__$1,read,mutate))
})();
var state__45810__auto__ = (function (){var statearr_63931 = f__45809__auto__();
(statearr_63931[(6)] = c__45808__auto__);

return statearr_63931;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45810__auto__);
});})(c__45808__auto__,map__62988,map__62988__$1,read,mutate))
);

return c__45808__auto__;
});
;})(map__62988,map__62988__$1,read,mutate))
});
com.wsscode.pathom.parser.watch_pending_key = (function com$wsscode$pathom$parser$watch_pending_key(p__63935,key){
var map__63936 = p__63935;
var map__63936__$1 = (((((!((map__63936 == null))))?(((((map__63936.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63936.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63936):map__63936);
var env = map__63936__$1;
var key_watchers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63936__$1,new cljs.core.Keyword("com.wsscode.pathom.parser","key-watchers","com.wsscode.pathom.parser/key-watchers",-1670257404));
var external_wait_ignore_timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__63936__$1,new cljs.core.Keyword("com.wsscode.pathom.parser","external-wait-ignore-timeout","com.wsscode.pathom.parser/external-wait-ignore-timeout",480017192),(3000));
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(key_watchers,cljs.core.update,key,cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ch], 0));

var c__45808__auto___66517 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__45808__auto___66517,ch,map__63936,map__63936__$1,env,key_watchers,external_wait_ignore_timeout){
return (function (){
var f__45809__auto__ = (function (){var switch__45525__auto__ = ((function (c__45808__auto___66517,ch,map__63936,map__63936__$1,env,key_watchers,external_wait_ignore_timeout){
return (function (state_63972){
var state_val_63973 = (state_63972[(1)]);
if((state_val_63973 === (1))){
var inst_63941 = cljs.core.async.timeout((1));
var state_63972__$1 = state_63972;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63972__$1,(2),inst_63941);
} else {
if((state_val_63973 === (2))){
var inst_63943 = (state_63972[(2)]);
var inst_63944 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword("com.wsscode.pathom.core","entity","com.wsscode.pathom.core/entity",884706031));
var inst_63945 = cljs.core.deref(inst_63944);
var inst_63946 = cljs.core.contains_QMARK_(inst_63945,key);
var state_63972__$1 = (function (){var statearr_63986 = state_63972;
(statearr_63986[(7)] = inst_63943);

return statearr_63986;
})();
if(inst_63946){
var statearr_63987_66518 = state_63972__$1;
(statearr_63987_66518[(1)] = (3));

} else {
var statearr_63988_66519 = state_63972__$1;
(statearr_63988_66519[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63973 === (3))){
var inst_63948 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword(null,"key","key",-1516042587)];
var inst_63949 = [new cljs.core.Keyword("com.wsscode.pathom.parser","flush-watcher-safeguard","com.wsscode.pathom.parser/flush-watcher-safeguard",-1594921178),key];
var inst_63950 = cljs.core.PersistentHashMap.fromArrays(inst_63948,inst_63949);
var inst_63951 = com.wsscode.pathom.trace.trace(env,inst_63950);
var inst_63952 = [new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507)];
var inst_63962 = [key];
var inst_63963 = cljs.core.PersistentHashSet.createAsIfByAssoc(inst_63962);
var inst_63964 = [inst_63963];
var inst_63965 = cljs.core.PersistentHashMap.fromArrays(inst_63952,inst_63964);
var inst_63966 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ch,inst_63965);
var inst_63967 = cljs.core.async.close_BANG_(ch);
var state_63972__$1 = (function (){var statearr_63995 = state_63972;
(statearr_63995[(8)] = inst_63966);

(statearr_63995[(9)] = inst_63951);

return statearr_63995;
})();
var statearr_63996_66520 = state_63972__$1;
(statearr_63996_66520[(2)] = inst_63967);

(statearr_63996_66520[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63973 === (4))){
var state_63972__$1 = state_63972;
var statearr_63997_66521 = state_63972__$1;
(statearr_63997_66521[(2)] = null);

(statearr_63997_66521[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63973 === (5))){
var inst_63970 = (state_63972[(2)]);
var state_63972__$1 = state_63972;
return cljs.core.async.impl.ioc_helpers.return_chan(state_63972__$1,inst_63970);
} else {
return null;
}
}
}
}
}
});})(c__45808__auto___66517,ch,map__63936,map__63936__$1,env,key_watchers,external_wait_ignore_timeout))
;
return ((function (switch__45525__auto__,c__45808__auto___66517,ch,map__63936,map__63936__$1,env,key_watchers,external_wait_ignore_timeout){
return (function() {
var com$wsscode$pathom$parser$watch_pending_key_$_state_machine__45526__auto__ = null;
var com$wsscode$pathom$parser$watch_pending_key_$_state_machine__45526__auto____0 = (function (){
var statearr_63998 = [null,null,null,null,null,null,null,null,null,null];
(statearr_63998[(0)] = com$wsscode$pathom$parser$watch_pending_key_$_state_machine__45526__auto__);

(statearr_63998[(1)] = (1));

return statearr_63998;
});
var com$wsscode$pathom$parser$watch_pending_key_$_state_machine__45526__auto____1 = (function (state_63972){
while(true){
var ret_value__45527__auto__ = (function (){try{while(true){
var result__45528__auto__ = switch__45525__auto__(state_63972);
if(cljs.core.keyword_identical_QMARK_(result__45528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45528__auto__;
}
break;
}
}catch (e63999){if((e63999 instanceof Object)){
var ex__45529__auto__ = e63999;
var statearr_64001_66522 = state_63972;
(statearr_64001_66522[(5)] = ex__45529__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_63972);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e63999;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66523 = state_63972;
state_63972 = G__66523;
continue;
} else {
return ret_value__45527__auto__;
}
break;
}
});
com$wsscode$pathom$parser$watch_pending_key_$_state_machine__45526__auto__ = function(state_63972){
switch(arguments.length){
case 0:
return com$wsscode$pathom$parser$watch_pending_key_$_state_machine__45526__auto____0.call(this);
case 1:
return com$wsscode$pathom$parser$watch_pending_key_$_state_machine__45526__auto____1.call(this,state_63972);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$parser$watch_pending_key_$_state_machine__45526__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$parser$watch_pending_key_$_state_machine__45526__auto____0;
com$wsscode$pathom$parser$watch_pending_key_$_state_machine__45526__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$parser$watch_pending_key_$_state_machine__45526__auto____1;
return com$wsscode$pathom$parser$watch_pending_key_$_state_machine__45526__auto__;
})()
;})(switch__45525__auto__,c__45808__auto___66517,ch,map__63936,map__63936__$1,env,key_watchers,external_wait_ignore_timeout))
})();
var state__45810__auto__ = (function (){var statearr_64014 = f__45809__auto__();
(statearr_64014[(6)] = c__45808__auto___66517);

return statearr_64014;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45810__auto__);
});})(c__45808__auto___66517,ch,map__63936,map__63936__$1,env,key_watchers,external_wait_ignore_timeout))
);


if(cljs.core.truth_(external_wait_ignore_timeout)){
var c__45808__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__45808__auto__,ch,map__63936,map__63936__$1,env,key_watchers,external_wait_ignore_timeout){
return (function (){
var f__45809__auto__ = (function (){var switch__45525__auto__ = ((function (c__45808__auto__,ch,map__63936,map__63936__$1,env,key_watchers,external_wait_ignore_timeout){
return (function (state_64052){
var state_val_64053 = (state_64052[(1)]);
if((state_val_64053 === (1))){
var inst_64020 = (state_64052[(7)]);
var inst_64020__$1 = cljs.core.async.timeout(external_wait_ignore_timeout);
var inst_64025 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_64026 = [ch,inst_64020__$1];
var inst_64027 = (new cljs.core.PersistentVector(null,2,(5),inst_64025,inst_64026,null));
var state_64052__$1 = (function (){var statearr_64063 = state_64052;
(statearr_64063[(7)] = inst_64020__$1);

return statearr_64063;
})();
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_64052__$1,(2),inst_64027,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"priority","priority",1431093715),true], 0));
} else {
if((state_val_64053 === (2))){
var inst_64020 = (state_64052[(7)]);
var inst_64029 = (state_64052[(2)]);
var inst_64030 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_64029,(0),null);
var inst_64031 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_64029,(1),null);
var inst_64033 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_64031,inst_64020);
var state_64052__$1 = (function (){var statearr_64071 = state_64052;
(statearr_64071[(8)] = inst_64030);

return statearr_64071;
})();
if(inst_64033){
var statearr_64073_66524 = state_64052__$1;
(statearr_64073_66524[(1)] = (3));

} else {
var statearr_64074_66525 = state_64052__$1;
(statearr_64074_66525[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64053 === (3))){
var inst_64035 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","external-wait-ignore-timeout","com.wsscode.pathom.parser/external-wait-ignore-timeout",480017192)];
var inst_64036 = [new cljs.core.Keyword("com.wsscode.pathom.parser","watch-pending-timeout","com.wsscode.pathom.parser/watch-pending-timeout",1047721820),external_wait_ignore_timeout];
var inst_64037 = cljs.core.PersistentHashMap.fromArrays(inst_64035,inst_64036);
var inst_64038 = com.wsscode.pathom.trace.trace(env,inst_64037);
var inst_64039 = [new cljs.core.Keyword("com.wsscode.pathom.parser","error","com.wsscode.pathom.parser/error",-525905973),new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507)];
var inst_64044 = cljs.core.PersistentHashSet.EMPTY;
var inst_64045 = [new cljs.core.Keyword("com.wsscode.pathom.parser","watch-pending-timeout","com.wsscode.pathom.parser/watch-pending-timeout",1047721820),inst_64044];
var inst_64046 = cljs.core.PersistentHashMap.fromArrays(inst_64039,inst_64045);
var state_64052__$1 = (function (){var statearr_64078 = state_64052;
(statearr_64078[(9)] = inst_64038);

return statearr_64078;
})();
var statearr_64079_66526 = state_64052__$1;
(statearr_64079_66526[(2)] = inst_64046);

(statearr_64079_66526[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64053 === (4))){
var inst_64030 = (state_64052[(8)]);
var state_64052__$1 = state_64052;
var statearr_64080_66527 = state_64052__$1;
(statearr_64080_66527[(2)] = inst_64030);

(statearr_64080_66527[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64053 === (5))){
var inst_64049 = (state_64052[(2)]);
var state_64052__$1 = state_64052;
return cljs.core.async.impl.ioc_helpers.return_chan(state_64052__$1,inst_64049);
} else {
return null;
}
}
}
}
}
});})(c__45808__auto__,ch,map__63936,map__63936__$1,env,key_watchers,external_wait_ignore_timeout))
;
return ((function (switch__45525__auto__,c__45808__auto__,ch,map__63936,map__63936__$1,env,key_watchers,external_wait_ignore_timeout){
return (function() {
var com$wsscode$pathom$parser$watch_pending_key_$_state_machine__45526__auto__ = null;
var com$wsscode$pathom$parser$watch_pending_key_$_state_machine__45526__auto____0 = (function (){
var statearr_64090 = [null,null,null,null,null,null,null,null,null,null];
(statearr_64090[(0)] = com$wsscode$pathom$parser$watch_pending_key_$_state_machine__45526__auto__);

(statearr_64090[(1)] = (1));

return statearr_64090;
});
var com$wsscode$pathom$parser$watch_pending_key_$_state_machine__45526__auto____1 = (function (state_64052){
while(true){
var ret_value__45527__auto__ = (function (){try{while(true){
var result__45528__auto__ = switch__45525__auto__(state_64052);
if(cljs.core.keyword_identical_QMARK_(result__45528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45528__auto__;
}
break;
}
}catch (e64094){if((e64094 instanceof Object)){
var ex__45529__auto__ = e64094;
var statearr_64095_66528 = state_64052;
(statearr_64095_66528[(5)] = ex__45529__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_64052);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e64094;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66529 = state_64052;
state_64052 = G__66529;
continue;
} else {
return ret_value__45527__auto__;
}
break;
}
});
com$wsscode$pathom$parser$watch_pending_key_$_state_machine__45526__auto__ = function(state_64052){
switch(arguments.length){
case 0:
return com$wsscode$pathom$parser$watch_pending_key_$_state_machine__45526__auto____0.call(this);
case 1:
return com$wsscode$pathom$parser$watch_pending_key_$_state_machine__45526__auto____1.call(this,state_64052);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$parser$watch_pending_key_$_state_machine__45526__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$parser$watch_pending_key_$_state_machine__45526__auto____0;
com$wsscode$pathom$parser$watch_pending_key_$_state_machine__45526__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$parser$watch_pending_key_$_state_machine__45526__auto____1;
return com$wsscode$pathom$parser$watch_pending_key_$_state_machine__45526__auto__;
})()
;})(switch__45525__auto__,c__45808__auto__,ch,map__63936,map__63936__$1,env,key_watchers,external_wait_ignore_timeout))
})();
var state__45810__auto__ = (function (){var statearr_64102 = f__45809__auto__();
(statearr_64102[(6)] = c__45808__auto__);

return statearr_64102;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45810__auto__);
});})(c__45808__auto__,ch,map__63936,map__63936__$1,env,key_watchers,external_wait_ignore_timeout))
);

return c__45808__auto__;
} else {
return ch;
}
});
com.wsscode.pathom.parser.process_error = (function com$wsscode$pathom$parser$process_error(p__64106,e){
var map__64107 = p__64106;
var map__64107__$1 = (((((!((map__64107 == null))))?(((((map__64107.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64107.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64107):map__64107);
var env = map__64107__$1;
var process_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64107__$1,new cljs.core.Keyword("com.wsscode.pathom.core","process-error","com.wsscode.pathom.core/process-error",-2116719411));
if(cljs.core.truth_(process_error)){
return (process_error.cljs$core$IFn$_invoke$arity$2 ? process_error.cljs$core$IFn$_invoke$arity$2(env,e) : process_error.call(null,env,e));
} else {
return e;
}
});
com.wsscode.pathom.parser.parallel_process_value = (function com$wsscode$pathom$parser$parallel_process_value(env,tx,ast,key_watchers,res,waiting,processing,read,mutate,key_iterations,tail){
var map__64120 = ast;
var map__64120__$1 = (((((!((map__64120 == null))))?(((((map__64120.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64120.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64120):map__64120);
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64120__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64120__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64120__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64120__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env__$1 = (function (){var G__64126 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([env,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ast","ast",-860334068),ast,new cljs.core.Keyword(null,"query","query",-1288509510),query,new cljs.core.Keyword("com.wsscode.pathom.parser","waiting","com.wsscode.pathom.parser/waiting",-798662278),waiting,new cljs.core.Keyword("com.wsscode.pathom.parser","key-watchers","com.wsscode.pathom.parser/key-watchers",-1670257404),key_watchers], null)], 0));
var G__64126__$1 = (((query == null))?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__64126,new cljs.core.Keyword(null,"query","query",-1288509510)):G__64126);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"...","...",-1926939749,null),query)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__64126__$1,new cljs.core.Keyword(null,"query","query",-1288509510),tx);
} else {
return G__64126__$1;
}
})();
var value = (function (){var G__64131 = type;
var G__64131__$1 = (((G__64131 instanceof cljs.core.Keyword))?G__64131.fqn:null);
switch (G__64131__$1) {
case "call":
if(cljs.core.truth_(mutate)){
} else {
throw (new Error(["Assert failed: ","Parse mutation attempted but no :mutate function supplied","\n","mutate"].join('')));
}

var map__64135 = (mutate.cljs$core$IFn$_invoke$arity$3 ? mutate.cljs$core$IFn$_invoke$arity$3(env__$1,key,params) : mutate.call(null,env__$1,key,params));
var map__64135__$1 = (((((!((map__64135 == null))))?(((((map__64135.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64135.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64135):map__64135);
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64135__$1,new cljs.core.Keyword(null,"action","action",-811238024));
if(cljs.core.truth_(action)){
var c__45808__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__45808__auto__,map__64135,map__64135__$1,action,G__64131,G__64131__$1,map__64120,map__64120__$1,query,key,type,params,env__$1){
return (function (){
var f__45809__auto__ = (function (){var switch__45525__auto__ = ((function (c__45808__auto__,map__64135,map__64135__$1,action,G__64131,G__64131__$1,map__64120,map__64120__$1,query,key,type,params,env__$1){
return (function (state_64176){
var state_val_64177 = (state_64176[(1)]);
if((state_val_64177 === (1))){
var state_64176__$1 = state_64176;
var statearr_64185_66531 = state_64176__$1;
(statearr_64185_66531[(2)] = null);

(statearr_64185_66531[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64177 === (2))){
var inst_64174 = (state_64176[(2)]);
var state_64176__$1 = state_64176;
return cljs.core.async.impl.ioc_helpers.return_chan(state_64176__$1,inst_64174);
} else {
if((state_val_64177 === (3))){
var inst_64148 = (state_64176[(2)]);
var inst_64149 = [new cljs.core.Keyword("com.wsscode.pathom.parser","error","com.wsscode.pathom.parser/error",-525905973)];
var inst_64150 = com.wsscode.pathom.parser.process_error(env__$1,inst_64148);
var inst_64151 = [inst_64150];
var inst_64152 = cljs.core.PersistentHashMap.fromArrays(inst_64149,inst_64151);
var state_64176__$1 = state_64176;
var statearr_64196_66532 = state_64176__$1;
(statearr_64196_66532[(2)] = inst_64152);


cljs.core.async.impl.ioc_helpers.process_exception(state_64176__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64177 === (4))){
var inst_64164 = (state_64176[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_64176,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_64157 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword(null,"mutation","mutation",-285823378)];
var inst_64158 = [new cljs.core.Keyword("com.wsscode.pathom.parser","call-mutation","com.wsscode.pathom.parser/call-mutation",-603334495),key];
var inst_64159 = cljs.core.PersistentHashMap.fromArrays(inst_64157,inst_64158);
var inst_64160 = com.wsscode.pathom.trace.trace(env__$1,inst_64159);
var inst_64164__$1 = (action.cljs$core$IFn$_invoke$arity$0 ? action.cljs$core$IFn$_invoke$arity$0() : action.call(null));
var inst_64165 = com.wsscode.common.async_cljs.chan_QMARK_(inst_64164__$1);
var state_64176__$1 = (function (){var statearr_64201 = state_64176;
(statearr_64201[(8)] = inst_64160);

(statearr_64201[(7)] = inst_64164__$1);

return statearr_64201;
})();
if(inst_64165){
var statearr_64202_66533 = state_64176__$1;
(statearr_64202_66533[(1)] = (5));

} else {
var statearr_64203_66534 = state_64176__$1;
(statearr_64203_66534[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64177 === (5))){
var inst_64164 = (state_64176[(7)]);
var state_64176__$1 = state_64176;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_64176__$1,(8),inst_64164);
} else {
if((state_val_64177 === (6))){
var inst_64164 = (state_64176[(7)]);
var state_64176__$1 = state_64176;
var statearr_64205_66535 = state_64176__$1;
(statearr_64205_66535[(2)] = inst_64164);

(statearr_64205_66535[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64177 === (7))){
var inst_64172 = (state_64176[(2)]);
var state_64176__$1 = state_64176;
var statearr_64210_66536 = state_64176__$1;
(statearr_64210_66536[(2)] = inst_64172);


cljs.core.async.impl.ioc_helpers.process_exception(state_64176__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64177 === (8))){
var inst_64168 = (state_64176[(2)]);
var inst_64169 = com.wsscode.common.async_cljs.throw_err(inst_64168);
var state_64176__$1 = state_64176;
var statearr_64211_66537 = state_64176__$1;
(statearr_64211_66537[(2)] = inst_64169);

(statearr_64211_66537[(1)] = (7));


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
});})(c__45808__auto__,map__64135,map__64135__$1,action,G__64131,G__64131__$1,map__64120,map__64120__$1,query,key,type,params,env__$1))
;
return ((function (switch__45525__auto__,c__45808__auto__,map__64135,map__64135__$1,action,G__64131,G__64131__$1,map__64120,map__64120__$1,query,key,type,params,env__$1){
return (function() {
var com$wsscode$pathom$parser$parallel_process_value_$_state_machine__45526__auto__ = null;
var com$wsscode$pathom$parser$parallel_process_value_$_state_machine__45526__auto____0 = (function (){
var statearr_64213 = [null,null,null,null,null,null,null,null,null];
(statearr_64213[(0)] = com$wsscode$pathom$parser$parallel_process_value_$_state_machine__45526__auto__);

(statearr_64213[(1)] = (1));

return statearr_64213;
});
var com$wsscode$pathom$parser$parallel_process_value_$_state_machine__45526__auto____1 = (function (state_64176){
while(true){
var ret_value__45527__auto__ = (function (){try{while(true){
var result__45528__auto__ = switch__45525__auto__(state_64176);
if(cljs.core.keyword_identical_QMARK_(result__45528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45528__auto__;
}
break;
}
}catch (e64215){if((e64215 instanceof Object)){
var ex__45529__auto__ = e64215;
var statearr_64217_66538 = state_64176;
(statearr_64217_66538[(5)] = ex__45529__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_64176);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e64215;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66539 = state_64176;
state_64176 = G__66539;
continue;
} else {
return ret_value__45527__auto__;
}
break;
}
});
com$wsscode$pathom$parser$parallel_process_value_$_state_machine__45526__auto__ = function(state_64176){
switch(arguments.length){
case 0:
return com$wsscode$pathom$parser$parallel_process_value_$_state_machine__45526__auto____0.call(this);
case 1:
return com$wsscode$pathom$parser$parallel_process_value_$_state_machine__45526__auto____1.call(this,state_64176);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$parser$parallel_process_value_$_state_machine__45526__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$parser$parallel_process_value_$_state_machine__45526__auto____0;
com$wsscode$pathom$parser$parallel_process_value_$_state_machine__45526__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$parser$parallel_process_value_$_state_machine__45526__auto____1;
return com$wsscode$pathom$parser$parallel_process_value_$_state_machine__45526__auto__;
})()
;})(switch__45525__auto__,c__45808__auto__,map__64135,map__64135__$1,action,G__64131,G__64131__$1,map__64120,map__64120__$1,query,key,type,params,env__$1))
})();
var state__45810__auto__ = (function (){var statearr_64220 = f__45809__auto__();
(statearr_64220[(6)] = c__45808__auto__);

return statearr_64220;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45810__auto__);
});})(c__45808__auto__,map__64135,map__64135__$1,action,G__64131,G__64131__$1,map__64120,map__64120__$1,query,key,type,params,env__$1))
);

return c__45808__auto__;
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
var trace_id__22799__auto__ = com.wsscode.pathom.trace.trace_enter.cljs$core$IFn$_invoke$arity$2(env__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","call-read","com.wsscode.pathom.parser/call-read",-877907284),new cljs.core.Keyword(null,"key","key",-1516042587),key], null));
var res__22800__auto__ = (read.cljs$core$IFn$_invoke$arity$1 ? read.cljs$core$IFn$_invoke$arity$1(env__$1) : read.call(null,env__$1));
com.wsscode.pathom.trace.trace_leave.cljs$core$IFn$_invoke$arity$3(env__$1,trace_id__22799__auto__,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","call-read","com.wsscode.pathom.parser/call-read",-877907284),new cljs.core.Keyword(null,"key","key",-1516042587),key], null));

return res__22800__auto__;
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
var stream = (function (){var c__45808__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__45808__auto__,provides,map__64120,map__64120__$1,query,key,type,params,env__$1,value){
return (function (){
var f__45809__auto__ = (function (){var switch__45525__auto__ = ((function (c__45808__auto__,provides,map__64120,map__64120__$1,query,key,type,params,env__$1,value){
return (function (state_64234){
var state_val_64235 = (state_64234[(1)]);
if((state_val_64235 === (1))){
var inst_64223 = [new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507),new cljs.core.Keyword("com.wsscode.pathom.parser","merge-result?","com.wsscode.pathom.parser/merge-result?",1457060683),new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673)];
var inst_64224 = [key,new cljs.core.Keyword("pathom","as","pathom/as",-2134138450)];
var state_64234__$1 = (function (){var statearr_64240 = state_64234;
(statearr_64240[(7)] = inst_64224);

(statearr_64240[(8)] = inst_64223);

return statearr_64240;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_64234__$1,(2),value);
} else {
if((state_val_64235 === (2))){
var inst_64224 = (state_64234[(7)]);
var inst_64223 = (state_64234[(8)]);
var inst_64227 = (state_64234[(2)]);
var inst_64228 = com.wsscode.pathom.parser.ast__GT_out_key(ast);
var inst_64229 = [inst_64227,inst_64228];
var inst_64230 = cljs.core.PersistentHashMap.fromArrays(inst_64224,inst_64229);
var inst_64231 = [provides,true,inst_64230];
var inst_64232 = cljs.core.PersistentHashMap.fromArrays(inst_64223,inst_64231);
var state_64234__$1 = state_64234;
return cljs.core.async.impl.ioc_helpers.return_chan(state_64234__$1,inst_64232);
} else {
return null;
}
}
});})(c__45808__auto__,provides,map__64120,map__64120__$1,query,key,type,params,env__$1,value))
;
return ((function (switch__45525__auto__,c__45808__auto__,provides,map__64120,map__64120__$1,query,key,type,params,env__$1,value){
return (function() {
var com$wsscode$pathom$parser$parallel_process_value_$_state_machine__45526__auto__ = null;
var com$wsscode$pathom$parser$parallel_process_value_$_state_machine__45526__auto____0 = (function (){
var statearr_64251 = [null,null,null,null,null,null,null,null,null];
(statearr_64251[(0)] = com$wsscode$pathom$parser$parallel_process_value_$_state_machine__45526__auto__);

(statearr_64251[(1)] = (1));

return statearr_64251;
});
var com$wsscode$pathom$parser$parallel_process_value_$_state_machine__45526__auto____1 = (function (state_64234){
while(true){
var ret_value__45527__auto__ = (function (){try{while(true){
var result__45528__auto__ = switch__45525__auto__(state_64234);
if(cljs.core.keyword_identical_QMARK_(result__45528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45528__auto__;
}
break;
}
}catch (e64252){if((e64252 instanceof Object)){
var ex__45529__auto__ = e64252;
var statearr_64253_66540 = state_64234;
(statearr_64253_66540[(5)] = ex__45529__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_64234);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e64252;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66541 = state_64234;
state_64234 = G__66541;
continue;
} else {
return ret_value__45527__auto__;
}
break;
}
});
com$wsscode$pathom$parser$parallel_process_value_$_state_machine__45526__auto__ = function(state_64234){
switch(arguments.length){
case 0:
return com$wsscode$pathom$parser$parallel_process_value_$_state_machine__45526__auto____0.call(this);
case 1:
return com$wsscode$pathom$parser$parallel_process_value_$_state_machine__45526__auto____1.call(this,state_64234);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$parser$parallel_process_value_$_state_machine__45526__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$parser$parallel_process_value_$_state_machine__45526__auto____0;
com$wsscode$pathom$parser$parallel_process_value_$_state_machine__45526__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$parser$parallel_process_value_$_state_machine__45526__auto____1;
return com$wsscode$pathom$parser$parallel_process_value_$_state_machine__45526__auto__;
})()
;})(switch__45525__auto__,c__45808__auto__,provides,map__64120,map__64120__$1,query,key,type,params,env__$1,value))
})();
var state__45810__auto__ = (function (){var statearr_64255 = f__45809__auto__();
(statearr_64255[(6)] = c__45808__auto__);

return statearr_64255;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45810__auto__);
});})(c__45808__auto__,provides,map__64120,map__64120__$1,query,key,type,params,env__$1,value))
);

return c__45808__auto__;
})();
com.wsscode.pathom.trace.trace(env__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","async-return","com.wsscode.pathom.parser/async-return",-1319623828),new cljs.core.Keyword(null,"key","key",-1516042587),key], null));

return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [res,cljs.core.into.cljs$core$IFn$_invoke$arity$2(waiting,provides),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(processing,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.parser","process-channel","com.wsscode.pathom.parser/process-channel",1432129963),stream,new cljs.core.Keyword("com.wsscode.pathom.parser","process-source","com.wsscode.pathom.parser/process-source",1341595616),new cljs.core.Keyword("com.wsscode.pathom.parser","channel-response","com.wsscode.pathom.parser/channel-response",140507736),new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507),provides], null)),key_iterations,tail], null);
} else {
if(cljs.core.truth_((function (){try{return new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507).cljs$core$IFn$_invoke$arity$1(value);
}catch (e64260){var _ = e64260;
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
var trace_id__22799__auto__ = com.wsscode.pathom.trace.trace_enter.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","flush-watchers-loop","com.wsscode.pathom.parser/flush-watchers-loop",-445077871)], null));
var res__22800__auto__ = (function (){var seq__64283 = cljs.core.seq(cljs.core.deref(key_watchers));
var chunk__64284 = null;
var count__64285 = (0);
var i__64286 = (0);
while(true){
if((i__64286 < count__64285)){
var vec__64330 = chunk__64284.cljs$core$IIndexed$_nth$arity$2(null,i__64286);
var pkey = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64330,(0),null);
var watchers = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64330,(1),null);
if(cljs.core.contains_QMARK_(provides,pkey)){
com.wsscode.pathom.trace.trace(env,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","flush-watchers","com.wsscode.pathom.parser/flush-watchers",-2125759334),new cljs.core.Keyword(null,"key","key",-1516042587),pkey,new cljs.core.Keyword("com.wsscode.pathom.parser","watcher-count","com.wsscode.pathom.parser/watcher-count",1367484628),cljs.core.count(watchers)], null));

var seq__64333_66544 = cljs.core.seq(watchers);
var chunk__64334_66545 = null;
var count__64335_66546 = (0);
var i__64336_66547 = (0);
while(true){
if((i__64336_66547 < count__64335_66546)){
var out_66548 = chunk__64334_66545.cljs$core$IIndexed$_nth$arity$2(null,i__64336_66547);
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(out_66548,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507),provides,new cljs.core.Keyword("com.wsscode.pathom.parser","error","com.wsscode.pathom.parser/error",-525905973),error], null));

cljs.core.async.close_BANG_(out_66548);


var G__66549 = seq__64333_66544;
var G__66550 = chunk__64334_66545;
var G__66551 = count__64335_66546;
var G__66552 = (i__64336_66547 + (1));
seq__64333_66544 = G__66549;
chunk__64334_66545 = G__66550;
count__64335_66546 = G__66551;
i__64336_66547 = G__66552;
continue;
} else {
var temp__5720__auto___66553 = cljs.core.seq(seq__64333_66544);
if(temp__5720__auto___66553){
var seq__64333_66555__$1 = temp__5720__auto___66553;
if(cljs.core.chunked_seq_QMARK_(seq__64333_66555__$1)){
var c__4550__auto___66556 = cljs.core.chunk_first(seq__64333_66555__$1);
var G__66557 = cljs.core.chunk_rest(seq__64333_66555__$1);
var G__66558 = c__4550__auto___66556;
var G__66559 = cljs.core.count(c__4550__auto___66556);
var G__66560 = (0);
seq__64333_66544 = G__66557;
chunk__64334_66545 = G__66558;
count__64335_66546 = G__66559;
i__64336_66547 = G__66560;
continue;
} else {
var out_66561 = cljs.core.first(seq__64333_66555__$1);
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(out_66561,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507),provides,new cljs.core.Keyword("com.wsscode.pathom.parser","error","com.wsscode.pathom.parser/error",-525905973),error], null));

cljs.core.async.close_BANG_(out_66561);


var G__66562 = cljs.core.next(seq__64333_66555__$1);
var G__66563 = null;
var G__66564 = (0);
var G__66565 = (0);
seq__64333_66544 = G__66562;
chunk__64334_66545 = G__66563;
count__64335_66546 = G__66564;
i__64336_66547 = G__66565;
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


var G__66566 = seq__64283;
var G__66567 = chunk__64284;
var G__66568 = count__64285;
var G__66569 = (i__64286 + (1));
seq__64283 = G__66566;
chunk__64284 = G__66567;
count__64285 = G__66568;
i__64286 = G__66569;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__64283);
if(temp__5720__auto__){
var seq__64283__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__64283__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__64283__$1);
var G__66570 = cljs.core.chunk_rest(seq__64283__$1);
var G__66571 = c__4550__auto__;
var G__66572 = cljs.core.count(c__4550__auto__);
var G__66573 = (0);
seq__64283 = G__66570;
chunk__64284 = G__66571;
count__64285 = G__66572;
i__64286 = G__66573;
continue;
} else {
var vec__64359 = cljs.core.first(seq__64283__$1);
var pkey = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64359,(0),null);
var watchers = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64359,(1),null);
if(cljs.core.contains_QMARK_(provides,pkey)){
com.wsscode.pathom.trace.trace(env,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","flush-watchers","com.wsscode.pathom.parser/flush-watchers",-2125759334),new cljs.core.Keyword(null,"key","key",-1516042587),pkey,new cljs.core.Keyword("com.wsscode.pathom.parser","watcher-count","com.wsscode.pathom.parser/watcher-count",1367484628),cljs.core.count(watchers)], null));

var seq__64365_66574 = cljs.core.seq(watchers);
var chunk__64366_66575 = null;
var count__64367_66576 = (0);
var i__64368_66577 = (0);
while(true){
if((i__64368_66577 < count__64367_66576)){
var out_66578 = chunk__64366_66575.cljs$core$IIndexed$_nth$arity$2(null,i__64368_66577);
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(out_66578,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507),provides,new cljs.core.Keyword("com.wsscode.pathom.parser","error","com.wsscode.pathom.parser/error",-525905973),error], null));

cljs.core.async.close_BANG_(out_66578);


var G__66579 = seq__64365_66574;
var G__66580 = chunk__64366_66575;
var G__66581 = count__64367_66576;
var G__66582 = (i__64368_66577 + (1));
seq__64365_66574 = G__66579;
chunk__64366_66575 = G__66580;
count__64367_66576 = G__66581;
i__64368_66577 = G__66582;
continue;
} else {
var temp__5720__auto___66583__$1 = cljs.core.seq(seq__64365_66574);
if(temp__5720__auto___66583__$1){
var seq__64365_66585__$1 = temp__5720__auto___66583__$1;
if(cljs.core.chunked_seq_QMARK_(seq__64365_66585__$1)){
var c__4550__auto___66586 = cljs.core.chunk_first(seq__64365_66585__$1);
var G__66587 = cljs.core.chunk_rest(seq__64365_66585__$1);
var G__66588 = c__4550__auto___66586;
var G__66589 = cljs.core.count(c__4550__auto___66586);
var G__66590 = (0);
seq__64365_66574 = G__66587;
chunk__64366_66575 = G__66588;
count__64367_66576 = G__66589;
i__64368_66577 = G__66590;
continue;
} else {
var out_66591 = cljs.core.first(seq__64365_66585__$1);
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(out_66591,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507),provides,new cljs.core.Keyword("com.wsscode.pathom.parser","error","com.wsscode.pathom.parser/error",-525905973),error], null));

cljs.core.async.close_BANG_(out_66591);


var G__66592 = cljs.core.next(seq__64365_66585__$1);
var G__66593 = null;
var G__66594 = (0);
var G__66595 = (0);
seq__64365_66574 = G__66592;
chunk__64366_66575 = G__66593;
count__64367_66576 = G__66594;
i__64368_66577 = G__66595;
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


var G__66596 = cljs.core.next(seq__64283__$1);
var G__66597 = null;
var G__66598 = (0);
var G__66599 = (0);
seq__64283 = G__66596;
chunk__64284 = G__66597;
count__64285 = G__66598;
i__64286 = G__66599;
continue;
}
} else {
return null;
}
}
break;
}
})();
com.wsscode.pathom.trace.trace_leave.cljs$core$IFn$_invoke$arity$3(env,trace_id__22799__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","flush-watchers-loop","com.wsscode.pathom.parser/flush-watchers-loop",-445077871)], null));

return res__22800__auto__;
} else {
var seq__64378 = cljs.core.seq(cljs.core.deref(key_watchers));
var chunk__64379 = null;
var count__64380 = (0);
var i__64381 = (0);
while(true){
if((i__64381 < count__64380)){
var vec__64438 = chunk__64379.cljs$core$IIndexed$_nth$arity$2(null,i__64381);
var pkey = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64438,(0),null);
var watchers = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64438,(1),null);
if(cljs.core.contains_QMARK_(provides,pkey)){
com.wsscode.pathom.trace.trace(env,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","flush-watchers","com.wsscode.pathom.parser/flush-watchers",-2125759334),new cljs.core.Keyword(null,"key","key",-1516042587),pkey,new cljs.core.Keyword("com.wsscode.pathom.parser","watcher-count","com.wsscode.pathom.parser/watcher-count",1367484628),cljs.core.count(watchers)], null));

var seq__64447_66600 = cljs.core.seq(watchers);
var chunk__64448_66601 = null;
var count__64449_66602 = (0);
var i__64450_66603 = (0);
while(true){
if((i__64450_66603 < count__64449_66602)){
var out_66604 = chunk__64448_66601.cljs$core$IIndexed$_nth$arity$2(null,i__64450_66603);
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(out_66604,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507),provides,new cljs.core.Keyword("com.wsscode.pathom.parser","error","com.wsscode.pathom.parser/error",-525905973),error], null));

cljs.core.async.close_BANG_(out_66604);


var G__66605 = seq__64447_66600;
var G__66606 = chunk__64448_66601;
var G__66607 = count__64449_66602;
var G__66608 = (i__64450_66603 + (1));
seq__64447_66600 = G__66605;
chunk__64448_66601 = G__66606;
count__64449_66602 = G__66607;
i__64450_66603 = G__66608;
continue;
} else {
var temp__5720__auto___66609 = cljs.core.seq(seq__64447_66600);
if(temp__5720__auto___66609){
var seq__64447_66610__$1 = temp__5720__auto___66609;
if(cljs.core.chunked_seq_QMARK_(seq__64447_66610__$1)){
var c__4550__auto___66611 = cljs.core.chunk_first(seq__64447_66610__$1);
var G__66612 = cljs.core.chunk_rest(seq__64447_66610__$1);
var G__66613 = c__4550__auto___66611;
var G__66614 = cljs.core.count(c__4550__auto___66611);
var G__66615 = (0);
seq__64447_66600 = G__66612;
chunk__64448_66601 = G__66613;
count__64449_66602 = G__66614;
i__64450_66603 = G__66615;
continue;
} else {
var out_66616 = cljs.core.first(seq__64447_66610__$1);
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(out_66616,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507),provides,new cljs.core.Keyword("com.wsscode.pathom.parser","error","com.wsscode.pathom.parser/error",-525905973),error], null));

cljs.core.async.close_BANG_(out_66616);


var G__66617 = cljs.core.next(seq__64447_66610__$1);
var G__66618 = null;
var G__66619 = (0);
var G__66620 = (0);
seq__64447_66600 = G__66617;
chunk__64448_66601 = G__66618;
count__64449_66602 = G__66619;
i__64450_66603 = G__66620;
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


var G__66621 = seq__64378;
var G__66622 = chunk__64379;
var G__66623 = count__64380;
var G__66624 = (i__64381 + (1));
seq__64378 = G__66621;
chunk__64379 = G__66622;
count__64380 = G__66623;
i__64381 = G__66624;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__64378);
if(temp__5720__auto__){
var seq__64378__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__64378__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__64378__$1);
var G__66625 = cljs.core.chunk_rest(seq__64378__$1);
var G__66626 = c__4550__auto__;
var G__66627 = cljs.core.count(c__4550__auto__);
var G__66628 = (0);
seq__64378 = G__66625;
chunk__64379 = G__66626;
count__64380 = G__66627;
i__64381 = G__66628;
continue;
} else {
var vec__64468 = cljs.core.first(seq__64378__$1);
var pkey = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64468,(0),null);
var watchers = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64468,(1),null);
if(cljs.core.contains_QMARK_(provides,pkey)){
com.wsscode.pathom.trace.trace(env,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","flush-watchers","com.wsscode.pathom.parser/flush-watchers",-2125759334),new cljs.core.Keyword(null,"key","key",-1516042587),pkey,new cljs.core.Keyword("com.wsscode.pathom.parser","watcher-count","com.wsscode.pathom.parser/watcher-count",1367484628),cljs.core.count(watchers)], null));

var seq__64472_66629 = cljs.core.seq(watchers);
var chunk__64473_66630 = null;
var count__64474_66631 = (0);
var i__64475_66632 = (0);
while(true){
if((i__64475_66632 < count__64474_66631)){
var out_66633 = chunk__64473_66630.cljs$core$IIndexed$_nth$arity$2(null,i__64475_66632);
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(out_66633,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507),provides,new cljs.core.Keyword("com.wsscode.pathom.parser","error","com.wsscode.pathom.parser/error",-525905973),error], null));

cljs.core.async.close_BANG_(out_66633);


var G__66634 = seq__64472_66629;
var G__66635 = chunk__64473_66630;
var G__66636 = count__64474_66631;
var G__66637 = (i__64475_66632 + (1));
seq__64472_66629 = G__66634;
chunk__64473_66630 = G__66635;
count__64474_66631 = G__66636;
i__64475_66632 = G__66637;
continue;
} else {
var temp__5720__auto___66638__$1 = cljs.core.seq(seq__64472_66629);
if(temp__5720__auto___66638__$1){
var seq__64472_66639__$1 = temp__5720__auto___66638__$1;
if(cljs.core.chunked_seq_QMARK_(seq__64472_66639__$1)){
var c__4550__auto___66640 = cljs.core.chunk_first(seq__64472_66639__$1);
var G__66641 = cljs.core.chunk_rest(seq__64472_66639__$1);
var G__66642 = c__4550__auto___66640;
var G__66643 = cljs.core.count(c__4550__auto___66640);
var G__66644 = (0);
seq__64472_66629 = G__66641;
chunk__64473_66630 = G__66642;
count__64474_66631 = G__66643;
i__64475_66632 = G__66644;
continue;
} else {
var out_66645 = cljs.core.first(seq__64472_66639__$1);
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(out_66645,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507),provides,new cljs.core.Keyword("com.wsscode.pathom.parser","error","com.wsscode.pathom.parser/error",-525905973),error], null));

cljs.core.async.close_BANG_(out_66645);


var G__66646 = cljs.core.next(seq__64472_66639__$1);
var G__66647 = null;
var G__66648 = (0);
var G__66649 = (0);
seq__64472_66629 = G__66646;
chunk__64473_66630 = G__66647;
count__64474_66631 = G__66648;
i__64475_66632 = G__66649;
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


var G__66650 = cljs.core.next(seq__64378__$1);
var G__66651 = null;
var G__66652 = (0);
var G__66653 = (0);
seq__64378 = G__66650;
chunk__64379 = G__66651;
count__64380 = G__66652;
i__64381 = G__66653;
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
return Math.max((x - amount),min);
});
});
com.wsscode.pathom.parser.remove_error_values = (function com$wsscode$pathom$parser$remove_error_values(m){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$1((function (p__64505){
var vec__64506 = p__64505;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64506,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64506,(1),null);
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
com.wsscode.pathom.parser.process_next_message = (function com$wsscode$pathom$parser$process_next_message(p__64523,tx,waiting,indexed_props,processing,key_iterations,key_watchers,res){
var map__64524 = p__64523;
var map__64524__$1 = (((((!((map__64524 == null))))?(((((map__64524.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64524.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64524):map__64524);
var env = map__64524__$1;
var done_signal_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64524__$1,new cljs.core.Keyword("com.wsscode.pathom.parser","done-signal*","com.wsscode.pathom.parser/done-signal*",2069309538));
var processing_recheck_timer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64524__$1,new cljs.core.Keyword("com.wsscode.pathom.parser","processing-recheck-timer","com.wsscode.pathom.parser/processing-recheck-timer",-914154273));
var active_paths = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64524__$1,new cljs.core.Keyword("com.wsscode.pathom.parser","active-paths","com.wsscode.pathom.parser/active-paths",457466204));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64524__$1,new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661));
var c__45808__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__45808__auto__,map__64524,map__64524__$1,env,done_signal_STAR_,processing_recheck_timer,active_paths,path){
return (function (){
var f__45809__auto__ = (function (){var switch__45525__auto__ = ((function (c__45808__auto__,map__64524,map__64524__$1,env,done_signal_STAR_,processing_recheck_timer,active_paths,path){
return (function (state_64868){
var state_val_64871 = (state_64868[(1)]);
if((state_val_64871 === (65))){
var inst_64775 = (state_64868[(7)]);
var inst_64773 = (state_64868[(8)]);
var inst_64774 = (state_64868[(9)]);
var inst_64776 = (state_64868[(10)]);
var inst_64801 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673)];
var inst_64802 = [new cljs.core.Keyword("com.wsscode.pathom.parser","merge-result","com.wsscode.pathom.parser/merge-result",870398873),inst_64775];
var inst_64803 = cljs.core.PersistentHashMap.fromArrays(inst_64801,inst_64802);
var inst_64804 = com.wsscode.pathom.trace.trace(env,inst_64803);
var inst_64805 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_64806 = cljs.core.vals(inst_64775);
var inst_64807 = cljs.core.first(inst_64806);
var inst_64808 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(res,inst_64774,inst_64807);
var inst_64809 = cljs.core.PersistentHashSet.EMPTY;
var inst_64810 = cljs.core.remove.cljs$core$IFn$_invoke$arity$1(inst_64773);
var inst_64811 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(inst_64809,inst_64810,inst_64776);
var inst_64813 = cljs.core.PersistentVector.EMPTY;
var inst_64814 = [inst_64808,inst_64811,processing,key_iterations,inst_64813];
var inst_64815 = (new cljs.core.PersistentVector(null,5,(5),inst_64805,inst_64814,null));
var state_64868__$1 = (function (){var statearr_64889 = state_64868;
(statearr_64889[(11)] = inst_64804);

return statearr_64889;
})();
var statearr_64892_66654 = state_64868__$1;
(statearr_64892_66654[(2)] = inst_64815);

(statearr_64892_66654[(1)] = (67));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64871 === (62))){
var inst_64786 = (state_64868[(12)]);
var inst_64772 = (state_64868[(13)]);
var inst_64789 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_64786,new cljs.core.Keyword("com.wsscode.pathom.parser","waiting","com.wsscode.pathom.parser/waiting",-798662278),inst_64772);
var state_64868__$1 = state_64868;
var statearr_64907_66655 = state_64868__$1;
(statearr_64907_66655[(2)] = inst_64789);

(statearr_64907_66655[(1)] = (64));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64871 === (7))){
var inst_64559 = (state_64868[(14)]);
var inst_64559__$1 = (state_64868[(2)]);
var inst_64561 = cljs.core.PersistentVector.EMPTY;
var inst_64562 = cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("com.wsscode.pathom.parser","process-channel","com.wsscode.pathom.parser/process-channel",1432129963));
var inst_64563 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(inst_64561,inst_64562,processing);
var state_64868__$1 = (function (){var statearr_64911 = state_64868;
(statearr_64911[(14)] = inst_64559__$1);

(statearr_64911[(15)] = inst_64563);

return statearr_64911;
})();
if(cljs.core.truth_(inst_64559__$1)){
var statearr_64913_66656 = state_64868__$1;
(statearr_64913_66656[(1)] = (8));

} else {
var statearr_64915_66657 = state_64868__$1;
(statearr_64915_66657[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64871 === (59))){
var inst_64775 = (state_64868[(7)]);
var inst_64769 = (state_64868[(16)]);
var inst_64772 = (state_64868[(13)]);
var inst_64770 = (state_64868[(17)]);
var inst_64782 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507),new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673),new cljs.core.Keyword("com.wsscode.pathom.parser","merge-result?","com.wsscode.pathom.parser/merge-result?",1457060683)];
var inst_64784 = cljs.core.boolean$(inst_64770);
var inst_64785 = [new cljs.core.Keyword("com.wsscode.pathom.parser","process-pending","com.wsscode.pathom.parser/process-pending",-536495871),inst_64769,inst_64775,inst_64784];
var inst_64786 = cljs.core.PersistentHashMap.fromArrays(inst_64782,inst_64785);
var state_64868__$1 = (function (){var statearr_64920 = state_64868;
(statearr_64920[(12)] = inst_64786);

return statearr_64920;
})();
if(cljs.core.truth_(inst_64772)){
var statearr_64922_66659 = state_64868__$1;
(statearr_64922_66659[(1)] = (62));

} else {
var statearr_64923_66660 = state_64868__$1;
(statearr_64923_66660[(1)] = (63));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64871 === (20))){
var inst_64622 = (state_64868[(18)]);
var inst_64628 = (state_64868[(19)]);
var inst_64620 = (state_64868[(20)]);
var inst_64628__$1 = cljs.core._nth(inst_64620,inst_64622);
var inst_64630 = (inst_64628__$1 == null);
var inst_64631 = cljs.core.not(inst_64630);
var state_64868__$1 = (function (){var statearr_64927 = state_64868;
(statearr_64927[(19)] = inst_64628__$1);

return statearr_64927;
})();
if(inst_64631){
var statearr_64928_66661 = state_64868__$1;
(statearr_64928_66661[(1)] = (23));

} else {
var statearr_64930_66662 = state_64868__$1;
(statearr_64930_66662[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64871 === (58))){
var inst_64577 = (state_64868[(21)]);
var inst_64769 = (state_64868[(16)]);
var inst_64767 = (state_64868[(22)]);
var inst_64772 = (state_64868[(13)]);
var inst_64767__$1 = (state_64868[(2)]);
var inst_64768 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_64767__$1,new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673));
var inst_64769__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_64767__$1,new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507));
var inst_64770 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_64767__$1,new cljs.core.Keyword("com.wsscode.pathom.parser","merge-result?","com.wsscode.pathom.parser/merge-result?",1457060683));
var inst_64771 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_64767__$1,new cljs.core.Keyword("com.wsscode.pathom.parser","error","com.wsscode.pathom.parser/error",-525905973));
var inst_64772__$1 = new cljs.core.Keyword("com.wsscode.pathom.parser","waiting","com.wsscode.pathom.parser/waiting",-798662278).cljs$core$IFn$_invoke$arity$1(inst_64577);
var inst_64773 = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(inst_64769__$1,inst_64772__$1);
var inst_64774 = new cljs.core.Keyword("pathom","as","pathom/as",-2134138450).cljs$core$IFn$_invoke$arity$1(inst_64768);
var inst_64775 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(inst_64768,new cljs.core.Keyword("pathom","as","pathom/as",-2134138450));
var inst_64776 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(waiting,inst_64772__$1);
var state_64868__$1 = (function (){var statearr_64933 = state_64868;
(statearr_64933[(7)] = inst_64775);

(statearr_64933[(8)] = inst_64773);

(statearr_64933[(23)] = inst_64771);

(statearr_64933[(9)] = inst_64774);

(statearr_64933[(16)] = inst_64769__$1);

(statearr_64933[(22)] = inst_64767__$1);

(statearr_64933[(13)] = inst_64772__$1);

(statearr_64933[(10)] = inst_64776);

(statearr_64933[(17)] = inst_64770);

return statearr_64933;
})();
if(cljs.core.truth_(inst_64577)){
var statearr_64934_66663 = state_64868__$1;
(statearr_64934_66663[(1)] = (59));

} else {
var statearr_64935_66664 = state_64868__$1;
(statearr_64935_66664[(1)] = (60));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64871 === (60))){
var inst_64581 = (state_64868[(24)]);
var inst_64776 = (state_64868[(10)]);
var inst_64846 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_64847 = cljs.core.PersistentHashSet.EMPTY;
var inst_64850 = [inst_64581];
var inst_64851 = cljs.core.PersistentHashSet.createAsIfByAssoc(inst_64850);
var inst_64852 = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(inst_64851,new cljs.core.Keyword("com.wsscode.pathom.parser","process-channel","com.wsscode.pathom.parser/process-channel",1432129963));
var inst_64853 = cljs.core.remove.cljs$core$IFn$_invoke$arity$1(inst_64852);
var inst_64854 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(inst_64847,inst_64853,processing);
var inst_64855 = cljs.core.PersistentVector.EMPTY;
var inst_64856 = [res,inst_64776,inst_64854,key_iterations,inst_64855];
var inst_64857 = (new cljs.core.PersistentVector(null,5,(5),inst_64846,inst_64856,null));
var state_64868__$1 = state_64868;
var statearr_64939_66665 = state_64868__$1;
(statearr_64939_66665[(2)] = inst_64857);

(statearr_64939_66665[(1)] = (61));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64871 === (27))){
var state_64868__$1 = state_64868;
var statearr_64940_66666 = state_64868__$1;
(statearr_64940_66666[(2)] = false);

(statearr_64940_66666[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64871 === (1))){
var state_64868__$1 = state_64868;
var statearr_64945_66667 = state_64868__$1;
(statearr_64945_66667[(2)] = null);

(statearr_64945_66667[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64871 === (24))){
var state_64868__$1 = state_64868;
var statearr_64949_66668 = state_64868__$1;
(statearr_64949_66668[(2)] = false);

(statearr_64949_66668[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64871 === (55))){
var inst_64759 = (state_64868[(2)]);
var state_64868__$1 = state_64868;
var statearr_64958_66669 = state_64868__$1;
(statearr_64958_66669[(2)] = inst_64759);

(statearr_64958_66669[(1)] = (52));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64871 === (39))){
var state_64868__$1 = state_64868;
var statearr_64959_66670 = state_64868__$1;
(statearr_64959_66670[(2)] = false);

(statearr_64959_66670[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64871 === (46))){
var inst_64665 = (state_64868[(25)]);
var inst_64701 = (state_64868[(2)]);
var inst_64702 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_64701,new cljs.core.Keyword("com.wsscode.pathom.parser","process-channel","com.wsscode.pathom.parser/process-channel",1432129963));
var inst_64703 = cljs.core.async.close_BANG_(inst_64702);
var inst_64704 = cljs.core.next(inst_64665);
var inst_64619 = inst_64704;
var inst_64620 = null;
var inst_64621 = (0);
var inst_64622 = (0);
var state_64868__$1 = (function (){var statearr_64963 = state_64868;
(statearr_64963[(26)] = inst_64619);

(statearr_64963[(18)] = inst_64622);

(statearr_64963[(27)] = inst_64621);

(statearr_64963[(28)] = inst_64703);

(statearr_64963[(20)] = inst_64620);

return statearr_64963;
})();
var statearr_64967_66674 = state_64868__$1;
(statearr_64967_66674[(2)] = null);

(statearr_64967_66674[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64871 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_64868,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_64550 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","processing-count","com.wsscode.pathom.parser/processing-count",853696659)];
var inst_64551 = cljs.core.count(processing);
var inst_64552 = [new cljs.core.Keyword("com.wsscode.pathom.parser","processing-wait-next","com.wsscode.pathom.parser/processing-wait-next",-1000039842),inst_64551];
var inst_64553 = cljs.core.PersistentHashMap.fromArrays(inst_64550,inst_64552);
var inst_64554 = com.wsscode.pathom.trace.trace(env,inst_64553);
var state_64868__$1 = (function (){var statearr_64976 = state_64868;
(statearr_64976[(29)] = inst_64554);

return statearr_64976;
})();
if(cljs.core.truth_(processing_recheck_timer)){
var statearr_64977_66677 = state_64868__$1;
(statearr_64977_66677[(1)] = (5));

} else {
var statearr_64978_66679 = state_64868__$1;
(statearr_64978_66679[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64871 === (54))){
var state_64868__$1 = state_64868;
var statearr_64984_66680 = state_64868__$1;
(statearr_64984_66680[(2)] = false);

(statearr_64984_66680[(1)] = (55));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64871 === (15))){
var inst_64605 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_64606 = cljs.core.PersistentVector.EMPTY;
var inst_64607 = [res,waiting,processing,key_iterations,inst_64606];
var inst_64608 = (new cljs.core.PersistentVector(null,5,(5),inst_64605,inst_64607,null));
var state_64868__$1 = state_64868;
var statearr_64987_66682 = state_64868__$1;
(statearr_64987_66682[(2)] = inst_64608);

(statearr_64987_66682[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64871 === (48))){
var inst_64592 = (state_64868[(30)]);
var inst_64726 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_64727 = cljs.core.PersistentHashSet.EMPTY;
var inst_64728 = cljs.core.PersistentHashSet.EMPTY;
var inst_64729 = cljs.core.PersistentVector.EMPTY;
var inst_64732 = cljs.core.map.cljs$core$IFn$_invoke$arity$1(indexed_props);
var inst_64733 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(inst_64729,inst_64732,inst_64592);
var inst_64734 = [res,inst_64727,inst_64728,key_iterations,inst_64733];
var inst_64735 = (new cljs.core.PersistentVector(null,5,(5),inst_64726,inst_64734,null));
var state_64868__$1 = state_64868;
var statearr_64989_66685 = state_64868__$1;
(statearr_64989_66685[(2)] = inst_64735);

(statearr_64989_66685[(1)] = (49));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64871 === (50))){
var inst_64577 = (state_64868[(21)]);
var inst_64751 = inst_64577.cljs$lang$protocol_mask$partition0$;
var inst_64752 = (inst_64751 & (64));
var inst_64753 = inst_64577.cljs$core$ISeq$;
var inst_64754 = (cljs.core.PROTOCOL_SENTINEL === inst_64753);
var inst_64755 = ((inst_64752) || (inst_64754));
var state_64868__$1 = state_64868;
if(cljs.core.truth_(inst_64755)){
var statearr_64998_66686 = state_64868__$1;
(statearr_64998_66686[(1)] = (53));

} else {
var statearr_65001_66687 = state_64868__$1;
(statearr_65001_66687[(1)] = (54));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64871 === (21))){
var inst_64619 = (state_64868[(26)]);
var inst_64665 = (state_64868[(25)]);
var inst_64665__$1 = cljs.core.seq(inst_64619);
var state_64868__$1 = (function (){var statearr_65005 = state_64868;
(statearr_65005[(25)] = inst_64665__$1);

return statearr_65005;
})();
if(inst_64665__$1){
var statearr_65006_66688 = state_64868__$1;
(statearr_65006_66688[(1)] = (32));

} else {
var statearr_65007_66689 = state_64868__$1;
(statearr_65007_66689[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64871 === (31))){
var inst_64619 = (state_64868[(26)]);
var inst_64622 = (state_64868[(18)]);
var inst_64621 = (state_64868[(27)]);
var inst_64620 = (state_64868[(20)]);
var inst_64658 = (state_64868[(2)]);
var inst_64659 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_64658,new cljs.core.Keyword("com.wsscode.pathom.parser","process-channel","com.wsscode.pathom.parser/process-channel",1432129963));
var inst_64660 = cljs.core.async.close_BANG_(inst_64659);
var inst_64662 = (inst_64622 + (1));
var tmp64994 = inst_64619;
var tmp64995 = inst_64621;
var tmp64996 = inst_64620;
var inst_64619__$1 = tmp64994;
var inst_64620__$1 = tmp64996;
var inst_64621__$1 = tmp64995;
var inst_64622__$1 = inst_64662;
var state_64868__$1 = (function (){var statearr_65012 = state_64868;
(statearr_65012[(26)] = inst_64619__$1);

(statearr_65012[(18)] = inst_64622__$1);

(statearr_65012[(27)] = inst_64621__$1);

(statearr_65012[(20)] = inst_64620__$1);

(statearr_65012[(31)] = inst_64660);

return statearr_65012;
})();
var statearr_65013_66690 = state_64868__$1;
(statearr_65013_66690[(2)] = null);

(statearr_65013_66690[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64871 === (32))){
var inst_64665 = (state_64868[(25)]);
var inst_64667 = cljs.core.chunked_seq_QMARK_(inst_64665);
var state_64868__$1 = state_64868;
if(inst_64667){
var statearr_65016_66691 = state_64868__$1;
(statearr_65016_66691[(1)] = (35));

} else {
var statearr_65018_66692 = state_64868__$1;
(statearr_65018_66692[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64871 === (40))){
var inst_64696 = (state_64868[(2)]);
var state_64868__$1 = state_64868;
if(cljs.core.truth_(inst_64696)){
var statearr_65024_66693 = state_64868__$1;
(statearr_65024_66693[(1)] = (44));

} else {
var statearr_65026_66694 = state_64868__$1;
(statearr_65026_66694[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64871 === (56))){
var inst_64577 = (state_64868[(21)]);
var inst_64764 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_64577);
var state_64868__$1 = state_64868;
var statearr_65028_66696 = state_64868__$1;
(statearr_65028_66696[(2)] = inst_64764);

(statearr_65028_66696[(1)] = (58));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64871 === (33))){
var state_64868__$1 = state_64868;
var statearr_65030_66697 = state_64868__$1;
(statearr_65030_66697[(2)] = null);

(statearr_65030_66697[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64871 === (13))){
var inst_64577 = (state_64868[(21)]);
var inst_64747 = (inst_64577 == null);
var inst_64748 = cljs.core.not(inst_64747);
var state_64868__$1 = state_64868;
if(inst_64748){
var statearr_65033_66698 = state_64868__$1;
(statearr_65033_66698[(1)] = (50));

} else {
var statearr_65034_66699 = state_64868__$1;
(statearr_65034_66699[(1)] = (51));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64871 === (22))){
var inst_64712 = (state_64868[(2)]);
var state_64868__$1 = state_64868;
var statearr_65036_66700 = state_64868__$1;
(statearr_65036_66700[(2)] = inst_64712);

(statearr_65036_66700[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64871 === (36))){
var inst_64665 = (state_64868[(25)]);
var inst_64677 = (state_64868[(32)]);
var inst_64677__$1 = cljs.core.first(inst_64665);
var inst_64679 = (inst_64677__$1 == null);
var inst_64680 = cljs.core.not(inst_64679);
var state_64868__$1 = (function (){var statearr_65039 = state_64868;
(statearr_65039[(32)] = inst_64677__$1);

return statearr_65039;
})();
if(inst_64680){
var statearr_65041_66701 = state_64868__$1;
(statearr_65041_66701[(1)] = (38));

} else {
var statearr_65042_66702 = state_64868__$1;
(statearr_65042_66702[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64871 === (41))){
var state_64868__$1 = state_64868;
var statearr_65048_66703 = state_64868__$1;
(statearr_65048_66703[(2)] = true);

(statearr_65048_66703[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64871 === (43))){
var inst_64693 = (state_64868[(2)]);
var state_64868__$1 = state_64868;
var statearr_65050_66707 = state_64868__$1;
(statearr_65050_66707[(2)] = inst_64693);

(statearr_65050_66707[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64871 === (61))){
var inst_64859 = (state_64868[(2)]);
var state_64868__$1 = state_64868;
var statearr_65051_66708 = state_64868__$1;
(statearr_65051_66708[(2)] = inst_64859);

(statearr_65051_66708[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64871 === (29))){
var inst_64628 = (state_64868[(19)]);
var inst_64655 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_64628);
var state_64868__$1 = state_64868;
var statearr_65055_66709 = state_64868__$1;
(statearr_65055_66709[(2)] = inst_64655);

(statearr_65055_66709[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64871 === (44))){
var inst_64677 = (state_64868[(32)]);
var inst_64698 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_64677);
var state_64868__$1 = state_64868;
var statearr_65056_66713 = state_64868__$1;
(statearr_65056_66713[(2)] = inst_64698);

(statearr_65056_66713[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64871 === (6))){
var state_64868__$1 = state_64868;
var statearr_65058_66714 = state_64868__$1;
(statearr_65058_66714[(2)] = null);

(statearr_65058_66714[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64871 === (28))){
var inst_64645 = (state_64868[(2)]);
var state_64868__$1 = state_64868;
var statearr_65063_66715 = state_64868__$1;
(statearr_65063_66715[(2)] = inst_64645);

(statearr_65063_66715[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64871 === (64))){
var inst_64574 = (state_64868[(33)]);
var inst_64559 = (state_64868[(14)]);
var inst_64775 = (state_64868[(7)]);
var inst_64773 = (state_64868[(8)]);
var inst_64576 = (state_64868[(34)]);
var inst_64771 = (state_64868[(23)]);
var inst_64774 = (state_64868[(9)]);
var inst_64577 = (state_64868[(21)]);
var inst_64769 = (state_64868[(16)]);
var inst_64581 = (state_64868[(24)]);
var inst_64767 = (state_64868[(22)]);
var inst_64772 = (state_64868[(13)]);
var inst_64554 = (state_64868[(29)]);
var inst_64776 = (state_64868[(10)]);
var inst_64770 = (state_64868[(17)]);
var inst_64792 = (state_64868[(2)]);
var inst_64793 = com.wsscode.pathom.trace.trace(env,inst_64792);
var inst_64794 = new cljs.core.Keyword("com.wsscode.pathom.core","entity","com.wsscode.pathom.core/entity",884706031).cljs$core$IFn$_invoke$arity$1(env);
var inst_64796 = (function (){var p = inst_64581;
var merge_result_QMARK_ = inst_64770;
var recheck_ch = inst_64559;
var response_value = inst_64775;
var vec__64545 = inst_64576;
var _ = inst_64554;
var key_as = inst_64774;
var provides_SINGLEQUOTE_ = inst_64773;
var msg = inst_64577;
var waiting__$1 = inst_64776;
var processing_SINGLEQUOTE_ = inst_64574;
var map__64743 = inst_64767;
var waiting_SINGLEQUOTE_ = inst_64772;
var error = inst_64771;
var provides = inst_64769;
return ((function (p,merge_result_QMARK_,recheck_ch,response_value,vec__64545,_,key_as,provides_SINGLEQUOTE_,msg,waiting__$1,processing_SINGLEQUOTE_,map__64743,waiting_SINGLEQUOTE_,error,provides,inst_64574,inst_64559,inst_64775,inst_64773,inst_64576,inst_64771,inst_64774,inst_64577,inst_64769,inst_64581,inst_64767,inst_64772,inst_64554,inst_64776,inst_64770,inst_64792,inst_64793,inst_64794,state_val_64871,c__45808__auto__,map__64524,map__64524__$1,env,done_signal_STAR_,processing_recheck_timer,active_paths,path){
return (function (p1__64517_SHARP_){
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(com.wsscode.pathom.parser.value_merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([response_value,p1__64517_SHARP_], 0));
});
;})(p,merge_result_QMARK_,recheck_ch,response_value,vec__64545,_,key_as,provides_SINGLEQUOTE_,msg,waiting__$1,processing_SINGLEQUOTE_,map__64743,waiting_SINGLEQUOTE_,error,provides,inst_64574,inst_64559,inst_64775,inst_64773,inst_64576,inst_64771,inst_64774,inst_64577,inst_64769,inst_64581,inst_64767,inst_64772,inst_64554,inst_64776,inst_64770,inst_64792,inst_64793,inst_64794,state_val_64871,c__45808__auto__,map__64524,map__64524__$1,env,done_signal_STAR_,processing_recheck_timer,active_paths,path))
})();
var inst_64797 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(inst_64794,inst_64796);
var inst_64798 = com.wsscode.pathom.parser.parallel_flush_watchers(env,key_watchers,inst_64773,inst_64771);
var state_64868__$1 = (function (){var statearr_65071 = state_64868;
(statearr_65071[(35)] = inst_64793);

(statearr_65071[(36)] = inst_64797);

(statearr_65071[(37)] = inst_64798);

return statearr_65071;
})();
if(cljs.core.truth_(inst_64770)){
var statearr_65074_66718 = state_64868__$1;
(statearr_65074_66718[(1)] = (65));

} else {
var statearr_65075_66720 = state_64868__$1;
(statearr_65075_66720[(1)] = (66));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64871 === (51))){
var state_64868__$1 = state_64868;
var statearr_65079_66721 = state_64868__$1;
(statearr_65079_66721[(2)] = false);

(statearr_65079_66721[(1)] = (52));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64871 === (25))){
var inst_64649 = (state_64868[(2)]);
var state_64868__$1 = state_64868;
if(cljs.core.truth_(inst_64649)){
var statearr_65083_66725 = state_64868__$1;
(statearr_65083_66725[(1)] = (29));

} else {
var statearr_65084_66726 = state_64868__$1;
(statearr_65084_66726[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64871 === (34))){
var inst_64710 = (state_64868[(2)]);
var state_64868__$1 = state_64868;
var statearr_65085_66727 = state_64868__$1;
(statearr_65085_66727[(2)] = inst_64710);

(statearr_65085_66727[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64871 === (17))){
var inst_64740 = (state_64868[(2)]);
var state_64868__$1 = state_64868;
var statearr_65089_66731 = state_64868__$1;
(statearr_65089_66731[(2)] = inst_64740);

(statearr_65089_66731[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64871 === (3))){
var inst_64541 = (state_64868[(2)]);
var state_64868__$1 = state_64868;
var statearr_65094_66732 = state_64868__$1;
(statearr_65094_66732[(2)] = inst_64541);


cljs.core.async.impl.ioc_helpers.process_exception(state_64868__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64871 === (12))){
var inst_64574 = (state_64868[(33)]);
var inst_64559 = (state_64868[(14)]);
var inst_64576 = (state_64868[(34)]);
var inst_64592 = (state_64868[(30)]);
var inst_64577 = (state_64868[(21)]);
var inst_64581 = (state_64868[(24)]);
var inst_64554 = (state_64868[(29)]);
var inst_64587 = cljs.core.keys(indexed_props);
var inst_64588 = cljs.core.set(inst_64587);
var inst_64590 = cljs.core.keys(res);
var inst_64591 = cljs.core.set(inst_64590);
var inst_64592__$1 = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(inst_64588,inst_64591);
var inst_64594 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","processing","com.wsscode.pathom.parser/processing",-1928666102)];
var inst_64596 = [new cljs.core.Keyword(null,"processes","processes",-546984164),new cljs.core.Keyword(null,"missing-props","missing-props",237278205)];
var inst_64597 = [processing,inst_64592__$1];
var inst_64598 = cljs.core.PersistentHashMap.fromArrays(inst_64596,inst_64597);
var inst_64599 = [new cljs.core.Keyword("com.wsscode.pathom.parser","trigger-reader-retry","com.wsscode.pathom.parser/trigger-reader-retry",-1526068301),inst_64598];
var inst_64600 = cljs.core.PersistentHashMap.fromArrays(inst_64594,inst_64599);
var inst_64601 = com.wsscode.pathom.trace.trace(env,inst_64600);
var inst_64602 = (function (){var missing_props = inst_64592__$1;
var p = inst_64581;
var recheck_ch = inst_64559;
var vec__64545 = inst_64576;
var _ = inst_64554;
var msg = inst_64577;
var processing_SINGLEQUOTE_ = inst_64574;
var all_props = inst_64588;
var current_props = inst_64591;
return ((function (missing_props,p,recheck_ch,vec__64545,_,msg,processing_SINGLEQUOTE_,all_props,current_props,inst_64574,inst_64559,inst_64576,inst_64592,inst_64577,inst_64581,inst_64554,inst_64587,inst_64588,inst_64590,inst_64591,inst_64592__$1,inst_64594,inst_64596,inst_64597,inst_64598,inst_64599,inst_64600,inst_64601,state_val_64871,c__45808__auto__,map__64524,map__64524__$1,env,done_signal_STAR_,processing_recheck_timer,active_paths,path){
return (function (p1__64516_SHARP_){
return cljs.core.contains_QMARK_(cljs.core.deref(active_paths),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,p1__64516_SHARP_));
});
;})(missing_props,p,recheck_ch,vec__64545,_,msg,processing_SINGLEQUOTE_,all_props,current_props,inst_64574,inst_64559,inst_64576,inst_64592,inst_64577,inst_64581,inst_64554,inst_64587,inst_64588,inst_64590,inst_64591,inst_64592__$1,inst_64594,inst_64596,inst_64597,inst_64598,inst_64599,inst_64600,inst_64601,state_val_64871,c__45808__auto__,map__64524,map__64524__$1,env,done_signal_STAR_,processing_recheck_timer,active_paths,path))
})();
var inst_64603 = cljs.core.some(inst_64602,inst_64592__$1);
var state_64868__$1 = (function (){var statearr_65102 = state_64868;
(statearr_65102[(38)] = inst_64601);

(statearr_65102[(30)] = inst_64592__$1);

return statearr_65102;
})();
if(cljs.core.truth_(inst_64603)){
var statearr_65108_66751 = state_64868__$1;
(statearr_65108_66751[(1)] = (15));

} else {
var statearr_65110_66752 = state_64868__$1;
(statearr_65110_66752[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64871 === (2))){
var inst_64864 = (state_64868[(2)]);
var state_64868__$1 = state_64868;
return cljs.core.async.impl.ioc_helpers.return_chan(state_64868__$1,inst_64864);
} else {
if((state_val_64871 === (66))){
var inst_64773 = (state_64868[(8)]);
var inst_64776 = (state_64868[(10)]);
var inst_64820 = com.wsscode.pathom.parser.remove_error_values(res);
var inst_64821 = cljs.core.keys(inst_64820);
var inst_64822 = cljs.core.set(inst_64821);
var inst_64823 = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(inst_64822,com.wsscode.pathom.parser.ast__GT_out_key);
var inst_64824 = cljs.core.vec(inst_64773);
var inst_64825 = com.wsscode.pathom.parser.focus_subquery(tx,inst_64824);
var inst_64826 = com.wsscode.pathom.parser.query__GT_ast(inst_64825);
var inst_64827 = new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(inst_64826);
var inst_64828 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(inst_64823,inst_64827);
var inst_64829 = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(inst_64828);
var inst_64831 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","loop-keys","com.wsscode.pathom.parser/loop-keys",1134143507)];
var inst_64832 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"key","key",-1516042587),inst_64829);
var inst_64833 = [new cljs.core.Keyword("com.wsscode.pathom.parser","reset-loop","com.wsscode.pathom.parser/reset-loop",-808527604),inst_64832];
var inst_64834 = cljs.core.PersistentHashMap.fromArrays(inst_64831,inst_64833);
var inst_64835 = com.wsscode.pathom.trace.trace(env,inst_64834);
var inst_64836 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_64837 = cljs.core.PersistentHashSet.EMPTY;
var inst_64838 = cljs.core.remove.cljs$core$IFn$_invoke$arity$1(inst_64773);
var inst_64839 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(inst_64837,inst_64838,inst_64776);
var inst_64840 = [res,inst_64839,processing,key_iterations,inst_64829];
var inst_64841 = (new cljs.core.PersistentVector(null,5,(5),inst_64836,inst_64840,null));
var state_64868__$1 = (function (){var statearr_65117 = state_64868;
(statearr_65117[(39)] = inst_64835);

return statearr_65117;
})();
var statearr_65118_66761 = state_64868__$1;
(statearr_65118_66761[(2)] = inst_64841);

(statearr_65118_66761[(1)] = (67));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64871 === (23))){
var inst_64628 = (state_64868[(19)]);
var inst_64634 = inst_64628.cljs$lang$protocol_mask$partition0$;
var inst_64636 = (inst_64634 & (64));
var inst_64637 = inst_64628.cljs$core$ISeq$;
var inst_64639 = (cljs.core.PROTOCOL_SENTINEL === inst_64637);
var inst_64640 = ((inst_64636) || (inst_64639));
var state_64868__$1 = state_64868;
if(cljs.core.truth_(inst_64640)){
var statearr_65122_66763 = state_64868__$1;
(statearr_65122_66763[(1)] = (26));

} else {
var statearr_65123_66764 = state_64868__$1;
(statearr_65123_66764[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64871 === (47))){
var inst_64718 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_64720 = cljs.core.PersistentHashSet.EMPTY;
var inst_64721 = cljs.core.PersistentHashSet.EMPTY;
var inst_64722 = cljs.core.PersistentVector.EMPTY;
var inst_64723 = [res,inst_64720,inst_64721,key_iterations,inst_64722];
var inst_64724 = (new cljs.core.PersistentVector(null,5,(5),inst_64718,inst_64723,null));
var state_64868__$1 = state_64868;
var statearr_65126_66767 = state_64868__$1;
(statearr_65126_66767[(2)] = inst_64724);

(statearr_65126_66767[(1)] = (49));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64871 === (35))){
var inst_64665 = (state_64868[(25)]);
var inst_64669 = cljs.core.chunk_first(inst_64665);
var inst_64670 = cljs.core.chunk_rest(inst_64665);
var inst_64671 = cljs.core.count(inst_64669);
var inst_64619 = inst_64670;
var inst_64620 = inst_64669;
var inst_64621 = inst_64671;
var inst_64622 = (0);
var state_64868__$1 = (function (){var statearr_65130 = state_64868;
(statearr_65130[(26)] = inst_64619);

(statearr_65130[(18)] = inst_64622);

(statearr_65130[(27)] = inst_64621);

(statearr_65130[(20)] = inst_64620);

return statearr_65130;
})();
var statearr_65131_66769 = state_64868__$1;
(statearr_65131_66769[(2)] = null);

(statearr_65131_66769[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64871 === (19))){
var inst_64714 = (state_64868[(2)]);
var inst_64715 = cljs.core.deref(done_signal_STAR_);
var state_64868__$1 = (function (){var statearr_65133 = state_64868;
(statearr_65133[(40)] = inst_64714);

return statearr_65133;
})();
if(cljs.core.truth_(inst_64715)){
var statearr_65134_66770 = state_64868__$1;
(statearr_65134_66770[(1)] = (47));

} else {
var statearr_65135_66771 = state_64868__$1;
(statearr_65135_66771[(1)] = (48));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64871 === (57))){
var inst_64577 = (state_64868[(21)]);
var state_64868__$1 = state_64868;
var statearr_65139_66772 = state_64868__$1;
(statearr_65139_66772[(2)] = inst_64577);

(statearr_65139_66772[(1)] = (58));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64871 === (11))){
var inst_64559 = (state_64868[(14)]);
var inst_64576 = (state_64868[(34)]);
var inst_64581 = (state_64868[(24)]);
var inst_64576__$1 = (state_64868[(2)]);
var inst_64577 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_64576__$1,(0),null);
var inst_64581__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_64576__$1,(1),null);
var inst_64582 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_64581__$1,inst_64559);
var state_64868__$1 = (function (){var statearr_65143 = state_64868;
(statearr_65143[(34)] = inst_64576__$1);

(statearr_65143[(21)] = inst_64577);

(statearr_65143[(24)] = inst_64581__$1);

return statearr_65143;
})();
if(inst_64582){
var statearr_65144_66773 = state_64868__$1;
(statearr_65144_66773[(1)] = (12));

} else {
var statearr_65145_66774 = state_64868__$1;
(statearr_65145_66774[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64871 === (9))){
var inst_64563 = (state_64868[(15)]);
var state_64868__$1 = state_64868;
var statearr_65146_66775 = state_64868__$1;
(statearr_65146_66775[(2)] = inst_64563);

(statearr_65146_66775[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64871 === (5))){
var inst_64556 = cljs.core.async.timeout(processing_recheck_timer);
var state_64868__$1 = state_64868;
var statearr_65147_66777 = state_64868__$1;
(statearr_65147_66777[(2)] = inst_64556);

(statearr_65147_66777[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64871 === (14))){
var inst_64862 = (state_64868[(2)]);
var state_64868__$1 = state_64868;
var statearr_65153_66778 = state_64868__$1;
(statearr_65153_66778[(2)] = inst_64862);


cljs.core.async.impl.ioc_helpers.process_exception(state_64868__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64871 === (45))){
var inst_64677 = (state_64868[(32)]);
var state_64868__$1 = state_64868;
var statearr_65154_66782 = state_64868__$1;
(statearr_65154_66782[(2)] = inst_64677);

(statearr_65154_66782[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64871 === (53))){
var state_64868__$1 = state_64868;
var statearr_65156_66783 = state_64868__$1;
(statearr_65156_66783[(2)] = true);

(statearr_65156_66783[(1)] = (55));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64871 === (26))){
var state_64868__$1 = state_64868;
var statearr_65157_66785 = state_64868__$1;
(statearr_65157_66785[(2)] = true);

(statearr_65157_66785[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64871 === (16))){
var inst_64592 = (state_64868[(30)]);
var inst_64610 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","missing-props","com.wsscode.pathom.parser/missing-props",1730773516)];
var inst_64611 = [new cljs.core.Keyword("com.wsscode.pathom.parser","trigger-recheck-schedule","com.wsscode.pathom.parser/trigger-recheck-schedule",-927032403),inst_64592];
var inst_64612 = cljs.core.PersistentHashMap.fromArrays(inst_64610,inst_64611);
var inst_64613 = com.wsscode.pathom.trace.trace(env,inst_64612);
var inst_64618 = cljs.core.seq(processing);
var inst_64619 = inst_64618;
var inst_64620 = null;
var inst_64621 = (0);
var inst_64622 = (0);
var state_64868__$1 = (function (){var statearr_65159 = state_64868;
(statearr_65159[(26)] = inst_64619);

(statearr_65159[(41)] = inst_64613);

(statearr_65159[(18)] = inst_64622);

(statearr_65159[(27)] = inst_64621);

(statearr_65159[(20)] = inst_64620);

return statearr_65159;
})();
var statearr_65163_66786 = state_64868__$1;
(statearr_65163_66786[(2)] = null);

(statearr_65163_66786[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64871 === (38))){
var inst_64677 = (state_64868[(32)]);
var inst_64685 = inst_64677.cljs$lang$protocol_mask$partition0$;
var inst_64686 = (inst_64685 & (64));
var inst_64687 = inst_64677.cljs$core$ISeq$;
var inst_64688 = (cljs.core.PROTOCOL_SENTINEL === inst_64687);
var inst_64689 = ((inst_64686) || (inst_64688));
var state_64868__$1 = state_64868;
if(cljs.core.truth_(inst_64689)){
var statearr_65164_66791 = state_64868__$1;
(statearr_65164_66791[(1)] = (41));

} else {
var statearr_65165_66792 = state_64868__$1;
(statearr_65165_66792[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64871 === (30))){
var inst_64628 = (state_64868[(19)]);
var state_64868__$1 = state_64868;
var statearr_65168_66793 = state_64868__$1;
(statearr_65168_66793[(2)] = inst_64628);

(statearr_65168_66793[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64871 === (10))){
var inst_64574 = (state_64868[(33)]);
var inst_64574__$1 = (state_64868[(2)]);
var state_64868__$1 = (function (){var statearr_65169 = state_64868;
(statearr_65169[(33)] = inst_64574__$1);

return statearr_65169;
})();
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_64868__$1,(11),inst_64574__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"priority","priority",1431093715),true], 0));
} else {
if((state_val_64871 === (18))){
var inst_64622 = (state_64868[(18)]);
var inst_64621 = (state_64868[(27)]);
var inst_64624 = (inst_64622 < inst_64621);
var inst_64625 = inst_64624;
var state_64868__$1 = state_64868;
if(cljs.core.truth_(inst_64625)){
var statearr_65170_66794 = state_64868__$1;
(statearr_65170_66794[(1)] = (20));

} else {
var statearr_65173_66795 = state_64868__$1;
(statearr_65173_66795[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64871 === (52))){
var inst_64762 = (state_64868[(2)]);
var state_64868__$1 = state_64868;
if(cljs.core.truth_(inst_64762)){
var statearr_65175_66797 = state_64868__$1;
(statearr_65175_66797[(1)] = (56));

} else {
var statearr_65176_66798 = state_64868__$1;
(statearr_65176_66798[(1)] = (57));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64871 === (67))){
var inst_64844 = (state_64868[(2)]);
var state_64868__$1 = state_64868;
var statearr_65177_66799 = state_64868__$1;
(statearr_65177_66799[(2)] = inst_64844);

(statearr_65177_66799[(1)] = (61));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64871 === (42))){
var state_64868__$1 = state_64868;
var statearr_65180_66800 = state_64868__$1;
(statearr_65180_66800[(2)] = false);

(statearr_65180_66800[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64871 === (37))){
var inst_64707 = (state_64868[(2)]);
var state_64868__$1 = state_64868;
var statearr_65181_66801 = state_64868__$1;
(statearr_65181_66801[(2)] = inst_64707);

(statearr_65181_66801[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64871 === (63))){
var inst_64786 = (state_64868[(12)]);
var state_64868__$1 = state_64868;
var statearr_65182_66802 = state_64868__$1;
(statearr_65182_66802[(2)] = inst_64786);

(statearr_65182_66802[(1)] = (64));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64871 === (8))){
var inst_64559 = (state_64868[(14)]);
var inst_64563 = (state_64868[(15)]);
var inst_64571 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_64563,inst_64559);
var state_64868__$1 = state_64868;
var statearr_65185_66803 = state_64868__$1;
(statearr_65185_66803[(2)] = inst_64571);

(statearr_65185_66803[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64871 === (49))){
var inst_64738 = (state_64868[(2)]);
var state_64868__$1 = state_64868;
var statearr_65187_66806 = state_64868__$1;
(statearr_65187_66806[(2)] = inst_64738);

(statearr_65187_66806[(1)] = (17));


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
});})(c__45808__auto__,map__64524,map__64524__$1,env,done_signal_STAR_,processing_recheck_timer,active_paths,path))
;
return ((function (switch__45525__auto__,c__45808__auto__,map__64524,map__64524__$1,env,done_signal_STAR_,processing_recheck_timer,active_paths,path){
return (function() {
var com$wsscode$pathom$parser$process_next_message_$_state_machine__45526__auto__ = null;
var com$wsscode$pathom$parser$process_next_message_$_state_machine__45526__auto____0 = (function (){
var statearr_65190 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_65190[(0)] = com$wsscode$pathom$parser$process_next_message_$_state_machine__45526__auto__);

(statearr_65190[(1)] = (1));

return statearr_65190;
});
var com$wsscode$pathom$parser$process_next_message_$_state_machine__45526__auto____1 = (function (state_64868){
while(true){
var ret_value__45527__auto__ = (function (){try{while(true){
var result__45528__auto__ = switch__45525__auto__(state_64868);
if(cljs.core.keyword_identical_QMARK_(result__45528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45528__auto__;
}
break;
}
}catch (e65191){if((e65191 instanceof Object)){
var ex__45529__auto__ = e65191;
var statearr_65192_66811 = state_64868;
(statearr_65192_66811[(5)] = ex__45529__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_64868);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e65191;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66812 = state_64868;
state_64868 = G__66812;
continue;
} else {
return ret_value__45527__auto__;
}
break;
}
});
com$wsscode$pathom$parser$process_next_message_$_state_machine__45526__auto__ = function(state_64868){
switch(arguments.length){
case 0:
return com$wsscode$pathom$parser$process_next_message_$_state_machine__45526__auto____0.call(this);
case 1:
return com$wsscode$pathom$parser$process_next_message_$_state_machine__45526__auto____1.call(this,state_64868);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$parser$process_next_message_$_state_machine__45526__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$parser$process_next_message_$_state_machine__45526__auto____0;
com$wsscode$pathom$parser$process_next_message_$_state_machine__45526__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$parser$process_next_message_$_state_machine__45526__auto____1;
return com$wsscode$pathom$parser$process_next_message_$_state_machine__45526__auto__;
})()
;})(switch__45525__auto__,c__45808__auto__,map__64524,map__64524__$1,env,done_signal_STAR_,processing_recheck_timer,active_paths,path))
})();
var state__45810__auto__ = (function (){var statearr_65196 = f__45809__auto__();
(statearr_65196[(6)] = c__45808__auto__);

return statearr_65196;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45810__auto__);
});})(c__45808__auto__,map__64524,map__64524__$1,env,done_signal_STAR_,processing_recheck_timer,active_paths,path))
);

return c__45808__auto__;
});
com.wsscode.pathom.parser.zero_inc = cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.inc,(0));
com.wsscode.pathom.parser.call_parallel_parser = (function com$wsscode$pathom$parser$call_parallel_parser(p__65203,p__65204,tx){
var map__65205 = p__65203;
var map__65205__$1 = (((((!((map__65205 == null))))?(((((map__65205.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65205.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65205):map__65205);
var read = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65205__$1,new cljs.core.Keyword(null,"read","read",1140058661));
var mutate = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65205__$1,new cljs.core.Keyword(null,"mutate","mutate",1422419038));
var map__65206 = p__65204;
var map__65206__$1 = (((((!((map__65206 == null))))?(((((map__65206.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65206.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65206):map__65206);
var env = map__65206__$1;
var waiting = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65206__$1,new cljs.core.Keyword("com.wsscode.pathom.parser","waiting","com.wsscode.pathom.parser/waiting",-798662278));
var key_watchers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65206__$1,new cljs.core.Keyword("com.wsscode.pathom.parser","key-watchers","com.wsscode.pathom.parser/key-watchers",-1670257404));
var max_key_iterations = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__65206__$1,new cljs.core.Keyword("com.wsscode.pathom.parser","max-key-iterations","com.wsscode.pathom.parser/max-key-iterations",-1656113103),(5));
var key_process_timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65206__$1,new cljs.core.Keyword("com.wsscode.pathom.parser","key-process-timeout","com.wsscode.pathom.parser/key-process-timeout",-1793561165));
var key_process_timeout_step = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65206__$1,new cljs.core.Keyword("com.wsscode.pathom.parser","key-process-timeout-step","com.wsscode.pathom.parser/key-process-timeout-step",202902239));
var entity_path_cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65206__$1,new cljs.core.Keyword("com.wsscode.pathom.core","entity-path-cache","com.wsscode.pathom.core/entity-path-cache",-1017384397));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65206__$1,new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661));
var c__45808__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__45808__auto__,map__65205,map__65205__$1,read,mutate,map__65206,map__65206__$1,env,waiting,key_watchers,max_key_iterations,key_process_timeout,key_process_timeout_step,entity_path_cache,path){
return (function (){
var f__45809__auto__ = (function (){var switch__45525__auto__ = ((function (c__45808__auto__,map__65205,map__65205__$1,read,mutate,map__65206,map__65206__$1,env,waiting,key_watchers,max_key_iterations,key_process_timeout,key_process_timeout_step,entity_path_cache,path){
return (function (state_65727){
var state_val_65729 = (state_65727[(1)]);
if((state_val_65729 === (121))){
var inst_65553 = (state_65727[(7)]);
var inst_65543 = (state_65727[(8)]);
var inst_65542 = (state_65727[(9)]);
var inst_65264 = (state_65727[(10)]);
var inst_65540 = (state_65727[(11)]);
var inst_65577 = (state_65727[(12)]);
var inst_65541 = (state_65727[(13)]);
var inst_65650 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword(null,"key","key",-1516042587)];
var inst_65651 = [new cljs.core.Keyword("com.wsscode.pathom.parser","skip-wait-key","com.wsscode.pathom.parser/skip-wait-key",-1559475001),inst_65577];
var inst_65652 = cljs.core.PersistentHashMap.fromArrays(inst_65650,inst_65651);
var inst_65653 = com.wsscode.pathom.trace.trace(inst_65264,inst_65652);
var tmp65730 = inst_65543;
var tmp65731 = inst_65542;
var tmp65732 = inst_65540;
var tmp65733 = inst_65541;
var inst_65540__$1 = tmp65732;
var inst_65541__$1 = tmp65733;
var inst_65542__$1 = tmp65731;
var inst_65543__$1 = tmp65730;
var inst_65544 = inst_65553;
var state_65727__$1 = (function (){var statearr_65742 = state_65727;
(statearr_65742[(14)] = inst_65653);

(statearr_65742[(8)] = inst_65543__$1);

(statearr_65742[(15)] = inst_65544);

(statearr_65742[(9)] = inst_65542__$1);

(statearr_65742[(11)] = inst_65540__$1);

(statearr_65742[(13)] = inst_65541__$1);

return statearr_65742;
})();
var statearr_65743_66820 = state_65727__$1;
(statearr_65743_66820[(2)] = null);

(statearr_65743_66820[(1)] = (92));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65729 === (65))){
var inst_65366 = (state_65727[(16)]);
var inst_65326 = (state_65727[(17)]);
var inst_65427 = cljs.core.contains_QMARK_(inst_65326,inst_65366);
var state_65727__$1 = state_65727;
if(inst_65427){
var statearr_65746_66821 = state_65727__$1;
(statearr_65746_66821[(1)] = (67));

} else {
var statearr_65748_66822 = state_65727__$1;
(statearr_65748_66822[(1)] = (68));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65729 === (70))){
var inst_65328 = (state_65727[(18)]);
var inst_65342 = (state_65727[(19)]);
var inst_65365 = (state_65727[(20)]);
var inst_65257 = (state_65727[(21)]);
var inst_65327 = (state_65727[(22)]);
var inst_65368 = (state_65727[(23)]);
var inst_65325 = (state_65727[(24)]);
var inst_65264 = (state_65727[(10)]);
var inst_65326 = (state_65727[(17)]);
var inst_65440 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(inst_65328,inst_65368,com.wsscode.pathom.parser.zero_inc);
var inst_65441 = com.wsscode.pathom.parser.parallel_process_value(inst_65264,tx,inst_65365,inst_65257,inst_65325,inst_65326,inst_65327,read,mutate,inst_65440,inst_65342);
var inst_65443 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_65441,(0),null);
var inst_65444 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_65441,(1),null);
var inst_65445 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_65441,(2),null);
var inst_65446 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_65441,(3),null);
var inst_65447 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_65441,(4),null);
var inst_65325__$1 = inst_65443;
var inst_65326__$1 = inst_65444;
var inst_65327__$1 = inst_65445;
var inst_65328__$1 = inst_65446;
var inst_65329 = inst_65447;
var state_65727__$1 = (function (){var statearr_65753 = state_65727;
(statearr_65753[(25)] = inst_65329);

(statearr_65753[(18)] = inst_65328__$1);

(statearr_65753[(22)] = inst_65327__$1);

(statearr_65753[(24)] = inst_65325__$1);

(statearr_65753[(17)] = inst_65326__$1);

return statearr_65753;
})();
var statearr_65756_66841 = state_65727__$1;
(statearr_65756_66841[(2)] = null);

(statearr_65756_66841[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65729 === (62))){
var inst_65407 = (state_65727[(26)]);
var state_65727__$1 = state_65727;
var statearr_65758_66843 = state_65727__$1;
(statearr_65758_66843[(2)] = inst_65407);

(statearr_65758_66843[(1)] = (63));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65729 === (74))){
var state_65727__$1 = state_65727;
var statearr_65760_66844 = state_65727__$1;
(statearr_65760_66844[(1)] = (77));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65729 === (110))){
var inst_65540 = (state_65727[(11)]);
var state_65727__$1 = state_65727;
var statearr_65765_66846 = state_65727__$1;
(statearr_65765_66846[(2)] = inst_65540);

(statearr_65765_66846[(1)] = (111));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65729 === (130))){
var inst_65694 = (state_65727[(2)]);
var inst_65695 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_65694,(0),null);
var inst_65696 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_65694,(1),null);
var inst_65697 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_65694,(2),null);
var inst_65698 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_65694,(3),null);
var inst_65699 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_65694,(4),null);
var inst_65540 = inst_65695;
var inst_65541 = inst_65696;
var inst_65542 = inst_65697;
var inst_65543 = inst_65698;
var inst_65544 = inst_65699;
var state_65727__$1 = (function (){var statearr_65770 = state_65727;
(statearr_65770[(8)] = inst_65543);

(statearr_65770[(15)] = inst_65544);

(statearr_65770[(9)] = inst_65542);

(statearr_65770[(11)] = inst_65540);

(statearr_65770[(13)] = inst_65541);

return statearr_65770;
})();
var statearr_65771_66850 = state_65727__$1;
(statearr_65771_66850[(2)] = null);

(statearr_65771_66850[(1)] = (92));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65729 === (128))){
var state_65727__$1 = state_65727;
var statearr_65775_66852 = state_65727__$1;
(statearr_65775_66852[(1)] = (131));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65729 === (7))){
var inst_65223 = (state_65727[(2)]);
var state_65727__$1 = (function (){var statearr_65779 = state_65727;
(statearr_65779[(27)] = inst_65223);

return statearr_65779;
})();
if(cljs.core.truth_(key_process_timeout)){
var statearr_65780_66854 = state_65727__$1;
(statearr_65780_66854[(1)] = (8));

} else {
var statearr_65781_66855 = state_65727__$1;
(statearr_65781_66855[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65729 === (59))){
var inst_65407 = (state_65727[(26)]);
var inst_65264 = (state_65727[(10)]);
var inst_65407__$1 = new cljs.core.Keyword("com.wsscode.pathom.parser","key-watchers","com.wsscode.pathom.parser/key-watchers",-1670257404).cljs$core$IFn$_invoke$arity$1(inst_65264);
var state_65727__$1 = (function (){var statearr_65784 = state_65727;
(statearr_65784[(26)] = inst_65407__$1);

return statearr_65784;
})();
if(cljs.core.truth_(inst_65407__$1)){
var statearr_65785_66857 = state_65727__$1;
(statearr_65785_66857[(1)] = (61));

} else {
var statearr_65787_66859 = state_65727__$1;
(statearr_65787_66859[(1)] = (62));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65729 === (86))){
var state_65727__$1 = state_65727;
var statearr_65791_66860 = state_65727__$1;
(statearr_65791_66860[(2)] = true);

(statearr_65791_66860[(1)] = (88));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65729 === (20))){
var state_65727__$1 = state_65727;
var statearr_65799_66863 = state_65727__$1;
(statearr_65799_66863[(2)] = key_watchers);

(statearr_65799_66863[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65729 === (72))){
var inst_65452 = (state_65727[(2)]);
var state_65727__$1 = state_65727;
var statearr_65801_66864 = state_65727__$1;
(statearr_65801_66864[(2)] = inst_65452);

(statearr_65801_66864[(1)] = (69));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65729 === (58))){
var inst_65328 = (state_65727[(18)]);
var inst_65342 = (state_65727[(19)]);
var inst_65366 = (state_65727[(16)]);
var inst_65327 = (state_65727[(22)]);
var inst_65325 = (state_65727[(24)]);
var inst_65264 = (state_65727[(10)]);
var inst_65326 = (state_65727[(17)]);
var inst_65401 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword(null,"key","key",-1516042587)];
var inst_65402 = [new cljs.core.Keyword("com.wsscode.pathom.parser","skip-resolved-key","com.wsscode.pathom.parser/skip-resolved-key",456945544),inst_65366];
var inst_65403 = cljs.core.PersistentHashMap.fromArrays(inst_65401,inst_65402);
var inst_65404 = com.wsscode.pathom.trace.trace(inst_65264,inst_65403);
var tmp65793 = inst_65328;
var tmp65794 = inst_65327;
var tmp65795 = inst_65325;
var tmp65796 = inst_65326;
var inst_65325__$1 = tmp65795;
var inst_65326__$1 = tmp65796;
var inst_65327__$1 = tmp65794;
var inst_65328__$1 = tmp65793;
var inst_65329 = inst_65342;
var state_65727__$1 = (function (){var statearr_65806 = state_65727;
(statearr_65806[(25)] = inst_65329);

(statearr_65806[(18)] = inst_65328__$1);

(statearr_65806[(22)] = inst_65327__$1);

(statearr_65806[(28)] = inst_65404);

(statearr_65806[(24)] = inst_65325__$1);

(statearr_65806[(17)] = inst_65326__$1);

return statearr_65806;
})();
var statearr_65808_66868 = state_65727__$1;
(statearr_65808_66868[(2)] = null);

(statearr_65808_66868[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65729 === (60))){
var inst_65458 = (state_65727[(2)]);
var state_65727__$1 = state_65727;
var statearr_65812_66869 = state_65727__$1;
(statearr_65812_66869[(2)] = inst_65458);

(statearr_65812_66869[(1)] = (54));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65729 === (27))){
var inst_65294 = cljs.core.PersistentHashSet.EMPTY;
var state_65727__$1 = state_65727;
var statearr_65813_66870 = state_65727__$1;
(statearr_65813_66870[(2)] = inst_65294);

(statearr_65813_66870[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65729 === (1))){
var state_65727__$1 = state_65727;
var statearr_65815_66872 = state_65727__$1;
(statearr_65815_66872[(2)] = null);

(statearr_65815_66872[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65729 === (69))){
var inst_65454 = (state_65727[(2)]);
var state_65727__$1 = state_65727;
var statearr_65823_66885 = state_65727__$1;
(statearr_65823_66885[(2)] = inst_65454);

(statearr_65823_66885[(1)] = (66));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65729 === (101))){
var inst_65552 = (state_65727[(29)]);
var state_65727__$1 = state_65727;
var statearr_65825_66886 = state_65727__$1;
(statearr_65825_66886[(2)] = inst_65552);

(statearr_65825_66886[(1)] = (102));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65729 === (24))){
var inst_65501 = cljs.core.PersistentHashMap.EMPTY;
var state_65727__$1 = (function (){var statearr_65826 = state_65727;
(statearr_65826[(30)] = inst_65501);

return statearr_65826;
})();
if(cljs.core.truth_(waiting)){
var statearr_65828_66887 = state_65727__$1;
(statearr_65828_66887[(1)] = (80));

} else {
var statearr_65830_66889 = state_65727__$1;
(statearr_65830_66889[(1)] = (81));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65729 === (102))){
var inst_65576 = (state_65727[(31)]);
var inst_65576__$1 = (state_65727[(2)]);
var inst_65577 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_65576__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var state_65727__$1 = (function (){var statearr_65835 = state_65727;
(statearr_65835[(31)] = inst_65576__$1);

(statearr_65835[(12)] = inst_65577);

return statearr_65835;
})();
if(cljs.core.truth_(inst_65576__$1)){
var statearr_65836_66891 = state_65727__$1;
(statearr_65836_66891[(1)] = (103));

} else {
var statearr_65837_66892 = state_65727__$1;
(statearr_65837_66892[(1)] = (104));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65729 === (55))){
var inst_65368 = (state_65727[(23)]);
var inst_65325 = (state_65727[(24)]);
var inst_65388 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_65325,inst_65368,new cljs.core.Keyword("com.wsscode.pathom.core","not-found","com.wsscode.pathom.core/not-found",-1411330137));
var state_65727__$1 = state_65727;
var statearr_65840_66893 = state_65727__$1;
(statearr_65840_66893[(2)] = inst_65388);

(statearr_65840_66893[(1)] = (57));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65729 === (85))){
var inst_65530 = (state_65727[(2)]);
var state_65727__$1 = state_65727;
if(cljs.core.truth_(inst_65530)){
var statearr_65844_66895 = state_65727__$1;
(statearr_65844_66895[(1)] = (89));

} else {
var statearr_65846_66896 = state_65727__$1;
(statearr_65846_66896[(1)] = (90));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65729 === (39))){
var inst_65228 = (state_65727[(32)]);
var inst_65264 = (state_65727[(10)]);
var inst_65280 = (state_65727[(33)]);
var inst_65486 = (state_65727[(2)]);
var inst_65487 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","key-process-timeout","com.wsscode.pathom.parser/key-process-timeout",-1793561165)];
var inst_65488 = [new cljs.core.Keyword("com.wsscode.pathom.parser","parse-loop","com.wsscode.pathom.parser/parse-loop",1506208195),inst_65228];
var inst_65489 = cljs.core.PersistentHashMap.fromArrays(inst_65487,inst_65488);
var inst_65490 = com.wsscode.pathom.trace.trace_leave.cljs$core$IFn$_invoke$arity$3(inst_65264,inst_65280,inst_65489);
var state_65727__$1 = (function (){var statearr_65851 = state_65727;
(statearr_65851[(34)] = inst_65490);

return statearr_65851;
})();
var statearr_65852_66900 = state_65727__$1;
(statearr_65852_66900[(2)] = inst_65486);

(statearr_65852_66900[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65729 === (88))){
var inst_65527 = (state_65727[(2)]);
var state_65727__$1 = state_65727;
var statearr_65854_66901 = state_65727__$1;
(statearr_65854_66901[(2)] = inst_65527);

(statearr_65854_66901[(1)] = (85));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65729 === (46))){
var inst_65341 = (state_65727[(35)]);
var inst_65362 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_65341);
var state_65727__$1 = state_65727;
var statearr_65858_66903 = state_65727__$1;
(statearr_65858_66903[(2)] = inst_65362);

(statearr_65858_66903[(1)] = (48));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65729 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_65727,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var state_65727__$1 = state_65727;
if(cljs.core.truth_(key_process_timeout_step)){
var statearr_65860_66904 = state_65727__$1;
(statearr_65860_66904[(1)] = (5));

} else {
var statearr_65862_66905 = state_65727__$1;
(statearr_65862_66905[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65729 === (77))){
var inst_65325 = (state_65727[(24)]);
var state_65727__$1 = state_65727;
var statearr_65866_66906 = state_65727__$1;
(statearr_65866_66906[(2)] = inst_65325);

(statearr_65866_66906[(1)] = (79));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65729 === (106))){
var inst_65580 = (state_65727[(36)]);
var inst_65264 = (state_65727[(10)]);
var inst_65540 = (state_65727[(11)]);
var inst_65577 = (state_65727[(12)]);
var inst_65593 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("com.wsscode.pathom.parser","max-key-iterations","com.wsscode.pathom.parser/max-key-iterations",-1656113103)];
var inst_65594 = [new cljs.core.Keyword("com.wsscode.pathom.parser","max-iterations-reached","com.wsscode.pathom.parser/max-iterations-reached",677125351),inst_65577,max_key_iterations];
var inst_65595 = cljs.core.PersistentHashMap.fromArrays(inst_65593,inst_65594);
var inst_65596 = com.wsscode.pathom.trace.trace(inst_65264,inst_65595);
var inst_65599 = cljs.core.contains_QMARK_(inst_65540,inst_65580);
var inst_65600 = (!(inst_65599));
var state_65727__$1 = (function (){var statearr_65869 = state_65727;
(statearr_65869[(37)] = inst_65596);

return statearr_65869;
})();
if(inst_65600){
var statearr_65871_66926 = state_65727__$1;
(statearr_65871_66926[(1)] = (109));

} else {
var statearr_65872_66927 = state_65727__$1;
(statearr_65872_66927[(1)] = (110));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65729 === (119))){
var inst_65577 = (state_65727[(12)]);
var inst_65541 = (state_65727[(13)]);
var inst_65647 = cljs.core.contains_QMARK_(inst_65541,inst_65577);
var state_65727__$1 = state_65727;
if(inst_65647){
var statearr_65873_66930 = state_65727__$1;
(statearr_65873_66930[(1)] = (121));

} else {
var statearr_65874_66931 = state_65727__$1;
(statearr_65874_66931[(1)] = (122));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65729 === (95))){
var state_65727__$1 = state_65727;
var statearr_65875_66932 = state_65727__$1;
(statearr_65875_66932[(2)] = false);

(statearr_65875_66932[(1)] = (96));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65729 === (54))){
var inst_65460 = (state_65727[(2)]);
var state_65727__$1 = state_65727;
var statearr_65878_66934 = state_65727__$1;
(statearr_65878_66934[(2)] = inst_65460);

(statearr_65878_66934[(1)] = (51));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65729 === (92))){
var inst_65552 = (state_65727[(29)]);
var inst_65544 = (state_65727[(15)]);
var inst_65551 = cljs.core.seq(inst_65544);
var inst_65552__$1 = cljs.core.first(inst_65551);
var inst_65553 = cljs.core.next(inst_65551);
var inst_65555 = (inst_65552__$1 == null);
var inst_65556 = cljs.core.not(inst_65555);
var state_65727__$1 = (function (){var statearr_65888 = state_65727;
(statearr_65888[(7)] = inst_65553);

(statearr_65888[(29)] = inst_65552__$1);

return statearr_65888;
})();
if(inst_65556){
var statearr_65889_66936 = state_65727__$1;
(statearr_65889_66936[(1)] = (94));

} else {
var statearr_65890_66937 = state_65727__$1;
(statearr_65890_66937[(1)] = (95));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65729 === (104))){
var inst_65542 = (state_65727[(9)]);
var inst_65681 = cljs.core.seq(inst_65542);
var state_65727__$1 = state_65727;
if(inst_65681){
var statearr_65891_66938 = state_65727__$1;
(statearr_65891_66938[(1)] = (127));

} else {
var statearr_65894_66939 = state_65727__$1;
(statearr_65894_66939[(1)] = (128));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65729 === (15))){
var state_65727__$1 = state_65727;
var statearr_65895_66941 = state_65727__$1;
(statearr_65895_66941[(2)] = false);

(statearr_65895_66941[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65729 === (48))){
var inst_65365 = (state_65727[(20)]);
var inst_65365__$1 = (state_65727[(2)]);
var inst_65366 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_65365__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var state_65727__$1 = (function (){var statearr_65902 = state_65727;
(statearr_65902[(16)] = inst_65366);

(statearr_65902[(20)] = inst_65365__$1);

return statearr_65902;
})();
if(cljs.core.truth_(inst_65365__$1)){
var statearr_65904_66945 = state_65727__$1;
(statearr_65904_66945[(1)] = (49));

} else {
var statearr_65905_66946 = state_65727__$1;
(statearr_65905_66946[(1)] = (50));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65729 === (50))){
var inst_65327 = (state_65727[(22)]);
var inst_65462 = cljs.core.seq(inst_65327);
var state_65727__$1 = state_65727;
if(inst_65462){
var statearr_65907_66949 = state_65727__$1;
(statearr_65907_66949[(1)] = (73));

} else {
var statearr_65908_66950 = state_65727__$1;
(statearr_65908_66950[(1)] = (74));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65729 === (116))){
var inst_65625 = (state_65727[(38)]);
var state_65727__$1 = state_65727;
var statearr_65912_66951 = state_65727__$1;
(statearr_65912_66951[(2)] = inst_65625);

(statearr_65912_66951[(1)] = (117));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65729 === (75))){
var inst_65482 = (state_65727[(2)]);
var state_65727__$1 = state_65727;
var statearr_65913_66953 = state_65727__$1;
(statearr_65913_66953[(2)] = inst_65482);

(statearr_65913_66953[(1)] = (51));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65729 === (99))){
var inst_65567 = (state_65727[(2)]);
var state_65727__$1 = state_65727;
var statearr_65915_66955 = state_65727__$1;
(statearr_65915_66955[(2)] = inst_65567);

(statearr_65915_66955[(1)] = (96));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65729 === (21))){
var inst_65254 = cljs.core.PersistentHashMap.EMPTY;
var inst_65255 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(inst_65254);
var state_65727__$1 = state_65727;
var statearr_65921_66957 = state_65727__$1;
(statearr_65921_66957[(2)] = inst_65255);

(statearr_65921_66957[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65729 === (31))){
var inst_65317 = (state_65727[(2)]);
var state_65727__$1 = state_65727;
if(cljs.core.truth_(inst_65317)){
var statearr_65922_66958 = state_65727__$1;
(statearr_65922_66958[(1)] = (35));

} else {
var statearr_65924_66960 = state_65727__$1;
(statearr_65924_66960[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65729 === (113))){
var inst_65625 = (state_65727[(38)]);
var inst_65264 = (state_65727[(10)]);
var inst_65625__$1 = new cljs.core.Keyword("com.wsscode.pathom.parser","key-watchers","com.wsscode.pathom.parser/key-watchers",-1670257404).cljs$core$IFn$_invoke$arity$1(inst_65264);
var state_65727__$1 = (function (){var statearr_65927 = state_65727;
(statearr_65927[(38)] = inst_65625__$1);

return statearr_65927;
})();
if(cljs.core.truth_(inst_65625__$1)){
var statearr_65928_66961 = state_65727__$1;
(statearr_65928_66961[(1)] = (115));

} else {
var statearr_65930_66962 = state_65727__$1;
(statearr_65930_66962[(1)] = (116));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65729 === (32))){
var state_65727__$1 = state_65727;
var statearr_65931_66963 = state_65727__$1;
(statearr_65931_66963[(2)] = true);

(statearr_65931_66963[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65729 === (40))){
var inst_65341 = (state_65727[(35)]);
var inst_65348 = inst_65341.cljs$lang$protocol_mask$partition0$;
var inst_65349 = (inst_65348 & (64));
var inst_65351 = inst_65341.cljs$core$ISeq$;
var inst_65352 = (cljs.core.PROTOCOL_SENTINEL === inst_65351);
var inst_65353 = ((inst_65349) || (inst_65352));
var state_65727__$1 = state_65727;
if(cljs.core.truth_(inst_65353)){
var statearr_65932_66965 = state_65727__$1;
(statearr_65932_66965[(1)] = (43));

} else {
var statearr_65933_66966 = state_65727__$1;
(statearr_65933_66966[(1)] = (44));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65729 === (129))){
var inst_65708 = (state_65727[(2)]);
var state_65727__$1 = state_65727;
var statearr_65934_66967 = state_65727__$1;
(statearr_65934_66967[(2)] = inst_65708);

(statearr_65934_66967[(1)] = (105));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65729 === (91))){
var inst_65507 = (state_65727[(39)]);
var inst_65506 = (state_65727[(40)]);
var inst_65508 = (state_65727[(41)]);
var inst_65501 = (state_65727[(30)]);
var inst_65251 = (state_65727[(42)]);
var inst_65535 = (state_65727[(2)]);
var inst_65536 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_65535,new cljs.core.Keyword(null,"key","key",-1516042587));
var inst_65540 = inst_65501;
var inst_65541 = inst_65506;
var inst_65542 = inst_65507;
var inst_65543 = inst_65508;
var inst_65544 = inst_65251;
var state_65727__$1 = (function (){var statearr_65938 = state_65727;
(statearr_65938[(8)] = inst_65543);

(statearr_65938[(15)] = inst_65544);

(statearr_65938[(43)] = inst_65536);

(statearr_65938[(9)] = inst_65542);

(statearr_65938[(11)] = inst_65540);

(statearr_65938[(13)] = inst_65541);

return statearr_65938;
})();
var statearr_65939_66971 = state_65727__$1;
(statearr_65939_66971[(2)] = null);

(statearr_65939_66971[(1)] = (92));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65729 === (117))){
var inst_65631 = (state_65727[(2)]);
var state_65727__$1 = state_65727;
if(cljs.core.truth_(inst_65631)){
var statearr_65940_66972 = state_65727__$1;
(statearr_65940_66972[(1)] = (118));

} else {
var statearr_65941_66977 = state_65727__$1;
(statearr_65941_66977[(1)] = (119));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65729 === (108))){
var inst_65679 = (state_65727[(2)]);
var state_65727__$1 = state_65727;
var statearr_65945_66981 = state_65727__$1;
(statearr_65945_66981[(2)] = inst_65679);

(statearr_65945_66981[(1)] = (105));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65729 === (56))){
var inst_65325 = (state_65727[(24)]);
var state_65727__$1 = state_65727;
var statearr_65949_66991 = state_65727__$1;
(statearr_65949_66991[(2)] = inst_65325);

(statearr_65949_66991[(1)] = (57));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65729 === (33))){
var state_65727__$1 = state_65727;
var statearr_65950_67003 = state_65727__$1;
(statearr_65950_67003[(2)] = false);

(statearr_65950_67003[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65729 === (13))){
var inst_65245 = (state_65727[(2)]);
var state_65727__$1 = state_65727;
if(cljs.core.truth_(inst_65245)){
var statearr_65951_67006 = state_65727__$1;
(statearr_65951_67006[(1)] = (17));

} else {
var statearr_65952_67007 = state_65727__$1;
(statearr_65952_67007[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65729 === (22))){
var inst_65223 = (state_65727[(27)]);
var inst_65257 = (state_65727[(21)]);
var inst_65250 = (state_65727[(44)]);
var inst_65251 = (state_65727[(42)]);
var inst_65228 = (state_65727[(32)]);
var inst_65264 = (state_65727[(10)]);
var inst_65257__$1 = (state_65727[(2)]);
var inst_65258 = cljs.core.deref(entity_path_cache);
var inst_65259 = cljs.core.PersistentHashMap.EMPTY;
var inst_65260 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(inst_65258,path,inst_65259);
var inst_65261 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(env,new cljs.core.Keyword("com.wsscode.pathom.parser","parallel?","com.wsscode.pathom.parser/parallel?",2071817193),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.wsscode.pathom.parser","key-process-timeout","com.wsscode.pathom.parser/key-process-timeout",-1793561165),inst_65228], 0));
var inst_65263 = (function (){var key_process_timeout_step__$1 = inst_65223;
var key_process_timeout__$1 = inst_65228;
var map__65216 = inst_65250;
var children = inst_65251;
var key_watchers__$1 = inst_65257__$1;
var path_entity = inst_65260;
return ((function (key_process_timeout_step__$1,key_process_timeout__$1,map__65216,children,key_watchers__$1,path_entity,inst_65223,inst_65257,inst_65250,inst_65251,inst_65228,inst_65264,inst_65257__$1,inst_65258,inst_65259,inst_65260,inst_65261,state_val_65729,c__45808__auto__,map__65205,map__65205__$1,read,mutate,map__65206,map__65206__$1,env,waiting,key_watchers,max_key_iterations,key_process_timeout,key_process_timeout_step,entity_path_cache,path){
return (function (x){
if(com.wsscode.pathom.parser.atom_QMARK_(x)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(x,((function (key_process_timeout_step__$1,key_process_timeout__$1,map__65216,children,key_watchers__$1,path_entity,inst_65223,inst_65257,inst_65250,inst_65251,inst_65228,inst_65264,inst_65257__$1,inst_65258,inst_65259,inst_65260,inst_65261,state_val_65729,c__45808__auto__,map__65205,map__65205__$1,read,mutate,map__65206,map__65206__$1,env,waiting,key_watchers,max_key_iterations,key_process_timeout,key_process_timeout_step,entity_path_cache,path){
return (function (p1__65197_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_entity,p1__65197_SHARP_], 0));
});})(key_process_timeout_step__$1,key_process_timeout__$1,map__65216,children,key_watchers__$1,path_entity,inst_65223,inst_65257,inst_65250,inst_65251,inst_65228,inst_65264,inst_65257__$1,inst_65258,inst_65259,inst_65260,inst_65261,state_val_65729,c__45808__auto__,map__65205,map__65205__$1,read,mutate,map__65206,map__65206__$1,env,waiting,key_watchers,max_key_iterations,key_process_timeout,key_process_timeout_step,entity_path_cache,path))
);

return x;
} else {
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_entity,x], 0)));
}
});
;})(key_process_timeout_step__$1,key_process_timeout__$1,map__65216,children,key_watchers__$1,path_entity,inst_65223,inst_65257,inst_65250,inst_65251,inst_65228,inst_65264,inst_65257__$1,inst_65258,inst_65259,inst_65260,inst_65261,state_val_65729,c__45808__auto__,map__65205,map__65205__$1,read,mutate,map__65206,map__65206__$1,env,waiting,key_watchers,max_key_iterations,key_process_timeout,key_process_timeout_step,entity_path_cache,path))
})();
var inst_65264__$1 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(inst_65261,new cljs.core.Keyword("com.wsscode.pathom.core","entity","com.wsscode.pathom.core/entity",884706031),inst_65263);
var inst_65265 = cljs.core.PersistentHashMap.EMPTY;
var inst_65267 = (function (){var key_process_timeout_step__$1 = inst_65223;
var key_process_timeout__$1 = inst_65228;
var map__65216 = inst_65250;
var children = inst_65251;
var key_watchers__$1 = inst_65257__$1;
var path_entity = inst_65260;
var env__$1 = inst_65264__$1;
return ((function (key_process_timeout_step__$1,key_process_timeout__$1,map__65216,children,key_watchers__$1,path_entity,env__$1,inst_65223,inst_65257,inst_65250,inst_65251,inst_65228,inst_65264,inst_65257__$1,inst_65258,inst_65259,inst_65260,inst_65261,inst_65263,inst_65264__$1,inst_65265,state_val_65729,c__45808__auto__,map__65205,map__65205__$1,read,mutate,map__65206,map__65206__$1,env,waiting,key_watchers,max_key_iterations,key_process_timeout,key_process_timeout_step,entity_path_cache,path){
return (function (p__65266){
var map__65962 = p__65266;
var map__65962__$1 = (((((!((map__65962 == null))))?(((((map__65962.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65962.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65962):map__65962);
var ast = map__65962__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65962__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,ast], null);
});
;})(key_process_timeout_step__$1,key_process_timeout__$1,map__65216,children,key_watchers__$1,path_entity,env__$1,inst_65223,inst_65257,inst_65250,inst_65251,inst_65228,inst_65264,inst_65257__$1,inst_65258,inst_65259,inst_65260,inst_65261,inst_65263,inst_65264__$1,inst_65265,state_val_65729,c__45808__auto__,map__65205,map__65205__$1,read,mutate,map__65206,map__65206__$1,env,waiting,key_watchers,max_key_iterations,key_process_timeout,key_process_timeout_step,entity_path_cache,path))
})();
var inst_65268 = cljs.core.map.cljs$core$IFn$_invoke$arity$1(inst_65267);
var inst_65269 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(inst_65265,inst_65268,inst_65251);
var inst_65272 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_65264__$1,new cljs.core.Keyword("com.wsscode.pathom.trace","trace*","com.wsscode.pathom.trace/trace*",-80191782));
var state_65727__$1 = (function (){var statearr_65964 = state_65727;
(statearr_65964[(21)] = inst_65257__$1);

(statearr_65964[(45)] = inst_65269);

(statearr_65964[(10)] = inst_65264__$1);

return statearr_65964;
})();
if(cljs.core.truth_(inst_65272)){
var statearr_65966_67017 = state_65727__$1;
(statearr_65966_67017[(1)] = (23));

} else {
var statearr_65967_67018 = state_65727__$1;
(statearr_65967_67018[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65729 === (90))){
var inst_65510 = (state_65727[(46)]);
var state_65727__$1 = state_65727;
var statearr_65969_67019 = state_65727__$1;
(statearr_65969_67019[(2)] = inst_65510);

(statearr_65969_67019[(1)] = (91));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65729 === (109))){
var inst_65580 = (state_65727[(36)]);
var inst_65540 = (state_65727[(11)]);
var inst_65603 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_65540,inst_65580,new cljs.core.Keyword("com.wsscode.pathom.core","not-found","com.wsscode.pathom.core/not-found",-1411330137));
var state_65727__$1 = state_65727;
var statearr_65970_67022 = state_65727__$1;
(statearr_65970_67022[(2)] = inst_65603);

(statearr_65970_67022[(1)] = (111));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65729 === (36))){
var inst_65300 = (state_65727[(47)]);
var state_65727__$1 = state_65727;
var statearr_65974_67024 = state_65727__$1;
(statearr_65974_67024[(2)] = inst_65300);

(statearr_65974_67024[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65729 === (41))){
var state_65727__$1 = state_65727;
var statearr_65975_67025 = state_65727__$1;
(statearr_65975_67025[(2)] = false);

(statearr_65975_67025[(1)] = (42));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65729 === (118))){
var inst_65553 = (state_65727[(7)]);
var inst_65543 = (state_65727[(8)]);
var inst_65542 = (state_65727[(9)]);
var inst_65264 = (state_65727[(10)]);
var inst_65540 = (state_65727[(11)]);
var inst_65577 = (state_65727[(12)]);
var inst_65541 = (state_65727[(13)]);
var inst_65633 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword(null,"key","key",-1516042587)];
var inst_65634 = [new cljs.core.Keyword("com.wsscode.pathom.parser","external-wait-key","com.wsscode.pathom.parser/external-wait-key",258972266),inst_65577];
var inst_65635 = cljs.core.PersistentHashMap.fromArrays(inst_65633,inst_65634);
var inst_65636 = com.wsscode.pathom.trace.trace(inst_65264,inst_65635);
var inst_65637 = [new cljs.core.Keyword("com.wsscode.pathom.parser","process-channel","com.wsscode.pathom.parser/process-channel",1432129963),new cljs.core.Keyword("com.wsscode.pathom.parser","process-source","com.wsscode.pathom.parser/process-source",1341595616),new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507)];
var inst_65638 = com.wsscode.pathom.parser.watch_pending_key(inst_65264,inst_65577);
var inst_65639 = [inst_65577];
var inst_65640 = cljs.core.PersistentHashSet.createAsIfByAssoc(inst_65639);
var inst_65641 = [inst_65638,new cljs.core.Keyword("com.wsscode.pathom.parser","pending-key-watch","com.wsscode.pathom.parser/pending-key-watch",-542789163),inst_65640];
var inst_65642 = cljs.core.PersistentHashMap.fromArrays(inst_65637,inst_65641);
var inst_65643 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_65542,inst_65642);
var tmp65971 = inst_65543;
var tmp65972 = inst_65540;
var tmp65973 = inst_65541;
var inst_65540__$1 = tmp65972;
var inst_65541__$1 = tmp65973;
var inst_65542__$1 = inst_65643;
var inst_65543__$1 = tmp65971;
var inst_65544 = inst_65553;
var state_65727__$1 = (function (){var statearr_65980 = state_65727;
(statearr_65980[(8)] = inst_65543__$1);

(statearr_65980[(48)] = inst_65636);

(statearr_65980[(15)] = inst_65544);

(statearr_65980[(9)] = inst_65542__$1);

(statearr_65980[(11)] = inst_65540__$1);

(statearr_65980[(13)] = inst_65541__$1);

return statearr_65980;
})();
var statearr_65981_67029 = state_65727__$1;
(statearr_65981_67029[(2)] = null);

(statearr_65981_67029[(1)] = (92));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65729 === (89))){
var inst_65510 = (state_65727[(46)]);
var inst_65532 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_65510);
var state_65727__$1 = state_65727;
var statearr_65982_67041 = state_65727__$1;
(statearr_65982_67041[(2)] = inst_65532);

(statearr_65982_67041[(1)] = (91));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65729 === (100))){
var inst_65552 = (state_65727[(29)]);
var inst_65573 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_65552);
var state_65727__$1 = state_65727;
var statearr_65984_67042 = state_65727__$1;
(statearr_65984_67042[(2)] = inst_65573);

(statearr_65984_67042[(1)] = (102));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65729 === (131))){
var inst_65540 = (state_65727[(11)]);
var state_65727__$1 = state_65727;
var statearr_65985_67043 = state_65727__$1;
(statearr_65985_67043[(2)] = inst_65540);

(statearr_65985_67043[(1)] = (133));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65729 === (122))){
var state_65727__$1 = state_65727;
var statearr_65986_67045 = state_65727__$1;
(statearr_65986_67045[(1)] = (124));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65729 === (43))){
var state_65727__$1 = state_65727;
var statearr_65988_67046 = state_65727__$1;
(statearr_65988_67046[(2)] = true);

(statearr_65988_67046[(1)] = (45));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65729 === (61))){
var inst_65366 = (state_65727[(16)]);
var inst_65326 = (state_65727[(17)]);
var inst_65409 = cljs.core.contains_QMARK_(inst_65326,inst_65366);
var state_65727__$1 = state_65727;
var statearr_65989_67048 = state_65727__$1;
(statearr_65989_67048[(2)] = inst_65409);

(statearr_65989_67048[(1)] = (63));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65729 === (29))){
var inst_65300 = (state_65727[(47)]);
var inst_65306 = inst_65300.cljs$lang$protocol_mask$partition0$;
var inst_65307 = (inst_65306 & (64));
var inst_65308 = inst_65300.cljs$core$ISeq$;
var inst_65309 = (cljs.core.PROTOCOL_SENTINEL === inst_65308);
var inst_65310 = ((inst_65307) || (inst_65309));
var state_65727__$1 = state_65727;
if(cljs.core.truth_(inst_65310)){
var statearr_65991_67050 = state_65727__$1;
(statearr_65991_67050[(1)] = (32));

} else {
var statearr_65993_67051 = state_65727__$1;
(statearr_65993_67051[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65729 === (44))){
var state_65727__$1 = state_65727;
var statearr_65995_67052 = state_65727__$1;
(statearr_65995_67052[(2)] = false);

(statearr_65995_67052[(1)] = (45));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65729 === (93))){
var inst_65712 = (state_65727[(2)]);
var state_65727__$1 = state_65727;
var statearr_65999_67054 = state_65727__$1;
(statearr_65999_67054[(2)] = inst_65712);

(statearr_65999_67054[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65729 === (6))){
var inst_65221 = com.wsscode.pathom.parser.default_step_fn((1000),(1000));
var state_65727__$1 = state_65727;
var statearr_66000_67056 = state_65727__$1;
(statearr_66000_67056[(2)] = inst_65221);

(statearr_66000_67056[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65729 === (111))){
var inst_65553 = (state_65727[(7)]);
var inst_65543 = (state_65727[(8)]);
var inst_65542 = (state_65727[(9)]);
var inst_65541 = (state_65727[(13)]);
var inst_65606 = (state_65727[(2)]);
var tmp65996 = inst_65543;
var tmp65997 = inst_65542;
var tmp65998 = inst_65541;
var inst_65540 = inst_65606;
var inst_65541__$1 = tmp65998;
var inst_65542__$1 = tmp65997;
var inst_65543__$1 = tmp65996;
var inst_65544 = inst_65553;
var state_65727__$1 = (function (){var statearr_66007 = state_65727;
(statearr_66007[(8)] = inst_65543__$1);

(statearr_66007[(15)] = inst_65544);

(statearr_66007[(9)] = inst_65542__$1);

(statearr_66007[(11)] = inst_65540);

(statearr_66007[(13)] = inst_65541__$1);

return statearr_66007;
})();
var statearr_66008_67059 = state_65727__$1;
(statearr_66008_67059[(2)] = null);

(statearr_66008_67059[(1)] = (92));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65729 === (28))){
var inst_65300 = (state_65727[(47)]);
var inst_65251 = (state_65727[(42)]);
var inst_65296 = (state_65727[(2)]);
var inst_65297 = cljs.core.PersistentHashSet.EMPTY;
var inst_65298 = cljs.core.PersistentHashMap.EMPTY;
var inst_65299 = cljs.core.seq(inst_65251);
var inst_65300__$1 = cljs.core.first(inst_65299);
var inst_65301 = cljs.core.next(inst_65299);
var inst_65303 = (inst_65300__$1 == null);
var inst_65304 = cljs.core.not(inst_65303);
var state_65727__$1 = (function (){var statearr_66011 = state_65727;
(statearr_66011[(47)] = inst_65300__$1);

(statearr_66011[(49)] = inst_65296);

(statearr_66011[(50)] = inst_65301);

(statearr_66011[(51)] = inst_65297);

(statearr_66011[(52)] = inst_65298);

return statearr_66011;
})();
if(inst_65304){
var statearr_66012_67063 = state_65727__$1;
(statearr_66012_67063[(1)] = (29));

} else {
var statearr_66014_67064 = state_65727__$1;
(statearr_66014_67064[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65729 === (64))){
var inst_65328 = (state_65727[(18)]);
var inst_65342 = (state_65727[(19)]);
var inst_65366 = (state_65727[(16)]);
var inst_65327 = (state_65727[(22)]);
var inst_65325 = (state_65727[(24)]);
var inst_65264 = (state_65727[(10)]);
var inst_65326 = (state_65727[(17)]);
var inst_65414 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword(null,"key","key",-1516042587)];
var inst_65415 = [new cljs.core.Keyword("com.wsscode.pathom.parser","external-wait-key","com.wsscode.pathom.parser/external-wait-key",258972266),inst_65366];
var inst_65416 = cljs.core.PersistentHashMap.fromArrays(inst_65414,inst_65415);
var inst_65417 = com.wsscode.pathom.trace.trace(inst_65264,inst_65416);
var inst_65418 = [new cljs.core.Keyword("com.wsscode.pathom.parser","process-channel","com.wsscode.pathom.parser/process-channel",1432129963),new cljs.core.Keyword("com.wsscode.pathom.parser","process-source","com.wsscode.pathom.parser/process-source",1341595616),new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507)];
var inst_65419 = com.wsscode.pathom.parser.watch_pending_key(inst_65264,inst_65366);
var inst_65420 = [inst_65366];
var inst_65421 = cljs.core.PersistentHashSet.createAsIfByAssoc(inst_65420);
var inst_65422 = [inst_65419,new cljs.core.Keyword("com.wsscode.pathom.parser","pending-key-watch","com.wsscode.pathom.parser/pending-key-watch",-542789163),inst_65421];
var inst_65423 = cljs.core.PersistentHashMap.fromArrays(inst_65418,inst_65422);
var inst_65424 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_65327,inst_65423);
var tmp66001 = inst_65328;
var tmp66002 = inst_65325;
var tmp66003 = inst_65326;
var inst_65325__$1 = tmp66002;
var inst_65326__$1 = tmp66003;
var inst_65327__$1 = inst_65424;
var inst_65328__$1 = tmp66001;
var inst_65329 = inst_65342;
var state_65727__$1 = (function (){var statearr_66018 = state_65727;
(statearr_66018[(25)] = inst_65329);

(statearr_66018[(18)] = inst_65328__$1);

(statearr_66018[(22)] = inst_65327__$1);

(statearr_66018[(24)] = inst_65325__$1);

(statearr_66018[(53)] = inst_65417);

(statearr_66018[(17)] = inst_65326__$1);

return statearr_66018;
})();
var statearr_66019_67065 = state_65727__$1;
(statearr_66019_67065[(2)] = null);

(statearr_66019_67065[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65729 === (103))){
var inst_65543 = (state_65727[(8)]);
var inst_65576 = (state_65727[(31)]);
var inst_65264 = (state_65727[(10)]);
var inst_65577 = (state_65727[(12)]);
var inst_65580 = com.wsscode.pathom.parser.ast__GT_out_key(inst_65576);
var inst_65582 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword(null,"key","key",-1516042587)];
var inst_65584 = [new cljs.core.Keyword("com.wsscode.pathom.parser","process-key","com.wsscode.pathom.parser/process-key",1272337224),inst_65577];
var inst_65585 = cljs.core.PersistentHashMap.fromArrays(inst_65582,inst_65584);
var inst_65586 = com.wsscode.pathom.trace.trace(inst_65264,inst_65585);
var inst_65587 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(inst_65543,inst_65577,(0));
var inst_65589 = (max_key_iterations - (1));
var inst_65590 = (inst_65587 > inst_65589);
var state_65727__$1 = (function (){var statearr_66023 = state_65727;
(statearr_66023[(36)] = inst_65580);

(statearr_66023[(54)] = inst_65586);

return statearr_66023;
})();
if(cljs.core.truth_(inst_65590)){
var statearr_66026_67069 = state_65727__$1;
(statearr_66026_67069[(1)] = (106));

} else {
var statearr_66028_67070 = state_65727__$1;
(statearr_66028_67070[(1)] = (107));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65729 === (51))){
var inst_65484 = (state_65727[(2)]);
var state_65727__$1 = state_65727;
var statearr_66029_67072 = state_65727__$1;
(statearr_66029_67072[(2)] = inst_65484);

(statearr_66029_67072[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65729 === (25))){
var inst_65714 = (state_65727[(2)]);
var state_65727__$1 = state_65727;
var statearr_66031_67073 = state_65727__$1;
(statearr_66031_67073[(2)] = inst_65714);


cljs.core.async.impl.ioc_helpers.process_exception(state_65727__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65729 === (34))){
var inst_65314 = (state_65727[(2)]);
var state_65727__$1 = state_65727;
var statearr_66032_67074 = state_65727__$1;
(statearr_66032_67074[(2)] = inst_65314);

(statearr_66032_67074[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65729 === (125))){
var state_65727__$1 = state_65727;
var statearr_66033_67075 = state_65727__$1;
(statearr_66033_67075[(2)] = null);

(statearr_66033_67075[(1)] = (126));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65729 === (17))){
var inst_65229 = (state_65727[(55)]);
var inst_65247 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_65229);
var state_65727__$1 = state_65727;
var statearr_66034_67076 = state_65727__$1;
(statearr_66034_67076[(2)] = inst_65247);

(statearr_66034_67076[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65729 === (3))){
var inst_65209 = (state_65727[(2)]);
var state_65727__$1 = state_65727;
var statearr_66035_67078 = state_65727__$1;
(statearr_66035_67078[(2)] = inst_65209);


cljs.core.async.impl.ioc_helpers.process_exception(state_65727__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65729 === (12))){
var state_65727__$1 = state_65727;
var statearr_66036_67082 = state_65727__$1;
(statearr_66036_67082[(2)] = false);

(statearr_66036_67082[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65729 === (2))){
var inst_65716 = (state_65727[(2)]);
var state_65727__$1 = state_65727;
return cljs.core.async.impl.ioc_helpers.return_chan(state_65727__$1,inst_65716);
} else {
if((state_val_65729 === (66))){
var inst_65456 = (state_65727[(2)]);
var state_65727__$1 = state_65727;
var statearr_66039_67083 = state_65727__$1;
(statearr_66039_67083[(2)] = inst_65456);

(statearr_66039_67083[(1)] = (60));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65729 === (107))){
var inst_65580 = (state_65727[(36)]);
var inst_65540 = (state_65727[(11)]);
var inst_65609 = cljs.core.contains_QMARK_(inst_65540,inst_65580);
var inst_65610 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_65540,inst_65580);
var inst_65611 = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.wsscode.pathom.core","reader-error","com.wsscode.pathom.core/reader-error",-803587882),inst_65610);
var inst_65612 = ((inst_65609) && (inst_65611));
var state_65727__$1 = state_65727;
if(cljs.core.truth_(inst_65612)){
var statearr_66040_67084 = state_65727__$1;
(statearr_66040_67084[(1)] = (112));

} else {
var statearr_66042_67085 = state_65727__$1;
(statearr_66042_67085[(1)] = (113));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65729 === (23))){
var inst_65228 = (state_65727[(32)]);
var inst_65264 = (state_65727[(10)]);
var inst_65277 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","key-process-timeout","com.wsscode.pathom.parser/key-process-timeout",-1793561165)];
var inst_65278 = [new cljs.core.Keyword("com.wsscode.pathom.parser","parse-loop","com.wsscode.pathom.parser/parse-loop",1506208195),inst_65228];
var inst_65279 = cljs.core.PersistentHashMap.fromArrays(inst_65277,inst_65278);
var inst_65280 = com.wsscode.pathom.trace.trace_enter.cljs$core$IFn$_invoke$arity$2(inst_65264,inst_65279);
var inst_65290 = cljs.core.PersistentHashMap.EMPTY;
var state_65727__$1 = (function (){var statearr_66045 = state_65727;
(statearr_66045[(56)] = inst_65290);

(statearr_66045[(33)] = inst_65280);

return statearr_66045;
})();
if(cljs.core.truth_(waiting)){
var statearr_66046_67087 = state_65727__$1;
(statearr_66046_67087[(1)] = (26));

} else {
var statearr_66047_67088 = state_65727__$1;
(statearr_66047_67088[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65729 === (47))){
var inst_65341 = (state_65727[(35)]);
var state_65727__$1 = state_65727;
var statearr_66048_67089 = state_65727__$1;
(statearr_66048_67089[(2)] = inst_65341);

(statearr_66048_67089[(1)] = (48));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65729 === (35))){
var inst_65300 = (state_65727[(47)]);
var inst_65320 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_65300);
var state_65727__$1 = state_65727;
var statearr_66049_67090 = state_65727__$1;
(statearr_66049_67090[(2)] = inst_65320);

(statearr_66049_67090[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65729 === (127))){
var inst_65543 = (state_65727[(8)]);
var inst_65257 = (state_65727[(21)]);
var inst_65269 = (state_65727[(45)]);
var inst_65542 = (state_65727[(9)]);
var inst_65264 = (state_65727[(10)]);
var inst_65540 = (state_65727[(11)]);
var inst_65541 = (state_65727[(13)]);
var inst_65692 = com.wsscode.pathom.parser.process_next_message(inst_65264,tx,inst_65541,inst_65269,inst_65542,inst_65543,inst_65257,inst_65540);
var state_65727__$1 = state_65727;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_65727__$1,(130),inst_65692);
} else {
if((state_val_65729 === (82))){
var inst_65251 = (state_65727[(42)]);
var inst_65510 = (state_65727[(46)]);
var inst_65506 = (state_65727[(2)]);
var inst_65507 = cljs.core.PersistentHashSet.EMPTY;
var inst_65508 = cljs.core.PersistentHashMap.EMPTY;
var inst_65509 = cljs.core.seq(inst_65251);
var inst_65510__$1 = cljs.core.first(inst_65509);
var inst_65511 = cljs.core.next(inst_65509);
var inst_65513 = (inst_65510__$1 == null);
var inst_65514 = cljs.core.not(inst_65513);
var state_65727__$1 = (function (){var statearr_66052 = state_65727;
(statearr_66052[(39)] = inst_65507);

(statearr_66052[(40)] = inst_65506);

(statearr_66052[(57)] = inst_65511);

(statearr_66052[(41)] = inst_65508);

(statearr_66052[(46)] = inst_65510__$1);

return statearr_66052;
})();
if(inst_65514){
var statearr_66053_67094 = state_65727__$1;
(statearr_66053_67094[(1)] = (83));

} else {
var statearr_66054_67096 = state_65727__$1;
(statearr_66054_67096[(1)] = (84));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65729 === (76))){
var inst_65469 = (state_65727[(2)]);
var inst_65470 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_65469,(0),null);
var inst_65471 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_65469,(1),null);
var inst_65472 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_65469,(2),null);
var inst_65473 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_65469,(3),null);
var inst_65474 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_65469,(4),null);
var inst_65325 = inst_65470;
var inst_65326 = inst_65471;
var inst_65327 = inst_65472;
var inst_65328 = inst_65473;
var inst_65329 = inst_65474;
var state_65727__$1 = (function (){var statearr_66055 = state_65727;
(statearr_66055[(25)] = inst_65329);

(statearr_66055[(18)] = inst_65328);

(statearr_66055[(22)] = inst_65327);

(statearr_66055[(24)] = inst_65325);

(statearr_66055[(17)] = inst_65326);

return statearr_66055;
})();
var statearr_66056_67098 = state_65727__$1;
(statearr_66056_67098[(2)] = null);

(statearr_66056_67098[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65729 === (97))){
var state_65727__$1 = state_65727;
var statearr_66060_67099 = state_65727__$1;
(statearr_66060_67099[(2)] = true);

(statearr_66060_67099[(1)] = (99));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65729 === (19))){
var inst_65250 = (state_65727[(44)]);
var inst_65250__$1 = (state_65727[(2)]);
var inst_65251 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_65250__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var state_65727__$1 = (function (){var statearr_66064 = state_65727;
(statearr_66064[(44)] = inst_65250__$1);

(statearr_66064[(42)] = inst_65251);

return statearr_66064;
})();
if(cljs.core.truth_(key_watchers)){
var statearr_66065_67100 = state_65727__$1;
(statearr_66065_67100[(1)] = (20));

} else {
var statearr_66066_67101 = state_65727__$1;
(statearr_66066_67101[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65729 === (57))){
var inst_65328 = (state_65727[(18)]);
var inst_65342 = (state_65727[(19)]);
var inst_65327 = (state_65727[(22)]);
var inst_65326 = (state_65727[(17)]);
var inst_65391 = (state_65727[(2)]);
var tmp66057 = inst_65328;
var tmp66058 = inst_65327;
var tmp66059 = inst_65326;
var inst_65325 = inst_65391;
var inst_65326__$1 = tmp66059;
var inst_65327__$1 = tmp66058;
var inst_65328__$1 = tmp66057;
var inst_65329 = inst_65342;
var state_65727__$1 = (function (){var statearr_66067 = state_65727;
(statearr_66067[(25)] = inst_65329);

(statearr_66067[(18)] = inst_65328__$1);

(statearr_66067[(22)] = inst_65327__$1);

(statearr_66067[(24)] = inst_65325);

(statearr_66067[(17)] = inst_65326__$1);

return statearr_66067;
})();
var statearr_66070_67104 = state_65727__$1;
(statearr_66070_67104[(2)] = null);

(statearr_66070_67104[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65729 === (68))){
var state_65727__$1 = state_65727;
var statearr_66072_67105 = state_65727__$1;
(statearr_66072_67105[(1)] = (70));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65729 === (11))){
var inst_65229 = (state_65727[(55)]);
var inst_65234 = inst_65229.cljs$lang$protocol_mask$partition0$;
var inst_65235 = (inst_65234 & (64));
var inst_65236 = inst_65229.cljs$core$ISeq$;
var inst_65237 = (cljs.core.PROTOCOL_SENTINEL === inst_65236);
var inst_65238 = ((inst_65235) || (inst_65237));
var state_65727__$1 = state_65727;
if(cljs.core.truth_(inst_65238)){
var statearr_66075_67109 = state_65727__$1;
(statearr_66075_67109[(1)] = (14));

} else {
var statearr_66076_67110 = state_65727__$1;
(statearr_66076_67110[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65729 === (115))){
var inst_65577 = (state_65727[(12)]);
var inst_65541 = (state_65727[(13)]);
var inst_65627 = cljs.core.contains_QMARK_(inst_65541,inst_65577);
var state_65727__$1 = state_65727;
var statearr_66077_67111 = state_65727__$1;
(statearr_66077_67111[(2)] = inst_65627);

(statearr_66077_67111[(1)] = (117));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65729 === (9))){
var state_65727__$1 = state_65727;
var statearr_66082_67112 = state_65727__$1;
(statearr_66082_67112[(2)] = null);

(statearr_66082_67112[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65729 === (5))){
var state_65727__$1 = state_65727;
var statearr_66083_67113 = state_65727__$1;
(statearr_66083_67113[(2)] = key_process_timeout_step);

(statearr_66083_67113[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65729 === (112))){
var inst_65553 = (state_65727[(7)]);
var inst_65543 = (state_65727[(8)]);
var inst_65542 = (state_65727[(9)]);
var inst_65264 = (state_65727[(10)]);
var inst_65540 = (state_65727[(11)]);
var inst_65577 = (state_65727[(12)]);
var inst_65541 = (state_65727[(13)]);
var inst_65615 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword(null,"key","key",-1516042587)];
var inst_65617 = [new cljs.core.Keyword("com.wsscode.pathom.parser","skip-resolved-key","com.wsscode.pathom.parser/skip-resolved-key",456945544),inst_65577];
var inst_65618 = cljs.core.PersistentHashMap.fromArrays(inst_65615,inst_65617);
var inst_65619 = com.wsscode.pathom.trace.trace(inst_65264,inst_65618);
var tmp66078 = inst_65543;
var tmp66079 = inst_65542;
var tmp66080 = inst_65540;
var tmp66081 = inst_65541;
var inst_65540__$1 = tmp66080;
var inst_65541__$1 = tmp66081;
var inst_65542__$1 = tmp66079;
var inst_65543__$1 = tmp66078;
var inst_65544 = inst_65553;
var state_65727__$1 = (function (){var statearr_66084 = state_65727;
(statearr_66084[(8)] = inst_65543__$1);

(statearr_66084[(58)] = inst_65619);

(statearr_66084[(15)] = inst_65544);

(statearr_66084[(9)] = inst_65542__$1);

(statearr_66084[(11)] = inst_65540__$1);

(statearr_66084[(13)] = inst_65541__$1);

return statearr_66084;
})();
var statearr_66087_67117 = state_65727__$1;
(statearr_66087_67117[(2)] = null);

(statearr_66087_67117[(1)] = (92));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65729 === (83))){
var inst_65510 = (state_65727[(46)]);
var inst_65519 = inst_65510.cljs$lang$protocol_mask$partition0$;
var inst_65520 = (inst_65519 & (64));
var inst_65521 = inst_65510.cljs$core$ISeq$;
var inst_65522 = (cljs.core.PROTOCOL_SENTINEL === inst_65521);
var inst_65523 = ((inst_65520) || (inst_65522));
var state_65727__$1 = state_65727;
if(cljs.core.truth_(inst_65523)){
var statearr_66088_67119 = state_65727__$1;
(statearr_66088_67119[(1)] = (86));

} else {
var statearr_66089_67120 = state_65727__$1;
(statearr_66089_67120[(1)] = (87));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65729 === (14))){
var state_65727__$1 = state_65727;
var statearr_66090_67121 = state_65727__$1;
(statearr_66090_67121[(2)] = true);

(statearr_66090_67121[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65729 === (45))){
var inst_65357 = (state_65727[(2)]);
var state_65727__$1 = state_65727;
var statearr_66091_67122 = state_65727__$1;
(statearr_66091_67122[(2)] = inst_65357);

(statearr_66091_67122[(1)] = (42));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65729 === (53))){
var inst_65368 = (state_65727[(23)]);
var inst_65325 = (state_65727[(24)]);
var inst_65396 = cljs.core.contains_QMARK_(inst_65325,inst_65368);
var inst_65397 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_65325,inst_65368);
var inst_65398 = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.wsscode.pathom.core","reader-error","com.wsscode.pathom.core/reader-error",-803587882),inst_65397);
var inst_65399 = ((inst_65396) && (inst_65398));
var state_65727__$1 = state_65727;
if(cljs.core.truth_(inst_65399)){
var statearr_66092_67124 = state_65727__$1;
(statearr_66092_67124[(1)] = (58));

} else {
var statearr_66093_67126 = state_65727__$1;
(statearr_66093_67126[(1)] = (59));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65729 === (78))){
var state_65727__$1 = state_65727;
var statearr_66095_67127 = state_65727__$1;
(statearr_66095_67127[(2)] = null);

(statearr_66095_67127[(1)] = (79));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65729 === (132))){
var state_65727__$1 = state_65727;
var statearr_66096_67128 = state_65727__$1;
(statearr_66096_67128[(2)] = null);

(statearr_66096_67128[(1)] = (133));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65729 === (26))){
var state_65727__$1 = state_65727;
var statearr_66097_67129 = state_65727__$1;
(statearr_66097_67129[(2)] = waiting);

(statearr_66097_67129[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65729 === (123))){
var inst_65673 = (state_65727[(2)]);
var state_65727__$1 = state_65727;
var statearr_66098_67130 = state_65727__$1;
(statearr_66098_67130[(2)] = inst_65673);

(statearr_66098_67130[(1)] = (120));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65729 === (16))){
var inst_65242 = (state_65727[(2)]);
var state_65727__$1 = state_65727;
var statearr_66099_67133 = state_65727__$1;
(statearr_66099_67133[(2)] = inst_65242);

(statearr_66099_67133[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65729 === (133))){
var inst_65706 = (state_65727[(2)]);
var state_65727__$1 = state_65727;
var statearr_66101_67134 = state_65727__$1;
(statearr_66101_67134[(2)] = inst_65706);

(statearr_66101_67134[(1)] = (129));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65729 === (81))){
var inst_65504 = cljs.core.PersistentHashSet.EMPTY;
var state_65727__$1 = state_65727;
var statearr_66104_67137 = state_65727__$1;
(statearr_66104_67137[(2)] = inst_65504);

(statearr_66104_67137[(1)] = (82));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65729 === (120))){
var inst_65675 = (state_65727[(2)]);
var state_65727__$1 = state_65727;
var statearr_66105_67145 = state_65727__$1;
(statearr_66105_67145[(2)] = inst_65675);

(statearr_66105_67145[(1)] = (114));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65729 === (79))){
var inst_65480 = (state_65727[(2)]);
var state_65727__$1 = state_65727;
var statearr_66106_67153 = state_65727__$1;
(statearr_66106_67153[(2)] = inst_65480);

(statearr_66106_67153[(1)] = (75));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65729 === (38))){
var inst_65329 = (state_65727[(25)]);
var inst_65341 = (state_65727[(35)]);
var inst_65339 = cljs.core.seq(inst_65329);
var inst_65341__$1 = cljs.core.first(inst_65339);
var inst_65342 = cljs.core.next(inst_65339);
var inst_65344 = (inst_65341__$1 == null);
var inst_65345 = cljs.core.not(inst_65344);
var state_65727__$1 = (function (){var statearr_66107 = state_65727;
(statearr_66107[(35)] = inst_65341__$1);

(statearr_66107[(19)] = inst_65342);

return statearr_66107;
})();
if(inst_65345){
var statearr_66108_67155 = state_65727__$1;
(statearr_66108_67155[(1)] = (40));

} else {
var statearr_66109_67156 = state_65727__$1;
(statearr_66109_67156[(1)] = (41));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65729 === (126))){
var inst_65671 = (state_65727[(2)]);
var state_65727__$1 = state_65727;
var statearr_66110_67157 = state_65727__$1;
(statearr_66110_67157[(2)] = inst_65671);

(statearr_66110_67157[(1)] = (123));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65729 === (98))){
var state_65727__$1 = state_65727;
var statearr_66111_67158 = state_65727__$1;
(statearr_66111_67158[(2)] = false);

(statearr_66111_67158[(1)] = (99));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65729 === (124))){
var inst_65553 = (state_65727[(7)]);
var inst_65580 = (state_65727[(36)]);
var inst_65543 = (state_65727[(8)]);
var inst_65257 = (state_65727[(21)]);
var inst_65542 = (state_65727[(9)]);
var inst_65576 = (state_65727[(31)]);
var inst_65264 = (state_65727[(10)]);
var inst_65540 = (state_65727[(11)]);
var inst_65541 = (state_65727[(13)]);
var inst_65661 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(inst_65543,inst_65580,com.wsscode.pathom.parser.zero_inc);
var inst_65662 = com.wsscode.pathom.parser.parallel_process_value(inst_65264,tx,inst_65576,inst_65257,inst_65540,inst_65541,inst_65542,read,mutate,inst_65661,inst_65553);
var inst_65663 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_65662,(0),null);
var inst_65664 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_65662,(1),null);
var inst_65665 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_65662,(2),null);
var inst_65666 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_65662,(3),null);
var inst_65667 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_65662,(4),null);
var inst_65540__$1 = inst_65663;
var inst_65541__$1 = inst_65664;
var inst_65542__$1 = inst_65665;
var inst_65543__$1 = inst_65666;
var inst_65544 = inst_65667;
var state_65727__$1 = (function (){var statearr_66112 = state_65727;
(statearr_66112[(8)] = inst_65543__$1);

(statearr_66112[(15)] = inst_65544);

(statearr_66112[(9)] = inst_65542__$1);

(statearr_66112[(11)] = inst_65540__$1);

(statearr_66112[(13)] = inst_65541__$1);

return statearr_66112;
})();
var statearr_66113_67164 = state_65727__$1;
(statearr_66113_67164[(2)] = null);

(statearr_66113_67164[(1)] = (92));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65729 === (87))){
var state_65727__$1 = state_65727;
var statearr_66114_67166 = state_65727__$1;
(statearr_66114_67166[(2)] = false);

(statearr_66114_67166[(1)] = (88));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65729 === (30))){
var state_65727__$1 = state_65727;
var statearr_66115_67167 = state_65727__$1;
(statearr_66115_67167[(2)] = false);

(statearr_66115_67167[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65729 === (73))){
var inst_65328 = (state_65727[(18)]);
var inst_65257 = (state_65727[(21)]);
var inst_65269 = (state_65727[(45)]);
var inst_65327 = (state_65727[(22)]);
var inst_65325 = (state_65727[(24)]);
var inst_65264 = (state_65727[(10)]);
var inst_65326 = (state_65727[(17)]);
var inst_65467 = com.wsscode.pathom.parser.process_next_message(inst_65264,tx,inst_65326,inst_65269,inst_65327,inst_65328,inst_65257,inst_65325);
var state_65727__$1 = state_65727;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_65727__$1,(76),inst_65467);
} else {
if((state_val_65729 === (96))){
var inst_65570 = (state_65727[(2)]);
var state_65727__$1 = state_65727;
if(cljs.core.truth_(inst_65570)){
var statearr_66116_67172 = state_65727__$1;
(statearr_66116_67172[(1)] = (100));

} else {
var statearr_66117_67173 = state_65727__$1;
(statearr_66117_67173[(1)] = (101));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65729 === (10))){
var inst_65229 = (state_65727[(55)]);
var inst_65228 = (state_65727[(2)]);
var inst_65229__$1 = com.wsscode.pathom.parser.query__GT_ast(tx);
var inst_65231 = (inst_65229__$1 == null);
var inst_65232 = cljs.core.not(inst_65231);
var state_65727__$1 = (function (){var statearr_66118 = state_65727;
(statearr_66118[(55)] = inst_65229__$1);

(statearr_66118[(32)] = inst_65228);

return statearr_66118;
})();
if(inst_65232){
var statearr_66119_67174 = state_65727__$1;
(statearr_66119_67174[(1)] = (11));

} else {
var statearr_66120_67175 = state_65727__$1;
(statearr_66120_67175[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65729 === (18))){
var inst_65229 = (state_65727[(55)]);
var state_65727__$1 = state_65727;
var statearr_66121_67176 = state_65727__$1;
(statearr_66121_67176[(2)] = inst_65229);

(statearr_66121_67176[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65729 === (105))){
var inst_65710 = (state_65727[(2)]);
var state_65727__$1 = state_65727;
var statearr_66122_67178 = state_65727__$1;
(statearr_66122_67178[(2)] = inst_65710);

(statearr_66122_67178[(1)] = (93));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65729 === (52))){
var inst_65366 = (state_65727[(16)]);
var inst_65368 = (state_65727[(23)]);
var inst_65325 = (state_65727[(24)]);
var inst_65264 = (state_65727[(10)]);
var inst_65378 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("com.wsscode.pathom.parser","max-key-iterations","com.wsscode.pathom.parser/max-key-iterations",-1656113103)];
var inst_65380 = [new cljs.core.Keyword("com.wsscode.pathom.parser","max-iterations-reached","com.wsscode.pathom.parser/max-iterations-reached",677125351),inst_65366,max_key_iterations];
var inst_65381 = cljs.core.PersistentHashMap.fromArrays(inst_65378,inst_65380);
var inst_65382 = com.wsscode.pathom.trace.trace(inst_65264,inst_65381);
var inst_65385 = cljs.core.contains_QMARK_(inst_65325,inst_65368);
var inst_65386 = (!(inst_65385));
var state_65727__$1 = (function (){var statearr_66127 = state_65727;
(statearr_66127[(59)] = inst_65382);

return statearr_66127;
})();
if(inst_65386){
var statearr_66128_67199 = state_65727__$1;
(statearr_66128_67199[(1)] = (55));

} else {
var statearr_66129_67203 = state_65727__$1;
(statearr_66129_67203[(1)] = (56));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65729 === (114))){
var inst_65677 = (state_65727[(2)]);
var state_65727__$1 = state_65727;
var statearr_66131_67209 = state_65727__$1;
(statearr_66131_67209[(2)] = inst_65677);

(statearr_66131_67209[(1)] = (108));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65729 === (67))){
var inst_65328 = (state_65727[(18)]);
var inst_65342 = (state_65727[(19)]);
var inst_65366 = (state_65727[(16)]);
var inst_65327 = (state_65727[(22)]);
var inst_65325 = (state_65727[(24)]);
var inst_65264 = (state_65727[(10)]);
var inst_65326 = (state_65727[(17)]);
var inst_65429 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword(null,"key","key",-1516042587)];
var inst_65430 = [new cljs.core.Keyword("com.wsscode.pathom.parser","skip-wait-key","com.wsscode.pathom.parser/skip-wait-key",-1559475001),inst_65366];
var inst_65431 = cljs.core.PersistentHashMap.fromArrays(inst_65429,inst_65430);
var inst_65432 = com.wsscode.pathom.trace.trace(inst_65264,inst_65431);
var tmp66123 = inst_65328;
var tmp66124 = inst_65327;
var tmp66125 = inst_65325;
var tmp66126 = inst_65326;
var inst_65325__$1 = tmp66125;
var inst_65326__$1 = tmp66126;
var inst_65327__$1 = tmp66124;
var inst_65328__$1 = tmp66123;
var inst_65329 = inst_65342;
var state_65727__$1 = (function (){var statearr_66132 = state_65727;
(statearr_66132[(25)] = inst_65329);

(statearr_66132[(18)] = inst_65328__$1);

(statearr_66132[(60)] = inst_65432);

(statearr_66132[(22)] = inst_65327__$1);

(statearr_66132[(24)] = inst_65325__$1);

(statearr_66132[(17)] = inst_65326__$1);

return statearr_66132;
})();
var statearr_66133_67237 = state_65727__$1;
(statearr_66133_67237[(2)] = null);

(statearr_66133_67237[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65729 === (71))){
var state_65727__$1 = state_65727;
var statearr_66134_67245 = state_65727__$1;
(statearr_66134_67245[(2)] = null);

(statearr_66134_67245[(1)] = (72));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65729 === (42))){
var inst_65360 = (state_65727[(2)]);
var state_65727__$1 = state_65727;
if(cljs.core.truth_(inst_65360)){
var statearr_66135_67253 = state_65727__$1;
(statearr_66135_67253[(1)] = (46));

} else {
var statearr_66136_67256 = state_65727__$1;
(statearr_66136_67256[(1)] = (47));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65729 === (80))){
var state_65727__$1 = state_65727;
var statearr_66137_67265 = state_65727__$1;
(statearr_66137_67265[(2)] = waiting);

(statearr_66137_67265[(1)] = (82));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65729 === (37))){
var inst_65296 = (state_65727[(49)]);
var inst_65290 = (state_65727[(56)]);
var inst_65251 = (state_65727[(42)]);
var inst_65297 = (state_65727[(51)]);
var inst_65298 = (state_65727[(52)]);
var inst_65323 = (state_65727[(2)]);
var inst_65324 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_65323,new cljs.core.Keyword(null,"key","key",-1516042587));
var inst_65325 = inst_65290;
var inst_65326 = inst_65296;
var inst_65327 = inst_65297;
var inst_65328 = inst_65298;
var inst_65329 = inst_65251;
var state_65727__$1 = (function (){var statearr_66138 = state_65727;
(statearr_66138[(25)] = inst_65329);

(statearr_66138[(18)] = inst_65328);

(statearr_66138[(22)] = inst_65327);

(statearr_66138[(24)] = inst_65325);

(statearr_66138[(61)] = inst_65324);

(statearr_66138[(17)] = inst_65326);

return statearr_66138;
})();
var statearr_66139_67283 = state_65727__$1;
(statearr_66139_67283[(2)] = null);

(statearr_66139_67283[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65729 === (63))){
var inst_65412 = (state_65727[(2)]);
var state_65727__$1 = state_65727;
if(cljs.core.truth_(inst_65412)){
var statearr_66141_67285 = state_65727__$1;
(statearr_66141_67285[(1)] = (64));

} else {
var statearr_66142_67286 = state_65727__$1;
(statearr_66142_67286[(1)] = (65));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65729 === (94))){
var inst_65552 = (state_65727[(29)]);
var inst_65558 = inst_65552.cljs$lang$protocol_mask$partition0$;
var inst_65559 = (inst_65558 & (64));
var inst_65560 = inst_65552.cljs$core$ISeq$;
var inst_65561 = (cljs.core.PROTOCOL_SENTINEL === inst_65560);
var inst_65562 = ((inst_65559) || (inst_65561));
var state_65727__$1 = state_65727;
if(cljs.core.truth_(inst_65562)){
var statearr_66144_67287 = state_65727__$1;
(statearr_66144_67287[(1)] = (97));

} else {
var statearr_66145_67289 = state_65727__$1;
(statearr_66145_67289[(1)] = (98));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65729 === (8))){
var inst_65223 = (state_65727[(27)]);
var inst_65225 = (inst_65223.cljs$core$IFn$_invoke$arity$2 ? inst_65223.cljs$core$IFn$_invoke$arity$2(env,key_process_timeout) : inst_65223.call(null,env,key_process_timeout));
var state_65727__$1 = state_65727;
var statearr_66146_67291 = state_65727__$1;
(statearr_66146_67291[(2)] = inst_65225);

(statearr_66146_67291[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65729 === (49))){
var inst_65328 = (state_65727[(18)]);
var inst_65366 = (state_65727[(16)]);
var inst_65365 = (state_65727[(20)]);
var inst_65264 = (state_65727[(10)]);
var inst_65368 = com.wsscode.pathom.parser.ast__GT_out_key(inst_65365);
var inst_65369 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword(null,"key","key",-1516042587)];
var inst_65370 = [new cljs.core.Keyword("com.wsscode.pathom.parser","process-key","com.wsscode.pathom.parser/process-key",1272337224),inst_65366];
var inst_65371 = cljs.core.PersistentHashMap.fromArrays(inst_65369,inst_65370);
var inst_65372 = com.wsscode.pathom.trace.trace(inst_65264,inst_65371);
var inst_65373 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(inst_65328,inst_65366,(0));
var inst_65374 = (max_key_iterations - (1));
var inst_65375 = (inst_65373 > inst_65374);
var state_65727__$1 = (function (){var statearr_66147 = state_65727;
(statearr_66147[(23)] = inst_65368);

(statearr_66147[(62)] = inst_65372);

return statearr_66147;
})();
if(cljs.core.truth_(inst_65375)){
var statearr_66148_67294 = state_65727__$1;
(statearr_66148_67294[(1)] = (52));

} else {
var statearr_66149_67295 = state_65727__$1;
(statearr_66149_67295[(1)] = (53));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65729 === (84))){
var state_65727__$1 = state_65727;
var statearr_66150_67296 = state_65727__$1;
(statearr_66150_67296[(2)] = false);

(statearr_66150_67296[(1)] = (85));


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
});})(c__45808__auto__,map__65205,map__65205__$1,read,mutate,map__65206,map__65206__$1,env,waiting,key_watchers,max_key_iterations,key_process_timeout,key_process_timeout_step,entity_path_cache,path))
;
return ((function (switch__45525__auto__,c__45808__auto__,map__65205,map__65205__$1,read,mutate,map__65206,map__65206__$1,env,waiting,key_watchers,max_key_iterations,key_process_timeout,key_process_timeout_step,entity_path_cache,path){
return (function() {
var com$wsscode$pathom$parser$call_parallel_parser_$_state_machine__45526__auto__ = null;
var com$wsscode$pathom$parser$call_parallel_parser_$_state_machine__45526__auto____0 = (function (){
var statearr_66152 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_66152[(0)] = com$wsscode$pathom$parser$call_parallel_parser_$_state_machine__45526__auto__);

(statearr_66152[(1)] = (1));

return statearr_66152;
});
var com$wsscode$pathom$parser$call_parallel_parser_$_state_machine__45526__auto____1 = (function (state_65727){
while(true){
var ret_value__45527__auto__ = (function (){try{while(true){
var result__45528__auto__ = switch__45525__auto__(state_65727);
if(cljs.core.keyword_identical_QMARK_(result__45528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45528__auto__;
}
break;
}
}catch (e66153){if((e66153 instanceof Object)){
var ex__45529__auto__ = e66153;
var statearr_66154_67330 = state_65727;
(statearr_66154_67330[(5)] = ex__45529__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_65727);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e66153;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__67331 = state_65727;
state_65727 = G__67331;
continue;
} else {
return ret_value__45527__auto__;
}
break;
}
});
com$wsscode$pathom$parser$call_parallel_parser_$_state_machine__45526__auto__ = function(state_65727){
switch(arguments.length){
case 0:
return com$wsscode$pathom$parser$call_parallel_parser_$_state_machine__45526__auto____0.call(this);
case 1:
return com$wsscode$pathom$parser$call_parallel_parser_$_state_machine__45526__auto____1.call(this,state_65727);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$parser$call_parallel_parser_$_state_machine__45526__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$parser$call_parallel_parser_$_state_machine__45526__auto____0;
com$wsscode$pathom$parser$call_parallel_parser_$_state_machine__45526__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$parser$call_parallel_parser_$_state_machine__45526__auto____1;
return com$wsscode$pathom$parser$call_parallel_parser_$_state_machine__45526__auto__;
})()
;})(switch__45525__auto__,c__45808__auto__,map__65205,map__65205__$1,read,mutate,map__65206,map__65206__$1,env,waiting,key_watchers,max_key_iterations,key_process_timeout,key_process_timeout_step,entity_path_cache,path))
})();
var state__45810__auto__ = (function (){var statearr_66155 = f__45809__auto__();
(statearr_66155[(6)] = c__45808__auto__);

return statearr_66155;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45810__auto__);
});})(c__45808__auto__,map__65205,map__65205__$1,read,mutate,map__65206,map__65206__$1,env,waiting,key_watchers,max_key_iterations,key_process_timeout,key_process_timeout_step,entity_path_cache,path))
);

return c__45808__auto__;
});
com.wsscode.pathom.parser.parallel_parser = (function com$wsscode$pathom$parser$parallel_parser(p__66159){
var map__66160 = p__66159;
var map__66160__$1 = (((((!((map__66160 == null))))?(((((map__66160.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66160.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66160):map__66160);
var pconfig = map__66160__$1;
var add_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66160__$1,new cljs.core.Keyword(null,"add-error","add-error",-1195330235));
return ((function (map__66160,map__66160__$1,pconfig,add_error){
return (function com$wsscode$pathom$parser$parallel_parser_$_self(p__66167,tx){
var map__66168 = p__66167;
var map__66168__$1 = (((((!((map__66168 == null))))?(((((map__66168.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66168.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66168):map__66168);
var env = map__66168__$1;
var key_process_timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__66168__$1,new cljs.core.Keyword("com.wsscode.pathom.parser","key-process-timeout","com.wsscode.pathom.parser/key-process-timeout",-1793561165),(60000));
var active_paths = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66168__$1,new cljs.core.Keyword("com.wsscode.pathom.parser","active-paths","com.wsscode.pathom.parser/active-paths",457466204));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66168__$1,new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661));
var c__45808__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__45808__auto__,map__66168,map__66168__$1,env,key_process_timeout,active_paths,path,map__66160,map__66160__$1,pconfig,add_error){
return (function (){
var f__45809__auto__ = (function (){var switch__45525__auto__ = ((function (c__45808__auto__,map__66168,map__66168__$1,env,key_process_timeout,active_paths,path,map__66160,map__66160__$1,pconfig,add_error){
return (function (state_66214){
var state_val_66215 = (state_66214[(1)]);
if((state_val_66215 === (7))){
var inst_66190 = (state_66214[(2)]);
var state_66214__$1 = state_66214;
return cljs.core.async.ioc_alts_BANG_(state_66214__$1,(8),inst_66190);
} else {
if((state_val_66215 === (1))){
var state_66214__$1 = state_66214;
var statearr_66216_67350 = state_66214__$1;
(statearr_66216_67350[(2)] = null);

(statearr_66216_67350[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66215 === (4))){
var inst_66180 = (state_66214[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_66214,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_66175 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(active_paths,cljs.core.conj,path);
var inst_66179 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(env,new cljs.core.Keyword(null,"parser","parser",-1543495310),com$wsscode$pathom$parser$parallel_parser_$_self,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.wsscode.pathom.parser","key-process-timeout","com.wsscode.pathom.parser/key-process-timeout",-1793561165),key_process_timeout], 0));
var inst_66180__$1 = com.wsscode.pathom.parser.call_parallel_parser(pconfig,inst_66179,tx);
var inst_66182 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_66183 = [inst_66180__$1];
var inst_66184 = (new cljs.core.PersistentVector(null,1,(5),inst_66182,inst_66183,null));
var state_66214__$1 = (function (){var statearr_66217 = state_66214;
(statearr_66217[(7)] = inst_66180__$1);

(statearr_66217[(8)] = inst_66184);

(statearr_66217[(9)] = inst_66175);

return statearr_66217;
})();
if(cljs.core.truth_(key_process_timeout)){
var statearr_66218_67355 = state_66214__$1;
(statearr_66218_67355[(1)] = (5));

} else {
var statearr_66219_67356 = state_66214__$1;
(statearr_66219_67356[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66215 === (6))){
var inst_66184 = (state_66214[(8)]);
var state_66214__$1 = state_66214;
var statearr_66220_67357 = state_66214__$1;
(statearr_66220_67357[(2)] = inst_66184);

(statearr_66220_67357[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66215 === (3))){
var inst_66171 = (state_66214[(2)]);
var state_66214__$1 = state_66214;
var statearr_66223_67359 = state_66214__$1;
(statearr_66223_67359[(2)] = inst_66171);


cljs.core.async.impl.ioc_helpers.process_exception(state_66214__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66215 === (2))){
var inst_66212 = (state_66214[(2)]);
var state_66214__$1 = state_66214;
return cljs.core.async.impl.ioc_helpers.return_chan(state_66214__$1,inst_66212);
} else {
if((state_val_66215 === (11))){
var inst_66210 = (state_66214[(2)]);
var state_66214__$1 = state_66214;
var statearr_66225_67361 = state_66214__$1;
(statearr_66225_67361[(2)] = inst_66210);


cljs.core.async.impl.ioc_helpers.process_exception(state_66214__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66215 === (9))){
var inst_66193 = (state_66214[(10)]);
var state_66214__$1 = state_66214;
var statearr_66226_67364 = state_66214__$1;
(statearr_66226_67364[(2)] = inst_66193);

(statearr_66226_67364[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66215 === (5))){
var inst_66184 = (state_66214[(8)]);
var inst_66186 = cljs.core.async.timeout(key_process_timeout);
var inst_66187 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_66184,inst_66186);
var state_66214__$1 = state_66214;
var statearr_66227_67366 = state_66214__$1;
(statearr_66227_67366[(2)] = inst_66187);

(statearr_66227_67366[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66215 === (10))){
var inst_66199 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","key-process-timeout","com.wsscode.pathom.parser/key-process-timeout",-1793561165)];
var inst_66200 = [new cljs.core.Keyword("com.wsscode.pathom.parser","timeout-reach","com.wsscode.pathom.parser/timeout-reach",1835951243),key_process_timeout];
var inst_66201 = cljs.core.PersistentHashMap.fromArrays(inst_66199,inst_66200);
var inst_66202 = com.wsscode.pathom.trace.trace(env,inst_66201);
var inst_66203 = [new cljs.core.Keyword(null,"timeout","timeout",-318625318)];
var inst_66204 = [key_process_timeout];
var inst_66205 = cljs.core.PersistentHashMap.fromArrays(inst_66203,inst_66204);
var inst_66206 = cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Parallel read timeout",inst_66205);
var inst_66207 = (add_error.cljs$core$IFn$_invoke$arity$2 ? add_error.cljs$core$IFn$_invoke$arity$2(env,inst_66206) : add_error.call(null,env,inst_66206));
var inst_66208 = cljs.core.PersistentHashMap.EMPTY;
var state_66214__$1 = (function (){var statearr_66228 = state_66214;
(statearr_66228[(11)] = inst_66207);

(statearr_66228[(12)] = inst_66202);

return statearr_66228;
})();
var statearr_66229_67369 = state_66214__$1;
(statearr_66229_67369[(2)] = inst_66208);

(statearr_66229_67369[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66215 === (8))){
var inst_66180 = (state_66214[(7)]);
var inst_66192 = (state_66214[(2)]);
var inst_66193 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_66192,(0),null);
var inst_66194 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_66192,(1),null);
var inst_66195 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(active_paths,cljs.core.disj,path);
var inst_66196 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_66180,inst_66194);
var state_66214__$1 = (function (){var statearr_66230 = state_66214;
(statearr_66230[(10)] = inst_66193);

(statearr_66230[(13)] = inst_66195);

return statearr_66230;
})();
if(inst_66196){
var statearr_66231_67373 = state_66214__$1;
(statearr_66231_67373[(1)] = (9));

} else {
var statearr_66232_67374 = state_66214__$1;
(statearr_66232_67374[(1)] = (10));

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
});})(c__45808__auto__,map__66168,map__66168__$1,env,key_process_timeout,active_paths,path,map__66160,map__66160__$1,pconfig,add_error))
;
return ((function (switch__45525__auto__,c__45808__auto__,map__66168,map__66168__$1,env,key_process_timeout,active_paths,path,map__66160,map__66160__$1,pconfig,add_error){
return (function() {
var com$wsscode$pathom$parser$parallel_parser_$_self_$_state_machine__45526__auto__ = null;
var com$wsscode$pathom$parser$parallel_parser_$_self_$_state_machine__45526__auto____0 = (function (){
var statearr_66233 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_66233[(0)] = com$wsscode$pathom$parser$parallel_parser_$_self_$_state_machine__45526__auto__);

(statearr_66233[(1)] = (1));

return statearr_66233;
});
var com$wsscode$pathom$parser$parallel_parser_$_self_$_state_machine__45526__auto____1 = (function (state_66214){
while(true){
var ret_value__45527__auto__ = (function (){try{while(true){
var result__45528__auto__ = switch__45525__auto__(state_66214);
if(cljs.core.keyword_identical_QMARK_(result__45528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45528__auto__;
}
break;
}
}catch (e66234){if((e66234 instanceof Object)){
var ex__45529__auto__ = e66234;
var statearr_66235_67378 = state_66214;
(statearr_66235_67378[(5)] = ex__45529__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_66214);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e66234;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__67380 = state_66214;
state_66214 = G__67380;
continue;
} else {
return ret_value__45527__auto__;
}
break;
}
});
com$wsscode$pathom$parser$parallel_parser_$_self_$_state_machine__45526__auto__ = function(state_66214){
switch(arguments.length){
case 0:
return com$wsscode$pathom$parser$parallel_parser_$_self_$_state_machine__45526__auto____0.call(this);
case 1:
return com$wsscode$pathom$parser$parallel_parser_$_self_$_state_machine__45526__auto____1.call(this,state_66214);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$parser$parallel_parser_$_self_$_state_machine__45526__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$parser$parallel_parser_$_self_$_state_machine__45526__auto____0;
com$wsscode$pathom$parser$parallel_parser_$_self_$_state_machine__45526__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$parser$parallel_parser_$_self_$_state_machine__45526__auto____1;
return com$wsscode$pathom$parser$parallel_parser_$_self_$_state_machine__45526__auto__;
})()
;})(switch__45525__auto__,c__45808__auto__,map__66168,map__66168__$1,env,key_process_timeout,active_paths,path,map__66160,map__66160__$1,pconfig,add_error))
})();
var state__45810__auto__ = (function (){var statearr_66237 = f__45809__auto__();
(statearr_66237[(6)] = c__45808__auto__);

return statearr_66237;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45810__auto__);
});})(c__45808__auto__,map__66168,map__66168__$1,env,key_process_timeout,active_paths,path,map__66160,map__66160__$1,pconfig,add_error))
);

return c__45808__auto__;
});
;})(map__66160,map__66160__$1,pconfig,add_error))
});
com.wsscode.pathom.parser.unique_ident_QMARK_ = (function com$wsscode$pathom$parser$unique_ident_QMARK_(x){
return ((cljs.core.ident_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"_","_",-1201019570,null),cljs.core.second(x))));
});

//# sourceMappingURL=com.wsscode.pathom.parser.js.map
