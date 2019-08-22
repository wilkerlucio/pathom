goog.provide('com.wsscode.pathom.viz.codemirror');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('com.wsscode.fuzzy');
goog.require('cljs.spec.alpha');
goog.require('clojure.string');
goog.require('cljsjs.codemirror');
goog.require('com.wsscode.pathom.connect');
goog.require('fulcro.client.dom');
goog.require('fulcro.client.primitives');
goog.require('goog.object');
var module$node_modules$codemirror$mode$clojure$clojure=shadow.js.require("module$node_modules$codemirror$mode$clojure$clojure", {});
var module$node_modules$codemirror$addon$edit$matchbrackets=shadow.js.require("module$node_modules$codemirror$addon$edit$matchbrackets", {});
var module$node_modules$codemirror$addon$edit$closebrackets=shadow.js.require("module$node_modules$codemirror$addon$edit$closebrackets", {});
var module$node_modules$codemirror$addon$fold$foldcode=shadow.js.require("module$node_modules$codemirror$addon$fold$foldcode", {});
var module$node_modules$codemirror$addon$fold$foldgutter=shadow.js.require("module$node_modules$codemirror$addon$fold$foldgutter", {});
var module$node_modules$codemirror$addon$fold$brace_fold=shadow.js.require("module$node_modules$codemirror$addon$fold$brace_fold", {});
var module$node_modules$codemirror$addon$fold$indent_fold=shadow.js.require("module$node_modules$codemirror$addon$fold$indent_fold", {});
var module$node_modules$codemirror$addon$selection$active_line=shadow.js.require("module$node_modules$codemirror$addon$selection$active_line", {});
var module$node_modules$codemirror$addon$search$match_highlighter=shadow.js.require("module$node_modules$codemirror$addon$search$match_highlighter", {});
var module$node_modules$codemirror$addon$search$search=shadow.js.require("module$node_modules$codemirror$addon$search$search", {});
var module$node_modules$codemirror$addon$search$searchcursor=shadow.js.require("module$node_modules$codemirror$addon$search$searchcursor", {});
var module$node_modules$codemirror$addon$hint$anyword_hint=shadow.js.require("module$node_modules$codemirror$addon$hint$anyword_hint", {});
var module$node_modules$codemirror$addon$hint$show_hint=shadow.js.require("module$node_modules$codemirror$addon$hint$show_hint", {});
var module$node_modules$codemirror$addon$display$placeholder=shadow.js.require("module$node_modules$codemirror$addon$display$placeholder", {});
var module$node_modules$parinfer_codemirror$parinfer_codemirror=shadow.js.require("module$node_modules$parinfer_codemirror$parinfer_codemirror", {});
var module$com$wsscode$pathom$viz$pathom_mode=shadow.js.require("module$com$wsscode$pathom$viz$pathom_mode", {});
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.viz.codemirror","mode","com.wsscode.pathom.viz.codemirror/mode",-832300412),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),new cljs.core.Keyword(null,"obj","obj",981763962),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null)),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"obj","obj",981763962)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.string_QMARK_,cljs.core.map_QMARK_], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.viz.codemirror","theme","com.wsscode.pathom.viz.codemirror/theme",237999943),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.viz.codemirror","indentUnit","com.wsscode.pathom.viz.codemirror/indentUnit",1900064274),new cljs.core.Symbol("cljs.core","pos-int?","cljs.core/pos-int?",-2115888030,null),cljs.core.pos_int_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.viz.codemirror","smartIndent","com.wsscode.pathom.viz.codemirror/smartIndent",563459565),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),cljs.core.boolean_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.viz.codemirror","lineNumbers","com.wsscode.pathom.viz.codemirror/lineNumbers",1787881928),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),cljs.core.boolean_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.viz.codemirror","readOnly","com.wsscode.pathom.viz.codemirror/readOnly",-9416564),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),cljs.core.boolean_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.viz.codemirror","value","com.wsscode.pathom.viz.codemirror/value",-1965573758),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.viz.codemirror","onChange","com.wsscode.pathom.viz.codemirror/onChange",-981932428),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null))),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.string_QMARK_], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_,null,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),null,null,null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.viz.codemirror","options","com.wsscode.pathom.viz.codemirror/options",760650482),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.codemirror","mode","com.wsscode.pathom.viz.codemirror/mode",-832300412),new cljs.core.Keyword("com.wsscode.pathom.viz.codemirror","theme","com.wsscode.pathom.viz.codemirror/theme",237999943),new cljs.core.Keyword("com.wsscode.pathom.viz.codemirror","indentUnit","com.wsscode.pathom.viz.codemirror/indentUnit",1900064274),new cljs.core.Keyword("com.wsscode.pathom.viz.codemirror","smartIndent","com.wsscode.pathom.viz.codemirror/smartIndent",563459565),new cljs.core.Keyword("com.wsscode.pathom.viz.codemirror","lineNumbers","com.wsscode.pathom.viz.codemirror/lineNumbers",1787881928)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__50667){
return cljs.core.map_QMARK_(G__50667);
})], null),(function (G__50667){
return cljs.core.map_QMARK_(G__50667);
}),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.codemirror","mode","com.wsscode.pathom.viz.codemirror/mode",-832300412),new cljs.core.Keyword("com.wsscode.pathom.viz.codemirror","theme","com.wsscode.pathom.viz.codemirror/theme",237999943),new cljs.core.Keyword("com.wsscode.pathom.viz.codemirror","indentUnit","com.wsscode.pathom.viz.codemirror/indentUnit",1900064274),new cljs.core.Keyword("com.wsscode.pathom.viz.codemirror","smartIndent","com.wsscode.pathom.viz.codemirror/smartIndent",563459565),new cljs.core.Keyword("com.wsscode.pathom.viz.codemirror","lineNumbers","com.wsscode.pathom.viz.codemirror/lineNumbers",1787881928)], null),cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.codemirror","mode","com.wsscode.pathom.viz.codemirror/mode",-832300412),new cljs.core.Keyword("com.wsscode.pathom.viz.codemirror","theme","com.wsscode.pathom.viz.codemirror/theme",237999943),new cljs.core.Keyword("com.wsscode.pathom.viz.codemirror","indentUnit","com.wsscode.pathom.viz.codemirror/indentUnit",1900064274),new cljs.core.Keyword("com.wsscode.pathom.viz.codemirror","smartIndent","com.wsscode.pathom.viz.codemirror/smartIndent",563459565),new cljs.core.Keyword("com.wsscode.pathom.viz.codemirror","lineNumbers","com.wsscode.pathom.viz.codemirror/lineNumbers",1787881928)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.codemirror","mode","com.wsscode.pathom.viz.codemirror/mode",-832300412),new cljs.core.Keyword("com.wsscode.pathom.viz.codemirror","theme","com.wsscode.pathom.viz.codemirror/theme",237999943),new cljs.core.Keyword("com.wsscode.pathom.viz.codemirror","indentUnit","com.wsscode.pathom.viz.codemirror/indentUnit",1900064274),new cljs.core.Keyword("com.wsscode.pathom.viz.codemirror","smartIndent","com.wsscode.pathom.viz.codemirror/smartIndent",563459565),new cljs.core.Keyword("com.wsscode.pathom.viz.codemirror","lineNumbers","com.wsscode.pathom.viz.codemirror/lineNumbers",1787881928)], null)])));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.viz.codemirror","props","com.wsscode.pathom.viz.codemirror/props",1974059462),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.codemirror","value","com.wsscode.pathom.viz.codemirror/value",-1965573758)], null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.codemirror","options","com.wsscode.pathom.viz.codemirror/options",760650482)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.codemirror","value","com.wsscode.pathom.viz.codemirror/value",-1965573758)], null),null,null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__50668){
return cljs.core.map_QMARK_(G__50668);
}),(function (G__50668){
return cljs.core.contains_QMARK_(G__50668,new cljs.core.Keyword(null,"value","value",305978217));
})], null),(function (G__50668){
return ((cljs.core.map_QMARK_(G__50668)) && (cljs.core.contains_QMARK_(G__50668,new cljs.core.Keyword(null,"value","value",305978217))));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.codemirror","options","com.wsscode.pathom.viz.codemirror/options",760650482)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.codemirror","value","com.wsscode.pathom.viz.codemirror/value",-1965573758)], null),null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.codemirror","options","com.wsscode.pathom.viz.codemirror/options",760650482)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"value","value",305978217)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.codemirror","options","com.wsscode.pathom.viz.codemirror/options",760650482)], null)])));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.viz.codemirror","extraKeys","com.wsscode.pathom.viz.codemirror/extraKeys",-1175773179),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"str","str",1089608819),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null))),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Symbol(null,"string?","string?",-1129175764,null),cljs.core.list(new cljs.core.Symbol("s","or","s/or",1876282981,null),new cljs.core.Keyword(null,"str","str",1089608819),new cljs.core.Symbol(null,"string?","string?",-1129175764,null),new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Symbol(null,"fn?","fn?",1820990818,null))),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"str","str",1089608819),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.string_QMARK_,cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"str","str",1089608819),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.string_QMARK_,cljs.core.fn_QMARK_], null),null)], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__50669){
return cljs.core.map_QMARK_(G__50669);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__12838__auto__,v__12839__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__12839__auto__,(0));
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"str","str",1089608819),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null)))], null),null));
com.wsscode.pathom.viz.codemirror.prop_call = (function com$wsscode$pathom$viz$codemirror$prop_call(var_args){
var args__4736__auto__ = [];
var len__4730__auto___50779 = arguments.length;
var i__4731__auto___50780 = (0);
while(true){
if((i__4731__auto___50780 < len__4730__auto___50779)){
args__4736__auto__.push((arguments[i__4731__auto___50780]));

var G__50785 = (i__4731__auto___50780 + (1));
i__4731__auto___50780 = G__50785;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return com.wsscode.pathom.viz.codemirror.prop_call.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

com.wsscode.pathom.viz.codemirror.prop_call.cljs$core$IFn$_invoke$arity$variadic = (function (comp,name,args){
var temp__5720__auto__ = (function (){var G__50673 = fulcro.client.primitives.props(comp);
return (name.cljs$core$IFn$_invoke$arity$1 ? name.cljs$core$IFn$_invoke$arity$1(G__50673) : name.call(null,G__50673));
})();
if(cljs.core.truth_(temp__5720__auto__)){
var f = temp__5720__auto__;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
} else {
return null;
}
});

com.wsscode.pathom.viz.codemirror.prop_call.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
com.wsscode.pathom.viz.codemirror.prop_call.cljs$lang$applyTo = (function (seq50670){
var G__50671 = cljs.core.first(seq50670);
var seq50670__$1 = cljs.core.next(seq50670);
var G__50672 = cljs.core.first(seq50670__$1);
var seq50670__$2 = cljs.core.next(seq50670__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__50671,G__50672,seq50670__$2);
});

com.wsscode.pathom.viz.codemirror.html_props = (function com$wsscode$pathom$viz$codemirror$html_props(props){
return cljs.core.clj__GT_js(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__50674){
var vec__50675 = p__50674;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50675,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50675,(1),null);
return cljs.core.namespace(k);
}),props)));
});
com.wsscode.pathom.viz.codemirror.pathom_cache = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof com !== 'undefined') && (typeof com.wsscode !== 'undefined') && (typeof com.wsscode.pathom !== 'undefined') && (typeof com.wsscode.pathom.viz !== 'undefined') && (typeof com.wsscode.pathom.viz.codemirror !== 'undefined') && (typeof com.wsscode.pathom.viz.codemirror.Editor !== 'undefined')){
} else {
/**
 * @constructor
 * @nocollapse
 */
com.wsscode.pathom.viz.codemirror.Editor = (function com$wsscode$pathom$viz$codemirror$Editor(){
var this__44531__auto__ = this;
React.Component.apply(this__44531__auto__,arguments);

if((!((this__44531__auto__.initLocalState == null)))){
this__44531__auto__.state = this__44531__auto__.initLocalState();
} else {
this__44531__auto__.state = ({});
}

return this__44531__auto__;
});

var G__50682_50811 = com.wsscode.pathom.viz.codemirror.Editor.prototype;
var G__50683_50812 = React.Component.prototype;
var G__50684_50813 = fulcro.client.primitives.default_component_prototype;
goog.object.extend(G__50682_50811,G__50683_50812,G__50684_50813);
}

