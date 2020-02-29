goog.provide("goog.userAgent");
goog.require("goog.labs.userAgent.browser");
goog.require("goog.labs.userAgent.engine");
goog.require("goog.labs.userAgent.platform");
goog.require("goog.labs.userAgent.util");
goog.require("goog.reflect");
goog.require("goog.string");
/** @define {boolean} */ goog.userAgent.ASSUME_IE = goog.define("goog.userAgent.ASSUME_IE", false);
/** @define {boolean} */ goog.userAgent.ASSUME_EDGE = goog.define("goog.userAgent.ASSUME_EDGE", false);
/** @define {boolean} */ goog.userAgent.ASSUME_GECKO = goog.define("goog.userAgent.ASSUME_GECKO", false);
/** @define {boolean} */ goog.userAgent.ASSUME_WEBKIT = goog.define("goog.userAgent.ASSUME_WEBKIT", false);
/** @define {boolean} */ goog.userAgent.ASSUME_MOBILE_WEBKIT = goog.define("goog.userAgent.ASSUME_MOBILE_WEBKIT", false);
/** @define {boolean} */ goog.userAgent.ASSUME_OPERA = goog.define("goog.userAgent.ASSUME_OPERA", false);
/** @define {boolean} */ goog.userAgent.ASSUME_ANY_VERSION = goog.define("goog.userAgent.ASSUME_ANY_VERSION", false);
/** @private @type {boolean} */ goog.userAgent.BROWSER_KNOWN_ = goog.userAgent.ASSUME_IE || goog.userAgent.ASSUME_EDGE || goog.userAgent.ASSUME_GECKO || goog.userAgent.ASSUME_MOBILE_WEBKIT || goog.userAgent.ASSUME_WEBKIT || goog.userAgent.ASSUME_OPERA;
/**
 * @return {string}
 */
goog.userAgent.getUserAgentString = function() {
  return goog.labs.userAgent.util.getUserAgent();
};
/**
 * @return {?Navigator}
 */
goog.userAgent.getNavigatorTyped = function() {
  return goog.global["navigator"] || null;
};
/**
 * @return {?Object}
 */
goog.userAgent.getNavigator = function() {
  return goog.userAgent.getNavigatorTyped();
};
/** @type {boolean} */ goog.userAgent.OPERA = goog.userAgent.BROWSER_KNOWN_ ? goog.userAgent.ASSUME_OPERA : goog.labs.userAgent.browser.isOpera();
/** @type {boolean} */ goog.userAgent.IE = goog.userAgent.BROWSER_KNOWN_ ? goog.userAgent.ASSUME_IE : goog.labs.userAgent.browser.isIE();
/** @type {boolean} */ goog.userAgent.EDGE = goog.userAgent.BROWSER_KNOWN_ ? goog.userAgent.ASSUME_EDGE : goog.labs.userAgent.engine.isEdge();
/** @type {boolean} */ goog.userAgent.EDGE_OR_IE = goog.userAgent.EDGE || goog.userAgent.IE;
/** @type {boolean} */ goog.userAgent.GECKO = goog.userAgent.BROWSER_KNOWN_ ? goog.userAgent.ASSUME_GECKO : goog.labs.userAgent.engine.isGecko();
/** @type {boolean} */ goog.userAgent.WEBKIT = goog.userAgent.BROWSER_KNOWN_ ? goog.userAgent.ASSUME_WEBKIT || goog.userAgent.ASSUME_MOBILE_WEBKIT : goog.labs.userAgent.engine.isWebKit();
/**
 * @private
 * @return {boolean}
 */
goog.userAgent.isMobile_ = function() {
  return goog.userAgent.WEBKIT && goog.labs.userAgent.util.matchUserAgent("Mobile");
};
/** @type {boolean} */ goog.userAgent.MOBILE = goog.userAgent.ASSUME_MOBILE_WEBKIT || goog.userAgent.isMobile_();
/**
 * @type {boolean}
 * @deprecated Use {@link goog.userAgent.product.SAFARI} instead. TODO(nicksantos): Delete this from goog.userAgent.
 */
