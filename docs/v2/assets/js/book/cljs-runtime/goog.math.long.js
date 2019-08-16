goog.provide("goog.math.Long");
goog.require("goog.asserts");
goog.require("goog.reflect");
/**
 @final
 @struct
 @constructor
 @param {number} low
 @param {number} high
 */
goog.math.Long = function(low, high) {
  /** @private @const @type {number} */ this.low_ = low | 0;
  /** @private @const @type {number} */ this.high_ = high | 0;
};
/** @private @type {!Object<number,!goog.math.Long>} */ goog.math.Long.IntCache_ = {};
/**
 @private
 @param {number} value
 @return {!goog.math.Long}
 */
goog.math.Long.getCachedIntValue_ = function(value) {
  return goog.reflect.cache(goog.math.Long.IntCache_, value, function(val) {
    return new goog.math.Long(val, val < 0 ? -1 : 0);
  });
};
/** @private @const @type {!Array<string>} */ goog.math.Long.MAX_VALUE_FOR_RADIX_ = ["", "", "111111111111111111111111111111111111111111111111111111111111111", "2021110011022210012102010021220101220221", "13333333333333333333333333333333", "1104332401304422434310311212", "1540241003031030222122211", "22341010611245052052300", "777777777777777777777", "67404283172107811827", "9223372036854775807", "1728002635214590697", "41a792678515120367", "10b269549075433c37", "4340724c6c71dc7a7", "160e2ad3246366807", 
"7fffffffffffffff", "33d3d8307b214008", "16agh595df825fa7", "ba643dci0ffeehh", "5cbfjia3fh26ja7", "2heiciiie82dh97", "1adaibb21dckfa7", "i6k448cf4192c2", "acd772jnc9l0l7", "64ie1focnn5g77", "3igoecjbmca687", "27c48l5b37oaop", "1bk39f3ah3dmq7", "q1se8f0m04isb", "hajppbc1fc207", "bm03i95hia437", "7vvvvvvvvvvvv", "5hg4ck9jd4u37", "3tdtk1v8j6tpp", "2pijmikexrxp7", "1y2p0ij32e8e7"];
/** @private @const @type {!Array<string>} */ goog.math.Long.MIN_VALUE_FOR_RADIX_ = ["", "", "-1000000000000000000000000000000000000000000000000000000000000000", "-2021110011022210012102010021220101220222", "-20000000000000000000000000000000", "-1104332401304422434310311213", "-1540241003031030222122212", "-22341010611245052052301", "-1000000000000000000000", "-67404283172107811828", "-9223372036854775808", "-1728002635214590698", "-41a792678515120368", "-10b269549075433c38", "-4340724c6c71dc7a8", 
"-160e2ad3246366808", "-8000000000000000", "-33d3d8307b214009", "-16agh595df825fa8", "-ba643dci0ffeehi", "-5cbfjia3fh26ja8", "-2heiciiie82dh98", "-1adaibb21dckfa8", "-i6k448cf4192c3", "-acd772jnc9l0l8", "-64ie1focnn5g78", "-3igoecjbmca688", "-27c48l5b37oaoq", "-1bk39f3ah3dmq8", "-q1se8f0m04isc", "-hajppbc1fc208", "-bm03i95hia438", "-8000000000000", "-5hg4ck9jd4u38", "-3tdtk1v8j6tpq", "-2pijmikexrxp8", "-1y2p0ij32e8e8"];
/**
 @param {number} value
 @return {!goog.math.Long}
 */
goog.math.Long.fromInt = function(value) {
  var intValue = value | 0;
  goog.asserts.assert(value === intValue, "value should be a 32-bit integer");
  if (-128 <= intValue && intValue < 128) {
    return goog.math.Long.getCachedIntValue_(intValue);
  } else {
    return new goog.math.Long(intValue, intValue < 0 ? -1 : 0);
  }
};
/**
 @param {number} value
 @return {!goog.math.Long}
 */
goog.math.Long.fromNumber = function(value) {
  if (value > 0) {
    if (value >= goog.math.Long.TWO_PWR_63_DBL_) {
      return goog.math.Long.getMaxValue();
    }
    return new goog.math.Long(value, value / goog.math.Long.TWO_PWR_32_DBL_);
  } else {
    if (value < 0) {
      if (value <= -goog.math.Long.TWO_PWR_63_DBL_) {
        return goog.math.Long.getMinValue();
      }
      return (new goog.math.Long(-value, -value / goog.math.Long.TWO_PWR_32_DBL_)).negate();
    } else {
      return goog.math.Long.getZero();
    }
  }
};
/**
 @param {number} lowBits
 @param {number} highBits
 @return {!goog.math.Long}
 */
