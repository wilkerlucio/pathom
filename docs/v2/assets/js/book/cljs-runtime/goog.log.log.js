goog.provide("goog.log");
goog.provide("goog.log.Level");
goog.provide("goog.log.LogRecord");
goog.provide("goog.log.Logger");
goog.require("goog.debug");
goog.require("goog.debug.LogManager");
goog.require("goog.debug.LogRecord");
goog.require("goog.debug.Logger");
/** @define {boolean} */ goog.log.ENABLED = goog.define("goog.log.ENABLED", goog.debug.LOGGING_ENABLED);
/** @const @type {string} */ goog.log.ROOT_LOGGER_NAME = goog.debug.Logger.ROOT_LOGGER_NAME;
/** @final @constructor */ goog.log.Logger = goog.debug.Logger;
/** @final @constructor */ goog.log.Level = goog.debug.Logger.Level;
/** @final @constructor */ goog.log.LogRecord = goog.debug.LogRecord;
/**
 * @param {string} name
 * @param {goog.log.Level=} opt_level
 * @return {goog.log.Logger}
 */
goog.log.getLogger = function(name, opt_level) {
  if (goog.log.ENABLED) {
    var logger = goog.debug.LogManager.getLogger(name);
    if (opt_level && logger) {
      logger.setLevel(opt_level);
    }
    return logger;
  } else {
    return null;
  }
};
/**
 * @param {goog.log.Logger} logger
 * @param {Function} handler
 */
goog.log.addHandler = function(logger, handler) {
  if (goog.log.ENABLED && logger) {
    logger.addHandler(handler);
  }
};
/**
 * @param {goog.log.Logger} logger
 * @param {Function} handler
 * @return {boolean}
 */
goog.log.removeHandler = function(logger, handler) {
  if (goog.log.ENABLED && logger) {
    return logger.removeHandler(handler);
  } else {
    return false;
  }
};
/**
 * @param {goog.log.Logger} logger
 * @param {goog.log.Level} level
 * @param {goog.debug.Loggable} msg
 * @param {(Error|Object)=} opt_exception
 */
goog.log.log = function(logger, level, msg, opt_exception) {
  if (goog.log.ENABLED && logger) {
    logger.log(level, msg, opt_exception);
  }
};
/**
 * @param {goog.log.Logger} logger
 * @param {goog.debug.Loggable} msg
 * @param {Error=} opt_exception
 */
goog.log.error = function(logger, msg, opt_exception) {
  if (goog.log.ENABLED && logger) {
    logger.severe(msg, opt_exception);
  }
};
/**
 * @param {goog.log.Logger} logger
 * @param {goog.debug.Loggable} msg
 * @param {Error=} opt_exception
 */
goog.log.warning = function(logger, msg, opt_exception) {
  if (goog.log.ENABLED && logger) {
    logger.warning(msg, opt_exception);
  }
};
/**
 * @param {goog.log.Logger} logger
 * @param {goog.debug.Loggable} msg
 * @param {Error=} opt_exception
 */
goog.log.info = function(logger, msg, opt_exception) {
  if (goog.log.ENABLED && logger) {
    logger.info(msg, opt_exception);
  }
};
/**
 * @param {goog.log.Logger} logger
 * @param {goog.debug.Loggable} msg
 * @param {Error=} opt_exception
 */
goog.log.fine = function(logger, msg, opt_exception) {
  if (goog.log.ENABLED && logger) {
    logger.fine(msg, opt_exception);
  }
};

//# sourceMappingURL=goog.log.log.js.map
