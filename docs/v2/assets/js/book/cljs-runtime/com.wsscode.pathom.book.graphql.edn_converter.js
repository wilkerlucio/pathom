goog.provide('com.wsscode.pathom.book.graphql.edn_converter');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('cljs.pprint');
goog.require('clojure.string');
goog.require('com.wsscode.pathom.book.app_types');
goog.require('com.wsscode.pathom.book.ui.codemirror');
goog.require('com.wsscode.pathom.graphql');
goog.require('fulcro.client');
goog.require('fulcro.client.localized_dom');
goog.require('fulcro.client.mutations');
goog.require('fulcro.client.primitives');
goog.require('garden.selectors');
goog.require('com.wsscode.pathom.viz.codemirror');
goog.require('goog.object');
com.wsscode.pathom.book.graphql.edn_converter.pretty_print_string = (function com$wsscode$pathom$book$graphql$edn_converter$pretty_print_string(x){
return clojure.string.replace((function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__64038_64220 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__64039_64221 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__64040_64222 = true;
var _STAR_print_fn_STAR__temp_val__64041_64223 = ((function (_STAR_print_newline_STAR__orig_val__64038_64220,_STAR_print_fn_STAR__orig_val__64039_64221,_STAR_print_newline_STAR__temp_val__64040_64222,sb__4661__auto__){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__64038_64220,_STAR_print_fn_STAR__orig_val__64039_64221,_STAR_print_newline_STAR__temp_val__64040_64222,sb__4661__auto__))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__64040_64222;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__64041_64223;

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(x);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__64039_64221;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__64038_64220;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})(),/'/,"");
});
fulcro.client.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("com.wsscode.pathom.book.graphql.edn-converter","update-query","com.wsscode.pathom.book.graphql.edn-converter/update-query",-546966308,null),(function (fulcro_incoming_env,_,p__64050){
var map__64052 = p__64050;
var map__64052__$1 = (((((!((map__64052 == null))))?(((((map__64052.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64052.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64052):map__64052);
var om_next_query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64052__$1,new cljs.core.Keyword("ui","om-next-query","ui/om-next-query",-1278585882));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var map__64056 = fulcro_incoming_env;
var map__64056__$1 = (((((!((map__64056 == null))))?(((((map__64056.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64056.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64056):map__64056);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64056__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64056__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__64056,map__64056__$1,state,ref,map__64052,map__64052__$1,om_next_query){
return (function (){
var gql = (function (){try{var gql = com.wsscode.pathom.graphql.query__GT_graphql.cljs$core$IFn$_invoke$arity$1(cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(om_next_query));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc_in,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ref,new cljs.core.Keyword("ui","translate-error?","ui/translate-error?",1085317203)),false);

return gql;
}catch (e64059){var ___$1 = e64059;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc_in,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ref,new cljs.core.Keyword("ui","translate-error?","ui/translate-error?",1085317203)),true);

return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ref,new cljs.core.Keyword("ui","graphql-query","ui/graphql-query",1858944002)));
}})();
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(((function (gql,map__64056,map__64056__$1,state,ref,map__64052,map__64052__$1,om_next_query){
return (function (p1__64044_SHARP_){
return cljs.core.assoc_in(p1__64044_SHARP_,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ref,new cljs.core.Keyword("ui","om-next-query","ui/om-next-query",-1278585882)),om_next_query);
});})(gql,map__64056,map__64056__$1,state,ref,map__64052,map__64052__$1,om_next_query))
,((function (gql,map__64056,map__64056__$1,state,ref,map__64052,map__64052__$1,om_next_query){
return (function (p1__64045_SHARP_){
return cljs.core.assoc_in(p1__64045_SHARP_,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ref,new cljs.core.Keyword("ui","graphql-query","ui/graphql-query",1858944002)),gql);
});})(gql,map__64056,map__64056__$1,state,ref,map__64052,map__64052__$1,om_next_query))
));
});})(map__64056,map__64056__$1,state,ref,map__64052,map__64052__$1,om_next_query))
], null);
})(),(function (){var ___$1 = fulcro_incoming_env;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"refresh","refresh",1947415525),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","om-next-query","ui/om-next-query",-1278585882)], null)], null);
})()], 0));
}));
if((typeof com !== 'undefined') && (typeof com.wsscode !== 'undefined') && (typeof com.wsscode.pathom !== 'undefined') && (typeof com.wsscode.pathom.book !== 'undefined') && (typeof com.wsscode.pathom.book.graphql !== 'undefined') && (typeof com.wsscode.pathom.book.graphql.edn_converter !== 'undefined') && (typeof com.wsscode.pathom.book.graphql.edn_converter.GraphQlQueryTranslator !== 'undefined')){
} else {
/**
 * @constructor
 * @nocollapse
 */
com.wsscode.pathom.book.graphql.edn_converter.GraphQlQueryTranslator = (function com$wsscode$pathom$book$graphql$edn_converter$GraphQlQueryTranslator(){
var this__51967__auto__ = this;
React.Component.apply(this__51967__auto__,arguments);

if((!((this__51967__auto__.initLocalState == null)))){
this__51967__auto__.state = this__51967__auto__.initLocalState();
} else {
this__51967__auto__.state = ({});
}

return this__51967__auto__;
});

goog.object.extend(com.wsscode.pathom.book.graphql.edn_converter.GraphQlQueryTranslator.prototype,React.Component.prototype,fulcro.client.primitives.default_component_prototype);
}