goog.math.Long.fromBits = function(lowBits, highBits) {
  return new goog.math.Long(lowBits, highBits);
};
/** @private @type {number} */ goog.math.Long.MAX_SAFE_INTEGER_ = 9007199254740991;
/**
 @param {string} str
 @param {number=} opt_radix
 @return {!goog.math.Long}
 */
goog.math.Long.fromString = function(str, opt_radix) {
  if (str.charAt(0) == "-") {
    return goog.math.Long.fromString(str.substring(1), opt_radix).negate();
  }
  var numberValue = parseInt(str, opt_radix || 10);
  if (numberValue <= goog.math.Long.MAX_SAFE_INTEGER_) {
    return new goog.math.Long(numberValue % goog.math.Long.TWO_PWR_32_DBL_ | 0, numberValue / goog.math.Long.TWO_PWR_32_DBL_ | 0);
  }
  if (str.length == 0) {
    throw new Error("number format error: empty string");
  }
  if (str.indexOf("-") >= 0) {
    throw new Error('number format error: interior "-" character: ' + str);
  }
  var radix = opt_radix || 10;
  if (radix < 2 || 36 < radix) {
    throw new Error("radix out of range: " + radix);
  }
  var radixToPower = goog.math.Long.fromNumber(Math.pow(radix, 8));
  var result = goog.math.Long.getZero();
  for (var i = 0; i < str.length; i += 8) {
    var size = Math.min(8, str.length - i);
    var value = parseInt(str.substring(i, i + size), radix);
    if (size < 8) {
      var power = goog.math.Long.fromNumber(Math.pow(radix, size));
      result = result.multiply(power).add(goog.math.Long.fromNumber(value));
    } else {
      result = result.multiply(radixToPower);
      result = result.add(goog.math.Long.fromNumber(value));
    }
  }
  return result;
};
/**
 @param {string} str
 @param {number=} opt_radix
 @return {boolean}
 */
goog.math.Long.isStringInRange = function(str, opt_radix) {
  var radix = opt_radix || 10;
  if (radix < 2 || 36 < radix) {
    throw new Error("radix out of range: " + radix);
  }
  var extremeValue = str.charAt(0) == "-" ? goog.math.Long.MIN_VALUE_FOR_RADIX_[radix] : goog.math.Long.MAX_VALUE_FOR_RADIX_[radix];
  if (str.length < extremeValue.length) {
    return true;
  } else {
    if (str.length == extremeValue.length && str <= extremeValue) {
      return true;
    } else {
      return false;
    }
  }
};
/** @private @const @type {number} */ goog.math.Long.TWO_PWR_32_DBL_ = 4294967296;
/** @private @const @type {number} */ goog.math.Long.TWO_PWR_63_DBL_ = 0x7fffffffffffffff;
/** @private @const @type {!goog.math.Long} */ goog.math.Long.ZERO_ = goog.math.Long.fromBits(0, 0);
/**
 @public
 @return {!goog.math.Long}
 */
goog.math.Long.getZero = function() {
  return goog.math.Long.ZERO_;
};
/** @private @const @type {!goog.math.Long} */ goog.math.Long.ONE_ = goog.math.Long.fromBits(1, 0);
/**
 @public
 @return {!goog.math.Long}
 */
goog.math.Long.getOne = function() {
  return goog.math.Long.ONE_;
};
/** @private @const @type {!goog.math.Long} */ goog.math.Long.NEG_ONE_ = goog.math.Long.fromBits(-1, -1);
/**
 @public
 @return {!goog.math.Long}
 */
goog.math.Long.getNegOne = function() {
  return goog.math.Long.NEG_ONE_;
};
/** @private @const @type {!goog.math.Long} */ goog.math.Long.MAX_VALUE_ = goog.math.Long.fromBits(4294967295, 2147483647);
/**
 @public
 @return {!goog.math.Long}
 */
goog.math.Long.getMaxValue = function() {
  return goog.math.Long.MAX_VALUE_;
};
/** @private @const @type {!goog.math.Long} */ goog.math.Long.MIN_VALUE_ = goog.math.Long.fromBits(0, 2147483648);
/**
 @public
 @return {!goog.math.Long}
 */
