goog.provide("com.cognitect.transit.impl.reader");
goog.require("com.cognitect.transit.impl.decoder");
goog.require("com.cognitect.transit.caching");
goog.scope(function() {
  var reader = com.cognitect.transit.impl.reader, decoder = com.cognitect.transit.impl.decoder, caching = com.cognitect.transit.caching;
  /** @constructor */ reader.JSONUnmarshaller = function Transit$JSONUnmarshaller(opts) {
    this.decoder = new decoder.Decoder(opts);
  };
  /**
   * @param {string} str
   * @param {caching.ReadCache} cache
   * @return {*}
   */
  reader.JSONUnmarshaller.prototype.unmarshal = function(str, cache) {
    return this.decoder.decode(JSON.parse(str), cache);
  };
  /**
   * @constructor
   * @param {reader.JSONUnmarshaller} unmarshaller
   * @param {Object=} options
   */
  reader.Reader = function Transit$Reader(unmarshaller, options) {
    this.unmarshaller = unmarshaller;
    this.options = options || {};
    this.cache = this.options["cache"] ? this.options["cache"] : new caching.ReadCache;
  };
  /**
   * @param {string} str
   * @return {*}
   */
  reader.Reader.prototype.read = function(str) {
    var ret = this.unmarshaller.unmarshal(str, this.cache);
    this.cache.clear();
    return ret;
  };
  reader.Reader.prototype["read"] = reader.Reader.prototype.read;
});

//# sourceMappingURL=com.cognitect.transit.impl.reader.js.map
