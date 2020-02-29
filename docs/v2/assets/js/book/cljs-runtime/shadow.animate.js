goog.provide('shadow.animate');
goog.require('cljs.core');
goog.require('shadow.dom');
goog.require('shadow.object');
goog.require('clojure.string');
goog.require('cljs.core.async');
goog.require('goog.dom.vendor');
goog.require('goog.style');
goog.require('shadow.util');

/**
 * @interface
 */
shadow.animate.Animation = function(){};

/**
 * return a map of {attr initial-value}
 */
shadow.animate._animate_from = (function shadow$animate$_animate_from(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$animate$Animation$_animate_from$arity$1 == null)))))){
return this$.shadow$animate$Animation$_animate_from$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (shadow.animate._animate_from[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4434__auto__.call(null,this$));
} else {
var m__4431__auto__ = (shadow.animate._animate_from["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4431__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Animation.-animate-from",this$);
}
}
}
});

/**
 * return a map of {attr target-value}
 */
shadow.animate._animate_to = (function shadow$animate$_animate_to(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$animate$Animation$_animate_to$arity$1 == null)))))){
return this$.shadow$animate$Animation$_animate_to$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (shadow.animate._animate_to[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4434__auto__.call(null,this$));
} else {
var m__4431__auto__ = (shadow.animate._animate_to["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4431__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Animation.-animate-to",this$);
}
}
}
});

/**
 * return a map of {attr target-value}
 */
shadow.animate._animate_toggles = (function shadow$animate$_animate_toggles(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$animate$Animation$_animate_toggles$arity$1 == null)))))){
return this$.shadow$animate$Animation$_animate_toggles$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (shadow.animate._animate_toggles[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4434__auto__.call(null,this$));
} else {
var m__4431__auto__ = (shadow.animate._animate_toggles["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4431__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Animation.-animate-toggles",this$);
}
}
}
});

/**
 * return a map of {attr timing-function}
 */
shadow.animate._animate_timings = (function shadow$animate$_animate_timings(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$animate$Animation$_animate_timings$arity$1 == null)))))){
return this$.shadow$animate$Animation$_animate_timings$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (shadow.animate._animate_timings[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4434__auto__.call(null,this$));
} else {
var m__4431__auto__ = (shadow.animate._animate_timings["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4431__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Animation.-animate-timings",this$);
}
}
}
});

/**
 * return a map of {attr transition-delay}
 */
shadow.animate._animate_delays = (function shadow$animate$_animate_delays(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$animate$Animation$_animate_delays$arity$1 == null)))))){
return this$.shadow$animate$Animation$_animate_delays$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (shadow.animate._animate_delays[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4434__auto__.call(null,this$));
} else {
var m__4431__auto__ = (shadow.animate._animate_delays["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4431__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Animation.-animate-delays",this$);
}
}
}
});

shadow.animate.transition_string = (function shadow$animate$transition_string(duration,adef){
var timings = shadow.animate._animate_timings(adef);
var delays = shadow.animate._animate_delays(adef);
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (timings,delays){
return (function (p__60902){
var vec__60903 = p__60902;
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60903,(0),null);
var timing = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60903,(1),null);
return [cljs.core.name(attr)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(duration),"ms"," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(timing),(function (){var delay = cljs.core.get.cljs$core$IFn$_invoke$arity$2(delays,attr);
if(cljs.core.truth_((function (){var and__4120__auto__ = delay;
if(cljs.core.truth_(and__4120__auto__)){
return (delay > (0));
} else {
return and__4120__auto__;
}
})())){
return [" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(delay),"ms"].join('');
} else {
return null;
}
})()].join('');
});})(timings,delays))
,timings));
});

/**
 * @interface
 */
shadow.animate.IAnimator = function(){};

shadow.animate.get_duration = (function shadow$animate$get_duration(animator){
if((((!((animator == null)))) && ((!((animator.shadow$animate$IAnimator$get_duration$arity$1 == null)))))){
return animator.shadow$animate$IAnimator$get_duration$arity$1(animator);
} else {
var x__4433__auto__ = (((animator == null))?null:animator);
var m__4434__auto__ = (shadow.animate.get_duration[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(animator) : m__4434__auto__.call(null,animator));
} else {
var m__4431__auto__ = (shadow.animate.get_duration["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(animator) : m__4431__auto__.call(null,animator));
} else {
throw cljs.core.missing_protocol("IAnimator.get-duration",animator);
}
}
}
});

/**
 * apply the initial values
 */
shadow.animate.init_BANG_ = (function shadow$animate$init_BANG_(animator){
if((((!((animator == null)))) && ((!((animator.shadow$animate$IAnimator$init_BANG_$arity$1 == null)))))){
return animator.shadow$animate$IAnimator$init_BANG_$arity$1(animator);
} else {
var x__4433__auto__ = (((animator == null))?null:animator);
var m__4434__auto__ = (shadow.animate.init_BANG_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(animator) : m__4434__auto__.call(null,animator));
} else {
var m__4431__auto__ = (shadow.animate.init_BANG_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(animator) : m__4431__auto__.call(null,animator));
} else {
throw cljs.core.missing_protocol("IAnimator.init!",animator);
}
}
}
});

/**
 * start the animation, must return a channel that closes once the animation is done
 */
shadow.animate.start_BANG_ = (function shadow$animate$start_BANG_(animator){
if((((!((animator == null)))) && ((!((animator.shadow$animate$IAnimator$start_BANG_$arity$1 == null)))))){
return animator.shadow$animate$IAnimator$start_BANG_$arity$1(animator);
} else {
var x__4433__auto__ = (((animator == null))?null:animator);
var m__4434__auto__ = (shadow.animate.start_BANG_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(animator) : m__4434__auto__.call(null,animator));
} else {
var m__4431__auto__ = (shadow.animate.start_BANG_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(animator) : m__4431__auto__.call(null,animator));
} else {
throw cljs.core.missing_protocol("IAnimator.start!",animator);
}
}
}
});

/**
 * cleanup
 */
shadow.animate.finish_BANG_ = (function shadow$animate$finish_BANG_(animator){
if((((!((animator == null)))) && ((!((animator.shadow$animate$IAnimator$finish_BANG_$arity$1 == null)))))){
return animator.shadow$animate$IAnimator$finish_BANG_$arity$1(animator);
} else {
var x__4433__auto__ = (((animator == null))?null:animator);
var m__4434__auto__ = (shadow.animate.finish_BANG_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(animator) : m__4434__auto__.call(null,animator));
} else {
var m__4431__auto__ = (shadow.animate.finish_BANG_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(animator) : m__4431__auto__.call(null,animator));
} else {
throw cljs.core.missing_protocol("IAnimator.finish!",animator);
}
}
}
});


