/**
 @suppress {strictMissingProperties}
 */
goog.provide("goog.debug.StopTraceDetail");
goog.provide("goog.debug.Trace");
goog.require("goog.array");
goog.require("goog.asserts");
goog.require("goog.debug.Logger");
goog.require("goog.iter");
goog.require("goog.log");
goog.require("goog.structs.Map");
goog.require("goog.structs.SimplePool");
/** @private @constructor */ goog.debug.Trace_ = function() {
  /** @private @type {!Array<!goog.debug.Trace_.Event_>} */ this.events_ = [];
  /** @private @type {!goog.structs.Map<number,!goog.debug.Trace_.Event_>} */ this.outstandingEvents_ = new goog.structs.Map;
  /** @private @type {number} */ this.startTime_ = 0;
  /** @private @type {number} */ this.tracerOverheadStart_ = 0;
  /** @private @type {number} */ this.tracerOverheadEnd_ = 0;
  /** @private @type {number} */ this.tracerOverheadComment_ = 0;
  /** @private @type {!goog.structs.Map} */ this.stats_ = new goog.structs.Map;
  /** @private @type {number} */ this.tracerCount_ = 0;
  /** @private @type {number} */ this.commentCount_ = 0;
  /** @private @type {number} */ this.nextId_ = 1;
  /** @private @type {!goog.structs.SimplePool} */ this.eventPool_ = new goog.structs.SimplePool(0, 4000);
  this.eventPool_.createObject = function() {
    return new goog.debug.Trace_.Event_;
  };
  /** @private @type {!goog.structs.SimplePool} */ this.statPool_ = new goog.structs.SimplePool(0, 50);
  this.statPool_.createObject = function() {
    return new goog.debug.Trace_.Stat_;
  };
  var self = this;
  /** @private @type {!goog.structs.SimplePool<number>} */ this.idPool_ = new goog.structs.SimplePool(0, 2000);
  this.idPool_.setCreateObjectFn(function() {
    return self.nextId_++;
  });
  /** @private @type {number} */ this.defaultThreshold_ = 3;
  /** @private @type {!goog.debug.Trace_.TracerCallbacks} */ this.traceCallbacks_ = {};
};
/** @private @const @type {?goog.log.Logger} */ goog.debug.Trace_.prototype.logger_ = goog.log.getLogger("goog.debug.Trace");
/** @type {number} */ goog.debug.Trace_.prototype.MAX_TRACE_SIZE = 1000;
/** @enum {number} */ goog.debug.Trace_.EventType = {START:0, STOP:1, COMMENT:2};
/** @private @constructor */ goog.debug.Trace_.Stat_ = function() {
  /** @type {number} */ this.count = 0;
  /** @type {number} */ this.time = 0;
  /** @type {number} */ this.varAlloc = 0;
};
/** @type {(string|null|undefined)} */ goog.debug.Trace_.Stat_.prototype.type;
/**
 @return {string}
 @override
 */
goog.debug.Trace_.Stat_.prototype.toString = function() {
  var sb = [];
  sb.push(this.type, " ", this.count, " (", Math.round(this.time * 10) / 10, " ms)");
  if (this.varAlloc) {
    sb.push(" [VarAlloc \x3d ", this.varAlloc, "]");
  }
  return sb.join("");
};
/** @private @constructor */ goog.debug.Trace_.Event_ = function() {
};
/** @type {(string|null|undefined)} */ goog.debug.Trace_.Event_.prototype.type;
/** @type {(goog.debug.Trace_.EventType|undefined)} */ goog.debug.Trace_.Event_.prototype.eventType;
/** @type {(number|undefined)} */ goog.debug.Trace_.Event_.prototype.id;
/** @type {(string|undefined)} */ goog.debug.Trace_.Event_.prototype.comment;
/**
 @param {number} startTime
 @param {number} prevTime
 @param {string} indent
 @return {string}
 */
goog.debug.Trace_.Event_.prototype.toTraceString = function(startTime, prevTime, indent) {
  var sb = [];
  if (prevTime == -1) {
    sb.push("    ");
  } else {
    sb.push(goog.debug.Trace_.longToPaddedString_(this.eventTime - prevTime));
  }
  sb.push(" ", goog.debug.Trace_.formatTime_(this.eventTime - startTime));
  if (this.eventType == goog.debug.Trace_.EventType.START) {
    sb.push(" Start        ");
  } else {
    if (this.eventType == goog.debug.Trace_.EventType.STOP) {
      sb.push(" Done ");
      var delta = this.stopTime - this.startTime;
      sb.push(goog.debug.Trace_.longToPaddedString_(delta), " ms ");
    } else {
      sb.push(" Comment      ");
    }
  }
  sb.push(indent, this);
  if (this.totalVarAlloc > 0) {
    sb.push("[VarAlloc ", this.totalVarAlloc, "] ");
  }
  return sb.join("");
};
/**
 @return {string}
 @override
 */
