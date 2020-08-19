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
com.wsscode.pathom.diplomat.http.fetch.build_headers = (function com$wsscode$pathom$diplomat$http$fetch$build_headers(p__87788){
var map__87789 = p__87788;
var map__87789__$1 = (((((!((map__87789 == null))))?(((((map__87789.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__87789.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__87789):map__87789);
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87789__$1,new cljs.core.Keyword("com.wsscode.pathom.diplomat.http","headers","com.wsscode.pathom.diplomat.http/headers",-2102718913));
var content_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87789__$1,new cljs.core.Keyword("com.wsscode.pathom.diplomat.http","content-type","com.wsscode.pathom.diplomat.http/content-type",-1117530010));
var base_headers = (function (){var G__87791 = null;
if(cljs.core.truth_(content_type)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__87791,new cljs.core.Keyword(null,"content-type","content-type",-508222634),com.wsscode.pathom.diplomat.http.encode_type__GT_header(content_type));
} else {
return G__87791;
}
})();
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([base_headers,headers], 0));
});
com.wsscode.pathom.diplomat.http.fetch.build_body = (function com$wsscode$pathom$diplomat$http$fetch$build_body(p__87794){
var map__87796 = p__87794;
var map__87796__$1 = (((((!((map__87796 == null))))?(((((map__87796.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__87796.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__87796):map__87796);
var form_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87796__$1,new cljs.core.Keyword("com.wsscode.pathom.diplomat.http","form-params","com.wsscode.pathom.diplomat.http/form-params",1015103523));
var content_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87796__$1,new cljs.core.Keyword("com.wsscode.pathom.diplomat.http","content-type","com.wsscode.pathom.diplomat.http/content-type",-1117530010));
var G__87808 = content_type;
var G__87808__$1 = (((G__87808 instanceof cljs.core.Keyword))?G__87808.fqn:null);
switch (G__87808__$1) {
case "com.wsscode.pathom.diplomat.http/json":
return JSON.stringify(cljs.core.clj__GT_js(form_params));

break;
default:
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(form_params);

}
});
com.wsscode.pathom.diplomat.http.fetch.normalize_as = (function com$wsscode$pathom$diplomat$http$fetch$normalize_as(p__87824){
var map__87826 = p__87824;
var map__87826__$1 = (((((!((map__87826 == null))))?(((((map__87826.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__87826.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__87826):map__87826);
var req = map__87826__$1;
var as = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87826__$1,new cljs.core.Keyword("com.wsscode.pathom.diplomat.http","as","com.wsscode.pathom.diplomat.http/as",139380761));
var G__87845 = req;
if(cljs.core.truth_(as)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__87845,new cljs.core.Keyword("com.wsscode.pathom.diplomat.http","content-type","com.wsscode.pathom.diplomat.http/content-type",-1117530010),as,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.wsscode.pathom.diplomat.http","accept","com.wsscode.pathom.diplomat.http/accept",191085679),as], 0));
} else {
return G__87845;
}
});
com.wsscode.pathom.diplomat.http.fetch.build_request_map = (function com$wsscode$pathom$diplomat$http$fetch$build_request_map(p__87850){
var map__87852 = p__87850;
var map__87852__$1 = (((((!((map__87852 == null))))?(((((map__87852.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__87852.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__87852):map__87852);
var req = map__87852__$1;
var form_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87852__$1,new cljs.core.Keyword("com.wsscode.pathom.diplomat.http","form-params","com.wsscode.pathom.diplomat.http/form-params",1015103523));
var req__$1 = com.wsscode.pathom.diplomat.http.fetch.normalize_as(req);
var headers = com.wsscode.pathom.diplomat.http.fetch.build_headers(req__$1);
var G__87857 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"method","method",55703592),com.wsscode.pathom.diplomat.http.request_method(req__$1)], null);
var G__87857__$1 = (cljs.core.truth_(headers)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__87857,new cljs.core.Keyword(null,"headers","headers",-835030129),headers):G__87857);
if(cljs.core.truth_(form_params)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__87857__$1,new cljs.core.Keyword(null,"body","body",-2049205669),com.wsscode.pathom.diplomat.http.fetch.build_body(req__$1));
} else {
return G__87857__$1;
}
});
com.wsscode.pathom.diplomat.http.fetch.request_async = (function com$wsscode$pathom$diplomat$http$fetch$request_async(p__87863){
var map__87865 = p__87863;
var map__87865__$1 = (((((!((map__87865 == null))))?(((((map__87865.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__87865.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__87865):map__87865);
var req = map__87865__$1;
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87865__$1,new cljs.core.Keyword("com.wsscode.pathom.diplomat.http","url","com.wsscode.pathom.diplomat.http/url",1690966630));
if(cljs.spec.alpha._STAR_compile_asserts_STAR_){
if(cljs.core.truth_(cljs.core.deref(new cljs.core.Var(function(){return cljs.spec.alpha._STAR_runtime_asserts_STAR_;},new cljs.core.Symbol("cljs.spec.alpha","*runtime-asserts*","cljs.spec.alpha/*runtime-asserts*",-1060443587,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.spec.alpha","cljs.spec.alpha",505122844,null),new cljs.core.Symbol(null,"*runtime-asserts*","*runtime-asserts*",1632801956,null),"cljs/spec/alpha.cljs",(20),(1),true,(1477),(1479),cljs.core.List.EMPTY,null,((cljs.spec.alpha._STAR_runtime_asserts_STAR_)?cljs.spec.alpha._STAR_runtime_asserts_STAR_.cljs$lang$test:null)]))))){
cljs.spec.alpha.assert_STAR_(new cljs.core.Keyword("com.wsscode.pathom.diplomat.http","request","com.wsscode.pathom.diplomat.http/request",-1248699981),req);
} else {
}
} else {
}

var c__47946__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__47946__auto__,map__87865,map__87865__$1,req,url){
return (function (){
var f__47947__auto__ = (function (){var switch__47663__auto__ = ((function (c__47946__auto__,map__87865,map__87865__$1,req,url){
return (function (state_87979){
var state_val_87980 = (state_87979[(1)]);
if((state_val_87980 === (7))){
var inst_87905 = (state_87979[(2)]);
var state_87979__$1 = state_87979;
if(cljs.core.truth_(inst_87905)){
var statearr_87991_88146 = state_87979__$1;
(statearr_87991_88146[(1)] = (11));

} else {
var statearr_87993_88148 = state_87979__$1;
(statearr_87993_88148[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87980 === (20))){
var inst_87932 = (state_87979[(7)]);
var inst_87956 = (state_87979[(8)]);
var inst_87966 = [new cljs.core.Keyword(null,"status","status",-1997798413)];
var inst_87967 = [inst_87932];
var inst_87968 = cljs.core.PersistentHashMap.fromArrays(inst_87966,inst_87967);
var inst_87969 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_87956,new cljs.core.Keyword("com.wsscode.pathom.core","error","com.wsscode.pathom.core/error",1967516491),inst_87968);
var state_87979__$1 = state_87979;
var statearr_87995_88150 = state_87979__$1;
(statearr_87995_88150[(2)] = inst_87969);

(statearr_87995_88150[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87980 === (1))){
var state_87979__$1 = state_87979;
var statearr_87999_88152 = state_87979__$1;
(statearr_87999_88152[(2)] = null);

(statearr_87999_88152[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87980 === (4))){
var inst_87887 = (state_87979[(9)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_87979,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_87887__$1 = com.wsscode.pathom.diplomat.http.fetch.normalize_as(req);
var inst_87890 = (inst_87887__$1 == null);
var inst_87891 = cljs.core.not(inst_87890);
var state_87979__$1 = (function (){var statearr_88007 = state_87979;
(statearr_88007[(9)] = inst_87887__$1);

return statearr_88007;
})();
if(inst_87891){
var statearr_88008_88154 = state_87979__$1;
(statearr_88008_88154[(1)] = (5));

} else {
var statearr_88009_88155 = state_87979__$1;
(statearr_88009_88155[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87980 === (15))){
var inst_87932 = (state_87979[(7)]);
var inst_87933 = (state_87979[(10)]);
var inst_87948 = (state_87979[(2)]);
var inst_87949 = [inst_87932,inst_87948];
var inst_87950 = cljs.core.PersistentHashMap.fromArrays(inst_87933,inst_87949);
var inst_87956 = cljs.core.PersistentHashMap.EMPTY;
var inst_87960 = ((199) < inst_87932);
var inst_87961 = (inst_87932 < (300));
var inst_87962 = ((inst_87960) && (inst_87961));
var inst_87963 = cljs.core.not(inst_87962);
var state_87979__$1 = (function (){var statearr_88018 = state_87979;
(statearr_88018[(11)] = inst_87950);

(statearr_88018[(8)] = inst_87956);

return statearr_88018;
})();
if(inst_87963){
var statearr_88019_88159 = state_87979__$1;
(statearr_88019_88159[(1)] = (20));

} else {
var statearr_88020_88160 = state_87979__$1;
(statearr_88020_88160[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87980 === (21))){
var inst_87956 = (state_87979[(8)]);
var state_87979__$1 = state_87979;
var statearr_88021_88162 = state_87979__$1;
(statearr_88021_88162[(2)] = inst_87956);

(statearr_88021_88162[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87980 === (13))){
var inst_87910 = (state_87979[(2)]);
var inst_87911 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_87910,new cljs.core.Keyword("com.wsscode.pathom.diplomat.http","accept","com.wsscode.pathom.diplomat.http/accept",191085679));
var inst_87912 = com.wsscode.pathom.diplomat.http.request_method(req);
var inst_87913 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.trace","label","com.wsscode.pathom.trace/label",-1549388543),new cljs.core.Keyword("com.wsscode.pathom.diplomat.http.fetch","url","com.wsscode.pathom.diplomat.http.fetch/url",1359841746),new cljs.core.Keyword("com.wsscode.pathom.diplomat.http.fetch","method","com.wsscode.pathom.diplomat.http.fetch/method",-1027353172)];
var inst_87916 = cljs.core.name(inst_87912);
var inst_87917 = clojure.string.upper_case(inst_87916);
var inst_87918 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_87917)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)].join('');
var inst_87919 = [new cljs.core.Keyword("com.wsscode.pathom.diplomat.http.fetch","http-request","com.wsscode.pathom.diplomat.http.fetch/http-request",759217620),inst_87918,url,inst_87912];
var inst_87920 = cljs.core.PersistentHashMap.fromArrays(inst_87913,inst_87919);
var inst_87921 = com.wsscode.pathom.trace.trace_enter.cljs$core$IFn$_invoke$arity$2(req,inst_87920);
var inst_87925 = com.wsscode.pathom.diplomat.http.fetch.build_request_map(req);
var inst_87926 = cljs.core.clj__GT_js(inst_87925);
var inst_87927 = fetch(url,inst_87926);
var inst_87928 = com.wsscode.async.async_cljs.promise__GT_chan(inst_87927);
var state_87979__$1 = (function (){var statearr_88029 = state_87979;
(statearr_88029[(12)] = inst_87921);

(statearr_88029[(13)] = inst_87911);

return statearr_88029;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_87979__$1,(14),inst_87928);
} else {
if((state_val_87980 === (22))){
var inst_87921 = (state_87979[(12)]);
var inst_87950 = (state_87979[(11)]);
var inst_87972 = (state_87979[(2)]);
var inst_87973 = com.wsscode.pathom.trace.trace_leave.cljs$core$IFn$_invoke$arity$3(req,inst_87921,inst_87972);
var state_87979__$1 = (function (){var statearr_88033 = state_87979;
(statearr_88033[(14)] = inst_87973);

return statearr_88033;
})();
var statearr_88035_88164 = state_87979__$1;
(statearr_88035_88164[(2)] = inst_87950);


cljs.core.async.impl.ioc_helpers.process_exception(state_87979__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87980 === (6))){
var state_87979__$1 = state_87979;
var statearr_88036_88165 = state_87979__$1;
(statearr_88036_88165[(2)] = false);

(statearr_88036_88165[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87980 === (17))){
var inst_87937 = (state_87979[(2)]);
var inst_87938 = com.wsscode.async.async_cljs.consumer_pair(inst_87937);
var inst_87939 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(inst_87938,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var state_87979__$1 = state_87979;
var statearr_88044_88166 = state_87979__$1;
(statearr_88044_88166[(2)] = inst_87939);

(statearr_88044_88166[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87980 === (3))){
var inst_87880 = (state_87979[(2)]);
var state_87979__$1 = state_87979;
var statearr_88051_88169 = state_87979__$1;
(statearr_88051_88169[(2)] = inst_87880);


cljs.core.async.impl.ioc_helpers.process_exception(state_87979__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87980 === (12))){
var inst_87887 = (state_87979[(9)]);
var state_87979__$1 = state_87979;
var statearr_88060_88170 = state_87979__$1;
(statearr_88060_88170[(2)] = inst_87887);

(statearr_88060_88170[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87980 === (2))){
var inst_87976 = (state_87979[(2)]);
var state_87979__$1 = state_87979;
return cljs.core.async.impl.ioc_helpers.return_chan(state_87979__$1,inst_87976);
} else {
if((state_val_87980 === (19))){
var inst_87944 = (state_87979[(2)]);
var inst_87945 = com.wsscode.async.async_cljs.consumer_pair(inst_87944);
var state_87979__$1 = state_87979;
var statearr_88065_88172 = state_87979__$1;
(statearr_88065_88172[(2)] = inst_87945);

(statearr_88065_88172[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87980 === (11))){
var inst_87887 = (state_87979[(9)]);
var inst_87907 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_87887);
var state_87979__$1 = state_87979;
var statearr_88068_88174 = state_87979__$1;
(statearr_88068_88174[(2)] = inst_87907);

(statearr_88068_88174[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87980 === (9))){
var state_87979__$1 = state_87979;
var statearr_88070_88175 = state_87979__$1;
(statearr_88070_88175[(2)] = false);

(statearr_88070_88175[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87980 === (5))){
var inst_87887 = (state_87979[(9)]);
var inst_87894 = inst_87887.cljs$lang$protocol_mask$partition0$;
var inst_87895 = (inst_87894 & (64));
var inst_87896 = inst_87887.cljs$core$ISeq$;
var inst_87897 = (cljs.core.PROTOCOL_SENTINEL === inst_87896);
var inst_87898 = ((inst_87895) || (inst_87897));
var state_87979__$1 = state_87979;
if(cljs.core.truth_(inst_87898)){
var statearr_88072_88178 = state_87979__$1;
(statearr_88072_88178[(1)] = (8));

} else {
var statearr_88073_88179 = state_87979__$1;
(statearr_88073_88179[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87980 === (14))){
var inst_87911 = (state_87979[(13)]);
var inst_87931 = (state_87979[(15)]);
var inst_87930 = (state_87979[(2)]);
var inst_87931__$1 = com.wsscode.async.async_cljs.consumer_pair(inst_87930);
var inst_87932 = goog.object.get(inst_87931__$1,"status");
var inst_87933 = [new cljs.core.Keyword("com.wsscode.pathom.diplomat.http","status","com.wsscode.pathom.diplomat.http/status",-140686429),new cljs.core.Keyword("com.wsscode.pathom.diplomat.http","body","com.wsscode.pathom.diplomat.http/body",839730955)];
var state_87979__$1 = (function (){var statearr_88075 = state_87979;
(statearr_88075[(7)] = inst_87932);

(statearr_88075[(10)] = inst_87933);

(statearr_88075[(15)] = inst_87931__$1);

return statearr_88075;
})();
var G__88077_88180 = inst_87911;
var G__88077_88181__$1 = (((G__88077_88180 instanceof cljs.core.Keyword))?G__88077_88180.fqn:null);
switch (G__88077_88181__$1) {
case "com.wsscode.pathom.diplomat.http/json":
var statearr_88078_88184 = state_87979__$1;
(statearr_88078_88184[(1)] = (16));


break;
default:
var statearr_88079_88185 = state_87979__$1;
(statearr_88079_88185[(1)] = (18));



}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87980 === (16))){
var inst_87931 = (state_87979[(15)]);
var inst_87934 = inst_87931.json();
var inst_87935 = com.wsscode.async.async_cljs.promise__GT_chan(inst_87934);
var state_87979__$1 = state_87979;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_87979__$1,(17),inst_87935);
} else {
if((state_val_87980 === (10))){
var inst_87902 = (state_87979[(2)]);
var state_87979__$1 = state_87979;
var statearr_88083_88195 = state_87979__$1;
(statearr_88083_88195[(2)] = inst_87902);

(statearr_88083_88195[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87980 === (18))){
var inst_87931 = (state_87979[(15)]);
var inst_87941 = inst_87931.text();
var inst_87942 = com.wsscode.async.async_cljs.promise__GT_chan(inst_87941);
var state_87979__$1 = state_87979;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_87979__$1,(19),inst_87942);
} else {
if((state_val_87980 === (8))){
var state_87979__$1 = state_87979;
var statearr_88086_88198 = state_87979__$1;
(statearr_88086_88198[(2)] = true);

(statearr_88086_88198[(1)] = (10));


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
});})(c__47946__auto__,map__87865,map__87865__$1,req,url))
;
return ((function (switch__47663__auto__,c__47946__auto__,map__87865,map__87865__$1,req,url){
return (function() {
var com$wsscode$pathom$diplomat$http$fetch$request_async_$_state_machine__47664__auto__ = null;
var com$wsscode$pathom$diplomat$http$fetch$request_async_$_state_machine__47664__auto____0 = (function (){
var statearr_88091 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_88091[(0)] = com$wsscode$pathom$diplomat$http$fetch$request_async_$_state_machine__47664__auto__);

(statearr_88091[(1)] = (1));

return statearr_88091;
});
var com$wsscode$pathom$diplomat$http$fetch$request_async_$_state_machine__47664__auto____1 = (function (state_87979){
while(true){
var ret_value__47665__auto__ = (function (){try{while(true){
var result__47666__auto__ = switch__47663__auto__(state_87979);
if(cljs.core.keyword_identical_QMARK_(result__47666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47666__auto__;
}
break;
}
}catch (e88095){if((e88095 instanceof Object)){
var ex__47667__auto__ = e88095;
var statearr_88097_88206 = state_87979;
(statearr_88097_88206[(5)] = ex__47667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_87979);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e88095;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__88207 = state_87979;
state_87979 = G__88207;
continue;
} else {
return ret_value__47665__auto__;
}
break;
}
});
com$wsscode$pathom$diplomat$http$fetch$request_async_$_state_machine__47664__auto__ = function(state_87979){
switch(arguments.length){
case 0:
return com$wsscode$pathom$diplomat$http$fetch$request_async_$_state_machine__47664__auto____0.call(this);
case 1:
return com$wsscode$pathom$diplomat$http$fetch$request_async_$_state_machine__47664__auto____1.call(this,state_87979);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$diplomat$http$fetch$request_async_$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$diplomat$http$fetch$request_async_$_state_machine__47664__auto____0;
com$wsscode$pathom$diplomat$http$fetch$request_async_$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$diplomat$http$fetch$request_async_$_state_machine__47664__auto____1;
return com$wsscode$pathom$diplomat$http$fetch$request_async_$_state_machine__47664__auto__;
})()
;})(switch__47663__auto__,c__47946__auto__,map__87865,map__87865__$1,req,url))
})();
var state__47948__auto__ = (function (){var statearr_88100 = f__47947__auto__();
(statearr_88100[(6)] = c__47946__auto__);

return statearr_88100;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47948__auto__);
});})(c__47946__auto__,map__87865,map__87865__$1,req,url))
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