fulcro.client.primitives._register_component_BANG_(new cljs.core.Keyword("com.wsscode.pathom.book.graphql.edn-converter","GraphQlQueryTranslator","com.wsscode.pathom.book.graphql.edn-converter/GraphQlQueryTranslator",453149032),com.wsscode.pathom.book.graphql.edn_converter.GraphQlQueryTranslator);

var x64069_64242 = com.wsscode.pathom.book.graphql.edn_converter.GraphQlQueryTranslator.prototype;
x64069_64242.render = ((function (x64069_64242){
return (function (){
var this__50885__auto__ = this;
var this$ = this__50885__auto__;
var _STAR_reconciler_STAR__orig_val__64071 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__64072 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__64073 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__64074 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__64075 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__64076 = fulcro.client.primitives.get_reconciler(this__50885__auto__);
var _STAR_depth_STAR__temp_val__64077 = (fulcro.client.primitives.depth(this__50885__auto__) + (1));
var _STAR_shared_STAR__temp_val__64078 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__50885__auto__);
var _STAR_instrument_STAR__temp_val__64079 = fulcro.client.primitives.instrument(this__50885__auto__);
var _STAR_parent_STAR__temp_val__64080 = this__50885__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__64076;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__64077;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__64078;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__64079;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__64080;

try{var map__64085 = fulcro.client.primitives.props(this$);
var map__64085__$1 = (((((!((map__64085 == null))))?(((((map__64085.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64085.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64085):map__64085);
var om_next_query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64085__$1,new cljs.core.Keyword("ui","om-next-query","ui/om-next-query",-1278585882));
var graphql_query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64085__$1,new cljs.core.Keyword("ui","graphql-query","ui/graphql-query",1858944002));
var translate_error_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64085__$1,new cljs.core.Keyword("ui","translate-error?","ui/translate-error?",1085317203));
var _ = fulcro.client.primitives.get_computed.cljs$core$IFn$_invoke$arity$1(this$);
var css = fulcro_css.css_implementation.get_classnames(com.wsscode.pathom.book.graphql.edn_converter.GraphQlQueryTranslator);
return fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"classes","classes",2037804510),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container",".container",-1441208944),(cljs.core.truth_(translate_error_QMARK_)?new cljs.core.Keyword(null,".translate-error",".translate-error",614492634):null)], null)], null),com.wsscode.pathom.book.ui.codemirror.clojure(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"force-index-update?","force-index-update?",1651651111),true,new cljs.core.Keyword(null,"value","value",305978217),om_next_query,new cljs.core.Keyword(null,"onChange","onChange",-312891301),((function (map__64085,map__64085__$1,om_next_query,graphql_query,translate_error_QMARK_,_,css,_STAR_reconciler_STAR__orig_val__64071,_STAR_depth_STAR__orig_val__64072,_STAR_shared_STAR__orig_val__64073,_STAR_instrument_STAR__orig_val__64074,_STAR_parent_STAR__orig_val__64075,_STAR_reconciler_STAR__temp_val__64076,_STAR_depth_STAR__temp_val__64077,_STAR_shared_STAR__temp_val__64078,_STAR_instrument_STAR__temp_val__64079,_STAR_parent_STAR__temp_val__64080,this$,this__50885__auto__,x64069_64242){
return (function (p1__64064_SHARP_){
return fulcro.client.primitives.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("com.wsscode.pathom.book.graphql.edn-converter","update-query","com.wsscode.pathom.book.graphql.edn-converter/update-query",-546966308,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword("ui","om-next-query","ui/om-next-query",-1278585882),null,(1),null)),(new cljs.core.List(null,p1__64064_SHARP_,null,(1),null)))))),null,(1),null))))),null,(1),null)))))));
});})(map__64085,map__64085__$1,om_next_query,graphql_query,translate_error_QMARK_,_,css,_STAR_reconciler_STAR__orig_val__64071,_STAR_depth_STAR__orig_val__64072,_STAR_shared_STAR__orig_val__64073,_STAR_instrument_STAR__orig_val__64074,_STAR_parent_STAR__orig_val__64075,_STAR_reconciler_STAR__temp_val__64076,_STAR_depth_STAR__temp_val__64077,_STAR_shared_STAR__temp_val__64078,_STAR_instrument_STAR__temp_val__64079,_STAR_parent_STAR__temp_val__64080,this$,this__50885__auto__,x64069_64242))
], null)),fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".divisor-v",".divisor-v",-1827704384)], 0)),com.wsscode.pathom.book.ui.codemirror.graphql(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"force-index-update?","force-index-update?",1651651111),true,new cljs.core.Keyword(null,"value","value",305978217),graphql_query,new cljs.core.Keyword("com.wsscode.pathom.viz.codemirror","options","com.wsscode.pathom.viz.codemirror/options",760650482),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.codemirror","readOnly","com.wsscode.pathom.viz.codemirror/readOnly",-9416564),true], null)], null))], 0));
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__64075;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__64074;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__64073;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__64072;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__64071;
}});})(x64069_64242))
;


com.wsscode.pathom.book.graphql.edn_converter.GraphQlQueryTranslator.prototype.constructor = com.wsscode.pathom.book.graphql.edn_converter.GraphQlQueryTranslator;

com.wsscode.pathom.book.graphql.edn_converter.GraphQlQueryTranslator.prototype.constructor.displayName = "com.wsscode.pathom.book.graphql.edn-converter/GraphQlQueryTranslator";

com.wsscode.pathom.book.graphql.edn_converter.GraphQlQueryTranslator.prototype.fulcro$isComponent = true;

