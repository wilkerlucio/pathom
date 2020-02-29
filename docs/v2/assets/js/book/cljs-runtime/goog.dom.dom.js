/**
 * @suppress {strictMissingProperties}
 */
goog.provide("goog.dom");
goog.provide("goog.dom.Appendable");
goog.provide("goog.dom.DomHelper");
goog.require("goog.array");
goog.require("goog.asserts");
goog.require("goog.dom.BrowserFeature");
goog.require("goog.dom.NodeType");
goog.require("goog.dom.TagName");
goog.require("goog.dom.safe");
goog.require("goog.html.SafeHtml");
goog.require("goog.html.uncheckedconversions");
goog.require("goog.math.Coordinate");
goog.require("goog.math.Size");
goog.require("goog.object");
goog.require("goog.string");
goog.require("goog.string.Unicode");
goog.require("goog.userAgent");
/** @define {boolean} */ goog.dom.ASSUME_QUIRKS_MODE = goog.define("goog.dom.ASSUME_QUIRKS_MODE", false);
/** @define {boolean} */ goog.dom.ASSUME_STANDARDS_MODE = goog.define("goog.dom.ASSUME_STANDARDS_MODE", false);
/** @private @type {boolean} */ goog.dom.COMPAT_MODE_KNOWN_ = goog.dom.ASSUME_QUIRKS_MODE || goog.dom.ASSUME_STANDARDS_MODE;
/**
 * @param {(Node|Window)=} opt_element
 * @return {!goog.dom.DomHelper}
 */
goog.dom.getDomHelper = function(opt_element) {
  return opt_element ? new goog.dom.DomHelper(goog.dom.getOwnerDocument(opt_element)) : goog.dom.defaultDomHelper_ || (goog.dom.defaultDomHelper_ = new goog.dom.DomHelper);
};
/** @private @type {(!goog.dom.DomHelper|undefined)} */ goog.dom.defaultDomHelper_;
/**
 * @return {!Document}
 */
goog.dom.getDocument = function() {
  return document;
};
/**
 * @param {(string|Element)} element
 * @return {Element}
 */
goog.dom.getElement = function(element) {
  return goog.dom.getElementHelper_(document, element);
};
/**
 * @private
 * @param {!Document} doc
 * @param {(string|Element)} element
 * @return {Element}
 */
goog.dom.getElementHelper_ = function(doc, element) {
  return typeof element === "string" ? doc.getElementById(element) : element;
};
/**
 * @param {string} id
 * @return {!Element}
 */
goog.dom.getRequiredElement = function(id) {
  return goog.dom.getRequiredElementHelper_(document, id);
};
/**
 * @private
 * @param {!Document} doc
 * @param {string} id
 * @return {!Element}
 */
goog.dom.getRequiredElementHelper_ = function(doc, id) {
  goog.asserts.assertString(id);
  var element = goog.dom.getElementHelper_(doc, id);
  element = goog.asserts.assertElement(element, "No element found with id: " + id);
  return element;
};
/**
 * @param {(string|Element)} element
 * @return {Element}
 * @deprecated Use {@link goog.dom.getElement} instead.
 */
goog.dom.$ = goog.dom.getElement;
/**
 * @param {!goog.dom.TagName<T>} tagName
 * @param {(!Document|!Element)=} opt_parent
 * @return {!NodeList<R>}
 * @template T
 * @template R := cond(isUnknown(T),"Element",T) =:
 */
goog.dom.getElementsByTagName = function(tagName, opt_parent) {
  var parent = opt_parent || document;
  return parent.getElementsByTagName(String(tagName));
};
/**
 * @param {(string|?goog.dom.TagName<T>)=} opt_tag
 * @param {?string=} opt_class
 * @param {(Document|Element)=} opt_el
 * @return {!IArrayLike<R>}
 * @template T
 * @template R := cond(isUnknown(T),"Element",T) =:
 */
goog.dom.getElementsByTagNameAndClass = function(opt_tag, opt_class, opt_el) {
  return goog.dom.getElementsByTagNameAndClass_(document, opt_tag, opt_class, opt_el);
};
/**
 * @param {(string|?goog.dom.TagName<T>)=} opt_tag
 * @param {?string=} opt_class
 * @param {(Document|Element)=} opt_el
 * @return {?R}
 * @template T
 * @template R := cond(isUnknown(T),"Element",T) =:
 */
goog.dom.getElementByTagNameAndClass = function(opt_tag, opt_class, opt_el) {
  return goog.dom.getElementByTagNameAndClass_(document, opt_tag, opt_class, opt_el);
};
/**
 * @param {string} className
 * @param {(Document|Element)=} opt_el
 * @return {!IArrayLike<!Element>}
 */
goog.dom.getElementsByClass = function(className, opt_el) {
  var parent = opt_el || document;
  if (goog.dom.canUseQuerySelector_(parent)) {
    return parent.querySelectorAll("." + className);
  }
  return goog.dom.getElementsByTagNameAndClass_(document, "*", className, opt_el);
};
/**
 * @param {string} className
 * @param {(Element|Document)=} opt_el
 * @return {Element}
 */
goog.dom.getElementByClass = function(className, opt_el) {
  var parent = opt_el || document;
  var retVal = null;
  if (parent.getElementsByClassName) {
    retVal = parent.getElementsByClassName(className)[0];
  } else {
    retVal = goog.dom.getElementByTagNameAndClass_(document, "*", className, opt_el);
  }
  return retVal || null;
};
/**
 * @param {string} className
 * @param {(!Element|!Document)=} opt_root
 * @return {!Element}
 * @throws {goog.asserts.AssertionError}
 */
goog.dom.getRequiredElementByClass = function(className, opt_root) {
  var retValue = goog.dom.getElementByClass(className, opt_root);
  return goog.asserts.assert(retValue, "No element found with className: " + className);
};
/**
 * @private
 * @param {!(Element|Document)} parent
 * @return {boolean}
 */
goog.dom.canUseQuerySelector_ = function(parent) {
  return !!(parent.querySelectorAll && parent.querySelector);
};
/**
 * @private
 * @param {!Document} doc
 * @param {(string|?goog.dom.TagName<T>)=} opt_tag
 * @param {?string=} opt_class
 * @param {(Document|Element)=} opt_el
 * @return {!IArrayLike<R>}
 * @template T
 * @template R := cond(isUnknown(T),"Element",T) =:
 */
goog.dom.getElementsByTagNameAndClass_ = function(doc, opt_tag, opt_class, opt_el) {
  var parent = opt_el || doc;
  var tagName = opt_tag && opt_tag != "*" ? String(opt_tag).toUpperCase() : "";
  if (goog.dom.canUseQuerySelector_(parent) && (tagName || opt_class)) {
    var query = tagName + (opt_class ? "." + opt_class : "");
    return parent.querySelectorAll(query);
  }
  if (opt_class && parent.getElementsByClassName) {
    var els = parent.getElementsByClassName(opt_class);
    if (tagName) {
      var arrayLike = {};
      var len = 0;
      for (var i = 0, el; el = els[i]; i++) {
        if (tagName == el.nodeName) {
          arrayLike[len++] = el;
        }
      }
      arrayLike.length = len;
      return (/** @type {!IArrayLike<!Element>} */ (arrayLike));
    } else {
      return els;
    }
  }
  var els = parent.getElementsByTagName(tagName || "*");
  if (opt_class) {
    var arrayLike = {};
    var len = 0;
    for (var i = 0, el; el = els[i]; i++) {
      var className = el.className;
      if (typeof className.split == "function" && goog.array.contains(className.split(/\s+/), opt_class)) {
        arrayLike[len++] = el;
      }
    }
    arrayLike.length = len;
    return (/** @type {!IArrayLike<!Element>} */ (arrayLike));
  } else {
    return els;
  }
};
/**
 * @private
 * @param {!Document} doc
 * @param {(string|?goog.dom.TagName<T>)=} opt_tag
 * @param {?string=} opt_class
 * @param {(Document|Element)=} opt_el
 * @return {?R}
 * @template T
 * @template R := cond(isUnknown(T),"Element",T) =:
 */
