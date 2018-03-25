(ns com.wsscode.common.async-clj
  (:require [clojure.core.async :as async]
            [clojure.core.async.impl.protocols :as async.prot]))

(defn chan? [c]
  (satisfies? async.prot/ReadPort c))

(defmacro if-cljs
  [then else]
  (if (:ns &env) then else))

(defmacro go-catch [& body]
  `(async/go
     (try
       ~@body
       (catch Throwable e# e#))))

(defn error? [err]
  (instance? Throwable err))

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
