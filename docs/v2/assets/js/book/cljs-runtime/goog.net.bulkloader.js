goog.provide("goog.net.BulkLoader");
goog.require("goog.events.EventHandler");
goog.require("goog.events.EventTarget");
goog.require("goog.log");
goog.require("goog.net.BulkLoaderHelper");
goog.require("goog.net.EventType");
goog.require("goog.net.XhrIo");
/**
 @final
 @constructor
 @extends {goog.events.EventTarget}
 @param {Array<(string|goog.Uri)>} uris
 */
goog.net.BulkLoader = function(uris) {
  goog.events.EventTarget.call(this);
  /** @private @type {goog.net.BulkLoaderHelper} */ this.helper_ = new goog.net.BulkLoaderHelper(uris);
  /** @private @type {goog.events.EventHandler<!goog.net.BulkLoader>} */ this.eventHandler_ = new goog.events.EventHandler(this);
};
goog.inherits(goog.net.BulkLoader, goog.events.EventTarget);
/** @private @type {goog.log.Logger} */ goog.net.BulkLoader.prototype.logger_ = goog.log.getLogger("goog.net.BulkLoader");
/**
 @return {Array<string>}
 */
goog.net.BulkLoader.prototype.getResponseTexts = function() {
  return this.helper_.getResponseTexts();
};
/**
 @return {Array<string>}
 */
goog.net.BulkLoader.prototype.getRequestUris = function() {
  return this.helper_.getUris();
};
goog.net.BulkLoader.prototype.load = function() {
  var eventHandler = this.eventHandler_;
  var uris = this.helper_.getUris();
  goog.log.info(this.logger_, "Starting load of code with " + uris.length + " uris.");
  for (var i = 0; i < uris.length; i++) {
    var xhrIo = new goog.net.XhrIo;
    eventHandler.listen(xhrIo, goog.net.EventType.COMPLETE, goog.bind(this.handleEvent_, this, i));
    xhrIo.send(uris[i]);
  }
};
/**
 @private
 @param {number} id
 @param {goog.events.Event} e
 */
goog.net.BulkLoader.prototype.handleEvent_ = function(id, e) {
  goog.log.info(this.logger_, 'Received event "' + e.type + '" for id ' + id + " with uri " + this.helper_.getUri(id));
  var xhrIo = /** @type {goog.net.XhrIo} */ (e.target);
  if (xhrIo.isSuccess()) {
    this.handleSuccess_(id, xhrIo);
  } else {
    this.handleError_(id, xhrIo);
  }
};
/**
 @private
 @param {number} id
 @param {goog.net.XhrIo} xhrIo
 */
goog.net.BulkLoader.prototype.handleSuccess_ = function(id, xhrIo) {
  this.helper_.setResponseText(id, xhrIo.getResponseText());
  if (this.helper_.isLoadComplete()) {
    this.finishLoad_();
  }
  xhrIo.dispose();
};
/**
 @private
 @param {(number|string)} id
 @param {goog.net.XhrIo} xhrIo
 */
goog.net.BulkLoader.prototype.handleError_ = function(id, xhrIo) {
  this.dispatchEvent(goog.net.EventType.ERROR);
  xhrIo.dispose();
};
/** @private */ goog.net.BulkLoader.prototype.finishLoad_ = function() {
  goog.log.info(this.logger_, "All uris loaded.");
  this.dispatchEvent(goog.net.EventType.SUCCESS);
};
/** @override */ goog.net.BulkLoader.prototype.disposeInternal = function() {
  goog.net.BulkLoader.superClass_.disposeInternal.call(this);
  this.eventHandler_.dispose();
  this.eventHandler_ = null;
  this.helper_.dispose();
  this.helper_ = null;
};

//# sourceMappingURL=goog.net.bulkloader.js.map
