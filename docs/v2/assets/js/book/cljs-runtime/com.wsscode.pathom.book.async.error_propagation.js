goog.provide('com.wsscode.pathom.book.async.error_propagation');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('com.wsscode.common.async_cljs');
goog.require('com.wsscode.pathom.core');
goog.require('com.wsscode.pathom.profile');
com.wsscode.pathom.book.async.error_propagation.sleep = (function com$wsscode$pathom$book$async$error_propagation$sleep(n){
var c = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
setTimeout(((function (c){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c,new cljs.core.Keyword("com.wsscode.pathom.book.async.error-propagation","done","com.wsscode.pathom.book.async.error-propagation/done",-1073591128));
});})(c))
,n);

return c;
});
com.wsscode.pathom.book.async.error_propagation.reader = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"async-info","async-info",-364224963),(function (_){
var c__39084__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__39084__auto__){
return (function (){
var f__39085__auto__ = (function (){var switch__38786__auto__ = ((function (c__39084__auto__){
return (function (state_49026){
var state_val_49027 = (state_49026[(1)]);
if((state_val_49027 === (1))){
var state_49026__$1 = state_49026;
var statearr_49028_49085 = state_49026__$1;
(statearr_49028_49085[(2)] = null);

(statearr_49028_49085[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49027 === (2))){
var inst_49023 = (state_49026[(2)]);
var state_49026__$1 = state_49026;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49026__$1,inst_49023);
} else {
if((state_val_49027 === (3))){
var inst_49004 = (state_49026[(2)]);
var state_49026__$1 = state_49026;
var statearr_49031_49086 = state_49026__$1;
(statearr_49031_49086[(2)] = inst_49004);


cljs.core.async.impl.ioc_helpers.process_exception(state_49026__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49027 === (4))){
var ___$1 = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_49026,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_49016 = cljs.core.rand_int((1000));
var inst_49017 = ((100) + inst_49016);
var inst_49018 = com.wsscode.pathom.book.async.error_propagation.sleep(inst_49017);
var state_49026__$1 = state_49026;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49026__$1,(5),inst_49018);
} else {
if((state_val_49027 === (5))){
var inst_49020 = (state_49026[(2)]);
var inst_49021 = com.wsscode.common.async_cljs.throw_err(inst_49020);
var state_49026__$1 = (function (){var statearr_49037 = state_49026;
(statearr_49037[(7)] = inst_49021);

return statearr_49037;
})();
var statearr_49038_49087 = state_49026__$1;
(statearr_49038_49087[(2)] = "From async");


cljs.core.async.impl.ioc_helpers.process_exception(state_49026__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__39084__auto__))
;
return ((function (switch__38786__auto__,c__39084__auto__){
return (function() {
var com$wsscode$pathom$book$async$error_propagation$state_machine__38787__auto__ = null;
var com$wsscode$pathom$book$async$error_propagation$state_machine__38787__auto____0 = (function (){
var statearr_49042 = [null,null,null,null,null,null,null,null];
(statearr_49042[(0)] = com$wsscode$pathom$book$async$error_propagation$state_machine__38787__auto__);

(statearr_49042[(1)] = (1));

return statearr_49042;
});
var com$wsscode$pathom$book$async$error_propagation$state_machine__38787__auto____1 = (function (state_49026){
while(true){
var ret_value__38788__auto__ = (function (){try{while(true){
var result__38789__auto__ = switch__38786__auto__(state_49026);
if(cljs.core.keyword_identical_QMARK_(result__38789__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38789__auto__;
}
break;
}
}catch (e49044){if((e49044 instanceof Object)){
var ex__38790__auto__ = e49044;
var statearr_49045_49088 = state_49026;
(statearr_49045_49088[(5)] = ex__38790__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_49026);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49044;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38788__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49089 = state_49026;
state_49026 = G__49089;
continue;
} else {
return ret_value__38788__auto__;
}
break;
}
});
com$wsscode$pathom$book$async$error_propagation$state_machine__38787__auto__ = function(state_49026){
switch(arguments.length){
case 0:
return com$wsscode$pathom$book$async$error_propagation$state_machine__38787__auto____0.call(this);
case 1:
return com$wsscode$pathom$book$async$error_propagation$state_machine__38787__auto____1.call(this,state_49026);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$book$async$error_propagation$state_machine__38787__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$book$async$error_propagation$state_machine__38787__auto____0;
com$wsscode$pathom$book$async$error_propagation$state_machine__38787__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$book$async$error_propagation$state_machine__38787__auto____1;
return com$wsscode$pathom$book$async$error_propagation$state_machine__38787__auto__;
})()
;})(switch__38786__auto__,c__39084__auto__))
})();
var state__39086__auto__ = (function (){var statearr_49047 = (f__39085__auto__.cljs$core$IFn$_invoke$arity$0 ? f__39085__auto__.cljs$core$IFn$_invoke$arity$0() : f__39085__auto__.call(null));
(statearr_49047[(6)] = c__39084__auto__);

return statearr_49047;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39086__auto__);
});})(c__39084__auto__))
);

return c__39084__auto__;
}),new cljs.core.Keyword(null,"async-error","async-error",528708636),(function (_){
var c__39084__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__39084__auto__){
return (function (){
var f__39085__auto__ = (function (){var switch__38786__auto__ = ((function (c__39084__auto__){
return (function (state_49068){
var state_val_49069 = (state_49068[(1)]);
if((state_val_49069 === (1))){
var state_49068__$1 = state_49068;
var statearr_49072_49091 = state_49068__$1;
(statearr_49072_49091[(2)] = null);

(statearr_49072_49091[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49069 === (2))){
var inst_49066 = (state_49068[(2)]);
var state_49068__$1 = state_49068;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49068__$1,inst_49066);
} else {
if((state_val_49069 === (3))){
var inst_49049 = (state_49068[(2)]);
var state_49068__$1 = state_49068;
var statearr_49074_49092 = state_49068__$1;
(statearr_49074_49092[(2)] = inst_49049);


cljs.core.async.impl.ioc_helpers.process_exception(state_49068__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49069 === (4))){
var ___$1 = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_49068,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_49053 = cljs.core.rand_int((1000));
var inst_49054 = ((100) + inst_49053);
var inst_49055 = com.wsscode.pathom.book.async.error_propagation.sleep(inst_49054);
var state_49068__$1 = state_49068;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49068__$1,(5),inst_49055);
} else {
if((state_val_49069 === (5))){
var inst_49060 = (state_49068[(2)]);
var inst_49061 = com.wsscode.common.async_cljs.throw_err(inst_49060);
var inst_49062 = cljs.core.PersistentHashMap.EMPTY;
var inst_49063 = cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Error!!",inst_49062);
var inst_49064 = (function(){throw inst_49063})();
var state_49068__$1 = (function (){var statearr_49075 = state_49068;
(statearr_49075[(7)] = inst_49061);

return statearr_49075;
})();
var statearr_49076_49095 = state_49068__$1;
(statearr_49076_49095[(2)] = inst_49064);


cljs.core.async.impl.ioc_helpers.process_exception(state_49068__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__39084__auto__))
;
return ((function (switch__38786__auto__,c__39084__auto__){
return (function() {
var com$wsscode$pathom$book$async$error_propagation$state_machine__38787__auto__ = null;
var com$wsscode$pathom$book$async$error_propagation$state_machine__38787__auto____0 = (function (){
var statearr_49077 = [null,null,null,null,null,null,null,null];
(statearr_49077[(0)] = com$wsscode$pathom$book$async$error_propagation$state_machine__38787__auto__);

(statearr_49077[(1)] = (1));

return statearr_49077;
});
var com$wsscode$pathom$book$async$error_propagation$state_machine__38787__auto____1 = (function (state_49068){
while(true){
var ret_value__38788__auto__ = (function (){try{while(true){
var result__38789__auto__ = switch__38786__auto__(state_49068);
if(cljs.core.keyword_identical_QMARK_(result__38789__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38789__auto__;
}
break;
}
}catch (e49078){if((e49078 instanceof Object)){
var ex__38790__auto__ = e49078;
var statearr_49079_49103 = state_49068;
(statearr_49079_49103[(5)] = ex__38790__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_49068);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49078;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38788__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49107 = state_49068;
state_49068 = G__49107;
continue;
} else {
return ret_value__38788__auto__;
}
break;
}
});
com$wsscode$pathom$book$async$error_propagation$state_machine__38787__auto__ = function(state_49068){
switch(arguments.length){
case 0:
return com$wsscode$pathom$book$async$error_propagation$state_machine__38787__auto____0.call(this);
case 1:
return com$wsscode$pathom$book$async$error_propagation$state_machine__38787__auto____1.call(this,state_49068);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$book$async$error_propagation$state_machine__38787__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$book$async$error_propagation$state_machine__38787__auto____0;
com$wsscode$pathom$book$async$error_propagation$state_machine__38787__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$book$async$error_propagation$state_machine__38787__auto____1;
return com$wsscode$pathom$book$async$error_propagation$state_machine__38787__auto__;
})()
;})(switch__38786__auto__,c__39084__auto__))
})();
var state__39086__auto__ = (function (){var statearr_49082 = (f__39085__auto__.cljs$core$IFn$_invoke$arity$0 ? f__39085__auto__.cljs$core$IFn$_invoke$arity$0() : f__39085__auto__.call(null));
(statearr_49082[(6)] = c__39084__auto__);

return statearr_49082;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39086__auto__);
});})(c__39084__auto__))
);

return c__39084__auto__;
}),new cljs.core.Keyword(null,"foo","foo",1268894036),(function (_){
return "Regular";
})], null);
com.wsscode.pathom.book.async.error_propagation.parser = com.wsscode.pathom.core.async_parser(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.core","plugins","com.wsscode.pathom.core/plugins",-2128476796),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.core.env_plugin(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410),com.wsscode.pathom.book.async.error_propagation.reader], null)),com.wsscode.pathom.core.error_handler_plugin,com.wsscode.pathom.profile.profile_plugin], null)], null));

//# sourceMappingURL=com.wsscode.pathom.book.async.error_propagation.js.map
