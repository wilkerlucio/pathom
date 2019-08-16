goog.provide('clojure.test.check.results');
goog.require('cljs.core');

/**
 * @interface
 */
clojure.test.check.results.Result = function(){};

/**
 * A boolean indicating if the result passed.
 */
clojure.test.check.results.pass_QMARK_ = (function clojure$test$check$results$pass_QMARK_(result){
if((((!((result == null)))) && ((!((result.clojure$test$check$results$Result$pass_QMARK_$arity$1 == null)))))){
return result.clojure$test$check$results$Result$pass_QMARK_$arity$1(result);
} else {
var x__4433__auto__ = (((result == null))?null:result);
var m__4434__auto__ = (clojure.test.check.results.pass_QMARK_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(result) : m__4434__auto__.call(null,result));
} else {
var m__4431__auto__ = (clojure.test.check.results.pass_QMARK_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(result) : m__4431__auto__.call(null,result));
} else {
throw cljs.core.missing_protocol("Result.pass?",result);
}
}
}
});

/**
 * A map of data about the trial.
 */
clojure.test.check.results.result_data = (function clojure$test$check$results$result_data(result){
if((((!((result == null)))) && ((!((result.clojure$test$check$results$Result$result_data$arity$1 == null)))))){
return result.clojure$test$check$results$Result$result_data$arity$1(result);
} else {
var x__4433__auto__ = (((result == null))?null:result);
var m__4434__auto__ = (clojure.test.check.results.result_data[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(result) : m__4434__auto__.call(null,result));
} else {
var m__4431__auto__ = (clojure.test.check.results.result_data["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(result) : m__4431__auto__.call(null,result));
} else {
throw cljs.core.missing_protocol("Result.result-data",result);
}
}
}
});

goog.object.set(clojure.test.check.results.Result,"_",true);

var G__62337_62393 = clojure.test.check.results.pass_QMARK_;
var G__62338_62394 = "_";
var G__62339_62395 = ((function (G__62337_62393,G__62338_62394){
return (function (this$){
return cljs.core.boolean$(this$);
});})(G__62337_62393,G__62338_62394))
;
goog.object.set(G__62337_62393,G__62338_62394,G__62339_62395);

var G__62340_62496 = clojure.test.check.results.result_data;
var G__62341_62497 = "_";
var G__62342_62498 = ((function (G__62340_62496,G__62341_62497){
return (function (this$){
return null;
});})(G__62340_62496,G__62341_62497))
;
goog.object.set(G__62340_62496,G__62341_62497,G__62342_62498);

goog.object.set(clojure.test.check.results.Result,"null",true);

var G__62350_62511 = clojure.test.check.results.pass_QMARK_;
var G__62351_62512 = "null";
var G__62352_62513 = ((function (G__62350_62511,G__62351_62512){
return (function (this$){
return false;
});})(G__62350_62511,G__62351_62512))
;
goog.object.set(G__62350_62511,G__62351_62512,G__62352_62513);

var G__62357_62522 = clojure.test.check.results.result_data;
var G__62358_62523 = "null";
var G__62359_62524 = ((function (G__62357_62522,G__62358_62523){
return (function (this$){
return null;
});})(G__62357_62522,G__62358_62523))
;
goog.object.set(G__62357_62522,G__62358_62523,G__62359_62524);

//# sourceMappingURL=clojure.test.check.results.js.map
