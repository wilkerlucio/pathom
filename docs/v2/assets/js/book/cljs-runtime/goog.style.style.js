goog.provide("goog.style");
goog.forwardDeclare("goog.events.Event");
goog.require("goog.array");
goog.require("goog.asserts");
goog.require("goog.dom");
goog.require("goog.dom.NodeType");
goog.require("goog.dom.TagName");
goog.require("goog.dom.vendor");
goog.require("goog.html.SafeStyleSheet");
goog.require("goog.math.Box");
goog.require("goog.math.Coordinate");
goog.require("goog.math.Rect");
goog.require("goog.math.Size");
goog.require("goog.object");
goog.require("goog.reflect");
goog.require("goog.string");
goog.require("goog.userAgent");
/**
 * @param {Element} element
 * @param {(string|Object)} style
 * @param {(string|number|boolean)=} opt_value
 */
goog.style.setStyle = function(element, style, opt_value) {
  if (typeof style === "string") {
    goog.style.setStyle_(element, opt_value, style);
  } else {
    for (var key in style) {
      goog.style.setStyle_(element, style[key], key);
    }
  }
};
/**
 * @private
 * @param {Element} element
 * @param {(string|number|boolean|undefined)} value
 * @param {string} style
 */
goog.style.setStyle_ = function(element, value, style) {
  var propertyName = goog.style.getVendorJsStyleName_(element, style);
  if (propertyName) {
    element.style[propertyName] = /** @type {?} */ (value);
  }
};
/** @private @type {!Object<string,string>} */ goog.style.styleNameCache_ = {};
/**
 * @private
 * @param {Element} element
 * @param {string} style
 * @return {string}
 */
goog.style.getVendorJsStyleName_ = function(element, style) {
  var propertyName = goog.style.styleNameCache_[style];
  if (!propertyName) {
    var camelStyle = goog.string.toCamelCase(style);
    propertyName = camelStyle;
    if (element.style[camelStyle] === undefined) {
      var prefixedStyle = goog.dom.vendor.getVendorJsPrefix() + goog.string.toTitleCase(camelStyle);
      if (element.style[prefixedStyle] !== undefined) {
        propertyName = prefixedStyle;
      }
    }
    goog.style.styleNameCache_[style] = propertyName;
  }
  return propertyName;
};
/**
 * @private
 * @param {Element} element
 * @param {string} style
 * @return {string}
 */
goog.style.getVendorStyleName_ = function(element, style) {
  var camelStyle = goog.string.toCamelCase(style);
  if (element.style[camelStyle] === undefined) {
    var prefixedStyle = goog.dom.vendor.getVendorJsPrefix() + goog.string.toTitleCase(camelStyle);
    if (element.style[prefixedStyle] !== undefined) {
      return goog.dom.vendor.getVendorPrefix() + "-" + style;
    }
  }
  return style;
};
/**
 * @param {Element} element
 * @param {string} property
 * @return {string}
 */
goog.style.getStyle = function(element, property) {
  var styleValue = element.style[goog.string.toCamelCase(property)];
  if (typeof styleValue !== "undefined") {
    return styleValue;
  }
  return element.style[goog.style.getVendorJsStyleName_(element, property)] || "";
};
/**
 * @param {Element} element
 * @param {string} property
 * @return {string}
 */
goog.style.getComputedStyle = function(element, property) {
  var doc = goog.dom.getOwnerDocument(element);
  if (doc.defaultView && doc.defaultView.getComputedStyle) {
    var styles = doc.defaultView.getComputedStyle(element, null);
    if (styles) {
      return styles[property] || styles.getPropertyValue(property) || "";
    }
  }
  return "";
};
/**
 * @param {Element} element
 * @param {string} style
 * @return {string}
 */
goog.style.getCascadedStyle = function(element, style) {
  return (/** @type {string} */ (element.currentStyle ? element.currentStyle[style] : null));
};
/**
 * @private
 * @param {Element} element
 * @param {string} style
 * @return {string}
 */
goog.style.getStyle_ = function(element, style) {
  return goog.style.getComputedStyle(element, style) || goog.style.getCascadedStyle(element, style) || element.style && element.style[style];
};
/**
 * @param {!Element} element
 * @return {?string}
 */
goog.style.getComputedBoxSizing = function(element) {
  return goog.style.getStyle_(element, "boxSizing") || goog.style.getStyle_(element, "MozBoxSizing") || goog.style.getStyle_(element, "WebkitBoxSizing") || null;
};
/**
 * @param {Element} element
 * @return {string}
 */
goog.style.getComputedPosition = function(element) {
  return goog.style.getStyle_(element, "position");
};
/**
 * @param {Element} element
 * @return {string}
 */
goog.style.getBackgroundColor = function(element) {
  return goog.style.getStyle_(element, "backgroundColor");
};
/**
 * @param {Element} element
 * @return {string}
 */
goog.style.getComputedOverflowX = function(element) {
  return goog.style.getStyle_(element, "overflowX");
};
/**
 * @param {Element} element
 * @return {string}
 */
goog.style.getComputedOverflowY = function(element) {
  return goog.style.getStyle_(element, "overflowY");
};
/**
 * @param {Element} element
 * @return {(string|number)}
 */
goog.style.getComputedZIndex = function(element) {
  return goog.style.getStyle_(element, "zIndex");
};
/**
 * @param {Element} element
 * @return {string}
 */
goog.style.getComputedTextAlign = function(element) {
  return goog.style.getStyle_(element, "textAlign");
};
/**
 * @param {Element} element
 * @return {string}
 */