/**
* @constructor
 * @implements {shadow.animate.IAnimator}
*/
shadow.animate.Animator = (function (duration,items){
this.duration = duration;
this.items = items;
});
shadow.animate.Animator.prototype.shadow$animate$IAnimator$ = cljs.core.PROTOCOL_SENTINEL;

shadow.animate.Animator.prototype.shadow$animate$IAnimator$get_duration$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.duration;
});

shadow.animate.Animator.prototype.shadow$animate$IAnimator$init_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var n__4607__auto__ = self__.items.length;
var i__58809__auto__ = (0);
while(true){
if((i__58809__auto__ < n__4607__auto__)){
var map__60961_61706 = (self__.items[i__58809__auto__]);
var map__60961_61707__$1 = (((((!((map__60961_61706 == null))))?(((((map__60961_61706.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60961_61706.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60961_61706):map__60961_61706);
var el_61708 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60961_61707__$1,new cljs.core.Keyword(null,"el","el",-1618201118));
var from_61709 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60961_61707__$1,new cljs.core.Keyword(null,"from","from",1815293044));
goog.style.setStyle(el_61708,from_61709);

var G__61710 = (i__58809__auto__ + (1));
i__58809__auto__ = G__61710;
continue;
} else {
return null;
}
break;
}
});

shadow.animate.Animator.prototype.shadow$animate$IAnimator$start_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var n__4607__auto__ = self__.items.length;
var i__58809__auto__ = (0);
while(true){
if((i__58809__auto__ < n__4607__auto__)){
var map__60965_61711 = (self__.items[i__58809__auto__]);
var map__60965_61712__$1 = (((((!((map__60965_61711 == null))))?(((((map__60965_61711.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60965_61711.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60965_61711):map__60965_61711);
var el_61713 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60965_61712__$1,new cljs.core.Keyword(null,"el","el",-1618201118));
var to_61714 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60965_61712__$1,new cljs.core.Keyword(null,"to","to",192099007));
var transition_61715 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60965_61712__$1,new cljs.core.Keyword(null,"transition","transition",765692007));
(to_61714["transition"] = transition_61715);

goog.style.setStyle(el_61713,to_61714);

var G__61725 = (i__58809__auto__ + (1));
i__58809__auto__ = G__61725;
continue;
} else {
return null;
}
break;
}
});

shadow.animate.Animator.prototype.shadow$animate$IAnimator$finish_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var n__4607__auto__ = self__.items.length;
var i__58809__auto__ = (0);
while(true){
if((i__58809__auto__ < n__4607__auto__)){
var map__60970_61731 = (self__.items[i__58809__auto__]);
var map__60970_61732__$1 = (((((!((map__60970_61731 == null))))?(((((map__60970_61731.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60970_61731.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60970_61731):map__60970_61731);
var el_61733 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60970_61732__$1,new cljs.core.Keyword(null,"el","el",-1618201118));
var toggles_61734 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60970_61732__$1,new cljs.core.Keyword(null,"toggles","toggles",1077909479));
(toggles_61734["transition"] = null);

goog.style.setStyle(el_61733,toggles_61734);

var G__61761 = (i__58809__auto__ + (1));
i__58809__auto__ = G__61761;
continue;
} else {
return null;
}
break;
}
});

shadow.animate.Animator.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"duration","duration",-1210334701,null),new cljs.core.Symbol(null,"items","items",-1622480831,null)], null);
});

shadow.animate.Animator.cljs$lang$type = true;

shadow.animate.Animator.cljs$lang$ctorStr = "shadow.animate/Animator";

shadow.animate.Animator.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"shadow.animate/Animator");
});

/**
 * Positional factory function for shadow.animate/Animator.
 */
shadow.animate.__GT_Animator = (function shadow$animate$__GT_Animator(duration,items){
return (new shadow.animate.Animator(duration,items));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.animate.AnimationStep = (function (el,from,to,toggles,transition,__meta,__extmap,__hash){
this.el = el;
this.from = from;
this.to = to;
this.toggles = toggles;
this.transition = transition;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
shadow.animate.AnimationStep.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

shadow.animate.AnimationStep.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k60987,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__61002 = k60987;
var G__61002__$1 = (((G__61002 instanceof cljs.core.Keyword))?G__61002.fqn:null);
switch (G__61002__$1) {
case "el":
return self__.el;

break;
case "from":
return self__.from;

break;
case "to":
return self__.to;

break;
case "toggles":
return self__.toggles;

break;
case "transition":
return self__.transition;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k60987,else__4388__auto__);

}
});

shadow.animate.AnimationStep.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__61004){
var vec__61006 = p__61004;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61006,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61006,(1),null);
return (f__4405__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4405__auto__.cljs$core$IFn$_invoke$arity$3(ret__4407__auto__,k__4408__auto__,v__4409__auto__) : f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__));
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

shadow.animate.AnimationStep.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer(writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4400__auto__,pr_pair__4402__auto__,"#shadow.animate.AnimationStep{",", ","}",opts__4401__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"el","el",-1618201118),self__.el],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"from","from",1815293044),self__.from],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"to","to",192099007),self__.to],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"toggles","toggles",1077909479),self__.toggles],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"transition","transition",765692007),self__.transition],null))], null),self__.__extmap));
});

shadow.animate.AnimationStep.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__60986){
var self__ = this;
var G__60986__$1 = this;
return (new cljs.core.RecordIter((0),G__60986__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"el","el",-1618201118),new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword(null,"toggles","toggles",1077909479),new cljs.core.Keyword(null,"transition","transition",765692007)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

shadow.animate.AnimationStep.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

shadow.animate.AnimationStep.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new shadow.animate.AnimationStep(self__.el,self__.from,self__.to,self__.toggles,self__.transition,self__.__meta,self__.__extmap,self__.__hash));
});

shadow.animate.AnimationStep.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
});

shadow.animate.AnimationStep.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (630436239 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
(this__4381__auto____$1);
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

shadow.animate.AnimationStep.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this60988,other60989){
var self__ = this;
var this60988__$1 = this;
return (((!((other60989 == null)))) && ((this60988__$1.constructor === other60989.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this60988__$1.el,other60989.el)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this60988__$1.from,other60989.from)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this60988__$1.to,other60989.to)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this60988__$1.toggles,other60989.toggles)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this60988__$1.transition,other60989.transition)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this60988__$1.__extmap,other60989.__extmap)));
});

