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
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attribute-node","com.wsscode.pathom.viz.index-explorer/attribute-node",-2016363037),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-node","attribute","com.wsscode.pathom.viz.index-explorer.attribute-node/attribute",-323201507),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-node","multiNode","com.wsscode.pathom.viz.index-explorer.attribute-node/multiNode",461478480),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-node","mainNode","com.wsscode.pathom.viz.index-explorer.attribute-node/mainNode",620710540),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-node","weight","com.wsscode.pathom.viz.index-explorer.attribute-node/weight",1284949095),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-node","reach","com.wsscode.pathom.viz.index-explorer.attribute-node/reach",2025059773),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-node","radius","com.wsscode.pathom.viz.index-explorer.attribute-node/radius",1553083322)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-node","attribute","com.wsscode.pathom.viz.index-explorer.attribute-node/attribute",-323201507),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-node","multiNode","com.wsscode.pathom.viz.index-explorer.attribute-node/multiNode",461478480),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-node","mainNode","com.wsscode.pathom.viz.index-explorer.attribute-node/mainNode",620710540),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-node","weight","com.wsscode.pathom.viz.index-explorer.attribute-node/weight",1284949095),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-node","reach","com.wsscode.pathom.viz.index-explorer.attribute-node/reach",2025059773),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-node","radius","com.wsscode.pathom.viz.index-explorer.attribute-node/radius",1553083322)], null),null,null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__57530){
return cljs.core.map_QMARK_(G__57530);
}),(function (G__57530){
return cljs.core.contains_QMARK_(G__57530,new cljs.core.Keyword(null,"attribute","attribute",-2074029119));
}),(function (G__57530){
return cljs.core.contains_QMARK_(G__57530,new cljs.core.Keyword(null,"multiNode","multiNode",1160650868));
}),(function (G__57530){
return cljs.core.contains_QMARK_(G__57530,new cljs.core.Keyword(null,"mainNode","mainNode",-883240896));
}),(function (G__57530){
return cljs.core.contains_QMARK_(G__57530,new cljs.core.Keyword(null,"weight","weight",-1262796205));
}),(function (G__57530){
return cljs.core.contains_QMARK_(G__57530,new cljs.core.Keyword(null,"reach","reach",1376483465));
}),(function (G__57530){
return cljs.core.contains_QMARK_(G__57530,new cljs.core.Keyword(null,"radius","radius",-2073122258));
})], null),(function (G__57530){
return ((cljs.core.map_QMARK_(G__57530)) && (cljs.core.contains_QMARK_(G__57530,new cljs.core.Keyword(null,"attribute","attribute",-2074029119))) && (cljs.core.contains_QMARK_(G__57530,new cljs.core.Keyword(null,"multiNode","multiNode",1160650868))) && (cljs.core.contains_QMARK_(G__57530,new cljs.core.Keyword(null,"mainNode","mainNode",-883240896))) && (cljs.core.contains_QMARK_(G__57530,new cljs.core.Keyword(null,"weight","weight",-1262796205))) && (cljs.core.contains_QMARK_(G__57530,new cljs.core.Keyword(null,"reach","reach",1376483465))) && (cljs.core.contains_QMARK_(G__57530,new cljs.core.Keyword(null,"radius","radius",-2073122258))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-node","attribute","com.wsscode.pathom.viz.index-explorer.attribute-node/attribute",-323201507),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-node","multiNode","com.wsscode.pathom.viz.index-explorer.attribute-node/multiNode",461478480),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-node","mainNode","com.wsscode.pathom.viz.index-explorer.attribute-node/mainNode",620710540),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-node","weight","com.wsscode.pathom.viz.index-explorer.attribute-node/weight",1284949095),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-node","reach","com.wsscode.pathom.viz.index-explorer.attribute-node/reach",2025059773),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-node","radius","com.wsscode.pathom.viz.index-explorer.attribute-node/radius",1553083322)], null),null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attribute","attribute",-2074029119),new cljs.core.Keyword(null,"multiNode","multiNode",1160650868),new cljs.core.Keyword(null,"mainNode","mainNode",-883240896),new cljs.core.Keyword(null,"weight","weight",-1262796205),new cljs.core.Keyword(null,"reach","reach",1376483465),new cljs.core.Keyword(null,"radius","radius",-2073122258)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"attribute","attribute",-2074029119))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"multiNode","multiNode",1160650868))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"mainNode","mainNode",-883240896))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"weight","weight",-1262796205))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"reach","reach",1376483465))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"radius","radius",-2073122258)))], null),null])));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-link","source","com.wsscode.pathom.viz.index-explorer.attribute-link/source",-1651616055),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-link","weight","com.wsscode.pathom.viz.index-explorer.attribute-link/weight",1284752991),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","weight","com.wsscode.pathom.viz.index-explorer/weight",-1488828976),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","weight","com.wsscode.pathom.viz.index-explorer/weight",-1488828976));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-link","resolvers","com.wsscode.pathom.viz.index-explorer.attribute-link/resolvers",-1723939342),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-link","target","com.wsscode.pathom.viz.index-explorer.attribute-link/target",1726872605),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-link","deep","com.wsscode.pathom.viz.index-explorer.attribute-link/deep",599690487),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),cljs.core.boolean_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attribute-link","com.wsscode.pathom.viz.index-explorer/attribute-link",1286350991),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-link","source","com.wsscode.pathom.viz.index-explorer.attribute-link/source",-1651616055),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-link","weight","com.wsscode.pathom.viz.index-explorer.attribute-link/weight",1284752991),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-link","resolvers","com.wsscode.pathom.viz.index-explorer.attribute-link/resolvers",-1723939342),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-link","target","com.wsscode.pathom.viz.index-explorer.attribute-link/target",1726872605),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-link","deep","com.wsscode.pathom.viz.index-explorer.attribute-link/deep",599690487)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-link","source","com.wsscode.pathom.viz.index-explorer.attribute-link/source",-1651616055),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-link","weight","com.wsscode.pathom.viz.index-explorer.attribute-link/weight",1284752991),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-link","resolvers","com.wsscode.pathom.viz.index-explorer.attribute-link/resolvers",-1723939342),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-link","target","com.wsscode.pathom.viz.index-explorer.attribute-link/target",1726872605),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-link","deep","com.wsscode.pathom.viz.index-explorer.attribute-link/deep",599690487)], null),null,null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__57564){
return cljs.core.map_QMARK_(G__57564);
}),(function (G__57564){
return cljs.core.contains_QMARK_(G__57564,new cljs.core.Keyword(null,"source","source",-433931539));
}),(function (G__57564){
return cljs.core.contains_QMARK_(G__57564,new cljs.core.Keyword(null,"weight","weight",-1262796205));
}),(function (G__57564){
return cljs.core.contains_QMARK_(G__57564,new cljs.core.Keyword(null,"resolvers","resolvers",-1037942130));
}),(function (G__57564){
return cljs.core.contains_QMARK_(G__57564,new cljs.core.Keyword(null,"target","target",253001721));
}),(function (G__57564){
return cljs.core.contains_QMARK_(G__57564,new cljs.core.Keyword(null,"deep","deep",2090866875));
})], null),(function (G__57564){
return ((cljs.core.map_QMARK_(G__57564)) && (cljs.core.contains_QMARK_(G__57564,new cljs.core.Keyword(null,"source","source",-433931539))) && (cljs.core.contains_QMARK_(G__57564,new cljs.core.Keyword(null,"weight","weight",-1262796205))) && (cljs.core.contains_QMARK_(G__57564,new cljs.core.Keyword(null,"resolvers","resolvers",-1037942130))) && (cljs.core.contains_QMARK_(G__57564,new cljs.core.Keyword(null,"target","target",253001721))) && (cljs.core.contains_QMARK_(G__57564,new cljs.core.Keyword(null,"deep","deep",2090866875))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-link","source","com.wsscode.pathom.viz.index-explorer.attribute-link/source",-1651616055),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-link","weight","com.wsscode.pathom.viz.index-explorer.attribute-link/weight",1284752991),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-link","resolvers","com.wsscode.pathom.viz.index-explorer.attribute-link/resolvers",-1723939342),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-link","target","com.wsscode.pathom.viz.index-explorer.attribute-link/target",1726872605),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-link","deep","com.wsscode.pathom.viz.index-explorer.attribute-link/deep",599690487)], null),null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"weight","weight",-1262796205),new cljs.core.Keyword(null,"resolvers","resolvers",-1037942130),new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"deep","deep",2090866875)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"source","source",-433931539))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"weight","weight",-1262796205))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"resolvers","resolvers",-1037942130))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"target","target",253001721))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"deep","deep",2090866875)))], null),null])));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-graph","nodes","com.wsscode.pathom.viz.index-explorer.attribute-graph/nodes",-938578025),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attribute-node","com.wsscode.pathom.viz.index-explorer/attribute-node",-2016363037)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attribute-node","com.wsscode.pathom.viz.index-explorer/attribute-node",-2016363037),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attribute-node","com.wsscode.pathom.viz.index-explorer/attribute-node",-2016363037),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__57569){
return cljs.core.coll_QMARK_(G__57569);
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attribute-node","com.wsscode.pathom.viz.index-explorer/attribute-node",-2016363037))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-graph","links","com.wsscode.pathom.viz.index-explorer.attribute-graph/links",773829650),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attribute-link","com.wsscode.pathom.viz.index-explorer/attribute-link",1286350991)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attribute-link","com.wsscode.pathom.viz.index-explorer/attribute-link",1286350991),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attribute-link","com.wsscode.pathom.viz.index-explorer/attribute-link",1286350991),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__57570){
return cljs.core.coll_QMARK_(G__57570);
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attribute-link","com.wsscode.pathom.viz.index-explorer/attribute-link",1286350991))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attribute-graph","com.wsscode.pathom.viz.index-explorer/attribute-graph",226486271),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-graph","nodes","com.wsscode.pathom.viz.index-explorer.attribute-graph/nodes",-938578025),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-graph","links","com.wsscode.pathom.viz.index-explorer.attribute-graph/links",773829650)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-graph","nodes","com.wsscode.pathom.viz.index-explorer.attribute-graph/nodes",-938578025),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-graph","links","com.wsscode.pathom.viz.index-explorer.attribute-graph/links",773829650)], null),null,null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__57571){
return cljs.core.map_QMARK_(G__57571);
}),(function (G__57571){
return cljs.core.contains_QMARK_(G__57571,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
}),(function (G__57571){
return cljs.core.contains_QMARK_(G__57571,new cljs.core.Keyword(null,"links","links",-654507394));
})], null),(function (G__57571){
return ((cljs.core.map_QMARK_(G__57571)) && (cljs.core.contains_QMARK_(G__57571,new cljs.core.Keyword(null,"nodes","nodes",-2099585805))) && (cljs.core.contains_QMARK_(G__57571,new cljs.core.Keyword(null,"links","links",-654507394))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-graph","nodes","com.wsscode.pathom.viz.index-explorer.attribute-graph/nodes",-938578025),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-graph","links","com.wsscode.pathom.viz.index-explorer.attribute-graph/links",773829650)], null),null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.Keyword(null,"links","links",-654507394)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"nodes","nodes",-2099585805))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"links","links",-654507394)))], null),null])));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","maybe-nested-input","com.wsscode.pathom.viz.index-explorer/maybe-nested-input",734224205),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"direct","direct",-1775717856),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null),new cljs.core.Keyword(null,"nested","nested",18943849),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null)),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"direct","direct",-1775717856),new cljs.core.Keyword(null,"nested","nested",18943849)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.set_QMARK_,cljs.core.vector_QMARK_], null),null));
com.wsscode.pathom.viz.index_explorer.ExtensionContext = com.wsscode.pathom.viz.ui.context.new_context.cljs$core$IFn$_invoke$arity$0();
com.wsscode.pathom.viz.index_explorer.call_graph_comm = (function com$wsscode$pathom$viz$index_explorer$call_graph_comm(comp,f,k){
var temp__5718__auto__ = (function (){var or__4131__auto__ = (function (){var G__57576 = fulcro.client.primitives.get_state.cljs$core$IFn$_invoke$arity$2(comp,new cljs.core.Keyword(null,"graph-comm","graph-comm",-744729650));
if((G__57576 == null)){
return null;
} else {
return cljs.core.deref(G__57576);
}
})();
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var G__57577 = comp;
var G__57577__$1 = (((G__57577 == null))?null:fulcro.client.primitives.props(G__57577));
var G__57577__$2 = (((G__57577__$1 == null))?null:fulcro.client.primitives.get_computed.cljs$core$IFn$_invoke$arity$1(G__57577__$1));
var G__57577__$3 = (((G__57577__$2 == null))?null:new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","graph-comm","com.wsscode.pathom.viz.index-explorer/graph-comm",-735750087).cljs$core$IFn$_invoke$arity$1(G__57577__$2));
if((G__57577__$3 == null)){
return null;
} else {
return cljs.core.deref(G__57577__$3);
}
}
})();
if(cljs.core.truth_(temp__5718__auto__)){
var settings = temp__5718__auto__;
var G__57579 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(k);
var fexpr__57578 = goog.object.get(settings,f);
return (fexpr__57578.cljs$core$IFn$_invoke$arity$1 ? fexpr__57578.cljs$core$IFn$_invoke$arity$1(G__57579) : fexpr__57578.call(null,G__57579));
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
var this__43090__auto__ = this;
React.Component.apply(this__43090__auto__,arguments);

if((!((this__43090__auto__.initLocalState == null)))){
this__43090__auto__.state = this__43090__auto__.initLocalState();
} else {
this__43090__auto__.state = ({});
}

return this__43090__auto__;
});

var G__57588_58772 = com.wsscode.pathom.viz.index_explorer.AttributeLink.prototype;
var G__57589_58773 = React.Component.prototype;
var G__57590_58774 = fulcro.client.primitives.default_component_prototype;
goog.object.extend(G__57588_58772,G__57589_58773,G__57590_58774);
}

fulcro.client.primitives._register_component_BANG_(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","AttributeLink","com.wsscode.pathom.viz.index-explorer/AttributeLink",4406070),com.wsscode.pathom.viz.index_explorer.AttributeLink);

var x57591_58775 = com.wsscode.pathom.viz.index_explorer.AttributeLink.prototype;
x57591_58775.render = ((function (x57591_58775){
return (function (){
var this__42008__auto__ = this;
var this$ = this__42008__auto__;
var _STAR_reconciler_STAR__orig_val__57592 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__57593 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__57594 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__57595 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__57596 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__57597 = fulcro.client.primitives.get_reconciler(this__42008__auto__);
var _STAR_depth_STAR__temp_val__57598 = (fulcro.client.primitives.depth(this__42008__auto__) + (1));
var _STAR_shared_STAR__temp_val__57599 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__42008__auto__);
var _STAR_instrument_STAR__temp_val__57600 = fulcro.client.primitives.instrument(this__42008__auto__);
var _STAR_parent_STAR__temp_val__57601 = this__42008__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__57597;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__57598;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__57599;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__57600;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__57601;

try{var map__57606 = fulcro.client.primitives.props(this$);
var map__57606__$1 = (((((!((map__57606 == null))))?(((((map__57606.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57606.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57606):map__57606);
var props = map__57606__$1;
var attribute = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57606__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075));
var render = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57606__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","render","com.wsscode.pathom.viz.ui.kit/render",1024565529));
return fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".container",".container",-1441208944),com.wsscode.pathom.viz.ui.kit.dom_props.cljs$core$IFn$_invoke$arity$1(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.wsscode.pathom.viz.index_explorer.attribute_graph_events(this$,attribute),props], 0))),(cljs.core.truth_(render)?(render.cljs$core$IFn$_invoke$arity$1 ? render.cljs$core$IFn$_invoke$arity$1(props) : render.call(null,props)):cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attribute], 0)))], 0));
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__57596;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__57595;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__57594;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__57593;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__57592;
}});})(x57591_58775))
;


com.wsscode.pathom.viz.index_explorer.AttributeLink.prototype.constructor = com.wsscode.pathom.viz.index_explorer.AttributeLink;

com.wsscode.pathom.viz.index_explorer.AttributeLink.prototype.constructor.displayName = "com.wsscode.pathom.viz.index-explorer/AttributeLink";

com.wsscode.pathom.viz.index_explorer.AttributeLink.prototype.fulcro$isComponent = true;

var x57608_58776 = com.wsscode.pathom.viz.index_explorer.AttributeLink;
x57608_58776.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x57608_58776.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x57608_58776){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"color","color",1011675173),com.wsscode.pathom.viz.index_explorer.color_attribute,new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"14px",new cljs.core.Keyword(null,"line-height","line-height",1870784992),"1.4em"], null),com.wsscode.pathom.viz.ui.kit.text_base], null)], null);
});})(x57608_58776))
;

x57608_58776.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x57608_58776){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x57608_58776))
;


var x57612_58777 = com.wsscode.pathom.viz.index_explorer.AttributeLink.prototype;
x57612_58777.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x57612_58777.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x57612_58777){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"color","color",1011675173),com.wsscode.pathom.viz.index_explorer.color_attribute,new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"14px",new cljs.core.Keyword(null,"line-height","line-height",1870784992),"1.4em"], null),com.wsscode.pathom.viz.ui.kit.text_base], null)], null);
});})(x57612_58777))
;

x57612_58777.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x57612_58777){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x57612_58777))
;


com.wsscode.pathom.viz.index_explorer.AttributeLink.cljs$lang$type = true;

com.wsscode.pathom.viz.index_explorer.AttributeLink.cljs$lang$ctorStr = "com.wsscode.pathom.viz.index-explorer/AttributeLink";

com.wsscode.pathom.viz.index_explorer.AttributeLink.cljs$lang$ctorPrWriter = (function (this__43093__auto__,writer__43094__auto__,opt__43095__auto__){
return cljs.core._write(writer__43094__auto__,"com.wsscode.pathom.viz.index-explorer/AttributeLink");
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
var this__43090__auto__ = this;
React.Component.apply(this__43090__auto__,arguments);

if((!((this__43090__auto__.initLocalState == null)))){
this__43090__auto__.state = this__43090__auto__.initLocalState();
} else {
this__43090__auto__.state = ({});
}

return this__43090__auto__;
});

var G__57635_58778 = com.wsscode.pathom.viz.index_explorer.ResolverLink.prototype;
var G__57636_58779 = React.Component.prototype;
var G__57637_58780 = fulcro.client.primitives.default_component_prototype;
goog.object.extend(G__57635_58778,G__57636_58779,G__57637_58780);
}

fulcro.client.primitives._register_component_BANG_(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","ResolverLink","com.wsscode.pathom.viz.index-explorer/ResolverLink",175120056),com.wsscode.pathom.viz.index_explorer.ResolverLink);

var x57641_58781 = com.wsscode.pathom.viz.index_explorer.ResolverLink.prototype;
x57641_58781.render = ((function (x57641_58781){
return (function (){
var this__42008__auto__ = this;
var this$ = this__42008__auto__;
var _STAR_reconciler_STAR__orig_val__57643 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__57644 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__57645 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__57646 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__57647 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__57648 = fulcro.client.primitives.get_reconciler(this__42008__auto__);
var _STAR_depth_STAR__temp_val__57649 = (fulcro.client.primitives.depth(this__42008__auto__) + (1));
var _STAR_shared_STAR__temp_val__57650 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__42008__auto__);
var _STAR_instrument_STAR__temp_val__57651 = fulcro.client.primitives.instrument(this__42008__auto__);
var _STAR_parent_STAR__temp_val__57652 = this__42008__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__57648;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__57649;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__57650;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__57651;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__57652;

try{var map__57654 = fulcro.client.primitives.props(this$);
var map__57654__$1 = (((((!((map__57654 == null))))?(((((map__57654.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57654.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57654):map__57654);
var props = map__57654__$1;
var sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57654__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581));
var render = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57654__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","render","com.wsscode.pathom.viz.ui.kit/render",1024565529));
return fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".container",".container",-1441208944),com.wsscode.pathom.viz.ui.kit.dom_props.cljs$core$IFn$_invoke$arity$1(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.wsscode.pathom.viz.index_explorer.resolver_graph_events(this$,sym),props], 0))),(cljs.core.truth_(render)?(render.cljs$core$IFn$_invoke$arity$1 ? render.cljs$core$IFn$_invoke$arity$1(props) : render.call(null,props)):cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sym], 0)))], 0));
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__57647;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__57646;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__57645;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__57644;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__57643;
}});})(x57641_58781))
;


com.wsscode.pathom.viz.index_explorer.ResolverLink.prototype.constructor = com.wsscode.pathom.viz.index_explorer.ResolverLink;

com.wsscode.pathom.viz.index_explorer.ResolverLink.prototype.constructor.displayName = "com.wsscode.pathom.viz.index-explorer/ResolverLink";

com.wsscode.pathom.viz.index_explorer.ResolverLink.prototype.fulcro$isComponent = true;

var x57656_58782 = com.wsscode.pathom.viz.index_explorer.ResolverLink;
x57656_58782.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x57656_58782.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x57656_58782){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"color","color",1011675173),com.wsscode.pathom.viz.index_explorer.color_resolver,new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"14px",new cljs.core.Keyword(null,"line-height","line-height",1870784992),"1.4em"], null),com.wsscode.pathom.viz.ui.kit.text_base], null)], null);
});})(x57656_58782))
;

x57656_58782.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x57656_58782){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x57656_58782))
;


var x57657_58783 = com.wsscode.pathom.viz.index_explorer.ResolverLink.prototype;
x57657_58783.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x57657_58783.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x57657_58783){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"color","color",1011675173),com.wsscode.pathom.viz.index_explorer.color_resolver,new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"14px",new cljs.core.Keyword(null,"line-height","line-height",1870784992),"1.4em"], null),com.wsscode.pathom.viz.ui.kit.text_base], null)], null);
});})(x57657_58783))
;

x57657_58783.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x57657_58783){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x57657_58783))
;


com.wsscode.pathom.viz.index_explorer.ResolverLink.cljs$lang$type = true;

com.wsscode.pathom.viz.index_explorer.ResolverLink.cljs$lang$ctorStr = "com.wsscode.pathom.viz.index-explorer/ResolverLink";

com.wsscode.pathom.viz.index_explorer.ResolverLink.cljs$lang$ctorPrWriter = (function (this__43093__auto__,writer__43094__auto__,opt__43095__auto__){
return cljs.core._write(writer__43094__auto__,"com.wsscode.pathom.viz.index-explorer/ResolverLink");
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
var this__43090__auto__ = this;
React.Component.apply(this__43090__auto__,arguments);

if((!((this__43090__auto__.initLocalState == null)))){
this__43090__auto__.state = this__43090__auto__.initLocalState();
} else {
this__43090__auto__.state = ({});
}

return this__43090__auto__;
});

var G__57684_58784 = com.wsscode.pathom.viz.index_explorer.MutationLink.prototype;
var G__57685_58785 = React.Component.prototype;
var G__57686_58786 = fulcro.client.primitives.default_component_prototype;
goog.object.extend(G__57684_58784,G__57685_58785,G__57686_58786);
}

fulcro.client.primitives._register_component_BANG_(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","MutationLink","com.wsscode.pathom.viz.index-explorer/MutationLink",1835462427),com.wsscode.pathom.viz.index_explorer.MutationLink);

var x57687_58787 = com.wsscode.pathom.viz.index_explorer.MutationLink.prototype;
x57687_58787.render = ((function (x57687_58787){
return (function (){
var this__42008__auto__ = this;
var this$ = this__42008__auto__;
var _STAR_reconciler_STAR__orig_val__57688 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__57689 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__57690 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__57691 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__57692 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__57693 = fulcro.client.primitives.get_reconciler(this__42008__auto__);
var _STAR_depth_STAR__temp_val__57694 = (fulcro.client.primitives.depth(this__42008__auto__) + (1));
var _STAR_shared_STAR__temp_val__57695 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__42008__auto__);
var _STAR_instrument_STAR__temp_val__57696 = fulcro.client.primitives.instrument(this__42008__auto__);
var _STAR_parent_STAR__temp_val__57697 = this__42008__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__57693;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__57694;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__57695;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__57696;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__57697;

try{var map__57700 = fulcro.client.primitives.props(this$);
var map__57700__$1 = (((((!((map__57700 == null))))?(((((map__57700.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57700.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57700):map__57700);
var props = map__57700__$1;
var sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57700__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581));
var render = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57700__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","render","com.wsscode.pathom.viz.ui.kit/render",1024565529));
var on_select_mutation = new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","on-select-mutation","com.wsscode.pathom.viz.index-explorer/on-select-mutation",2007280602).cljs$core$IFn$_invoke$arity$1(fulcro.client.primitives.get_computed.cljs$core$IFn$_invoke$arity$1(fulcro.client.primitives.props(this$)));
return fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".container",".container",-1441208944),com.wsscode.pathom.viz.ui.kit.dom_props.cljs$core$IFn$_invoke$arity$1(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (on_select_mutation,map__57700,map__57700__$1,props,sym,render,_STAR_reconciler_STAR__orig_val__57688,_STAR_depth_STAR__orig_val__57689,_STAR_shared_STAR__orig_val__57690,_STAR_instrument_STAR__orig_val__57691,_STAR_parent_STAR__orig_val__57692,_STAR_reconciler_STAR__temp_val__57693,_STAR_depth_STAR__temp_val__57694,_STAR_shared_STAR__temp_val__57695,_STAR_instrument_STAR__temp_val__57696,_STAR_parent_STAR__temp_val__57697,this$,this__42008__auto__,x57687_58787){
return (function (){
return (on_select_mutation.cljs$core$IFn$_invoke$arity$1 ? on_select_mutation.cljs$core$IFn$_invoke$arity$1(sym) : on_select_mutation.call(null,sym));
});})(on_select_mutation,map__57700,map__57700__$1,props,sym,render,_STAR_reconciler_STAR__orig_val__57688,_STAR_depth_STAR__orig_val__57689,_STAR_shared_STAR__orig_val__57690,_STAR_instrument_STAR__orig_val__57691,_STAR_parent_STAR__orig_val__57692,_STAR_reconciler_STAR__temp_val__57693,_STAR_depth_STAR__temp_val__57694,_STAR_shared_STAR__temp_val__57695,_STAR_instrument_STAR__temp_val__57696,_STAR_parent_STAR__temp_val__57697,this$,this__42008__auto__,x57687_58787))
], null),props], 0))),(cljs.core.truth_(render)?(render.cljs$core$IFn$_invoke$arity$1 ? render.cljs$core$IFn$_invoke$arity$1(props) : render.call(null,props)):cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sym], 0)))], 0));
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__57692;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__57691;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__57690;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__57689;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__57688;
}});})(x57687_58787))
;


com.wsscode.pathom.viz.index_explorer.MutationLink.prototype.constructor = com.wsscode.pathom.viz.index_explorer.MutationLink;

com.wsscode.pathom.viz.index_explorer.MutationLink.prototype.constructor.displayName = "com.wsscode.pathom.viz.index-explorer/MutationLink";

com.wsscode.pathom.viz.index_explorer.MutationLink.prototype.fulcro$isComponent = true;

var x57706_58788 = com.wsscode.pathom.viz.index_explorer.MutationLink;
x57706_58788.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x57706_58788.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x57706_58788){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"color","color",1011675173),com.wsscode.pathom.viz.index_explorer.color_mutation,new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"14px",new cljs.core.Keyword(null,"line-height","line-height",1870784992),"1.4em"], null),com.wsscode.pathom.viz.ui.kit.text_base], null)], null);
});})(x57706_58788))
;

x57706_58788.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x57706_58788){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x57706_58788))
;


var x57708_58789 = com.wsscode.pathom.viz.index_explorer.MutationLink.prototype;
x57708_58789.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x57708_58789.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x57708_58789){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"color","color",1011675173),com.wsscode.pathom.viz.index_explorer.color_mutation,new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"14px",new cljs.core.Keyword(null,"line-height","line-height",1870784992),"1.4em"], null),com.wsscode.pathom.viz.ui.kit.text_base], null)], null);
});})(x57708_58789))
;

x57708_58789.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x57708_58789){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x57708_58789))
;


com.wsscode.pathom.viz.index_explorer.MutationLink.cljs$lang$type = true;

com.wsscode.pathom.viz.index_explorer.MutationLink.cljs$lang$ctorStr = "com.wsscode.pathom.viz.index-explorer/MutationLink";

com.wsscode.pathom.viz.index_explorer.MutationLink.cljs$lang$ctorPrWriter = (function (this__43093__auto__,writer__43094__auto__,opt__43095__auto__){
return cljs.core._write(writer__43094__auto__,"com.wsscode.pathom.viz.index-explorer/MutationLink");
});
com.wsscode.pathom.viz.index_explorer.mutation_link = fulcro.client.primitives.computed_factory.cljs$core$IFn$_invoke$arity$2(com.wsscode.pathom.viz.index_explorer.MutationLink,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581))], null));
com.wsscode.pathom.viz.index_explorer.node_radius = (function com$wsscode$pathom$viz$index_explorer$node_radius(p__57711){
var map__57712 = p__57711;
var map__57712__$1 = (((((!((map__57712 == null))))?(((((map__57712.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57712.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57712):map__57712);
var weight = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57712__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","weight","com.wsscode.pathom.viz.index-explorer/weight",-1488828976));
var reach = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57712__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","reach","com.wsscode.pathom.viz.index-explorer/reach",1367373590));
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
com.wsscode.pathom.viz.index_explorer.attribute__GT_node = (function com$wsscode$pathom$viz$index_explorer$attribute__GT_node(p__57719){
var map__57720 = p__57719;
var map__57720__$1 = (((((!((map__57720 == null))))?(((((map__57720.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57720.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57720):map__57720);
var attr = map__57720__$1;
var attribute = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57720__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075));
var weight = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57720__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","weight","com.wsscode.pathom.viz.index-explorer/weight",-1488828976));
var reach = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57720__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","reach","com.wsscode.pathom.viz.index-explorer/reach",1367373590));
var center_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57720__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","center?","com.wsscode.pathom.viz.index-explorer/center?",-314133194));
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
com.wsscode.pathom.viz.index_explorer.compute_nodes_links = (function com$wsscode$pathom$viz$index_explorer$compute_nodes_links(p__57725){
var map__57726 = p__57725;
var map__57726__$1 = (((((!((map__57726 == null))))?(((((map__57726.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57726.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57726):map__57726);
var attributes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57726__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attributes","com.wsscode.pathom.viz.index-explorer/attributes",-67264281));
var attributes__$1 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),attributes);
var index = com.wsscode.pathom.viz.helpers.index_by(new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),attributes__$1);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"nodes","nodes",-2099585805),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.attribute__GT_node),attributes__$1),new cljs.core.Keyword(null,"links","links",-654507394),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (attributes__$1,index,map__57726,map__57726__$1,attributes){
return (function (p__57728){
var map__57730 = p__57728;
var map__57730__$1 = (((((!((map__57730 == null))))?(((((map__57730.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57730.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57730):map__57730);
var attribute = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57730__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075));
var attr_provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57730__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attr-provides","com.wsscode.pathom.connect/attr-provides",-474523918));
var attr_str = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attribute], 0));
var res = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$1(((function (attr_str,map__57730,map__57730__$1,attribute,attr_provides,attributes__$1,index,map__57726,map__57726__$1,attributes){
return (function (p__57733){
var vec__57734 = p__57733;
var provided = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57734,(0),null);
var resolvers = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57734,(1),null);
var nested_QMARK_ = com.wsscode.pathom.viz.index_explorer.nested_QMARK_(provided);
var provided_SINGLEQUOTE_ = ((nested_QMARK_)?cljs.core.peek(provided):provided);
if(((cljs.core.contains_QMARK_(index,provided_SINGLEQUOTE_)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(attribute,provided_SINGLEQUOTE_)))){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"source","source",-433931539),attr_str,new cljs.core.Keyword(null,"weight","weight",-1262796205),cljs.core.count(resolvers),new cljs.core.Keyword(null,"resolvers","resolvers",-1037942130),clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",resolvers),new cljs.core.Keyword(null,"target","target",253001721),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([provided_SINGLEQUOTE_], 0)),new cljs.core.Keyword(null,"deep","deep",2090866875),nested_QMARK_], null);
} else {
return null;
}
});})(attr_str,map__57730,map__57730__$1,attribute,attr_provides,attributes__$1,index,map__57726,map__57726__$1,attributes))
),attr_provides);
return res;
});})(attributes__$1,index,map__57726,map__57726__$1,attributes))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attributes__$1], 0))], null);
});
com.wsscode.pathom.viz.index_explorer.render_attribute_graph = (function com$wsscode$pathom$viz$index_explorer$render_attribute_graph(this$){
var map__57739 = fulcro.client.primitives.props(this$);
var map__57739__$1 = (((((!((map__57739 == null))))?(((((map__57739.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57739.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57739):map__57739);
var props = map__57739__$1;
var on_show_details = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57739__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","on-show-details","com.wsscode.pathom.viz.index-explorer/on-show-details",-322180105));
var on_click_edge = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57739__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","on-click-edge","com.wsscode.pathom.viz.index-explorer/on-click-edge",810811642));
var graph_comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57739__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","graph-comm","com.wsscode.pathom.viz.index-explorer/graph-comm",-735750087));
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
var fexpr__57742_58810 = goog.object.get(current,"dispose");
(fexpr__57742_58810.cljs$core$IFn$_invoke$arity$0 ? fexpr__57742_58810.cljs$core$IFn$_invoke$arity$0() : fexpr__57742_58810.call(null));
} else {
}

goog.object.set(svg,"innerHTML","");

var render_settings = (function (){var G__57743 = svg;
var G__57744 = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"svgWidth","svgWidth",-356171540),goog.object.get(container,"clientWidth"),new cljs.core.Keyword(null,"svgHeight","svgHeight",1238898787),goog.object.get(container,"clientHeight"),new cljs.core.Keyword(null,"data","data",-232669377),com.wsscode.pathom.viz.index_explorer.compute_nodes_links(props),new cljs.core.Keyword(null,"showDetails","showDetails",638710309),((function (G__57743,map__57739,map__57739__$1,props,on_show_details,on_click_edge,graph_comm,on_show_details__$1,on_click_edge__$1,current,container,svg){
return (function (attr,d,js){
var G__57745 = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(attr);
var G__57746 = d;
var G__57747 = js;
return (on_show_details__$1.cljs$core$IFn$_invoke$arity$3 ? on_show_details__$1.cljs$core$IFn$_invoke$arity$3(G__57745,G__57746,G__57747) : on_show_details__$1.call(null,G__57745,G__57746,G__57747));
});})(G__57743,map__57739,map__57739__$1,props,on_show_details,on_click_edge,graph_comm,on_show_details__$1,on_click_edge__$1,current,container,svg))
,new cljs.core.Keyword(null,"onClickEdge","onClickEdge",124821712),((function (G__57743,map__57739,map__57739__$1,props,on_show_details,on_click_edge,graph_comm,on_show_details__$1,on_click_edge__$1,current,container,svg){
return (function (edge){
var resolvers = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(["#{",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.object.get(edge,"resolvers")),"}"].join(''));
var G__57748 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","resolvers","com.wsscode.pathom.viz.index-explorer/resolvers",-1064744669),resolvers], null);
return (on_click_edge__$1.cljs$core$IFn$_invoke$arity$1 ? on_click_edge__$1.cljs$core$IFn$_invoke$arity$1(G__57748) : on_click_edge__$1.call(null,G__57748));
});})(G__57743,map__57739,map__57739__$1,props,on_show_details,on_click_edge,graph_comm,on_show_details__$1,on_click_edge__$1,current,container,svg))
], null));
return module$com$wsscode$pathom$viz$d3_attribute_graph.render(G__57743,G__57744);
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
var this__43090__auto__ = this;
React.Component.apply(this__43090__auto__,arguments);

if((!((this__43090__auto__.initLocalState == null)))){
this__43090__auto__.state = this__43090__auto__.initLocalState();
} else {
this__43090__auto__.state = ({});
}

return this__43090__auto__;
});

var G__57754_58827 = com.wsscode.pathom.viz.index_explorer.AttributeGraph.prototype;
var G__57755_58828 = React.Component.prototype;
var G__57756_58829 = fulcro.client.primitives.default_component_prototype;
goog.object.extend(G__57754_58827,G__57755_58828,G__57756_58829);
}

fulcro.client.primitives._register_component_BANG_(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","AttributeGraph","com.wsscode.pathom.viz.index-explorer/AttributeGraph",1136928477),com.wsscode.pathom.viz.index_explorer.AttributeGraph);

var x57757_58832 = com.wsscode.pathom.viz.index_explorer.AttributeGraph.prototype;
x57757_58832.render = ((function (x57757_58832){
return (function (){
var this__42008__auto__ = this;
var this$ = this__42008__auto__;
var _STAR_reconciler_STAR__orig_val__57758 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__57759 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__57760 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__57761 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__57762 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__57763 = fulcro.client.primitives.get_reconciler(this__42008__auto__);
var _STAR_depth_STAR__temp_val__57764 = (fulcro.client.primitives.depth(this__42008__auto__) + (1));
var _STAR_shared_STAR__temp_val__57765 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__42008__auto__);
var _STAR_instrument_STAR__temp_val__57766 = fulcro.client.primitives.instrument(this__42008__auto__);
var _STAR_parent_STAR__temp_val__57767 = this__42008__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__57763;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__57764;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__57765;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__57766;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__57767;

try{var map__57768 = fulcro.client.primitives.props(this$);
var map__57768__$1 = (((((!((map__57768 == null))))?(((((map__57768.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57768.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57768):map__57768);
return fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),((function (map__57768,map__57768__$1,_STAR_reconciler_STAR__orig_val__57758,_STAR_depth_STAR__orig_val__57759,_STAR_shared_STAR__orig_val__57760,_STAR_instrument_STAR__orig_val__57761,_STAR_parent_STAR__orig_val__57762,_STAR_reconciler_STAR__temp_val__57763,_STAR_depth_STAR__temp_val__57764,_STAR_shared_STAR__temp_val__57765,_STAR_instrument_STAR__temp_val__57766,_STAR_parent_STAR__temp_val__57767,this$,this__42008__auto__,x57757_58832){
return (function (p1__57749_SHARP_){
return goog.object.set(this$,"svgContainer",p1__57749_SHARP_);
});})(map__57768,map__57768__$1,_STAR_reconciler_STAR__orig_val__57758,_STAR_depth_STAR__orig_val__57759,_STAR_shared_STAR__orig_val__57760,_STAR_instrument_STAR__orig_val__57761,_STAR_parent_STAR__orig_val__57762,_STAR_reconciler_STAR__temp_val__57763,_STAR_depth_STAR__temp_val__57764,_STAR_shared_STAR__temp_val__57765,_STAR_instrument_STAR__temp_val__57766,_STAR_parent_STAR__temp_val__57767,this$,this__42008__auto__,x57757_58832))
], null),(cljs.core.truth_(fulcro.client.primitives.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","error-catch?","com.wsscode.pathom.viz.index-explorer/error-catch?",-21405980)))?fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error rendering trace, check console for details"], 0)):fulcro.client.localized_dom.svg.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),((function (map__57768,map__57768__$1,_STAR_reconciler_STAR__orig_val__57758,_STAR_depth_STAR__orig_val__57759,_STAR_shared_STAR__orig_val__57760,_STAR_instrument_STAR__orig_val__57761,_STAR_parent_STAR__orig_val__57762,_STAR_reconciler_STAR__temp_val__57763,_STAR_depth_STAR__temp_val__57764,_STAR_shared_STAR__temp_val__57765,_STAR_instrument_STAR__temp_val__57766,_STAR_parent_STAR__temp_val__57767,this$,this__42008__auto__,x57757_58832){
return (function (p1__57750_SHARP_){
return goog.object.set(this$,"svg",p1__57750_SHARP_);
});})(map__57768,map__57768__$1,_STAR_reconciler_STAR__orig_val__57758,_STAR_depth_STAR__orig_val__57759,_STAR_shared_STAR__orig_val__57760,_STAR_instrument_STAR__orig_val__57761,_STAR_parent_STAR__orig_val__57762,_STAR_reconciler_STAR__temp_val__57763,_STAR_depth_STAR__temp_val__57764,_STAR_shared_STAR__temp_val__57765,_STAR_instrument_STAR__temp_val__57766,_STAR_parent_STAR__temp_val__57767,this$,this__42008__auto__,x57757_58832))
], null)], 0)))], 0));
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__57762;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__57761;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__57760;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__57759;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__57758;
}});})(x57757_58832))
;

x57757_58832.componentDidUpdate = ((function (x57757_58832){
return (function (prev_props__41985__auto__,prev_state__41986__auto__,snapshot__41987__auto__){
var this__41984__auto__ = this;
var this$ = this__41984__auto__;
var snapshot57751 = snapshot__41987__auto__;
var prev_props = goog.object.get(prev_props__41985__auto__,"fulcro$value");
var _ = goog.object.get(prev_state__41986__auto__,"fulcro$state");
if((((!((this__41984__auto__ == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === this__41984__auto__.fulcro$client$primitives$Ident$))))?true:false):false)){
var ident__41988__auto___58837 = fulcro.client.primitives.ident(this__41984__auto__,prev_props);
var next_ident__41989__auto___58838 = fulcro.client.primitives.ident(this__41984__auto__,fulcro.client.primitives.props(this__41984__auto__));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ident__41988__auto___58837,next_ident__41989__auto___58838)){
var idxr__41990__auto___58839 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(fulcro.client.primitives.get_reconciler(this__41984__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__41990__auto___58839 == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__41990__auto___58839),((function (idxr__41990__auto___58839,ident__41988__auto___58837,next_ident__41989__auto___58838,this$,snapshot57751,prev_props,_,this__41984__auto__,x57757_58832){
return (function (indexes__41991__auto__){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(indexes__41991__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__41988__auto___58837], null),cljs.core.disj,this__41984__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__41989__auto___58838], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__41984__auto__);
});})(idxr__41990__auto___58839,ident__41988__auto___58837,next_ident__41989__auto___58838,this$,snapshot57751,prev_props,_,this__41984__auto__,x57757_58832))
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
});})(x57757_58832))
;

x57757_58832.componentDidCatch = ((function (x57757_58832){
return (function (error,info){
var this$ = this;
return fulcro.client.primitives.set_state_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","error-catch?","com.wsscode.pathom.viz.index-explorer/error-catch?",-21405980),true], null));
});})(x57757_58832))
;

x57757_58832.componentWillUnmount = ((function (x57757_58832){
return (function (){
var this__41996__auto__ = this;
var this$ = this__41996__auto__;
var reconciler__41997__auto__ = fulcro.client.primitives.get_reconciler(this__41996__auto__);
var lifecycle__41998__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(reconciler__41997__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"lifecycle","lifecycle",341496205)], null));
var cfg__41999__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(reconciler__41997__auto__);
var st__42000__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__41999__auto__);
var indexer__42001__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__41999__auto__);
goog.object.set(this__41996__auto__,"fulcro$mounted",false);

if(cljs.core.truth_((function (){var and__4120__auto__ = (!((st__42000__auto__ == null)));
if(and__4120__auto__){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(st__42000__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.client.primitives","queries","fulcro.client.primitives/queries",-963324249),this__41996__auto__], null));
} else {
return and__4120__auto__;
}
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(st__42000__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.client.primitives","queries","fulcro.client.primitives/queries",-963324249)], null),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([this__41996__auto__], 0));
} else {
}

if(cljs.core.truth_(lifecycle__41998__auto__)){
var G__57771_58844 = this__41996__auto__;
var G__57772_58845 = new cljs.core.Keyword(null,"unmount","unmount",-1779083333);
(lifecycle__41998__auto__.cljs$core$IFn$_invoke$arity$2 ? lifecycle__41998__auto__.cljs$core$IFn$_invoke$arity$2(G__57771_58844,G__57772_58845) : lifecycle__41998__auto__.call(null,G__57771_58844,G__57772_58845));
} else {
}

if(cljs.core.truth_(indexer__42001__auto__)){
fulcro.client.impl.protocols.drop_component_BANG_(indexer__42001__auto__,this__41996__auto__);
} else {
}

var temp__5718__auto__ = goog.object.get(this$,"renderedData");
if(cljs.core.truth_(temp__5718__auto__)){
var settings = temp__5718__auto__;
var fexpr__57773 = goog.object.get(settings,"dispose");
return (fexpr__57773.cljs$core$IFn$_invoke$arity$0 ? fexpr__57773.cljs$core$IFn$_invoke$arity$0() : fexpr__57773.call(null));
} else {
return null;
}
});})(x57757_58832))
;

x57757_58832.componentDidMount = ((function (x57757_58832){
return (function (){
var this__41992__auto__ = this;
var this$ = this__41992__auto__;
var reconciler__41993__auto__ = fulcro.client.primitives.get_reconciler(this__41992__auto__);
var lifecycle__41994__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(reconciler__41993__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"lifecycle","lifecycle",341496205)], null));
var indexer__41995__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(reconciler__41993__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
goog.object.set(this__41992__auto__,"fulcro$mounted",true);

if((indexer__41995__auto__ == null)){
} else {
fulcro.client.impl.protocols.index_component_BANG_(indexer__41995__auto__,this__41992__auto__);
}

if(cljs.core.truth_(lifecycle__41994__auto__)){
var G__57774_58848 = this__41992__auto__;
var G__57775_58849 = new cljs.core.Keyword(null,"mount","mount",-1560582470);
(lifecycle__41994__auto__.cljs$core$IFn$_invoke$arity$2 ? lifecycle__41994__auto__.cljs$core$IFn$_invoke$arity$2(G__57774_58848,G__57775_58849) : lifecycle__41994__auto__.call(null,G__57774_58848,G__57775_58849));
} else {
}

return com.wsscode.pathom.viz.index_explorer.render_attribute_graph(this$);
});})(x57757_58832))
;


com.wsscode.pathom.viz.index_explorer.AttributeGraph.prototype.constructor = com.wsscode.pathom.viz.index_explorer.AttributeGraph;

com.wsscode.pathom.viz.index_explorer.AttributeGraph.prototype.constructor.displayName = "com.wsscode.pathom.viz.index-explorer/AttributeGraph";

com.wsscode.pathom.viz.index_explorer.AttributeGraph.prototype.fulcro$isComponent = true;

var x57776_58850 = com.wsscode.pathom.viz.index_explorer.AttributeGraph;
x57776_58850.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x57776_58850.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x57776_58850){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(1),new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"100%"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"$pathom-viz-index-explorer-attr-node","$pathom-viz-index-explorer-attr-node",230011996),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),"#000A"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&$pathom-viz-index-explorer-attr-node-multi","&$pathom-viz-index-explorer-attr-node-multi",2047093030),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fill","fill",883462889),"#00000021",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#101010",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"5px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&$pathom-viz-index-explorer-attr-node-main","&$pathom-viz-index-explorer-attr-node-main",378093865),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),"#f9e943e3"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&$pathom-viz-index-explorer-attr-node-highlight","&$pathom-viz-index-explorer-attr-node-highlight",565009481),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),"#de2b34"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"$pathom-viz-index-explorer-arrow-provides","$pathom-viz-index-explorer-arrow-provides",51426281),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),"#666"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"$pathom-viz-index-explorer-arrow-reaches","$pathom-viz-index-explorer-arrow-reaches",-1480018114),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),"#666"], null)], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"$pathom-viz-index-explorer-attr-link","$pathom-viz-index-explorer-attr-link",-1176109107),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#999",new cljs.core.Keyword(null,"stroke-opacity","stroke-opacity",-1191543159),"0.6",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"1.5px",new cljs.core.Keyword(null,"fill","fill",883462889),"none"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&$pathom-viz-index-explorer-attr-link-focus-highlight","&$pathom-viz-index-explorer-attr-link-focus-highlight",1640164737),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#4242e0db",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"3px",new cljs.core.Keyword(null,"z-index","z-index",1892827090),"10"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&$pathom-viz-index-explorer-attr-link-target-highlight","&$pathom-viz-index-explorer-attr-link-target-highlight",-1694507161),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#0c0",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"3px",new cljs.core.Keyword(null,"z-index","z-index",1892827090),"10"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&$pathom-viz-index-explorer-attr-link-source-highlight","&$pathom-viz-index-explorer-attr-link-source-highlight",27199592),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#cc1a9d",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"2px",new cljs.core.Keyword(null,"z-index","z-index",1892827090),"10"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&$pathom-viz-index-explorer-attr-link-reach","&$pathom-viz-index-explorer-attr-link-reach",-2118140605),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&$pathom-viz-index-explorer-attr-link-deep","&$pathom-viz-index-explorer-attr-link-deep",-1762657377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stroke-dasharray","stroke-dasharray",-942933855),"3px"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font","font",-1506159249),"bold 18px Verdana, Helvetica, Arial, sans-serif"], null)], null)], null)], null);
});})(x57776_58850))
;

x57776_58850.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x57776_58850){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x57776_58850))
;


var x57777_58854 = com.wsscode.pathom.viz.index_explorer.AttributeGraph.prototype;
x57777_58854.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x57777_58854.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x57777_58854){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(1),new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"100%"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"$pathom-viz-index-explorer-attr-node","$pathom-viz-index-explorer-attr-node",230011996),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),"#000A"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&$pathom-viz-index-explorer-attr-node-multi","&$pathom-viz-index-explorer-attr-node-multi",2047093030),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fill","fill",883462889),"#00000021",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#101010",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"5px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&$pathom-viz-index-explorer-attr-node-main","&$pathom-viz-index-explorer-attr-node-main",378093865),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),"#f9e943e3"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&$pathom-viz-index-explorer-attr-node-highlight","&$pathom-viz-index-explorer-attr-node-highlight",565009481),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),"#de2b34"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"$pathom-viz-index-explorer-arrow-provides","$pathom-viz-index-explorer-arrow-provides",51426281),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),"#666"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"$pathom-viz-index-explorer-arrow-reaches","$pathom-viz-index-explorer-arrow-reaches",-1480018114),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),"#666"], null)], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"$pathom-viz-index-explorer-attr-link","$pathom-viz-index-explorer-attr-link",-1176109107),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#999",new cljs.core.Keyword(null,"stroke-opacity","stroke-opacity",-1191543159),"0.6",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"1.5px",new cljs.core.Keyword(null,"fill","fill",883462889),"none"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&$pathom-viz-index-explorer-attr-link-focus-highlight","&$pathom-viz-index-explorer-attr-link-focus-highlight",1640164737),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#4242e0db",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"3px",new cljs.core.Keyword(null,"z-index","z-index",1892827090),"10"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&$pathom-viz-index-explorer-attr-link-target-highlight","&$pathom-viz-index-explorer-attr-link-target-highlight",-1694507161),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#0c0",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"3px",new cljs.core.Keyword(null,"z-index","z-index",1892827090),"10"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&$pathom-viz-index-explorer-attr-link-source-highlight","&$pathom-viz-index-explorer-attr-link-source-highlight",27199592),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#cc1a9d",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"2px",new cljs.core.Keyword(null,"z-index","z-index",1892827090),"10"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&$pathom-viz-index-explorer-attr-link-reach","&$pathom-viz-index-explorer-attr-link-reach",-2118140605),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&$pathom-viz-index-explorer-attr-link-deep","&$pathom-viz-index-explorer-attr-link-deep",-1762657377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stroke-dasharray","stroke-dasharray",-942933855),"3px"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font","font",-1506159249),"bold 18px Verdana, Helvetica, Arial, sans-serif"], null)], null)], null)], null);
});})(x57777_58854))
;

x57777_58854.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x57777_58854){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x57777_58854))
;


com.wsscode.pathom.viz.index_explorer.AttributeGraph.cljs$lang$type = true;

com.wsscode.pathom.viz.index_explorer.AttributeGraph.cljs$lang$ctorStr = "com.wsscode.pathom.viz.index-explorer/AttributeGraph";

com.wsscode.pathom.viz.index_explorer.AttributeGraph.cljs$lang$ctorPrWriter = (function (this__43093__auto__,writer__43094__auto__,opt__43095__auto__){
return cljs.core._write(writer__43094__auto__,"com.wsscode.pathom.viz.index-explorer/AttributeGraph");
});
com.wsscode.pathom.viz.index_explorer.attribute_graph = fulcro.client.primitives.factory.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.AttributeGraph);
/**
 * Get attribute from index, remove provides when interconnections is falsy.
 */
com.wsscode.pathom.viz.index_explorer.pull_attr = (function com$wsscode$pathom$viz$index_explorer$pull_attr(p__57778,attr){
var map__57779 = p__57778;
var map__57779__$1 = (((((!((map__57779 == null))))?(((((map__57779.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57779.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57779):map__57779);
var attr_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57779__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-index","com.wsscode.pathom.viz.index-explorer/attr-index",684180200));
var interconnections_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57779__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","interconnections?","com.wsscode.pathom.viz.index-explorer/interconnections?",-1723481228));
var G__57781 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(attr_index,attr);
if(interconnections_QMARK_ === false){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__57781,new cljs.core.Keyword("com.wsscode.pathom.connect","attr-provides","com.wsscode.pathom.connect/attr-provides",-474523918));
} else {
return G__57781;
}
});
com.wsscode.pathom.viz.index_explorer.attribute_network_STAR_ = (function com$wsscode$pathom$viz$index_explorer$attribute_network_STAR_(p__57782,source){
var map__57783 = p__57782;
var map__57783__$1 = (((((!((map__57783 == null))))?(((((map__57783.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57783.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57783):map__57783);
var options = map__57783__$1;
var attributes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57783__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attributes","com.wsscode.pathom.viz.index-explorer/attributes",-67264281));
var sub_index = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__57783__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","sub-index","com.wsscode.pathom.viz.index-explorer/sub-index",-858012438),cljs.core.PersistentArrayMap.EMPTY);
var nested_reaches_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__57783__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","nested-reaches?","com.wsscode.pathom.viz.index-explorer/nested-reaches?",-22429448),false);
var direct_reaches_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__57783__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","direct-reaches?","com.wsscode.pathom.viz.index-explorer/direct-reaches?",-1036048994),true);
var direct_provides_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__57783__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","direct-provides?","com.wsscode.pathom.viz.index-explorer/direct-provides?",223892052),true);
var nested_provides_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__57783__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","nested-provides?","com.wsscode.pathom.viz.index-explorer/nested-provides?",-1296758362),false);
var attr_depth = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__57783__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-depth","com.wsscode.pathom.viz.index-explorer/attr-depth",-1327711242),(1));
var attr_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57783__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-index","com.wsscode.pathom.viz.index-explorer/attr-index",684180200));
var attr_visited = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__57783__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-visited","com.wsscode.pathom.viz.index-explorer/attr-visited",703029193),cljs.core.PersistentHashSet.EMPTY);
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
var map__57785 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(index,source);
var map__57785__$1 = (((((!((map__57785 == null))))?(((((map__57785.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57785.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57785):map__57785);
var attr_reach_via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57785__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via","com.wsscode.pathom.connect/attr-reach-via",-483841559));
var attr_provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57785__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attr-provides","com.wsscode.pathom.connect/attr-provides",-474523918));
var options_SINGLEQUOTE_ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(options,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-index","com.wsscode.pathom.viz.index-explorer/attr-index",684180200),index,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-depth","com.wsscode.pathom.viz.index-explorer/attr-depth",-1327711242),(attr_depth - (1)),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-visited","com.wsscode.pathom.viz.index-explorer/attr-visited",703029193),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(attr_visited,source)], 0));
var _LT__GT_ = base;
var _LT__GT___$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (_LT__GT_,index,base,map__57785,map__57785__$1,attr_reach_via,attr_provides,options_SINGLEQUOTE_,map__57783,map__57783__$1,options,attributes,sub_index,nested_reaches_QMARK_,direct_reaches_QMARK_,direct_provides_QMARK_,nested_provides_QMARK_,attr_depth,attr_index,attr_visited){
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
var G__57787 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(options_SINGLEQUOTE_,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","sub-index","com.wsscode.pathom.viz.index-explorer/sub-index",-858012438),out);
var G__57788 = attr;
return (com.wsscode.pathom.viz.index_explorer.attribute_network_STAR_.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.attribute_network_STAR_.cljs$core$IFn$_invoke$arity$2(G__57787,G__57788) : com.wsscode.pathom.viz.index_explorer.attribute_network_STAR_.call(null,G__57787,G__57788));
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(out,attr,cljs.core.merge,com.wsscode.pathom.viz.index_explorer.pull_attr(options_SINGLEQUOTE_,attr));
}
} else {
return out;
}
});})(_LT__GT_,index,base,map__57785,map__57785__$1,attr_reach_via,attr_provides,options_SINGLEQUOTE_,map__57783,map__57783__$1,options,attributes,sub_index,nested_reaches_QMARK_,direct_reaches_QMARK_,direct_provides_QMARK_,nested_provides_QMARK_,attr_depth,attr_index,attr_visited))
,_LT__GT_,cljs.core.keys(attr_reach_via));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (_LT__GT_,_LT__GT___$1,index,base,map__57785,map__57785__$1,attr_reach_via,attr_provides,options_SINGLEQUOTE_,map__57783,map__57783__$1,options,attributes,sub_index,nested_reaches_QMARK_,direct_reaches_QMARK_,direct_provides_QMARK_,nested_provides_QMARK_,attr_depth,attr_index,attr_visited){
return (function (out,attr){
if(cljs.core.truth_((function (){var and__4120__auto__ = direct_provides_QMARK_;
if(cljs.core.truth_(and__4120__auto__)){
return (attr instanceof cljs.core.Keyword);
} else {
return and__4120__auto__;
}
})())){
if((attr_depth > (1))){
var G__57789 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(options_SINGLEQUOTE_,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","sub-index","com.wsscode.pathom.viz.index-explorer/sub-index",-858012438),out);
var G__57790 = attr;
return (com.wsscode.pathom.viz.index_explorer.attribute_network_STAR_.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.attribute_network_STAR_.cljs$core$IFn$_invoke$arity$2(G__57789,G__57790) : com.wsscode.pathom.viz.index_explorer.attribute_network_STAR_.call(null,G__57789,G__57790));
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
});})(_LT__GT_,_LT__GT___$1,index,base,map__57785,map__57785__$1,attr_reach_via,attr_provides,options_SINGLEQUOTE_,map__57783,map__57783__$1,options,attributes,sub_index,nested_reaches_QMARK_,direct_reaches_QMARK_,direct_provides_QMARK_,nested_provides_QMARK_,attr_depth,attr_index,attr_visited))
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
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__57791_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(p1__57791_SHARP_,(0),(function (x){
if((x instanceof cljs.core.Keyword)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
} else {
return x;
}
}));
})),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p__57792){
var vec__57793 = p__57792;
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57793,(0),null);
var resolvers = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57793,(1),null);
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
return (function com$wsscode$pathom$viz$index_explorer$render_plugin_extension_$_iter__57796(s__57797){
return (new cljs.core.LazySeq(null,((function (plugins,data){
return (function (){
var s__57797__$1 = s__57797;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__57797__$1);
if(temp__5720__auto__){
var s__57797__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__57797__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__57797__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__57799 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__57798 = (0);
while(true){
if((i__57798 < size__4522__auto__)){
var map__57800 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__57798);
var map__57800__$1 = (((((!((map__57800 == null))))?(((((map__57800.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57800.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57800):map__57800);
var plugin = map__57800__$1;
var plugin_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57800__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","plugin-id","com.wsscode.pathom.viz.index-explorer/plugin-id",-1782512648));
if(cljs.core.contains_QMARK_(plugin,view)){
cljs.core.chunk_append(b__57799,fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([plugin_id], 0))], null),(function (){var fexpr__57802 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(plugin,view);
return (fexpr__57802.cljs$core$IFn$_invoke$arity$1 ? fexpr__57802.cljs$core$IFn$_invoke$arity$1(data) : fexpr__57802.call(null,data));
})()], 0)));

var G__58875 = (i__57798 + (1));
i__57798 = G__58875;
continue;
} else {
var G__58876 = (i__57798 + (1));
i__57798 = G__58876;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__57799),com$wsscode$pathom$viz$index_explorer$render_plugin_extension_$_iter__57796(cljs.core.chunk_rest(s__57797__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__57799),null);
}
} else {
var map__57803 = cljs.core.first(s__57797__$2);
var map__57803__$1 = (((((!((map__57803 == null))))?(((((map__57803.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57803.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57803):map__57803);
var plugin = map__57803__$1;
var plugin_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57803__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","plugin-id","com.wsscode.pathom.viz.index-explorer/plugin-id",-1782512648));
if(cljs.core.contains_QMARK_(plugin,view)){
return cljs.core.cons(fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([plugin_id], 0))], null),(function (){var fexpr__57805 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(plugin,view);
return (fexpr__57805.cljs$core$IFn$_invoke$arity$1 ? fexpr__57805.cljs$core$IFn$_invoke$arity$1(data) : fexpr__57805.call(null,data));
})()], 0)),com$wsscode$pathom$viz$index_explorer$render_plugin_extension_$_iter__57796(cljs.core.rest(s__57797__$2)));
} else {
var G__58878 = cljs.core.rest(s__57797__$2);
s__57797__$1 = G__58878;
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
var this__43090__auto__ = this;
React.Component.apply(this__43090__auto__,arguments);

if((!((this__43090__auto__.initLocalState == null)))){
this__43090__auto__.state = this__43090__auto__.initLocalState();
} else {
this__43090__auto__.state = ({});
}

return this__43090__auto__;
});

var G__57810_58880 = com.wsscode.pathom.viz.index_explorer.AttributeInfoReachVia.prototype;
var G__57811_58881 = React.Component.prototype;
var G__57812_58882 = fulcro.client.primitives.default_component_prototype;
goog.object.extend(G__57810_58880,G__57811_58881,G__57812_58882);
}

fulcro.client.primitives._register_component_BANG_(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","AttributeInfoReachVia","com.wsscode.pathom.viz.index-explorer/AttributeInfoReachVia",-997057837),com.wsscode.pathom.viz.index_explorer.AttributeInfoReachVia);

var x57813_58883 = com.wsscode.pathom.viz.index_explorer.AttributeInfoReachVia.prototype;
x57813_58883.render = ((function (x57813_58883){
return (function (){
var this__42008__auto__ = this;
var this$ = this__42008__auto__;
var _STAR_reconciler_STAR__orig_val__57814 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__57815 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__57816 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__57817 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__57818 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__57819 = fulcro.client.primitives.get_reconciler(this__42008__auto__);
var _STAR_depth_STAR__temp_val__57820 = (fulcro.client.primitives.depth(this__42008__auto__) + (1));
var _STAR_shared_STAR__temp_val__57821 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__42008__auto__);
var _STAR_instrument_STAR__temp_val__57822 = fulcro.client.primitives.instrument(this__42008__auto__);
var _STAR_parent_STAR__temp_val__57823 = this__42008__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__57819;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__57820;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__57821;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__57822;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__57823;

try{var map__57824 = fulcro.client.primitives.props(this$);
var map__57824__$1 = (((((!((map__57824 == null))))?(((((map__57824.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57824.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57824):map__57824);
var attr_reach_via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57824__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via","com.wsscode.pathom.connect/attr-reach-via",-483841559));
var computed = fulcro.client.primitives.get_computed.cljs$core$IFn$_invoke$arity$1(this$);
var G__57826 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","panel-title","com.wsscode.pathom.viz.ui.kit/panel-title",1529445284),"Reach via",new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","panel-tag","com.wsscode.pathom.viz.ui.kit/panel-tag",144392508),cljs.core.count(attr_reach_via)], null);
var G__57827 = (function (){var nested_reaches_QMARK_ = true;
var iter__4523__auto__ = ((function (nested_reaches_QMARK_,G__57826,map__57824,map__57824__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__57814,_STAR_depth_STAR__orig_val__57815,_STAR_shared_STAR__orig_val__57816,_STAR_instrument_STAR__orig_val__57817,_STAR_parent_STAR__orig_val__57818,_STAR_reconciler_STAR__temp_val__57819,_STAR_depth_STAR__temp_val__57820,_STAR_shared_STAR__temp_val__57821,_STAR_instrument_STAR__temp_val__57822,_STAR_parent_STAR__temp_val__57823,this$,this__42008__auto__,x57813_58883){
return (function com$wsscode$pathom$viz$index_explorer$iter__57828(s__57829){
return (new cljs.core.LazySeq(null,((function (nested_reaches_QMARK_,G__57826,map__57824,map__57824__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__57814,_STAR_depth_STAR__orig_val__57815,_STAR_shared_STAR__orig_val__57816,_STAR_instrument_STAR__orig_val__57817,_STAR_parent_STAR__orig_val__57818,_STAR_reconciler_STAR__temp_val__57819,_STAR_depth_STAR__temp_val__57820,_STAR_shared_STAR__temp_val__57821,_STAR_instrument_STAR__temp_val__57822,_STAR_parent_STAR__temp_val__57823,this$,this__42008__auto__,x57813_58883){
return (function (){
var s__57829__$1 = s__57829;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__57829__$1);
if(temp__5720__auto__){
var s__57829__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__57829__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__57829__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__57831 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__57830 = (0);
while(true){
if((i__57830 < size__4522__auto__)){
var vec__57832 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__57830);
var input = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57832,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57832,(1),null);
var direct_QMARK_ = cljs.core.some(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(com.wsscode.pathom.viz.index_explorer.direct_input_QMARK_,cljs.core.first),v);
if(cljs.core.truth_((function (){var or__4131__auto__ = direct_QMARK_;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return nested_reaches_QMARK_;
}
})())){
cljs.core.chunk_append(b__57831,fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([input], 0))], null),(function (){var G__57835 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),(function (){var G__57837 = input;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(input),(1))){
return cljs.core.first(G__57837);
} else {
return G__57837;
}
})(),new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","render","com.wsscode.pathom.viz.ui.kit/render",1024565529),((function (i__57830,s__57829__$1,direct_QMARK_,vec__57832,input,v,c__4521__auto__,size__4522__auto__,b__57831,s__57829__$2,temp__5720__auto__,nested_reaches_QMARK_,G__57826,map__57824,map__57824__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__57814,_STAR_depth_STAR__orig_val__57815,_STAR_shared_STAR__orig_val__57816,_STAR_instrument_STAR__orig_val__57817,_STAR_parent_STAR__orig_val__57818,_STAR_reconciler_STAR__temp_val__57819,_STAR_depth_STAR__temp_val__57820,_STAR_shared_STAR__temp_val__57821,_STAR_instrument_STAR__temp_val__57822,_STAR_parent_STAR__temp_val__57823,this$,this__42008__auto__,x57813_58883){
return (function (){
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([input], 0));
});})(i__57830,s__57829__$1,direct_QMARK_,vec__57832,input,v,c__4521__auto__,size__4522__auto__,b__57831,s__57829__$2,temp__5720__auto__,nested_reaches_QMARK_,G__57826,map__57824,map__57824__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__57814,_STAR_depth_STAR__orig_val__57815,_STAR_shared_STAR__orig_val__57816,_STAR_instrument_STAR__orig_val__57817,_STAR_parent_STAR__orig_val__57818,_STAR_reconciler_STAR__temp_val__57819,_STAR_depth_STAR__temp_val__57820,_STAR_shared_STAR__temp_val__57821,_STAR_instrument_STAR__temp_val__57822,_STAR_parent_STAR__temp_val__57823,this$,this__42008__auto__,x57813_58883))
,new cljs.core.Keyword(null,"style","style",-496642736),(function (){var G__57838 = cljs.core.PersistentArrayMap.EMPTY;
if(cljs.core.truth_(direct_QMARK_)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__57838,new cljs.core.Keyword(null,"fontWeight","fontWeight",166450581),"bold");
} else {
return G__57838;
}
})()], null);
var G__57836 = computed;
return (com.wsscode.pathom.viz.index_explorer.attribute_link.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.attribute_link.cljs$core$IFn$_invoke$arity$2(G__57835,G__57836) : com.wsscode.pathom.viz.index_explorer.attribute_link.call(null,G__57835,G__57836));
})(),((nested_reaches_QMARK_)?(function (){var iter__4523__auto__ = ((function (i__57830,s__57829__$1,direct_QMARK_,vec__57832,input,v,c__4521__auto__,size__4522__auto__,b__57831,s__57829__$2,temp__5720__auto__,nested_reaches_QMARK_,G__57826,map__57824,map__57824__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__57814,_STAR_depth_STAR__orig_val__57815,_STAR_shared_STAR__orig_val__57816,_STAR_instrument_STAR__orig_val__57817,_STAR_parent_STAR__orig_val__57818,_STAR_reconciler_STAR__temp_val__57819,_STAR_depth_STAR__temp_val__57820,_STAR_shared_STAR__temp_val__57821,_STAR_instrument_STAR__temp_val__57822,_STAR_parent_STAR__temp_val__57823,this$,this__42008__auto__,x57813_58883){
return (function com$wsscode$pathom$viz$index_explorer$iter__57828_$_iter__57839(s__57840){
return (new cljs.core.LazySeq(null,((function (i__57830,s__57829__$1,direct_QMARK_,vec__57832,input,v,c__4521__auto__,size__4522__auto__,b__57831,s__57829__$2,temp__5720__auto__,nested_reaches_QMARK_,G__57826,map__57824,map__57824__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__57814,_STAR_depth_STAR__orig_val__57815,_STAR_shared_STAR__orig_val__57816,_STAR_instrument_STAR__orig_val__57817,_STAR_parent_STAR__orig_val__57818,_STAR_reconciler_STAR__temp_val__57819,_STAR_depth_STAR__temp_val__57820,_STAR_shared_STAR__temp_val__57821,_STAR_instrument_STAR__temp_val__57822,_STAR_parent_STAR__temp_val__57823,this$,this__42008__auto__,x57813_58883){
return (function (){
var s__57840__$1 = s__57840;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__57840__$1);
if(temp__5720__auto____$1){
var s__57840__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__57840__$2)){
var c__4521__auto____$1 = cljs.core.chunk_first(s__57840__$2);
var size__4522__auto____$1 = cljs.core.count(c__4521__auto____$1);
var b__57842 = cljs.core.chunk_buffer(size__4522__auto____$1);
if((function (){var i__57841 = (0);
while(true){
if((i__57841 < size__4522__auto____$1)){
var vec__57843 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto____$1,i__57841);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57843,(0),null);
var resolvers = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57843,(1),null);
var path_SINGLEQUOTE_ = cljs.core.next(path);
if(path_SINGLEQUOTE_){
cljs.core.chunk_append(b__57842,fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path], 0)),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"marginLeft","marginLeft",-551287007),"10px"], null)], null),(function (){var iter__4523__auto__ = ((function (i__57841,s__57840__$1,i__57830,s__57829__$1,path_SINGLEQUOTE_,vec__57843,path,resolvers,c__4521__auto____$1,size__4522__auto____$1,b__57842,s__57840__$2,temp__5720__auto____$1,direct_QMARK_,vec__57832,input,v,c__4521__auto__,size__4522__auto__,b__57831,s__57829__$2,temp__5720__auto__,nested_reaches_QMARK_,G__57826,map__57824,map__57824__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__57814,_STAR_depth_STAR__orig_val__57815,_STAR_shared_STAR__orig_val__57816,_STAR_instrument_STAR__orig_val__57817,_STAR_parent_STAR__orig_val__57818,_STAR_reconciler_STAR__temp_val__57819,_STAR_depth_STAR__temp_val__57820,_STAR_shared_STAR__temp_val__57821,_STAR_instrument_STAR__temp_val__57822,_STAR_parent_STAR__temp_val__57823,this$,this__42008__auto__,x57813_58883){
return (function com$wsscode$pathom$viz$index_explorer$iter__57828_$_iter__57839_$_iter__57846(s__57847){
return (new cljs.core.LazySeq(null,((function (i__57841,s__57840__$1,i__57830,s__57829__$1,path_SINGLEQUOTE_,vec__57843,path,resolvers,c__4521__auto____$1,size__4522__auto____$1,b__57842,s__57840__$2,temp__5720__auto____$1,direct_QMARK_,vec__57832,input,v,c__4521__auto__,size__4522__auto__,b__57831,s__57829__$2,temp__5720__auto__,nested_reaches_QMARK_,G__57826,map__57824,map__57824__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__57814,_STAR_depth_STAR__orig_val__57815,_STAR_shared_STAR__orig_val__57816,_STAR_instrument_STAR__orig_val__57817,_STAR_parent_STAR__orig_val__57818,_STAR_reconciler_STAR__temp_val__57819,_STAR_depth_STAR__temp_val__57820,_STAR_shared_STAR__temp_val__57821,_STAR_instrument_STAR__temp_val__57822,_STAR_parent_STAR__temp_val__57823,this$,this__42008__auto__,x57813_58883){
return (function (){
var s__57847__$1 = s__57847;
while(true){
var temp__5720__auto____$2 = cljs.core.seq(s__57847__$1);
if(temp__5720__auto____$2){
var s__57847__$2 = temp__5720__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__57847__$2)){
var c__4521__auto____$2 = cljs.core.chunk_first(s__57847__$2);
var size__4522__auto____$2 = cljs.core.count(c__4521__auto____$2);
var b__57849 = cljs.core.chunk_buffer(size__4522__auto____$2);
if((function (){var i__57848 = (0);
while(true){
if((i__57848 < size__4522__auto____$2)){
var vec__57850 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto____$2,i__57848);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57850,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57850,(1),null);
cljs.core.chunk_append(b__57849,(function (){var G__57853 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),k,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"marginLeft","marginLeft",-551287007),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((i * (10))),"px"].join('')], null)], null);
var G__57854 = computed;
return (com.wsscode.pathom.viz.index_explorer.attribute_link.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.attribute_link.cljs$core$IFn$_invoke$arity$2(G__57853,G__57854) : com.wsscode.pathom.viz.index_explorer.attribute_link.call(null,G__57853,G__57854));
})());

var G__58890 = (i__57848 + (1));
i__57848 = G__58890;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__57849),com$wsscode$pathom$viz$index_explorer$iter__57828_$_iter__57839_$_iter__57846(cljs.core.chunk_rest(s__57847__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__57849),null);
}
} else {
var vec__57855 = cljs.core.first(s__57847__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57855,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57855,(1),null);
return cljs.core.cons((function (){var G__57858 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),k,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"marginLeft","marginLeft",-551287007),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((i * (10))),"px"].join('')], null)], null);
var G__57859 = computed;
return (com.wsscode.pathom.viz.index_explorer.attribute_link.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.attribute_link.cljs$core$IFn$_invoke$arity$2(G__57858,G__57859) : com.wsscode.pathom.viz.index_explorer.attribute_link.call(null,G__57858,G__57859));
})(),com$wsscode$pathom$viz$index_explorer$iter__57828_$_iter__57839_$_iter__57846(cljs.core.rest(s__57847__$2)));
}
} else {
return null;
}
break;
}
});})(i__57841,s__57840__$1,i__57830,s__57829__$1,path_SINGLEQUOTE_,vec__57843,path,resolvers,c__4521__auto____$1,size__4522__auto____$1,b__57842,s__57840__$2,temp__5720__auto____$1,direct_QMARK_,vec__57832,input,v,c__4521__auto__,size__4522__auto__,b__57831,s__57829__$2,temp__5720__auto__,nested_reaches_QMARK_,G__57826,map__57824,map__57824__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__57814,_STAR_depth_STAR__orig_val__57815,_STAR_shared_STAR__orig_val__57816,_STAR_instrument_STAR__orig_val__57817,_STAR_parent_STAR__orig_val__57818,_STAR_reconciler_STAR__temp_val__57819,_STAR_depth_STAR__temp_val__57820,_STAR_shared_STAR__temp_val__57821,_STAR_instrument_STAR__temp_val__57822,_STAR_parent_STAR__temp_val__57823,this$,this__42008__auto__,x57813_58883))
,null,null));
});})(i__57841,s__57840__$1,i__57830,s__57829__$1,path_SINGLEQUOTE_,vec__57843,path,resolvers,c__4521__auto____$1,size__4522__auto____$1,b__57842,s__57840__$2,temp__5720__auto____$1,direct_QMARK_,vec__57832,input,v,c__4521__auto__,size__4522__auto__,b__57831,s__57829__$2,temp__5720__auto__,nested_reaches_QMARK_,G__57826,map__57824,map__57824__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__57814,_STAR_depth_STAR__orig_val__57815,_STAR_shared_STAR__orig_val__57816,_STAR_instrument_STAR__orig_val__57817,_STAR_parent_STAR__orig_val__57818,_STAR_reconciler_STAR__temp_val__57819,_STAR_depth_STAR__temp_val__57820,_STAR_shared_STAR__temp_val__57821,_STAR_instrument_STAR__temp_val__57822,_STAR_parent_STAR__temp_val__57823,this$,this__42008__auto__,x57813_58883))
;
return iter__4523__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,path_SINGLEQUOTE_,cljs.core.range.cljs$core$IFn$_invoke$arity$0()));
})()], 0)));

var G__58891 = (i__57841 + (1));
i__57841 = G__58891;
continue;
} else {
var G__58892 = (i__57841 + (1));
i__57841 = G__58892;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__57842),com$wsscode$pathom$viz$index_explorer$iter__57828_$_iter__57839(cljs.core.chunk_rest(s__57840__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__57842),null);
}
} else {
var vec__57860 = cljs.core.first(s__57840__$2);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57860,(0),null);
var resolvers = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57860,(1),null);
var path_SINGLEQUOTE_ = cljs.core.next(path);
if(path_SINGLEQUOTE_){
return cljs.core.cons(fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path], 0)),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"marginLeft","marginLeft",-551287007),"10px"], null)], null),(function (){var iter__4523__auto__ = ((function (s__57840__$1,i__57830,s__57829__$1,path_SINGLEQUOTE_,vec__57860,path,resolvers,s__57840__$2,temp__5720__auto____$1,direct_QMARK_,vec__57832,input,v,c__4521__auto__,size__4522__auto__,b__57831,s__57829__$2,temp__5720__auto__,nested_reaches_QMARK_,G__57826,map__57824,map__57824__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__57814,_STAR_depth_STAR__orig_val__57815,_STAR_shared_STAR__orig_val__57816,_STAR_instrument_STAR__orig_val__57817,_STAR_parent_STAR__orig_val__57818,_STAR_reconciler_STAR__temp_val__57819,_STAR_depth_STAR__temp_val__57820,_STAR_shared_STAR__temp_val__57821,_STAR_instrument_STAR__temp_val__57822,_STAR_parent_STAR__temp_val__57823,this$,this__42008__auto__,x57813_58883){
return (function com$wsscode$pathom$viz$index_explorer$iter__57828_$_iter__57839_$_iter__57863(s__57864){
return (new cljs.core.LazySeq(null,((function (s__57840__$1,i__57830,s__57829__$1,path_SINGLEQUOTE_,vec__57860,path,resolvers,s__57840__$2,temp__5720__auto____$1,direct_QMARK_,vec__57832,input,v,c__4521__auto__,size__4522__auto__,b__57831,s__57829__$2,temp__5720__auto__,nested_reaches_QMARK_,G__57826,map__57824,map__57824__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__57814,_STAR_depth_STAR__orig_val__57815,_STAR_shared_STAR__orig_val__57816,_STAR_instrument_STAR__orig_val__57817,_STAR_parent_STAR__orig_val__57818,_STAR_reconciler_STAR__temp_val__57819,_STAR_depth_STAR__temp_val__57820,_STAR_shared_STAR__temp_val__57821,_STAR_instrument_STAR__temp_val__57822,_STAR_parent_STAR__temp_val__57823,this$,this__42008__auto__,x57813_58883){
return (function (){
var s__57864__$1 = s__57864;
while(true){
var temp__5720__auto____$2 = cljs.core.seq(s__57864__$1);
if(temp__5720__auto____$2){
var s__57864__$2 = temp__5720__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__57864__$2)){
var c__4521__auto____$1 = cljs.core.chunk_first(s__57864__$2);
var size__4522__auto____$1 = cljs.core.count(c__4521__auto____$1);
var b__57866 = cljs.core.chunk_buffer(size__4522__auto____$1);
if((function (){var i__57865 = (0);
while(true){
if((i__57865 < size__4522__auto____$1)){
var vec__57867 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto____$1,i__57865);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57867,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57867,(1),null);
cljs.core.chunk_append(b__57866,(function (){var G__57870 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),k,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"marginLeft","marginLeft",-551287007),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((i * (10))),"px"].join('')], null)], null);
var G__57871 = computed;
return (com.wsscode.pathom.viz.index_explorer.attribute_link.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.attribute_link.cljs$core$IFn$_invoke$arity$2(G__57870,G__57871) : com.wsscode.pathom.viz.index_explorer.attribute_link.call(null,G__57870,G__57871));
})());

var G__58893 = (i__57865 + (1));
i__57865 = G__58893;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__57866),com$wsscode$pathom$viz$index_explorer$iter__57828_$_iter__57839_$_iter__57863(cljs.core.chunk_rest(s__57864__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__57866),null);
}
} else {
var vec__57872 = cljs.core.first(s__57864__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57872,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57872,(1),null);
return cljs.core.cons((function (){var G__57875 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),k,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"marginLeft","marginLeft",-551287007),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((i * (10))),"px"].join('')], null)], null);
var G__57876 = computed;
return (com.wsscode.pathom.viz.index_explorer.attribute_link.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.attribute_link.cljs$core$IFn$_invoke$arity$2(G__57875,G__57876) : com.wsscode.pathom.viz.index_explorer.attribute_link.call(null,G__57875,G__57876));
})(),com$wsscode$pathom$viz$index_explorer$iter__57828_$_iter__57839_$_iter__57863(cljs.core.rest(s__57864__$2)));
}
} else {
return null;
}
break;
}
});})(s__57840__$1,i__57830,s__57829__$1,path_SINGLEQUOTE_,vec__57860,path,resolvers,s__57840__$2,temp__5720__auto____$1,direct_QMARK_,vec__57832,input,v,c__4521__auto__,size__4522__auto__,b__57831,s__57829__$2,temp__5720__auto__,nested_reaches_QMARK_,G__57826,map__57824,map__57824__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__57814,_STAR_depth_STAR__orig_val__57815,_STAR_shared_STAR__orig_val__57816,_STAR_instrument_STAR__orig_val__57817,_STAR_parent_STAR__orig_val__57818,_STAR_reconciler_STAR__temp_val__57819,_STAR_depth_STAR__temp_val__57820,_STAR_shared_STAR__temp_val__57821,_STAR_instrument_STAR__temp_val__57822,_STAR_parent_STAR__temp_val__57823,this$,this__42008__auto__,x57813_58883))
,null,null));
});})(s__57840__$1,i__57830,s__57829__$1,path_SINGLEQUOTE_,vec__57860,path,resolvers,s__57840__$2,temp__5720__auto____$1,direct_QMARK_,vec__57832,input,v,c__4521__auto__,size__4522__auto__,b__57831,s__57829__$2,temp__5720__auto__,nested_reaches_QMARK_,G__57826,map__57824,map__57824__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__57814,_STAR_depth_STAR__orig_val__57815,_STAR_shared_STAR__orig_val__57816,_STAR_instrument_STAR__orig_val__57817,_STAR_parent_STAR__orig_val__57818,_STAR_reconciler_STAR__temp_val__57819,_STAR_depth_STAR__temp_val__57820,_STAR_shared_STAR__temp_val__57821,_STAR_instrument_STAR__temp_val__57822,_STAR_parent_STAR__temp_val__57823,this$,this__42008__auto__,x57813_58883))
;
return iter__4523__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,path_SINGLEQUOTE_,cljs.core.range.cljs$core$IFn$_invoke$arity$0()));
})()], 0)),com$wsscode$pathom$viz$index_explorer$iter__57828_$_iter__57839(cljs.core.rest(s__57840__$2)));
} else {
var G__58894 = cljs.core.rest(s__57840__$2);
s__57840__$1 = G__58894;
continue;
}
}
} else {
return null;
}
break;
}
});})(i__57830,s__57829__$1,direct_QMARK_,vec__57832,input,v,c__4521__auto__,size__4522__auto__,b__57831,s__57829__$2,temp__5720__auto__,nested_reaches_QMARK_,G__57826,map__57824,map__57824__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__57814,_STAR_depth_STAR__orig_val__57815,_STAR_shared_STAR__orig_val__57816,_STAR_instrument_STAR__orig_val__57817,_STAR_parent_STAR__orig_val__57818,_STAR_reconciler_STAR__temp_val__57819,_STAR_depth_STAR__temp_val__57820,_STAR_shared_STAR__temp_val__57821,_STAR_instrument_STAR__temp_val__57822,_STAR_parent_STAR__temp_val__57823,this$,this__42008__auto__,x57813_58883))
,null,null));
});})(i__57830,s__57829__$1,direct_QMARK_,vec__57832,input,v,c__4521__auto__,size__4522__auto__,b__57831,s__57829__$2,temp__5720__auto__,nested_reaches_QMARK_,G__57826,map__57824,map__57824__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__57814,_STAR_depth_STAR__orig_val__57815,_STAR_shared_STAR__orig_val__57816,_STAR_instrument_STAR__orig_val__57817,_STAR_parent_STAR__orig_val__57818,_STAR_reconciler_STAR__temp_val__57819,_STAR_depth_STAR__temp_val__57820,_STAR_shared_STAR__temp_val__57821,_STAR_instrument_STAR__temp_val__57822,_STAR_parent_STAR__temp_val__57823,this$,this__42008__auto__,x57813_58883))
;
return iter__4523__auto__(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(((function (i__57830,s__57829__$1,iter__4523__auto__,direct_QMARK_,vec__57832,input,v,c__4521__auto__,size__4522__auto__,b__57831,s__57829__$2,temp__5720__auto__,nested_reaches_QMARK_,G__57826,map__57824,map__57824__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__57814,_STAR_depth_STAR__orig_val__57815,_STAR_shared_STAR__orig_val__57816,_STAR_instrument_STAR__orig_val__57817,_STAR_parent_STAR__orig_val__57818,_STAR_reconciler_STAR__temp_val__57819,_STAR_depth_STAR__temp_val__57820,_STAR_shared_STAR__temp_val__57821,_STAR_instrument_STAR__temp_val__57822,_STAR_parent_STAR__temp_val__57823,this$,this__42008__auto__,x57813_58883){
return (function (p1__57807_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(p1__57807_SHARP_,(0),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,cljs.core.sort));
});})(i__57830,s__57829__$1,iter__4523__auto__,direct_QMARK_,vec__57832,input,v,c__4521__auto__,size__4522__auto__,b__57831,s__57829__$2,temp__5720__auto__,nested_reaches_QMARK_,G__57826,map__57824,map__57824__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__57814,_STAR_depth_STAR__orig_val__57815,_STAR_shared_STAR__orig_val__57816,_STAR_instrument_STAR__orig_val__57817,_STAR_parent_STAR__orig_val__57818,_STAR_reconciler_STAR__temp_val__57819,_STAR_depth_STAR__temp_val__57820,_STAR_shared_STAR__temp_val__57821,_STAR_instrument_STAR__temp_val__57822,_STAR_parent_STAR__temp_val__57823,this$,this__42008__auto__,x57813_58883))
,cljs.core.first),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__57830,s__57829__$1,iter__4523__auto__,direct_QMARK_,vec__57832,input,v,c__4521__auto__,size__4522__auto__,b__57831,s__57829__$2,temp__5720__auto__,nested_reaches_QMARK_,G__57826,map__57824,map__57824__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__57814,_STAR_depth_STAR__orig_val__57815,_STAR_shared_STAR__orig_val__57816,_STAR_instrument_STAR__orig_val__57817,_STAR_parent_STAR__orig_val__57818,_STAR_reconciler_STAR__temp_val__57819,_STAR_depth_STAR__temp_val__57820,_STAR_shared_STAR__temp_val__57821,_STAR_instrument_STAR__temp_val__57822,_STAR_parent_STAR__temp_val__57823,this$,this__42008__auto__,x57813_58883){
return (function (p1__57806_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(p1__57806_SHARP_,(0),((function (i__57830,s__57829__$1,iter__4523__auto__,direct_QMARK_,vec__57832,input,v,c__4521__auto__,size__4522__auto__,b__57831,s__57829__$2,temp__5720__auto__,nested_reaches_QMARK_,G__57826,map__57824,map__57824__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__57814,_STAR_depth_STAR__orig_val__57815,_STAR_shared_STAR__orig_val__57816,_STAR_instrument_STAR__orig_val__57817,_STAR_parent_STAR__orig_val__57818,_STAR_reconciler_STAR__temp_val__57819,_STAR_depth_STAR__temp_val__57820,_STAR_shared_STAR__temp_val__57821,_STAR_instrument_STAR__temp_val__57822,_STAR_parent_STAR__temp_val__57823,this$,this__42008__auto__,x57813_58883){
return (function (x){
if(cljs.core.set_QMARK_(x)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
} else {
return x;
}
});})(i__57830,s__57829__$1,iter__4523__auto__,direct_QMARK_,vec__57832,input,v,c__4521__auto__,size__4522__auto__,b__57831,s__57829__$2,temp__5720__auto__,nested_reaches_QMARK_,G__57826,map__57824,map__57824__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__57814,_STAR_depth_STAR__orig_val__57815,_STAR_shared_STAR__orig_val__57816,_STAR_instrument_STAR__orig_val__57817,_STAR_parent_STAR__orig_val__57818,_STAR_reconciler_STAR__temp_val__57819,_STAR_depth_STAR__temp_val__57820,_STAR_shared_STAR__temp_val__57821,_STAR_instrument_STAR__temp_val__57822,_STAR_parent_STAR__temp_val__57823,this$,this__42008__auto__,x57813_58883))
);
});})(i__57830,s__57829__$1,iter__4523__auto__,direct_QMARK_,vec__57832,input,v,c__4521__auto__,size__4522__auto__,b__57831,s__57829__$2,temp__5720__auto__,nested_reaches_QMARK_,G__57826,map__57824,map__57824__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__57814,_STAR_depth_STAR__orig_val__57815,_STAR_shared_STAR__orig_val__57816,_STAR_instrument_STAR__orig_val__57817,_STAR_parent_STAR__orig_val__57818,_STAR_reconciler_STAR__temp_val__57819,_STAR_depth_STAR__temp_val__57820,_STAR_shared_STAR__temp_val__57821,_STAR_instrument_STAR__temp_val__57822,_STAR_parent_STAR__temp_val__57823,this$,this__42008__auto__,x57813_58883))
,v)));
})():null)], 0)));

var G__58895 = (i__57830 + (1));
i__57830 = G__58895;
continue;
} else {
var G__58896 = (i__57830 + (1));
i__57830 = G__58896;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__57831),com$wsscode$pathom$viz$index_explorer$iter__57828(cljs.core.chunk_rest(s__57829__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__57831),null);
}
} else {
var vec__57877 = cljs.core.first(s__57829__$2);
var input = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57877,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57877,(1),null);
var direct_QMARK_ = cljs.core.some(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(com.wsscode.pathom.viz.index_explorer.direct_input_QMARK_,cljs.core.first),v);
if(cljs.core.truth_((function (){var or__4131__auto__ = direct_QMARK_;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return nested_reaches_QMARK_;
}
})())){
return cljs.core.cons(fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([input], 0))], null),(function (){var G__57880 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),(function (){var G__57882 = input;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(input),(1))){
return cljs.core.first(G__57882);
} else {
return G__57882;
}
})(),new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","render","com.wsscode.pathom.viz.ui.kit/render",1024565529),((function (s__57829__$1,direct_QMARK_,vec__57877,input,v,s__57829__$2,temp__5720__auto__,nested_reaches_QMARK_,G__57826,map__57824,map__57824__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__57814,_STAR_depth_STAR__orig_val__57815,_STAR_shared_STAR__orig_val__57816,_STAR_instrument_STAR__orig_val__57817,_STAR_parent_STAR__orig_val__57818,_STAR_reconciler_STAR__temp_val__57819,_STAR_depth_STAR__temp_val__57820,_STAR_shared_STAR__temp_val__57821,_STAR_instrument_STAR__temp_val__57822,_STAR_parent_STAR__temp_val__57823,this$,this__42008__auto__,x57813_58883){
return (function (){
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([input], 0));
});})(s__57829__$1,direct_QMARK_,vec__57877,input,v,s__57829__$2,temp__5720__auto__,nested_reaches_QMARK_,G__57826,map__57824,map__57824__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__57814,_STAR_depth_STAR__orig_val__57815,_STAR_shared_STAR__orig_val__57816,_STAR_instrument_STAR__orig_val__57817,_STAR_parent_STAR__orig_val__57818,_STAR_reconciler_STAR__temp_val__57819,_STAR_depth_STAR__temp_val__57820,_STAR_shared_STAR__temp_val__57821,_STAR_instrument_STAR__temp_val__57822,_STAR_parent_STAR__temp_val__57823,this$,this__42008__auto__,x57813_58883))
,new cljs.core.Keyword(null,"style","style",-496642736),(function (){var G__57883 = cljs.core.PersistentArrayMap.EMPTY;
if(cljs.core.truth_(direct_QMARK_)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__57883,new cljs.core.Keyword(null,"fontWeight","fontWeight",166450581),"bold");
} else {
return G__57883;
}
})()], null);
var G__57881 = computed;
return (com.wsscode.pathom.viz.index_explorer.attribute_link.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.attribute_link.cljs$core$IFn$_invoke$arity$2(G__57880,G__57881) : com.wsscode.pathom.viz.index_explorer.attribute_link.call(null,G__57880,G__57881));
})(),((nested_reaches_QMARK_)?(function (){var iter__4523__auto__ = ((function (s__57829__$1,direct_QMARK_,vec__57877,input,v,s__57829__$2,temp__5720__auto__,nested_reaches_QMARK_,G__57826,map__57824,map__57824__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__57814,_STAR_depth_STAR__orig_val__57815,_STAR_shared_STAR__orig_val__57816,_STAR_instrument_STAR__orig_val__57817,_STAR_parent_STAR__orig_val__57818,_STAR_reconciler_STAR__temp_val__57819,_STAR_depth_STAR__temp_val__57820,_STAR_shared_STAR__temp_val__57821,_STAR_instrument_STAR__temp_val__57822,_STAR_parent_STAR__temp_val__57823,this$,this__42008__auto__,x57813_58883){
return (function com$wsscode$pathom$viz$index_explorer$iter__57828_$_iter__57884(s__57885){
return (new cljs.core.LazySeq(null,((function (s__57829__$1,direct_QMARK_,vec__57877,input,v,s__57829__$2,temp__5720__auto__,nested_reaches_QMARK_,G__57826,map__57824,map__57824__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__57814,_STAR_depth_STAR__orig_val__57815,_STAR_shared_STAR__orig_val__57816,_STAR_instrument_STAR__orig_val__57817,_STAR_parent_STAR__orig_val__57818,_STAR_reconciler_STAR__temp_val__57819,_STAR_depth_STAR__temp_val__57820,_STAR_shared_STAR__temp_val__57821,_STAR_instrument_STAR__temp_val__57822,_STAR_parent_STAR__temp_val__57823,this$,this__42008__auto__,x57813_58883){
return (function (){
var s__57885__$1 = s__57885;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__57885__$1);
if(temp__5720__auto____$1){
var s__57885__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__57885__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__57885__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__57887 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__57886 = (0);
while(true){
if((i__57886 < size__4522__auto__)){
var vec__57888 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__57886);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57888,(0),null);
var resolvers = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57888,(1),null);
var path_SINGLEQUOTE_ = cljs.core.next(path);
if(path_SINGLEQUOTE_){
cljs.core.chunk_append(b__57887,fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path], 0)),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"marginLeft","marginLeft",-551287007),"10px"], null)], null),(function (){var iter__4523__auto__ = ((function (i__57886,s__57885__$1,s__57829__$1,path_SINGLEQUOTE_,vec__57888,path,resolvers,c__4521__auto__,size__4522__auto__,b__57887,s__57885__$2,temp__5720__auto____$1,direct_QMARK_,vec__57877,input,v,s__57829__$2,temp__5720__auto__,nested_reaches_QMARK_,G__57826,map__57824,map__57824__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__57814,_STAR_depth_STAR__orig_val__57815,_STAR_shared_STAR__orig_val__57816,_STAR_instrument_STAR__orig_val__57817,_STAR_parent_STAR__orig_val__57818,_STAR_reconciler_STAR__temp_val__57819,_STAR_depth_STAR__temp_val__57820,_STAR_shared_STAR__temp_val__57821,_STAR_instrument_STAR__temp_val__57822,_STAR_parent_STAR__temp_val__57823,this$,this__42008__auto__,x57813_58883){
return (function com$wsscode$pathom$viz$index_explorer$iter__57828_$_iter__57884_$_iter__57891(s__57892){
return (new cljs.core.LazySeq(null,((function (i__57886,s__57885__$1,s__57829__$1,path_SINGLEQUOTE_,vec__57888,path,resolvers,c__4521__auto__,size__4522__auto__,b__57887,s__57885__$2,temp__5720__auto____$1,direct_QMARK_,vec__57877,input,v,s__57829__$2,temp__5720__auto__,nested_reaches_QMARK_,G__57826,map__57824,map__57824__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__57814,_STAR_depth_STAR__orig_val__57815,_STAR_shared_STAR__orig_val__57816,_STAR_instrument_STAR__orig_val__57817,_STAR_parent_STAR__orig_val__57818,_STAR_reconciler_STAR__temp_val__57819,_STAR_depth_STAR__temp_val__57820,_STAR_shared_STAR__temp_val__57821,_STAR_instrument_STAR__temp_val__57822,_STAR_parent_STAR__temp_val__57823,this$,this__42008__auto__,x57813_58883){
return (function (){
var s__57892__$1 = s__57892;
while(true){
var temp__5720__auto____$2 = cljs.core.seq(s__57892__$1);
if(temp__5720__auto____$2){
var s__57892__$2 = temp__5720__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__57892__$2)){
var c__4521__auto____$1 = cljs.core.chunk_first(s__57892__$2);
var size__4522__auto____$1 = cljs.core.count(c__4521__auto____$1);
var b__57894 = cljs.core.chunk_buffer(size__4522__auto____$1);
if((function (){var i__57893 = (0);
while(true){
if((i__57893 < size__4522__auto____$1)){
var vec__57895 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto____$1,i__57893);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57895,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57895,(1),null);
cljs.core.chunk_append(b__57894,(function (){var G__57898 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),k,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"marginLeft","marginLeft",-551287007),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((i * (10))),"px"].join('')], null)], null);
var G__57899 = computed;
return (com.wsscode.pathom.viz.index_explorer.attribute_link.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.attribute_link.cljs$core$IFn$_invoke$arity$2(G__57898,G__57899) : com.wsscode.pathom.viz.index_explorer.attribute_link.call(null,G__57898,G__57899));
})());

var G__58897 = (i__57893 + (1));
i__57893 = G__58897;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__57894),com$wsscode$pathom$viz$index_explorer$iter__57828_$_iter__57884_$_iter__57891(cljs.core.chunk_rest(s__57892__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__57894),null);
}
} else {
var vec__57900 = cljs.core.first(s__57892__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57900,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57900,(1),null);
return cljs.core.cons((function (){var G__57903 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),k,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"marginLeft","marginLeft",-551287007),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((i * (10))),"px"].join('')], null)], null);
var G__57904 = computed;
return (com.wsscode.pathom.viz.index_explorer.attribute_link.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.attribute_link.cljs$core$IFn$_invoke$arity$2(G__57903,G__57904) : com.wsscode.pathom.viz.index_explorer.attribute_link.call(null,G__57903,G__57904));
})(),com$wsscode$pathom$viz$index_explorer$iter__57828_$_iter__57884_$_iter__57891(cljs.core.rest(s__57892__$2)));
}
} else {
return null;
}
break;
}
});})(i__57886,s__57885__$1,s__57829__$1,path_SINGLEQUOTE_,vec__57888,path,resolvers,c__4521__auto__,size__4522__auto__,b__57887,s__57885__$2,temp__5720__auto____$1,direct_QMARK_,vec__57877,input,v,s__57829__$2,temp__5720__auto__,nested_reaches_QMARK_,G__57826,map__57824,map__57824__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__57814,_STAR_depth_STAR__orig_val__57815,_STAR_shared_STAR__orig_val__57816,_STAR_instrument_STAR__orig_val__57817,_STAR_parent_STAR__orig_val__57818,_STAR_reconciler_STAR__temp_val__57819,_STAR_depth_STAR__temp_val__57820,_STAR_shared_STAR__temp_val__57821,_STAR_instrument_STAR__temp_val__57822,_STAR_parent_STAR__temp_val__57823,this$,this__42008__auto__,x57813_58883))
,null,null));
});})(i__57886,s__57885__$1,s__57829__$1,path_SINGLEQUOTE_,vec__57888,path,resolvers,c__4521__auto__,size__4522__auto__,b__57887,s__57885__$2,temp__5720__auto____$1,direct_QMARK_,vec__57877,input,v,s__57829__$2,temp__5720__auto__,nested_reaches_QMARK_,G__57826,map__57824,map__57824__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__57814,_STAR_depth_STAR__orig_val__57815,_STAR_shared_STAR__orig_val__57816,_STAR_instrument_STAR__orig_val__57817,_STAR_parent_STAR__orig_val__57818,_STAR_reconciler_STAR__temp_val__57819,_STAR_depth_STAR__temp_val__57820,_STAR_shared_STAR__temp_val__57821,_STAR_instrument_STAR__temp_val__57822,_STAR_parent_STAR__temp_val__57823,this$,this__42008__auto__,x57813_58883))
;
return iter__4523__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,path_SINGLEQUOTE_,cljs.core.range.cljs$core$IFn$_invoke$arity$0()));
})()], 0)));

var G__58904 = (i__57886 + (1));
i__57886 = G__58904;
continue;
} else {
var G__58905 = (i__57886 + (1));
i__57886 = G__58905;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__57887),com$wsscode$pathom$viz$index_explorer$iter__57828_$_iter__57884(cljs.core.chunk_rest(s__57885__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__57887),null);
}
} else {
var vec__57905 = cljs.core.first(s__57885__$2);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57905,(0),null);
var resolvers = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57905,(1),null);
var path_SINGLEQUOTE_ = cljs.core.next(path);
if(path_SINGLEQUOTE_){
return cljs.core.cons(fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path], 0)),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"marginLeft","marginLeft",-551287007),"10px"], null)], null),(function (){var iter__4523__auto__ = ((function (s__57885__$1,s__57829__$1,path_SINGLEQUOTE_,vec__57905,path,resolvers,s__57885__$2,temp__5720__auto____$1,direct_QMARK_,vec__57877,input,v,s__57829__$2,temp__5720__auto__,nested_reaches_QMARK_,G__57826,map__57824,map__57824__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__57814,_STAR_depth_STAR__orig_val__57815,_STAR_shared_STAR__orig_val__57816,_STAR_instrument_STAR__orig_val__57817,_STAR_parent_STAR__orig_val__57818,_STAR_reconciler_STAR__temp_val__57819,_STAR_depth_STAR__temp_val__57820,_STAR_shared_STAR__temp_val__57821,_STAR_instrument_STAR__temp_val__57822,_STAR_parent_STAR__temp_val__57823,this$,this__42008__auto__,x57813_58883){
return (function com$wsscode$pathom$viz$index_explorer$iter__57828_$_iter__57884_$_iter__57908(s__57909){
return (new cljs.core.LazySeq(null,((function (s__57885__$1,s__57829__$1,path_SINGLEQUOTE_,vec__57905,path,resolvers,s__57885__$2,temp__5720__auto____$1,direct_QMARK_,vec__57877,input,v,s__57829__$2,temp__5720__auto__,nested_reaches_QMARK_,G__57826,map__57824,map__57824__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__57814,_STAR_depth_STAR__orig_val__57815,_STAR_shared_STAR__orig_val__57816,_STAR_instrument_STAR__orig_val__57817,_STAR_parent_STAR__orig_val__57818,_STAR_reconciler_STAR__temp_val__57819,_STAR_depth_STAR__temp_val__57820,_STAR_shared_STAR__temp_val__57821,_STAR_instrument_STAR__temp_val__57822,_STAR_parent_STAR__temp_val__57823,this$,this__42008__auto__,x57813_58883){
return (function (){
var s__57909__$1 = s__57909;
while(true){
var temp__5720__auto____$2 = cljs.core.seq(s__57909__$1);
if(temp__5720__auto____$2){
var s__57909__$2 = temp__5720__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__57909__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__57909__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__57911 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__57910 = (0);
while(true){
if((i__57910 < size__4522__auto__)){
var vec__57912 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__57910);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57912,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57912,(1),null);
cljs.core.chunk_append(b__57911,(function (){var G__57915 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),k,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"marginLeft","marginLeft",-551287007),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((i * (10))),"px"].join('')], null)], null);
var G__57916 = computed;
return (com.wsscode.pathom.viz.index_explorer.attribute_link.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.attribute_link.cljs$core$IFn$_invoke$arity$2(G__57915,G__57916) : com.wsscode.pathom.viz.index_explorer.attribute_link.call(null,G__57915,G__57916));
})());

var G__58929 = (i__57910 + (1));
i__57910 = G__58929;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__57911),com$wsscode$pathom$viz$index_explorer$iter__57828_$_iter__57884_$_iter__57908(cljs.core.chunk_rest(s__57909__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__57911),null);
}
} else {
var vec__57917 = cljs.core.first(s__57909__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57917,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57917,(1),null);
return cljs.core.cons((function (){var G__57920 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),k,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"marginLeft","marginLeft",-551287007),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((i * (10))),"px"].join('')], null)], null);
var G__57921 = computed;
return (com.wsscode.pathom.viz.index_explorer.attribute_link.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.attribute_link.cljs$core$IFn$_invoke$arity$2(G__57920,G__57921) : com.wsscode.pathom.viz.index_explorer.attribute_link.call(null,G__57920,G__57921));
})(),com$wsscode$pathom$viz$index_explorer$iter__57828_$_iter__57884_$_iter__57908(cljs.core.rest(s__57909__$2)));
}
} else {
return null;
}
break;
}
});})(s__57885__$1,s__57829__$1,path_SINGLEQUOTE_,vec__57905,path,resolvers,s__57885__$2,temp__5720__auto____$1,direct_QMARK_,vec__57877,input,v,s__57829__$2,temp__5720__auto__,nested_reaches_QMARK_,G__57826,map__57824,map__57824__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__57814,_STAR_depth_STAR__orig_val__57815,_STAR_shared_STAR__orig_val__57816,_STAR_instrument_STAR__orig_val__57817,_STAR_parent_STAR__orig_val__57818,_STAR_reconciler_STAR__temp_val__57819,_STAR_depth_STAR__temp_val__57820,_STAR_shared_STAR__temp_val__57821,_STAR_instrument_STAR__temp_val__57822,_STAR_parent_STAR__temp_val__57823,this$,this__42008__auto__,x57813_58883))
,null,null));
});})(s__57885__$1,s__57829__$1,path_SINGLEQUOTE_,vec__57905,path,resolvers,s__57885__$2,temp__5720__auto____$1,direct_QMARK_,vec__57877,input,v,s__57829__$2,temp__5720__auto__,nested_reaches_QMARK_,G__57826,map__57824,map__57824__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__57814,_STAR_depth_STAR__orig_val__57815,_STAR_shared_STAR__orig_val__57816,_STAR_instrument_STAR__orig_val__57817,_STAR_parent_STAR__orig_val__57818,_STAR_reconciler_STAR__temp_val__57819,_STAR_depth_STAR__temp_val__57820,_STAR_shared_STAR__temp_val__57821,_STAR_instrument_STAR__temp_val__57822,_STAR_parent_STAR__temp_val__57823,this$,this__42008__auto__,x57813_58883))
;
return iter__4523__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,path_SINGLEQUOTE_,cljs.core.range.cljs$core$IFn$_invoke$arity$0()));
})()], 0)),com$wsscode$pathom$viz$index_explorer$iter__57828_$_iter__57884(cljs.core.rest(s__57885__$2)));
} else {
var G__58930 = cljs.core.rest(s__57885__$2);
s__57885__$1 = G__58930;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__57829__$1,direct_QMARK_,vec__57877,input,v,s__57829__$2,temp__5720__auto__,nested_reaches_QMARK_,G__57826,map__57824,map__57824__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__57814,_STAR_depth_STAR__orig_val__57815,_STAR_shared_STAR__orig_val__57816,_STAR_instrument_STAR__orig_val__57817,_STAR_parent_STAR__orig_val__57818,_STAR_reconciler_STAR__temp_val__57819,_STAR_depth_STAR__temp_val__57820,_STAR_shared_STAR__temp_val__57821,_STAR_instrument_STAR__temp_val__57822,_STAR_parent_STAR__temp_val__57823,this$,this__42008__auto__,x57813_58883))
,null,null));
});})(s__57829__$1,direct_QMARK_,vec__57877,input,v,s__57829__$2,temp__5720__auto__,nested_reaches_QMARK_,G__57826,map__57824,map__57824__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__57814,_STAR_depth_STAR__orig_val__57815,_STAR_shared_STAR__orig_val__57816,_STAR_instrument_STAR__orig_val__57817,_STAR_parent_STAR__orig_val__57818,_STAR_reconciler_STAR__temp_val__57819,_STAR_depth_STAR__temp_val__57820,_STAR_shared_STAR__temp_val__57821,_STAR_instrument_STAR__temp_val__57822,_STAR_parent_STAR__temp_val__57823,this$,this__42008__auto__,x57813_58883))
;
return iter__4523__auto__(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(((function (s__57829__$1,iter__4523__auto__,direct_QMARK_,vec__57877,input,v,s__57829__$2,temp__5720__auto__,nested_reaches_QMARK_,G__57826,map__57824,map__57824__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__57814,_STAR_depth_STAR__orig_val__57815,_STAR_shared_STAR__orig_val__57816,_STAR_instrument_STAR__orig_val__57817,_STAR_parent_STAR__orig_val__57818,_STAR_reconciler_STAR__temp_val__57819,_STAR_depth_STAR__temp_val__57820,_STAR_shared_STAR__temp_val__57821,_STAR_instrument_STAR__temp_val__57822,_STAR_parent_STAR__temp_val__57823,this$,this__42008__auto__,x57813_58883){
return (function (p1__57807_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(p1__57807_SHARP_,(0),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,cljs.core.sort));
});})(s__57829__$1,iter__4523__auto__,direct_QMARK_,vec__57877,input,v,s__57829__$2,temp__5720__auto__,nested_reaches_QMARK_,G__57826,map__57824,map__57824__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__57814,_STAR_depth_STAR__orig_val__57815,_STAR_shared_STAR__orig_val__57816,_STAR_instrument_STAR__orig_val__57817,_STAR_parent_STAR__orig_val__57818,_STAR_reconciler_STAR__temp_val__57819,_STAR_depth_STAR__temp_val__57820,_STAR_shared_STAR__temp_val__57821,_STAR_instrument_STAR__temp_val__57822,_STAR_parent_STAR__temp_val__57823,this$,this__42008__auto__,x57813_58883))
,cljs.core.first),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (s__57829__$1,iter__4523__auto__,direct_QMARK_,vec__57877,input,v,s__57829__$2,temp__5720__auto__,nested_reaches_QMARK_,G__57826,map__57824,map__57824__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__57814,_STAR_depth_STAR__orig_val__57815,_STAR_shared_STAR__orig_val__57816,_STAR_instrument_STAR__orig_val__57817,_STAR_parent_STAR__orig_val__57818,_STAR_reconciler_STAR__temp_val__57819,_STAR_depth_STAR__temp_val__57820,_STAR_shared_STAR__temp_val__57821,_STAR_instrument_STAR__temp_val__57822,_STAR_parent_STAR__temp_val__57823,this$,this__42008__auto__,x57813_58883){
return (function (p1__57806_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(p1__57806_SHARP_,(0),((function (s__57829__$1,iter__4523__auto__,direct_QMARK_,vec__57877,input,v,s__57829__$2,temp__5720__auto__,nested_reaches_QMARK_,G__57826,map__57824,map__57824__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__57814,_STAR_depth_STAR__orig_val__57815,_STAR_shared_STAR__orig_val__57816,_STAR_instrument_STAR__orig_val__57817,_STAR_parent_STAR__orig_val__57818,_STAR_reconciler_STAR__temp_val__57819,_STAR_depth_STAR__temp_val__57820,_STAR_shared_STAR__temp_val__57821,_STAR_instrument_STAR__temp_val__57822,_STAR_parent_STAR__temp_val__57823,this$,this__42008__auto__,x57813_58883){
return (function (x){
if(cljs.core.set_QMARK_(x)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
} else {
return x;
}
});})(s__57829__$1,iter__4523__auto__,direct_QMARK_,vec__57877,input,v,s__57829__$2,temp__5720__auto__,nested_reaches_QMARK_,G__57826,map__57824,map__57824__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__57814,_STAR_depth_STAR__orig_val__57815,_STAR_shared_STAR__orig_val__57816,_STAR_instrument_STAR__orig_val__57817,_STAR_parent_STAR__orig_val__57818,_STAR_reconciler_STAR__temp_val__57819,_STAR_depth_STAR__temp_val__57820,_STAR_shared_STAR__temp_val__57821,_STAR_instrument_STAR__temp_val__57822,_STAR_parent_STAR__temp_val__57823,this$,this__42008__auto__,x57813_58883))
);
});})(s__57829__$1,iter__4523__auto__,direct_QMARK_,vec__57877,input,v,s__57829__$2,temp__5720__auto__,nested_reaches_QMARK_,G__57826,map__57824,map__57824__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__57814,_STAR_depth_STAR__orig_val__57815,_STAR_shared_STAR__orig_val__57816,_STAR_instrument_STAR__orig_val__57817,_STAR_parent_STAR__orig_val__57818,_STAR_reconciler_STAR__temp_val__57819,_STAR_depth_STAR__temp_val__57820,_STAR_shared_STAR__temp_val__57821,_STAR_instrument_STAR__temp_val__57822,_STAR_parent_STAR__temp_val__57823,this$,this__42008__auto__,x57813_58883))
,v)));
})():null)], 0)),com$wsscode$pathom$viz$index_explorer$iter__57828(cljs.core.rest(s__57829__$2)));
} else {
var G__58931 = cljs.core.rest(s__57829__$2);
s__57829__$1 = G__58931;
continue;
}
}
} else {
return null;
}
break;
}
});})(nested_reaches_QMARK_,G__57826,map__57824,map__57824__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__57814,_STAR_depth_STAR__orig_val__57815,_STAR_shared_STAR__orig_val__57816,_STAR_instrument_STAR__orig_val__57817,_STAR_parent_STAR__orig_val__57818,_STAR_reconciler_STAR__temp_val__57819,_STAR_depth_STAR__temp_val__57820,_STAR_shared_STAR__temp_val__57821,_STAR_instrument_STAR__temp_val__57822,_STAR_parent_STAR__temp_val__57823,this$,this__42008__auto__,x57813_58883))
,null,null));
});})(nested_reaches_QMARK_,G__57826,map__57824,map__57824__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__57814,_STAR_depth_STAR__orig_val__57815,_STAR_shared_STAR__orig_val__57816,_STAR_instrument_STAR__orig_val__57817,_STAR_parent_STAR__orig_val__57818,_STAR_reconciler_STAR__temp_val__57819,_STAR_depth_STAR__temp_val__57820,_STAR_shared_STAR__temp_val__57821,_STAR_instrument_STAR__temp_val__57822,_STAR_parent_STAR__temp_val__57823,this$,this__42008__auto__,x57813_58883))
;
return iter__4523__auto__(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.pr_str,com.wsscode.pathom.viz.index_explorer.attr_path_key_root,cljs.core.first),cljs.core.group_by(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(com.wsscode.pathom.viz.index_explorer.attr_path_key_root,cljs.core.first),attr_reach_via)));
})();
return (com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2(G__57826,G__57827) : com.wsscode.pathom.viz.ui.kit.panel.call(null,G__57826,G__57827));
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__57818;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__57817;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__57816;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__57815;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__57814;
}});})(x57813_58883))
;


com.wsscode.pathom.viz.index_explorer.AttributeInfoReachVia.prototype.constructor = com.wsscode.pathom.viz.index_explorer.AttributeInfoReachVia;

com.wsscode.pathom.viz.index_explorer.AttributeInfoReachVia.prototype.constructor.displayName = "com.wsscode.pathom.viz.index-explorer/AttributeInfoReachVia";

com.wsscode.pathom.viz.index_explorer.AttributeInfoReachVia.prototype.fulcro$isComponent = true;

var x57922_58932 = com.wsscode.pathom.viz.index_explorer.AttributeInfoReachVia;
x57922_58932.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x57922_58932.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x57922_58932){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x57922_58932))
;

x57922_58932.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x57922_58932.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x57922_58932){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via","com.wsscode.pathom.connect/attr-reach-via",-483841559)], null);
});})(x57922_58932))
;


var x57923_58933 = com.wsscode.pathom.viz.index_explorer.AttributeInfoReachVia.prototype;
x57923_58933.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x57923_58933.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x57923_58933){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x57923_58933))
;

x57923_58933.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x57923_58933.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x57923_58933){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via","com.wsscode.pathom.connect/attr-reach-via",-483841559)], null);
});})(x57923_58933))
;


com.wsscode.pathom.viz.index_explorer.AttributeInfoReachVia.cljs$lang$type = true;

com.wsscode.pathom.viz.index_explorer.AttributeInfoReachVia.cljs$lang$ctorStr = "com.wsscode.pathom.viz.index-explorer/AttributeInfoReachVia";

com.wsscode.pathom.viz.index_explorer.AttributeInfoReachVia.cljs$lang$ctorPrWriter = (function (this__43093__auto__,writer__43094__auto__,opt__43095__auto__){
return cljs.core._write(writer__43094__auto__,"com.wsscode.pathom.viz.index-explorer/AttributeInfoReachVia");
});
com.wsscode.pathom.viz.index_explorer.attribute_info_reach_via = fulcro.client.primitives.computed_factory.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.AttributeInfoReachVia);
if((typeof com !== 'undefined') && (typeof com.wsscode !== 'undefined') && (typeof com.wsscode.pathom !== 'undefined') && (typeof com.wsscode.pathom.viz !== 'undefined') && (typeof com.wsscode.pathom.viz.index_explorer !== 'undefined') && (typeof com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationParamIn !== 'undefined')){
} else {
/**
 * @constructor
 * @nocollapse
 */
com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationParamIn = (function com$wsscode$pathom$viz$index_explorer$AttributeInfoMutationParamIn(){
var this__43090__auto__ = this;
React.Component.apply(this__43090__auto__,arguments);

if((!((this__43090__auto__.initLocalState == null)))){
this__43090__auto__.state = this__43090__auto__.initLocalState();
} else {
this__43090__auto__.state = ({});
}

return this__43090__auto__;
});

var G__57926_58934 = com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationParamIn.prototype;
var G__57927_58935 = React.Component.prototype;
var G__57928_58936 = fulcro.client.primitives.default_component_prototype;
goog.object.extend(G__57926_58934,G__57927_58935,G__57928_58936);
}

fulcro.client.primitives._register_component_BANG_(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","AttributeInfoMutationParamIn","com.wsscode.pathom.viz.index-explorer/AttributeInfoMutationParamIn",768684351),com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationParamIn);

var x57929_58937 = com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationParamIn.prototype;
x57929_58937.render = ((function (x57929_58937){
return (function (){
var this__42008__auto__ = this;
var this$ = this__42008__auto__;
var _STAR_reconciler_STAR__orig_val__57930 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__57931 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__57932 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__57933 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__57934 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__57935 = fulcro.client.primitives.get_reconciler(this__42008__auto__);
var _STAR_depth_STAR__temp_val__57936 = (fulcro.client.primitives.depth(this__42008__auto__) + (1));
var _STAR_shared_STAR__temp_val__57937 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__42008__auto__);
var _STAR_instrument_STAR__temp_val__57938 = fulcro.client.primitives.instrument(this__42008__auto__);
var _STAR_parent_STAR__temp_val__57939 = this__42008__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__57935;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__57936;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__57937;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__57938;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__57939;

try{var map__57940 = fulcro.client.primitives.props(this$);
var map__57940__$1 = (((((!((map__57940 == null))))?(((((map__57940.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57940.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57940):map__57940);
var attr_mutation_param_in = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57940__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attr-mutation-param-in","com.wsscode.pathom.connect/attr-mutation-param-in",-1474382671));
var computed = fulcro.client.primitives.get_computed.cljs$core$IFn$_invoke$arity$1(this$);
var G__57942 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","panel-title","com.wsscode.pathom.viz.ui.kit/panel-title",1529445284),"Mutation Param In",new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","panel-tag","com.wsscode.pathom.viz.ui.kit/panel-tag",144392508),cljs.core.count(attr_mutation_param_in)], null);
var G__57943 = (function (){var iter__4523__auto__ = ((function (G__57942,map__57940,map__57940__$1,attr_mutation_param_in,computed,_STAR_reconciler_STAR__orig_val__57930,_STAR_depth_STAR__orig_val__57931,_STAR_shared_STAR__orig_val__57932,_STAR_instrument_STAR__orig_val__57933,_STAR_parent_STAR__orig_val__57934,_STAR_reconciler_STAR__temp_val__57935,_STAR_depth_STAR__temp_val__57936,_STAR_shared_STAR__temp_val__57937,_STAR_instrument_STAR__temp_val__57938,_STAR_parent_STAR__temp_val__57939,this$,this__42008__auto__,x57929_58937){
return (function com$wsscode$pathom$viz$index_explorer$iter__57944(s__57945){
return (new cljs.core.LazySeq(null,((function (G__57942,map__57940,map__57940__$1,attr_mutation_param_in,computed,_STAR_reconciler_STAR__orig_val__57930,_STAR_depth_STAR__orig_val__57931,_STAR_shared_STAR__orig_val__57932,_STAR_instrument_STAR__orig_val__57933,_STAR_parent_STAR__orig_val__57934,_STAR_reconciler_STAR__temp_val__57935,_STAR_depth_STAR__temp_val__57936,_STAR_shared_STAR__temp_val__57937,_STAR_instrument_STAR__temp_val__57938,_STAR_parent_STAR__temp_val__57939,this$,this__42008__auto__,x57929_58937){
return (function (){
var s__57945__$1 = s__57945;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__57945__$1);
if(temp__5720__auto__){
var s__57945__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__57945__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__57945__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__57947 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__57946 = (0);
while(true){
if((i__57946 < size__4522__auto__)){
var sym = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__57946);
cljs.core.chunk_append(b__57947,(function (){var G__57948 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),sym], null);
var G__57949 = computed;
return (com.wsscode.pathom.viz.index_explorer.mutation_link.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.mutation_link.cljs$core$IFn$_invoke$arity$2(G__57948,G__57949) : com.wsscode.pathom.viz.index_explorer.mutation_link.call(null,G__57948,G__57949));
})());

var G__58938 = (i__57946 + (1));
i__57946 = G__58938;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__57947),com$wsscode$pathom$viz$index_explorer$iter__57944(cljs.core.chunk_rest(s__57945__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__57947),null);
}
} else {
var sym = cljs.core.first(s__57945__$2);
return cljs.core.cons((function (){var G__57950 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),sym], null);
var G__57951 = computed;
return (com.wsscode.pathom.viz.index_explorer.mutation_link.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.mutation_link.cljs$core$IFn$_invoke$arity$2(G__57950,G__57951) : com.wsscode.pathom.viz.index_explorer.mutation_link.call(null,G__57950,G__57951));
})(),com$wsscode$pathom$viz$index_explorer$iter__57944(cljs.core.rest(s__57945__$2)));
}
} else {
return null;
}
break;
}
});})(G__57942,map__57940,map__57940__$1,attr_mutation_param_in,computed,_STAR_reconciler_STAR__orig_val__57930,_STAR_depth_STAR__orig_val__57931,_STAR_shared_STAR__orig_val__57932,_STAR_instrument_STAR__orig_val__57933,_STAR_parent_STAR__orig_val__57934,_STAR_reconciler_STAR__temp_val__57935,_STAR_depth_STAR__temp_val__57936,_STAR_shared_STAR__temp_val__57937,_STAR_instrument_STAR__temp_val__57938,_STAR_parent_STAR__temp_val__57939,this$,this__42008__auto__,x57929_58937))
,null,null));
});})(G__57942,map__57940,map__57940__$1,attr_mutation_param_in,computed,_STAR_reconciler_STAR__orig_val__57930,_STAR_depth_STAR__orig_val__57931,_STAR_shared_STAR__orig_val__57932,_STAR_instrument_STAR__orig_val__57933,_STAR_parent_STAR__orig_val__57934,_STAR_reconciler_STAR__temp_val__57935,_STAR_depth_STAR__temp_val__57936,_STAR_shared_STAR__temp_val__57937,_STAR_instrument_STAR__temp_val__57938,_STAR_parent_STAR__temp_val__57939,this$,this__42008__auto__,x57929_58937))
;
return iter__4523__auto__(cljs.core.sort.cljs$core$IFn$_invoke$arity$1(attr_mutation_param_in));
})();
return (com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2(G__57942,G__57943) : com.wsscode.pathom.viz.ui.kit.panel.call(null,G__57942,G__57943));
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__57934;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__57933;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__57932;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__57931;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__57930;
}});})(x57929_58937))
;


com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationParamIn.prototype.constructor = com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationParamIn;

com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationParamIn.prototype.constructor.displayName = "com.wsscode.pathom.viz.index-explorer/AttributeInfoMutationParamIn";

com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationParamIn.prototype.fulcro$isComponent = true;

var x57952_58939 = com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationParamIn;
x57952_58939.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x57952_58939.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x57952_58939){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x57952_58939))
;

x57952_58939.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x57952_58939.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x57952_58939){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-mutation-param-in","com.wsscode.pathom.connect/attr-mutation-param-in",-1474382671)], null);
});})(x57952_58939))
;


var x57953_58940 = com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationParamIn.prototype;
x57953_58940.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x57953_58940.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x57953_58940){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x57953_58940))
;

x57953_58940.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x57953_58940.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x57953_58940){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-mutation-param-in","com.wsscode.pathom.connect/attr-mutation-param-in",-1474382671)], null);
});})(x57953_58940))
;


com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationParamIn.cljs$lang$type = true;

com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationParamIn.cljs$lang$ctorStr = "com.wsscode.pathom.viz.index-explorer/AttributeInfoMutationParamIn";

com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationParamIn.cljs$lang$ctorPrWriter = (function (this__43093__auto__,writer__43094__auto__,opt__43095__auto__){
return cljs.core._write(writer__43094__auto__,"com.wsscode.pathom.viz.index-explorer/AttributeInfoMutationParamIn");
});
com.wsscode.pathom.viz.index_explorer.attribute_info_mutation_param_in = fulcro.client.primitives.computed_factory.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationParamIn);
if((typeof com !== 'undefined') && (typeof com.wsscode !== 'undefined') && (typeof com.wsscode.pathom !== 'undefined') && (typeof com.wsscode.pathom.viz !== 'undefined') && (typeof com.wsscode.pathom.viz.index_explorer !== 'undefined') && (typeof com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationOutputIn !== 'undefined')){
} else {
/**
 * @constructor
 * @nocollapse
 */
com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationOutputIn = (function com$wsscode$pathom$viz$index_explorer$AttributeInfoMutationOutputIn(){
var this__43090__auto__ = this;
React.Component.apply(this__43090__auto__,arguments);

if((!((this__43090__auto__.initLocalState == null)))){
this__43090__auto__.state = this__43090__auto__.initLocalState();
} else {
this__43090__auto__.state = ({});
}

return this__43090__auto__;
});

var G__57956_58941 = com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationOutputIn.prototype;
var G__57957_58942 = React.Component.prototype;
var G__57958_58943 = fulcro.client.primitives.default_component_prototype;
goog.object.extend(G__57956_58941,G__57957_58942,G__57958_58943);
}

fulcro.client.primitives._register_component_BANG_(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","AttributeInfoMutationOutputIn","com.wsscode.pathom.viz.index-explorer/AttributeInfoMutationOutputIn",304871094),com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationOutputIn);

var x57959_58944 = com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationOutputIn.prototype;
x57959_58944.render = ((function (x57959_58944){
return (function (){
var this__42008__auto__ = this;
var this$ = this__42008__auto__;
var _STAR_reconciler_STAR__orig_val__57960 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__57961 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__57962 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__57963 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__57964 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__57965 = fulcro.client.primitives.get_reconciler(this__42008__auto__);
var _STAR_depth_STAR__temp_val__57966 = (fulcro.client.primitives.depth(this__42008__auto__) + (1));
var _STAR_shared_STAR__temp_val__57967 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__42008__auto__);
var _STAR_instrument_STAR__temp_val__57968 = fulcro.client.primitives.instrument(this__42008__auto__);
var _STAR_parent_STAR__temp_val__57969 = this__42008__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__57965;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__57966;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__57967;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__57968;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__57969;

try{var map__57970 = fulcro.client.primitives.props(this$);
var map__57970__$1 = (((((!((map__57970 == null))))?(((((map__57970.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57970.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57970):map__57970);
var attr_mutation_output_in = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57970__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attr-mutation-output-in","com.wsscode.pathom.connect/attr-mutation-output-in",1122448739));
var computed = fulcro.client.primitives.get_computed.cljs$core$IFn$_invoke$arity$1(this$);
var G__57972 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","panel-title","com.wsscode.pathom.viz.ui.kit/panel-title",1529445284),"Mutation Output In",new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","panel-tag","com.wsscode.pathom.viz.ui.kit/panel-tag",144392508),cljs.core.count(attr_mutation_output_in)], null);
var G__57973 = (function (){var iter__4523__auto__ = ((function (G__57972,map__57970,map__57970__$1,attr_mutation_output_in,computed,_STAR_reconciler_STAR__orig_val__57960,_STAR_depth_STAR__orig_val__57961,_STAR_shared_STAR__orig_val__57962,_STAR_instrument_STAR__orig_val__57963,_STAR_parent_STAR__orig_val__57964,_STAR_reconciler_STAR__temp_val__57965,_STAR_depth_STAR__temp_val__57966,_STAR_shared_STAR__temp_val__57967,_STAR_instrument_STAR__temp_val__57968,_STAR_parent_STAR__temp_val__57969,this$,this__42008__auto__,x57959_58944){
return (function com$wsscode$pathom$viz$index_explorer$iter__57974(s__57975){
return (new cljs.core.LazySeq(null,((function (G__57972,map__57970,map__57970__$1,attr_mutation_output_in,computed,_STAR_reconciler_STAR__orig_val__57960,_STAR_depth_STAR__orig_val__57961,_STAR_shared_STAR__orig_val__57962,_STAR_instrument_STAR__orig_val__57963,_STAR_parent_STAR__orig_val__57964,_STAR_reconciler_STAR__temp_val__57965,_STAR_depth_STAR__temp_val__57966,_STAR_shared_STAR__temp_val__57967,_STAR_instrument_STAR__temp_val__57968,_STAR_parent_STAR__temp_val__57969,this$,this__42008__auto__,x57959_58944){
return (function (){
var s__57975__$1 = s__57975;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__57975__$1);
if(temp__5720__auto__){
var s__57975__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__57975__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__57975__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__57977 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__57976 = (0);
while(true){
if((i__57976 < size__4522__auto__)){
var sym = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__57976);
cljs.core.chunk_append(b__57977,(function (){var G__57978 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),sym], null);
var G__57979 = computed;
return (com.wsscode.pathom.viz.index_explorer.mutation_link.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.mutation_link.cljs$core$IFn$_invoke$arity$2(G__57978,G__57979) : com.wsscode.pathom.viz.index_explorer.mutation_link.call(null,G__57978,G__57979));
})());

var G__58945 = (i__57976 + (1));
i__57976 = G__58945;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__57977),com$wsscode$pathom$viz$index_explorer$iter__57974(cljs.core.chunk_rest(s__57975__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__57977),null);
}
} else {
var sym = cljs.core.first(s__57975__$2);
return cljs.core.cons((function (){var G__57980 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),sym], null);
var G__57981 = computed;
return (com.wsscode.pathom.viz.index_explorer.mutation_link.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.mutation_link.cljs$core$IFn$_invoke$arity$2(G__57980,G__57981) : com.wsscode.pathom.viz.index_explorer.mutation_link.call(null,G__57980,G__57981));
})(),com$wsscode$pathom$viz$index_explorer$iter__57974(cljs.core.rest(s__57975__$2)));
}
} else {
return null;
}
break;
}
});})(G__57972,map__57970,map__57970__$1,attr_mutation_output_in,computed,_STAR_reconciler_STAR__orig_val__57960,_STAR_depth_STAR__orig_val__57961,_STAR_shared_STAR__orig_val__57962,_STAR_instrument_STAR__orig_val__57963,_STAR_parent_STAR__orig_val__57964,_STAR_reconciler_STAR__temp_val__57965,_STAR_depth_STAR__temp_val__57966,_STAR_shared_STAR__temp_val__57967,_STAR_instrument_STAR__temp_val__57968,_STAR_parent_STAR__temp_val__57969,this$,this__42008__auto__,x57959_58944))
,null,null));
});})(G__57972,map__57970,map__57970__$1,attr_mutation_output_in,computed,_STAR_reconciler_STAR__orig_val__57960,_STAR_depth_STAR__orig_val__57961,_STAR_shared_STAR__orig_val__57962,_STAR_instrument_STAR__orig_val__57963,_STAR_parent_STAR__orig_val__57964,_STAR_reconciler_STAR__temp_val__57965,_STAR_depth_STAR__temp_val__57966,_STAR_shared_STAR__temp_val__57967,_STAR_instrument_STAR__temp_val__57968,_STAR_parent_STAR__temp_val__57969,this$,this__42008__auto__,x57959_58944))
;
return iter__4523__auto__(cljs.core.sort.cljs$core$IFn$_invoke$arity$1(attr_mutation_output_in));
})();
return (com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2(G__57972,G__57973) : com.wsscode.pathom.viz.ui.kit.panel.call(null,G__57972,G__57973));
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__57964;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__57963;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__57962;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__57961;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__57960;
}});})(x57959_58944))
;


com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationOutputIn.prototype.constructor = com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationOutputIn;

com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationOutputIn.prototype.constructor.displayName = "com.wsscode.pathom.viz.index-explorer/AttributeInfoMutationOutputIn";

com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationOutputIn.prototype.fulcro$isComponent = true;

var x57982_58946 = com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationOutputIn;
x57982_58946.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x57982_58946.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x57982_58946){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x57982_58946))
;

x57982_58946.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x57982_58946.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x57982_58946){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-mutation-output-in","com.wsscode.pathom.connect/attr-mutation-output-in",1122448739)], null);
});})(x57982_58946))
;


var x57983_58947 = com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationOutputIn.prototype;
x57983_58947.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x57983_58947.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x57983_58947){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x57983_58947))
;

x57983_58947.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x57983_58947.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x57983_58947){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-mutation-output-in","com.wsscode.pathom.connect/attr-mutation-output-in",1122448739)], null);
});})(x57983_58947))
;


com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationOutputIn.cljs$lang$type = true;

com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationOutputIn.cljs$lang$ctorStr = "com.wsscode.pathom.viz.index-explorer/AttributeInfoMutationOutputIn";

com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationOutputIn.cljs$lang$ctorPrWriter = (function (this__43093__auto__,writer__43094__auto__,opt__43095__auto__){
return cljs.core._write(writer__43094__auto__,"com.wsscode.pathom.viz.index-explorer/AttributeInfoMutationOutputIn");
});
com.wsscode.pathom.viz.index_explorer.attribute_info_mutation_output_in = fulcro.client.primitives.computed_factory.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationOutputIn);
if((typeof com !== 'undefined') && (typeof com.wsscode !== 'undefined') && (typeof com.wsscode.pathom !== 'undefined') && (typeof com.wsscode.pathom.viz !== 'undefined') && (typeof com.wsscode.pathom.viz.index_explorer !== 'undefined') && (typeof com.wsscode.pathom.viz.index_explorer.ExamplesPanel !== 'undefined')){
} else {
/**
 * @constructor
 * @nocollapse
 */
com.wsscode.pathom.viz.index_explorer.ExamplesPanel = (function com$wsscode$pathom$viz$index_explorer$ExamplesPanel(){
var this__43090__auto__ = this;
React.Component.apply(this__43090__auto__,arguments);

if((!((this__43090__auto__.initLocalState == null)))){
this__43090__auto__.state = this__43090__auto__.initLocalState();
} else {
this__43090__auto__.state = ({});
}

return this__43090__auto__;
});

var G__57986_58948 = com.wsscode.pathom.viz.index_explorer.ExamplesPanel.prototype;
var G__57987_58949 = React.Component.prototype;
var G__57988_58950 = fulcro.client.primitives.default_component_prototype;
goog.object.extend(G__57986_58948,G__57987_58949,G__57988_58950);
}

fulcro.client.primitives._register_component_BANG_(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","ExamplesPanel","com.wsscode.pathom.viz.index-explorer/ExamplesPanel",846657103),com.wsscode.pathom.viz.index_explorer.ExamplesPanel);

var x57989_58951 = com.wsscode.pathom.viz.index_explorer.ExamplesPanel.prototype;
x57989_58951.render = ((function (x57989_58951){
return (function (){
var this__42008__auto__ = this;
var this$ = this__42008__auto__;
var _STAR_reconciler_STAR__orig_val__57990 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__57991 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__57992 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__57993 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__57994 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__57995 = fulcro.client.primitives.get_reconciler(this__42008__auto__);
var _STAR_depth_STAR__temp_val__57996 = (fulcro.client.primitives.depth(this__42008__auto__) + (1));
var _STAR_shared_STAR__temp_val__57997 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__42008__auto__);
var _STAR_instrument_STAR__temp_val__57998 = fulcro.client.primitives.instrument(this__42008__auto__);
var _STAR_parent_STAR__temp_val__57999 = this__42008__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__57995;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__57996;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__57997;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__57998;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__57999;

try{var map__58000 = fulcro.client.primitives.props(this$);
var map__58000__$1 = (((((!((map__58000 == null))))?(((((map__58000.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58000.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58000):map__58000);
var attribute = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58000__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075));
var G__58002 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","panel-title","com.wsscode.pathom.viz.ui.kit/panel-title",1529445284),(function (){var G__58004 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"classes","classes",2037804510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".center",".center",-1815728518)], null)], null);
var G__58005 = fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Examples"], 0));
var G__58006 = fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.wsscode.pathom.viz.ui.kit.gc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".flex",".flex",-73425686)], 0))], 0));
var G__58007 = (function (){var G__58008 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (G__58004,G__58005,G__58006,map__58000,map__58000__$1,attribute,_STAR_reconciler_STAR__orig_val__57990,_STAR_depth_STAR__orig_val__57991,_STAR_shared_STAR__orig_val__57992,_STAR_instrument_STAR__orig_val__57993,_STAR_parent_STAR__orig_val__57994,_STAR_reconciler_STAR__temp_val__57995,_STAR_depth_STAR__temp_val__57996,_STAR_shared_STAR__temp_val__57997,_STAR_instrument_STAR__temp_val__57998,_STAR_parent_STAR__temp_val__57999,this$,this__42008__auto__,x57989_58951){
return (function (){
return fulcro.client.primitives.set_state_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"seed","seed",68613327),cljs.core.rand.cljs$core$IFn$_invoke$arity$0()], null));
});})(G__58004,G__58005,G__58006,map__58000,map__58000__$1,attribute,_STAR_reconciler_STAR__orig_val__57990,_STAR_depth_STAR__orig_val__57991,_STAR_shared_STAR__orig_val__57992,_STAR_instrument_STAR__orig_val__57993,_STAR_parent_STAR__orig_val__57994,_STAR_reconciler_STAR__temp_val__57995,_STAR_depth_STAR__temp_val__57996,_STAR_shared_STAR__temp_val__57997,_STAR_instrument_STAR__temp_val__57998,_STAR_parent_STAR__temp_val__57999,this$,this__42008__auto__,x57989_58951))
], null);
var G__58009 = fulcro.client.localized_dom.i.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"classes","classes",2037804510),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["fa","fa-sync-alt"], null)], null)], 0));
return (com.wsscode.pathom.viz.ui.kit.button.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.button.cljs$core$IFn$_invoke$arity$2(G__58008,G__58009) : com.wsscode.pathom.viz.ui.kit.button.call(null,G__58008,G__58009));
})();
return (com.wsscode.pathom.viz.ui.kit.row.cljs$core$IFn$_invoke$arity$4 ? com.wsscode.pathom.viz.ui.kit.row.cljs$core$IFn$_invoke$arity$4(G__58004,G__58005,G__58006,G__58007) : com.wsscode.pathom.viz.ui.kit.row.call(null,G__58004,G__58005,G__58006,G__58007));
})()], null);
var G__58003 = fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".examples",".examples",-775726891),(function (){try{var samples = cljs.core.vec(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(clojure.test.check.generators.sample.cljs$core$IFn$_invoke$arity$1(cljs.spec.alpha.gen.cljs$core$IFn$_invoke$arity$1(attribute))));
var samples__$1 = (function (){try{return cljs.core.sort.cljs$core$IFn$_invoke$arity$1(samples);
}catch (e58011){var _ = e58011;
return samples;
}})();
var iter__4523__auto__ = ((function (samples,samples__$1,G__58002,map__58000,map__58000__$1,attribute,_STAR_reconciler_STAR__orig_val__57990,_STAR_depth_STAR__orig_val__57991,_STAR_shared_STAR__orig_val__57992,_STAR_instrument_STAR__orig_val__57993,_STAR_parent_STAR__orig_val__57994,_STAR_reconciler_STAR__temp_val__57995,_STAR_depth_STAR__temp_val__57996,_STAR_shared_STAR__temp_val__57997,_STAR_instrument_STAR__temp_val__57998,_STAR_parent_STAR__temp_val__57999,this$,this__42008__auto__,x57989_58951){
return (function com$wsscode$pathom$viz$index_explorer$iter__58012(s__58013){
return (new cljs.core.LazySeq(null,((function (samples,samples__$1,G__58002,map__58000,map__58000__$1,attribute,_STAR_reconciler_STAR__orig_val__57990,_STAR_depth_STAR__orig_val__57991,_STAR_shared_STAR__orig_val__57992,_STAR_instrument_STAR__orig_val__57993,_STAR_parent_STAR__orig_val__57994,_STAR_reconciler_STAR__temp_val__57995,_STAR_depth_STAR__temp_val__57996,_STAR_shared_STAR__temp_val__57997,_STAR_instrument_STAR__temp_val__57998,_STAR_parent_STAR__temp_val__57999,this$,this__42008__auto__,x57989_58951){
return (function (){
var s__58013__$1 = s__58013;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__58013__$1);
if(temp__5720__auto__){
var s__58013__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__58013__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__58013__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__58015 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__58014 = (0);
while(true){
if((i__58014 < size__4522__auto__)){
var vec__58016 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__58014);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58016,(0),null);
var example = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58016,(1),null);
cljs.core.chunk_append(b__58015,fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["example-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join('')], null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([example], 0))], 0)));

var G__58952 = (i__58014 + (1));
i__58014 = G__58952;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58015),com$wsscode$pathom$viz$index_explorer$iter__58012(cljs.core.chunk_rest(s__58013__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58015),null);
}
} else {
var vec__58019 = cljs.core.first(s__58013__$2);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58019,(0),null);
var example = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58019,(1),null);
return cljs.core.cons(fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["example-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join('')], null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([example], 0))], 0)),com$wsscode$pathom$viz$index_explorer$iter__58012(cljs.core.rest(s__58013__$2)));
}
} else {
return null;
}
break;
}
});})(samples,samples__$1,G__58002,map__58000,map__58000__$1,attribute,_STAR_reconciler_STAR__orig_val__57990,_STAR_depth_STAR__orig_val__57991,_STAR_shared_STAR__orig_val__57992,_STAR_instrument_STAR__orig_val__57993,_STAR_parent_STAR__orig_val__57994,_STAR_reconciler_STAR__temp_val__57995,_STAR_depth_STAR__temp_val__57996,_STAR_shared_STAR__temp_val__57997,_STAR_instrument_STAR__temp_val__57998,_STAR_parent_STAR__temp_val__57999,this$,this__42008__auto__,x57989_58951))
,null,null));
});})(samples,samples__$1,G__58002,map__58000,map__58000__$1,attribute,_STAR_reconciler_STAR__orig_val__57990,_STAR_depth_STAR__orig_val__57991,_STAR_shared_STAR__orig_val__57992,_STAR_instrument_STAR__orig_val__57993,_STAR_parent_STAR__orig_val__57994,_STAR_reconciler_STAR__temp_val__57995,_STAR_depth_STAR__temp_val__57996,_STAR_shared_STAR__temp_val__57997,_STAR_instrument_STAR__temp_val__57998,_STAR_parent_STAR__temp_val__57999,this$,this__42008__auto__,x57989_58951))
;
return iter__4523__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.range.cljs$core$IFn$_invoke$arity$0(),samples__$1));
}catch (e58010){var ex = e58010;
return fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error generating samples:",fulcro.client.localized_dom.pre.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".error",".error",115475668),cljs.core.ex_message(ex)], 0))], 0));
}})()], 0));
return (com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2(G__58002,G__58003) : com.wsscode.pathom.viz.ui.kit.panel.call(null,G__58002,G__58003));
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__57994;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__57993;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__57992;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__57991;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__57990;
}});})(x57989_58951))
;


com.wsscode.pathom.viz.index_explorer.ExamplesPanel.prototype.constructor = com.wsscode.pathom.viz.index_explorer.ExamplesPanel;

com.wsscode.pathom.viz.index_explorer.ExamplesPanel.prototype.constructor.displayName = "com.wsscode.pathom.viz.index-explorer/ExamplesPanel";

com.wsscode.pathom.viz.index_explorer.ExamplesPanel.prototype.fulcro$isComponent = true;

var x58022_58953 = com.wsscode.pathom.viz.index_explorer.ExamplesPanel;
x58022_58953.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x58022_58953.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x58022_58953){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".examples",".examples",-775726891),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-family","font-family",-667419874),com.wsscode.pathom.viz.ui.kit.font_code], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".error",".error",115475668),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#f44336"], null)], null)], null);
});})(x58022_58953))
;

x58022_58953.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x58022_58953){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x58022_58953))
;


var x58023_58954 = com.wsscode.pathom.viz.index_explorer.ExamplesPanel.prototype;
x58023_58954.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x58023_58954.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x58023_58954){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".examples",".examples",-775726891),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-family","font-family",-667419874),com.wsscode.pathom.viz.ui.kit.font_code], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".error",".error",115475668),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#f44336"], null)], null)], null);
});})(x58023_58954))
;

x58023_58954.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x58023_58954){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x58023_58954))
;


com.wsscode.pathom.viz.index_explorer.ExamplesPanel.cljs$lang$type = true;

com.wsscode.pathom.viz.index_explorer.ExamplesPanel.cljs$lang$ctorStr = "com.wsscode.pathom.viz.index-explorer/ExamplesPanel";

com.wsscode.pathom.viz.index_explorer.ExamplesPanel.cljs$lang$ctorPrWriter = (function (this__43093__auto__,writer__43094__auto__,opt__43095__auto__){
return cljs.core._write(writer__43094__auto__,"com.wsscode.pathom.viz.index-explorer/ExamplesPanel");
});
com.wsscode.pathom.viz.index_explorer.examples_panel = fulcro.client.primitives.computed_factory.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.ExamplesPanel);
if((typeof com !== 'undefined') && (typeof com.wsscode !== 'undefined') && (typeof com.wsscode.pathom !== 'undefined') && (typeof com.wsscode.pathom.viz !== 'undefined') && (typeof com.wsscode.pathom.viz.index_explorer !== 'undefined') && (typeof com.wsscode.pathom.viz.index_explorer.AttributeGraphPanel !== 'undefined')){
} else {
/**
 * @constructor
 * @nocollapse
 */
com.wsscode.pathom.viz.index_explorer.AttributeGraphPanel = (function com$wsscode$pathom$viz$index_explorer$AttributeGraphPanel(){
var this__43090__auto__ = this;
React.Component.apply(this__43090__auto__,arguments);

if((!((this__43090__auto__.initLocalState == null)))){
this__43090__auto__.state = this__43090__auto__.initLocalState();
} else {
this__43090__auto__.state = ({});
}

return this__43090__auto__;
});

var G__58028_58955 = com.wsscode.pathom.viz.index_explorer.AttributeGraphPanel.prototype;
var G__58029_58956 = React.Component.prototype;
var G__58030_58957 = fulcro.client.primitives.default_component_prototype;
goog.object.extend(G__58028_58955,G__58029_58956,G__58030_58957);
}

fulcro.client.primitives._register_component_BANG_(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","AttributeGraphPanel","com.wsscode.pathom.viz.index-explorer/AttributeGraphPanel",-658371264),com.wsscode.pathom.viz.index_explorer.AttributeGraphPanel);

var x58031_58958 = com.wsscode.pathom.viz.index_explorer.AttributeGraphPanel.prototype;
x58031_58958.render = ((function (x58031_58958){
return (function (){
var this__42008__auto__ = this;
var this$ = this__42008__auto__;
var _STAR_reconciler_STAR__orig_val__58032 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__58033 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__58034 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__58035 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__58036 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__58037 = fulcro.client.primitives.get_reconciler(this__42008__auto__);
var _STAR_depth_STAR__temp_val__58038 = (fulcro.client.primitives.depth(this__42008__auto__) + (1));
var _STAR_shared_STAR__temp_val__58039 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__42008__auto__);
var _STAR_instrument_STAR__temp_val__58040 = fulcro.client.primitives.instrument(this__42008__auto__);
var _STAR_parent_STAR__temp_val__58041 = this__42008__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__58037;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__58038;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__58039;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__58040;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__58041;

try{var map__58042 = fulcro.client.primitives.props(this$);
var map__58042__$1 = (((((!((map__58042 == null))))?(((((map__58042.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58042.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58042):map__58042);
var attribute = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58042__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075));
var attr_depth = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58042__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-depth","com.wsscode.pathom.viz.index-explorer/attr-depth",-1327711242));
var direct_reaches_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58042__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","direct-reaches?","com.wsscode.pathom.viz.index-explorer/direct-reaches?",-1036048994));
var nested_reaches_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58042__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","nested-reaches?","com.wsscode.pathom.viz.index-explorer/nested-reaches?",-22429448));
var direct_provides_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58042__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","direct-provides?","com.wsscode.pathom.viz.index-explorer/direct-provides?",223892052));
var nested_provides_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58042__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","nested-provides?","com.wsscode.pathom.viz.index-explorer/nested-provides?",-1296758362));
var interconnections_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58042__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","interconnections?","com.wsscode.pathom.viz.index-explorer/interconnections?",-1723481228));
var map__58043 = fulcro.client.primitives.get_computed.cljs$core$IFn$_invoke$arity$1(this$);
var map__58043__$1 = (((((!((map__58043 == null))))?(((((map__58043.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58043.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58043):map__58043);
var on_select_attribute = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58043__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","on-select-attribute","com.wsscode.pathom.viz.index-explorer/on-select-attribute",2006419034));
var attributes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58043__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attributes","com.wsscode.pathom.viz.index-explorer/attributes",-67264281));
var graph_comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58043__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","graph-comm","com.wsscode.pathom.viz.index-explorer/graph-comm",-735750087));
var G__58046 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","panel-title","com.wsscode.pathom.viz.ui.kit/panel-title",1529445284),(function (){var G__58048 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"classes","classes",2037804510),com.wsscode.pathom.viz.ui.kit.ccss.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".graph-options",".graph-options",1009499042)], 0))], null);
var G__58049 = (function (){var G__58054 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"classes","classes",2037804510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".center",".center",-1815728518)], null)], null);
var G__58055 = fulcro.client.localized_dom.label.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Depth"], 0));
var G__58056 = (function (){var G__58057 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"min","min",444991522),(1),new cljs.core.Keyword(null,"value","value",305978217),attr_depth,new cljs.core.Keyword(null,"onChange","onChange",-312891301),((function (G__58054,G__58055,G__58048,map__58042,map__58042__$1,attribute,attr_depth,direct_reaches_QMARK_,nested_reaches_QMARK_,direct_provides_QMARK_,nested_provides_QMARK_,interconnections_QMARK_,map__58043,map__58043__$1,on_select_attribute,attributes,graph_comm,_STAR_reconciler_STAR__orig_val__58032,_STAR_depth_STAR__orig_val__58033,_STAR_shared_STAR__orig_val__58034,_STAR_instrument_STAR__orig_val__58035,_STAR_parent_STAR__orig_val__58036,_STAR_reconciler_STAR__temp_val__58037,_STAR_depth_STAR__temp_val__58038,_STAR_shared_STAR__temp_val__58039,_STAR_instrument_STAR__temp_val__58040,_STAR_parent_STAR__temp_val__58041,this$,this__42008__auto__,x58031_58958){
return (function (p1__58025_SHARP_,p2__58024_SHARP_){
return fulcro.client.mutations.set_value_BANG_(this$,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-depth","com.wsscode.pathom.viz.index-explorer/attr-depth",-1327711242),p2__58024_SHARP_);
});})(G__58054,G__58055,G__58048,map__58042,map__58042__$1,attribute,attr_depth,direct_reaches_QMARK_,nested_reaches_QMARK_,direct_provides_QMARK_,nested_provides_QMARK_,interconnections_QMARK_,map__58043,map__58043__$1,on_select_attribute,attributes,graph_comm,_STAR_reconciler_STAR__orig_val__58032,_STAR_depth_STAR__orig_val__58033,_STAR_shared_STAR__orig_val__58034,_STAR_instrument_STAR__orig_val__58035,_STAR_parent_STAR__orig_val__58036,_STAR_reconciler_STAR__temp_val__58037,_STAR_depth_STAR__temp_val__58038,_STAR_shared_STAR__temp_val__58039,_STAR_instrument_STAR__temp_val__58040,_STAR_parent_STAR__temp_val__58041,this$,this__42008__auto__,x58031_58958))
], null);
return (com.wsscode.pathom.viz.ui.kit.number_input.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom.viz.ui.kit.number_input.cljs$core$IFn$_invoke$arity$1(G__58057) : com.wsscode.pathom.viz.ui.kit.number_input.call(null,G__58057));
})();
return (com.wsscode.pathom.viz.ui.kit.row.cljs$core$IFn$_invoke$arity$3 ? com.wsscode.pathom.viz.ui.kit.row.cljs$core$IFn$_invoke$arity$3(G__58054,G__58055,G__58056) : com.wsscode.pathom.viz.ui.kit.row.call(null,G__58054,G__58055,G__58056));
})();
var G__58050 = (function (){var G__58058 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","active?","com.wsscode.pathom.viz.ui.kit/active?",-2040404697),direct_reaches_QMARK_,new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (G__58048,G__58049,map__58042,map__58042__$1,attribute,attr_depth,direct_reaches_QMARK_,nested_reaches_QMARK_,direct_provides_QMARK_,nested_provides_QMARK_,interconnections_QMARK_,map__58043,map__58043__$1,on_select_attribute,attributes,graph_comm,_STAR_reconciler_STAR__orig_val__58032,_STAR_depth_STAR__orig_val__58033,_STAR_shared_STAR__orig_val__58034,_STAR_instrument_STAR__orig_val__58035,_STAR_parent_STAR__orig_val__58036,_STAR_reconciler_STAR__temp_val__58037,_STAR_depth_STAR__temp_val__58038,_STAR_shared_STAR__temp_val__58039,_STAR_instrument_STAR__temp_val__58040,_STAR_parent_STAR__temp_val__58041,this$,this__42008__auto__,x58031_58958){
return (function (){
return fulcro.client.mutations.set_value_BANG_(this$,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","direct-reaches?","com.wsscode.pathom.viz.index-explorer/direct-reaches?",-1036048994),cljs.core.not(direct_reaches_QMARK_));
});})(G__58048,G__58049,map__58042,map__58042__$1,attribute,attr_depth,direct_reaches_QMARK_,nested_reaches_QMARK_,direct_provides_QMARK_,nested_provides_QMARK_,interconnections_QMARK_,map__58043,map__58043__$1,on_select_attribute,attributes,graph_comm,_STAR_reconciler_STAR__orig_val__58032,_STAR_depth_STAR__orig_val__58033,_STAR_shared_STAR__orig_val__58034,_STAR_instrument_STAR__orig_val__58035,_STAR_parent_STAR__orig_val__58036,_STAR_reconciler_STAR__temp_val__58037,_STAR_depth_STAR__temp_val__58038,_STAR_shared_STAR__temp_val__58039,_STAR_instrument_STAR__temp_val__58040,_STAR_parent_STAR__temp_val__58041,this$,this__42008__auto__,x58031_58958))
], null);
var G__58059 = "Direct inputs";
return (com.wsscode.pathom.viz.ui.kit.toggle_action.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.toggle_action.cljs$core$IFn$_invoke$arity$2(G__58058,G__58059) : com.wsscode.pathom.viz.ui.kit.toggle_action.call(null,G__58058,G__58059));
})();
var G__58051 = (function (){var G__58060 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","active?","com.wsscode.pathom.viz.ui.kit/active?",-2040404697),nested_reaches_QMARK_,new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (G__58048,G__58049,G__58050,map__58042,map__58042__$1,attribute,attr_depth,direct_reaches_QMARK_,nested_reaches_QMARK_,direct_provides_QMARK_,nested_provides_QMARK_,interconnections_QMARK_,map__58043,map__58043__$1,on_select_attribute,attributes,graph_comm,_STAR_reconciler_STAR__orig_val__58032,_STAR_depth_STAR__orig_val__58033,_STAR_shared_STAR__orig_val__58034,_STAR_instrument_STAR__orig_val__58035,_STAR_parent_STAR__orig_val__58036,_STAR_reconciler_STAR__temp_val__58037,_STAR_depth_STAR__temp_val__58038,_STAR_shared_STAR__temp_val__58039,_STAR_instrument_STAR__temp_val__58040,_STAR_parent_STAR__temp_val__58041,this$,this__42008__auto__,x58031_58958){
return (function (){
return fulcro.client.mutations.set_value_BANG_(this$,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","nested-reaches?","com.wsscode.pathom.viz.index-explorer/nested-reaches?",-22429448),cljs.core.not(nested_reaches_QMARK_));
});})(G__58048,G__58049,G__58050,map__58042,map__58042__$1,attribute,attr_depth,direct_reaches_QMARK_,nested_reaches_QMARK_,direct_provides_QMARK_,nested_provides_QMARK_,interconnections_QMARK_,map__58043,map__58043__$1,on_select_attribute,attributes,graph_comm,_STAR_reconciler_STAR__orig_val__58032,_STAR_depth_STAR__orig_val__58033,_STAR_shared_STAR__orig_val__58034,_STAR_instrument_STAR__orig_val__58035,_STAR_parent_STAR__orig_val__58036,_STAR_reconciler_STAR__temp_val__58037,_STAR_depth_STAR__temp_val__58038,_STAR_shared_STAR__temp_val__58039,_STAR_instrument_STAR__temp_val__58040,_STAR_parent_STAR__temp_val__58041,this$,this__42008__auto__,x58031_58958))
], null);
var G__58061 = "Nested inputs";
return (com.wsscode.pathom.viz.ui.kit.toggle_action.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.toggle_action.cljs$core$IFn$_invoke$arity$2(G__58060,G__58061) : com.wsscode.pathom.viz.ui.kit.toggle_action.call(null,G__58060,G__58061));
})();
var G__58052 = (function (){var G__58062 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","active?","com.wsscode.pathom.viz.ui.kit/active?",-2040404697),direct_provides_QMARK_,new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (G__58048,G__58049,G__58050,G__58051,map__58042,map__58042__$1,attribute,attr_depth,direct_reaches_QMARK_,nested_reaches_QMARK_,direct_provides_QMARK_,nested_provides_QMARK_,interconnections_QMARK_,map__58043,map__58043__$1,on_select_attribute,attributes,graph_comm,_STAR_reconciler_STAR__orig_val__58032,_STAR_depth_STAR__orig_val__58033,_STAR_shared_STAR__orig_val__58034,_STAR_instrument_STAR__orig_val__58035,_STAR_parent_STAR__orig_val__58036,_STAR_reconciler_STAR__temp_val__58037,_STAR_depth_STAR__temp_val__58038,_STAR_shared_STAR__temp_val__58039,_STAR_instrument_STAR__temp_val__58040,_STAR_parent_STAR__temp_val__58041,this$,this__42008__auto__,x58031_58958){
return (function (){
return fulcro.client.mutations.set_value_BANG_(this$,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","direct-provides?","com.wsscode.pathom.viz.index-explorer/direct-provides?",223892052),cljs.core.not(direct_provides_QMARK_));
});})(G__58048,G__58049,G__58050,G__58051,map__58042,map__58042__$1,attribute,attr_depth,direct_reaches_QMARK_,nested_reaches_QMARK_,direct_provides_QMARK_,nested_provides_QMARK_,interconnections_QMARK_,map__58043,map__58043__$1,on_select_attribute,attributes,graph_comm,_STAR_reconciler_STAR__orig_val__58032,_STAR_depth_STAR__orig_val__58033,_STAR_shared_STAR__orig_val__58034,_STAR_instrument_STAR__orig_val__58035,_STAR_parent_STAR__orig_val__58036,_STAR_reconciler_STAR__temp_val__58037,_STAR_depth_STAR__temp_val__58038,_STAR_shared_STAR__temp_val__58039,_STAR_instrument_STAR__temp_val__58040,_STAR_parent_STAR__temp_val__58041,this$,this__42008__auto__,x58031_58958))
], null);
var G__58063 = "Direct outputs";
return (com.wsscode.pathom.viz.ui.kit.toggle_action.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.toggle_action.cljs$core$IFn$_invoke$arity$2(G__58062,G__58063) : com.wsscode.pathom.viz.ui.kit.toggle_action.call(null,G__58062,G__58063));
})();
var G__58053 = (function (){var G__58064 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","active?","com.wsscode.pathom.viz.ui.kit/active?",-2040404697),nested_provides_QMARK_,new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (G__58048,G__58049,G__58050,G__58051,G__58052,map__58042,map__58042__$1,attribute,attr_depth,direct_reaches_QMARK_,nested_reaches_QMARK_,direct_provides_QMARK_,nested_provides_QMARK_,interconnections_QMARK_,map__58043,map__58043__$1,on_select_attribute,attributes,graph_comm,_STAR_reconciler_STAR__orig_val__58032,_STAR_depth_STAR__orig_val__58033,_STAR_shared_STAR__orig_val__58034,_STAR_instrument_STAR__orig_val__58035,_STAR_parent_STAR__orig_val__58036,_STAR_reconciler_STAR__temp_val__58037,_STAR_depth_STAR__temp_val__58038,_STAR_shared_STAR__temp_val__58039,_STAR_instrument_STAR__temp_val__58040,_STAR_parent_STAR__temp_val__58041,this$,this__42008__auto__,x58031_58958){
return (function (){
return fulcro.client.mutations.set_value_BANG_(this$,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","nested-provides?","com.wsscode.pathom.viz.index-explorer/nested-provides?",-1296758362),cljs.core.not(nested_provides_QMARK_));
});})(G__58048,G__58049,G__58050,G__58051,G__58052,map__58042,map__58042__$1,attribute,attr_depth,direct_reaches_QMARK_,nested_reaches_QMARK_,direct_provides_QMARK_,nested_provides_QMARK_,interconnections_QMARK_,map__58043,map__58043__$1,on_select_attribute,attributes,graph_comm,_STAR_reconciler_STAR__orig_val__58032,_STAR_depth_STAR__orig_val__58033,_STAR_shared_STAR__orig_val__58034,_STAR_instrument_STAR__orig_val__58035,_STAR_parent_STAR__orig_val__58036,_STAR_reconciler_STAR__temp_val__58037,_STAR_depth_STAR__temp_val__58038,_STAR_shared_STAR__temp_val__58039,_STAR_instrument_STAR__temp_val__58040,_STAR_parent_STAR__temp_val__58041,this$,this__42008__auto__,x58031_58958))
], null);
var G__58065 = "Nested outputs";
return (com.wsscode.pathom.viz.ui.kit.toggle_action.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.toggle_action.cljs$core$IFn$_invoke$arity$2(G__58064,G__58065) : com.wsscode.pathom.viz.ui.kit.toggle_action.call(null,G__58064,G__58065));
})();
return (com.wsscode.pathom.viz.ui.kit.row.cljs$core$IFn$_invoke$arity$6 ? com.wsscode.pathom.viz.ui.kit.row.cljs$core$IFn$_invoke$arity$6(G__58048,G__58049,G__58050,G__58051,G__58052,G__58053) : com.wsscode.pathom.viz.ui.kit.row.call(null,G__58048,G__58049,G__58050,G__58051,G__58052,G__58053));
})(),new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","scrollbars?","com.wsscode.pathom.viz.ui.kit/scrollbars?",1389911780),false], null);
var G__58047 = fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".graph",".graph",-327673667),(function (){var shared_options = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","direct-reaches?","com.wsscode.pathom.viz.index-explorer/direct-reaches?",-1036048994),direct_reaches_QMARK_,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","nested-reaches?","com.wsscode.pathom.viz.index-explorer/nested-reaches?",-22429448),nested_reaches_QMARK_,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","direct-provides?","com.wsscode.pathom.viz.index-explorer/direct-provides?",223892052),direct_provides_QMARK_,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","nested-provides?","com.wsscode.pathom.viz.index-explorer/nested-provides?",-1296758362),nested_provides_QMARK_,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","interconnections?","com.wsscode.pathom.viz.index-explorer/interconnections?",-1723481228),interconnections_QMARK_], null);
var G__58066 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attributes","com.wsscode.pathom.viz.index-explorer/attributes",-67264281),com.wsscode.pathom.viz.index_explorer.attribute_network(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-depth","com.wsscode.pathom.viz.index-explorer/attr-depth",-1327711242),attr_depth,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-index","com.wsscode.pathom.viz.index-explorer/attr-index",684180200),com.wsscode.pathom.viz.helpers.index_by(new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),attributes),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attributes","com.wsscode.pathom.viz.index-explorer/attributes",-67264281),attributes], null),shared_options], 0)),attribute),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","on-show-details","com.wsscode.pathom.viz.index-explorer/on-show-details",-322180105),on_select_attribute,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","on-click-edge","com.wsscode.pathom.viz.index-explorer/on-click-edge",810811642),fulcro.client.primitives.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"select-resolver","select-resolver",43705318)),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","graph-comm","com.wsscode.pathom.viz.index-explorer/graph-comm",-735750087),graph_comm], null),shared_options], 0));
return (com.wsscode.pathom.viz.index_explorer.attribute_graph.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom.viz.index_explorer.attribute_graph.cljs$core$IFn$_invoke$arity$1(G__58066) : com.wsscode.pathom.viz.index_explorer.attribute_graph.call(null,G__58066));
})()], 0));
return (com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2(G__58046,G__58047) : com.wsscode.pathom.viz.ui.kit.panel.call(null,G__58046,G__58047));
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__58036;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__58035;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__58034;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__58033;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__58032;
}});})(x58031_58958))
;


com.wsscode.pathom.viz.index_explorer.AttributeGraphPanel.prototype.constructor = com.wsscode.pathom.viz.index_explorer.AttributeGraphPanel;

com.wsscode.pathom.viz.index_explorer.AttributeGraphPanel.prototype.constructor.displayName = "com.wsscode.pathom.viz.index-explorer/AttributeGraphPanel";

com.wsscode.pathom.viz.index_explorer.AttributeGraphPanel.prototype.fulcro$isComponent = true;

var x58067_58959 = com.wsscode.pathom.viz.index_explorer.AttributeGraphPanel;
x58067_58959.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x58067_58959.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x58067_58959){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".graph",".graph",-327673667),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"height","height",1025178622),"400px",new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"stretch",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column"], null)], null)], null);
});})(x58067_58959))
;

x58067_58959.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x58067_58959){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x58067_58959))
;

x58067_58959.fulcro$client$primitives$IPreMerge$ = cljs.core.PROTOCOL_SENTINEL;

x58067_58959.fulcro$client$primitives$IPreMerge$pre_merge_STAR_$arity$2 = ((function (x58067_58959){
return (function (this$,p__58068){
var map__58069 = p__58068;
var map__58069__$1 = (((((!((map__58069 == null))))?(((((map__58069.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58069.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58069):map__58069);
var current_normalized = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58069__$1,new cljs.core.Keyword(null,"current-normalized","current-normalized",851723724));
var data_tree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58069__$1,new cljs.core.Keyword(null,"data-tree","data-tree",1311167582));
var this$__$1 = this;
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-depth","com.wsscode.pathom.viz.index-explorer/attr-depth",-1327711242),(1),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","direct-reaches?","com.wsscode.pathom.viz.index-explorer/direct-reaches?",-1036048994),true,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","nested-reaches?","com.wsscode.pathom.viz.index-explorer/nested-reaches?",-22429448),false,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","direct-provides?","com.wsscode.pathom.viz.index-explorer/direct-provides?",223892052),true,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","nested-provides?","com.wsscode.pathom.viz.index-explorer/nested-provides?",-1296758362),false,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","interconnections?","com.wsscode.pathom.viz.index-explorer/interconnections?",-1723481228),true], null),current_normalized,data_tree], 0));
});})(x58067_58959))
;

x58067_58959.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x58067_58959.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x58067_58959){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x58067_58959))
;

x58067_58959.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x58067_58959.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x58067_58959){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-depth","com.wsscode.pathom.viz.index-explorer/attr-depth",-1327711242),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","direct-reaches?","com.wsscode.pathom.viz.index-explorer/direct-reaches?",-1036048994),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","nested-reaches?","com.wsscode.pathom.viz.index-explorer/nested-reaches?",-22429448),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","direct-provides?","com.wsscode.pathom.viz.index-explorer/direct-provides?",223892052),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","nested-provides?","com.wsscode.pathom.viz.index-explorer/nested-provides?",-1296758362),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","interconnections?","com.wsscode.pathom.viz.index-explorer/interconnections?",-1723481228),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","show-graph?","com.wsscode.pathom.viz.index-explorer/show-graph?",-1999932552),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via","com.wsscode.pathom.connect/attr-reach-via",-483841559),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-provides","com.wsscode.pathom.connect/attr-provides",-474523918)], null);
});})(x58067_58959))
;


var x58071_58960 = com.wsscode.pathom.viz.index_explorer.AttributeGraphPanel.prototype;
x58071_58960.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x58071_58960.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x58071_58960){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".graph",".graph",-327673667),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"height","height",1025178622),"400px",new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"stretch",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column"], null)], null)], null);
});})(x58071_58960))
;

x58071_58960.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x58071_58960){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x58071_58960))
;

x58071_58960.fulcro$client$primitives$IPreMerge$ = cljs.core.PROTOCOL_SENTINEL;

x58071_58960.fulcro$client$primitives$IPreMerge$pre_merge_STAR_$arity$2 = ((function (x58071_58960){
return (function (this$,p__58072){
var map__58073 = p__58072;
var map__58073__$1 = (((((!((map__58073 == null))))?(((((map__58073.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58073.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58073):map__58073);
var current_normalized = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58073__$1,new cljs.core.Keyword(null,"current-normalized","current-normalized",851723724));
var data_tree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58073__$1,new cljs.core.Keyword(null,"data-tree","data-tree",1311167582));
var this$__$1 = this;
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-depth","com.wsscode.pathom.viz.index-explorer/attr-depth",-1327711242),(1),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","direct-reaches?","com.wsscode.pathom.viz.index-explorer/direct-reaches?",-1036048994),true,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","nested-reaches?","com.wsscode.pathom.viz.index-explorer/nested-reaches?",-22429448),false,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","direct-provides?","com.wsscode.pathom.viz.index-explorer/direct-provides?",223892052),true,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","nested-provides?","com.wsscode.pathom.viz.index-explorer/nested-provides?",-1296758362),false,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","interconnections?","com.wsscode.pathom.viz.index-explorer/interconnections?",-1723481228),true], null),current_normalized,data_tree], 0));
});})(x58071_58960))
;

x58071_58960.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x58071_58960.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x58071_58960){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x58071_58960))
;

x58071_58960.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x58071_58960.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x58071_58960){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-depth","com.wsscode.pathom.viz.index-explorer/attr-depth",-1327711242),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","direct-reaches?","com.wsscode.pathom.viz.index-explorer/direct-reaches?",-1036048994),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","nested-reaches?","com.wsscode.pathom.viz.index-explorer/nested-reaches?",-22429448),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","direct-provides?","com.wsscode.pathom.viz.index-explorer/direct-provides?",223892052),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","nested-provides?","com.wsscode.pathom.viz.index-explorer/nested-provides?",-1296758362),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","interconnections?","com.wsscode.pathom.viz.index-explorer/interconnections?",-1723481228),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","show-graph?","com.wsscode.pathom.viz.index-explorer/show-graph?",-1999932552),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via","com.wsscode.pathom.connect/attr-reach-via",-483841559),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-provides","com.wsscode.pathom.connect/attr-provides",-474523918)], null);
});})(x58071_58960))
;


com.wsscode.pathom.viz.index_explorer.AttributeGraphPanel.cljs$lang$type = true;

com.wsscode.pathom.viz.index_explorer.AttributeGraphPanel.cljs$lang$ctorStr = "com.wsscode.pathom.viz.index-explorer/AttributeGraphPanel";

com.wsscode.pathom.viz.index_explorer.AttributeGraphPanel.cljs$lang$ctorPrWriter = (function (this__43093__auto__,writer__43094__auto__,opt__43095__auto__){
return cljs.core._write(writer__43094__auto__,"com.wsscode.pathom.viz.index-explorer/AttributeGraphPanel");
});
com.wsscode.pathom.viz.index_explorer.attribute_graph_panel = fulcro.client.primitives.computed_factory.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.AttributeGraphPanel);
if((typeof com !== 'undefined') && (typeof com.wsscode !== 'undefined') && (typeof com.wsscode.pathom !== 'undefined') && (typeof com.wsscode.pathom.viz !== 'undefined') && (typeof com.wsscode.pathom.viz.index_explorer !== 'undefined') && (typeof com.wsscode.pathom.viz.index_explorer.AttributeView !== 'undefined')){
} else {
/**
 * @constructor
 * @nocollapse
 */
com.wsscode.pathom.viz.index_explorer.AttributeView = (function com$wsscode$pathom$viz$index_explorer$AttributeView(){
var this__43090__auto__ = this;
React.Component.apply(this__43090__auto__,arguments);

if((!((this__43090__auto__.initLocalState == null)))){
this__43090__auto__.state = this__43090__auto__.initLocalState();
} else {
this__43090__auto__.state = ({});
}

return this__43090__auto__;
});

var G__58080_58961 = com.wsscode.pathom.viz.index_explorer.AttributeView.prototype;
var G__58081_58962 = React.Component.prototype;
var G__58082_58963 = fulcro.client.primitives.default_component_prototype;
goog.object.extend(G__58080_58961,G__58081_58962,G__58082_58963);
}

fulcro.client.primitives._register_component_BANG_(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","AttributeView","com.wsscode.pathom.viz.index-explorer/AttributeView",1769179789),com.wsscode.pathom.viz.index_explorer.AttributeView);

var x58083_58964 = com.wsscode.pathom.viz.index_explorer.AttributeView.prototype;
x58083_58964.render = ((function (x58083_58964){
return (function (){
var this__42008__auto__ = this;
var this$ = this__42008__auto__;
var _STAR_reconciler_STAR__orig_val__58084 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__58085 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__58086 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__58087 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__58088 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__58089 = fulcro.client.primitives.get_reconciler(this__42008__auto__);
var _STAR_depth_STAR__temp_val__58090 = (fulcro.client.primitives.depth(this__42008__auto__) + (1));
var _STAR_shared_STAR__temp_val__58091 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__42008__auto__);
var _STAR_instrument_STAR__temp_val__58092 = fulcro.client.primitives.instrument(this__42008__auto__);
var _STAR_parent_STAR__temp_val__58093 = this__42008__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__58089;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__58090;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__58091;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__58092;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__58093;

try{var map__58094 = fulcro.client.primitives.props(this$);
var map__58094__$1 = (((((!((map__58094 == null))))?(((((map__58094.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58094.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58094):map__58094);
var attr_mutation_param_in = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58094__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attr-mutation-param-in","com.wsscode.pathom.connect/attr-mutation-param-in",-1474382671));
var attr_reach_via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58094__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via","com.wsscode.pathom.connect/attr-reach-via",-483841559));
var attr_combinations = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58094__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attr-combinations","com.wsscode.pathom.connect/attr-combinations",-1163990806));
var attribute = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58094__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075));
var provides_tree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58094__$1,new cljs.core.Keyword("ui","provides-tree","ui/provides-tree",675380755));
var provides_tree_source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58094__$1,new cljs.core.Keyword("ui","provides-tree-source","ui/provides-tree-source",874544325));
var attr_input_in = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58094__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attr-input-in","com.wsscode.pathom.connect/attr-input-in",-2112912399));
var attr_provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58094__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attr-provides","com.wsscode.pathom.connect/attr-provides",-474523918));
var attr_mutation_output_in = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58094__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attr-mutation-output-in","com.wsscode.pathom.connect/attr-mutation-output-in",1122448739));
var show_graph_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58094__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","show-graph?","com.wsscode.pathom.viz.index-explorer/show-graph?",-1999932552));
var mutation_output_in = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58094__$1,new cljs.core.Keyword(">","mutation-output-in",">/mutation-output-in",463836271));
var attr_output_in = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58094__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attr-output-in","com.wsscode.pathom.connect/attr-output-in",-62045610));
var reach_via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58094__$1,new cljs.core.Keyword(">","reach-via",">/reach-via",725397135));
var graph_panel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58094__$1,new cljs.core.Keyword(">","graph-panel",">/graph-panel",-700694737));
var mutation_param_in = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58094__$1,new cljs.core.Keyword(">","mutation-param-in",">/mutation-param-in",-1050138308));
var computed = fulcro.client.primitives.get_computed.cljs$core$IFn$_invoke$arity$1(this$);
var computed__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(computed,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","graph-comm","com.wsscode.pathom.viz.index-explorer/graph-comm",-735750087),fulcro.client.primitives.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"graph-comm","graph-comm",-744729650)));
return fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".container",".container",-1441208944),fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".toolbar",".toolbar",968457325),fulcro.client.localized_dom.h1.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".title",".title",-416997657),com.wsscode.pathom.viz.ui.kit.gc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".flex",".flex",-73425686)], 0)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attribute], 0))], 0)),(function (){var G__58096 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","active?","com.wsscode.pathom.viz.ui.kit/active?",-2040404697),show_graph_QMARK_,new cljs.core.Keyword(null,"classes","classes",2037804510),com.wsscode.pathom.viz.ui.kit.ccss.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".show-graph",".show-graph",1780476669)], 0)),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (computed__$1,map__58094,map__58094__$1,attr_mutation_param_in,attr_reach_via,attr_combinations,attribute,provides_tree,provides_tree_source,attr_input_in,attr_provides,attr_mutation_output_in,show_graph_QMARK_,mutation_output_in,attr_output_in,reach_via,graph_panel,mutation_param_in,computed,_STAR_reconciler_STAR__orig_val__58084,_STAR_depth_STAR__orig_val__58085,_STAR_shared_STAR__orig_val__58086,_STAR_instrument_STAR__orig_val__58087,_STAR_parent_STAR__orig_val__58088,_STAR_reconciler_STAR__temp_val__58089,_STAR_depth_STAR__temp_val__58090,_STAR_shared_STAR__temp_val__58091,_STAR_instrument_STAR__temp_val__58092,_STAR_parent_STAR__temp_val__58093,this$,this__42008__auto__,x58083_58964){
return (function (){
return fulcro.client.mutations.set_value_BANG_(this$,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","show-graph?","com.wsscode.pathom.viz.index-explorer/show-graph?",-1999932552),cljs.core.not(show_graph_QMARK_));
});})(computed__$1,map__58094,map__58094__$1,attr_mutation_param_in,attr_reach_via,attr_combinations,attribute,provides_tree,provides_tree_source,attr_input_in,attr_provides,attr_mutation_output_in,show_graph_QMARK_,mutation_output_in,attr_output_in,reach_via,graph_panel,mutation_param_in,computed,_STAR_reconciler_STAR__orig_val__58084,_STAR_depth_STAR__orig_val__58085,_STAR_shared_STAR__orig_val__58086,_STAR_instrument_STAR__orig_val__58087,_STAR_parent_STAR__orig_val__58088,_STAR_reconciler_STAR__temp_val__58089,_STAR_depth_STAR__temp_val__58090,_STAR_shared_STAR__temp_val__58091,_STAR_instrument_STAR__temp_val__58092,_STAR_parent_STAR__temp_val__58093,this$,this__42008__auto__,x58083_58964))
], null);
var G__58097 = "Graph View";
return (com.wsscode.pathom.viz.ui.kit.toggle_action.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.toggle_action.cljs$core$IFn$_invoke$arity$2(G__58096,G__58097) : com.wsscode.pathom.viz.ui.kit.toggle_action.call(null,G__58096,G__58097));
})()], 0)),(cljs.core.truth_(show_graph_QMARK_)?(com.wsscode.pathom.viz.index_explorer.attribute_graph_panel.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.attribute_graph_panel.cljs$core$IFn$_invoke$arity$2(graph_panel,computed__$1) : com.wsscode.pathom.viz.index_explorer.attribute_graph_panel.call(null,graph_panel,computed__$1)):null),fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".columns$scrollbars",".columns$scrollbars",-1170212651),fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".data-list",".data-list",949465177),((cljs.core.seq(attr_reach_via))?(com.wsscode.pathom.viz.index_explorer.attribute_info_reach_via.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.attribute_info_reach_via.cljs$core$IFn$_invoke$arity$2(reach_via,computed__$1) : com.wsscode.pathom.viz.index_explorer.attribute_info_reach_via.call(null,reach_via,computed__$1)):null),((cljs.core.seq(attr_output_in))?(function (){var G__58098 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","panel-title","com.wsscode.pathom.viz.ui.kit/panel-title",1529445284),"Output In",new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","panel-tag","com.wsscode.pathom.viz.ui.kit/panel-tag",144392508),cljs.core.count(attr_output_in)], null);
var G__58099 = (function (){var iter__4523__auto__ = ((function (G__58098,computed__$1,map__58094,map__58094__$1,attr_mutation_param_in,attr_reach_via,attr_combinations,attribute,provides_tree,provides_tree_source,attr_input_in,attr_provides,attr_mutation_output_in,show_graph_QMARK_,mutation_output_in,attr_output_in,reach_via,graph_panel,mutation_param_in,computed,_STAR_reconciler_STAR__orig_val__58084,_STAR_depth_STAR__orig_val__58085,_STAR_shared_STAR__orig_val__58086,_STAR_instrument_STAR__orig_val__58087,_STAR_parent_STAR__orig_val__58088,_STAR_reconciler_STAR__temp_val__58089,_STAR_depth_STAR__temp_val__58090,_STAR_shared_STAR__temp_val__58091,_STAR_instrument_STAR__temp_val__58092,_STAR_parent_STAR__temp_val__58093,this$,this__42008__auto__,x58083_58964){
return (function com$wsscode$pathom$viz$index_explorer$iter__58100(s__58101){
return (new cljs.core.LazySeq(null,((function (G__58098,computed__$1,map__58094,map__58094__$1,attr_mutation_param_in,attr_reach_via,attr_combinations,attribute,provides_tree,provides_tree_source,attr_input_in,attr_provides,attr_mutation_output_in,show_graph_QMARK_,mutation_output_in,attr_output_in,reach_via,graph_panel,mutation_param_in,computed,_STAR_reconciler_STAR__orig_val__58084,_STAR_depth_STAR__orig_val__58085,_STAR_shared_STAR__orig_val__58086,_STAR_instrument_STAR__orig_val__58087,_STAR_parent_STAR__orig_val__58088,_STAR_reconciler_STAR__temp_val__58089,_STAR_depth_STAR__temp_val__58090,_STAR_shared_STAR__temp_val__58091,_STAR_instrument_STAR__temp_val__58092,_STAR_parent_STAR__temp_val__58093,this$,this__42008__auto__,x58083_58964){
return (function (){
var s__58101__$1 = s__58101;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__58101__$1);
if(temp__5720__auto__){
var s__58101__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__58101__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__58101__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__58103 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__58102 = (0);
while(true){
if((i__58102 < size__4522__auto__)){
var resolver = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__58102);
cljs.core.chunk_append(b__58103,(function (){var G__58104 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),resolver], null);
var G__58105 = computed__$1;
return (com.wsscode.pathom.viz.index_explorer.resolver_link.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.resolver_link.cljs$core$IFn$_invoke$arity$2(G__58104,G__58105) : com.wsscode.pathom.viz.index_explorer.resolver_link.call(null,G__58104,G__58105));
})());

var G__58965 = (i__58102 + (1));
i__58102 = G__58965;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58103),com$wsscode$pathom$viz$index_explorer$iter__58100(cljs.core.chunk_rest(s__58101__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58103),null);
}
} else {
var resolver = cljs.core.first(s__58101__$2);
return cljs.core.cons((function (){var G__58106 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),resolver], null);
var G__58107 = computed__$1;
return (com.wsscode.pathom.viz.index_explorer.resolver_link.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.resolver_link.cljs$core$IFn$_invoke$arity$2(G__58106,G__58107) : com.wsscode.pathom.viz.index_explorer.resolver_link.call(null,G__58106,G__58107));
})(),com$wsscode$pathom$viz$index_explorer$iter__58100(cljs.core.rest(s__58101__$2)));
}
} else {
return null;
}
break;
}
});})(G__58098,computed__$1,map__58094,map__58094__$1,attr_mutation_param_in,attr_reach_via,attr_combinations,attribute,provides_tree,provides_tree_source,attr_input_in,attr_provides,attr_mutation_output_in,show_graph_QMARK_,mutation_output_in,attr_output_in,reach_via,graph_panel,mutation_param_in,computed,_STAR_reconciler_STAR__orig_val__58084,_STAR_depth_STAR__orig_val__58085,_STAR_shared_STAR__orig_val__58086,_STAR_instrument_STAR__orig_val__58087,_STAR_parent_STAR__orig_val__58088,_STAR_reconciler_STAR__temp_val__58089,_STAR_depth_STAR__temp_val__58090,_STAR_shared_STAR__temp_val__58091,_STAR_instrument_STAR__temp_val__58092,_STAR_parent_STAR__temp_val__58093,this$,this__42008__auto__,x58083_58964))
,null,null));
});})(G__58098,computed__$1,map__58094,map__58094__$1,attr_mutation_param_in,attr_reach_via,attr_combinations,attribute,provides_tree,provides_tree_source,attr_input_in,attr_provides,attr_mutation_output_in,show_graph_QMARK_,mutation_output_in,attr_output_in,reach_via,graph_panel,mutation_param_in,computed,_STAR_reconciler_STAR__orig_val__58084,_STAR_depth_STAR__orig_val__58085,_STAR_shared_STAR__orig_val__58086,_STAR_instrument_STAR__orig_val__58087,_STAR_parent_STAR__orig_val__58088,_STAR_reconciler_STAR__temp_val__58089,_STAR_depth_STAR__temp_val__58090,_STAR_shared_STAR__temp_val__58091,_STAR_instrument_STAR__temp_val__58092,_STAR_parent_STAR__temp_val__58093,this$,this__42008__auto__,x58083_58964))
;
return iter__4523__auto__(cljs.core.sort.cljs$core$IFn$_invoke$arity$1(attr_output_in));
})();
return (com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2(G__58098,G__58099) : com.wsscode.pathom.viz.ui.kit.panel.call(null,G__58098,G__58099));
})():null),((cljs.core.seq(attr_combinations))?(function (){var G__58108 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","panel-title","com.wsscode.pathom.viz.ui.kit/panel-title",1529445284),"Input Combinations",new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","panel-tag","com.wsscode.pathom.viz.ui.kit/panel-tag",144392508),cljs.core.count(attr_combinations)], null);
var G__58109 = (function (){var iter__4523__auto__ = ((function (G__58108,computed__$1,map__58094,map__58094__$1,attr_mutation_param_in,attr_reach_via,attr_combinations,attribute,provides_tree,provides_tree_source,attr_input_in,attr_provides,attr_mutation_output_in,show_graph_QMARK_,mutation_output_in,attr_output_in,reach_via,graph_panel,mutation_param_in,computed,_STAR_reconciler_STAR__orig_val__58084,_STAR_depth_STAR__orig_val__58085,_STAR_shared_STAR__orig_val__58086,_STAR_instrument_STAR__orig_val__58087,_STAR_parent_STAR__orig_val__58088,_STAR_reconciler_STAR__temp_val__58089,_STAR_depth_STAR__temp_val__58090,_STAR_shared_STAR__temp_val__58091,_STAR_instrument_STAR__temp_val__58092,_STAR_parent_STAR__temp_val__58093,this$,this__42008__auto__,x58083_58964){
return (function com$wsscode$pathom$viz$index_explorer$iter__58110(s__58111){
return (new cljs.core.LazySeq(null,((function (G__58108,computed__$1,map__58094,map__58094__$1,attr_mutation_param_in,attr_reach_via,attr_combinations,attribute,provides_tree,provides_tree_source,attr_input_in,attr_provides,attr_mutation_output_in,show_graph_QMARK_,mutation_output_in,attr_output_in,reach_via,graph_panel,mutation_param_in,computed,_STAR_reconciler_STAR__orig_val__58084,_STAR_depth_STAR__orig_val__58085,_STAR_shared_STAR__orig_val__58086,_STAR_instrument_STAR__orig_val__58087,_STAR_parent_STAR__orig_val__58088,_STAR_reconciler_STAR__temp_val__58089,_STAR_depth_STAR__temp_val__58090,_STAR_shared_STAR__temp_val__58091,_STAR_instrument_STAR__temp_val__58092,_STAR_parent_STAR__temp_val__58093,this$,this__42008__auto__,x58083_58964){
return (function (){
var s__58111__$1 = s__58111;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__58111__$1);
if(temp__5720__auto__){
var s__58111__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__58111__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__58111__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__58113 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__58112 = (0);
while(true){
if((i__58112 < size__4522__auto__)){
var input = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__58112);
cljs.core.chunk_append(b__58113,(function (){var G__58114 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),input], null);
var G__58115 = computed__$1;
return (com.wsscode.pathom.viz.index_explorer.attribute_link.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.attribute_link.cljs$core$IFn$_invoke$arity$2(G__58114,G__58115) : com.wsscode.pathom.viz.index_explorer.attribute_link.call(null,G__58114,G__58115));
})());

var G__58966 = (i__58112 + (1));
i__58112 = G__58966;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58113),com$wsscode$pathom$viz$index_explorer$iter__58110(cljs.core.chunk_rest(s__58111__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58113),null);
}
} else {
var input = cljs.core.first(s__58111__$2);
return cljs.core.cons((function (){var G__58116 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),input], null);
var G__58117 = computed__$1;
return (com.wsscode.pathom.viz.index_explorer.attribute_link.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.attribute_link.cljs$core$IFn$_invoke$arity$2(G__58116,G__58117) : com.wsscode.pathom.viz.index_explorer.attribute_link.call(null,G__58116,G__58117));
})(),com$wsscode$pathom$viz$index_explorer$iter__58110(cljs.core.rest(s__58111__$2)));
}
} else {
return null;
}
break;
}
});})(G__58108,computed__$1,map__58094,map__58094__$1,attr_mutation_param_in,attr_reach_via,attr_combinations,attribute,provides_tree,provides_tree_source,attr_input_in,attr_provides,attr_mutation_output_in,show_graph_QMARK_,mutation_output_in,attr_output_in,reach_via,graph_panel,mutation_param_in,computed,_STAR_reconciler_STAR__orig_val__58084,_STAR_depth_STAR__orig_val__58085,_STAR_shared_STAR__orig_val__58086,_STAR_instrument_STAR__orig_val__58087,_STAR_parent_STAR__orig_val__58088,_STAR_reconciler_STAR__temp_val__58089,_STAR_depth_STAR__temp_val__58090,_STAR_shared_STAR__temp_val__58091,_STAR_instrument_STAR__temp_val__58092,_STAR_parent_STAR__temp_val__58093,this$,this__42008__auto__,x58083_58964))
,null,null));
});})(G__58108,computed__$1,map__58094,map__58094__$1,attr_mutation_param_in,attr_reach_via,attr_combinations,attribute,provides_tree,provides_tree_source,attr_input_in,attr_provides,attr_mutation_output_in,show_graph_QMARK_,mutation_output_in,attr_output_in,reach_via,graph_panel,mutation_param_in,computed,_STAR_reconciler_STAR__orig_val__58084,_STAR_depth_STAR__orig_val__58085,_STAR_shared_STAR__orig_val__58086,_STAR_instrument_STAR__orig_val__58087,_STAR_parent_STAR__orig_val__58088,_STAR_reconciler_STAR__temp_val__58089,_STAR_depth_STAR__temp_val__58090,_STAR_shared_STAR__temp_val__58091,_STAR_instrument_STAR__temp_val__58092,_STAR_parent_STAR__temp_val__58093,this$,this__42008__auto__,x58083_58964))
;
return iter__4523__auto__(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,cljs.core.sort),com.wsscode.pathom.viz.helpers.vector_compare,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (iter__4523__auto__,G__58108,computed__$1,map__58094,map__58094__$1,attr_mutation_param_in,attr_reach_via,attr_combinations,attribute,provides_tree,provides_tree_source,attr_input_in,attr_provides,attr_mutation_output_in,show_graph_QMARK_,mutation_output_in,attr_output_in,reach_via,graph_panel,mutation_param_in,computed,_STAR_reconciler_STAR__orig_val__58084,_STAR_depth_STAR__orig_val__58085,_STAR_shared_STAR__orig_val__58086,_STAR_instrument_STAR__orig_val__58087,_STAR_parent_STAR__orig_val__58088,_STAR_reconciler_STAR__temp_val__58089,_STAR_depth_STAR__temp_val__58090,_STAR_shared_STAR__temp_val__58091,_STAR_instrument_STAR__temp_val__58092,_STAR_parent_STAR__temp_val__58093,this$,this__42008__auto__,x58083_58964){
return (function (p1__58077_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.sorted_set(),p1__58077_SHARP_);
});})(iter__4523__auto__,G__58108,computed__$1,map__58094,map__58094__$1,attr_mutation_param_in,attr_reach_via,attr_combinations,attribute,provides_tree,provides_tree_source,attr_input_in,attr_provides,attr_mutation_output_in,show_graph_QMARK_,mutation_output_in,attr_output_in,reach_via,graph_panel,mutation_param_in,computed,_STAR_reconciler_STAR__orig_val__58084,_STAR_depth_STAR__orig_val__58085,_STAR_shared_STAR__orig_val__58086,_STAR_instrument_STAR__orig_val__58087,_STAR_parent_STAR__orig_val__58088,_STAR_reconciler_STAR__temp_val__58089,_STAR_depth_STAR__temp_val__58090,_STAR_shared_STAR__temp_val__58091,_STAR_instrument_STAR__temp_val__58092,_STAR_parent_STAR__temp_val__58093,this$,this__42008__auto__,x58083_58964))
,attr_combinations)));
})();
return (com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2(G__58108,G__58109) : com.wsscode.pathom.viz.ui.kit.panel.call(null,G__58108,G__58109));
})():null),((cljs.core.seq(attr_mutation_param_in))?(com.wsscode.pathom.viz.index_explorer.attribute_info_mutation_param_in.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.attribute_info_mutation_param_in.cljs$core$IFn$_invoke$arity$2(mutation_param_in,computed__$1) : com.wsscode.pathom.viz.index_explorer.attribute_info_mutation_param_in.call(null,mutation_param_in,computed__$1)):null),((cljs.core.seq(attr_mutation_output_in))?(com.wsscode.pathom.viz.index_explorer.attribute_info_mutation_output_in.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.attribute_info_mutation_output_in.cljs$core$IFn$_invoke$arity$2(mutation_output_in,computed__$1) : com.wsscode.pathom.viz.index_explorer.attribute_info_mutation_output_in.call(null,mutation_output_in,computed__$1)):null),(function (){var temp__5718__auto__ = com.wsscode.spec_inspec.safe_form(attribute);
if(cljs.core.truth_(temp__5718__auto__)){
var form = temp__5718__auto__;
return fulcro.client.primitives.fragment.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__58118 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","panel-title","com.wsscode.pathom.viz.ui.kit/panel-title",1529445284),"Spec"], null);
var G__58119 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([form], 0));
return (com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2(G__58118,G__58119) : com.wsscode.pathom.viz.ui.kit.panel.call(null,G__58118,G__58119));
})(),(function (){var G__58120 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),attribute], null);
var G__58121 = computed__$1;
return (com.wsscode.pathom.viz.index_explorer.examples_panel.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.examples_panel.cljs$core$IFn$_invoke$arity$2(G__58120,G__58121) : com.wsscode.pathom.viz.index_explorer.examples_panel.call(null,G__58120,G__58121));
})()], 0));
} else {
return null;
}
})(),com.wsscode.pathom.viz.index_explorer.render_plugin_extension(this$,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","plugin-render-to-attr-left-menu","com.wsscode.pathom.viz.index-explorer/plugin-render-to-attr-left-menu",-1946076893))], 0)),fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".data-list-right",".data-list-right",-1849926935),((cljs.core.seq(attr_provides))?(function (){var G__58122 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","panel-title","com.wsscode.pathom.viz.ui.kit/panel-title",1529445284),"Provides",new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","panel-tag","com.wsscode.pathom.viz.ui.kit/panel-tag",144392508),cljs.core.count(attr_provides)], null);
var G__58123 = (function (){var G__58124 = provides_tree;
var G__58125 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.viz.ui.expandable-tree","root","com.wsscode.pathom.viz.ui.expandable-tree/root",-788021653),provides_tree_source,new cljs.core.Keyword("com.wsscode.pathom.viz.ui.expandable-tree","render","com.wsscode.pathom.viz.ui.expandable-tree/render",918872218),((function (G__58124,G__58122,computed__$1,map__58094,map__58094__$1,attr_mutation_param_in,attr_reach_via,attr_combinations,attribute,provides_tree,provides_tree_source,attr_input_in,attr_provides,attr_mutation_output_in,show_graph_QMARK_,mutation_output_in,attr_output_in,reach_via,graph_panel,mutation_param_in,computed,_STAR_reconciler_STAR__orig_val__58084,_STAR_depth_STAR__orig_val__58085,_STAR_shared_STAR__orig_val__58086,_STAR_instrument_STAR__orig_val__58087,_STAR_parent_STAR__orig_val__58088,_STAR_reconciler_STAR__temp_val__58089,_STAR_depth_STAR__temp_val__58090,_STAR_shared_STAR__temp_val__58091,_STAR_instrument_STAR__temp_val__58092,_STAR_parent_STAR__temp_val__58093,this$,this__42008__auto__,x58083_58964){
return (function (p__58126){
var map__58127 = p__58126;
var map__58127__$1 = (((((!((map__58127 == null))))?(((((map__58127.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58127.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58127):map__58127);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58127__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var sym_set = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58127__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","sym-set","com.wsscode.pathom.connect/sym-set",-662703745));
var G__58129 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"classes","classes",2037804510),com.wsscode.pathom.viz.ui.kit.ccss.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".links-container",".links-container",-1347961892)], 0))], null);
var G__58130 = (function (){var G__58132 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),key], null);
var G__58133 = computed__$1;
return (com.wsscode.pathom.viz.index_explorer.attribute_link.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.attribute_link.cljs$core$IFn$_invoke$arity$2(G__58132,G__58133) : com.wsscode.pathom.viz.index_explorer.attribute_link.call(null,G__58132,G__58133));
})();
var G__58131 = fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"classes","classes",2037804510),com.wsscode.pathom.viz.ui.kit.ccss.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".links-display",".links-display",-2102960556)], 0))], null),(function (){var iter__4523__auto__ = ((function (G__58129,G__58130,map__58127,map__58127__$1,key,sym_set,G__58124,G__58122,computed__$1,map__58094,map__58094__$1,attr_mutation_param_in,attr_reach_via,attr_combinations,attribute,provides_tree,provides_tree_source,attr_input_in,attr_provides,attr_mutation_output_in,show_graph_QMARK_,mutation_output_in,attr_output_in,reach_via,graph_panel,mutation_param_in,computed,_STAR_reconciler_STAR__orig_val__58084,_STAR_depth_STAR__orig_val__58085,_STAR_shared_STAR__orig_val__58086,_STAR_instrument_STAR__orig_val__58087,_STAR_parent_STAR__orig_val__58088,_STAR_reconciler_STAR__temp_val__58089,_STAR_depth_STAR__temp_val__58090,_STAR_shared_STAR__temp_val__58091,_STAR_instrument_STAR__temp_val__58092,_STAR_parent_STAR__temp_val__58093,this$,this__42008__auto__,x58083_58964){
return (function com$wsscode$pathom$viz$index_explorer$iter__58134(s__58135){
return (new cljs.core.LazySeq(null,((function (G__58129,G__58130,map__58127,map__58127__$1,key,sym_set,G__58124,G__58122,computed__$1,map__58094,map__58094__$1,attr_mutation_param_in,attr_reach_via,attr_combinations,attribute,provides_tree,provides_tree_source,attr_input_in,attr_provides,attr_mutation_output_in,show_graph_QMARK_,mutation_output_in,attr_output_in,reach_via,graph_panel,mutation_param_in,computed,_STAR_reconciler_STAR__orig_val__58084,_STAR_depth_STAR__orig_val__58085,_STAR_shared_STAR__orig_val__58086,_STAR_instrument_STAR__orig_val__58087,_STAR_parent_STAR__orig_val__58088,_STAR_reconciler_STAR__temp_val__58089,_STAR_depth_STAR__temp_val__58090,_STAR_shared_STAR__temp_val__58091,_STAR_instrument_STAR__temp_val__58092,_STAR_parent_STAR__temp_val__58093,this$,this__42008__auto__,x58083_58964){
return (function (){
var s__58135__$1 = s__58135;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__58135__$1);
if(temp__5720__auto__){
var s__58135__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__58135__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__58135__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__58137 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__58136 = (0);
while(true){
if((i__58136 < size__4522__auto__)){
var sym = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__58136);
cljs.core.chunk_append(b__58137,(function (){var G__58138 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),sym], null);
var G__58139 = computed__$1;
return (com.wsscode.pathom.viz.index_explorer.resolver_link.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.resolver_link.cljs$core$IFn$_invoke$arity$2(G__58138,G__58139) : com.wsscode.pathom.viz.index_explorer.resolver_link.call(null,G__58138,G__58139));
})());

var G__58967 = (i__58136 + (1));
i__58136 = G__58967;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58137),com$wsscode$pathom$viz$index_explorer$iter__58134(cljs.core.chunk_rest(s__58135__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58137),null);
}
} else {
var sym = cljs.core.first(s__58135__$2);
return cljs.core.cons((function (){var G__58140 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),sym], null);
var G__58141 = computed__$1;
return (com.wsscode.pathom.viz.index_explorer.resolver_link.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.resolver_link.cljs$core$IFn$_invoke$arity$2(G__58140,G__58141) : com.wsscode.pathom.viz.index_explorer.resolver_link.call(null,G__58140,G__58141));
})(),com$wsscode$pathom$viz$index_explorer$iter__58134(cljs.core.rest(s__58135__$2)));
}
} else {
return null;
}
break;
}
});})(G__58129,G__58130,map__58127,map__58127__$1,key,sym_set,G__58124,G__58122,computed__$1,map__58094,map__58094__$1,attr_mutation_param_in,attr_reach_via,attr_combinations,attribute,provides_tree,provides_tree_source,attr_input_in,attr_provides,attr_mutation_output_in,show_graph_QMARK_,mutation_output_in,attr_output_in,reach_via,graph_panel,mutation_param_in,computed,_STAR_reconciler_STAR__orig_val__58084,_STAR_depth_STAR__orig_val__58085,_STAR_shared_STAR__orig_val__58086,_STAR_instrument_STAR__orig_val__58087,_STAR_parent_STAR__orig_val__58088,_STAR_reconciler_STAR__temp_val__58089,_STAR_depth_STAR__temp_val__58090,_STAR_shared_STAR__temp_val__58091,_STAR_instrument_STAR__temp_val__58092,_STAR_parent_STAR__temp_val__58093,this$,this__42008__auto__,x58083_58964))
,null,null));
});})(G__58129,G__58130,map__58127,map__58127__$1,key,sym_set,G__58124,G__58122,computed__$1,map__58094,map__58094__$1,attr_mutation_param_in,attr_reach_via,attr_combinations,attribute,provides_tree,provides_tree_source,attr_input_in,attr_provides,attr_mutation_output_in,show_graph_QMARK_,mutation_output_in,attr_output_in,reach_via,graph_panel,mutation_param_in,computed,_STAR_reconciler_STAR__orig_val__58084,_STAR_depth_STAR__orig_val__58085,_STAR_shared_STAR__orig_val__58086,_STAR_instrument_STAR__orig_val__58087,_STAR_parent_STAR__orig_val__58088,_STAR_reconciler_STAR__temp_val__58089,_STAR_depth_STAR__temp_val__58090,_STAR_shared_STAR__temp_val__58091,_STAR_instrument_STAR__temp_val__58092,_STAR_parent_STAR__temp_val__58093,this$,this__42008__auto__,x58083_58964))
;
return iter__4523__auto__(cljs.core.sort.cljs$core$IFn$_invoke$arity$1(sym_set));
})()], 0));
return (com.wsscode.pathom.viz.ui.kit.column.cljs$core$IFn$_invoke$arity$3 ? com.wsscode.pathom.viz.ui.kit.column.cljs$core$IFn$_invoke$arity$3(G__58129,G__58130,G__58131) : com.wsscode.pathom.viz.ui.kit.column.call(null,G__58129,G__58130,G__58131));
});})(G__58124,G__58122,computed__$1,map__58094,map__58094__$1,attr_mutation_param_in,attr_reach_via,attr_combinations,attribute,provides_tree,provides_tree_source,attr_input_in,attr_provides,attr_mutation_output_in,show_graph_QMARK_,mutation_output_in,attr_output_in,reach_via,graph_panel,mutation_param_in,computed,_STAR_reconciler_STAR__orig_val__58084,_STAR_depth_STAR__orig_val__58085,_STAR_shared_STAR__orig_val__58086,_STAR_instrument_STAR__orig_val__58087,_STAR_parent_STAR__orig_val__58088,_STAR_reconciler_STAR__temp_val__58089,_STAR_depth_STAR__temp_val__58090,_STAR_shared_STAR__temp_val__58091,_STAR_instrument_STAR__temp_val__58092,_STAR_parent_STAR__temp_val__58093,this$,this__42008__auto__,x58083_58964))
,new cljs.core.Keyword("com.wsscode.pathom.viz.ui.expandable-tree","sort-by","com.wsscode.pathom.viz.ui.expandable-tree/sort-by",1511051281),new cljs.core.Keyword(null,"key","key",-1516042587)], null);
return (com.wsscode.pathom.viz.ui.expandable_tree.expandable_tree.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.expandable_tree.expandable_tree.cljs$core$IFn$_invoke$arity$2(G__58124,G__58125) : com.wsscode.pathom.viz.ui.expandable_tree.expandable_tree.call(null,G__58124,G__58125));
})();
return (com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2(G__58122,G__58123) : com.wsscode.pathom.viz.ui.kit.panel.call(null,G__58122,G__58123));
})():null),((cljs.core.seq(attr_input_in))?(function (){var G__58142 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","panel-title","com.wsscode.pathom.viz.ui.kit/panel-title",1529445284),"Input In",new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","panel-tag","com.wsscode.pathom.viz.ui.kit/panel-tag",144392508),cljs.core.count(attr_input_in)], null);
var G__58143 = (function (){var iter__4523__auto__ = ((function (G__58142,computed__$1,map__58094,map__58094__$1,attr_mutation_param_in,attr_reach_via,attr_combinations,attribute,provides_tree,provides_tree_source,attr_input_in,attr_provides,attr_mutation_output_in,show_graph_QMARK_,mutation_output_in,attr_output_in,reach_via,graph_panel,mutation_param_in,computed,_STAR_reconciler_STAR__orig_val__58084,_STAR_depth_STAR__orig_val__58085,_STAR_shared_STAR__orig_val__58086,_STAR_instrument_STAR__orig_val__58087,_STAR_parent_STAR__orig_val__58088,_STAR_reconciler_STAR__temp_val__58089,_STAR_depth_STAR__temp_val__58090,_STAR_shared_STAR__temp_val__58091,_STAR_instrument_STAR__temp_val__58092,_STAR_parent_STAR__temp_val__58093,this$,this__42008__auto__,x58083_58964){
return (function com$wsscode$pathom$viz$index_explorer$iter__58144(s__58145){
return (new cljs.core.LazySeq(null,((function (G__58142,computed__$1,map__58094,map__58094__$1,attr_mutation_param_in,attr_reach_via,attr_combinations,attribute,provides_tree,provides_tree_source,attr_input_in,attr_provides,attr_mutation_output_in,show_graph_QMARK_,mutation_output_in,attr_output_in,reach_via,graph_panel,mutation_param_in,computed,_STAR_reconciler_STAR__orig_val__58084,_STAR_depth_STAR__orig_val__58085,_STAR_shared_STAR__orig_val__58086,_STAR_instrument_STAR__orig_val__58087,_STAR_parent_STAR__orig_val__58088,_STAR_reconciler_STAR__temp_val__58089,_STAR_depth_STAR__temp_val__58090,_STAR_shared_STAR__temp_val__58091,_STAR_instrument_STAR__temp_val__58092,_STAR_parent_STAR__temp_val__58093,this$,this__42008__auto__,x58083_58964){
return (function (){
var s__58145__$1 = s__58145;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__58145__$1);
if(temp__5720__auto__){
var s__58145__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__58145__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__58145__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__58147 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__58146 = (0);
while(true){
if((i__58146 < size__4522__auto__)){
var resolver = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__58146);
cljs.core.chunk_append(b__58147,(function (){var G__58148 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),resolver], null);
var G__58149 = computed__$1;
return (com.wsscode.pathom.viz.index_explorer.resolver_link.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.resolver_link.cljs$core$IFn$_invoke$arity$2(G__58148,G__58149) : com.wsscode.pathom.viz.index_explorer.resolver_link.call(null,G__58148,G__58149));
})());

var G__58968 = (i__58146 + (1));
i__58146 = G__58968;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58147),com$wsscode$pathom$viz$index_explorer$iter__58144(cljs.core.chunk_rest(s__58145__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58147),null);
}
} else {
var resolver = cljs.core.first(s__58145__$2);
return cljs.core.cons((function (){var G__58150 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),resolver], null);
var G__58151 = computed__$1;
return (com.wsscode.pathom.viz.index_explorer.resolver_link.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.resolver_link.cljs$core$IFn$_invoke$arity$2(G__58150,G__58151) : com.wsscode.pathom.viz.index_explorer.resolver_link.call(null,G__58150,G__58151));
})(),com$wsscode$pathom$viz$index_explorer$iter__58144(cljs.core.rest(s__58145__$2)));
}
} else {
return null;
}
break;
}
});})(G__58142,computed__$1,map__58094,map__58094__$1,attr_mutation_param_in,attr_reach_via,attr_combinations,attribute,provides_tree,provides_tree_source,attr_input_in,attr_provides,attr_mutation_output_in,show_graph_QMARK_,mutation_output_in,attr_output_in,reach_via,graph_panel,mutation_param_in,computed,_STAR_reconciler_STAR__orig_val__58084,_STAR_depth_STAR__orig_val__58085,_STAR_shared_STAR__orig_val__58086,_STAR_instrument_STAR__orig_val__58087,_STAR_parent_STAR__orig_val__58088,_STAR_reconciler_STAR__temp_val__58089,_STAR_depth_STAR__temp_val__58090,_STAR_shared_STAR__temp_val__58091,_STAR_instrument_STAR__temp_val__58092,_STAR_parent_STAR__temp_val__58093,this$,this__42008__auto__,x58083_58964))
,null,null));
});})(G__58142,computed__$1,map__58094,map__58094__$1,attr_mutation_param_in,attr_reach_via,attr_combinations,attribute,provides_tree,provides_tree_source,attr_input_in,attr_provides,attr_mutation_output_in,show_graph_QMARK_,mutation_output_in,attr_output_in,reach_via,graph_panel,mutation_param_in,computed,_STAR_reconciler_STAR__orig_val__58084,_STAR_depth_STAR__orig_val__58085,_STAR_shared_STAR__orig_val__58086,_STAR_instrument_STAR__orig_val__58087,_STAR_parent_STAR__orig_val__58088,_STAR_reconciler_STAR__temp_val__58089,_STAR_depth_STAR__temp_val__58090,_STAR_shared_STAR__temp_val__58091,_STAR_instrument_STAR__temp_val__58092,_STAR_parent_STAR__temp_val__58093,this$,this__42008__auto__,x58083_58964))
;
return iter__4523__auto__(cljs.core.sort.cljs$core$IFn$_invoke$arity$1(attr_input_in));
})();
return (com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2(G__58142,G__58143) : com.wsscode.pathom.viz.ui.kit.panel.call(null,G__58142,G__58143));
})():null)], 0))], 0))], 0));
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__58088;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__58087;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__58086;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__58085;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__58084;
}});})(x58083_58964))
;

x58083_58964.initLocalState = ((function (x58083_58964){
return (function (){
var this$ = this;
var ret__41983__auto__ = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"graph-comm","graph-comm",-744729650),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null),new cljs.core.Keyword(null,"select-resolver","select-resolver",43705318),((function (this$,x58083_58964){
return (function (p__58152){
var map__58153 = p__58152;
var map__58153__$1 = (((((!((map__58153 == null))))?(((((map__58153.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58153.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58153):map__58153);
var resolvers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58153__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","resolvers","com.wsscode.pathom.viz.index-explorer/resolvers",-1064744669));
var map__58155 = fulcro.client.primitives.get_computed.cljs$core$IFn$_invoke$arity$1(fulcro.client.primitives.props(this$));
var map__58155__$1 = (((((!((map__58155 == null))))?(((((map__58155.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58155.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58155):map__58155);
var on_select_resolver = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58155__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","on-select-resolver","com.wsscode.pathom.viz.index-explorer/on-select-resolver",1600914463));
var G__58157 = cljs.core.first(resolvers);
return (on_select_resolver.cljs$core$IFn$_invoke$arity$1 ? on_select_resolver.cljs$core$IFn$_invoke$arity$1(G__58157) : on_select_resolver.call(null,G__58157));
});})(this$,x58083_58964))
], null);
var obj58159 = ({"fulcro$state":ret__41983__auto__});
return obj58159;
});})(x58083_58964))
;


com.wsscode.pathom.viz.index_explorer.AttributeView.prototype.constructor = com.wsscode.pathom.viz.index_explorer.AttributeView;

com.wsscode.pathom.viz.index_explorer.AttributeView.prototype.constructor.displayName = "com.wsscode.pathom.viz.index-explorer/AttributeView";

com.wsscode.pathom.viz.index_explorer.AttributeView.prototype.fulcro$isComponent = true;

var x58160_58969 = com.wsscode.pathom.viz.index_explorer.AttributeView;
x58160_58969.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x58160_58969.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x58160_58969){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"flex","flex",-1425124628),"1",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column",new cljs.core.Keyword(null,"display","display",242065432),"flex"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".title",".title",-416997657),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),com.wsscode.pathom.viz.index_explorer.color_attribute], null),com.wsscode.pathom.viz.ui.kit.css_header,com.wsscode.pathom.viz.ui.kit.text_base], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".toolbar",".toolbar",968457325),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"16px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".show-graph",".show-graph",1780476669),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"padding","padding",1660304693),"8px",new cljs.core.Keyword(null,"font-family","font-family",-667419874),com.wsscode.pathom.viz.ui.kit.font_base,new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1.1rem"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".graph-options",".graph-options",1009499042),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.9rem"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.viz.ui.kit.component_class(com.wsscode.pathom.viz.ui.kit.ToggleAction,new cljs.core.Keyword(null,".container",".container",-1441208944)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"0 2px"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".data-list",".data-list",949465177),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"white-space","white-space",-707351930),"nowrap",new cljs.core.Keyword(null,"box-sizing","box-sizing",-1956090239),"border-box",new cljs.core.Keyword(null,"width","width",-384071477),"50%",new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),"12px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".data-list-right",".data-list-right",-1849926935),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"white-space","white-space",-707351930),"nowrap",new cljs.core.Keyword(null,"width","width",-384071477),"50%",new cljs.core.Keyword(null,"box-sizing","box-sizing",-1956090239),"border-box",new cljs.core.Keyword(null,"padding","padding",1660304693),"0 12px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".graph",".graph",-327673667),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"height","height",1025178622),"400px",new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"stretch",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".columns",".columns",-1833892286),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex","flex",-1425124628),"1"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font","font",-1506159249),"bold 16px Verdana, Helvetica, Arial, sans-serif"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".links-container",".links-container",-1347961892),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:hover","&:hover",-852658855),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".links-display",".links-display",-2102960556),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"block"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".links-display",".links-display",-2102960556),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"none",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"16px"], null)], null)], null);
});})(x58160_58969))
;

x58160_58969.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x58160_58969){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.viz.index_explorer.AttributeGraph,com.wsscode.pathom.viz.ui.kit.ToggleAction,com.wsscode.pathom.viz.index_explorer.ExamplesPanel], null);
});})(x58160_58969))
;

x58160_58969.fulcro$client$primitives$IPreMerge$ = cljs.core.PROTOCOL_SENTINEL;

x58160_58969.fulcro$client$primitives$IPreMerge$pre_merge_STAR_$arity$2 = ((function (x58160_58969){
return (function (this$,p__58161){
var map__58162 = p__58161;
var map__58162__$1 = (((((!((map__58162 == null))))?(((((map__58162.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58162.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58162):map__58162);
var current_normalized = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58162__$1,new cljs.core.Keyword(null,"current-normalized","current-normalized",851723724));
var data_tree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58162__$1,new cljs.core.Keyword(null,"data-tree","data-tree",1311167582));
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
});})(x58160_58969))
;

x58160_58969.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x58160_58969.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x58160_58969){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x58160_58969))
;

x58160_58969.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x58160_58969.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x58160_58969){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-combinations","com.wsscode.pathom.connect/attr-combinations",-1163990806),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-input-in","com.wsscode.pathom.connect/attr-input-in",-2112912399),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-output-in","com.wsscode.pathom.connect/attr-output-in",-62045610),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-mutation-param-in","com.wsscode.pathom.connect/attr-mutation-param-in",-1474382671),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-mutation-output-in","com.wsscode.pathom.connect/attr-mutation-output-in",1122448739),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","show-graph?","com.wsscode.pathom.viz.index-explorer/show-graph?",-1999932552),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via","com.wsscode.pathom.connect/attr-reach-via",-483841559),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-provides","com.wsscode.pathom.connect/attr-provides",-474523918),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(">","graph-panel",">/graph-panel",-700694737),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.AttributeGraphPanel)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(">","reach-via",">/reach-via",725397135),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.AttributeInfoReachVia)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(">","mutation-param-in",">/mutation-param-in",-1050138308),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationParamIn)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(">","mutation-output-in",">/mutation-output-in",463836271),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationOutputIn)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","provides-tree","ui/provides-tree",675380755),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.ui.expandable_tree.ExpandableTree)], null),new cljs.core.Keyword("ui","provides-tree-source","ui/provides-tree-source",874544325)], null);
});})(x58160_58969))
;


var x58164_58970 = com.wsscode.pathom.viz.index_explorer.AttributeView.prototype;
x58164_58970.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x58164_58970.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x58164_58970){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"flex","flex",-1425124628),"1",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column",new cljs.core.Keyword(null,"display","display",242065432),"flex"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".title",".title",-416997657),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),com.wsscode.pathom.viz.index_explorer.color_attribute], null),com.wsscode.pathom.viz.ui.kit.css_header,com.wsscode.pathom.viz.ui.kit.text_base], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".toolbar",".toolbar",968457325),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"16px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".show-graph",".show-graph",1780476669),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"padding","padding",1660304693),"8px",new cljs.core.Keyword(null,"font-family","font-family",-667419874),com.wsscode.pathom.viz.ui.kit.font_base,new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1.1rem"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".graph-options",".graph-options",1009499042),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.9rem"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.viz.ui.kit.component_class(com.wsscode.pathom.viz.ui.kit.ToggleAction,new cljs.core.Keyword(null,".container",".container",-1441208944)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"0 2px"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".data-list",".data-list",949465177),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"white-space","white-space",-707351930),"nowrap",new cljs.core.Keyword(null,"box-sizing","box-sizing",-1956090239),"border-box",new cljs.core.Keyword(null,"width","width",-384071477),"50%",new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),"12px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".data-list-right",".data-list-right",-1849926935),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"white-space","white-space",-707351930),"nowrap",new cljs.core.Keyword(null,"width","width",-384071477),"50%",new cljs.core.Keyword(null,"box-sizing","box-sizing",-1956090239),"border-box",new cljs.core.Keyword(null,"padding","padding",1660304693),"0 12px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".graph",".graph",-327673667),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"height","height",1025178622),"400px",new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"stretch",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".columns",".columns",-1833892286),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex","flex",-1425124628),"1"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font","font",-1506159249),"bold 16px Verdana, Helvetica, Arial, sans-serif"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".links-container",".links-container",-1347961892),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:hover","&:hover",-852658855),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".links-display",".links-display",-2102960556),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"block"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".links-display",".links-display",-2102960556),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"none",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"16px"], null)], null)], null);
});})(x58164_58970))
;

x58164_58970.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x58164_58970){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.viz.index_explorer.AttributeGraph,com.wsscode.pathom.viz.ui.kit.ToggleAction,com.wsscode.pathom.viz.index_explorer.ExamplesPanel], null);
});})(x58164_58970))
;

x58164_58970.fulcro$client$primitives$IPreMerge$ = cljs.core.PROTOCOL_SENTINEL;

x58164_58970.fulcro$client$primitives$IPreMerge$pre_merge_STAR_$arity$2 = ((function (x58164_58970){
return (function (this$,p__58165){
var map__58166 = p__58165;
var map__58166__$1 = (((((!((map__58166 == null))))?(((((map__58166.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58166.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58166):map__58166);
var current_normalized = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58166__$1,new cljs.core.Keyword(null,"current-normalized","current-normalized",851723724));
var data_tree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58166__$1,new cljs.core.Keyword(null,"data-tree","data-tree",1311167582));
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
});})(x58164_58970))
;

x58164_58970.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x58164_58970.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x58164_58970){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x58164_58970))
;

x58164_58970.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x58164_58970.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x58164_58970){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-combinations","com.wsscode.pathom.connect/attr-combinations",-1163990806),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-input-in","com.wsscode.pathom.connect/attr-input-in",-2112912399),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-output-in","com.wsscode.pathom.connect/attr-output-in",-62045610),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-mutation-param-in","com.wsscode.pathom.connect/attr-mutation-param-in",-1474382671),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-mutation-output-in","com.wsscode.pathom.connect/attr-mutation-output-in",1122448739),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","show-graph?","com.wsscode.pathom.viz.index-explorer/show-graph?",-1999932552),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via","com.wsscode.pathom.connect/attr-reach-via",-483841559),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-provides","com.wsscode.pathom.connect/attr-provides",-474523918),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(">","graph-panel",">/graph-panel",-700694737),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.AttributeGraphPanel)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(">","reach-via",">/reach-via",725397135),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.AttributeInfoReachVia)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(">","mutation-param-in",">/mutation-param-in",-1050138308),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationParamIn)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(">","mutation-output-in",">/mutation-output-in",463836271),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationOutputIn)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","provides-tree","ui/provides-tree",675380755),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.ui.expandable_tree.ExpandableTree)], null),new cljs.core.Keyword("ui","provides-tree-source","ui/provides-tree-source",874544325)], null);
});})(x58164_58970))
;


com.wsscode.pathom.viz.index_explorer.AttributeView.cljs$lang$type = true;

com.wsscode.pathom.viz.index_explorer.AttributeView.cljs$lang$ctorStr = "com.wsscode.pathom.viz.index-explorer/AttributeView";

com.wsscode.pathom.viz.index_explorer.AttributeView.cljs$lang$ctorPrWriter = (function (this__43093__auto__,writer__43094__auto__,opt__43095__auto__){
return cljs.core._write(writer__43094__auto__,"com.wsscode.pathom.viz.index-explorer/AttributeView");
});
goog.object.set(com.wsscode.pathom.viz.index_explorer.AttributeView,"contextType",com.wsscode.pathom.viz.index_explorer.ExtensionContext);
com.wsscode.pathom.viz.index_explorer.attribute_view = fulcro.client.primitives.computed_factory.cljs$core$IFn$_invoke$arity$2(com.wsscode.pathom.viz.index_explorer.AttributeView,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075)], null));
com.wsscode.pathom.viz.index_explorer.out_all_attributes = (function com$wsscode$pathom$viz$index_explorer$out_all_attributes(p__58168,input){
var map__58169 = p__58168;
var map__58169__$1 = (((((!((map__58169 == null))))?(((((map__58169.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58169.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58169):map__58169);
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58169__$1,new cljs.core.Keyword(null,"children","children",-940561982));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (map__58169,map__58169__$1,children){
return (function (attrs,p__58171){
var map__58172 = p__58171;
var map__58172__$1 = (((((!((map__58172 == null))))?(((((map__58172.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58172.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58172):map__58172);
var node = map__58172__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58172__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var children__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58172__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var G__58174 = ((cljs.core.contains_QMARK_(input,key))?attrs:cljs.core.conj.cljs$core$IFn$_invoke$arity$2(attrs,key));
if(cljs.core.truth_(children__$1)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(G__58174,(com.wsscode.pathom.viz.index_explorer.out_all_attributes.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.out_all_attributes.cljs$core$IFn$_invoke$arity$2(node,input) : com.wsscode.pathom.viz.index_explorer.out_all_attributes.call(null,node,input)));
} else {
return G__58174;
}
});})(map__58169,map__58169__$1,children))
,cljs.core.PersistentHashSet.EMPTY,children);
});
if((typeof com !== 'undefined') && (typeof com.wsscode !== 'undefined') && (typeof com.wsscode.pathom !== 'undefined') && (typeof com.wsscode.pathom.viz !== 'undefined') && (typeof com.wsscode.pathom.viz.index_explorer !== 'undefined') && (typeof com.wsscode.pathom.viz.index_explorer.ResolverView !== 'undefined')){
} else {
/**
 * @constructor
 * @nocollapse
 */
com.wsscode.pathom.viz.index_explorer.ResolverView = (function com$wsscode$pathom$viz$index_explorer$ResolverView(){
var this__43090__auto__ = this;
React.Component.apply(this__43090__auto__,arguments);

if((!((this__43090__auto__.initLocalState == null)))){
this__43090__auto__.state = this__43090__auto__.initLocalState();
} else {
this__43090__auto__.state = ({});
}

return this__43090__auto__;
});

var G__58178_58971 = com.wsscode.pathom.viz.index_explorer.ResolverView.prototype;
var G__58179_58972 = React.Component.prototype;
var G__58180_58973 = fulcro.client.primitives.default_component_prototype;
goog.object.extend(G__58178_58971,G__58179_58972,G__58180_58973);
}

fulcro.client.primitives._register_component_BANG_(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","ResolverView","com.wsscode.pathom.viz.index-explorer/ResolverView",1233559847),com.wsscode.pathom.viz.index_explorer.ResolverView);

var x58181_58974 = com.wsscode.pathom.viz.index_explorer.ResolverView.prototype;
x58181_58974.render = ((function (x58181_58974){
return (function (){
var this__42008__auto__ = this;
var this$ = this__42008__auto__;
var _STAR_reconciler_STAR__orig_val__58182 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__58183 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__58184 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__58185 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__58186 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__58187 = fulcro.client.primitives.get_reconciler(this__42008__auto__);
var _STAR_depth_STAR__temp_val__58188 = (fulcro.client.primitives.depth(this__42008__auto__) + (1));
var _STAR_shared_STAR__temp_val__58189 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__42008__auto__);
var _STAR_instrument_STAR__temp_val__58190 = fulcro.client.primitives.instrument(this__42008__auto__);
var _STAR_parent_STAR__temp_val__58191 = this__42008__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__58187;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__58188;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__58189;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__58190;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__58191;

try{var map__58192 = fulcro.client.primitives.props(this$);
var map__58192__$1 = (((((!((map__58192 == null))))?(((((map__58192.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58192.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58192):map__58192);
var sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58192__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581));
var input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58192__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121));
var output = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58192__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303));
var batch_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58192__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","batch?","com.wsscode.pathom.connect/batch?",-427062659));
var output_tree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58192__$1,new cljs.core.Keyword("ui","output-tree","ui/output-tree",-491226343));
var map__58193 = fulcro.client.primitives.get_computed.cljs$core$IFn$_invoke$arity$1(this$);
var map__58193__$1 = (((((!((map__58193 == null))))?(((((map__58193.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58193.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58193):map__58193);
var computed = map__58193__$1;
var on_select_attribute = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58193__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","on-select-attribute","com.wsscode.pathom.viz.index-explorer/on-select-attribute",2006419034));
var attributes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58193__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attributes","com.wsscode.pathom.viz.index-explorer/attributes",-67264281));
var css = fulcro_css.css_implementation.get_classnames(com.wsscode.pathom.viz.index_explorer.ResolverView);
var input_SINGLEQUOTE_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(input)))?cljs.core.first(input):input);
var computed__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(computed,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","graph-comm","com.wsscode.pathom.viz.index-explorer/graph-comm",-735750087),fulcro.client.primitives.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"graph-comm","graph-comm",-744729650)));
var G__58196 = com.wsscode.pathom.viz.ui.kit.gc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".flex",".flex",-73425686)], 0));
var G__58197 = fulcro.client.localized_dom.h1.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".title",".title",-416997657),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)], 0));
var G__58198 = (function (){var G__58199 = com.wsscode.pathom.viz.ui.kit.gc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".flex",".flex",-73425686),new cljs.core.Keyword(null,".no-scrollbars",".no-scrollbars",2090539071)], 0));
var G__58200 = fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".menu",".menu",986259874),(cljs.core.truth_(batch_QMARK_)?(function (){var G__58202 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","panel-title","com.wsscode.pathom.viz.ui.kit/panel-title",1529445284),"Batch"], null);
var G__58203 = "True";
return (com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2(G__58202,G__58203) : com.wsscode.pathom.viz.ui.kit.panel.call(null,G__58202,G__58203));
})():null),(cljs.core.truth_(input)?(function (){var G__58204 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","panel-title","com.wsscode.pathom.viz.ui.kit/panel-title",1529445284),"Input"], null);
var G__58205 = (function (){var G__58206 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),input_SINGLEQUOTE_], null);
var G__58207 = computed__$1;
return (com.wsscode.pathom.viz.index_explorer.attribute_link.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.attribute_link.cljs$core$IFn$_invoke$arity$2(G__58206,G__58207) : com.wsscode.pathom.viz.index_explorer.attribute_link.call(null,G__58206,G__58207));
})();
return (com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2(G__58204,G__58205) : com.wsscode.pathom.viz.ui.kit.panel.call(null,G__58204,G__58205));
})():null),(cljs.core.truth_(output)?(function (){var G__58208 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","panel-title","com.wsscode.pathom.viz.ui.kit/panel-title",1529445284),"Output"], null);
var G__58209 = (function (){var G__58210 = output_tree;
var G__58211 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.viz.ui.expandable-tree","root","com.wsscode.pathom.viz.ui.expandable-tree/root",-788021653),cljs.core.update.cljs$core$IFn$_invoke$arity$3(edn_query_language.core.query__GT_ast(output),new cljs.core.Keyword(null,"children","children",-940561982),((function (G__58210,G__58208,G__58199,G__58196,G__58197,input_SINGLEQUOTE_,computed__$1,map__58192,map__58192__$1,sym,input,output,batch_QMARK_,output_tree,map__58193,map__58193__$1,computed,on_select_attribute,attributes,css,_STAR_reconciler_STAR__orig_val__58182,_STAR_depth_STAR__orig_val__58183,_STAR_shared_STAR__orig_val__58184,_STAR_instrument_STAR__orig_val__58185,_STAR_parent_STAR__orig_val__58186,_STAR_reconciler_STAR__temp_val__58187,_STAR_depth_STAR__temp_val__58188,_STAR_shared_STAR__temp_val__58189,_STAR_instrument_STAR__temp_val__58190,_STAR_parent_STAR__temp_val__58191,this$,this__42008__auto__,x58181_58974){
return (function (p1__58175_SHARP_){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(input,new cljs.core.Keyword(null,"key","key",-1516042587)),p1__58175_SHARP_);
});})(G__58210,G__58208,G__58199,G__58196,G__58197,input_SINGLEQUOTE_,computed__$1,map__58192,map__58192__$1,sym,input,output,batch_QMARK_,output_tree,map__58193,map__58193__$1,computed,on_select_attribute,attributes,css,_STAR_reconciler_STAR__orig_val__58182,_STAR_depth_STAR__orig_val__58183,_STAR_shared_STAR__orig_val__58184,_STAR_instrument_STAR__orig_val__58185,_STAR_parent_STAR__orig_val__58186,_STAR_reconciler_STAR__temp_val__58187,_STAR_depth_STAR__temp_val__58188,_STAR_shared_STAR__temp_val__58189,_STAR_instrument_STAR__temp_val__58190,_STAR_parent_STAR__temp_val__58191,this$,this__42008__auto__,x58181_58974))
),new cljs.core.Keyword("com.wsscode.pathom.viz.ui.expandable-tree","render","com.wsscode.pathom.viz.ui.expandable-tree/render",918872218),fulcro.client.primitives.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"render","render",-1408033454)),new cljs.core.Keyword("com.wsscode.pathom.viz.ui.expandable-tree","sort-by","com.wsscode.pathom.viz.ui.expandable-tree/sort-by",1511051281),new cljs.core.Keyword(null,"key","key",-1516042587)], null);
return (com.wsscode.pathom.viz.ui.expandable_tree.expandable_tree.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.expandable_tree.expandable_tree.cljs$core$IFn$_invoke$arity$2(G__58210,G__58211) : com.wsscode.pathom.viz.ui.expandable_tree.expandable_tree.call(null,G__58210,G__58211));
})();
return (com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2(G__58208,G__58209) : com.wsscode.pathom.viz.ui.kit.panel.call(null,G__58208,G__58209));
})():null),com.wsscode.pathom.viz.index_explorer.render_plugin_extension(this$,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","plugin-render-to-resolver-menu","com.wsscode.pathom.viz.index-explorer/plugin-render-to-resolver-menu",-1265412227))], 0));
var G__58201 = (cljs.core.truth_(input)?(function (){var resolver_attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(com.wsscode.pathom.viz.index_explorer.out_all_attributes(edn_query_language.core.query__GT_ast(output),input),input_SINGLEQUOTE_);
var attrs = cljs.core.vals(cljs.core.update.cljs$core$IFn$_invoke$arity$5(cljs.core.select_keys(com.wsscode.pathom.viz.helpers.index_by(new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),attributes),resolver_attrs),input_SINGLEQUOTE_,cljs.core.assoc,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","center?","com.wsscode.pathom.viz.index-explorer/center?",-314133194),true));
var G__58212 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attributes","com.wsscode.pathom.viz.index-explorer/attributes",-67264281),attrs,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","graph-comm","com.wsscode.pathom.viz.index-explorer/graph-comm",-735750087),fulcro.client.primitives.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"graph-comm","graph-comm",-744729650)),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","on-show-details","com.wsscode.pathom.viz.index-explorer/on-show-details",-322180105),on_select_attribute,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","on-click-edge","com.wsscode.pathom.viz.index-explorer/on-click-edge",810811642),fulcro.client.primitives.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"select-resolver","select-resolver",43705318))], null);
return (com.wsscode.pathom.viz.index_explorer.attribute_graph.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom.viz.index_explorer.attribute_graph.cljs$core$IFn$_invoke$arity$1(G__58212) : com.wsscode.pathom.viz.index_explorer.attribute_graph.call(null,G__58212));
})():null);
return (com.wsscode.pathom.viz.ui.kit.row.cljs$core$IFn$_invoke$arity$3 ? com.wsscode.pathom.viz.ui.kit.row.cljs$core$IFn$_invoke$arity$3(G__58199,G__58200,G__58201) : com.wsscode.pathom.viz.ui.kit.row.call(null,G__58199,G__58200,G__58201));
})();
return (com.wsscode.pathom.viz.ui.kit.column.cljs$core$IFn$_invoke$arity$3 ? com.wsscode.pathom.viz.ui.kit.column.cljs$core$IFn$_invoke$arity$3(G__58196,G__58197,G__58198) : com.wsscode.pathom.viz.ui.kit.column.call(null,G__58196,G__58197,G__58198));
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__58186;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__58185;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__58184;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__58183;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__58182;
}});})(x58181_58974))
;

x58181_58974.initLocalState = ((function (x58181_58974){
return (function (){
var this$ = this;
var ret__41983__auto__ = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"graph-comm","graph-comm",-744729650),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null),new cljs.core.Keyword(null,"select-resolver","select-resolver",43705318),((function (this$,x58181_58974){
return (function (p__58213){
var map__58214 = p__58213;
var map__58214__$1 = (((((!((map__58214 == null))))?(((((map__58214.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58214.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58214):map__58214);
var resolvers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58214__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","resolvers","com.wsscode.pathom.viz.index-explorer/resolvers",-1064744669));
var map__58216 = fulcro.client.primitives.get_computed.cljs$core$IFn$_invoke$arity$1(fulcro.client.primitives.props(this$));
var map__58216__$1 = (((((!((map__58216 == null))))?(((((map__58216.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58216.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58216):map__58216);
var on_select_resolver = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58216__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","on-select-resolver","com.wsscode.pathom.viz.index-explorer/on-select-resolver",1600914463));
var G__58218 = cljs.core.first(resolvers);
return (on_select_resolver.cljs$core$IFn$_invoke$arity$1 ? on_select_resolver.cljs$core$IFn$_invoke$arity$1(G__58218) : on_select_resolver.call(null,G__58218));
});})(this$,x58181_58974))
,new cljs.core.Keyword(null,"render","render",-1408033454),((function (this$,x58181_58974){
return (function (p__58219){
var map__58220 = p__58219;
var map__58220__$1 = (((((!((map__58220 == null))))?(((((map__58220.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58220.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58220):map__58220);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58220__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var computed = fulcro.client.primitives.get_computed.cljs$core$IFn$_invoke$arity$1(fulcro.client.primitives.props(this$));
var computed__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(computed,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","graph-comm","com.wsscode.pathom.viz.index-explorer/graph-comm",-735750087),fulcro.client.primitives.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"graph-comm","graph-comm",-744729650)));
var G__58222 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),key], null);
var G__58223 = computed__$1;
return (com.wsscode.pathom.viz.index_explorer.attribute_link.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.attribute_link.cljs$core$IFn$_invoke$arity$2(G__58222,G__58223) : com.wsscode.pathom.viz.index_explorer.attribute_link.call(null,G__58222,G__58223));
});})(this$,x58181_58974))
], null);
var obj58225 = ({"fulcro$state":ret__41983__auto__});
return obj58225;
});})(x58181_58974))
;


com.wsscode.pathom.viz.index_explorer.ResolverView.prototype.constructor = com.wsscode.pathom.viz.index_explorer.ResolverView;

com.wsscode.pathom.viz.index_explorer.ResolverView.prototype.constructor.displayName = "com.wsscode.pathom.viz.index-explorer/ResolverView";

com.wsscode.pathom.viz.index_explorer.ResolverView.prototype.fulcro$isComponent = true;

var x58226_58975 = com.wsscode.pathom.viz.index_explorer.ResolverView;
x58226_58975.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x58226_58975.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x58226_58975){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".title",".title",-416997657),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),com.wsscode.pathom.viz.index_explorer.color_resolver], null),com.wsscode.pathom.viz.ui.kit.css_header,com.wsscode.pathom.viz.ui.kit.text_base], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".menu",".menu",986259874),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"white-space","white-space",-707351930),"nowrap",new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),"12px",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"auto"], null)], null)], null);
});})(x58226_58975))
;

x58226_58975.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x58226_58975){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x58226_58975))
;

x58226_58975.fulcro$client$primitives$IPreMerge$ = cljs.core.PROTOCOL_SENTINEL;

x58226_58975.fulcro$client$primitives$IPreMerge$pre_merge_STAR_$arity$2 = ((function (x58226_58975){
return (function (this$,p__58227){
var map__58228 = p__58227;
var map__58228__$1 = (((((!((map__58228 == null))))?(((((map__58228.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58228.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58228):map__58228);
var current_normalized = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58228__$1,new cljs.core.Keyword(null,"current-normalized","current-normalized",851723724));
var data_tree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58228__$1,new cljs.core.Keyword(null,"data-tree","data-tree",1311167582));
var this$__$1 = this;
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","output-tree","ui/output-tree",-491226343),cljs.core.PersistentArrayMap.EMPTY], null),current_normalized,data_tree], 0));
});})(x58226_58975))
;

x58226_58975.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x58226_58975.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x58226_58975){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x58226_58975))
;

x58226_58975.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x58226_58975.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x58226_58975){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","batch?","com.wsscode.pathom.connect/batch?",-427062659),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","output-tree","ui/output-tree",-491226343),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.ui.expandable_tree.ExpandableTree)], null)], null);
});})(x58226_58975))
;


var x58230_58976 = com.wsscode.pathom.viz.index_explorer.ResolverView.prototype;
x58230_58976.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x58230_58976.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x58230_58976){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".title",".title",-416997657),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),com.wsscode.pathom.viz.index_explorer.color_resolver], null),com.wsscode.pathom.viz.ui.kit.css_header,com.wsscode.pathom.viz.ui.kit.text_base], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".menu",".menu",986259874),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"white-space","white-space",-707351930),"nowrap",new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),"12px",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"auto"], null)], null)], null);
});})(x58230_58976))
;

x58230_58976.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x58230_58976){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x58230_58976))
;

x58230_58976.fulcro$client$primitives$IPreMerge$ = cljs.core.PROTOCOL_SENTINEL;

x58230_58976.fulcro$client$primitives$IPreMerge$pre_merge_STAR_$arity$2 = ((function (x58230_58976){
return (function (this$,p__58231){
var map__58232 = p__58231;
var map__58232__$1 = (((((!((map__58232 == null))))?(((((map__58232.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58232.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58232):map__58232);
var current_normalized = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58232__$1,new cljs.core.Keyword(null,"current-normalized","current-normalized",851723724));
var data_tree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58232__$1,new cljs.core.Keyword(null,"data-tree","data-tree",1311167582));
var this$__$1 = this;
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","output-tree","ui/output-tree",-491226343),cljs.core.PersistentArrayMap.EMPTY], null),current_normalized,data_tree], 0));
});})(x58230_58976))
;

x58230_58976.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x58230_58976.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x58230_58976){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x58230_58976))
;

x58230_58976.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x58230_58976.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x58230_58976){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","batch?","com.wsscode.pathom.connect/batch?",-427062659),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","output-tree","ui/output-tree",-491226343),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.ui.expandable_tree.ExpandableTree)], null)], null);
});})(x58230_58976))
;


com.wsscode.pathom.viz.index_explorer.ResolverView.cljs$lang$type = true;

com.wsscode.pathom.viz.index_explorer.ResolverView.cljs$lang$ctorStr = "com.wsscode.pathom.viz.index-explorer/ResolverView";

com.wsscode.pathom.viz.index_explorer.ResolverView.cljs$lang$ctorPrWriter = (function (this__43093__auto__,writer__43094__auto__,opt__43095__auto__){
return cljs.core._write(writer__43094__auto__,"com.wsscode.pathom.viz.index-explorer/ResolverView");
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
var this__43090__auto__ = this;
React.Component.apply(this__43090__auto__,arguments);

if((!((this__43090__auto__.initLocalState == null)))){
this__43090__auto__.state = this__43090__auto__.initLocalState();
} else {
this__43090__auto__.state = ({});
}

return this__43090__auto__;
});

var G__58236_58977 = com.wsscode.pathom.viz.index_explorer.MutationView.prototype;
var G__58237_58978 = React.Component.prototype;
var G__58238_58979 = fulcro.client.primitives.default_component_prototype;
goog.object.extend(G__58236_58977,G__58237_58978,G__58238_58979);
}

fulcro.client.primitives._register_component_BANG_(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","MutationView","com.wsscode.pathom.viz.index-explorer/MutationView",1198577335),com.wsscode.pathom.viz.index_explorer.MutationView);

var x58239_58980 = com.wsscode.pathom.viz.index_explorer.MutationView.prototype;
x58239_58980.render = ((function (x58239_58980){
return (function (){
var this__42008__auto__ = this;
var this$ = this__42008__auto__;
var _STAR_reconciler_STAR__orig_val__58240 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__58241 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__58242 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__58243 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__58244 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__58245 = fulcro.client.primitives.get_reconciler(this__42008__auto__);
var _STAR_depth_STAR__temp_val__58246 = (fulcro.client.primitives.depth(this__42008__auto__) + (1));
var _STAR_shared_STAR__temp_val__58247 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__42008__auto__);
var _STAR_instrument_STAR__temp_val__58248 = fulcro.client.primitives.instrument(this__42008__auto__);
var _STAR_parent_STAR__temp_val__58249 = this__42008__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__58245;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__58246;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__58247;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__58248;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__58249;

try{var map__58250 = fulcro.client.primitives.props(this$);
var map__58250__$1 = (((((!((map__58250 == null))))?(((((map__58250.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58250.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58250):map__58250);
var sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58250__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58250__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795));
var output = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58250__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303));
var mutation_params_tree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58250__$1,new cljs.core.Keyword("ui","mutation-params-tree","ui/mutation-params-tree",-1729279365));
var mutation_output_tree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58250__$1,new cljs.core.Keyword("ui","mutation-output-tree","ui/mutation-output-tree",-208190980));
var G__58252 = com.wsscode.pathom.viz.ui.kit.gc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".flex",".flex",-73425686)], 0));
var G__58253 = fulcro.client.localized_dom.h1.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".title",".title",-416997657),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)], 0));
var G__58254 = (function (){var G__58255 = com.wsscode.pathom.viz.ui.kit.gc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".flex",".flex",-73425686),new cljs.core.Keyword(null,".scrollbars",".scrollbars",-1193970120),new cljs.core.Keyword(null,".nowrap",".nowrap",-784360447)], 0));
var G__58256 = fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.wsscode.pathom.viz.ui.kit.gc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".flex",".flex",-73425686)], 0)),(cljs.core.truth_(params)?(function (){var G__58259 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","panel-title","com.wsscode.pathom.viz.ui.kit/panel-title",1529445284),"Params"], null);
var G__58260 = (function (){var G__58261 = mutation_params_tree;
var G__58262 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.viz.ui.expandable-tree","root","com.wsscode.pathom.viz.ui.expandable-tree/root",-788021653),edn_query_language.core.query__GT_ast(params),new cljs.core.Keyword("com.wsscode.pathom.viz.ui.expandable-tree","render","com.wsscode.pathom.viz.ui.expandable-tree/render",918872218),fulcro.client.primitives.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"render","render",-1408033454)),new cljs.core.Keyword("com.wsscode.pathom.viz.ui.expandable-tree","sort-by","com.wsscode.pathom.viz.ui.expandable-tree/sort-by",1511051281),new cljs.core.Keyword(null,"key","key",-1516042587)], null);
return (com.wsscode.pathom.viz.ui.expandable_tree.expandable_tree.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.expandable_tree.expandable_tree.cljs$core$IFn$_invoke$arity$2(G__58261,G__58262) : com.wsscode.pathom.viz.ui.expandable_tree.expandable_tree.call(null,G__58261,G__58262));
})();
return (com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2(G__58259,G__58260) : com.wsscode.pathom.viz.ui.kit.panel.call(null,G__58259,G__58260));
})():null),com.wsscode.pathom.viz.index_explorer.render_plugin_extension(this$,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","plugin-render-to-mutation-view-left","com.wsscode.pathom.viz.index-explorer/plugin-render-to-mutation-view-left",-356992926))], 0));
var G__58257 = fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"24px"], null)], null)], 0));
var G__58258 = fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.wsscode.pathom.viz.ui.kit.gc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".flex",".flex",-73425686)], 0)),(cljs.core.truth_(output)?(function (){var G__58263 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","panel-title","com.wsscode.pathom.viz.ui.kit/panel-title",1529445284),"Output"], null);
var G__58264 = (function (){var G__58265 = mutation_output_tree;
var G__58266 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.viz.ui.expandable-tree","root","com.wsscode.pathom.viz.ui.expandable-tree/root",-788021653),edn_query_language.core.query__GT_ast(output),new cljs.core.Keyword("com.wsscode.pathom.viz.ui.expandable-tree","render","com.wsscode.pathom.viz.ui.expandable-tree/render",918872218),fulcro.client.primitives.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"render","render",-1408033454)),new cljs.core.Keyword("com.wsscode.pathom.viz.ui.expandable-tree","sort-by","com.wsscode.pathom.viz.ui.expandable-tree/sort-by",1511051281),new cljs.core.Keyword(null,"key","key",-1516042587)], null);
return (com.wsscode.pathom.viz.ui.expandable_tree.expandable_tree.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.expandable_tree.expandable_tree.cljs$core$IFn$_invoke$arity$2(G__58265,G__58266) : com.wsscode.pathom.viz.ui.expandable_tree.expandable_tree.call(null,G__58265,G__58266));
})();
return (com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2(G__58263,G__58264) : com.wsscode.pathom.viz.ui.kit.panel.call(null,G__58263,G__58264));
})():null),com.wsscode.pathom.viz.index_explorer.render_plugin_extension(this$,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","plugin-render-to-mutation-view-right","com.wsscode.pathom.viz.index-explorer/plugin-render-to-mutation-view-right",1791875010))], 0));
return (com.wsscode.pathom.viz.ui.kit.row.cljs$core$IFn$_invoke$arity$4 ? com.wsscode.pathom.viz.ui.kit.row.cljs$core$IFn$_invoke$arity$4(G__58255,G__58256,G__58257,G__58258) : com.wsscode.pathom.viz.ui.kit.row.call(null,G__58255,G__58256,G__58257,G__58258));
})();
return (com.wsscode.pathom.viz.ui.kit.column.cljs$core$IFn$_invoke$arity$3 ? com.wsscode.pathom.viz.ui.kit.column.cljs$core$IFn$_invoke$arity$3(G__58252,G__58253,G__58254) : com.wsscode.pathom.viz.ui.kit.column.call(null,G__58252,G__58253,G__58254));
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__58244;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__58243;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__58242;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__58241;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__58240;
}});})(x58239_58980))
;

x58239_58980.initLocalState = ((function (x58239_58980){
return (function (){
var this$ = this;
var ret__41983__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"render","render",-1408033454),((function (this$,x58239_58980){
return (function (p__58267){
var map__58268 = p__58267;
var map__58268__$1 = (((((!((map__58268 == null))))?(((((map__58268.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58268.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58268):map__58268);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58268__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var G__58270 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),key], null);
var G__58271 = fulcro.client.primitives.get_computed.cljs$core$IFn$_invoke$arity$1(fulcro.client.primitives.props(this$));
return (com.wsscode.pathom.viz.index_explorer.attribute_link.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.attribute_link.cljs$core$IFn$_invoke$arity$2(G__58270,G__58271) : com.wsscode.pathom.viz.index_explorer.attribute_link.call(null,G__58270,G__58271));
});})(this$,x58239_58980))
], null);
var obj58273 = ({"fulcro$state":ret__41983__auto__});
return obj58273;
});})(x58239_58980))
;


com.wsscode.pathom.viz.index_explorer.MutationView.prototype.constructor = com.wsscode.pathom.viz.index_explorer.MutationView;

com.wsscode.pathom.viz.index_explorer.MutationView.prototype.constructor.displayName = "com.wsscode.pathom.viz.index-explorer/MutationView";

com.wsscode.pathom.viz.index_explorer.MutationView.prototype.fulcro$isComponent = true;

var x58274_58981 = com.wsscode.pathom.viz.index_explorer.MutationView;
x58274_58981.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x58274_58981.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x58274_58981){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".title",".title",-416997657),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),com.wsscode.pathom.viz.index_explorer.color_mutation], null),com.wsscode.pathom.viz.ui.kit.css_header,com.wsscode.pathom.viz.ui.kit.text_base], null)], null);
});})(x58274_58981))
;

x58274_58981.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x58274_58981){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x58274_58981))
;

x58274_58981.fulcro$client$primitives$IPreMerge$ = cljs.core.PROTOCOL_SENTINEL;

x58274_58981.fulcro$client$primitives$IPreMerge$pre_merge_STAR_$arity$2 = ((function (x58274_58981){
return (function (this$,p__58275){
var map__58276 = p__58275;
var map__58276__$1 = (((((!((map__58276 == null))))?(((((map__58276.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58276.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58276):map__58276);
var current_normalized = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58276__$1,new cljs.core.Keyword(null,"current-normalized","current-normalized",851723724));
var data_tree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58276__$1,new cljs.core.Keyword(null,"data-tree","data-tree",1311167582));
var this$__$1 = this;
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("ui","mutation-params-tree","ui/mutation-params-tree",-1729279365),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("ui","mutation-output-tree","ui/mutation-output-tree",-208190980),cljs.core.PersistentArrayMap.EMPTY], null),current_normalized,data_tree], 0));
});})(x58274_58981))
;

x58274_58981.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x58274_58981.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x58274_58981){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutation-sym","com.wsscode.pathom.viz.index-explorer/mutation-sym",-191280951),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutation-sym","com.wsscode.pathom.viz.index-explorer/mutation-sym",-191280951).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x58274_58981))
;

x58274_58981.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x58274_58981.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x58274_58981){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutation-sym","com.wsscode.pathom.viz.index-explorer/mutation-sym",-191280951),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","mutation-params-tree","ui/mutation-params-tree",-1729279365),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.ui.expandable_tree.ExpandableTree)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","mutation-output-tree","ui/mutation-output-tree",-208190980),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.ui.expandable_tree.ExpandableTree)], null)], null);
});})(x58274_58981))
;


var x58278_58982 = com.wsscode.pathom.viz.index_explorer.MutationView.prototype;
x58278_58982.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x58278_58982.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x58278_58982){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".title",".title",-416997657),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),com.wsscode.pathom.viz.index_explorer.color_mutation], null),com.wsscode.pathom.viz.ui.kit.css_header,com.wsscode.pathom.viz.ui.kit.text_base], null)], null);
});})(x58278_58982))
;

x58278_58982.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x58278_58982){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x58278_58982))
;

x58278_58982.fulcro$client$primitives$IPreMerge$ = cljs.core.PROTOCOL_SENTINEL;

x58278_58982.fulcro$client$primitives$IPreMerge$pre_merge_STAR_$arity$2 = ((function (x58278_58982){
return (function (this$,p__58279){
var map__58280 = p__58279;
var map__58280__$1 = (((((!((map__58280 == null))))?(((((map__58280.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58280.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58280):map__58280);
var current_normalized = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58280__$1,new cljs.core.Keyword(null,"current-normalized","current-normalized",851723724));
var data_tree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58280__$1,new cljs.core.Keyword(null,"data-tree","data-tree",1311167582));
var this$__$1 = this;
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("ui","mutation-params-tree","ui/mutation-params-tree",-1729279365),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("ui","mutation-output-tree","ui/mutation-output-tree",-208190980),cljs.core.PersistentArrayMap.EMPTY], null),current_normalized,data_tree], 0));
});})(x58278_58982))
;

x58278_58982.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x58278_58982.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x58278_58982){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutation-sym","com.wsscode.pathom.viz.index-explorer/mutation-sym",-191280951),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutation-sym","com.wsscode.pathom.viz.index-explorer/mutation-sym",-191280951).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x58278_58982))
;

x58278_58982.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x58278_58982.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x58278_58982){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutation-sym","com.wsscode.pathom.viz.index-explorer/mutation-sym",-191280951),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","mutation-params-tree","ui/mutation-params-tree",-1729279365),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.ui.expandable_tree.ExpandableTree)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","mutation-output-tree","ui/mutation-output-tree",-208190980),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.ui.expandable_tree.ExpandableTree)], null)], null);
});})(x58278_58982))
;


com.wsscode.pathom.viz.index_explorer.MutationView.cljs$lang$type = true;

com.wsscode.pathom.viz.index_explorer.MutationView.cljs$lang$ctorStr = "com.wsscode.pathom.viz.index-explorer/MutationView";

com.wsscode.pathom.viz.index_explorer.MutationView.cljs$lang$ctorPrWriter = (function (this__43093__auto__,writer__43094__auto__,opt__43095__auto__){
return cljs.core._write(writer__43094__auto__,"com.wsscode.pathom.viz.index-explorer/MutationView");
});
goog.object.set(com.wsscode.pathom.viz.index_explorer.MutationView,"contextType",com.wsscode.pathom.viz.index_explorer.ExtensionContext);
com.wsscode.pathom.viz.index_explorer.mutation_view = fulcro.client.primitives.factory.cljs$core$IFn$_invoke$arity$2(com.wsscode.pathom.viz.index_explorer.MutationView,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581)], null));
com.wsscode.pathom.viz.index_explorer.realize_references = (function com$wsscode$pathom$viz$index_explorer$realize_references(state,coll){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__58282_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,p1__58282_SHARP_);
}),coll);
});
com.wsscode.pathom.viz.index_explorer.max_search_results = (100);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-type","com.wsscode.pathom.viz.index-explorer/search-type",-1615224063),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-type-resolver","com.wsscode.pathom.viz.index-explorer/search-type-resolver",1588028676),"null",new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-type-mutation","com.wsscode.pathom.viz.index-explorer/search-type-mutation",-68441744),"null",new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-type-attribute","com.wsscode.pathom.viz.index-explorer/search-type-attribute",-62795524),"null"], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-type-resolver","com.wsscode.pathom.viz.index-explorer/search-type-resolver",1588028676),null,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-type-mutation","com.wsscode.pathom.viz.index-explorer/search-type-mutation",-68441744),null,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-type-attribute","com.wsscode.pathom.viz.index-explorer/search-type-attribute",-62795524),null], null), null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-value","com.wsscode.pathom.viz.index-explorer/search-value",-337129957),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-index-item","com.wsscode.pathom.viz.index-explorer/search-index-item",-560879594),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.fuzzy","string","com.wsscode.fuzzy/string",320074815),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-value","com.wsscode.pathom.viz.index-explorer/search-value",-337129957),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-type","com.wsscode.pathom.viz.index-explorer/search-type",-1615224063)], null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.fuzzy","match-hl","com.wsscode.fuzzy/match-hl",-611317739)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__58283){
return cljs.core.map_QMARK_(G__58283);
}),(function (G__58283){
return cljs.core.contains_QMARK_(G__58283,new cljs.core.Keyword("com.wsscode.fuzzy","string","com.wsscode.fuzzy/string",320074815));
}),(function (G__58283){
return cljs.core.contains_QMARK_(G__58283,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-value","com.wsscode.pathom.viz.index-explorer/search-value",-337129957));
}),(function (G__58283){
return cljs.core.contains_QMARK_(G__58283,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-type","com.wsscode.pathom.viz.index-explorer/search-type",-1615224063));
})], null),(function (G__58283){
return ((cljs.core.map_QMARK_(G__58283)) && (cljs.core.contains_QMARK_(G__58283,new cljs.core.Keyword("com.wsscode.fuzzy","string","com.wsscode.fuzzy/string",320074815))) && (cljs.core.contains_QMARK_(G__58283,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-value","com.wsscode.pathom.viz.index-explorer/search-value",-337129957))) && (cljs.core.contains_QMARK_(G__58283,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-type","com.wsscode.pathom.viz.index-explorer/search-type",-1615224063))));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.fuzzy","match-hl","com.wsscode.fuzzy/match-hl",-611317739)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.fuzzy","string","com.wsscode.fuzzy/string",320074815),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-value","com.wsscode.pathom.viz.index-explorer/search-value",-337129957),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-type","com.wsscode.pathom.viz.index-explorer/search-type",-1615224063)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.fuzzy","string","com.wsscode.fuzzy/string",320074815),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-value","com.wsscode.pathom.viz.index-explorer/search-value",-337129957),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-type","com.wsscode.pathom.viz.index-explorer/search-type",-1615224063)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.fuzzy","string","com.wsscode.fuzzy/string",320074815),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-value","com.wsscode.pathom.viz.index-explorer/search-value",-337129957),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-type","com.wsscode.pathom.viz.index-explorer/search-type",-1615224063)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.fuzzy","match-hl","com.wsscode.fuzzy/match-hl",-611317739)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("com.wsscode.fuzzy","string","com.wsscode.fuzzy/string",320074815))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-value","com.wsscode.pathom.viz.index-explorer/search-value",-337129957))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-type","com.wsscode.pathom.viz.index-explorer/search-type",-1615224063)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.fuzzy","match-hl","com.wsscode.fuzzy/match-hl",-611317739)], null)])));
com.wsscode.pathom.viz.index_explorer.active_search_QMARK_ = (function com$wsscode$pathom$viz$index_explorer$active_search_QMARK_(text){
return (cljs.core.count(text) > (2));
});
fulcro.client.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("com.wsscode.pathom.viz.index-explorer","search","com.wsscode.pathom.viz.index-explorer/search",-1081698050,null),(function (fulcro_incoming_env,_,p__58284){
var map__58285 = p__58284;
var map__58285__$1 = (((((!((map__58285 == null))))?(((((map__58285.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58285.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58285):map__58285);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58285__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","text","com.wsscode.pathom.viz.index-explorer/text",-1775290484));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var map__58287 = fulcro_incoming_env;
var map__58287__$1 = (((((!((map__58287 == null))))?(((((map__58287.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58287.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58287):map__58287);
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58287__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58287__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__58287,map__58287__$1,ref,state,map__58285,map__58285__$1,text){
return (function (){
var items = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ref,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-vector","com.wsscode.pathom.viz.index-explorer/search-vector",-471470935)));
var fuzzy_res = ((com.wsscode.pathom.viz.index_explorer.active_search_QMARK_(text))?com.wsscode.fuzzy.fuzzy_match(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.fuzzy","options","com.wsscode.fuzzy/options",773495630),items,new cljs.core.Keyword("com.wsscode.fuzzy","search-input","com.wsscode.fuzzy/search-input",897823168),text], null)):cljs.core.PersistentVector.EMPTY);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,fulcro.client.primitives.merge_component,com.wsscode.pathom.viz.index_explorer.SearchEverything,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-results","com.wsscode.pathom.viz.index-explorer/search-results",321731333),cljs.core.vec(cljs.core.take.cljs$core$IFn$_invoke$arity$2(com.wsscode.pathom.viz.index_explorer.max_search_results,fuzzy_res))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ref], null)));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.update_in,ref,cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","text","com.wsscode.pathom.viz.index-explorer/text",-1775290484),text], 0));
});})(map__58287,map__58287__$1,ref,state,map__58285,map__58285__$1,text))
], null);
})()], 0));
}));
com.wsscode.pathom.viz.index_explorer.remove_not_found = (function com$wsscode$pathom$viz$index_explorer$remove_not_found(x){
return com.wsscode.pathom.core.transduce_maps(cljs.core.remove.cljs$core$IFn$_invoke$arity$1((function (p__58289){
var vec__58290 = p__58289;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58290,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58290,(1),null);
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
var this__43090__auto__ = this;
React.Component.apply(this__43090__auto__,arguments);

if((!((this__43090__auto__.initLocalState == null)))){
this__43090__auto__.state = this__43090__auto__.initLocalState();
} else {
this__43090__auto__.state = ({});
}

return this__43090__auto__;
});

var G__58295_58983 = com.wsscode.pathom.viz.index_explorer.AllAttributesList.prototype;
var G__58296_58984 = React.Component.prototype;
var G__58297_58985 = fulcro.client.primitives.default_component_prototype;
goog.object.extend(G__58295_58983,G__58296_58984,G__58297_58985);
}

fulcro.client.primitives._register_component_BANG_(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","AllAttributesList","com.wsscode.pathom.viz.index-explorer/AllAttributesList",741873297),com.wsscode.pathom.viz.index_explorer.AllAttributesList);

var x58298_58986 = com.wsscode.pathom.viz.index_explorer.AllAttributesList.prototype;
x58298_58986.render = ((function (x58298_58986){
return (function (){
var this__42008__auto__ = this;
var this$ = this__42008__auto__;
var _STAR_reconciler_STAR__orig_val__58299 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__58300 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__58301 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__58302 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__58303 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__58304 = fulcro.client.primitives.get_reconciler(this__42008__auto__);
var _STAR_depth_STAR__temp_val__58305 = (fulcro.client.primitives.depth(this__42008__auto__) + (1));
var _STAR_shared_STAR__temp_val__58306 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__42008__auto__);
var _STAR_instrument_STAR__temp_val__58307 = fulcro.client.primitives.instrument(this__42008__auto__);
var _STAR_parent_STAR__temp_val__58308 = this__42008__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__58304;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__58305;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__58306;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__58307;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__58308;

try{var map__58309 = fulcro.client.primitives.props(this$);
var map__58309__$1 = (((((!((map__58309 == null))))?(((((map__58309.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58309.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58309):map__58309);
var props = map__58309__$1;
var attributes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58309__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attributes","com.wsscode.pathom.viz.index-explorer/attributes",-67264281));
var computed = fulcro.client.primitives.get_computed.cljs$core$IFn$_invoke$arity$1(this$);
var G__58311 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(props,new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","title","com.wsscode.pathom.viz.ui.kit/title",-1326329402),"Attributes");
var G__58312 = fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__58313 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),cljs.core.PersistentHashSet.EMPTY], null);
var G__58314 = computed;
return (com.wsscode.pathom.viz.index_explorer.attribute_link.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.attribute_link.cljs$core$IFn$_invoke$arity$2(G__58313,G__58314) : com.wsscode.pathom.viz.index_explorer.attribute_link.call(null,G__58313,G__58314));
})(),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.filter.cljs$core$IFn$_invoke$arity$1(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword_QMARK_,new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075))),cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (G__58311,map__58309,map__58309__$1,props,attributes,computed,_STAR_reconciler_STAR__orig_val__58299,_STAR_depth_STAR__orig_val__58300,_STAR_shared_STAR__orig_val__58301,_STAR_instrument_STAR__orig_val__58302,_STAR_parent_STAR__orig_val__58303,_STAR_reconciler_STAR__temp_val__58304,_STAR_depth_STAR__temp_val__58305,_STAR_shared_STAR__temp_val__58306,_STAR_instrument_STAR__temp_val__58307,_STAR_parent_STAR__temp_val__58308,this$,this__42008__auto__,x58298_58986){
return (function (p__58315){
var map__58316 = p__58315;
var map__58316__$1 = (((((!((map__58316 == null))))?(((((map__58316.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58316.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58316):map__58316);
var attribute = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58316__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075));
var G__58318 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),attribute,new cljs.core.Keyword(null,"react-key","react-key",1337881348),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attribute], 0))], null);
var G__58319 = computed;
return (com.wsscode.pathom.viz.index_explorer.attribute_link.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.attribute_link.cljs$core$IFn$_invoke$arity$2(G__58318,G__58319) : com.wsscode.pathom.viz.index_explorer.attribute_link.call(null,G__58318,G__58319));
});})(G__58311,map__58309,map__58309__$1,props,attributes,computed,_STAR_reconciler_STAR__orig_val__58299,_STAR_depth_STAR__orig_val__58300,_STAR_shared_STAR__orig_val__58301,_STAR_instrument_STAR__orig_val__58302,_STAR_parent_STAR__orig_val__58303,_STAR_reconciler_STAR__temp_val__58304,_STAR_depth_STAR__temp_val__58305,_STAR_shared_STAR__temp_val__58306,_STAR_instrument_STAR__temp_val__58307,_STAR_parent_STAR__temp_val__58308,this$,this__42008__auto__,x58298_58986))
)),attributes)], 0));
return (com.wsscode.pathom.viz.ui.kit.collapsible_box.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.collapsible_box.cljs$core$IFn$_invoke$arity$2(G__58311,G__58312) : com.wsscode.pathom.viz.ui.kit.collapsible_box.call(null,G__58311,G__58312));
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__58303;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__58302;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__58301;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__58300;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__58299;
}});})(x58298_58986))
;


com.wsscode.pathom.viz.index_explorer.AllAttributesList.prototype.constructor = com.wsscode.pathom.viz.index_explorer.AllAttributesList;

com.wsscode.pathom.viz.index_explorer.AllAttributesList.prototype.constructor.displayName = "com.wsscode.pathom.viz.index-explorer/AllAttributesList";

com.wsscode.pathom.viz.index_explorer.AllAttributesList.prototype.fulcro$isComponent = true;

var x58320_58987 = com.wsscode.pathom.viz.index_explorer.AllAttributesList;


var x58321_58988 = com.wsscode.pathom.viz.index_explorer.AllAttributesList.prototype;


com.wsscode.pathom.viz.index_explorer.AllAttributesList.cljs$lang$type = true;

com.wsscode.pathom.viz.index_explorer.AllAttributesList.cljs$lang$ctorStr = "com.wsscode.pathom.viz.index-explorer/AllAttributesList";

com.wsscode.pathom.viz.index_explorer.AllAttributesList.cljs$lang$ctorPrWriter = (function (this__43093__auto__,writer__43094__auto__,opt__43095__auto__){
return cljs.core._write(writer__43094__auto__,"com.wsscode.pathom.viz.index-explorer/AllAttributesList");
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
var this__43090__auto__ = this;
React.Component.apply(this__43090__auto__,arguments);

if((!((this__43090__auto__.initLocalState == null)))){
this__43090__auto__.state = this__43090__auto__.initLocalState();
} else {
this__43090__auto__.state = ({});
}

return this__43090__auto__;
});

var G__58325_58989 = com.wsscode.pathom.viz.index_explorer.AllResolversList.prototype;
var G__58326_58990 = React.Component.prototype;
var G__58327_58991 = fulcro.client.primitives.default_component_prototype;
goog.object.extend(G__58325_58989,G__58326_58990,G__58327_58991);
}

fulcro.client.primitives._register_component_BANG_(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","AllResolversList","com.wsscode.pathom.viz.index-explorer/AllResolversList",1219737218),com.wsscode.pathom.viz.index_explorer.AllResolversList);

var x58328_58992 = com.wsscode.pathom.viz.index_explorer.AllResolversList.prototype;
x58328_58992.render = ((function (x58328_58992){
return (function (){
var this__42008__auto__ = this;
var this$ = this__42008__auto__;
var _STAR_reconciler_STAR__orig_val__58329 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__58330 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__58331 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__58332 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__58333 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__58334 = fulcro.client.primitives.get_reconciler(this__42008__auto__);
var _STAR_depth_STAR__temp_val__58335 = (fulcro.client.primitives.depth(this__42008__auto__) + (1));
var _STAR_shared_STAR__temp_val__58336 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__42008__auto__);
var _STAR_instrument_STAR__temp_val__58337 = fulcro.client.primitives.instrument(this__42008__auto__);
var _STAR_parent_STAR__temp_val__58338 = this__42008__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__58334;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__58335;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__58336;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__58337;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__58338;

try{var map__58339 = fulcro.client.primitives.props(this$);
var map__58339__$1 = (((((!((map__58339 == null))))?(((((map__58339.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58339.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58339):map__58339);
var props = map__58339__$1;
var resolvers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58339__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","resolvers","com.wsscode.pathom.viz.index-explorer/resolvers",-1064744669));
var computed = fulcro.client.primitives.get_computed.cljs$core$IFn$_invoke$arity$1(this$);
var G__58341 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(props,new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","title","com.wsscode.pathom.viz.ui.kit/title",-1326329402),"Resolvers");
var G__58342 = fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (G__58341,map__58339,map__58339__$1,props,resolvers,computed,_STAR_reconciler_STAR__orig_val__58329,_STAR_depth_STAR__orig_val__58330,_STAR_shared_STAR__orig_val__58331,_STAR_instrument_STAR__orig_val__58332,_STAR_parent_STAR__orig_val__58333,_STAR_reconciler_STAR__temp_val__58334,_STAR_depth_STAR__temp_val__58335,_STAR_shared_STAR__temp_val__58336,_STAR_instrument_STAR__temp_val__58337,_STAR_parent_STAR__temp_val__58338,this$,this__42008__auto__,x58328_58992){
return (function (p1__58322_SHARP_){
return (com.wsscode.pathom.viz.index_explorer.resolver_link.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.resolver_link.cljs$core$IFn$_invoke$arity$2(p1__58322_SHARP_,computed) : com.wsscode.pathom.viz.index_explorer.resolver_link.call(null,p1__58322_SHARP_,computed));
});})(G__58341,map__58339,map__58339__$1,props,resolvers,computed,_STAR_reconciler_STAR__orig_val__58329,_STAR_depth_STAR__orig_val__58330,_STAR_shared_STAR__orig_val__58331,_STAR_instrument_STAR__orig_val__58332,_STAR_parent_STAR__orig_val__58333,_STAR_reconciler_STAR__temp_val__58334,_STAR_depth_STAR__temp_val__58335,_STAR_shared_STAR__temp_val__58336,_STAR_instrument_STAR__temp_val__58337,_STAR_parent_STAR__temp_val__58338,this$,this__42008__auto__,x58328_58992))
,resolvers)], 0));
return (com.wsscode.pathom.viz.ui.kit.collapsible_box.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.collapsible_box.cljs$core$IFn$_invoke$arity$2(G__58341,G__58342) : com.wsscode.pathom.viz.ui.kit.collapsible_box.call(null,G__58341,G__58342));
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__58333;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__58332;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__58331;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__58330;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__58329;
}});})(x58328_58992))
;


com.wsscode.pathom.viz.index_explorer.AllResolversList.prototype.constructor = com.wsscode.pathom.viz.index_explorer.AllResolversList;

com.wsscode.pathom.viz.index_explorer.AllResolversList.prototype.constructor.displayName = "com.wsscode.pathom.viz.index-explorer/AllResolversList";

com.wsscode.pathom.viz.index_explorer.AllResolversList.prototype.fulcro$isComponent = true;

var x58343_58993 = com.wsscode.pathom.viz.index_explorer.AllResolversList;


var x58344_58994 = com.wsscode.pathom.viz.index_explorer.AllResolversList.prototype;


com.wsscode.pathom.viz.index_explorer.AllResolversList.cljs$lang$type = true;

com.wsscode.pathom.viz.index_explorer.AllResolversList.cljs$lang$ctorStr = "com.wsscode.pathom.viz.index-explorer/AllResolversList";

com.wsscode.pathom.viz.index_explorer.AllResolversList.cljs$lang$ctorPrWriter = (function (this__43093__auto__,writer__43094__auto__,opt__43095__auto__){
return cljs.core._write(writer__43094__auto__,"com.wsscode.pathom.viz.index-explorer/AllResolversList");
});
com.wsscode.pathom.viz.index_explorer.all_resolvers_list = fulcro.client.primitives.computed_factory.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.AllResolversList);
if((typeof com !== 'undefined') && (typeof com.wsscode !== 'undefined') && (typeof com.wsscode.pathom !== 'undefined') && (typeof com.wsscode.pathom.viz !== 'undefined') && (typeof com.wsscode.pathom.viz.index_explorer !== 'undefined') && (typeof com.wsscode.pathom.viz.index_explorer.AllMutationsList !== 'undefined')){
} else {
/**
 * @constructor
 * @nocollapse
 */
com.wsscode.pathom.viz.index_explorer.AllMutationsList = (function com$wsscode$pathom$viz$index_explorer$AllMutationsList(){
var this__43090__auto__ = this;
React.Component.apply(this__43090__auto__,arguments);

if((!((this__43090__auto__.initLocalState == null)))){
this__43090__auto__.state = this__43090__auto__.initLocalState();
} else {
this__43090__auto__.state = ({});
}

return this__43090__auto__;
});

var G__58348_58995 = com.wsscode.pathom.viz.index_explorer.AllMutationsList.prototype;
var G__58349_58996 = React.Component.prototype;
var G__58350_58997 = fulcro.client.primitives.default_component_prototype;
goog.object.extend(G__58348_58995,G__58349_58996,G__58350_58997);
}

fulcro.client.primitives._register_component_BANG_(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","AllMutationsList","com.wsscode.pathom.viz.index-explorer/AllMutationsList",-1767454340),com.wsscode.pathom.viz.index_explorer.AllMutationsList);

var x58351_58998 = com.wsscode.pathom.viz.index_explorer.AllMutationsList.prototype;
x58351_58998.render = ((function (x58351_58998){
return (function (){
var this__42008__auto__ = this;
var this$ = this__42008__auto__;
var _STAR_reconciler_STAR__orig_val__58352 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__58353 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__58354 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__58355 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__58356 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__58357 = fulcro.client.primitives.get_reconciler(this__42008__auto__);
var _STAR_depth_STAR__temp_val__58358 = (fulcro.client.primitives.depth(this__42008__auto__) + (1));
var _STAR_shared_STAR__temp_val__58359 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__42008__auto__);
var _STAR_instrument_STAR__temp_val__58360 = fulcro.client.primitives.instrument(this__42008__auto__);
var _STAR_parent_STAR__temp_val__58361 = this__42008__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__58357;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__58358;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__58359;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__58360;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__58361;

try{var map__58362 = fulcro.client.primitives.props(this$);
var map__58362__$1 = (((((!((map__58362 == null))))?(((((map__58362.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58362.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58362):map__58362);
var props = map__58362__$1;
var mutations = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58362__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutations","com.wsscode.pathom.viz.index-explorer/mutations",329050290));
var computed = fulcro.client.primitives.get_computed.cljs$core$IFn$_invoke$arity$1(this$);
var G__58364 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(props,new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","title","com.wsscode.pathom.viz.ui.kit/title",-1326329402),"Mutations");
var G__58365 = fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (G__58364,map__58362,map__58362__$1,props,mutations,computed,_STAR_reconciler_STAR__orig_val__58352,_STAR_depth_STAR__orig_val__58353,_STAR_shared_STAR__orig_val__58354,_STAR_instrument_STAR__orig_val__58355,_STAR_parent_STAR__orig_val__58356,_STAR_reconciler_STAR__temp_val__58357,_STAR_depth_STAR__temp_val__58358,_STAR_shared_STAR__temp_val__58359,_STAR_instrument_STAR__temp_val__58360,_STAR_parent_STAR__temp_val__58361,this$,this__42008__auto__,x58351_58998){
return (function (p1__58345_SHARP_){
return (com.wsscode.pathom.viz.index_explorer.mutation_link.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.mutation_link.cljs$core$IFn$_invoke$arity$2(p1__58345_SHARP_,computed) : com.wsscode.pathom.viz.index_explorer.mutation_link.call(null,p1__58345_SHARP_,computed));
});})(G__58364,map__58362,map__58362__$1,props,mutations,computed,_STAR_reconciler_STAR__orig_val__58352,_STAR_depth_STAR__orig_val__58353,_STAR_shared_STAR__orig_val__58354,_STAR_instrument_STAR__orig_val__58355,_STAR_parent_STAR__orig_val__58356,_STAR_reconciler_STAR__temp_val__58357,_STAR_depth_STAR__temp_val__58358,_STAR_shared_STAR__temp_val__58359,_STAR_instrument_STAR__temp_val__58360,_STAR_parent_STAR__temp_val__58361,this$,this__42008__auto__,x58351_58998))
,mutations)], 0));
return (com.wsscode.pathom.viz.ui.kit.collapsible_box.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.collapsible_box.cljs$core$IFn$_invoke$arity$2(G__58364,G__58365) : com.wsscode.pathom.viz.ui.kit.collapsible_box.call(null,G__58364,G__58365));
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__58356;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__58355;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__58354;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__58353;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__58352;
}});})(x58351_58998))
;


com.wsscode.pathom.viz.index_explorer.AllMutationsList.prototype.constructor = com.wsscode.pathom.viz.index_explorer.AllMutationsList;

com.wsscode.pathom.viz.index_explorer.AllMutationsList.prototype.constructor.displayName = "com.wsscode.pathom.viz.index-explorer/AllMutationsList";

com.wsscode.pathom.viz.index_explorer.AllMutationsList.prototype.fulcro$isComponent = true;

var x58366_58999 = com.wsscode.pathom.viz.index_explorer.AllMutationsList;


var x58367_59000 = com.wsscode.pathom.viz.index_explorer.AllMutationsList.prototype;


com.wsscode.pathom.viz.index_explorer.AllMutationsList.cljs$lang$type = true;

com.wsscode.pathom.viz.index_explorer.AllMutationsList.cljs$lang$ctorStr = "com.wsscode.pathom.viz.index-explorer/AllMutationsList";

com.wsscode.pathom.viz.index_explorer.AllMutationsList.cljs$lang$ctorPrWriter = (function (this__43093__auto__,writer__43094__auto__,opt__43095__auto__){
return cljs.core._write(writer__43094__auto__,"com.wsscode.pathom.viz.index-explorer/AllMutationsList");
});
com.wsscode.pathom.viz.index_explorer.all_mutations_list = fulcro.client.primitives.computed_factory.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.AllMutationsList);
if((typeof com !== 'undefined') && (typeof com.wsscode !== 'undefined') && (typeof com.wsscode.pathom !== 'undefined') && (typeof com.wsscode.pathom.viz !== 'undefined') && (typeof com.wsscode.pathom.viz.index_explorer !== 'undefined') && (typeof com.wsscode.pathom.viz.index_explorer.SearchEverything !== 'undefined')){
} else {
/**
 * @constructor
 * @nocollapse
 */
com.wsscode.pathom.viz.index_explorer.SearchEverything = (function com$wsscode$pathom$viz$index_explorer$SearchEverything(){
var this__43090__auto__ = this;
React.Component.apply(this__43090__auto__,arguments);

if((!((this__43090__auto__.initLocalState == null)))){
this__43090__auto__.state = this__43090__auto__.initLocalState();
} else {
this__43090__auto__.state = ({});
}

return this__43090__auto__;
});

var G__58371_59001 = com.wsscode.pathom.viz.index_explorer.SearchEverything.prototype;
var G__58372_59002 = React.Component.prototype;
var G__58373_59003 = fulcro.client.primitives.default_component_prototype;
goog.object.extend(G__58371_59001,G__58372_59002,G__58373_59003);
}

fulcro.client.primitives._register_component_BANG_(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","SearchEverything","com.wsscode.pathom.viz.index-explorer/SearchEverything",384463028),com.wsscode.pathom.viz.index_explorer.SearchEverything);

var x58374_59004 = com.wsscode.pathom.viz.index_explorer.SearchEverything.prototype;
x58374_59004.render = ((function (x58374_59004){
return (function (){
var this__42008__auto__ = this;
var this$ = this__42008__auto__;
var _STAR_reconciler_STAR__orig_val__58375 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__58376 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__58377 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__58378 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__58379 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__58380 = fulcro.client.primitives.get_reconciler(this__42008__auto__);
var _STAR_depth_STAR__temp_val__58381 = (fulcro.client.primitives.depth(this__42008__auto__) + (1));
var _STAR_shared_STAR__temp_val__58382 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__42008__auto__);
var _STAR_instrument_STAR__temp_val__58383 = fulcro.client.primitives.instrument(this__42008__auto__);
var _STAR_parent_STAR__temp_val__58384 = this__42008__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__58380;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__58381;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__58382;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__58383;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__58384;

try{var map__58385 = fulcro.client.primitives.props(this$);
var map__58385__$1 = (((((!((map__58385 == null))))?(((((map__58385.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58385.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58385):map__58385);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58385__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","text","com.wsscode.pathom.viz.index-explorer/text",-1775290484));
var search_results = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58385__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-results","com.wsscode.pathom.viz.index-explorer/search-results",321731333));
var attributes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58385__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attributes","com.wsscode.pathom.viz.index-explorer/attributes",-67264281));
var resolvers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58385__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","resolvers","com.wsscode.pathom.viz.index-explorer/resolvers",-1064744669));
var mutations = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58385__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutations","com.wsscode.pathom.viz.index-explorer/mutations",329050290));
var collapse_attributes_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58385__$1,new cljs.core.Keyword("ui","collapse-attributes?","ui/collapse-attributes?",-1581210852));
var collapse_resolvers_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58385__$1,new cljs.core.Keyword("ui","collapse-resolvers?","ui/collapse-resolvers?",-237427285));
var collapse_mutations_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58385__$1,new cljs.core.Keyword("ui","collapse-mutations?","ui/collapse-mutations?",-1463008198));
var computed = fulcro.client.primitives.get_computed.cljs$core$IFn$_invoke$arity$1(this$);
var G__58387 = com.wsscode.pathom.viz.ui.kit.gc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".flex",".flex",-73425686)], 0));
var G__58388 = (function (){var G__58390 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Filter",new cljs.core.Keyword(null,"value","value",305978217),text,new cljs.core.Keyword(null,"onChange","onChange",-312891301),fulcro.client.primitives.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"search","search",1564939822)),new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","left-icon","com.wsscode.pathom.viz.ui.kit/left-icon",-1594855964),new cljs.core.Keyword(null,"$fa-search","$fa-search",1999917289),new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","on-clear","com.wsscode.pathom.viz.ui.kit/on-clear",-221492596),((function (G__58387,map__58385,map__58385__$1,text,search_results,attributes,resolvers,mutations,collapse_attributes_QMARK_,collapse_resolvers_QMARK_,collapse_mutations_QMARK_,computed,_STAR_reconciler_STAR__orig_val__58375,_STAR_depth_STAR__orig_val__58376,_STAR_shared_STAR__orig_val__58377,_STAR_instrument_STAR__orig_val__58378,_STAR_parent_STAR__orig_val__58379,_STAR_reconciler_STAR__temp_val__58380,_STAR_depth_STAR__temp_val__58381,_STAR_shared_STAR__temp_val__58382,_STAR_instrument_STAR__temp_val__58383,_STAR_parent_STAR__temp_val__58384,this$,this__42008__auto__,x58374_59004){
return (function (){
return fulcro.client.mutations.set_value_BANG_(this$,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","text","com.wsscode.pathom.viz.index-explorer/text",-1775290484),"");
});})(G__58387,map__58385,map__58385__$1,text,search_results,attributes,resolvers,mutations,collapse_attributes_QMARK_,collapse_resolvers_QMARK_,collapse_mutations_QMARK_,computed,_STAR_reconciler_STAR__orig_val__58375,_STAR_depth_STAR__orig_val__58376,_STAR_shared_STAR__orig_val__58377,_STAR_instrument_STAR__orig_val__58378,_STAR_parent_STAR__orig_val__58379,_STAR_reconciler_STAR__temp_val__58380,_STAR_depth_STAR__temp_val__58381,_STAR_shared_STAR__temp_val__58382,_STAR_instrument_STAR__temp_val__58383,_STAR_parent_STAR__temp_val__58384,this$,this__42008__auto__,x58374_59004))
], null);
return (com.wsscode.pathom.viz.ui.kit.text_field.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom.viz.ui.kit.text_field.cljs$core$IFn$_invoke$arity$1(G__58390) : com.wsscode.pathom.viz.ui.kit.text_field.call(null,G__58390));
})();
var G__58389 = (function (){var G__58391 = com.wsscode.pathom.viz.ui.kit.gc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".flex",".flex",-73425686),new cljs.core.Keyword(null,".scrollbars",".scrollbars",-1193970120)], 0));
var G__58392 = fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),(((!(com.wsscode.pathom.viz.index_explorer.active_search_QMARK_(text))))?"none":null)], null)], null),((com.wsscode.pathom.viz.index_explorer.active_search_QMARK_(text))?cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (G__58391,G__58387,G__58388,map__58385,map__58385__$1,text,search_results,attributes,resolvers,mutations,collapse_attributes_QMARK_,collapse_resolvers_QMARK_,collapse_mutations_QMARK_,computed,_STAR_reconciler_STAR__orig_val__58375,_STAR_depth_STAR__orig_val__58376,_STAR_shared_STAR__orig_val__58377,_STAR_instrument_STAR__orig_val__58378,_STAR_parent_STAR__orig_val__58379,_STAR_reconciler_STAR__temp_val__58380,_STAR_depth_STAR__temp_val__58381,_STAR_shared_STAR__temp_val__58382,_STAR_instrument_STAR__temp_val__58383,_STAR_parent_STAR__temp_val__58384,this$,this__42008__auto__,x58374_59004){
return (function (p__58394){
var map__58395 = p__58394;
var map__58395__$1 = (((((!((map__58395 == null))))?(((((map__58395.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58395.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58395):map__58395);
var search_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58395__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-value","com.wsscode.pathom.viz.index-explorer/search-value",-337129957));
var search_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58395__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-type","com.wsscode.pathom.viz.index-explorer/search-type",-1615224063));
var match_hl = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58395__$1,new cljs.core.Keyword("com.wsscode.fuzzy","match-hl","com.wsscode.fuzzy/match-hl",-611317739));
var G__58397 = search_type;
var G__58397__$1 = (((G__58397 instanceof cljs.core.Keyword))?G__58397.fqn:null);
switch (G__58397__$1) {
case "com.wsscode.pathom.viz.index-explorer/search-type-attribute":
var G__58398 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),search_value,new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","render","com.wsscode.pathom.viz.ui.kit/render",1024565529),((function (G__58397,G__58397__$1,map__58395,map__58395__$1,search_value,search_type,match_hl,G__58391,G__58387,G__58388,map__58385,map__58385__$1,text,search_results,attributes,resolvers,mutations,collapse_attributes_QMARK_,collapse_resolvers_QMARK_,collapse_mutations_QMARK_,computed,_STAR_reconciler_STAR__orig_val__58375,_STAR_depth_STAR__orig_val__58376,_STAR_shared_STAR__orig_val__58377,_STAR_instrument_STAR__orig_val__58378,_STAR_parent_STAR__orig_val__58379,_STAR_reconciler_STAR__temp_val__58380,_STAR_depth_STAR__temp_val__58381,_STAR_shared_STAR__temp_val__58382,_STAR_instrument_STAR__temp_val__58383,_STAR_parent_STAR__temp_val__58384,this$,this__42008__auto__,x58374_59004){
return (function (){
return fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__html","__html",674048345),match_hl], null)], null)], 0));
});})(G__58397,G__58397__$1,map__58395,map__58395__$1,search_value,search_type,match_hl,G__58391,G__58387,G__58388,map__58385,map__58385__$1,text,search_results,attributes,resolvers,mutations,collapse_attributes_QMARK_,collapse_resolvers_QMARK_,collapse_mutations_QMARK_,computed,_STAR_reconciler_STAR__orig_val__58375,_STAR_depth_STAR__orig_val__58376,_STAR_shared_STAR__orig_val__58377,_STAR_instrument_STAR__orig_val__58378,_STAR_parent_STAR__orig_val__58379,_STAR_reconciler_STAR__temp_val__58380,_STAR_depth_STAR__temp_val__58381,_STAR_shared_STAR__temp_val__58382,_STAR_instrument_STAR__temp_val__58383,_STAR_parent_STAR__temp_val__58384,this$,this__42008__auto__,x58374_59004))
], null);
var G__58399 = computed;
return (com.wsscode.pathom.viz.index_explorer.attribute_link.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.attribute_link.cljs$core$IFn$_invoke$arity$2(G__58398,G__58399) : com.wsscode.pathom.viz.index_explorer.attribute_link.call(null,G__58398,G__58399));

break;
case "com.wsscode.pathom.viz.index-explorer/search-type-resolver":
var G__58400 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),search_value,new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","render","com.wsscode.pathom.viz.ui.kit/render",1024565529),((function (G__58397,G__58397__$1,map__58395,map__58395__$1,search_value,search_type,match_hl,G__58391,G__58387,G__58388,map__58385,map__58385__$1,text,search_results,attributes,resolvers,mutations,collapse_attributes_QMARK_,collapse_resolvers_QMARK_,collapse_mutations_QMARK_,computed,_STAR_reconciler_STAR__orig_val__58375,_STAR_depth_STAR__orig_val__58376,_STAR_shared_STAR__orig_val__58377,_STAR_instrument_STAR__orig_val__58378,_STAR_parent_STAR__orig_val__58379,_STAR_reconciler_STAR__temp_val__58380,_STAR_depth_STAR__temp_val__58381,_STAR_shared_STAR__temp_val__58382,_STAR_instrument_STAR__temp_val__58383,_STAR_parent_STAR__temp_val__58384,this$,this__42008__auto__,x58374_59004){
return (function (){
return fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__html","__html",674048345),match_hl], null)], null)], 0));
});})(G__58397,G__58397__$1,map__58395,map__58395__$1,search_value,search_type,match_hl,G__58391,G__58387,G__58388,map__58385,map__58385__$1,text,search_results,attributes,resolvers,mutations,collapse_attributes_QMARK_,collapse_resolvers_QMARK_,collapse_mutations_QMARK_,computed,_STAR_reconciler_STAR__orig_val__58375,_STAR_depth_STAR__orig_val__58376,_STAR_shared_STAR__orig_val__58377,_STAR_instrument_STAR__orig_val__58378,_STAR_parent_STAR__orig_val__58379,_STAR_reconciler_STAR__temp_val__58380,_STAR_depth_STAR__temp_val__58381,_STAR_shared_STAR__temp_val__58382,_STAR_instrument_STAR__temp_val__58383,_STAR_parent_STAR__temp_val__58384,this$,this__42008__auto__,x58374_59004))
], null);
var G__58401 = computed;
return (com.wsscode.pathom.viz.index_explorer.resolver_link.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.resolver_link.cljs$core$IFn$_invoke$arity$2(G__58400,G__58401) : com.wsscode.pathom.viz.index_explorer.resolver_link.call(null,G__58400,G__58401));

break;
case "com.wsscode.pathom.viz.index-explorer/search-type-mutation":
var G__58402 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),search_value,new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","render","com.wsscode.pathom.viz.ui.kit/render",1024565529),((function (G__58397,G__58397__$1,map__58395,map__58395__$1,search_value,search_type,match_hl,G__58391,G__58387,G__58388,map__58385,map__58385__$1,text,search_results,attributes,resolvers,mutations,collapse_attributes_QMARK_,collapse_resolvers_QMARK_,collapse_mutations_QMARK_,computed,_STAR_reconciler_STAR__orig_val__58375,_STAR_depth_STAR__orig_val__58376,_STAR_shared_STAR__orig_val__58377,_STAR_instrument_STAR__orig_val__58378,_STAR_parent_STAR__orig_val__58379,_STAR_reconciler_STAR__temp_val__58380,_STAR_depth_STAR__temp_val__58381,_STAR_shared_STAR__temp_val__58382,_STAR_instrument_STAR__temp_val__58383,_STAR_parent_STAR__temp_val__58384,this$,this__42008__auto__,x58374_59004){
return (function (){
return fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__html","__html",674048345),match_hl], null)], null)], 0));
});})(G__58397,G__58397__$1,map__58395,map__58395__$1,search_value,search_type,match_hl,G__58391,G__58387,G__58388,map__58385,map__58385__$1,text,search_results,attributes,resolvers,mutations,collapse_attributes_QMARK_,collapse_resolvers_QMARK_,collapse_mutations_QMARK_,computed,_STAR_reconciler_STAR__orig_val__58375,_STAR_depth_STAR__orig_val__58376,_STAR_shared_STAR__orig_val__58377,_STAR_instrument_STAR__orig_val__58378,_STAR_parent_STAR__orig_val__58379,_STAR_reconciler_STAR__temp_val__58380,_STAR_depth_STAR__temp_val__58381,_STAR_shared_STAR__temp_val__58382,_STAR_instrument_STAR__temp_val__58383,_STAR_parent_STAR__temp_val__58384,this$,this__42008__auto__,x58374_59004))
], null);
var G__58403 = computed;
return (com.wsscode.pathom.viz.index_explorer.mutation_link.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.mutation_link.cljs$core$IFn$_invoke$arity$2(G__58402,G__58403) : com.wsscode.pathom.viz.index_explorer.mutation_link.call(null,G__58402,G__58403));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__58397__$1)].join('')));

}
});})(G__58391,G__58387,G__58388,map__58385,map__58385__$1,text,search_results,attributes,resolvers,mutations,collapse_attributes_QMARK_,collapse_resolvers_QMARK_,collapse_mutations_QMARK_,computed,_STAR_reconciler_STAR__orig_val__58375,_STAR_depth_STAR__orig_val__58376,_STAR_shared_STAR__orig_val__58377,_STAR_instrument_STAR__orig_val__58378,_STAR_parent_STAR__orig_val__58379,_STAR_reconciler_STAR__temp_val__58380,_STAR_depth_STAR__temp_val__58381,_STAR_shared_STAR__temp_val__58382,_STAR_instrument_STAR__temp_val__58383,_STAR_parent_STAR__temp_val__58384,this$,this__42008__auto__,x58374_59004))
)),search_results):null)], 0));
var G__58393 = fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),(((cljs.core.count(text) > (2)))?"none":null)], null)], null),(function (){var G__58404 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attributes","com.wsscode.pathom.viz.index-explorer/attributes",-67264281),attributes,new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","collapsed?","com.wsscode.pathom.viz.ui.kit/collapsed?",301612965),collapse_attributes_QMARK_,new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","on-toggle","com.wsscode.pathom.viz.ui.kit/on-toggle",629501911),fulcro.client.primitives.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"toggle-attribute-collapse","toggle-attribute-collapse",1927565782))], null);
var G__58405 = computed;
return (com.wsscode.pathom.viz.index_explorer.all_attributes_list.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.all_attributes_list.cljs$core$IFn$_invoke$arity$2(G__58404,G__58405) : com.wsscode.pathom.viz.index_explorer.all_attributes_list.call(null,G__58404,G__58405));
})(),(function (){var G__58406 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","resolvers","com.wsscode.pathom.viz.index-explorer/resolvers",-1064744669),resolvers,new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","collapsed?","com.wsscode.pathom.viz.ui.kit/collapsed?",301612965),collapse_resolvers_QMARK_,new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","on-toggle","com.wsscode.pathom.viz.ui.kit/on-toggle",629501911),fulcro.client.primitives.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"toggle-resolver-collapse","toggle-resolver-collapse",-1738038560))], null);
var G__58407 = computed;
return (com.wsscode.pathom.viz.index_explorer.all_resolvers_list.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.all_resolvers_list.cljs$core$IFn$_invoke$arity$2(G__58406,G__58407) : com.wsscode.pathom.viz.index_explorer.all_resolvers_list.call(null,G__58406,G__58407));
})(),(function (){var G__58408 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutations","com.wsscode.pathom.viz.index-explorer/mutations",329050290),mutations,new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","collapsed?","com.wsscode.pathom.viz.ui.kit/collapsed?",301612965),collapse_mutations_QMARK_,new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","on-toggle","com.wsscode.pathom.viz.ui.kit/on-toggle",629501911),fulcro.client.primitives.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"toggle-mutation-collapse","toggle-mutation-collapse",-331645814))], null);
var G__58409 = computed;
return (com.wsscode.pathom.viz.index_explorer.all_mutations_list.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.all_mutations_list.cljs$core$IFn$_invoke$arity$2(G__58408,G__58409) : com.wsscode.pathom.viz.index_explorer.all_mutations_list.call(null,G__58408,G__58409));
})()], 0));
return (com.wsscode.pathom.viz.ui.kit.column.cljs$core$IFn$_invoke$arity$3 ? com.wsscode.pathom.viz.ui.kit.column.cljs$core$IFn$_invoke$arity$3(G__58391,G__58392,G__58393) : com.wsscode.pathom.viz.ui.kit.column.call(null,G__58391,G__58392,G__58393));
})();
return (com.wsscode.pathom.viz.ui.kit.column.cljs$core$IFn$_invoke$arity$3 ? com.wsscode.pathom.viz.ui.kit.column.cljs$core$IFn$_invoke$arity$3(G__58387,G__58388,G__58389) : com.wsscode.pathom.viz.ui.kit.column.call(null,G__58387,G__58388,G__58389));
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__58379;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__58378;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__58377;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__58376;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__58375;
}});})(x58374_59004))
;

x58374_59004.initLocalState = ((function (x58374_59004){
return (function (){
var this$ = this;
var ret__41983__auto__ = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"search","search",1564939822),((function (this$,x58374_59004){
return (function (p1__58368_SHARP_){
return fulcro.client.primitives.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("com.wsscode.pathom.viz.index-explorer","search","com.wsscode.pathom.viz.index-explorer/search",-1081698050,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","text","com.wsscode.pathom.viz.index-explorer/text",-1775290484),null,(1),null)),(new cljs.core.List(null,com.wsscode.pathom.viz.helpers.target_value(p1__58368_SHARP_),null,(1),null)))))),null,(1),null)))))], null));
});})(this$,x58374_59004))
,new cljs.core.Keyword(null,"toggle-attribute-collapse","toggle-attribute-collapse",1927565782),((function (this$,x58374_59004){
return (function (){
return fulcro.client.mutations.toggle_BANG_(this$,new cljs.core.Keyword("ui","collapse-attributes?","ui/collapse-attributes?",-1581210852));
});})(this$,x58374_59004))
,new cljs.core.Keyword(null,"toggle-resolver-collapse","toggle-resolver-collapse",-1738038560),((function (this$,x58374_59004){
return (function (){
return fulcro.client.mutations.toggle_BANG_(this$,new cljs.core.Keyword("ui","collapse-resolvers?","ui/collapse-resolvers?",-237427285));
});})(this$,x58374_59004))
,new cljs.core.Keyword(null,"toggle-mutation-collapse","toggle-mutation-collapse",-331645814),((function (this$,x58374_59004){
return (function (){
return fulcro.client.mutations.toggle_BANG_(this$,new cljs.core.Keyword("ui","collapse-mutations?","ui/collapse-mutations?",-1463008198));
});})(this$,x58374_59004))
,new cljs.core.Keyword(null,"all-attributes","all-attributes",-1495901763),(function (){var props = fulcro.client.primitives.props(this$);
var computed = fulcro.client.primitives.get_computed.cljs$core$IFn$_invoke$arity$1(props);
return fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__58410 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),cljs.core.PersistentHashSet.EMPTY], null);
var G__58411 = computed;
return (com.wsscode.pathom.viz.index_explorer.attribute_link.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.attribute_link.cljs$core$IFn$_invoke$arity$2(G__58410,G__58411) : com.wsscode.pathom.viz.index_explorer.attribute_link.call(null,G__58410,G__58411));
})(),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.filter.cljs$core$IFn$_invoke$arity$1(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword_QMARK_,new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075))),cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (props,computed,this$,x58374_59004){
return (function (p__58412){
var map__58413 = p__58412;
var map__58413__$1 = (((((!((map__58413 == null))))?(((((map__58413.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58413.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58413):map__58413);
var attribute = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58413__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075));
var G__58415 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),attribute], null);
var G__58416 = computed;
return (com.wsscode.pathom.viz.index_explorer.attribute_link.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.attribute_link.cljs$core$IFn$_invoke$arity$2(G__58415,G__58416) : com.wsscode.pathom.viz.index_explorer.attribute_link.call(null,G__58415,G__58416));
});})(props,computed,this$,x58374_59004))
)),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attributes","com.wsscode.pathom.viz.index-explorer/attributes",-67264281).cljs$core$IFn$_invoke$arity$1(props))], 0));
})()], null);
var obj58418 = ({"fulcro$state":ret__41983__auto__});
return obj58418;
});})(x58374_59004))
;


com.wsscode.pathom.viz.index_explorer.SearchEverything.prototype.constructor = com.wsscode.pathom.viz.index_explorer.SearchEverything;

com.wsscode.pathom.viz.index_explorer.SearchEverything.prototype.constructor.displayName = "com.wsscode.pathom.viz.index-explorer/SearchEverything";

com.wsscode.pathom.viz.index_explorer.SearchEverything.prototype.fulcro$isComponent = true;

var x58419_59006 = com.wsscode.pathom.viz.index_explorer.SearchEverything;
x58419_59006.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x58419_59006.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x58419_59006){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"flex","flex",-1425124628),"1",new cljs.core.Keyword(null,"white-space","white-space",-707351930),"nowrap",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"auto"], null)], null)], null);
});})(x58419_59006))
;

x58419_59006.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x58419_59006){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x58419_59006))
;

x58419_59006.fulcro$client$primitives$IPreMerge$ = cljs.core.PROTOCOL_SENTINEL;

x58419_59006.fulcro$client$primitives$IPreMerge$pre_merge_STAR_$arity$2 = ((function (x58419_59006){
return (function (this$,p__58420){
var map__58421 = p__58420;
var map__58421__$1 = (((((!((map__58421 == null))))?(((((map__58421.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58421.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58421):map__58421);
var current_normalized = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58421__$1,new cljs.core.Keyword(null,"current-normalized","current-normalized",851723724));
var data_tree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58421__$1,new cljs.core.Keyword(null,"data-tree","data-tree",1311167582));
var this$__$1 = this;
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625),cljs.core.random_uuid(),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","text","com.wsscode.pathom.viz.index-explorer/text",-1775290484),"",new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-results","com.wsscode.pathom.viz.index-explorer/search-results",321731333),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword("ui","collapse-attributes?","ui/collapse-attributes?",-1581210852),false,new cljs.core.Keyword("ui","collapse-resolvers?","ui/collapse-resolvers?",-237427285),false,new cljs.core.Keyword("ui","collapse-mutations?","ui/collapse-mutations?",-1463008198),false], null),current_normalized,data_tree], 0));
});})(x58419_59006))
;

x58419_59006.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x58419_59006.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x58419_59006){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x58419_59006))
;

x58419_59006.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x58419_59006.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x58419_59006){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","text","com.wsscode.pathom.viz.index-explorer/text",-1775290484),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-results","com.wsscode.pathom.viz.index-explorer/search-results",321731333),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.fuzzy","string","com.wsscode.fuzzy/string",320074815),new cljs.core.Keyword("com.wsscode.fuzzy","match-hl","com.wsscode.fuzzy/match-hl",-611317739),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-type","com.wsscode.pathom.viz.index-explorer/search-type",-1615224063),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-value","com.wsscode.pathom.viz.index-explorer/search-value",-337129957)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attributes","com.wsscode.pathom.viz.index-explorer/attributes",-67264281),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","resolvers","com.wsscode.pathom.viz.index-explorer/resolvers",-1064744669),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutations","com.wsscode.pathom.viz.index-explorer/mutations",329050290),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581)], null)], null),new cljs.core.Keyword("ui","collapse-attributes?","ui/collapse-attributes?",-1581210852),new cljs.core.Keyword("ui","collapse-resolvers?","ui/collapse-resolvers?",-237427285),new cljs.core.Keyword("ui","collapse-mutations?","ui/collapse-mutations?",-1463008198)], null);
});})(x58419_59006))
;


var x58423_59007 = com.wsscode.pathom.viz.index_explorer.SearchEverything.prototype;
x58423_59007.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x58423_59007.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x58423_59007){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"flex","flex",-1425124628),"1",new cljs.core.Keyword(null,"white-space","white-space",-707351930),"nowrap",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"auto"], null)], null)], null);
});})(x58423_59007))
;

x58423_59007.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x58423_59007){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x58423_59007))
;

x58423_59007.fulcro$client$primitives$IPreMerge$ = cljs.core.PROTOCOL_SENTINEL;

x58423_59007.fulcro$client$primitives$IPreMerge$pre_merge_STAR_$arity$2 = ((function (x58423_59007){
return (function (this$,p__58424){
var map__58425 = p__58424;
var map__58425__$1 = (((((!((map__58425 == null))))?(((((map__58425.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58425.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58425):map__58425);
var current_normalized = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58425__$1,new cljs.core.Keyword(null,"current-normalized","current-normalized",851723724));
var data_tree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58425__$1,new cljs.core.Keyword(null,"data-tree","data-tree",1311167582));
var this$__$1 = this;
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625),cljs.core.random_uuid(),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","text","com.wsscode.pathom.viz.index-explorer/text",-1775290484),"",new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-results","com.wsscode.pathom.viz.index-explorer/search-results",321731333),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword("ui","collapse-attributes?","ui/collapse-attributes?",-1581210852),false,new cljs.core.Keyword("ui","collapse-resolvers?","ui/collapse-resolvers?",-237427285),false,new cljs.core.Keyword("ui","collapse-mutations?","ui/collapse-mutations?",-1463008198),false], null),current_normalized,data_tree], 0));
});})(x58423_59007))
;

x58423_59007.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x58423_59007.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x58423_59007){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x58423_59007))
;

x58423_59007.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x58423_59007.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x58423_59007){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","text","com.wsscode.pathom.viz.index-explorer/text",-1775290484),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-results","com.wsscode.pathom.viz.index-explorer/search-results",321731333),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.fuzzy","string","com.wsscode.fuzzy/string",320074815),new cljs.core.Keyword("com.wsscode.fuzzy","match-hl","com.wsscode.fuzzy/match-hl",-611317739),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-type","com.wsscode.pathom.viz.index-explorer/search-type",-1615224063),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-value","com.wsscode.pathom.viz.index-explorer/search-value",-337129957)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attributes","com.wsscode.pathom.viz.index-explorer/attributes",-67264281),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","resolvers","com.wsscode.pathom.viz.index-explorer/resolvers",-1064744669),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutations","com.wsscode.pathom.viz.index-explorer/mutations",329050290),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581)], null)], null),new cljs.core.Keyword("ui","collapse-attributes?","ui/collapse-attributes?",-1581210852),new cljs.core.Keyword("ui","collapse-resolvers?","ui/collapse-resolvers?",-237427285),new cljs.core.Keyword("ui","collapse-mutations?","ui/collapse-mutations?",-1463008198)], null);
});})(x58423_59007))
;


com.wsscode.pathom.viz.index_explorer.SearchEverything.cljs$lang$type = true;

com.wsscode.pathom.viz.index_explorer.SearchEverything.cljs$lang$ctorStr = "com.wsscode.pathom.viz.index-explorer/SearchEverything";

com.wsscode.pathom.viz.index_explorer.SearchEverything.cljs$lang$ctorPrWriter = (function (this__43093__auto__,writer__43094__auto__,opt__43095__auto__){
return cljs.core._write(writer__43094__auto__,"com.wsscode.pathom.viz.index-explorer/SearchEverything");
});
com.wsscode.pathom.viz.index_explorer.search_everything = fulcro.client.primitives.computed_factory.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.SearchEverything);
if((typeof com !== 'undefined') && (typeof com.wsscode !== 'undefined') && (typeof com.wsscode.pathom !== 'undefined') && (typeof com.wsscode.pathom.viz !== 'undefined') && (typeof com.wsscode.pathom.viz.index_explorer !== 'undefined') && (typeof com.wsscode.pathom.viz.index_explorer.AttributeMismatchPanel !== 'undefined')){
} else {
/**
 * @constructor
 * @nocollapse
 */
com.wsscode.pathom.viz.index_explorer.AttributeMismatchPanel = (function com$wsscode$pathom$viz$index_explorer$AttributeMismatchPanel(){
var this__43090__auto__ = this;
React.Component.apply(this__43090__auto__,arguments);

if((!((this__43090__auto__.initLocalState == null)))){
this__43090__auto__.state = this__43090__auto__.initLocalState();
} else {
this__43090__auto__.state = ({});
}

return this__43090__auto__;
});

var G__58429_59008 = com.wsscode.pathom.viz.index_explorer.AttributeMismatchPanel.prototype;
var G__58430_59009 = React.Component.prototype;
var G__58431_59010 = fulcro.client.primitives.default_component_prototype;
goog.object.extend(G__58429_59008,G__58430_59009,G__58431_59010);
}

fulcro.client.primitives._register_component_BANG_(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","AttributeMismatchPanel","com.wsscode.pathom.viz.index-explorer/AttributeMismatchPanel",653731723),com.wsscode.pathom.viz.index_explorer.AttributeMismatchPanel);

var x58432_59011 = com.wsscode.pathom.viz.index_explorer.AttributeMismatchPanel.prototype;
x58432_59011.render = ((function (x58432_59011){
return (function (){
var this__42008__auto__ = this;
var this$ = this__42008__auto__;
var _STAR_reconciler_STAR__orig_val__58433 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__58434 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__58435 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__58436 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__58437 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__58438 = fulcro.client.primitives.get_reconciler(this__42008__auto__);
var _STAR_depth_STAR__temp_val__58439 = (fulcro.client.primitives.depth(this__42008__auto__) + (1));
var _STAR_shared_STAR__temp_val__58440 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__42008__auto__);
var _STAR_instrument_STAR__temp_val__58441 = fulcro.client.primitives.instrument(this__42008__auto__);
var _STAR_parent_STAR__temp_val__58442 = this__42008__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__58438;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__58439;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__58440;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__58441;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__58442;

try{var map__58443 = fulcro.client.primitives.props(this$);
var map__58443__$1 = (((((!((map__58443 == null))))?(((((map__58443.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58443.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58443):map__58443);
var attr_type_mismatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58443__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-type-mismatch","com.wsscode.pathom.viz.index-explorer/attr-type-mismatch",-1230484441));
var attr_mismatch_expanded = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58443__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-mismatch-expanded","com.wsscode.pathom.viz.index-explorer/attr-mismatch-expanded",1688513157));
var computed = fulcro.client.primitives.get_computed.cljs$core$IFn$_invoke$arity$1(this$);
var G__58445 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","panel-title","com.wsscode.pathom.viz.ui.kit/panel-title",1529445284),"Attributes with type mismatch"], null);
var G__58446 = (function (){var iter__4523__auto__ = ((function (G__58445,map__58443,map__58443__$1,attr_type_mismatch,attr_mismatch_expanded,computed,_STAR_reconciler_STAR__orig_val__58433,_STAR_depth_STAR__orig_val__58434,_STAR_shared_STAR__orig_val__58435,_STAR_instrument_STAR__orig_val__58436,_STAR_parent_STAR__orig_val__58437,_STAR_reconciler_STAR__temp_val__58438,_STAR_depth_STAR__temp_val__58439,_STAR_shared_STAR__temp_val__58440,_STAR_instrument_STAR__temp_val__58441,_STAR_parent_STAR__temp_val__58442,this$,this__42008__auto__,x58432_59011){
return (function com$wsscode$pathom$viz$index_explorer$iter__58447(s__58448){
return (new cljs.core.LazySeq(null,((function (G__58445,map__58443,map__58443__$1,attr_type_mismatch,attr_mismatch_expanded,computed,_STAR_reconciler_STAR__orig_val__58433,_STAR_depth_STAR__orig_val__58434,_STAR_shared_STAR__orig_val__58435,_STAR_instrument_STAR__orig_val__58436,_STAR_parent_STAR__orig_val__58437,_STAR_reconciler_STAR__temp_val__58438,_STAR_depth_STAR__temp_val__58439,_STAR_shared_STAR__temp_val__58440,_STAR_instrument_STAR__temp_val__58441,_STAR_parent_STAR__temp_val__58442,this$,this__42008__auto__,x58432_59011){
return (function (){
var s__58448__$1 = s__58448;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__58448__$1);
if(temp__5720__auto__){
var s__58448__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__58448__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__58448__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__58450 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__58449 = (0);
while(true){
if((i__58449 < size__4522__auto__)){
var map__58451 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__58449);
var map__58451__$1 = (((((!((map__58451 == null))))?(((((map__58451.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58451.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58451):map__58451);
var attribute = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58451__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075));
var attr_leaf_in = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58451__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attr-leaf-in","com.wsscode.pathom.connect/attr-leaf-in",-1959401711));
var attr_branch_in = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58451__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attr-branch-in","com.wsscode.pathom.connect/attr-branch-in",1982854732));
cljs.core.chunk_append(b__58450,(function (){var G__58453 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"react-key","react-key",1337881348),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attribute], 0)),new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","collapsed?","com.wsscode.pathom.viz.ui.kit/collapsed?",301612965),(!(cljs.core.contains_QMARK_(attr_mismatch_expanded,attribute))),new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","on-toggle","com.wsscode.pathom.viz.ui.kit/on-toggle",629501911),((function (i__58449,map__58451,map__58451__$1,attribute,attr_leaf_in,attr_branch_in,c__4521__auto__,size__4522__auto__,b__58450,s__58448__$2,temp__5720__auto__,G__58445,map__58443,map__58443__$1,attr_type_mismatch,attr_mismatch_expanded,computed,_STAR_reconciler_STAR__orig_val__58433,_STAR_depth_STAR__orig_val__58434,_STAR_shared_STAR__orig_val__58435,_STAR_instrument_STAR__orig_val__58436,_STAR_parent_STAR__orig_val__58437,_STAR_reconciler_STAR__temp_val__58438,_STAR_depth_STAR__temp_val__58439,_STAR_shared_STAR__temp_val__58440,_STAR_instrument_STAR__temp_val__58441,_STAR_parent_STAR__temp_val__58442,this$,this__42008__auto__,x58432_59011){
return (function (){
return com.wsscode.pathom.viz.helpers.update_value_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-mismatch-expanded","com.wsscode.pathom.viz.index-explorer/attr-mismatch-expanded",1688513157),com.wsscode.pathom.viz.helpers.toggle_set_item,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attribute], 0));
});})(i__58449,map__58451,map__58451__$1,attribute,attr_leaf_in,attr_branch_in,c__4521__auto__,size__4522__auto__,b__58450,s__58448__$2,temp__5720__auto__,G__58445,map__58443,map__58443__$1,attr_type_mismatch,attr_mismatch_expanded,computed,_STAR_reconciler_STAR__orig_val__58433,_STAR_depth_STAR__orig_val__58434,_STAR_shared_STAR__orig_val__58435,_STAR_instrument_STAR__orig_val__58436,_STAR_parent_STAR__orig_val__58437,_STAR_reconciler_STAR__temp_val__58438,_STAR_depth_STAR__temp_val__58439,_STAR_shared_STAR__temp_val__58440,_STAR_instrument_STAR__temp_val__58441,_STAR_parent_STAR__temp_val__58442,this$,this__42008__auto__,x58432_59011))
,new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","title","com.wsscode.pathom.viz.ui.kit/title",-1326329402),(function (){var G__58455 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),attribute], null);
var G__58456 = computed;
return (com.wsscode.pathom.viz.index_explorer.attribute_link.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.attribute_link.cljs$core$IFn$_invoke$arity$2(G__58455,G__58456) : com.wsscode.pathom.viz.index_explorer.attribute_link.call(null,G__58455,G__58456));
})()], null);
var G__58454 = fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".resolver-container",".resolver-container",925822524),(function (){var iter__4523__auto__ = ((function (i__58449,G__58453,map__58451,map__58451__$1,attribute,attr_leaf_in,attr_branch_in,c__4521__auto__,size__4522__auto__,b__58450,s__58448__$2,temp__5720__auto__,G__58445,map__58443,map__58443__$1,attr_type_mismatch,attr_mismatch_expanded,computed,_STAR_reconciler_STAR__orig_val__58433,_STAR_depth_STAR__orig_val__58434,_STAR_shared_STAR__orig_val__58435,_STAR_instrument_STAR__orig_val__58436,_STAR_parent_STAR__orig_val__58437,_STAR_reconciler_STAR__temp_val__58438,_STAR_depth_STAR__temp_val__58439,_STAR_shared_STAR__temp_val__58440,_STAR_instrument_STAR__temp_val__58441,_STAR_parent_STAR__temp_val__58442,this$,this__42008__auto__,x58432_59011){
return (function com$wsscode$pathom$viz$index_explorer$iter__58447_$_iter__58457(s__58458){
return (new cljs.core.LazySeq(null,((function (i__58449,G__58453,map__58451,map__58451__$1,attribute,attr_leaf_in,attr_branch_in,c__4521__auto__,size__4522__auto__,b__58450,s__58448__$2,temp__5720__auto__,G__58445,map__58443,map__58443__$1,attr_type_mismatch,attr_mismatch_expanded,computed,_STAR_reconciler_STAR__orig_val__58433,_STAR_depth_STAR__orig_val__58434,_STAR_shared_STAR__orig_val__58435,_STAR_instrument_STAR__orig_val__58436,_STAR_parent_STAR__orig_val__58437,_STAR_reconciler_STAR__temp_val__58438,_STAR_depth_STAR__temp_val__58439,_STAR_shared_STAR__temp_val__58440,_STAR_instrument_STAR__temp_val__58441,_STAR_parent_STAR__temp_val__58442,this$,this__42008__auto__,x58432_59011){
return (function (){
var s__58458__$1 = s__58458;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__58458__$1);
if(temp__5720__auto____$1){
var s__58458__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__58458__$2)){
var c__4521__auto____$1 = cljs.core.chunk_first(s__58458__$2);
var size__4522__auto____$1 = cljs.core.count(c__4521__auto____$1);
var b__58460 = cljs.core.chunk_buffer(size__4522__auto____$1);
if((function (){var i__58459 = (0);
while(true){
if((i__58459 < size__4522__auto____$1)){
var resolver = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto____$1,i__58459);
cljs.core.chunk_append(b__58460,(function (){var G__58461 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),resolver], null);
var G__58462 = computed;
return (com.wsscode.pathom.viz.index_explorer.resolver_link.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.resolver_link.cljs$core$IFn$_invoke$arity$2(G__58461,G__58462) : com.wsscode.pathom.viz.index_explorer.resolver_link.call(null,G__58461,G__58462));
})());

var G__59012 = (i__58459 + (1));
i__58459 = G__59012;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58460),com$wsscode$pathom$viz$index_explorer$iter__58447_$_iter__58457(cljs.core.chunk_rest(s__58458__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58460),null);
}
} else {
var resolver = cljs.core.first(s__58458__$2);
return cljs.core.cons((function (){var G__58463 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),resolver], null);
var G__58464 = computed;
return (com.wsscode.pathom.viz.index_explorer.resolver_link.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.resolver_link.cljs$core$IFn$_invoke$arity$2(G__58463,G__58464) : com.wsscode.pathom.viz.index_explorer.resolver_link.call(null,G__58463,G__58464));
})(),com$wsscode$pathom$viz$index_explorer$iter__58447_$_iter__58457(cljs.core.rest(s__58458__$2)));
}
} else {
return null;
}
break;
}
});})(i__58449,G__58453,map__58451,map__58451__$1,attribute,attr_leaf_in,attr_branch_in,c__4521__auto__,size__4522__auto__,b__58450,s__58448__$2,temp__5720__auto__,G__58445,map__58443,map__58443__$1,attr_type_mismatch,attr_mismatch_expanded,computed,_STAR_reconciler_STAR__orig_val__58433,_STAR_depth_STAR__orig_val__58434,_STAR_shared_STAR__orig_val__58435,_STAR_instrument_STAR__orig_val__58436,_STAR_parent_STAR__orig_val__58437,_STAR_reconciler_STAR__temp_val__58438,_STAR_depth_STAR__temp_val__58439,_STAR_shared_STAR__temp_val__58440,_STAR_instrument_STAR__temp_val__58441,_STAR_parent_STAR__temp_val__58442,this$,this__42008__auto__,x58432_59011))
,null,null));
});})(i__58449,G__58453,map__58451,map__58451__$1,attribute,attr_leaf_in,attr_branch_in,c__4521__auto__,size__4522__auto__,b__58450,s__58448__$2,temp__5720__auto__,G__58445,map__58443,map__58443__$1,attr_type_mismatch,attr_mismatch_expanded,computed,_STAR_reconciler_STAR__orig_val__58433,_STAR_depth_STAR__orig_val__58434,_STAR_shared_STAR__orig_val__58435,_STAR_instrument_STAR__orig_val__58436,_STAR_parent_STAR__orig_val__58437,_STAR_reconciler_STAR__temp_val__58438,_STAR_depth_STAR__temp_val__58439,_STAR_shared_STAR__temp_val__58440,_STAR_instrument_STAR__temp_val__58441,_STAR_parent_STAR__temp_val__58442,this$,this__42008__auto__,x58432_59011))
;
return iter__4523__auto__(attr_branch_in);
})(),fulcro.client.localized_dom.hr(),(function (){var iter__4523__auto__ = ((function (i__58449,G__58453,map__58451,map__58451__$1,attribute,attr_leaf_in,attr_branch_in,c__4521__auto__,size__4522__auto__,b__58450,s__58448__$2,temp__5720__auto__,G__58445,map__58443,map__58443__$1,attr_type_mismatch,attr_mismatch_expanded,computed,_STAR_reconciler_STAR__orig_val__58433,_STAR_depth_STAR__orig_val__58434,_STAR_shared_STAR__orig_val__58435,_STAR_instrument_STAR__orig_val__58436,_STAR_parent_STAR__orig_val__58437,_STAR_reconciler_STAR__temp_val__58438,_STAR_depth_STAR__temp_val__58439,_STAR_shared_STAR__temp_val__58440,_STAR_instrument_STAR__temp_val__58441,_STAR_parent_STAR__temp_val__58442,this$,this__42008__auto__,x58432_59011){
return (function com$wsscode$pathom$viz$index_explorer$iter__58447_$_iter__58465(s__58466){
return (new cljs.core.LazySeq(null,((function (i__58449,G__58453,map__58451,map__58451__$1,attribute,attr_leaf_in,attr_branch_in,c__4521__auto__,size__4522__auto__,b__58450,s__58448__$2,temp__5720__auto__,G__58445,map__58443,map__58443__$1,attr_type_mismatch,attr_mismatch_expanded,computed,_STAR_reconciler_STAR__orig_val__58433,_STAR_depth_STAR__orig_val__58434,_STAR_shared_STAR__orig_val__58435,_STAR_instrument_STAR__orig_val__58436,_STAR_parent_STAR__orig_val__58437,_STAR_reconciler_STAR__temp_val__58438,_STAR_depth_STAR__temp_val__58439,_STAR_shared_STAR__temp_val__58440,_STAR_instrument_STAR__temp_val__58441,_STAR_parent_STAR__temp_val__58442,this$,this__42008__auto__,x58432_59011){
return (function (){
var s__58466__$1 = s__58466;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__58466__$1);
if(temp__5720__auto____$1){
var s__58466__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__58466__$2)){
var c__4521__auto____$1 = cljs.core.chunk_first(s__58466__$2);
var size__4522__auto____$1 = cljs.core.count(c__4521__auto____$1);
var b__58468 = cljs.core.chunk_buffer(size__4522__auto____$1);
if((function (){var i__58467 = (0);
while(true){
if((i__58467 < size__4522__auto____$1)){
var resolver = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto____$1,i__58467);
cljs.core.chunk_append(b__58468,(function (){var G__58469 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),resolver], null);
var G__58470 = computed;
return (com.wsscode.pathom.viz.index_explorer.resolver_link.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.resolver_link.cljs$core$IFn$_invoke$arity$2(G__58469,G__58470) : com.wsscode.pathom.viz.index_explorer.resolver_link.call(null,G__58469,G__58470));
})());

var G__59013 = (i__58467 + (1));
i__58467 = G__59013;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58468),com$wsscode$pathom$viz$index_explorer$iter__58447_$_iter__58465(cljs.core.chunk_rest(s__58466__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58468),null);
}
} else {
var resolver = cljs.core.first(s__58466__$2);
return cljs.core.cons((function (){var G__58471 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),resolver], null);
var G__58472 = computed;
return (com.wsscode.pathom.viz.index_explorer.resolver_link.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.resolver_link.cljs$core$IFn$_invoke$arity$2(G__58471,G__58472) : com.wsscode.pathom.viz.index_explorer.resolver_link.call(null,G__58471,G__58472));
})(),com$wsscode$pathom$viz$index_explorer$iter__58447_$_iter__58465(cljs.core.rest(s__58466__$2)));
}
} else {
return null;
}
break;
}
});})(i__58449,G__58453,map__58451,map__58451__$1,attribute,attr_leaf_in,attr_branch_in,c__4521__auto__,size__4522__auto__,b__58450,s__58448__$2,temp__5720__auto__,G__58445,map__58443,map__58443__$1,attr_type_mismatch,attr_mismatch_expanded,computed,_STAR_reconciler_STAR__orig_val__58433,_STAR_depth_STAR__orig_val__58434,_STAR_shared_STAR__orig_val__58435,_STAR_instrument_STAR__orig_val__58436,_STAR_parent_STAR__orig_val__58437,_STAR_reconciler_STAR__temp_val__58438,_STAR_depth_STAR__temp_val__58439,_STAR_shared_STAR__temp_val__58440,_STAR_instrument_STAR__temp_val__58441,_STAR_parent_STAR__temp_val__58442,this$,this__42008__auto__,x58432_59011))
,null,null));
});})(i__58449,G__58453,map__58451,map__58451__$1,attribute,attr_leaf_in,attr_branch_in,c__4521__auto__,size__4522__auto__,b__58450,s__58448__$2,temp__5720__auto__,G__58445,map__58443,map__58443__$1,attr_type_mismatch,attr_mismatch_expanded,computed,_STAR_reconciler_STAR__orig_val__58433,_STAR_depth_STAR__orig_val__58434,_STAR_shared_STAR__orig_val__58435,_STAR_instrument_STAR__orig_val__58436,_STAR_parent_STAR__orig_val__58437,_STAR_reconciler_STAR__temp_val__58438,_STAR_depth_STAR__temp_val__58439,_STAR_shared_STAR__temp_val__58440,_STAR_instrument_STAR__temp_val__58441,_STAR_parent_STAR__temp_val__58442,this$,this__42008__auto__,x58432_59011))
;
return iter__4523__auto__(attr_leaf_in);
})()], 0));
return (com.wsscode.pathom.viz.ui.kit.raw_collapsible.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.raw_collapsible.cljs$core$IFn$_invoke$arity$2(G__58453,G__58454) : com.wsscode.pathom.viz.ui.kit.raw_collapsible.call(null,G__58453,G__58454));
})());

var G__59014 = (i__58449 + (1));
i__58449 = G__59014;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58450),com$wsscode$pathom$viz$index_explorer$iter__58447(cljs.core.chunk_rest(s__58448__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58450),null);
}
} else {
var map__58473 = cljs.core.first(s__58448__$2);
var map__58473__$1 = (((((!((map__58473 == null))))?(((((map__58473.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58473.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58473):map__58473);
var attribute = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58473__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075));
var attr_leaf_in = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58473__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attr-leaf-in","com.wsscode.pathom.connect/attr-leaf-in",-1959401711));
var attr_branch_in = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58473__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attr-branch-in","com.wsscode.pathom.connect/attr-branch-in",1982854732));
return cljs.core.cons((function (){var G__58475 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"react-key","react-key",1337881348),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attribute], 0)),new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","collapsed?","com.wsscode.pathom.viz.ui.kit/collapsed?",301612965),(!(cljs.core.contains_QMARK_(attr_mismatch_expanded,attribute))),new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","on-toggle","com.wsscode.pathom.viz.ui.kit/on-toggle",629501911),((function (map__58473,map__58473__$1,attribute,attr_leaf_in,attr_branch_in,s__58448__$2,temp__5720__auto__,G__58445,map__58443,map__58443__$1,attr_type_mismatch,attr_mismatch_expanded,computed,_STAR_reconciler_STAR__orig_val__58433,_STAR_depth_STAR__orig_val__58434,_STAR_shared_STAR__orig_val__58435,_STAR_instrument_STAR__orig_val__58436,_STAR_parent_STAR__orig_val__58437,_STAR_reconciler_STAR__temp_val__58438,_STAR_depth_STAR__temp_val__58439,_STAR_shared_STAR__temp_val__58440,_STAR_instrument_STAR__temp_val__58441,_STAR_parent_STAR__temp_val__58442,this$,this__42008__auto__,x58432_59011){
return (function (){
return com.wsscode.pathom.viz.helpers.update_value_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-mismatch-expanded","com.wsscode.pathom.viz.index-explorer/attr-mismatch-expanded",1688513157),com.wsscode.pathom.viz.helpers.toggle_set_item,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attribute], 0));
});})(map__58473,map__58473__$1,attribute,attr_leaf_in,attr_branch_in,s__58448__$2,temp__5720__auto__,G__58445,map__58443,map__58443__$1,attr_type_mismatch,attr_mismatch_expanded,computed,_STAR_reconciler_STAR__orig_val__58433,_STAR_depth_STAR__orig_val__58434,_STAR_shared_STAR__orig_val__58435,_STAR_instrument_STAR__orig_val__58436,_STAR_parent_STAR__orig_val__58437,_STAR_reconciler_STAR__temp_val__58438,_STAR_depth_STAR__temp_val__58439,_STAR_shared_STAR__temp_val__58440,_STAR_instrument_STAR__temp_val__58441,_STAR_parent_STAR__temp_val__58442,this$,this__42008__auto__,x58432_59011))
,new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","title","com.wsscode.pathom.viz.ui.kit/title",-1326329402),(function (){var G__58477 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),attribute], null);
var G__58478 = computed;
return (com.wsscode.pathom.viz.index_explorer.attribute_link.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.attribute_link.cljs$core$IFn$_invoke$arity$2(G__58477,G__58478) : com.wsscode.pathom.viz.index_explorer.attribute_link.call(null,G__58477,G__58478));
})()], null);
var G__58476 = fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".resolver-container",".resolver-container",925822524),(function (){var iter__4523__auto__ = ((function (G__58475,map__58473,map__58473__$1,attribute,attr_leaf_in,attr_branch_in,s__58448__$2,temp__5720__auto__,G__58445,map__58443,map__58443__$1,attr_type_mismatch,attr_mismatch_expanded,computed,_STAR_reconciler_STAR__orig_val__58433,_STAR_depth_STAR__orig_val__58434,_STAR_shared_STAR__orig_val__58435,_STAR_instrument_STAR__orig_val__58436,_STAR_parent_STAR__orig_val__58437,_STAR_reconciler_STAR__temp_val__58438,_STAR_depth_STAR__temp_val__58439,_STAR_shared_STAR__temp_val__58440,_STAR_instrument_STAR__temp_val__58441,_STAR_parent_STAR__temp_val__58442,this$,this__42008__auto__,x58432_59011){
return (function com$wsscode$pathom$viz$index_explorer$iter__58447_$_iter__58479(s__58480){
return (new cljs.core.LazySeq(null,((function (G__58475,map__58473,map__58473__$1,attribute,attr_leaf_in,attr_branch_in,s__58448__$2,temp__5720__auto__,G__58445,map__58443,map__58443__$1,attr_type_mismatch,attr_mismatch_expanded,computed,_STAR_reconciler_STAR__orig_val__58433,_STAR_depth_STAR__orig_val__58434,_STAR_shared_STAR__orig_val__58435,_STAR_instrument_STAR__orig_val__58436,_STAR_parent_STAR__orig_val__58437,_STAR_reconciler_STAR__temp_val__58438,_STAR_depth_STAR__temp_val__58439,_STAR_shared_STAR__temp_val__58440,_STAR_instrument_STAR__temp_val__58441,_STAR_parent_STAR__temp_val__58442,this$,this__42008__auto__,x58432_59011){
return (function (){
var s__58480__$1 = s__58480;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__58480__$1);
if(temp__5720__auto____$1){
var s__58480__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__58480__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__58480__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__58482 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__58481 = (0);
while(true){
if((i__58481 < size__4522__auto__)){
var resolver = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__58481);
cljs.core.chunk_append(b__58482,(function (){var G__58483 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),resolver], null);
var G__58484 = computed;
return (com.wsscode.pathom.viz.index_explorer.resolver_link.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.resolver_link.cljs$core$IFn$_invoke$arity$2(G__58483,G__58484) : com.wsscode.pathom.viz.index_explorer.resolver_link.call(null,G__58483,G__58484));
})());

var G__59015 = (i__58481 + (1));
i__58481 = G__59015;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58482),com$wsscode$pathom$viz$index_explorer$iter__58447_$_iter__58479(cljs.core.chunk_rest(s__58480__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58482),null);
}
} else {
var resolver = cljs.core.first(s__58480__$2);
return cljs.core.cons((function (){var G__58485 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),resolver], null);
var G__58486 = computed;
return (com.wsscode.pathom.viz.index_explorer.resolver_link.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.resolver_link.cljs$core$IFn$_invoke$arity$2(G__58485,G__58486) : com.wsscode.pathom.viz.index_explorer.resolver_link.call(null,G__58485,G__58486));
})(),com$wsscode$pathom$viz$index_explorer$iter__58447_$_iter__58479(cljs.core.rest(s__58480__$2)));
}
} else {
return null;
}
break;
}
});})(G__58475,map__58473,map__58473__$1,attribute,attr_leaf_in,attr_branch_in,s__58448__$2,temp__5720__auto__,G__58445,map__58443,map__58443__$1,attr_type_mismatch,attr_mismatch_expanded,computed,_STAR_reconciler_STAR__orig_val__58433,_STAR_depth_STAR__orig_val__58434,_STAR_shared_STAR__orig_val__58435,_STAR_instrument_STAR__orig_val__58436,_STAR_parent_STAR__orig_val__58437,_STAR_reconciler_STAR__temp_val__58438,_STAR_depth_STAR__temp_val__58439,_STAR_shared_STAR__temp_val__58440,_STAR_instrument_STAR__temp_val__58441,_STAR_parent_STAR__temp_val__58442,this$,this__42008__auto__,x58432_59011))
,null,null));
});})(G__58475,map__58473,map__58473__$1,attribute,attr_leaf_in,attr_branch_in,s__58448__$2,temp__5720__auto__,G__58445,map__58443,map__58443__$1,attr_type_mismatch,attr_mismatch_expanded,computed,_STAR_reconciler_STAR__orig_val__58433,_STAR_depth_STAR__orig_val__58434,_STAR_shared_STAR__orig_val__58435,_STAR_instrument_STAR__orig_val__58436,_STAR_parent_STAR__orig_val__58437,_STAR_reconciler_STAR__temp_val__58438,_STAR_depth_STAR__temp_val__58439,_STAR_shared_STAR__temp_val__58440,_STAR_instrument_STAR__temp_val__58441,_STAR_parent_STAR__temp_val__58442,this$,this__42008__auto__,x58432_59011))
;
return iter__4523__auto__(attr_branch_in);
})(),fulcro.client.localized_dom.hr(),(function (){var iter__4523__auto__ = ((function (G__58475,map__58473,map__58473__$1,attribute,attr_leaf_in,attr_branch_in,s__58448__$2,temp__5720__auto__,G__58445,map__58443,map__58443__$1,attr_type_mismatch,attr_mismatch_expanded,computed,_STAR_reconciler_STAR__orig_val__58433,_STAR_depth_STAR__orig_val__58434,_STAR_shared_STAR__orig_val__58435,_STAR_instrument_STAR__orig_val__58436,_STAR_parent_STAR__orig_val__58437,_STAR_reconciler_STAR__temp_val__58438,_STAR_depth_STAR__temp_val__58439,_STAR_shared_STAR__temp_val__58440,_STAR_instrument_STAR__temp_val__58441,_STAR_parent_STAR__temp_val__58442,this$,this__42008__auto__,x58432_59011){
return (function com$wsscode$pathom$viz$index_explorer$iter__58447_$_iter__58487(s__58488){
return (new cljs.core.LazySeq(null,((function (G__58475,map__58473,map__58473__$1,attribute,attr_leaf_in,attr_branch_in,s__58448__$2,temp__5720__auto__,G__58445,map__58443,map__58443__$1,attr_type_mismatch,attr_mismatch_expanded,computed,_STAR_reconciler_STAR__orig_val__58433,_STAR_depth_STAR__orig_val__58434,_STAR_shared_STAR__orig_val__58435,_STAR_instrument_STAR__orig_val__58436,_STAR_parent_STAR__orig_val__58437,_STAR_reconciler_STAR__temp_val__58438,_STAR_depth_STAR__temp_val__58439,_STAR_shared_STAR__temp_val__58440,_STAR_instrument_STAR__temp_val__58441,_STAR_parent_STAR__temp_val__58442,this$,this__42008__auto__,x58432_59011){
return (function (){
var s__58488__$1 = s__58488;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__58488__$1);
if(temp__5720__auto____$1){
var s__58488__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__58488__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__58488__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__58490 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__58489 = (0);
while(true){
if((i__58489 < size__4522__auto__)){
var resolver = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__58489);
cljs.core.chunk_append(b__58490,(function (){var G__58491 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),resolver], null);
var G__58492 = computed;
return (com.wsscode.pathom.viz.index_explorer.resolver_link.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.resolver_link.cljs$core$IFn$_invoke$arity$2(G__58491,G__58492) : com.wsscode.pathom.viz.index_explorer.resolver_link.call(null,G__58491,G__58492));
})());

var G__59016 = (i__58489 + (1));
i__58489 = G__59016;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58490),com$wsscode$pathom$viz$index_explorer$iter__58447_$_iter__58487(cljs.core.chunk_rest(s__58488__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58490),null);
}
} else {
var resolver = cljs.core.first(s__58488__$2);
return cljs.core.cons((function (){var G__58493 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),resolver], null);
var G__58494 = computed;
return (com.wsscode.pathom.viz.index_explorer.resolver_link.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.resolver_link.cljs$core$IFn$_invoke$arity$2(G__58493,G__58494) : com.wsscode.pathom.viz.index_explorer.resolver_link.call(null,G__58493,G__58494));
})(),com$wsscode$pathom$viz$index_explorer$iter__58447_$_iter__58487(cljs.core.rest(s__58488__$2)));
}
} else {
return null;
}
break;
}
});})(G__58475,map__58473,map__58473__$1,attribute,attr_leaf_in,attr_branch_in,s__58448__$2,temp__5720__auto__,G__58445,map__58443,map__58443__$1,attr_type_mismatch,attr_mismatch_expanded,computed,_STAR_reconciler_STAR__orig_val__58433,_STAR_depth_STAR__orig_val__58434,_STAR_shared_STAR__orig_val__58435,_STAR_instrument_STAR__orig_val__58436,_STAR_parent_STAR__orig_val__58437,_STAR_reconciler_STAR__temp_val__58438,_STAR_depth_STAR__temp_val__58439,_STAR_shared_STAR__temp_val__58440,_STAR_instrument_STAR__temp_val__58441,_STAR_parent_STAR__temp_val__58442,this$,this__42008__auto__,x58432_59011))
,null,null));
});})(G__58475,map__58473,map__58473__$1,attribute,attr_leaf_in,attr_branch_in,s__58448__$2,temp__5720__auto__,G__58445,map__58443,map__58443__$1,attr_type_mismatch,attr_mismatch_expanded,computed,_STAR_reconciler_STAR__orig_val__58433,_STAR_depth_STAR__orig_val__58434,_STAR_shared_STAR__orig_val__58435,_STAR_instrument_STAR__orig_val__58436,_STAR_parent_STAR__orig_val__58437,_STAR_reconciler_STAR__temp_val__58438,_STAR_depth_STAR__temp_val__58439,_STAR_shared_STAR__temp_val__58440,_STAR_instrument_STAR__temp_val__58441,_STAR_parent_STAR__temp_val__58442,this$,this__42008__auto__,x58432_59011))
;
return iter__4523__auto__(attr_leaf_in);
})()], 0));
return (com.wsscode.pathom.viz.ui.kit.raw_collapsible.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.raw_collapsible.cljs$core$IFn$_invoke$arity$2(G__58475,G__58476) : com.wsscode.pathom.viz.ui.kit.raw_collapsible.call(null,G__58475,G__58476));
})(),com$wsscode$pathom$viz$index_explorer$iter__58447(cljs.core.rest(s__58448__$2)));
}
} else {
return null;
}
break;
}
});})(G__58445,map__58443,map__58443__$1,attr_type_mismatch,attr_mismatch_expanded,computed,_STAR_reconciler_STAR__orig_val__58433,_STAR_depth_STAR__orig_val__58434,_STAR_shared_STAR__orig_val__58435,_STAR_instrument_STAR__orig_val__58436,_STAR_parent_STAR__orig_val__58437,_STAR_reconciler_STAR__temp_val__58438,_STAR_depth_STAR__temp_val__58439,_STAR_shared_STAR__temp_val__58440,_STAR_instrument_STAR__temp_val__58441,_STAR_parent_STAR__temp_val__58442,this$,this__42008__auto__,x58432_59011))
,null,null));
});})(G__58445,map__58443,map__58443__$1,attr_type_mismatch,attr_mismatch_expanded,computed,_STAR_reconciler_STAR__orig_val__58433,_STAR_depth_STAR__orig_val__58434,_STAR_shared_STAR__orig_val__58435,_STAR_instrument_STAR__orig_val__58436,_STAR_parent_STAR__orig_val__58437,_STAR_reconciler_STAR__temp_val__58438,_STAR_depth_STAR__temp_val__58439,_STAR_shared_STAR__temp_val__58440,_STAR_instrument_STAR__temp_val__58441,_STAR_parent_STAR__temp_val__58442,this$,this__42008__auto__,x58432_59011))
;
return iter__4523__auto__(attr_type_mismatch);
})();
return (com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2(G__58445,G__58446) : com.wsscode.pathom.viz.ui.kit.panel.call(null,G__58445,G__58446));
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__58437;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__58436;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__58435;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__58434;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__58433;
}});})(x58432_59011))
;


com.wsscode.pathom.viz.index_explorer.AttributeMismatchPanel.prototype.constructor = com.wsscode.pathom.viz.index_explorer.AttributeMismatchPanel;

com.wsscode.pathom.viz.index_explorer.AttributeMismatchPanel.prototype.constructor.displayName = "com.wsscode.pathom.viz.index-explorer/AttributeMismatchPanel";

com.wsscode.pathom.viz.index_explorer.AttributeMismatchPanel.prototype.fulcro$isComponent = true;

var x58495_59017 = com.wsscode.pathom.viz.index_explorer.AttributeMismatchPanel;
x58495_59017.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x58495_59017.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x58495_59017){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".resolver-container",".resolver-container",925822524),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"26px"], null)], null)], null);
});})(x58495_59017))
;

x58495_59017.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x58495_59017){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x58495_59017))
;

x58495_59017.fulcro$client$primitives$IPreMerge$ = cljs.core.PROTOCOL_SENTINEL;

x58495_59017.fulcro$client$primitives$IPreMerge$pre_merge_STAR_$arity$2 = ((function (x58495_59017){
return (function (this$,p__58496){
var map__58497 = p__58496;
var map__58497__$1 = (((((!((map__58497 == null))))?(((((map__58497.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58497.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58497):map__58497);
var current_normalized = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58497__$1,new cljs.core.Keyword(null,"current-normalized","current-normalized",851723724));
var data_tree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58497__$1,new cljs.core.Keyword(null,"data-tree","data-tree",1311167582));
var this$__$1 = this;
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-mismatch-expanded","com.wsscode.pathom.viz.index-explorer/attr-mismatch-expanded",1688513157),cljs.core.PersistentHashSet.EMPTY], null),current_normalized,data_tree], 0));
});})(x58495_59017))
;

x58495_59017.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x58495_59017.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x58495_59017){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x58495_59017))
;

x58495_59017.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x58495_59017.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x58495_59017){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-mismatch-expanded","com.wsscode.pathom.viz.index-explorer/attr-mismatch-expanded",1688513157),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-type-mismatch","com.wsscode.pathom.viz.index-explorer/attr-type-mismatch",-1230484441),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-leaf-in","com.wsscode.pathom.connect/attr-leaf-in",-1959401711),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-branch-in","com.wsscode.pathom.connect/attr-branch-in",1982854732)], null)], null)], null);
});})(x58495_59017))
;


var x58499_59018 = com.wsscode.pathom.viz.index_explorer.AttributeMismatchPanel.prototype;
x58499_59018.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x58499_59018.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x58499_59018){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".resolver-container",".resolver-container",925822524),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"26px"], null)], null)], null);
});})(x58499_59018))
;

x58499_59018.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x58499_59018){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x58499_59018))
;

x58499_59018.fulcro$client$primitives$IPreMerge$ = cljs.core.PROTOCOL_SENTINEL;

x58499_59018.fulcro$client$primitives$IPreMerge$pre_merge_STAR_$arity$2 = ((function (x58499_59018){
return (function (this$,p__58500){
var map__58501 = p__58500;
var map__58501__$1 = (((((!((map__58501 == null))))?(((((map__58501.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58501.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58501):map__58501);
var current_normalized = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58501__$1,new cljs.core.Keyword(null,"current-normalized","current-normalized",851723724));
var data_tree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58501__$1,new cljs.core.Keyword(null,"data-tree","data-tree",1311167582));
var this$__$1 = this;
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-mismatch-expanded","com.wsscode.pathom.viz.index-explorer/attr-mismatch-expanded",1688513157),cljs.core.PersistentHashSet.EMPTY], null),current_normalized,data_tree], 0));
});})(x58499_59018))
;

x58499_59018.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x58499_59018.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x58499_59018){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x58499_59018))
;

x58499_59018.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x58499_59018.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x58499_59018){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-mismatch-expanded","com.wsscode.pathom.viz.index-explorer/attr-mismatch-expanded",1688513157),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-type-mismatch","com.wsscode.pathom.viz.index-explorer/attr-type-mismatch",-1230484441),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-leaf-in","com.wsscode.pathom.connect/attr-leaf-in",-1959401711),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-branch-in","com.wsscode.pathom.connect/attr-branch-in",1982854732)], null)], null)], null);
});})(x58499_59018))
;


com.wsscode.pathom.viz.index_explorer.AttributeMismatchPanel.cljs$lang$type = true;

com.wsscode.pathom.viz.index_explorer.AttributeMismatchPanel.cljs$lang$ctorStr = "com.wsscode.pathom.viz.index-explorer/AttributeMismatchPanel";

com.wsscode.pathom.viz.index_explorer.AttributeMismatchPanel.cljs$lang$ctorPrWriter = (function (this__43093__auto__,writer__43094__auto__,opt__43095__auto__){
return cljs.core._write(writer__43094__auto__,"com.wsscode.pathom.viz.index-explorer/AttributeMismatchPanel");
});
com.wsscode.pathom.viz.index_explorer.attribute_mismatch_panel = fulcro.client.primitives.computed_factory.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.AttributeMismatchPanel);
if((typeof com !== 'undefined') && (typeof com.wsscode !== 'undefined') && (typeof com.wsscode.pathom !== 'undefined') && (typeof com.wsscode.pathom.viz !== 'undefined') && (typeof com.wsscode.pathom.viz.index_explorer !== 'undefined') && (typeof com.wsscode.pathom.viz.index_explorer.StatsView !== 'undefined')){
} else {
/**
 * @constructor
 * @nocollapse
 */
com.wsscode.pathom.viz.index_explorer.StatsView = (function com$wsscode$pathom$viz$index_explorer$StatsView(){
var this__43090__auto__ = this;
React.Component.apply(this__43090__auto__,arguments);

if((!((this__43090__auto__.initLocalState == null)))){
this__43090__auto__.state = this__43090__auto__.initLocalState();
} else {
this__43090__auto__.state = ({});
}

return this__43090__auto__;
});

var G__58505_59019 = com.wsscode.pathom.viz.index_explorer.StatsView.prototype;
var G__58506_59020 = React.Component.prototype;
var G__58507_59021 = fulcro.client.primitives.default_component_prototype;
goog.object.extend(G__58505_59019,G__58506_59020,G__58507_59021);
}

fulcro.client.primitives._register_component_BANG_(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","StatsView","com.wsscode.pathom.viz.index-explorer/StatsView",1030504264),com.wsscode.pathom.viz.index_explorer.StatsView);

var x58508_59022 = com.wsscode.pathom.viz.index_explorer.StatsView.prototype;
x58508_59022.render = ((function (x58508_59022){
return (function (){
var this__42008__auto__ = this;
var this$ = this__42008__auto__;
var _STAR_reconciler_STAR__orig_val__58509 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__58510 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__58511 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__58512 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__58513 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__58514 = fulcro.client.primitives.get_reconciler(this__42008__auto__);
var _STAR_depth_STAR__temp_val__58515 = (fulcro.client.primitives.depth(this__42008__auto__) + (1));
var _STAR_shared_STAR__temp_val__58516 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__42008__auto__);
var _STAR_instrument_STAR__temp_val__58517 = fulcro.client.primitives.instrument(this__42008__auto__);
var _STAR_parent_STAR__temp_val__58518 = this__42008__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__58514;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__58515;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__58516;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__58517;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__58518;

try{var map__58519 = fulcro.client.primitives.props(this$);
var map__58519__$1 = (((((!((map__58519 == null))))?(((((map__58519.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58519.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58519):map__58519);
var attribute_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58519__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attribute-count","com.wsscode.pathom.viz.index-explorer/attribute-count",699283957));
var mutation_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58519__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutation-count","com.wsscode.pathom.viz.index-explorer/mutation-count",-544331737));
var top_connection_hubs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58519__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","top-connection-hubs","com.wsscode.pathom.viz.index-explorer/top-connection-hubs",1843947657));
var attr_type_mismatch_join = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58519__$1,new cljs.core.Keyword(">","attr-type-mismatch-join",">/attr-type-mismatch-join",-38351640));
var idents_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58519__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","idents-count","com.wsscode.pathom.viz.index-explorer/idents-count",2076723333));
var attr_type_mismatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58519__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-type-mismatch","com.wsscode.pathom.viz.index-explorer/attr-type-mismatch",-1230484441));
var resolver_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58519__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","resolver-count","com.wsscode.pathom.viz.index-explorer/resolver-count",1252340099));
var globals_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58519__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","globals-count","com.wsscode.pathom.viz.index-explorer/globals-count",1697710019));
var attr_edges_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58519__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-edges-count","com.wsscode.pathom.viz.index-explorer/attr-edges-count",-99271495));
var computed = fulcro.client.primitives.get_computed.cljs$core$IFn$_invoke$arity$1(this$);
return fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".container",".container",-1441208944),com.wsscode.pathom.viz.ui.kit.gc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".flex",".flex",-73425686),new cljs.core.Keyword(null,".scrollbars",".scrollbars",-1193970120)], 0)),fulcro.client.localized_dom.h1.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".title",".title",-416997657),"Stats"], 0)),(function (){var G__58521 = cljs.core.PersistentArrayMap.EMPTY;
var G__58522 = fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.wsscode.pathom.viz.ui.kit.gc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".flex",".flex",-73425686)], 0)),(function (){var G__58524 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","panel-title","com.wsscode.pathom.viz.ui.kit/panel-title",1529445284),"Counters"], null);
var G__58525 = fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Attribute count: ",attribute_count], 0));
var G__58526 = fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Resolver count: ",resolver_count], 0));
var G__58527 = fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Mutation count: ",mutation_count], 0));
var G__58528 = fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Globals count: ",globals_count], 0));
var G__58529 = fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Idents count: ",idents_count], 0));
var G__58530 = fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Edges count: ",attr_edges_count], 0));
return (com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$7 ? com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$7(G__58524,G__58525,G__58526,G__58527,G__58528,G__58529,G__58530) : com.wsscode.pathom.viz.ui.kit.panel.call(null,G__58524,G__58525,G__58526,G__58527,G__58528,G__58529,G__58530));
})(),(function (){var G__58531 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","panel-title","com.wsscode.pathom.viz.ui.kit/panel-title",1529445284),"Most Connected Attributes"], null);
var G__58532 = (function (){var iter__4523__auto__ = ((function (G__58531,G__58521,map__58519,map__58519__$1,attribute_count,mutation_count,top_connection_hubs,attr_type_mismatch_join,idents_count,attr_type_mismatch,resolver_count,globals_count,attr_edges_count,computed,_STAR_reconciler_STAR__orig_val__58509,_STAR_depth_STAR__orig_val__58510,_STAR_shared_STAR__orig_val__58511,_STAR_instrument_STAR__orig_val__58512,_STAR_parent_STAR__orig_val__58513,_STAR_reconciler_STAR__temp_val__58514,_STAR_depth_STAR__temp_val__58515,_STAR_shared_STAR__temp_val__58516,_STAR_instrument_STAR__temp_val__58517,_STAR_parent_STAR__temp_val__58518,this$,this__42008__auto__,x58508_59022){
return (function com$wsscode$pathom$viz$index_explorer$iter__58533(s__58534){
return (new cljs.core.LazySeq(null,((function (G__58531,G__58521,map__58519,map__58519__$1,attribute_count,mutation_count,top_connection_hubs,attr_type_mismatch_join,idents_count,attr_type_mismatch,resolver_count,globals_count,attr_edges_count,computed,_STAR_reconciler_STAR__orig_val__58509,_STAR_depth_STAR__orig_val__58510,_STAR_shared_STAR__orig_val__58511,_STAR_instrument_STAR__orig_val__58512,_STAR_parent_STAR__orig_val__58513,_STAR_reconciler_STAR__temp_val__58514,_STAR_depth_STAR__temp_val__58515,_STAR_shared_STAR__temp_val__58516,_STAR_instrument_STAR__temp_val__58517,_STAR_parent_STAR__temp_val__58518,this$,this__42008__auto__,x58508_59022){
return (function (){
var s__58534__$1 = s__58534;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__58534__$1);
if(temp__5720__auto__){
var s__58534__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__58534__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__58534__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__58536 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__58535 = (0);
while(true){
if((i__58535 < size__4522__auto__)){
var map__58537 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__58535);
var map__58537__$1 = (((((!((map__58537 == null))))?(((((map__58537.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58537.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58537):map__58537);
var attribute = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58537__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075));
var attr_edges_count__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58537__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-edges-count","com.wsscode.pathom.viz.index-explorer/attr-edges-count",-99271495));
cljs.core.chunk_append(b__58536,(function (){var G__58539 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),attribute,new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","render","com.wsscode.pathom.viz.ui.kit/render",1024565529),((function (i__58535,map__58537,map__58537__$1,attribute,attr_edges_count__$1,c__4521__auto__,size__4522__auto__,b__58536,s__58534__$2,temp__5720__auto__,G__58531,G__58521,map__58519,map__58519__$1,attribute_count,mutation_count,top_connection_hubs,attr_type_mismatch_join,idents_count,attr_type_mismatch,resolver_count,globals_count,attr_edges_count,computed,_STAR_reconciler_STAR__orig_val__58509,_STAR_depth_STAR__orig_val__58510,_STAR_shared_STAR__orig_val__58511,_STAR_instrument_STAR__orig_val__58512,_STAR_parent_STAR__orig_val__58513,_STAR_reconciler_STAR__temp_val__58514,_STAR_depth_STAR__temp_val__58515,_STAR_shared_STAR__temp_val__58516,_STAR_instrument_STAR__temp_val__58517,_STAR_parent_STAR__temp_val__58518,this$,this__42008__auto__,x58508_59022){
return (function (){
return ["[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(attr_edges_count__$1),"] ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attribute], 0))].join('');
});})(i__58535,map__58537,map__58537__$1,attribute,attr_edges_count__$1,c__4521__auto__,size__4522__auto__,b__58536,s__58534__$2,temp__5720__auto__,G__58531,G__58521,map__58519,map__58519__$1,attribute_count,mutation_count,top_connection_hubs,attr_type_mismatch_join,idents_count,attr_type_mismatch,resolver_count,globals_count,attr_edges_count,computed,_STAR_reconciler_STAR__orig_val__58509,_STAR_depth_STAR__orig_val__58510,_STAR_shared_STAR__orig_val__58511,_STAR_instrument_STAR__orig_val__58512,_STAR_parent_STAR__orig_val__58513,_STAR_reconciler_STAR__temp_val__58514,_STAR_depth_STAR__temp_val__58515,_STAR_shared_STAR__temp_val__58516,_STAR_instrument_STAR__temp_val__58517,_STAR_parent_STAR__temp_val__58518,this$,this__42008__auto__,x58508_59022))
], null);
var G__58540 = computed;
return (com.wsscode.pathom.viz.index_explorer.attribute_link.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.attribute_link.cljs$core$IFn$_invoke$arity$2(G__58539,G__58540) : com.wsscode.pathom.viz.index_explorer.attribute_link.call(null,G__58539,G__58540));
})());

var G__59023 = (i__58535 + (1));
i__58535 = G__59023;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58536),com$wsscode$pathom$viz$index_explorer$iter__58533(cljs.core.chunk_rest(s__58534__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58536),null);
}
} else {
var map__58541 = cljs.core.first(s__58534__$2);
var map__58541__$1 = (((((!((map__58541 == null))))?(((((map__58541.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58541.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58541):map__58541);
var attribute = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58541__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075));
var attr_edges_count__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58541__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-edges-count","com.wsscode.pathom.viz.index-explorer/attr-edges-count",-99271495));
return cljs.core.cons((function (){var G__58543 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),attribute,new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","render","com.wsscode.pathom.viz.ui.kit/render",1024565529),((function (map__58541,map__58541__$1,attribute,attr_edges_count__$1,s__58534__$2,temp__5720__auto__,G__58531,G__58521,map__58519,map__58519__$1,attribute_count,mutation_count,top_connection_hubs,attr_type_mismatch_join,idents_count,attr_type_mismatch,resolver_count,globals_count,attr_edges_count,computed,_STAR_reconciler_STAR__orig_val__58509,_STAR_depth_STAR__orig_val__58510,_STAR_shared_STAR__orig_val__58511,_STAR_instrument_STAR__orig_val__58512,_STAR_parent_STAR__orig_val__58513,_STAR_reconciler_STAR__temp_val__58514,_STAR_depth_STAR__temp_val__58515,_STAR_shared_STAR__temp_val__58516,_STAR_instrument_STAR__temp_val__58517,_STAR_parent_STAR__temp_val__58518,this$,this__42008__auto__,x58508_59022){
return (function (){
return ["[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(attr_edges_count__$1),"] ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attribute], 0))].join('');
});})(map__58541,map__58541__$1,attribute,attr_edges_count__$1,s__58534__$2,temp__5720__auto__,G__58531,G__58521,map__58519,map__58519__$1,attribute_count,mutation_count,top_connection_hubs,attr_type_mismatch_join,idents_count,attr_type_mismatch,resolver_count,globals_count,attr_edges_count,computed,_STAR_reconciler_STAR__orig_val__58509,_STAR_depth_STAR__orig_val__58510,_STAR_shared_STAR__orig_val__58511,_STAR_instrument_STAR__orig_val__58512,_STAR_parent_STAR__orig_val__58513,_STAR_reconciler_STAR__temp_val__58514,_STAR_depth_STAR__temp_val__58515,_STAR_shared_STAR__temp_val__58516,_STAR_instrument_STAR__temp_val__58517,_STAR_parent_STAR__temp_val__58518,this$,this__42008__auto__,x58508_59022))
], null);
var G__58544 = computed;
return (com.wsscode.pathom.viz.index_explorer.attribute_link.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.attribute_link.cljs$core$IFn$_invoke$arity$2(G__58543,G__58544) : com.wsscode.pathom.viz.index_explorer.attribute_link.call(null,G__58543,G__58544));
})(),com$wsscode$pathom$viz$index_explorer$iter__58533(cljs.core.rest(s__58534__$2)));
}
} else {
return null;
}
break;
}
});})(G__58531,G__58521,map__58519,map__58519__$1,attribute_count,mutation_count,top_connection_hubs,attr_type_mismatch_join,idents_count,attr_type_mismatch,resolver_count,globals_count,attr_edges_count,computed,_STAR_reconciler_STAR__orig_val__58509,_STAR_depth_STAR__orig_val__58510,_STAR_shared_STAR__orig_val__58511,_STAR_instrument_STAR__orig_val__58512,_STAR_parent_STAR__orig_val__58513,_STAR_reconciler_STAR__temp_val__58514,_STAR_depth_STAR__temp_val__58515,_STAR_shared_STAR__temp_val__58516,_STAR_instrument_STAR__temp_val__58517,_STAR_parent_STAR__temp_val__58518,this$,this__42008__auto__,x58508_59022))
,null,null));
});})(G__58531,G__58521,map__58519,map__58519__$1,attribute_count,mutation_count,top_connection_hubs,attr_type_mismatch_join,idents_count,attr_type_mismatch,resolver_count,globals_count,attr_edges_count,computed,_STAR_reconciler_STAR__orig_val__58509,_STAR_depth_STAR__orig_val__58510,_STAR_shared_STAR__orig_val__58511,_STAR_instrument_STAR__orig_val__58512,_STAR_parent_STAR__orig_val__58513,_STAR_reconciler_STAR__temp_val__58514,_STAR_depth_STAR__temp_val__58515,_STAR_shared_STAR__temp_val__58516,_STAR_instrument_STAR__temp_val__58517,_STAR_parent_STAR__temp_val__58518,this$,this__42008__auto__,x58508_59022))
;
return iter__4523__auto__(top_connection_hubs);
})();
return (com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2(G__58531,G__58532) : com.wsscode.pathom.viz.ui.kit.panel.call(null,G__58531,G__58532));
})()], 0));
var G__58523 = ((cljs.core.seq(attr_type_mismatch))?fulcro.client.primitives.fragment.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"24px"], null)], null)], 0)),fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.wsscode.pathom.viz.ui.kit.gc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".flex",".flex",-73425686)], 0)),(com.wsscode.pathom.viz.index_explorer.attribute_mismatch_panel.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.attribute_mismatch_panel.cljs$core$IFn$_invoke$arity$2(attr_type_mismatch_join,computed) : com.wsscode.pathom.viz.index_explorer.attribute_mismatch_panel.call(null,attr_type_mismatch_join,computed))], 0))], 0)):null);
return (com.wsscode.pathom.viz.ui.kit.row.cljs$core$IFn$_invoke$arity$3 ? com.wsscode.pathom.viz.ui.kit.row.cljs$core$IFn$_invoke$arity$3(G__58521,G__58522,G__58523) : com.wsscode.pathom.viz.ui.kit.row.call(null,G__58521,G__58522,G__58523));
})()], 0));
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__58513;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__58512;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__58511;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__58510;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__58509;
}});})(x58508_59022))
;


com.wsscode.pathom.viz.index_explorer.StatsView.prototype.constructor = com.wsscode.pathom.viz.index_explorer.StatsView;

com.wsscode.pathom.viz.index_explorer.StatsView.prototype.constructor.displayName = "com.wsscode.pathom.viz.index-explorer/StatsView";

com.wsscode.pathom.viz.index_explorer.StatsView.prototype.fulcro$isComponent = true;

var x58545_59024 = com.wsscode.pathom.viz.index_explorer.StatsView;
x58545_59024.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x58545_59024.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x58545_59024){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),"12px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".title",".title",-416997657),com.wsscode.pathom.viz.ui.kit.text_base], null)], null);
});})(x58545_59024))
;

x58545_59024.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x58545_59024){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x58545_59024))
;

x58545_59024.fulcro$client$primitives$IPreMerge$ = cljs.core.PROTOCOL_SENTINEL;

x58545_59024.fulcro$client$primitives$IPreMerge$pre_merge_STAR_$arity$2 = ((function (x58545_59024){
return (function (this$,p__58546){
var map__58547 = p__58546;
var map__58547__$1 = (((((!((map__58547 == null))))?(((((map__58547.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58547.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58547):map__58547);
var current_normalized = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58547__$1,new cljs.core.Keyword(null,"current-normalized","current-normalized",851723724));
var data_tree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58547__$1,new cljs.core.Keyword(null,"data-tree","data-tree",1311167582));
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
});})(x58545_59024))
;

x58545_59024.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x58545_59024.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x58545_59024){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x58545_59024))
;

x58545_59024.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x58545_59024.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x58545_59024){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attribute-count","com.wsscode.pathom.viz.index-explorer/attribute-count",699283957),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","resolver-count","com.wsscode.pathom.viz.index-explorer/resolver-count",1252340099),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","globals-count","com.wsscode.pathom.viz.index-explorer/globals-count",1697710019),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","idents-count","com.wsscode.pathom.viz.index-explorer/idents-count",2076723333),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-edges-count","com.wsscode.pathom.viz.index-explorer/attr-edges-count",-99271495),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutation-count","com.wsscode.pathom.viz.index-explorer/mutation-count",-544331737),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-type-mismatch","com.wsscode.pathom.viz.index-explorer/attr-type-mismatch",-1230484441),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","top-connection-hubs","com.wsscode.pathom.viz.index-explorer/top-connection-hubs",1843947657),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-edges-count","com.wsscode.pathom.viz.index-explorer/attr-edges-count",-99271495)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(">","attr-type-mismatch-join",">/attr-type-mismatch-join",-38351640),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.AttributeMismatchPanel)], null)], null);
});})(x58545_59024))
;


var x58549_59025 = com.wsscode.pathom.viz.index_explorer.StatsView.prototype;
x58549_59025.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x58549_59025.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x58549_59025){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),"12px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".title",".title",-416997657),com.wsscode.pathom.viz.ui.kit.text_base], null)], null);
});})(x58549_59025))
;

x58549_59025.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x58549_59025){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x58549_59025))
;

x58549_59025.fulcro$client$primitives$IPreMerge$ = cljs.core.PROTOCOL_SENTINEL;

x58549_59025.fulcro$client$primitives$IPreMerge$pre_merge_STAR_$arity$2 = ((function (x58549_59025){
return (function (this$,p__58550){
var map__58551 = p__58550;
var map__58551__$1 = (((((!((map__58551 == null))))?(((((map__58551.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58551.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58551):map__58551);
var current_normalized = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58551__$1,new cljs.core.Keyword(null,"current-normalized","current-normalized",851723724));
var data_tree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58551__$1,new cljs.core.Keyword(null,"data-tree","data-tree",1311167582));
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
});})(x58549_59025))
;

x58549_59025.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x58549_59025.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x58549_59025){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x58549_59025))
;

x58549_59025.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x58549_59025.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x58549_59025){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attribute-count","com.wsscode.pathom.viz.index-explorer/attribute-count",699283957),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","resolver-count","com.wsscode.pathom.viz.index-explorer/resolver-count",1252340099),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","globals-count","com.wsscode.pathom.viz.index-explorer/globals-count",1697710019),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","idents-count","com.wsscode.pathom.viz.index-explorer/idents-count",2076723333),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-edges-count","com.wsscode.pathom.viz.index-explorer/attr-edges-count",-99271495),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutation-count","com.wsscode.pathom.viz.index-explorer/mutation-count",-544331737),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-type-mismatch","com.wsscode.pathom.viz.index-explorer/attr-type-mismatch",-1230484441),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","top-connection-hubs","com.wsscode.pathom.viz.index-explorer/top-connection-hubs",1843947657),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-edges-count","com.wsscode.pathom.viz.index-explorer/attr-edges-count",-99271495)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(">","attr-type-mismatch-join",">/attr-type-mismatch-join",-38351640),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.AttributeMismatchPanel)], null)], null);
});})(x58549_59025))
;


com.wsscode.pathom.viz.index_explorer.StatsView.cljs$lang$type = true;

com.wsscode.pathom.viz.index_explorer.StatsView.cljs$lang$ctorStr = "com.wsscode.pathom.viz.index-explorer/StatsView";

com.wsscode.pathom.viz.index_explorer.StatsView.cljs$lang$ctorPrWriter = (function (this__43093__auto__,writer__43094__auto__,opt__43095__auto__){
return cljs.core._write(writer__43094__auto__,"com.wsscode.pathom.viz.index-explorer/StatsView");
});
com.wsscode.pathom.viz.index_explorer.stats_view = fulcro.client.primitives.factory.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.StatsView);
if((typeof com !== 'undefined') && (typeof com.wsscode !== 'undefined') && (typeof com.wsscode.pathom !== 'undefined') && (typeof com.wsscode.pathom.viz !== 'undefined') && (typeof com.wsscode.pathom.viz.index_explorer !== 'undefined') && (typeof com.wsscode.pathom.viz.index_explorer.FullGraphView !== 'undefined')){
} else {
/**
 * @constructor
 * @nocollapse
 */
com.wsscode.pathom.viz.index_explorer.FullGraphView = (function com$wsscode$pathom$viz$index_explorer$FullGraphView(){
var this__43090__auto__ = this;
React.Component.apply(this__43090__auto__,arguments);

if((!((this__43090__auto__.initLocalState == null)))){
this__43090__auto__.state = this__43090__auto__.initLocalState();
} else {
this__43090__auto__.state = ({});
}

return this__43090__auto__;
});

var G__58556_59026 = com.wsscode.pathom.viz.index_explorer.FullGraphView.prototype;
var G__58557_59027 = React.Component.prototype;
var G__58558_59028 = fulcro.client.primitives.default_component_prototype;
goog.object.extend(G__58556_59026,G__58557_59027,G__58558_59028);
}

fulcro.client.primitives._register_component_BANG_(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","FullGraphView","com.wsscode.pathom.viz.index-explorer/FullGraphView",1989996895),com.wsscode.pathom.viz.index_explorer.FullGraphView);

var x58559_59029 = com.wsscode.pathom.viz.index_explorer.FullGraphView.prototype;
x58559_59029.render = ((function (x58559_59029){
return (function (){
var this__42008__auto__ = this;
var this$ = this__42008__auto__;
var _STAR_reconciler_STAR__orig_val__58560 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__58561 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__58562 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__58563 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__58564 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__58565 = fulcro.client.primitives.get_reconciler(this__42008__auto__);
var _STAR_depth_STAR__temp_val__58566 = (fulcro.client.primitives.depth(this__42008__auto__) + (1));
var _STAR_shared_STAR__temp_val__58567 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__42008__auto__);
var _STAR_instrument_STAR__temp_val__58568 = fulcro.client.primitives.instrument(this__42008__auto__);
var _STAR_parent_STAR__temp_val__58569 = this__42008__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__58565;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__58566;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__58567;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__58568;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__58569;

try{var _ = fulcro.client.primitives.props(this$);
var map__58570 = fulcro.client.primitives.get_computed.cljs$core$IFn$_invoke$arity$1(this$);
var map__58570__$1 = (((((!((map__58570 == null))))?(((((map__58570.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58570.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58570):map__58570);
var attributes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58570__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attributes","com.wsscode.pathom.viz.index-explorer/attributes",-67264281));
var on_select_attribute = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58570__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","on-select-attribute","com.wsscode.pathom.viz.index-explorer/on-select-attribute",2006419034));
var on_select_resolver = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58570__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","on-select-resolver","com.wsscode.pathom.viz.index-explorer/on-select-resolver",1600914463));
var G__58572 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"classes","classes",2037804510),com.wsscode.pathom.viz.ui.kit.ccss.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".container",".container",-1441208944)], 0))], null);
var G__58573 = fulcro.client.localized_dom.h1.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".title",".title",-416997657),"Full Graph"], 0));
var G__58574 = (function (){var G__58575 = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attributes","com.wsscode.pathom.viz.index-explorer/attributes",-67264281),attributes,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","direct-reaches?","com.wsscode.pathom.viz.index-explorer/direct-reaches?",-1036048994),true,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","nested-reaches?","com.wsscode.pathom.viz.index-explorer/nested-reaches?",-22429448),false,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","direct-provides?","com.wsscode.pathom.viz.index-explorer/direct-provides?",223892052),true,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","nested-provides?","com.wsscode.pathom.viz.index-explorer/nested-provides?",-1296758362),false,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","on-show-details","com.wsscode.pathom.viz.index-explorer/on-show-details",-322180105),on_select_attribute,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","on-click-edge","com.wsscode.pathom.viz.index-explorer/on-click-edge",810811642),((function (G__58572,G__58573,_,map__58570,map__58570__$1,attributes,on_select_attribute,on_select_resolver,_STAR_reconciler_STAR__orig_val__58560,_STAR_depth_STAR__orig_val__58561,_STAR_shared_STAR__orig_val__58562,_STAR_instrument_STAR__orig_val__58563,_STAR_parent_STAR__orig_val__58564,_STAR_reconciler_STAR__temp_val__58565,_STAR_depth_STAR__temp_val__58566,_STAR_shared_STAR__temp_val__58567,_STAR_instrument_STAR__temp_val__58568,_STAR_parent_STAR__temp_val__58569,this$,this__42008__auto__,x58559_59029){
return (function (p1__58553_SHARP_){
var G__58576 = cljs.core.first(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","resolvers","com.wsscode.pathom.viz.index-explorer/resolvers",-1064744669).cljs$core$IFn$_invoke$arity$1(p1__58553_SHARP_));
return (on_select_resolver.cljs$core$IFn$_invoke$arity$1 ? on_select_resolver.cljs$core$IFn$_invoke$arity$1(G__58576) : on_select_resolver.call(null,G__58576));
});})(G__58572,G__58573,_,map__58570,map__58570__$1,attributes,on_select_attribute,on_select_resolver,_STAR_reconciler_STAR__orig_val__58560,_STAR_depth_STAR__orig_val__58561,_STAR_shared_STAR__orig_val__58562,_STAR_instrument_STAR__orig_val__58563,_STAR_parent_STAR__orig_val__58564,_STAR_reconciler_STAR__temp_val__58565,_STAR_depth_STAR__temp_val__58566,_STAR_shared_STAR__temp_val__58567,_STAR_instrument_STAR__temp_val__58568,_STAR_parent_STAR__temp_val__58569,this$,this__42008__auto__,x58559_59029))
], null);
return (com.wsscode.pathom.viz.index_explorer.attribute_graph.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom.viz.index_explorer.attribute_graph.cljs$core$IFn$_invoke$arity$1(G__58575) : com.wsscode.pathom.viz.index_explorer.attribute_graph.call(null,G__58575));
})();
return (com.wsscode.pathom.viz.ui.kit.column.cljs$core$IFn$_invoke$arity$3 ? com.wsscode.pathom.viz.ui.kit.column.cljs$core$IFn$_invoke$arity$3(G__58572,G__58573,G__58574) : com.wsscode.pathom.viz.ui.kit.column.call(null,G__58572,G__58573,G__58574));
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__58564;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__58563;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__58562;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__58561;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__58560;
}});})(x58559_59029))
;


com.wsscode.pathom.viz.index_explorer.FullGraphView.prototype.constructor = com.wsscode.pathom.viz.index_explorer.FullGraphView;

com.wsscode.pathom.viz.index_explorer.FullGraphView.prototype.constructor.displayName = "com.wsscode.pathom.viz.index-explorer/FullGraphView";

com.wsscode.pathom.viz.index_explorer.FullGraphView.prototype.fulcro$isComponent = true;

var x58577_59030 = com.wsscode.pathom.viz.index_explorer.FullGraphView;
x58577_59030.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x58577_59030.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x58577_59030){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),"12px",new cljs.core.Keyword(null,"flex","flex",-1425124628),"1"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".title",".title",-416997657),com.wsscode.pathom.viz.ui.kit.text_base], null)], null);
});})(x58577_59030))
;

x58577_59030.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x58577_59030){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x58577_59030))
;

x58577_59030.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x58577_59030.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x58577_59030){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","graph-view-id","com.wsscode.pathom.viz.index-explorer/graph-view-id",211965428),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","graph-view-id","com.wsscode.pathom.viz.index-explorer/graph-view-id",211965428).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x58577_59030))
;

x58577_59030.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x58577_59030.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x58577_59030){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","graph-view-id","com.wsscode.pathom.viz.index-explorer/graph-view-id",211965428)], null);
});})(x58577_59030))
;


var x58578_59031 = com.wsscode.pathom.viz.index_explorer.FullGraphView.prototype;
x58578_59031.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x58578_59031.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x58578_59031){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),"12px",new cljs.core.Keyword(null,"flex","flex",-1425124628),"1"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".title",".title",-416997657),com.wsscode.pathom.viz.ui.kit.text_base], null)], null);
});})(x58578_59031))
;

x58578_59031.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x58578_59031){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x58578_59031))
;

x58578_59031.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x58578_59031.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x58578_59031){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","graph-view-id","com.wsscode.pathom.viz.index-explorer/graph-view-id",211965428),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","graph-view-id","com.wsscode.pathom.viz.index-explorer/graph-view-id",211965428).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x58578_59031))
;

x58578_59031.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x58578_59031.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x58578_59031){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","graph-view-id","com.wsscode.pathom.viz.index-explorer/graph-view-id",211965428)], null);
});})(x58578_59031))
;


com.wsscode.pathom.viz.index_explorer.FullGraphView.cljs$lang$type = true;

com.wsscode.pathom.viz.index_explorer.FullGraphView.cljs$lang$ctorStr = "com.wsscode.pathom.viz.index-explorer/FullGraphView";

com.wsscode.pathom.viz.index_explorer.FullGraphView.cljs$lang$ctorPrWriter = (function (this__43093__auto__,writer__43094__auto__,opt__43095__auto__){
return cljs.core._write(writer__43094__auto__,"com.wsscode.pathom.viz.index-explorer/FullGraphView");
});
com.wsscode.pathom.viz.index_explorer.full_graph_view = fulcro.client.primitives.factory.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.FullGraphView);
com.wsscode.pathom.viz.index_explorer.prop_presence_ident = (function com$wsscode$pathom$viz$index_explorer$prop_presence_ident(props){
return (function (data){
var or__4131__auto__ = cljs.core.some((function (p1__58579_SHARP_){
var temp__5722__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,p1__58579_SHARP_);
if((temp__5722__auto__ == null)){
return null;
} else {
var val = temp__5722__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__58579_SHARP_,val], null);
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
var this__43090__auto__ = this;
React.Component.apply(this__43090__auto__,arguments);

if((!((this__43090__auto__.initLocalState == null)))){
this__43090__auto__.state = this__43090__auto__.initLocalState();
} else {
this__43090__auto__.state = ({});
}

return this__43090__auto__;
});

var G__58582_59032 = com.wsscode.pathom.viz.index_explorer.MainViewUnion.prototype;
var G__58583_59033 = React.Component.prototype;
var G__58584_59034 = fulcro.client.primitives.default_component_prototype;
goog.object.extend(G__58582_59032,G__58583_59033,G__58584_59034);
}

fulcro.client.primitives._register_component_BANG_(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","MainViewUnion","com.wsscode.pathom.viz.index-explorer/MainViewUnion",280346003),com.wsscode.pathom.viz.index_explorer.MainViewUnion);

var x58585_59035 = com.wsscode.pathom.viz.index_explorer.MainViewUnion.prototype;
x58585_59035.render = ((function (x58585_59035){
return (function (){
var this__42008__auto__ = this;
var this$ = this__42008__auto__;
var _STAR_reconciler_STAR__orig_val__58586 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__58587 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__58588 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__58589 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__58590 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__58591 = fulcro.client.primitives.get_reconciler(this__42008__auto__);
var _STAR_depth_STAR__temp_val__58592 = (fulcro.client.primitives.depth(this__42008__auto__) + (1));
var _STAR_shared_STAR__temp_val__58593 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__42008__auto__);
var _STAR_instrument_STAR__temp_val__58594 = fulcro.client.primitives.instrument(this__42008__auto__);
var _STAR_parent_STAR__temp_val__58595 = this__42008__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__58591;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__58592;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__58593;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__58594;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__58595;

try{var props = fulcro.client.primitives.props(this$);
var G__58596 = cljs.core.first(fulcro.client.primitives.get_ident.cljs$core$IFn$_invoke$arity$1(this$));
var G__58596__$1 = (((G__58596 instanceof cljs.core.Keyword))?G__58596.fqn:null);
switch (G__58596__$1) {
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
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__58590;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__58589;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__58588;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__58587;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__58586;
}});})(x58585_59035))
;


com.wsscode.pathom.viz.index_explorer.MainViewUnion.prototype.constructor = com.wsscode.pathom.viz.index_explorer.MainViewUnion;

com.wsscode.pathom.viz.index_explorer.MainViewUnion.prototype.constructor.displayName = "com.wsscode.pathom.viz.index-explorer/MainViewUnion";

com.wsscode.pathom.viz.index_explorer.MainViewUnion.prototype.fulcro$isComponent = true;

var x58597_59037 = com.wsscode.pathom.viz.index_explorer.MainViewUnion;
x58597_59037.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x58597_59037.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x58597_59037){
return (function (this$,props){
var this$__$1 = this;
return (com.wsscode.pathom.viz.index_explorer.main_view_ident.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom.viz.index_explorer.main_view_ident.cljs$core$IFn$_invoke$arity$1(props) : com.wsscode.pathom.viz.index_explorer.main_view_ident.call(null,props));
});})(x58597_59037))
;

x58597_59037.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x58597_59037.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x58597_59037){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.AttributeView),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.ResolverView),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutation-sym","com.wsscode.pathom.viz.index-explorer/mutation-sym",-191280951),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.MutationView),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.StatsView),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","graph-view-id","com.wsscode.pathom.viz.index-explorer/graph-view-id",211965428),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.FullGraphView)], null);
});})(x58597_59037))
;


var x58598_59038 = com.wsscode.pathom.viz.index_explorer.MainViewUnion.prototype;
x58598_59038.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x58598_59038.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x58598_59038){
return (function (this$,props){
var this$__$1 = this;
return (com.wsscode.pathom.viz.index_explorer.main_view_ident.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom.viz.index_explorer.main_view_ident.cljs$core$IFn$_invoke$arity$1(props) : com.wsscode.pathom.viz.index_explorer.main_view_ident.call(null,props));
});})(x58598_59038))
;

x58598_59038.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x58598_59038.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x58598_59038){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.AttributeView),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.ResolverView),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutation-sym","com.wsscode.pathom.viz.index-explorer/mutation-sym",-191280951),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.MutationView),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.StatsView),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","graph-view-id","com.wsscode.pathom.viz.index-explorer/graph-view-id",211965428),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.FullGraphView)], null);
});})(x58598_59038))
;


com.wsscode.pathom.viz.index_explorer.MainViewUnion.cljs$lang$type = true;

com.wsscode.pathom.viz.index_explorer.MainViewUnion.cljs$lang$ctorStr = "com.wsscode.pathom.viz.index-explorer/MainViewUnion";

com.wsscode.pathom.viz.index_explorer.MainViewUnion.cljs$lang$ctorPrWriter = (function (this__43093__auto__,writer__43094__auto__,opt__43095__auto__){
return cljs.core._write(writer__43094__auto__,"com.wsscode.pathom.viz.index-explorer/MainViewUnion");
});
com.wsscode.pathom.viz.index_explorer.main_view_union = fulcro.client.primitives.computed_factory.cljs$core$IFn$_invoke$arity$2(com.wsscode.pathom.viz.index_explorer.MainViewUnion,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),(function (p1__58599_SHARP_){
var or__4131__auto__ = new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075).cljs$core$IFn$_invoke$arity$1(p1__58599_SHARP_);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581).cljs$core$IFn$_invoke$arity$1(p1__58599_SHARP_);
}
})], null));
com.wsscode.pathom.viz.index_explorer.augment = (function com$wsscode$pathom$viz$index_explorer$augment(data,f){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([data,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(data) : f.call(null,data))], 0));
});
com.wsscode.pathom.viz.index_explorer.compute_stats = (function com$wsscode$pathom$viz$index_explorer$compute_stats(p__58603){
var map__58604 = p__58603;
var map__58604__$1 = (((((!((map__58604 == null))))?(((((map__58604.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58604.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58604):map__58604);
var data = map__58604__$1;
var attributes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58604__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attributes","com.wsscode.pathom.viz.index-explorer/attributes",-67264281));
var resolvers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58604__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","resolvers","com.wsscode.pathom.viz.index-explorer/resolvers",-1064744669));
var mutations = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58604__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutations","com.wsscode.pathom.viz.index-explorer/mutations",329050290));
var globals = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58604__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","globals","com.wsscode.pathom.viz.index-explorer/globals",1704747305));
var idents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58604__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","idents","com.wsscode.pathom.viz.index-explorer/idents",189283656));
return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attribute-count","com.wsscode.pathom.viz.index-explorer/attribute-count",699283957),cljs.core.count(attributes),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","resolver-count","com.wsscode.pathom.viz.index-explorer/resolver-count",1252340099),cljs.core.count(resolvers),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutation-count","com.wsscode.pathom.viz.index-explorer/mutation-count",-544331737),cljs.core.count(mutations),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","globals-count","com.wsscode.pathom.viz.index-explorer/globals-count",1697710019),cljs.core.count(globals),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","idents-count","com.wsscode.pathom.viz.index-explorer/idents-count",2076723333),cljs.core.count(idents),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-edges-count","com.wsscode.pathom.viz.index-explorer/attr-edges-count",-99271495),cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-edges-count","com.wsscode.pathom.viz.index-explorer/attr-edges-count",-99271495)),cljs.core._PLUS_,attributes),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-type-mismatch","com.wsscode.pathom.viz.index-explorer/attr-type-mismatch",-1230484441),cljs.core.filterv(((function (map__58604,map__58604__$1,data,attributes,resolvers,mutations,globals,idents){
return (function (p1__58600_SHARP_){
return ((cljs.core.contains_QMARK_(p1__58600_SHARP_,new cljs.core.Keyword("com.wsscode.pathom.connect","attr-leaf-in","com.wsscode.pathom.connect/attr-leaf-in",-1959401711))) && (cljs.core.contains_QMARK_(p1__58600_SHARP_,new cljs.core.Keyword("com.wsscode.pathom.connect","attr-branch-in","com.wsscode.pathom.connect/attr-branch-in",1982854732))));
});})(map__58604,map__58604__$1,data,attributes,resolvers,mutations,globals,idents))
,attributes),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","top-connection-hubs","com.wsscode.pathom.viz.index-explorer/top-connection-hubs",1843947657),cljs.core.vec(cljs.core.take.cljs$core$IFn$_invoke$arity$2((30),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-edges-count","com.wsscode.pathom.viz.index-explorer/attr-edges-count",-99271495),((function (map__58604,map__58604__$1,data,attributes,resolvers,mutations,globals,idents){
return (function (p1__58602_SHARP_,p2__58601_SHARP_){
return cljs.core.compare(p2__58601_SHARP_,p1__58602_SHARP_);
});})(map__58604,map__58604__$1,data,attributes,resolvers,mutations,globals,idents))
,attributes)))], null);
});
com.wsscode.pathom.viz.index_explorer.build_search_vector = (function com$wsscode$pathom$viz$index_explorer$build_search_vector(p__58609){
var map__58610 = p__58609;
var map__58610__$1 = (((((!((map__58610 == null))))?(((((map__58610.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58610.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58610):map__58610);
var index_resolvers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58610__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","index-resolvers","com.wsscode.pathom.connect/index-resolvers",916075256));
var index_attributes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58610__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","index-attributes","com.wsscode.pathom.connect/index-attributes",-24325279));
var index_mutations = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58610__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","index-mutations","com.wsscode.pathom.connect/index-mutations",1981352054));
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.wsscode.fuzzy","string","com.wsscode.fuzzy/string",320074815),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map__58610,map__58610__$1,index_resolvers,index_attributes,index_mutations){
return (function (p1__58606_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword("com.wsscode.fuzzy","string","com.wsscode.fuzzy/string",320074815),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-value","com.wsscode.pathom.viz.index-explorer/search-value",-337129957),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-type","com.wsscode.pathom.viz.index-explorer/search-type",-1615224063)],[cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581).cljs$core$IFn$_invoke$arity$1(p1__58606_SHARP_)], 0)),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581).cljs$core$IFn$_invoke$arity$1(p1__58606_SHARP_),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-type-resolver","com.wsscode.pathom.viz.index-explorer/search-type-resolver",1588028676)]);
});})(map__58610,map__58610__$1,index_resolvers,index_attributes,index_mutations))
,cljs.core.vals(index_resolvers))),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.wsscode.fuzzy","string","com.wsscode.fuzzy/string",320074815),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map__58610,map__58610__$1,index_resolvers,index_attributes,index_mutations){
return (function (p1__58607_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword("com.wsscode.fuzzy","string","com.wsscode.fuzzy/string",320074815),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-value","com.wsscode.pathom.viz.index-explorer/search-value",-337129957),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-type","com.wsscode.pathom.viz.index-explorer/search-type",-1615224063)],[cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581).cljs$core$IFn$_invoke$arity$1(p1__58607_SHARP_)], 0)),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581).cljs$core$IFn$_invoke$arity$1(p1__58607_SHARP_),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-type-mutation","com.wsscode.pathom.viz.index-explorer/search-type-mutation",-68441744)]);
});})(map__58610,map__58610__$1,index_resolvers,index_attributes,index_mutations))
,cljs.core.vals(index_mutations))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.wsscode.fuzzy","string","com.wsscode.fuzzy/string",320074815),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map__58610,map__58610__$1,index_resolvers,index_attributes,index_mutations){
return (function (p1__58608_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword("com.wsscode.fuzzy","string","com.wsscode.fuzzy/string",320074815),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-value","com.wsscode.pathom.viz.index-explorer/search-value",-337129957),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-type","com.wsscode.pathom.viz.index-explorer/search-type",-1615224063)],[cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075).cljs$core$IFn$_invoke$arity$1(p1__58608_SHARP_)], 0)),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075).cljs$core$IFn$_invoke$arity$1(p1__58608_SHARP_),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-type-attribute","com.wsscode.pathom.viz.index-explorer/search-type-attribute",-62795524)]);
});})(map__58610,map__58610__$1,index_resolvers,index_attributes,index_mutations))
,cljs.core.vals(index_attributes)))], 0)));
});
com.wsscode.pathom.viz.index_explorer.process_index = (function com$wsscode$pathom$viz$index_explorer$process_index(p__58614){
var map__58615 = p__58614;
var map__58615__$1 = (((((!((map__58615 == null))))?(((((map__58615.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58615.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58615):map__58615);
var index = map__58615__$1;
var index_resolvers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58615__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","index-resolvers","com.wsscode.pathom.connect/index-resolvers",916075256));
var idents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58615__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","idents","com.wsscode.pathom.connect/idents",1893384007));
var index_attributes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58615__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","index-attributes","com.wsscode.pathom.connect/index-attributes",-24325279));
var index_mutations = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58615__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","index-mutations","com.wsscode.pathom.connect/index-mutations",1981352054));
var attrs = cljs.core.vec(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str,new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map__58615,map__58615__$1,index,index_resolvers,idents,index_attributes,index_mutations){
return (function (p__58617){
var vec__58618 = p__58617;
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58618,(0),null);
var map__58621 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58618,(1),null);
var map__58621__$1 = (((((!((map__58621 == null))))?(((((map__58621.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58621.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58621):map__58621);
var data = map__58621__$1;
var attr_reach_via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58621__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via","com.wsscode.pathom.connect/attr-reach-via",-483841559));
var attr_provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58621__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attr-provides","com.wsscode.pathom.connect/attr-provides",-474523918));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","weight","com.wsscode.pathom.viz.index-explorer/weight",-1488828976),cljs.core.count(attr_provides),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","reach","com.wsscode.pathom.viz.index-explorer/reach",1367373590),cljs.core.count(attr_reach_via),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),attr,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-edges-count","com.wsscode.pathom.viz.index-explorer/attr-edges-count",-99271495),(cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.count),cljs.core._PLUS_,cljs.core.vals(attr_reach_via)) + cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.count),cljs.core._PLUS_,cljs.core.vals(attr_provides))),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","global-attribute?","com.wsscode.pathom.viz.index-explorer/global-attribute?",47568352),cljs.core.contains_QMARK_(attr_reach_via,cljs.core.PersistentHashSet.EMPTY),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","ident-attribute?","com.wsscode.pathom.viz.index-explorer/ident-attribute?",984021315),cljs.core.contains_QMARK_(idents,attr)], 0));
});})(map__58615,map__58615__$1,index,index_resolvers,idents,index_attributes,index_mutations))
,index_attributes)));
return com.wsscode.pathom.viz.index_explorer.augment(new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","idx","com.wsscode.pathom.viz.index-explorer/idx",1045759782),index,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attributes","com.wsscode.pathom.viz.index-explorer/attributes",-67264281),attrs,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","globals","com.wsscode.pathom.viz.index-explorer/globals",1704747305),cljs.core.filterv(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","global-attribute?","com.wsscode.pathom.viz.index-explorer/global-attribute?",47568352),attrs),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","idents","com.wsscode.pathom.viz.index-explorer/idents",189283656),cljs.core.filterv(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","ident-attribute?","com.wsscode.pathom.viz.index-explorer/ident-attribute?",984021315),attrs),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-vector","com.wsscode.pathom.viz.index-explorer/search-vector",-471470935),com.wsscode.pathom.viz.index_explorer.build_search_vector(index),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","resolvers","com.wsscode.pathom.viz.index-explorer/resolvers",-1064744669),cljs.core.vec(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (attrs,map__58615,map__58615__$1,index,index_resolvers,idents,index_attributes,index_mutations){
return (function (p1__58612_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__58612_SHARP_,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","resolver?","com.wsscode.pathom.viz.index-explorer/resolver?",167854159),true);
});})(attrs,map__58615,map__58615__$1,index,index_resolvers,idents,index_attributes,index_mutations))
,cljs.core.vals(index_resolvers)))),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutations","com.wsscode.pathom.viz.index-explorer/mutations",329050290),cljs.core.vec(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (attrs,map__58615,map__58615__$1,index,index_resolvers,idents,index_attributes,index_mutations){
return (function (p1__58613_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(p1__58613_SHARP_,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutation?","com.wsscode.pathom.viz.index-explorer/mutation?",1568382673),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutation-sym","com.wsscode.pathom.viz.index-explorer/mutation-sym",-191280951),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581).cljs$core$IFn$_invoke$arity$1(p1__58613_SHARP_)], 0));
});})(attrs,map__58615,map__58615__$1,index,index_resolvers,idents,index_attributes,index_mutations))
,cljs.core.vals(index_mutations))))], null),com.wsscode.pathom.viz.index_explorer.compute_stats);
});
if((typeof com !== 'undefined') && (typeof com.wsscode !== 'undefined') && (typeof com.wsscode.pathom !== 'undefined') && (typeof com.wsscode.pathom.viz !== 'undefined') && (typeof com.wsscode.pathom.viz.index_explorer !== 'undefined') && (typeof com.wsscode.pathom.viz.index_explorer.AttributeIndex !== 'undefined')){
} else {
/**
 * @constructor
 * @nocollapse
 */
com.wsscode.pathom.viz.index_explorer.AttributeIndex = (function com$wsscode$pathom$viz$index_explorer$AttributeIndex(){
var this__43090__auto__ = this;
React.Component.apply(this__43090__auto__,arguments);

if((!((this__43090__auto__.initLocalState == null)))){
this__43090__auto__.state = this__43090__auto__.initLocalState();
} else {
this__43090__auto__.state = ({});
}

return this__43090__auto__;
});

var G__58625_59039 = com.wsscode.pathom.viz.index_explorer.AttributeIndex.prototype;
var G__58626_59040 = React.Component.prototype;
var G__58627_59041 = fulcro.client.primitives.default_component_prototype;
goog.object.extend(G__58625_59039,G__58626_59040,G__58627_59041);
}

fulcro.client.primitives._register_component_BANG_(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","AttributeIndex","com.wsscode.pathom.viz.index-explorer/AttributeIndex",-1624405224),com.wsscode.pathom.viz.index_explorer.AttributeIndex);

var x58628_59042 = com.wsscode.pathom.viz.index_explorer.AttributeIndex.prototype;
x58628_59042.render = ((function (x58628_59042){
return (function (){
var this__42008__auto__ = this;
var _ = this__42008__auto__;
var _STAR_reconciler_STAR__orig_val__58629 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__58630 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__58631 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__58632 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__58633 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__58634 = fulcro.client.primitives.get_reconciler(this__42008__auto__);
var _STAR_depth_STAR__temp_val__58635 = (fulcro.client.primitives.depth(this__42008__auto__) + (1));
var _STAR_shared_STAR__temp_val__58636 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__42008__auto__);
var _STAR_instrument_STAR__temp_val__58637 = fulcro.client.primitives.instrument(this__42008__auto__);
var _STAR_parent_STAR__temp_val__58638 = this__42008__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__58634;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__58635;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__58636;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__58637;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__58638;

try{var ___$1 = fulcro.client.primitives.props(_);
return null;
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__58633;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__58632;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__58631;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__58630;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__58629;
}});})(x58628_59042))
;


com.wsscode.pathom.viz.index_explorer.AttributeIndex.prototype.constructor = com.wsscode.pathom.viz.index_explorer.AttributeIndex;

com.wsscode.pathom.viz.index_explorer.AttributeIndex.prototype.constructor.displayName = "com.wsscode.pathom.viz.index-explorer/AttributeIndex";

com.wsscode.pathom.viz.index_explorer.AttributeIndex.prototype.fulcro$isComponent = true;

var x58639_59043 = com.wsscode.pathom.viz.index_explorer.AttributeIndex;
x58639_59043.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x58639_59043.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x58639_59043){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x58639_59043))
;

x58639_59043.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x58639_59043.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x58639_59043){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute-paths","com.wsscode.pathom.connect/attribute-paths",-969708455),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-provides","com.wsscode.pathom.connect/attr-provides",-474523918),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via","com.wsscode.pathom.connect/attr-reach-via",-483841559),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-combinations","com.wsscode.pathom.connect/attr-combinations",-1163990806),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","weight","com.wsscode.pathom.viz.index-explorer/weight",-1488828976),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","reach","com.wsscode.pathom.viz.index-explorer/reach",1367373590)], null);
});})(x58639_59043))
;


var x58640_59044 = com.wsscode.pathom.viz.index_explorer.AttributeIndex.prototype;
x58640_59044.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x58640_59044.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x58640_59044){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x58640_59044))
;

x58640_59044.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x58640_59044.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x58640_59044){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute-paths","com.wsscode.pathom.connect/attribute-paths",-969708455),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-provides","com.wsscode.pathom.connect/attr-provides",-474523918),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via","com.wsscode.pathom.connect/attr-reach-via",-483841559),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-combinations","com.wsscode.pathom.connect/attr-combinations",-1163990806),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","weight","com.wsscode.pathom.viz.index-explorer/weight",-1488828976),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","reach","com.wsscode.pathom.viz.index-explorer/reach",1367373590)], null);
});})(x58640_59044))
;


com.wsscode.pathom.viz.index_explorer.AttributeIndex.cljs$lang$type = true;

com.wsscode.pathom.viz.index_explorer.AttributeIndex.cljs$lang$ctorStr = "com.wsscode.pathom.viz.index-explorer/AttributeIndex";

com.wsscode.pathom.viz.index_explorer.AttributeIndex.cljs$lang$ctorPrWriter = (function (this__43093__auto__,writer__43094__auto__,opt__43095__auto__){
return cljs.core._write(writer__43094__auto__,"com.wsscode.pathom.viz.index-explorer/AttributeIndex");
});
if((typeof com !== 'undefined') && (typeof com.wsscode !== 'undefined') && (typeof com.wsscode.pathom !== 'undefined') && (typeof com.wsscode.pathom.viz !== 'undefined') && (typeof com.wsscode.pathom.viz.index_explorer !== 'undefined') && (typeof com.wsscode.pathom.viz.index_explorer.ResolverIndex !== 'undefined')){
} else {
/**
 * @constructor
 * @nocollapse
 */
com.wsscode.pathom.viz.index_explorer.ResolverIndex = (function com$wsscode$pathom$viz$index_explorer$ResolverIndex(){
var this__43090__auto__ = this;
React.Component.apply(this__43090__auto__,arguments);

if((!((this__43090__auto__.initLocalState == null)))){
this__43090__auto__.state = this__43090__auto__.initLocalState();
} else {
this__43090__auto__.state = ({});
}

return this__43090__auto__;
});

var G__58643_59045 = com.wsscode.pathom.viz.index_explorer.ResolverIndex.prototype;
var G__58644_59046 = React.Component.prototype;
var G__58645_59047 = fulcro.client.primitives.default_component_prototype;
goog.object.extend(G__58643_59045,G__58644_59046,G__58645_59047);
}

fulcro.client.primitives._register_component_BANG_(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","ResolverIndex","com.wsscode.pathom.viz.index-explorer/ResolverIndex",-1943751145),com.wsscode.pathom.viz.index_explorer.ResolverIndex);

var x58646_59048 = com.wsscode.pathom.viz.index_explorer.ResolverIndex.prototype;
x58646_59048.render = ((function (x58646_59048){
return (function (){
var this__42008__auto__ = this;
var _ = this__42008__auto__;
var _STAR_reconciler_STAR__orig_val__58647 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__58648 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__58649 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__58650 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__58651 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__58652 = fulcro.client.primitives.get_reconciler(this__42008__auto__);
var _STAR_depth_STAR__temp_val__58653 = (fulcro.client.primitives.depth(this__42008__auto__) + (1));
var _STAR_shared_STAR__temp_val__58654 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__42008__auto__);
var _STAR_instrument_STAR__temp_val__58655 = fulcro.client.primitives.instrument(this__42008__auto__);
var _STAR_parent_STAR__temp_val__58656 = this__42008__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__58652;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__58653;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__58654;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__58655;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__58656;

try{var ___$1 = fulcro.client.primitives.props(_);
return null;
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__58651;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__58650;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__58649;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__58648;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__58647;
}});})(x58646_59048))
;


com.wsscode.pathom.viz.index_explorer.ResolverIndex.prototype.constructor = com.wsscode.pathom.viz.index_explorer.ResolverIndex;

com.wsscode.pathom.viz.index_explorer.ResolverIndex.prototype.constructor.displayName = "com.wsscode.pathom.viz.index-explorer/ResolverIndex";

com.wsscode.pathom.viz.index_explorer.ResolverIndex.prototype.fulcro$isComponent = true;

var x58657_59049 = com.wsscode.pathom.viz.index_explorer.ResolverIndex;
x58657_59049.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x58657_59049.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x58657_59049){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x58657_59049))
;

x58657_59049.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x58657_59049.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x58657_59049){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795)], null);
});})(x58657_59049))
;


var x58658_59050 = com.wsscode.pathom.viz.index_explorer.ResolverIndex.prototype;
x58658_59050.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x58658_59050.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x58658_59050){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x58658_59050))
;

x58658_59050.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x58658_59050.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x58658_59050){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795)], null);
});})(x58658_59050))
;


com.wsscode.pathom.viz.index_explorer.ResolverIndex.cljs$lang$type = true;

com.wsscode.pathom.viz.index_explorer.ResolverIndex.cljs$lang$ctorStr = "com.wsscode.pathom.viz.index-explorer/ResolverIndex";

com.wsscode.pathom.viz.index_explorer.ResolverIndex.cljs$lang$ctorPrWriter = (function (this__43093__auto__,writer__43094__auto__,opt__43095__auto__){
return cljs.core._write(writer__43094__auto__,"com.wsscode.pathom.viz.index-explorer/ResolverIndex");
});
if((typeof com !== 'undefined') && (typeof com.wsscode !== 'undefined') && (typeof com.wsscode.pathom !== 'undefined') && (typeof com.wsscode.pathom.viz !== 'undefined') && (typeof com.wsscode.pathom.viz.index_explorer !== 'undefined') && (typeof com.wsscode.pathom.viz.index_explorer.MutationIndex !== 'undefined')){
} else {
/**
 * @constructor
 * @nocollapse
 */
com.wsscode.pathom.viz.index_explorer.MutationIndex = (function com$wsscode$pathom$viz$index_explorer$MutationIndex(){
var this__43090__auto__ = this;
React.Component.apply(this__43090__auto__,arguments);

if((!((this__43090__auto__.initLocalState == null)))){
this__43090__auto__.state = this__43090__auto__.initLocalState();
} else {
this__43090__auto__.state = ({});
}

return this__43090__auto__;
});

var G__58661_59051 = com.wsscode.pathom.viz.index_explorer.MutationIndex.prototype;
var G__58662_59052 = React.Component.prototype;
var G__58663_59053 = fulcro.client.primitives.default_component_prototype;
goog.object.extend(G__58661_59051,G__58662_59052,G__58663_59053);
}

fulcro.client.primitives._register_component_BANG_(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","MutationIndex","com.wsscode.pathom.viz.index-explorer/MutationIndex",21487988),com.wsscode.pathom.viz.index_explorer.MutationIndex);

var x58664_59054 = com.wsscode.pathom.viz.index_explorer.MutationIndex.prototype;
x58664_59054.render = ((function (x58664_59054){
return (function (){
var this__42008__auto__ = this;
var _ = this__42008__auto__;
var _STAR_reconciler_STAR__orig_val__58665 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__58666 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__58667 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__58668 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__58669 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__58670 = fulcro.client.primitives.get_reconciler(this__42008__auto__);
var _STAR_depth_STAR__temp_val__58671 = (fulcro.client.primitives.depth(this__42008__auto__) + (1));
var _STAR_shared_STAR__temp_val__58672 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__42008__auto__);
var _STAR_instrument_STAR__temp_val__58673 = fulcro.client.primitives.instrument(this__42008__auto__);
var _STAR_parent_STAR__temp_val__58674 = this__42008__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__58670;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__58671;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__58672;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__58673;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__58674;

try{var ___$1 = fulcro.client.primitives.props(_);
return null;
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__58669;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__58668;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__58667;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__58666;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__58665;
}});})(x58664_59054))
;


com.wsscode.pathom.viz.index_explorer.MutationIndex.prototype.constructor = com.wsscode.pathom.viz.index_explorer.MutationIndex;

com.wsscode.pathom.viz.index_explorer.MutationIndex.prototype.constructor.displayName = "com.wsscode.pathom.viz.index-explorer/MutationIndex";

com.wsscode.pathom.viz.index_explorer.MutationIndex.prototype.fulcro$isComponent = true;

var x58675_59055 = com.wsscode.pathom.viz.index_explorer.MutationIndex;
x58675_59055.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x58675_59055.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x58675_59055){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutation-sym","com.wsscode.pathom.viz.index-explorer/mutation-sym",-191280951),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutation-sym","com.wsscode.pathom.viz.index-explorer/mutation-sym",-191280951).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x58675_59055))
;

x58675_59055.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x58675_59055.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x58675_59055){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutation-sym","com.wsscode.pathom.viz.index-explorer/mutation-sym",-191280951),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795)], null);
});})(x58675_59055))
;


var x58676_59056 = com.wsscode.pathom.viz.index_explorer.MutationIndex.prototype;
x58676_59056.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x58676_59056.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x58676_59056){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutation-sym","com.wsscode.pathom.viz.index-explorer/mutation-sym",-191280951),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutation-sym","com.wsscode.pathom.viz.index-explorer/mutation-sym",-191280951).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x58676_59056))
;

x58676_59056.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x58676_59056.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x58676_59056){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutation-sym","com.wsscode.pathom.viz.index-explorer/mutation-sym",-191280951),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795)], null);
});})(x58676_59056))
;


com.wsscode.pathom.viz.index_explorer.MutationIndex.cljs$lang$type = true;

com.wsscode.pathom.viz.index_explorer.MutationIndex.cljs$lang$ctorStr = "com.wsscode.pathom.viz.index-explorer/MutationIndex";

com.wsscode.pathom.viz.index_explorer.MutationIndex.cljs$lang$ctorPrWriter = (function (this__43093__auto__,writer__43094__auto__,opt__43095__auto__){
return cljs.core._write(writer__43094__auto__,"com.wsscode.pathom.viz.index-explorer/MutationIndex");
});
com.wsscode.pathom.viz.index_explorer.history_size_limit = (200);
com.wsscode.pathom.viz.index_explorer.history_append = (function com$wsscode$pathom$viz$index_explorer$history_append(p__58677,ref){
var map__58678 = p__58677;
var map__58678__$1 = (((((!((map__58678 == null))))?(((((map__58678.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58678.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58678):map__58678);
var x = map__58678__$1;
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58678__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","history","com.wsscode.pathom.viz.index-explorer/history",-288879737));
var history_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58678__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","history-index","com.wsscode.pathom.viz.index-explorer/history-index",-368029918));
var index = (history_index + (1));
var history_SINGLEQUOTE_ = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(history,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(index,com.wsscode.pathom.viz.index_explorer.history_size_limit))?(1):(0)),index),ref);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(x,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","history","com.wsscode.pathom.viz.index-explorer/history",-288879737),history_SINGLEQUOTE_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","history-index","com.wsscode.pathom.viz.index-explorer/history-index",-368029918),(cljs.core.count(history_SINGLEQUOTE_) - (1)),new cljs.core.Keyword("ui","page","ui/page",849066625),ref], 0));
});
fulcro.client.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("com.wsscode.pathom.viz.index-explorer","navigate-to-attribute","com.wsscode.pathom.viz.index-explorer/navigate-to-attribute",-1900563958,null),(function (fulcro_incoming_env,_,p__58680){
var map__58681 = p__58680;
var map__58681__$1 = (((((!((map__58681 == null))))?(((((map__58681.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58681.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58681):map__58681);
var attribute = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58681__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var map__58683 = fulcro_incoming_env;
var map__58683__$1 = (((((!((map__58683 == null))))?(((((map__58683.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58683.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58683):map__58683);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58683__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58683__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__58683,map__58683__$1,state,ref,map__58681,map__58681__$1,attribute){
return (function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,fulcro.client.primitives.merge_component,com.wsscode.pathom.viz.index_explorer.AttributeView,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),attribute], null));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.update_in,ref,com.wsscode.pathom.viz.index_explorer.history_append,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),attribute], null)], 0));
});})(map__58683,map__58683__$1,state,ref,map__58681,map__58681__$1,attribute))
], null);
})()], 0));
}));
fulcro.client.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("com.wsscode.pathom.viz.index-explorer","navigate-to-resolver","com.wsscode.pathom.viz.index-explorer/navigate-to-resolver",1471827576,null),(function (fulcro_incoming_env,_,p__58685){
var map__58686 = p__58685;
var map__58686__$1 = (((((!((map__58686 == null))))?(((((map__58686.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58686.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58686):map__58686);
var sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58686__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var map__58688 = fulcro_incoming_env;
var map__58688__$1 = (((((!((map__58688 == null))))?(((((map__58688.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58688.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58688):map__58688);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58688__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58688__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__58688,map__58688__$1,state,ref,map__58686,map__58686__$1,sym){
return (function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,fulcro.client.primitives.merge_component,com.wsscode.pathom.viz.index_explorer.ResolverView,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),sym], null));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.update_in,ref,com.wsscode.pathom.viz.index_explorer.history_append,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),sym], null)], 0));
});})(map__58688,map__58688__$1,state,ref,map__58686,map__58686__$1,sym))
], null);
})()], 0));
}));
fulcro.client.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("com.wsscode.pathom.viz.index-explorer","navigate-to-mutation","com.wsscode.pathom.viz.index-explorer/navigate-to-mutation",2015131713,null),(function (fulcro_incoming_env,_,p__58690){
var map__58691 = p__58690;
var map__58691__$1 = (((((!((map__58691 == null))))?(((((map__58691.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58691.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58691):map__58691);
var mutation_sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58691__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutation-sym","com.wsscode.pathom.viz.index-explorer/mutation-sym",-191280951));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var map__58693 = fulcro_incoming_env;
var map__58693__$1 = (((((!((map__58693 == null))))?(((((map__58693.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58693.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58693):map__58693);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58693__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58693__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__58693,map__58693__$1,state,ref,map__58691,map__58691__$1,mutation_sym){
return (function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,fulcro.client.primitives.merge_component,com.wsscode.pathom.viz.index_explorer.MutationView,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutation-sym","com.wsscode.pathom.viz.index-explorer/mutation-sym",-191280951),mutation_sym], null));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.update_in,ref,com.wsscode.pathom.viz.index_explorer.history_append,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutation-sym","com.wsscode.pathom.viz.index-explorer/mutation-sym",-191280951),mutation_sym], null)], 0));
});})(map__58693,map__58693__$1,state,ref,map__58691,map__58691__$1,mutation_sym))
], null);
})()], 0));
}));
fulcro.client.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("com.wsscode.pathom.viz.index-explorer","navigate-stats","com.wsscode.pathom.viz.index-explorer/navigate-stats",-1515292229,null),(function (fulcro_incoming_env,_,___$1){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var map__58695 = fulcro_incoming_env;
var map__58695__$1 = (((((!((map__58695 == null))))?(((((map__58695.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58695.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58695):map__58695);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58695__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58695__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__58695,map__58695__$1,state,ref){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.update_in,ref,com.wsscode.pathom.viz.index_explorer.history_append,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ref], 0));
});})(map__58695,map__58695__$1,state,ref))
], null);
})()], 0));
}));
fulcro.client.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("com.wsscode.pathom.viz.index-explorer","navigate-graph-view","com.wsscode.pathom.viz.index-explorer/navigate-graph-view",-277547314,null),(function (fulcro_incoming_env,_,___$1){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var map__58697 = fulcro_incoming_env;
var map__58697__$1 = (((((!((map__58697 == null))))?(((((map__58697.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58697.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58697):map__58697);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58697__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58697__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__58697,map__58697__$1,state,ref){
return (function (){
var id = cljs.core.second(ref);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,fulcro.client.primitives.merge_component,com.wsscode.pathom.viz.index_explorer.FullGraphView,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","graph-view-id","com.wsscode.pathom.viz.index-explorer/graph-view-id",211965428),id], null));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.update_in,ref,com.wsscode.pathom.viz.index_explorer.history_append,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","graph-view-id","com.wsscode.pathom.viz.index-explorer/graph-view-id",211965428),id], null)], 0));
});})(map__58697,map__58697__$1,state,ref))
], null);
})()], 0));
}));
com.wsscode.pathom.viz.index_explorer.can_go_back_QMARK_ = (function com$wsscode$pathom$viz$index_explorer$can_go_back_QMARK_(p__58699){
var map__58700 = p__58699;
var map__58700__$1 = (((((!((map__58700 == null))))?(((((map__58700.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58700.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58700):map__58700);
var history_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58700__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","history-index","com.wsscode.pathom.viz.index-explorer/history-index",-368029918));
return (history_index > (0));
});
com.wsscode.pathom.viz.index_explorer.can_go_forward_QMARK_ = (function com$wsscode$pathom$viz$index_explorer$can_go_forward_QMARK_(p__58702){
var map__58703 = p__58702;
var map__58703__$1 = (((((!((map__58703 == null))))?(((((map__58703.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58703.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58703):map__58703);
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58703__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","history","com.wsscode.pathom.viz.index-explorer/history",-288879737));
var history_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58703__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","history-index","com.wsscode.pathom.viz.index-explorer/history-index",-368029918));
return (history_index < (cljs.core.count(history) - (1)));
});
fulcro.client.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("com.wsscode.pathom.viz.index-explorer","navigate-backwards","com.wsscode.pathom.viz.index-explorer/navigate-backwards",1747967871,null),(function (fulcro_incoming_env,_,___$1){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var map__58705 = fulcro_incoming_env;
var map__58705__$1 = (((((!((map__58705 == null))))?(((((map__58705.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58705.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58705):map__58705);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58705__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58705__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__58705,map__58705__$1,state,ref){
return (function (){
var map__58707 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),ref);
var map__58707__$1 = (((((!((map__58707 == null))))?(((((map__58707.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58707.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58707):map__58707);
var props = map__58707__$1;
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58707__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","history","com.wsscode.pathom.viz.index-explorer/history",-288879737));
var history_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58707__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","history-index","com.wsscode.pathom.viz.index-explorer/history-index",-368029918));
if(com.wsscode.pathom.viz.index_explorer.can_go_back_QMARK_(props)){
var page = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(history,(history_index - (1)));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.update_in,ref,cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("ui","page","ui/page",849066625),page,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","history-index","com.wsscode.pathom.viz.index-explorer/history-index",-368029918),(history_index - (1))], 0));
} else {
return null;
}
});})(map__58705,map__58705__$1,state,ref))
], null);
})()], 0));
}));
fulcro.client.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("com.wsscode.pathom.viz.index-explorer","navigate-forwards","com.wsscode.pathom.viz.index-explorer/navigate-forwards",-2084817330,null),(function (fulcro_incoming_env,_,___$1){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var map__58709 = fulcro_incoming_env;
var map__58709__$1 = (((((!((map__58709 == null))))?(((((map__58709.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58709.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58709):map__58709);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58709__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58709__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__58709,map__58709__$1,state,ref){
return (function (){
var map__58711 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),ref);
var map__58711__$1 = (((((!((map__58711 == null))))?(((((map__58711.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58711.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58711):map__58711);
var props = map__58711__$1;
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58711__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","history","com.wsscode.pathom.viz.index-explorer/history",-288879737));
var history_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58711__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","history-index","com.wsscode.pathom.viz.index-explorer/history-index",-368029918));
if(com.wsscode.pathom.viz.index_explorer.can_go_forward_QMARK_(props)){
var page = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(history,(history_index + (1)));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.update_in,ref,cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("ui","page","ui/page",849066625),page,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","history-index","com.wsscode.pathom.viz.index-explorer/history-index",-368029918),(history_index + (1))], 0));
} else {
return null;
}
});})(map__58709,map__58709__$1,state,ref))
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
var this__43090__auto__ = this;
React.Component.apply(this__43090__auto__,arguments);

if((!((this__43090__auto__.initLocalState == null)))){
this__43090__auto__.state = this__43090__auto__.initLocalState();
} else {
this__43090__auto__.state = ({});
}

return this__43090__auto__;
});

var G__58718_59057 = com.wsscode.pathom.viz.index_explorer.IndexExplorer.prototype;
var G__58719_59058 = React.Component.prototype;
var G__58720_59059 = fulcro.client.primitives.default_component_prototype;
goog.object.extend(G__58718_59057,G__58719_59058,G__58720_59059);
}

fulcro.client.primitives._register_component_BANG_(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","IndexExplorer","com.wsscode.pathom.viz.index-explorer/IndexExplorer",493663752),com.wsscode.pathom.viz.index_explorer.IndexExplorer);

var x58721_59060 = com.wsscode.pathom.viz.index_explorer.IndexExplorer.prototype;
x58721_59060.render = ((function (x58721_59060){
return (function (){
var this__42008__auto__ = this;
var this$ = this__42008__auto__;
var _STAR_reconciler_STAR__orig_val__58722 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__58723 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__58724 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__58725 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__58726 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__58727 = fulcro.client.primitives.get_reconciler(this__42008__auto__);
var _STAR_depth_STAR__temp_val__58728 = (fulcro.client.primitives.depth(this__42008__auto__) + (1));
var _STAR_shared_STAR__temp_val__58729 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__42008__auto__);
var _STAR_instrument_STAR__temp_val__58730 = fulcro.client.primitives.instrument(this__42008__auto__);
var _STAR_parent_STAR__temp_val__58731 = this__42008__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__58727;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__58728;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__58729;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__58730;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__58731;

try{var map__58732 = fulcro.client.primitives.props(this$);
var map__58732__$1 = (((((!((map__58732 == null))))?(((((map__58732.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58732.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58732):map__58732);
var props = map__58732__$1;
var index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58732__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","index","com.wsscode.pathom.viz.index-explorer/index",-1539481252));
var attributes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58732__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attributes","com.wsscode.pathom.viz.index-explorer/attributes",-67264281));
var menu = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58732__$1,new cljs.core.Keyword("ui","menu","ui/menu",352268114));
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58732__$1,new cljs.core.Keyword("ui","page","ui/page",849066625));
var extensions = fulcro.client.primitives.get_computed.cljs$core$IFn$_invoke$arity$1(this$);
var G__58734 = goog.object.get(com.wsscode.pathom.viz.index_explorer.ExtensionContext,"Provider");
var G__58735 = ({"value": extensions});
var G__58736 = (function (){var G__58737 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"react-key","react-key",1337881348),"container",new cljs.core.Keyword(null,"classes","classes",2037804510),com.wsscode.pathom.viz.ui.kit.ccss.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".out-container",".out-container",-265742466)], 0))], null);
var G__58738 = (function (){var G__58740 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"classes","classes",2037804510),com.wsscode.pathom.viz.ui.kit.ccss.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".menu",".menu",986259874)], 0))], null);
var G__58741 = (function (){var G__58742 = menu;
var G__58743 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","on-select-attribute","com.wsscode.pathom.viz.index-explorer/on-select-attribute",2006419034),fulcro.client.primitives.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"select-attribute","select-attribute",-65313489)),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","on-select-resolver","com.wsscode.pathom.viz.index-explorer/on-select-resolver",1600914463),fulcro.client.primitives.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"select-resolver","select-resolver",43705318)),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","on-select-mutation","com.wsscode.pathom.viz.index-explorer/on-select-mutation",2007280602),fulcro.client.primitives.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"select-mutation","select-mutation",-1215580866))], null);
return (com.wsscode.pathom.viz.index_explorer.search_everything.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.search_everything.cljs$core$IFn$_invoke$arity$2(G__58742,G__58743) : com.wsscode.pathom.viz.index_explorer.search_everything.call(null,G__58742,G__58743));
})();
return (com.wsscode.pathom.viz.ui.kit.column.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.column.cljs$core$IFn$_invoke$arity$2(G__58740,G__58741) : com.wsscode.pathom.viz.ui.kit.column.call(null,G__58740,G__58741));
})();
var G__58739 = (function (){var G__58744 = com.wsscode.pathom.viz.ui.kit.gc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".flex",".flex",-73425686),new cljs.core.Keyword(null,".no-scrollbars",".no-scrollbars",2090539071)], 0));
var G__58745 = (function (){var G__58747 = cljs.core.PersistentArrayMap.EMPTY;
var G__58748 = (function (){var G__58752 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),fulcro.client.primitives.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"go-back","go-back",1642157803)),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),(!(com.wsscode.pathom.viz.index_explorer.can_go_back_QMARK_(props)))], null);
var G__58753 = "\u25C0";
return (com.wsscode.pathom.viz.ui.kit.button.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.button.cljs$core$IFn$_invoke$arity$2(G__58752,G__58753) : com.wsscode.pathom.viz.ui.kit.button.call(null,G__58752,G__58753));
})();
var G__58749 = (function (){var G__58754 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),fulcro.client.primitives.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"go-forward","go-forward",666578902)),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),(!(com.wsscode.pathom.viz.index_explorer.can_go_forward_QMARK_(props)))], null);
var G__58755 = "\u25B6";
return (com.wsscode.pathom.viz.ui.kit.button.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.button.cljs$core$IFn$_invoke$arity$2(G__58754,G__58755) : com.wsscode.pathom.viz.ui.kit.button.call(null,G__58754,G__58755));
})();
var G__58750 = (function (){var G__58756 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),fulcro.client.primitives.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"go-stats","go-stats",156008525)),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((com.wsscode.pathom.viz.index_explorer.main_view_ident.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom.viz.index_explorer.main_view_ident.cljs$core$IFn$_invoke$arity$1(page) : com.wsscode.pathom.viz.index_explorer.main_view_ident.call(null,page)),fulcro.client.primitives.get_ident.cljs$core$IFn$_invoke$arity$1(this$)),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"marginLeft","marginLeft",-551287007),"12px"], null)], null);
var G__58757 = "Stats";
return (com.wsscode.pathom.viz.ui.kit.button.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.button.cljs$core$IFn$_invoke$arity$2(G__58756,G__58757) : com.wsscode.pathom.viz.ui.kit.button.call(null,G__58756,G__58757));
})();
var G__58751 = (function (){var G__58758 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),fulcro.client.primitives.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"go-graph-view","go-graph-view",473251058)),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first((com.wsscode.pathom.viz.index_explorer.main_view_ident.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom.viz.index_explorer.main_view_ident.cljs$core$IFn$_invoke$arity$1(page) : com.wsscode.pathom.viz.index_explorer.main_view_ident.call(null,page))),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","graph-view-id","com.wsscode.pathom.viz.index-explorer/graph-view-id",211965428)),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"marginLeft","marginLeft",-551287007),"12px"], null)], null);
var G__58759 = "Full Graph";
return (com.wsscode.pathom.viz.ui.kit.button.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.button.cljs$core$IFn$_invoke$arity$2(G__58758,G__58759) : com.wsscode.pathom.viz.ui.kit.button.call(null,G__58758,G__58759));
})();
return (com.wsscode.pathom.viz.ui.kit.row.cljs$core$IFn$_invoke$arity$5 ? com.wsscode.pathom.viz.ui.kit.row.cljs$core$IFn$_invoke$arity$5(G__58747,G__58748,G__58749,G__58750,G__58751) : com.wsscode.pathom.viz.ui.kit.row.call(null,G__58747,G__58748,G__58749,G__58750,G__58751));
})();
var G__58746 = (cljs.core.truth_(page)?(function (){var G__58760 = page;
var G__58761 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(index,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attributes","com.wsscode.pathom.viz.index-explorer/attributes",-67264281),attributes,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","on-select-attribute","com.wsscode.pathom.viz.index-explorer/on-select-attribute",2006419034),fulcro.client.primitives.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"select-attribute","select-attribute",-65313489)),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","on-select-resolver","com.wsscode.pathom.viz.index-explorer/on-select-resolver",1600914463),fulcro.client.primitives.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"select-resolver","select-resolver",43705318)),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","on-select-mutation","com.wsscode.pathom.viz.index-explorer/on-select-mutation",2007280602),fulcro.client.primitives.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"select-mutation","select-mutation",-1215580866))], 0));
return (com.wsscode.pathom.viz.index_explorer.main_view_union.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.main_view_union.cljs$core$IFn$_invoke$arity$2(G__58760,G__58761) : com.wsscode.pathom.viz.index_explorer.main_view_union.call(null,G__58760,G__58761));
})():null);
return (com.wsscode.pathom.viz.ui.kit.column.cljs$core$IFn$_invoke$arity$3 ? com.wsscode.pathom.viz.ui.kit.column.cljs$core$IFn$_invoke$arity$3(G__58744,G__58745,G__58746) : com.wsscode.pathom.viz.ui.kit.column.call(null,G__58744,G__58745,G__58746));
})();
return (com.wsscode.pathom.viz.ui.kit.row.cljs$core$IFn$_invoke$arity$3 ? com.wsscode.pathom.viz.ui.kit.row.cljs$core$IFn$_invoke$arity$3(G__58737,G__58738,G__58739) : com.wsscode.pathom.viz.ui.kit.row.call(null,G__58737,G__58738,G__58739));
})();
return (fulcro.client.localized_dom.create_element.cljs$core$IFn$_invoke$arity$3 ? fulcro.client.localized_dom.create_element.cljs$core$IFn$_invoke$arity$3(G__58734,G__58735,G__58736) : fulcro.client.localized_dom.create_element.call(null,G__58734,G__58735,G__58736));
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__58726;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__58725;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__58724;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__58723;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__58722;
}});})(x58721_59060))
;

x58721_59060.initLocalState = ((function (x58721_59060){
return (function (){
var this$ = this;
var ret__41983__auto__ = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"select-attribute","select-attribute",-65313489),((function (this$,x58721_59060){
return (function (p1__58713_SHARP_){
return fulcro.client.primitives.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("com.wsscode.pathom.viz.index-explorer","navigate-to-attribute","com.wsscode.pathom.viz.index-explorer/navigate-to-attribute",-1900563958,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),null,(1),null)),(new cljs.core.List(null,p1__58713_SHARP_,null,(1),null)))))),null,(1),null)))))], null));
});})(this$,x58721_59060))
,new cljs.core.Keyword(null,"select-resolver","select-resolver",43705318),((function (this$,x58721_59060){
return (function (p1__58714_SHARP_){
return fulcro.client.primitives.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("com.wsscode.pathom.viz.index-explorer","navigate-to-resolver","com.wsscode.pathom.viz.index-explorer/navigate-to-resolver",1471827576,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),null,(1),null)),(new cljs.core.List(null,p1__58714_SHARP_,null,(1),null)))))),null,(1),null)))))], null));
});})(this$,x58721_59060))
,new cljs.core.Keyword(null,"select-mutation","select-mutation",-1215580866),((function (this$,x58721_59060){
return (function (p1__58715_SHARP_){
return fulcro.client.primitives.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("com.wsscode.pathom.viz.index-explorer","navigate-to-mutation","com.wsscode.pathom.viz.index-explorer/navigate-to-mutation",2015131713,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutation-sym","com.wsscode.pathom.viz.index-explorer/mutation-sym",-191280951),null,(1),null)),(new cljs.core.List(null,p1__58715_SHARP_,null,(1),null)))))),null,(1),null)))))], null));
});})(this$,x58721_59060))
,new cljs.core.Keyword(null,"go-back","go-back",1642157803),((function (this$,x58721_59060){
return (function (){
return fulcro.client.primitives.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol("com.wsscode.pathom.viz.index-explorer","navigate-backwards","com.wsscode.pathom.viz.index-explorer/navigate-backwards",1747967871,null),null,(1),null)))))], null));
});})(this$,x58721_59060))
,new cljs.core.Keyword(null,"go-forward","go-forward",666578902),((function (this$,x58721_59060){
return (function (){
return fulcro.client.primitives.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol("com.wsscode.pathom.viz.index-explorer","navigate-forwards","com.wsscode.pathom.viz.index-explorer/navigate-forwards",-2084817330,null),null,(1),null)))))], null));
});})(this$,x58721_59060))
,new cljs.core.Keyword(null,"go-stats","go-stats",156008525),((function (this$,x58721_59060){
return (function (){
return fulcro.client.primitives.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol("com.wsscode.pathom.viz.index-explorer","navigate-stats","com.wsscode.pathom.viz.index-explorer/navigate-stats",-1515292229,null),null,(1),null)))))], null));
});})(this$,x58721_59060))
,new cljs.core.Keyword(null,"go-graph-view","go-graph-view",473251058),((function (this$,x58721_59060){
return (function (){
return fulcro.client.primitives.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol("com.wsscode.pathom.viz.index-explorer","navigate-graph-view","com.wsscode.pathom.viz.index-explorer/navigate-graph-view",-277547314,null),null,(1),null)))))], null));
});})(this$,x58721_59060))
], null);
var obj58763 = ({"fulcro$state":ret__41983__auto__});
return obj58763;
});})(x58721_59060))
;


com.wsscode.pathom.viz.index_explorer.IndexExplorer.prototype.constructor = com.wsscode.pathom.viz.index_explorer.IndexExplorer;

com.wsscode.pathom.viz.index_explorer.IndexExplorer.prototype.constructor.displayName = "com.wsscode.pathom.viz.index-explorer/IndexExplorer";

com.wsscode.pathom.viz.index_explorer.IndexExplorer.prototype.fulcro$isComponent = true;

var x58764_59061 = com.wsscode.pathom.viz.index_explorer.IndexExplorer;
x58764_59061.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x58764_59061.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x58764_59061){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".out-container",".out-container",-265742466),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"flex","flex",-1425124628),"1"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"flex","flex",-1425124628),"1",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"hidden"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".graph",".graph",-327673667),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"height","height",1025178622),"800px",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #000"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".menu",".menu",986259874),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"16px",new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),"16px",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"auto",new cljs.core.Keyword(null,"width","width",-384071477),"30%"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"$row-center","$row-center",-1606740968),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"$scrollbars","$scrollbars",938627053),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"overflow","overflow",2058931880),"auto"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"$tag-spaced","$tag-spaced",-1216528780),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"$tag","$tag",1471772486),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"4px"], null)], null)], null)], null);
});})(x58764_59061))
;

x58764_59061.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x58764_59061){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.viz.index_explorer.AttributeLink,com.wsscode.pathom.viz.index_explorer.ResolverLink,com.wsscode.pathom.viz.index_explorer.MutationLink,com.wsscode.pathom.viz.ui.kit.UIKit], null);
});})(x58764_59061))
;

x58764_59061.fulcro$client$primitives$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

x58764_59061.fulcro$client$primitives$InitialAppState$initial_state$arity$2 = ((function (x58764_59061){
return (function (c,params){
var c__$1 = this;
return fulcro.client.primitives.make_state_map(cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword("ui","page","ui/page",849066625),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","resolvers","com.wsscode.pathom.viz.index-explorer/resolvers",-1064744669),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-type-mismatch","com.wsscode.pathom.viz.index-explorer/attr-type-mismatch",-1230484441),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attributes","com.wsscode.pathom.viz.index-explorer/attributes",-67264281),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","idents","com.wsscode.pathom.viz.index-explorer/idents",189283656),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","top-connection-hubs","com.wsscode.pathom.viz.index-explorer/top-connection-hubs",1843947657),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","globals","com.wsscode.pathom.viz.index-explorer/globals",1704747305),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutations","com.wsscode.pathom.viz.index-explorer/mutations",329050290),new cljs.core.Keyword("ui","menu","ui/menu",352268114)],[com.wsscode.pathom.viz.index_explorer.MainViewUnion,com.wsscode.pathom.viz.index_explorer.ResolverIndex,com.wsscode.pathom.viz.index_explorer.AttributeIndex,com.wsscode.pathom.viz.index_explorer.AttributeIndex,com.wsscode.pathom.viz.index_explorer.AttributeIndex,com.wsscode.pathom.viz.index_explorer.AttributeIndex,com.wsscode.pathom.viz.index_explorer.AttributeIndex,com.wsscode.pathom.viz.index_explorer.MutationIndex,com.wsscode.pathom.viz.index_explorer.SearchEverything]),params);
});})(x58764_59061))
;

x58764_59061.fulcro$client$primitives$IPreMerge$ = cljs.core.PROTOCOL_SENTINEL;

x58764_59061.fulcro$client$primitives$IPreMerge$pre_merge_STAR_$arity$2 = ((function (x58764_59061){
return (function (this$,p__58765){
var map__58766 = p__58765;
var map__58766__$1 = (((((!((map__58766 == null))))?(((((map__58766.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58766.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58766):map__58766);
var current_normalized = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58766__$1,new cljs.core.Keyword(null,"current-normalized","current-normalized",851723724));
var data_tree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58766__$1,new cljs.core.Keyword(null,"data-tree","data-tree",1311167582));
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
});})(x58764_59061))
;

x58764_59061.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x58764_59061.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x58764_59061){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x58764_59061))
;

x58764_59061.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x58764_59061.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x58764_59061){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","index","com.wsscode.pathom.viz.index-explorer/index",-1539481252),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","idx","com.wsscode.pathom.viz.index-explorer/idx",1045759782),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","history","com.wsscode.pathom.viz.index-explorer/history",-288879737),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","history-index","com.wsscode.pathom.viz.index-explorer/history-index",-368029918),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","menu","ui/menu",352268114),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.SearchEverything)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attributes","com.wsscode.pathom.viz.index-explorer/attributes",-67264281),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.AttributeIndex)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","globals","com.wsscode.pathom.viz.index-explorer/globals",1704747305),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.AttributeIndex)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","idents","com.wsscode.pathom.viz.index-explorer/idents",189283656),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.AttributeIndex)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","top-connection-hubs","com.wsscode.pathom.viz.index-explorer/top-connection-hubs",1843947657),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.AttributeIndex)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-type-mismatch","com.wsscode.pathom.viz.index-explorer/attr-type-mismatch",-1230484441),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.AttributeIndex)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","resolvers","com.wsscode.pathom.viz.index-explorer/resolvers",-1064744669),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.ResolverIndex)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutations","com.wsscode.pathom.viz.index-explorer/mutations",329050290),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.MutationIndex)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","page","ui/page",849066625),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.MainViewUnion)], null)], null);
});})(x58764_59061))
;


var x58768_59062 = com.wsscode.pathom.viz.index_explorer.IndexExplorer.prototype;
x58768_59062.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x58768_59062.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x58768_59062){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".out-container",".out-container",-265742466),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"flex","flex",-1425124628),"1"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"flex","flex",-1425124628),"1",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"hidden"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".graph",".graph",-327673667),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"height","height",1025178622),"800px",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #000"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".menu",".menu",986259874),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"16px",new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),"16px",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"auto",new cljs.core.Keyword(null,"width","width",-384071477),"30%"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"$row-center","$row-center",-1606740968),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"$scrollbars","$scrollbars",938627053),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"overflow","overflow",2058931880),"auto"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"$tag-spaced","$tag-spaced",-1216528780),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"$tag","$tag",1471772486),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"4px"], null)], null)], null)], null);
});})(x58768_59062))
;

x58768_59062.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x58768_59062){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.viz.index_explorer.AttributeLink,com.wsscode.pathom.viz.index_explorer.ResolverLink,com.wsscode.pathom.viz.index_explorer.MutationLink,com.wsscode.pathom.viz.ui.kit.UIKit], null);
});})(x58768_59062))
;

x58768_59062.fulcro$client$primitives$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

x58768_59062.fulcro$client$primitives$InitialAppState$initial_state$arity$2 = ((function (x58768_59062){
return (function (c,params){
var c__$1 = this;
return fulcro.client.primitives.make_state_map(cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword("ui","page","ui/page",849066625),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","resolvers","com.wsscode.pathom.viz.index-explorer/resolvers",-1064744669),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-type-mismatch","com.wsscode.pathom.viz.index-explorer/attr-type-mismatch",-1230484441),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attributes","com.wsscode.pathom.viz.index-explorer/attributes",-67264281),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","idents","com.wsscode.pathom.viz.index-explorer/idents",189283656),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","top-connection-hubs","com.wsscode.pathom.viz.index-explorer/top-connection-hubs",1843947657),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","globals","com.wsscode.pathom.viz.index-explorer/globals",1704747305),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutations","com.wsscode.pathom.viz.index-explorer/mutations",329050290),new cljs.core.Keyword("ui","menu","ui/menu",352268114)],[com.wsscode.pathom.viz.index_explorer.MainViewUnion,com.wsscode.pathom.viz.index_explorer.ResolverIndex,com.wsscode.pathom.viz.index_explorer.AttributeIndex,com.wsscode.pathom.viz.index_explorer.AttributeIndex,com.wsscode.pathom.viz.index_explorer.AttributeIndex,com.wsscode.pathom.viz.index_explorer.AttributeIndex,com.wsscode.pathom.viz.index_explorer.AttributeIndex,com.wsscode.pathom.viz.index_explorer.MutationIndex,com.wsscode.pathom.viz.index_explorer.SearchEverything]),params);
});})(x58768_59062))
;

x58768_59062.fulcro$client$primitives$IPreMerge$ = cljs.core.PROTOCOL_SENTINEL;

x58768_59062.fulcro$client$primitives$IPreMerge$pre_merge_STAR_$arity$2 = ((function (x58768_59062){
return (function (this$,p__58769){
var map__58770 = p__58769;
var map__58770__$1 = (((((!((map__58770 == null))))?(((((map__58770.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58770.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58770):map__58770);
var current_normalized = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58770__$1,new cljs.core.Keyword(null,"current-normalized","current-normalized",851723724));
var data_tree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58770__$1,new cljs.core.Keyword(null,"data-tree","data-tree",1311167582));
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
});})(x58768_59062))
;

x58768_59062.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x58768_59062.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x58768_59062){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x58768_59062))
;

x58768_59062.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x58768_59062.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x58768_59062){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","index","com.wsscode.pathom.viz.index-explorer/index",-1539481252),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","idx","com.wsscode.pathom.viz.index-explorer/idx",1045759782),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","history","com.wsscode.pathom.viz.index-explorer/history",-288879737),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","history-index","com.wsscode.pathom.viz.index-explorer/history-index",-368029918),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","menu","ui/menu",352268114),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.SearchEverything)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attributes","com.wsscode.pathom.viz.index-explorer/attributes",-67264281),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.AttributeIndex)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","globals","com.wsscode.pathom.viz.index-explorer/globals",1704747305),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.AttributeIndex)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","idents","com.wsscode.pathom.viz.index-explorer/idents",189283656),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.AttributeIndex)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","top-connection-hubs","com.wsscode.pathom.viz.index-explorer/top-connection-hubs",1843947657),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.AttributeIndex)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-type-mismatch","com.wsscode.pathom.viz.index-explorer/attr-type-mismatch",-1230484441),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.AttributeIndex)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","resolvers","com.wsscode.pathom.viz.index-explorer/resolvers",-1064744669),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.ResolverIndex)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutations","com.wsscode.pathom.viz.index-explorer/mutations",329050290),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.MutationIndex)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","page","ui/page",849066625),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.MainViewUnion)], null)], null);
});})(x58768_59062))
;


com.wsscode.pathom.viz.index_explorer.IndexExplorer.cljs$lang$type = true;

com.wsscode.pathom.viz.index_explorer.IndexExplorer.cljs$lang$ctorStr = "com.wsscode.pathom.viz.index-explorer/IndexExplorer";

com.wsscode.pathom.viz.index_explorer.IndexExplorer.cljs$lang$ctorPrWriter = (function (this__43093__auto__,writer__43094__auto__,opt__43095__auto__){
return cljs.core._write(writer__43094__auto__,"com.wsscode.pathom.viz.index-explorer/IndexExplorer");
});
com.wsscode.pathom.viz.index_explorer.index_explorer = fulcro.client.primitives.computed_factory.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.IndexExplorer);

//# sourceMappingURL=com.wsscode.pathom.viz.index_explorer.js.map
