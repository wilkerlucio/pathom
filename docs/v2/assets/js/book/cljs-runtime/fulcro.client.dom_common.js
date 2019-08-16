goog.provide('fulcro.client.dom_common');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
goog.require('goog.object');
fulcro.client.dom_common.remove_separators = (function fulcro$client$dom_common$remove_separators(s){
if(cljs.core.truth_(s)){
return clojure.string.replace(s,/^[.#]/,"");
} else {
return null;
}
});
fulcro.client.dom_common.get_tokens = (function fulcro$client$dom_common$get_tokens(k){
return cljs.core.re_seq(/[#.]?[^#.]+/,cljs.core.name(k));
});
/**
 * Parse CSS shorthand keyword and return map of id/classes.
 * 
 *   (parse :.klass3#some-id.klass1.klass2)
 *   => {:id        "some-id"
 *    :classes ["klass3" "klass1" "klass2"]}
 */
fulcro.client.dom_common.parse = (function fulcro$client$dom_common$parse(k){
if(cljs.core.truth_(k)){
var tokens = fulcro.client.dom_common.get_tokens(k);
var id = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (tokens){
return (function (p1__50348_SHARP_){
return cljs.core.re_matches(/^#.*/,p1__50348_SHARP_);
});})(tokens))
,tokens));
var classes = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (tokens,id){
return (function (p1__50349_SHARP_){
return cljs.core.re_matches(/^\..*/,p1__50349_SHARP_);
});})(tokens,id))
,tokens);
var sanitized_id = fulcro.client.dom_common.remove_separators(id);
if(cljs.core.truth_(cljs.core.re_matches(/^(\.[^.#]+|#[^.#]+)+$/,cljs.core.name(k)))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Invalid style keyword. It contains something other than classnames and IDs.",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"item","item",249373802),k], null));
}

var G__50353 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"classes","classes",2037804510),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$2(fulcro.client.dom_common.remove_separators,classes))], null);
if(cljs.core.truth_(sanitized_id)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50353,new cljs.core.Keyword(null,"id","id",-1388402092),sanitized_id);
} else {
return G__50353;
}
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
/**
 * Takes a sequence of classname strings and a string with existing classes. Returns a string of these properly joined.
 * 
 *   classes-str can be nil or and empty string, and classes-seq can be nil or empty.
 */
fulcro.client.dom_common.combined_classes = (function fulcro$client$dom_common$combined_classes(classes_seq,classes_str){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",((cljs.core.seq(classes_str))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(classes_seq,classes_str):classes_seq));
});
/**
 * Combine a hiccup-style keyword with props that are either a JS or CLJS map.
 */
