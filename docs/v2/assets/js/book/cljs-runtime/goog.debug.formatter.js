goog.provide("goog.debug.Formatter");
goog.provide("goog.debug.HtmlFormatter");
goog.provide("goog.debug.TextFormatter");
goog.require("goog.debug");
goog.require("goog.debug.Logger");
goog.require("goog.debug.RelativeTimeProvider");
goog.require("goog.html.SafeHtml");
goog.require("goog.html.SafeUrl");
goog.require("goog.html.uncheckedconversions");
goog.require("goog.string.Const");
/**
 * @constructor
 * @param {string=} opt_prefix
 */
goog.debug.Formatter = function(opt_prefix) {
  this.prefix_ = opt_prefix || "";
  /** @private @type {goog.debug.RelativeTimeProvider} */ this.startTimeProvider_ = goog.debug.RelativeTimeProvider.getDefaultInstance();
};
/** @type {boolean} */ goog.debug.Formatter.prototype.appendNewline = true;
/** @type {boolean} */ goog.debug.Formatter.prototype.showAbsoluteTime = true;
/** @type {boolean} */ goog.debug.Formatter.prototype.showRelativeTime = true;
/** @type {boolean} */ goog.debug.Formatter.prototype.showLoggerName = true;
/** @type {boolean} */ goog.debug.Formatter.prototype.showExceptionText = false;
/** @type {boolean} */ goog.debug.Formatter.prototype.showSeverityLevel = false;
/**
 * @param {goog.debug.LogRecord} logRecord
 * @return {string}
 */
goog.debug.Formatter.prototype.formatRecord = goog.abstractMethod;
/**
 * @param {goog.debug.LogRecord} logRecord
 * @return {!goog.html.SafeHtml}
 */
goog.debug.Formatter.prototype.formatRecordAsHtml = goog.abstractMethod;
/**
 * @param {goog.debug.RelativeTimeProvider} provider
 */
goog.debug.Formatter.prototype.setStartTimeProvider = function(provider) {
  this.startTimeProvider_ = provider;
};
/**
 * @return {goog.debug.RelativeTimeProvider}
 */
goog.debug.Formatter.prototype.getStartTimeProvider = function() {
  return this.startTimeProvider_;
};
goog.debug.Formatter.prototype.resetRelativeTimeStart = function() {
  this.startTimeProvider_.reset();
};
/**
 * @private
 * @param {goog.debug.LogRecord} logRecord
 * @return {string}
 */
goog.debug.Formatter.getDateTimeStamp_ = function(logRecord) {
  var time = new Date(logRecord.getMillis());
  return goog.debug.Formatter.getTwoDigitString_(time.getFullYear() - 2000) + goog.debug.Formatter.getTwoDigitString_(time.getMonth() + 1) + goog.debug.Formatter.getTwoDigitString_(time.getDate()) + " " + goog.debug.Formatter.getTwoDigitString_(time.getHours()) + ":" + goog.debug.Formatter.getTwoDigitString_(time.getMinutes()) + ":" + goog.debug.Formatter.getTwoDigitString_(time.getSeconds()) + "." + goog.debug.Formatter.getTwoDigitString_(Math.floor(time.getMilliseconds() / 10));
};
/**
 * @private
 * @param {number} n
 * @return {string}
 */
goog.debug.Formatter.getTwoDigitString_ = function(n) {
  if (n < 10) {
    return "0" + n;
  }
  return String(n);
};
/**
 * @private
 * @param {goog.debug.LogRecord} logRecord
 * @param {number} relativeTimeStart
 * @return {string}
 */
goog.debug.Formatter.getRelativeTime_ = function(logRecord, relativeTimeStart) {
  var ms = logRecord.getMillis() - relativeTimeStart;
  var sec = ms / 1000;
  var str = sec.toFixed(3);
  var spacesToPrepend = 0;
  if (sec < 1) {
    spacesToPrepend = 2;
  } else {
    while (sec < 100) {
      spacesToPrepend++;
      sec *= 10;
    }
  }
  while (spacesToPrepend-- > 0) {
    str = " " + str;
  }
  return str;
};
/**
 * @constructor
 * @extends {goog.debug.Formatter}
 * @param {string=} opt_prefix
 */