goog.userAgent.SAFARI = goog.userAgent.WEBKIT;
/**
 * @private
 * @return {string}
 */
goog.userAgent.determinePlatform_ = function() {
  var navigator = goog.userAgent.getNavigatorTyped();
  return navigator && navigator.platform || "";
};
/** @type {string} */ goog.userAgent.PLATFORM = goog.userAgent.determinePlatform_();
/** @define {boolean} */ goog.userAgent.ASSUME_MAC = goog.define("goog.userAgent.ASSUME_MAC", false);
/** @define {boolean} */ goog.userAgent.ASSUME_WINDOWS = goog.define("goog.userAgent.ASSUME_WINDOWS", false);
/** @define {boolean} */ goog.userAgent.ASSUME_LINUX = goog.define("goog.userAgent.ASSUME_LINUX", false);
/** @define {boolean} */ goog.userAgent.ASSUME_X11 = goog.define("goog.userAgent.ASSUME_X11", false);
/** @define {boolean} */ goog.userAgent.ASSUME_ANDROID = goog.define("goog.userAgent.ASSUME_ANDROID", false);
/** @define {boolean} */ goog.userAgent.ASSUME_IPHONE = goog.define("goog.userAgent.ASSUME_IPHONE", false);
/** @define {boolean} */ goog.userAgent.ASSUME_IPAD = goog.define("goog.userAgent.ASSUME_IPAD", false);
/** @define {boolean} */ goog.userAgent.ASSUME_IPOD = goog.define("goog.userAgent.ASSUME_IPOD", false);
/** @define {boolean} */ goog.userAgent.ASSUME_KAIOS = goog.define("goog.userAgent.ASSUME_KAIOS", false);
/** @define {boolean} */ goog.userAgent.ASSUME_GO2PHONE = goog.define("goog.userAgent.ASSUME_GO2PHONE", false);
/** @private @type {boolean} */ goog.userAgent.PLATFORM_KNOWN_ = goog.userAgent.ASSUME_MAC || goog.userAgent.ASSUME_WINDOWS || goog.userAgent.ASSUME_LINUX || goog.userAgent.ASSUME_X11 || goog.userAgent.ASSUME_ANDROID || goog.userAgent.ASSUME_IPHONE || goog.userAgent.ASSUME_IPAD || goog.userAgent.ASSUME_IPOD;
/** @type {boolean} */ goog.userAgent.MAC = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_MAC : goog.labs.userAgent.platform.isMacintosh();
/** @type {boolean} */ goog.userAgent.WINDOWS = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_WINDOWS : goog.labs.userAgent.platform.isWindows();
/**
 * @private
 * @return {boolean}
 */
goog.userAgent.isLegacyLinux_ = function() {
  return goog.labs.userAgent.platform.isLinux() || goog.labs.userAgent.platform.isChromeOS();
};
/** @type {boolean} */ goog.userAgent.LINUX = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_LINUX : goog.userAgent.isLegacyLinux_();
/**
 * @private
 * @return {boolean}
 */
goog.userAgent.isX11_ = function() {
  var navigator = goog.userAgent.getNavigatorTyped();
  return !!navigator && goog.string.contains(navigator["appVersion"] || "", "X11");
};
/** @type {boolean} */ goog.userAgent.X11 = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_X11 : goog.userAgent.isX11_();
/** @type {boolean} */ goog.userAgent.ANDROID = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_ANDROID : goog.labs.userAgent.platform.isAndroid();
/** @type {boolean} */ goog.userAgent.IPHONE = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_IPHONE : goog.labs.userAgent.platform.isIphone();
/** @type {boolean} */ goog.userAgent.IPAD = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_IPAD : goog.labs.userAgent.platform.isIpad();
/** @type {boolean} */ goog.userAgent.IPOD = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_IPOD : goog.labs.userAgent.platform.isIpod();
/** @type {boolean} */ goog.userAgent.IOS = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_IPHONE || goog.userAgent.ASSUME_IPAD || goog.userAgent.ASSUME_IPOD : goog.labs.userAgent.platform.isIos();
/** @type {boolean} */ goog.userAgent.KAIOS = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_KAIOS : goog.labs.userAgent.platform.isKaiOS();
/** @type {boolean} */ goog.userAgent.GO2PHONE = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_GO2PHONE : goog.labs.userAgent.platform.isGo2Phone();
/**
 * @private
 * @return {string}
 */