fulcro.client.primitives._register_component_BANG_(new cljs.core.Keyword("com.wsscode.pathom.viz.codemirror","Editor","com.wsscode.pathom.viz.codemirror/Editor",1297864274),com.wsscode.pathom.viz.codemirror.Editor);

var x50685_50814 = com.wsscode.pathom.viz.codemirror.Editor.prototype;
x50685_50814.componentDidMount = ((function (x50685_50814){
return (function (){
var this__43433__auto__ = this;
var this$ = this__43433__auto__;
var reconciler__43434__auto__ = fulcro.client.primitives.get_reconciler(this__43433__auto__);
var lifecycle__43435__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(reconciler__43434__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"lifecycle","lifecycle",341496205)], null));
var indexer__43436__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(reconciler__43434__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
goog.object.set(this__43433__auto__,"fulcro$mounted",true);

if((indexer__43436__auto__ == null)){
} else {
fulcro.client.impl.protocols.index_component_BANG_(indexer__43436__auto__,this__43433__auto__);
}

if(cljs.core.truth_(lifecycle__43435__auto__)){
var G__50686_50819 = this__43433__auto__;
var G__50687_50820 = new cljs.core.Keyword(null,"mount","mount",-1560582470);
(lifecycle__43435__auto__.cljs$core$IFn$_invoke$arity$2 ? lifecycle__43435__auto__.cljs$core$IFn$_invoke$arity$2(G__50686_50819,G__50687_50820) : lifecycle__43435__auto__.call(null,G__50686_50819,G__50687_50820));
} else {
}

var textarea = goog.object.get(this$,"textNode");
var options = cljs.core.clj__GT_js((function (){var or__4131__auto__ = new cljs.core.Keyword("com.wsscode.pathom.viz.codemirror","options","com.wsscode.pathom.viz.codemirror/options",760650482).cljs$core$IFn$_invoke$arity$1(fulcro.client.primitives.props(this$));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());
var process = new cljs.core.Keyword("com.wsscode.pathom.viz.codemirror","process","com.wsscode.pathom.viz.codemirror/process",-99358605).cljs$core$IFn$_invoke$arity$1(fulcro.client.primitives.props(this$));
var codemirror = CodeMirror.fromTextArea(textarea,options);
cljs.core.reset_BANG_(com.wsscode.pathom.viz.codemirror.pathom_cache,cljs.core.PersistentArrayMap.EMPTY);

try{codemirror.on("change",((function (textarea,options,process,codemirror,this$,reconciler__43434__auto__,lifecycle__43435__auto__,indexer__43436__auto__,this__43433__auto__,x50685_50814){
return (function (p1__50678_SHARP_){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(goog.object.get(p1__50678_SHARP_,"origin"),"setValue")){
clearTimeout(goog.object.get(this$,"editorHold"));

var G__50689_50828 = this$;
var G__50690_50829 = "editorHold";
var G__50691_50830 = setTimeout(((function (G__50689_50828,G__50690_50829,textarea,options,process,codemirror,this$,reconciler__43434__auto__,lifecycle__43435__auto__,indexer__43436__auto__,this__43433__auto__,x50685_50814){
return (function (){
return goog.object.set(this$,"editorHold",false);
});})(G__50689_50828,G__50690_50829,textarea,options,process,codemirror,this$,reconciler__43434__auto__,lifecycle__43435__auto__,indexer__43436__auto__,this__43433__auto__,x50685_50814))
,(300));
goog.object.set(G__50689_50828,G__50690_50829,G__50691_50830);

return com.wsscode.pathom.viz.codemirror.prop_call.cljs$core$IFn$_invoke$arity$variadic(this$,new cljs.core.Keyword(null,"onChange","onChange",-312891301),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__50678_SHARP_.getValue()], 0));
} else {
return null;
}
});})(textarea,options,process,codemirror,this$,reconciler__43434__auto__,lifecycle__43435__auto__,indexer__43436__auto__,this__43433__auto__,x50685_50814))
);

codemirror.setValue(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(fulcro.client.primitives.props(this$)));

if(cljs.core.truth_(process)){
(process.cljs$core$IFn$_invoke$arity$1 ? process.cljs$core$IFn$_invoke$arity$1(codemirror) : process.call(null,codemirror));
} else {
}
}catch (e50688){var e_50832 = e50688;
console.warn("Error setting up CodeMirror",e_50832);
}
return goog.object.set(this$,"codemirror",codemirror);
});})(x50685_50814))
;

