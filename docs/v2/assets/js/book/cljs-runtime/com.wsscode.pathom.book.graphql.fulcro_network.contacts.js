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
var this__56858__auto__ = this;
React.Component.apply(this__56858__auto__,arguments);

if((!((this__56858__auto__.initLocalState == null)))){
this__56858__auto__.state = this__56858__auto__.initLocalState();
} else {
this__56858__auto__.state = ({});
}

return this__56858__auto__;
});

goog.object.extend(com.wsscode.pathom.book.graphql.fulcro_network.contacts.GithubViewer.prototype,React.Component.prototype,fulcro.client.primitives.default_component_prototype);
}

fulcro.client.primitives._register_component_BANG_(new cljs.core.Keyword("com.wsscode.pathom.book.graphql.fulcro-network.contacts","GithubViewer","com.wsscode.pathom.book.graphql.fulcro-network.contacts/GithubViewer",2105777535),com.wsscode.pathom.book.graphql.fulcro_network.contacts.GithubViewer);

var x79915_80021 = com.wsscode.pathom.book.graphql.fulcro_network.contacts.GithubViewer.prototype;
x79915_80021.render = ((function (x79915_80021){
return (function (){
var this__55246__auto__ = this;
var this$ = this__55246__auto__;
var _STAR_reconciler_STAR__orig_val__79919 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__79920 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__79921 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__79922 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__79923 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__79924 = fulcro.client.primitives.get_reconciler(this__55246__auto__);
var _STAR_depth_STAR__temp_val__79925 = (fulcro.client.primitives.depth(this__55246__auto__) + (1));
var _STAR_shared_STAR__temp_val__79926 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__55246__auto__);
var _STAR_instrument_STAR__temp_val__79927 = fulcro.client.primitives.instrument(this__55246__auto__);
var _STAR_parent_STAR__temp_val__79928 = this__55246__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__79924;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__79925;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__79926;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__79927;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__79928;

try{var map__79931 = fulcro.client.primitives.props(this$);
var map__79931__$1 = (((((!((map__79931 == null))))?(((((map__79931.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__79931.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__79931):map__79931);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79931__$1,new cljs.core.Keyword("g.user","name","g.user/name",996543775));
var _ = fulcro.client.primitives.get_computed.cljs$core$IFn$_invoke$arity$1(this$);
var css = fulcro_css.css_implementation.get_classnames(com.wsscode.pathom.book.graphql.fulcro_network.contacts.GithubViewer);
return fulcro.client.dom.macro_create_element_STAR_(["div",({}),"Group: ",fulcro.util.force_children(cljs.core.str.cljs$core$IFn$_invoke$arity$1(name))]);
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__79923;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__79922;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__79921;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__79920;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__79919;
}});})(x79915_80021))
;


com.wsscode.pathom.book.graphql.fulcro_network.contacts.GithubViewer.prototype.constructor = com.wsscode.pathom.book.graphql.fulcro_network.contacts.GithubViewer;

com.wsscode.pathom.book.graphql.fulcro_network.contacts.GithubViewer.prototype.constructor.displayName = "com.wsscode.pathom.book.graphql.fulcro-network.contacts/GithubViewer";

com.wsscode.pathom.book.graphql.fulcro_network.contacts.GithubViewer.prototype.fulcro$isComponent = true;

var x79937_80028 = com.wsscode.pathom.book.graphql.fulcro_network.contacts.GithubViewer;
x79937_80028.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x79937_80028.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x79937_80028){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x79937_80028))
;

x79937_80028.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x79937_80028){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x79937_80028))
;

x79937_80028.fulcro$client$primitives$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

x79937_80028.fulcro$client$primitives$InitialAppState$initial_state$arity$2 = ((function (x79937_80028){
return (function (c,params){
var c__$1 = this;
return fulcro.client.primitives.make_state_map(cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,params);
});})(x79937_80028))
;

x79937_80028.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x79937_80028.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x79937_80028){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("g.user","id","g.user/id",398261570),new cljs.core.Keyword("g.user","id","g.user/id",398261570).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x79937_80028))
;

x79937_80028.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x79937_80028.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x79937_80028){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("g.user","id","g.user/id",398261570),new cljs.core.Keyword("g.user","name","g.user/name",996543775)], null);
});})(x79937_80028))
;