goog.dom.getElementByTagNameAndClass_ = function(doc, opt_tag, opt_class, opt_el) {
  var parent = opt_el || doc;
  var tag = opt_tag && opt_tag != "*" ? String(opt_tag).toUpperCase() : "";
  if (goog.dom.canUseQuerySelector_(parent) && (tag || opt_class)) {
    return parent.querySelector(tag + (opt_class ? "." + opt_class : ""));
  }
  var elements = goog.dom.getElementsByTagNameAndClass_(doc, opt_tag, opt_class, opt_el);
  return elements[0] || null;
};
/**
 * @param {(string|?goog.dom.TagName<T>)=} opt_tag
 * @param {?string=} opt_class
 * @param {Element=} opt_el
 * @return {!IArrayLike<R>}
 * @template T
 * @template R := cond(isUnknown(T),"Element",T) =:
 * @deprecated Use {@link goog.dom.getElementsByTagNameAndClass} instead.
 */
goog.dom.$$ = goog.dom.getElementsByTagNameAndClass;
/**
 * @param {Element} element
 * @param {Object} properties
 */
goog.dom.setProperties = function(element, properties) {
  goog.object.forEach(properties, function(val, key) {
    if (val && typeof val == "object" && val.implementsGoogStringTypedString) {
      val = val.getTypedStringValue();
    }
    if (key == "style") {
      element.style.cssText = val;
    } else {
      if (key == "class") {
        element.className = val;
      } else {
        if (key == "for") {
          element.htmlFor = val;
        } else {
          if (goog.dom.DIRECT_ATTRIBUTE_MAP_.hasOwnProperty(key)) {
            element.setAttribute(goog.dom.DIRECT_ATTRIBUTE_MAP_[key], val);
          } else {
            if (goog.string.startsWith(key, "aria-") || goog.string.startsWith(key, "data-")) {
              element.setAttribute(key, val);
            } else {
              element[key] = val;
            }
          }
        }
      }
    }
  });
};
/** @private @const @type {!Object<string,string>} */ goog.dom.DIRECT_ATTRIBUTE_MAP_ = {"cellpadding":"cellPadding", "cellspacing":"cellSpacing", "colspan":"colSpan", "frameborder":"frameBorder", "height":"height", "maxlength":"maxLength", "nonce":"nonce", "role":"role", "rowspan":"rowSpan", "type":"type", "usemap":"useMap", "valign":"vAlign", "width":"width"};
/**
 * @param {Window=} opt_window
 * @return {!goog.math.Size}
 */
goog.dom.getViewportSize = function(opt_window) {
  return goog.dom.getViewportSize_(opt_window || window);
};
/**
 * @private
 * @param {Window} win
 * @return {!goog.math.Size}
 */
goog.dom.getViewportSize_ = function(win) {
  var doc = win.document;
  var el = goog.dom.isCss1CompatMode_(doc) ? doc.documentElement : doc.body;
  return new goog.math.Size(el.clientWidth, el.clientHeight);
};
/**
 * @return {number}
 */
goog.dom.getDocumentHeight = function() {
  return goog.dom.getDocumentHeight_(window);
};
/**
 * @param {!Window} win
 * @return {number}
 */
goog.dom.getDocumentHeightForWindow = function(win) {
  return goog.dom.getDocumentHeight_(win);
};
/**
 * @private
 * @param {!Window} win
 * @return {number}
 */
goog.dom.getDocumentHeight_ = function(win) {
  var doc = win.document;
  var height = 0;
  if (doc) {
    var body = doc.body;
    var docEl = /** @type {!HTMLElement} */ (doc.documentElement);
    if (!(docEl && body)) {
      return 0;
    }
    var vh = goog.dom.getViewportSize_(win).height;
    if (goog.dom.isCss1CompatMode_(doc) && docEl.scrollHeight) {
      height = docEl.scrollHeight != vh ? docEl.scrollHeight : docEl.offsetHeight;
    } else {
      var sh = docEl.scrollHeight;
      var oh = docEl.offsetHeight;
      if (docEl.clientHeight != oh) {
        sh = body.scrollHeight;
        oh = body.offsetHeight;
      }
      if (sh > vh) {
        height = sh > oh ? sh : oh;
      } else {
        height = sh < oh ? sh : oh;
      }
    }
  }
  return height;
};
/**
 * @param {Window=} opt_window
 * @return {!goog.math.Coordinate}
 * @deprecated Use {@link goog.dom.getDocumentScroll} instead.
 */
goog.dom.getPageScroll = function(opt_window) {
  var win = opt_window || goog.global || window;
  return goog.dom.getDomHelper(win.document).getDocumentScroll();
};
/**
 * @return {!goog.math.Coordinate}
 */
goog.dom.getDocumentScroll = function() {
  return goog.dom.getDocumentScroll_(document);
};
/**
 * @private
 * @param {!Document} doc
 * @return {!goog.math.Coordinate}
 */
goog.dom.getDocumentScroll_ = function(doc) {
  var el = goog.dom.getDocumentScrollElement_(doc);
  var win = goog.dom.getWindow_(doc);
  if (goog.userAgent.IE && goog.userAgent.isVersionOrHigher("10") && win.pageYOffset != el.scrollTop) {
    return new goog.math.Coordinate(el.scrollLeft, el.scrollTop);
  }
  return new goog.math.Coordinate(win.pageXOffset || el.scrollLeft, win.pageYOffset || el.scrollTop);
};
/**
 * @return {!Element}
 */
goog.dom.getDocumentScrollElement = function() {
  return goog.dom.getDocumentScrollElement_(document);
};
/**
 * @private
 * @param {!Document} doc
 * @return {!Element}
 */
goog.dom.getDocumentScrollElement_ = function(doc) {
  if (doc.scrollingElement) {
    return doc.scrollingElement;
  }
  if (!goog.userAgent.WEBKIT && goog.dom.isCss1CompatMode_(doc)) {
    return doc.documentElement;
  }
  return doc.body || doc.documentElement;
};
/**
 * @param {Document=} opt_doc
 * @return {!Window}
 */
goog.dom.getWindow = function(opt_doc) {
  return opt_doc ? goog.dom.getWindow_(opt_doc) : window;
};
/**
 * @private
 * @param {!Document} doc
 * @return {!Window}
 */
goog.dom.getWindow_ = function(doc) {
  return (/** @type {!Window} */ (doc.parentWindow || doc.defaultView));
};
/**
 * @param {(string|!goog.dom.TagName<T>)} tagName
 * @param {(?Object|?Array<string>|string)=} opt_attributes
 * @param {...(Object|string|Array|NodeList|null|undefined)} var_args
 * @return {R}
 * @template T
 * @template R := cond(isUnknown(T),"Element",T) =:
 */
goog.dom.createDom = function(tagName, opt_attributes, var_args) {
  return goog.dom.createDom_(document, arguments);
};
/**
 * @private
 * @param {!Document} doc
 * @param {!Arguments} args
 * @return {!Element}
 */
goog.dom.createDom_ = function(doc, args) {
  var tagName = String(args[0]);
  var attributes = args[1];
  if (!goog.dom.BrowserFeature.CAN_ADD_NAME_OR_TYPE_ATTRIBUTES && attributes && (attributes.name || attributes.type)) {
    var tagNameArr = ["\x3c", tagName];
    if (attributes.name) {
      tagNameArr.push(' name\x3d"', goog.string.htmlEscape(attributes.name), '"');
    }
    if (attributes.type) {
      tagNameArr.push(' type\x3d"', goog.string.htmlEscape(attributes.type), '"');
      var clone = {};
      goog.object.extend(clone, attributes);
      delete clone["type"];
      attributes = clone;
    }
    tagNameArr.push("\x3e");
    tagName = tagNameArr.join("");
  }
  var element = goog.dom.createElement_(doc, tagName);
  if (attributes) {
    if (typeof attributes === "string") {
      element.className = attributes;
    } else {
      if (goog.isArray(attributes)) {
        element.className = attributes.join(" ");
      } else {
        goog.dom.setProperties(element, attributes);
      }
    }
  }
  if (args.length > 2) {
    goog.dom.append_(doc, element, args, 2);
  }
  return element;
};
/**
 * @private
 * @param {!Document} doc
 * @param {!Node} parent
 * @param {!Arguments} args
 * @param {number} startIndex
 */
