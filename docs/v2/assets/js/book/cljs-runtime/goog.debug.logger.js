goog.provide("goog.debug.LogManager");
goog.provide("goog.debug.Loggable");
goog.provide("goog.debug.Logger");
goog.provide("goog.debug.Logger.Level");
goog.require("goog.array");
goog.require("goog.asserts");
goog.require("goog.debug");
goog.require("goog.debug.LogBuffer");
goog.require("goog.debug.LogRecord");
/** @typedef {(string|function():string)} */ goog.debug.Loggable;
/**
 * @final
 * @constructor
 * @param {string} name
 */
goog.debug.Logger = function(name) {
  /** @private @type {string} */ this.name_ = name;
  /** @private @type {?goog.debug.Logger} */ this.parent_ = null;
  /** @private @type {?goog.debug.Logger.Level} */ this.level_ = null;
  /** @private @type {?Object} */ this.children_ = null;
  /** @private @type {?Array<?Function>} */ this.handlers_ = null;
};
/** @const */ goog.debug.Logger.ROOT_LOGGER_NAME = "";
/** @define {boolean} */ goog.debug.Logger.ENABLE_HIERARCHY = goog.define("goog.debug.Logger.ENABLE_HIERARCHY", true);
/** @define {boolean} */ goog.debug.Logger.ENABLE_PROFILER_LOGGING = goog.define("goog.debug.Logger.ENABLE_PROFILER_LOGGING", false);
if (!goog.debug.Logger.ENABLE_HIERARCHY) {
  /** @private @type {!Array<Function>} */ goog.debug.Logger.rootHandlers_ = [];
  /** @private @type {goog.debug.Logger.Level} */ goog.debug.Logger.rootLevel_;
}
/**
 * @final
 * @constructor
 * @param {string} name
 * @param {number} value
 */
goog.debug.Logger.Level = function(name, value) {
  /** @type {string} */ this.name = name;
  /** @type {number} */ this.value = value;
};
/**
 * @return {string}
 * @override
 */
goog.debug.Logger.Level.prototype.toString = function() {
  return this.name;
};
/** @type {!goog.debug.Logger.Level} */ goog.debug.Logger.Level.OFF = new goog.debug.Logger.Level("OFF", Infinity);
/** @type {!goog.debug.Logger.Level} */ goog.debug.Logger.Level.SHOUT = new goog.debug.Logger.Level("SHOUT", 1200);
/** @type {!goog.debug.Logger.Level} */ goog.debug.Logger.Level.SEVERE = new goog.debug.Logger.Level("SEVERE", 1000);
/** @type {!goog.debug.Logger.Level} */ goog.debug.Logger.Level.WARNING = new goog.debug.Logger.Level("WARNING", 900);
/** @type {!goog.debug.Logger.Level} */ goog.debug.Logger.Level.INFO = new goog.debug.Logger.Level("INFO", 800);
/** @type {!goog.debug.Logger.Level} */ goog.debug.Logger.Level.CONFIG = new goog.debug.Logger.Level("CONFIG", 700);
/** @type {!goog.debug.Logger.Level} */ goog.debug.Logger.Level.FINE = new goog.debug.Logger.Level("FINE", 500);
/** @type {!goog.debug.Logger.Level} */ goog.debug.Logger.Level.FINER = new goog.debug.Logger.Level("FINER", 400);
/** @type {!goog.debug.Logger.Level} */ goog.debug.Logger.Level.FINEST = new goog.debug.Logger.Level("FINEST", 300);
/** @type {!goog.debug.Logger.Level} */ goog.debug.Logger.Level.ALL = new goog.debug.Logger.Level("ALL", 0);
/** @final @type {!Array<!goog.debug.Logger.Level>} */ goog.debug.Logger.Level.PREDEFINED_LEVELS = [goog.debug.Logger.Level.OFF, goog.debug.Logger.Level.SHOUT, goog.debug.Logger.Level.SEVERE, goog.debug.Logger.Level.WARNING, goog.debug.Logger.Level.INFO, goog.debug.Logger.Level.CONFIG, goog.debug.Logger.Level.FINE, goog.debug.Logger.Level.FINER, goog.debug.Logger.Level.FINEST, goog.debug.Logger.Level.ALL];
/** @private @type {?Object} */ goog.debug.Logger.Level.predefinedLevelsCache_ = null;
/** @private */ goog.debug.Logger.Level.createPredefinedLevelsCache_ = function() {
  goog.debug.Logger.Level.predefinedLevelsCache_ = {};
  for (var i = 0, level; level = goog.debug.Logger.Level.PREDEFINED_LEVELS[i]; i++) {
    goog.debug.Logger.Level.predefinedLevelsCache_[level.value] = level;
    goog.debug.Logger.Level.predefinedLevelsCache_[level.name] = level;
  }
};
/**
 * @param {string} name
 * @return {goog.debug.Logger.Level}
 */
