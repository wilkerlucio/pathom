var module$node_modules$d3$dist$d3_node = shadow.js.require("module$node_modules$d3$dist$d3_node", {});
module$node_modules$d3$dist$d3_node.select("body").selectAll(".pathom-tooltip").remove();
/** @const */ var tooltipElement$$module$com$wsscode$pathom$viz$d3_trace = module$node_modules$d3$dist$d3_node.select("body").append("div").attr("class", "pathom-tooltip");
function registerTooltip$$module$com$wsscode$pathom$viz$d3_trace(nodes, labelF) {
  nodes.on("mouseover.tooltip", function(d) {
    tooltipElement$$module$com$wsscode$pathom$viz$d3_trace.style("visibility", "visible");
  }).on("mousemove.tooltip", function(d) {
    var x = module$node_modules$d3$dist$d3_node.event.clientX + 15;
    var y = module$node_modules$d3$dist$d3_node.event.clientY;
    /** @const */ var x1 = x + tooltipElement$$module$com$wsscode$pathom$viz$d3_trace.node().offsetWidth + 10;
    /** @const */ var screenWidth = document.body.offsetWidth;
    if (x1 > screenWidth) {
      x = screenWidth - (x1 - x);
    }
    tooltipElement$$module$com$wsscode$pathom$viz$d3_trace.html(labelF(d, this)).style("left", x + "px").style("top", y + "px");
  }).on("mouseout.tooltip", function() {
    return tooltipElement$$module$com$wsscode$pathom$viz$d3_trace.style("visibility", "hidden");
  });
}
function renderRule$$module$com$wsscode$pathom$viz$d3_trace(element, settings) {
  /** @const */ var $jscomp$destructuring$var0 = settings;
  /** @const */ var svgHeight = $jscomp$destructuring$var0.svgHeight;
  /** @const */ var vruler = element.append("line").attr("class", "pathom-vruler").attr("y1", 0).attr("y2", svgHeight);
  element.on("mousemove.pathom-rule", function() {
    /** @const */ var x = module$node_modules$d3$dist$d3_node.mouse(this)[0];
    vruler.attr("x1", x).attr("x2", x);
  });
  module$node_modules$d3$dist$d3_node.select("body").on("keydown.pathom-rule", function(e) {
    if (module$node_modules$d3$dist$d3_node.event.keyCode === 16) {
      vruler.style("visibility", "visible");
    }
  }).on("keyup.pathom-rule", function(e) {
    if (module$node_modules$d3$dist$d3_node.event.keyCode === 16) {
      vruler.style("visibility", "hidden");
    }
  });
  settings.vruler = vruler;
}
function layoutTrace$$module$com$wsscode$pathom$viz$d3_trace(node$jscomp$0, $jscomp$destructuring$var1) {
  var $jscomp$destructuring$var2 = $jscomp$destructuring$var1;
  var xScale = $jscomp$destructuring$var2.xScale;
  var yScale = $jscomp$destructuring$var2.yScale;
  var barSize = $jscomp$destructuring$var2.barSize;
  node$jscomp$0.x0 = xScale(0);
  node$jscomp$0.y0 = yScale(0);
  node$jscomp$0.x1 = xScale(node$jscomp$0.data.duration);
  node$jscomp$0.y1 = node$jscomp$0.y0 + 3;
  /** @const */ var positionNode = function(node, pos) {
    node.x0 = xScale(node.data.start);
    node.x1 = xScale(node.data.start + node.data.duration);
    node.y0 = pos.y;
    node.y1 = pos.y += barSize;
    pos.y++;
    /** @const */ var nextPos = {y:pos.y};
    if (node.data.children) {
      if (node.children) {
        node.children.forEach(function(n) {
          return positionNode(n, nextPos);
        });
      }
      node.y2 = nextPos.y - 2;
    }
    pos.y = nextPos.y;
    return node;
  };
  /** @const */ var pos = {y:node$jscomp$0.y1 + 1};
  node$jscomp$0.children.forEach(function(n) {
    return positionNode(n, pos);
  });
  return node$jscomp$0;
}
function applyDataStyles$$module$com$wsscode$pathom$viz$d3_trace(selection) {
  selection.each(function($jscomp$destructuring$var3) {
    var $jscomp$destructuring$var4 = $jscomp$destructuring$var3;
    var style = $jscomp$destructuring$var4.style;
    if (!style) {
      return;
    }
    /** @const */ var sel = module$node_modules$d3$dist$d3_node.select(this);
    for (var name in style) {
      sel.style(name, style[name]);
    }
  });
  return selection;
}
function eventsOnMouse$$module$com$wsscode$pathom$viz$d3_trace($jscomp$destructuring$var5, d, target) {
  var $jscomp$destructuring$var6 = $jscomp$destructuring$var5;
  var xScale = $jscomp$destructuring$var6.xScale;
  /** @const */ var xv = xScale.invert(module$node_modules$d3$dist$d3_node.mouse(target)[0]);
  return d.data.details.filter(function(detail) {
    if (xv < detail.rts) {
      return false;
    }
    if (xv > detail.rts + (detail.duration || xScale.invert(1))) {
      return false;
    }
    return true;
  });
}
function renderTrace$$module$com$wsscode$pathom$viz$d3_trace(selection, settings) {
  /** @const */ var $jscomp$destructuring$var7 = settings;
  /** @const */ var data = $jscomp$destructuring$var7.data;
  /** @const */ var transitionDuration = $jscomp$destructuring$var7.transitionDuration;
  /** @const */ var xScale = $jscomp$destructuring$var7.xScale;
  /** @const */ var showDetails = $jscomp$destructuring$var7.showDetails;
  /** @const */ var svgHeight = $jscomp$destructuring$var7.svgHeight;
  /** @const */ var nodeRoots = selection.selectAll("g.pathom-attr-group").data(layoutTrace$$module$com$wsscode$pathom$viz$d3_trace(data, settings).descendants(), function(d) {
    return JSON.stringify(d.data.path);
  });
  /** @const */ var nodesEnter = nodeRoots.enter().append("g");
  /** @const */ var nodes = nodesEnter.attr("class", "pathom-attr-group").attr("transform", function(d) {
    return "translate(" + [d.x0, d.y0] + ")";
  }).style("opacity", 0).on("mouseover", function(d, i) {
    module$node_modules$d3$dist$d3_node.select(this.childNodes[0]).style("visibility", "visible");
  }).on("mouseout", function(d, i) {
    module$node_modules$d3$dist$d3_node.select(this.childNodes[0]).style("visibility", "hidden");
  }).on("click", function(d$jscomp$0) {
    /** @const */ var details = module$node_modules$d3$dist$d3_node.event.altKey ? eventsOnMouse$$module$com$wsscode$pathom$viz$d3_trace(settings, d$jscomp$0, this) : d$jscomp$0.data.details;
    showDetails(details.map(function(x) {
      /** @const */ var d = Object.assign({}, x);
      delete d.x0;
      delete d.x1;
      delete d.y0;
      delete d.y1;
      return d;
    }));
  });
  nodes.style("opacity", 0).merge(nodeRoots).transition().duration(transitionDuration).attr("transform", function(d) {
    return "translate(" + [d.x0, d.y0] + ")";
  }).style("opacity", 1);
  nodeRoots.exit().transition().duration(transitionDuration).style("opacity", 0).remove();
  registerTooltip$$module$com$wsscode$pathom$viz$d3_trace(nodes, function(d$jscomp$0, target) {
    /** @const */ var label = d$jscomp$0.data.name || d$jscomp$0.data.hint;
    /** @const */ var details = eventsOnMouse$$module$com$wsscode$pathom$viz$d3_trace(settings, d$jscomp$0, target);
    /** @const */ var detailsTimes = details.map(function(d) {
      return (d.duration ? d.duration + " ms " : "") + "\x3cstrong\x3e" + d.event + "\x3c/strong\x3e" + (d.label ? " " + d.label : "");
    });
    /** @const */ var detailsCount = ' \x3cspan class\x3d"pathom-details-count"\x3e' + d$jscomp$0.data.details.length + "\x3c/span\x3e";
    /** @const */ var childCount = d$jscomp$0.data.children ? ' \x3cspan class\x3d"pathom-children-count"\x3e' + d$jscomp$0.data.children.length + "\x3c/span\x3e" : "";
    return [d$jscomp$0.data.duration + " ms \x3cstrong\x3e" + label + "\x3c/strong\x3e" + detailsCount + childCount].concat(detailsTimes).join("\x3cbr\x3e");
  });
  /** @const */ var boundNodes = nodesEnter.append("rect").attr("class", "pathom-attribute-bounds").attr("width", function(d) {
    return d.x1 - d.x0 + 1;
  }).merge(nodeRoots.select("rect.pathom-attribute-bounds")).transition().duration(transitionDuration).attr("width", function(d) {
    return d.x1 - d.x0 + 1;
  }).attr("height", function(d) {
    return d.y2 ? d.y2 - d.y0 + 1 : 0;
  });
  /** @const */ var toggleChildrenNodes = nodesEnter.append("text").attr("class", "pathom-attribute-toggle-children").style("visibility", function(d) {
    return d.children || d._children ? "" : "hidden";
  }).on("click", function(d, e) {
    module$node_modules$d3$dist$d3_node.event.stopPropagation();
    if (d.children && d.children.length && d.data.name) {
      d._children = d.children;
      d.children = null;
      renderTrace$$module$com$wsscode$pathom$viz$d3_trace(selection, settings);
    } else {
      if (d._children) {
        d.children = d._children;
        renderTrace$$module$com$wsscode$pathom$viz$d3_trace(selection, settings);
      }
    }
  }).merge(nodeRoots.select(".pathom-attribute-toggle-children")).text(function(d, i) {
    if (i === 0) {
      return "";
    }
    return d.children ? "-" : "+";
  });
  /** @const */ var attributeNodes = nodesEnter.append("rect").attr("class", "pathom-attribute").attr("width", function(d) {
    return d.x1 - d.x0;
  }).attr("height", function(d) {
    return d.y1 - d.y0;
  }).merge(nodeRoots.select("rect.pathom-attribute")).transition().duration(transitionDuration).attr("width", function(d) {
    return d.x1 - d.x0;
  });
  /** @const */ var detailsNodesRoots = nodesEnter.append("g").attr("class", "pathom-details-container").merge(nodeRoots.select("g.pathom-details-container")).selectAll("rect.pathom-detail-marker").data(function(d) {
    d.data.details.forEach(function(dt, i) {
      dt.x0 = d.x0, dt.x1 = d.x1, dt.y0 = d.y0, dt.y1 = d.y1;
      dt.rts = dt.start - d.data.start;
      dt.id = i;
    });
    return d.data.details;
  }, function(dt) {
    return dt.id;
  });
  /** @const */ var detailsNodesEnter = detailsNodesRoots.enter().append("rect");
  /** @const */ var allDetails = detailsNodesEnter.attr("class", function(d) {
    return "pathom-detail-marker " + "pathom-event-" + d.event + (d.error ? " pathom-event-error" : "");
  }).attr("width", function(d) {
    return Math.max(1, xScale(d.duration));
  }).attr("height", function(d) {
    return d.y1 - d.y0;
  }).attr("transform", function(d) {
    return "translate(" + [xScale(d.rts), 0] + ")";
  }).call(applyDataStyles$$module$com$wsscode$pathom$viz$d3_trace).merge(detailsNodesRoots);
  allDetails.transition().duration(transitionDuration).attr("width", function(d) {
    return Math.max(1, xScale(d.duration));
  }).attr("height", function(d) {
    return d.y1 - d.y0;
  }).attr("transform", function(d) {
    return "translate(" + [xScale(d.rts), 0] + ")";
  });
  nodesEnter.append("text").attr("class", "pathom-label-text").attr("dx", 2).attr("dy", 13).text(function(d) {
    if (d.data.name) {
      return d.data.name;
    }
  });
}
/** @const */ var traceDefaults$$module$com$wsscode$pathom$viz$d3_trace = {barSize:17, showDetails:function(x) {
  return x;
}};
function initTrace$$module$com$wsscode$pathom$viz$d3_trace(element, settings) {
  /** @const */ var svg = module$node_modules$d3$dist$d3_node.select(element);
  return Object.assign({}, traceDefaults$$module$com$wsscode$pathom$viz$d3_trace, settings, {svg:svg, element:element});
}
function updateScale$$module$com$wsscode$pathom$viz$d3_trace($jscomp$destructuring$var8) {
  var $jscomp$destructuring$var9 = $jscomp$destructuring$var8;
  var axisNodes = $jscomp$destructuring$var9.axisNodes;
  var axisX = $jscomp$destructuring$var9.axisX;
  axisNodes.call(axisX);
  axisNodes.select(".domain").remove();
  axisNodes.selectAll("text").attr("y", 0).attr("x", -5).style("text-anchor", "end");
}
function renderPathomTrace$$module$com$wsscode$pathom$viz$d3_trace(element, settingsSource) {
  function applyZoom() {
    /** @const */ var new_xScale = module$node_modules$d3$dist$d3_node.event.transform.rescaleX(xScale);
    settings.axisX.scale(new_xScale);
    updateScale$$module$com$wsscode$pathom$viz$d3_trace(settings);
    mainGroup.attr("transform", module$node_modules$d3$dist$d3_node.event.transform);
  }
  /** @const */ var settings = initTrace$$module$com$wsscode$pathom$viz$d3_trace(element, settingsSource);
  /** @const */ var $jscomp$destructuring$var10 = settings;
  /** @const */ var svg = $jscomp$destructuring$var10.svg;
  /** @const */ var svgWidth = $jscomp$destructuring$var10.svgWidth;
  /** @const */ var svgHeight = $jscomp$destructuring$var10.svgHeight;
  /** @const */ var data = $jscomp$destructuring$var10.data;
  svg.attr("width", svgWidth).attr("height", svgHeight);
  /** @const */ var xScale = module$node_modules$d3$dist$d3_node.scaleLinear().domain([0, data.duration * 1.05]).range([0, svgWidth]);
  /** @const */ var yScale = function(y) {
    return y + 15;
  };
  settings.xScale = xScale;
  settings.yScale = yScale;
  settings.transitionDuration = 300;
  /** @const */ var zoom = module$node_modules$d3$dist$d3_node.zoom().on("zoom", applyZoom);
  svg.call(zoom);
  settings.axisX = module$node_modules$d3$dist$d3_node.axisBottom(xScale).tickFormat(function(d) {
    return d + " ms";
  }).tickSize(svgHeight).ticks(10);
  settings.axisNodes = svg.append("g").attr("class", "pathom-axis").attr("transform", "translate(0,0)");
  updateScale$$module$com$wsscode$pathom$viz$d3_trace(settings);
  /** @const */ var mainGroup = svg.append("g");
  mainGroup.append("g").attr("class", "pathom-view-nodes-container");
  /** @const */ var dataTree = module$node_modules$d3$dist$d3_node.hierarchy(data, function(d) {
    return d.children;
  });
  dataTree.sum(function(d) {
    return d.name ? 1 : 0;
  });
  dataTree.each(function(d) {
    if (d.children && d.children.length > 20) {
      d._children = d.children;
      d.children = null;
      d._children.forEach(function(dd) {
        dd._children = dd.children;
        dd.children = null;
      });
    }
  });
  settings.data = dataTree;
  renderTrace$$module$com$wsscode$pathom$viz$d3_trace(svg.select(".pathom-view-nodes-container"), settings);
  renderRule$$module$com$wsscode$pathom$viz$d3_trace(svg, settings);
  return settings;
}
function updateTraceSize$$module$com$wsscode$pathom$viz$d3_trace(settings) {
  /** @const */ var $jscomp$destructuring$var11 = settings;
  /** @const */ var svg = $jscomp$destructuring$var11.svg;
  /** @const */ var svgWidth = $jscomp$destructuring$var11.svgWidth;
  /** @const */ var svgHeight = $jscomp$destructuring$var11.svgHeight;
  settings.xScale.range([0, svgWidth]);
  settings.axisX.tickSize(svgHeight);
  updateScale$$module$com$wsscode$pathom$viz$d3_trace(settings);
  renderTrace$$module$com$wsscode$pathom$viz$d3_trace(svg.select(".pathom-view-nodes-container"), settings);
  settings.vruler.attr("y2", svgHeight);
  svg.attr("width", svgWidth).attr("height", svgHeight);
}
/** @const */ var module$com$wsscode$pathom$viz$d3_trace = {};
/** @const */ module$com$wsscode$pathom$viz$d3_trace.renderPathomTrace = renderPathomTrace$$module$com$wsscode$pathom$viz$d3_trace;
/** @const */ module$com$wsscode$pathom$viz$d3_trace.updateTraceSize = updateTraceSize$$module$com$wsscode$pathom$viz$d3_trace;

$CLJS.module$com$wsscode$pathom$viz$d3_trace=module$com$wsscode$pathom$viz$d3_trace;
//# sourceMappingURL=module$com$wsscode$pathom$viz$d3_trace.js.map