goog.debug.Trace_.Event_.prototype.toString = function() {
  if (this.type == null) {
    return goog.asserts.assert(this.comment);
  } else {
    return "[" + this.type + "] " + this.comment;
  }
};
/** @record */ goog.debug.Trace_.TracerCallbacks = function() {
  /** @type {(function(number,string)|undefined)} */ this.start;
  /** @type {(function(number,!goog.debug.StopTraceDetail)|undefined)} */ this.stop;
  /** @type {(function(string,number=)|undefined)} */ this.comment;
};
/** @private @const @type {!goog.debug.StopTraceDetail} */ goog.debug.Trace_.TRACE_CANCELLED_ = {wasCancelled:true};
/** @private @const @type {!goog.debug.StopTraceDetail} */ goog.debug.Trace_.NORMAL_STOP_ = {};
/**
 @private
 @param {(!Function|undefined)} fn1
 @param {(!Function|undefined)} fn2
 @return {(!Function|undefined)}
 */
goog.debug.Trace_.TracerCallbacks.sequence_ = function(fn1, fn2) {
  return !fn1 ? fn2 : !fn2 ? fn1 : function() {
    fn1.apply(undefined, arguments);
    fn2.apply(undefined, arguments);
  };
};
goog.debug.Trace_.prototype.removeAllListeners = function() {
  this.traceCallbacks_ = {};
};
/**
 @param {!goog.debug.Trace_.TracerCallbacks} callbacks
 */
goog.debug.Trace_.prototype.addTraceCallbacks = function(callbacks) {
  this.traceCallbacks_.start = goog.debug.Trace_.TracerCallbacks.sequence_(this.traceCallbacks_.start, callbacks.start);
  this.traceCallbacks_.stop = goog.debug.Trace_.TracerCallbacks.sequence_(this.traceCallbacks_.stop, callbacks.stop);
  this.traceCallbacks_.comment = goog.debug.Trace_.TracerCallbacks.sequence_(this.traceCallbacks_.comment, callbacks.comment);
};
/**
 @param {number} startTime
 */
goog.debug.Trace_.prototype.setStartTime = function(startTime) {
  this.startTime_ = startTime;
};
/**
 @param {number} defaultThreshold
 */
goog.debug.Trace_.prototype.initCurrentTrace = function(defaultThreshold) {
  this.reset(defaultThreshold);
};
goog.debug.Trace_.prototype.clearCurrentTrace = function() {
  this.reset(0);
};
/** @private */ goog.debug.Trace_.prototype.clearOutstandingEvents_ = function() {
  if (this.traceCallbacks_.stop) {
    goog.iter.forEach(this.outstandingEvents_, function(startEvent) {
      this.traceCallbacks_.stop(startEvent.id, goog.debug.Trace_.TRACE_CANCELLED_);
    }, this);
  }
  this.outstandingEvents_.clear();
};
/**
 @param {number} defaultThreshold
 */
goog.debug.Trace_.prototype.reset = function(defaultThreshold) {
  this.defaultThreshold_ = defaultThreshold;
  this.clearOutstandingEvents_();
  this.releaseEvents_();
  this.startTime_ = goog.debug.Trace_.now();
  this.tracerOverheadStart_ = 0;
  this.tracerOverheadEnd_ = 0;
  this.tracerOverheadComment_ = 0;
  this.tracerCount_ = 0;
  this.commentCount_ = 0;
  var keys = this.stats_.getKeys();
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    var stat = this.stats_.get(key);
    stat.count = 0;
    stat.time = 0;
    stat.varAlloc = 0;
    this.statPool_.releaseObject(/** @type {Object} */ (stat));
  }
  this.stats_.clear();
};
/** @private */ goog.debug.Trace_.prototype.releaseEvents_ = function() {
  for (var i = 0; i < this.events_.length; i++) {
    var event = this.events_[i];
    if (event.id) {
      if (!this.outstandingEvents_.containsKey(event.id)) {
        this.idPool_.releaseObject(event.id);
        this.eventPool_.releaseObject(event);
      }
    } else {
      this.eventPool_.releaseObject(event);
    }
  }
  this.events_.length = 0;
};
/**
 @param {string} comment
 @param {string=} opt_type
 @return {number}
 */