goog.debug.Logger.Level.getPredefinedLevel = function(name) {
  if (!goog.debug.Logger.Level.predefinedLevelsCache_) {
    goog.debug.Logger.Level.createPredefinedLevelsCache_();
  }
  return goog.debug.Logger.Level.predefinedLevelsCache_[name] || null;
};
/**
 * @param {number} value
 * @return {goog.debug.Logger.Level}
 */
goog.debug.Logger.Level.getPredefinedLevelByValue = function(value) {
  if (!goog.debug.Logger.Level.predefinedLevelsCache_) {
    goog.debug.Logger.Level.createPredefinedLevelsCache_();
  }
  if (value in /** @type {!Object} */ (goog.debug.Logger.Level.predefinedLevelsCache_)) {
    return goog.debug.Logger.Level.predefinedLevelsCache_[value];
  }
  for (var i = 0; i < goog.debug.Logger.Level.PREDEFINED_LEVELS.length; ++i) {
    var level = goog.debug.Logger.Level.PREDEFINED_LEVELS[i];
    if (level.value <= value) {
      return level;
    }
  }
  return null;
};
/**
 * @param {string} name
 * @return {!goog.debug.Logger}
 * @deprecated use {@link goog.log} instead.
 */
goog.debug.Logger.getLogger = function(name) {
  return goog.debug.LogManager.getLogger(name);
};
/**
 * @param {string} msg
 */
goog.debug.Logger.logToProfilers = function(msg) {
  if (goog.debug.Logger.ENABLE_PROFILER_LOGGING) {
    var msWriteProfilerMark = goog.global["msWriteProfilerMark"];
    if (msWriteProfilerMark) {
      msWriteProfilerMark(msg);
      return;
    }
    var console = goog.global["console"];
    if (console && console["timeStamp"]) {
      console["timeStamp"](msg);
    }
  }
};
/**
 * @return {string}
 */
goog.debug.Logger.prototype.getName = function() {
  return this.name_;
};
/**
 * @param {Function} handler
 */
goog.debug.Logger.prototype.addHandler = function(handler) {
  if (goog.debug.LOGGING_ENABLED) {
    if (goog.debug.Logger.ENABLE_HIERARCHY) {
      if (!this.handlers_) {
        this.handlers_ = [];
      }
      this.handlers_.push(handler);
    } else {
      goog.asserts.assert(!this.name_, "Cannot call addHandler on a non-root logger when " + "goog.debug.Logger.ENABLE_HIERARCHY is false.");
      goog.debug.Logger.rootHandlers_.push(handler);
    }
  }
};
/**
 * @param {Function} handler
 * @return {boolean}
 */
goog.debug.Logger.prototype.removeHandler = function(handler) {
  if (goog.debug.LOGGING_ENABLED) {
    var handlers = goog.debug.Logger.ENABLE_HIERARCHY ? this.handlers_ : goog.debug.Logger.rootHandlers_;
    return !!handlers && goog.array.remove(handlers, handler);
  } else {
    return false;
  }
};
/**
 * @return {goog.debug.Logger}
 */
goog.debug.Logger.prototype.getParent = function() {
  return this.parent_;
};
/**
 * @return {!Object}
 */
goog.debug.Logger.prototype.getChildren = function() {
  if (!this.children_) {
    this.children_ = {};
  }
  return this.children_;
};
/**
 * @param {goog.debug.Logger.Level} level
 */
goog.debug.Logger.prototype.setLevel = function(level) {
  if (goog.debug.LOGGING_ENABLED) {
    if (goog.debug.Logger.ENABLE_HIERARCHY) {
      this.level_ = level;
    } else {
      goog.asserts.assert(!this.name_, "Cannot call setLevel() on a non-root logger when " + "goog.debug.Logger.ENABLE_HIERARCHY is false.");
      goog.debug.Logger.rootLevel_ = level;
    }
  }
};
/**
 * @return {goog.debug.Logger.Level}
 */
goog.debug.Logger.prototype.getLevel = function() {
  return goog.debug.LOGGING_ENABLED ? this.level_ : goog.debug.Logger.Level.OFF;
};
/**
 * @return {goog.debug.Logger.Level}
 */