fulcro.client.dom_common.add_kwprops_to_props = (function fulcro$client$dom_common$add_kwprops_to_props(props,kw){
var map__50356 = fulcro.client.dom_common.parse(kw);
var map__50356__$1 = (((((!((map__50356 == null))))?(((((map__50356.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50356.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50356):map__50356);
var classes = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50356__$1,new cljs.core.Keyword(null,"classes","classes",2037804510),cljs.core.PersistentVector.EMPTY);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50356__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
if((((props == null)) || (cljs.core.object_QMARK_(props)))){
var props__$1 = goog.object.clone(props);
var existing_classes = goog.object.get(props__$1,"className");
if(cljs.core.seq(classes)){
var G__50360_50387 = props__$1;
var G__50361_50388 = "className";
var G__50362_50389 = fulcro.client.dom_common.combined_classes(classes,existing_classes);
goog.object.set(G__50360_50387,G__50361_50388,G__50362_50389);
} else {
}

if(cljs.core.truth_(id)){
goog.object.set(props__$1,"id",id);
} else {
}

return props__$1;
} else {
var existing_classes = new cljs.core.Keyword(null,"className","className",-1983287057).cljs$core$IFn$_invoke$arity$1(props);
var G__50366 = (function (){var or__4131__auto__ = props;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var G__50366__$1 = ((cljs.core.seq(classes))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50366,new cljs.core.Keyword(null,"className","className",-1983287057),fulcro.client.dom_common.combined_classes(classes,existing_classes)):G__50366);
if(cljs.core.truth_(id)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50366__$1,new cljs.core.Keyword(null,"id","id",-1388402092),id);
} else {
return G__50366__$1;
}
}
});
fulcro.client.dom_common.tags = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 198, [new cljs.core.Symbol(null,"form","form",16469056,null),"null",new cljs.core.Symbol(null,"audio","audio",-835308448,null),"null",new cljs.core.Symbol(null,"input","input",-2097503808,null),"null",new cljs.core.Symbol(null,"menuitem","menuitem",-1650388416,null),"null",new cljs.core.Symbol(null,"radialGradient","radialGradient",-1252188576,null),"null",new cljs.core.Symbol(null,"feMerge","feMerge",-991380672,null),"null",new cljs.core.Symbol(null,"set","set",1945134081,null),"null",new cljs.core.Symbol(null,"feSpecularLighting","feSpecularLighting",-1387848575,null),"null",new cljs.core.Symbol(null,"base","base",1825810849,null),"null",new cljs.core.Symbol(null,"h1","h1",-256355935,null),"null",new cljs.core.Symbol(null,"feOffset","feOffset",2132960129,null),"null",new cljs.core.Symbol(null,"embed","embed",285618178,null),"null",new cljs.core.Symbol(null,"animateMotion","animateMotion",1168080930,null),"null",new cljs.core.Symbol(null,"h3","h3",-586824606,null),"null",new cljs.core.Symbol(null,"body","body",-408674142,null),"null",new cljs.core.Symbol(null,"hkern","hkern",1679499650,null),"null",new cljs.core.Symbol(null,"keygen","keygen",1068838274,null),"null",new cljs.core.Symbol(null,"font-face-format","font-face-format",-1678541150,null),"null",new cljs.core.Symbol(null,"feFuncA","feFuncA",2088764194,null),"null",new cljs.core.Symbol(null,"progress","progress",1884855074,null),"null",new cljs.core.Symbol(null,"main","main",-477271134,null),"null",new cljs.core.Symbol(null,"cite","cite",-744995773,null),"null",new cljs.core.Symbol(null,"rect","rect",1531628899,null),"null",new cljs.core.Symbol(null,"tref","tref",1718363747,null),"null",new cljs.core.Symbol(null,"meshpatch","meshpatch",-931759517,null),"null",new cljs.core.Symbol(null,"polyline","polyline",-91019517,null),"null",new cljs.core.Symbol(null,"metadata","metadata",-855134172,null),"null",new cljs.core.Symbol(null,"map","map",-1282745308,null),"null",new cljs.core.Symbol(null,"object","object",-1179821820,null),"null",new cljs.core.Symbol(null,"i","i",253690212,null),"null",new cljs.core.Symbol(null,"font-face-name","font-face-name",1644357188,null),"null",new cljs.core.Symbol(null,"p","p",1791580836,null),"null",new cljs.core.Symbol(null,"feFuncR","feFuncR",-1489041724,null),"null",new cljs.core.Symbol(null,"hatchpath","hatchpath",1578923716,null),"null",new cljs.core.Symbol(null,"altGlyphItem","altGlyphItem",-1146936604,null),"null",new cljs.core.Symbol(null,"nav","nav",-1934895292,null),"null",new cljs.core.Symbol(null,"ruby","ruby",-653698108,null),"null",new cljs.core.Symbol(null,"switch","switch",1712412837,null),"null",new cljs.core.Symbol(null,"a","a",-482876059,null),"null",new cljs.core.Symbol(null,"view","view",-1406440955,null),"null",new cljs.core.Symbol(null,"menu","menu",1992786725,null),"null",new cljs.core.Symbol(null,"blockquote","blockquote",2012795717,null),"null",new cljs.core.Symbol(null,"img","img",-1211748411,null),"null",new cljs.core.Symbol(null,"feFuncG","feFuncG",1633205189,null),"null",new cljs.core.Symbol(null,"text","text",-150030170,null),"null",new cljs.core.Symbol(null,"span","span",-1259562778,null),"null",new cljs.core.Symbol(null,"track","track",1836319014,null),"null",new cljs.core.Symbol(null,"data","data",1407862150,null),"null",new cljs.core.Symbol(null,"u","u",483896742,null),"null",new cljs.core.Symbol(null,"dl","dl",-499620186,null),"null",new cljs.core.Symbol(null,"select","select",-1506602266,null),"null",new cljs.core.Symbol(null,"polygon","polygon",-1817382010,null),"null",new cljs.core.Symbol(null,"pattern","pattern",1882666950,null),"null",new cljs.core.Symbol(null,"html","html",641734630,null),"null",new cljs.core.Symbol(null,"foreignObject","foreignObject",1666033638,null),"null",new cljs.core.Symbol(null,"thead","thead",1348656231,null),"null",new cljs.core.Symbol(null,"path","path",1452340359,null),"null",new cljs.core.Symbol(null,"del","del",-2079460185,null),"null",new cljs.core.Symbol(null,"altGlyph","altGlyph",266759591,null),"null",new cljs.core.Symbol(null,"fieldset","fieldset",-309239289,null),"null",new cljs.core.Symbol(null,"aside","aside",-1240038232,null),"null",new cljs.core.Symbol(null,"feBlend","feBlend",-1296776024,null),"null",new cljs.core.Symbol(null,"figure","figure",1079137448,null),"null",new cljs.core.Symbol(null,"textPath","textPath",1909791976,null),"null",new cljs.core.Symbol(null,"figcaption","figcaption",-149590520,null),"null",new cljs.core.Symbol(null,"mask","mask",1054783080,null),"null",new cljs.core.Symbol(null,"q","q",-1965434072,null),"null",new cljs.core.Symbol(null,"bdi","bdi",317505641,null),"null",new cljs.core.Symbol(null,"feDistantLight","feDistantLight",666561161,null),"null",new cljs.core.Symbol(null,"video","video",1797419657,null),"null",new cljs.core.Symbol(null,"address","address",-2094936343,null),"null",new cljs.core.Symbol(null,"caption","caption",785147625,null),"null",new cljs.core.Symbol(null,"dd","dd",300093898,null),"null",new cljs.core.Symbol(null,"rp","rp",-647737686,null),"null",new cljs.core.Symbol(null,"hr","hr",-1276695702,null),"null",new cljs.core.Symbol(null,"meta","meta",-1154898805,null),"null",new cljs.core.Symbol(null,"tbody","tbody",1559853227,null),"null",new cljs.core.Symbol(null,"desc","desc",-560950005,null),"null",new cljs.core.Symbol(null,"table","table",1075588491,null),"null",new cljs.core.Symbol(null,"pre","pre",-535978900,null),"null",new cljs.core.Symbol(null,"ul","ul",291010124,null),"null",new cljs.core.Symbol(null,"feConvolveMatrix","feConvolveMatrix",783477773,null),"null",new cljs.core.Symbol(null,"sup","sup",-398960819,null),"null",new cljs.core.Symbol(null,"dfn","dfn",1882439694,null),"null",new cljs.core.Symbol(null,"sub","sub",-453228498,null),"null",new cljs.core.Symbol(null,"mark","mark",1266715182,null),"null",new cljs.core.Symbol(null,"feDisplacementMap","feDisplacementMap",1817491022,null),"null",new cljs.core.Symbol(null,"unknown","unknown",704553646,null),"null",new cljs.core.Symbol(null,"script","script",336087726,null),"null",new cljs.core.Symbol(null,"feTurbulence","feTurbulence",-574985554,null),"null",new cljs.core.Symbol(null,"big","big",-1750885618,null),"null",new cljs.core.Symbol(null,"button","button",-1197855826,null),"null",new cljs.core.Symbol(null,"font-face-uri","font-face-uri",-1480730674,null),"null",new cljs.core.Symbol(null,"wbr","wbr",1869193327,null),"null",new cljs.core.Symbol(null,"symbol","symbol",601958831,null),"null",new cljs.core.Symbol(null,"strong","strong",1910060527,null),"null",new cljs.core.Symbol(null,"use","use",-205850897,null),"null",new cljs.core.Symbol(null,"solidcolor","solidcolor",-1949678769,null),"null",new cljs.core.Symbol(null,"fePointLight","fePointLight",-18006097,null),"null",new cljs.core.Symbol(null,"li","li",-1930876848,null),"null",new cljs.core.Symbol(null,"dt","dt",1272086768,null),"null",new cljs.core.Symbol(null,"feFuncB","feFuncB",1341251184,null),"null",new cljs.core.Symbol(null,"marker","marker",-1789317456,null),"null",new cljs.core.Symbol(null,"feComponentTransfer","feComponentTransfer",-1656216720,null),"null",new cljs.core.Symbol(null,"td","td",-1174502416,null),"null",new cljs.core.Symbol(null,"tr","tr",215756881,null),"null",new cljs.core.Symbol(null,"circle","circle",-751223407,null),"null",new cljs.core.Symbol(null,"section","section",1340390001,null),"null",new cljs.core.Symbol(null,"feDropShadow","feDropShadow",-1418746191,null),"null",new cljs.core.Symbol(null,"th","th",1094922961,null),"null",new cljs.core.Symbol(null,"time","time",-1268547887,null),"null",new cljs.core.Symbol(null,"optgroup","optgroup",-916153551,null),"null",new cljs.core.Symbol(null,"iframe","iframe",-1770013743,null),"null",new cljs.core.Symbol(null,"color-profile","color-profile",-899111951,null),"null",new cljs.core.Symbol(null,"legend","legend",613339282,null),"null",new cljs.core.Symbol(null,"em","em",-1946622734,null),"null",new cljs.core.Symbol(null,"kbd","kbd",1956688402,null),"null",new cljs.core.Symbol(null,"article","article",1618846482,null),"null",new cljs.core.Symbol(null,"animateColor","animateColor",770461522,null),"null",new cljs.core.Symbol(null,"clipPath","clipPath",705911730,null),"null",new cljs.core.Symbol(null,"abbr","abbr",-565843885,null),"null",new cljs.core.Symbol(null,"altGlyphDef","altGlyphDef",2089795187,null),"null",new cljs.core.Symbol(null,"meshrow","meshrow",1737126611,null),"null",new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null),"null",new cljs.core.Symbol(null,"animate","animate",-804241196,null),"null",new cljs.core.Symbol(null,"source","source",1206599988,null),"null",new cljs.core.Symbol(null,"output","output",534662484,null),"null",new cljs.core.Symbol(null,"font-face","font-face",1136078292,null),"null",new cljs.core.Symbol(null,"feMergeNode","feMergeNode",-51147244,null),"null",new cljs.core.Symbol(null,"feSpotLight","feSpotLight",-1991064555,null),"null",new cljs.core.Symbol(null,"header","header",1759972661,null),"null",new cljs.core.Symbol(null,"datalist","datalist",405488053,null),"null",new cljs.core.Symbol(null,"tfoot","tfoot",938931637,null),"null",new cljs.core.Symbol(null,"s","s",-948495851,null),"null",new cljs.core.Symbol(null,"hatch","hatch",-394733899,null),"null",new cljs.core.Symbol(null,"ins","ins",618547957,null),"null",new cljs.core.Symbol(null,"footer","footer",-1047990379,null),"null",new cljs.core.Symbol(null,"mpath","mpath",-2128345163,null),"null",new cljs.core.Symbol(null,"title","title",-2017930186,null),"null",new cljs.core.Symbol(null,"h5","h5",-188625098,null),"null",new cljs.core.Symbol(null,"meshgradient","meshgradient",-885885130,null),"null",new cljs.core.Symbol(null,"canvas","canvas",-158285962,null),"null",new cljs.core.Symbol(null,"param","param",-640803946,null),"null",new cljs.core.Symbol(null,"font","font",134372278,null),"null",new cljs.core.Symbol(null,"div","div",-1597244137,null),"null",new cljs.core.Symbol(null,"option","option",1705663799,null),"null",new cljs.core.Symbol(null,"feFlood","feFlood",-1078230665,null),"null",new cljs.core.Symbol(null,"summary","summary",2021379479,null),"null",new cljs.core.Symbol(null,"feMorphology","feMorphology",-250249801,null),"null",new cljs.core.Symbol(null,"samp","samp",-1148294633,null),"null",new cljs.core.Symbol(null,"glyphRef","glyphRef",-708619433,null),"null",new cljs.core.Symbol(null,"small","small",-520957065,null),"null",new cljs.core.Symbol(null,"style","style",1143888791,null),"null",new cljs.core.Symbol(null,"textarea","textarea",990155703,null),"null",new cljs.core.Symbol(null,"feGaussianBlur","feGaussianBlur",-1319925736,null),"null",new cljs.core.Symbol(null,"h4","h4",-649572776,null),"null",new cljs.core.Symbol(null,"head","head",869147608,null),"null",new cljs.core.Symbol(null,"g","g",-916345864,null),"null",new cljs.core.Symbol(null,"missing-glyph","missing-glyph",-1319926471,null),"null",new cljs.core.Symbol(null,"stop","stop",-500379815,null),"null",new cljs.core.Symbol(null,"feDiffuseLighting","feDiffuseLighting",-1911067719,null),"null",new cljs.core.Symbol(null,"filter","filter",691993593,null),"null",new cljs.core.Symbol(null,"feComposite","feComposite",-611619814,null),"null",new cljs.core.Symbol(null,"mesh","mesh",2096852122,null),"null",new cljs.core.Symbol(null,"var","var",870848730,null),"null",new cljs.core.Symbol(null,"tspan","tspan",82678330,null),"null",new cljs.core.Symbol(null,"ol","ol",-1721911718,null),"null",new cljs.core.Symbol(null,"details","details",-697640358,null),"null",new cljs.core.Symbol(null,"line","line",1852876762,null),"null",new cljs.core.Symbol(null,"col","col",-318831557,null),"null",new cljs.core.Symbol(null,"label","label",-936024965,null),"null",new cljs.core.Symbol(null,"picture","picture",718588123,null),"null",new cljs.core.Symbol(null,"rt","rt",-2030955077,null),"null",new cljs.core.Symbol(null,"h6","h6",-2097141989,null),"null",new cljs.core.Symbol(null,"vkern","vkern",-432777445,null),"null",new cljs.core.Symbol(null,"link","link",-128631941,null),"null",new cljs.core.Symbol(null,"defs","defs",-1255986052,null),"null",new cljs.core.Symbol(null,"glyph","glyph",-534987652,null),"null",new cljs.core.Symbol(null,"colgroup","colgroup",-2003317124,null),"null",new cljs.core.Symbol(null,"meter","meter",1452889916,null),"null",new cljs.core.Symbol(null,"bdo","bdo",-490616675,null),"null",new cljs.core.Symbol(null,"feImage","feImage",86951197,null),"null",new cljs.core.Symbol(null,"b","b",-1172211299,null),"null",new cljs.core.Symbol(null,"svg","svg",-1797646627,null),"null",new cljs.core.Symbol(null,"feTile","feTile",1564932829,null),"null",new cljs.core.Symbol(null,"ellipse","ellipse",-1518544067,null),"null",new cljs.core.Symbol(null,"code","code",-1068142627,null),"null",new cljs.core.Symbol(null,"dialog","dialog",-1239285634,null),"null",new cljs.core.Symbol(null,"linearGradient","linearGradient",-942471042,null),"null",new cljs.core.Symbol(null,"discard","discard",-299062018,null),"null",new cljs.core.Symbol(null,"font-face-src","font-face-src",739575166,null),"null",new cljs.core.Symbol(null,"noscript","noscript",935754238,null),"null",new cljs.core.Symbol(null,"animateTransform","animateTransform",-1895105954,null),"null",new cljs.core.Symbol(null,"feColorMatrix","feColorMatrix",-56728674,null),"null",new cljs.core.Symbol(null,"h2","h2",1267868799,null),"null",new cljs.core.Symbol(null,"area","area",2112538783,null),"null",new cljs.core.Symbol(null,"br","br",-1720330977,null),"null",new cljs.core.Symbol(null,"image","image",1581806431,null),"null"], null), null);
/**
 * Helper function for generating the docstrings for generated dom functions and
 *   macros.
 */
fulcro.client.dom_common.gen_docstring = (function fulcro$client$dom_common$gen_docstring(tag,client_side_QMARK_){
return ["Returns a ",(cljs.core.truth_(client_side_QMARK_)?"React":"server side")," DOM element. Can be invoked in several ways\n\n","These two are made equivalent at compile time\n","(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag)," \"hello\")\n",["(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag)," nil \"hello\")\n"].join(''),"\n","These two are made equivalent at compile time\n","(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag)," {:onClick f} \"hello\")\n","(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag)," #js {:onClick f} \"hello\")\n","\n","There is also a shorthand for CSS id and class names\n","(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag)," :#the-id.klass.other-klass \"hello\")\n","(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag)," :#the-id.klass.other-klass {:onClick f} \"hello\")"].join('');
});
fulcro.client.dom_common.classes__GT_str = (function fulcro$client$dom_common$classes__GT_str(classes){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1((function (entry){
if((entry instanceof cljs.core.Keyword)){
return new cljs.core.Keyword(null,"classes","classes",2037804510).cljs$core$IFn$_invoke$arity$1(fulcro.client.dom_common.parse(entry));
} else {
if(typeof entry === 'string'){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [entry], null);
} else {
return null;
}
}
})),cljs.core.filter.cljs$core$IFn$_invoke$arity$1(cljs.core.string_QMARK_)),classes));
});
/**
 * Interprets the :classes prop, reducing any non-nil elements into :className. returns the new props with updated
 *   :className and no :classes
 */
fulcro.client.dom_common.interpret_classes = (function fulcro$client$dom_common$interpret_classes(props){
if(((cljs.core.map_QMARK_(props)) && (cljs.core.contains_QMARK_(props,new cljs.core.Keyword(null,"classes","classes",2037804510))))){
var new_class_strings = fulcro.client.dom_common.classes__GT_str(new cljs.core.Keyword(null,"classes","classes",2037804510).cljs$core$IFn$_invoke$arity$1(props));
var strcls = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"className","className",-1983287057).cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "";
}
})();
var final_classes = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(strcls)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new_class_strings)].join('');
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(props,new cljs.core.Keyword(null,"className","className",-1983287057),final_classes),new cljs.core.Keyword(null,"classes","classes",2037804510));
} else {
return props;
}
});

//# sourceMappingURL=fulcro.client.dom_common.js.map
