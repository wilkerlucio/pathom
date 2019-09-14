goog.provide('com.wsscode.pathom.book.graphql.fulcro_network.contacts');
goog.require('cljs.core');
goog.require('fulcro.client.primitives');
goog.require('fulcro.client.data_fetch');
goog.require('fulcro.client.dom');
goog.require('com.wsscode.pathom.book.app_types');
goog.require('com.wsscode.pathom.fulcro.network');
goog.require('fulcro.client');
if((typeof com !== 'undefined') && (typeof com.wsscode !== 'undefined') && (typeof com.wsscode.pathom !== 'undefined') && (typeof com.wsscode.pathom.book !== 'undefined') && (typeof com.wsscode.pathom.book.graphql !== 'undefined') && (typeof com.wsscode.pathom.book.graphql.fulcro_network !== 'undefined') && (typeof com.wsscode.pathom.book.graphql.fulcro_network.contacts !== 'undefined') && (typeof com.wsscode.pathom.book.graphql.fulcro_network.contacts.GithubViewer !== 'undefined')){
} else {
/**
 * @constructor
 * @nocollapse
 */
com.wsscode.pathom.book.graphql.fulcro_network.contacts.GithubViewer = (function com$wsscode$pathom$book$graphql$fulcro_network$contacts$GithubViewer(){
var this__44526__auto__ = this;
React.Component.apply(this__44526__auto__,arguments);

if((!((this__44526__auto__.initLocalState == null)))){
this__44526__auto__.state = this__44526__auto__.initLocalState();
} else {
this__44526__auto__.state = ({});
}

return this__44526__auto__;
});

var G__56518_56576 = com.wsscode.pathom.book.graphql.fulcro_network.contacts.GithubViewer.prototype;
var G__56519_56577 = React.Component.prototype;
var G__56520_56578 = fulcro.client.primitives.default_component_prototype;
goog.object.extend(G__56518_56576,G__56519_56577,G__56520_56578);
}

fulcro.client.primitives._register_component_BANG_(new cljs.core.Keyword("com.wsscode.pathom.book.graphql.fulcro-network.contacts","GithubViewer","com.wsscode.pathom.book.graphql.fulcro-network.contacts/GithubViewer",2105777535),com.wsscode.pathom.book.graphql.fulcro_network.contacts.GithubViewer);

var x56524_56579 = com.wsscode.pathom.book.graphql.fulcro_network.contacts.GithubViewer.prototype;
x56524_56579.render = ((function (x56524_56579){
return (function (){
var this__43444__auto__ = this;
var this$ = this__43444__auto__;
var _STAR_reconciler_STAR__orig_val__56526 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__56527 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__56528 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__56529 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__56530 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__56531 = fulcro.client.primitives.get_reconciler(this__43444__auto__);
var _STAR_depth_STAR__temp_val__56532 = (fulcro.client.primitives.depth(this__43444__auto__) + (1));
var _STAR_shared_STAR__temp_val__56533 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__43444__auto__);
var _STAR_instrument_STAR__temp_val__56534 = fulcro.client.primitives.instrument(this__43444__auto__);
var _STAR_parent_STAR__temp_val__56535 = this__43444__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__56531;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__56532;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__56533;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__56534;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__56535;

try{var map__56537 = fulcro.client.primitives.props(this$);
var map__56537__$1 = (((((!((map__56537 == null))))?(((((map__56537.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56537.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56537):map__56537);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56537__$1,new cljs.core.Keyword("g.user","name","g.user/name",996543775));
var _ = fulcro.client.primitives.get_computed.cljs$core$IFn$_invoke$arity$1(this$);
var css = fulcro_css.css_implementation.get_classnames(com.wsscode.pathom.book.graphql.fulcro_network.contacts.GithubViewer);
return fulcro.client.dom.macro_create_element_STAR_(["div",({}),"Group: ",fulcro.util.force_children(cljs.core.str.cljs$core$IFn$_invoke$arity$1(name))]);
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__56530;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__56529;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__56528;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__56527;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__56526;
}});})(x56524_56579))
;


com.wsscode.pathom.book.graphql.fulcro_network.contacts.GithubViewer.prototype.constructor = com.wsscode.pathom.book.graphql.fulcro_network.contacts.GithubViewer;

com.wsscode.pathom.book.graphql.fulcro_network.contacts.GithubViewer.prototype.constructor.displayName = "com.wsscode.pathom.book.graphql.fulcro-network.contacts/GithubViewer";

com.wsscode.pathom.book.graphql.fulcro_network.contacts.GithubViewer.prototype.fulcro$isComponent = true;

var x56542_56585 = com.wsscode.pathom.book.graphql.fulcro_network.contacts.GithubViewer;
x56542_56585.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x56542_56585.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x56542_56585){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x56542_56585))
;

x56542_56585.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x56542_56585){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x56542_56585))
;