shadow.animate.AnimationStep.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"el","el",-1618201118),null,new cljs.core.Keyword(null,"transition","transition",765692007),null,new cljs.core.Keyword(null,"toggles","toggles",1077909479),null,new cljs.core.Keyword(null,"from","from",1815293044),null,new cljs.core.Keyword(null,"to","to",192099007),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new shadow.animate.AnimationStep(self__.el,self__.from,self__.to,self__.toggles,self__.transition,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4395__auto__)),null));
}
});

shadow.animate.AnimationStep.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__60986){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__61032 = cljs.core.keyword_identical_QMARK_;
var expr__61033 = k__4393__auto__;
if(cljs.core.truth_((pred__61032.cljs$core$IFn$_invoke$arity$2 ? pred__61032.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"el","el",-1618201118),expr__61033) : pred__61032.call(null,new cljs.core.Keyword(null,"el","el",-1618201118),expr__61033)))){
return (new shadow.animate.AnimationStep(G__60986,self__.from,self__.to,self__.toggles,self__.transition,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__61032.cljs$core$IFn$_invoke$arity$2 ? pred__61032.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"from","from",1815293044),expr__61033) : pred__61032.call(null,new cljs.core.Keyword(null,"from","from",1815293044),expr__61033)))){
return (new shadow.animate.AnimationStep(self__.el,G__60986,self__.to,self__.toggles,self__.transition,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__61032.cljs$core$IFn$_invoke$arity$2 ? pred__61032.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"to","to",192099007),expr__61033) : pred__61032.call(null,new cljs.core.Keyword(null,"to","to",192099007),expr__61033)))){
return (new shadow.animate.AnimationStep(self__.el,self__.from,G__60986,self__.toggles,self__.transition,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__61032.cljs$core$IFn$_invoke$arity$2 ? pred__61032.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"toggles","toggles",1077909479),expr__61033) : pred__61032.call(null,new cljs.core.Keyword(null,"toggles","toggles",1077909479),expr__61033)))){
return (new shadow.animate.AnimationStep(self__.el,self__.from,self__.to,G__60986,self__.transition,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__61032.cljs$core$IFn$_invoke$arity$2 ? pred__61032.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"transition","transition",765692007),expr__61033) : pred__61032.call(null,new cljs.core.Keyword(null,"transition","transition",765692007),expr__61033)))){
return (new shadow.animate.AnimationStep(self__.el,self__.from,self__.to,self__.toggles,G__60986,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.animate.AnimationStep(self__.el,self__.from,self__.to,self__.toggles,self__.transition,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__60986),null));
}
}
}
}
}
});

shadow.animate.AnimationStep.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"el","el",-1618201118),self__.el,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"from","from",1815293044),self__.from,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"to","to",192099007),self__.to,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"toggles","toggles",1077909479),self__.toggles,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"transition","transition",765692007),self__.transition,null))], null),self__.__extmap));
});

shadow.animate.AnimationStep.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__60986){
var self__ = this;
var this__4384__auto____$1 = this;
return (new shadow.animate.AnimationStep(self__.el,self__.from,self__.to,self__.toggles,self__.transition,G__60986,self__.__extmap,self__.__hash));
});

shadow.animate.AnimationStep.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4391__auto__,(0)),cljs.core._nth(entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

shadow.animate.AnimationStep.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"el","el",22330409,null),new cljs.core.Symbol(null,"from","from",-839142725,null),new cljs.core.Symbol(null,"to","to",1832630534,null),new cljs.core.Symbol(null,"toggles","toggles",-1576526290,null),new cljs.core.Symbol(null,"transition","transition",-1888743762,null)], null);
});

shadow.animate.AnimationStep.cljs$lang$type = true;

shadow.animate.AnimationStep.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"shadow.animate/AnimationStep",null,(1),null));
});

shadow.animate.AnimationStep.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write(writer__4429__auto__,"shadow.animate/AnimationStep");
});

/**
 * Positional factory function for shadow.animate/AnimationStep.
 */
shadow.animate.__GT_AnimationStep = (function shadow$animate$__GT_AnimationStep(el,from,to,toggles,transition){
return (new shadow.animate.AnimationStep(el,from,to,toggles,transition,null,null,null));
});

/**
 * Factory function for shadow.animate/AnimationStep, taking a map of keywords to field values.
 */