goog.style.getComputedCursor = function(element) {
  return goog.style.getStyle_(element, "cursor");
};
/**
 * @param {Element} element
 * @return {string}
 */
goog.style.getComputedTransform = function(element) {
  var property = goog.style.getVendorStyleName_(element, "transform");
  return goog.style.getStyle_(element, property) || goog.style.getStyle_(element, "transform");
};
/**
 * @param {Element} el
 * @param {(string|number|goog.math.Coordinate)} arg1
 * @param {(string|number)=} opt_arg2
 */
goog.style.setPosition = function(el, arg1, opt_arg2) {
  var x, y;
  if (arg1 instanceof goog.math.Coordinate) {
    x = arg1.x;
    y = arg1.y;
  } else {
    x = arg1;
    y = opt_arg2;
  }
  el.style.left = goog.style.getPixelStyleValue_(/** @type {(number|string)} */ (x), false);
  el.style.top = goog.style.getPixelStyleValue_(/** @type {(number|string)} */ (y), false);
};
/**
 * @param {Element} element
 * @return {!goog.math.Coordinate}
 */
goog.style.getPosition = function(element) {
  return new goog.math.Coordinate(/** @type {!HTMLElement} */ (element).offsetLeft, /** @type {!HTMLElement} */ (element).offsetTop);
};
/**
 * @param {Node=} opt_node
 * @return {Element}
 */
goog.style.getClientViewportElement = function(opt_node) {
  var doc;
  if (opt_node) {
    doc = goog.dom.getOwnerDocument(opt_node);
  } else {
    doc = goog.dom.getDocument();
  }
  if (goog.userAgent.IE && !goog.userAgent.isDocumentModeOrHigher(9) && !goog.dom.getDomHelper(doc).isCss1CompatMode()) {
    return doc.body;
  }
  return doc.documentElement;
};
/**
 * @param {!Document} doc
 * @return {!goog.math.Coordinate}
 */
goog.style.getViewportPageOffset = function(doc) {
  var body = doc.body;
  var documentElement = doc.documentElement;
  var scrollLeft = body.scrollLeft || documentElement.scrollLeft;
  var scrollTop = body.scrollTop || documentElement.scrollTop;
  return new goog.math.Coordinate(scrollLeft, scrollTop);
};
/**
 * @private
 * @param {!Element} el
 * @return {Object}
 */
goog.style.getBoundingClientRect_ = function(el) {
  var rect;
  try {
    rect = el.getBoundingClientRect();
  } catch (e) {
    return {"left":0, "top":0, "right":0, "bottom":0};
  }
  if (goog.userAgent.IE && el.ownerDocument.body) {
    var doc = el.ownerDocument;
    rect.left -= doc.documentElement.clientLeft + doc.body.clientLeft;
    rect.top -= doc.documentElement.clientTop + doc.body.clientTop;
  }
  return rect;
};
/**
 * @param {Element} element
 * @return {Element}
 */
goog.style.getOffsetParent = function(element) {
  if (goog.userAgent.IE && !goog.userAgent.isDocumentModeOrHigher(8)) {
    goog.asserts.assert(element && "offsetParent" in element);
    return element.offsetParent;
  }
  var doc = goog.dom.getOwnerDocument(element);
  var positionStyle = goog.style.getStyle_(element, "position");
  var skipStatic = positionStyle == "fixed" || positionStyle == "absolute";
  for (var parent = element.parentNode; parent && parent != doc; parent = parent.parentNode) {
    if (parent.nodeType == goog.dom.NodeType.DOCUMENT_FRAGMENT && parent.host) {
      parent = /** @type {!Element} */ (parent.host);
    }
    positionStyle = goog.style.getStyle_(/** @type {!Element} */ (parent), "position");
    skipStatic = skipStatic && positionStyle == "static" && parent != doc.documentElement && parent != doc.body;
    if (!skipStatic && (parent.scrollWidth > parent.clientWidth || parent.scrollHeight > parent.clientHeight || positionStyle == "fixed" || positionStyle == "absolute" || positionStyle == "relative")) {
      return (/** @type {!Element} */ (parent));
    }
  }
  return null;
};
/**
 * @param {Element} element
 * @return {goog.math.Box}
 */
goog.style.getVisibleRectForElement = function(element) {
  var visibleRect = new goog.math.Box(0, Infinity, Infinity, 0);
  var dom = goog.dom.getDomHelper(element);
  var body = dom.getDocument().body;
  var documentElement = dom.getDocument().documentElement;
  var scrollEl = dom.getDocumentScrollElement();
  for (var el = element; el = goog.style.getOffsetParent(el);) {
    if ((!goog.userAgent.IE || el.clientWidth != 0) && (!goog.userAgent.WEBKIT || el.clientHeight != 0 || el != body) && (el != body && el != documentElement && goog.style.getStyle_(el, "overflow") != "visible")) {
      var pos = goog.style.getPageOffset(el);
      var client = goog.style.getClientLeftTop(el);
      pos.x += client.x;
      pos.y += client.y;
      visibleRect.top = Math.max(visibleRect.top, pos.y);
      visibleRect.right = Math.min(visibleRect.right, pos.x + el.clientWidth);
      visibleRect.bottom = Math.min(visibleRect.bottom, pos.y + el.clientHeight);
      visibleRect.left = Math.max(visibleRect.left, pos.x);
    }
  }
  var scrollX = scrollEl.scrollLeft, scrollY = scrollEl.scrollTop;
  visibleRect.left = Math.max(visibleRect.left, scrollX);
  visibleRect.top = Math.max(visibleRect.top, scrollY);
  var winSize = dom.getViewportSize();
  visibleRect.right = Math.min(visibleRect.right, scrollX + winSize.width);
  visibleRect.bottom = Math.min(visibleRect.bottom, scrollY + winSize.height);
  return visibleRect.top >= 0 && visibleRect.left >= 0 && visibleRect.bottom > visibleRect.top && visibleRect.right > visibleRect.left ? visibleRect : null;
};
/**
 * @param {Element} element
 * @param {Element=} opt_container
 * @param {boolean=} opt_center
 * @return {!goog.math.Coordinate}
 */