goog.dom.append_ = function(doc, parent, args, startIndex) {
  function childHandler(child) {
    if (child) {
      parent.appendChild(typeof child === "string" ? doc.createTextNode(child) : child);
    }
  }
  for (var i = startIndex; i < args.length; i++) {
    var arg = args[i];
    if (goog.isArrayLike(arg) && !goog.dom.isNodeLike(arg)) {
      goog.array.forEach(goog.dom.isNodeList(arg) ? goog.array.toArray(arg) : arg, childHandler);
    } else {
      childHandler(arg);
    }
  }
};
/**
 * @param {(string|!goog.dom.TagName<T>)} tagName
 * @param {(?Object|?Array<string>|string)=} opt_attributes
 * @param {...(Object|string|Array|NodeList|null|undefined)} var_args
 * @return {R}
 * @template T
 * @template R := cond(isUnknown(T),"Element",T) =:
 * @deprecated Use {@link goog.dom.createDom} instead.
 */
goog.dom.$dom = goog.dom.createDom;
/**
 * @param {(string|!goog.dom.TagName<T>)} name
 * @return {R}
 * @template T
 * @template R := cond(isUnknown(T),"Element",T) =:
 */
goog.dom.createElement = function(name) {
  return goog.dom.createElement_(document, name);
};
/**
 * @private
 * @param {!Document} doc
 * @param {(string|!goog.dom.TagName<T>)} name
 * @return {R}
 * @template T
 * @template R := cond(isUnknown(T),"Element",T) =:
 */
goog.dom.createElement_ = function(doc, name) {
  name = String(name);
  if (doc.contentType === "application/xhtml+xml") {
    name = name.toLowerCase();
  }
  return doc.createElement(name);
};
/**
 * @param {(number|string)} content
 * @return {!Text}
 */
goog.dom.createTextNode = function(content) {
  return document.createTextNode(String(content));
};
/**
 * @param {number} rows
 * @param {number} columns
 * @param {boolean=} opt_fillWithNbsp
 * @return {!Element}
 */
goog.dom.createTable = function(rows, columns, opt_fillWithNbsp) {
  return goog.dom.createTable_(document, rows, columns, !!opt_fillWithNbsp);
};
/**
 * @private
 * @param {!Document} doc
 * @param {number} rows
 * @param {number} columns
 * @param {boolean} fillWithNbsp
 * @return {!HTMLTableElement}
 */
goog.dom.createTable_ = function(doc, rows, columns, fillWithNbsp) {
  var table = goog.dom.createElement_(doc, goog.dom.TagName.TABLE);
  var tbody = table.appendChild(goog.dom.createElement_(doc, goog.dom.TagName.TBODY));
  for (var i = 0; i < rows; i++) {
    var tr = goog.dom.createElement_(doc, goog.dom.TagName.TR);
    for (var j = 0; j < columns; j++) {
      var td = goog.dom.createElement_(doc, goog.dom.TagName.TD);
      if (fillWithNbsp) {
        goog.dom.setTextContent(td, goog.string.Unicode.NBSP);
      }
      tr.appendChild(td);
    }
    tbody.appendChild(tr);
  }
  return table;
};
/**
 * @param {...!goog.string.Const} var_args
 * @return {!Node}
 */
goog.dom.constHtmlToNode = function(var_args) {
  var stringArray = goog.array.map(arguments, goog.string.Const.unwrap);
  var safeHtml = goog.html.uncheckedconversions.safeHtmlFromStringKnownToSatisfyTypeContract(goog.string.Const.from("Constant HTML string, that gets turned into a " + "Node later, so it will be automatically balanced."), stringArray.join(""));
  return goog.dom.safeHtmlToNode(safeHtml);
};
/**
 * @param {!goog.html.SafeHtml} html
 * @return {!Node}
 */
goog.dom.safeHtmlToNode = function(html) {
  return goog.dom.safeHtmlToNode_(document, html);
};
/**
 * @private
 * @param {!Document} doc
 * @param {!goog.html.SafeHtml} html
 * @return {!Node}
 */
goog.dom.safeHtmlToNode_ = function(doc, html) {
  var tempDiv = goog.dom.createElement_(doc, goog.dom.TagName.DIV);
  if (goog.dom.BrowserFeature.INNER_HTML_NEEDS_SCOPED_ELEMENT) {
    goog.dom.safe.setInnerHtml(tempDiv, goog.html.SafeHtml.concat(goog.html.SafeHtml.BR, html));
    tempDiv.removeChild(goog.asserts.assert(tempDiv.firstChild));
  } else {
    goog.dom.safe.setInnerHtml(tempDiv, html);
  }
  return goog.dom.childrenToNode_(doc, tempDiv);
};
/**
 * @private
 * @param {!Document} doc
 * @param {!Node} tempDiv
 * @return {!Node}
 */
goog.dom.childrenToNode_ = function(doc, tempDiv) {
  if (tempDiv.childNodes.length == 1) {
    return tempDiv.removeChild(goog.asserts.assert(tempDiv.firstChild));
  } else {
    var fragment = doc.createDocumentFragment();
    while (tempDiv.firstChild) {
      fragment.appendChild(tempDiv.firstChild);
    }
    return fragment;
  }
};
/**
 * @return {boolean}
 */
goog.dom.isCss1CompatMode = function() {
  return goog.dom.isCss1CompatMode_(document);
};
/**
 * @private
 * @param {!Document} doc
 * @return {boolean}
 */
goog.dom.isCss1CompatMode_ = function(doc) {
  if (goog.dom.COMPAT_MODE_KNOWN_) {
    return goog.dom.ASSUME_STANDARDS_MODE;
  }
  return doc.compatMode == "CSS1Compat";
};
/**
 * @param {Node} node
 * @return {boolean}
 */
goog.dom.canHaveChildren = function(node) {
  if (node.nodeType != goog.dom.NodeType.ELEMENT) {
    return false;
  }
  switch(/** @type {!Element} */ (node).tagName) {
    case String(goog.dom.TagName.APPLET):
    case String(goog.dom.TagName.AREA):
    case String(goog.dom.TagName.BASE):
    case String(goog.dom.TagName.BR):
    case String(goog.dom.TagName.COL):
    case String(goog.dom.TagName.COMMAND):
    case String(goog.dom.TagName.EMBED):
    case String(goog.dom.TagName.FRAME):
    case String(goog.dom.TagName.HR):
    case String(goog.dom.TagName.IMG):
    case String(goog.dom.TagName.INPUT):
    case String(goog.dom.TagName.IFRAME):
    case String(goog.dom.TagName.ISINDEX):
    case String(goog.dom.TagName.KEYGEN):
    case String(goog.dom.TagName.LINK):
    case String(goog.dom.TagName.NOFRAMES):
    case String(goog.dom.TagName.NOSCRIPT):
    case String(goog.dom.TagName.META):
    case String(goog.dom.TagName.OBJECT):
    case String(goog.dom.TagName.PARAM):
    case String(goog.dom.TagName.SCRIPT):
    case String(goog.dom.TagName.SOURCE):
    case String(goog.dom.TagName.STYLE):
    case String(goog.dom.TagName.TRACK):
    case String(goog.dom.TagName.WBR):
      return false;
  }
  return true;
};
/**
 * @param {Node} parent
 * @param {Node} child
 */
goog.dom.appendChild = function(parent, child) {
  goog.asserts.assert(parent != null && child != null, "goog.dom.appendChild expects non-null arguments");
  parent.appendChild(child);
};
/**
 * @param {!Node} parent
 * @param {...goog.dom.Appendable} var_args
 */
goog.dom.append = function(parent, var_args) {
  goog.dom.append_(goog.dom.getOwnerDocument(parent), parent, arguments, 1);
};
/**
 * @param {Node} node
 */
goog.dom.removeChildren = function(node) {
  var child;
  while (child = node.firstChild) {
    node.removeChild(child);
  }
};
/**
 * @param {Node} newNode
 * @param {Node} refNode
 */
goog.dom.insertSiblingBefore = function(newNode, refNode) {
  goog.asserts.assert(newNode != null && refNode != null, "goog.dom.insertSiblingBefore expects non-null arguments");
  if (refNode.parentNode) {
    refNode.parentNode.insertBefore(newNode, refNode);
  }
};
/**
 * @param {Node} newNode
 * @param {Node} refNode
 */
