(ns com.wsscode.common.async-cljs
  (:require [cljs.core.async :as async]))

(defmacro if-cljs
  [then else]
  (if (:ns &env) then else))

(defmacro go-catch [& body]
  `(async/go
     (try
       ~@body
       (catch :default e# e#))))

(defmacro <!p [promise]
  `(consumer-pair (cljs.core.async/<! (promise->chan ~promise))))

(defmacro <? [ch]
  `(throw-err (cljs.core.async/<! ~ch)))

(defmacro <?maybe [x]
  `(let [res# ~x]
     (if (chan? res#) (<? res#) res#)))

(defmacro <!maybe [x]
  `(let [res# ~x]
     (if (chan? res#) (cljs.core.async/<! res#) res#)))

(defmacro let-chan
  "Handles a possible channel on value."
  [[name value] & body]
  `(let [res# ~value]
     (if (chan? res#)
       (go-catch
         (let [~name (<? res#)]
           ~@body))
       (let [~name res#]
         ~@body))))

(defmacro let-chan*
  "Like let-chan, but async errors will be returned instead of propagated"
  [[name value] & body]
  `(let [res# ~value]
     (if (chan? res#)
       (go-catch
         (let [~name (cljs.core.async/<! res#)]
           ~@body))
       (let [~name res#]
         ~@body))))

(defmacro go-promise [& body]
  `(let [ch# (cljs.core.async/promise-chan)]
     (async/go
       (let [res# (try
                    ~@body
                    (catch :default e# e#))]
         (cljs.core.async/put! ch# res#)))
     ch#))