goog.math.Long.getMinValue = function() {
  return goog.math.Long.MIN_VALUE_;
};
/** @private @const @type {!goog.math.Long} */ goog.math.Long.TWO_PWR_24_ = goog.math.Long.fromBits(1 << 24, 0);
/**
 @public
 @return {!goog.math.Long}
 */
goog.math.Long.getTwoPwr24 = function() {
  return goog.math.Long.TWO_PWR_24_;
};
/**
 @return {number}
 */
goog.math.Long.prototype.toInt = function() {
  return this.low_;
};
/**
 @return {number}
 */
goog.math.Long.prototype.toNumber = function() {
  return this.high_ * goog.math.Long.TWO_PWR_32_DBL_ + this.getLowBitsUnsigned();
};
/**
 @return {boolean}
 */
goog.math.Long.prototype.isSafeInteger = function() {
  var top11Bits = this.high_ >> 21;
  return top11Bits == 0 || top11Bits == -1 && !(this.low_ == 0 && this.high_ == (4292870144 | 0));
};
/**
 @param {number=} opt_radix
 @return {string}
 @override
 */
goog.math.Long.prototype.toString = function(opt_radix) {
  var radix = opt_radix || 10;
  if (radix < 2 || 36 < radix) {
    throw new Error("radix out of range: " + radix);
  }
  if (this.isSafeInteger()) {
    var asNumber = this.toNumber();
    return radix == 10 ? "" + asNumber : asNumber.toString(radix);
  }
  var safeDigits = 14 - (radix >> 2);
  var radixPowSafeDigits = Math.pow(radix, safeDigits);
  var radixToPower = goog.math.Long.fromBits(radixPowSafeDigits, radixPowSafeDigits / goog.math.Long.TWO_PWR_32_DBL_);
  var remDiv = this.div(radixToPower);
  var val = Math.abs(this.subtract(remDiv.multiply(radixToPower)).toNumber());
  var digits = radix == 10 ? "" + val : val.toString(radix);
  if (digits.length < safeDigits) {
    digits = "0000000000000".substr(digits.length - safeDigits) + digits;
  }
  val = remDiv.toNumber();
  return (radix == 10 ? val : val.toString(radix)) + digits;
};
/**
 @return {number}
 */
goog.math.Long.prototype.getHighBits = function() {
  return this.high_;
};
/**
 @return {number}
 */
goog.math.Long.prototype.getLowBits = function() {
  return this.low_;
};
/**
 @return {number}
 */
goog.math.Long.prototype.getLowBitsUnsigned = function() {
  return this.low_ >>> 0;
};
/**
 @return {number}
 */
goog.math.Long.prototype.getNumBitsAbs = function() {
  if (this.isNegative()) {
    if (this.equals(goog.math.Long.getMinValue())) {
      return 64;
    } else {
      return this.negate().getNumBitsAbs();
    }
  } else {
    var val = this.high_ != 0 ? this.high_ : this.low_;
    for (var bit = 31; bit > 0; bit--) {
      if ((val & 1 << bit) != 0) {
        break;
      }
    }
    return this.high_ != 0 ? bit + 33 : bit + 1;
  }
};
/**
 @return {boolean}
 */
goog.math.Long.prototype.isZero = function() {
  return this.low_ == 0 && this.high_ == 0;
};
/**
 @return {boolean}
 */
goog.math.Long.prototype.isNegative = function() {
  return this.high_ < 0;
};
/**
 @return {boolean}
 */
goog.math.Long.prototype.isOdd = function() {
  return (this.low_ & 1) == 1;
};
/**
 @param {goog.math.Long} other
 @return {boolean}
 */
goog.math.Long.prototype.equals = function(other) {
  return this.low_ == other.low_ && this.high_ == other.high_;
};
/**
 @param {goog.math.Long} other
 @return {boolean}
 */
goog.math.Long.prototype.notEquals = function(other) {
  return !this.equals(other);
};
/**
 @param {goog.math.Long} other
 @return {boolean}
 */
goog.math.Long.prototype.lessThan = function(other) {
  return this.compare(other) < 0;
};
/**
 @param {goog.math.Long} other
 @return {boolean}
 */
goog.math.Long.prototype.lessThanOrEqual = function(other) {
  return this.compare(other) <= 0;
};
/**
 @param {goog.math.Long} other
 @return {boolean}
 */
