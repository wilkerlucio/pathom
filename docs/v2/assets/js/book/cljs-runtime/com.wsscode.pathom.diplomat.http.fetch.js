goog.provide('com.wsscode.pathom.diplomat.http.fetch');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('clojure.string');
goog.require('com.wsscode.async.async_cljs');
goog.require('com.wsscode.pathom.core');
goog.require('com.wsscode.pathom.diplomat.http');
goog.require('com.wsscode.pathom.misc');
goog.require('com.wsscode.pathom.trace');
goog.require('goog.object');
com.wsscode.pathom.diplomat.http.fetch.build_headers = (function com$wsscode$pathom$diplomat$http$fetch$build_headers(p__59169){
var map__59170 = p__59169;
var map__59170__$1 = (((((!((map__59170 == null))))?(((((map__59170.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59170.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59170):map__59170);
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59170__$1,new cljs.core.Keyword("com.wsscode.pathom.diplomat.http","headers","com.wsscode.pathom.diplomat.http/headers",-2102718913));
var content_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59170__$1,new cljs.core.Keyword("com.wsscode.pathom.diplomat.http","content-type","com.wsscode.pathom.diplomat.http/content-type",-1117530010));
var base_headers = (function (){var G__59173 = null;
if(cljs.core.truth_(content_type)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59173,new cljs.core.Keyword(null,"content-type","content-type",-508222634),com.wsscode.pathom.diplomat.http.encode_type__GT_header(content_type));
} else {
return G__59173;
}
})();
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([base_headers,headers], 0));
});
com.wsscode.pathom.diplomat.http.fetch.build_body = (function com$wsscode$pathom$diplomat$http$fetch$build_body(p__59174){
var map__59176 = p__59174;
var map__59176__$1 = (((((!((map__59176 == null))))?(((((map__59176.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59176.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59176):map__59176);
var form_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59176__$1,new cljs.core.Keyword("com.wsscode.pathom.diplomat.http","form-params","com.wsscode.pathom.diplomat.http/form-params",1015103523));
var content_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59176__$1,new cljs.core.Keyword("com.wsscode.pathom.diplomat.http","content-type","com.wsscode.pathom.diplomat.http/content-type",-1117530010));
var G__59180 = content_type;
var G__59180__$1 = (((G__59180 instanceof cljs.core.Keyword))?G__59180.fqn:null);
switch (G__59180__$1) {
case "com.wsscode.pathom.diplomat.http/json":
return JSON.stringify(cljs.core.clj__GT_js(form_params));

break;
default:
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(form_params);

}
});
com.wsscode.pathom.diplomat.http.fetch.normalize_as = (function com$wsscode$pathom$diplomat$http$fetch$normalize_as(p__59185){
var map__59186 = p__59185;
var map__59186__$1 = (((((!((map__59186 == null))))?(((((map__59186.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59186.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59186):map__59186);
var req = map__59186__$1;
var as = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59186__$1,new cljs.core.Keyword("com.wsscode.pathom.diplomat.http","as","com.wsscode.pathom.diplomat.http/as",139380761));
var G__59201 = req;
if(cljs.core.truth_(as)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__59201,new cljs.core.Keyword("com.wsscode.pathom.diplomat.http","content-type","com.wsscode.pathom.diplomat.http/content-type",-1117530010),as,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.wsscode.pathom.diplomat.http","accept","com.wsscode.pathom.diplomat.http/accept",191085679),as], 0));
} else {
return G__59201;
}
});
com.wsscode.pathom.diplomat.http.fetch.build_request_map = (function com$wsscode$pathom$diplomat$http$fetch$build_request_map(p__59228){
var map__59229 = p__59228;
var map__59229__$1 = (((((!((map__59229 == null))))?(((((map__59229.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59229.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59229):map__59229);
var req = map__59229__$1;
var form_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59229__$1,new cljs.core.Keyword("com.wsscode.pathom.diplomat.http","form-params","com.wsscode.pathom.diplomat.http/form-params",1015103523));
var req__$1 = com.wsscode.pathom.diplomat.http.fetch.normalize_as(req);
var headers = com.wsscode.pathom.diplomat.http.fetch.build_headers(req__$1);
var G__59240 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"method","method",55703592),com.wsscode.pathom.diplomat.http.request_method(req__$1)], null);
var G__59240__$1 = (cljs.core.truth_(headers)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59240,new cljs.core.Keyword(null,"headers","headers",-835030129),headers):G__59240);
if(cljs.core.truth_(form_params)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59240__$1,new cljs.core.Keyword(null,"body","body",-2049205669),com.wsscode.pathom.diplomat.http.fetch.build_body(req__$1));
} else {
return G__59240__$1;
}
});
com.wsscode.pathom.diplomat.http.fetch.request_async = (function com$wsscode$pathom$diplomat$http$fetch$request_async(p__59250){
var map__59253 = p__59250;
var map__59253__$1 = (((((!((map__59253 == null))))?(((((map__59253.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59253.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59253):map__59253);
var req = map__59253__$1;
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59253__$1,new cljs.core.Keyword("com.wsscode.pathom.diplomat.http","url","com.wsscode.pathom.diplomat.http/url",1690966630));
if(cljs.spec.alpha._STAR_compile_asserts_STAR_){
if(cljs.core.truth_(cljs.core.deref(new cljs.core.Var(function(){return cljs.spec.alpha._STAR_runtime_asserts_STAR_;},new cljs.core.Symbol("cljs.spec.alpha","*runtime-asserts*","cljs.spec.alpha/*runtime-asserts*",-1060443587,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.spec.alpha","cljs.spec.alpha",505122844,null),new cljs.core.Symbol(null,"*runtime-asserts*","*runtime-asserts*",1632801956,null),"cljs/spec/alpha.cljs",(20),(1),true,(1477),(1479),cljs.core.List.EMPTY,null,((cljs.spec.alpha._STAR_runtime_asserts_STAR_)?cljs.spec.alpha._STAR_runtime_asserts_STAR_.cljs$lang$test:null)]))))){
cljs.spec.alpha.assert_STAR_(new cljs.core.Keyword("com.wsscode.pathom.diplomat.http","request","com.wsscode.pathom.diplomat.http/request",-1248699981),req);
} else {
}
} else {
}

var c__48839__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__48839__auto__,map__59253,map__59253__$1,req,url){
return (function (){
var f__48840__auto__ = (function (){var switch__48139__auto__ = ((function (c__48839__auto__,map__59253,map__59253__$1,req,url){
return (function (state_59390){
var state_val_59392 = (state_59390[(1)]);
if((state_val_59392 === (7))){
var state_59390__$1 = state_59390;
var statearr_59406_59555 = state_59390__$1;
(statearr_59406_59555[(2)] = false);

(statearr_59406_59555[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59392 === (20))){
var inst_59354 = (state_59390[(2)]);
var inst_59355 = com.wsscode.async.async_cljs.consumer_pair(inst_59354);
var state_59390__$1 = state_59390;
var statearr_59410_59556 = state_59390__$1;
(statearr_59410_59556[(2)] = inst_59355);

(statearr_59410_59556[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59392 === (1))){
var state_59390__$1 = state_59390;
var statearr_59416_59558 = state_59390__$1;
(statearr_59416_59558[(2)] = null);

(statearr_59416_59558[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59392 === (4))){
var inst_59279 = (state_59390[(2)]);
var state_59390__$1 = state_59390;
var statearr_59420_59559 = state_59390__$1;
(statearr_59420_59559[(2)] = inst_59279);

(statearr_59420_59559[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59392 === (15))){
var inst_59320 = (state_59390[(7)]);
var inst_59337 = (state_59390[(8)]);
var inst_59336 = (state_59390[(2)]);
var inst_59337__$1 = com.wsscode.async.async_cljs.consumer_pair(inst_59336);
var inst_59338 = goog.object.get(inst_59337__$1,"status");
var inst_59339 = [new cljs.core.Keyword("com.wsscode.pathom.diplomat.http","status","com.wsscode.pathom.diplomat.http/status",-140686429),new cljs.core.Keyword("com.wsscode.pathom.diplomat.http","body","com.wsscode.pathom.diplomat.http/body",839730955)];
var state_59390__$1 = (function (){var statearr_59424 = state_59390;
(statearr_59424[(9)] = inst_59339);

(statearr_59424[(10)] = inst_59338);

(statearr_59424[(8)] = inst_59337__$1);

return statearr_59424;
})();
var G__59428_59560 = inst_59320;
var G__59428_59561__$1 = (((G__59428_59560 instanceof cljs.core.Keyword))?G__59428_59560.fqn:null);
switch (G__59428_59561__$1) {
case "com.wsscode.pathom.diplomat.http/json":
var statearr_59431_59564 = state_59390__$1;
(statearr_59431_59564[(1)] = (17));


break;
default:
var statearr_59434_59565 = state_59390__$1;
(statearr_59434_59565[(1)] = (19));



}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59392 === (21))){
var inst_59364 = (state_59390[(11)]);
var inst_59338 = (state_59390[(10)]);
var inst_59372 = [new cljs.core.Keyword(null,"status","status",-1997798413)];
var inst_59373 = [inst_59338];
var inst_59374 = cljs.core.PersistentHashMap.fromArrays(inst_59372,inst_59373);
var inst_59375 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_59364,new cljs.core.Keyword("com.wsscode.pathom.core","error","com.wsscode.pathom.core/error",1967516491),inst_59374);
var state_59390__$1 = state_59390;
var statearr_59440_59577 = state_59390__$1;
(statearr_59440_59577[(2)] = inst_59375);

(statearr_59440_59577[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59392 === (13))){
var inst_59290 = (state_59390[(12)]);
var state_59390__$1 = state_59390;
var statearr_59442_59579 = state_59390__$1;
(statearr_59442_59579[(2)] = inst_59290);

(statearr_59442_59579[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59392 === (22))){
var inst_59364 = (state_59390[(11)]);
var state_59390__$1 = state_59390;
var statearr_59446_59582 = state_59390__$1;
(statearr_59446_59582[(2)] = inst_59364);

(statearr_59446_59582[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59392 === (6))){
var inst_59290 = (state_59390[(12)]);
var inst_59299 = inst_59290.cljs$lang$protocol_mask$partition0$;
var inst_59300 = (inst_59299 & (64));
var inst_59304 = inst_59290.cljs$core$ISeq$;
var inst_59305 = (cljs.core.PROTOCOL_SENTINEL === inst_59304);
var inst_59306 = ((inst_59300) || (inst_59305));
var state_59390__$1 = state_59390;
if(cljs.core.truth_(inst_59306)){
var statearr_59453_59586 = state_59390__$1;
(statearr_59453_59586[(1)] = (9));

} else {
var statearr_59454_59587 = state_59390__$1;
(statearr_59454_59587[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59392 === (17))){
var inst_59337 = (state_59390[(8)]);
var inst_59342 = inst_59337.json();
var inst_59344 = com.wsscode.async.async_cljs.promise__GT_chan(inst_59342);
var state_59390__$1 = state_59390;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59390__$1,(18),inst_59344);
} else {
if((state_val_59392 === (3))){
var inst_59383 = (state_59390[(2)]);
var state_59390__$1 = state_59390;
return cljs.core.async.impl.ioc_helpers.return_chan(state_59390__$1,inst_59383);
} else {
if((state_val_59392 === (12))){
var inst_59290 = (state_59390[(12)]);
var inst_59315 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_59290);
var state_59390__$1 = state_59390;
var statearr_59458_59592 = state_59390__$1;
(statearr_59458_59592[(2)] = inst_59315);

(statearr_59458_59592[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59392 === (2))){
var inst_59290 = (state_59390[(12)]);
var _ = (function (){var statearr_59460 = state_59390;
(statearr_59460[(4)] = cljs.core.cons((5),(state_59390[(4)])));

return statearr_59460;
})();
var inst_59290__$1 = com.wsscode.pathom.diplomat.http.fetch.normalize_as(req);
var inst_59293 = (inst_59290__$1 == null);
var inst_59294 = cljs.core.not(inst_59293);
var state_59390__$1 = (function (){var statearr_59463 = state_59390;
(statearr_59463[(12)] = inst_59290__$1);

return statearr_59463;
})();
if(inst_59294){
var statearr_59464_59594 = state_59390__$1;
(statearr_59464_59594[(1)] = (6));

} else {
var statearr_59465_59595 = state_59390__$1;
(statearr_59465_59595[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59392 === (23))){
var inst_59329 = (state_59390[(13)]);
var inst_59360 = (state_59390[(14)]);
var inst_59378 = (state_59390[(2)]);
var inst_59379 = com.wsscode.pathom.trace.trace_leave.cljs$core$IFn$_invoke$arity$3(req,inst_59329,inst_59378);
var _ = (function (){var statearr_59466 = state_59390;
(statearr_59466[(4)] = cljs.core.rest((state_59390[(4)])));

return statearr_59466;
})();
var state_59390__$1 = (function (){var statearr_59467 = state_59390;
(statearr_59467[(15)] = inst_59379);

return statearr_59467;
})();
var statearr_59468_59599 = state_59390__$1;
(statearr_59468_59599[(2)] = inst_59360);

(statearr_59468_59599[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59392 === (19))){
var inst_59337 = (state_59390[(8)]);
var inst_59351 = inst_59337.text();
var inst_59352 = com.wsscode.async.async_cljs.promise__GT_chan(inst_59351);
var state_59390__$1 = state_59390;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59390__$1,(20),inst_59352);
} else {
if((state_val_59392 === (11))){
var inst_59310 = (state_59390[(2)]);
var state_59390__$1 = state_59390;
var statearr_59471_59601 = state_59390__$1;
(statearr_59471_59601[(2)] = inst_59310);

(statearr_59471_59601[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59392 === (9))){
var state_59390__$1 = state_59390;
var statearr_59472_59602 = state_59390__$1;
(statearr_59472_59602[(2)] = true);

(statearr_59472_59602[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59392 === (5))){
var _ = (function (){var statearr_59477 = state_59390;
(statearr_59477[(4)] = cljs.core.rest((state_59390[(4)])));

return statearr_59477;
})();
var state_59390__$1 = state_59390;
var ex59470 = (state_59390__$1[(2)]);
var statearr_59481_59605 = state_59390__$1;
(statearr_59481_59605[(5)] = ex59470);


var statearr_59485_59606 = state_59390__$1;
(statearr_59485_59606[(1)] = (4));

(statearr_59485_59606[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59392 === (14))){
var inst_59319 = (state_59390[(2)]);
var inst_59320 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_59319,new cljs.core.Keyword("com.wsscode.pathom.diplomat.http","accept","com.wsscode.pathom.diplomat.http/accept",191085679));
var inst_59321 = com.wsscode.pathom.diplomat.http.request_method(req);
var inst_59322 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.trace","label","com.wsscode.pathom.trace/label",-1549388543),new cljs.core.Keyword("com.wsscode.pathom.diplomat.http.fetch","url","com.wsscode.pathom.diplomat.http.fetch/url",1359841746),new cljs.core.Keyword("com.wsscode.pathom.diplomat.http.fetch","method","com.wsscode.pathom.diplomat.http.fetch/method",-1027353172)];
var inst_59324 = cljs.core.name(inst_59321);
var inst_59325 = clojure.string.upper_case(inst_59324);
var inst_59326 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_59325)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)].join('');
var inst_59327 = [new cljs.core.Keyword("com.wsscode.pathom.diplomat.http.fetch","http-request","com.wsscode.pathom.diplomat.http.fetch/http-request",759217620),inst_59326,url,inst_59321];
var inst_59328 = cljs.core.PersistentHashMap.fromArrays(inst_59322,inst_59327);
var inst_59329 = com.wsscode.pathom.trace.trace_enter.cljs$core$IFn$_invoke$arity$2(req,inst_59328);
var inst_59331 = com.wsscode.pathom.diplomat.http.fetch.build_request_map(req);
var inst_59332 = cljs.core.clj__GT_js(inst_59331);
var inst_59333 = fetch(url,inst_59332);
var inst_59334 = com.wsscode.async.async_cljs.promise__GT_chan(inst_59333);
var state_59390__$1 = (function (){var statearr_59492 = state_59390;
(statearr_59492[(13)] = inst_59329);

(statearr_59492[(7)] = inst_59320);

return statearr_59492;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59390__$1,(15),inst_59334);
} else {
if((state_val_59392 === (16))){
var inst_59339 = (state_59390[(9)]);
var inst_59338 = (state_59390[(10)]);
var inst_59358 = (state_59390[(2)]);
var inst_59359 = [inst_59338,inst_59358];
var inst_59360 = cljs.core.PersistentHashMap.fromArrays(inst_59339,inst_59359);
var inst_59364 = cljs.core.PersistentHashMap.EMPTY;
var inst_59365 = ((199) < inst_59338);
var inst_59366 = (inst_59338 < (300));
var inst_59367 = ((inst_59365) && (inst_59366));
var inst_59368 = cljs.core.not(inst_59367);
var state_59390__$1 = (function (){var statearr_59496 = state_59390;
(statearr_59496[(11)] = inst_59364);

(statearr_59496[(14)] = inst_59360);

return statearr_59496;
})();
if(inst_59368){
var statearr_59498_59613 = state_59390__$1;
(statearr_59498_59613[(1)] = (21));

} else {
var statearr_59501_59614 = state_59390__$1;
(statearr_59501_59614[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59392 === (10))){
var state_59390__$1 = state_59390;
var statearr_59504_59615 = state_59390__$1;
(statearr_59504_59615[(2)] = false);

(statearr_59504_59615[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59392 === (18))){
var inst_59346 = (state_59390[(2)]);
var inst_59347 = com.wsscode.async.async_cljs.consumer_pair(inst_59346);
var inst_59348 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(inst_59347,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var state_59390__$1 = state_59390;
var statearr_59506_59618 = state_59390__$1;
(statearr_59506_59618[(2)] = inst_59348);

(statearr_59506_59618[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59392 === (8))){
var inst_59313 = (state_59390[(2)]);
var state_59390__$1 = state_59390;
if(cljs.core.truth_(inst_59313)){
var statearr_59510_59620 = state_59390__$1;
(statearr_59510_59620[(1)] = (12));

} else {
var statearr_59511_59621 = state_59390__$1;
(statearr_59511_59621[(1)] = (13));

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
});})(c__48839__auto__,map__59253,map__59253__$1,req,url))
;
return ((function (switch__48139__auto__,c__48839__auto__,map__59253,map__59253__$1,req,url){
return (function() {
var com$wsscode$pathom$diplomat$http$fetch$request_async_$_state_machine__48140__auto__ = null;
var com$wsscode$pathom$diplomat$http$fetch$request_async_$_state_machine__48140__auto____0 = (function (){
var statearr_59518 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_59518[(0)] = com$wsscode$pathom$diplomat$http$fetch$request_async_$_state_machine__48140__auto__);

(statearr_59518[(1)] = (1));

return statearr_59518;
});
var com$wsscode$pathom$diplomat$http$fetch$request_async_$_state_machine__48140__auto____1 = (function (state_59390){
while(true){
var ret_value__48141__auto__ = (function (){try{while(true){
var result__48142__auto__ = switch__48139__auto__(state_59390);
if(cljs.core.keyword_identical_QMARK_(result__48142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48142__auto__;
}
break;
}
}catch (e59520){var ex__48143__auto__ = e59520;
var statearr_59521_59622 = state_59390;
(statearr_59521_59622[(2)] = ex__48143__auto__);


if(cljs.core.seq((state_59390[(4)]))){
var statearr_59523_59623 = state_59390;
(statearr_59523_59623[(1)] = cljs.core.first((state_59390[(4)])));

} else {
throw ex__48143__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48141__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59624 = state_59390;
state_59390 = G__59624;
continue;
} else {
return ret_value__48141__auto__;
}
break;
}
});
com$wsscode$pathom$diplomat$http$fetch$request_async_$_state_machine__48140__auto__ = function(state_59390){
switch(arguments.length){
case 0:
return com$wsscode$pathom$diplomat$http$fetch$request_async_$_state_machine__48140__auto____0.call(this);
case 1:
return com$wsscode$pathom$diplomat$http$fetch$request_async_$_state_machine__48140__auto____1.call(this,state_59390);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$diplomat$http$fetch$request_async_$_state_machine__48140__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$diplomat$http$fetch$request_async_$_state_machine__48140__auto____0;
com$wsscode$pathom$diplomat$http$fetch$request_async_$_state_machine__48140__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$diplomat$http$fetch$request_async_$_state_machine__48140__auto____1;
return com$wsscode$pathom$diplomat$http$fetch$request_async_$_state_machine__48140__auto__;
})()
;})(switch__48139__auto__,c__48839__auto__,map__59253,map__59253__$1,req,url))
})();
var state__48841__auto__ = (function (){var statearr_59526 = f__48840__auto__();
(statearr_59526[(6)] = c__48839__auto__);

return statearr_59526;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48841__auto__);
});})(c__48839__auto__,map__59253,map__59253__$1,req,url))
);

return c__48839__auto__;
});
com.wsscode.pathom.trace.trace_tree_collect.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("com.wsscode.pathom.diplomat.http.fetch","http-request","com.wsscode.pathom.diplomat.http.fetch/http-request",759217620),(function (x,row){
return com.wsscode.pathom.trace.tree_assoc_detail(com.wsscode.pathom.trace.trace_style(row,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),(cljs.core.truth_(new cljs.core.Keyword("com.wsscode.pathom.core","error","com.wsscode.pathom.core/error",1967516491).cljs$core$IFn$_invoke$arity$1(row))?"#ff8181":"#73abff")], null)),x,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.diplomat.http.fetch","url","com.wsscode.pathom.diplomat.http.fetch/url",1359841746),new cljs.core.Keyword("com.wsscode.pathom.diplomat.http.fetch","method","com.wsscode.pathom.diplomat.http.fetch/method",-1027353172),new cljs.core.Keyword("com.wsscode.pathom.core","error","com.wsscode.pathom.core/error",1967516491)], null));
}));
if(com.wsscode.pathom.misc.INCLUDE_SPECS){
cljs.spec.alpha.def_impl(new cljs.core.Symbol("com.wsscode.pathom.diplomat.http.fetch","request-async","com.wsscode.pathom.diplomat.http.fetch/request-async",-1863098993,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"request","request",1772954723),new cljs.core.Keyword("com.wsscode.pathom.diplomat.http","request","com.wsscode.pathom.diplomat.http/request",-1248699981))),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"request","request",1772954723),new cljs.core.Keyword("com.wsscode.pathom.diplomat.http","request","com.wsscode.pathom.diplomat.http/request",-1248699981)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"request","request",1772954723)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.diplomat.http","request","com.wsscode.pathom.diplomat.http/request",-1248699981)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.diplomat.http","request","com.wsscode.pathom.diplomat.http/request",-1248699981)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"request","request",1772954723),new cljs.core.Keyword("com.wsscode.pathom.diplomat.http","request","com.wsscode.pathom.diplomat.http/request",-1248699981)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_,null,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),null,null,null));
} else {
}

//# sourceMappingURL=com.wsscode.pathom.diplomat.http.fetch.js.map
