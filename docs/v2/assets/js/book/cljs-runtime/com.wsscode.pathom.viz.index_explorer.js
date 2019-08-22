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
goog.require('ghostwheel.core');
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
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attribute-node","com.wsscode.pathom.viz.index-explorer/attribute-node",-2016363037),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-node","attribute","com.wsscode.pathom.viz.index-explorer.attribute-node/attribute",-323201507),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-node","multiNode","com.wsscode.pathom.viz.index-explorer.attribute-node/multiNode",461478480),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-node","mainNode","com.wsscode.pathom.viz.index-explorer.attribute-node/mainNode",620710540),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-node","weight","com.wsscode.pathom.viz.index-explorer.attribute-node/weight",1284949095),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-node","reach","com.wsscode.pathom.viz.index-explorer.attribute-node/reach",2025059773),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-node","radius","com.wsscode.pathom.viz.index-explorer.attribute-node/radius",1553083322)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-node","attribute","com.wsscode.pathom.viz.index-explorer.attribute-node/attribute",-323201507),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-node","multiNode","com.wsscode.pathom.viz.index-explorer.attribute-node/multiNode",461478480),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-node","mainNode","com.wsscode.pathom.viz.index-explorer.attribute-node/mainNode",620710540),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-node","weight","com.wsscode.pathom.viz.index-explorer.attribute-node/weight",1284949095),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-node","reach","com.wsscode.pathom.viz.index-explorer.attribute-node/reach",2025059773),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-node","radius","com.wsscode.pathom.viz.index-explorer.attribute-node/radius",1553083322)], null),null,null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__47976){
return cljs.core.map_QMARK_(G__47976);
}),(function (G__47976){
return cljs.core.contains_QMARK_(G__47976,new cljs.core.Keyword(null,"attribute","attribute",-2074029119));
}),(function (G__47976){
return cljs.core.contains_QMARK_(G__47976,new cljs.core.Keyword(null,"multiNode","multiNode",1160650868));
}),(function (G__47976){
return cljs.core.contains_QMARK_(G__47976,new cljs.core.Keyword(null,"mainNode","mainNode",-883240896));
}),(function (G__47976){
return cljs.core.contains_QMARK_(G__47976,new cljs.core.Keyword(null,"weight","weight",-1262796205));
}),(function (G__47976){
return cljs.core.contains_QMARK_(G__47976,new cljs.core.Keyword(null,"reach","reach",1376483465));
}),(function (G__47976){
return cljs.core.contains_QMARK_(G__47976,new cljs.core.Keyword(null,"radius","radius",-2073122258));
})], null),(function (G__47976){
return ((cljs.core.map_QMARK_(G__47976)) && (cljs.core.contains_QMARK_(G__47976,new cljs.core.Keyword(null,"attribute","attribute",-2074029119))) && (cljs.core.contains_QMARK_(G__47976,new cljs.core.Keyword(null,"multiNode","multiNode",1160650868))) && (cljs.core.contains_QMARK_(G__47976,new cljs.core.Keyword(null,"mainNode","mainNode",-883240896))) && (cljs.core.contains_QMARK_(G__47976,new cljs.core.Keyword(null,"weight","weight",-1262796205))) && (cljs.core.contains_QMARK_(G__47976,new cljs.core.Keyword(null,"reach","reach",1376483465))) && (cljs.core.contains_QMARK_(G__47976,new cljs.core.Keyword(null,"radius","radius",-2073122258))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-node","attribute","com.wsscode.pathom.viz.index-explorer.attribute-node/attribute",-323201507),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-node","multiNode","com.wsscode.pathom.viz.index-explorer.attribute-node/multiNode",461478480),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-node","mainNode","com.wsscode.pathom.viz.index-explorer.attribute-node/mainNode",620710540),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-node","weight","com.wsscode.pathom.viz.index-explorer.attribute-node/weight",1284949095),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-node","reach","com.wsscode.pathom.viz.index-explorer.attribute-node/reach",2025059773),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-node","radius","com.wsscode.pathom.viz.index-explorer.attribute-node/radius",1553083322)], null),null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attribute","attribute",-2074029119),new cljs.core.Keyword(null,"multiNode","multiNode",1160650868),new cljs.core.Keyword(null,"mainNode","mainNode",-883240896),new cljs.core.Keyword(null,"weight","weight",-1262796205),new cljs.core.Keyword(null,"reach","reach",1376483465),new cljs.core.Keyword(null,"radius","radius",-2073122258)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"attribute","attribute",-2074029119))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"multiNode","multiNode",1160650868))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"mainNode","mainNode",-883240896))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"weight","weight",-1262796205))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"reach","reach",1376483465))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"radius","radius",-2073122258)))], null),null])));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-link","source","com.wsscode.pathom.viz.index-explorer.attribute-link/source",-1651616055),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-link","weight","com.wsscode.pathom.viz.index-explorer.attribute-link/weight",1284752991),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","weight","com.wsscode.pathom.viz.index-explorer/weight",-1488828976),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","weight","com.wsscode.pathom.viz.index-explorer/weight",-1488828976));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-link","resolvers","com.wsscode.pathom.viz.index-explorer.attribute-link/resolvers",-1723939342),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-link","target","com.wsscode.pathom.viz.index-explorer.attribute-link/target",1726872605),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-link","deep","com.wsscode.pathom.viz.index-explorer.attribute-link/deep",599690487),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),cljs.core.boolean_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attribute-link","com.wsscode.pathom.viz.index-explorer/attribute-link",1286350991),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-link","source","com.wsscode.pathom.viz.index-explorer.attribute-link/source",-1651616055),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-link","weight","com.wsscode.pathom.viz.index-explorer.attribute-link/weight",1284752991),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-link","resolvers","com.wsscode.pathom.viz.index-explorer.attribute-link/resolvers",-1723939342),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-link","target","com.wsscode.pathom.viz.index-explorer.attribute-link/target",1726872605),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-link","deep","com.wsscode.pathom.viz.index-explorer.attribute-link/deep",599690487)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-link","source","com.wsscode.pathom.viz.index-explorer.attribute-link/source",-1651616055),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-link","weight","com.wsscode.pathom.viz.index-explorer.attribute-link/weight",1284752991),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-link","resolvers","com.wsscode.pathom.viz.index-explorer.attribute-link/resolvers",-1723939342),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-link","target","com.wsscode.pathom.viz.index-explorer.attribute-link/target",1726872605),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-link","deep","com.wsscode.pathom.viz.index-explorer.attribute-link/deep",599690487)], null),null,null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__48001){
return cljs.core.map_QMARK_(G__48001);
}),(function (G__48001){
return cljs.core.contains_QMARK_(G__48001,new cljs.core.Keyword(null,"source","source",-433931539));
}),(function (G__48001){
return cljs.core.contains_QMARK_(G__48001,new cljs.core.Keyword(null,"weight","weight",-1262796205));
}),(function (G__48001){
return cljs.core.contains_QMARK_(G__48001,new cljs.core.Keyword(null,"resolvers","resolvers",-1037942130));
}),(function (G__48001){
return cljs.core.contains_QMARK_(G__48001,new cljs.core.Keyword(null,"target","target",253001721));
}),(function (G__48001){
return cljs.core.contains_QMARK_(G__48001,new cljs.core.Keyword(null,"deep","deep",2090866875));
})], null),(function (G__48001){
return ((cljs.core.map_QMARK_(G__48001)) && (cljs.core.contains_QMARK_(G__48001,new cljs.core.Keyword(null,"source","source",-433931539))) && (cljs.core.contains_QMARK_(G__48001,new cljs.core.Keyword(null,"weight","weight",-1262796205))) && (cljs.core.contains_QMARK_(G__48001,new cljs.core.Keyword(null,"resolvers","resolvers",-1037942130))) && (cljs.core.contains_QMARK_(G__48001,new cljs.core.Keyword(null,"target","target",253001721))) && (cljs.core.contains_QMARK_(G__48001,new cljs.core.Keyword(null,"deep","deep",2090866875))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-link","source","com.wsscode.pathom.viz.index-explorer.attribute-link/source",-1651616055),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-link","weight","com.wsscode.pathom.viz.index-explorer.attribute-link/weight",1284752991),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-link","resolvers","com.wsscode.pathom.viz.index-explorer.attribute-link/resolvers",-1723939342),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-link","target","com.wsscode.pathom.viz.index-explorer.attribute-link/target",1726872605),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-link","deep","com.wsscode.pathom.viz.index-explorer.attribute-link/deep",599690487)], null),null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"weight","weight",-1262796205),new cljs.core.Keyword(null,"resolvers","resolvers",-1037942130),new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"deep","deep",2090866875)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"source","source",-433931539))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"weight","weight",-1262796205))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"resolvers","resolvers",-1037942130))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"target","target",253001721))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"deep","deep",2090866875)))], null),null])));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-graph","nodes","com.wsscode.pathom.viz.index-explorer.attribute-graph/nodes",-938578025),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attribute-node","com.wsscode.pathom.viz.index-explorer/attribute-node",-2016363037)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attribute-node","com.wsscode.pathom.viz.index-explorer/attribute-node",-2016363037),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attribute-node","com.wsscode.pathom.viz.index-explorer/attribute-node",-2016363037),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__48030){
return cljs.core.coll_QMARK_(G__48030);
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attribute-node","com.wsscode.pathom.viz.index-explorer/attribute-node",-2016363037))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-graph","links","com.wsscode.pathom.viz.index-explorer.attribute-graph/links",773829650),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attribute-link","com.wsscode.pathom.viz.index-explorer/attribute-link",1286350991)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attribute-link","com.wsscode.pathom.viz.index-explorer/attribute-link",1286350991),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attribute-link","com.wsscode.pathom.viz.index-explorer/attribute-link",1286350991),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__48031){
return cljs.core.coll_QMARK_(G__48031);
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attribute-link","com.wsscode.pathom.viz.index-explorer/attribute-link",1286350991))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attribute-graph","com.wsscode.pathom.viz.index-explorer/attribute-graph",226486271),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-graph","nodes","com.wsscode.pathom.viz.index-explorer.attribute-graph/nodes",-938578025),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-graph","links","com.wsscode.pathom.viz.index-explorer.attribute-graph/links",773829650)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-graph","nodes","com.wsscode.pathom.viz.index-explorer.attribute-graph/nodes",-938578025),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-graph","links","com.wsscode.pathom.viz.index-explorer.attribute-graph/links",773829650)], null),null,null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__48032){
return cljs.core.map_QMARK_(G__48032);
}),(function (G__48032){
return cljs.core.contains_QMARK_(G__48032,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
}),(function (G__48032){
return cljs.core.contains_QMARK_(G__48032,new cljs.core.Keyword(null,"links","links",-654507394));
})], null),(function (G__48032){
return ((cljs.core.map_QMARK_(G__48032)) && (cljs.core.contains_QMARK_(G__48032,new cljs.core.Keyword(null,"nodes","nodes",-2099585805))) && (cljs.core.contains_QMARK_(G__48032,new cljs.core.Keyword(null,"links","links",-654507394))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-graph","nodes","com.wsscode.pathom.viz.index-explorer.attribute-graph/nodes",-938578025),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-graph","links","com.wsscode.pathom.viz.index-explorer.attribute-graph/links",773829650)], null),null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.Keyword(null,"links","links",-654507394)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"nodes","nodes",-2099585805))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"links","links",-654507394)))], null),null])));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","maybe-nested-input","com.wsscode.pathom.viz.index-explorer/maybe-nested-input",734224205),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"direct","direct",-1775717856),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null),new cljs.core.Keyword(null,"nested","nested",18943849),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null)),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"direct","direct",-1775717856),new cljs.core.Keyword(null,"nested","nested",18943849)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.set_QMARK_,cljs.core.vector_QMARK_], null),null));
com.wsscode.pathom.viz.index_explorer.ExtensionContext = com.wsscode.pathom.viz.ui.context.new_context.cljs$core$IFn$_invoke$arity$0();
com.wsscode.pathom.viz.index_explorer.call_graph_comm = (function com$wsscode$pathom$viz$index_explorer$call_graph_comm(comp,f,k){
var temp__5718__auto__ = (function (){var or__4131__auto__ = (function (){var G__48058 = fulcro.client.primitives.get_state.cljs$core$IFn$_invoke$arity$2(comp,new cljs.core.Keyword(null,"graph-comm","graph-comm",-744729650));
if((G__48058 == null)){
return null;
} else {
return cljs.core.deref(G__48058);
}
})();
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var G__48059 = comp;
var G__48059__$1 = (((G__48059 == null))?null:fulcro.client.primitives.props(G__48059));
var G__48059__$2 = (((G__48059__$1 == null))?null:fulcro.client.primitives.get_computed.cljs$core$IFn$_invoke$arity$1(G__48059__$1));
var G__48059__$3 = (((G__48059__$2 == null))?null:new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","graph-comm","com.wsscode.pathom.viz.index-explorer/graph-comm",-735750087).cljs$core$IFn$_invoke$arity$1(G__48059__$2));
if((G__48059__$3 == null)){
return null;
} else {
return cljs.core.deref(G__48059__$3);
}
}
})();
if(cljs.core.truth_(temp__5718__auto__)){
var settings = temp__5718__auto__;
var G__48061 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(k);
var fexpr__48060 = goog.object.get(settings,f);
return (fexpr__48060.cljs$core$IFn$_invoke$arity$1 ? fexpr__48060.cljs$core$IFn$_invoke$arity$1(G__48061) : fexpr__48060.call(null,G__48061));
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
var this__44531__auto__ = this;
React.Component.apply(this__44531__auto__,arguments);

if((!((this__44531__auto__.initLocalState == null)))){
this__44531__auto__.state = this__44531__auto__.initLocalState();
} else {
this__44531__auto__.state = ({});
}

return this__44531__auto__;
});

var G__48077_49240 = com.wsscode.pathom.viz.index_explorer.AttributeLink.prototype;
var G__48078_49241 = React.Component.prototype;
var G__48079_49242 = fulcro.client.primitives.default_component_prototype;
goog.object.extend(G__48077_49240,G__48078_49241,G__48079_49242);
}

fulcro.client.primitives._register_component_BANG_(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","AttributeLink","com.wsscode.pathom.viz.index-explorer/AttributeLink",4406070),com.wsscode.pathom.viz.index_explorer.AttributeLink);

var x48081_49243 = com.wsscode.pathom.viz.index_explorer.AttributeLink.prototype;
x48081_49243.render = ((function (x48081_49243){
return (function (){
var this__43449__auto__ = this;
var this$ = this__43449__auto__;
var _STAR_reconciler_STAR__orig_val__48098 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__48099 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__48100 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__48101 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__48102 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__48103 = fulcro.client.primitives.get_reconciler(this__43449__auto__);
var _STAR_depth_STAR__temp_val__48104 = (fulcro.client.primitives.depth(this__43449__auto__) + (1));
var _STAR_shared_STAR__temp_val__48105 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__43449__auto__);
var _STAR_instrument_STAR__temp_val__48106 = fulcro.client.primitives.instrument(this__43449__auto__);
var _STAR_parent_STAR__temp_val__48107 = this__43449__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__48103;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__48104;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__48105;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__48106;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__48107;

try{var map__48109 = fulcro.client.primitives.props(this$);
var map__48109__$1 = (((((!((map__48109 == null))))?(((((map__48109.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48109.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48109):map__48109);
var props = map__48109__$1;
var attribute = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48109__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075));
var render = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48109__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","render","com.wsscode.pathom.viz.ui.kit/render",1024565529));
return fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".container",".container",-1441208944),com.wsscode.pathom.viz.ui.kit.dom_props.cljs$core$IFn$_invoke$arity$1(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.wsscode.pathom.viz.index_explorer.attribute_graph_events(this$,attribute),props], 0))),(cljs.core.truth_(render)?(render.cljs$core$IFn$_invoke$arity$1 ? render.cljs$core$IFn$_invoke$arity$1(props) : render.call(null,props)):cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attribute], 0)))], 0));
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__48102;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__48101;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__48100;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__48099;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__48098;
}});})(x48081_49243))
;


com.wsscode.pathom.viz.index_explorer.AttributeLink.prototype.constructor = com.wsscode.pathom.viz.index_explorer.AttributeLink;

com.wsscode.pathom.viz.index_explorer.AttributeLink.prototype.constructor.displayName = "com.wsscode.pathom.viz.index-explorer/AttributeLink";

com.wsscode.pathom.viz.index_explorer.AttributeLink.prototype.fulcro$isComponent = true;

var x48113_49244 = com.wsscode.pathom.viz.index_explorer.AttributeLink;
x48113_49244.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x48113_49244.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x48113_49244){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"color","color",1011675173),com.wsscode.pathom.viz.index_explorer.color_attribute,new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"14px",new cljs.core.Keyword(null,"line-height","line-height",1870784992),"1.4em"], null),com.wsscode.pathom.viz.ui.kit.text_base], null)], null);
});})(x48113_49244))
;

x48113_49244.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x48113_49244){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x48113_49244))
;


var x48115_49245 = com.wsscode.pathom.viz.index_explorer.AttributeLink.prototype;
x48115_49245.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x48115_49245.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x48115_49245){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"color","color",1011675173),com.wsscode.pathom.viz.index_explorer.color_attribute,new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"14px",new cljs.core.Keyword(null,"line-height","line-height",1870784992),"1.4em"], null),com.wsscode.pathom.viz.ui.kit.text_base], null)], null);
});})(x48115_49245))
;

x48115_49245.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x48115_49245){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x48115_49245))
;


com.wsscode.pathom.viz.index_explorer.AttributeLink.cljs$lang$type = true;

com.wsscode.pathom.viz.index_explorer.AttributeLink.cljs$lang$ctorStr = "com.wsscode.pathom.viz.index-explorer/AttributeLink";

com.wsscode.pathom.viz.index_explorer.AttributeLink.cljs$lang$ctorPrWriter = (function (this__44534__auto__,writer__44535__auto__,opt__44536__auto__){
return cljs.core._write(writer__44535__auto__,"com.wsscode.pathom.viz.index-explorer/AttributeLink");
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
var this__44531__auto__ = this;
React.Component.apply(this__44531__auto__,arguments);

if((!((this__44531__auto__.initLocalState == null)))){
this__44531__auto__.state = this__44531__auto__.initLocalState();
} else {
this__44531__auto__.state = ({});
}

return this__44531__auto__;
});

var G__48124_49246 = com.wsscode.pathom.viz.index_explorer.ResolverLink.prototype;
var G__48125_49247 = React.Component.prototype;
var G__48126_49248 = fulcro.client.primitives.default_component_prototype;
goog.object.extend(G__48124_49246,G__48125_49247,G__48126_49248);
}

fulcro.client.primitives._register_component_BANG_(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","ResolverLink","com.wsscode.pathom.viz.index-explorer/ResolverLink",175120056),com.wsscode.pathom.viz.index_explorer.ResolverLink);

var x48127_49249 = com.wsscode.pathom.viz.index_explorer.ResolverLink.prototype;
x48127_49249.render = ((function (x48127_49249){
return (function (){
var this__43449__auto__ = this;
var this$ = this__43449__auto__;
var _STAR_reconciler_STAR__orig_val__48129 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__48130 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__48131 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__48132 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__48133 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__48134 = fulcro.client.primitives.get_reconciler(this__43449__auto__);
var _STAR_depth_STAR__temp_val__48135 = (fulcro.client.primitives.depth(this__43449__auto__) + (1));
var _STAR_shared_STAR__temp_val__48136 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__43449__auto__);
var _STAR_instrument_STAR__temp_val__48137 = fulcro.client.primitives.instrument(this__43449__auto__);
var _STAR_parent_STAR__temp_val__48138 = this__43449__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__48134;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__48135;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__48136;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__48137;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__48138;

try{var map__48139 = fulcro.client.primitives.props(this$);
var map__48139__$1 = (((((!((map__48139 == null))))?(((((map__48139.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48139.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48139):map__48139);
var props = map__48139__$1;
var sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48139__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581));
var render = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48139__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","render","com.wsscode.pathom.viz.ui.kit/render",1024565529));
return fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".container",".container",-1441208944),com.wsscode.pathom.viz.ui.kit.dom_props.cljs$core$IFn$_invoke$arity$1(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.wsscode.pathom.viz.index_explorer.resolver_graph_events(this$,sym),props], 0))),(cljs.core.truth_(render)?(render.cljs$core$IFn$_invoke$arity$1 ? render.cljs$core$IFn$_invoke$arity$1(props) : render.call(null,props)):cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sym], 0)))], 0));
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__48133;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__48132;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__48131;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__48130;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__48129;
}});})(x48127_49249))
;


com.wsscode.pathom.viz.index_explorer.ResolverLink.prototype.constructor = com.wsscode.pathom.viz.index_explorer.ResolverLink;

com.wsscode.pathom.viz.index_explorer.ResolverLink.prototype.constructor.displayName = "com.wsscode.pathom.viz.index-explorer/ResolverLink";

com.wsscode.pathom.viz.index_explorer.ResolverLink.prototype.fulcro$isComponent = true;

var x48144_49256 = com.wsscode.pathom.viz.index_explorer.ResolverLink;
x48144_49256.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x48144_49256.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x48144_49256){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"color","color",1011675173),com.wsscode.pathom.viz.index_explorer.color_resolver,new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"14px",new cljs.core.Keyword(null,"line-height","line-height",1870784992),"1.4em"], null),com.wsscode.pathom.viz.ui.kit.text_base], null)], null);
});})(x48144_49256))
;

x48144_49256.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x48144_49256){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x48144_49256))
;


var x48146_49267 = com.wsscode.pathom.viz.index_explorer.ResolverLink.prototype;
x48146_49267.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x48146_49267.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x48146_49267){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"color","color",1011675173),com.wsscode.pathom.viz.index_explorer.color_resolver,new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"14px",new cljs.core.Keyword(null,"line-height","line-height",1870784992),"1.4em"], null),com.wsscode.pathom.viz.ui.kit.text_base], null)], null);
});})(x48146_49267))
;

x48146_49267.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x48146_49267){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x48146_49267))
;


com.wsscode.pathom.viz.index_explorer.ResolverLink.cljs$lang$type = true;

com.wsscode.pathom.viz.index_explorer.ResolverLink.cljs$lang$ctorStr = "com.wsscode.pathom.viz.index-explorer/ResolverLink";

com.wsscode.pathom.viz.index_explorer.ResolverLink.cljs$lang$ctorPrWriter = (function (this__44534__auto__,writer__44535__auto__,opt__44536__auto__){
return cljs.core._write(writer__44535__auto__,"com.wsscode.pathom.viz.index-explorer/ResolverLink");
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
var this__44531__auto__ = this;
React.Component.apply(this__44531__auto__,arguments);

if((!((this__44531__auto__.initLocalState == null)))){
this__44531__auto__.state = this__44531__auto__.initLocalState();
} else {
this__44531__auto__.state = ({});
}

return this__44531__auto__;
});

var G__48155_49271 = com.wsscode.pathom.viz.index_explorer.MutationLink.prototype;
var G__48156_49272 = React.Component.prototype;
var G__48157_49273 = fulcro.client.primitives.default_component_prototype;
goog.object.extend(G__48155_49271,G__48156_49272,G__48157_49273);
}

fulcro.client.primitives._register_component_BANG_(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","MutationLink","com.wsscode.pathom.viz.index-explorer/MutationLink",1835462427),com.wsscode.pathom.viz.index_explorer.MutationLink);

var x48158_49274 = com.wsscode.pathom.viz.index_explorer.MutationLink.prototype;
x48158_49274.render = ((function (x48158_49274){
return (function (){
var this__43449__auto__ = this;
var this$ = this__43449__auto__;
var _STAR_reconciler_STAR__orig_val__48160 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__48161 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__48162 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__48163 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__48164 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__48165 = fulcro.client.primitives.get_reconciler(this__43449__auto__);
var _STAR_depth_STAR__temp_val__48166 = (fulcro.client.primitives.depth(this__43449__auto__) + (1));
var _STAR_shared_STAR__temp_val__48167 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__43449__auto__);
var _STAR_instrument_STAR__temp_val__48168 = fulcro.client.primitives.instrument(this__43449__auto__);
var _STAR_parent_STAR__temp_val__48169 = this__43449__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__48165;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__48166;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__48167;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__48168;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__48169;

try{var map__48170 = fulcro.client.primitives.props(this$);
var map__48170__$1 = (((((!((map__48170 == null))))?(((((map__48170.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48170.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48170):map__48170);
var props = map__48170__$1;
var sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48170__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581));
var render = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48170__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","render","com.wsscode.pathom.viz.ui.kit/render",1024565529));
var on_select_mutation = new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","on-select-mutation","com.wsscode.pathom.viz.index-explorer/on-select-mutation",2007280602).cljs$core$IFn$_invoke$arity$1(fulcro.client.primitives.get_computed.cljs$core$IFn$_invoke$arity$1(fulcro.client.primitives.props(this$)));
return fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".container",".container",-1441208944),com.wsscode.pathom.viz.ui.kit.dom_props.cljs$core$IFn$_invoke$arity$1(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (on_select_mutation,map__48170,map__48170__$1,props,sym,render,_STAR_reconciler_STAR__orig_val__48160,_STAR_depth_STAR__orig_val__48161,_STAR_shared_STAR__orig_val__48162,_STAR_instrument_STAR__orig_val__48163,_STAR_parent_STAR__orig_val__48164,_STAR_reconciler_STAR__temp_val__48165,_STAR_depth_STAR__temp_val__48166,_STAR_shared_STAR__temp_val__48167,_STAR_instrument_STAR__temp_val__48168,_STAR_parent_STAR__temp_val__48169,this$,this__43449__auto__,x48158_49274){
return (function (){
return (on_select_mutation.cljs$core$IFn$_invoke$arity$1 ? on_select_mutation.cljs$core$IFn$_invoke$arity$1(sym) : on_select_mutation.call(null,sym));
});})(on_select_mutation,map__48170,map__48170__$1,props,sym,render,_STAR_reconciler_STAR__orig_val__48160,_STAR_depth_STAR__orig_val__48161,_STAR_shared_STAR__orig_val__48162,_STAR_instrument_STAR__orig_val__48163,_STAR_parent_STAR__orig_val__48164,_STAR_reconciler_STAR__temp_val__48165,_STAR_depth_STAR__temp_val__48166,_STAR_shared_STAR__temp_val__48167,_STAR_instrument_STAR__temp_val__48168,_STAR_parent_STAR__temp_val__48169,this$,this__43449__auto__,x48158_49274))
], null),props], 0))),(cljs.core.truth_(render)?(render.cljs$core$IFn$_invoke$arity$1 ? render.cljs$core$IFn$_invoke$arity$1(props) : render.call(null,props)):cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sym], 0)))], 0));
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__48164;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__48163;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__48162;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__48161;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__48160;
}});})(x48158_49274))
;


com.wsscode.pathom.viz.index_explorer.MutationLink.prototype.constructor = com.wsscode.pathom.viz.index_explorer.MutationLink;

com.wsscode.pathom.viz.index_explorer.MutationLink.prototype.constructor.displayName = "com.wsscode.pathom.viz.index-explorer/MutationLink";

com.wsscode.pathom.viz.index_explorer.MutationLink.prototype.fulcro$isComponent = true;

var x48177_49276 = com.wsscode.pathom.viz.index_explorer.MutationLink;
x48177_49276.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x48177_49276.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x48177_49276){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"color","color",1011675173),com.wsscode.pathom.viz.index_explorer.color_mutation,new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"14px",new cljs.core.Keyword(null,"line-height","line-height",1870784992),"1.4em"], null),com.wsscode.pathom.viz.ui.kit.text_base], null)], null);
});})(x48177_49276))
;

x48177_49276.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x48177_49276){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x48177_49276))
;


var x48179_49277 = com.wsscode.pathom.viz.index_explorer.MutationLink.prototype;
x48179_49277.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x48179_49277.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x48179_49277){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"color","color",1011675173),com.wsscode.pathom.viz.index_explorer.color_mutation,new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"14px",new cljs.core.Keyword(null,"line-height","line-height",1870784992),"1.4em"], null),com.wsscode.pathom.viz.ui.kit.text_base], null)], null);
});})(x48179_49277))
;

x48179_49277.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x48179_49277){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x48179_49277))
;


com.wsscode.pathom.viz.index_explorer.MutationLink.cljs$lang$type = true;

com.wsscode.pathom.viz.index_explorer.MutationLink.cljs$lang$ctorStr = "com.wsscode.pathom.viz.index-explorer/MutationLink";

com.wsscode.pathom.viz.index_explorer.MutationLink.cljs$lang$ctorPrWriter = (function (this__44534__auto__,writer__44535__auto__,opt__44536__auto__){
return cljs.core._write(writer__44535__auto__,"com.wsscode.pathom.viz.index-explorer/MutationLink");
});
com.wsscode.pathom.viz.index_explorer.mutation_link = fulcro.client.primitives.computed_factory.cljs$core$IFn$_invoke$arity$2(com.wsscode.pathom.viz.index_explorer.MutationLink,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581))], null));
com.wsscode.pathom.viz.index_explorer.node_radius = (function com$wsscode$pathom$viz$index_explorer$node_radius(p__48189){
var map__48190 = p__48189;
var map__48190__$1 = (((((!((map__48190 == null))))?(((((map__48190.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48190.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48190):map__48190);
var weight = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48190__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","weight","com.wsscode.pathom.viz.index-explorer/weight",-1488828976));
var reach = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48190__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","reach","com.wsscode.pathom.viz.index-explorer/reach",1367373590));
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
com.wsscode.pathom.viz.index_explorer.attribute__GT_node = (function com$wsscode$pathom$viz$index_explorer$attribute__GT_node(p__48195){
var map__48196 = p__48195;
var map__48196__$1 = (((((!((map__48196 == null))))?(((((map__48196.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48196.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48196):map__48196);
var attr = map__48196__$1;
var attribute = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48196__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075));
var weight = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48196__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","weight","com.wsscode.pathom.viz.index-explorer/weight",-1488828976));
var reach = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48196__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","reach","com.wsscode.pathom.viz.index-explorer/reach",1367373590));
var center_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48196__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","center?","com.wsscode.pathom.viz.index-explorer/center?",-314133194));
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
com.wsscode.pathom.viz.index_explorer.compute_nodes_links = (function com$wsscode$pathom$viz$index_explorer$compute_nodes_links(p__48198){
var map__48199 = p__48198;
var map__48199__$1 = (((((!((map__48199 == null))))?(((((map__48199.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48199.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48199):map__48199);
var attributes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48199__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attributes","com.wsscode.pathom.viz.index-explorer/attributes",-67264281));
var attributes__$1 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),attributes);
var index = com.wsscode.pathom.viz.helpers.index_by(new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),attributes__$1);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"nodes","nodes",-2099585805),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.attribute__GT_node),attributes__$1),new cljs.core.Keyword(null,"links","links",-654507394),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (attributes__$1,index,map__48199,map__48199__$1,attributes){
return (function (p__48201){
var map__48202 = p__48201;
var map__48202__$1 = (((((!((map__48202 == null))))?(((((map__48202.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48202.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48202):map__48202);
var attribute = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48202__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075));
var attr_provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48202__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attr-provides","com.wsscode.pathom.connect/attr-provides",-474523918));
var attr_str = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attribute], 0));
var res = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$1(((function (attr_str,map__48202,map__48202__$1,attribute,attr_provides,attributes__$1,index,map__48199,map__48199__$1,attributes){
return (function (p__48204){
var vec__48205 = p__48204;
var provided = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48205,(0),null);
var resolvers = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48205,(1),null);
var nested_QMARK_ = com.wsscode.pathom.viz.index_explorer.nested_QMARK_(provided);
var provided_SINGLEQUOTE_ = ((nested_QMARK_)?cljs.core.peek(provided):provided);
if(((cljs.core.contains_QMARK_(index,provided_SINGLEQUOTE_)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(attribute,provided_SINGLEQUOTE_)))){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"source","source",-433931539),attr_str,new cljs.core.Keyword(null,"weight","weight",-1262796205),cljs.core.count(resolvers),new cljs.core.Keyword(null,"resolvers","resolvers",-1037942130),clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",resolvers),new cljs.core.Keyword(null,"target","target",253001721),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([provided_SINGLEQUOTE_], 0)),new cljs.core.Keyword(null,"deep","deep",2090866875),nested_QMARK_], null);
} else {
return null;
}
});})(attr_str,map__48202,map__48202__$1,attribute,attr_provides,attributes__$1,index,map__48199,map__48199__$1,attributes))
),attr_provides);
return res;
});})(attributes__$1,index,map__48199,map__48199__$1,attributes))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attributes__$1], 0))], null);
});
com.wsscode.pathom.viz.index_explorer.render_attribute_graph = (function com$wsscode$pathom$viz$index_explorer$render_attribute_graph(this$){
var map__48208 = fulcro.client.primitives.props(this$);
var map__48208__$1 = (((((!((map__48208 == null))))?(((((map__48208.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48208.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48208):map__48208);
var props = map__48208__$1;
var on_show_details = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48208__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","on-show-details","com.wsscode.pathom.viz.index-explorer/on-show-details",-322180105));
var on_click_edge = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48208__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","on-click-edge","com.wsscode.pathom.viz.index-explorer/on-click-edge",810811642));
var graph_comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48208__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","graph-comm","com.wsscode.pathom.viz.index-explorer/graph-comm",-735750087));
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
var fexpr__48210_49304 = goog.object.get(current,"dispose");
(fexpr__48210_49304.cljs$core$IFn$_invoke$arity$0 ? fexpr__48210_49304.cljs$core$IFn$_invoke$arity$0() : fexpr__48210_49304.call(null));
} else {
}

goog.object.set(svg,"innerHTML","");

var render_settings = (function (){var G__48211 = svg;
var G__48212 = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"svgWidth","svgWidth",-356171540),goog.object.get(container,"clientWidth"),new cljs.core.Keyword(null,"svgHeight","svgHeight",1238898787),goog.object.get(container,"clientHeight"),new cljs.core.Keyword(null,"data","data",-232669377),com.wsscode.pathom.viz.index_explorer.compute_nodes_links(props),new cljs.core.Keyword(null,"showDetails","showDetails",638710309),((function (G__48211,map__48208,map__48208__$1,props,on_show_details,on_click_edge,graph_comm,on_show_details__$1,on_click_edge__$1,current,container,svg){
return (function (attr,d,js){
var G__48213 = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(attr);
var G__48214 = d;
var G__48215 = js;
return (on_show_details__$1.cljs$core$IFn$_invoke$arity$3 ? on_show_details__$1.cljs$core$IFn$_invoke$arity$3(G__48213,G__48214,G__48215) : on_show_details__$1.call(null,G__48213,G__48214,G__48215));
});})(G__48211,map__48208,map__48208__$1,props,on_show_details,on_click_edge,graph_comm,on_show_details__$1,on_click_edge__$1,current,container,svg))
,new cljs.core.Keyword(null,"onClickEdge","onClickEdge",124821712),((function (G__48211,map__48208,map__48208__$1,props,on_show_details,on_click_edge,graph_comm,on_show_details__$1,on_click_edge__$1,current,container,svg){
return (function (edge){
var resolvers = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(["#{",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.object.get(edge,"resolvers")),"}"].join(''));
var G__48216 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","resolvers","com.wsscode.pathom.viz.index-explorer/resolvers",-1064744669),resolvers], null);
return (on_click_edge__$1.cljs$core$IFn$_invoke$arity$1 ? on_click_edge__$1.cljs$core$IFn$_invoke$arity$1(G__48216) : on_click_edge__$1.call(null,G__48216));
});})(G__48211,map__48208,map__48208__$1,props,on_show_details,on_click_edge,graph_comm,on_show_details__$1,on_click_edge__$1,current,container,svg))
], null));
return module$com$wsscode$pathom$viz$d3_attribute_graph.render(G__48211,G__48212);
})();
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
var this__44531__auto__ = this;
React.Component.apply(this__44531__auto__,arguments);

if((!((this__44531__auto__.initLocalState == null)))){
this__44531__auto__.state = this__44531__auto__.initLocalState();
} else {
this__44531__auto__.state = ({});
}

return this__44531__auto__;
});

var G__48222_49310 = com.wsscode.pathom.viz.index_explorer.AttributeGraph.prototype;
var G__48223_49311 = React.Component.prototype;
var G__48224_49312 = fulcro.client.primitives.default_component_prototype;
goog.object.extend(G__48222_49310,G__48223_49311,G__48224_49312);
}

fulcro.client.primitives._register_component_BANG_(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","AttributeGraph","com.wsscode.pathom.viz.index-explorer/AttributeGraph",1136928477),com.wsscode.pathom.viz.index_explorer.AttributeGraph);

var x48225_49313 = com.wsscode.pathom.viz.index_explorer.AttributeGraph.prototype;
x48225_49313.render = ((function (x48225_49313){
return (function (){
var this__43449__auto__ = this;
var this$ = this__43449__auto__;
var _STAR_reconciler_STAR__orig_val__48226 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__48227 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__48228 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__48229 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__48230 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__48231 = fulcro.client.primitives.get_reconciler(this__43449__auto__);
var _STAR_depth_STAR__temp_val__48232 = (fulcro.client.primitives.depth(this__43449__auto__) + (1));
var _STAR_shared_STAR__temp_val__48233 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__43449__auto__);
var _STAR_instrument_STAR__temp_val__48234 = fulcro.client.primitives.instrument(this__43449__auto__);
var _STAR_parent_STAR__temp_val__48235 = this__43449__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__48231;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__48232;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__48233;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__48234;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__48235;

try{var map__48236 = fulcro.client.primitives.props(this$);
var map__48236__$1 = (((((!((map__48236 == null))))?(((((map__48236.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48236.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48236):map__48236);
return fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),((function (map__48236,map__48236__$1,_STAR_reconciler_STAR__orig_val__48226,_STAR_depth_STAR__orig_val__48227,_STAR_shared_STAR__orig_val__48228,_STAR_instrument_STAR__orig_val__48229,_STAR_parent_STAR__orig_val__48230,_STAR_reconciler_STAR__temp_val__48231,_STAR_depth_STAR__temp_val__48232,_STAR_shared_STAR__temp_val__48233,_STAR_instrument_STAR__temp_val__48234,_STAR_parent_STAR__temp_val__48235,this$,this__43449__auto__,x48225_49313){
return (function (p1__48217_SHARP_){
return goog.object.set(this$,"svgContainer",p1__48217_SHARP_);
});})(map__48236,map__48236__$1,_STAR_reconciler_STAR__orig_val__48226,_STAR_depth_STAR__orig_val__48227,_STAR_shared_STAR__orig_val__48228,_STAR_instrument_STAR__orig_val__48229,_STAR_parent_STAR__orig_val__48230,_STAR_reconciler_STAR__temp_val__48231,_STAR_depth_STAR__temp_val__48232,_STAR_shared_STAR__temp_val__48233,_STAR_instrument_STAR__temp_val__48234,_STAR_parent_STAR__temp_val__48235,this$,this__43449__auto__,x48225_49313))
], null),(cljs.core.truth_(fulcro.client.primitives.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","error-catch?","com.wsscode.pathom.viz.index-explorer/error-catch?",-21405980)))?fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error rendering trace, check console for details"], 0)):fulcro.client.localized_dom.svg.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),((function (map__48236,map__48236__$1,_STAR_reconciler_STAR__orig_val__48226,_STAR_depth_STAR__orig_val__48227,_STAR_shared_STAR__orig_val__48228,_STAR_instrument_STAR__orig_val__48229,_STAR_parent_STAR__orig_val__48230,_STAR_reconciler_STAR__temp_val__48231,_STAR_depth_STAR__temp_val__48232,_STAR_shared_STAR__temp_val__48233,_STAR_instrument_STAR__temp_val__48234,_STAR_parent_STAR__temp_val__48235,this$,this__43449__auto__,x48225_49313){
return (function (p1__48218_SHARP_){
return goog.object.set(this$,"svg",p1__48218_SHARP_);
});})(map__48236,map__48236__$1,_STAR_reconciler_STAR__orig_val__48226,_STAR_depth_STAR__orig_val__48227,_STAR_shared_STAR__orig_val__48228,_STAR_instrument_STAR__orig_val__48229,_STAR_parent_STAR__orig_val__48230,_STAR_reconciler_STAR__temp_val__48231,_STAR_depth_STAR__temp_val__48232,_STAR_shared_STAR__temp_val__48233,_STAR_instrument_STAR__temp_val__48234,_STAR_parent_STAR__temp_val__48235,this$,this__43449__auto__,x48225_49313))
], null)], 0)))], 0));
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__48230;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__48229;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__48228;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__48227;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__48226;
}});})(x48225_49313))
;

x48225_49313.componentDidUpdate = ((function (x48225_49313){
return (function (prev_props__43426__auto__,prev_state__43427__auto__,snapshot__43428__auto__){
var this__43425__auto__ = this;
var this$ = this__43425__auto__;
var snapshot48219 = snapshot__43428__auto__;
var prev_props = goog.object.get(prev_props__43426__auto__,"fulcro$value");
var _ = goog.object.get(prev_state__43427__auto__,"fulcro$state");
if((((!((this__43425__auto__ == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === this__43425__auto__.fulcro$client$primitives$Ident$))))?true:false):false)){
var ident__43429__auto___49324 = fulcro.client.primitives.ident(this__43425__auto__,prev_props);
var next_ident__43430__auto___49325 = fulcro.client.primitives.ident(this__43425__auto__,fulcro.client.primitives.props(this__43425__auto__));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ident__43429__auto___49324,next_ident__43430__auto___49325)){
var idxr__43431__auto___49326 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(fulcro.client.primitives.get_reconciler(this__43425__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__43431__auto___49326 == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__43431__auto___49326),((function (idxr__43431__auto___49326,ident__43429__auto___49324,next_ident__43430__auto___49325,this$,snapshot48219,prev_props,_,this__43425__auto__,x48225_49313){
return (function (indexes__43432__auto__){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(indexes__43432__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__43429__auto___49324], null),cljs.core.disj,this__43425__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__43430__auto___49325], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__43425__auto__);
});})(idxr__43431__auto___49326,ident__43429__auto___49324,next_ident__43430__auto___49325,this$,snapshot48219,prev_props,_,this__43425__auto__,x48225_49313))
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
});})(x48225_49313))
;

x48225_49313.componentDidCatch = ((function (x48225_49313){
return (function (error,info){
var this$ = this;
return fulcro.client.primitives.set_state_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","error-catch?","com.wsscode.pathom.viz.index-explorer/error-catch?",-21405980),true], null));
});})(x48225_49313))
;

x48225_49313.componentWillUnmount = ((function (x48225_49313){
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
var G__48239_49328 = this__43437__auto__;
var G__48240_49329 = new cljs.core.Keyword(null,"unmount","unmount",-1779083333);
(lifecycle__43439__auto__.cljs$core$IFn$_invoke$arity$2 ? lifecycle__43439__auto__.cljs$core$IFn$_invoke$arity$2(G__48239_49328,G__48240_49329) : lifecycle__43439__auto__.call(null,G__48239_49328,G__48240_49329));
} else {
}

if(cljs.core.truth_(indexer__43442__auto__)){
fulcro.client.impl.protocols.drop_component_BANG_(indexer__43442__auto__,this__43437__auto__);
} else {
}

var temp__5718__auto__ = goog.object.get(this$,"renderedData");
if(cljs.core.truth_(temp__5718__auto__)){
var settings = temp__5718__auto__;
var fexpr__48241 = goog.object.get(settings,"dispose");
return (fexpr__48241.cljs$core$IFn$_invoke$arity$0 ? fexpr__48241.cljs$core$IFn$_invoke$arity$0() : fexpr__48241.call(null));
} else {
return null;
}
});})(x48225_49313))
;

x48225_49313.componentDidMount = ((function (x48225_49313){
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
var G__48242_49335 = this__43433__auto__;
var G__48243_49336 = new cljs.core.Keyword(null,"mount","mount",-1560582470);
(lifecycle__43435__auto__.cljs$core$IFn$_invoke$arity$2 ? lifecycle__43435__auto__.cljs$core$IFn$_invoke$arity$2(G__48242_49335,G__48243_49336) : lifecycle__43435__auto__.call(null,G__48242_49335,G__48243_49336));
} else {
}

return com.wsscode.pathom.viz.index_explorer.render_attribute_graph(this$);
});})(x48225_49313))
;


com.wsscode.pathom.viz.index_explorer.AttributeGraph.prototype.constructor = com.wsscode.pathom.viz.index_explorer.AttributeGraph;

com.wsscode.pathom.viz.index_explorer.AttributeGraph.prototype.constructor.displayName = "com.wsscode.pathom.viz.index-explorer/AttributeGraph";

com.wsscode.pathom.viz.index_explorer.AttributeGraph.prototype.fulcro$isComponent = true;

var x48244_49337 = com.wsscode.pathom.viz.index_explorer.AttributeGraph;
x48244_49337.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x48244_49337.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x48244_49337){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(1),new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"100%"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"$pathom-viz-index-explorer-attr-node","$pathom-viz-index-explorer-attr-node",230011996),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),"#000A"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&$pathom-viz-index-explorer-attr-node-multi","&$pathom-viz-index-explorer-attr-node-multi",2047093030),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fill","fill",883462889),"#00000021",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#101010",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"5px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&$pathom-viz-index-explorer-attr-node-main","&$pathom-viz-index-explorer-attr-node-main",378093865),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),"#f9e943e3"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&$pathom-viz-index-explorer-attr-node-highlight","&$pathom-viz-index-explorer-attr-node-highlight",565009481),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),"#de2b34"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"$pathom-viz-index-explorer-arrow-provides","$pathom-viz-index-explorer-arrow-provides",51426281),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),"#666"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"$pathom-viz-index-explorer-arrow-reaches","$pathom-viz-index-explorer-arrow-reaches",-1480018114),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),"#666"], null)], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"$pathom-viz-index-explorer-attr-link","$pathom-viz-index-explorer-attr-link",-1176109107),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#999",new cljs.core.Keyword(null,"stroke-opacity","stroke-opacity",-1191543159),"0.6",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"1.5px",new cljs.core.Keyword(null,"fill","fill",883462889),"none"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&$pathom-viz-index-explorer-attr-link-focus-highlight","&$pathom-viz-index-explorer-attr-link-focus-highlight",1640164737),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#4242e0db",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"3px",new cljs.core.Keyword(null,"z-index","z-index",1892827090),"10"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&$pathom-viz-index-explorer-attr-link-target-highlight","&$pathom-viz-index-explorer-attr-link-target-highlight",-1694507161),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#0c0",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"3px",new cljs.core.Keyword(null,"z-index","z-index",1892827090),"10"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&$pathom-viz-index-explorer-attr-link-source-highlight","&$pathom-viz-index-explorer-attr-link-source-highlight",27199592),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#cc1a9d",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"2px",new cljs.core.Keyword(null,"z-index","z-index",1892827090),"10"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&$pathom-viz-index-explorer-attr-link-reach","&$pathom-viz-index-explorer-attr-link-reach",-2118140605),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&$pathom-viz-index-explorer-attr-link-deep","&$pathom-viz-index-explorer-attr-link-deep",-1762657377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stroke-dasharray","stroke-dasharray",-942933855),"3px"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font","font",-1506159249),"bold 18px Verdana, Helvetica, Arial, sans-serif"], null)], null)], null)], null);
});})(x48244_49337))
;

x48244_49337.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x48244_49337){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x48244_49337))
;


var x48245_49342 = com.wsscode.pathom.viz.index_explorer.AttributeGraph.prototype;
x48245_49342.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x48245_49342.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x48245_49342){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(1),new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"100%"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"$pathom-viz-index-explorer-attr-node","$pathom-viz-index-explorer-attr-node",230011996),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),"#000A"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&$pathom-viz-index-explorer-attr-node-multi","&$pathom-viz-index-explorer-attr-node-multi",2047093030),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fill","fill",883462889),"#00000021",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#101010",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"5px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&$pathom-viz-index-explorer-attr-node-main","&$pathom-viz-index-explorer-attr-node-main",378093865),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),"#f9e943e3"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&$pathom-viz-index-explorer-attr-node-highlight","&$pathom-viz-index-explorer-attr-node-highlight",565009481),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),"#de2b34"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"$pathom-viz-index-explorer-arrow-provides","$pathom-viz-index-explorer-arrow-provides",51426281),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),"#666"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"$pathom-viz-index-explorer-arrow-reaches","$pathom-viz-index-explorer-arrow-reaches",-1480018114),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),"#666"], null)], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"$pathom-viz-index-explorer-attr-link","$pathom-viz-index-explorer-attr-link",-1176109107),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#999",new cljs.core.Keyword(null,"stroke-opacity","stroke-opacity",-1191543159),"0.6",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"1.5px",new cljs.core.Keyword(null,"fill","fill",883462889),"none"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&$pathom-viz-index-explorer-attr-link-focus-highlight","&$pathom-viz-index-explorer-attr-link-focus-highlight",1640164737),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#4242e0db",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"3px",new cljs.core.Keyword(null,"z-index","z-index",1892827090),"10"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&$pathom-viz-index-explorer-attr-link-target-highlight","&$pathom-viz-index-explorer-attr-link-target-highlight",-1694507161),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#0c0",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"3px",new cljs.core.Keyword(null,"z-index","z-index",1892827090),"10"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&$pathom-viz-index-explorer-attr-link-source-highlight","&$pathom-viz-index-explorer-attr-link-source-highlight",27199592),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#cc1a9d",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"2px",new cljs.core.Keyword(null,"z-index","z-index",1892827090),"10"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&$pathom-viz-index-explorer-attr-link-reach","&$pathom-viz-index-explorer-attr-link-reach",-2118140605),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&$pathom-viz-index-explorer-attr-link-deep","&$pathom-viz-index-explorer-attr-link-deep",-1762657377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stroke-dasharray","stroke-dasharray",-942933855),"3px"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font","font",-1506159249),"bold 18px Verdana, Helvetica, Arial, sans-serif"], null)], null)], null)], null);
});})(x48245_49342))
;

x48245_49342.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x48245_49342){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x48245_49342))
;


com.wsscode.pathom.viz.index_explorer.AttributeGraph.cljs$lang$type = true;

com.wsscode.pathom.viz.index_explorer.AttributeGraph.cljs$lang$ctorStr = "com.wsscode.pathom.viz.index-explorer/AttributeGraph";

com.wsscode.pathom.viz.index_explorer.AttributeGraph.cljs$lang$ctorPrWriter = (function (this__44534__auto__,writer__44535__auto__,opt__44536__auto__){
return cljs.core._write(writer__44535__auto__,"com.wsscode.pathom.viz.index-explorer/AttributeGraph");
});
com.wsscode.pathom.viz.index_explorer.attribute_graph = fulcro.client.primitives.factory.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.AttributeGraph);
/**
 * Get attribute from index, remove provides when interconnections is falsy.
 */
com.wsscode.pathom.viz.index_explorer.pull_attr = (function com$wsscode$pathom$viz$index_explorer$pull_attr(p__48246,attr){
var map__48247 = p__48246;
var map__48247__$1 = (((((!((map__48247 == null))))?(((((map__48247.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48247.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48247):map__48247);
var attr_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48247__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-index","com.wsscode.pathom.viz.index-explorer/attr-index",684180200));
var interconnections_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48247__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","interconnections?","com.wsscode.pathom.viz.index-explorer/interconnections?",-1723481228));
var G__48249 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(attr_index,attr);
if(interconnections_QMARK_ === false){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__48249,new cljs.core.Keyword("com.wsscode.pathom.connect","attr-provides","com.wsscode.pathom.connect/attr-provides",-474523918));
} else {
return G__48249;
}
});
com.wsscode.pathom.viz.index_explorer.attribute_network_STAR_ = (function com$wsscode$pathom$viz$index_explorer$attribute_network_STAR_(p__48250,source){
var map__48251 = p__48250;
var map__48251__$1 = (((((!((map__48251 == null))))?(((((map__48251.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48251.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48251):map__48251);
var options = map__48251__$1;
var attributes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48251__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attributes","com.wsscode.pathom.viz.index-explorer/attributes",-67264281));
var sub_index = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__48251__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","sub-index","com.wsscode.pathom.viz.index-explorer/sub-index",-858012438),cljs.core.PersistentArrayMap.EMPTY);
var nested_reaches_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__48251__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","nested-reaches?","com.wsscode.pathom.viz.index-explorer/nested-reaches?",-22429448),false);
var direct_reaches_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__48251__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","direct-reaches?","com.wsscode.pathom.viz.index-explorer/direct-reaches?",-1036048994),true);
var direct_provides_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__48251__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","direct-provides?","com.wsscode.pathom.viz.index-explorer/direct-provides?",223892052),true);
var nested_provides_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__48251__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","nested-provides?","com.wsscode.pathom.viz.index-explorer/nested-provides?",-1296758362),false);
var attr_depth = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__48251__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-depth","com.wsscode.pathom.viz.index-explorer/attr-depth",-1327711242),(1));
var attr_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48251__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-index","com.wsscode.pathom.viz.index-explorer/attr-index",684180200));
var attr_visited = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__48251__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-visited","com.wsscode.pathom.viz.index-explorer/attr-visited",703029193),cljs.core.PersistentHashSet.EMPTY);
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
var map__48253 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(index,source);
var map__48253__$1 = (((((!((map__48253 == null))))?(((((map__48253.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48253.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48253):map__48253);
var attr_reach_via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48253__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via","com.wsscode.pathom.connect/attr-reach-via",-483841559));
var attr_provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48253__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attr-provides","com.wsscode.pathom.connect/attr-provides",-474523918));
var options_SINGLEQUOTE_ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(options,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-index","com.wsscode.pathom.viz.index-explorer/attr-index",684180200),index,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-depth","com.wsscode.pathom.viz.index-explorer/attr-depth",-1327711242),(attr_depth - (1)),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-visited","com.wsscode.pathom.viz.index-explorer/attr-visited",703029193),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(attr_visited,source)], 0));
var _LT__GT_ = base;
var _LT__GT___$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (_LT__GT_,index,base,map__48253,map__48253__$1,attr_reach_via,attr_provides,options_SINGLEQUOTE_,map__48251,map__48251__$1,options,attributes,sub_index,nested_reaches_QMARK_,direct_reaches_QMARK_,direct_provides_QMARK_,nested_provides_QMARK_,attr_depth,attr_index,attr_visited){
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
var G__48255 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(options_SINGLEQUOTE_,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","sub-index","com.wsscode.pathom.viz.index-explorer/sub-index",-858012438),out);
var G__48256 = attr;
return (com.wsscode.pathom.viz.index_explorer.attribute_network_STAR_.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.attribute_network_STAR_.cljs$core$IFn$_invoke$arity$2(G__48255,G__48256) : com.wsscode.pathom.viz.index_explorer.attribute_network_STAR_.call(null,G__48255,G__48256));
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(out,attr,cljs.core.merge,com.wsscode.pathom.viz.index_explorer.pull_attr(options_SINGLEQUOTE_,attr));
}
} else {
return out;
}
});})(_LT__GT_,index,base,map__48253,map__48253__$1,attr_reach_via,attr_provides,options_SINGLEQUOTE_,map__48251,map__48251__$1,options,attributes,sub_index,nested_reaches_QMARK_,direct_reaches_QMARK_,direct_provides_QMARK_,nested_provides_QMARK_,attr_depth,attr_index,attr_visited))
,_LT__GT_,cljs.core.keys(attr_reach_via));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (_LT__GT_,_LT__GT___$1,index,base,map__48253,map__48253__$1,attr_reach_via,attr_provides,options_SINGLEQUOTE_,map__48251,map__48251__$1,options,attributes,sub_index,nested_reaches_QMARK_,direct_reaches_QMARK_,direct_provides_QMARK_,nested_provides_QMARK_,attr_depth,attr_index,attr_visited){
return (function (out,attr){
if(cljs.core.truth_((function (){var and__4120__auto__ = direct_provides_QMARK_;
if(cljs.core.truth_(and__4120__auto__)){
return (attr instanceof cljs.core.Keyword);
} else {
return and__4120__auto__;
}
})())){
if((attr_depth > (1))){
var G__48257 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(options_SINGLEQUOTE_,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","sub-index","com.wsscode.pathom.viz.index-explorer/sub-index",-858012438),out);
var G__48258 = attr;
return (com.wsscode.pathom.viz.index_explorer.attribute_network_STAR_.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.attribute_network_STAR_.cljs$core$IFn$_invoke$arity$2(G__48257,G__48258) : com.wsscode.pathom.viz.index_explorer.attribute_network_STAR_.call(null,G__48257,G__48258));
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
});})(_LT__GT_,_LT__GT___$1,index,base,map__48253,map__48253__$1,attr_reach_via,attr_provides,options_SINGLEQUOTE_,map__48251,map__48251__$1,options,attributes,sub_index,nested_reaches_QMARK_,direct_reaches_QMARK_,direct_provides_QMARK_,nested_provides_QMARK_,attr_depth,attr_index,attr_visited))
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
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__48259_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(p1__48259_SHARP_,(0),(function (x){
if((x instanceof cljs.core.Keyword)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
} else {
return x;
}
}));
})),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p__48260){
var vec__48261 = p__48260;
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48261,(0),null);
var resolvers = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48261,(1),null);
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
return (function com$wsscode$pathom$viz$index_explorer$render_plugin_extension_$_iter__48264(s__48265){
return (new cljs.core.LazySeq(null,((function (plugins,data){
return (function (){
var s__48265__$1 = s__48265;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__48265__$1);
if(temp__5720__auto__){
var s__48265__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__48265__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__48265__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__48267 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__48266 = (0);
while(true){
if((i__48266 < size__4522__auto__)){
var map__48268 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__48266);
var map__48268__$1 = (((((!((map__48268 == null))))?(((((map__48268.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48268.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48268):map__48268);
var plugin = map__48268__$1;
var plugin_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48268__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","plugin-id","com.wsscode.pathom.viz.index-explorer/plugin-id",-1782512648));
if(cljs.core.contains_QMARK_(plugin,view)){
cljs.core.chunk_append(b__48267,fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([plugin_id], 0))], null),(function (){var fexpr__48270 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(plugin,view);
return (fexpr__48270.cljs$core$IFn$_invoke$arity$1 ? fexpr__48270.cljs$core$IFn$_invoke$arity$1(data) : fexpr__48270.call(null,data));
})()], 0)));

var G__49351 = (i__48266 + (1));
i__48266 = G__49351;
continue;
} else {
var G__49352 = (i__48266 + (1));
i__48266 = G__49352;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__48267),com$wsscode$pathom$viz$index_explorer$render_plugin_extension_$_iter__48264(cljs.core.chunk_rest(s__48265__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__48267),null);
}
} else {
var map__48271 = cljs.core.first(s__48265__$2);
var map__48271__$1 = (((((!((map__48271 == null))))?(((((map__48271.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48271.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48271):map__48271);
var plugin = map__48271__$1;
var plugin_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48271__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","plugin-id","com.wsscode.pathom.viz.index-explorer/plugin-id",-1782512648));
if(cljs.core.contains_QMARK_(plugin,view)){
return cljs.core.cons(fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([plugin_id], 0))], null),(function (){var fexpr__48273 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(plugin,view);
return (fexpr__48273.cljs$core$IFn$_invoke$arity$1 ? fexpr__48273.cljs$core$IFn$_invoke$arity$1(data) : fexpr__48273.call(null,data));
})()], 0)),com$wsscode$pathom$viz$index_explorer$render_plugin_extension_$_iter__48264(cljs.core.rest(s__48265__$2)));
} else {
var G__49353 = cljs.core.rest(s__48265__$2);
s__48265__$1 = G__49353;
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
var this__44531__auto__ = this;
React.Component.apply(this__44531__auto__,arguments);

if((!((this__44531__auto__.initLocalState == null)))){
this__44531__auto__.state = this__44531__auto__.initLocalState();
} else {
this__44531__auto__.state = ({});
}

return this__44531__auto__;
});

var G__48278_49354 = com.wsscode.pathom.viz.index_explorer.AttributeInfoReachVia.prototype;
var G__48279_49355 = React.Component.prototype;
var G__48280_49356 = fulcro.client.primitives.default_component_prototype;
goog.object.extend(G__48278_49354,G__48279_49355,G__48280_49356);
}

fulcro.client.primitives._register_component_BANG_(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","AttributeInfoReachVia","com.wsscode.pathom.viz.index-explorer/AttributeInfoReachVia",-997057837),com.wsscode.pathom.viz.index_explorer.AttributeInfoReachVia);

var x48281_49357 = com.wsscode.pathom.viz.index_explorer.AttributeInfoReachVia.prototype;
x48281_49357.render = ((function (x48281_49357){
return (function (){
var this__43449__auto__ = this;
var this$ = this__43449__auto__;
var _STAR_reconciler_STAR__orig_val__48282 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__48283 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__48284 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__48285 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__48286 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__48287 = fulcro.client.primitives.get_reconciler(this__43449__auto__);
var _STAR_depth_STAR__temp_val__48288 = (fulcro.client.primitives.depth(this__43449__auto__) + (1));
var _STAR_shared_STAR__temp_val__48289 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__43449__auto__);
var _STAR_instrument_STAR__temp_val__48290 = fulcro.client.primitives.instrument(this__43449__auto__);
var _STAR_parent_STAR__temp_val__48291 = this__43449__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__48287;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__48288;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__48289;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__48290;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__48291;

try{var map__48292 = fulcro.client.primitives.props(this$);
var map__48292__$1 = (((((!((map__48292 == null))))?(((((map__48292.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48292.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48292):map__48292);
var attr_reach_via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48292__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via","com.wsscode.pathom.connect/attr-reach-via",-483841559));
var computed = fulcro.client.primitives.get_computed.cljs$core$IFn$_invoke$arity$1(this$);
var G__48294 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","panel-title","com.wsscode.pathom.viz.ui.kit/panel-title",1529445284),"Reach via",new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","panel-tag","com.wsscode.pathom.viz.ui.kit/panel-tag",144392508),cljs.core.count(attr_reach_via)], null);
var G__48295 = (function (){var nested_reaches_QMARK_ = true;
var iter__4523__auto__ = ((function (nested_reaches_QMARK_,G__48294,map__48292,map__48292__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__48282,_STAR_depth_STAR__orig_val__48283,_STAR_shared_STAR__orig_val__48284,_STAR_instrument_STAR__orig_val__48285,_STAR_parent_STAR__orig_val__48286,_STAR_reconciler_STAR__temp_val__48287,_STAR_depth_STAR__temp_val__48288,_STAR_shared_STAR__temp_val__48289,_STAR_instrument_STAR__temp_val__48290,_STAR_parent_STAR__temp_val__48291,this$,this__43449__auto__,x48281_49357){
return (function com$wsscode$pathom$viz$index_explorer$iter__48296(s__48297){
return (new cljs.core.LazySeq(null,((function (nested_reaches_QMARK_,G__48294,map__48292,map__48292__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__48282,_STAR_depth_STAR__orig_val__48283,_STAR_shared_STAR__orig_val__48284,_STAR_instrument_STAR__orig_val__48285,_STAR_parent_STAR__orig_val__48286,_STAR_reconciler_STAR__temp_val__48287,_STAR_depth_STAR__temp_val__48288,_STAR_shared_STAR__temp_val__48289,_STAR_instrument_STAR__temp_val__48290,_STAR_parent_STAR__temp_val__48291,this$,this__43449__auto__,x48281_49357){
return (function (){
var s__48297__$1 = s__48297;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__48297__$1);
if(temp__5720__auto__){
var s__48297__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__48297__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__48297__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__48299 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__48298 = (0);
while(true){
if((i__48298 < size__4522__auto__)){
var vec__48300 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__48298);
var input = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48300,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48300,(1),null);
var direct_QMARK_ = cljs.core.some(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(com.wsscode.pathom.viz.index_explorer.direct_input_QMARK_,cljs.core.first),v);
if(cljs.core.truth_((function (){var or__4131__auto__ = direct_QMARK_;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return nested_reaches_QMARK_;
}
})())){
cljs.core.chunk_append(b__48299,fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([input], 0))], null),(function (){var G__48303 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),(function (){var G__48305 = input;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(input),(1))){
return cljs.core.first(G__48305);
} else {
return G__48305;
}
})(),new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","render","com.wsscode.pathom.viz.ui.kit/render",1024565529),((function (i__48298,s__48297__$1,direct_QMARK_,vec__48300,input,v,c__4521__auto__,size__4522__auto__,b__48299,s__48297__$2,temp__5720__auto__,nested_reaches_QMARK_,G__48294,map__48292,map__48292__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__48282,_STAR_depth_STAR__orig_val__48283,_STAR_shared_STAR__orig_val__48284,_STAR_instrument_STAR__orig_val__48285,_STAR_parent_STAR__orig_val__48286,_STAR_reconciler_STAR__temp_val__48287,_STAR_depth_STAR__temp_val__48288,_STAR_shared_STAR__temp_val__48289,_STAR_instrument_STAR__temp_val__48290,_STAR_parent_STAR__temp_val__48291,this$,this__43449__auto__,x48281_49357){
return (function (){
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([input], 0));
});})(i__48298,s__48297__$1,direct_QMARK_,vec__48300,input,v,c__4521__auto__,size__4522__auto__,b__48299,s__48297__$2,temp__5720__auto__,nested_reaches_QMARK_,G__48294,map__48292,map__48292__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__48282,_STAR_depth_STAR__orig_val__48283,_STAR_shared_STAR__orig_val__48284,_STAR_instrument_STAR__orig_val__48285,_STAR_parent_STAR__orig_val__48286,_STAR_reconciler_STAR__temp_val__48287,_STAR_depth_STAR__temp_val__48288,_STAR_shared_STAR__temp_val__48289,_STAR_instrument_STAR__temp_val__48290,_STAR_parent_STAR__temp_val__48291,this$,this__43449__auto__,x48281_49357))
,new cljs.core.Keyword(null,"style","style",-496642736),(function (){var G__48306 = cljs.core.PersistentArrayMap.EMPTY;
if(cljs.core.truth_(direct_QMARK_)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__48306,new cljs.core.Keyword(null,"fontWeight","fontWeight",166450581),"bold");
} else {
return G__48306;
}
})()], null);
var G__48304 = computed;
return (com.wsscode.pathom.viz.index_explorer.attribute_link.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.attribute_link.cljs$core$IFn$_invoke$arity$2(G__48303,G__48304) : com.wsscode.pathom.viz.index_explorer.attribute_link.call(null,G__48303,G__48304));
})(),((nested_reaches_QMARK_)?(function (){var iter__4523__auto__ = ((function (i__48298,s__48297__$1,direct_QMARK_,vec__48300,input,v,c__4521__auto__,size__4522__auto__,b__48299,s__48297__$2,temp__5720__auto__,nested_reaches_QMARK_,G__48294,map__48292,map__48292__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__48282,_STAR_depth_STAR__orig_val__48283,_STAR_shared_STAR__orig_val__48284,_STAR_instrument_STAR__orig_val__48285,_STAR_parent_STAR__orig_val__48286,_STAR_reconciler_STAR__temp_val__48287,_STAR_depth_STAR__temp_val__48288,_STAR_shared_STAR__temp_val__48289,_STAR_instrument_STAR__temp_val__48290,_STAR_parent_STAR__temp_val__48291,this$,this__43449__auto__,x48281_49357){
return (function com$wsscode$pathom$viz$index_explorer$iter__48296_$_iter__48307(s__48308){
return (new cljs.core.LazySeq(null,((function (i__48298,s__48297__$1,direct_QMARK_,vec__48300,input,v,c__4521__auto__,size__4522__auto__,b__48299,s__48297__$2,temp__5720__auto__,nested_reaches_QMARK_,G__48294,map__48292,map__48292__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__48282,_STAR_depth_STAR__orig_val__48283,_STAR_shared_STAR__orig_val__48284,_STAR_instrument_STAR__orig_val__48285,_STAR_parent_STAR__orig_val__48286,_STAR_reconciler_STAR__temp_val__48287,_STAR_depth_STAR__temp_val__48288,_STAR_shared_STAR__temp_val__48289,_STAR_instrument_STAR__temp_val__48290,_STAR_parent_STAR__temp_val__48291,this$,this__43449__auto__,x48281_49357){
return (function (){
var s__48308__$1 = s__48308;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__48308__$1);
if(temp__5720__auto____$1){
var s__48308__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__48308__$2)){
var c__4521__auto____$1 = cljs.core.chunk_first(s__48308__$2);
var size__4522__auto____$1 = cljs.core.count(c__4521__auto____$1);
var b__48310 = cljs.core.chunk_buffer(size__4522__auto____$1);
if((function (){var i__48309 = (0);
while(true){
if((i__48309 < size__4522__auto____$1)){
var vec__48311 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto____$1,i__48309);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48311,(0),null);
var resolvers = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48311,(1),null);
var path_SINGLEQUOTE_ = cljs.core.next(path);
if(path_SINGLEQUOTE_){
cljs.core.chunk_append(b__48310,fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path], 0)),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"marginLeft","marginLeft",-551287007),"10px"], null)], null),(function (){var iter__4523__auto__ = ((function (i__48309,s__48308__$1,i__48298,s__48297__$1,path_SINGLEQUOTE_,vec__48311,path,resolvers,c__4521__auto____$1,size__4522__auto____$1,b__48310,s__48308__$2,temp__5720__auto____$1,direct_QMARK_,vec__48300,input,v,c__4521__auto__,size__4522__auto__,b__48299,s__48297__$2,temp__5720__auto__,nested_reaches_QMARK_,G__48294,map__48292,map__48292__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__48282,_STAR_depth_STAR__orig_val__48283,_STAR_shared_STAR__orig_val__48284,_STAR_instrument_STAR__orig_val__48285,_STAR_parent_STAR__orig_val__48286,_STAR_reconciler_STAR__temp_val__48287,_STAR_depth_STAR__temp_val__48288,_STAR_shared_STAR__temp_val__48289,_STAR_instrument_STAR__temp_val__48290,_STAR_parent_STAR__temp_val__48291,this$,this__43449__auto__,x48281_49357){
return (function com$wsscode$pathom$viz$index_explorer$iter__48296_$_iter__48307_$_iter__48314(s__48315){
return (new cljs.core.LazySeq(null,((function (i__48309,s__48308__$1,i__48298,s__48297__$1,path_SINGLEQUOTE_,vec__48311,path,resolvers,c__4521__auto____$1,size__4522__auto____$1,b__48310,s__48308__$2,temp__5720__auto____$1,direct_QMARK_,vec__48300,input,v,c__4521__auto__,size__4522__auto__,b__48299,s__48297__$2,temp__5720__auto__,nested_reaches_QMARK_,G__48294,map__48292,map__48292__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__48282,_STAR_depth_STAR__orig_val__48283,_STAR_shared_STAR__orig_val__48284,_STAR_instrument_STAR__orig_val__48285,_STAR_parent_STAR__orig_val__48286,_STAR_reconciler_STAR__temp_val__48287,_STAR_depth_STAR__temp_val__48288,_STAR_shared_STAR__temp_val__48289,_STAR_instrument_STAR__temp_val__48290,_STAR_parent_STAR__temp_val__48291,this$,this__43449__auto__,x48281_49357){
return (function (){
var s__48315__$1 = s__48315;
while(true){
var temp__5720__auto____$2 = cljs.core.seq(s__48315__$1);
if(temp__5720__auto____$2){
var s__48315__$2 = temp__5720__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__48315__$2)){
var c__4521__auto____$2 = cljs.core.chunk_first(s__48315__$2);
var size__4522__auto____$2 = cljs.core.count(c__4521__auto____$2);
var b__48317 = cljs.core.chunk_buffer(size__4522__auto____$2);
if((function (){var i__48316 = (0);
while(true){
if((i__48316 < size__4522__auto____$2)){
var vec__48318 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto____$2,i__48316);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48318,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48318,(1),null);
cljs.core.chunk_append(b__48317,(function (){var G__48321 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),k,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"marginLeft","marginLeft",-551287007),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((i * (10))),"px"].join('')], null)], null);
var G__48322 = computed;
return (com.wsscode.pathom.viz.index_explorer.attribute_link.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.attribute_link.cljs$core$IFn$_invoke$arity$2(G__48321,G__48322) : com.wsscode.pathom.viz.index_explorer.attribute_link.call(null,G__48321,G__48322));
})());

var G__49364 = (i__48316 + (1));
i__48316 = G__49364;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__48317),com$wsscode$pathom$viz$index_explorer$iter__48296_$_iter__48307_$_iter__48314(cljs.core.chunk_rest(s__48315__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__48317),null);
}
} else {
var vec__48323 = cljs.core.first(s__48315__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48323,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48323,(1),null);
return cljs.core.cons((function (){var G__48326 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),k,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"marginLeft","marginLeft",-551287007),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((i * (10))),"px"].join('')], null)], null);
var G__48327 = computed;
return (com.wsscode.pathom.viz.index_explorer.attribute_link.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.attribute_link.cljs$core$IFn$_invoke$arity$2(G__48326,G__48327) : com.wsscode.pathom.viz.index_explorer.attribute_link.call(null,G__48326,G__48327));
})(),com$wsscode$pathom$viz$index_explorer$iter__48296_$_iter__48307_$_iter__48314(cljs.core.rest(s__48315__$2)));
}
} else {
return null;
}
break;
}
});})(i__48309,s__48308__$1,i__48298,s__48297__$1,path_SINGLEQUOTE_,vec__48311,path,resolvers,c__4521__auto____$1,size__4522__auto____$1,b__48310,s__48308__$2,temp__5720__auto____$1,direct_QMARK_,vec__48300,input,v,c__4521__auto__,size__4522__auto__,b__48299,s__48297__$2,temp__5720__auto__,nested_reaches_QMARK_,G__48294,map__48292,map__48292__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__48282,_STAR_depth_STAR__orig_val__48283,_STAR_shared_STAR__orig_val__48284,_STAR_instrument_STAR__orig_val__48285,_STAR_parent_STAR__orig_val__48286,_STAR_reconciler_STAR__temp_val__48287,_STAR_depth_STAR__temp_val__48288,_STAR_shared_STAR__temp_val__48289,_STAR_instrument_STAR__temp_val__48290,_STAR_parent_STAR__temp_val__48291,this$,this__43449__auto__,x48281_49357))
,null,null));
});})(i__48309,s__48308__$1,i__48298,s__48297__$1,path_SINGLEQUOTE_,vec__48311,path,resolvers,c__4521__auto____$1,size__4522__auto____$1,b__48310,s__48308__$2,temp__5720__auto____$1,direct_QMARK_,vec__48300,input,v,c__4521__auto__,size__4522__auto__,b__48299,s__48297__$2,temp__5720__auto__,nested_reaches_QMARK_,G__48294,map__48292,map__48292__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__48282,_STAR_depth_STAR__orig_val__48283,_STAR_shared_STAR__orig_val__48284,_STAR_instrument_STAR__orig_val__48285,_STAR_parent_STAR__orig_val__48286,_STAR_reconciler_STAR__temp_val__48287,_STAR_depth_STAR__temp_val__48288,_STAR_shared_STAR__temp_val__48289,_STAR_instrument_STAR__temp_val__48290,_STAR_parent_STAR__temp_val__48291,this$,this__43449__auto__,x48281_49357))
;
return iter__4523__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,path_SINGLEQUOTE_,cljs.core.range.cljs$core$IFn$_invoke$arity$0()));
})()], 0)));

var G__49365 = (i__48309 + (1));
i__48309 = G__49365;
continue;
} else {
var G__49366 = (i__48309 + (1));
i__48309 = G__49366;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__48310),com$wsscode$pathom$viz$index_explorer$iter__48296_$_iter__48307(cljs.core.chunk_rest(s__48308__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__48310),null);
}
} else {
var vec__48328 = cljs.core.first(s__48308__$2);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48328,(0),null);
var resolvers = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48328,(1),null);
var path_SINGLEQUOTE_ = cljs.core.next(path);
if(path_SINGLEQUOTE_){
return cljs.core.cons(fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path], 0)),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"marginLeft","marginLeft",-551287007),"10px"], null)], null),(function (){var iter__4523__auto__ = ((function (s__48308__$1,i__48298,s__48297__$1,path_SINGLEQUOTE_,vec__48328,path,resolvers,s__48308__$2,temp__5720__auto____$1,direct_QMARK_,vec__48300,input,v,c__4521__auto__,size__4522__auto__,b__48299,s__48297__$2,temp__5720__auto__,nested_reaches_QMARK_,G__48294,map__48292,map__48292__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__48282,_STAR_depth_STAR__orig_val__48283,_STAR_shared_STAR__orig_val__48284,_STAR_instrument_STAR__orig_val__48285,_STAR_parent_STAR__orig_val__48286,_STAR_reconciler_STAR__temp_val__48287,_STAR_depth_STAR__temp_val__48288,_STAR_shared_STAR__temp_val__48289,_STAR_instrument_STAR__temp_val__48290,_STAR_parent_STAR__temp_val__48291,this$,this__43449__auto__,x48281_49357){
return (function com$wsscode$pathom$viz$index_explorer$iter__48296_$_iter__48307_$_iter__48331(s__48332){
return (new cljs.core.LazySeq(null,((function (s__48308__$1,i__48298,s__48297__$1,path_SINGLEQUOTE_,vec__48328,path,resolvers,s__48308__$2,temp__5720__auto____$1,direct_QMARK_,vec__48300,input,v,c__4521__auto__,size__4522__auto__,b__48299,s__48297__$2,temp__5720__auto__,nested_reaches_QMARK_,G__48294,map__48292,map__48292__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__48282,_STAR_depth_STAR__orig_val__48283,_STAR_shared_STAR__orig_val__48284,_STAR_instrument_STAR__orig_val__48285,_STAR_parent_STAR__orig_val__48286,_STAR_reconciler_STAR__temp_val__48287,_STAR_depth_STAR__temp_val__48288,_STAR_shared_STAR__temp_val__48289,_STAR_instrument_STAR__temp_val__48290,_STAR_parent_STAR__temp_val__48291,this$,this__43449__auto__,x48281_49357){
return (function (){
var s__48332__$1 = s__48332;
while(true){
var temp__5720__auto____$2 = cljs.core.seq(s__48332__$1);
if(temp__5720__auto____$2){
var s__48332__$2 = temp__5720__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__48332__$2)){
var c__4521__auto____$1 = cljs.core.chunk_first(s__48332__$2);
var size__4522__auto____$1 = cljs.core.count(c__4521__auto____$1);
var b__48334 = cljs.core.chunk_buffer(size__4522__auto____$1);
if((function (){var i__48333 = (0);
while(true){
if((i__48333 < size__4522__auto____$1)){
var vec__48335 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto____$1,i__48333);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48335,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48335,(1),null);
cljs.core.chunk_append(b__48334,(function (){var G__48338 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),k,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"marginLeft","marginLeft",-551287007),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((i * (10))),"px"].join('')], null)], null);
var G__48339 = computed;
return (com.wsscode.pathom.viz.index_explorer.attribute_link.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.attribute_link.cljs$core$IFn$_invoke$arity$2(G__48338,G__48339) : com.wsscode.pathom.viz.index_explorer.attribute_link.call(null,G__48338,G__48339));
})());

var G__49378 = (i__48333 + (1));
i__48333 = G__49378;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__48334),com$wsscode$pathom$viz$index_explorer$iter__48296_$_iter__48307_$_iter__48331(cljs.core.chunk_rest(s__48332__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__48334),null);
}
} else {
var vec__48340 = cljs.core.first(s__48332__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48340,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48340,(1),null);
return cljs.core.cons((function (){var G__48343 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),k,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"marginLeft","marginLeft",-551287007),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((i * (10))),"px"].join('')], null)], null);
var G__48344 = computed;
return (com.wsscode.pathom.viz.index_explorer.attribute_link.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.attribute_link.cljs$core$IFn$_invoke$arity$2(G__48343,G__48344) : com.wsscode.pathom.viz.index_explorer.attribute_link.call(null,G__48343,G__48344));
})(),com$wsscode$pathom$viz$index_explorer$iter__48296_$_iter__48307_$_iter__48331(cljs.core.rest(s__48332__$2)));
}
} else {
return null;
}
break;
}
});})(s__48308__$1,i__48298,s__48297__$1,path_SINGLEQUOTE_,vec__48328,path,resolvers,s__48308__$2,temp__5720__auto____$1,direct_QMARK_,vec__48300,input,v,c__4521__auto__,size__4522__auto__,b__48299,s__48297__$2,temp__5720__auto__,nested_reaches_QMARK_,G__48294,map__48292,map__48292__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__48282,_STAR_depth_STAR__orig_val__48283,_STAR_shared_STAR__orig_val__48284,_STAR_instrument_STAR__orig_val__48285,_STAR_parent_STAR__orig_val__48286,_STAR_reconciler_STAR__temp_val__48287,_STAR_depth_STAR__temp_val__48288,_STAR_shared_STAR__temp_val__48289,_STAR_instrument_STAR__temp_val__48290,_STAR_parent_STAR__temp_val__48291,this$,this__43449__auto__,x48281_49357))
,null,null));
});})(s__48308__$1,i__48298,s__48297__$1,path_SINGLEQUOTE_,vec__48328,path,resolvers,s__48308__$2,temp__5720__auto____$1,direct_QMARK_,vec__48300,input,v,c__4521__auto__,size__4522__auto__,b__48299,s__48297__$2,temp__5720__auto__,nested_reaches_QMARK_,G__48294,map__48292,map__48292__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__48282,_STAR_depth_STAR__orig_val__48283,_STAR_shared_STAR__orig_val__48284,_STAR_instrument_STAR__orig_val__48285,_STAR_parent_STAR__orig_val__48286,_STAR_reconciler_STAR__temp_val__48287,_STAR_depth_STAR__temp_val__48288,_STAR_shared_STAR__temp_val__48289,_STAR_instrument_STAR__temp_val__48290,_STAR_parent_STAR__temp_val__48291,this$,this__43449__auto__,x48281_49357))
;
return iter__4523__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,path_SINGLEQUOTE_,cljs.core.range.cljs$core$IFn$_invoke$arity$0()));
})()], 0)),com$wsscode$pathom$viz$index_explorer$iter__48296_$_iter__48307(cljs.core.rest(s__48308__$2)));
} else {
var G__49391 = cljs.core.rest(s__48308__$2);
s__48308__$1 = G__49391;
continue;
}
}
} else {
return null;
}
break;
}
});})(i__48298,s__48297__$1,direct_QMARK_,vec__48300,input,v,c__4521__auto__,size__4522__auto__,b__48299,s__48297__$2,temp__5720__auto__,nested_reaches_QMARK_,G__48294,map__48292,map__48292__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__48282,_STAR_depth_STAR__orig_val__48283,_STAR_shared_STAR__orig_val__48284,_STAR_instrument_STAR__orig_val__48285,_STAR_parent_STAR__orig_val__48286,_STAR_reconciler_STAR__temp_val__48287,_STAR_depth_STAR__temp_val__48288,_STAR_shared_STAR__temp_val__48289,_STAR_instrument_STAR__temp_val__48290,_STAR_parent_STAR__temp_val__48291,this$,this__43449__auto__,x48281_49357))
,null,null));
});})(i__48298,s__48297__$1,direct_QMARK_,vec__48300,input,v,c__4521__auto__,size__4522__auto__,b__48299,s__48297__$2,temp__5720__auto__,nested_reaches_QMARK_,G__48294,map__48292,map__48292__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__48282,_STAR_depth_STAR__orig_val__48283,_STAR_shared_STAR__orig_val__48284,_STAR_instrument_STAR__orig_val__48285,_STAR_parent_STAR__orig_val__48286,_STAR_reconciler_STAR__temp_val__48287,_STAR_depth_STAR__temp_val__48288,_STAR_shared_STAR__temp_val__48289,_STAR_instrument_STAR__temp_val__48290,_STAR_parent_STAR__temp_val__48291,this$,this__43449__auto__,x48281_49357))
;
return iter__4523__auto__(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(((function (i__48298,s__48297__$1,iter__4523__auto__,direct_QMARK_,vec__48300,input,v,c__4521__auto__,size__4522__auto__,b__48299,s__48297__$2,temp__5720__auto__,nested_reaches_QMARK_,G__48294,map__48292,map__48292__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__48282,_STAR_depth_STAR__orig_val__48283,_STAR_shared_STAR__orig_val__48284,_STAR_instrument_STAR__orig_val__48285,_STAR_parent_STAR__orig_val__48286,_STAR_reconciler_STAR__temp_val__48287,_STAR_depth_STAR__temp_val__48288,_STAR_shared_STAR__temp_val__48289,_STAR_instrument_STAR__temp_val__48290,_STAR_parent_STAR__temp_val__48291,this$,this__43449__auto__,x48281_49357){
return (function (p1__48275_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(p1__48275_SHARP_,(0),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,cljs.core.sort));
});})(i__48298,s__48297__$1,iter__4523__auto__,direct_QMARK_,vec__48300,input,v,c__4521__auto__,size__4522__auto__,b__48299,s__48297__$2,temp__5720__auto__,nested_reaches_QMARK_,G__48294,map__48292,map__48292__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__48282,_STAR_depth_STAR__orig_val__48283,_STAR_shared_STAR__orig_val__48284,_STAR_instrument_STAR__orig_val__48285,_STAR_parent_STAR__orig_val__48286,_STAR_reconciler_STAR__temp_val__48287,_STAR_depth_STAR__temp_val__48288,_STAR_shared_STAR__temp_val__48289,_STAR_instrument_STAR__temp_val__48290,_STAR_parent_STAR__temp_val__48291,this$,this__43449__auto__,x48281_49357))
,cljs.core.first),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__48298,s__48297__$1,iter__4523__auto__,direct_QMARK_,vec__48300,input,v,c__4521__auto__,size__4522__auto__,b__48299,s__48297__$2,temp__5720__auto__,nested_reaches_QMARK_,G__48294,map__48292,map__48292__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__48282,_STAR_depth_STAR__orig_val__48283,_STAR_shared_STAR__orig_val__48284,_STAR_instrument_STAR__orig_val__48285,_STAR_parent_STAR__orig_val__48286,_STAR_reconciler_STAR__temp_val__48287,_STAR_depth_STAR__temp_val__48288,_STAR_shared_STAR__temp_val__48289,_STAR_instrument_STAR__temp_val__48290,_STAR_parent_STAR__temp_val__48291,this$,this__43449__auto__,x48281_49357){
return (function (p1__48274_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(p1__48274_SHARP_,(0),((function (i__48298,s__48297__$1,iter__4523__auto__,direct_QMARK_,vec__48300,input,v,c__4521__auto__,size__4522__auto__,b__48299,s__48297__$2,temp__5720__auto__,nested_reaches_QMARK_,G__48294,map__48292,map__48292__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__48282,_STAR_depth_STAR__orig_val__48283,_STAR_shared_STAR__orig_val__48284,_STAR_instrument_STAR__orig_val__48285,_STAR_parent_STAR__orig_val__48286,_STAR_reconciler_STAR__temp_val__48287,_STAR_depth_STAR__temp_val__48288,_STAR_shared_STAR__temp_val__48289,_STAR_instrument_STAR__temp_val__48290,_STAR_parent_STAR__temp_val__48291,this$,this__43449__auto__,x48281_49357){
return (function (x){
if(cljs.core.set_QMARK_(x)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
} else {
return x;
}
});})(i__48298,s__48297__$1,iter__4523__auto__,direct_QMARK_,vec__48300,input,v,c__4521__auto__,size__4522__auto__,b__48299,s__48297__$2,temp__5720__auto__,nested_reaches_QMARK_,G__48294,map__48292,map__48292__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__48282,_STAR_depth_STAR__orig_val__48283,_STAR_shared_STAR__orig_val__48284,_STAR_instrument_STAR__orig_val__48285,_STAR_parent_STAR__orig_val__48286,_STAR_reconciler_STAR__temp_val__48287,_STAR_depth_STAR__temp_val__48288,_STAR_shared_STAR__temp_val__48289,_STAR_instrument_STAR__temp_val__48290,_STAR_parent_STAR__temp_val__48291,this$,this__43449__auto__,x48281_49357))
);
});})(i__48298,s__48297__$1,iter__4523__auto__,direct_QMARK_,vec__48300,input,v,c__4521__auto__,size__4522__auto__,b__48299,s__48297__$2,temp__5720__auto__,nested_reaches_QMARK_,G__48294,map__48292,map__48292__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__48282,_STAR_depth_STAR__orig_val__48283,_STAR_shared_STAR__orig_val__48284,_STAR_instrument_STAR__orig_val__48285,_STAR_parent_STAR__orig_val__48286,_STAR_reconciler_STAR__temp_val__48287,_STAR_depth_STAR__temp_val__48288,_STAR_shared_STAR__temp_val__48289,_STAR_instrument_STAR__temp_val__48290,_STAR_parent_STAR__temp_val__48291,this$,this__43449__auto__,x48281_49357))
,v)));
})():null)], 0)));

var G__49392 = (i__48298 + (1));
i__48298 = G__49392;
continue;
} else {
var G__49393 = (i__48298 + (1));
i__48298 = G__49393;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__48299),com$wsscode$pathom$viz$index_explorer$iter__48296(cljs.core.chunk_rest(s__48297__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__48299),null);
}
} else {
var vec__48345 = cljs.core.first(s__48297__$2);
var input = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48345,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48345,(1),null);
var direct_QMARK_ = cljs.core.some(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(com.wsscode.pathom.viz.index_explorer.direct_input_QMARK_,cljs.core.first),v);
if(cljs.core.truth_((function (){var or__4131__auto__ = direct_QMARK_;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return nested_reaches_QMARK_;
}
})())){
return cljs.core.cons(fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([input], 0))], null),(function (){var G__48348 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),(function (){var G__48350 = input;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(input),(1))){
return cljs.core.first(G__48350);
} else {
return G__48350;
}
})(),new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","render","com.wsscode.pathom.viz.ui.kit/render",1024565529),((function (s__48297__$1,direct_QMARK_,vec__48345,input,v,s__48297__$2,temp__5720__auto__,nested_reaches_QMARK_,G__48294,map__48292,map__48292__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__48282,_STAR_depth_STAR__orig_val__48283,_STAR_shared_STAR__orig_val__48284,_STAR_instrument_STAR__orig_val__48285,_STAR_parent_STAR__orig_val__48286,_STAR_reconciler_STAR__temp_val__48287,_STAR_depth_STAR__temp_val__48288,_STAR_shared_STAR__temp_val__48289,_STAR_instrument_STAR__temp_val__48290,_STAR_parent_STAR__temp_val__48291,this$,this__43449__auto__,x48281_49357){
return (function (){
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([input], 0));
});})(s__48297__$1,direct_QMARK_,vec__48345,input,v,s__48297__$2,temp__5720__auto__,nested_reaches_QMARK_,G__48294,map__48292,map__48292__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__48282,_STAR_depth_STAR__orig_val__48283,_STAR_shared_STAR__orig_val__48284,_STAR_instrument_STAR__orig_val__48285,_STAR_parent_STAR__orig_val__48286,_STAR_reconciler_STAR__temp_val__48287,_STAR_depth_STAR__temp_val__48288,_STAR_shared_STAR__temp_val__48289,_STAR_instrument_STAR__temp_val__48290,_STAR_parent_STAR__temp_val__48291,this$,this__43449__auto__,x48281_49357))
,new cljs.core.Keyword(null,"style","style",-496642736),(function (){var G__48351 = cljs.core.PersistentArrayMap.EMPTY;
if(cljs.core.truth_(direct_QMARK_)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__48351,new cljs.core.Keyword(null,"fontWeight","fontWeight",166450581),"bold");
} else {
return G__48351;
}
})()], null);
var G__48349 = computed;
return (com.wsscode.pathom.viz.index_explorer.attribute_link.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.attribute_link.cljs$core$IFn$_invoke$arity$2(G__48348,G__48349) : com.wsscode.pathom.viz.index_explorer.attribute_link.call(null,G__48348,G__48349));
})(),((nested_reaches_QMARK_)?(function (){var iter__4523__auto__ = ((function (s__48297__$1,direct_QMARK_,vec__48345,input,v,s__48297__$2,temp__5720__auto__,nested_reaches_QMARK_,G__48294,map__48292,map__48292__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__48282,_STAR_depth_STAR__orig_val__48283,_STAR_shared_STAR__orig_val__48284,_STAR_instrument_STAR__orig_val__48285,_STAR_parent_STAR__orig_val__48286,_STAR_reconciler_STAR__temp_val__48287,_STAR_depth_STAR__temp_val__48288,_STAR_shared_STAR__temp_val__48289,_STAR_instrument_STAR__temp_val__48290,_STAR_parent_STAR__temp_val__48291,this$,this__43449__auto__,x48281_49357){
return (function com$wsscode$pathom$viz$index_explorer$iter__48296_$_iter__48352(s__48353){
return (new cljs.core.LazySeq(null,((function (s__48297__$1,direct_QMARK_,vec__48345,input,v,s__48297__$2,temp__5720__auto__,nested_reaches_QMARK_,G__48294,map__48292,map__48292__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__48282,_STAR_depth_STAR__orig_val__48283,_STAR_shared_STAR__orig_val__48284,_STAR_instrument_STAR__orig_val__48285,_STAR_parent_STAR__orig_val__48286,_STAR_reconciler_STAR__temp_val__48287,_STAR_depth_STAR__temp_val__48288,_STAR_shared_STAR__temp_val__48289,_STAR_instrument_STAR__temp_val__48290,_STAR_parent_STAR__temp_val__48291,this$,this__43449__auto__,x48281_49357){
return (function (){
var s__48353__$1 = s__48353;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__48353__$1);
if(temp__5720__auto____$1){
var s__48353__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__48353__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__48353__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__48355 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__48354 = (0);
while(true){
if((i__48354 < size__4522__auto__)){
var vec__48356 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__48354);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48356,(0),null);
var resolvers = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48356,(1),null);
var path_SINGLEQUOTE_ = cljs.core.next(path);
if(path_SINGLEQUOTE_){
cljs.core.chunk_append(b__48355,fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path], 0)),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"marginLeft","marginLeft",-551287007),"10px"], null)], null),(function (){var iter__4523__auto__ = ((function (i__48354,s__48353__$1,s__48297__$1,path_SINGLEQUOTE_,vec__48356,path,resolvers,c__4521__auto__,size__4522__auto__,b__48355,s__48353__$2,temp__5720__auto____$1,direct_QMARK_,vec__48345,input,v,s__48297__$2,temp__5720__auto__,nested_reaches_QMARK_,G__48294,map__48292,map__48292__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__48282,_STAR_depth_STAR__orig_val__48283,_STAR_shared_STAR__orig_val__48284,_STAR_instrument_STAR__orig_val__48285,_STAR_parent_STAR__orig_val__48286,_STAR_reconciler_STAR__temp_val__48287,_STAR_depth_STAR__temp_val__48288,_STAR_shared_STAR__temp_val__48289,_STAR_instrument_STAR__temp_val__48290,_STAR_parent_STAR__temp_val__48291,this$,this__43449__auto__,x48281_49357){
return (function com$wsscode$pathom$viz$index_explorer$iter__48296_$_iter__48352_$_iter__48359(s__48360){
return (new cljs.core.LazySeq(null,((function (i__48354,s__48353__$1,s__48297__$1,path_SINGLEQUOTE_,vec__48356,path,resolvers,c__4521__auto__,size__4522__auto__,b__48355,s__48353__$2,temp__5720__auto____$1,direct_QMARK_,vec__48345,input,v,s__48297__$2,temp__5720__auto__,nested_reaches_QMARK_,G__48294,map__48292,map__48292__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__48282,_STAR_depth_STAR__orig_val__48283,_STAR_shared_STAR__orig_val__48284,_STAR_instrument_STAR__orig_val__48285,_STAR_parent_STAR__orig_val__48286,_STAR_reconciler_STAR__temp_val__48287,_STAR_depth_STAR__temp_val__48288,_STAR_shared_STAR__temp_val__48289,_STAR_instrument_STAR__temp_val__48290,_STAR_parent_STAR__temp_val__48291,this$,this__43449__auto__,x48281_49357){
return (function (){
var s__48360__$1 = s__48360;
while(true){
var temp__5720__auto____$2 = cljs.core.seq(s__48360__$1);
if(temp__5720__auto____$2){
var s__48360__$2 = temp__5720__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__48360__$2)){
var c__4521__auto____$1 = cljs.core.chunk_first(s__48360__$2);
var size__4522__auto____$1 = cljs.core.count(c__4521__auto____$1);
var b__48362 = cljs.core.chunk_buffer(size__4522__auto____$1);
if((function (){var i__48361 = (0);
while(true){
if((i__48361 < size__4522__auto____$1)){
var vec__48363 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto____$1,i__48361);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48363,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48363,(1),null);
cljs.core.chunk_append(b__48362,(function (){var G__48366 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),k,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"marginLeft","marginLeft",-551287007),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((i * (10))),"px"].join('')], null)], null);
var G__48367 = computed;
return (com.wsscode.pathom.viz.index_explorer.attribute_link.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.attribute_link.cljs$core$IFn$_invoke$arity$2(G__48366,G__48367) : com.wsscode.pathom.viz.index_explorer.attribute_link.call(null,G__48366,G__48367));
})());

var G__49394 = (i__48361 + (1));
i__48361 = G__49394;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__48362),com$wsscode$pathom$viz$index_explorer$iter__48296_$_iter__48352_$_iter__48359(cljs.core.chunk_rest(s__48360__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__48362),null);
}
} else {
var vec__48368 = cljs.core.first(s__48360__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48368,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48368,(1),null);
return cljs.core.cons((function (){var G__48371 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),k,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"marginLeft","marginLeft",-551287007),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((i * (10))),"px"].join('')], null)], null);
var G__48372 = computed;
return (com.wsscode.pathom.viz.index_explorer.attribute_link.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.attribute_link.cljs$core$IFn$_invoke$arity$2(G__48371,G__48372) : com.wsscode.pathom.viz.index_explorer.attribute_link.call(null,G__48371,G__48372));
})(),com$wsscode$pathom$viz$index_explorer$iter__48296_$_iter__48352_$_iter__48359(cljs.core.rest(s__48360__$2)));
}
} else {
return null;
}
break;
}
});})(i__48354,s__48353__$1,s__48297__$1,path_SINGLEQUOTE_,vec__48356,path,resolvers,c__4521__auto__,size__4522__auto__,b__48355,s__48353__$2,temp__5720__auto____$1,direct_QMARK_,vec__48345,input,v,s__48297__$2,temp__5720__auto__,nested_reaches_QMARK_,G__48294,map__48292,map__48292__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__48282,_STAR_depth_STAR__orig_val__48283,_STAR_shared_STAR__orig_val__48284,_STAR_instrument_STAR__orig_val__48285,_STAR_parent_STAR__orig_val__48286,_STAR_reconciler_STAR__temp_val__48287,_STAR_depth_STAR__temp_val__48288,_STAR_shared_STAR__temp_val__48289,_STAR_instrument_STAR__temp_val__48290,_STAR_parent_STAR__temp_val__48291,this$,this__43449__auto__,x48281_49357))
,null,null));
});})(i__48354,s__48353__$1,s__48297__$1,path_SINGLEQUOTE_,vec__48356,path,resolvers,c__4521__auto__,size__4522__auto__,b__48355,s__48353__$2,temp__5720__auto____$1,direct_QMARK_,vec__48345,input,v,s__48297__$2,temp__5720__auto__,nested_reaches_QMARK_,G__48294,map__48292,map__48292__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__48282,_STAR_depth_STAR__orig_val__48283,_STAR_shared_STAR__orig_val__48284,_STAR_instrument_STAR__orig_val__48285,_STAR_parent_STAR__orig_val__48286,_STAR_reconciler_STAR__temp_val__48287,_STAR_depth_STAR__temp_val__48288,_STAR_shared_STAR__temp_val__48289,_STAR_instrument_STAR__temp_val__48290,_STAR_parent_STAR__temp_val__48291,this$,this__43449__auto__,x48281_49357))
;
return iter__4523__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,path_SINGLEQUOTE_,cljs.core.range.cljs$core$IFn$_invoke$arity$0()));
})()], 0)));

var G__49395 = (i__48354 + (1));
i__48354 = G__49395;
continue;
} else {
var G__49396 = (i__48354 + (1));
i__48354 = G__49396;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__48355),com$wsscode$pathom$viz$index_explorer$iter__48296_$_iter__48352(cljs.core.chunk_rest(s__48353__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__48355),null);
}
} else {
var vec__48373 = cljs.core.first(s__48353__$2);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48373,(0),null);
var resolvers = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48373,(1),null);
var path_SINGLEQUOTE_ = cljs.core.next(path);
if(path_SINGLEQUOTE_){
return cljs.core.cons(fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path], 0)),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"marginLeft","marginLeft",-551287007),"10px"], null)], null),(function (){var iter__4523__auto__ = ((function (s__48353__$1,s__48297__$1,path_SINGLEQUOTE_,vec__48373,path,resolvers,s__48353__$2,temp__5720__auto____$1,direct_QMARK_,vec__48345,input,v,s__48297__$2,temp__5720__auto__,nested_reaches_QMARK_,G__48294,map__48292,map__48292__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__48282,_STAR_depth_STAR__orig_val__48283,_STAR_shared_STAR__orig_val__48284,_STAR_instrument_STAR__orig_val__48285,_STAR_parent_STAR__orig_val__48286,_STAR_reconciler_STAR__temp_val__48287,_STAR_depth_STAR__temp_val__48288,_STAR_shared_STAR__temp_val__48289,_STAR_instrument_STAR__temp_val__48290,_STAR_parent_STAR__temp_val__48291,this$,this__43449__auto__,x48281_49357){
return (function com$wsscode$pathom$viz$index_explorer$iter__48296_$_iter__48352_$_iter__48376(s__48377){
return (new cljs.core.LazySeq(null,((function (s__48353__$1,s__48297__$1,path_SINGLEQUOTE_,vec__48373,path,resolvers,s__48353__$2,temp__5720__auto____$1,direct_QMARK_,vec__48345,input,v,s__48297__$2,temp__5720__auto__,nested_reaches_QMARK_,G__48294,map__48292,map__48292__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__48282,_STAR_depth_STAR__orig_val__48283,_STAR_shared_STAR__orig_val__48284,_STAR_instrument_STAR__orig_val__48285,_STAR_parent_STAR__orig_val__48286,_STAR_reconciler_STAR__temp_val__48287,_STAR_depth_STAR__temp_val__48288,_STAR_shared_STAR__temp_val__48289,_STAR_instrument_STAR__temp_val__48290,_STAR_parent_STAR__temp_val__48291,this$,this__43449__auto__,x48281_49357){
return (function (){
var s__48377__$1 = s__48377;
while(true){
var temp__5720__auto____$2 = cljs.core.seq(s__48377__$1);
if(temp__5720__auto____$2){
var s__48377__$2 = temp__5720__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__48377__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__48377__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__48379 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__48378 = (0);
while(true){
if((i__48378 < size__4522__auto__)){
var vec__48380 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__48378);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48380,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48380,(1),null);
cljs.core.chunk_append(b__48379,(function (){var G__48383 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),k,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"marginLeft","marginLeft",-551287007),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((i * (10))),"px"].join('')], null)], null);
var G__48384 = computed;
return (com.wsscode.pathom.viz.index_explorer.attribute_link.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.attribute_link.cljs$core$IFn$_invoke$arity$2(G__48383,G__48384) : com.wsscode.pathom.viz.index_explorer.attribute_link.call(null,G__48383,G__48384));
})());

var G__49397 = (i__48378 + (1));
i__48378 = G__49397;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__48379),com$wsscode$pathom$viz$index_explorer$iter__48296_$_iter__48352_$_iter__48376(cljs.core.chunk_rest(s__48377__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__48379),null);
}
} else {
var vec__48385 = cljs.core.first(s__48377__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48385,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48385,(1),null);
return cljs.core.cons((function (){var G__48388 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),k,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"marginLeft","marginLeft",-551287007),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((i * (10))),"px"].join('')], null)], null);
var G__48389 = computed;
return (com.wsscode.pathom.viz.index_explorer.attribute_link.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.attribute_link.cljs$core$IFn$_invoke$arity$2(G__48388,G__48389) : com.wsscode.pathom.viz.index_explorer.attribute_link.call(null,G__48388,G__48389));
})(),com$wsscode$pathom$viz$index_explorer$iter__48296_$_iter__48352_$_iter__48376(cljs.core.rest(s__48377__$2)));
}
} else {
return null;
}
break;
}
});})(s__48353__$1,s__48297__$1,path_SINGLEQUOTE_,vec__48373,path,resolvers,s__48353__$2,temp__5720__auto____$1,direct_QMARK_,vec__48345,input,v,s__48297__$2,temp__5720__auto__,nested_reaches_QMARK_,G__48294,map__48292,map__48292__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__48282,_STAR_depth_STAR__orig_val__48283,_STAR_shared_STAR__orig_val__48284,_STAR_instrument_STAR__orig_val__48285,_STAR_parent_STAR__orig_val__48286,_STAR_reconciler_STAR__temp_val__48287,_STAR_depth_STAR__temp_val__48288,_STAR_shared_STAR__temp_val__48289,_STAR_instrument_STAR__temp_val__48290,_STAR_parent_STAR__temp_val__48291,this$,this__43449__auto__,x48281_49357))
,null,null));
});})(s__48353__$1,s__48297__$1,path_SINGLEQUOTE_,vec__48373,path,resolvers,s__48353__$2,temp__5720__auto____$1,direct_QMARK_,vec__48345,input,v,s__48297__$2,temp__5720__auto__,nested_reaches_QMARK_,G__48294,map__48292,map__48292__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__48282,_STAR_depth_STAR__orig_val__48283,_STAR_shared_STAR__orig_val__48284,_STAR_instrument_STAR__orig_val__48285,_STAR_parent_STAR__orig_val__48286,_STAR_reconciler_STAR__temp_val__48287,_STAR_depth_STAR__temp_val__48288,_STAR_shared_STAR__temp_val__48289,_STAR_instrument_STAR__temp_val__48290,_STAR_parent_STAR__temp_val__48291,this$,this__43449__auto__,x48281_49357))
;
return iter__4523__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,path_SINGLEQUOTE_,cljs.core.range.cljs$core$IFn$_invoke$arity$0()));
})()], 0)),com$wsscode$pathom$viz$index_explorer$iter__48296_$_iter__48352(cljs.core.rest(s__48353__$2)));
} else {
var G__49398 = cljs.core.rest(s__48353__$2);
s__48353__$1 = G__49398;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__48297__$1,direct_QMARK_,vec__48345,input,v,s__48297__$2,temp__5720__auto__,nested_reaches_QMARK_,G__48294,map__48292,map__48292__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__48282,_STAR_depth_STAR__orig_val__48283,_STAR_shared_STAR__orig_val__48284,_STAR_instrument_STAR__orig_val__48285,_STAR_parent_STAR__orig_val__48286,_STAR_reconciler_STAR__temp_val__48287,_STAR_depth_STAR__temp_val__48288,_STAR_shared_STAR__temp_val__48289,_STAR_instrument_STAR__temp_val__48290,_STAR_parent_STAR__temp_val__48291,this$,this__43449__auto__,x48281_49357))
,null,null));
});})(s__48297__$1,direct_QMARK_,vec__48345,input,v,s__48297__$2,temp__5720__auto__,nested_reaches_QMARK_,G__48294,map__48292,map__48292__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__48282,_STAR_depth_STAR__orig_val__48283,_STAR_shared_STAR__orig_val__48284,_STAR_instrument_STAR__orig_val__48285,_STAR_parent_STAR__orig_val__48286,_STAR_reconciler_STAR__temp_val__48287,_STAR_depth_STAR__temp_val__48288,_STAR_shared_STAR__temp_val__48289,_STAR_instrument_STAR__temp_val__48290,_STAR_parent_STAR__temp_val__48291,this$,this__43449__auto__,x48281_49357))
;
return iter__4523__auto__(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(((function (s__48297__$1,iter__4523__auto__,direct_QMARK_,vec__48345,input,v,s__48297__$2,temp__5720__auto__,nested_reaches_QMARK_,G__48294,map__48292,map__48292__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__48282,_STAR_depth_STAR__orig_val__48283,_STAR_shared_STAR__orig_val__48284,_STAR_instrument_STAR__orig_val__48285,_STAR_parent_STAR__orig_val__48286,_STAR_reconciler_STAR__temp_val__48287,_STAR_depth_STAR__temp_val__48288,_STAR_shared_STAR__temp_val__48289,_STAR_instrument_STAR__temp_val__48290,_STAR_parent_STAR__temp_val__48291,this$,this__43449__auto__,x48281_49357){
return (function (p1__48275_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(p1__48275_SHARP_,(0),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,cljs.core.sort));
});})(s__48297__$1,iter__4523__auto__,direct_QMARK_,vec__48345,input,v,s__48297__$2,temp__5720__auto__,nested_reaches_QMARK_,G__48294,map__48292,map__48292__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__48282,_STAR_depth_STAR__orig_val__48283,_STAR_shared_STAR__orig_val__48284,_STAR_instrument_STAR__orig_val__48285,_STAR_parent_STAR__orig_val__48286,_STAR_reconciler_STAR__temp_val__48287,_STAR_depth_STAR__temp_val__48288,_STAR_shared_STAR__temp_val__48289,_STAR_instrument_STAR__temp_val__48290,_STAR_parent_STAR__temp_val__48291,this$,this__43449__auto__,x48281_49357))
,cljs.core.first),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (s__48297__$1,iter__4523__auto__,direct_QMARK_,vec__48345,input,v,s__48297__$2,temp__5720__auto__,nested_reaches_QMARK_,G__48294,map__48292,map__48292__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__48282,_STAR_depth_STAR__orig_val__48283,_STAR_shared_STAR__orig_val__48284,_STAR_instrument_STAR__orig_val__48285,_STAR_parent_STAR__orig_val__48286,_STAR_reconciler_STAR__temp_val__48287,_STAR_depth_STAR__temp_val__48288,_STAR_shared_STAR__temp_val__48289,_STAR_instrument_STAR__temp_val__48290,_STAR_parent_STAR__temp_val__48291,this$,this__43449__auto__,x48281_49357){
return (function (p1__48274_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(p1__48274_SHARP_,(0),((function (s__48297__$1,iter__4523__auto__,direct_QMARK_,vec__48345,input,v,s__48297__$2,temp__5720__auto__,nested_reaches_QMARK_,G__48294,map__48292,map__48292__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__48282,_STAR_depth_STAR__orig_val__48283,_STAR_shared_STAR__orig_val__48284,_STAR_instrument_STAR__orig_val__48285,_STAR_parent_STAR__orig_val__48286,_STAR_reconciler_STAR__temp_val__48287,_STAR_depth_STAR__temp_val__48288,_STAR_shared_STAR__temp_val__48289,_STAR_instrument_STAR__temp_val__48290,_STAR_parent_STAR__temp_val__48291,this$,this__43449__auto__,x48281_49357){
return (function (x){
if(cljs.core.set_QMARK_(x)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
} else {
return x;
}
});})(s__48297__$1,iter__4523__auto__,direct_QMARK_,vec__48345,input,v,s__48297__$2,temp__5720__auto__,nested_reaches_QMARK_,G__48294,map__48292,map__48292__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__48282,_STAR_depth_STAR__orig_val__48283,_STAR_shared_STAR__orig_val__48284,_STAR_instrument_STAR__orig_val__48285,_STAR_parent_STAR__orig_val__48286,_STAR_reconciler_STAR__temp_val__48287,_STAR_depth_STAR__temp_val__48288,_STAR_shared_STAR__temp_val__48289,_STAR_instrument_STAR__temp_val__48290,_STAR_parent_STAR__temp_val__48291,this$,this__43449__auto__,x48281_49357))
);
});})(s__48297__$1,iter__4523__auto__,direct_QMARK_,vec__48345,input,v,s__48297__$2,temp__5720__auto__,nested_reaches_QMARK_,G__48294,map__48292,map__48292__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__48282,_STAR_depth_STAR__orig_val__48283,_STAR_shared_STAR__orig_val__48284,_STAR_instrument_STAR__orig_val__48285,_STAR_parent_STAR__orig_val__48286,_STAR_reconciler_STAR__temp_val__48287,_STAR_depth_STAR__temp_val__48288,_STAR_shared_STAR__temp_val__48289,_STAR_instrument_STAR__temp_val__48290,_STAR_parent_STAR__temp_val__48291,this$,this__43449__auto__,x48281_49357))
,v)));
})():null)], 0)),com$wsscode$pathom$viz$index_explorer$iter__48296(cljs.core.rest(s__48297__$2)));
} else {
var G__49399 = cljs.core.rest(s__48297__$2);
s__48297__$1 = G__49399;
continue;
}
}
} else {
return null;
}
break;
}
});})(nested_reaches_QMARK_,G__48294,map__48292,map__48292__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__48282,_STAR_depth_STAR__orig_val__48283,_STAR_shared_STAR__orig_val__48284,_STAR_instrument_STAR__orig_val__48285,_STAR_parent_STAR__orig_val__48286,_STAR_reconciler_STAR__temp_val__48287,_STAR_depth_STAR__temp_val__48288,_STAR_shared_STAR__temp_val__48289,_STAR_instrument_STAR__temp_val__48290,_STAR_parent_STAR__temp_val__48291,this$,this__43449__auto__,x48281_49357))
,null,null));
});})(nested_reaches_QMARK_,G__48294,map__48292,map__48292__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__48282,_STAR_depth_STAR__orig_val__48283,_STAR_shared_STAR__orig_val__48284,_STAR_instrument_STAR__orig_val__48285,_STAR_parent_STAR__orig_val__48286,_STAR_reconciler_STAR__temp_val__48287,_STAR_depth_STAR__temp_val__48288,_STAR_shared_STAR__temp_val__48289,_STAR_instrument_STAR__temp_val__48290,_STAR_parent_STAR__temp_val__48291,this$,this__43449__auto__,x48281_49357))
;
return iter__4523__auto__(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.pr_str,com.wsscode.pathom.viz.index_explorer.attr_path_key_root,cljs.core.first),cljs.core.group_by(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(com.wsscode.pathom.viz.index_explorer.attr_path_key_root,cljs.core.first),attr_reach_via)));
})();
return (com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2(G__48294,G__48295) : com.wsscode.pathom.viz.ui.kit.panel.call(null,G__48294,G__48295));
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__48286;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__48285;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__48284;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__48283;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__48282;
}});})(x48281_49357))
;


com.wsscode.pathom.viz.index_explorer.AttributeInfoReachVia.prototype.constructor = com.wsscode.pathom.viz.index_explorer.AttributeInfoReachVia;

com.wsscode.pathom.viz.index_explorer.AttributeInfoReachVia.prototype.constructor.displayName = "com.wsscode.pathom.viz.index-explorer/AttributeInfoReachVia";

com.wsscode.pathom.viz.index_explorer.AttributeInfoReachVia.prototype.fulcro$isComponent = true;

var x48390_49400 = com.wsscode.pathom.viz.index_explorer.AttributeInfoReachVia;
x48390_49400.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x48390_49400.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x48390_49400){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x48390_49400))
;

x48390_49400.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x48390_49400.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x48390_49400){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via","com.wsscode.pathom.connect/attr-reach-via",-483841559)], null);
});})(x48390_49400))
;


var x48391_49401 = com.wsscode.pathom.viz.index_explorer.AttributeInfoReachVia.prototype;
x48391_49401.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x48391_49401.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x48391_49401){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x48391_49401))
;

x48391_49401.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x48391_49401.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x48391_49401){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via","com.wsscode.pathom.connect/attr-reach-via",-483841559)], null);
});})(x48391_49401))
;


com.wsscode.pathom.viz.index_explorer.AttributeInfoReachVia.cljs$lang$type = true;

com.wsscode.pathom.viz.index_explorer.AttributeInfoReachVia.cljs$lang$ctorStr = "com.wsscode.pathom.viz.index-explorer/AttributeInfoReachVia";

com.wsscode.pathom.viz.index_explorer.AttributeInfoReachVia.cljs$lang$ctorPrWriter = (function (this__44534__auto__,writer__44535__auto__,opt__44536__auto__){
return cljs.core._write(writer__44535__auto__,"com.wsscode.pathom.viz.index-explorer/AttributeInfoReachVia");
});
com.wsscode.pathom.viz.index_explorer.attribute_info_reach_via = fulcro.client.primitives.computed_factory.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.AttributeInfoReachVia);
if((typeof com !== 'undefined') && (typeof com.wsscode !== 'undefined') && (typeof com.wsscode.pathom !== 'undefined') && (typeof com.wsscode.pathom.viz !== 'undefined') && (typeof com.wsscode.pathom.viz.index_explorer !== 'undefined') && (typeof com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationParamIn !== 'undefined')){
} else {
/**
 * @constructor
 * @nocollapse
 */
com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationParamIn = (function com$wsscode$pathom$viz$index_explorer$AttributeInfoMutationParamIn(){
var this__44531__auto__ = this;
React.Component.apply(this__44531__auto__,arguments);

if((!((this__44531__auto__.initLocalState == null)))){
this__44531__auto__.state = this__44531__auto__.initLocalState();
} else {
this__44531__auto__.state = ({});
}

return this__44531__auto__;
});

var G__48394_49402 = com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationParamIn.prototype;
var G__48395_49403 = React.Component.prototype;
var G__48396_49404 = fulcro.client.primitives.default_component_prototype;
goog.object.extend(G__48394_49402,G__48395_49403,G__48396_49404);
}

fulcro.client.primitives._register_component_BANG_(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","AttributeInfoMutationParamIn","com.wsscode.pathom.viz.index-explorer/AttributeInfoMutationParamIn",768684351),com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationParamIn);

var x48397_49405 = com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationParamIn.prototype;
x48397_49405.render = ((function (x48397_49405){
return (function (){
var this__43449__auto__ = this;
var this$ = this__43449__auto__;
var _STAR_reconciler_STAR__orig_val__48398 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__48399 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__48400 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__48401 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__48402 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__48403 = fulcro.client.primitives.get_reconciler(this__43449__auto__);
var _STAR_depth_STAR__temp_val__48404 = (fulcro.client.primitives.depth(this__43449__auto__) + (1));
var _STAR_shared_STAR__temp_val__48405 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__43449__auto__);
var _STAR_instrument_STAR__temp_val__48406 = fulcro.client.primitives.instrument(this__43449__auto__);
var _STAR_parent_STAR__temp_val__48407 = this__43449__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__48403;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__48404;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__48405;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__48406;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__48407;

try{var map__48408 = fulcro.client.primitives.props(this$);
var map__48408__$1 = (((((!((map__48408 == null))))?(((((map__48408.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48408.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48408):map__48408);
var attr_mutation_param_in = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48408__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attr-mutation-param-in","com.wsscode.pathom.connect/attr-mutation-param-in",-1474382671));
var computed = fulcro.client.primitives.get_computed.cljs$core$IFn$_invoke$arity$1(this$);
var G__48410 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","panel-title","com.wsscode.pathom.viz.ui.kit/panel-title",1529445284),"Mutation Param In",new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","panel-tag","com.wsscode.pathom.viz.ui.kit/panel-tag",144392508),cljs.core.count(attr_mutation_param_in)], null);
var G__48411 = (function (){var iter__4523__auto__ = ((function (G__48410,map__48408,map__48408__$1,attr_mutation_param_in,computed,_STAR_reconciler_STAR__orig_val__48398,_STAR_depth_STAR__orig_val__48399,_STAR_shared_STAR__orig_val__48400,_STAR_instrument_STAR__orig_val__48401,_STAR_parent_STAR__orig_val__48402,_STAR_reconciler_STAR__temp_val__48403,_STAR_depth_STAR__temp_val__48404,_STAR_shared_STAR__temp_val__48405,_STAR_instrument_STAR__temp_val__48406,_STAR_parent_STAR__temp_val__48407,this$,this__43449__auto__,x48397_49405){
return (function com$wsscode$pathom$viz$index_explorer$iter__48412(s__48413){
return (new cljs.core.LazySeq(null,((function (G__48410,map__48408,map__48408__$1,attr_mutation_param_in,computed,_STAR_reconciler_STAR__orig_val__48398,_STAR_depth_STAR__orig_val__48399,_STAR_shared_STAR__orig_val__48400,_STAR_instrument_STAR__orig_val__48401,_STAR_parent_STAR__orig_val__48402,_STAR_reconciler_STAR__temp_val__48403,_STAR_depth_STAR__temp_val__48404,_STAR_shared_STAR__temp_val__48405,_STAR_instrument_STAR__temp_val__48406,_STAR_parent_STAR__temp_val__48407,this$,this__43449__auto__,x48397_49405){
return (function (){
var s__48413__$1 = s__48413;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__48413__$1);
if(temp__5720__auto__){
var s__48413__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__48413__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__48413__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__48415 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__48414 = (0);
while(true){
if((i__48414 < size__4522__auto__)){
var sym = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__48414);
cljs.core.chunk_append(b__48415,(function (){var G__48416 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),sym], null);
var G__48417 = computed;
return (com.wsscode.pathom.viz.index_explorer.mutation_link.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.mutation_link.cljs$core$IFn$_invoke$arity$2(G__48416,G__48417) : com.wsscode.pathom.viz.index_explorer.mutation_link.call(null,G__48416,G__48417));
})());

var G__49406 = (i__48414 + (1));
i__48414 = G__49406;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__48415),com$wsscode$pathom$viz$index_explorer$iter__48412(cljs.core.chunk_rest(s__48413__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__48415),null);
}
} else {
var sym = cljs.core.first(s__48413__$2);
return cljs.core.cons((function (){var G__48418 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),sym], null);
var G__48419 = computed;
return (com.wsscode.pathom.viz.index_explorer.mutation_link.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.mutation_link.cljs$core$IFn$_invoke$arity$2(G__48418,G__48419) : com.wsscode.pathom.viz.index_explorer.mutation_link.call(null,G__48418,G__48419));
})(),com$wsscode$pathom$viz$index_explorer$iter__48412(cljs.core.rest(s__48413__$2)));
}
} else {
return null;
}
break;
}
});})(G__48410,map__48408,map__48408__$1,attr_mutation_param_in,computed,_STAR_reconciler_STAR__orig_val__48398,_STAR_depth_STAR__orig_val__48399,_STAR_shared_STAR__orig_val__48400,_STAR_instrument_STAR__orig_val__48401,_STAR_parent_STAR__orig_val__48402,_STAR_reconciler_STAR__temp_val__48403,_STAR_depth_STAR__temp_val__48404,_STAR_shared_STAR__temp_val__48405,_STAR_instrument_STAR__temp_val__48406,_STAR_parent_STAR__temp_val__48407,this$,this__43449__auto__,x48397_49405))
,null,null));
});})(G__48410,map__48408,map__48408__$1,attr_mutation_param_in,computed,_STAR_reconciler_STAR__orig_val__48398,_STAR_depth_STAR__orig_val__48399,_STAR_shared_STAR__orig_val__48400,_STAR_instrument_STAR__orig_val__48401,_STAR_parent_STAR__orig_val__48402,_STAR_reconciler_STAR__temp_val__48403,_STAR_depth_STAR__temp_val__48404,_STAR_shared_STAR__temp_val__48405,_STAR_instrument_STAR__temp_val__48406,_STAR_parent_STAR__temp_val__48407,this$,this__43449__auto__,x48397_49405))
;
return iter__4523__auto__(cljs.core.sort.cljs$core$IFn$_invoke$arity$1(attr_mutation_param_in));
})();
return (com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2(G__48410,G__48411) : com.wsscode.pathom.viz.ui.kit.panel.call(null,G__48410,G__48411));
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__48402;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__48401;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__48400;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__48399;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__48398;
}});})(x48397_49405))
;


com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationParamIn.prototype.constructor = com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationParamIn;

com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationParamIn.prototype.constructor.displayName = "com.wsscode.pathom.viz.index-explorer/AttributeInfoMutationParamIn";

com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationParamIn.prototype.fulcro$isComponent = true;

var x48420_49407 = com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationParamIn;
x48420_49407.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x48420_49407.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x48420_49407){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x48420_49407))
;

x48420_49407.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x48420_49407.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x48420_49407){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-mutation-param-in","com.wsscode.pathom.connect/attr-mutation-param-in",-1474382671)], null);
});})(x48420_49407))
;


var x48421_49408 = com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationParamIn.prototype;
x48421_49408.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x48421_49408.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x48421_49408){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x48421_49408))
;

x48421_49408.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x48421_49408.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x48421_49408){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-mutation-param-in","com.wsscode.pathom.connect/attr-mutation-param-in",-1474382671)], null);
});})(x48421_49408))
;


com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationParamIn.cljs$lang$type = true;

com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationParamIn.cljs$lang$ctorStr = "com.wsscode.pathom.viz.index-explorer/AttributeInfoMutationParamIn";

com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationParamIn.cljs$lang$ctorPrWriter = (function (this__44534__auto__,writer__44535__auto__,opt__44536__auto__){
return cljs.core._write(writer__44535__auto__,"com.wsscode.pathom.viz.index-explorer/AttributeInfoMutationParamIn");
});
com.wsscode.pathom.viz.index_explorer.attribute_info_mutation_param_in = fulcro.client.primitives.computed_factory.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationParamIn);
if((typeof com !== 'undefined') && (typeof com.wsscode !== 'undefined') && (typeof com.wsscode.pathom !== 'undefined') && (typeof com.wsscode.pathom.viz !== 'undefined') && (typeof com.wsscode.pathom.viz.index_explorer !== 'undefined') && (typeof com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationOutputIn !== 'undefined')){
} else {
/**
 * @constructor
 * @nocollapse
 */
com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationOutputIn = (function com$wsscode$pathom$viz$index_explorer$AttributeInfoMutationOutputIn(){
var this__44531__auto__ = this;
React.Component.apply(this__44531__auto__,arguments);

if((!((this__44531__auto__.initLocalState == null)))){
this__44531__auto__.state = this__44531__auto__.initLocalState();
} else {
this__44531__auto__.state = ({});
}

return this__44531__auto__;
});

var G__48424_49409 = com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationOutputIn.prototype;
var G__48425_49410 = React.Component.prototype;
var G__48426_49411 = fulcro.client.primitives.default_component_prototype;
goog.object.extend(G__48424_49409,G__48425_49410,G__48426_49411);
}

fulcro.client.primitives._register_component_BANG_(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","AttributeInfoMutationOutputIn","com.wsscode.pathom.viz.index-explorer/AttributeInfoMutationOutputIn",304871094),com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationOutputIn);

var x48427_49412 = com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationOutputIn.prototype;
x48427_49412.render = ((function (x48427_49412){
return (function (){
var this__43449__auto__ = this;
var this$ = this__43449__auto__;
var _STAR_reconciler_STAR__orig_val__48428 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__48429 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__48430 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__48431 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__48432 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__48433 = fulcro.client.primitives.get_reconciler(this__43449__auto__);
var _STAR_depth_STAR__temp_val__48434 = (fulcro.client.primitives.depth(this__43449__auto__) + (1));
var _STAR_shared_STAR__temp_val__48435 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__43449__auto__);
var _STAR_instrument_STAR__temp_val__48436 = fulcro.client.primitives.instrument(this__43449__auto__);
var _STAR_parent_STAR__temp_val__48437 = this__43449__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__48433;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__48434;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__48435;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__48436;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__48437;

try{var map__48438 = fulcro.client.primitives.props(this$);
var map__48438__$1 = (((((!((map__48438 == null))))?(((((map__48438.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48438.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48438):map__48438);
var attr_mutation_output_in = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48438__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attr-mutation-output-in","com.wsscode.pathom.connect/attr-mutation-output-in",1122448739));
var computed = fulcro.client.primitives.get_computed.cljs$core$IFn$_invoke$arity$1(this$);
var G__48440 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","panel-title","com.wsscode.pathom.viz.ui.kit/panel-title",1529445284),"Mutation Output In",new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","panel-tag","com.wsscode.pathom.viz.ui.kit/panel-tag",144392508),cljs.core.count(attr_mutation_output_in)], null);
var G__48441 = (function (){var iter__4523__auto__ = ((function (G__48440,map__48438,map__48438__$1,attr_mutation_output_in,computed,_STAR_reconciler_STAR__orig_val__48428,_STAR_depth_STAR__orig_val__48429,_STAR_shared_STAR__orig_val__48430,_STAR_instrument_STAR__orig_val__48431,_STAR_parent_STAR__orig_val__48432,_STAR_reconciler_STAR__temp_val__48433,_STAR_depth_STAR__temp_val__48434,_STAR_shared_STAR__temp_val__48435,_STAR_instrument_STAR__temp_val__48436,_STAR_parent_STAR__temp_val__48437,this$,this__43449__auto__,x48427_49412){
return (function com$wsscode$pathom$viz$index_explorer$iter__48442(s__48443){
return (new cljs.core.LazySeq(null,((function (G__48440,map__48438,map__48438__$1,attr_mutation_output_in,computed,_STAR_reconciler_STAR__orig_val__48428,_STAR_depth_STAR__orig_val__48429,_STAR_shared_STAR__orig_val__48430,_STAR_instrument_STAR__orig_val__48431,_STAR_parent_STAR__orig_val__48432,_STAR_reconciler_STAR__temp_val__48433,_STAR_depth_STAR__temp_val__48434,_STAR_shared_STAR__temp_val__48435,_STAR_instrument_STAR__temp_val__48436,_STAR_parent_STAR__temp_val__48437,this$,this__43449__auto__,x48427_49412){
return (function (){
var s__48443__$1 = s__48443;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__48443__$1);
if(temp__5720__auto__){
var s__48443__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__48443__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__48443__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__48445 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__48444 = (0);
while(true){
if((i__48444 < size__4522__auto__)){
var sym = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__48444);
cljs.core.chunk_append(b__48445,(function (){var G__48446 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),sym], null);
var G__48447 = computed;
return (com.wsscode.pathom.viz.index_explorer.mutation_link.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.mutation_link.cljs$core$IFn$_invoke$arity$2(G__48446,G__48447) : com.wsscode.pathom.viz.index_explorer.mutation_link.call(null,G__48446,G__48447));
})());

var G__49413 = (i__48444 + (1));
i__48444 = G__49413;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__48445),com$wsscode$pathom$viz$index_explorer$iter__48442(cljs.core.chunk_rest(s__48443__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__48445),null);
}
} else {
var sym = cljs.core.first(s__48443__$2);
return cljs.core.cons((function (){var G__48448 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),sym], null);
var G__48449 = computed;
return (com.wsscode.pathom.viz.index_explorer.mutation_link.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.mutation_link.cljs$core$IFn$_invoke$arity$2(G__48448,G__48449) : com.wsscode.pathom.viz.index_explorer.mutation_link.call(null,G__48448,G__48449));
})(),com$wsscode$pathom$viz$index_explorer$iter__48442(cljs.core.rest(s__48443__$2)));
}
} else {
return null;
}
break;
}
});})(G__48440,map__48438,map__48438__$1,attr_mutation_output_in,computed,_STAR_reconciler_STAR__orig_val__48428,_STAR_depth_STAR__orig_val__48429,_STAR_shared_STAR__orig_val__48430,_STAR_instrument_STAR__orig_val__48431,_STAR_parent_STAR__orig_val__48432,_STAR_reconciler_STAR__temp_val__48433,_STAR_depth_STAR__temp_val__48434,_STAR_shared_STAR__temp_val__48435,_STAR_instrument_STAR__temp_val__48436,_STAR_parent_STAR__temp_val__48437,this$,this__43449__auto__,x48427_49412))
,null,null));
});})(G__48440,map__48438,map__48438__$1,attr_mutation_output_in,computed,_STAR_reconciler_STAR__orig_val__48428,_STAR_depth_STAR__orig_val__48429,_STAR_shared_STAR__orig_val__48430,_STAR_instrument_STAR__orig_val__48431,_STAR_parent_STAR__orig_val__48432,_STAR_reconciler_STAR__temp_val__48433,_STAR_depth_STAR__temp_val__48434,_STAR_shared_STAR__temp_val__48435,_STAR_instrument_STAR__temp_val__48436,_STAR_parent_STAR__temp_val__48437,this$,this__43449__auto__,x48427_49412))
;
return iter__4523__auto__(cljs.core.sort.cljs$core$IFn$_invoke$arity$1(attr_mutation_output_in));
})();
return (com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2(G__48440,G__48441) : com.wsscode.pathom.viz.ui.kit.panel.call(null,G__48440,G__48441));
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__48432;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__48431;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__48430;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__48429;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__48428;
}});})(x48427_49412))
;


com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationOutputIn.prototype.constructor = com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationOutputIn;

com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationOutputIn.prototype.constructor.displayName = "com.wsscode.pathom.viz.index-explorer/AttributeInfoMutationOutputIn";

com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationOutputIn.prototype.fulcro$isComponent = true;

var x48450_49414 = com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationOutputIn;
x48450_49414.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x48450_49414.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x48450_49414){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x48450_49414))
;

x48450_49414.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x48450_49414.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x48450_49414){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-mutation-output-in","com.wsscode.pathom.connect/attr-mutation-output-in",1122448739)], null);
});})(x48450_49414))
;


var x48451_49415 = com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationOutputIn.prototype;
x48451_49415.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x48451_49415.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x48451_49415){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x48451_49415))
;

x48451_49415.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x48451_49415.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x48451_49415){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-mutation-output-in","com.wsscode.pathom.connect/attr-mutation-output-in",1122448739)], null);
});})(x48451_49415))
;


com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationOutputIn.cljs$lang$type = true;

com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationOutputIn.cljs$lang$ctorStr = "com.wsscode.pathom.viz.index-explorer/AttributeInfoMutationOutputIn";

com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationOutputIn.cljs$lang$ctorPrWriter = (function (this__44534__auto__,writer__44535__auto__,opt__44536__auto__){
return cljs.core._write(writer__44535__auto__,"com.wsscode.pathom.viz.index-explorer/AttributeInfoMutationOutputIn");
});
com.wsscode.pathom.viz.index_explorer.attribute_info_mutation_output_in = fulcro.client.primitives.computed_factory.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationOutputIn);
if((typeof com !== 'undefined') && (typeof com.wsscode !== 'undefined') && (typeof com.wsscode.pathom !== 'undefined') && (typeof com.wsscode.pathom.viz !== 'undefined') && (typeof com.wsscode.pathom.viz.index_explorer !== 'undefined') && (typeof com.wsscode.pathom.viz.index_explorer.ExamplesPanel !== 'undefined')){
} else {
/**
 * @constructor
 * @nocollapse
 */
com.wsscode.pathom.viz.index_explorer.ExamplesPanel = (function com$wsscode$pathom$viz$index_explorer$ExamplesPanel(){
var this__44531__auto__ = this;
React.Component.apply(this__44531__auto__,arguments);

if((!((this__44531__auto__.initLocalState == null)))){
this__44531__auto__.state = this__44531__auto__.initLocalState();
} else {
this__44531__auto__.state = ({});
}

return this__44531__auto__;
});

var G__48454_49416 = com.wsscode.pathom.viz.index_explorer.ExamplesPanel.prototype;
var G__48455_49417 = React.Component.prototype;
var G__48456_49418 = fulcro.client.primitives.default_component_prototype;
goog.object.extend(G__48454_49416,G__48455_49417,G__48456_49418);
}

fulcro.client.primitives._register_component_BANG_(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","ExamplesPanel","com.wsscode.pathom.viz.index-explorer/ExamplesPanel",846657103),com.wsscode.pathom.viz.index_explorer.ExamplesPanel);

var x48457_49419 = com.wsscode.pathom.viz.index_explorer.ExamplesPanel.prototype;
x48457_49419.render = ((function (x48457_49419){
return (function (){
var this__43449__auto__ = this;
var this$ = this__43449__auto__;
var _STAR_reconciler_STAR__orig_val__48458 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__48459 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__48460 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__48461 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__48462 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__48463 = fulcro.client.primitives.get_reconciler(this__43449__auto__);
var _STAR_depth_STAR__temp_val__48464 = (fulcro.client.primitives.depth(this__43449__auto__) + (1));
var _STAR_shared_STAR__temp_val__48465 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__43449__auto__);
var _STAR_instrument_STAR__temp_val__48466 = fulcro.client.primitives.instrument(this__43449__auto__);
var _STAR_parent_STAR__temp_val__48467 = this__43449__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__48463;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__48464;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__48465;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__48466;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__48467;

try{var map__48468 = fulcro.client.primitives.props(this$);
var map__48468__$1 = (((((!((map__48468 == null))))?(((((map__48468.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48468.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48468):map__48468);
var attribute = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48468__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075));
var G__48470 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","panel-title","com.wsscode.pathom.viz.ui.kit/panel-title",1529445284),(function (){var G__48472 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"classes","classes",2037804510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".center",".center",-1815728518)], null)], null);
var G__48473 = fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Examples"], 0));
var G__48474 = fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.wsscode.pathom.viz.ui.kit.gc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".flex",".flex",-73425686)], 0))], 0));
var G__48475 = (function (){var G__48476 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (G__48472,G__48473,G__48474,map__48468,map__48468__$1,attribute,_STAR_reconciler_STAR__orig_val__48458,_STAR_depth_STAR__orig_val__48459,_STAR_shared_STAR__orig_val__48460,_STAR_instrument_STAR__orig_val__48461,_STAR_parent_STAR__orig_val__48462,_STAR_reconciler_STAR__temp_val__48463,_STAR_depth_STAR__temp_val__48464,_STAR_shared_STAR__temp_val__48465,_STAR_instrument_STAR__temp_val__48466,_STAR_parent_STAR__temp_val__48467,this$,this__43449__auto__,x48457_49419){
return (function (){
return fulcro.client.primitives.set_state_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"seed","seed",68613327),cljs.core.rand.cljs$core$IFn$_invoke$arity$0()], null));
});})(G__48472,G__48473,G__48474,map__48468,map__48468__$1,attribute,_STAR_reconciler_STAR__orig_val__48458,_STAR_depth_STAR__orig_val__48459,_STAR_shared_STAR__orig_val__48460,_STAR_instrument_STAR__orig_val__48461,_STAR_parent_STAR__orig_val__48462,_STAR_reconciler_STAR__temp_val__48463,_STAR_depth_STAR__temp_val__48464,_STAR_shared_STAR__temp_val__48465,_STAR_instrument_STAR__temp_val__48466,_STAR_parent_STAR__temp_val__48467,this$,this__43449__auto__,x48457_49419))
], null);
var G__48477 = fulcro.client.localized_dom.i.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"classes","classes",2037804510),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["fa","fa-sync-alt"], null)], null)], 0));
return (com.wsscode.pathom.viz.ui.kit.button.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.button.cljs$core$IFn$_invoke$arity$2(G__48476,G__48477) : com.wsscode.pathom.viz.ui.kit.button.call(null,G__48476,G__48477));
})();
return (com.wsscode.pathom.viz.ui.kit.row.cljs$core$IFn$_invoke$arity$4 ? com.wsscode.pathom.viz.ui.kit.row.cljs$core$IFn$_invoke$arity$4(G__48472,G__48473,G__48474,G__48475) : com.wsscode.pathom.viz.ui.kit.row.call(null,G__48472,G__48473,G__48474,G__48475));
})()], null);
var G__48471 = fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".examples",".examples",-775726891),(function (){try{var samples = cljs.core.vec(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(clojure.test.check.generators.sample.cljs$core$IFn$_invoke$arity$1(cljs.spec.alpha.gen.cljs$core$IFn$_invoke$arity$1(attribute))));
var samples__$1 = (function (){try{return cljs.core.sort.cljs$core$IFn$_invoke$arity$1(samples);
}catch (e48479){var _ = e48479;
return samples;
}})();
var iter__4523__auto__ = ((function (samples,samples__$1,G__48470,map__48468,map__48468__$1,attribute,_STAR_reconciler_STAR__orig_val__48458,_STAR_depth_STAR__orig_val__48459,_STAR_shared_STAR__orig_val__48460,_STAR_instrument_STAR__orig_val__48461,_STAR_parent_STAR__orig_val__48462,_STAR_reconciler_STAR__temp_val__48463,_STAR_depth_STAR__temp_val__48464,_STAR_shared_STAR__temp_val__48465,_STAR_instrument_STAR__temp_val__48466,_STAR_parent_STAR__temp_val__48467,this$,this__43449__auto__,x48457_49419){
return (function com$wsscode$pathom$viz$index_explorer$iter__48480(s__48481){
return (new cljs.core.LazySeq(null,((function (samples,samples__$1,G__48470,map__48468,map__48468__$1,attribute,_STAR_reconciler_STAR__orig_val__48458,_STAR_depth_STAR__orig_val__48459,_STAR_shared_STAR__orig_val__48460,_STAR_instrument_STAR__orig_val__48461,_STAR_parent_STAR__orig_val__48462,_STAR_reconciler_STAR__temp_val__48463,_STAR_depth_STAR__temp_val__48464,_STAR_shared_STAR__temp_val__48465,_STAR_instrument_STAR__temp_val__48466,_STAR_parent_STAR__temp_val__48467,this$,this__43449__auto__,x48457_49419){
return (function (){
var s__48481__$1 = s__48481;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__48481__$1);
if(temp__5720__auto__){
var s__48481__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__48481__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__48481__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__48483 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__48482 = (0);
while(true){
if((i__48482 < size__4522__auto__)){
var vec__48484 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__48482);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48484,(0),null);
var example = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48484,(1),null);
cljs.core.chunk_append(b__48483,fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["example-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join('')], null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([example], 0))], 0)));

var G__49420 = (i__48482 + (1));
i__48482 = G__49420;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__48483),com$wsscode$pathom$viz$index_explorer$iter__48480(cljs.core.chunk_rest(s__48481__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__48483),null);
}
} else {
var vec__48487 = cljs.core.first(s__48481__$2);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48487,(0),null);
var example = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48487,(1),null);
return cljs.core.cons(fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["example-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join('')], null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([example], 0))], 0)),com$wsscode$pathom$viz$index_explorer$iter__48480(cljs.core.rest(s__48481__$2)));
}
} else {
return null;
}
break;
}
});})(samples,samples__$1,G__48470,map__48468,map__48468__$1,attribute,_STAR_reconciler_STAR__orig_val__48458,_STAR_depth_STAR__orig_val__48459,_STAR_shared_STAR__orig_val__48460,_STAR_instrument_STAR__orig_val__48461,_STAR_parent_STAR__orig_val__48462,_STAR_reconciler_STAR__temp_val__48463,_STAR_depth_STAR__temp_val__48464,_STAR_shared_STAR__temp_val__48465,_STAR_instrument_STAR__temp_val__48466,_STAR_parent_STAR__temp_val__48467,this$,this__43449__auto__,x48457_49419))
,null,null));
});})(samples,samples__$1,G__48470,map__48468,map__48468__$1,attribute,_STAR_reconciler_STAR__orig_val__48458,_STAR_depth_STAR__orig_val__48459,_STAR_shared_STAR__orig_val__48460,_STAR_instrument_STAR__orig_val__48461,_STAR_parent_STAR__orig_val__48462,_STAR_reconciler_STAR__temp_val__48463,_STAR_depth_STAR__temp_val__48464,_STAR_shared_STAR__temp_val__48465,_STAR_instrument_STAR__temp_val__48466,_STAR_parent_STAR__temp_val__48467,this$,this__43449__auto__,x48457_49419))
;
return iter__4523__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.range.cljs$core$IFn$_invoke$arity$0(),samples__$1));
}catch (e48478){var ex = e48478;
return fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error generating samples:",fulcro.client.localized_dom.pre.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".error",".error",115475668),cljs.core.ex_message(ex)], 0))], 0));
}})()], 0));
return (com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2(G__48470,G__48471) : com.wsscode.pathom.viz.ui.kit.panel.call(null,G__48470,G__48471));
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__48462;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__48461;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__48460;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__48459;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__48458;
}});})(x48457_49419))
;


com.wsscode.pathom.viz.index_explorer.ExamplesPanel.prototype.constructor = com.wsscode.pathom.viz.index_explorer.ExamplesPanel;

com.wsscode.pathom.viz.index_explorer.ExamplesPanel.prototype.constructor.displayName = "com.wsscode.pathom.viz.index-explorer/ExamplesPanel";

com.wsscode.pathom.viz.index_explorer.ExamplesPanel.prototype.fulcro$isComponent = true;

var x48490_49421 = com.wsscode.pathom.viz.index_explorer.ExamplesPanel;
x48490_49421.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x48490_49421.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x48490_49421){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".examples",".examples",-775726891),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-family","font-family",-667419874),com.wsscode.pathom.viz.ui.kit.font_code], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".error",".error",115475668),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#f44336"], null)], null)], null);
});})(x48490_49421))
;

x48490_49421.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x48490_49421){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x48490_49421))
;


var x48491_49422 = com.wsscode.pathom.viz.index_explorer.ExamplesPanel.prototype;
x48491_49422.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x48491_49422.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x48491_49422){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".examples",".examples",-775726891),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-family","font-family",-667419874),com.wsscode.pathom.viz.ui.kit.font_code], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".error",".error",115475668),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#f44336"], null)], null)], null);
});})(x48491_49422))
;

x48491_49422.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x48491_49422){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x48491_49422))
;


com.wsscode.pathom.viz.index_explorer.ExamplesPanel.cljs$lang$type = true;

com.wsscode.pathom.viz.index_explorer.ExamplesPanel.cljs$lang$ctorStr = "com.wsscode.pathom.viz.index-explorer/ExamplesPanel";

com.wsscode.pathom.viz.index_explorer.ExamplesPanel.cljs$lang$ctorPrWriter = (function (this__44534__auto__,writer__44535__auto__,opt__44536__auto__){
return cljs.core._write(writer__44535__auto__,"com.wsscode.pathom.viz.index-explorer/ExamplesPanel");
});
com.wsscode.pathom.viz.index_explorer.examples_panel = fulcro.client.primitives.computed_factory.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.ExamplesPanel);
if((typeof com !== 'undefined') && (typeof com.wsscode !== 'undefined') && (typeof com.wsscode.pathom !== 'undefined') && (typeof com.wsscode.pathom.viz !== 'undefined') && (typeof com.wsscode.pathom.viz.index_explorer !== 'undefined') && (typeof com.wsscode.pathom.viz.index_explorer.AttributeGraphPanel !== 'undefined')){
} else {
/**
 * @constructor
 * @nocollapse
 */
com.wsscode.pathom.viz.index_explorer.AttributeGraphPanel = (function com$wsscode$pathom$viz$index_explorer$AttributeGraphPanel(){
var this__44531__auto__ = this;
React.Component.apply(this__44531__auto__,arguments);

if((!((this__44531__auto__.initLocalState == null)))){
this__44531__auto__.state = this__44531__auto__.initLocalState();
} else {
this__44531__auto__.state = ({});
}

return this__44531__auto__;
});

var G__48496_49423 = com.wsscode.pathom.viz.index_explorer.AttributeGraphPanel.prototype;
var G__48497_49424 = React.Component.prototype;
var G__48498_49425 = fulcro.client.primitives.default_component_prototype;
goog.object.extend(G__48496_49423,G__48497_49424,G__48498_49425);
}

fulcro.client.primitives._register_component_BANG_(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","AttributeGraphPanel","com.wsscode.pathom.viz.index-explorer/AttributeGraphPanel",-658371264),com.wsscode.pathom.viz.index_explorer.AttributeGraphPanel);

var x48499_49426 = com.wsscode.pathom.viz.index_explorer.AttributeGraphPanel.prototype;
x48499_49426.render = ((function (x48499_49426){
return (function (){
var this__43449__auto__ = this;
var this$ = this__43449__auto__;
var _STAR_reconciler_STAR__orig_val__48500 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__48501 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__48502 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__48503 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__48504 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__48505 = fulcro.client.primitives.get_reconciler(this__43449__auto__);
var _STAR_depth_STAR__temp_val__48506 = (fulcro.client.primitives.depth(this__43449__auto__) + (1));
var _STAR_shared_STAR__temp_val__48507 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__43449__auto__);
var _STAR_instrument_STAR__temp_val__48508 = fulcro.client.primitives.instrument(this__43449__auto__);
var _STAR_parent_STAR__temp_val__48509 = this__43449__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__48505;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__48506;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__48507;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__48508;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__48509;

try{var map__48510 = fulcro.client.primitives.props(this$);
var map__48510__$1 = (((((!((map__48510 == null))))?(((((map__48510.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48510.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48510):map__48510);
var attribute = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48510__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075));
var attr_depth = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48510__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-depth","com.wsscode.pathom.viz.index-explorer/attr-depth",-1327711242));
var direct_reaches_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48510__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","direct-reaches?","com.wsscode.pathom.viz.index-explorer/direct-reaches?",-1036048994));
var nested_reaches_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48510__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","nested-reaches?","com.wsscode.pathom.viz.index-explorer/nested-reaches?",-22429448));
var direct_provides_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48510__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","direct-provides?","com.wsscode.pathom.viz.index-explorer/direct-provides?",223892052));
var nested_provides_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48510__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","nested-provides?","com.wsscode.pathom.viz.index-explorer/nested-provides?",-1296758362));
var interconnections_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48510__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","interconnections?","com.wsscode.pathom.viz.index-explorer/interconnections?",-1723481228));
var map__48511 = fulcro.client.primitives.get_computed.cljs$core$IFn$_invoke$arity$1(this$);
var map__48511__$1 = (((((!((map__48511 == null))))?(((((map__48511.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48511.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48511):map__48511);
var on_select_attribute = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48511__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","on-select-attribute","com.wsscode.pathom.viz.index-explorer/on-select-attribute",2006419034));
var attributes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48511__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attributes","com.wsscode.pathom.viz.index-explorer/attributes",-67264281));
var graph_comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48511__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","graph-comm","com.wsscode.pathom.viz.index-explorer/graph-comm",-735750087));
var G__48514 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","panel-title","com.wsscode.pathom.viz.ui.kit/panel-title",1529445284),(function (){var G__48516 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"classes","classes",2037804510),com.wsscode.pathom.viz.ui.kit.ccss.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".graph-options",".graph-options",1009499042)], 0))], null);
var G__48517 = (function (){var G__48522 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"classes","classes",2037804510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".center",".center",-1815728518)], null)], null);
var G__48523 = fulcro.client.localized_dom.label.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Depth"], 0));
var G__48524 = (function (){var G__48525 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"min","min",444991522),(1),new cljs.core.Keyword(null,"value","value",305978217),attr_depth,new cljs.core.Keyword(null,"onChange","onChange",-312891301),((function (G__48522,G__48523,G__48516,map__48510,map__48510__$1,attribute,attr_depth,direct_reaches_QMARK_,nested_reaches_QMARK_,direct_provides_QMARK_,nested_provides_QMARK_,interconnections_QMARK_,map__48511,map__48511__$1,on_select_attribute,attributes,graph_comm,_STAR_reconciler_STAR__orig_val__48500,_STAR_depth_STAR__orig_val__48501,_STAR_shared_STAR__orig_val__48502,_STAR_instrument_STAR__orig_val__48503,_STAR_parent_STAR__orig_val__48504,_STAR_reconciler_STAR__temp_val__48505,_STAR_depth_STAR__temp_val__48506,_STAR_shared_STAR__temp_val__48507,_STAR_instrument_STAR__temp_val__48508,_STAR_parent_STAR__temp_val__48509,this$,this__43449__auto__,x48499_49426){
return (function (p1__48493_SHARP_,p2__48492_SHARP_){
return fulcro.client.mutations.set_value_BANG_(this$,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-depth","com.wsscode.pathom.viz.index-explorer/attr-depth",-1327711242),p2__48492_SHARP_);
});})(G__48522,G__48523,G__48516,map__48510,map__48510__$1,attribute,attr_depth,direct_reaches_QMARK_,nested_reaches_QMARK_,direct_provides_QMARK_,nested_provides_QMARK_,interconnections_QMARK_,map__48511,map__48511__$1,on_select_attribute,attributes,graph_comm,_STAR_reconciler_STAR__orig_val__48500,_STAR_depth_STAR__orig_val__48501,_STAR_shared_STAR__orig_val__48502,_STAR_instrument_STAR__orig_val__48503,_STAR_parent_STAR__orig_val__48504,_STAR_reconciler_STAR__temp_val__48505,_STAR_depth_STAR__temp_val__48506,_STAR_shared_STAR__temp_val__48507,_STAR_instrument_STAR__temp_val__48508,_STAR_parent_STAR__temp_val__48509,this$,this__43449__auto__,x48499_49426))
], null);
return (com.wsscode.pathom.viz.ui.kit.number_input.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom.viz.ui.kit.number_input.cljs$core$IFn$_invoke$arity$1(G__48525) : com.wsscode.pathom.viz.ui.kit.number_input.call(null,G__48525));
})();
return (com.wsscode.pathom.viz.ui.kit.row.cljs$core$IFn$_invoke$arity$3 ? com.wsscode.pathom.viz.ui.kit.row.cljs$core$IFn$_invoke$arity$3(G__48522,G__48523,G__48524) : com.wsscode.pathom.viz.ui.kit.row.call(null,G__48522,G__48523,G__48524));
})();
var G__48518 = (function (){var G__48526 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","active?","com.wsscode.pathom.viz.ui.kit/active?",-2040404697),direct_reaches_QMARK_,new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (G__48516,G__48517,map__48510,map__48510__$1,attribute,attr_depth,direct_reaches_QMARK_,nested_reaches_QMARK_,direct_provides_QMARK_,nested_provides_QMARK_,interconnections_QMARK_,map__48511,map__48511__$1,on_select_attribute,attributes,graph_comm,_STAR_reconciler_STAR__orig_val__48500,_STAR_depth_STAR__orig_val__48501,_STAR_shared_STAR__orig_val__48502,_STAR_instrument_STAR__orig_val__48503,_STAR_parent_STAR__orig_val__48504,_STAR_reconciler_STAR__temp_val__48505,_STAR_depth_STAR__temp_val__48506,_STAR_shared_STAR__temp_val__48507,_STAR_instrument_STAR__temp_val__48508,_STAR_parent_STAR__temp_val__48509,this$,this__43449__auto__,x48499_49426){
return (function (){
return fulcro.client.mutations.set_value_BANG_(this$,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","direct-reaches?","com.wsscode.pathom.viz.index-explorer/direct-reaches?",-1036048994),cljs.core.not(direct_reaches_QMARK_));
});})(G__48516,G__48517,map__48510,map__48510__$1,attribute,attr_depth,direct_reaches_QMARK_,nested_reaches_QMARK_,direct_provides_QMARK_,nested_provides_QMARK_,interconnections_QMARK_,map__48511,map__48511__$1,on_select_attribute,attributes,graph_comm,_STAR_reconciler_STAR__orig_val__48500,_STAR_depth_STAR__orig_val__48501,_STAR_shared_STAR__orig_val__48502,_STAR_instrument_STAR__orig_val__48503,_STAR_parent_STAR__orig_val__48504,_STAR_reconciler_STAR__temp_val__48505,_STAR_depth_STAR__temp_val__48506,_STAR_shared_STAR__temp_val__48507,_STAR_instrument_STAR__temp_val__48508,_STAR_parent_STAR__temp_val__48509,this$,this__43449__auto__,x48499_49426))
], null);
var G__48527 = "Direct inputs";
return (com.wsscode.pathom.viz.ui.kit.toggle_action.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.toggle_action.cljs$core$IFn$_invoke$arity$2(G__48526,G__48527) : com.wsscode.pathom.viz.ui.kit.toggle_action.call(null,G__48526,G__48527));
})();
var G__48519 = (function (){var G__48528 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","active?","com.wsscode.pathom.viz.ui.kit/active?",-2040404697),nested_reaches_QMARK_,new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (G__48516,G__48517,G__48518,map__48510,map__48510__$1,attribute,attr_depth,direct_reaches_QMARK_,nested_reaches_QMARK_,direct_provides_QMARK_,nested_provides_QMARK_,interconnections_QMARK_,map__48511,map__48511__$1,on_select_attribute,attributes,graph_comm,_STAR_reconciler_STAR__orig_val__48500,_STAR_depth_STAR__orig_val__48501,_STAR_shared_STAR__orig_val__48502,_STAR_instrument_STAR__orig_val__48503,_STAR_parent_STAR__orig_val__48504,_STAR_reconciler_STAR__temp_val__48505,_STAR_depth_STAR__temp_val__48506,_STAR_shared_STAR__temp_val__48507,_STAR_instrument_STAR__temp_val__48508,_STAR_parent_STAR__temp_val__48509,this$,this__43449__auto__,x48499_49426){
return (function (){
return fulcro.client.mutations.set_value_BANG_(this$,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","nested-reaches?","com.wsscode.pathom.viz.index-explorer/nested-reaches?",-22429448),cljs.core.not(nested_reaches_QMARK_));
});})(G__48516,G__48517,G__48518,map__48510,map__48510__$1,attribute,attr_depth,direct_reaches_QMARK_,nested_reaches_QMARK_,direct_provides_QMARK_,nested_provides_QMARK_,interconnections_QMARK_,map__48511,map__48511__$1,on_select_attribute,attributes,graph_comm,_STAR_reconciler_STAR__orig_val__48500,_STAR_depth_STAR__orig_val__48501,_STAR_shared_STAR__orig_val__48502,_STAR_instrument_STAR__orig_val__48503,_STAR_parent_STAR__orig_val__48504,_STAR_reconciler_STAR__temp_val__48505,_STAR_depth_STAR__temp_val__48506,_STAR_shared_STAR__temp_val__48507,_STAR_instrument_STAR__temp_val__48508,_STAR_parent_STAR__temp_val__48509,this$,this__43449__auto__,x48499_49426))
], null);
var G__48529 = "Nested inputs";
return (com.wsscode.pathom.viz.ui.kit.toggle_action.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.toggle_action.cljs$core$IFn$_invoke$arity$2(G__48528,G__48529) : com.wsscode.pathom.viz.ui.kit.toggle_action.call(null,G__48528,G__48529));
})();
var G__48520 = (function (){var G__48530 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","active?","com.wsscode.pathom.viz.ui.kit/active?",-2040404697),direct_provides_QMARK_,new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (G__48516,G__48517,G__48518,G__48519,map__48510,map__48510__$1,attribute,attr_depth,direct_reaches_QMARK_,nested_reaches_QMARK_,direct_provides_QMARK_,nested_provides_QMARK_,interconnections_QMARK_,map__48511,map__48511__$1,on_select_attribute,attributes,graph_comm,_STAR_reconciler_STAR__orig_val__48500,_STAR_depth_STAR__orig_val__48501,_STAR_shared_STAR__orig_val__48502,_STAR_instrument_STAR__orig_val__48503,_STAR_parent_STAR__orig_val__48504,_STAR_reconciler_STAR__temp_val__48505,_STAR_depth_STAR__temp_val__48506,_STAR_shared_STAR__temp_val__48507,_STAR_instrument_STAR__temp_val__48508,_STAR_parent_STAR__temp_val__48509,this$,this__43449__auto__,x48499_49426){
return (function (){
return fulcro.client.mutations.set_value_BANG_(this$,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","direct-provides?","com.wsscode.pathom.viz.index-explorer/direct-provides?",223892052),cljs.core.not(direct_provides_QMARK_));
});})(G__48516,G__48517,G__48518,G__48519,map__48510,map__48510__$1,attribute,attr_depth,direct_reaches_QMARK_,nested_reaches_QMARK_,direct_provides_QMARK_,nested_provides_QMARK_,interconnections_QMARK_,map__48511,map__48511__$1,on_select_attribute,attributes,graph_comm,_STAR_reconciler_STAR__orig_val__48500,_STAR_depth_STAR__orig_val__48501,_STAR_shared_STAR__orig_val__48502,_STAR_instrument_STAR__orig_val__48503,_STAR_parent_STAR__orig_val__48504,_STAR_reconciler_STAR__temp_val__48505,_STAR_depth_STAR__temp_val__48506,_STAR_shared_STAR__temp_val__48507,_STAR_instrument_STAR__temp_val__48508,_STAR_parent_STAR__temp_val__48509,this$,this__43449__auto__,x48499_49426))
], null);
var G__48531 = "Direct outputs";
return (com.wsscode.pathom.viz.ui.kit.toggle_action.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.toggle_action.cljs$core$IFn$_invoke$arity$2(G__48530,G__48531) : com.wsscode.pathom.viz.ui.kit.toggle_action.call(null,G__48530,G__48531));
})();
var G__48521 = (function (){var G__48532 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","active?","com.wsscode.pathom.viz.ui.kit/active?",-2040404697),nested_provides_QMARK_,new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (G__48516,G__48517,G__48518,G__48519,G__48520,map__48510,map__48510__$1,attribute,attr_depth,direct_reaches_QMARK_,nested_reaches_QMARK_,direct_provides_QMARK_,nested_provides_QMARK_,interconnections_QMARK_,map__48511,map__48511__$1,on_select_attribute,attributes,graph_comm,_STAR_reconciler_STAR__orig_val__48500,_STAR_depth_STAR__orig_val__48501,_STAR_shared_STAR__orig_val__48502,_STAR_instrument_STAR__orig_val__48503,_STAR_parent_STAR__orig_val__48504,_STAR_reconciler_STAR__temp_val__48505,_STAR_depth_STAR__temp_val__48506,_STAR_shared_STAR__temp_val__48507,_STAR_instrument_STAR__temp_val__48508,_STAR_parent_STAR__temp_val__48509,this$,this__43449__auto__,x48499_49426){
return (function (){
return fulcro.client.mutations.set_value_BANG_(this$,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","nested-provides?","com.wsscode.pathom.viz.index-explorer/nested-provides?",-1296758362),cljs.core.not(nested_provides_QMARK_));
});})(G__48516,G__48517,G__48518,G__48519,G__48520,map__48510,map__48510__$1,attribute,attr_depth,direct_reaches_QMARK_,nested_reaches_QMARK_,direct_provides_QMARK_,nested_provides_QMARK_,interconnections_QMARK_,map__48511,map__48511__$1,on_select_attribute,attributes,graph_comm,_STAR_reconciler_STAR__orig_val__48500,_STAR_depth_STAR__orig_val__48501,_STAR_shared_STAR__orig_val__48502,_STAR_instrument_STAR__orig_val__48503,_STAR_parent_STAR__orig_val__48504,_STAR_reconciler_STAR__temp_val__48505,_STAR_depth_STAR__temp_val__48506,_STAR_shared_STAR__temp_val__48507,_STAR_instrument_STAR__temp_val__48508,_STAR_parent_STAR__temp_val__48509,this$,this__43449__auto__,x48499_49426))
], null);
var G__48533 = "Nested outputs";
return (com.wsscode.pathom.viz.ui.kit.toggle_action.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.toggle_action.cljs$core$IFn$_invoke$arity$2(G__48532,G__48533) : com.wsscode.pathom.viz.ui.kit.toggle_action.call(null,G__48532,G__48533));
})();
return (com.wsscode.pathom.viz.ui.kit.row.cljs$core$IFn$_invoke$arity$6 ? com.wsscode.pathom.viz.ui.kit.row.cljs$core$IFn$_invoke$arity$6(G__48516,G__48517,G__48518,G__48519,G__48520,G__48521) : com.wsscode.pathom.viz.ui.kit.row.call(null,G__48516,G__48517,G__48518,G__48519,G__48520,G__48521));
})(),new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","scrollbars?","com.wsscode.pathom.viz.ui.kit/scrollbars?",1389911780),false], null);
var G__48515 = fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".graph",".graph",-327673667),(function (){var shared_options = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","direct-reaches?","com.wsscode.pathom.viz.index-explorer/direct-reaches?",-1036048994),direct_reaches_QMARK_,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","nested-reaches?","com.wsscode.pathom.viz.index-explorer/nested-reaches?",-22429448),nested_reaches_QMARK_,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","direct-provides?","com.wsscode.pathom.viz.index-explorer/direct-provides?",223892052),direct_provides_QMARK_,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","nested-provides?","com.wsscode.pathom.viz.index-explorer/nested-provides?",-1296758362),nested_provides_QMARK_,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","interconnections?","com.wsscode.pathom.viz.index-explorer/interconnections?",-1723481228),interconnections_QMARK_], null);
var G__48534 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attributes","com.wsscode.pathom.viz.index-explorer/attributes",-67264281),com.wsscode.pathom.viz.index_explorer.attribute_network(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-depth","com.wsscode.pathom.viz.index-explorer/attr-depth",-1327711242),attr_depth,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-index","com.wsscode.pathom.viz.index-explorer/attr-index",684180200),com.wsscode.pathom.viz.helpers.index_by(new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),attributes),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attributes","com.wsscode.pathom.viz.index-explorer/attributes",-67264281),attributes], null),shared_options], 0)),attribute),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","on-show-details","com.wsscode.pathom.viz.index-explorer/on-show-details",-322180105),on_select_attribute,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","on-click-edge","com.wsscode.pathom.viz.index-explorer/on-click-edge",810811642),fulcro.client.primitives.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"select-resolver","select-resolver",43705318)),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","graph-comm","com.wsscode.pathom.viz.index-explorer/graph-comm",-735750087),graph_comm], null),shared_options], 0));
return (com.wsscode.pathom.viz.index_explorer.attribute_graph.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom.viz.index_explorer.attribute_graph.cljs$core$IFn$_invoke$arity$1(G__48534) : com.wsscode.pathom.viz.index_explorer.attribute_graph.call(null,G__48534));
})()], 0));
return (com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2(G__48514,G__48515) : com.wsscode.pathom.viz.ui.kit.panel.call(null,G__48514,G__48515));
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__48504;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__48503;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__48502;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__48501;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__48500;
}});})(x48499_49426))
;


com.wsscode.pathom.viz.index_explorer.AttributeGraphPanel.prototype.constructor = com.wsscode.pathom.viz.index_explorer.AttributeGraphPanel;

com.wsscode.pathom.viz.index_explorer.AttributeGraphPanel.prototype.constructor.displayName = "com.wsscode.pathom.viz.index-explorer/AttributeGraphPanel";

com.wsscode.pathom.viz.index_explorer.AttributeGraphPanel.prototype.fulcro$isComponent = true;

var x48535_49427 = com.wsscode.pathom.viz.index_explorer.AttributeGraphPanel;
x48535_49427.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x48535_49427.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x48535_49427){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".graph",".graph",-327673667),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"height","height",1025178622),"400px",new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"stretch",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column"], null)], null)], null);
});})(x48535_49427))
;

x48535_49427.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x48535_49427){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x48535_49427))
;

x48535_49427.fulcro$client$primitives$IPreMerge$ = cljs.core.PROTOCOL_SENTINEL;

x48535_49427.fulcro$client$primitives$IPreMerge$pre_merge_STAR_$arity$2 = ((function (x48535_49427){
return (function (this$,p__48536){
var map__48537 = p__48536;
var map__48537__$1 = (((((!((map__48537 == null))))?(((((map__48537.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48537.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48537):map__48537);
var current_normalized = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48537__$1,new cljs.core.Keyword(null,"current-normalized","current-normalized",851723724));
var data_tree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48537__$1,new cljs.core.Keyword(null,"data-tree","data-tree",1311167582));
var this$__$1 = this;
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-depth","com.wsscode.pathom.viz.index-explorer/attr-depth",-1327711242),(1),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","direct-reaches?","com.wsscode.pathom.viz.index-explorer/direct-reaches?",-1036048994),true,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","nested-reaches?","com.wsscode.pathom.viz.index-explorer/nested-reaches?",-22429448),false,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","direct-provides?","com.wsscode.pathom.viz.index-explorer/direct-provides?",223892052),true,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","nested-provides?","com.wsscode.pathom.viz.index-explorer/nested-provides?",-1296758362),false,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","interconnections?","com.wsscode.pathom.viz.index-explorer/interconnections?",-1723481228),true], null),current_normalized,data_tree], 0));
});})(x48535_49427))
;

x48535_49427.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x48535_49427.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x48535_49427){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x48535_49427))
;

x48535_49427.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x48535_49427.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x48535_49427){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-depth","com.wsscode.pathom.viz.index-explorer/attr-depth",-1327711242),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","direct-reaches?","com.wsscode.pathom.viz.index-explorer/direct-reaches?",-1036048994),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","nested-reaches?","com.wsscode.pathom.viz.index-explorer/nested-reaches?",-22429448),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","direct-provides?","com.wsscode.pathom.viz.index-explorer/direct-provides?",223892052),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","nested-provides?","com.wsscode.pathom.viz.index-explorer/nested-provides?",-1296758362),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","interconnections?","com.wsscode.pathom.viz.index-explorer/interconnections?",-1723481228),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","show-graph?","com.wsscode.pathom.viz.index-explorer/show-graph?",-1999932552),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via","com.wsscode.pathom.connect/attr-reach-via",-483841559),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-provides","com.wsscode.pathom.connect/attr-provides",-474523918)], null);
});})(x48535_49427))
;


var x48539_49428 = com.wsscode.pathom.viz.index_explorer.AttributeGraphPanel.prototype;
x48539_49428.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x48539_49428.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x48539_49428){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".graph",".graph",-327673667),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"height","height",1025178622),"400px",new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"stretch",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column"], null)], null)], null);
});})(x48539_49428))
;

x48539_49428.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x48539_49428){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x48539_49428))
;

x48539_49428.fulcro$client$primitives$IPreMerge$ = cljs.core.PROTOCOL_SENTINEL;

x48539_49428.fulcro$client$primitives$IPreMerge$pre_merge_STAR_$arity$2 = ((function (x48539_49428){
return (function (this$,p__48540){
var map__48541 = p__48540;
var map__48541__$1 = (((((!((map__48541 == null))))?(((((map__48541.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48541.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48541):map__48541);
var current_normalized = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48541__$1,new cljs.core.Keyword(null,"current-normalized","current-normalized",851723724));
var data_tree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48541__$1,new cljs.core.Keyword(null,"data-tree","data-tree",1311167582));
var this$__$1 = this;
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-depth","com.wsscode.pathom.viz.index-explorer/attr-depth",-1327711242),(1),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","direct-reaches?","com.wsscode.pathom.viz.index-explorer/direct-reaches?",-1036048994),true,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","nested-reaches?","com.wsscode.pathom.viz.index-explorer/nested-reaches?",-22429448),false,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","direct-provides?","com.wsscode.pathom.viz.index-explorer/direct-provides?",223892052),true,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","nested-provides?","com.wsscode.pathom.viz.index-explorer/nested-provides?",-1296758362),false,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","interconnections?","com.wsscode.pathom.viz.index-explorer/interconnections?",-1723481228),true], null),current_normalized,data_tree], 0));
});})(x48539_49428))
;

x48539_49428.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x48539_49428.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x48539_49428){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x48539_49428))
;

x48539_49428.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x48539_49428.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x48539_49428){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-depth","com.wsscode.pathom.viz.index-explorer/attr-depth",-1327711242),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","direct-reaches?","com.wsscode.pathom.viz.index-explorer/direct-reaches?",-1036048994),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","nested-reaches?","com.wsscode.pathom.viz.index-explorer/nested-reaches?",-22429448),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","direct-provides?","com.wsscode.pathom.viz.index-explorer/direct-provides?",223892052),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","nested-provides?","com.wsscode.pathom.viz.index-explorer/nested-provides?",-1296758362),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","interconnections?","com.wsscode.pathom.viz.index-explorer/interconnections?",-1723481228),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","show-graph?","com.wsscode.pathom.viz.index-explorer/show-graph?",-1999932552),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via","com.wsscode.pathom.connect/attr-reach-via",-483841559),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-provides","com.wsscode.pathom.connect/attr-provides",-474523918)], null);
});})(x48539_49428))
;


com.wsscode.pathom.viz.index_explorer.AttributeGraphPanel.cljs$lang$type = true;

com.wsscode.pathom.viz.index_explorer.AttributeGraphPanel.cljs$lang$ctorStr = "com.wsscode.pathom.viz.index-explorer/AttributeGraphPanel";

com.wsscode.pathom.viz.index_explorer.AttributeGraphPanel.cljs$lang$ctorPrWriter = (function (this__44534__auto__,writer__44535__auto__,opt__44536__auto__){
return cljs.core._write(writer__44535__auto__,"com.wsscode.pathom.viz.index-explorer/AttributeGraphPanel");
});
com.wsscode.pathom.viz.index_explorer.attribute_graph_panel = fulcro.client.primitives.computed_factory.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.AttributeGraphPanel);
if((typeof com !== 'undefined') && (typeof com.wsscode !== 'undefined') && (typeof com.wsscode.pathom !== 'undefined') && (typeof com.wsscode.pathom.viz !== 'undefined') && (typeof com.wsscode.pathom.viz.index_explorer !== 'undefined') && (typeof com.wsscode.pathom.viz.index_explorer.AttributeView !== 'undefined')){
} else {
/**
 * @constructor
 * @nocollapse
 */
com.wsscode.pathom.viz.index_explorer.AttributeView = (function com$wsscode$pathom$viz$index_explorer$AttributeView(){
var this__44531__auto__ = this;
React.Component.apply(this__44531__auto__,arguments);

if((!((this__44531__auto__.initLocalState == null)))){
this__44531__auto__.state = this__44531__auto__.initLocalState();
} else {
this__44531__auto__.state = ({});
}

return this__44531__auto__;
});

var G__48548_49429 = com.wsscode.pathom.viz.index_explorer.AttributeView.prototype;
var G__48549_49430 = React.Component.prototype;
var G__48550_49431 = fulcro.client.primitives.default_component_prototype;
goog.object.extend(G__48548_49429,G__48549_49430,G__48550_49431);
}

fulcro.client.primitives._register_component_BANG_(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","AttributeView","com.wsscode.pathom.viz.index-explorer/AttributeView",1769179789),com.wsscode.pathom.viz.index_explorer.AttributeView);

var x48551_49432 = com.wsscode.pathom.viz.index_explorer.AttributeView.prototype;
x48551_49432.render = ((function (x48551_49432){
return (function (){
var this__43449__auto__ = this;
var this$ = this__43449__auto__;
var _STAR_reconciler_STAR__orig_val__48552 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__48553 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__48554 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__48555 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__48556 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__48557 = fulcro.client.primitives.get_reconciler(this__43449__auto__);
var _STAR_depth_STAR__temp_val__48558 = (fulcro.client.primitives.depth(this__43449__auto__) + (1));
var _STAR_shared_STAR__temp_val__48559 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__43449__auto__);
var _STAR_instrument_STAR__temp_val__48560 = fulcro.client.primitives.instrument(this__43449__auto__);
var _STAR_parent_STAR__temp_val__48561 = this__43449__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__48557;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__48558;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__48559;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__48560;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__48561;

try{var map__48562 = fulcro.client.primitives.props(this$);
var map__48562__$1 = (((((!((map__48562 == null))))?(((((map__48562.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48562.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48562):map__48562);
var attr_mutation_param_in = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48562__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attr-mutation-param-in","com.wsscode.pathom.connect/attr-mutation-param-in",-1474382671));
var attr_reach_via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48562__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via","com.wsscode.pathom.connect/attr-reach-via",-483841559));
var attr_combinations = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48562__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attr-combinations","com.wsscode.pathom.connect/attr-combinations",-1163990806));
var attribute = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48562__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075));
var provides_tree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48562__$1,new cljs.core.Keyword("ui","provides-tree","ui/provides-tree",675380755));
var provides_tree_source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48562__$1,new cljs.core.Keyword("ui","provides-tree-source","ui/provides-tree-source",874544325));
var attr_input_in = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48562__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attr-input-in","com.wsscode.pathom.connect/attr-input-in",-2112912399));
var attr_provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48562__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attr-provides","com.wsscode.pathom.connect/attr-provides",-474523918));
var attr_mutation_output_in = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48562__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attr-mutation-output-in","com.wsscode.pathom.connect/attr-mutation-output-in",1122448739));
var show_graph_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48562__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","show-graph?","com.wsscode.pathom.viz.index-explorer/show-graph?",-1999932552));
var mutation_output_in = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48562__$1,new cljs.core.Keyword(">","mutation-output-in",">/mutation-output-in",463836271));
var attr_output_in = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48562__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attr-output-in","com.wsscode.pathom.connect/attr-output-in",-62045610));
var reach_via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48562__$1,new cljs.core.Keyword(">","reach-via",">/reach-via",725397135));
var graph_panel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48562__$1,new cljs.core.Keyword(">","graph-panel",">/graph-panel",-700694737));
var mutation_param_in = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48562__$1,new cljs.core.Keyword(">","mutation-param-in",">/mutation-param-in",-1050138308));
var computed = fulcro.client.primitives.get_computed.cljs$core$IFn$_invoke$arity$1(this$);
var computed__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(computed,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","graph-comm","com.wsscode.pathom.viz.index-explorer/graph-comm",-735750087),fulcro.client.primitives.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"graph-comm","graph-comm",-744729650)));
return fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".container",".container",-1441208944),fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".toolbar",".toolbar",968457325),fulcro.client.localized_dom.h1.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".title",".title",-416997657),com.wsscode.pathom.viz.ui.kit.gc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".flex",".flex",-73425686)], 0)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attribute], 0))], 0)),(function (){var G__48564 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","active?","com.wsscode.pathom.viz.ui.kit/active?",-2040404697),show_graph_QMARK_,new cljs.core.Keyword(null,"classes","classes",2037804510),com.wsscode.pathom.viz.ui.kit.ccss.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".show-graph",".show-graph",1780476669)], 0)),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (computed__$1,map__48562,map__48562__$1,attr_mutation_param_in,attr_reach_via,attr_combinations,attribute,provides_tree,provides_tree_source,attr_input_in,attr_provides,attr_mutation_output_in,show_graph_QMARK_,mutation_output_in,attr_output_in,reach_via,graph_panel,mutation_param_in,computed,_STAR_reconciler_STAR__orig_val__48552,_STAR_depth_STAR__orig_val__48553,_STAR_shared_STAR__orig_val__48554,_STAR_instrument_STAR__orig_val__48555,_STAR_parent_STAR__orig_val__48556,_STAR_reconciler_STAR__temp_val__48557,_STAR_depth_STAR__temp_val__48558,_STAR_shared_STAR__temp_val__48559,_STAR_instrument_STAR__temp_val__48560,_STAR_parent_STAR__temp_val__48561,this$,this__43449__auto__,x48551_49432){
return (function (){
return fulcro.client.mutations.set_value_BANG_(this$,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","show-graph?","com.wsscode.pathom.viz.index-explorer/show-graph?",-1999932552),cljs.core.not(show_graph_QMARK_));
});})(computed__$1,map__48562,map__48562__$1,attr_mutation_param_in,attr_reach_via,attr_combinations,attribute,provides_tree,provides_tree_source,attr_input_in,attr_provides,attr_mutation_output_in,show_graph_QMARK_,mutation_output_in,attr_output_in,reach_via,graph_panel,mutation_param_in,computed,_STAR_reconciler_STAR__orig_val__48552,_STAR_depth_STAR__orig_val__48553,_STAR_shared_STAR__orig_val__48554,_STAR_instrument_STAR__orig_val__48555,_STAR_parent_STAR__orig_val__48556,_STAR_reconciler_STAR__temp_val__48557,_STAR_depth_STAR__temp_val__48558,_STAR_shared_STAR__temp_val__48559,_STAR_instrument_STAR__temp_val__48560,_STAR_parent_STAR__temp_val__48561,this$,this__43449__auto__,x48551_49432))
], null);
var G__48565 = "Graph View";
return (com.wsscode.pathom.viz.ui.kit.toggle_action.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.toggle_action.cljs$core$IFn$_invoke$arity$2(G__48564,G__48565) : com.wsscode.pathom.viz.ui.kit.toggle_action.call(null,G__48564,G__48565));
})()], 0)),(cljs.core.truth_(show_graph_QMARK_)?(com.wsscode.pathom.viz.index_explorer.attribute_graph_panel.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.attribute_graph_panel.cljs$core$IFn$_invoke$arity$2(graph_panel,computed__$1) : com.wsscode.pathom.viz.index_explorer.attribute_graph_panel.call(null,graph_panel,computed__$1)):null),fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".columns$scrollbars",".columns$scrollbars",-1170212651),fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".data-list",".data-list",949465177),((cljs.core.seq(attr_reach_via))?(com.wsscode.pathom.viz.index_explorer.attribute_info_reach_via.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.attribute_info_reach_via.cljs$core$IFn$_invoke$arity$2(reach_via,computed__$1) : com.wsscode.pathom.viz.index_explorer.attribute_info_reach_via.call(null,reach_via,computed__$1)):null),((cljs.core.seq(attr_output_in))?(function (){var G__48566 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","panel-title","com.wsscode.pathom.viz.ui.kit/panel-title",1529445284),"Output In",new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","panel-tag","com.wsscode.pathom.viz.ui.kit/panel-tag",144392508),cljs.core.count(attr_output_in)], null);
var G__48567 = (function (){var iter__4523__auto__ = ((function (G__48566,computed__$1,map__48562,map__48562__$1,attr_mutation_param_in,attr_reach_via,attr_combinations,attribute,provides_tree,provides_tree_source,attr_input_in,attr_provides,attr_mutation_output_in,show_graph_QMARK_,mutation_output_in,attr_output_in,reach_via,graph_panel,mutation_param_in,computed,_STAR_reconciler_STAR__orig_val__48552,_STAR_depth_STAR__orig_val__48553,_STAR_shared_STAR__orig_val__48554,_STAR_instrument_STAR__orig_val__48555,_STAR_parent_STAR__orig_val__48556,_STAR_reconciler_STAR__temp_val__48557,_STAR_depth_STAR__temp_val__48558,_STAR_shared_STAR__temp_val__48559,_STAR_instrument_STAR__temp_val__48560,_STAR_parent_STAR__temp_val__48561,this$,this__43449__auto__,x48551_49432){
return (function com$wsscode$pathom$viz$index_explorer$iter__48568(s__48569){
return (new cljs.core.LazySeq(null,((function (G__48566,computed__$1,map__48562,map__48562__$1,attr_mutation_param_in,attr_reach_via,attr_combinations,attribute,provides_tree,provides_tree_source,attr_input_in,attr_provides,attr_mutation_output_in,show_graph_QMARK_,mutation_output_in,attr_output_in,reach_via,graph_panel,mutation_param_in,computed,_STAR_reconciler_STAR__orig_val__48552,_STAR_depth_STAR__orig_val__48553,_STAR_shared_STAR__orig_val__48554,_STAR_instrument_STAR__orig_val__48555,_STAR_parent_STAR__orig_val__48556,_STAR_reconciler_STAR__temp_val__48557,_STAR_depth_STAR__temp_val__48558,_STAR_shared_STAR__temp_val__48559,_STAR_instrument_STAR__temp_val__48560,_STAR_parent_STAR__temp_val__48561,this$,this__43449__auto__,x48551_49432){
return (function (){
var s__48569__$1 = s__48569;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__48569__$1);
if(temp__5720__auto__){
var s__48569__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__48569__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__48569__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__48571 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__48570 = (0);
while(true){
if((i__48570 < size__4522__auto__)){
var resolver = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__48570);
cljs.core.chunk_append(b__48571,(function (){var G__48572 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),resolver], null);
var G__48573 = computed__$1;
return (com.wsscode.pathom.viz.index_explorer.resolver_link.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.resolver_link.cljs$core$IFn$_invoke$arity$2(G__48572,G__48573) : com.wsscode.pathom.viz.index_explorer.resolver_link.call(null,G__48572,G__48573));
})());

var G__49433 = (i__48570 + (1));
i__48570 = G__49433;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__48571),com$wsscode$pathom$viz$index_explorer$iter__48568(cljs.core.chunk_rest(s__48569__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__48571),null);
}
} else {
var resolver = cljs.core.first(s__48569__$2);
return cljs.core.cons((function (){var G__48574 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),resolver], null);
var G__48575 = computed__$1;
return (com.wsscode.pathom.viz.index_explorer.resolver_link.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.resolver_link.cljs$core$IFn$_invoke$arity$2(G__48574,G__48575) : com.wsscode.pathom.viz.index_explorer.resolver_link.call(null,G__48574,G__48575));
})(),com$wsscode$pathom$viz$index_explorer$iter__48568(cljs.core.rest(s__48569__$2)));
}
} else {
return null;
}
break;
}
});})(G__48566,computed__$1,map__48562,map__48562__$1,attr_mutation_param_in,attr_reach_via,attr_combinations,attribute,provides_tree,provides_tree_source,attr_input_in,attr_provides,attr_mutation_output_in,show_graph_QMARK_,mutation_output_in,attr_output_in,reach_via,graph_panel,mutation_param_in,computed,_STAR_reconciler_STAR__orig_val__48552,_STAR_depth_STAR__orig_val__48553,_STAR_shared_STAR__orig_val__48554,_STAR_instrument_STAR__orig_val__48555,_STAR_parent_STAR__orig_val__48556,_STAR_reconciler_STAR__temp_val__48557,_STAR_depth_STAR__temp_val__48558,_STAR_shared_STAR__temp_val__48559,_STAR_instrument_STAR__temp_val__48560,_STAR_parent_STAR__temp_val__48561,this$,this__43449__auto__,x48551_49432))
,null,null));
});})(G__48566,computed__$1,map__48562,map__48562__$1,attr_mutation_param_in,attr_reach_via,attr_combinations,attribute,provides_tree,provides_tree_source,attr_input_in,attr_provides,attr_mutation_output_in,show_graph_QMARK_,mutation_output_in,attr_output_in,reach_via,graph_panel,mutation_param_in,computed,_STAR_reconciler_STAR__orig_val__48552,_STAR_depth_STAR__orig_val__48553,_STAR_shared_STAR__orig_val__48554,_STAR_instrument_STAR__orig_val__48555,_STAR_parent_STAR__orig_val__48556,_STAR_reconciler_STAR__temp_val__48557,_STAR_depth_STAR__temp_val__48558,_STAR_shared_STAR__temp_val__48559,_STAR_instrument_STAR__temp_val__48560,_STAR_parent_STAR__temp_val__48561,this$,this__43449__auto__,x48551_49432))
;
return iter__4523__auto__(cljs.core.sort.cljs$core$IFn$_invoke$arity$1(attr_output_in));
})();
return (com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2(G__48566,G__48567) : com.wsscode.pathom.viz.ui.kit.panel.call(null,G__48566,G__48567));
})():null),((cljs.core.seq(attr_combinations))?(function (){var G__48576 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","panel-title","com.wsscode.pathom.viz.ui.kit/panel-title",1529445284),"Input Combinations",new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","panel-tag","com.wsscode.pathom.viz.ui.kit/panel-tag",144392508),cljs.core.count(attr_combinations)], null);
var G__48577 = (function (){var iter__4523__auto__ = ((function (G__48576,computed__$1,map__48562,map__48562__$1,attr_mutation_param_in,attr_reach_via,attr_combinations,attribute,provides_tree,provides_tree_source,attr_input_in,attr_provides,attr_mutation_output_in,show_graph_QMARK_,mutation_output_in,attr_output_in,reach_via,graph_panel,mutation_param_in,computed,_STAR_reconciler_STAR__orig_val__48552,_STAR_depth_STAR__orig_val__48553,_STAR_shared_STAR__orig_val__48554,_STAR_instrument_STAR__orig_val__48555,_STAR_parent_STAR__orig_val__48556,_STAR_reconciler_STAR__temp_val__48557,_STAR_depth_STAR__temp_val__48558,_STAR_shared_STAR__temp_val__48559,_STAR_instrument_STAR__temp_val__48560,_STAR_parent_STAR__temp_val__48561,this$,this__43449__auto__,x48551_49432){
return (function com$wsscode$pathom$viz$index_explorer$iter__48578(s__48579){
return (new cljs.core.LazySeq(null,((function (G__48576,computed__$1,map__48562,map__48562__$1,attr_mutation_param_in,attr_reach_via,attr_combinations,attribute,provides_tree,provides_tree_source,attr_input_in,attr_provides,attr_mutation_output_in,show_graph_QMARK_,mutation_output_in,attr_output_in,reach_via,graph_panel,mutation_param_in,computed,_STAR_reconciler_STAR__orig_val__48552,_STAR_depth_STAR__orig_val__48553,_STAR_shared_STAR__orig_val__48554,_STAR_instrument_STAR__orig_val__48555,_STAR_parent_STAR__orig_val__48556,_STAR_reconciler_STAR__temp_val__48557,_STAR_depth_STAR__temp_val__48558,_STAR_shared_STAR__temp_val__48559,_STAR_instrument_STAR__temp_val__48560,_STAR_parent_STAR__temp_val__48561,this$,this__43449__auto__,x48551_49432){
return (function (){
var s__48579__$1 = s__48579;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__48579__$1);
if(temp__5720__auto__){
var s__48579__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__48579__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__48579__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__48581 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__48580 = (0);
while(true){
if((i__48580 < size__4522__auto__)){
var input = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__48580);
cljs.core.chunk_append(b__48581,(function (){var G__48582 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),input], null);
var G__48583 = computed__$1;
return (com.wsscode.pathom.viz.index_explorer.attribute_link.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.attribute_link.cljs$core$IFn$_invoke$arity$2(G__48582,G__48583) : com.wsscode.pathom.viz.index_explorer.attribute_link.call(null,G__48582,G__48583));
})());

var G__49434 = (i__48580 + (1));
i__48580 = G__49434;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__48581),com$wsscode$pathom$viz$index_explorer$iter__48578(cljs.core.chunk_rest(s__48579__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__48581),null);
}
} else {
var input = cljs.core.first(s__48579__$2);
return cljs.core.cons((function (){var G__48584 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),input], null);
var G__48585 = computed__$1;
return (com.wsscode.pathom.viz.index_explorer.attribute_link.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.attribute_link.cljs$core$IFn$_invoke$arity$2(G__48584,G__48585) : com.wsscode.pathom.viz.index_explorer.attribute_link.call(null,G__48584,G__48585));
})(),com$wsscode$pathom$viz$index_explorer$iter__48578(cljs.core.rest(s__48579__$2)));
}
} else {
return null;
}
break;
}
});})(G__48576,computed__$1,map__48562,map__48562__$1,attr_mutation_param_in,attr_reach_via,attr_combinations,attribute,provides_tree,provides_tree_source,attr_input_in,attr_provides,attr_mutation_output_in,show_graph_QMARK_,mutation_output_in,attr_output_in,reach_via,graph_panel,mutation_param_in,computed,_STAR_reconciler_STAR__orig_val__48552,_STAR_depth_STAR__orig_val__48553,_STAR_shared_STAR__orig_val__48554,_STAR_instrument_STAR__orig_val__48555,_STAR_parent_STAR__orig_val__48556,_STAR_reconciler_STAR__temp_val__48557,_STAR_depth_STAR__temp_val__48558,_STAR_shared_STAR__temp_val__48559,_STAR_instrument_STAR__temp_val__48560,_STAR_parent_STAR__temp_val__48561,this$,this__43449__auto__,x48551_49432))
,null,null));
});})(G__48576,computed__$1,map__48562,map__48562__$1,attr_mutation_param_in,attr_reach_via,attr_combinations,attribute,provides_tree,provides_tree_source,attr_input_in,attr_provides,attr_mutation_output_in,show_graph_QMARK_,mutation_output_in,attr_output_in,reach_via,graph_panel,mutation_param_in,computed,_STAR_reconciler_STAR__orig_val__48552,_STAR_depth_STAR__orig_val__48553,_STAR_shared_STAR__orig_val__48554,_STAR_instrument_STAR__orig_val__48555,_STAR_parent_STAR__orig_val__48556,_STAR_reconciler_STAR__temp_val__48557,_STAR_depth_STAR__temp_val__48558,_STAR_shared_STAR__temp_val__48559,_STAR_instrument_STAR__temp_val__48560,_STAR_parent_STAR__temp_val__48561,this$,this__43449__auto__,x48551_49432))
;
return iter__4523__auto__(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,cljs.core.sort),com.wsscode.pathom.viz.helpers.vector_compare,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (iter__4523__auto__,G__48576,computed__$1,map__48562,map__48562__$1,attr_mutation_param_in,attr_reach_via,attr_combinations,attribute,provides_tree,provides_tree_source,attr_input_in,attr_provides,attr_mutation_output_in,show_graph_QMARK_,mutation_output_in,attr_output_in,reach_via,graph_panel,mutation_param_in,computed,_STAR_reconciler_STAR__orig_val__48552,_STAR_depth_STAR__orig_val__48553,_STAR_shared_STAR__orig_val__48554,_STAR_instrument_STAR__orig_val__48555,_STAR_parent_STAR__orig_val__48556,_STAR_reconciler_STAR__temp_val__48557,_STAR_depth_STAR__temp_val__48558,_STAR_shared_STAR__temp_val__48559,_STAR_instrument_STAR__temp_val__48560,_STAR_parent_STAR__temp_val__48561,this$,this__43449__auto__,x48551_49432){
return (function (p1__48545_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.sorted_set(),p1__48545_SHARP_);
});})(iter__4523__auto__,G__48576,computed__$1,map__48562,map__48562__$1,attr_mutation_param_in,attr_reach_via,attr_combinations,attribute,provides_tree,provides_tree_source,attr_input_in,attr_provides,attr_mutation_output_in,show_graph_QMARK_,mutation_output_in,attr_output_in,reach_via,graph_panel,mutation_param_in,computed,_STAR_reconciler_STAR__orig_val__48552,_STAR_depth_STAR__orig_val__48553,_STAR_shared_STAR__orig_val__48554,_STAR_instrument_STAR__orig_val__48555,_STAR_parent_STAR__orig_val__48556,_STAR_reconciler_STAR__temp_val__48557,_STAR_depth_STAR__temp_val__48558,_STAR_shared_STAR__temp_val__48559,_STAR_instrument_STAR__temp_val__48560,_STAR_parent_STAR__temp_val__48561,this$,this__43449__auto__,x48551_49432))
,attr_combinations)));
})();
return (com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2(G__48576,G__48577) : com.wsscode.pathom.viz.ui.kit.panel.call(null,G__48576,G__48577));
})():null),((cljs.core.seq(attr_mutation_param_in))?(com.wsscode.pathom.viz.index_explorer.attribute_info_mutation_param_in.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.attribute_info_mutation_param_in.cljs$core$IFn$_invoke$arity$2(mutation_param_in,computed__$1) : com.wsscode.pathom.viz.index_explorer.attribute_info_mutation_param_in.call(null,mutation_param_in,computed__$1)):null),((cljs.core.seq(attr_mutation_output_in))?(com.wsscode.pathom.viz.index_explorer.attribute_info_mutation_output_in.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.attribute_info_mutation_output_in.cljs$core$IFn$_invoke$arity$2(mutation_output_in,computed__$1) : com.wsscode.pathom.viz.index_explorer.attribute_info_mutation_output_in.call(null,mutation_output_in,computed__$1)):null),(function (){var temp__5718__auto__ = com.wsscode.spec_inspec.safe_form(attribute);
if(cljs.core.truth_(temp__5718__auto__)){
var form = temp__5718__auto__;
return fulcro.client.primitives.fragment.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__48586 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","panel-title","com.wsscode.pathom.viz.ui.kit/panel-title",1529445284),"Spec"], null);
var G__48587 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([form], 0));
return (com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2(G__48586,G__48587) : com.wsscode.pathom.viz.ui.kit.panel.call(null,G__48586,G__48587));
})(),(function (){var G__48588 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),attribute], null);
var G__48589 = computed__$1;
return (com.wsscode.pathom.viz.index_explorer.examples_panel.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.examples_panel.cljs$core$IFn$_invoke$arity$2(G__48588,G__48589) : com.wsscode.pathom.viz.index_explorer.examples_panel.call(null,G__48588,G__48589));
})()], 0));
} else {
return null;
}
})(),com.wsscode.pathom.viz.index_explorer.render_plugin_extension(this$,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","plugin-render-to-attr-left-menu","com.wsscode.pathom.viz.index-explorer/plugin-render-to-attr-left-menu",-1946076893))], 0)),fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".data-list-right",".data-list-right",-1849926935),((cljs.core.seq(attr_provides))?(function (){var G__48590 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","panel-title","com.wsscode.pathom.viz.ui.kit/panel-title",1529445284),"Provides",new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","panel-tag","com.wsscode.pathom.viz.ui.kit/panel-tag",144392508),cljs.core.count(attr_provides)], null);
var G__48591 = (function (){var G__48592 = provides_tree;
var G__48593 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.viz.ui.expandable-tree","root","com.wsscode.pathom.viz.ui.expandable-tree/root",-788021653),provides_tree_source,new cljs.core.Keyword("com.wsscode.pathom.viz.ui.expandable-tree","render","com.wsscode.pathom.viz.ui.expandable-tree/render",918872218),((function (G__48592,G__48590,computed__$1,map__48562,map__48562__$1,attr_mutation_param_in,attr_reach_via,attr_combinations,attribute,provides_tree,provides_tree_source,attr_input_in,attr_provides,attr_mutation_output_in,show_graph_QMARK_,mutation_output_in,attr_output_in,reach_via,graph_panel,mutation_param_in,computed,_STAR_reconciler_STAR__orig_val__48552,_STAR_depth_STAR__orig_val__48553,_STAR_shared_STAR__orig_val__48554,_STAR_instrument_STAR__orig_val__48555,_STAR_parent_STAR__orig_val__48556,_STAR_reconciler_STAR__temp_val__48557,_STAR_depth_STAR__temp_val__48558,_STAR_shared_STAR__temp_val__48559,_STAR_instrument_STAR__temp_val__48560,_STAR_parent_STAR__temp_val__48561,this$,this__43449__auto__,x48551_49432){
return (function (p__48594){
var map__48595 = p__48594;
var map__48595__$1 = (((((!((map__48595 == null))))?(((((map__48595.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48595.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48595):map__48595);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48595__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var sym_set = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48595__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","sym-set","com.wsscode.pathom.connect/sym-set",-662703745));
var G__48597 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"classes","classes",2037804510),com.wsscode.pathom.viz.ui.kit.ccss.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".links-container",".links-container",-1347961892)], 0))], null);
var G__48598 = (function (){var G__48600 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),key], null);
var G__48601 = computed__$1;
return (com.wsscode.pathom.viz.index_explorer.attribute_link.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.attribute_link.cljs$core$IFn$_invoke$arity$2(G__48600,G__48601) : com.wsscode.pathom.viz.index_explorer.attribute_link.call(null,G__48600,G__48601));
})();
var G__48599 = fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"classes","classes",2037804510),com.wsscode.pathom.viz.ui.kit.ccss.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".links-display",".links-display",-2102960556)], 0))], null),(function (){var iter__4523__auto__ = ((function (G__48597,G__48598,map__48595,map__48595__$1,key,sym_set,G__48592,G__48590,computed__$1,map__48562,map__48562__$1,attr_mutation_param_in,attr_reach_via,attr_combinations,attribute,provides_tree,provides_tree_source,attr_input_in,attr_provides,attr_mutation_output_in,show_graph_QMARK_,mutation_output_in,attr_output_in,reach_via,graph_panel,mutation_param_in,computed,_STAR_reconciler_STAR__orig_val__48552,_STAR_depth_STAR__orig_val__48553,_STAR_shared_STAR__orig_val__48554,_STAR_instrument_STAR__orig_val__48555,_STAR_parent_STAR__orig_val__48556,_STAR_reconciler_STAR__temp_val__48557,_STAR_depth_STAR__temp_val__48558,_STAR_shared_STAR__temp_val__48559,_STAR_instrument_STAR__temp_val__48560,_STAR_parent_STAR__temp_val__48561,this$,this__43449__auto__,x48551_49432){
return (function com$wsscode$pathom$viz$index_explorer$iter__48602(s__48603){
return (new cljs.core.LazySeq(null,((function (G__48597,G__48598,map__48595,map__48595__$1,key,sym_set,G__48592,G__48590,computed__$1,map__48562,map__48562__$1,attr_mutation_param_in,attr_reach_via,attr_combinations,attribute,provides_tree,provides_tree_source,attr_input_in,attr_provides,attr_mutation_output_in,show_graph_QMARK_,mutation_output_in,attr_output_in,reach_via,graph_panel,mutation_param_in,computed,_STAR_reconciler_STAR__orig_val__48552,_STAR_depth_STAR__orig_val__48553,_STAR_shared_STAR__orig_val__48554,_STAR_instrument_STAR__orig_val__48555,_STAR_parent_STAR__orig_val__48556,_STAR_reconciler_STAR__temp_val__48557,_STAR_depth_STAR__temp_val__48558,_STAR_shared_STAR__temp_val__48559,_STAR_instrument_STAR__temp_val__48560,_STAR_parent_STAR__temp_val__48561,this$,this__43449__auto__,x48551_49432){
return (function (){
var s__48603__$1 = s__48603;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__48603__$1);
if(temp__5720__auto__){
var s__48603__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__48603__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__48603__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__48605 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__48604 = (0);
while(true){
if((i__48604 < size__4522__auto__)){
var sym = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__48604);
cljs.core.chunk_append(b__48605,(function (){var G__48606 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),sym], null);
var G__48607 = computed__$1;
return (com.wsscode.pathom.viz.index_explorer.resolver_link.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.resolver_link.cljs$core$IFn$_invoke$arity$2(G__48606,G__48607) : com.wsscode.pathom.viz.index_explorer.resolver_link.call(null,G__48606,G__48607));
})());

var G__49435 = (i__48604 + (1));
i__48604 = G__49435;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__48605),com$wsscode$pathom$viz$index_explorer$iter__48602(cljs.core.chunk_rest(s__48603__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__48605),null);
}
} else {
var sym = cljs.core.first(s__48603__$2);
return cljs.core.cons((function (){var G__48608 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),sym], null);
var G__48609 = computed__$1;
return (com.wsscode.pathom.viz.index_explorer.resolver_link.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.resolver_link.cljs$core$IFn$_invoke$arity$2(G__48608,G__48609) : com.wsscode.pathom.viz.index_explorer.resolver_link.call(null,G__48608,G__48609));
})(),com$wsscode$pathom$viz$index_explorer$iter__48602(cljs.core.rest(s__48603__$2)));
}
} else {
return null;
}
break;
}
});})(G__48597,G__48598,map__48595,map__48595__$1,key,sym_set,G__48592,G__48590,computed__$1,map__48562,map__48562__$1,attr_mutation_param_in,attr_reach_via,attr_combinations,attribute,provides_tree,provides_tree_source,attr_input_in,attr_provides,attr_mutation_output_in,show_graph_QMARK_,mutation_output_in,attr_output_in,reach_via,graph_panel,mutation_param_in,computed,_STAR_reconciler_STAR__orig_val__48552,_STAR_depth_STAR__orig_val__48553,_STAR_shared_STAR__orig_val__48554,_STAR_instrument_STAR__orig_val__48555,_STAR_parent_STAR__orig_val__48556,_STAR_reconciler_STAR__temp_val__48557,_STAR_depth_STAR__temp_val__48558,_STAR_shared_STAR__temp_val__48559,_STAR_instrument_STAR__temp_val__48560,_STAR_parent_STAR__temp_val__48561,this$,this__43449__auto__,x48551_49432))
,null,null));
});})(G__48597,G__48598,map__48595,map__48595__$1,key,sym_set,G__48592,G__48590,computed__$1,map__48562,map__48562__$1,attr_mutation_param_in,attr_reach_via,attr_combinations,attribute,provides_tree,provides_tree_source,attr_input_in,attr_provides,attr_mutation_output_in,show_graph_QMARK_,mutation_output_in,attr_output_in,reach_via,graph_panel,mutation_param_in,computed,_STAR_reconciler_STAR__orig_val__48552,_STAR_depth_STAR__orig_val__48553,_STAR_shared_STAR__orig_val__48554,_STAR_instrument_STAR__orig_val__48555,_STAR_parent_STAR__orig_val__48556,_STAR_reconciler_STAR__temp_val__48557,_STAR_depth_STAR__temp_val__48558,_STAR_shared_STAR__temp_val__48559,_STAR_instrument_STAR__temp_val__48560,_STAR_parent_STAR__temp_val__48561,this$,this__43449__auto__,x48551_49432))
;
return iter__4523__auto__(cljs.core.sort.cljs$core$IFn$_invoke$arity$1(sym_set));
})()], 0));
return (com.wsscode.pathom.viz.ui.kit.column.cljs$core$IFn$_invoke$arity$3 ? com.wsscode.pathom.viz.ui.kit.column.cljs$core$IFn$_invoke$arity$3(G__48597,G__48598,G__48599) : com.wsscode.pathom.viz.ui.kit.column.call(null,G__48597,G__48598,G__48599));
});})(G__48592,G__48590,computed__$1,map__48562,map__48562__$1,attr_mutation_param_in,attr_reach_via,attr_combinations,attribute,provides_tree,provides_tree_source,attr_input_in,attr_provides,attr_mutation_output_in,show_graph_QMARK_,mutation_output_in,attr_output_in,reach_via,graph_panel,mutation_param_in,computed,_STAR_reconciler_STAR__orig_val__48552,_STAR_depth_STAR__orig_val__48553,_STAR_shared_STAR__orig_val__48554,_STAR_instrument_STAR__orig_val__48555,_STAR_parent_STAR__orig_val__48556,_STAR_reconciler_STAR__temp_val__48557,_STAR_depth_STAR__temp_val__48558,_STAR_shared_STAR__temp_val__48559,_STAR_instrument_STAR__temp_val__48560,_STAR_parent_STAR__temp_val__48561,this$,this__43449__auto__,x48551_49432))
,new cljs.core.Keyword("com.wsscode.pathom.viz.ui.expandable-tree","sort-by","com.wsscode.pathom.viz.ui.expandable-tree/sort-by",1511051281),new cljs.core.Keyword(null,"key","key",-1516042587)], null);
return (com.wsscode.pathom.viz.ui.expandable_tree.expandable_tree.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.expandable_tree.expandable_tree.cljs$core$IFn$_invoke$arity$2(G__48592,G__48593) : com.wsscode.pathom.viz.ui.expandable_tree.expandable_tree.call(null,G__48592,G__48593));
})();
return (com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2(G__48590,G__48591) : com.wsscode.pathom.viz.ui.kit.panel.call(null,G__48590,G__48591));
})():null),((cljs.core.seq(attr_input_in))?(function (){var G__48610 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","panel-title","com.wsscode.pathom.viz.ui.kit/panel-title",1529445284),"Input In",new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","panel-tag","com.wsscode.pathom.viz.ui.kit/panel-tag",144392508),cljs.core.count(attr_input_in)], null);
var G__48611 = (function (){var iter__4523__auto__ = ((function (G__48610,computed__$1,map__48562,map__48562__$1,attr_mutation_param_in,attr_reach_via,attr_combinations,attribute,provides_tree,provides_tree_source,attr_input_in,attr_provides,attr_mutation_output_in,show_graph_QMARK_,mutation_output_in,attr_output_in,reach_via,graph_panel,mutation_param_in,computed,_STAR_reconciler_STAR__orig_val__48552,_STAR_depth_STAR__orig_val__48553,_STAR_shared_STAR__orig_val__48554,_STAR_instrument_STAR__orig_val__48555,_STAR_parent_STAR__orig_val__48556,_STAR_reconciler_STAR__temp_val__48557,_STAR_depth_STAR__temp_val__48558,_STAR_shared_STAR__temp_val__48559,_STAR_instrument_STAR__temp_val__48560,_STAR_parent_STAR__temp_val__48561,this$,this__43449__auto__,x48551_49432){
return (function com$wsscode$pathom$viz$index_explorer$iter__48612(s__48613){
return (new cljs.core.LazySeq(null,((function (G__48610,computed__$1,map__48562,map__48562__$1,attr_mutation_param_in,attr_reach_via,attr_combinations,attribute,provides_tree,provides_tree_source,attr_input_in,attr_provides,attr_mutation_output_in,show_graph_QMARK_,mutation_output_in,attr_output_in,reach_via,graph_panel,mutation_param_in,computed,_STAR_reconciler_STAR__orig_val__48552,_STAR_depth_STAR__orig_val__48553,_STAR_shared_STAR__orig_val__48554,_STAR_instrument_STAR__orig_val__48555,_STAR_parent_STAR__orig_val__48556,_STAR_reconciler_STAR__temp_val__48557,_STAR_depth_STAR__temp_val__48558,_STAR_shared_STAR__temp_val__48559,_STAR_instrument_STAR__temp_val__48560,_STAR_parent_STAR__temp_val__48561,this$,this__43449__auto__,x48551_49432){
return (function (){
var s__48613__$1 = s__48613;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__48613__$1);
if(temp__5720__auto__){
var s__48613__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__48613__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__48613__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__48615 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__48614 = (0);
while(true){
if((i__48614 < size__4522__auto__)){
var resolver = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__48614);
cljs.core.chunk_append(b__48615,(function (){var G__48616 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),resolver], null);
var G__48617 = computed__$1;
return (com.wsscode.pathom.viz.index_explorer.resolver_link.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.resolver_link.cljs$core$IFn$_invoke$arity$2(G__48616,G__48617) : com.wsscode.pathom.viz.index_explorer.resolver_link.call(null,G__48616,G__48617));
})());

var G__49436 = (i__48614 + (1));
i__48614 = G__49436;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__48615),com$wsscode$pathom$viz$index_explorer$iter__48612(cljs.core.chunk_rest(s__48613__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__48615),null);
}
} else {
var resolver = cljs.core.first(s__48613__$2);
return cljs.core.cons((function (){var G__48618 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),resolver], null);
var G__48619 = computed__$1;
return (com.wsscode.pathom.viz.index_explorer.resolver_link.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.resolver_link.cljs$core$IFn$_invoke$arity$2(G__48618,G__48619) : com.wsscode.pathom.viz.index_explorer.resolver_link.call(null,G__48618,G__48619));
})(),com$wsscode$pathom$viz$index_explorer$iter__48612(cljs.core.rest(s__48613__$2)));
}
} else {
return null;
}
break;
}
});})(G__48610,computed__$1,map__48562,map__48562__$1,attr_mutation_param_in,attr_reach_via,attr_combinations,attribute,provides_tree,provides_tree_source,attr_input_in,attr_provides,attr_mutation_output_in,show_graph_QMARK_,mutation_output_in,attr_output_in,reach_via,graph_panel,mutation_param_in,computed,_STAR_reconciler_STAR__orig_val__48552,_STAR_depth_STAR__orig_val__48553,_STAR_shared_STAR__orig_val__48554,_STAR_instrument_STAR__orig_val__48555,_STAR_parent_STAR__orig_val__48556,_STAR_reconciler_STAR__temp_val__48557,_STAR_depth_STAR__temp_val__48558,_STAR_shared_STAR__temp_val__48559,_STAR_instrument_STAR__temp_val__48560,_STAR_parent_STAR__temp_val__48561,this$,this__43449__auto__,x48551_49432))
,null,null));
});})(G__48610,computed__$1,map__48562,map__48562__$1,attr_mutation_param_in,attr_reach_via,attr_combinations,attribute,provides_tree,provides_tree_source,attr_input_in,attr_provides,attr_mutation_output_in,show_graph_QMARK_,mutation_output_in,attr_output_in,reach_via,graph_panel,mutation_param_in,computed,_STAR_reconciler_STAR__orig_val__48552,_STAR_depth_STAR__orig_val__48553,_STAR_shared_STAR__orig_val__48554,_STAR_instrument_STAR__orig_val__48555,_STAR_parent_STAR__orig_val__48556,_STAR_reconciler_STAR__temp_val__48557,_STAR_depth_STAR__temp_val__48558,_STAR_shared_STAR__temp_val__48559,_STAR_instrument_STAR__temp_val__48560,_STAR_parent_STAR__temp_val__48561,this$,this__43449__auto__,x48551_49432))
;
return iter__4523__auto__(cljs.core.sort.cljs$core$IFn$_invoke$arity$1(attr_input_in));
})();
return (com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2(G__48610,G__48611) : com.wsscode.pathom.viz.ui.kit.panel.call(null,G__48610,G__48611));
})():null)], 0))], 0))], 0));
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__48556;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__48555;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__48554;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__48553;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__48552;
}});})(x48551_49432))
;

x48551_49432.initLocalState = ((function (x48551_49432){
return (function (){
var this$ = this;
var ret__43424__auto__ = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"graph-comm","graph-comm",-744729650),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null),new cljs.core.Keyword(null,"select-resolver","select-resolver",43705318),((function (this$,x48551_49432){
return (function (p__48620){
var map__48621 = p__48620;
var map__48621__$1 = (((((!((map__48621 == null))))?(((((map__48621.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48621.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48621):map__48621);
var resolvers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48621__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","resolvers","com.wsscode.pathom.viz.index-explorer/resolvers",-1064744669));
var map__48623 = fulcro.client.primitives.get_computed.cljs$core$IFn$_invoke$arity$1(fulcro.client.primitives.props(this$));
var map__48623__$1 = (((((!((map__48623 == null))))?(((((map__48623.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48623.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48623):map__48623);
var on_select_resolver = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48623__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","on-select-resolver","com.wsscode.pathom.viz.index-explorer/on-select-resolver",1600914463));
var G__48625 = cljs.core.first(resolvers);
return (on_select_resolver.cljs$core$IFn$_invoke$arity$1 ? on_select_resolver.cljs$core$IFn$_invoke$arity$1(G__48625) : on_select_resolver.call(null,G__48625));
});})(this$,x48551_49432))
], null);
var obj48627 = ({"fulcro$state":ret__43424__auto__});
return obj48627;
});})(x48551_49432))
;


com.wsscode.pathom.viz.index_explorer.AttributeView.prototype.constructor = com.wsscode.pathom.viz.index_explorer.AttributeView;

com.wsscode.pathom.viz.index_explorer.AttributeView.prototype.constructor.displayName = "com.wsscode.pathom.viz.index-explorer/AttributeView";

com.wsscode.pathom.viz.index_explorer.AttributeView.prototype.fulcro$isComponent = true;

var x48628_49437 = com.wsscode.pathom.viz.index_explorer.AttributeView;
x48628_49437.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x48628_49437.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x48628_49437){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"flex","flex",-1425124628),"1",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column",new cljs.core.Keyword(null,"display","display",242065432),"flex"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".title",".title",-416997657),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),com.wsscode.pathom.viz.index_explorer.color_attribute], null),com.wsscode.pathom.viz.ui.kit.css_header,com.wsscode.pathom.viz.ui.kit.text_base], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".toolbar",".toolbar",968457325),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"16px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".show-graph",".show-graph",1780476669),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"padding","padding",1660304693),"8px",new cljs.core.Keyword(null,"font-family","font-family",-667419874),com.wsscode.pathom.viz.ui.kit.font_base,new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1.1rem"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".graph-options",".graph-options",1009499042),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.9rem"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.viz.ui.kit.component_class(com.wsscode.pathom.viz.ui.kit.ToggleAction,new cljs.core.Keyword(null,".container",".container",-1441208944)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"0 2px"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".data-list",".data-list",949465177),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"white-space","white-space",-707351930),"nowrap",new cljs.core.Keyword(null,"box-sizing","box-sizing",-1956090239),"border-box",new cljs.core.Keyword(null,"width","width",-384071477),"50%",new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),"12px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".data-list-right",".data-list-right",-1849926935),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"white-space","white-space",-707351930),"nowrap",new cljs.core.Keyword(null,"width","width",-384071477),"50%",new cljs.core.Keyword(null,"box-sizing","box-sizing",-1956090239),"border-box",new cljs.core.Keyword(null,"padding","padding",1660304693),"0 12px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".graph",".graph",-327673667),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"height","height",1025178622),"400px",new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"stretch",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".columns",".columns",-1833892286),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex","flex",-1425124628),"1"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font","font",-1506159249),"bold 16px Verdana, Helvetica, Arial, sans-serif"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".links-container",".links-container",-1347961892),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:hover","&:hover",-852658855),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".links-display",".links-display",-2102960556),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"block"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".links-display",".links-display",-2102960556),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"none",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"16px"], null)], null)], null);
});})(x48628_49437))
;

x48628_49437.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x48628_49437){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.viz.index_explorer.AttributeGraph,com.wsscode.pathom.viz.ui.kit.ToggleAction,com.wsscode.pathom.viz.index_explorer.ExamplesPanel], null);
});})(x48628_49437))
;

x48628_49437.fulcro$client$primitives$IPreMerge$ = cljs.core.PROTOCOL_SENTINEL;

x48628_49437.fulcro$client$primitives$IPreMerge$pre_merge_STAR_$arity$2 = ((function (x48628_49437){
return (function (this$,p__48629){
var map__48630 = p__48629;
var map__48630__$1 = (((((!((map__48630 == null))))?(((((map__48630.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48630.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48630):map__48630);
var current_normalized = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48630__$1,new cljs.core.Keyword(null,"current-normalized","current-normalized",851723724));
var data_tree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48630__$1,new cljs.core.Keyword(null,"data-tree","data-tree",1311167582));
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
});})(x48628_49437))
;

x48628_49437.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x48628_49437.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x48628_49437){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x48628_49437))
;

x48628_49437.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x48628_49437.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x48628_49437){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-combinations","com.wsscode.pathom.connect/attr-combinations",-1163990806),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-input-in","com.wsscode.pathom.connect/attr-input-in",-2112912399),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-output-in","com.wsscode.pathom.connect/attr-output-in",-62045610),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-mutation-param-in","com.wsscode.pathom.connect/attr-mutation-param-in",-1474382671),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-mutation-output-in","com.wsscode.pathom.connect/attr-mutation-output-in",1122448739),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","show-graph?","com.wsscode.pathom.viz.index-explorer/show-graph?",-1999932552),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via","com.wsscode.pathom.connect/attr-reach-via",-483841559),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-provides","com.wsscode.pathom.connect/attr-provides",-474523918),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(">","graph-panel",">/graph-panel",-700694737),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.AttributeGraphPanel)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(">","reach-via",">/reach-via",725397135),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.AttributeInfoReachVia)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(">","mutation-param-in",">/mutation-param-in",-1050138308),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationParamIn)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(">","mutation-output-in",">/mutation-output-in",463836271),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationOutputIn)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","provides-tree","ui/provides-tree",675380755),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.ui.expandable_tree.ExpandableTree)], null),new cljs.core.Keyword("ui","provides-tree-source","ui/provides-tree-source",874544325)], null);
});})(x48628_49437))
;


var x48632_49438 = com.wsscode.pathom.viz.index_explorer.AttributeView.prototype;
x48632_49438.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x48632_49438.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x48632_49438){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"flex","flex",-1425124628),"1",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column",new cljs.core.Keyword(null,"display","display",242065432),"flex"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".title",".title",-416997657),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),com.wsscode.pathom.viz.index_explorer.color_attribute], null),com.wsscode.pathom.viz.ui.kit.css_header,com.wsscode.pathom.viz.ui.kit.text_base], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".toolbar",".toolbar",968457325),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"16px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".show-graph",".show-graph",1780476669),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"padding","padding",1660304693),"8px",new cljs.core.Keyword(null,"font-family","font-family",-667419874),com.wsscode.pathom.viz.ui.kit.font_base,new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1.1rem"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".graph-options",".graph-options",1009499042),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.9rem"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.viz.ui.kit.component_class(com.wsscode.pathom.viz.ui.kit.ToggleAction,new cljs.core.Keyword(null,".container",".container",-1441208944)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"0 2px"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".data-list",".data-list",949465177),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"white-space","white-space",-707351930),"nowrap",new cljs.core.Keyword(null,"box-sizing","box-sizing",-1956090239),"border-box",new cljs.core.Keyword(null,"width","width",-384071477),"50%",new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),"12px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".data-list-right",".data-list-right",-1849926935),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"white-space","white-space",-707351930),"nowrap",new cljs.core.Keyword(null,"width","width",-384071477),"50%",new cljs.core.Keyword(null,"box-sizing","box-sizing",-1956090239),"border-box",new cljs.core.Keyword(null,"padding","padding",1660304693),"0 12px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".graph",".graph",-327673667),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"height","height",1025178622),"400px",new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"stretch",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".columns",".columns",-1833892286),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex","flex",-1425124628),"1"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font","font",-1506159249),"bold 16px Verdana, Helvetica, Arial, sans-serif"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".links-container",".links-container",-1347961892),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:hover","&:hover",-852658855),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".links-display",".links-display",-2102960556),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"block"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".links-display",".links-display",-2102960556),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"none",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"16px"], null)], null)], null);
});})(x48632_49438))
;

x48632_49438.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x48632_49438){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.viz.index_explorer.AttributeGraph,com.wsscode.pathom.viz.ui.kit.ToggleAction,com.wsscode.pathom.viz.index_explorer.ExamplesPanel], null);
});})(x48632_49438))
;

x48632_49438.fulcro$client$primitives$IPreMerge$ = cljs.core.PROTOCOL_SENTINEL;

x48632_49438.fulcro$client$primitives$IPreMerge$pre_merge_STAR_$arity$2 = ((function (x48632_49438){
return (function (this$,p__48633){
var map__48634 = p__48633;
var map__48634__$1 = (((((!((map__48634 == null))))?(((((map__48634.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48634.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48634):map__48634);
var current_normalized = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48634__$1,new cljs.core.Keyword(null,"current-normalized","current-normalized",851723724));
var data_tree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48634__$1,new cljs.core.Keyword(null,"data-tree","data-tree",1311167582));
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
});})(x48632_49438))
;

x48632_49438.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x48632_49438.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x48632_49438){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x48632_49438))
;

x48632_49438.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x48632_49438.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x48632_49438){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-combinations","com.wsscode.pathom.connect/attr-combinations",-1163990806),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-input-in","com.wsscode.pathom.connect/attr-input-in",-2112912399),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-output-in","com.wsscode.pathom.connect/attr-output-in",-62045610),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-mutation-param-in","com.wsscode.pathom.connect/attr-mutation-param-in",-1474382671),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-mutation-output-in","com.wsscode.pathom.connect/attr-mutation-output-in",1122448739),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","show-graph?","com.wsscode.pathom.viz.index-explorer/show-graph?",-1999932552),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via","com.wsscode.pathom.connect/attr-reach-via",-483841559),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-provides","com.wsscode.pathom.connect/attr-provides",-474523918),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(">","graph-panel",">/graph-panel",-700694737),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.AttributeGraphPanel)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(">","reach-via",">/reach-via",725397135),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.AttributeInfoReachVia)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(">","mutation-param-in",">/mutation-param-in",-1050138308),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationParamIn)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(">","mutation-output-in",">/mutation-output-in",463836271),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationOutputIn)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","provides-tree","ui/provides-tree",675380755),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.ui.expandable_tree.ExpandableTree)], null),new cljs.core.Keyword("ui","provides-tree-source","ui/provides-tree-source",874544325)], null);
});})(x48632_49438))
;


com.wsscode.pathom.viz.index_explorer.AttributeView.cljs$lang$type = true;

com.wsscode.pathom.viz.index_explorer.AttributeView.cljs$lang$ctorStr = "com.wsscode.pathom.viz.index-explorer/AttributeView";

com.wsscode.pathom.viz.index_explorer.AttributeView.cljs$lang$ctorPrWriter = (function (this__44534__auto__,writer__44535__auto__,opt__44536__auto__){
return cljs.core._write(writer__44535__auto__,"com.wsscode.pathom.viz.index-explorer/AttributeView");
});
goog.object.set(com.wsscode.pathom.viz.index_explorer.AttributeView,"contextType",com.wsscode.pathom.viz.index_explorer.ExtensionContext);
com.wsscode.pathom.viz.index_explorer.attribute_view = fulcro.client.primitives.computed_factory.cljs$core$IFn$_invoke$arity$2(com.wsscode.pathom.viz.index_explorer.AttributeView,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075)], null));
com.wsscode.pathom.viz.index_explorer.out_all_attributes = (function com$wsscode$pathom$viz$index_explorer$out_all_attributes(p__48636,input){
var map__48637 = p__48636;
var map__48637__$1 = (((((!((map__48637 == null))))?(((((map__48637.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48637.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48637):map__48637);
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48637__$1,new cljs.core.Keyword(null,"children","children",-940561982));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (map__48637,map__48637__$1,children){
return (function (attrs,p__48639){
var map__48640 = p__48639;
var map__48640__$1 = (((((!((map__48640 == null))))?(((((map__48640.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48640.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48640):map__48640);
var node = map__48640__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48640__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var children__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48640__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var G__48642 = ((cljs.core.contains_QMARK_(input,key))?attrs:cljs.core.conj.cljs$core$IFn$_invoke$arity$2(attrs,key));
if(cljs.core.truth_(children__$1)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(G__48642,(com.wsscode.pathom.viz.index_explorer.out_all_attributes.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.out_all_attributes.cljs$core$IFn$_invoke$arity$2(node,input) : com.wsscode.pathom.viz.index_explorer.out_all_attributes.call(null,node,input)));
} else {
return G__48642;
}
});})(map__48637,map__48637__$1,children))
,cljs.core.PersistentHashSet.EMPTY,children);
});
if((typeof com !== 'undefined') && (typeof com.wsscode !== 'undefined') && (typeof com.wsscode.pathom !== 'undefined') && (typeof com.wsscode.pathom.viz !== 'undefined') && (typeof com.wsscode.pathom.viz.index_explorer !== 'undefined') && (typeof com.wsscode.pathom.viz.index_explorer.ResolverView !== 'undefined')){
} else {
/**
 * @constructor
 * @nocollapse
 */
com.wsscode.pathom.viz.index_explorer.ResolverView = (function com$wsscode$pathom$viz$index_explorer$ResolverView(){
var this__44531__auto__ = this;
React.Component.apply(this__44531__auto__,arguments);

if((!((this__44531__auto__.initLocalState == null)))){
this__44531__auto__.state = this__44531__auto__.initLocalState();
} else {
this__44531__auto__.state = ({});
}

return this__44531__auto__;
});

var G__48646_49439 = com.wsscode.pathom.viz.index_explorer.ResolverView.prototype;
var G__48647_49440 = React.Component.prototype;
var G__48648_49441 = fulcro.client.primitives.default_component_prototype;
goog.object.extend(G__48646_49439,G__48647_49440,G__48648_49441);
}

fulcro.client.primitives._register_component_BANG_(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","ResolverView","com.wsscode.pathom.viz.index-explorer/ResolverView",1233559847),com.wsscode.pathom.viz.index_explorer.ResolverView);

var x48649_49442 = com.wsscode.pathom.viz.index_explorer.ResolverView.prototype;
x48649_49442.render = ((function (x48649_49442){
return (function (){
var this__43449__auto__ = this;
var this$ = this__43449__auto__;
var _STAR_reconciler_STAR__orig_val__48650 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__48651 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__48652 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__48653 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__48654 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__48655 = fulcro.client.primitives.get_reconciler(this__43449__auto__);
var _STAR_depth_STAR__temp_val__48656 = (fulcro.client.primitives.depth(this__43449__auto__) + (1));
var _STAR_shared_STAR__temp_val__48657 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__43449__auto__);
var _STAR_instrument_STAR__temp_val__48658 = fulcro.client.primitives.instrument(this__43449__auto__);
var _STAR_parent_STAR__temp_val__48659 = this__43449__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__48655;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__48656;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__48657;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__48658;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__48659;

try{var map__48660 = fulcro.client.primitives.props(this$);
var map__48660__$1 = (((((!((map__48660 == null))))?(((((map__48660.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48660.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48660):map__48660);
var sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48660__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581));
var input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48660__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121));
var output = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48660__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303));
var batch_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48660__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","batch?","com.wsscode.pathom.connect/batch?",-427062659));
var output_tree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48660__$1,new cljs.core.Keyword("ui","output-tree","ui/output-tree",-491226343));
var map__48661 = fulcro.client.primitives.get_computed.cljs$core$IFn$_invoke$arity$1(this$);
var map__48661__$1 = (((((!((map__48661 == null))))?(((((map__48661.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48661.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48661):map__48661);
var computed = map__48661__$1;
var on_select_attribute = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48661__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","on-select-attribute","com.wsscode.pathom.viz.index-explorer/on-select-attribute",2006419034));
var attributes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48661__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attributes","com.wsscode.pathom.viz.index-explorer/attributes",-67264281));
var css = fulcro_css.css_implementation.get_classnames(com.wsscode.pathom.viz.index_explorer.ResolverView);
var input_SINGLEQUOTE_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(input)))?cljs.core.first(input):input);
var computed__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(computed,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","graph-comm","com.wsscode.pathom.viz.index-explorer/graph-comm",-735750087),fulcro.client.primitives.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"graph-comm","graph-comm",-744729650)));
var G__48664 = com.wsscode.pathom.viz.ui.kit.gc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".flex",".flex",-73425686)], 0));
var G__48665 = fulcro.client.localized_dom.h1.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".title",".title",-416997657),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)], 0));
var G__48666 = (function (){var G__48667 = com.wsscode.pathom.viz.ui.kit.gc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".flex",".flex",-73425686),new cljs.core.Keyword(null,".no-scrollbars",".no-scrollbars",2090539071)], 0));
var G__48668 = fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".menu",".menu",986259874),(cljs.core.truth_(batch_QMARK_)?(function (){var G__48670 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","panel-title","com.wsscode.pathom.viz.ui.kit/panel-title",1529445284),"Batch"], null);
var G__48671 = "True";
return (com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2(G__48670,G__48671) : com.wsscode.pathom.viz.ui.kit.panel.call(null,G__48670,G__48671));
})():null),(cljs.core.truth_(input)?(function (){var G__48672 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","panel-title","com.wsscode.pathom.viz.ui.kit/panel-title",1529445284),"Input"], null);
var G__48673 = (function (){var G__48674 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),input_SINGLEQUOTE_], null);
var G__48675 = computed__$1;
return (com.wsscode.pathom.viz.index_explorer.attribute_link.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.attribute_link.cljs$core$IFn$_invoke$arity$2(G__48674,G__48675) : com.wsscode.pathom.viz.index_explorer.attribute_link.call(null,G__48674,G__48675));
})();
return (com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2(G__48672,G__48673) : com.wsscode.pathom.viz.ui.kit.panel.call(null,G__48672,G__48673));
})():null),(cljs.core.truth_(output)?(function (){var G__48676 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","panel-title","com.wsscode.pathom.viz.ui.kit/panel-title",1529445284),"Output"], null);
var G__48677 = (function (){var G__48678 = output_tree;
var G__48679 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.viz.ui.expandable-tree","root","com.wsscode.pathom.viz.ui.expandable-tree/root",-788021653),cljs.core.update.cljs$core$IFn$_invoke$arity$3(edn_query_language.core.query__GT_ast(output),new cljs.core.Keyword(null,"children","children",-940561982),((function (G__48678,G__48676,G__48667,G__48664,G__48665,input_SINGLEQUOTE_,computed__$1,map__48660,map__48660__$1,sym,input,output,batch_QMARK_,output_tree,map__48661,map__48661__$1,computed,on_select_attribute,attributes,css,_STAR_reconciler_STAR__orig_val__48650,_STAR_depth_STAR__orig_val__48651,_STAR_shared_STAR__orig_val__48652,_STAR_instrument_STAR__orig_val__48653,_STAR_parent_STAR__orig_val__48654,_STAR_reconciler_STAR__temp_val__48655,_STAR_depth_STAR__temp_val__48656,_STAR_shared_STAR__temp_val__48657,_STAR_instrument_STAR__temp_val__48658,_STAR_parent_STAR__temp_val__48659,this$,this__43449__auto__,x48649_49442){
return (function (p1__48643_SHARP_){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(input,new cljs.core.Keyword(null,"key","key",-1516042587)),p1__48643_SHARP_);
});})(G__48678,G__48676,G__48667,G__48664,G__48665,input_SINGLEQUOTE_,computed__$1,map__48660,map__48660__$1,sym,input,output,batch_QMARK_,output_tree,map__48661,map__48661__$1,computed,on_select_attribute,attributes,css,_STAR_reconciler_STAR__orig_val__48650,_STAR_depth_STAR__orig_val__48651,_STAR_shared_STAR__orig_val__48652,_STAR_instrument_STAR__orig_val__48653,_STAR_parent_STAR__orig_val__48654,_STAR_reconciler_STAR__temp_val__48655,_STAR_depth_STAR__temp_val__48656,_STAR_shared_STAR__temp_val__48657,_STAR_instrument_STAR__temp_val__48658,_STAR_parent_STAR__temp_val__48659,this$,this__43449__auto__,x48649_49442))
),new cljs.core.Keyword("com.wsscode.pathom.viz.ui.expandable-tree","render","com.wsscode.pathom.viz.ui.expandable-tree/render",918872218),fulcro.client.primitives.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"render","render",-1408033454)),new cljs.core.Keyword("com.wsscode.pathom.viz.ui.expandable-tree","sort-by","com.wsscode.pathom.viz.ui.expandable-tree/sort-by",1511051281),new cljs.core.Keyword(null,"key","key",-1516042587)], null);
return (com.wsscode.pathom.viz.ui.expandable_tree.expandable_tree.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.expandable_tree.expandable_tree.cljs$core$IFn$_invoke$arity$2(G__48678,G__48679) : com.wsscode.pathom.viz.ui.expandable_tree.expandable_tree.call(null,G__48678,G__48679));
})();
return (com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2(G__48676,G__48677) : com.wsscode.pathom.viz.ui.kit.panel.call(null,G__48676,G__48677));
})():null),com.wsscode.pathom.viz.index_explorer.render_plugin_extension(this$,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","plugin-render-to-resolver-menu","com.wsscode.pathom.viz.index-explorer/plugin-render-to-resolver-menu",-1265412227))], 0));
var G__48669 = (cljs.core.truth_(input)?(function (){var resolver_attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(com.wsscode.pathom.viz.index_explorer.out_all_attributes(edn_query_language.core.query__GT_ast(output),input),input_SINGLEQUOTE_);
var attrs = cljs.core.vals(cljs.core.update.cljs$core$IFn$_invoke$arity$5(cljs.core.select_keys(com.wsscode.pathom.viz.helpers.index_by(new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),attributes),resolver_attrs),input_SINGLEQUOTE_,cljs.core.assoc,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","center?","com.wsscode.pathom.viz.index-explorer/center?",-314133194),true));
var G__48680 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attributes","com.wsscode.pathom.viz.index-explorer/attributes",-67264281),attrs,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","graph-comm","com.wsscode.pathom.viz.index-explorer/graph-comm",-735750087),fulcro.client.primitives.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"graph-comm","graph-comm",-744729650)),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","on-show-details","com.wsscode.pathom.viz.index-explorer/on-show-details",-322180105),on_select_attribute,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","on-click-edge","com.wsscode.pathom.viz.index-explorer/on-click-edge",810811642),fulcro.client.primitives.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"select-resolver","select-resolver",43705318))], null);
return (com.wsscode.pathom.viz.index_explorer.attribute_graph.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom.viz.index_explorer.attribute_graph.cljs$core$IFn$_invoke$arity$1(G__48680) : com.wsscode.pathom.viz.index_explorer.attribute_graph.call(null,G__48680));
})():null);
return (com.wsscode.pathom.viz.ui.kit.row.cljs$core$IFn$_invoke$arity$3 ? com.wsscode.pathom.viz.ui.kit.row.cljs$core$IFn$_invoke$arity$3(G__48667,G__48668,G__48669) : com.wsscode.pathom.viz.ui.kit.row.call(null,G__48667,G__48668,G__48669));
})();
return (com.wsscode.pathom.viz.ui.kit.column.cljs$core$IFn$_invoke$arity$3 ? com.wsscode.pathom.viz.ui.kit.column.cljs$core$IFn$_invoke$arity$3(G__48664,G__48665,G__48666) : com.wsscode.pathom.viz.ui.kit.column.call(null,G__48664,G__48665,G__48666));
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__48654;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__48653;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__48652;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__48651;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__48650;
}});})(x48649_49442))
;

x48649_49442.initLocalState = ((function (x48649_49442){
return (function (){
var this$ = this;
var ret__43424__auto__ = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"graph-comm","graph-comm",-744729650),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null),new cljs.core.Keyword(null,"select-resolver","select-resolver",43705318),((function (this$,x48649_49442){
return (function (p__48681){
var map__48682 = p__48681;
var map__48682__$1 = (((((!((map__48682 == null))))?(((((map__48682.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48682.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48682):map__48682);
var resolvers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48682__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","resolvers","com.wsscode.pathom.viz.index-explorer/resolvers",-1064744669));
var map__48684 = fulcro.client.primitives.get_computed.cljs$core$IFn$_invoke$arity$1(fulcro.client.primitives.props(this$));
var map__48684__$1 = (((((!((map__48684 == null))))?(((((map__48684.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48684.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48684):map__48684);
var on_select_resolver = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48684__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","on-select-resolver","com.wsscode.pathom.viz.index-explorer/on-select-resolver",1600914463));
var G__48686 = cljs.core.first(resolvers);
return (on_select_resolver.cljs$core$IFn$_invoke$arity$1 ? on_select_resolver.cljs$core$IFn$_invoke$arity$1(G__48686) : on_select_resolver.call(null,G__48686));
});})(this$,x48649_49442))
,new cljs.core.Keyword(null,"render","render",-1408033454),((function (this$,x48649_49442){
return (function (p__48687){
var map__48688 = p__48687;
var map__48688__$1 = (((((!((map__48688 == null))))?(((((map__48688.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48688.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48688):map__48688);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48688__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var computed = fulcro.client.primitives.get_computed.cljs$core$IFn$_invoke$arity$1(fulcro.client.primitives.props(this$));
var computed__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(computed,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","graph-comm","com.wsscode.pathom.viz.index-explorer/graph-comm",-735750087),fulcro.client.primitives.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"graph-comm","graph-comm",-744729650)));
var G__48690 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),key], null);
var G__48691 = computed__$1;
return (com.wsscode.pathom.viz.index_explorer.attribute_link.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.attribute_link.cljs$core$IFn$_invoke$arity$2(G__48690,G__48691) : com.wsscode.pathom.viz.index_explorer.attribute_link.call(null,G__48690,G__48691));
});})(this$,x48649_49442))
], null);
var obj48693 = ({"fulcro$state":ret__43424__auto__});
return obj48693;
});})(x48649_49442))
;


com.wsscode.pathom.viz.index_explorer.ResolverView.prototype.constructor = com.wsscode.pathom.viz.index_explorer.ResolverView;

com.wsscode.pathom.viz.index_explorer.ResolverView.prototype.constructor.displayName = "com.wsscode.pathom.viz.index-explorer/ResolverView";

com.wsscode.pathom.viz.index_explorer.ResolverView.prototype.fulcro$isComponent = true;

var x48694_49443 = com.wsscode.pathom.viz.index_explorer.ResolverView;
x48694_49443.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x48694_49443.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x48694_49443){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".title",".title",-416997657),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),com.wsscode.pathom.viz.index_explorer.color_resolver], null),com.wsscode.pathom.viz.ui.kit.css_header,com.wsscode.pathom.viz.ui.kit.text_base], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".menu",".menu",986259874),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"white-space","white-space",-707351930),"nowrap",new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),"12px",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"auto"], null)], null)], null);
});})(x48694_49443))
;

x48694_49443.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x48694_49443){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x48694_49443))
;

x48694_49443.fulcro$client$primitives$IPreMerge$ = cljs.core.PROTOCOL_SENTINEL;

x48694_49443.fulcro$client$primitives$IPreMerge$pre_merge_STAR_$arity$2 = ((function (x48694_49443){
return (function (this$,p__48695){
var map__48696 = p__48695;
var map__48696__$1 = (((((!((map__48696 == null))))?(((((map__48696.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48696.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48696):map__48696);
var current_normalized = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48696__$1,new cljs.core.Keyword(null,"current-normalized","current-normalized",851723724));
var data_tree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48696__$1,new cljs.core.Keyword(null,"data-tree","data-tree",1311167582));
var this$__$1 = this;
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","output-tree","ui/output-tree",-491226343),cljs.core.PersistentArrayMap.EMPTY], null),current_normalized,data_tree], 0));
});})(x48694_49443))
;

x48694_49443.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x48694_49443.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x48694_49443){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x48694_49443))
;

x48694_49443.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x48694_49443.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x48694_49443){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","batch?","com.wsscode.pathom.connect/batch?",-427062659),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","output-tree","ui/output-tree",-491226343),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.ui.expandable_tree.ExpandableTree)], null)], null);
});})(x48694_49443))
;


var x48698_49444 = com.wsscode.pathom.viz.index_explorer.ResolverView.prototype;
x48698_49444.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x48698_49444.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x48698_49444){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".title",".title",-416997657),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),com.wsscode.pathom.viz.index_explorer.color_resolver], null),com.wsscode.pathom.viz.ui.kit.css_header,com.wsscode.pathom.viz.ui.kit.text_base], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".menu",".menu",986259874),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"white-space","white-space",-707351930),"nowrap",new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),"12px",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"auto"], null)], null)], null);
});})(x48698_49444))
;

x48698_49444.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x48698_49444){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x48698_49444))
;

x48698_49444.fulcro$client$primitives$IPreMerge$ = cljs.core.PROTOCOL_SENTINEL;

x48698_49444.fulcro$client$primitives$IPreMerge$pre_merge_STAR_$arity$2 = ((function (x48698_49444){
return (function (this$,p__48699){
var map__48700 = p__48699;
var map__48700__$1 = (((((!((map__48700 == null))))?(((((map__48700.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48700.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48700):map__48700);
var current_normalized = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48700__$1,new cljs.core.Keyword(null,"current-normalized","current-normalized",851723724));
var data_tree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48700__$1,new cljs.core.Keyword(null,"data-tree","data-tree",1311167582));
var this$__$1 = this;
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","output-tree","ui/output-tree",-491226343),cljs.core.PersistentArrayMap.EMPTY], null),current_normalized,data_tree], 0));
});})(x48698_49444))
;

x48698_49444.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x48698_49444.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x48698_49444){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x48698_49444))
;

x48698_49444.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x48698_49444.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x48698_49444){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","batch?","com.wsscode.pathom.connect/batch?",-427062659),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","output-tree","ui/output-tree",-491226343),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.ui.expandable_tree.ExpandableTree)], null)], null);
});})(x48698_49444))
;


com.wsscode.pathom.viz.index_explorer.ResolverView.cljs$lang$type = true;

com.wsscode.pathom.viz.index_explorer.ResolverView.cljs$lang$ctorStr = "com.wsscode.pathom.viz.index-explorer/ResolverView";

com.wsscode.pathom.viz.index_explorer.ResolverView.cljs$lang$ctorPrWriter = (function (this__44534__auto__,writer__44535__auto__,opt__44536__auto__){
return cljs.core._write(writer__44535__auto__,"com.wsscode.pathom.viz.index-explorer/ResolverView");
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
var this__44531__auto__ = this;
React.Component.apply(this__44531__auto__,arguments);

if((!((this__44531__auto__.initLocalState == null)))){
this__44531__auto__.state = this__44531__auto__.initLocalState();
} else {
this__44531__auto__.state = ({});
}

return this__44531__auto__;
});

var G__48704_49445 = com.wsscode.pathom.viz.index_explorer.MutationView.prototype;
var G__48705_49446 = React.Component.prototype;
var G__48706_49447 = fulcro.client.primitives.default_component_prototype;
goog.object.extend(G__48704_49445,G__48705_49446,G__48706_49447);
}

fulcro.client.primitives._register_component_BANG_(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","MutationView","com.wsscode.pathom.viz.index-explorer/MutationView",1198577335),com.wsscode.pathom.viz.index_explorer.MutationView);

var x48707_49448 = com.wsscode.pathom.viz.index_explorer.MutationView.prototype;
x48707_49448.render = ((function (x48707_49448){
return (function (){
var this__43449__auto__ = this;
var this$ = this__43449__auto__;
var _STAR_reconciler_STAR__orig_val__48708 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__48709 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__48710 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__48711 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__48712 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__48713 = fulcro.client.primitives.get_reconciler(this__43449__auto__);
var _STAR_depth_STAR__temp_val__48714 = (fulcro.client.primitives.depth(this__43449__auto__) + (1));
var _STAR_shared_STAR__temp_val__48715 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__43449__auto__);
var _STAR_instrument_STAR__temp_val__48716 = fulcro.client.primitives.instrument(this__43449__auto__);
var _STAR_parent_STAR__temp_val__48717 = this__43449__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__48713;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__48714;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__48715;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__48716;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__48717;

try{var map__48718 = fulcro.client.primitives.props(this$);
var map__48718__$1 = (((((!((map__48718 == null))))?(((((map__48718.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48718.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48718):map__48718);
var sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48718__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48718__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795));
var output = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48718__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303));
var mutation_params_tree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48718__$1,new cljs.core.Keyword("ui","mutation-params-tree","ui/mutation-params-tree",-1729279365));
var mutation_output_tree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48718__$1,new cljs.core.Keyword("ui","mutation-output-tree","ui/mutation-output-tree",-208190980));
var G__48720 = com.wsscode.pathom.viz.ui.kit.gc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".flex",".flex",-73425686)], 0));
var G__48721 = fulcro.client.localized_dom.h1.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".title",".title",-416997657),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)], 0));
var G__48722 = (function (){var G__48723 = com.wsscode.pathom.viz.ui.kit.gc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".flex",".flex",-73425686),new cljs.core.Keyword(null,".scrollbars",".scrollbars",-1193970120),new cljs.core.Keyword(null,".nowrap",".nowrap",-784360447)], 0));
var G__48724 = fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.wsscode.pathom.viz.ui.kit.gc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".flex",".flex",-73425686)], 0)),(cljs.core.truth_(params)?(function (){var G__48727 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","panel-title","com.wsscode.pathom.viz.ui.kit/panel-title",1529445284),"Params"], null);
var G__48728 = (function (){var G__48729 = mutation_params_tree;
var G__48730 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.viz.ui.expandable-tree","root","com.wsscode.pathom.viz.ui.expandable-tree/root",-788021653),edn_query_language.core.query__GT_ast(params),new cljs.core.Keyword("com.wsscode.pathom.viz.ui.expandable-tree","render","com.wsscode.pathom.viz.ui.expandable-tree/render",918872218),fulcro.client.primitives.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"render","render",-1408033454)),new cljs.core.Keyword("com.wsscode.pathom.viz.ui.expandable-tree","sort-by","com.wsscode.pathom.viz.ui.expandable-tree/sort-by",1511051281),new cljs.core.Keyword(null,"key","key",-1516042587)], null);
return (com.wsscode.pathom.viz.ui.expandable_tree.expandable_tree.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.expandable_tree.expandable_tree.cljs$core$IFn$_invoke$arity$2(G__48729,G__48730) : com.wsscode.pathom.viz.ui.expandable_tree.expandable_tree.call(null,G__48729,G__48730));
})();
return (com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2(G__48727,G__48728) : com.wsscode.pathom.viz.ui.kit.panel.call(null,G__48727,G__48728));
})():null),com.wsscode.pathom.viz.index_explorer.render_plugin_extension(this$,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","plugin-render-to-mutation-view-left","com.wsscode.pathom.viz.index-explorer/plugin-render-to-mutation-view-left",-356992926))], 0));
var G__48725 = fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"24px"], null)], null)], 0));
var G__48726 = fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.wsscode.pathom.viz.ui.kit.gc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".flex",".flex",-73425686)], 0)),(cljs.core.truth_(output)?(function (){var G__48731 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","panel-title","com.wsscode.pathom.viz.ui.kit/panel-title",1529445284),"Output"], null);
var G__48732 = (function (){var G__48733 = mutation_output_tree;
var G__48734 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.viz.ui.expandable-tree","root","com.wsscode.pathom.viz.ui.expandable-tree/root",-788021653),edn_query_language.core.query__GT_ast(output),new cljs.core.Keyword("com.wsscode.pathom.viz.ui.expandable-tree","render","com.wsscode.pathom.viz.ui.expandable-tree/render",918872218),fulcro.client.primitives.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"render","render",-1408033454)),new cljs.core.Keyword("com.wsscode.pathom.viz.ui.expandable-tree","sort-by","com.wsscode.pathom.viz.ui.expandable-tree/sort-by",1511051281),new cljs.core.Keyword(null,"key","key",-1516042587)], null);
return (com.wsscode.pathom.viz.ui.expandable_tree.expandable_tree.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.expandable_tree.expandable_tree.cljs$core$IFn$_invoke$arity$2(G__48733,G__48734) : com.wsscode.pathom.viz.ui.expandable_tree.expandable_tree.call(null,G__48733,G__48734));
})();
return (com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2(G__48731,G__48732) : com.wsscode.pathom.viz.ui.kit.panel.call(null,G__48731,G__48732));
})():null),com.wsscode.pathom.viz.index_explorer.render_plugin_extension(this$,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","plugin-render-to-mutation-view-right","com.wsscode.pathom.viz.index-explorer/plugin-render-to-mutation-view-right",1791875010))], 0));
return (com.wsscode.pathom.viz.ui.kit.row.cljs$core$IFn$_invoke$arity$4 ? com.wsscode.pathom.viz.ui.kit.row.cljs$core$IFn$_invoke$arity$4(G__48723,G__48724,G__48725,G__48726) : com.wsscode.pathom.viz.ui.kit.row.call(null,G__48723,G__48724,G__48725,G__48726));
})();
return (com.wsscode.pathom.viz.ui.kit.column.cljs$core$IFn$_invoke$arity$3 ? com.wsscode.pathom.viz.ui.kit.column.cljs$core$IFn$_invoke$arity$3(G__48720,G__48721,G__48722) : com.wsscode.pathom.viz.ui.kit.column.call(null,G__48720,G__48721,G__48722));
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__48712;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__48711;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__48710;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__48709;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__48708;
}});})(x48707_49448))
;

x48707_49448.initLocalState = ((function (x48707_49448){
return (function (){
var this$ = this;
var ret__43424__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"render","render",-1408033454),((function (this$,x48707_49448){
return (function (p__48735){
var map__48736 = p__48735;
var map__48736__$1 = (((((!((map__48736 == null))))?(((((map__48736.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48736.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48736):map__48736);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48736__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var G__48738 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),key], null);
var G__48739 = fulcro.client.primitives.get_computed.cljs$core$IFn$_invoke$arity$1(fulcro.client.primitives.props(this$));
return (com.wsscode.pathom.viz.index_explorer.attribute_link.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.attribute_link.cljs$core$IFn$_invoke$arity$2(G__48738,G__48739) : com.wsscode.pathom.viz.index_explorer.attribute_link.call(null,G__48738,G__48739));
});})(this$,x48707_49448))
], null);
var obj48741 = ({"fulcro$state":ret__43424__auto__});
return obj48741;
});})(x48707_49448))
;


com.wsscode.pathom.viz.index_explorer.MutationView.prototype.constructor = com.wsscode.pathom.viz.index_explorer.MutationView;

com.wsscode.pathom.viz.index_explorer.MutationView.prototype.constructor.displayName = "com.wsscode.pathom.viz.index-explorer/MutationView";

com.wsscode.pathom.viz.index_explorer.MutationView.prototype.fulcro$isComponent = true;

var x48742_49449 = com.wsscode.pathom.viz.index_explorer.MutationView;
x48742_49449.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x48742_49449.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x48742_49449){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".title",".title",-416997657),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),com.wsscode.pathom.viz.index_explorer.color_mutation], null),com.wsscode.pathom.viz.ui.kit.css_header,com.wsscode.pathom.viz.ui.kit.text_base], null)], null);
});})(x48742_49449))
;

x48742_49449.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x48742_49449){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x48742_49449))
;

x48742_49449.fulcro$client$primitives$IPreMerge$ = cljs.core.PROTOCOL_SENTINEL;

x48742_49449.fulcro$client$primitives$IPreMerge$pre_merge_STAR_$arity$2 = ((function (x48742_49449){
return (function (this$,p__48743){
var map__48744 = p__48743;
var map__48744__$1 = (((((!((map__48744 == null))))?(((((map__48744.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48744.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48744):map__48744);
var current_normalized = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48744__$1,new cljs.core.Keyword(null,"current-normalized","current-normalized",851723724));
var data_tree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48744__$1,new cljs.core.Keyword(null,"data-tree","data-tree",1311167582));
var this$__$1 = this;
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("ui","mutation-params-tree","ui/mutation-params-tree",-1729279365),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("ui","mutation-output-tree","ui/mutation-output-tree",-208190980),cljs.core.PersistentArrayMap.EMPTY], null),current_normalized,data_tree], 0));
});})(x48742_49449))
;

x48742_49449.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x48742_49449.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x48742_49449){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutation-sym","com.wsscode.pathom.viz.index-explorer/mutation-sym",-191280951),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutation-sym","com.wsscode.pathom.viz.index-explorer/mutation-sym",-191280951).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x48742_49449))
;

x48742_49449.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x48742_49449.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x48742_49449){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutation-sym","com.wsscode.pathom.viz.index-explorer/mutation-sym",-191280951),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","mutation-params-tree","ui/mutation-params-tree",-1729279365),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.ui.expandable_tree.ExpandableTree)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","mutation-output-tree","ui/mutation-output-tree",-208190980),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.ui.expandable_tree.ExpandableTree)], null)], null);
});})(x48742_49449))
;


var x48746_49450 = com.wsscode.pathom.viz.index_explorer.MutationView.prototype;
x48746_49450.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x48746_49450.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x48746_49450){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".title",".title",-416997657),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),com.wsscode.pathom.viz.index_explorer.color_mutation], null),com.wsscode.pathom.viz.ui.kit.css_header,com.wsscode.pathom.viz.ui.kit.text_base], null)], null);
});})(x48746_49450))
;

x48746_49450.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x48746_49450){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x48746_49450))
;

x48746_49450.fulcro$client$primitives$IPreMerge$ = cljs.core.PROTOCOL_SENTINEL;

x48746_49450.fulcro$client$primitives$IPreMerge$pre_merge_STAR_$arity$2 = ((function (x48746_49450){
return (function (this$,p__48747){
var map__48748 = p__48747;
var map__48748__$1 = (((((!((map__48748 == null))))?(((((map__48748.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48748.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48748):map__48748);
var current_normalized = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48748__$1,new cljs.core.Keyword(null,"current-normalized","current-normalized",851723724));
var data_tree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48748__$1,new cljs.core.Keyword(null,"data-tree","data-tree",1311167582));
var this$__$1 = this;
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("ui","mutation-params-tree","ui/mutation-params-tree",-1729279365),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("ui","mutation-output-tree","ui/mutation-output-tree",-208190980),cljs.core.PersistentArrayMap.EMPTY], null),current_normalized,data_tree], 0));
});})(x48746_49450))
;

x48746_49450.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x48746_49450.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x48746_49450){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutation-sym","com.wsscode.pathom.viz.index-explorer/mutation-sym",-191280951),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutation-sym","com.wsscode.pathom.viz.index-explorer/mutation-sym",-191280951).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x48746_49450))
;

x48746_49450.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x48746_49450.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x48746_49450){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutation-sym","com.wsscode.pathom.viz.index-explorer/mutation-sym",-191280951),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","mutation-params-tree","ui/mutation-params-tree",-1729279365),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.ui.expandable_tree.ExpandableTree)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","mutation-output-tree","ui/mutation-output-tree",-208190980),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.ui.expandable_tree.ExpandableTree)], null)], null);
});})(x48746_49450))
;


com.wsscode.pathom.viz.index_explorer.MutationView.cljs$lang$type = true;

com.wsscode.pathom.viz.index_explorer.MutationView.cljs$lang$ctorStr = "com.wsscode.pathom.viz.index-explorer/MutationView";

com.wsscode.pathom.viz.index_explorer.MutationView.cljs$lang$ctorPrWriter = (function (this__44534__auto__,writer__44535__auto__,opt__44536__auto__){
return cljs.core._write(writer__44535__auto__,"com.wsscode.pathom.viz.index-explorer/MutationView");
});
goog.object.set(com.wsscode.pathom.viz.index_explorer.MutationView,"contextType",com.wsscode.pathom.viz.index_explorer.ExtensionContext);
com.wsscode.pathom.viz.index_explorer.mutation_view = fulcro.client.primitives.factory.cljs$core$IFn$_invoke$arity$2(com.wsscode.pathom.viz.index_explorer.MutationView,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581)], null));
com.wsscode.pathom.viz.index_explorer.realize_references = (function com$wsscode$pathom$viz$index_explorer$realize_references(state,coll){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__48750_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,p1__48750_SHARP_);
}),coll);
});
com.wsscode.pathom.viz.index_explorer.max_search_results = (100);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-type","com.wsscode.pathom.viz.index-explorer/search-type",-1615224063),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-type-resolver","com.wsscode.pathom.viz.index-explorer/search-type-resolver",1588028676),"null",new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-type-mutation","com.wsscode.pathom.viz.index-explorer/search-type-mutation",-68441744),"null",new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-type-attribute","com.wsscode.pathom.viz.index-explorer/search-type-attribute",-62795524),"null"], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-type-resolver","com.wsscode.pathom.viz.index-explorer/search-type-resolver",1588028676),null,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-type-mutation","com.wsscode.pathom.viz.index-explorer/search-type-mutation",-68441744),null,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-type-attribute","com.wsscode.pathom.viz.index-explorer/search-type-attribute",-62795524),null], null), null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-value","com.wsscode.pathom.viz.index-explorer/search-value",-337129957),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-index-item","com.wsscode.pathom.viz.index-explorer/search-index-item",-560879594),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.fuzzy","string","com.wsscode.fuzzy/string",320074815),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-value","com.wsscode.pathom.viz.index-explorer/search-value",-337129957),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-type","com.wsscode.pathom.viz.index-explorer/search-type",-1615224063)], null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.fuzzy","match-hl","com.wsscode.fuzzy/match-hl",-611317739)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__48751){
return cljs.core.map_QMARK_(G__48751);
}),(function (G__48751){
return cljs.core.contains_QMARK_(G__48751,new cljs.core.Keyword("com.wsscode.fuzzy","string","com.wsscode.fuzzy/string",320074815));
}),(function (G__48751){
return cljs.core.contains_QMARK_(G__48751,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-value","com.wsscode.pathom.viz.index-explorer/search-value",-337129957));
}),(function (G__48751){
return cljs.core.contains_QMARK_(G__48751,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-type","com.wsscode.pathom.viz.index-explorer/search-type",-1615224063));
})], null),(function (G__48751){
return ((cljs.core.map_QMARK_(G__48751)) && (cljs.core.contains_QMARK_(G__48751,new cljs.core.Keyword("com.wsscode.fuzzy","string","com.wsscode.fuzzy/string",320074815))) && (cljs.core.contains_QMARK_(G__48751,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-value","com.wsscode.pathom.viz.index-explorer/search-value",-337129957))) && (cljs.core.contains_QMARK_(G__48751,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-type","com.wsscode.pathom.viz.index-explorer/search-type",-1615224063))));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.fuzzy","match-hl","com.wsscode.fuzzy/match-hl",-611317739)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.fuzzy","string","com.wsscode.fuzzy/string",320074815),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-value","com.wsscode.pathom.viz.index-explorer/search-value",-337129957),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-type","com.wsscode.pathom.viz.index-explorer/search-type",-1615224063)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.fuzzy","string","com.wsscode.fuzzy/string",320074815),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-value","com.wsscode.pathom.viz.index-explorer/search-value",-337129957),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-type","com.wsscode.pathom.viz.index-explorer/search-type",-1615224063)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.fuzzy","string","com.wsscode.fuzzy/string",320074815),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-value","com.wsscode.pathom.viz.index-explorer/search-value",-337129957),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-type","com.wsscode.pathom.viz.index-explorer/search-type",-1615224063)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.fuzzy","match-hl","com.wsscode.fuzzy/match-hl",-611317739)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("com.wsscode.fuzzy","string","com.wsscode.fuzzy/string",320074815))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-value","com.wsscode.pathom.viz.index-explorer/search-value",-337129957))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-type","com.wsscode.pathom.viz.index-explorer/search-type",-1615224063)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.fuzzy","match-hl","com.wsscode.fuzzy/match-hl",-611317739)], null)])));
com.wsscode.pathom.viz.index_explorer.active_search_QMARK_ = (function com$wsscode$pathom$viz$index_explorer$active_search_QMARK_(text){
return (cljs.core.count(text) > (2));
});
fulcro.client.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("com.wsscode.pathom.viz.index-explorer","search","com.wsscode.pathom.viz.index-explorer/search",-1081698050,null),(function (fulcro_incoming_env,_,p__48752){
var map__48753 = p__48752;
var map__48753__$1 = (((((!((map__48753 == null))))?(((((map__48753.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48753.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48753):map__48753);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48753__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","text","com.wsscode.pathom.viz.index-explorer/text",-1775290484));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var map__48755 = fulcro_incoming_env;
var map__48755__$1 = (((((!((map__48755 == null))))?(((((map__48755.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48755.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48755):map__48755);
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48755__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48755__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__48755,map__48755__$1,ref,state,map__48753,map__48753__$1,text){
return (function (){
var items = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ref,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-vector","com.wsscode.pathom.viz.index-explorer/search-vector",-471470935)));
var fuzzy_res = ((com.wsscode.pathom.viz.index_explorer.active_search_QMARK_(text))?com.wsscode.fuzzy.fuzzy_match(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.fuzzy","options","com.wsscode.fuzzy/options",773495630),items,new cljs.core.Keyword("com.wsscode.fuzzy","search-input","com.wsscode.fuzzy/search-input",897823168),text], null)):cljs.core.PersistentVector.EMPTY);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,fulcro.client.primitives.merge_component,com.wsscode.pathom.viz.index_explorer.SearchEverything,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-results","com.wsscode.pathom.viz.index-explorer/search-results",321731333),cljs.core.vec(cljs.core.take.cljs$core$IFn$_invoke$arity$2(com.wsscode.pathom.viz.index_explorer.max_search_results,fuzzy_res))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ref], null)));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.update_in,ref,cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","text","com.wsscode.pathom.viz.index-explorer/text",-1775290484),text], 0));
});})(map__48755,map__48755__$1,ref,state,map__48753,map__48753__$1,text))
], null);
})()], 0));
}));
com.wsscode.pathom.viz.index_explorer.remove_not_found = (function com$wsscode$pathom$viz$index_explorer$remove_not_found(x){
return com.wsscode.pathom.core.transduce_maps(cljs.core.remove.cljs$core$IFn$_invoke$arity$1((function (p__48757){
var vec__48758 = p__48757;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48758,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48758,(1),null);
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
var this__44531__auto__ = this;
React.Component.apply(this__44531__auto__,arguments);

if((!((this__44531__auto__.initLocalState == null)))){
this__44531__auto__.state = this__44531__auto__.initLocalState();
} else {
this__44531__auto__.state = ({});
}

return this__44531__auto__;
});

var G__48763_49451 = com.wsscode.pathom.viz.index_explorer.AllAttributesList.prototype;
var G__48764_49452 = React.Component.prototype;
var G__48765_49453 = fulcro.client.primitives.default_component_prototype;
goog.object.extend(G__48763_49451,G__48764_49452,G__48765_49453);
}

fulcro.client.primitives._register_component_BANG_(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","AllAttributesList","com.wsscode.pathom.viz.index-explorer/AllAttributesList",741873297),com.wsscode.pathom.viz.index_explorer.AllAttributesList);

var x48766_49454 = com.wsscode.pathom.viz.index_explorer.AllAttributesList.prototype;
x48766_49454.render = ((function (x48766_49454){
return (function (){
var this__43449__auto__ = this;
var this$ = this__43449__auto__;
var _STAR_reconciler_STAR__orig_val__48767 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__48768 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__48769 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__48770 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__48771 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__48772 = fulcro.client.primitives.get_reconciler(this__43449__auto__);
var _STAR_depth_STAR__temp_val__48773 = (fulcro.client.primitives.depth(this__43449__auto__) + (1));
var _STAR_shared_STAR__temp_val__48774 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__43449__auto__);
var _STAR_instrument_STAR__temp_val__48775 = fulcro.client.primitives.instrument(this__43449__auto__);
var _STAR_parent_STAR__temp_val__48776 = this__43449__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__48772;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__48773;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__48774;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__48775;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__48776;

try{var map__48777 = fulcro.client.primitives.props(this$);
var map__48777__$1 = (((((!((map__48777 == null))))?(((((map__48777.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48777.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48777):map__48777);
var props = map__48777__$1;
var attributes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48777__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attributes","com.wsscode.pathom.viz.index-explorer/attributes",-67264281));
var computed = fulcro.client.primitives.get_computed.cljs$core$IFn$_invoke$arity$1(this$);
var G__48779 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(props,new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","title","com.wsscode.pathom.viz.ui.kit/title",-1326329402),"Attributes");
var G__48780 = fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__48781 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),cljs.core.PersistentHashSet.EMPTY], null);
var G__48782 = computed;
return (com.wsscode.pathom.viz.index_explorer.attribute_link.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.attribute_link.cljs$core$IFn$_invoke$arity$2(G__48781,G__48782) : com.wsscode.pathom.viz.index_explorer.attribute_link.call(null,G__48781,G__48782));
})(),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.filter.cljs$core$IFn$_invoke$arity$1(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword_QMARK_,new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075))),cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (G__48779,map__48777,map__48777__$1,props,attributes,computed,_STAR_reconciler_STAR__orig_val__48767,_STAR_depth_STAR__orig_val__48768,_STAR_shared_STAR__orig_val__48769,_STAR_instrument_STAR__orig_val__48770,_STAR_parent_STAR__orig_val__48771,_STAR_reconciler_STAR__temp_val__48772,_STAR_depth_STAR__temp_val__48773,_STAR_shared_STAR__temp_val__48774,_STAR_instrument_STAR__temp_val__48775,_STAR_parent_STAR__temp_val__48776,this$,this__43449__auto__,x48766_49454){
return (function (p__48783){
var map__48784 = p__48783;
var map__48784__$1 = (((((!((map__48784 == null))))?(((((map__48784.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48784.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48784):map__48784);
var attribute = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48784__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075));
var G__48786 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),attribute,new cljs.core.Keyword(null,"react-key","react-key",1337881348),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attribute], 0))], null);
var G__48787 = computed;
return (com.wsscode.pathom.viz.index_explorer.attribute_link.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.attribute_link.cljs$core$IFn$_invoke$arity$2(G__48786,G__48787) : com.wsscode.pathom.viz.index_explorer.attribute_link.call(null,G__48786,G__48787));
});})(G__48779,map__48777,map__48777__$1,props,attributes,computed,_STAR_reconciler_STAR__orig_val__48767,_STAR_depth_STAR__orig_val__48768,_STAR_shared_STAR__orig_val__48769,_STAR_instrument_STAR__orig_val__48770,_STAR_parent_STAR__orig_val__48771,_STAR_reconciler_STAR__temp_val__48772,_STAR_depth_STAR__temp_val__48773,_STAR_shared_STAR__temp_val__48774,_STAR_instrument_STAR__temp_val__48775,_STAR_parent_STAR__temp_val__48776,this$,this__43449__auto__,x48766_49454))
)),attributes)], 0));
return (com.wsscode.pathom.viz.ui.kit.collapsible_box.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.collapsible_box.cljs$core$IFn$_invoke$arity$2(G__48779,G__48780) : com.wsscode.pathom.viz.ui.kit.collapsible_box.call(null,G__48779,G__48780));
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__48771;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__48770;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__48769;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__48768;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__48767;
}});})(x48766_49454))
;


com.wsscode.pathom.viz.index_explorer.AllAttributesList.prototype.constructor = com.wsscode.pathom.viz.index_explorer.AllAttributesList;

com.wsscode.pathom.viz.index_explorer.AllAttributesList.prototype.constructor.displayName = "com.wsscode.pathom.viz.index-explorer/AllAttributesList";

com.wsscode.pathom.viz.index_explorer.AllAttributesList.prototype.fulcro$isComponent = true;

var x48788_49455 = com.wsscode.pathom.viz.index_explorer.AllAttributesList;


var x48789_49456 = com.wsscode.pathom.viz.index_explorer.AllAttributesList.prototype;


com.wsscode.pathom.viz.index_explorer.AllAttributesList.cljs$lang$type = true;

com.wsscode.pathom.viz.index_explorer.AllAttributesList.cljs$lang$ctorStr = "com.wsscode.pathom.viz.index-explorer/AllAttributesList";

com.wsscode.pathom.viz.index_explorer.AllAttributesList.cljs$lang$ctorPrWriter = (function (this__44534__auto__,writer__44535__auto__,opt__44536__auto__){
return cljs.core._write(writer__44535__auto__,"com.wsscode.pathom.viz.index-explorer/AllAttributesList");
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
var this__44531__auto__ = this;
React.Component.apply(this__44531__auto__,arguments);

if((!((this__44531__auto__.initLocalState == null)))){
this__44531__auto__.state = this__44531__auto__.initLocalState();
} else {
this__44531__auto__.state = ({});
}

return this__44531__auto__;
});

var G__48793_49457 = com.wsscode.pathom.viz.index_explorer.AllResolversList.prototype;
var G__48794_49458 = React.Component.prototype;
var G__48795_49459 = fulcro.client.primitives.default_component_prototype;
goog.object.extend(G__48793_49457,G__48794_49458,G__48795_49459);
}

fulcro.client.primitives._register_component_BANG_(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","AllResolversList","com.wsscode.pathom.viz.index-explorer/AllResolversList",1219737218),com.wsscode.pathom.viz.index_explorer.AllResolversList);

var x48796_49460 = com.wsscode.pathom.viz.index_explorer.AllResolversList.prototype;
x48796_49460.render = ((function (x48796_49460){
return (function (){
var this__43449__auto__ = this;
var this$ = this__43449__auto__;
var _STAR_reconciler_STAR__orig_val__48797 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__48798 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__48799 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__48800 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__48801 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__48802 = fulcro.client.primitives.get_reconciler(this__43449__auto__);
var _STAR_depth_STAR__temp_val__48803 = (fulcro.client.primitives.depth(this__43449__auto__) + (1));
var _STAR_shared_STAR__temp_val__48804 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__43449__auto__);
var _STAR_instrument_STAR__temp_val__48805 = fulcro.client.primitives.instrument(this__43449__auto__);
var _STAR_parent_STAR__temp_val__48806 = this__43449__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__48802;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__48803;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__48804;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__48805;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__48806;

try{var map__48807 = fulcro.client.primitives.props(this$);
var map__48807__$1 = (((((!((map__48807 == null))))?(((((map__48807.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48807.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48807):map__48807);
var props = map__48807__$1;
var resolvers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48807__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","resolvers","com.wsscode.pathom.viz.index-explorer/resolvers",-1064744669));
var computed = fulcro.client.primitives.get_computed.cljs$core$IFn$_invoke$arity$1(this$);
var G__48809 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(props,new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","title","com.wsscode.pathom.viz.ui.kit/title",-1326329402),"Resolvers");
var G__48810 = fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (G__48809,map__48807,map__48807__$1,props,resolvers,computed,_STAR_reconciler_STAR__orig_val__48797,_STAR_depth_STAR__orig_val__48798,_STAR_shared_STAR__orig_val__48799,_STAR_instrument_STAR__orig_val__48800,_STAR_parent_STAR__orig_val__48801,_STAR_reconciler_STAR__temp_val__48802,_STAR_depth_STAR__temp_val__48803,_STAR_shared_STAR__temp_val__48804,_STAR_instrument_STAR__temp_val__48805,_STAR_parent_STAR__temp_val__48806,this$,this__43449__auto__,x48796_49460){
return (function (p1__48790_SHARP_){
return (com.wsscode.pathom.viz.index_explorer.resolver_link.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.resolver_link.cljs$core$IFn$_invoke$arity$2(p1__48790_SHARP_,computed) : com.wsscode.pathom.viz.index_explorer.resolver_link.call(null,p1__48790_SHARP_,computed));
});})(G__48809,map__48807,map__48807__$1,props,resolvers,computed,_STAR_reconciler_STAR__orig_val__48797,_STAR_depth_STAR__orig_val__48798,_STAR_shared_STAR__orig_val__48799,_STAR_instrument_STAR__orig_val__48800,_STAR_parent_STAR__orig_val__48801,_STAR_reconciler_STAR__temp_val__48802,_STAR_depth_STAR__temp_val__48803,_STAR_shared_STAR__temp_val__48804,_STAR_instrument_STAR__temp_val__48805,_STAR_parent_STAR__temp_val__48806,this$,this__43449__auto__,x48796_49460))
,resolvers)], 0));
return (com.wsscode.pathom.viz.ui.kit.collapsible_box.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.collapsible_box.cljs$core$IFn$_invoke$arity$2(G__48809,G__48810) : com.wsscode.pathom.viz.ui.kit.collapsible_box.call(null,G__48809,G__48810));
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__48801;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__48800;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__48799;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__48798;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__48797;
}});})(x48796_49460))
;


com.wsscode.pathom.viz.index_explorer.AllResolversList.prototype.constructor = com.wsscode.pathom.viz.index_explorer.AllResolversList;

com.wsscode.pathom.viz.index_explorer.AllResolversList.prototype.constructor.displayName = "com.wsscode.pathom.viz.index-explorer/AllResolversList";

com.wsscode.pathom.viz.index_explorer.AllResolversList.prototype.fulcro$isComponent = true;

var x48811_49461 = com.wsscode.pathom.viz.index_explorer.AllResolversList;


var x48812_49462 = com.wsscode.pathom.viz.index_explorer.AllResolversList.prototype;


com.wsscode.pathom.viz.index_explorer.AllResolversList.cljs$lang$type = true;

com.wsscode.pathom.viz.index_explorer.AllResolversList.cljs$lang$ctorStr = "com.wsscode.pathom.viz.index-explorer/AllResolversList";

com.wsscode.pathom.viz.index_explorer.AllResolversList.cljs$lang$ctorPrWriter = (function (this__44534__auto__,writer__44535__auto__,opt__44536__auto__){
return cljs.core._write(writer__44535__auto__,"com.wsscode.pathom.viz.index-explorer/AllResolversList");
});
com.wsscode.pathom.viz.index_explorer.all_resolvers_list = fulcro.client.primitives.computed_factory.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.AllResolversList);
if((typeof com !== 'undefined') && (typeof com.wsscode !== 'undefined') && (typeof com.wsscode.pathom !== 'undefined') && (typeof com.wsscode.pathom.viz !== 'undefined') && (typeof com.wsscode.pathom.viz.index_explorer !== 'undefined') && (typeof com.wsscode.pathom.viz.index_explorer.AllMutationsList !== 'undefined')){
} else {
/**
 * @constructor
 * @nocollapse
 */
com.wsscode.pathom.viz.index_explorer.AllMutationsList = (function com$wsscode$pathom$viz$index_explorer$AllMutationsList(){
var this__44531__auto__ = this;
React.Component.apply(this__44531__auto__,arguments);

if((!((this__44531__auto__.initLocalState == null)))){
this__44531__auto__.state = this__44531__auto__.initLocalState();
} else {
this__44531__auto__.state = ({});
}

return this__44531__auto__;
});

var G__48816_49463 = com.wsscode.pathom.viz.index_explorer.AllMutationsList.prototype;
var G__48817_49464 = React.Component.prototype;
var G__48818_49465 = fulcro.client.primitives.default_component_prototype;
goog.object.extend(G__48816_49463,G__48817_49464,G__48818_49465);
}

fulcro.client.primitives._register_component_BANG_(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","AllMutationsList","com.wsscode.pathom.viz.index-explorer/AllMutationsList",-1767454340),com.wsscode.pathom.viz.index_explorer.AllMutationsList);

var x48819_49466 = com.wsscode.pathom.viz.index_explorer.AllMutationsList.prototype;
x48819_49466.render = ((function (x48819_49466){
return (function (){
var this__43449__auto__ = this;
var this$ = this__43449__auto__;
var _STAR_reconciler_STAR__orig_val__48820 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__48821 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__48822 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__48823 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__48824 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__48825 = fulcro.client.primitives.get_reconciler(this__43449__auto__);
var _STAR_depth_STAR__temp_val__48826 = (fulcro.client.primitives.depth(this__43449__auto__) + (1));
var _STAR_shared_STAR__temp_val__48827 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__43449__auto__);
var _STAR_instrument_STAR__temp_val__48828 = fulcro.client.primitives.instrument(this__43449__auto__);
var _STAR_parent_STAR__temp_val__48829 = this__43449__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__48825;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__48826;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__48827;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__48828;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__48829;

try{var map__48830 = fulcro.client.primitives.props(this$);
var map__48830__$1 = (((((!((map__48830 == null))))?(((((map__48830.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48830.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48830):map__48830);
var props = map__48830__$1;
var mutations = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48830__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutations","com.wsscode.pathom.viz.index-explorer/mutations",329050290));
var computed = fulcro.client.primitives.get_computed.cljs$core$IFn$_invoke$arity$1(this$);
var G__48832 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(props,new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","title","com.wsscode.pathom.viz.ui.kit/title",-1326329402),"Mutations");
var G__48833 = fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (G__48832,map__48830,map__48830__$1,props,mutations,computed,_STAR_reconciler_STAR__orig_val__48820,_STAR_depth_STAR__orig_val__48821,_STAR_shared_STAR__orig_val__48822,_STAR_instrument_STAR__orig_val__48823,_STAR_parent_STAR__orig_val__48824,_STAR_reconciler_STAR__temp_val__48825,_STAR_depth_STAR__temp_val__48826,_STAR_shared_STAR__temp_val__48827,_STAR_instrument_STAR__temp_val__48828,_STAR_parent_STAR__temp_val__48829,this$,this__43449__auto__,x48819_49466){
return (function (p1__48813_SHARP_){
return (com.wsscode.pathom.viz.index_explorer.mutation_link.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.mutation_link.cljs$core$IFn$_invoke$arity$2(p1__48813_SHARP_,computed) : com.wsscode.pathom.viz.index_explorer.mutation_link.call(null,p1__48813_SHARP_,computed));
});})(G__48832,map__48830,map__48830__$1,props,mutations,computed,_STAR_reconciler_STAR__orig_val__48820,_STAR_depth_STAR__orig_val__48821,_STAR_shared_STAR__orig_val__48822,_STAR_instrument_STAR__orig_val__48823,_STAR_parent_STAR__orig_val__48824,_STAR_reconciler_STAR__temp_val__48825,_STAR_depth_STAR__temp_val__48826,_STAR_shared_STAR__temp_val__48827,_STAR_instrument_STAR__temp_val__48828,_STAR_parent_STAR__temp_val__48829,this$,this__43449__auto__,x48819_49466))
,mutations)], 0));
return (com.wsscode.pathom.viz.ui.kit.collapsible_box.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.collapsible_box.cljs$core$IFn$_invoke$arity$2(G__48832,G__48833) : com.wsscode.pathom.viz.ui.kit.collapsible_box.call(null,G__48832,G__48833));
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__48824;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__48823;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__48822;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__48821;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__48820;
}});})(x48819_49466))
;


com.wsscode.pathom.viz.index_explorer.AllMutationsList.prototype.constructor = com.wsscode.pathom.viz.index_explorer.AllMutationsList;

com.wsscode.pathom.viz.index_explorer.AllMutationsList.prototype.constructor.displayName = "com.wsscode.pathom.viz.index-explorer/AllMutationsList";

com.wsscode.pathom.viz.index_explorer.AllMutationsList.prototype.fulcro$isComponent = true;

var x48834_49467 = com.wsscode.pathom.viz.index_explorer.AllMutationsList;


var x48835_49468 = com.wsscode.pathom.viz.index_explorer.AllMutationsList.prototype;


com.wsscode.pathom.viz.index_explorer.AllMutationsList.cljs$lang$type = true;

com.wsscode.pathom.viz.index_explorer.AllMutationsList.cljs$lang$ctorStr = "com.wsscode.pathom.viz.index-explorer/AllMutationsList";

com.wsscode.pathom.viz.index_explorer.AllMutationsList.cljs$lang$ctorPrWriter = (function (this__44534__auto__,writer__44535__auto__,opt__44536__auto__){
return cljs.core._write(writer__44535__auto__,"com.wsscode.pathom.viz.index-explorer/AllMutationsList");
});
com.wsscode.pathom.viz.index_explorer.all_mutations_list = fulcro.client.primitives.computed_factory.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.AllMutationsList);
if((typeof com !== 'undefined') && (typeof com.wsscode !== 'undefined') && (typeof com.wsscode.pathom !== 'undefined') && (typeof com.wsscode.pathom.viz !== 'undefined') && (typeof com.wsscode.pathom.viz.index_explorer !== 'undefined') && (typeof com.wsscode.pathom.viz.index_explorer.SearchEverything !== 'undefined')){
} else {
/**
 * @constructor
 * @nocollapse
 */
com.wsscode.pathom.viz.index_explorer.SearchEverything = (function com$wsscode$pathom$viz$index_explorer$SearchEverything(){
var this__44531__auto__ = this;
React.Component.apply(this__44531__auto__,arguments);

if((!((this__44531__auto__.initLocalState == null)))){
this__44531__auto__.state = this__44531__auto__.initLocalState();
} else {
this__44531__auto__.state = ({});
}

return this__44531__auto__;
});

var G__48839_49469 = com.wsscode.pathom.viz.index_explorer.SearchEverything.prototype;
var G__48840_49470 = React.Component.prototype;
var G__48841_49471 = fulcro.client.primitives.default_component_prototype;
goog.object.extend(G__48839_49469,G__48840_49470,G__48841_49471);
}

fulcro.client.primitives._register_component_BANG_(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","SearchEverything","com.wsscode.pathom.viz.index-explorer/SearchEverything",384463028),com.wsscode.pathom.viz.index_explorer.SearchEverything);

var x48842_49472 = com.wsscode.pathom.viz.index_explorer.SearchEverything.prototype;
x48842_49472.render = ((function (x48842_49472){
return (function (){
var this__43449__auto__ = this;
var this$ = this__43449__auto__;
var _STAR_reconciler_STAR__orig_val__48843 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__48844 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__48845 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__48846 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__48847 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__48848 = fulcro.client.primitives.get_reconciler(this__43449__auto__);
var _STAR_depth_STAR__temp_val__48849 = (fulcro.client.primitives.depth(this__43449__auto__) + (1));
var _STAR_shared_STAR__temp_val__48850 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__43449__auto__);
var _STAR_instrument_STAR__temp_val__48851 = fulcro.client.primitives.instrument(this__43449__auto__);
var _STAR_parent_STAR__temp_val__48852 = this__43449__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__48848;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__48849;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__48850;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__48851;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__48852;

try{var map__48853 = fulcro.client.primitives.props(this$);
var map__48853__$1 = (((((!((map__48853 == null))))?(((((map__48853.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48853.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48853):map__48853);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48853__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","text","com.wsscode.pathom.viz.index-explorer/text",-1775290484));
var search_results = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48853__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-results","com.wsscode.pathom.viz.index-explorer/search-results",321731333));
var attributes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48853__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attributes","com.wsscode.pathom.viz.index-explorer/attributes",-67264281));
var resolvers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48853__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","resolvers","com.wsscode.pathom.viz.index-explorer/resolvers",-1064744669));
var mutations = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48853__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutations","com.wsscode.pathom.viz.index-explorer/mutations",329050290));
var collapse_attributes_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48853__$1,new cljs.core.Keyword("ui","collapse-attributes?","ui/collapse-attributes?",-1581210852));
var collapse_resolvers_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48853__$1,new cljs.core.Keyword("ui","collapse-resolvers?","ui/collapse-resolvers?",-237427285));
var collapse_mutations_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48853__$1,new cljs.core.Keyword("ui","collapse-mutations?","ui/collapse-mutations?",-1463008198));
var computed = fulcro.client.primitives.get_computed.cljs$core$IFn$_invoke$arity$1(this$);
var G__48855 = com.wsscode.pathom.viz.ui.kit.gc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".flex",".flex",-73425686)], 0));
var G__48856 = (function (){var G__48858 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Filter",new cljs.core.Keyword(null,"value","value",305978217),text,new cljs.core.Keyword(null,"onChange","onChange",-312891301),fulcro.client.primitives.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"search","search",1564939822)),new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","left-icon","com.wsscode.pathom.viz.ui.kit/left-icon",-1594855964),new cljs.core.Keyword(null,"$fa-search","$fa-search",1999917289),new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","on-clear","com.wsscode.pathom.viz.ui.kit/on-clear",-221492596),((function (G__48855,map__48853,map__48853__$1,text,search_results,attributes,resolvers,mutations,collapse_attributes_QMARK_,collapse_resolvers_QMARK_,collapse_mutations_QMARK_,computed,_STAR_reconciler_STAR__orig_val__48843,_STAR_depth_STAR__orig_val__48844,_STAR_shared_STAR__orig_val__48845,_STAR_instrument_STAR__orig_val__48846,_STAR_parent_STAR__orig_val__48847,_STAR_reconciler_STAR__temp_val__48848,_STAR_depth_STAR__temp_val__48849,_STAR_shared_STAR__temp_val__48850,_STAR_instrument_STAR__temp_val__48851,_STAR_parent_STAR__temp_val__48852,this$,this__43449__auto__,x48842_49472){
return (function (){
return fulcro.client.mutations.set_value_BANG_(this$,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","text","com.wsscode.pathom.viz.index-explorer/text",-1775290484),"");
});})(G__48855,map__48853,map__48853__$1,text,search_results,attributes,resolvers,mutations,collapse_attributes_QMARK_,collapse_resolvers_QMARK_,collapse_mutations_QMARK_,computed,_STAR_reconciler_STAR__orig_val__48843,_STAR_depth_STAR__orig_val__48844,_STAR_shared_STAR__orig_val__48845,_STAR_instrument_STAR__orig_val__48846,_STAR_parent_STAR__orig_val__48847,_STAR_reconciler_STAR__temp_val__48848,_STAR_depth_STAR__temp_val__48849,_STAR_shared_STAR__temp_val__48850,_STAR_instrument_STAR__temp_val__48851,_STAR_parent_STAR__temp_val__48852,this$,this__43449__auto__,x48842_49472))
], null);
return (com.wsscode.pathom.viz.ui.kit.text_field.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom.viz.ui.kit.text_field.cljs$core$IFn$_invoke$arity$1(G__48858) : com.wsscode.pathom.viz.ui.kit.text_field.call(null,G__48858));
})();
var G__48857 = (function (){var G__48859 = com.wsscode.pathom.viz.ui.kit.gc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".flex",".flex",-73425686),new cljs.core.Keyword(null,".scrollbars",".scrollbars",-1193970120)], 0));
var G__48860 = fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),(((!(com.wsscode.pathom.viz.index_explorer.active_search_QMARK_(text))))?"none":null)], null)], null),((com.wsscode.pathom.viz.index_explorer.active_search_QMARK_(text))?cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (G__48859,G__48855,G__48856,map__48853,map__48853__$1,text,search_results,attributes,resolvers,mutations,collapse_attributes_QMARK_,collapse_resolvers_QMARK_,collapse_mutations_QMARK_,computed,_STAR_reconciler_STAR__orig_val__48843,_STAR_depth_STAR__orig_val__48844,_STAR_shared_STAR__orig_val__48845,_STAR_instrument_STAR__orig_val__48846,_STAR_parent_STAR__orig_val__48847,_STAR_reconciler_STAR__temp_val__48848,_STAR_depth_STAR__temp_val__48849,_STAR_shared_STAR__temp_val__48850,_STAR_instrument_STAR__temp_val__48851,_STAR_parent_STAR__temp_val__48852,this$,this__43449__auto__,x48842_49472){
return (function (p__48862){
var map__48863 = p__48862;
var map__48863__$1 = (((((!((map__48863 == null))))?(((((map__48863.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48863.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48863):map__48863);
var search_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48863__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-value","com.wsscode.pathom.viz.index-explorer/search-value",-337129957));
var search_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48863__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-type","com.wsscode.pathom.viz.index-explorer/search-type",-1615224063));
var match_hl = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48863__$1,new cljs.core.Keyword("com.wsscode.fuzzy","match-hl","com.wsscode.fuzzy/match-hl",-611317739));
var G__48865 = search_type;
var G__48865__$1 = (((G__48865 instanceof cljs.core.Keyword))?G__48865.fqn:null);
switch (G__48865__$1) {
case "com.wsscode.pathom.viz.index-explorer/search-type-attribute":
var G__48866 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),search_value,new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","render","com.wsscode.pathom.viz.ui.kit/render",1024565529),((function (G__48865,G__48865__$1,map__48863,map__48863__$1,search_value,search_type,match_hl,G__48859,G__48855,G__48856,map__48853,map__48853__$1,text,search_results,attributes,resolvers,mutations,collapse_attributes_QMARK_,collapse_resolvers_QMARK_,collapse_mutations_QMARK_,computed,_STAR_reconciler_STAR__orig_val__48843,_STAR_depth_STAR__orig_val__48844,_STAR_shared_STAR__orig_val__48845,_STAR_instrument_STAR__orig_val__48846,_STAR_parent_STAR__orig_val__48847,_STAR_reconciler_STAR__temp_val__48848,_STAR_depth_STAR__temp_val__48849,_STAR_shared_STAR__temp_val__48850,_STAR_instrument_STAR__temp_val__48851,_STAR_parent_STAR__temp_val__48852,this$,this__43449__auto__,x48842_49472){
return (function (){
return fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__html","__html",674048345),match_hl], null)], null)], 0));
});})(G__48865,G__48865__$1,map__48863,map__48863__$1,search_value,search_type,match_hl,G__48859,G__48855,G__48856,map__48853,map__48853__$1,text,search_results,attributes,resolvers,mutations,collapse_attributes_QMARK_,collapse_resolvers_QMARK_,collapse_mutations_QMARK_,computed,_STAR_reconciler_STAR__orig_val__48843,_STAR_depth_STAR__orig_val__48844,_STAR_shared_STAR__orig_val__48845,_STAR_instrument_STAR__orig_val__48846,_STAR_parent_STAR__orig_val__48847,_STAR_reconciler_STAR__temp_val__48848,_STAR_depth_STAR__temp_val__48849,_STAR_shared_STAR__temp_val__48850,_STAR_instrument_STAR__temp_val__48851,_STAR_parent_STAR__temp_val__48852,this$,this__43449__auto__,x48842_49472))
], null);
var G__48867 = computed;
return (com.wsscode.pathom.viz.index_explorer.attribute_link.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.attribute_link.cljs$core$IFn$_invoke$arity$2(G__48866,G__48867) : com.wsscode.pathom.viz.index_explorer.attribute_link.call(null,G__48866,G__48867));

break;
case "com.wsscode.pathom.viz.index-explorer/search-type-resolver":
var G__48868 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),search_value,new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","render","com.wsscode.pathom.viz.ui.kit/render",1024565529),((function (G__48865,G__48865__$1,map__48863,map__48863__$1,search_value,search_type,match_hl,G__48859,G__48855,G__48856,map__48853,map__48853__$1,text,search_results,attributes,resolvers,mutations,collapse_attributes_QMARK_,collapse_resolvers_QMARK_,collapse_mutations_QMARK_,computed,_STAR_reconciler_STAR__orig_val__48843,_STAR_depth_STAR__orig_val__48844,_STAR_shared_STAR__orig_val__48845,_STAR_instrument_STAR__orig_val__48846,_STAR_parent_STAR__orig_val__48847,_STAR_reconciler_STAR__temp_val__48848,_STAR_depth_STAR__temp_val__48849,_STAR_shared_STAR__temp_val__48850,_STAR_instrument_STAR__temp_val__48851,_STAR_parent_STAR__temp_val__48852,this$,this__43449__auto__,x48842_49472){
return (function (){
return fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__html","__html",674048345),match_hl], null)], null)], 0));
});})(G__48865,G__48865__$1,map__48863,map__48863__$1,search_value,search_type,match_hl,G__48859,G__48855,G__48856,map__48853,map__48853__$1,text,search_results,attributes,resolvers,mutations,collapse_attributes_QMARK_,collapse_resolvers_QMARK_,collapse_mutations_QMARK_,computed,_STAR_reconciler_STAR__orig_val__48843,_STAR_depth_STAR__orig_val__48844,_STAR_shared_STAR__orig_val__48845,_STAR_instrument_STAR__orig_val__48846,_STAR_parent_STAR__orig_val__48847,_STAR_reconciler_STAR__temp_val__48848,_STAR_depth_STAR__temp_val__48849,_STAR_shared_STAR__temp_val__48850,_STAR_instrument_STAR__temp_val__48851,_STAR_parent_STAR__temp_val__48852,this$,this__43449__auto__,x48842_49472))
], null);
var G__48869 = computed;
return (com.wsscode.pathom.viz.index_explorer.resolver_link.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.resolver_link.cljs$core$IFn$_invoke$arity$2(G__48868,G__48869) : com.wsscode.pathom.viz.index_explorer.resolver_link.call(null,G__48868,G__48869));

break;
case "com.wsscode.pathom.viz.index-explorer/search-type-mutation":
var G__48870 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),search_value,new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","render","com.wsscode.pathom.viz.ui.kit/render",1024565529),((function (G__48865,G__48865__$1,map__48863,map__48863__$1,search_value,search_type,match_hl,G__48859,G__48855,G__48856,map__48853,map__48853__$1,text,search_results,attributes,resolvers,mutations,collapse_attributes_QMARK_,collapse_resolvers_QMARK_,collapse_mutations_QMARK_,computed,_STAR_reconciler_STAR__orig_val__48843,_STAR_depth_STAR__orig_val__48844,_STAR_shared_STAR__orig_val__48845,_STAR_instrument_STAR__orig_val__48846,_STAR_parent_STAR__orig_val__48847,_STAR_reconciler_STAR__temp_val__48848,_STAR_depth_STAR__temp_val__48849,_STAR_shared_STAR__temp_val__48850,_STAR_instrument_STAR__temp_val__48851,_STAR_parent_STAR__temp_val__48852,this$,this__43449__auto__,x48842_49472){
return (function (){
return fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__html","__html",674048345),match_hl], null)], null)], 0));
});})(G__48865,G__48865__$1,map__48863,map__48863__$1,search_value,search_type,match_hl,G__48859,G__48855,G__48856,map__48853,map__48853__$1,text,search_results,attributes,resolvers,mutations,collapse_attributes_QMARK_,collapse_resolvers_QMARK_,collapse_mutations_QMARK_,computed,_STAR_reconciler_STAR__orig_val__48843,_STAR_depth_STAR__orig_val__48844,_STAR_shared_STAR__orig_val__48845,_STAR_instrument_STAR__orig_val__48846,_STAR_parent_STAR__orig_val__48847,_STAR_reconciler_STAR__temp_val__48848,_STAR_depth_STAR__temp_val__48849,_STAR_shared_STAR__temp_val__48850,_STAR_instrument_STAR__temp_val__48851,_STAR_parent_STAR__temp_val__48852,this$,this__43449__auto__,x48842_49472))
], null);
var G__48871 = computed;
return (com.wsscode.pathom.viz.index_explorer.mutation_link.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.mutation_link.cljs$core$IFn$_invoke$arity$2(G__48870,G__48871) : com.wsscode.pathom.viz.index_explorer.mutation_link.call(null,G__48870,G__48871));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__48865__$1)].join('')));

}
});})(G__48859,G__48855,G__48856,map__48853,map__48853__$1,text,search_results,attributes,resolvers,mutations,collapse_attributes_QMARK_,collapse_resolvers_QMARK_,collapse_mutations_QMARK_,computed,_STAR_reconciler_STAR__orig_val__48843,_STAR_depth_STAR__orig_val__48844,_STAR_shared_STAR__orig_val__48845,_STAR_instrument_STAR__orig_val__48846,_STAR_parent_STAR__orig_val__48847,_STAR_reconciler_STAR__temp_val__48848,_STAR_depth_STAR__temp_val__48849,_STAR_shared_STAR__temp_val__48850,_STAR_instrument_STAR__temp_val__48851,_STAR_parent_STAR__temp_val__48852,this$,this__43449__auto__,x48842_49472))
)),search_results):null)], 0));
var G__48861 = fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),(((cljs.core.count(text) > (2)))?"none":null)], null)], null),(function (){var G__48872 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attributes","com.wsscode.pathom.viz.index-explorer/attributes",-67264281),attributes,new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","collapsed?","com.wsscode.pathom.viz.ui.kit/collapsed?",301612965),collapse_attributes_QMARK_,new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","on-toggle","com.wsscode.pathom.viz.ui.kit/on-toggle",629501911),fulcro.client.primitives.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"toggle-attribute-collapse","toggle-attribute-collapse",1927565782))], null);
var G__48873 = computed;
return (com.wsscode.pathom.viz.index_explorer.all_attributes_list.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.all_attributes_list.cljs$core$IFn$_invoke$arity$2(G__48872,G__48873) : com.wsscode.pathom.viz.index_explorer.all_attributes_list.call(null,G__48872,G__48873));
})(),(function (){var G__48874 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","resolvers","com.wsscode.pathom.viz.index-explorer/resolvers",-1064744669),resolvers,new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","collapsed?","com.wsscode.pathom.viz.ui.kit/collapsed?",301612965),collapse_resolvers_QMARK_,new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","on-toggle","com.wsscode.pathom.viz.ui.kit/on-toggle",629501911),fulcro.client.primitives.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"toggle-resolver-collapse","toggle-resolver-collapse",-1738038560))], null);
var G__48875 = computed;
return (com.wsscode.pathom.viz.index_explorer.all_resolvers_list.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.all_resolvers_list.cljs$core$IFn$_invoke$arity$2(G__48874,G__48875) : com.wsscode.pathom.viz.index_explorer.all_resolvers_list.call(null,G__48874,G__48875));
})(),(function (){var G__48876 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutations","com.wsscode.pathom.viz.index-explorer/mutations",329050290),mutations,new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","collapsed?","com.wsscode.pathom.viz.ui.kit/collapsed?",301612965),collapse_mutations_QMARK_,new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","on-toggle","com.wsscode.pathom.viz.ui.kit/on-toggle",629501911),fulcro.client.primitives.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"toggle-mutation-collapse","toggle-mutation-collapse",-331645814))], null);
var G__48877 = computed;
return (com.wsscode.pathom.viz.index_explorer.all_mutations_list.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.all_mutations_list.cljs$core$IFn$_invoke$arity$2(G__48876,G__48877) : com.wsscode.pathom.viz.index_explorer.all_mutations_list.call(null,G__48876,G__48877));
})()], 0));
return (com.wsscode.pathom.viz.ui.kit.column.cljs$core$IFn$_invoke$arity$3 ? com.wsscode.pathom.viz.ui.kit.column.cljs$core$IFn$_invoke$arity$3(G__48859,G__48860,G__48861) : com.wsscode.pathom.viz.ui.kit.column.call(null,G__48859,G__48860,G__48861));
})();
return (com.wsscode.pathom.viz.ui.kit.column.cljs$core$IFn$_invoke$arity$3 ? com.wsscode.pathom.viz.ui.kit.column.cljs$core$IFn$_invoke$arity$3(G__48855,G__48856,G__48857) : com.wsscode.pathom.viz.ui.kit.column.call(null,G__48855,G__48856,G__48857));
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__48847;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__48846;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__48845;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__48844;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__48843;
}});})(x48842_49472))
;

x48842_49472.initLocalState = ((function (x48842_49472){
return (function (){
var this$ = this;
var ret__43424__auto__ = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"search","search",1564939822),((function (this$,x48842_49472){
return (function (p1__48836_SHARP_){
return fulcro.client.primitives.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("com.wsscode.pathom.viz.index-explorer","search","com.wsscode.pathom.viz.index-explorer/search",-1081698050,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","text","com.wsscode.pathom.viz.index-explorer/text",-1775290484),null,(1),null)),(new cljs.core.List(null,com.wsscode.pathom.viz.helpers.target_value(p1__48836_SHARP_),null,(1),null)))))),null,(1),null)))))], null));
});})(this$,x48842_49472))
,new cljs.core.Keyword(null,"toggle-attribute-collapse","toggle-attribute-collapse",1927565782),((function (this$,x48842_49472){
return (function (){
return fulcro.client.mutations.toggle_BANG_(this$,new cljs.core.Keyword("ui","collapse-attributes?","ui/collapse-attributes?",-1581210852));
});})(this$,x48842_49472))
,new cljs.core.Keyword(null,"toggle-resolver-collapse","toggle-resolver-collapse",-1738038560),((function (this$,x48842_49472){
return (function (){
return fulcro.client.mutations.toggle_BANG_(this$,new cljs.core.Keyword("ui","collapse-resolvers?","ui/collapse-resolvers?",-237427285));
});})(this$,x48842_49472))
,new cljs.core.Keyword(null,"toggle-mutation-collapse","toggle-mutation-collapse",-331645814),((function (this$,x48842_49472){
return (function (){
return fulcro.client.mutations.toggle_BANG_(this$,new cljs.core.Keyword("ui","collapse-mutations?","ui/collapse-mutations?",-1463008198));
});})(this$,x48842_49472))
,new cljs.core.Keyword(null,"all-attributes","all-attributes",-1495901763),(function (){var props = fulcro.client.primitives.props(this$);
var computed = fulcro.client.primitives.get_computed.cljs$core$IFn$_invoke$arity$1(props);
return fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__48878 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),cljs.core.PersistentHashSet.EMPTY], null);
var G__48879 = computed;
return (com.wsscode.pathom.viz.index_explorer.attribute_link.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.attribute_link.cljs$core$IFn$_invoke$arity$2(G__48878,G__48879) : com.wsscode.pathom.viz.index_explorer.attribute_link.call(null,G__48878,G__48879));
})(),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.filter.cljs$core$IFn$_invoke$arity$1(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword_QMARK_,new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075))),cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (props,computed,this$,x48842_49472){
return (function (p__48880){
var map__48881 = p__48880;
var map__48881__$1 = (((((!((map__48881 == null))))?(((((map__48881.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48881.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48881):map__48881);
var attribute = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48881__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075));
var G__48883 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),attribute], null);
var G__48884 = computed;
return (com.wsscode.pathom.viz.index_explorer.attribute_link.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.attribute_link.cljs$core$IFn$_invoke$arity$2(G__48883,G__48884) : com.wsscode.pathom.viz.index_explorer.attribute_link.call(null,G__48883,G__48884));
});})(props,computed,this$,x48842_49472))
)),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attributes","com.wsscode.pathom.viz.index-explorer/attributes",-67264281).cljs$core$IFn$_invoke$arity$1(props))], 0));
})()], null);
var obj48886 = ({"fulcro$state":ret__43424__auto__});
return obj48886;
});})(x48842_49472))
;


com.wsscode.pathom.viz.index_explorer.SearchEverything.prototype.constructor = com.wsscode.pathom.viz.index_explorer.SearchEverything;

com.wsscode.pathom.viz.index_explorer.SearchEverything.prototype.constructor.displayName = "com.wsscode.pathom.viz.index-explorer/SearchEverything";

com.wsscode.pathom.viz.index_explorer.SearchEverything.prototype.fulcro$isComponent = true;

var x48887_49474 = com.wsscode.pathom.viz.index_explorer.SearchEverything;
x48887_49474.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x48887_49474.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x48887_49474){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"flex","flex",-1425124628),"1",new cljs.core.Keyword(null,"white-space","white-space",-707351930),"nowrap",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"auto"], null)], null)], null);
});})(x48887_49474))
;

x48887_49474.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x48887_49474){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x48887_49474))
;

x48887_49474.fulcro$client$primitives$IPreMerge$ = cljs.core.PROTOCOL_SENTINEL;

x48887_49474.fulcro$client$primitives$IPreMerge$pre_merge_STAR_$arity$2 = ((function (x48887_49474){
return (function (this$,p__48888){
var map__48889 = p__48888;
var map__48889__$1 = (((((!((map__48889 == null))))?(((((map__48889.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48889.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48889):map__48889);
var current_normalized = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48889__$1,new cljs.core.Keyword(null,"current-normalized","current-normalized",851723724));
var data_tree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48889__$1,new cljs.core.Keyword(null,"data-tree","data-tree",1311167582));
var this$__$1 = this;
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625),cljs.core.random_uuid(),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","text","com.wsscode.pathom.viz.index-explorer/text",-1775290484),"",new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-results","com.wsscode.pathom.viz.index-explorer/search-results",321731333),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword("ui","collapse-attributes?","ui/collapse-attributes?",-1581210852),false,new cljs.core.Keyword("ui","collapse-resolvers?","ui/collapse-resolvers?",-237427285),false,new cljs.core.Keyword("ui","collapse-mutations?","ui/collapse-mutations?",-1463008198),false], null),current_normalized,data_tree], 0));
});})(x48887_49474))
;

x48887_49474.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x48887_49474.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x48887_49474){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x48887_49474))
;

x48887_49474.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x48887_49474.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x48887_49474){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","text","com.wsscode.pathom.viz.index-explorer/text",-1775290484),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-results","com.wsscode.pathom.viz.index-explorer/search-results",321731333),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.fuzzy","string","com.wsscode.fuzzy/string",320074815),new cljs.core.Keyword("com.wsscode.fuzzy","match-hl","com.wsscode.fuzzy/match-hl",-611317739),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-type","com.wsscode.pathom.viz.index-explorer/search-type",-1615224063),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-value","com.wsscode.pathom.viz.index-explorer/search-value",-337129957)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attributes","com.wsscode.pathom.viz.index-explorer/attributes",-67264281),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","resolvers","com.wsscode.pathom.viz.index-explorer/resolvers",-1064744669),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutations","com.wsscode.pathom.viz.index-explorer/mutations",329050290),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581)], null)], null),new cljs.core.Keyword("ui","collapse-attributes?","ui/collapse-attributes?",-1581210852),new cljs.core.Keyword("ui","collapse-resolvers?","ui/collapse-resolvers?",-237427285),new cljs.core.Keyword("ui","collapse-mutations?","ui/collapse-mutations?",-1463008198)], null);
});})(x48887_49474))
;


var x48891_49475 = com.wsscode.pathom.viz.index_explorer.SearchEverything.prototype;
x48891_49475.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x48891_49475.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x48891_49475){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"flex","flex",-1425124628),"1",new cljs.core.Keyword(null,"white-space","white-space",-707351930),"nowrap",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"auto"], null)], null)], null);
});})(x48891_49475))
;

x48891_49475.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x48891_49475){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x48891_49475))
;

x48891_49475.fulcro$client$primitives$IPreMerge$ = cljs.core.PROTOCOL_SENTINEL;

x48891_49475.fulcro$client$primitives$IPreMerge$pre_merge_STAR_$arity$2 = ((function (x48891_49475){
return (function (this$,p__48892){
var map__48893 = p__48892;
var map__48893__$1 = (((((!((map__48893 == null))))?(((((map__48893.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48893.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48893):map__48893);
var current_normalized = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48893__$1,new cljs.core.Keyword(null,"current-normalized","current-normalized",851723724));
var data_tree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48893__$1,new cljs.core.Keyword(null,"data-tree","data-tree",1311167582));
var this$__$1 = this;
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625),cljs.core.random_uuid(),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","text","com.wsscode.pathom.viz.index-explorer/text",-1775290484),"",new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-results","com.wsscode.pathom.viz.index-explorer/search-results",321731333),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword("ui","collapse-attributes?","ui/collapse-attributes?",-1581210852),false,new cljs.core.Keyword("ui","collapse-resolvers?","ui/collapse-resolvers?",-237427285),false,new cljs.core.Keyword("ui","collapse-mutations?","ui/collapse-mutations?",-1463008198),false], null),current_normalized,data_tree], 0));
});})(x48891_49475))
;

x48891_49475.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x48891_49475.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x48891_49475){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x48891_49475))
;

x48891_49475.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x48891_49475.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x48891_49475){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","text","com.wsscode.pathom.viz.index-explorer/text",-1775290484),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-results","com.wsscode.pathom.viz.index-explorer/search-results",321731333),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.fuzzy","string","com.wsscode.fuzzy/string",320074815),new cljs.core.Keyword("com.wsscode.fuzzy","match-hl","com.wsscode.fuzzy/match-hl",-611317739),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-type","com.wsscode.pathom.viz.index-explorer/search-type",-1615224063),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-value","com.wsscode.pathom.viz.index-explorer/search-value",-337129957)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attributes","com.wsscode.pathom.viz.index-explorer/attributes",-67264281),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","resolvers","com.wsscode.pathom.viz.index-explorer/resolvers",-1064744669),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutations","com.wsscode.pathom.viz.index-explorer/mutations",329050290),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581)], null)], null),new cljs.core.Keyword("ui","collapse-attributes?","ui/collapse-attributes?",-1581210852),new cljs.core.Keyword("ui","collapse-resolvers?","ui/collapse-resolvers?",-237427285),new cljs.core.Keyword("ui","collapse-mutations?","ui/collapse-mutations?",-1463008198)], null);
});})(x48891_49475))
;


com.wsscode.pathom.viz.index_explorer.SearchEverything.cljs$lang$type = true;

com.wsscode.pathom.viz.index_explorer.SearchEverything.cljs$lang$ctorStr = "com.wsscode.pathom.viz.index-explorer/SearchEverything";

com.wsscode.pathom.viz.index_explorer.SearchEverything.cljs$lang$ctorPrWriter = (function (this__44534__auto__,writer__44535__auto__,opt__44536__auto__){
return cljs.core._write(writer__44535__auto__,"com.wsscode.pathom.viz.index-explorer/SearchEverything");
});
com.wsscode.pathom.viz.index_explorer.search_everything = fulcro.client.primitives.computed_factory.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.SearchEverything);
if((typeof com !== 'undefined') && (typeof com.wsscode !== 'undefined') && (typeof com.wsscode.pathom !== 'undefined') && (typeof com.wsscode.pathom.viz !== 'undefined') && (typeof com.wsscode.pathom.viz.index_explorer !== 'undefined') && (typeof com.wsscode.pathom.viz.index_explorer.AttributeMismatchPanel !== 'undefined')){
} else {
/**
 * @constructor
 * @nocollapse
 */
com.wsscode.pathom.viz.index_explorer.AttributeMismatchPanel = (function com$wsscode$pathom$viz$index_explorer$AttributeMismatchPanel(){
var this__44531__auto__ = this;
React.Component.apply(this__44531__auto__,arguments);

if((!((this__44531__auto__.initLocalState == null)))){
this__44531__auto__.state = this__44531__auto__.initLocalState();
} else {
this__44531__auto__.state = ({});
}

return this__44531__auto__;
});

var G__48897_49476 = com.wsscode.pathom.viz.index_explorer.AttributeMismatchPanel.prototype;
var G__48898_49477 = React.Component.prototype;
var G__48899_49478 = fulcro.client.primitives.default_component_prototype;
goog.object.extend(G__48897_49476,G__48898_49477,G__48899_49478);
}

fulcro.client.primitives._register_component_BANG_(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","AttributeMismatchPanel","com.wsscode.pathom.viz.index-explorer/AttributeMismatchPanel",653731723),com.wsscode.pathom.viz.index_explorer.AttributeMismatchPanel);

var x48900_49479 = com.wsscode.pathom.viz.index_explorer.AttributeMismatchPanel.prototype;
x48900_49479.render = ((function (x48900_49479){
return (function (){
var this__43449__auto__ = this;
var this$ = this__43449__auto__;
var _STAR_reconciler_STAR__orig_val__48901 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__48902 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__48903 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__48904 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__48905 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__48906 = fulcro.client.primitives.get_reconciler(this__43449__auto__);
var _STAR_depth_STAR__temp_val__48907 = (fulcro.client.primitives.depth(this__43449__auto__) + (1));
var _STAR_shared_STAR__temp_val__48908 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__43449__auto__);
var _STAR_instrument_STAR__temp_val__48909 = fulcro.client.primitives.instrument(this__43449__auto__);
var _STAR_parent_STAR__temp_val__48910 = this__43449__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__48906;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__48907;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__48908;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__48909;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__48910;

try{var map__48911 = fulcro.client.primitives.props(this$);
var map__48911__$1 = (((((!((map__48911 == null))))?(((((map__48911.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48911.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48911):map__48911);
var attr_type_mismatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48911__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-type-mismatch","com.wsscode.pathom.viz.index-explorer/attr-type-mismatch",-1230484441));
var attr_mismatch_expanded = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48911__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-mismatch-expanded","com.wsscode.pathom.viz.index-explorer/attr-mismatch-expanded",1688513157));
var computed = fulcro.client.primitives.get_computed.cljs$core$IFn$_invoke$arity$1(this$);
var G__48913 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","panel-title","com.wsscode.pathom.viz.ui.kit/panel-title",1529445284),"Attributes with type mismatch"], null);
var G__48914 = (function (){var iter__4523__auto__ = ((function (G__48913,map__48911,map__48911__$1,attr_type_mismatch,attr_mismatch_expanded,computed,_STAR_reconciler_STAR__orig_val__48901,_STAR_depth_STAR__orig_val__48902,_STAR_shared_STAR__orig_val__48903,_STAR_instrument_STAR__orig_val__48904,_STAR_parent_STAR__orig_val__48905,_STAR_reconciler_STAR__temp_val__48906,_STAR_depth_STAR__temp_val__48907,_STAR_shared_STAR__temp_val__48908,_STAR_instrument_STAR__temp_val__48909,_STAR_parent_STAR__temp_val__48910,this$,this__43449__auto__,x48900_49479){
return (function com$wsscode$pathom$viz$index_explorer$iter__48915(s__48916){
return (new cljs.core.LazySeq(null,((function (G__48913,map__48911,map__48911__$1,attr_type_mismatch,attr_mismatch_expanded,computed,_STAR_reconciler_STAR__orig_val__48901,_STAR_depth_STAR__orig_val__48902,_STAR_shared_STAR__orig_val__48903,_STAR_instrument_STAR__orig_val__48904,_STAR_parent_STAR__orig_val__48905,_STAR_reconciler_STAR__temp_val__48906,_STAR_depth_STAR__temp_val__48907,_STAR_shared_STAR__temp_val__48908,_STAR_instrument_STAR__temp_val__48909,_STAR_parent_STAR__temp_val__48910,this$,this__43449__auto__,x48900_49479){
return (function (){
var s__48916__$1 = s__48916;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__48916__$1);
if(temp__5720__auto__){
var s__48916__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__48916__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__48916__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__48918 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__48917 = (0);
while(true){
if((i__48917 < size__4522__auto__)){
var map__48919 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__48917);
var map__48919__$1 = (((((!((map__48919 == null))))?(((((map__48919.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48919.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48919):map__48919);
var attribute = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48919__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075));
var attr_leaf_in = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48919__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attr-leaf-in","com.wsscode.pathom.connect/attr-leaf-in",-1959401711));
var attr_branch_in = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48919__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attr-branch-in","com.wsscode.pathom.connect/attr-branch-in",1982854732));
cljs.core.chunk_append(b__48918,(function (){var G__48921 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"react-key","react-key",1337881348),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attribute], 0)),new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","collapsed?","com.wsscode.pathom.viz.ui.kit/collapsed?",301612965),(!(cljs.core.contains_QMARK_(attr_mismatch_expanded,attribute))),new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","on-toggle","com.wsscode.pathom.viz.ui.kit/on-toggle",629501911),((function (i__48917,map__48919,map__48919__$1,attribute,attr_leaf_in,attr_branch_in,c__4521__auto__,size__4522__auto__,b__48918,s__48916__$2,temp__5720__auto__,G__48913,map__48911,map__48911__$1,attr_type_mismatch,attr_mismatch_expanded,computed,_STAR_reconciler_STAR__orig_val__48901,_STAR_depth_STAR__orig_val__48902,_STAR_shared_STAR__orig_val__48903,_STAR_instrument_STAR__orig_val__48904,_STAR_parent_STAR__orig_val__48905,_STAR_reconciler_STAR__temp_val__48906,_STAR_depth_STAR__temp_val__48907,_STAR_shared_STAR__temp_val__48908,_STAR_instrument_STAR__temp_val__48909,_STAR_parent_STAR__temp_val__48910,this$,this__43449__auto__,x48900_49479){
return (function (){
return com.wsscode.pathom.viz.helpers.update_value_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-mismatch-expanded","com.wsscode.pathom.viz.index-explorer/attr-mismatch-expanded",1688513157),com.wsscode.pathom.viz.helpers.toggle_set_item,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attribute], 0));
});})(i__48917,map__48919,map__48919__$1,attribute,attr_leaf_in,attr_branch_in,c__4521__auto__,size__4522__auto__,b__48918,s__48916__$2,temp__5720__auto__,G__48913,map__48911,map__48911__$1,attr_type_mismatch,attr_mismatch_expanded,computed,_STAR_reconciler_STAR__orig_val__48901,_STAR_depth_STAR__orig_val__48902,_STAR_shared_STAR__orig_val__48903,_STAR_instrument_STAR__orig_val__48904,_STAR_parent_STAR__orig_val__48905,_STAR_reconciler_STAR__temp_val__48906,_STAR_depth_STAR__temp_val__48907,_STAR_shared_STAR__temp_val__48908,_STAR_instrument_STAR__temp_val__48909,_STAR_parent_STAR__temp_val__48910,this$,this__43449__auto__,x48900_49479))
,new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","title","com.wsscode.pathom.viz.ui.kit/title",-1326329402),(function (){var G__48923 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),attribute], null);
var G__48924 = computed;
return (com.wsscode.pathom.viz.index_explorer.attribute_link.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.attribute_link.cljs$core$IFn$_invoke$arity$2(G__48923,G__48924) : com.wsscode.pathom.viz.index_explorer.attribute_link.call(null,G__48923,G__48924));
})()], null);
var G__48922 = fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".resolver-container",".resolver-container",925822524),(function (){var iter__4523__auto__ = ((function (i__48917,G__48921,map__48919,map__48919__$1,attribute,attr_leaf_in,attr_branch_in,c__4521__auto__,size__4522__auto__,b__48918,s__48916__$2,temp__5720__auto__,G__48913,map__48911,map__48911__$1,attr_type_mismatch,attr_mismatch_expanded,computed,_STAR_reconciler_STAR__orig_val__48901,_STAR_depth_STAR__orig_val__48902,_STAR_shared_STAR__orig_val__48903,_STAR_instrument_STAR__orig_val__48904,_STAR_parent_STAR__orig_val__48905,_STAR_reconciler_STAR__temp_val__48906,_STAR_depth_STAR__temp_val__48907,_STAR_shared_STAR__temp_val__48908,_STAR_instrument_STAR__temp_val__48909,_STAR_parent_STAR__temp_val__48910,this$,this__43449__auto__,x48900_49479){
return (function com$wsscode$pathom$viz$index_explorer$iter__48915_$_iter__48925(s__48926){
return (new cljs.core.LazySeq(null,((function (i__48917,G__48921,map__48919,map__48919__$1,attribute,attr_leaf_in,attr_branch_in,c__4521__auto__,size__4522__auto__,b__48918,s__48916__$2,temp__5720__auto__,G__48913,map__48911,map__48911__$1,attr_type_mismatch,attr_mismatch_expanded,computed,_STAR_reconciler_STAR__orig_val__48901,_STAR_depth_STAR__orig_val__48902,_STAR_shared_STAR__orig_val__48903,_STAR_instrument_STAR__orig_val__48904,_STAR_parent_STAR__orig_val__48905,_STAR_reconciler_STAR__temp_val__48906,_STAR_depth_STAR__temp_val__48907,_STAR_shared_STAR__temp_val__48908,_STAR_instrument_STAR__temp_val__48909,_STAR_parent_STAR__temp_val__48910,this$,this__43449__auto__,x48900_49479){
return (function (){
var s__48926__$1 = s__48926;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__48926__$1);
if(temp__5720__auto____$1){
var s__48926__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__48926__$2)){
var c__4521__auto____$1 = cljs.core.chunk_first(s__48926__$2);
var size__4522__auto____$1 = cljs.core.count(c__4521__auto____$1);
var b__48928 = cljs.core.chunk_buffer(size__4522__auto____$1);
if((function (){var i__48927 = (0);
while(true){
if((i__48927 < size__4522__auto____$1)){
var resolver = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto____$1,i__48927);
cljs.core.chunk_append(b__48928,(function (){var G__48929 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),resolver], null);
var G__48930 = computed;
return (com.wsscode.pathom.viz.index_explorer.resolver_link.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.resolver_link.cljs$core$IFn$_invoke$arity$2(G__48929,G__48930) : com.wsscode.pathom.viz.index_explorer.resolver_link.call(null,G__48929,G__48930));
})());

var G__49480 = (i__48927 + (1));
i__48927 = G__49480;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__48928),com$wsscode$pathom$viz$index_explorer$iter__48915_$_iter__48925(cljs.core.chunk_rest(s__48926__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__48928),null);
}
} else {
var resolver = cljs.core.first(s__48926__$2);
return cljs.core.cons((function (){var G__48931 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),resolver], null);
var G__48932 = computed;
return (com.wsscode.pathom.viz.index_explorer.resolver_link.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.resolver_link.cljs$core$IFn$_invoke$arity$2(G__48931,G__48932) : com.wsscode.pathom.viz.index_explorer.resolver_link.call(null,G__48931,G__48932));
})(),com$wsscode$pathom$viz$index_explorer$iter__48915_$_iter__48925(cljs.core.rest(s__48926__$2)));
}
} else {
return null;
}
break;
}
});})(i__48917,G__48921,map__48919,map__48919__$1,attribute,attr_leaf_in,attr_branch_in,c__4521__auto__,size__4522__auto__,b__48918,s__48916__$2,temp__5720__auto__,G__48913,map__48911,map__48911__$1,attr_type_mismatch,attr_mismatch_expanded,computed,_STAR_reconciler_STAR__orig_val__48901,_STAR_depth_STAR__orig_val__48902,_STAR_shared_STAR__orig_val__48903,_STAR_instrument_STAR__orig_val__48904,_STAR_parent_STAR__orig_val__48905,_STAR_reconciler_STAR__temp_val__48906,_STAR_depth_STAR__temp_val__48907,_STAR_shared_STAR__temp_val__48908,_STAR_instrument_STAR__temp_val__48909,_STAR_parent_STAR__temp_val__48910,this$,this__43449__auto__,x48900_49479))
,null,null));
});})(i__48917,G__48921,map__48919,map__48919__$1,attribute,attr_leaf_in,attr_branch_in,c__4521__auto__,size__4522__auto__,b__48918,s__48916__$2,temp__5720__auto__,G__48913,map__48911,map__48911__$1,attr_type_mismatch,attr_mismatch_expanded,computed,_STAR_reconciler_STAR__orig_val__48901,_STAR_depth_STAR__orig_val__48902,_STAR_shared_STAR__orig_val__48903,_STAR_instrument_STAR__orig_val__48904,_STAR_parent_STAR__orig_val__48905,_STAR_reconciler_STAR__temp_val__48906,_STAR_depth_STAR__temp_val__48907,_STAR_shared_STAR__temp_val__48908,_STAR_instrument_STAR__temp_val__48909,_STAR_parent_STAR__temp_val__48910,this$,this__43449__auto__,x48900_49479))
;
return iter__4523__auto__(attr_branch_in);
})(),fulcro.client.localized_dom.hr(),(function (){var iter__4523__auto__ = ((function (i__48917,G__48921,map__48919,map__48919__$1,attribute,attr_leaf_in,attr_branch_in,c__4521__auto__,size__4522__auto__,b__48918,s__48916__$2,temp__5720__auto__,G__48913,map__48911,map__48911__$1,attr_type_mismatch,attr_mismatch_expanded,computed,_STAR_reconciler_STAR__orig_val__48901,_STAR_depth_STAR__orig_val__48902,_STAR_shared_STAR__orig_val__48903,_STAR_instrument_STAR__orig_val__48904,_STAR_parent_STAR__orig_val__48905,_STAR_reconciler_STAR__temp_val__48906,_STAR_depth_STAR__temp_val__48907,_STAR_shared_STAR__temp_val__48908,_STAR_instrument_STAR__temp_val__48909,_STAR_parent_STAR__temp_val__48910,this$,this__43449__auto__,x48900_49479){
return (function com$wsscode$pathom$viz$index_explorer$iter__48915_$_iter__48933(s__48934){
return (new cljs.core.LazySeq(null,((function (i__48917,G__48921,map__48919,map__48919__$1,attribute,attr_leaf_in,attr_branch_in,c__4521__auto__,size__4522__auto__,b__48918,s__48916__$2,temp__5720__auto__,G__48913,map__48911,map__48911__$1,attr_type_mismatch,attr_mismatch_expanded,computed,_STAR_reconciler_STAR__orig_val__48901,_STAR_depth_STAR__orig_val__48902,_STAR_shared_STAR__orig_val__48903,_STAR_instrument_STAR__orig_val__48904,_STAR_parent_STAR__orig_val__48905,_STAR_reconciler_STAR__temp_val__48906,_STAR_depth_STAR__temp_val__48907,_STAR_shared_STAR__temp_val__48908,_STAR_instrument_STAR__temp_val__48909,_STAR_parent_STAR__temp_val__48910,this$,this__43449__auto__,x48900_49479){
return (function (){
var s__48934__$1 = s__48934;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__48934__$1);
if(temp__5720__auto____$1){
var s__48934__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__48934__$2)){
var c__4521__auto____$1 = cljs.core.chunk_first(s__48934__$2);
var size__4522__auto____$1 = cljs.core.count(c__4521__auto____$1);
var b__48936 = cljs.core.chunk_buffer(size__4522__auto____$1);
if((function (){var i__48935 = (0);
while(true){
if((i__48935 < size__4522__auto____$1)){
var resolver = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto____$1,i__48935);
cljs.core.chunk_append(b__48936,(function (){var G__48937 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),resolver], null);
var G__48938 = computed;
return (com.wsscode.pathom.viz.index_explorer.resolver_link.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.resolver_link.cljs$core$IFn$_invoke$arity$2(G__48937,G__48938) : com.wsscode.pathom.viz.index_explorer.resolver_link.call(null,G__48937,G__48938));
})());

var G__49481 = (i__48935 + (1));
i__48935 = G__49481;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__48936),com$wsscode$pathom$viz$index_explorer$iter__48915_$_iter__48933(cljs.core.chunk_rest(s__48934__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__48936),null);
}
} else {
var resolver = cljs.core.first(s__48934__$2);
return cljs.core.cons((function (){var G__48939 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),resolver], null);
var G__48940 = computed;
return (com.wsscode.pathom.viz.index_explorer.resolver_link.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.resolver_link.cljs$core$IFn$_invoke$arity$2(G__48939,G__48940) : com.wsscode.pathom.viz.index_explorer.resolver_link.call(null,G__48939,G__48940));
})(),com$wsscode$pathom$viz$index_explorer$iter__48915_$_iter__48933(cljs.core.rest(s__48934__$2)));
}
} else {
return null;
}
break;
}
});})(i__48917,G__48921,map__48919,map__48919__$1,attribute,attr_leaf_in,attr_branch_in,c__4521__auto__,size__4522__auto__,b__48918,s__48916__$2,temp__5720__auto__,G__48913,map__48911,map__48911__$1,attr_type_mismatch,attr_mismatch_expanded,computed,_STAR_reconciler_STAR__orig_val__48901,_STAR_depth_STAR__orig_val__48902,_STAR_shared_STAR__orig_val__48903,_STAR_instrument_STAR__orig_val__48904,_STAR_parent_STAR__orig_val__48905,_STAR_reconciler_STAR__temp_val__48906,_STAR_depth_STAR__temp_val__48907,_STAR_shared_STAR__temp_val__48908,_STAR_instrument_STAR__temp_val__48909,_STAR_parent_STAR__temp_val__48910,this$,this__43449__auto__,x48900_49479))
,null,null));
});})(i__48917,G__48921,map__48919,map__48919__$1,attribute,attr_leaf_in,attr_branch_in,c__4521__auto__,size__4522__auto__,b__48918,s__48916__$2,temp__5720__auto__,G__48913,map__48911,map__48911__$1,attr_type_mismatch,attr_mismatch_expanded,computed,_STAR_reconciler_STAR__orig_val__48901,_STAR_depth_STAR__orig_val__48902,_STAR_shared_STAR__orig_val__48903,_STAR_instrument_STAR__orig_val__48904,_STAR_parent_STAR__orig_val__48905,_STAR_reconciler_STAR__temp_val__48906,_STAR_depth_STAR__temp_val__48907,_STAR_shared_STAR__temp_val__48908,_STAR_instrument_STAR__temp_val__48909,_STAR_parent_STAR__temp_val__48910,this$,this__43449__auto__,x48900_49479))
;
return iter__4523__auto__(attr_leaf_in);
})()], 0));
return (com.wsscode.pathom.viz.ui.kit.raw_collapsible.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.raw_collapsible.cljs$core$IFn$_invoke$arity$2(G__48921,G__48922) : com.wsscode.pathom.viz.ui.kit.raw_collapsible.call(null,G__48921,G__48922));
})());

var G__49482 = (i__48917 + (1));
i__48917 = G__49482;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__48918),com$wsscode$pathom$viz$index_explorer$iter__48915(cljs.core.chunk_rest(s__48916__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__48918),null);
}
} else {
var map__48941 = cljs.core.first(s__48916__$2);
var map__48941__$1 = (((((!((map__48941 == null))))?(((((map__48941.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48941.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48941):map__48941);
var attribute = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48941__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075));
var attr_leaf_in = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48941__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attr-leaf-in","com.wsscode.pathom.connect/attr-leaf-in",-1959401711));
var attr_branch_in = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48941__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attr-branch-in","com.wsscode.pathom.connect/attr-branch-in",1982854732));
return cljs.core.cons((function (){var G__48943 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"react-key","react-key",1337881348),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attribute], 0)),new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","collapsed?","com.wsscode.pathom.viz.ui.kit/collapsed?",301612965),(!(cljs.core.contains_QMARK_(attr_mismatch_expanded,attribute))),new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","on-toggle","com.wsscode.pathom.viz.ui.kit/on-toggle",629501911),((function (map__48941,map__48941__$1,attribute,attr_leaf_in,attr_branch_in,s__48916__$2,temp__5720__auto__,G__48913,map__48911,map__48911__$1,attr_type_mismatch,attr_mismatch_expanded,computed,_STAR_reconciler_STAR__orig_val__48901,_STAR_depth_STAR__orig_val__48902,_STAR_shared_STAR__orig_val__48903,_STAR_instrument_STAR__orig_val__48904,_STAR_parent_STAR__orig_val__48905,_STAR_reconciler_STAR__temp_val__48906,_STAR_depth_STAR__temp_val__48907,_STAR_shared_STAR__temp_val__48908,_STAR_instrument_STAR__temp_val__48909,_STAR_parent_STAR__temp_val__48910,this$,this__43449__auto__,x48900_49479){
return (function (){
return com.wsscode.pathom.viz.helpers.update_value_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-mismatch-expanded","com.wsscode.pathom.viz.index-explorer/attr-mismatch-expanded",1688513157),com.wsscode.pathom.viz.helpers.toggle_set_item,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attribute], 0));
});})(map__48941,map__48941__$1,attribute,attr_leaf_in,attr_branch_in,s__48916__$2,temp__5720__auto__,G__48913,map__48911,map__48911__$1,attr_type_mismatch,attr_mismatch_expanded,computed,_STAR_reconciler_STAR__orig_val__48901,_STAR_depth_STAR__orig_val__48902,_STAR_shared_STAR__orig_val__48903,_STAR_instrument_STAR__orig_val__48904,_STAR_parent_STAR__orig_val__48905,_STAR_reconciler_STAR__temp_val__48906,_STAR_depth_STAR__temp_val__48907,_STAR_shared_STAR__temp_val__48908,_STAR_instrument_STAR__temp_val__48909,_STAR_parent_STAR__temp_val__48910,this$,this__43449__auto__,x48900_49479))
,new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","title","com.wsscode.pathom.viz.ui.kit/title",-1326329402),(function (){var G__48945 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),attribute], null);
var G__48946 = computed;
return (com.wsscode.pathom.viz.index_explorer.attribute_link.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.attribute_link.cljs$core$IFn$_invoke$arity$2(G__48945,G__48946) : com.wsscode.pathom.viz.index_explorer.attribute_link.call(null,G__48945,G__48946));
})()], null);
var G__48944 = fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".resolver-container",".resolver-container",925822524),(function (){var iter__4523__auto__ = ((function (G__48943,map__48941,map__48941__$1,attribute,attr_leaf_in,attr_branch_in,s__48916__$2,temp__5720__auto__,G__48913,map__48911,map__48911__$1,attr_type_mismatch,attr_mismatch_expanded,computed,_STAR_reconciler_STAR__orig_val__48901,_STAR_depth_STAR__orig_val__48902,_STAR_shared_STAR__orig_val__48903,_STAR_instrument_STAR__orig_val__48904,_STAR_parent_STAR__orig_val__48905,_STAR_reconciler_STAR__temp_val__48906,_STAR_depth_STAR__temp_val__48907,_STAR_shared_STAR__temp_val__48908,_STAR_instrument_STAR__temp_val__48909,_STAR_parent_STAR__temp_val__48910,this$,this__43449__auto__,x48900_49479){
return (function com$wsscode$pathom$viz$index_explorer$iter__48915_$_iter__48947(s__48948){
return (new cljs.core.LazySeq(null,((function (G__48943,map__48941,map__48941__$1,attribute,attr_leaf_in,attr_branch_in,s__48916__$2,temp__5720__auto__,G__48913,map__48911,map__48911__$1,attr_type_mismatch,attr_mismatch_expanded,computed,_STAR_reconciler_STAR__orig_val__48901,_STAR_depth_STAR__orig_val__48902,_STAR_shared_STAR__orig_val__48903,_STAR_instrument_STAR__orig_val__48904,_STAR_parent_STAR__orig_val__48905,_STAR_reconciler_STAR__temp_val__48906,_STAR_depth_STAR__temp_val__48907,_STAR_shared_STAR__temp_val__48908,_STAR_instrument_STAR__temp_val__48909,_STAR_parent_STAR__temp_val__48910,this$,this__43449__auto__,x48900_49479){
return (function (){
var s__48948__$1 = s__48948;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__48948__$1);
if(temp__5720__auto____$1){
var s__48948__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__48948__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__48948__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__48950 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__48949 = (0);
while(true){
if((i__48949 < size__4522__auto__)){
var resolver = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__48949);
cljs.core.chunk_append(b__48950,(function (){var G__48951 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),resolver], null);
var G__48952 = computed;
return (com.wsscode.pathom.viz.index_explorer.resolver_link.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.resolver_link.cljs$core$IFn$_invoke$arity$2(G__48951,G__48952) : com.wsscode.pathom.viz.index_explorer.resolver_link.call(null,G__48951,G__48952));
})());

var G__49483 = (i__48949 + (1));
i__48949 = G__49483;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__48950),com$wsscode$pathom$viz$index_explorer$iter__48915_$_iter__48947(cljs.core.chunk_rest(s__48948__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__48950),null);
}
} else {
var resolver = cljs.core.first(s__48948__$2);
return cljs.core.cons((function (){var G__48953 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),resolver], null);
var G__48954 = computed;
return (com.wsscode.pathom.viz.index_explorer.resolver_link.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.resolver_link.cljs$core$IFn$_invoke$arity$2(G__48953,G__48954) : com.wsscode.pathom.viz.index_explorer.resolver_link.call(null,G__48953,G__48954));
})(),com$wsscode$pathom$viz$index_explorer$iter__48915_$_iter__48947(cljs.core.rest(s__48948__$2)));
}
} else {
return null;
}
break;
}
});})(G__48943,map__48941,map__48941__$1,attribute,attr_leaf_in,attr_branch_in,s__48916__$2,temp__5720__auto__,G__48913,map__48911,map__48911__$1,attr_type_mismatch,attr_mismatch_expanded,computed,_STAR_reconciler_STAR__orig_val__48901,_STAR_depth_STAR__orig_val__48902,_STAR_shared_STAR__orig_val__48903,_STAR_instrument_STAR__orig_val__48904,_STAR_parent_STAR__orig_val__48905,_STAR_reconciler_STAR__temp_val__48906,_STAR_depth_STAR__temp_val__48907,_STAR_shared_STAR__temp_val__48908,_STAR_instrument_STAR__temp_val__48909,_STAR_parent_STAR__temp_val__48910,this$,this__43449__auto__,x48900_49479))
,null,null));
});})(G__48943,map__48941,map__48941__$1,attribute,attr_leaf_in,attr_branch_in,s__48916__$2,temp__5720__auto__,G__48913,map__48911,map__48911__$1,attr_type_mismatch,attr_mismatch_expanded,computed,_STAR_reconciler_STAR__orig_val__48901,_STAR_depth_STAR__orig_val__48902,_STAR_shared_STAR__orig_val__48903,_STAR_instrument_STAR__orig_val__48904,_STAR_parent_STAR__orig_val__48905,_STAR_reconciler_STAR__temp_val__48906,_STAR_depth_STAR__temp_val__48907,_STAR_shared_STAR__temp_val__48908,_STAR_instrument_STAR__temp_val__48909,_STAR_parent_STAR__temp_val__48910,this$,this__43449__auto__,x48900_49479))
;
return iter__4523__auto__(attr_branch_in);
})(),fulcro.client.localized_dom.hr(),(function (){var iter__4523__auto__ = ((function (G__48943,map__48941,map__48941__$1,attribute,attr_leaf_in,attr_branch_in,s__48916__$2,temp__5720__auto__,G__48913,map__48911,map__48911__$1,attr_type_mismatch,attr_mismatch_expanded,computed,_STAR_reconciler_STAR__orig_val__48901,_STAR_depth_STAR__orig_val__48902,_STAR_shared_STAR__orig_val__48903,_STAR_instrument_STAR__orig_val__48904,_STAR_parent_STAR__orig_val__48905,_STAR_reconciler_STAR__temp_val__48906,_STAR_depth_STAR__temp_val__48907,_STAR_shared_STAR__temp_val__48908,_STAR_instrument_STAR__temp_val__48909,_STAR_parent_STAR__temp_val__48910,this$,this__43449__auto__,x48900_49479){
return (function com$wsscode$pathom$viz$index_explorer$iter__48915_$_iter__48955(s__48956){
return (new cljs.core.LazySeq(null,((function (G__48943,map__48941,map__48941__$1,attribute,attr_leaf_in,attr_branch_in,s__48916__$2,temp__5720__auto__,G__48913,map__48911,map__48911__$1,attr_type_mismatch,attr_mismatch_expanded,computed,_STAR_reconciler_STAR__orig_val__48901,_STAR_depth_STAR__orig_val__48902,_STAR_shared_STAR__orig_val__48903,_STAR_instrument_STAR__orig_val__48904,_STAR_parent_STAR__orig_val__48905,_STAR_reconciler_STAR__temp_val__48906,_STAR_depth_STAR__temp_val__48907,_STAR_shared_STAR__temp_val__48908,_STAR_instrument_STAR__temp_val__48909,_STAR_parent_STAR__temp_val__48910,this$,this__43449__auto__,x48900_49479){
return (function (){
var s__48956__$1 = s__48956;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__48956__$1);
if(temp__5720__auto____$1){
var s__48956__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__48956__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__48956__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__48958 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__48957 = (0);
while(true){
if((i__48957 < size__4522__auto__)){
var resolver = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__48957);
cljs.core.chunk_append(b__48958,(function (){var G__48959 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),resolver], null);
var G__48960 = computed;
return (com.wsscode.pathom.viz.index_explorer.resolver_link.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.resolver_link.cljs$core$IFn$_invoke$arity$2(G__48959,G__48960) : com.wsscode.pathom.viz.index_explorer.resolver_link.call(null,G__48959,G__48960));
})());

var G__49484 = (i__48957 + (1));
i__48957 = G__49484;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__48958),com$wsscode$pathom$viz$index_explorer$iter__48915_$_iter__48955(cljs.core.chunk_rest(s__48956__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__48958),null);
}
} else {
var resolver = cljs.core.first(s__48956__$2);
return cljs.core.cons((function (){var G__48961 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),resolver], null);
var G__48962 = computed;
return (com.wsscode.pathom.viz.index_explorer.resolver_link.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.resolver_link.cljs$core$IFn$_invoke$arity$2(G__48961,G__48962) : com.wsscode.pathom.viz.index_explorer.resolver_link.call(null,G__48961,G__48962));
})(),com$wsscode$pathom$viz$index_explorer$iter__48915_$_iter__48955(cljs.core.rest(s__48956__$2)));
}
} else {
return null;
}
break;
}
});})(G__48943,map__48941,map__48941__$1,attribute,attr_leaf_in,attr_branch_in,s__48916__$2,temp__5720__auto__,G__48913,map__48911,map__48911__$1,attr_type_mismatch,attr_mismatch_expanded,computed,_STAR_reconciler_STAR__orig_val__48901,_STAR_depth_STAR__orig_val__48902,_STAR_shared_STAR__orig_val__48903,_STAR_instrument_STAR__orig_val__48904,_STAR_parent_STAR__orig_val__48905,_STAR_reconciler_STAR__temp_val__48906,_STAR_depth_STAR__temp_val__48907,_STAR_shared_STAR__temp_val__48908,_STAR_instrument_STAR__temp_val__48909,_STAR_parent_STAR__temp_val__48910,this$,this__43449__auto__,x48900_49479))
,null,null));
});})(G__48943,map__48941,map__48941__$1,attribute,attr_leaf_in,attr_branch_in,s__48916__$2,temp__5720__auto__,G__48913,map__48911,map__48911__$1,attr_type_mismatch,attr_mismatch_expanded,computed,_STAR_reconciler_STAR__orig_val__48901,_STAR_depth_STAR__orig_val__48902,_STAR_shared_STAR__orig_val__48903,_STAR_instrument_STAR__orig_val__48904,_STAR_parent_STAR__orig_val__48905,_STAR_reconciler_STAR__temp_val__48906,_STAR_depth_STAR__temp_val__48907,_STAR_shared_STAR__temp_val__48908,_STAR_instrument_STAR__temp_val__48909,_STAR_parent_STAR__temp_val__48910,this$,this__43449__auto__,x48900_49479))
;
return iter__4523__auto__(attr_leaf_in);
})()], 0));
return (com.wsscode.pathom.viz.ui.kit.raw_collapsible.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.raw_collapsible.cljs$core$IFn$_invoke$arity$2(G__48943,G__48944) : com.wsscode.pathom.viz.ui.kit.raw_collapsible.call(null,G__48943,G__48944));
})(),com$wsscode$pathom$viz$index_explorer$iter__48915(cljs.core.rest(s__48916__$2)));
}
} else {
return null;
}
break;
}
});})(G__48913,map__48911,map__48911__$1,attr_type_mismatch,attr_mismatch_expanded,computed,_STAR_reconciler_STAR__orig_val__48901,_STAR_depth_STAR__orig_val__48902,_STAR_shared_STAR__orig_val__48903,_STAR_instrument_STAR__orig_val__48904,_STAR_parent_STAR__orig_val__48905,_STAR_reconciler_STAR__temp_val__48906,_STAR_depth_STAR__temp_val__48907,_STAR_shared_STAR__temp_val__48908,_STAR_instrument_STAR__temp_val__48909,_STAR_parent_STAR__temp_val__48910,this$,this__43449__auto__,x48900_49479))
,null,null));
});})(G__48913,map__48911,map__48911__$1,attr_type_mismatch,attr_mismatch_expanded,computed,_STAR_reconciler_STAR__orig_val__48901,_STAR_depth_STAR__orig_val__48902,_STAR_shared_STAR__orig_val__48903,_STAR_instrument_STAR__orig_val__48904,_STAR_parent_STAR__orig_val__48905,_STAR_reconciler_STAR__temp_val__48906,_STAR_depth_STAR__temp_val__48907,_STAR_shared_STAR__temp_val__48908,_STAR_instrument_STAR__temp_val__48909,_STAR_parent_STAR__temp_val__48910,this$,this__43449__auto__,x48900_49479))
;
return iter__4523__auto__(attr_type_mismatch);
})();
return (com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2(G__48913,G__48914) : com.wsscode.pathom.viz.ui.kit.panel.call(null,G__48913,G__48914));
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__48905;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__48904;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__48903;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__48902;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__48901;
}});})(x48900_49479))
;


com.wsscode.pathom.viz.index_explorer.AttributeMismatchPanel.prototype.constructor = com.wsscode.pathom.viz.index_explorer.AttributeMismatchPanel;

com.wsscode.pathom.viz.index_explorer.AttributeMismatchPanel.prototype.constructor.displayName = "com.wsscode.pathom.viz.index-explorer/AttributeMismatchPanel";

com.wsscode.pathom.viz.index_explorer.AttributeMismatchPanel.prototype.fulcro$isComponent = true;

var x48963_49485 = com.wsscode.pathom.viz.index_explorer.AttributeMismatchPanel;
x48963_49485.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x48963_49485.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x48963_49485){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".resolver-container",".resolver-container",925822524),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"26px"], null)], null)], null);
});})(x48963_49485))
;

x48963_49485.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x48963_49485){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x48963_49485))
;

x48963_49485.fulcro$client$primitives$IPreMerge$ = cljs.core.PROTOCOL_SENTINEL;

x48963_49485.fulcro$client$primitives$IPreMerge$pre_merge_STAR_$arity$2 = ((function (x48963_49485){
return (function (this$,p__48964){
var map__48965 = p__48964;
var map__48965__$1 = (((((!((map__48965 == null))))?(((((map__48965.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48965.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48965):map__48965);
var current_normalized = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48965__$1,new cljs.core.Keyword(null,"current-normalized","current-normalized",851723724));
var data_tree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48965__$1,new cljs.core.Keyword(null,"data-tree","data-tree",1311167582));
var this$__$1 = this;
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-mismatch-expanded","com.wsscode.pathom.viz.index-explorer/attr-mismatch-expanded",1688513157),cljs.core.PersistentHashSet.EMPTY], null),current_normalized,data_tree], 0));
});})(x48963_49485))
;

x48963_49485.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x48963_49485.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x48963_49485){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x48963_49485))
;

x48963_49485.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x48963_49485.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x48963_49485){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-mismatch-expanded","com.wsscode.pathom.viz.index-explorer/attr-mismatch-expanded",1688513157),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-type-mismatch","com.wsscode.pathom.viz.index-explorer/attr-type-mismatch",-1230484441),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-leaf-in","com.wsscode.pathom.connect/attr-leaf-in",-1959401711),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-branch-in","com.wsscode.pathom.connect/attr-branch-in",1982854732)], null)], null)], null);
});})(x48963_49485))
;


var x48967_49486 = com.wsscode.pathom.viz.index_explorer.AttributeMismatchPanel.prototype;
x48967_49486.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x48967_49486.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x48967_49486){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".resolver-container",".resolver-container",925822524),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"26px"], null)], null)], null);
});})(x48967_49486))
;

x48967_49486.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x48967_49486){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x48967_49486))
;

x48967_49486.fulcro$client$primitives$IPreMerge$ = cljs.core.PROTOCOL_SENTINEL;

x48967_49486.fulcro$client$primitives$IPreMerge$pre_merge_STAR_$arity$2 = ((function (x48967_49486){
return (function (this$,p__48968){
var map__48969 = p__48968;
var map__48969__$1 = (((((!((map__48969 == null))))?(((((map__48969.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48969.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48969):map__48969);
var current_normalized = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48969__$1,new cljs.core.Keyword(null,"current-normalized","current-normalized",851723724));
var data_tree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48969__$1,new cljs.core.Keyword(null,"data-tree","data-tree",1311167582));
var this$__$1 = this;
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-mismatch-expanded","com.wsscode.pathom.viz.index-explorer/attr-mismatch-expanded",1688513157),cljs.core.PersistentHashSet.EMPTY], null),current_normalized,data_tree], 0));
});})(x48967_49486))
;

x48967_49486.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x48967_49486.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x48967_49486){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x48967_49486))
;

x48967_49486.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x48967_49486.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x48967_49486){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-mismatch-expanded","com.wsscode.pathom.viz.index-explorer/attr-mismatch-expanded",1688513157),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-type-mismatch","com.wsscode.pathom.viz.index-explorer/attr-type-mismatch",-1230484441),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-leaf-in","com.wsscode.pathom.connect/attr-leaf-in",-1959401711),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-branch-in","com.wsscode.pathom.connect/attr-branch-in",1982854732)], null)], null)], null);
});})(x48967_49486))
;


com.wsscode.pathom.viz.index_explorer.AttributeMismatchPanel.cljs$lang$type = true;

com.wsscode.pathom.viz.index_explorer.AttributeMismatchPanel.cljs$lang$ctorStr = "com.wsscode.pathom.viz.index-explorer/AttributeMismatchPanel";

com.wsscode.pathom.viz.index_explorer.AttributeMismatchPanel.cljs$lang$ctorPrWriter = (function (this__44534__auto__,writer__44535__auto__,opt__44536__auto__){
return cljs.core._write(writer__44535__auto__,"com.wsscode.pathom.viz.index-explorer/AttributeMismatchPanel");
});
com.wsscode.pathom.viz.index_explorer.attribute_mismatch_panel = fulcro.client.primitives.computed_factory.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.AttributeMismatchPanel);
if((typeof com !== 'undefined') && (typeof com.wsscode !== 'undefined') && (typeof com.wsscode.pathom !== 'undefined') && (typeof com.wsscode.pathom.viz !== 'undefined') && (typeof com.wsscode.pathom.viz.index_explorer !== 'undefined') && (typeof com.wsscode.pathom.viz.index_explorer.StatsView !== 'undefined')){
} else {
/**
 * @constructor
 * @nocollapse
 */
com.wsscode.pathom.viz.index_explorer.StatsView = (function com$wsscode$pathom$viz$index_explorer$StatsView(){
var this__44531__auto__ = this;
React.Component.apply(this__44531__auto__,arguments);

if((!((this__44531__auto__.initLocalState == null)))){
this__44531__auto__.state = this__44531__auto__.initLocalState();
} else {
this__44531__auto__.state = ({});
}

return this__44531__auto__;
});

var G__48973_49487 = com.wsscode.pathom.viz.index_explorer.StatsView.prototype;
var G__48974_49488 = React.Component.prototype;
var G__48975_49489 = fulcro.client.primitives.default_component_prototype;
goog.object.extend(G__48973_49487,G__48974_49488,G__48975_49489);
}

fulcro.client.primitives._register_component_BANG_(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","StatsView","com.wsscode.pathom.viz.index-explorer/StatsView",1030504264),com.wsscode.pathom.viz.index_explorer.StatsView);

var x48976_49490 = com.wsscode.pathom.viz.index_explorer.StatsView.prototype;
x48976_49490.render = ((function (x48976_49490){
return (function (){
var this__43449__auto__ = this;
var this$ = this__43449__auto__;
var _STAR_reconciler_STAR__orig_val__48977 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__48978 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__48979 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__48980 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__48981 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__48982 = fulcro.client.primitives.get_reconciler(this__43449__auto__);
var _STAR_depth_STAR__temp_val__48983 = (fulcro.client.primitives.depth(this__43449__auto__) + (1));
var _STAR_shared_STAR__temp_val__48984 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__43449__auto__);
var _STAR_instrument_STAR__temp_val__48985 = fulcro.client.primitives.instrument(this__43449__auto__);
var _STAR_parent_STAR__temp_val__48986 = this__43449__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__48982;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__48983;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__48984;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__48985;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__48986;

try{var map__48987 = fulcro.client.primitives.props(this$);
var map__48987__$1 = (((((!((map__48987 == null))))?(((((map__48987.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48987.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48987):map__48987);
var attribute_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48987__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attribute-count","com.wsscode.pathom.viz.index-explorer/attribute-count",699283957));
var mutation_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48987__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutation-count","com.wsscode.pathom.viz.index-explorer/mutation-count",-544331737));
var top_connection_hubs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48987__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","top-connection-hubs","com.wsscode.pathom.viz.index-explorer/top-connection-hubs",1843947657));
var attr_type_mismatch_join = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48987__$1,new cljs.core.Keyword(">","attr-type-mismatch-join",">/attr-type-mismatch-join",-38351640));
var idents_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48987__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","idents-count","com.wsscode.pathom.viz.index-explorer/idents-count",2076723333));
var attr_type_mismatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48987__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-type-mismatch","com.wsscode.pathom.viz.index-explorer/attr-type-mismatch",-1230484441));
var resolver_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48987__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","resolver-count","com.wsscode.pathom.viz.index-explorer/resolver-count",1252340099));
var globals_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48987__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","globals-count","com.wsscode.pathom.viz.index-explorer/globals-count",1697710019));
var attr_edges_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48987__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-edges-count","com.wsscode.pathom.viz.index-explorer/attr-edges-count",-99271495));
var computed = fulcro.client.primitives.get_computed.cljs$core$IFn$_invoke$arity$1(this$);
return fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".container",".container",-1441208944),com.wsscode.pathom.viz.ui.kit.gc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".flex",".flex",-73425686),new cljs.core.Keyword(null,".scrollbars",".scrollbars",-1193970120)], 0)),fulcro.client.localized_dom.h1.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".title",".title",-416997657),"Stats"], 0)),(function (){var G__48989 = cljs.core.PersistentArrayMap.EMPTY;
var G__48990 = fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.wsscode.pathom.viz.ui.kit.gc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".flex",".flex",-73425686)], 0)),(function (){var G__48992 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","panel-title","com.wsscode.pathom.viz.ui.kit/panel-title",1529445284),"Counters"], null);
var G__48993 = fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Attribute count: ",attribute_count], 0));
var G__48994 = fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Resolver count: ",resolver_count], 0));
var G__48995 = fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Mutation count: ",mutation_count], 0));
var G__48996 = fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Globals count: ",globals_count], 0));
var G__48997 = fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Idents count: ",idents_count], 0));
var G__48998 = fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Edges count: ",attr_edges_count], 0));
return (com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$7 ? com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$7(G__48992,G__48993,G__48994,G__48995,G__48996,G__48997,G__48998) : com.wsscode.pathom.viz.ui.kit.panel.call(null,G__48992,G__48993,G__48994,G__48995,G__48996,G__48997,G__48998));
})(),(function (){var G__48999 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","panel-title","com.wsscode.pathom.viz.ui.kit/panel-title",1529445284),"Most Connected Attributes"], null);
var G__49000 = (function (){var iter__4523__auto__ = ((function (G__48999,G__48989,map__48987,map__48987__$1,attribute_count,mutation_count,top_connection_hubs,attr_type_mismatch_join,idents_count,attr_type_mismatch,resolver_count,globals_count,attr_edges_count,computed,_STAR_reconciler_STAR__orig_val__48977,_STAR_depth_STAR__orig_val__48978,_STAR_shared_STAR__orig_val__48979,_STAR_instrument_STAR__orig_val__48980,_STAR_parent_STAR__orig_val__48981,_STAR_reconciler_STAR__temp_val__48982,_STAR_depth_STAR__temp_val__48983,_STAR_shared_STAR__temp_val__48984,_STAR_instrument_STAR__temp_val__48985,_STAR_parent_STAR__temp_val__48986,this$,this__43449__auto__,x48976_49490){
return (function com$wsscode$pathom$viz$index_explorer$iter__49001(s__49002){
return (new cljs.core.LazySeq(null,((function (G__48999,G__48989,map__48987,map__48987__$1,attribute_count,mutation_count,top_connection_hubs,attr_type_mismatch_join,idents_count,attr_type_mismatch,resolver_count,globals_count,attr_edges_count,computed,_STAR_reconciler_STAR__orig_val__48977,_STAR_depth_STAR__orig_val__48978,_STAR_shared_STAR__orig_val__48979,_STAR_instrument_STAR__orig_val__48980,_STAR_parent_STAR__orig_val__48981,_STAR_reconciler_STAR__temp_val__48982,_STAR_depth_STAR__temp_val__48983,_STAR_shared_STAR__temp_val__48984,_STAR_instrument_STAR__temp_val__48985,_STAR_parent_STAR__temp_val__48986,this$,this__43449__auto__,x48976_49490){
return (function (){
var s__49002__$1 = s__49002;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__49002__$1);
if(temp__5720__auto__){
var s__49002__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__49002__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__49002__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__49004 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__49003 = (0);
while(true){
if((i__49003 < size__4522__auto__)){
var map__49005 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__49003);
var map__49005__$1 = (((((!((map__49005 == null))))?(((((map__49005.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49005.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49005):map__49005);
var attribute = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49005__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075));
var attr_edges_count__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49005__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-edges-count","com.wsscode.pathom.viz.index-explorer/attr-edges-count",-99271495));
cljs.core.chunk_append(b__49004,(function (){var G__49007 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),attribute,new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","render","com.wsscode.pathom.viz.ui.kit/render",1024565529),((function (i__49003,map__49005,map__49005__$1,attribute,attr_edges_count__$1,c__4521__auto__,size__4522__auto__,b__49004,s__49002__$2,temp__5720__auto__,G__48999,G__48989,map__48987,map__48987__$1,attribute_count,mutation_count,top_connection_hubs,attr_type_mismatch_join,idents_count,attr_type_mismatch,resolver_count,globals_count,attr_edges_count,computed,_STAR_reconciler_STAR__orig_val__48977,_STAR_depth_STAR__orig_val__48978,_STAR_shared_STAR__orig_val__48979,_STAR_instrument_STAR__orig_val__48980,_STAR_parent_STAR__orig_val__48981,_STAR_reconciler_STAR__temp_val__48982,_STAR_depth_STAR__temp_val__48983,_STAR_shared_STAR__temp_val__48984,_STAR_instrument_STAR__temp_val__48985,_STAR_parent_STAR__temp_val__48986,this$,this__43449__auto__,x48976_49490){
return (function (){
return ["[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(attr_edges_count__$1),"] ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attribute], 0))].join('');
});})(i__49003,map__49005,map__49005__$1,attribute,attr_edges_count__$1,c__4521__auto__,size__4522__auto__,b__49004,s__49002__$2,temp__5720__auto__,G__48999,G__48989,map__48987,map__48987__$1,attribute_count,mutation_count,top_connection_hubs,attr_type_mismatch_join,idents_count,attr_type_mismatch,resolver_count,globals_count,attr_edges_count,computed,_STAR_reconciler_STAR__orig_val__48977,_STAR_depth_STAR__orig_val__48978,_STAR_shared_STAR__orig_val__48979,_STAR_instrument_STAR__orig_val__48980,_STAR_parent_STAR__orig_val__48981,_STAR_reconciler_STAR__temp_val__48982,_STAR_depth_STAR__temp_val__48983,_STAR_shared_STAR__temp_val__48984,_STAR_instrument_STAR__temp_val__48985,_STAR_parent_STAR__temp_val__48986,this$,this__43449__auto__,x48976_49490))
], null);
var G__49008 = computed;
return (com.wsscode.pathom.viz.index_explorer.attribute_link.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.attribute_link.cljs$core$IFn$_invoke$arity$2(G__49007,G__49008) : com.wsscode.pathom.viz.index_explorer.attribute_link.call(null,G__49007,G__49008));
})());

var G__49491 = (i__49003 + (1));
i__49003 = G__49491;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__49004),com$wsscode$pathom$viz$index_explorer$iter__49001(cljs.core.chunk_rest(s__49002__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__49004),null);
}
} else {
var map__49009 = cljs.core.first(s__49002__$2);
var map__49009__$1 = (((((!((map__49009 == null))))?(((((map__49009.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49009.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49009):map__49009);
var attribute = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49009__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075));
var attr_edges_count__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49009__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-edges-count","com.wsscode.pathom.viz.index-explorer/attr-edges-count",-99271495));
return cljs.core.cons((function (){var G__49011 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),attribute,new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","render","com.wsscode.pathom.viz.ui.kit/render",1024565529),((function (map__49009,map__49009__$1,attribute,attr_edges_count__$1,s__49002__$2,temp__5720__auto__,G__48999,G__48989,map__48987,map__48987__$1,attribute_count,mutation_count,top_connection_hubs,attr_type_mismatch_join,idents_count,attr_type_mismatch,resolver_count,globals_count,attr_edges_count,computed,_STAR_reconciler_STAR__orig_val__48977,_STAR_depth_STAR__orig_val__48978,_STAR_shared_STAR__orig_val__48979,_STAR_instrument_STAR__orig_val__48980,_STAR_parent_STAR__orig_val__48981,_STAR_reconciler_STAR__temp_val__48982,_STAR_depth_STAR__temp_val__48983,_STAR_shared_STAR__temp_val__48984,_STAR_instrument_STAR__temp_val__48985,_STAR_parent_STAR__temp_val__48986,this$,this__43449__auto__,x48976_49490){
return (function (){
return ["[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(attr_edges_count__$1),"] ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attribute], 0))].join('');
});})(map__49009,map__49009__$1,attribute,attr_edges_count__$1,s__49002__$2,temp__5720__auto__,G__48999,G__48989,map__48987,map__48987__$1,attribute_count,mutation_count,top_connection_hubs,attr_type_mismatch_join,idents_count,attr_type_mismatch,resolver_count,globals_count,attr_edges_count,computed,_STAR_reconciler_STAR__orig_val__48977,_STAR_depth_STAR__orig_val__48978,_STAR_shared_STAR__orig_val__48979,_STAR_instrument_STAR__orig_val__48980,_STAR_parent_STAR__orig_val__48981,_STAR_reconciler_STAR__temp_val__48982,_STAR_depth_STAR__temp_val__48983,_STAR_shared_STAR__temp_val__48984,_STAR_instrument_STAR__temp_val__48985,_STAR_parent_STAR__temp_val__48986,this$,this__43449__auto__,x48976_49490))
], null);
var G__49012 = computed;
return (com.wsscode.pathom.viz.index_explorer.attribute_link.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.attribute_link.cljs$core$IFn$_invoke$arity$2(G__49011,G__49012) : com.wsscode.pathom.viz.index_explorer.attribute_link.call(null,G__49011,G__49012));
})(),com$wsscode$pathom$viz$index_explorer$iter__49001(cljs.core.rest(s__49002__$2)));
}
} else {
return null;
}
break;
}
});})(G__48999,G__48989,map__48987,map__48987__$1,attribute_count,mutation_count,top_connection_hubs,attr_type_mismatch_join,idents_count,attr_type_mismatch,resolver_count,globals_count,attr_edges_count,computed,_STAR_reconciler_STAR__orig_val__48977,_STAR_depth_STAR__orig_val__48978,_STAR_shared_STAR__orig_val__48979,_STAR_instrument_STAR__orig_val__48980,_STAR_parent_STAR__orig_val__48981,_STAR_reconciler_STAR__temp_val__48982,_STAR_depth_STAR__temp_val__48983,_STAR_shared_STAR__temp_val__48984,_STAR_instrument_STAR__temp_val__48985,_STAR_parent_STAR__temp_val__48986,this$,this__43449__auto__,x48976_49490))
,null,null));
});})(G__48999,G__48989,map__48987,map__48987__$1,attribute_count,mutation_count,top_connection_hubs,attr_type_mismatch_join,idents_count,attr_type_mismatch,resolver_count,globals_count,attr_edges_count,computed,_STAR_reconciler_STAR__orig_val__48977,_STAR_depth_STAR__orig_val__48978,_STAR_shared_STAR__orig_val__48979,_STAR_instrument_STAR__orig_val__48980,_STAR_parent_STAR__orig_val__48981,_STAR_reconciler_STAR__temp_val__48982,_STAR_depth_STAR__temp_val__48983,_STAR_shared_STAR__temp_val__48984,_STAR_instrument_STAR__temp_val__48985,_STAR_parent_STAR__temp_val__48986,this$,this__43449__auto__,x48976_49490))
;
return iter__4523__auto__(top_connection_hubs);
})();
return (com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2(G__48999,G__49000) : com.wsscode.pathom.viz.ui.kit.panel.call(null,G__48999,G__49000));
})()], 0));
var G__48991 = ((cljs.core.seq(attr_type_mismatch))?fulcro.client.primitives.fragment.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"24px"], null)], null)], 0)),fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.wsscode.pathom.viz.ui.kit.gc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".flex",".flex",-73425686)], 0)),(com.wsscode.pathom.viz.index_explorer.attribute_mismatch_panel.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.attribute_mismatch_panel.cljs$core$IFn$_invoke$arity$2(attr_type_mismatch_join,computed) : com.wsscode.pathom.viz.index_explorer.attribute_mismatch_panel.call(null,attr_type_mismatch_join,computed))], 0))], 0)):null);
return (com.wsscode.pathom.viz.ui.kit.row.cljs$core$IFn$_invoke$arity$3 ? com.wsscode.pathom.viz.ui.kit.row.cljs$core$IFn$_invoke$arity$3(G__48989,G__48990,G__48991) : com.wsscode.pathom.viz.ui.kit.row.call(null,G__48989,G__48990,G__48991));
})()], 0));
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__48981;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__48980;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__48979;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__48978;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__48977;
}});})(x48976_49490))
;


com.wsscode.pathom.viz.index_explorer.StatsView.prototype.constructor = com.wsscode.pathom.viz.index_explorer.StatsView;

com.wsscode.pathom.viz.index_explorer.StatsView.prototype.constructor.displayName = "com.wsscode.pathom.viz.index-explorer/StatsView";

com.wsscode.pathom.viz.index_explorer.StatsView.prototype.fulcro$isComponent = true;

var x49013_49492 = com.wsscode.pathom.viz.index_explorer.StatsView;
x49013_49492.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x49013_49492.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x49013_49492){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),"12px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".title",".title",-416997657),com.wsscode.pathom.viz.ui.kit.text_base], null)], null);
});})(x49013_49492))
;

x49013_49492.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x49013_49492){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x49013_49492))
;

x49013_49492.fulcro$client$primitives$IPreMerge$ = cljs.core.PROTOCOL_SENTINEL;

x49013_49492.fulcro$client$primitives$IPreMerge$pre_merge_STAR_$arity$2 = ((function (x49013_49492){
return (function (this$,p__49014){
var map__49015 = p__49014;
var map__49015__$1 = (((((!((map__49015 == null))))?(((((map__49015.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49015.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49015):map__49015);
var current_normalized = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49015__$1,new cljs.core.Keyword(null,"current-normalized","current-normalized",851723724));
var data_tree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49015__$1,new cljs.core.Keyword(null,"data-tree","data-tree",1311167582));
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
});})(x49013_49492))
;

x49013_49492.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x49013_49492.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x49013_49492){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x49013_49492))
;

x49013_49492.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x49013_49492.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x49013_49492){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attribute-count","com.wsscode.pathom.viz.index-explorer/attribute-count",699283957),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","resolver-count","com.wsscode.pathom.viz.index-explorer/resolver-count",1252340099),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","globals-count","com.wsscode.pathom.viz.index-explorer/globals-count",1697710019),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","idents-count","com.wsscode.pathom.viz.index-explorer/idents-count",2076723333),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-edges-count","com.wsscode.pathom.viz.index-explorer/attr-edges-count",-99271495),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutation-count","com.wsscode.pathom.viz.index-explorer/mutation-count",-544331737),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-type-mismatch","com.wsscode.pathom.viz.index-explorer/attr-type-mismatch",-1230484441),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","top-connection-hubs","com.wsscode.pathom.viz.index-explorer/top-connection-hubs",1843947657),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-edges-count","com.wsscode.pathom.viz.index-explorer/attr-edges-count",-99271495)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(">","attr-type-mismatch-join",">/attr-type-mismatch-join",-38351640),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.AttributeMismatchPanel)], null)], null);
});})(x49013_49492))
;


var x49017_49493 = com.wsscode.pathom.viz.index_explorer.StatsView.prototype;
x49017_49493.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x49017_49493.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x49017_49493){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),"12px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".title",".title",-416997657),com.wsscode.pathom.viz.ui.kit.text_base], null)], null);
});})(x49017_49493))
;

x49017_49493.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x49017_49493){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x49017_49493))
;

x49017_49493.fulcro$client$primitives$IPreMerge$ = cljs.core.PROTOCOL_SENTINEL;

x49017_49493.fulcro$client$primitives$IPreMerge$pre_merge_STAR_$arity$2 = ((function (x49017_49493){
return (function (this$,p__49018){
var map__49019 = p__49018;
var map__49019__$1 = (((((!((map__49019 == null))))?(((((map__49019.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49019.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49019):map__49019);
var current_normalized = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49019__$1,new cljs.core.Keyword(null,"current-normalized","current-normalized",851723724));
var data_tree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49019__$1,new cljs.core.Keyword(null,"data-tree","data-tree",1311167582));
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
});})(x49017_49493))
;

x49017_49493.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x49017_49493.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x49017_49493){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x49017_49493))
;

x49017_49493.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x49017_49493.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x49017_49493){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attribute-count","com.wsscode.pathom.viz.index-explorer/attribute-count",699283957),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","resolver-count","com.wsscode.pathom.viz.index-explorer/resolver-count",1252340099),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","globals-count","com.wsscode.pathom.viz.index-explorer/globals-count",1697710019),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","idents-count","com.wsscode.pathom.viz.index-explorer/idents-count",2076723333),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-edges-count","com.wsscode.pathom.viz.index-explorer/attr-edges-count",-99271495),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutation-count","com.wsscode.pathom.viz.index-explorer/mutation-count",-544331737),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-type-mismatch","com.wsscode.pathom.viz.index-explorer/attr-type-mismatch",-1230484441),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","top-connection-hubs","com.wsscode.pathom.viz.index-explorer/top-connection-hubs",1843947657),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-edges-count","com.wsscode.pathom.viz.index-explorer/attr-edges-count",-99271495)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(">","attr-type-mismatch-join",">/attr-type-mismatch-join",-38351640),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.AttributeMismatchPanel)], null)], null);
});})(x49017_49493))
;


com.wsscode.pathom.viz.index_explorer.StatsView.cljs$lang$type = true;

com.wsscode.pathom.viz.index_explorer.StatsView.cljs$lang$ctorStr = "com.wsscode.pathom.viz.index-explorer/StatsView";

com.wsscode.pathom.viz.index_explorer.StatsView.cljs$lang$ctorPrWriter = (function (this__44534__auto__,writer__44535__auto__,opt__44536__auto__){
return cljs.core._write(writer__44535__auto__,"com.wsscode.pathom.viz.index-explorer/StatsView");
});
com.wsscode.pathom.viz.index_explorer.stats_view = fulcro.client.primitives.factory.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.StatsView);
if((typeof com !== 'undefined') && (typeof com.wsscode !== 'undefined') && (typeof com.wsscode.pathom !== 'undefined') && (typeof com.wsscode.pathom.viz !== 'undefined') && (typeof com.wsscode.pathom.viz.index_explorer !== 'undefined') && (typeof com.wsscode.pathom.viz.index_explorer.FullGraphView !== 'undefined')){
} else {
/**
 * @constructor
 * @nocollapse
 */
com.wsscode.pathom.viz.index_explorer.FullGraphView = (function com$wsscode$pathom$viz$index_explorer$FullGraphView(){
var this__44531__auto__ = this;
React.Component.apply(this__44531__auto__,arguments);

if((!((this__44531__auto__.initLocalState == null)))){
this__44531__auto__.state = this__44531__auto__.initLocalState();
} else {
this__44531__auto__.state = ({});
}

return this__44531__auto__;
});

var G__49024_49494 = com.wsscode.pathom.viz.index_explorer.FullGraphView.prototype;
var G__49025_49495 = React.Component.prototype;
var G__49026_49496 = fulcro.client.primitives.default_component_prototype;
goog.object.extend(G__49024_49494,G__49025_49495,G__49026_49496);
}

fulcro.client.primitives._register_component_BANG_(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","FullGraphView","com.wsscode.pathom.viz.index-explorer/FullGraphView",1989996895),com.wsscode.pathom.viz.index_explorer.FullGraphView);

var x49027_49497 = com.wsscode.pathom.viz.index_explorer.FullGraphView.prototype;
x49027_49497.render = ((function (x49027_49497){
return (function (){
var this__43449__auto__ = this;
var this$ = this__43449__auto__;
var _STAR_reconciler_STAR__orig_val__49028 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__49029 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__49030 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__49031 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__49032 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__49033 = fulcro.client.primitives.get_reconciler(this__43449__auto__);
var _STAR_depth_STAR__temp_val__49034 = (fulcro.client.primitives.depth(this__43449__auto__) + (1));
var _STAR_shared_STAR__temp_val__49035 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__43449__auto__);
var _STAR_instrument_STAR__temp_val__49036 = fulcro.client.primitives.instrument(this__43449__auto__);
var _STAR_parent_STAR__temp_val__49037 = this__43449__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__49033;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__49034;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__49035;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__49036;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__49037;

try{var _ = fulcro.client.primitives.props(this$);
var map__49038 = fulcro.client.primitives.get_computed.cljs$core$IFn$_invoke$arity$1(this$);
var map__49038__$1 = (((((!((map__49038 == null))))?(((((map__49038.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49038.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49038):map__49038);
var attributes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49038__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attributes","com.wsscode.pathom.viz.index-explorer/attributes",-67264281));
var on_select_attribute = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49038__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","on-select-attribute","com.wsscode.pathom.viz.index-explorer/on-select-attribute",2006419034));
var on_select_resolver = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49038__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","on-select-resolver","com.wsscode.pathom.viz.index-explorer/on-select-resolver",1600914463));
var G__49040 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"classes","classes",2037804510),com.wsscode.pathom.viz.ui.kit.ccss.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".container",".container",-1441208944)], 0))], null);
var G__49041 = fulcro.client.localized_dom.h1.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".title",".title",-416997657),"Full Graph"], 0));
var G__49042 = (function (){var G__49043 = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attributes","com.wsscode.pathom.viz.index-explorer/attributes",-67264281),attributes,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","direct-reaches?","com.wsscode.pathom.viz.index-explorer/direct-reaches?",-1036048994),true,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","nested-reaches?","com.wsscode.pathom.viz.index-explorer/nested-reaches?",-22429448),false,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","direct-provides?","com.wsscode.pathom.viz.index-explorer/direct-provides?",223892052),true,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","nested-provides?","com.wsscode.pathom.viz.index-explorer/nested-provides?",-1296758362),false,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","on-show-details","com.wsscode.pathom.viz.index-explorer/on-show-details",-322180105),on_select_attribute,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","on-click-edge","com.wsscode.pathom.viz.index-explorer/on-click-edge",810811642),((function (G__49040,G__49041,_,map__49038,map__49038__$1,attributes,on_select_attribute,on_select_resolver,_STAR_reconciler_STAR__orig_val__49028,_STAR_depth_STAR__orig_val__49029,_STAR_shared_STAR__orig_val__49030,_STAR_instrument_STAR__orig_val__49031,_STAR_parent_STAR__orig_val__49032,_STAR_reconciler_STAR__temp_val__49033,_STAR_depth_STAR__temp_val__49034,_STAR_shared_STAR__temp_val__49035,_STAR_instrument_STAR__temp_val__49036,_STAR_parent_STAR__temp_val__49037,this$,this__43449__auto__,x49027_49497){
return (function (p1__49021_SHARP_){
var G__49044 = cljs.core.first(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","resolvers","com.wsscode.pathom.viz.index-explorer/resolvers",-1064744669).cljs$core$IFn$_invoke$arity$1(p1__49021_SHARP_));
return (on_select_resolver.cljs$core$IFn$_invoke$arity$1 ? on_select_resolver.cljs$core$IFn$_invoke$arity$1(G__49044) : on_select_resolver.call(null,G__49044));
});})(G__49040,G__49041,_,map__49038,map__49038__$1,attributes,on_select_attribute,on_select_resolver,_STAR_reconciler_STAR__orig_val__49028,_STAR_depth_STAR__orig_val__49029,_STAR_shared_STAR__orig_val__49030,_STAR_instrument_STAR__orig_val__49031,_STAR_parent_STAR__orig_val__49032,_STAR_reconciler_STAR__temp_val__49033,_STAR_depth_STAR__temp_val__49034,_STAR_shared_STAR__temp_val__49035,_STAR_instrument_STAR__temp_val__49036,_STAR_parent_STAR__temp_val__49037,this$,this__43449__auto__,x49027_49497))
], null);
return (com.wsscode.pathom.viz.index_explorer.attribute_graph.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom.viz.index_explorer.attribute_graph.cljs$core$IFn$_invoke$arity$1(G__49043) : com.wsscode.pathom.viz.index_explorer.attribute_graph.call(null,G__49043));
})();
return (com.wsscode.pathom.viz.ui.kit.column.cljs$core$IFn$_invoke$arity$3 ? com.wsscode.pathom.viz.ui.kit.column.cljs$core$IFn$_invoke$arity$3(G__49040,G__49041,G__49042) : com.wsscode.pathom.viz.ui.kit.column.call(null,G__49040,G__49041,G__49042));
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__49032;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__49031;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__49030;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__49029;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__49028;
}});})(x49027_49497))
;


com.wsscode.pathom.viz.index_explorer.FullGraphView.prototype.constructor = com.wsscode.pathom.viz.index_explorer.FullGraphView;

com.wsscode.pathom.viz.index_explorer.FullGraphView.prototype.constructor.displayName = "com.wsscode.pathom.viz.index-explorer/FullGraphView";

com.wsscode.pathom.viz.index_explorer.FullGraphView.prototype.fulcro$isComponent = true;

var x49045_49498 = com.wsscode.pathom.viz.index_explorer.FullGraphView;
x49045_49498.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x49045_49498.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x49045_49498){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),"12px",new cljs.core.Keyword(null,"flex","flex",-1425124628),"1"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".title",".title",-416997657),com.wsscode.pathom.viz.ui.kit.text_base], null)], null);
});})(x49045_49498))
;

x49045_49498.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x49045_49498){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x49045_49498))
;

x49045_49498.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x49045_49498.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x49045_49498){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","graph-view-id","com.wsscode.pathom.viz.index-explorer/graph-view-id",211965428),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","graph-view-id","com.wsscode.pathom.viz.index-explorer/graph-view-id",211965428).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x49045_49498))
;

x49045_49498.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x49045_49498.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x49045_49498){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","graph-view-id","com.wsscode.pathom.viz.index-explorer/graph-view-id",211965428)], null);
});})(x49045_49498))
;


var x49046_49499 = com.wsscode.pathom.viz.index_explorer.FullGraphView.prototype;
x49046_49499.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x49046_49499.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x49046_49499){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),"12px",new cljs.core.Keyword(null,"flex","flex",-1425124628),"1"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".title",".title",-416997657),com.wsscode.pathom.viz.ui.kit.text_base], null)], null);
});})(x49046_49499))
;

x49046_49499.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x49046_49499){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x49046_49499))
;

x49046_49499.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x49046_49499.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x49046_49499){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","graph-view-id","com.wsscode.pathom.viz.index-explorer/graph-view-id",211965428),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","graph-view-id","com.wsscode.pathom.viz.index-explorer/graph-view-id",211965428).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x49046_49499))
;

x49046_49499.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x49046_49499.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x49046_49499){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","graph-view-id","com.wsscode.pathom.viz.index-explorer/graph-view-id",211965428)], null);
});})(x49046_49499))
;


com.wsscode.pathom.viz.index_explorer.FullGraphView.cljs$lang$type = true;

com.wsscode.pathom.viz.index_explorer.FullGraphView.cljs$lang$ctorStr = "com.wsscode.pathom.viz.index-explorer/FullGraphView";

com.wsscode.pathom.viz.index_explorer.FullGraphView.cljs$lang$ctorPrWriter = (function (this__44534__auto__,writer__44535__auto__,opt__44536__auto__){
return cljs.core._write(writer__44535__auto__,"com.wsscode.pathom.viz.index-explorer/FullGraphView");
});
com.wsscode.pathom.viz.index_explorer.full_graph_view = fulcro.client.primitives.factory.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.FullGraphView);
com.wsscode.pathom.viz.index_explorer.prop_presence_ident = (function com$wsscode$pathom$viz$index_explorer$prop_presence_ident(props){
return (function (data){
var or__4131__auto__ = cljs.core.some((function (p1__49047_SHARP_){
var temp__5722__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,p1__49047_SHARP_);
if((temp__5722__auto__ == null)){
return null;
} else {
var val = temp__5722__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__49047_SHARP_,val], null);
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
var this__44531__auto__ = this;
React.Component.apply(this__44531__auto__,arguments);

if((!((this__44531__auto__.initLocalState == null)))){
this__44531__auto__.state = this__44531__auto__.initLocalState();
} else {
this__44531__auto__.state = ({});
}

return this__44531__auto__;
});

var G__49050_49500 = com.wsscode.pathom.viz.index_explorer.MainViewUnion.prototype;
var G__49051_49501 = React.Component.prototype;
var G__49052_49502 = fulcro.client.primitives.default_component_prototype;
goog.object.extend(G__49050_49500,G__49051_49501,G__49052_49502);
}

fulcro.client.primitives._register_component_BANG_(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","MainViewUnion","com.wsscode.pathom.viz.index-explorer/MainViewUnion",280346003),com.wsscode.pathom.viz.index_explorer.MainViewUnion);

var x49053_49503 = com.wsscode.pathom.viz.index_explorer.MainViewUnion.prototype;
x49053_49503.render = ((function (x49053_49503){
return (function (){
var this__43449__auto__ = this;
var this$ = this__43449__auto__;
var _STAR_reconciler_STAR__orig_val__49054 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__49055 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__49056 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__49057 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__49058 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__49059 = fulcro.client.primitives.get_reconciler(this__43449__auto__);
var _STAR_depth_STAR__temp_val__49060 = (fulcro.client.primitives.depth(this__43449__auto__) + (1));
var _STAR_shared_STAR__temp_val__49061 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__43449__auto__);
var _STAR_instrument_STAR__temp_val__49062 = fulcro.client.primitives.instrument(this__43449__auto__);
var _STAR_parent_STAR__temp_val__49063 = this__43449__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__49059;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__49060;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__49061;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__49062;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__49063;

try{var props = fulcro.client.primitives.props(this$);
var G__49064 = cljs.core.first(fulcro.client.primitives.get_ident.cljs$core$IFn$_invoke$arity$1(this$));
var G__49064__$1 = (((G__49064 instanceof cljs.core.Keyword))?G__49064.fqn:null);
switch (G__49064__$1) {
case "com.wsscode.pathom.connect/attribute":
return (com.wsscode.pathom.viz.index_explorer.attribute_view.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom.viz.index_explorer.attribute_view.cljs$core$IFn$_invoke$arity$1(props) : com.wsscode.pathom.viz.index_explorer.attribute_view.call(null,props));

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
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__49058;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__49057;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__49056;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__49055;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__49054;
}});})(x49053_49503))
;


com.wsscode.pathom.viz.index_explorer.MainViewUnion.prototype.constructor = com.wsscode.pathom.viz.index_explorer.MainViewUnion;

com.wsscode.pathom.viz.index_explorer.MainViewUnion.prototype.constructor.displayName = "com.wsscode.pathom.viz.index-explorer/MainViewUnion";

com.wsscode.pathom.viz.index_explorer.MainViewUnion.prototype.fulcro$isComponent = true;

var x49065_49505 = com.wsscode.pathom.viz.index_explorer.MainViewUnion;
x49065_49505.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x49065_49505.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x49065_49505){
return (function (this$,props){
var this$__$1 = this;
return (com.wsscode.pathom.viz.index_explorer.main_view_ident.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom.viz.index_explorer.main_view_ident.cljs$core$IFn$_invoke$arity$1(props) : com.wsscode.pathom.viz.index_explorer.main_view_ident.call(null,props));
});})(x49065_49505))
;

x49065_49505.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x49065_49505.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x49065_49505){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.AttributeView),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.ResolverView),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutation-sym","com.wsscode.pathom.viz.index-explorer/mutation-sym",-191280951),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.MutationView),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.StatsView),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","graph-view-id","com.wsscode.pathom.viz.index-explorer/graph-view-id",211965428),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.FullGraphView)], null);
});})(x49065_49505))
;


var x49066_49506 = com.wsscode.pathom.viz.index_explorer.MainViewUnion.prototype;
x49066_49506.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x49066_49506.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x49066_49506){
return (function (this$,props){
var this$__$1 = this;
return (com.wsscode.pathom.viz.index_explorer.main_view_ident.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom.viz.index_explorer.main_view_ident.cljs$core$IFn$_invoke$arity$1(props) : com.wsscode.pathom.viz.index_explorer.main_view_ident.call(null,props));
});})(x49066_49506))
;

x49066_49506.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x49066_49506.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x49066_49506){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.AttributeView),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.ResolverView),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutation-sym","com.wsscode.pathom.viz.index-explorer/mutation-sym",-191280951),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.MutationView),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.StatsView),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","graph-view-id","com.wsscode.pathom.viz.index-explorer/graph-view-id",211965428),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.FullGraphView)], null);
});})(x49066_49506))
;


com.wsscode.pathom.viz.index_explorer.MainViewUnion.cljs$lang$type = true;

com.wsscode.pathom.viz.index_explorer.MainViewUnion.cljs$lang$ctorStr = "com.wsscode.pathom.viz.index-explorer/MainViewUnion";

com.wsscode.pathom.viz.index_explorer.MainViewUnion.cljs$lang$ctorPrWriter = (function (this__44534__auto__,writer__44535__auto__,opt__44536__auto__){
return cljs.core._write(writer__44535__auto__,"com.wsscode.pathom.viz.index-explorer/MainViewUnion");
});
com.wsscode.pathom.viz.index_explorer.main_view_union = fulcro.client.primitives.computed_factory.cljs$core$IFn$_invoke$arity$2(com.wsscode.pathom.viz.index_explorer.MainViewUnion,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),(function (p1__49067_SHARP_){
var or__4131__auto__ = new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075).cljs$core$IFn$_invoke$arity$1(p1__49067_SHARP_);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581).cljs$core$IFn$_invoke$arity$1(p1__49067_SHARP_);
}
})], null));
com.wsscode.pathom.viz.index_explorer.augment = (function com$wsscode$pathom$viz$index_explorer$augment(data,f){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([data,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(data) : f.call(null,data))], 0));
});
com.wsscode.pathom.viz.index_explorer.compute_stats = (function com$wsscode$pathom$viz$index_explorer$compute_stats(p__49071){
var map__49072 = p__49071;
var map__49072__$1 = (((((!((map__49072 == null))))?(((((map__49072.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49072.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49072):map__49072);
var data = map__49072__$1;
var attributes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49072__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attributes","com.wsscode.pathom.viz.index-explorer/attributes",-67264281));
var resolvers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49072__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","resolvers","com.wsscode.pathom.viz.index-explorer/resolvers",-1064744669));
var mutations = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49072__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutations","com.wsscode.pathom.viz.index-explorer/mutations",329050290));
var globals = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49072__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","globals","com.wsscode.pathom.viz.index-explorer/globals",1704747305));
var idents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49072__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","idents","com.wsscode.pathom.viz.index-explorer/idents",189283656));
return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attribute-count","com.wsscode.pathom.viz.index-explorer/attribute-count",699283957),cljs.core.count(attributes),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","resolver-count","com.wsscode.pathom.viz.index-explorer/resolver-count",1252340099),cljs.core.count(resolvers),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutation-count","com.wsscode.pathom.viz.index-explorer/mutation-count",-544331737),cljs.core.count(mutations),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","globals-count","com.wsscode.pathom.viz.index-explorer/globals-count",1697710019),cljs.core.count(globals),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","idents-count","com.wsscode.pathom.viz.index-explorer/idents-count",2076723333),cljs.core.count(idents),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-edges-count","com.wsscode.pathom.viz.index-explorer/attr-edges-count",-99271495),cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-edges-count","com.wsscode.pathom.viz.index-explorer/attr-edges-count",-99271495)),cljs.core._PLUS_,attributes),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-type-mismatch","com.wsscode.pathom.viz.index-explorer/attr-type-mismatch",-1230484441),cljs.core.filterv(((function (map__49072,map__49072__$1,data,attributes,resolvers,mutations,globals,idents){
return (function (p1__49068_SHARP_){
return ((cljs.core.contains_QMARK_(p1__49068_SHARP_,new cljs.core.Keyword("com.wsscode.pathom.connect","attr-leaf-in","com.wsscode.pathom.connect/attr-leaf-in",-1959401711))) && (cljs.core.contains_QMARK_(p1__49068_SHARP_,new cljs.core.Keyword("com.wsscode.pathom.connect","attr-branch-in","com.wsscode.pathom.connect/attr-branch-in",1982854732))));
});})(map__49072,map__49072__$1,data,attributes,resolvers,mutations,globals,idents))
,attributes),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","top-connection-hubs","com.wsscode.pathom.viz.index-explorer/top-connection-hubs",1843947657),cljs.core.vec(cljs.core.take.cljs$core$IFn$_invoke$arity$2((30),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-edges-count","com.wsscode.pathom.viz.index-explorer/attr-edges-count",-99271495),((function (map__49072,map__49072__$1,data,attributes,resolvers,mutations,globals,idents){
return (function (p1__49070_SHARP_,p2__49069_SHARP_){
return cljs.core.compare(p2__49069_SHARP_,p1__49070_SHARP_);
});})(map__49072,map__49072__$1,data,attributes,resolvers,mutations,globals,idents))
,attributes)))], null);
});
com.wsscode.pathom.viz.index_explorer.build_search_vector = (function com$wsscode$pathom$viz$index_explorer$build_search_vector(p__49077){
var map__49078 = p__49077;
var map__49078__$1 = (((((!((map__49078 == null))))?(((((map__49078.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49078.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49078):map__49078);
var index_resolvers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49078__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","index-resolvers","com.wsscode.pathom.connect/index-resolvers",916075256));
var index_attributes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49078__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","index-attributes","com.wsscode.pathom.connect/index-attributes",-24325279));
var index_mutations = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49078__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","index-mutations","com.wsscode.pathom.connect/index-mutations",1981352054));
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.wsscode.fuzzy","string","com.wsscode.fuzzy/string",320074815),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map__49078,map__49078__$1,index_resolvers,index_attributes,index_mutations){
return (function (p1__49074_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword("com.wsscode.fuzzy","string","com.wsscode.fuzzy/string",320074815),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-value","com.wsscode.pathom.viz.index-explorer/search-value",-337129957),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-type","com.wsscode.pathom.viz.index-explorer/search-type",-1615224063)],[cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581).cljs$core$IFn$_invoke$arity$1(p1__49074_SHARP_)], 0)),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581).cljs$core$IFn$_invoke$arity$1(p1__49074_SHARP_),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-type-resolver","com.wsscode.pathom.viz.index-explorer/search-type-resolver",1588028676)]);
});})(map__49078,map__49078__$1,index_resolvers,index_attributes,index_mutations))
,cljs.core.vals(index_resolvers))),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.wsscode.fuzzy","string","com.wsscode.fuzzy/string",320074815),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map__49078,map__49078__$1,index_resolvers,index_attributes,index_mutations){
return (function (p1__49075_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword("com.wsscode.fuzzy","string","com.wsscode.fuzzy/string",320074815),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-value","com.wsscode.pathom.viz.index-explorer/search-value",-337129957),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-type","com.wsscode.pathom.viz.index-explorer/search-type",-1615224063)],[cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581).cljs$core$IFn$_invoke$arity$1(p1__49075_SHARP_)], 0)),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581).cljs$core$IFn$_invoke$arity$1(p1__49075_SHARP_),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-type-mutation","com.wsscode.pathom.viz.index-explorer/search-type-mutation",-68441744)]);
});})(map__49078,map__49078__$1,index_resolvers,index_attributes,index_mutations))
,cljs.core.vals(index_mutations))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.wsscode.fuzzy","string","com.wsscode.fuzzy/string",320074815),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map__49078,map__49078__$1,index_resolvers,index_attributes,index_mutations){
return (function (p1__49076_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword("com.wsscode.fuzzy","string","com.wsscode.fuzzy/string",320074815),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-value","com.wsscode.pathom.viz.index-explorer/search-value",-337129957),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-type","com.wsscode.pathom.viz.index-explorer/search-type",-1615224063)],[cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075).cljs$core$IFn$_invoke$arity$1(p1__49076_SHARP_)], 0)),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075).cljs$core$IFn$_invoke$arity$1(p1__49076_SHARP_),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-type-attribute","com.wsscode.pathom.viz.index-explorer/search-type-attribute",-62795524)]);
});})(map__49078,map__49078__$1,index_resolvers,index_attributes,index_mutations))
,cljs.core.vals(index_attributes)))], 0)));
});
com.wsscode.pathom.viz.index_explorer.process_index = (function com$wsscode$pathom$viz$index_explorer$process_index(p__49082){
var map__49083 = p__49082;
var map__49083__$1 = (((((!((map__49083 == null))))?(((((map__49083.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49083.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49083):map__49083);
var index = map__49083__$1;
var index_resolvers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49083__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","index-resolvers","com.wsscode.pathom.connect/index-resolvers",916075256));
var idents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49083__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","idents","com.wsscode.pathom.connect/idents",1893384007));
var index_attributes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49083__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","index-attributes","com.wsscode.pathom.connect/index-attributes",-24325279));
var index_mutations = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49083__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","index-mutations","com.wsscode.pathom.connect/index-mutations",1981352054));
var attrs = cljs.core.vec(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str,new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map__49083,map__49083__$1,index,index_resolvers,idents,index_attributes,index_mutations){
return (function (p__49085){
var vec__49086 = p__49085;
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49086,(0),null);
var map__49089 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49086,(1),null);
var map__49089__$1 = (((((!((map__49089 == null))))?(((((map__49089.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49089.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49089):map__49089);
var data = map__49089__$1;
var attr_reach_via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49089__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via","com.wsscode.pathom.connect/attr-reach-via",-483841559));
var attr_provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49089__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attr-provides","com.wsscode.pathom.connect/attr-provides",-474523918));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","weight","com.wsscode.pathom.viz.index-explorer/weight",-1488828976),cljs.core.count(attr_provides),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","reach","com.wsscode.pathom.viz.index-explorer/reach",1367373590),cljs.core.count(attr_reach_via),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),attr,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-edges-count","com.wsscode.pathom.viz.index-explorer/attr-edges-count",-99271495),(cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.count),cljs.core._PLUS_,cljs.core.vals(attr_reach_via)) + cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.count),cljs.core._PLUS_,cljs.core.vals(attr_provides))),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","global-attribute?","com.wsscode.pathom.viz.index-explorer/global-attribute?",47568352),cljs.core.contains_QMARK_(attr_reach_via,cljs.core.PersistentHashSet.EMPTY),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","ident-attribute?","com.wsscode.pathom.viz.index-explorer/ident-attribute?",984021315),cljs.core.contains_QMARK_(idents,attr)], 0));
});})(map__49083,map__49083__$1,index,index_resolvers,idents,index_attributes,index_mutations))
,index_attributes)));
return com.wsscode.pathom.viz.index_explorer.augment(new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","idx","com.wsscode.pathom.viz.index-explorer/idx",1045759782),index,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attributes","com.wsscode.pathom.viz.index-explorer/attributes",-67264281),attrs,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","globals","com.wsscode.pathom.viz.index-explorer/globals",1704747305),cljs.core.filterv(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","global-attribute?","com.wsscode.pathom.viz.index-explorer/global-attribute?",47568352),attrs),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","idents","com.wsscode.pathom.viz.index-explorer/idents",189283656),cljs.core.filterv(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","ident-attribute?","com.wsscode.pathom.viz.index-explorer/ident-attribute?",984021315),attrs),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-vector","com.wsscode.pathom.viz.index-explorer/search-vector",-471470935),com.wsscode.pathom.viz.index_explorer.build_search_vector(index),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","resolvers","com.wsscode.pathom.viz.index-explorer/resolvers",-1064744669),cljs.core.vec(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (attrs,map__49083,map__49083__$1,index,index_resolvers,idents,index_attributes,index_mutations){
return (function (p1__49080_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__49080_SHARP_,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","resolver?","com.wsscode.pathom.viz.index-explorer/resolver?",167854159),true);
});})(attrs,map__49083,map__49083__$1,index,index_resolvers,idents,index_attributes,index_mutations))
,cljs.core.vals(index_resolvers)))),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutations","com.wsscode.pathom.viz.index-explorer/mutations",329050290),cljs.core.vec(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (attrs,map__49083,map__49083__$1,index,index_resolvers,idents,index_attributes,index_mutations){
return (function (p1__49081_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(p1__49081_SHARP_,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutation?","com.wsscode.pathom.viz.index-explorer/mutation?",1568382673),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutation-sym","com.wsscode.pathom.viz.index-explorer/mutation-sym",-191280951),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581).cljs$core$IFn$_invoke$arity$1(p1__49081_SHARP_)], 0));
});})(attrs,map__49083,map__49083__$1,index,index_resolvers,idents,index_attributes,index_mutations))
,cljs.core.vals(index_mutations))))], null),com.wsscode.pathom.viz.index_explorer.compute_stats);
});
if((typeof com !== 'undefined') && (typeof com.wsscode !== 'undefined') && (typeof com.wsscode.pathom !== 'undefined') && (typeof com.wsscode.pathom.viz !== 'undefined') && (typeof com.wsscode.pathom.viz.index_explorer !== 'undefined') && (typeof com.wsscode.pathom.viz.index_explorer.AttributeIndex !== 'undefined')){
} else {
/**
 * @constructor
 * @nocollapse
 */
com.wsscode.pathom.viz.index_explorer.AttributeIndex = (function com$wsscode$pathom$viz$index_explorer$AttributeIndex(){
var this__44531__auto__ = this;
React.Component.apply(this__44531__auto__,arguments);

if((!((this__44531__auto__.initLocalState == null)))){
this__44531__auto__.state = this__44531__auto__.initLocalState();
} else {
this__44531__auto__.state = ({});
}

return this__44531__auto__;
});

var G__49093_49507 = com.wsscode.pathom.viz.index_explorer.AttributeIndex.prototype;
var G__49094_49508 = React.Component.prototype;
var G__49095_49509 = fulcro.client.primitives.default_component_prototype;
goog.object.extend(G__49093_49507,G__49094_49508,G__49095_49509);
}

fulcro.client.primitives._register_component_BANG_(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","AttributeIndex","com.wsscode.pathom.viz.index-explorer/AttributeIndex",-1624405224),com.wsscode.pathom.viz.index_explorer.AttributeIndex);

var x49096_49510 = com.wsscode.pathom.viz.index_explorer.AttributeIndex.prototype;
x49096_49510.render = ((function (x49096_49510){
return (function (){
var this__43449__auto__ = this;
var _ = this__43449__auto__;
var _STAR_reconciler_STAR__orig_val__49097 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__49098 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__49099 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__49100 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__49101 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__49102 = fulcro.client.primitives.get_reconciler(this__43449__auto__);
var _STAR_depth_STAR__temp_val__49103 = (fulcro.client.primitives.depth(this__43449__auto__) + (1));
var _STAR_shared_STAR__temp_val__49104 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__43449__auto__);
var _STAR_instrument_STAR__temp_val__49105 = fulcro.client.primitives.instrument(this__43449__auto__);
var _STAR_parent_STAR__temp_val__49106 = this__43449__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__49102;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__49103;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__49104;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__49105;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__49106;

try{var ___$1 = fulcro.client.primitives.props(_);
return null;
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__49101;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__49100;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__49099;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__49098;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__49097;
}});})(x49096_49510))
;


com.wsscode.pathom.viz.index_explorer.AttributeIndex.prototype.constructor = com.wsscode.pathom.viz.index_explorer.AttributeIndex;

com.wsscode.pathom.viz.index_explorer.AttributeIndex.prototype.constructor.displayName = "com.wsscode.pathom.viz.index-explorer/AttributeIndex";

com.wsscode.pathom.viz.index_explorer.AttributeIndex.prototype.fulcro$isComponent = true;

var x49107_49511 = com.wsscode.pathom.viz.index_explorer.AttributeIndex;
x49107_49511.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x49107_49511.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x49107_49511){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x49107_49511))
;

x49107_49511.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x49107_49511.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x49107_49511){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute-paths","com.wsscode.pathom.connect/attribute-paths",-969708455),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-provides","com.wsscode.pathom.connect/attr-provides",-474523918),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via","com.wsscode.pathom.connect/attr-reach-via",-483841559),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-combinations","com.wsscode.pathom.connect/attr-combinations",-1163990806),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","weight","com.wsscode.pathom.viz.index-explorer/weight",-1488828976),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","reach","com.wsscode.pathom.viz.index-explorer/reach",1367373590)], null);
});})(x49107_49511))
;


var x49108_49512 = com.wsscode.pathom.viz.index_explorer.AttributeIndex.prototype;
x49108_49512.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x49108_49512.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x49108_49512){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x49108_49512))
;

x49108_49512.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x49108_49512.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x49108_49512){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute-paths","com.wsscode.pathom.connect/attribute-paths",-969708455),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-provides","com.wsscode.pathom.connect/attr-provides",-474523918),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via","com.wsscode.pathom.connect/attr-reach-via",-483841559),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-combinations","com.wsscode.pathom.connect/attr-combinations",-1163990806),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","weight","com.wsscode.pathom.viz.index-explorer/weight",-1488828976),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","reach","com.wsscode.pathom.viz.index-explorer/reach",1367373590)], null);
});})(x49108_49512))
;


com.wsscode.pathom.viz.index_explorer.AttributeIndex.cljs$lang$type = true;

com.wsscode.pathom.viz.index_explorer.AttributeIndex.cljs$lang$ctorStr = "com.wsscode.pathom.viz.index-explorer/AttributeIndex";

com.wsscode.pathom.viz.index_explorer.AttributeIndex.cljs$lang$ctorPrWriter = (function (this__44534__auto__,writer__44535__auto__,opt__44536__auto__){
return cljs.core._write(writer__44535__auto__,"com.wsscode.pathom.viz.index-explorer/AttributeIndex");
});
if((typeof com !== 'undefined') && (typeof com.wsscode !== 'undefined') && (typeof com.wsscode.pathom !== 'undefined') && (typeof com.wsscode.pathom.viz !== 'undefined') && (typeof com.wsscode.pathom.viz.index_explorer !== 'undefined') && (typeof com.wsscode.pathom.viz.index_explorer.ResolverIndex !== 'undefined')){
} else {
/**
 * @constructor
 * @nocollapse
 */
com.wsscode.pathom.viz.index_explorer.ResolverIndex = (function com$wsscode$pathom$viz$index_explorer$ResolverIndex(){
var this__44531__auto__ = this;
React.Component.apply(this__44531__auto__,arguments);

if((!((this__44531__auto__.initLocalState == null)))){
this__44531__auto__.state = this__44531__auto__.initLocalState();
} else {
this__44531__auto__.state = ({});
}

return this__44531__auto__;
});

var G__49111_49513 = com.wsscode.pathom.viz.index_explorer.ResolverIndex.prototype;
var G__49112_49514 = React.Component.prototype;
var G__49113_49515 = fulcro.client.primitives.default_component_prototype;
goog.object.extend(G__49111_49513,G__49112_49514,G__49113_49515);
}

fulcro.client.primitives._register_component_BANG_(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","ResolverIndex","com.wsscode.pathom.viz.index-explorer/ResolverIndex",-1943751145),com.wsscode.pathom.viz.index_explorer.ResolverIndex);

var x49114_49516 = com.wsscode.pathom.viz.index_explorer.ResolverIndex.prototype;
x49114_49516.render = ((function (x49114_49516){
return (function (){
var this__43449__auto__ = this;
var _ = this__43449__auto__;
var _STAR_reconciler_STAR__orig_val__49115 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__49116 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__49117 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__49118 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__49119 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__49120 = fulcro.client.primitives.get_reconciler(this__43449__auto__);
var _STAR_depth_STAR__temp_val__49121 = (fulcro.client.primitives.depth(this__43449__auto__) + (1));
var _STAR_shared_STAR__temp_val__49122 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__43449__auto__);
var _STAR_instrument_STAR__temp_val__49123 = fulcro.client.primitives.instrument(this__43449__auto__);
var _STAR_parent_STAR__temp_val__49124 = this__43449__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__49120;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__49121;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__49122;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__49123;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__49124;

try{var ___$1 = fulcro.client.primitives.props(_);
return null;
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__49119;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__49118;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__49117;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__49116;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__49115;
}});})(x49114_49516))
;


com.wsscode.pathom.viz.index_explorer.ResolverIndex.prototype.constructor = com.wsscode.pathom.viz.index_explorer.ResolverIndex;

com.wsscode.pathom.viz.index_explorer.ResolverIndex.prototype.constructor.displayName = "com.wsscode.pathom.viz.index-explorer/ResolverIndex";

com.wsscode.pathom.viz.index_explorer.ResolverIndex.prototype.fulcro$isComponent = true;

var x49125_49517 = com.wsscode.pathom.viz.index_explorer.ResolverIndex;
x49125_49517.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x49125_49517.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x49125_49517){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x49125_49517))
;

x49125_49517.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x49125_49517.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x49125_49517){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795)], null);
});})(x49125_49517))
;


var x49126_49518 = com.wsscode.pathom.viz.index_explorer.ResolverIndex.prototype;
x49126_49518.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x49126_49518.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x49126_49518){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x49126_49518))
;

x49126_49518.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x49126_49518.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x49126_49518){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795)], null);
});})(x49126_49518))
;


com.wsscode.pathom.viz.index_explorer.ResolverIndex.cljs$lang$type = true;

com.wsscode.pathom.viz.index_explorer.ResolverIndex.cljs$lang$ctorStr = "com.wsscode.pathom.viz.index-explorer/ResolverIndex";

com.wsscode.pathom.viz.index_explorer.ResolverIndex.cljs$lang$ctorPrWriter = (function (this__44534__auto__,writer__44535__auto__,opt__44536__auto__){
return cljs.core._write(writer__44535__auto__,"com.wsscode.pathom.viz.index-explorer/ResolverIndex");
});
if((typeof com !== 'undefined') && (typeof com.wsscode !== 'undefined') && (typeof com.wsscode.pathom !== 'undefined') && (typeof com.wsscode.pathom.viz !== 'undefined') && (typeof com.wsscode.pathom.viz.index_explorer !== 'undefined') && (typeof com.wsscode.pathom.viz.index_explorer.MutationIndex !== 'undefined')){
} else {
/**
 * @constructor
 * @nocollapse
 */
com.wsscode.pathom.viz.index_explorer.MutationIndex = (function com$wsscode$pathom$viz$index_explorer$MutationIndex(){
var this__44531__auto__ = this;
React.Component.apply(this__44531__auto__,arguments);

if((!((this__44531__auto__.initLocalState == null)))){
this__44531__auto__.state = this__44531__auto__.initLocalState();
} else {
this__44531__auto__.state = ({});
}

return this__44531__auto__;
});

var G__49129_49519 = com.wsscode.pathom.viz.index_explorer.MutationIndex.prototype;
var G__49130_49520 = React.Component.prototype;
var G__49131_49521 = fulcro.client.primitives.default_component_prototype;
goog.object.extend(G__49129_49519,G__49130_49520,G__49131_49521);
}

fulcro.client.primitives._register_component_BANG_(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","MutationIndex","com.wsscode.pathom.viz.index-explorer/MutationIndex",21487988),com.wsscode.pathom.viz.index_explorer.MutationIndex);

var x49132_49522 = com.wsscode.pathom.viz.index_explorer.MutationIndex.prototype;
x49132_49522.render = ((function (x49132_49522){
return (function (){
var this__43449__auto__ = this;
var _ = this__43449__auto__;
var _STAR_reconciler_STAR__orig_val__49133 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__49134 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__49135 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__49136 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__49137 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__49138 = fulcro.client.primitives.get_reconciler(this__43449__auto__);
var _STAR_depth_STAR__temp_val__49139 = (fulcro.client.primitives.depth(this__43449__auto__) + (1));
var _STAR_shared_STAR__temp_val__49140 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__43449__auto__);
var _STAR_instrument_STAR__temp_val__49141 = fulcro.client.primitives.instrument(this__43449__auto__);
var _STAR_parent_STAR__temp_val__49142 = this__43449__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__49138;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__49139;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__49140;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__49141;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__49142;

try{var ___$1 = fulcro.client.primitives.props(_);
return null;
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__49137;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__49136;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__49135;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__49134;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__49133;
}});})(x49132_49522))
;


com.wsscode.pathom.viz.index_explorer.MutationIndex.prototype.constructor = com.wsscode.pathom.viz.index_explorer.MutationIndex;

com.wsscode.pathom.viz.index_explorer.MutationIndex.prototype.constructor.displayName = "com.wsscode.pathom.viz.index-explorer/MutationIndex";

com.wsscode.pathom.viz.index_explorer.MutationIndex.prototype.fulcro$isComponent = true;

var x49143_49523 = com.wsscode.pathom.viz.index_explorer.MutationIndex;
x49143_49523.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x49143_49523.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x49143_49523){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutation-sym","com.wsscode.pathom.viz.index-explorer/mutation-sym",-191280951),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutation-sym","com.wsscode.pathom.viz.index-explorer/mutation-sym",-191280951).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x49143_49523))
;

x49143_49523.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x49143_49523.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x49143_49523){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutation-sym","com.wsscode.pathom.viz.index-explorer/mutation-sym",-191280951),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795)], null);
});})(x49143_49523))
;


var x49144_49524 = com.wsscode.pathom.viz.index_explorer.MutationIndex.prototype;
x49144_49524.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x49144_49524.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x49144_49524){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutation-sym","com.wsscode.pathom.viz.index-explorer/mutation-sym",-191280951),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutation-sym","com.wsscode.pathom.viz.index-explorer/mutation-sym",-191280951).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x49144_49524))
;

x49144_49524.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x49144_49524.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x49144_49524){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutation-sym","com.wsscode.pathom.viz.index-explorer/mutation-sym",-191280951),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795)], null);
});})(x49144_49524))
;


com.wsscode.pathom.viz.index_explorer.MutationIndex.cljs$lang$type = true;

com.wsscode.pathom.viz.index_explorer.MutationIndex.cljs$lang$ctorStr = "com.wsscode.pathom.viz.index-explorer/MutationIndex";

com.wsscode.pathom.viz.index_explorer.MutationIndex.cljs$lang$ctorPrWriter = (function (this__44534__auto__,writer__44535__auto__,opt__44536__auto__){
return cljs.core._write(writer__44535__auto__,"com.wsscode.pathom.viz.index-explorer/MutationIndex");
});
com.wsscode.pathom.viz.index_explorer.history_size_limit = (200);
com.wsscode.pathom.viz.index_explorer.history_append = (function com$wsscode$pathom$viz$index_explorer$history_append(p__49145,ref){
var map__49146 = p__49145;
var map__49146__$1 = (((((!((map__49146 == null))))?(((((map__49146.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49146.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49146):map__49146);
var x = map__49146__$1;
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49146__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","history","com.wsscode.pathom.viz.index-explorer/history",-288879737));
var history_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49146__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","history-index","com.wsscode.pathom.viz.index-explorer/history-index",-368029918));
var index = (history_index + (1));
var history_SINGLEQUOTE_ = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(history,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(index,com.wsscode.pathom.viz.index_explorer.history_size_limit))?(1):(0)),index),ref);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(x,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","history","com.wsscode.pathom.viz.index-explorer/history",-288879737),history_SINGLEQUOTE_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","history-index","com.wsscode.pathom.viz.index-explorer/history-index",-368029918),(cljs.core.count(history_SINGLEQUOTE_) - (1)),new cljs.core.Keyword("ui","page","ui/page",849066625),ref], 0));
});
fulcro.client.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("com.wsscode.pathom.viz.index-explorer","navigate-to-attribute","com.wsscode.pathom.viz.index-explorer/navigate-to-attribute",-1900563958,null),(function (fulcro_incoming_env,_,p__49148){
var map__49149 = p__49148;
var map__49149__$1 = (((((!((map__49149 == null))))?(((((map__49149.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49149.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49149):map__49149);
var attribute = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49149__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var map__49151 = fulcro_incoming_env;
var map__49151__$1 = (((((!((map__49151 == null))))?(((((map__49151.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49151.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49151):map__49151);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49151__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49151__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__49151,map__49151__$1,state,ref,map__49149,map__49149__$1,attribute){
return (function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,fulcro.client.primitives.merge_component,com.wsscode.pathom.viz.index_explorer.AttributeView,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),attribute], null));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.update_in,ref,com.wsscode.pathom.viz.index_explorer.history_append,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),attribute], null)], 0));
});})(map__49151,map__49151__$1,state,ref,map__49149,map__49149__$1,attribute))
], null);
})()], 0));
}));
fulcro.client.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("com.wsscode.pathom.viz.index-explorer","navigate-to-resolver","com.wsscode.pathom.viz.index-explorer/navigate-to-resolver",1471827576,null),(function (fulcro_incoming_env,_,p__49153){
var map__49154 = p__49153;
var map__49154__$1 = (((((!((map__49154 == null))))?(((((map__49154.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49154.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49154):map__49154);
var sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49154__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var map__49156 = fulcro_incoming_env;
var map__49156__$1 = (((((!((map__49156 == null))))?(((((map__49156.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49156.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49156):map__49156);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49156__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49156__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__49156,map__49156__$1,state,ref,map__49154,map__49154__$1,sym){
return (function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,fulcro.client.primitives.merge_component,com.wsscode.pathom.viz.index_explorer.ResolverView,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),sym], null));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.update_in,ref,com.wsscode.pathom.viz.index_explorer.history_append,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),sym], null)], 0));
});})(map__49156,map__49156__$1,state,ref,map__49154,map__49154__$1,sym))
], null);
})()], 0));
}));
fulcro.client.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("com.wsscode.pathom.viz.index-explorer","navigate-to-mutation","com.wsscode.pathom.viz.index-explorer/navigate-to-mutation",2015131713,null),(function (fulcro_incoming_env,_,p__49158){
var map__49159 = p__49158;
var map__49159__$1 = (((((!((map__49159 == null))))?(((((map__49159.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49159.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49159):map__49159);
var mutation_sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49159__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutation-sym","com.wsscode.pathom.viz.index-explorer/mutation-sym",-191280951));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var map__49161 = fulcro_incoming_env;
var map__49161__$1 = (((((!((map__49161 == null))))?(((((map__49161.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49161.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49161):map__49161);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49161__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49161__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__49161,map__49161__$1,state,ref,map__49159,map__49159__$1,mutation_sym){
return (function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,fulcro.client.primitives.merge_component,com.wsscode.pathom.viz.index_explorer.MutationView,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutation-sym","com.wsscode.pathom.viz.index-explorer/mutation-sym",-191280951),mutation_sym], null));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.update_in,ref,com.wsscode.pathom.viz.index_explorer.history_append,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutation-sym","com.wsscode.pathom.viz.index-explorer/mutation-sym",-191280951),mutation_sym], null)], 0));
});})(map__49161,map__49161__$1,state,ref,map__49159,map__49159__$1,mutation_sym))
], null);
})()], 0));
}));
fulcro.client.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("com.wsscode.pathom.viz.index-explorer","navigate-stats","com.wsscode.pathom.viz.index-explorer/navigate-stats",-1515292229,null),(function (fulcro_incoming_env,_,___$1){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var map__49163 = fulcro_incoming_env;
var map__49163__$1 = (((((!((map__49163 == null))))?(((((map__49163.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49163.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49163):map__49163);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49163__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49163__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__49163,map__49163__$1,state,ref){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.update_in,ref,com.wsscode.pathom.viz.index_explorer.history_append,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ref], 0));
});})(map__49163,map__49163__$1,state,ref))
], null);
})()], 0));
}));
fulcro.client.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("com.wsscode.pathom.viz.index-explorer","navigate-graph-view","com.wsscode.pathom.viz.index-explorer/navigate-graph-view",-277547314,null),(function (fulcro_incoming_env,_,___$1){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var map__49165 = fulcro_incoming_env;
var map__49165__$1 = (((((!((map__49165 == null))))?(((((map__49165.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49165.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49165):map__49165);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49165__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49165__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__49165,map__49165__$1,state,ref){
return (function (){
var id = cljs.core.second(ref);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,fulcro.client.primitives.merge_component,com.wsscode.pathom.viz.index_explorer.FullGraphView,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","graph-view-id","com.wsscode.pathom.viz.index-explorer/graph-view-id",211965428),id], null));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.update_in,ref,com.wsscode.pathom.viz.index_explorer.history_append,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","graph-view-id","com.wsscode.pathom.viz.index-explorer/graph-view-id",211965428),id], null)], 0));
});})(map__49165,map__49165__$1,state,ref))
], null);
})()], 0));
}));
com.wsscode.pathom.viz.index_explorer.can_go_back_QMARK_ = (function com$wsscode$pathom$viz$index_explorer$can_go_back_QMARK_(p__49167){
var map__49168 = p__49167;
var map__49168__$1 = (((((!((map__49168 == null))))?(((((map__49168.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49168.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49168):map__49168);
var history_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49168__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","history-index","com.wsscode.pathom.viz.index-explorer/history-index",-368029918));
return (history_index > (0));
});
com.wsscode.pathom.viz.index_explorer.can_go_forward_QMARK_ = (function com$wsscode$pathom$viz$index_explorer$can_go_forward_QMARK_(p__49170){
var map__49171 = p__49170;
var map__49171__$1 = (((((!((map__49171 == null))))?(((((map__49171.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49171.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49171):map__49171);
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49171__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","history","com.wsscode.pathom.viz.index-explorer/history",-288879737));
var history_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49171__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","history-index","com.wsscode.pathom.viz.index-explorer/history-index",-368029918));
return (history_index < (cljs.core.count(history) - (1)));
});
fulcro.client.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("com.wsscode.pathom.viz.index-explorer","navigate-backwards","com.wsscode.pathom.viz.index-explorer/navigate-backwards",1747967871,null),(function (fulcro_incoming_env,_,___$1){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var map__49173 = fulcro_incoming_env;
var map__49173__$1 = (((((!((map__49173 == null))))?(((((map__49173.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49173.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49173):map__49173);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49173__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49173__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__49173,map__49173__$1,state,ref){
return (function (){
var map__49175 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),ref);
var map__49175__$1 = (((((!((map__49175 == null))))?(((((map__49175.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49175.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49175):map__49175);
var props = map__49175__$1;
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49175__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","history","com.wsscode.pathom.viz.index-explorer/history",-288879737));
var history_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49175__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","history-index","com.wsscode.pathom.viz.index-explorer/history-index",-368029918));
if(com.wsscode.pathom.viz.index_explorer.can_go_back_QMARK_(props)){
var page = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(history,(history_index - (1)));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.update_in,ref,cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("ui","page","ui/page",849066625),page,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","history-index","com.wsscode.pathom.viz.index-explorer/history-index",-368029918),(history_index - (1))], 0));
} else {
return null;
}
});})(map__49173,map__49173__$1,state,ref))
], null);
})()], 0));
}));
fulcro.client.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("com.wsscode.pathom.viz.index-explorer","navigate-forwards","com.wsscode.pathom.viz.index-explorer/navigate-forwards",-2084817330,null),(function (fulcro_incoming_env,_,___$1){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var map__49177 = fulcro_incoming_env;
var map__49177__$1 = (((((!((map__49177 == null))))?(((((map__49177.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49177.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49177):map__49177);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49177__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49177__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__49177,map__49177__$1,state,ref){
return (function (){
var map__49179 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),ref);
var map__49179__$1 = (((((!((map__49179 == null))))?(((((map__49179.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49179.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49179):map__49179);
var props = map__49179__$1;
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49179__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","history","com.wsscode.pathom.viz.index-explorer/history",-288879737));
var history_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49179__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","history-index","com.wsscode.pathom.viz.index-explorer/history-index",-368029918));
if(com.wsscode.pathom.viz.index_explorer.can_go_forward_QMARK_(props)){
var page = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(history,(history_index + (1)));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.update_in,ref,cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("ui","page","ui/page",849066625),page,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","history-index","com.wsscode.pathom.viz.index-explorer/history-index",-368029918),(history_index + (1))], 0));
} else {
return null;
}
});})(map__49177,map__49177__$1,state,ref))
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
var this__44531__auto__ = this;
React.Component.apply(this__44531__auto__,arguments);

if((!((this__44531__auto__.initLocalState == null)))){
this__44531__auto__.state = this__44531__auto__.initLocalState();
} else {
this__44531__auto__.state = ({});
}

return this__44531__auto__;
});

var G__49186_49525 = com.wsscode.pathom.viz.index_explorer.IndexExplorer.prototype;
var G__49187_49526 = React.Component.prototype;
var G__49188_49527 = fulcro.client.primitives.default_component_prototype;
goog.object.extend(G__49186_49525,G__49187_49526,G__49188_49527);
}

fulcro.client.primitives._register_component_BANG_(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","IndexExplorer","com.wsscode.pathom.viz.index-explorer/IndexExplorer",493663752),com.wsscode.pathom.viz.index_explorer.IndexExplorer);

var x49189_49528 = com.wsscode.pathom.viz.index_explorer.IndexExplorer.prototype;
x49189_49528.render = ((function (x49189_49528){
return (function (){
var this__43449__auto__ = this;
var this$ = this__43449__auto__;
var _STAR_reconciler_STAR__orig_val__49190 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__49191 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__49192 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__49193 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__49194 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__49195 = fulcro.client.primitives.get_reconciler(this__43449__auto__);
var _STAR_depth_STAR__temp_val__49196 = (fulcro.client.primitives.depth(this__43449__auto__) + (1));
var _STAR_shared_STAR__temp_val__49197 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__43449__auto__);
var _STAR_instrument_STAR__temp_val__49198 = fulcro.client.primitives.instrument(this__43449__auto__);
var _STAR_parent_STAR__temp_val__49199 = this__43449__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__49195;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__49196;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__49197;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__49198;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__49199;

try{var map__49200 = fulcro.client.primitives.props(this$);
var map__49200__$1 = (((((!((map__49200 == null))))?(((((map__49200.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49200.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49200):map__49200);
var props = map__49200__$1;
var index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49200__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","index","com.wsscode.pathom.viz.index-explorer/index",-1539481252));
var attributes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49200__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attributes","com.wsscode.pathom.viz.index-explorer/attributes",-67264281));
var menu = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49200__$1,new cljs.core.Keyword("ui","menu","ui/menu",352268114));
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49200__$1,new cljs.core.Keyword("ui","page","ui/page",849066625));
var extensions = fulcro.client.primitives.get_computed.cljs$core$IFn$_invoke$arity$1(this$);
var G__49202 = goog.object.get(com.wsscode.pathom.viz.index_explorer.ExtensionContext,"Provider");
var G__49203 = ({"value": extensions});
var G__49204 = (function (){var G__49205 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"react-key","react-key",1337881348),"container",new cljs.core.Keyword(null,"classes","classes",2037804510),com.wsscode.pathom.viz.ui.kit.ccss.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".out-container",".out-container",-265742466)], 0))], null);
var G__49206 = (function (){var G__49208 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"classes","classes",2037804510),com.wsscode.pathom.viz.ui.kit.ccss.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".menu",".menu",986259874)], 0))], null);
var G__49209 = (function (){var G__49210 = menu;
var G__49211 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","on-select-attribute","com.wsscode.pathom.viz.index-explorer/on-select-attribute",2006419034),fulcro.client.primitives.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"select-attribute","select-attribute",-65313489)),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","on-select-resolver","com.wsscode.pathom.viz.index-explorer/on-select-resolver",1600914463),fulcro.client.primitives.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"select-resolver","select-resolver",43705318)),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","on-select-mutation","com.wsscode.pathom.viz.index-explorer/on-select-mutation",2007280602),fulcro.client.primitives.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"select-mutation","select-mutation",-1215580866))], null);
return (com.wsscode.pathom.viz.index_explorer.search_everything.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.search_everything.cljs$core$IFn$_invoke$arity$2(G__49210,G__49211) : com.wsscode.pathom.viz.index_explorer.search_everything.call(null,G__49210,G__49211));
})();
return (com.wsscode.pathom.viz.ui.kit.column.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.column.cljs$core$IFn$_invoke$arity$2(G__49208,G__49209) : com.wsscode.pathom.viz.ui.kit.column.call(null,G__49208,G__49209));
})();
var G__49207 = (function (){var G__49212 = com.wsscode.pathom.viz.ui.kit.gc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".flex",".flex",-73425686),new cljs.core.Keyword(null,".no-scrollbars",".no-scrollbars",2090539071)], 0));
var G__49213 = (function (){var G__49215 = cljs.core.PersistentArrayMap.EMPTY;
var G__49216 = (function (){var G__49220 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),fulcro.client.primitives.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"go-back","go-back",1642157803)),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),(!(com.wsscode.pathom.viz.index_explorer.can_go_back_QMARK_(props)))], null);
var G__49221 = "\u25C0";
return (com.wsscode.pathom.viz.ui.kit.button.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.button.cljs$core$IFn$_invoke$arity$2(G__49220,G__49221) : com.wsscode.pathom.viz.ui.kit.button.call(null,G__49220,G__49221));
})();
var G__49217 = (function (){var G__49222 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),fulcro.client.primitives.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"go-forward","go-forward",666578902)),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),(!(com.wsscode.pathom.viz.index_explorer.can_go_forward_QMARK_(props)))], null);
var G__49223 = "\u25B6";
return (com.wsscode.pathom.viz.ui.kit.button.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.button.cljs$core$IFn$_invoke$arity$2(G__49222,G__49223) : com.wsscode.pathom.viz.ui.kit.button.call(null,G__49222,G__49223));
})();
var G__49218 = (function (){var G__49224 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),fulcro.client.primitives.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"go-stats","go-stats",156008525)),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((com.wsscode.pathom.viz.index_explorer.main_view_ident.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom.viz.index_explorer.main_view_ident.cljs$core$IFn$_invoke$arity$1(page) : com.wsscode.pathom.viz.index_explorer.main_view_ident.call(null,page)),fulcro.client.primitives.get_ident.cljs$core$IFn$_invoke$arity$1(this$)),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"marginLeft","marginLeft",-551287007),"12px"], null)], null);
var G__49225 = "Stats";
return (com.wsscode.pathom.viz.ui.kit.button.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.button.cljs$core$IFn$_invoke$arity$2(G__49224,G__49225) : com.wsscode.pathom.viz.ui.kit.button.call(null,G__49224,G__49225));
})();
var G__49219 = (function (){var G__49226 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),fulcro.client.primitives.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"go-graph-view","go-graph-view",473251058)),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first((com.wsscode.pathom.viz.index_explorer.main_view_ident.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom.viz.index_explorer.main_view_ident.cljs$core$IFn$_invoke$arity$1(page) : com.wsscode.pathom.viz.index_explorer.main_view_ident.call(null,page))),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","graph-view-id","com.wsscode.pathom.viz.index-explorer/graph-view-id",211965428)),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"marginLeft","marginLeft",-551287007),"12px"], null)], null);
var G__49227 = "Full Graph";
return (com.wsscode.pathom.viz.ui.kit.button.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.button.cljs$core$IFn$_invoke$arity$2(G__49226,G__49227) : com.wsscode.pathom.viz.ui.kit.button.call(null,G__49226,G__49227));
})();
return (com.wsscode.pathom.viz.ui.kit.row.cljs$core$IFn$_invoke$arity$5 ? com.wsscode.pathom.viz.ui.kit.row.cljs$core$IFn$_invoke$arity$5(G__49215,G__49216,G__49217,G__49218,G__49219) : com.wsscode.pathom.viz.ui.kit.row.call(null,G__49215,G__49216,G__49217,G__49218,G__49219));
})();
var G__49214 = (cljs.core.truth_(page)?(function (){var G__49228 = page;
var G__49229 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(index,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attributes","com.wsscode.pathom.viz.index-explorer/attributes",-67264281),attributes,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","on-select-attribute","com.wsscode.pathom.viz.index-explorer/on-select-attribute",2006419034),fulcro.client.primitives.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"select-attribute","select-attribute",-65313489)),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","on-select-resolver","com.wsscode.pathom.viz.index-explorer/on-select-resolver",1600914463),fulcro.client.primitives.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"select-resolver","select-resolver",43705318)),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","on-select-mutation","com.wsscode.pathom.viz.index-explorer/on-select-mutation",2007280602),fulcro.client.primitives.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"select-mutation","select-mutation",-1215580866))], 0));
return (com.wsscode.pathom.viz.index_explorer.main_view_union.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.main_view_union.cljs$core$IFn$_invoke$arity$2(G__49228,G__49229) : com.wsscode.pathom.viz.index_explorer.main_view_union.call(null,G__49228,G__49229));
})():null);
return (com.wsscode.pathom.viz.ui.kit.column.cljs$core$IFn$_invoke$arity$3 ? com.wsscode.pathom.viz.ui.kit.column.cljs$core$IFn$_invoke$arity$3(G__49212,G__49213,G__49214) : com.wsscode.pathom.viz.ui.kit.column.call(null,G__49212,G__49213,G__49214));
})();
return (com.wsscode.pathom.viz.ui.kit.row.cljs$core$IFn$_invoke$arity$3 ? com.wsscode.pathom.viz.ui.kit.row.cljs$core$IFn$_invoke$arity$3(G__49205,G__49206,G__49207) : com.wsscode.pathom.viz.ui.kit.row.call(null,G__49205,G__49206,G__49207));
})();
return (fulcro.client.localized_dom.create_element.cljs$core$IFn$_invoke$arity$3 ? fulcro.client.localized_dom.create_element.cljs$core$IFn$_invoke$arity$3(G__49202,G__49203,G__49204) : fulcro.client.localized_dom.create_element.call(null,G__49202,G__49203,G__49204));
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__49194;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__49193;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__49192;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__49191;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__49190;
}});})(x49189_49528))
;

x49189_49528.initLocalState = ((function (x49189_49528){
return (function (){
var this$ = this;
var ret__43424__auto__ = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"select-attribute","select-attribute",-65313489),((function (this$,x49189_49528){
return (function (p1__49181_SHARP_){
return fulcro.client.primitives.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("com.wsscode.pathom.viz.index-explorer","navigate-to-attribute","com.wsscode.pathom.viz.index-explorer/navigate-to-attribute",-1900563958,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),null,(1),null)),(new cljs.core.List(null,p1__49181_SHARP_,null,(1),null)))))),null,(1),null)))))], null));
});})(this$,x49189_49528))
,new cljs.core.Keyword(null,"select-resolver","select-resolver",43705318),((function (this$,x49189_49528){
return (function (p1__49182_SHARP_){
return fulcro.client.primitives.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("com.wsscode.pathom.viz.index-explorer","navigate-to-resolver","com.wsscode.pathom.viz.index-explorer/navigate-to-resolver",1471827576,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),null,(1),null)),(new cljs.core.List(null,p1__49182_SHARP_,null,(1),null)))))),null,(1),null)))))], null));
});})(this$,x49189_49528))
,new cljs.core.Keyword(null,"select-mutation","select-mutation",-1215580866),((function (this$,x49189_49528){
return (function (p1__49183_SHARP_){
return fulcro.client.primitives.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("com.wsscode.pathom.viz.index-explorer","navigate-to-mutation","com.wsscode.pathom.viz.index-explorer/navigate-to-mutation",2015131713,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutation-sym","com.wsscode.pathom.viz.index-explorer/mutation-sym",-191280951),null,(1),null)),(new cljs.core.List(null,p1__49183_SHARP_,null,(1),null)))))),null,(1),null)))))], null));
});})(this$,x49189_49528))
,new cljs.core.Keyword(null,"go-back","go-back",1642157803),((function (this$,x49189_49528){
return (function (){
return fulcro.client.primitives.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol("com.wsscode.pathom.viz.index-explorer","navigate-backwards","com.wsscode.pathom.viz.index-explorer/navigate-backwards",1747967871,null),null,(1),null)))))], null));
});})(this$,x49189_49528))
,new cljs.core.Keyword(null,"go-forward","go-forward",666578902),((function (this$,x49189_49528){
return (function (){
return fulcro.client.primitives.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol("com.wsscode.pathom.viz.index-explorer","navigate-forwards","com.wsscode.pathom.viz.index-explorer/navigate-forwards",-2084817330,null),null,(1),null)))))], null));
});})(this$,x49189_49528))
,new cljs.core.Keyword(null,"go-stats","go-stats",156008525),((function (this$,x49189_49528){
return (function (){
return fulcro.client.primitives.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol("com.wsscode.pathom.viz.index-explorer","navigate-stats","com.wsscode.pathom.viz.index-explorer/navigate-stats",-1515292229,null),null,(1),null)))))], null));
});})(this$,x49189_49528))
,new cljs.core.Keyword(null,"go-graph-view","go-graph-view",473251058),((function (this$,x49189_49528){
return (function (){
return fulcro.client.primitives.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol("com.wsscode.pathom.viz.index-explorer","navigate-graph-view","com.wsscode.pathom.viz.index-explorer/navigate-graph-view",-277547314,null),null,(1),null)))))], null));
});})(this$,x49189_49528))
], null);
var obj49231 = ({"fulcro$state":ret__43424__auto__});
return obj49231;
});})(x49189_49528))
;


com.wsscode.pathom.viz.index_explorer.IndexExplorer.prototype.constructor = com.wsscode.pathom.viz.index_explorer.IndexExplorer;

com.wsscode.pathom.viz.index_explorer.IndexExplorer.prototype.constructor.displayName = "com.wsscode.pathom.viz.index-explorer/IndexExplorer";

com.wsscode.pathom.viz.index_explorer.IndexExplorer.prototype.fulcro$isComponent = true;

var x49232_49529 = com.wsscode.pathom.viz.index_explorer.IndexExplorer;
x49232_49529.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x49232_49529.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x49232_49529){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".out-container",".out-container",-265742466),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"flex","flex",-1425124628),"1"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"flex","flex",-1425124628),"1",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"hidden"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".graph",".graph",-327673667),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"height","height",1025178622),"800px",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #000"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".menu",".menu",986259874),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"16px",new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),"16px",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"auto",new cljs.core.Keyword(null,"width","width",-384071477),"30%"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"$row-center","$row-center",-1606740968),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"$scrollbars","$scrollbars",938627053),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"overflow","overflow",2058931880),"auto"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"$tag-spaced","$tag-spaced",-1216528780),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"$tag","$tag",1471772486),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"4px"], null)], null)], null)], null);
});})(x49232_49529))
;

x49232_49529.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x49232_49529){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.viz.index_explorer.AttributeLink,com.wsscode.pathom.viz.index_explorer.ResolverLink,com.wsscode.pathom.viz.index_explorer.MutationLink,com.wsscode.pathom.viz.ui.kit.UIKit], null);
});})(x49232_49529))
;

x49232_49529.fulcro$client$primitives$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

x49232_49529.fulcro$client$primitives$InitialAppState$initial_state$arity$2 = ((function (x49232_49529){
return (function (c,params){
var c__$1 = this;
return fulcro.client.primitives.make_state_map(cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword("ui","page","ui/page",849066625),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","resolvers","com.wsscode.pathom.viz.index-explorer/resolvers",-1064744669),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-type-mismatch","com.wsscode.pathom.viz.index-explorer/attr-type-mismatch",-1230484441),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attributes","com.wsscode.pathom.viz.index-explorer/attributes",-67264281),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","idents","com.wsscode.pathom.viz.index-explorer/idents",189283656),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","top-connection-hubs","com.wsscode.pathom.viz.index-explorer/top-connection-hubs",1843947657),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","globals","com.wsscode.pathom.viz.index-explorer/globals",1704747305),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutations","com.wsscode.pathom.viz.index-explorer/mutations",329050290),new cljs.core.Keyword("ui","menu","ui/menu",352268114)],[com.wsscode.pathom.viz.index_explorer.MainViewUnion,com.wsscode.pathom.viz.index_explorer.ResolverIndex,com.wsscode.pathom.viz.index_explorer.AttributeIndex,com.wsscode.pathom.viz.index_explorer.AttributeIndex,com.wsscode.pathom.viz.index_explorer.AttributeIndex,com.wsscode.pathom.viz.index_explorer.AttributeIndex,com.wsscode.pathom.viz.index_explorer.AttributeIndex,com.wsscode.pathom.viz.index_explorer.MutationIndex,com.wsscode.pathom.viz.index_explorer.SearchEverything]),params);
});})(x49232_49529))
;

x49232_49529.fulcro$client$primitives$IPreMerge$ = cljs.core.PROTOCOL_SENTINEL;

x49232_49529.fulcro$client$primitives$IPreMerge$pre_merge_STAR_$arity$2 = ((function (x49232_49529){
return (function (this$,p__49233){
var map__49234 = p__49233;
var map__49234__$1 = (((((!((map__49234 == null))))?(((((map__49234.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49234.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49234):map__49234);
var current_normalized = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49234__$1,new cljs.core.Keyword(null,"current-normalized","current-normalized",851723724));
var data_tree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49234__$1,new cljs.core.Keyword(null,"data-tree","data-tree",1311167582));
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
});})(x49232_49529))
;

x49232_49529.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x49232_49529.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x49232_49529){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x49232_49529))
;

x49232_49529.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x49232_49529.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x49232_49529){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","index","com.wsscode.pathom.viz.index-explorer/index",-1539481252),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","idx","com.wsscode.pathom.viz.index-explorer/idx",1045759782),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","history","com.wsscode.pathom.viz.index-explorer/history",-288879737),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","history-index","com.wsscode.pathom.viz.index-explorer/history-index",-368029918),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","menu","ui/menu",352268114),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.SearchEverything)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attributes","com.wsscode.pathom.viz.index-explorer/attributes",-67264281),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.AttributeIndex)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","globals","com.wsscode.pathom.viz.index-explorer/globals",1704747305),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.AttributeIndex)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","idents","com.wsscode.pathom.viz.index-explorer/idents",189283656),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.AttributeIndex)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","top-connection-hubs","com.wsscode.pathom.viz.index-explorer/top-connection-hubs",1843947657),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.AttributeIndex)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-type-mismatch","com.wsscode.pathom.viz.index-explorer/attr-type-mismatch",-1230484441),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.AttributeIndex)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","resolvers","com.wsscode.pathom.viz.index-explorer/resolvers",-1064744669),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.ResolverIndex)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutations","com.wsscode.pathom.viz.index-explorer/mutations",329050290),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.MutationIndex)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","page","ui/page",849066625),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.MainViewUnion)], null)], null);
});})(x49232_49529))
;


var x49236_49530 = com.wsscode.pathom.viz.index_explorer.IndexExplorer.prototype;
x49236_49530.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x49236_49530.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x49236_49530){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".out-container",".out-container",-265742466),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"flex","flex",-1425124628),"1"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"flex","flex",-1425124628),"1",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"hidden"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".graph",".graph",-327673667),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"height","height",1025178622),"800px",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #000"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".menu",".menu",986259874),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"16px",new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),"16px",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"auto",new cljs.core.Keyword(null,"width","width",-384071477),"30%"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"$row-center","$row-center",-1606740968),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"$scrollbars","$scrollbars",938627053),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"overflow","overflow",2058931880),"auto"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"$tag-spaced","$tag-spaced",-1216528780),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"$tag","$tag",1471772486),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"4px"], null)], null)], null)], null);
});})(x49236_49530))
;

x49236_49530.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x49236_49530){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.viz.index_explorer.AttributeLink,com.wsscode.pathom.viz.index_explorer.ResolverLink,com.wsscode.pathom.viz.index_explorer.MutationLink,com.wsscode.pathom.viz.ui.kit.UIKit], null);
});})(x49236_49530))
;

x49236_49530.fulcro$client$primitives$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

x49236_49530.fulcro$client$primitives$InitialAppState$initial_state$arity$2 = ((function (x49236_49530){
return (function (c,params){
var c__$1 = this;
return fulcro.client.primitives.make_state_map(cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword("ui","page","ui/page",849066625),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","resolvers","com.wsscode.pathom.viz.index-explorer/resolvers",-1064744669),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-type-mismatch","com.wsscode.pathom.viz.index-explorer/attr-type-mismatch",-1230484441),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attributes","com.wsscode.pathom.viz.index-explorer/attributes",-67264281),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","idents","com.wsscode.pathom.viz.index-explorer/idents",189283656),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","top-connection-hubs","com.wsscode.pathom.viz.index-explorer/top-connection-hubs",1843947657),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","globals","com.wsscode.pathom.viz.index-explorer/globals",1704747305),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutations","com.wsscode.pathom.viz.index-explorer/mutations",329050290),new cljs.core.Keyword("ui","menu","ui/menu",352268114)],[com.wsscode.pathom.viz.index_explorer.MainViewUnion,com.wsscode.pathom.viz.index_explorer.ResolverIndex,com.wsscode.pathom.viz.index_explorer.AttributeIndex,com.wsscode.pathom.viz.index_explorer.AttributeIndex,com.wsscode.pathom.viz.index_explorer.AttributeIndex,com.wsscode.pathom.viz.index_explorer.AttributeIndex,com.wsscode.pathom.viz.index_explorer.AttributeIndex,com.wsscode.pathom.viz.index_explorer.MutationIndex,com.wsscode.pathom.viz.index_explorer.SearchEverything]),params);
});})(x49236_49530))
;

x49236_49530.fulcro$client$primitives$IPreMerge$ = cljs.core.PROTOCOL_SENTINEL;

x49236_49530.fulcro$client$primitives$IPreMerge$pre_merge_STAR_$arity$2 = ((function (x49236_49530){
return (function (this$,p__49237){
var map__49238 = p__49237;
var map__49238__$1 = (((((!((map__49238 == null))))?(((((map__49238.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49238.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49238):map__49238);
var current_normalized = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49238__$1,new cljs.core.Keyword(null,"current-normalized","current-normalized",851723724));
var data_tree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49238__$1,new cljs.core.Keyword(null,"data-tree","data-tree",1311167582));
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
});})(x49236_49530))
;

x49236_49530.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x49236_49530.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x49236_49530){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x49236_49530))
;

x49236_49530.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x49236_49530.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x49236_49530){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","index","com.wsscode.pathom.viz.index-explorer/index",-1539481252),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","idx","com.wsscode.pathom.viz.index-explorer/idx",1045759782),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","history","com.wsscode.pathom.viz.index-explorer/history",-288879737),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","history-index","com.wsscode.pathom.viz.index-explorer/history-index",-368029918),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","menu","ui/menu",352268114),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.SearchEverything)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attributes","com.wsscode.pathom.viz.index-explorer/attributes",-67264281),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.AttributeIndex)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","globals","com.wsscode.pathom.viz.index-explorer/globals",1704747305),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.AttributeIndex)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","idents","com.wsscode.pathom.viz.index-explorer/idents",189283656),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.AttributeIndex)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","top-connection-hubs","com.wsscode.pathom.viz.index-explorer/top-connection-hubs",1843947657),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.AttributeIndex)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-type-mismatch","com.wsscode.pathom.viz.index-explorer/attr-type-mismatch",-1230484441),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.AttributeIndex)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","resolvers","com.wsscode.pathom.viz.index-explorer/resolvers",-1064744669),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.ResolverIndex)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutations","com.wsscode.pathom.viz.index-explorer/mutations",329050290),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.MutationIndex)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","page","ui/page",849066625),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.MainViewUnion)], null)], null);
});})(x49236_49530))
;


com.wsscode.pathom.viz.index_explorer.IndexExplorer.cljs$lang$type = true;

com.wsscode.pathom.viz.index_explorer.IndexExplorer.cljs$lang$ctorStr = "com.wsscode.pathom.viz.index-explorer/IndexExplorer";

com.wsscode.pathom.viz.index_explorer.IndexExplorer.cljs$lang$ctorPrWriter = (function (this__44534__auto__,writer__44535__auto__,opt__44536__auto__){
return cljs.core._write(writer__44535__auto__,"com.wsscode.pathom.viz.index-explorer/IndexExplorer");
});
com.wsscode.pathom.viz.index_explorer.index_explorer = fulcro.client.primitives.computed_factory.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.IndexExplorer);

//# sourceMappingURL=com.wsscode.pathom.viz.index_explorer.js.map
