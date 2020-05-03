goog.provide('devtools.format');
goog.require('cljs.core');
goog.require('devtools.context');

/**
 * @interface
 */
devtools.format.IDevtoolsFormat = function(){};

devtools.format._header = (function devtools$format$_header(value){
if((((!((value == null)))) && ((!((value.devtools$format$IDevtoolsFormat$_header$arity$1 == null)))))){
return value.devtools$format$IDevtoolsFormat$_header$arity$1(value);
} else {
var x__4433__auto__ = (((value == null))?null:value);
var m__4434__auto__ = (devtools.format._header[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__4434__auto__.call(null,value));
} else {
var m__4431__auto__ = (devtools.format._header["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__4431__auto__.call(null,value));
} else {
throw cljs.core.missing_protocol("IDevtoolsFormat.-header",value);
}
}
}
});

devtools.format._has_body = (function devtools$format$_has_body(value){
if((((!((value == null)))) && ((!((value.devtools$format$IDevtoolsFormat$_has_body$arity$1 == null)))))){
return value.devtools$format$IDevtoolsFormat$_has_body$arity$1(value);
} else {
var x__4433__auto__ = (((value == null))?null:value);
var m__4434__auto__ = (devtools.format._has_body[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__4434__auto__.call(null,value));
} else {
var m__4431__auto__ = (devtools.format._has_body["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__4431__auto__.call(null,value));
} else {
throw cljs.core.missing_protocol("IDevtoolsFormat.-has-body",value);
}
}
}
});

devtools.format._body = (function devtools$format$_body(value){
if((((!((value == null)))) && ((!((value.devtools$format$IDevtoolsFormat$_body$arity$1 == null)))))){
return value.devtools$format$IDevtoolsFormat$_body$arity$1(value);
} else {
var x__4433__auto__ = (((value == null))?null:value);
var m__4434__auto__ = (devtools.format._body[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__4434__auto__.call(null,value));
} else {
var m__4431__auto__ = (devtools.format._body["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__4431__auto__.call(null,value));
} else {
throw cljs.core.missing_protocol("IDevtoolsFormat.-body",value);
}
}
}
});

devtools.format.setup_BANG_ = (function devtools$format$setup_BANG_(){
if(cljs.core.truth_(devtools.format._STAR_setup_done_STAR_)){
return null;
} else {
devtools.format._STAR_setup_done_STAR_ = true;

devtools.format.make_template_fn = (function (){var temp__5718__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5718__auto__)){
var o40825 = temp__5718__auto__;
var temp__5718__auto____$1 = (o40825["formatters"]);
if(cljs.core.truth_(temp__5718__auto____$1)){
var o40826 = temp__5718__auto____$1;
var temp__5718__auto____$2 = (o40826["templating"]);
if(cljs.core.truth_(temp__5718__auto____$2)){
var o40827 = temp__5718__auto____$2;
return (o40827["make_template"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_group_fn = (function (){var temp__5718__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5718__auto__)){
var o40840 = temp__5718__auto__;
var temp__5718__auto____$1 = (o40840["formatters"]);
if(cljs.core.truth_(temp__5718__auto____$1)){
var o40841 = temp__5718__auto____$1;
var temp__5718__auto____$2 = (o40841["templating"]);
if(cljs.core.truth_(temp__5718__auto____$2)){
var o40842 = temp__5718__auto____$2;
return (o40842["make_group"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_reference_fn = (function (){var temp__5718__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5718__auto__)){
var o40848 = temp__5718__auto__;
var temp__5718__auto____$1 = (o40848["formatters"]);
if(cljs.core.truth_(temp__5718__auto____$1)){
var o40849 = temp__5718__auto____$1;
var temp__5718__auto____$2 = (o40849["templating"]);
if(cljs.core.truth_(temp__5718__auto____$2)){
var o40850 = temp__5718__auto____$2;
return (o40850["make_reference"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_surrogate_fn = (function (){var temp__5718__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5718__auto__)){
var o40857 = temp__5718__auto__;
var temp__5718__auto____$1 = (o40857["formatters"]);
if(cljs.core.truth_(temp__5718__auto____$1)){
var o40858 = temp__5718__auto____$1;
var temp__5718__auto____$2 = (o40858["templating"]);
if(cljs.core.truth_(temp__5718__auto____$2)){
var o40859 = temp__5718__auto____$2;
return (o40859["make_surrogate"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.render_markup_fn = (function (){var temp__5718__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5718__auto__)){
var o40860 = temp__5718__auto__;
var temp__5718__auto____$1 = (o40860["formatters"]);
if(cljs.core.truth_(temp__5718__auto____$1)){
var o40861 = temp__5718__auto____$1;
var temp__5718__auto____$2 = (o40861["templating"]);
if(cljs.core.truth_(temp__5718__auto____$2)){
var o40862 = temp__5718__auto____$2;
return (o40862["render_markup"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_header_GT__fn = (function (){var temp__5718__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5718__auto__)){
var o40871 = temp__5718__auto__;
var temp__5718__auto____$1 = (o40871["formatters"]);
if(cljs.core.truth_(temp__5718__auto____$1)){
var o40872 = temp__5718__auto____$1;
var temp__5718__auto____$2 = (o40872["markup"]);
if(cljs.core.truth_(temp__5718__auto____$2)){
var o40873 = temp__5718__auto____$2;
return (o40873["_LT_header_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_standard_body_GT__fn = (function (){var temp__5718__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5718__auto__)){
var o40883 = temp__5718__auto__;
var temp__5718__auto____$1 = (o40883["formatters"]);
if(cljs.core.truth_(temp__5718__auto____$1)){
var o40884 = temp__5718__auto____$1;
var temp__5718__auto____$2 = (o40884["markup"]);
if(cljs.core.truth_(temp__5718__auto____$2)){
var o40885 = temp__5718__auto____$2;
return (o40885["_LT_standard_body_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

if(cljs.core.truth_(devtools.format.make_template_fn)){
} else {
throw (new Error("Assert failed: make-template-fn"));
}

if(cljs.core.truth_(devtools.format.make_group_fn)){
} else {
throw (new Error("Assert failed: make-group-fn"));
}

if(cljs.core.truth_(devtools.format.make_reference_fn)){
} else {
throw (new Error("Assert failed: make-reference-fn"));
}

if(cljs.core.truth_(devtools.format.make_surrogate_fn)){
} else {
throw (new Error("Assert failed: make-surrogate-fn"));
}

if(cljs.core.truth_(devtools.format.render_markup_fn)){
} else {
throw (new Error("Assert failed: render-markup-fn"));
}

if(cljs.core.truth_(devtools.format._LT_header_GT__fn)){
} else {
throw (new Error("Assert failed: <header>-fn"));
}

if(cljs.core.truth_(devtools.format._LT_standard_body_GT__fn)){
return null;
} else {
throw (new Error("Assert failed: <standard-body>-fn"));
}
}
});
devtools.format.render_markup = (function devtools$format$render_markup(var_args){
var args__4736__auto__ = [];
var len__4730__auto___41140 = arguments.length;
var i__4731__auto___41141 = (0);
while(true){
if((i__4731__auto___41141 < len__4730__auto___41140)){
args__4736__auto__.push((arguments[i__4731__auto___41141]));

var G__41145 = (i__4731__auto___41141 + (1));
i__4731__auto___41141 = G__41145;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.render_markup_fn,args);
});

devtools.format.render_markup.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.format.render_markup.cljs$lang$applyTo = (function (seq40893){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq40893));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__4736__auto__ = [];
var len__4730__auto___41150 = arguments.length;
var i__4731__auto___41151 = (0);
while(true){
if((i__4731__auto___41151 < len__4730__auto___41150)){
args__4736__auto__.push((arguments[i__4731__auto___41151]));

var G__41153 = (i__4731__auto___41151 + (1));
i__4731__auto___41151 = G__41153;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_template_fn,args);
});

devtools.format.make_template.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.format.make_template.cljs$lang$applyTo = (function (seq40910){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq40910));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__4736__auto__ = [];
var len__4730__auto___41159 = arguments.length;
var i__4731__auto___41160 = (0);
while(true){
if((i__4731__auto___41160 < len__4730__auto___41159)){
args__4736__auto__.push((arguments[i__4731__auto___41160]));

var G__41161 = (i__4731__auto___41160 + (1));
i__4731__auto___41160 = G__41161;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_group_fn,args);
});

devtools.format.make_group.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.format.make_group.cljs$lang$applyTo = (function (seq40923){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq40923));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__4736__auto__ = [];
var len__4730__auto___41167 = arguments.length;
var i__4731__auto___41168 = (0);
while(true){
if((i__4731__auto___41168 < len__4730__auto___41167)){
args__4736__auto__.push((arguments[i__4731__auto___41168]));

var G__41169 = (i__4731__auto___41168 + (1));
i__4731__auto___41168 = G__41169;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_surrogate_fn,args);
});

devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq40932){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq40932));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__4736__auto__ = [];
var len__4730__auto___41175 = arguments.length;
var i__4731__auto___41176 = (0);
while(true){
if((i__4731__auto___41176 < len__4730__auto___41175)){
args__4736__auto__.push((arguments[i__4731__auto___41176]));

var G__41177 = (i__4731__auto___41176 + (1));
i__4731__auto___41176 = G__41177;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_template_fn,args);
});

devtools.format.template.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.format.template.cljs$lang$applyTo = (function (seq40956){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq40956));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__4736__auto__ = [];
var len__4730__auto___41186 = arguments.length;
var i__4731__auto___41188 = (0);
while(true){
if((i__4731__auto___41188 < len__4730__auto___41186)){
args__4736__auto__.push((arguments[i__4731__auto___41188]));

var G__41189 = (i__4731__auto___41188 + (1));
i__4731__auto___41188 = G__41189;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_group_fn,args);
});

devtools.format.group.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.format.group.cljs$lang$applyTo = (function (seq40973){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq40973));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__4736__auto__ = [];
var len__4730__auto___41195 = arguments.length;
var i__4731__auto___41196 = (0);
while(true){
if((i__4731__auto___41196 < len__4730__auto___41195)){
args__4736__auto__.push((arguments[i__4731__auto___41196]));

var G__41197 = (i__4731__auto___41196 + (1));
i__4731__auto___41196 = G__41197;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_surrogate_fn,args);
});

devtools.format.surrogate.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.format.surrogate.cljs$lang$applyTo = (function (seq40983){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq40983));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__4736__auto__ = [];
var len__4730__auto___41201 = arguments.length;
var i__4731__auto___41202 = (0);
while(true){
if((i__4731__auto___41202 < len__4730__auto___41201)){
args__4736__auto__.push((arguments[i__4731__auto___41202]));

var G__41204 = (i__4731__auto___41202 + (1));
i__4731__auto___41202 = G__41204;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__41006){
var vec__41008 = p__41006;
var state_override = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41008,(0),null);
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__41008,state_override){
return (function (p1__40995_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__40995_SHARP_,state_override], 0));
});})(vec__41008,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
devtools.format.reference.cljs$lang$applyTo = (function (seq40996){
var G__40997 = cljs.core.first(seq40996);
var seq40996__$1 = cljs.core.next(seq40996);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40997,seq40996__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_();

var G__41020 = new cljs.core.Keyword(null,"ol","ol",932524051);
var G__41021 = new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615);
var G__41022 = (function (){var G__41032 = new cljs.core.Keyword(null,"li","li",723558921);
var G__41033 = new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955);
var G__41034 = (devtools.format.make_reference_fn.cljs$core$IFn$_invoke$arity$1 ? devtools.format.make_reference_fn.cljs$core$IFn$_invoke$arity$1(target) : devtools.format.make_reference_fn.call(null,target));
return (devtools.format.make_template_fn.cljs$core$IFn$_invoke$arity$3 ? devtools.format.make_template_fn.cljs$core$IFn$_invoke$arity$3(G__41032,G__41033,G__41034) : devtools.format.make_template_fn.call(null,G__41032,G__41033,G__41034));
})();
return (devtools.format.make_template_fn.cljs$core$IFn$_invoke$arity$3 ? devtools.format.make_template_fn.cljs$core$IFn$_invoke$arity$3(G__41020,G__41021,G__41022) : devtools.format.make_template_fn.call(null,G__41020,G__41021,G__41022));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__4736__auto__ = [];
var len__4730__auto___41220 = arguments.length;
var i__4731__auto___41221 = (0);
while(true){
if((i__4731__auto___41221 < len__4730__auto___41220)){
args__4736__auto__.push((arguments[i__4731__auto___41221]));

var G__41222 = (i__4731__auto___41221 + (1));
i__4731__auto___41221 = G__41222;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format._LT_header_GT__fn,args)], 0));
});

devtools.format.build_header.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.format.build_header.cljs$lang$applyTo = (function (seq41041){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41041));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__4736__auto__ = [];
var len__4730__auto___41226 = arguments.length;
var i__4731__auto___41227 = (0);
while(true){
if((i__4731__auto___41227 < len__4730__auto___41226)){
args__4736__auto__.push((arguments[i__4731__auto___41227]));

var G__41228 = (i__4731__auto___41227 + (1));
i__4731__auto___41227 = G__41228;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_();

var args = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format._LT_standard_body_GT__fn,args)], 0));
});

devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq41054){
var G__41055 = cljs.core.first(seq41054);
var seq41054__$1 = cljs.core.next(seq41054);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41055,seq41054__$1);
});


//# sourceMappingURL=devtools.format.js.map
