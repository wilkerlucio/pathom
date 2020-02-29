goog.provide("com.cognitect.transit");
goog.require("com.cognitect.transit.util");
goog.require("com.cognitect.transit.impl.reader");
goog.require("com.cognitect.transit.impl.writer");
goog.require("com.cognitect.transit.types");
goog.require("com.cognitect.transit.eq");
goog.require("com.cognitect.transit.impl.decoder");
goog.require("com.cognitect.transit.caching");
/** @define {boolean} */ var TRANSIT_DEV = true;
/** @define {boolean} */ var TRANSIT_NODE_TARGET = false;
/** @define {boolean} */ var TRANSIT_BROWSER_TARGET = false;
/** @define {boolean} */ var TRANSIT_BROWSER_AMD_TARGET = false;
goog.scope(function() {
  var transit = com.cognitect.transit;
  var util = com.cognitect.transit.util, reader = com.cognitect.transit.impl.reader, writer = com.cognitect.transit.impl.writer, decoder = com.cognitect.transit.impl.decoder, types = com.cognitect.transit.types, eq = com.cognitect.transit.eq, caching = com.cognitect.transit.caching;
  /** @typedef {(Map|com.cognitect.transit.types.TransitArrayMap|com.cognitect.transit.types.TransitMap)} */ transit.MapLike;
  /** @typedef {(Set|com.cognitect.transit.types.TransitSet)} */ transit.SetLike;
  /**
   * @param {string=} type
   * @param {Object=} opts
   * @return {com.cognitect.transit.impl.reader.Reader}
   */
  transit.reader = function(type, opts) {
    if (type === "json" || type === "json-verbose" || type == null) {
      type = "json";
      var unmarshaller = new reader.JSONUnmarshaller(opts);
      return new reader.Reader(unmarshaller, opts);
    } else {
      throw new Error("Cannot create reader of type " + type);
    }
  };
  /**
   * @param {string=} type
   * @param {Object=} opts
   * @return {com.cognitect.transit.impl.writer.Writer}
   */
  transit.writer = function(type, opts) {
    if (type === "json" || type === "json-verbose" || type == null) {
      if (type === "json-verbose") {
        if (opts == null) {
          opts = {};
        }
        opts["verbose"] = true;
      }
      var marshaller = new writer.JSONMarshaller(opts);
      return new writer.Writer(marshaller, opts);
    } else {
      var err = new Error('Type must be "json"');
      err.data = {type:type};
      throw err;
    }
  };
  /**
   * @param {Object} obj
   * @return {Object}
   */
  transit.makeWriteHandler = function(obj) {
    /** @constructor */ var Handler = function() {
    };
    Handler.prototype.tag = obj["tag"];
    Handler.prototype.rep = obj["rep"];
    Handler.prototype.stringRep = obj["stringRep"];
    Handler.prototype.getVerboseHandler = obj["getVerboseHandler"];
    return new Handler;
  };
  transit.makeBuilder = function(obj) {
    /** @constructor */ var Builder = function() {
    };
    Builder.prototype.init = obj["init"];
    Builder.prototype.add = obj["add"];
    Builder.prototype.finalize = obj["finalize"];
    Builder.prototype.fromArray = obj["fromArray"];
    return new Builder;
  };
  /**
   * @param {(number|string)} x
   * @return {Date}
   */
  transit.date = types.date;
  /**
   * @param {(number|string)} s
   * @return {(number|goog.math.Long)}
   */
  transit.integer = types.intValue;
  /**
   * @param {*} x
   * @return {boolean}
   */
  transit.isInteger = types.isInteger;
  /**
   * @param {string} s
   * @return {com.cognitect.transit.types.UUID}
   */
  transit.uuid = types.uuid;
  /**
   * @param {*} x
   * @return {boolean}
   */
  transit.isUUID = types.isUUID;
  /**
   * @param {string} s
   * @return {com.cognitect.transit.types.TaggedValue}
   */
  transit.bigInt = types.bigInteger;
  /**
   * @param {*} x
   * @return {boolean}
   */
  transit.isBigInt = types.isBigInteger;
  /**
   * @param {string} s
   * @return {com.cognitect.transit.types.TaggedValue}
   */
  transit.bigDec = types.bigDecimalValue;
  /**
   * @param {*} x
   * @return {boolean}
   */
  transit.isBigDec = types.isBigDecimal;
  /**
   * @param {string} name
   * @return {com.cognitect.transit.types.Keyword}
   */
  transit.keyword = types.keyword;
  /**
   * @param {*} x
   * @return {boolean}
   */
  transit.isKeyword = types.isKeyword;
  /**
   * @param {string} name
   * @return {com.cognitect.transit.types.Symbol}
   */
  transit.symbol = types.symbol;
  /**
   * @param {*} x
   * @return {boolean}
   */
  transit.isSymbol = types.isSymbol;
  /**
   * @param {string} s
   * @param {*=} decoder
   * @return {(com.cognitect.transit.types.TaggedValue|Uint8Array)}
   */
  transit.binary = types.binary;
  /**
   * @param {*} x
   * @return {Boolean}
   */
  transit.isBinary = types.isBinary;
  /**
   * @param {string} s
   * @return {com.cognitect.transit.types.TaggedValue}
   */
  transit.uri = types.uri;
  /**
   * @param {*} x
   * @return {Boolean}
   */
  transit.isURI = types.isURI;
  /**
   * @param {Array=} xs
   * @return {com.cognitect.transit.MapLike}
   */
  transit.map = types.map;
  /**
   * @param {*} x
   * @return {boolean}
   */
  transit.isMap = types.isMap;
  /**
   * @param {Array=} xs
   * @return {com.cognitect.transit.SetLike}
   */
  transit.set = types.set;
  /**
   * @param {*} x
   * @return {boolean}
   */
  transit.isSet = types.isSet;
  /**
   * @param {Array} xs
   * @return {com.cognitect.transit.types.TaggedValue}
   */
  transit.list = types.list;
  /**
   * @param {*} x
   * @return {boolean}
   */
  transit.isList = types.isList;
  /**
   * @param {*} x
   * @return {com.cognitect.transit.types.TaggedValue}
   */
  transit.quoted = types.quoted;
  /**
   * @param {*} x
   * @return {boolean}
   */
  transit.isQuoted = types.isQuoted;
  /**
   * @param {string} tag
   * @param {*} value
   * @return {com.cognitect.transit.types.TaggedValue}
   */
  transit.tagged = types.taggedValue;
  /**
   * @param {*} x
   * @return {boolean}
   */
  transit.isTaggedValue = types.isTaggedValue;
  /**
   * @param {com.cognitect.transit.MapLike} m
   * @return {Object}
   */
  transit.link = types.link;
  /**
   * @param {*} x
   * @return {boolean}
   */
  transit.isLink = types.isLink;
  /**
   * @param {*} x
   * @return {number}
   */
  transit.hash = eq.hashCode;
  /**
   * @param {(Object|com.cognitect.transit.MapLike)} x
   * @return {number}
   */
  transit.hashMapLike = eq.hashMapLike;
  /**
   * @param {Object} x
   * @return {number}
   */
  transit.hashArrayLike = eq.hashArrayLike;
  /**
   * @param {*} x
   * @param {*} y
   * @return {Boolean}
   */
  transit.equals = eq.equals;
  /**
   * @param {*} x
   * @param {{hashCode:function(),equals:function(*,*):boolean}} A
   * @return {*}
   */
  transit.extendToEQ = eq.extendToEQ;
  /**
   * @param {com.cognitect.transit.MapLike} m
   * @return {Object}
   */
  transit.mapToObject = function(m) {
    var ret = {};
    m.forEach(function(v, k) {
      if (typeof k !== "string") {
        throw Error("Cannot convert map with non-string keys");
      } else {
        ret[k] = v;
      }
    });
    return ret;
  };
  /**
   * @param {Object} obj
   * @return {com.cognitect.transit.MapLike}
   */
  transit.objectToMap = function(obj) {
    var ret = transit.map();
    for (var p in obj) {
      if (obj.hasOwnProperty(p)) {
        ret.set(p, obj[p]);
      }
    }
    return ret;
  };
  /**
   * @param {Object} opts
   * @return {com.cognitect.transit.impl.decoder.Decoder}
   */
  transit.decoder = decoder.decoder;
  /**
   * @return {com.cognitect.transit.caching.ReadCache}
   */
  transit.readCache = caching.readCache;
  /**
   * @return {com.cognitect.transit.caching.WriteCache}
   */
  transit.writeCache = caching.writeCache;
  transit.UUIDfromString = types.UUIDfromString;
  transit.randomUUID = util.randomUUID;
  transit.stringableKeys = writer.stringableKeys;
  if (TRANSIT_BROWSER_TARGET) {
    goog.exportSymbol("transit.reader", transit.reader);
    goog.exportSymbol("transit.writer", transit.writer);
    goog.exportSymbol("transit.makeBuilder", transit.makeBuilder);
    goog.exportSymbol("transit.makeWriteHandler", transit.makeWriteHandler);
    goog.exportSymbol("transit.date", types.date);
    goog.exportSymbol("transit.integer", types.intValue);
    goog.exportSymbol("transit.isInteger", types.isInteger);
    goog.exportSymbol("transit.uuid", types.uuid);
    goog.exportSymbol("transit.isUUID", types.isUUID);
    goog.exportSymbol("transit.bigInt", types.bigInteger);
    goog.exportSymbol("transit.isBigInt", types.isBigInteger);
    goog.exportSymbol("transit.bigDec", types.bigDecimalValue);
    goog.exportSymbol("transit.isBigDec", types.isBigDecimal);
    goog.exportSymbol("transit.keyword", types.keyword);
    goog.exportSymbol("transit.isKeyword", types.isKeyword);
    goog.exportSymbol("transit.symbol", types.symbol);
    goog.exportSymbol("transit.isSymbol", types.isSymbol);
    goog.exportSymbol("transit.binary", types.binary);
    goog.exportSymbol("transit.isBinary", types.isBinary);
    goog.exportSymbol("transit.uri", types.uri);
    goog.exportSymbol("transit.isURI", types.isURI);
    goog.exportSymbol("transit.map", types.map);
    goog.exportSymbol("transit.isMap", types.isMap);
    goog.exportSymbol("transit.set", types.set);
    goog.exportSymbol("transit.isSet", types.isSet);
    goog.exportSymbol("transit.list", types.list);
    goog.exportSymbol("transit.isList", types.isList);
    goog.exportSymbol("transit.quoted", types.quoted);
    goog.exportSymbol("transit.isQuoted", types.isQuoted);
    goog.exportSymbol("transit.tagged", types.taggedValue);
    goog.exportSymbol("transit.isTaggedValue", types.isTaggedValue);
    goog.exportSymbol("transit.link", types.link);
    goog.exportSymbol("transit.isLink", types.isLink);
    goog.exportSymbol("transit.hash", eq.hashCode);
    goog.exportSymbol("transit.hashMapLike", eq.hashMapLike);
    goog.exportSymbol("transit.hashArrayLike", eq.hashArrayLike);
    goog.exportSymbol("transit.equals", eq.equals);
    goog.exportSymbol("transit.extendToEQ", eq.extendToEQ);
    goog.exportSymbol("transit.mapToObject", transit.mapToObject);
    goog.exportSymbol("transit.objectToMap", transit.objectToMap);
    goog.exportSymbol("transit.decoder", decoder.decoder);
    goog.exportSymbol("transit.UUIDfromString", types.UUIDfromString);
    goog.exportSymbol("transit.randomUUID", util.randomUUID);
    goog.exportSymbol("transit.stringableKeys", writer.stringableKeys);
    goog.exportSymbol("transit.readCache", caching.readCache);
    goog.exportSymbol("transit.writeCache", caching.writeCache);
  }
  if (TRANSIT_NODE_TARGET) {
    module.exports = {reader:transit.reader, writer:transit.writer, makeBuilder:transit.makeBuilder, makeWriteHandler:transit.makeWriteHandler, date:types.date, integer:types.intValue, isInteger:types.isInteger, uuid:types.uuid, isUUID:types.isUUID, bigInt:types.bigInteger, isBigInt:types.isBigInteger, bigDec:types.bigDecimalValue, isBigDec:types.isBigDecimal, keyword:types.keyword, isKeyword:types.isKeyword, symbol:types.symbol, isSymbol:types.isSymbol, binary:types.binary, isBinary:types.isBinary, 
    uri:types.uri, isURI:types.isURI, map:types.map, isMap:types.isMap, set:types.set, isSet:types.isSet, list:types.list, isList:types.isList, quoted:types.quoted, isQuoted:types.isQuoted, tagged:types.taggedValue, isTaggedValue:types.isTaggedValue, link:types.link, isLink:types.isLink, hash:eq.hashCode, hashArrayLike:eq.hashArrayLike, hashMapLike:eq.hashMapLike, equals:eq.equals, extendToEQ:eq.extendToEQ, mapToObject:transit.mapToObject, objectToMap:transit.objectToMap, decoder:decoder.decoder, 
    UUIDfromString:types.UUIDfromString, randomUUID:util.randomUUID, stringableKeys:writer.stringableKeys, readCache:caching.readCache, writeCache:caching.writeCache};
  }
});

//# sourceMappingURL=com.cognitect.transit.js.map
