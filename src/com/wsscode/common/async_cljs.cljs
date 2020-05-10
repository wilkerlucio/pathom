(ns com.wsscode.common.async-cljs
  "DEPRECATED: please use com.wsscode.async.async-cljs instead"
  (:require-macros
    [com.wsscode.common.async-cljs])
  (:require
    [cljs.core.async :as async]
    [cljs.core.async.impl.protocols :as async.prot]
    [goog.object :as gobj]))

(defn chan? [c]
  (satisfies? async.prot/ReadPort c))

(defn promise? [x]
  (try
    (fn? (gobj/get x "then"))
    (catch :default _ false)))

(defn promise->chan [p]
  (let [c (async/promise-chan)]
    (.then p
           #(async/put! c {:success %})
           #(async/put! c {:error %}))
    c))

(defn consumer-pair [resp]
  (if (contains? resp :error)
    (throw (:error resp))
    (:success resp)))

(defn error? [err]
  (instance? js/Error err))

(defn throw-err [x]
  (if (error? x)
    (throw x)
    x))
