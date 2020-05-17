goog.provide('ghostwheel.logging');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('cljs.pprint');
ghostwheel.logging._STAR_nesting = cljs.core.atom.cljs$core$IFn$_invoke$arity$1("");
ghostwheel.logging._STAR_report_output_STAR_ = new cljs.core.Keyword(null,"js-console","js-console",1240105791);
ghostwheel.logging.ghostwheel_colors = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"base1","base1",-1379049855),new cljs.core.Keyword(null,"orange","orange",73816386),new cljs.core.Keyword(null,"purple1","purple1",1665392325),new cljs.core.Keyword(null,"base3","base3",-1172895995),new cljs.core.Keyword(null,"purple0","purple0",-1668477083),new cljs.core.Keyword(null,"orange0","orange0",1459969095),new cljs.core.Keyword(null,"yellow","yellow",-881035449),new cljs.core.Keyword(null,"base2","base2",1736987560),new cljs.core.Keyword(null,"green0","green0",935416937),new cljs.core.Keyword(null,"green","green",-945526839),new cljs.core.Keyword(null,"green1","green1",1162170698),new cljs.core.Keyword(null,"cyan","cyan",1118839274),new cljs.core.Keyword(null,"violet","violet",-1351470549),new cljs.core.Keyword(null,"purple2","purple2",-1568108659),new cljs.core.Keyword(null,"base0","base0",128742798),new cljs.core.Keyword(null,"orange1","orange1",1540366992),new cljs.core.Keyword(null,"red","red",-969428204),new cljs.core.Keyword(null,"blue","blue",-622100620),new cljs.core.Keyword(null,"base00","base00",-1549387019),new cljs.core.Keyword(null,"magenta","magenta",1687937081),new cljs.core.Keyword(null,"base01","base01",277019065),new cljs.core.Keyword(null,"base03","base03",269270489),new cljs.core.Keyword(null,"base02","base02",-1734030562),new cljs.core.Keyword(null,"black","black",1294279647)],["#93a1a1","#cb4b16","#b87a93","#fdf6e3","#967a93","#fe8709","#b58900","#eee8d5","#82da38","#859900","#54a627","#2aa198","#6c71c4","#7d9cf8","#839496","#f17d3e","#dc322f","#268bd2","#657b83","#d33682","#586e75","#002b36","#073642","#002b36"]);
ghostwheel.logging.ops_with_bindings = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 21, [new cljs.core.Symbol(null,"deftype","deftype",1980826088,null),null,new cljs.core.Symbol(null,"defmethod","defmethod",-579171823,null),null,new cljs.core.Symbol("ghostwheel.tracer","extend-protocol","ghostwheel.tracer/extend-protocol",-1387613853,null),null,new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),null,new cljs.core.Symbol(null,"defn","defn",-126010802,null),null,new cljs.core.Symbol("ghostwheel.tracer","defmethod","ghostwheel.tracer/defmethod",41043138,null),null,new cljs.core.Symbol(null,"extend-protocol","extend-protocol",306378578,null),null,new cljs.core.Symbol("ghostwheel.tracer","defn-","ghostwheel.tracer/defn-",410431175,null),null,new cljs.core.Symbol("ghostwheel.tracer","let","ghostwheel.tracer/let",-1135560835,null),null,new cljs.core.Symbol("ghostwheel.tracer","defn","ghostwheel.tracer/defn",-1888156609,null),null,new cljs.core.Symbol(null,"extend-type","extend-type",1123355921,null),null,new cljs.core.Symbol("ghostwheel.tracer","reify","ghostwheel.tracer/reify",-914829536,null),null,new cljs.core.Symbol("ghostwheel.tracer","fn","ghostwheel.tracer/fn",-1296883590,null),null,new cljs.core.Symbol(null,"reify","reify",1885539699,null),null,new cljs.core.Symbol(null,"let","let",358118826,null),null,new cljs.core.Symbol(null,"fn","fn",465265323,null),null,new cljs.core.Symbol(null,"defrecord","defrecord",273038109,null),null,new cljs.core.Symbol(null,"defn-","defn-",1097765044,null),null,new cljs.core.Symbol("ghostwheel.tracer","deftype","ghostwheel.tracer/deftype",-1592147015,null),null,new cljs.core.Symbol("ghostwheel.tracer","defrecord","ghostwheel.tracer/defrecord",-917570066,null),null,new cljs.core.Symbol("ghostwheel.tracer","extend-type","ghostwheel.tracer/extend-type",704466912,null),null], null), null);
ghostwheel.logging.wrap_line = (function ghostwheel$logging$wrap_line(size,text){
return cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,["~{~<~%~1,",cljs.core.str.cljs$core$IFn$_invoke$arity$1(size),":;~A~> ~}"].join(''),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clojure.string.split.cljs$core$IFn$_invoke$arity$2(text,/ /)], 0));
});
ghostwheel.logging.wrap = (function ghostwheel$logging$wrap(line){
return ghostwheel.logging.wrap_line((80),line);
});
ghostwheel.logging.truncate_string = (function ghostwheel$logging$truncate_string(long_string,limit){
if((cljs.core.count(long_string) > limit)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(long_string,(0),limit)),"..."].join('');
} else {
return long_string;
}
});
ghostwheel.logging.get_styled_label = (function ghostwheel$logging$get_styled_label(var_args){
var args__4736__auto__ = [];
var len__4730__auto___84802 = arguments.length;
var i__4731__auto___84804 = (0);
while(true){
if((i__4731__auto___84804 < len__4730__auto___84802)){
args__4736__auto__.push((arguments[i__4731__auto___84804]));

var G__84807 = (i__4731__auto___84804 + (1));
i__4731__auto___84804 = G__84807;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return ghostwheel.logging.get_styled_label.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

ghostwheel.logging.get_styled_label.cljs$core$IFn$_invoke$arity$variadic = (function (label,p__84519,output,p__84520){
var map__84521 = p__84519;
var map__84521__$1 = (((((!((map__84521 == null))))?(((((map__84521.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__84521.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__84521):map__84521);
var style = map__84521__$1;
var foreground = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84521__$1,new cljs.core.Keyword("ghostwheel.logging","foreground","ghostwheel.logging/foreground",-473507023));
var background = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84521__$1,new cljs.core.Keyword("ghostwheel.logging","background","ghostwheel.logging/background",41589606));
var weight = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84521__$1,new cljs.core.Keyword("ghostwheel.logging","weight","ghostwheel.logging/weight",-88030216));
var vec__84522 = p__84520;
var length = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84522,(0),null);
if(cljs.core.not(style)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [label], null);
} else {
var label__$1 = (function (){var G__84528 = (cljs.core.truth_(length)?ghostwheel.logging.truncate_string(label,length):label);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(output,new cljs.core.Keyword(null,"js-console","js-console",1240105791))){
return ["%c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__84528)].join('');
} else {
return G__84528;
}
})();
var style__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(output,new cljs.core.Keyword(null,"js-console","js-console",1240105791)))?["color: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(foreground)?foreground:(cljs.core.truth_(background)?"white":new cljs.core.Keyword(null,"black","black",1294279647).cljs$core$IFn$_invoke$arity$1(ghostwheel.logging.ghostwheel_colors)
))),";","background: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(background)?background:"white")),";","font-weight: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(weight)?weight:"500")),";",(cljs.core.truth_(background)?"text-shadow: 0.5px 0.5px black;":null),(cljs.core.truth_(background)?"padding: 2px 6px; border-radius: 2px;":null)].join(''):null);
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [label__$1,style__$1], null)));
}
});