shadow.animate.map__GT_AnimationStep = (function shadow$animate$map__GT_AnimationStep(G__60991){
var extmap__4424__auto__ = (function (){var G__61065 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__60991,new cljs.core.Keyword(null,"el","el",-1618201118),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword(null,"toggles","toggles",1077909479),new cljs.core.Keyword(null,"transition","transition",765692007)], 0));
if(cljs.core.record_QMARK_(G__60991)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__61065);
} else {
return G__61065;
}
})();
return (new shadow.animate.AnimationStep(new cljs.core.Keyword(null,"el","el",-1618201118).cljs$core$IFn$_invoke$arity$1(G__60991),new cljs.core.Keyword(null,"from","from",1815293044).cljs$core$IFn$_invoke$arity$1(G__60991),new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(G__60991),new cljs.core.Keyword(null,"toggles","toggles",1077909479).cljs$core$IFn$_invoke$arity$1(G__60991),new cljs.core.Keyword(null,"transition","transition",765692007).cljs$core$IFn$_invoke$arity$1(G__60991),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

shadow.animate.setup = (function shadow$animate$setup(duration,elements){
var items = cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__4523__auto__ = (function shadow$animate$setup_$_iter__61075(s__61076){
return (new cljs.core.LazySeq(null,(function (){
var s__61076__$1 = s__61076;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__61076__$1);
if(temp__5720__auto__){
var s__61076__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__61076__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__61076__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__61078 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__61077 = (0);
while(true){
if((i__61077 < size__4522__auto__)){
var vec__61087 = cljs.core._nth(c__4521__auto__,i__61077);
var el = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61087,(0),null);
var adef = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61087,(1),null);
cljs.core.chunk_append(b__61078,(function (){
if((((!((adef == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === adef.shadow$animate$Animation$))))?true:(((!adef.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(shadow.animate.Animation,adef):false)):cljs.core.native_satisfies_QMARK_(shadow.animate.Animation,adef))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid animation",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"el","el",-1618201118),el,new cljs.core.Keyword(null,"animation","animation",-1248293244),adef], null));
}

var from = shadow.animate._animate_from(adef);
var to = shadow.animate._animate_to(adef);
var toggles = shadow.animate._animate_toggles(adef);
return (new shadow.animate.AnimationStep(shadow.dom.dom_node(el),cljs.core.clj__GT_js(from),cljs.core.clj__GT_js(to),cljs.core.clj__GT_js(toggles),shadow.animate.transition_string(duration,adef),null,null,null));
})()
);

var G__61850 = (i__61077 + (1));
i__61077 = G__61850;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__61078),shadow$animate$setup_$_iter__61075(cljs.core.chunk_rest(s__61076__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__61078),null);
}
} else {
var vec__61102 = cljs.core.first(s__61076__$2);
var el = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61102,(0),null);
var adef = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61102,(1),null);
return cljs.core.cons((function (){
if((((!((adef == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === adef.shadow$animate$Animation$))))?true:(((!adef.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(shadow.animate.Animation,adef):false)):cljs.core.native_satisfies_QMARK_(shadow.animate.Animation,adef))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid animation",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"el","el",-1618201118),el,new cljs.core.Keyword(null,"animation","animation",-1248293244),adef], null));
}

var from = shadow.animate._animate_from(adef);
var to = shadow.animate._animate_to(adef);
var toggles = shadow.animate._animate_toggles(adef);
return (new shadow.animate.AnimationStep(shadow.dom.dom_node(el),cljs.core.clj__GT_js(from),cljs.core.clj__GT_js(to),cljs.core.clj__GT_js(toggles),shadow.animate.transition_string(duration,adef),null,null,null));
})()
,shadow$animate$setup_$_iter__61075(cljs.core.rest(s__61076__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(elements);
})());
return (new shadow.animate.Animator(duration,items));
});
shadow.animate.continue_BANG_ = (function shadow$animate$continue_BANG_(animator){
shadow.animate.start_BANG_(animator);

var c__45808__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__45808__auto__){
return (function (){
var f__45809__auto__ = (function (){var switch__45525__auto__ = ((function (c__45808__auto__){
return (function (state_61120){
var state_val_61121 = (state_61120[(1)]);
if((state_val_61121 === (1))){
var inst_61113 = shadow.animate.get_duration(animator);
var inst_61114 = cljs.core.async.timeout(inst_61113);
var state_61120__$1 = state_61120;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_61120__$1,(2),inst_61114);
} else {
if((state_val_61121 === (2))){
var inst_61116 = (state_61120[(2)]);
var inst_61118 = shadow.animate.finish_BANG_(animator);
var state_61120__$1 = (function (){var statearr_61124 = state_61120;
(statearr_61124[(7)] = inst_61118);

(statearr_61124[(8)] = inst_61116);

return statearr_61124;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_61120__$1,new cljs.core.Keyword(null,"done","done",-889844188));
} else {
return null;
}
}
});})(c__45808__auto__))
;
return ((function (switch__45525__auto__,c__45808__auto__){
return (function() {
var shadow$animate$continue_BANG__$_state_machine__45526__auto__ = null;
var shadow$animate$continue_BANG__$_state_machine__45526__auto____0 = (function (){
var statearr_61126 = [null,null,null,null,null,null,null,null,null];
(statearr_61126[(0)] = shadow$animate$continue_BANG__$_state_machine__45526__auto__);

(statearr_61126[(1)] = (1));

return statearr_61126;
});
var shadow$animate$continue_BANG__$_state_machine__45526__auto____1 = (function (state_61120){
while(true){
var ret_value__45527__auto__ = (function (){try{while(true){
var result__45528__auto__ = switch__45525__auto__(state_61120);
if(cljs.core.keyword_identical_QMARK_(result__45528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45528__auto__;
}
break;
}
}catch (e61127){if((e61127 instanceof Object)){
var ex__45529__auto__ = e61127;
var statearr_61132_61867 = state_61120;
(statearr_61132_61867[(5)] = ex__45529__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_61120);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61127;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61870 = state_61120;
state_61120 = G__61870;
continue;
} else {
return ret_value__45527__auto__;
}
break;
}
});
shadow$animate$continue_BANG__$_state_machine__45526__auto__ = function(state_61120){
switch(arguments.length){
case 0:
return shadow$animate$continue_BANG__$_state_machine__45526__auto____0.call(this);
case 1:
return shadow$animate$continue_BANG__$_state_machine__45526__auto____1.call(this,state_61120);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$animate$continue_BANG__$_state_machine__45526__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$animate$continue_BANG__$_state_machine__45526__auto____0;
shadow$animate$continue_BANG__$_state_machine__45526__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$animate$continue_BANG__$_state_machine__45526__auto____1;
return shadow$animate$continue_BANG__$_state_machine__45526__auto__;
})()
;})(switch__45525__auto__,c__45808__auto__))
})();
var state__45810__auto__ = (function (){var statearr_61151 = f__45809__auto__();
(statearr_61151[(6)] = c__45808__auto__);

return statearr_61151;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45810__auto__);
});})(c__45808__auto__))
);

return c__45808__auto__;
});
shadow.animate.start = (function shadow$animate$start(duration,elements){
var animator = shadow.animate.setup(duration,elements);
animator.shadow$animate$IAnimator$init_BANG_$arity$1(null);

return shadow.animate.continue_BANG_(animator);
});
/**
 * transition the given attr from -> to using timing function and delay
 * timing defaults to ease, delay to 0
 */
shadow.animate.transition = (function shadow$animate$transition(var_args){
var G__61189 = arguments.length;
switch (G__61189) {
case 3:
return shadow.animate.transition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.animate.transition.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return shadow.animate.transition.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.animate.transition.cljs$core$IFn$_invoke$arity$3 = (function (attr,from,to){
return shadow.animate.transition.cljs$core$IFn$_invoke$arity$5(attr,from,to,"ease",(0));
});

shadow.animate.transition.cljs$core$IFn$_invoke$arity$4 = (function (attr,from,to,timing){
return shadow.animate.transition.cljs$core$IFn$_invoke$arity$5(attr,from,to,timing,(0));
});

shadow.animate.transition.cljs$core$IFn$_invoke$arity$5 = (function (attr,from,to,timing,delay){
if((typeof shadow !== 'undefined') && (typeof shadow.animate !== 'undefined') && (typeof shadow.animate.t_shadow$animate61197 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {shadow.animate.Animation}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
shadow.animate.t_shadow$animate61197 = (function (attr,from,to,timing,delay,meta61198){
this.attr = attr;
this.from = from;
this.to = to;
this.timing = timing;
this.delay = delay;
this.meta61198 = meta61198;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
shadow.animate.t_shadow$animate61197.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_61199,meta61198__$1){
var self__ = this;
var _61199__$1 = this;
return (new shadow.animate.t_shadow$animate61197(self__.attr,self__.from,self__.to,self__.timing,self__.delay,meta61198__$1));
});

shadow.animate.t_shadow$animate61197.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_61199){
var self__ = this;
var _61199__$1 = this;
return self__.meta61198;
});

shadow.animate.t_shadow$animate61197.prototype.shadow$animate$Animation$ = cljs.core.PROTOCOL_SENTINEL;

shadow.animate.t_shadow$animate61197.prototype.shadow$animate$Animation$_animate_from$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([self__.attr,self__.from]);
});

shadow.animate.t_shadow$animate61197.prototype.shadow$animate$Animation$_animate_to$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([self__.attr,self__.to]);
});

shadow.animate.t_shadow$animate61197.prototype.shadow$animate$Animation$_animate_toggles$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
});

shadow.animate.t_shadow$animate61197.prototype.shadow$animate$Animation$_animate_timings$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([self__.attr,self__.timing]);
});

shadow.animate.t_shadow$animate61197.prototype.shadow$animate$Animation$_animate_delays$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([self__.attr,self__.delay]);
});

shadow.animate.t_shadow$animate61197.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"attr","attr",1036399174,null),new cljs.core.Symbol(null,"from","from",-839142725,null),new cljs.core.Symbol(null,"to","to",1832630534,null),new cljs.core.Symbol(null,"timing","timing",-208693668,null),new cljs.core.Symbol(null,"delay","delay",1066306308,null),new cljs.core.Symbol(null,"meta61198","meta61198",-336806248,null)], null);
});

