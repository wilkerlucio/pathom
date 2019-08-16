var module$node_modules$d3$dist$d3_node = shadow.js.require("module$node_modules$d3$dist$d3_node", {});
/** @const */ var DEFAULTS$$module$com$wsscode$pathom$viz$d3_attribute_graph = {showDetails:function() {
}};
function init$$module$com$wsscode$pathom$viz$d3_attribute_graph(element, settings) {
  /** @const */ var svg = module$node_modules$d3$dist$d3_node.select(element);
  return Object.assign({}, DEFAULTS$$module$com$wsscode$pathom$viz$d3_attribute_graph, settings, {svg:svg, element:element});
}
function render$$module$com$wsscode$pathom$viz$d3_attribute_graph(element, data) {
  /** @const */ var settings = init$$module$com$wsscode$pathom$viz$d3_attribute_graph(element, data);
  /** @const */ var $jscomp$destructuring$var12 = settings;
  /** @const */ var svg = $jscomp$destructuring$var12.svg;
  /** @const */ var svgWidth = $jscomp$destructuring$var12.svgWidth;
  /** @const */ var svgHeight = $jscomp$destructuring$var12.svgHeight;
  /** @const */ var showDetails = $jscomp$destructuring$var12.showDetails;
  /** @const */ var onClickEdge = $jscomp$destructuring$var12.onClickEdge;
  /** @const */ var colorScale = module$node_modules$d3$dist$d3_node.scaleOrdinal(module$node_modules$d3$dist$d3_node.schemeCategory10);
  svg.attr("width", svgWidth).attr("height", svgHeight);
  /** @const */ var $jscomp$destructuring$var13 = settings.data;
  /** @const */ var nodes = $jscomp$destructuring$var13.nodes;
  /** @const */ var links = $jscomp$destructuring$var13.links;
  /** @const */ var container = svg.append("g");
  /** @const */ var zoom = module$node_modules$d3$dist$d3_node.zoom().on("zoom", function() {
    container.attr("transform", module$node_modules$d3$dist$d3_node.event.transform);
  });
  svg.call(zoom);
  svg.append("svg:defs").selectAll("marker").data(["arrow-provides", "arrow-reaches"]).join("svg:marker").attr("id", function(d) {
    return d;
  }).attr("viewBox", "0 -5 10 10").attr("refX", 15).attr("refY", 0).attr("markerWidth", 6).attr("markerHeight", 6).attr("markerUnits", "userSpaceOnUse").attr("orient", "auto").attr("class", function(d) {
    return "pathom-viz-index-explorer-" + d;
  }).append("svg:path").attr("d", "M0,-5L10,0L0,5");
  /** @const */ var simulation = module$node_modules$d3$dist$d3_node.forceSimulation(nodes).force("link", module$node_modules$d3$dist$d3_node.forceLink(links).id(function(d) {
    return d.attribute;
  }).distance(90).strength(0.1)).force("charge", module$node_modules$d3$dist$d3_node.forceManyBody().strength(-60)).force("collision", module$node_modules$d3$dist$d3_node.forceCollide().radius(function(d) {
    return d.radius * 1.6;
  })).force("center", module$node_modules$d3$dist$d3_node.forceCenter(svgWidth / 2, svgHeight / 2));
  settings.simulation = simulation;
  /** @const */ var linksIndex = {};
  /** @const */ var highlightEdge = function(resolvers) {
    if (linksIndex[resolvers]) {
      linksIndex[resolvers].forEach(function(line) {
        line.classed("pathom-viz-index-explorer-attr-link-focus-highlight", true);
      });
      label.html(resolvers);
    }
  };
  /** @const */ var unhighlightEdge = function(resolvers) {
    if (linksIndex[resolvers]) {
      linksIndex[resolvers].forEach(function(line) {
        line.classed("pathom-viz-index-explorer-attr-link-focus-highlight", false);
      });
      label.html("");
    }
  };
  settings.highlightEdge = highlightEdge;
  settings.unhighlightEdge = unhighlightEdge;
  /** @const */ var link = container.append("g").selectAll("line").data(links).join("svg:path").attr("class", "pathom-viz-index-explorer-attr-link").attr("marker-end", "url(#arrow-provides)").classed("pathom-viz-index-explorer-attr-link-deep", function(d) {
    return d.deep;
  }).each(function(d) {
    d.ownerLine = module$node_modules$d3$dist$d3_node.select(this);
    /** @const */ var lines = linksIndex[d.resolvers] || [];
    lines.push(d.ownerLine);
    linksIndex[d.resolvers] = lines;
  }).on("click", function($jscomp$destructuring$var14) {
    var $jscomp$destructuring$var15 = $jscomp$destructuring$var14;
    var resolvers = $jscomp$destructuring$var15.resolvers;
    onClickEdge({resolvers:resolvers});
  }).on("mouseenter", function(d) {
    highlightEdge(d.resolvers);
  }).on("mouseleave", function(d) {
    unhighlightEdge(d.resolvers);
  });
  /** @const */ var drag = function(simulation) {
    function dragstarted(d) {
      if (!module$node_modules$d3$dist$d3_node.event.active) {
        simulation.alphaTarget(0.3).restart();
      }
      d.fx = d.x;
      d.fy = d.y;
    }
    function dragged(d) {
      d.fx = module$node_modules$d3$dist$d3_node.event.x;
      d.fy = module$node_modules$d3$dist$d3_node.event.y;
    }
    function dragended(d) {
      if (!module$node_modules$d3$dist$d3_node.event.active) {
        simulation.alphaTarget(0);
      }
      d.fx = null;
      d.fy = null;
    }
    return module$node_modules$d3$dist$d3_node.drag().on("start", dragstarted).on("drag", dragged).on("end", dragended);
  };
  /** @const */ var highlight = function(d) {
    d.nodeElement.classed("pathom-viz-index-explorer-attr-node-highlight", true);
    d.lineTargets.forEach(function(line) {
      line.ownerLine.classed("pathom-viz-index-explorer-attr-link-target-highlight", true);
    });
    d.lineSources.forEach(function(line) {
      line.ownerLine.classed("pathom-viz-index-explorer-attr-link-source-highlight", true);
    });
    return label.html(d.attribute);
  };
  /** @const */ var unhighlight = function(d) {
    d.nodeElement.classed("pathom-viz-index-explorer-attr-node-highlight", false);
    d.lineTargets.forEach(function(line) {
      line.ownerLine.classed("pathom-viz-index-explorer-attr-link-target-highlight", false);
    });
    d.lineSources.forEach(function(line) {
      line.ownerLine.classed("pathom-viz-index-explorer-attr-link-source-highlight", false);
    });
    return label.html("");
  };
  settings.highlightNode = function(id) {
    /** @const */ var d = nodes.find(function(x) {
      return x.attribute === id;
    });
    if (d) {
      highlight(d);
    }
  };
  settings.unhighlightNode = function(id) {
    /** @const */ var d = nodes.find(function(x) {
      return x.attribute === id;
    });
    if (d) {
      unhighlight(d);
    }
  };
  /** @const */ var extractNs = function(str) {
    if (str.startsWith("#")) {
      return null;
    }
    /** @const */ var parts = str.split("/");
    if (parts.length > 1) {
      return parts[0].substr(1);
    }
    return null;
  };
  /** @const */ var node = container.append("g").selectAll("circle").data(nodes).join("circle").attr("class", "pathom-viz-index-explorer-attr-node").classed("pathom-viz-index-explorer-attr-node-multi", function(d) {
    return d.multiNode;
  }).classed("pathom-viz-index-explorer-attr-node-main", function(d) {
    return d.mainNode;
  }).attr("stroke-width", function(d) {
    return Math.sqrt(d.reach || 1) + 1;
  }).attr("r", function(d) {
    return Math.sqrt(d.weight || 1) + 2;
  }).attr("stroke", function(d) {
    return d.multiNode ? null : colorScale(extractNs(d.attribute));
  }).each(function(d) {
    d.nodeElement = module$node_modules$d3$dist$d3_node.select(this);
    d.lineTargets = links.filter(function(l) {
      return l.source.attribute === d.attribute;
    });
    d.lineSources = links.filter(function(l) {
      return l.target.attribute === d.attribute;
    });
  }).on("click", function(d) {
    showDetails(d.attribute, d, this);
  }).on("mouseenter", function(d) {
    return highlight(d);
  }).on("mouseleave", function(d) {
    return unhighlight(d);
  }).call(drag(simulation));
  var label = svg.append("text").attr("x", 10).attr("y", 30).html("");
  simulation.on("tick", function() {
    link.attr("d", function(d) {
      /** @const */ var dx = d.target.x - d.source.x;
      /** @const */ var dy = d.target.y - d.source.y;
      /** @const */ var gamma = Math.atan2(dy, dx);
      /** @const */ var tx = d.target.x - Math.cos(gamma) * d.target.radius;
      /** @const */ var ty = d.target.y - Math.sin(gamma) * d.target.radius;
      /** @const */ var sdx = d.source.x - d.target.x;
      /** @const */ var sdy = d.source.y - d.target.y;
      /** @const */ var sgamma = Math.atan2(sdy, sdx);
      /** @const */ var sx = d.source.x - Math.cos(sgamma) * d.source.radius;
      /** @const */ var sy = d.source.y - Math.sin(sgamma) * d.source.radius;
      return "M" + sx + "," + sy + "L" + tx + "," + ty;
    });
    node.attr("cx", function(d) {
      return d.x;
    }).attr("cy", function(d) {
      return d.y;
    });
  });
  settings.dispose = function() {
    simulation.stop();
  };
  return settings;
}
/** @const */ var module$com$wsscode$pathom$viz$d3_attribute_graph = {};
/** @const */ module$com$wsscode$pathom$viz$d3_attribute_graph.render = render$$module$com$wsscode$pathom$viz$d3_attribute_graph;

$CLJS.module$com$wsscode$pathom$viz$d3_attribute_graph=module$com$wsscode$pathom$viz$d3_attribute_graph;
//# sourceMappingURL=module$com$wsscode$pathom$viz$d3_attribute_graph.js.map
