goog.provide('clojure.test.check.random.longs');
goog.require('cljs.core');
goog.require('clojure.test.check.random.longs.bit_count_impl');
goog.require('goog.math.Long');
goog.require('cljs.core');
clojure.test.check.random.longs.unsigned_bit_shift_right = (function clojure$test$check$random$longs$unsigned_bit_shift_right(x,n){
return x.shiftRightUnsigned(n);
});
clojure.test.check.random.longs._PLUS_ = (function clojure$test$check$random$longs$_PLUS_(x,y){
return x.add(y);
});
clojure.test.check.random.longs._STAR_ = (function clojure$test$check$random$longs$_STAR_(x,y){
var a48 = (x.high_ >>> (16));
var a32 = (x.high_ & (65535));
var a16 = (x.low_ >>> (16));
var a00 = (x.low_ & (65535));
var b48 = (y.high_ >>> (16));
var b32 = (y.high_ & (65535));
var b16 = (y.low_ >>> (16));
var b00 = (y.low_ & (65535));
var arr = [(0),(0),(0),(0)];
(arr[(0)] = (a00 * b00));

(arr[(1)] = ((arr[(0)]) >>> (16)));

(arr[(0)] = ((arr[(0)]) & (65535)));

(arr[(1)] = ((arr[(1)]) + (a16 * b00)));

(arr[(2)] = ((arr[(1)]) >>> (16)));

(arr[(1)] = ((arr[(1)]) & (65535)));

(arr[(1)] = ((arr[(1)]) + (a00 * b16)));

(arr[(2)] = ((arr[(2)]) + ((arr[(1)]) >>> (16))));

(arr[(1)] = ((arr[(1)]) & (65535)));

(arr[(2)] = ((arr[(2)]) + (a32 * b00)));

(arr[(3)] = ((arr[(2)]) >>> (16)));

(arr[(2)] = ((arr[(2)]) & (65535)));

(arr[(2)] = ((arr[(2)]) + (a16 * b16)));

(arr[(3)] = ((arr[(3)]) + ((arr[(2)]) >>> (16))));

(arr[(2)] = ((arr[(2)]) & (65535)));

(arr[(2)] = ((arr[(2)]) + (a00 * b32)));

(arr[(3)] = ((arr[(3)]) + ((arr[(2)]) >>> (16))));

(arr[(2)] = ((arr[(2)]) & (65535)));

(arr[(3)] = (((((arr[(3)]) + (a48 * b00)) + (a32 * b16)) + (a16 * b32)) + (a00 * b48)));

(arr[(3)] = ((arr[(3)]) & (65535)));

var G__61771 = (((arr[(1)]) << (16)) | (arr[(0)]));
var G__61772 = (((arr[(3)]) << (16)) | (arr[(2)]));
return goog.math.Long.fromBits(G__61771,G__61772);
});
clojure.test.check.random.longs.bit_xor = (function clojure$test$check$random$longs$bit_xor(x,y){
return x.xor(y);
});
clojure.test.check.random.longs.bit_or = (function clojure$test$check$random$longs$bit_or(x,y){
return x.or(y);
});
clojure.test.check.random.longs.from_string = (function clojure$test$check$random$longs$from_string(s,radix){
return goog.math.Long.fromString(s,radix);
});
clojure.test.check.random.longs.from_number = (function clojure$test$check$random$longs$from_number(x){
return goog.math.Long.fromNumber(x);
});
/**
 * Coerces to long, or returns nil if not possible.
 */
clojure.test.check.random.longs.__GT_long = (function clojure$test$check$random$longs$__GT_long(x){
if(typeof x === 'number'){
return goog.math.Long.fromNumber(x);
} else {
if((x instanceof goog.math.Long)){
return x;
} else {
return null;
}
}
});
clojure.test.check.random.longs.ONE = goog.math.Long.getOne();
clojure.test.check.random.longs.bit_count = clojure.test.check.random.longs.bit_count_impl.bit_count;

//# sourceMappingURL=clojure.test.check.random.longs.js.map