goog.userAgent.determineVersion_ = function() {
  var version = "";
  var arr = goog.userAgent.getVersionRegexResult_();
  if (arr) {
    version = arr ? arr[1] : "";
  }
  if (goog.userAgent.IE) {
    var docMode = goog.userAgent.getDocumentMode_();
    if (docMode != null && docMode > parseFloat(version)) {
      return String(docMode);
    }
  }
  return version;
};
/**
 * @private
 * @return {(?IArrayLike<string>|undefined)}
 */
goog.userAgent.getVersionRegexResult_ = function() {
  var userAgent = goog.userAgent.getUserAgentString();
  if (goog.userAgent.GECKO) {
    return /rv:([^\);]+)(\)|;)/.exec(userAgent);
  }
  if (goog.userAgent.EDGE) {
    return /Edge\/([\d\.]+)/.exec(userAgent);
  }
  if (goog.userAgent.IE) {
    return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(userAgent);
  }
  if (goog.userAgent.WEBKIT) {
    return /WebKit\/(\S+)/.exec(userAgent);
  }
  if (goog.userAgent.OPERA) {
    return /(?:Version)[ \/]?(\S+)/.exec(userAgent);
  }
  return undefined;
};
/**
 * @private
 * @return {(number|undefined)}
 */
goog.userAgent.getDocumentMode_ = function() {
  var doc = goog.global["document"];
  return doc ? doc["documentMode"] : undefined;
};
/** @type {string} */ goog.userAgent.VERSION = goog.userAgent.determineVersion_();
/**
 * @param {string} v1
 * @param {string} v2
 * @return {number}
 * @deprecated Use goog.string.compareVersions.
 */
goog.userAgent.compare = function(v1, v2) {
  return goog.string.compareVersions(v1, v2);
};
/** @private @const */ goog.userAgent.isVersionOrHigherCache_ = {};
/**
 * @param {(string|number)} version
 * @return {boolean}
 */
goog.userAgent.isVersionOrHigher = function(version) {
  return goog.userAgent.ASSUME_ANY_VERSION || goog.reflect.cache(goog.userAgent.isVersionOrHigherCache_, version, function() {
    return goog.string.compareVersions(goog.userAgent.VERSION, version) >= 0;
  });
};
/**
 * @param {(string|number)} version
 * @return {boolean}
 * @deprecated Use goog.userAgent.isVersionOrHigher().
 */
goog.userAgent.isVersion = goog.userAgent.isVersionOrHigher;
/**
 * @param {number} documentMode
 * @return {boolean}
 */
goog.userAgent.isDocumentModeOrHigher = function(documentMode) {
  return Number(goog.userAgent.DOCUMENT_MODE) >= documentMode;
};
/**
 * @param {number} version
 * @return {boolean}
 * @deprecated Use goog.userAgent.isDocumentModeOrHigher().
 */
goog.userAgent.isDocumentMode = goog.userAgent.isDocumentModeOrHigher;
/** @const @type {(number|undefined)} */ goog.userAgent.DOCUMENT_MODE = function() {
  var doc = goog.global["document"];
  if (!doc || !goog.userAgent.IE) {
    return undefined;
  }
  return goog.userAgent.getDocumentMode_();
}();

//# sourceMappingURL=goog.useragent.useragent.js.map