var x64090_64257 = com.wsscode.pathom.book.graphql.edn_converter.GraphQlQueryTranslator;
x64090_64257.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x64090_64257.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x64090_64257){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"grid",new cljs.core.Keyword(null,"grid-template-columns","grid-template-columns",-594112133),"1fr 20px 1fr",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"20px"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"0"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [garden.selectors._GT_.cljs$core$IFn$_invoke$arity$2("",new cljs.core.Keyword(null,"div","div",1057191632)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"height","height",1025178622),"500px",new cljs.core.Keyword(null,"position","position",-2011731912),"relative"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".divisor-v",".divisor-v",-1827704384),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"position","position",-2011731912),"static",new cljs.core.Keyword(null,"width","width",-384071477),"20px",new cljs.core.Keyword(null,"background","background",-863952629),"#eee",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #e0e0e0",new cljs.core.Keyword(null,"border-top","border-top",-158897573),"0",new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415),"0",new cljs.core.Keyword(null,"z-index","z-index",1892827090),"2"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".translate-error",".translate-error",614492634),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#f00"], null)], null)], null);
});})(x64090_64257))
;

x64090_64257.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x64090_64257){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.viz.codemirror.Editor], null);
});})(x64090_64257))
;

x64090_64257.fulcro$client$primitives$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

x64090_64257.fulcro$client$primitives$InitialAppState$initial_state$arity$2 = ((function (x64090_64257){
return (function (this$,params){
var this$__$1 = this;
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("com.wsscode.pathom.book.graphql.edn-converter","id","com.wsscode.pathom.book.graphql.edn-converter/id",-566595640),cljs.core.random_uuid(),new cljs.core.Keyword("ui","om-next-query","ui/om-next-query",-1278585882),"[]",new cljs.core.Keyword("ui","graphql-query","ui/graphql-query",1858944002),"",new cljs.core.Keyword("ui","translate-error?","ui/translate-error?",1085317203),false], null),params], 0));
});})(x64090_64257))
;

x64090_64257.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x64090_64257.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x64090_64257){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.graphql.edn-converter","id","com.wsscode.pathom.book.graphql.edn-converter/id",-566595640),new cljs.core.Keyword("com.wsscode.pathom.book.graphql.edn-converter","id","com.wsscode.pathom.book.graphql.edn-converter/id",-566595640).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x64090_64257))
;

x64090_64257.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x64090_64257.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x64090_64257){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.graphql.edn-converter","id","com.wsscode.pathom.book.graphql.edn-converter/id",-566595640),new cljs.core.Keyword("ui","om-next-query","ui/om-next-query",-1278585882),new cljs.core.Keyword("ui","graphql-query","ui/graphql-query",1858944002),new cljs.core.Keyword("ui","translate-error?","ui/translate-error?",1085317203)], null);
});})(x64090_64257))
;


var x64099_64262 = com.wsscode.pathom.book.graphql.edn_converter.GraphQlQueryTranslator.prototype;
x64099_64262.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x64099_64262.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x64099_64262){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"grid",new cljs.core.Keyword(null,"grid-template-columns","grid-template-columns",-594112133),"1fr 20px 1fr",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"20px"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"0"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [garden.selectors._GT_.cljs$core$IFn$_invoke$arity$2("",new cljs.core.Keyword(null,"div","div",1057191632)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"height","height",1025178622),"500px",new cljs.core.Keyword(null,"position","position",-2011731912),"relative"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".divisor-v",".divisor-v",-1827704384),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"position","position",-2011731912),"static",new cljs.core.Keyword(null,"width","width",-384071477),"20px",new cljs.core.Keyword(null,"background","background",-863952629),"#eee",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #e0e0e0",new cljs.core.Keyword(null,"border-top","border-top",-158897573),"0",new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415),"0",new cljs.core.Keyword(null,"z-index","z-index",1892827090),"2"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".translate-error",".translate-error",614492634),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#f00"], null)], null)], null);
});})(x64099_64262))
;

x64099_64262.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x64099_64262){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.viz.codemirror.Editor], null);
});})(x64099_64262))
;

x64099_64262.fulcro$client$primitives$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

x64099_64262.fulcro$client$primitives$InitialAppState$initial_state$arity$2 = ((function (x64099_64262){
return (function (this$,params){
var this$__$1 = this;
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("com.wsscode.pathom.book.graphql.edn-converter","id","com.wsscode.pathom.book.graphql.edn-converter/id",-566595640),cljs.core.random_uuid(),new cljs.core.Keyword("ui","om-next-query","ui/om-next-query",-1278585882),"[]",new cljs.core.Keyword("ui","graphql-query","ui/graphql-query",1858944002),"",new cljs.core.Keyword("ui","translate-error?","ui/translate-error?",1085317203),false], null),params], 0));
});})(x64099_64262))
;

x64099_64262.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x64099_64262.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x64099_64262){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.graphql.edn-converter","id","com.wsscode.pathom.book.graphql.edn-converter/id",-566595640),new cljs.core.Keyword("com.wsscode.pathom.book.graphql.edn-converter","id","com.wsscode.pathom.book.graphql.edn-converter/id",-566595640).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x64099_64262))
;

x64099_64262.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x64099_64262.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x64099_64262){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.graphql.edn-converter","id","com.wsscode.pathom.book.graphql.edn-converter/id",-566595640),new cljs.core.Keyword("ui","om-next-query","ui/om-next-query",-1278585882),new cljs.core.Keyword("ui","graphql-query","ui/graphql-query",1858944002),new cljs.core.Keyword("ui","translate-error?","ui/translate-error?",1085317203)], null);
});})(x64099_64262))
;


com.wsscode.pathom.book.graphql.edn_converter.GraphQlQueryTranslator.cljs$lang$type = true;

