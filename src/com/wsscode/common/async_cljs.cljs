(ns com.wsscode.common.async-cljs
  (:require-macros [com.wsscode.common.async-cljs :refer [go-catch <?]])
  (:require [cljs.core.async :as async]
            [cljs.core.async.impl.protocols :as async.prot]))

(defn chan? [c]
  (satisfies? async.prot/ReadPort c))

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