x50685_50814.componentWillReceiveProps = ((function (x50685_50814){
return (function (next_props__43420__auto__){
var this__43419__auto__ = this;
var this$ = this__43419__auto__;
var map__50692 = goog.object.get(next_props__43420__auto__,"fulcro$value");
var map__50692__$1 = (((((!((map__50692 == null))))?(((((map__50692.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50692.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50692):map__50692);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50692__$1,new cljs.core.Keyword(null,"value","value",305978217));
var force_index_update_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50692__$1,new cljs.core.Keyword(null,"force-index-update?","force-index-update?",1651651111));
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50692__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189));
var cm = goog.object.get(this$,"codemirror");
var cur_index = (function (){var G__50694 = cm;
var G__50695 = ["options","pathomIndex"];
return goog.object.getValueByKeys(G__50694,G__50695);
})();
if(cljs.core.truth_((function (){var and__4120__auto__ = cur_index;
if(cljs.core.truth_(and__4120__auto__)){
var or__4131__auto__ = force_index_update_QMARK_;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(indexes,cljs.core.deref(cur_index));
}
} else {
return and__4120__auto__;
}
})())){
cljs.core.reset_BANG_(com.wsscode.pathom.viz.codemirror.pathom_cache,cljs.core.PersistentArrayMap.EMPTY);

cljs.core.reset_BANG_(cur_index,indexes);

var G__50696_50837 = (function (){var G__50699 = cm;
var G__50700 = ["options","hintOptions"];
return goog.object.getValueByKeys(G__50699,G__50700);
})();
var G__50697_50838 = "hint";
var G__50698_50839 = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(com.wsscode.pathom.viz.codemirror.autocomplete,indexes);
goog.object.set(G__50696_50837,G__50697_50838,G__50698_50839);
} else {
}

if(cljs.core.not(goog.object.get(this$,"editorHold"))){
var cur_value = cm.getValue();
if(cljs.core.truth_((function (){var and__4120__auto__ = cm;
if(cljs.core.truth_(and__4120__auto__)){
var and__4120__auto____$1 = value;
if(cljs.core.truth_(and__4120__auto____$1)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(value,cur_value);
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
})())){
return cm.setValue(value);
} else {
return null;
}
} else {
return null;
}
});})(x50685_50814))
;

x50685_50814.componentWillUnmount = ((function (x50685_50814){
return (function (){
var this__43437__auto__ = this;
var this$ = this__43437__auto__;
var reconciler__43438__auto__ = fulcro.client.primitives.get_reconciler(this__43437__auto__);
var lifecycle__43439__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(reconciler__43438__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"lifecycle","lifecycle",341496205)], null));
var cfg__43440__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(reconciler__43438__auto__);
var st__43441__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__43440__auto__);
var indexer__43442__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__43440__auto__);
goog.object.set(this__43437__auto__,"fulcro$mounted",false);

if(cljs.core.truth_((function (){var and__4120__auto__ = (!((st__43441__auto__ == null)));
if(and__4120__auto__){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(st__43441__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.client.primitives","queries","fulcro.client.primitives/queries",-963324249),this__43437__auto__], null));
} else {
return and__4120__auto__;
}
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(st__43441__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.client.primitives","queries","fulcro.client.primitives/queries",-963324249)], null),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([this__43437__auto__], 0));
} else {
}

if(cljs.core.truth_(lifecycle__43439__auto__)){
var G__50701_50849 = this__43437__auto__;
var G__50702_50850 = new cljs.core.Keyword(null,"unmount","unmount",-1779083333);
(lifecycle__43439__auto__.cljs$core$IFn$_invoke$arity$2 ? lifecycle__43439__auto__.cljs$core$IFn$_invoke$arity$2(G__50701_50849,G__50702_50850) : lifecycle__43439__auto__.call(null,G__50701_50849,G__50702_50850));
} else {
}

if(cljs.core.truth_(indexer__43442__auto__)){
fulcro.client.impl.protocols.drop_component_BANG_(indexer__43442__auto__,this__43437__auto__);
} else {
}

var temp__5718__auto__ = goog.object.get(this$,"codemirror");
if(cljs.core.truth_(temp__5718__auto__)){
var cm = temp__5718__auto__;
return cm.toTextArea();
} else {
return null;
}
});})(x50685_50814))
;

x50685_50814.render = ((function (x50685_50814){
return (function (){
var this__43449__auto__ = this;
var this$ = this__43449__auto__;
var _STAR_reconciler_STAR__orig_val__50703 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__50704 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__50705 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__50706 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__50707 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__50708 = fulcro.client.primitives.get_reconciler(this__43449__auto__);
var _STAR_depth_STAR__temp_val__50709 = (fulcro.client.primitives.depth(this__43449__auto__) + (1));
var _STAR_shared_STAR__temp_val__50710 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__43449__auto__);
var _STAR_instrument_STAR__temp_val__50711 = fulcro.client.primitives.instrument(this__43449__auto__);
var _STAR_parent_STAR__temp_val__50712 = this__43449__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__50708;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__50709;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__50710;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__50711;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__50712;

try{var props = fulcro.client.primitives.props(this$);
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.viz.codemirror.html_props(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(props,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"onChange","onChange",-312891301),new cljs.core.Keyword(null,"force-index-update?","force-index-update?",1651651111)], 0))),fulcro.util.force_children(React.createElement("textarea",({"ref": ((function (props,_STAR_reconciler_STAR__orig_val__50703,_STAR_depth_STAR__orig_val__50704,_STAR_shared_STAR__orig_val__50705,_STAR_instrument_STAR__orig_val__50706,_STAR_parent_STAR__orig_val__50707,_STAR_reconciler_STAR__temp_val__50708,_STAR_depth_STAR__temp_val__50709,_STAR_shared_STAR__temp_val__50710,_STAR_instrument_STAR__temp_val__50711,_STAR_parent_STAR__temp_val__50712,this$,this__43449__auto__,x50685_50814){
return (function (p1__50679_SHARP_){
return goog.object.set(this$,"textNode",p1__50679_SHARP_);
});})(props,_STAR_reconciler_STAR__orig_val__50703,_STAR_depth_STAR__orig_val__50704,_STAR_shared_STAR__orig_val__50705,_STAR_instrument_STAR__orig_val__50706,_STAR_parent_STAR__orig_val__50707,_STAR_reconciler_STAR__temp_val__50708,_STAR_depth_STAR__temp_val__50709,_STAR_shared_STAR__temp_val__50710,_STAR_instrument_STAR__temp_val__50711,_STAR_parent_STAR__temp_val__50712,this$,this__43449__auto__,x50685_50814))
, "defaultValue": new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(props)})))], null),null);
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__50707;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__50706;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__50705;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__50704;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__50703;
}});})(x50685_50814))
;