com.wsscode.pathom.book.graphql.edn_converter.GraphQlQueryTranslator.cljs$lang$ctorStr = "com.wsscode.pathom.book.graphql.edn-converter/GraphQlQueryTranslator";

com.wsscode.pathom.book.graphql.edn_converter.GraphQlQueryTranslator.cljs$lang$ctorPrWriter = (function (this__51970__auto__,writer__51971__auto__,opt__51972__auto__){
return cljs.core._write(writer__51971__auto__,"com.wsscode.pathom.book.graphql.edn-converter/GraphQlQueryTranslator");
});
com.wsscode.pathom.book.graphql.edn_converter.graphql_query_translator = fulcro.client.primitives.factory.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.book.graphql.edn_converter.GraphQlQueryTranslator);
com.wsscode.pathom.book.graphql.edn_converter.ref_transact_BANG_ = (function com$wsscode$pathom$book$graphql$edn_converter$ref_transact_BANG_(this$,props,ident_attr,tx){
return fulcro.client.primitives.transact_BANG_.cljs$core$IFn$_invoke$arity$3(fulcro.client.primitives.get_reconciler(this$),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ident_attr,cljs.core.get.cljs$core$IFn$_invoke$arity$2(props,ident_attr)], null),tx);
});
if((typeof com !== 'undefined') && (typeof com.wsscode !== 'undefined') && (typeof com.wsscode.pathom !== 'undefined') && (typeof com.wsscode.pathom.book !== 'undefined') && (typeof com.wsscode.pathom.book.graphql !== 'undefined') && (typeof com.wsscode.pathom.book.graphql.edn_converter !== 'undefined') && (typeof com.wsscode.pathom.book.graphql.edn_converter.QueryTranslatorWithDemos !== 'undefined')){
} else {
/**
 * @constructor
 * @nocollapse
 */
com.wsscode.pathom.book.graphql.edn_converter.QueryTranslatorWithDemos = (function com$wsscode$pathom$book$graphql$edn_converter$QueryTranslatorWithDemos(){
var this__51967__auto__ = this;
React.Component.apply(this__51967__auto__,arguments);

if((!((this__51967__auto__.initLocalState == null)))){
this__51967__auto__.state = this__51967__auto__.initLocalState();
} else {
this__51967__auto__.state = ({});
}

return this__51967__auto__;
});

goog.object.extend(com.wsscode.pathom.book.graphql.edn_converter.QueryTranslatorWithDemos.prototype,React.Component.prototype,fulcro.client.primitives.default_component_prototype);
}

fulcro.client.primitives._register_component_BANG_(new cljs.core.Keyword("com.wsscode.pathom.book.graphql.edn-converter","QueryTranslatorWithDemos","com.wsscode.pathom.book.graphql.edn-converter/QueryTranslatorWithDemos",-135242401),com.wsscode.pathom.book.graphql.edn_converter.QueryTranslatorWithDemos);