var x79940_80030 = com.wsscode.pathom.book.graphql.fulcro_network.contacts.GithubViewer.prototype;
x79940_80030.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x79940_80030.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x79940_80030){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x79940_80030))
;

x79940_80030.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x79940_80030){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x79940_80030))
;

x79940_80030.fulcro$client$primitives$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

x79940_80030.fulcro$client$primitives$InitialAppState$initial_state$arity$2 = ((function (x79940_80030){
return (function (c,params){
var c__$1 = this;
return fulcro.client.primitives.make_state_map(cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,params);
});})(x79940_80030))
;

x79940_80030.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x79940_80030.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x79940_80030){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("g.user","id","g.user/id",398261570),new cljs.core.Keyword("g.user","id","g.user/id",398261570).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x79940_80030))
;

x79940_80030.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x79940_80030.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x79940_80030){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("g.user","id","g.user/id",398261570),new cljs.core.Keyword("g.user","name","g.user/name",996543775)], null);
});})(x79940_80030))
;


com.wsscode.pathom.book.graphql.fulcro_network.contacts.GithubViewer.cljs$lang$type = true;

com.wsscode.pathom.book.graphql.fulcro_network.contacts.GithubViewer.cljs$lang$ctorStr = "com.wsscode.pathom.book.graphql.fulcro-network.contacts/GithubViewer";

com.wsscode.pathom.book.graphql.fulcro_network.contacts.GithubViewer.cljs$lang$ctorPrWriter = (function (this__56861__auto__,writer__56862__auto__,opt__56863__auto__){
return cljs.core._write(writer__56862__auto__,"com.wsscode.pathom.book.graphql.fulcro-network.contacts/GithubViewer");
});
com.wsscode.pathom.book.graphql.fulcro_network.contacts.github_viewer = fulcro.client.primitives.factory.cljs$core$IFn$_invoke$arity$2(com.wsscode.pathom.book.graphql.fulcro_network.contacts.GithubViewer,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword("g.user","id","g.user/id",398261570)], null));
if((typeof com !== 'undefined') && (typeof com.wsscode !== 'undefined') && (typeof com.wsscode.pathom !== 'undefined') && (typeof com.wsscode.pathom.book !== 'undefined') && (typeof com.wsscode.pathom.book.graphql !== 'undefined') && (typeof com.wsscode.pathom.book.graphql.fulcro_network !== 'undefined') && (typeof com.wsscode.pathom.book.graphql.fulcro_network.contacts !== 'undefined') && (typeof com.wsscode.pathom.book.graphql.fulcro_network.contacts.ContactsApp !== 'undefined')){
} else {
/**
 * @constructor
 * @nocollapse
 */
com.wsscode.pathom.book.graphql.fulcro_network.contacts.ContactsApp = (function com$wsscode$pathom$book$graphql$fulcro_network$contacts$ContactsApp(){
var this__56858__auto__ = this;
React.Component.apply(this__56858__auto__,arguments);

if((!((this__56858__auto__.initLocalState == null)))){
this__56858__auto__.state = this__56858__auto__.initLocalState();
} else {
this__56858__auto__.state = ({});
}

return this__56858__auto__;
});

goog.object.extend(com.wsscode.pathom.book.graphql.fulcro_network.contacts.ContactsApp.prototype,React.Component.prototype,fulcro.client.primitives.default_component_prototype);
}

fulcro.client.primitives._register_component_BANG_(new cljs.core.Keyword("com.wsscode.pathom.book.graphql.fulcro-network.contacts","ContactsApp","com.wsscode.pathom.book.graphql.fulcro-network.contacts/ContactsApp",-1042428475),com.wsscode.pathom.book.graphql.fulcro_network.contacts.ContactsApp);