shadow.animate.t_shadow$animate61197.cljs$lang$type = true;

shadow.animate.t_shadow$animate61197.cljs$lang$ctorStr = "shadow.animate/t_shadow$animate61197";

shadow.animate.t_shadow$animate61197.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"shadow.animate/t_shadow$animate61197");
});

/**
 * Positional factory function for shadow.animate/t_shadow$animate61197.
 */
shadow.animate.__GT_t_shadow$animate61197 = (function shadow$animate$__GT_t_shadow$animate61197(attr__$1,from__$1,to__$1,timing__$1,delay__$1,meta61198){
return (new shadow.animate.t_shadow$animate61197(attr__$1,from__$1,to__$1,timing__$1,delay__$1,meta61198));
});

}

return (new shadow.animate.t_shadow$animate61197(attr,from,to,timing,delay,cljs.core.PersistentArrayMap.EMPTY));
});

shadow.animate.transition.cljs$lang$maxFixedArity = 5;

shadow.animate.toggle = (function shadow$animate$toggle(attr,from,to){
if((typeof shadow !== 'undefined') && (typeof shadow.animate !== 'undefined') && (typeof shadow.animate.t_shadow$animate61230 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {shadow.animate.Animation}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
shadow.animate.t_shadow$animate61230 = (function (attr,from,to,meta61231){
this.attr = attr;
this.from = from;
this.to = to;
this.meta61231 = meta61231;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
shadow.animate.t_shadow$animate61230.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_61232,meta61231__$1){
var self__ = this;
var _61232__$1 = this;
return (new shadow.animate.t_shadow$animate61230(self__.attr,self__.from,self__.to,meta61231__$1));
});

shadow.animate.t_shadow$animate61230.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_61232){
var self__ = this;
var _61232__$1 = this;
return self__.meta61231;
});

shadow.animate.t_shadow$animate61230.prototype.shadow$animate$Animation$ = cljs.core.PROTOCOL_SENTINEL;

shadow.animate.t_shadow$animate61230.prototype.shadow$animate$Animation$_animate_to$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
});

shadow.animate.t_shadow$animate61230.prototype.shadow$animate$Animation$_animate_from$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([self__.attr,self__.from]);
});

shadow.animate.t_shadow$animate61230.prototype.shadow$animate$Animation$_animate_toggles$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([self__.attr,self__.to]);
});

shadow.animate.t_shadow$animate61230.prototype.shadow$animate$Animation$_animate_timings$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
});

shadow.animate.t_shadow$animate61230.prototype.shadow$animate$Animation$_animate_delays$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
});

shadow.animate.t_shadow$animate61230.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"attr","attr",1036399174,null),new cljs.core.Symbol(null,"from","from",-839142725,null),new cljs.core.Symbol(null,"to","to",1832630534,null),new cljs.core.Symbol(null,"meta61231","meta61231",-636216164,null)], null);
});

shadow.animate.t_shadow$animate61230.cljs$lang$type = true;

shadow.animate.t_shadow$animate61230.cljs$lang$ctorStr = "shadow.animate/t_shadow$animate61230";

shadow.animate.t_shadow$animate61230.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"shadow.animate/t_shadow$animate61230");
});

/**
 * Positional factory function for shadow.animate/t_shadow$animate61230.
 */
shadow.animate.__GT_t_shadow$animate61230 = (function shadow$animate$toggle_$___GT_t_shadow$animate61230(attr__$1,from__$1,to__$1,meta61231){
return (new shadow.animate.t_shadow$animate61230(attr__$1,from__$1,to__$1,meta61231));
});

}

return (new shadow.animate.t_shadow$animate61230(attr,from,to,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * set attr to value when the animation starts
 */
shadow.animate.set_attr = (function shadow$animate$set_attr(var_args){
var G__61295 = arguments.length;
switch (G__61295) {
case 1:
return shadow.animate.set_attr.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.animate.set_attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.animate.set_attr.cljs$core$IFn$_invoke$arity$1 = (function (attrs){
if((typeof shadow !== 'undefined') && (typeof shadow.animate !== 'undefined') && (typeof shadow.animate.t_shadow$animate61301 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {shadow.animate.Animation}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
shadow.animate.t_shadow$animate61301 = (function (attrs,meta61302){
this.attrs = attrs;
this.meta61302 = meta61302;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
shadow.animate.t_shadow$animate61301.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_61303,meta61302__$1){
var self__ = this;
var _61303__$1 = this;
return (new shadow.animate.t_shadow$animate61301(self__.attrs,meta61302__$1));
});

shadow.animate.t_shadow$animate61301.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_61303){
var self__ = this;
var _61303__$1 = this;
return self__.meta61302;
});

shadow.animate.t_shadow$animate61301.prototype.shadow$animate$Animation$ = cljs.core.PROTOCOL_SENTINEL;

shadow.animate.t_shadow$animate61301.prototype.shadow$animate$Animation$_animate_to$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
});

shadow.animate.t_shadow$animate61301.prototype.shadow$animate$Animation$_animate_from$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.attrs;
});

shadow.animate.t_shadow$animate61301.prototype.shadow$animate$Animation$_animate_toggles$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
});

shadow.animate.t_shadow$animate61301.prototype.shadow$animate$Animation$_animate_timings$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
});