var x64121_64269 = com.wsscode.pathom.book.graphql.edn_converter.QueryTranslatorWithDemos.prototype;
x64121_64269.render = ((function (x64121_64269){
return (function (){
var this__50885__auto__ = this;
var this$ = this__50885__auto__;
var _STAR_reconciler_STAR__orig_val__64122 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__64123 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__64124 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__64125 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__64126 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__64127 = fulcro.client.primitives.get_reconciler(this__50885__auto__);
var _STAR_depth_STAR__temp_val__64128 = (fulcro.client.primitives.depth(this__50885__auto__) + (1));
var _STAR_shared_STAR__temp_val__64129 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__50885__auto__);
var _STAR_instrument_STAR__temp_val__64130 = fulcro.client.primitives.instrument(this__50885__auto__);
var _STAR_parent_STAR__temp_val__64131 = this__50885__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__64127;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__64128;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__64129;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__64130;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__64131;

try{var map__64132 = fulcro.client.primitives.props(this$);
var map__64132__$1 = (((((!((map__64132 == null))))?(((((map__64132.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64132.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64132):map__64132);
var translator = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64132__$1,new cljs.core.Keyword("com.wsscode.pathom.book.graphql.edn-converter","translator","com.wsscode.pathom.book.graphql.edn-converter/translator",1385387553));
var query_examples = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64132__$1,new cljs.core.Keyword("com.wsscode.pathom.book.graphql.edn-converter","query-examples","com.wsscode.pathom.book.graphql.edn-converter/query-examples",1092149865));
var _ = fulcro.client.primitives.get_computed.cljs$core$IFn$_invoke$arity$1(this$);
var css = fulcro_css.css_implementation.get_classnames(com.wsscode.pathom.book.graphql.edn_converter.QueryTranslatorWithDemos);
return fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null,fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null,(function (){var iter__4523__auto__ = ((function (map__64132,map__64132__$1,translator,query_examples,_,css,_STAR_reconciler_STAR__orig_val__64122,_STAR_depth_STAR__orig_val__64123,_STAR_shared_STAR__orig_val__64124,_STAR_instrument_STAR__orig_val__64125,_STAR_parent_STAR__orig_val__64126,_STAR_reconciler_STAR__temp_val__64127,_STAR_depth_STAR__temp_val__64128,_STAR_shared_STAR__temp_val__64129,_STAR_instrument_STAR__temp_val__64130,_STAR_parent_STAR__temp_val__64131,this$,this__50885__auto__,x64121_64269){
return (function com$wsscode$pathom$book$graphql$edn_converter$iter__64139(s__64140){
return (new cljs.core.LazySeq(null,((function (map__64132,map__64132__$1,translator,query_examples,_,css,_STAR_reconciler_STAR__orig_val__64122,_STAR_depth_STAR__orig_val__64123,_STAR_shared_STAR__orig_val__64124,_STAR_instrument_STAR__orig_val__64125,_STAR_parent_STAR__orig_val__64126,_STAR_reconciler_STAR__temp_val__64127,_STAR_depth_STAR__temp_val__64128,_STAR_shared_STAR__temp_val__64129,_STAR_instrument_STAR__temp_val__64130,_STAR_parent_STAR__temp_val__64131,this$,this__50885__auto__,x64121_64269){
return (function (){
var s__64140__$1 = s__64140;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__64140__$1);
if(temp__5720__auto__){
var s__64140__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__64140__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__64140__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__64144 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__64143 = (0);
while(true){
if((i__64143 < size__4522__auto__)){
var vec__64154 = cljs.core._nth(c__4521__auto__,i__64143);
var title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64154,(0),null);
var example = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64154,(1),null);
cljs.core.chunk_append(b__64144,fulcro.client.localized_dom.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([({"key": title, "className": new cljs.core.Keyword(null,"button","button",1456579943).cljs$core$IFn$_invoke$arity$1(css), "onClick": ((function (i__64143,vec__64154,title,example,c__4521__auto__,size__4522__auto__,b__64144,s__64140__$2,temp__5720__auto__,map__64132,map__64132__$1,translator,query_examples,_,css,_STAR_reconciler_STAR__orig_val__64122,_STAR_depth_STAR__orig_val__64123,_STAR_shared_STAR__orig_val__64124,_STAR_instrument_STAR__orig_val__64125,_STAR_parent_STAR__orig_val__64126,_STAR_reconciler_STAR__temp_val__64127,_STAR_depth_STAR__temp_val__64128,_STAR_shared_STAR__temp_val__64129,_STAR_instrument_STAR__temp_val__64130,_STAR_parent_STAR__temp_val__64131,this$,this__50885__auto__,x64121_64269){
return (function (){
return com.wsscode.pathom.book.graphql.edn_converter.ref_transact_BANG_(this$,translator,new cljs.core.Keyword("com.wsscode.pathom.book.graphql.edn-converter","id","com.wsscode.pathom.book.graphql.edn-converter/id",-566595640),cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("com.wsscode.pathom.book.graphql.edn-converter","update-query","com.wsscode.pathom.book.graphql.edn-converter/update-query",-546966308,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword("ui","om-next-query","ui/om-next-query",-1278585882),null,(1),null)),(new cljs.core.List(null,com.wsscode.pathom.book.graphql.edn_converter.pretty_print_string(example),null,(1),null)))))),null,(1),null))))),null,(1),null)))))));
});})(i__64143,vec__64154,title,example,c__4521__auto__,size__4522__auto__,b__64144,s__64140__$2,temp__5720__auto__,map__64132,map__64132__$1,translator,query_examples,_,css,_STAR_reconciler_STAR__orig_val__64122,_STAR_depth_STAR__orig_val__64123,_STAR_shared_STAR__orig_val__64124,_STAR_instrument_STAR__orig_val__64125,_STAR_parent_STAR__orig_val__64126,_STAR_reconciler_STAR__temp_val__64127,_STAR_depth_STAR__temp_val__64128,_STAR_shared_STAR__temp_val__64129,_STAR_instrument_STAR__temp_val__64130,_STAR_parent_STAR__temp_val__64131,this$,this__50885__auto__,x64121_64269))
}),title], 0)));

var G__64279 = (i__64143 + (1));
i__64143 = G__64279;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__64144),com$wsscode$pathom$book$graphql$edn_converter$iter__64139(cljs.core.chunk_rest(s__64140__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__64144),null);
}
} else {
var vec__64163 = cljs.core.first(s__64140__$2);
var title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64163,(0),null);
var example = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64163,(1),null);
return cljs.core.cons(fulcro.client.localized_dom.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([({"key": title, "className": new cljs.core.Keyword(null,"button","button",1456579943).cljs$core$IFn$_invoke$arity$1(css), "onClick": ((function (vec__64163,title,example,s__64140__$2,temp__5720__auto__,map__64132,map__64132__$1,translator,query_examples,_,css,_STAR_reconciler_STAR__orig_val__64122,_STAR_depth_STAR__orig_val__64123,_STAR_shared_STAR__orig_val__64124,_STAR_instrument_STAR__orig_val__64125,_STAR_parent_STAR__orig_val__64126,_STAR_reconciler_STAR__temp_val__64127,_STAR_depth_STAR__temp_val__64128,_STAR_shared_STAR__temp_val__64129,_STAR_instrument_STAR__temp_val__64130,_STAR_parent_STAR__temp_val__64131,this$,this__50885__auto__,x64121_64269){
return (function (){
return com.wsscode.pathom.book.graphql.edn_converter.ref_transact_BANG_(this$,translator,new cljs.core.Keyword("com.wsscode.pathom.book.graphql.edn-converter","id","com.wsscode.pathom.book.graphql.edn-converter/id",-566595640),cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("com.wsscode.pathom.book.graphql.edn-converter","update-query","com.wsscode.pathom.book.graphql.edn-converter/update-query",-546966308,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword("ui","om-next-query","ui/om-next-query",-1278585882),null,(1),null)),(new cljs.core.List(null,com.wsscode.pathom.book.graphql.edn_converter.pretty_print_string(example),null,(1),null)))))),null,(1),null))))),null,(1),null)))))));
});})(vec__64163,title,example,s__64140__$2,temp__5720__auto__,map__64132,map__64132__$1,translator,query_examples,_,css,_STAR_reconciler_STAR__orig_val__64122,_STAR_depth_STAR__orig_val__64123,_STAR_shared_STAR__orig_val__64124,_STAR_instrument_STAR__orig_val__64125,_STAR_parent_STAR__orig_val__64126,_STAR_reconciler_STAR__temp_val__64127,_STAR_depth_STAR__temp_val__64128,_STAR_shared_STAR__temp_val__64129,_STAR_instrument_STAR__temp_val__64130,_STAR_parent_STAR__temp_val__64131,this$,this__50885__auto__,x64121_64269))
}),title], 0)),com$wsscode$pathom$book$graphql$edn_converter$iter__64139(cljs.core.rest(s__64140__$2)));
}
} else {
return null;
}
break;
}
});})(map__64132,map__64132__$1,translator,query_examples,_,css,_STAR_reconciler_STAR__orig_val__64122,_STAR_depth_STAR__orig_val__64123,_STAR_shared_STAR__orig_val__64124,_STAR_instrument_STAR__orig_val__64125,_STAR_parent_STAR__orig_val__64126,_STAR_reconciler_STAR__temp_val__64127,_STAR_depth_STAR__temp_val__64128,_STAR_shared_STAR__temp_val__64129,_STAR_instrument_STAR__temp_val__64130,_STAR_parent_STAR__temp_val__64131,this$,this__50885__auto__,x64121_64269))
,null,null));
});})(map__64132,map__64132__$1,translator,query_examples,_,css,_STAR_reconciler_STAR__orig_val__64122,_STAR_depth_STAR__orig_val__64123,_STAR_shared_STAR__orig_val__64124,_STAR_instrument_STAR__orig_val__64125,_STAR_parent_STAR__orig_val__64126,_STAR_reconciler_STAR__temp_val__64127,_STAR_depth_STAR__temp_val__64128,_STAR_shared_STAR__temp_val__64129,_STAR_instrument_STAR__temp_val__64130,_STAR_parent_STAR__temp_val__64131,this$,this__50885__auto__,x64121_64269))
;
return iter__4523__auto__(query_examples);
})()], 0)),(com.wsscode.pathom.book.graphql.edn_converter.graphql_query_translator.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom.book.graphql.edn_converter.graphql_query_translator.cljs$core$IFn$_invoke$arity$1(translator) : com.wsscode.pathom.book.graphql.edn_converter.graphql_query_translator.call(null,translator))], 0));
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__64126;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__64125;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__64124;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__64123;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__64122;
}});})(x64121_64269))
;


