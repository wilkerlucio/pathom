(ns com.wsscode.common.async
  (:refer-clojure :exclude [map mapcat filter remove distinct concat take-while drop-while complement keep reduce])
  (:require-macros [cljs.core.async.macros :refer [go alt! go-loop]]
                   [com.wsscode.common.async :refer [dochan go-catch <? <!expand]])
  (:require [goog.events :as events]
            [cljs.core.async :refer [>! <! chan put! close! alts! promise-chan] :as async]))

(defn promise->chan [promise]
  (let [c (promise-chan)]
    (.then promise #(put! c [% nil]) #(put! c [nil %]))
    c))

(def js-error? (partial instance? js/Error))

(def remove-js-errors (cljs.core/remove js-error?))

(defn throw-err [e]
  (when (js-error? e) (throw e))
  e)

(defn listen
  ([el evt] (listen el evt (chan)))
  ([el evt c]
   (events/listen el evt #(put! c %))
   c))

(defn expand-value [c]
  (let [out (chan)]
    (go (loop [v c]
          (if v
            (if (satisfies? cljs.core.async.impl.protocols/ReadPort v)
              (recur (<! v))
              (do
                (>! out v)
                (close! out)))
            (close! out))))
    out))

(defn retry
  "Call async function f, if it fails, try again n times.
  Will return the last error in case all tries fails."
  [f n]
  (go
    (loop [i n]
      (try
        (<? (f))
        (catch :default e
          (if (> i 0)
            (recur (dec i))
            e))))))

(defn timeout
  "Do an alt! between channel c and a timeout with msec milli seconds.
  In case the timeout is the taken, a timeout error will be returned."
  [c msec]
  (go
    (alt!
      c ([x] x)
      (async/timeout msec) (ex-info (str "Timeout " msec "ms") {::timeout msec}))))