goog.debug.Logger.prototype.getEffectiveLevel = function() {
  if (!goog.debug.LOGGING_ENABLED) {
    return goog.debug.Logger.Level.OFF;
  }
  if (!goog.debug.Logger.ENABLE_HIERARCHY) {
    return goog.debug.Logger.rootLevel_;
  }
  if (this.level_) {
    return this.level_;
  }
  if (this.parent_) {
    return this.parent_.getEffectiveLevel();
  }
  goog.asserts.fail("Root logger has no level set.");
  return null;
};
/**
 * @param {goog.debug.Logger.Level} level
 * @return {boolean}
 */
goog.debug.Logger.prototype.isLoggable = function(level) {
  return goog.debug.LOGGING_ENABLED && level.value >= this.getEffectiveLevel().value;
};
/**
 * @param {goog.debug.Logger.Level} level
 * @param {goog.debug.Loggable} msg
 * @param {(Error|Object)=} opt_exception
 */
goog.debug.Logger.prototype.log = function(level, msg, opt_exception) {
  if (goog.debug.LOGGING_ENABLED && this.isLoggable(level)) {
    if (goog.isFunction(msg)) {
      msg = msg();
    }
    this.doLogRecord_(this.getLogRecord(level, msg, opt_exception));
  }
};
/**
 * @param {goog.debug.Logger.Level} level
 * @param {string} msg
 * @param {(Error|Object)=} opt_exception
 * @return {!goog.debug.LogRecord}
 * @suppress {es5Strict}
 */
goog.debug.Logger.prototype.getLogRecord = function(level, msg, opt_exception) {
  if (goog.debug.LogBuffer.isBufferingEnabled()) {
    var logRecord = goog.debug.LogBuffer.getInstance().addRecord(level, msg, this.name_);
  } else {
    logRecord = new goog.debug.LogRecord(level, String(msg), this.name_);
  }
  if (opt_exception) {
    logRecord.setException(opt_exception);
  }
  return logRecord;
};
/**
 * @param {goog.debug.Loggable} msg
 * @param {Error=} opt_exception
 */
goog.debug.Logger.prototype.shout = function(msg, opt_exception) {
  if (goog.debug.LOGGING_ENABLED) {
    this.log(goog.debug.Logger.Level.SHOUT, msg, opt_exception);
  }
};
/**
 * @param {goog.debug.Loggable} msg
 * @param {Error=} opt_exception
 */
goog.debug.Logger.prototype.severe = function(msg, opt_exception) {
  if (goog.debug.LOGGING_ENABLED) {
    this.log(goog.debug.Logger.Level.SEVERE, msg, opt_exception);
  }
};
/**
 * @param {goog.debug.Loggable} msg
 * @param {Error=} opt_exception
 */
goog.debug.Logger.prototype.warning = function(msg, opt_exception) {
  if (goog.debug.LOGGING_ENABLED) {
    this.log(goog.debug.Logger.Level.WARNING, msg, opt_exception);
  }
};
/**
 * @param {goog.debug.Loggable} msg
 * @param {Error=} opt_exception
 */
goog.debug.Logger.prototype.info = function(msg, opt_exception) {
  if (goog.debug.LOGGING_ENABLED) {
    this.log(goog.debug.Logger.Level.INFO, msg, opt_exception);
  }
};
/**
 * @param {goog.debug.Loggable} msg
 * @param {Error=} opt_exception
 */
goog.debug.Logger.prototype.config = function(msg, opt_exception) {
  if (goog.debug.LOGGING_ENABLED) {
    this.log(goog.debug.Logger.Level.CONFIG, msg, opt_exception);
  }
};
/**
 * @param {goog.debug.Loggable} msg
 * @param {Error=} opt_exception
 */
goog.debug.Logger.prototype.fine = function(msg, opt_exception) {
  if (goog.debug.LOGGING_ENABLED) {
    this.log(goog.debug.Logger.Level.FINE, msg, opt_exception);
  }
};
/**
 * @param {goog.debug.Loggable} msg
 * @param {Error=} opt_exception
 */
goog.debug.Logger.prototype.finer = function(msg, opt_exception) {
  if (goog.debug.LOGGING_ENABLED) {
    this.log(goog.debug.Logger.Level.FINER, msg, opt_exception);
  }
};
/**
 * @param {goog.debug.Loggable} msg
 * @param {Error=} opt_exception
 */