com.wsscode.pathom.book.graphql.edn_converter.QueryTranslatorWithDemos.prototype.constructor = com.wsscode.pathom.book.graphql.edn_converter.QueryTranslatorWithDemos;

com.wsscode.pathom.book.graphql.edn_converter.QueryTranslatorWithDemos.prototype.constructor.displayName = "com.wsscode.pathom.book.graphql.edn-converter/QueryTranslatorWithDemos";

com.wsscode.pathom.book.graphql.edn_converter.QueryTranslatorWithDemos.prototype.fulcro$isComponent = true;

var x64172_64284 = com.wsscode.pathom.book.graphql.edn_converter.QueryTranslatorWithDemos;
x64172_64284.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x64172_64284.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x64172_64284){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".button",".button",48002398),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #ccc",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"4px",new cljs.core.Keyword(null,"color","color",1011675173),"#333",new cljs.core.Keyword(null,"outline","outline",793464534),"0",new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"10px",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"12px",new cljs.core.Keyword(null,"padding","padding",1660304693),"6px 12px"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:hover","&:hover",-852658855),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"#e6e6e6",new cljs.core.Keyword(null,"border-color","border-color",-2059162761),"#adadad"], null)], null)], null)], null);
});})(x64172_64284))
;

x64172_64284.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x64172_64284){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.book.graphql.edn_converter.GraphQlQueryTranslator], null);
});})(x64172_64284))
;

x64172_64284.fulcro$client$primitives$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

