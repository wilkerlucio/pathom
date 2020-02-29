goog.provide("goog.debug.LogBuffer");
goog.require("goog.asserts");
goog.require("goog.debug.LogRecord");
/** @final @constructor */ goog.debug.LogBuffer = function() {
  goog.asserts.assert(goog.debug.LogBuffer.isBufferingEnabled(), "Cannot use goog.debug.LogBuffer without defining " + "goog.debug.LogBuffer.CAPACITY.");
  this.clear();
};
/**
 * @return {!goog.debug.LogBuffer}
 */
goog.debug.LogBuffer.getInstance = function() {
  if (!goog.debug.LogBuffer.instance_) {
    goog.debug.LogBuffer.instance_ = new goog.debug.LogBuffer;
  }
  return goog.debug.LogBuffer.instance_;
};
/** @define {number} */ goog.debug.LogBuffer.CAPACITY = goog.define("goog.debug.LogBuffer.CAPACITY", 0);
/** @private @type {!Array<(!goog.debug.LogRecord|undefined)>} */ goog.debug.LogBuffer.prototype.buffer_;
/** @private @type {number} */ goog.debug.LogBuffer.prototype.curIndex_;
/** @private @type {boolean} */ goog.debug.LogBuffer.prototype.isFull_;
/**
 * @param {goog.debug.Logger.Level} level
 * @param {string} msg
 * @param {string} loggerName
 * @return {!goog.debug.LogRecord}
 */
goog.debug.LogBuffer.prototype.addRecord = function(level, msg, loggerName) {
  var curIndex = (this.curIndex_ + 1) % goog.debug.LogBuffer.CAPACITY;
  this.curIndex_ = curIndex;
  if (this.isFull_) {
    var ret = this.buffer_[curIndex];
    ret.reset(level, msg, loggerName);
    return ret;
  }
  this.isFull_ = curIndex == goog.debug.LogBuffer.CAPACITY - 1;
  return this.buffer_[curIndex] = new goog.debug.LogRecord(level, msg, loggerName);
};
/**
 * @return {boolean}
 */
goog.debug.LogBuffer.isBufferingEnabled = function() {
  return goog.debug.LogBuffer.CAPACITY > 0;
};
goog.debug.LogBuffer.prototype.clear = function() {
  this.buffer_ = new Array(goog.debug.LogBuffer.CAPACITY);
  this.curIndex_ = -1;
  this.isFull_ = false;
};
/**
 * @param {function(!goog.debug.LogRecord)} func
 */
goog.debug.LogBuffer.prototype.forEachRecord = function(func) {
  var buffer = this.buffer_;
  if (!buffer[0]) {
    return;
  }
  var curIndex = this.curIndex_;
  var i = this.isFull_ ? curIndex : -1;
  do {
    i = (i + 1) % goog.debug.LogBuffer.CAPACITY;
    func(/** @type {!goog.debug.LogRecord} */ (buffer[i]));
  } while (i != curIndex);
};

//# sourceMappingURL=goog.debug.logbuffer.js.map