com.wsscode.pathom.viz.codemirror.Editor.prototype.constructor = com.wsscode.pathom.viz.codemirror.Editor;

com.wsscode.pathom.viz.codemirror.Editor.prototype.constructor.displayName = "com.wsscode.pathom.viz.codemirror/Editor";

com.wsscode.pathom.viz.codemirror.Editor.prototype.fulcro$isComponent = true;

var x50713_50867 = com.wsscode.pathom.viz.codemirror.Editor;


var x50714_50868 = com.wsscode.pathom.viz.codemirror.Editor.prototype;


com.wsscode.pathom.viz.codemirror.Editor.cljs$lang$type = true;

com.wsscode.pathom.viz.codemirror.Editor.cljs$lang$ctorStr = "com.wsscode.pathom.viz.codemirror/Editor";

com.wsscode.pathom.viz.codemirror.Editor.cljs$lang$ctorPrWriter = (function (this__44534__auto__,writer__44535__auto__,opt__44536__auto__){
return cljs.core._write(writer__44535__auto__,"com.wsscode.pathom.viz.codemirror/Editor");
});
com.wsscode.pathom.viz.codemirror.editor = fulcro.client.primitives.factory.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.codemirror.Editor);
com.wsscode.pathom.viz.codemirror.escape_re = (function com$wsscode$pathom$viz$codemirror$escape_re(input){
var re = (new RegExp("([.*+?^=!:${}()|[\\]\\/\\\\])","g"));
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(input).replace(re,"\\$1");
});
com.wsscode.pathom.viz.codemirror.fuzzy_re = (function com$wsscode$pathom$viz$codemirror$fuzzy_re(input){
return RegExp(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s,c){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),cljs.core.str.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.codemirror.escape_re(c)),".*"].join('');
}),"",input),"i");
});
com.wsscode.pathom.viz.codemirror.str__GT_keyword = (function com$wsscode$pathom$viz$codemirror$str__GT_keyword(s){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(1)));
});
com.wsscode.pathom.viz.codemirror.token_context = (function com$wsscode$pathom$viz$codemirror$token_context(p__50715,token){
while(true){
var map__50716 = p__50715;
var map__50716__$1 = (((((!((map__50716 == null))))?(((((map__50716.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50716.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50716):map__50716);
var indexes = map__50716__$1;
var index_io = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50716__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","index-io","com.wsscode.pathom.connect/index-io",-1849483323));
var state = goog.object.get(token,"state");
var mode = goog.object.get(state,"mode");
var path_stack = goog.object.get(state,"pathStack");
var find_ctx = ((function (p__50715,token,state,mode,path_stack,map__50716,map__50716__$1,indexes,index_io){
return (function() {
var com$wsscode$pathom$viz$codemirror$token_context_$_find_ctx = null;
var com$wsscode$pathom$viz$codemirror$token_context_$_find_ctx__1 = (function (s){
return com$wsscode$pathom$viz$codemirror$token_context_$_find_ctx.cljs$core$IFn$_invoke$arity$2(s,cljs.core.PersistentVector.EMPTY);
});
var com$wsscode$pathom$viz$codemirror$token_context_$_find_ctx__2 = (function (s,ctx){
while(true){
var mode__$1 = goog.object.get(s,"mode");
var key = goog.object.get(s,"key");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("join",mode__$1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("ident",goog.object.getValueByKeys(s,"key","mode"))))){
var key__$1 = com.wsscode.pathom.viz.codemirror.str__GT_keyword(goog.object.getValueByKeys(s,"key","key"));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"attribute","attribute",-2074029119),new cljs.core.Keyword(null,"context","context",-830191113),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ctx,key__$1)], null);
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("join",mode__$1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(typeof key === 'string')))){
var key__$1 = com.wsscode.pathom.viz.codemirror.str__GT_keyword(key);
if(cljs.core.contains_QMARK_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(index_io,cljs.core.PersistentHashSet.EMPTY),key__$1)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"attribute","attribute",-2074029119),new cljs.core.Keyword(null,"context","context",-830191113),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ctx,key__$1)], null);
} else {
var G__50880 = goog.object.getValueByKeys(s,"prev","prev");
var G__50881 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ctx,key__$1);
s = G__50880;
ctx = G__50881;
continue;
}
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"attribute","attribute",-2074029119),new cljs.core.Keyword(null,"context","context",-830191113),ctx], null);

}
}
break;
}
});
com$wsscode$pathom$viz$codemirror$token_context_$_find_ctx = function(s,ctx){
switch(arguments.length){
case 1:
return com$wsscode$pathom$viz$codemirror$token_context_$_find_ctx__1.call(this,s);
case 2:
return com$wsscode$pathom$viz$codemirror$token_context_$_find_ctx__2.call(this,s,ctx);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$viz$codemirror$token_context_$_find_ctx.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$viz$codemirror$token_context_$_find_ctx__1;
com$wsscode$pathom$viz$codemirror$token_context_$_find_ctx.cljs$core$IFn$_invoke$arity$2 = com$wsscode$pathom$viz$codemirror$token_context_$_find_ctx__2;
return com$wsscode$pathom$viz$codemirror$token_context_$_find_ctx;
})()
;})(p__50715,token,state,mode,path_stack,map__50716,map__50716__$1,indexes,index_io))
;
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("ident",mode)) && ((((goog.object.get(path_stack,"key") == null)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(goog.object.get(token,"string"),goog.object.get(path_stack,"key"))))))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ident","ident",-742346)], null);
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("join",mode)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(goog.object.get(token,"string"),goog.object.get(path_stack,"key"))) || ((goog.object.get(path_stack,"key") == null)))))){
return find_ctx.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("param-exp",goog.object.getValueByKeys(path_stack,"prev","mode")))?goog.object.getValueByKeys(path_stack,"prev","prev","prev"):goog.object.getValueByKeys(path_stack,"prev","prev")));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("attr-list",mode)){
if(cljs.core.truth_(goog.object.getValueByKeys(path_stack,"prev","mode"))){
return find_ctx.cljs$core$IFn$_invoke$arity$1(goog.object.get(path_stack,"prev"));
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"attribute","attribute",-2074029119),new cljs.core.Keyword(null,"context","context",-830191113),cljs.core.PersistentVector.EMPTY], null);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("param-exp",mode)){
var prev = goog.object.getValueByKeys(path_stack,"prev");
var G__50894 = indexes;
var G__50895 = (function (){var obj50719 = ({"state":(function (){var obj50721 = ({"mode":goog.object.get(prev,"mode"),"pathStack":prev});
return obj50721;
})()});
return obj50719;
})();
p__50715 = G__50894;
token = G__50895;
continue;
} else {
return null;
}
}
}
}
break;
}
});
com.wsscode.pathom.viz.codemirror.completions = (function com$wsscode$pathom$viz$codemirror$completions(index,token,reg){
if(cljs.core.map_QMARK_(new cljs.core.Keyword("com.wsscode.pathom.connect","index-io","com.wsscode.pathom.connect/index-io",-1849483323).cljs$core$IFn$_invoke$arity$1(index))){
var ctx = com.wsscode.pathom.viz.codemirror.token_context(index,token);
if(cljs.core.truth_(reg)){
var G__50723 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(ctx);
var G__50723__$1 = (((G__50723 instanceof cljs.core.Keyword))?G__50723.fqn:null);
switch (G__50723__$1) {
case "attribute":
return com.wsscode.pathom.connect.discover_attrs(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(index,new cljs.core.Keyword("com.wsscode.pathom.connect","cache","com.wsscode.pathom.connect/cache",328991776),com.wsscode.pathom.viz.codemirror.pathom_cache),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [">",null], null), null),cljs.core.namespace),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(ctx)));

break;
case "ident":
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (G__50723,G__50723__$1,ctx){
return (function (p1__50722_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([p1__50722_SHARP_],[cljs.core.PersistentArrayMap.EMPTY]);
});})(G__50723,G__50723__$1,ctx))
),new cljs.core.Keyword("com.wsscode.pathom.connect","idents","com.wsscode.pathom.connect/idents",1893384007).cljs$core$IFn$_invoke$arity$1(index));

