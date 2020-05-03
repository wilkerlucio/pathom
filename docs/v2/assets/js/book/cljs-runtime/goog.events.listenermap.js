goog.provide("goog.events.ListenerMap");
goog.require("goog.array");
goog.require("goog.events.Listener");
goog.require("goog.object");
/**
 * @final
 * @constructor
 * @param {(EventTarget|goog.events.Listenable)} src
 */
goog.events.ListenerMap = function(src) {
  /** @type {(EventTarget|goog.events.Listenable)} */ this.src = src;
  /** @type {!Object<string,!Array<!goog.events.Listener>>} */ this.listeners = {};
  /** @private @type {number} */ this.typeCount_ = 0;
};
/**
 * @return {number}
 */
goog.events.ListenerMap.prototype.getTypeCount = function() {
  return this.typeCount_;
};
/**
 * @return {number}
 */
goog.events.ListenerMap.prototype.getListenerCount = function() {
  var count = 0;
  for (var type in this.listeners) {
    count += this.listeners[type].length;
  }
  return count;
};
/**
 * @param {(string|!goog.events.EventId)} type
 * @param {!Function} listener
 * @param {boolean} callOnce
 * @param {boolean=} opt_useCapture
 * @param {Object=} opt_listenerScope
 * @return {!goog.events.ListenableKey}
 */
goog.events.ListenerMap.prototype.add = function(type, listener, callOnce, opt_useCapture, opt_listenerScope) {
  var typeStr = type.toString();
  var listenerArray = this.listeners[typeStr];
  if (!listenerArray) {
    listenerArray = this.listeners[typeStr] = [];
    this.typeCount_++;
  }
  var listenerObj;
  var index = goog.events.ListenerMap.findListenerIndex_(listenerArray, listener, opt_useCapture, opt_listenerScope);
  if (index > -1) {
    listenerObj = listenerArray[index];
    if (!callOnce) {
      listenerObj.callOnce = false;
    }
  } else {
    listenerObj = new goog.events.Listener(listener, null, this.src, typeStr, !!opt_useCapture, opt_listenerScope);
    listenerObj.callOnce = callOnce;
    listenerArray.push(listenerObj);
  }
  return listenerObj;
};
/**
 * @param {(string|!goog.events.EventId)} type
 * @param {!Function} listener
 * @param {boolean=} opt_useCapture
 * @param {Object=} opt_listenerScope
 * @return {boolean}
 */
goog.events.ListenerMap.prototype.remove = function(type, listener, opt_useCapture, opt_listenerScope) {
  var typeStr = type.toString();
  if (!(typeStr in this.listeners)) {
    return false;
  }
  var listenerArray = this.listeners[typeStr];
  var index = goog.events.ListenerMap.findListenerIndex_(listenerArray, listener, opt_useCapture, opt_listenerScope);
  if (index > -1) {
    var listenerObj = listenerArray[index];
    listenerObj.markAsRemoved();
    goog.array.removeAt(listenerArray, index);
    if (listenerArray.length == 0) {
      delete this.listeners[typeStr];
      this.typeCount_--;
    }
    return true;
  }
  return false;
};
/**
 * @param {!goog.events.ListenableKey} listener
 * @return {boolean}
 */
goog.events.ListenerMap.prototype.removeByKey = function(listener) {
  var type = listener.type;
  if (!(type in this.listeners)) {
    return false;
  }
  var removed = goog.array.remove(this.listeners[type], listener);
  if (removed) {
    /** @type {!goog.events.Listener} */ (listener).markAsRemoved();
    if (this.listeners[type].length == 0) {
      delete this.listeners[type];
      this.typeCount_--;
    }
  }
  return removed;
};
/**
 * @param {(string|!goog.events.EventId)=} opt_type
 * @return {number}
 */
goog.events.ListenerMap.prototype.removeAll = function(opt_type) {
  var typeStr = opt_type && opt_type.toString();
  var count = 0;
  for (var type in this.listeners) {
    if (!typeStr || type == typeStr) {
      var listenerArray = this.listeners[type];
      for (var i = 0; i < listenerArray.length; i++) {
        ++count;
        listenerArray[i].markAsRemoved();
      }
      delete this.listeners[type];
      this.typeCount_--;
    }
  }
  return count;
};
/**
 * @param {(string|!goog.events.EventId)} type
 * @param {boolean} capture
 * @return {!Array<!goog.events.ListenableKey>}
 */
goog.events.ListenerMap.prototype.getListeners = function(type, capture) {
  var listenerArray = this.listeners[type.toString()];
  var rv = [];
  if (listenerArray) {
    for (var i = 0; i < listenerArray.length; ++i) {
      var listenerObj = listenerArray[i];
      if (listenerObj.capture == capture) {
        rv.push(listenerObj);
      }
    }
  }
  return rv;
};
/**
 * @param {(string|!goog.events.EventId)} type
 * @param {!Function} listener
 * @param {boolean} capture
 * @param {Object=} opt_listenerScope
 * @return {goog.events.ListenableKey}
 */
goog.events.ListenerMap.prototype.getListener = function(type, listener, capture, opt_listenerScope) {
  var listenerArray = this.listeners[type.toString()];
  var i = -1;
  if (listenerArray) {
    i = goog.events.ListenerMap.findListenerIndex_(listenerArray, listener, capture, opt_listenerScope);
  }
  return i > -1 ? listenerArray[i] : null;
};
/**
 * @param {(string|!goog.events.EventId)=} opt_type
 * @param {boolean=} opt_capture
 * @return {boolean}
 */
goog.events.ListenerMap.prototype.hasListener = function(opt_type, opt_capture) {
  var hasType = opt_type !== undefined;
  var typeStr = hasType ? opt_type.toString() : "";
  var hasCapture = opt_capture !== undefined;
  return goog.object.some(this.listeners, function(listenerArray, type) {
    for (var i = 0; i < listenerArray.length; ++i) {
      if ((!hasType || listenerArray[i].type == typeStr) && (!hasCapture || listenerArray[i].capture == opt_capture)) {
        return true;
      }
    }
    return false;
  });
};
/**
 * @private
 * @param {!Array<!goog.events.Listener>} listenerArray
 * @param {!Function} listener
 * @param {boolean=} opt_useCapture
 * @param {Object=} opt_listenerScope
 * @return {number}
 */
goog.events.ListenerMap.findListenerIndex_ = function(listenerArray, listener, opt_useCapture, opt_listenerScope) {
  for (var i = 0; i < listenerArray.length; ++i) {
    var listenerObj = listenerArray[i];
    if (!listenerObj.removed && listenerObj.listener == listener && listenerObj.capture == !!opt_useCapture && listenerObj.handler == opt_listenerScope) {
      return i;
    }
  }
  return -1;
};

//# sourceMappingURL=goog.events.listenermap.js.map