shadow.animate.t_shadow$animate61301.prototype.shadow$animate$Animation$_animate_delays$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
});

shadow.animate.t_shadow$animate61301.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta61302","meta61302",-31366316,null)], null);
});

shadow.animate.t_shadow$animate61301.cljs$lang$type = true;

shadow.animate.t_shadow$animate61301.cljs$lang$ctorStr = "shadow.animate/t_shadow$animate61301";

shadow.animate.t_shadow$animate61301.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"shadow.animate/t_shadow$animate61301");
});

/**
 * Positional factory function for shadow.animate/t_shadow$animate61301.
 */
shadow.animate.__GT_t_shadow$animate61301 = (function shadow$animate$__GT_t_shadow$animate61301(attrs__$1,meta61302){
return (new shadow.animate.t_shadow$animate61301(attrs__$1,meta61302));
});

}

return (new shadow.animate.t_shadow$animate61301(attrs,cljs.core.PersistentArrayMap.EMPTY));
});

shadow.animate.set_attr.cljs$core$IFn$_invoke$arity$2 = (function (attr,value){
return shadow.animate.set_attr.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.createAsIfByAssoc([attr,value]));
});

shadow.animate.set_attr.cljs$lang$maxFixedArity = 2;

/**
 * use to remove a given attribute style when the animation is finished
 * usually only needed to remove attributes we no longer need since they are probably
 * inherited and we only used for previous transitions
 */
shadow.animate.delete_attr = (function shadow$animate$delete_attr(attr){
if((typeof shadow !== 'undefined') && (typeof shadow.animate !== 'undefined') && (typeof shadow.animate.t_shadow$animate61370 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {shadow.animate.Animation}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
shadow.animate.t_shadow$animate61370 = (function (attr,meta61371){
this.attr = attr;
this.meta61371 = meta61371;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
shadow.animate.t_shadow$animate61370.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_61372,meta61371__$1){
var self__ = this;
var _61372__$1 = this;
return (new shadow.animate.t_shadow$animate61370(self__.attr,meta61371__$1));
});

shadow.animate.t_shadow$animate61370.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_61372){
var self__ = this;
var _61372__$1 = this;
return self__.meta61371;
});

shadow.animate.t_shadow$animate61370.prototype.shadow$animate$Animation$ = cljs.core.PROTOCOL_SENTINEL;

shadow.animate.t_shadow$animate61370.prototype.shadow$animate$Animation$_animate_to$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
});

shadow.animate.t_shadow$animate61370.prototype.shadow$animate$Animation$_animate_from$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
});

shadow.animate.t_shadow$animate61370.prototype.shadow$animate$Animation$_animate_toggles$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([self__.attr,null]);
});

shadow.animate.t_shadow$animate61370.prototype.shadow$animate$Animation$_animate_timings$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
});

shadow.animate.t_shadow$animate61370.prototype.shadow$animate$Animation$_animate_delays$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
});

shadow.animate.t_shadow$animate61370.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"attr","attr",1036399174,null),new cljs.core.Symbol(null,"meta61371","meta61371",621301751,null)], null);
});

shadow.animate.t_shadow$animate61370.cljs$lang$type = true;

shadow.animate.t_shadow$animate61370.cljs$lang$ctorStr = "shadow.animate/t_shadow$animate61370";

shadow.animate.t_shadow$animate61370.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"shadow.animate/t_shadow$animate61370");
});

/**
 * Positional factory function for shadow.animate/t_shadow$animate61370.
 */
shadow.animate.__GT_t_shadow$animate61370 = (function shadow$animate$delete_attr_$___GT_t_shadow$animate61370(attr__$1,meta61371){
return (new shadow.animate.t_shadow$animate61370(attr__$1,meta61371));
});

}

return (new shadow.animate.t_shadow$animate61370(attr,cljs.core.PersistentArrayMap.EMPTY));
});
shadow.animate.combine = (function shadow$animate$combine(var_args){
var args__4736__auto__ = [];
var len__4730__auto___61961 = arguments.length;
var i__4731__auto___61962 = (0);
while(true){
if((i__4731__auto___61962 < len__4730__auto___61961)){
args__4736__auto__.push((arguments[i__4731__auto___61962]));

var G__61965 = (i__4731__auto___61962 + (1));
i__4731__auto___61962 = G__61965;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return shadow.animate.combine.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

shadow.animate.combine.cljs$core$IFn$_invoke$arity$variadic = (function (transitions){
var to = cljs.core.PersistentArrayMap.EMPTY;
var from = cljs.core.PersistentArrayMap.EMPTY;
var toggles = cljs.core.PersistentArrayMap.EMPTY;
var timings = cljs.core.PersistentArrayMap.EMPTY;
var delays = cljs.core.PersistentArrayMap.EMPTY;
var transitions__$1 = transitions;
while(true){
var temp__5718__auto__ = cljs.core.first(transitions__$1);
if(cljs.core.truth_(temp__5718__auto__)){
var adef = temp__5718__auto__;
var G__61966 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([to,shadow.animate._animate_to(adef)], 0));
var G__61967 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([from,shadow.animate._animate_from(adef)], 0));
var G__61968 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([toggles,shadow.animate._animate_toggles(adef)], 0));
var G__61969 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([timings,shadow.animate._animate_timings(adef)], 0));
var G__61970 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([delays,shadow.animate._animate_delays(adef)], 0));
var G__61971 = cljs.core.rest(transitions__$1);
to = G__61966;
from = G__61967;
toggles = G__61968;
timings = G__61969;
delays = G__61970;
transitions__$1 = G__61971;
continue;
} else {
if((typeof shadow !== 'undefined') && (typeof shadow.animate !== 'undefined') && (typeof shadow.animate.t_shadow$animate61575 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {shadow.animate.Animation}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
shadow.animate.t_shadow$animate61575 = (function (transitions,to,from,toggles,timings,delays,temp__5718__auto__,meta61576){
this.transitions = transitions;
this.to = to;
this.from = from;
this.toggles = toggles;
this.timings = timings;
this.delays = delays;
this.temp__5718__auto__ = temp__5718__auto__;
this.meta61576 = meta61576;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
shadow.animate.t_shadow$animate61575.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (to,from,toggles,timings,delays,transitions__$1,temp__5718__auto__){
return (function (_61577,meta61576__$1){
var self__ = this;
var _61577__$1 = this;
return (new shadow.animate.t_shadow$animate61575(self__.transitions,self__.to,self__.from,self__.toggles,self__.timings,self__.delays,self__.temp__5718__auto__,meta61576__$1));
});})(to,from,toggles,timings,delays,transitions__$1,temp__5718__auto__))
;

shadow.animate.t_shadow$animate61575.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (to,from,toggles,timings,delays,transitions__$1,temp__5718__auto__){
return (function (_61577){
var self__ = this;
var _61577__$1 = this;
return self__.meta61576;
});})(to,from,toggles,timings,delays,transitions__$1,temp__5718__auto__))
;

shadow.animate.t_shadow$animate61575.prototype.shadow$animate$Animation$ = cljs.core.PROTOCOL_SENTINEL;

shadow.animate.t_shadow$animate61575.prototype.shadow$animate$Animation$_animate_from$arity$1 = ((function (to,from,toggles,timings,delays,transitions__$1,temp__5718__auto__){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.from;
});})(to,from,toggles,timings,delays,transitions__$1,temp__5718__auto__))
;

shadow.animate.t_shadow$animate61575.prototype.shadow$animate$Animation$_animate_to$arity$1 = ((function (to,from,toggles,timings,delays,transitions__$1,temp__5718__auto__){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.to;
});})(to,from,toggles,timings,delays,transitions__$1,temp__5718__auto__))
;