x56542_56585.fulcro$client$primitives$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

x56542_56585.fulcro$client$primitives$InitialAppState$initial_state$arity$2 = ((function (x56542_56585){
return (function (c,params){
var c__$1 = this;
return fulcro.client.primitives.make_state_map(cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,params);
});})(x56542_56585))
;

x56542_56585.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x56542_56585.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x56542_56585){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("g.user","id","g.user/id",398261570),new cljs.core.Keyword("g.user","id","g.user/id",398261570).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x56542_56585))
;

x56542_56585.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x56542_56585.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x56542_56585){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("g.user","id","g.user/id",398261570),new cljs.core.Keyword("g.user","name","g.user/name",996543775)], null);
});})(x56542_56585))
;


var x56543_56588 = com.wsscode.pathom.book.graphql.fulcro_network.contacts.GithubViewer.prototype;
x56543_56588.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x56543_56588.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x56543_56588){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x56543_56588))
;

x56543_56588.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x56543_56588){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x56543_56588))
;

x56543_56588.fulcro$client$primitives$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

x56543_56588.fulcro$client$primitives$InitialAppState$initial_state$arity$2 = ((function (x56543_56588){
return (function (c,params){
var c__$1 = this;
return fulcro.client.primitives.make_state_map(cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,params);
});})(x56543_56588))
;

x56543_56588.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x56543_56588.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x56543_56588){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("g.user","id","g.user/id",398261570),new cljs.core.Keyword("g.user","id","g.user/id",398261570).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x56543_56588))
;

x56543_56588.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x56543_56588.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x56543_56588){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("g.user","id","g.user/id",398261570),new cljs.core.Keyword("g.user","name","g.user/name",996543775)], null);
});})(x56543_56588))
;


com.wsscode.pathom.book.graphql.fulcro_network.contacts.GithubViewer.cljs$lang$type = true;

com.wsscode.pathom.book.graphql.fulcro_network.contacts.GithubViewer.cljs$lang$ctorStr = "com.wsscode.pathom.book.graphql.fulcro-network.contacts/GithubViewer";

com.wsscode.pathom.book.graphql.fulcro_network.contacts.GithubViewer.cljs$lang$ctorPrWriter = (function (this__44529__auto__,writer__44530__auto__,opt__44531__auto__){
return cljs.core._write(writer__44530__auto__,"com.wsscode.pathom.book.graphql.fulcro-network.contacts/GithubViewer");
});
com.wsscode.pathom.book.graphql.fulcro_network.contacts.github_viewer = fulcro.client.primitives.factory.cljs$core$IFn$_invoke$arity$2(com.wsscode.pathom.book.graphql.fulcro_network.contacts.GithubViewer,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword("g.user","id","g.user/id",398261570)], null));
if((typeof com !== 'undefined') && (typeof com.wsscode !== 'undefined') && (typeof com.wsscode.pathom !== 'undefined') && (typeof com.wsscode.pathom.book !== 'undefined') && (typeof com.wsscode.pathom.book.graphql !== 'undefined') && (typeof com.wsscode.pathom.book.graphql.fulcro_network !== 'undefined') && (typeof com.wsscode.pathom.book.graphql.fulcro_network.contacts !== 'undefined') && (typeof com.wsscode.pathom.book.graphql.fulcro_network.contacts.ContactsApp !== 'undefined')){
} else {
/**
 * @constructor
 * @nocollapse
 */
com.wsscode.pathom.book.graphql.fulcro_network.contacts.ContactsApp = (function com$wsscode$pathom$book$graphql$fulcro_network$contacts$ContactsApp(){
var this__44526__auto__ = this;
React.Component.apply(this__44526__auto__,arguments);

if((!((this__44526__auto__.initLocalState == null)))){
this__44526__auto__.state = this__44526__auto__.initLocalState();
} else {
this__44526__auto__.state = ({});
}

return this__44526__auto__;
});

var G__56546_56593 = com.wsscode.pathom.book.graphql.fulcro_network.contacts.ContactsApp.prototype;
var G__56547_56594 = React.Component.prototype;
var G__56548_56595 = fulcro.client.primitives.default_component_prototype;
goog.object.extend(G__56546_56593,G__56547_56594,G__56548_56595);
}

fulcro.client.primitives._register_component_BANG_(new cljs.core.Keyword("com.wsscode.pathom.book.graphql.fulcro-network.contacts","ContactsApp","com.wsscode.pathom.book.graphql.fulcro-network.contacts/ContactsApp",-1042428475),com.wsscode.pathom.book.graphql.fulcro_network.contacts.ContactsApp);

