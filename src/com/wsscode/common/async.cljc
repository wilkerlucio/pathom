(ns com.wsscode.common.async
  #?(:cljs (require-macros [com.wsscode.common.async]))
  (:require [clojure.core.async :as async]))

(defmacro go-catch [& body]
  `(async/go
     (try
       ~@body
       (catch #?(:clj Throwable :cljs :default) e# e#))))

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