goog.style.getContainerOffsetToScrollInto = function(element, opt_container, opt_center) {
  var container = opt_container || goog.dom.getDocumentScrollElement();
  var elementPos = goog.style.getPageOffset(element);
  var containerPos = goog.style.getPageOffset(container);
  var containerBorder = goog.style.getBorderBox(container);
  if (container == goog.dom.getDocumentScrollElement()) {
    var relX = elementPos.x - container.scrollLeft;
    var relY = elementPos.y - container.scrollTop;
    if (goog.userAgent.IE && !goog.userAgent.isDocumentModeOrHigher(10)) {
      relX += containerBorder.left;
      relY += containerBorder.top;
    }
  } else {
    var relX = elementPos.x - containerPos.x - containerBorder.left;
    var relY = elementPos.y - containerPos.y - containerBorder.top;
  }
  var elementSize = goog.style.getSizeWithDisplay_(element);
  var spaceX = container.clientWidth - elementSize.width;
  var spaceY = container.clientHeight - elementSize.height;
  var scrollLeft = container.scrollLeft;
  var scrollTop = container.scrollTop;
  if (opt_center) {
    scrollLeft += relX - spaceX / 2;
    scrollTop += relY - spaceY / 2;
  } else {
    scrollLeft += Math.min(relX, Math.max(relX - spaceX, 0));
    scrollTop += Math.min(relY, Math.max(relY - spaceY, 0));
  }
  return new goog.math.Coordinate(scrollLeft, scrollTop);
};
/**
 * @param {Element} element
 * @param {Element=} opt_container
 * @param {boolean=} opt_center
 */
goog.style.scrollIntoContainerView = function(element, opt_container, opt_center) {
  var container = opt_container || goog.dom.getDocumentScrollElement();
  var offset = goog.style.getContainerOffsetToScrollInto(element, container, opt_center);
  container.scrollLeft = offset.x;
  container.scrollTop = offset.y;
};
/**
 * @param {Element} el
 * @return {!goog.math.Coordinate}
 */
goog.style.getClientLeftTop = function(el) {
  return new goog.math.Coordinate(el.clientLeft, el.clientTop);
};
/**
 * @param {Element} el
 * @return {!goog.math.Coordinate}
 */
goog.style.getPageOffset = function(el) {
  var doc = goog.dom.getOwnerDocument(el);
  goog.asserts.assertObject(el, "Parameter is required");
  var pos = new goog.math.Coordinate(0, 0);
  var viewportElement = goog.style.getClientViewportElement(doc);
  if (el == viewportElement) {
    return pos;
  }
  var box = goog.style.getBoundingClientRect_(el);
  var scrollCoord = goog.dom.getDomHelper(doc).getDocumentScroll();
  pos.x = box.left + scrollCoord.x;
  pos.y = box.top + scrollCoord.y;
  return pos;
};
/**
 * @param {Element} el
 * @return {number}
 */
goog.style.getPageOffsetLeft = function(el) {
  return goog.style.getPageOffset(el).x;
};
/**
 * @param {Element} el
 * @return {number}
 */
goog.style.getPageOffsetTop = function(el) {
  return goog.style.getPageOffset(el).y;
};
/**
 * @param {Element} el
 * @param {Window} relativeWin
 * @return {!goog.math.Coordinate}
 */
goog.style.getFramedPageOffset = function(el, relativeWin) {
  var position = new goog.math.Coordinate(0, 0);
  var currentWin = goog.dom.getWindow(goog.dom.getOwnerDocument(el));
  if (!goog.reflect.canAccessProperty(currentWin, "parent")) {
    return position;
  }
  var currentEl = el;
  do {
    var offset = currentWin == relativeWin ? goog.style.getPageOffset(currentEl) : goog.style.getClientPositionForElement_(goog.asserts.assert(currentEl));
    position.x += offset.x;
    position.y += offset.y;
  } while (currentWin && currentWin != relativeWin && currentWin != currentWin.parent && (currentEl = currentWin.frameElement) && (currentWin = currentWin.parent));
  return position;
};
/**
 * @param {goog.math.Rect} rect
 * @param {goog.dom.DomHelper} origBase
 * @param {goog.dom.DomHelper} newBase
 */
goog.style.translateRectForAnotherFrame = function(rect, origBase, newBase) {
  if (origBase.getDocument() != newBase.getDocument()) {
    var body = origBase.getDocument().body;
    var pos = goog.style.getFramedPageOffset(body, newBase.getWindow());
    pos = goog.math.Coordinate.difference(pos, goog.style.getPageOffset(body));
    if (goog.userAgent.IE && !goog.userAgent.isDocumentModeOrHigher(9) && !origBase.isCss1CompatMode()) {
      pos = goog.math.Coordinate.difference(pos, origBase.getDocumentScroll());
    }
    rect.left += pos.x;
    rect.top += pos.y;
  }
};
/**
 * @param {(Element|Event|goog.events.Event)} a
 * @param {(Element|Event|goog.events.Event)} b
 * @return {!goog.math.Coordinate}
 */
