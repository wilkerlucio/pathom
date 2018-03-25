(ns com.wsscode.common.async-cljs
  #?(:cljs (:require-macros [com.wsscode.common.async-cljs]))
  (:require [cljs.core.async :as async]
            [clojure.core.async.impl.protocols :as async.prot]))

(defn chan? [c]
  (satisfies? async.prot/ReadPort c))

(defmacro go-catch [& body]
  `(async/go
     (try
       ~@body
       (catch :default e# e#))))

#?(:cljs
   (defn promise->chan [p]
     (let [c (async/promise-chan)]
       (.then p
         #(async/put! c {:success %})
         #(async/put! c {:error %}))
       c)))

#?(:cljs
   (defn consumer-pair [resp]
     (if (contains? resp :error)
       (throw (:error resp))
       (:success resp))))

(defmacro <!p [promise]
  `(consumer-pair (async/<! (promise->chan ~promise))))

(defn error? [err]
  #?(:clj (instance? Throwable err)
     :cljs (instance? js/Error err)))

(defn throw-err [x]
  (if (error? x)
    (throw x)
    x))

(defmacro <? [ch]
  `(throw-err (async/<! ~ch)))

(defmacro <?maybe [x]
  `(let [res# ~x]
     (if (chan? res#) (<? res#) res#)))

(defmacro let-chan
  "Handles a possible channel on value."
  [[name value] & body]
  `(let [~name ~value]
     (if (chan? ~name)
       (go-catch
         (let [~name (<? ~name)]
           ~@body))
       (do ~@body))))