goog.dom.insertSiblingAfter = function(newNode, refNode) {
  goog.asserts.assert(newNode != null && refNode != null, "goog.dom.insertSiblingAfter expects non-null arguments");
  if (refNode.parentNode) {
    refNode.parentNode.insertBefore(newNode, refNode.nextSibling);
  }
};
/**
 * @param {Element} parent
 * @param {Node} child
 * @param {number} index
 */
goog.dom.insertChildAt = function(parent, child, index) {
  goog.asserts.assert(parent != null, "goog.dom.insertChildAt expects a non-null parent");
  parent.insertBefore(child, parent.childNodes[index] || null);
};
/**
 * @param {Node} node
 * @return {Node}
 */
goog.dom.removeNode = function(node) {
  return node && node.parentNode ? node.parentNode.removeChild(node) : null;
};
/**
 * @param {Node} newNode
 * @param {Node} oldNode
 */
goog.dom.replaceNode = function(newNode, oldNode) {
  goog.asserts.assert(newNode != null && oldNode != null, "goog.dom.replaceNode expects non-null arguments");
  var parent = oldNode.parentNode;
  if (parent) {
    parent.replaceChild(newNode, oldNode);
  }
};
/**
 * @param {Element} element
 * @return {(Element|undefined)}
 */
goog.dom.flattenElement = function(element) {
  var child, parent = element.parentNode;
  if (parent && parent.nodeType != goog.dom.NodeType.DOCUMENT_FRAGMENT) {
    if (element.removeNode) {
      return (/** @type {Element} */ (element.removeNode(false)));
    } else {
      while (child = element.firstChild) {
        parent.insertBefore(child, element);
      }
      return (/** @type {Element} */ (goog.dom.removeNode(element)));
    }
  }
};
/**
 * @param {Element} element
 * @return {!(Array<!Element>|NodeList<!Element>)}
 */
goog.dom.getChildren = function(element) {
  if (goog.dom.BrowserFeature.CAN_USE_CHILDREN_ATTRIBUTE && element.children != undefined) {
    return element.children;
  }
  return goog.array.filter(element.childNodes, function(node) {
    return node.nodeType == goog.dom.NodeType.ELEMENT;
  });
};
/**
 * @param {Node} node
 * @return {Element}
 */
goog.dom.getFirstElementChild = function(node) {
  if (node.firstElementChild !== undefined) {
    return /** @type {!Element} */ (node).firstElementChild;
  }
  return goog.dom.getNextElementNode_(node.firstChild, true);
};
/**
 * @param {Node} node
 * @return {Element}
 */
goog.dom.getLastElementChild = function(node) {
  if (node.lastElementChild !== undefined) {
    return /** @type {!Element} */ (node).lastElementChild;
  }
  return goog.dom.getNextElementNode_(node.lastChild, false);
};
/**
 * @param {Node} node
 * @return {Element}
 */
goog.dom.getNextElementSibling = function(node) {
  if (node.nextElementSibling !== undefined) {
    return /** @type {!Element} */ (node).nextElementSibling;
  }
  return goog.dom.getNextElementNode_(node.nextSibling, true);
};
/**
 * @param {Node} node
 * @return {Element}
 */
goog.dom.getPreviousElementSibling = function(node) {
  if (node.previousElementSibling !== undefined) {
    return /** @type {!Element} */ (node).previousElementSibling;
  }
  return goog.dom.getNextElementNode_(node.previousSibling, false);
};
/**
 * @private
 * @param {Node} node
 * @param {boolean} forward
 * @return {Element}
 */
goog.dom.getNextElementNode_ = function(node, forward) {
  while (node && node.nodeType != goog.dom.NodeType.ELEMENT) {
    node = forward ? node.nextSibling : node.previousSibling;
  }
  return (/** @type {Element} */ (node));
};
/**
 * @param {Node} node
 * @return {Node}
 */
goog.dom.getNextNode = function(node) {
  if (!node) {
    return null;
  }
  if (node.firstChild) {
    return node.firstChild;
  }
  while (node && !node.nextSibling) {
    node = node.parentNode;
  }
  return node ? node.nextSibling : null;
};
/**
 * @param {Node} node
 * @return {Node}
 */
goog.dom.getPreviousNode = function(node) {
  if (!node) {
    return null;
  }
  if (!node.previousSibling) {
    return node.parentNode;
  }
  node = node.previousSibling;
  while (node && node.lastChild) {
    node = node.lastChild;
  }
  return node;
};
/**
 * @param {?} obj
 * @return {boolean}
 */
goog.dom.isNodeLike = function(obj) {
  return goog.isObject(obj) && obj.nodeType > 0;
};
/**
 * @param {?} obj
 * @return {boolean}
 */
goog.dom.isElement = function(obj) {
  return goog.isObject(obj) && obj.nodeType == goog.dom.NodeType.ELEMENT;
};
/**
 * @param {?} obj
 * @return {boolean}
 */
goog.dom.isWindow = function(obj) {
  return goog.isObject(obj) && obj["window"] == obj;
};
/**
 * @param {Element} element
 * @return {Element}
 */
goog.dom.getParentElement = function(element) {
  var parent;
  if (goog.dom.BrowserFeature.CAN_USE_PARENT_ELEMENT_PROPERTY) {
    var isIe9 = goog.userAgent.IE && goog.userAgent.isVersionOrHigher("9") && !goog.userAgent.isVersionOrHigher("10");
    if (!(isIe9 && goog.global["SVGElement"] && element instanceof goog.global["SVGElement"])) {
      parent = element.parentElement;
      if (parent) {
        return parent;
      }
    }
  }
  parent = element.parentNode;
  return goog.dom.isElement(parent) ? /** @type {!Element} */ (parent) : null;
};
/**
 * @param {(?Node|undefined)} parent
 * @param {(?Node|undefined)} descendant
 * @return {boolean}
 */
goog.dom.contains = function(parent, descendant) {
  if (!parent || !descendant) {
    return false;
  }
  if (parent.contains && descendant.nodeType == goog.dom.NodeType.ELEMENT) {
    return parent == descendant || parent.contains(descendant);
  }
  if (typeof parent.compareDocumentPosition != "undefined") {
    return parent == descendant || Boolean(parent.compareDocumentPosition(descendant) & 16);
  }
  while (descendant && parent != descendant) {
    descendant = descendant.parentNode;
  }
  return descendant == parent;
};
/**
 * @param {Node} node1
 * @param {Node} node2
 * @return {number}
 */
goog.dom.compareNodeOrder = function(node1, node2) {
  if (node1 == node2) {
    return 0;
  }
  if (node1.compareDocumentPosition) {
    return node1.compareDocumentPosition(node2) & 2 ? 1 : -1;
  }
  if (goog.userAgent.IE && !goog.userAgent.isDocumentModeOrHigher(9)) {
    if (node1.nodeType == goog.dom.NodeType.DOCUMENT) {
      return -1;
    }
    if (node2.nodeType == goog.dom.NodeType.DOCUMENT) {
      return 1;
    }
  }
  if ("sourceIndex" in node1 || node1.parentNode && "sourceIndex" in node1.parentNode) {
    var isElement1 = node1.nodeType == goog.dom.NodeType.ELEMENT;
    var isElement2 = node2.nodeType == goog.dom.NodeType.ELEMENT;
    if (isElement1 && isElement2) {
      return node1.sourceIndex - node2.sourceIndex;
    } else {
      var parent1 = node1.parentNode;
      var parent2 = node2.parentNode;
      if (parent1 == parent2) {
        return goog.dom.compareSiblingOrder_(node1, node2);
      }
      if (!isElement1 && goog.dom.contains(parent1, node2)) {
        return -1 * goog.dom.compareParentsDescendantNodeIe_(node1, node2);
      }
      if (!isElement2 && goog.dom.contains(parent2, node1)) {
        return goog.dom.compareParentsDescendantNodeIe_(node2, node1);
      }
      return (isElement1 ? node1.sourceIndex : parent1.sourceIndex) - (isElement2 ? node2.sourceIndex : parent2.sourceIndex);
    }
  }
  var doc = goog.dom.getOwnerDocument(node1);
  var range1, range2;
  range1 = doc.createRange();
  range1.selectNode(node1);
  range1.collapse(true);
  range2 = doc.createRange();
  range2.selectNode(node2);
  range2.collapse(true);
  return range1.compareBoundaryPoints(goog.global["Range"].START_TO_END, range2);
};
/**
 * @private
 * @param {!Node} textNode
 * @param {Node} node
 * @return {number}
 */