goog.style.getRelativePosition = function(a, b) {
  var ap = goog.style.getClientPosition(a);
  var bp = goog.style.getClientPosition(b);
  return new goog.math.Coordinate(ap.x - bp.x, ap.y - bp.y);
};
/**
 * @private
 * @param {!Element} el
 * @return {!goog.math.Coordinate}
 */
goog.style.getClientPositionForElement_ = function(el) {
  var box = goog.style.getBoundingClientRect_(el);
  return new goog.math.Coordinate(box.left, box.top);
};
/**
 * @param {(Element|Event|goog.events.Event)} el
 * @return {!goog.math.Coordinate}
 */
goog.style.getClientPosition = function(el) {
  goog.asserts.assert(el);
  if (el.nodeType == goog.dom.NodeType.ELEMENT) {
    return goog.style.getClientPositionForElement_(/** @type {!Element} */ (el));
  } else {
    var targetEvent = el.changedTouches ? el.changedTouches[0] : el;
    return new goog.math.Coordinate(targetEvent.clientX, targetEvent.clientY);
  }
};
/**
 * @param {Element} el
 * @param {(number|goog.math.Coordinate)} x
 * @param {number=} opt_y
 */
goog.style.setPageOffset = function(el, x, opt_y) {
  var cur = goog.style.getPageOffset(el);
  if (x instanceof goog.math.Coordinate) {
    opt_y = x.y;
    x = x.x;
  }
  var dx = goog.asserts.assertNumber(x) - cur.x;
  var dy = Number(opt_y) - cur.y;
  goog.style.setPosition(el, /** @type {!HTMLElement} */ (el).offsetLeft + dx, /** @type {!HTMLElement} */ (el).offsetTop + dy);
};
/**
 * @param {Element} element
 * @param {(string|number|goog.math.Size)} w
 * @param {(string|number)=} opt_h
 */
goog.style.setSize = function(element, w, opt_h) {
  var h;
  if (w instanceof goog.math.Size) {
    h = w.height;
    w = w.width;
  } else {
    if (opt_h == undefined) {
      throw new Error("missing height argument");
    }
    h = opt_h;
  }
  goog.style.setWidth(element, /** @type {(string|number)} */ (w));
  goog.style.setHeight(element, h);
};
/**
 * @private
 * @param {(string|number)} value
 * @param {boolean} round
 * @return {string}
 */
goog.style.getPixelStyleValue_ = function(value, round) {
  if (typeof value == "number") {
    value = (round ? Math.round(value) : value) + "px";
  }
  return value;
};
/**
 * @param {Element} element
 * @param {(string|number)} height
 */
goog.style.setHeight = function(element, height) {
  element.style.height = goog.style.getPixelStyleValue_(height, true);
};
/**
 * @param {Element} element
 * @param {(string|number)} width
 */
goog.style.setWidth = function(element, width) {
  element.style.width = goog.style.getPixelStyleValue_(width, true);
};
/**
 * @param {Element} element
 * @return {!goog.math.Size}
 */
goog.style.getSize = function(element) {
  return goog.style.evaluateWithTemporaryDisplay_(goog.style.getSizeWithDisplay_, /** @type {!Element} */ (element));
};
/**
 * @private
 * @param {function(!Element):T} fn
 * @param {!Element} element
 * @return {T}
 * @template T
 */
goog.style.evaluateWithTemporaryDisplay_ = function(fn, element) {
  if (goog.style.getStyle_(element, "display") != "none") {
    return fn(element);
  }
  var style = element.style;
  var originalDisplay = style.display;
  var originalVisibility = style.visibility;
  var originalPosition = style.position;
  style.visibility = "hidden";
  style.position = "absolute";
  style.display = "inline";
  var retVal = fn(element);
  style.display = originalDisplay;
  style.position = originalPosition;
  style.visibility = originalVisibility;
  return retVal;
};
/**
 * @private
 * @param {Element} element
 * @return {!goog.math.Size}
 */
goog.style.getSizeWithDisplay_ = function(element) {
  var offsetWidth = /** @type {!HTMLElement} */ (element).offsetWidth;
  var offsetHeight = /** @type {!HTMLElement} */ (element).offsetHeight;
  var webkitOffsetsZero = goog.userAgent.WEBKIT && !offsetWidth && !offsetHeight;
  if ((offsetWidth === undefined || webkitOffsetsZero) && element.getBoundingClientRect) {
    var clientRect = goog.style.getBoundingClientRect_(element);
    return new goog.math.Size(clientRect.right - clientRect.left, clientRect.bottom - clientRect.top);
  }
  return new goog.math.Size(offsetWidth, offsetHeight);
};
/**
 * @param {!Element} element
 * @return {goog.math.Size}
 */
goog.style.getTransformedSize = function(element) {
  if (!element.getBoundingClientRect) {
    return null;
  }
  var clientRect = goog.style.evaluateWithTemporaryDisplay_(goog.style.getBoundingClientRect_, element);
  return new goog.math.Size(clientRect.right - clientRect.left, clientRect.bottom - clientRect.top);
};
/**
 * @param {Element} element
 * @return {!goog.math.Rect}
 */