x64172_64284.fulcro$client$primitives$InitialAppState$initial_state$arity$2 = ((function (x64172_64284){
return (function (this$,params){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.book.graphql.edn-converter","id","com.wsscode.pathom.book.graphql.edn-converter/id",-566595640),cljs.core.random_uuid(),new cljs.core.Keyword("com.wsscode.pathom.book.graphql.edn-converter","query-examples","com.wsscode.pathom.book.graphql.edn-converter/query-examples",1092149865),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Simple",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","id","user/id",-1375756663),new cljs.core.Keyword("user","name","user/name",1848814598)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Join",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("app","me","app/me",-139038980),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","id","user/id",-1375756663),new cljs.core.Keyword("user","name","user/name",1848814598)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Ident",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","login","user/login",51503538),"wilkerlucio"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bio","bio",-331851886),new cljs.core.Keyword(null,"url","url",276297046)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("organization","login","organization/login",1092606746),"clojure"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"url","url",276297046)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("github.repository","nameAndowner","github.repository/nameAndowner",-1371025972),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["pathom","wilkerlucio"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"name","name",1843675177)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Join Parameters",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.list(new cljs.core.Keyword("app","allUsers","app/allUsers",-1127354237),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"limit","limit",-1355822363),(10)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","id","user/id",-1375756663),new cljs.core.Keyword("user","name","user/name",1848814598)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Aliases",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.list(new cljs.core.Keyword(null,"property","property",-1114278232),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.graphql","alias","com.wsscode.pathom.graphql/alias",-1051418195),"aliased",new cljs.core.Keyword(null,"another","another",-894849122),"param"], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"subquery","subquery",-643148523)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Enums",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"viewer","viewer",-783949853),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.list(new cljs.core.Keyword(null,"starredRepositories","starredRepositories",634051964),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"first","first",-644103046),(10),new cljs.core.Keyword(null,"orderBy","orderBy",-1329797793),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Symbol(null,"STARRED_AT","STARRED_AT",-699972088,null),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.Symbol(null,"DESC","DESC",-2083797085,null)], null)], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"updatedAt","updatedAt",1796679523)], null)], null)], null)], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Union",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("app","timeline","app/timeline",192803290),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("app","User","app/User",837595025),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","id","user/id",-1375756663),new cljs.core.Keyword("user","name","user/name",1848814598)], null),new cljs.core.Keyword("app","Activity","app/Activity",1385801694),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("activity","id","activity/id",17475365),new cljs.core.Keyword("activity","title","activity/title",-2103141186),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("activity","user","activity/user",-1107092759),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","name","user/name",1848814598)], null)], null)], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Inline Union",cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("app","timeline","app/timeline",192803290),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("entity","id","entity/id",400070257),cljs.core.list(new cljs.core.Keyword("user","name","user/name",1848814598),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.graphql","on","com.wsscode.pathom.graphql/on",1244976995),new cljs.core.Keyword("app","User","app/User",837595025)], null)),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.list(new cljs.core.Keyword("activity","user","activity/user",-1107092759),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.graphql","on","com.wsscode.pathom.graphql/on",1244976995),new cljs.core.Keyword("app","User","app/User",837595025)], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","email","user/email",1419686391)], null)], null)], null)], null)], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Recursive queries",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ofType","ofType",1957704931),(3)], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Mutation",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.list(new cljs.core.Symbol("users","create","users/create",327995079,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("user","id","user/id",-1375756663),(123),new cljs.core.Keyword("user","name","user/name",1848814598),"Foo"], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clientMutationId","clientMutationId",2051148382)], null)], null)], null)], null)], null),new cljs.core.Keyword("com.wsscode.pathom.book.graphql.edn-converter","translator","com.wsscode.pathom.book.graphql.edn-converter/translator",1385387553),fulcro.client.primitives.get_initial_state(com.wsscode.pathom.book.graphql.edn_converter.GraphQlQueryTranslator,params)], null);
});})(x64172_64284))
;

x64172_64284.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x64172_64284.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x64172_64284){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.graphql.edn-converter","id","com.wsscode.pathom.book.graphql.edn-converter/id",-566595640),new cljs.core.Keyword("com.wsscode.pathom.book.graphql.edn-converter","id","com.wsscode.pathom.book.graphql.edn-converter/id",-566595640).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x64172_64284))
;

x64172_64284.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x64172_64284.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x64172_64284){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.graphql.edn-converter","id","com.wsscode.pathom.book.graphql.edn-converter/id",-566595640),new cljs.core.Keyword("com.wsscode.pathom.book.graphql.edn-converter","query-examples","com.wsscode.pathom.book.graphql.edn-converter/query-examples",1092149865),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.book.graphql.edn-converter","translator","com.wsscode.pathom.book.graphql.edn-converter/translator",1385387553),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.book.graphql.edn_converter.GraphQlQueryTranslator)], null)], null);
});})(x64172_64284))
;


var x64189_64292 = com.wsscode.pathom.book.graphql.edn_converter.QueryTranslatorWithDemos.prototype;
x64189_64292.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x64189_64292.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x64189_64292){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".button",".button",48002398),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #ccc",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"4px",new cljs.core.Keyword(null,"color","color",1011675173),"#333",new cljs.core.Keyword(null,"outline","outline",793464534),"0",new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"10px",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"12px",new cljs.core.Keyword(null,"padding","padding",1660304693),"6px 12px"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:hover","&:hover",-852658855),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"#e6e6e6",new cljs.core.Keyword(null,"border-color","border-color",-2059162761),"#adadad"], null)], null)], null)], null);
});})(x64189_64292))
;

x64189_64292.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x64189_64292){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.book.graphql.edn_converter.GraphQlQueryTranslator], null);
});})(x64189_64292))
;

x64189_64292.fulcro$client$primitives$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

