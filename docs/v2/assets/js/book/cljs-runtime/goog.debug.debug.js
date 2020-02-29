goog.provide("goog.debug");
goog.require("goog.array");
goog.require("goog.debug.errorcontext");
goog.require("goog.userAgent");
/** @define {boolean} */ goog.debug.LOGGING_ENABLED = goog.define("goog.debug.LOGGING_ENABLED", goog.DEBUG);
/** @define {boolean} */ goog.debug.FORCE_SLOPPY_STACKS = goog.define("goog.debug.FORCE_SLOPPY_STACKS", false);
/**
 * @param {function(Object)} logFunc
 * @param {boolean=} opt_cancel
 * @param {Object=} opt_target
 * @suppress {strictMissingProperties}
 */
goog.debug.catchErrors = function(logFunc, opt_cancel, opt_target) {
  var target = opt_target || goog.global;
  var oldErrorHandler = target.onerror;
  var retVal = !!opt_cancel;
  if (goog.userAgent.WEBKIT && !goog.userAgent.isVersionOrHigher("535.3")) {
    retVal = !retVal;
  }
  /**
   * @param {string} message
   * @param {string} url
   * @param {number} line
   * @param {number=} opt_col
   * @param {Error=} opt_error
   * @return {boolean}
   */
  target.onerror = function(message, url, line, opt_col, opt_error) {
    if (oldErrorHandler) {
      oldErrorHandler(message, url, line, opt_col, opt_error);
    }
    logFunc({message:message, fileName:url, line:line, lineNumber:line, col:opt_col, error:opt_error});
    return retVal;
  };
};
/**
 * @param {(Object|null|undefined)} obj
 * @param {boolean=} opt_showFn
 * @return {string}
 */
goog.debug.expose = function(obj, opt_showFn) {
  if (typeof obj == "undefined") {
    return "undefined";
  }
  if (obj == null) {
    return "NULL";
  }
  var str = [];
  for (var x in obj) {
    if (!opt_showFn && goog.isFunction(obj[x])) {
      continue;
    }
    var s = x + " \x3d ";
    try {
      s += obj[x];
    } catch (e) {
      s += "*** " + e + " ***";
    }
    str.push(s);
  }
  return str.join("\n");
};
/**
 * @param {*} obj
 * @param {boolean=} opt_showFn
 * @return {string}
 */
goog.debug.deepExpose = function(obj, opt_showFn) {
  var str = [];
  var uidsToCleanup = [];
  var ancestorUids = {};
  var helper = function(obj, space) {
    var nestspace = space + "  ";
    var indentMultiline = function(str) {
      return str.replace(/\n/g, "\n" + space);
    };
    try {
      if (obj === undefined) {
        str.push("undefined");
      } else {
        if (obj === null) {
          str.push("NULL");
        } else {
          if (typeof obj === "string") {
            str.push('"' + indentMultiline(obj) + '"');
          } else {
            if (goog.isFunction(obj)) {
              str.push(indentMultiline(String(obj)));
            } else {
              if (goog.isObject(obj)) {
                if (!goog.hasUid(obj)) {
                  uidsToCleanup.push(obj);
                }
                var uid = goog.getUid(obj);
                if (ancestorUids[uid]) {
                  str.push("*** reference loop detected (id\x3d" + uid + ") ***");
                } else {
                  ancestorUids[uid] = true;
                  str.push("{");
                  for (var x in obj) {
                    if (!opt_showFn && goog.isFunction(obj[x])) {
                      continue;
                    }
                    str.push("\n");
                    str.push(nestspace);
                    str.push(x + " \x3d ");
                    helper(obj[x], nestspace);
                  }
                  str.push("\n" + space + "}");
                  delete ancestorUids[uid];
                }
              } else {
                str.push(obj);
              }
            }
          }
        }
      }
    } catch (e) {
      str.push("*** " + e + " ***");
    }
  };
  helper(obj, "");
  for (var i = 0; i < uidsToCleanup.length; i++) {
    goog.removeUid(uidsToCleanup[i]);
  }
  return str.join("");
};
/**
 * @param {Array<?>} arr
 * @return {string}
 */