goog.style.getBounds = function(element) {
  var o = goog.style.getPageOffset(element);
  var s = goog.style.getSize(element);
  return new goog.math.Rect(o.x, o.y, s.width, s.height);
};
/**
 * @param {*} selector
 * @return {string}
 * @deprecated Use goog.string.toCamelCase instead.
 */
goog.style.toCamelCase = function(selector) {
  return goog.string.toCamelCase(String(selector));
};
/**
 * @param {string} selector
 * @return {string}
 * @deprecated Use goog.string.toSelectorCase instead.
 */
goog.style.toSelectorCase = function(selector) {
  return goog.string.toSelectorCase(selector);
};
/**
 * @param {Element} el
 * @return {(number|string)}
 */
goog.style.getOpacity = function(el) {
  goog.asserts.assert(el);
  var style = el.style;
  var result = "";
  if ("opacity" in style) {
    result = style.opacity;
  } else {
    if ("MozOpacity" in style) {
      result = style.MozOpacity;
    } else {
      if ("filter" in style) {
        var match = style.filter.match(/alpha\(opacity=([\d.]+)\)/);
        if (match) {
          result = String(match[1] / 100);
        }
      }
    }
  }
  return result == "" ? result : Number(result);
};
/**
 * @param {Element} el
 * @param {(number|string)} alpha
 */
goog.style.setOpacity = function(el, alpha) {
  goog.asserts.assert(el);
  var style = el.style;
  if ("opacity" in style) {
    style.opacity = alpha;
  } else {
    if ("MozOpacity" in style) {
      style.MozOpacity = alpha;
    } else {
      if ("filter" in style) {
        if (alpha === "") {
          style.filter = "";
        } else {
          style.filter = "alpha(opacity\x3d" + Number(alpha) * 100 + ")";
        }
      }
    }
  }
};
/**
 * @param {Element} el
 * @param {string} src
 */