var x79965_80032 = com.wsscode.pathom.book.graphql.fulcro_network.contacts.ContactsApp.prototype;
x79965_80032.render = ((function (x79965_80032){
return (function (){
var this__55246__auto__ = this;
var this$ = this__55246__auto__;
var _STAR_reconciler_STAR__orig_val__79966 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__79967 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__79968 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__79969 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__79970 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__79971 = fulcro.client.primitives.get_reconciler(this__55246__auto__);
var _STAR_depth_STAR__temp_val__79972 = (fulcro.client.primitives.depth(this__55246__auto__) + (1));
var _STAR_shared_STAR__temp_val__79973 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__55246__auto__);
var _STAR_instrument_STAR__temp_val__79974 = fulcro.client.primitives.instrument(this__55246__auto__);
var _STAR_parent_STAR__temp_val__79975 = this__55246__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__79971;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__79972;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__79973;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__79974;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__79975;

try{var map__79979 = fulcro.client.primitives.props(this$);
var map__79979__$1 = (((((!((map__79979 == null))))?(((((map__79979.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__79979.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__79979):map__79979);
var viewer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79979__$1,new cljs.core.Keyword("com.wsscode.pathom.book.graphql.fulcro-network.contacts","viewer","com.wsscode.pathom.book.graphql.fulcro-network.contacts/viewer",-378606050));
var _ = fulcro.client.primitives.get_computed.cljs$core$IFn$_invoke$arity$1(this$);
var css = fulcro_css.css_implementation.get_classnames(com.wsscode.pathom.book.graphql.fulcro_network.contacts.ContactsApp);
return fulcro.client.dom.macro_create_element_STAR_(["div",({}),"Hello Contacts App World!!",fulcro.util.force_children((com.wsscode.pathom.book.graphql.fulcro_network.contacts.github_viewer.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom.book.graphql.fulcro_network.contacts.github_viewer.cljs$core$IFn$_invoke$arity$1(viewer) : com.wsscode.pathom.book.graphql.fulcro_network.contacts.github_viewer.call(null,viewer)))]);
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__79970;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__79969;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__79968;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__79967;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__79966;
}});})(x79965_80032))
;


com.wsscode.pathom.book.graphql.fulcro_network.contacts.ContactsApp.prototype.constructor = com.wsscode.pathom.book.graphql.fulcro_network.contacts.ContactsApp;

com.wsscode.pathom.book.graphql.fulcro_network.contacts.ContactsApp.prototype.constructor.displayName = "com.wsscode.pathom.book.graphql.fulcro-network.contacts/ContactsApp";

com.wsscode.pathom.book.graphql.fulcro_network.contacts.ContactsApp.prototype.fulcro$isComponent = true;

var x79984_80033 = com.wsscode.pathom.book.graphql.fulcro_network.contacts.ContactsApp;
x79984_80033.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x79984_80033.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x79984_80033){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x79984_80033))
;

x79984_80033.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x79984_80033){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x79984_80033))
;

x79984_80033.fulcro$client$primitives$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

x79984_80033.fulcro$client$primitives$InitialAppState$initial_state$arity$2 = ((function (x79984_80033){
return (function (c,params){
var c__$1 = this;
return fulcro.client.primitives.make_state_map(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.book.graphql.fulcro-network.contacts","viewer","com.wsscode.pathom.book.graphql.fulcro-network.contacts/viewer",-378606050),com.wsscode.pathom.book.graphql.fulcro_network.contacts.GithubViewer], null),params);
});})(x79984_80033))
;

x79984_80033.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x79984_80033.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x79984_80033){
return (function (this$,p__79985){
var map__79986 = p__79985;
var map__79986__$1 = (((((!((map__79986 == null))))?(((((map__79986.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__79986.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__79986):map__79986);
var viewer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79986__$1,new cljs.core.Keyword("com.wsscode.pathom.book.graphql.fulcro-network.contacts","viewer","com.wsscode.pathom.book.graphql.fulcro-network.contacts/viewer",-378606050));
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.graphql.fulcro-network.contacts","contacts","com.wsscode.pathom.book.graphql.fulcro-network.contacts/contacts",-64098941),"singleton"], null);
});})(x79984_80033))
;

x79984_80033.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x79984_80033.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x79984_80033){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.graphql.fulcro-network.contacts","contacts","com.wsscode.pathom.book.graphql.fulcro-network.contacts/contacts",-64098941),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.book.graphql.fulcro-network.contacts","viewer","com.wsscode.pathom.book.graphql.fulcro-network.contacts/viewer",-378606050),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.book.graphql.fulcro_network.contacts.GithubViewer)], null)], null);
});})(x79984_80033))
;


var x79988_80037 = com.wsscode.pathom.book.graphql.fulcro_network.contacts.ContactsApp.prototype;
x79988_80037.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x79988_80037.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x79988_80037){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x79988_80037))
;

x79988_80037.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x79988_80037){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x79988_80037))
;

x79988_80037.fulcro$client$primitives$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

