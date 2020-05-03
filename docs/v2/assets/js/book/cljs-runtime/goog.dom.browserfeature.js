goog.provide("goog.dom.BrowserFeature");
goog.require("goog.userAgent");
/** @define {boolean} */ goog.dom.BrowserFeature.ASSUME_NO_OFFSCREEN_CANVAS = goog.define("goog.dom.ASSUME_NO_OFFSCREEN_CANVAS", false);
/** @define {boolean} */ goog.dom.BrowserFeature.ASSUME_OFFSCREEN_CANVAS = goog.define("goog.dom.ASSUME_OFFSCREEN_CANVAS", false);
/**
 * @private
 * @param {string} contextName
 * @return {boolean}
 */
goog.dom.BrowserFeature.detectOffscreenCanvas_ = function(contextName) {
  try {
    return Boolean((new self.OffscreenCanvas(0, 0)).getContext(contextName));
  } catch (ex) {
  }
  return false;
};
/** @const @type {boolean} */ goog.dom.BrowserFeature.OFFSCREEN_CANVAS_2D = !goog.dom.BrowserFeature.ASSUME_NO_OFFSCREEN_CANVAS && (goog.dom.BrowserFeature.ASSUME_OFFSCREEN_CANVAS || goog.dom.BrowserFeature.detectOffscreenCanvas_("2d"));
/** @const @type {boolean} */ goog.dom.BrowserFeature.CAN_ADD_NAME_OR_TYPE_ATTRIBUTES = !goog.userAgent.IE || goog.userAgent.isDocumentModeOrHigher(9);
/** @const @type {boolean} */ goog.dom.BrowserFeature.CAN_USE_CHILDREN_ATTRIBUTE = !goog.userAgent.GECKO && !goog.userAgent.IE || goog.userAgent.IE && goog.userAgent.isDocumentModeOrHigher(9) || goog.userAgent.GECKO && goog.userAgent.isVersionOrHigher("1.9.1");
/** @const @type {boolean} */ goog.dom.BrowserFeature.CAN_USE_INNER_TEXT = goog.userAgent.IE && !goog.userAgent.isVersionOrHigher("9");
/** @const @type {boolean} */ goog.dom.BrowserFeature.CAN_USE_PARENT_ELEMENT_PROPERTY = goog.userAgent.IE || goog.userAgent.OPERA || goog.userAgent.WEBKIT;
/** @const @type {boolean} */ goog.dom.BrowserFeature.INNER_HTML_NEEDS_SCOPED_ELEMENT = goog.userAgent.IE;
/** @const @type {boolean} */ goog.dom.BrowserFeature.LEGACY_IE_RANGES = goog.userAgent.IE && !goog.userAgent.isDocumentModeOrHigher(9);

//# sourceMappingURL=goog.dom.browserfeature.js.map
