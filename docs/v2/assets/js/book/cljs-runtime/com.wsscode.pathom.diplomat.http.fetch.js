goog.provide('com.wsscode.pathom.diplomat.http.fetch');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('clojure.string');
goog.require('com.wsscode.common.async_cljs');
goog.require('com.wsscode.pathom.core');
goog.require('com.wsscode.pathom.diplomat.http');
goog.require('com.wsscode.pathom.misc');
goog.require('com.wsscode.pathom.trace');
goog.require('goog.object');
com.wsscode.pathom.diplomat.http.fetch.build_headers = (function com$wsscode$pathom$diplomat$http$fetch$build_headers(p__68105){
var map__68106 = p__68105;
var map__68106__$1 = (((((!((map__68106 == null))))?(((((map__68106.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68106.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68106):map__68106);
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68106__$1,new cljs.core.Keyword("com.wsscode.pathom.diplomat.http","headers","com.wsscode.pathom.diplomat.http/headers",-2102718913));
var content_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68106__$1,new cljs.core.Keyword("com.wsscode.pathom.diplomat.http","content-type","com.wsscode.pathom.diplomat.http/content-type",-1117530010));
var base_headers = (function (){var G__68108 = null;
if(cljs.core.truth_(content_type)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__68108,new cljs.core.Keyword(null,"content-type","content-type",-508222634),com.wsscode.pathom.diplomat.http.encode_type__GT_header(content_type));
} else {
return G__68108;
}
})();
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([base_headers,headers], 0));
});
com.wsscode.pathom.diplomat.http.fetch.build_body = (function com$wsscode$pathom$diplomat$http$fetch$build_body(p__68111){
var map__68116 = p__68111;
var map__68116__$1 = (((((!((map__68116 == null))))?(((((map__68116.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68116.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68116):map__68116);
var form_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68116__$1,new cljs.core.Keyword("com.wsscode.pathom.diplomat.http","form-params","com.wsscode.pathom.diplomat.http/form-params",1015103523));
var content_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68116__$1,new cljs.core.Keyword("com.wsscode.pathom.diplomat.http","content-type","com.wsscode.pathom.diplomat.http/content-type",-1117530010));
var G__68120 = content_type;
var G__68120__$1 = (((G__68120 instanceof cljs.core.Keyword))?G__68120.fqn:null);
switch (G__68120__$1) {
case "com.wsscode.pathom.diplomat.http/json":
return JSON.stringify(cljs.core.clj__GT_js(form_params));

break;
default:
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(form_params);

}
});
com.wsscode.pathom.diplomat.http.fetch.normalize_as = (function com$wsscode$pathom$diplomat$http$fetch$normalize_as(p__68128){
var map__68129 = p__68128;
var map__68129__$1 = (((((!((map__68129 == null))))?(((((map__68129.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68129.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68129):map__68129);
var req = map__68129__$1;
var as = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68129__$1,new cljs.core.Keyword("com.wsscode.pathom.diplomat.http","as","com.wsscode.pathom.diplomat.http/as",139380761));
var G__68137 = req;
if(cljs.core.truth_(as)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__68137,new cljs.core.Keyword("com.wsscode.pathom.diplomat.http","content-type","com.wsscode.pathom.diplomat.http/content-type",-1117530010),as,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.wsscode.pathom.diplomat.http","accept","com.wsscode.pathom.diplomat.http/accept",191085679),as], 0));
} else {
return G__68137;
}
});
com.wsscode.pathom.diplomat.http.fetch.build_request_map = (function com$wsscode$pathom$diplomat$http$fetch$build_request_map(p__68152){
var map__68160 = p__68152;
var map__68160__$1 = (((((!((map__68160 == null))))?(((((map__68160.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68160.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68160):map__68160);
var req = map__68160__$1;
var form_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68160__$1,new cljs.core.Keyword("com.wsscode.pathom.diplomat.http","form-params","com.wsscode.pathom.diplomat.http/form-params",1015103523));
var req__$1 = com.wsscode.pathom.diplomat.http.fetch.normalize_as(req);
var headers = com.wsscode.pathom.diplomat.http.fetch.build_headers(req__$1);
var G__68171 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"method","method",55703592),com.wsscode.pathom.diplomat.http.request_method(req__$1)], null);
var G__68171__$1 = (cljs.core.truth_(headers)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__68171,new cljs.core.Keyword(null,"headers","headers",-835030129),headers):G__68171);
if(cljs.core.truth_(form_params)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__68171__$1,new cljs.core.Keyword(null,"body","body",-2049205669),com.wsscode.pathom.diplomat.http.fetch.build_body(req__$1));
} else {
return G__68171__$1;
}
});
com.wsscode.pathom.diplomat.http.fetch.request_async = (function com$wsscode$pathom$diplomat$http$fetch$request_async(p__68180){
var map__68181 = p__68180;
var map__68181__$1 = (((((!((map__68181 == null))))?(((((map__68181.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68181.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68181):map__68181);
var req = map__68181__$1;
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68181__$1,new cljs.core.Keyword("com.wsscode.pathom.diplomat.http","url","com.wsscode.pathom.diplomat.http/url",1690966630));
if(cljs.spec.alpha._STAR_compile_asserts_STAR_){
if(cljs.core.truth_(cljs.core.deref(new cljs.core.Var(function(){return cljs.spec.alpha._STAR_runtime_asserts_STAR_;},new cljs.core.Symbol("cljs.spec.alpha","*runtime-asserts*","cljs.spec.alpha/*runtime-asserts*",-1060443587,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.spec.alpha","cljs.spec.alpha",505122844,null),new cljs.core.Symbol(null,"*runtime-asserts*","*runtime-asserts*",1632801956,null),"cljs/spec/alpha.cljs",20,1,true,1477,1479,cljs.core.List.EMPTY,null,((cljs.spec.alpha._STAR_runtime_asserts_STAR_)?cljs.spec.alpha._STAR_runtime_asserts_STAR_.cljs$lang$test:null)]))))){
cljs.spec.alpha.assert_STAR_(new cljs.core.Keyword("com.wsscode.pathom.diplomat.http","request","com.wsscode.pathom.diplomat.http/request",-1248699981),req);
} else {
}
} else {
}

var c__45808__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__45808__auto__,map__68181,map__68181__$1,req,url){
return (function (){
var f__45809__auto__ = (function (){var switch__45525__auto__ = ((function (c__45808__auto__,map__68181,map__68181__$1,req,url){
return (function (state_68300){
var state_val_68302 = (state_68300[(1)]);
if((state_val_68302 === (7))){
var inst_68223 = (state_68300[(2)]);
var state_68300__$1 = state_68300;
if(cljs.core.truth_(inst_68223)){
var statearr_68312_68430 = state_68300__$1;
(statearr_68312_68430[(1)] = (11));

} else {
var statearr_68313_68431 = state_68300__$1;
(statearr_68313_68431[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68302 === (20))){
var inst_68255 = (state_68300[(7)]);
var inst_68278 = (state_68300[(8)]);
var inst_68285 = [new cljs.core.Keyword(null,"status","status",-1997798413)];
var inst_68286 = [inst_68255];
var inst_68287 = cljs.core.PersistentHashMap.fromArrays(inst_68285,inst_68286);
var inst_68288 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_68278,new cljs.core.Keyword("com.wsscode.pathom.core","error","com.wsscode.pathom.core/error",1967516491),inst_68287);
var state_68300__$1 = state_68300;
var statearr_68319_68434 = state_68300__$1;
(statearr_68319_68434[(2)] = inst_68288);

(statearr_68319_68434[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68302 === (1))){
var state_68300__$1 = state_68300;
var statearr_68324_68437 = state_68300__$1;
(statearr_68324_68437[(2)] = null);

(statearr_68324_68437[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68302 === (4))){
var inst_68204 = (state_68300[(9)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_68300,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_68204__$1 = com.wsscode.pathom.diplomat.http.fetch.normalize_as(req);
var inst_68207 = (inst_68204__$1 == null);
var inst_68208 = cljs.core.not(inst_68207);
var state_68300__$1 = (function (){var statearr_68326 = state_68300;
(statearr_68326[(9)] = inst_68204__$1);

return statearr_68326;
})();
if(inst_68208){
var statearr_68327_68450 = state_68300__$1;
(statearr_68327_68450[(1)] = (5));

} else {
var statearr_68330_68451 = state_68300__$1;
(statearr_68330_68451[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68302 === (15))){
var inst_68257 = (state_68300[(10)]);
var inst_68255 = (state_68300[(7)]);
var inst_68274 = (state_68300[(2)]);
var inst_68275 = [inst_68255,inst_68274];
var inst_68276 = cljs.core.PersistentHashMap.fromArrays(inst_68257,inst_68275);
var inst_68278 = cljs.core.PersistentHashMap.EMPTY;
var inst_68279 = ((199) < inst_68255);
var inst_68280 = (inst_68255 < (300));
var inst_68281 = ((inst_68279) && (inst_68280));
var inst_68282 = cljs.core.not(inst_68281);
var state_68300__$1 = (function (){var statearr_68335 = state_68300;
(statearr_68335[(11)] = inst_68276);

(statearr_68335[(8)] = inst_68278);

return statearr_68335;
})();
if(inst_68282){
var statearr_68339_68454 = state_68300__$1;
(statearr_68339_68454[(1)] = (20));

} else {
var statearr_68341_68455 = state_68300__$1;
(statearr_68341_68455[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68302 === (21))){
var inst_68278 = (state_68300[(8)]);
var state_68300__$1 = state_68300;
var statearr_68343_68457 = state_68300__$1;
(statearr_68343_68457[(2)] = inst_68278);

(statearr_68343_68457[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68302 === (13))){
var inst_68228 = (state_68300[(2)]);
var inst_68229 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_68228,new cljs.core.Keyword("com.wsscode.pathom.diplomat.http","accept","com.wsscode.pathom.diplomat.http/accept",191085679));
var inst_68230 = com.wsscode.pathom.diplomat.http.request_method(req);
var inst_68232 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.trace","label","com.wsscode.pathom.trace/label",-1549388543),new cljs.core.Keyword("com.wsscode.pathom.diplomat.http.fetch","url","com.wsscode.pathom.diplomat.http.fetch/url",1359841746),new cljs.core.Keyword("com.wsscode.pathom.diplomat.http.fetch","method","com.wsscode.pathom.diplomat.http.fetch/method",-1027353172)];
var inst_68233 = cljs.core.name(inst_68230);
var inst_68234 = clojure.string.upper_case(inst_68233);
var inst_68235 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_68234)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)].join('');
var inst_68236 = [new cljs.core.Keyword("com.wsscode.pathom.diplomat.http.fetch","http-request","com.wsscode.pathom.diplomat.http.fetch/http-request",759217620),inst_68235,url,inst_68230];
var inst_68237 = cljs.core.PersistentHashMap.fromArrays(inst_68232,inst_68236);
var inst_68238 = com.wsscode.pathom.trace.trace_enter.cljs$core$IFn$_invoke$arity$2(req,inst_68237);
var inst_68248 = com.wsscode.pathom.diplomat.http.fetch.build_request_map(req);
var inst_68249 = cljs.core.clj__GT_js(inst_68248);
var inst_68250 = fetch(url,inst_68249);
var inst_68251 = com.wsscode.common.async_cljs.promise__GT_chan(inst_68250);
var state_68300__$1 = (function (){var statearr_68352 = state_68300;
(statearr_68352[(12)] = inst_68229);

(statearr_68352[(13)] = inst_68238);

return statearr_68352;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_68300__$1,(14),inst_68251);
} else {
if((state_val_68302 === (22))){
var inst_68276 = (state_68300[(11)]);
var inst_68238 = (state_68300[(13)]);
var inst_68291 = (state_68300[(2)]);
var inst_68292 = com.wsscode.pathom.trace.trace_leave.cljs$core$IFn$_invoke$arity$3(req,inst_68238,inst_68291);
var state_68300__$1 = (function (){var statearr_68355 = state_68300;
(statearr_68355[(14)] = inst_68292);

return statearr_68355;
})();
var statearr_68356_68465 = state_68300__$1;
(statearr_68356_68465[(2)] = inst_68276);


cljs.core.async.impl.ioc_helpers.process_exception(state_68300__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68302 === (6))){
var state_68300__$1 = state_68300;
var statearr_68359_68467 = state_68300__$1;
(statearr_68359_68467[(2)] = false);

(statearr_68359_68467[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68302 === (17))){
var inst_68262 = (state_68300[(2)]);
var inst_68263 = com.wsscode.common.async_cljs.consumer_pair(inst_68262);
var inst_68264 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(inst_68263,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var state_68300__$1 = state_68300;
var statearr_68363_68468 = state_68300__$1;
(statearr_68363_68468[(2)] = inst_68264);

(statearr_68363_68468[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68302 === (3))){
var inst_68195 = (state_68300[(2)]);
var state_68300__$1 = state_68300;
var statearr_68364_68470 = state_68300__$1;
(statearr_68364_68470[(2)] = inst_68195);


cljs.core.async.impl.ioc_helpers.process_exception(state_68300__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68302 === (12))){
var inst_68204 = (state_68300[(9)]);
var state_68300__$1 = state_68300;
var statearr_68366_68472 = state_68300__$1;
(statearr_68366_68472[(2)] = inst_68204);

(statearr_68366_68472[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68302 === (2))){
var inst_68294 = (state_68300[(2)]);
var state_68300__$1 = state_68300;
return cljs.core.async.impl.ioc_helpers.return_chan(state_68300__$1,inst_68294);
} else {
if((state_val_68302 === (19))){
var inst_68270 = (state_68300[(2)]);
var inst_68271 = com.wsscode.common.async_cljs.consumer_pair(inst_68270);
var state_68300__$1 = state_68300;
var statearr_68367_68473 = state_68300__$1;
(statearr_68367_68473[(2)] = inst_68271);

(statearr_68367_68473[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68302 === (11))){
var inst_68204 = (state_68300[(9)]);
var inst_68225 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_68204);
var state_68300__$1 = state_68300;
var statearr_68369_68474 = state_68300__$1;
(statearr_68369_68474[(2)] = inst_68225);

(statearr_68369_68474[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68302 === (9))){
var state_68300__$1 = state_68300;
var statearr_68370_68475 = state_68300__$1;
(statearr_68370_68475[(2)] = false);

(statearr_68370_68475[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68302 === (5))){
var inst_68204 = (state_68300[(9)]);
var inst_68212 = inst_68204.cljs$lang$protocol_mask$partition0$;
var inst_68213 = (inst_68212 & (64));
var inst_68214 = inst_68204.cljs$core$ISeq$;
var inst_68215 = (cljs.core.PROTOCOL_SENTINEL === inst_68214);
var inst_68216 = ((inst_68213) || (inst_68215));
var state_68300__$1 = state_68300;
if(cljs.core.truth_(inst_68216)){
var statearr_68372_68477 = state_68300__$1;
(statearr_68372_68477[(1)] = (8));

} else {
var statearr_68373_68478 = state_68300__$1;
(statearr_68373_68478[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68302 === (14))){
var inst_68254 = (state_68300[(15)]);
var inst_68229 = (state_68300[(12)]);
var inst_68253 = (state_68300[(2)]);
var inst_68254__$1 = com.wsscode.common.async_cljs.consumer_pair(inst_68253);
var inst_68255 = goog.object.get(inst_68254__$1,"status");
var inst_68257 = [new cljs.core.Keyword("com.wsscode.pathom.diplomat.http","status","com.wsscode.pathom.diplomat.http/status",-140686429),new cljs.core.Keyword("com.wsscode.pathom.diplomat.http","body","com.wsscode.pathom.diplomat.http/body",839730955)];
var state_68300__$1 = (function (){var statearr_68376 = state_68300;
(statearr_68376[(10)] = inst_68257);

(statearr_68376[(7)] = inst_68255);

(statearr_68376[(15)] = inst_68254__$1);

return statearr_68376;
})();
var G__68377_68481 = inst_68229;
var G__68377_68482__$1 = (((G__68377_68481 instanceof cljs.core.Keyword))?G__68377_68481.fqn:null);
switch (G__68377_68482__$1) {
case "com.wsscode.pathom.diplomat.http/json":
var statearr_68379_68484 = state_68300__$1;
(statearr_68379_68484[(1)] = (16));


break;
default:
var statearr_68380_68485 = state_68300__$1;
(statearr_68380_68485[(1)] = (18));



}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68302 === (16))){
var inst_68254 = (state_68300[(15)]);
var inst_68259 = inst_68254.json();
var inst_68260 = com.wsscode.common.async_cljs.promise__GT_chan(inst_68259);
var state_68300__$1 = state_68300;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_68300__$1,(17),inst_68260);
} else {
if((state_val_68302 === (10))){
var inst_68220 = (state_68300[(2)]);
var state_68300__$1 = state_68300;
var statearr_68384_68492 = state_68300__$1;
(statearr_68384_68492[(2)] = inst_68220);

(statearr_68384_68492[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68302 === (18))){
var inst_68254 = (state_68300[(15)]);
var inst_68267 = inst_68254.text();
var inst_68268 = com.wsscode.common.async_cljs.promise__GT_chan(inst_68267);
var state_68300__$1 = state_68300;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_68300__$1,(19),inst_68268);
} else {
if((state_val_68302 === (8))){
var state_68300__$1 = state_68300;
var statearr_68388_68498 = state_68300__$1;
(statearr_68388_68498[(2)] = true);

(statearr_68388_68498[(1)] = (10));


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
});})(c__45808__auto__,map__68181,map__68181__$1,req,url))
;
return ((function (switch__45525__auto__,c__45808__auto__,map__68181,map__68181__$1,req,url){
return (function() {
var com$wsscode$pathom$diplomat$http$fetch$request_async_$_state_machine__45526__auto__ = null;
var com$wsscode$pathom$diplomat$http$fetch$request_async_$_state_machine__45526__auto____0 = (function (){
var statearr_68390 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_68390[(0)] = com$wsscode$pathom$diplomat$http$fetch$request_async_$_state_machine__45526__auto__);

(statearr_68390[(1)] = (1));

return statearr_68390;
});
var com$wsscode$pathom$diplomat$http$fetch$request_async_$_state_machine__45526__auto____1 = (function (state_68300){
while(true){
var ret_value__45527__auto__ = (function (){try{while(true){
var result__45528__auto__ = switch__45525__auto__(state_68300);
if(cljs.core.keyword_identical_QMARK_(result__45528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45528__auto__;
}
break;
}
}catch (e68393){if((e68393 instanceof Object)){
var ex__45529__auto__ = e68393;
var statearr_68395_68502 = state_68300;
(statearr_68395_68502[(5)] = ex__45529__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_68300);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e68393;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__68503 = state_68300;
state_68300 = G__68503;
continue;
} else {
return ret_value__45527__auto__;
}
break;
}
});
com$wsscode$pathom$diplomat$http$fetch$request_async_$_state_machine__45526__auto__ = function(state_68300){
switch(arguments.length){
case 0:
return com$wsscode$pathom$diplomat$http$fetch$request_async_$_state_machine__45526__auto____0.call(this);
case 1:
return com$wsscode$pathom$diplomat$http$fetch$request_async_$_state_machine__45526__auto____1.call(this,state_68300);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$diplomat$http$fetch$request_async_$_state_machine__45526__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$diplomat$http$fetch$request_async_$_state_machine__45526__auto____0;
com$wsscode$pathom$diplomat$http$fetch$request_async_$_state_machine__45526__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$diplomat$http$fetch$request_async_$_state_machine__45526__auto____1;
return com$wsscode$pathom$diplomat$http$fetch$request_async_$_state_machine__45526__auto__;
})()
;})(switch__45525__auto__,c__45808__auto__,map__68181,map__68181__$1,req,url))
})();
var state__45810__auto__ = (function (){var statearr_68400 = f__45809__auto__();
(statearr_68400[(6)] = c__45808__auto__);

return statearr_68400;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45810__auto__);
});})(c__45808__auto__,map__68181,map__68181__$1,req,url))
);

return c__45808__auto__;
});
com.wsscode.pathom.trace.trace_tree_collect.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("com.wsscode.pathom.diplomat.http.fetch","http-request","com.wsscode.pathom.diplomat.http.fetch/http-request",759217620),(function (x,row){
return com.wsscode.pathom.trace.tree_assoc_detail(com.wsscode.pathom.trace.trace_style(row,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),(cljs.core.truth_(new cljs.core.Keyword("com.wsscode.pathom.core","error","com.wsscode.pathom.core/error",1967516491).cljs$core$IFn$_invoke$arity$1(row))?"#ff8181":"#73abff")], null)),x,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.diplomat.http.fetch","url","com.wsscode.pathom.diplomat.http.fetch/url",1359841746),new cljs.core.Keyword("com.wsscode.pathom.diplomat.http.fetch","method","com.wsscode.pathom.diplomat.http.fetch/method",-1027353172),new cljs.core.Keyword("com.wsscode.pathom.core","error","com.wsscode.pathom.core/error",1967516491)], null));
}));
if(com.wsscode.pathom.misc.INCLUDE_SPECS){
cljs.spec.alpha.def_impl(new cljs.core.Symbol("com.wsscode.pathom.diplomat.http.fetch","request-async","com.wsscode.pathom.diplomat.http.fetch/request-async",-1863098993,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"request","request",1772954723),new cljs.core.Keyword("com.wsscode.pathom.diplomat.http","request","com.wsscode.pathom.diplomat.http/request",-1248699981))),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"request","request",1772954723),new cljs.core.Keyword("com.wsscode.pathom.diplomat.http","request","com.wsscode.pathom.diplomat.http/request",-1248699981)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"request","request",1772954723)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.diplomat.http","request","com.wsscode.pathom.diplomat.http/request",-1248699981)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.diplomat.http","request","com.wsscode.pathom.diplomat.http/request",-1248699981)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"request","request",1772954723),new cljs.core.Keyword("com.wsscode.pathom.diplomat.http","request","com.wsscode.pathom.diplomat.http/request",-1248699981)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_,null,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),null,null,null));
} else {
}

//# sourceMappingURL=com.wsscode.pathom.diplomat.http.fetch.js.map