ghostwheel.logging.get_styled_label.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
ghostwheel.logging.get_styled_label.cljs$lang$applyTo = (function (seq84512){
var G__84513 = cljs.core.first(seq84512);
var seq84512__$1 = cljs.core.next(seq84512);
var G__84514 = cljs.core.first(seq84512__$1);
var seq84512__$2 = cljs.core.next(seq84512__$1);
var G__84515 = cljs.core.first(seq84512__$2);
var seq84512__$3 = cljs.core.next(seq84512__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__84513,G__84514,G__84515,seq84512__$3);
});

ghostwheel.logging.plain_log = (function ghostwheel$logging$plain_log(msg){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__84539_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ghostwheel.logging._STAR_nesting)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__84539_SHARP_)].join('');
}),clojure.string.split_lines(((typeof msg === 'string')?msg:(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__84548_84836 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__84549_84837 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__84550_84838 = true;
var _STAR_print_fn_STAR__temp_val__84551_84839 = ((function (_STAR_print_newline_STAR__orig_val__84548_84836,_STAR_print_fn_STAR__orig_val__84549_84837,_STAR_print_newline_STAR__temp_val__84550_84838,sb__4661__auto__){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__84548_84836,_STAR_print_fn_STAR__orig_val__84549_84837,_STAR_print_newline_STAR__temp_val__84550_84838,sb__4661__auto__))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__84550_84838;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__84551_84839;

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(msg);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__84549_84837;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__84548_84836;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})()))))], 0));
});
ghostwheel.logging.log = (function ghostwheel$logging$log(var_args){
var G__84556 = arguments.length;
switch (G__84556) {
case 0:
return ghostwheel.logging.log.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ghostwheel.logging.log.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return ghostwheel.logging.log.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

ghostwheel.logging.log.cljs$core$IFn$_invoke$arity$0 = (function (){
return ghostwheel.logging.log.cljs$core$IFn$_invoke$arity$2("",null);
});

ghostwheel.logging.log.cljs$core$IFn$_invoke$arity$1 = (function (msg){
return ghostwheel.logging.log.cljs$core$IFn$_invoke$arity$2(msg,null);
});

ghostwheel.logging.log.cljs$core$IFn$_invoke$arity$2 = (function (msg,style){
var styled_msg = ghostwheel.logging.get_styled_label(msg,style,ghostwheel.logging._STAR_report_output_STAR_);
var G__84560 = ghostwheel.logging._STAR_report_output_STAR_;
var G__84560__$1 = (((G__84560 instanceof cljs.core.Keyword))?G__84560.fqn:null);
switch (G__84560__$1) {
case "repl":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ghostwheel.logging.plain_log,styled_msg);

break;
case "js-console":
return console.log.apply(console,cljs.core.to_array(styled_msg));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__84560__$1)].join('')));

}
});

