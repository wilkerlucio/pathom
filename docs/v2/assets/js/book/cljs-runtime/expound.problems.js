goog.provide('expound.problems');
goog.require('cljs.core');
goog.require('expound.paths');
goog.require('cljs.spec.alpha');
goog.require('clojure.walk');
goog.require('clojure.string');
goog.require('expound.printer');
goog.require('expound.ansi');
expound.problems.blank_form = (function expound$problems$blank_form(form){
if(cljs.core.map_QMARK_(form)){
return cljs.core.zipmap(cljs.core.keys(form),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("expound.problems","irrelevant","expound.problems/irrelevant",2090226124)));
} else {
if(cljs.core.vector_QMARK_(form)){
return cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.count(form),new cljs.core.Keyword("expound.problems","irrelevant","expound.problems/irrelevant",2090226124)));
} else {
if(cljs.core.set_QMARK_(form)){
return form;
} else {
if(((cljs.core.list_QMARK_(form)) || (cljs.core.seq_QMARK_(form)))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.list,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.count(form),new cljs.core.Keyword("expound.problems","irrelevant","expound.problems/irrelevant",2090226124)));
} else {
return new cljs.core.Keyword("expound.problems","irrelevant","expound.problems/irrelevant",2090226124);

}
}
}
}
});
cljs.spec.alpha.def_impl(new cljs.core.Symbol("expound.problems","summary-form","expound.problems/summary-form",514693822,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"show-valid-values?","show-valid-values?",-587258094),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword(null,"highlighted-path","highlighted-path",-511870),new cljs.core.Keyword("expound","path","expound/path",-1026376555))),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"show-valid-values?","show-valid-values?",-587258094),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword(null,"highlighted-path","highlighted-path",-511870),new cljs.core.Keyword("expound","path","expound/path",-1026376555)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show-valid-values?","show-valid-values?",-587258094),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Keyword(null,"highlighted-path","highlighted-path",-511870)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.boolean_QMARK_,cljs.core.any_QMARK_,new cljs.core.Keyword("expound","path","expound/path",-1026376555)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword("expound","path","expound/path",-1026376555)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"show-valid-values?","show-valid-values?",-587258094),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword(null,"highlighted-path","highlighted-path",-511870),new cljs.core.Keyword("expound","path","expound/path",-1026376555)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_,null,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),null,null,null));
expound.problems.summary_form = (function expound$problems$summary_form(show_valid_values_QMARK_,form,in$){
while(true){
var vec__69587 = in$;
var seq__69588 = cljs.core.seq(vec__69587);
var first__69589 = cljs.core.first(seq__69588);
var seq__69588__$1 = cljs.core.next(seq__69588);
var k = first__69589;
var rst = seq__69588__$1;
var rst__$1 = (function (){var or__4131__auto__ = rst;
if(or__4131__auto__){
return or__4131__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})();
var displayed_form = (cljs.core.truth_(show_valid_values_QMARK_)?form:expound.problems.blank_form(form));
if(cljs.core.empty_QMARK_(in$)){
return new cljs.core.Keyword("expound.problems","relevant","expound.problems/relevant",1188199036);
} else {
if(((cljs.core.map_QMARK_(form)) && (expound.paths.kps_QMARK_(k)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(displayed_form,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(k)),(function (){var G__69593 = show_valid_values_QMARK_;
var G__69594 = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(k);
var G__69595 = rst__$1;
return (expound.problems.summary_form.cljs$core$IFn$_invoke$arity$3 ? expound.problems.summary_form.cljs$core$IFn$_invoke$arity$3(G__69593,G__69594,G__69595) : expound.problems.summary_form.call(null,G__69593,G__69594,G__69595));
})(),new cljs.core.Keyword("expound.problems","irrelevant","expound.problems/irrelevant",2090226124));
} else {
if(((cljs.core.map_QMARK_(form)) && (expound.paths.kvps_QMARK_(k)))){
var G__69734 = show_valid_values_QMARK_;
var G__69735 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.seq(form),new cljs.core.Keyword(null,"idx","idx",1053688473).cljs$core$IFn$_invoke$arity$1(k));
var G__69736 = rst__$1;
show_valid_values_QMARK_ = G__69734;
form = G__69735;
in$ = G__69736;
continue;
} else {
if(cljs.core.associative_QMARK_(form)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(displayed_form,k,(function (){var G__69602 = show_valid_values_QMARK_;
var G__69603 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(form,k);
var G__69604 = rst__$1;
return (expound.problems.summary_form.cljs$core$IFn$_invoke$arity$3 ? expound.problems.summary_form.cljs$core$IFn$_invoke$arity$3(G__69602,G__69603,G__69604) : expound.problems.summary_form.call(null,G__69602,G__69603,G__69604));
})());
} else {
if(((cljs.core.int_QMARK_(k)) && (cljs.core.seq_QMARK_(form)))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.list,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.vec(displayed_form),k,(function (){var G__69609 = show_valid_values_QMARK_;
var G__69610 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(form,k);
var G__69611 = rst__$1;
return (expound.problems.summary_form.cljs$core$IFn$_invoke$arity$3 ? expound.problems.summary_form.cljs$core$IFn$_invoke$arity$3(G__69609,G__69610,G__69611) : expound.problems.summary_form.call(null,G__69609,G__69610,G__69611));
})()));
} else {
if(((cljs.core.int_QMARK_(k)) && (cljs.core.set_QMARK_(form)))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.vec(displayed_form),k,(function (){var G__69613 = show_valid_values_QMARK_;
var G__69614 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.seq(form),k);
var G__69615 = rst__$1;
return (expound.problems.summary_form.cljs$core$IFn$_invoke$arity$3 ? expound.problems.summary_form.cljs$core$IFn$_invoke$arity$3(G__69613,G__69614,G__69615) : expound.problems.summary_form.call(null,G__69613,G__69614,G__69615));
})()));
} else {
if(((cljs.core.int_QMARK_(k)) && (cljs.core.list_QMARK_(form)))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.List.EMPTY,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.vec(displayed_form),k,(function (){var G__69623 = show_valid_values_QMARK_;
var G__69624 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.seq(form),k);
var G__69625 = rst__$1;
return (expound.problems.summary_form.cljs$core$IFn$_invoke$arity$3 ? expound.problems.summary_form.cljs$core$IFn$_invoke$arity$3(G__69623,G__69624,G__69625) : expound.problems.summary_form.call(null,G__69623,G__69624,G__69625));
})()));
} else {
if(((cljs.core.int_QMARK_(k)) && (typeof form === 'string'))){
return clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.vec(form),k,new cljs.core.Keyword("expound.problems","relevant","expound.problems/relevant",1188199036)));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Cannot find path segment in form. This can be caused by using conformers to transform values, which is not supported in Expound",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null));

}
}
}
}
}
}
}
}
break;
}
});
expound.problems.highlight_line = (function expound$problems$highlight_line(prefix,replacement){
var max_width = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__69629_SHARP_){
return ((cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__69629_SHARP_)).length);
}),clojure.string.split_lines(replacement)));
return expound.printer.indent.cljs$core$IFn$_invoke$arity$2(((cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix)).length),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(max_width,"^")));
});
expound.problems.adjust_in = (function expound$problems$adjust_in(form,problem){
var in1 = expound.paths.in_with_kps(form,new cljs.core.Keyword(null,"val","val",128701612).cljs$core$IFn$_invoke$arity$1(problem),new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(problem),cljs.core.PersistentVector.EMPTY);
var in2 = (function (){var paths = expound.paths.paths_to_value(form,new cljs.core.Keyword(null,"val","val",128701612).cljs$core$IFn$_invoke$arity$1(problem),cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(paths))){
return cljs.core.first(paths);
} else {
return null;
}
})();
var in3 = (function (){try{return expound.paths.in_with_kps(form,cljs.spec.alpha.unform(cljs.core.last(new cljs.core.Keyword(null,"via","via",-1904457336).cljs$core$IFn$_invoke$arity$1(problem)),new cljs.core.Keyword(null,"val","val",128701612).cljs$core$IFn$_invoke$arity$1(problem)),new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(problem),cljs.core.PersistentVector.EMPTY);
}catch (e69635){var _e = e69635;
return null;
}})();
var new_in = (cljs.core.truth_(in1)?in1:(cljs.core.truth_(in2)?in2:(cljs.core.truth_(in3)?in3:(cljs.core.truth_((function (){var or__4131__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.list(new cljs.core.Symbol(null,"apply","apply",-1334050276,null),new cljs.core.Symbol(null,"fn","fn",465265323,null)),new cljs.core.Keyword(null,"pred","pred",1927423397).cljs$core$IFn$_invoke$arity$1(problem));
if(or__4131__auto__){
return or__4131__auto__;
} else {
var G__69643 = cljs.core.first(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(problem));
var fexpr__69642 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ret","ret",-468222814),null], null), null);
return (fexpr__69642.cljs$core$IFn$_invoke$arity$1 ? fexpr__69642.cljs$core$IFn$_invoke$arity$1(G__69643) : fexpr__69642.call(null,G__69643));
}
})())?new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(problem):null
))));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(problem,new cljs.core.Keyword("expound","in","expound/in",-1900412298),new_in);
});
expound.problems.adjust_path = (function expound$problems$adjust_path(failure,problem){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(problem,new cljs.core.Keyword("expound","path","expound/path",-1026376555),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"instrument","instrument",-960698844),failure))?cljs.core.vec(cljs.core.rest(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(problem))):new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(problem)));
});
expound.problems.add_spec = (function expound$problems$add_spec(spec,problem){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(problem,new cljs.core.Keyword(null,"spec","spec",347520401),spec);
});
expound.problems.fix_via = (function expound$problems$fix_via(spec,problem){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(spec,cljs.core.first(new cljs.core.Keyword(null,"via","via",-1904457336).cljs$core$IFn$_invoke$arity$1(problem)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(problem,new cljs.core.Keyword("expound","via","expound/via",-595987777),new cljs.core.Keyword(null,"via","via",-1904457336).cljs$core$IFn$_invoke$arity$1(problem));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(problem,new cljs.core.Keyword("expound","via","expound/via",-595987777),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec], null),new cljs.core.Keyword(null,"via","via",-1904457336).cljs$core$IFn$_invoke$arity$1(problem)));
}
});
expound.problems.missing_spec_QMARK_ = (function expound$problems$missing_spec_QMARK_(_failure,problem){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("no method",new cljs.core.Keyword(null,"reason","reason",-2070751759).cljs$core$IFn$_invoke$arity$1(problem));
});
expound.problems.not_in_set_QMARK_ = (function expound$problems$not_in_set_QMARK_(_failure,problem){
return cljs.core.set_QMARK_(new cljs.core.Keyword(null,"pred","pred",1927423397).cljs$core$IFn$_invoke$arity$1(problem));
});
expound.problems.fspec_exception_failure_QMARK_ = (function expound$problems$fspec_exception_failure_QMARK_(failure,problem){
return ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"instrument","instrument",-960698844),failure)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"check-failed","check-failed",-1316157547),failure)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.list(new cljs.core.Symbol(null,"apply","apply",-1334050276,null),new cljs.core.Symbol(null,"fn","fn",465265323,null)),new cljs.core.Keyword(null,"pred","pred",1927423397).cljs$core$IFn$_invoke$arity$1(problem))));
});
expound.problems.fspec_ret_failure_QMARK_ = (function expound$problems$fspec_ret_failure_QMARK_(failure,problem){
return ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"instrument","instrument",-960698844),failure)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"check-failed","check-failed",-1316157547),failure)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ret","ret",-468222814),cljs.core.first(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(problem)))));
});
expound.problems.fspec_fn_failure_QMARK_ = (function expound$problems$fspec_fn_failure_QMARK_(failure,problem){
return ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"instrument","instrument",-960698844),failure)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"check-failed","check-failed",-1316157547),failure)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fn","fn",-1175266204),cljs.core.first(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(problem)))));
});
expound.problems.check_ret_failure_QMARK_ = (function expound$problems$check_ret_failure_QMARK_(failure,problem){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"check-failed","check-failed",-1316157547),failure)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ret","ret",-468222814),cljs.core.first(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(problem)))));
});
expound.problems.check_fn_failure_QMARK_ = (function expound$problems$check_fn_failure_QMARK_(failure,problem){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"check-failed","check-failed",-1316157547),failure)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fn","fn",-1175266204),cljs.core.first(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(problem)))));
});
expound.problems.missing_key_QMARK_ = (function expound$problems$missing_key_QMARK_(_failure,problem){
var pred = new cljs.core.Keyword(null,"pred","pred",1927423397).cljs$core$IFn$_invoke$arity$1(problem);
return ((cljs.core.seq_QMARK_(pred)) && (((2) < cljs.core.count(pred))) && (cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("expound.spec","contains-key-pred","expound.spec/contains-key-pred",-989075236),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(pred,(2)))));
});
expound.problems.insufficient_input_QMARK_ = (function expound$problems$insufficient_input_QMARK_(_failure,problem){
return cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["Insufficient input",null], null), null),new cljs.core.Keyword(null,"reason","reason",-2070751759).cljs$core$IFn$_invoke$arity$1(problem));
});
expound.problems.extra_input_QMARK_ = (function expound$problems$extra_input_QMARK_(_failure,problem){
return cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["Extra input",null], null), null),new cljs.core.Keyword(null,"reason","reason",-2070751759).cljs$core$IFn$_invoke$arity$1(problem));
});
expound.problems.ptype = (function expound$problems$ptype(failure,problem){
if(cljs.core.truth_(new cljs.core.Keyword("expound.spec.problem","type","expound.spec.problem/type",-862044659).cljs$core$IFn$_invoke$arity$1(problem))){
return new cljs.core.Keyword("expound.spec.problem","type","expound.spec.problem/type",-862044659).cljs$core$IFn$_invoke$arity$1(problem);
} else {
if(expound.problems.insufficient_input_QMARK_(failure,problem)){
return new cljs.core.Keyword("expound.problem","insufficient-input","expound.problem/insufficient-input",1437497436);
} else {
if(expound.problems.extra_input_QMARK_(failure,problem)){
return new cljs.core.Keyword("expound.problem","extra-input","expound.problem/extra-input",2043170217);
} else {
if(expound.problems.not_in_set_QMARK_(failure,problem)){
return new cljs.core.Keyword("expound.problem","not-in-set","expound.problem/not-in-set",14506077);
} else {
if(expound.problems.missing_key_QMARK_(failure,problem)){
return new cljs.core.Keyword("expound.problem","missing-key","expound.problem/missing-key",-750683408);
} else {
if(expound.problems.missing_spec_QMARK_(failure,problem)){
return new cljs.core.Keyword("expound.problem","missing-spec","expound.problem/missing-spec",-1439599438);
} else {
if(expound.problems.fspec_exception_failure_QMARK_(failure,problem)){
return new cljs.core.Keyword("expound.problem","fspec-exception-failure","expound.problem/fspec-exception-failure",-398312942);
} else {
if(expound.problems.fspec_ret_failure_QMARK_(failure,problem)){
return new cljs.core.Keyword("expound.problem","fspec-ret-failure","expound.problem/fspec-ret-failure",1192937934);
} else {
if(expound.problems.fspec_fn_failure_QMARK_(failure,problem)){
return new cljs.core.Keyword("expound.problem","fspec-fn-failure","expound.problem/fspec-fn-failure",-814692716);
} else {
if(expound.problems.check_ret_failure_QMARK_(failure,problem)){
return new cljs.core.Keyword("expound.problem","check-ret-failure","expound.problem/check-ret-failure",1795987483);
} else {
if(expound.problems.check_fn_failure_QMARK_(failure,problem)){
return new cljs.core.Keyword("expound.problem","check-fn-failure","expound.problem/check-fn-failure",443478179);
} else {
return new cljs.core.Keyword("expound.problem","unknown","expound.problem/unknown",1364832957);

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
});
expound.problems.escape_replacement = (function expound$problems$escape_replacement(pattern,s){
return clojure.string.replace(s,/\$/,"$$$$");
});
/**
 * Given a problem, returns a pretty printed
 * string that highlights the problem value
 */
expound.problems.highlighted_value = (function expound$problems$highlighted_value(opts,problem){
var map__69705 = problem;
var map__69705__$1 = (((((!((map__69705 == null))))?(((((map__69705.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69705.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69705):map__69705);
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69705__$1,new cljs.core.Keyword("expound","form","expound/form",-264680632));
var in$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69705__$1,new cljs.core.Keyword("expound","in","expound/in",-1900412298));
var map__69706 = opts;
var map__69706__$1 = (((((!((map__69706 == null))))?(((((map__69706.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69706.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69706):map__69706);
var show_valid_values_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__69706__$1,new cljs.core.Keyword(null,"show-valid-values?","show-valid-values?",-587258094),false);
var printed_val = expound.printer.pprint_str(expound.paths.value_in(form,in$));
var relevant = ["(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("expound.problems","relevant","expound.problems/relevant",1188199036)),"|(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("expound.problems","kv-relevant","expound.problems/kv-relevant",229013575)),"\\s+",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("expound.problems","kv-relevant","expound.problems/kv-relevant",229013575)),"))"].join('');
var regex = cljs.core.re_pattern(["(.*)",relevant,".*"].join(''));
var s = (function (){var _STAR_print_namespace_maps_STAR__orig_val__69714 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_namespace_maps_STAR__temp_val__69715 = false;
cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__69715;

try{return expound.printer.pprint_str(clojure.walk.prewalk_replace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("expound.problems","irrelevant","expound.problems/irrelevant",2090226124),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),expound.problems.summary_form(show_valid_values_QMARK_,form,in$)));
}finally {cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__69714;
}})();
var vec__69707 = cljs.core.re_find(regex,s);
var seq__69708 = cljs.core.seq(vec__69707);
var first__69709 = cljs.core.first(seq__69708);
var seq__69708__$1 = cljs.core.next(seq__69708);
var line = first__69709;
var first__69709__$1 = cljs.core.first(seq__69708__$1);
var seq__69708__$2 = cljs.core.next(seq__69708__$1);
var prefix = first__69709__$1;
var _more = seq__69708__$2;
var highlighted_line = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.replace(line,cljs.core.re_pattern(relevant),expound.problems.escape_replacement(cljs.core.re_pattern(relevant),expound.printer.indent.cljs$core$IFn$_invoke$arity$3((0),cljs.core.count(prefix),expound.ansi.color.cljs$core$IFn$_invoke$arity$variadic(printed_val,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"bad-value","bad-value",-139100659)], 0)))))),"\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expound.ansi.color.cljs$core$IFn$_invoke$arity$variadic(expound.problems.highlight_line(prefix,printed_val),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"pointer","pointer",85071187)], 0)))].join('');
return expound.printer.no_trailing_whitespace(clojure.string.replace(s,line,expound.problems.escape_replacement(line,highlighted_line)));
});
expound.problems.annotate = (function expound$problems$annotate(explain_data){
var map__69721 = explain_data;
var map__69721__$1 = (((((!((map__69721 == null))))?(((((map__69721.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69721.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69721):map__69721);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69721__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69721__$1,new cljs.core.Keyword("cljs.spec.alpha","value","cljs.spec.alpha/value",1974786274));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69721__$1,new cljs.core.Keyword("cljs.spec.alpha","args","cljs.spec.alpha/args",1870769783));
var ret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69721__$1,new cljs.core.Keyword("cljs.spec.alpha","ret","cljs.spec.alpha/ret",1165997503));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69721__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var failure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69721__$1,new cljs.core.Keyword("cljs.spec.alpha","failure","cljs.spec.alpha/failure",188258592));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69721__$1,new cljs.core.Keyword("cljs.spec.alpha","spec","cljs.spec.alpha/spec",1947137578));
var caller = (function (){var or__4131__auto__ = new cljs.core.Keyword("clojure.spec.test.alpha","caller","clojure.spec.test.alpha/caller",-706822212).cljs$core$IFn$_invoke$arity$1(explain_data);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword("orchestra.spec.test","caller","orchestra.spec.test/caller",-686413347).cljs$core$IFn$_invoke$arity$1(explain_data);
}
})();
var form = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"instrument","instrument",-960698844),failure))?value:((cljs.core.contains_QMARK_(explain_data,new cljs.core.Keyword("cljs.spec.alpha","ret","cljs.spec.alpha/ret",1165997503)))?ret:((cljs.core.contains_QMARK_(explain_data,new cljs.core.Keyword("cljs.spec.alpha","args","cljs.spec.alpha/args",1870769783)))?args:((cljs.core.contains_QMARK_(explain_data,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443)))?fn:null))));
var problems_SINGLEQUOTE_ = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$variadic(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(expound.problems.adjust_in,form),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(expound.problems.adjust_path,failure),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(expound.problems.add_spec,spec),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.partial.cljs$core$IFn$_invoke$arity$2(expound.problems.fix_via,spec),((function (map__69721,map__69721__$1,problems,value,args,ret,fn,failure,spec,caller,form){
return (function (p1__69717_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__69717_SHARP_,new cljs.core.Keyword("expound","form","expound/form",-264680632),form);
});})(map__69721,map__69721__$1,problems,value,args,ret,fn,failure,spec,caller,form))
,((function (map__69721,map__69721__$1,problems,value,args,ret,fn,failure,spec,caller,form){
return (function (p1__69718_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__69718_SHARP_,new cljs.core.Keyword("expound.spec.problem","type","expound.spec.problem/type",-862044659),expound.problems.ptype(failure,p1__69718_SHARP_));
});})(map__69721,map__69721__$1,problems,value,args,ret,fn,failure,spec,caller,form))
], 0)),problems);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(explain_data,new cljs.core.Keyword("expound","form","expound/form",-264680632),form,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("expound","caller","expound/caller",-503638870),caller,new cljs.core.Keyword("expound","problems","expound/problems",1257773984),problems_SINGLEQUOTE_], 0));
});
expound.problems.type = expound.problems.ptype;
expound.problems.value_in = expound.paths.value_in;

//# sourceMappingURL=expound.problems.js.map