break;
default:
return cljs.core.PersistentArrayMap.EMPTY;

}
} else {
return null;
}
} else {
return null;
}
});
goog.exportSymbol('com.wsscode.pathom.viz.codemirror.completions', com.wsscode.pathom.viz.codemirror.completions);
goog.object.set(window,"cljsDeref",cljs.core.deref);
com.wsscode.pathom.viz.codemirror.cm_completions = (function com$wsscode$pathom$viz$codemirror$cm_completions(index,cm){
var cur = cm.getCursor();
var ch = cur.ch;
var token = cm.getTokenAt(cur);
var reg = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(token.string,(0),(ch - token.start));
return com.wsscode.pathom.viz.codemirror.completions(index,token,reg);
});
com.wsscode.pathom.viz.codemirror.fuzzy_match = (function com$wsscode$pathom$viz$codemirror$fuzzy_match(blank_QMARK_,reg,options){
if(cljs.core.truth_(blank_QMARK_)){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.str,options);
} else {
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.wsscode.fuzzy","string","com.wsscode.fuzzy/string",320074815),com.wsscode.fuzzy.fuzzy_match(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword("com.wsscode.pathom.viz.codemirror","blank?","com.wsscode.pathom.viz.codemirror/blank?",631214481),new cljs.core.Keyword("com.wsscode.fuzzy","search-input","com.wsscode.fuzzy/search-input",897823168),new cljs.core.Keyword("com.wsscode.fuzzy","options","com.wsscode.fuzzy/options",773495630)],[blank_QMARK_,reg,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2((function (p1__50724_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword("com.wsscode.fuzzy","string","com.wsscode.fuzzy/string",320074815)],[p1__50724_SHARP_]);
}),cljs.core.str),options)])));
}
});
com.wsscode.pathom.viz.codemirror.autocomplete = (function com$wsscode$pathom$viz$codemirror$autocomplete(index,cm,options){
var cur = cm.getCursor();
var line = cur.line;
var ch = cur.ch;
var token = cm.getTokenAt(cur);
var reg = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(token.string,(0),(ch - token.start));
var blank_QMARK_ = (function (){var fexpr__50725 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, ["(",null,"{",null,"[",null," ",null], null), null);
return (fexpr__50725.cljs$core$IFn$_invoke$arity$1 ? fexpr__50725.cljs$core$IFn$_invoke$arity$1(reg) : fexpr__50725.call(null,reg));
})();
var start = (cljs.core.truth_(blank_QMARK_)?cur:CodeMirror.Pos(line,(ch - cljs.core.count(reg))));
var end = (cljs.core.truth_(blank_QMARK_)?cur:CodeMirror.Pos(line,goog.object.get(token,"end")));
var words = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.first,com.wsscode.pathom.viz.codemirror.cm_completions(index,cm));
if(cljs.core.truth_(words)){
return ({"list": cljs.core.clj__GT_js(cljs.core.sort.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.codemirror.fuzzy_match(blank_QMARK_,reg,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(index,new cljs.core.Keyword("com.wsscode.pathom.connect","autocomplete-ignore","com.wsscode.pathom.connect/autocomplete-ignore",-191717401),cljs.core.PersistentHashSet.EMPTY),words)))), "from": start, "to": end});
} else {
return null;
}
});
com.wsscode.pathom.viz.codemirror.def_cm_command = (function com$wsscode$pathom$viz$codemirror$def_cm_command(name,f){
var G__50726 = goog.object.get(CodeMirror,"commands");
var G__50727 = name;
var G__50728 = f;
return goog.object.set(G__50726,G__50727,G__50728);
});
com.wsscode.pathom.viz.codemirror.key_has_children_QMARK_ = (function com$wsscode$pathom$viz$codemirror$key_has_children_QMARK_(completions,token){
var reg = com.wsscode.pathom.viz.codemirror.str__GT_keyword(goog.object.get(token,"string"));
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("atom",goog.object.get(token,"type"))) && (((cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$2(completions,reg))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(">",cljs.core.namespace(reg))))));
});
goog.exportSymbol('com.wsscode.pathom.viz.codemirror.key_has_children_QMARK_', com.wsscode.pathom.viz.codemirror.key_has_children_QMARK_);
com.wsscode.pathom.viz.codemirror.str_repeat = (function com$wsscode$pathom$viz$codemirror$str_repeat(s,n){
return clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(n,s));
});
com.wsscode.pathom.viz.codemirror.def_cm_command("pathomJoin",(function (cm){
var cur = cm.getCursor();
var token = cm.getTokenAt(cur);
var indent = (function (){var or__4131__auto__ = (function (){var G__50731 = token;
var G__50732 = ["state","pathStack","indent"];
return goog.object.getValueByKeys(G__50731,G__50732);
})();
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (0);
}
})();
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("attr-list",(function (){var G__50735 = token;
var G__50736 = ["state","mode"];
return goog.object.getValueByKeys(G__50735,G__50736);
})())) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("atom-composite",goog.object.get(token,"type"))))){
var line = cur.line;
var start = CodeMirror.Pos(line,goog.object.get(token,"start"));
var end = CodeMirror.Pos(line,goog.object.get(token,"end"));
var s = goog.object.get(token,"string");
var vec__50737 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(start.ch,indent))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [CodeMirror.Pos((line + (1)),((2) + indent)),["{",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),"\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.codemirror.str_repeat(" ",(indent + (1)))),"[]}"].join('')], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [CodeMirror.Pos(line,((goog.object.get(token,"start") + cljs.core.count(s)) + (3))),["{",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)," []}"].join('')], null));
var cursor_end = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50737,(0),null);
var joined = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50737,(1),null);
cm.replaceRange(joined,start,end);