x79988_80037.fulcro$client$primitives$InitialAppState$initial_state$arity$2 = ((function (x79988_80037){
return (function (c,params){
var c__$1 = this;
return fulcro.client.primitives.make_state_map(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.book.graphql.fulcro-network.contacts","viewer","com.wsscode.pathom.book.graphql.fulcro-network.contacts/viewer",-378606050),com.wsscode.pathom.book.graphql.fulcro_network.contacts.GithubViewer], null),params);
});})(x79988_80037))
;

x79988_80037.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x79988_80037.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x79988_80037){
return (function (this$,p__79993){
var map__79994 = p__79993;
var map__79994__$1 = (((((!((map__79994 == null))))?(((((map__79994.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__79994.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__79994):map__79994);
var viewer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79994__$1,new cljs.core.Keyword("com.wsscode.pathom.book.graphql.fulcro-network.contacts","viewer","com.wsscode.pathom.book.graphql.fulcro-network.contacts/viewer",-378606050));
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.graphql.fulcro-network.contacts","contacts","com.wsscode.pathom.book.graphql.fulcro-network.contacts/contacts",-64098941),"singleton"], null);
});})(x79988_80037))
;

x79988_80037.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x79988_80037.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x79988_80037){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.graphql.fulcro-network.contacts","contacts","com.wsscode.pathom.book.graphql.fulcro-network.contacts/contacts",-64098941),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.book.graphql.fulcro-network.contacts","viewer","com.wsscode.pathom.book.graphql.fulcro-network.contacts/viewer",-378606050),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.book.graphql.fulcro_network.contacts.GithubViewer)], null)], null);
});})(x79988_80037))
;


com.wsscode.pathom.book.graphql.fulcro_network.contacts.ContactsApp.cljs$lang$type = true;

com.wsscode.pathom.book.graphql.fulcro_network.contacts.ContactsApp.cljs$lang$ctorStr = "com.wsscode.pathom.book.graphql.fulcro-network.contacts/ContactsApp";

com.wsscode.pathom.book.graphql.fulcro_network.contacts.ContactsApp.cljs$lang$ctorPrWriter = (function (this__56861__auto__,writer__56862__auto__,opt__56863__auto__){
return cljs.core._write(writer__56862__auto__,"com.wsscode.pathom.book.graphql.fulcro-network.contacts/ContactsApp");
});
com.wsscode.pathom.book.graphql.fulcro_network.contacts.contacts_app = fulcro.client.primitives.factory.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.book.graphql.fulcro_network.contacts.ContactsApp);
com.wsscode.pathom.book.app_types.register_app("contacts",(function (_){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.book.app-types","app","com.wsscode.pathom.book.app-types/app",1458541137),fulcro.client.new_fulcro_client.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"started-callback","started-callback",-1798586951),(function (p__80012){
var map__80013 = p__80012;
var map__80013__$1 = (((((!((map__80013 == null))))?(((((map__80013.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80013.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80013):map__80013);
var reconciler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80013__$1,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966));
return fulcro.client.data_fetch.load.cljs$core$IFn$_invoke$arity$4(reconciler,new cljs.core.Keyword("app","viewer","app/viewer",-784046652),com.wsscode.pathom.book.graphql.fulcro_network.contacts.GithubViewer,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.graphql.fulcro-network.contacts","contacts","com.wsscode.pathom.book.graphql.fulcro-network.contacts/contacts",-64098941),"singleton",new cljs.core.Keyword("com.wsscode.pathom.book.graphql.fulcro-network.contacts","viewer","com.wsscode.pathom.book.graphql.fulcro-network.contacts/viewer",-378606050)], null)], null));
}),new cljs.core.Keyword(null,"networking","networking",586110628),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"remote","remote",-1593576576),com.wsscode.pathom.fulcro.network.batch_network.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.fulcro.network.graphql_network.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","url","com.wsscode.pathom.fulcro.network/url",-572582451),"https://api.github.com/graphql?access_token="], null)))], null)], 0)),new cljs.core.Keyword("com.wsscode.pathom.book.app-types","root","com.wsscode.pathom.book.app-types/root",773902039),com.wsscode.pathom.book.app_types.make_root(com.wsscode.pathom.book.graphql.fulcro_network.contacts.ContactsApp,"contacts")], null);
}));

//# sourceMappingURL=com.wsscode.pathom.book.graphql.fulcro_network.contacts.js.map
