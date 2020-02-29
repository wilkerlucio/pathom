goog.provide("goog.net.BulkLoaderHelper");
goog.forwardDeclare("goog.Uri");
goog.require("goog.Disposable");
/**
 * @final
 * @constructor
 * @extends {goog.Disposable}
 * @param {Array<(string|goog.Uri)>} uris
 */
goog.net.BulkLoaderHelper = function(uris) {
  goog.Disposable.call(this);
  /** @private @type {Array<(string|goog.Uri)>} */ this.uris_ = uris;
  /** @private @type {Array<string>} */ this.responseTexts_ = [];
};
goog.inherits(goog.net.BulkLoaderHelper, goog.Disposable);
/**
 * @param {number} id
 * @return {(string|goog.Uri)}
 */
goog.net.BulkLoaderHelper.prototype.getUri = function(id) {
  return this.uris_[id];
};
/**
 * @return {Array<(string|goog.Uri)>}
 */
goog.net.BulkLoaderHelper.prototype.getUris = function() {
  return this.uris_;
};
/**
 * @return {Array<string>}
 */
goog.net.BulkLoaderHelper.prototype.getResponseTexts = function() {
  return this.responseTexts_;
};
/**
 * @param {number} id
 * @param {string} responseText
 */
goog.net.BulkLoaderHelper.prototype.setResponseText = function(id, responseText) {
  this.responseTexts_[id] = responseText;
};
/**
 * @return {boolean}
 */
goog.net.BulkLoaderHelper.prototype.isLoadComplete = function() {
  var responseTexts = this.responseTexts_;
  if (responseTexts.length == this.uris_.length) {
    for (var i = 0; i < responseTexts.length; i++) {
      if (responseTexts[i] == null) {
        return false;
      }
    }
    return true;
  }
  return false;
};
/** @override */ goog.net.BulkLoaderHelper.prototype.disposeInternal = function() {
  goog.net.BulkLoaderHelper.superClass_.disposeInternal.call(this);
  this.uris_ = null;
  this.responseTexts_ = null;
};

//# sourceMappingURL=goog.net.bulkloaderhelper.js.map
