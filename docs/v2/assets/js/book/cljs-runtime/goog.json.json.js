goog.provide("goog.json");
goog.provide("goog.json.Replacer");
goog.provide("goog.json.Reviver");
goog.provide("goog.json.Serializer");
/** @define {boolean} */ goog.json.USE_NATIVE_JSON = goog.define("goog.json.USE_NATIVE_JSON", false);
/** @define {boolean} */ goog.json.TRY_NATIVE_JSON = goog.define("goog.json.TRY_NATIVE_JSON", false);
/**
 * @param {string} s
 * @return {boolean}
 */
goog.json.isValid = function(s) {
  if (/^\s*$/.test(s)) {
    return false;
  }
  /** @const */ var backslashesRe = /\\["\\\/bfnrtu]/g;
  /** @const */ var simpleValuesRe = /(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g;
  /** @const */ var openBracketsRe = /(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g;
  /** @const */ var remainderRe = /^[\],:{}\s\u2028\u2029]*$/;
  return remainderRe.test(s.replace(backslashesRe, "@").replace(simpleValuesRe, "]").replace(openBracketsRe, ""));
};
/** @private @type {function(string,!Error)} */ goog.json.errorLogger_ = goog.nullFunction;
/**
 * @param {function(string,!Error)} errorLogger
 */
goog.json.setErrorLogger = function(errorLogger) {
  goog.json.errorLogger_ = errorLogger;
};
/**
 * @param {*} s
 * @return {Object}
 * @deprecated Use JSON.parse.
 */
goog.json.parse = goog.json.USE_NATIVE_JSON ? /** @type {function(*):Object} */ (goog.global["JSON"]["parse"]) : function(s) {
  var error;
  if (goog.json.TRY_NATIVE_JSON) {
    try {
      return goog.global["JSON"]["parse"](s);
    } catch (ex) {
      error = ex;
    }
  }
  /** @const */ var o = String(s);
  if (goog.json.isValid(o)) {
    try {
      /** @const */ var result = /** @type {?Object} */ (eval("(" + o + ")"));
      if (error) {
        goog.json.errorLogger_("Invalid JSON: " + o, error);
      }
      return result;
    } catch (ex$4) {
    }
  }
  throw new Error("Invalid JSON string: " + o);
};
/** @typedef {function(this:Object,string,*):*} */ goog.json.Replacer;
/** @typedef {function(this:Object,string,*):*} */ goog.json.Reviver;
/**
 * @param {*} object
 * @param {?goog.json.Replacer=} opt_replacer
 * @return {string}
 */
goog.json.serialize = goog.json.USE_NATIVE_JSON ? /** @type {function(*,?goog.json.Replacer=):string} */ (goog.global["JSON"]["stringify"]) : function(object, opt_replacer) {
  return (new goog.json.Serializer(opt_replacer)).serialize(object);
};
/**
 * @constructor
 * @param {?goog.json.Replacer=} opt_replacer
 */
goog.json.Serializer = function(opt_replacer) {
  /** @private @type {(goog.json.Replacer|null|undefined)} */ this.replacer_ = opt_replacer;
};
/**
 * @param {*} object
 * @return {string}
 */
goog.json.Serializer.prototype.serialize = function(object) {
  /** @const */ var sb = [];
  this.serializeInternal(object, sb);
  return sb.join("");
};
/**
 * @protected
 * @param {*} object
 * @param {Array<string>} sb
 */
goog.json.Serializer.prototype.serializeInternal = function(object, sb) {
  if (object == null) {
    sb.push("null");
    return;
  }
  if (typeof object == "object") {
    if (goog.isArray(object)) {
      this.serializeArray(object, sb);
      return;
    } else {
      if (object instanceof String || object instanceof Number || object instanceof Boolean) {
        object = object.valueOf();
      } else {
        this.serializeObject_(/** @type {!Object} */ (object), sb);
        return;
      }
    }
  }
  switch(typeof object) {
    case "string":
      this.serializeString_(object, sb);
      break;
    case "number":
      this.serializeNumber_(object, sb);
      break;
    case "boolean":
      sb.push(String(object));
      break;
    case "function":
      sb.push("null");
      break;
    default:
      throw new Error("Unknown type: " + typeof object);
  }
};
/** @private @type {!Object} */ goog.json.Serializer.charToJsonCharCache_ = {'"':'\\"', "\\":"\\\\", "/":"\\/", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t", "\x0B":"\\u000b"};
/** @private @type {!RegExp} */ goog.json.Serializer.charsToReplace_ = /\uffff/.test("￿") ? /[\\"\x00-\x1f\x7f-\uffff]/g : /[\\"\x00-\x1f\x7f-\xff]/g;
/**
 * @private
 * @param {string} s
 * @param {Array<string>} sb
 */
goog.json.Serializer.prototype.serializeString_ = function(s, sb) {
  sb.push('"', s.replace(goog.json.Serializer.charsToReplace_, function(c) {
    var rv = goog.json.Serializer.charToJsonCharCache_[c];
    if (!rv) {
      rv = "\\u" + (c.charCodeAt(0) | 65536).toString(16).substr(1);
      goog.json.Serializer.charToJsonCharCache_[c] = rv;
    }
    return rv;
  }), '"');
};
/**
 * @private
 * @param {number} n
 * @param {Array<string>} sb
 */
goog.json.Serializer.prototype.serializeNumber_ = function(n, sb) {
  sb.push(isFinite(n) && !isNaN(n) ? String(n) : "null");
};
/**
 * @protected
 * @param {Array<string>} arr
 * @param {Array<string>} sb
 */
goog.json.Serializer.prototype.serializeArray = function(arr, sb) {
  /** @const */ var l = arr.length;
  sb.push("[");
  var sep = "";
  for (var i = 0; i < l; i++) {
    sb.push(sep);
    /** @const */ var value = arr[i];
    this.serializeInternal(this.replacer_ ? this.replacer_.call(arr, String(i), value) : value, sb);
    sep = ",";
  }
  sb.push("]");
};
/**
 * @private
 * @param {!Object} obj
 * @param {Array<string>} sb
 */
goog.json.Serializer.prototype.serializeObject_ = function(obj, sb) {
  sb.push("{");
  var sep = "";
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      /** @const */ var value = obj[key];
      if (typeof value != "function") {
        sb.push(sep);
        this.serializeString_(key, sb);
        sb.push(":");
        this.serializeInternal(this.replacer_ ? this.replacer_.call(obj, key, value) : value, sb);
        sep = ",";
      }
    }
  }
  sb.push("}");
};

//# sourceMappingURL=goog.json.json.js.map
