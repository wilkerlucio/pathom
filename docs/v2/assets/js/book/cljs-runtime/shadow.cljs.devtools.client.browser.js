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
var len__4730__auto___58155 = arguments.length;
var i__4731__auto___58157 = (0);
while(true){
if((i__4731__auto___58157 < len__4730__auto___58155)){
args__4736__auto__.push((arguments[i__4731__auto___58157]));

var G__58159 = (i__4731__auto___58157 + (1));
i__4731__auto___58157 = G__58159;
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
shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq57682){
var G__57683 = cljs.core.first(seq57682);
var seq57682__$1 = cljs.core.next(seq57682);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__57683,seq57682__$1);
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
var seq__57684 = cljs.core.seq(sources);
var chunk__57685 = null;
var count__57686 = (0);
var i__57687 = (0);
while(true){
if((i__57687 < count__57686)){
var map__57702 = chunk__57685.cljs$core$IIndexed$_nth$arity$2(null,i__57687);
var map__57702__$1 = (((((!((map__57702 == null))))?(((((map__57702.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57702.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57702):map__57702);
var src = map__57702__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57702__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57702__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57702__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57702__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e57708){var e_58169 = e57708;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_58169);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_58169.message)].join('')));
}

var G__58171 = seq__57684;
var G__58172 = chunk__57685;
var G__58173 = count__57686;
var G__58174 = (i__57687 + (1));
seq__57684 = G__58171;
chunk__57685 = G__58172;
count__57686 = G__58173;
i__57687 = G__58174;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__57684);
if(temp__5720__auto__){
var seq__57684__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__57684__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__57684__$1);
var G__58175 = cljs.core.chunk_rest(seq__57684__$1);
var G__58176 = c__4550__auto__;
var G__58177 = cljs.core.count(c__4550__auto__);
var G__58178 = (0);
seq__57684 = G__58175;
chunk__57685 = G__58176;
count__57686 = G__58177;
i__57687 = G__58178;
continue;
} else {
var map__57711 = cljs.core.first(seq__57684__$1);
var map__57711__$1 = (((((!((map__57711 == null))))?(((((map__57711.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57711.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57711):map__57711);
var src = map__57711__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57711__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57711__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57711__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57711__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e57715){var e_58185 = e57715;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_58185);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_58185.message)].join('')));
}

var G__58187 = cljs.core.next(seq__57684__$1);
var G__58188 = null;
var G__58189 = (0);
var G__58190 = (0);
seq__57684 = G__58187;
chunk__57685 = G__58188;
count__57686 = G__58189;
i__57687 = G__58190;
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
var seq__57728 = cljs.core.seq(js_requires);
var chunk__57729 = null;
var count__57730 = (0);
var i__57731 = (0);
while(true){
if((i__57731 < count__57730)){
var js_ns = chunk__57729.cljs$core$IIndexed$_nth$arity$2(null,i__57731);
var require_str_58197 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_58197);


var G__58198 = seq__57728;
var G__58199 = chunk__57729;
var G__58200 = count__57730;
var G__58201 = (i__57731 + (1));
seq__57728 = G__58198;
chunk__57729 = G__58199;
count__57730 = G__58200;
i__57731 = G__58201;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__57728);
if(temp__5720__auto__){
var seq__57728__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__57728__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__57728__$1);
var G__58202 = cljs.core.chunk_rest(seq__57728__$1);
var G__58203 = c__4550__auto__;
var G__58204 = cljs.core.count(c__4550__auto__);
var G__58205 = (0);
seq__57728 = G__58202;
chunk__57729 = G__58203;
count__57730 = G__58204;
i__57731 = G__58205;
continue;
} else {
var js_ns = cljs.core.first(seq__57728__$1);
var require_str_58207 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_58207);


var G__58210 = cljs.core.next(seq__57728__$1);
var G__58211 = null;
var G__58212 = (0);
var G__58213 = (0);
seq__57728 = G__58210;
chunk__57729 = G__58211;
count__57730 = G__58212;
i__57731 = G__58213;
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
var G__57756 = cljs.core.PersistentVector.EMPTY;
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__57756) : callback.call(null,G__57756));
} else {
return goog.net.XhrIo.send(shadow.cljs.devtools.client.env.files_url(),(function (res){
var req = this;
var content = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(content) : callback.call(null,content));
}),"POST",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"browser","browser",828191719),new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources)], null)], 0)),({"content-type": "application/edn; charset=utf-8"}));
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(p__57769){
var map__57771 = p__57769;
var map__57771__$1 = (((((!((map__57771 == null))))?(((((map__57771.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57771.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57771):map__57771);
var msg = map__57771__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57771__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57771__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4523__auto__ = ((function (map__57771,map__57771__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__57784(s__57785){
return (new cljs.core.LazySeq(null,((function (map__57771,map__57771__$1,msg,info,reload_info){
return (function (){
var s__57785__$1 = s__57785;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__57785__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var map__57801 = cljs.core.first(xs__6277__auto__);
var map__57801__$1 = (((((!((map__57801 == null))))?(((((map__57801.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57801.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57801):map__57801);
var src = map__57801__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57801__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57801__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4519__auto__ = ((function (s__57785__$1,map__57801,map__57801__$1,src,resource_name,warnings,xs__6277__auto__,temp__5720__auto__,map__57771,map__57771__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__57784_$_iter__57786(s__57787){
return (new cljs.core.LazySeq(null,((function (s__57785__$1,map__57801,map__57801__$1,src,resource_name,warnings,xs__6277__auto__,temp__5720__auto__,map__57771,map__57771__$1,msg,info,reload_info){
return (function (){
var s__57787__$1 = s__57787;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__57787__$1);
if(temp__5720__auto____$1){
var s__57787__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__57787__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__57787__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__57789 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__57788 = (0);
while(true){
if((i__57788 < size__4522__auto__)){
var warning = cljs.core._nth(c__4521__auto__,i__57788);
cljs.core.chunk_append(b__57789,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__58235 = (i__57788 + (1));
i__57788 = G__58235;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__57789),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__57784_$_iter__57786(cljs.core.chunk_rest(s__57787__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__57789),null);
}
} else {
var warning = cljs.core.first(s__57787__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__57784_$_iter__57786(cljs.core.rest(s__57787__$2)));
}
} else {
return null;
}
break;
}
});})(s__57785__$1,map__57801,map__57801__$1,src,resource_name,warnings,xs__6277__auto__,temp__5720__auto__,map__57771,map__57771__$1,msg,info,reload_info))
,null,null));
});})(s__57785__$1,map__57801,map__57801__$1,src,resource_name,warnings,xs__6277__auto__,temp__5720__auto__,map__57771,map__57771__$1,msg,info,reload_info))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(warnings));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__57784(cljs.core.rest(s__57785__$1)));
} else {
var G__58239 = cljs.core.rest(s__57785__$1);
s__57785__$1 = G__58239;
continue;
}
} else {
var G__58240 = cljs.core.rest(s__57785__$1);
s__57785__$1 = G__58240;
continue;
}
} else {
return null;
}
break;
}
});})(map__57771,map__57771__$1,msg,info,reload_info))
,null,null));
});})(map__57771,map__57771__$1,msg,info,reload_info))
;
return iter__4523__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
var seq__57815_58242 = cljs.core.seq(warnings);
var chunk__57816_58243 = null;
var count__57817_58244 = (0);
var i__57818_58245 = (0);
while(true){
if((i__57818_58245 < count__57817_58244)){
var map__57832_58248 = chunk__57816_58243.cljs$core$IIndexed$_nth$arity$2(null,i__57818_58245);
var map__57832_58249__$1 = (((((!((map__57832_58248 == null))))?(((((map__57832_58248.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57832_58248.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57832_58248):map__57832_58248);
var w_58250 = map__57832_58249__$1;
var msg_58251__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57832_58249__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_58252 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57832_58249__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_58253 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57832_58249__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_58254 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57832_58249__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_58254)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_58252),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_58253),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_58251__$1)].join(''));


var G__58265 = seq__57815_58242;
var G__58266 = chunk__57816_58243;
var G__58267 = count__57817_58244;
var G__58268 = (i__57818_58245 + (1));
seq__57815_58242 = G__58265;
chunk__57816_58243 = G__58266;
count__57817_58244 = G__58267;
i__57818_58245 = G__58268;
continue;
} else {
var temp__5720__auto___58269 = cljs.core.seq(seq__57815_58242);
if(temp__5720__auto___58269){
var seq__57815_58271__$1 = temp__5720__auto___58269;
if(cljs.core.chunked_seq_QMARK_(seq__57815_58271__$1)){
var c__4550__auto___58272 = cljs.core.chunk_first(seq__57815_58271__$1);
var G__58273 = cljs.core.chunk_rest(seq__57815_58271__$1);
var G__58274 = c__4550__auto___58272;
var G__58275 = cljs.core.count(c__4550__auto___58272);
var G__58276 = (0);
seq__57815_58242 = G__58273;
chunk__57816_58243 = G__58274;
count__57817_58244 = G__58275;
i__57818_58245 = G__58276;
continue;
} else {
var map__57839_58281 = cljs.core.first(seq__57815_58271__$1);
var map__57839_58282__$1 = (((((!((map__57839_58281 == null))))?(((((map__57839_58281.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57839_58281.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57839_58281):map__57839_58281);
var w_58283 = map__57839_58282__$1;
var msg_58284__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57839_58282__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_58285 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57839_58282__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_58286 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57839_58282__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_58287 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57839_58282__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_58287)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_58285),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_58286),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_58284__$1)].join(''));


var G__58289 = cljs.core.next(seq__57815_58271__$1);
var G__58290 = null;
var G__58291 = (0);
var G__58292 = (0);
seq__57815_58242 = G__58289;
chunk__57816_58243 = G__58290;
count__57817_58244 = G__58291;
i__57818_58245 = G__58292;
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

return shadow.cljs.devtools.client.browser.load_sources(sources_to_get,((function (sources_to_get,warnings,map__57771,map__57771__$1,msg,info,reload_info){
return (function (p1__57767_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__57767_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
});})(sources_to_get,warnings,map__57771,map__57771__$1,msg,info,reload_info))
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
shadow.cljs.devtools.client.browser.handle_asset_watch = (function shadow$cljs$devtools$client$browser$handle_asset_watch(p__57857){
var map__57858 = p__57857;
var map__57858__$1 = (((((!((map__57858 == null))))?(((((map__57858.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57858.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57858):map__57858);
var msg = map__57858__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57858__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__57861 = cljs.core.seq(updates);
var chunk__57864 = null;
var count__57865 = (0);
var i__57866 = (0);
while(true){
if((i__57866 < count__57865)){
var path = chunk__57864.cljs$core$IIndexed$_nth$arity$2(null,i__57866);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__57931_58297 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__57934_58298 = null;
var count__57935_58299 = (0);
var i__57936_58300 = (0);
while(true){
if((i__57936_58300 < count__57935_58299)){
var node_58302 = chunk__57934_58298.cljs$core$IIndexed$_nth$arity$2(null,i__57936_58300);
var path_match_58303 = shadow.cljs.devtools.client.browser.match_paths(node_58302.getAttribute("href"),path);
if(cljs.core.truth_(path_match_58303)){
var new_link_58305 = (function (){var G__57950 = node_58302.cloneNode(true);
G__57950.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_58303),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__57950;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_58303], 0));

goog.dom.insertSiblingAfter(new_link_58305,node_58302);

goog.dom.removeNode(node_58302);


var G__58307 = seq__57931_58297;
var G__58308 = chunk__57934_58298;
var G__58309 = count__57935_58299;
var G__58310 = (i__57936_58300 + (1));
seq__57931_58297 = G__58307;
chunk__57934_58298 = G__58308;
count__57935_58299 = G__58309;
i__57936_58300 = G__58310;
continue;
} else {
var G__58311 = seq__57931_58297;
var G__58312 = chunk__57934_58298;
var G__58313 = count__57935_58299;
var G__58314 = (i__57936_58300 + (1));
seq__57931_58297 = G__58311;
chunk__57934_58298 = G__58312;
count__57935_58299 = G__58313;
i__57936_58300 = G__58314;
continue;
}
} else {
var temp__5720__auto___58315 = cljs.core.seq(seq__57931_58297);
if(temp__5720__auto___58315){
var seq__57931_58316__$1 = temp__5720__auto___58315;
if(cljs.core.chunked_seq_QMARK_(seq__57931_58316__$1)){
var c__4550__auto___58317 = cljs.core.chunk_first(seq__57931_58316__$1);
var G__58318 = cljs.core.chunk_rest(seq__57931_58316__$1);
var G__58319 = c__4550__auto___58317;
var G__58320 = cljs.core.count(c__4550__auto___58317);
var G__58321 = (0);
seq__57931_58297 = G__58318;
chunk__57934_58298 = G__58319;
count__57935_58299 = G__58320;
i__57936_58300 = G__58321;
continue;
} else {
var node_58323 = cljs.core.first(seq__57931_58316__$1);
var path_match_58324 = shadow.cljs.devtools.client.browser.match_paths(node_58323.getAttribute("href"),path);
if(cljs.core.truth_(path_match_58324)){
var new_link_58325 = (function (){var G__57952 = node_58323.cloneNode(true);
G__57952.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_58324),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__57952;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_58324], 0));

goog.dom.insertSiblingAfter(new_link_58325,node_58323);

goog.dom.removeNode(node_58323);


var G__58326 = cljs.core.next(seq__57931_58316__$1);
var G__58327 = null;
var G__58328 = (0);
var G__58329 = (0);
seq__57931_58297 = G__58326;
chunk__57934_58298 = G__58327;
count__57935_58299 = G__58328;
i__57936_58300 = G__58329;
continue;
} else {
var G__58331 = cljs.core.next(seq__57931_58316__$1);
var G__58332 = null;
var G__58333 = (0);
var G__58334 = (0);
seq__57931_58297 = G__58331;
chunk__57934_58298 = G__58332;
count__57935_58299 = G__58333;
i__57936_58300 = G__58334;
continue;
}
}
} else {
}
}
break;
}


var G__58336 = seq__57861;
var G__58337 = chunk__57864;
var G__58338 = count__57865;
var G__58339 = (i__57866 + (1));
seq__57861 = G__58336;
chunk__57864 = G__58337;
count__57865 = G__58338;
i__57866 = G__58339;
continue;
} else {
var G__58340 = seq__57861;
var G__58341 = chunk__57864;
var G__58342 = count__57865;
var G__58343 = (i__57866 + (1));
seq__57861 = G__58340;
chunk__57864 = G__58341;
count__57865 = G__58342;
i__57866 = G__58343;
continue;
}
} else {
var temp__5720__auto__ = cljs.core.seq(seq__57861);
if(temp__5720__auto__){
var seq__57861__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__57861__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__57861__$1);
var G__58344 = cljs.core.chunk_rest(seq__57861__$1);
var G__58345 = c__4550__auto__;
var G__58346 = cljs.core.count(c__4550__auto__);
var G__58347 = (0);
seq__57861 = G__58344;
chunk__57864 = G__58345;
count__57865 = G__58346;
i__57866 = G__58347;
continue;
} else {
var path = cljs.core.first(seq__57861__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__57958_58348 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__57961_58349 = null;
var count__57962_58350 = (0);
var i__57963_58351 = (0);
while(true){
if((i__57963_58351 < count__57962_58350)){
var node_58352 = chunk__57961_58349.cljs$core$IIndexed$_nth$arity$2(null,i__57963_58351);
var path_match_58353 = shadow.cljs.devtools.client.browser.match_paths(node_58352.getAttribute("href"),path);
if(cljs.core.truth_(path_match_58353)){
var new_link_58355 = (function (){var G__57975 = node_58352.cloneNode(true);
G__57975.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_58353),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__57975;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_58353], 0));

goog.dom.insertSiblingAfter(new_link_58355,node_58352);

goog.dom.removeNode(node_58352);


var G__58358 = seq__57958_58348;
var G__58359 = chunk__57961_58349;
var G__58360 = count__57962_58350;
var G__58361 = (i__57963_58351 + (1));
seq__57958_58348 = G__58358;
chunk__57961_58349 = G__58359;
count__57962_58350 = G__58360;
i__57963_58351 = G__58361;
continue;
} else {
var G__58362 = seq__57958_58348;
var G__58363 = chunk__57961_58349;
var G__58364 = count__57962_58350;
var G__58365 = (i__57963_58351 + (1));
seq__57958_58348 = G__58362;
chunk__57961_58349 = G__58363;
count__57962_58350 = G__58364;
i__57963_58351 = G__58365;
continue;
}
} else {
var temp__5720__auto___58366__$1 = cljs.core.seq(seq__57958_58348);
if(temp__5720__auto___58366__$1){
var seq__57958_58367__$1 = temp__5720__auto___58366__$1;
if(cljs.core.chunked_seq_QMARK_(seq__57958_58367__$1)){
var c__4550__auto___58368 = cljs.core.chunk_first(seq__57958_58367__$1);
var G__58369 = cljs.core.chunk_rest(seq__57958_58367__$1);
var G__58370 = c__4550__auto___58368;
var G__58371 = cljs.core.count(c__4550__auto___58368);
var G__58372 = (0);
seq__57958_58348 = G__58369;
chunk__57961_58349 = G__58370;
count__57962_58350 = G__58371;
i__57963_58351 = G__58372;
continue;
} else {
var node_58374 = cljs.core.first(seq__57958_58367__$1);
var path_match_58375 = shadow.cljs.devtools.client.browser.match_paths(node_58374.getAttribute("href"),path);
if(cljs.core.truth_(path_match_58375)){
var new_link_58376 = (function (){var G__57977 = node_58374.cloneNode(true);
G__57977.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_58375),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__57977;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_58375], 0));

goog.dom.insertSiblingAfter(new_link_58376,node_58374);

goog.dom.removeNode(node_58374);


var G__58377 = cljs.core.next(seq__57958_58367__$1);
var G__58378 = null;
var G__58379 = (0);
var G__58380 = (0);
seq__57958_58348 = G__58377;
chunk__57961_58349 = G__58378;
count__57962_58350 = G__58379;
i__57963_58351 = G__58380;
continue;
} else {
var G__58383 = cljs.core.next(seq__57958_58367__$1);
var G__58384 = null;
var G__58385 = (0);
var G__58386 = (0);
seq__57958_58348 = G__58383;
chunk__57961_58349 = G__58384;
count__57962_58350 = G__58385;
i__57963_58351 = G__58386;
continue;
}
}
} else {
}
}
break;
}


var G__58388 = cljs.core.next(seq__57861__$1);
var G__58389 = null;
var G__58390 = (0);
var G__58391 = (0);
seq__57861 = G__58388;
chunk__57864 = G__58389;
count__57865 = G__58390;
i__57866 = G__58391;
continue;
} else {
var G__58393 = cljs.core.next(seq__57861__$1);
var G__58394 = null;
var G__58395 = (0);
var G__58396 = (0);
seq__57861 = G__58393;
chunk__57864 = G__58394;
count__57865 = G__58395;
i__57866 = G__58396;
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
shadow.cljs.devtools.client.browser.repl_invoke = (function shadow$cljs$devtools$client$browser$repl_invoke(p__57986){
var map__57988 = p__57986;
var map__57988__$1 = (((((!((map__57988 == null))))?(((((map__57988.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57988.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57988):map__57988);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57988__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57988__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var result = shadow.cljs.devtools.client.env.repl_call(((function (map__57988,map__57988__$1,id,js){
return (function (){
return shadow.cljs.devtools.client.browser.global_eval(js);
});})(map__57988,map__57988__$1,id,js))
,shadow.cljs.devtools.client.browser.repl_error);
return shadow.cljs.devtools.client.browser.ws_msg(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"id","id",-1388402092),id));
});
shadow.cljs.devtools.client.browser.repl_require = (function shadow$cljs$devtools$client$browser$repl_require(p__57995,done){
var map__57996 = p__57995;
var map__57996__$1 = (((((!((map__57996 == null))))?(((((map__57996.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57996.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57996):map__57996);
var msg = map__57996__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57996__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57996__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57996__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57996__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__57996,map__57996__$1,msg,id,sources,reload_namespaces,js_requires){
return (function (p__58019){
var map__58020 = p__58019;
var map__58020__$1 = (((((!((map__58020 == null))))?(((((map__58020.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58020.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58020):map__58020);
var src = map__58020__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58020__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4120__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4120__auto__;
}
});})(map__57996,map__57996__$1,msg,id,sources,reload_namespaces,js_requires))
,sources));
return shadow.cljs.devtools.client.browser.load_sources(sources_to_load,((function (sources_to_load,map__57996,map__57996__$1,msg,id,sources,reload_namespaces,js_requires){
return (function (sources__$1){
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-complete","repl/require-complete",-2140254719),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
}catch (e58030){var e = e58030;
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-error","repl/require-error",1689310021),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"error","error",-978969032),e.message], null));
}finally {(done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}});})(sources_to_load,map__57996,map__57996__$1,msg,id,sources,reload_namespaces,js_requires))
);
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(p__58033,done){
var map__58035 = p__58033;
var map__58035__$1 = (((((!((map__58035 == null))))?(((((map__58035.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58035.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58035):map__58035);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58035__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58035__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return shadow.cljs.devtools.client.browser.load_sources(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),((function (map__58035,map__58035__$1,repl_state,id){
return (function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","init-complete","repl/init-complete",-162252879),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));

shadow.cljs.devtools.client.browser.devtools_msg("REPL session start successful");

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
});})(map__58035,map__58035__$1,repl_state,id))
);
});
shadow.cljs.devtools.client.browser.repl_set_ns = (function shadow$cljs$devtools$client$browser$repl_set_ns(p__58043){
var map__58044 = p__58043;
var map__58044__$1 = (((((!((map__58044 == null))))?(((((map__58044.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58044.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58044):map__58044);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58044__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58044__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
});
shadow.cljs.devtools.client.browser.close_reason_ref = cljs.core.volatile_BANG_(null);
shadow.cljs.devtools.client.browser.stale_client_detected = cljs.core.volatile_BANG_(false);
shadow.cljs.devtools.client.browser.handle_message = (function shadow$cljs$devtools$client$browser$handle_message(p__58058,done){
var map__58059 = p__58058;
var map__58059__$1 = (((((!((map__58059 == null))))?(((((map__58059.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58059.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58059):map__58059);
var msg = map__58059__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58059__$1,new cljs.core.Keyword(null,"type","type",1174270348));
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

var G__58068_58421 = type;
var G__58068_58422__$1 = (((G__58068_58421 instanceof cljs.core.Keyword))?G__58068_58421.fqn:null);
switch (G__58068_58422__$1) {
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
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1((function (){var fexpr__58090 = cljs.core.deref(shadow.cljs.devtools.client.browser.ws_status);
return (fexpr__58090.cljs$core$IFn$_invoke$arity$1 ? fexpr__58090.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"init","init",-1875481434)) : fexpr__58090.call(null,new cljs.core.Keyword(null,"init","init",-1875481434)));
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
}catch (e58103){var e = e58103;
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("WebSocket setup failed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}});
if(shadow.cljs.devtools.client.env.enabled){
var temp__5720__auto___58453 = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5720__auto___58453)){
var s_58454 = temp__5720__auto___58453;
shadow.cljs.devtools.client.browser.devtools_msg("connection reset!");

s_58454.onclose = ((function (s_58454,temp__5720__auto___58453){
return (function (e){
return null;
});})(s_58454,temp__5720__auto___58453))
;

s_58454.close();

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