shadow.animate.t_shadow$animate61575.prototype.shadow$animate$Animation$_animate_toggles$arity$1 = ((function (to,from,toggles,timings,delays,transitions__$1,temp__5718__auto__){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.toggles;
});})(to,from,toggles,timings,delays,transitions__$1,temp__5718__auto__))
;

shadow.animate.t_shadow$animate61575.prototype.shadow$animate$Animation$_animate_timings$arity$1 = ((function (to,from,toggles,timings,delays,transitions__$1,temp__5718__auto__){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.timings;
});})(to,from,toggles,timings,delays,transitions__$1,temp__5718__auto__))
;

shadow.animate.t_shadow$animate61575.prototype.shadow$animate$Animation$_animate_delays$arity$1 = ((function (to,from,toggles,timings,delays,transitions__$1,temp__5718__auto__){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.delays;
});})(to,from,toggles,timings,delays,transitions__$1,temp__5718__auto__))
;

shadow.animate.t_shadow$animate61575.getBasis = ((function (to,from,toggles,timings,delays,transitions__$1,temp__5718__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"transitions","transitions",-405684594,null),cljs.core.with_meta(new cljs.core.Symbol(null,"to","to",1832630534,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"any","any",-948528346,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"from","from",-839142725,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"any","any",-948528346,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"toggles","toggles",-1576526290,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"any","any",-948528346,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"timings","timings",-569636600,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"any","any",-948528346,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"delays","delays",-873843187,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"any","any",-948528346,null)], null)),new cljs.core.Symbol(null,"temp__5718__auto__","temp__5718__auto__",1260893202,null),new cljs.core.Symbol(null,"meta61576","meta61576",-101437018,null)], null);
});})(to,from,toggles,timings,delays,transitions__$1,temp__5718__auto__))
;

shadow.animate.t_shadow$animate61575.cljs$lang$type = true;

shadow.animate.t_shadow$animate61575.cljs$lang$ctorStr = "shadow.animate/t_shadow$animate61575";

shadow.animate.t_shadow$animate61575.cljs$lang$ctorPrWriter = ((function (to,from,toggles,timings,delays,transitions__$1,temp__5718__auto__){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"shadow.animate/t_shadow$animate61575");
});})(to,from,toggles,timings,delays,transitions__$1,temp__5718__auto__))
;

/**
 * Positional factory function for shadow.animate/t_shadow$animate61575.
 */
shadow.animate.__GT_t_shadow$animate61575 = ((function (to,from,toggles,timings,delays,transitions__$1,temp__5718__auto__){
return (function shadow$animate$__GT_t_shadow$animate61575(transitions__$2,to__$1,from__$1,toggles__$1,timings__$1,delays__$1,temp__5718__auto____$1,meta61576){
return (new shadow.animate.t_shadow$animate61575(transitions__$2,to__$1,from__$1,toggles__$1,timings__$1,delays__$1,temp__5718__auto____$1,meta61576));
});})(to,from,toggles,timings,delays,transitions__$1,temp__5718__auto__))
;

}

return (new shadow.animate.t_shadow$animate61575(transitions__$1,to,from,toggles,timings,delays,temp__5718__auto__,cljs.core.PersistentArrayMap.EMPTY));
}
break;
}
});

shadow.animate.combine.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
shadow.animate.combine.cljs$lang$applyTo = (function (seq61441){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61441));
});

shadow.animate.fade_in = (function shadow$animate$fade_in(var_args){
var G__61619 = arguments.length;
switch (G__61619) {
case 0:
return shadow.animate.fade_in.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return shadow.animate.fade_in.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.animate.fade_in.cljs$core$IFn$_invoke$arity$0 = (function (){
return shadow.animate.fade_in.cljs$core$IFn$_invoke$arity$1("ease-in");
});

shadow.animate.fade_in.cljs$core$IFn$_invoke$arity$1 = (function (timing_function){
return shadow.animate.transition.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"opacity","opacity",397153780),"0","1",timing_function);
});

shadow.animate.fade_in.cljs$lang$maxFixedArity = 1;

shadow.animate.fade_out = (function shadow$animate$fade_out(var_args){
var G__61625 = arguments.length;
switch (G__61625) {
case 0:
return shadow.animate.fade_out.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return shadow.animate.fade_out.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.animate.fade_out.cljs$core$IFn$_invoke$arity$0 = (function (){
return shadow.animate.fade_in.cljs$core$IFn$_invoke$arity$1("ease-out");
});

shadow.animate.fade_out.cljs$core$IFn$_invoke$arity$1 = (function (timing_function){
return shadow.animate.transition.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"opacity","opacity",397153780),"1","0",timing_function);
});

shadow.animate.fade_out.cljs$lang$maxFixedArity = 1;

shadow.animate.vendor_prefix = goog.dom.vendor.getVendorPrefix();
shadow.animate.vendor_transform = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.animate.vendor_prefix),"-transform"].join(''));
shadow.animate.translate_y = (function shadow$animate$translate_y(var_args){
var G__61633 = arguments.length;
switch (G__61633) {
case 3:
return shadow.animate.translate_y.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.animate.translate_y.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.animate.translate_y.cljs$core$IFn$_invoke$arity$3 = (function (from,to,timing){
return shadow.animate.translate_y.cljs$core$IFn$_invoke$arity$4(from,to,timing,(0));
});

shadow.animate.translate_y.cljs$core$IFn$_invoke$arity$4 = (function (from,to,timing,delay){
if((typeof shadow !== 'undefined') && (typeof shadow.animate !== 'undefined') && (typeof shadow.animate.t_shadow$animate61637 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {shadow.animate.Animation}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
shadow.animate.t_shadow$animate61637 = (function (from,to,timing,delay,meta61638){
this.from = from;
this.to = to;
this.timing = timing;
this.delay = delay;
this.meta61638 = meta61638;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
shadow.animate.t_shadow$animate61637.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_61639,meta61638__$1){
var self__ = this;
var _61639__$1 = this;
return (new shadow.animate.t_shadow$animate61637(self__.from,self__.to,self__.timing,self__.delay,meta61638__$1));
});

shadow.animate.t_shadow$animate61637.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_61639){
var self__ = this;
var _61639__$1 = this;
return self__.meta61638;
});

shadow.animate.t_shadow$animate61637.prototype.shadow$animate$Animation$ = cljs.core.PROTOCOL_SENTINEL;

shadow.animate.t_shadow$animate61637.prototype.shadow$animate$Animation$_animate_from$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),["translateY(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.from),")"].join('')], null);
});

shadow.animate.t_shadow$animate61637.prototype.shadow$animate$Animation$_animate_to$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),["translateY(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.to),")"].join('')], null);
});