goog.dom.compareParentsDescendantNodeIe_ = function(textNode, node) {
  var parent = textNode.parentNode;
  if (parent == node) {
    return -1;
  }
  var sibling = node;
  while (sibling.parentNode != parent) {
    sibling = sibling.parentNode;
  }
  return goog.dom.compareSiblingOrder_(sibling, textNode);
};
/**
 * @private
 * @param {Node} node1
 * @param {!Node} node2
 * @return {number}
 */
goog.dom.compareSiblingOrder_ = function(node1, node2) {
  var s = node2;
  while (s = s.previousSibling) {
    if (s == node1) {
      return -1;
    }
  }
  return 1;
};
/**
 * @param {...Node} var_args
 * @return {Node}
 */
goog.dom.findCommonAncestor = function(var_args) {
  var i, count = arguments.length;
  if (!count) {
    return null;
  } else {
    if (count == 1) {
      return arguments[0];
    }
  }
  var paths = [];
  var minLength = Infinity;
  for (i = 0; i < count; i++) {
    var ancestors = [];
    var node = arguments[i];
    while (node) {
      ancestors.unshift(node);
      node = node.parentNode;
    }
    paths.push(ancestors);
    minLength = Math.min(minLength, ancestors.length);
  }
  var output = null;
  for (i = 0; i < minLength; i++) {
    var first = paths[0][i];
    for (var j = 1; j < count; j++) {
      if (first != paths[j][i]) {
        return output;
      }
    }
    output = first;
  }
  return output;
};
/**
 * @param {!Node} node
 * @return {boolean}
 */
goog.dom.isInDocument = function(node) {
  return (node.ownerDocument.compareDocumentPosition(node) & 16) == 16;
};
/**
 * @param {(Node|Window)} node
 * @return {!Document}
 */
goog.dom.getOwnerDocument = function(node) {
  goog.asserts.assert(node, "Node cannot be null or undefined.");
  return (/** @type {!Document} */ (node.nodeType == goog.dom.NodeType.DOCUMENT ? node : node.ownerDocument || node.document));
};
/**
 * @param {Element} frame
 * @return {!Document}
 */
goog.dom.getFrameContentDocument = function(frame) {
  return frame.contentDocument || /** @type {!HTMLFrameElement} */ (frame).contentWindow.document;
};
/**
 * @param {Element} frame
 * @return {Window}
 */
goog.dom.getFrameContentWindow = function(frame) {
  try {
    return frame.contentWindow || (frame.contentDocument ? goog.dom.getWindow(frame.contentDocument) : null);
  } catch (e) {
  }
  return null;
};
/**
 * @param {Node} node
 * @param {(string|number)} text
 */
goog.dom.setTextContent = function(node, text) {
  goog.asserts.assert(node != null, "goog.dom.setTextContent expects a non-null value for node");
  if ("textContent" in node) {
    node.textContent = text;
  } else {
    if (node.nodeType == goog.dom.NodeType.TEXT) {
      /** @type {!Text} */ (node).data = String(text);
    } else {
      if (node.firstChild && node.firstChild.nodeType == goog.dom.NodeType.TEXT) {
        while (node.lastChild != node.firstChild) {
          node.removeChild(goog.asserts.assert(node.lastChild));
        }
        /** @type {!Text} */ (node.firstChild).data = String(text);
      } else {
        goog.dom.removeChildren(node);
        var doc = goog.dom.getOwnerDocument(node);
        node.appendChild(doc.createTextNode(String(text)));
      }
    }
  }
};
/**
 * @param {Element} element
 * @return {string}
 */
goog.dom.getOuterHtml = function(element) {
  goog.asserts.assert(element !== null, "goog.dom.getOuterHtml expects a non-null value for element");
  if ("outerHTML" in element) {
    return element.outerHTML;
  } else {
    var doc = goog.dom.getOwnerDocument(element);
    var div = goog.dom.createElement_(doc, goog.dom.TagName.DIV);
    div.appendChild(element.cloneNode(true));
    return div.innerHTML;
  }
};
/**
 * @param {Node} root
 * @param {function(Node):boolean} p
 * @return {(Node|undefined)}
 */
goog.dom.findNode = function(root, p) {
  var rv = [];
  var found = goog.dom.findNodes_(root, p, rv, true);
  return found ? rv[0] : undefined;
};
/**
 * @param {Node} root
 * @param {function(Node):boolean} p
 * @return {!Array<!Node>}
 */
goog.dom.findNodes = function(root, p) {
  var rv = [];
  goog.dom.findNodes_(root, p, rv, false);
  return rv;
};
/**
 * @private
 * @param {Node} root
 * @param {function(Node):boolean} p
 * @param {!Array<!Node>} rv
 * @param {boolean} findOne
 * @return {boolean}
 */
goog.dom.findNodes_ = function(root, p, rv, findOne) {
  if (root != null) {
    var child = root.firstChild;
    while (child) {
      if (p(child)) {
        rv.push(child);
        if (findOne) {
          return true;
        }
      }
      if (goog.dom.findNodes_(child, p, rv, findOne)) {
        return true;
      }
      child = child.nextSibling;
    }
  }
  return false;
};
/**
 * @param {(!Element|!Document)} root
 * @param {function(!Element):boolean} pred
 * @return {?Element}
 */
goog.dom.findElement = function(root, pred) {
  var stack = goog.dom.getChildrenReverse_(root);
  while (stack.length > 0) {
    var next = stack.pop();
    if (pred(next)) {
      return next;
    }
    for (var c = next.lastElementChild; c; c = c.previousElementSibling) {
      stack.push(c);
    }
  }
  return null;
};
/**
 * @param {(!Element|!Document)} root
 * @param {function(!Element):boolean} pred
 * @return {!Array<!Element>}
 */
goog.dom.findElements = function(root, pred) {
  var result = [], stack = goog.dom.getChildrenReverse_(root);
  while (stack.length > 0) {
    var next = stack.pop();
    if (pred(next)) {
      result.push(next);
    }
    for (var c = next.lastElementChild; c; c = c.previousElementSibling) {
      stack.push(c);
    }
  }
  return result;
};
/**
 * @private
 * @param {(!Element|!Document)} node
 * @return {!Array<!Element>}
 */
goog.dom.getChildrenReverse_ = function(node) {
  if (node.nodeType == goog.dom.NodeType.DOCUMENT) {
    return [node.documentElement];
  } else {
    var children = [];
    for (var c = node.lastElementChild; c; c = c.previousElementSibling) {
      children.push(c);
    }
    return children;
  }
};
/** @private @const @type {!Object<string,number>} */ goog.dom.TAGS_TO_IGNORE_ = {"SCRIPT":1, "STYLE":1, "HEAD":1, "IFRAME":1, "OBJECT":1};
/** @private @const @type {!Object<string,string>} */ goog.dom.PREDEFINED_TAG_VALUES_ = {"IMG":" ", "BR":"\n"};
/**
 * @param {!Element} element
 * @return {boolean}
 */
goog.dom.isFocusableTabIndex = function(element) {
  return goog.dom.hasSpecifiedTabIndex_(element) && goog.dom.isTabIndexFocusable_(element);
};
/**
 * @param {Element} element
 * @param {boolean} enable
 */
goog.dom.setFocusableTabIndex = function(element, enable) {
  if (enable) {
    element.tabIndex = 0;
  } else {
    element.tabIndex = -1;
    element.removeAttribute("tabIndex");
  }
};
/**
 * @param {!Element} element
 * @return {boolean}
 */
goog.dom.isFocusable = function(element) {
  var focusable;
  if (goog.dom.nativelySupportsFocus_(element)) {
    focusable = !element.disabled && (!goog.dom.hasSpecifiedTabIndex_(element) || goog.dom.isTabIndexFocusable_(element));
  } else {
    focusable = goog.dom.isFocusableTabIndex(element);
  }
  return focusable && goog.userAgent.IE ? goog.dom.hasNonZeroBoundingRect_(/** @type {!HTMLElement} */ (element)) : focusable;
};
/**
 * @private
 * @param {!Element} element
 * @return {boolean}
 */