goog.debug.exposeArray = function(arr) {
  var str = [];
  for (var i = 0; i < arr.length; i++) {
    if (goog.isArray(arr[i])) {
      str.push(goog.debug.exposeArray(arr[i]));
    } else {
      str.push(arr[i]);
    }
  }
  return "[ " + str.join(", ") + " ]";
};
/**
 * @param {*} err
 * @return {{message:(?|undefined),name:(?|undefined),lineNumber:(?|undefined),fileName:(?|undefined),stack:(?|undefined)}}
 * @suppress {strictMissingProperties}
 */
goog.debug.normalizeErrorObject = function(err) {
  var href = goog.getObjectByName("window.location.href");
  if (err == null) {
    err = 'Unknown Error of type "null/undefined"';
  }
  if (typeof err === "string") {
    return {"message":err, "name":"Unknown error", "lineNumber":"Not available", "fileName":href, "stack":"Not available"};
  }
  var lineNumber, fileName;
  var threwError = false;
  try {
    lineNumber = err.lineNumber || err.line || "Not available";
  } catch (e) {
    lineNumber = "Not available";
    threwError = true;
  }
  try {
    fileName = err.fileName || err.filename || err.sourceURL || goog.global["$googDebugFname"] || href;
  } catch (e$3) {
    fileName = "Not available";
    threwError = true;
  }
  if (threwError || !err.lineNumber || !err.fileName || !err.stack || !err.message || !err.name) {
    var message = err.message;
    if (message == null) {
      if (err.constructor && err.constructor instanceof Function) {
        var ctorName = err.constructor.name ? err.constructor.name : goog.debug.getFunctionName(err.constructor);
        message = 'Unknown Error of type "' + ctorName + '"';
      } else {
        message = "Unknown Error of unknown type";
      }
    }
    return {"message":message, "name":err.name || "UnknownError", "lineNumber":lineNumber, "fileName":fileName, "stack":err.stack || "Not available"};
  }
  return (/** @type {?} */ (err));
};
/**
 * @param {*} err
 * @param {string=} opt_message
 * @return {!Error}
 */
goog.debug.enhanceError = function(err, opt_message) {
  var error;
  if (!(err instanceof Error)) {
    error = Error(err);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(error, goog.debug.enhanceError);
    }
  } else {
    error = err;
  }
  if (!error.stack) {
    error.stack = goog.debug.getStacktrace(goog.debug.enhanceError);
  }
  if (opt_message) {
    var x = 0;
    while (error["message" + x]) {
      ++x;
    }
    error["message" + x] = String(opt_message);
  }
  return error;
};
/**
 * @param {*} err
 * @param {!Object<string,string>=} opt_context
 * @return {!Error}
 */
goog.debug.enhanceErrorWithContext = function(err, opt_context) {
  var error = goog.debug.enhanceError(err);
  if (opt_context) {
    for (var key in opt_context) {
      goog.debug.errorcontext.addErrorContext(error, key, opt_context[key]);
    }
  }
  return error;
};
/**
 * @param {number=} opt_depth
 * @return {string}
 * @suppress {es5Strict}
 */
goog.debug.getStacktraceSimple = function(opt_depth) {
  if (!goog.debug.FORCE_SLOPPY_STACKS) {
    var stack = goog.debug.getNativeStackTrace_(goog.debug.getStacktraceSimple);
    if (stack) {
      return stack;
    }
  }
  var sb = [];
  var fn = arguments.callee.caller;
  var depth = 0;
  while (fn && (!opt_depth || depth < opt_depth)) {
    sb.push(goog.debug.getFunctionName(fn));
    sb.push("()\n");
    try {
      fn = fn.caller;
    } catch (e) {
      sb.push("[exception trying to get caller]\n");
      break;
    }
    depth++;
    if (depth >= goog.debug.MAX_STACK_DEPTH) {
      sb.push("[...long stack...]");
      break;
    }
  }
  if (opt_depth && depth >= opt_depth) {
    sb.push("[...reached max depth limit...]");
  } else {
    sb.push("[end]");
  }
  return sb.join("");
};
/** @type {number} */ goog.debug.MAX_STACK_DEPTH = 50;
/**
 * @private
 * @param {Function} fn
 * @return {?string}
 */
goog.debug.getNativeStackTrace_ = function(fn) {
  var tempErr = new Error;
  if (Error.captureStackTrace) {
    Error.captureStackTrace(tempErr, fn);
    return String(tempErr.stack);
  } else {
    try {
      throw tempErr;
    } catch (e) {
      tempErr = e;
    }
    var stack = tempErr.stack;
    if (stack) {
      return String(stack);
    }
  }
  return null;
};
/**
 * @param {?Function=} fn
 * @return {string}
 * @suppress {es5Strict}
 */
