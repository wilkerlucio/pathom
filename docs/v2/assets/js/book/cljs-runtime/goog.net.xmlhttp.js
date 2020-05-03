goog.provide("goog.net.DefaultXmlHttpFactory");
goog.provide("goog.net.XmlHttp");
goog.provide("goog.net.XmlHttp.OptionType");
goog.provide("goog.net.XmlHttp.ReadyState");
goog.provide("goog.net.XmlHttpDefines");
goog.require("goog.asserts");
goog.require("goog.net.WrapperXmlHttpFactory");
goog.require("goog.net.XmlHttpFactory");
/**
 * @return {!goog.net.XhrLike.OrNative}
 */
goog.net.XmlHttp = function() {
  return goog.net.XmlHttp.factory_.createInstance();
};
/** @define {boolean} */ goog.net.XmlHttp.ASSUME_NATIVE_XHR = goog.define("goog.net.XmlHttp.ASSUME_NATIVE_XHR", false);
/** @const */ goog.net.XmlHttpDefines = {};
/** @define {boolean} */ goog.net.XmlHttpDefines.ASSUME_NATIVE_XHR = goog.define("goog.net.XmlHttpDefines.ASSUME_NATIVE_XHR", false);
/**
 * @return {Object}
 */
goog.net.XmlHttp.getOptions = function() {
  return goog.net.XmlHttp.factory_.getOptions();
};
/** @enum {number} */ goog.net.XmlHttp.OptionType = {USE_NULL_FUNCTION:0, LOCAL_REQUEST_ERROR:1};
/** @enum {number} */ goog.net.XmlHttp.ReadyState = {UNINITIALIZED:0, LOADING:1, LOADED:2, INTERACTIVE:3, COMPLETE:4};
/** @private @type {goog.net.XmlHttpFactory} */ goog.net.XmlHttp.factory_;
/**
 * @param {Function} factory
 * @param {Function} optionsFactory
 * @deprecated Use setGlobalFactory instead.
 */
goog.net.XmlHttp.setFactory = function(factory, optionsFactory) {
  goog.net.XmlHttp.setGlobalFactory(new goog.net.WrapperXmlHttpFactory(goog.asserts.assert(factory), goog.asserts.assert(optionsFactory)));
};
/**
 * @param {!goog.net.XmlHttpFactory} factory
 */
goog.net.XmlHttp.setGlobalFactory = function(factory) {
  goog.net.XmlHttp.factory_ = factory;
};
/**
 * @constructor
 * @extends {goog.net.XmlHttpFactory}
 */
goog.net.DefaultXmlHttpFactory = function() {
  goog.net.XmlHttpFactory.call(this);
};
goog.inherits(goog.net.DefaultXmlHttpFactory, goog.net.XmlHttpFactory);
/** @override */ goog.net.DefaultXmlHttpFactory.prototype.createInstance = function() {
  var progId = this.getProgId_();
  if (progId) {
    return new ActiveXObject(progId);
  } else {
    return new XMLHttpRequest;
  }
};
/** @override */ goog.net.DefaultXmlHttpFactory.prototype.internalGetOptions = function() {
  var progId = this.getProgId_();
  var options = {};
  if (progId) {
    options[goog.net.XmlHttp.OptionType.USE_NULL_FUNCTION] = true;
    options[goog.net.XmlHttp.OptionType.LOCAL_REQUEST_ERROR] = true;
  }
  return options;
};
/** @private @type {(string|undefined)} */ goog.net.DefaultXmlHttpFactory.prototype.ieProgId_;
/**
 * @private
 * @return {string}
 */
goog.net.DefaultXmlHttpFactory.prototype.getProgId_ = function() {
  if (goog.net.XmlHttp.ASSUME_NATIVE_XHR || goog.net.XmlHttpDefines.ASSUME_NATIVE_XHR) {
    return "";
  }
  if (!this.ieProgId_ && typeof XMLHttpRequest == "undefined" && typeof ActiveXObject != "undefined") {
    var ACTIVE_X_IDENTS = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"];
    for (var i = 0; i < ACTIVE_X_IDENTS.length; i++) {
      var candidate = ACTIVE_X_IDENTS[i];
      try {
        new ActiveXObject(candidate);
        this.ieProgId_ = candidate;
        return candidate;
      } catch (e) {
      }
    }
    throw new Error("Could not create ActiveXObject. ActiveX might be disabled," + " or MSXML might not be installed");
  }
  return (/** @type {string} */ (this.ieProgId_));
};
goog.net.XmlHttp.setGlobalFactory(new goog.net.DefaultXmlHttpFactory);

//# sourceMappingURL=goog.net.xmlhttp.js.map
