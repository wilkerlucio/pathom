goog.provide('com.wsscode.pathom.viz.index_explorer');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('cljs.spec.alpha');
goog.require('clojure.string');
goog.require('clojure.test.check.generators');
goog.require('com.wsscode.fuzzy');
goog.require('com.wsscode.pathom.connect');
goog.require('com.wsscode.pathom.core');
goog.require('com.wsscode.pathom.viz.helpers');
goog.require('com.wsscode.pathom.viz.ui.expandable_tree');
goog.require('com.wsscode.pathom.viz.ui.kit');
goog.require('com.wsscode.pathom.viz.ui.context');
goog.require('com.wsscode.spec_inspec');
goog.require('edn_query_language.core');
goog.require('fulcro_css.css');
goog.require('fulcro.client.localized_dom');
goog.require('fulcro.client.mutations');
goog.require('fulcro.client.primitives');
goog.require('com.fulcrologic.guardrails.core');
goog.require('goog.object');
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","weight","com.wsscode.pathom.viz.index-explorer/weight",-1488828976),new cljs.core.Symbol("cljs.core","nat-int?","cljs.core/nat-int?",-164364171,null),cljs.core.nat_int_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","reach","com.wsscode.pathom.viz.index-explorer/reach",1367373590),new cljs.core.Symbol("cljs.core","nat-int?","cljs.core/nat-int?",-164364171,null),cljs.core.nat_int_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","resolvers","com.wsscode.pathom.viz.index-explorer/resolvers",-1064744669),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-node","attribute","com.wsscode.pathom.viz.index-explorer.attribute-node/attribute",-323201507),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-node","multiNode","com.wsscode.pathom.viz.index-explorer.attribute-node/multiNode",461478480),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),cljs.core.boolean_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-node","mainNode","com.wsscode.pathom.viz.index-explorer.attribute-node/mainNode",620710540),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),cljs.core.boolean_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-node","weight","com.wsscode.pathom.viz.index-explorer.attribute-node/weight",1284949095),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","weight","com.wsscode.pathom.viz.index-explorer/weight",-1488828976),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","weight","com.wsscode.pathom.viz.index-explorer/weight",-1488828976));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-node","reach","com.wsscode.pathom.viz.index-explorer.attribute-node/reach",2025059773),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","reach","com.wsscode.pathom.viz.index-explorer/reach",1367373590),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","reach","com.wsscode.pathom.viz.index-explorer/reach",1367373590));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-node","radius","com.wsscode.pathom.viz.index-explorer.attribute-node/radius",1553083322),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","and","cljs.spec.alpha/and",-2060279705,null),new cljs.core.Symbol("cljs.core","double?","cljs.core/double?",1757455529,null),new cljs.core.Symbol("cljs.core","pos?","cljs.core/pos?",-652182749,null)),cljs.spec.alpha.and_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","double?","cljs.core/double?",1757455529,null),new cljs.core.Symbol("cljs.core","pos?","cljs.core/pos?",-652182749,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.double_QMARK_,cljs.core.pos_QMARK_], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attribute-node","com.wsscode.pathom.viz.index-explorer/attribute-node",-2016363037),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-node","attribute","com.wsscode.pathom.viz.index-explorer.attribute-node/attribute",-323201507),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-node","multiNode","com.wsscode.pathom.viz.index-explorer.attribute-node/multiNode",461478480),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-node","mainNode","com.wsscode.pathom.viz.index-explorer.attribute-node/mainNode",620710540),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-node","weight","com.wsscode.pathom.viz.index-explorer.attribute-node/weight",1284949095),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-node","reach","com.wsscode.pathom.viz.index-explorer.attribute-node/reach",2025059773),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-node","radius","com.wsscode.pathom.viz.index-explorer.attribute-node/radius",1553083322)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-node","attribute","com.wsscode.pathom.viz.index-explorer.attribute-node/attribute",-323201507),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-node","multiNode","com.wsscode.pathom.viz.index-explorer.attribute-node/multiNode",461478480),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-node","mainNode","com.wsscode.pathom.viz.index-explorer.attribute-node/mainNode",620710540),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-node","weight","com.wsscode.pathom.viz.index-explorer.attribute-node/weight",1284949095),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-node","reach","com.wsscode.pathom.viz.index-explorer.attribute-node/reach",2025059773),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-node","radius","com.wsscode.pathom.viz.index-explorer.attribute-node/radius",1553083322)], null),null,null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__55060){
return cljs.core.map_QMARK_(G__55060);
}),(function (G__55060){
return cljs.core.contains_QMARK_(G__55060,new cljs.core.Keyword(null,"attribute","attribute",-2074029119));
}),(function (G__55060){
return cljs.core.contains_QMARK_(G__55060,new cljs.core.Keyword(null,"multiNode","multiNode",1160650868));
}),(function (G__55060){
return cljs.core.contains_QMARK_(G__55060,new cljs.core.Keyword(null,"mainNode","mainNode",-883240896));
}),(function (G__55060){
return cljs.core.contains_QMARK_(G__55060,new cljs.core.Keyword(null,"weight","weight",-1262796205));
}),(function (G__55060){
return cljs.core.contains_QMARK_(G__55060,new cljs.core.Keyword(null,"reach","reach",1376483465));
}),(function (G__55060){
return cljs.core.contains_QMARK_(G__55060,new cljs.core.Keyword(null,"radius","radius",-2073122258));
})], null),(function (G__55060){
return ((cljs.core.map_QMARK_(G__55060)) && (cljs.core.contains_QMARK_(G__55060,new cljs.core.Keyword(null,"attribute","attribute",-2074029119))) && (cljs.core.contains_QMARK_(G__55060,new cljs.core.Keyword(null,"multiNode","multiNode",1160650868))) && (cljs.core.contains_QMARK_(G__55060,new cljs.core.Keyword(null,"mainNode","mainNode",-883240896))) && (cljs.core.contains_QMARK_(G__55060,new cljs.core.Keyword(null,"weight","weight",-1262796205))) && (cljs.core.contains_QMARK_(G__55060,new cljs.core.Keyword(null,"reach","reach",1376483465))) && (cljs.core.contains_QMARK_(G__55060,new cljs.core.Keyword(null,"radius","radius",-2073122258))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-node","attribute","com.wsscode.pathom.viz.index-explorer.attribute-node/attribute",-323201507),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-node","multiNode","com.wsscode.pathom.viz.index-explorer.attribute-node/multiNode",461478480),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-node","mainNode","com.wsscode.pathom.viz.index-explorer.attribute-node/mainNode",620710540),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-node","weight","com.wsscode.pathom.viz.index-explorer.attribute-node/weight",1284949095),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-node","reach","com.wsscode.pathom.viz.index-explorer.attribute-node/reach",2025059773),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-node","radius","com.wsscode.pathom.viz.index-explorer.attribute-node/radius",1553083322)], null),null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attribute","attribute",-2074029119),new cljs.core.Keyword(null,"multiNode","multiNode",1160650868),new cljs.core.Keyword(null,"mainNode","mainNode",-883240896),new cljs.core.Keyword(null,"weight","weight",-1262796205),new cljs.core.Keyword(null,"reach","reach",1376483465),new cljs.core.Keyword(null,"radius","radius",-2073122258)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"attribute","attribute",-2074029119))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"multiNode","multiNode",1160650868))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"mainNode","mainNode",-883240896))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"weight","weight",-1262796205))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"reach","reach",1376483465))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"radius","radius",-2073122258)))], null),null])));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-link","source","com.wsscode.pathom.viz.index-explorer.attribute-link/source",-1651616055),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-link","weight","com.wsscode.pathom.viz.index-explorer.attribute-link/weight",1284752991),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","weight","com.wsscode.pathom.viz.index-explorer/weight",-1488828976),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","weight","com.wsscode.pathom.viz.index-explorer/weight",-1488828976));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-link","resolvers","com.wsscode.pathom.viz.index-explorer.attribute-link/resolvers",-1723939342),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-link","target","com.wsscode.pathom.viz.index-explorer.attribute-link/target",1726872605),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-link","deep","com.wsscode.pathom.viz.index-explorer.attribute-link/deep",599690487),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),cljs.core.boolean_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attribute-link","com.wsscode.pathom.viz.index-explorer/attribute-link",1286350991),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-link","source","com.wsscode.pathom.viz.index-explorer.attribute-link/source",-1651616055),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-link","weight","com.wsscode.pathom.viz.index-explorer.attribute-link/weight",1284752991),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-link","resolvers","com.wsscode.pathom.viz.index-explorer.attribute-link/resolvers",-1723939342),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-link","target","com.wsscode.pathom.viz.index-explorer.attribute-link/target",1726872605),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-link","deep","com.wsscode.pathom.viz.index-explorer.attribute-link/deep",599690487)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-link","source","com.wsscode.pathom.viz.index-explorer.attribute-link/source",-1651616055),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-link","weight","com.wsscode.pathom.viz.index-explorer.attribute-link/weight",1284752991),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-link","resolvers","com.wsscode.pathom.viz.index-explorer.attribute-link/resolvers",-1723939342),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-link","target","com.wsscode.pathom.viz.index-explorer.attribute-link/target",1726872605),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-link","deep","com.wsscode.pathom.viz.index-explorer.attribute-link/deep",599690487)], null),null,null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__55110){
return cljs.core.map_QMARK_(G__55110);
}),(function (G__55110){
return cljs.core.contains_QMARK_(G__55110,new cljs.core.Keyword(null,"source","source",-433931539));
}),(function (G__55110){
return cljs.core.contains_QMARK_(G__55110,new cljs.core.Keyword(null,"weight","weight",-1262796205));
}),(function (G__55110){
return cljs.core.contains_QMARK_(G__55110,new cljs.core.Keyword(null,"resolvers","resolvers",-1037942130));
}),(function (G__55110){
return cljs.core.contains_QMARK_(G__55110,new cljs.core.Keyword(null,"target","target",253001721));
}),(function (G__55110){
return cljs.core.contains_QMARK_(G__55110,new cljs.core.Keyword(null,"deep","deep",2090866875));
})], null),(function (G__55110){
return ((cljs.core.map_QMARK_(G__55110)) && (cljs.core.contains_QMARK_(G__55110,new cljs.core.Keyword(null,"source","source",-433931539))) && (cljs.core.contains_QMARK_(G__55110,new cljs.core.Keyword(null,"weight","weight",-1262796205))) && (cljs.core.contains_QMARK_(G__55110,new cljs.core.Keyword(null,"resolvers","resolvers",-1037942130))) && (cljs.core.contains_QMARK_(G__55110,new cljs.core.Keyword(null,"target","target",253001721))) && (cljs.core.contains_QMARK_(G__55110,new cljs.core.Keyword(null,"deep","deep",2090866875))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-link","source","com.wsscode.pathom.viz.index-explorer.attribute-link/source",-1651616055),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-link","weight","com.wsscode.pathom.viz.index-explorer.attribute-link/weight",1284752991),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-link","resolvers","com.wsscode.pathom.viz.index-explorer.attribute-link/resolvers",-1723939342),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-link","target","com.wsscode.pathom.viz.index-explorer.attribute-link/target",1726872605),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-link","deep","com.wsscode.pathom.viz.index-explorer.attribute-link/deep",599690487)], null),null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"weight","weight",-1262796205),new cljs.core.Keyword(null,"resolvers","resolvers",-1037942130),new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"deep","deep",2090866875)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"source","source",-433931539))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"weight","weight",-1262796205))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"resolvers","resolvers",-1037942130))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"target","target",253001721))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"deep","deep",2090866875)))], null),null])));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-graph","nodes","com.wsscode.pathom.viz.index-explorer.attribute-graph/nodes",-938578025),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attribute-node","com.wsscode.pathom.viz.index-explorer/attribute-node",-2016363037)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attribute-node","com.wsscode.pathom.viz.index-explorer/attribute-node",-2016363037),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attribute-node","com.wsscode.pathom.viz.index-explorer/attribute-node",-2016363037),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__55151){
return cljs.core.coll_QMARK_(G__55151);
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attribute-node","com.wsscode.pathom.viz.index-explorer/attribute-node",-2016363037))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-graph","links","com.wsscode.pathom.viz.index-explorer.attribute-graph/links",773829650),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attribute-link","com.wsscode.pathom.viz.index-explorer/attribute-link",1286350991)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attribute-link","com.wsscode.pathom.viz.index-explorer/attribute-link",1286350991),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attribute-link","com.wsscode.pathom.viz.index-explorer/attribute-link",1286350991),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__55163){
return cljs.core.coll_QMARK_(G__55163);
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attribute-link","com.wsscode.pathom.viz.index-explorer/attribute-link",1286350991))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attribute-graph","com.wsscode.pathom.viz.index-explorer/attribute-graph",226486271),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-graph","nodes","com.wsscode.pathom.viz.index-explorer.attribute-graph/nodes",-938578025),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-graph","links","com.wsscode.pathom.viz.index-explorer.attribute-graph/links",773829650)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-graph","nodes","com.wsscode.pathom.viz.index-explorer.attribute-graph/nodes",-938578025),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-graph","links","com.wsscode.pathom.viz.index-explorer.attribute-graph/links",773829650)], null),null,null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__55166){
return cljs.core.map_QMARK_(G__55166);
}),(function (G__55166){
return cljs.core.contains_QMARK_(G__55166,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
}),(function (G__55166){
return cljs.core.contains_QMARK_(G__55166,new cljs.core.Keyword(null,"links","links",-654507394));
})], null),(function (G__55166){
return ((cljs.core.map_QMARK_(G__55166)) && (cljs.core.contains_QMARK_(G__55166,new cljs.core.Keyword(null,"nodes","nodes",-2099585805))) && (cljs.core.contains_QMARK_(G__55166,new cljs.core.Keyword(null,"links","links",-654507394))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-graph","nodes","com.wsscode.pathom.viz.index-explorer.attribute-graph/nodes",-938578025),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-graph","links","com.wsscode.pathom.viz.index-explorer.attribute-graph/links",773829650)], null),null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.Keyword(null,"links","links",-654507394)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"nodes","nodes",-2099585805))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"links","links",-654507394)))], null),null])));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","maybe-nested-input","com.wsscode.pathom.viz.index-explorer/maybe-nested-input",734224205),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"direct","direct",-1775717856),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null),new cljs.core.Keyword(null,"nested","nested",18943849),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null)),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"direct","direct",-1775717856),new cljs.core.Keyword(null,"nested","nested",18943849)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.set_QMARK_,cljs.core.vector_QMARK_], null),null));
com.wsscode.pathom.viz.index_explorer.ExtensionContext = com.wsscode.pathom.viz.ui.context.new_context.cljs$core$IFn$_invoke$arity$0();
com.wsscode.pathom.viz.index_explorer.call_graph_comm = (function com$wsscode$pathom$viz$index_explorer$call_graph_comm(comp,f,k){
var temp__5718__auto__ = (function (){var or__4131__auto__ = (function (){var G__55207 = fulcro.client.primitives.get_state.cljs$core$IFn$_invoke$arity$2(comp,new cljs.core.Keyword(null,"graph-comm","graph-comm",-744729650));
if((G__55207 == null)){
return null;
} else {
return cljs.core.deref(G__55207);
}
})();
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var G__55209 = comp;
var G__55209__$1 = (((G__55209 == null))?null:fulcro.client.primitives.props(G__55209));
var G__55209__$2 = (((G__55209__$1 == null))?null:fulcro.client.primitives.get_computed.cljs$core$IFn$_invoke$arity$1(G__55209__$1));
var G__55209__$3 = (((G__55209__$2 == null))?null:new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","graph-comm","com.wsscode.pathom.viz.index-explorer/graph-comm",-735750087).cljs$core$IFn$_invoke$arity$1(G__55209__$2));
if((G__55209__$3 == null)){
return null;
} else {
return cljs.core.deref(G__55209__$3);
}
}
})();
if(cljs.core.truth_(temp__5718__auto__)){
var settings = temp__5718__auto__;
var G__55213 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(k);
var fexpr__55212 = goog.object.get(settings,f);
return (fexpr__55212.cljs$core$IFn$_invoke$arity$1 ? fexpr__55212.cljs$core$IFn$_invoke$arity$1(G__55213) : fexpr__55212.call(null,G__55213));
} else {
return null;
}
});
com.wsscode.pathom.viz.index_explorer.attribute_graph_events = (function com$wsscode$pathom$viz$index_explorer$attribute_graph_events(this$,k){
var on_select_attribute = new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","on-select-attribute","com.wsscode.pathom.viz.index-explorer/on-select-attribute",2006419034).cljs$core$IFn$_invoke$arity$1(fulcro.client.primitives.get_computed.cljs$core$IFn$_invoke$arity$1(fulcro.client.primitives.props(this$)));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (on_select_attribute){
return (function (){
return (on_select_attribute.cljs$core$IFn$_invoke$arity$1 ? on_select_attribute.cljs$core$IFn$_invoke$arity$1(k) : on_select_attribute.call(null,k));
});})(on_select_attribute))
,new cljs.core.Keyword(null,"onMouseEnter","onMouseEnter",-1535281844),((function (on_select_attribute){
return (function (){
return com.wsscode.pathom.viz.index_explorer.call_graph_comm(this$,"highlightNode",k);
});})(on_select_attribute))
,new cljs.core.Keyword(null,"onMouseLeave","onMouseLeave",1446726903),((function (on_select_attribute){
return (function (){
return com.wsscode.pathom.viz.index_explorer.call_graph_comm(this$,"unhighlightNode",k);
});})(on_select_attribute))
], null);
});
com.wsscode.pathom.viz.index_explorer.resolver_graph_events = (function com$wsscode$pathom$viz$index_explorer$resolver_graph_events(this$,k){
var on_select_resolver = new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","on-select-resolver","com.wsscode.pathom.viz.index-explorer/on-select-resolver",1600914463).cljs$core$IFn$_invoke$arity$1(fulcro.client.primitives.get_computed.cljs$core$IFn$_invoke$arity$1(fulcro.client.primitives.props(this$)));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (on_select_resolver){
return (function (){
return (on_select_resolver.cljs$core$IFn$_invoke$arity$1 ? on_select_resolver.cljs$core$IFn$_invoke$arity$1(k) : on_select_resolver.call(null,k));
});})(on_select_resolver))
,new cljs.core.Keyword(null,"onMouseEnter","onMouseEnter",-1535281844),((function (on_select_resolver){
return (function (){
return com.wsscode.pathom.viz.index_explorer.call_graph_comm(this$,"highlightEdge",k);
});})(on_select_resolver))
,new cljs.core.Keyword(null,"onMouseLeave","onMouseLeave",1446726903),((function (on_select_resolver){
return (function (){
return com.wsscode.pathom.viz.index_explorer.call_graph_comm(this$,"unhighlightEdge",k);
});})(on_select_resolver))
], null);
});
com.wsscode.pathom.viz.index_explorer.color_attribute = "#9a45b1";
if((typeof com !== 'undefined') && (typeof com.wsscode !== 'undefined') && (typeof com.wsscode.pathom !== 'undefined') && (typeof com.wsscode.pathom.viz !== 'undefined') && (typeof com.wsscode.pathom.viz.index_explorer !== 'undefined') && (typeof com.wsscode.pathom.viz.index_explorer.AttributeLink !== 'undefined')){
} else {
/**
 * @constructor
 * @nocollapse
 */
com.wsscode.pathom.viz.index_explorer.AttributeLink = (function com$wsscode$pathom$viz$index_explorer$AttributeLink(){
var this__53741__auto__ = this;
React.Component.apply(this__53741__auto__,arguments);

if((!((this__53741__auto__.initLocalState == null)))){
this__53741__auto__.state = this__53741__auto__.initLocalState();
} else {
this__53741__auto__.state = ({});
}

return this__53741__auto__;
});

goog.object.extend(com.wsscode.pathom.viz.index_explorer.AttributeLink.prototype,React.Component.prototype,fulcro.client.primitives.default_component_prototype);
}

fulcro.client.primitives._register_component_BANG_(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","AttributeLink","com.wsscode.pathom.viz.index-explorer/AttributeLink",4406070),com.wsscode.pathom.viz.index_explorer.AttributeLink);

var x55230_56190 = com.wsscode.pathom.viz.index_explorer.AttributeLink.prototype;
x55230_56190.render = ((function (x55230_56190){
return (function (){
var this__52659__auto__ = this;
var this$ = this__52659__auto__;
var _STAR_reconciler_STAR__orig_val__55231 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__55232 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__55233 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__55234 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__55235 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__55236 = fulcro.client.primitives.get_reconciler(this__52659__auto__);
var _STAR_depth_STAR__temp_val__55237 = (fulcro.client.primitives.depth(this__52659__auto__) + (1));
var _STAR_shared_STAR__temp_val__55238 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__52659__auto__);
var _STAR_instrument_STAR__temp_val__55239 = fulcro.client.primitives.instrument(this__52659__auto__);
var _STAR_parent_STAR__temp_val__55240 = this__52659__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__55236;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__55237;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__55238;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__55239;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__55240;

try{var map__55241 = fulcro.client.primitives.props(this$);
var map__55241__$1 = (((((!((map__55241 == null))))?(((((map__55241.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55241.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55241):map__55241);
var props = map__55241__$1;
var attribute = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55241__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075));
var render = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55241__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","render","com.wsscode.pathom.viz.ui.kit/render",1024565529));
return fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".container",".container",-1441208944),com.wsscode.pathom.viz.ui.kit.dom_props.cljs$core$IFn$_invoke$arity$1(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.wsscode.pathom.viz.index_explorer.attribute_graph_events(this$,attribute),props], 0))),(cljs.core.truth_(render)?(render.cljs$core$IFn$_invoke$arity$1 ? render.cljs$core$IFn$_invoke$arity$1(props) : render.call(null,props)):cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attribute], 0)))], 0));
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__55235;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__55234;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__55233;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__55232;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__55231;
}});})(x55230_56190))
;


com.wsscode.pathom.viz.index_explorer.AttributeLink.prototype.constructor = com.wsscode.pathom.viz.index_explorer.AttributeLink;

com.wsscode.pathom.viz.index_explorer.AttributeLink.prototype.constructor.displayName = "com.wsscode.pathom.viz.index-explorer/AttributeLink";

com.wsscode.pathom.viz.index_explorer.AttributeLink.prototype.fulcro$isComponent = true;

var x55245_56204 = com.wsscode.pathom.viz.index_explorer.AttributeLink;
x55245_56204.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x55245_56204.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x55245_56204){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"color","color",1011675173),com.wsscode.pathom.viz.index_explorer.color_attribute,new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"14px",new cljs.core.Keyword(null,"line-height","line-height",1870784992),"1.4em"], null),com.wsscode.pathom.viz.ui.kit.text_base], null)], null);
});})(x55245_56204))
;

x55245_56204.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x55245_56204){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x55245_56204))
;


var x55247_56207 = com.wsscode.pathom.viz.index_explorer.AttributeLink.prototype;
x55247_56207.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x55247_56207.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x55247_56207){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"color","color",1011675173),com.wsscode.pathom.viz.index_explorer.color_attribute,new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"14px",new cljs.core.Keyword(null,"line-height","line-height",1870784992),"1.4em"], null),com.wsscode.pathom.viz.ui.kit.text_base], null)], null);
});})(x55247_56207))
;

x55247_56207.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x55247_56207){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x55247_56207))
;


com.wsscode.pathom.viz.index_explorer.AttributeLink.cljs$lang$type = true;

com.wsscode.pathom.viz.index_explorer.AttributeLink.cljs$lang$ctorStr = "com.wsscode.pathom.viz.index-explorer/AttributeLink";

com.wsscode.pathom.viz.index_explorer.AttributeLink.cljs$lang$ctorPrWriter = (function (this__53744__auto__,writer__53745__auto__,opt__53746__auto__){
return cljs.core._write(writer__53745__auto__,"com.wsscode.pathom.viz.index-explorer/AttributeLink");
});
com.wsscode.pathom.viz.index_explorer.attribute_link = fulcro.client.primitives.computed_factory.cljs$core$IFn$_invoke$arity$2(com.wsscode.pathom.viz.index_explorer.AttributeLink,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str,new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075))], null));
com.wsscode.pathom.viz.index_explorer.color_resolver = "#467cb7";
if((typeof com !== 'undefined') && (typeof com.wsscode !== 'undefined') && (typeof com.wsscode.pathom !== 'undefined') && (typeof com.wsscode.pathom.viz !== 'undefined') && (typeof com.wsscode.pathom.viz.index_explorer !== 'undefined') && (typeof com.wsscode.pathom.viz.index_explorer.ResolverLink !== 'undefined')){
} else {
/**
 * @constructor
 * @nocollapse
 */
com.wsscode.pathom.viz.index_explorer.ResolverLink = (function com$wsscode$pathom$viz$index_explorer$ResolverLink(){
var this__53741__auto__ = this;
React.Component.apply(this__53741__auto__,arguments);

if((!((this__53741__auto__.initLocalState == null)))){
this__53741__auto__.state = this__53741__auto__.initLocalState();
} else {
this__53741__auto__.state = ({});
}

return this__53741__auto__;
});

goog.object.extend(com.wsscode.pathom.viz.index_explorer.ResolverLink.prototype,React.Component.prototype,fulcro.client.primitives.default_component_prototype);
}

fulcro.client.primitives._register_component_BANG_(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","ResolverLink","com.wsscode.pathom.viz.index-explorer/ResolverLink",175120056),com.wsscode.pathom.viz.index_explorer.ResolverLink);

var x55255_56209 = com.wsscode.pathom.viz.index_explorer.ResolverLink.prototype;
x55255_56209.render = ((function (x55255_56209){
return (function (){
var this__52659__auto__ = this;
var this$ = this__52659__auto__;
var _STAR_reconciler_STAR__orig_val__55257 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__55258 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__55259 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__55260 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__55261 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__55262 = fulcro.client.primitives.get_reconciler(this__52659__auto__);
var _STAR_depth_STAR__temp_val__55263 = (fulcro.client.primitives.depth(this__52659__auto__) + (1));
var _STAR_shared_STAR__temp_val__55264 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__52659__auto__);
var _STAR_instrument_STAR__temp_val__55265 = fulcro.client.primitives.instrument(this__52659__auto__);
var _STAR_parent_STAR__temp_val__55266 = this__52659__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__55262;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__55263;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__55264;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__55265;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__55266;

try{var map__55268 = fulcro.client.primitives.props(this$);
var map__55268__$1 = (((((!((map__55268 == null))))?(((((map__55268.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55268.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55268):map__55268);
var props = map__55268__$1;
var sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55268__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581));
var render = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55268__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","render","com.wsscode.pathom.viz.ui.kit/render",1024565529));
return fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".container",".container",-1441208944),com.wsscode.pathom.viz.ui.kit.dom_props.cljs$core$IFn$_invoke$arity$1(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.wsscode.pathom.viz.index_explorer.resolver_graph_events(this$,sym),props], 0))),(cljs.core.truth_(render)?(render.cljs$core$IFn$_invoke$arity$1 ? render.cljs$core$IFn$_invoke$arity$1(props) : render.call(null,props)):cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sym], 0)))], 0));
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__55261;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__55260;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__55259;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__55258;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__55257;
}});})(x55255_56209))
;


com.wsscode.pathom.viz.index_explorer.ResolverLink.prototype.constructor = com.wsscode.pathom.viz.index_explorer.ResolverLink;

com.wsscode.pathom.viz.index_explorer.ResolverLink.prototype.constructor.displayName = "com.wsscode.pathom.viz.index-explorer/ResolverLink";

com.wsscode.pathom.viz.index_explorer.ResolverLink.prototype.fulcro$isComponent = true;

var x55272_56211 = com.wsscode.pathom.viz.index_explorer.ResolverLink;
x55272_56211.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x55272_56211.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x55272_56211){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"color","color",1011675173),com.wsscode.pathom.viz.index_explorer.color_resolver,new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"14px",new cljs.core.Keyword(null,"line-height","line-height",1870784992),"1.4em"], null),com.wsscode.pathom.viz.ui.kit.text_base], null)], null);
});})(x55272_56211))
;

x55272_56211.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x55272_56211){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x55272_56211))
;


var x55276_56212 = com.wsscode.pathom.viz.index_explorer.ResolverLink.prototype;
x55276_56212.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x55276_56212.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x55276_56212){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"color","color",1011675173),com.wsscode.pathom.viz.index_explorer.color_resolver,new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"14px",new cljs.core.Keyword(null,"line-height","line-height",1870784992),"1.4em"], null),com.wsscode.pathom.viz.ui.kit.text_base], null)], null);
});})(x55276_56212))
;

x55276_56212.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x55276_56212){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x55276_56212))
;


com.wsscode.pathom.viz.index_explorer.ResolverLink.cljs$lang$type = true;

com.wsscode.pathom.viz.index_explorer.ResolverLink.cljs$lang$ctorStr = "com.wsscode.pathom.viz.index-explorer/ResolverLink";

com.wsscode.pathom.viz.index_explorer.ResolverLink.cljs$lang$ctorPrWriter = (function (this__53744__auto__,writer__53745__auto__,opt__53746__auto__){
return cljs.core._write(writer__53745__auto__,"com.wsscode.pathom.viz.index-explorer/ResolverLink");
});
com.wsscode.pathom.viz.index_explorer.resolver_link = fulcro.client.primitives.computed_factory.cljs$core$IFn$_invoke$arity$2(com.wsscode.pathom.viz.index_explorer.ResolverLink,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581))], null));
com.wsscode.pathom.viz.index_explorer.color_mutation = "#ef6c00";
if((typeof com !== 'undefined') && (typeof com.wsscode !== 'undefined') && (typeof com.wsscode.pathom !== 'undefined') && (typeof com.wsscode.pathom.viz !== 'undefined') && (typeof com.wsscode.pathom.viz.index_explorer !== 'undefined') && (typeof com.wsscode.pathom.viz.index_explorer.MutationLink !== 'undefined')){
} else {
/**
 * @constructor
 * @nocollapse
 */
com.wsscode.pathom.viz.index_explorer.MutationLink = (function com$wsscode$pathom$viz$index_explorer$MutationLink(){
var this__53741__auto__ = this;
React.Component.apply(this__53741__auto__,arguments);

if((!((this__53741__auto__.initLocalState == null)))){
this__53741__auto__.state = this__53741__auto__.initLocalState();
} else {
this__53741__auto__.state = ({});
}

return this__53741__auto__;
});

goog.object.extend(com.wsscode.pathom.viz.index_explorer.MutationLink.prototype,React.Component.prototype,fulcro.client.primitives.default_component_prototype);
}

fulcro.client.primitives._register_component_BANG_(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","MutationLink","com.wsscode.pathom.viz.index-explorer/MutationLink",1835462427),com.wsscode.pathom.viz.index_explorer.MutationLink);

var x55282_56216 = com.wsscode.pathom.viz.index_explorer.MutationLink.prototype;
x55282_56216.render = ((function (x55282_56216){
return (function (){
var this__52659__auto__ = this;
var this$ = this__52659__auto__;
var _STAR_reconciler_STAR__orig_val__55285 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__55286 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__55287 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__55288 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__55289 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__55290 = fulcro.client.primitives.get_reconciler(this__52659__auto__);
var _STAR_depth_STAR__temp_val__55291 = (fulcro.client.primitives.depth(this__52659__auto__) + (1));
var _STAR_shared_STAR__temp_val__55292 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__52659__auto__);
var _STAR_instrument_STAR__temp_val__55293 = fulcro.client.primitives.instrument(this__52659__auto__);
var _STAR_parent_STAR__temp_val__55294 = this__52659__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__55290;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__55291;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__55292;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__55293;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__55294;

try{var map__55296 = fulcro.client.primitives.props(this$);
var map__55296__$1 = (((((!((map__55296 == null))))?(((((map__55296.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55296.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55296):map__55296);
var props = map__55296__$1;
var sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55296__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581));
var render = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55296__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","render","com.wsscode.pathom.viz.ui.kit/render",1024565529));
var on_select_mutation = new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","on-select-mutation","com.wsscode.pathom.viz.index-explorer/on-select-mutation",2007280602).cljs$core$IFn$_invoke$arity$1(fulcro.client.primitives.get_computed.cljs$core$IFn$_invoke$arity$1(fulcro.client.primitives.props(this$)));
return fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".container",".container",-1441208944),com.wsscode.pathom.viz.ui.kit.dom_props.cljs$core$IFn$_invoke$arity$1(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (on_select_mutation,map__55296,map__55296__$1,props,sym,render,_STAR_reconciler_STAR__orig_val__55285,_STAR_depth_STAR__orig_val__55286,_STAR_shared_STAR__orig_val__55287,_STAR_instrument_STAR__orig_val__55288,_STAR_parent_STAR__orig_val__55289,_STAR_reconciler_STAR__temp_val__55290,_STAR_depth_STAR__temp_val__55291,_STAR_shared_STAR__temp_val__55292,_STAR_instrument_STAR__temp_val__55293,_STAR_parent_STAR__temp_val__55294,this$,this__52659__auto__,x55282_56216){
return (function (){
return (on_select_mutation.cljs$core$IFn$_invoke$arity$1 ? on_select_mutation.cljs$core$IFn$_invoke$arity$1(sym) : on_select_mutation.call(null,sym));
});})(on_select_mutation,map__55296,map__55296__$1,props,sym,render,_STAR_reconciler_STAR__orig_val__55285,_STAR_depth_STAR__orig_val__55286,_STAR_shared_STAR__orig_val__55287,_STAR_instrument_STAR__orig_val__55288,_STAR_parent_STAR__orig_val__55289,_STAR_reconciler_STAR__temp_val__55290,_STAR_depth_STAR__temp_val__55291,_STAR_shared_STAR__temp_val__55292,_STAR_instrument_STAR__temp_val__55293,_STAR_parent_STAR__temp_val__55294,this$,this__52659__auto__,x55282_56216))
], null),props], 0))),(cljs.core.truth_(render)?(render.cljs$core$IFn$_invoke$arity$1 ? render.cljs$core$IFn$_invoke$arity$1(props) : render.call(null,props)):cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sym], 0)))], 0));
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__55289;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__55288;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__55287;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__55286;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__55285;
}});})(x55282_56216))
;


com.wsscode.pathom.viz.index_explorer.MutationLink.prototype.constructor = com.wsscode.pathom.viz.index_explorer.MutationLink;

com.wsscode.pathom.viz.index_explorer.MutationLink.prototype.constructor.displayName = "com.wsscode.pathom.viz.index-explorer/MutationLink";

com.wsscode.pathom.viz.index_explorer.MutationLink.prototype.fulcro$isComponent = true;

var x55301_56231 = com.wsscode.pathom.viz.index_explorer.MutationLink;
x55301_56231.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x55301_56231.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x55301_56231){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"color","color",1011675173),com.wsscode.pathom.viz.index_explorer.color_mutation,new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"14px",new cljs.core.Keyword(null,"line-height","line-height",1870784992),"1.4em"], null),com.wsscode.pathom.viz.ui.kit.text_base], null)], null);
});})(x55301_56231))
;

x55301_56231.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x55301_56231){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x55301_56231))
;


var x55302_56234 = com.wsscode.pathom.viz.index_explorer.MutationLink.prototype;
x55302_56234.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x55302_56234.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x55302_56234){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"color","color",1011675173),com.wsscode.pathom.viz.index_explorer.color_mutation,new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"14px",new cljs.core.Keyword(null,"line-height","line-height",1870784992),"1.4em"], null),com.wsscode.pathom.viz.ui.kit.text_base], null)], null);
});})(x55302_56234))
;

x55302_56234.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x55302_56234){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x55302_56234))
;


com.wsscode.pathom.viz.index_explorer.MutationLink.cljs$lang$type = true;

com.wsscode.pathom.viz.index_explorer.MutationLink.cljs$lang$ctorStr = "com.wsscode.pathom.viz.index-explorer/MutationLink";

com.wsscode.pathom.viz.index_explorer.MutationLink.cljs$lang$ctorPrWriter = (function (this__53744__auto__,writer__53745__auto__,opt__53746__auto__){
return cljs.core._write(writer__53745__auto__,"com.wsscode.pathom.viz.index-explorer/MutationLink");
});
com.wsscode.pathom.viz.index_explorer.mutation_link = fulcro.client.primitives.computed_factory.cljs$core$IFn$_invoke$arity$2(com.wsscode.pathom.viz.index_explorer.MutationLink,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581))], null));
com.wsscode.pathom.viz.index_explorer.node_radius = (function com$wsscode$pathom$viz$index_explorer$node_radius(p__55303){
var map__55304 = p__55303;
var map__55304__$1 = (((((!((map__55304 == null))))?(((((map__55304.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55304.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55304):map__55304);
var weight = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55304__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","weight","com.wsscode.pathom.viz.index-explorer/weight",-1488828976));
var reach = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55304__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","reach","com.wsscode.pathom.viz.index-explorer/reach",1367373590));
return Math.round((Math.sqrt(((function (){var or__4131__auto__ = weight;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (1);
}
})() + (2))) + Math.sqrt(((function (){var or__4131__auto__ = reach;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (1);
}
})() + (1)))));
});
com.wsscode.pathom.viz.index_explorer.attribute__GT_node = (function com$wsscode$pathom$viz$index_explorer$attribute__GT_node(p__55306){
var map__55307 = p__55306;
var map__55307__$1 = (((((!((map__55307 == null))))?(((((map__55307.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55307.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55307):map__55307);
var attr = map__55307__$1;
var attribute = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55307__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075));
var weight = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55307__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","weight","com.wsscode.pathom.viz.index-explorer/weight",-1488828976));
var reach = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55307__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","reach","com.wsscode.pathom.viz.index-explorer/reach",1367373590));
var center_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55307__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","center?","com.wsscode.pathom.viz.index-explorer/center?",-314133194));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"attribute","attribute",-2074029119),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attribute], 0)),new cljs.core.Keyword(null,"multiNode","multiNode",1160650868),cljs.core.set_QMARK_(attribute),new cljs.core.Keyword(null,"mainNode","mainNode",-883240896),cljs.core.boolean$(center_QMARK_),new cljs.core.Keyword(null,"weight","weight",-1262796205),weight,new cljs.core.Keyword(null,"reach","reach",1376483465),reach,new cljs.core.Keyword(null,"radius","radius",-2073122258),com.wsscode.pathom.viz.index_explorer.node_radius(attr)], null);
});
com.wsscode.pathom.viz.index_explorer.direct_input_QMARK_ = (function com$wsscode$pathom$viz$index_explorer$direct_input_QMARK_(input){
return cljs.core.set_QMARK_(input);
});
com.wsscode.pathom.viz.index_explorer.nested_QMARK_ = (function com$wsscode$pathom$viz$index_explorer$nested_QMARK_(input){
return cljs.core.vector_QMARK_(input);
});
com.wsscode.pathom.viz.index_explorer.single_input = (function com$wsscode$pathom$viz$index_explorer$single_input(input){
var input__$1 = ((com.wsscode.pathom.viz.index_explorer.nested_QMARK_(input))?cljs.core.first(input):input);
var or__4131__auto__ = (function (){var and__4120__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(input__$1));
if(and__4120__auto__){
return cljs.core.first(input__$1);
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return null;
}
});
com.wsscode.pathom.viz.index_explorer.global_input_QMARK_ = (function com$wsscode$pathom$viz$index_explorer$global_input_QMARK_(input){
return ((com.wsscode.pathom.viz.index_explorer.direct_input_QMARK_(input)) && (cljs.core.empty_QMARK_(input)));
});
com.wsscode.pathom.viz.index_explorer.compute_nodes_links = (function com$wsscode$pathom$viz$index_explorer$compute_nodes_links(p__55309){
var map__55310 = p__55309;
var map__55310__$1 = (((((!((map__55310 == null))))?(((((map__55310.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55310.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55310):map__55310);
var attributes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55310__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attributes","com.wsscode.pathom.viz.index-explorer/attributes",-67264281));
var attributes__$1 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),attributes);
var index = com.wsscode.pathom.viz.helpers.index_by(new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),attributes__$1);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"nodes","nodes",-2099585805),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.attribute__GT_node),attributes__$1),new cljs.core.Keyword(null,"links","links",-654507394),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (attributes__$1,index,map__55310,map__55310__$1,attributes){
return (function (p__55312){
var map__55313 = p__55312;
var map__55313__$1 = (((((!((map__55313 == null))))?(((((map__55313.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55313.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55313):map__55313);
var attribute = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55313__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075));
var attr_provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55313__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attr-provides","com.wsscode.pathom.connect/attr-provides",-474523918));
var attr_str = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attribute], 0));
var res = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$1(((function (attr_str,map__55313,map__55313__$1,attribute,attr_provides,attributes__$1,index,map__55310,map__55310__$1,attributes){
return (function (p__55315){
var vec__55316 = p__55315;
var provided = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55316,(0),null);
var resolvers = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55316,(1),null);
var nested_QMARK_ = com.wsscode.pathom.viz.index_explorer.nested_QMARK_(provided);
var provided_SINGLEQUOTE_ = ((nested_QMARK_)?cljs.core.peek(provided):provided);
if(((cljs.core.contains_QMARK_(index,provided_SINGLEQUOTE_)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(attribute,provided_SINGLEQUOTE_)))){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"source","source",-433931539),attr_str,new cljs.core.Keyword(null,"weight","weight",-1262796205),cljs.core.count(resolvers),new cljs.core.Keyword(null,"resolvers","resolvers",-1037942130),clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",resolvers),new cljs.core.Keyword(null,"target","target",253001721),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([provided_SINGLEQUOTE_], 0)),new cljs.core.Keyword(null,"deep","deep",2090866875),nested_QMARK_], null);
} else {
return null;
}
});})(attr_str,map__55313,map__55313__$1,attribute,attr_provides,attributes__$1,index,map__55310,map__55310__$1,attributes))
),attr_provides);
return res;
});})(attributes__$1,index,map__55310,map__55310__$1,attributes))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attributes__$1], 0))], null);
});
com.wsscode.pathom.viz.index_explorer.render_attribute_graph = (function com$wsscode$pathom$viz$index_explorer$render_attribute_graph(this$){
var map__55319 = fulcro.client.primitives.props(this$);
var map__55319__$1 = (((((!((map__55319 == null))))?(((((map__55319.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55319.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55319):map__55319);
var props = map__55319__$1;
var on_show_details = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55319__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","on-show-details","com.wsscode.pathom.viz.index-explorer/on-show-details",-322180105));
var on_click_edge = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55319__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","on-click-edge","com.wsscode.pathom.viz.index-explorer/on-click-edge",810811642));
var graph_comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55319__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","graph-comm","com.wsscode.pathom.viz.index-explorer/graph-comm",-735750087));
var on_show_details__$1 = (function (){var or__4131__auto__ = on_show_details;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.identity;
}
})();
var on_click_edge__$1 = (function (){var or__4131__auto__ = on_click_edge;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.identity;
}
})();
var current = goog.object.get(this$,"renderedData");
var container = goog.object.get(this$,"svgContainer");
var svg = goog.object.get(this$,"svg");
if(cljs.core.truth_(current)){
var fexpr__55321_56251 = goog.object.get(current,"dispose");
(fexpr__55321_56251.cljs$core$IFn$_invoke$arity$0 ? fexpr__55321_56251.cljs$core$IFn$_invoke$arity$0() : fexpr__55321_56251.call(null));
} else {
}

goog.object.set(svg,"innerHTML","");

var render_settings = module$com$wsscode$pathom$viz$d3_attribute_graph.render(svg,cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"svgWidth","svgWidth",-356171540),goog.object.get(container,"clientWidth"),new cljs.core.Keyword(null,"svgHeight","svgHeight",1238898787),goog.object.get(container,"clientHeight"),new cljs.core.Keyword(null,"data","data",-232669377),com.wsscode.pathom.viz.index_explorer.compute_nodes_links(props),new cljs.core.Keyword(null,"showDetails","showDetails",638710309),((function (map__55319,map__55319__$1,props,on_show_details,on_click_edge,graph_comm,on_show_details__$1,on_click_edge__$1,current,container,svg){
return (function (attr,d,js){
var G__55322 = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(attr);
var G__55323 = d;
var G__55324 = js;
return (on_show_details__$1.cljs$core$IFn$_invoke$arity$3 ? on_show_details__$1.cljs$core$IFn$_invoke$arity$3(G__55322,G__55323,G__55324) : on_show_details__$1.call(null,G__55322,G__55323,G__55324));
});})(map__55319,map__55319__$1,props,on_show_details,on_click_edge,graph_comm,on_show_details__$1,on_click_edge__$1,current,container,svg))
,new cljs.core.Keyword(null,"onClickEdge","onClickEdge",124821712),((function (map__55319,map__55319__$1,props,on_show_details,on_click_edge,graph_comm,on_show_details__$1,on_click_edge__$1,current,container,svg){
return (function (edge){
var resolvers = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(["#{",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.object.get(edge,"resolvers")),"}"].join(''));
var G__55325 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","resolvers","com.wsscode.pathom.viz.index-explorer/resolvers",-1064744669),resolvers], null);
return (on_click_edge__$1.cljs$core$IFn$_invoke$arity$1 ? on_click_edge__$1.cljs$core$IFn$_invoke$arity$1(G__55325) : on_click_edge__$1.call(null,G__55325));
});})(map__55319,map__55319__$1,props,on_show_details,on_click_edge,graph_comm,on_show_details__$1,on_click_edge__$1,current,container,svg))
], null)));
if(cljs.core.truth_(graph_comm)){
cljs.core.reset_BANG_(graph_comm,render_settings);
} else {
}

return goog.object.set(this$,"renderedData",render_settings);
});
if((typeof com !== 'undefined') && (typeof com.wsscode !== 'undefined') && (typeof com.wsscode.pathom !== 'undefined') && (typeof com.wsscode.pathom.viz !== 'undefined') && (typeof com.wsscode.pathom.viz.index_explorer !== 'undefined') && (typeof com.wsscode.pathom.viz.index_explorer.AttributeGraph !== 'undefined')){
} else {
/**
 * @constructor
 * @nocollapse
 */
com.wsscode.pathom.viz.index_explorer.AttributeGraph = (function com$wsscode$pathom$viz$index_explorer$AttributeGraph(){
var this__53741__auto__ = this;
React.Component.apply(this__53741__auto__,arguments);

if((!((this__53741__auto__.initLocalState == null)))){
this__53741__auto__.state = this__53741__auto__.initLocalState();
} else {
this__53741__auto__.state = ({});
}

return this__53741__auto__;
});

goog.object.extend(com.wsscode.pathom.viz.index_explorer.AttributeGraph.prototype,React.Component.prototype,fulcro.client.primitives.default_component_prototype);
}

fulcro.client.primitives._register_component_BANG_(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","AttributeGraph","com.wsscode.pathom.viz.index-explorer/AttributeGraph",1136928477),com.wsscode.pathom.viz.index_explorer.AttributeGraph);

var x55331_56255 = com.wsscode.pathom.viz.index_explorer.AttributeGraph.prototype;
x55331_56255.render = ((function (x55331_56255){
return (function (){
var this__52659__auto__ = this;
var this$ = this__52659__auto__;
var _STAR_reconciler_STAR__orig_val__55332 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__55333 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__55334 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__55335 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__55336 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__55337 = fulcro.client.primitives.get_reconciler(this__52659__auto__);
var _STAR_depth_STAR__temp_val__55338 = (fulcro.client.primitives.depth(this__52659__auto__) + (1));
var _STAR_shared_STAR__temp_val__55339 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__52659__auto__);
var _STAR_instrument_STAR__temp_val__55340 = fulcro.client.primitives.instrument(this__52659__auto__);
var _STAR_parent_STAR__temp_val__55341 = this__52659__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__55337;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__55338;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__55339;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__55340;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__55341;

try{var map__55342 = fulcro.client.primitives.props(this$);
var map__55342__$1 = (((((!((map__55342 == null))))?(((((map__55342.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55342.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55342):map__55342);
return fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),((function (map__55342,map__55342__$1,_STAR_reconciler_STAR__orig_val__55332,_STAR_depth_STAR__orig_val__55333,_STAR_shared_STAR__orig_val__55334,_STAR_instrument_STAR__orig_val__55335,_STAR_parent_STAR__orig_val__55336,_STAR_reconciler_STAR__temp_val__55337,_STAR_depth_STAR__temp_val__55338,_STAR_shared_STAR__temp_val__55339,_STAR_instrument_STAR__temp_val__55340,_STAR_parent_STAR__temp_val__55341,this$,this__52659__auto__,x55331_56255){
return (function (p1__55326_SHARP_){
return goog.object.set(this$,"svgContainer",p1__55326_SHARP_);
});})(map__55342,map__55342__$1,_STAR_reconciler_STAR__orig_val__55332,_STAR_depth_STAR__orig_val__55333,_STAR_shared_STAR__orig_val__55334,_STAR_instrument_STAR__orig_val__55335,_STAR_parent_STAR__orig_val__55336,_STAR_reconciler_STAR__temp_val__55337,_STAR_depth_STAR__temp_val__55338,_STAR_shared_STAR__temp_val__55339,_STAR_instrument_STAR__temp_val__55340,_STAR_parent_STAR__temp_val__55341,this$,this__52659__auto__,x55331_56255))
], null),(cljs.core.truth_(fulcro.client.primitives.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","error-catch?","com.wsscode.pathom.viz.index-explorer/error-catch?",-21405980)))?fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error rendering trace, check console for details"], 0)):fulcro.client.localized_dom.svg.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),((function (map__55342,map__55342__$1,_STAR_reconciler_STAR__orig_val__55332,_STAR_depth_STAR__orig_val__55333,_STAR_shared_STAR__orig_val__55334,_STAR_instrument_STAR__orig_val__55335,_STAR_parent_STAR__orig_val__55336,_STAR_reconciler_STAR__temp_val__55337,_STAR_depth_STAR__temp_val__55338,_STAR_shared_STAR__temp_val__55339,_STAR_instrument_STAR__temp_val__55340,_STAR_parent_STAR__temp_val__55341,this$,this__52659__auto__,x55331_56255){
return (function (p1__55327_SHARP_){
return goog.object.set(this$,"svg",p1__55327_SHARP_);
});})(map__55342,map__55342__$1,_STAR_reconciler_STAR__orig_val__55332,_STAR_depth_STAR__orig_val__55333,_STAR_shared_STAR__orig_val__55334,_STAR_instrument_STAR__orig_val__55335,_STAR_parent_STAR__orig_val__55336,_STAR_reconciler_STAR__temp_val__55337,_STAR_depth_STAR__temp_val__55338,_STAR_shared_STAR__temp_val__55339,_STAR_instrument_STAR__temp_val__55340,_STAR_parent_STAR__temp_val__55341,this$,this__52659__auto__,x55331_56255))
], null)], 0)))], 0));
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__55336;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__55335;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__55334;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__55333;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__55332;
}});})(x55331_56255))
;

x55331_56255.componentDidUpdate = ((function (x55331_56255){
return (function (prev_props__52636__auto__,prev_state__52637__auto__,snapshot__52638__auto__){
var this__52635__auto__ = this;
var this$ = this__52635__auto__;
var snapshot55328 = snapshot__52638__auto__;
var prev_props = goog.object.get(prev_props__52636__auto__,"fulcro$value");
var _ = goog.object.get(prev_state__52637__auto__,"fulcro$state");
if((((!((this__52635__auto__ == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === this__52635__auto__.fulcro$client$primitives$Ident$))))?true:false):false)){
var ident__52639__auto___56256 = fulcro.client.primitives.ident(this__52635__auto__,prev_props);
var next_ident__52640__auto___56257 = fulcro.client.primitives.ident(this__52635__auto__,fulcro.client.primitives.props(this__52635__auto__));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ident__52639__auto___56256,next_ident__52640__auto___56257)){
var idxr__52641__auto___56260 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(fulcro.client.primitives.get_reconciler(this__52635__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__52641__auto___56260 == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__52641__auto___56260),((function (idxr__52641__auto___56260,ident__52639__auto___56256,next_ident__52640__auto___56257,this$,snapshot55328,prev_props,_,this__52635__auto__,x55331_56255){
return (function (indexes__52642__auto__){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(indexes__52642__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__52639__auto___56256], null),cljs.core.disj,this__52635__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__52640__auto___56257], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__52635__auto__);
});})(idxr__52641__auto___56260,ident__52639__auto___56256,next_ident__52640__auto___56257,this$,snapshot55328,prev_props,_,this__52635__auto__,x55331_56255))
);
}
} else {
}
} else {
}

if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(prev_props,fulcro.client.primitives.props(this$))){
return com.wsscode.pathom.viz.index_explorer.render_attribute_graph(this$);
} else {
return null;
}
});})(x55331_56255))
;

x55331_56255.componentDidCatch = ((function (x55331_56255){
return (function (error,info){
var this$ = this;
return fulcro.client.primitives.set_state_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","error-catch?","com.wsscode.pathom.viz.index-explorer/error-catch?",-21405980),true], null));
});})(x55331_56255))
;

x55331_56255.componentWillUnmount = ((function (x55331_56255){
return (function (){
var this__52647__auto__ = this;
var this$ = this__52647__auto__;
var reconciler__52648__auto__ = fulcro.client.primitives.get_reconciler(this__52647__auto__);
var lifecycle__52649__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(reconciler__52648__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"lifecycle","lifecycle",341496205)], null));
var cfg__52650__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(reconciler__52648__auto__);
var st__52651__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__52650__auto__);
var indexer__52652__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__52650__auto__);
goog.object.set(this__52647__auto__,"fulcro$mounted",false);

if(cljs.core.truth_((function (){var and__4120__auto__ = (!((st__52651__auto__ == null)));
if(and__4120__auto__){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(st__52651__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.client.primitives","queries","fulcro.client.primitives/queries",-963324249),this__52647__auto__], null));
} else {
return and__4120__auto__;
}
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(st__52651__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.client.primitives","queries","fulcro.client.primitives/queries",-963324249)], null),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([this__52647__auto__], 0));
} else {
}

if(cljs.core.truth_(lifecycle__52649__auto__)){
(lifecycle__52649__auto__.cljs$core$IFn$_invoke$arity$2 ? lifecycle__52649__auto__.cljs$core$IFn$_invoke$arity$2(this__52647__auto__,new cljs.core.Keyword(null,"unmount","unmount",-1779083333)) : lifecycle__52649__auto__.call(null,this__52647__auto__,new cljs.core.Keyword(null,"unmount","unmount",-1779083333)));
} else {
}

if(cljs.core.truth_(indexer__52652__auto__)){
fulcro.client.impl.protocols.drop_component_BANG_(indexer__52652__auto__,this__52647__auto__);
} else {
}

var temp__5718__auto__ = goog.object.get(this$,"renderedData");
if(cljs.core.truth_(temp__5718__auto__)){
var settings = temp__5718__auto__;
var fexpr__55345 = goog.object.get(settings,"dispose");
return (fexpr__55345.cljs$core$IFn$_invoke$arity$0 ? fexpr__55345.cljs$core$IFn$_invoke$arity$0() : fexpr__55345.call(null));
} else {
return null;
}
});})(x55331_56255))
;

x55331_56255.componentDidMount = ((function (x55331_56255){
return (function (){
var this__52643__auto__ = this;
var this$ = this__52643__auto__;
var reconciler__52644__auto__ = fulcro.client.primitives.get_reconciler(this__52643__auto__);
var lifecycle__52645__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(reconciler__52644__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"lifecycle","lifecycle",341496205)], null));
var indexer__52646__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(reconciler__52644__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
goog.object.set(this__52643__auto__,"fulcro$mounted",true);

if((indexer__52646__auto__ == null)){
} else {
fulcro.client.impl.protocols.index_component_BANG_(indexer__52646__auto__,this__52643__auto__);
}

if(cljs.core.truth_(lifecycle__52645__auto__)){
(lifecycle__52645__auto__.cljs$core$IFn$_invoke$arity$2 ? lifecycle__52645__auto__.cljs$core$IFn$_invoke$arity$2(this__52643__auto__,new cljs.core.Keyword(null,"mount","mount",-1560582470)) : lifecycle__52645__auto__.call(null,this__52643__auto__,new cljs.core.Keyword(null,"mount","mount",-1560582470)));
} else {
}

return com.wsscode.pathom.viz.index_explorer.render_attribute_graph(this$);
});})(x55331_56255))
;


com.wsscode.pathom.viz.index_explorer.AttributeGraph.prototype.constructor = com.wsscode.pathom.viz.index_explorer.AttributeGraph;

com.wsscode.pathom.viz.index_explorer.AttributeGraph.prototype.constructor.displayName = "com.wsscode.pathom.viz.index-explorer/AttributeGraph";

com.wsscode.pathom.viz.index_explorer.AttributeGraph.prototype.fulcro$isComponent = true;

var x55346_56264 = com.wsscode.pathom.viz.index_explorer.AttributeGraph;
x55346_56264.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x55346_56264.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x55346_56264){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(1),new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"100%"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"$pathom-viz-index-explorer-attr-node","$pathom-viz-index-explorer-attr-node",230011996),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),"#000A"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&$pathom-viz-index-explorer-attr-node-multi","&$pathom-viz-index-explorer-attr-node-multi",2047093030),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fill","fill",883462889),"#00000021",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#101010",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"5px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&$pathom-viz-index-explorer-attr-node-main","&$pathom-viz-index-explorer-attr-node-main",378093865),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),"#f9e943e3"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&$pathom-viz-index-explorer-attr-node-highlight","&$pathom-viz-index-explorer-attr-node-highlight",565009481),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),"#de2b34"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"$pathom-viz-index-explorer-arrow-provides","$pathom-viz-index-explorer-arrow-provides",51426281),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),"#666"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"$pathom-viz-index-explorer-arrow-reaches","$pathom-viz-index-explorer-arrow-reaches",-1480018114),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),"#666"], null)], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"$pathom-viz-index-explorer-attr-link","$pathom-viz-index-explorer-attr-link",-1176109107),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#999",new cljs.core.Keyword(null,"stroke-opacity","stroke-opacity",-1191543159),"0.6",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"1.5px",new cljs.core.Keyword(null,"fill","fill",883462889),"none"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&$pathom-viz-index-explorer-attr-link-focus-highlight","&$pathom-viz-index-explorer-attr-link-focus-highlight",1640164737),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#4242e0db",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"3px",new cljs.core.Keyword(null,"z-index","z-index",1892827090),"10"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&$pathom-viz-index-explorer-attr-link-target-highlight","&$pathom-viz-index-explorer-attr-link-target-highlight",-1694507161),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#0c0",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"3px",new cljs.core.Keyword(null,"z-index","z-index",1892827090),"10"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&$pathom-viz-index-explorer-attr-link-source-highlight","&$pathom-viz-index-explorer-attr-link-source-highlight",27199592),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#cc1a9d",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"2px",new cljs.core.Keyword(null,"z-index","z-index",1892827090),"10"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&$pathom-viz-index-explorer-attr-link-reach","&$pathom-viz-index-explorer-attr-link-reach",-2118140605),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&$pathom-viz-index-explorer-attr-link-deep","&$pathom-viz-index-explorer-attr-link-deep",-1762657377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stroke-dasharray","stroke-dasharray",-942933855),"3px"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font","font",-1506159249),"bold 18px Verdana, Helvetica, Arial, sans-serif"], null)], null)], null)], null);
});})(x55346_56264))
;

x55346_56264.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x55346_56264){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x55346_56264))
;


var x55347_56266 = com.wsscode.pathom.viz.index_explorer.AttributeGraph.prototype;
x55347_56266.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x55347_56266.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x55347_56266){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(1),new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"100%"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"$pathom-viz-index-explorer-attr-node","$pathom-viz-index-explorer-attr-node",230011996),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),"#000A"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&$pathom-viz-index-explorer-attr-node-multi","&$pathom-viz-index-explorer-attr-node-multi",2047093030),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fill","fill",883462889),"#00000021",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#101010",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"5px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&$pathom-viz-index-explorer-attr-node-main","&$pathom-viz-index-explorer-attr-node-main",378093865),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),"#f9e943e3"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&$pathom-viz-index-explorer-attr-node-highlight","&$pathom-viz-index-explorer-attr-node-highlight",565009481),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),"#de2b34"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"$pathom-viz-index-explorer-arrow-provides","$pathom-viz-index-explorer-arrow-provides",51426281),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),"#666"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"$pathom-viz-index-explorer-arrow-reaches","$pathom-viz-index-explorer-arrow-reaches",-1480018114),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),"#666"], null)], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"$pathom-viz-index-explorer-attr-link","$pathom-viz-index-explorer-attr-link",-1176109107),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#999",new cljs.core.Keyword(null,"stroke-opacity","stroke-opacity",-1191543159),"0.6",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"1.5px",new cljs.core.Keyword(null,"fill","fill",883462889),"none"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&$pathom-viz-index-explorer-attr-link-focus-highlight","&$pathom-viz-index-explorer-attr-link-focus-highlight",1640164737),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#4242e0db",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"3px",new cljs.core.Keyword(null,"z-index","z-index",1892827090),"10"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&$pathom-viz-index-explorer-attr-link-target-highlight","&$pathom-viz-index-explorer-attr-link-target-highlight",-1694507161),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#0c0",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"3px",new cljs.core.Keyword(null,"z-index","z-index",1892827090),"10"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&$pathom-viz-index-explorer-attr-link-source-highlight","&$pathom-viz-index-explorer-attr-link-source-highlight",27199592),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#cc1a9d",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"2px",new cljs.core.Keyword(null,"z-index","z-index",1892827090),"10"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&$pathom-viz-index-explorer-attr-link-reach","&$pathom-viz-index-explorer-attr-link-reach",-2118140605),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&$pathom-viz-index-explorer-attr-link-deep","&$pathom-viz-index-explorer-attr-link-deep",-1762657377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stroke-dasharray","stroke-dasharray",-942933855),"3px"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font","font",-1506159249),"bold 18px Verdana, Helvetica, Arial, sans-serif"], null)], null)], null)], null);
});})(x55347_56266))
;

x55347_56266.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x55347_56266){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x55347_56266))
;


com.wsscode.pathom.viz.index_explorer.AttributeGraph.cljs$lang$type = true;

com.wsscode.pathom.viz.index_explorer.AttributeGraph.cljs$lang$ctorStr = "com.wsscode.pathom.viz.index-explorer/AttributeGraph";

com.wsscode.pathom.viz.index_explorer.AttributeGraph.cljs$lang$ctorPrWriter = (function (this__53744__auto__,writer__53745__auto__,opt__53746__auto__){
return cljs.core._write(writer__53745__auto__,"com.wsscode.pathom.viz.index-explorer/AttributeGraph");
});
com.wsscode.pathom.viz.index_explorer.attribute_graph = fulcro.client.primitives.factory.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.AttributeGraph);
/**
 * Get attribute from index, remove provides when interconnections is falsy.
 */
com.wsscode.pathom.viz.index_explorer.pull_attr = (function com$wsscode$pathom$viz$index_explorer$pull_attr(p__55348,attr){
var map__55349 = p__55348;
var map__55349__$1 = (((((!((map__55349 == null))))?(((((map__55349.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55349.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55349):map__55349);
var attr_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55349__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-index","com.wsscode.pathom.viz.index-explorer/attr-index",684180200));
var interconnections_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55349__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","interconnections?","com.wsscode.pathom.viz.index-explorer/interconnections?",-1723481228));
var G__55351 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(attr_index,attr);
if(interconnections_QMARK_ === false){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__55351,new cljs.core.Keyword("com.wsscode.pathom.connect","attr-provides","com.wsscode.pathom.connect/attr-provides",-474523918));
} else {
return G__55351;
}
});
com.wsscode.pathom.viz.index_explorer.attribute_network_STAR_ = (function com$wsscode$pathom$viz$index_explorer$attribute_network_STAR_(p__55352,source){
var map__55353 = p__55352;
var map__55353__$1 = (((((!((map__55353 == null))))?(((((map__55353.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55353.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55353):map__55353);
var options = map__55353__$1;
var attributes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55353__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attributes","com.wsscode.pathom.viz.index-explorer/attributes",-67264281));
var sub_index = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__55353__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","sub-index","com.wsscode.pathom.viz.index-explorer/sub-index",-858012438),cljs.core.PersistentArrayMap.EMPTY);
var nested_reaches_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__55353__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","nested-reaches?","com.wsscode.pathom.viz.index-explorer/nested-reaches?",-22429448),false);
var direct_reaches_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__55353__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","direct-reaches?","com.wsscode.pathom.viz.index-explorer/direct-reaches?",-1036048994),true);
var direct_provides_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__55353__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","direct-provides?","com.wsscode.pathom.viz.index-explorer/direct-provides?",223892052),true);
var nested_provides_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__55353__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","nested-provides?","com.wsscode.pathom.viz.index-explorer/nested-provides?",-1296758362),false);
var attr_depth = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__55353__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-depth","com.wsscode.pathom.viz.index-explorer/attr-depth",-1327711242),(1));
var attr_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55353__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-index","com.wsscode.pathom.viz.index-explorer/attr-index",684180200));
var attr_visited = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__55353__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-visited","com.wsscode.pathom.viz.index-explorer/attr-visited",703029193),cljs.core.PersistentHashSet.EMPTY);
if(cljs.core.contains_QMARK_(attr_visited,source)){
return sub_index;
} else {
var index = (function (){var or__4131__auto__ = attr_index;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return com.wsscode.pathom.viz.helpers.index_by(new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),attributes);
}
})();
var base = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sub_index,cljs.core.select_keys(index,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [source], null))], 0));
var map__55355 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(index,source);
var map__55355__$1 = (((((!((map__55355 == null))))?(((((map__55355.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55355.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55355):map__55355);
var attr_reach_via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55355__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via","com.wsscode.pathom.connect/attr-reach-via",-483841559));
var attr_provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55355__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attr-provides","com.wsscode.pathom.connect/attr-provides",-474523918));
var options_SINGLEQUOTE_ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(options,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-index","com.wsscode.pathom.viz.index-explorer/attr-index",684180200),index,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-depth","com.wsscode.pathom.viz.index-explorer/attr-depth",-1327711242),(attr_depth - (1)),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-visited","com.wsscode.pathom.viz.index-explorer/attr-visited",703029193),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(attr_visited,source)], 0));
var _LT__GT_ = base;
var _LT__GT___$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (_LT__GT_,index,base,map__55355,map__55355__$1,attr_reach_via,attr_provides,options_SINGLEQUOTE_,map__55353,map__55353__$1,options,attributes,sub_index,nested_reaches_QMARK_,direct_reaches_QMARK_,direct_provides_QMARK_,nested_provides_QMARK_,attr_depth,attr_index,attr_visited){
return (function (out,input){
if(cljs.core.truth_((function (){var or__4131__auto__ = (function (){var and__4120__auto__ = direct_reaches_QMARK_;
if(cljs.core.truth_(and__4120__auto__)){
return com.wsscode.pathom.viz.index_explorer.direct_input_QMARK_(input);
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var and__4120__auto__ = nested_reaches_QMARK_;
if(cljs.core.truth_(and__4120__auto__)){
return com.wsscode.pathom.viz.index_explorer.nested_QMARK_(input);
} else {
return and__4120__auto__;
}
}
})())){
var attr = (function (){var or__4131__auto__ = com.wsscode.pathom.viz.index_explorer.single_input(input);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
if(cljs.core.vector_QMARK_(input)){
return cljs.core.first(input);
} else {
return input;
}
}
})();
if((attr_depth > (1))){
var G__55357 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(options_SINGLEQUOTE_,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","sub-index","com.wsscode.pathom.viz.index-explorer/sub-index",-858012438),out);
var G__55358 = attr;
return (com.wsscode.pathom.viz.index_explorer.attribute_network_STAR_.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.attribute_network_STAR_.cljs$core$IFn$_invoke$arity$2(G__55357,G__55358) : com.wsscode.pathom.viz.index_explorer.attribute_network_STAR_.call(null,G__55357,G__55358));
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(out,attr,cljs.core.merge,com.wsscode.pathom.viz.index_explorer.pull_attr(options_SINGLEQUOTE_,attr));
}
} else {
return out;
}
});})(_LT__GT_,index,base,map__55355,map__55355__$1,attr_reach_via,attr_provides,options_SINGLEQUOTE_,map__55353,map__55353__$1,options,attributes,sub_index,nested_reaches_QMARK_,direct_reaches_QMARK_,direct_provides_QMARK_,nested_provides_QMARK_,attr_depth,attr_index,attr_visited))
,_LT__GT_,cljs.core.keys(attr_reach_via));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (_LT__GT_,_LT__GT___$1,index,base,map__55355,map__55355__$1,attr_reach_via,attr_provides,options_SINGLEQUOTE_,map__55353,map__55353__$1,options,attributes,sub_index,nested_reaches_QMARK_,direct_reaches_QMARK_,direct_provides_QMARK_,nested_provides_QMARK_,attr_depth,attr_index,attr_visited){
return (function (out,attr){
if(cljs.core.truth_((function (){var and__4120__auto__ = direct_provides_QMARK_;
if(cljs.core.truth_(and__4120__auto__)){
return (attr instanceof cljs.core.Keyword);
} else {
return and__4120__auto__;
}
})())){
if((attr_depth > (1))){
var G__55359 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(options_SINGLEQUOTE_,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","sub-index","com.wsscode.pathom.viz.index-explorer/sub-index",-858012438),out);
var G__55360 = attr;
return (com.wsscode.pathom.viz.index_explorer.attribute_network_STAR_.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.attribute_network_STAR_.cljs$core$IFn$_invoke$arity$2(G__55359,G__55360) : com.wsscode.pathom.viz.index_explorer.attribute_network_STAR_.call(null,G__55359,G__55360));
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(out,attr,cljs.core.merge,com.wsscode.pathom.viz.index_explorer.pull_attr(options_SINGLEQUOTE_,attr));
}
} else {
if(cljs.core.truth_((function (){var and__4120__auto__ = nested_provides_QMARK_;
if(cljs.core.truth_(and__4120__auto__)){
return com.wsscode.pathom.viz.index_explorer.nested_QMARK_(attr);
} else {
return and__4120__auto__;
}
})())){
var attr__$1 = cljs.core.peek(attr);
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(out,attr__$1,cljs.core.merge,com.wsscode.pathom.viz.index_explorer.pull_attr(options_SINGLEQUOTE_,attr__$1));
} else {
return out;

}
}
});})(_LT__GT_,_LT__GT___$1,index,base,map__55355,map__55355__$1,attr_reach_via,attr_provides,options_SINGLEQUOTE_,map__55353,map__55353__$1,options,attributes,sub_index,nested_reaches_QMARK_,direct_reaches_QMARK_,direct_provides_QMARK_,nested_provides_QMARK_,attr_depth,attr_index,attr_visited))
,_LT__GT___$1,cljs.core.keys(attr_provides));
}
});
com.wsscode.pathom.viz.index_explorer.attribute_network = (function com$wsscode$pathom$viz$index_explorer$attribute_network(options,source){
return cljs.core.vals(cljs.core.update.cljs$core$IFn$_invoke$arity$5(com.wsscode.pathom.viz.index_explorer.attribute_network_STAR_(options,source),source,cljs.core.assoc,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","center?","com.wsscode.pathom.viz.index-explorer/center?",-314133194),true));
});
com.wsscode.pathom.viz.index_explorer.attr_path_key_root = (function com$wsscode$pathom$viz$index_explorer$attr_path_key_root(x){
if(cljs.core.vector_QMARK_(x)){
return cljs.core.first(x);
} else {
return x;
}
});
com.wsscode.pathom.viz.index_explorer.attr_provides__GT_path_map = (function com$wsscode$pathom$viz$index_explorer$attr_provides__GT_path_map(attr_provides){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__55361_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(p1__55361_SHARP_,(0),(function (x){
if((x instanceof cljs.core.Keyword)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
} else {
return x;
}
}));
})),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p__55362){
var vec__55363 = p__55362;
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55363,(0),null);
var resolvers = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55363,(1),null);
var k = cljs.core.peek(path);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),k,new cljs.core.Keyword("com.wsscode.pathom.connect","sym-set","com.wsscode.pathom.connect/sym-set",-662703745),resolvers], null)], null);
}))),attr_provides);
});
com.wsscode.pathom.viz.index_explorer.attr_provides__GT_tree = (function com$wsscode$pathom$viz$index_explorer$attr_provides__GT_tree(attr_provides){
return com.wsscode.pathom.viz.helpers.path_map__GT_tree(com.wsscode.pathom.viz.index_explorer.attr_provides__GT_path_map(attr_provides));
});
com.wsscode.pathom.viz.index_explorer.render_plugin_extension = (function com$wsscode$pathom$viz$index_explorer$render_plugin_extension(this$,view){
var plugins = new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","plugins","com.wsscode.pathom.viz.index-explorer/plugins",1906824802).cljs$core$IFn$_invoke$arity$1(goog.object.get(this$,"context"));
var data = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(fulcro.client.primitives.app_state(fulcro.client.primitives.get_reconciler(this$))),fulcro.client.primitives.get_ident.cljs$core$IFn$_invoke$arity$1(this$));
var iter__4523__auto__ = ((function (plugins,data){
return (function com$wsscode$pathom$viz$index_explorer$render_plugin_extension_$_iter__55366(s__55367){
return (new cljs.core.LazySeq(null,((function (plugins,data){
return (function (){
var s__55367__$1 = s__55367;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__55367__$1);
if(temp__5720__auto__){
var s__55367__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__55367__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__55367__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__55369 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__55368 = (0);
while(true){
if((i__55368 < size__4522__auto__)){
var map__55370 = cljs.core._nth(c__4521__auto__,i__55368);
var map__55370__$1 = (((((!((map__55370 == null))))?(((((map__55370.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55370.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55370):map__55370);
var plugin = map__55370__$1;
var plugin_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55370__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","plugin-id","com.wsscode.pathom.viz.index-explorer/plugin-id",-1782512648));
if(cljs.core.contains_QMARK_(plugin,view)){
cljs.core.chunk_append(b__55369,fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([plugin_id], 0))], null),(function (){var fexpr__55372 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(plugin,view);
return (fexpr__55372.cljs$core$IFn$_invoke$arity$1 ? fexpr__55372.cljs$core$IFn$_invoke$arity$1(data) : fexpr__55372.call(null,data));
})()], 0)));

var G__56272 = (i__55368 + (1));
i__55368 = G__56272;
continue;
} else {
var G__56273 = (i__55368 + (1));
i__55368 = G__56273;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__55369),com$wsscode$pathom$viz$index_explorer$render_plugin_extension_$_iter__55366(cljs.core.chunk_rest(s__55367__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__55369),null);
}
} else {
var map__55373 = cljs.core.first(s__55367__$2);
var map__55373__$1 = (((((!((map__55373 == null))))?(((((map__55373.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55373.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55373):map__55373);
var plugin = map__55373__$1;
var plugin_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55373__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","plugin-id","com.wsscode.pathom.viz.index-explorer/plugin-id",-1782512648));
if(cljs.core.contains_QMARK_(plugin,view)){
return cljs.core.cons(fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([plugin_id], 0))], null),(function (){var fexpr__55375 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(plugin,view);
return (fexpr__55375.cljs$core$IFn$_invoke$arity$1 ? fexpr__55375.cljs$core$IFn$_invoke$arity$1(data) : fexpr__55375.call(null,data));
})()], 0)),com$wsscode$pathom$viz$index_explorer$render_plugin_extension_$_iter__55366(cljs.core.rest(s__55367__$2)));
} else {
var G__56274 = cljs.core.rest(s__55367__$2);
s__55367__$1 = G__56274;
continue;
}
}
} else {
return null;
}
break;
}
});})(plugins,data))
,null,null));
});})(plugins,data))
;
return iter__4523__auto__(plugins);
});
if((typeof com !== 'undefined') && (typeof com.wsscode !== 'undefined') && (typeof com.wsscode.pathom !== 'undefined') && (typeof com.wsscode.pathom.viz !== 'undefined') && (typeof com.wsscode.pathom.viz.index_explorer !== 'undefined') && (typeof com.wsscode.pathom.viz.index_explorer.AttributeInfoReachVia !== 'undefined')){
} else {
/**
 * @constructor
 * @nocollapse
 */
com.wsscode.pathom.viz.index_explorer.AttributeInfoReachVia = (function com$wsscode$pathom$viz$index_explorer$AttributeInfoReachVia(){
var this__53741__auto__ = this;
React.Component.apply(this__53741__auto__,arguments);

if((!((this__53741__auto__.initLocalState == null)))){
this__53741__auto__.state = this__53741__auto__.initLocalState();
} else {
this__53741__auto__.state = ({});
}

return this__53741__auto__;
});

goog.object.extend(com.wsscode.pathom.viz.index_explorer.AttributeInfoReachVia.prototype,React.Component.prototype,fulcro.client.primitives.default_component_prototype);
}

fulcro.client.primitives._register_component_BANG_(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","AttributeInfoReachVia","com.wsscode.pathom.viz.index-explorer/AttributeInfoReachVia",-997057837),com.wsscode.pathom.viz.index_explorer.AttributeInfoReachVia);

var x55380_56281 = com.wsscode.pathom.viz.index_explorer.AttributeInfoReachVia.prototype;
x55380_56281.render = ((function (x55380_56281){
return (function (){
var this__52659__auto__ = this;
var this$ = this__52659__auto__;
var _STAR_reconciler_STAR__orig_val__55381 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__55382 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__55383 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__55384 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__55385 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__55386 = fulcro.client.primitives.get_reconciler(this__52659__auto__);
var _STAR_depth_STAR__temp_val__55387 = (fulcro.client.primitives.depth(this__52659__auto__) + (1));
var _STAR_shared_STAR__temp_val__55388 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__52659__auto__);
var _STAR_instrument_STAR__temp_val__55389 = fulcro.client.primitives.instrument(this__52659__auto__);
var _STAR_parent_STAR__temp_val__55390 = this__52659__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__55386;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__55387;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__55388;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__55389;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__55390;

try{var map__55391 = fulcro.client.primitives.props(this$);
var map__55391__$1 = (((((!((map__55391 == null))))?(((((map__55391.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55391.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55391):map__55391);
var attr_reach_via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55391__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via","com.wsscode.pathom.connect/attr-reach-via",-483841559));
var computed = fulcro.client.primitives.get_computed.cljs$core$IFn$_invoke$arity$1(this$);
var G__55393 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","panel-title","com.wsscode.pathom.viz.ui.kit/panel-title",1529445284),"Reach via",new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","panel-tag","com.wsscode.pathom.viz.ui.kit/panel-tag",144392508),cljs.core.count(attr_reach_via)], null);
var G__55394 = (function (){var nested_reaches_QMARK_ = true;
var iter__4523__auto__ = ((function (nested_reaches_QMARK_,G__55393,map__55391,map__55391__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__55381,_STAR_depth_STAR__orig_val__55382,_STAR_shared_STAR__orig_val__55383,_STAR_instrument_STAR__orig_val__55384,_STAR_parent_STAR__orig_val__55385,_STAR_reconciler_STAR__temp_val__55386,_STAR_depth_STAR__temp_val__55387,_STAR_shared_STAR__temp_val__55388,_STAR_instrument_STAR__temp_val__55389,_STAR_parent_STAR__temp_val__55390,this$,this__52659__auto__,x55380_56281){
return (function com$wsscode$pathom$viz$index_explorer$iter__55395(s__55396){
return (new cljs.core.LazySeq(null,((function (nested_reaches_QMARK_,G__55393,map__55391,map__55391__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__55381,_STAR_depth_STAR__orig_val__55382,_STAR_shared_STAR__orig_val__55383,_STAR_instrument_STAR__orig_val__55384,_STAR_parent_STAR__orig_val__55385,_STAR_reconciler_STAR__temp_val__55386,_STAR_depth_STAR__temp_val__55387,_STAR_shared_STAR__temp_val__55388,_STAR_instrument_STAR__temp_val__55389,_STAR_parent_STAR__temp_val__55390,this$,this__52659__auto__,x55380_56281){
return (function (){
var s__55396__$1 = s__55396;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__55396__$1);
if(temp__5720__auto__){
var s__55396__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__55396__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__55396__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__55398 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__55397 = (0);
while(true){
if((i__55397 < size__4522__auto__)){
var vec__55399 = cljs.core._nth(c__4521__auto__,i__55397);
var input = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55399,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55399,(1),null);
var direct_QMARK_ = cljs.core.some(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(com.wsscode.pathom.viz.index_explorer.direct_input_QMARK_,cljs.core.first),v);
if(cljs.core.truth_((function (){var or__4131__auto__ = direct_QMARK_;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return nested_reaches_QMARK_;
}
})())){
cljs.core.chunk_append(b__55398,fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([input], 0))], null),com.wsscode.pathom.viz.index_explorer.attribute_link(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),(function (){var G__55402 = input;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(input),(1))){
return cljs.core.first(G__55402);
} else {
return G__55402;
}
})(),new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","render","com.wsscode.pathom.viz.ui.kit/render",1024565529),((function (i__55397,s__55396__$1,direct_QMARK_,vec__55399,input,v,c__4521__auto__,size__4522__auto__,b__55398,s__55396__$2,temp__5720__auto__,nested_reaches_QMARK_,G__55393,map__55391,map__55391__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__55381,_STAR_depth_STAR__orig_val__55382,_STAR_shared_STAR__orig_val__55383,_STAR_instrument_STAR__orig_val__55384,_STAR_parent_STAR__orig_val__55385,_STAR_reconciler_STAR__temp_val__55386,_STAR_depth_STAR__temp_val__55387,_STAR_shared_STAR__temp_val__55388,_STAR_instrument_STAR__temp_val__55389,_STAR_parent_STAR__temp_val__55390,this$,this__52659__auto__,x55380_56281){
return (function (){
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([input], 0));
});})(i__55397,s__55396__$1,direct_QMARK_,vec__55399,input,v,c__4521__auto__,size__4522__auto__,b__55398,s__55396__$2,temp__5720__auto__,nested_reaches_QMARK_,G__55393,map__55391,map__55391__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__55381,_STAR_depth_STAR__orig_val__55382,_STAR_shared_STAR__orig_val__55383,_STAR_instrument_STAR__orig_val__55384,_STAR_parent_STAR__orig_val__55385,_STAR_reconciler_STAR__temp_val__55386,_STAR_depth_STAR__temp_val__55387,_STAR_shared_STAR__temp_val__55388,_STAR_instrument_STAR__temp_val__55389,_STAR_parent_STAR__temp_val__55390,this$,this__52659__auto__,x55380_56281))
,new cljs.core.Keyword(null,"style","style",-496642736),(function (){var G__55403 = cljs.core.PersistentArrayMap.EMPTY;
if(cljs.core.truth_(direct_QMARK_)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__55403,new cljs.core.Keyword(null,"fontWeight","fontWeight",166450581),"bold");
} else {
return G__55403;
}
})()], null),computed),((nested_reaches_QMARK_)?(function (){var iter__4523__auto__ = ((function (i__55397,s__55396__$1,direct_QMARK_,vec__55399,input,v,c__4521__auto__,size__4522__auto__,b__55398,s__55396__$2,temp__5720__auto__,nested_reaches_QMARK_,G__55393,map__55391,map__55391__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__55381,_STAR_depth_STAR__orig_val__55382,_STAR_shared_STAR__orig_val__55383,_STAR_instrument_STAR__orig_val__55384,_STAR_parent_STAR__orig_val__55385,_STAR_reconciler_STAR__temp_val__55386,_STAR_depth_STAR__temp_val__55387,_STAR_shared_STAR__temp_val__55388,_STAR_instrument_STAR__temp_val__55389,_STAR_parent_STAR__temp_val__55390,this$,this__52659__auto__,x55380_56281){
return (function com$wsscode$pathom$viz$index_explorer$iter__55395_$_iter__55404(s__55405){
return (new cljs.core.LazySeq(null,((function (i__55397,s__55396__$1,direct_QMARK_,vec__55399,input,v,c__4521__auto__,size__4522__auto__,b__55398,s__55396__$2,temp__5720__auto__,nested_reaches_QMARK_,G__55393,map__55391,map__55391__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__55381,_STAR_depth_STAR__orig_val__55382,_STAR_shared_STAR__orig_val__55383,_STAR_instrument_STAR__orig_val__55384,_STAR_parent_STAR__orig_val__55385,_STAR_reconciler_STAR__temp_val__55386,_STAR_depth_STAR__temp_val__55387,_STAR_shared_STAR__temp_val__55388,_STAR_instrument_STAR__temp_val__55389,_STAR_parent_STAR__temp_val__55390,this$,this__52659__auto__,x55380_56281){
return (function (){
var s__55405__$1 = s__55405;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__55405__$1);
if(temp__5720__auto____$1){
var s__55405__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__55405__$2)){
var c__4521__auto____$1 = cljs.core.chunk_first(s__55405__$2);
var size__4522__auto____$1 = cljs.core.count(c__4521__auto____$1);
var b__55407 = cljs.core.chunk_buffer(size__4522__auto____$1);
if((function (){var i__55406 = (0);
while(true){
if((i__55406 < size__4522__auto____$1)){
var vec__55408 = cljs.core._nth(c__4521__auto____$1,i__55406);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55408,(0),null);
var resolvers = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55408,(1),null);
var path_SINGLEQUOTE_ = cljs.core.next(path);
if(path_SINGLEQUOTE_){
cljs.core.chunk_append(b__55407,fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path], 0)),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"marginLeft","marginLeft",-551287007),"10px"], null)], null),(function (){var iter__4523__auto__ = ((function (i__55406,s__55405__$1,i__55397,s__55396__$1,path_SINGLEQUOTE_,vec__55408,path,resolvers,c__4521__auto____$1,size__4522__auto____$1,b__55407,s__55405__$2,temp__5720__auto____$1,direct_QMARK_,vec__55399,input,v,c__4521__auto__,size__4522__auto__,b__55398,s__55396__$2,temp__5720__auto__,nested_reaches_QMARK_,G__55393,map__55391,map__55391__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__55381,_STAR_depth_STAR__orig_val__55382,_STAR_shared_STAR__orig_val__55383,_STAR_instrument_STAR__orig_val__55384,_STAR_parent_STAR__orig_val__55385,_STAR_reconciler_STAR__temp_val__55386,_STAR_depth_STAR__temp_val__55387,_STAR_shared_STAR__temp_val__55388,_STAR_instrument_STAR__temp_val__55389,_STAR_parent_STAR__temp_val__55390,this$,this__52659__auto__,x55380_56281){
return (function com$wsscode$pathom$viz$index_explorer$iter__55395_$_iter__55404_$_iter__55411(s__55412){
return (new cljs.core.LazySeq(null,((function (i__55406,s__55405__$1,i__55397,s__55396__$1,path_SINGLEQUOTE_,vec__55408,path,resolvers,c__4521__auto____$1,size__4522__auto____$1,b__55407,s__55405__$2,temp__5720__auto____$1,direct_QMARK_,vec__55399,input,v,c__4521__auto__,size__4522__auto__,b__55398,s__55396__$2,temp__5720__auto__,nested_reaches_QMARK_,G__55393,map__55391,map__55391__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__55381,_STAR_depth_STAR__orig_val__55382,_STAR_shared_STAR__orig_val__55383,_STAR_instrument_STAR__orig_val__55384,_STAR_parent_STAR__orig_val__55385,_STAR_reconciler_STAR__temp_val__55386,_STAR_depth_STAR__temp_val__55387,_STAR_shared_STAR__temp_val__55388,_STAR_instrument_STAR__temp_val__55389,_STAR_parent_STAR__temp_val__55390,this$,this__52659__auto__,x55380_56281){
return (function (){
var s__55412__$1 = s__55412;
while(true){
var temp__5720__auto____$2 = cljs.core.seq(s__55412__$1);
if(temp__5720__auto____$2){
var s__55412__$2 = temp__5720__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__55412__$2)){
var c__4521__auto____$2 = cljs.core.chunk_first(s__55412__$2);
var size__4522__auto____$2 = cljs.core.count(c__4521__auto____$2);
var b__55414 = cljs.core.chunk_buffer(size__4522__auto____$2);
if((function (){var i__55413 = (0);
while(true){
if((i__55413 < size__4522__auto____$2)){
var vec__55415 = cljs.core._nth(c__4521__auto____$2,i__55413);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55415,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55415,(1),null);
cljs.core.chunk_append(b__55414,com.wsscode.pathom.viz.index_explorer.attribute_link(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),k,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"marginLeft","marginLeft",-551287007),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((i * (10))),"px"].join('')], null)], null),computed));

var G__56305 = (i__55413 + (1));
i__55413 = G__56305;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__55414),com$wsscode$pathom$viz$index_explorer$iter__55395_$_iter__55404_$_iter__55411(cljs.core.chunk_rest(s__55412__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__55414),null);
}
} else {
var vec__55418 = cljs.core.first(s__55412__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55418,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55418,(1),null);
return cljs.core.cons(com.wsscode.pathom.viz.index_explorer.attribute_link(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),k,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"marginLeft","marginLeft",-551287007),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((i * (10))),"px"].join('')], null)], null),computed),com$wsscode$pathom$viz$index_explorer$iter__55395_$_iter__55404_$_iter__55411(cljs.core.rest(s__55412__$2)));
}
} else {
return null;
}
break;
}
});})(i__55406,s__55405__$1,i__55397,s__55396__$1,path_SINGLEQUOTE_,vec__55408,path,resolvers,c__4521__auto____$1,size__4522__auto____$1,b__55407,s__55405__$2,temp__5720__auto____$1,direct_QMARK_,vec__55399,input,v,c__4521__auto__,size__4522__auto__,b__55398,s__55396__$2,temp__5720__auto__,nested_reaches_QMARK_,G__55393,map__55391,map__55391__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__55381,_STAR_depth_STAR__orig_val__55382,_STAR_shared_STAR__orig_val__55383,_STAR_instrument_STAR__orig_val__55384,_STAR_parent_STAR__orig_val__55385,_STAR_reconciler_STAR__temp_val__55386,_STAR_depth_STAR__temp_val__55387,_STAR_shared_STAR__temp_val__55388,_STAR_instrument_STAR__temp_val__55389,_STAR_parent_STAR__temp_val__55390,this$,this__52659__auto__,x55380_56281))
,null,null));
});})(i__55406,s__55405__$1,i__55397,s__55396__$1,path_SINGLEQUOTE_,vec__55408,path,resolvers,c__4521__auto____$1,size__4522__auto____$1,b__55407,s__55405__$2,temp__5720__auto____$1,direct_QMARK_,vec__55399,input,v,c__4521__auto__,size__4522__auto__,b__55398,s__55396__$2,temp__5720__auto__,nested_reaches_QMARK_,G__55393,map__55391,map__55391__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__55381,_STAR_depth_STAR__orig_val__55382,_STAR_shared_STAR__orig_val__55383,_STAR_instrument_STAR__orig_val__55384,_STAR_parent_STAR__orig_val__55385,_STAR_reconciler_STAR__temp_val__55386,_STAR_depth_STAR__temp_val__55387,_STAR_shared_STAR__temp_val__55388,_STAR_instrument_STAR__temp_val__55389,_STAR_parent_STAR__temp_val__55390,this$,this__52659__auto__,x55380_56281))
;
return iter__4523__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,path_SINGLEQUOTE_,cljs.core.range.cljs$core$IFn$_invoke$arity$0()));
})()], 0)));

var G__56306 = (i__55406 + (1));
i__55406 = G__56306;
continue;
} else {
var G__56307 = (i__55406 + (1));
i__55406 = G__56307;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__55407),com$wsscode$pathom$viz$index_explorer$iter__55395_$_iter__55404(cljs.core.chunk_rest(s__55405__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__55407),null);
}
} else {
var vec__55421 = cljs.core.first(s__55405__$2);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55421,(0),null);
var resolvers = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55421,(1),null);
var path_SINGLEQUOTE_ = cljs.core.next(path);
if(path_SINGLEQUOTE_){
return cljs.core.cons(fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path], 0)),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"marginLeft","marginLeft",-551287007),"10px"], null)], null),(function (){var iter__4523__auto__ = ((function (s__55405__$1,i__55397,s__55396__$1,path_SINGLEQUOTE_,vec__55421,path,resolvers,s__55405__$2,temp__5720__auto____$1,direct_QMARK_,vec__55399,input,v,c__4521__auto__,size__4522__auto__,b__55398,s__55396__$2,temp__5720__auto__,nested_reaches_QMARK_,G__55393,map__55391,map__55391__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__55381,_STAR_depth_STAR__orig_val__55382,_STAR_shared_STAR__orig_val__55383,_STAR_instrument_STAR__orig_val__55384,_STAR_parent_STAR__orig_val__55385,_STAR_reconciler_STAR__temp_val__55386,_STAR_depth_STAR__temp_val__55387,_STAR_shared_STAR__temp_val__55388,_STAR_instrument_STAR__temp_val__55389,_STAR_parent_STAR__temp_val__55390,this$,this__52659__auto__,x55380_56281){
return (function com$wsscode$pathom$viz$index_explorer$iter__55395_$_iter__55404_$_iter__55424(s__55425){
return (new cljs.core.LazySeq(null,((function (s__55405__$1,i__55397,s__55396__$1,path_SINGLEQUOTE_,vec__55421,path,resolvers,s__55405__$2,temp__5720__auto____$1,direct_QMARK_,vec__55399,input,v,c__4521__auto__,size__4522__auto__,b__55398,s__55396__$2,temp__5720__auto__,nested_reaches_QMARK_,G__55393,map__55391,map__55391__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__55381,_STAR_depth_STAR__orig_val__55382,_STAR_shared_STAR__orig_val__55383,_STAR_instrument_STAR__orig_val__55384,_STAR_parent_STAR__orig_val__55385,_STAR_reconciler_STAR__temp_val__55386,_STAR_depth_STAR__temp_val__55387,_STAR_shared_STAR__temp_val__55388,_STAR_instrument_STAR__temp_val__55389,_STAR_parent_STAR__temp_val__55390,this$,this__52659__auto__,x55380_56281){
return (function (){
var s__55425__$1 = s__55425;
while(true){
var temp__5720__auto____$2 = cljs.core.seq(s__55425__$1);
if(temp__5720__auto____$2){
var s__55425__$2 = temp__5720__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__55425__$2)){
var c__4521__auto____$1 = cljs.core.chunk_first(s__55425__$2);
var size__4522__auto____$1 = cljs.core.count(c__4521__auto____$1);
var b__55427 = cljs.core.chunk_buffer(size__4522__auto____$1);
if((function (){var i__55426 = (0);
while(true){
if((i__55426 < size__4522__auto____$1)){
var vec__55428 = cljs.core._nth(c__4521__auto____$1,i__55426);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55428,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55428,(1),null);
cljs.core.chunk_append(b__55427,com.wsscode.pathom.viz.index_explorer.attribute_link(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),k,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"marginLeft","marginLeft",-551287007),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((i * (10))),"px"].join('')], null)], null),computed));

var G__56308 = (i__55426 + (1));
i__55426 = G__56308;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__55427),com$wsscode$pathom$viz$index_explorer$iter__55395_$_iter__55404_$_iter__55424(cljs.core.chunk_rest(s__55425__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__55427),null);
}
} else {
var vec__55431 = cljs.core.first(s__55425__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55431,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55431,(1),null);
return cljs.core.cons(com.wsscode.pathom.viz.index_explorer.attribute_link(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),k,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"marginLeft","marginLeft",-551287007),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((i * (10))),"px"].join('')], null)], null),computed),com$wsscode$pathom$viz$index_explorer$iter__55395_$_iter__55404_$_iter__55424(cljs.core.rest(s__55425__$2)));
}
} else {
return null;
}
break;
}
});})(s__55405__$1,i__55397,s__55396__$1,path_SINGLEQUOTE_,vec__55421,path,resolvers,s__55405__$2,temp__5720__auto____$1,direct_QMARK_,vec__55399,input,v,c__4521__auto__,size__4522__auto__,b__55398,s__55396__$2,temp__5720__auto__,nested_reaches_QMARK_,G__55393,map__55391,map__55391__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__55381,_STAR_depth_STAR__orig_val__55382,_STAR_shared_STAR__orig_val__55383,_STAR_instrument_STAR__orig_val__55384,_STAR_parent_STAR__orig_val__55385,_STAR_reconciler_STAR__temp_val__55386,_STAR_depth_STAR__temp_val__55387,_STAR_shared_STAR__temp_val__55388,_STAR_instrument_STAR__temp_val__55389,_STAR_parent_STAR__temp_val__55390,this$,this__52659__auto__,x55380_56281))
,null,null));
});})(s__55405__$1,i__55397,s__55396__$1,path_SINGLEQUOTE_,vec__55421,path,resolvers,s__55405__$2,temp__5720__auto____$1,direct_QMARK_,vec__55399,input,v,c__4521__auto__,size__4522__auto__,b__55398,s__55396__$2,temp__5720__auto__,nested_reaches_QMARK_,G__55393,map__55391,map__55391__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__55381,_STAR_depth_STAR__orig_val__55382,_STAR_shared_STAR__orig_val__55383,_STAR_instrument_STAR__orig_val__55384,_STAR_parent_STAR__orig_val__55385,_STAR_reconciler_STAR__temp_val__55386,_STAR_depth_STAR__temp_val__55387,_STAR_shared_STAR__temp_val__55388,_STAR_instrument_STAR__temp_val__55389,_STAR_parent_STAR__temp_val__55390,this$,this__52659__auto__,x55380_56281))
;
return iter__4523__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,path_SINGLEQUOTE_,cljs.core.range.cljs$core$IFn$_invoke$arity$0()));
})()], 0)),com$wsscode$pathom$viz$index_explorer$iter__55395_$_iter__55404(cljs.core.rest(s__55405__$2)));
} else {
var G__56309 = cljs.core.rest(s__55405__$2);
s__55405__$1 = G__56309;
continue;
}
}
} else {
return null;
}
break;
}
});})(i__55397,s__55396__$1,direct_QMARK_,vec__55399,input,v,c__4521__auto__,size__4522__auto__,b__55398,s__55396__$2,temp__5720__auto__,nested_reaches_QMARK_,G__55393,map__55391,map__55391__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__55381,_STAR_depth_STAR__orig_val__55382,_STAR_shared_STAR__orig_val__55383,_STAR_instrument_STAR__orig_val__55384,_STAR_parent_STAR__orig_val__55385,_STAR_reconciler_STAR__temp_val__55386,_STAR_depth_STAR__temp_val__55387,_STAR_shared_STAR__temp_val__55388,_STAR_instrument_STAR__temp_val__55389,_STAR_parent_STAR__temp_val__55390,this$,this__52659__auto__,x55380_56281))
,null,null));
});})(i__55397,s__55396__$1,direct_QMARK_,vec__55399,input,v,c__4521__auto__,size__4522__auto__,b__55398,s__55396__$2,temp__5720__auto__,nested_reaches_QMARK_,G__55393,map__55391,map__55391__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__55381,_STAR_depth_STAR__orig_val__55382,_STAR_shared_STAR__orig_val__55383,_STAR_instrument_STAR__orig_val__55384,_STAR_parent_STAR__orig_val__55385,_STAR_reconciler_STAR__temp_val__55386,_STAR_depth_STAR__temp_val__55387,_STAR_shared_STAR__temp_val__55388,_STAR_instrument_STAR__temp_val__55389,_STAR_parent_STAR__temp_val__55390,this$,this__52659__auto__,x55380_56281))
;
return iter__4523__auto__(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(((function (i__55397,s__55396__$1,iter__4523__auto__,direct_QMARK_,vec__55399,input,v,c__4521__auto__,size__4522__auto__,b__55398,s__55396__$2,temp__5720__auto__,nested_reaches_QMARK_,G__55393,map__55391,map__55391__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__55381,_STAR_depth_STAR__orig_val__55382,_STAR_shared_STAR__orig_val__55383,_STAR_instrument_STAR__orig_val__55384,_STAR_parent_STAR__orig_val__55385,_STAR_reconciler_STAR__temp_val__55386,_STAR_depth_STAR__temp_val__55387,_STAR_shared_STAR__temp_val__55388,_STAR_instrument_STAR__temp_val__55389,_STAR_parent_STAR__temp_val__55390,this$,this__52659__auto__,x55380_56281){
return (function (p1__55377_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(p1__55377_SHARP_,(0),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,cljs.core.sort));
});})(i__55397,s__55396__$1,iter__4523__auto__,direct_QMARK_,vec__55399,input,v,c__4521__auto__,size__4522__auto__,b__55398,s__55396__$2,temp__5720__auto__,nested_reaches_QMARK_,G__55393,map__55391,map__55391__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__55381,_STAR_depth_STAR__orig_val__55382,_STAR_shared_STAR__orig_val__55383,_STAR_instrument_STAR__orig_val__55384,_STAR_parent_STAR__orig_val__55385,_STAR_reconciler_STAR__temp_val__55386,_STAR_depth_STAR__temp_val__55387,_STAR_shared_STAR__temp_val__55388,_STAR_instrument_STAR__temp_val__55389,_STAR_parent_STAR__temp_val__55390,this$,this__52659__auto__,x55380_56281))
,cljs.core.first),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__55397,s__55396__$1,iter__4523__auto__,direct_QMARK_,vec__55399,input,v,c__4521__auto__,size__4522__auto__,b__55398,s__55396__$2,temp__5720__auto__,nested_reaches_QMARK_,G__55393,map__55391,map__55391__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__55381,_STAR_depth_STAR__orig_val__55382,_STAR_shared_STAR__orig_val__55383,_STAR_instrument_STAR__orig_val__55384,_STAR_parent_STAR__orig_val__55385,_STAR_reconciler_STAR__temp_val__55386,_STAR_depth_STAR__temp_val__55387,_STAR_shared_STAR__temp_val__55388,_STAR_instrument_STAR__temp_val__55389,_STAR_parent_STAR__temp_val__55390,this$,this__52659__auto__,x55380_56281){
return (function (p1__55376_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(p1__55376_SHARP_,(0),((function (i__55397,s__55396__$1,iter__4523__auto__,direct_QMARK_,vec__55399,input,v,c__4521__auto__,size__4522__auto__,b__55398,s__55396__$2,temp__5720__auto__,nested_reaches_QMARK_,G__55393,map__55391,map__55391__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__55381,_STAR_depth_STAR__orig_val__55382,_STAR_shared_STAR__orig_val__55383,_STAR_instrument_STAR__orig_val__55384,_STAR_parent_STAR__orig_val__55385,_STAR_reconciler_STAR__temp_val__55386,_STAR_depth_STAR__temp_val__55387,_STAR_shared_STAR__temp_val__55388,_STAR_instrument_STAR__temp_val__55389,_STAR_parent_STAR__temp_val__55390,this$,this__52659__auto__,x55380_56281){
return (function (x){
if(cljs.core.set_QMARK_(x)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
} else {
return x;
}
});})(i__55397,s__55396__$1,iter__4523__auto__,direct_QMARK_,vec__55399,input,v,c__4521__auto__,size__4522__auto__,b__55398,s__55396__$2,temp__5720__auto__,nested_reaches_QMARK_,G__55393,map__55391,map__55391__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__55381,_STAR_depth_STAR__orig_val__55382,_STAR_shared_STAR__orig_val__55383,_STAR_instrument_STAR__orig_val__55384,_STAR_parent_STAR__orig_val__55385,_STAR_reconciler_STAR__temp_val__55386,_STAR_depth_STAR__temp_val__55387,_STAR_shared_STAR__temp_val__55388,_STAR_instrument_STAR__temp_val__55389,_STAR_parent_STAR__temp_val__55390,this$,this__52659__auto__,x55380_56281))
);
});})(i__55397,s__55396__$1,iter__4523__auto__,direct_QMARK_,vec__55399,input,v,c__4521__auto__,size__4522__auto__,b__55398,s__55396__$2,temp__5720__auto__,nested_reaches_QMARK_,G__55393,map__55391,map__55391__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__55381,_STAR_depth_STAR__orig_val__55382,_STAR_shared_STAR__orig_val__55383,_STAR_instrument_STAR__orig_val__55384,_STAR_parent_STAR__orig_val__55385,_STAR_reconciler_STAR__temp_val__55386,_STAR_depth_STAR__temp_val__55387,_STAR_shared_STAR__temp_val__55388,_STAR_instrument_STAR__temp_val__55389,_STAR_parent_STAR__temp_val__55390,this$,this__52659__auto__,x55380_56281))
,v)));
})():null)], 0)));

var G__56310 = (i__55397 + (1));
i__55397 = G__56310;
continue;
} else {
var G__56311 = (i__55397 + (1));
i__55397 = G__56311;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__55398),com$wsscode$pathom$viz$index_explorer$iter__55395(cljs.core.chunk_rest(s__55396__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__55398),null);
}
} else {
var vec__55434 = cljs.core.first(s__55396__$2);
var input = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55434,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55434,(1),null);
var direct_QMARK_ = cljs.core.some(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(com.wsscode.pathom.viz.index_explorer.direct_input_QMARK_,cljs.core.first),v);
if(cljs.core.truth_((function (){var or__4131__auto__ = direct_QMARK_;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return nested_reaches_QMARK_;
}
})())){
return cljs.core.cons(fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([input], 0))], null),com.wsscode.pathom.viz.index_explorer.attribute_link(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),(function (){var G__55437 = input;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(input),(1))){
return cljs.core.first(G__55437);
} else {
return G__55437;
}
})(),new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","render","com.wsscode.pathom.viz.ui.kit/render",1024565529),((function (s__55396__$1,direct_QMARK_,vec__55434,input,v,s__55396__$2,temp__5720__auto__,nested_reaches_QMARK_,G__55393,map__55391,map__55391__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__55381,_STAR_depth_STAR__orig_val__55382,_STAR_shared_STAR__orig_val__55383,_STAR_instrument_STAR__orig_val__55384,_STAR_parent_STAR__orig_val__55385,_STAR_reconciler_STAR__temp_val__55386,_STAR_depth_STAR__temp_val__55387,_STAR_shared_STAR__temp_val__55388,_STAR_instrument_STAR__temp_val__55389,_STAR_parent_STAR__temp_val__55390,this$,this__52659__auto__,x55380_56281){
return (function (){
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([input], 0));
});})(s__55396__$1,direct_QMARK_,vec__55434,input,v,s__55396__$2,temp__5720__auto__,nested_reaches_QMARK_,G__55393,map__55391,map__55391__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__55381,_STAR_depth_STAR__orig_val__55382,_STAR_shared_STAR__orig_val__55383,_STAR_instrument_STAR__orig_val__55384,_STAR_parent_STAR__orig_val__55385,_STAR_reconciler_STAR__temp_val__55386,_STAR_depth_STAR__temp_val__55387,_STAR_shared_STAR__temp_val__55388,_STAR_instrument_STAR__temp_val__55389,_STAR_parent_STAR__temp_val__55390,this$,this__52659__auto__,x55380_56281))
,new cljs.core.Keyword(null,"style","style",-496642736),(function (){var G__55438 = cljs.core.PersistentArrayMap.EMPTY;
if(cljs.core.truth_(direct_QMARK_)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__55438,new cljs.core.Keyword(null,"fontWeight","fontWeight",166450581),"bold");
} else {
return G__55438;
}
})()], null),computed),((nested_reaches_QMARK_)?(function (){var iter__4523__auto__ = ((function (s__55396__$1,direct_QMARK_,vec__55434,input,v,s__55396__$2,temp__5720__auto__,nested_reaches_QMARK_,G__55393,map__55391,map__55391__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__55381,_STAR_depth_STAR__orig_val__55382,_STAR_shared_STAR__orig_val__55383,_STAR_instrument_STAR__orig_val__55384,_STAR_parent_STAR__orig_val__55385,_STAR_reconciler_STAR__temp_val__55386,_STAR_depth_STAR__temp_val__55387,_STAR_shared_STAR__temp_val__55388,_STAR_instrument_STAR__temp_val__55389,_STAR_parent_STAR__temp_val__55390,this$,this__52659__auto__,x55380_56281){
return (function com$wsscode$pathom$viz$index_explorer$iter__55395_$_iter__55439(s__55440){
return (new cljs.core.LazySeq(null,((function (s__55396__$1,direct_QMARK_,vec__55434,input,v,s__55396__$2,temp__5720__auto__,nested_reaches_QMARK_,G__55393,map__55391,map__55391__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__55381,_STAR_depth_STAR__orig_val__55382,_STAR_shared_STAR__orig_val__55383,_STAR_instrument_STAR__orig_val__55384,_STAR_parent_STAR__orig_val__55385,_STAR_reconciler_STAR__temp_val__55386,_STAR_depth_STAR__temp_val__55387,_STAR_shared_STAR__temp_val__55388,_STAR_instrument_STAR__temp_val__55389,_STAR_parent_STAR__temp_val__55390,this$,this__52659__auto__,x55380_56281){
return (function (){
var s__55440__$1 = s__55440;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__55440__$1);
if(temp__5720__auto____$1){
var s__55440__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__55440__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__55440__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__55442 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__55441 = (0);
while(true){
if((i__55441 < size__4522__auto__)){
var vec__55443 = cljs.core._nth(c__4521__auto__,i__55441);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55443,(0),null);
var resolvers = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55443,(1),null);
var path_SINGLEQUOTE_ = cljs.core.next(path);
if(path_SINGLEQUOTE_){
cljs.core.chunk_append(b__55442,fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path], 0)),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"marginLeft","marginLeft",-551287007),"10px"], null)], null),(function (){var iter__4523__auto__ = ((function (i__55441,s__55440__$1,s__55396__$1,path_SINGLEQUOTE_,vec__55443,path,resolvers,c__4521__auto__,size__4522__auto__,b__55442,s__55440__$2,temp__5720__auto____$1,direct_QMARK_,vec__55434,input,v,s__55396__$2,temp__5720__auto__,nested_reaches_QMARK_,G__55393,map__55391,map__55391__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__55381,_STAR_depth_STAR__orig_val__55382,_STAR_shared_STAR__orig_val__55383,_STAR_instrument_STAR__orig_val__55384,_STAR_parent_STAR__orig_val__55385,_STAR_reconciler_STAR__temp_val__55386,_STAR_depth_STAR__temp_val__55387,_STAR_shared_STAR__temp_val__55388,_STAR_instrument_STAR__temp_val__55389,_STAR_parent_STAR__temp_val__55390,this$,this__52659__auto__,x55380_56281){
return (function com$wsscode$pathom$viz$index_explorer$iter__55395_$_iter__55439_$_iter__55446(s__55447){
return (new cljs.core.LazySeq(null,((function (i__55441,s__55440__$1,s__55396__$1,path_SINGLEQUOTE_,vec__55443,path,resolvers,c__4521__auto__,size__4522__auto__,b__55442,s__55440__$2,temp__5720__auto____$1,direct_QMARK_,vec__55434,input,v,s__55396__$2,temp__5720__auto__,nested_reaches_QMARK_,G__55393,map__55391,map__55391__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__55381,_STAR_depth_STAR__orig_val__55382,_STAR_shared_STAR__orig_val__55383,_STAR_instrument_STAR__orig_val__55384,_STAR_parent_STAR__orig_val__55385,_STAR_reconciler_STAR__temp_val__55386,_STAR_depth_STAR__temp_val__55387,_STAR_shared_STAR__temp_val__55388,_STAR_instrument_STAR__temp_val__55389,_STAR_parent_STAR__temp_val__55390,this$,this__52659__auto__,x55380_56281){
return (function (){
var s__55447__$1 = s__55447;
while(true){
var temp__5720__auto____$2 = cljs.core.seq(s__55447__$1);
if(temp__5720__auto____$2){
var s__55447__$2 = temp__5720__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__55447__$2)){
var c__4521__auto____$1 = cljs.core.chunk_first(s__55447__$2);
var size__4522__auto____$1 = cljs.core.count(c__4521__auto____$1);
var b__55449 = cljs.core.chunk_buffer(size__4522__auto____$1);
if((function (){var i__55448 = (0);
while(true){
if((i__55448 < size__4522__auto____$1)){
var vec__55450 = cljs.core._nth(c__4521__auto____$1,i__55448);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55450,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55450,(1),null);
cljs.core.chunk_append(b__55449,com.wsscode.pathom.viz.index_explorer.attribute_link(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),k,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"marginLeft","marginLeft",-551287007),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((i * (10))),"px"].join('')], null)], null),computed));

var G__56312 = (i__55448 + (1));
i__55448 = G__56312;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__55449),com$wsscode$pathom$viz$index_explorer$iter__55395_$_iter__55439_$_iter__55446(cljs.core.chunk_rest(s__55447__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__55449),null);
}
} else {
var vec__55453 = cljs.core.first(s__55447__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55453,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55453,(1),null);
return cljs.core.cons(com.wsscode.pathom.viz.index_explorer.attribute_link(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),k,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"marginLeft","marginLeft",-551287007),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((i * (10))),"px"].join('')], null)], null),computed),com$wsscode$pathom$viz$index_explorer$iter__55395_$_iter__55439_$_iter__55446(cljs.core.rest(s__55447__$2)));
}
} else {
return null;
}
break;
}
});})(i__55441,s__55440__$1,s__55396__$1,path_SINGLEQUOTE_,vec__55443,path,resolvers,c__4521__auto__,size__4522__auto__,b__55442,s__55440__$2,temp__5720__auto____$1,direct_QMARK_,vec__55434,input,v,s__55396__$2,temp__5720__auto__,nested_reaches_QMARK_,G__55393,map__55391,map__55391__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__55381,_STAR_depth_STAR__orig_val__55382,_STAR_shared_STAR__orig_val__55383,_STAR_instrument_STAR__orig_val__55384,_STAR_parent_STAR__orig_val__55385,_STAR_reconciler_STAR__temp_val__55386,_STAR_depth_STAR__temp_val__55387,_STAR_shared_STAR__temp_val__55388,_STAR_instrument_STAR__temp_val__55389,_STAR_parent_STAR__temp_val__55390,this$,this__52659__auto__,x55380_56281))
,null,null));
});})(i__55441,s__55440__$1,s__55396__$1,path_SINGLEQUOTE_,vec__55443,path,resolvers,c__4521__auto__,size__4522__auto__,b__55442,s__55440__$2,temp__5720__auto____$1,direct_QMARK_,vec__55434,input,v,s__55396__$2,temp__5720__auto__,nested_reaches_QMARK_,G__55393,map__55391,map__55391__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__55381,_STAR_depth_STAR__orig_val__55382,_STAR_shared_STAR__orig_val__55383,_STAR_instrument_STAR__orig_val__55384,_STAR_parent_STAR__orig_val__55385,_STAR_reconciler_STAR__temp_val__55386,_STAR_depth_STAR__temp_val__55387,_STAR_shared_STAR__temp_val__55388,_STAR_instrument_STAR__temp_val__55389,_STAR_parent_STAR__temp_val__55390,this$,this__52659__auto__,x55380_56281))
;
return iter__4523__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,path_SINGLEQUOTE_,cljs.core.range.cljs$core$IFn$_invoke$arity$0()));
})()], 0)));

var G__56313 = (i__55441 + (1));
i__55441 = G__56313;
continue;
} else {
var G__56314 = (i__55441 + (1));
i__55441 = G__56314;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__55442),com$wsscode$pathom$viz$index_explorer$iter__55395_$_iter__55439(cljs.core.chunk_rest(s__55440__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__55442),null);
}
} else {
var vec__55456 = cljs.core.first(s__55440__$2);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55456,(0),null);
var resolvers = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55456,(1),null);
var path_SINGLEQUOTE_ = cljs.core.next(path);
if(path_SINGLEQUOTE_){
return cljs.core.cons(fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path], 0)),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"marginLeft","marginLeft",-551287007),"10px"], null)], null),(function (){var iter__4523__auto__ = ((function (s__55440__$1,s__55396__$1,path_SINGLEQUOTE_,vec__55456,path,resolvers,s__55440__$2,temp__5720__auto____$1,direct_QMARK_,vec__55434,input,v,s__55396__$2,temp__5720__auto__,nested_reaches_QMARK_,G__55393,map__55391,map__55391__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__55381,_STAR_depth_STAR__orig_val__55382,_STAR_shared_STAR__orig_val__55383,_STAR_instrument_STAR__orig_val__55384,_STAR_parent_STAR__orig_val__55385,_STAR_reconciler_STAR__temp_val__55386,_STAR_depth_STAR__temp_val__55387,_STAR_shared_STAR__temp_val__55388,_STAR_instrument_STAR__temp_val__55389,_STAR_parent_STAR__temp_val__55390,this$,this__52659__auto__,x55380_56281){
return (function com$wsscode$pathom$viz$index_explorer$iter__55395_$_iter__55439_$_iter__55459(s__55460){
return (new cljs.core.LazySeq(null,((function (s__55440__$1,s__55396__$1,path_SINGLEQUOTE_,vec__55456,path,resolvers,s__55440__$2,temp__5720__auto____$1,direct_QMARK_,vec__55434,input,v,s__55396__$2,temp__5720__auto__,nested_reaches_QMARK_,G__55393,map__55391,map__55391__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__55381,_STAR_depth_STAR__orig_val__55382,_STAR_shared_STAR__orig_val__55383,_STAR_instrument_STAR__orig_val__55384,_STAR_parent_STAR__orig_val__55385,_STAR_reconciler_STAR__temp_val__55386,_STAR_depth_STAR__temp_val__55387,_STAR_shared_STAR__temp_val__55388,_STAR_instrument_STAR__temp_val__55389,_STAR_parent_STAR__temp_val__55390,this$,this__52659__auto__,x55380_56281){
return (function (){
var s__55460__$1 = s__55460;
while(true){
var temp__5720__auto____$2 = cljs.core.seq(s__55460__$1);
if(temp__5720__auto____$2){
var s__55460__$2 = temp__5720__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__55460__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__55460__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__55462 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__55461 = (0);
while(true){
if((i__55461 < size__4522__auto__)){
var vec__55463 = cljs.core._nth(c__4521__auto__,i__55461);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55463,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55463,(1),null);
cljs.core.chunk_append(b__55462,com.wsscode.pathom.viz.index_explorer.attribute_link(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),k,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"marginLeft","marginLeft",-551287007),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((i * (10))),"px"].join('')], null)], null),computed));

var G__56315 = (i__55461 + (1));
i__55461 = G__56315;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__55462),com$wsscode$pathom$viz$index_explorer$iter__55395_$_iter__55439_$_iter__55459(cljs.core.chunk_rest(s__55460__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__55462),null);
}
} else {
var vec__55466 = cljs.core.first(s__55460__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55466,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55466,(1),null);
return cljs.core.cons(com.wsscode.pathom.viz.index_explorer.attribute_link(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),k,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"marginLeft","marginLeft",-551287007),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((i * (10))),"px"].join('')], null)], null),computed),com$wsscode$pathom$viz$index_explorer$iter__55395_$_iter__55439_$_iter__55459(cljs.core.rest(s__55460__$2)));
}
} else {
return null;
}
break;
}
});})(s__55440__$1,s__55396__$1,path_SINGLEQUOTE_,vec__55456,path,resolvers,s__55440__$2,temp__5720__auto____$1,direct_QMARK_,vec__55434,input,v,s__55396__$2,temp__5720__auto__,nested_reaches_QMARK_,G__55393,map__55391,map__55391__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__55381,_STAR_depth_STAR__orig_val__55382,_STAR_shared_STAR__orig_val__55383,_STAR_instrument_STAR__orig_val__55384,_STAR_parent_STAR__orig_val__55385,_STAR_reconciler_STAR__temp_val__55386,_STAR_depth_STAR__temp_val__55387,_STAR_shared_STAR__temp_val__55388,_STAR_instrument_STAR__temp_val__55389,_STAR_parent_STAR__temp_val__55390,this$,this__52659__auto__,x55380_56281))
,null,null));
});})(s__55440__$1,s__55396__$1,path_SINGLEQUOTE_,vec__55456,path,resolvers,s__55440__$2,temp__5720__auto____$1,direct_QMARK_,vec__55434,input,v,s__55396__$2,temp__5720__auto__,nested_reaches_QMARK_,G__55393,map__55391,map__55391__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__55381,_STAR_depth_STAR__orig_val__55382,_STAR_shared_STAR__orig_val__55383,_STAR_instrument_STAR__orig_val__55384,_STAR_parent_STAR__orig_val__55385,_STAR_reconciler_STAR__temp_val__55386,_STAR_depth_STAR__temp_val__55387,_STAR_shared_STAR__temp_val__55388,_STAR_instrument_STAR__temp_val__55389,_STAR_parent_STAR__temp_val__55390,this$,this__52659__auto__,x55380_56281))
;
return iter__4523__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,path_SINGLEQUOTE_,cljs.core.range.cljs$core$IFn$_invoke$arity$0()));
})()], 0)),com$wsscode$pathom$viz$index_explorer$iter__55395_$_iter__55439(cljs.core.rest(s__55440__$2)));
} else {
var G__56316 = cljs.core.rest(s__55440__$2);
s__55440__$1 = G__56316;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__55396__$1,direct_QMARK_,vec__55434,input,v,s__55396__$2,temp__5720__auto__,nested_reaches_QMARK_,G__55393,map__55391,map__55391__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__55381,_STAR_depth_STAR__orig_val__55382,_STAR_shared_STAR__orig_val__55383,_STAR_instrument_STAR__orig_val__55384,_STAR_parent_STAR__orig_val__55385,_STAR_reconciler_STAR__temp_val__55386,_STAR_depth_STAR__temp_val__55387,_STAR_shared_STAR__temp_val__55388,_STAR_instrument_STAR__temp_val__55389,_STAR_parent_STAR__temp_val__55390,this$,this__52659__auto__,x55380_56281))
,null,null));
});})(s__55396__$1,direct_QMARK_,vec__55434,input,v,s__55396__$2,temp__5720__auto__,nested_reaches_QMARK_,G__55393,map__55391,map__55391__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__55381,_STAR_depth_STAR__orig_val__55382,_STAR_shared_STAR__orig_val__55383,_STAR_instrument_STAR__orig_val__55384,_STAR_parent_STAR__orig_val__55385,_STAR_reconciler_STAR__temp_val__55386,_STAR_depth_STAR__temp_val__55387,_STAR_shared_STAR__temp_val__55388,_STAR_instrument_STAR__temp_val__55389,_STAR_parent_STAR__temp_val__55390,this$,this__52659__auto__,x55380_56281))
;
return iter__4523__auto__(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(((function (s__55396__$1,iter__4523__auto__,direct_QMARK_,vec__55434,input,v,s__55396__$2,temp__5720__auto__,nested_reaches_QMARK_,G__55393,map__55391,map__55391__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__55381,_STAR_depth_STAR__orig_val__55382,_STAR_shared_STAR__orig_val__55383,_STAR_instrument_STAR__orig_val__55384,_STAR_parent_STAR__orig_val__55385,_STAR_reconciler_STAR__temp_val__55386,_STAR_depth_STAR__temp_val__55387,_STAR_shared_STAR__temp_val__55388,_STAR_instrument_STAR__temp_val__55389,_STAR_parent_STAR__temp_val__55390,this$,this__52659__auto__,x55380_56281){
return (function (p1__55377_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(p1__55377_SHARP_,(0),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,cljs.core.sort));
});})(s__55396__$1,iter__4523__auto__,direct_QMARK_,vec__55434,input,v,s__55396__$2,temp__5720__auto__,nested_reaches_QMARK_,G__55393,map__55391,map__55391__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__55381,_STAR_depth_STAR__orig_val__55382,_STAR_shared_STAR__orig_val__55383,_STAR_instrument_STAR__orig_val__55384,_STAR_parent_STAR__orig_val__55385,_STAR_reconciler_STAR__temp_val__55386,_STAR_depth_STAR__temp_val__55387,_STAR_shared_STAR__temp_val__55388,_STAR_instrument_STAR__temp_val__55389,_STAR_parent_STAR__temp_val__55390,this$,this__52659__auto__,x55380_56281))
,cljs.core.first),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (s__55396__$1,iter__4523__auto__,direct_QMARK_,vec__55434,input,v,s__55396__$2,temp__5720__auto__,nested_reaches_QMARK_,G__55393,map__55391,map__55391__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__55381,_STAR_depth_STAR__orig_val__55382,_STAR_shared_STAR__orig_val__55383,_STAR_instrument_STAR__orig_val__55384,_STAR_parent_STAR__orig_val__55385,_STAR_reconciler_STAR__temp_val__55386,_STAR_depth_STAR__temp_val__55387,_STAR_shared_STAR__temp_val__55388,_STAR_instrument_STAR__temp_val__55389,_STAR_parent_STAR__temp_val__55390,this$,this__52659__auto__,x55380_56281){
return (function (p1__55376_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(p1__55376_SHARP_,(0),((function (s__55396__$1,iter__4523__auto__,direct_QMARK_,vec__55434,input,v,s__55396__$2,temp__5720__auto__,nested_reaches_QMARK_,G__55393,map__55391,map__55391__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__55381,_STAR_depth_STAR__orig_val__55382,_STAR_shared_STAR__orig_val__55383,_STAR_instrument_STAR__orig_val__55384,_STAR_parent_STAR__orig_val__55385,_STAR_reconciler_STAR__temp_val__55386,_STAR_depth_STAR__temp_val__55387,_STAR_shared_STAR__temp_val__55388,_STAR_instrument_STAR__temp_val__55389,_STAR_parent_STAR__temp_val__55390,this$,this__52659__auto__,x55380_56281){
return (function (x){
if(cljs.core.set_QMARK_(x)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
} else {
return x;
}
});})(s__55396__$1,iter__4523__auto__,direct_QMARK_,vec__55434,input,v,s__55396__$2,temp__5720__auto__,nested_reaches_QMARK_,G__55393,map__55391,map__55391__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__55381,_STAR_depth_STAR__orig_val__55382,_STAR_shared_STAR__orig_val__55383,_STAR_instrument_STAR__orig_val__55384,_STAR_parent_STAR__orig_val__55385,_STAR_reconciler_STAR__temp_val__55386,_STAR_depth_STAR__temp_val__55387,_STAR_shared_STAR__temp_val__55388,_STAR_instrument_STAR__temp_val__55389,_STAR_parent_STAR__temp_val__55390,this$,this__52659__auto__,x55380_56281))
);
});})(s__55396__$1,iter__4523__auto__,direct_QMARK_,vec__55434,input,v,s__55396__$2,temp__5720__auto__,nested_reaches_QMARK_,G__55393,map__55391,map__55391__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__55381,_STAR_depth_STAR__orig_val__55382,_STAR_shared_STAR__orig_val__55383,_STAR_instrument_STAR__orig_val__55384,_STAR_parent_STAR__orig_val__55385,_STAR_reconciler_STAR__temp_val__55386,_STAR_depth_STAR__temp_val__55387,_STAR_shared_STAR__temp_val__55388,_STAR_instrument_STAR__temp_val__55389,_STAR_parent_STAR__temp_val__55390,this$,this__52659__auto__,x55380_56281))
,v)));
})():null)], 0)),com$wsscode$pathom$viz$index_explorer$iter__55395(cljs.core.rest(s__55396__$2)));
} else {
var G__56317 = cljs.core.rest(s__55396__$2);
s__55396__$1 = G__56317;
continue;
}
}
} else {
return null;
}
break;
}
});})(nested_reaches_QMARK_,G__55393,map__55391,map__55391__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__55381,_STAR_depth_STAR__orig_val__55382,_STAR_shared_STAR__orig_val__55383,_STAR_instrument_STAR__orig_val__55384,_STAR_parent_STAR__orig_val__55385,_STAR_reconciler_STAR__temp_val__55386,_STAR_depth_STAR__temp_val__55387,_STAR_shared_STAR__temp_val__55388,_STAR_instrument_STAR__temp_val__55389,_STAR_parent_STAR__temp_val__55390,this$,this__52659__auto__,x55380_56281))
,null,null));
});})(nested_reaches_QMARK_,G__55393,map__55391,map__55391__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__55381,_STAR_depth_STAR__orig_val__55382,_STAR_shared_STAR__orig_val__55383,_STAR_instrument_STAR__orig_val__55384,_STAR_parent_STAR__orig_val__55385,_STAR_reconciler_STAR__temp_val__55386,_STAR_depth_STAR__temp_val__55387,_STAR_shared_STAR__temp_val__55388,_STAR_instrument_STAR__temp_val__55389,_STAR_parent_STAR__temp_val__55390,this$,this__52659__auto__,x55380_56281))
;
return iter__4523__auto__(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.pr_str,com.wsscode.pathom.viz.index_explorer.attr_path_key_root,cljs.core.first),cljs.core.group_by(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(com.wsscode.pathom.viz.index_explorer.attr_path_key_root,cljs.core.first),attr_reach_via)));
})();
return (com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2(G__55393,G__55394) : com.wsscode.pathom.viz.ui.kit.panel.call(null,G__55393,G__55394));
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__55385;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__55384;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__55383;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__55382;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__55381;
}});})(x55380_56281))
;


com.wsscode.pathom.viz.index_explorer.AttributeInfoReachVia.prototype.constructor = com.wsscode.pathom.viz.index_explorer.AttributeInfoReachVia;

com.wsscode.pathom.viz.index_explorer.AttributeInfoReachVia.prototype.constructor.displayName = "com.wsscode.pathom.viz.index-explorer/AttributeInfoReachVia";

com.wsscode.pathom.viz.index_explorer.AttributeInfoReachVia.prototype.fulcro$isComponent = true;

var x55469_56318 = com.wsscode.pathom.viz.index_explorer.AttributeInfoReachVia;
x55469_56318.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x55469_56318.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x55469_56318){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x55469_56318))
;

x55469_56318.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x55469_56318.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x55469_56318){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via","com.wsscode.pathom.connect/attr-reach-via",-483841559)], null);
});})(x55469_56318))
;


var x55470_56319 = com.wsscode.pathom.viz.index_explorer.AttributeInfoReachVia.prototype;
x55470_56319.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x55470_56319.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x55470_56319){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x55470_56319))
;

x55470_56319.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x55470_56319.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x55470_56319){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via","com.wsscode.pathom.connect/attr-reach-via",-483841559)], null);
});})(x55470_56319))
;


com.wsscode.pathom.viz.index_explorer.AttributeInfoReachVia.cljs$lang$type = true;

com.wsscode.pathom.viz.index_explorer.AttributeInfoReachVia.cljs$lang$ctorStr = "com.wsscode.pathom.viz.index-explorer/AttributeInfoReachVia";

com.wsscode.pathom.viz.index_explorer.AttributeInfoReachVia.cljs$lang$ctorPrWriter = (function (this__53744__auto__,writer__53745__auto__,opt__53746__auto__){
return cljs.core._write(writer__53745__auto__,"com.wsscode.pathom.viz.index-explorer/AttributeInfoReachVia");
});
com.wsscode.pathom.viz.index_explorer.attribute_info_reach_via = fulcro.client.primitives.computed_factory.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.AttributeInfoReachVia);
if((typeof com !== 'undefined') && (typeof com.wsscode !== 'undefined') && (typeof com.wsscode.pathom !== 'undefined') && (typeof com.wsscode.pathom.viz !== 'undefined') && (typeof com.wsscode.pathom.viz.index_explorer !== 'undefined') && (typeof com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationParamIn !== 'undefined')){
} else {
/**
 * @constructor
 * @nocollapse
 */
com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationParamIn = (function com$wsscode$pathom$viz$index_explorer$AttributeInfoMutationParamIn(){
var this__53741__auto__ = this;
React.Component.apply(this__53741__auto__,arguments);

if((!((this__53741__auto__.initLocalState == null)))){
this__53741__auto__.state = this__53741__auto__.initLocalState();
} else {
this__53741__auto__.state = ({});
}

return this__53741__auto__;
});

goog.object.extend(com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationParamIn.prototype,React.Component.prototype,fulcro.client.primitives.default_component_prototype);
}

fulcro.client.primitives._register_component_BANG_(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","AttributeInfoMutationParamIn","com.wsscode.pathom.viz.index-explorer/AttributeInfoMutationParamIn",768684351),com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationParamIn);

var x55473_56320 = com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationParamIn.prototype;
x55473_56320.render = ((function (x55473_56320){
return (function (){
var this__52659__auto__ = this;
var this$ = this__52659__auto__;
var _STAR_reconciler_STAR__orig_val__55474 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__55475 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__55476 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__55477 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__55478 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__55479 = fulcro.client.primitives.get_reconciler(this__52659__auto__);
var _STAR_depth_STAR__temp_val__55480 = (fulcro.client.primitives.depth(this__52659__auto__) + (1));
var _STAR_shared_STAR__temp_val__55481 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__52659__auto__);
var _STAR_instrument_STAR__temp_val__55482 = fulcro.client.primitives.instrument(this__52659__auto__);
var _STAR_parent_STAR__temp_val__55483 = this__52659__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__55479;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__55480;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__55481;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__55482;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__55483;

try{var map__55484 = fulcro.client.primitives.props(this$);
var map__55484__$1 = (((((!((map__55484 == null))))?(((((map__55484.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55484.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55484):map__55484);
var attr_mutation_param_in = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55484__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attr-mutation-param-in","com.wsscode.pathom.connect/attr-mutation-param-in",-1474382671));
var computed = fulcro.client.primitives.get_computed.cljs$core$IFn$_invoke$arity$1(this$);
var G__55486 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","panel-title","com.wsscode.pathom.viz.ui.kit/panel-title",1529445284),"Mutation Param In",new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","panel-tag","com.wsscode.pathom.viz.ui.kit/panel-tag",144392508),cljs.core.count(attr_mutation_param_in)], null);
var G__55487 = (function (){var iter__4523__auto__ = ((function (G__55486,map__55484,map__55484__$1,attr_mutation_param_in,computed,_STAR_reconciler_STAR__orig_val__55474,_STAR_depth_STAR__orig_val__55475,_STAR_shared_STAR__orig_val__55476,_STAR_instrument_STAR__orig_val__55477,_STAR_parent_STAR__orig_val__55478,_STAR_reconciler_STAR__temp_val__55479,_STAR_depth_STAR__temp_val__55480,_STAR_shared_STAR__temp_val__55481,_STAR_instrument_STAR__temp_val__55482,_STAR_parent_STAR__temp_val__55483,this$,this__52659__auto__,x55473_56320){
return (function com$wsscode$pathom$viz$index_explorer$iter__55488(s__55489){
return (new cljs.core.LazySeq(null,((function (G__55486,map__55484,map__55484__$1,attr_mutation_param_in,computed,_STAR_reconciler_STAR__orig_val__55474,_STAR_depth_STAR__orig_val__55475,_STAR_shared_STAR__orig_val__55476,_STAR_instrument_STAR__orig_val__55477,_STAR_parent_STAR__orig_val__55478,_STAR_reconciler_STAR__temp_val__55479,_STAR_depth_STAR__temp_val__55480,_STAR_shared_STAR__temp_val__55481,_STAR_instrument_STAR__temp_val__55482,_STAR_parent_STAR__temp_val__55483,this$,this__52659__auto__,x55473_56320){
return (function (){
var s__55489__$1 = s__55489;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__55489__$1);
if(temp__5720__auto__){
var s__55489__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__55489__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__55489__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__55491 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__55490 = (0);
while(true){
if((i__55490 < size__4522__auto__)){
var sym = cljs.core._nth(c__4521__auto__,i__55490);
cljs.core.chunk_append(b__55491,com.wsscode.pathom.viz.index_explorer.mutation_link(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),sym], null),computed));

var G__56321 = (i__55490 + (1));
i__55490 = G__56321;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__55491),com$wsscode$pathom$viz$index_explorer$iter__55488(cljs.core.chunk_rest(s__55489__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__55491),null);
}
} else {
var sym = cljs.core.first(s__55489__$2);
return cljs.core.cons(com.wsscode.pathom.viz.index_explorer.mutation_link(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),sym], null),computed),com$wsscode$pathom$viz$index_explorer$iter__55488(cljs.core.rest(s__55489__$2)));
}
} else {
return null;
}
break;
}
});})(G__55486,map__55484,map__55484__$1,attr_mutation_param_in,computed,_STAR_reconciler_STAR__orig_val__55474,_STAR_depth_STAR__orig_val__55475,_STAR_shared_STAR__orig_val__55476,_STAR_instrument_STAR__orig_val__55477,_STAR_parent_STAR__orig_val__55478,_STAR_reconciler_STAR__temp_val__55479,_STAR_depth_STAR__temp_val__55480,_STAR_shared_STAR__temp_val__55481,_STAR_instrument_STAR__temp_val__55482,_STAR_parent_STAR__temp_val__55483,this$,this__52659__auto__,x55473_56320))
,null,null));
});})(G__55486,map__55484,map__55484__$1,attr_mutation_param_in,computed,_STAR_reconciler_STAR__orig_val__55474,_STAR_depth_STAR__orig_val__55475,_STAR_shared_STAR__orig_val__55476,_STAR_instrument_STAR__orig_val__55477,_STAR_parent_STAR__orig_val__55478,_STAR_reconciler_STAR__temp_val__55479,_STAR_depth_STAR__temp_val__55480,_STAR_shared_STAR__temp_val__55481,_STAR_instrument_STAR__temp_val__55482,_STAR_parent_STAR__temp_val__55483,this$,this__52659__auto__,x55473_56320))
;
return iter__4523__auto__(cljs.core.sort.cljs$core$IFn$_invoke$arity$1(attr_mutation_param_in));
})();
return (com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2(G__55486,G__55487) : com.wsscode.pathom.viz.ui.kit.panel.call(null,G__55486,G__55487));
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__55478;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__55477;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__55476;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__55475;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__55474;
}});})(x55473_56320))
;


com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationParamIn.prototype.constructor = com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationParamIn;

com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationParamIn.prototype.constructor.displayName = "com.wsscode.pathom.viz.index-explorer/AttributeInfoMutationParamIn";

com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationParamIn.prototype.fulcro$isComponent = true;

var x55492_56322 = com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationParamIn;
x55492_56322.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x55492_56322.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x55492_56322){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x55492_56322))
;

x55492_56322.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x55492_56322.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x55492_56322){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-mutation-param-in","com.wsscode.pathom.connect/attr-mutation-param-in",-1474382671)], null);
});})(x55492_56322))
;


var x55493_56323 = com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationParamIn.prototype;
x55493_56323.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x55493_56323.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x55493_56323){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x55493_56323))
;

x55493_56323.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x55493_56323.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x55493_56323){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-mutation-param-in","com.wsscode.pathom.connect/attr-mutation-param-in",-1474382671)], null);
});})(x55493_56323))
;


com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationParamIn.cljs$lang$type = true;

com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationParamIn.cljs$lang$ctorStr = "com.wsscode.pathom.viz.index-explorer/AttributeInfoMutationParamIn";

com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationParamIn.cljs$lang$ctorPrWriter = (function (this__53744__auto__,writer__53745__auto__,opt__53746__auto__){
return cljs.core._write(writer__53745__auto__,"com.wsscode.pathom.viz.index-explorer/AttributeInfoMutationParamIn");
});
com.wsscode.pathom.viz.index_explorer.attribute_info_mutation_param_in = fulcro.client.primitives.computed_factory.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationParamIn);
if((typeof com !== 'undefined') && (typeof com.wsscode !== 'undefined') && (typeof com.wsscode.pathom !== 'undefined') && (typeof com.wsscode.pathom.viz !== 'undefined') && (typeof com.wsscode.pathom.viz.index_explorer !== 'undefined') && (typeof com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationOutputIn !== 'undefined')){
} else {
/**
 * @constructor
 * @nocollapse
 */
com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationOutputIn = (function com$wsscode$pathom$viz$index_explorer$AttributeInfoMutationOutputIn(){
var this__53741__auto__ = this;
React.Component.apply(this__53741__auto__,arguments);

if((!((this__53741__auto__.initLocalState == null)))){
this__53741__auto__.state = this__53741__auto__.initLocalState();
} else {
this__53741__auto__.state = ({});
}

return this__53741__auto__;
});

goog.object.extend(com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationOutputIn.prototype,React.Component.prototype,fulcro.client.primitives.default_component_prototype);
}

fulcro.client.primitives._register_component_BANG_(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","AttributeInfoMutationOutputIn","com.wsscode.pathom.viz.index-explorer/AttributeInfoMutationOutputIn",304871094),com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationOutputIn);

var x55496_56324 = com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationOutputIn.prototype;
x55496_56324.render = ((function (x55496_56324){
return (function (){
var this__52659__auto__ = this;
var this$ = this__52659__auto__;
var _STAR_reconciler_STAR__orig_val__55497 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__55498 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__55499 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__55500 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__55501 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__55502 = fulcro.client.primitives.get_reconciler(this__52659__auto__);
var _STAR_depth_STAR__temp_val__55503 = (fulcro.client.primitives.depth(this__52659__auto__) + (1));
var _STAR_shared_STAR__temp_val__55504 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__52659__auto__);
var _STAR_instrument_STAR__temp_val__55505 = fulcro.client.primitives.instrument(this__52659__auto__);
var _STAR_parent_STAR__temp_val__55506 = this__52659__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__55502;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__55503;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__55504;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__55505;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__55506;

try{var map__55507 = fulcro.client.primitives.props(this$);
var map__55507__$1 = (((((!((map__55507 == null))))?(((((map__55507.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55507.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55507):map__55507);
var attr_mutation_output_in = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55507__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attr-mutation-output-in","com.wsscode.pathom.connect/attr-mutation-output-in",1122448739));
var computed = fulcro.client.primitives.get_computed.cljs$core$IFn$_invoke$arity$1(this$);
var G__55509 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","panel-title","com.wsscode.pathom.viz.ui.kit/panel-title",1529445284),"Mutation Output In",new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","panel-tag","com.wsscode.pathom.viz.ui.kit/panel-tag",144392508),cljs.core.count(attr_mutation_output_in)], null);
var G__55510 = (function (){var iter__4523__auto__ = ((function (G__55509,map__55507,map__55507__$1,attr_mutation_output_in,computed,_STAR_reconciler_STAR__orig_val__55497,_STAR_depth_STAR__orig_val__55498,_STAR_shared_STAR__orig_val__55499,_STAR_instrument_STAR__orig_val__55500,_STAR_parent_STAR__orig_val__55501,_STAR_reconciler_STAR__temp_val__55502,_STAR_depth_STAR__temp_val__55503,_STAR_shared_STAR__temp_val__55504,_STAR_instrument_STAR__temp_val__55505,_STAR_parent_STAR__temp_val__55506,this$,this__52659__auto__,x55496_56324){
return (function com$wsscode$pathom$viz$index_explorer$iter__55511(s__55512){
return (new cljs.core.LazySeq(null,((function (G__55509,map__55507,map__55507__$1,attr_mutation_output_in,computed,_STAR_reconciler_STAR__orig_val__55497,_STAR_depth_STAR__orig_val__55498,_STAR_shared_STAR__orig_val__55499,_STAR_instrument_STAR__orig_val__55500,_STAR_parent_STAR__orig_val__55501,_STAR_reconciler_STAR__temp_val__55502,_STAR_depth_STAR__temp_val__55503,_STAR_shared_STAR__temp_val__55504,_STAR_instrument_STAR__temp_val__55505,_STAR_parent_STAR__temp_val__55506,this$,this__52659__auto__,x55496_56324){
return (function (){
var s__55512__$1 = s__55512;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__55512__$1);
if(temp__5720__auto__){
var s__55512__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__55512__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__55512__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__55514 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__55513 = (0);
while(true){
if((i__55513 < size__4522__auto__)){
var sym = cljs.core._nth(c__4521__auto__,i__55513);
cljs.core.chunk_append(b__55514,com.wsscode.pathom.viz.index_explorer.mutation_link(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),sym], null),computed));

var G__56325 = (i__55513 + (1));
i__55513 = G__56325;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__55514),com$wsscode$pathom$viz$index_explorer$iter__55511(cljs.core.chunk_rest(s__55512__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__55514),null);
}
} else {
var sym = cljs.core.first(s__55512__$2);
return cljs.core.cons(com.wsscode.pathom.viz.index_explorer.mutation_link(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),sym], null),computed),com$wsscode$pathom$viz$index_explorer$iter__55511(cljs.core.rest(s__55512__$2)));
}
} else {
return null;
}
break;
}
});})(G__55509,map__55507,map__55507__$1,attr_mutation_output_in,computed,_STAR_reconciler_STAR__orig_val__55497,_STAR_depth_STAR__orig_val__55498,_STAR_shared_STAR__orig_val__55499,_STAR_instrument_STAR__orig_val__55500,_STAR_parent_STAR__orig_val__55501,_STAR_reconciler_STAR__temp_val__55502,_STAR_depth_STAR__temp_val__55503,_STAR_shared_STAR__temp_val__55504,_STAR_instrument_STAR__temp_val__55505,_STAR_parent_STAR__temp_val__55506,this$,this__52659__auto__,x55496_56324))
,null,null));
});})(G__55509,map__55507,map__55507__$1,attr_mutation_output_in,computed,_STAR_reconciler_STAR__orig_val__55497,_STAR_depth_STAR__orig_val__55498,_STAR_shared_STAR__orig_val__55499,_STAR_instrument_STAR__orig_val__55500,_STAR_parent_STAR__orig_val__55501,_STAR_reconciler_STAR__temp_val__55502,_STAR_depth_STAR__temp_val__55503,_STAR_shared_STAR__temp_val__55504,_STAR_instrument_STAR__temp_val__55505,_STAR_parent_STAR__temp_val__55506,this$,this__52659__auto__,x55496_56324))
;
return iter__4523__auto__(cljs.core.sort.cljs$core$IFn$_invoke$arity$1(attr_mutation_output_in));
})();
return (com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2(G__55509,G__55510) : com.wsscode.pathom.viz.ui.kit.panel.call(null,G__55509,G__55510));
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__55501;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__55500;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__55499;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__55498;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__55497;
}});})(x55496_56324))
;


com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationOutputIn.prototype.constructor = com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationOutputIn;

com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationOutputIn.prototype.constructor.displayName = "com.wsscode.pathom.viz.index-explorer/AttributeInfoMutationOutputIn";

com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationOutputIn.prototype.fulcro$isComponent = true;

var x55515_56326 = com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationOutputIn;
x55515_56326.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x55515_56326.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x55515_56326){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x55515_56326))
;

x55515_56326.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x55515_56326.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x55515_56326){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-mutation-output-in","com.wsscode.pathom.connect/attr-mutation-output-in",1122448739)], null);
});})(x55515_56326))
;


var x55516_56327 = com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationOutputIn.prototype;
x55516_56327.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x55516_56327.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x55516_56327){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x55516_56327))
;

x55516_56327.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x55516_56327.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x55516_56327){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-mutation-output-in","com.wsscode.pathom.connect/attr-mutation-output-in",1122448739)], null);
});})(x55516_56327))
;


com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationOutputIn.cljs$lang$type = true;

com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationOutputIn.cljs$lang$ctorStr = "com.wsscode.pathom.viz.index-explorer/AttributeInfoMutationOutputIn";

com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationOutputIn.cljs$lang$ctorPrWriter = (function (this__53744__auto__,writer__53745__auto__,opt__53746__auto__){
return cljs.core._write(writer__53745__auto__,"com.wsscode.pathom.viz.index-explorer/AttributeInfoMutationOutputIn");
});
com.wsscode.pathom.viz.index_explorer.attribute_info_mutation_output_in = fulcro.client.primitives.computed_factory.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationOutputIn);
if((typeof com !== 'undefined') && (typeof com.wsscode !== 'undefined') && (typeof com.wsscode.pathom !== 'undefined') && (typeof com.wsscode.pathom.viz !== 'undefined') && (typeof com.wsscode.pathom.viz.index_explorer !== 'undefined') && (typeof com.wsscode.pathom.viz.index_explorer.ExamplesPanel !== 'undefined')){
} else {
/**
 * @constructor
 * @nocollapse
 */
com.wsscode.pathom.viz.index_explorer.ExamplesPanel = (function com$wsscode$pathom$viz$index_explorer$ExamplesPanel(){
var this__53741__auto__ = this;
React.Component.apply(this__53741__auto__,arguments);

if((!((this__53741__auto__.initLocalState == null)))){
this__53741__auto__.state = this__53741__auto__.initLocalState();
} else {
this__53741__auto__.state = ({});
}

return this__53741__auto__;
});

goog.object.extend(com.wsscode.pathom.viz.index_explorer.ExamplesPanel.prototype,React.Component.prototype,fulcro.client.primitives.default_component_prototype);
}

fulcro.client.primitives._register_component_BANG_(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","ExamplesPanel","com.wsscode.pathom.viz.index-explorer/ExamplesPanel",846657103),com.wsscode.pathom.viz.index_explorer.ExamplesPanel);

var x55519_56328 = com.wsscode.pathom.viz.index_explorer.ExamplesPanel.prototype;
x55519_56328.render = ((function (x55519_56328){
return (function (){
var this__52659__auto__ = this;
var this$ = this__52659__auto__;
var _STAR_reconciler_STAR__orig_val__55520 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__55521 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__55522 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__55523 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__55524 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__55525 = fulcro.client.primitives.get_reconciler(this__52659__auto__);
var _STAR_depth_STAR__temp_val__55526 = (fulcro.client.primitives.depth(this__52659__auto__) + (1));
var _STAR_shared_STAR__temp_val__55527 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__52659__auto__);
var _STAR_instrument_STAR__temp_val__55528 = fulcro.client.primitives.instrument(this__52659__auto__);
var _STAR_parent_STAR__temp_val__55529 = this__52659__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__55525;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__55526;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__55527;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__55528;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__55529;

try{var map__55530 = fulcro.client.primitives.props(this$);
var map__55530__$1 = (((((!((map__55530 == null))))?(((((map__55530.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55530.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55530):map__55530);
var attribute = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55530__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075));
var G__55532 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","panel-title","com.wsscode.pathom.viz.ui.kit/panel-title",1529445284),(function (){var G__55534 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"classes","classes",2037804510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".center",".center",-1815728518)], null)], null);
var G__55535 = fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Examples"], 0));
var G__55536 = fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.wsscode.pathom.viz.ui.kit.gc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".flex",".flex",-73425686)], 0))], 0));
var G__55537 = (function (){var G__55538 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (G__55534,G__55535,G__55536,map__55530,map__55530__$1,attribute,_STAR_reconciler_STAR__orig_val__55520,_STAR_depth_STAR__orig_val__55521,_STAR_shared_STAR__orig_val__55522,_STAR_instrument_STAR__orig_val__55523,_STAR_parent_STAR__orig_val__55524,_STAR_reconciler_STAR__temp_val__55525,_STAR_depth_STAR__temp_val__55526,_STAR_shared_STAR__temp_val__55527,_STAR_instrument_STAR__temp_val__55528,_STAR_parent_STAR__temp_val__55529,this$,this__52659__auto__,x55519_56328){
return (function (){
return fulcro.client.primitives.set_state_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"seed","seed",68613327),cljs.core.rand.cljs$core$IFn$_invoke$arity$0()], null));
});})(G__55534,G__55535,G__55536,map__55530,map__55530__$1,attribute,_STAR_reconciler_STAR__orig_val__55520,_STAR_depth_STAR__orig_val__55521,_STAR_shared_STAR__orig_val__55522,_STAR_instrument_STAR__orig_val__55523,_STAR_parent_STAR__orig_val__55524,_STAR_reconciler_STAR__temp_val__55525,_STAR_depth_STAR__temp_val__55526,_STAR_shared_STAR__temp_val__55527,_STAR_instrument_STAR__temp_val__55528,_STAR_parent_STAR__temp_val__55529,this$,this__52659__auto__,x55519_56328))
], null);
var G__55539 = fulcro.client.localized_dom.i.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"classes","classes",2037804510),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["fa","fa-sync-alt"], null)], null)], 0));
return (com.wsscode.pathom.viz.ui.kit.button.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.button.cljs$core$IFn$_invoke$arity$2(G__55538,G__55539) : com.wsscode.pathom.viz.ui.kit.button.call(null,G__55538,G__55539));
})();
return (com.wsscode.pathom.viz.ui.kit.row.cljs$core$IFn$_invoke$arity$4 ? com.wsscode.pathom.viz.ui.kit.row.cljs$core$IFn$_invoke$arity$4(G__55534,G__55535,G__55536,G__55537) : com.wsscode.pathom.viz.ui.kit.row.call(null,G__55534,G__55535,G__55536,G__55537));
})()], null);
var G__55533 = fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".examples",".examples",-775726891),(function (){try{var samples = cljs.core.vec(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(clojure.test.check.generators.sample.cljs$core$IFn$_invoke$arity$1(cljs.spec.alpha.gen.cljs$core$IFn$_invoke$arity$1(attribute))));
var samples__$1 = (function (){try{return cljs.core.sort.cljs$core$IFn$_invoke$arity$1(samples);
}catch (e55541){var _ = e55541;
return samples;
}})();
var iter__4523__auto__ = ((function (samples,samples__$1,G__55532,map__55530,map__55530__$1,attribute,_STAR_reconciler_STAR__orig_val__55520,_STAR_depth_STAR__orig_val__55521,_STAR_shared_STAR__orig_val__55522,_STAR_instrument_STAR__orig_val__55523,_STAR_parent_STAR__orig_val__55524,_STAR_reconciler_STAR__temp_val__55525,_STAR_depth_STAR__temp_val__55526,_STAR_shared_STAR__temp_val__55527,_STAR_instrument_STAR__temp_val__55528,_STAR_parent_STAR__temp_val__55529,this$,this__52659__auto__,x55519_56328){
return (function com$wsscode$pathom$viz$index_explorer$iter__55542(s__55543){
return (new cljs.core.LazySeq(null,((function (samples,samples__$1,G__55532,map__55530,map__55530__$1,attribute,_STAR_reconciler_STAR__orig_val__55520,_STAR_depth_STAR__orig_val__55521,_STAR_shared_STAR__orig_val__55522,_STAR_instrument_STAR__orig_val__55523,_STAR_parent_STAR__orig_val__55524,_STAR_reconciler_STAR__temp_val__55525,_STAR_depth_STAR__temp_val__55526,_STAR_shared_STAR__temp_val__55527,_STAR_instrument_STAR__temp_val__55528,_STAR_parent_STAR__temp_val__55529,this$,this__52659__auto__,x55519_56328){
return (function (){
var s__55543__$1 = s__55543;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__55543__$1);
if(temp__5720__auto__){
var s__55543__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__55543__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__55543__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__55545 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__55544 = (0);
while(true){
if((i__55544 < size__4522__auto__)){
var vec__55546 = cljs.core._nth(c__4521__auto__,i__55544);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55546,(0),null);
var example = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55546,(1),null);
cljs.core.chunk_append(b__55545,fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["example-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join('')], null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([example], 0))], 0)));

var G__56329 = (i__55544 + (1));
i__55544 = G__56329;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__55545),com$wsscode$pathom$viz$index_explorer$iter__55542(cljs.core.chunk_rest(s__55543__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__55545),null);
}
} else {
var vec__55549 = cljs.core.first(s__55543__$2);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55549,(0),null);
var example = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55549,(1),null);
return cljs.core.cons(fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["example-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join('')], null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([example], 0))], 0)),com$wsscode$pathom$viz$index_explorer$iter__55542(cljs.core.rest(s__55543__$2)));
}
} else {
return null;
}
break;
}
});})(samples,samples__$1,G__55532,map__55530,map__55530__$1,attribute,_STAR_reconciler_STAR__orig_val__55520,_STAR_depth_STAR__orig_val__55521,_STAR_shared_STAR__orig_val__55522,_STAR_instrument_STAR__orig_val__55523,_STAR_parent_STAR__orig_val__55524,_STAR_reconciler_STAR__temp_val__55525,_STAR_depth_STAR__temp_val__55526,_STAR_shared_STAR__temp_val__55527,_STAR_instrument_STAR__temp_val__55528,_STAR_parent_STAR__temp_val__55529,this$,this__52659__auto__,x55519_56328))
,null,null));
});})(samples,samples__$1,G__55532,map__55530,map__55530__$1,attribute,_STAR_reconciler_STAR__orig_val__55520,_STAR_depth_STAR__orig_val__55521,_STAR_shared_STAR__orig_val__55522,_STAR_instrument_STAR__orig_val__55523,_STAR_parent_STAR__orig_val__55524,_STAR_reconciler_STAR__temp_val__55525,_STAR_depth_STAR__temp_val__55526,_STAR_shared_STAR__temp_val__55527,_STAR_instrument_STAR__temp_val__55528,_STAR_parent_STAR__temp_val__55529,this$,this__52659__auto__,x55519_56328))
;
return iter__4523__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.range.cljs$core$IFn$_invoke$arity$0(),samples__$1));
}catch (e55540){var ex = e55540;
return fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error generating samples:",fulcro.client.localized_dom.pre.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".error",".error",115475668),cljs.core.ex_message(ex)], 0))], 0));
}})()], 0));
return (com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2(G__55532,G__55533) : com.wsscode.pathom.viz.ui.kit.panel.call(null,G__55532,G__55533));
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__55524;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__55523;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__55522;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__55521;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__55520;
}});})(x55519_56328))
;


com.wsscode.pathom.viz.index_explorer.ExamplesPanel.prototype.constructor = com.wsscode.pathom.viz.index_explorer.ExamplesPanel;

com.wsscode.pathom.viz.index_explorer.ExamplesPanel.prototype.constructor.displayName = "com.wsscode.pathom.viz.index-explorer/ExamplesPanel";

com.wsscode.pathom.viz.index_explorer.ExamplesPanel.prototype.fulcro$isComponent = true;

var x55552_56330 = com.wsscode.pathom.viz.index_explorer.ExamplesPanel;
x55552_56330.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x55552_56330.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x55552_56330){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".examples",".examples",-775726891),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-family","font-family",-667419874),com.wsscode.pathom.viz.ui.kit.font_code], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".error",".error",115475668),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#f44336"], null)], null)], null);
});})(x55552_56330))
;

x55552_56330.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x55552_56330){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x55552_56330))
;


var x55553_56331 = com.wsscode.pathom.viz.index_explorer.ExamplesPanel.prototype;
x55553_56331.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x55553_56331.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x55553_56331){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".examples",".examples",-775726891),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-family","font-family",-667419874),com.wsscode.pathom.viz.ui.kit.font_code], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".error",".error",115475668),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#f44336"], null)], null)], null);
});})(x55553_56331))
;

x55553_56331.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x55553_56331){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x55553_56331))
;


com.wsscode.pathom.viz.index_explorer.ExamplesPanel.cljs$lang$type = true;

com.wsscode.pathom.viz.index_explorer.ExamplesPanel.cljs$lang$ctorStr = "com.wsscode.pathom.viz.index-explorer/ExamplesPanel";

com.wsscode.pathom.viz.index_explorer.ExamplesPanel.cljs$lang$ctorPrWriter = (function (this__53744__auto__,writer__53745__auto__,opt__53746__auto__){
return cljs.core._write(writer__53745__auto__,"com.wsscode.pathom.viz.index-explorer/ExamplesPanel");
});
com.wsscode.pathom.viz.index_explorer.examples_panel = fulcro.client.primitives.computed_factory.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.ExamplesPanel);
if((typeof com !== 'undefined') && (typeof com.wsscode !== 'undefined') && (typeof com.wsscode.pathom !== 'undefined') && (typeof com.wsscode.pathom.viz !== 'undefined') && (typeof com.wsscode.pathom.viz.index_explorer !== 'undefined') && (typeof com.wsscode.pathom.viz.index_explorer.AttributeGraphPanel !== 'undefined')){
} else {
/**
 * @constructor
 * @nocollapse
 */
com.wsscode.pathom.viz.index_explorer.AttributeGraphPanel = (function com$wsscode$pathom$viz$index_explorer$AttributeGraphPanel(){
var this__53741__auto__ = this;
React.Component.apply(this__53741__auto__,arguments);

if((!((this__53741__auto__.initLocalState == null)))){
this__53741__auto__.state = this__53741__auto__.initLocalState();
} else {
this__53741__auto__.state = ({});
}

return this__53741__auto__;
});

goog.object.extend(com.wsscode.pathom.viz.index_explorer.AttributeGraphPanel.prototype,React.Component.prototype,fulcro.client.primitives.default_component_prototype);
}

fulcro.client.primitives._register_component_BANG_(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","AttributeGraphPanel","com.wsscode.pathom.viz.index-explorer/AttributeGraphPanel",-658371264),com.wsscode.pathom.viz.index_explorer.AttributeGraphPanel);

var x55558_56332 = com.wsscode.pathom.viz.index_explorer.AttributeGraphPanel.prototype;
x55558_56332.render = ((function (x55558_56332){
return (function (){
var this__52659__auto__ = this;
var this$ = this__52659__auto__;
var _STAR_reconciler_STAR__orig_val__55559 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__55560 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__55561 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__55562 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__55563 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__55564 = fulcro.client.primitives.get_reconciler(this__52659__auto__);
var _STAR_depth_STAR__temp_val__55565 = (fulcro.client.primitives.depth(this__52659__auto__) + (1));
var _STAR_shared_STAR__temp_val__55566 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__52659__auto__);
var _STAR_instrument_STAR__temp_val__55567 = fulcro.client.primitives.instrument(this__52659__auto__);
var _STAR_parent_STAR__temp_val__55568 = this__52659__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__55564;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__55565;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__55566;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__55567;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__55568;

try{var map__55569 = fulcro.client.primitives.props(this$);
var map__55569__$1 = (((((!((map__55569 == null))))?(((((map__55569.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55569.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55569):map__55569);
var attribute = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55569__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075));
var attr_depth = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55569__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-depth","com.wsscode.pathom.viz.index-explorer/attr-depth",-1327711242));
var direct_reaches_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55569__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","direct-reaches?","com.wsscode.pathom.viz.index-explorer/direct-reaches?",-1036048994));
var nested_reaches_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55569__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","nested-reaches?","com.wsscode.pathom.viz.index-explorer/nested-reaches?",-22429448));
var direct_provides_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55569__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","direct-provides?","com.wsscode.pathom.viz.index-explorer/direct-provides?",223892052));
var nested_provides_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55569__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","nested-provides?","com.wsscode.pathom.viz.index-explorer/nested-provides?",-1296758362));
var interconnections_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55569__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","interconnections?","com.wsscode.pathom.viz.index-explorer/interconnections?",-1723481228));
var map__55570 = fulcro.client.primitives.get_computed.cljs$core$IFn$_invoke$arity$1(this$);
var map__55570__$1 = (((((!((map__55570 == null))))?(((((map__55570.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55570.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55570):map__55570);
var on_select_attribute = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55570__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","on-select-attribute","com.wsscode.pathom.viz.index-explorer/on-select-attribute",2006419034));
var attributes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55570__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attributes","com.wsscode.pathom.viz.index-explorer/attributes",-67264281));
var graph_comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55570__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","graph-comm","com.wsscode.pathom.viz.index-explorer/graph-comm",-735750087));
var G__55573 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","panel-title","com.wsscode.pathom.viz.ui.kit/panel-title",1529445284),(function (){var G__55575 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"classes","classes",2037804510),com.wsscode.pathom.viz.ui.kit.ccss.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".graph-options",".graph-options",1009499042)], 0))], null);
var G__55576 = (function (){var G__55581 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"classes","classes",2037804510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".center",".center",-1815728518)], null)], null);
var G__55582 = fulcro.client.localized_dom.label.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Depth"], 0));
var G__55583 = (function (){var G__55584 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"min","min",444991522),(1),new cljs.core.Keyword(null,"value","value",305978217),attr_depth,new cljs.core.Keyword(null,"onChange","onChange",-312891301),((function (G__55581,G__55582,G__55575,map__55569,map__55569__$1,attribute,attr_depth,direct_reaches_QMARK_,nested_reaches_QMARK_,direct_provides_QMARK_,nested_provides_QMARK_,interconnections_QMARK_,map__55570,map__55570__$1,on_select_attribute,attributes,graph_comm,_STAR_reconciler_STAR__orig_val__55559,_STAR_depth_STAR__orig_val__55560,_STAR_shared_STAR__orig_val__55561,_STAR_instrument_STAR__orig_val__55562,_STAR_parent_STAR__orig_val__55563,_STAR_reconciler_STAR__temp_val__55564,_STAR_depth_STAR__temp_val__55565,_STAR_shared_STAR__temp_val__55566,_STAR_instrument_STAR__temp_val__55567,_STAR_parent_STAR__temp_val__55568,this$,this__52659__auto__,x55558_56332){
return (function (p1__55555_SHARP_,p2__55554_SHARP_){
return fulcro.client.mutations.set_value_BANG_(this$,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-depth","com.wsscode.pathom.viz.index-explorer/attr-depth",-1327711242),p2__55554_SHARP_);
});})(G__55581,G__55582,G__55575,map__55569,map__55569__$1,attribute,attr_depth,direct_reaches_QMARK_,nested_reaches_QMARK_,direct_provides_QMARK_,nested_provides_QMARK_,interconnections_QMARK_,map__55570,map__55570__$1,on_select_attribute,attributes,graph_comm,_STAR_reconciler_STAR__orig_val__55559,_STAR_depth_STAR__orig_val__55560,_STAR_shared_STAR__orig_val__55561,_STAR_instrument_STAR__orig_val__55562,_STAR_parent_STAR__orig_val__55563,_STAR_reconciler_STAR__temp_val__55564,_STAR_depth_STAR__temp_val__55565,_STAR_shared_STAR__temp_val__55566,_STAR_instrument_STAR__temp_val__55567,_STAR_parent_STAR__temp_val__55568,this$,this__52659__auto__,x55558_56332))
], null);
return (com.wsscode.pathom.viz.ui.kit.number_input.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom.viz.ui.kit.number_input.cljs$core$IFn$_invoke$arity$1(G__55584) : com.wsscode.pathom.viz.ui.kit.number_input.call(null,G__55584));
})();
return (com.wsscode.pathom.viz.ui.kit.row.cljs$core$IFn$_invoke$arity$3 ? com.wsscode.pathom.viz.ui.kit.row.cljs$core$IFn$_invoke$arity$3(G__55581,G__55582,G__55583) : com.wsscode.pathom.viz.ui.kit.row.call(null,G__55581,G__55582,G__55583));
})();
var G__55577 = (function (){var G__55585 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","active?","com.wsscode.pathom.viz.ui.kit/active?",-2040404697),direct_reaches_QMARK_,new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (G__55575,G__55576,map__55569,map__55569__$1,attribute,attr_depth,direct_reaches_QMARK_,nested_reaches_QMARK_,direct_provides_QMARK_,nested_provides_QMARK_,interconnections_QMARK_,map__55570,map__55570__$1,on_select_attribute,attributes,graph_comm,_STAR_reconciler_STAR__orig_val__55559,_STAR_depth_STAR__orig_val__55560,_STAR_shared_STAR__orig_val__55561,_STAR_instrument_STAR__orig_val__55562,_STAR_parent_STAR__orig_val__55563,_STAR_reconciler_STAR__temp_val__55564,_STAR_depth_STAR__temp_val__55565,_STAR_shared_STAR__temp_val__55566,_STAR_instrument_STAR__temp_val__55567,_STAR_parent_STAR__temp_val__55568,this$,this__52659__auto__,x55558_56332){
return (function (){
return fulcro.client.mutations.set_value_BANG_(this$,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","direct-reaches?","com.wsscode.pathom.viz.index-explorer/direct-reaches?",-1036048994),cljs.core.not(direct_reaches_QMARK_));
});})(G__55575,G__55576,map__55569,map__55569__$1,attribute,attr_depth,direct_reaches_QMARK_,nested_reaches_QMARK_,direct_provides_QMARK_,nested_provides_QMARK_,interconnections_QMARK_,map__55570,map__55570__$1,on_select_attribute,attributes,graph_comm,_STAR_reconciler_STAR__orig_val__55559,_STAR_depth_STAR__orig_val__55560,_STAR_shared_STAR__orig_val__55561,_STAR_instrument_STAR__orig_val__55562,_STAR_parent_STAR__orig_val__55563,_STAR_reconciler_STAR__temp_val__55564,_STAR_depth_STAR__temp_val__55565,_STAR_shared_STAR__temp_val__55566,_STAR_instrument_STAR__temp_val__55567,_STAR_parent_STAR__temp_val__55568,this$,this__52659__auto__,x55558_56332))
], null);
var G__55586 = "Direct inputs";
return (com.wsscode.pathom.viz.ui.kit.toggle_action.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.toggle_action.cljs$core$IFn$_invoke$arity$2(G__55585,G__55586) : com.wsscode.pathom.viz.ui.kit.toggle_action.call(null,G__55585,G__55586));
})();
var G__55578 = (function (){var G__55587 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","active?","com.wsscode.pathom.viz.ui.kit/active?",-2040404697),nested_reaches_QMARK_,new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (G__55575,G__55576,G__55577,map__55569,map__55569__$1,attribute,attr_depth,direct_reaches_QMARK_,nested_reaches_QMARK_,direct_provides_QMARK_,nested_provides_QMARK_,interconnections_QMARK_,map__55570,map__55570__$1,on_select_attribute,attributes,graph_comm,_STAR_reconciler_STAR__orig_val__55559,_STAR_depth_STAR__orig_val__55560,_STAR_shared_STAR__orig_val__55561,_STAR_instrument_STAR__orig_val__55562,_STAR_parent_STAR__orig_val__55563,_STAR_reconciler_STAR__temp_val__55564,_STAR_depth_STAR__temp_val__55565,_STAR_shared_STAR__temp_val__55566,_STAR_instrument_STAR__temp_val__55567,_STAR_parent_STAR__temp_val__55568,this$,this__52659__auto__,x55558_56332){
return (function (){
return fulcro.client.mutations.set_value_BANG_(this$,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","nested-reaches?","com.wsscode.pathom.viz.index-explorer/nested-reaches?",-22429448),cljs.core.not(nested_reaches_QMARK_));
});})(G__55575,G__55576,G__55577,map__55569,map__55569__$1,attribute,attr_depth,direct_reaches_QMARK_,nested_reaches_QMARK_,direct_provides_QMARK_,nested_provides_QMARK_,interconnections_QMARK_,map__55570,map__55570__$1,on_select_attribute,attributes,graph_comm,_STAR_reconciler_STAR__orig_val__55559,_STAR_depth_STAR__orig_val__55560,_STAR_shared_STAR__orig_val__55561,_STAR_instrument_STAR__orig_val__55562,_STAR_parent_STAR__orig_val__55563,_STAR_reconciler_STAR__temp_val__55564,_STAR_depth_STAR__temp_val__55565,_STAR_shared_STAR__temp_val__55566,_STAR_instrument_STAR__temp_val__55567,_STAR_parent_STAR__temp_val__55568,this$,this__52659__auto__,x55558_56332))
], null);
var G__55588 = "Nested inputs";
return (com.wsscode.pathom.viz.ui.kit.toggle_action.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.toggle_action.cljs$core$IFn$_invoke$arity$2(G__55587,G__55588) : com.wsscode.pathom.viz.ui.kit.toggle_action.call(null,G__55587,G__55588));
})();
var G__55579 = (function (){var G__55589 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","active?","com.wsscode.pathom.viz.ui.kit/active?",-2040404697),direct_provides_QMARK_,new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (G__55575,G__55576,G__55577,G__55578,map__55569,map__55569__$1,attribute,attr_depth,direct_reaches_QMARK_,nested_reaches_QMARK_,direct_provides_QMARK_,nested_provides_QMARK_,interconnections_QMARK_,map__55570,map__55570__$1,on_select_attribute,attributes,graph_comm,_STAR_reconciler_STAR__orig_val__55559,_STAR_depth_STAR__orig_val__55560,_STAR_shared_STAR__orig_val__55561,_STAR_instrument_STAR__orig_val__55562,_STAR_parent_STAR__orig_val__55563,_STAR_reconciler_STAR__temp_val__55564,_STAR_depth_STAR__temp_val__55565,_STAR_shared_STAR__temp_val__55566,_STAR_instrument_STAR__temp_val__55567,_STAR_parent_STAR__temp_val__55568,this$,this__52659__auto__,x55558_56332){
return (function (){
return fulcro.client.mutations.set_value_BANG_(this$,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","direct-provides?","com.wsscode.pathom.viz.index-explorer/direct-provides?",223892052),cljs.core.not(direct_provides_QMARK_));
});})(G__55575,G__55576,G__55577,G__55578,map__55569,map__55569__$1,attribute,attr_depth,direct_reaches_QMARK_,nested_reaches_QMARK_,direct_provides_QMARK_,nested_provides_QMARK_,interconnections_QMARK_,map__55570,map__55570__$1,on_select_attribute,attributes,graph_comm,_STAR_reconciler_STAR__orig_val__55559,_STAR_depth_STAR__orig_val__55560,_STAR_shared_STAR__orig_val__55561,_STAR_instrument_STAR__orig_val__55562,_STAR_parent_STAR__orig_val__55563,_STAR_reconciler_STAR__temp_val__55564,_STAR_depth_STAR__temp_val__55565,_STAR_shared_STAR__temp_val__55566,_STAR_instrument_STAR__temp_val__55567,_STAR_parent_STAR__temp_val__55568,this$,this__52659__auto__,x55558_56332))
], null);
var G__55590 = "Direct outputs";
return (com.wsscode.pathom.viz.ui.kit.toggle_action.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.toggle_action.cljs$core$IFn$_invoke$arity$2(G__55589,G__55590) : com.wsscode.pathom.viz.ui.kit.toggle_action.call(null,G__55589,G__55590));
})();
var G__55580 = (function (){var G__55591 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","active?","com.wsscode.pathom.viz.ui.kit/active?",-2040404697),nested_provides_QMARK_,new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (G__55575,G__55576,G__55577,G__55578,G__55579,map__55569,map__55569__$1,attribute,attr_depth,direct_reaches_QMARK_,nested_reaches_QMARK_,direct_provides_QMARK_,nested_provides_QMARK_,interconnections_QMARK_,map__55570,map__55570__$1,on_select_attribute,attributes,graph_comm,_STAR_reconciler_STAR__orig_val__55559,_STAR_depth_STAR__orig_val__55560,_STAR_shared_STAR__orig_val__55561,_STAR_instrument_STAR__orig_val__55562,_STAR_parent_STAR__orig_val__55563,_STAR_reconciler_STAR__temp_val__55564,_STAR_depth_STAR__temp_val__55565,_STAR_shared_STAR__temp_val__55566,_STAR_instrument_STAR__temp_val__55567,_STAR_parent_STAR__temp_val__55568,this$,this__52659__auto__,x55558_56332){
return (function (){
return fulcro.client.mutations.set_value_BANG_(this$,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","nested-provides?","com.wsscode.pathom.viz.index-explorer/nested-provides?",-1296758362),cljs.core.not(nested_provides_QMARK_));
});})(G__55575,G__55576,G__55577,G__55578,G__55579,map__55569,map__55569__$1,attribute,attr_depth,direct_reaches_QMARK_,nested_reaches_QMARK_,direct_provides_QMARK_,nested_provides_QMARK_,interconnections_QMARK_,map__55570,map__55570__$1,on_select_attribute,attributes,graph_comm,_STAR_reconciler_STAR__orig_val__55559,_STAR_depth_STAR__orig_val__55560,_STAR_shared_STAR__orig_val__55561,_STAR_instrument_STAR__orig_val__55562,_STAR_parent_STAR__orig_val__55563,_STAR_reconciler_STAR__temp_val__55564,_STAR_depth_STAR__temp_val__55565,_STAR_shared_STAR__temp_val__55566,_STAR_instrument_STAR__temp_val__55567,_STAR_parent_STAR__temp_val__55568,this$,this__52659__auto__,x55558_56332))
], null);
var G__55592 = "Nested outputs";
return (com.wsscode.pathom.viz.ui.kit.toggle_action.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.toggle_action.cljs$core$IFn$_invoke$arity$2(G__55591,G__55592) : com.wsscode.pathom.viz.ui.kit.toggle_action.call(null,G__55591,G__55592));
})();
return (com.wsscode.pathom.viz.ui.kit.row.cljs$core$IFn$_invoke$arity$6 ? com.wsscode.pathom.viz.ui.kit.row.cljs$core$IFn$_invoke$arity$6(G__55575,G__55576,G__55577,G__55578,G__55579,G__55580) : com.wsscode.pathom.viz.ui.kit.row.call(null,G__55575,G__55576,G__55577,G__55578,G__55579,G__55580));
})(),new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","scrollbars?","com.wsscode.pathom.viz.ui.kit/scrollbars?",1389911780),false], null);
var G__55574 = fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".graph",".graph",-327673667),(function (){var shared_options = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","direct-reaches?","com.wsscode.pathom.viz.index-explorer/direct-reaches?",-1036048994),direct_reaches_QMARK_,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","nested-reaches?","com.wsscode.pathom.viz.index-explorer/nested-reaches?",-22429448),nested_reaches_QMARK_,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","direct-provides?","com.wsscode.pathom.viz.index-explorer/direct-provides?",223892052),direct_provides_QMARK_,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","nested-provides?","com.wsscode.pathom.viz.index-explorer/nested-provides?",-1296758362),nested_provides_QMARK_,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","interconnections?","com.wsscode.pathom.viz.index-explorer/interconnections?",-1723481228),interconnections_QMARK_], null);
var G__55593 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attributes","com.wsscode.pathom.viz.index-explorer/attributes",-67264281),com.wsscode.pathom.viz.index_explorer.attribute_network(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-depth","com.wsscode.pathom.viz.index-explorer/attr-depth",-1327711242),attr_depth,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-index","com.wsscode.pathom.viz.index-explorer/attr-index",684180200),com.wsscode.pathom.viz.helpers.index_by(new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),attributes),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attributes","com.wsscode.pathom.viz.index-explorer/attributes",-67264281),attributes], null),shared_options], 0)),attribute),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","on-show-details","com.wsscode.pathom.viz.index-explorer/on-show-details",-322180105),on_select_attribute,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","on-click-edge","com.wsscode.pathom.viz.index-explorer/on-click-edge",810811642),fulcro.client.primitives.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"select-resolver","select-resolver",43705318)),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","graph-comm","com.wsscode.pathom.viz.index-explorer/graph-comm",-735750087),graph_comm], null),shared_options], 0));
return (com.wsscode.pathom.viz.index_explorer.attribute_graph.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom.viz.index_explorer.attribute_graph.cljs$core$IFn$_invoke$arity$1(G__55593) : com.wsscode.pathom.viz.index_explorer.attribute_graph.call(null,G__55593));
})()], 0));
return (com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2(G__55573,G__55574) : com.wsscode.pathom.viz.ui.kit.panel.call(null,G__55573,G__55574));
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__55563;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__55562;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__55561;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__55560;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__55559;
}});})(x55558_56332))
;


com.wsscode.pathom.viz.index_explorer.AttributeGraphPanel.prototype.constructor = com.wsscode.pathom.viz.index_explorer.AttributeGraphPanel;

com.wsscode.pathom.viz.index_explorer.AttributeGraphPanel.prototype.constructor.displayName = "com.wsscode.pathom.viz.index-explorer/AttributeGraphPanel";

com.wsscode.pathom.viz.index_explorer.AttributeGraphPanel.prototype.fulcro$isComponent = true;

var x55594_56333 = com.wsscode.pathom.viz.index_explorer.AttributeGraphPanel;
x55594_56333.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x55594_56333.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x55594_56333){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".graph",".graph",-327673667),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"height","height",1025178622),"400px",new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"stretch",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column"], null)], null)], null);
});})(x55594_56333))
;

x55594_56333.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x55594_56333){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x55594_56333))
;

x55594_56333.fulcro$client$primitives$IPreMerge$ = cljs.core.PROTOCOL_SENTINEL;

x55594_56333.fulcro$client$primitives$IPreMerge$pre_merge_STAR_$arity$2 = ((function (x55594_56333){
return (function (this$,p__55595){
var map__55596 = p__55595;
var map__55596__$1 = (((((!((map__55596 == null))))?(((((map__55596.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55596.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55596):map__55596);
var current_normalized = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55596__$1,new cljs.core.Keyword(null,"current-normalized","current-normalized",851723724));
var data_tree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55596__$1,new cljs.core.Keyword(null,"data-tree","data-tree",1311167582));
var this$__$1 = this;
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-depth","com.wsscode.pathom.viz.index-explorer/attr-depth",-1327711242),(1),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","direct-reaches?","com.wsscode.pathom.viz.index-explorer/direct-reaches?",-1036048994),true,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","nested-reaches?","com.wsscode.pathom.viz.index-explorer/nested-reaches?",-22429448),false,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","direct-provides?","com.wsscode.pathom.viz.index-explorer/direct-provides?",223892052),true,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","nested-provides?","com.wsscode.pathom.viz.index-explorer/nested-provides?",-1296758362),false,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","interconnections?","com.wsscode.pathom.viz.index-explorer/interconnections?",-1723481228),true], null),current_normalized,data_tree], 0));
});})(x55594_56333))
;

x55594_56333.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x55594_56333.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x55594_56333){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x55594_56333))
;

x55594_56333.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x55594_56333.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x55594_56333){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-depth","com.wsscode.pathom.viz.index-explorer/attr-depth",-1327711242),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","direct-reaches?","com.wsscode.pathom.viz.index-explorer/direct-reaches?",-1036048994),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","nested-reaches?","com.wsscode.pathom.viz.index-explorer/nested-reaches?",-22429448),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","direct-provides?","com.wsscode.pathom.viz.index-explorer/direct-provides?",223892052),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","nested-provides?","com.wsscode.pathom.viz.index-explorer/nested-provides?",-1296758362),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","interconnections?","com.wsscode.pathom.viz.index-explorer/interconnections?",-1723481228),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","show-graph?","com.wsscode.pathom.viz.index-explorer/show-graph?",-1999932552),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via","com.wsscode.pathom.connect/attr-reach-via",-483841559),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-provides","com.wsscode.pathom.connect/attr-provides",-474523918)], null);
});})(x55594_56333))
;


var x55598_56334 = com.wsscode.pathom.viz.index_explorer.AttributeGraphPanel.prototype;
x55598_56334.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x55598_56334.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x55598_56334){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".graph",".graph",-327673667),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"height","height",1025178622),"400px",new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"stretch",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column"], null)], null)], null);
});})(x55598_56334))
;

x55598_56334.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x55598_56334){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x55598_56334))
;

x55598_56334.fulcro$client$primitives$IPreMerge$ = cljs.core.PROTOCOL_SENTINEL;

x55598_56334.fulcro$client$primitives$IPreMerge$pre_merge_STAR_$arity$2 = ((function (x55598_56334){
return (function (this$,p__55599){
var map__55600 = p__55599;
var map__55600__$1 = (((((!((map__55600 == null))))?(((((map__55600.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55600.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55600):map__55600);
var current_normalized = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55600__$1,new cljs.core.Keyword(null,"current-normalized","current-normalized",851723724));
var data_tree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55600__$1,new cljs.core.Keyword(null,"data-tree","data-tree",1311167582));
var this$__$1 = this;
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-depth","com.wsscode.pathom.viz.index-explorer/attr-depth",-1327711242),(1),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","direct-reaches?","com.wsscode.pathom.viz.index-explorer/direct-reaches?",-1036048994),true,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","nested-reaches?","com.wsscode.pathom.viz.index-explorer/nested-reaches?",-22429448),false,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","direct-provides?","com.wsscode.pathom.viz.index-explorer/direct-provides?",223892052),true,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","nested-provides?","com.wsscode.pathom.viz.index-explorer/nested-provides?",-1296758362),false,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","interconnections?","com.wsscode.pathom.viz.index-explorer/interconnections?",-1723481228),true], null),current_normalized,data_tree], 0));
});})(x55598_56334))
;

x55598_56334.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x55598_56334.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x55598_56334){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x55598_56334))
;

x55598_56334.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x55598_56334.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x55598_56334){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-depth","com.wsscode.pathom.viz.index-explorer/attr-depth",-1327711242),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","direct-reaches?","com.wsscode.pathom.viz.index-explorer/direct-reaches?",-1036048994),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","nested-reaches?","com.wsscode.pathom.viz.index-explorer/nested-reaches?",-22429448),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","direct-provides?","com.wsscode.pathom.viz.index-explorer/direct-provides?",223892052),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","nested-provides?","com.wsscode.pathom.viz.index-explorer/nested-provides?",-1296758362),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","interconnections?","com.wsscode.pathom.viz.index-explorer/interconnections?",-1723481228),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","show-graph?","com.wsscode.pathom.viz.index-explorer/show-graph?",-1999932552),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via","com.wsscode.pathom.connect/attr-reach-via",-483841559),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-provides","com.wsscode.pathom.connect/attr-provides",-474523918)], null);
});})(x55598_56334))
;


com.wsscode.pathom.viz.index_explorer.AttributeGraphPanel.cljs$lang$type = true;

com.wsscode.pathom.viz.index_explorer.AttributeGraphPanel.cljs$lang$ctorStr = "com.wsscode.pathom.viz.index-explorer/AttributeGraphPanel";

com.wsscode.pathom.viz.index_explorer.AttributeGraphPanel.cljs$lang$ctorPrWriter = (function (this__53744__auto__,writer__53745__auto__,opt__53746__auto__){
return cljs.core._write(writer__53745__auto__,"com.wsscode.pathom.viz.index-explorer/AttributeGraphPanel");
});
com.wsscode.pathom.viz.index_explorer.attribute_graph_panel = fulcro.client.primitives.computed_factory.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.AttributeGraphPanel);
if((typeof com !== 'undefined') && (typeof com.wsscode !== 'undefined') && (typeof com.wsscode.pathom !== 'undefined') && (typeof com.wsscode.pathom.viz !== 'undefined') && (typeof com.wsscode.pathom.viz.index_explorer !== 'undefined') && (typeof com.wsscode.pathom.viz.index_explorer.AttributeView !== 'undefined')){
} else {
/**
 * @constructor
 * @nocollapse
 */
com.wsscode.pathom.viz.index_explorer.AttributeView = (function com$wsscode$pathom$viz$index_explorer$AttributeView(){
var this__53741__auto__ = this;
React.Component.apply(this__53741__auto__,arguments);

if((!((this__53741__auto__.initLocalState == null)))){
this__53741__auto__.state = this__53741__auto__.initLocalState();
} else {
this__53741__auto__.state = ({});
}

return this__53741__auto__;
});

goog.object.extend(com.wsscode.pathom.viz.index_explorer.AttributeView.prototype,React.Component.prototype,fulcro.client.primitives.default_component_prototype);
}

fulcro.client.primitives._register_component_BANG_(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","AttributeView","com.wsscode.pathom.viz.index-explorer/AttributeView",1769179789),com.wsscode.pathom.viz.index_explorer.AttributeView);

var x55607_56335 = com.wsscode.pathom.viz.index_explorer.AttributeView.prototype;
x55607_56335.render = ((function (x55607_56335){
return (function (){
var this__52659__auto__ = this;
var this$ = this__52659__auto__;
var _STAR_reconciler_STAR__orig_val__55608 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__55609 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__55610 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__55611 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__55612 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__55613 = fulcro.client.primitives.get_reconciler(this__52659__auto__);
var _STAR_depth_STAR__temp_val__55614 = (fulcro.client.primitives.depth(this__52659__auto__) + (1));
var _STAR_shared_STAR__temp_val__55615 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__52659__auto__);
var _STAR_instrument_STAR__temp_val__55616 = fulcro.client.primitives.instrument(this__52659__auto__);
var _STAR_parent_STAR__temp_val__55617 = this__52659__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__55613;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__55614;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__55615;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__55616;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__55617;

try{var map__55618 = fulcro.client.primitives.props(this$);
var map__55618__$1 = (((((!((map__55618 == null))))?(((((map__55618.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55618.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55618):map__55618);
var attr_mutation_param_in = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55618__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attr-mutation-param-in","com.wsscode.pathom.connect/attr-mutation-param-in",-1474382671));
var attr_reach_via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55618__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via","com.wsscode.pathom.connect/attr-reach-via",-483841559));
var attr_combinations = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55618__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attr-combinations","com.wsscode.pathom.connect/attr-combinations",-1163990806));
var attribute = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55618__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075));
var provides_tree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55618__$1,new cljs.core.Keyword("ui","provides-tree","ui/provides-tree",675380755));
var provides_tree_source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55618__$1,new cljs.core.Keyword("ui","provides-tree-source","ui/provides-tree-source",874544325));
var attr_input_in = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55618__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attr-input-in","com.wsscode.pathom.connect/attr-input-in",-2112912399));
var attr_provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55618__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attr-provides","com.wsscode.pathom.connect/attr-provides",-474523918));
var attr_mutation_output_in = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55618__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attr-mutation-output-in","com.wsscode.pathom.connect/attr-mutation-output-in",1122448739));
var show_graph_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55618__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","show-graph?","com.wsscode.pathom.viz.index-explorer/show-graph?",-1999932552));
var mutation_output_in = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55618__$1,new cljs.core.Keyword(">","mutation-output-in",">/mutation-output-in",463836271));
var attr_output_in = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55618__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attr-output-in","com.wsscode.pathom.connect/attr-output-in",-62045610));
var reach_via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55618__$1,new cljs.core.Keyword(">","reach-via",">/reach-via",725397135));
var graph_panel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55618__$1,new cljs.core.Keyword(">","graph-panel",">/graph-panel",-700694737));
var mutation_param_in = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55618__$1,new cljs.core.Keyword(">","mutation-param-in",">/mutation-param-in",-1050138308));
var computed = fulcro.client.primitives.get_computed.cljs$core$IFn$_invoke$arity$1(this$);
var computed__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(computed,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","graph-comm","com.wsscode.pathom.viz.index-explorer/graph-comm",-735750087),fulcro.client.primitives.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"graph-comm","graph-comm",-744729650)));
return fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".container",".container",-1441208944),fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".toolbar",".toolbar",968457325),fulcro.client.localized_dom.h1.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".title",".title",-416997657),com.wsscode.pathom.viz.ui.kit.gc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".flex",".flex",-73425686)], 0)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attribute], 0))], 0)),(function (){var G__55620 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","active?","com.wsscode.pathom.viz.ui.kit/active?",-2040404697),show_graph_QMARK_,new cljs.core.Keyword(null,"classes","classes",2037804510),com.wsscode.pathom.viz.ui.kit.ccss.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".show-graph",".show-graph",1780476669)], 0)),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (computed__$1,map__55618,map__55618__$1,attr_mutation_param_in,attr_reach_via,attr_combinations,attribute,provides_tree,provides_tree_source,attr_input_in,attr_provides,attr_mutation_output_in,show_graph_QMARK_,mutation_output_in,attr_output_in,reach_via,graph_panel,mutation_param_in,computed,_STAR_reconciler_STAR__orig_val__55608,_STAR_depth_STAR__orig_val__55609,_STAR_shared_STAR__orig_val__55610,_STAR_instrument_STAR__orig_val__55611,_STAR_parent_STAR__orig_val__55612,_STAR_reconciler_STAR__temp_val__55613,_STAR_depth_STAR__temp_val__55614,_STAR_shared_STAR__temp_val__55615,_STAR_instrument_STAR__temp_val__55616,_STAR_parent_STAR__temp_val__55617,this$,this__52659__auto__,x55607_56335){
return (function (){
return fulcro.client.mutations.set_value_BANG_(this$,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","show-graph?","com.wsscode.pathom.viz.index-explorer/show-graph?",-1999932552),cljs.core.not(show_graph_QMARK_));
});})(computed__$1,map__55618,map__55618__$1,attr_mutation_param_in,attr_reach_via,attr_combinations,attribute,provides_tree,provides_tree_source,attr_input_in,attr_provides,attr_mutation_output_in,show_graph_QMARK_,mutation_output_in,attr_output_in,reach_via,graph_panel,mutation_param_in,computed,_STAR_reconciler_STAR__orig_val__55608,_STAR_depth_STAR__orig_val__55609,_STAR_shared_STAR__orig_val__55610,_STAR_instrument_STAR__orig_val__55611,_STAR_parent_STAR__orig_val__55612,_STAR_reconciler_STAR__temp_val__55613,_STAR_depth_STAR__temp_val__55614,_STAR_shared_STAR__temp_val__55615,_STAR_instrument_STAR__temp_val__55616,_STAR_parent_STAR__temp_val__55617,this$,this__52659__auto__,x55607_56335))
], null);
var G__55621 = "Graph View";
return (com.wsscode.pathom.viz.ui.kit.toggle_action.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.toggle_action.cljs$core$IFn$_invoke$arity$2(G__55620,G__55621) : com.wsscode.pathom.viz.ui.kit.toggle_action.call(null,G__55620,G__55621));
})()], 0)),(cljs.core.truth_(show_graph_QMARK_)?(com.wsscode.pathom.viz.index_explorer.attribute_graph_panel.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.attribute_graph_panel.cljs$core$IFn$_invoke$arity$2(graph_panel,computed__$1) : com.wsscode.pathom.viz.index_explorer.attribute_graph_panel.call(null,graph_panel,computed__$1)):null),fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".columns$scrollbars",".columns$scrollbars",-1170212651),fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".data-list",".data-list",949465177),((cljs.core.seq(attr_reach_via))?(com.wsscode.pathom.viz.index_explorer.attribute_info_reach_via.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.attribute_info_reach_via.cljs$core$IFn$_invoke$arity$2(reach_via,computed__$1) : com.wsscode.pathom.viz.index_explorer.attribute_info_reach_via.call(null,reach_via,computed__$1)):null),((cljs.core.seq(attr_output_in))?(function (){var G__55622 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","panel-title","com.wsscode.pathom.viz.ui.kit/panel-title",1529445284),"Output In",new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","panel-tag","com.wsscode.pathom.viz.ui.kit/panel-tag",144392508),cljs.core.count(attr_output_in)], null);
var G__55623 = (function (){var iter__4523__auto__ = ((function (G__55622,computed__$1,map__55618,map__55618__$1,attr_mutation_param_in,attr_reach_via,attr_combinations,attribute,provides_tree,provides_tree_source,attr_input_in,attr_provides,attr_mutation_output_in,show_graph_QMARK_,mutation_output_in,attr_output_in,reach_via,graph_panel,mutation_param_in,computed,_STAR_reconciler_STAR__orig_val__55608,_STAR_depth_STAR__orig_val__55609,_STAR_shared_STAR__orig_val__55610,_STAR_instrument_STAR__orig_val__55611,_STAR_parent_STAR__orig_val__55612,_STAR_reconciler_STAR__temp_val__55613,_STAR_depth_STAR__temp_val__55614,_STAR_shared_STAR__temp_val__55615,_STAR_instrument_STAR__temp_val__55616,_STAR_parent_STAR__temp_val__55617,this$,this__52659__auto__,x55607_56335){
return (function com$wsscode$pathom$viz$index_explorer$iter__55624(s__55625){
return (new cljs.core.LazySeq(null,((function (G__55622,computed__$1,map__55618,map__55618__$1,attr_mutation_param_in,attr_reach_via,attr_combinations,attribute,provides_tree,provides_tree_source,attr_input_in,attr_provides,attr_mutation_output_in,show_graph_QMARK_,mutation_output_in,attr_output_in,reach_via,graph_panel,mutation_param_in,computed,_STAR_reconciler_STAR__orig_val__55608,_STAR_depth_STAR__orig_val__55609,_STAR_shared_STAR__orig_val__55610,_STAR_instrument_STAR__orig_val__55611,_STAR_parent_STAR__orig_val__55612,_STAR_reconciler_STAR__temp_val__55613,_STAR_depth_STAR__temp_val__55614,_STAR_shared_STAR__temp_val__55615,_STAR_instrument_STAR__temp_val__55616,_STAR_parent_STAR__temp_val__55617,this$,this__52659__auto__,x55607_56335){
return (function (){
var s__55625__$1 = s__55625;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__55625__$1);
if(temp__5720__auto__){
var s__55625__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__55625__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__55625__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__55627 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__55626 = (0);
while(true){
if((i__55626 < size__4522__auto__)){
var resolver = cljs.core._nth(c__4521__auto__,i__55626);
cljs.core.chunk_append(b__55627,com.wsscode.pathom.viz.index_explorer.resolver_link(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),resolver], null),computed__$1));

var G__56336 = (i__55626 + (1));
i__55626 = G__56336;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__55627),com$wsscode$pathom$viz$index_explorer$iter__55624(cljs.core.chunk_rest(s__55625__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__55627),null);
}
} else {
var resolver = cljs.core.first(s__55625__$2);
return cljs.core.cons(com.wsscode.pathom.viz.index_explorer.resolver_link(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),resolver], null),computed__$1),com$wsscode$pathom$viz$index_explorer$iter__55624(cljs.core.rest(s__55625__$2)));
}
} else {
return null;
}
break;
}
});})(G__55622,computed__$1,map__55618,map__55618__$1,attr_mutation_param_in,attr_reach_via,attr_combinations,attribute,provides_tree,provides_tree_source,attr_input_in,attr_provides,attr_mutation_output_in,show_graph_QMARK_,mutation_output_in,attr_output_in,reach_via,graph_panel,mutation_param_in,computed,_STAR_reconciler_STAR__orig_val__55608,_STAR_depth_STAR__orig_val__55609,_STAR_shared_STAR__orig_val__55610,_STAR_instrument_STAR__orig_val__55611,_STAR_parent_STAR__orig_val__55612,_STAR_reconciler_STAR__temp_val__55613,_STAR_depth_STAR__temp_val__55614,_STAR_shared_STAR__temp_val__55615,_STAR_instrument_STAR__temp_val__55616,_STAR_parent_STAR__temp_val__55617,this$,this__52659__auto__,x55607_56335))
,null,null));
});})(G__55622,computed__$1,map__55618,map__55618__$1,attr_mutation_param_in,attr_reach_via,attr_combinations,attribute,provides_tree,provides_tree_source,attr_input_in,attr_provides,attr_mutation_output_in,show_graph_QMARK_,mutation_output_in,attr_output_in,reach_via,graph_panel,mutation_param_in,computed,_STAR_reconciler_STAR__orig_val__55608,_STAR_depth_STAR__orig_val__55609,_STAR_shared_STAR__orig_val__55610,_STAR_instrument_STAR__orig_val__55611,_STAR_parent_STAR__orig_val__55612,_STAR_reconciler_STAR__temp_val__55613,_STAR_depth_STAR__temp_val__55614,_STAR_shared_STAR__temp_val__55615,_STAR_instrument_STAR__temp_val__55616,_STAR_parent_STAR__temp_val__55617,this$,this__52659__auto__,x55607_56335))
;
return iter__4523__auto__(cljs.core.sort.cljs$core$IFn$_invoke$arity$1(attr_output_in));
})();
return (com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2(G__55622,G__55623) : com.wsscode.pathom.viz.ui.kit.panel.call(null,G__55622,G__55623));
})():null),((cljs.core.seq(attr_combinations))?(function (){var G__55628 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","panel-title","com.wsscode.pathom.viz.ui.kit/panel-title",1529445284),"Input Combinations",new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","panel-tag","com.wsscode.pathom.viz.ui.kit/panel-tag",144392508),cljs.core.count(attr_combinations)], null);
var G__55629 = (function (){var iter__4523__auto__ = ((function (G__55628,computed__$1,map__55618,map__55618__$1,attr_mutation_param_in,attr_reach_via,attr_combinations,attribute,provides_tree,provides_tree_source,attr_input_in,attr_provides,attr_mutation_output_in,show_graph_QMARK_,mutation_output_in,attr_output_in,reach_via,graph_panel,mutation_param_in,computed,_STAR_reconciler_STAR__orig_val__55608,_STAR_depth_STAR__orig_val__55609,_STAR_shared_STAR__orig_val__55610,_STAR_instrument_STAR__orig_val__55611,_STAR_parent_STAR__orig_val__55612,_STAR_reconciler_STAR__temp_val__55613,_STAR_depth_STAR__temp_val__55614,_STAR_shared_STAR__temp_val__55615,_STAR_instrument_STAR__temp_val__55616,_STAR_parent_STAR__temp_val__55617,this$,this__52659__auto__,x55607_56335){
return (function com$wsscode$pathom$viz$index_explorer$iter__55630(s__55631){
return (new cljs.core.LazySeq(null,((function (G__55628,computed__$1,map__55618,map__55618__$1,attr_mutation_param_in,attr_reach_via,attr_combinations,attribute,provides_tree,provides_tree_source,attr_input_in,attr_provides,attr_mutation_output_in,show_graph_QMARK_,mutation_output_in,attr_output_in,reach_via,graph_panel,mutation_param_in,computed,_STAR_reconciler_STAR__orig_val__55608,_STAR_depth_STAR__orig_val__55609,_STAR_shared_STAR__orig_val__55610,_STAR_instrument_STAR__orig_val__55611,_STAR_parent_STAR__orig_val__55612,_STAR_reconciler_STAR__temp_val__55613,_STAR_depth_STAR__temp_val__55614,_STAR_shared_STAR__temp_val__55615,_STAR_instrument_STAR__temp_val__55616,_STAR_parent_STAR__temp_val__55617,this$,this__52659__auto__,x55607_56335){
return (function (){
var s__55631__$1 = s__55631;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__55631__$1);
if(temp__5720__auto__){
var s__55631__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__55631__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__55631__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__55633 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__55632 = (0);
while(true){
if((i__55632 < size__4522__auto__)){
var input = cljs.core._nth(c__4521__auto__,i__55632);
cljs.core.chunk_append(b__55633,com.wsscode.pathom.viz.index_explorer.attribute_link(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),input], null),computed__$1));

var G__56337 = (i__55632 + (1));
i__55632 = G__56337;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__55633),com$wsscode$pathom$viz$index_explorer$iter__55630(cljs.core.chunk_rest(s__55631__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__55633),null);
}
} else {
var input = cljs.core.first(s__55631__$2);
return cljs.core.cons(com.wsscode.pathom.viz.index_explorer.attribute_link(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),input], null),computed__$1),com$wsscode$pathom$viz$index_explorer$iter__55630(cljs.core.rest(s__55631__$2)));
}
} else {
return null;
}
break;
}
});})(G__55628,computed__$1,map__55618,map__55618__$1,attr_mutation_param_in,attr_reach_via,attr_combinations,attribute,provides_tree,provides_tree_source,attr_input_in,attr_provides,attr_mutation_output_in,show_graph_QMARK_,mutation_output_in,attr_output_in,reach_via,graph_panel,mutation_param_in,computed,_STAR_reconciler_STAR__orig_val__55608,_STAR_depth_STAR__orig_val__55609,_STAR_shared_STAR__orig_val__55610,_STAR_instrument_STAR__orig_val__55611,_STAR_parent_STAR__orig_val__55612,_STAR_reconciler_STAR__temp_val__55613,_STAR_depth_STAR__temp_val__55614,_STAR_shared_STAR__temp_val__55615,_STAR_instrument_STAR__temp_val__55616,_STAR_parent_STAR__temp_val__55617,this$,this__52659__auto__,x55607_56335))
,null,null));
});})(G__55628,computed__$1,map__55618,map__55618__$1,attr_mutation_param_in,attr_reach_via,attr_combinations,attribute,provides_tree,provides_tree_source,attr_input_in,attr_provides,attr_mutation_output_in,show_graph_QMARK_,mutation_output_in,attr_output_in,reach_via,graph_panel,mutation_param_in,computed,_STAR_reconciler_STAR__orig_val__55608,_STAR_depth_STAR__orig_val__55609,_STAR_shared_STAR__orig_val__55610,_STAR_instrument_STAR__orig_val__55611,_STAR_parent_STAR__orig_val__55612,_STAR_reconciler_STAR__temp_val__55613,_STAR_depth_STAR__temp_val__55614,_STAR_shared_STAR__temp_val__55615,_STAR_instrument_STAR__temp_val__55616,_STAR_parent_STAR__temp_val__55617,this$,this__52659__auto__,x55607_56335))
;
return iter__4523__auto__(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,cljs.core.sort),com.wsscode.pathom.viz.helpers.vector_compare,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (iter__4523__auto__,G__55628,computed__$1,map__55618,map__55618__$1,attr_mutation_param_in,attr_reach_via,attr_combinations,attribute,provides_tree,provides_tree_source,attr_input_in,attr_provides,attr_mutation_output_in,show_graph_QMARK_,mutation_output_in,attr_output_in,reach_via,graph_panel,mutation_param_in,computed,_STAR_reconciler_STAR__orig_val__55608,_STAR_depth_STAR__orig_val__55609,_STAR_shared_STAR__orig_val__55610,_STAR_instrument_STAR__orig_val__55611,_STAR_parent_STAR__orig_val__55612,_STAR_reconciler_STAR__temp_val__55613,_STAR_depth_STAR__temp_val__55614,_STAR_shared_STAR__temp_val__55615,_STAR_instrument_STAR__temp_val__55616,_STAR_parent_STAR__temp_val__55617,this$,this__52659__auto__,x55607_56335){
return (function (p1__55604_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.sorted_set(),p1__55604_SHARP_);
});})(iter__4523__auto__,G__55628,computed__$1,map__55618,map__55618__$1,attr_mutation_param_in,attr_reach_via,attr_combinations,attribute,provides_tree,provides_tree_source,attr_input_in,attr_provides,attr_mutation_output_in,show_graph_QMARK_,mutation_output_in,attr_output_in,reach_via,graph_panel,mutation_param_in,computed,_STAR_reconciler_STAR__orig_val__55608,_STAR_depth_STAR__orig_val__55609,_STAR_shared_STAR__orig_val__55610,_STAR_instrument_STAR__orig_val__55611,_STAR_parent_STAR__orig_val__55612,_STAR_reconciler_STAR__temp_val__55613,_STAR_depth_STAR__temp_val__55614,_STAR_shared_STAR__temp_val__55615,_STAR_instrument_STAR__temp_val__55616,_STAR_parent_STAR__temp_val__55617,this$,this__52659__auto__,x55607_56335))
,attr_combinations)));
})();
return (com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2(G__55628,G__55629) : com.wsscode.pathom.viz.ui.kit.panel.call(null,G__55628,G__55629));
})():null),((cljs.core.seq(attr_mutation_param_in))?(com.wsscode.pathom.viz.index_explorer.attribute_info_mutation_param_in.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.attribute_info_mutation_param_in.cljs$core$IFn$_invoke$arity$2(mutation_param_in,computed__$1) : com.wsscode.pathom.viz.index_explorer.attribute_info_mutation_param_in.call(null,mutation_param_in,computed__$1)):null),((cljs.core.seq(attr_mutation_output_in))?(com.wsscode.pathom.viz.index_explorer.attribute_info_mutation_output_in.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.attribute_info_mutation_output_in.cljs$core$IFn$_invoke$arity$2(mutation_output_in,computed__$1) : com.wsscode.pathom.viz.index_explorer.attribute_info_mutation_output_in.call(null,mutation_output_in,computed__$1)):null),(function (){var temp__5718__auto__ = com.wsscode.spec_inspec.safe_form(attribute);
if(cljs.core.truth_(temp__5718__auto__)){
var form = temp__5718__auto__;
return fulcro.client.primitives.fragment.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__55634 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","panel-title","com.wsscode.pathom.viz.ui.kit/panel-title",1529445284),"Spec"], null);
var G__55635 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([form], 0));
return (com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2(G__55634,G__55635) : com.wsscode.pathom.viz.ui.kit.panel.call(null,G__55634,G__55635));
})(),(function (){var G__55636 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),attribute], null);
var G__55637 = computed__$1;
return (com.wsscode.pathom.viz.index_explorer.examples_panel.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.examples_panel.cljs$core$IFn$_invoke$arity$2(G__55636,G__55637) : com.wsscode.pathom.viz.index_explorer.examples_panel.call(null,G__55636,G__55637));
})()], 0));
} else {
return null;
}
})(),com.wsscode.pathom.viz.index_explorer.render_plugin_extension(this$,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","plugin-render-to-attr-left-menu","com.wsscode.pathom.viz.index-explorer/plugin-render-to-attr-left-menu",-1946076893))], 0)),fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".data-list-right",".data-list-right",-1849926935),((cljs.core.seq(attr_provides))?(function (){var G__55638 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","panel-title","com.wsscode.pathom.viz.ui.kit/panel-title",1529445284),"Provides",new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","panel-tag","com.wsscode.pathom.viz.ui.kit/panel-tag",144392508),cljs.core.count(attr_provides)], null);
var G__55639 = (function (){var G__55640 = provides_tree;
var G__55641 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.viz.ui.expandable-tree","root","com.wsscode.pathom.viz.ui.expandable-tree/root",-788021653),provides_tree_source,new cljs.core.Keyword("com.wsscode.pathom.viz.ui.expandable-tree","render","com.wsscode.pathom.viz.ui.expandable-tree/render",918872218),((function (G__55640,G__55638,computed__$1,map__55618,map__55618__$1,attr_mutation_param_in,attr_reach_via,attr_combinations,attribute,provides_tree,provides_tree_source,attr_input_in,attr_provides,attr_mutation_output_in,show_graph_QMARK_,mutation_output_in,attr_output_in,reach_via,graph_panel,mutation_param_in,computed,_STAR_reconciler_STAR__orig_val__55608,_STAR_depth_STAR__orig_val__55609,_STAR_shared_STAR__orig_val__55610,_STAR_instrument_STAR__orig_val__55611,_STAR_parent_STAR__orig_val__55612,_STAR_reconciler_STAR__temp_val__55613,_STAR_depth_STAR__temp_val__55614,_STAR_shared_STAR__temp_val__55615,_STAR_instrument_STAR__temp_val__55616,_STAR_parent_STAR__temp_val__55617,this$,this__52659__auto__,x55607_56335){
return (function (p__55642){
var map__55643 = p__55642;
var map__55643__$1 = (((((!((map__55643 == null))))?(((((map__55643.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55643.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55643):map__55643);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55643__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var sym_set = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55643__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","sym-set","com.wsscode.pathom.connect/sym-set",-662703745));
var G__55645 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"classes","classes",2037804510),com.wsscode.pathom.viz.ui.kit.ccss.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".links-container",".links-container",-1347961892)], 0))], null);
var G__55646 = com.wsscode.pathom.viz.index_explorer.attribute_link(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),key], null),computed__$1);
var G__55647 = fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"classes","classes",2037804510),com.wsscode.pathom.viz.ui.kit.ccss.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".links-display",".links-display",-2102960556)], 0))], null),(function (){var iter__4523__auto__ = ((function (G__55645,G__55646,map__55643,map__55643__$1,key,sym_set,G__55640,G__55638,computed__$1,map__55618,map__55618__$1,attr_mutation_param_in,attr_reach_via,attr_combinations,attribute,provides_tree,provides_tree_source,attr_input_in,attr_provides,attr_mutation_output_in,show_graph_QMARK_,mutation_output_in,attr_output_in,reach_via,graph_panel,mutation_param_in,computed,_STAR_reconciler_STAR__orig_val__55608,_STAR_depth_STAR__orig_val__55609,_STAR_shared_STAR__orig_val__55610,_STAR_instrument_STAR__orig_val__55611,_STAR_parent_STAR__orig_val__55612,_STAR_reconciler_STAR__temp_val__55613,_STAR_depth_STAR__temp_val__55614,_STAR_shared_STAR__temp_val__55615,_STAR_instrument_STAR__temp_val__55616,_STAR_parent_STAR__temp_val__55617,this$,this__52659__auto__,x55607_56335){
return (function com$wsscode$pathom$viz$index_explorer$iter__55648(s__55649){
return (new cljs.core.LazySeq(null,((function (G__55645,G__55646,map__55643,map__55643__$1,key,sym_set,G__55640,G__55638,computed__$1,map__55618,map__55618__$1,attr_mutation_param_in,attr_reach_via,attr_combinations,attribute,provides_tree,provides_tree_source,attr_input_in,attr_provides,attr_mutation_output_in,show_graph_QMARK_,mutation_output_in,attr_output_in,reach_via,graph_panel,mutation_param_in,computed,_STAR_reconciler_STAR__orig_val__55608,_STAR_depth_STAR__orig_val__55609,_STAR_shared_STAR__orig_val__55610,_STAR_instrument_STAR__orig_val__55611,_STAR_parent_STAR__orig_val__55612,_STAR_reconciler_STAR__temp_val__55613,_STAR_depth_STAR__temp_val__55614,_STAR_shared_STAR__temp_val__55615,_STAR_instrument_STAR__temp_val__55616,_STAR_parent_STAR__temp_val__55617,this$,this__52659__auto__,x55607_56335){
return (function (){
var s__55649__$1 = s__55649;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__55649__$1);
if(temp__5720__auto__){
var s__55649__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__55649__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__55649__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__55651 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__55650 = (0);
while(true){
if((i__55650 < size__4522__auto__)){
var sym = cljs.core._nth(c__4521__auto__,i__55650);
cljs.core.chunk_append(b__55651,com.wsscode.pathom.viz.index_explorer.resolver_link(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),sym], null),computed__$1));

var G__56338 = (i__55650 + (1));
i__55650 = G__56338;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__55651),com$wsscode$pathom$viz$index_explorer$iter__55648(cljs.core.chunk_rest(s__55649__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__55651),null);
}
} else {
var sym = cljs.core.first(s__55649__$2);
return cljs.core.cons(com.wsscode.pathom.viz.index_explorer.resolver_link(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),sym], null),computed__$1),com$wsscode$pathom$viz$index_explorer$iter__55648(cljs.core.rest(s__55649__$2)));
}
} else {
return null;
}
break;
}
});})(G__55645,G__55646,map__55643,map__55643__$1,key,sym_set,G__55640,G__55638,computed__$1,map__55618,map__55618__$1,attr_mutation_param_in,attr_reach_via,attr_combinations,attribute,provides_tree,provides_tree_source,attr_input_in,attr_provides,attr_mutation_output_in,show_graph_QMARK_,mutation_output_in,attr_output_in,reach_via,graph_panel,mutation_param_in,computed,_STAR_reconciler_STAR__orig_val__55608,_STAR_depth_STAR__orig_val__55609,_STAR_shared_STAR__orig_val__55610,_STAR_instrument_STAR__orig_val__55611,_STAR_parent_STAR__orig_val__55612,_STAR_reconciler_STAR__temp_val__55613,_STAR_depth_STAR__temp_val__55614,_STAR_shared_STAR__temp_val__55615,_STAR_instrument_STAR__temp_val__55616,_STAR_parent_STAR__temp_val__55617,this$,this__52659__auto__,x55607_56335))
,null,null));
});})(G__55645,G__55646,map__55643,map__55643__$1,key,sym_set,G__55640,G__55638,computed__$1,map__55618,map__55618__$1,attr_mutation_param_in,attr_reach_via,attr_combinations,attribute,provides_tree,provides_tree_source,attr_input_in,attr_provides,attr_mutation_output_in,show_graph_QMARK_,mutation_output_in,attr_output_in,reach_via,graph_panel,mutation_param_in,computed,_STAR_reconciler_STAR__orig_val__55608,_STAR_depth_STAR__orig_val__55609,_STAR_shared_STAR__orig_val__55610,_STAR_instrument_STAR__orig_val__55611,_STAR_parent_STAR__orig_val__55612,_STAR_reconciler_STAR__temp_val__55613,_STAR_depth_STAR__temp_val__55614,_STAR_shared_STAR__temp_val__55615,_STAR_instrument_STAR__temp_val__55616,_STAR_parent_STAR__temp_val__55617,this$,this__52659__auto__,x55607_56335))
;
return iter__4523__auto__(cljs.core.sort.cljs$core$IFn$_invoke$arity$1(sym_set));
})()], 0));
return (com.wsscode.pathom.viz.ui.kit.column.cljs$core$IFn$_invoke$arity$3 ? com.wsscode.pathom.viz.ui.kit.column.cljs$core$IFn$_invoke$arity$3(G__55645,G__55646,G__55647) : com.wsscode.pathom.viz.ui.kit.column.call(null,G__55645,G__55646,G__55647));
});})(G__55640,G__55638,computed__$1,map__55618,map__55618__$1,attr_mutation_param_in,attr_reach_via,attr_combinations,attribute,provides_tree,provides_tree_source,attr_input_in,attr_provides,attr_mutation_output_in,show_graph_QMARK_,mutation_output_in,attr_output_in,reach_via,graph_panel,mutation_param_in,computed,_STAR_reconciler_STAR__orig_val__55608,_STAR_depth_STAR__orig_val__55609,_STAR_shared_STAR__orig_val__55610,_STAR_instrument_STAR__orig_val__55611,_STAR_parent_STAR__orig_val__55612,_STAR_reconciler_STAR__temp_val__55613,_STAR_depth_STAR__temp_val__55614,_STAR_shared_STAR__temp_val__55615,_STAR_instrument_STAR__temp_val__55616,_STAR_parent_STAR__temp_val__55617,this$,this__52659__auto__,x55607_56335))
,new cljs.core.Keyword("com.wsscode.pathom.viz.ui.expandable-tree","sort-by","com.wsscode.pathom.viz.ui.expandable-tree/sort-by",1511051281),new cljs.core.Keyword(null,"key","key",-1516042587)], null);
return (com.wsscode.pathom.viz.ui.expandable_tree.expandable_tree.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.expandable_tree.expandable_tree.cljs$core$IFn$_invoke$arity$2(G__55640,G__55641) : com.wsscode.pathom.viz.ui.expandable_tree.expandable_tree.call(null,G__55640,G__55641));
})();
return (com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2(G__55638,G__55639) : com.wsscode.pathom.viz.ui.kit.panel.call(null,G__55638,G__55639));
})():null),((cljs.core.seq(attr_input_in))?(function (){var G__55652 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","panel-title","com.wsscode.pathom.viz.ui.kit/panel-title",1529445284),"Input In",new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","panel-tag","com.wsscode.pathom.viz.ui.kit/panel-tag",144392508),cljs.core.count(attr_input_in)], null);
var G__55653 = (function (){var iter__4523__auto__ = ((function (G__55652,computed__$1,map__55618,map__55618__$1,attr_mutation_param_in,attr_reach_via,attr_combinations,attribute,provides_tree,provides_tree_source,attr_input_in,attr_provides,attr_mutation_output_in,show_graph_QMARK_,mutation_output_in,attr_output_in,reach_via,graph_panel,mutation_param_in,computed,_STAR_reconciler_STAR__orig_val__55608,_STAR_depth_STAR__orig_val__55609,_STAR_shared_STAR__orig_val__55610,_STAR_instrument_STAR__orig_val__55611,_STAR_parent_STAR__orig_val__55612,_STAR_reconciler_STAR__temp_val__55613,_STAR_depth_STAR__temp_val__55614,_STAR_shared_STAR__temp_val__55615,_STAR_instrument_STAR__temp_val__55616,_STAR_parent_STAR__temp_val__55617,this$,this__52659__auto__,x55607_56335){
return (function com$wsscode$pathom$viz$index_explorer$iter__55654(s__55655){
return (new cljs.core.LazySeq(null,((function (G__55652,computed__$1,map__55618,map__55618__$1,attr_mutation_param_in,attr_reach_via,attr_combinations,attribute,provides_tree,provides_tree_source,attr_input_in,attr_provides,attr_mutation_output_in,show_graph_QMARK_,mutation_output_in,attr_output_in,reach_via,graph_panel,mutation_param_in,computed,_STAR_reconciler_STAR__orig_val__55608,_STAR_depth_STAR__orig_val__55609,_STAR_shared_STAR__orig_val__55610,_STAR_instrument_STAR__orig_val__55611,_STAR_parent_STAR__orig_val__55612,_STAR_reconciler_STAR__temp_val__55613,_STAR_depth_STAR__temp_val__55614,_STAR_shared_STAR__temp_val__55615,_STAR_instrument_STAR__temp_val__55616,_STAR_parent_STAR__temp_val__55617,this$,this__52659__auto__,x55607_56335){
return (function (){
var s__55655__$1 = s__55655;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__55655__$1);
if(temp__5720__auto__){
var s__55655__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__55655__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__55655__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__55657 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__55656 = (0);
while(true){
if((i__55656 < size__4522__auto__)){
var resolver = cljs.core._nth(c__4521__auto__,i__55656);
cljs.core.chunk_append(b__55657,com.wsscode.pathom.viz.index_explorer.resolver_link(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),resolver], null),computed__$1));

var G__56339 = (i__55656 + (1));
i__55656 = G__56339;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__55657),com$wsscode$pathom$viz$index_explorer$iter__55654(cljs.core.chunk_rest(s__55655__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__55657),null);
}
} else {
var resolver = cljs.core.first(s__55655__$2);
return cljs.core.cons(com.wsscode.pathom.viz.index_explorer.resolver_link(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),resolver], null),computed__$1),com$wsscode$pathom$viz$index_explorer$iter__55654(cljs.core.rest(s__55655__$2)));
}
} else {
return null;
}
break;
}
});})(G__55652,computed__$1,map__55618,map__55618__$1,attr_mutation_param_in,attr_reach_via,attr_combinations,attribute,provides_tree,provides_tree_source,attr_input_in,attr_provides,attr_mutation_output_in,show_graph_QMARK_,mutation_output_in,attr_output_in,reach_via,graph_panel,mutation_param_in,computed,_STAR_reconciler_STAR__orig_val__55608,_STAR_depth_STAR__orig_val__55609,_STAR_shared_STAR__orig_val__55610,_STAR_instrument_STAR__orig_val__55611,_STAR_parent_STAR__orig_val__55612,_STAR_reconciler_STAR__temp_val__55613,_STAR_depth_STAR__temp_val__55614,_STAR_shared_STAR__temp_val__55615,_STAR_instrument_STAR__temp_val__55616,_STAR_parent_STAR__temp_val__55617,this$,this__52659__auto__,x55607_56335))
,null,null));
});})(G__55652,computed__$1,map__55618,map__55618__$1,attr_mutation_param_in,attr_reach_via,attr_combinations,attribute,provides_tree,provides_tree_source,attr_input_in,attr_provides,attr_mutation_output_in,show_graph_QMARK_,mutation_output_in,attr_output_in,reach_via,graph_panel,mutation_param_in,computed,_STAR_reconciler_STAR__orig_val__55608,_STAR_depth_STAR__orig_val__55609,_STAR_shared_STAR__orig_val__55610,_STAR_instrument_STAR__orig_val__55611,_STAR_parent_STAR__orig_val__55612,_STAR_reconciler_STAR__temp_val__55613,_STAR_depth_STAR__temp_val__55614,_STAR_shared_STAR__temp_val__55615,_STAR_instrument_STAR__temp_val__55616,_STAR_parent_STAR__temp_val__55617,this$,this__52659__auto__,x55607_56335))
;
return iter__4523__auto__(cljs.core.sort.cljs$core$IFn$_invoke$arity$1(attr_input_in));
})();
return (com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2(G__55652,G__55653) : com.wsscode.pathom.viz.ui.kit.panel.call(null,G__55652,G__55653));
})():null)], 0))], 0))], 0));
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__55612;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__55611;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__55610;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__55609;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__55608;
}});})(x55607_56335))
;

x55607_56335.initLocalState = ((function (x55607_56335){
return (function (){
var this$ = this;
var ret__52634__auto__ = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"graph-comm","graph-comm",-744729650),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null),new cljs.core.Keyword(null,"select-resolver","select-resolver",43705318),((function (this$,x55607_56335){
return (function (p__55658){
var map__55659 = p__55658;
var map__55659__$1 = (((((!((map__55659 == null))))?(((((map__55659.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55659.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55659):map__55659);
var resolvers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55659__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","resolvers","com.wsscode.pathom.viz.index-explorer/resolvers",-1064744669));
var map__55661 = fulcro.client.primitives.get_computed.cljs$core$IFn$_invoke$arity$1(fulcro.client.primitives.props(this$));
var map__55661__$1 = (((((!((map__55661 == null))))?(((((map__55661.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55661.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55661):map__55661);
var on_select_resolver = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55661__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","on-select-resolver","com.wsscode.pathom.viz.index-explorer/on-select-resolver",1600914463));
var G__55663 = cljs.core.first(resolvers);
return (on_select_resolver.cljs$core$IFn$_invoke$arity$1 ? on_select_resolver.cljs$core$IFn$_invoke$arity$1(G__55663) : on_select_resolver.call(null,G__55663));
});})(this$,x55607_56335))
], null);
var obj55665 = ({"fulcro$state":ret__52634__auto__});
return obj55665;
});})(x55607_56335))
;


com.wsscode.pathom.viz.index_explorer.AttributeView.prototype.constructor = com.wsscode.pathom.viz.index_explorer.AttributeView;

com.wsscode.pathom.viz.index_explorer.AttributeView.prototype.constructor.displayName = "com.wsscode.pathom.viz.index-explorer/AttributeView";

com.wsscode.pathom.viz.index_explorer.AttributeView.prototype.fulcro$isComponent = true;

var x55666_56340 = com.wsscode.pathom.viz.index_explorer.AttributeView;
x55666_56340.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x55666_56340.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x55666_56340){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"flex","flex",-1425124628),"1",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column",new cljs.core.Keyword(null,"display","display",242065432),"flex"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".title",".title",-416997657),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),com.wsscode.pathom.viz.index_explorer.color_attribute], null),com.wsscode.pathom.viz.ui.kit.css_header,com.wsscode.pathom.viz.ui.kit.text_base], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".toolbar",".toolbar",968457325),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"16px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".show-graph",".show-graph",1780476669),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"padding","padding",1660304693),"8px",new cljs.core.Keyword(null,"font-family","font-family",-667419874),com.wsscode.pathom.viz.ui.kit.font_base,new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1.1rem"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".graph-options",".graph-options",1009499042),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.9rem"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.viz.ui.kit.component_class(com.wsscode.pathom.viz.ui.kit.ToggleAction,new cljs.core.Keyword(null,".container",".container",-1441208944)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"0 2px"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".data-list",".data-list",949465177),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"white-space","white-space",-707351930),"nowrap",new cljs.core.Keyword(null,"box-sizing","box-sizing",-1956090239),"border-box",new cljs.core.Keyword(null,"width","width",-384071477),"50%",new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),"12px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".data-list-right",".data-list-right",-1849926935),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"white-space","white-space",-707351930),"nowrap",new cljs.core.Keyword(null,"width","width",-384071477),"50%",new cljs.core.Keyword(null,"box-sizing","box-sizing",-1956090239),"border-box",new cljs.core.Keyword(null,"padding","padding",1660304693),"0 12px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".graph",".graph",-327673667),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"height","height",1025178622),"400px",new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"stretch",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".columns",".columns",-1833892286),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex","flex",-1425124628),"1"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font","font",-1506159249),"bold 16px Verdana, Helvetica, Arial, sans-serif"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".links-container",".links-container",-1347961892),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:hover","&:hover",-852658855),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".links-display",".links-display",-2102960556),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"block"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".links-display",".links-display",-2102960556),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"none",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"16px"], null)], null)], null);
});})(x55666_56340))
;

x55666_56340.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x55666_56340){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.viz.index_explorer.AttributeGraph,com.wsscode.pathom.viz.ui.kit.ToggleAction,com.wsscode.pathom.viz.index_explorer.ExamplesPanel], null);
});})(x55666_56340))
;

x55666_56340.fulcro$client$primitives$IPreMerge$ = cljs.core.PROTOCOL_SENTINEL;

x55666_56340.fulcro$client$primitives$IPreMerge$pre_merge_STAR_$arity$2 = ((function (x55666_56340){
return (function (this$,p__55667){
var map__55668 = p__55667;
var map__55668__$1 = (((((!((map__55668 == null))))?(((((map__55668.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55668.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55668):map__55668);
var current_normalized = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55668__$1,new cljs.core.Keyword(null,"current-normalized","current-normalized",851723724));
var data_tree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55668__$1,new cljs.core.Keyword(null,"data-tree","data-tree",1311167582));
var this$__$1 = this;
var attr = (function (){var or__4131__auto__ = new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075).cljs$core$IFn$_invoke$arity$1(data_tree);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075).cljs$core$IFn$_invoke$arity$1(current_normalized);
}
})();
var attr_provides = (function (){var or__4131__auto__ = new cljs.core.Keyword("com.wsscode.pathom.connect","attr-provides","com.wsscode.pathom.connect/attr-provides",-474523918).cljs$core$IFn$_invoke$arity$1(data_tree);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword("com.wsscode.pathom.connect","attr-provides","com.wsscode.pathom.connect/attr-provides",-474523918).cljs$core$IFn$_invoke$arity$1(current_normalized);
}
})();
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","show-graph?","com.wsscode.pathom.viz.index-explorer/show-graph?",-1999932552),false,new cljs.core.Keyword(">","graph-panel",">/graph-panel",-700694737),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),attr], null),new cljs.core.Keyword(">","reach-via",">/reach-via",725397135),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),attr], null),new cljs.core.Keyword(">","mutation-param-in",">/mutation-param-in",-1050138308),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),attr], null),new cljs.core.Keyword(">","mutation-output-in",">/mutation-output-in",463836271),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),attr], null),new cljs.core.Keyword("ui","provides-tree","ui/provides-tree",675380755),cljs.core.PersistentArrayMap.EMPTY], null),current_normalized,data_tree,(cljs.core.truth_(attr_provides)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","provides-tree-source","ui/provides-tree-source",874544325),com.wsscode.pathom.viz.index_explorer.attr_provides__GT_tree(attr_provides)], null):null)], 0));
});})(x55666_56340))
;

x55666_56340.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x55666_56340.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x55666_56340){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x55666_56340))
;

x55666_56340.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x55666_56340.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x55666_56340){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-combinations","com.wsscode.pathom.connect/attr-combinations",-1163990806),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-input-in","com.wsscode.pathom.connect/attr-input-in",-2112912399),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-output-in","com.wsscode.pathom.connect/attr-output-in",-62045610),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-mutation-param-in","com.wsscode.pathom.connect/attr-mutation-param-in",-1474382671),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-mutation-output-in","com.wsscode.pathom.connect/attr-mutation-output-in",1122448739),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","show-graph?","com.wsscode.pathom.viz.index-explorer/show-graph?",-1999932552),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via","com.wsscode.pathom.connect/attr-reach-via",-483841559),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-provides","com.wsscode.pathom.connect/attr-provides",-474523918),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(">","graph-panel",">/graph-panel",-700694737),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.AttributeGraphPanel)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(">","reach-via",">/reach-via",725397135),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.AttributeInfoReachVia)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(">","mutation-param-in",">/mutation-param-in",-1050138308),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationParamIn)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(">","mutation-output-in",">/mutation-output-in",463836271),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationOutputIn)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","provides-tree","ui/provides-tree",675380755),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.ui.expandable_tree.ExpandableTree)], null),new cljs.core.Keyword("ui","provides-tree-source","ui/provides-tree-source",874544325)], null);
});})(x55666_56340))
;


var x55670_56341 = com.wsscode.pathom.viz.index_explorer.AttributeView.prototype;
x55670_56341.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x55670_56341.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x55670_56341){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"flex","flex",-1425124628),"1",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column",new cljs.core.Keyword(null,"display","display",242065432),"flex"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".title",".title",-416997657),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),com.wsscode.pathom.viz.index_explorer.color_attribute], null),com.wsscode.pathom.viz.ui.kit.css_header,com.wsscode.pathom.viz.ui.kit.text_base], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".toolbar",".toolbar",968457325),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"16px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".show-graph",".show-graph",1780476669),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"padding","padding",1660304693),"8px",new cljs.core.Keyword(null,"font-family","font-family",-667419874),com.wsscode.pathom.viz.ui.kit.font_base,new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1.1rem"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".graph-options",".graph-options",1009499042),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.9rem"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.viz.ui.kit.component_class(com.wsscode.pathom.viz.ui.kit.ToggleAction,new cljs.core.Keyword(null,".container",".container",-1441208944)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"0 2px"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".data-list",".data-list",949465177),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"white-space","white-space",-707351930),"nowrap",new cljs.core.Keyword(null,"box-sizing","box-sizing",-1956090239),"border-box",new cljs.core.Keyword(null,"width","width",-384071477),"50%",new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),"12px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".data-list-right",".data-list-right",-1849926935),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"white-space","white-space",-707351930),"nowrap",new cljs.core.Keyword(null,"width","width",-384071477),"50%",new cljs.core.Keyword(null,"box-sizing","box-sizing",-1956090239),"border-box",new cljs.core.Keyword(null,"padding","padding",1660304693),"0 12px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".graph",".graph",-327673667),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"height","height",1025178622),"400px",new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"stretch",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".columns",".columns",-1833892286),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex","flex",-1425124628),"1"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font","font",-1506159249),"bold 16px Verdana, Helvetica, Arial, sans-serif"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".links-container",".links-container",-1347961892),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:hover","&:hover",-852658855),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".links-display",".links-display",-2102960556),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"block"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".links-display",".links-display",-2102960556),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"none",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"16px"], null)], null)], null);
});})(x55670_56341))
;

x55670_56341.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x55670_56341){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.viz.index_explorer.AttributeGraph,com.wsscode.pathom.viz.ui.kit.ToggleAction,com.wsscode.pathom.viz.index_explorer.ExamplesPanel], null);
});})(x55670_56341))
;

x55670_56341.fulcro$client$primitives$IPreMerge$ = cljs.core.PROTOCOL_SENTINEL;

x55670_56341.fulcro$client$primitives$IPreMerge$pre_merge_STAR_$arity$2 = ((function (x55670_56341){
return (function (this$,p__55671){
var map__55672 = p__55671;
var map__55672__$1 = (((((!((map__55672 == null))))?(((((map__55672.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55672.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55672):map__55672);
var current_normalized = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55672__$1,new cljs.core.Keyword(null,"current-normalized","current-normalized",851723724));
var data_tree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55672__$1,new cljs.core.Keyword(null,"data-tree","data-tree",1311167582));
var this$__$1 = this;
var attr = (function (){var or__4131__auto__ = new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075).cljs$core$IFn$_invoke$arity$1(data_tree);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075).cljs$core$IFn$_invoke$arity$1(current_normalized);
}
})();
var attr_provides = (function (){var or__4131__auto__ = new cljs.core.Keyword("com.wsscode.pathom.connect","attr-provides","com.wsscode.pathom.connect/attr-provides",-474523918).cljs$core$IFn$_invoke$arity$1(data_tree);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword("com.wsscode.pathom.connect","attr-provides","com.wsscode.pathom.connect/attr-provides",-474523918).cljs$core$IFn$_invoke$arity$1(current_normalized);
}
})();
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","show-graph?","com.wsscode.pathom.viz.index-explorer/show-graph?",-1999932552),false,new cljs.core.Keyword(">","graph-panel",">/graph-panel",-700694737),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),attr], null),new cljs.core.Keyword(">","reach-via",">/reach-via",725397135),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),attr], null),new cljs.core.Keyword(">","mutation-param-in",">/mutation-param-in",-1050138308),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),attr], null),new cljs.core.Keyword(">","mutation-output-in",">/mutation-output-in",463836271),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),attr], null),new cljs.core.Keyword("ui","provides-tree","ui/provides-tree",675380755),cljs.core.PersistentArrayMap.EMPTY], null),current_normalized,data_tree,(cljs.core.truth_(attr_provides)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","provides-tree-source","ui/provides-tree-source",874544325),com.wsscode.pathom.viz.index_explorer.attr_provides__GT_tree(attr_provides)], null):null)], 0));
});})(x55670_56341))
;

x55670_56341.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x55670_56341.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x55670_56341){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x55670_56341))
;

x55670_56341.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x55670_56341.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x55670_56341){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-combinations","com.wsscode.pathom.connect/attr-combinations",-1163990806),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-input-in","com.wsscode.pathom.connect/attr-input-in",-2112912399),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-output-in","com.wsscode.pathom.connect/attr-output-in",-62045610),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-mutation-param-in","com.wsscode.pathom.connect/attr-mutation-param-in",-1474382671),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-mutation-output-in","com.wsscode.pathom.connect/attr-mutation-output-in",1122448739),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","show-graph?","com.wsscode.pathom.viz.index-explorer/show-graph?",-1999932552),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via","com.wsscode.pathom.connect/attr-reach-via",-483841559),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-provides","com.wsscode.pathom.connect/attr-provides",-474523918),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(">","graph-panel",">/graph-panel",-700694737),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.AttributeGraphPanel)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(">","reach-via",">/reach-via",725397135),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.AttributeInfoReachVia)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(">","mutation-param-in",">/mutation-param-in",-1050138308),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationParamIn)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(">","mutation-output-in",">/mutation-output-in",463836271),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationOutputIn)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","provides-tree","ui/provides-tree",675380755),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.ui.expandable_tree.ExpandableTree)], null),new cljs.core.Keyword("ui","provides-tree-source","ui/provides-tree-source",874544325)], null);
});})(x55670_56341))
;


com.wsscode.pathom.viz.index_explorer.AttributeView.cljs$lang$type = true;

com.wsscode.pathom.viz.index_explorer.AttributeView.cljs$lang$ctorStr = "com.wsscode.pathom.viz.index-explorer/AttributeView";

com.wsscode.pathom.viz.index_explorer.AttributeView.cljs$lang$ctorPrWriter = (function (this__53744__auto__,writer__53745__auto__,opt__53746__auto__){
return cljs.core._write(writer__53745__auto__,"com.wsscode.pathom.viz.index-explorer/AttributeView");
});
goog.object.set(com.wsscode.pathom.viz.index_explorer.AttributeView,"contextType",com.wsscode.pathom.viz.index_explorer.ExtensionContext);
com.wsscode.pathom.viz.index_explorer.attribute_view = fulcro.client.primitives.computed_factory.cljs$core$IFn$_invoke$arity$2(com.wsscode.pathom.viz.index_explorer.AttributeView,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075)], null));
com.wsscode.pathom.viz.index_explorer.out_all_attributes = (function com$wsscode$pathom$viz$index_explorer$out_all_attributes(p__55674,input){
var map__55675 = p__55674;
var map__55675__$1 = (((((!((map__55675 == null))))?(((((map__55675.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55675.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55675):map__55675);
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55675__$1,new cljs.core.Keyword(null,"children","children",-940561982));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (map__55675,map__55675__$1,children){
return (function (attrs,p__55677){
var map__55678 = p__55677;
var map__55678__$1 = (((((!((map__55678 == null))))?(((((map__55678.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55678.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55678):map__55678);
var node = map__55678__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55678__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var children__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55678__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var G__55680 = ((cljs.core.contains_QMARK_(input,key))?attrs:cljs.core.conj.cljs$core$IFn$_invoke$arity$2(attrs,key));
if(cljs.core.truth_(children__$1)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(G__55680,(com.wsscode.pathom.viz.index_explorer.out_all_attributes.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.out_all_attributes.cljs$core$IFn$_invoke$arity$2(node,input) : com.wsscode.pathom.viz.index_explorer.out_all_attributes.call(null,node,input)));
} else {
return G__55680;
}
});})(map__55675,map__55675__$1,children))
,cljs.core.PersistentHashSet.EMPTY,children);
});
if((typeof com !== 'undefined') && (typeof com.wsscode !== 'undefined') && (typeof com.wsscode.pathom !== 'undefined') && (typeof com.wsscode.pathom.viz !== 'undefined') && (typeof com.wsscode.pathom.viz.index_explorer !== 'undefined') && (typeof com.wsscode.pathom.viz.index_explorer.ResolverView !== 'undefined')){
} else {
/**
 * @constructor
 * @nocollapse
 */
com.wsscode.pathom.viz.index_explorer.ResolverView = (function com$wsscode$pathom$viz$index_explorer$ResolverView(){
var this__53741__auto__ = this;
React.Component.apply(this__53741__auto__,arguments);

if((!((this__53741__auto__.initLocalState == null)))){
this__53741__auto__.state = this__53741__auto__.initLocalState();
} else {
this__53741__auto__.state = ({});
}

return this__53741__auto__;
});

goog.object.extend(com.wsscode.pathom.viz.index_explorer.ResolverView.prototype,React.Component.prototype,fulcro.client.primitives.default_component_prototype);
}

fulcro.client.primitives._register_component_BANG_(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","ResolverView","com.wsscode.pathom.viz.index-explorer/ResolverView",1233559847),com.wsscode.pathom.viz.index_explorer.ResolverView);

var x55684_56342 = com.wsscode.pathom.viz.index_explorer.ResolverView.prototype;
x55684_56342.render = ((function (x55684_56342){
return (function (){
var this__52659__auto__ = this;
var this$ = this__52659__auto__;
var _STAR_reconciler_STAR__orig_val__55685 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__55686 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__55687 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__55688 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__55689 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__55690 = fulcro.client.primitives.get_reconciler(this__52659__auto__);
var _STAR_depth_STAR__temp_val__55691 = (fulcro.client.primitives.depth(this__52659__auto__) + (1));
var _STAR_shared_STAR__temp_val__55692 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__52659__auto__);
var _STAR_instrument_STAR__temp_val__55693 = fulcro.client.primitives.instrument(this__52659__auto__);
var _STAR_parent_STAR__temp_val__55694 = this__52659__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__55690;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__55691;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__55692;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__55693;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__55694;

try{var map__55695 = fulcro.client.primitives.props(this$);
var map__55695__$1 = (((((!((map__55695 == null))))?(((((map__55695.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55695.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55695):map__55695);
var sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55695__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581));
var input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55695__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121));
var output = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55695__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303));
var batch_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55695__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","batch?","com.wsscode.pathom.connect/batch?",-427062659));
var output_tree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55695__$1,new cljs.core.Keyword("ui","output-tree","ui/output-tree",-491226343));
var map__55696 = fulcro.client.primitives.get_computed.cljs$core$IFn$_invoke$arity$1(this$);
var map__55696__$1 = (((((!((map__55696 == null))))?(((((map__55696.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55696.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55696):map__55696);
var computed = map__55696__$1;
var on_select_attribute = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55696__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","on-select-attribute","com.wsscode.pathom.viz.index-explorer/on-select-attribute",2006419034));
var attributes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55696__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attributes","com.wsscode.pathom.viz.index-explorer/attributes",-67264281));
var css = fulcro_css.css_implementation.get_classnames(com.wsscode.pathom.viz.index_explorer.ResolverView);
var input_SINGLEQUOTE_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(input)))?cljs.core.first(input):input);
var computed__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(computed,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","graph-comm","com.wsscode.pathom.viz.index-explorer/graph-comm",-735750087),fulcro.client.primitives.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"graph-comm","graph-comm",-744729650)));
var G__55699 = com.wsscode.pathom.viz.ui.kit.gc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".flex",".flex",-73425686)], 0));
var G__55700 = fulcro.client.localized_dom.h1.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".title",".title",-416997657),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)], 0));
var G__55701 = (function (){var G__55702 = com.wsscode.pathom.viz.ui.kit.gc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".flex",".flex",-73425686),new cljs.core.Keyword(null,".no-scrollbars",".no-scrollbars",2090539071)], 0));
var G__55703 = fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".menu",".menu",986259874),(cljs.core.truth_(batch_QMARK_)?(function (){var G__55705 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","panel-title","com.wsscode.pathom.viz.ui.kit/panel-title",1529445284),"Batch"], null);
var G__55706 = "True";
return (com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2(G__55705,G__55706) : com.wsscode.pathom.viz.ui.kit.panel.call(null,G__55705,G__55706));
})():null),(cljs.core.truth_(input)?(function (){var G__55707 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","panel-title","com.wsscode.pathom.viz.ui.kit/panel-title",1529445284),"Input"], null);
var G__55708 = com.wsscode.pathom.viz.index_explorer.attribute_link(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),input_SINGLEQUOTE_], null),computed__$1);
return (com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2(G__55707,G__55708) : com.wsscode.pathom.viz.ui.kit.panel.call(null,G__55707,G__55708));
})():null),(cljs.core.truth_(output)?(function (){var G__55709 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","panel-title","com.wsscode.pathom.viz.ui.kit/panel-title",1529445284),"Output"], null);
var G__55710 = (function (){var G__55711 = output_tree;
var G__55712 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.viz.ui.expandable-tree","root","com.wsscode.pathom.viz.ui.expandable-tree/root",-788021653),cljs.core.update.cljs$core$IFn$_invoke$arity$3(edn_query_language.core.query__GT_ast(output),new cljs.core.Keyword(null,"children","children",-940561982),((function (G__55711,G__55709,G__55702,G__55699,G__55700,input_SINGLEQUOTE_,computed__$1,map__55695,map__55695__$1,sym,input,output,batch_QMARK_,output_tree,map__55696,map__55696__$1,computed,on_select_attribute,attributes,css,_STAR_reconciler_STAR__orig_val__55685,_STAR_depth_STAR__orig_val__55686,_STAR_shared_STAR__orig_val__55687,_STAR_instrument_STAR__orig_val__55688,_STAR_parent_STAR__orig_val__55689,_STAR_reconciler_STAR__temp_val__55690,_STAR_depth_STAR__temp_val__55691,_STAR_shared_STAR__temp_val__55692,_STAR_instrument_STAR__temp_val__55693,_STAR_parent_STAR__temp_val__55694,this$,this__52659__auto__,x55684_56342){
return (function (p1__55681_SHARP_){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(input,new cljs.core.Keyword(null,"key","key",-1516042587)),p1__55681_SHARP_);
});})(G__55711,G__55709,G__55702,G__55699,G__55700,input_SINGLEQUOTE_,computed__$1,map__55695,map__55695__$1,sym,input,output,batch_QMARK_,output_tree,map__55696,map__55696__$1,computed,on_select_attribute,attributes,css,_STAR_reconciler_STAR__orig_val__55685,_STAR_depth_STAR__orig_val__55686,_STAR_shared_STAR__orig_val__55687,_STAR_instrument_STAR__orig_val__55688,_STAR_parent_STAR__orig_val__55689,_STAR_reconciler_STAR__temp_val__55690,_STAR_depth_STAR__temp_val__55691,_STAR_shared_STAR__temp_val__55692,_STAR_instrument_STAR__temp_val__55693,_STAR_parent_STAR__temp_val__55694,this$,this__52659__auto__,x55684_56342))
),new cljs.core.Keyword("com.wsscode.pathom.viz.ui.expandable-tree","render","com.wsscode.pathom.viz.ui.expandable-tree/render",918872218),fulcro.client.primitives.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"render","render",-1408033454)),new cljs.core.Keyword("com.wsscode.pathom.viz.ui.expandable-tree","sort-by","com.wsscode.pathom.viz.ui.expandable-tree/sort-by",1511051281),new cljs.core.Keyword(null,"key","key",-1516042587)], null);
return (com.wsscode.pathom.viz.ui.expandable_tree.expandable_tree.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.expandable_tree.expandable_tree.cljs$core$IFn$_invoke$arity$2(G__55711,G__55712) : com.wsscode.pathom.viz.ui.expandable_tree.expandable_tree.call(null,G__55711,G__55712));
})();
return (com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2(G__55709,G__55710) : com.wsscode.pathom.viz.ui.kit.panel.call(null,G__55709,G__55710));
})():null),com.wsscode.pathom.viz.index_explorer.render_plugin_extension(this$,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","plugin-render-to-resolver-menu","com.wsscode.pathom.viz.index-explorer/plugin-render-to-resolver-menu",-1265412227))], 0));
var G__55704 = (cljs.core.truth_(input)?(function (){var resolver_attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(com.wsscode.pathom.viz.index_explorer.out_all_attributes(edn_query_language.core.query__GT_ast(output),input),input_SINGLEQUOTE_);
var attrs = cljs.core.vals(cljs.core.update.cljs$core$IFn$_invoke$arity$5(cljs.core.select_keys(com.wsscode.pathom.viz.helpers.index_by(new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),attributes),resolver_attrs),input_SINGLEQUOTE_,cljs.core.assoc,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","center?","com.wsscode.pathom.viz.index-explorer/center?",-314133194),true));
var G__55713 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attributes","com.wsscode.pathom.viz.index-explorer/attributes",-67264281),attrs,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","graph-comm","com.wsscode.pathom.viz.index-explorer/graph-comm",-735750087),fulcro.client.primitives.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"graph-comm","graph-comm",-744729650)),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","on-show-details","com.wsscode.pathom.viz.index-explorer/on-show-details",-322180105),on_select_attribute,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","on-click-edge","com.wsscode.pathom.viz.index-explorer/on-click-edge",810811642),fulcro.client.primitives.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"select-resolver","select-resolver",43705318))], null);
return (com.wsscode.pathom.viz.index_explorer.attribute_graph.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom.viz.index_explorer.attribute_graph.cljs$core$IFn$_invoke$arity$1(G__55713) : com.wsscode.pathom.viz.index_explorer.attribute_graph.call(null,G__55713));
})():null);
return (com.wsscode.pathom.viz.ui.kit.row.cljs$core$IFn$_invoke$arity$3 ? com.wsscode.pathom.viz.ui.kit.row.cljs$core$IFn$_invoke$arity$3(G__55702,G__55703,G__55704) : com.wsscode.pathom.viz.ui.kit.row.call(null,G__55702,G__55703,G__55704));
})();
return (com.wsscode.pathom.viz.ui.kit.column.cljs$core$IFn$_invoke$arity$3 ? com.wsscode.pathom.viz.ui.kit.column.cljs$core$IFn$_invoke$arity$3(G__55699,G__55700,G__55701) : com.wsscode.pathom.viz.ui.kit.column.call(null,G__55699,G__55700,G__55701));
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__55689;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__55688;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__55687;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__55686;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__55685;
}});})(x55684_56342))
;

x55684_56342.initLocalState = ((function (x55684_56342){
return (function (){
var this$ = this;
var ret__52634__auto__ = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"graph-comm","graph-comm",-744729650),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null),new cljs.core.Keyword(null,"select-resolver","select-resolver",43705318),((function (this$,x55684_56342){
return (function (p__55714){
var map__55715 = p__55714;
var map__55715__$1 = (((((!((map__55715 == null))))?(((((map__55715.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55715.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55715):map__55715);
var resolvers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55715__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","resolvers","com.wsscode.pathom.viz.index-explorer/resolvers",-1064744669));
var map__55717 = fulcro.client.primitives.get_computed.cljs$core$IFn$_invoke$arity$1(fulcro.client.primitives.props(this$));
var map__55717__$1 = (((((!((map__55717 == null))))?(((((map__55717.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55717.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55717):map__55717);
var on_select_resolver = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55717__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","on-select-resolver","com.wsscode.pathom.viz.index-explorer/on-select-resolver",1600914463));
var G__55719 = cljs.core.first(resolvers);
return (on_select_resolver.cljs$core$IFn$_invoke$arity$1 ? on_select_resolver.cljs$core$IFn$_invoke$arity$1(G__55719) : on_select_resolver.call(null,G__55719));
});})(this$,x55684_56342))
,new cljs.core.Keyword(null,"render","render",-1408033454),((function (this$,x55684_56342){
return (function (p__55720){
var map__55721 = p__55720;
var map__55721__$1 = (((((!((map__55721 == null))))?(((((map__55721.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55721.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55721):map__55721);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55721__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var computed = fulcro.client.primitives.get_computed.cljs$core$IFn$_invoke$arity$1(fulcro.client.primitives.props(this$));
var computed__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(computed,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","graph-comm","com.wsscode.pathom.viz.index-explorer/graph-comm",-735750087),fulcro.client.primitives.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"graph-comm","graph-comm",-744729650)));
return com.wsscode.pathom.viz.index_explorer.attribute_link(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),key], null),computed__$1);
});})(this$,x55684_56342))
], null);
var obj55724 = ({"fulcro$state":ret__52634__auto__});
return obj55724;
});})(x55684_56342))
;


com.wsscode.pathom.viz.index_explorer.ResolverView.prototype.constructor = com.wsscode.pathom.viz.index_explorer.ResolverView;

com.wsscode.pathom.viz.index_explorer.ResolverView.prototype.constructor.displayName = "com.wsscode.pathom.viz.index-explorer/ResolverView";

com.wsscode.pathom.viz.index_explorer.ResolverView.prototype.fulcro$isComponent = true;

var x55725_56343 = com.wsscode.pathom.viz.index_explorer.ResolverView;
x55725_56343.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x55725_56343.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x55725_56343){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".title",".title",-416997657),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),com.wsscode.pathom.viz.index_explorer.color_resolver], null),com.wsscode.pathom.viz.ui.kit.css_header,com.wsscode.pathom.viz.ui.kit.text_base], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".menu",".menu",986259874),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"white-space","white-space",-707351930),"nowrap",new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),"12px",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"auto"], null)], null)], null);
});})(x55725_56343))
;

x55725_56343.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x55725_56343){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x55725_56343))
;

x55725_56343.fulcro$client$primitives$IPreMerge$ = cljs.core.PROTOCOL_SENTINEL;

x55725_56343.fulcro$client$primitives$IPreMerge$pre_merge_STAR_$arity$2 = ((function (x55725_56343){
return (function (this$,p__55726){
var map__55727 = p__55726;
var map__55727__$1 = (((((!((map__55727 == null))))?(((((map__55727.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55727.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55727):map__55727);
var current_normalized = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55727__$1,new cljs.core.Keyword(null,"current-normalized","current-normalized",851723724));
var data_tree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55727__$1,new cljs.core.Keyword(null,"data-tree","data-tree",1311167582));
var this$__$1 = this;
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","output-tree","ui/output-tree",-491226343),cljs.core.PersistentArrayMap.EMPTY], null),current_normalized,data_tree], 0));
});})(x55725_56343))
;

x55725_56343.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x55725_56343.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x55725_56343){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x55725_56343))
;

x55725_56343.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x55725_56343.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x55725_56343){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","batch?","com.wsscode.pathom.connect/batch?",-427062659),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","output-tree","ui/output-tree",-491226343),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.ui.expandable_tree.ExpandableTree)], null)], null);
});})(x55725_56343))
;


var x55729_56344 = com.wsscode.pathom.viz.index_explorer.ResolverView.prototype;
x55729_56344.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x55729_56344.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x55729_56344){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".title",".title",-416997657),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),com.wsscode.pathom.viz.index_explorer.color_resolver], null),com.wsscode.pathom.viz.ui.kit.css_header,com.wsscode.pathom.viz.ui.kit.text_base], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".menu",".menu",986259874),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"white-space","white-space",-707351930),"nowrap",new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),"12px",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"auto"], null)], null)], null);
});})(x55729_56344))
;

x55729_56344.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x55729_56344){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x55729_56344))
;

x55729_56344.fulcro$client$primitives$IPreMerge$ = cljs.core.PROTOCOL_SENTINEL;

x55729_56344.fulcro$client$primitives$IPreMerge$pre_merge_STAR_$arity$2 = ((function (x55729_56344){
return (function (this$,p__55730){
var map__55731 = p__55730;
var map__55731__$1 = (((((!((map__55731 == null))))?(((((map__55731.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55731.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55731):map__55731);
var current_normalized = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55731__$1,new cljs.core.Keyword(null,"current-normalized","current-normalized",851723724));
var data_tree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55731__$1,new cljs.core.Keyword(null,"data-tree","data-tree",1311167582));
var this$__$1 = this;
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","output-tree","ui/output-tree",-491226343),cljs.core.PersistentArrayMap.EMPTY], null),current_normalized,data_tree], 0));
});})(x55729_56344))
;

x55729_56344.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x55729_56344.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x55729_56344){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x55729_56344))
;

x55729_56344.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x55729_56344.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x55729_56344){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","batch?","com.wsscode.pathom.connect/batch?",-427062659),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","output-tree","ui/output-tree",-491226343),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.ui.expandable_tree.ExpandableTree)], null)], null);
});})(x55729_56344))
;


com.wsscode.pathom.viz.index_explorer.ResolverView.cljs$lang$type = true;

com.wsscode.pathom.viz.index_explorer.ResolverView.cljs$lang$ctorStr = "com.wsscode.pathom.viz.index-explorer/ResolverView";

com.wsscode.pathom.viz.index_explorer.ResolverView.cljs$lang$ctorPrWriter = (function (this__53744__auto__,writer__53745__auto__,opt__53746__auto__){
return cljs.core._write(writer__53745__auto__,"com.wsscode.pathom.viz.index-explorer/ResolverView");
});
goog.object.set(com.wsscode.pathom.viz.index_explorer.ResolverView,"contextType",com.wsscode.pathom.viz.index_explorer.ExtensionContext);
com.wsscode.pathom.viz.index_explorer.resolver_view = fulcro.client.primitives.factory.cljs$core$IFn$_invoke$arity$2(com.wsscode.pathom.viz.index_explorer.ResolverView,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581)], null));
if((typeof com !== 'undefined') && (typeof com.wsscode !== 'undefined') && (typeof com.wsscode.pathom !== 'undefined') && (typeof com.wsscode.pathom.viz !== 'undefined') && (typeof com.wsscode.pathom.viz.index_explorer !== 'undefined') && (typeof com.wsscode.pathom.viz.index_explorer.MutationView !== 'undefined')){
} else {
/**
 * @constructor
 * @nocollapse
 */
com.wsscode.pathom.viz.index_explorer.MutationView = (function com$wsscode$pathom$viz$index_explorer$MutationView(){
var this__53741__auto__ = this;
React.Component.apply(this__53741__auto__,arguments);

if((!((this__53741__auto__.initLocalState == null)))){
this__53741__auto__.state = this__53741__auto__.initLocalState();
} else {
this__53741__auto__.state = ({});
}

return this__53741__auto__;
});

goog.object.extend(com.wsscode.pathom.viz.index_explorer.MutationView.prototype,React.Component.prototype,fulcro.client.primitives.default_component_prototype);
}

fulcro.client.primitives._register_component_BANG_(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","MutationView","com.wsscode.pathom.viz.index-explorer/MutationView",1198577335),com.wsscode.pathom.viz.index_explorer.MutationView);

var x55735_56345 = com.wsscode.pathom.viz.index_explorer.MutationView.prototype;
x55735_56345.render = ((function (x55735_56345){
return (function (){
var this__52659__auto__ = this;
var this$ = this__52659__auto__;
var _STAR_reconciler_STAR__orig_val__55736 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__55737 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__55738 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__55739 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__55740 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__55741 = fulcro.client.primitives.get_reconciler(this__52659__auto__);
var _STAR_depth_STAR__temp_val__55742 = (fulcro.client.primitives.depth(this__52659__auto__) + (1));
var _STAR_shared_STAR__temp_val__55743 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__52659__auto__);
var _STAR_instrument_STAR__temp_val__55744 = fulcro.client.primitives.instrument(this__52659__auto__);
var _STAR_parent_STAR__temp_val__55745 = this__52659__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__55741;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__55742;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__55743;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__55744;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__55745;

try{var map__55746 = fulcro.client.primitives.props(this$);
var map__55746__$1 = (((((!((map__55746 == null))))?(((((map__55746.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55746.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55746):map__55746);
var sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55746__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55746__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795));
var output = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55746__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303));
var mutation_params_tree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55746__$1,new cljs.core.Keyword("ui","mutation-params-tree","ui/mutation-params-tree",-1729279365));
var mutation_output_tree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55746__$1,new cljs.core.Keyword("ui","mutation-output-tree","ui/mutation-output-tree",-208190980));
var G__55748 = com.wsscode.pathom.viz.ui.kit.gc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".flex",".flex",-73425686)], 0));
var G__55749 = fulcro.client.localized_dom.h1.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".title",".title",-416997657),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)], 0));
var G__55750 = (function (){var G__55751 = com.wsscode.pathom.viz.ui.kit.gc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".flex",".flex",-73425686),new cljs.core.Keyword(null,".scrollbars",".scrollbars",-1193970120),new cljs.core.Keyword(null,".nowrap",".nowrap",-784360447)], 0));
var G__55752 = fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.wsscode.pathom.viz.ui.kit.gc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".flex",".flex",-73425686)], 0)),(cljs.core.truth_(params)?(function (){var G__55755 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","panel-title","com.wsscode.pathom.viz.ui.kit/panel-title",1529445284),"Params"], null);
var G__55756 = (function (){var G__55757 = mutation_params_tree;
var G__55758 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.viz.ui.expandable-tree","root","com.wsscode.pathom.viz.ui.expandable-tree/root",-788021653),edn_query_language.core.query__GT_ast(params),new cljs.core.Keyword("com.wsscode.pathom.viz.ui.expandable-tree","render","com.wsscode.pathom.viz.ui.expandable-tree/render",918872218),fulcro.client.primitives.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"render","render",-1408033454)),new cljs.core.Keyword("com.wsscode.pathom.viz.ui.expandable-tree","sort-by","com.wsscode.pathom.viz.ui.expandable-tree/sort-by",1511051281),new cljs.core.Keyword(null,"key","key",-1516042587)], null);
return (com.wsscode.pathom.viz.ui.expandable_tree.expandable_tree.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.expandable_tree.expandable_tree.cljs$core$IFn$_invoke$arity$2(G__55757,G__55758) : com.wsscode.pathom.viz.ui.expandable_tree.expandable_tree.call(null,G__55757,G__55758));
})();
return (com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2(G__55755,G__55756) : com.wsscode.pathom.viz.ui.kit.panel.call(null,G__55755,G__55756));
})():null),com.wsscode.pathom.viz.index_explorer.render_plugin_extension(this$,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","plugin-render-to-mutation-view-left","com.wsscode.pathom.viz.index-explorer/plugin-render-to-mutation-view-left",-356992926))], 0));
var G__55753 = fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"24px"], null)], null)], 0));
var G__55754 = fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.wsscode.pathom.viz.ui.kit.gc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".flex",".flex",-73425686)], 0)),(cljs.core.truth_(output)?(function (){var G__55759 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","panel-title","com.wsscode.pathom.viz.ui.kit/panel-title",1529445284),"Output"], null);
var G__55760 = (function (){var G__55761 = mutation_output_tree;
var G__55762 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.viz.ui.expandable-tree","root","com.wsscode.pathom.viz.ui.expandable-tree/root",-788021653),edn_query_language.core.query__GT_ast(output),new cljs.core.Keyword("com.wsscode.pathom.viz.ui.expandable-tree","render","com.wsscode.pathom.viz.ui.expandable-tree/render",918872218),fulcro.client.primitives.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"render","render",-1408033454)),new cljs.core.Keyword("com.wsscode.pathom.viz.ui.expandable-tree","sort-by","com.wsscode.pathom.viz.ui.expandable-tree/sort-by",1511051281),new cljs.core.Keyword(null,"key","key",-1516042587)], null);
return (com.wsscode.pathom.viz.ui.expandable_tree.expandable_tree.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.expandable_tree.expandable_tree.cljs$core$IFn$_invoke$arity$2(G__55761,G__55762) : com.wsscode.pathom.viz.ui.expandable_tree.expandable_tree.call(null,G__55761,G__55762));
})();
return (com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2(G__55759,G__55760) : com.wsscode.pathom.viz.ui.kit.panel.call(null,G__55759,G__55760));
})():null),com.wsscode.pathom.viz.index_explorer.render_plugin_extension(this$,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","plugin-render-to-mutation-view-right","com.wsscode.pathom.viz.index-explorer/plugin-render-to-mutation-view-right",1791875010))], 0));
return (com.wsscode.pathom.viz.ui.kit.row.cljs$core$IFn$_invoke$arity$4 ? com.wsscode.pathom.viz.ui.kit.row.cljs$core$IFn$_invoke$arity$4(G__55751,G__55752,G__55753,G__55754) : com.wsscode.pathom.viz.ui.kit.row.call(null,G__55751,G__55752,G__55753,G__55754));
})();
return (com.wsscode.pathom.viz.ui.kit.column.cljs$core$IFn$_invoke$arity$3 ? com.wsscode.pathom.viz.ui.kit.column.cljs$core$IFn$_invoke$arity$3(G__55748,G__55749,G__55750) : com.wsscode.pathom.viz.ui.kit.column.call(null,G__55748,G__55749,G__55750));
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__55740;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__55739;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__55738;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__55737;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__55736;
}});})(x55735_56345))
;

x55735_56345.initLocalState = ((function (x55735_56345){
return (function (){
var this$ = this;
var ret__52634__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"render","render",-1408033454),((function (this$,x55735_56345){
return (function (p__55763){
var map__55764 = p__55763;
var map__55764__$1 = (((((!((map__55764 == null))))?(((((map__55764.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55764.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55764):map__55764);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55764__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
return com.wsscode.pathom.viz.index_explorer.attribute_link(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),key], null),fulcro.client.primitives.get_computed.cljs$core$IFn$_invoke$arity$1(fulcro.client.primitives.props(this$)));
});})(this$,x55735_56345))
], null);
var obj55767 = ({"fulcro$state":ret__52634__auto__});
return obj55767;
});})(x55735_56345))
;


com.wsscode.pathom.viz.index_explorer.MutationView.prototype.constructor = com.wsscode.pathom.viz.index_explorer.MutationView;

com.wsscode.pathom.viz.index_explorer.MutationView.prototype.constructor.displayName = "com.wsscode.pathom.viz.index-explorer/MutationView";

com.wsscode.pathom.viz.index_explorer.MutationView.prototype.fulcro$isComponent = true;

var x55768_56346 = com.wsscode.pathom.viz.index_explorer.MutationView;
x55768_56346.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x55768_56346.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x55768_56346){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".title",".title",-416997657),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),com.wsscode.pathom.viz.index_explorer.color_mutation], null),com.wsscode.pathom.viz.ui.kit.css_header,com.wsscode.pathom.viz.ui.kit.text_base], null)], null);
});})(x55768_56346))
;

x55768_56346.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x55768_56346){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x55768_56346))
;

x55768_56346.fulcro$client$primitives$IPreMerge$ = cljs.core.PROTOCOL_SENTINEL;

x55768_56346.fulcro$client$primitives$IPreMerge$pre_merge_STAR_$arity$2 = ((function (x55768_56346){
return (function (this$,p__55769){
var map__55770 = p__55769;
var map__55770__$1 = (((((!((map__55770 == null))))?(((((map__55770.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55770.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55770):map__55770);
var current_normalized = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55770__$1,new cljs.core.Keyword(null,"current-normalized","current-normalized",851723724));
var data_tree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55770__$1,new cljs.core.Keyword(null,"data-tree","data-tree",1311167582));
var this$__$1 = this;
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("ui","mutation-params-tree","ui/mutation-params-tree",-1729279365),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("ui","mutation-output-tree","ui/mutation-output-tree",-208190980),cljs.core.PersistentArrayMap.EMPTY], null),current_normalized,data_tree], 0));
});})(x55768_56346))
;

x55768_56346.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x55768_56346.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x55768_56346){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutation-sym","com.wsscode.pathom.viz.index-explorer/mutation-sym",-191280951),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutation-sym","com.wsscode.pathom.viz.index-explorer/mutation-sym",-191280951).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x55768_56346))
;

x55768_56346.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x55768_56346.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x55768_56346){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutation-sym","com.wsscode.pathom.viz.index-explorer/mutation-sym",-191280951),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","mutation-params-tree","ui/mutation-params-tree",-1729279365),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.ui.expandable_tree.ExpandableTree)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","mutation-output-tree","ui/mutation-output-tree",-208190980),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.ui.expandable_tree.ExpandableTree)], null)], null);
});})(x55768_56346))
;


var x55772_56347 = com.wsscode.pathom.viz.index_explorer.MutationView.prototype;
x55772_56347.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x55772_56347.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x55772_56347){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".title",".title",-416997657),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),com.wsscode.pathom.viz.index_explorer.color_mutation], null),com.wsscode.pathom.viz.ui.kit.css_header,com.wsscode.pathom.viz.ui.kit.text_base], null)], null);
});})(x55772_56347))
;

x55772_56347.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x55772_56347){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x55772_56347))
;

x55772_56347.fulcro$client$primitives$IPreMerge$ = cljs.core.PROTOCOL_SENTINEL;

x55772_56347.fulcro$client$primitives$IPreMerge$pre_merge_STAR_$arity$2 = ((function (x55772_56347){
return (function (this$,p__55773){
var map__55774 = p__55773;
var map__55774__$1 = (((((!((map__55774 == null))))?(((((map__55774.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55774.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55774):map__55774);
var current_normalized = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55774__$1,new cljs.core.Keyword(null,"current-normalized","current-normalized",851723724));
var data_tree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55774__$1,new cljs.core.Keyword(null,"data-tree","data-tree",1311167582));
var this$__$1 = this;
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("ui","mutation-params-tree","ui/mutation-params-tree",-1729279365),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("ui","mutation-output-tree","ui/mutation-output-tree",-208190980),cljs.core.PersistentArrayMap.EMPTY], null),current_normalized,data_tree], 0));
});})(x55772_56347))
;

x55772_56347.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x55772_56347.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x55772_56347){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutation-sym","com.wsscode.pathom.viz.index-explorer/mutation-sym",-191280951),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutation-sym","com.wsscode.pathom.viz.index-explorer/mutation-sym",-191280951).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x55772_56347))
;

x55772_56347.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x55772_56347.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x55772_56347){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutation-sym","com.wsscode.pathom.viz.index-explorer/mutation-sym",-191280951),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","mutation-params-tree","ui/mutation-params-tree",-1729279365),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.ui.expandable_tree.ExpandableTree)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","mutation-output-tree","ui/mutation-output-tree",-208190980),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.ui.expandable_tree.ExpandableTree)], null)], null);
});})(x55772_56347))
;


com.wsscode.pathom.viz.index_explorer.MutationView.cljs$lang$type = true;

com.wsscode.pathom.viz.index_explorer.MutationView.cljs$lang$ctorStr = "com.wsscode.pathom.viz.index-explorer/MutationView";

com.wsscode.pathom.viz.index_explorer.MutationView.cljs$lang$ctorPrWriter = (function (this__53744__auto__,writer__53745__auto__,opt__53746__auto__){
return cljs.core._write(writer__53745__auto__,"com.wsscode.pathom.viz.index-explorer/MutationView");
});
goog.object.set(com.wsscode.pathom.viz.index_explorer.MutationView,"contextType",com.wsscode.pathom.viz.index_explorer.ExtensionContext);
com.wsscode.pathom.viz.index_explorer.mutation_view = fulcro.client.primitives.factory.cljs$core$IFn$_invoke$arity$2(com.wsscode.pathom.viz.index_explorer.MutationView,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581)], null));
com.wsscode.pathom.viz.index_explorer.realize_references = (function com$wsscode$pathom$viz$index_explorer$realize_references(state,coll){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__55776_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,p1__55776_SHARP_);
}),coll);
});
com.wsscode.pathom.viz.index_explorer.max_search_results = (100);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-type","com.wsscode.pathom.viz.index-explorer/search-type",-1615224063),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-type-resolver","com.wsscode.pathom.viz.index-explorer/search-type-resolver",1588028676),"null",new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-type-mutation","com.wsscode.pathom.viz.index-explorer/search-type-mutation",-68441744),"null",new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-type-attribute","com.wsscode.pathom.viz.index-explorer/search-type-attribute",-62795524),"null"], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-type-resolver","com.wsscode.pathom.viz.index-explorer/search-type-resolver",1588028676),null,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-type-mutation","com.wsscode.pathom.viz.index-explorer/search-type-mutation",-68441744),null,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-type-attribute","com.wsscode.pathom.viz.index-explorer/search-type-attribute",-62795524),null], null), null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-value","com.wsscode.pathom.viz.index-explorer/search-value",-337129957),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-index-item","com.wsscode.pathom.viz.index-explorer/search-index-item",-560879594),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.fuzzy","string","com.wsscode.fuzzy/string",320074815),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-value","com.wsscode.pathom.viz.index-explorer/search-value",-337129957),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-type","com.wsscode.pathom.viz.index-explorer/search-type",-1615224063)], null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.fuzzy","match-hl","com.wsscode.fuzzy/match-hl",-611317739)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__55777){
return cljs.core.map_QMARK_(G__55777);
}),(function (G__55777){
return cljs.core.contains_QMARK_(G__55777,new cljs.core.Keyword("com.wsscode.fuzzy","string","com.wsscode.fuzzy/string",320074815));
}),(function (G__55777){
return cljs.core.contains_QMARK_(G__55777,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-value","com.wsscode.pathom.viz.index-explorer/search-value",-337129957));
}),(function (G__55777){
return cljs.core.contains_QMARK_(G__55777,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-type","com.wsscode.pathom.viz.index-explorer/search-type",-1615224063));
})], null),(function (G__55777){
return ((cljs.core.map_QMARK_(G__55777)) && (cljs.core.contains_QMARK_(G__55777,new cljs.core.Keyword("com.wsscode.fuzzy","string","com.wsscode.fuzzy/string",320074815))) && (cljs.core.contains_QMARK_(G__55777,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-value","com.wsscode.pathom.viz.index-explorer/search-value",-337129957))) && (cljs.core.contains_QMARK_(G__55777,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-type","com.wsscode.pathom.viz.index-explorer/search-type",-1615224063))));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.fuzzy","match-hl","com.wsscode.fuzzy/match-hl",-611317739)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.fuzzy","string","com.wsscode.fuzzy/string",320074815),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-value","com.wsscode.pathom.viz.index-explorer/search-value",-337129957),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-type","com.wsscode.pathom.viz.index-explorer/search-type",-1615224063)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.fuzzy","string","com.wsscode.fuzzy/string",320074815),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-value","com.wsscode.pathom.viz.index-explorer/search-value",-337129957),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-type","com.wsscode.pathom.viz.index-explorer/search-type",-1615224063)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.fuzzy","string","com.wsscode.fuzzy/string",320074815),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-value","com.wsscode.pathom.viz.index-explorer/search-value",-337129957),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-type","com.wsscode.pathom.viz.index-explorer/search-type",-1615224063)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.fuzzy","match-hl","com.wsscode.fuzzy/match-hl",-611317739)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("com.wsscode.fuzzy","string","com.wsscode.fuzzy/string",320074815))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-value","com.wsscode.pathom.viz.index-explorer/search-value",-337129957))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-type","com.wsscode.pathom.viz.index-explorer/search-type",-1615224063)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.fuzzy","match-hl","com.wsscode.fuzzy/match-hl",-611317739)], null)])));
com.wsscode.pathom.viz.index_explorer.active_search_QMARK_ = (function com$wsscode$pathom$viz$index_explorer$active_search_QMARK_(text){
return (cljs.core.count(text) > (2));
});
fulcro.client.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("com.wsscode.pathom.viz.index-explorer","search","com.wsscode.pathom.viz.index-explorer/search",-1081698050,null),(function (fulcro_incoming_env,_,p__55778){
var map__55779 = p__55778;
var map__55779__$1 = (((((!((map__55779 == null))))?(((((map__55779.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55779.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55779):map__55779);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55779__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","text","com.wsscode.pathom.viz.index-explorer/text",-1775290484));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var map__55781 = fulcro_incoming_env;
var map__55781__$1 = (((((!((map__55781 == null))))?(((((map__55781.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55781.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55781):map__55781);
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55781__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55781__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__55781,map__55781__$1,ref,state,map__55779,map__55779__$1,text){
return (function (){
var items = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ref,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-vector","com.wsscode.pathom.viz.index-explorer/search-vector",-471470935)));
var fuzzy_res = ((com.wsscode.pathom.viz.index_explorer.active_search_QMARK_(text))?com.wsscode.fuzzy.fuzzy_match(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.fuzzy","options","com.wsscode.fuzzy/options",773495630),items,new cljs.core.Keyword("com.wsscode.fuzzy","search-input","com.wsscode.fuzzy/search-input",897823168),text], null)):cljs.core.PersistentVector.EMPTY);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,fulcro.client.primitives.merge_component,com.wsscode.pathom.viz.index_explorer.SearchEverything,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-results","com.wsscode.pathom.viz.index-explorer/search-results",321731333),cljs.core.vec(cljs.core.take.cljs$core$IFn$_invoke$arity$2(com.wsscode.pathom.viz.index_explorer.max_search_results,fuzzy_res))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ref], null)));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.update_in,ref,cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","text","com.wsscode.pathom.viz.index-explorer/text",-1775290484),text], 0));
});})(map__55781,map__55781__$1,ref,state,map__55779,map__55779__$1,text))
], null);
})()], 0));
}));
com.wsscode.pathom.viz.index_explorer.remove_not_found = (function com$wsscode$pathom$viz$index_explorer$remove_not_found(x){
return com.wsscode.pathom.core.transduce_maps(cljs.core.remove.cljs$core$IFn$_invoke$arity$1((function (p__55783){
var vec__55784 = p__55783;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55784,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55784,(1),null);
return cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.core","not-found","com.wsscode.pathom.core/not-found",-1411330137),null,new cljs.core.Keyword("fulcro.client.primitives","not-found","fulcro.client.primitives/not-found",941693912),null], null), null),v);
})),x);
});
if((typeof com !== 'undefined') && (typeof com.wsscode !== 'undefined') && (typeof com.wsscode.pathom !== 'undefined') && (typeof com.wsscode.pathom.viz !== 'undefined') && (typeof com.wsscode.pathom.viz.index_explorer !== 'undefined') && (typeof com.wsscode.pathom.viz.index_explorer.AllAttributesList !== 'undefined')){
} else {
/**
 * @constructor
 * @nocollapse
 */
com.wsscode.pathom.viz.index_explorer.AllAttributesList = (function com$wsscode$pathom$viz$index_explorer$AllAttributesList(){
var this__53741__auto__ = this;
React.Component.apply(this__53741__auto__,arguments);

if((!((this__53741__auto__.initLocalState == null)))){
this__53741__auto__.state = this__53741__auto__.initLocalState();
} else {
this__53741__auto__.state = ({});
}

return this__53741__auto__;
});

goog.object.extend(com.wsscode.pathom.viz.index_explorer.AllAttributesList.prototype,React.Component.prototype,fulcro.client.primitives.default_component_prototype);
}

fulcro.client.primitives._register_component_BANG_(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","AllAttributesList","com.wsscode.pathom.viz.index-explorer/AllAttributesList",741873297),com.wsscode.pathom.viz.index_explorer.AllAttributesList);

var x55789_56348 = com.wsscode.pathom.viz.index_explorer.AllAttributesList.prototype;
x55789_56348.render = ((function (x55789_56348){
return (function (){
var this__52659__auto__ = this;
var this$ = this__52659__auto__;
var _STAR_reconciler_STAR__orig_val__55790 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__55791 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__55792 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__55793 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__55794 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__55795 = fulcro.client.primitives.get_reconciler(this__52659__auto__);
var _STAR_depth_STAR__temp_val__55796 = (fulcro.client.primitives.depth(this__52659__auto__) + (1));
var _STAR_shared_STAR__temp_val__55797 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__52659__auto__);
var _STAR_instrument_STAR__temp_val__55798 = fulcro.client.primitives.instrument(this__52659__auto__);
var _STAR_parent_STAR__temp_val__55799 = this__52659__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__55795;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__55796;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__55797;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__55798;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__55799;

try{var map__55800 = fulcro.client.primitives.props(this$);
var map__55800__$1 = (((((!((map__55800 == null))))?(((((map__55800.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55800.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55800):map__55800);
var props = map__55800__$1;
var attributes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55800__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attributes","com.wsscode.pathom.viz.index-explorer/attributes",-67264281));
var computed = fulcro.client.primitives.get_computed.cljs$core$IFn$_invoke$arity$1(this$);
var G__55802 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(props,new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","title","com.wsscode.pathom.viz.ui.kit/title",-1326329402),"Attributes");
var G__55803 = fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.wsscode.pathom.viz.index_explorer.attribute_link(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),cljs.core.PersistentHashSet.EMPTY], null),computed),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.filter.cljs$core$IFn$_invoke$arity$1(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword_QMARK_,new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075))),cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (G__55802,map__55800,map__55800__$1,props,attributes,computed,_STAR_reconciler_STAR__orig_val__55790,_STAR_depth_STAR__orig_val__55791,_STAR_shared_STAR__orig_val__55792,_STAR_instrument_STAR__orig_val__55793,_STAR_parent_STAR__orig_val__55794,_STAR_reconciler_STAR__temp_val__55795,_STAR_depth_STAR__temp_val__55796,_STAR_shared_STAR__temp_val__55797,_STAR_instrument_STAR__temp_val__55798,_STAR_parent_STAR__temp_val__55799,this$,this__52659__auto__,x55789_56348){
return (function (p__55804){
var map__55805 = p__55804;
var map__55805__$1 = (((((!((map__55805 == null))))?(((((map__55805.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55805.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55805):map__55805);
var attribute = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55805__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075));
return com.wsscode.pathom.viz.index_explorer.attribute_link(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),attribute,new cljs.core.Keyword(null,"react-key","react-key",1337881348),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attribute], 0))], null),computed);
});})(G__55802,map__55800,map__55800__$1,props,attributes,computed,_STAR_reconciler_STAR__orig_val__55790,_STAR_depth_STAR__orig_val__55791,_STAR_shared_STAR__orig_val__55792,_STAR_instrument_STAR__orig_val__55793,_STAR_parent_STAR__orig_val__55794,_STAR_reconciler_STAR__temp_val__55795,_STAR_depth_STAR__temp_val__55796,_STAR_shared_STAR__temp_val__55797,_STAR_instrument_STAR__temp_val__55798,_STAR_parent_STAR__temp_val__55799,this$,this__52659__auto__,x55789_56348))
)),attributes)], 0));
return (com.wsscode.pathom.viz.ui.kit.collapsible_box.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.collapsible_box.cljs$core$IFn$_invoke$arity$2(G__55802,G__55803) : com.wsscode.pathom.viz.ui.kit.collapsible_box.call(null,G__55802,G__55803));
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__55794;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__55793;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__55792;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__55791;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__55790;
}});})(x55789_56348))
;


com.wsscode.pathom.viz.index_explorer.AllAttributesList.prototype.constructor = com.wsscode.pathom.viz.index_explorer.AllAttributesList;

com.wsscode.pathom.viz.index_explorer.AllAttributesList.prototype.constructor.displayName = "com.wsscode.pathom.viz.index-explorer/AllAttributesList";

com.wsscode.pathom.viz.index_explorer.AllAttributesList.prototype.fulcro$isComponent = true;

var x55807_56349 = com.wsscode.pathom.viz.index_explorer.AllAttributesList;


var x55808_56350 = com.wsscode.pathom.viz.index_explorer.AllAttributesList.prototype;


com.wsscode.pathom.viz.index_explorer.AllAttributesList.cljs$lang$type = true;

com.wsscode.pathom.viz.index_explorer.AllAttributesList.cljs$lang$ctorStr = "com.wsscode.pathom.viz.index-explorer/AllAttributesList";

com.wsscode.pathom.viz.index_explorer.AllAttributesList.cljs$lang$ctorPrWriter = (function (this__53744__auto__,writer__53745__auto__,opt__53746__auto__){
return cljs.core._write(writer__53745__auto__,"com.wsscode.pathom.viz.index-explorer/AllAttributesList");
});
com.wsscode.pathom.viz.index_explorer.all_attributes_list = fulcro.client.primitives.computed_factory.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.AllAttributesList);
com.wsscode.pathom.viz.index_explorer.last_value = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
if((typeof com !== 'undefined') && (typeof com.wsscode !== 'undefined') && (typeof com.wsscode.pathom !== 'undefined') && (typeof com.wsscode.pathom.viz !== 'undefined') && (typeof com.wsscode.pathom.viz.index_explorer !== 'undefined') && (typeof com.wsscode.pathom.viz.index_explorer.AllResolversList !== 'undefined')){
} else {
/**
 * @constructor
 * @nocollapse
 */
com.wsscode.pathom.viz.index_explorer.AllResolversList = (function com$wsscode$pathom$viz$index_explorer$AllResolversList(){
var this__53741__auto__ = this;
React.Component.apply(this__53741__auto__,arguments);

if((!((this__53741__auto__.initLocalState == null)))){
this__53741__auto__.state = this__53741__auto__.initLocalState();
} else {
this__53741__auto__.state = ({});
}

return this__53741__auto__;
});

goog.object.extend(com.wsscode.pathom.viz.index_explorer.AllResolversList.prototype,React.Component.prototype,fulcro.client.primitives.default_component_prototype);
}

fulcro.client.primitives._register_component_BANG_(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","AllResolversList","com.wsscode.pathom.viz.index-explorer/AllResolversList",1219737218),com.wsscode.pathom.viz.index_explorer.AllResolversList);

var x55812_56351 = com.wsscode.pathom.viz.index_explorer.AllResolversList.prototype;
x55812_56351.render = ((function (x55812_56351){
return (function (){
var this__52659__auto__ = this;
var this$ = this__52659__auto__;
var _STAR_reconciler_STAR__orig_val__55813 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__55814 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__55815 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__55816 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__55817 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__55818 = fulcro.client.primitives.get_reconciler(this__52659__auto__);
var _STAR_depth_STAR__temp_val__55819 = (fulcro.client.primitives.depth(this__52659__auto__) + (1));
var _STAR_shared_STAR__temp_val__55820 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__52659__auto__);
var _STAR_instrument_STAR__temp_val__55821 = fulcro.client.primitives.instrument(this__52659__auto__);
var _STAR_parent_STAR__temp_val__55822 = this__52659__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__55818;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__55819;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__55820;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__55821;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__55822;

try{var map__55823 = fulcro.client.primitives.props(this$);
var map__55823__$1 = (((((!((map__55823 == null))))?(((((map__55823.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55823.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55823):map__55823);
var props = map__55823__$1;
var resolvers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55823__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","resolvers","com.wsscode.pathom.viz.index-explorer/resolvers",-1064744669));
var computed = fulcro.client.primitives.get_computed.cljs$core$IFn$_invoke$arity$1(this$);
var G__55825 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(props,new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","title","com.wsscode.pathom.viz.ui.kit/title",-1326329402),"Resolvers");
var G__55826 = fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (G__55825,map__55823,map__55823__$1,props,resolvers,computed,_STAR_reconciler_STAR__orig_val__55813,_STAR_depth_STAR__orig_val__55814,_STAR_shared_STAR__orig_val__55815,_STAR_instrument_STAR__orig_val__55816,_STAR_parent_STAR__orig_val__55817,_STAR_reconciler_STAR__temp_val__55818,_STAR_depth_STAR__temp_val__55819,_STAR_shared_STAR__temp_val__55820,_STAR_instrument_STAR__temp_val__55821,_STAR_parent_STAR__temp_val__55822,this$,this__52659__auto__,x55812_56351){
return (function (p1__55809_SHARP_){
return com.wsscode.pathom.viz.index_explorer.resolver_link(p1__55809_SHARP_,computed);
});})(G__55825,map__55823,map__55823__$1,props,resolvers,computed,_STAR_reconciler_STAR__orig_val__55813,_STAR_depth_STAR__orig_val__55814,_STAR_shared_STAR__orig_val__55815,_STAR_instrument_STAR__orig_val__55816,_STAR_parent_STAR__orig_val__55817,_STAR_reconciler_STAR__temp_val__55818,_STAR_depth_STAR__temp_val__55819,_STAR_shared_STAR__temp_val__55820,_STAR_instrument_STAR__temp_val__55821,_STAR_parent_STAR__temp_val__55822,this$,this__52659__auto__,x55812_56351))
,resolvers)], 0));
return (com.wsscode.pathom.viz.ui.kit.collapsible_box.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.collapsible_box.cljs$core$IFn$_invoke$arity$2(G__55825,G__55826) : com.wsscode.pathom.viz.ui.kit.collapsible_box.call(null,G__55825,G__55826));
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__55817;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__55816;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__55815;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__55814;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__55813;
}});})(x55812_56351))
;


com.wsscode.pathom.viz.index_explorer.AllResolversList.prototype.constructor = com.wsscode.pathom.viz.index_explorer.AllResolversList;

com.wsscode.pathom.viz.index_explorer.AllResolversList.prototype.constructor.displayName = "com.wsscode.pathom.viz.index-explorer/AllResolversList";

com.wsscode.pathom.viz.index_explorer.AllResolversList.prototype.fulcro$isComponent = true;

var x55827_56352 = com.wsscode.pathom.viz.index_explorer.AllResolversList;


var x55828_56353 = com.wsscode.pathom.viz.index_explorer.AllResolversList.prototype;


com.wsscode.pathom.viz.index_explorer.AllResolversList.cljs$lang$type = true;

com.wsscode.pathom.viz.index_explorer.AllResolversList.cljs$lang$ctorStr = "com.wsscode.pathom.viz.index-explorer/AllResolversList";

com.wsscode.pathom.viz.index_explorer.AllResolversList.cljs$lang$ctorPrWriter = (function (this__53744__auto__,writer__53745__auto__,opt__53746__auto__){
return cljs.core._write(writer__53745__auto__,"com.wsscode.pathom.viz.index-explorer/AllResolversList");
});
com.wsscode.pathom.viz.index_explorer.all_resolvers_list = fulcro.client.primitives.computed_factory.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.AllResolversList);
if((typeof com !== 'undefined') && (typeof com.wsscode !== 'undefined') && (typeof com.wsscode.pathom !== 'undefined') && (typeof com.wsscode.pathom.viz !== 'undefined') && (typeof com.wsscode.pathom.viz.index_explorer !== 'undefined') && (typeof com.wsscode.pathom.viz.index_explorer.AllMutationsList !== 'undefined')){
} else {
/**
 * @constructor
 * @nocollapse
 */
com.wsscode.pathom.viz.index_explorer.AllMutationsList = (function com$wsscode$pathom$viz$index_explorer$AllMutationsList(){
var this__53741__auto__ = this;
React.Component.apply(this__53741__auto__,arguments);

if((!((this__53741__auto__.initLocalState == null)))){
this__53741__auto__.state = this__53741__auto__.initLocalState();
} else {
this__53741__auto__.state = ({});
}

return this__53741__auto__;
});

goog.object.extend(com.wsscode.pathom.viz.index_explorer.AllMutationsList.prototype,React.Component.prototype,fulcro.client.primitives.default_component_prototype);
}

fulcro.client.primitives._register_component_BANG_(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","AllMutationsList","com.wsscode.pathom.viz.index-explorer/AllMutationsList",-1767454340),com.wsscode.pathom.viz.index_explorer.AllMutationsList);

var x55832_56354 = com.wsscode.pathom.viz.index_explorer.AllMutationsList.prototype;
x55832_56354.render = ((function (x55832_56354){
return (function (){
var this__52659__auto__ = this;
var this$ = this__52659__auto__;
var _STAR_reconciler_STAR__orig_val__55833 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__55834 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__55835 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__55836 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__55837 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__55838 = fulcro.client.primitives.get_reconciler(this__52659__auto__);
var _STAR_depth_STAR__temp_val__55839 = (fulcro.client.primitives.depth(this__52659__auto__) + (1));
var _STAR_shared_STAR__temp_val__55840 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__52659__auto__);
var _STAR_instrument_STAR__temp_val__55841 = fulcro.client.primitives.instrument(this__52659__auto__);
var _STAR_parent_STAR__temp_val__55842 = this__52659__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__55838;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__55839;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__55840;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__55841;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__55842;

try{var map__55843 = fulcro.client.primitives.props(this$);
var map__55843__$1 = (((((!((map__55843 == null))))?(((((map__55843.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55843.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55843):map__55843);
var props = map__55843__$1;
var mutations = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55843__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutations","com.wsscode.pathom.viz.index-explorer/mutations",329050290));
var computed = fulcro.client.primitives.get_computed.cljs$core$IFn$_invoke$arity$1(this$);
var G__55845 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(props,new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","title","com.wsscode.pathom.viz.ui.kit/title",-1326329402),"Mutations");
var G__55846 = fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (G__55845,map__55843,map__55843__$1,props,mutations,computed,_STAR_reconciler_STAR__orig_val__55833,_STAR_depth_STAR__orig_val__55834,_STAR_shared_STAR__orig_val__55835,_STAR_instrument_STAR__orig_val__55836,_STAR_parent_STAR__orig_val__55837,_STAR_reconciler_STAR__temp_val__55838,_STAR_depth_STAR__temp_val__55839,_STAR_shared_STAR__temp_val__55840,_STAR_instrument_STAR__temp_val__55841,_STAR_parent_STAR__temp_val__55842,this$,this__52659__auto__,x55832_56354){
return (function (p1__55829_SHARP_){
return com.wsscode.pathom.viz.index_explorer.mutation_link(p1__55829_SHARP_,computed);
});})(G__55845,map__55843,map__55843__$1,props,mutations,computed,_STAR_reconciler_STAR__orig_val__55833,_STAR_depth_STAR__orig_val__55834,_STAR_shared_STAR__orig_val__55835,_STAR_instrument_STAR__orig_val__55836,_STAR_parent_STAR__orig_val__55837,_STAR_reconciler_STAR__temp_val__55838,_STAR_depth_STAR__temp_val__55839,_STAR_shared_STAR__temp_val__55840,_STAR_instrument_STAR__temp_val__55841,_STAR_parent_STAR__temp_val__55842,this$,this__52659__auto__,x55832_56354))
,mutations)], 0));
return (com.wsscode.pathom.viz.ui.kit.collapsible_box.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.collapsible_box.cljs$core$IFn$_invoke$arity$2(G__55845,G__55846) : com.wsscode.pathom.viz.ui.kit.collapsible_box.call(null,G__55845,G__55846));
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__55837;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__55836;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__55835;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__55834;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__55833;
}});})(x55832_56354))
;


com.wsscode.pathom.viz.index_explorer.AllMutationsList.prototype.constructor = com.wsscode.pathom.viz.index_explorer.AllMutationsList;

com.wsscode.pathom.viz.index_explorer.AllMutationsList.prototype.constructor.displayName = "com.wsscode.pathom.viz.index-explorer/AllMutationsList";

com.wsscode.pathom.viz.index_explorer.AllMutationsList.prototype.fulcro$isComponent = true;

var x55847_56355 = com.wsscode.pathom.viz.index_explorer.AllMutationsList;


var x55848_56356 = com.wsscode.pathom.viz.index_explorer.AllMutationsList.prototype;


com.wsscode.pathom.viz.index_explorer.AllMutationsList.cljs$lang$type = true;

com.wsscode.pathom.viz.index_explorer.AllMutationsList.cljs$lang$ctorStr = "com.wsscode.pathom.viz.index-explorer/AllMutationsList";

com.wsscode.pathom.viz.index_explorer.AllMutationsList.cljs$lang$ctorPrWriter = (function (this__53744__auto__,writer__53745__auto__,opt__53746__auto__){
return cljs.core._write(writer__53745__auto__,"com.wsscode.pathom.viz.index-explorer/AllMutationsList");
});
com.wsscode.pathom.viz.index_explorer.all_mutations_list = fulcro.client.primitives.computed_factory.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.AllMutationsList);
if((typeof com !== 'undefined') && (typeof com.wsscode !== 'undefined') && (typeof com.wsscode.pathom !== 'undefined') && (typeof com.wsscode.pathom.viz !== 'undefined') && (typeof com.wsscode.pathom.viz.index_explorer !== 'undefined') && (typeof com.wsscode.pathom.viz.index_explorer.SearchEverything !== 'undefined')){
} else {
/**
 * @constructor
 * @nocollapse
 */
com.wsscode.pathom.viz.index_explorer.SearchEverything = (function com$wsscode$pathom$viz$index_explorer$SearchEverything(){
var this__53741__auto__ = this;
React.Component.apply(this__53741__auto__,arguments);

if((!((this__53741__auto__.initLocalState == null)))){
this__53741__auto__.state = this__53741__auto__.initLocalState();
} else {
this__53741__auto__.state = ({});
}

return this__53741__auto__;
});

goog.object.extend(com.wsscode.pathom.viz.index_explorer.SearchEverything.prototype,React.Component.prototype,fulcro.client.primitives.default_component_prototype);
}

fulcro.client.primitives._register_component_BANG_(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","SearchEverything","com.wsscode.pathom.viz.index-explorer/SearchEverything",384463028),com.wsscode.pathom.viz.index_explorer.SearchEverything);

var x55852_56357 = com.wsscode.pathom.viz.index_explorer.SearchEverything.prototype;
x55852_56357.render = ((function (x55852_56357){
return (function (){
var this__52659__auto__ = this;
var this$ = this__52659__auto__;
var _STAR_reconciler_STAR__orig_val__55853 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__55854 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__55855 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__55856 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__55857 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__55858 = fulcro.client.primitives.get_reconciler(this__52659__auto__);
var _STAR_depth_STAR__temp_val__55859 = (fulcro.client.primitives.depth(this__52659__auto__) + (1));
var _STAR_shared_STAR__temp_val__55860 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__52659__auto__);
var _STAR_instrument_STAR__temp_val__55861 = fulcro.client.primitives.instrument(this__52659__auto__);
var _STAR_parent_STAR__temp_val__55862 = this__52659__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__55858;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__55859;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__55860;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__55861;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__55862;

try{var map__55863 = fulcro.client.primitives.props(this$);
var map__55863__$1 = (((((!((map__55863 == null))))?(((((map__55863.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55863.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55863):map__55863);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55863__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","text","com.wsscode.pathom.viz.index-explorer/text",-1775290484));
var search_results = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55863__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-results","com.wsscode.pathom.viz.index-explorer/search-results",321731333));
var attributes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55863__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attributes","com.wsscode.pathom.viz.index-explorer/attributes",-67264281));
var resolvers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55863__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","resolvers","com.wsscode.pathom.viz.index-explorer/resolvers",-1064744669));
var mutations = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55863__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutations","com.wsscode.pathom.viz.index-explorer/mutations",329050290));
var collapse_attributes_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55863__$1,new cljs.core.Keyword("ui","collapse-attributes?","ui/collapse-attributes?",-1581210852));
var collapse_resolvers_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55863__$1,new cljs.core.Keyword("ui","collapse-resolvers?","ui/collapse-resolvers?",-237427285));
var collapse_mutations_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55863__$1,new cljs.core.Keyword("ui","collapse-mutations?","ui/collapse-mutations?",-1463008198));
var computed = fulcro.client.primitives.get_computed.cljs$core$IFn$_invoke$arity$1(this$);
var G__55865 = com.wsscode.pathom.viz.ui.kit.gc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".flex",".flex",-73425686)], 0));
var G__55866 = (function (){var G__55868 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Filter",new cljs.core.Keyword(null,"value","value",305978217),text,new cljs.core.Keyword(null,"onChange","onChange",-312891301),fulcro.client.primitives.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"search","search",1564939822)),new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","left-icon","com.wsscode.pathom.viz.ui.kit/left-icon",-1594855964),new cljs.core.Keyword(null,"$fa-search","$fa-search",1999917289),new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","on-clear","com.wsscode.pathom.viz.ui.kit/on-clear",-221492596),((function (G__55865,map__55863,map__55863__$1,text,search_results,attributes,resolvers,mutations,collapse_attributes_QMARK_,collapse_resolvers_QMARK_,collapse_mutations_QMARK_,computed,_STAR_reconciler_STAR__orig_val__55853,_STAR_depth_STAR__orig_val__55854,_STAR_shared_STAR__orig_val__55855,_STAR_instrument_STAR__orig_val__55856,_STAR_parent_STAR__orig_val__55857,_STAR_reconciler_STAR__temp_val__55858,_STAR_depth_STAR__temp_val__55859,_STAR_shared_STAR__temp_val__55860,_STAR_instrument_STAR__temp_val__55861,_STAR_parent_STAR__temp_val__55862,this$,this__52659__auto__,x55852_56357){
return (function (){
return fulcro.client.mutations.set_value_BANG_(this$,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","text","com.wsscode.pathom.viz.index-explorer/text",-1775290484),"");
});})(G__55865,map__55863,map__55863__$1,text,search_results,attributes,resolvers,mutations,collapse_attributes_QMARK_,collapse_resolvers_QMARK_,collapse_mutations_QMARK_,computed,_STAR_reconciler_STAR__orig_val__55853,_STAR_depth_STAR__orig_val__55854,_STAR_shared_STAR__orig_val__55855,_STAR_instrument_STAR__orig_val__55856,_STAR_parent_STAR__orig_val__55857,_STAR_reconciler_STAR__temp_val__55858,_STAR_depth_STAR__temp_val__55859,_STAR_shared_STAR__temp_val__55860,_STAR_instrument_STAR__temp_val__55861,_STAR_parent_STAR__temp_val__55862,this$,this__52659__auto__,x55852_56357))
], null);
return (com.wsscode.pathom.viz.ui.kit.text_field.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom.viz.ui.kit.text_field.cljs$core$IFn$_invoke$arity$1(G__55868) : com.wsscode.pathom.viz.ui.kit.text_field.call(null,G__55868));
})();
var G__55867 = (function (){var G__55869 = com.wsscode.pathom.viz.ui.kit.gc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".flex",".flex",-73425686),new cljs.core.Keyword(null,".scrollbars",".scrollbars",-1193970120)], 0));
var G__55870 = fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),(((!(com.wsscode.pathom.viz.index_explorer.active_search_QMARK_(text))))?"none":null)], null)], null),((com.wsscode.pathom.viz.index_explorer.active_search_QMARK_(text))?cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (G__55869,G__55865,G__55866,map__55863,map__55863__$1,text,search_results,attributes,resolvers,mutations,collapse_attributes_QMARK_,collapse_resolvers_QMARK_,collapse_mutations_QMARK_,computed,_STAR_reconciler_STAR__orig_val__55853,_STAR_depth_STAR__orig_val__55854,_STAR_shared_STAR__orig_val__55855,_STAR_instrument_STAR__orig_val__55856,_STAR_parent_STAR__orig_val__55857,_STAR_reconciler_STAR__temp_val__55858,_STAR_depth_STAR__temp_val__55859,_STAR_shared_STAR__temp_val__55860,_STAR_instrument_STAR__temp_val__55861,_STAR_parent_STAR__temp_val__55862,this$,this__52659__auto__,x55852_56357){
return (function (p__55872){
var map__55873 = p__55872;
var map__55873__$1 = (((((!((map__55873 == null))))?(((((map__55873.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55873.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55873):map__55873);
var search_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55873__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-value","com.wsscode.pathom.viz.index-explorer/search-value",-337129957));
var search_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55873__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-type","com.wsscode.pathom.viz.index-explorer/search-type",-1615224063));
var match_hl = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55873__$1,new cljs.core.Keyword("com.wsscode.fuzzy","match-hl","com.wsscode.fuzzy/match-hl",-611317739));
var G__55875 = search_type;
var G__55875__$1 = (((G__55875 instanceof cljs.core.Keyword))?G__55875.fqn:null);
switch (G__55875__$1) {
case "com.wsscode.pathom.viz.index-explorer/search-type-attribute":
return com.wsscode.pathom.viz.index_explorer.attribute_link(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),search_value,new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","render","com.wsscode.pathom.viz.ui.kit/render",1024565529),((function (G__55875,G__55875__$1,map__55873,map__55873__$1,search_value,search_type,match_hl,G__55869,G__55865,G__55866,map__55863,map__55863__$1,text,search_results,attributes,resolvers,mutations,collapse_attributes_QMARK_,collapse_resolvers_QMARK_,collapse_mutations_QMARK_,computed,_STAR_reconciler_STAR__orig_val__55853,_STAR_depth_STAR__orig_val__55854,_STAR_shared_STAR__orig_val__55855,_STAR_instrument_STAR__orig_val__55856,_STAR_parent_STAR__orig_val__55857,_STAR_reconciler_STAR__temp_val__55858,_STAR_depth_STAR__temp_val__55859,_STAR_shared_STAR__temp_val__55860,_STAR_instrument_STAR__temp_val__55861,_STAR_parent_STAR__temp_val__55862,this$,this__52659__auto__,x55852_56357){
return (function (){
return fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__html","__html",674048345),match_hl], null)], null)], 0));
});})(G__55875,G__55875__$1,map__55873,map__55873__$1,search_value,search_type,match_hl,G__55869,G__55865,G__55866,map__55863,map__55863__$1,text,search_results,attributes,resolvers,mutations,collapse_attributes_QMARK_,collapse_resolvers_QMARK_,collapse_mutations_QMARK_,computed,_STAR_reconciler_STAR__orig_val__55853,_STAR_depth_STAR__orig_val__55854,_STAR_shared_STAR__orig_val__55855,_STAR_instrument_STAR__orig_val__55856,_STAR_parent_STAR__orig_val__55857,_STAR_reconciler_STAR__temp_val__55858,_STAR_depth_STAR__temp_val__55859,_STAR_shared_STAR__temp_val__55860,_STAR_instrument_STAR__temp_val__55861,_STAR_parent_STAR__temp_val__55862,this$,this__52659__auto__,x55852_56357))
], null),computed);

break;
case "com.wsscode.pathom.viz.index-explorer/search-type-resolver":
return com.wsscode.pathom.viz.index_explorer.resolver_link(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),search_value,new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","render","com.wsscode.pathom.viz.ui.kit/render",1024565529),((function (G__55875,G__55875__$1,map__55873,map__55873__$1,search_value,search_type,match_hl,G__55869,G__55865,G__55866,map__55863,map__55863__$1,text,search_results,attributes,resolvers,mutations,collapse_attributes_QMARK_,collapse_resolvers_QMARK_,collapse_mutations_QMARK_,computed,_STAR_reconciler_STAR__orig_val__55853,_STAR_depth_STAR__orig_val__55854,_STAR_shared_STAR__orig_val__55855,_STAR_instrument_STAR__orig_val__55856,_STAR_parent_STAR__orig_val__55857,_STAR_reconciler_STAR__temp_val__55858,_STAR_depth_STAR__temp_val__55859,_STAR_shared_STAR__temp_val__55860,_STAR_instrument_STAR__temp_val__55861,_STAR_parent_STAR__temp_val__55862,this$,this__52659__auto__,x55852_56357){
return (function (){
return fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__html","__html",674048345),match_hl], null)], null)], 0));
});})(G__55875,G__55875__$1,map__55873,map__55873__$1,search_value,search_type,match_hl,G__55869,G__55865,G__55866,map__55863,map__55863__$1,text,search_results,attributes,resolvers,mutations,collapse_attributes_QMARK_,collapse_resolvers_QMARK_,collapse_mutations_QMARK_,computed,_STAR_reconciler_STAR__orig_val__55853,_STAR_depth_STAR__orig_val__55854,_STAR_shared_STAR__orig_val__55855,_STAR_instrument_STAR__orig_val__55856,_STAR_parent_STAR__orig_val__55857,_STAR_reconciler_STAR__temp_val__55858,_STAR_depth_STAR__temp_val__55859,_STAR_shared_STAR__temp_val__55860,_STAR_instrument_STAR__temp_val__55861,_STAR_parent_STAR__temp_val__55862,this$,this__52659__auto__,x55852_56357))
], null),computed);

break;
case "com.wsscode.pathom.viz.index-explorer/search-type-mutation":
return com.wsscode.pathom.viz.index_explorer.mutation_link(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),search_value,new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","render","com.wsscode.pathom.viz.ui.kit/render",1024565529),((function (G__55875,G__55875__$1,map__55873,map__55873__$1,search_value,search_type,match_hl,G__55869,G__55865,G__55866,map__55863,map__55863__$1,text,search_results,attributes,resolvers,mutations,collapse_attributes_QMARK_,collapse_resolvers_QMARK_,collapse_mutations_QMARK_,computed,_STAR_reconciler_STAR__orig_val__55853,_STAR_depth_STAR__orig_val__55854,_STAR_shared_STAR__orig_val__55855,_STAR_instrument_STAR__orig_val__55856,_STAR_parent_STAR__orig_val__55857,_STAR_reconciler_STAR__temp_val__55858,_STAR_depth_STAR__temp_val__55859,_STAR_shared_STAR__temp_val__55860,_STAR_instrument_STAR__temp_val__55861,_STAR_parent_STAR__temp_val__55862,this$,this__52659__auto__,x55852_56357){
return (function (){
return fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__html","__html",674048345),match_hl], null)], null)], 0));
});})(G__55875,G__55875__$1,map__55873,map__55873__$1,search_value,search_type,match_hl,G__55869,G__55865,G__55866,map__55863,map__55863__$1,text,search_results,attributes,resolvers,mutations,collapse_attributes_QMARK_,collapse_resolvers_QMARK_,collapse_mutations_QMARK_,computed,_STAR_reconciler_STAR__orig_val__55853,_STAR_depth_STAR__orig_val__55854,_STAR_shared_STAR__orig_val__55855,_STAR_instrument_STAR__orig_val__55856,_STAR_parent_STAR__orig_val__55857,_STAR_reconciler_STAR__temp_val__55858,_STAR_depth_STAR__temp_val__55859,_STAR_shared_STAR__temp_val__55860,_STAR_instrument_STAR__temp_val__55861,_STAR_parent_STAR__temp_val__55862,this$,this__52659__auto__,x55852_56357))
], null),computed);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__55875__$1)].join('')));

}
});})(G__55869,G__55865,G__55866,map__55863,map__55863__$1,text,search_results,attributes,resolvers,mutations,collapse_attributes_QMARK_,collapse_resolvers_QMARK_,collapse_mutations_QMARK_,computed,_STAR_reconciler_STAR__orig_val__55853,_STAR_depth_STAR__orig_val__55854,_STAR_shared_STAR__orig_val__55855,_STAR_instrument_STAR__orig_val__55856,_STAR_parent_STAR__orig_val__55857,_STAR_reconciler_STAR__temp_val__55858,_STAR_depth_STAR__temp_val__55859,_STAR_shared_STAR__temp_val__55860,_STAR_instrument_STAR__temp_val__55861,_STAR_parent_STAR__temp_val__55862,this$,this__52659__auto__,x55852_56357))
)),search_results):null)], 0));
var G__55871 = fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),(((cljs.core.count(text) > (2)))?"none":null)], null)], null),(function (){var G__55876 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attributes","com.wsscode.pathom.viz.index-explorer/attributes",-67264281),attributes,new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","collapsed?","com.wsscode.pathom.viz.ui.kit/collapsed?",301612965),collapse_attributes_QMARK_,new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","on-toggle","com.wsscode.pathom.viz.ui.kit/on-toggle",629501911),fulcro.client.primitives.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"toggle-attribute-collapse","toggle-attribute-collapse",1927565782))], null);
var G__55877 = computed;
return (com.wsscode.pathom.viz.index_explorer.all_attributes_list.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.all_attributes_list.cljs$core$IFn$_invoke$arity$2(G__55876,G__55877) : com.wsscode.pathom.viz.index_explorer.all_attributes_list.call(null,G__55876,G__55877));
})(),(function (){var G__55878 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","resolvers","com.wsscode.pathom.viz.index-explorer/resolvers",-1064744669),resolvers,new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","collapsed?","com.wsscode.pathom.viz.ui.kit/collapsed?",301612965),collapse_resolvers_QMARK_,new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","on-toggle","com.wsscode.pathom.viz.ui.kit/on-toggle",629501911),fulcro.client.primitives.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"toggle-resolver-collapse","toggle-resolver-collapse",-1738038560))], null);
var G__55879 = computed;
return (com.wsscode.pathom.viz.index_explorer.all_resolvers_list.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.all_resolvers_list.cljs$core$IFn$_invoke$arity$2(G__55878,G__55879) : com.wsscode.pathom.viz.index_explorer.all_resolvers_list.call(null,G__55878,G__55879));
})(),(function (){var G__55880 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutations","com.wsscode.pathom.viz.index-explorer/mutations",329050290),mutations,new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","collapsed?","com.wsscode.pathom.viz.ui.kit/collapsed?",301612965),collapse_mutations_QMARK_,new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","on-toggle","com.wsscode.pathom.viz.ui.kit/on-toggle",629501911),fulcro.client.primitives.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"toggle-mutation-collapse","toggle-mutation-collapse",-331645814))], null);
var G__55881 = computed;
return (com.wsscode.pathom.viz.index_explorer.all_mutations_list.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.all_mutations_list.cljs$core$IFn$_invoke$arity$2(G__55880,G__55881) : com.wsscode.pathom.viz.index_explorer.all_mutations_list.call(null,G__55880,G__55881));
})()], 0));
return (com.wsscode.pathom.viz.ui.kit.column.cljs$core$IFn$_invoke$arity$3 ? com.wsscode.pathom.viz.ui.kit.column.cljs$core$IFn$_invoke$arity$3(G__55869,G__55870,G__55871) : com.wsscode.pathom.viz.ui.kit.column.call(null,G__55869,G__55870,G__55871));
})();
return (com.wsscode.pathom.viz.ui.kit.column.cljs$core$IFn$_invoke$arity$3 ? com.wsscode.pathom.viz.ui.kit.column.cljs$core$IFn$_invoke$arity$3(G__55865,G__55866,G__55867) : com.wsscode.pathom.viz.ui.kit.column.call(null,G__55865,G__55866,G__55867));
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__55857;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__55856;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__55855;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__55854;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__55853;
}});})(x55852_56357))
;

x55852_56357.initLocalState = ((function (x55852_56357){
return (function (){
var this$ = this;
var ret__52634__auto__ = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"search","search",1564939822),((function (this$,x55852_56357){
return (function (p1__55849_SHARP_){
return fulcro.client.primitives.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("com.wsscode.pathom.viz.index-explorer","search","com.wsscode.pathom.viz.index-explorer/search",-1081698050,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","text","com.wsscode.pathom.viz.index-explorer/text",-1775290484),null,(1),null)),(new cljs.core.List(null,com.wsscode.pathom.viz.helpers.target_value(p1__55849_SHARP_),null,(1),null)))))),null,(1),null)))))], null));
});})(this$,x55852_56357))
,new cljs.core.Keyword(null,"toggle-attribute-collapse","toggle-attribute-collapse",1927565782),((function (this$,x55852_56357){
return (function (){
return fulcro.client.mutations.toggle_BANG_(this$,new cljs.core.Keyword("ui","collapse-attributes?","ui/collapse-attributes?",-1581210852));
});})(this$,x55852_56357))
,new cljs.core.Keyword(null,"toggle-resolver-collapse","toggle-resolver-collapse",-1738038560),((function (this$,x55852_56357){
return (function (){
return fulcro.client.mutations.toggle_BANG_(this$,new cljs.core.Keyword("ui","collapse-resolvers?","ui/collapse-resolvers?",-237427285));
});})(this$,x55852_56357))
,new cljs.core.Keyword(null,"toggle-mutation-collapse","toggle-mutation-collapse",-331645814),((function (this$,x55852_56357){
return (function (){
return fulcro.client.mutations.toggle_BANG_(this$,new cljs.core.Keyword("ui","collapse-mutations?","ui/collapse-mutations?",-1463008198));
});})(this$,x55852_56357))
,new cljs.core.Keyword(null,"all-attributes","all-attributes",-1495901763),(function (){var props = fulcro.client.primitives.props(this$);
var computed = fulcro.client.primitives.get_computed.cljs$core$IFn$_invoke$arity$1(props);
return fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.wsscode.pathom.viz.index_explorer.attribute_link(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),cljs.core.PersistentHashSet.EMPTY], null),computed),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.filter.cljs$core$IFn$_invoke$arity$1(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword_QMARK_,new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075))),cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (props,computed,this$,x55852_56357){
return (function (p__55882){
var map__55883 = p__55882;
var map__55883__$1 = (((((!((map__55883 == null))))?(((((map__55883.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55883.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55883):map__55883);
var attribute = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55883__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075));
return com.wsscode.pathom.viz.index_explorer.attribute_link(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),attribute], null),computed);
});})(props,computed,this$,x55852_56357))
)),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attributes","com.wsscode.pathom.viz.index-explorer/attributes",-67264281).cljs$core$IFn$_invoke$arity$1(props))], 0));
})()], null);
var obj55886 = ({"fulcro$state":ret__52634__auto__});
return obj55886;
});})(x55852_56357))
;


com.wsscode.pathom.viz.index_explorer.SearchEverything.prototype.constructor = com.wsscode.pathom.viz.index_explorer.SearchEverything;

com.wsscode.pathom.viz.index_explorer.SearchEverything.prototype.constructor.displayName = "com.wsscode.pathom.viz.index-explorer/SearchEverything";

com.wsscode.pathom.viz.index_explorer.SearchEverything.prototype.fulcro$isComponent = true;

var x55887_56359 = com.wsscode.pathom.viz.index_explorer.SearchEverything;
x55887_56359.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x55887_56359.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x55887_56359){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"flex","flex",-1425124628),"1",new cljs.core.Keyword(null,"white-space","white-space",-707351930),"nowrap",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"auto"], null)], null)], null);
});})(x55887_56359))
;

x55887_56359.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x55887_56359){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x55887_56359))
;

x55887_56359.fulcro$client$primitives$IPreMerge$ = cljs.core.PROTOCOL_SENTINEL;

x55887_56359.fulcro$client$primitives$IPreMerge$pre_merge_STAR_$arity$2 = ((function (x55887_56359){
return (function (this$,p__55888){
var map__55889 = p__55888;
var map__55889__$1 = (((((!((map__55889 == null))))?(((((map__55889.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55889.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55889):map__55889);
var current_normalized = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55889__$1,new cljs.core.Keyword(null,"current-normalized","current-normalized",851723724));
var data_tree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55889__$1,new cljs.core.Keyword(null,"data-tree","data-tree",1311167582));
var this$__$1 = this;
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625),cljs.core.random_uuid(),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","text","com.wsscode.pathom.viz.index-explorer/text",-1775290484),"",new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-results","com.wsscode.pathom.viz.index-explorer/search-results",321731333),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword("ui","collapse-attributes?","ui/collapse-attributes?",-1581210852),false,new cljs.core.Keyword("ui","collapse-resolvers?","ui/collapse-resolvers?",-237427285),false,new cljs.core.Keyword("ui","collapse-mutations?","ui/collapse-mutations?",-1463008198),false], null),current_normalized,data_tree], 0));
});})(x55887_56359))
;

x55887_56359.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x55887_56359.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x55887_56359){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x55887_56359))
;

x55887_56359.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x55887_56359.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x55887_56359){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","text","com.wsscode.pathom.viz.index-explorer/text",-1775290484),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-results","com.wsscode.pathom.viz.index-explorer/search-results",321731333),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.fuzzy","string","com.wsscode.fuzzy/string",320074815),new cljs.core.Keyword("com.wsscode.fuzzy","match-hl","com.wsscode.fuzzy/match-hl",-611317739),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-type","com.wsscode.pathom.viz.index-explorer/search-type",-1615224063),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-value","com.wsscode.pathom.viz.index-explorer/search-value",-337129957)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attributes","com.wsscode.pathom.viz.index-explorer/attributes",-67264281),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","resolvers","com.wsscode.pathom.viz.index-explorer/resolvers",-1064744669),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutations","com.wsscode.pathom.viz.index-explorer/mutations",329050290),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581)], null)], null),new cljs.core.Keyword("ui","collapse-attributes?","ui/collapse-attributes?",-1581210852),new cljs.core.Keyword("ui","collapse-resolvers?","ui/collapse-resolvers?",-237427285),new cljs.core.Keyword("ui","collapse-mutations?","ui/collapse-mutations?",-1463008198)], null);
});})(x55887_56359))
;


var x55891_56360 = com.wsscode.pathom.viz.index_explorer.SearchEverything.prototype;
x55891_56360.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x55891_56360.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x55891_56360){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"flex","flex",-1425124628),"1",new cljs.core.Keyword(null,"white-space","white-space",-707351930),"nowrap",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"auto"], null)], null)], null);
});})(x55891_56360))
;

x55891_56360.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x55891_56360){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x55891_56360))
;

x55891_56360.fulcro$client$primitives$IPreMerge$ = cljs.core.PROTOCOL_SENTINEL;

x55891_56360.fulcro$client$primitives$IPreMerge$pre_merge_STAR_$arity$2 = ((function (x55891_56360){
return (function (this$,p__55892){
var map__55893 = p__55892;
var map__55893__$1 = (((((!((map__55893 == null))))?(((((map__55893.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55893.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55893):map__55893);
var current_normalized = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55893__$1,new cljs.core.Keyword(null,"current-normalized","current-normalized",851723724));
var data_tree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55893__$1,new cljs.core.Keyword(null,"data-tree","data-tree",1311167582));
var this$__$1 = this;
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625),cljs.core.random_uuid(),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","text","com.wsscode.pathom.viz.index-explorer/text",-1775290484),"",new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-results","com.wsscode.pathom.viz.index-explorer/search-results",321731333),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword("ui","collapse-attributes?","ui/collapse-attributes?",-1581210852),false,new cljs.core.Keyword("ui","collapse-resolvers?","ui/collapse-resolvers?",-237427285),false,new cljs.core.Keyword("ui","collapse-mutations?","ui/collapse-mutations?",-1463008198),false], null),current_normalized,data_tree], 0));
});})(x55891_56360))
;

x55891_56360.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x55891_56360.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x55891_56360){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x55891_56360))
;

x55891_56360.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x55891_56360.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x55891_56360){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","text","com.wsscode.pathom.viz.index-explorer/text",-1775290484),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-results","com.wsscode.pathom.viz.index-explorer/search-results",321731333),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.fuzzy","string","com.wsscode.fuzzy/string",320074815),new cljs.core.Keyword("com.wsscode.fuzzy","match-hl","com.wsscode.fuzzy/match-hl",-611317739),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-type","com.wsscode.pathom.viz.index-explorer/search-type",-1615224063),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-value","com.wsscode.pathom.viz.index-explorer/search-value",-337129957)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attributes","com.wsscode.pathom.viz.index-explorer/attributes",-67264281),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","resolvers","com.wsscode.pathom.viz.index-explorer/resolvers",-1064744669),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutations","com.wsscode.pathom.viz.index-explorer/mutations",329050290),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581)], null)], null),new cljs.core.Keyword("ui","collapse-attributes?","ui/collapse-attributes?",-1581210852),new cljs.core.Keyword("ui","collapse-resolvers?","ui/collapse-resolvers?",-237427285),new cljs.core.Keyword("ui","collapse-mutations?","ui/collapse-mutations?",-1463008198)], null);
});})(x55891_56360))
;


com.wsscode.pathom.viz.index_explorer.SearchEverything.cljs$lang$type = true;

com.wsscode.pathom.viz.index_explorer.SearchEverything.cljs$lang$ctorStr = "com.wsscode.pathom.viz.index-explorer/SearchEverything";

com.wsscode.pathom.viz.index_explorer.SearchEverything.cljs$lang$ctorPrWriter = (function (this__53744__auto__,writer__53745__auto__,opt__53746__auto__){
return cljs.core._write(writer__53745__auto__,"com.wsscode.pathom.viz.index-explorer/SearchEverything");
});
com.wsscode.pathom.viz.index_explorer.search_everything = fulcro.client.primitives.computed_factory.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.SearchEverything);
if((typeof com !== 'undefined') && (typeof com.wsscode !== 'undefined') && (typeof com.wsscode.pathom !== 'undefined') && (typeof com.wsscode.pathom.viz !== 'undefined') && (typeof com.wsscode.pathom.viz.index_explorer !== 'undefined') && (typeof com.wsscode.pathom.viz.index_explorer.AttributeMismatchPanel !== 'undefined')){
} else {
/**
 * @constructor
 * @nocollapse
 */
com.wsscode.pathom.viz.index_explorer.AttributeMismatchPanel = (function com$wsscode$pathom$viz$index_explorer$AttributeMismatchPanel(){
var this__53741__auto__ = this;
React.Component.apply(this__53741__auto__,arguments);

if((!((this__53741__auto__.initLocalState == null)))){
this__53741__auto__.state = this__53741__auto__.initLocalState();
} else {
this__53741__auto__.state = ({});
}

return this__53741__auto__;
});

goog.object.extend(com.wsscode.pathom.viz.index_explorer.AttributeMismatchPanel.prototype,React.Component.prototype,fulcro.client.primitives.default_component_prototype);
}

fulcro.client.primitives._register_component_BANG_(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","AttributeMismatchPanel","com.wsscode.pathom.viz.index-explorer/AttributeMismatchPanel",653731723),com.wsscode.pathom.viz.index_explorer.AttributeMismatchPanel);

var x55897_56361 = com.wsscode.pathom.viz.index_explorer.AttributeMismatchPanel.prototype;
x55897_56361.render = ((function (x55897_56361){
return (function (){
var this__52659__auto__ = this;
var this$ = this__52659__auto__;
var _STAR_reconciler_STAR__orig_val__55898 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__55899 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__55900 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__55901 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__55902 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__55903 = fulcro.client.primitives.get_reconciler(this__52659__auto__);
var _STAR_depth_STAR__temp_val__55904 = (fulcro.client.primitives.depth(this__52659__auto__) + (1));
var _STAR_shared_STAR__temp_val__55905 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__52659__auto__);
var _STAR_instrument_STAR__temp_val__55906 = fulcro.client.primitives.instrument(this__52659__auto__);
var _STAR_parent_STAR__temp_val__55907 = this__52659__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__55903;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__55904;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__55905;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__55906;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__55907;

try{var map__55908 = fulcro.client.primitives.props(this$);
var map__55908__$1 = (((((!((map__55908 == null))))?(((((map__55908.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55908.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55908):map__55908);
var attr_type_mismatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55908__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-type-mismatch","com.wsscode.pathom.viz.index-explorer/attr-type-mismatch",-1230484441));
var attr_mismatch_expanded = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55908__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-mismatch-expanded","com.wsscode.pathom.viz.index-explorer/attr-mismatch-expanded",1688513157));
var computed = fulcro.client.primitives.get_computed.cljs$core$IFn$_invoke$arity$1(this$);
var G__55910 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","panel-title","com.wsscode.pathom.viz.ui.kit/panel-title",1529445284),"Attributes with type mismatch"], null);
var G__55911 = (function (){var iter__4523__auto__ = ((function (G__55910,map__55908,map__55908__$1,attr_type_mismatch,attr_mismatch_expanded,computed,_STAR_reconciler_STAR__orig_val__55898,_STAR_depth_STAR__orig_val__55899,_STAR_shared_STAR__orig_val__55900,_STAR_instrument_STAR__orig_val__55901,_STAR_parent_STAR__orig_val__55902,_STAR_reconciler_STAR__temp_val__55903,_STAR_depth_STAR__temp_val__55904,_STAR_shared_STAR__temp_val__55905,_STAR_instrument_STAR__temp_val__55906,_STAR_parent_STAR__temp_val__55907,this$,this__52659__auto__,x55897_56361){
return (function com$wsscode$pathom$viz$index_explorer$iter__55912(s__55913){
return (new cljs.core.LazySeq(null,((function (G__55910,map__55908,map__55908__$1,attr_type_mismatch,attr_mismatch_expanded,computed,_STAR_reconciler_STAR__orig_val__55898,_STAR_depth_STAR__orig_val__55899,_STAR_shared_STAR__orig_val__55900,_STAR_instrument_STAR__orig_val__55901,_STAR_parent_STAR__orig_val__55902,_STAR_reconciler_STAR__temp_val__55903,_STAR_depth_STAR__temp_val__55904,_STAR_shared_STAR__temp_val__55905,_STAR_instrument_STAR__temp_val__55906,_STAR_parent_STAR__temp_val__55907,this$,this__52659__auto__,x55897_56361){
return (function (){
var s__55913__$1 = s__55913;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__55913__$1);
if(temp__5720__auto__){
var s__55913__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__55913__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__55913__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__55915 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__55914 = (0);
while(true){
if((i__55914 < size__4522__auto__)){
var map__55916 = cljs.core._nth(c__4521__auto__,i__55914);
var map__55916__$1 = (((((!((map__55916 == null))))?(((((map__55916.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55916.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55916):map__55916);
var attribute = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55916__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075));
var attr_leaf_in = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55916__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attr-leaf-in","com.wsscode.pathom.connect/attr-leaf-in",-1959401711));
var attr_branch_in = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55916__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attr-branch-in","com.wsscode.pathom.connect/attr-branch-in",1982854732));
cljs.core.chunk_append(b__55915,(function (){var G__55918 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"react-key","react-key",1337881348),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attribute], 0)),new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","collapsed?","com.wsscode.pathom.viz.ui.kit/collapsed?",301612965),(!(cljs.core.contains_QMARK_(attr_mismatch_expanded,attribute))),new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","on-toggle","com.wsscode.pathom.viz.ui.kit/on-toggle",629501911),((function (i__55914,map__55916,map__55916__$1,attribute,attr_leaf_in,attr_branch_in,c__4521__auto__,size__4522__auto__,b__55915,s__55913__$2,temp__5720__auto__,G__55910,map__55908,map__55908__$1,attr_type_mismatch,attr_mismatch_expanded,computed,_STAR_reconciler_STAR__orig_val__55898,_STAR_depth_STAR__orig_val__55899,_STAR_shared_STAR__orig_val__55900,_STAR_instrument_STAR__orig_val__55901,_STAR_parent_STAR__orig_val__55902,_STAR_reconciler_STAR__temp_val__55903,_STAR_depth_STAR__temp_val__55904,_STAR_shared_STAR__temp_val__55905,_STAR_instrument_STAR__temp_val__55906,_STAR_parent_STAR__temp_val__55907,this$,this__52659__auto__,x55897_56361){
return (function (){
return com.wsscode.pathom.viz.helpers.update_value_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-mismatch-expanded","com.wsscode.pathom.viz.index-explorer/attr-mismatch-expanded",1688513157),com.wsscode.pathom.viz.helpers.toggle_set_item,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attribute], 0));
});})(i__55914,map__55916,map__55916__$1,attribute,attr_leaf_in,attr_branch_in,c__4521__auto__,size__4522__auto__,b__55915,s__55913__$2,temp__5720__auto__,G__55910,map__55908,map__55908__$1,attr_type_mismatch,attr_mismatch_expanded,computed,_STAR_reconciler_STAR__orig_val__55898,_STAR_depth_STAR__orig_val__55899,_STAR_shared_STAR__orig_val__55900,_STAR_instrument_STAR__orig_val__55901,_STAR_parent_STAR__orig_val__55902,_STAR_reconciler_STAR__temp_val__55903,_STAR_depth_STAR__temp_val__55904,_STAR_shared_STAR__temp_val__55905,_STAR_instrument_STAR__temp_val__55906,_STAR_parent_STAR__temp_val__55907,this$,this__52659__auto__,x55897_56361))
,new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","title","com.wsscode.pathom.viz.ui.kit/title",-1326329402),com.wsscode.pathom.viz.index_explorer.attribute_link(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),attribute], null),computed)], null);
var G__55919 = fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".resolver-container",".resolver-container",925822524),(function (){var iter__4523__auto__ = ((function (i__55914,G__55918,map__55916,map__55916__$1,attribute,attr_leaf_in,attr_branch_in,c__4521__auto__,size__4522__auto__,b__55915,s__55913__$2,temp__5720__auto__,G__55910,map__55908,map__55908__$1,attr_type_mismatch,attr_mismatch_expanded,computed,_STAR_reconciler_STAR__orig_val__55898,_STAR_depth_STAR__orig_val__55899,_STAR_shared_STAR__orig_val__55900,_STAR_instrument_STAR__orig_val__55901,_STAR_parent_STAR__orig_val__55902,_STAR_reconciler_STAR__temp_val__55903,_STAR_depth_STAR__temp_val__55904,_STAR_shared_STAR__temp_val__55905,_STAR_instrument_STAR__temp_val__55906,_STAR_parent_STAR__temp_val__55907,this$,this__52659__auto__,x55897_56361){
return (function com$wsscode$pathom$viz$index_explorer$iter__55912_$_iter__55920(s__55921){
return (new cljs.core.LazySeq(null,((function (i__55914,G__55918,map__55916,map__55916__$1,attribute,attr_leaf_in,attr_branch_in,c__4521__auto__,size__4522__auto__,b__55915,s__55913__$2,temp__5720__auto__,G__55910,map__55908,map__55908__$1,attr_type_mismatch,attr_mismatch_expanded,computed,_STAR_reconciler_STAR__orig_val__55898,_STAR_depth_STAR__orig_val__55899,_STAR_shared_STAR__orig_val__55900,_STAR_instrument_STAR__orig_val__55901,_STAR_parent_STAR__orig_val__55902,_STAR_reconciler_STAR__temp_val__55903,_STAR_depth_STAR__temp_val__55904,_STAR_shared_STAR__temp_val__55905,_STAR_instrument_STAR__temp_val__55906,_STAR_parent_STAR__temp_val__55907,this$,this__52659__auto__,x55897_56361){
return (function (){
var s__55921__$1 = s__55921;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__55921__$1);
if(temp__5720__auto____$1){
var s__55921__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__55921__$2)){
var c__4521__auto____$1 = cljs.core.chunk_first(s__55921__$2);
var size__4522__auto____$1 = cljs.core.count(c__4521__auto____$1);
var b__55923 = cljs.core.chunk_buffer(size__4522__auto____$1);
if((function (){var i__55922 = (0);
while(true){
if((i__55922 < size__4522__auto____$1)){
var resolver = cljs.core._nth(c__4521__auto____$1,i__55922);
cljs.core.chunk_append(b__55923,com.wsscode.pathom.viz.index_explorer.resolver_link(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),resolver], null),computed));

var G__56362 = (i__55922 + (1));
i__55922 = G__56362;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__55923),com$wsscode$pathom$viz$index_explorer$iter__55912_$_iter__55920(cljs.core.chunk_rest(s__55921__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__55923),null);
}
} else {
var resolver = cljs.core.first(s__55921__$2);
return cljs.core.cons(com.wsscode.pathom.viz.index_explorer.resolver_link(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),resolver], null),computed),com$wsscode$pathom$viz$index_explorer$iter__55912_$_iter__55920(cljs.core.rest(s__55921__$2)));
}
} else {
return null;
}
break;
}
});})(i__55914,G__55918,map__55916,map__55916__$1,attribute,attr_leaf_in,attr_branch_in,c__4521__auto__,size__4522__auto__,b__55915,s__55913__$2,temp__5720__auto__,G__55910,map__55908,map__55908__$1,attr_type_mismatch,attr_mismatch_expanded,computed,_STAR_reconciler_STAR__orig_val__55898,_STAR_depth_STAR__orig_val__55899,_STAR_shared_STAR__orig_val__55900,_STAR_instrument_STAR__orig_val__55901,_STAR_parent_STAR__orig_val__55902,_STAR_reconciler_STAR__temp_val__55903,_STAR_depth_STAR__temp_val__55904,_STAR_shared_STAR__temp_val__55905,_STAR_instrument_STAR__temp_val__55906,_STAR_parent_STAR__temp_val__55907,this$,this__52659__auto__,x55897_56361))
,null,null));
});})(i__55914,G__55918,map__55916,map__55916__$1,attribute,attr_leaf_in,attr_branch_in,c__4521__auto__,size__4522__auto__,b__55915,s__55913__$2,temp__5720__auto__,G__55910,map__55908,map__55908__$1,attr_type_mismatch,attr_mismatch_expanded,computed,_STAR_reconciler_STAR__orig_val__55898,_STAR_depth_STAR__orig_val__55899,_STAR_shared_STAR__orig_val__55900,_STAR_instrument_STAR__orig_val__55901,_STAR_parent_STAR__orig_val__55902,_STAR_reconciler_STAR__temp_val__55903,_STAR_depth_STAR__temp_val__55904,_STAR_shared_STAR__temp_val__55905,_STAR_instrument_STAR__temp_val__55906,_STAR_parent_STAR__temp_val__55907,this$,this__52659__auto__,x55897_56361))
;
return iter__4523__auto__(attr_branch_in);
})(),fulcro.client.localized_dom.hr(),(function (){var iter__4523__auto__ = ((function (i__55914,G__55918,map__55916,map__55916__$1,attribute,attr_leaf_in,attr_branch_in,c__4521__auto__,size__4522__auto__,b__55915,s__55913__$2,temp__5720__auto__,G__55910,map__55908,map__55908__$1,attr_type_mismatch,attr_mismatch_expanded,computed,_STAR_reconciler_STAR__orig_val__55898,_STAR_depth_STAR__orig_val__55899,_STAR_shared_STAR__orig_val__55900,_STAR_instrument_STAR__orig_val__55901,_STAR_parent_STAR__orig_val__55902,_STAR_reconciler_STAR__temp_val__55903,_STAR_depth_STAR__temp_val__55904,_STAR_shared_STAR__temp_val__55905,_STAR_instrument_STAR__temp_val__55906,_STAR_parent_STAR__temp_val__55907,this$,this__52659__auto__,x55897_56361){
return (function com$wsscode$pathom$viz$index_explorer$iter__55912_$_iter__55924(s__55925){
return (new cljs.core.LazySeq(null,((function (i__55914,G__55918,map__55916,map__55916__$1,attribute,attr_leaf_in,attr_branch_in,c__4521__auto__,size__4522__auto__,b__55915,s__55913__$2,temp__5720__auto__,G__55910,map__55908,map__55908__$1,attr_type_mismatch,attr_mismatch_expanded,computed,_STAR_reconciler_STAR__orig_val__55898,_STAR_depth_STAR__orig_val__55899,_STAR_shared_STAR__orig_val__55900,_STAR_instrument_STAR__orig_val__55901,_STAR_parent_STAR__orig_val__55902,_STAR_reconciler_STAR__temp_val__55903,_STAR_depth_STAR__temp_val__55904,_STAR_shared_STAR__temp_val__55905,_STAR_instrument_STAR__temp_val__55906,_STAR_parent_STAR__temp_val__55907,this$,this__52659__auto__,x55897_56361){
return (function (){
var s__55925__$1 = s__55925;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__55925__$1);
if(temp__5720__auto____$1){
var s__55925__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__55925__$2)){
var c__4521__auto____$1 = cljs.core.chunk_first(s__55925__$2);
var size__4522__auto____$1 = cljs.core.count(c__4521__auto____$1);
var b__55927 = cljs.core.chunk_buffer(size__4522__auto____$1);
if((function (){var i__55926 = (0);
while(true){
if((i__55926 < size__4522__auto____$1)){
var resolver = cljs.core._nth(c__4521__auto____$1,i__55926);
cljs.core.chunk_append(b__55927,com.wsscode.pathom.viz.index_explorer.resolver_link(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),resolver], null),computed));

var G__56363 = (i__55926 + (1));
i__55926 = G__56363;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__55927),com$wsscode$pathom$viz$index_explorer$iter__55912_$_iter__55924(cljs.core.chunk_rest(s__55925__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__55927),null);
}
} else {
var resolver = cljs.core.first(s__55925__$2);
return cljs.core.cons(com.wsscode.pathom.viz.index_explorer.resolver_link(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),resolver], null),computed),com$wsscode$pathom$viz$index_explorer$iter__55912_$_iter__55924(cljs.core.rest(s__55925__$2)));
}
} else {
return null;
}
break;
}
});})(i__55914,G__55918,map__55916,map__55916__$1,attribute,attr_leaf_in,attr_branch_in,c__4521__auto__,size__4522__auto__,b__55915,s__55913__$2,temp__5720__auto__,G__55910,map__55908,map__55908__$1,attr_type_mismatch,attr_mismatch_expanded,computed,_STAR_reconciler_STAR__orig_val__55898,_STAR_depth_STAR__orig_val__55899,_STAR_shared_STAR__orig_val__55900,_STAR_instrument_STAR__orig_val__55901,_STAR_parent_STAR__orig_val__55902,_STAR_reconciler_STAR__temp_val__55903,_STAR_depth_STAR__temp_val__55904,_STAR_shared_STAR__temp_val__55905,_STAR_instrument_STAR__temp_val__55906,_STAR_parent_STAR__temp_val__55907,this$,this__52659__auto__,x55897_56361))
,null,null));
});})(i__55914,G__55918,map__55916,map__55916__$1,attribute,attr_leaf_in,attr_branch_in,c__4521__auto__,size__4522__auto__,b__55915,s__55913__$2,temp__5720__auto__,G__55910,map__55908,map__55908__$1,attr_type_mismatch,attr_mismatch_expanded,computed,_STAR_reconciler_STAR__orig_val__55898,_STAR_depth_STAR__orig_val__55899,_STAR_shared_STAR__orig_val__55900,_STAR_instrument_STAR__orig_val__55901,_STAR_parent_STAR__orig_val__55902,_STAR_reconciler_STAR__temp_val__55903,_STAR_depth_STAR__temp_val__55904,_STAR_shared_STAR__temp_val__55905,_STAR_instrument_STAR__temp_val__55906,_STAR_parent_STAR__temp_val__55907,this$,this__52659__auto__,x55897_56361))
;
return iter__4523__auto__(attr_leaf_in);
})()], 0));
return (com.wsscode.pathom.viz.ui.kit.raw_collapsible.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.raw_collapsible.cljs$core$IFn$_invoke$arity$2(G__55918,G__55919) : com.wsscode.pathom.viz.ui.kit.raw_collapsible.call(null,G__55918,G__55919));
})());

var G__56364 = (i__55914 + (1));
i__55914 = G__56364;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__55915),com$wsscode$pathom$viz$index_explorer$iter__55912(cljs.core.chunk_rest(s__55913__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__55915),null);
}
} else {
var map__55928 = cljs.core.first(s__55913__$2);
var map__55928__$1 = (((((!((map__55928 == null))))?(((((map__55928.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55928.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55928):map__55928);
var attribute = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55928__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075));
var attr_leaf_in = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55928__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attr-leaf-in","com.wsscode.pathom.connect/attr-leaf-in",-1959401711));
var attr_branch_in = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55928__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attr-branch-in","com.wsscode.pathom.connect/attr-branch-in",1982854732));
return cljs.core.cons((function (){var G__55930 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"react-key","react-key",1337881348),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attribute], 0)),new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","collapsed?","com.wsscode.pathom.viz.ui.kit/collapsed?",301612965),(!(cljs.core.contains_QMARK_(attr_mismatch_expanded,attribute))),new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","on-toggle","com.wsscode.pathom.viz.ui.kit/on-toggle",629501911),((function (map__55928,map__55928__$1,attribute,attr_leaf_in,attr_branch_in,s__55913__$2,temp__5720__auto__,G__55910,map__55908,map__55908__$1,attr_type_mismatch,attr_mismatch_expanded,computed,_STAR_reconciler_STAR__orig_val__55898,_STAR_depth_STAR__orig_val__55899,_STAR_shared_STAR__orig_val__55900,_STAR_instrument_STAR__orig_val__55901,_STAR_parent_STAR__orig_val__55902,_STAR_reconciler_STAR__temp_val__55903,_STAR_depth_STAR__temp_val__55904,_STAR_shared_STAR__temp_val__55905,_STAR_instrument_STAR__temp_val__55906,_STAR_parent_STAR__temp_val__55907,this$,this__52659__auto__,x55897_56361){
return (function (){
return com.wsscode.pathom.viz.helpers.update_value_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-mismatch-expanded","com.wsscode.pathom.viz.index-explorer/attr-mismatch-expanded",1688513157),com.wsscode.pathom.viz.helpers.toggle_set_item,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attribute], 0));
});})(map__55928,map__55928__$1,attribute,attr_leaf_in,attr_branch_in,s__55913__$2,temp__5720__auto__,G__55910,map__55908,map__55908__$1,attr_type_mismatch,attr_mismatch_expanded,computed,_STAR_reconciler_STAR__orig_val__55898,_STAR_depth_STAR__orig_val__55899,_STAR_shared_STAR__orig_val__55900,_STAR_instrument_STAR__orig_val__55901,_STAR_parent_STAR__orig_val__55902,_STAR_reconciler_STAR__temp_val__55903,_STAR_depth_STAR__temp_val__55904,_STAR_shared_STAR__temp_val__55905,_STAR_instrument_STAR__temp_val__55906,_STAR_parent_STAR__temp_val__55907,this$,this__52659__auto__,x55897_56361))
,new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","title","com.wsscode.pathom.viz.ui.kit/title",-1326329402),com.wsscode.pathom.viz.index_explorer.attribute_link(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),attribute], null),computed)], null);
var G__55931 = fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".resolver-container",".resolver-container",925822524),(function (){var iter__4523__auto__ = ((function (G__55930,map__55928,map__55928__$1,attribute,attr_leaf_in,attr_branch_in,s__55913__$2,temp__5720__auto__,G__55910,map__55908,map__55908__$1,attr_type_mismatch,attr_mismatch_expanded,computed,_STAR_reconciler_STAR__orig_val__55898,_STAR_depth_STAR__orig_val__55899,_STAR_shared_STAR__orig_val__55900,_STAR_instrument_STAR__orig_val__55901,_STAR_parent_STAR__orig_val__55902,_STAR_reconciler_STAR__temp_val__55903,_STAR_depth_STAR__temp_val__55904,_STAR_shared_STAR__temp_val__55905,_STAR_instrument_STAR__temp_val__55906,_STAR_parent_STAR__temp_val__55907,this$,this__52659__auto__,x55897_56361){
return (function com$wsscode$pathom$viz$index_explorer$iter__55912_$_iter__55932(s__55933){
return (new cljs.core.LazySeq(null,((function (G__55930,map__55928,map__55928__$1,attribute,attr_leaf_in,attr_branch_in,s__55913__$2,temp__5720__auto__,G__55910,map__55908,map__55908__$1,attr_type_mismatch,attr_mismatch_expanded,computed,_STAR_reconciler_STAR__orig_val__55898,_STAR_depth_STAR__orig_val__55899,_STAR_shared_STAR__orig_val__55900,_STAR_instrument_STAR__orig_val__55901,_STAR_parent_STAR__orig_val__55902,_STAR_reconciler_STAR__temp_val__55903,_STAR_depth_STAR__temp_val__55904,_STAR_shared_STAR__temp_val__55905,_STAR_instrument_STAR__temp_val__55906,_STAR_parent_STAR__temp_val__55907,this$,this__52659__auto__,x55897_56361){
return (function (){
var s__55933__$1 = s__55933;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__55933__$1);
if(temp__5720__auto____$1){
var s__55933__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__55933__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__55933__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__55935 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__55934 = (0);
while(true){
if((i__55934 < size__4522__auto__)){
var resolver = cljs.core._nth(c__4521__auto__,i__55934);
cljs.core.chunk_append(b__55935,com.wsscode.pathom.viz.index_explorer.resolver_link(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),resolver], null),computed));

var G__56365 = (i__55934 + (1));
i__55934 = G__56365;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__55935),com$wsscode$pathom$viz$index_explorer$iter__55912_$_iter__55932(cljs.core.chunk_rest(s__55933__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__55935),null);
}
} else {
var resolver = cljs.core.first(s__55933__$2);
return cljs.core.cons(com.wsscode.pathom.viz.index_explorer.resolver_link(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),resolver], null),computed),com$wsscode$pathom$viz$index_explorer$iter__55912_$_iter__55932(cljs.core.rest(s__55933__$2)));
}
} else {
return null;
}
break;
}
});})(G__55930,map__55928,map__55928__$1,attribute,attr_leaf_in,attr_branch_in,s__55913__$2,temp__5720__auto__,G__55910,map__55908,map__55908__$1,attr_type_mismatch,attr_mismatch_expanded,computed,_STAR_reconciler_STAR__orig_val__55898,_STAR_depth_STAR__orig_val__55899,_STAR_shared_STAR__orig_val__55900,_STAR_instrument_STAR__orig_val__55901,_STAR_parent_STAR__orig_val__55902,_STAR_reconciler_STAR__temp_val__55903,_STAR_depth_STAR__temp_val__55904,_STAR_shared_STAR__temp_val__55905,_STAR_instrument_STAR__temp_val__55906,_STAR_parent_STAR__temp_val__55907,this$,this__52659__auto__,x55897_56361))
,null,null));
});})(G__55930,map__55928,map__55928__$1,attribute,attr_leaf_in,attr_branch_in,s__55913__$2,temp__5720__auto__,G__55910,map__55908,map__55908__$1,attr_type_mismatch,attr_mismatch_expanded,computed,_STAR_reconciler_STAR__orig_val__55898,_STAR_depth_STAR__orig_val__55899,_STAR_shared_STAR__orig_val__55900,_STAR_instrument_STAR__orig_val__55901,_STAR_parent_STAR__orig_val__55902,_STAR_reconciler_STAR__temp_val__55903,_STAR_depth_STAR__temp_val__55904,_STAR_shared_STAR__temp_val__55905,_STAR_instrument_STAR__temp_val__55906,_STAR_parent_STAR__temp_val__55907,this$,this__52659__auto__,x55897_56361))
;
return iter__4523__auto__(attr_branch_in);
})(),fulcro.client.localized_dom.hr(),(function (){var iter__4523__auto__ = ((function (G__55930,map__55928,map__55928__$1,attribute,attr_leaf_in,attr_branch_in,s__55913__$2,temp__5720__auto__,G__55910,map__55908,map__55908__$1,attr_type_mismatch,attr_mismatch_expanded,computed,_STAR_reconciler_STAR__orig_val__55898,_STAR_depth_STAR__orig_val__55899,_STAR_shared_STAR__orig_val__55900,_STAR_instrument_STAR__orig_val__55901,_STAR_parent_STAR__orig_val__55902,_STAR_reconciler_STAR__temp_val__55903,_STAR_depth_STAR__temp_val__55904,_STAR_shared_STAR__temp_val__55905,_STAR_instrument_STAR__temp_val__55906,_STAR_parent_STAR__temp_val__55907,this$,this__52659__auto__,x55897_56361){
return (function com$wsscode$pathom$viz$index_explorer$iter__55912_$_iter__55936(s__55937){
return (new cljs.core.LazySeq(null,((function (G__55930,map__55928,map__55928__$1,attribute,attr_leaf_in,attr_branch_in,s__55913__$2,temp__5720__auto__,G__55910,map__55908,map__55908__$1,attr_type_mismatch,attr_mismatch_expanded,computed,_STAR_reconciler_STAR__orig_val__55898,_STAR_depth_STAR__orig_val__55899,_STAR_shared_STAR__orig_val__55900,_STAR_instrument_STAR__orig_val__55901,_STAR_parent_STAR__orig_val__55902,_STAR_reconciler_STAR__temp_val__55903,_STAR_depth_STAR__temp_val__55904,_STAR_shared_STAR__temp_val__55905,_STAR_instrument_STAR__temp_val__55906,_STAR_parent_STAR__temp_val__55907,this$,this__52659__auto__,x55897_56361){
return (function (){
var s__55937__$1 = s__55937;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__55937__$1);
if(temp__5720__auto____$1){
var s__55937__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__55937__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__55937__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__55939 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__55938 = (0);
while(true){
if((i__55938 < size__4522__auto__)){
var resolver = cljs.core._nth(c__4521__auto__,i__55938);
cljs.core.chunk_append(b__55939,com.wsscode.pathom.viz.index_explorer.resolver_link(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),resolver], null),computed));

var G__56366 = (i__55938 + (1));
i__55938 = G__56366;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__55939),com$wsscode$pathom$viz$index_explorer$iter__55912_$_iter__55936(cljs.core.chunk_rest(s__55937__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__55939),null);
}
} else {
var resolver = cljs.core.first(s__55937__$2);
return cljs.core.cons(com.wsscode.pathom.viz.index_explorer.resolver_link(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),resolver], null),computed),com$wsscode$pathom$viz$index_explorer$iter__55912_$_iter__55936(cljs.core.rest(s__55937__$2)));
}
} else {
return null;
}
break;
}
});})(G__55930,map__55928,map__55928__$1,attribute,attr_leaf_in,attr_branch_in,s__55913__$2,temp__5720__auto__,G__55910,map__55908,map__55908__$1,attr_type_mismatch,attr_mismatch_expanded,computed,_STAR_reconciler_STAR__orig_val__55898,_STAR_depth_STAR__orig_val__55899,_STAR_shared_STAR__orig_val__55900,_STAR_instrument_STAR__orig_val__55901,_STAR_parent_STAR__orig_val__55902,_STAR_reconciler_STAR__temp_val__55903,_STAR_depth_STAR__temp_val__55904,_STAR_shared_STAR__temp_val__55905,_STAR_instrument_STAR__temp_val__55906,_STAR_parent_STAR__temp_val__55907,this$,this__52659__auto__,x55897_56361))
,null,null));
});})(G__55930,map__55928,map__55928__$1,attribute,attr_leaf_in,attr_branch_in,s__55913__$2,temp__5720__auto__,G__55910,map__55908,map__55908__$1,attr_type_mismatch,attr_mismatch_expanded,computed,_STAR_reconciler_STAR__orig_val__55898,_STAR_depth_STAR__orig_val__55899,_STAR_shared_STAR__orig_val__55900,_STAR_instrument_STAR__orig_val__55901,_STAR_parent_STAR__orig_val__55902,_STAR_reconciler_STAR__temp_val__55903,_STAR_depth_STAR__temp_val__55904,_STAR_shared_STAR__temp_val__55905,_STAR_instrument_STAR__temp_val__55906,_STAR_parent_STAR__temp_val__55907,this$,this__52659__auto__,x55897_56361))
;
return iter__4523__auto__(attr_leaf_in);
})()], 0));
return (com.wsscode.pathom.viz.ui.kit.raw_collapsible.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.raw_collapsible.cljs$core$IFn$_invoke$arity$2(G__55930,G__55931) : com.wsscode.pathom.viz.ui.kit.raw_collapsible.call(null,G__55930,G__55931));
})(),com$wsscode$pathom$viz$index_explorer$iter__55912(cljs.core.rest(s__55913__$2)));
}
} else {
return null;
}
break;
}
});})(G__55910,map__55908,map__55908__$1,attr_type_mismatch,attr_mismatch_expanded,computed,_STAR_reconciler_STAR__orig_val__55898,_STAR_depth_STAR__orig_val__55899,_STAR_shared_STAR__orig_val__55900,_STAR_instrument_STAR__orig_val__55901,_STAR_parent_STAR__orig_val__55902,_STAR_reconciler_STAR__temp_val__55903,_STAR_depth_STAR__temp_val__55904,_STAR_shared_STAR__temp_val__55905,_STAR_instrument_STAR__temp_val__55906,_STAR_parent_STAR__temp_val__55907,this$,this__52659__auto__,x55897_56361))
,null,null));
});})(G__55910,map__55908,map__55908__$1,attr_type_mismatch,attr_mismatch_expanded,computed,_STAR_reconciler_STAR__orig_val__55898,_STAR_depth_STAR__orig_val__55899,_STAR_shared_STAR__orig_val__55900,_STAR_instrument_STAR__orig_val__55901,_STAR_parent_STAR__orig_val__55902,_STAR_reconciler_STAR__temp_val__55903,_STAR_depth_STAR__temp_val__55904,_STAR_shared_STAR__temp_val__55905,_STAR_instrument_STAR__temp_val__55906,_STAR_parent_STAR__temp_val__55907,this$,this__52659__auto__,x55897_56361))
;
return iter__4523__auto__(attr_type_mismatch);
})();
return (com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2(G__55910,G__55911) : com.wsscode.pathom.viz.ui.kit.panel.call(null,G__55910,G__55911));
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__55902;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__55901;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__55900;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__55899;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__55898;
}});})(x55897_56361))
;


com.wsscode.pathom.viz.index_explorer.AttributeMismatchPanel.prototype.constructor = com.wsscode.pathom.viz.index_explorer.AttributeMismatchPanel;

com.wsscode.pathom.viz.index_explorer.AttributeMismatchPanel.prototype.constructor.displayName = "com.wsscode.pathom.viz.index-explorer/AttributeMismatchPanel";

com.wsscode.pathom.viz.index_explorer.AttributeMismatchPanel.prototype.fulcro$isComponent = true;

var x55940_56367 = com.wsscode.pathom.viz.index_explorer.AttributeMismatchPanel;
x55940_56367.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x55940_56367.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x55940_56367){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".resolver-container",".resolver-container",925822524),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"26px"], null)], null)], null);
});})(x55940_56367))
;

x55940_56367.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x55940_56367){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x55940_56367))
;

x55940_56367.fulcro$client$primitives$IPreMerge$ = cljs.core.PROTOCOL_SENTINEL;

x55940_56367.fulcro$client$primitives$IPreMerge$pre_merge_STAR_$arity$2 = ((function (x55940_56367){
return (function (this$,p__55941){
var map__55942 = p__55941;
var map__55942__$1 = (((((!((map__55942 == null))))?(((((map__55942.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55942.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55942):map__55942);
var current_normalized = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55942__$1,new cljs.core.Keyword(null,"current-normalized","current-normalized",851723724));
var data_tree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55942__$1,new cljs.core.Keyword(null,"data-tree","data-tree",1311167582));
var this$__$1 = this;
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-mismatch-expanded","com.wsscode.pathom.viz.index-explorer/attr-mismatch-expanded",1688513157),cljs.core.PersistentHashSet.EMPTY], null),current_normalized,data_tree], 0));
});})(x55940_56367))
;

x55940_56367.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x55940_56367.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x55940_56367){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x55940_56367))
;

x55940_56367.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x55940_56367.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x55940_56367){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-mismatch-expanded","com.wsscode.pathom.viz.index-explorer/attr-mismatch-expanded",1688513157),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-type-mismatch","com.wsscode.pathom.viz.index-explorer/attr-type-mismatch",-1230484441),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-leaf-in","com.wsscode.pathom.connect/attr-leaf-in",-1959401711),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-branch-in","com.wsscode.pathom.connect/attr-branch-in",1982854732)], null)], null)], null);
});})(x55940_56367))
;


var x55944_56368 = com.wsscode.pathom.viz.index_explorer.AttributeMismatchPanel.prototype;
x55944_56368.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x55944_56368.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x55944_56368){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".resolver-container",".resolver-container",925822524),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"26px"], null)], null)], null);
});})(x55944_56368))
;

x55944_56368.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x55944_56368){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x55944_56368))
;

x55944_56368.fulcro$client$primitives$IPreMerge$ = cljs.core.PROTOCOL_SENTINEL;

x55944_56368.fulcro$client$primitives$IPreMerge$pre_merge_STAR_$arity$2 = ((function (x55944_56368){
return (function (this$,p__55945){
var map__55946 = p__55945;
var map__55946__$1 = (((((!((map__55946 == null))))?(((((map__55946.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55946.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55946):map__55946);
var current_normalized = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55946__$1,new cljs.core.Keyword(null,"current-normalized","current-normalized",851723724));
var data_tree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55946__$1,new cljs.core.Keyword(null,"data-tree","data-tree",1311167582));
var this$__$1 = this;
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-mismatch-expanded","com.wsscode.pathom.viz.index-explorer/attr-mismatch-expanded",1688513157),cljs.core.PersistentHashSet.EMPTY], null),current_normalized,data_tree], 0));
});})(x55944_56368))
;

x55944_56368.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x55944_56368.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x55944_56368){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x55944_56368))
;

x55944_56368.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x55944_56368.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x55944_56368){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-mismatch-expanded","com.wsscode.pathom.viz.index-explorer/attr-mismatch-expanded",1688513157),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-type-mismatch","com.wsscode.pathom.viz.index-explorer/attr-type-mismatch",-1230484441),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-leaf-in","com.wsscode.pathom.connect/attr-leaf-in",-1959401711),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-branch-in","com.wsscode.pathom.connect/attr-branch-in",1982854732)], null)], null)], null);
});})(x55944_56368))
;


com.wsscode.pathom.viz.index_explorer.AttributeMismatchPanel.cljs$lang$type = true;

com.wsscode.pathom.viz.index_explorer.AttributeMismatchPanel.cljs$lang$ctorStr = "com.wsscode.pathom.viz.index-explorer/AttributeMismatchPanel";

com.wsscode.pathom.viz.index_explorer.AttributeMismatchPanel.cljs$lang$ctorPrWriter = (function (this__53744__auto__,writer__53745__auto__,opt__53746__auto__){
return cljs.core._write(writer__53745__auto__,"com.wsscode.pathom.viz.index-explorer/AttributeMismatchPanel");
});
com.wsscode.pathom.viz.index_explorer.attribute_mismatch_panel = fulcro.client.primitives.computed_factory.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.AttributeMismatchPanel);
if((typeof com !== 'undefined') && (typeof com.wsscode !== 'undefined') && (typeof com.wsscode.pathom !== 'undefined') && (typeof com.wsscode.pathom.viz !== 'undefined') && (typeof com.wsscode.pathom.viz.index_explorer !== 'undefined') && (typeof com.wsscode.pathom.viz.index_explorer.StatsView !== 'undefined')){
} else {
/**
 * @constructor
 * @nocollapse
 */
com.wsscode.pathom.viz.index_explorer.StatsView = (function com$wsscode$pathom$viz$index_explorer$StatsView(){
var this__53741__auto__ = this;
React.Component.apply(this__53741__auto__,arguments);

if((!((this__53741__auto__.initLocalState == null)))){
this__53741__auto__.state = this__53741__auto__.initLocalState();
} else {
this__53741__auto__.state = ({});
}

return this__53741__auto__;
});

goog.object.extend(com.wsscode.pathom.viz.index_explorer.StatsView.prototype,React.Component.prototype,fulcro.client.primitives.default_component_prototype);
}

fulcro.client.primitives._register_component_BANG_(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","StatsView","com.wsscode.pathom.viz.index-explorer/StatsView",1030504264),com.wsscode.pathom.viz.index_explorer.StatsView);

var x55950_56369 = com.wsscode.pathom.viz.index_explorer.StatsView.prototype;
x55950_56369.render = ((function (x55950_56369){
return (function (){
var this__52659__auto__ = this;
var this$ = this__52659__auto__;
var _STAR_reconciler_STAR__orig_val__55951 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__55952 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__55953 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__55954 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__55955 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__55956 = fulcro.client.primitives.get_reconciler(this__52659__auto__);
var _STAR_depth_STAR__temp_val__55957 = (fulcro.client.primitives.depth(this__52659__auto__) + (1));
var _STAR_shared_STAR__temp_val__55958 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__52659__auto__);
var _STAR_instrument_STAR__temp_val__55959 = fulcro.client.primitives.instrument(this__52659__auto__);
var _STAR_parent_STAR__temp_val__55960 = this__52659__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__55956;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__55957;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__55958;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__55959;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__55960;

try{var map__55961 = fulcro.client.primitives.props(this$);
var map__55961__$1 = (((((!((map__55961 == null))))?(((((map__55961.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55961.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55961):map__55961);
var attribute_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55961__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attribute-count","com.wsscode.pathom.viz.index-explorer/attribute-count",699283957));
var mutation_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55961__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutation-count","com.wsscode.pathom.viz.index-explorer/mutation-count",-544331737));
var top_connection_hubs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55961__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","top-connection-hubs","com.wsscode.pathom.viz.index-explorer/top-connection-hubs",1843947657));
var attr_type_mismatch_join = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55961__$1,new cljs.core.Keyword(">","attr-type-mismatch-join",">/attr-type-mismatch-join",-38351640));
var idents_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55961__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","idents-count","com.wsscode.pathom.viz.index-explorer/idents-count",2076723333));
var attr_type_mismatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55961__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-type-mismatch","com.wsscode.pathom.viz.index-explorer/attr-type-mismatch",-1230484441));
var resolver_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55961__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","resolver-count","com.wsscode.pathom.viz.index-explorer/resolver-count",1252340099));
var globals_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55961__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","globals-count","com.wsscode.pathom.viz.index-explorer/globals-count",1697710019));
var attr_edges_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55961__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-edges-count","com.wsscode.pathom.viz.index-explorer/attr-edges-count",-99271495));
var computed = fulcro.client.primitives.get_computed.cljs$core$IFn$_invoke$arity$1(this$);
return fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".container",".container",-1441208944),com.wsscode.pathom.viz.ui.kit.gc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".flex",".flex",-73425686),new cljs.core.Keyword(null,".scrollbars",".scrollbars",-1193970120)], 0)),fulcro.client.localized_dom.h1.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".title",".title",-416997657),"Stats"], 0)),(function (){var G__55963 = cljs.core.PersistentArrayMap.EMPTY;
var G__55964 = fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.wsscode.pathom.viz.ui.kit.gc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".flex",".flex",-73425686)], 0)),(function (){var G__55966 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","panel-title","com.wsscode.pathom.viz.ui.kit/panel-title",1529445284),"Counters"], null);
var G__55967 = fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Attribute count: ",attribute_count], 0));
var G__55968 = fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Resolver count: ",resolver_count], 0));
var G__55969 = fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Mutation count: ",mutation_count], 0));
var G__55970 = fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Globals count: ",globals_count], 0));
var G__55971 = fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Idents count: ",idents_count], 0));
var G__55972 = fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Edges count: ",attr_edges_count], 0));
return (com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$7 ? com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$7(G__55966,G__55967,G__55968,G__55969,G__55970,G__55971,G__55972) : com.wsscode.pathom.viz.ui.kit.panel.call(null,G__55966,G__55967,G__55968,G__55969,G__55970,G__55971,G__55972));
})(),(function (){var G__55973 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","panel-title","com.wsscode.pathom.viz.ui.kit/panel-title",1529445284),"Most Connected Attributes"], null);
var G__55974 = (function (){var iter__4523__auto__ = ((function (G__55973,G__55963,map__55961,map__55961__$1,attribute_count,mutation_count,top_connection_hubs,attr_type_mismatch_join,idents_count,attr_type_mismatch,resolver_count,globals_count,attr_edges_count,computed,_STAR_reconciler_STAR__orig_val__55951,_STAR_depth_STAR__orig_val__55952,_STAR_shared_STAR__orig_val__55953,_STAR_instrument_STAR__orig_val__55954,_STAR_parent_STAR__orig_val__55955,_STAR_reconciler_STAR__temp_val__55956,_STAR_depth_STAR__temp_val__55957,_STAR_shared_STAR__temp_val__55958,_STAR_instrument_STAR__temp_val__55959,_STAR_parent_STAR__temp_val__55960,this$,this__52659__auto__,x55950_56369){
return (function com$wsscode$pathom$viz$index_explorer$iter__55975(s__55976){
return (new cljs.core.LazySeq(null,((function (G__55973,G__55963,map__55961,map__55961__$1,attribute_count,mutation_count,top_connection_hubs,attr_type_mismatch_join,idents_count,attr_type_mismatch,resolver_count,globals_count,attr_edges_count,computed,_STAR_reconciler_STAR__orig_val__55951,_STAR_depth_STAR__orig_val__55952,_STAR_shared_STAR__orig_val__55953,_STAR_instrument_STAR__orig_val__55954,_STAR_parent_STAR__orig_val__55955,_STAR_reconciler_STAR__temp_val__55956,_STAR_depth_STAR__temp_val__55957,_STAR_shared_STAR__temp_val__55958,_STAR_instrument_STAR__temp_val__55959,_STAR_parent_STAR__temp_val__55960,this$,this__52659__auto__,x55950_56369){
return (function (){
var s__55976__$1 = s__55976;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__55976__$1);
if(temp__5720__auto__){
var s__55976__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__55976__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__55976__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__55978 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__55977 = (0);
while(true){
if((i__55977 < size__4522__auto__)){
var map__55979 = cljs.core._nth(c__4521__auto__,i__55977);
var map__55979__$1 = (((((!((map__55979 == null))))?(((((map__55979.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55979.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55979):map__55979);
var attribute = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55979__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075));
var attr_edges_count__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55979__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-edges-count","com.wsscode.pathom.viz.index-explorer/attr-edges-count",-99271495));
cljs.core.chunk_append(b__55978,com.wsscode.pathom.viz.index_explorer.attribute_link(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),attribute,new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","render","com.wsscode.pathom.viz.ui.kit/render",1024565529),((function (i__55977,map__55979,map__55979__$1,attribute,attr_edges_count__$1,c__4521__auto__,size__4522__auto__,b__55978,s__55976__$2,temp__5720__auto__,G__55973,G__55963,map__55961,map__55961__$1,attribute_count,mutation_count,top_connection_hubs,attr_type_mismatch_join,idents_count,attr_type_mismatch,resolver_count,globals_count,attr_edges_count,computed,_STAR_reconciler_STAR__orig_val__55951,_STAR_depth_STAR__orig_val__55952,_STAR_shared_STAR__orig_val__55953,_STAR_instrument_STAR__orig_val__55954,_STAR_parent_STAR__orig_val__55955,_STAR_reconciler_STAR__temp_val__55956,_STAR_depth_STAR__temp_val__55957,_STAR_shared_STAR__temp_val__55958,_STAR_instrument_STAR__temp_val__55959,_STAR_parent_STAR__temp_val__55960,this$,this__52659__auto__,x55950_56369){
return (function (){
return ["[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(attr_edges_count__$1),"] ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attribute], 0))].join('');
});})(i__55977,map__55979,map__55979__$1,attribute,attr_edges_count__$1,c__4521__auto__,size__4522__auto__,b__55978,s__55976__$2,temp__5720__auto__,G__55973,G__55963,map__55961,map__55961__$1,attribute_count,mutation_count,top_connection_hubs,attr_type_mismatch_join,idents_count,attr_type_mismatch,resolver_count,globals_count,attr_edges_count,computed,_STAR_reconciler_STAR__orig_val__55951,_STAR_depth_STAR__orig_val__55952,_STAR_shared_STAR__orig_val__55953,_STAR_instrument_STAR__orig_val__55954,_STAR_parent_STAR__orig_val__55955,_STAR_reconciler_STAR__temp_val__55956,_STAR_depth_STAR__temp_val__55957,_STAR_shared_STAR__temp_val__55958,_STAR_instrument_STAR__temp_val__55959,_STAR_parent_STAR__temp_val__55960,this$,this__52659__auto__,x55950_56369))
], null),computed));

var G__56370 = (i__55977 + (1));
i__55977 = G__56370;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__55978),com$wsscode$pathom$viz$index_explorer$iter__55975(cljs.core.chunk_rest(s__55976__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__55978),null);
}
} else {
var map__55981 = cljs.core.first(s__55976__$2);
var map__55981__$1 = (((((!((map__55981 == null))))?(((((map__55981.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55981.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55981):map__55981);
var attribute = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55981__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075));
var attr_edges_count__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55981__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-edges-count","com.wsscode.pathom.viz.index-explorer/attr-edges-count",-99271495));
return cljs.core.cons(com.wsscode.pathom.viz.index_explorer.attribute_link(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),attribute,new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","render","com.wsscode.pathom.viz.ui.kit/render",1024565529),((function (map__55981,map__55981__$1,attribute,attr_edges_count__$1,s__55976__$2,temp__5720__auto__,G__55973,G__55963,map__55961,map__55961__$1,attribute_count,mutation_count,top_connection_hubs,attr_type_mismatch_join,idents_count,attr_type_mismatch,resolver_count,globals_count,attr_edges_count,computed,_STAR_reconciler_STAR__orig_val__55951,_STAR_depth_STAR__orig_val__55952,_STAR_shared_STAR__orig_val__55953,_STAR_instrument_STAR__orig_val__55954,_STAR_parent_STAR__orig_val__55955,_STAR_reconciler_STAR__temp_val__55956,_STAR_depth_STAR__temp_val__55957,_STAR_shared_STAR__temp_val__55958,_STAR_instrument_STAR__temp_val__55959,_STAR_parent_STAR__temp_val__55960,this$,this__52659__auto__,x55950_56369){
return (function (){
return ["[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(attr_edges_count__$1),"] ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attribute], 0))].join('');
});})(map__55981,map__55981__$1,attribute,attr_edges_count__$1,s__55976__$2,temp__5720__auto__,G__55973,G__55963,map__55961,map__55961__$1,attribute_count,mutation_count,top_connection_hubs,attr_type_mismatch_join,idents_count,attr_type_mismatch,resolver_count,globals_count,attr_edges_count,computed,_STAR_reconciler_STAR__orig_val__55951,_STAR_depth_STAR__orig_val__55952,_STAR_shared_STAR__orig_val__55953,_STAR_instrument_STAR__orig_val__55954,_STAR_parent_STAR__orig_val__55955,_STAR_reconciler_STAR__temp_val__55956,_STAR_depth_STAR__temp_val__55957,_STAR_shared_STAR__temp_val__55958,_STAR_instrument_STAR__temp_val__55959,_STAR_parent_STAR__temp_val__55960,this$,this__52659__auto__,x55950_56369))
], null),computed),com$wsscode$pathom$viz$index_explorer$iter__55975(cljs.core.rest(s__55976__$2)));
}
} else {
return null;
}
break;
}
});})(G__55973,G__55963,map__55961,map__55961__$1,attribute_count,mutation_count,top_connection_hubs,attr_type_mismatch_join,idents_count,attr_type_mismatch,resolver_count,globals_count,attr_edges_count,computed,_STAR_reconciler_STAR__orig_val__55951,_STAR_depth_STAR__orig_val__55952,_STAR_shared_STAR__orig_val__55953,_STAR_instrument_STAR__orig_val__55954,_STAR_parent_STAR__orig_val__55955,_STAR_reconciler_STAR__temp_val__55956,_STAR_depth_STAR__temp_val__55957,_STAR_shared_STAR__temp_val__55958,_STAR_instrument_STAR__temp_val__55959,_STAR_parent_STAR__temp_val__55960,this$,this__52659__auto__,x55950_56369))
,null,null));
});})(G__55973,G__55963,map__55961,map__55961__$1,attribute_count,mutation_count,top_connection_hubs,attr_type_mismatch_join,idents_count,attr_type_mismatch,resolver_count,globals_count,attr_edges_count,computed,_STAR_reconciler_STAR__orig_val__55951,_STAR_depth_STAR__orig_val__55952,_STAR_shared_STAR__orig_val__55953,_STAR_instrument_STAR__orig_val__55954,_STAR_parent_STAR__orig_val__55955,_STAR_reconciler_STAR__temp_val__55956,_STAR_depth_STAR__temp_val__55957,_STAR_shared_STAR__temp_val__55958,_STAR_instrument_STAR__temp_val__55959,_STAR_parent_STAR__temp_val__55960,this$,this__52659__auto__,x55950_56369))
;
return iter__4523__auto__(top_connection_hubs);
})();
return (com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2(G__55973,G__55974) : com.wsscode.pathom.viz.ui.kit.panel.call(null,G__55973,G__55974));
})()], 0));
var G__55965 = ((cljs.core.seq(attr_type_mismatch))?fulcro.client.primitives.fragment.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"24px"], null)], null)], 0)),fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.wsscode.pathom.viz.ui.kit.gc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".flex",".flex",-73425686)], 0)),(com.wsscode.pathom.viz.index_explorer.attribute_mismatch_panel.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.attribute_mismatch_panel.cljs$core$IFn$_invoke$arity$2(attr_type_mismatch_join,computed) : com.wsscode.pathom.viz.index_explorer.attribute_mismatch_panel.call(null,attr_type_mismatch_join,computed))], 0))], 0)):null);
return (com.wsscode.pathom.viz.ui.kit.row.cljs$core$IFn$_invoke$arity$3 ? com.wsscode.pathom.viz.ui.kit.row.cljs$core$IFn$_invoke$arity$3(G__55963,G__55964,G__55965) : com.wsscode.pathom.viz.ui.kit.row.call(null,G__55963,G__55964,G__55965));
})()], 0));
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__55955;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__55954;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__55953;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__55952;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__55951;
}});})(x55950_56369))
;


com.wsscode.pathom.viz.index_explorer.StatsView.prototype.constructor = com.wsscode.pathom.viz.index_explorer.StatsView;

com.wsscode.pathom.viz.index_explorer.StatsView.prototype.constructor.displayName = "com.wsscode.pathom.viz.index-explorer/StatsView";

com.wsscode.pathom.viz.index_explorer.StatsView.prototype.fulcro$isComponent = true;

var x55983_56371 = com.wsscode.pathom.viz.index_explorer.StatsView;
x55983_56371.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x55983_56371.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x55983_56371){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),"12px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".title",".title",-416997657),com.wsscode.pathom.viz.ui.kit.text_base], null)], null);
});})(x55983_56371))
;

x55983_56371.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x55983_56371){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x55983_56371))
;

x55983_56371.fulcro$client$primitives$IPreMerge$ = cljs.core.PROTOCOL_SENTINEL;

x55983_56371.fulcro$client$primitives$IPreMerge$pre_merge_STAR_$arity$2 = ((function (x55983_56371){
return (function (this$,p__55984){
var map__55985 = p__55984;
var map__55985__$1 = (((((!((map__55985 == null))))?(((((map__55985.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55985.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55985):map__55985);
var current_normalized = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55985__$1,new cljs.core.Keyword(null,"current-normalized","current-normalized",851723724));
var data_tree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55985__$1,new cljs.core.Keyword(null,"data-tree","data-tree",1311167582));
var this$__$1 = this;
var id = (function (){var or__4131__auto__ = new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625).cljs$core$IFn$_invoke$arity$1(data_tree);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625).cljs$core$IFn$_invoke$arity$1(current_normalized);
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
return cljs.core.random_uuid();
}
}
})();
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625),id,new cljs.core.Keyword(">","attr-type-mismatch-join",">/attr-type-mismatch-join",-38351640),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625),id], null)], null),current_normalized,data_tree], 0));
});})(x55983_56371))
;

x55983_56371.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x55983_56371.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x55983_56371){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x55983_56371))
;

x55983_56371.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x55983_56371.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x55983_56371){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attribute-count","com.wsscode.pathom.viz.index-explorer/attribute-count",699283957),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","resolver-count","com.wsscode.pathom.viz.index-explorer/resolver-count",1252340099),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","globals-count","com.wsscode.pathom.viz.index-explorer/globals-count",1697710019),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","idents-count","com.wsscode.pathom.viz.index-explorer/idents-count",2076723333),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-edges-count","com.wsscode.pathom.viz.index-explorer/attr-edges-count",-99271495),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutation-count","com.wsscode.pathom.viz.index-explorer/mutation-count",-544331737),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-type-mismatch","com.wsscode.pathom.viz.index-explorer/attr-type-mismatch",-1230484441),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","top-connection-hubs","com.wsscode.pathom.viz.index-explorer/top-connection-hubs",1843947657),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-edges-count","com.wsscode.pathom.viz.index-explorer/attr-edges-count",-99271495)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(">","attr-type-mismatch-join",">/attr-type-mismatch-join",-38351640),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.AttributeMismatchPanel)], null)], null);
});})(x55983_56371))
;


var x55987_56372 = com.wsscode.pathom.viz.index_explorer.StatsView.prototype;
x55987_56372.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x55987_56372.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x55987_56372){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),"12px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".title",".title",-416997657),com.wsscode.pathom.viz.ui.kit.text_base], null)], null);
});})(x55987_56372))
;

x55987_56372.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x55987_56372){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x55987_56372))
;

x55987_56372.fulcro$client$primitives$IPreMerge$ = cljs.core.PROTOCOL_SENTINEL;

x55987_56372.fulcro$client$primitives$IPreMerge$pre_merge_STAR_$arity$2 = ((function (x55987_56372){
return (function (this$,p__55988){
var map__55989 = p__55988;
var map__55989__$1 = (((((!((map__55989 == null))))?(((((map__55989.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55989.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55989):map__55989);
var current_normalized = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55989__$1,new cljs.core.Keyword(null,"current-normalized","current-normalized",851723724));
var data_tree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55989__$1,new cljs.core.Keyword(null,"data-tree","data-tree",1311167582));
var this$__$1 = this;
var id = (function (){var or__4131__auto__ = new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625).cljs$core$IFn$_invoke$arity$1(data_tree);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625).cljs$core$IFn$_invoke$arity$1(current_normalized);
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
return cljs.core.random_uuid();
}
}
})();
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625),id,new cljs.core.Keyword(">","attr-type-mismatch-join",">/attr-type-mismatch-join",-38351640),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625),id], null)], null),current_normalized,data_tree], 0));
});})(x55987_56372))
;

x55987_56372.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x55987_56372.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x55987_56372){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x55987_56372))
;

x55987_56372.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x55987_56372.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x55987_56372){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attribute-count","com.wsscode.pathom.viz.index-explorer/attribute-count",699283957),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","resolver-count","com.wsscode.pathom.viz.index-explorer/resolver-count",1252340099),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","globals-count","com.wsscode.pathom.viz.index-explorer/globals-count",1697710019),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","idents-count","com.wsscode.pathom.viz.index-explorer/idents-count",2076723333),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-edges-count","com.wsscode.pathom.viz.index-explorer/attr-edges-count",-99271495),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutation-count","com.wsscode.pathom.viz.index-explorer/mutation-count",-544331737),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-type-mismatch","com.wsscode.pathom.viz.index-explorer/attr-type-mismatch",-1230484441),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","top-connection-hubs","com.wsscode.pathom.viz.index-explorer/top-connection-hubs",1843947657),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-edges-count","com.wsscode.pathom.viz.index-explorer/attr-edges-count",-99271495)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(">","attr-type-mismatch-join",">/attr-type-mismatch-join",-38351640),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.AttributeMismatchPanel)], null)], null);
});})(x55987_56372))
;


com.wsscode.pathom.viz.index_explorer.StatsView.cljs$lang$type = true;

com.wsscode.pathom.viz.index_explorer.StatsView.cljs$lang$ctorStr = "com.wsscode.pathom.viz.index-explorer/StatsView";

com.wsscode.pathom.viz.index_explorer.StatsView.cljs$lang$ctorPrWriter = (function (this__53744__auto__,writer__53745__auto__,opt__53746__auto__){
return cljs.core._write(writer__53745__auto__,"com.wsscode.pathom.viz.index-explorer/StatsView");
});
com.wsscode.pathom.viz.index_explorer.stats_view = fulcro.client.primitives.factory.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.StatsView);
if((typeof com !== 'undefined') && (typeof com.wsscode !== 'undefined') && (typeof com.wsscode.pathom !== 'undefined') && (typeof com.wsscode.pathom.viz !== 'undefined') && (typeof com.wsscode.pathom.viz.index_explorer !== 'undefined') && (typeof com.wsscode.pathom.viz.index_explorer.FullGraphView !== 'undefined')){
} else {
/**
 * @constructor
 * @nocollapse
 */
com.wsscode.pathom.viz.index_explorer.FullGraphView = (function com$wsscode$pathom$viz$index_explorer$FullGraphView(){
var this__53741__auto__ = this;
React.Component.apply(this__53741__auto__,arguments);

if((!((this__53741__auto__.initLocalState == null)))){
this__53741__auto__.state = this__53741__auto__.initLocalState();
} else {
this__53741__auto__.state = ({});
}

return this__53741__auto__;
});

goog.object.extend(com.wsscode.pathom.viz.index_explorer.FullGraphView.prototype,React.Component.prototype,fulcro.client.primitives.default_component_prototype);
}

fulcro.client.primitives._register_component_BANG_(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","FullGraphView","com.wsscode.pathom.viz.index-explorer/FullGraphView",1989996895),com.wsscode.pathom.viz.index_explorer.FullGraphView);

var x55994_56373 = com.wsscode.pathom.viz.index_explorer.FullGraphView.prototype;
x55994_56373.render = ((function (x55994_56373){
return (function (){
var this__52659__auto__ = this;
var this$ = this__52659__auto__;
var _STAR_reconciler_STAR__orig_val__55995 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__55996 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__55997 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__55998 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__55999 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__56000 = fulcro.client.primitives.get_reconciler(this__52659__auto__);
var _STAR_depth_STAR__temp_val__56001 = (fulcro.client.primitives.depth(this__52659__auto__) + (1));
var _STAR_shared_STAR__temp_val__56002 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__52659__auto__);
var _STAR_instrument_STAR__temp_val__56003 = fulcro.client.primitives.instrument(this__52659__auto__);
var _STAR_parent_STAR__temp_val__56004 = this__52659__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__56000;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__56001;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__56002;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__56003;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__56004;

try{var _ = fulcro.client.primitives.props(this$);
var map__56005 = fulcro.client.primitives.get_computed.cljs$core$IFn$_invoke$arity$1(this$);
var map__56005__$1 = (((((!((map__56005 == null))))?(((((map__56005.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56005.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56005):map__56005);
var attributes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56005__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attributes","com.wsscode.pathom.viz.index-explorer/attributes",-67264281));
var on_select_attribute = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56005__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","on-select-attribute","com.wsscode.pathom.viz.index-explorer/on-select-attribute",2006419034));
var on_select_resolver = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56005__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","on-select-resolver","com.wsscode.pathom.viz.index-explorer/on-select-resolver",1600914463));
var G__56007 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"classes","classes",2037804510),com.wsscode.pathom.viz.ui.kit.ccss.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".container",".container",-1441208944)], 0))], null);
var G__56008 = fulcro.client.localized_dom.h1.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".title",".title",-416997657),"Full Graph"], 0));
var G__56009 = (function (){var G__56010 = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attributes","com.wsscode.pathom.viz.index-explorer/attributes",-67264281),attributes,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","direct-reaches?","com.wsscode.pathom.viz.index-explorer/direct-reaches?",-1036048994),true,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","nested-reaches?","com.wsscode.pathom.viz.index-explorer/nested-reaches?",-22429448),false,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","direct-provides?","com.wsscode.pathom.viz.index-explorer/direct-provides?",223892052),true,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","nested-provides?","com.wsscode.pathom.viz.index-explorer/nested-provides?",-1296758362),false,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","on-show-details","com.wsscode.pathom.viz.index-explorer/on-show-details",-322180105),on_select_attribute,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","on-click-edge","com.wsscode.pathom.viz.index-explorer/on-click-edge",810811642),((function (G__56007,G__56008,_,map__56005,map__56005__$1,attributes,on_select_attribute,on_select_resolver,_STAR_reconciler_STAR__orig_val__55995,_STAR_depth_STAR__orig_val__55996,_STAR_shared_STAR__orig_val__55997,_STAR_instrument_STAR__orig_val__55998,_STAR_parent_STAR__orig_val__55999,_STAR_reconciler_STAR__temp_val__56000,_STAR_depth_STAR__temp_val__56001,_STAR_shared_STAR__temp_val__56002,_STAR_instrument_STAR__temp_val__56003,_STAR_parent_STAR__temp_val__56004,this$,this__52659__auto__,x55994_56373){
return (function (p1__55991_SHARP_){
var G__56011 = cljs.core.first(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","resolvers","com.wsscode.pathom.viz.index-explorer/resolvers",-1064744669).cljs$core$IFn$_invoke$arity$1(p1__55991_SHARP_));
return (on_select_resolver.cljs$core$IFn$_invoke$arity$1 ? on_select_resolver.cljs$core$IFn$_invoke$arity$1(G__56011) : on_select_resolver.call(null,G__56011));
});})(G__56007,G__56008,_,map__56005,map__56005__$1,attributes,on_select_attribute,on_select_resolver,_STAR_reconciler_STAR__orig_val__55995,_STAR_depth_STAR__orig_val__55996,_STAR_shared_STAR__orig_val__55997,_STAR_instrument_STAR__orig_val__55998,_STAR_parent_STAR__orig_val__55999,_STAR_reconciler_STAR__temp_val__56000,_STAR_depth_STAR__temp_val__56001,_STAR_shared_STAR__temp_val__56002,_STAR_instrument_STAR__temp_val__56003,_STAR_parent_STAR__temp_val__56004,this$,this__52659__auto__,x55994_56373))
], null);
return (com.wsscode.pathom.viz.index_explorer.attribute_graph.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom.viz.index_explorer.attribute_graph.cljs$core$IFn$_invoke$arity$1(G__56010) : com.wsscode.pathom.viz.index_explorer.attribute_graph.call(null,G__56010));
})();
return (com.wsscode.pathom.viz.ui.kit.column.cljs$core$IFn$_invoke$arity$3 ? com.wsscode.pathom.viz.ui.kit.column.cljs$core$IFn$_invoke$arity$3(G__56007,G__56008,G__56009) : com.wsscode.pathom.viz.ui.kit.column.call(null,G__56007,G__56008,G__56009));
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__55999;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__55998;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__55997;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__55996;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__55995;
}});})(x55994_56373))
;


com.wsscode.pathom.viz.index_explorer.FullGraphView.prototype.constructor = com.wsscode.pathom.viz.index_explorer.FullGraphView;

com.wsscode.pathom.viz.index_explorer.FullGraphView.prototype.constructor.displayName = "com.wsscode.pathom.viz.index-explorer/FullGraphView";

com.wsscode.pathom.viz.index_explorer.FullGraphView.prototype.fulcro$isComponent = true;

var x56012_56374 = com.wsscode.pathom.viz.index_explorer.FullGraphView;
x56012_56374.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x56012_56374.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x56012_56374){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),"12px",new cljs.core.Keyword(null,"flex","flex",-1425124628),"1"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".title",".title",-416997657),com.wsscode.pathom.viz.ui.kit.text_base], null)], null);
});})(x56012_56374))
;

x56012_56374.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x56012_56374){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x56012_56374))
;

x56012_56374.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x56012_56374.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x56012_56374){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","graph-view-id","com.wsscode.pathom.viz.index-explorer/graph-view-id",211965428),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","graph-view-id","com.wsscode.pathom.viz.index-explorer/graph-view-id",211965428).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x56012_56374))
;

x56012_56374.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x56012_56374.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x56012_56374){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","graph-view-id","com.wsscode.pathom.viz.index-explorer/graph-view-id",211965428)], null);
});})(x56012_56374))
;


var x56013_56375 = com.wsscode.pathom.viz.index_explorer.FullGraphView.prototype;
x56013_56375.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x56013_56375.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x56013_56375){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),"12px",new cljs.core.Keyword(null,"flex","flex",-1425124628),"1"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".title",".title",-416997657),com.wsscode.pathom.viz.ui.kit.text_base], null)], null);
});})(x56013_56375))
;

x56013_56375.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x56013_56375){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x56013_56375))
;

x56013_56375.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x56013_56375.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x56013_56375){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","graph-view-id","com.wsscode.pathom.viz.index-explorer/graph-view-id",211965428),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","graph-view-id","com.wsscode.pathom.viz.index-explorer/graph-view-id",211965428).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x56013_56375))
;

x56013_56375.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x56013_56375.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x56013_56375){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","graph-view-id","com.wsscode.pathom.viz.index-explorer/graph-view-id",211965428)], null);
});})(x56013_56375))
;


com.wsscode.pathom.viz.index_explorer.FullGraphView.cljs$lang$type = true;

com.wsscode.pathom.viz.index_explorer.FullGraphView.cljs$lang$ctorStr = "com.wsscode.pathom.viz.index-explorer/FullGraphView";

com.wsscode.pathom.viz.index_explorer.FullGraphView.cljs$lang$ctorPrWriter = (function (this__53744__auto__,writer__53745__auto__,opt__53746__auto__){
return cljs.core._write(writer__53745__auto__,"com.wsscode.pathom.viz.index-explorer/FullGraphView");
});
com.wsscode.pathom.viz.index_explorer.full_graph_view = fulcro.client.primitives.factory.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.FullGraphView);
com.wsscode.pathom.viz.index_explorer.prop_presence_ident = (function com$wsscode$pathom$viz$index_explorer$prop_presence_ident(props){
return (function (data){
var or__4131__auto__ = cljs.core.some((function (p1__56014_SHARP_){
var temp__5722__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,p1__56014_SHARP_);
if((temp__5722__auto__ == null)){
return null;
} else {
var val = temp__5722__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__56014_SHARP_,val], null);
}
}),props);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"invalid","invalid",412869516),"ident"], null);
}
});
});
com.wsscode.pathom.viz.index_explorer.main_view_ident = com.wsscode.pathom.viz.index_explorer.prop_presence_ident(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutation-sym","com.wsscode.pathom.viz.index-explorer/mutation-sym",-191280951),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","graph-view-id","com.wsscode.pathom.viz.index-explorer/graph-view-id",211965428)], null));
if((typeof com !== 'undefined') && (typeof com.wsscode !== 'undefined') && (typeof com.wsscode.pathom !== 'undefined') && (typeof com.wsscode.pathom.viz !== 'undefined') && (typeof com.wsscode.pathom.viz.index_explorer !== 'undefined') && (typeof com.wsscode.pathom.viz.index_explorer.MainViewUnion !== 'undefined')){
} else {
/**
 * @constructor
 * @nocollapse
 */
com.wsscode.pathom.viz.index_explorer.MainViewUnion = (function com$wsscode$pathom$viz$index_explorer$MainViewUnion(){
var this__53741__auto__ = this;
React.Component.apply(this__53741__auto__,arguments);

if((!((this__53741__auto__.initLocalState == null)))){
this__53741__auto__.state = this__53741__auto__.initLocalState();
} else {
this__53741__auto__.state = ({});
}

return this__53741__auto__;
});

goog.object.extend(com.wsscode.pathom.viz.index_explorer.MainViewUnion.prototype,React.Component.prototype,fulcro.client.primitives.default_component_prototype);
}

fulcro.client.primitives._register_component_BANG_(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","MainViewUnion","com.wsscode.pathom.viz.index-explorer/MainViewUnion",280346003),com.wsscode.pathom.viz.index_explorer.MainViewUnion);

var x56017_56376 = com.wsscode.pathom.viz.index_explorer.MainViewUnion.prototype;
x56017_56376.render = ((function (x56017_56376){
return (function (){
var this__52659__auto__ = this;
var this$ = this__52659__auto__;
var _STAR_reconciler_STAR__orig_val__56018 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__56019 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__56020 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__56021 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__56022 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__56023 = fulcro.client.primitives.get_reconciler(this__52659__auto__);
var _STAR_depth_STAR__temp_val__56024 = (fulcro.client.primitives.depth(this__52659__auto__) + (1));
var _STAR_shared_STAR__temp_val__56025 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__52659__auto__);
var _STAR_instrument_STAR__temp_val__56026 = fulcro.client.primitives.instrument(this__52659__auto__);
var _STAR_parent_STAR__temp_val__56027 = this__52659__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__56023;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__56024;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__56025;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__56026;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__56027;

try{var props = fulcro.client.primitives.props(this$);
var G__56028 = cljs.core.first(fulcro.client.primitives.get_ident.cljs$core$IFn$_invoke$arity$1(this$));
var G__56028__$1 = (((G__56028 instanceof cljs.core.Keyword))?G__56028.fqn:null);
switch (G__56028__$1) {
case "com.wsscode.pathom.connect/attribute":
return com.wsscode.pathom.viz.index_explorer.attribute_view(props);

break;
case "com.wsscode.pathom.connect/sym":
return (com.wsscode.pathom.viz.index_explorer.resolver_view.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom.viz.index_explorer.resolver_view.cljs$core$IFn$_invoke$arity$1(props) : com.wsscode.pathom.viz.index_explorer.resolver_view.call(null,props));

break;
case "com.wsscode.pathom.viz.index-explorer/mutation-sym":
return (com.wsscode.pathom.viz.index_explorer.mutation_view.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom.viz.index_explorer.mutation_view.cljs$core$IFn$_invoke$arity$1(props) : com.wsscode.pathom.viz.index_explorer.mutation_view.call(null,props));

break;
case "com.wsscode.pathom.viz.index-explorer/id":
return (com.wsscode.pathom.viz.index_explorer.stats_view.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom.viz.index_explorer.stats_view.cljs$core$IFn$_invoke$arity$1(props) : com.wsscode.pathom.viz.index_explorer.stats_view.call(null,props));

break;
case "com.wsscode.pathom.viz.index-explorer/graph-view-id":
return (com.wsscode.pathom.viz.index_explorer.full_graph_view.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom.viz.index_explorer.full_graph_view.cljs$core$IFn$_invoke$arity$1(props) : com.wsscode.pathom.viz.index_explorer.full_graph_view.call(null,props));

break;
default:
return fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Blank page"], 0));

}
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__56022;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__56021;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__56020;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__56019;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__56018;
}});})(x56017_56376))
;


com.wsscode.pathom.viz.index_explorer.MainViewUnion.prototype.constructor = com.wsscode.pathom.viz.index_explorer.MainViewUnion;

com.wsscode.pathom.viz.index_explorer.MainViewUnion.prototype.constructor.displayName = "com.wsscode.pathom.viz.index-explorer/MainViewUnion";

com.wsscode.pathom.viz.index_explorer.MainViewUnion.prototype.fulcro$isComponent = true;

var x56029_56378 = com.wsscode.pathom.viz.index_explorer.MainViewUnion;
x56029_56378.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x56029_56378.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x56029_56378){
return (function (this$,props){
var this$__$1 = this;
return com.wsscode.pathom.viz.index_explorer.main_view_ident(props);
});})(x56029_56378))
;

x56029_56378.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x56029_56378.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x56029_56378){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.AttributeView),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.ResolverView),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutation-sym","com.wsscode.pathom.viz.index-explorer/mutation-sym",-191280951),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.MutationView),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.StatsView),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","graph-view-id","com.wsscode.pathom.viz.index-explorer/graph-view-id",211965428),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.FullGraphView)], null);
});})(x56029_56378))
;


var x56030_56379 = com.wsscode.pathom.viz.index_explorer.MainViewUnion.prototype;
x56030_56379.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x56030_56379.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x56030_56379){
return (function (this$,props){
var this$__$1 = this;
return com.wsscode.pathom.viz.index_explorer.main_view_ident(props);
});})(x56030_56379))
;

x56030_56379.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x56030_56379.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x56030_56379){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.AttributeView),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.ResolverView),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutation-sym","com.wsscode.pathom.viz.index-explorer/mutation-sym",-191280951),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.MutationView),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.StatsView),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","graph-view-id","com.wsscode.pathom.viz.index-explorer/graph-view-id",211965428),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.FullGraphView)], null);
});})(x56030_56379))
;


com.wsscode.pathom.viz.index_explorer.MainViewUnion.cljs$lang$type = true;

com.wsscode.pathom.viz.index_explorer.MainViewUnion.cljs$lang$ctorStr = "com.wsscode.pathom.viz.index-explorer/MainViewUnion";

com.wsscode.pathom.viz.index_explorer.MainViewUnion.cljs$lang$ctorPrWriter = (function (this__53744__auto__,writer__53745__auto__,opt__53746__auto__){
return cljs.core._write(writer__53745__auto__,"com.wsscode.pathom.viz.index-explorer/MainViewUnion");
});
com.wsscode.pathom.viz.index_explorer.main_view_union = fulcro.client.primitives.computed_factory.cljs$core$IFn$_invoke$arity$2(com.wsscode.pathom.viz.index_explorer.MainViewUnion,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),(function (p1__56031_SHARP_){
var or__4131__auto__ = new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075).cljs$core$IFn$_invoke$arity$1(p1__56031_SHARP_);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581).cljs$core$IFn$_invoke$arity$1(p1__56031_SHARP_);
}
})], null));
com.wsscode.pathom.viz.index_explorer.augment = (function com$wsscode$pathom$viz$index_explorer$augment(data,f){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([data,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(data) : f.call(null,data))], 0));
});
com.wsscode.pathom.viz.index_explorer.compute_stats = (function com$wsscode$pathom$viz$index_explorer$compute_stats(p__56035){
var map__56036 = p__56035;
var map__56036__$1 = (((((!((map__56036 == null))))?(((((map__56036.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56036.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56036):map__56036);
var data = map__56036__$1;
var attributes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56036__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attributes","com.wsscode.pathom.viz.index-explorer/attributes",-67264281));
var resolvers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56036__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","resolvers","com.wsscode.pathom.viz.index-explorer/resolvers",-1064744669));
var mutations = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56036__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutations","com.wsscode.pathom.viz.index-explorer/mutations",329050290));
var globals = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56036__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","globals","com.wsscode.pathom.viz.index-explorer/globals",1704747305));
var idents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56036__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","idents","com.wsscode.pathom.viz.index-explorer/idents",189283656));
return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attribute-count","com.wsscode.pathom.viz.index-explorer/attribute-count",699283957),cljs.core.count(attributes),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","resolver-count","com.wsscode.pathom.viz.index-explorer/resolver-count",1252340099),cljs.core.count(resolvers),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutation-count","com.wsscode.pathom.viz.index-explorer/mutation-count",-544331737),cljs.core.count(mutations),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","globals-count","com.wsscode.pathom.viz.index-explorer/globals-count",1697710019),cljs.core.count(globals),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","idents-count","com.wsscode.pathom.viz.index-explorer/idents-count",2076723333),cljs.core.count(idents),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-edges-count","com.wsscode.pathom.viz.index-explorer/attr-edges-count",-99271495),cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-edges-count","com.wsscode.pathom.viz.index-explorer/attr-edges-count",-99271495)),cljs.core._PLUS_,attributes),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-type-mismatch","com.wsscode.pathom.viz.index-explorer/attr-type-mismatch",-1230484441),cljs.core.filterv(((function (map__56036,map__56036__$1,data,attributes,resolvers,mutations,globals,idents){
return (function (p1__56032_SHARP_){
return ((cljs.core.contains_QMARK_(p1__56032_SHARP_,new cljs.core.Keyword("com.wsscode.pathom.connect","attr-leaf-in","com.wsscode.pathom.connect/attr-leaf-in",-1959401711))) && (cljs.core.contains_QMARK_(p1__56032_SHARP_,new cljs.core.Keyword("com.wsscode.pathom.connect","attr-branch-in","com.wsscode.pathom.connect/attr-branch-in",1982854732))));
});})(map__56036,map__56036__$1,data,attributes,resolvers,mutations,globals,idents))
,attributes),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","top-connection-hubs","com.wsscode.pathom.viz.index-explorer/top-connection-hubs",1843947657),cljs.core.vec(cljs.core.take.cljs$core$IFn$_invoke$arity$2((30),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-edges-count","com.wsscode.pathom.viz.index-explorer/attr-edges-count",-99271495),((function (map__56036,map__56036__$1,data,attributes,resolvers,mutations,globals,idents){
return (function (p1__56034_SHARP_,p2__56033_SHARP_){
return cljs.core.compare(p2__56033_SHARP_,p1__56034_SHARP_);
});})(map__56036,map__56036__$1,data,attributes,resolvers,mutations,globals,idents))
,attributes)))], null);
});
com.wsscode.pathom.viz.index_explorer.build_search_vector = (function com$wsscode$pathom$viz$index_explorer$build_search_vector(p__56041){
var map__56042 = p__56041;
var map__56042__$1 = (((((!((map__56042 == null))))?(((((map__56042.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56042.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56042):map__56042);
var index_resolvers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56042__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","index-resolvers","com.wsscode.pathom.connect/index-resolvers",916075256));
var index_attributes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56042__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","index-attributes","com.wsscode.pathom.connect/index-attributes",-24325279));
var index_mutations = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56042__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","index-mutations","com.wsscode.pathom.connect/index-mutations",1981352054));
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.wsscode.fuzzy","string","com.wsscode.fuzzy/string",320074815),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map__56042,map__56042__$1,index_resolvers,index_attributes,index_mutations){
return (function (p1__56038_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword("com.wsscode.fuzzy","string","com.wsscode.fuzzy/string",320074815),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-value","com.wsscode.pathom.viz.index-explorer/search-value",-337129957),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-type","com.wsscode.pathom.viz.index-explorer/search-type",-1615224063)],[cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581).cljs$core$IFn$_invoke$arity$1(p1__56038_SHARP_)], 0)),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581).cljs$core$IFn$_invoke$arity$1(p1__56038_SHARP_),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-type-resolver","com.wsscode.pathom.viz.index-explorer/search-type-resolver",1588028676)]);
});})(map__56042,map__56042__$1,index_resolvers,index_attributes,index_mutations))
,cljs.core.vals(index_resolvers))),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.wsscode.fuzzy","string","com.wsscode.fuzzy/string",320074815),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map__56042,map__56042__$1,index_resolvers,index_attributes,index_mutations){
return (function (p1__56039_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword("com.wsscode.fuzzy","string","com.wsscode.fuzzy/string",320074815),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-value","com.wsscode.pathom.viz.index-explorer/search-value",-337129957),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-type","com.wsscode.pathom.viz.index-explorer/search-type",-1615224063)],[cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581).cljs$core$IFn$_invoke$arity$1(p1__56039_SHARP_)], 0)),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581).cljs$core$IFn$_invoke$arity$1(p1__56039_SHARP_),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-type-mutation","com.wsscode.pathom.viz.index-explorer/search-type-mutation",-68441744)]);
});})(map__56042,map__56042__$1,index_resolvers,index_attributes,index_mutations))
,cljs.core.vals(index_mutations))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.wsscode.fuzzy","string","com.wsscode.fuzzy/string",320074815),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map__56042,map__56042__$1,index_resolvers,index_attributes,index_mutations){
return (function (p1__56040_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword("com.wsscode.fuzzy","string","com.wsscode.fuzzy/string",320074815),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-value","com.wsscode.pathom.viz.index-explorer/search-value",-337129957),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-type","com.wsscode.pathom.viz.index-explorer/search-type",-1615224063)],[cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075).cljs$core$IFn$_invoke$arity$1(p1__56040_SHARP_)], 0)),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075).cljs$core$IFn$_invoke$arity$1(p1__56040_SHARP_),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-type-attribute","com.wsscode.pathom.viz.index-explorer/search-type-attribute",-62795524)]);
});})(map__56042,map__56042__$1,index_resolvers,index_attributes,index_mutations))
,cljs.core.vals(index_attributes)))], 0)));
});
com.wsscode.pathom.viz.index_explorer.process_index = (function com$wsscode$pathom$viz$index_explorer$process_index(p__56046){
var map__56047 = p__56046;
var map__56047__$1 = (((((!((map__56047 == null))))?(((((map__56047.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56047.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56047):map__56047);
var index = map__56047__$1;
var index_resolvers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56047__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","index-resolvers","com.wsscode.pathom.connect/index-resolvers",916075256));
var idents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56047__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","idents","com.wsscode.pathom.connect/idents",1893384007));
var index_attributes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56047__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","index-attributes","com.wsscode.pathom.connect/index-attributes",-24325279));
var index_mutations = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56047__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","index-mutations","com.wsscode.pathom.connect/index-mutations",1981352054));
var attrs = cljs.core.vec(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str,new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map__56047,map__56047__$1,index,index_resolvers,idents,index_attributes,index_mutations){
return (function (p__56049){
var vec__56050 = p__56049;
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56050,(0),null);
var map__56053 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56050,(1),null);
var map__56053__$1 = (((((!((map__56053 == null))))?(((((map__56053.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56053.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56053):map__56053);
var data = map__56053__$1;
var attr_reach_via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56053__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via","com.wsscode.pathom.connect/attr-reach-via",-483841559));
var attr_provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56053__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attr-provides","com.wsscode.pathom.connect/attr-provides",-474523918));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","weight","com.wsscode.pathom.viz.index-explorer/weight",-1488828976),cljs.core.count(attr_provides),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","reach","com.wsscode.pathom.viz.index-explorer/reach",1367373590),cljs.core.count(attr_reach_via),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),attr,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-edges-count","com.wsscode.pathom.viz.index-explorer/attr-edges-count",-99271495),(cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.count),cljs.core._PLUS_,cljs.core.vals(attr_reach_via)) + cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.count),cljs.core._PLUS_,cljs.core.vals(attr_provides))),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","global-attribute?","com.wsscode.pathom.viz.index-explorer/global-attribute?",47568352),cljs.core.contains_QMARK_(attr_reach_via,cljs.core.PersistentHashSet.EMPTY),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","ident-attribute?","com.wsscode.pathom.viz.index-explorer/ident-attribute?",984021315),cljs.core.contains_QMARK_(idents,attr)], 0));
});})(map__56047,map__56047__$1,index,index_resolvers,idents,index_attributes,index_mutations))
,index_attributes)));
return com.wsscode.pathom.viz.index_explorer.augment(new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","idx","com.wsscode.pathom.viz.index-explorer/idx",1045759782),index,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attributes","com.wsscode.pathom.viz.index-explorer/attributes",-67264281),attrs,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","globals","com.wsscode.pathom.viz.index-explorer/globals",1704747305),cljs.core.filterv(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","global-attribute?","com.wsscode.pathom.viz.index-explorer/global-attribute?",47568352),attrs),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","idents","com.wsscode.pathom.viz.index-explorer/idents",189283656),cljs.core.filterv(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","ident-attribute?","com.wsscode.pathom.viz.index-explorer/ident-attribute?",984021315),attrs),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-vector","com.wsscode.pathom.viz.index-explorer/search-vector",-471470935),com.wsscode.pathom.viz.index_explorer.build_search_vector(index),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","resolvers","com.wsscode.pathom.viz.index-explorer/resolvers",-1064744669),cljs.core.vec(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (attrs,map__56047,map__56047__$1,index,index_resolvers,idents,index_attributes,index_mutations){
return (function (p1__56044_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__56044_SHARP_,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","resolver?","com.wsscode.pathom.viz.index-explorer/resolver?",167854159),true);
});})(attrs,map__56047,map__56047__$1,index,index_resolvers,idents,index_attributes,index_mutations))
,cljs.core.vals(index_resolvers)))),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutations","com.wsscode.pathom.viz.index-explorer/mutations",329050290),cljs.core.vec(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (attrs,map__56047,map__56047__$1,index,index_resolvers,idents,index_attributes,index_mutations){
return (function (p1__56045_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(p1__56045_SHARP_,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutation?","com.wsscode.pathom.viz.index-explorer/mutation?",1568382673),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutation-sym","com.wsscode.pathom.viz.index-explorer/mutation-sym",-191280951),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581).cljs$core$IFn$_invoke$arity$1(p1__56045_SHARP_)], 0));
});})(attrs,map__56047,map__56047__$1,index,index_resolvers,idents,index_attributes,index_mutations))
,cljs.core.vals(index_mutations))))], null),com.wsscode.pathom.viz.index_explorer.compute_stats);
});
if((typeof com !== 'undefined') && (typeof com.wsscode !== 'undefined') && (typeof com.wsscode.pathom !== 'undefined') && (typeof com.wsscode.pathom.viz !== 'undefined') && (typeof com.wsscode.pathom.viz.index_explorer !== 'undefined') && (typeof com.wsscode.pathom.viz.index_explorer.AttributeIndex !== 'undefined')){
} else {
/**
 * @constructor
 * @nocollapse
 */
com.wsscode.pathom.viz.index_explorer.AttributeIndex = (function com$wsscode$pathom$viz$index_explorer$AttributeIndex(){
var this__53741__auto__ = this;
React.Component.apply(this__53741__auto__,arguments);

if((!((this__53741__auto__.initLocalState == null)))){
this__53741__auto__.state = this__53741__auto__.initLocalState();
} else {
this__53741__auto__.state = ({});
}

return this__53741__auto__;
});

goog.object.extend(com.wsscode.pathom.viz.index_explorer.AttributeIndex.prototype,React.Component.prototype,fulcro.client.primitives.default_component_prototype);
}

fulcro.client.primitives._register_component_BANG_(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","AttributeIndex","com.wsscode.pathom.viz.index-explorer/AttributeIndex",-1624405224),com.wsscode.pathom.viz.index_explorer.AttributeIndex);

var x56057_56380 = com.wsscode.pathom.viz.index_explorer.AttributeIndex.prototype;
x56057_56380.render = ((function (x56057_56380){
return (function (){
var this__52659__auto__ = this;
var _ = this__52659__auto__;
var _STAR_reconciler_STAR__orig_val__56058 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__56059 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__56060 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__56061 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__56062 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__56063 = fulcro.client.primitives.get_reconciler(this__52659__auto__);
var _STAR_depth_STAR__temp_val__56064 = (fulcro.client.primitives.depth(this__52659__auto__) + (1));
var _STAR_shared_STAR__temp_val__56065 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__52659__auto__);
var _STAR_instrument_STAR__temp_val__56066 = fulcro.client.primitives.instrument(this__52659__auto__);
var _STAR_parent_STAR__temp_val__56067 = this__52659__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__56063;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__56064;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__56065;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__56066;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__56067;

try{var ___$1 = fulcro.client.primitives.props(_);
return null;
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__56062;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__56061;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__56060;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__56059;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__56058;
}});})(x56057_56380))
;


com.wsscode.pathom.viz.index_explorer.AttributeIndex.prototype.constructor = com.wsscode.pathom.viz.index_explorer.AttributeIndex;

com.wsscode.pathom.viz.index_explorer.AttributeIndex.prototype.constructor.displayName = "com.wsscode.pathom.viz.index-explorer/AttributeIndex";

com.wsscode.pathom.viz.index_explorer.AttributeIndex.prototype.fulcro$isComponent = true;

var x56068_56381 = com.wsscode.pathom.viz.index_explorer.AttributeIndex;
x56068_56381.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x56068_56381.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x56068_56381){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x56068_56381))
;

x56068_56381.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x56068_56381.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x56068_56381){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute-paths","com.wsscode.pathom.connect/attribute-paths",-969708455),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-provides","com.wsscode.pathom.connect/attr-provides",-474523918),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via","com.wsscode.pathom.connect/attr-reach-via",-483841559),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-combinations","com.wsscode.pathom.connect/attr-combinations",-1163990806),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","weight","com.wsscode.pathom.viz.index-explorer/weight",-1488828976),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","reach","com.wsscode.pathom.viz.index-explorer/reach",1367373590)], null);
});})(x56068_56381))
;


var x56069_56382 = com.wsscode.pathom.viz.index_explorer.AttributeIndex.prototype;
x56069_56382.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x56069_56382.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x56069_56382){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x56069_56382))
;

x56069_56382.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x56069_56382.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x56069_56382){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute-paths","com.wsscode.pathom.connect/attribute-paths",-969708455),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-provides","com.wsscode.pathom.connect/attr-provides",-474523918),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via","com.wsscode.pathom.connect/attr-reach-via",-483841559),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-combinations","com.wsscode.pathom.connect/attr-combinations",-1163990806),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","weight","com.wsscode.pathom.viz.index-explorer/weight",-1488828976),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","reach","com.wsscode.pathom.viz.index-explorer/reach",1367373590)], null);
});})(x56069_56382))
;


com.wsscode.pathom.viz.index_explorer.AttributeIndex.cljs$lang$type = true;

com.wsscode.pathom.viz.index_explorer.AttributeIndex.cljs$lang$ctorStr = "com.wsscode.pathom.viz.index-explorer/AttributeIndex";

com.wsscode.pathom.viz.index_explorer.AttributeIndex.cljs$lang$ctorPrWriter = (function (this__53744__auto__,writer__53745__auto__,opt__53746__auto__){
return cljs.core._write(writer__53745__auto__,"com.wsscode.pathom.viz.index-explorer/AttributeIndex");
});
if((typeof com !== 'undefined') && (typeof com.wsscode !== 'undefined') && (typeof com.wsscode.pathom !== 'undefined') && (typeof com.wsscode.pathom.viz !== 'undefined') && (typeof com.wsscode.pathom.viz.index_explorer !== 'undefined') && (typeof com.wsscode.pathom.viz.index_explorer.ResolverIndex !== 'undefined')){
} else {
/**
 * @constructor
 * @nocollapse
 */
com.wsscode.pathom.viz.index_explorer.ResolverIndex = (function com$wsscode$pathom$viz$index_explorer$ResolverIndex(){
var this__53741__auto__ = this;
React.Component.apply(this__53741__auto__,arguments);

if((!((this__53741__auto__.initLocalState == null)))){
this__53741__auto__.state = this__53741__auto__.initLocalState();
} else {
this__53741__auto__.state = ({});
}

return this__53741__auto__;
});

goog.object.extend(com.wsscode.pathom.viz.index_explorer.ResolverIndex.prototype,React.Component.prototype,fulcro.client.primitives.default_component_prototype);
}

fulcro.client.primitives._register_component_BANG_(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","ResolverIndex","com.wsscode.pathom.viz.index-explorer/ResolverIndex",-1943751145),com.wsscode.pathom.viz.index_explorer.ResolverIndex);

var x56072_56383 = com.wsscode.pathom.viz.index_explorer.ResolverIndex.prototype;
x56072_56383.render = ((function (x56072_56383){
return (function (){
var this__52659__auto__ = this;
var _ = this__52659__auto__;
var _STAR_reconciler_STAR__orig_val__56073 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__56074 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__56075 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__56076 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__56077 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__56078 = fulcro.client.primitives.get_reconciler(this__52659__auto__);
var _STAR_depth_STAR__temp_val__56079 = (fulcro.client.primitives.depth(this__52659__auto__) + (1));
var _STAR_shared_STAR__temp_val__56080 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__52659__auto__);
var _STAR_instrument_STAR__temp_val__56081 = fulcro.client.primitives.instrument(this__52659__auto__);
var _STAR_parent_STAR__temp_val__56082 = this__52659__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__56078;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__56079;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__56080;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__56081;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__56082;

try{var ___$1 = fulcro.client.primitives.props(_);
return null;
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__56077;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__56076;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__56075;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__56074;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__56073;
}});})(x56072_56383))
;


com.wsscode.pathom.viz.index_explorer.ResolverIndex.prototype.constructor = com.wsscode.pathom.viz.index_explorer.ResolverIndex;

com.wsscode.pathom.viz.index_explorer.ResolverIndex.prototype.constructor.displayName = "com.wsscode.pathom.viz.index-explorer/ResolverIndex";

com.wsscode.pathom.viz.index_explorer.ResolverIndex.prototype.fulcro$isComponent = true;

var x56083_56384 = com.wsscode.pathom.viz.index_explorer.ResolverIndex;
x56083_56384.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x56083_56384.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x56083_56384){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x56083_56384))
;

x56083_56384.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x56083_56384.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x56083_56384){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795)], null);
});})(x56083_56384))
;


var x56084_56385 = com.wsscode.pathom.viz.index_explorer.ResolverIndex.prototype;
x56084_56385.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x56084_56385.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x56084_56385){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x56084_56385))
;

x56084_56385.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x56084_56385.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x56084_56385){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795)], null);
});})(x56084_56385))
;


com.wsscode.pathom.viz.index_explorer.ResolverIndex.cljs$lang$type = true;

com.wsscode.pathom.viz.index_explorer.ResolverIndex.cljs$lang$ctorStr = "com.wsscode.pathom.viz.index-explorer/ResolverIndex";

com.wsscode.pathom.viz.index_explorer.ResolverIndex.cljs$lang$ctorPrWriter = (function (this__53744__auto__,writer__53745__auto__,opt__53746__auto__){
return cljs.core._write(writer__53745__auto__,"com.wsscode.pathom.viz.index-explorer/ResolverIndex");
});
if((typeof com !== 'undefined') && (typeof com.wsscode !== 'undefined') && (typeof com.wsscode.pathom !== 'undefined') && (typeof com.wsscode.pathom.viz !== 'undefined') && (typeof com.wsscode.pathom.viz.index_explorer !== 'undefined') && (typeof com.wsscode.pathom.viz.index_explorer.MutationIndex !== 'undefined')){
} else {
/**
 * @constructor
 * @nocollapse
 */
com.wsscode.pathom.viz.index_explorer.MutationIndex = (function com$wsscode$pathom$viz$index_explorer$MutationIndex(){
var this__53741__auto__ = this;
React.Component.apply(this__53741__auto__,arguments);

if((!((this__53741__auto__.initLocalState == null)))){
this__53741__auto__.state = this__53741__auto__.initLocalState();
} else {
this__53741__auto__.state = ({});
}

return this__53741__auto__;
});

goog.object.extend(com.wsscode.pathom.viz.index_explorer.MutationIndex.prototype,React.Component.prototype,fulcro.client.primitives.default_component_prototype);
}

fulcro.client.primitives._register_component_BANG_(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","MutationIndex","com.wsscode.pathom.viz.index-explorer/MutationIndex",21487988),com.wsscode.pathom.viz.index_explorer.MutationIndex);

var x56087_56386 = com.wsscode.pathom.viz.index_explorer.MutationIndex.prototype;
x56087_56386.render = ((function (x56087_56386){
return (function (){
var this__52659__auto__ = this;
var _ = this__52659__auto__;
var _STAR_reconciler_STAR__orig_val__56088 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__56089 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__56090 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__56091 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__56092 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__56093 = fulcro.client.primitives.get_reconciler(this__52659__auto__);
var _STAR_depth_STAR__temp_val__56094 = (fulcro.client.primitives.depth(this__52659__auto__) + (1));
var _STAR_shared_STAR__temp_val__56095 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__52659__auto__);
var _STAR_instrument_STAR__temp_val__56096 = fulcro.client.primitives.instrument(this__52659__auto__);
var _STAR_parent_STAR__temp_val__56097 = this__52659__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__56093;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__56094;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__56095;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__56096;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__56097;

try{var ___$1 = fulcro.client.primitives.props(_);
return null;
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__56092;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__56091;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__56090;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__56089;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__56088;
}});})(x56087_56386))
;


com.wsscode.pathom.viz.index_explorer.MutationIndex.prototype.constructor = com.wsscode.pathom.viz.index_explorer.MutationIndex;

com.wsscode.pathom.viz.index_explorer.MutationIndex.prototype.constructor.displayName = "com.wsscode.pathom.viz.index-explorer/MutationIndex";

com.wsscode.pathom.viz.index_explorer.MutationIndex.prototype.fulcro$isComponent = true;

var x56098_56387 = com.wsscode.pathom.viz.index_explorer.MutationIndex;
x56098_56387.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x56098_56387.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x56098_56387){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutation-sym","com.wsscode.pathom.viz.index-explorer/mutation-sym",-191280951),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutation-sym","com.wsscode.pathom.viz.index-explorer/mutation-sym",-191280951).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x56098_56387))
;

x56098_56387.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x56098_56387.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x56098_56387){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutation-sym","com.wsscode.pathom.viz.index-explorer/mutation-sym",-191280951),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795)], null);
});})(x56098_56387))
;


var x56099_56388 = com.wsscode.pathom.viz.index_explorer.MutationIndex.prototype;
x56099_56388.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x56099_56388.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x56099_56388){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutation-sym","com.wsscode.pathom.viz.index-explorer/mutation-sym",-191280951),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutation-sym","com.wsscode.pathom.viz.index-explorer/mutation-sym",-191280951).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x56099_56388))
;

x56099_56388.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x56099_56388.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x56099_56388){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutation-sym","com.wsscode.pathom.viz.index-explorer/mutation-sym",-191280951),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795)], null);
});})(x56099_56388))
;


com.wsscode.pathom.viz.index_explorer.MutationIndex.cljs$lang$type = true;

com.wsscode.pathom.viz.index_explorer.MutationIndex.cljs$lang$ctorStr = "com.wsscode.pathom.viz.index-explorer/MutationIndex";

com.wsscode.pathom.viz.index_explorer.MutationIndex.cljs$lang$ctorPrWriter = (function (this__53744__auto__,writer__53745__auto__,opt__53746__auto__){
return cljs.core._write(writer__53745__auto__,"com.wsscode.pathom.viz.index-explorer/MutationIndex");
});
com.wsscode.pathom.viz.index_explorer.history_size_limit = (200);
com.wsscode.pathom.viz.index_explorer.history_append = (function com$wsscode$pathom$viz$index_explorer$history_append(p__56100,ref){
var map__56101 = p__56100;
var map__56101__$1 = (((((!((map__56101 == null))))?(((((map__56101.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56101.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56101):map__56101);
var x = map__56101__$1;
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56101__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","history","com.wsscode.pathom.viz.index-explorer/history",-288879737));
var history_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56101__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","history-index","com.wsscode.pathom.viz.index-explorer/history-index",-368029918));
var index = (history_index + (1));
var history_SINGLEQUOTE_ = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(history,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(index,com.wsscode.pathom.viz.index_explorer.history_size_limit))?(1):(0)),index),ref);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(x,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","history","com.wsscode.pathom.viz.index-explorer/history",-288879737),history_SINGLEQUOTE_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","history-index","com.wsscode.pathom.viz.index-explorer/history-index",-368029918),(cljs.core.count(history_SINGLEQUOTE_) - (1)),new cljs.core.Keyword("ui","page","ui/page",849066625),ref], 0));
});
fulcro.client.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("com.wsscode.pathom.viz.index-explorer","navigate-to-attribute","com.wsscode.pathom.viz.index-explorer/navigate-to-attribute",-1900563958,null),(function (fulcro_incoming_env,_,p__56103){
var map__56104 = p__56103;
var map__56104__$1 = (((((!((map__56104 == null))))?(((((map__56104.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56104.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56104):map__56104);
var attribute = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56104__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var map__56106 = fulcro_incoming_env;
var map__56106__$1 = (((((!((map__56106 == null))))?(((((map__56106.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56106.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56106):map__56106);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56106__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56106__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__56106,map__56106__$1,state,ref,map__56104,map__56104__$1,attribute){
return (function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,fulcro.client.primitives.merge_component,com.wsscode.pathom.viz.index_explorer.AttributeView,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),attribute], null));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.update_in,ref,com.wsscode.pathom.viz.index_explorer.history_append,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),attribute], null)], 0));
});})(map__56106,map__56106__$1,state,ref,map__56104,map__56104__$1,attribute))
], null);
})()], 0));
}));
fulcro.client.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("com.wsscode.pathom.viz.index-explorer","navigate-to-resolver","com.wsscode.pathom.viz.index-explorer/navigate-to-resolver",1471827576,null),(function (fulcro_incoming_env,_,p__56108){
var map__56109 = p__56108;
var map__56109__$1 = (((((!((map__56109 == null))))?(((((map__56109.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56109.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56109):map__56109);
var sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56109__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var map__56111 = fulcro_incoming_env;
var map__56111__$1 = (((((!((map__56111 == null))))?(((((map__56111.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56111.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56111):map__56111);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56111__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56111__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__56111,map__56111__$1,state,ref,map__56109,map__56109__$1,sym){
return (function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,fulcro.client.primitives.merge_component,com.wsscode.pathom.viz.index_explorer.ResolverView,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),sym], null));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.update_in,ref,com.wsscode.pathom.viz.index_explorer.history_append,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),sym], null)], 0));
});})(map__56111,map__56111__$1,state,ref,map__56109,map__56109__$1,sym))
], null);
})()], 0));
}));
fulcro.client.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("com.wsscode.pathom.viz.index-explorer","navigate-to-mutation","com.wsscode.pathom.viz.index-explorer/navigate-to-mutation",2015131713,null),(function (fulcro_incoming_env,_,p__56113){
var map__56114 = p__56113;
var map__56114__$1 = (((((!((map__56114 == null))))?(((((map__56114.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56114.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56114):map__56114);
var mutation_sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56114__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutation-sym","com.wsscode.pathom.viz.index-explorer/mutation-sym",-191280951));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var map__56116 = fulcro_incoming_env;
var map__56116__$1 = (((((!((map__56116 == null))))?(((((map__56116.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56116.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56116):map__56116);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56116__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56116__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__56116,map__56116__$1,state,ref,map__56114,map__56114__$1,mutation_sym){
return (function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,fulcro.client.primitives.merge_component,com.wsscode.pathom.viz.index_explorer.MutationView,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutation-sym","com.wsscode.pathom.viz.index-explorer/mutation-sym",-191280951),mutation_sym], null));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.update_in,ref,com.wsscode.pathom.viz.index_explorer.history_append,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutation-sym","com.wsscode.pathom.viz.index-explorer/mutation-sym",-191280951),mutation_sym], null)], 0));
});})(map__56116,map__56116__$1,state,ref,map__56114,map__56114__$1,mutation_sym))
], null);
})()], 0));
}));
fulcro.client.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("com.wsscode.pathom.viz.index-explorer","navigate-stats","com.wsscode.pathom.viz.index-explorer/navigate-stats",-1515292229,null),(function (fulcro_incoming_env,_,___$1){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var map__56118 = fulcro_incoming_env;
var map__56118__$1 = (((((!((map__56118 == null))))?(((((map__56118.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56118.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56118):map__56118);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56118__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56118__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__56118,map__56118__$1,state,ref){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.update_in,ref,com.wsscode.pathom.viz.index_explorer.history_append,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ref], 0));
});})(map__56118,map__56118__$1,state,ref))
], null);
})()], 0));
}));
fulcro.client.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("com.wsscode.pathom.viz.index-explorer","navigate-graph-view","com.wsscode.pathom.viz.index-explorer/navigate-graph-view",-277547314,null),(function (fulcro_incoming_env,_,___$1){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var map__56120 = fulcro_incoming_env;
var map__56120__$1 = (((((!((map__56120 == null))))?(((((map__56120.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56120.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56120):map__56120);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56120__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56120__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__56120,map__56120__$1,state,ref){
return (function (){
var id = cljs.core.second(ref);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,fulcro.client.primitives.merge_component,com.wsscode.pathom.viz.index_explorer.FullGraphView,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","graph-view-id","com.wsscode.pathom.viz.index-explorer/graph-view-id",211965428),id], null));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.update_in,ref,com.wsscode.pathom.viz.index_explorer.history_append,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","graph-view-id","com.wsscode.pathom.viz.index-explorer/graph-view-id",211965428),id], null)], 0));
});})(map__56120,map__56120__$1,state,ref))
], null);
})()], 0));
}));
com.wsscode.pathom.viz.index_explorer.can_go_back_QMARK_ = (function com$wsscode$pathom$viz$index_explorer$can_go_back_QMARK_(p__56122){
var map__56123 = p__56122;
var map__56123__$1 = (((((!((map__56123 == null))))?(((((map__56123.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56123.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56123):map__56123);
var history_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56123__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","history-index","com.wsscode.pathom.viz.index-explorer/history-index",-368029918));
return (history_index > (0));
});
com.wsscode.pathom.viz.index_explorer.can_go_forward_QMARK_ = (function com$wsscode$pathom$viz$index_explorer$can_go_forward_QMARK_(p__56125){
var map__56126 = p__56125;
var map__56126__$1 = (((((!((map__56126 == null))))?(((((map__56126.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56126.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56126):map__56126);
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56126__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","history","com.wsscode.pathom.viz.index-explorer/history",-288879737));
var history_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56126__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","history-index","com.wsscode.pathom.viz.index-explorer/history-index",-368029918));
return (history_index < (cljs.core.count(history) - (1)));
});
fulcro.client.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("com.wsscode.pathom.viz.index-explorer","navigate-backwards","com.wsscode.pathom.viz.index-explorer/navigate-backwards",1747967871,null),(function (fulcro_incoming_env,_,___$1){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var map__56128 = fulcro_incoming_env;
var map__56128__$1 = (((((!((map__56128 == null))))?(((((map__56128.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56128.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56128):map__56128);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56128__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56128__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__56128,map__56128__$1,state,ref){
return (function (){
var map__56130 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),ref);
var map__56130__$1 = (((((!((map__56130 == null))))?(((((map__56130.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56130.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56130):map__56130);
var props = map__56130__$1;
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56130__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","history","com.wsscode.pathom.viz.index-explorer/history",-288879737));
var history_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56130__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","history-index","com.wsscode.pathom.viz.index-explorer/history-index",-368029918));
if(com.wsscode.pathom.viz.index_explorer.can_go_back_QMARK_(props)){
var page = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(history,(history_index - (1)));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.update_in,ref,cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("ui","page","ui/page",849066625),page,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","history-index","com.wsscode.pathom.viz.index-explorer/history-index",-368029918),(history_index - (1))], 0));
} else {
return null;
}
});})(map__56128,map__56128__$1,state,ref))
], null);
})()], 0));
}));
fulcro.client.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("com.wsscode.pathom.viz.index-explorer","navigate-forwards","com.wsscode.pathom.viz.index-explorer/navigate-forwards",-2084817330,null),(function (fulcro_incoming_env,_,___$1){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var map__56132 = fulcro_incoming_env;
var map__56132__$1 = (((((!((map__56132 == null))))?(((((map__56132.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56132.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56132):map__56132);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56132__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56132__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__56132,map__56132__$1,state,ref){
return (function (){
var map__56134 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),ref);
var map__56134__$1 = (((((!((map__56134 == null))))?(((((map__56134.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56134.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56134):map__56134);
var props = map__56134__$1;
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56134__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","history","com.wsscode.pathom.viz.index-explorer/history",-288879737));
var history_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56134__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","history-index","com.wsscode.pathom.viz.index-explorer/history-index",-368029918));
if(com.wsscode.pathom.viz.index_explorer.can_go_forward_QMARK_(props)){
var page = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(history,(history_index + (1)));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.update_in,ref,cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("ui","page","ui/page",849066625),page,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","history-index","com.wsscode.pathom.viz.index-explorer/history-index",-368029918),(history_index + (1))], 0));
} else {
return null;
}
});})(map__56132,map__56132__$1,state,ref))
], null);
})()], 0));
}));
com.wsscode.pathom.viz.index_explorer.clear_not_found = (function com$wsscode$pathom$viz$index_explorer$clear_not_found(x){
return com.wsscode.pathom.core.elide_items(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(com.wsscode.pathom.core.special_outputs,new cljs.core.Keyword("fulcro.client.primitives","not-found","fulcro.client.primitives/not-found",941693912)),x);
});
if((typeof com !== 'undefined') && (typeof com.wsscode !== 'undefined') && (typeof com.wsscode.pathom !== 'undefined') && (typeof com.wsscode.pathom.viz !== 'undefined') && (typeof com.wsscode.pathom.viz.index_explorer !== 'undefined') && (typeof com.wsscode.pathom.viz.index_explorer.IndexExplorer !== 'undefined')){
} else {
/**
 * @constructor
 * @nocollapse
 */
com.wsscode.pathom.viz.index_explorer.IndexExplorer = (function com$wsscode$pathom$viz$index_explorer$IndexExplorer(){
var this__53741__auto__ = this;
React.Component.apply(this__53741__auto__,arguments);

if((!((this__53741__auto__.initLocalState == null)))){
this__53741__auto__.state = this__53741__auto__.initLocalState();
} else {
this__53741__auto__.state = ({});
}

return this__53741__auto__;
});

goog.object.extend(com.wsscode.pathom.viz.index_explorer.IndexExplorer.prototype,React.Component.prototype,fulcro.client.primitives.default_component_prototype);
}

fulcro.client.primitives._register_component_BANG_(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","IndexExplorer","com.wsscode.pathom.viz.index-explorer/IndexExplorer",493663752),com.wsscode.pathom.viz.index_explorer.IndexExplorer);

var x56141_56389 = com.wsscode.pathom.viz.index_explorer.IndexExplorer.prototype;
x56141_56389.render = ((function (x56141_56389){
return (function (){
var this__52659__auto__ = this;
var this$ = this__52659__auto__;
var _STAR_reconciler_STAR__orig_val__56142 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__56143 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__56144 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__56145 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__56146 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__56147 = fulcro.client.primitives.get_reconciler(this__52659__auto__);
var _STAR_depth_STAR__temp_val__56148 = (fulcro.client.primitives.depth(this__52659__auto__) + (1));
var _STAR_shared_STAR__temp_val__56149 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__52659__auto__);
var _STAR_instrument_STAR__temp_val__56150 = fulcro.client.primitives.instrument(this__52659__auto__);
var _STAR_parent_STAR__temp_val__56151 = this__52659__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__56147;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__56148;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__56149;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__56150;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__56151;

try{var map__56152 = fulcro.client.primitives.props(this$);
var map__56152__$1 = (((((!((map__56152 == null))))?(((((map__56152.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56152.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56152):map__56152);
var props = map__56152__$1;
var index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56152__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","index","com.wsscode.pathom.viz.index-explorer/index",-1539481252));
var attributes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56152__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attributes","com.wsscode.pathom.viz.index-explorer/attributes",-67264281));
var menu = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56152__$1,new cljs.core.Keyword("ui","menu","ui/menu",352268114));
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56152__$1,new cljs.core.Keyword("ui","page","ui/page",849066625));
var extensions = fulcro.client.primitives.get_computed.cljs$core$IFn$_invoke$arity$1(this$);
var G__56154 = goog.object.get(com.wsscode.pathom.viz.index_explorer.ExtensionContext,"Provider");
var G__56155 = ({"value": extensions});
var G__56156 = (function (){var G__56157 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"react-key","react-key",1337881348),"container",new cljs.core.Keyword(null,"classes","classes",2037804510),com.wsscode.pathom.viz.ui.kit.ccss.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".out-container",".out-container",-265742466)], 0))], null);
var G__56158 = (function (){var G__56160 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"classes","classes",2037804510),com.wsscode.pathom.viz.ui.kit.ccss.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".menu",".menu",986259874)], 0))], null);
var G__56161 = (function (){var G__56162 = menu;
var G__56163 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","on-select-attribute","com.wsscode.pathom.viz.index-explorer/on-select-attribute",2006419034),fulcro.client.primitives.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"select-attribute","select-attribute",-65313489)),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","on-select-resolver","com.wsscode.pathom.viz.index-explorer/on-select-resolver",1600914463),fulcro.client.primitives.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"select-resolver","select-resolver",43705318)),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","on-select-mutation","com.wsscode.pathom.viz.index-explorer/on-select-mutation",2007280602),fulcro.client.primitives.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"select-mutation","select-mutation",-1215580866))], null);
return (com.wsscode.pathom.viz.index_explorer.search_everything.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.search_everything.cljs$core$IFn$_invoke$arity$2(G__56162,G__56163) : com.wsscode.pathom.viz.index_explorer.search_everything.call(null,G__56162,G__56163));
})();
return (com.wsscode.pathom.viz.ui.kit.column.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.column.cljs$core$IFn$_invoke$arity$2(G__56160,G__56161) : com.wsscode.pathom.viz.ui.kit.column.call(null,G__56160,G__56161));
})();
var G__56159 = (function (){var G__56164 = com.wsscode.pathom.viz.ui.kit.gc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".flex",".flex",-73425686),new cljs.core.Keyword(null,".no-scrollbars",".no-scrollbars",2090539071)], 0));
var G__56165 = (function (){var G__56167 = cljs.core.PersistentArrayMap.EMPTY;
var G__56168 = (function (){var G__56172 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),fulcro.client.primitives.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"go-back","go-back",1642157803)),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),(!(com.wsscode.pathom.viz.index_explorer.can_go_back_QMARK_(props)))], null);
var G__56173 = "\u25C0";
return (com.wsscode.pathom.viz.ui.kit.button.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.button.cljs$core$IFn$_invoke$arity$2(G__56172,G__56173) : com.wsscode.pathom.viz.ui.kit.button.call(null,G__56172,G__56173));
})();
var G__56169 = (function (){var G__56174 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),fulcro.client.primitives.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"go-forward","go-forward",666578902)),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),(!(com.wsscode.pathom.viz.index_explorer.can_go_forward_QMARK_(props)))], null);
var G__56175 = "\u25B6";
return (com.wsscode.pathom.viz.ui.kit.button.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.button.cljs$core$IFn$_invoke$arity$2(G__56174,G__56175) : com.wsscode.pathom.viz.ui.kit.button.call(null,G__56174,G__56175));
})();
var G__56170 = (function (){var G__56176 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),fulcro.client.primitives.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"go-stats","go-stats",156008525)),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(com.wsscode.pathom.viz.index_explorer.main_view_ident(page),fulcro.client.primitives.get_ident.cljs$core$IFn$_invoke$arity$1(this$)),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"marginLeft","marginLeft",-551287007),"12px"], null)], null);
var G__56177 = "Stats";
return (com.wsscode.pathom.viz.ui.kit.button.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.button.cljs$core$IFn$_invoke$arity$2(G__56176,G__56177) : com.wsscode.pathom.viz.ui.kit.button.call(null,G__56176,G__56177));
})();
var G__56171 = (function (){var G__56178 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),fulcro.client.primitives.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"go-graph-view","go-graph-view",473251058)),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(com.wsscode.pathom.viz.index_explorer.main_view_ident(page)),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","graph-view-id","com.wsscode.pathom.viz.index-explorer/graph-view-id",211965428)),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"marginLeft","marginLeft",-551287007),"12px"], null)], null);
var G__56179 = "Full Graph";
return (com.wsscode.pathom.viz.ui.kit.button.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.button.cljs$core$IFn$_invoke$arity$2(G__56178,G__56179) : com.wsscode.pathom.viz.ui.kit.button.call(null,G__56178,G__56179));
})();
return (com.wsscode.pathom.viz.ui.kit.row.cljs$core$IFn$_invoke$arity$5 ? com.wsscode.pathom.viz.ui.kit.row.cljs$core$IFn$_invoke$arity$5(G__56167,G__56168,G__56169,G__56170,G__56171) : com.wsscode.pathom.viz.ui.kit.row.call(null,G__56167,G__56168,G__56169,G__56170,G__56171));
})();
var G__56166 = (cljs.core.truth_(page)?com.wsscode.pathom.viz.index_explorer.main_view_union(page,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(index,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attributes","com.wsscode.pathom.viz.index-explorer/attributes",-67264281),attributes,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","on-select-attribute","com.wsscode.pathom.viz.index-explorer/on-select-attribute",2006419034),fulcro.client.primitives.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"select-attribute","select-attribute",-65313489)),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","on-select-resolver","com.wsscode.pathom.viz.index-explorer/on-select-resolver",1600914463),fulcro.client.primitives.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"select-resolver","select-resolver",43705318)),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","on-select-mutation","com.wsscode.pathom.viz.index-explorer/on-select-mutation",2007280602),fulcro.client.primitives.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"select-mutation","select-mutation",-1215580866))], 0))):null);
return (com.wsscode.pathom.viz.ui.kit.column.cljs$core$IFn$_invoke$arity$3 ? com.wsscode.pathom.viz.ui.kit.column.cljs$core$IFn$_invoke$arity$3(G__56164,G__56165,G__56166) : com.wsscode.pathom.viz.ui.kit.column.call(null,G__56164,G__56165,G__56166));
})();
return (com.wsscode.pathom.viz.ui.kit.row.cljs$core$IFn$_invoke$arity$3 ? com.wsscode.pathom.viz.ui.kit.row.cljs$core$IFn$_invoke$arity$3(G__56157,G__56158,G__56159) : com.wsscode.pathom.viz.ui.kit.row.call(null,G__56157,G__56158,G__56159));
})();
return (fulcro.client.localized_dom.create_element.cljs$core$IFn$_invoke$arity$3 ? fulcro.client.localized_dom.create_element.cljs$core$IFn$_invoke$arity$3(G__56154,G__56155,G__56156) : fulcro.client.localized_dom.create_element.call(null,G__56154,G__56155,G__56156));
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__56146;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__56145;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__56144;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__56143;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__56142;
}});})(x56141_56389))
;

x56141_56389.initLocalState = ((function (x56141_56389){
return (function (){
var this$ = this;
var ret__52634__auto__ = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"select-attribute","select-attribute",-65313489),((function (this$,x56141_56389){
return (function (p1__56136_SHARP_){
return fulcro.client.primitives.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("com.wsscode.pathom.viz.index-explorer","navigate-to-attribute","com.wsscode.pathom.viz.index-explorer/navigate-to-attribute",-1900563958,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),null,(1),null)),(new cljs.core.List(null,p1__56136_SHARP_,null,(1),null)))))),null,(1),null)))))], null));
});})(this$,x56141_56389))
,new cljs.core.Keyword(null,"select-resolver","select-resolver",43705318),((function (this$,x56141_56389){
return (function (p1__56137_SHARP_){
return fulcro.client.primitives.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("com.wsscode.pathom.viz.index-explorer","navigate-to-resolver","com.wsscode.pathom.viz.index-explorer/navigate-to-resolver",1471827576,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),null,(1),null)),(new cljs.core.List(null,p1__56137_SHARP_,null,(1),null)))))),null,(1),null)))))], null));
});})(this$,x56141_56389))
,new cljs.core.Keyword(null,"select-mutation","select-mutation",-1215580866),((function (this$,x56141_56389){
return (function (p1__56138_SHARP_){
return fulcro.client.primitives.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("com.wsscode.pathom.viz.index-explorer","navigate-to-mutation","com.wsscode.pathom.viz.index-explorer/navigate-to-mutation",2015131713,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutation-sym","com.wsscode.pathom.viz.index-explorer/mutation-sym",-191280951),null,(1),null)),(new cljs.core.List(null,p1__56138_SHARP_,null,(1),null)))))),null,(1),null)))))], null));
});})(this$,x56141_56389))
,new cljs.core.Keyword(null,"go-back","go-back",1642157803),((function (this$,x56141_56389){
return (function (){
return fulcro.client.primitives.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol("com.wsscode.pathom.viz.index-explorer","navigate-backwards","com.wsscode.pathom.viz.index-explorer/navigate-backwards",1747967871,null),null,(1),null)))))], null));
});})(this$,x56141_56389))
,new cljs.core.Keyword(null,"go-forward","go-forward",666578902),((function (this$,x56141_56389){
return (function (){
return fulcro.client.primitives.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol("com.wsscode.pathom.viz.index-explorer","navigate-forwards","com.wsscode.pathom.viz.index-explorer/navigate-forwards",-2084817330,null),null,(1),null)))))], null));
});})(this$,x56141_56389))
,new cljs.core.Keyword(null,"go-stats","go-stats",156008525),((function (this$,x56141_56389){
return (function (){
return fulcro.client.primitives.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol("com.wsscode.pathom.viz.index-explorer","navigate-stats","com.wsscode.pathom.viz.index-explorer/navigate-stats",-1515292229,null),null,(1),null)))))], null));
});})(this$,x56141_56389))
,new cljs.core.Keyword(null,"go-graph-view","go-graph-view",473251058),((function (this$,x56141_56389){
return (function (){
return fulcro.client.primitives.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol("com.wsscode.pathom.viz.index-explorer","navigate-graph-view","com.wsscode.pathom.viz.index-explorer/navigate-graph-view",-277547314,null),null,(1),null)))))], null));
});})(this$,x56141_56389))
], null);
var obj56181 = ({"fulcro$state":ret__52634__auto__});
return obj56181;
});})(x56141_56389))
;


com.wsscode.pathom.viz.index_explorer.IndexExplorer.prototype.constructor = com.wsscode.pathom.viz.index_explorer.IndexExplorer;

com.wsscode.pathom.viz.index_explorer.IndexExplorer.prototype.constructor.displayName = "com.wsscode.pathom.viz.index-explorer/IndexExplorer";

com.wsscode.pathom.viz.index_explorer.IndexExplorer.prototype.fulcro$isComponent = true;

var x56182_56390 = com.wsscode.pathom.viz.index_explorer.IndexExplorer;
x56182_56390.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x56182_56390.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x56182_56390){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".out-container",".out-container",-265742466),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"flex","flex",-1425124628),"1"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"flex","flex",-1425124628),"1",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"hidden"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".graph",".graph",-327673667),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"height","height",1025178622),"800px",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #000"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".menu",".menu",986259874),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"16px",new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),"16px",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"auto",new cljs.core.Keyword(null,"width","width",-384071477),"30%"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"$row-center","$row-center",-1606740968),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"$scrollbars","$scrollbars",938627053),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"overflow","overflow",2058931880),"auto"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"$tag-spaced","$tag-spaced",-1216528780),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"$tag","$tag",1471772486),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"4px"], null)], null)], null)], null);
});})(x56182_56390))
;

x56182_56390.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x56182_56390){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.viz.index_explorer.AttributeLink,com.wsscode.pathom.viz.index_explorer.ResolverLink,com.wsscode.pathom.viz.index_explorer.MutationLink,com.wsscode.pathom.viz.ui.kit.UIKit], null);
});})(x56182_56390))
;

x56182_56390.fulcro$client$primitives$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

x56182_56390.fulcro$client$primitives$InitialAppState$initial_state$arity$2 = ((function (x56182_56390){
return (function (c,params){
var c__$1 = this;
return fulcro.client.primitives.make_state_map(cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword("ui","page","ui/page",849066625),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","resolvers","com.wsscode.pathom.viz.index-explorer/resolvers",-1064744669),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-type-mismatch","com.wsscode.pathom.viz.index-explorer/attr-type-mismatch",-1230484441),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attributes","com.wsscode.pathom.viz.index-explorer/attributes",-67264281),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","idents","com.wsscode.pathom.viz.index-explorer/idents",189283656),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","top-connection-hubs","com.wsscode.pathom.viz.index-explorer/top-connection-hubs",1843947657),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","globals","com.wsscode.pathom.viz.index-explorer/globals",1704747305),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutations","com.wsscode.pathom.viz.index-explorer/mutations",329050290),new cljs.core.Keyword("ui","menu","ui/menu",352268114)],[com.wsscode.pathom.viz.index_explorer.MainViewUnion,com.wsscode.pathom.viz.index_explorer.ResolverIndex,com.wsscode.pathom.viz.index_explorer.AttributeIndex,com.wsscode.pathom.viz.index_explorer.AttributeIndex,com.wsscode.pathom.viz.index_explorer.AttributeIndex,com.wsscode.pathom.viz.index_explorer.AttributeIndex,com.wsscode.pathom.viz.index_explorer.AttributeIndex,com.wsscode.pathom.viz.index_explorer.MutationIndex,com.wsscode.pathom.viz.index_explorer.SearchEverything]),params);
});})(x56182_56390))
;

x56182_56390.fulcro$client$primitives$IPreMerge$ = cljs.core.PROTOCOL_SENTINEL;

x56182_56390.fulcro$client$primitives$IPreMerge$pre_merge_STAR_$arity$2 = ((function (x56182_56390){
return (function (this$,p__56183){
var map__56184 = p__56183;
var map__56184__$1 = (((((!((map__56184 == null))))?(((((map__56184.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56184.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56184):map__56184);
var current_normalized = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56184__$1,new cljs.core.Keyword(null,"current-normalized","current-normalized",851723724));
var data_tree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56184__$1,new cljs.core.Keyword(null,"data-tree","data-tree",1311167582));
var this$__$1 = this;
var data_tree__$1 = com.wsscode.pathom.viz.index_explorer.clear_not_found(data_tree);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var id = (function (){var or__4131__auto__ = new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625).cljs$core$IFn$_invoke$arity$1(data_tree__$1);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625).cljs$core$IFn$_invoke$arity$1(current_normalized);
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
return cljs.core.random_uuid();
}
}
})();
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625),id,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","history","com.wsscode.pathom.viz.index-explorer/history",-288879737),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625),id], null)], null),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","history-index","com.wsscode.pathom.viz.index-explorer/history-index",-368029918),(0),new cljs.core.Keyword("ui","menu","ui/menu",352268114),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625),id], null),new cljs.core.Keyword("ui","page","ui/page",849066625),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625),id], null)], null);
})(),current_normalized,data_tree__$1,(function (){var temp__5718__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(data_tree__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","index","com.wsscode.pathom.viz.index-explorer/index",-1539481252));
if(cljs.core.truth_(temp__5718__auto__)){
var index = temp__5718__auto__;
return com.wsscode.pathom.viz.index_explorer.process_index(index);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","idx","com.wsscode.pathom.viz.index-explorer/idx",1045759782),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","no-index?","com.wsscode.pathom.viz.index-explorer/no-index?",1191727764),true], null)], null);
}
})()], 0));
});})(x56182_56390))
;

x56182_56390.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x56182_56390.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x56182_56390){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x56182_56390))
;

x56182_56390.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x56182_56390.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x56182_56390){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","index","com.wsscode.pathom.viz.index-explorer/index",-1539481252),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","idx","com.wsscode.pathom.viz.index-explorer/idx",1045759782),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","history","com.wsscode.pathom.viz.index-explorer/history",-288879737),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","history-index","com.wsscode.pathom.viz.index-explorer/history-index",-368029918),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","menu","ui/menu",352268114),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.SearchEverything)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attributes","com.wsscode.pathom.viz.index-explorer/attributes",-67264281),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.AttributeIndex)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","globals","com.wsscode.pathom.viz.index-explorer/globals",1704747305),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.AttributeIndex)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","idents","com.wsscode.pathom.viz.index-explorer/idents",189283656),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.AttributeIndex)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","top-connection-hubs","com.wsscode.pathom.viz.index-explorer/top-connection-hubs",1843947657),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.AttributeIndex)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-type-mismatch","com.wsscode.pathom.viz.index-explorer/attr-type-mismatch",-1230484441),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.AttributeIndex)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","resolvers","com.wsscode.pathom.viz.index-explorer/resolvers",-1064744669),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.ResolverIndex)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutations","com.wsscode.pathom.viz.index-explorer/mutations",329050290),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.MutationIndex)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","page","ui/page",849066625),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.MainViewUnion)], null)], null);
});})(x56182_56390))
;


var x56186_56391 = com.wsscode.pathom.viz.index_explorer.IndexExplorer.prototype;
x56186_56391.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x56186_56391.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x56186_56391){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".out-container",".out-container",-265742466),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"flex","flex",-1425124628),"1"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"flex","flex",-1425124628),"1",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"hidden"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".graph",".graph",-327673667),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"height","height",1025178622),"800px",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #000"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".menu",".menu",986259874),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"16px",new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),"16px",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"auto",new cljs.core.Keyword(null,"width","width",-384071477),"30%"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"$row-center","$row-center",-1606740968),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"$scrollbars","$scrollbars",938627053),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"overflow","overflow",2058931880),"auto"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"$tag-spaced","$tag-spaced",-1216528780),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"$tag","$tag",1471772486),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"4px"], null)], null)], null)], null);
});})(x56186_56391))
;

x56186_56391.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x56186_56391){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.viz.index_explorer.AttributeLink,com.wsscode.pathom.viz.index_explorer.ResolverLink,com.wsscode.pathom.viz.index_explorer.MutationLink,com.wsscode.pathom.viz.ui.kit.UIKit], null);
});})(x56186_56391))
;

x56186_56391.fulcro$client$primitives$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

x56186_56391.fulcro$client$primitives$InitialAppState$initial_state$arity$2 = ((function (x56186_56391){
return (function (c,params){
var c__$1 = this;
return fulcro.client.primitives.make_state_map(cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword("ui","page","ui/page",849066625),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","resolvers","com.wsscode.pathom.viz.index-explorer/resolvers",-1064744669),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-type-mismatch","com.wsscode.pathom.viz.index-explorer/attr-type-mismatch",-1230484441),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attributes","com.wsscode.pathom.viz.index-explorer/attributes",-67264281),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","idents","com.wsscode.pathom.viz.index-explorer/idents",189283656),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","top-connection-hubs","com.wsscode.pathom.viz.index-explorer/top-connection-hubs",1843947657),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","globals","com.wsscode.pathom.viz.index-explorer/globals",1704747305),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutations","com.wsscode.pathom.viz.index-explorer/mutations",329050290),new cljs.core.Keyword("ui","menu","ui/menu",352268114)],[com.wsscode.pathom.viz.index_explorer.MainViewUnion,com.wsscode.pathom.viz.index_explorer.ResolverIndex,com.wsscode.pathom.viz.index_explorer.AttributeIndex,com.wsscode.pathom.viz.index_explorer.AttributeIndex,com.wsscode.pathom.viz.index_explorer.AttributeIndex,com.wsscode.pathom.viz.index_explorer.AttributeIndex,com.wsscode.pathom.viz.index_explorer.AttributeIndex,com.wsscode.pathom.viz.index_explorer.MutationIndex,com.wsscode.pathom.viz.index_explorer.SearchEverything]),params);
});})(x56186_56391))
;

x56186_56391.fulcro$client$primitives$IPreMerge$ = cljs.core.PROTOCOL_SENTINEL;

x56186_56391.fulcro$client$primitives$IPreMerge$pre_merge_STAR_$arity$2 = ((function (x56186_56391){
return (function (this$,p__56187){
var map__56188 = p__56187;
var map__56188__$1 = (((((!((map__56188 == null))))?(((((map__56188.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56188.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56188):map__56188);
var current_normalized = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56188__$1,new cljs.core.Keyword(null,"current-normalized","current-normalized",851723724));
var data_tree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56188__$1,new cljs.core.Keyword(null,"data-tree","data-tree",1311167582));
var this$__$1 = this;
var data_tree__$1 = com.wsscode.pathom.viz.index_explorer.clear_not_found(data_tree);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var id = (function (){var or__4131__auto__ = new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625).cljs$core$IFn$_invoke$arity$1(data_tree__$1);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625).cljs$core$IFn$_invoke$arity$1(current_normalized);
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
return cljs.core.random_uuid();
}
}
})();
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625),id,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","history","com.wsscode.pathom.viz.index-explorer/history",-288879737),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625),id], null)], null),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","history-index","com.wsscode.pathom.viz.index-explorer/history-index",-368029918),(0),new cljs.core.Keyword("ui","menu","ui/menu",352268114),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625),id], null),new cljs.core.Keyword("ui","page","ui/page",849066625),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625),id], null)], null);
})(),current_normalized,data_tree__$1,(function (){var temp__5718__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(data_tree__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","index","com.wsscode.pathom.viz.index-explorer/index",-1539481252));
if(cljs.core.truth_(temp__5718__auto__)){
var index = temp__5718__auto__;
return com.wsscode.pathom.viz.index_explorer.process_index(index);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","idx","com.wsscode.pathom.viz.index-explorer/idx",1045759782),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","no-index?","com.wsscode.pathom.viz.index-explorer/no-index?",1191727764),true], null)], null);
}
})()], 0));
});})(x56186_56391))
;

x56186_56391.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x56186_56391.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x56186_56391){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x56186_56391))
;

x56186_56391.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x56186_56391.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x56186_56391){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","index","com.wsscode.pathom.viz.index-explorer/index",-1539481252),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","idx","com.wsscode.pathom.viz.index-explorer/idx",1045759782),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","history","com.wsscode.pathom.viz.index-explorer/history",-288879737),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","history-index","com.wsscode.pathom.viz.index-explorer/history-index",-368029918),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","menu","ui/menu",352268114),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.SearchEverything)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attributes","com.wsscode.pathom.viz.index-explorer/attributes",-67264281),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.AttributeIndex)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","globals","com.wsscode.pathom.viz.index-explorer/globals",1704747305),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.AttributeIndex)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","idents","com.wsscode.pathom.viz.index-explorer/idents",189283656),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.AttributeIndex)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","top-connection-hubs","com.wsscode.pathom.viz.index-explorer/top-connection-hubs",1843947657),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.AttributeIndex)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-type-mismatch","com.wsscode.pathom.viz.index-explorer/attr-type-mismatch",-1230484441),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.AttributeIndex)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","resolvers","com.wsscode.pathom.viz.index-explorer/resolvers",-1064744669),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.ResolverIndex)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutations","com.wsscode.pathom.viz.index-explorer/mutations",329050290),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.MutationIndex)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","page","ui/page",849066625),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.MainViewUnion)], null)], null);
});})(x56186_56391))
;


com.wsscode.pathom.viz.index_explorer.IndexExplorer.cljs$lang$type = true;

com.wsscode.pathom.viz.index_explorer.IndexExplorer.cljs$lang$ctorStr = "com.wsscode.pathom.viz.index-explorer/IndexExplorer";

com.wsscode.pathom.viz.index_explorer.IndexExplorer.cljs$lang$ctorPrWriter = (function (this__53744__auto__,writer__53745__auto__,opt__53746__auto__){
return cljs.core._write(writer__53745__auto__,"com.wsscode.pathom.viz.index-explorer/IndexExplorer");
});
com.wsscode.pathom.viz.index_explorer.index_explorer = fulcro.client.primitives.computed_factory.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.IndexExplorer);

//# sourceMappingURL=com.wsscode.pathom.viz.index_explorer.js.map
