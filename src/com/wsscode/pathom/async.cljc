(ns com.wsscode.pathom.async
  #?(:cljs (:require-macros [cljs.core.async.macros :refer [go go-loop]]))
  (:require [com.wsscode.pathom.core :as p]
            #?(:clj [clojure.core.async :as async :refer [<! >! put! close! go go-loop]])
            #?(:cljs [cljs.core.async :as async :refer [<! >! put! close!]])
            [clojure.core.async.impl.protocols :refer [Channel]]))

(defn chan? [v] (satisfies? Channel v))

(defn resolved-chan [v]
  (let [c (async/promise-chan)]
    (put! c v)
    c))

(defn read-chan-values [m]
  (if (first (filter #(or (chan? %)
                          (chan? (:result %))) (vals m)))
    (let [c (async/promise-chan)
          in (async/to-chan m)]
      (go-loop [out {}]
               (if-let [[k v] (<! in)]
                 (let [value (cond
                               (chan? v) (<! v)
                               (chan? (:result v)) (assoc v :result (<! (:result v)))
                               :else v)]
                   (recur (assoc out k value)))
                 (>! c out)))
      c)
    (resolved-chan m)))

(defn read-chan-seq [f s]
  (go
    (let [out (async/chan 64)]
      (async/pipeline-async 10 out
                            (fn [in c]
                              (go
                                (let [in (if (chan? in) (<! in) in)
                                      out (f in)]
                                  (>! c (if (chan? out) (<! out) out)))
                                (close! c)))
                            (async/to-chan s))
      (<! (async/into [] out)))))

;; PARSER READER

(defn parser-error [env err]
  err
  (ex-info (str "Parser: " (.-message err)) {:path (pr-str (::p/path env))}))

(defn error? [e]
  #?(:clj (instance? Throwable e)
     :cljs (instance? js/Error e)))

(defn async-pathom-read [{::p/keys [reader] :as env} _ _]
  {:value
   (let [env (p/normalize-env env)]
     (try
       (let [value (p/read-from env reader)]
         (if (chan? value)
           (go
             (let [v (<! value)]
               (if (error? v)
                 (parser-error env v)
                 v)))
           value))
       (catch #?(:clj Error :cljs :default) e
         (parser-error env e))))})