shadow.animate.t_shadow$animate61637.prototype.shadow$animate$Animation$_animate_timings$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([shadow.animate.vendor_transform,self__.timing]);
});

shadow.animate.t_shadow$animate61637.prototype.shadow$animate$Animation$_animate_toggles$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
});

shadow.animate.t_shadow$animate61637.prototype.shadow$animate$Animation$_animate_delays$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([shadow.animate.vendor_transform,self__.delay]);
});

shadow.animate.t_shadow$animate61637.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"from","from",-839142725,null),new cljs.core.Symbol(null,"to","to",1832630534,null),new cljs.core.Symbol(null,"timing","timing",-208693668,null),new cljs.core.Symbol(null,"delay","delay",1066306308,null),new cljs.core.Symbol(null,"meta61638","meta61638",1637529796,null)], null);
});

shadow.animate.t_shadow$animate61637.cljs$lang$type = true;

shadow.animate.t_shadow$animate61637.cljs$lang$ctorStr = "shadow.animate/t_shadow$animate61637";

shadow.animate.t_shadow$animate61637.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"shadow.animate/t_shadow$animate61637");
});

/**
 * Positional factory function for shadow.animate/t_shadow$animate61637.
 */
shadow.animate.__GT_t_shadow$animate61637 = (function shadow$animate$__GT_t_shadow$animate61637(from__$1,to__$1,timing__$1,delay__$1,meta61638){
return (new shadow.animate.t_shadow$animate61637(from__$1,to__$1,timing__$1,delay__$1,meta61638));
});

}

return (new shadow.animate.t_shadow$animate61637(from,to,timing,delay,cljs.core.PersistentArrayMap.EMPTY));
});

shadow.animate.translate_y.cljs$lang$maxFixedArity = 4;

shadow.animate.translate_x = (function shadow$animate$translate_x(var_args){
var G__61662 = arguments.length;
switch (G__61662) {
case 3:
return shadow.animate.translate_x.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.animate.translate_x.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.animate.translate_x.cljs$core$IFn$_invoke$arity$3 = (function (from,to,timing){
return shadow.animate.translate_x.cljs$core$IFn$_invoke$arity$4(from,to,timing,(0));
});

shadow.animate.translate_x.cljs$core$IFn$_invoke$arity$4 = (function (from,to,timing,delay){
if((typeof shadow !== 'undefined') && (typeof shadow.animate !== 'undefined') && (typeof shadow.animate.t_shadow$animate61667 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {shadow.animate.Animation}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
shadow.animate.t_shadow$animate61667 = (function (from,to,timing,delay,meta61668){
this.from = from;
this.to = to;
this.timing = timing;
this.delay = delay;
this.meta61668 = meta61668;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
shadow.animate.t_shadow$animate61667.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_61669,meta61668__$1){
var self__ = this;
var _61669__$1 = this;
return (new shadow.animate.t_shadow$animate61667(self__.from,self__.to,self__.timing,self__.delay,meta61668__$1));
});

shadow.animate.t_shadow$animate61667.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_61669){
var self__ = this;
var _61669__$1 = this;
return self__.meta61668;
});

shadow.animate.t_shadow$animate61667.prototype.shadow$animate$Animation$ = cljs.core.PROTOCOL_SENTINEL;

shadow.animate.t_shadow$animate61667.prototype.shadow$animate$Animation$_animate_from$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),["translateX(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.from),")"].join('')], null);
});

shadow.animate.t_shadow$animate61667.prototype.shadow$animate$Animation$_animate_to$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),["translateX(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.to),")"].join('')], null);
});

shadow.animate.t_shadow$animate61667.prototype.shadow$animate$Animation$_animate_timings$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([shadow.animate.vendor_transform,self__.timing]);
});

shadow.animate.t_shadow$animate61667.prototype.shadow$animate$Animation$_animate_toggles$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
});

shadow.animate.t_shadow$animate61667.prototype.shadow$animate$Animation$_animate_delays$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([shadow.animate.vendor_transform,self__.delay]);
});

shadow.animate.t_shadow$animate61667.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"from","from",-839142725,null),new cljs.core.Symbol(null,"to","to",1832630534,null),new cljs.core.Symbol(null,"timing","timing",-208693668,null),new cljs.core.Symbol(null,"delay","delay",1066306308,null),new cljs.core.Symbol(null,"meta61668","meta61668",-1174407208,null)], null);
});

shadow.animate.t_shadow$animate61667.cljs$lang$type = true;

shadow.animate.t_shadow$animate61667.cljs$lang$ctorStr = "shadow.animate/t_shadow$animate61667";

shadow.animate.t_shadow$animate61667.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"shadow.animate/t_shadow$animate61667");
});

/**
 * Positional factory function for shadow.animate/t_shadow$animate61667.
 */
shadow.animate.__GT_t_shadow$animate61667 = (function shadow$animate$__GT_t_shadow$animate61667(from__$1,to__$1,timing__$1,delay__$1,meta61668){
return (new shadow.animate.t_shadow$animate61667(from__$1,to__$1,timing__$1,delay__$1,meta61668));
});

}

return (new shadow.animate.t_shadow$animate61667(from,to,timing,delay,cljs.core.PersistentArrayMap.EMPTY));
});

shadow.animate.translate_x.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=shadow.animate.js.map