goog.dom.hasSpecifiedTabIndex_ = function(element) {
  if (goog.userAgent.IE && !goog.userAgent.isVersionOrHigher("9")) {
    var attrNode = element.getAttributeNode("tabindex");
    return attrNode != null && attrNode.specified;
  } else {
    return element.hasAttribute("tabindex");
  }
};
/**
 * @private
 * @param {!Element} element
 * @return {boolean}
 */
goog.dom.isTabIndexFocusable_ = function(element) {
  var index = /** @type {!HTMLElement} */ (element).tabIndex;
  return typeof index === "number" && index >= 0 && index < 32768;
};
/**
 * @private
 * @param {!Element} element
 * @return {boolean}
 */
goog.dom.nativelySupportsFocus_ = function(element) {
  return element.tagName == goog.dom.TagName.A && element.hasAttribute("href") || element.tagName == goog.dom.TagName.INPUT || element.tagName == goog.dom.TagName.TEXTAREA || element.tagName == goog.dom.TagName.SELECT || element.tagName == goog.dom.TagName.BUTTON;
};
/**
 * @private
 * @param {!HTMLElement} element
 * @return {boolean}
 */
goog.dom.hasNonZeroBoundingRect_ = function(element) {
  var rect;
  if (!goog.isFunction(element["getBoundingClientRect"]) || goog.userAgent.IE && element.parentElement == null) {
    rect = {"height":element.offsetHeight, "width":element.offsetWidth};
  } else {
    rect = element.getBoundingClientRect();
  }
  return rect != null && rect.height > 0 && rect.width > 0;
};
/**
 * @param {Node} node
 * @return {string}
 */
goog.dom.getTextContent = function(node) {
  var textContent;
  if (goog.dom.BrowserFeature.CAN_USE_INNER_TEXT && node !== null && "innerText" in node) {
    textContent = goog.string.canonicalizeNewlines(node.innerText);
  } else {
    var buf = [];
    goog.dom.getTextContent_(node, buf, true);
    textContent = buf.join("");
  }
  textContent = textContent.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
  textContent = textContent.replace(/\u200B/g, "");
  if (!goog.dom.BrowserFeature.CAN_USE_INNER_TEXT) {
    textContent = textContent.replace(/ +/g, " ");
  }
  if (textContent != " ") {
    textContent = textContent.replace(/^\s*/, "");
  }
  return textContent;
};
/**
 * @param {Node} node
 * @return {string}
 */
goog.dom.getRawTextContent = function(node) {
  var buf = [];
  goog.dom.getTextContent_(node, buf, false);
  return buf.join("");
};
/**
 * @private
 * @param {Node} node
 * @param {Array<string>} buf
 * @param {boolean} normalizeWhitespace
 */
goog.dom.getTextContent_ = function(node, buf, normalizeWhitespace) {
  if (node.nodeName in goog.dom.TAGS_TO_IGNORE_) {
  } else {
    if (node.nodeType == goog.dom.NodeType.TEXT) {
      if (normalizeWhitespace) {
        buf.push(String(node.nodeValue).replace(/(\r\n|\r|\n)/g, ""));
      } else {
        buf.push(node.nodeValue);
      }
    } else {
      if (node.nodeName in goog.dom.PREDEFINED_TAG_VALUES_) {
        buf.push(goog.dom.PREDEFINED_TAG_VALUES_[node.nodeName]);
      } else {
        var child = node.firstChild;
        while (child) {
          goog.dom.getTextContent_(child, buf, normalizeWhitespace);
          child = child.nextSibling;
        }
      }
    }
  }
};
/**
 * @param {Node} node
 * @return {number}
 */
goog.dom.getNodeTextLength = function(node) {
  return goog.dom.getTextContent(node).length;
};
/**
 * @param {Node} node
 * @param {Node=} opt_offsetParent
 * @return {number}
 */
goog.dom.getNodeTextOffset = function(node, opt_offsetParent) {
  var root = opt_offsetParent || goog.dom.getOwnerDocument(node).body;
  var buf = [];
  while (node && node != root) {
    var cur = node;
    while (cur = cur.previousSibling) {
      buf.unshift(goog.dom.getTextContent(cur));
    }
    node = node.parentNode;
  }
  return goog.string.trimLeft(buf.join("")).replace(/ +/g, " ").length;
};
/**
 * @param {Node} parent
 * @param {number} offset
 * @param {Object=} opt_result
 * @return {Node}
 */
goog.dom.getNodeAtOffset = function(parent, offset, opt_result) {
  var stack = [parent], pos = 0, cur = null;
  while (stack.length > 0 && pos < offset) {
    cur = stack.pop();
    if (cur.nodeName in goog.dom.TAGS_TO_IGNORE_) {
    } else {
      if (cur.nodeType == goog.dom.NodeType.TEXT) {
        var text = cur.nodeValue.replace(/(\r\n|\r|\n)/g, "").replace(/ +/g, " ");
        pos += text.length;
      } else {
        if (cur.nodeName in goog.dom.PREDEFINED_TAG_VALUES_) {
          pos += goog.dom.PREDEFINED_TAG_VALUES_[cur.nodeName].length;
        } else {
          for (var i = cur.childNodes.length - 1; i >= 0; i--) {
            stack.push(cur.childNodes[i]);
          }
        }
      }
    }
  }
  if (goog.isObject(opt_result)) {
    opt_result.remainder = cur ? cur.nodeValue.length + offset - pos - 1 : 0;
    opt_result.node = cur;
  }
  return cur;
};
/**
 * @param {Object} val
 * @return {boolean}
 */
goog.dom.isNodeList = function(val) {
  if (val && typeof val.length == "number") {
    if (goog.isObject(val)) {
      return typeof val.item == "function" || typeof val.item == "string";
    } else {
      if (goog.isFunction(val)) {
        return typeof/** @type {?} */ (val.item) == "function";
      }
    }
  }
  return false;
};
/**
 * @param {Node} element
 * @param {?(goog.dom.TagName<T>|string)=} opt_tag
 * @param {?string=} opt_class
 * @param {number=} opt_maxSearchSteps
 * @return {?R}
 * @template T
 * @template R := cond(isUnknown(T),"Element",T) =:
 */
goog.dom.getAncestorByTagNameAndClass = function(element, opt_tag, opt_class, opt_maxSearchSteps) {
  if (!opt_tag && !opt_class) {
    return null;
  }
  var tagName = opt_tag ? String(opt_tag).toUpperCase() : null;
  return (/** @type {Element} */ (goog.dom.getAncestor(element, function(node) {
    return (!tagName || node.nodeName == tagName) && (!opt_class || typeof node.className === "string" && goog.array.contains(node.className.split(/\s+/), opt_class));
  }, true, opt_maxSearchSteps)));
};
/**
 * @param {Node} element
 * @param {string} className
 * @param {number=} opt_maxSearchSteps
 * @return {Element}
 */
goog.dom.getAncestorByClass = function(element, className, opt_maxSearchSteps) {
  return goog.dom.getAncestorByTagNameAndClass(element, null, className, opt_maxSearchSteps);
};
/**
 * @param {Node} element
 * @param {function(Node):boolean} matcher
 * @param {boolean=} opt_includeNode
 * @param {number=} opt_maxSearchSteps
 * @return {Node}
 */
goog.dom.getAncestor = function(element, matcher, opt_includeNode, opt_maxSearchSteps) {
  if (element && !opt_includeNode) {
    element = element.parentNode;
  }
  var steps = 0;
  while (element && (opt_maxSearchSteps == null || steps <= opt_maxSearchSteps)) {
    goog.asserts.assert(element.name != "parentNode");
    if (matcher(element)) {
      return element;
    }
    element = element.parentNode;
    steps++;
  }
  return null;
};
/**
 * @param {Document} doc
 * @return {Element}
 */
goog.dom.getActiveElement = function(doc) {
  try {
    var activeElement = doc && doc.activeElement;
    return activeElement && activeElement.nodeName ? activeElement : null;
  } catch (e) {
    return null;
  }
};
/**
 * @return {number}
 */
goog.dom.getPixelRatio = function() {
  var win = goog.dom.getWindow();
  if (win.devicePixelRatio !== undefined) {
    return win.devicePixelRatio;
  } else {
    if (win.matchMedia) {
      return goog.dom.matchesPixelRatio_(3) || goog.dom.matchesPixelRatio_(2) || goog.dom.matchesPixelRatio_(1.5) || goog.dom.matchesPixelRatio_(1) || .75;
    }
  }
  return 1;
};
/**
 * @private
 * @param {number} pixelRatio
 * @return {number}
 */
