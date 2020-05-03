goog.provide("goog.debug.LogRecord");
/**
 * @constructor
 * @param {goog.debug.Logger.Level} level
 * @param {string} msg
 * @param {string} loggerName
 * @param {number=} opt_time
 * @param {number=} opt_sequenceNumber
 */
goog.debug.LogRecord = function(level, msg, loggerName, opt_time, opt_sequenceNumber) {
  this.reset(level, msg, loggerName, opt_time, opt_sequenceNumber);
};
/** @private @type {number} */ goog.debug.LogRecord.prototype.time_;
/** @private @type {goog.debug.Logger.Level} */ goog.debug.LogRecord.prototype.level_;
/** @private @type {string} */ goog.debug.LogRecord.prototype.msg_;
/** @private @type {string} */ goog.debug.LogRecord.prototype.loggerName_;
/** @private @type {number} */ goog.debug.LogRecord.prototype.sequenceNumber_ = 0;
/** @private @type {?Object} */ goog.debug.LogRecord.prototype.exception_ = null;
/** @define {boolean} */ goog.debug.LogRecord.ENABLE_SEQUENCE_NUMBERS = goog.define("goog.debug.LogRecord.ENABLE_SEQUENCE_NUMBERS", true);
/** @private @type {number} */ goog.debug.LogRecord.nextSequenceNumber_ = 0;
/**
 * @param {goog.debug.Logger.Level} level
 * @param {string} msg
 * @param {string} loggerName
 * @param {number=} opt_time
 * @param {number=} opt_sequenceNumber
 */
goog.debug.LogRecord.prototype.reset = function(level, msg, loggerName, opt_time, opt_sequenceNumber) {
  if (goog.debug.LogRecord.ENABLE_SEQUENCE_NUMBERS) {
    this.sequenceNumber_ = typeof opt_sequenceNumber == "number" ? opt_sequenceNumber : goog.debug.LogRecord.nextSequenceNumber_++;
  }
  this.time_ = opt_time || goog.now();
  this.level_ = level;
  this.msg_ = msg;
  this.loggerName_ = loggerName;
  delete this.exception_;
};
/**
 * @return {string}
 */
goog.debug.LogRecord.prototype.getLoggerName = function() {
  return this.loggerName_;
};
/**
 * @return {Object}
 */
goog.debug.LogRecord.prototype.getException = function() {
  return this.exception_;
};
/**
 * @param {Object} exception
 */
goog.debug.LogRecord.prototype.setException = function(exception) {
  this.exception_ = exception;
};
/**
 * @param {string} loggerName
 */
goog.debug.LogRecord.prototype.setLoggerName = function(loggerName) {
  this.loggerName_ = loggerName;
};
/**
 * @return {goog.debug.Logger.Level}
 */
goog.debug.LogRecord.prototype.getLevel = function() {
  return this.level_;
};
/**
 * @param {goog.debug.Logger.Level} level
 */
goog.debug.LogRecord.prototype.setLevel = function(level) {
  this.level_ = level;
};
/**
 * @return {string}
 */
goog.debug.LogRecord.prototype.getMessage = function() {
  return this.msg_;
};
/**
 * @param {string} msg
 */
goog.debug.LogRecord.prototype.setMessage = function(msg) {
  this.msg_ = msg;
};
/**
 * @return {number}
 */
goog.debug.LogRecord.prototype.getMillis = function() {
  return this.time_;
};
/**
 * @param {number} time
 */
goog.debug.LogRecord.prototype.setMillis = function(time) {
  this.time_ = time;
};
/**
 * @return {number}
 */
goog.debug.LogRecord.prototype.getSequenceNumber = function() {
  return this.sequenceNumber_;
};

//# sourceMappingURL=goog.debug.logrecord.js.map