ghostwheel.logging.log.cljs$lang$maxFixedArity = 2;

ghostwheel.logging.DBG = (function ghostwheel$logging$DBG(var_args){
var G__84569 = arguments.length;
switch (G__84569) {
case 0:
return ghostwheel.logging.DBG.cljs$core$IFn$_invoke$arity$0();

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___84858 = arguments.length;
var i__4731__auto___84859 = (0);
while(true){
if((i__4731__auto___84859 < len__4730__auto___84858)){
args_arr__4751__auto__.push((arguments[i__4731__auto___84859]));

var G__84862 = (i__4731__auto___84859 + (1));
i__4731__auto___84859 = G__84862;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((0)),(0),null));
return ghostwheel.logging.DBG.cljs$core$IFn$_invoke$arity$variadic(argseq__4752__auto__);

}
});

ghostwheel.logging.DBG.cljs$core$IFn$_invoke$arity$0 = (function (){
return ghostwheel.logging.log.cljs$core$IFn$_invoke$arity$1("#> MARK");
});

ghostwheel.logging.DBG.cljs$core$IFn$_invoke$arity$variadic = (function (msgs){
var seq__84576_84864 = cljs.core.seq(msgs);
var chunk__84577_84865 = null;
var count__84578_84866 = (0);
var i__84579_84867 = (0);
while(true){
if((i__84579_84867 < count__84578_84866)){
var msg_84869 = chunk__84577_84865.cljs$core$IIndexed$_nth$arity$2(null,i__84579_84867);
if((msg_84869 == null)){
ghostwheel.logging.log.cljs$core$IFn$_invoke$arity$1("nil");
} else {
ghostwheel.logging.log.cljs$core$IFn$_invoke$arity$1(msg_84869);
}


var G__84871 = seq__84576_84864;
var G__84872 = chunk__84577_84865;
var G__84873 = count__84578_84866;
var G__84874 = (i__84579_84867 + (1));
seq__84576_84864 = G__84871;
chunk__84577_84865 = G__84872;
count__84578_84866 = G__84873;
i__84579_84867 = G__84874;
continue;
} else {
var temp__5720__auto___84875 = cljs.core.seq(seq__84576_84864);
if(temp__5720__auto___84875){
var seq__84576_84876__$1 = temp__5720__auto___84875;
if(cljs.core.chunked_seq_QMARK_(seq__84576_84876__$1)){
var c__4550__auto___84878 = cljs.core.chunk_first(seq__84576_84876__$1);
var G__84882 = cljs.core.chunk_rest(seq__84576_84876__$1);
var G__84883 = c__4550__auto___84878;
var G__84884 = cljs.core.count(c__4550__auto___84878);
var G__84885 = (0);
seq__84576_84864 = G__84882;
chunk__84577_84865 = G__84883;
count__84578_84866 = G__84884;
i__84579_84867 = G__84885;
continue;
} else {
var msg_84887 = cljs.core.first(seq__84576_84876__$1);
if((msg_84887 == null)){
ghostwheel.logging.log.cljs$core$IFn$_invoke$arity$1("nil");
} else {
ghostwheel.logging.log.cljs$core$IFn$_invoke$arity$1(msg_84887);
}


var G__84892 = cljs.core.next(seq__84576_84876__$1);
var G__84893 = null;
var G__84894 = (0);
var G__84895 = (0);
seq__84576_84864 = G__84892;
chunk__84577_84865 = G__84893;
count__84578_84866 = G__84894;
i__84579_84867 = G__84895;
continue;
}
} else {
}
}
break;
}

return cljs.core.last(msgs);
});

