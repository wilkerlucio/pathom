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
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attribute-node","com.wsscode.pathom.viz.index-explorer/attribute-node",-2016363037),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-node","attribute","com.wsscode.pathom.viz.index-explorer.attribute-node/attribute",-323201507),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-node","multiNode","com.wsscode.pathom.viz.index-explorer.attribute-node/multiNode",461478480),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-node","mainNode","com.wsscode.pathom.viz.index-explorer.attribute-node/mainNode",620710540),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-node","weight","com.wsscode.pathom.viz.index-explorer.attribute-node/weight",1284949095),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-node","reach","com.wsscode.pathom.viz.index-explorer.attribute-node/reach",2025059773),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-node","radius","com.wsscode.pathom.viz.index-explorer.attribute-node/radius",1553083322)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-node","attribute","com.wsscode.pathom.viz.index-explorer.attribute-node/attribute",-323201507),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-node","multiNode","com.wsscode.pathom.viz.index-explorer.attribute-node/multiNode",461478480),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-node","mainNode","com.wsscode.pathom.viz.index-explorer.attribute-node/mainNode",620710540),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-node","weight","com.wsscode.pathom.viz.index-explorer.attribute-node/weight",1284949095),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-node","reach","com.wsscode.pathom.viz.index-explorer.attribute-node/reach",2025059773),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-node","radius","com.wsscode.pathom.viz.index-explorer.attribute-node/radius",1553083322)], null),null,null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__51369){
return cljs.core.map_QMARK_(G__51369);
}),(function (G__51369){
return cljs.core.contains_QMARK_(G__51369,new cljs.core.Keyword(null,"attribute","attribute",-2074029119));
}),(function (G__51369){
return cljs.core.contains_QMARK_(G__51369,new cljs.core.Keyword(null,"multiNode","multiNode",1160650868));
}),(function (G__51369){
return cljs.core.contains_QMARK_(G__51369,new cljs.core.Keyword(null,"mainNode","mainNode",-883240896));
}),(function (G__51369){
return cljs.core.contains_QMARK_(G__51369,new cljs.core.Keyword(null,"weight","weight",-1262796205));
}),(function (G__51369){
return cljs.core.contains_QMARK_(G__51369,new cljs.core.Keyword(null,"reach","reach",1376483465));
}),(function (G__51369){
return cljs.core.contains_QMARK_(G__51369,new cljs.core.Keyword(null,"radius","radius",-2073122258));
})], null),(function (G__51369){
return ((cljs.core.map_QMARK_(G__51369)) && (cljs.core.contains_QMARK_(G__51369,new cljs.core.Keyword(null,"attribute","attribute",-2074029119))) && (cljs.core.contains_QMARK_(G__51369,new cljs.core.Keyword(null,"multiNode","multiNode",1160650868))) && (cljs.core.contains_QMARK_(G__51369,new cljs.core.Keyword(null,"mainNode","mainNode",-883240896))) && (cljs.core.contains_QMARK_(G__51369,new cljs.core.Keyword(null,"weight","weight",-1262796205))) && (cljs.core.contains_QMARK_(G__51369,new cljs.core.Keyword(null,"reach","reach",1376483465))) && (cljs.core.contains_QMARK_(G__51369,new cljs.core.Keyword(null,"radius","radius",-2073122258))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-node","attribute","com.wsscode.pathom.viz.index-explorer.attribute-node/attribute",-323201507),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-node","multiNode","com.wsscode.pathom.viz.index-explorer.attribute-node/multiNode",461478480),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-node","mainNode","com.wsscode.pathom.viz.index-explorer.attribute-node/mainNode",620710540),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-node","weight","com.wsscode.pathom.viz.index-explorer.attribute-node/weight",1284949095),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-node","reach","com.wsscode.pathom.viz.index-explorer.attribute-node/reach",2025059773),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-node","radius","com.wsscode.pathom.viz.index-explorer.attribute-node/radius",1553083322)], null),null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attribute","attribute",-2074029119),new cljs.core.Keyword(null,"multiNode","multiNode",1160650868),new cljs.core.Keyword(null,"mainNode","mainNode",-883240896),new cljs.core.Keyword(null,"weight","weight",-1262796205),new cljs.core.Keyword(null,"reach","reach",1376483465),new cljs.core.Keyword(null,"radius","radius",-2073122258)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"attribute","attribute",-2074029119))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"multiNode","multiNode",1160650868))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"mainNode","mainNode",-883240896))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"weight","weight",-1262796205))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"reach","reach",1376483465))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"radius","radius",-2073122258)))], null),null])));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-link","source","com.wsscode.pathom.viz.index-explorer.attribute-link/source",-1651616055),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-link","weight","com.wsscode.pathom.viz.index-explorer.attribute-link/weight",1284752991),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","weight","com.wsscode.pathom.viz.index-explorer/weight",-1488828976),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","weight","com.wsscode.pathom.viz.index-explorer/weight",-1488828976));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-link","resolvers","com.wsscode.pathom.viz.index-explorer.attribute-link/resolvers",-1723939342),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-link","target","com.wsscode.pathom.viz.index-explorer.attribute-link/target",1726872605),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-link","deep","com.wsscode.pathom.viz.index-explorer.attribute-link/deep",599690487),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),cljs.core.boolean_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attribute-link","com.wsscode.pathom.viz.index-explorer/attribute-link",1286350991),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-link","source","com.wsscode.pathom.viz.index-explorer.attribute-link/source",-1651616055),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-link","weight","com.wsscode.pathom.viz.index-explorer.attribute-link/weight",1284752991),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-link","resolvers","com.wsscode.pathom.viz.index-explorer.attribute-link/resolvers",-1723939342),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-link","target","com.wsscode.pathom.viz.index-explorer.attribute-link/target",1726872605),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-link","deep","com.wsscode.pathom.viz.index-explorer.attribute-link/deep",599690487)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-link","source","com.wsscode.pathom.viz.index-explorer.attribute-link/source",-1651616055),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-link","weight","com.wsscode.pathom.viz.index-explorer.attribute-link/weight",1284752991),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-link","resolvers","com.wsscode.pathom.viz.index-explorer.attribute-link/resolvers",-1723939342),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-link","target","com.wsscode.pathom.viz.index-explorer.attribute-link/target",1726872605),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-link","deep","com.wsscode.pathom.viz.index-explorer.attribute-link/deep",599690487)], null),null,null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__51416){
return cljs.core.map_QMARK_(G__51416);
}),(function (G__51416){
return cljs.core.contains_QMARK_(G__51416,new cljs.core.Keyword(null,"source","source",-433931539));
}),(function (G__51416){
return cljs.core.contains_QMARK_(G__51416,new cljs.core.Keyword(null,"weight","weight",-1262796205));
}),(function (G__51416){
return cljs.core.contains_QMARK_(G__51416,new cljs.core.Keyword(null,"resolvers","resolvers",-1037942130));
}),(function (G__51416){
return cljs.core.contains_QMARK_(G__51416,new cljs.core.Keyword(null,"target","target",253001721));
}),(function (G__51416){
return cljs.core.contains_QMARK_(G__51416,new cljs.core.Keyword(null,"deep","deep",2090866875));
})], null),(function (G__51416){
return ((cljs.core.map_QMARK_(G__51416)) && (cljs.core.contains_QMARK_(G__51416,new cljs.core.Keyword(null,"source","source",-433931539))) && (cljs.core.contains_QMARK_(G__51416,new cljs.core.Keyword(null,"weight","weight",-1262796205))) && (cljs.core.contains_QMARK_(G__51416,new cljs.core.Keyword(null,"resolvers","resolvers",-1037942130))) && (cljs.core.contains_QMARK_(G__51416,new cljs.core.Keyword(null,"target","target",253001721))) && (cljs.core.contains_QMARK_(G__51416,new cljs.core.Keyword(null,"deep","deep",2090866875))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-link","source","com.wsscode.pathom.viz.index-explorer.attribute-link/source",-1651616055),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-link","weight","com.wsscode.pathom.viz.index-explorer.attribute-link/weight",1284752991),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-link","resolvers","com.wsscode.pathom.viz.index-explorer.attribute-link/resolvers",-1723939342),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-link","target","com.wsscode.pathom.viz.index-explorer.attribute-link/target",1726872605),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-link","deep","com.wsscode.pathom.viz.index-explorer.attribute-link/deep",599690487)], null),null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"weight","weight",-1262796205),new cljs.core.Keyword(null,"resolvers","resolvers",-1037942130),new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"deep","deep",2090866875)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"source","source",-433931539))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"weight","weight",-1262796205))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"resolvers","resolvers",-1037942130))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"target","target",253001721))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"deep","deep",2090866875)))], null),null])));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-graph","nodes","com.wsscode.pathom.viz.index-explorer.attribute-graph/nodes",-938578025),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attribute-node","com.wsscode.pathom.viz.index-explorer/attribute-node",-2016363037)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attribute-node","com.wsscode.pathom.viz.index-explorer/attribute-node",-2016363037),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attribute-node","com.wsscode.pathom.viz.index-explorer/attribute-node",-2016363037),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__51430){
return cljs.core.coll_QMARK_(G__51430);
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attribute-node","com.wsscode.pathom.viz.index-explorer/attribute-node",-2016363037))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-graph","links","com.wsscode.pathom.viz.index-explorer.attribute-graph/links",773829650),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attribute-link","com.wsscode.pathom.viz.index-explorer/attribute-link",1286350991)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attribute-link","com.wsscode.pathom.viz.index-explorer/attribute-link",1286350991),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attribute-link","com.wsscode.pathom.viz.index-explorer/attribute-link",1286350991),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__51432){
return cljs.core.coll_QMARK_(G__51432);
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attribute-link","com.wsscode.pathom.viz.index-explorer/attribute-link",1286350991))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attribute-graph","com.wsscode.pathom.viz.index-explorer/attribute-graph",226486271),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-graph","nodes","com.wsscode.pathom.viz.index-explorer.attribute-graph/nodes",-938578025),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-graph","links","com.wsscode.pathom.viz.index-explorer.attribute-graph/links",773829650)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-graph","nodes","com.wsscode.pathom.viz.index-explorer.attribute-graph/nodes",-938578025),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-graph","links","com.wsscode.pathom.viz.index-explorer.attribute-graph/links",773829650)], null),null,null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__51433){
return cljs.core.map_QMARK_(G__51433);
}),(function (G__51433){
return cljs.core.contains_QMARK_(G__51433,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
}),(function (G__51433){
return cljs.core.contains_QMARK_(G__51433,new cljs.core.Keyword(null,"links","links",-654507394));
})], null),(function (G__51433){
return ((cljs.core.map_QMARK_(G__51433)) && (cljs.core.contains_QMARK_(G__51433,new cljs.core.Keyword(null,"nodes","nodes",-2099585805))) && (cljs.core.contains_QMARK_(G__51433,new cljs.core.Keyword(null,"links","links",-654507394))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-graph","nodes","com.wsscode.pathom.viz.index-explorer.attribute-graph/nodes",-938578025),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer.attribute-graph","links","com.wsscode.pathom.viz.index-explorer.attribute-graph/links",773829650)], null),null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.Keyword(null,"links","links",-654507394)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"nodes","nodes",-2099585805))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"links","links",-654507394)))], null),null])));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","maybe-nested-input","com.wsscode.pathom.viz.index-explorer/maybe-nested-input",734224205),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"direct","direct",-1775717856),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null),new cljs.core.Keyword(null,"nested","nested",18943849),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null)),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"direct","direct",-1775717856),new cljs.core.Keyword(null,"nested","nested",18943849)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.set_QMARK_,cljs.core.vector_QMARK_], null),null));
com.wsscode.pathom.viz.index_explorer.ExtensionContext = com.wsscode.pathom.viz.ui.context.new_context.cljs$core$IFn$_invoke$arity$0();
com.wsscode.pathom.viz.index_explorer.call_graph_comm = (function com$wsscode$pathom$viz$index_explorer$call_graph_comm(comp,f,k){
var temp__5718__auto__ = (function (){var or__4131__auto__ = (function (){var G__51456 = fulcro.client.primitives.get_state.cljs$core$IFn$_invoke$arity$2(comp,new cljs.core.Keyword(null,"graph-comm","graph-comm",-744729650));
if((G__51456 == null)){
return null;
} else {
return cljs.core.deref(G__51456);
}
})();
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var G__51458 = comp;
var G__51458__$1 = (((G__51458 == null))?null:fulcro.client.primitives.props(G__51458));
var G__51458__$2 = (((G__51458__$1 == null))?null:fulcro.client.primitives.get_computed.cljs$core$IFn$_invoke$arity$1(G__51458__$1));
var G__51458__$3 = (((G__51458__$2 == null))?null:new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","graph-comm","com.wsscode.pathom.viz.index-explorer/graph-comm",-735750087).cljs$core$IFn$_invoke$arity$1(G__51458__$2));
if((G__51458__$3 == null)){
return null;
} else {
return cljs.core.deref(G__51458__$3);
}
}
})();
if(cljs.core.truth_(temp__5718__auto__)){
var settings = temp__5718__auto__;
var G__51464 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(k);
var fexpr__51463 = goog.object.get(settings,f);
return (fexpr__51463.cljs$core$IFn$_invoke$arity$1 ? fexpr__51463.cljs$core$IFn$_invoke$arity$1(G__51464) : fexpr__51463.call(null,G__51464));
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
var this__44802__auto__ = this;
React.Component.apply(this__44802__auto__,arguments);

if((!((this__44802__auto__.initLocalState == null)))){
this__44802__auto__.state = this__44802__auto__.initLocalState();
} else {
this__44802__auto__.state = ({});
}

return this__44802__auto__;
});

goog.object.extend(com.wsscode.pathom.viz.index_explorer.AttributeLink.prototype,React.Component.prototype,fulcro.client.primitives.default_component_prototype);
}

fulcro.client.primitives._register_component_BANG_(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","AttributeLink","com.wsscode.pathom.viz.index-explorer/AttributeLink",4406070),com.wsscode.pathom.viz.index_explorer.AttributeLink);

var x51470_52488 = com.wsscode.pathom.viz.index_explorer.AttributeLink.prototype;
x51470_52488.render = ((function (x51470_52488){
return (function (){
var this__43720__auto__ = this;
var this$ = this__43720__auto__;
var _STAR_reconciler_STAR__orig_val__51471 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__51472 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__51473 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__51474 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__51475 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__51476 = fulcro.client.primitives.get_reconciler(this__43720__auto__);
var _STAR_depth_STAR__temp_val__51477 = (fulcro.client.primitives.depth(this__43720__auto__) + (1));
var _STAR_shared_STAR__temp_val__51478 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__43720__auto__);
var _STAR_instrument_STAR__temp_val__51479 = fulcro.client.primitives.instrument(this__43720__auto__);
var _STAR_parent_STAR__temp_val__51480 = this__43720__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__51476;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__51477;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__51478;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__51479;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__51480;

try{var map__51481 = fulcro.client.primitives.props(this$);
var map__51481__$1 = (((((!((map__51481 == null))))?(((((map__51481.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51481.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51481):map__51481);
var props = map__51481__$1;
var attribute = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51481__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075));
var render = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51481__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","render","com.wsscode.pathom.viz.ui.kit/render",1024565529));
return fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".container",".container",-1441208944),com.wsscode.pathom.viz.ui.kit.dom_props.cljs$core$IFn$_invoke$arity$1(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.wsscode.pathom.viz.index_explorer.attribute_graph_events(this$,attribute),props], 0))),(cljs.core.truth_(render)?(render.cljs$core$IFn$_invoke$arity$1 ? render.cljs$core$IFn$_invoke$arity$1(props) : render.call(null,props)):cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attribute], 0)))], 0));
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__51475;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__51474;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__51473;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__51472;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__51471;
}});})(x51470_52488))
;


com.wsscode.pathom.viz.index_explorer.AttributeLink.prototype.constructor = com.wsscode.pathom.viz.index_explorer.AttributeLink;

com.wsscode.pathom.viz.index_explorer.AttributeLink.prototype.constructor.displayName = "com.wsscode.pathom.viz.index-explorer/AttributeLink";

com.wsscode.pathom.viz.index_explorer.AttributeLink.prototype.fulcro$isComponent = true;

var x51484_52489 = com.wsscode.pathom.viz.index_explorer.AttributeLink;
x51484_52489.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x51484_52489.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x51484_52489){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"color","color",1011675173),com.wsscode.pathom.viz.index_explorer.color_attribute,new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"14px",new cljs.core.Keyword(null,"line-height","line-height",1870784992),"1.4em"], null),com.wsscode.pathom.viz.ui.kit.text_base], null)], null);
});})(x51484_52489))
;

x51484_52489.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x51484_52489){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x51484_52489))
;


var x51486_52490 = com.wsscode.pathom.viz.index_explorer.AttributeLink.prototype;
x51486_52490.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x51486_52490.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x51486_52490){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"color","color",1011675173),com.wsscode.pathom.viz.index_explorer.color_attribute,new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"14px",new cljs.core.Keyword(null,"line-height","line-height",1870784992),"1.4em"], null),com.wsscode.pathom.viz.ui.kit.text_base], null)], null);
});})(x51486_52490))
;

x51486_52490.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x51486_52490){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x51486_52490))
;


com.wsscode.pathom.viz.index_explorer.AttributeLink.cljs$lang$type = true;

com.wsscode.pathom.viz.index_explorer.AttributeLink.cljs$lang$ctorStr = "com.wsscode.pathom.viz.index-explorer/AttributeLink";

com.wsscode.pathom.viz.index_explorer.AttributeLink.cljs$lang$ctorPrWriter = (function (this__44805__auto__,writer__44806__auto__,opt__44807__auto__){
return cljs.core._write(writer__44806__auto__,"com.wsscode.pathom.viz.index-explorer/AttributeLink");
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
var this__44802__auto__ = this;
React.Component.apply(this__44802__auto__,arguments);

if((!((this__44802__auto__.initLocalState == null)))){
this__44802__auto__.state = this__44802__auto__.initLocalState();
} else {
this__44802__auto__.state = ({});
}

return this__44802__auto__;
});

goog.object.extend(com.wsscode.pathom.viz.index_explorer.ResolverLink.prototype,React.Component.prototype,fulcro.client.primitives.default_component_prototype);
}

fulcro.client.primitives._register_component_BANG_(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","ResolverLink","com.wsscode.pathom.viz.index-explorer/ResolverLink",175120056),com.wsscode.pathom.viz.index_explorer.ResolverLink);

var x51495_52494 = com.wsscode.pathom.viz.index_explorer.ResolverLink.prototype;
x51495_52494.render = ((function (x51495_52494){
return (function (){
var this__43720__auto__ = this;
var this$ = this__43720__auto__;
var _STAR_reconciler_STAR__orig_val__51507 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__51508 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__51509 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__51510 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__51511 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__51512 = fulcro.client.primitives.get_reconciler(this__43720__auto__);
var _STAR_depth_STAR__temp_val__51513 = (fulcro.client.primitives.depth(this__43720__auto__) + (1));
var _STAR_shared_STAR__temp_val__51514 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__43720__auto__);
var _STAR_instrument_STAR__temp_val__51515 = fulcro.client.primitives.instrument(this__43720__auto__);
var _STAR_parent_STAR__temp_val__51516 = this__43720__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__51512;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__51513;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__51514;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__51515;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__51516;

try{var map__51520 = fulcro.client.primitives.props(this$);
var map__51520__$1 = (((((!((map__51520 == null))))?(((((map__51520.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51520.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51520):map__51520);
var props = map__51520__$1;
var sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51520__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581));
var render = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51520__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","render","com.wsscode.pathom.viz.ui.kit/render",1024565529));
return fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".container",".container",-1441208944),com.wsscode.pathom.viz.ui.kit.dom_props.cljs$core$IFn$_invoke$arity$1(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.wsscode.pathom.viz.index_explorer.resolver_graph_events(this$,sym),props], 0))),(cljs.core.truth_(render)?(render.cljs$core$IFn$_invoke$arity$1 ? render.cljs$core$IFn$_invoke$arity$1(props) : render.call(null,props)):cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sym], 0)))], 0));
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__51511;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__51510;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__51509;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__51508;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__51507;
}});})(x51495_52494))
;


com.wsscode.pathom.viz.index_explorer.ResolverLink.prototype.constructor = com.wsscode.pathom.viz.index_explorer.ResolverLink;

com.wsscode.pathom.viz.index_explorer.ResolverLink.prototype.constructor.displayName = "com.wsscode.pathom.viz.index-explorer/ResolverLink";

com.wsscode.pathom.viz.index_explorer.ResolverLink.prototype.fulcro$isComponent = true;

var x51527_52507 = com.wsscode.pathom.viz.index_explorer.ResolverLink;
x51527_52507.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x51527_52507.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x51527_52507){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"color","color",1011675173),com.wsscode.pathom.viz.index_explorer.color_resolver,new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"14px",new cljs.core.Keyword(null,"line-height","line-height",1870784992),"1.4em"], null),com.wsscode.pathom.viz.ui.kit.text_base], null)], null);
});})(x51527_52507))
;

x51527_52507.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x51527_52507){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x51527_52507))
;


var x51529_52509 = com.wsscode.pathom.viz.index_explorer.ResolverLink.prototype;
x51529_52509.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x51529_52509.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x51529_52509){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"color","color",1011675173),com.wsscode.pathom.viz.index_explorer.color_resolver,new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"14px",new cljs.core.Keyword(null,"line-height","line-height",1870784992),"1.4em"], null),com.wsscode.pathom.viz.ui.kit.text_base], null)], null);
});})(x51529_52509))
;

x51529_52509.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x51529_52509){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x51529_52509))
;


com.wsscode.pathom.viz.index_explorer.ResolverLink.cljs$lang$type = true;

com.wsscode.pathom.viz.index_explorer.ResolverLink.cljs$lang$ctorStr = "com.wsscode.pathom.viz.index-explorer/ResolverLink";

com.wsscode.pathom.viz.index_explorer.ResolverLink.cljs$lang$ctorPrWriter = (function (this__44805__auto__,writer__44806__auto__,opt__44807__auto__){
return cljs.core._write(writer__44806__auto__,"com.wsscode.pathom.viz.index-explorer/ResolverLink");
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
var this__44802__auto__ = this;
React.Component.apply(this__44802__auto__,arguments);

if((!((this__44802__auto__.initLocalState == null)))){
this__44802__auto__.state = this__44802__auto__.initLocalState();
} else {
this__44802__auto__.state = ({});
}

return this__44802__auto__;
});

goog.object.extend(com.wsscode.pathom.viz.index_explorer.MutationLink.prototype,React.Component.prototype,fulcro.client.primitives.default_component_prototype);
}

fulcro.client.primitives._register_component_BANG_(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","MutationLink","com.wsscode.pathom.viz.index-explorer/MutationLink",1835462427),com.wsscode.pathom.viz.index_explorer.MutationLink);

var x51536_52511 = com.wsscode.pathom.viz.index_explorer.MutationLink.prototype;
x51536_52511.render = ((function (x51536_52511){
return (function (){
var this__43720__auto__ = this;
var this$ = this__43720__auto__;
var _STAR_reconciler_STAR__orig_val__51541 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__51542 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__51543 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__51544 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__51545 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__51546 = fulcro.client.primitives.get_reconciler(this__43720__auto__);
var _STAR_depth_STAR__temp_val__51547 = (fulcro.client.primitives.depth(this__43720__auto__) + (1));
var _STAR_shared_STAR__temp_val__51548 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__43720__auto__);
var _STAR_instrument_STAR__temp_val__51549 = fulcro.client.primitives.instrument(this__43720__auto__);
var _STAR_parent_STAR__temp_val__51550 = this__43720__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__51546;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__51547;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__51548;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__51549;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__51550;

try{var map__51553 = fulcro.client.primitives.props(this$);
var map__51553__$1 = (((((!((map__51553 == null))))?(((((map__51553.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51553.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51553):map__51553);
var props = map__51553__$1;
var sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51553__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581));
var render = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51553__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","render","com.wsscode.pathom.viz.ui.kit/render",1024565529));
var on_select_mutation = new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","on-select-mutation","com.wsscode.pathom.viz.index-explorer/on-select-mutation",2007280602).cljs$core$IFn$_invoke$arity$1(fulcro.client.primitives.get_computed.cljs$core$IFn$_invoke$arity$1(fulcro.client.primitives.props(this$)));
return fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".container",".container",-1441208944),com.wsscode.pathom.viz.ui.kit.dom_props.cljs$core$IFn$_invoke$arity$1(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (on_select_mutation,map__51553,map__51553__$1,props,sym,render,_STAR_reconciler_STAR__orig_val__51541,_STAR_depth_STAR__orig_val__51542,_STAR_shared_STAR__orig_val__51543,_STAR_instrument_STAR__orig_val__51544,_STAR_parent_STAR__orig_val__51545,_STAR_reconciler_STAR__temp_val__51546,_STAR_depth_STAR__temp_val__51547,_STAR_shared_STAR__temp_val__51548,_STAR_instrument_STAR__temp_val__51549,_STAR_parent_STAR__temp_val__51550,this$,this__43720__auto__,x51536_52511){
return (function (){
return (on_select_mutation.cljs$core$IFn$_invoke$arity$1 ? on_select_mutation.cljs$core$IFn$_invoke$arity$1(sym) : on_select_mutation.call(null,sym));
});})(on_select_mutation,map__51553,map__51553__$1,props,sym,render,_STAR_reconciler_STAR__orig_val__51541,_STAR_depth_STAR__orig_val__51542,_STAR_shared_STAR__orig_val__51543,_STAR_instrument_STAR__orig_val__51544,_STAR_parent_STAR__orig_val__51545,_STAR_reconciler_STAR__temp_val__51546,_STAR_depth_STAR__temp_val__51547,_STAR_shared_STAR__temp_val__51548,_STAR_instrument_STAR__temp_val__51549,_STAR_parent_STAR__temp_val__51550,this$,this__43720__auto__,x51536_52511))
], null),props], 0))),(cljs.core.truth_(render)?(render.cljs$core$IFn$_invoke$arity$1 ? render.cljs$core$IFn$_invoke$arity$1(props) : render.call(null,props)):cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sym], 0)))], 0));
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__51545;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__51544;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__51543;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__51542;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__51541;
}});})(x51536_52511))
;


com.wsscode.pathom.viz.index_explorer.MutationLink.prototype.constructor = com.wsscode.pathom.viz.index_explorer.MutationLink;

com.wsscode.pathom.viz.index_explorer.MutationLink.prototype.constructor.displayName = "com.wsscode.pathom.viz.index-explorer/MutationLink";

com.wsscode.pathom.viz.index_explorer.MutationLink.prototype.fulcro$isComponent = true;

var x51557_52515 = com.wsscode.pathom.viz.index_explorer.MutationLink;
x51557_52515.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x51557_52515.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x51557_52515){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"color","color",1011675173),com.wsscode.pathom.viz.index_explorer.color_mutation,new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"14px",new cljs.core.Keyword(null,"line-height","line-height",1870784992),"1.4em"], null),com.wsscode.pathom.viz.ui.kit.text_base], null)], null);
});})(x51557_52515))
;

x51557_52515.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x51557_52515){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x51557_52515))
;


var x51563_52526 = com.wsscode.pathom.viz.index_explorer.MutationLink.prototype;
x51563_52526.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x51563_52526.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x51563_52526){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"color","color",1011675173),com.wsscode.pathom.viz.index_explorer.color_mutation,new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"14px",new cljs.core.Keyword(null,"line-height","line-height",1870784992),"1.4em"], null),com.wsscode.pathom.viz.ui.kit.text_base], null)], null);
});})(x51563_52526))
;

x51563_52526.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x51563_52526){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x51563_52526))
;


com.wsscode.pathom.viz.index_explorer.MutationLink.cljs$lang$type = true;

com.wsscode.pathom.viz.index_explorer.MutationLink.cljs$lang$ctorStr = "com.wsscode.pathom.viz.index-explorer/MutationLink";

com.wsscode.pathom.viz.index_explorer.MutationLink.cljs$lang$ctorPrWriter = (function (this__44805__auto__,writer__44806__auto__,opt__44807__auto__){
return cljs.core._write(writer__44806__auto__,"com.wsscode.pathom.viz.index-explorer/MutationLink");
});
com.wsscode.pathom.viz.index_explorer.mutation_link = fulcro.client.primitives.computed_factory.cljs$core$IFn$_invoke$arity$2(com.wsscode.pathom.viz.index_explorer.MutationLink,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581))], null));
com.wsscode.pathom.viz.index_explorer.node_radius = (function com$wsscode$pathom$viz$index_explorer$node_radius(p__51586){
var map__51587 = p__51586;
var map__51587__$1 = (((((!((map__51587 == null))))?(((((map__51587.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51587.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51587):map__51587);
var weight = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51587__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","weight","com.wsscode.pathom.viz.index-explorer/weight",-1488828976));
var reach = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51587__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","reach","com.wsscode.pathom.viz.index-explorer/reach",1367373590));
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
com.wsscode.pathom.viz.index_explorer.attribute__GT_node = (function com$wsscode$pathom$viz$index_explorer$attribute__GT_node(p__51591){
var map__51592 = p__51591;
var map__51592__$1 = (((((!((map__51592 == null))))?(((((map__51592.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51592.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51592):map__51592);
var attr = map__51592__$1;
var attribute = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51592__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075));
var weight = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51592__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","weight","com.wsscode.pathom.viz.index-explorer/weight",-1488828976));
var reach = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51592__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","reach","com.wsscode.pathom.viz.index-explorer/reach",1367373590));
var center_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51592__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","center?","com.wsscode.pathom.viz.index-explorer/center?",-314133194));
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
com.wsscode.pathom.viz.index_explorer.compute_nodes_links = (function com$wsscode$pathom$viz$index_explorer$compute_nodes_links(p__51600){
var map__51601 = p__51600;
var map__51601__$1 = (((((!((map__51601 == null))))?(((((map__51601.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51601.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51601):map__51601);
var attributes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51601__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attributes","com.wsscode.pathom.viz.index-explorer/attributes",-67264281));
var attributes__$1 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),attributes);
var index = com.wsscode.pathom.viz.helpers.index_by(new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),attributes__$1);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"nodes","nodes",-2099585805),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.attribute__GT_node),attributes__$1),new cljs.core.Keyword(null,"links","links",-654507394),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (attributes__$1,index,map__51601,map__51601__$1,attributes){
return (function (p__51605){
var map__51606 = p__51605;
var map__51606__$1 = (((((!((map__51606 == null))))?(((((map__51606.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51606.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51606):map__51606);
var attribute = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51606__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075));
var attr_provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51606__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attr-provides","com.wsscode.pathom.connect/attr-provides",-474523918));
var attr_str = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attribute], 0));
var res = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$1(((function (attr_str,map__51606,map__51606__$1,attribute,attr_provides,attributes__$1,index,map__51601,map__51601__$1,attributes){
return (function (p__51608){
var vec__51609 = p__51608;
var provided = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51609,(0),null);
var resolvers = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51609,(1),null);
var nested_QMARK_ = com.wsscode.pathom.viz.index_explorer.nested_QMARK_(provided);
var provided_SINGLEQUOTE_ = ((nested_QMARK_)?cljs.core.peek(provided):provided);
if(((cljs.core.contains_QMARK_(index,provided_SINGLEQUOTE_)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(attribute,provided_SINGLEQUOTE_)))){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"source","source",-433931539),attr_str,new cljs.core.Keyword(null,"weight","weight",-1262796205),cljs.core.count(resolvers),new cljs.core.Keyword(null,"resolvers","resolvers",-1037942130),clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",resolvers),new cljs.core.Keyword(null,"target","target",253001721),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([provided_SINGLEQUOTE_], 0)),new cljs.core.Keyword(null,"deep","deep",2090866875),nested_QMARK_], null);
} else {
return null;
}
});})(attr_str,map__51606,map__51606__$1,attribute,attr_provides,attributes__$1,index,map__51601,map__51601__$1,attributes))
),attr_provides);
return res;
});})(attributes__$1,index,map__51601,map__51601__$1,attributes))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attributes__$1], 0))], null);
});
com.wsscode.pathom.viz.index_explorer.render_attribute_graph = (function com$wsscode$pathom$viz$index_explorer$render_attribute_graph(this$){
var map__51612 = fulcro.client.primitives.props(this$);
var map__51612__$1 = (((((!((map__51612 == null))))?(((((map__51612.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51612.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51612):map__51612);
var props = map__51612__$1;
var on_show_details = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51612__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","on-show-details","com.wsscode.pathom.viz.index-explorer/on-show-details",-322180105));
var on_click_edge = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51612__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","on-click-edge","com.wsscode.pathom.viz.index-explorer/on-click-edge",810811642));
var graph_comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51612__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","graph-comm","com.wsscode.pathom.viz.index-explorer/graph-comm",-735750087));
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
var fexpr__51615_52539 = goog.object.get(current,"dispose");
(fexpr__51615_52539.cljs$core$IFn$_invoke$arity$0 ? fexpr__51615_52539.cljs$core$IFn$_invoke$arity$0() : fexpr__51615_52539.call(null));
} else {
}

goog.object.set(svg,"innerHTML","");

var render_settings = module$com$wsscode$pathom$viz$d3_attribute_graph.render(svg,cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"svgWidth","svgWidth",-356171540),goog.object.get(container,"clientWidth"),new cljs.core.Keyword(null,"svgHeight","svgHeight",1238898787),goog.object.get(container,"clientHeight"),new cljs.core.Keyword(null,"data","data",-232669377),com.wsscode.pathom.viz.index_explorer.compute_nodes_links(props),new cljs.core.Keyword(null,"showDetails","showDetails",638710309),((function (map__51612,map__51612__$1,props,on_show_details,on_click_edge,graph_comm,on_show_details__$1,on_click_edge__$1,current,container,svg){
return (function (attr,d,js){
var G__51617 = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(attr);
var G__51618 = d;
var G__51619 = js;
return (on_show_details__$1.cljs$core$IFn$_invoke$arity$3 ? on_show_details__$1.cljs$core$IFn$_invoke$arity$3(G__51617,G__51618,G__51619) : on_show_details__$1.call(null,G__51617,G__51618,G__51619));
});})(map__51612,map__51612__$1,props,on_show_details,on_click_edge,graph_comm,on_show_details__$1,on_click_edge__$1,current,container,svg))
,new cljs.core.Keyword(null,"onClickEdge","onClickEdge",124821712),((function (map__51612,map__51612__$1,props,on_show_details,on_click_edge,graph_comm,on_show_details__$1,on_click_edge__$1,current,container,svg){
return (function (edge){
var resolvers = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(["#{",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.object.get(edge,"resolvers")),"}"].join(''));
var G__51621 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","resolvers","com.wsscode.pathom.viz.index-explorer/resolvers",-1064744669),resolvers], null);
return (on_click_edge__$1.cljs$core$IFn$_invoke$arity$1 ? on_click_edge__$1.cljs$core$IFn$_invoke$arity$1(G__51621) : on_click_edge__$1.call(null,G__51621));
});})(map__51612,map__51612__$1,props,on_show_details,on_click_edge,graph_comm,on_show_details__$1,on_click_edge__$1,current,container,svg))
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
var this__44802__auto__ = this;
React.Component.apply(this__44802__auto__,arguments);

if((!((this__44802__auto__.initLocalState == null)))){
this__44802__auto__.state = this__44802__auto__.initLocalState();
} else {
this__44802__auto__.state = ({});
}

return this__44802__auto__;
});

goog.object.extend(com.wsscode.pathom.viz.index_explorer.AttributeGraph.prototype,React.Component.prototype,fulcro.client.primitives.default_component_prototype);
}

fulcro.client.primitives._register_component_BANG_(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","AttributeGraph","com.wsscode.pathom.viz.index-explorer/AttributeGraph",1136928477),com.wsscode.pathom.viz.index_explorer.AttributeGraph);

var x51629_52546 = com.wsscode.pathom.viz.index_explorer.AttributeGraph.prototype;
x51629_52546.render = ((function (x51629_52546){
return (function (){
var this__43720__auto__ = this;
var this$ = this__43720__auto__;
var _STAR_reconciler_STAR__orig_val__51630 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__51631 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__51632 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__51633 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__51634 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__51635 = fulcro.client.primitives.get_reconciler(this__43720__auto__);
var _STAR_depth_STAR__temp_val__51636 = (fulcro.client.primitives.depth(this__43720__auto__) + (1));
var _STAR_shared_STAR__temp_val__51637 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__43720__auto__);
var _STAR_instrument_STAR__temp_val__51638 = fulcro.client.primitives.instrument(this__43720__auto__);
var _STAR_parent_STAR__temp_val__51639 = this__43720__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__51635;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__51636;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__51637;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__51638;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__51639;

try{var map__51640 = fulcro.client.primitives.props(this$);
var map__51640__$1 = (((((!((map__51640 == null))))?(((((map__51640.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51640.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51640):map__51640);
return fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),((function (map__51640,map__51640__$1,_STAR_reconciler_STAR__orig_val__51630,_STAR_depth_STAR__orig_val__51631,_STAR_shared_STAR__orig_val__51632,_STAR_instrument_STAR__orig_val__51633,_STAR_parent_STAR__orig_val__51634,_STAR_reconciler_STAR__temp_val__51635,_STAR_depth_STAR__temp_val__51636,_STAR_shared_STAR__temp_val__51637,_STAR_instrument_STAR__temp_val__51638,_STAR_parent_STAR__temp_val__51639,this$,this__43720__auto__,x51629_52546){
return (function (p1__51623_SHARP_){
return goog.object.set(this$,"svgContainer",p1__51623_SHARP_);
});})(map__51640,map__51640__$1,_STAR_reconciler_STAR__orig_val__51630,_STAR_depth_STAR__orig_val__51631,_STAR_shared_STAR__orig_val__51632,_STAR_instrument_STAR__orig_val__51633,_STAR_parent_STAR__orig_val__51634,_STAR_reconciler_STAR__temp_val__51635,_STAR_depth_STAR__temp_val__51636,_STAR_shared_STAR__temp_val__51637,_STAR_instrument_STAR__temp_val__51638,_STAR_parent_STAR__temp_val__51639,this$,this__43720__auto__,x51629_52546))
], null),(cljs.core.truth_(fulcro.client.primitives.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","error-catch?","com.wsscode.pathom.viz.index-explorer/error-catch?",-21405980)))?fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error rendering trace, check console for details"], 0)):fulcro.client.localized_dom.svg.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),((function (map__51640,map__51640__$1,_STAR_reconciler_STAR__orig_val__51630,_STAR_depth_STAR__orig_val__51631,_STAR_shared_STAR__orig_val__51632,_STAR_instrument_STAR__orig_val__51633,_STAR_parent_STAR__orig_val__51634,_STAR_reconciler_STAR__temp_val__51635,_STAR_depth_STAR__temp_val__51636,_STAR_shared_STAR__temp_val__51637,_STAR_instrument_STAR__temp_val__51638,_STAR_parent_STAR__temp_val__51639,this$,this__43720__auto__,x51629_52546){
return (function (p1__51625_SHARP_){
return goog.object.set(this$,"svg",p1__51625_SHARP_);
});})(map__51640,map__51640__$1,_STAR_reconciler_STAR__orig_val__51630,_STAR_depth_STAR__orig_val__51631,_STAR_shared_STAR__orig_val__51632,_STAR_instrument_STAR__orig_val__51633,_STAR_parent_STAR__orig_val__51634,_STAR_reconciler_STAR__temp_val__51635,_STAR_depth_STAR__temp_val__51636,_STAR_shared_STAR__temp_val__51637,_STAR_instrument_STAR__temp_val__51638,_STAR_parent_STAR__temp_val__51639,this$,this__43720__auto__,x51629_52546))
], null)], 0)))], 0));
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__51634;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__51633;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__51632;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__51631;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__51630;
}});})(x51629_52546))
;

x51629_52546.componentDidUpdate = ((function (x51629_52546){
return (function (prev_props__43697__auto__,prev_state__43698__auto__,snapshot__43699__auto__){
var this__43696__auto__ = this;
var this$ = this__43696__auto__;
var snapshot51626 = snapshot__43699__auto__;
var prev_props = goog.object.get(prev_props__43697__auto__,"fulcro$value");
var _ = goog.object.get(prev_state__43698__auto__,"fulcro$state");
if((((!((this__43696__auto__ == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === this__43696__auto__.fulcro$client$primitives$Ident$))))?true:false):false)){
var ident__43700__auto___52554 = fulcro.client.primitives.ident(this__43696__auto__,prev_props);
var next_ident__43701__auto___52555 = fulcro.client.primitives.ident(this__43696__auto__,fulcro.client.primitives.props(this__43696__auto__));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ident__43700__auto___52554,next_ident__43701__auto___52555)){
var idxr__43702__auto___52556 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(fulcro.client.primitives.get_reconciler(this__43696__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__43702__auto___52556 == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__43702__auto___52556),((function (idxr__43702__auto___52556,ident__43700__auto___52554,next_ident__43701__auto___52555,this$,snapshot51626,prev_props,_,this__43696__auto__,x51629_52546){
return (function (indexes__43703__auto__){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(indexes__43703__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__43700__auto___52554], null),cljs.core.disj,this__43696__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__43701__auto___52555], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__43696__auto__);
});})(idxr__43702__auto___52556,ident__43700__auto___52554,next_ident__43701__auto___52555,this$,snapshot51626,prev_props,_,this__43696__auto__,x51629_52546))
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
});})(x51629_52546))
;

x51629_52546.componentDidCatch = ((function (x51629_52546){
return (function (error,info){
var this$ = this;
return fulcro.client.primitives.set_state_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","error-catch?","com.wsscode.pathom.viz.index-explorer/error-catch?",-21405980),true], null));
});})(x51629_52546))
;

x51629_52546.componentWillUnmount = ((function (x51629_52546){
return (function (){
var this__43708__auto__ = this;
var this$ = this__43708__auto__;
var reconciler__43709__auto__ = fulcro.client.primitives.get_reconciler(this__43708__auto__);
var lifecycle__43710__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(reconciler__43709__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"lifecycle","lifecycle",341496205)], null));
var cfg__43711__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(reconciler__43709__auto__);
var st__43712__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__43711__auto__);
var indexer__43713__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__43711__auto__);
goog.object.set(this__43708__auto__,"fulcro$mounted",false);

if(cljs.core.truth_((function (){var and__4120__auto__ = (!((st__43712__auto__ == null)));
if(and__4120__auto__){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(st__43712__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.client.primitives","queries","fulcro.client.primitives/queries",-963324249),this__43708__auto__], null));
} else {
return and__4120__auto__;
}
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(st__43712__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.client.primitives","queries","fulcro.client.primitives/queries",-963324249)], null),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([this__43708__auto__], 0));
} else {
}

if(cljs.core.truth_(lifecycle__43710__auto__)){
(lifecycle__43710__auto__.cljs$core$IFn$_invoke$arity$2 ? lifecycle__43710__auto__.cljs$core$IFn$_invoke$arity$2(this__43708__auto__,new cljs.core.Keyword(null,"unmount","unmount",-1779083333)) : lifecycle__43710__auto__.call(null,this__43708__auto__,new cljs.core.Keyword(null,"unmount","unmount",-1779083333)));
} else {
}

if(cljs.core.truth_(indexer__43713__auto__)){
fulcro.client.impl.protocols.drop_component_BANG_(indexer__43713__auto__,this__43708__auto__);
} else {
}

var temp__5718__auto__ = goog.object.get(this$,"renderedData");
if(cljs.core.truth_(temp__5718__auto__)){
var settings = temp__5718__auto__;
var fexpr__51643 = goog.object.get(settings,"dispose");
return (fexpr__51643.cljs$core$IFn$_invoke$arity$0 ? fexpr__51643.cljs$core$IFn$_invoke$arity$0() : fexpr__51643.call(null));
} else {
return null;
}
});})(x51629_52546))
;

x51629_52546.componentDidMount = ((function (x51629_52546){
return (function (){
var this__43704__auto__ = this;
var this$ = this__43704__auto__;
var reconciler__43705__auto__ = fulcro.client.primitives.get_reconciler(this__43704__auto__);
var lifecycle__43706__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(reconciler__43705__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"lifecycle","lifecycle",341496205)], null));
var indexer__43707__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(reconciler__43705__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
goog.object.set(this__43704__auto__,"fulcro$mounted",true);

if((indexer__43707__auto__ == null)){
} else {
fulcro.client.impl.protocols.index_component_BANG_(indexer__43707__auto__,this__43704__auto__);
}

if(cljs.core.truth_(lifecycle__43706__auto__)){
(lifecycle__43706__auto__.cljs$core$IFn$_invoke$arity$2 ? lifecycle__43706__auto__.cljs$core$IFn$_invoke$arity$2(this__43704__auto__,new cljs.core.Keyword(null,"mount","mount",-1560582470)) : lifecycle__43706__auto__.call(null,this__43704__auto__,new cljs.core.Keyword(null,"mount","mount",-1560582470)));
} else {
}

return com.wsscode.pathom.viz.index_explorer.render_attribute_graph(this$);
});})(x51629_52546))
;


com.wsscode.pathom.viz.index_explorer.AttributeGraph.prototype.constructor = com.wsscode.pathom.viz.index_explorer.AttributeGraph;

com.wsscode.pathom.viz.index_explorer.AttributeGraph.prototype.constructor.displayName = "com.wsscode.pathom.viz.index-explorer/AttributeGraph";

com.wsscode.pathom.viz.index_explorer.AttributeGraph.prototype.fulcro$isComponent = true;

var x51644_52558 = com.wsscode.pathom.viz.index_explorer.AttributeGraph;
x51644_52558.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x51644_52558.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x51644_52558){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(1),new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"100%"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"$pathom-viz-index-explorer-attr-node","$pathom-viz-index-explorer-attr-node",230011996),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),"#000A"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&$pathom-viz-index-explorer-attr-node-multi","&$pathom-viz-index-explorer-attr-node-multi",2047093030),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fill","fill",883462889),"#00000021",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#101010",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"5px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&$pathom-viz-index-explorer-attr-node-main","&$pathom-viz-index-explorer-attr-node-main",378093865),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),"#f9e943e3"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&$pathom-viz-index-explorer-attr-node-highlight","&$pathom-viz-index-explorer-attr-node-highlight",565009481),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),"#de2b34"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"$pathom-viz-index-explorer-arrow-provides","$pathom-viz-index-explorer-arrow-provides",51426281),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),"#666"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"$pathom-viz-index-explorer-arrow-reaches","$pathom-viz-index-explorer-arrow-reaches",-1480018114),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),"#666"], null)], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"$pathom-viz-index-explorer-attr-link","$pathom-viz-index-explorer-attr-link",-1176109107),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#999",new cljs.core.Keyword(null,"stroke-opacity","stroke-opacity",-1191543159),"0.6",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"1.5px",new cljs.core.Keyword(null,"fill","fill",883462889),"none"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&$pathom-viz-index-explorer-attr-link-focus-highlight","&$pathom-viz-index-explorer-attr-link-focus-highlight",1640164737),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#4242e0db",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"3px",new cljs.core.Keyword(null,"z-index","z-index",1892827090),"10"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&$pathom-viz-index-explorer-attr-link-target-highlight","&$pathom-viz-index-explorer-attr-link-target-highlight",-1694507161),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#0c0",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"3px",new cljs.core.Keyword(null,"z-index","z-index",1892827090),"10"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&$pathom-viz-index-explorer-attr-link-source-highlight","&$pathom-viz-index-explorer-attr-link-source-highlight",27199592),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#cc1a9d",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"2px",new cljs.core.Keyword(null,"z-index","z-index",1892827090),"10"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&$pathom-viz-index-explorer-attr-link-reach","&$pathom-viz-index-explorer-attr-link-reach",-2118140605),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&$pathom-viz-index-explorer-attr-link-deep","&$pathom-viz-index-explorer-attr-link-deep",-1762657377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stroke-dasharray","stroke-dasharray",-942933855),"3px"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font","font",-1506159249),"bold 18px Verdana, Helvetica, Arial, sans-serif"], null)], null)], null)], null);
});})(x51644_52558))
;

x51644_52558.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x51644_52558){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x51644_52558))
;


var x51645_52563 = com.wsscode.pathom.viz.index_explorer.AttributeGraph.prototype;
x51645_52563.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x51645_52563.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x51645_52563){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(1),new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"100%"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"$pathom-viz-index-explorer-attr-node","$pathom-viz-index-explorer-attr-node",230011996),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),"#000A"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&$pathom-viz-index-explorer-attr-node-multi","&$pathom-viz-index-explorer-attr-node-multi",2047093030),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fill","fill",883462889),"#00000021",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#101010",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"5px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&$pathom-viz-index-explorer-attr-node-main","&$pathom-viz-index-explorer-attr-node-main",378093865),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),"#f9e943e3"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&$pathom-viz-index-explorer-attr-node-highlight","&$pathom-viz-index-explorer-attr-node-highlight",565009481),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),"#de2b34"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"$pathom-viz-index-explorer-arrow-provides","$pathom-viz-index-explorer-arrow-provides",51426281),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),"#666"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"$pathom-viz-index-explorer-arrow-reaches","$pathom-viz-index-explorer-arrow-reaches",-1480018114),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),"#666"], null)], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"$pathom-viz-index-explorer-attr-link","$pathom-viz-index-explorer-attr-link",-1176109107),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#999",new cljs.core.Keyword(null,"stroke-opacity","stroke-opacity",-1191543159),"0.6",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"1.5px",new cljs.core.Keyword(null,"fill","fill",883462889),"none"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&$pathom-viz-index-explorer-attr-link-focus-highlight","&$pathom-viz-index-explorer-attr-link-focus-highlight",1640164737),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#4242e0db",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"3px",new cljs.core.Keyword(null,"z-index","z-index",1892827090),"10"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&$pathom-viz-index-explorer-attr-link-target-highlight","&$pathom-viz-index-explorer-attr-link-target-highlight",-1694507161),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#0c0",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"3px",new cljs.core.Keyword(null,"z-index","z-index",1892827090),"10"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&$pathom-viz-index-explorer-attr-link-source-highlight","&$pathom-viz-index-explorer-attr-link-source-highlight",27199592),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#cc1a9d",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"2px",new cljs.core.Keyword(null,"z-index","z-index",1892827090),"10"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&$pathom-viz-index-explorer-attr-link-reach","&$pathom-viz-index-explorer-attr-link-reach",-2118140605),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&$pathom-viz-index-explorer-attr-link-deep","&$pathom-viz-index-explorer-attr-link-deep",-1762657377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stroke-dasharray","stroke-dasharray",-942933855),"3px"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font","font",-1506159249),"bold 18px Verdana, Helvetica, Arial, sans-serif"], null)], null)], null)], null);
});})(x51645_52563))
;

x51645_52563.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x51645_52563){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x51645_52563))
;


com.wsscode.pathom.viz.index_explorer.AttributeGraph.cljs$lang$type = true;

com.wsscode.pathom.viz.index_explorer.AttributeGraph.cljs$lang$ctorStr = "com.wsscode.pathom.viz.index-explorer/AttributeGraph";

com.wsscode.pathom.viz.index_explorer.AttributeGraph.cljs$lang$ctorPrWriter = (function (this__44805__auto__,writer__44806__auto__,opt__44807__auto__){
return cljs.core._write(writer__44806__auto__,"com.wsscode.pathom.viz.index-explorer/AttributeGraph");
});
com.wsscode.pathom.viz.index_explorer.attribute_graph = fulcro.client.primitives.factory.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.AttributeGraph);
/**
 * Get attribute from index, remove provides when interconnections is falsy.
 */
com.wsscode.pathom.viz.index_explorer.pull_attr = (function com$wsscode$pathom$viz$index_explorer$pull_attr(p__51646,attr){
var map__51647 = p__51646;
var map__51647__$1 = (((((!((map__51647 == null))))?(((((map__51647.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51647.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51647):map__51647);
var attr_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51647__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-index","com.wsscode.pathom.viz.index-explorer/attr-index",684180200));
var interconnections_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51647__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","interconnections?","com.wsscode.pathom.viz.index-explorer/interconnections?",-1723481228));
var G__51649 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(attr_index,attr);
if(interconnections_QMARK_ === false){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__51649,new cljs.core.Keyword("com.wsscode.pathom.connect","attr-provides","com.wsscode.pathom.connect/attr-provides",-474523918));
} else {
return G__51649;
}
});
com.wsscode.pathom.viz.index_explorer.attribute_network_STAR_ = (function com$wsscode$pathom$viz$index_explorer$attribute_network_STAR_(p__51650,source){
var map__51651 = p__51650;
var map__51651__$1 = (((((!((map__51651 == null))))?(((((map__51651.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51651.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51651):map__51651);
var options = map__51651__$1;
var attributes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51651__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attributes","com.wsscode.pathom.viz.index-explorer/attributes",-67264281));
var sub_index = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__51651__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","sub-index","com.wsscode.pathom.viz.index-explorer/sub-index",-858012438),cljs.core.PersistentArrayMap.EMPTY);
var nested_reaches_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__51651__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","nested-reaches?","com.wsscode.pathom.viz.index-explorer/nested-reaches?",-22429448),false);
var direct_reaches_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__51651__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","direct-reaches?","com.wsscode.pathom.viz.index-explorer/direct-reaches?",-1036048994),true);
var direct_provides_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__51651__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","direct-provides?","com.wsscode.pathom.viz.index-explorer/direct-provides?",223892052),true);
var nested_provides_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__51651__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","nested-provides?","com.wsscode.pathom.viz.index-explorer/nested-provides?",-1296758362),false);
var attr_depth = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__51651__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-depth","com.wsscode.pathom.viz.index-explorer/attr-depth",-1327711242),(1));
var attr_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51651__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-index","com.wsscode.pathom.viz.index-explorer/attr-index",684180200));
var attr_visited = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__51651__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-visited","com.wsscode.pathom.viz.index-explorer/attr-visited",703029193),cljs.core.PersistentHashSet.EMPTY);
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
var map__51653 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(index,source);
var map__51653__$1 = (((((!((map__51653 == null))))?(((((map__51653.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51653.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51653):map__51653);
var attr_reach_via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51653__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via","com.wsscode.pathom.connect/attr-reach-via",-483841559));
var attr_provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51653__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attr-provides","com.wsscode.pathom.connect/attr-provides",-474523918));
var options_SINGLEQUOTE_ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(options,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-index","com.wsscode.pathom.viz.index-explorer/attr-index",684180200),index,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-depth","com.wsscode.pathom.viz.index-explorer/attr-depth",-1327711242),(attr_depth - (1)),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-visited","com.wsscode.pathom.viz.index-explorer/attr-visited",703029193),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(attr_visited,source)], 0));
var _LT__GT_ = base;
var _LT__GT___$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (_LT__GT_,index,base,map__51653,map__51653__$1,attr_reach_via,attr_provides,options_SINGLEQUOTE_,map__51651,map__51651__$1,options,attributes,sub_index,nested_reaches_QMARK_,direct_reaches_QMARK_,direct_provides_QMARK_,nested_provides_QMARK_,attr_depth,attr_index,attr_visited){
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
var G__51655 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(options_SINGLEQUOTE_,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","sub-index","com.wsscode.pathom.viz.index-explorer/sub-index",-858012438),out);
var G__51656 = attr;
return (com.wsscode.pathom.viz.index_explorer.attribute_network_STAR_.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.attribute_network_STAR_.cljs$core$IFn$_invoke$arity$2(G__51655,G__51656) : com.wsscode.pathom.viz.index_explorer.attribute_network_STAR_.call(null,G__51655,G__51656));
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(out,attr,cljs.core.merge,com.wsscode.pathom.viz.index_explorer.pull_attr(options_SINGLEQUOTE_,attr));
}
} else {
return out;
}
});})(_LT__GT_,index,base,map__51653,map__51653__$1,attr_reach_via,attr_provides,options_SINGLEQUOTE_,map__51651,map__51651__$1,options,attributes,sub_index,nested_reaches_QMARK_,direct_reaches_QMARK_,direct_provides_QMARK_,nested_provides_QMARK_,attr_depth,attr_index,attr_visited))
,_LT__GT_,cljs.core.keys(attr_reach_via));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (_LT__GT_,_LT__GT___$1,index,base,map__51653,map__51653__$1,attr_reach_via,attr_provides,options_SINGLEQUOTE_,map__51651,map__51651__$1,options,attributes,sub_index,nested_reaches_QMARK_,direct_reaches_QMARK_,direct_provides_QMARK_,nested_provides_QMARK_,attr_depth,attr_index,attr_visited){
return (function (out,attr){
if(cljs.core.truth_((function (){var and__4120__auto__ = direct_provides_QMARK_;
if(cljs.core.truth_(and__4120__auto__)){
return (attr instanceof cljs.core.Keyword);
} else {
return and__4120__auto__;
}
})())){
if((attr_depth > (1))){
var G__51657 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(options_SINGLEQUOTE_,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","sub-index","com.wsscode.pathom.viz.index-explorer/sub-index",-858012438),out);
var G__51658 = attr;
return (com.wsscode.pathom.viz.index_explorer.attribute_network_STAR_.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.attribute_network_STAR_.cljs$core$IFn$_invoke$arity$2(G__51657,G__51658) : com.wsscode.pathom.viz.index_explorer.attribute_network_STAR_.call(null,G__51657,G__51658));
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
});})(_LT__GT_,_LT__GT___$1,index,base,map__51653,map__51653__$1,attr_reach_via,attr_provides,options_SINGLEQUOTE_,map__51651,map__51651__$1,options,attributes,sub_index,nested_reaches_QMARK_,direct_reaches_QMARK_,direct_provides_QMARK_,nested_provides_QMARK_,attr_depth,attr_index,attr_visited))
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
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__51659_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(p1__51659_SHARP_,(0),(function (x){
if((x instanceof cljs.core.Keyword)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
} else {
return x;
}
}));
})),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p__51660){
var vec__51661 = p__51660;
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51661,(0),null);
var resolvers = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51661,(1),null);
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
return (function com$wsscode$pathom$viz$index_explorer$render_plugin_extension_$_iter__51664(s__51665){
return (new cljs.core.LazySeq(null,((function (plugins,data){
return (function (){
var s__51665__$1 = s__51665;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__51665__$1);
if(temp__5720__auto__){
var s__51665__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__51665__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__51665__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__51667 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__51666 = (0);
while(true){
if((i__51666 < size__4522__auto__)){
var map__51668 = cljs.core._nth(c__4521__auto__,i__51666);
var map__51668__$1 = (((((!((map__51668 == null))))?(((((map__51668.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51668.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51668):map__51668);
var plugin = map__51668__$1;
var plugin_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51668__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","plugin-id","com.wsscode.pathom.viz.index-explorer/plugin-id",-1782512648));
if(cljs.core.contains_QMARK_(plugin,view)){
cljs.core.chunk_append(b__51667,fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([plugin_id], 0))], null),(function (){var fexpr__51670 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(plugin,view);
return (fexpr__51670.cljs$core$IFn$_invoke$arity$1 ? fexpr__51670.cljs$core$IFn$_invoke$arity$1(data) : fexpr__51670.call(null,data));
})()], 0)));

var G__52570 = (i__51666 + (1));
i__51666 = G__52570;
continue;
} else {
var G__52571 = (i__51666 + (1));
i__51666 = G__52571;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51667),com$wsscode$pathom$viz$index_explorer$render_plugin_extension_$_iter__51664(cljs.core.chunk_rest(s__51665__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51667),null);
}
} else {
var map__51671 = cljs.core.first(s__51665__$2);
var map__51671__$1 = (((((!((map__51671 == null))))?(((((map__51671.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51671.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51671):map__51671);
var plugin = map__51671__$1;
var plugin_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51671__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","plugin-id","com.wsscode.pathom.viz.index-explorer/plugin-id",-1782512648));
if(cljs.core.contains_QMARK_(plugin,view)){
return cljs.core.cons(fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([plugin_id], 0))], null),(function (){var fexpr__51673 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(plugin,view);
return (fexpr__51673.cljs$core$IFn$_invoke$arity$1 ? fexpr__51673.cljs$core$IFn$_invoke$arity$1(data) : fexpr__51673.call(null,data));
})()], 0)),com$wsscode$pathom$viz$index_explorer$render_plugin_extension_$_iter__51664(cljs.core.rest(s__51665__$2)));
} else {
var G__52572 = cljs.core.rest(s__51665__$2);
s__51665__$1 = G__52572;
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
var this__44802__auto__ = this;
React.Component.apply(this__44802__auto__,arguments);

if((!((this__44802__auto__.initLocalState == null)))){
this__44802__auto__.state = this__44802__auto__.initLocalState();
} else {
this__44802__auto__.state = ({});
}

return this__44802__auto__;
});

goog.object.extend(com.wsscode.pathom.viz.index_explorer.AttributeInfoReachVia.prototype,React.Component.prototype,fulcro.client.primitives.default_component_prototype);
}

fulcro.client.primitives._register_component_BANG_(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","AttributeInfoReachVia","com.wsscode.pathom.viz.index-explorer/AttributeInfoReachVia",-997057837),com.wsscode.pathom.viz.index_explorer.AttributeInfoReachVia);

var x51678_52573 = com.wsscode.pathom.viz.index_explorer.AttributeInfoReachVia.prototype;
x51678_52573.render = ((function (x51678_52573){
return (function (){
var this__43720__auto__ = this;
var this$ = this__43720__auto__;
var _STAR_reconciler_STAR__orig_val__51679 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__51680 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__51681 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__51682 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__51683 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__51684 = fulcro.client.primitives.get_reconciler(this__43720__auto__);
var _STAR_depth_STAR__temp_val__51685 = (fulcro.client.primitives.depth(this__43720__auto__) + (1));
var _STAR_shared_STAR__temp_val__51686 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__43720__auto__);
var _STAR_instrument_STAR__temp_val__51687 = fulcro.client.primitives.instrument(this__43720__auto__);
var _STAR_parent_STAR__temp_val__51688 = this__43720__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__51684;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__51685;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__51686;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__51687;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__51688;

try{var map__51689 = fulcro.client.primitives.props(this$);
var map__51689__$1 = (((((!((map__51689 == null))))?(((((map__51689.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51689.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51689):map__51689);
var attr_reach_via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51689__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via","com.wsscode.pathom.connect/attr-reach-via",-483841559));
var computed = fulcro.client.primitives.get_computed.cljs$core$IFn$_invoke$arity$1(this$);
var G__51691 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","panel-title","com.wsscode.pathom.viz.ui.kit/panel-title",1529445284),"Reach via",new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","panel-tag","com.wsscode.pathom.viz.ui.kit/panel-tag",144392508),cljs.core.count(attr_reach_via)], null);
var G__51692 = (function (){var nested_reaches_QMARK_ = true;
var iter__4523__auto__ = ((function (nested_reaches_QMARK_,G__51691,map__51689,map__51689__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__51679,_STAR_depth_STAR__orig_val__51680,_STAR_shared_STAR__orig_val__51681,_STAR_instrument_STAR__orig_val__51682,_STAR_parent_STAR__orig_val__51683,_STAR_reconciler_STAR__temp_val__51684,_STAR_depth_STAR__temp_val__51685,_STAR_shared_STAR__temp_val__51686,_STAR_instrument_STAR__temp_val__51687,_STAR_parent_STAR__temp_val__51688,this$,this__43720__auto__,x51678_52573){
return (function com$wsscode$pathom$viz$index_explorer$iter__51693(s__51694){
return (new cljs.core.LazySeq(null,((function (nested_reaches_QMARK_,G__51691,map__51689,map__51689__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__51679,_STAR_depth_STAR__orig_val__51680,_STAR_shared_STAR__orig_val__51681,_STAR_instrument_STAR__orig_val__51682,_STAR_parent_STAR__orig_val__51683,_STAR_reconciler_STAR__temp_val__51684,_STAR_depth_STAR__temp_val__51685,_STAR_shared_STAR__temp_val__51686,_STAR_instrument_STAR__temp_val__51687,_STAR_parent_STAR__temp_val__51688,this$,this__43720__auto__,x51678_52573){
return (function (){
var s__51694__$1 = s__51694;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__51694__$1);
if(temp__5720__auto__){
var s__51694__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__51694__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__51694__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__51696 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__51695 = (0);
while(true){
if((i__51695 < size__4522__auto__)){
var vec__51697 = cljs.core._nth(c__4521__auto__,i__51695);
var input = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51697,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51697,(1),null);
var direct_QMARK_ = cljs.core.some(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(com.wsscode.pathom.viz.index_explorer.direct_input_QMARK_,cljs.core.first),v);
if(cljs.core.truth_((function (){var or__4131__auto__ = direct_QMARK_;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return nested_reaches_QMARK_;
}
})())){
cljs.core.chunk_append(b__51696,fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([input], 0))], null),com.wsscode.pathom.viz.index_explorer.attribute_link(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),(function (){var G__51700 = input;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(input),(1))){
return cljs.core.first(G__51700);
} else {
return G__51700;
}
})(),new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","render","com.wsscode.pathom.viz.ui.kit/render",1024565529),((function (i__51695,s__51694__$1,direct_QMARK_,vec__51697,input,v,c__4521__auto__,size__4522__auto__,b__51696,s__51694__$2,temp__5720__auto__,nested_reaches_QMARK_,G__51691,map__51689,map__51689__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__51679,_STAR_depth_STAR__orig_val__51680,_STAR_shared_STAR__orig_val__51681,_STAR_instrument_STAR__orig_val__51682,_STAR_parent_STAR__orig_val__51683,_STAR_reconciler_STAR__temp_val__51684,_STAR_depth_STAR__temp_val__51685,_STAR_shared_STAR__temp_val__51686,_STAR_instrument_STAR__temp_val__51687,_STAR_parent_STAR__temp_val__51688,this$,this__43720__auto__,x51678_52573){
return (function (){
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([input], 0));
});})(i__51695,s__51694__$1,direct_QMARK_,vec__51697,input,v,c__4521__auto__,size__4522__auto__,b__51696,s__51694__$2,temp__5720__auto__,nested_reaches_QMARK_,G__51691,map__51689,map__51689__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__51679,_STAR_depth_STAR__orig_val__51680,_STAR_shared_STAR__orig_val__51681,_STAR_instrument_STAR__orig_val__51682,_STAR_parent_STAR__orig_val__51683,_STAR_reconciler_STAR__temp_val__51684,_STAR_depth_STAR__temp_val__51685,_STAR_shared_STAR__temp_val__51686,_STAR_instrument_STAR__temp_val__51687,_STAR_parent_STAR__temp_val__51688,this$,this__43720__auto__,x51678_52573))
,new cljs.core.Keyword(null,"style","style",-496642736),(function (){var G__51701 = cljs.core.PersistentArrayMap.EMPTY;
if(cljs.core.truth_(direct_QMARK_)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51701,new cljs.core.Keyword(null,"fontWeight","fontWeight",166450581),"bold");
} else {
return G__51701;
}
})()], null),computed),((nested_reaches_QMARK_)?(function (){var iter__4523__auto__ = ((function (i__51695,s__51694__$1,direct_QMARK_,vec__51697,input,v,c__4521__auto__,size__4522__auto__,b__51696,s__51694__$2,temp__5720__auto__,nested_reaches_QMARK_,G__51691,map__51689,map__51689__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__51679,_STAR_depth_STAR__orig_val__51680,_STAR_shared_STAR__orig_val__51681,_STAR_instrument_STAR__orig_val__51682,_STAR_parent_STAR__orig_val__51683,_STAR_reconciler_STAR__temp_val__51684,_STAR_depth_STAR__temp_val__51685,_STAR_shared_STAR__temp_val__51686,_STAR_instrument_STAR__temp_val__51687,_STAR_parent_STAR__temp_val__51688,this$,this__43720__auto__,x51678_52573){
return (function com$wsscode$pathom$viz$index_explorer$iter__51693_$_iter__51702(s__51703){
return (new cljs.core.LazySeq(null,((function (i__51695,s__51694__$1,direct_QMARK_,vec__51697,input,v,c__4521__auto__,size__4522__auto__,b__51696,s__51694__$2,temp__5720__auto__,nested_reaches_QMARK_,G__51691,map__51689,map__51689__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__51679,_STAR_depth_STAR__orig_val__51680,_STAR_shared_STAR__orig_val__51681,_STAR_instrument_STAR__orig_val__51682,_STAR_parent_STAR__orig_val__51683,_STAR_reconciler_STAR__temp_val__51684,_STAR_depth_STAR__temp_val__51685,_STAR_shared_STAR__temp_val__51686,_STAR_instrument_STAR__temp_val__51687,_STAR_parent_STAR__temp_val__51688,this$,this__43720__auto__,x51678_52573){
return (function (){
var s__51703__$1 = s__51703;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__51703__$1);
if(temp__5720__auto____$1){
var s__51703__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__51703__$2)){
var c__4521__auto____$1 = cljs.core.chunk_first(s__51703__$2);
var size__4522__auto____$1 = cljs.core.count(c__4521__auto____$1);
var b__51705 = cljs.core.chunk_buffer(size__4522__auto____$1);
if((function (){var i__51704 = (0);
while(true){
if((i__51704 < size__4522__auto____$1)){
var vec__51706 = cljs.core._nth(c__4521__auto____$1,i__51704);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51706,(0),null);
var resolvers = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51706,(1),null);
var path_SINGLEQUOTE_ = cljs.core.next(path);
if(path_SINGLEQUOTE_){
cljs.core.chunk_append(b__51705,fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path], 0)),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"marginLeft","marginLeft",-551287007),"10px"], null)], null),(function (){var iter__4523__auto__ = ((function (i__51704,s__51703__$1,i__51695,s__51694__$1,path_SINGLEQUOTE_,vec__51706,path,resolvers,c__4521__auto____$1,size__4522__auto____$1,b__51705,s__51703__$2,temp__5720__auto____$1,direct_QMARK_,vec__51697,input,v,c__4521__auto__,size__4522__auto__,b__51696,s__51694__$2,temp__5720__auto__,nested_reaches_QMARK_,G__51691,map__51689,map__51689__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__51679,_STAR_depth_STAR__orig_val__51680,_STAR_shared_STAR__orig_val__51681,_STAR_instrument_STAR__orig_val__51682,_STAR_parent_STAR__orig_val__51683,_STAR_reconciler_STAR__temp_val__51684,_STAR_depth_STAR__temp_val__51685,_STAR_shared_STAR__temp_val__51686,_STAR_instrument_STAR__temp_val__51687,_STAR_parent_STAR__temp_val__51688,this$,this__43720__auto__,x51678_52573){
return (function com$wsscode$pathom$viz$index_explorer$iter__51693_$_iter__51702_$_iter__51709(s__51710){
return (new cljs.core.LazySeq(null,((function (i__51704,s__51703__$1,i__51695,s__51694__$1,path_SINGLEQUOTE_,vec__51706,path,resolvers,c__4521__auto____$1,size__4522__auto____$1,b__51705,s__51703__$2,temp__5720__auto____$1,direct_QMARK_,vec__51697,input,v,c__4521__auto__,size__4522__auto__,b__51696,s__51694__$2,temp__5720__auto__,nested_reaches_QMARK_,G__51691,map__51689,map__51689__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__51679,_STAR_depth_STAR__orig_val__51680,_STAR_shared_STAR__orig_val__51681,_STAR_instrument_STAR__orig_val__51682,_STAR_parent_STAR__orig_val__51683,_STAR_reconciler_STAR__temp_val__51684,_STAR_depth_STAR__temp_val__51685,_STAR_shared_STAR__temp_val__51686,_STAR_instrument_STAR__temp_val__51687,_STAR_parent_STAR__temp_val__51688,this$,this__43720__auto__,x51678_52573){
return (function (){
var s__51710__$1 = s__51710;
while(true){
var temp__5720__auto____$2 = cljs.core.seq(s__51710__$1);
if(temp__5720__auto____$2){
var s__51710__$2 = temp__5720__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__51710__$2)){
var c__4521__auto____$2 = cljs.core.chunk_first(s__51710__$2);
var size__4522__auto____$2 = cljs.core.count(c__4521__auto____$2);
var b__51712 = cljs.core.chunk_buffer(size__4522__auto____$2);
if((function (){var i__51711 = (0);
while(true){
if((i__51711 < size__4522__auto____$2)){
var vec__51713 = cljs.core._nth(c__4521__auto____$2,i__51711);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51713,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51713,(1),null);
cljs.core.chunk_append(b__51712,com.wsscode.pathom.viz.index_explorer.attribute_link(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),k,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"marginLeft","marginLeft",-551287007),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((i * (10))),"px"].join('')], null)], null),computed));

var G__52580 = (i__51711 + (1));
i__51711 = G__52580;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51712),com$wsscode$pathom$viz$index_explorer$iter__51693_$_iter__51702_$_iter__51709(cljs.core.chunk_rest(s__51710__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51712),null);
}
} else {
var vec__51716 = cljs.core.first(s__51710__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51716,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51716,(1),null);
return cljs.core.cons(com.wsscode.pathom.viz.index_explorer.attribute_link(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),k,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"marginLeft","marginLeft",-551287007),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((i * (10))),"px"].join('')], null)], null),computed),com$wsscode$pathom$viz$index_explorer$iter__51693_$_iter__51702_$_iter__51709(cljs.core.rest(s__51710__$2)));
}
} else {
return null;
}
break;
}
});})(i__51704,s__51703__$1,i__51695,s__51694__$1,path_SINGLEQUOTE_,vec__51706,path,resolvers,c__4521__auto____$1,size__4522__auto____$1,b__51705,s__51703__$2,temp__5720__auto____$1,direct_QMARK_,vec__51697,input,v,c__4521__auto__,size__4522__auto__,b__51696,s__51694__$2,temp__5720__auto__,nested_reaches_QMARK_,G__51691,map__51689,map__51689__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__51679,_STAR_depth_STAR__orig_val__51680,_STAR_shared_STAR__orig_val__51681,_STAR_instrument_STAR__orig_val__51682,_STAR_parent_STAR__orig_val__51683,_STAR_reconciler_STAR__temp_val__51684,_STAR_depth_STAR__temp_val__51685,_STAR_shared_STAR__temp_val__51686,_STAR_instrument_STAR__temp_val__51687,_STAR_parent_STAR__temp_val__51688,this$,this__43720__auto__,x51678_52573))
,null,null));
});})(i__51704,s__51703__$1,i__51695,s__51694__$1,path_SINGLEQUOTE_,vec__51706,path,resolvers,c__4521__auto____$1,size__4522__auto____$1,b__51705,s__51703__$2,temp__5720__auto____$1,direct_QMARK_,vec__51697,input,v,c__4521__auto__,size__4522__auto__,b__51696,s__51694__$2,temp__5720__auto__,nested_reaches_QMARK_,G__51691,map__51689,map__51689__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__51679,_STAR_depth_STAR__orig_val__51680,_STAR_shared_STAR__orig_val__51681,_STAR_instrument_STAR__orig_val__51682,_STAR_parent_STAR__orig_val__51683,_STAR_reconciler_STAR__temp_val__51684,_STAR_depth_STAR__temp_val__51685,_STAR_shared_STAR__temp_val__51686,_STAR_instrument_STAR__temp_val__51687,_STAR_parent_STAR__temp_val__51688,this$,this__43720__auto__,x51678_52573))
;
return iter__4523__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,path_SINGLEQUOTE_,cljs.core.range.cljs$core$IFn$_invoke$arity$0()));
})()], 0)));

var G__52581 = (i__51704 + (1));
i__51704 = G__52581;
continue;
} else {
var G__52582 = (i__51704 + (1));
i__51704 = G__52582;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51705),com$wsscode$pathom$viz$index_explorer$iter__51693_$_iter__51702(cljs.core.chunk_rest(s__51703__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51705),null);
}
} else {
var vec__51719 = cljs.core.first(s__51703__$2);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51719,(0),null);
var resolvers = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51719,(1),null);
var path_SINGLEQUOTE_ = cljs.core.next(path);
if(path_SINGLEQUOTE_){
return cljs.core.cons(fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path], 0)),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"marginLeft","marginLeft",-551287007),"10px"], null)], null),(function (){var iter__4523__auto__ = ((function (s__51703__$1,i__51695,s__51694__$1,path_SINGLEQUOTE_,vec__51719,path,resolvers,s__51703__$2,temp__5720__auto____$1,direct_QMARK_,vec__51697,input,v,c__4521__auto__,size__4522__auto__,b__51696,s__51694__$2,temp__5720__auto__,nested_reaches_QMARK_,G__51691,map__51689,map__51689__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__51679,_STAR_depth_STAR__orig_val__51680,_STAR_shared_STAR__orig_val__51681,_STAR_instrument_STAR__orig_val__51682,_STAR_parent_STAR__orig_val__51683,_STAR_reconciler_STAR__temp_val__51684,_STAR_depth_STAR__temp_val__51685,_STAR_shared_STAR__temp_val__51686,_STAR_instrument_STAR__temp_val__51687,_STAR_parent_STAR__temp_val__51688,this$,this__43720__auto__,x51678_52573){
return (function com$wsscode$pathom$viz$index_explorer$iter__51693_$_iter__51702_$_iter__51722(s__51723){
return (new cljs.core.LazySeq(null,((function (s__51703__$1,i__51695,s__51694__$1,path_SINGLEQUOTE_,vec__51719,path,resolvers,s__51703__$2,temp__5720__auto____$1,direct_QMARK_,vec__51697,input,v,c__4521__auto__,size__4522__auto__,b__51696,s__51694__$2,temp__5720__auto__,nested_reaches_QMARK_,G__51691,map__51689,map__51689__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__51679,_STAR_depth_STAR__orig_val__51680,_STAR_shared_STAR__orig_val__51681,_STAR_instrument_STAR__orig_val__51682,_STAR_parent_STAR__orig_val__51683,_STAR_reconciler_STAR__temp_val__51684,_STAR_depth_STAR__temp_val__51685,_STAR_shared_STAR__temp_val__51686,_STAR_instrument_STAR__temp_val__51687,_STAR_parent_STAR__temp_val__51688,this$,this__43720__auto__,x51678_52573){
return (function (){
var s__51723__$1 = s__51723;
while(true){
var temp__5720__auto____$2 = cljs.core.seq(s__51723__$1);
if(temp__5720__auto____$2){
var s__51723__$2 = temp__5720__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__51723__$2)){
var c__4521__auto____$1 = cljs.core.chunk_first(s__51723__$2);
var size__4522__auto____$1 = cljs.core.count(c__4521__auto____$1);
var b__51725 = cljs.core.chunk_buffer(size__4522__auto____$1);
if((function (){var i__51724 = (0);
while(true){
if((i__51724 < size__4522__auto____$1)){
var vec__51726 = cljs.core._nth(c__4521__auto____$1,i__51724);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51726,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51726,(1),null);
cljs.core.chunk_append(b__51725,com.wsscode.pathom.viz.index_explorer.attribute_link(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),k,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"marginLeft","marginLeft",-551287007),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((i * (10))),"px"].join('')], null)], null),computed));

var G__52606 = (i__51724 + (1));
i__51724 = G__52606;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51725),com$wsscode$pathom$viz$index_explorer$iter__51693_$_iter__51702_$_iter__51722(cljs.core.chunk_rest(s__51723__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51725),null);
}
} else {
var vec__51729 = cljs.core.first(s__51723__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51729,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51729,(1),null);
return cljs.core.cons(com.wsscode.pathom.viz.index_explorer.attribute_link(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),k,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"marginLeft","marginLeft",-551287007),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((i * (10))),"px"].join('')], null)], null),computed),com$wsscode$pathom$viz$index_explorer$iter__51693_$_iter__51702_$_iter__51722(cljs.core.rest(s__51723__$2)));
}
} else {
return null;
}
break;
}
});})(s__51703__$1,i__51695,s__51694__$1,path_SINGLEQUOTE_,vec__51719,path,resolvers,s__51703__$2,temp__5720__auto____$1,direct_QMARK_,vec__51697,input,v,c__4521__auto__,size__4522__auto__,b__51696,s__51694__$2,temp__5720__auto__,nested_reaches_QMARK_,G__51691,map__51689,map__51689__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__51679,_STAR_depth_STAR__orig_val__51680,_STAR_shared_STAR__orig_val__51681,_STAR_instrument_STAR__orig_val__51682,_STAR_parent_STAR__orig_val__51683,_STAR_reconciler_STAR__temp_val__51684,_STAR_depth_STAR__temp_val__51685,_STAR_shared_STAR__temp_val__51686,_STAR_instrument_STAR__temp_val__51687,_STAR_parent_STAR__temp_val__51688,this$,this__43720__auto__,x51678_52573))
,null,null));
});})(s__51703__$1,i__51695,s__51694__$1,path_SINGLEQUOTE_,vec__51719,path,resolvers,s__51703__$2,temp__5720__auto____$1,direct_QMARK_,vec__51697,input,v,c__4521__auto__,size__4522__auto__,b__51696,s__51694__$2,temp__5720__auto__,nested_reaches_QMARK_,G__51691,map__51689,map__51689__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__51679,_STAR_depth_STAR__orig_val__51680,_STAR_shared_STAR__orig_val__51681,_STAR_instrument_STAR__orig_val__51682,_STAR_parent_STAR__orig_val__51683,_STAR_reconciler_STAR__temp_val__51684,_STAR_depth_STAR__temp_val__51685,_STAR_shared_STAR__temp_val__51686,_STAR_instrument_STAR__temp_val__51687,_STAR_parent_STAR__temp_val__51688,this$,this__43720__auto__,x51678_52573))
;
return iter__4523__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,path_SINGLEQUOTE_,cljs.core.range.cljs$core$IFn$_invoke$arity$0()));
})()], 0)),com$wsscode$pathom$viz$index_explorer$iter__51693_$_iter__51702(cljs.core.rest(s__51703__$2)));
} else {
var G__52607 = cljs.core.rest(s__51703__$2);
s__51703__$1 = G__52607;
continue;
}
}
} else {
return null;
}
break;
}
});})(i__51695,s__51694__$1,direct_QMARK_,vec__51697,input,v,c__4521__auto__,size__4522__auto__,b__51696,s__51694__$2,temp__5720__auto__,nested_reaches_QMARK_,G__51691,map__51689,map__51689__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__51679,_STAR_depth_STAR__orig_val__51680,_STAR_shared_STAR__orig_val__51681,_STAR_instrument_STAR__orig_val__51682,_STAR_parent_STAR__orig_val__51683,_STAR_reconciler_STAR__temp_val__51684,_STAR_depth_STAR__temp_val__51685,_STAR_shared_STAR__temp_val__51686,_STAR_instrument_STAR__temp_val__51687,_STAR_parent_STAR__temp_val__51688,this$,this__43720__auto__,x51678_52573))
,null,null));
});})(i__51695,s__51694__$1,direct_QMARK_,vec__51697,input,v,c__4521__auto__,size__4522__auto__,b__51696,s__51694__$2,temp__5720__auto__,nested_reaches_QMARK_,G__51691,map__51689,map__51689__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__51679,_STAR_depth_STAR__orig_val__51680,_STAR_shared_STAR__orig_val__51681,_STAR_instrument_STAR__orig_val__51682,_STAR_parent_STAR__orig_val__51683,_STAR_reconciler_STAR__temp_val__51684,_STAR_depth_STAR__temp_val__51685,_STAR_shared_STAR__temp_val__51686,_STAR_instrument_STAR__temp_val__51687,_STAR_parent_STAR__temp_val__51688,this$,this__43720__auto__,x51678_52573))
;
return iter__4523__auto__(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(((function (i__51695,s__51694__$1,iter__4523__auto__,direct_QMARK_,vec__51697,input,v,c__4521__auto__,size__4522__auto__,b__51696,s__51694__$2,temp__5720__auto__,nested_reaches_QMARK_,G__51691,map__51689,map__51689__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__51679,_STAR_depth_STAR__orig_val__51680,_STAR_shared_STAR__orig_val__51681,_STAR_instrument_STAR__orig_val__51682,_STAR_parent_STAR__orig_val__51683,_STAR_reconciler_STAR__temp_val__51684,_STAR_depth_STAR__temp_val__51685,_STAR_shared_STAR__temp_val__51686,_STAR_instrument_STAR__temp_val__51687,_STAR_parent_STAR__temp_val__51688,this$,this__43720__auto__,x51678_52573){
return (function (p1__51675_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(p1__51675_SHARP_,(0),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,cljs.core.sort));
});})(i__51695,s__51694__$1,iter__4523__auto__,direct_QMARK_,vec__51697,input,v,c__4521__auto__,size__4522__auto__,b__51696,s__51694__$2,temp__5720__auto__,nested_reaches_QMARK_,G__51691,map__51689,map__51689__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__51679,_STAR_depth_STAR__orig_val__51680,_STAR_shared_STAR__orig_val__51681,_STAR_instrument_STAR__orig_val__51682,_STAR_parent_STAR__orig_val__51683,_STAR_reconciler_STAR__temp_val__51684,_STAR_depth_STAR__temp_val__51685,_STAR_shared_STAR__temp_val__51686,_STAR_instrument_STAR__temp_val__51687,_STAR_parent_STAR__temp_val__51688,this$,this__43720__auto__,x51678_52573))
,cljs.core.first),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__51695,s__51694__$1,iter__4523__auto__,direct_QMARK_,vec__51697,input,v,c__4521__auto__,size__4522__auto__,b__51696,s__51694__$2,temp__5720__auto__,nested_reaches_QMARK_,G__51691,map__51689,map__51689__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__51679,_STAR_depth_STAR__orig_val__51680,_STAR_shared_STAR__orig_val__51681,_STAR_instrument_STAR__orig_val__51682,_STAR_parent_STAR__orig_val__51683,_STAR_reconciler_STAR__temp_val__51684,_STAR_depth_STAR__temp_val__51685,_STAR_shared_STAR__temp_val__51686,_STAR_instrument_STAR__temp_val__51687,_STAR_parent_STAR__temp_val__51688,this$,this__43720__auto__,x51678_52573){
return (function (p1__51674_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(p1__51674_SHARP_,(0),((function (i__51695,s__51694__$1,iter__4523__auto__,direct_QMARK_,vec__51697,input,v,c__4521__auto__,size__4522__auto__,b__51696,s__51694__$2,temp__5720__auto__,nested_reaches_QMARK_,G__51691,map__51689,map__51689__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__51679,_STAR_depth_STAR__orig_val__51680,_STAR_shared_STAR__orig_val__51681,_STAR_instrument_STAR__orig_val__51682,_STAR_parent_STAR__orig_val__51683,_STAR_reconciler_STAR__temp_val__51684,_STAR_depth_STAR__temp_val__51685,_STAR_shared_STAR__temp_val__51686,_STAR_instrument_STAR__temp_val__51687,_STAR_parent_STAR__temp_val__51688,this$,this__43720__auto__,x51678_52573){
return (function (x){
if(cljs.core.set_QMARK_(x)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
} else {
return x;
}
});})(i__51695,s__51694__$1,iter__4523__auto__,direct_QMARK_,vec__51697,input,v,c__4521__auto__,size__4522__auto__,b__51696,s__51694__$2,temp__5720__auto__,nested_reaches_QMARK_,G__51691,map__51689,map__51689__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__51679,_STAR_depth_STAR__orig_val__51680,_STAR_shared_STAR__orig_val__51681,_STAR_instrument_STAR__orig_val__51682,_STAR_parent_STAR__orig_val__51683,_STAR_reconciler_STAR__temp_val__51684,_STAR_depth_STAR__temp_val__51685,_STAR_shared_STAR__temp_val__51686,_STAR_instrument_STAR__temp_val__51687,_STAR_parent_STAR__temp_val__51688,this$,this__43720__auto__,x51678_52573))
);
});})(i__51695,s__51694__$1,iter__4523__auto__,direct_QMARK_,vec__51697,input,v,c__4521__auto__,size__4522__auto__,b__51696,s__51694__$2,temp__5720__auto__,nested_reaches_QMARK_,G__51691,map__51689,map__51689__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__51679,_STAR_depth_STAR__orig_val__51680,_STAR_shared_STAR__orig_val__51681,_STAR_instrument_STAR__orig_val__51682,_STAR_parent_STAR__orig_val__51683,_STAR_reconciler_STAR__temp_val__51684,_STAR_depth_STAR__temp_val__51685,_STAR_shared_STAR__temp_val__51686,_STAR_instrument_STAR__temp_val__51687,_STAR_parent_STAR__temp_val__51688,this$,this__43720__auto__,x51678_52573))
,v)));
})():null)], 0)));

var G__52608 = (i__51695 + (1));
i__51695 = G__52608;
continue;
} else {
var G__52609 = (i__51695 + (1));
i__51695 = G__52609;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51696),com$wsscode$pathom$viz$index_explorer$iter__51693(cljs.core.chunk_rest(s__51694__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51696),null);
}
} else {
var vec__51732 = cljs.core.first(s__51694__$2);
var input = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51732,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51732,(1),null);
var direct_QMARK_ = cljs.core.some(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(com.wsscode.pathom.viz.index_explorer.direct_input_QMARK_,cljs.core.first),v);
if(cljs.core.truth_((function (){var or__4131__auto__ = direct_QMARK_;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return nested_reaches_QMARK_;
}
})())){
return cljs.core.cons(fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([input], 0))], null),com.wsscode.pathom.viz.index_explorer.attribute_link(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),(function (){var G__51735 = input;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(input),(1))){
return cljs.core.first(G__51735);
} else {
return G__51735;
}
})(),new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","render","com.wsscode.pathom.viz.ui.kit/render",1024565529),((function (s__51694__$1,direct_QMARK_,vec__51732,input,v,s__51694__$2,temp__5720__auto__,nested_reaches_QMARK_,G__51691,map__51689,map__51689__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__51679,_STAR_depth_STAR__orig_val__51680,_STAR_shared_STAR__orig_val__51681,_STAR_instrument_STAR__orig_val__51682,_STAR_parent_STAR__orig_val__51683,_STAR_reconciler_STAR__temp_val__51684,_STAR_depth_STAR__temp_val__51685,_STAR_shared_STAR__temp_val__51686,_STAR_instrument_STAR__temp_val__51687,_STAR_parent_STAR__temp_val__51688,this$,this__43720__auto__,x51678_52573){
return (function (){
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([input], 0));
});})(s__51694__$1,direct_QMARK_,vec__51732,input,v,s__51694__$2,temp__5720__auto__,nested_reaches_QMARK_,G__51691,map__51689,map__51689__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__51679,_STAR_depth_STAR__orig_val__51680,_STAR_shared_STAR__orig_val__51681,_STAR_instrument_STAR__orig_val__51682,_STAR_parent_STAR__orig_val__51683,_STAR_reconciler_STAR__temp_val__51684,_STAR_depth_STAR__temp_val__51685,_STAR_shared_STAR__temp_val__51686,_STAR_instrument_STAR__temp_val__51687,_STAR_parent_STAR__temp_val__51688,this$,this__43720__auto__,x51678_52573))
,new cljs.core.Keyword(null,"style","style",-496642736),(function (){var G__51736 = cljs.core.PersistentArrayMap.EMPTY;
if(cljs.core.truth_(direct_QMARK_)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51736,new cljs.core.Keyword(null,"fontWeight","fontWeight",166450581),"bold");
} else {
return G__51736;
}
})()], null),computed),((nested_reaches_QMARK_)?(function (){var iter__4523__auto__ = ((function (s__51694__$1,direct_QMARK_,vec__51732,input,v,s__51694__$2,temp__5720__auto__,nested_reaches_QMARK_,G__51691,map__51689,map__51689__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__51679,_STAR_depth_STAR__orig_val__51680,_STAR_shared_STAR__orig_val__51681,_STAR_instrument_STAR__orig_val__51682,_STAR_parent_STAR__orig_val__51683,_STAR_reconciler_STAR__temp_val__51684,_STAR_depth_STAR__temp_val__51685,_STAR_shared_STAR__temp_val__51686,_STAR_instrument_STAR__temp_val__51687,_STAR_parent_STAR__temp_val__51688,this$,this__43720__auto__,x51678_52573){
return (function com$wsscode$pathom$viz$index_explorer$iter__51693_$_iter__51737(s__51738){
return (new cljs.core.LazySeq(null,((function (s__51694__$1,direct_QMARK_,vec__51732,input,v,s__51694__$2,temp__5720__auto__,nested_reaches_QMARK_,G__51691,map__51689,map__51689__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__51679,_STAR_depth_STAR__orig_val__51680,_STAR_shared_STAR__orig_val__51681,_STAR_instrument_STAR__orig_val__51682,_STAR_parent_STAR__orig_val__51683,_STAR_reconciler_STAR__temp_val__51684,_STAR_depth_STAR__temp_val__51685,_STAR_shared_STAR__temp_val__51686,_STAR_instrument_STAR__temp_val__51687,_STAR_parent_STAR__temp_val__51688,this$,this__43720__auto__,x51678_52573){
return (function (){
var s__51738__$1 = s__51738;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__51738__$1);
if(temp__5720__auto____$1){
var s__51738__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__51738__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__51738__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__51740 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__51739 = (0);
while(true){
if((i__51739 < size__4522__auto__)){
var vec__51741 = cljs.core._nth(c__4521__auto__,i__51739);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51741,(0),null);
var resolvers = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51741,(1),null);
var path_SINGLEQUOTE_ = cljs.core.next(path);
if(path_SINGLEQUOTE_){
cljs.core.chunk_append(b__51740,fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path], 0)),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"marginLeft","marginLeft",-551287007),"10px"], null)], null),(function (){var iter__4523__auto__ = ((function (i__51739,s__51738__$1,s__51694__$1,path_SINGLEQUOTE_,vec__51741,path,resolvers,c__4521__auto__,size__4522__auto__,b__51740,s__51738__$2,temp__5720__auto____$1,direct_QMARK_,vec__51732,input,v,s__51694__$2,temp__5720__auto__,nested_reaches_QMARK_,G__51691,map__51689,map__51689__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__51679,_STAR_depth_STAR__orig_val__51680,_STAR_shared_STAR__orig_val__51681,_STAR_instrument_STAR__orig_val__51682,_STAR_parent_STAR__orig_val__51683,_STAR_reconciler_STAR__temp_val__51684,_STAR_depth_STAR__temp_val__51685,_STAR_shared_STAR__temp_val__51686,_STAR_instrument_STAR__temp_val__51687,_STAR_parent_STAR__temp_val__51688,this$,this__43720__auto__,x51678_52573){
return (function com$wsscode$pathom$viz$index_explorer$iter__51693_$_iter__51737_$_iter__51744(s__51745){
return (new cljs.core.LazySeq(null,((function (i__51739,s__51738__$1,s__51694__$1,path_SINGLEQUOTE_,vec__51741,path,resolvers,c__4521__auto__,size__4522__auto__,b__51740,s__51738__$2,temp__5720__auto____$1,direct_QMARK_,vec__51732,input,v,s__51694__$2,temp__5720__auto__,nested_reaches_QMARK_,G__51691,map__51689,map__51689__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__51679,_STAR_depth_STAR__orig_val__51680,_STAR_shared_STAR__orig_val__51681,_STAR_instrument_STAR__orig_val__51682,_STAR_parent_STAR__orig_val__51683,_STAR_reconciler_STAR__temp_val__51684,_STAR_depth_STAR__temp_val__51685,_STAR_shared_STAR__temp_val__51686,_STAR_instrument_STAR__temp_val__51687,_STAR_parent_STAR__temp_val__51688,this$,this__43720__auto__,x51678_52573){
return (function (){
var s__51745__$1 = s__51745;
while(true){
var temp__5720__auto____$2 = cljs.core.seq(s__51745__$1);
if(temp__5720__auto____$2){
var s__51745__$2 = temp__5720__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__51745__$2)){
var c__4521__auto____$1 = cljs.core.chunk_first(s__51745__$2);
var size__4522__auto____$1 = cljs.core.count(c__4521__auto____$1);
var b__51747 = cljs.core.chunk_buffer(size__4522__auto____$1);
if((function (){var i__51746 = (0);
while(true){
if((i__51746 < size__4522__auto____$1)){
var vec__51748 = cljs.core._nth(c__4521__auto____$1,i__51746);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51748,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51748,(1),null);
cljs.core.chunk_append(b__51747,com.wsscode.pathom.viz.index_explorer.attribute_link(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),k,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"marginLeft","marginLeft",-551287007),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((i * (10))),"px"].join('')], null)], null),computed));

var G__52610 = (i__51746 + (1));
i__51746 = G__52610;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51747),com$wsscode$pathom$viz$index_explorer$iter__51693_$_iter__51737_$_iter__51744(cljs.core.chunk_rest(s__51745__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51747),null);
}
} else {
var vec__51751 = cljs.core.first(s__51745__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51751,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51751,(1),null);
return cljs.core.cons(com.wsscode.pathom.viz.index_explorer.attribute_link(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),k,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"marginLeft","marginLeft",-551287007),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((i * (10))),"px"].join('')], null)], null),computed),com$wsscode$pathom$viz$index_explorer$iter__51693_$_iter__51737_$_iter__51744(cljs.core.rest(s__51745__$2)));
}
} else {
return null;
}
break;
}
});})(i__51739,s__51738__$1,s__51694__$1,path_SINGLEQUOTE_,vec__51741,path,resolvers,c__4521__auto__,size__4522__auto__,b__51740,s__51738__$2,temp__5720__auto____$1,direct_QMARK_,vec__51732,input,v,s__51694__$2,temp__5720__auto__,nested_reaches_QMARK_,G__51691,map__51689,map__51689__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__51679,_STAR_depth_STAR__orig_val__51680,_STAR_shared_STAR__orig_val__51681,_STAR_instrument_STAR__orig_val__51682,_STAR_parent_STAR__orig_val__51683,_STAR_reconciler_STAR__temp_val__51684,_STAR_depth_STAR__temp_val__51685,_STAR_shared_STAR__temp_val__51686,_STAR_instrument_STAR__temp_val__51687,_STAR_parent_STAR__temp_val__51688,this$,this__43720__auto__,x51678_52573))
,null,null));
});})(i__51739,s__51738__$1,s__51694__$1,path_SINGLEQUOTE_,vec__51741,path,resolvers,c__4521__auto__,size__4522__auto__,b__51740,s__51738__$2,temp__5720__auto____$1,direct_QMARK_,vec__51732,input,v,s__51694__$2,temp__5720__auto__,nested_reaches_QMARK_,G__51691,map__51689,map__51689__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__51679,_STAR_depth_STAR__orig_val__51680,_STAR_shared_STAR__orig_val__51681,_STAR_instrument_STAR__orig_val__51682,_STAR_parent_STAR__orig_val__51683,_STAR_reconciler_STAR__temp_val__51684,_STAR_depth_STAR__temp_val__51685,_STAR_shared_STAR__temp_val__51686,_STAR_instrument_STAR__temp_val__51687,_STAR_parent_STAR__temp_val__51688,this$,this__43720__auto__,x51678_52573))
;
return iter__4523__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,path_SINGLEQUOTE_,cljs.core.range.cljs$core$IFn$_invoke$arity$0()));
})()], 0)));

var G__52611 = (i__51739 + (1));
i__51739 = G__52611;
continue;
} else {
var G__52612 = (i__51739 + (1));
i__51739 = G__52612;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51740),com$wsscode$pathom$viz$index_explorer$iter__51693_$_iter__51737(cljs.core.chunk_rest(s__51738__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51740),null);
}
} else {
var vec__51754 = cljs.core.first(s__51738__$2);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51754,(0),null);
var resolvers = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51754,(1),null);
var path_SINGLEQUOTE_ = cljs.core.next(path);
if(path_SINGLEQUOTE_){
return cljs.core.cons(fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path], 0)),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"marginLeft","marginLeft",-551287007),"10px"], null)], null),(function (){var iter__4523__auto__ = ((function (s__51738__$1,s__51694__$1,path_SINGLEQUOTE_,vec__51754,path,resolvers,s__51738__$2,temp__5720__auto____$1,direct_QMARK_,vec__51732,input,v,s__51694__$2,temp__5720__auto__,nested_reaches_QMARK_,G__51691,map__51689,map__51689__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__51679,_STAR_depth_STAR__orig_val__51680,_STAR_shared_STAR__orig_val__51681,_STAR_instrument_STAR__orig_val__51682,_STAR_parent_STAR__orig_val__51683,_STAR_reconciler_STAR__temp_val__51684,_STAR_depth_STAR__temp_val__51685,_STAR_shared_STAR__temp_val__51686,_STAR_instrument_STAR__temp_val__51687,_STAR_parent_STAR__temp_val__51688,this$,this__43720__auto__,x51678_52573){
return (function com$wsscode$pathom$viz$index_explorer$iter__51693_$_iter__51737_$_iter__51757(s__51758){
return (new cljs.core.LazySeq(null,((function (s__51738__$1,s__51694__$1,path_SINGLEQUOTE_,vec__51754,path,resolvers,s__51738__$2,temp__5720__auto____$1,direct_QMARK_,vec__51732,input,v,s__51694__$2,temp__5720__auto__,nested_reaches_QMARK_,G__51691,map__51689,map__51689__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__51679,_STAR_depth_STAR__orig_val__51680,_STAR_shared_STAR__orig_val__51681,_STAR_instrument_STAR__orig_val__51682,_STAR_parent_STAR__orig_val__51683,_STAR_reconciler_STAR__temp_val__51684,_STAR_depth_STAR__temp_val__51685,_STAR_shared_STAR__temp_val__51686,_STAR_instrument_STAR__temp_val__51687,_STAR_parent_STAR__temp_val__51688,this$,this__43720__auto__,x51678_52573){
return (function (){
var s__51758__$1 = s__51758;
while(true){
var temp__5720__auto____$2 = cljs.core.seq(s__51758__$1);
if(temp__5720__auto____$2){
var s__51758__$2 = temp__5720__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__51758__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__51758__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__51760 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__51759 = (0);
while(true){
if((i__51759 < size__4522__auto__)){
var vec__51761 = cljs.core._nth(c__4521__auto__,i__51759);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51761,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51761,(1),null);
cljs.core.chunk_append(b__51760,com.wsscode.pathom.viz.index_explorer.attribute_link(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),k,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"marginLeft","marginLeft",-551287007),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((i * (10))),"px"].join('')], null)], null),computed));

var G__52613 = (i__51759 + (1));
i__51759 = G__52613;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51760),com$wsscode$pathom$viz$index_explorer$iter__51693_$_iter__51737_$_iter__51757(cljs.core.chunk_rest(s__51758__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51760),null);
}
} else {
var vec__51764 = cljs.core.first(s__51758__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51764,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51764,(1),null);
return cljs.core.cons(com.wsscode.pathom.viz.index_explorer.attribute_link(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),k,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"marginLeft","marginLeft",-551287007),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((i * (10))),"px"].join('')], null)], null),computed),com$wsscode$pathom$viz$index_explorer$iter__51693_$_iter__51737_$_iter__51757(cljs.core.rest(s__51758__$2)));
}
} else {
return null;
}
break;
}
});})(s__51738__$1,s__51694__$1,path_SINGLEQUOTE_,vec__51754,path,resolvers,s__51738__$2,temp__5720__auto____$1,direct_QMARK_,vec__51732,input,v,s__51694__$2,temp__5720__auto__,nested_reaches_QMARK_,G__51691,map__51689,map__51689__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__51679,_STAR_depth_STAR__orig_val__51680,_STAR_shared_STAR__orig_val__51681,_STAR_instrument_STAR__orig_val__51682,_STAR_parent_STAR__orig_val__51683,_STAR_reconciler_STAR__temp_val__51684,_STAR_depth_STAR__temp_val__51685,_STAR_shared_STAR__temp_val__51686,_STAR_instrument_STAR__temp_val__51687,_STAR_parent_STAR__temp_val__51688,this$,this__43720__auto__,x51678_52573))
,null,null));
});})(s__51738__$1,s__51694__$1,path_SINGLEQUOTE_,vec__51754,path,resolvers,s__51738__$2,temp__5720__auto____$1,direct_QMARK_,vec__51732,input,v,s__51694__$2,temp__5720__auto__,nested_reaches_QMARK_,G__51691,map__51689,map__51689__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__51679,_STAR_depth_STAR__orig_val__51680,_STAR_shared_STAR__orig_val__51681,_STAR_instrument_STAR__orig_val__51682,_STAR_parent_STAR__orig_val__51683,_STAR_reconciler_STAR__temp_val__51684,_STAR_depth_STAR__temp_val__51685,_STAR_shared_STAR__temp_val__51686,_STAR_instrument_STAR__temp_val__51687,_STAR_parent_STAR__temp_val__51688,this$,this__43720__auto__,x51678_52573))
;
return iter__4523__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,path_SINGLEQUOTE_,cljs.core.range.cljs$core$IFn$_invoke$arity$0()));
})()], 0)),com$wsscode$pathom$viz$index_explorer$iter__51693_$_iter__51737(cljs.core.rest(s__51738__$2)));
} else {
var G__52614 = cljs.core.rest(s__51738__$2);
s__51738__$1 = G__52614;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__51694__$1,direct_QMARK_,vec__51732,input,v,s__51694__$2,temp__5720__auto__,nested_reaches_QMARK_,G__51691,map__51689,map__51689__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__51679,_STAR_depth_STAR__orig_val__51680,_STAR_shared_STAR__orig_val__51681,_STAR_instrument_STAR__orig_val__51682,_STAR_parent_STAR__orig_val__51683,_STAR_reconciler_STAR__temp_val__51684,_STAR_depth_STAR__temp_val__51685,_STAR_shared_STAR__temp_val__51686,_STAR_instrument_STAR__temp_val__51687,_STAR_parent_STAR__temp_val__51688,this$,this__43720__auto__,x51678_52573))
,null,null));
});})(s__51694__$1,direct_QMARK_,vec__51732,input,v,s__51694__$2,temp__5720__auto__,nested_reaches_QMARK_,G__51691,map__51689,map__51689__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__51679,_STAR_depth_STAR__orig_val__51680,_STAR_shared_STAR__orig_val__51681,_STAR_instrument_STAR__orig_val__51682,_STAR_parent_STAR__orig_val__51683,_STAR_reconciler_STAR__temp_val__51684,_STAR_depth_STAR__temp_val__51685,_STAR_shared_STAR__temp_val__51686,_STAR_instrument_STAR__temp_val__51687,_STAR_parent_STAR__temp_val__51688,this$,this__43720__auto__,x51678_52573))
;
return iter__4523__auto__(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(((function (s__51694__$1,iter__4523__auto__,direct_QMARK_,vec__51732,input,v,s__51694__$2,temp__5720__auto__,nested_reaches_QMARK_,G__51691,map__51689,map__51689__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__51679,_STAR_depth_STAR__orig_val__51680,_STAR_shared_STAR__orig_val__51681,_STAR_instrument_STAR__orig_val__51682,_STAR_parent_STAR__orig_val__51683,_STAR_reconciler_STAR__temp_val__51684,_STAR_depth_STAR__temp_val__51685,_STAR_shared_STAR__temp_val__51686,_STAR_instrument_STAR__temp_val__51687,_STAR_parent_STAR__temp_val__51688,this$,this__43720__auto__,x51678_52573){
return (function (p1__51675_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(p1__51675_SHARP_,(0),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,cljs.core.sort));
});})(s__51694__$1,iter__4523__auto__,direct_QMARK_,vec__51732,input,v,s__51694__$2,temp__5720__auto__,nested_reaches_QMARK_,G__51691,map__51689,map__51689__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__51679,_STAR_depth_STAR__orig_val__51680,_STAR_shared_STAR__orig_val__51681,_STAR_instrument_STAR__orig_val__51682,_STAR_parent_STAR__orig_val__51683,_STAR_reconciler_STAR__temp_val__51684,_STAR_depth_STAR__temp_val__51685,_STAR_shared_STAR__temp_val__51686,_STAR_instrument_STAR__temp_val__51687,_STAR_parent_STAR__temp_val__51688,this$,this__43720__auto__,x51678_52573))
,cljs.core.first),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (s__51694__$1,iter__4523__auto__,direct_QMARK_,vec__51732,input,v,s__51694__$2,temp__5720__auto__,nested_reaches_QMARK_,G__51691,map__51689,map__51689__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__51679,_STAR_depth_STAR__orig_val__51680,_STAR_shared_STAR__orig_val__51681,_STAR_instrument_STAR__orig_val__51682,_STAR_parent_STAR__orig_val__51683,_STAR_reconciler_STAR__temp_val__51684,_STAR_depth_STAR__temp_val__51685,_STAR_shared_STAR__temp_val__51686,_STAR_instrument_STAR__temp_val__51687,_STAR_parent_STAR__temp_val__51688,this$,this__43720__auto__,x51678_52573){
return (function (p1__51674_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(p1__51674_SHARP_,(0),((function (s__51694__$1,iter__4523__auto__,direct_QMARK_,vec__51732,input,v,s__51694__$2,temp__5720__auto__,nested_reaches_QMARK_,G__51691,map__51689,map__51689__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__51679,_STAR_depth_STAR__orig_val__51680,_STAR_shared_STAR__orig_val__51681,_STAR_instrument_STAR__orig_val__51682,_STAR_parent_STAR__orig_val__51683,_STAR_reconciler_STAR__temp_val__51684,_STAR_depth_STAR__temp_val__51685,_STAR_shared_STAR__temp_val__51686,_STAR_instrument_STAR__temp_val__51687,_STAR_parent_STAR__temp_val__51688,this$,this__43720__auto__,x51678_52573){
return (function (x){
if(cljs.core.set_QMARK_(x)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
} else {
return x;
}
});})(s__51694__$1,iter__4523__auto__,direct_QMARK_,vec__51732,input,v,s__51694__$2,temp__5720__auto__,nested_reaches_QMARK_,G__51691,map__51689,map__51689__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__51679,_STAR_depth_STAR__orig_val__51680,_STAR_shared_STAR__orig_val__51681,_STAR_instrument_STAR__orig_val__51682,_STAR_parent_STAR__orig_val__51683,_STAR_reconciler_STAR__temp_val__51684,_STAR_depth_STAR__temp_val__51685,_STAR_shared_STAR__temp_val__51686,_STAR_instrument_STAR__temp_val__51687,_STAR_parent_STAR__temp_val__51688,this$,this__43720__auto__,x51678_52573))
);
});})(s__51694__$1,iter__4523__auto__,direct_QMARK_,vec__51732,input,v,s__51694__$2,temp__5720__auto__,nested_reaches_QMARK_,G__51691,map__51689,map__51689__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__51679,_STAR_depth_STAR__orig_val__51680,_STAR_shared_STAR__orig_val__51681,_STAR_instrument_STAR__orig_val__51682,_STAR_parent_STAR__orig_val__51683,_STAR_reconciler_STAR__temp_val__51684,_STAR_depth_STAR__temp_val__51685,_STAR_shared_STAR__temp_val__51686,_STAR_instrument_STAR__temp_val__51687,_STAR_parent_STAR__temp_val__51688,this$,this__43720__auto__,x51678_52573))
,v)));
})():null)], 0)),com$wsscode$pathom$viz$index_explorer$iter__51693(cljs.core.rest(s__51694__$2)));
} else {
var G__52615 = cljs.core.rest(s__51694__$2);
s__51694__$1 = G__52615;
continue;
}
}
} else {
return null;
}
break;
}
});})(nested_reaches_QMARK_,G__51691,map__51689,map__51689__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__51679,_STAR_depth_STAR__orig_val__51680,_STAR_shared_STAR__orig_val__51681,_STAR_instrument_STAR__orig_val__51682,_STAR_parent_STAR__orig_val__51683,_STAR_reconciler_STAR__temp_val__51684,_STAR_depth_STAR__temp_val__51685,_STAR_shared_STAR__temp_val__51686,_STAR_instrument_STAR__temp_val__51687,_STAR_parent_STAR__temp_val__51688,this$,this__43720__auto__,x51678_52573))
,null,null));
});})(nested_reaches_QMARK_,G__51691,map__51689,map__51689__$1,attr_reach_via,computed,_STAR_reconciler_STAR__orig_val__51679,_STAR_depth_STAR__orig_val__51680,_STAR_shared_STAR__orig_val__51681,_STAR_instrument_STAR__orig_val__51682,_STAR_parent_STAR__orig_val__51683,_STAR_reconciler_STAR__temp_val__51684,_STAR_depth_STAR__temp_val__51685,_STAR_shared_STAR__temp_val__51686,_STAR_instrument_STAR__temp_val__51687,_STAR_parent_STAR__temp_val__51688,this$,this__43720__auto__,x51678_52573))
;
return iter__4523__auto__(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.pr_str,com.wsscode.pathom.viz.index_explorer.attr_path_key_root,cljs.core.first),cljs.core.group_by(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(com.wsscode.pathom.viz.index_explorer.attr_path_key_root,cljs.core.first),attr_reach_via)));
})();
return (com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2(G__51691,G__51692) : com.wsscode.pathom.viz.ui.kit.panel.call(null,G__51691,G__51692));
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__51683;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__51682;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__51681;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__51680;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__51679;
}});})(x51678_52573))
;


com.wsscode.pathom.viz.index_explorer.AttributeInfoReachVia.prototype.constructor = com.wsscode.pathom.viz.index_explorer.AttributeInfoReachVia;

com.wsscode.pathom.viz.index_explorer.AttributeInfoReachVia.prototype.constructor.displayName = "com.wsscode.pathom.viz.index-explorer/AttributeInfoReachVia";

com.wsscode.pathom.viz.index_explorer.AttributeInfoReachVia.prototype.fulcro$isComponent = true;

var x51767_52616 = com.wsscode.pathom.viz.index_explorer.AttributeInfoReachVia;
x51767_52616.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x51767_52616.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x51767_52616){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x51767_52616))
;

x51767_52616.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x51767_52616.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x51767_52616){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via","com.wsscode.pathom.connect/attr-reach-via",-483841559)], null);
});})(x51767_52616))
;


var x51768_52617 = com.wsscode.pathom.viz.index_explorer.AttributeInfoReachVia.prototype;
x51768_52617.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x51768_52617.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x51768_52617){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x51768_52617))
;

x51768_52617.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x51768_52617.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x51768_52617){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via","com.wsscode.pathom.connect/attr-reach-via",-483841559)], null);
});})(x51768_52617))
;


com.wsscode.pathom.viz.index_explorer.AttributeInfoReachVia.cljs$lang$type = true;

com.wsscode.pathom.viz.index_explorer.AttributeInfoReachVia.cljs$lang$ctorStr = "com.wsscode.pathom.viz.index-explorer/AttributeInfoReachVia";

com.wsscode.pathom.viz.index_explorer.AttributeInfoReachVia.cljs$lang$ctorPrWriter = (function (this__44805__auto__,writer__44806__auto__,opt__44807__auto__){
return cljs.core._write(writer__44806__auto__,"com.wsscode.pathom.viz.index-explorer/AttributeInfoReachVia");
});
com.wsscode.pathom.viz.index_explorer.attribute_info_reach_via = fulcro.client.primitives.computed_factory.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.AttributeInfoReachVia);
if((typeof com !== 'undefined') && (typeof com.wsscode !== 'undefined') && (typeof com.wsscode.pathom !== 'undefined') && (typeof com.wsscode.pathom.viz !== 'undefined') && (typeof com.wsscode.pathom.viz.index_explorer !== 'undefined') && (typeof com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationParamIn !== 'undefined')){
} else {
/**
 * @constructor
 * @nocollapse
 */
com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationParamIn = (function com$wsscode$pathom$viz$index_explorer$AttributeInfoMutationParamIn(){
var this__44802__auto__ = this;
React.Component.apply(this__44802__auto__,arguments);

if((!((this__44802__auto__.initLocalState == null)))){
this__44802__auto__.state = this__44802__auto__.initLocalState();
} else {
this__44802__auto__.state = ({});
}

return this__44802__auto__;
});

goog.object.extend(com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationParamIn.prototype,React.Component.prototype,fulcro.client.primitives.default_component_prototype);
}

fulcro.client.primitives._register_component_BANG_(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","AttributeInfoMutationParamIn","com.wsscode.pathom.viz.index-explorer/AttributeInfoMutationParamIn",768684351),com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationParamIn);

var x51771_52618 = com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationParamIn.prototype;
x51771_52618.render = ((function (x51771_52618){
return (function (){
var this__43720__auto__ = this;
var this$ = this__43720__auto__;
var _STAR_reconciler_STAR__orig_val__51772 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__51773 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__51774 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__51775 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__51776 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__51777 = fulcro.client.primitives.get_reconciler(this__43720__auto__);
var _STAR_depth_STAR__temp_val__51778 = (fulcro.client.primitives.depth(this__43720__auto__) + (1));
var _STAR_shared_STAR__temp_val__51779 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__43720__auto__);
var _STAR_instrument_STAR__temp_val__51780 = fulcro.client.primitives.instrument(this__43720__auto__);
var _STAR_parent_STAR__temp_val__51781 = this__43720__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__51777;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__51778;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__51779;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__51780;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__51781;

try{var map__51782 = fulcro.client.primitives.props(this$);
var map__51782__$1 = (((((!((map__51782 == null))))?(((((map__51782.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51782.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51782):map__51782);
var attr_mutation_param_in = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51782__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attr-mutation-param-in","com.wsscode.pathom.connect/attr-mutation-param-in",-1474382671));
var computed = fulcro.client.primitives.get_computed.cljs$core$IFn$_invoke$arity$1(this$);
var G__51784 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","panel-title","com.wsscode.pathom.viz.ui.kit/panel-title",1529445284),"Mutation Param In",new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","panel-tag","com.wsscode.pathom.viz.ui.kit/panel-tag",144392508),cljs.core.count(attr_mutation_param_in)], null);
var G__51785 = (function (){var iter__4523__auto__ = ((function (G__51784,map__51782,map__51782__$1,attr_mutation_param_in,computed,_STAR_reconciler_STAR__orig_val__51772,_STAR_depth_STAR__orig_val__51773,_STAR_shared_STAR__orig_val__51774,_STAR_instrument_STAR__orig_val__51775,_STAR_parent_STAR__orig_val__51776,_STAR_reconciler_STAR__temp_val__51777,_STAR_depth_STAR__temp_val__51778,_STAR_shared_STAR__temp_val__51779,_STAR_instrument_STAR__temp_val__51780,_STAR_parent_STAR__temp_val__51781,this$,this__43720__auto__,x51771_52618){
return (function com$wsscode$pathom$viz$index_explorer$iter__51786(s__51787){
return (new cljs.core.LazySeq(null,((function (G__51784,map__51782,map__51782__$1,attr_mutation_param_in,computed,_STAR_reconciler_STAR__orig_val__51772,_STAR_depth_STAR__orig_val__51773,_STAR_shared_STAR__orig_val__51774,_STAR_instrument_STAR__orig_val__51775,_STAR_parent_STAR__orig_val__51776,_STAR_reconciler_STAR__temp_val__51777,_STAR_depth_STAR__temp_val__51778,_STAR_shared_STAR__temp_val__51779,_STAR_instrument_STAR__temp_val__51780,_STAR_parent_STAR__temp_val__51781,this$,this__43720__auto__,x51771_52618){
return (function (){
var s__51787__$1 = s__51787;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__51787__$1);
if(temp__5720__auto__){
var s__51787__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__51787__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__51787__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__51789 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__51788 = (0);
while(true){
if((i__51788 < size__4522__auto__)){
var sym = cljs.core._nth(c__4521__auto__,i__51788);
cljs.core.chunk_append(b__51789,com.wsscode.pathom.viz.index_explorer.mutation_link(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),sym], null),computed));

var G__52619 = (i__51788 + (1));
i__51788 = G__52619;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51789),com$wsscode$pathom$viz$index_explorer$iter__51786(cljs.core.chunk_rest(s__51787__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51789),null);
}
} else {
var sym = cljs.core.first(s__51787__$2);
return cljs.core.cons(com.wsscode.pathom.viz.index_explorer.mutation_link(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),sym], null),computed),com$wsscode$pathom$viz$index_explorer$iter__51786(cljs.core.rest(s__51787__$2)));
}
} else {
return null;
}
break;
}
});})(G__51784,map__51782,map__51782__$1,attr_mutation_param_in,computed,_STAR_reconciler_STAR__orig_val__51772,_STAR_depth_STAR__orig_val__51773,_STAR_shared_STAR__orig_val__51774,_STAR_instrument_STAR__orig_val__51775,_STAR_parent_STAR__orig_val__51776,_STAR_reconciler_STAR__temp_val__51777,_STAR_depth_STAR__temp_val__51778,_STAR_shared_STAR__temp_val__51779,_STAR_instrument_STAR__temp_val__51780,_STAR_parent_STAR__temp_val__51781,this$,this__43720__auto__,x51771_52618))
,null,null));
});})(G__51784,map__51782,map__51782__$1,attr_mutation_param_in,computed,_STAR_reconciler_STAR__orig_val__51772,_STAR_depth_STAR__orig_val__51773,_STAR_shared_STAR__orig_val__51774,_STAR_instrument_STAR__orig_val__51775,_STAR_parent_STAR__orig_val__51776,_STAR_reconciler_STAR__temp_val__51777,_STAR_depth_STAR__temp_val__51778,_STAR_shared_STAR__temp_val__51779,_STAR_instrument_STAR__temp_val__51780,_STAR_parent_STAR__temp_val__51781,this$,this__43720__auto__,x51771_52618))
;
return iter__4523__auto__(cljs.core.sort.cljs$core$IFn$_invoke$arity$1(attr_mutation_param_in));
})();
return (com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2(G__51784,G__51785) : com.wsscode.pathom.viz.ui.kit.panel.call(null,G__51784,G__51785));
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__51776;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__51775;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__51774;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__51773;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__51772;
}});})(x51771_52618))
;


com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationParamIn.prototype.constructor = com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationParamIn;

com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationParamIn.prototype.constructor.displayName = "com.wsscode.pathom.viz.index-explorer/AttributeInfoMutationParamIn";

com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationParamIn.prototype.fulcro$isComponent = true;

var x51790_52620 = com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationParamIn;
x51790_52620.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x51790_52620.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x51790_52620){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x51790_52620))
;

x51790_52620.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x51790_52620.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x51790_52620){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-mutation-param-in","com.wsscode.pathom.connect/attr-mutation-param-in",-1474382671)], null);
});})(x51790_52620))
;


var x51791_52621 = com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationParamIn.prototype;
x51791_52621.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x51791_52621.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x51791_52621){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x51791_52621))
;

x51791_52621.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x51791_52621.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x51791_52621){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-mutation-param-in","com.wsscode.pathom.connect/attr-mutation-param-in",-1474382671)], null);
});})(x51791_52621))
;


com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationParamIn.cljs$lang$type = true;

com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationParamIn.cljs$lang$ctorStr = "com.wsscode.pathom.viz.index-explorer/AttributeInfoMutationParamIn";

com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationParamIn.cljs$lang$ctorPrWriter = (function (this__44805__auto__,writer__44806__auto__,opt__44807__auto__){
return cljs.core._write(writer__44806__auto__,"com.wsscode.pathom.viz.index-explorer/AttributeInfoMutationParamIn");
});
com.wsscode.pathom.viz.index_explorer.attribute_info_mutation_param_in = fulcro.client.primitives.computed_factory.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationParamIn);
if((typeof com !== 'undefined') && (typeof com.wsscode !== 'undefined') && (typeof com.wsscode.pathom !== 'undefined') && (typeof com.wsscode.pathom.viz !== 'undefined') && (typeof com.wsscode.pathom.viz.index_explorer !== 'undefined') && (typeof com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationOutputIn !== 'undefined')){
} else {
/**
 * @constructor
 * @nocollapse
 */
com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationOutputIn = (function com$wsscode$pathom$viz$index_explorer$AttributeInfoMutationOutputIn(){
var this__44802__auto__ = this;
React.Component.apply(this__44802__auto__,arguments);

if((!((this__44802__auto__.initLocalState == null)))){
this__44802__auto__.state = this__44802__auto__.initLocalState();
} else {
this__44802__auto__.state = ({});
}

return this__44802__auto__;
});

goog.object.extend(com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationOutputIn.prototype,React.Component.prototype,fulcro.client.primitives.default_component_prototype);
}

fulcro.client.primitives._register_component_BANG_(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","AttributeInfoMutationOutputIn","com.wsscode.pathom.viz.index-explorer/AttributeInfoMutationOutputIn",304871094),com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationOutputIn);

var x51794_52622 = com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationOutputIn.prototype;
x51794_52622.render = ((function (x51794_52622){
return (function (){
var this__43720__auto__ = this;
var this$ = this__43720__auto__;
var _STAR_reconciler_STAR__orig_val__51795 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__51796 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__51797 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__51798 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__51799 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__51800 = fulcro.client.primitives.get_reconciler(this__43720__auto__);
var _STAR_depth_STAR__temp_val__51801 = (fulcro.client.primitives.depth(this__43720__auto__) + (1));
var _STAR_shared_STAR__temp_val__51802 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__43720__auto__);
var _STAR_instrument_STAR__temp_val__51803 = fulcro.client.primitives.instrument(this__43720__auto__);
var _STAR_parent_STAR__temp_val__51804 = this__43720__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__51800;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__51801;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__51802;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__51803;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__51804;

try{var map__51805 = fulcro.client.primitives.props(this$);
var map__51805__$1 = (((((!((map__51805 == null))))?(((((map__51805.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51805.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51805):map__51805);
var attr_mutation_output_in = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51805__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attr-mutation-output-in","com.wsscode.pathom.connect/attr-mutation-output-in",1122448739));
var computed = fulcro.client.primitives.get_computed.cljs$core$IFn$_invoke$arity$1(this$);
var G__51807 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","panel-title","com.wsscode.pathom.viz.ui.kit/panel-title",1529445284),"Mutation Output In",new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","panel-tag","com.wsscode.pathom.viz.ui.kit/panel-tag",144392508),cljs.core.count(attr_mutation_output_in)], null);
var G__51808 = (function (){var iter__4523__auto__ = ((function (G__51807,map__51805,map__51805__$1,attr_mutation_output_in,computed,_STAR_reconciler_STAR__orig_val__51795,_STAR_depth_STAR__orig_val__51796,_STAR_shared_STAR__orig_val__51797,_STAR_instrument_STAR__orig_val__51798,_STAR_parent_STAR__orig_val__51799,_STAR_reconciler_STAR__temp_val__51800,_STAR_depth_STAR__temp_val__51801,_STAR_shared_STAR__temp_val__51802,_STAR_instrument_STAR__temp_val__51803,_STAR_parent_STAR__temp_val__51804,this$,this__43720__auto__,x51794_52622){
return (function com$wsscode$pathom$viz$index_explorer$iter__51809(s__51810){
return (new cljs.core.LazySeq(null,((function (G__51807,map__51805,map__51805__$1,attr_mutation_output_in,computed,_STAR_reconciler_STAR__orig_val__51795,_STAR_depth_STAR__orig_val__51796,_STAR_shared_STAR__orig_val__51797,_STAR_instrument_STAR__orig_val__51798,_STAR_parent_STAR__orig_val__51799,_STAR_reconciler_STAR__temp_val__51800,_STAR_depth_STAR__temp_val__51801,_STAR_shared_STAR__temp_val__51802,_STAR_instrument_STAR__temp_val__51803,_STAR_parent_STAR__temp_val__51804,this$,this__43720__auto__,x51794_52622){
return (function (){
var s__51810__$1 = s__51810;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__51810__$1);
if(temp__5720__auto__){
var s__51810__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__51810__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__51810__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__51812 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__51811 = (0);
while(true){
if((i__51811 < size__4522__auto__)){
var sym = cljs.core._nth(c__4521__auto__,i__51811);
cljs.core.chunk_append(b__51812,com.wsscode.pathom.viz.index_explorer.mutation_link(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),sym], null),computed));

var G__52623 = (i__51811 + (1));
i__51811 = G__52623;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51812),com$wsscode$pathom$viz$index_explorer$iter__51809(cljs.core.chunk_rest(s__51810__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51812),null);
}
} else {
var sym = cljs.core.first(s__51810__$2);
return cljs.core.cons(com.wsscode.pathom.viz.index_explorer.mutation_link(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),sym], null),computed),com$wsscode$pathom$viz$index_explorer$iter__51809(cljs.core.rest(s__51810__$2)));
}
} else {
return null;
}
break;
}
});})(G__51807,map__51805,map__51805__$1,attr_mutation_output_in,computed,_STAR_reconciler_STAR__orig_val__51795,_STAR_depth_STAR__orig_val__51796,_STAR_shared_STAR__orig_val__51797,_STAR_instrument_STAR__orig_val__51798,_STAR_parent_STAR__orig_val__51799,_STAR_reconciler_STAR__temp_val__51800,_STAR_depth_STAR__temp_val__51801,_STAR_shared_STAR__temp_val__51802,_STAR_instrument_STAR__temp_val__51803,_STAR_parent_STAR__temp_val__51804,this$,this__43720__auto__,x51794_52622))
,null,null));
});})(G__51807,map__51805,map__51805__$1,attr_mutation_output_in,computed,_STAR_reconciler_STAR__orig_val__51795,_STAR_depth_STAR__orig_val__51796,_STAR_shared_STAR__orig_val__51797,_STAR_instrument_STAR__orig_val__51798,_STAR_parent_STAR__orig_val__51799,_STAR_reconciler_STAR__temp_val__51800,_STAR_depth_STAR__temp_val__51801,_STAR_shared_STAR__temp_val__51802,_STAR_instrument_STAR__temp_val__51803,_STAR_parent_STAR__temp_val__51804,this$,this__43720__auto__,x51794_52622))
;
return iter__4523__auto__(cljs.core.sort.cljs$core$IFn$_invoke$arity$1(attr_mutation_output_in));
})();
return (com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2(G__51807,G__51808) : com.wsscode.pathom.viz.ui.kit.panel.call(null,G__51807,G__51808));
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__51799;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__51798;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__51797;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__51796;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__51795;
}});})(x51794_52622))
;


com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationOutputIn.prototype.constructor = com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationOutputIn;

com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationOutputIn.prototype.constructor.displayName = "com.wsscode.pathom.viz.index-explorer/AttributeInfoMutationOutputIn";

com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationOutputIn.prototype.fulcro$isComponent = true;

var x51813_52624 = com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationOutputIn;
x51813_52624.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x51813_52624.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x51813_52624){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x51813_52624))
;

x51813_52624.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x51813_52624.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x51813_52624){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-mutation-output-in","com.wsscode.pathom.connect/attr-mutation-output-in",1122448739)], null);
});})(x51813_52624))
;


var x51814_52625 = com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationOutputIn.prototype;
x51814_52625.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x51814_52625.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x51814_52625){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x51814_52625))
;

x51814_52625.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x51814_52625.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x51814_52625){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-mutation-output-in","com.wsscode.pathom.connect/attr-mutation-output-in",1122448739)], null);
});})(x51814_52625))
;


com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationOutputIn.cljs$lang$type = true;

com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationOutputIn.cljs$lang$ctorStr = "com.wsscode.pathom.viz.index-explorer/AttributeInfoMutationOutputIn";

com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationOutputIn.cljs$lang$ctorPrWriter = (function (this__44805__auto__,writer__44806__auto__,opt__44807__auto__){
return cljs.core._write(writer__44806__auto__,"com.wsscode.pathom.viz.index-explorer/AttributeInfoMutationOutputIn");
});
com.wsscode.pathom.viz.index_explorer.attribute_info_mutation_output_in = fulcro.client.primitives.computed_factory.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationOutputIn);
if((typeof com !== 'undefined') && (typeof com.wsscode !== 'undefined') && (typeof com.wsscode.pathom !== 'undefined') && (typeof com.wsscode.pathom.viz !== 'undefined') && (typeof com.wsscode.pathom.viz.index_explorer !== 'undefined') && (typeof com.wsscode.pathom.viz.index_explorer.ExamplesPanel !== 'undefined')){
} else {
/**
 * @constructor
 * @nocollapse
 */
com.wsscode.pathom.viz.index_explorer.ExamplesPanel = (function com$wsscode$pathom$viz$index_explorer$ExamplesPanel(){
var this__44802__auto__ = this;
React.Component.apply(this__44802__auto__,arguments);

if((!((this__44802__auto__.initLocalState == null)))){
this__44802__auto__.state = this__44802__auto__.initLocalState();
} else {
this__44802__auto__.state = ({});
}

return this__44802__auto__;
});

goog.object.extend(com.wsscode.pathom.viz.index_explorer.ExamplesPanel.prototype,React.Component.prototype,fulcro.client.primitives.default_component_prototype);
}

fulcro.client.primitives._register_component_BANG_(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","ExamplesPanel","com.wsscode.pathom.viz.index-explorer/ExamplesPanel",846657103),com.wsscode.pathom.viz.index_explorer.ExamplesPanel);

var x51817_52626 = com.wsscode.pathom.viz.index_explorer.ExamplesPanel.prototype;
x51817_52626.render = ((function (x51817_52626){
return (function (){
var this__43720__auto__ = this;
var this$ = this__43720__auto__;
var _STAR_reconciler_STAR__orig_val__51818 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__51819 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__51820 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__51821 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__51822 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__51823 = fulcro.client.primitives.get_reconciler(this__43720__auto__);
var _STAR_depth_STAR__temp_val__51824 = (fulcro.client.primitives.depth(this__43720__auto__) + (1));
var _STAR_shared_STAR__temp_val__51825 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__43720__auto__);
var _STAR_instrument_STAR__temp_val__51826 = fulcro.client.primitives.instrument(this__43720__auto__);
var _STAR_parent_STAR__temp_val__51827 = this__43720__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__51823;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__51824;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__51825;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__51826;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__51827;

try{var map__51828 = fulcro.client.primitives.props(this$);
var map__51828__$1 = (((((!((map__51828 == null))))?(((((map__51828.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51828.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51828):map__51828);
var attribute = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51828__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075));
var G__51830 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","panel-title","com.wsscode.pathom.viz.ui.kit/panel-title",1529445284),(function (){var G__51832 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"classes","classes",2037804510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".center",".center",-1815728518)], null)], null);
var G__51833 = fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Examples"], 0));
var G__51834 = fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.wsscode.pathom.viz.ui.kit.gc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".flex",".flex",-73425686)], 0))], 0));
var G__51835 = (function (){var G__51836 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (G__51832,G__51833,G__51834,map__51828,map__51828__$1,attribute,_STAR_reconciler_STAR__orig_val__51818,_STAR_depth_STAR__orig_val__51819,_STAR_shared_STAR__orig_val__51820,_STAR_instrument_STAR__orig_val__51821,_STAR_parent_STAR__orig_val__51822,_STAR_reconciler_STAR__temp_val__51823,_STAR_depth_STAR__temp_val__51824,_STAR_shared_STAR__temp_val__51825,_STAR_instrument_STAR__temp_val__51826,_STAR_parent_STAR__temp_val__51827,this$,this__43720__auto__,x51817_52626){
return (function (){
return fulcro.client.primitives.set_state_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"seed","seed",68613327),cljs.core.rand.cljs$core$IFn$_invoke$arity$0()], null));
});})(G__51832,G__51833,G__51834,map__51828,map__51828__$1,attribute,_STAR_reconciler_STAR__orig_val__51818,_STAR_depth_STAR__orig_val__51819,_STAR_shared_STAR__orig_val__51820,_STAR_instrument_STAR__orig_val__51821,_STAR_parent_STAR__orig_val__51822,_STAR_reconciler_STAR__temp_val__51823,_STAR_depth_STAR__temp_val__51824,_STAR_shared_STAR__temp_val__51825,_STAR_instrument_STAR__temp_val__51826,_STAR_parent_STAR__temp_val__51827,this$,this__43720__auto__,x51817_52626))
], null);
var G__51837 = fulcro.client.localized_dom.i.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"classes","classes",2037804510),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["fa","fa-sync-alt"], null)], null)], 0));
return (com.wsscode.pathom.viz.ui.kit.button.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.button.cljs$core$IFn$_invoke$arity$2(G__51836,G__51837) : com.wsscode.pathom.viz.ui.kit.button.call(null,G__51836,G__51837));
})();
return (com.wsscode.pathom.viz.ui.kit.row.cljs$core$IFn$_invoke$arity$4 ? com.wsscode.pathom.viz.ui.kit.row.cljs$core$IFn$_invoke$arity$4(G__51832,G__51833,G__51834,G__51835) : com.wsscode.pathom.viz.ui.kit.row.call(null,G__51832,G__51833,G__51834,G__51835));
})()], null);
var G__51831 = fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".examples",".examples",-775726891),(function (){try{var samples = cljs.core.vec(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(clojure.test.check.generators.sample.cljs$core$IFn$_invoke$arity$1(cljs.spec.alpha.gen.cljs$core$IFn$_invoke$arity$1(attribute))));
var samples__$1 = (function (){try{return cljs.core.sort.cljs$core$IFn$_invoke$arity$1(samples);
}catch (e51839){var _ = e51839;
return samples;
}})();
var iter__4523__auto__ = ((function (samples,samples__$1,G__51830,map__51828,map__51828__$1,attribute,_STAR_reconciler_STAR__orig_val__51818,_STAR_depth_STAR__orig_val__51819,_STAR_shared_STAR__orig_val__51820,_STAR_instrument_STAR__orig_val__51821,_STAR_parent_STAR__orig_val__51822,_STAR_reconciler_STAR__temp_val__51823,_STAR_depth_STAR__temp_val__51824,_STAR_shared_STAR__temp_val__51825,_STAR_instrument_STAR__temp_val__51826,_STAR_parent_STAR__temp_val__51827,this$,this__43720__auto__,x51817_52626){
return (function com$wsscode$pathom$viz$index_explorer$iter__51840(s__51841){
return (new cljs.core.LazySeq(null,((function (samples,samples__$1,G__51830,map__51828,map__51828__$1,attribute,_STAR_reconciler_STAR__orig_val__51818,_STAR_depth_STAR__orig_val__51819,_STAR_shared_STAR__orig_val__51820,_STAR_instrument_STAR__orig_val__51821,_STAR_parent_STAR__orig_val__51822,_STAR_reconciler_STAR__temp_val__51823,_STAR_depth_STAR__temp_val__51824,_STAR_shared_STAR__temp_val__51825,_STAR_instrument_STAR__temp_val__51826,_STAR_parent_STAR__temp_val__51827,this$,this__43720__auto__,x51817_52626){
return (function (){
var s__51841__$1 = s__51841;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__51841__$1);
if(temp__5720__auto__){
var s__51841__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__51841__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__51841__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__51843 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__51842 = (0);
while(true){
if((i__51842 < size__4522__auto__)){
var vec__51844 = cljs.core._nth(c__4521__auto__,i__51842);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51844,(0),null);
var example = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51844,(1),null);
cljs.core.chunk_append(b__51843,fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["example-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join('')], null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([example], 0))], 0)));

var G__52627 = (i__51842 + (1));
i__51842 = G__52627;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51843),com$wsscode$pathom$viz$index_explorer$iter__51840(cljs.core.chunk_rest(s__51841__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51843),null);
}
} else {
var vec__51847 = cljs.core.first(s__51841__$2);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51847,(0),null);
var example = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51847,(1),null);
return cljs.core.cons(fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["example-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join('')], null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([example], 0))], 0)),com$wsscode$pathom$viz$index_explorer$iter__51840(cljs.core.rest(s__51841__$2)));
}
} else {
return null;
}
break;
}
});})(samples,samples__$1,G__51830,map__51828,map__51828__$1,attribute,_STAR_reconciler_STAR__orig_val__51818,_STAR_depth_STAR__orig_val__51819,_STAR_shared_STAR__orig_val__51820,_STAR_instrument_STAR__orig_val__51821,_STAR_parent_STAR__orig_val__51822,_STAR_reconciler_STAR__temp_val__51823,_STAR_depth_STAR__temp_val__51824,_STAR_shared_STAR__temp_val__51825,_STAR_instrument_STAR__temp_val__51826,_STAR_parent_STAR__temp_val__51827,this$,this__43720__auto__,x51817_52626))
,null,null));
});})(samples,samples__$1,G__51830,map__51828,map__51828__$1,attribute,_STAR_reconciler_STAR__orig_val__51818,_STAR_depth_STAR__orig_val__51819,_STAR_shared_STAR__orig_val__51820,_STAR_instrument_STAR__orig_val__51821,_STAR_parent_STAR__orig_val__51822,_STAR_reconciler_STAR__temp_val__51823,_STAR_depth_STAR__temp_val__51824,_STAR_shared_STAR__temp_val__51825,_STAR_instrument_STAR__temp_val__51826,_STAR_parent_STAR__temp_val__51827,this$,this__43720__auto__,x51817_52626))
;
return iter__4523__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.range.cljs$core$IFn$_invoke$arity$0(),samples__$1));
}catch (e51838){var ex = e51838;
return fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error generating samples:",fulcro.client.localized_dom.pre.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".error",".error",115475668),cljs.core.ex_message(ex)], 0))], 0));
}})()], 0));
return (com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2(G__51830,G__51831) : com.wsscode.pathom.viz.ui.kit.panel.call(null,G__51830,G__51831));
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__51822;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__51821;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__51820;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__51819;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__51818;
}});})(x51817_52626))
;


com.wsscode.pathom.viz.index_explorer.ExamplesPanel.prototype.constructor = com.wsscode.pathom.viz.index_explorer.ExamplesPanel;

com.wsscode.pathom.viz.index_explorer.ExamplesPanel.prototype.constructor.displayName = "com.wsscode.pathom.viz.index-explorer/ExamplesPanel";

com.wsscode.pathom.viz.index_explorer.ExamplesPanel.prototype.fulcro$isComponent = true;

var x51850_52628 = com.wsscode.pathom.viz.index_explorer.ExamplesPanel;
x51850_52628.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x51850_52628.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x51850_52628){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".examples",".examples",-775726891),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-family","font-family",-667419874),com.wsscode.pathom.viz.ui.kit.font_code], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".error",".error",115475668),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#f44336"], null)], null)], null);
});})(x51850_52628))
;

x51850_52628.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x51850_52628){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x51850_52628))
;


var x51851_52629 = com.wsscode.pathom.viz.index_explorer.ExamplesPanel.prototype;
x51851_52629.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x51851_52629.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x51851_52629){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".examples",".examples",-775726891),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-family","font-family",-667419874),com.wsscode.pathom.viz.ui.kit.font_code], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".error",".error",115475668),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#f44336"], null)], null)], null);
});})(x51851_52629))
;

x51851_52629.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x51851_52629){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x51851_52629))
;


com.wsscode.pathom.viz.index_explorer.ExamplesPanel.cljs$lang$type = true;

com.wsscode.pathom.viz.index_explorer.ExamplesPanel.cljs$lang$ctorStr = "com.wsscode.pathom.viz.index-explorer/ExamplesPanel";

com.wsscode.pathom.viz.index_explorer.ExamplesPanel.cljs$lang$ctorPrWriter = (function (this__44805__auto__,writer__44806__auto__,opt__44807__auto__){
return cljs.core._write(writer__44806__auto__,"com.wsscode.pathom.viz.index-explorer/ExamplesPanel");
});
com.wsscode.pathom.viz.index_explorer.examples_panel = fulcro.client.primitives.computed_factory.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.ExamplesPanel);
if((typeof com !== 'undefined') && (typeof com.wsscode !== 'undefined') && (typeof com.wsscode.pathom !== 'undefined') && (typeof com.wsscode.pathom.viz !== 'undefined') && (typeof com.wsscode.pathom.viz.index_explorer !== 'undefined') && (typeof com.wsscode.pathom.viz.index_explorer.AttributeGraphPanel !== 'undefined')){
} else {
/**
 * @constructor
 * @nocollapse
 */
com.wsscode.pathom.viz.index_explorer.AttributeGraphPanel = (function com$wsscode$pathom$viz$index_explorer$AttributeGraphPanel(){
var this__44802__auto__ = this;
React.Component.apply(this__44802__auto__,arguments);

if((!((this__44802__auto__.initLocalState == null)))){
this__44802__auto__.state = this__44802__auto__.initLocalState();
} else {
this__44802__auto__.state = ({});
}

return this__44802__auto__;
});

goog.object.extend(com.wsscode.pathom.viz.index_explorer.AttributeGraphPanel.prototype,React.Component.prototype,fulcro.client.primitives.default_component_prototype);
}

fulcro.client.primitives._register_component_BANG_(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","AttributeGraphPanel","com.wsscode.pathom.viz.index-explorer/AttributeGraphPanel",-658371264),com.wsscode.pathom.viz.index_explorer.AttributeGraphPanel);

var x51856_52630 = com.wsscode.pathom.viz.index_explorer.AttributeGraphPanel.prototype;
x51856_52630.render = ((function (x51856_52630){
return (function (){
var this__43720__auto__ = this;
var this$ = this__43720__auto__;
var _STAR_reconciler_STAR__orig_val__51857 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__51858 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__51859 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__51860 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__51861 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__51862 = fulcro.client.primitives.get_reconciler(this__43720__auto__);
var _STAR_depth_STAR__temp_val__51863 = (fulcro.client.primitives.depth(this__43720__auto__) + (1));
var _STAR_shared_STAR__temp_val__51864 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__43720__auto__);
var _STAR_instrument_STAR__temp_val__51865 = fulcro.client.primitives.instrument(this__43720__auto__);
var _STAR_parent_STAR__temp_val__51866 = this__43720__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__51862;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__51863;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__51864;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__51865;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__51866;

try{var map__51867 = fulcro.client.primitives.props(this$);
var map__51867__$1 = (((((!((map__51867 == null))))?(((((map__51867.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51867.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51867):map__51867);
var attribute = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51867__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075));
var attr_depth = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51867__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-depth","com.wsscode.pathom.viz.index-explorer/attr-depth",-1327711242));
var direct_reaches_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51867__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","direct-reaches?","com.wsscode.pathom.viz.index-explorer/direct-reaches?",-1036048994));
var nested_reaches_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51867__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","nested-reaches?","com.wsscode.pathom.viz.index-explorer/nested-reaches?",-22429448));
var direct_provides_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51867__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","direct-provides?","com.wsscode.pathom.viz.index-explorer/direct-provides?",223892052));
var nested_provides_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51867__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","nested-provides?","com.wsscode.pathom.viz.index-explorer/nested-provides?",-1296758362));
var interconnections_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51867__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","interconnections?","com.wsscode.pathom.viz.index-explorer/interconnections?",-1723481228));
var map__51868 = fulcro.client.primitives.get_computed.cljs$core$IFn$_invoke$arity$1(this$);
var map__51868__$1 = (((((!((map__51868 == null))))?(((((map__51868.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51868.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51868):map__51868);
var on_select_attribute = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51868__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","on-select-attribute","com.wsscode.pathom.viz.index-explorer/on-select-attribute",2006419034));
var attributes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51868__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attributes","com.wsscode.pathom.viz.index-explorer/attributes",-67264281));
var graph_comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51868__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","graph-comm","com.wsscode.pathom.viz.index-explorer/graph-comm",-735750087));
var G__51871 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","panel-title","com.wsscode.pathom.viz.ui.kit/panel-title",1529445284),(function (){var G__51873 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"classes","classes",2037804510),com.wsscode.pathom.viz.ui.kit.ccss.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".graph-options",".graph-options",1009499042)], 0))], null);
var G__51874 = (function (){var G__51879 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"classes","classes",2037804510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".center",".center",-1815728518)], null)], null);
var G__51880 = fulcro.client.localized_dom.label.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Depth"], 0));
var G__51881 = (function (){var G__51882 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"min","min",444991522),(1),new cljs.core.Keyword(null,"value","value",305978217),attr_depth,new cljs.core.Keyword(null,"onChange","onChange",-312891301),((function (G__51879,G__51880,G__51873,map__51867,map__51867__$1,attribute,attr_depth,direct_reaches_QMARK_,nested_reaches_QMARK_,direct_provides_QMARK_,nested_provides_QMARK_,interconnections_QMARK_,map__51868,map__51868__$1,on_select_attribute,attributes,graph_comm,_STAR_reconciler_STAR__orig_val__51857,_STAR_depth_STAR__orig_val__51858,_STAR_shared_STAR__orig_val__51859,_STAR_instrument_STAR__orig_val__51860,_STAR_parent_STAR__orig_val__51861,_STAR_reconciler_STAR__temp_val__51862,_STAR_depth_STAR__temp_val__51863,_STAR_shared_STAR__temp_val__51864,_STAR_instrument_STAR__temp_val__51865,_STAR_parent_STAR__temp_val__51866,this$,this__43720__auto__,x51856_52630){
return (function (p1__51853_SHARP_,p2__51852_SHARP_){
return fulcro.client.mutations.set_value_BANG_(this$,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-depth","com.wsscode.pathom.viz.index-explorer/attr-depth",-1327711242),p2__51852_SHARP_);
});})(G__51879,G__51880,G__51873,map__51867,map__51867__$1,attribute,attr_depth,direct_reaches_QMARK_,nested_reaches_QMARK_,direct_provides_QMARK_,nested_provides_QMARK_,interconnections_QMARK_,map__51868,map__51868__$1,on_select_attribute,attributes,graph_comm,_STAR_reconciler_STAR__orig_val__51857,_STAR_depth_STAR__orig_val__51858,_STAR_shared_STAR__orig_val__51859,_STAR_instrument_STAR__orig_val__51860,_STAR_parent_STAR__orig_val__51861,_STAR_reconciler_STAR__temp_val__51862,_STAR_depth_STAR__temp_val__51863,_STAR_shared_STAR__temp_val__51864,_STAR_instrument_STAR__temp_val__51865,_STAR_parent_STAR__temp_val__51866,this$,this__43720__auto__,x51856_52630))
], null);
return (com.wsscode.pathom.viz.ui.kit.number_input.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom.viz.ui.kit.number_input.cljs$core$IFn$_invoke$arity$1(G__51882) : com.wsscode.pathom.viz.ui.kit.number_input.call(null,G__51882));
})();
return (com.wsscode.pathom.viz.ui.kit.row.cljs$core$IFn$_invoke$arity$3 ? com.wsscode.pathom.viz.ui.kit.row.cljs$core$IFn$_invoke$arity$3(G__51879,G__51880,G__51881) : com.wsscode.pathom.viz.ui.kit.row.call(null,G__51879,G__51880,G__51881));
})();
var G__51875 = (function (){var G__51883 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","active?","com.wsscode.pathom.viz.ui.kit/active?",-2040404697),direct_reaches_QMARK_,new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (G__51873,G__51874,map__51867,map__51867__$1,attribute,attr_depth,direct_reaches_QMARK_,nested_reaches_QMARK_,direct_provides_QMARK_,nested_provides_QMARK_,interconnections_QMARK_,map__51868,map__51868__$1,on_select_attribute,attributes,graph_comm,_STAR_reconciler_STAR__orig_val__51857,_STAR_depth_STAR__orig_val__51858,_STAR_shared_STAR__orig_val__51859,_STAR_instrument_STAR__orig_val__51860,_STAR_parent_STAR__orig_val__51861,_STAR_reconciler_STAR__temp_val__51862,_STAR_depth_STAR__temp_val__51863,_STAR_shared_STAR__temp_val__51864,_STAR_instrument_STAR__temp_val__51865,_STAR_parent_STAR__temp_val__51866,this$,this__43720__auto__,x51856_52630){
return (function (){
return fulcro.client.mutations.set_value_BANG_(this$,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","direct-reaches?","com.wsscode.pathom.viz.index-explorer/direct-reaches?",-1036048994),cljs.core.not(direct_reaches_QMARK_));
});})(G__51873,G__51874,map__51867,map__51867__$1,attribute,attr_depth,direct_reaches_QMARK_,nested_reaches_QMARK_,direct_provides_QMARK_,nested_provides_QMARK_,interconnections_QMARK_,map__51868,map__51868__$1,on_select_attribute,attributes,graph_comm,_STAR_reconciler_STAR__orig_val__51857,_STAR_depth_STAR__orig_val__51858,_STAR_shared_STAR__orig_val__51859,_STAR_instrument_STAR__orig_val__51860,_STAR_parent_STAR__orig_val__51861,_STAR_reconciler_STAR__temp_val__51862,_STAR_depth_STAR__temp_val__51863,_STAR_shared_STAR__temp_val__51864,_STAR_instrument_STAR__temp_val__51865,_STAR_parent_STAR__temp_val__51866,this$,this__43720__auto__,x51856_52630))
], null);
var G__51884 = "Direct inputs";
return (com.wsscode.pathom.viz.ui.kit.toggle_action.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.toggle_action.cljs$core$IFn$_invoke$arity$2(G__51883,G__51884) : com.wsscode.pathom.viz.ui.kit.toggle_action.call(null,G__51883,G__51884));
})();
var G__51876 = (function (){var G__51885 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","active?","com.wsscode.pathom.viz.ui.kit/active?",-2040404697),nested_reaches_QMARK_,new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (G__51873,G__51874,G__51875,map__51867,map__51867__$1,attribute,attr_depth,direct_reaches_QMARK_,nested_reaches_QMARK_,direct_provides_QMARK_,nested_provides_QMARK_,interconnections_QMARK_,map__51868,map__51868__$1,on_select_attribute,attributes,graph_comm,_STAR_reconciler_STAR__orig_val__51857,_STAR_depth_STAR__orig_val__51858,_STAR_shared_STAR__orig_val__51859,_STAR_instrument_STAR__orig_val__51860,_STAR_parent_STAR__orig_val__51861,_STAR_reconciler_STAR__temp_val__51862,_STAR_depth_STAR__temp_val__51863,_STAR_shared_STAR__temp_val__51864,_STAR_instrument_STAR__temp_val__51865,_STAR_parent_STAR__temp_val__51866,this$,this__43720__auto__,x51856_52630){
return (function (){
return fulcro.client.mutations.set_value_BANG_(this$,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","nested-reaches?","com.wsscode.pathom.viz.index-explorer/nested-reaches?",-22429448),cljs.core.not(nested_reaches_QMARK_));
});})(G__51873,G__51874,G__51875,map__51867,map__51867__$1,attribute,attr_depth,direct_reaches_QMARK_,nested_reaches_QMARK_,direct_provides_QMARK_,nested_provides_QMARK_,interconnections_QMARK_,map__51868,map__51868__$1,on_select_attribute,attributes,graph_comm,_STAR_reconciler_STAR__orig_val__51857,_STAR_depth_STAR__orig_val__51858,_STAR_shared_STAR__orig_val__51859,_STAR_instrument_STAR__orig_val__51860,_STAR_parent_STAR__orig_val__51861,_STAR_reconciler_STAR__temp_val__51862,_STAR_depth_STAR__temp_val__51863,_STAR_shared_STAR__temp_val__51864,_STAR_instrument_STAR__temp_val__51865,_STAR_parent_STAR__temp_val__51866,this$,this__43720__auto__,x51856_52630))
], null);
var G__51886 = "Nested inputs";
return (com.wsscode.pathom.viz.ui.kit.toggle_action.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.toggle_action.cljs$core$IFn$_invoke$arity$2(G__51885,G__51886) : com.wsscode.pathom.viz.ui.kit.toggle_action.call(null,G__51885,G__51886));
})();
var G__51877 = (function (){var G__51887 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","active?","com.wsscode.pathom.viz.ui.kit/active?",-2040404697),direct_provides_QMARK_,new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (G__51873,G__51874,G__51875,G__51876,map__51867,map__51867__$1,attribute,attr_depth,direct_reaches_QMARK_,nested_reaches_QMARK_,direct_provides_QMARK_,nested_provides_QMARK_,interconnections_QMARK_,map__51868,map__51868__$1,on_select_attribute,attributes,graph_comm,_STAR_reconciler_STAR__orig_val__51857,_STAR_depth_STAR__orig_val__51858,_STAR_shared_STAR__orig_val__51859,_STAR_instrument_STAR__orig_val__51860,_STAR_parent_STAR__orig_val__51861,_STAR_reconciler_STAR__temp_val__51862,_STAR_depth_STAR__temp_val__51863,_STAR_shared_STAR__temp_val__51864,_STAR_instrument_STAR__temp_val__51865,_STAR_parent_STAR__temp_val__51866,this$,this__43720__auto__,x51856_52630){
return (function (){
return fulcro.client.mutations.set_value_BANG_(this$,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","direct-provides?","com.wsscode.pathom.viz.index-explorer/direct-provides?",223892052),cljs.core.not(direct_provides_QMARK_));
});})(G__51873,G__51874,G__51875,G__51876,map__51867,map__51867__$1,attribute,attr_depth,direct_reaches_QMARK_,nested_reaches_QMARK_,direct_provides_QMARK_,nested_provides_QMARK_,interconnections_QMARK_,map__51868,map__51868__$1,on_select_attribute,attributes,graph_comm,_STAR_reconciler_STAR__orig_val__51857,_STAR_depth_STAR__orig_val__51858,_STAR_shared_STAR__orig_val__51859,_STAR_instrument_STAR__orig_val__51860,_STAR_parent_STAR__orig_val__51861,_STAR_reconciler_STAR__temp_val__51862,_STAR_depth_STAR__temp_val__51863,_STAR_shared_STAR__temp_val__51864,_STAR_instrument_STAR__temp_val__51865,_STAR_parent_STAR__temp_val__51866,this$,this__43720__auto__,x51856_52630))
], null);
var G__51888 = "Direct outputs";
return (com.wsscode.pathom.viz.ui.kit.toggle_action.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.toggle_action.cljs$core$IFn$_invoke$arity$2(G__51887,G__51888) : com.wsscode.pathom.viz.ui.kit.toggle_action.call(null,G__51887,G__51888));
})();
var G__51878 = (function (){var G__51889 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","active?","com.wsscode.pathom.viz.ui.kit/active?",-2040404697),nested_provides_QMARK_,new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (G__51873,G__51874,G__51875,G__51876,G__51877,map__51867,map__51867__$1,attribute,attr_depth,direct_reaches_QMARK_,nested_reaches_QMARK_,direct_provides_QMARK_,nested_provides_QMARK_,interconnections_QMARK_,map__51868,map__51868__$1,on_select_attribute,attributes,graph_comm,_STAR_reconciler_STAR__orig_val__51857,_STAR_depth_STAR__orig_val__51858,_STAR_shared_STAR__orig_val__51859,_STAR_instrument_STAR__orig_val__51860,_STAR_parent_STAR__orig_val__51861,_STAR_reconciler_STAR__temp_val__51862,_STAR_depth_STAR__temp_val__51863,_STAR_shared_STAR__temp_val__51864,_STAR_instrument_STAR__temp_val__51865,_STAR_parent_STAR__temp_val__51866,this$,this__43720__auto__,x51856_52630){
return (function (){
return fulcro.client.mutations.set_value_BANG_(this$,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","nested-provides?","com.wsscode.pathom.viz.index-explorer/nested-provides?",-1296758362),cljs.core.not(nested_provides_QMARK_));
});})(G__51873,G__51874,G__51875,G__51876,G__51877,map__51867,map__51867__$1,attribute,attr_depth,direct_reaches_QMARK_,nested_reaches_QMARK_,direct_provides_QMARK_,nested_provides_QMARK_,interconnections_QMARK_,map__51868,map__51868__$1,on_select_attribute,attributes,graph_comm,_STAR_reconciler_STAR__orig_val__51857,_STAR_depth_STAR__orig_val__51858,_STAR_shared_STAR__orig_val__51859,_STAR_instrument_STAR__orig_val__51860,_STAR_parent_STAR__orig_val__51861,_STAR_reconciler_STAR__temp_val__51862,_STAR_depth_STAR__temp_val__51863,_STAR_shared_STAR__temp_val__51864,_STAR_instrument_STAR__temp_val__51865,_STAR_parent_STAR__temp_val__51866,this$,this__43720__auto__,x51856_52630))
], null);
var G__51890 = "Nested outputs";
return (com.wsscode.pathom.viz.ui.kit.toggle_action.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.toggle_action.cljs$core$IFn$_invoke$arity$2(G__51889,G__51890) : com.wsscode.pathom.viz.ui.kit.toggle_action.call(null,G__51889,G__51890));
})();
return (com.wsscode.pathom.viz.ui.kit.row.cljs$core$IFn$_invoke$arity$6 ? com.wsscode.pathom.viz.ui.kit.row.cljs$core$IFn$_invoke$arity$6(G__51873,G__51874,G__51875,G__51876,G__51877,G__51878) : com.wsscode.pathom.viz.ui.kit.row.call(null,G__51873,G__51874,G__51875,G__51876,G__51877,G__51878));
})(),new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","scrollbars?","com.wsscode.pathom.viz.ui.kit/scrollbars?",1389911780),false], null);
var G__51872 = fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".graph",".graph",-327673667),(function (){var shared_options = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","direct-reaches?","com.wsscode.pathom.viz.index-explorer/direct-reaches?",-1036048994),direct_reaches_QMARK_,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","nested-reaches?","com.wsscode.pathom.viz.index-explorer/nested-reaches?",-22429448),nested_reaches_QMARK_,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","direct-provides?","com.wsscode.pathom.viz.index-explorer/direct-provides?",223892052),direct_provides_QMARK_,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","nested-provides?","com.wsscode.pathom.viz.index-explorer/nested-provides?",-1296758362),nested_provides_QMARK_,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","interconnections?","com.wsscode.pathom.viz.index-explorer/interconnections?",-1723481228),interconnections_QMARK_], null);
var G__51891 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attributes","com.wsscode.pathom.viz.index-explorer/attributes",-67264281),com.wsscode.pathom.viz.index_explorer.attribute_network(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-depth","com.wsscode.pathom.viz.index-explorer/attr-depth",-1327711242),attr_depth,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-index","com.wsscode.pathom.viz.index-explorer/attr-index",684180200),com.wsscode.pathom.viz.helpers.index_by(new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),attributes),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attributes","com.wsscode.pathom.viz.index-explorer/attributes",-67264281),attributes], null),shared_options], 0)),attribute),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","on-show-details","com.wsscode.pathom.viz.index-explorer/on-show-details",-322180105),on_select_attribute,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","on-click-edge","com.wsscode.pathom.viz.index-explorer/on-click-edge",810811642),fulcro.client.primitives.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"select-resolver","select-resolver",43705318)),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","graph-comm","com.wsscode.pathom.viz.index-explorer/graph-comm",-735750087),graph_comm], null),shared_options], 0));
return (com.wsscode.pathom.viz.index_explorer.attribute_graph.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom.viz.index_explorer.attribute_graph.cljs$core$IFn$_invoke$arity$1(G__51891) : com.wsscode.pathom.viz.index_explorer.attribute_graph.call(null,G__51891));
})()], 0));
return (com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2(G__51871,G__51872) : com.wsscode.pathom.viz.ui.kit.panel.call(null,G__51871,G__51872));
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__51861;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__51860;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__51859;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__51858;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__51857;
}});})(x51856_52630))
;


com.wsscode.pathom.viz.index_explorer.AttributeGraphPanel.prototype.constructor = com.wsscode.pathom.viz.index_explorer.AttributeGraphPanel;

com.wsscode.pathom.viz.index_explorer.AttributeGraphPanel.prototype.constructor.displayName = "com.wsscode.pathom.viz.index-explorer/AttributeGraphPanel";

com.wsscode.pathom.viz.index_explorer.AttributeGraphPanel.prototype.fulcro$isComponent = true;

var x51892_52631 = com.wsscode.pathom.viz.index_explorer.AttributeGraphPanel;
x51892_52631.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x51892_52631.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x51892_52631){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".graph",".graph",-327673667),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"height","height",1025178622),"400px",new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"stretch",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column"], null)], null)], null);
});})(x51892_52631))
;

x51892_52631.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x51892_52631){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x51892_52631))
;

x51892_52631.fulcro$client$primitives$IPreMerge$ = cljs.core.PROTOCOL_SENTINEL;

x51892_52631.fulcro$client$primitives$IPreMerge$pre_merge_STAR_$arity$2 = ((function (x51892_52631){
return (function (this$,p__51893){
var map__51894 = p__51893;
var map__51894__$1 = (((((!((map__51894 == null))))?(((((map__51894.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51894.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51894):map__51894);
var current_normalized = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51894__$1,new cljs.core.Keyword(null,"current-normalized","current-normalized",851723724));
var data_tree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51894__$1,new cljs.core.Keyword(null,"data-tree","data-tree",1311167582));
var this$__$1 = this;
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-depth","com.wsscode.pathom.viz.index-explorer/attr-depth",-1327711242),(1),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","direct-reaches?","com.wsscode.pathom.viz.index-explorer/direct-reaches?",-1036048994),true,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","nested-reaches?","com.wsscode.pathom.viz.index-explorer/nested-reaches?",-22429448),false,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","direct-provides?","com.wsscode.pathom.viz.index-explorer/direct-provides?",223892052),true,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","nested-provides?","com.wsscode.pathom.viz.index-explorer/nested-provides?",-1296758362),false,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","interconnections?","com.wsscode.pathom.viz.index-explorer/interconnections?",-1723481228),true], null),current_normalized,data_tree], 0));
});})(x51892_52631))
;

x51892_52631.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x51892_52631.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x51892_52631){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x51892_52631))
;

x51892_52631.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x51892_52631.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x51892_52631){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-depth","com.wsscode.pathom.viz.index-explorer/attr-depth",-1327711242),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","direct-reaches?","com.wsscode.pathom.viz.index-explorer/direct-reaches?",-1036048994),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","nested-reaches?","com.wsscode.pathom.viz.index-explorer/nested-reaches?",-22429448),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","direct-provides?","com.wsscode.pathom.viz.index-explorer/direct-provides?",223892052),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","nested-provides?","com.wsscode.pathom.viz.index-explorer/nested-provides?",-1296758362),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","interconnections?","com.wsscode.pathom.viz.index-explorer/interconnections?",-1723481228),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","show-graph?","com.wsscode.pathom.viz.index-explorer/show-graph?",-1999932552),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via","com.wsscode.pathom.connect/attr-reach-via",-483841559),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-provides","com.wsscode.pathom.connect/attr-provides",-474523918)], null);
});})(x51892_52631))
;


var x51896_52632 = com.wsscode.pathom.viz.index_explorer.AttributeGraphPanel.prototype;
x51896_52632.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x51896_52632.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x51896_52632){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".graph",".graph",-327673667),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"height","height",1025178622),"400px",new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"stretch",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column"], null)], null)], null);
});})(x51896_52632))
;

x51896_52632.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x51896_52632){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x51896_52632))
;

x51896_52632.fulcro$client$primitives$IPreMerge$ = cljs.core.PROTOCOL_SENTINEL;

x51896_52632.fulcro$client$primitives$IPreMerge$pre_merge_STAR_$arity$2 = ((function (x51896_52632){
return (function (this$,p__51897){
var map__51898 = p__51897;
var map__51898__$1 = (((((!((map__51898 == null))))?(((((map__51898.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51898.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51898):map__51898);
var current_normalized = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51898__$1,new cljs.core.Keyword(null,"current-normalized","current-normalized",851723724));
var data_tree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51898__$1,new cljs.core.Keyword(null,"data-tree","data-tree",1311167582));
var this$__$1 = this;
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-depth","com.wsscode.pathom.viz.index-explorer/attr-depth",-1327711242),(1),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","direct-reaches?","com.wsscode.pathom.viz.index-explorer/direct-reaches?",-1036048994),true,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","nested-reaches?","com.wsscode.pathom.viz.index-explorer/nested-reaches?",-22429448),false,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","direct-provides?","com.wsscode.pathom.viz.index-explorer/direct-provides?",223892052),true,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","nested-provides?","com.wsscode.pathom.viz.index-explorer/nested-provides?",-1296758362),false,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","interconnections?","com.wsscode.pathom.viz.index-explorer/interconnections?",-1723481228),true], null),current_normalized,data_tree], 0));
});})(x51896_52632))
;

x51896_52632.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x51896_52632.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x51896_52632){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x51896_52632))
;

x51896_52632.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x51896_52632.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x51896_52632){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-depth","com.wsscode.pathom.viz.index-explorer/attr-depth",-1327711242),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","direct-reaches?","com.wsscode.pathom.viz.index-explorer/direct-reaches?",-1036048994),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","nested-reaches?","com.wsscode.pathom.viz.index-explorer/nested-reaches?",-22429448),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","direct-provides?","com.wsscode.pathom.viz.index-explorer/direct-provides?",223892052),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","nested-provides?","com.wsscode.pathom.viz.index-explorer/nested-provides?",-1296758362),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","interconnections?","com.wsscode.pathom.viz.index-explorer/interconnections?",-1723481228),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","show-graph?","com.wsscode.pathom.viz.index-explorer/show-graph?",-1999932552),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via","com.wsscode.pathom.connect/attr-reach-via",-483841559),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-provides","com.wsscode.pathom.connect/attr-provides",-474523918)], null);
});})(x51896_52632))
;


com.wsscode.pathom.viz.index_explorer.AttributeGraphPanel.cljs$lang$type = true;

com.wsscode.pathom.viz.index_explorer.AttributeGraphPanel.cljs$lang$ctorStr = "com.wsscode.pathom.viz.index-explorer/AttributeGraphPanel";

com.wsscode.pathom.viz.index_explorer.AttributeGraphPanel.cljs$lang$ctorPrWriter = (function (this__44805__auto__,writer__44806__auto__,opt__44807__auto__){
return cljs.core._write(writer__44806__auto__,"com.wsscode.pathom.viz.index-explorer/AttributeGraphPanel");
});
com.wsscode.pathom.viz.index_explorer.attribute_graph_panel = fulcro.client.primitives.computed_factory.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.AttributeGraphPanel);
if((typeof com !== 'undefined') && (typeof com.wsscode !== 'undefined') && (typeof com.wsscode.pathom !== 'undefined') && (typeof com.wsscode.pathom.viz !== 'undefined') && (typeof com.wsscode.pathom.viz.index_explorer !== 'undefined') && (typeof com.wsscode.pathom.viz.index_explorer.AttributeView !== 'undefined')){
} else {
/**
 * @constructor
 * @nocollapse
 */
com.wsscode.pathom.viz.index_explorer.AttributeView = (function com$wsscode$pathom$viz$index_explorer$AttributeView(){
var this__44802__auto__ = this;
React.Component.apply(this__44802__auto__,arguments);

if((!((this__44802__auto__.initLocalState == null)))){
this__44802__auto__.state = this__44802__auto__.initLocalState();
} else {
this__44802__auto__.state = ({});
}

return this__44802__auto__;
});

goog.object.extend(com.wsscode.pathom.viz.index_explorer.AttributeView.prototype,React.Component.prototype,fulcro.client.primitives.default_component_prototype);
}

fulcro.client.primitives._register_component_BANG_(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","AttributeView","com.wsscode.pathom.viz.index-explorer/AttributeView",1769179789),com.wsscode.pathom.viz.index_explorer.AttributeView);

var x51905_52633 = com.wsscode.pathom.viz.index_explorer.AttributeView.prototype;
x51905_52633.render = ((function (x51905_52633){
return (function (){
var this__43720__auto__ = this;
var this$ = this__43720__auto__;
var _STAR_reconciler_STAR__orig_val__51906 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__51907 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__51908 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__51909 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__51910 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__51911 = fulcro.client.primitives.get_reconciler(this__43720__auto__);
var _STAR_depth_STAR__temp_val__51912 = (fulcro.client.primitives.depth(this__43720__auto__) + (1));
var _STAR_shared_STAR__temp_val__51913 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__43720__auto__);
var _STAR_instrument_STAR__temp_val__51914 = fulcro.client.primitives.instrument(this__43720__auto__);
var _STAR_parent_STAR__temp_val__51915 = this__43720__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__51911;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__51912;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__51913;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__51914;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__51915;

try{var map__51916 = fulcro.client.primitives.props(this$);
var map__51916__$1 = (((((!((map__51916 == null))))?(((((map__51916.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51916.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51916):map__51916);
var attr_mutation_param_in = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51916__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attr-mutation-param-in","com.wsscode.pathom.connect/attr-mutation-param-in",-1474382671));
var attr_reach_via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51916__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via","com.wsscode.pathom.connect/attr-reach-via",-483841559));
var attr_combinations = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51916__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attr-combinations","com.wsscode.pathom.connect/attr-combinations",-1163990806));
var attribute = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51916__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075));
var provides_tree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51916__$1,new cljs.core.Keyword("ui","provides-tree","ui/provides-tree",675380755));
var provides_tree_source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51916__$1,new cljs.core.Keyword("ui","provides-tree-source","ui/provides-tree-source",874544325));
var attr_input_in = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51916__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attr-input-in","com.wsscode.pathom.connect/attr-input-in",-2112912399));
var attr_provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51916__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attr-provides","com.wsscode.pathom.connect/attr-provides",-474523918));
var attr_mutation_output_in = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51916__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attr-mutation-output-in","com.wsscode.pathom.connect/attr-mutation-output-in",1122448739));
var show_graph_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51916__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","show-graph?","com.wsscode.pathom.viz.index-explorer/show-graph?",-1999932552));
var mutation_output_in = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51916__$1,new cljs.core.Keyword(">","mutation-output-in",">/mutation-output-in",463836271));
var attr_output_in = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51916__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attr-output-in","com.wsscode.pathom.connect/attr-output-in",-62045610));
var reach_via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51916__$1,new cljs.core.Keyword(">","reach-via",">/reach-via",725397135));
var graph_panel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51916__$1,new cljs.core.Keyword(">","graph-panel",">/graph-panel",-700694737));
var mutation_param_in = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51916__$1,new cljs.core.Keyword(">","mutation-param-in",">/mutation-param-in",-1050138308));
var computed = fulcro.client.primitives.get_computed.cljs$core$IFn$_invoke$arity$1(this$);
var computed__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(computed,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","graph-comm","com.wsscode.pathom.viz.index-explorer/graph-comm",-735750087),fulcro.client.primitives.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"graph-comm","graph-comm",-744729650)));
return fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".container",".container",-1441208944),fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".toolbar",".toolbar",968457325),fulcro.client.localized_dom.h1.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".title",".title",-416997657),com.wsscode.pathom.viz.ui.kit.gc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".flex",".flex",-73425686)], 0)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attribute], 0))], 0)),(function (){var G__51918 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","active?","com.wsscode.pathom.viz.ui.kit/active?",-2040404697),show_graph_QMARK_,new cljs.core.Keyword(null,"classes","classes",2037804510),com.wsscode.pathom.viz.ui.kit.ccss.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".show-graph",".show-graph",1780476669)], 0)),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (computed__$1,map__51916,map__51916__$1,attr_mutation_param_in,attr_reach_via,attr_combinations,attribute,provides_tree,provides_tree_source,attr_input_in,attr_provides,attr_mutation_output_in,show_graph_QMARK_,mutation_output_in,attr_output_in,reach_via,graph_panel,mutation_param_in,computed,_STAR_reconciler_STAR__orig_val__51906,_STAR_depth_STAR__orig_val__51907,_STAR_shared_STAR__orig_val__51908,_STAR_instrument_STAR__orig_val__51909,_STAR_parent_STAR__orig_val__51910,_STAR_reconciler_STAR__temp_val__51911,_STAR_depth_STAR__temp_val__51912,_STAR_shared_STAR__temp_val__51913,_STAR_instrument_STAR__temp_val__51914,_STAR_parent_STAR__temp_val__51915,this$,this__43720__auto__,x51905_52633){
return (function (){
return fulcro.client.mutations.set_value_BANG_(this$,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","show-graph?","com.wsscode.pathom.viz.index-explorer/show-graph?",-1999932552),cljs.core.not(show_graph_QMARK_));
});})(computed__$1,map__51916,map__51916__$1,attr_mutation_param_in,attr_reach_via,attr_combinations,attribute,provides_tree,provides_tree_source,attr_input_in,attr_provides,attr_mutation_output_in,show_graph_QMARK_,mutation_output_in,attr_output_in,reach_via,graph_panel,mutation_param_in,computed,_STAR_reconciler_STAR__orig_val__51906,_STAR_depth_STAR__orig_val__51907,_STAR_shared_STAR__orig_val__51908,_STAR_instrument_STAR__orig_val__51909,_STAR_parent_STAR__orig_val__51910,_STAR_reconciler_STAR__temp_val__51911,_STAR_depth_STAR__temp_val__51912,_STAR_shared_STAR__temp_val__51913,_STAR_instrument_STAR__temp_val__51914,_STAR_parent_STAR__temp_val__51915,this$,this__43720__auto__,x51905_52633))
], null);
var G__51919 = "Graph View";
return (com.wsscode.pathom.viz.ui.kit.toggle_action.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.toggle_action.cljs$core$IFn$_invoke$arity$2(G__51918,G__51919) : com.wsscode.pathom.viz.ui.kit.toggle_action.call(null,G__51918,G__51919));
})()], 0)),(cljs.core.truth_(show_graph_QMARK_)?(com.wsscode.pathom.viz.index_explorer.attribute_graph_panel.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.attribute_graph_panel.cljs$core$IFn$_invoke$arity$2(graph_panel,computed__$1) : com.wsscode.pathom.viz.index_explorer.attribute_graph_panel.call(null,graph_panel,computed__$1)):null),fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".columns$scrollbars",".columns$scrollbars",-1170212651),fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".data-list",".data-list",949465177),((cljs.core.seq(attr_reach_via))?(com.wsscode.pathom.viz.index_explorer.attribute_info_reach_via.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.attribute_info_reach_via.cljs$core$IFn$_invoke$arity$2(reach_via,computed__$1) : com.wsscode.pathom.viz.index_explorer.attribute_info_reach_via.call(null,reach_via,computed__$1)):null),((cljs.core.seq(attr_output_in))?(function (){var G__51920 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","panel-title","com.wsscode.pathom.viz.ui.kit/panel-title",1529445284),"Output In",new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","panel-tag","com.wsscode.pathom.viz.ui.kit/panel-tag",144392508),cljs.core.count(attr_output_in)], null);
var G__51921 = (function (){var iter__4523__auto__ = ((function (G__51920,computed__$1,map__51916,map__51916__$1,attr_mutation_param_in,attr_reach_via,attr_combinations,attribute,provides_tree,provides_tree_source,attr_input_in,attr_provides,attr_mutation_output_in,show_graph_QMARK_,mutation_output_in,attr_output_in,reach_via,graph_panel,mutation_param_in,computed,_STAR_reconciler_STAR__orig_val__51906,_STAR_depth_STAR__orig_val__51907,_STAR_shared_STAR__orig_val__51908,_STAR_instrument_STAR__orig_val__51909,_STAR_parent_STAR__orig_val__51910,_STAR_reconciler_STAR__temp_val__51911,_STAR_depth_STAR__temp_val__51912,_STAR_shared_STAR__temp_val__51913,_STAR_instrument_STAR__temp_val__51914,_STAR_parent_STAR__temp_val__51915,this$,this__43720__auto__,x51905_52633){
return (function com$wsscode$pathom$viz$index_explorer$iter__51922(s__51923){
return (new cljs.core.LazySeq(null,((function (G__51920,computed__$1,map__51916,map__51916__$1,attr_mutation_param_in,attr_reach_via,attr_combinations,attribute,provides_tree,provides_tree_source,attr_input_in,attr_provides,attr_mutation_output_in,show_graph_QMARK_,mutation_output_in,attr_output_in,reach_via,graph_panel,mutation_param_in,computed,_STAR_reconciler_STAR__orig_val__51906,_STAR_depth_STAR__orig_val__51907,_STAR_shared_STAR__orig_val__51908,_STAR_instrument_STAR__orig_val__51909,_STAR_parent_STAR__orig_val__51910,_STAR_reconciler_STAR__temp_val__51911,_STAR_depth_STAR__temp_val__51912,_STAR_shared_STAR__temp_val__51913,_STAR_instrument_STAR__temp_val__51914,_STAR_parent_STAR__temp_val__51915,this$,this__43720__auto__,x51905_52633){
return (function (){
var s__51923__$1 = s__51923;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__51923__$1);
if(temp__5720__auto__){
var s__51923__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__51923__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__51923__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__51925 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__51924 = (0);
while(true){
if((i__51924 < size__4522__auto__)){
var resolver = cljs.core._nth(c__4521__auto__,i__51924);
cljs.core.chunk_append(b__51925,com.wsscode.pathom.viz.index_explorer.resolver_link(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),resolver], null),computed__$1));

var G__52634 = (i__51924 + (1));
i__51924 = G__52634;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51925),com$wsscode$pathom$viz$index_explorer$iter__51922(cljs.core.chunk_rest(s__51923__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51925),null);
}
} else {
var resolver = cljs.core.first(s__51923__$2);
return cljs.core.cons(com.wsscode.pathom.viz.index_explorer.resolver_link(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),resolver], null),computed__$1),com$wsscode$pathom$viz$index_explorer$iter__51922(cljs.core.rest(s__51923__$2)));
}
} else {
return null;
}
break;
}
});})(G__51920,computed__$1,map__51916,map__51916__$1,attr_mutation_param_in,attr_reach_via,attr_combinations,attribute,provides_tree,provides_tree_source,attr_input_in,attr_provides,attr_mutation_output_in,show_graph_QMARK_,mutation_output_in,attr_output_in,reach_via,graph_panel,mutation_param_in,computed,_STAR_reconciler_STAR__orig_val__51906,_STAR_depth_STAR__orig_val__51907,_STAR_shared_STAR__orig_val__51908,_STAR_instrument_STAR__orig_val__51909,_STAR_parent_STAR__orig_val__51910,_STAR_reconciler_STAR__temp_val__51911,_STAR_depth_STAR__temp_val__51912,_STAR_shared_STAR__temp_val__51913,_STAR_instrument_STAR__temp_val__51914,_STAR_parent_STAR__temp_val__51915,this$,this__43720__auto__,x51905_52633))
,null,null));
});})(G__51920,computed__$1,map__51916,map__51916__$1,attr_mutation_param_in,attr_reach_via,attr_combinations,attribute,provides_tree,provides_tree_source,attr_input_in,attr_provides,attr_mutation_output_in,show_graph_QMARK_,mutation_output_in,attr_output_in,reach_via,graph_panel,mutation_param_in,computed,_STAR_reconciler_STAR__orig_val__51906,_STAR_depth_STAR__orig_val__51907,_STAR_shared_STAR__orig_val__51908,_STAR_instrument_STAR__orig_val__51909,_STAR_parent_STAR__orig_val__51910,_STAR_reconciler_STAR__temp_val__51911,_STAR_depth_STAR__temp_val__51912,_STAR_shared_STAR__temp_val__51913,_STAR_instrument_STAR__temp_val__51914,_STAR_parent_STAR__temp_val__51915,this$,this__43720__auto__,x51905_52633))
;
return iter__4523__auto__(cljs.core.sort.cljs$core$IFn$_invoke$arity$1(attr_output_in));
})();
return (com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2(G__51920,G__51921) : com.wsscode.pathom.viz.ui.kit.panel.call(null,G__51920,G__51921));
})():null),((cljs.core.seq(attr_combinations))?(function (){var G__51926 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","panel-title","com.wsscode.pathom.viz.ui.kit/panel-title",1529445284),"Input Combinations",new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","panel-tag","com.wsscode.pathom.viz.ui.kit/panel-tag",144392508),cljs.core.count(attr_combinations)], null);
var G__51927 = (function (){var iter__4523__auto__ = ((function (G__51926,computed__$1,map__51916,map__51916__$1,attr_mutation_param_in,attr_reach_via,attr_combinations,attribute,provides_tree,provides_tree_source,attr_input_in,attr_provides,attr_mutation_output_in,show_graph_QMARK_,mutation_output_in,attr_output_in,reach_via,graph_panel,mutation_param_in,computed,_STAR_reconciler_STAR__orig_val__51906,_STAR_depth_STAR__orig_val__51907,_STAR_shared_STAR__orig_val__51908,_STAR_instrument_STAR__orig_val__51909,_STAR_parent_STAR__orig_val__51910,_STAR_reconciler_STAR__temp_val__51911,_STAR_depth_STAR__temp_val__51912,_STAR_shared_STAR__temp_val__51913,_STAR_instrument_STAR__temp_val__51914,_STAR_parent_STAR__temp_val__51915,this$,this__43720__auto__,x51905_52633){
return (function com$wsscode$pathom$viz$index_explorer$iter__51928(s__51929){
return (new cljs.core.LazySeq(null,((function (G__51926,computed__$1,map__51916,map__51916__$1,attr_mutation_param_in,attr_reach_via,attr_combinations,attribute,provides_tree,provides_tree_source,attr_input_in,attr_provides,attr_mutation_output_in,show_graph_QMARK_,mutation_output_in,attr_output_in,reach_via,graph_panel,mutation_param_in,computed,_STAR_reconciler_STAR__orig_val__51906,_STAR_depth_STAR__orig_val__51907,_STAR_shared_STAR__orig_val__51908,_STAR_instrument_STAR__orig_val__51909,_STAR_parent_STAR__orig_val__51910,_STAR_reconciler_STAR__temp_val__51911,_STAR_depth_STAR__temp_val__51912,_STAR_shared_STAR__temp_val__51913,_STAR_instrument_STAR__temp_val__51914,_STAR_parent_STAR__temp_val__51915,this$,this__43720__auto__,x51905_52633){
return (function (){
var s__51929__$1 = s__51929;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__51929__$1);
if(temp__5720__auto__){
var s__51929__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__51929__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__51929__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__51931 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__51930 = (0);
while(true){
if((i__51930 < size__4522__auto__)){
var input = cljs.core._nth(c__4521__auto__,i__51930);
cljs.core.chunk_append(b__51931,com.wsscode.pathom.viz.index_explorer.attribute_link(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),input], null),computed__$1));

var G__52635 = (i__51930 + (1));
i__51930 = G__52635;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51931),com$wsscode$pathom$viz$index_explorer$iter__51928(cljs.core.chunk_rest(s__51929__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51931),null);
}
} else {
var input = cljs.core.first(s__51929__$2);
return cljs.core.cons(com.wsscode.pathom.viz.index_explorer.attribute_link(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),input], null),computed__$1),com$wsscode$pathom$viz$index_explorer$iter__51928(cljs.core.rest(s__51929__$2)));
}
} else {
return null;
}
break;
}
});})(G__51926,computed__$1,map__51916,map__51916__$1,attr_mutation_param_in,attr_reach_via,attr_combinations,attribute,provides_tree,provides_tree_source,attr_input_in,attr_provides,attr_mutation_output_in,show_graph_QMARK_,mutation_output_in,attr_output_in,reach_via,graph_panel,mutation_param_in,computed,_STAR_reconciler_STAR__orig_val__51906,_STAR_depth_STAR__orig_val__51907,_STAR_shared_STAR__orig_val__51908,_STAR_instrument_STAR__orig_val__51909,_STAR_parent_STAR__orig_val__51910,_STAR_reconciler_STAR__temp_val__51911,_STAR_depth_STAR__temp_val__51912,_STAR_shared_STAR__temp_val__51913,_STAR_instrument_STAR__temp_val__51914,_STAR_parent_STAR__temp_val__51915,this$,this__43720__auto__,x51905_52633))
,null,null));
});})(G__51926,computed__$1,map__51916,map__51916__$1,attr_mutation_param_in,attr_reach_via,attr_combinations,attribute,provides_tree,provides_tree_source,attr_input_in,attr_provides,attr_mutation_output_in,show_graph_QMARK_,mutation_output_in,attr_output_in,reach_via,graph_panel,mutation_param_in,computed,_STAR_reconciler_STAR__orig_val__51906,_STAR_depth_STAR__orig_val__51907,_STAR_shared_STAR__orig_val__51908,_STAR_instrument_STAR__orig_val__51909,_STAR_parent_STAR__orig_val__51910,_STAR_reconciler_STAR__temp_val__51911,_STAR_depth_STAR__temp_val__51912,_STAR_shared_STAR__temp_val__51913,_STAR_instrument_STAR__temp_val__51914,_STAR_parent_STAR__temp_val__51915,this$,this__43720__auto__,x51905_52633))
;
return iter__4523__auto__(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,cljs.core.sort),com.wsscode.pathom.viz.helpers.vector_compare,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (iter__4523__auto__,G__51926,computed__$1,map__51916,map__51916__$1,attr_mutation_param_in,attr_reach_via,attr_combinations,attribute,provides_tree,provides_tree_source,attr_input_in,attr_provides,attr_mutation_output_in,show_graph_QMARK_,mutation_output_in,attr_output_in,reach_via,graph_panel,mutation_param_in,computed,_STAR_reconciler_STAR__orig_val__51906,_STAR_depth_STAR__orig_val__51907,_STAR_shared_STAR__orig_val__51908,_STAR_instrument_STAR__orig_val__51909,_STAR_parent_STAR__orig_val__51910,_STAR_reconciler_STAR__temp_val__51911,_STAR_depth_STAR__temp_val__51912,_STAR_shared_STAR__temp_val__51913,_STAR_instrument_STAR__temp_val__51914,_STAR_parent_STAR__temp_val__51915,this$,this__43720__auto__,x51905_52633){
return (function (p1__51902_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.sorted_set(),p1__51902_SHARP_);
});})(iter__4523__auto__,G__51926,computed__$1,map__51916,map__51916__$1,attr_mutation_param_in,attr_reach_via,attr_combinations,attribute,provides_tree,provides_tree_source,attr_input_in,attr_provides,attr_mutation_output_in,show_graph_QMARK_,mutation_output_in,attr_output_in,reach_via,graph_panel,mutation_param_in,computed,_STAR_reconciler_STAR__orig_val__51906,_STAR_depth_STAR__orig_val__51907,_STAR_shared_STAR__orig_val__51908,_STAR_instrument_STAR__orig_val__51909,_STAR_parent_STAR__orig_val__51910,_STAR_reconciler_STAR__temp_val__51911,_STAR_depth_STAR__temp_val__51912,_STAR_shared_STAR__temp_val__51913,_STAR_instrument_STAR__temp_val__51914,_STAR_parent_STAR__temp_val__51915,this$,this__43720__auto__,x51905_52633))
,attr_combinations)));
})();
return (com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2(G__51926,G__51927) : com.wsscode.pathom.viz.ui.kit.panel.call(null,G__51926,G__51927));
})():null),((cljs.core.seq(attr_mutation_param_in))?(com.wsscode.pathom.viz.index_explorer.attribute_info_mutation_param_in.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.attribute_info_mutation_param_in.cljs$core$IFn$_invoke$arity$2(mutation_param_in,computed__$1) : com.wsscode.pathom.viz.index_explorer.attribute_info_mutation_param_in.call(null,mutation_param_in,computed__$1)):null),((cljs.core.seq(attr_mutation_output_in))?(com.wsscode.pathom.viz.index_explorer.attribute_info_mutation_output_in.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.attribute_info_mutation_output_in.cljs$core$IFn$_invoke$arity$2(mutation_output_in,computed__$1) : com.wsscode.pathom.viz.index_explorer.attribute_info_mutation_output_in.call(null,mutation_output_in,computed__$1)):null),(function (){var temp__5718__auto__ = com.wsscode.spec_inspec.safe_form(attribute);
if(cljs.core.truth_(temp__5718__auto__)){
var form = temp__5718__auto__;
return fulcro.client.primitives.fragment.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__51932 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","panel-title","com.wsscode.pathom.viz.ui.kit/panel-title",1529445284),"Spec"], null);
var G__51933 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([form], 0));
return (com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2(G__51932,G__51933) : com.wsscode.pathom.viz.ui.kit.panel.call(null,G__51932,G__51933));
})(),(function (){var G__51934 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),attribute], null);
var G__51935 = computed__$1;
return (com.wsscode.pathom.viz.index_explorer.examples_panel.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.examples_panel.cljs$core$IFn$_invoke$arity$2(G__51934,G__51935) : com.wsscode.pathom.viz.index_explorer.examples_panel.call(null,G__51934,G__51935));
})()], 0));
} else {
return null;
}
})(),com.wsscode.pathom.viz.index_explorer.render_plugin_extension(this$,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","plugin-render-to-attr-left-menu","com.wsscode.pathom.viz.index-explorer/plugin-render-to-attr-left-menu",-1946076893))], 0)),fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".data-list-right",".data-list-right",-1849926935),((cljs.core.seq(attr_provides))?(function (){var G__51936 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","panel-title","com.wsscode.pathom.viz.ui.kit/panel-title",1529445284),"Provides",new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","panel-tag","com.wsscode.pathom.viz.ui.kit/panel-tag",144392508),cljs.core.count(attr_provides)], null);
var G__51937 = (function (){var G__51938 = provides_tree;
var G__51939 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.viz.ui.expandable-tree","root","com.wsscode.pathom.viz.ui.expandable-tree/root",-788021653),provides_tree_source,new cljs.core.Keyword("com.wsscode.pathom.viz.ui.expandable-tree","render","com.wsscode.pathom.viz.ui.expandable-tree/render",918872218),((function (G__51938,G__51936,computed__$1,map__51916,map__51916__$1,attr_mutation_param_in,attr_reach_via,attr_combinations,attribute,provides_tree,provides_tree_source,attr_input_in,attr_provides,attr_mutation_output_in,show_graph_QMARK_,mutation_output_in,attr_output_in,reach_via,graph_panel,mutation_param_in,computed,_STAR_reconciler_STAR__orig_val__51906,_STAR_depth_STAR__orig_val__51907,_STAR_shared_STAR__orig_val__51908,_STAR_instrument_STAR__orig_val__51909,_STAR_parent_STAR__orig_val__51910,_STAR_reconciler_STAR__temp_val__51911,_STAR_depth_STAR__temp_val__51912,_STAR_shared_STAR__temp_val__51913,_STAR_instrument_STAR__temp_val__51914,_STAR_parent_STAR__temp_val__51915,this$,this__43720__auto__,x51905_52633){
return (function (p__51940){
var map__51941 = p__51940;
var map__51941__$1 = (((((!((map__51941 == null))))?(((((map__51941.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51941.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51941):map__51941);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51941__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var sym_set = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51941__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","sym-set","com.wsscode.pathom.connect/sym-set",-662703745));
var G__51943 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"classes","classes",2037804510),com.wsscode.pathom.viz.ui.kit.ccss.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".links-container",".links-container",-1347961892)], 0))], null);
var G__51944 = com.wsscode.pathom.viz.index_explorer.attribute_link(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),key], null),computed__$1);
var G__51945 = fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"classes","classes",2037804510),com.wsscode.pathom.viz.ui.kit.ccss.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".links-display",".links-display",-2102960556)], 0))], null),(function (){var iter__4523__auto__ = ((function (G__51943,G__51944,map__51941,map__51941__$1,key,sym_set,G__51938,G__51936,computed__$1,map__51916,map__51916__$1,attr_mutation_param_in,attr_reach_via,attr_combinations,attribute,provides_tree,provides_tree_source,attr_input_in,attr_provides,attr_mutation_output_in,show_graph_QMARK_,mutation_output_in,attr_output_in,reach_via,graph_panel,mutation_param_in,computed,_STAR_reconciler_STAR__orig_val__51906,_STAR_depth_STAR__orig_val__51907,_STAR_shared_STAR__orig_val__51908,_STAR_instrument_STAR__orig_val__51909,_STAR_parent_STAR__orig_val__51910,_STAR_reconciler_STAR__temp_val__51911,_STAR_depth_STAR__temp_val__51912,_STAR_shared_STAR__temp_val__51913,_STAR_instrument_STAR__temp_val__51914,_STAR_parent_STAR__temp_val__51915,this$,this__43720__auto__,x51905_52633){
return (function com$wsscode$pathom$viz$index_explorer$iter__51946(s__51947){
return (new cljs.core.LazySeq(null,((function (G__51943,G__51944,map__51941,map__51941__$1,key,sym_set,G__51938,G__51936,computed__$1,map__51916,map__51916__$1,attr_mutation_param_in,attr_reach_via,attr_combinations,attribute,provides_tree,provides_tree_source,attr_input_in,attr_provides,attr_mutation_output_in,show_graph_QMARK_,mutation_output_in,attr_output_in,reach_via,graph_panel,mutation_param_in,computed,_STAR_reconciler_STAR__orig_val__51906,_STAR_depth_STAR__orig_val__51907,_STAR_shared_STAR__orig_val__51908,_STAR_instrument_STAR__orig_val__51909,_STAR_parent_STAR__orig_val__51910,_STAR_reconciler_STAR__temp_val__51911,_STAR_depth_STAR__temp_val__51912,_STAR_shared_STAR__temp_val__51913,_STAR_instrument_STAR__temp_val__51914,_STAR_parent_STAR__temp_val__51915,this$,this__43720__auto__,x51905_52633){
return (function (){
var s__51947__$1 = s__51947;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__51947__$1);
if(temp__5720__auto__){
var s__51947__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__51947__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__51947__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__51949 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__51948 = (0);
while(true){
if((i__51948 < size__4522__auto__)){
var sym = cljs.core._nth(c__4521__auto__,i__51948);
cljs.core.chunk_append(b__51949,com.wsscode.pathom.viz.index_explorer.resolver_link(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),sym], null),computed__$1));

var G__52636 = (i__51948 + (1));
i__51948 = G__52636;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51949),com$wsscode$pathom$viz$index_explorer$iter__51946(cljs.core.chunk_rest(s__51947__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51949),null);
}
} else {
var sym = cljs.core.first(s__51947__$2);
return cljs.core.cons(com.wsscode.pathom.viz.index_explorer.resolver_link(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),sym], null),computed__$1),com$wsscode$pathom$viz$index_explorer$iter__51946(cljs.core.rest(s__51947__$2)));
}
} else {
return null;
}
break;
}
});})(G__51943,G__51944,map__51941,map__51941__$1,key,sym_set,G__51938,G__51936,computed__$1,map__51916,map__51916__$1,attr_mutation_param_in,attr_reach_via,attr_combinations,attribute,provides_tree,provides_tree_source,attr_input_in,attr_provides,attr_mutation_output_in,show_graph_QMARK_,mutation_output_in,attr_output_in,reach_via,graph_panel,mutation_param_in,computed,_STAR_reconciler_STAR__orig_val__51906,_STAR_depth_STAR__orig_val__51907,_STAR_shared_STAR__orig_val__51908,_STAR_instrument_STAR__orig_val__51909,_STAR_parent_STAR__orig_val__51910,_STAR_reconciler_STAR__temp_val__51911,_STAR_depth_STAR__temp_val__51912,_STAR_shared_STAR__temp_val__51913,_STAR_instrument_STAR__temp_val__51914,_STAR_parent_STAR__temp_val__51915,this$,this__43720__auto__,x51905_52633))
,null,null));
});})(G__51943,G__51944,map__51941,map__51941__$1,key,sym_set,G__51938,G__51936,computed__$1,map__51916,map__51916__$1,attr_mutation_param_in,attr_reach_via,attr_combinations,attribute,provides_tree,provides_tree_source,attr_input_in,attr_provides,attr_mutation_output_in,show_graph_QMARK_,mutation_output_in,attr_output_in,reach_via,graph_panel,mutation_param_in,computed,_STAR_reconciler_STAR__orig_val__51906,_STAR_depth_STAR__orig_val__51907,_STAR_shared_STAR__orig_val__51908,_STAR_instrument_STAR__orig_val__51909,_STAR_parent_STAR__orig_val__51910,_STAR_reconciler_STAR__temp_val__51911,_STAR_depth_STAR__temp_val__51912,_STAR_shared_STAR__temp_val__51913,_STAR_instrument_STAR__temp_val__51914,_STAR_parent_STAR__temp_val__51915,this$,this__43720__auto__,x51905_52633))
;
return iter__4523__auto__(cljs.core.sort.cljs$core$IFn$_invoke$arity$1(sym_set));
})()], 0));
return (com.wsscode.pathom.viz.ui.kit.column.cljs$core$IFn$_invoke$arity$3 ? com.wsscode.pathom.viz.ui.kit.column.cljs$core$IFn$_invoke$arity$3(G__51943,G__51944,G__51945) : com.wsscode.pathom.viz.ui.kit.column.call(null,G__51943,G__51944,G__51945));
});})(G__51938,G__51936,computed__$1,map__51916,map__51916__$1,attr_mutation_param_in,attr_reach_via,attr_combinations,attribute,provides_tree,provides_tree_source,attr_input_in,attr_provides,attr_mutation_output_in,show_graph_QMARK_,mutation_output_in,attr_output_in,reach_via,graph_panel,mutation_param_in,computed,_STAR_reconciler_STAR__orig_val__51906,_STAR_depth_STAR__orig_val__51907,_STAR_shared_STAR__orig_val__51908,_STAR_instrument_STAR__orig_val__51909,_STAR_parent_STAR__orig_val__51910,_STAR_reconciler_STAR__temp_val__51911,_STAR_depth_STAR__temp_val__51912,_STAR_shared_STAR__temp_val__51913,_STAR_instrument_STAR__temp_val__51914,_STAR_parent_STAR__temp_val__51915,this$,this__43720__auto__,x51905_52633))
,new cljs.core.Keyword("com.wsscode.pathom.viz.ui.expandable-tree","sort-by","com.wsscode.pathom.viz.ui.expandable-tree/sort-by",1511051281),new cljs.core.Keyword(null,"key","key",-1516042587)], null);
return (com.wsscode.pathom.viz.ui.expandable_tree.expandable_tree.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.expandable_tree.expandable_tree.cljs$core$IFn$_invoke$arity$2(G__51938,G__51939) : com.wsscode.pathom.viz.ui.expandable_tree.expandable_tree.call(null,G__51938,G__51939));
})();
return (com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2(G__51936,G__51937) : com.wsscode.pathom.viz.ui.kit.panel.call(null,G__51936,G__51937));
})():null),((cljs.core.seq(attr_input_in))?(function (){var G__51950 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","panel-title","com.wsscode.pathom.viz.ui.kit/panel-title",1529445284),"Input In",new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","panel-tag","com.wsscode.pathom.viz.ui.kit/panel-tag",144392508),cljs.core.count(attr_input_in)], null);
var G__51951 = (function (){var iter__4523__auto__ = ((function (G__51950,computed__$1,map__51916,map__51916__$1,attr_mutation_param_in,attr_reach_via,attr_combinations,attribute,provides_tree,provides_tree_source,attr_input_in,attr_provides,attr_mutation_output_in,show_graph_QMARK_,mutation_output_in,attr_output_in,reach_via,graph_panel,mutation_param_in,computed,_STAR_reconciler_STAR__orig_val__51906,_STAR_depth_STAR__orig_val__51907,_STAR_shared_STAR__orig_val__51908,_STAR_instrument_STAR__orig_val__51909,_STAR_parent_STAR__orig_val__51910,_STAR_reconciler_STAR__temp_val__51911,_STAR_depth_STAR__temp_val__51912,_STAR_shared_STAR__temp_val__51913,_STAR_instrument_STAR__temp_val__51914,_STAR_parent_STAR__temp_val__51915,this$,this__43720__auto__,x51905_52633){
return (function com$wsscode$pathom$viz$index_explorer$iter__51952(s__51953){
return (new cljs.core.LazySeq(null,((function (G__51950,computed__$1,map__51916,map__51916__$1,attr_mutation_param_in,attr_reach_via,attr_combinations,attribute,provides_tree,provides_tree_source,attr_input_in,attr_provides,attr_mutation_output_in,show_graph_QMARK_,mutation_output_in,attr_output_in,reach_via,graph_panel,mutation_param_in,computed,_STAR_reconciler_STAR__orig_val__51906,_STAR_depth_STAR__orig_val__51907,_STAR_shared_STAR__orig_val__51908,_STAR_instrument_STAR__orig_val__51909,_STAR_parent_STAR__orig_val__51910,_STAR_reconciler_STAR__temp_val__51911,_STAR_depth_STAR__temp_val__51912,_STAR_shared_STAR__temp_val__51913,_STAR_instrument_STAR__temp_val__51914,_STAR_parent_STAR__temp_val__51915,this$,this__43720__auto__,x51905_52633){
return (function (){
var s__51953__$1 = s__51953;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__51953__$1);
if(temp__5720__auto__){
var s__51953__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__51953__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__51953__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__51955 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__51954 = (0);
while(true){
if((i__51954 < size__4522__auto__)){
var resolver = cljs.core._nth(c__4521__auto__,i__51954);
cljs.core.chunk_append(b__51955,com.wsscode.pathom.viz.index_explorer.resolver_link(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),resolver], null),computed__$1));

var G__52637 = (i__51954 + (1));
i__51954 = G__52637;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51955),com$wsscode$pathom$viz$index_explorer$iter__51952(cljs.core.chunk_rest(s__51953__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51955),null);
}
} else {
var resolver = cljs.core.first(s__51953__$2);
return cljs.core.cons(com.wsscode.pathom.viz.index_explorer.resolver_link(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),resolver], null),computed__$1),com$wsscode$pathom$viz$index_explorer$iter__51952(cljs.core.rest(s__51953__$2)));
}
} else {
return null;
}
break;
}
});})(G__51950,computed__$1,map__51916,map__51916__$1,attr_mutation_param_in,attr_reach_via,attr_combinations,attribute,provides_tree,provides_tree_source,attr_input_in,attr_provides,attr_mutation_output_in,show_graph_QMARK_,mutation_output_in,attr_output_in,reach_via,graph_panel,mutation_param_in,computed,_STAR_reconciler_STAR__orig_val__51906,_STAR_depth_STAR__orig_val__51907,_STAR_shared_STAR__orig_val__51908,_STAR_instrument_STAR__orig_val__51909,_STAR_parent_STAR__orig_val__51910,_STAR_reconciler_STAR__temp_val__51911,_STAR_depth_STAR__temp_val__51912,_STAR_shared_STAR__temp_val__51913,_STAR_instrument_STAR__temp_val__51914,_STAR_parent_STAR__temp_val__51915,this$,this__43720__auto__,x51905_52633))
,null,null));
});})(G__51950,computed__$1,map__51916,map__51916__$1,attr_mutation_param_in,attr_reach_via,attr_combinations,attribute,provides_tree,provides_tree_source,attr_input_in,attr_provides,attr_mutation_output_in,show_graph_QMARK_,mutation_output_in,attr_output_in,reach_via,graph_panel,mutation_param_in,computed,_STAR_reconciler_STAR__orig_val__51906,_STAR_depth_STAR__orig_val__51907,_STAR_shared_STAR__orig_val__51908,_STAR_instrument_STAR__orig_val__51909,_STAR_parent_STAR__orig_val__51910,_STAR_reconciler_STAR__temp_val__51911,_STAR_depth_STAR__temp_val__51912,_STAR_shared_STAR__temp_val__51913,_STAR_instrument_STAR__temp_val__51914,_STAR_parent_STAR__temp_val__51915,this$,this__43720__auto__,x51905_52633))
;
return iter__4523__auto__(cljs.core.sort.cljs$core$IFn$_invoke$arity$1(attr_input_in));
})();
return (com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2(G__51950,G__51951) : com.wsscode.pathom.viz.ui.kit.panel.call(null,G__51950,G__51951));
})():null)], 0))], 0))], 0));
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__51910;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__51909;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__51908;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__51907;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__51906;
}});})(x51905_52633))
;

x51905_52633.initLocalState = ((function (x51905_52633){
return (function (){
var this$ = this;
var ret__43695__auto__ = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"graph-comm","graph-comm",-744729650),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null),new cljs.core.Keyword(null,"select-resolver","select-resolver",43705318),((function (this$,x51905_52633){
return (function (p__51956){
var map__51957 = p__51956;
var map__51957__$1 = (((((!((map__51957 == null))))?(((((map__51957.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51957.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51957):map__51957);
var resolvers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51957__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","resolvers","com.wsscode.pathom.viz.index-explorer/resolvers",-1064744669));
var map__51959 = fulcro.client.primitives.get_computed.cljs$core$IFn$_invoke$arity$1(fulcro.client.primitives.props(this$));
var map__51959__$1 = (((((!((map__51959 == null))))?(((((map__51959.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51959.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51959):map__51959);
var on_select_resolver = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51959__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","on-select-resolver","com.wsscode.pathom.viz.index-explorer/on-select-resolver",1600914463));
var G__51961 = cljs.core.first(resolvers);
return (on_select_resolver.cljs$core$IFn$_invoke$arity$1 ? on_select_resolver.cljs$core$IFn$_invoke$arity$1(G__51961) : on_select_resolver.call(null,G__51961));
});})(this$,x51905_52633))
], null);
var obj51963 = ({"fulcro$state":ret__43695__auto__});
return obj51963;
});})(x51905_52633))
;


com.wsscode.pathom.viz.index_explorer.AttributeView.prototype.constructor = com.wsscode.pathom.viz.index_explorer.AttributeView;

com.wsscode.pathom.viz.index_explorer.AttributeView.prototype.constructor.displayName = "com.wsscode.pathom.viz.index-explorer/AttributeView";

com.wsscode.pathom.viz.index_explorer.AttributeView.prototype.fulcro$isComponent = true;

var x51964_52638 = com.wsscode.pathom.viz.index_explorer.AttributeView;
x51964_52638.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x51964_52638.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x51964_52638){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"flex","flex",-1425124628),"1",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column",new cljs.core.Keyword(null,"display","display",242065432),"flex"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".title",".title",-416997657),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),com.wsscode.pathom.viz.index_explorer.color_attribute], null),com.wsscode.pathom.viz.ui.kit.css_header,com.wsscode.pathom.viz.ui.kit.text_base], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".toolbar",".toolbar",968457325),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"16px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".show-graph",".show-graph",1780476669),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"padding","padding",1660304693),"8px",new cljs.core.Keyword(null,"font-family","font-family",-667419874),com.wsscode.pathom.viz.ui.kit.font_base,new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1.1rem"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".graph-options",".graph-options",1009499042),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.9rem"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.viz.ui.kit.component_class(com.wsscode.pathom.viz.ui.kit.ToggleAction,new cljs.core.Keyword(null,".container",".container",-1441208944)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"0 2px"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".data-list",".data-list",949465177),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"white-space","white-space",-707351930),"nowrap",new cljs.core.Keyword(null,"box-sizing","box-sizing",-1956090239),"border-box",new cljs.core.Keyword(null,"width","width",-384071477),"50%",new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),"12px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".data-list-right",".data-list-right",-1849926935),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"white-space","white-space",-707351930),"nowrap",new cljs.core.Keyword(null,"width","width",-384071477),"50%",new cljs.core.Keyword(null,"box-sizing","box-sizing",-1956090239),"border-box",new cljs.core.Keyword(null,"padding","padding",1660304693),"0 12px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".graph",".graph",-327673667),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"height","height",1025178622),"400px",new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"stretch",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".columns",".columns",-1833892286),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex","flex",-1425124628),"1"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font","font",-1506159249),"bold 16px Verdana, Helvetica, Arial, sans-serif"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".links-container",".links-container",-1347961892),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:hover","&:hover",-852658855),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".links-display",".links-display",-2102960556),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"block"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".links-display",".links-display",-2102960556),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"none",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"16px"], null)], null)], null);
});})(x51964_52638))
;

x51964_52638.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x51964_52638){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.viz.index_explorer.AttributeGraph,com.wsscode.pathom.viz.ui.kit.ToggleAction,com.wsscode.pathom.viz.index_explorer.ExamplesPanel], null);
});})(x51964_52638))
;

x51964_52638.fulcro$client$primitives$IPreMerge$ = cljs.core.PROTOCOL_SENTINEL;

x51964_52638.fulcro$client$primitives$IPreMerge$pre_merge_STAR_$arity$2 = ((function (x51964_52638){
return (function (this$,p__51965){
var map__51966 = p__51965;
var map__51966__$1 = (((((!((map__51966 == null))))?(((((map__51966.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51966.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51966):map__51966);
var current_normalized = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51966__$1,new cljs.core.Keyword(null,"current-normalized","current-normalized",851723724));
var data_tree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51966__$1,new cljs.core.Keyword(null,"data-tree","data-tree",1311167582));
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
});})(x51964_52638))
;

x51964_52638.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x51964_52638.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x51964_52638){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x51964_52638))
;

x51964_52638.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x51964_52638.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x51964_52638){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-combinations","com.wsscode.pathom.connect/attr-combinations",-1163990806),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-input-in","com.wsscode.pathom.connect/attr-input-in",-2112912399),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-output-in","com.wsscode.pathom.connect/attr-output-in",-62045610),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-mutation-param-in","com.wsscode.pathom.connect/attr-mutation-param-in",-1474382671),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-mutation-output-in","com.wsscode.pathom.connect/attr-mutation-output-in",1122448739),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","show-graph?","com.wsscode.pathom.viz.index-explorer/show-graph?",-1999932552),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via","com.wsscode.pathom.connect/attr-reach-via",-483841559),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-provides","com.wsscode.pathom.connect/attr-provides",-474523918),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(">","graph-panel",">/graph-panel",-700694737),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.AttributeGraphPanel)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(">","reach-via",">/reach-via",725397135),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.AttributeInfoReachVia)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(">","mutation-param-in",">/mutation-param-in",-1050138308),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationParamIn)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(">","mutation-output-in",">/mutation-output-in",463836271),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationOutputIn)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","provides-tree","ui/provides-tree",675380755),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.ui.expandable_tree.ExpandableTree)], null),new cljs.core.Keyword("ui","provides-tree-source","ui/provides-tree-source",874544325)], null);
});})(x51964_52638))
;


var x51968_52639 = com.wsscode.pathom.viz.index_explorer.AttributeView.prototype;
x51968_52639.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x51968_52639.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x51968_52639){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"flex","flex",-1425124628),"1",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column",new cljs.core.Keyword(null,"display","display",242065432),"flex"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".title",".title",-416997657),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),com.wsscode.pathom.viz.index_explorer.color_attribute], null),com.wsscode.pathom.viz.ui.kit.css_header,com.wsscode.pathom.viz.ui.kit.text_base], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".toolbar",".toolbar",968457325),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"16px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".show-graph",".show-graph",1780476669),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"padding","padding",1660304693),"8px",new cljs.core.Keyword(null,"font-family","font-family",-667419874),com.wsscode.pathom.viz.ui.kit.font_base,new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1.1rem"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".graph-options",".graph-options",1009499042),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.9rem"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.viz.ui.kit.component_class(com.wsscode.pathom.viz.ui.kit.ToggleAction,new cljs.core.Keyword(null,".container",".container",-1441208944)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"0 2px"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".data-list",".data-list",949465177),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"white-space","white-space",-707351930),"nowrap",new cljs.core.Keyword(null,"box-sizing","box-sizing",-1956090239),"border-box",new cljs.core.Keyword(null,"width","width",-384071477),"50%",new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),"12px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".data-list-right",".data-list-right",-1849926935),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"white-space","white-space",-707351930),"nowrap",new cljs.core.Keyword(null,"width","width",-384071477),"50%",new cljs.core.Keyword(null,"box-sizing","box-sizing",-1956090239),"border-box",new cljs.core.Keyword(null,"padding","padding",1660304693),"0 12px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".graph",".graph",-327673667),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"height","height",1025178622),"400px",new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"stretch",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".columns",".columns",-1833892286),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex","flex",-1425124628),"1"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font","font",-1506159249),"bold 16px Verdana, Helvetica, Arial, sans-serif"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".links-container",".links-container",-1347961892),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:hover","&:hover",-852658855),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".links-display",".links-display",-2102960556),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"block"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".links-display",".links-display",-2102960556),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"none",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"16px"], null)], null)], null);
});})(x51968_52639))
;

x51968_52639.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x51968_52639){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.viz.index_explorer.AttributeGraph,com.wsscode.pathom.viz.ui.kit.ToggleAction,com.wsscode.pathom.viz.index_explorer.ExamplesPanel], null);
});})(x51968_52639))
;

x51968_52639.fulcro$client$primitives$IPreMerge$ = cljs.core.PROTOCOL_SENTINEL;

x51968_52639.fulcro$client$primitives$IPreMerge$pre_merge_STAR_$arity$2 = ((function (x51968_52639){
return (function (this$,p__51969){
var map__51970 = p__51969;
var map__51970__$1 = (((((!((map__51970 == null))))?(((((map__51970.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51970.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51970):map__51970);
var current_normalized = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51970__$1,new cljs.core.Keyword(null,"current-normalized","current-normalized",851723724));
var data_tree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51970__$1,new cljs.core.Keyword(null,"data-tree","data-tree",1311167582));
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
});})(x51968_52639))
;

x51968_52639.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x51968_52639.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x51968_52639){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x51968_52639))
;

x51968_52639.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x51968_52639.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x51968_52639){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-combinations","com.wsscode.pathom.connect/attr-combinations",-1163990806),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-input-in","com.wsscode.pathom.connect/attr-input-in",-2112912399),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-output-in","com.wsscode.pathom.connect/attr-output-in",-62045610),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-mutation-param-in","com.wsscode.pathom.connect/attr-mutation-param-in",-1474382671),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-mutation-output-in","com.wsscode.pathom.connect/attr-mutation-output-in",1122448739),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","show-graph?","com.wsscode.pathom.viz.index-explorer/show-graph?",-1999932552),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via","com.wsscode.pathom.connect/attr-reach-via",-483841559),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-provides","com.wsscode.pathom.connect/attr-provides",-474523918),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(">","graph-panel",">/graph-panel",-700694737),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.AttributeGraphPanel)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(">","reach-via",">/reach-via",725397135),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.AttributeInfoReachVia)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(">","mutation-param-in",">/mutation-param-in",-1050138308),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationParamIn)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(">","mutation-output-in",">/mutation-output-in",463836271),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.AttributeInfoMutationOutputIn)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","provides-tree","ui/provides-tree",675380755),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.ui.expandable_tree.ExpandableTree)], null),new cljs.core.Keyword("ui","provides-tree-source","ui/provides-tree-source",874544325)], null);
});})(x51968_52639))
;


com.wsscode.pathom.viz.index_explorer.AttributeView.cljs$lang$type = true;

com.wsscode.pathom.viz.index_explorer.AttributeView.cljs$lang$ctorStr = "com.wsscode.pathom.viz.index-explorer/AttributeView";

com.wsscode.pathom.viz.index_explorer.AttributeView.cljs$lang$ctorPrWriter = (function (this__44805__auto__,writer__44806__auto__,opt__44807__auto__){
return cljs.core._write(writer__44806__auto__,"com.wsscode.pathom.viz.index-explorer/AttributeView");
});
goog.object.set(com.wsscode.pathom.viz.index_explorer.AttributeView,"contextType",com.wsscode.pathom.viz.index_explorer.ExtensionContext);
com.wsscode.pathom.viz.index_explorer.attribute_view = fulcro.client.primitives.computed_factory.cljs$core$IFn$_invoke$arity$2(com.wsscode.pathom.viz.index_explorer.AttributeView,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075)], null));
com.wsscode.pathom.viz.index_explorer.out_all_attributes = (function com$wsscode$pathom$viz$index_explorer$out_all_attributes(p__51972,input){
var map__51973 = p__51972;
var map__51973__$1 = (((((!((map__51973 == null))))?(((((map__51973.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51973.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51973):map__51973);
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51973__$1,new cljs.core.Keyword(null,"children","children",-940561982));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (map__51973,map__51973__$1,children){
return (function (attrs,p__51975){
var map__51976 = p__51975;
var map__51976__$1 = (((((!((map__51976 == null))))?(((((map__51976.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51976.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51976):map__51976);
var node = map__51976__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51976__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var children__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51976__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var G__51978 = ((cljs.core.contains_QMARK_(input,key))?attrs:cljs.core.conj.cljs$core$IFn$_invoke$arity$2(attrs,key));
if(cljs.core.truth_(children__$1)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(G__51978,(com.wsscode.pathom.viz.index_explorer.out_all_attributes.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.out_all_attributes.cljs$core$IFn$_invoke$arity$2(node,input) : com.wsscode.pathom.viz.index_explorer.out_all_attributes.call(null,node,input)));
} else {
return G__51978;
}
});})(map__51973,map__51973__$1,children))
,cljs.core.PersistentHashSet.EMPTY,children);
});
if((typeof com !== 'undefined') && (typeof com.wsscode !== 'undefined') && (typeof com.wsscode.pathom !== 'undefined') && (typeof com.wsscode.pathom.viz !== 'undefined') && (typeof com.wsscode.pathom.viz.index_explorer !== 'undefined') && (typeof com.wsscode.pathom.viz.index_explorer.ResolverView !== 'undefined')){
} else {
/**
 * @constructor
 * @nocollapse
 */
com.wsscode.pathom.viz.index_explorer.ResolverView = (function com$wsscode$pathom$viz$index_explorer$ResolverView(){
var this__44802__auto__ = this;
React.Component.apply(this__44802__auto__,arguments);

if((!((this__44802__auto__.initLocalState == null)))){
this__44802__auto__.state = this__44802__auto__.initLocalState();
} else {
this__44802__auto__.state = ({});
}

return this__44802__auto__;
});

goog.object.extend(com.wsscode.pathom.viz.index_explorer.ResolverView.prototype,React.Component.prototype,fulcro.client.primitives.default_component_prototype);
}

fulcro.client.primitives._register_component_BANG_(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","ResolverView","com.wsscode.pathom.viz.index-explorer/ResolverView",1233559847),com.wsscode.pathom.viz.index_explorer.ResolverView);

var x51982_52640 = com.wsscode.pathom.viz.index_explorer.ResolverView.prototype;
x51982_52640.render = ((function (x51982_52640){
return (function (){
var this__43720__auto__ = this;
var this$ = this__43720__auto__;
var _STAR_reconciler_STAR__orig_val__51983 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__51984 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__51985 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__51986 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__51987 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__51988 = fulcro.client.primitives.get_reconciler(this__43720__auto__);
var _STAR_depth_STAR__temp_val__51989 = (fulcro.client.primitives.depth(this__43720__auto__) + (1));
var _STAR_shared_STAR__temp_val__51990 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__43720__auto__);
var _STAR_instrument_STAR__temp_val__51991 = fulcro.client.primitives.instrument(this__43720__auto__);
var _STAR_parent_STAR__temp_val__51992 = this__43720__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__51988;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__51989;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__51990;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__51991;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__51992;

try{var map__51993 = fulcro.client.primitives.props(this$);
var map__51993__$1 = (((((!((map__51993 == null))))?(((((map__51993.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51993.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51993):map__51993);
var sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51993__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581));
var input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51993__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121));
var output = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51993__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303));
var batch_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51993__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","batch?","com.wsscode.pathom.connect/batch?",-427062659));
var output_tree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51993__$1,new cljs.core.Keyword("ui","output-tree","ui/output-tree",-491226343));
var map__51994 = fulcro.client.primitives.get_computed.cljs$core$IFn$_invoke$arity$1(this$);
var map__51994__$1 = (((((!((map__51994 == null))))?(((((map__51994.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51994.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51994):map__51994);
var computed = map__51994__$1;
var on_select_attribute = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51994__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","on-select-attribute","com.wsscode.pathom.viz.index-explorer/on-select-attribute",2006419034));
var attributes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51994__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attributes","com.wsscode.pathom.viz.index-explorer/attributes",-67264281));
var css = fulcro_css.css_implementation.get_classnames(com.wsscode.pathom.viz.index_explorer.ResolverView);
var input_SINGLEQUOTE_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(input)))?cljs.core.first(input):input);
var computed__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(computed,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","graph-comm","com.wsscode.pathom.viz.index-explorer/graph-comm",-735750087),fulcro.client.primitives.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"graph-comm","graph-comm",-744729650)));
var G__51997 = com.wsscode.pathom.viz.ui.kit.gc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".flex",".flex",-73425686)], 0));
var G__51998 = fulcro.client.localized_dom.h1.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".title",".title",-416997657),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)], 0));
var G__51999 = (function (){var G__52000 = com.wsscode.pathom.viz.ui.kit.gc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".flex",".flex",-73425686),new cljs.core.Keyword(null,".no-scrollbars",".no-scrollbars",2090539071)], 0));
var G__52001 = fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".menu",".menu",986259874),(cljs.core.truth_(batch_QMARK_)?(function (){var G__52003 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","panel-title","com.wsscode.pathom.viz.ui.kit/panel-title",1529445284),"Batch"], null);
var G__52004 = "True";
return (com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2(G__52003,G__52004) : com.wsscode.pathom.viz.ui.kit.panel.call(null,G__52003,G__52004));
})():null),(cljs.core.truth_(input)?(function (){var G__52005 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","panel-title","com.wsscode.pathom.viz.ui.kit/panel-title",1529445284),"Input"], null);
var G__52006 = com.wsscode.pathom.viz.index_explorer.attribute_link(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),input_SINGLEQUOTE_], null),computed__$1);
return (com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2(G__52005,G__52006) : com.wsscode.pathom.viz.ui.kit.panel.call(null,G__52005,G__52006));
})():null),(cljs.core.truth_(output)?(function (){var G__52007 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","panel-title","com.wsscode.pathom.viz.ui.kit/panel-title",1529445284),"Output"], null);
var G__52008 = (function (){var G__52009 = output_tree;
var G__52010 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.viz.ui.expandable-tree","root","com.wsscode.pathom.viz.ui.expandable-tree/root",-788021653),cljs.core.update.cljs$core$IFn$_invoke$arity$3(edn_query_language.core.query__GT_ast(output),new cljs.core.Keyword(null,"children","children",-940561982),((function (G__52009,G__52007,G__52000,G__51997,G__51998,input_SINGLEQUOTE_,computed__$1,map__51993,map__51993__$1,sym,input,output,batch_QMARK_,output_tree,map__51994,map__51994__$1,computed,on_select_attribute,attributes,css,_STAR_reconciler_STAR__orig_val__51983,_STAR_depth_STAR__orig_val__51984,_STAR_shared_STAR__orig_val__51985,_STAR_instrument_STAR__orig_val__51986,_STAR_parent_STAR__orig_val__51987,_STAR_reconciler_STAR__temp_val__51988,_STAR_depth_STAR__temp_val__51989,_STAR_shared_STAR__temp_val__51990,_STAR_instrument_STAR__temp_val__51991,_STAR_parent_STAR__temp_val__51992,this$,this__43720__auto__,x51982_52640){
return (function (p1__51979_SHARP_){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(input,new cljs.core.Keyword(null,"key","key",-1516042587)),p1__51979_SHARP_);
});})(G__52009,G__52007,G__52000,G__51997,G__51998,input_SINGLEQUOTE_,computed__$1,map__51993,map__51993__$1,sym,input,output,batch_QMARK_,output_tree,map__51994,map__51994__$1,computed,on_select_attribute,attributes,css,_STAR_reconciler_STAR__orig_val__51983,_STAR_depth_STAR__orig_val__51984,_STAR_shared_STAR__orig_val__51985,_STAR_instrument_STAR__orig_val__51986,_STAR_parent_STAR__orig_val__51987,_STAR_reconciler_STAR__temp_val__51988,_STAR_depth_STAR__temp_val__51989,_STAR_shared_STAR__temp_val__51990,_STAR_instrument_STAR__temp_val__51991,_STAR_parent_STAR__temp_val__51992,this$,this__43720__auto__,x51982_52640))
),new cljs.core.Keyword("com.wsscode.pathom.viz.ui.expandable-tree","render","com.wsscode.pathom.viz.ui.expandable-tree/render",918872218),fulcro.client.primitives.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"render","render",-1408033454)),new cljs.core.Keyword("com.wsscode.pathom.viz.ui.expandable-tree","sort-by","com.wsscode.pathom.viz.ui.expandable-tree/sort-by",1511051281),new cljs.core.Keyword(null,"key","key",-1516042587)], null);
return (com.wsscode.pathom.viz.ui.expandable_tree.expandable_tree.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.expandable_tree.expandable_tree.cljs$core$IFn$_invoke$arity$2(G__52009,G__52010) : com.wsscode.pathom.viz.ui.expandable_tree.expandable_tree.call(null,G__52009,G__52010));
})();
return (com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2(G__52007,G__52008) : com.wsscode.pathom.viz.ui.kit.panel.call(null,G__52007,G__52008));
})():null),com.wsscode.pathom.viz.index_explorer.render_plugin_extension(this$,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","plugin-render-to-resolver-menu","com.wsscode.pathom.viz.index-explorer/plugin-render-to-resolver-menu",-1265412227))], 0));
var G__52002 = (cljs.core.truth_(input)?(function (){var resolver_attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(com.wsscode.pathom.viz.index_explorer.out_all_attributes(edn_query_language.core.query__GT_ast(output),input),input_SINGLEQUOTE_);
var attrs = cljs.core.vals(cljs.core.update.cljs$core$IFn$_invoke$arity$5(cljs.core.select_keys(com.wsscode.pathom.viz.helpers.index_by(new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),attributes),resolver_attrs),input_SINGLEQUOTE_,cljs.core.assoc,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","center?","com.wsscode.pathom.viz.index-explorer/center?",-314133194),true));
var G__52011 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attributes","com.wsscode.pathom.viz.index-explorer/attributes",-67264281),attrs,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","graph-comm","com.wsscode.pathom.viz.index-explorer/graph-comm",-735750087),fulcro.client.primitives.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"graph-comm","graph-comm",-744729650)),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","on-show-details","com.wsscode.pathom.viz.index-explorer/on-show-details",-322180105),on_select_attribute,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","on-click-edge","com.wsscode.pathom.viz.index-explorer/on-click-edge",810811642),fulcro.client.primitives.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"select-resolver","select-resolver",43705318))], null);
return (com.wsscode.pathom.viz.index_explorer.attribute_graph.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom.viz.index_explorer.attribute_graph.cljs$core$IFn$_invoke$arity$1(G__52011) : com.wsscode.pathom.viz.index_explorer.attribute_graph.call(null,G__52011));
})():null);
return (com.wsscode.pathom.viz.ui.kit.row.cljs$core$IFn$_invoke$arity$3 ? com.wsscode.pathom.viz.ui.kit.row.cljs$core$IFn$_invoke$arity$3(G__52000,G__52001,G__52002) : com.wsscode.pathom.viz.ui.kit.row.call(null,G__52000,G__52001,G__52002));
})();
return (com.wsscode.pathom.viz.ui.kit.column.cljs$core$IFn$_invoke$arity$3 ? com.wsscode.pathom.viz.ui.kit.column.cljs$core$IFn$_invoke$arity$3(G__51997,G__51998,G__51999) : com.wsscode.pathom.viz.ui.kit.column.call(null,G__51997,G__51998,G__51999));
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__51987;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__51986;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__51985;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__51984;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__51983;
}});})(x51982_52640))
;

x51982_52640.initLocalState = ((function (x51982_52640){
return (function (){
var this$ = this;
var ret__43695__auto__ = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"graph-comm","graph-comm",-744729650),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null),new cljs.core.Keyword(null,"select-resolver","select-resolver",43705318),((function (this$,x51982_52640){
return (function (p__52012){
var map__52013 = p__52012;
var map__52013__$1 = (((((!((map__52013 == null))))?(((((map__52013.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52013.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52013):map__52013);
var resolvers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52013__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","resolvers","com.wsscode.pathom.viz.index-explorer/resolvers",-1064744669));
var map__52015 = fulcro.client.primitives.get_computed.cljs$core$IFn$_invoke$arity$1(fulcro.client.primitives.props(this$));
var map__52015__$1 = (((((!((map__52015 == null))))?(((((map__52015.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52015.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52015):map__52015);
var on_select_resolver = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52015__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","on-select-resolver","com.wsscode.pathom.viz.index-explorer/on-select-resolver",1600914463));
var G__52017 = cljs.core.first(resolvers);
return (on_select_resolver.cljs$core$IFn$_invoke$arity$1 ? on_select_resolver.cljs$core$IFn$_invoke$arity$1(G__52017) : on_select_resolver.call(null,G__52017));
});})(this$,x51982_52640))
,new cljs.core.Keyword(null,"render","render",-1408033454),((function (this$,x51982_52640){
return (function (p__52018){
var map__52019 = p__52018;
var map__52019__$1 = (((((!((map__52019 == null))))?(((((map__52019.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52019.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52019):map__52019);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52019__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var computed = fulcro.client.primitives.get_computed.cljs$core$IFn$_invoke$arity$1(fulcro.client.primitives.props(this$));
var computed__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(computed,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","graph-comm","com.wsscode.pathom.viz.index-explorer/graph-comm",-735750087),fulcro.client.primitives.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"graph-comm","graph-comm",-744729650)));
return com.wsscode.pathom.viz.index_explorer.attribute_link(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),key], null),computed__$1);
});})(this$,x51982_52640))
], null);
var obj52022 = ({"fulcro$state":ret__43695__auto__});
return obj52022;
});})(x51982_52640))
;


com.wsscode.pathom.viz.index_explorer.ResolverView.prototype.constructor = com.wsscode.pathom.viz.index_explorer.ResolverView;

com.wsscode.pathom.viz.index_explorer.ResolverView.prototype.constructor.displayName = "com.wsscode.pathom.viz.index-explorer/ResolverView";

com.wsscode.pathom.viz.index_explorer.ResolverView.prototype.fulcro$isComponent = true;

var x52023_52641 = com.wsscode.pathom.viz.index_explorer.ResolverView;
x52023_52641.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x52023_52641.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x52023_52641){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".title",".title",-416997657),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),com.wsscode.pathom.viz.index_explorer.color_resolver], null),com.wsscode.pathom.viz.ui.kit.css_header,com.wsscode.pathom.viz.ui.kit.text_base], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".menu",".menu",986259874),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"white-space","white-space",-707351930),"nowrap",new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),"12px",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"auto"], null)], null)], null);
});})(x52023_52641))
;

x52023_52641.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x52023_52641){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x52023_52641))
;

x52023_52641.fulcro$client$primitives$IPreMerge$ = cljs.core.PROTOCOL_SENTINEL;

x52023_52641.fulcro$client$primitives$IPreMerge$pre_merge_STAR_$arity$2 = ((function (x52023_52641){
return (function (this$,p__52024){
var map__52025 = p__52024;
var map__52025__$1 = (((((!((map__52025 == null))))?(((((map__52025.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52025.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52025):map__52025);
var current_normalized = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52025__$1,new cljs.core.Keyword(null,"current-normalized","current-normalized",851723724));
var data_tree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52025__$1,new cljs.core.Keyword(null,"data-tree","data-tree",1311167582));
var this$__$1 = this;
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","output-tree","ui/output-tree",-491226343),cljs.core.PersistentArrayMap.EMPTY], null),current_normalized,data_tree], 0));
});})(x52023_52641))
;

x52023_52641.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x52023_52641.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x52023_52641){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x52023_52641))
;

x52023_52641.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x52023_52641.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x52023_52641){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","batch?","com.wsscode.pathom.connect/batch?",-427062659),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","output-tree","ui/output-tree",-491226343),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.ui.expandable_tree.ExpandableTree)], null)], null);
});})(x52023_52641))
;


var x52027_52642 = com.wsscode.pathom.viz.index_explorer.ResolverView.prototype;
x52027_52642.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x52027_52642.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x52027_52642){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".title",".title",-416997657),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),com.wsscode.pathom.viz.index_explorer.color_resolver], null),com.wsscode.pathom.viz.ui.kit.css_header,com.wsscode.pathom.viz.ui.kit.text_base], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".menu",".menu",986259874),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"white-space","white-space",-707351930),"nowrap",new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),"12px",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"auto"], null)], null)], null);
});})(x52027_52642))
;

x52027_52642.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x52027_52642){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x52027_52642))
;

x52027_52642.fulcro$client$primitives$IPreMerge$ = cljs.core.PROTOCOL_SENTINEL;

x52027_52642.fulcro$client$primitives$IPreMerge$pre_merge_STAR_$arity$2 = ((function (x52027_52642){
return (function (this$,p__52028){
var map__52029 = p__52028;
var map__52029__$1 = (((((!((map__52029 == null))))?(((((map__52029.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52029.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52029):map__52029);
var current_normalized = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52029__$1,new cljs.core.Keyword(null,"current-normalized","current-normalized",851723724));
var data_tree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52029__$1,new cljs.core.Keyword(null,"data-tree","data-tree",1311167582));
var this$__$1 = this;
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","output-tree","ui/output-tree",-491226343),cljs.core.PersistentArrayMap.EMPTY], null),current_normalized,data_tree], 0));
});})(x52027_52642))
;

x52027_52642.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x52027_52642.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x52027_52642){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x52027_52642))
;

x52027_52642.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x52027_52642.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x52027_52642){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","batch?","com.wsscode.pathom.connect/batch?",-427062659),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","output-tree","ui/output-tree",-491226343),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.ui.expandable_tree.ExpandableTree)], null)], null);
});})(x52027_52642))
;


com.wsscode.pathom.viz.index_explorer.ResolverView.cljs$lang$type = true;

com.wsscode.pathom.viz.index_explorer.ResolverView.cljs$lang$ctorStr = "com.wsscode.pathom.viz.index-explorer/ResolverView";

com.wsscode.pathom.viz.index_explorer.ResolverView.cljs$lang$ctorPrWriter = (function (this__44805__auto__,writer__44806__auto__,opt__44807__auto__){
return cljs.core._write(writer__44806__auto__,"com.wsscode.pathom.viz.index-explorer/ResolverView");
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
var this__44802__auto__ = this;
React.Component.apply(this__44802__auto__,arguments);

if((!((this__44802__auto__.initLocalState == null)))){
this__44802__auto__.state = this__44802__auto__.initLocalState();
} else {
this__44802__auto__.state = ({});
}

return this__44802__auto__;
});

goog.object.extend(com.wsscode.pathom.viz.index_explorer.MutationView.prototype,React.Component.prototype,fulcro.client.primitives.default_component_prototype);
}

fulcro.client.primitives._register_component_BANG_(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","MutationView","com.wsscode.pathom.viz.index-explorer/MutationView",1198577335),com.wsscode.pathom.viz.index_explorer.MutationView);

var x52033_52643 = com.wsscode.pathom.viz.index_explorer.MutationView.prototype;
x52033_52643.render = ((function (x52033_52643){
return (function (){
var this__43720__auto__ = this;
var this$ = this__43720__auto__;
var _STAR_reconciler_STAR__orig_val__52034 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__52035 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__52036 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__52037 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__52038 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__52039 = fulcro.client.primitives.get_reconciler(this__43720__auto__);
var _STAR_depth_STAR__temp_val__52040 = (fulcro.client.primitives.depth(this__43720__auto__) + (1));
var _STAR_shared_STAR__temp_val__52041 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__43720__auto__);
var _STAR_instrument_STAR__temp_val__52042 = fulcro.client.primitives.instrument(this__43720__auto__);
var _STAR_parent_STAR__temp_val__52043 = this__43720__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__52039;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__52040;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__52041;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__52042;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__52043;

try{var map__52044 = fulcro.client.primitives.props(this$);
var map__52044__$1 = (((((!((map__52044 == null))))?(((((map__52044.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52044.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52044):map__52044);
var sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52044__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52044__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795));
var output = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52044__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303));
var mutation_params_tree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52044__$1,new cljs.core.Keyword("ui","mutation-params-tree","ui/mutation-params-tree",-1729279365));
var mutation_output_tree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52044__$1,new cljs.core.Keyword("ui","mutation-output-tree","ui/mutation-output-tree",-208190980));
var G__52046 = com.wsscode.pathom.viz.ui.kit.gc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".flex",".flex",-73425686)], 0));
var G__52047 = fulcro.client.localized_dom.h1.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".title",".title",-416997657),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)], 0));
var G__52048 = (function (){var G__52049 = com.wsscode.pathom.viz.ui.kit.gc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".flex",".flex",-73425686),new cljs.core.Keyword(null,".scrollbars",".scrollbars",-1193970120),new cljs.core.Keyword(null,".nowrap",".nowrap",-784360447)], 0));
var G__52050 = fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.wsscode.pathom.viz.ui.kit.gc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".flex",".flex",-73425686)], 0)),(cljs.core.truth_(params)?(function (){var G__52053 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","panel-title","com.wsscode.pathom.viz.ui.kit/panel-title",1529445284),"Params"], null);
var G__52054 = (function (){var G__52055 = mutation_params_tree;
var G__52056 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.viz.ui.expandable-tree","root","com.wsscode.pathom.viz.ui.expandable-tree/root",-788021653),edn_query_language.core.query__GT_ast(params),new cljs.core.Keyword("com.wsscode.pathom.viz.ui.expandable-tree","render","com.wsscode.pathom.viz.ui.expandable-tree/render",918872218),fulcro.client.primitives.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"render","render",-1408033454)),new cljs.core.Keyword("com.wsscode.pathom.viz.ui.expandable-tree","sort-by","com.wsscode.pathom.viz.ui.expandable-tree/sort-by",1511051281),new cljs.core.Keyword(null,"key","key",-1516042587)], null);
return (com.wsscode.pathom.viz.ui.expandable_tree.expandable_tree.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.expandable_tree.expandable_tree.cljs$core$IFn$_invoke$arity$2(G__52055,G__52056) : com.wsscode.pathom.viz.ui.expandable_tree.expandable_tree.call(null,G__52055,G__52056));
})();
return (com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2(G__52053,G__52054) : com.wsscode.pathom.viz.ui.kit.panel.call(null,G__52053,G__52054));
})():null),com.wsscode.pathom.viz.index_explorer.render_plugin_extension(this$,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","plugin-render-to-mutation-view-left","com.wsscode.pathom.viz.index-explorer/plugin-render-to-mutation-view-left",-356992926))], 0));
var G__52051 = fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"24px"], null)], null)], 0));
var G__52052 = fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.wsscode.pathom.viz.ui.kit.gc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".flex",".flex",-73425686)], 0)),(cljs.core.truth_(output)?(function (){var G__52057 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","panel-title","com.wsscode.pathom.viz.ui.kit/panel-title",1529445284),"Output"], null);
var G__52058 = (function (){var G__52059 = mutation_output_tree;
var G__52060 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.viz.ui.expandable-tree","root","com.wsscode.pathom.viz.ui.expandable-tree/root",-788021653),edn_query_language.core.query__GT_ast(output),new cljs.core.Keyword("com.wsscode.pathom.viz.ui.expandable-tree","render","com.wsscode.pathom.viz.ui.expandable-tree/render",918872218),fulcro.client.primitives.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"render","render",-1408033454)),new cljs.core.Keyword("com.wsscode.pathom.viz.ui.expandable-tree","sort-by","com.wsscode.pathom.viz.ui.expandable-tree/sort-by",1511051281),new cljs.core.Keyword(null,"key","key",-1516042587)], null);
return (com.wsscode.pathom.viz.ui.expandable_tree.expandable_tree.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.expandable_tree.expandable_tree.cljs$core$IFn$_invoke$arity$2(G__52059,G__52060) : com.wsscode.pathom.viz.ui.expandable_tree.expandable_tree.call(null,G__52059,G__52060));
})();
return (com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2(G__52057,G__52058) : com.wsscode.pathom.viz.ui.kit.panel.call(null,G__52057,G__52058));
})():null),com.wsscode.pathom.viz.index_explorer.render_plugin_extension(this$,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","plugin-render-to-mutation-view-right","com.wsscode.pathom.viz.index-explorer/plugin-render-to-mutation-view-right",1791875010))], 0));
return (com.wsscode.pathom.viz.ui.kit.row.cljs$core$IFn$_invoke$arity$4 ? com.wsscode.pathom.viz.ui.kit.row.cljs$core$IFn$_invoke$arity$4(G__52049,G__52050,G__52051,G__52052) : com.wsscode.pathom.viz.ui.kit.row.call(null,G__52049,G__52050,G__52051,G__52052));
})();
return (com.wsscode.pathom.viz.ui.kit.column.cljs$core$IFn$_invoke$arity$3 ? com.wsscode.pathom.viz.ui.kit.column.cljs$core$IFn$_invoke$arity$3(G__52046,G__52047,G__52048) : com.wsscode.pathom.viz.ui.kit.column.call(null,G__52046,G__52047,G__52048));
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__52038;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__52037;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__52036;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__52035;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__52034;
}});})(x52033_52643))
;

x52033_52643.initLocalState = ((function (x52033_52643){
return (function (){
var this$ = this;
var ret__43695__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"render","render",-1408033454),((function (this$,x52033_52643){
return (function (p__52061){
var map__52062 = p__52061;
var map__52062__$1 = (((((!((map__52062 == null))))?(((((map__52062.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52062.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52062):map__52062);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52062__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
return com.wsscode.pathom.viz.index_explorer.attribute_link(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),key], null),fulcro.client.primitives.get_computed.cljs$core$IFn$_invoke$arity$1(fulcro.client.primitives.props(this$)));
});})(this$,x52033_52643))
], null);
var obj52065 = ({"fulcro$state":ret__43695__auto__});
return obj52065;
});})(x52033_52643))
;


com.wsscode.pathom.viz.index_explorer.MutationView.prototype.constructor = com.wsscode.pathom.viz.index_explorer.MutationView;

com.wsscode.pathom.viz.index_explorer.MutationView.prototype.constructor.displayName = "com.wsscode.pathom.viz.index-explorer/MutationView";

com.wsscode.pathom.viz.index_explorer.MutationView.prototype.fulcro$isComponent = true;

var x52066_52644 = com.wsscode.pathom.viz.index_explorer.MutationView;
x52066_52644.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x52066_52644.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x52066_52644){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".title",".title",-416997657),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),com.wsscode.pathom.viz.index_explorer.color_mutation], null),com.wsscode.pathom.viz.ui.kit.css_header,com.wsscode.pathom.viz.ui.kit.text_base], null)], null);
});})(x52066_52644))
;

x52066_52644.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x52066_52644){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x52066_52644))
;

x52066_52644.fulcro$client$primitives$IPreMerge$ = cljs.core.PROTOCOL_SENTINEL;

x52066_52644.fulcro$client$primitives$IPreMerge$pre_merge_STAR_$arity$2 = ((function (x52066_52644){
return (function (this$,p__52067){
var map__52068 = p__52067;
var map__52068__$1 = (((((!((map__52068 == null))))?(((((map__52068.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52068.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52068):map__52068);
var current_normalized = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52068__$1,new cljs.core.Keyword(null,"current-normalized","current-normalized",851723724));
var data_tree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52068__$1,new cljs.core.Keyword(null,"data-tree","data-tree",1311167582));
var this$__$1 = this;
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("ui","mutation-params-tree","ui/mutation-params-tree",-1729279365),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("ui","mutation-output-tree","ui/mutation-output-tree",-208190980),cljs.core.PersistentArrayMap.EMPTY], null),current_normalized,data_tree], 0));
});})(x52066_52644))
;

x52066_52644.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x52066_52644.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x52066_52644){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutation-sym","com.wsscode.pathom.viz.index-explorer/mutation-sym",-191280951),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutation-sym","com.wsscode.pathom.viz.index-explorer/mutation-sym",-191280951).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x52066_52644))
;

x52066_52644.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x52066_52644.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x52066_52644){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutation-sym","com.wsscode.pathom.viz.index-explorer/mutation-sym",-191280951),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","mutation-params-tree","ui/mutation-params-tree",-1729279365),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.ui.expandable_tree.ExpandableTree)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","mutation-output-tree","ui/mutation-output-tree",-208190980),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.ui.expandable_tree.ExpandableTree)], null)], null);
});})(x52066_52644))
;


var x52070_52645 = com.wsscode.pathom.viz.index_explorer.MutationView.prototype;
x52070_52645.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x52070_52645.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x52070_52645){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".title",".title",-416997657),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),com.wsscode.pathom.viz.index_explorer.color_mutation], null),com.wsscode.pathom.viz.ui.kit.css_header,com.wsscode.pathom.viz.ui.kit.text_base], null)], null);
});})(x52070_52645))
;

x52070_52645.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x52070_52645){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x52070_52645))
;

x52070_52645.fulcro$client$primitives$IPreMerge$ = cljs.core.PROTOCOL_SENTINEL;

x52070_52645.fulcro$client$primitives$IPreMerge$pre_merge_STAR_$arity$2 = ((function (x52070_52645){
return (function (this$,p__52071){
var map__52072 = p__52071;
var map__52072__$1 = (((((!((map__52072 == null))))?(((((map__52072.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52072.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52072):map__52072);
var current_normalized = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52072__$1,new cljs.core.Keyword(null,"current-normalized","current-normalized",851723724));
var data_tree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52072__$1,new cljs.core.Keyword(null,"data-tree","data-tree",1311167582));
var this$__$1 = this;
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("ui","mutation-params-tree","ui/mutation-params-tree",-1729279365),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("ui","mutation-output-tree","ui/mutation-output-tree",-208190980),cljs.core.PersistentArrayMap.EMPTY], null),current_normalized,data_tree], 0));
});})(x52070_52645))
;

x52070_52645.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x52070_52645.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x52070_52645){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutation-sym","com.wsscode.pathom.viz.index-explorer/mutation-sym",-191280951),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutation-sym","com.wsscode.pathom.viz.index-explorer/mutation-sym",-191280951).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x52070_52645))
;

x52070_52645.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x52070_52645.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x52070_52645){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutation-sym","com.wsscode.pathom.viz.index-explorer/mutation-sym",-191280951),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","mutation-params-tree","ui/mutation-params-tree",-1729279365),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.ui.expandable_tree.ExpandableTree)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","mutation-output-tree","ui/mutation-output-tree",-208190980),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.ui.expandable_tree.ExpandableTree)], null)], null);
});})(x52070_52645))
;


com.wsscode.pathom.viz.index_explorer.MutationView.cljs$lang$type = true;

com.wsscode.pathom.viz.index_explorer.MutationView.cljs$lang$ctorStr = "com.wsscode.pathom.viz.index-explorer/MutationView";

com.wsscode.pathom.viz.index_explorer.MutationView.cljs$lang$ctorPrWriter = (function (this__44805__auto__,writer__44806__auto__,opt__44807__auto__){
return cljs.core._write(writer__44806__auto__,"com.wsscode.pathom.viz.index-explorer/MutationView");
});
goog.object.set(com.wsscode.pathom.viz.index_explorer.MutationView,"contextType",com.wsscode.pathom.viz.index_explorer.ExtensionContext);
com.wsscode.pathom.viz.index_explorer.mutation_view = fulcro.client.primitives.factory.cljs$core$IFn$_invoke$arity$2(com.wsscode.pathom.viz.index_explorer.MutationView,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581)], null));
com.wsscode.pathom.viz.index_explorer.realize_references = (function com$wsscode$pathom$viz$index_explorer$realize_references(state,coll){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__52074_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,p1__52074_SHARP_);
}),coll);
});
com.wsscode.pathom.viz.index_explorer.max_search_results = (100);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-type","com.wsscode.pathom.viz.index-explorer/search-type",-1615224063),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-type-resolver","com.wsscode.pathom.viz.index-explorer/search-type-resolver",1588028676),"null",new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-type-mutation","com.wsscode.pathom.viz.index-explorer/search-type-mutation",-68441744),"null",new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-type-attribute","com.wsscode.pathom.viz.index-explorer/search-type-attribute",-62795524),"null"], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-type-resolver","com.wsscode.pathom.viz.index-explorer/search-type-resolver",1588028676),null,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-type-mutation","com.wsscode.pathom.viz.index-explorer/search-type-mutation",-68441744),null,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-type-attribute","com.wsscode.pathom.viz.index-explorer/search-type-attribute",-62795524),null], null), null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-value","com.wsscode.pathom.viz.index-explorer/search-value",-337129957),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-index-item","com.wsscode.pathom.viz.index-explorer/search-index-item",-560879594),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.fuzzy","string","com.wsscode.fuzzy/string",320074815),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-value","com.wsscode.pathom.viz.index-explorer/search-value",-337129957),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-type","com.wsscode.pathom.viz.index-explorer/search-type",-1615224063)], null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.fuzzy","match-hl","com.wsscode.fuzzy/match-hl",-611317739)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__52075){
return cljs.core.map_QMARK_(G__52075);
}),(function (G__52075){
return cljs.core.contains_QMARK_(G__52075,new cljs.core.Keyword("com.wsscode.fuzzy","string","com.wsscode.fuzzy/string",320074815));
}),(function (G__52075){
return cljs.core.contains_QMARK_(G__52075,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-value","com.wsscode.pathom.viz.index-explorer/search-value",-337129957));
}),(function (G__52075){
return cljs.core.contains_QMARK_(G__52075,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-type","com.wsscode.pathom.viz.index-explorer/search-type",-1615224063));
})], null),(function (G__52075){
return ((cljs.core.map_QMARK_(G__52075)) && (cljs.core.contains_QMARK_(G__52075,new cljs.core.Keyword("com.wsscode.fuzzy","string","com.wsscode.fuzzy/string",320074815))) && (cljs.core.contains_QMARK_(G__52075,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-value","com.wsscode.pathom.viz.index-explorer/search-value",-337129957))) && (cljs.core.contains_QMARK_(G__52075,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-type","com.wsscode.pathom.viz.index-explorer/search-type",-1615224063))));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.fuzzy","match-hl","com.wsscode.fuzzy/match-hl",-611317739)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.fuzzy","string","com.wsscode.fuzzy/string",320074815),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-value","com.wsscode.pathom.viz.index-explorer/search-value",-337129957),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-type","com.wsscode.pathom.viz.index-explorer/search-type",-1615224063)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.fuzzy","string","com.wsscode.fuzzy/string",320074815),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-value","com.wsscode.pathom.viz.index-explorer/search-value",-337129957),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-type","com.wsscode.pathom.viz.index-explorer/search-type",-1615224063)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.fuzzy","string","com.wsscode.fuzzy/string",320074815),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-value","com.wsscode.pathom.viz.index-explorer/search-value",-337129957),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-type","com.wsscode.pathom.viz.index-explorer/search-type",-1615224063)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.fuzzy","match-hl","com.wsscode.fuzzy/match-hl",-611317739)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("com.wsscode.fuzzy","string","com.wsscode.fuzzy/string",320074815))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-value","com.wsscode.pathom.viz.index-explorer/search-value",-337129957))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-type","com.wsscode.pathom.viz.index-explorer/search-type",-1615224063)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.fuzzy","match-hl","com.wsscode.fuzzy/match-hl",-611317739)], null)])));
com.wsscode.pathom.viz.index_explorer.active_search_QMARK_ = (function com$wsscode$pathom$viz$index_explorer$active_search_QMARK_(text){
return (cljs.core.count(text) > (2));
});
fulcro.client.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("com.wsscode.pathom.viz.index-explorer","search","com.wsscode.pathom.viz.index-explorer/search",-1081698050,null),(function (fulcro_incoming_env,_,p__52076){
var map__52077 = p__52076;
var map__52077__$1 = (((((!((map__52077 == null))))?(((((map__52077.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52077.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52077):map__52077);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52077__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","text","com.wsscode.pathom.viz.index-explorer/text",-1775290484));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var map__52079 = fulcro_incoming_env;
var map__52079__$1 = (((((!((map__52079 == null))))?(((((map__52079.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52079.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52079):map__52079);
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52079__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52079__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__52079,map__52079__$1,ref,state,map__52077,map__52077__$1,text){
return (function (){
var items = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ref,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-vector","com.wsscode.pathom.viz.index-explorer/search-vector",-471470935)));
var fuzzy_res = ((com.wsscode.pathom.viz.index_explorer.active_search_QMARK_(text))?com.wsscode.fuzzy.fuzzy_match(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.fuzzy","options","com.wsscode.fuzzy/options",773495630),items,new cljs.core.Keyword("com.wsscode.fuzzy","search-input","com.wsscode.fuzzy/search-input",897823168),text], null)):cljs.core.PersistentVector.EMPTY);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,fulcro.client.primitives.merge_component,com.wsscode.pathom.viz.index_explorer.SearchEverything,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-results","com.wsscode.pathom.viz.index-explorer/search-results",321731333),cljs.core.vec(cljs.core.take.cljs$core$IFn$_invoke$arity$2(com.wsscode.pathom.viz.index_explorer.max_search_results,fuzzy_res))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ref], null)));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.update_in,ref,cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","text","com.wsscode.pathom.viz.index-explorer/text",-1775290484),text], 0));
});})(map__52079,map__52079__$1,ref,state,map__52077,map__52077__$1,text))
], null);
})()], 0));
}));
com.wsscode.pathom.viz.index_explorer.remove_not_found = (function com$wsscode$pathom$viz$index_explorer$remove_not_found(x){
return com.wsscode.pathom.core.transduce_maps(cljs.core.remove.cljs$core$IFn$_invoke$arity$1((function (p__52081){
var vec__52082 = p__52081;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52082,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52082,(1),null);
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
var this__44802__auto__ = this;
React.Component.apply(this__44802__auto__,arguments);

if((!((this__44802__auto__.initLocalState == null)))){
this__44802__auto__.state = this__44802__auto__.initLocalState();
} else {
this__44802__auto__.state = ({});
}

return this__44802__auto__;
});

goog.object.extend(com.wsscode.pathom.viz.index_explorer.AllAttributesList.prototype,React.Component.prototype,fulcro.client.primitives.default_component_prototype);
}

fulcro.client.primitives._register_component_BANG_(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","AllAttributesList","com.wsscode.pathom.viz.index-explorer/AllAttributesList",741873297),com.wsscode.pathom.viz.index_explorer.AllAttributesList);

var x52087_52646 = com.wsscode.pathom.viz.index_explorer.AllAttributesList.prototype;
x52087_52646.render = ((function (x52087_52646){
return (function (){
var this__43720__auto__ = this;
var this$ = this__43720__auto__;
var _STAR_reconciler_STAR__orig_val__52088 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__52089 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__52090 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__52091 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__52092 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__52093 = fulcro.client.primitives.get_reconciler(this__43720__auto__);
var _STAR_depth_STAR__temp_val__52094 = (fulcro.client.primitives.depth(this__43720__auto__) + (1));
var _STAR_shared_STAR__temp_val__52095 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__43720__auto__);
var _STAR_instrument_STAR__temp_val__52096 = fulcro.client.primitives.instrument(this__43720__auto__);
var _STAR_parent_STAR__temp_val__52097 = this__43720__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__52093;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__52094;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__52095;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__52096;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__52097;

try{var map__52098 = fulcro.client.primitives.props(this$);
var map__52098__$1 = (((((!((map__52098 == null))))?(((((map__52098.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52098.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52098):map__52098);
var props = map__52098__$1;
var attributes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52098__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attributes","com.wsscode.pathom.viz.index-explorer/attributes",-67264281));
var computed = fulcro.client.primitives.get_computed.cljs$core$IFn$_invoke$arity$1(this$);
var G__52100 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(props,new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","title","com.wsscode.pathom.viz.ui.kit/title",-1326329402),"Attributes");
var G__52101 = fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.wsscode.pathom.viz.index_explorer.attribute_link(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),cljs.core.PersistentHashSet.EMPTY], null),computed),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.filter.cljs$core$IFn$_invoke$arity$1(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword_QMARK_,new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075))),cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (G__52100,map__52098,map__52098__$1,props,attributes,computed,_STAR_reconciler_STAR__orig_val__52088,_STAR_depth_STAR__orig_val__52089,_STAR_shared_STAR__orig_val__52090,_STAR_instrument_STAR__orig_val__52091,_STAR_parent_STAR__orig_val__52092,_STAR_reconciler_STAR__temp_val__52093,_STAR_depth_STAR__temp_val__52094,_STAR_shared_STAR__temp_val__52095,_STAR_instrument_STAR__temp_val__52096,_STAR_parent_STAR__temp_val__52097,this$,this__43720__auto__,x52087_52646){
return (function (p__52102){
var map__52103 = p__52102;
var map__52103__$1 = (((((!((map__52103 == null))))?(((((map__52103.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52103.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52103):map__52103);
var attribute = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52103__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075));
return com.wsscode.pathom.viz.index_explorer.attribute_link(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),attribute,new cljs.core.Keyword(null,"react-key","react-key",1337881348),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attribute], 0))], null),computed);
});})(G__52100,map__52098,map__52098__$1,props,attributes,computed,_STAR_reconciler_STAR__orig_val__52088,_STAR_depth_STAR__orig_val__52089,_STAR_shared_STAR__orig_val__52090,_STAR_instrument_STAR__orig_val__52091,_STAR_parent_STAR__orig_val__52092,_STAR_reconciler_STAR__temp_val__52093,_STAR_depth_STAR__temp_val__52094,_STAR_shared_STAR__temp_val__52095,_STAR_instrument_STAR__temp_val__52096,_STAR_parent_STAR__temp_val__52097,this$,this__43720__auto__,x52087_52646))
)),attributes)], 0));
return (com.wsscode.pathom.viz.ui.kit.collapsible_box.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.collapsible_box.cljs$core$IFn$_invoke$arity$2(G__52100,G__52101) : com.wsscode.pathom.viz.ui.kit.collapsible_box.call(null,G__52100,G__52101));
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__52092;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__52091;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__52090;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__52089;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__52088;
}});})(x52087_52646))
;


com.wsscode.pathom.viz.index_explorer.AllAttributesList.prototype.constructor = com.wsscode.pathom.viz.index_explorer.AllAttributesList;

com.wsscode.pathom.viz.index_explorer.AllAttributesList.prototype.constructor.displayName = "com.wsscode.pathom.viz.index-explorer/AllAttributesList";

com.wsscode.pathom.viz.index_explorer.AllAttributesList.prototype.fulcro$isComponent = true;

var x52105_52647 = com.wsscode.pathom.viz.index_explorer.AllAttributesList;


var x52106_52648 = com.wsscode.pathom.viz.index_explorer.AllAttributesList.prototype;


com.wsscode.pathom.viz.index_explorer.AllAttributesList.cljs$lang$type = true;

com.wsscode.pathom.viz.index_explorer.AllAttributesList.cljs$lang$ctorStr = "com.wsscode.pathom.viz.index-explorer/AllAttributesList";

com.wsscode.pathom.viz.index_explorer.AllAttributesList.cljs$lang$ctorPrWriter = (function (this__44805__auto__,writer__44806__auto__,opt__44807__auto__){
return cljs.core._write(writer__44806__auto__,"com.wsscode.pathom.viz.index-explorer/AllAttributesList");
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
var this__44802__auto__ = this;
React.Component.apply(this__44802__auto__,arguments);

if((!((this__44802__auto__.initLocalState == null)))){
this__44802__auto__.state = this__44802__auto__.initLocalState();
} else {
this__44802__auto__.state = ({});
}

return this__44802__auto__;
});

goog.object.extend(com.wsscode.pathom.viz.index_explorer.AllResolversList.prototype,React.Component.prototype,fulcro.client.primitives.default_component_prototype);
}

fulcro.client.primitives._register_component_BANG_(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","AllResolversList","com.wsscode.pathom.viz.index-explorer/AllResolversList",1219737218),com.wsscode.pathom.viz.index_explorer.AllResolversList);

var x52110_52649 = com.wsscode.pathom.viz.index_explorer.AllResolversList.prototype;
x52110_52649.render = ((function (x52110_52649){
return (function (){
var this__43720__auto__ = this;
var this$ = this__43720__auto__;
var _STAR_reconciler_STAR__orig_val__52111 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__52112 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__52113 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__52114 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__52115 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__52116 = fulcro.client.primitives.get_reconciler(this__43720__auto__);
var _STAR_depth_STAR__temp_val__52117 = (fulcro.client.primitives.depth(this__43720__auto__) + (1));
var _STAR_shared_STAR__temp_val__52118 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__43720__auto__);
var _STAR_instrument_STAR__temp_val__52119 = fulcro.client.primitives.instrument(this__43720__auto__);
var _STAR_parent_STAR__temp_val__52120 = this__43720__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__52116;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__52117;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__52118;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__52119;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__52120;

try{var map__52121 = fulcro.client.primitives.props(this$);
var map__52121__$1 = (((((!((map__52121 == null))))?(((((map__52121.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52121.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52121):map__52121);
var props = map__52121__$1;
var resolvers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52121__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","resolvers","com.wsscode.pathom.viz.index-explorer/resolvers",-1064744669));
var computed = fulcro.client.primitives.get_computed.cljs$core$IFn$_invoke$arity$1(this$);
var G__52123 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(props,new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","title","com.wsscode.pathom.viz.ui.kit/title",-1326329402),"Resolvers");
var G__52124 = fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (G__52123,map__52121,map__52121__$1,props,resolvers,computed,_STAR_reconciler_STAR__orig_val__52111,_STAR_depth_STAR__orig_val__52112,_STAR_shared_STAR__orig_val__52113,_STAR_instrument_STAR__orig_val__52114,_STAR_parent_STAR__orig_val__52115,_STAR_reconciler_STAR__temp_val__52116,_STAR_depth_STAR__temp_val__52117,_STAR_shared_STAR__temp_val__52118,_STAR_instrument_STAR__temp_val__52119,_STAR_parent_STAR__temp_val__52120,this$,this__43720__auto__,x52110_52649){
return (function (p1__52107_SHARP_){
return com.wsscode.pathom.viz.index_explorer.resolver_link(p1__52107_SHARP_,computed);
});})(G__52123,map__52121,map__52121__$1,props,resolvers,computed,_STAR_reconciler_STAR__orig_val__52111,_STAR_depth_STAR__orig_val__52112,_STAR_shared_STAR__orig_val__52113,_STAR_instrument_STAR__orig_val__52114,_STAR_parent_STAR__orig_val__52115,_STAR_reconciler_STAR__temp_val__52116,_STAR_depth_STAR__temp_val__52117,_STAR_shared_STAR__temp_val__52118,_STAR_instrument_STAR__temp_val__52119,_STAR_parent_STAR__temp_val__52120,this$,this__43720__auto__,x52110_52649))
,resolvers)], 0));
return (com.wsscode.pathom.viz.ui.kit.collapsible_box.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.collapsible_box.cljs$core$IFn$_invoke$arity$2(G__52123,G__52124) : com.wsscode.pathom.viz.ui.kit.collapsible_box.call(null,G__52123,G__52124));
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__52115;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__52114;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__52113;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__52112;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__52111;
}});})(x52110_52649))
;


com.wsscode.pathom.viz.index_explorer.AllResolversList.prototype.constructor = com.wsscode.pathom.viz.index_explorer.AllResolversList;

com.wsscode.pathom.viz.index_explorer.AllResolversList.prototype.constructor.displayName = "com.wsscode.pathom.viz.index-explorer/AllResolversList";

com.wsscode.pathom.viz.index_explorer.AllResolversList.prototype.fulcro$isComponent = true;

var x52125_52650 = com.wsscode.pathom.viz.index_explorer.AllResolversList;


var x52126_52651 = com.wsscode.pathom.viz.index_explorer.AllResolversList.prototype;


com.wsscode.pathom.viz.index_explorer.AllResolversList.cljs$lang$type = true;

com.wsscode.pathom.viz.index_explorer.AllResolversList.cljs$lang$ctorStr = "com.wsscode.pathom.viz.index-explorer/AllResolversList";

com.wsscode.pathom.viz.index_explorer.AllResolversList.cljs$lang$ctorPrWriter = (function (this__44805__auto__,writer__44806__auto__,opt__44807__auto__){
return cljs.core._write(writer__44806__auto__,"com.wsscode.pathom.viz.index-explorer/AllResolversList");
});
com.wsscode.pathom.viz.index_explorer.all_resolvers_list = fulcro.client.primitives.computed_factory.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.AllResolversList);
if((typeof com !== 'undefined') && (typeof com.wsscode !== 'undefined') && (typeof com.wsscode.pathom !== 'undefined') && (typeof com.wsscode.pathom.viz !== 'undefined') && (typeof com.wsscode.pathom.viz.index_explorer !== 'undefined') && (typeof com.wsscode.pathom.viz.index_explorer.AllMutationsList !== 'undefined')){
} else {
/**
 * @constructor
 * @nocollapse
 */
com.wsscode.pathom.viz.index_explorer.AllMutationsList = (function com$wsscode$pathom$viz$index_explorer$AllMutationsList(){
var this__44802__auto__ = this;
React.Component.apply(this__44802__auto__,arguments);

if((!((this__44802__auto__.initLocalState == null)))){
this__44802__auto__.state = this__44802__auto__.initLocalState();
} else {
this__44802__auto__.state = ({});
}

return this__44802__auto__;
});

goog.object.extend(com.wsscode.pathom.viz.index_explorer.AllMutationsList.prototype,React.Component.prototype,fulcro.client.primitives.default_component_prototype);
}

fulcro.client.primitives._register_component_BANG_(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","AllMutationsList","com.wsscode.pathom.viz.index-explorer/AllMutationsList",-1767454340),com.wsscode.pathom.viz.index_explorer.AllMutationsList);

var x52130_52652 = com.wsscode.pathom.viz.index_explorer.AllMutationsList.prototype;
x52130_52652.render = ((function (x52130_52652){
return (function (){
var this__43720__auto__ = this;
var this$ = this__43720__auto__;
var _STAR_reconciler_STAR__orig_val__52131 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__52132 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__52133 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__52134 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__52135 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__52136 = fulcro.client.primitives.get_reconciler(this__43720__auto__);
var _STAR_depth_STAR__temp_val__52137 = (fulcro.client.primitives.depth(this__43720__auto__) + (1));
var _STAR_shared_STAR__temp_val__52138 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__43720__auto__);
var _STAR_instrument_STAR__temp_val__52139 = fulcro.client.primitives.instrument(this__43720__auto__);
var _STAR_parent_STAR__temp_val__52140 = this__43720__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__52136;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__52137;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__52138;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__52139;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__52140;

try{var map__52141 = fulcro.client.primitives.props(this$);
var map__52141__$1 = (((((!((map__52141 == null))))?(((((map__52141.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52141.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52141):map__52141);
var props = map__52141__$1;
var mutations = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52141__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutations","com.wsscode.pathom.viz.index-explorer/mutations",329050290));
var computed = fulcro.client.primitives.get_computed.cljs$core$IFn$_invoke$arity$1(this$);
var G__52143 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(props,new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","title","com.wsscode.pathom.viz.ui.kit/title",-1326329402),"Mutations");
var G__52144 = fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (G__52143,map__52141,map__52141__$1,props,mutations,computed,_STAR_reconciler_STAR__orig_val__52131,_STAR_depth_STAR__orig_val__52132,_STAR_shared_STAR__orig_val__52133,_STAR_instrument_STAR__orig_val__52134,_STAR_parent_STAR__orig_val__52135,_STAR_reconciler_STAR__temp_val__52136,_STAR_depth_STAR__temp_val__52137,_STAR_shared_STAR__temp_val__52138,_STAR_instrument_STAR__temp_val__52139,_STAR_parent_STAR__temp_val__52140,this$,this__43720__auto__,x52130_52652){
return (function (p1__52127_SHARP_){
return com.wsscode.pathom.viz.index_explorer.mutation_link(p1__52127_SHARP_,computed);
});})(G__52143,map__52141,map__52141__$1,props,mutations,computed,_STAR_reconciler_STAR__orig_val__52131,_STAR_depth_STAR__orig_val__52132,_STAR_shared_STAR__orig_val__52133,_STAR_instrument_STAR__orig_val__52134,_STAR_parent_STAR__orig_val__52135,_STAR_reconciler_STAR__temp_val__52136,_STAR_depth_STAR__temp_val__52137,_STAR_shared_STAR__temp_val__52138,_STAR_instrument_STAR__temp_val__52139,_STAR_parent_STAR__temp_val__52140,this$,this__43720__auto__,x52130_52652))
,mutations)], 0));
return (com.wsscode.pathom.viz.ui.kit.collapsible_box.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.collapsible_box.cljs$core$IFn$_invoke$arity$2(G__52143,G__52144) : com.wsscode.pathom.viz.ui.kit.collapsible_box.call(null,G__52143,G__52144));
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__52135;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__52134;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__52133;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__52132;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__52131;
}});})(x52130_52652))
;


com.wsscode.pathom.viz.index_explorer.AllMutationsList.prototype.constructor = com.wsscode.pathom.viz.index_explorer.AllMutationsList;

com.wsscode.pathom.viz.index_explorer.AllMutationsList.prototype.constructor.displayName = "com.wsscode.pathom.viz.index-explorer/AllMutationsList";

com.wsscode.pathom.viz.index_explorer.AllMutationsList.prototype.fulcro$isComponent = true;

var x52145_52653 = com.wsscode.pathom.viz.index_explorer.AllMutationsList;


var x52146_52654 = com.wsscode.pathom.viz.index_explorer.AllMutationsList.prototype;


com.wsscode.pathom.viz.index_explorer.AllMutationsList.cljs$lang$type = true;

com.wsscode.pathom.viz.index_explorer.AllMutationsList.cljs$lang$ctorStr = "com.wsscode.pathom.viz.index-explorer/AllMutationsList";

com.wsscode.pathom.viz.index_explorer.AllMutationsList.cljs$lang$ctorPrWriter = (function (this__44805__auto__,writer__44806__auto__,opt__44807__auto__){
return cljs.core._write(writer__44806__auto__,"com.wsscode.pathom.viz.index-explorer/AllMutationsList");
});
com.wsscode.pathom.viz.index_explorer.all_mutations_list = fulcro.client.primitives.computed_factory.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.AllMutationsList);
if((typeof com !== 'undefined') && (typeof com.wsscode !== 'undefined') && (typeof com.wsscode.pathom !== 'undefined') && (typeof com.wsscode.pathom.viz !== 'undefined') && (typeof com.wsscode.pathom.viz.index_explorer !== 'undefined') && (typeof com.wsscode.pathom.viz.index_explorer.SearchEverything !== 'undefined')){
} else {
/**
 * @constructor
 * @nocollapse
 */
com.wsscode.pathom.viz.index_explorer.SearchEverything = (function com$wsscode$pathom$viz$index_explorer$SearchEverything(){
var this__44802__auto__ = this;
React.Component.apply(this__44802__auto__,arguments);

if((!((this__44802__auto__.initLocalState == null)))){
this__44802__auto__.state = this__44802__auto__.initLocalState();
} else {
this__44802__auto__.state = ({});
}

return this__44802__auto__;
});

goog.object.extend(com.wsscode.pathom.viz.index_explorer.SearchEverything.prototype,React.Component.prototype,fulcro.client.primitives.default_component_prototype);
}

fulcro.client.primitives._register_component_BANG_(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","SearchEverything","com.wsscode.pathom.viz.index-explorer/SearchEverything",384463028),com.wsscode.pathom.viz.index_explorer.SearchEverything);

var x52150_52655 = com.wsscode.pathom.viz.index_explorer.SearchEverything.prototype;
x52150_52655.render = ((function (x52150_52655){
return (function (){
var this__43720__auto__ = this;
var this$ = this__43720__auto__;
var _STAR_reconciler_STAR__orig_val__52151 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__52152 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__52153 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__52154 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__52155 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__52156 = fulcro.client.primitives.get_reconciler(this__43720__auto__);
var _STAR_depth_STAR__temp_val__52157 = (fulcro.client.primitives.depth(this__43720__auto__) + (1));
var _STAR_shared_STAR__temp_val__52158 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__43720__auto__);
var _STAR_instrument_STAR__temp_val__52159 = fulcro.client.primitives.instrument(this__43720__auto__);
var _STAR_parent_STAR__temp_val__52160 = this__43720__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__52156;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__52157;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__52158;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__52159;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__52160;

try{var map__52161 = fulcro.client.primitives.props(this$);
var map__52161__$1 = (((((!((map__52161 == null))))?(((((map__52161.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52161.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52161):map__52161);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52161__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","text","com.wsscode.pathom.viz.index-explorer/text",-1775290484));
var search_results = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52161__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-results","com.wsscode.pathom.viz.index-explorer/search-results",321731333));
var attributes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52161__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attributes","com.wsscode.pathom.viz.index-explorer/attributes",-67264281));
var resolvers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52161__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","resolvers","com.wsscode.pathom.viz.index-explorer/resolvers",-1064744669));
var mutations = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52161__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutations","com.wsscode.pathom.viz.index-explorer/mutations",329050290));
var collapse_attributes_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52161__$1,new cljs.core.Keyword("ui","collapse-attributes?","ui/collapse-attributes?",-1581210852));
var collapse_resolvers_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52161__$1,new cljs.core.Keyword("ui","collapse-resolvers?","ui/collapse-resolvers?",-237427285));
var collapse_mutations_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52161__$1,new cljs.core.Keyword("ui","collapse-mutations?","ui/collapse-mutations?",-1463008198));
var computed = fulcro.client.primitives.get_computed.cljs$core$IFn$_invoke$arity$1(this$);
var G__52163 = com.wsscode.pathom.viz.ui.kit.gc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".flex",".flex",-73425686)], 0));
var G__52164 = (function (){var G__52166 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Filter",new cljs.core.Keyword(null,"value","value",305978217),text,new cljs.core.Keyword(null,"onChange","onChange",-312891301),fulcro.client.primitives.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"search","search",1564939822)),new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","left-icon","com.wsscode.pathom.viz.ui.kit/left-icon",-1594855964),new cljs.core.Keyword(null,"$fa-search","$fa-search",1999917289),new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","on-clear","com.wsscode.pathom.viz.ui.kit/on-clear",-221492596),((function (G__52163,map__52161,map__52161__$1,text,search_results,attributes,resolvers,mutations,collapse_attributes_QMARK_,collapse_resolvers_QMARK_,collapse_mutations_QMARK_,computed,_STAR_reconciler_STAR__orig_val__52151,_STAR_depth_STAR__orig_val__52152,_STAR_shared_STAR__orig_val__52153,_STAR_instrument_STAR__orig_val__52154,_STAR_parent_STAR__orig_val__52155,_STAR_reconciler_STAR__temp_val__52156,_STAR_depth_STAR__temp_val__52157,_STAR_shared_STAR__temp_val__52158,_STAR_instrument_STAR__temp_val__52159,_STAR_parent_STAR__temp_val__52160,this$,this__43720__auto__,x52150_52655){
return (function (){
return fulcro.client.mutations.set_value_BANG_(this$,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","text","com.wsscode.pathom.viz.index-explorer/text",-1775290484),"");
});})(G__52163,map__52161,map__52161__$1,text,search_results,attributes,resolvers,mutations,collapse_attributes_QMARK_,collapse_resolvers_QMARK_,collapse_mutations_QMARK_,computed,_STAR_reconciler_STAR__orig_val__52151,_STAR_depth_STAR__orig_val__52152,_STAR_shared_STAR__orig_val__52153,_STAR_instrument_STAR__orig_val__52154,_STAR_parent_STAR__orig_val__52155,_STAR_reconciler_STAR__temp_val__52156,_STAR_depth_STAR__temp_val__52157,_STAR_shared_STAR__temp_val__52158,_STAR_instrument_STAR__temp_val__52159,_STAR_parent_STAR__temp_val__52160,this$,this__43720__auto__,x52150_52655))
], null);
return (com.wsscode.pathom.viz.ui.kit.text_field.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom.viz.ui.kit.text_field.cljs$core$IFn$_invoke$arity$1(G__52166) : com.wsscode.pathom.viz.ui.kit.text_field.call(null,G__52166));
})();
var G__52165 = (function (){var G__52167 = com.wsscode.pathom.viz.ui.kit.gc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".flex",".flex",-73425686),new cljs.core.Keyword(null,".scrollbars",".scrollbars",-1193970120)], 0));
var G__52168 = fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),(((!(com.wsscode.pathom.viz.index_explorer.active_search_QMARK_(text))))?"none":null)], null)], null),((com.wsscode.pathom.viz.index_explorer.active_search_QMARK_(text))?cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (G__52167,G__52163,G__52164,map__52161,map__52161__$1,text,search_results,attributes,resolvers,mutations,collapse_attributes_QMARK_,collapse_resolvers_QMARK_,collapse_mutations_QMARK_,computed,_STAR_reconciler_STAR__orig_val__52151,_STAR_depth_STAR__orig_val__52152,_STAR_shared_STAR__orig_val__52153,_STAR_instrument_STAR__orig_val__52154,_STAR_parent_STAR__orig_val__52155,_STAR_reconciler_STAR__temp_val__52156,_STAR_depth_STAR__temp_val__52157,_STAR_shared_STAR__temp_val__52158,_STAR_instrument_STAR__temp_val__52159,_STAR_parent_STAR__temp_val__52160,this$,this__43720__auto__,x52150_52655){
return (function (p__52170){
var map__52171 = p__52170;
var map__52171__$1 = (((((!((map__52171 == null))))?(((((map__52171.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52171.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52171):map__52171);
var search_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52171__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-value","com.wsscode.pathom.viz.index-explorer/search-value",-337129957));
var search_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52171__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-type","com.wsscode.pathom.viz.index-explorer/search-type",-1615224063));
var match_hl = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52171__$1,new cljs.core.Keyword("com.wsscode.fuzzy","match-hl","com.wsscode.fuzzy/match-hl",-611317739));
var G__52173 = search_type;
var G__52173__$1 = (((G__52173 instanceof cljs.core.Keyword))?G__52173.fqn:null);
switch (G__52173__$1) {
case "com.wsscode.pathom.viz.index-explorer/search-type-attribute":
return com.wsscode.pathom.viz.index_explorer.attribute_link(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),search_value,new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","render","com.wsscode.pathom.viz.ui.kit/render",1024565529),((function (G__52173,G__52173__$1,map__52171,map__52171__$1,search_value,search_type,match_hl,G__52167,G__52163,G__52164,map__52161,map__52161__$1,text,search_results,attributes,resolvers,mutations,collapse_attributes_QMARK_,collapse_resolvers_QMARK_,collapse_mutations_QMARK_,computed,_STAR_reconciler_STAR__orig_val__52151,_STAR_depth_STAR__orig_val__52152,_STAR_shared_STAR__orig_val__52153,_STAR_instrument_STAR__orig_val__52154,_STAR_parent_STAR__orig_val__52155,_STAR_reconciler_STAR__temp_val__52156,_STAR_depth_STAR__temp_val__52157,_STAR_shared_STAR__temp_val__52158,_STAR_instrument_STAR__temp_val__52159,_STAR_parent_STAR__temp_val__52160,this$,this__43720__auto__,x52150_52655){
return (function (){
return fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__html","__html",674048345),match_hl], null)], null)], 0));
});})(G__52173,G__52173__$1,map__52171,map__52171__$1,search_value,search_type,match_hl,G__52167,G__52163,G__52164,map__52161,map__52161__$1,text,search_results,attributes,resolvers,mutations,collapse_attributes_QMARK_,collapse_resolvers_QMARK_,collapse_mutations_QMARK_,computed,_STAR_reconciler_STAR__orig_val__52151,_STAR_depth_STAR__orig_val__52152,_STAR_shared_STAR__orig_val__52153,_STAR_instrument_STAR__orig_val__52154,_STAR_parent_STAR__orig_val__52155,_STAR_reconciler_STAR__temp_val__52156,_STAR_depth_STAR__temp_val__52157,_STAR_shared_STAR__temp_val__52158,_STAR_instrument_STAR__temp_val__52159,_STAR_parent_STAR__temp_val__52160,this$,this__43720__auto__,x52150_52655))
], null),computed);

break;
case "com.wsscode.pathom.viz.index-explorer/search-type-resolver":
return com.wsscode.pathom.viz.index_explorer.resolver_link(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),search_value,new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","render","com.wsscode.pathom.viz.ui.kit/render",1024565529),((function (G__52173,G__52173__$1,map__52171,map__52171__$1,search_value,search_type,match_hl,G__52167,G__52163,G__52164,map__52161,map__52161__$1,text,search_results,attributes,resolvers,mutations,collapse_attributes_QMARK_,collapse_resolvers_QMARK_,collapse_mutations_QMARK_,computed,_STAR_reconciler_STAR__orig_val__52151,_STAR_depth_STAR__orig_val__52152,_STAR_shared_STAR__orig_val__52153,_STAR_instrument_STAR__orig_val__52154,_STAR_parent_STAR__orig_val__52155,_STAR_reconciler_STAR__temp_val__52156,_STAR_depth_STAR__temp_val__52157,_STAR_shared_STAR__temp_val__52158,_STAR_instrument_STAR__temp_val__52159,_STAR_parent_STAR__temp_val__52160,this$,this__43720__auto__,x52150_52655){
return (function (){
return fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__html","__html",674048345),match_hl], null)], null)], 0));
});})(G__52173,G__52173__$1,map__52171,map__52171__$1,search_value,search_type,match_hl,G__52167,G__52163,G__52164,map__52161,map__52161__$1,text,search_results,attributes,resolvers,mutations,collapse_attributes_QMARK_,collapse_resolvers_QMARK_,collapse_mutations_QMARK_,computed,_STAR_reconciler_STAR__orig_val__52151,_STAR_depth_STAR__orig_val__52152,_STAR_shared_STAR__orig_val__52153,_STAR_instrument_STAR__orig_val__52154,_STAR_parent_STAR__orig_val__52155,_STAR_reconciler_STAR__temp_val__52156,_STAR_depth_STAR__temp_val__52157,_STAR_shared_STAR__temp_val__52158,_STAR_instrument_STAR__temp_val__52159,_STAR_parent_STAR__temp_val__52160,this$,this__43720__auto__,x52150_52655))
], null),computed);

break;
case "com.wsscode.pathom.viz.index-explorer/search-type-mutation":
return com.wsscode.pathom.viz.index_explorer.mutation_link(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),search_value,new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","render","com.wsscode.pathom.viz.ui.kit/render",1024565529),((function (G__52173,G__52173__$1,map__52171,map__52171__$1,search_value,search_type,match_hl,G__52167,G__52163,G__52164,map__52161,map__52161__$1,text,search_results,attributes,resolvers,mutations,collapse_attributes_QMARK_,collapse_resolvers_QMARK_,collapse_mutations_QMARK_,computed,_STAR_reconciler_STAR__orig_val__52151,_STAR_depth_STAR__orig_val__52152,_STAR_shared_STAR__orig_val__52153,_STAR_instrument_STAR__orig_val__52154,_STAR_parent_STAR__orig_val__52155,_STAR_reconciler_STAR__temp_val__52156,_STAR_depth_STAR__temp_val__52157,_STAR_shared_STAR__temp_val__52158,_STAR_instrument_STAR__temp_val__52159,_STAR_parent_STAR__temp_val__52160,this$,this__43720__auto__,x52150_52655){
return (function (){
return fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__html","__html",674048345),match_hl], null)], null)], 0));
});})(G__52173,G__52173__$1,map__52171,map__52171__$1,search_value,search_type,match_hl,G__52167,G__52163,G__52164,map__52161,map__52161__$1,text,search_results,attributes,resolvers,mutations,collapse_attributes_QMARK_,collapse_resolvers_QMARK_,collapse_mutations_QMARK_,computed,_STAR_reconciler_STAR__orig_val__52151,_STAR_depth_STAR__orig_val__52152,_STAR_shared_STAR__orig_val__52153,_STAR_instrument_STAR__orig_val__52154,_STAR_parent_STAR__orig_val__52155,_STAR_reconciler_STAR__temp_val__52156,_STAR_depth_STAR__temp_val__52157,_STAR_shared_STAR__temp_val__52158,_STAR_instrument_STAR__temp_val__52159,_STAR_parent_STAR__temp_val__52160,this$,this__43720__auto__,x52150_52655))
], null),computed);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__52173__$1)].join('')));

}
});})(G__52167,G__52163,G__52164,map__52161,map__52161__$1,text,search_results,attributes,resolvers,mutations,collapse_attributes_QMARK_,collapse_resolvers_QMARK_,collapse_mutations_QMARK_,computed,_STAR_reconciler_STAR__orig_val__52151,_STAR_depth_STAR__orig_val__52152,_STAR_shared_STAR__orig_val__52153,_STAR_instrument_STAR__orig_val__52154,_STAR_parent_STAR__orig_val__52155,_STAR_reconciler_STAR__temp_val__52156,_STAR_depth_STAR__temp_val__52157,_STAR_shared_STAR__temp_val__52158,_STAR_instrument_STAR__temp_val__52159,_STAR_parent_STAR__temp_val__52160,this$,this__43720__auto__,x52150_52655))
)),search_results):null)], 0));
var G__52169 = fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),(((cljs.core.count(text) > (2)))?"none":null)], null)], null),(function (){var G__52174 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attributes","com.wsscode.pathom.viz.index-explorer/attributes",-67264281),attributes,new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","collapsed?","com.wsscode.pathom.viz.ui.kit/collapsed?",301612965),collapse_attributes_QMARK_,new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","on-toggle","com.wsscode.pathom.viz.ui.kit/on-toggle",629501911),fulcro.client.primitives.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"toggle-attribute-collapse","toggle-attribute-collapse",1927565782))], null);
var G__52175 = computed;
return (com.wsscode.pathom.viz.index_explorer.all_attributes_list.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.all_attributes_list.cljs$core$IFn$_invoke$arity$2(G__52174,G__52175) : com.wsscode.pathom.viz.index_explorer.all_attributes_list.call(null,G__52174,G__52175));
})(),(function (){var G__52176 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","resolvers","com.wsscode.pathom.viz.index-explorer/resolvers",-1064744669),resolvers,new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","collapsed?","com.wsscode.pathom.viz.ui.kit/collapsed?",301612965),collapse_resolvers_QMARK_,new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","on-toggle","com.wsscode.pathom.viz.ui.kit/on-toggle",629501911),fulcro.client.primitives.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"toggle-resolver-collapse","toggle-resolver-collapse",-1738038560))], null);
var G__52177 = computed;
return (com.wsscode.pathom.viz.index_explorer.all_resolvers_list.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.all_resolvers_list.cljs$core$IFn$_invoke$arity$2(G__52176,G__52177) : com.wsscode.pathom.viz.index_explorer.all_resolvers_list.call(null,G__52176,G__52177));
})(),(function (){var G__52178 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutations","com.wsscode.pathom.viz.index-explorer/mutations",329050290),mutations,new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","collapsed?","com.wsscode.pathom.viz.ui.kit/collapsed?",301612965),collapse_mutations_QMARK_,new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","on-toggle","com.wsscode.pathom.viz.ui.kit/on-toggle",629501911),fulcro.client.primitives.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"toggle-mutation-collapse","toggle-mutation-collapse",-331645814))], null);
var G__52179 = computed;
return (com.wsscode.pathom.viz.index_explorer.all_mutations_list.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.all_mutations_list.cljs$core$IFn$_invoke$arity$2(G__52178,G__52179) : com.wsscode.pathom.viz.index_explorer.all_mutations_list.call(null,G__52178,G__52179));
})()], 0));
return (com.wsscode.pathom.viz.ui.kit.column.cljs$core$IFn$_invoke$arity$3 ? com.wsscode.pathom.viz.ui.kit.column.cljs$core$IFn$_invoke$arity$3(G__52167,G__52168,G__52169) : com.wsscode.pathom.viz.ui.kit.column.call(null,G__52167,G__52168,G__52169));
})();
return (com.wsscode.pathom.viz.ui.kit.column.cljs$core$IFn$_invoke$arity$3 ? com.wsscode.pathom.viz.ui.kit.column.cljs$core$IFn$_invoke$arity$3(G__52163,G__52164,G__52165) : com.wsscode.pathom.viz.ui.kit.column.call(null,G__52163,G__52164,G__52165));
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__52155;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__52154;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__52153;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__52152;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__52151;
}});})(x52150_52655))
;

x52150_52655.initLocalState = ((function (x52150_52655){
return (function (){
var this$ = this;
var ret__43695__auto__ = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"search","search",1564939822),((function (this$,x52150_52655){
return (function (p1__52147_SHARP_){
return fulcro.client.primitives.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("com.wsscode.pathom.viz.index-explorer","search","com.wsscode.pathom.viz.index-explorer/search",-1081698050,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","text","com.wsscode.pathom.viz.index-explorer/text",-1775290484),null,(1),null)),(new cljs.core.List(null,com.wsscode.pathom.viz.helpers.target_value(p1__52147_SHARP_),null,(1),null)))))),null,(1),null)))))], null));
});})(this$,x52150_52655))
,new cljs.core.Keyword(null,"toggle-attribute-collapse","toggle-attribute-collapse",1927565782),((function (this$,x52150_52655){
return (function (){
return fulcro.client.mutations.toggle_BANG_(this$,new cljs.core.Keyword("ui","collapse-attributes?","ui/collapse-attributes?",-1581210852));
});})(this$,x52150_52655))
,new cljs.core.Keyword(null,"toggle-resolver-collapse","toggle-resolver-collapse",-1738038560),((function (this$,x52150_52655){
return (function (){
return fulcro.client.mutations.toggle_BANG_(this$,new cljs.core.Keyword("ui","collapse-resolvers?","ui/collapse-resolvers?",-237427285));
});})(this$,x52150_52655))
,new cljs.core.Keyword(null,"toggle-mutation-collapse","toggle-mutation-collapse",-331645814),((function (this$,x52150_52655){
return (function (){
return fulcro.client.mutations.toggle_BANG_(this$,new cljs.core.Keyword("ui","collapse-mutations?","ui/collapse-mutations?",-1463008198));
});})(this$,x52150_52655))
,new cljs.core.Keyword(null,"all-attributes","all-attributes",-1495901763),(function (){var props = fulcro.client.primitives.props(this$);
var computed = fulcro.client.primitives.get_computed.cljs$core$IFn$_invoke$arity$1(props);
return fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.wsscode.pathom.viz.index_explorer.attribute_link(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),cljs.core.PersistentHashSet.EMPTY], null),computed),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.filter.cljs$core$IFn$_invoke$arity$1(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword_QMARK_,new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075))),cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (props,computed,this$,x52150_52655){
return (function (p__52180){
var map__52181 = p__52180;
var map__52181__$1 = (((((!((map__52181 == null))))?(((((map__52181.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52181.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52181):map__52181);
var attribute = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52181__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075));
return com.wsscode.pathom.viz.index_explorer.attribute_link(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),attribute], null),computed);
});})(props,computed,this$,x52150_52655))
)),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attributes","com.wsscode.pathom.viz.index-explorer/attributes",-67264281).cljs$core$IFn$_invoke$arity$1(props))], 0));
})()], null);
var obj52184 = ({"fulcro$state":ret__43695__auto__});
return obj52184;
});})(x52150_52655))
;


com.wsscode.pathom.viz.index_explorer.SearchEverything.prototype.constructor = com.wsscode.pathom.viz.index_explorer.SearchEverything;

com.wsscode.pathom.viz.index_explorer.SearchEverything.prototype.constructor.displayName = "com.wsscode.pathom.viz.index-explorer/SearchEverything";

com.wsscode.pathom.viz.index_explorer.SearchEverything.prototype.fulcro$isComponent = true;

var x52185_52657 = com.wsscode.pathom.viz.index_explorer.SearchEverything;
x52185_52657.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x52185_52657.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x52185_52657){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"flex","flex",-1425124628),"1",new cljs.core.Keyword(null,"white-space","white-space",-707351930),"nowrap",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"auto"], null)], null)], null);
});})(x52185_52657))
;

x52185_52657.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x52185_52657){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x52185_52657))
;

x52185_52657.fulcro$client$primitives$IPreMerge$ = cljs.core.PROTOCOL_SENTINEL;

x52185_52657.fulcro$client$primitives$IPreMerge$pre_merge_STAR_$arity$2 = ((function (x52185_52657){
return (function (this$,p__52186){
var map__52187 = p__52186;
var map__52187__$1 = (((((!((map__52187 == null))))?(((((map__52187.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52187.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52187):map__52187);
var current_normalized = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52187__$1,new cljs.core.Keyword(null,"current-normalized","current-normalized",851723724));
var data_tree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52187__$1,new cljs.core.Keyword(null,"data-tree","data-tree",1311167582));
var this$__$1 = this;
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625),cljs.core.random_uuid(),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","text","com.wsscode.pathom.viz.index-explorer/text",-1775290484),"",new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-results","com.wsscode.pathom.viz.index-explorer/search-results",321731333),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword("ui","collapse-attributes?","ui/collapse-attributes?",-1581210852),false,new cljs.core.Keyword("ui","collapse-resolvers?","ui/collapse-resolvers?",-237427285),false,new cljs.core.Keyword("ui","collapse-mutations?","ui/collapse-mutations?",-1463008198),false], null),current_normalized,data_tree], 0));
});})(x52185_52657))
;

x52185_52657.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x52185_52657.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x52185_52657){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x52185_52657))
;

x52185_52657.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x52185_52657.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x52185_52657){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","text","com.wsscode.pathom.viz.index-explorer/text",-1775290484),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-results","com.wsscode.pathom.viz.index-explorer/search-results",321731333),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.fuzzy","string","com.wsscode.fuzzy/string",320074815),new cljs.core.Keyword("com.wsscode.fuzzy","match-hl","com.wsscode.fuzzy/match-hl",-611317739),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-type","com.wsscode.pathom.viz.index-explorer/search-type",-1615224063),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-value","com.wsscode.pathom.viz.index-explorer/search-value",-337129957)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attributes","com.wsscode.pathom.viz.index-explorer/attributes",-67264281),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","resolvers","com.wsscode.pathom.viz.index-explorer/resolvers",-1064744669),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutations","com.wsscode.pathom.viz.index-explorer/mutations",329050290),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581)], null)], null),new cljs.core.Keyword("ui","collapse-attributes?","ui/collapse-attributes?",-1581210852),new cljs.core.Keyword("ui","collapse-resolvers?","ui/collapse-resolvers?",-237427285),new cljs.core.Keyword("ui","collapse-mutations?","ui/collapse-mutations?",-1463008198)], null);
});})(x52185_52657))
;


var x52189_52658 = com.wsscode.pathom.viz.index_explorer.SearchEverything.prototype;
x52189_52658.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x52189_52658.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x52189_52658){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"flex","flex",-1425124628),"1",new cljs.core.Keyword(null,"white-space","white-space",-707351930),"nowrap",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"auto"], null)], null)], null);
});})(x52189_52658))
;

x52189_52658.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x52189_52658){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x52189_52658))
;

x52189_52658.fulcro$client$primitives$IPreMerge$ = cljs.core.PROTOCOL_SENTINEL;

x52189_52658.fulcro$client$primitives$IPreMerge$pre_merge_STAR_$arity$2 = ((function (x52189_52658){
return (function (this$,p__52190){
var map__52191 = p__52190;
var map__52191__$1 = (((((!((map__52191 == null))))?(((((map__52191.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52191.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52191):map__52191);
var current_normalized = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52191__$1,new cljs.core.Keyword(null,"current-normalized","current-normalized",851723724));
var data_tree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52191__$1,new cljs.core.Keyword(null,"data-tree","data-tree",1311167582));
var this$__$1 = this;
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625),cljs.core.random_uuid(),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","text","com.wsscode.pathom.viz.index-explorer/text",-1775290484),"",new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-results","com.wsscode.pathom.viz.index-explorer/search-results",321731333),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword("ui","collapse-attributes?","ui/collapse-attributes?",-1581210852),false,new cljs.core.Keyword("ui","collapse-resolvers?","ui/collapse-resolvers?",-237427285),false,new cljs.core.Keyword("ui","collapse-mutations?","ui/collapse-mutations?",-1463008198),false], null),current_normalized,data_tree], 0));
});})(x52189_52658))
;

x52189_52658.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x52189_52658.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x52189_52658){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x52189_52658))
;

x52189_52658.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x52189_52658.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x52189_52658){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","text","com.wsscode.pathom.viz.index-explorer/text",-1775290484),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-results","com.wsscode.pathom.viz.index-explorer/search-results",321731333),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.fuzzy","string","com.wsscode.fuzzy/string",320074815),new cljs.core.Keyword("com.wsscode.fuzzy","match-hl","com.wsscode.fuzzy/match-hl",-611317739),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-type","com.wsscode.pathom.viz.index-explorer/search-type",-1615224063),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-value","com.wsscode.pathom.viz.index-explorer/search-value",-337129957)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attributes","com.wsscode.pathom.viz.index-explorer/attributes",-67264281),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","resolvers","com.wsscode.pathom.viz.index-explorer/resolvers",-1064744669),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutations","com.wsscode.pathom.viz.index-explorer/mutations",329050290),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581)], null)], null),new cljs.core.Keyword("ui","collapse-attributes?","ui/collapse-attributes?",-1581210852),new cljs.core.Keyword("ui","collapse-resolvers?","ui/collapse-resolvers?",-237427285),new cljs.core.Keyword("ui","collapse-mutations?","ui/collapse-mutations?",-1463008198)], null);
});})(x52189_52658))
;


com.wsscode.pathom.viz.index_explorer.SearchEverything.cljs$lang$type = true;

com.wsscode.pathom.viz.index_explorer.SearchEverything.cljs$lang$ctorStr = "com.wsscode.pathom.viz.index-explorer/SearchEverything";

com.wsscode.pathom.viz.index_explorer.SearchEverything.cljs$lang$ctorPrWriter = (function (this__44805__auto__,writer__44806__auto__,opt__44807__auto__){
return cljs.core._write(writer__44806__auto__,"com.wsscode.pathom.viz.index-explorer/SearchEverything");
});
com.wsscode.pathom.viz.index_explorer.search_everything = fulcro.client.primitives.computed_factory.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.SearchEverything);
if((typeof com !== 'undefined') && (typeof com.wsscode !== 'undefined') && (typeof com.wsscode.pathom !== 'undefined') && (typeof com.wsscode.pathom.viz !== 'undefined') && (typeof com.wsscode.pathom.viz.index_explorer !== 'undefined') && (typeof com.wsscode.pathom.viz.index_explorer.AttributeMismatchPanel !== 'undefined')){
} else {
/**
 * @constructor
 * @nocollapse
 */
com.wsscode.pathom.viz.index_explorer.AttributeMismatchPanel = (function com$wsscode$pathom$viz$index_explorer$AttributeMismatchPanel(){
var this__44802__auto__ = this;
React.Component.apply(this__44802__auto__,arguments);

if((!((this__44802__auto__.initLocalState == null)))){
this__44802__auto__.state = this__44802__auto__.initLocalState();
} else {
this__44802__auto__.state = ({});
}

return this__44802__auto__;
});

goog.object.extend(com.wsscode.pathom.viz.index_explorer.AttributeMismatchPanel.prototype,React.Component.prototype,fulcro.client.primitives.default_component_prototype);
}

fulcro.client.primitives._register_component_BANG_(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","AttributeMismatchPanel","com.wsscode.pathom.viz.index-explorer/AttributeMismatchPanel",653731723),com.wsscode.pathom.viz.index_explorer.AttributeMismatchPanel);

var x52195_52659 = com.wsscode.pathom.viz.index_explorer.AttributeMismatchPanel.prototype;
x52195_52659.render = ((function (x52195_52659){
return (function (){
var this__43720__auto__ = this;
var this$ = this__43720__auto__;
var _STAR_reconciler_STAR__orig_val__52196 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__52197 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__52198 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__52199 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__52200 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__52201 = fulcro.client.primitives.get_reconciler(this__43720__auto__);
var _STAR_depth_STAR__temp_val__52202 = (fulcro.client.primitives.depth(this__43720__auto__) + (1));
var _STAR_shared_STAR__temp_val__52203 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__43720__auto__);
var _STAR_instrument_STAR__temp_val__52204 = fulcro.client.primitives.instrument(this__43720__auto__);
var _STAR_parent_STAR__temp_val__52205 = this__43720__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__52201;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__52202;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__52203;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__52204;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__52205;

try{var map__52206 = fulcro.client.primitives.props(this$);
var map__52206__$1 = (((((!((map__52206 == null))))?(((((map__52206.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52206.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52206):map__52206);
var attr_type_mismatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52206__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-type-mismatch","com.wsscode.pathom.viz.index-explorer/attr-type-mismatch",-1230484441));
var attr_mismatch_expanded = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52206__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-mismatch-expanded","com.wsscode.pathom.viz.index-explorer/attr-mismatch-expanded",1688513157));
var computed = fulcro.client.primitives.get_computed.cljs$core$IFn$_invoke$arity$1(this$);
var G__52208 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","panel-title","com.wsscode.pathom.viz.ui.kit/panel-title",1529445284),"Attributes with type mismatch"], null);
var G__52209 = (function (){var iter__4523__auto__ = ((function (G__52208,map__52206,map__52206__$1,attr_type_mismatch,attr_mismatch_expanded,computed,_STAR_reconciler_STAR__orig_val__52196,_STAR_depth_STAR__orig_val__52197,_STAR_shared_STAR__orig_val__52198,_STAR_instrument_STAR__orig_val__52199,_STAR_parent_STAR__orig_val__52200,_STAR_reconciler_STAR__temp_val__52201,_STAR_depth_STAR__temp_val__52202,_STAR_shared_STAR__temp_val__52203,_STAR_instrument_STAR__temp_val__52204,_STAR_parent_STAR__temp_val__52205,this$,this__43720__auto__,x52195_52659){
return (function com$wsscode$pathom$viz$index_explorer$iter__52210(s__52211){
return (new cljs.core.LazySeq(null,((function (G__52208,map__52206,map__52206__$1,attr_type_mismatch,attr_mismatch_expanded,computed,_STAR_reconciler_STAR__orig_val__52196,_STAR_depth_STAR__orig_val__52197,_STAR_shared_STAR__orig_val__52198,_STAR_instrument_STAR__orig_val__52199,_STAR_parent_STAR__orig_val__52200,_STAR_reconciler_STAR__temp_val__52201,_STAR_depth_STAR__temp_val__52202,_STAR_shared_STAR__temp_val__52203,_STAR_instrument_STAR__temp_val__52204,_STAR_parent_STAR__temp_val__52205,this$,this__43720__auto__,x52195_52659){
return (function (){
var s__52211__$1 = s__52211;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__52211__$1);
if(temp__5720__auto__){
var s__52211__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__52211__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__52211__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__52213 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__52212 = (0);
while(true){
if((i__52212 < size__4522__auto__)){
var map__52214 = cljs.core._nth(c__4521__auto__,i__52212);
var map__52214__$1 = (((((!((map__52214 == null))))?(((((map__52214.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52214.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52214):map__52214);
var attribute = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52214__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075));
var attr_leaf_in = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52214__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attr-leaf-in","com.wsscode.pathom.connect/attr-leaf-in",-1959401711));
var attr_branch_in = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52214__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attr-branch-in","com.wsscode.pathom.connect/attr-branch-in",1982854732));
cljs.core.chunk_append(b__52213,(function (){var G__52216 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"react-key","react-key",1337881348),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attribute], 0)),new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","collapsed?","com.wsscode.pathom.viz.ui.kit/collapsed?",301612965),(!(cljs.core.contains_QMARK_(attr_mismatch_expanded,attribute))),new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","on-toggle","com.wsscode.pathom.viz.ui.kit/on-toggle",629501911),((function (i__52212,map__52214,map__52214__$1,attribute,attr_leaf_in,attr_branch_in,c__4521__auto__,size__4522__auto__,b__52213,s__52211__$2,temp__5720__auto__,G__52208,map__52206,map__52206__$1,attr_type_mismatch,attr_mismatch_expanded,computed,_STAR_reconciler_STAR__orig_val__52196,_STAR_depth_STAR__orig_val__52197,_STAR_shared_STAR__orig_val__52198,_STAR_instrument_STAR__orig_val__52199,_STAR_parent_STAR__orig_val__52200,_STAR_reconciler_STAR__temp_val__52201,_STAR_depth_STAR__temp_val__52202,_STAR_shared_STAR__temp_val__52203,_STAR_instrument_STAR__temp_val__52204,_STAR_parent_STAR__temp_val__52205,this$,this__43720__auto__,x52195_52659){
return (function (){
return com.wsscode.pathom.viz.helpers.update_value_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-mismatch-expanded","com.wsscode.pathom.viz.index-explorer/attr-mismatch-expanded",1688513157),com.wsscode.pathom.viz.helpers.toggle_set_item,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attribute], 0));
});})(i__52212,map__52214,map__52214__$1,attribute,attr_leaf_in,attr_branch_in,c__4521__auto__,size__4522__auto__,b__52213,s__52211__$2,temp__5720__auto__,G__52208,map__52206,map__52206__$1,attr_type_mismatch,attr_mismatch_expanded,computed,_STAR_reconciler_STAR__orig_val__52196,_STAR_depth_STAR__orig_val__52197,_STAR_shared_STAR__orig_val__52198,_STAR_instrument_STAR__orig_val__52199,_STAR_parent_STAR__orig_val__52200,_STAR_reconciler_STAR__temp_val__52201,_STAR_depth_STAR__temp_val__52202,_STAR_shared_STAR__temp_val__52203,_STAR_instrument_STAR__temp_val__52204,_STAR_parent_STAR__temp_val__52205,this$,this__43720__auto__,x52195_52659))
,new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","title","com.wsscode.pathom.viz.ui.kit/title",-1326329402),com.wsscode.pathom.viz.index_explorer.attribute_link(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),attribute], null),computed)], null);
var G__52217 = fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".resolver-container",".resolver-container",925822524),(function (){var iter__4523__auto__ = ((function (i__52212,G__52216,map__52214,map__52214__$1,attribute,attr_leaf_in,attr_branch_in,c__4521__auto__,size__4522__auto__,b__52213,s__52211__$2,temp__5720__auto__,G__52208,map__52206,map__52206__$1,attr_type_mismatch,attr_mismatch_expanded,computed,_STAR_reconciler_STAR__orig_val__52196,_STAR_depth_STAR__orig_val__52197,_STAR_shared_STAR__orig_val__52198,_STAR_instrument_STAR__orig_val__52199,_STAR_parent_STAR__orig_val__52200,_STAR_reconciler_STAR__temp_val__52201,_STAR_depth_STAR__temp_val__52202,_STAR_shared_STAR__temp_val__52203,_STAR_instrument_STAR__temp_val__52204,_STAR_parent_STAR__temp_val__52205,this$,this__43720__auto__,x52195_52659){
return (function com$wsscode$pathom$viz$index_explorer$iter__52210_$_iter__52218(s__52219){
return (new cljs.core.LazySeq(null,((function (i__52212,G__52216,map__52214,map__52214__$1,attribute,attr_leaf_in,attr_branch_in,c__4521__auto__,size__4522__auto__,b__52213,s__52211__$2,temp__5720__auto__,G__52208,map__52206,map__52206__$1,attr_type_mismatch,attr_mismatch_expanded,computed,_STAR_reconciler_STAR__orig_val__52196,_STAR_depth_STAR__orig_val__52197,_STAR_shared_STAR__orig_val__52198,_STAR_instrument_STAR__orig_val__52199,_STAR_parent_STAR__orig_val__52200,_STAR_reconciler_STAR__temp_val__52201,_STAR_depth_STAR__temp_val__52202,_STAR_shared_STAR__temp_val__52203,_STAR_instrument_STAR__temp_val__52204,_STAR_parent_STAR__temp_val__52205,this$,this__43720__auto__,x52195_52659){
return (function (){
var s__52219__$1 = s__52219;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__52219__$1);
if(temp__5720__auto____$1){
var s__52219__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__52219__$2)){
var c__4521__auto____$1 = cljs.core.chunk_first(s__52219__$2);
var size__4522__auto____$1 = cljs.core.count(c__4521__auto____$1);
var b__52221 = cljs.core.chunk_buffer(size__4522__auto____$1);
if((function (){var i__52220 = (0);
while(true){
if((i__52220 < size__4522__auto____$1)){
var resolver = cljs.core._nth(c__4521__auto____$1,i__52220);
cljs.core.chunk_append(b__52221,com.wsscode.pathom.viz.index_explorer.resolver_link(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),resolver], null),computed));

var G__52660 = (i__52220 + (1));
i__52220 = G__52660;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__52221),com$wsscode$pathom$viz$index_explorer$iter__52210_$_iter__52218(cljs.core.chunk_rest(s__52219__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__52221),null);
}
} else {
var resolver = cljs.core.first(s__52219__$2);
return cljs.core.cons(com.wsscode.pathom.viz.index_explorer.resolver_link(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),resolver], null),computed),com$wsscode$pathom$viz$index_explorer$iter__52210_$_iter__52218(cljs.core.rest(s__52219__$2)));
}
} else {
return null;
}
break;
}
});})(i__52212,G__52216,map__52214,map__52214__$1,attribute,attr_leaf_in,attr_branch_in,c__4521__auto__,size__4522__auto__,b__52213,s__52211__$2,temp__5720__auto__,G__52208,map__52206,map__52206__$1,attr_type_mismatch,attr_mismatch_expanded,computed,_STAR_reconciler_STAR__orig_val__52196,_STAR_depth_STAR__orig_val__52197,_STAR_shared_STAR__orig_val__52198,_STAR_instrument_STAR__orig_val__52199,_STAR_parent_STAR__orig_val__52200,_STAR_reconciler_STAR__temp_val__52201,_STAR_depth_STAR__temp_val__52202,_STAR_shared_STAR__temp_val__52203,_STAR_instrument_STAR__temp_val__52204,_STAR_parent_STAR__temp_val__52205,this$,this__43720__auto__,x52195_52659))
,null,null));
});})(i__52212,G__52216,map__52214,map__52214__$1,attribute,attr_leaf_in,attr_branch_in,c__4521__auto__,size__4522__auto__,b__52213,s__52211__$2,temp__5720__auto__,G__52208,map__52206,map__52206__$1,attr_type_mismatch,attr_mismatch_expanded,computed,_STAR_reconciler_STAR__orig_val__52196,_STAR_depth_STAR__orig_val__52197,_STAR_shared_STAR__orig_val__52198,_STAR_instrument_STAR__orig_val__52199,_STAR_parent_STAR__orig_val__52200,_STAR_reconciler_STAR__temp_val__52201,_STAR_depth_STAR__temp_val__52202,_STAR_shared_STAR__temp_val__52203,_STAR_instrument_STAR__temp_val__52204,_STAR_parent_STAR__temp_val__52205,this$,this__43720__auto__,x52195_52659))
;
return iter__4523__auto__(attr_branch_in);
})(),fulcro.client.localized_dom.hr(),(function (){var iter__4523__auto__ = ((function (i__52212,G__52216,map__52214,map__52214__$1,attribute,attr_leaf_in,attr_branch_in,c__4521__auto__,size__4522__auto__,b__52213,s__52211__$2,temp__5720__auto__,G__52208,map__52206,map__52206__$1,attr_type_mismatch,attr_mismatch_expanded,computed,_STAR_reconciler_STAR__orig_val__52196,_STAR_depth_STAR__orig_val__52197,_STAR_shared_STAR__orig_val__52198,_STAR_instrument_STAR__orig_val__52199,_STAR_parent_STAR__orig_val__52200,_STAR_reconciler_STAR__temp_val__52201,_STAR_depth_STAR__temp_val__52202,_STAR_shared_STAR__temp_val__52203,_STAR_instrument_STAR__temp_val__52204,_STAR_parent_STAR__temp_val__52205,this$,this__43720__auto__,x52195_52659){
return (function com$wsscode$pathom$viz$index_explorer$iter__52210_$_iter__52222(s__52223){
return (new cljs.core.LazySeq(null,((function (i__52212,G__52216,map__52214,map__52214__$1,attribute,attr_leaf_in,attr_branch_in,c__4521__auto__,size__4522__auto__,b__52213,s__52211__$2,temp__5720__auto__,G__52208,map__52206,map__52206__$1,attr_type_mismatch,attr_mismatch_expanded,computed,_STAR_reconciler_STAR__orig_val__52196,_STAR_depth_STAR__orig_val__52197,_STAR_shared_STAR__orig_val__52198,_STAR_instrument_STAR__orig_val__52199,_STAR_parent_STAR__orig_val__52200,_STAR_reconciler_STAR__temp_val__52201,_STAR_depth_STAR__temp_val__52202,_STAR_shared_STAR__temp_val__52203,_STAR_instrument_STAR__temp_val__52204,_STAR_parent_STAR__temp_val__52205,this$,this__43720__auto__,x52195_52659){
return (function (){
var s__52223__$1 = s__52223;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__52223__$1);
if(temp__5720__auto____$1){
var s__52223__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__52223__$2)){
var c__4521__auto____$1 = cljs.core.chunk_first(s__52223__$2);
var size__4522__auto____$1 = cljs.core.count(c__4521__auto____$1);
var b__52225 = cljs.core.chunk_buffer(size__4522__auto____$1);
if((function (){var i__52224 = (0);
while(true){
if((i__52224 < size__4522__auto____$1)){
var resolver = cljs.core._nth(c__4521__auto____$1,i__52224);
cljs.core.chunk_append(b__52225,com.wsscode.pathom.viz.index_explorer.resolver_link(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),resolver], null),computed));

var G__52661 = (i__52224 + (1));
i__52224 = G__52661;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__52225),com$wsscode$pathom$viz$index_explorer$iter__52210_$_iter__52222(cljs.core.chunk_rest(s__52223__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__52225),null);
}
} else {
var resolver = cljs.core.first(s__52223__$2);
return cljs.core.cons(com.wsscode.pathom.viz.index_explorer.resolver_link(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),resolver], null),computed),com$wsscode$pathom$viz$index_explorer$iter__52210_$_iter__52222(cljs.core.rest(s__52223__$2)));
}
} else {
return null;
}
break;
}
});})(i__52212,G__52216,map__52214,map__52214__$1,attribute,attr_leaf_in,attr_branch_in,c__4521__auto__,size__4522__auto__,b__52213,s__52211__$2,temp__5720__auto__,G__52208,map__52206,map__52206__$1,attr_type_mismatch,attr_mismatch_expanded,computed,_STAR_reconciler_STAR__orig_val__52196,_STAR_depth_STAR__orig_val__52197,_STAR_shared_STAR__orig_val__52198,_STAR_instrument_STAR__orig_val__52199,_STAR_parent_STAR__orig_val__52200,_STAR_reconciler_STAR__temp_val__52201,_STAR_depth_STAR__temp_val__52202,_STAR_shared_STAR__temp_val__52203,_STAR_instrument_STAR__temp_val__52204,_STAR_parent_STAR__temp_val__52205,this$,this__43720__auto__,x52195_52659))
,null,null));
});})(i__52212,G__52216,map__52214,map__52214__$1,attribute,attr_leaf_in,attr_branch_in,c__4521__auto__,size__4522__auto__,b__52213,s__52211__$2,temp__5720__auto__,G__52208,map__52206,map__52206__$1,attr_type_mismatch,attr_mismatch_expanded,computed,_STAR_reconciler_STAR__orig_val__52196,_STAR_depth_STAR__orig_val__52197,_STAR_shared_STAR__orig_val__52198,_STAR_instrument_STAR__orig_val__52199,_STAR_parent_STAR__orig_val__52200,_STAR_reconciler_STAR__temp_val__52201,_STAR_depth_STAR__temp_val__52202,_STAR_shared_STAR__temp_val__52203,_STAR_instrument_STAR__temp_val__52204,_STAR_parent_STAR__temp_val__52205,this$,this__43720__auto__,x52195_52659))
;
return iter__4523__auto__(attr_leaf_in);
})()], 0));
return (com.wsscode.pathom.viz.ui.kit.raw_collapsible.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.raw_collapsible.cljs$core$IFn$_invoke$arity$2(G__52216,G__52217) : com.wsscode.pathom.viz.ui.kit.raw_collapsible.call(null,G__52216,G__52217));
})());

var G__52662 = (i__52212 + (1));
i__52212 = G__52662;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__52213),com$wsscode$pathom$viz$index_explorer$iter__52210(cljs.core.chunk_rest(s__52211__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__52213),null);
}
} else {
var map__52226 = cljs.core.first(s__52211__$2);
var map__52226__$1 = (((((!((map__52226 == null))))?(((((map__52226.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52226.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52226):map__52226);
var attribute = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52226__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075));
var attr_leaf_in = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52226__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attr-leaf-in","com.wsscode.pathom.connect/attr-leaf-in",-1959401711));
var attr_branch_in = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52226__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attr-branch-in","com.wsscode.pathom.connect/attr-branch-in",1982854732));
return cljs.core.cons((function (){var G__52228 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"react-key","react-key",1337881348),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attribute], 0)),new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","collapsed?","com.wsscode.pathom.viz.ui.kit/collapsed?",301612965),(!(cljs.core.contains_QMARK_(attr_mismatch_expanded,attribute))),new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","on-toggle","com.wsscode.pathom.viz.ui.kit/on-toggle",629501911),((function (map__52226,map__52226__$1,attribute,attr_leaf_in,attr_branch_in,s__52211__$2,temp__5720__auto__,G__52208,map__52206,map__52206__$1,attr_type_mismatch,attr_mismatch_expanded,computed,_STAR_reconciler_STAR__orig_val__52196,_STAR_depth_STAR__orig_val__52197,_STAR_shared_STAR__orig_val__52198,_STAR_instrument_STAR__orig_val__52199,_STAR_parent_STAR__orig_val__52200,_STAR_reconciler_STAR__temp_val__52201,_STAR_depth_STAR__temp_val__52202,_STAR_shared_STAR__temp_val__52203,_STAR_instrument_STAR__temp_val__52204,_STAR_parent_STAR__temp_val__52205,this$,this__43720__auto__,x52195_52659){
return (function (){
return com.wsscode.pathom.viz.helpers.update_value_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-mismatch-expanded","com.wsscode.pathom.viz.index-explorer/attr-mismatch-expanded",1688513157),com.wsscode.pathom.viz.helpers.toggle_set_item,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attribute], 0));
});})(map__52226,map__52226__$1,attribute,attr_leaf_in,attr_branch_in,s__52211__$2,temp__5720__auto__,G__52208,map__52206,map__52206__$1,attr_type_mismatch,attr_mismatch_expanded,computed,_STAR_reconciler_STAR__orig_val__52196,_STAR_depth_STAR__orig_val__52197,_STAR_shared_STAR__orig_val__52198,_STAR_instrument_STAR__orig_val__52199,_STAR_parent_STAR__orig_val__52200,_STAR_reconciler_STAR__temp_val__52201,_STAR_depth_STAR__temp_val__52202,_STAR_shared_STAR__temp_val__52203,_STAR_instrument_STAR__temp_val__52204,_STAR_parent_STAR__temp_val__52205,this$,this__43720__auto__,x52195_52659))
,new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","title","com.wsscode.pathom.viz.ui.kit/title",-1326329402),com.wsscode.pathom.viz.index_explorer.attribute_link(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),attribute], null),computed)], null);
var G__52229 = fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".resolver-container",".resolver-container",925822524),(function (){var iter__4523__auto__ = ((function (G__52228,map__52226,map__52226__$1,attribute,attr_leaf_in,attr_branch_in,s__52211__$2,temp__5720__auto__,G__52208,map__52206,map__52206__$1,attr_type_mismatch,attr_mismatch_expanded,computed,_STAR_reconciler_STAR__orig_val__52196,_STAR_depth_STAR__orig_val__52197,_STAR_shared_STAR__orig_val__52198,_STAR_instrument_STAR__orig_val__52199,_STAR_parent_STAR__orig_val__52200,_STAR_reconciler_STAR__temp_val__52201,_STAR_depth_STAR__temp_val__52202,_STAR_shared_STAR__temp_val__52203,_STAR_instrument_STAR__temp_val__52204,_STAR_parent_STAR__temp_val__52205,this$,this__43720__auto__,x52195_52659){
return (function com$wsscode$pathom$viz$index_explorer$iter__52210_$_iter__52230(s__52231){
return (new cljs.core.LazySeq(null,((function (G__52228,map__52226,map__52226__$1,attribute,attr_leaf_in,attr_branch_in,s__52211__$2,temp__5720__auto__,G__52208,map__52206,map__52206__$1,attr_type_mismatch,attr_mismatch_expanded,computed,_STAR_reconciler_STAR__orig_val__52196,_STAR_depth_STAR__orig_val__52197,_STAR_shared_STAR__orig_val__52198,_STAR_instrument_STAR__orig_val__52199,_STAR_parent_STAR__orig_val__52200,_STAR_reconciler_STAR__temp_val__52201,_STAR_depth_STAR__temp_val__52202,_STAR_shared_STAR__temp_val__52203,_STAR_instrument_STAR__temp_val__52204,_STAR_parent_STAR__temp_val__52205,this$,this__43720__auto__,x52195_52659){
return (function (){
var s__52231__$1 = s__52231;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__52231__$1);
if(temp__5720__auto____$1){
var s__52231__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__52231__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__52231__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__52233 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__52232 = (0);
while(true){
if((i__52232 < size__4522__auto__)){
var resolver = cljs.core._nth(c__4521__auto__,i__52232);
cljs.core.chunk_append(b__52233,com.wsscode.pathom.viz.index_explorer.resolver_link(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),resolver], null),computed));

var G__52663 = (i__52232 + (1));
i__52232 = G__52663;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__52233),com$wsscode$pathom$viz$index_explorer$iter__52210_$_iter__52230(cljs.core.chunk_rest(s__52231__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__52233),null);
}
} else {
var resolver = cljs.core.first(s__52231__$2);
return cljs.core.cons(com.wsscode.pathom.viz.index_explorer.resolver_link(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),resolver], null),computed),com$wsscode$pathom$viz$index_explorer$iter__52210_$_iter__52230(cljs.core.rest(s__52231__$2)));
}
} else {
return null;
}
break;
}
});})(G__52228,map__52226,map__52226__$1,attribute,attr_leaf_in,attr_branch_in,s__52211__$2,temp__5720__auto__,G__52208,map__52206,map__52206__$1,attr_type_mismatch,attr_mismatch_expanded,computed,_STAR_reconciler_STAR__orig_val__52196,_STAR_depth_STAR__orig_val__52197,_STAR_shared_STAR__orig_val__52198,_STAR_instrument_STAR__orig_val__52199,_STAR_parent_STAR__orig_val__52200,_STAR_reconciler_STAR__temp_val__52201,_STAR_depth_STAR__temp_val__52202,_STAR_shared_STAR__temp_val__52203,_STAR_instrument_STAR__temp_val__52204,_STAR_parent_STAR__temp_val__52205,this$,this__43720__auto__,x52195_52659))
,null,null));
});})(G__52228,map__52226,map__52226__$1,attribute,attr_leaf_in,attr_branch_in,s__52211__$2,temp__5720__auto__,G__52208,map__52206,map__52206__$1,attr_type_mismatch,attr_mismatch_expanded,computed,_STAR_reconciler_STAR__orig_val__52196,_STAR_depth_STAR__orig_val__52197,_STAR_shared_STAR__orig_val__52198,_STAR_instrument_STAR__orig_val__52199,_STAR_parent_STAR__orig_val__52200,_STAR_reconciler_STAR__temp_val__52201,_STAR_depth_STAR__temp_val__52202,_STAR_shared_STAR__temp_val__52203,_STAR_instrument_STAR__temp_val__52204,_STAR_parent_STAR__temp_val__52205,this$,this__43720__auto__,x52195_52659))
;
return iter__4523__auto__(attr_branch_in);
})(),fulcro.client.localized_dom.hr(),(function (){var iter__4523__auto__ = ((function (G__52228,map__52226,map__52226__$1,attribute,attr_leaf_in,attr_branch_in,s__52211__$2,temp__5720__auto__,G__52208,map__52206,map__52206__$1,attr_type_mismatch,attr_mismatch_expanded,computed,_STAR_reconciler_STAR__orig_val__52196,_STAR_depth_STAR__orig_val__52197,_STAR_shared_STAR__orig_val__52198,_STAR_instrument_STAR__orig_val__52199,_STAR_parent_STAR__orig_val__52200,_STAR_reconciler_STAR__temp_val__52201,_STAR_depth_STAR__temp_val__52202,_STAR_shared_STAR__temp_val__52203,_STAR_instrument_STAR__temp_val__52204,_STAR_parent_STAR__temp_val__52205,this$,this__43720__auto__,x52195_52659){
return (function com$wsscode$pathom$viz$index_explorer$iter__52210_$_iter__52234(s__52235){
return (new cljs.core.LazySeq(null,((function (G__52228,map__52226,map__52226__$1,attribute,attr_leaf_in,attr_branch_in,s__52211__$2,temp__5720__auto__,G__52208,map__52206,map__52206__$1,attr_type_mismatch,attr_mismatch_expanded,computed,_STAR_reconciler_STAR__orig_val__52196,_STAR_depth_STAR__orig_val__52197,_STAR_shared_STAR__orig_val__52198,_STAR_instrument_STAR__orig_val__52199,_STAR_parent_STAR__orig_val__52200,_STAR_reconciler_STAR__temp_val__52201,_STAR_depth_STAR__temp_val__52202,_STAR_shared_STAR__temp_val__52203,_STAR_instrument_STAR__temp_val__52204,_STAR_parent_STAR__temp_val__52205,this$,this__43720__auto__,x52195_52659){
return (function (){
var s__52235__$1 = s__52235;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__52235__$1);
if(temp__5720__auto____$1){
var s__52235__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__52235__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__52235__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__52237 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__52236 = (0);
while(true){
if((i__52236 < size__4522__auto__)){
var resolver = cljs.core._nth(c__4521__auto__,i__52236);
cljs.core.chunk_append(b__52237,com.wsscode.pathom.viz.index_explorer.resolver_link(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),resolver], null),computed));

var G__52664 = (i__52236 + (1));
i__52236 = G__52664;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__52237),com$wsscode$pathom$viz$index_explorer$iter__52210_$_iter__52234(cljs.core.chunk_rest(s__52235__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__52237),null);
}
} else {
var resolver = cljs.core.first(s__52235__$2);
return cljs.core.cons(com.wsscode.pathom.viz.index_explorer.resolver_link(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),resolver], null),computed),com$wsscode$pathom$viz$index_explorer$iter__52210_$_iter__52234(cljs.core.rest(s__52235__$2)));
}
} else {
return null;
}
break;
}
});})(G__52228,map__52226,map__52226__$1,attribute,attr_leaf_in,attr_branch_in,s__52211__$2,temp__5720__auto__,G__52208,map__52206,map__52206__$1,attr_type_mismatch,attr_mismatch_expanded,computed,_STAR_reconciler_STAR__orig_val__52196,_STAR_depth_STAR__orig_val__52197,_STAR_shared_STAR__orig_val__52198,_STAR_instrument_STAR__orig_val__52199,_STAR_parent_STAR__orig_val__52200,_STAR_reconciler_STAR__temp_val__52201,_STAR_depth_STAR__temp_val__52202,_STAR_shared_STAR__temp_val__52203,_STAR_instrument_STAR__temp_val__52204,_STAR_parent_STAR__temp_val__52205,this$,this__43720__auto__,x52195_52659))
,null,null));
});})(G__52228,map__52226,map__52226__$1,attribute,attr_leaf_in,attr_branch_in,s__52211__$2,temp__5720__auto__,G__52208,map__52206,map__52206__$1,attr_type_mismatch,attr_mismatch_expanded,computed,_STAR_reconciler_STAR__orig_val__52196,_STAR_depth_STAR__orig_val__52197,_STAR_shared_STAR__orig_val__52198,_STAR_instrument_STAR__orig_val__52199,_STAR_parent_STAR__orig_val__52200,_STAR_reconciler_STAR__temp_val__52201,_STAR_depth_STAR__temp_val__52202,_STAR_shared_STAR__temp_val__52203,_STAR_instrument_STAR__temp_val__52204,_STAR_parent_STAR__temp_val__52205,this$,this__43720__auto__,x52195_52659))
;
return iter__4523__auto__(attr_leaf_in);
})()], 0));
return (com.wsscode.pathom.viz.ui.kit.raw_collapsible.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.raw_collapsible.cljs$core$IFn$_invoke$arity$2(G__52228,G__52229) : com.wsscode.pathom.viz.ui.kit.raw_collapsible.call(null,G__52228,G__52229));
})(),com$wsscode$pathom$viz$index_explorer$iter__52210(cljs.core.rest(s__52211__$2)));
}
} else {
return null;
}
break;
}
});})(G__52208,map__52206,map__52206__$1,attr_type_mismatch,attr_mismatch_expanded,computed,_STAR_reconciler_STAR__orig_val__52196,_STAR_depth_STAR__orig_val__52197,_STAR_shared_STAR__orig_val__52198,_STAR_instrument_STAR__orig_val__52199,_STAR_parent_STAR__orig_val__52200,_STAR_reconciler_STAR__temp_val__52201,_STAR_depth_STAR__temp_val__52202,_STAR_shared_STAR__temp_val__52203,_STAR_instrument_STAR__temp_val__52204,_STAR_parent_STAR__temp_val__52205,this$,this__43720__auto__,x52195_52659))
,null,null));
});})(G__52208,map__52206,map__52206__$1,attr_type_mismatch,attr_mismatch_expanded,computed,_STAR_reconciler_STAR__orig_val__52196,_STAR_depth_STAR__orig_val__52197,_STAR_shared_STAR__orig_val__52198,_STAR_instrument_STAR__orig_val__52199,_STAR_parent_STAR__orig_val__52200,_STAR_reconciler_STAR__temp_val__52201,_STAR_depth_STAR__temp_val__52202,_STAR_shared_STAR__temp_val__52203,_STAR_instrument_STAR__temp_val__52204,_STAR_parent_STAR__temp_val__52205,this$,this__43720__auto__,x52195_52659))
;
return iter__4523__auto__(attr_type_mismatch);
})();
return (com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2(G__52208,G__52209) : com.wsscode.pathom.viz.ui.kit.panel.call(null,G__52208,G__52209));
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__52200;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__52199;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__52198;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__52197;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__52196;
}});})(x52195_52659))
;


com.wsscode.pathom.viz.index_explorer.AttributeMismatchPanel.prototype.constructor = com.wsscode.pathom.viz.index_explorer.AttributeMismatchPanel;

com.wsscode.pathom.viz.index_explorer.AttributeMismatchPanel.prototype.constructor.displayName = "com.wsscode.pathom.viz.index-explorer/AttributeMismatchPanel";

com.wsscode.pathom.viz.index_explorer.AttributeMismatchPanel.prototype.fulcro$isComponent = true;

var x52238_52665 = com.wsscode.pathom.viz.index_explorer.AttributeMismatchPanel;
x52238_52665.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x52238_52665.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x52238_52665){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".resolver-container",".resolver-container",925822524),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"26px"], null)], null)], null);
});})(x52238_52665))
;

x52238_52665.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x52238_52665){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x52238_52665))
;

x52238_52665.fulcro$client$primitives$IPreMerge$ = cljs.core.PROTOCOL_SENTINEL;

x52238_52665.fulcro$client$primitives$IPreMerge$pre_merge_STAR_$arity$2 = ((function (x52238_52665){
return (function (this$,p__52239){
var map__52240 = p__52239;
var map__52240__$1 = (((((!((map__52240 == null))))?(((((map__52240.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52240.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52240):map__52240);
var current_normalized = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52240__$1,new cljs.core.Keyword(null,"current-normalized","current-normalized",851723724));
var data_tree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52240__$1,new cljs.core.Keyword(null,"data-tree","data-tree",1311167582));
var this$__$1 = this;
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-mismatch-expanded","com.wsscode.pathom.viz.index-explorer/attr-mismatch-expanded",1688513157),cljs.core.PersistentHashSet.EMPTY], null),current_normalized,data_tree], 0));
});})(x52238_52665))
;

x52238_52665.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x52238_52665.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x52238_52665){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x52238_52665))
;

x52238_52665.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x52238_52665.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x52238_52665){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-mismatch-expanded","com.wsscode.pathom.viz.index-explorer/attr-mismatch-expanded",1688513157),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-type-mismatch","com.wsscode.pathom.viz.index-explorer/attr-type-mismatch",-1230484441),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-leaf-in","com.wsscode.pathom.connect/attr-leaf-in",-1959401711),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-branch-in","com.wsscode.pathom.connect/attr-branch-in",1982854732)], null)], null)], null);
});})(x52238_52665))
;


var x52242_52666 = com.wsscode.pathom.viz.index_explorer.AttributeMismatchPanel.prototype;
x52242_52666.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x52242_52666.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x52242_52666){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".resolver-container",".resolver-container",925822524),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"26px"], null)], null)], null);
});})(x52242_52666))
;

x52242_52666.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x52242_52666){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x52242_52666))
;

x52242_52666.fulcro$client$primitives$IPreMerge$ = cljs.core.PROTOCOL_SENTINEL;

x52242_52666.fulcro$client$primitives$IPreMerge$pre_merge_STAR_$arity$2 = ((function (x52242_52666){
return (function (this$,p__52243){
var map__52244 = p__52243;
var map__52244__$1 = (((((!((map__52244 == null))))?(((((map__52244.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52244.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52244):map__52244);
var current_normalized = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52244__$1,new cljs.core.Keyword(null,"current-normalized","current-normalized",851723724));
var data_tree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52244__$1,new cljs.core.Keyword(null,"data-tree","data-tree",1311167582));
var this$__$1 = this;
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-mismatch-expanded","com.wsscode.pathom.viz.index-explorer/attr-mismatch-expanded",1688513157),cljs.core.PersistentHashSet.EMPTY], null),current_normalized,data_tree], 0));
});})(x52242_52666))
;

x52242_52666.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x52242_52666.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x52242_52666){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x52242_52666))
;

x52242_52666.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x52242_52666.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x52242_52666){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-mismatch-expanded","com.wsscode.pathom.viz.index-explorer/attr-mismatch-expanded",1688513157),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-type-mismatch","com.wsscode.pathom.viz.index-explorer/attr-type-mismatch",-1230484441),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-leaf-in","com.wsscode.pathom.connect/attr-leaf-in",-1959401711),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-branch-in","com.wsscode.pathom.connect/attr-branch-in",1982854732)], null)], null)], null);
});})(x52242_52666))
;


com.wsscode.pathom.viz.index_explorer.AttributeMismatchPanel.cljs$lang$type = true;

com.wsscode.pathom.viz.index_explorer.AttributeMismatchPanel.cljs$lang$ctorStr = "com.wsscode.pathom.viz.index-explorer/AttributeMismatchPanel";

com.wsscode.pathom.viz.index_explorer.AttributeMismatchPanel.cljs$lang$ctorPrWriter = (function (this__44805__auto__,writer__44806__auto__,opt__44807__auto__){
return cljs.core._write(writer__44806__auto__,"com.wsscode.pathom.viz.index-explorer/AttributeMismatchPanel");
});
com.wsscode.pathom.viz.index_explorer.attribute_mismatch_panel = fulcro.client.primitives.computed_factory.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.AttributeMismatchPanel);
if((typeof com !== 'undefined') && (typeof com.wsscode !== 'undefined') && (typeof com.wsscode.pathom !== 'undefined') && (typeof com.wsscode.pathom.viz !== 'undefined') && (typeof com.wsscode.pathom.viz.index_explorer !== 'undefined') && (typeof com.wsscode.pathom.viz.index_explorer.StatsView !== 'undefined')){
} else {
/**
 * @constructor
 * @nocollapse
 */
com.wsscode.pathom.viz.index_explorer.StatsView = (function com$wsscode$pathom$viz$index_explorer$StatsView(){
var this__44802__auto__ = this;
React.Component.apply(this__44802__auto__,arguments);

if((!((this__44802__auto__.initLocalState == null)))){
this__44802__auto__.state = this__44802__auto__.initLocalState();
} else {
this__44802__auto__.state = ({});
}

return this__44802__auto__;
});

goog.object.extend(com.wsscode.pathom.viz.index_explorer.StatsView.prototype,React.Component.prototype,fulcro.client.primitives.default_component_prototype);
}

fulcro.client.primitives._register_component_BANG_(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","StatsView","com.wsscode.pathom.viz.index-explorer/StatsView",1030504264),com.wsscode.pathom.viz.index_explorer.StatsView);

var x52248_52667 = com.wsscode.pathom.viz.index_explorer.StatsView.prototype;
x52248_52667.render = ((function (x52248_52667){
return (function (){
var this__43720__auto__ = this;
var this$ = this__43720__auto__;
var _STAR_reconciler_STAR__orig_val__52249 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__52250 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__52251 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__52252 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__52253 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__52254 = fulcro.client.primitives.get_reconciler(this__43720__auto__);
var _STAR_depth_STAR__temp_val__52255 = (fulcro.client.primitives.depth(this__43720__auto__) + (1));
var _STAR_shared_STAR__temp_val__52256 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__43720__auto__);
var _STAR_instrument_STAR__temp_val__52257 = fulcro.client.primitives.instrument(this__43720__auto__);
var _STAR_parent_STAR__temp_val__52258 = this__43720__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__52254;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__52255;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__52256;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__52257;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__52258;

try{var map__52259 = fulcro.client.primitives.props(this$);
var map__52259__$1 = (((((!((map__52259 == null))))?(((((map__52259.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52259.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52259):map__52259);
var attribute_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52259__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attribute-count","com.wsscode.pathom.viz.index-explorer/attribute-count",699283957));
var mutation_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52259__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutation-count","com.wsscode.pathom.viz.index-explorer/mutation-count",-544331737));
var top_connection_hubs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52259__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","top-connection-hubs","com.wsscode.pathom.viz.index-explorer/top-connection-hubs",1843947657));
var attr_type_mismatch_join = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52259__$1,new cljs.core.Keyword(">","attr-type-mismatch-join",">/attr-type-mismatch-join",-38351640));
var idents_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52259__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","idents-count","com.wsscode.pathom.viz.index-explorer/idents-count",2076723333));
var attr_type_mismatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52259__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-type-mismatch","com.wsscode.pathom.viz.index-explorer/attr-type-mismatch",-1230484441));
var resolver_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52259__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","resolver-count","com.wsscode.pathom.viz.index-explorer/resolver-count",1252340099));
var globals_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52259__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","globals-count","com.wsscode.pathom.viz.index-explorer/globals-count",1697710019));
var attr_edges_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52259__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-edges-count","com.wsscode.pathom.viz.index-explorer/attr-edges-count",-99271495));
var computed = fulcro.client.primitives.get_computed.cljs$core$IFn$_invoke$arity$1(this$);
return fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".container",".container",-1441208944),com.wsscode.pathom.viz.ui.kit.gc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".flex",".flex",-73425686),new cljs.core.Keyword(null,".scrollbars",".scrollbars",-1193970120)], 0)),fulcro.client.localized_dom.h1.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".title",".title",-416997657),"Stats"], 0)),(function (){var G__52261 = cljs.core.PersistentArrayMap.EMPTY;
var G__52262 = fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.wsscode.pathom.viz.ui.kit.gc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".flex",".flex",-73425686)], 0)),(function (){var G__52264 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","panel-title","com.wsscode.pathom.viz.ui.kit/panel-title",1529445284),"Counters"], null);
var G__52265 = fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Attribute count: ",attribute_count], 0));
var G__52266 = fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Resolver count: ",resolver_count], 0));
var G__52267 = fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Mutation count: ",mutation_count], 0));
var G__52268 = fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Globals count: ",globals_count], 0));
var G__52269 = fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Idents count: ",idents_count], 0));
var G__52270 = fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Edges count: ",attr_edges_count], 0));
return (com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$7 ? com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$7(G__52264,G__52265,G__52266,G__52267,G__52268,G__52269,G__52270) : com.wsscode.pathom.viz.ui.kit.panel.call(null,G__52264,G__52265,G__52266,G__52267,G__52268,G__52269,G__52270));
})(),(function (){var G__52271 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","panel-title","com.wsscode.pathom.viz.ui.kit/panel-title",1529445284),"Most Connected Attributes"], null);
var G__52272 = (function (){var iter__4523__auto__ = ((function (G__52271,G__52261,map__52259,map__52259__$1,attribute_count,mutation_count,top_connection_hubs,attr_type_mismatch_join,idents_count,attr_type_mismatch,resolver_count,globals_count,attr_edges_count,computed,_STAR_reconciler_STAR__orig_val__52249,_STAR_depth_STAR__orig_val__52250,_STAR_shared_STAR__orig_val__52251,_STAR_instrument_STAR__orig_val__52252,_STAR_parent_STAR__orig_val__52253,_STAR_reconciler_STAR__temp_val__52254,_STAR_depth_STAR__temp_val__52255,_STAR_shared_STAR__temp_val__52256,_STAR_instrument_STAR__temp_val__52257,_STAR_parent_STAR__temp_val__52258,this$,this__43720__auto__,x52248_52667){
return (function com$wsscode$pathom$viz$index_explorer$iter__52273(s__52274){
return (new cljs.core.LazySeq(null,((function (G__52271,G__52261,map__52259,map__52259__$1,attribute_count,mutation_count,top_connection_hubs,attr_type_mismatch_join,idents_count,attr_type_mismatch,resolver_count,globals_count,attr_edges_count,computed,_STAR_reconciler_STAR__orig_val__52249,_STAR_depth_STAR__orig_val__52250,_STAR_shared_STAR__orig_val__52251,_STAR_instrument_STAR__orig_val__52252,_STAR_parent_STAR__orig_val__52253,_STAR_reconciler_STAR__temp_val__52254,_STAR_depth_STAR__temp_val__52255,_STAR_shared_STAR__temp_val__52256,_STAR_instrument_STAR__temp_val__52257,_STAR_parent_STAR__temp_val__52258,this$,this__43720__auto__,x52248_52667){
return (function (){
var s__52274__$1 = s__52274;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__52274__$1);
if(temp__5720__auto__){
var s__52274__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__52274__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__52274__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__52276 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__52275 = (0);
while(true){
if((i__52275 < size__4522__auto__)){
var map__52277 = cljs.core._nth(c__4521__auto__,i__52275);
var map__52277__$1 = (((((!((map__52277 == null))))?(((((map__52277.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52277.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52277):map__52277);
var attribute = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52277__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075));
var attr_edges_count__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52277__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-edges-count","com.wsscode.pathom.viz.index-explorer/attr-edges-count",-99271495));
cljs.core.chunk_append(b__52276,com.wsscode.pathom.viz.index_explorer.attribute_link(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),attribute,new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","render","com.wsscode.pathom.viz.ui.kit/render",1024565529),((function (i__52275,map__52277,map__52277__$1,attribute,attr_edges_count__$1,c__4521__auto__,size__4522__auto__,b__52276,s__52274__$2,temp__5720__auto__,G__52271,G__52261,map__52259,map__52259__$1,attribute_count,mutation_count,top_connection_hubs,attr_type_mismatch_join,idents_count,attr_type_mismatch,resolver_count,globals_count,attr_edges_count,computed,_STAR_reconciler_STAR__orig_val__52249,_STAR_depth_STAR__orig_val__52250,_STAR_shared_STAR__orig_val__52251,_STAR_instrument_STAR__orig_val__52252,_STAR_parent_STAR__orig_val__52253,_STAR_reconciler_STAR__temp_val__52254,_STAR_depth_STAR__temp_val__52255,_STAR_shared_STAR__temp_val__52256,_STAR_instrument_STAR__temp_val__52257,_STAR_parent_STAR__temp_val__52258,this$,this__43720__auto__,x52248_52667){
return (function (){
return ["[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(attr_edges_count__$1),"] ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attribute], 0))].join('');
});})(i__52275,map__52277,map__52277__$1,attribute,attr_edges_count__$1,c__4521__auto__,size__4522__auto__,b__52276,s__52274__$2,temp__5720__auto__,G__52271,G__52261,map__52259,map__52259__$1,attribute_count,mutation_count,top_connection_hubs,attr_type_mismatch_join,idents_count,attr_type_mismatch,resolver_count,globals_count,attr_edges_count,computed,_STAR_reconciler_STAR__orig_val__52249,_STAR_depth_STAR__orig_val__52250,_STAR_shared_STAR__orig_val__52251,_STAR_instrument_STAR__orig_val__52252,_STAR_parent_STAR__orig_val__52253,_STAR_reconciler_STAR__temp_val__52254,_STAR_depth_STAR__temp_val__52255,_STAR_shared_STAR__temp_val__52256,_STAR_instrument_STAR__temp_val__52257,_STAR_parent_STAR__temp_val__52258,this$,this__43720__auto__,x52248_52667))
], null),computed));

var G__52668 = (i__52275 + (1));
i__52275 = G__52668;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__52276),com$wsscode$pathom$viz$index_explorer$iter__52273(cljs.core.chunk_rest(s__52274__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__52276),null);
}
} else {
var map__52279 = cljs.core.first(s__52274__$2);
var map__52279__$1 = (((((!((map__52279 == null))))?(((((map__52279.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52279.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52279):map__52279);
var attribute = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52279__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075));
var attr_edges_count__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52279__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-edges-count","com.wsscode.pathom.viz.index-explorer/attr-edges-count",-99271495));
return cljs.core.cons(com.wsscode.pathom.viz.index_explorer.attribute_link(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),attribute,new cljs.core.Keyword("com.wsscode.pathom.viz.ui.kit","render","com.wsscode.pathom.viz.ui.kit/render",1024565529),((function (map__52279,map__52279__$1,attribute,attr_edges_count__$1,s__52274__$2,temp__5720__auto__,G__52271,G__52261,map__52259,map__52259__$1,attribute_count,mutation_count,top_connection_hubs,attr_type_mismatch_join,idents_count,attr_type_mismatch,resolver_count,globals_count,attr_edges_count,computed,_STAR_reconciler_STAR__orig_val__52249,_STAR_depth_STAR__orig_val__52250,_STAR_shared_STAR__orig_val__52251,_STAR_instrument_STAR__orig_val__52252,_STAR_parent_STAR__orig_val__52253,_STAR_reconciler_STAR__temp_val__52254,_STAR_depth_STAR__temp_val__52255,_STAR_shared_STAR__temp_val__52256,_STAR_instrument_STAR__temp_val__52257,_STAR_parent_STAR__temp_val__52258,this$,this__43720__auto__,x52248_52667){
return (function (){
return ["[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(attr_edges_count__$1),"] ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attribute], 0))].join('');
});})(map__52279,map__52279__$1,attribute,attr_edges_count__$1,s__52274__$2,temp__5720__auto__,G__52271,G__52261,map__52259,map__52259__$1,attribute_count,mutation_count,top_connection_hubs,attr_type_mismatch_join,idents_count,attr_type_mismatch,resolver_count,globals_count,attr_edges_count,computed,_STAR_reconciler_STAR__orig_val__52249,_STAR_depth_STAR__orig_val__52250,_STAR_shared_STAR__orig_val__52251,_STAR_instrument_STAR__orig_val__52252,_STAR_parent_STAR__orig_val__52253,_STAR_reconciler_STAR__temp_val__52254,_STAR_depth_STAR__temp_val__52255,_STAR_shared_STAR__temp_val__52256,_STAR_instrument_STAR__temp_val__52257,_STAR_parent_STAR__temp_val__52258,this$,this__43720__auto__,x52248_52667))
], null),computed),com$wsscode$pathom$viz$index_explorer$iter__52273(cljs.core.rest(s__52274__$2)));
}
} else {
return null;
}
break;
}
});})(G__52271,G__52261,map__52259,map__52259__$1,attribute_count,mutation_count,top_connection_hubs,attr_type_mismatch_join,idents_count,attr_type_mismatch,resolver_count,globals_count,attr_edges_count,computed,_STAR_reconciler_STAR__orig_val__52249,_STAR_depth_STAR__orig_val__52250,_STAR_shared_STAR__orig_val__52251,_STAR_instrument_STAR__orig_val__52252,_STAR_parent_STAR__orig_val__52253,_STAR_reconciler_STAR__temp_val__52254,_STAR_depth_STAR__temp_val__52255,_STAR_shared_STAR__temp_val__52256,_STAR_instrument_STAR__temp_val__52257,_STAR_parent_STAR__temp_val__52258,this$,this__43720__auto__,x52248_52667))
,null,null));
});})(G__52271,G__52261,map__52259,map__52259__$1,attribute_count,mutation_count,top_connection_hubs,attr_type_mismatch_join,idents_count,attr_type_mismatch,resolver_count,globals_count,attr_edges_count,computed,_STAR_reconciler_STAR__orig_val__52249,_STAR_depth_STAR__orig_val__52250,_STAR_shared_STAR__orig_val__52251,_STAR_instrument_STAR__orig_val__52252,_STAR_parent_STAR__orig_val__52253,_STAR_reconciler_STAR__temp_val__52254,_STAR_depth_STAR__temp_val__52255,_STAR_shared_STAR__temp_val__52256,_STAR_instrument_STAR__temp_val__52257,_STAR_parent_STAR__temp_val__52258,this$,this__43720__auto__,x52248_52667))
;
return iter__4523__auto__(top_connection_hubs);
})();
return (com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.panel.cljs$core$IFn$_invoke$arity$2(G__52271,G__52272) : com.wsscode.pathom.viz.ui.kit.panel.call(null,G__52271,G__52272));
})()], 0));
var G__52263 = ((cljs.core.seq(attr_type_mismatch))?fulcro.client.primitives.fragment.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"24px"], null)], null)], 0)),fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.wsscode.pathom.viz.ui.kit.gc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".flex",".flex",-73425686)], 0)),(com.wsscode.pathom.viz.index_explorer.attribute_mismatch_panel.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.attribute_mismatch_panel.cljs$core$IFn$_invoke$arity$2(attr_type_mismatch_join,computed) : com.wsscode.pathom.viz.index_explorer.attribute_mismatch_panel.call(null,attr_type_mismatch_join,computed))], 0))], 0)):null);
return (com.wsscode.pathom.viz.ui.kit.row.cljs$core$IFn$_invoke$arity$3 ? com.wsscode.pathom.viz.ui.kit.row.cljs$core$IFn$_invoke$arity$3(G__52261,G__52262,G__52263) : com.wsscode.pathom.viz.ui.kit.row.call(null,G__52261,G__52262,G__52263));
})()], 0));
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__52253;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__52252;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__52251;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__52250;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__52249;
}});})(x52248_52667))
;


com.wsscode.pathom.viz.index_explorer.StatsView.prototype.constructor = com.wsscode.pathom.viz.index_explorer.StatsView;

com.wsscode.pathom.viz.index_explorer.StatsView.prototype.constructor.displayName = "com.wsscode.pathom.viz.index-explorer/StatsView";

com.wsscode.pathom.viz.index_explorer.StatsView.prototype.fulcro$isComponent = true;

var x52281_52669 = com.wsscode.pathom.viz.index_explorer.StatsView;
x52281_52669.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x52281_52669.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x52281_52669){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),"12px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".title",".title",-416997657),com.wsscode.pathom.viz.ui.kit.text_base], null)], null);
});})(x52281_52669))
;

x52281_52669.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x52281_52669){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x52281_52669))
;

x52281_52669.fulcro$client$primitives$IPreMerge$ = cljs.core.PROTOCOL_SENTINEL;

x52281_52669.fulcro$client$primitives$IPreMerge$pre_merge_STAR_$arity$2 = ((function (x52281_52669){
return (function (this$,p__52282){
var map__52283 = p__52282;
var map__52283__$1 = (((((!((map__52283 == null))))?(((((map__52283.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52283.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52283):map__52283);
var current_normalized = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52283__$1,new cljs.core.Keyword(null,"current-normalized","current-normalized",851723724));
var data_tree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52283__$1,new cljs.core.Keyword(null,"data-tree","data-tree",1311167582));
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
});})(x52281_52669))
;

x52281_52669.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x52281_52669.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x52281_52669){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x52281_52669))
;

x52281_52669.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x52281_52669.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x52281_52669){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attribute-count","com.wsscode.pathom.viz.index-explorer/attribute-count",699283957),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","resolver-count","com.wsscode.pathom.viz.index-explorer/resolver-count",1252340099),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","globals-count","com.wsscode.pathom.viz.index-explorer/globals-count",1697710019),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","idents-count","com.wsscode.pathom.viz.index-explorer/idents-count",2076723333),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-edges-count","com.wsscode.pathom.viz.index-explorer/attr-edges-count",-99271495),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutation-count","com.wsscode.pathom.viz.index-explorer/mutation-count",-544331737),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-type-mismatch","com.wsscode.pathom.viz.index-explorer/attr-type-mismatch",-1230484441),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","top-connection-hubs","com.wsscode.pathom.viz.index-explorer/top-connection-hubs",1843947657),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-edges-count","com.wsscode.pathom.viz.index-explorer/attr-edges-count",-99271495)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(">","attr-type-mismatch-join",">/attr-type-mismatch-join",-38351640),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.AttributeMismatchPanel)], null)], null);
});})(x52281_52669))
;


var x52285_52670 = com.wsscode.pathom.viz.index_explorer.StatsView.prototype;
x52285_52670.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x52285_52670.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x52285_52670){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),"12px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".title",".title",-416997657),com.wsscode.pathom.viz.ui.kit.text_base], null)], null);
});})(x52285_52670))
;

x52285_52670.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x52285_52670){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x52285_52670))
;

x52285_52670.fulcro$client$primitives$IPreMerge$ = cljs.core.PROTOCOL_SENTINEL;

x52285_52670.fulcro$client$primitives$IPreMerge$pre_merge_STAR_$arity$2 = ((function (x52285_52670){
return (function (this$,p__52286){
var map__52287 = p__52286;
var map__52287__$1 = (((((!((map__52287 == null))))?(((((map__52287.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52287.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52287):map__52287);
var current_normalized = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52287__$1,new cljs.core.Keyword(null,"current-normalized","current-normalized",851723724));
var data_tree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52287__$1,new cljs.core.Keyword(null,"data-tree","data-tree",1311167582));
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
});})(x52285_52670))
;

x52285_52670.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x52285_52670.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x52285_52670){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x52285_52670))
;

x52285_52670.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x52285_52670.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x52285_52670){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attribute-count","com.wsscode.pathom.viz.index-explorer/attribute-count",699283957),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","resolver-count","com.wsscode.pathom.viz.index-explorer/resolver-count",1252340099),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","globals-count","com.wsscode.pathom.viz.index-explorer/globals-count",1697710019),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","idents-count","com.wsscode.pathom.viz.index-explorer/idents-count",2076723333),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-edges-count","com.wsscode.pathom.viz.index-explorer/attr-edges-count",-99271495),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutation-count","com.wsscode.pathom.viz.index-explorer/mutation-count",-544331737),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-type-mismatch","com.wsscode.pathom.viz.index-explorer/attr-type-mismatch",-1230484441),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","top-connection-hubs","com.wsscode.pathom.viz.index-explorer/top-connection-hubs",1843947657),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-edges-count","com.wsscode.pathom.viz.index-explorer/attr-edges-count",-99271495)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(">","attr-type-mismatch-join",">/attr-type-mismatch-join",-38351640),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.AttributeMismatchPanel)], null)], null);
});})(x52285_52670))
;


com.wsscode.pathom.viz.index_explorer.StatsView.cljs$lang$type = true;

com.wsscode.pathom.viz.index_explorer.StatsView.cljs$lang$ctorStr = "com.wsscode.pathom.viz.index-explorer/StatsView";

com.wsscode.pathom.viz.index_explorer.StatsView.cljs$lang$ctorPrWriter = (function (this__44805__auto__,writer__44806__auto__,opt__44807__auto__){
return cljs.core._write(writer__44806__auto__,"com.wsscode.pathom.viz.index-explorer/StatsView");
});
com.wsscode.pathom.viz.index_explorer.stats_view = fulcro.client.primitives.factory.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.StatsView);
if((typeof com !== 'undefined') && (typeof com.wsscode !== 'undefined') && (typeof com.wsscode.pathom !== 'undefined') && (typeof com.wsscode.pathom.viz !== 'undefined') && (typeof com.wsscode.pathom.viz.index_explorer !== 'undefined') && (typeof com.wsscode.pathom.viz.index_explorer.FullGraphView !== 'undefined')){
} else {
/**
 * @constructor
 * @nocollapse
 */
com.wsscode.pathom.viz.index_explorer.FullGraphView = (function com$wsscode$pathom$viz$index_explorer$FullGraphView(){
var this__44802__auto__ = this;
React.Component.apply(this__44802__auto__,arguments);

if((!((this__44802__auto__.initLocalState == null)))){
this__44802__auto__.state = this__44802__auto__.initLocalState();
} else {
this__44802__auto__.state = ({});
}

return this__44802__auto__;
});

goog.object.extend(com.wsscode.pathom.viz.index_explorer.FullGraphView.prototype,React.Component.prototype,fulcro.client.primitives.default_component_prototype);
}

fulcro.client.primitives._register_component_BANG_(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","FullGraphView","com.wsscode.pathom.viz.index-explorer/FullGraphView",1989996895),com.wsscode.pathom.viz.index_explorer.FullGraphView);

var x52292_52671 = com.wsscode.pathom.viz.index_explorer.FullGraphView.prototype;
x52292_52671.render = ((function (x52292_52671){
return (function (){
var this__43720__auto__ = this;
var this$ = this__43720__auto__;
var _STAR_reconciler_STAR__orig_val__52293 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__52294 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__52295 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__52296 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__52297 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__52298 = fulcro.client.primitives.get_reconciler(this__43720__auto__);
var _STAR_depth_STAR__temp_val__52299 = (fulcro.client.primitives.depth(this__43720__auto__) + (1));
var _STAR_shared_STAR__temp_val__52300 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__43720__auto__);
var _STAR_instrument_STAR__temp_val__52301 = fulcro.client.primitives.instrument(this__43720__auto__);
var _STAR_parent_STAR__temp_val__52302 = this__43720__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__52298;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__52299;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__52300;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__52301;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__52302;

try{var _ = fulcro.client.primitives.props(this$);
var map__52303 = fulcro.client.primitives.get_computed.cljs$core$IFn$_invoke$arity$1(this$);
var map__52303__$1 = (((((!((map__52303 == null))))?(((((map__52303.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52303.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52303):map__52303);
var attributes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52303__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attributes","com.wsscode.pathom.viz.index-explorer/attributes",-67264281));
var on_select_attribute = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52303__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","on-select-attribute","com.wsscode.pathom.viz.index-explorer/on-select-attribute",2006419034));
var on_select_resolver = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52303__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","on-select-resolver","com.wsscode.pathom.viz.index-explorer/on-select-resolver",1600914463));
var G__52305 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"classes","classes",2037804510),com.wsscode.pathom.viz.ui.kit.ccss.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".container",".container",-1441208944)], 0))], null);
var G__52306 = fulcro.client.localized_dom.h1.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".title",".title",-416997657),"Full Graph"], 0));
var G__52307 = (function (){var G__52308 = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attributes","com.wsscode.pathom.viz.index-explorer/attributes",-67264281),attributes,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","direct-reaches?","com.wsscode.pathom.viz.index-explorer/direct-reaches?",-1036048994),true,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","nested-reaches?","com.wsscode.pathom.viz.index-explorer/nested-reaches?",-22429448),false,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","direct-provides?","com.wsscode.pathom.viz.index-explorer/direct-provides?",223892052),true,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","nested-provides?","com.wsscode.pathom.viz.index-explorer/nested-provides?",-1296758362),false,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","on-show-details","com.wsscode.pathom.viz.index-explorer/on-show-details",-322180105),on_select_attribute,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","on-click-edge","com.wsscode.pathom.viz.index-explorer/on-click-edge",810811642),((function (G__52305,G__52306,_,map__52303,map__52303__$1,attributes,on_select_attribute,on_select_resolver,_STAR_reconciler_STAR__orig_val__52293,_STAR_depth_STAR__orig_val__52294,_STAR_shared_STAR__orig_val__52295,_STAR_instrument_STAR__orig_val__52296,_STAR_parent_STAR__orig_val__52297,_STAR_reconciler_STAR__temp_val__52298,_STAR_depth_STAR__temp_val__52299,_STAR_shared_STAR__temp_val__52300,_STAR_instrument_STAR__temp_val__52301,_STAR_parent_STAR__temp_val__52302,this$,this__43720__auto__,x52292_52671){
return (function (p1__52289_SHARP_){
var G__52309 = cljs.core.first(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","resolvers","com.wsscode.pathom.viz.index-explorer/resolvers",-1064744669).cljs$core$IFn$_invoke$arity$1(p1__52289_SHARP_));
return (on_select_resolver.cljs$core$IFn$_invoke$arity$1 ? on_select_resolver.cljs$core$IFn$_invoke$arity$1(G__52309) : on_select_resolver.call(null,G__52309));
});})(G__52305,G__52306,_,map__52303,map__52303__$1,attributes,on_select_attribute,on_select_resolver,_STAR_reconciler_STAR__orig_val__52293,_STAR_depth_STAR__orig_val__52294,_STAR_shared_STAR__orig_val__52295,_STAR_instrument_STAR__orig_val__52296,_STAR_parent_STAR__orig_val__52297,_STAR_reconciler_STAR__temp_val__52298,_STAR_depth_STAR__temp_val__52299,_STAR_shared_STAR__temp_val__52300,_STAR_instrument_STAR__temp_val__52301,_STAR_parent_STAR__temp_val__52302,this$,this__43720__auto__,x52292_52671))
], null);
return (com.wsscode.pathom.viz.index_explorer.attribute_graph.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom.viz.index_explorer.attribute_graph.cljs$core$IFn$_invoke$arity$1(G__52308) : com.wsscode.pathom.viz.index_explorer.attribute_graph.call(null,G__52308));
})();
return (com.wsscode.pathom.viz.ui.kit.column.cljs$core$IFn$_invoke$arity$3 ? com.wsscode.pathom.viz.ui.kit.column.cljs$core$IFn$_invoke$arity$3(G__52305,G__52306,G__52307) : com.wsscode.pathom.viz.ui.kit.column.call(null,G__52305,G__52306,G__52307));
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__52297;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__52296;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__52295;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__52294;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__52293;
}});})(x52292_52671))
;


com.wsscode.pathom.viz.index_explorer.FullGraphView.prototype.constructor = com.wsscode.pathom.viz.index_explorer.FullGraphView;

com.wsscode.pathom.viz.index_explorer.FullGraphView.prototype.constructor.displayName = "com.wsscode.pathom.viz.index-explorer/FullGraphView";

com.wsscode.pathom.viz.index_explorer.FullGraphView.prototype.fulcro$isComponent = true;

var x52310_52672 = com.wsscode.pathom.viz.index_explorer.FullGraphView;
x52310_52672.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x52310_52672.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x52310_52672){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),"12px",new cljs.core.Keyword(null,"flex","flex",-1425124628),"1"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".title",".title",-416997657),com.wsscode.pathom.viz.ui.kit.text_base], null)], null);
});})(x52310_52672))
;

x52310_52672.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x52310_52672){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x52310_52672))
;

x52310_52672.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x52310_52672.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x52310_52672){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","graph-view-id","com.wsscode.pathom.viz.index-explorer/graph-view-id",211965428),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","graph-view-id","com.wsscode.pathom.viz.index-explorer/graph-view-id",211965428).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x52310_52672))
;

x52310_52672.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x52310_52672.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x52310_52672){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","graph-view-id","com.wsscode.pathom.viz.index-explorer/graph-view-id",211965428)], null);
});})(x52310_52672))
;


var x52311_52673 = com.wsscode.pathom.viz.index_explorer.FullGraphView.prototype;
x52311_52673.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x52311_52673.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x52311_52673){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),"12px",new cljs.core.Keyword(null,"flex","flex",-1425124628),"1"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".title",".title",-416997657),com.wsscode.pathom.viz.ui.kit.text_base], null)], null);
});})(x52311_52673))
;

x52311_52673.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x52311_52673){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x52311_52673))
;

x52311_52673.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x52311_52673.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x52311_52673){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","graph-view-id","com.wsscode.pathom.viz.index-explorer/graph-view-id",211965428),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","graph-view-id","com.wsscode.pathom.viz.index-explorer/graph-view-id",211965428).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x52311_52673))
;

x52311_52673.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x52311_52673.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x52311_52673){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","graph-view-id","com.wsscode.pathom.viz.index-explorer/graph-view-id",211965428)], null);
});})(x52311_52673))
;


com.wsscode.pathom.viz.index_explorer.FullGraphView.cljs$lang$type = true;

com.wsscode.pathom.viz.index_explorer.FullGraphView.cljs$lang$ctorStr = "com.wsscode.pathom.viz.index-explorer/FullGraphView";

com.wsscode.pathom.viz.index_explorer.FullGraphView.cljs$lang$ctorPrWriter = (function (this__44805__auto__,writer__44806__auto__,opt__44807__auto__){
return cljs.core._write(writer__44806__auto__,"com.wsscode.pathom.viz.index-explorer/FullGraphView");
});
com.wsscode.pathom.viz.index_explorer.full_graph_view = fulcro.client.primitives.factory.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.FullGraphView);
com.wsscode.pathom.viz.index_explorer.prop_presence_ident = (function com$wsscode$pathom$viz$index_explorer$prop_presence_ident(props){
return (function (data){
var or__4131__auto__ = cljs.core.some((function (p1__52312_SHARP_){
var temp__5722__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,p1__52312_SHARP_);
if((temp__5722__auto__ == null)){
return null;
} else {
var val = temp__5722__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__52312_SHARP_,val], null);
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
var this__44802__auto__ = this;
React.Component.apply(this__44802__auto__,arguments);

if((!((this__44802__auto__.initLocalState == null)))){
this__44802__auto__.state = this__44802__auto__.initLocalState();
} else {
this__44802__auto__.state = ({});
}

return this__44802__auto__;
});

goog.object.extend(com.wsscode.pathom.viz.index_explorer.MainViewUnion.prototype,React.Component.prototype,fulcro.client.primitives.default_component_prototype);
}

fulcro.client.primitives._register_component_BANG_(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","MainViewUnion","com.wsscode.pathom.viz.index-explorer/MainViewUnion",280346003),com.wsscode.pathom.viz.index_explorer.MainViewUnion);

var x52315_52674 = com.wsscode.pathom.viz.index_explorer.MainViewUnion.prototype;
x52315_52674.render = ((function (x52315_52674){
return (function (){
var this__43720__auto__ = this;
var this$ = this__43720__auto__;
var _STAR_reconciler_STAR__orig_val__52316 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__52317 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__52318 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__52319 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__52320 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__52321 = fulcro.client.primitives.get_reconciler(this__43720__auto__);
var _STAR_depth_STAR__temp_val__52322 = (fulcro.client.primitives.depth(this__43720__auto__) + (1));
var _STAR_shared_STAR__temp_val__52323 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__43720__auto__);
var _STAR_instrument_STAR__temp_val__52324 = fulcro.client.primitives.instrument(this__43720__auto__);
var _STAR_parent_STAR__temp_val__52325 = this__43720__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__52321;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__52322;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__52323;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__52324;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__52325;

try{var props = fulcro.client.primitives.props(this$);
var G__52326 = cljs.core.first(fulcro.client.primitives.get_ident.cljs$core$IFn$_invoke$arity$1(this$));
var G__52326__$1 = (((G__52326 instanceof cljs.core.Keyword))?G__52326.fqn:null);
switch (G__52326__$1) {
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
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__52320;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__52319;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__52318;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__52317;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__52316;
}});})(x52315_52674))
;


com.wsscode.pathom.viz.index_explorer.MainViewUnion.prototype.constructor = com.wsscode.pathom.viz.index_explorer.MainViewUnion;

com.wsscode.pathom.viz.index_explorer.MainViewUnion.prototype.constructor.displayName = "com.wsscode.pathom.viz.index-explorer/MainViewUnion";

com.wsscode.pathom.viz.index_explorer.MainViewUnion.prototype.fulcro$isComponent = true;

var x52327_52676 = com.wsscode.pathom.viz.index_explorer.MainViewUnion;
x52327_52676.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x52327_52676.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x52327_52676){
return (function (this$,props){
var this$__$1 = this;
return com.wsscode.pathom.viz.index_explorer.main_view_ident(props);
});})(x52327_52676))
;

x52327_52676.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x52327_52676.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x52327_52676){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.AttributeView),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.ResolverView),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutation-sym","com.wsscode.pathom.viz.index-explorer/mutation-sym",-191280951),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.MutationView),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.StatsView),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","graph-view-id","com.wsscode.pathom.viz.index-explorer/graph-view-id",211965428),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.FullGraphView)], null);
});})(x52327_52676))
;


var x52328_52677 = com.wsscode.pathom.viz.index_explorer.MainViewUnion.prototype;
x52328_52677.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x52328_52677.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x52328_52677){
return (function (this$,props){
var this$__$1 = this;
return com.wsscode.pathom.viz.index_explorer.main_view_ident(props);
});})(x52328_52677))
;

x52328_52677.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x52328_52677.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x52328_52677){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.AttributeView),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.ResolverView),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutation-sym","com.wsscode.pathom.viz.index-explorer/mutation-sym",-191280951),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.MutationView),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.StatsView),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","graph-view-id","com.wsscode.pathom.viz.index-explorer/graph-view-id",211965428),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.FullGraphView)], null);
});})(x52328_52677))
;


com.wsscode.pathom.viz.index_explorer.MainViewUnion.cljs$lang$type = true;

com.wsscode.pathom.viz.index_explorer.MainViewUnion.cljs$lang$ctorStr = "com.wsscode.pathom.viz.index-explorer/MainViewUnion";

com.wsscode.pathom.viz.index_explorer.MainViewUnion.cljs$lang$ctorPrWriter = (function (this__44805__auto__,writer__44806__auto__,opt__44807__auto__){
return cljs.core._write(writer__44806__auto__,"com.wsscode.pathom.viz.index-explorer/MainViewUnion");
});
com.wsscode.pathom.viz.index_explorer.main_view_union = fulcro.client.primitives.computed_factory.cljs$core$IFn$_invoke$arity$2(com.wsscode.pathom.viz.index_explorer.MainViewUnion,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),(function (p1__52329_SHARP_){
var or__4131__auto__ = new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075).cljs$core$IFn$_invoke$arity$1(p1__52329_SHARP_);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581).cljs$core$IFn$_invoke$arity$1(p1__52329_SHARP_);
}
})], null));
com.wsscode.pathom.viz.index_explorer.augment = (function com$wsscode$pathom$viz$index_explorer$augment(data,f){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([data,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(data) : f.call(null,data))], 0));
});
com.wsscode.pathom.viz.index_explorer.compute_stats = (function com$wsscode$pathom$viz$index_explorer$compute_stats(p__52333){
var map__52334 = p__52333;
var map__52334__$1 = (((((!((map__52334 == null))))?(((((map__52334.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52334.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52334):map__52334);
var data = map__52334__$1;
var attributes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52334__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attributes","com.wsscode.pathom.viz.index-explorer/attributes",-67264281));
var resolvers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52334__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","resolvers","com.wsscode.pathom.viz.index-explorer/resolvers",-1064744669));
var mutations = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52334__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutations","com.wsscode.pathom.viz.index-explorer/mutations",329050290));
var globals = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52334__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","globals","com.wsscode.pathom.viz.index-explorer/globals",1704747305));
var idents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52334__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","idents","com.wsscode.pathom.viz.index-explorer/idents",189283656));
return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attribute-count","com.wsscode.pathom.viz.index-explorer/attribute-count",699283957),cljs.core.count(attributes),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","resolver-count","com.wsscode.pathom.viz.index-explorer/resolver-count",1252340099),cljs.core.count(resolvers),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutation-count","com.wsscode.pathom.viz.index-explorer/mutation-count",-544331737),cljs.core.count(mutations),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","globals-count","com.wsscode.pathom.viz.index-explorer/globals-count",1697710019),cljs.core.count(globals),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","idents-count","com.wsscode.pathom.viz.index-explorer/idents-count",2076723333),cljs.core.count(idents),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-edges-count","com.wsscode.pathom.viz.index-explorer/attr-edges-count",-99271495),cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-edges-count","com.wsscode.pathom.viz.index-explorer/attr-edges-count",-99271495)),cljs.core._PLUS_,attributes),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-type-mismatch","com.wsscode.pathom.viz.index-explorer/attr-type-mismatch",-1230484441),cljs.core.filterv(((function (map__52334,map__52334__$1,data,attributes,resolvers,mutations,globals,idents){
return (function (p1__52330_SHARP_){
return ((cljs.core.contains_QMARK_(p1__52330_SHARP_,new cljs.core.Keyword("com.wsscode.pathom.connect","attr-leaf-in","com.wsscode.pathom.connect/attr-leaf-in",-1959401711))) && (cljs.core.contains_QMARK_(p1__52330_SHARP_,new cljs.core.Keyword("com.wsscode.pathom.connect","attr-branch-in","com.wsscode.pathom.connect/attr-branch-in",1982854732))));
});})(map__52334,map__52334__$1,data,attributes,resolvers,mutations,globals,idents))
,attributes),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","top-connection-hubs","com.wsscode.pathom.viz.index-explorer/top-connection-hubs",1843947657),cljs.core.vec(cljs.core.take.cljs$core$IFn$_invoke$arity$2((30),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-edges-count","com.wsscode.pathom.viz.index-explorer/attr-edges-count",-99271495),((function (map__52334,map__52334__$1,data,attributes,resolvers,mutations,globals,idents){
return (function (p1__52332_SHARP_,p2__52331_SHARP_){
return cljs.core.compare(p2__52331_SHARP_,p1__52332_SHARP_);
});})(map__52334,map__52334__$1,data,attributes,resolvers,mutations,globals,idents))
,attributes)))], null);
});
com.wsscode.pathom.viz.index_explorer.build_search_vector = (function com$wsscode$pathom$viz$index_explorer$build_search_vector(p__52339){
var map__52340 = p__52339;
var map__52340__$1 = (((((!((map__52340 == null))))?(((((map__52340.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52340.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52340):map__52340);
var index_resolvers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52340__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","index-resolvers","com.wsscode.pathom.connect/index-resolvers",916075256));
var index_attributes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52340__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","index-attributes","com.wsscode.pathom.connect/index-attributes",-24325279));
var index_mutations = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52340__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","index-mutations","com.wsscode.pathom.connect/index-mutations",1981352054));
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.wsscode.fuzzy","string","com.wsscode.fuzzy/string",320074815),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map__52340,map__52340__$1,index_resolvers,index_attributes,index_mutations){
return (function (p1__52336_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword("com.wsscode.fuzzy","string","com.wsscode.fuzzy/string",320074815),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-value","com.wsscode.pathom.viz.index-explorer/search-value",-337129957),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-type","com.wsscode.pathom.viz.index-explorer/search-type",-1615224063)],[cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581).cljs$core$IFn$_invoke$arity$1(p1__52336_SHARP_)], 0)),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581).cljs$core$IFn$_invoke$arity$1(p1__52336_SHARP_),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-type-resolver","com.wsscode.pathom.viz.index-explorer/search-type-resolver",1588028676)]);
});})(map__52340,map__52340__$1,index_resolvers,index_attributes,index_mutations))
,cljs.core.vals(index_resolvers))),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.wsscode.fuzzy","string","com.wsscode.fuzzy/string",320074815),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map__52340,map__52340__$1,index_resolvers,index_attributes,index_mutations){
return (function (p1__52337_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword("com.wsscode.fuzzy","string","com.wsscode.fuzzy/string",320074815),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-value","com.wsscode.pathom.viz.index-explorer/search-value",-337129957),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-type","com.wsscode.pathom.viz.index-explorer/search-type",-1615224063)],[cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581).cljs$core$IFn$_invoke$arity$1(p1__52337_SHARP_)], 0)),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581).cljs$core$IFn$_invoke$arity$1(p1__52337_SHARP_),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-type-mutation","com.wsscode.pathom.viz.index-explorer/search-type-mutation",-68441744)]);
});})(map__52340,map__52340__$1,index_resolvers,index_attributes,index_mutations))
,cljs.core.vals(index_mutations))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.wsscode.fuzzy","string","com.wsscode.fuzzy/string",320074815),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map__52340,map__52340__$1,index_resolvers,index_attributes,index_mutations){
return (function (p1__52338_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword("com.wsscode.fuzzy","string","com.wsscode.fuzzy/string",320074815),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-value","com.wsscode.pathom.viz.index-explorer/search-value",-337129957),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-type","com.wsscode.pathom.viz.index-explorer/search-type",-1615224063)],[cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075).cljs$core$IFn$_invoke$arity$1(p1__52338_SHARP_)], 0)),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075).cljs$core$IFn$_invoke$arity$1(p1__52338_SHARP_),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-type-attribute","com.wsscode.pathom.viz.index-explorer/search-type-attribute",-62795524)]);
});})(map__52340,map__52340__$1,index_resolvers,index_attributes,index_mutations))
,cljs.core.vals(index_attributes)))], 0)));
});
com.wsscode.pathom.viz.index_explorer.process_index = (function com$wsscode$pathom$viz$index_explorer$process_index(p__52344){
var map__52345 = p__52344;
var map__52345__$1 = (((((!((map__52345 == null))))?(((((map__52345.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52345.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52345):map__52345);
var index = map__52345__$1;
var index_resolvers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52345__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","index-resolvers","com.wsscode.pathom.connect/index-resolvers",916075256));
var idents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52345__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","idents","com.wsscode.pathom.connect/idents",1893384007));
var index_attributes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52345__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","index-attributes","com.wsscode.pathom.connect/index-attributes",-24325279));
var index_mutations = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52345__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","index-mutations","com.wsscode.pathom.connect/index-mutations",1981352054));
var attrs = cljs.core.vec(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str,new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map__52345,map__52345__$1,index,index_resolvers,idents,index_attributes,index_mutations){
return (function (p__52347){
var vec__52348 = p__52347;
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52348,(0),null);
var map__52351 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52348,(1),null);
var map__52351__$1 = (((((!((map__52351 == null))))?(((((map__52351.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52351.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52351):map__52351);
var data = map__52351__$1;
var attr_reach_via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52351__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via","com.wsscode.pathom.connect/attr-reach-via",-483841559));
var attr_provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52351__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attr-provides","com.wsscode.pathom.connect/attr-provides",-474523918));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","weight","com.wsscode.pathom.viz.index-explorer/weight",-1488828976),cljs.core.count(attr_provides),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","reach","com.wsscode.pathom.viz.index-explorer/reach",1367373590),cljs.core.count(attr_reach_via),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),attr,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-edges-count","com.wsscode.pathom.viz.index-explorer/attr-edges-count",-99271495),(cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.count),cljs.core._PLUS_,cljs.core.vals(attr_reach_via)) + cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.count),cljs.core._PLUS_,cljs.core.vals(attr_provides))),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","global-attribute?","com.wsscode.pathom.viz.index-explorer/global-attribute?",47568352),cljs.core.contains_QMARK_(attr_reach_via,cljs.core.PersistentHashSet.EMPTY),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","ident-attribute?","com.wsscode.pathom.viz.index-explorer/ident-attribute?",984021315),cljs.core.contains_QMARK_(idents,attr)], 0));
});})(map__52345,map__52345__$1,index,index_resolvers,idents,index_attributes,index_mutations))
,index_attributes)));
return com.wsscode.pathom.viz.index_explorer.augment(new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","idx","com.wsscode.pathom.viz.index-explorer/idx",1045759782),index,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attributes","com.wsscode.pathom.viz.index-explorer/attributes",-67264281),attrs,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","globals","com.wsscode.pathom.viz.index-explorer/globals",1704747305),cljs.core.filterv(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","global-attribute?","com.wsscode.pathom.viz.index-explorer/global-attribute?",47568352),attrs),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","idents","com.wsscode.pathom.viz.index-explorer/idents",189283656),cljs.core.filterv(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","ident-attribute?","com.wsscode.pathom.viz.index-explorer/ident-attribute?",984021315),attrs),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","search-vector","com.wsscode.pathom.viz.index-explorer/search-vector",-471470935),com.wsscode.pathom.viz.index_explorer.build_search_vector(index),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","resolvers","com.wsscode.pathom.viz.index-explorer/resolvers",-1064744669),cljs.core.vec(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (attrs,map__52345,map__52345__$1,index,index_resolvers,idents,index_attributes,index_mutations){
return (function (p1__52342_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__52342_SHARP_,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","resolver?","com.wsscode.pathom.viz.index-explorer/resolver?",167854159),true);
});})(attrs,map__52345,map__52345__$1,index,index_resolvers,idents,index_attributes,index_mutations))
,cljs.core.vals(index_resolvers)))),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutations","com.wsscode.pathom.viz.index-explorer/mutations",329050290),cljs.core.vec(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (attrs,map__52345,map__52345__$1,index,index_resolvers,idents,index_attributes,index_mutations){
return (function (p1__52343_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(p1__52343_SHARP_,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutation?","com.wsscode.pathom.viz.index-explorer/mutation?",1568382673),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutation-sym","com.wsscode.pathom.viz.index-explorer/mutation-sym",-191280951),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581).cljs$core$IFn$_invoke$arity$1(p1__52343_SHARP_)], 0));
});})(attrs,map__52345,map__52345__$1,index,index_resolvers,idents,index_attributes,index_mutations))
,cljs.core.vals(index_mutations))))], null),com.wsscode.pathom.viz.index_explorer.compute_stats);
});
if((typeof com !== 'undefined') && (typeof com.wsscode !== 'undefined') && (typeof com.wsscode.pathom !== 'undefined') && (typeof com.wsscode.pathom.viz !== 'undefined') && (typeof com.wsscode.pathom.viz.index_explorer !== 'undefined') && (typeof com.wsscode.pathom.viz.index_explorer.AttributeIndex !== 'undefined')){
} else {
/**
 * @constructor
 * @nocollapse
 */
com.wsscode.pathom.viz.index_explorer.AttributeIndex = (function com$wsscode$pathom$viz$index_explorer$AttributeIndex(){
var this__44802__auto__ = this;
React.Component.apply(this__44802__auto__,arguments);

if((!((this__44802__auto__.initLocalState == null)))){
this__44802__auto__.state = this__44802__auto__.initLocalState();
} else {
this__44802__auto__.state = ({});
}

return this__44802__auto__;
});

goog.object.extend(com.wsscode.pathom.viz.index_explorer.AttributeIndex.prototype,React.Component.prototype,fulcro.client.primitives.default_component_prototype);
}

fulcro.client.primitives._register_component_BANG_(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","AttributeIndex","com.wsscode.pathom.viz.index-explorer/AttributeIndex",-1624405224),com.wsscode.pathom.viz.index_explorer.AttributeIndex);

var x52355_52678 = com.wsscode.pathom.viz.index_explorer.AttributeIndex.prototype;
x52355_52678.render = ((function (x52355_52678){
return (function (){
var this__43720__auto__ = this;
var _ = this__43720__auto__;
var _STAR_reconciler_STAR__orig_val__52356 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__52357 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__52358 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__52359 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__52360 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__52361 = fulcro.client.primitives.get_reconciler(this__43720__auto__);
var _STAR_depth_STAR__temp_val__52362 = (fulcro.client.primitives.depth(this__43720__auto__) + (1));
var _STAR_shared_STAR__temp_val__52363 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__43720__auto__);
var _STAR_instrument_STAR__temp_val__52364 = fulcro.client.primitives.instrument(this__43720__auto__);
var _STAR_parent_STAR__temp_val__52365 = this__43720__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__52361;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__52362;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__52363;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__52364;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__52365;

try{var ___$1 = fulcro.client.primitives.props(_);
return null;
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__52360;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__52359;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__52358;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__52357;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__52356;
}});})(x52355_52678))
;


com.wsscode.pathom.viz.index_explorer.AttributeIndex.prototype.constructor = com.wsscode.pathom.viz.index_explorer.AttributeIndex;

com.wsscode.pathom.viz.index_explorer.AttributeIndex.prototype.constructor.displayName = "com.wsscode.pathom.viz.index-explorer/AttributeIndex";

com.wsscode.pathom.viz.index_explorer.AttributeIndex.prototype.fulcro$isComponent = true;

var x52366_52679 = com.wsscode.pathom.viz.index_explorer.AttributeIndex;
x52366_52679.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x52366_52679.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x52366_52679){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x52366_52679))
;

x52366_52679.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x52366_52679.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x52366_52679){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute-paths","com.wsscode.pathom.connect/attribute-paths",-969708455),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-provides","com.wsscode.pathom.connect/attr-provides",-474523918),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via","com.wsscode.pathom.connect/attr-reach-via",-483841559),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-combinations","com.wsscode.pathom.connect/attr-combinations",-1163990806),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","weight","com.wsscode.pathom.viz.index-explorer/weight",-1488828976),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","reach","com.wsscode.pathom.viz.index-explorer/reach",1367373590)], null);
});})(x52366_52679))
;


var x52367_52680 = com.wsscode.pathom.viz.index_explorer.AttributeIndex.prototype;
x52367_52680.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x52367_52680.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x52367_52680){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x52367_52680))
;

x52367_52680.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x52367_52680.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x52367_52680){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute-paths","com.wsscode.pathom.connect/attribute-paths",-969708455),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-provides","com.wsscode.pathom.connect/attr-provides",-474523918),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via","com.wsscode.pathom.connect/attr-reach-via",-483841559),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-combinations","com.wsscode.pathom.connect/attr-combinations",-1163990806),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","weight","com.wsscode.pathom.viz.index-explorer/weight",-1488828976),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","reach","com.wsscode.pathom.viz.index-explorer/reach",1367373590)], null);
});})(x52367_52680))
;


com.wsscode.pathom.viz.index_explorer.AttributeIndex.cljs$lang$type = true;

com.wsscode.pathom.viz.index_explorer.AttributeIndex.cljs$lang$ctorStr = "com.wsscode.pathom.viz.index-explorer/AttributeIndex";

com.wsscode.pathom.viz.index_explorer.AttributeIndex.cljs$lang$ctorPrWriter = (function (this__44805__auto__,writer__44806__auto__,opt__44807__auto__){
return cljs.core._write(writer__44806__auto__,"com.wsscode.pathom.viz.index-explorer/AttributeIndex");
});
if((typeof com !== 'undefined') && (typeof com.wsscode !== 'undefined') && (typeof com.wsscode.pathom !== 'undefined') && (typeof com.wsscode.pathom.viz !== 'undefined') && (typeof com.wsscode.pathom.viz.index_explorer !== 'undefined') && (typeof com.wsscode.pathom.viz.index_explorer.ResolverIndex !== 'undefined')){
} else {
/**
 * @constructor
 * @nocollapse
 */
com.wsscode.pathom.viz.index_explorer.ResolverIndex = (function com$wsscode$pathom$viz$index_explorer$ResolverIndex(){
var this__44802__auto__ = this;
React.Component.apply(this__44802__auto__,arguments);

if((!((this__44802__auto__.initLocalState == null)))){
this__44802__auto__.state = this__44802__auto__.initLocalState();
} else {
this__44802__auto__.state = ({});
}

return this__44802__auto__;
});

goog.object.extend(com.wsscode.pathom.viz.index_explorer.ResolverIndex.prototype,React.Component.prototype,fulcro.client.primitives.default_component_prototype);
}

fulcro.client.primitives._register_component_BANG_(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","ResolverIndex","com.wsscode.pathom.viz.index-explorer/ResolverIndex",-1943751145),com.wsscode.pathom.viz.index_explorer.ResolverIndex);

var x52370_52681 = com.wsscode.pathom.viz.index_explorer.ResolverIndex.prototype;
x52370_52681.render = ((function (x52370_52681){
return (function (){
var this__43720__auto__ = this;
var _ = this__43720__auto__;
var _STAR_reconciler_STAR__orig_val__52371 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__52372 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__52373 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__52374 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__52375 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__52376 = fulcro.client.primitives.get_reconciler(this__43720__auto__);
var _STAR_depth_STAR__temp_val__52377 = (fulcro.client.primitives.depth(this__43720__auto__) + (1));
var _STAR_shared_STAR__temp_val__52378 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__43720__auto__);
var _STAR_instrument_STAR__temp_val__52379 = fulcro.client.primitives.instrument(this__43720__auto__);
var _STAR_parent_STAR__temp_val__52380 = this__43720__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__52376;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__52377;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__52378;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__52379;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__52380;

try{var ___$1 = fulcro.client.primitives.props(_);
return null;
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__52375;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__52374;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__52373;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__52372;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__52371;
}});})(x52370_52681))
;


com.wsscode.pathom.viz.index_explorer.ResolverIndex.prototype.constructor = com.wsscode.pathom.viz.index_explorer.ResolverIndex;

com.wsscode.pathom.viz.index_explorer.ResolverIndex.prototype.constructor.displayName = "com.wsscode.pathom.viz.index-explorer/ResolverIndex";

com.wsscode.pathom.viz.index_explorer.ResolverIndex.prototype.fulcro$isComponent = true;

var x52381_52682 = com.wsscode.pathom.viz.index_explorer.ResolverIndex;
x52381_52682.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x52381_52682.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x52381_52682){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x52381_52682))
;

x52381_52682.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x52381_52682.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x52381_52682){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795)], null);
});})(x52381_52682))
;


var x52382_52683 = com.wsscode.pathom.viz.index_explorer.ResolverIndex.prototype;
x52382_52683.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x52382_52683.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x52382_52683){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x52382_52683))
;

x52382_52683.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x52382_52683.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x52382_52683){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795)], null);
});})(x52382_52683))
;


com.wsscode.pathom.viz.index_explorer.ResolverIndex.cljs$lang$type = true;

com.wsscode.pathom.viz.index_explorer.ResolverIndex.cljs$lang$ctorStr = "com.wsscode.pathom.viz.index-explorer/ResolverIndex";

com.wsscode.pathom.viz.index_explorer.ResolverIndex.cljs$lang$ctorPrWriter = (function (this__44805__auto__,writer__44806__auto__,opt__44807__auto__){
return cljs.core._write(writer__44806__auto__,"com.wsscode.pathom.viz.index-explorer/ResolverIndex");
});
if((typeof com !== 'undefined') && (typeof com.wsscode !== 'undefined') && (typeof com.wsscode.pathom !== 'undefined') && (typeof com.wsscode.pathom.viz !== 'undefined') && (typeof com.wsscode.pathom.viz.index_explorer !== 'undefined') && (typeof com.wsscode.pathom.viz.index_explorer.MutationIndex !== 'undefined')){
} else {
/**
 * @constructor
 * @nocollapse
 */
com.wsscode.pathom.viz.index_explorer.MutationIndex = (function com$wsscode$pathom$viz$index_explorer$MutationIndex(){
var this__44802__auto__ = this;
React.Component.apply(this__44802__auto__,arguments);

if((!((this__44802__auto__.initLocalState == null)))){
this__44802__auto__.state = this__44802__auto__.initLocalState();
} else {
this__44802__auto__.state = ({});
}

return this__44802__auto__;
});

goog.object.extend(com.wsscode.pathom.viz.index_explorer.MutationIndex.prototype,React.Component.prototype,fulcro.client.primitives.default_component_prototype);
}

fulcro.client.primitives._register_component_BANG_(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","MutationIndex","com.wsscode.pathom.viz.index-explorer/MutationIndex",21487988),com.wsscode.pathom.viz.index_explorer.MutationIndex);

var x52385_52684 = com.wsscode.pathom.viz.index_explorer.MutationIndex.prototype;
x52385_52684.render = ((function (x52385_52684){
return (function (){
var this__43720__auto__ = this;
var _ = this__43720__auto__;
var _STAR_reconciler_STAR__orig_val__52386 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__52387 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__52388 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__52389 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__52390 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__52391 = fulcro.client.primitives.get_reconciler(this__43720__auto__);
var _STAR_depth_STAR__temp_val__52392 = (fulcro.client.primitives.depth(this__43720__auto__) + (1));
var _STAR_shared_STAR__temp_val__52393 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__43720__auto__);
var _STAR_instrument_STAR__temp_val__52394 = fulcro.client.primitives.instrument(this__43720__auto__);
var _STAR_parent_STAR__temp_val__52395 = this__43720__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__52391;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__52392;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__52393;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__52394;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__52395;

try{var ___$1 = fulcro.client.primitives.props(_);
return null;
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__52390;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__52389;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__52388;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__52387;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__52386;
}});})(x52385_52684))
;


com.wsscode.pathom.viz.index_explorer.MutationIndex.prototype.constructor = com.wsscode.pathom.viz.index_explorer.MutationIndex;

com.wsscode.pathom.viz.index_explorer.MutationIndex.prototype.constructor.displayName = "com.wsscode.pathom.viz.index-explorer/MutationIndex";

com.wsscode.pathom.viz.index_explorer.MutationIndex.prototype.fulcro$isComponent = true;

var x52396_52685 = com.wsscode.pathom.viz.index_explorer.MutationIndex;
x52396_52685.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x52396_52685.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x52396_52685){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutation-sym","com.wsscode.pathom.viz.index-explorer/mutation-sym",-191280951),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutation-sym","com.wsscode.pathom.viz.index-explorer/mutation-sym",-191280951).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x52396_52685))
;

x52396_52685.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x52396_52685.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x52396_52685){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutation-sym","com.wsscode.pathom.viz.index-explorer/mutation-sym",-191280951),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795)], null);
});})(x52396_52685))
;


var x52397_52686 = com.wsscode.pathom.viz.index_explorer.MutationIndex.prototype;
x52397_52686.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x52397_52686.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x52397_52686){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutation-sym","com.wsscode.pathom.viz.index-explorer/mutation-sym",-191280951),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutation-sym","com.wsscode.pathom.viz.index-explorer/mutation-sym",-191280951).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x52397_52686))
;

x52397_52686.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x52397_52686.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x52397_52686){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutation-sym","com.wsscode.pathom.viz.index-explorer/mutation-sym",-191280951),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795)], null);
});})(x52397_52686))
;


com.wsscode.pathom.viz.index_explorer.MutationIndex.cljs$lang$type = true;

com.wsscode.pathom.viz.index_explorer.MutationIndex.cljs$lang$ctorStr = "com.wsscode.pathom.viz.index-explorer/MutationIndex";

com.wsscode.pathom.viz.index_explorer.MutationIndex.cljs$lang$ctorPrWriter = (function (this__44805__auto__,writer__44806__auto__,opt__44807__auto__){
return cljs.core._write(writer__44806__auto__,"com.wsscode.pathom.viz.index-explorer/MutationIndex");
});
com.wsscode.pathom.viz.index_explorer.history_size_limit = (200);
com.wsscode.pathom.viz.index_explorer.history_append = (function com$wsscode$pathom$viz$index_explorer$history_append(p__52398,ref){
var map__52399 = p__52398;
var map__52399__$1 = (((((!((map__52399 == null))))?(((((map__52399.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52399.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52399):map__52399);
var x = map__52399__$1;
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52399__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","history","com.wsscode.pathom.viz.index-explorer/history",-288879737));
var history_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52399__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","history-index","com.wsscode.pathom.viz.index-explorer/history-index",-368029918));
var index = (history_index + (1));
var history_SINGLEQUOTE_ = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(history,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(index,com.wsscode.pathom.viz.index_explorer.history_size_limit))?(1):(0)),index),ref);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(x,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","history","com.wsscode.pathom.viz.index-explorer/history",-288879737),history_SINGLEQUOTE_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","history-index","com.wsscode.pathom.viz.index-explorer/history-index",-368029918),(cljs.core.count(history_SINGLEQUOTE_) - (1)),new cljs.core.Keyword("ui","page","ui/page",849066625),ref], 0));
});
fulcro.client.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("com.wsscode.pathom.viz.index-explorer","navigate-to-attribute","com.wsscode.pathom.viz.index-explorer/navigate-to-attribute",-1900563958,null),(function (fulcro_incoming_env,_,p__52401){
var map__52402 = p__52401;
var map__52402__$1 = (((((!((map__52402 == null))))?(((((map__52402.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52402.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52402):map__52402);
var attribute = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52402__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var map__52404 = fulcro_incoming_env;
var map__52404__$1 = (((((!((map__52404 == null))))?(((((map__52404.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52404.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52404):map__52404);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52404__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52404__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__52404,map__52404__$1,state,ref,map__52402,map__52402__$1,attribute){
return (function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,fulcro.client.primitives.merge_component,com.wsscode.pathom.viz.index_explorer.AttributeView,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),attribute], null));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.update_in,ref,com.wsscode.pathom.viz.index_explorer.history_append,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),attribute], null)], 0));
});})(map__52404,map__52404__$1,state,ref,map__52402,map__52402__$1,attribute))
], null);
})()], 0));
}));
fulcro.client.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("com.wsscode.pathom.viz.index-explorer","navigate-to-resolver","com.wsscode.pathom.viz.index-explorer/navigate-to-resolver",1471827576,null),(function (fulcro_incoming_env,_,p__52406){
var map__52407 = p__52406;
var map__52407__$1 = (((((!((map__52407 == null))))?(((((map__52407.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52407.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52407):map__52407);
var sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52407__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var map__52409 = fulcro_incoming_env;
var map__52409__$1 = (((((!((map__52409 == null))))?(((((map__52409.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52409.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52409):map__52409);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52409__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52409__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__52409,map__52409__$1,state,ref,map__52407,map__52407__$1,sym){
return (function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,fulcro.client.primitives.merge_component,com.wsscode.pathom.viz.index_explorer.ResolverView,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),sym], null));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.update_in,ref,com.wsscode.pathom.viz.index_explorer.history_append,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),sym], null)], 0));
});})(map__52409,map__52409__$1,state,ref,map__52407,map__52407__$1,sym))
], null);
})()], 0));
}));
fulcro.client.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("com.wsscode.pathom.viz.index-explorer","navigate-to-mutation","com.wsscode.pathom.viz.index-explorer/navigate-to-mutation",2015131713,null),(function (fulcro_incoming_env,_,p__52411){
var map__52412 = p__52411;
var map__52412__$1 = (((((!((map__52412 == null))))?(((((map__52412.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52412.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52412):map__52412);
var mutation_sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52412__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutation-sym","com.wsscode.pathom.viz.index-explorer/mutation-sym",-191280951));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var map__52414 = fulcro_incoming_env;
var map__52414__$1 = (((((!((map__52414 == null))))?(((((map__52414.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52414.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52414):map__52414);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52414__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52414__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__52414,map__52414__$1,state,ref,map__52412,map__52412__$1,mutation_sym){
return (function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,fulcro.client.primitives.merge_component,com.wsscode.pathom.viz.index_explorer.MutationView,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutation-sym","com.wsscode.pathom.viz.index-explorer/mutation-sym",-191280951),mutation_sym], null));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.update_in,ref,com.wsscode.pathom.viz.index_explorer.history_append,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutation-sym","com.wsscode.pathom.viz.index-explorer/mutation-sym",-191280951),mutation_sym], null)], 0));
});})(map__52414,map__52414__$1,state,ref,map__52412,map__52412__$1,mutation_sym))
], null);
})()], 0));
}));
fulcro.client.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("com.wsscode.pathom.viz.index-explorer","navigate-stats","com.wsscode.pathom.viz.index-explorer/navigate-stats",-1515292229,null),(function (fulcro_incoming_env,_,___$1){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var map__52416 = fulcro_incoming_env;
var map__52416__$1 = (((((!((map__52416 == null))))?(((((map__52416.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52416.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52416):map__52416);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52416__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52416__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__52416,map__52416__$1,state,ref){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.update_in,ref,com.wsscode.pathom.viz.index_explorer.history_append,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ref], 0));
});})(map__52416,map__52416__$1,state,ref))
], null);
})()], 0));
}));
fulcro.client.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("com.wsscode.pathom.viz.index-explorer","navigate-graph-view","com.wsscode.pathom.viz.index-explorer/navigate-graph-view",-277547314,null),(function (fulcro_incoming_env,_,___$1){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var map__52418 = fulcro_incoming_env;
var map__52418__$1 = (((((!((map__52418 == null))))?(((((map__52418.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52418.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52418):map__52418);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52418__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52418__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__52418,map__52418__$1,state,ref){
return (function (){
var id = cljs.core.second(ref);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,fulcro.client.primitives.merge_component,com.wsscode.pathom.viz.index_explorer.FullGraphView,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","graph-view-id","com.wsscode.pathom.viz.index-explorer/graph-view-id",211965428),id], null));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.update_in,ref,com.wsscode.pathom.viz.index_explorer.history_append,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","graph-view-id","com.wsscode.pathom.viz.index-explorer/graph-view-id",211965428),id], null)], 0));
});})(map__52418,map__52418__$1,state,ref))
], null);
})()], 0));
}));
com.wsscode.pathom.viz.index_explorer.can_go_back_QMARK_ = (function com$wsscode$pathom$viz$index_explorer$can_go_back_QMARK_(p__52420){
var map__52421 = p__52420;
var map__52421__$1 = (((((!((map__52421 == null))))?(((((map__52421.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52421.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52421):map__52421);
var history_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52421__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","history-index","com.wsscode.pathom.viz.index-explorer/history-index",-368029918));
return (history_index > (0));
});
com.wsscode.pathom.viz.index_explorer.can_go_forward_QMARK_ = (function com$wsscode$pathom$viz$index_explorer$can_go_forward_QMARK_(p__52423){
var map__52424 = p__52423;
var map__52424__$1 = (((((!((map__52424 == null))))?(((((map__52424.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52424.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52424):map__52424);
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52424__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","history","com.wsscode.pathom.viz.index-explorer/history",-288879737));
var history_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52424__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","history-index","com.wsscode.pathom.viz.index-explorer/history-index",-368029918));
return (history_index < (cljs.core.count(history) - (1)));
});
fulcro.client.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("com.wsscode.pathom.viz.index-explorer","navigate-backwards","com.wsscode.pathom.viz.index-explorer/navigate-backwards",1747967871,null),(function (fulcro_incoming_env,_,___$1){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var map__52426 = fulcro_incoming_env;
var map__52426__$1 = (((((!((map__52426 == null))))?(((((map__52426.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52426.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52426):map__52426);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52426__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52426__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__52426,map__52426__$1,state,ref){
return (function (){
var map__52428 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),ref);
var map__52428__$1 = (((((!((map__52428 == null))))?(((((map__52428.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52428.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52428):map__52428);
var props = map__52428__$1;
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52428__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","history","com.wsscode.pathom.viz.index-explorer/history",-288879737));
var history_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52428__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","history-index","com.wsscode.pathom.viz.index-explorer/history-index",-368029918));
if(com.wsscode.pathom.viz.index_explorer.can_go_back_QMARK_(props)){
var page = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(history,(history_index - (1)));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.update_in,ref,cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("ui","page","ui/page",849066625),page,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","history-index","com.wsscode.pathom.viz.index-explorer/history-index",-368029918),(history_index - (1))], 0));
} else {
return null;
}
});})(map__52426,map__52426__$1,state,ref))
], null);
})()], 0));
}));
fulcro.client.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("com.wsscode.pathom.viz.index-explorer","navigate-forwards","com.wsscode.pathom.viz.index-explorer/navigate-forwards",-2084817330,null),(function (fulcro_incoming_env,_,___$1){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var map__52430 = fulcro_incoming_env;
var map__52430__$1 = (((((!((map__52430 == null))))?(((((map__52430.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52430.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52430):map__52430);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52430__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52430__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__52430,map__52430__$1,state,ref){
return (function (){
var map__52432 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),ref);
var map__52432__$1 = (((((!((map__52432 == null))))?(((((map__52432.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52432.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52432):map__52432);
var props = map__52432__$1;
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52432__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","history","com.wsscode.pathom.viz.index-explorer/history",-288879737));
var history_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52432__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","history-index","com.wsscode.pathom.viz.index-explorer/history-index",-368029918));
if(com.wsscode.pathom.viz.index_explorer.can_go_forward_QMARK_(props)){
var page = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(history,(history_index + (1)));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.update_in,ref,cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("ui","page","ui/page",849066625),page,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","history-index","com.wsscode.pathom.viz.index-explorer/history-index",-368029918),(history_index + (1))], 0));
} else {
return null;
}
});})(map__52430,map__52430__$1,state,ref))
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
var this__44802__auto__ = this;
React.Component.apply(this__44802__auto__,arguments);

if((!((this__44802__auto__.initLocalState == null)))){
this__44802__auto__.state = this__44802__auto__.initLocalState();
} else {
this__44802__auto__.state = ({});
}

return this__44802__auto__;
});

goog.object.extend(com.wsscode.pathom.viz.index_explorer.IndexExplorer.prototype,React.Component.prototype,fulcro.client.primitives.default_component_prototype);
}

fulcro.client.primitives._register_component_BANG_(new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","IndexExplorer","com.wsscode.pathom.viz.index-explorer/IndexExplorer",493663752),com.wsscode.pathom.viz.index_explorer.IndexExplorer);

var x52439_52687 = com.wsscode.pathom.viz.index_explorer.IndexExplorer.prototype;
x52439_52687.render = ((function (x52439_52687){
return (function (){
var this__43720__auto__ = this;
var this$ = this__43720__auto__;
var _STAR_reconciler_STAR__orig_val__52440 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__52441 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__52442 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__52443 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__52444 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__52445 = fulcro.client.primitives.get_reconciler(this__43720__auto__);
var _STAR_depth_STAR__temp_val__52446 = (fulcro.client.primitives.depth(this__43720__auto__) + (1));
var _STAR_shared_STAR__temp_val__52447 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__43720__auto__);
var _STAR_instrument_STAR__temp_val__52448 = fulcro.client.primitives.instrument(this__43720__auto__);
var _STAR_parent_STAR__temp_val__52449 = this__43720__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__52445;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__52446;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__52447;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__52448;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__52449;

try{var map__52450 = fulcro.client.primitives.props(this$);
var map__52450__$1 = (((((!((map__52450 == null))))?(((((map__52450.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52450.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52450):map__52450);
var props = map__52450__$1;
var index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52450__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","index","com.wsscode.pathom.viz.index-explorer/index",-1539481252));
var attributes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52450__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attributes","com.wsscode.pathom.viz.index-explorer/attributes",-67264281));
var menu = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52450__$1,new cljs.core.Keyword("ui","menu","ui/menu",352268114));
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52450__$1,new cljs.core.Keyword("ui","page","ui/page",849066625));
var extensions = fulcro.client.primitives.get_computed.cljs$core$IFn$_invoke$arity$1(this$);
var G__52452 = goog.object.get(com.wsscode.pathom.viz.index_explorer.ExtensionContext,"Provider");
var G__52453 = ({"value": extensions});
var G__52454 = (function (){var G__52455 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"react-key","react-key",1337881348),"container",new cljs.core.Keyword(null,"classes","classes",2037804510),com.wsscode.pathom.viz.ui.kit.ccss.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".out-container",".out-container",-265742466)], 0))], null);
var G__52456 = (function (){var G__52458 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"classes","classes",2037804510),com.wsscode.pathom.viz.ui.kit.ccss.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".menu",".menu",986259874)], 0))], null);
var G__52459 = (function (){var G__52460 = menu;
var G__52461 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","on-select-attribute","com.wsscode.pathom.viz.index-explorer/on-select-attribute",2006419034),fulcro.client.primitives.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"select-attribute","select-attribute",-65313489)),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","on-select-resolver","com.wsscode.pathom.viz.index-explorer/on-select-resolver",1600914463),fulcro.client.primitives.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"select-resolver","select-resolver",43705318)),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","on-select-mutation","com.wsscode.pathom.viz.index-explorer/on-select-mutation",2007280602),fulcro.client.primitives.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"select-mutation","select-mutation",-1215580866))], null);
return (com.wsscode.pathom.viz.index_explorer.search_everything.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.index_explorer.search_everything.cljs$core$IFn$_invoke$arity$2(G__52460,G__52461) : com.wsscode.pathom.viz.index_explorer.search_everything.call(null,G__52460,G__52461));
})();
return (com.wsscode.pathom.viz.ui.kit.column.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.column.cljs$core$IFn$_invoke$arity$2(G__52458,G__52459) : com.wsscode.pathom.viz.ui.kit.column.call(null,G__52458,G__52459));
})();
var G__52457 = (function (){var G__52462 = com.wsscode.pathom.viz.ui.kit.gc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".flex",".flex",-73425686),new cljs.core.Keyword(null,".no-scrollbars",".no-scrollbars",2090539071)], 0));
var G__52463 = (function (){var G__52465 = cljs.core.PersistentArrayMap.EMPTY;
var G__52466 = (function (){var G__52470 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),fulcro.client.primitives.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"go-back","go-back",1642157803)),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),(!(com.wsscode.pathom.viz.index_explorer.can_go_back_QMARK_(props)))], null);
var G__52471 = "\u25C0";
return (com.wsscode.pathom.viz.ui.kit.button.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.button.cljs$core$IFn$_invoke$arity$2(G__52470,G__52471) : com.wsscode.pathom.viz.ui.kit.button.call(null,G__52470,G__52471));
})();
var G__52467 = (function (){var G__52472 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),fulcro.client.primitives.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"go-forward","go-forward",666578902)),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),(!(com.wsscode.pathom.viz.index_explorer.can_go_forward_QMARK_(props)))], null);
var G__52473 = "\u25B6";
return (com.wsscode.pathom.viz.ui.kit.button.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.button.cljs$core$IFn$_invoke$arity$2(G__52472,G__52473) : com.wsscode.pathom.viz.ui.kit.button.call(null,G__52472,G__52473));
})();
var G__52468 = (function (){var G__52474 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),fulcro.client.primitives.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"go-stats","go-stats",156008525)),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(com.wsscode.pathom.viz.index_explorer.main_view_ident(page),fulcro.client.primitives.get_ident.cljs$core$IFn$_invoke$arity$1(this$)),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"marginLeft","marginLeft",-551287007),"12px"], null)], null);
var G__52475 = "Stats";
return (com.wsscode.pathom.viz.ui.kit.button.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.button.cljs$core$IFn$_invoke$arity$2(G__52474,G__52475) : com.wsscode.pathom.viz.ui.kit.button.call(null,G__52474,G__52475));
})();
var G__52469 = (function (){var G__52476 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),fulcro.client.primitives.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"go-graph-view","go-graph-view",473251058)),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(com.wsscode.pathom.viz.index_explorer.main_view_ident(page)),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","graph-view-id","com.wsscode.pathom.viz.index-explorer/graph-view-id",211965428)),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"marginLeft","marginLeft",-551287007),"12px"], null)], null);
var G__52477 = "Full Graph";
return (com.wsscode.pathom.viz.ui.kit.button.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.ui.kit.button.cljs$core$IFn$_invoke$arity$2(G__52476,G__52477) : com.wsscode.pathom.viz.ui.kit.button.call(null,G__52476,G__52477));
})();
return (com.wsscode.pathom.viz.ui.kit.row.cljs$core$IFn$_invoke$arity$5 ? com.wsscode.pathom.viz.ui.kit.row.cljs$core$IFn$_invoke$arity$5(G__52465,G__52466,G__52467,G__52468,G__52469) : com.wsscode.pathom.viz.ui.kit.row.call(null,G__52465,G__52466,G__52467,G__52468,G__52469));
})();
var G__52464 = (cljs.core.truth_(page)?com.wsscode.pathom.viz.index_explorer.main_view_union(page,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(index,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attributes","com.wsscode.pathom.viz.index-explorer/attributes",-67264281),attributes,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","on-select-attribute","com.wsscode.pathom.viz.index-explorer/on-select-attribute",2006419034),fulcro.client.primitives.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"select-attribute","select-attribute",-65313489)),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","on-select-resolver","com.wsscode.pathom.viz.index-explorer/on-select-resolver",1600914463),fulcro.client.primitives.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"select-resolver","select-resolver",43705318)),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","on-select-mutation","com.wsscode.pathom.viz.index-explorer/on-select-mutation",2007280602),fulcro.client.primitives.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"select-mutation","select-mutation",-1215580866))], 0))):null);
return (com.wsscode.pathom.viz.ui.kit.column.cljs$core$IFn$_invoke$arity$3 ? com.wsscode.pathom.viz.ui.kit.column.cljs$core$IFn$_invoke$arity$3(G__52462,G__52463,G__52464) : com.wsscode.pathom.viz.ui.kit.column.call(null,G__52462,G__52463,G__52464));
})();
return (com.wsscode.pathom.viz.ui.kit.row.cljs$core$IFn$_invoke$arity$3 ? com.wsscode.pathom.viz.ui.kit.row.cljs$core$IFn$_invoke$arity$3(G__52455,G__52456,G__52457) : com.wsscode.pathom.viz.ui.kit.row.call(null,G__52455,G__52456,G__52457));
})();
return (fulcro.client.localized_dom.create_element.cljs$core$IFn$_invoke$arity$3 ? fulcro.client.localized_dom.create_element.cljs$core$IFn$_invoke$arity$3(G__52452,G__52453,G__52454) : fulcro.client.localized_dom.create_element.call(null,G__52452,G__52453,G__52454));
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__52444;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__52443;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__52442;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__52441;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__52440;
}});})(x52439_52687))
;

x52439_52687.initLocalState = ((function (x52439_52687){
return (function (){
var this$ = this;
var ret__43695__auto__ = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"select-attribute","select-attribute",-65313489),((function (this$,x52439_52687){
return (function (p1__52434_SHARP_){
return fulcro.client.primitives.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("com.wsscode.pathom.viz.index-explorer","navigate-to-attribute","com.wsscode.pathom.viz.index-explorer/navigate-to-attribute",-1900563958,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),null,(1),null)),(new cljs.core.List(null,p1__52434_SHARP_,null,(1),null)))))),null,(1),null)))))], null));
});})(this$,x52439_52687))
,new cljs.core.Keyword(null,"select-resolver","select-resolver",43705318),((function (this$,x52439_52687){
return (function (p1__52435_SHARP_){
return fulcro.client.primitives.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("com.wsscode.pathom.viz.index-explorer","navigate-to-resolver","com.wsscode.pathom.viz.index-explorer/navigate-to-resolver",1471827576,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),null,(1),null)),(new cljs.core.List(null,p1__52435_SHARP_,null,(1),null)))))),null,(1),null)))))], null));
});})(this$,x52439_52687))
,new cljs.core.Keyword(null,"select-mutation","select-mutation",-1215580866),((function (this$,x52439_52687){
return (function (p1__52436_SHARP_){
return fulcro.client.primitives.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("com.wsscode.pathom.viz.index-explorer","navigate-to-mutation","com.wsscode.pathom.viz.index-explorer/navigate-to-mutation",2015131713,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutation-sym","com.wsscode.pathom.viz.index-explorer/mutation-sym",-191280951),null,(1),null)),(new cljs.core.List(null,p1__52436_SHARP_,null,(1),null)))))),null,(1),null)))))], null));
});})(this$,x52439_52687))
,new cljs.core.Keyword(null,"go-back","go-back",1642157803),((function (this$,x52439_52687){
return (function (){
return fulcro.client.primitives.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol("com.wsscode.pathom.viz.index-explorer","navigate-backwards","com.wsscode.pathom.viz.index-explorer/navigate-backwards",1747967871,null),null,(1),null)))))], null));
});})(this$,x52439_52687))
,new cljs.core.Keyword(null,"go-forward","go-forward",666578902),((function (this$,x52439_52687){
return (function (){
return fulcro.client.primitives.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol("com.wsscode.pathom.viz.index-explorer","navigate-forwards","com.wsscode.pathom.viz.index-explorer/navigate-forwards",-2084817330,null),null,(1),null)))))], null));
});})(this$,x52439_52687))
,new cljs.core.Keyword(null,"go-stats","go-stats",156008525),((function (this$,x52439_52687){
return (function (){
return fulcro.client.primitives.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol("com.wsscode.pathom.viz.index-explorer","navigate-stats","com.wsscode.pathom.viz.index-explorer/navigate-stats",-1515292229,null),null,(1),null)))))], null));
});})(this$,x52439_52687))
,new cljs.core.Keyword(null,"go-graph-view","go-graph-view",473251058),((function (this$,x52439_52687){
return (function (){
return fulcro.client.primitives.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol("com.wsscode.pathom.viz.index-explorer","navigate-graph-view","com.wsscode.pathom.viz.index-explorer/navigate-graph-view",-277547314,null),null,(1),null)))))], null));
});})(this$,x52439_52687))
], null);
var obj52479 = ({"fulcro$state":ret__43695__auto__});
return obj52479;
});})(x52439_52687))
;


com.wsscode.pathom.viz.index_explorer.IndexExplorer.prototype.constructor = com.wsscode.pathom.viz.index_explorer.IndexExplorer;

com.wsscode.pathom.viz.index_explorer.IndexExplorer.prototype.constructor.displayName = "com.wsscode.pathom.viz.index-explorer/IndexExplorer";

com.wsscode.pathom.viz.index_explorer.IndexExplorer.prototype.fulcro$isComponent = true;

var x52480_52688 = com.wsscode.pathom.viz.index_explorer.IndexExplorer;
x52480_52688.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x52480_52688.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x52480_52688){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".out-container",".out-container",-265742466),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"flex","flex",-1425124628),"1"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"flex","flex",-1425124628),"1",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"hidden"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".graph",".graph",-327673667),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"height","height",1025178622),"800px",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #000"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".menu",".menu",986259874),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"16px",new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),"16px",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"auto",new cljs.core.Keyword(null,"width","width",-384071477),"30%"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"$row-center","$row-center",-1606740968),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"$scrollbars","$scrollbars",938627053),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"overflow","overflow",2058931880),"auto"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"$tag-spaced","$tag-spaced",-1216528780),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"$tag","$tag",1471772486),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"4px"], null)], null)], null)], null);
});})(x52480_52688))
;

x52480_52688.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x52480_52688){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.viz.index_explorer.AttributeLink,com.wsscode.pathom.viz.index_explorer.ResolverLink,com.wsscode.pathom.viz.index_explorer.MutationLink,com.wsscode.pathom.viz.ui.kit.UIKit], null);
});})(x52480_52688))
;

x52480_52688.fulcro$client$primitives$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

x52480_52688.fulcro$client$primitives$InitialAppState$initial_state$arity$2 = ((function (x52480_52688){
return (function (c,params){
var c__$1 = this;
return fulcro.client.primitives.make_state_map(cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword("ui","page","ui/page",849066625),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","resolvers","com.wsscode.pathom.viz.index-explorer/resolvers",-1064744669),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-type-mismatch","com.wsscode.pathom.viz.index-explorer/attr-type-mismatch",-1230484441),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attributes","com.wsscode.pathom.viz.index-explorer/attributes",-67264281),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","idents","com.wsscode.pathom.viz.index-explorer/idents",189283656),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","top-connection-hubs","com.wsscode.pathom.viz.index-explorer/top-connection-hubs",1843947657),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","globals","com.wsscode.pathom.viz.index-explorer/globals",1704747305),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutations","com.wsscode.pathom.viz.index-explorer/mutations",329050290),new cljs.core.Keyword("ui","menu","ui/menu",352268114)],[com.wsscode.pathom.viz.index_explorer.MainViewUnion,com.wsscode.pathom.viz.index_explorer.ResolverIndex,com.wsscode.pathom.viz.index_explorer.AttributeIndex,com.wsscode.pathom.viz.index_explorer.AttributeIndex,com.wsscode.pathom.viz.index_explorer.AttributeIndex,com.wsscode.pathom.viz.index_explorer.AttributeIndex,com.wsscode.pathom.viz.index_explorer.AttributeIndex,com.wsscode.pathom.viz.index_explorer.MutationIndex,com.wsscode.pathom.viz.index_explorer.SearchEverything]),params);
});})(x52480_52688))
;

x52480_52688.fulcro$client$primitives$IPreMerge$ = cljs.core.PROTOCOL_SENTINEL;

x52480_52688.fulcro$client$primitives$IPreMerge$pre_merge_STAR_$arity$2 = ((function (x52480_52688){
return (function (this$,p__52481){
var map__52482 = p__52481;
var map__52482__$1 = (((((!((map__52482 == null))))?(((((map__52482.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52482.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52482):map__52482);
var current_normalized = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52482__$1,new cljs.core.Keyword(null,"current-normalized","current-normalized",851723724));
var data_tree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52482__$1,new cljs.core.Keyword(null,"data-tree","data-tree",1311167582));
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
});})(x52480_52688))
;

x52480_52688.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x52480_52688.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x52480_52688){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x52480_52688))
;

x52480_52688.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x52480_52688.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x52480_52688){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","index","com.wsscode.pathom.viz.index-explorer/index",-1539481252),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","idx","com.wsscode.pathom.viz.index-explorer/idx",1045759782),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","history","com.wsscode.pathom.viz.index-explorer/history",-288879737),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","history-index","com.wsscode.pathom.viz.index-explorer/history-index",-368029918),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","menu","ui/menu",352268114),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.SearchEverything)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attributes","com.wsscode.pathom.viz.index-explorer/attributes",-67264281),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.AttributeIndex)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","globals","com.wsscode.pathom.viz.index-explorer/globals",1704747305),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.AttributeIndex)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","idents","com.wsscode.pathom.viz.index-explorer/idents",189283656),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.AttributeIndex)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","top-connection-hubs","com.wsscode.pathom.viz.index-explorer/top-connection-hubs",1843947657),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.AttributeIndex)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-type-mismatch","com.wsscode.pathom.viz.index-explorer/attr-type-mismatch",-1230484441),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.AttributeIndex)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","resolvers","com.wsscode.pathom.viz.index-explorer/resolvers",-1064744669),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.ResolverIndex)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutations","com.wsscode.pathom.viz.index-explorer/mutations",329050290),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.MutationIndex)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","page","ui/page",849066625),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.MainViewUnion)], null)], null);
});})(x52480_52688))
;


var x52484_52689 = com.wsscode.pathom.viz.index_explorer.IndexExplorer.prototype;
x52484_52689.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x52484_52689.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x52484_52689){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".out-container",".out-container",-265742466),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"flex","flex",-1425124628),"1"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"flex","flex",-1425124628),"1",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"hidden"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".graph",".graph",-327673667),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"height","height",1025178622),"800px",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #000"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".menu",".menu",986259874),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"16px",new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),"16px",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"auto",new cljs.core.Keyword(null,"width","width",-384071477),"30%"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"$row-center","$row-center",-1606740968),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"$scrollbars","$scrollbars",938627053),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"overflow","overflow",2058931880),"auto"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"$tag-spaced","$tag-spaced",-1216528780),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"$tag","$tag",1471772486),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"4px"], null)], null)], null)], null);
});})(x52484_52689))
;

x52484_52689.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x52484_52689){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.viz.index_explorer.AttributeLink,com.wsscode.pathom.viz.index_explorer.ResolverLink,com.wsscode.pathom.viz.index_explorer.MutationLink,com.wsscode.pathom.viz.ui.kit.UIKit], null);
});})(x52484_52689))
;

x52484_52689.fulcro$client$primitives$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

x52484_52689.fulcro$client$primitives$InitialAppState$initial_state$arity$2 = ((function (x52484_52689){
return (function (c,params){
var c__$1 = this;
return fulcro.client.primitives.make_state_map(cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword("ui","page","ui/page",849066625),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","resolvers","com.wsscode.pathom.viz.index-explorer/resolvers",-1064744669),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-type-mismatch","com.wsscode.pathom.viz.index-explorer/attr-type-mismatch",-1230484441),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attributes","com.wsscode.pathom.viz.index-explorer/attributes",-67264281),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","idents","com.wsscode.pathom.viz.index-explorer/idents",189283656),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","top-connection-hubs","com.wsscode.pathom.viz.index-explorer/top-connection-hubs",1843947657),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","globals","com.wsscode.pathom.viz.index-explorer/globals",1704747305),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutations","com.wsscode.pathom.viz.index-explorer/mutations",329050290),new cljs.core.Keyword("ui","menu","ui/menu",352268114)],[com.wsscode.pathom.viz.index_explorer.MainViewUnion,com.wsscode.pathom.viz.index_explorer.ResolverIndex,com.wsscode.pathom.viz.index_explorer.AttributeIndex,com.wsscode.pathom.viz.index_explorer.AttributeIndex,com.wsscode.pathom.viz.index_explorer.AttributeIndex,com.wsscode.pathom.viz.index_explorer.AttributeIndex,com.wsscode.pathom.viz.index_explorer.AttributeIndex,com.wsscode.pathom.viz.index_explorer.MutationIndex,com.wsscode.pathom.viz.index_explorer.SearchEverything]),params);
});})(x52484_52689))
;

x52484_52689.fulcro$client$primitives$IPreMerge$ = cljs.core.PROTOCOL_SENTINEL;

x52484_52689.fulcro$client$primitives$IPreMerge$pre_merge_STAR_$arity$2 = ((function (x52484_52689){
return (function (this$,p__52485){
var map__52486 = p__52485;
var map__52486__$1 = (((((!((map__52486 == null))))?(((((map__52486.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52486.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52486):map__52486);
var current_normalized = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52486__$1,new cljs.core.Keyword(null,"current-normalized","current-normalized",851723724));
var data_tree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52486__$1,new cljs.core.Keyword(null,"data-tree","data-tree",1311167582));
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
});})(x52484_52689))
;

x52484_52689.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x52484_52689.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x52484_52689){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x52484_52689))
;

x52484_52689.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x52484_52689.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x52484_52689){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","id","com.wsscode.pathom.viz.index-explorer/id",-1428834625),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","index","com.wsscode.pathom.viz.index-explorer/index",-1539481252),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","idx","com.wsscode.pathom.viz.index-explorer/idx",1045759782),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","history","com.wsscode.pathom.viz.index-explorer/history",-288879737),new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","history-index","com.wsscode.pathom.viz.index-explorer/history-index",-368029918),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","menu","ui/menu",352268114),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.SearchEverything)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attributes","com.wsscode.pathom.viz.index-explorer/attributes",-67264281),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.AttributeIndex)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","globals","com.wsscode.pathom.viz.index-explorer/globals",1704747305),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.AttributeIndex)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","idents","com.wsscode.pathom.viz.index-explorer/idents",189283656),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.AttributeIndex)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","top-connection-hubs","com.wsscode.pathom.viz.index-explorer/top-connection-hubs",1843947657),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.AttributeIndex)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","attr-type-mismatch","com.wsscode.pathom.viz.index-explorer/attr-type-mismatch",-1230484441),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.AttributeIndex)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","resolvers","com.wsscode.pathom.viz.index-explorer/resolvers",-1064744669),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.ResolverIndex)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","mutations","com.wsscode.pathom.viz.index-explorer/mutations",329050290),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.MutationIndex)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","page","ui/page",849066625),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.MainViewUnion)], null)], null);
});})(x52484_52689))
;


com.wsscode.pathom.viz.index_explorer.IndexExplorer.cljs$lang$type = true;

com.wsscode.pathom.viz.index_explorer.IndexExplorer.cljs$lang$ctorStr = "com.wsscode.pathom.viz.index-explorer/IndexExplorer";

com.wsscode.pathom.viz.index_explorer.IndexExplorer.cljs$lang$ctorPrWriter = (function (this__44805__auto__,writer__44806__auto__,opt__44807__auto__){
return cljs.core._write(writer__44806__auto__,"com.wsscode.pathom.viz.index-explorer/IndexExplorer");
});
com.wsscode.pathom.viz.index_explorer.index_explorer = fulcro.client.primitives.computed_factory.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.index_explorer.IndexExplorer);

//# sourceMappingURL=com.wsscode.pathom.viz.index_explorer.js.map
