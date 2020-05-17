goog.provide('fulcro.logging');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('cljs.stacktrace');
goog.require('goog.log');
goog.require('goog.object');
goog.require('goog.debug.Logger.Level');
goog.require('goog.debug.Console');
fulcro.logging.logging_priority = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"all","all",892129742),(100),new cljs.core.Keyword(null,"trace","trace",-1082747415),(6),new cljs.core.Keyword(null,"debug","debug",-1608172596),(5),new cljs.core.Keyword(null,"info","info",-317069002),(4),new cljs.core.Keyword(null,"warn","warn",-436710552),(3),new cljs.core.Keyword(null,"error","error",-978969032),(2),new cljs.core.Keyword(null,"fatal","fatal",1874419888),(1),new cljs.core.Keyword(null,"none","none",1333468478),(0)], null);
/**
 * Returns true if the current logging level indicates that the message level is of interest.
 */
fulcro.logging.should_log_QMARK_ = (function fulcro$logging$should_log_QMARK_(current_logging_level,message_level){
var c = (function (){var or__4131__auto__ = current_logging_level;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (4);
}
})();
var m = cljs.core.get.cljs$core$IFn$_invoke$arity$3(fulcro.logging.logging_priority,message_level,(4));
return (m <= c);
});
if((typeof fulcro !== 'undefined') && (typeof fulcro.logging !== 'undefined') && (typeof fulcro.logging.current_logging_level !== 'undefined')){
} else {
fulcro.logging.current_logging_level = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
fulcro.logging.level_map = (function (){var levels = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"all","all",892129742),new cljs.core.Keyword(null,"trace","trace",-1082747415),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"info","info",-317069002),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"warn","warn",-436710552),new cljs.core.Keyword(null,"fatal","fatal",1874419888)], null);
var glevels = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ALL","FINE","FINE","INFO","SEVERE","WARNING","SEVERE"], null);
return cljs.core.zipmap(levels,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (levels,glevels){
return (function (p1__55283_SHARP_){
return goog.debug.Logger.Level.getPredefinedLevel(p1__55283_SHARP_);
});})(levels,glevels))
,glevels));
})();
if((typeof fulcro !== 'undefined') && (typeof fulcro.logging !== 'undefined') && (typeof fulcro.logging.logger !== 'undefined')){
} else {
fulcro.logging.logger = (function (){
if(goog.DEBUG){
(new goog.debug.Console()).setCapturing(true);
} else {
}

return cljs.core.atom.cljs$core$IFn$_invoke$arity$1((function() { 
var fulcro$logging$built_in_logger__delegate = function (p__55293,level,args){
var map__55295 = p__55293;
var map__55295__$1 = (((((!((map__55295 == null))))?(((((map__55295.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55295.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55295):map__55295);
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55295__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55295__$1,new cljs.core.Keyword(null,"line","line",212345235));
if(fulcro.logging.should_log_QMARK_(cljs.core.deref(fulcro.logging.current_logging_level),level)){
var location = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = file;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "?";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = line;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "?";
}
})())].join('');
var logger = goog.log.getLogger(file,goog.debug.Logger.Level.getPredefinedLevel("ALL"));
var first_exception = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (logger,location,map__55295,map__55295__$1,file,line){
return (function (p1__55287_SHARP_){
return (p1__55287_SHARP_ instanceof Error);
});})(logger,location,map__55295,map__55295__$1,file,line))
,args));
var message = clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",args);
var glevel = cljs.core.get.cljs$core$IFn$_invoke$arity$3(fulcro.logging.level_map,level,new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(fulcro.logging.level_map));
if(cljs.core.truth_(logger)){
return logger.log(glevel,message,first_exception);
} else {
return null;
}
} else {
return null;
}
};
var fulcro$logging$built_in_logger = function (p__55293,level,var_args){
var args = null;
if (arguments.length > 2) {
var G__55375__i = 0, G__55375__a = new Array(arguments.length -  2);
while (G__55375__i < G__55375__a.length) {G__55375__a[G__55375__i] = arguments[G__55375__i + 2]; ++G__55375__i;}
  args = new cljs.core.IndexedSeq(G__55375__a,0,null);
} 
return fulcro$logging$built_in_logger__delegate.call(this,p__55293,level,args);};
fulcro$logging$built_in_logger.cljs$lang$maxFixedArity = 2;
fulcro$logging$built_in_logger.cljs$lang$applyTo = (function (arglist__55377){
var p__55293 = cljs.core.first(arglist__55377);
arglist__55377 = cljs.core.next(arglist__55377);
var level = cljs.core.first(arglist__55377);
var args = cljs.core.rest(arglist__55377);
return fulcro$logging$built_in_logger__delegate(p__55293,level,args);
});
fulcro$logging$built_in_logger.cljs$core$IFn$_invoke$arity$variadic = fulcro$logging$built_in_logger__delegate;
return fulcro$logging$built_in_logger;
})()
);
})()
;
}
/**
 * Private implementation for macro output. Use `log` instead.
 */
fulcro.logging._log = (function fulcro$logging$_log(var_args){
var args__4736__auto__ = [];
var len__4730__auto___55381 = arguments.length;
var i__4731__auto___55382 = (0);
while(true){
if((i__4731__auto___55382 < len__4730__auto___55381)){
args__4736__auto__.push((arguments[i__4731__auto___55382]));

var G__55387 = (i__4731__auto___55382 + (1));
i__4731__auto___55382 = G__55387;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic = (function (location,level,things_to_print){
if(cljs.core.truth_(cljs.core.deref(fulcro.logging.logger))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(fulcro.logging.logger),location,level,things_to_print);
} else {
return null;
}
});

fulcro.logging._log.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
fulcro.logging._log.cljs$lang$applyTo = (function (seq55306){
var G__55307 = cljs.core.first(seq55306);
var seq55306__$1 = cljs.core.next(seq55306);
var G__55308 = cljs.core.first(seq55306__$1);
var seq55306__$2 = cljs.core.next(seq55306__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__55307,G__55308,seq55306__$2);
});

fulcro.logging.log_STAR_ = (function fulcro$logging$log_STAR_(){
return null;
});
fulcro.logging.fline = (function fulcro$logging$fline(and_form){
var G__55327 = and_form;
var G__55327__$1 = (((G__55327 == null))?null:cljs.core.meta(G__55327));
if((G__55327__$1 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(G__55327__$1);
}
});
fulcro.logging.set_level_BANG_ = (function fulcro$logging$set_level_BANG_(log_level){

var new_level = cljs.core.get.cljs$core$IFn$_invoke$arity$3(fulcro.logging.logging_priority,log_level,(2));
return cljs.core.reset_BANG_(fulcro.logging.current_logging_level,new_level);
});
/**
 * Set the fulcro logging function.
 * 
 *   log-fn - A (fn [{:keys [file line] :as location} level & args] ...)
 */
fulcro.logging.set_logger_BANG_ = (function fulcro$logging$set_logger_BANG_(log_fn){
return cljs.core.reset_BANG_(fulcro.logging.logger,log_fn);
});

//# sourceMappingURL=fulcro.logging.js.map
