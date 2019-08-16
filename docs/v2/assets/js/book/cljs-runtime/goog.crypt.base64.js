goog.provide("goog.crypt.base64");
goog.require("goog.asserts");
goog.require("goog.crypt");
goog.require("goog.string");
goog.require("goog.userAgent");
goog.require("goog.userAgent.product");
/** @private @type {?Object} */ goog.crypt.base64.byteToCharMap_ = null;
/** @private @type {?Object} */ goog.crypt.base64.charToByteMap_ = null;
/** @private @type {?Object} */ goog.crypt.base64.byteToCharMapWebSafe_ = null;
/** @type {string} */ goog.crypt.base64.ENCODED_VALS_BASE = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" + "abcdefghijklmnopqrstuvwxyz" + "0123456789";
/** @type {string} */ goog.crypt.base64.ENCODED_VALS = goog.crypt.base64.ENCODED_VALS_BASE + "+/\x3d";
/** @type {string} */ goog.crypt.base64.ENCODED_VALS_WEBSAFE = goog.crypt.base64.ENCODED_VALS_BASE + "-_.";
/** @private @type {boolean} */ goog.crypt.base64.ASSUME_NATIVE_SUPPORT_ = goog.userAgent.GECKO || goog.userAgent.WEBKIT && !goog.userAgent.product.SAFARI || goog.userAgent.OPERA;
/** @private @type {boolean} */ goog.crypt.base64.HAS_NATIVE_ENCODE_ = goog.crypt.base64.ASSUME_NATIVE_SUPPORT_ || typeof goog.global.btoa == "function";
/** @private @type {boolean} */ goog.crypt.base64.HAS_NATIVE_DECODE_ = goog.crypt.base64.ASSUME_NATIVE_SUPPORT_ || !goog.userAgent.product.SAFARI && !goog.userAgent.IE && typeof goog.global.atob == "function";
/**
 @param {(Array<number>|Uint8Array)} input
 @param {boolean=} opt_webSafe
 @return {string}
 */
goog.crypt.base64.encodeByteArray = function(input, opt_webSafe) {
  goog.asserts.assert(goog.isArrayLike(input), "encodeByteArray takes an array as a parameter");
  goog.crypt.base64.init_();
  var byteToCharMap = opt_webSafe ? goog.crypt.base64.byteToCharMapWebSafe_ : goog.crypt.base64.byteToCharMap_;
  var output = [];
  for (var i = 0; i < input.length; i += 3) {
    var byte1 = input[i];
    var haveByte2 = i + 1 < input.length;
    var byte2 = haveByte2 ? input[i + 1] : 0;
    var haveByte3 = i + 2 < input.length;
    var byte3 = haveByte3 ? input[i + 2] : 0;
    var outByte1 = byte1 >> 2;
    var outByte2 = (byte1 & 3) << 4 | byte2 >> 4;
    var outByte3 = (byte2 & 15) << 2 | byte3 >> 6;
    var outByte4 = byte3 & 63;
    if (!haveByte3) {
      outByte4 = 64;
      if (!haveByte2) {
        outByte3 = 64;
      }
    }
    output.push(byteToCharMap[outByte1], byteToCharMap[outByte2], byteToCharMap[outByte3], byteToCharMap[outByte4]);
  }
  return output.join("");
};
/**
 @param {string} input
 @param {boolean=} opt_webSafe
 @return {string}
 */
goog.crypt.base64.encodeString = function(input, opt_webSafe) {
  if (goog.crypt.base64.HAS_NATIVE_ENCODE_ && !opt_webSafe) {
    return goog.global.btoa(input);
  }
  return goog.crypt.base64.encodeByteArray(goog.crypt.stringToByteArray(input), opt_webSafe);
};
/**
 @param {string} input
 @param {boolean=} opt_webSafe
 @return {string}
 */