goog.math.Long.prototype.greaterThan = function(other) {
  return this.compare(other) > 0;
};
/**
 @param {goog.math.Long} other
 @return {boolean}
 */
goog.math.Long.prototype.greaterThanOrEqual = function(other) {
  return this.compare(other) >= 0;
};
/**
 @param {goog.math.Long} other
 @return {number}
 */
goog.math.Long.prototype.compare = function(other) {
  if (this.high_ == other.high_) {
    if (this.low_ == other.low_) {
      return 0;
    }
    return this.getLowBitsUnsigned() > other.getLowBitsUnsigned() ? 1 : -1;
  }
  return this.high_ > other.high_ ? 1 : -1;
};
/**
 @return {!goog.math.Long}
 */
goog.math.Long.prototype.negate = function() {
  var negLow = ~this.low_ + 1 | 0;
  var overflowFromLow = !negLow;
  var negHigh = ~this.high_ + overflowFromLow | 0;
  return goog.math.Long.fromBits(negLow, negHigh);
};
/**
 @param {goog.math.Long} other
 @return {!goog.math.Long}
 */
goog.math.Long.prototype.add = function(other) {
  var a48 = this.high_ >>> 16;
  var a32 = this.high_ & 65535;
  var a16 = this.low_ >>> 16;
  var a00 = this.low_ & 65535;
  var b48 = other.high_ >>> 16;
  var b32 = other.high_ & 65535;
  var b16 = other.low_ >>> 16;
  var b00 = other.low_ & 65535;
  var c48 = 0, c32 = 0, c16 = 0, c00 = 0;
  c00 += a00 + b00;
  c16 += c00 >>> 16;
  c00 &= 65535;
  c16 += a16 + b16;
  c32 += c16 >>> 16;
  c16 &= 65535;
  c32 += a32 + b32;
  c48 += c32 >>> 16;
  c32 &= 65535;
  c48 += a48 + b48;
  c48 &= 65535;
  return goog.math.Long.fromBits(c16 << 16 | c00, c48 << 16 | c32);
};
/**
 @param {goog.math.Long} other
 @return {!goog.math.Long}
 */
goog.math.Long.prototype.subtract = function(other) {
  return this.add(other.negate());
};
/**
 @param {goog.math.Long} other
 @return {!goog.math.Long}
 */
goog.math.Long.prototype.multiply = function(other) {
  if (this.isZero()) {
    return this;
  }
  if (other.isZero()) {
    return other;
  }
  var a48 = this.high_ >>> 16;
  var a32 = this.high_ & 65535;
  var a16 = this.low_ >>> 16;
  var a00 = this.low_ & 65535;
  var b48 = other.high_ >>> 16;
  var b32 = other.high_ & 65535;
  var b16 = other.low_ >>> 16;
  var b00 = other.low_ & 65535;
  var c48 = 0, c32 = 0, c16 = 0, c00 = 0;
  c00 += a00 * b00;
  c16 += c00 >>> 16;
  c00 &= 65535;
  c16 += a16 * b00;
  c32 += c16 >>> 16;
  c16 &= 65535;
  c16 += a00 * b16;
  c32 += c16 >>> 16;
  c16 &= 65535;
  c32 += a32 * b00;
  c48 += c32 >>> 16;
  c32 &= 65535;
  c32 += a16 * b16;
  c48 += c32 >>> 16;
  c32 &= 65535;
  c32 += a00 * b32;
  c48 += c32 >>> 16;
  c32 &= 65535;
  c48 += a48 * b00 + a32 * b16 + a16 * b32 + a00 * b48;
  c48 &= 65535;
  return goog.math.Long.fromBits(c16 << 16 | c00, c48 << 16 | c32);
};
/**
 @param {goog.math.Long} other
 @return {!goog.math.Long}
 */
