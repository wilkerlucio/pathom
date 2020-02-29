goog.provide("goog.json.hybrid");
goog.require("goog.asserts");
goog.require("goog.json");
/**
 * @param {!Object} obj
 * @return {string}
 */
goog.json.hybrid.stringify = goog.json.USE_NATIVE_JSON ? goog.global["JSON"]["stringify"] : function(obj) {
  if (goog.global.JSON) {
    try {
      return goog.global.JSON.stringify(obj);
    } catch (e) {
    }
  }
  return goog.json.serialize(obj);
};
/**
 * @private
 * @param {string} jsonString
 * @param {function(string):Object} fallbackParser
 * @return {?Object}
 */
goog.json.hybrid.parse_ = function(jsonString, fallbackParser) {
  if (goog.global.JSON) {
    try {
      var obj = goog.global.JSON.parse(jsonString);
      goog.asserts.assert(typeof obj == "object");
      return (/** @type {?Object} */ (obj));
    } catch (e) {
    }
  }
  return fallbackParser(jsonString);
};
/**
 * @param {string} jsonString
 * @return {?Object}
 */
goog.json.hybrid.parse = goog.json.USE_NATIVE_JSON ? goog.global["JSON"]["parse"] : function(jsonString) {
  return goog.json.hybrid.parse_(jsonString, goog.json.parse);
};

//# sourceMappingURL=goog.json.hybrid.js.map
