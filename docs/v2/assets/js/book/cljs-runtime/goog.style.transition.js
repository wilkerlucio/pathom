goog.provide("goog.style.transition");
goog.provide("goog.style.transition.Css3Property");
goog.require("goog.array");
goog.require("goog.asserts");
goog.require("goog.dom");
goog.require("goog.dom.TagName");
goog.require("goog.dom.safe");
goog.require("goog.dom.vendor");
goog.require("goog.functions");
goog.require("goog.html.SafeHtml");
goog.require("goog.style");
goog.require("goog.userAgent");
/** @typedef {({property:string,duration:number,timing:string,delay:number}|string)} */ goog.style.transition.Css3Property;
/**
 * @param {Element} element
 * @param {(goog.style.transition.Css3Property|Array<goog.style.transition.Css3Property>)} properties
 * @suppress {strictMissingProperties}
 */
goog.style.transition.set = function(element, properties) {
  if (!goog.isArray(properties)) {
    properties = [properties];
  }
  goog.asserts.assert(properties.length > 0, "At least one Css3Property should be specified.");
  var values = goog.array.map(properties, function(p) {
    if (typeof p === "string") {
      return p;
    } else {
      goog.asserts.assertObject(p, "Expected css3 property to be an object.");
      var propString = p.property + " " + p.duration + "s " + p.timing + " " + p.delay + "s";
      goog.asserts.assert(p.property && typeof p.duration === "number" && p.timing && typeof p.delay === "number", "Unexpected css3 property value: %s", propString);
      return propString;
    }
  });
  goog.style.transition.setPropertyValue_(element, values.join(","));
};
/**
 * @param {Element} element
 */
goog.style.transition.removeAll = function(element) {
  goog.style.transition.setPropertyValue_(element, "");
};
/**
 * @return {boolean}
 */
goog.style.transition.isSupported = goog.functions.cacheReturnValue(function() {
  if (goog.userAgent.IE) {
    return goog.userAgent.isVersionOrHigher("10.0");
  }
  var el = goog.dom.createElement(goog.dom.TagName.DIV);
  var transition = "opacity 1s linear";
  var vendorPrefix = goog.dom.vendor.getVendorPrefix();
  var style = {"transition":transition};
  if (vendorPrefix) {
    style[vendorPrefix + "-transition"] = transition;
  }
  goog.dom.safe.setInnerHtml(el, goog.html.SafeHtml.create("div", {"style":style}));
  var testElement = /** @type {Element} */ (el.firstChild);
  goog.asserts.assert(testElement.nodeType == Node.ELEMENT_NODE);
  return goog.style.getStyle(testElement, "transition") != "";
});
/**
 * @private
 * @param {Element} element
 * @param {string} transitionValue
 */
goog.style.transition.setPropertyValue_ = function(element, transitionValue) {
  goog.style.setStyle(element, "transition", transitionValue);
};

//# sourceMappingURL=goog.style.transition.js.map
