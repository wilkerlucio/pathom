(ns com.wsscode.pathom.book.util.local-storage
  (:refer-clojure :exclude [get set!])
  (:require [cljs.reader :refer [read-string]]))

(def local-storage (.-localStorage js/window))

(defn encode-key [key]
  (pr-str key))

(defn get
  ([key] (get key nil))
  ([key default]
   (if-let [value (.getItem local-storage (encode-key key))]
     (read-string value)
     default)))

(defn set! [key value]
  (.setItem local-storage (encode-key key) (pr-str value)))

(defn remove! [key]
  (.removeItem local-storage key))

(defn update! [key f]
  (.setItem local-storage (encode-key key) (pr-str (f (get key)))))
