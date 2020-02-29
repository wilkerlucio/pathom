goog.provide('shadow.cljs.devtools.client.browser');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('goog.dom');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('goog.net.XhrIo');
goog.require('shadow.cljs.devtools.client.env');
goog.require('shadow.cljs.devtools.client.console');
goog.require('shadow.cljs.devtools.client.hud');
goog.require('clojure.set');
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.repl_ns_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.repl_ns_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.socket_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.socket_ref = cljs.core.volatile_BANG_(null);
}
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62665 = arguments.length;
var i__4731__auto___62666 = (0);
while(true){
if((i__4731__auto___62666 < len__4730__auto___62665)){
args__4736__auto__.push((arguments[i__4731__auto___62666]));

var G__62672 = (i__4731__auto___62666 + (1));
i__4731__auto___62666 = G__62672;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%c\uD83E\uDC36 shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
});

shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq62172){
var G__62173 = cljs.core.first(seq62172);
var seq62172__$1 = cljs.core.next(seq62172);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__62173,seq62172__$1);
});

shadow.cljs.devtools.client.browser.ws_msg = (function shadow$cljs$devtools$client$browser$ws_msg(msg){
var temp__5718__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5718__auto__)){
var s = temp__5718__auto__;
return s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
} else {
return console.warn("WEBSOCKET NOT CONNECTED",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
}
});
shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__62199 = cljs.core.seq(sources);
var chunk__62200 = null;
var count__62201 = (0);
var i__62202 = (0);
while(true){
if((i__62202 < count__62201)){
var map__62231 = chunk__62200.cljs$core$IIndexed$_nth$arity$2(null,i__62202);
var map__62231__$1 = (((((!((map__62231 == null))))?(((((map__62231.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62231.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62231):map__62231);
var src = map__62231__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62231__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62231__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62231__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62231__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e62235){var e_62694 = e62235;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_62694);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_62694.message)].join('')));
}

var G__62697 = seq__62199;
var G__62698 = chunk__62200;
var G__62699 = count__62201;
var G__62700 = (i__62202 + (1));
seq__62199 = G__62697;
chunk__62200 = G__62698;
count__62201 = G__62699;
i__62202 = G__62700;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__62199);
if(temp__5720__auto__){
var seq__62199__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__62199__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__62199__$1);
var G__62702 = cljs.core.chunk_rest(seq__62199__$1);
var G__62703 = c__4550__auto__;
var G__62704 = cljs.core.count(c__4550__auto__);
var G__62705 = (0);
seq__62199 = G__62702;
chunk__62200 = G__62703;
count__62201 = G__62704;
i__62202 = G__62705;
continue;
} else {
var map__62243 = cljs.core.first(seq__62199__$1);
var map__62243__$1 = (((((!((map__62243 == null))))?(((((map__62243.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62243.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62243):map__62243);
var src = map__62243__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62243__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62243__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62243__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62243__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e62246){var e_62706 = e62246;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_62706);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_62706.message)].join('')));
}

var G__62708 = cljs.core.next(seq__62199__$1);
var G__62709 = null;
var G__62710 = (0);
var G__62711 = (0);
seq__62199 = G__62708;
chunk__62200 = G__62709;
count__62201 = G__62710;
i__62202 = G__62711;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["can't find fn ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__62252 = cljs.core.seq(js_requires);
var chunk__62253 = null;
var count__62254 = (0);
var i__62255 = (0);
while(true){
if((i__62255 < count__62254)){
var js_ns = chunk__62253.cljs$core$IIndexed$_nth$arity$2(null,i__62255);
var require_str_62724 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_62724);


var G__62726 = seq__62252;
var G__62727 = chunk__62253;
var G__62728 = count__62254;
var G__62729 = (i__62255 + (1));
seq__62252 = G__62726;
chunk__62253 = G__62727;
count__62254 = G__62728;
i__62255 = G__62729;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__62252);
if(temp__5720__auto__){
var seq__62252__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__62252__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__62252__$1);
var G__62731 = cljs.core.chunk_rest(seq__62252__$1);
var G__62732 = c__4550__auto__;
var G__62733 = cljs.core.count(c__4550__auto__);
var G__62734 = (0);
seq__62252 = G__62731;
chunk__62253 = G__62732;
count__62254 = G__62733;
i__62255 = G__62734;
continue;
} else {
var js_ns = cljs.core.first(seq__62252__$1);
var require_str_62735 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_62735);


var G__62741 = cljs.core.next(seq__62252__$1);
var G__62742 = null;
var G__62743 = (0);
var G__62744 = (0);
seq__62252 = G__62741;
chunk__62253 = G__62742;
count__62254 = G__62743;
i__62255 = G__62744;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.load_sources = (function shadow$cljs$devtools$client$browser$load_sources(sources,callback){
if(cljs.core.empty_QMARK_(sources)){
var G__62266 = cljs.core.PersistentVector.EMPTY;
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__62266) : callback.call(null,G__62266));
} else {
return goog.net.XhrIo.send(shadow.cljs.devtools.client.env.files_url(),(function (res){
var req = this;
var content = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(content) : callback.call(null,content));
}),"POST",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"browser","browser",828191719),new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources)], null)], 0)),({"content-type": "application/edn; charset=utf-8"}));
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(p__62274){
var map__62275 = p__62274;
var map__62275__$1 = (((((!((map__62275 == null))))?(((((map__62275.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62275.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62275):map__62275);
var msg = map__62275__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62275__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62275__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4523__auto__ = ((function (map__62275,map__62275__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__62278(s__62279){
return (new cljs.core.LazySeq(null,((function (map__62275,map__62275__$1,msg,info,reload_info){
return (function (){
var s__62279__$1 = s__62279;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__62279__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var map__62288 = cljs.core.first(xs__6277__auto__);
var map__62288__$1 = (((((!((map__62288 == null))))?(((((map__62288.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62288.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62288):map__62288);
var src = map__62288__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62288__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62288__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4519__auto__ = ((function (s__62279__$1,map__62288,map__62288__$1,src,resource_name,warnings,xs__6277__auto__,temp__5720__auto__,map__62275,map__62275__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__62278_$_iter__62280(s__62281){
return (new cljs.core.LazySeq(null,((function (s__62279__$1,map__62288,map__62288__$1,src,resource_name,warnings,xs__6277__auto__,temp__5720__auto__,map__62275,map__62275__$1,msg,info,reload_info){
return (function (){
var s__62281__$1 = s__62281;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__62281__$1);
if(temp__5720__auto____$1){
var s__62281__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__62281__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__62281__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__62283 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__62282 = (0);
while(true){
if((i__62282 < size__4522__auto__)){
var warning = cljs.core._nth(c__4521__auto__,i__62282);
cljs.core.chunk_append(b__62283,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__62775 = (i__62282 + (1));
i__62282 = G__62775;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__62283),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__62278_$_iter__62280(cljs.core.chunk_rest(s__62281__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__62283),null);
}
} else {
var warning = cljs.core.first(s__62281__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__62278_$_iter__62280(cljs.core.rest(s__62281__$2)));
}
} else {
return null;
}
break;
}
});})(s__62279__$1,map__62288,map__62288__$1,src,resource_name,warnings,xs__6277__auto__,temp__5720__auto__,map__62275,map__62275__$1,msg,info,reload_info))
,null,null));
});})(s__62279__$1,map__62288,map__62288__$1,src,resource_name,warnings,xs__6277__auto__,temp__5720__auto__,map__62275,map__62275__$1,msg,info,reload_info))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(warnings));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__62278(cljs.core.rest(s__62279__$1)));
} else {
var G__62787 = cljs.core.rest(s__62279__$1);
s__62279__$1 = G__62787;
continue;
}
} else {
var G__62789 = cljs.core.rest(s__62279__$1);
s__62279__$1 = G__62789;
continue;
}
} else {
return null;
}
break;
}
});})(map__62275,map__62275__$1,msg,info,reload_info))
,null,null));
});})(map__62275,map__62275__$1,msg,info,reload_info))
;
return iter__4523__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
var seq__62307_62793 = cljs.core.seq(warnings);
var chunk__62308_62794 = null;
var count__62309_62795 = (0);
var i__62310_62796 = (0);
while(true){
if((i__62310_62796 < count__62309_62795)){
var map__62333_62800 = chunk__62308_62794.cljs$core$IIndexed$_nth$arity$2(null,i__62310_62796);
var map__62333_62801__$1 = (((((!((map__62333_62800 == null))))?(((((map__62333_62800.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62333_62800.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62333_62800):map__62333_62800);
var w_62802 = map__62333_62801__$1;
var msg_62803__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62333_62801__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_62804 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62333_62801__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_62805 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62333_62801__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_62806 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62333_62801__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_62806)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_62804),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_62805),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_62803__$1)].join(''));


var G__62814 = seq__62307_62793;
var G__62815 = chunk__62308_62794;
var G__62816 = count__62309_62795;
var G__62817 = (i__62310_62796 + (1));
seq__62307_62793 = G__62814;
chunk__62308_62794 = G__62815;
count__62309_62795 = G__62816;
i__62310_62796 = G__62817;
continue;
} else {
var temp__5720__auto___62819 = cljs.core.seq(seq__62307_62793);
if(temp__5720__auto___62819){
var seq__62307_62820__$1 = temp__5720__auto___62819;
if(cljs.core.chunked_seq_QMARK_(seq__62307_62820__$1)){
var c__4550__auto___62821 = cljs.core.chunk_first(seq__62307_62820__$1);
var G__62822 = cljs.core.chunk_rest(seq__62307_62820__$1);
var G__62823 = c__4550__auto___62821;
var G__62824 = cljs.core.count(c__4550__auto___62821);
var G__62825 = (0);
seq__62307_62793 = G__62822;
chunk__62308_62794 = G__62823;
count__62309_62795 = G__62824;
i__62310_62796 = G__62825;
continue;
} else {
var map__62355_62826 = cljs.core.first(seq__62307_62820__$1);
var map__62355_62827__$1 = (((((!((map__62355_62826 == null))))?(((((map__62355_62826.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62355_62826.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62355_62826):map__62355_62826);
var w_62828 = map__62355_62827__$1;
var msg_62829__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62355_62827__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_62830 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62355_62827__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_62831 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62355_62827__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_62832 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62355_62827__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_62832)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_62830),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_62831),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_62829__$1)].join(''));


var G__62835 = cljs.core.next(seq__62307_62820__$1);
var G__62836 = null;
var G__62837 = (0);
var G__62838 = (0);
seq__62307_62793 = G__62835;
chunk__62308_62794 = G__62836;
count__62309_62795 = G__62837;
i__62310_62796 = G__62838;
continue;
}
} else {
}
}
break;
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.browser.load_sources(sources_to_get,((function (sources_to_get,warnings,map__62275,map__62275__$1,msg,info,reload_info){
return (function (p1__62271_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__62271_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
});})(sources_to_get,warnings,map__62275,map__62275__$1,msg,info,reload_info))
);
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(rel_new),"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__4120__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__4120__auto__){
var and__4120__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__4120__auto____$1){
return new$;
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_watch = (function shadow$cljs$devtools$client$browser$handle_asset_watch(p__62380){
var map__62381 = p__62380;
var map__62381__$1 = (((((!((map__62381 == null))))?(((((map__62381.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62381.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62381):map__62381);
var msg = map__62381__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62381__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__62383 = cljs.core.seq(updates);
var chunk__62385 = null;
var count__62386 = (0);
var i__62387 = (0);
while(true){
if((i__62387 < count__62386)){
var path = chunk__62385.cljs$core$IIndexed$_nth$arity$2(null,i__62387);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__62449_62860 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__62452_62861 = null;
var count__62453_62862 = (0);
var i__62454_62863 = (0);
while(true){
if((i__62454_62863 < count__62453_62862)){
var node_62867 = chunk__62452_62861.cljs$core$IIndexed$_nth$arity$2(null,i__62454_62863);
var path_match_62868 = shadow.cljs.devtools.client.browser.match_paths(node_62867.getAttribute("href"),path);
if(cljs.core.truth_(path_match_62868)){
var new_link_62869 = (function (){var G__62480 = node_62867.cloneNode(true);
G__62480.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_62868),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__62480;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_62868], 0));

goog.dom.insertSiblingAfter(new_link_62869,node_62867);

goog.dom.removeNode(node_62867);


var G__62871 = seq__62449_62860;
var G__62872 = chunk__62452_62861;
var G__62873 = count__62453_62862;
var G__62874 = (i__62454_62863 + (1));
seq__62449_62860 = G__62871;
chunk__62452_62861 = G__62872;
count__62453_62862 = G__62873;
i__62454_62863 = G__62874;
continue;
} else {
var G__62875 = seq__62449_62860;
var G__62876 = chunk__62452_62861;
var G__62877 = count__62453_62862;
var G__62878 = (i__62454_62863 + (1));
seq__62449_62860 = G__62875;
chunk__62452_62861 = G__62876;
count__62453_62862 = G__62877;
i__62454_62863 = G__62878;
continue;
}
} else {
var temp__5720__auto___62882 = cljs.core.seq(seq__62449_62860);
if(temp__5720__auto___62882){
var seq__62449_62883__$1 = temp__5720__auto___62882;
if(cljs.core.chunked_seq_QMARK_(seq__62449_62883__$1)){
var c__4550__auto___62884 = cljs.core.chunk_first(seq__62449_62883__$1);
var G__62885 = cljs.core.chunk_rest(seq__62449_62883__$1);
var G__62886 = c__4550__auto___62884;
var G__62887 = cljs.core.count(c__4550__auto___62884);
var G__62888 = (0);
seq__62449_62860 = G__62885;
chunk__62452_62861 = G__62886;
count__62453_62862 = G__62887;
i__62454_62863 = G__62888;
continue;
} else {
var node_62890 = cljs.core.first(seq__62449_62883__$1);
var path_match_62894 = shadow.cljs.devtools.client.browser.match_paths(node_62890.getAttribute("href"),path);
if(cljs.core.truth_(path_match_62894)){
var new_link_62895 = (function (){var G__62485 = node_62890.cloneNode(true);
G__62485.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_62894),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__62485;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_62894], 0));

goog.dom.insertSiblingAfter(new_link_62895,node_62890);

goog.dom.removeNode(node_62890);


var G__62899 = cljs.core.next(seq__62449_62883__$1);
var G__62900 = null;
var G__62901 = (0);
var G__62902 = (0);
seq__62449_62860 = G__62899;
chunk__62452_62861 = G__62900;
count__62453_62862 = G__62901;
i__62454_62863 = G__62902;
continue;
} else {
var G__62906 = cljs.core.next(seq__62449_62883__$1);
var G__62907 = null;
var G__62908 = (0);
var G__62909 = (0);
seq__62449_62860 = G__62906;
chunk__62452_62861 = G__62907;
count__62453_62862 = G__62908;
i__62454_62863 = G__62909;
continue;
}
}
} else {
}
}
break;
}


var G__62911 = seq__62383;
var G__62912 = chunk__62385;
var G__62913 = count__62386;
var G__62914 = (i__62387 + (1));
seq__62383 = G__62911;
chunk__62385 = G__62912;
count__62386 = G__62913;
i__62387 = G__62914;
continue;
} else {
var G__62915 = seq__62383;
var G__62916 = chunk__62385;
var G__62917 = count__62386;
var G__62918 = (i__62387 + (1));
seq__62383 = G__62915;
chunk__62385 = G__62916;
count__62386 = G__62917;
i__62387 = G__62918;
continue;
}
} else {
var temp__5720__auto__ = cljs.core.seq(seq__62383);
if(temp__5720__auto__){
var seq__62383__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__62383__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__62383__$1);
var G__62925 = cljs.core.chunk_rest(seq__62383__$1);
var G__62926 = c__4550__auto__;
var G__62927 = cljs.core.count(c__4550__auto__);
var G__62928 = (0);
seq__62383 = G__62925;
chunk__62385 = G__62926;
count__62386 = G__62927;
i__62387 = G__62928;
continue;
} else {
var path = cljs.core.first(seq__62383__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__62489_62929 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__62492_62930 = null;
var count__62493_62931 = (0);
var i__62494_62932 = (0);
while(true){
if((i__62494_62932 < count__62493_62931)){
var node_62934 = chunk__62492_62930.cljs$core$IIndexed$_nth$arity$2(null,i__62494_62932);
var path_match_62935 = shadow.cljs.devtools.client.browser.match_paths(node_62934.getAttribute("href"),path);
if(cljs.core.truth_(path_match_62935)){
var new_link_62937 = (function (){var G__62512 = node_62934.cloneNode(true);
G__62512.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_62935),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__62512;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_62935], 0));

goog.dom.insertSiblingAfter(new_link_62937,node_62934);

goog.dom.removeNode(node_62934);


var G__62942 = seq__62489_62929;
var G__62943 = chunk__62492_62930;
var G__62944 = count__62493_62931;
var G__62945 = (i__62494_62932 + (1));
seq__62489_62929 = G__62942;
chunk__62492_62930 = G__62943;
count__62493_62931 = G__62944;
i__62494_62932 = G__62945;
continue;
} else {
var G__62947 = seq__62489_62929;
var G__62948 = chunk__62492_62930;
var G__62949 = count__62493_62931;
var G__62950 = (i__62494_62932 + (1));
seq__62489_62929 = G__62947;
chunk__62492_62930 = G__62948;
count__62493_62931 = G__62949;
i__62494_62932 = G__62950;
continue;
}
} else {
var temp__5720__auto___62952__$1 = cljs.core.seq(seq__62489_62929);
if(temp__5720__auto___62952__$1){
var seq__62489_62953__$1 = temp__5720__auto___62952__$1;
if(cljs.core.chunked_seq_QMARK_(seq__62489_62953__$1)){
var c__4550__auto___62955 = cljs.core.chunk_first(seq__62489_62953__$1);
var G__62956 = cljs.core.chunk_rest(seq__62489_62953__$1);
var G__62957 = c__4550__auto___62955;
var G__62958 = cljs.core.count(c__4550__auto___62955);
var G__62959 = (0);
seq__62489_62929 = G__62956;
chunk__62492_62930 = G__62957;
count__62493_62931 = G__62958;
i__62494_62932 = G__62959;
continue;
} else {
var node_62960 = cljs.core.first(seq__62489_62953__$1);
var path_match_62962 = shadow.cljs.devtools.client.browser.match_paths(node_62960.getAttribute("href"),path);
if(cljs.core.truth_(path_match_62962)){
var new_link_62964 = (function (){var G__62522 = node_62960.cloneNode(true);
G__62522.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_62962),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__62522;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_62962], 0));

goog.dom.insertSiblingAfter(new_link_62964,node_62960);

goog.dom.removeNode(node_62960);


var G__62965 = cljs.core.next(seq__62489_62953__$1);
var G__62966 = null;
var G__62967 = (0);
var G__62968 = (0);
seq__62489_62929 = G__62965;
chunk__62492_62930 = G__62966;
count__62493_62931 = G__62967;
i__62494_62932 = G__62968;
continue;
} else {
var G__62971 = cljs.core.next(seq__62489_62953__$1);
var G__62972 = null;
var G__62973 = (0);
var G__62974 = (0);
seq__62489_62929 = G__62971;
chunk__62492_62930 = G__62972;
count__62493_62931 = G__62973;
i__62494_62932 = G__62974;
continue;
}
}
} else {
}
}
break;
}


var G__62976 = cljs.core.next(seq__62383__$1);
var G__62977 = null;
var G__62978 = (0);
var G__62979 = (0);
seq__62383 = G__62976;
chunk__62385 = G__62977;
count__62386 = G__62978;
i__62387 = G__62979;
continue;
} else {
var G__62980 = cljs.core.next(seq__62383__$1);
var G__62981 = null;
var G__62982 = (0);
var G__62983 = (0);
seq__62383 = G__62980;
chunk__62385 = G__62981;
count__62386 = G__62982;
i__62387 = G__62983;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.get_ua_product = (function shadow$cljs$devtools$client$browser$get_ua_product(){
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
});
shadow.cljs.devtools.client.browser.get_asset_root = (function shadow$cljs$devtools$client$browser$get_asset_root(){
var loc = (new goog.Uri(document.location.href));
var cbp = (new goog.Uri(CLOSURE_BASE_PATH));
var s = loc.resolve(cbp).toString();
return clojure.string.replace(s,/^file:\//,"file:///");
});
shadow.cljs.devtools.client.browser.repl_error = (function shadow$cljs$devtools$client$browser$repl_error(e){
console.error("repl/invoke error",e);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(shadow.cljs.devtools.client.env.repl_error(e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),shadow.cljs.devtools.client.browser.get_ua_product(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"asset-root","asset-root",1771735072),shadow.cljs.devtools.client.browser.get_asset_root()], 0));
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_invoke = (function shadow$cljs$devtools$client$browser$repl_invoke(p__62538){
var map__62539 = p__62538;
var map__62539__$1 = (((((!((map__62539 == null))))?(((((map__62539.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62539.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62539):map__62539);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62539__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62539__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var result = shadow.cljs.devtools.client.env.repl_call(((function (map__62539,map__62539__$1,id,js){
return (function (){
return shadow.cljs.devtools.client.browser.global_eval(js);
});})(map__62539,map__62539__$1,id,js))
,shadow.cljs.devtools.client.browser.repl_error);
return shadow.cljs.devtools.client.browser.ws_msg(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"id","id",-1388402092),id));
});
shadow.cljs.devtools.client.browser.repl_require = (function shadow$cljs$devtools$client$browser$repl_require(p__62554,done){
var map__62555 = p__62554;
var map__62555__$1 = (((((!((map__62555 == null))))?(((((map__62555.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62555.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62555):map__62555);
var msg = map__62555__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62555__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62555__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62555__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62555__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__62555,map__62555__$1,msg,id,sources,reload_namespaces,js_requires){
return (function (p__62563){
var map__62564 = p__62563;
var map__62564__$1 = (((((!((map__62564 == null))))?(((((map__62564.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62564.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62564):map__62564);
var src = map__62564__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62564__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4120__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4120__auto__;
}
});})(map__62555,map__62555__$1,msg,id,sources,reload_namespaces,js_requires))
,sources));
return shadow.cljs.devtools.client.browser.load_sources(sources_to_load,((function (sources_to_load,map__62555,map__62555__$1,msg,id,sources,reload_namespaces,js_requires){
return (function (sources__$1){
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-complete","repl/require-complete",-2140254719),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
}catch (e62570){var e = e62570;
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-error","repl/require-error",1689310021),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"error","error",-978969032),e.message], null));
}finally {(done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}});})(sources_to_load,map__62555,map__62555__$1,msg,id,sources,reload_namespaces,js_requires))
);
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(p__62576,done){
var map__62577 = p__62576;
var map__62577__$1 = (((((!((map__62577 == null))))?(((((map__62577.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62577.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62577):map__62577);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62577__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62577__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return shadow.cljs.devtools.client.browser.load_sources(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),((function (map__62577,map__62577__$1,repl_state,id){
return (function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","init-complete","repl/init-complete",-162252879),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));

shadow.cljs.devtools.client.browser.devtools_msg("REPL session start successful");

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
});})(map__62577,map__62577__$1,repl_state,id))
);
});
shadow.cljs.devtools.client.browser.repl_set_ns = (function shadow$cljs$devtools$client$browser$repl_set_ns(p__62585){
var map__62586 = p__62585;
var map__62586__$1 = (((((!((map__62586 == null))))?(((((map__62586.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62586.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62586):map__62586);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62586__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62586__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
});
shadow.cljs.devtools.client.browser.close_reason_ref = cljs.core.volatile_BANG_(null);
shadow.cljs.devtools.client.browser.stale_client_detected = cljs.core.volatile_BANG_(false);
shadow.cljs.devtools.client.browser.handle_message = (function shadow$cljs$devtools$client$browser$handle_message(p__62592,done){
var map__62593 = p__62592;
var map__62593__$1 = (((((!((map__62593 == null))))?(((((map__62593.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62593.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62593):map__62593);
var msg = map__62593__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62593__$1,new cljs.core.Keyword(null,"type","type",1174270348));
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

var G__62597_63152 = type;
var G__62597_63153__$1 = (((G__62597_63152 instanceof cljs.core.Keyword))?G__62597_63152.fqn:null);
switch (G__62597_63153__$1) {
case "asset-watch":
shadow.cljs.devtools.client.browser.handle_asset_watch(msg);

break;
case "repl/invoke":
shadow.cljs.devtools.client.browser.repl_invoke(msg);

break;
case "repl/require":
shadow.cljs.devtools.client.browser.repl_require(msg,done);

break;
case "repl/set-ns":
shadow.cljs.devtools.client.browser.repl_set_ns(msg);

break;
case "repl/init":
shadow.cljs.devtools.client.browser.repl_init(msg,done);

break;
case "repl/session-start":
shadow.cljs.devtools.client.browser.repl_init(msg,done);

break;
case "repl/ping":
shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","pong","repl/pong",-166610159),new cljs.core.Keyword(null,"time-server","time-server",786726561),new cljs.core.Keyword(null,"time-server","time-server",786726561).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"time-runtime","time-runtime",-40294923),Date.now()], null));

break;
case "build-complete":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

shadow.cljs.devtools.client.browser.handle_build_complete(msg);

break;
case "build-failure":
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

break;
case "build-init":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

break;
case "build-start":
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

break;
case "pong":

break;
case "client/stale":
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.stale_client_detected,true);

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,"Stale Client! You are not using the latest compilation output!");

break;
case "client/no-worker":
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.stale_client_detected,true);

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,["watch for build \"",shadow.cljs.devtools.client.env.build_id,"\" not running"].join(''));

break;
case "custom-msg":
shadow.cljs.devtools.client.env.publish_BANG_(new cljs.core.Keyword(null,"payload","payload",-383036092).cljs$core$IFn$_invoke$arity$1(msg));

break;
default:

}

if(cljs.core.contains_QMARK_(shadow.cljs.devtools.client.env.async_ops,type)){
return null;
} else {
return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}
});
shadow.cljs.devtools.client.browser.compile = (function shadow$cljs$devtools$client$browser$compile(text,callback){
return goog.net.XhrIo.send(["http",((shadow.cljs.devtools.client.env.ssl)?"s":null),"://",shadow.cljs.devtools.client.env.server_host,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_port),"/worker/compile/",shadow.cljs.devtools.client.env.build_id,"/",shadow.cljs.devtools.client.env.proc_id,"/browser"].join(''),(function (res){
var req = this;
var actions = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
if(cljs.core.truth_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(actions) : callback.call(null,actions));
} else {
return null;
}
}),"POST",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),text], null)], 0)),({"content-type": "application/edn; charset=utf-8"}));
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_status !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_status = cljs.core.volatile_BANG_(new cljs.core.Keyword(null,"init","init",-1875481434));
}
shadow.cljs.devtools.client.browser.ws_connect = (function shadow$cljs$devtools$client$browser$ws_connect(){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1((function (){var fexpr__62618 = cljs.core.deref(shadow.cljs.devtools.client.browser.ws_status);
return (fexpr__62618.cljs$core$IFn$_invoke$arity$1 ? fexpr__62618.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"init","init",-1875481434)) : fexpr__62618.call(null,new cljs.core.Keyword(null,"init","init",-1875481434)));
})())){
return (shadow.cljs.devtools.client.browser.ws_connect_impl.cljs$core$IFn$_invoke$arity$0 ? shadow.cljs.devtools.client.browser.ws_connect_impl.cljs$core$IFn$_invoke$arity$0() : shadow.cljs.devtools.client.browser.ws_connect_impl.call(null));
} else {
return null;
}
});
shadow.cljs.devtools.client.browser.maybe_reconnect = (function shadow$cljs$devtools$client$browser$maybe_reconnect(){
if(((cljs.core.not(cljs.core.deref(shadow.cljs.devtools.client.browser.stale_client_detected))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_status),new cljs.core.Keyword(null,"init","init",-1875481434))))){
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.ws_status,new cljs.core.Keyword(null,"init","init",-1875481434));

return setTimeout(shadow.cljs.devtools.client.browser.ws_connect,(3000));
} else {
return null;
}
});
shadow.cljs.devtools.client.browser.ws_connect_impl = (function shadow$cljs$devtools$client$browser$ws_connect_impl(){
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.ws_status,new cljs.core.Keyword(null,"connecting","connecting",-1347943866));

try{var print_fn = cljs.core._STAR_print_fn_STAR_;
var ws_url = shadow.cljs.devtools.client.env.ws_url(new cljs.core.Keyword(null,"browser","browser",828191719));
var socket = (new WebSocket(ws_url));
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,socket);

socket.onmessage = ((function (print_fn,ws_url,socket){
return (function (e){
return shadow.cljs.devtools.client.env.process_ws_msg(e.data,shadow.cljs.devtools.client.browser.handle_message);
});})(print_fn,ws_url,socket))
;

socket.onopen = ((function (print_fn,ws_url,socket){
return (function (e){
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.ws_status,new cljs.core.Keyword(null,"connected","connected",-169833045));

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,null);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("goog",shadow.cljs.devtools.client.env.module_format)){
goog.provide = goog.constructNamespace_;
} else {
}

shadow.cljs.devtools.client.env.set_print_fns_BANG_(shadow.cljs.devtools.client.browser.ws_msg);

return shadow.cljs.devtools.client.browser.devtools_msg("WebSocket connected!");
});})(print_fn,ws_url,socket))
;

socket.onclose = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.browser.devtools_msg("WebSocket disconnected!");

shadow.cljs.devtools.client.hud.connection_error((function (){var or__4131__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.close_reason_ref);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "Connection closed!";
}
})());

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);

shadow.cljs.devtools.client.env.reset_print_fns_BANG_();

return shadow.cljs.devtools.client.browser.maybe_reconnect();
});})(print_fn,ws_url,socket))
;

return socket.onerror = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.hud.connection_error("Connection failed!");

shadow.cljs.devtools.client.browser.maybe_reconnect();

return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("websocket error",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
});})(print_fn,ws_url,socket))
;
}catch (e62631){var e = e62631;
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("WebSocket setup failed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}});
if(shadow.cljs.devtools.client.env.enabled){
var temp__5720__auto___63248 = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5720__auto___63248)){
var s_63250 = temp__5720__auto___63248;
shadow.cljs.devtools.client.browser.devtools_msg("connection reset!");

s_63250.onclose = ((function (s_63250,temp__5720__auto___63248){
return (function (e){
return null;
});})(s_63250,temp__5720__auto___63248))
;

s_63250.close();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);
} else {
}

window.addEventListener("beforeunload",(function (){
var temp__5720__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5720__auto__)){
var s = temp__5720__auto__;
return s.close();
} else {
return null;
}
}));

if(cljs.core.truth_((function (){var and__4120__auto__ = document;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("loading",document.readyState);
} else {
return and__4120__auto__;
}
})())){
window.addEventListener("DOMContentLoaded",shadow.cljs.devtools.client.browser.ws_connect);
} else {
setTimeout(shadow.cljs.devtools.client.browser.ws_connect,(10));
}
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