goog.debug.getStacktrace = function(fn) {
  var stack;
  if (!goog.debug.FORCE_SLOPPY_STACKS) {
    var contextFn = fn || goog.debug.getStacktrace;
    stack = goog.debug.getNativeStackTrace_(contextFn);
  }
  if (!stack) {
    stack = goog.debug.getStacktraceHelper_(fn || arguments.callee.caller, []);
  }
  return stack;
};
/**
 * @private
 * @param {?Function} fn
 * @param {Array<!Function>} visited
 * @return {string}
 * @suppress {es5Strict}
 */
goog.debug.getStacktraceHelper_ = function(fn, visited) {
  var sb = [];
  if (goog.array.contains(visited, fn)) {
    sb.push("[...circular reference...]");
  } else {
    if (fn && visited.length < goog.debug.MAX_STACK_DEPTH) {
      sb.push(goog.debug.getFunctionName(fn) + "(");
      var args = fn.arguments;
      for (var i = 0; args && i < args.length; i++) {
        if (i > 0) {
          sb.push(", ");
        }
        var argDesc;
        var arg = args[i];
        switch(typeof arg) {
          case "object":
            argDesc = arg ? "object" : "null";
            break;
          case "string":
            argDesc = arg;
            break;
          case "number":
            argDesc = String(arg);
            break;
          case "boolean":
            argDesc = arg ? "true" : "false";
            break;
          case "function":
            argDesc = goog.debug.getFunctionName(arg);
            argDesc = argDesc ? argDesc : "[fn]";
            break;
          case "undefined":
          default:
            argDesc = typeof arg;
            break;
        }
        if (argDesc.length > 40) {
          argDesc = argDesc.substr(0, 40) + "...";
        }
        sb.push(argDesc);
      }
      visited.push(fn);
      sb.push(")\n");
      try {
        sb.push(goog.debug.getStacktraceHelper_(fn.caller, visited));
      } catch (e) {
        sb.push("[exception trying to get caller]\n");
      }
    } else {
      if (fn) {
        sb.push("[...long stack...]");
      } else {
        sb.push("[end]");
      }
    }
  }
  return sb.join("");
};
/**
 * @param {Function} fn
 * @return {string}
 */
goog.debug.getFunctionName = function(fn) {
  if (goog.debug.fnNameCache_[fn]) {
    return goog.debug.fnNameCache_[fn];
  }
  var functionSource = String(fn);
  if (!goog.debug.fnNameCache_[functionSource]) {
    var matches = /function\s+([^\(]+)/m.exec(functionSource);
    if (matches) {
      var method = matches[1];
      goog.debug.fnNameCache_[functionSource] = method;
    } else {
      goog.debug.fnNameCache_[functionSource] = "[Anonymous]";
    }
  }
  return goog.debug.fnNameCache_[functionSource];
};
/**
 * @param {string} string
 * @return {string}
 */
goog.debug.makeWhitespaceVisible = function(string) {
  return string.replace(/ /g, "[_]").replace(/\f/g, "[f]").replace(/\n/g, "[n]\n").replace(/\r/g, "[r]").replace(/\t/g, "[t]");
};
/**
 * @param {*} value
 * @return {string}
 */
goog.debug.runtimeType = function(value) {
  if (value instanceof Function) {
    return value.displayName || value.name || "unknown type name";
  } else {
    if (value instanceof Object) {
      return /** @type {string} */ (value.constructor.displayName) || value.constructor.name || Object.prototype.toString.call(value);
    } else {
      return value === null ? "null" : typeof value;
    }
  }
};
/** @private @type {Object} */ goog.debug.fnNameCache_ = {};
/**
 * @private
 * @param {T} arg
 * @return {T}
 * @template T
 */
goog.debug.freezeInternal_ = goog.DEBUG && Object.freeze || function(arg) {
  return arg;
};
/**
 * @param {T} arg
 * @return {T}
 * @template T
 */
goog.debug.freeze = function(arg) {
  return {valueOf:function() {
    return goog.debug.freezeInternal_(arg);
  }}.valueOf();
};

//# sourceMappingURL=goog.debug.debug.js.map