goog.style.setTransparentBackgroundImage = function(el, src) {
  var style = el.style;
  if (goog.userAgent.IE && !goog.userAgent.isVersionOrHigher("8")) {
    style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(" + 'src\x3d"' + src + '", sizingMethod\x3d"crop")';
  } else {
    style.backgroundImage = "url(" + src + ")";
    style.backgroundPosition = "top left";
    style.backgroundRepeat = "no-repeat";
  }
};
/**
 * @param {Element} el
 */
goog.style.clearTransparentBackgroundImage = function(el) {
  var style = el.style;
  if ("filter" in style) {
    style.filter = "";
  } else {
    style.backgroundImage = "none";
  }
};
/**
 * @param {Element} el
 * @param {*} display
 * @deprecated Use goog.style.setElementShown instead.
 */
goog.style.showElement = function(el, display) {
  goog.style.setElementShown(el, display);
};
/**
 * @param {Element} el
 * @param {*} isShown
 */
goog.style.setElementShown = function(el, isShown) {
  el.style.display = isShown ? "" : "none";
};
/**
 * @param {Element} el
 * @return {boolean}
 */
goog.style.isElementShown = function(el) {
  return el.style.display != "none";
};
/**
 * @param {!goog.html.SafeStyleSheet} safeStyleSheet
 * @param {?Node=} opt_node
 * @return {(!HTMLStyleElement|!StyleSheet)}
 */
goog.style.installSafeStyleSheet = function(safeStyleSheet, opt_node) {
  var dh = goog.dom.getDomHelper(opt_node);
  var doc = dh.getDocument();
  if (goog.userAgent.IE && doc.createStyleSheet) {
    /** @type {(!HTMLStyleElement|!StyleSheet)} */ var styleSheet = doc.createStyleSheet();
    goog.style.setSafeStyleSheet(styleSheet, safeStyleSheet);
    return styleSheet;
  } else {
    var head = dh.getElementsByTagNameAndClass(goog.dom.TagName.HEAD)[0];
    if (!head) {
      var body = dh.getElementsByTagNameAndClass(goog.dom.TagName.BODY)[0];
      head = dh.createDom(goog.dom.TagName.HEAD);
      body.parentNode.insertBefore(head, body);
    }
    var el = dh.createDom(goog.dom.TagName.STYLE);
    goog.style.setSafeStyleSheet(el, safeStyleSheet);
    dh.appendChild(head, el);
    return el;
  }
};
/**
 * @param {(Element|StyleSheet)} styleSheet
 */
goog.style.uninstallStyles = function(styleSheet) {
  var node = styleSheet.ownerNode || styleSheet.owningElement || /** @type {Element} */ (styleSheet);
  goog.dom.removeNode(node);
};
/**
 * @param {(!Element|!StyleSheet)} element
 * @param {!goog.html.SafeStyleSheet} safeStyleSheet
 */
goog.style.setSafeStyleSheet = function(element, safeStyleSheet) {
  var stylesString = goog.html.SafeStyleSheet.unwrap(safeStyleSheet);
  if (goog.userAgent.IE && element.cssText !== undefined) {
    element.cssText = stylesString;
  } else {
    element.innerHTML = stylesString;
  }
};
/**
 * @param {Element} el
 */
goog.style.setPreWrap = function(el) {
  var style = el.style;
  if (goog.userAgent.IE && !goog.userAgent.isVersionOrHigher("8")) {
    style.whiteSpace = "pre";
    style.wordWrap = "break-word";
  } else {
    if (goog.userAgent.GECKO) {
      style.whiteSpace = "-moz-pre-wrap";
    } else {
      style.whiteSpace = "pre-wrap";
    }
  }
};
/**
 * @param {Element} el
 */
goog.style.setInlineBlock = function(el) {
  var style = el.style;
  style.position = "relative";
  if (goog.userAgent.IE && !goog.userAgent.isVersionOrHigher("8")) {
    style.zoom = "1";
    style.display = "inline";
  } else {
    style.display = "inline-block";
  }
};
/**
 * @param {Element} el
 * @return {boolean}
 */
goog.style.isRightToLeft = function(el) {
  return "rtl" == goog.style.getStyle_(el, "direction");
};
/** @private @type {?string} */ goog.style.unselectableStyle_ = goog.userAgent.GECKO ? "MozUserSelect" : goog.userAgent.WEBKIT || goog.userAgent.EDGE ? "WebkitUserSelect" : null;
/**
 * @param {Element} el
 * @return {boolean}
 */
goog.style.isUnselectable = function(el) {
  if (goog.style.unselectableStyle_) {
    return el.style[goog.style.unselectableStyle_].toLowerCase() == "none";
  } else {
    if (goog.userAgent.IE || goog.userAgent.OPERA) {
      return el.getAttribute("unselectable") == "on";
    }
  }
  return false;
};
/**
 * @param {Element} el
 * @param {boolean} unselectable
 * @param {boolean=} opt_noRecurse
 */
goog.style.setUnselectable = function(el, unselectable, opt_noRecurse) {
  var descendants = !opt_noRecurse ? el.getElementsByTagName("*") : null;
  var name = goog.style.unselectableStyle_;
  if (name) {
    var value = unselectable ? "none" : "";
    if (el.style) {
      el.style[name] = value;
    }
    if (descendants) {
      for (var i = 0, descendant; descendant = descendants[i]; i++) {
        if (descendant.style) {
          descendant.style[name] = value;
        }
      }
    }
  } else {
    if (goog.userAgent.IE || goog.userAgent.OPERA) {
      var value = unselectable ? "on" : "";
      el.setAttribute("unselectable", value);
      if (descendants) {
        for (var i = 0, descendant; descendant = descendants[i]; i++) {
          descendant.setAttribute("unselectable", value);
        }
      }
    }
  }
};
/**
 * @param {Element} element
 * @return {!goog.math.Size}
 */
goog.style.getBorderBoxSize = function(element) {
  return new goog.math.Size(/** @type {!HTMLElement} */ (element).offsetWidth, /** @type {!HTMLElement} */ (element).offsetHeight);
};
/**
 * @param {Element} element
 * @param {goog.math.Size} size
 */
goog.style.setBorderBoxSize = function(element, size) {
  var doc = goog.dom.getOwnerDocument(element);
  var isCss1CompatMode = goog.dom.getDomHelper(doc).isCss1CompatMode();
  if (goog.userAgent.IE && !goog.userAgent.isVersionOrHigher("10") && (!isCss1CompatMode || !goog.userAgent.isVersionOrHigher("8"))) {
    var style = element.style;
    if (isCss1CompatMode) {
      var paddingBox = goog.style.getPaddingBox(element);
      var borderBox = goog.style.getBorderBox(element);
      style.pixelWidth = size.width - borderBox.left - paddingBox.left - paddingBox.right - borderBox.right;
      style.pixelHeight = size.height - borderBox.top - paddingBox.top - paddingBox.bottom - borderBox.bottom;
    } else {
      style.pixelWidth = size.width;
      style.pixelHeight = size.height;
    }
  } else {
    goog.style.setBoxSizingSize_(element, size, "border-box");
  }
};
/**
 * @param {Element} element
 * @return {!goog.math.Size}
 */
goog.style.getContentBoxSize = function(element) {
  var doc = goog.dom.getOwnerDocument(element);
  var ieCurrentStyle = goog.userAgent.IE && element.currentStyle;
  if (ieCurrentStyle && goog.dom.getDomHelper(doc).isCss1CompatMode() && ieCurrentStyle.width != "auto" && ieCurrentStyle.height != "auto" && !ieCurrentStyle.boxSizing) {
    var width = goog.style.getIePixelValue_(element, /** @type {string} */ (ieCurrentStyle.width), "width", "pixelWidth");
    var height = goog.style.getIePixelValue_(element, /** @type {string} */ (ieCurrentStyle.height), "height", "pixelHeight");
    return new goog.math.Size(width, height);
  } else {
    var borderBoxSize = goog.style.getBorderBoxSize(element);
    var paddingBox = goog.style.getPaddingBox(element);
    var borderBox = goog.style.getBorderBox(element);
    return new goog.math.Size(borderBoxSize.width - borderBox.left - paddingBox.left - paddingBox.right - borderBox.right, borderBoxSize.height - borderBox.top - paddingBox.top - paddingBox.bottom - borderBox.bottom);
  }
};
/**
 * @param {Element} element
 * @param {goog.math.Size} size
 */
goog.style.setContentBoxSize = function(element, size) {
  var doc = goog.dom.getOwnerDocument(element);
  var isCss1CompatMode = goog.dom.getDomHelper(doc).isCss1CompatMode();
  if (goog.userAgent.IE && !goog.userAgent.isVersionOrHigher("10") && (!isCss1CompatMode || !goog.userAgent.isVersionOrHigher("8"))) {
    var style = element.style;
    if (isCss1CompatMode) {
      style.pixelWidth = size.width;
      style.pixelHeight = size.height;
    } else {
      var paddingBox = goog.style.getPaddingBox(element);
      var borderBox = goog.style.getBorderBox(element);
      style.pixelWidth = size.width + borderBox.left + paddingBox.left + paddingBox.right + borderBox.right;
      style.pixelHeight = size.height + borderBox.top + paddingBox.top + paddingBox.bottom + borderBox.bottom;
    }
  } else {
    goog.style.setBoxSizingSize_(element, size, "content-box");
  }
};
/**
 * @private
 * @param {Element} element
 * @param {goog.math.Size} size
 * @param {string} boxSizing
 */
goog.style.setBoxSizingSize_ = function(element, size, boxSizing) {
  var style = element.style;
  if (goog.userAgent.GECKO) {
    style.MozBoxSizing = boxSizing;
  } else {
    if (goog.userAgent.WEBKIT) {
      style.WebkitBoxSizing = boxSizing;
    } else {
      style.boxSizing = boxSizing;
    }
  }
  style.width = Math.max(size.width, 0) + "px";
  style.height = Math.max(size.height, 0) + "px";
};
/**
 * @private
 * @param {Element} element
 * @param {string} value
 * @param {string} name
 * @param {string} pixelName
 * @return {number}
 */
goog.style.getIePixelValue_ = function(element, value, name, pixelName) {
  if (/^\d+px?$/.test(value)) {
    return parseInt(value, 10);
  } else {
    var oldStyleValue = element.style[name];
    var oldRuntimeValue = element.runtimeStyle[name];
    element.runtimeStyle[name] = element.currentStyle[name];
    element.style[name] = value;
    var pixelValue = element.style[pixelName];
    element.style[name] = oldStyleValue;
    element.runtimeStyle[name] = oldRuntimeValue;
    return +pixelValue;
  }
};
/**
 * @private
 * @param {Element} element
 * @param {string} propName
 * @return {number}
 */
goog.style.getIePixelDistance_ = function(element, propName) {
  var value = goog.style.getCascadedStyle(element, propName);
  return value ? goog.style.getIePixelValue_(element, value, "left", "pixelLeft") : 0;
};
/**
 * @private
 * @param {Element} element
 * @param {string} stylePrefix
 * @return {!goog.math.Box}
 */
goog.style.getBox_ = function(element, stylePrefix) {
  if (goog.userAgent.IE) {
    var left = goog.style.getIePixelDistance_(element, stylePrefix + "Left");
    var right = goog.style.getIePixelDistance_(element, stylePrefix + "Right");
    var top = goog.style.getIePixelDistance_(element, stylePrefix + "Top");
    var bottom = goog.style.getIePixelDistance_(element, stylePrefix + "Bottom");
    return new goog.math.Box(top, right, bottom, left);
  } else {
    var left = goog.style.getComputedStyle(element, stylePrefix + "Left");
    var right = goog.style.getComputedStyle(element, stylePrefix + "Right");
    var top = goog.style.getComputedStyle(element, stylePrefix + "Top");
    var bottom = goog.style.getComputedStyle(element, stylePrefix + "Bottom");
    return new goog.math.Box(parseFloat(top), parseFloat(right), parseFloat(bottom), parseFloat(left));
  }
};
/**
 * @param {Element} element
 * @return {!goog.math.Box}
 */
goog.style.getPaddingBox = function(element) {
  return goog.style.getBox_(element, "padding");
};
/**
 * @param {Element} element
 * @return {!goog.math.Box}
 */
goog.style.getMarginBox = function(element) {
  return goog.style.getBox_(element, "margin");
};
/** @private @type {!Object} */ goog.style.ieBorderWidthKeywords_ = {"thin":2, "medium":4, "thick":6};
/**
 * @private
 * @param {Element} element
 * @param {string} prop
 * @return {number}
 */
goog.style.getIePixelBorder_ = function(element, prop) {
  if (goog.style.getCascadedStyle(element, prop + "Style") == "none") {
    return 0;
  }
  var width = goog.style.getCascadedStyle(element, prop + "Width");
  if (width in goog.style.ieBorderWidthKeywords_) {
    return goog.style.ieBorderWidthKeywords_[width];
  }
  return goog.style.getIePixelValue_(element, width, "left", "pixelLeft");
};
/**
 * @param {Element} element
 * @return {!goog.math.Box}
 */
goog.style.getBorderBox = function(element) {
  if (goog.userAgent.IE && !goog.userAgent.isDocumentModeOrHigher(9)) {
    var left = goog.style.getIePixelBorder_(element, "borderLeft");
    var right = goog.style.getIePixelBorder_(element, "borderRight");
    var top = goog.style.getIePixelBorder_(element, "borderTop");
    var bottom = goog.style.getIePixelBorder_(element, "borderBottom");
    return new goog.math.Box(top, right, bottom, left);
  } else {
    var left = goog.style.getComputedStyle(element, "borderLeftWidth");
    var right = goog.style.getComputedStyle(element, "borderRightWidth");
    var top = goog.style.getComputedStyle(element, "borderTopWidth");
    var bottom = goog.style.getComputedStyle(element, "borderBottomWidth");
    return new goog.math.Box(parseFloat(top), parseFloat(right), parseFloat(bottom), parseFloat(left));
  }
};
/**
 * @param {Element} el
 * @return {string}
 */
goog.style.getFontFamily = function(el) {
  var doc = goog.dom.getOwnerDocument(el);
  var font = "";
  if (doc.body.createTextRange && goog.dom.contains(doc, el)) {
    var range = doc.body.createTextRange();
    range.moveToElementText(el);
    try {
      font = range.queryCommandValue("FontName");
    } catch (e) {
      font = "";
    }
  }
  if (!font) {
    font = goog.style.getStyle_(el, "fontFamily");
  }
  var fontsArray = font.split(",");
  if (fontsArray.length > 1) {
    font = fontsArray[0];
  }
  return goog.string.stripQuotes(font, "\"'");
};
/** @private @type {RegExp} */ goog.style.lengthUnitRegex_ = /[^\d]+$/;
/**
 * @param {string} value
 * @return {?string}
 */
goog.style.getLengthUnits = function(value) {
  var units = value.match(goog.style.lengthUnitRegex_);
  return units && units[0] || null;
};
/** @private @type {!Object} */ goog.style.ABSOLUTE_CSS_LENGTH_UNITS_ = {"cm":1, "in":1, "mm":1, "pc":1, "pt":1};
/** @private @type {!Object} */ goog.style.CONVERTIBLE_RELATIVE_CSS_UNITS_ = {"em":1, "ex":1};
/**
 * @param {Element} el
 * @return {number}
 */
goog.style.getFontSize = function(el) {
  var fontSize = goog.style.getStyle_(el, "fontSize");
  var sizeUnits = goog.style.getLengthUnits(fontSize);
  if (fontSize && "px" == sizeUnits) {
    return parseInt(fontSize, 10);
  }
  if (goog.userAgent.IE) {
    if (String(sizeUnits) in goog.style.ABSOLUTE_CSS_LENGTH_UNITS_) {
      return goog.style.getIePixelValue_(el, fontSize, "left", "pixelLeft");
    } else {
      if (el.parentNode && el.parentNode.nodeType == goog.dom.NodeType.ELEMENT && String(sizeUnits) in goog.style.CONVERTIBLE_RELATIVE_CSS_UNITS_) {
        var parentElement = /** @type {!Element} */ (el.parentNode);
        var parentSize = goog.style.getStyle_(parentElement, "fontSize");
        return goog.style.getIePixelValue_(parentElement, fontSize == parentSize ? "1em" : fontSize, "left", "pixelLeft");
      }
    }
  }
  var sizeElement = goog.dom.createDom(goog.dom.TagName.SPAN, {"style":"visibility:hidden;position:absolute;" + "line-height:0;padding:0;margin:0;border:0;height:1em;"});
  goog.dom.appendChild(el, sizeElement);
  fontSize = sizeElement.offsetHeight;
  goog.dom.removeNode(sizeElement);
  return fontSize;
};
/**
 * @param {string} value
 * @return {!Object}
 */
goog.style.parseStyleAttribute = function(value) {
  var result = {};
  goog.array.forEach(value.split(/\s*;\s*/), function(pair) {
    var keyValue = pair.match(/\s*([\w-]+)\s*:(.+)/);
    if (keyValue) {
      var styleName = keyValue[1];
      var styleValue = goog.string.trim(keyValue[2]);
      result[goog.string.toCamelCase(styleName.toLowerCase())] = styleValue;
    }
  });
  return result;
};
/**
 * @param {Object} obj
 * @return {string}
 */
goog.style.toStyleAttribute = function(obj) {
  var buffer = [];
  goog.object.forEach(obj, function(value, key) {
    buffer.push(goog.string.toSelectorCase(key), ":", value, ";");
  });
  return buffer.join("");
};
/**
 * @param {Element} el
 * @param {string} value
 */
goog.style.setFloat = function(el, value) {
  el.style[goog.userAgent.IE ? "styleFloat" : "cssFloat"] = value;
};
/**
 * @param {Element} el
 * @return {string}
 */
goog.style.getFloat = function(el) {
  return el.style[goog.userAgent.IE ? "styleFloat" : "cssFloat"] || "";
};
/**
 * @param {string=} opt_className
 * @return {number}
 */
goog.style.getScrollbarWidth = function(opt_className) {
  var outerDiv = goog.dom.createElement(goog.dom.TagName.DIV);
  if (opt_className) {
    outerDiv.className = opt_className;
  }
  outerDiv.style.cssText = "overflow:auto;" + "position:absolute;top:0;width:100px;height:100px";
  var innerDiv = goog.dom.createElement(goog.dom.TagName.DIV);
  goog.style.setSize(innerDiv, "200px", "200px");
  outerDiv.appendChild(innerDiv);
  goog.dom.appendChild(goog.dom.getDocument().body, outerDiv);
  var width = outerDiv.offsetWidth - outerDiv.clientWidth;
  goog.dom.removeNode(outerDiv);
  return width;
};
/** @private @const @type {!RegExp} */ goog.style.MATRIX_TRANSLATION_REGEX_ = new RegExp("matrix\\([0-9\\.\\-]+, [0-9\\.\\-]+, " + "[0-9\\.\\-]+, [0-9\\.\\-]+, " + "([0-9\\.\\-]+)p?x?, ([0-9\\.\\-]+)p?x?\\)");
/**
 * @param {!Element} element
 * @return {!goog.math.Coordinate}
 */
goog.style.getCssTranslation = function(element) {
  var transform = goog.style.getComputedTransform(element);
  if (!transform) {
    return new goog.math.Coordinate(0, 0);
  }
  var matches = transform.match(goog.style.MATRIX_TRANSLATION_REGEX_);
  if (!matches) {
    return new goog.math.Coordinate(0, 0);
  }
  return new goog.math.Coordinate(parseFloat(matches[1]), parseFloat(matches[2]));
};

//# sourceMappingURL=goog.style.style.js.map
