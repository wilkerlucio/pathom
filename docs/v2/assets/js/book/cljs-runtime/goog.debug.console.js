goog.provide("goog.debug.Console");
goog.require("goog.debug.LogManager");
goog.require("goog.debug.Logger");
goog.require("goog.debug.TextFormatter");
/** @constructor */ goog.debug.Console = function() {
  this.publishHandler_ = goog.bind(this.addLogRecord, this);
  /** @private @type {!goog.debug.TextFormatter} */ this.formatter_ = new goog.debug.TextFormatter;
  this.formatter_.showAbsoluteTime = false;
  this.formatter_.showExceptionText = false;
  this.formatter_.appendNewline = false;
  this.isCapturing_ = false;
  this.logBuffer_ = "";
  /** @private @type {!Object<?,boolean>} */ this.filteredLoggers_ = {};
};
/**
 @return {!goog.debug.TextFormatter}
 */
goog.debug.Console.prototype.getFormatter = function() {
  return this.formatter_;
};
/**
 @param {boolean} capturing
 */
goog.debug.Console.prototype.setCapturing = function(capturing) {
  if (capturing == this.isCapturing_) {
    return;
  }
  var rootLogger = goog.debug.LogManager.getRoot();
  if (capturing) {
    rootLogger.addHandler(this.publishHandler_);
  } else {
    rootLogger.removeHandler(this.publishHandler_);
  }
  this.isCapturing_ = capturing;
};
/**
 @param {?goog.debug.LogRecord} logRecord
 */
goog.debug.Console.prototype.addLogRecord = function(logRecord) {
  if (this.filteredLoggers_[logRecord.getLoggerName()]) {
    return;
  }
  /**
   @param {?goog.debug.Logger.Level} level
   @return {string}
   */
  function getConsoleMethodName_(level) {
    if (level) {
      if (level.value >= goog.debug.Logger.Level.SEVERE.value) {
        return "error";
      }
      if (level.value >= goog.debug.Logger.Level.WARNING.value) {
        return "warn";
      }
      if (level.value >= goog.debug.Logger.Level.CONFIG.value) {
        return "log";
      }
    }
    return "debug";
  }
  var record = this.formatter_.formatRecord(logRecord);
  var console = goog.debug.Console.console_;
  if (console) {
    var logMethod = getConsoleMethodName_(logRecord.getLevel());
    goog.debug.Console.logToConsole_(console, logMethod, record, logRecord.getException());
  } else {
    this.logBuffer_ += record;
  }
};
/**
 @param {string} loggerName
 */
goog.debug.Console.prototype.addFilter = function(loggerName) {
  this.filteredLoggers_[loggerName] = true;
};
/**
 @param {string} loggerName
 */
goog.debug.Console.prototype.removeFilter = function(loggerName) {
  delete this.filteredLoggers_[loggerName];
};
/** @type {?goog.debug.Console} */ goog.debug.Console.instance = null;
/** @private @type {{log:!Function}} */ goog.debug.Console.console_ = goog.global["console"];
/**
 @param {!Object} console
 */
goog.debug.Console.setConsole = function(console) {
  goog.debug.Console.console_ = /** @type {{log:!Function}} */ (console);
};
goog.debug.Console.autoInstall = function() {
  if (!goog.debug.Console.instance) {
    goog.debug.Console.instance = new goog.debug.Console;
  }
  if (goog.global.location && goog.global.location.href.indexOf("Debug\x3dtrue") != -1) {
    goog.debug.Console.instance.setCapturing(true);
  }
};
goog.debug.Console.show = function() {
  alert(goog.debug.Console.instance.logBuffer_);
};
/**
 @private
 @param {{log:!Function}} console
 @param {string} fnName
 @param {string} record
 @param {?Object} exception
 */
goog.debug.Console.logToConsole_ = function(console, fnName, record, exception) {
  if (console[fnName]) {
    console[fnName](record, exception || "");
  } else {
    console.log(record, exception || "");
  }
};

//# sourceMappingURL=goog.debug.console.js.map