cm.setCursor(cursor_end);

return cm.showHint();
} else {
return null;
}
}));
com.wsscode.pathom.viz.codemirror.pathom = (function com$wsscode$pathom$viz$codemirror$pathom(p__50741){
var map__50742 = p__50741;
var map__50742__$1 = (((((!((map__50742 == null))))?(((((map__50742.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50742.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50742):map__50742);
var props = map__50742__$1;
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50742__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189));
var options = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword("com.wsscode.pathom.viz.codemirror","matchBrackets","com.wsscode.pathom.viz.codemirror/matchBrackets",-486136415),new cljs.core.Keyword("com.wsscode.pathom.viz.codemirror","highlightSelectionMatches","com.wsscode.pathom.viz.codemirror/highlightSelectionMatches",503061089),new cljs.core.Keyword("com.wsscode.pathom.viz.codemirror","foldGutter","com.wsscode.pathom.viz.codemirror/foldGutter",-1672459260),new cljs.core.Keyword("com.wsscode.pathom.viz.codemirror","mode","com.wsscode.pathom.viz.codemirror/mode",-832300412),new cljs.core.Keyword("com.wsscode.pathom.viz.codemirror","extraKeys","com.wsscode.pathom.viz.codemirror/extraKeys",-1175773179),new cljs.core.Keyword("com.wsscode.pathom.viz.codemirror","autoCloseBrackets","com.wsscode.pathom.viz.codemirror/autoCloseBrackets",2107290696),new cljs.core.Keyword("com.wsscode.pathom.viz.codemirror","lineNumbers","com.wsscode.pathom.viz.codemirror/lineNumbers",1787881928),new cljs.core.Keyword("com.wsscode.pathom.viz.codemirror","hintOptions","com.wsscode.pathom.viz.codemirror/hintOptions",1347660047),new cljs.core.Keyword(null,"pathomIndex","pathomIndex",-359731824),new cljs.core.Keyword("com.wsscode.pathom.viz.codemirror","gutters","com.wsscode.pathom.viz.codemirror/gutters",461580477)],[true,true,true,"pathom",new cljs.core.PersistentArrayMap(null, 2, ["Ctrl-Space","autocomplete","Cmd-J","pathomJoin"], null),true,true,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"hint","hint",439639918),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(com.wsscode.pathom.viz.codemirror.autocomplete,indexes),new cljs.core.Keyword(null,"completeSingle","completeSingle",-665527534),false], null),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(indexes),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["CodeMirror-linenumbers","CodeMirror-foldgutter"], null)]);
var G__50744 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(props,new cljs.core.Keyword("com.wsscode.pathom.viz.codemirror","process","com.wsscode.pathom.viz.codemirror/process",-99358605),((function (options,map__50742,map__50742__$1,props,indexes){
return (function (cm){
cm.on("keyup",((function (options,map__50742,map__50742__$1,props,indexes){
return (function (cm__$1,e){
if(((cljs.core.not((function (){var G__50747 = cm__$1;
var G__50748 = ["state","completionActive"];
return goog.object.getValueByKeys(G__50747,G__50748);
})())) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(goog.object.get(e,"key")))))){
return CodeMirror.showHint(cm__$1);
} else {
return null;
}
});})(options,map__50742,map__50742__$1,props,indexes))
);

var G__50749 = cm;
var G__50750 = "smart";
var G__50751 = ({"forceBalance": true});
return module$node_modules$parinfer_codemirror$parinfer_codemirror.init(G__50749,G__50750,G__50751);
});})(options,map__50742,map__50742__$1,props,indexes))
),new cljs.core.Keyword("com.wsscode.pathom.viz.codemirror","options","com.wsscode.pathom.viz.codemirror/options",760650482),((function (options,map__50742,map__50742__$1,props,indexes){
return (function (p1__50740_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([options,p1__50740_SHARP_], 0));
});})(options,map__50742,map__50742__$1,props,indexes))
);
return (com.wsscode.pathom.viz.codemirror.editor.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom.viz.codemirror.editor.cljs$core$IFn$_invoke$arity$1(G__50744) : com.wsscode.pathom.viz.codemirror.editor.call(null,G__50744));
});
com.wsscode.pathom.viz.codemirror.clojure = (function com$wsscode$pathom$viz$codemirror$clojure(props){
var options = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("com.wsscode.pathom.viz.codemirror","lineNumbers","com.wsscode.pathom.viz.codemirror/lineNumbers",1787881928),true,new cljs.core.Keyword("com.wsscode.pathom.viz.codemirror","mode","com.wsscode.pathom.viz.codemirror/mode",-832300412),"clojure",new cljs.core.Keyword("com.wsscode.pathom.viz.codemirror","matchBrackets","com.wsscode.pathom.viz.codemirror/matchBrackets",-486136415),true,new cljs.core.Keyword("com.wsscode.pathom.viz.codemirror","highlightSelectionMatches","com.wsscode.pathom.viz.codemirror/highlightSelectionMatches",503061089),true,new cljs.core.Keyword("com.wsscode.pathom.viz.codemirror","foldGutter","com.wsscode.pathom.viz.codemirror/foldGutter",-1672459260),true,new cljs.core.Keyword("com.wsscode.pathom.viz.codemirror","gutters","com.wsscode.pathom.viz.codemirror/gutters",461580477),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["CodeMirror-linenumbers","CodeMirror-foldgutter"], null)], null);
var G__50753 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(props,new cljs.core.Keyword("com.wsscode.pathom.viz.codemirror","options","com.wsscode.pathom.viz.codemirror/options",760650482),((function (options){
return (function (p1__50752_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([options,p1__50752_SHARP_], 0));
});})(options))
);
return (com.wsscode.pathom.viz.codemirror.editor.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom.viz.codemirror.editor.cljs$core$IFn$_invoke$arity$1(G__50753) : com.wsscode.pathom.viz.codemirror.editor.call(null,G__50753));
});

//# sourceMappingURL=com.wsscode.pathom.viz.codemirror.js.map