goog.debug.Trace_.prototype.startTracer = function(comment, opt_type) {
  var tracerStartTime = goog.debug.Trace_.now();
  var varAlloc = this.getTotalVarAlloc();
  var outstandingEventCount = this.outstandingEvents_.getCount();
  if (this.events_.length + outstandingEventCount > this.MAX_TRACE_SIZE) {
    if (outstandingEventCount > this.MAX_TRACE_SIZE / 2) {
      goog.log.warning(this.logger_, "Giant thread trace. Clearing outstanding events.");
      this.clearOutstandingEvents_();
    }
    if (this.events_.length > this.MAX_TRACE_SIZE / 2) {
      goog.log.warning(this.logger_, "Giant thread trace. Clearing to avoid memory leak.");
      this.releaseEvents_();
    }
  }
  goog.debug.Logger.logToProfilers("Start : " + comment);
  /** @const */ var event = /** @type {!goog.debug.Trace_.Event_} */ (this.eventPool_.getObject());
  event.stopTime = undefined;
  event.totalVarAlloc = varAlloc;
  event.eventType = goog.debug.Trace_.EventType.START;
  event.id = this.idPool_.getObject();
  event.comment = comment;
  event.type = opt_type;
  this.events_.push(event);
  this.outstandingEvents_.set(String(event.id), event);
  this.tracerCount_++;
  var now = goog.debug.Trace_.now();
  event.startTime = event.eventTime = now;
  this.tracerOverheadStart_ += now - tracerStartTime;
  if (this.traceCallbacks_.start) {
    this.traceCallbacks_.start(event.id, event.toString());
  }
  return event.id;
};
/**
 @param {(number|undefined|null)} id
 @param {number=} opt_silenceThreshold
 @return {?number}
 */
goog.debug.Trace_.prototype.stopTracer = function(id, opt_silenceThreshold) {
  var now = goog.debug.Trace_.now();
  var silenceThreshold;
  if (opt_silenceThreshold === 0) {
    silenceThreshold = 0;
  } else {
    if (opt_silenceThreshold) {
      silenceThreshold = opt_silenceThreshold;
    } else {
      silenceThreshold = this.defaultThreshold_;
    }
  }
  var startEvent = this.outstandingEvents_.get(String(id));
  if (startEvent == null) {
    return null;
  }
  goog.asserts.assertNumber(id);
  if (this.traceCallbacks_.stop) {
    this.traceCallbacks_.stop(Number(id), goog.debug.Trace_.NORMAL_STOP_);
  }
  this.outstandingEvents_.remove(String(id));
  var stopEvent;
  var elapsed = now - startEvent.startTime;
  if (elapsed < silenceThreshold) {
    var count = this.events_.length;
    for (var i = count - 1; i >= 0; i--) {
      var nextEvent = this.events_[i];
      if (nextEvent == startEvent) {
        this.events_.splice(i, 1);
        this.idPool_.releaseObject(startEvent.id);
        this.eventPool_.releaseObject(/** @type {Object} */ (startEvent));
        break;
      }
    }
  } else {
    stopEvent = /** @type {goog.debug.Trace_.Event_} */ (this.eventPool_.getObject());
    stopEvent.id = undefined;
    stopEvent.eventType = goog.debug.Trace_.EventType.STOP;
    stopEvent.startTime = startEvent.startTime;
    stopEvent.comment = startEvent.comment;
    stopEvent.type = startEvent.type;
    stopEvent.stopTime = stopEvent.eventTime = now;
    this.events_.push(stopEvent);
  }
  var type = startEvent.type;
  var stat = null;
  if (type) {
    stat = this.getStat_(type);
    stat.count++;
    stat.time += elapsed;
  }
  if (stopEvent) {
    goog.debug.Logger.logToProfilers("Stop : " + stopEvent.comment);
    stopEvent.totalVarAlloc = this.getTotalVarAlloc();
    if (stat) {
      stat.varAlloc += stopEvent.totalVarAlloc - startEvent.totalVarAlloc;
    }
  }
  var tracerFinishTime = goog.debug.Trace_.now();
  this.tracerOverheadEnd_ += tracerFinishTime - now;
  return elapsed;
};
/**
 @param {Object} gcTracer
 */
goog.debug.Trace_.prototype.setGcTracer = function(gcTracer) {
  this.gcTracer_ = gcTracer;
};
/**
 @return {number}
 */
goog.debug.Trace_.prototype.getTotalVarAlloc = function() {
  var gcTracer = this.gcTracer_;
  if (gcTracer && gcTracer["isTracing"]()) {
    return gcTracer["totalVarAlloc"];
  }
  return -1;
};
/**
 @param {string} comment
 @param {?string=} opt_type
 @param {?number=} opt_timeStamp
 */