goog.debug.Logger.prototype.finest = function(msg, opt_exception) {
  if (goog.debug.LOGGING_ENABLED) {
    this.log(goog.debug.Logger.Level.FINEST, msg, opt_exception);
  }
};
/**
 * @param {goog.debug.LogRecord} logRecord
 */
goog.debug.Logger.prototype.logRecord = function(logRecord) {
  if (goog.debug.LOGGING_ENABLED && this.isLoggable(logRecord.getLevel())) {
    this.doLogRecord_(logRecord);
  }
};
/**
 * @private
 * @param {goog.debug.LogRecord} logRecord
 */
goog.debug.Logger.prototype.doLogRecord_ = function(logRecord) {
  if (goog.debug.Logger.ENABLE_PROFILER_LOGGING) {
    goog.debug.Logger.logToProfilers("log:" + logRecord.getMessage());
  }
  if (goog.debug.Logger.ENABLE_HIERARCHY) {
    var target = this;
    while (target) {
      target.callPublish_(logRecord);
      target = target.getParent();
    }
  } else {
    for (var i = 0, handler; handler = goog.debug.Logger.rootHandlers_[i++];) {
      handler(logRecord);
    }
  }
};
/**
 * @private
 * @param {goog.debug.LogRecord} logRecord
 */
goog.debug.Logger.prototype.callPublish_ = function(logRecord) {
  if (this.handlers_) {
    for (var i = 0, handler; handler = this.handlers_[i]; i++) {
      handler(logRecord);
    }
  }
};
/**
 * @private
 * @param {goog.debug.Logger} parent
 */
goog.debug.Logger.prototype.setParent_ = function(parent) {
  this.parent_ = parent;
};
/**
 * @private
 * @param {string} name
 * @param {goog.debug.Logger} logger
 */
goog.debug.Logger.prototype.addChild_ = function(name, logger) {
  this.getChildren()[name] = logger;
};
/** @const */ goog.debug.LogManager = {};
/** @private @type {!Object<string,!goog.debug.Logger>} */ goog.debug.LogManager.loggers_ = {};
/** @private @type {?goog.debug.Logger} */ goog.debug.LogManager.rootLogger_ = null;
goog.debug.LogManager.initialize = function() {
  if (!goog.debug.LogManager.rootLogger_) {
    goog.debug.LogManager.rootLogger_ = new goog.debug.Logger(goog.debug.Logger.ROOT_LOGGER_NAME);
    goog.debug.LogManager.loggers_[goog.debug.Logger.ROOT_LOGGER_NAME] = goog.debug.LogManager.rootLogger_;
    goog.debug.LogManager.rootLogger_.setLevel(goog.debug.Logger.Level.CONFIG);
  }
};
/**
 * @return {!Object<string,!goog.debug.Logger>}
 */
goog.debug.LogManager.getLoggers = function() {
  return goog.debug.LogManager.loggers_;
};
/**
 * @return {!goog.debug.Logger}
 */
goog.debug.LogManager.getRoot = function() {
  goog.debug.LogManager.initialize();
  return (/** @type {!goog.debug.Logger} */ (goog.debug.LogManager.rootLogger_));
};
/**
 * @param {string} name
 * @return {!goog.debug.Logger}
 */
goog.debug.LogManager.getLogger = function(name) {
  goog.debug.LogManager.initialize();
  var ret = goog.debug.LogManager.loggers_[name];
  return ret || goog.debug.LogManager.createLogger_(name);
};
/**
 * @param {goog.debug.Logger=} opt_logger
 * @return {function(Object)}
 */
goog.debug.LogManager.createFunctionForCatchErrors = function(opt_logger) {
  return function(info) {
    var logger = opt_logger || goog.debug.LogManager.getRoot();
    logger.severe("Error: " + info.message + " (" + info.fileName + " @ Line: " + info.line + ")");
  };
};
/**
 * @private
 * @param {string} name
 * @return {!goog.debug.Logger}
 */
goog.debug.LogManager.createLogger_ = function(name) {
  var logger = new goog.debug.Logger(name);
  if (goog.debug.Logger.ENABLE_HIERARCHY) {
    var lastDotIndex = name.lastIndexOf(".");
    var parentName = name.substr(0, lastDotIndex);
    var leafName = name.substr(lastDotIndex + 1);
    var parentLogger = goog.debug.LogManager.getLogger(parentName);
    parentLogger.addChild_(leafName, logger);
    logger.setParent_(parentLogger);
  }
  goog.debug.LogManager.loggers_[name] = logger;
  return logger;
};

//# sourceMappingURL=goog.debug.logger.js.map
