goog.provide("goog.labs.net.xhr");
goog.provide("goog.labs.net.xhr.Error");
goog.provide("goog.labs.net.xhr.HttpError");
goog.provide("goog.labs.net.xhr.Options");
goog.provide("goog.labs.net.xhr.PostData");
goog.provide("goog.labs.net.xhr.ResponseType");
goog.provide("goog.labs.net.xhr.TimeoutError");
goog.require("goog.Promise");
goog.require("goog.asserts");
goog.require("goog.debug.Error");
goog.require("goog.net.HttpStatus");
goog.require("goog.net.XmlHttp");
goog.require("goog.object");
goog.require("goog.string");
goog.require("goog.uri.utils");
goog.require("goog.userAgent");
goog.scope(function() {
  var userAgent = goog.userAgent;
  var xhr = goog.labs.net.xhr;
  var HttpStatus = goog.net.HttpStatus;
  /** @typedef {{headers:(Object<?,string>|undefined),mimeType:(string|undefined),responseType:(xhr.ResponseType|undefined),timeoutMs:(number|undefined),withCredentials:(boolean|undefined),xmlHttpFactory:(goog.net.XmlHttpFactory|undefined),xssiPrefix:(string|undefined)}} */ xhr.Options;
  /** @typedef {(ArrayBuffer|ArrayBufferView|Blob|Document|FormData|null|string|undefined)} */ xhr.PostData;
  /** @type {string} */ xhr.CONTENT_TYPE_HEADER = "Content-Type";
  /** @type {string} */ xhr.FORM_CONTENT_TYPE = "application/x-www-form-urlencoded;charset\x3dutf-8";
  /** @enum {string} */ xhr.ResponseType = {ARRAYBUFFER:"arraybuffer", BLOB:"blob", DOCUMENT:"document", JSON:"json", TEXT:"text"};
  /**
   @param {string} url
   @param {xhr.Options=} opt_options
   @return {!goog.Promise<string>}
   */
  xhr.get = function(url, opt_options) {
    return xhr.send("GET", url, null, opt_options).then(function(request) {
      return request.responseText;
    });
  };
  /**
   @param {string} url
   @param {xhr.PostData} data
   @param {xhr.Options=} opt_options
   @return {!goog.Promise<string>}
   */
  xhr.post = function(url, data, opt_options) {
    return xhr.send("POST", url, data, opt_options).then(function(request) {
      return request.responseText;
    });
  };
  /**
   @param {string} url
   @param {xhr.Options=} opt_options
   @return {!goog.Promise<Object>}
   */
  xhr.getJson = function(url, opt_options) {
    return xhr.send("GET", url, null, opt_options).then(function(request) {
      return xhr.parseJson_(request.responseText, opt_options);
    });
  };
  /**
   @param {string} url
   @param {xhr.Options=} opt_options
   @return {!goog.Promise<!Blob>}
   */
  xhr.getBlob = function(url, opt_options) {
    goog.asserts.assert("Blob" in goog.global, "getBlob is not supported in this browser.");
    var options = opt_options ? goog.object.clone(opt_options) : {};
    options.responseType = xhr.ResponseType.BLOB;
    return xhr.send("GET", url, null, options).then(function(request) {
      return (/** @type {!Blob} */ (request.response));
    });
  };
  /**
   @param {string} url
   @param {xhr.Options=} opt_options
   @return {!goog.Promise<(!Uint8Array|!Array<number>)>}
   */
  xhr.getBytes = function(url, opt_options) {
    goog.asserts.assert(!userAgent.IE || userAgent.isDocumentModeOrHigher(9), "getBytes is not supported in this browser.");
    var options = opt_options ? goog.object.clone(opt_options) : {};
    options.responseType = xhr.ResponseType.ARRAYBUFFER;
    return xhr.send("GET", url, null, options).then(function(request) {
      if (request.response) {
        return new Uint8Array(/** @type {!ArrayBuffer} */ (request.response));
      }
      if (goog.global["VBArray"]) {
        return (new goog.global["VBArray"](request["responseBody"])).toArray();
      }
      throw new xhr.Error("getBytes is not supported in this browser.", url, request);
    });
  };
  /**
   @param {string} url
   @param {xhr.PostData} data
   @param {xhr.Options=} opt_options
   @return {!goog.Promise<Object>}
   */
  xhr.postJson = function(url, data, opt_options) {
    return xhr.send("POST", url, data, opt_options).then(function(request) {
      return xhr.parseJson_(request.responseText, opt_options);
    });
  };
  /**
   @param {string} method
   @param {string} url
   @param {xhr.PostData} data
   @param {xhr.Options=} opt_options
   @return {!goog.Promise<!goog.net.XhrLike.OrNative>}
   */
  xhr.send = function(method, url, data, opt_options) {
    var options = opt_options || {};
    var request = options.xmlHttpFactory ? options.xmlHttpFactory.createInstance() : goog.net.XmlHttp();
    var result = new goog.Promise(/**
     @suppress {strictPrimitiveOperators}
     */
    function(resolve, reject) {
      var timer;
      try {
        request.open(method, url, true);
      } catch (e) {
        reject(new xhr.Error("Error opening XHR: " + e.message, url, request));
      }
      request.onreadystatechange = function() {
        if (request.readyState == goog.net.XmlHttp.ReadyState.COMPLETE) {
          goog.global.clearTimeout(timer);
          if (HttpStatus.isSuccess(request.status) || request.status === 0 && !xhr.isEffectiveSchemeHttp_(url)) {
            resolve(request);
          } else {
            reject(new xhr.HttpError(request.status, url, request));
          }
        }
      };
      request.onerror = function() {
        reject(new xhr.Error("Network error", url, request));
      };
      var contentType;
      if (options.headers) {
        for (var key in options.headers) {
          var value = options.headers[key];
          if (goog.isDefAndNotNull(value)) {
            request.setRequestHeader(key, value);
          }
        }
        contentType = options.headers[xhr.CONTENT_TYPE_HEADER];
      }
      var dataIsFormData = goog.global["FormData"] && data instanceof goog.global["FormData"];
      if (method == "POST" && contentType === undefined && !dataIsFormData) {
        request.setRequestHeader(xhr.CONTENT_TYPE_HEADER, xhr.FORM_CONTENT_TYPE);
      }
      if (options.withCredentials) {
        request.withCredentials = options.withCredentials;
      }
      if (options.responseType) {
        request.responseType = options.responseType;
      }
      if (options.mimeType) {
        request.overrideMimeType(options.mimeType);
      }
      if (options.timeoutMs > 0) {
        timer = goog.global.setTimeout(function() {
          request.onreadystatechange = goog.nullFunction;
          request.abort();
          reject(new xhr.TimeoutError(url, request));
        }, options.timeoutMs);
      }
      try {
        request.send(data);
      } catch (e$5) {
        request.onreadystatechange = goog.nullFunction;
        goog.global.clearTimeout(timer);
        reject(new xhr.Error("Error sending XHR: " + e$5.message, url, request));
      }
    });
    return result.thenCatch(function(error) {
      if (error instanceof goog.Promise.CancellationError) {
        request.abort();
      }
      throw error;
    });
  };
  /**
   @private
   @param {string} url
   @return {boolean}
   */
  xhr.isEffectiveSchemeHttp_ = function(url) {
    var scheme = goog.uri.utils.getEffectiveScheme(url);
    return scheme == "http" || scheme == "https" || scheme == "";
  };
  /**
   @param {string} responseText
   @param {string=} opt_xssiPrefix
   @return {!Object}
   */
  xhr.parseJson = function(responseText, opt_xssiPrefix) {
    return xhr.parseJson_(responseText, {xssiPrefix:opt_xssiPrefix});
  };
  /**
   @private
   @param {string} responseText
   @param {(xhr.Options|undefined)} options
   @return {!Object}
   */
  xhr.parseJson_ = function(responseText, options) {
    var prefixStrippedResult = responseText;
    if (options && options.xssiPrefix) {
      prefixStrippedResult = xhr.stripXssiPrefix_(options.xssiPrefix, prefixStrippedResult);
    }
    return (/** @type {!Object} */ (JSON.parse(prefixStrippedResult)));
  };
  /**
   @private
   @param {string} prefix
   @param {string} string
   @return {string}
   */
  xhr.stripXssiPrefix_ = function(prefix, string) {
    if (goog.string.startsWith(string, prefix)) {
      string = string.substring(prefix.length);
    }
    return string;
  };
  /**
   @constructor
   @extends {goog.debug.Error}
   @param {string} message
   @param {string} url
   @param {!goog.net.XhrLike.OrNative} request
   */
  xhr.Error = function(message, url, request) {
    xhr.Error.base(this, "constructor", message + ", url\x3d" + url);
    /** @type {string} */ this.url = url;
    /** @type {!goog.net.XhrLike.OrNative} */ this.xhr = request;
  };
  goog.inherits(xhr.Error, goog.debug.Error);
  /** @override */ xhr.Error.prototype.name = "XhrError";
  /**
   @final
   @constructor
   @extends {xhr.Error}
   @param {number} status
   @param {string} url
   @param {!goog.net.XhrLike.OrNative} request
   */
  xhr.HttpError = function(status, url, request) {
    xhr.HttpError.base(this, "constructor", "Request Failed, status\x3d" + status, url, request);
    /** @type {number} */ this.status = status;
  };
  goog.inherits(xhr.HttpError, xhr.Error);
  /** @override */ xhr.HttpError.prototype.name = "XhrHttpError";
  /**
   @final
   @constructor
   @extends {xhr.Error}
   @param {string} url
   @param {!goog.net.XhrLike.OrNative} request
   */
  xhr.TimeoutError = function(url, request) {
    xhr.TimeoutError.base(this, "constructor", "Request timed out", url, request);
  };
  goog.inherits(xhr.TimeoutError, xhr.Error);
  /** @override */ xhr.TimeoutError.prototype.name = "XhrTimeoutError";
});

//# sourceMappingURL=goog.labs.net.xhr.js.map