goog.math.Long.prototype.div = function(other) {
  if (other.isZero()) {
    throw new Error("division by zero");
  }
  if (this.isNegative()) {
    if (this.equals(goog.math.Long.getMinValue())) {
      if (other.equals(goog.math.Long.getOne()) || other.equals(goog.math.Long.getNegOne())) {
        return goog.math.Long.getMinValue();
      }
      if (other.equals(goog.math.Long.getMinValue())) {
        return goog.math.Long.getOne();
      }
      var halfThis = this.shiftRight(1);
      var approx = halfThis.div(other).shiftLeft(1);
      if (approx.equals(goog.math.Long.getZero())) {
        return other.isNegative() ? goog.math.Long.getOne() : goog.math.Long.getNegOne();
      }
      var rem = this.subtract(other.multiply(approx));
      var result = approx.add(rem.div(other));
      return result;
    }
    if (other.isNegative()) {
      return this.negate().div(other.negate());
    }
    return this.negate().div(other).negate();
  }
  if (this.isZero()) {
    return goog.math.Long.getZero();
  }
  if (other.isNegative()) {
    if (other.equals(goog.math.Long.getMinValue())) {
      return goog.math.Long.getZero();
    }
    return this.div(other.negate()).negate();
  }
  var res = goog.math.Long.getZero();
  var rem = this;
  while (rem.greaterThanOrEqual(other)) {
    var approx = Math.max(1, Math.floor(rem.toNumber() / other.toNumber()));
    var log2 = Math.ceil(Math.log(approx) / Math.LN2);
    var delta = log2 <= 48 ? 1 : Math.pow(2, log2 - 48);
    var approxRes = goog.math.Long.fromNumber(approx);
    var approxRem = approxRes.multiply(other);
    while (approxRem.isNegative() || approxRem.greaterThan(rem)) {
      approx -= delta;
      approxRes = goog.math.Long.fromNumber(approx);
      approxRem = approxRes.multiply(other);
    }
    if (approxRes.isZero()) {
      approxRes = goog.math.Long.getOne();
    }
    res = res.add(approxRes);
    rem = rem.subtract(approxRem);
  }
  return res;
};
/**
 @param {goog.math.Long} other
 @return {!goog.math.Long}
 */
goog.math.Long.prototype.modulo = function(other) {
  return this.subtract(this.div(other).multiply(other));
};
/**
 @return {!goog.math.Long}
 */
goog.math.Long.prototype.not = function() {
  return goog.math.Long.fromBits(~this.low_, ~this.high_);
};
/**
 @param {goog.math.Long} other
 @return {!goog.math.Long}
 */
goog.math.Long.prototype.and = function(other) {
  return goog.math.Long.fromBits(this.low_ & other.low_, this.high_ & other.high_);
};
/**
 @param {goog.math.Long} other
 @return {!goog.math.Long}
 */
goog.math.Long.prototype.or = function(other) {
  return goog.math.Long.fromBits(this.low_ | other.low_, this.high_ | other.high_);
};
/**
 @param {goog.math.Long} other
 @return {!goog.math.Long}
 */
goog.math.Long.prototype.xor = function(other) {
  return goog.math.Long.fromBits(this.low_ ^ other.low_, this.high_ ^ other.high_);
};
/**
 @param {number} numBits
 @return {!goog.math.Long}
 */
goog.math.Long.prototype.shiftLeft = function(numBits) {
  numBits &= 63;
  if (numBits == 0) {
    return this;
  } else {
    var low = this.low_;
    if (numBits < 32) {
      var high = this.high_;
      return goog.math.Long.fromBits(low << numBits, high << numBits | low >>> 32 - numBits);
    } else {
      return goog.math.Long.fromBits(0, low << numBits - 32);
    }
  }
};
/**
 @param {number} numBits
 @return {!goog.math.Long}
 */
goog.math.Long.prototype.shiftRight = function(numBits) {
  numBits &= 63;
  if (numBits == 0) {
    return this;
  } else {
    var high = this.high_;
    if (numBits < 32) {
      var low = this.low_;
      return goog.math.Long.fromBits(low >>> numBits | high << 32 - numBits, high >> numBits);
    } else {
      return goog.math.Long.fromBits(high >> numBits - 32, high >= 0 ? 0 : -1);
    }
  }
};
/**
 @param {number} numBits
 @return {!goog.math.Long}
 */
goog.math.Long.prototype.shiftRightUnsigned = function(numBits) {
  numBits &= 63;
  if (numBits == 0) {
    return this;
  } else {
    var high = this.high_;
    if (numBits < 32) {
      var low = this.low_;
      return goog.math.Long.fromBits(low >>> numBits | high << 32 - numBits, high >>> numBits);
    } else {
      if (numBits == 32) {
        return goog.math.Long.fromBits(high, 0);
      } else {
        return goog.math.Long.fromBits(high >>> numBits - 32, 0);
      }
    }
  }
};

//# sourceMappingURL=goog.math.long.js.map