goog.debug.HtmlFormatter = function(opt_prefix) {
  goog.debug.Formatter.call(this, opt_prefix);
};
goog.inherits(goog.debug.HtmlFormatter, goog.debug.Formatter);
/**
 * @param {*} err
 * @param {?Function=} fn
 * @return {string}
 */
goog.debug.HtmlFormatter.exposeException = function(err, fn) {
  var html = goog.debug.HtmlFormatter.exposeExceptionAsHtml(err, fn);
  return goog.html.SafeHtml.unwrap(html);
};
/**
 * @param {*} err
 * @param {?Function=} fn
 * @return {!goog.html.SafeHtml}
 */
goog.debug.HtmlFormatter.exposeExceptionAsHtml = function(err, fn) {
  try {
    var e = goog.debug.normalizeErrorObject(err);
    var viewSourceUrl = goog.debug.HtmlFormatter.createViewSourceUrl_(e.fileName);
    var error = goog.html.SafeHtml.concat(goog.html.SafeHtml.htmlEscapePreservingNewlinesAndSpaces("Message: " + e.message + "\nUrl: "), goog.html.SafeHtml.create("a", {href:viewSourceUrl, target:"_new"}, e.fileName), goog.html.SafeHtml.htmlEscapePreservingNewlinesAndSpaces("\nLine: " + e.lineNumber + "\n\nBrowser stack:\n" + e.stack + "-\x3e " + "[end]\n\nJS stack traversal:\n" + goog.debug.getStacktrace(fn) + "-\x3e "));
    return error;
  } catch (e2) {
    return goog.html.SafeHtml.htmlEscapePreservingNewlinesAndSpaces("Exception trying to expose exception! You win, we lose. " + e2);
  }
};
/**
 * @private
 * @param {?string=} fileName
 * @return {!goog.html.SafeUrl}
 */
goog.debug.HtmlFormatter.createViewSourceUrl_ = function(fileName) {
  if (fileName == null) {
    fileName = "";
  }
  if (!/^https?:\/\//i.test(fileName)) {
    return goog.html.SafeUrl.fromConstant(goog.string.Const.from("sanitizedviewsrc"));
  }
  var sanitizedFileName = goog.html.SafeUrl.sanitize(fileName);
  return goog.html.uncheckedconversions.safeUrlFromStringKnownToSatisfyTypeContract(goog.string.Const.from("view-source scheme plus HTTP/HTTPS URL"), "view-source:" + goog.html.SafeUrl.unwrap(sanitizedFileName));
};
/** @override @type {boolean} */ goog.debug.HtmlFormatter.prototype.showExceptionText = true;
/**
 * @param {goog.debug.LogRecord} logRecord
 * @return {string}
 * @override
 */
goog.debug.HtmlFormatter.prototype.formatRecord = function(logRecord) {
  if (!logRecord) {
    return "";
  }
  return this.formatRecordAsHtml(logRecord).getTypedStringValue();
};
/**
 * @param {goog.debug.LogRecord} logRecord
 * @return {!goog.html.SafeHtml}
 * @override
 */