goog.dom.matchesPixelRatio_ = function(pixelRatio) {
  var win = goog.dom.getWindow();
  /** @const @type {number} */ var dpiPerDppx = 96;
  var query = "(min-resolution: " + pixelRatio + "dppx)," + "(min--moz-device-pixel-ratio: " + pixelRatio + ")," + "(min-resolution: " + pixelRatio * dpiPerDppx + "dpi)";
  return win.matchMedia(query).matches ? pixelRatio : 0;
};
/**
 * @param {(!HTMLCanvasElement|!OffscreenCanvas)} canvas
 * @return {!CanvasRenderingContext2D}
 */
goog.dom.getCanvasContext2D = function(canvas) {
  return (/** @type {!CanvasRenderingContext2D} */ (canvas.getContext("2d")));
};
/**
 * @constructor
 * @param {Document=} opt_document
 */
goog.dom.DomHelper = function(opt_document) {
  /** @private @type {!Document} */ this.document_ = opt_document || goog.global.document || document;
};
/**
 * @param {Node=} opt_node
 * @return {!goog.dom.DomHelper}
 */
goog.dom.DomHelper.prototype.getDomHelper = goog.dom.getDomHelper;
/**
 * @param {!Document} document
 */
goog.dom.DomHelper.prototype.setDocument = function(document) {
  this.document_ = document;
};
/**
 * @return {!Document}
 */
goog.dom.DomHelper.prototype.getDocument = function() {
  return this.document_;
};
/**
 * @param {(string|Element)} element
 * @return {Element}
 */
goog.dom.DomHelper.prototype.getElement = function(element) {
  return goog.dom.getElementHelper_(this.document_, element);
};
/**
 * @param {string} id
 * @return {!Element}
 */
goog.dom.DomHelper.prototype.getRequiredElement = function(id) {
  return goog.dom.getRequiredElementHelper_(this.document_, id);
};
/**
 * @param {(string|Element)} element
 * @return {Element}
 * @deprecated Use {@link goog.dom.DomHelper.prototype.getElement} instead.
 */
goog.dom.DomHelper.prototype.$ = goog.dom.DomHelper.prototype.getElement;
/**
 * @param {!goog.dom.TagName<T>} tagName
 * @param {(!Document|!Element)=} opt_parent
 * @return {!NodeList<R>}
 * @template T
 * @template R := cond(isUnknown(T),"Element",T) =:
 */
goog.dom.DomHelper.prototype.getElementsByTagName = function(tagName, opt_parent) {
  var parent = opt_parent || this.document_;
  return parent.getElementsByTagName(String(tagName));
};
/**
 * @param {(string|?goog.dom.TagName<T>)=} opt_tag
 * @param {?string=} opt_class
 * @param {(Document|Element)=} opt_el
 * @return {!IArrayLike<R>}
 * @template T
 * @template R := cond(isUnknown(T),"Element",T) =:
 */
goog.dom.DomHelper.prototype.getElementsByTagNameAndClass = function(opt_tag, opt_class, opt_el) {
  return goog.dom.getElementsByTagNameAndClass_(this.document_, opt_tag, opt_class, opt_el);
};
/**
 * @param {(string|?goog.dom.TagName<T>)=} opt_tag
 * @param {?string=} opt_class
 * @param {(Document|Element)=} opt_el
 * @return {?R}
 * @template T
 * @template R := cond(isUnknown(T),"Element",T) =:
 */
goog.dom.DomHelper.prototype.getElementByTagNameAndClass = function(opt_tag, opt_class, opt_el) {
  return goog.dom.getElementByTagNameAndClass_(this.document_, opt_tag, opt_class, opt_el);
};
/**
 * @param {string} className
 * @param {(Element|Document)=} opt_el
 * @return {!IArrayLike<!Element>}
 */
goog.dom.DomHelper.prototype.getElementsByClass = function(className, opt_el) {
  var doc = opt_el || this.document_;
  return goog.dom.getElementsByClass(className, doc);
};
/**
 * @param {string} className
 * @param {(Element|Document)=} opt_el
 * @return {Element}
 */
goog.dom.DomHelper.prototype.getElementByClass = function(className, opt_el) {
  var doc = opt_el || this.document_;
  return goog.dom.getElementByClass(className, doc);
};
/**
 * @param {string} className
 * @param {(!Element|!Document)=} opt_root
 * @return {!Element}
 * @throws {goog.asserts.AssertionError}
 */
goog.dom.DomHelper.prototype.getRequiredElementByClass = function(className, opt_root) {
  var root = opt_root || this.document_;
  return goog.dom.getRequiredElementByClass(className, root);
};
/**
 * @param {(string|?goog.dom.TagName<T>)=} opt_tag
 * @param {?string=} opt_class
 * @param {Element=} opt_el
 * @return {!IArrayLike<R>}
 * @template T
 * @template R := cond(isUnknown(T),"Element",T) =:
 * @deprecated Use DomHelper getElementsByTagNameAndClass.
 */
goog.dom.DomHelper.prototype.$$ = goog.dom.DomHelper.prototype.getElementsByTagNameAndClass;
/**
 * @param {Element} element
 * @param {Object} properties
 */
goog.dom.DomHelper.prototype.setProperties = goog.dom.setProperties;
/**
 * @param {Window=} opt_window
 * @return {!goog.math.Size}
 */
goog.dom.DomHelper.prototype.getViewportSize = function(opt_window) {
  return goog.dom.getViewportSize(opt_window || this.getWindow());
};
/**
 * @return {number}
 */
goog.dom.DomHelper.prototype.getDocumentHeight = function() {
  return goog.dom.getDocumentHeight_(this.getWindow());
};
/** @typedef {(Object|string|Array|NodeList)} */ goog.dom.Appendable;
/**
 * @param {(string|!goog.dom.TagName<T>)} tagName
 * @param {(?Object|?Array<string>|string)=} opt_attributes
 * @param {...(goog.dom.Appendable|undefined)} var_args
 * @return {R}
 * @template T
 * @template R := cond(isUnknown(T),"Element",T) =:
 */
goog.dom.DomHelper.prototype.createDom = function(tagName, opt_attributes, var_args) {
  return goog.dom.createDom_(this.document_, arguments);
};
/**
 * @param {(string|!goog.dom.TagName<T>)} tagName
 * @param {(?Object|?Array<string>|string)=} opt_attributes
 * @param {...(goog.dom.Appendable|undefined)} var_args
 * @return {R}
 * @template T
 * @template R := cond(isUnknown(T),"Element",T) =:
 * @deprecated Use {@link goog.dom.DomHelper.prototype.createDom} instead.
 */
goog.dom.DomHelper.prototype.$dom = goog.dom.DomHelper.prototype.createDom;
/**
 * @param {(string|!goog.dom.TagName<T>)} name
 * @return {R}
 * @template T
 * @template R := cond(isUnknown(T),"Element",T) =:
 */
goog.dom.DomHelper.prototype.createElement = function(name) {
  return goog.dom.createElement_(this.document_, name);
};
/**
 * @param {(number|string)} content
 * @return {!Text}
 */
goog.dom.DomHelper.prototype.createTextNode = function(content) {
  return this.document_.createTextNode(String(content));
};
/**
 * @param {number} rows
 * @param {number} columns
 * @param {boolean=} opt_fillWithNbsp
 * @return {!HTMLElement}
 */
goog.dom.DomHelper.prototype.createTable = function(rows, columns, opt_fillWithNbsp) {
  return goog.dom.createTable_(this.document_, rows, columns, !!opt_fillWithNbsp);
};
/**
 * @param {!goog.html.SafeHtml} html
 * @return {!Node}
 */
goog.dom.DomHelper.prototype.safeHtmlToNode = function(html) {
  return goog.dom.safeHtmlToNode_(this.document_, html);
};
/**
 * @return {boolean}
 */
goog.dom.DomHelper.prototype.isCss1CompatMode = function() {
  return goog.dom.isCss1CompatMode_(this.document_);
};
/**
 * @return {!Window}
 */
goog.dom.DomHelper.prototype.getWindow = function() {
  return goog.dom.getWindow_(this.document_);
};
/**
 * @return {!Element}
 */
