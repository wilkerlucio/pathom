goog.provide("goog.net.XhrLike");
/** @interface */ goog.net.XhrLike = function() {
};
/** @typedef {(!goog.net.XhrLike|!XMLHttpRequest)} */ goog.net.XhrLike.OrNative;
/** @type {(function()|null|undefined)} */ goog.net.XhrLike.prototype.onreadystatechange;
/** @type {(?ArrayBuffer|?Blob|?Document|?Object|?string)} */ goog.net.XhrLike.prototype.response;
/** @type {string} */ goog.net.XhrLike.prototype.responseText;
/** @type {string} */ goog.net.XhrLike.prototype.responseType;
/** @type {Document} */ goog.net.XhrLike.prototype.responseXML;
/** @type {number} */ goog.net.XhrLike.prototype.readyState;
/** @type {number} */ goog.net.XhrLike.prototype.status;
/** @type {string} */ goog.net.XhrLike.prototype.statusText;
/**
 * @param {string} method
 * @param {string} url
 * @param {?boolean=} opt_async
 * @param {?string=} opt_user
 * @param {?string=} opt_password
 */
goog.net.XhrLike.prototype.open = function(method, url, opt_async, opt_user, opt_password) {
};
/**
 * @param {(ArrayBuffer|ArrayBufferView|Blob|Document|FormData|string)=} opt_data
 */
goog.net.XhrLike.prototype.send = function(opt_data) {
};
goog.net.XhrLike.prototype.abort = function() {
};
/**
 * @param {string} header
 * @param {string} value
 */
goog.net.XhrLike.prototype.setRequestHeader = function(header, value) {
};
/**
 * @param {string} header
 * @return {string}
 */
goog.net.XhrLike.prototype.getResponseHeader = function(header) {
};
/**
 * @return {string}
 */
goog.net.XhrLike.prototype.getAllResponseHeaders = function() {
};

//# sourceMappingURL=goog.net.xhrlike.js.map