goog.debug.Trace_.prototype.addComment = function(comment, opt_type, opt_timeStamp) {
  var now = goog.debug.Trace_.now();
  var timeStamp = opt_timeStamp ? opt_timeStamp : now;
  var eventComment = /** @type {goog.debug.Trace_.Event_} */ (this.eventPool_.getObject());
  eventComment.startTime = undefined;
  eventComment.stopTime = undefined;
  eventComment.id = undefined;
  eventComment.eventType = goog.debug.Trace_.EventType.COMMENT;
  eventComment.eventTime = timeStamp;
  eventComment.type = opt_type;
  eventComment.comment = comment;
  eventComment.totalVarAlloc = this.getTotalVarAlloc();
  this.commentCount_++;
  if (opt_timeStamp) {
    if (this.traceCallbacks_.comment) {
      this.traceCallbacks_.comment(eventComment.toString(), opt_timeStamp);
    }
    var numEvents = this.events_.length;
    for (var i = 0; i < numEvents; i++) {
      var event = this.events_[i];
      var eventTime = event.eventTime;
      if (eventTime > timeStamp) {
        goog.array.insertAt(this.events_, eventComment, i);
        break;
      }
    }
    if (i == numEvents) {
      this.events_.push(eventComment);
    }
  } else {
    if (this.traceCallbacks_.comment) {
      this.traceCallbacks_.comment(eventComment.toString());
    }
    this.events_.push(eventComment);
  }
  var type = eventComment.type;
  if (type) {
    var stat = this.getStat_(type);
    stat.count++;
  }
  this.tracerOverheadComment_ += goog.debug.Trace_.now() - now;
};
/**
 @private
 @param {string} type
 @return {goog.debug.Trace_.Stat_}
 */
goog.debug.Trace_.prototype.getStat_ = function(type) {
  var stat = this.stats_.get(type);
  if (!stat) {
    stat = /** @type {goog.debug.Trace_.Event_} */ (this.statPool_.getObject());
    stat.type = type;
    this.stats_.set(type, stat);
  }
  return (/** @type {goog.debug.Trace_.Stat_} */ (stat));
};
/**
 @return {string}
 */
goog.debug.Trace_.prototype.getFormattedTrace = function() {
  return this.toString();
};
/**
 @return {string}
 @override
 */
goog.debug.Trace_.prototype.toString = function() {
  var sb = [];
  var etime = -1;
  var indent = [];
  for (var i = 0; i < this.events_.length; i++) {
    var e = this.events_[i];
    if (e.eventType == goog.debug.Trace_.EventType.STOP) {
      indent.pop();
    }
    sb.push(" ", e.toTraceString(this.startTime_, etime, indent.join("")));
    etime = e.eventTime;
    sb.push("\n");
    if (e.eventType == goog.debug.Trace_.EventType.START) {
      indent.push("|  ");
    }
  }
  if (this.outstandingEvents_.getCount() != 0) {
    var now = goog.debug.Trace_.now();
    sb.push(" Unstopped timers:\n");
    goog.iter.forEach(this.outstandingEvents_, function(startEvent) {
      sb.push("  ", startEvent, " (", now - startEvent.startTime, " ms, started at ", goog.debug.Trace_.formatTime_(startEvent.startTime), ")\n");
    });
  }
  var statKeys = this.stats_.getKeys();
  for (var i = 0; i < statKeys.length; i++) {
    var stat = this.stats_.get(statKeys[i]);
    if (stat.count > 1) {
      sb.push(" TOTAL ", stat, "\n");
    }
  }
  sb.push("Total tracers created ", this.tracerCount_, "\n", "Total comments created ", this.commentCount_, "\n", "Overhead start: ", this.tracerOverheadStart_, " ms\n", "Overhead end: ", this.tracerOverheadEnd_, " ms\n", "Overhead comment: ", this.tracerOverheadComment_, " ms\n");
  return sb.join("");
};
/**
 @private
 @param {number} v
 @return {string}
 */
goog.debug.Trace_.longToPaddedString_ = function(v) {
  v = Math.round(v);
  var space = "";
  if (v < 1000) {
    space = " ";
  }
  if (v < 100) {
    space = "  ";
  }
  if (v < 10) {
    space = "   ";
  }
  return space + v;
};
/**
 @private
 @param {number} time
 @return {string}
 */
goog.debug.Trace_.formatTime_ = function(time) {
  time = Math.round(time);
  var sec = time / 1000 % 60;
  var ms = time % 1000;
  return String(100 + sec).substring(1, 3) + "." + String(1000 + ms).substring(1, 4);
};
/**
 @return {number}
 */
goog.debug.Trace_.now = function() {
  return goog.now();
};
/** @type {goog.debug.Trace_} */ goog.debug.Trace = new goog.debug.Trace_;
/** @record */ goog.debug.StopTraceDetail = function() {
  /** @type {(boolean|undefined)} */ this.wasCancelled;
};

//# sourceMappingURL=goog.debug.tracer.js.map