/** @this {Function} */
ghostwheel.logging.DBG.cljs$lang$applyTo = (function (seq84568){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq84568));
});

ghostwheel.logging.DBG.cljs$lang$maxFixedArity = (0);

ghostwheel.logging.log_raw = (function ghostwheel$logging$log_raw(var_args){
var args__4736__auto__ = [];
var len__4730__auto___84900 = arguments.length;
var i__4731__auto___84901 = (0);
while(true){
if((i__4731__auto___84901 < len__4730__auto___84900)){
args__4736__auto__.push((arguments[i__4731__auto___84901]));

var G__84903 = (i__4731__auto___84901 + (1));
i__4731__auto___84901 = G__84903;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return ghostwheel.logging.log_raw.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

ghostwheel.logging.log_raw.cljs$core$IFn$_invoke$arity$variadic = (function (format_strings,objs){
var G__84618 = ghostwheel.logging._STAR_report_output_STAR_;
var G__84618__$1 = (((G__84618 instanceof cljs.core.Keyword))?G__84618.fqn:null);
switch (G__84618__$1) {
case "repl":
var seq__84620 = cljs.core.seq(objs);
var chunk__84621 = null;
var count__84622 = (0);
var i__84623 = (0);
while(true){
if((i__84623 < count__84622)){
var obj = chunk__84621.cljs$core$IIndexed$_nth$arity$2(null,i__84623);
ghostwheel.logging.plain_log(obj);


var G__84909 = seq__84620;
var G__84910 = chunk__84621;
var G__84911 = count__84622;
var G__84912 = (i__84623 + (1));
seq__84620 = G__84909;
chunk__84621 = G__84910;
count__84622 = G__84911;
i__84623 = G__84912;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__84620);
if(temp__5720__auto__){
var seq__84620__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__84620__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__84620__$1);
var G__84916 = cljs.core.chunk_rest(seq__84620__$1);
var G__84917 = c__4550__auto__;
var G__84918 = cljs.core.count(c__4550__auto__);
var G__84919 = (0);
seq__84620 = G__84916;
chunk__84621 = G__84917;
count__84622 = G__84918;
i__84623 = G__84919;
continue;
} else {
var obj = cljs.core.first(seq__84620__$1);
ghostwheel.logging.plain_log(obj);


var G__84920 = cljs.core.next(seq__84620__$1);
var G__84921 = null;
var G__84922 = (0);
var G__84923 = (0);
seq__84620 = G__84920;
chunk__84621 = G__84921;
count__84622 = G__84922;
i__84623 = G__84923;
continue;
}
} else {
return null;
}
}
break;
}

break;
case "js-console":
return console.log.apply(console,cljs.core.to_array(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(format_strings,objs)));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__84618__$1)].join('')));

}
});

