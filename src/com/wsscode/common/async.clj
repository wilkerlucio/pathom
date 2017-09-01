(ns com.wsscode.common.async
  (:refer-clojure :exclude [test]))

(defmacro dochan [[binding chan] & body]
  `(let [chan# ~chan]
     (cljs.core.async.macros/go
       (loop []
         (if-let [~binding (cljs.core.async/<! chan#)]
           (do
             ~@body
             (recur))
           :done)))))

(defmacro <? [ch]
  `(com.wsscode.common.async/throw-err (cljs.core.async/<! ~ch)))

(defmacro go-catch [& body]
  `(cljs.core.async.macros/go
     (try
       ~@body
       (catch :default e# e#))))

(defmacro <!expand [value]
  `(cljs.core.async/<! (com.wsscode.common.async/expand-value ~value)))
