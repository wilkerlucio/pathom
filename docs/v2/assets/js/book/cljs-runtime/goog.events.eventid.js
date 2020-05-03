goog.provide("goog.events.EventId");
/**
 * @final
 * @struct
 * @constructor
 * @param {string} eventId
 * @template T
 */
goog.events.EventId = function(eventId) {
  /** @const */ this.id = eventId;
};
/** @override */ goog.events.EventId.prototype.toString = function() {
  return this.id;
};

//# sourceMappingURL=goog.events.eventid.js.map