ghostwheel.logging.log_raw.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
ghostwheel.logging.log_raw.cljs$lang$applyTo = (function (seq84607){
var G__84608 = cljs.core.first(seq84607);
var seq84607__$1 = cljs.core.next(seq84607);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__84608,seq84607__$1);
});

ghostwheel.logging.error = (function ghostwheel$logging$error(msg){
var G__84647 = ghostwheel.logging._STAR_report_output_STAR_;
var G__84647__$1 = (((G__84647 instanceof cljs.core.Keyword))?G__84647.fqn:null);
switch (G__84647__$1) {
case "repl":
ghostwheel.logging.plain_log("ERROR:");

return ghostwheel.logging.plain_log(msg);

break;
case "js-console":
return console.error(msg);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__84647__$1)].join('')));

}
});
ghostwheel.logging.plain_group = (function ghostwheel$logging$plain_group(label){
ghostwheel.logging.log.cljs$core$IFn$_invoke$arity$0();

ghostwheel.logging.log.cljs$core$IFn$_invoke$arity$1(["|> ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(label)].join(''));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(ghostwheel.logging._STAR_nesting,(function (p1__84650_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__84650_SHARP_),"| "].join('');
}));
});
ghostwheel.logging.group_STAR_ = (function ghostwheel$logging$group_STAR_(var_args){
var G__84667 = arguments.length;
switch (G__84667) {
case 2:
return ghostwheel.logging.group_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return ghostwheel.logging.group_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

ghostwheel.logging.group_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (open_QMARK_,label){
return ghostwheel.logging.group_STAR_.cljs$core$IFn$_invoke$arity$3(open_QMARK_,label,null);
});

ghostwheel.logging.group_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (open_QMARK_,label,style){
var styled_label = ghostwheel.logging.get_styled_label(label,style,ghostwheel.logging._STAR_report_output_STAR_);
var G__84679 = ghostwheel.logging._STAR_report_output_STAR_;
var G__84679__$1 = (((G__84679 instanceof cljs.core.Keyword))?G__84679.fqn:null);
switch (G__84679__$1) {
case "repl":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ghostwheel.logging.plain_group,styled_label);

break;
case "js-console":
return (cljs.core.truth_(open_QMARK_)?console.group:console.groupCollapsed).apply(console,cljs.core.to_array(styled_label));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__84679__$1)].join('')));

}
});

ghostwheel.logging.group_STAR_.cljs$lang$maxFixedArity = 3;