var x56549_56599 = com.wsscode.pathom.book.graphql.fulcro_network.contacts.ContactsApp.prototype;
x56549_56599.render = ((function (x56549_56599){
return (function (){
var this__43444__auto__ = this;
var this$ = this__43444__auto__;
var _STAR_reconciler_STAR__orig_val__56550 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__56551 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__56552 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__56553 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__56554 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__56555 = fulcro.client.primitives.get_reconciler(this__43444__auto__);
var _STAR_depth_STAR__temp_val__56556 = (fulcro.client.primitives.depth(this__43444__auto__) + (1));
var _STAR_shared_STAR__temp_val__56557 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__43444__auto__);
var _STAR_instrument_STAR__temp_val__56558 = fulcro.client.primitives.instrument(this__43444__auto__);
var _STAR_parent_STAR__temp_val__56559 = this__43444__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__56555;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__56556;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__56557;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__56558;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__56559;

try{var map__56560 = fulcro.client.primitives.props(this$);
var map__56560__$1 = (((((!((map__56560 == null))))?(((((map__56560.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56560.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56560):map__56560);
var viewer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56560__$1,new cljs.core.Keyword("com.wsscode.pathom.book.graphql.fulcro-network.contacts","viewer","com.wsscode.pathom.book.graphql.fulcro-network.contacts/viewer",-378606050));
var _ = fulcro.client.primitives.get_computed.cljs$core$IFn$_invoke$arity$1(this$);
var css = fulcro_css.css_implementation.get_classnames(com.wsscode.pathom.book.graphql.fulcro_network.contacts.ContactsApp);
return fulcro.client.dom.macro_create_element_STAR_(["div",({}),"Hello Contacts App World!!",fulcro.util.force_children((com.wsscode.pathom.book.graphql.fulcro_network.contacts.github_viewer.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom.book.graphql.fulcro_network.contacts.github_viewer.cljs$core$IFn$_invoke$arity$1(viewer) : com.wsscode.pathom.book.graphql.fulcro_network.contacts.github_viewer.call(null,viewer)))]);
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__56554;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__56553;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__56552;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__56551;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__56550;
}});})(x56549_56599))
;


com.wsscode.pathom.book.graphql.fulcro_network.contacts.ContactsApp.prototype.constructor = com.wsscode.pathom.book.graphql.fulcro_network.contacts.ContactsApp;

com.wsscode.pathom.book.graphql.fulcro_network.contacts.ContactsApp.prototype.constructor.displayName = "com.wsscode.pathom.book.graphql.fulcro-network.contacts/ContactsApp";

com.wsscode.pathom.book.graphql.fulcro_network.contacts.ContactsApp.prototype.fulcro$isComponent = true;

var x56562_56609 = com.wsscode.pathom.book.graphql.fulcro_network.contacts.ContactsApp;
x56562_56609.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x56562_56609.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x56562_56609){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x56562_56609))
;

x56562_56609.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x56562_56609){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x56562_56609))
;

x56562_56609.fulcro$client$primitives$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

x56562_56609.fulcro$client$primitives$InitialAppState$initial_state$arity$2 = ((function (x56562_56609){
return (function (c,params){
var c__$1 = this;
return fulcro.client.primitives.make_state_map(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.book.graphql.fulcro-network.contacts","viewer","com.wsscode.pathom.book.graphql.fulcro-network.contacts/viewer",-378606050),com.wsscode.pathom.book.graphql.fulcro_network.contacts.GithubViewer], null),params);
});})(x56562_56609))
;

x56562_56609.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x56562_56609.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x56562_56609){
return (function (this$,p__56563){
var map__56564 = p__56563;
var map__56564__$1 = (((((!((map__56564 == null))))?(((((map__56564.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56564.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56564):map__56564);
var viewer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56564__$1,new cljs.core.Keyword("com.wsscode.pathom.book.graphql.fulcro-network.contacts","viewer","com.wsscode.pathom.book.graphql.fulcro-network.contacts/viewer",-378606050));
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.graphql.fulcro-network.contacts","contacts","com.wsscode.pathom.book.graphql.fulcro-network.contacts/contacts",-64098941),"singleton"], null);
});})(x56562_56609))
;

x56562_56609.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x56562_56609.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x56562_56609){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.graphql.fulcro-network.contacts","contacts","com.wsscode.pathom.book.graphql.fulcro-network.contacts/contacts",-64098941),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.book.graphql.fulcro-network.contacts","viewer","com.wsscode.pathom.book.graphql.fulcro-network.contacts/viewer",-378606050),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.book.graphql.fulcro_network.contacts.GithubViewer)], null)], null);
});})(x56562_56609))
;