x64189_64292.fulcro$client$primitives$InitialAppState$initial_state$arity$2 = ((function (x64189_64292){
return (function (this$,params){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.book.graphql.edn-converter","id","com.wsscode.pathom.book.graphql.edn-converter/id",-566595640),cljs.core.random_uuid(),new cljs.core.Keyword("com.wsscode.pathom.book.graphql.edn-converter","query-examples","com.wsscode.pathom.book.graphql.edn-converter/query-examples",1092149865),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Simple",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","id","user/id",-1375756663),new cljs.core.Keyword("user","name","user/name",1848814598)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Join",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("app","me","app/me",-139038980),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","id","user/id",-1375756663),new cljs.core.Keyword("user","name","user/name",1848814598)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Ident",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","login","user/login",51503538),"wilkerlucio"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bio","bio",-331851886),new cljs.core.Keyword(null,"url","url",276297046)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("organization","login","organization/login",1092606746),"clojure"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"url","url",276297046)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("github.repository","nameAndowner","github.repository/nameAndowner",-1371025972),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["pathom","wilkerlucio"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"name","name",1843675177)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Join Parameters",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.list(new cljs.core.Keyword("app","allUsers","app/allUsers",-1127354237),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"limit","limit",-1355822363),(10)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","id","user/id",-1375756663),new cljs.core.Keyword("user","name","user/name",1848814598)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Aliases",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.list(new cljs.core.Keyword(null,"property","property",-1114278232),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.graphql","alias","com.wsscode.pathom.graphql/alias",-1051418195),"aliased",new cljs.core.Keyword(null,"another","another",-894849122),"param"], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"subquery","subquery",-643148523)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Enums",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"viewer","viewer",-783949853),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.list(new cljs.core.Keyword(null,"starredRepositories","starredRepositories",634051964),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"first","first",-644103046),(10),new cljs.core.Keyword(null,"orderBy","orderBy",-1329797793),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Symbol(null,"STARRED_AT","STARRED_AT",-699972088,null),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.Symbol(null,"DESC","DESC",-2083797085,null)], null)], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"updatedAt","updatedAt",1796679523)], null)], null)], null)], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Union",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("app","timeline","app/timeline",192803290),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("app","User","app/User",837595025),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","id","user/id",-1375756663),new cljs.core.Keyword("user","name","user/name",1848814598)], null),new cljs.core.Keyword("app","Activity","app/Activity",1385801694),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("activity","id","activity/id",17475365),new cljs.core.Keyword("activity","title","activity/title",-2103141186),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("activity","user","activity/user",-1107092759),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","name","user/name",1848814598)], null)], null)], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Inline Union",cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("app","timeline","app/timeline",192803290),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("entity","id","entity/id",400070257),cljs.core.list(new cljs.core.Keyword("user","name","user/name",1848814598),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.graphql","on","com.wsscode.pathom.graphql/on",1244976995),new cljs.core.Keyword("app","User","app/User",837595025)], null)),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.list(new cljs.core.Keyword("activity","user","activity/user",-1107092759),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.graphql","on","com.wsscode.pathom.graphql/on",1244976995),new cljs.core.Keyword("app","User","app/User",837595025)], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","email","user/email",1419686391)], null)], null)], null)], null)], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Recursive queries",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ofType","ofType",1957704931),(3)], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Mutation",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.list(new cljs.core.Symbol("users","create","users/create",327995079,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("user","id","user/id",-1375756663),(123),new cljs.core.Keyword("user","name","user/name",1848814598),"Foo"], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clientMutationId","clientMutationId",2051148382)], null)], null)], null)], null)], null),new cljs.core.Keyword("com.wsscode.pathom.book.graphql.edn-converter","translator","com.wsscode.pathom.book.graphql.edn-converter/translator",1385387553),fulcro.client.primitives.get_initial_state(com.wsscode.pathom.book.graphql.edn_converter.GraphQlQueryTranslator,params)], null);
});})(x64189_64292))
;

x64189_64292.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x64189_64292.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x64189_64292){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.graphql.edn-converter","id","com.wsscode.pathom.book.graphql.edn-converter/id",-566595640),new cljs.core.Keyword("com.wsscode.pathom.book.graphql.edn-converter","id","com.wsscode.pathom.book.graphql.edn-converter/id",-566595640).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x64189_64292))
;

x64189_64292.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x64189_64292.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x64189_64292){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.graphql.edn-converter","id","com.wsscode.pathom.book.graphql.edn-converter/id",-566595640),new cljs.core.Keyword("com.wsscode.pathom.book.graphql.edn-converter","query-examples","com.wsscode.pathom.book.graphql.edn-converter/query-examples",1092149865),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.book.graphql.edn-converter","translator","com.wsscode.pathom.book.graphql.edn-converter/translator",1385387553),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.book.graphql.edn_converter.GraphQlQueryTranslator)], null)], null);
});})(x64189_64292))
;


com.wsscode.pathom.book.graphql.edn_converter.QueryTranslatorWithDemos.cljs$lang$type = true;

com.wsscode.pathom.book.graphql.edn_converter.QueryTranslatorWithDemos.cljs$lang$ctorStr = "com.wsscode.pathom.book.graphql.edn-converter/QueryTranslatorWithDemos";

com.wsscode.pathom.book.graphql.edn_converter.QueryTranslatorWithDemos.cljs$lang$ctorPrWriter = (function (this__51970__auto__,writer__51971__auto__,opt__51972__auto__){
return cljs.core._write(writer__51971__auto__,"com.wsscode.pathom.book.graphql.edn-converter/QueryTranslatorWithDemos");
});
com.wsscode.pathom.book.app_types.register_app("edn-graphql-converter",(function (_){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.book.app-types","root","com.wsscode.pathom.book.app-types/root",773902039),com.wsscode.pathom.book.app_types.make_root(com.wsscode.pathom.book.graphql.edn_converter.QueryTranslatorWithDemos,"graph-converter")], null);
}));
com.wsscode.pathom.book.app_types.register_app("inline-edn-graphql-converter",(function (p__64212){
var map__64213 = p__64212;
var map__64213__$1 = (((((!((map__64213 == null))))?(((((map__64213.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64213.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64213):map__64213);
var node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64213__$1,new cljs.core.Keyword("com.wsscode.pathom.book.app-types","node","com.wsscode.pathom.book.app-types/node",-1702617550));
var content = goog.object.get(node,"innerText");
var Root = com.wsscode.pathom.book.app_types.make_root(com.wsscode.pathom.book.graphql.edn_converter.GraphQlQueryTranslator,"graph-converter");
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.book.app-types","app","com.wsscode.pathom.book.app-types/app",1458541137),fulcro.client.new_fulcro_client.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),fulcro.client.primitives.get_initial_state(Root,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","om-next-query","ui/om-next-query",-1278585882),com.wsscode.pathom.book.graphql.edn_converter.pretty_print_string(cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(content))], null))], 0)),new cljs.core.Keyword("com.wsscode.pathom.book.app-types","root","com.wsscode.pathom.book.app-types/root",773902039),Root], null);
}));

//# sourceMappingURL=com.wsscode.pathom.book.graphql.edn_converter.js.map