goog.crypt.base64.decodeString = function(input, opt_webSafe) {
  if (goog.crypt.base64.HAS_NATIVE_DECODE_ && !opt_webSafe) {
    return goog.global.atob(input);
  }
  var output = "";
  function pushByte(b) {
    output += String.fromCharCode(b);
  }
  goog.crypt.base64.decodeStringInternal_(input, pushByte);
  return output;
};
/**
 @param {string} input
 @param {boolean=} opt_ignored
 @return {!Array<number>}
 */
goog.crypt.base64.decodeStringToByteArray = function(input, opt_ignored) {
  var output = [];
  function pushByte(b) {
    output.push(b);
  }
  goog.crypt.base64.decodeStringInternal_(input, pushByte);
  return output;
};
/**
 @param {string} input
 @return {!Uint8Array}
 */
goog.crypt.base64.decodeStringToUint8Array = function(input) {
  goog.asserts.assert(!goog.userAgent.IE || goog.userAgent.isVersionOrHigher("10"), "Browser does not support typed arrays");
  var len = input.length;
  var placeholders = 0;
  if (input[len - 2] === "\x3d") {
    placeholders = 2;
  } else {
    if (input[len - 1] === "\x3d") {
      placeholders = 1;
    }
  }
  var output = new Uint8Array(Math.ceil(len * 3 / 4) - placeholders);
  var outLen = 0;
  function pushByte(b) {
    output[outLen++] = b;
  }
  goog.crypt.base64.decodeStringInternal_(input, pushByte);
  return output.subarray(0, outLen);
};
/**
 @private
 @param {string} input
 @param {function(number):void} pushByte
 */
goog.crypt.base64.decodeStringInternal_ = function(input, pushByte) {
  goog.crypt.base64.init_();
  var nextCharIndex = 0;
  /**
   @param {number} default_val
   @return {number}
   */
  function getByte(default_val) {
    while (nextCharIndex < input.length) {
      var ch = input.charAt(nextCharIndex++);
      var b = goog.crypt.base64.charToByteMap_[ch];
      if (b != null) {
        return b;
      }
      if (!goog.string.isEmptyOrWhitespace(ch)) {
        throw new Error("Unknown base64 encoding at char: " + ch);
      }
    }
    return default_val;
  }
  while (true) {
    var byte1 = getByte(-1);
    var byte2 = getByte(0);
    var byte3 = getByte(64);
    var byte4 = getByte(64);
    if (byte4 === 64) {
      if (byte1 === -1) {
        return;
      }
    }
    var outByte1 = byte1 << 2 | byte2 >> 4;
    pushByte(outByte1);
    if (byte3 != 64) {
      var outByte2 = byte2 << 4 & 240 | byte3 >> 2;
      pushByte(outByte2);
      if (byte4 != 64) {
        var outByte3 = byte3 << 6 & 192 | byte4;
        pushByte(outByte3);
      }
    }
  }
};
/** @private */ goog.crypt.base64.init_ = function() {
  if (!goog.crypt.base64.byteToCharMap_) {
    goog.crypt.base64.byteToCharMap_ = {};
    goog.crypt.base64.charToByteMap_ = {};
    goog.crypt.base64.byteToCharMapWebSafe_ = {};
    for (var i = 0; i < goog.crypt.base64.ENCODED_VALS.length; i++) {
      goog.crypt.base64.byteToCharMap_[i] = goog.crypt.base64.ENCODED_VALS.charAt(i);
      goog.crypt.base64.charToByteMap_[goog.crypt.base64.byteToCharMap_[i]] = i;
      goog.crypt.base64.byteToCharMapWebSafe_[i] = goog.crypt.base64.ENCODED_VALS_WEBSAFE.charAt(i);
      if (i >= goog.crypt.base64.ENCODED_VALS_BASE.length) {
        goog.crypt.base64.charToByteMap_[goog.crypt.base64.ENCODED_VALS_WEBSAFE.charAt(i)] = i;
      }
    }
  }
};

//# sourceMappingURL=goog.crypt.base64.js.map