var x56566_56614 = com.wsscode.pathom.book.graphql.fulcro_network.contacts.ContactsApp.prototype;
x56566_56614.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x56566_56614.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x56566_56614){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x56566_56614))
;

x56566_56614.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x56566_56614){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x56566_56614))
;

x56566_56614.fulcro$client$primitives$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

x56566_56614.fulcro$client$primitives$InitialAppState$initial_state$arity$2 = ((function (x56566_56614){
return (function (c,params){
var c__$1 = this;
return fulcro.client.primitives.make_state_map(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.book.graphql.fulcro-network.contacts","viewer","com.wsscode.pathom.book.graphql.fulcro-network.contacts/viewer",-378606050),com.wsscode.pathom.book.graphql.fulcro_network.contacts.GithubViewer], null),params);
});})(x56566_56614))
;

x56566_56614.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x56566_56614.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x56566_56614){
return (function (this$,p__56567){
var map__56568 = p__56567;
var map__56568__$1 = (((((!((map__56568 == null))))?(((((map__56568.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56568.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56568):map__56568);
var viewer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56568__$1,new cljs.core.Keyword("com.wsscode.pathom.book.graphql.fulcro-network.contacts","viewer","com.wsscode.pathom.book.graphql.fulcro-network.contacts/viewer",-378606050));
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.graphql.fulcro-network.contacts","contacts","com.wsscode.pathom.book.graphql.fulcro-network.contacts/contacts",-64098941),"singleton"], null);
});})(x56566_56614))
;

x56566_56614.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x56566_56614.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x56566_56614){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.graphql.fulcro-network.contacts","contacts","com.wsscode.pathom.book.graphql.fulcro-network.contacts/contacts",-64098941),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.book.graphql.fulcro-network.contacts","viewer","com.wsscode.pathom.book.graphql.fulcro-network.contacts/viewer",-378606050),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.book.graphql.fulcro_network.contacts.GithubViewer)], null)], null);
});})(x56566_56614))
;


com.wsscode.pathom.book.graphql.fulcro_network.contacts.ContactsApp.cljs$lang$type = true;

com.wsscode.pathom.book.graphql.fulcro_network.contacts.ContactsApp.cljs$lang$ctorStr = "com.wsscode.pathom.book.graphql.fulcro-network.contacts/ContactsApp";

com.wsscode.pathom.book.graphql.fulcro_network.contacts.ContactsApp.cljs$lang$ctorPrWriter = (function (this__44529__auto__,writer__44530__auto__,opt__44531__auto__){
return cljs.core._write(writer__44530__auto__,"com.wsscode.pathom.book.graphql.fulcro-network.contacts/ContactsApp");
});
com.wsscode.pathom.book.graphql.fulcro_network.contacts.contacts_app = fulcro.client.primitives.factory.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.book.graphql.fulcro_network.contacts.ContactsApp);
com.wsscode.pathom.book.app_types.register_app("contacts",(function (_){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.book.app-types","app","com.wsscode.pathom.book.app-types/app",1458541137),fulcro.client.new_fulcro_client.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"started-callback","started-callback",-1798586951),(function (p__56572){
var map__56573 = p__56572;
var map__56573__$1 = (((((!((map__56573 == null))))?(((((map__56573.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56573.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56573):map__56573);
var reconciler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56573__$1,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966));
return fulcro.client.data_fetch.load.cljs$core$IFn$_invoke$arity$4(reconciler,new cljs.core.Keyword("app","viewer","app/viewer",-784046652),com.wsscode.pathom.book.graphql.fulcro_network.contacts.GithubViewer,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.graphql.fulcro-network.contacts","contacts","com.wsscode.pathom.book.graphql.fulcro-network.contacts/contacts",-64098941),"singleton",new cljs.core.Keyword("com.wsscode.pathom.book.graphql.fulcro-network.contacts","viewer","com.wsscode.pathom.book.graphql.fulcro-network.contacts/viewer",-378606050)], null)], null));
}),new cljs.core.Keyword(null,"networking","networking",586110628),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"remote","remote",-1593576576),com.wsscode.pathom.fulcro.network.batch_network.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.fulcro.network.graphql_network.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","url","com.wsscode.pathom.fulcro.network/url",-572582451),"https://api.github.com/graphql?access_token="], null)))], null)], 0)),new cljs.core.Keyword("com.wsscode.pathom.book.app-types","root","com.wsscode.pathom.book.app-types/root",773902039),com.wsscode.pathom.book.app_types.make_root(com.wsscode.pathom.book.graphql.fulcro_network.contacts.ContactsApp,"contacts")], null);
}));

//# sourceMappingURL=com.wsscode.pathom.book.graphql.fulcro_network.contacts.js.map
