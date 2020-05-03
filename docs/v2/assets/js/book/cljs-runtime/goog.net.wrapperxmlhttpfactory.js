goog.provide("goog.net.WrapperXmlHttpFactory");
/**
 * @suppress {extraRequire}
 */
goog.require("goog.net.XhrLike");
goog.require("goog.net.XmlHttpFactory");
/**
 * @final
 * @constructor
 * @extends {goog.net.XmlHttpFactory}
 * @param {function():!goog.net.XhrLike.OrNative} xhrFactory
 * @param {function():!Object} optionsFactory
 */
goog.net.WrapperXmlHttpFactory = function(xhrFactory, optionsFactory) {
  goog.net.XmlHttpFactory.call(this);
  /** @private @type {function():!goog.net.XhrLike.OrNative} */ this.xhrFactory_ = xhrFactory;
  /** @private @type {function():!Object} */ this.optionsFactory_ = optionsFactory;
};
goog.inherits(goog.net.WrapperXmlHttpFactory, goog.net.XmlHttpFactory);
/** @override */ goog.net.WrapperXmlHttpFactory.prototype.createInstance = function() {
  return this.xhrFactory_();
};
/** @override */ goog.net.WrapperXmlHttpFactory.prototype.getOptions = function() {
  return this.optionsFactory_();
};

//# sourceMappingURL=goog.net.wrapperxmlhttpfactory.js.map