ghostwheel.logging.group = (function ghostwheel$logging$group(var_args){
var G__84694 = arguments.length;
switch (G__84694) {
case 1:
return ghostwheel.logging.group.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return ghostwheel.logging.group.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

ghostwheel.logging.group.cljs$core$IFn$_invoke$arity$1 = (function (label){
return ghostwheel.logging.group.cljs$core$IFn$_invoke$arity$2(label,null);
});

ghostwheel.logging.group.cljs$core$IFn$_invoke$arity$2 = (function (label,style){
return ghostwheel.logging.group_STAR_.cljs$core$IFn$_invoke$arity$3(true,label,style);
});

ghostwheel.logging.group.cljs$lang$maxFixedArity = 2;

ghostwheel.logging.group_collapsed = (function ghostwheel$logging$group_collapsed(var_args){
var G__84707 = arguments.length;
switch (G__84707) {
case 1:
return ghostwheel.logging.group_collapsed.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return ghostwheel.logging.group_collapsed.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

ghostwheel.logging.group_collapsed.cljs$core$IFn$_invoke$arity$1 = (function (label){
return ghostwheel.logging.group.cljs$core$IFn$_invoke$arity$2(label,null);
});

ghostwheel.logging.group_collapsed.cljs$core$IFn$_invoke$arity$2 = (function (label,style){
return ghostwheel.logging.group_STAR_.cljs$core$IFn$_invoke$arity$3(false,label,style);
});

ghostwheel.logging.group_collapsed.cljs$lang$maxFixedArity = 2;

var plain_group_end_84949 = (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(ghostwheel.logging._STAR_nesting,(function (p1__84714_SHARP_){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(p1__84714_SHARP_,(0),(function (){var x__4219__auto__ = (0);
var y__4220__auto__ = (cljs.core.count(p1__84714_SHARP_) - (2));
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})());
}));
});
ghostwheel.logging.group_end = ((function (plain_group_end_84949){
return (function ghostwheel$logging$group_end(){
var G__84723 = ghostwheel.logging._STAR_report_output_STAR_;
var G__84723__$1 = (((G__84723 instanceof cljs.core.Keyword))?G__84723.fqn:null);
switch (G__84723__$1) {
case "repl":
return plain_group_end_84949();

break;
case "js-console":
return console.groupEnd();

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__84723__$1)].join('')));

}
});})(plain_group_end_84949))
;
ghostwheel.logging.log_bold = (function ghostwheel$logging$log_bold(msg){
return ghostwheel.logging.log.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ghostwheel.logging","weight","ghostwheel.logging/weight",-88030216),"bold"], null));
});
ghostwheel.logging.clog = (function ghostwheel$logging$clog(data){
ghostwheel.logging.log.cljs$core$IFn$_invoke$arity$1(data);

return data;
});
/**
 * Pretty console log
 */
ghostwheel.logging.pr_clog = (function ghostwheel$logging$pr_clog(var_args){
var args__4736__auto__ = [];
var len__4730__auto___84968 = arguments.length;
var i__4731__auto___84969 = (0);
while(true){
if((i__4731__auto___84969 < len__4730__auto___84968)){
args__4736__auto__.push((arguments[i__4731__auto___84969]));

var G__84970 = (i__4731__auto___84969 + (1));
i__4731__auto___84969 = G__84970;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return ghostwheel.logging.pr_clog.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

ghostwheel.logging.pr_clog.cljs$core$IFn$_invoke$arity$variadic = (function (label,data,p__84766){
var vec__84767 = p__84766;
var style = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84767,(0),null);
if(cljs.core.truth_(data)){
ghostwheel.logging.group.cljs$core$IFn$_invoke$arity$2(label,style);

ghostwheel.logging.log.cljs$core$IFn$_invoke$arity$1(data);

ghostwheel.logging.group_end();
} else {
ghostwheel.logging.log.cljs$core$IFn$_invoke$arity$2(label,style);
}

return data;
});

ghostwheel.logging.pr_clog.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
ghostwheel.logging.pr_clog.cljs$lang$applyTo = (function (seq84750){
var G__84752 = cljs.core.first(seq84750);
var seq84750__$1 = cljs.core.next(seq84750);
var G__84753 = cljs.core.first(seq84750__$1);
var seq84750__$2 = cljs.core.next(seq84750__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__84752,G__84753,seq84750__$2);
});


//# sourceMappingURL=ghostwheel.logging.js.map
