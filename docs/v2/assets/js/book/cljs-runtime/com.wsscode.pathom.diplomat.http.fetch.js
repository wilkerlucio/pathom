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
com.wsscode.pathom.diplomat.http.fetch.build_headers = (function com$wsscode$pathom$diplomat$http$fetch$build_headers(p__55354){
var map__55355 = p__55354;
var map__55355__$1 = (((((!((map__55355 == null))))?(((((map__55355.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55355.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55355):map__55355);
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55355__$1,new cljs.core.Keyword("com.wsscode.pathom.diplomat.http","headers","com.wsscode.pathom.diplomat.http/headers",-2102718913));
var content_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55355__$1,new cljs.core.Keyword("com.wsscode.pathom.diplomat.http","content-type","com.wsscode.pathom.diplomat.http/content-type",-1117530010));
var base_headers = (function (){var G__55359 = null;
if(cljs.core.truth_(content_type)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__55359,new cljs.core.Keyword(null,"content-type","content-type",-508222634),com.wsscode.pathom.diplomat.http.encode_type__GT_header(content_type));
} else {
return G__55359;
}
})();
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([base_headers,headers], 0));
});
com.wsscode.pathom.diplomat.http.fetch.build_body = (function com$wsscode$pathom$diplomat$http$fetch$build_body(p__55365){
var map__55366 = p__55365;
var map__55366__$1 = (((((!((map__55366 == null))))?(((((map__55366.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55366.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55366):map__55366);
var form_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55366__$1,new cljs.core.Keyword("com.wsscode.pathom.diplomat.http","form-params","com.wsscode.pathom.diplomat.http/form-params",1015103523));
var content_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55366__$1,new cljs.core.Keyword("com.wsscode.pathom.diplomat.http","content-type","com.wsscode.pathom.diplomat.http/content-type",-1117530010));
var G__55375 = content_type;
var G__55375__$1 = (((G__55375 instanceof cljs.core.Keyword))?G__55375.fqn:null);
switch (G__55375__$1) {
case "com.wsscode.pathom.diplomat.http/json":
return JSON.stringify(cljs.core.clj__GT_js(form_params));

break;
default:
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(form_params);

}
});
com.wsscode.pathom.diplomat.http.fetch.normalize_as = (function com$wsscode$pathom$diplomat$http$fetch$normalize_as(p__55397){
var map__55404 = p__55397;
var map__55404__$1 = (((((!((map__55404 == null))))?(((((map__55404.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55404.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55404):map__55404);
var req = map__55404__$1;
var as = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55404__$1,new cljs.core.Keyword("com.wsscode.pathom.diplomat.http","as","com.wsscode.pathom.diplomat.http/as",139380761));
var G__55414 = req;
if(cljs.core.truth_(as)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__55414,new cljs.core.Keyword("com.wsscode.pathom.diplomat.http","content-type","com.wsscode.pathom.diplomat.http/content-type",-1117530010),as,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.wsscode.pathom.diplomat.http","accept","com.wsscode.pathom.diplomat.http/accept",191085679),as], 0));
} else {
return G__55414;
}
});
com.wsscode.pathom.diplomat.http.fetch.build_request_map = (function com$wsscode$pathom$diplomat$http$fetch$build_request_map(p__55422){
var map__55423 = p__55422;
var map__55423__$1 = (((((!((map__55423 == null))))?(((((map__55423.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55423.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55423):map__55423);
var req = map__55423__$1;
var form_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55423__$1,new cljs.core.Keyword("com.wsscode.pathom.diplomat.http","form-params","com.wsscode.pathom.diplomat.http/form-params",1015103523));
var req__$1 = com.wsscode.pathom.diplomat.http.fetch.normalize_as(req);
var headers = com.wsscode.pathom.diplomat.http.fetch.build_headers(req__$1);
var G__55434 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"method","method",55703592),com.wsscode.pathom.diplomat.http.request_method(req__$1)], null);
var G__55434__$1 = (cljs.core.truth_(headers)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__55434,new cljs.core.Keyword(null,"headers","headers",-835030129),headers):G__55434);
if(cljs.core.truth_(form_params)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__55434__$1,new cljs.core.Keyword(null,"body","body",-2049205669),com.wsscode.pathom.diplomat.http.fetch.build_body(req__$1));
} else {
return G__55434__$1;
}
});
com.wsscode.pathom.diplomat.http.fetch.request_async = (function com$wsscode$pathom$diplomat$http$fetch$request_async(p__55456){
var map__55457 = p__55456;
var map__55457__$1 = (((((!((map__55457 == null))))?(((((map__55457.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55457.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55457):map__55457);
var req = map__55457__$1;
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55457__$1,new cljs.core.Keyword("com.wsscode.pathom.diplomat.http","url","com.wsscode.pathom.diplomat.http/url",1690966630));
if(cljs.spec.alpha._STAR_compile_asserts_STAR_){
if(cljs.core.truth_(cljs.core.deref(new cljs.core.Var(function(){return cljs.spec.alpha._STAR_runtime_asserts_STAR_;},new cljs.core.Symbol("cljs.spec.alpha","*runtime-asserts*","cljs.spec.alpha/*runtime-asserts*",-1060443587,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.spec.alpha","cljs.spec.alpha",505122844,null),new cljs.core.Symbol(null,"*runtime-asserts*","*runtime-asserts*",1632801956,null),"cljs/spec/alpha.cljs",(20),(1),true,(1477),(1479),cljs.core.List.EMPTY,null,((cljs.spec.alpha._STAR_runtime_asserts_STAR_)?cljs.spec.alpha._STAR_runtime_asserts_STAR_.cljs$lang$test:null)]))))){
cljs.spec.alpha.assert_STAR_(new cljs.core.Keyword("com.wsscode.pathom.diplomat.http","request","com.wsscode.pathom.diplomat.http/request",-1248699981),req);
} else {
}
} else {
}

var c__47946__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__47946__auto__,map__55457,map__55457__$1,req,url){
return (function (){
var f__47947__auto__ = (function (){var switch__47663__auto__ = ((function (c__47946__auto__,map__55457,map__55457__$1,req,url){
return (function (state_55596){
var state_val_55597 = (state_55596[(1)]);
if((state_val_55597 === (7))){
var inst_55501 = (state_55596[(2)]);
var state_55596__$1 = state_55596;
if(cljs.core.truth_(inst_55501)){
var statearr_55598_55697 = state_55596__$1;
(statearr_55598_55697[(1)] = (11));

} else {
var statearr_55599_55699 = state_55596__$1;
(statearr_55599_55699[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55597 === (20))){
var inst_55532 = (state_55596[(7)]);
var inst_55558 = (state_55596[(8)]);
var inst_55574 = [new cljs.core.Keyword(null,"status","status",-1997798413)];
var inst_55577 = [inst_55532];
var inst_55578 = cljs.core.PersistentHashMap.fromArrays(inst_55574,inst_55577);
var inst_55579 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_55558,new cljs.core.Keyword("com.wsscode.pathom.core","error","com.wsscode.pathom.core/error",1967516491),inst_55578);
var state_55596__$1 = state_55596;
var statearr_55601_55704 = state_55596__$1;
(statearr_55601_55704[(2)] = inst_55579);

(statearr_55601_55704[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55597 === (1))){
var state_55596__$1 = state_55596;
var statearr_55605_55709 = state_55596__$1;
(statearr_55605_55709[(2)] = null);

(statearr_55605_55709[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55597 === (4))){
var inst_55482 = (state_55596[(9)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_55596,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_55482__$1 = com.wsscode.pathom.diplomat.http.fetch.normalize_as(req);
var inst_55484 = (inst_55482__$1 == null);
var inst_55485 = cljs.core.not(inst_55484);
var state_55596__$1 = (function (){var statearr_55608 = state_55596;
(statearr_55608[(9)] = inst_55482__$1);

return statearr_55608;
})();
if(inst_55485){
var statearr_55609_55712 = state_55596__$1;
(statearr_55609_55712[(1)] = (5));

} else {
var statearr_55610_55713 = state_55596__$1;
(statearr_55610_55713[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55597 === (15))){
var inst_55532 = (state_55596[(7)]);
var inst_55533 = (state_55596[(10)]);
var inst_55553 = (state_55596[(2)]);
var inst_55554 = [inst_55532,inst_55553];
var inst_55555 = cljs.core.PersistentHashMap.fromArrays(inst_55533,inst_55554);
var inst_55558 = cljs.core.PersistentHashMap.EMPTY;
var inst_55562 = ((199) < inst_55532);
var inst_55566 = (inst_55532 < (300));
var inst_55567 = ((inst_55562) && (inst_55566));
var inst_55568 = cljs.core.not(inst_55567);
var state_55596__$1 = (function (){var statearr_55611 = state_55596;
(statearr_55611[(8)] = inst_55558);

(statearr_55611[(11)] = inst_55555);

return statearr_55611;
})();
if(inst_55568){
var statearr_55612_55721 = state_55596__$1;
(statearr_55612_55721[(1)] = (20));

} else {
var statearr_55614_55722 = state_55596__$1;
(statearr_55614_55722[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55597 === (21))){
var inst_55558 = (state_55596[(8)]);
var state_55596__$1 = state_55596;
var statearr_55615_55723 = state_55596__$1;
(statearr_55615_55723[(2)] = inst_55558);

(statearr_55615_55723[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55597 === (13))){
var inst_55506 = (state_55596[(2)]);
var inst_55507 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_55506,new cljs.core.Keyword("com.wsscode.pathom.diplomat.http","accept","com.wsscode.pathom.diplomat.http/accept",191085679));
var inst_55508 = com.wsscode.pathom.diplomat.http.request_method(req);
var inst_55509 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.trace","label","com.wsscode.pathom.trace/label",-1549388543),new cljs.core.Keyword("com.wsscode.pathom.diplomat.http.fetch","url","com.wsscode.pathom.diplomat.http.fetch/url",1359841746),new cljs.core.Keyword("com.wsscode.pathom.diplomat.http.fetch","method","com.wsscode.pathom.diplomat.http.fetch/method",-1027353172)];
var inst_55518 = cljs.core.name(inst_55508);
var inst_55519 = clojure.string.upper_case(inst_55518);
var inst_55520 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_55519)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)].join('');
var inst_55521 = [new cljs.core.Keyword("com.wsscode.pathom.diplomat.http.fetch","http-request","com.wsscode.pathom.diplomat.http.fetch/http-request",759217620),inst_55520,url,inst_55508];
var inst_55522 = cljs.core.PersistentHashMap.fromArrays(inst_55509,inst_55521);
var inst_55523 = com.wsscode.pathom.trace.trace_enter.cljs$core$IFn$_invoke$arity$2(req,inst_55522);
var inst_55524 = com.wsscode.pathom.diplomat.http.fetch.build_request_map(req);
var inst_55526 = cljs.core.clj__GT_js(inst_55524);
var inst_55527 = fetch(url,inst_55526);
var inst_55528 = com.wsscode.async.async_cljs.promise__GT_chan(inst_55527);
var state_55596__$1 = (function (){var statearr_55619 = state_55596;
(statearr_55619[(12)] = inst_55507);

(statearr_55619[(13)] = inst_55523);

return statearr_55619;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55596__$1,(14),inst_55528);
} else {
if((state_val_55597 === (22))){
var inst_55523 = (state_55596[(13)]);
var inst_55555 = (state_55596[(11)]);
var inst_55582 = (state_55596[(2)]);
var inst_55583 = com.wsscode.pathom.trace.trace_leave.cljs$core$IFn$_invoke$arity$3(req,inst_55523,inst_55582);
var state_55596__$1 = (function (){var statearr_55621 = state_55596;
(statearr_55621[(14)] = inst_55583);

return statearr_55621;
})();
var statearr_55622_55735 = state_55596__$1;
(statearr_55622_55735[(2)] = inst_55555);


cljs.core.async.impl.ioc_helpers.process_exception(state_55596__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55597 === (6))){
var state_55596__$1 = state_55596;
var statearr_55623_55736 = state_55596__$1;
(statearr_55623_55736[(2)] = false);

(statearr_55623_55736[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55597 === (17))){
var inst_55539 = (state_55596[(2)]);
var inst_55540 = com.wsscode.async.async_cljs.consumer_pair(inst_55539);
var inst_55541 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(inst_55540,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var state_55596__$1 = state_55596;
var statearr_55624_55737 = state_55596__$1;
(statearr_55624_55737[(2)] = inst_55541);

(statearr_55624_55737[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55597 === (3))){
var inst_55475 = (state_55596[(2)]);
var state_55596__$1 = state_55596;
var statearr_55626_55740 = state_55596__$1;
(statearr_55626_55740[(2)] = inst_55475);


cljs.core.async.impl.ioc_helpers.process_exception(state_55596__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55597 === (12))){
var inst_55482 = (state_55596[(9)]);
var state_55596__$1 = state_55596;
var statearr_55627_55742 = state_55596__$1;
(statearr_55627_55742[(2)] = inst_55482);

(statearr_55627_55742[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55597 === (2))){
var inst_55588 = (state_55596[(2)]);
var state_55596__$1 = state_55596;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55596__$1,inst_55588);
} else {
if((state_val_55597 === (19))){
var inst_55546 = (state_55596[(2)]);
var inst_55547 = com.wsscode.async.async_cljs.consumer_pair(inst_55546);
var state_55596__$1 = state_55596;
var statearr_55630_55743 = state_55596__$1;
(statearr_55630_55743[(2)] = inst_55547);

(statearr_55630_55743[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55597 === (11))){
var inst_55482 = (state_55596[(9)]);
var inst_55503 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_55482);
var state_55596__$1 = state_55596;
var statearr_55631_55744 = state_55596__$1;
(statearr_55631_55744[(2)] = inst_55503);

(statearr_55631_55744[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55597 === (9))){
var state_55596__$1 = state_55596;
var statearr_55636_55745 = state_55596__$1;
(statearr_55636_55745[(2)] = false);

(statearr_55636_55745[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55597 === (5))){
var inst_55482 = (state_55596[(9)]);
var inst_55489 = inst_55482.cljs$lang$protocol_mask$partition0$;
var inst_55490 = (inst_55489 & (64));
var inst_55491 = inst_55482.cljs$core$ISeq$;
var inst_55492 = (cljs.core.PROTOCOL_SENTINEL === inst_55491);
var inst_55493 = ((inst_55490) || (inst_55492));
var state_55596__$1 = state_55596;
if(cljs.core.truth_(inst_55493)){
var statearr_55641_55747 = state_55596__$1;
(statearr_55641_55747[(1)] = (8));

} else {
var statearr_55642_55748 = state_55596__$1;
(statearr_55642_55748[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55597 === (14))){
var inst_55507 = (state_55596[(12)]);
var inst_55531 = (state_55596[(15)]);
var inst_55530 = (state_55596[(2)]);
var inst_55531__$1 = com.wsscode.async.async_cljs.consumer_pair(inst_55530);
var inst_55532 = goog.object.get(inst_55531__$1,"status");
var inst_55533 = [new cljs.core.Keyword("com.wsscode.pathom.diplomat.http","status","com.wsscode.pathom.diplomat.http/status",-140686429),new cljs.core.Keyword("com.wsscode.pathom.diplomat.http","body","com.wsscode.pathom.diplomat.http/body",839730955)];
var state_55596__$1 = (function (){var statearr_55645 = state_55596;
(statearr_55645[(7)] = inst_55532);

(statearr_55645[(10)] = inst_55533);

(statearr_55645[(15)] = inst_55531__$1);

return statearr_55645;
})();
var G__55646_55749 = inst_55507;
var G__55646_55750__$1 = (((G__55646_55749 instanceof cljs.core.Keyword))?G__55646_55749.fqn:null);
switch (G__55646_55750__$1) {
case "com.wsscode.pathom.diplomat.http/json":
var statearr_55647_55752 = state_55596__$1;
(statearr_55647_55752[(1)] = (16));


break;
default:
var statearr_55648_55753 = state_55596__$1;
(statearr_55648_55753[(1)] = (18));



}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55597 === (16))){
var inst_55531 = (state_55596[(15)]);
var inst_55536 = inst_55531.json();
var inst_55537 = com.wsscode.async.async_cljs.promise__GT_chan(inst_55536);
var state_55596__$1 = state_55596;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55596__$1,(17),inst_55537);
} else {
if((state_val_55597 === (10))){
var inst_55498 = (state_55596[(2)]);
var state_55596__$1 = state_55596;
var statearr_55655_55757 = state_55596__$1;
(statearr_55655_55757[(2)] = inst_55498);

(statearr_55655_55757[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55597 === (18))){
var inst_55531 = (state_55596[(15)]);
var inst_55543 = inst_55531.text();
var inst_55544 = com.wsscode.async.async_cljs.promise__GT_chan(inst_55543);
var state_55596__$1 = state_55596;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55596__$1,(19),inst_55544);
} else {
if((state_val_55597 === (8))){
var state_55596__$1 = state_55596;
var statearr_55656_55765 = state_55596__$1;
(statearr_55656_55765[(2)] = true);

(statearr_55656_55765[(1)] = (10));


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
});})(c__47946__auto__,map__55457,map__55457__$1,req,url))
;
return ((function (switch__47663__auto__,c__47946__auto__,map__55457,map__55457__$1,req,url){
return (function() {
var com$wsscode$pathom$diplomat$http$fetch$request_async_$_state_machine__47664__auto__ = null;
var com$wsscode$pathom$diplomat$http$fetch$request_async_$_state_machine__47664__auto____0 = (function (){
var statearr_55660 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_55660[(0)] = com$wsscode$pathom$diplomat$http$fetch$request_async_$_state_machine__47664__auto__);

(statearr_55660[(1)] = (1));

return statearr_55660;
});
var com$wsscode$pathom$diplomat$http$fetch$request_async_$_state_machine__47664__auto____1 = (function (state_55596){
while(true){
var ret_value__47665__auto__ = (function (){try{while(true){
var result__47666__auto__ = switch__47663__auto__(state_55596);
if(cljs.core.keyword_identical_QMARK_(result__47666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47666__auto__;
}
break;
}
}catch (e55661){if((e55661 instanceof Object)){
var ex__47667__auto__ = e55661;
var statearr_55662_55769 = state_55596;
(statearr_55662_55769[(5)] = ex__47667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_55596);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e55661;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55771 = state_55596;
state_55596 = G__55771;
continue;
} else {
return ret_value__47665__auto__;
}
break;
}
});
com$wsscode$pathom$diplomat$http$fetch$request_async_$_state_machine__47664__auto__ = function(state_55596){
switch(arguments.length){
case 0:
return com$wsscode$pathom$diplomat$http$fetch$request_async_$_state_machine__47664__auto____0.call(this);
case 1:
return com$wsscode$pathom$diplomat$http$fetch$request_async_$_state_machine__47664__auto____1.call(this,state_55596);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$diplomat$http$fetch$request_async_$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$diplomat$http$fetch$request_async_$_state_machine__47664__auto____0;
com$wsscode$pathom$diplomat$http$fetch$request_async_$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$diplomat$http$fetch$request_async_$_state_machine__47664__auto____1;
return com$wsscode$pathom$diplomat$http$fetch$request_async_$_state_machine__47664__auto__;
})()
;})(switch__47663__auto__,c__47946__auto__,map__55457,map__55457__$1,req,url))
})();
var state__47948__auto__ = (function (){var statearr_55663 = f__47947__auto__();
(statearr_55663[(6)] = c__47946__auto__);

return statearr_55663;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47948__auto__);
});})(c__47946__auto__,map__55457,map__55457__$1,req,url))
);

return c__47946__auto__;
});
com.wsscode.pathom.trace.trace_tree_collect.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("com.wsscode.pathom.diplomat.http.fetch","http-request","com.wsscode.pathom.diplomat.http.fetch/http-request",759217620),(function (x,row){
return com.wsscode.pathom.trace.tree_assoc_detail(com.wsscode.pathom.trace.trace_style(row,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),(cljs.core.truth_(new cljs.core.Keyword("com.wsscode.pathom.core","error","com.wsscode.pathom.core/error",1967516491).cljs$core$IFn$_invoke$arity$1(row))?"#ff8181":"#73abff")], null)),x,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.diplomat.http.fetch","url","com.wsscode.pathom.diplomat.http.fetch/url",1359841746),new cljs.core.Keyword("com.wsscode.pathom.diplomat.http.fetch","method","com.wsscode.pathom.diplomat.http.fetch/method",-1027353172),new cljs.core.Keyword("com.wsscode.pathom.core","error","com.wsscode.pathom.core/error",1967516491)], null));
}));
if(com.wsscode.pathom.misc.INCLUDE_SPECS){
cljs.spec.alpha.def_impl(new cljs.core.Symbol("com.wsscode.pathom.diplomat.http.fetch","request-async","com.wsscode.pathom.diplomat.http.fetch/request-async",-1863098993,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"request","request",1772954723),new cljs.core.Keyword("com.wsscode.pathom.diplomat.http","request","com.wsscode.pathom.diplomat.http/request",-1248699981))),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"request","request",1772954723),new cljs.core.Keyword("com.wsscode.pathom.diplomat.http","request","com.wsscode.pathom.diplomat.http/request",-1248699981)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"request","request",1772954723)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.diplomat.http","request","com.wsscode.pathom.diplomat.http/request",-1248699981)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.diplomat.http","request","com.wsscode.pathom.diplomat.http/request",-1248699981)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"request","request",1772954723),new cljs.core.Keyword("com.wsscode.pathom.diplomat.http","request","com.wsscode.pathom.diplomat.http/request",-1248699981)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_,null,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),null,null,null));
} else {
}

//# sourceMappingURL=com.wsscode.pathom.diplomat.http.fetch.js.map