goog.dom.DomHelper.prototype.getDocumentScrollElement = function() {
  return goog.dom.getDocumentScrollElement_(this.document_);
};
/**
 * @return {!goog.math.Coordinate}
 */
goog.dom.DomHelper.prototype.getDocumentScroll = function() {
  return goog.dom.getDocumentScroll_(this.document_);
};
/**
 * @param {Document=} opt_doc
 * @return {Element}
 */
goog.dom.DomHelper.prototype.getActiveElement = function(opt_doc) {
  return goog.dom.getActiveElement(opt_doc || this.document_);
};
/**
 * @param {Node} parent
 * @param {Node} child
 */
goog.dom.DomHelper.prototype.appendChild = goog.dom.appendChild;
/**
 * @param {!Node} parent
 * @param {...goog.dom.Appendable} var_args
 */
goog.dom.DomHelper.prototype.append = goog.dom.append;
/**
 * @param {Node} node
 * @return {boolean}
 */
goog.dom.DomHelper.prototype.canHaveChildren = goog.dom.canHaveChildren;
/**
 * @param {Node} node
 */
goog.dom.DomHelper.prototype.removeChildren = goog.dom.removeChildren;
/**
 * @param {Node} newNode
 * @param {Node} refNode
 */
goog.dom.DomHelper.prototype.insertSiblingBefore = goog.dom.insertSiblingBefore;
/**
 * @param {Node} newNode
 * @param {Node} refNode
 */
goog.dom.DomHelper.prototype.insertSiblingAfter = goog.dom.insertSiblingAfter;
/**
 * @param {Element} parent
 * @param {Node} child
 * @param {number} index
 */
goog.dom.DomHelper.prototype.insertChildAt = goog.dom.insertChildAt;
/**
 * @param {Node} node
 * @return {Node}
 */
goog.dom.DomHelper.prototype.removeNode = goog.dom.removeNode;
/**
 * @param {Node} newNode
 * @param {Node} oldNode
 */
goog.dom.DomHelper.prototype.replaceNode = goog.dom.replaceNode;
/**
 * @param {Element} element
 * @return {(Element|undefined)}
 */
goog.dom.DomHelper.prototype.flattenElement = goog.dom.flattenElement;
/**
 * @param {Element} element
 * @return {!(Array<!Element>|NodeList<!Element>)}
 */
goog.dom.DomHelper.prototype.getChildren = goog.dom.getChildren;
/**
 * @param {Node} node
 * @return {Element}
 */
goog.dom.DomHelper.prototype.getFirstElementChild = goog.dom.getFirstElementChild;
/**
 * @param {Node} node
 * @return {Element}
 */
goog.dom.DomHelper.prototype.getLastElementChild = goog.dom.getLastElementChild;
/**
 * @param {Node} node
 * @return {Element}
 */
goog.dom.DomHelper.prototype.getNextElementSibling = goog.dom.getNextElementSibling;
/**
 * @param {Node} node
 * @return {Element}
 */
goog.dom.DomHelper.prototype.getPreviousElementSibling = goog.dom.getPreviousElementSibling;
/**
 * @param {Node} node
 * @return {Node}
 */
goog.dom.DomHelper.prototype.getNextNode = goog.dom.getNextNode;
/**
 * @param {Node} node
 * @return {Node}
 */
goog.dom.DomHelper.prototype.getPreviousNode = goog.dom.getPreviousNode;
/**
 * @param {?} obj
 * @return {boolean}
 */
goog.dom.DomHelper.prototype.isNodeLike = goog.dom.isNodeLike;
/**
 * @param {?} obj
 * @return {boolean}
 */
goog.dom.DomHelper.prototype.isElement = goog.dom.isElement;
/**
 * @param {?} obj
 * @return {boolean}
 */
goog.dom.DomHelper.prototype.isWindow = goog.dom.isWindow;
/**
 * @param {Element} element
 * @return {Element}
 */
goog.dom.DomHelper.prototype.getParentElement = goog.dom.getParentElement;
/**
 * @param {Node} parent
 * @param {Node} descendant
 * @return {boolean}
 */
goog.dom.DomHelper.prototype.contains = goog.dom.contains;
/**
 * @param {Node} node1
 * @param {Node} node2
 * @return {number}
 */
goog.dom.DomHelper.prototype.compareNodeOrder = goog.dom.compareNodeOrder;
/**
 * @param {...Node} var_args
 * @return {Node}
 */
goog.dom.DomHelper.prototype.findCommonAncestor = goog.dom.findCommonAncestor;
/**
 * @param {Node} node
 * @return {!Document}
 */
goog.dom.DomHelper.prototype.getOwnerDocument = goog.dom.getOwnerDocument;
/**
 * @param {Element} iframe
 * @return {!Document}
 */
goog.dom.DomHelper.prototype.getFrameContentDocument = goog.dom.getFrameContentDocument;
/**
 * @param {Element} frame
 * @return {Window}
 */
goog.dom.DomHelper.prototype.getFrameContentWindow = goog.dom.getFrameContentWindow;
/**
 * @param {Node} node
 * @param {(string|number)} text
 */
goog.dom.DomHelper.prototype.setTextContent = goog.dom.setTextContent;
/**
 * @param {Element} element
 * @return {string}
 */
goog.dom.DomHelper.prototype.getOuterHtml = goog.dom.getOuterHtml;
/**
 * @param {Node} root
 * @param {function(Node):boolean} p
 * @return {(Node|undefined)}
 */
goog.dom.DomHelper.prototype.findNode = goog.dom.findNode;
/**
 * @param {Node} root
 * @param {function(Node):boolean} p
 * @return {Array<Node>}
 */
goog.dom.DomHelper.prototype.findNodes = goog.dom.findNodes;
/**
 * @param {!Element} element
 * @return {boolean}
 */
goog.dom.DomHelper.prototype.isFocusableTabIndex = goog.dom.isFocusableTabIndex;
/**
 * @param {Element} element
 * @param {boolean} enable
 */
goog.dom.DomHelper.prototype.setFocusableTabIndex = goog.dom.setFocusableTabIndex;
/**
 * @param {!Element} element
 * @return {boolean}
 */
goog.dom.DomHelper.prototype.isFocusable = goog.dom.isFocusable;
/**
 * @param {Node} node
 * @return {string}
 */
goog.dom.DomHelper.prototype.getTextContent = goog.dom.getTextContent;
/**
 * @param {Node} node
 * @return {number}
 */
goog.dom.DomHelper.prototype.getNodeTextLength = goog.dom.getNodeTextLength;
/**
 * @param {Node} node
 * @param {Node=} opt_offsetParent
 * @return {number}
 */
goog.dom.DomHelper.prototype.getNodeTextOffset = goog.dom.getNodeTextOffset;
/**
 * @param {Node} parent
 * @param {number} offset
 * @param {Object=} opt_result
 * @return {Node}
 */
goog.dom.DomHelper.prototype.getNodeAtOffset = goog.dom.getNodeAtOffset;
/**
 * @param {Object} val
 * @return {boolean}
 */
goog.dom.DomHelper.prototype.isNodeList = goog.dom.isNodeList;
/**
 * @param {Node} element
 * @param {?(goog.dom.TagName<T>|string)=} opt_tag
 * @param {?string=} opt_class
 * @param {number=} opt_maxSearchSteps
 * @return {?R}
 * @template T
 * @template R := cond(isUnknown(T),"Element",T) =:
 */
goog.dom.DomHelper.prototype.getAncestorByTagNameAndClass = goog.dom.getAncestorByTagNameAndClass;
/**
 * @param {Node} element
 * @param {string} class
 * @param {number=} opt_maxSearchSteps
 * @return {Element}
 */
goog.dom.DomHelper.prototype.getAncestorByClass = goog.dom.getAncestorByClass;
/**
 * @param {Node} element
 * @param {function(Node):boolean} matcher
 * @param {boolean=} opt_includeNode
 * @param {number=} opt_maxSearchSteps
 * @return {Node}
 */
goog.dom.DomHelper.prototype.getAncestor = goog.dom.getAncestor;
/**
 * @param {!HTMLCanvasElement} canvas
 * @return {!CanvasRenderingContext2D}
 */
goog.dom.DomHelper.prototype.getCanvasContext2D = goog.dom.getCanvasContext2D;

//# sourceMappingURL=goog.dom.dom.js.map
