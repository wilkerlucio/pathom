goog.provide("goog.net.XmlHttpFactory");
/**
 * @suppress {extraRequire}
 */
goog.require("goog.net.XhrLike");
/** @constructor */ goog.net.XmlHttpFactory = function() {
};
/** @private @type {?Object} */ goog.net.XmlHttpFactory.prototype.cachedOptions_ = null;
/**
 * @return {!goog.net.XhrLike.OrNative}
 */
goog.net.XmlHttpFactory.prototype.createInstance = goog.abstractMethod;
/**
 * @return {Object}
 */
goog.net.XmlHttpFactory.prototype.getOptions = function() {
  return this.cachedOptions_ || (this.cachedOptions_ = this.internalGetOptions());
};
/**
 * @protected
 * @return {Object}
 */
goog.net.XmlHttpFactory.prototype.internalGetOptions = goog.abstractMethod;

//# sourceMappingURL=goog.net.xmlhttpfactory.js.map