goog.debug.HtmlFormatter.prototype.formatRecordAsHtml = function(logRecord) {
  if (!logRecord) {
    return goog.html.SafeHtml.EMPTY;
  }
  var className;
  switch(logRecord.getLevel().value) {
    case goog.debug.Logger.Level.SHOUT.value:
      className = "dbg-sh";
      break;
    case goog.debug.Logger.Level.SEVERE.value:
      className = "dbg-sev";
      break;
    case goog.debug.Logger.Level.WARNING.value:
      className = "dbg-w";
      break;
    case goog.debug.Logger.Level.INFO.value:
      className = "dbg-i";
      break;
    case goog.debug.Logger.Level.FINE.value:
    default:
      className = "dbg-f";
      break;
  }
  var sb = [];
  sb.push(this.prefix_, " ");
  if (this.showAbsoluteTime) {
    sb.push("[", goog.debug.Formatter.getDateTimeStamp_(logRecord), "] ");
  }
  if (this.showRelativeTime) {
    sb.push("[", goog.debug.Formatter.getRelativeTime_(logRecord, this.startTimeProvider_.get()), "s] ");
  }
  if (this.showLoggerName) {
    sb.push("[", logRecord.getLoggerName(), "] ");
  }
  if (this.showSeverityLevel) {
    sb.push("[", logRecord.getLevel().name, "] ");
  }
  var fullPrefixHtml = goog.html.SafeHtml.htmlEscapePreservingNewlinesAndSpaces(sb.join(""));
  var exceptionHtml = goog.html.SafeHtml.EMPTY;
  if (this.showExceptionText && logRecord.getException()) {
    exceptionHtml = goog.html.SafeHtml.concat(goog.html.SafeHtml.BR, goog.debug.HtmlFormatter.exposeExceptionAsHtml(logRecord.getException()));
  }
  var logRecordHtml = goog.html.SafeHtml.htmlEscapePreservingNewlinesAndSpaces(logRecord.getMessage());
  var recordAndExceptionHtml = goog.html.SafeHtml.create("span", {"class":className}, goog.html.SafeHtml.concat(logRecordHtml, exceptionHtml));
  var html;
  if (this.appendNewline) {
    html = goog.html.SafeHtml.concat(fullPrefixHtml, recordAndExceptionHtml, goog.html.SafeHtml.BR);
  } else {
    html = goog.html.SafeHtml.concat(fullPrefixHtml, recordAndExceptionHtml);
  }
  return html;
};
/**
 * @final
 * @constructor
 * @extends {goog.debug.Formatter}
 * @param {string=} opt_prefix
 */
goog.debug.TextFormatter = function(opt_prefix) {
  goog.debug.Formatter.call(this, opt_prefix);
};
goog.inherits(goog.debug.TextFormatter, goog.debug.Formatter);
/**
 * @param {goog.debug.LogRecord} logRecord
 * @return {string}
 * @override
 */
goog.debug.TextFormatter.prototype.formatRecord = function(logRecord) {
  var sb = [];
  sb.push(this.prefix_, " ");
  if (this.showAbsoluteTime) {
    sb.push("[", goog.debug.Formatter.getDateTimeStamp_(logRecord), "] ");
  }
  if (this.showRelativeTime) {
    sb.push("[", goog.debug.Formatter.getRelativeTime_(logRecord, this.startTimeProvider_.get()), "s] ");
  }
  if (this.showLoggerName) {
    sb.push("[", logRecord.getLoggerName(), "] ");
  }
  if (this.showSeverityLevel) {
    sb.push("[", logRecord.getLevel().name, "] ");
  }
  sb.push(logRecord.getMessage());
  if (this.showExceptionText) {
    var exception = logRecord.getException();
    if (exception) {
      var exceptionText = exception instanceof Error ? exception.message : exception.toString();
      sb.push("\n", exceptionText);
    }
  }
  if (this.appendNewline) {
    sb.push("\n");
  }
  return sb.join("");
};
/**
 * @param {goog.debug.LogRecord} logRecord
 * @return {!goog.html.SafeHtml}
 * @override
 */
goog.debug.TextFormatter.prototype.formatRecordAsHtml = function(logRecord) {
  return goog.html.SafeHtml.htmlEscapePreservingNewlinesAndSpaces(goog.debug.TextFormatter.prototype.formatRecord(logRecord));
};

//# sourceMappingURL=goog.debug.formatter.js.map
