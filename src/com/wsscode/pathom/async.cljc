(ns com.wsscode.pathom.async
  #?(:cljs (:require-macros [cljs.core.async.macros :refer [go go-loop]]))
  (:require [com.wsscode.pathom.core :as p]
    #?(:clj
            [clojure.core.async :as async :refer [<! >! put! close! go go-loop]])
    #?(:cljs [cljs.core.async :as async :refer [<! >! put! close!]])
    #?(:cljs [goog.object :as gobj])
            [clojure.core.async.impl.protocols :refer [Channel]]))

(defn chan? [v] (satisfies? Channel v))

(defn resolved-chan [v]
  (let [c (async/promise-chan)]
    (put! c v)
    c))

(defn read-chan-values [m]
  (if (first (filter #(or (chan? %)
                          (chan? (:result %))) (vals m)))
    (let [c  (async/promise-chan)
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
                                (let [in  (if (chan? in) (<! in) in)
                                      out (f in)]
                                  (>! c (if (chan? out) (<! out) out)))
                                (close! c)))
                            (async/to-chan s))
      (<! (async/into [] out)))))

;; Async plugin

(defn wrap-read-async [reader]
  (fn wrap-read-async-internal [env]
    (let [value (reader env)]
      (cond
        (sequential? value) (read-chan-seq read-chan-values value)
        (map? value) (read-chan-values value)
        :else value))))

(defn wrap-parser-async [parser]
  (fn wrap-parser-async-internal [env tx]
    (-> (parser env tx)
        (read-chan-values))))

(def async-plugin
  {::p/wrap-read   wrap-read-async
   ::p/wrap-parser wrap-parser-async})

;; BUILT-IN READERS

#?(:cljs
   (defn js-obj-reader [{:keys    [query ast]
                         ::p/keys [js-key-transform js-value-transform entity-key]
                         :as      env
                         :or      {js-key-transform   name
                                   js-value-transform (fn [_ v] v)}}]
     (let [js-key (js-key-transform (:key ast))
           entity (p/entity env)]
       (if (gobj/containsKey entity js-key)
         (let [v (gobj/get entity js-key)]
           (if (js/Array.isArray v)
             (read-chan-seq read-chan-values (p/join-seq env v))
             (if (and query (= (type v) js/Object))
               (read-chan-values (p/join (assoc env entity-key v)))
               (js-value-transform (:key ast) v))))
         ::p/continue))))

;; ALL CODE BELOW THIS COMMENT IS DEPRECATED, USE ASYNC PLUGIN INSTEAD

(defn wrap-reader
  "DEPRECATED: use async-plugin"
  [reader]
  (fn [env]
    (let [v (reader env)]
      (cond
        (map? v)
        (read-chan-values v)

        :else
        v))))

(defn placeholder-node
  "DEPRECATED: use async-plugin
  Produces a reader that will respond to any keyword with the namespace ns. The join node logical level stays the same
  as the parent where the placeholder node is requested."
  [ns]
  (fn [{:keys [ast] :as env}]
    (if (= ns (namespace (:dispatch-key ast)))
      (read-chan-values (p/join env))
      ::p/continue)))

(defn map-reader
  "DEPRECATED: use async-plugin"
  [{:keys    [ast query]
    ::p/keys [entity-key]
    :as      env}]
  (let [entity (p/entity env)]
    (if-let [[_ v] (find entity (:key ast))]
      (if (sequential? v)
        (read-chan-seq read-chan-values (p/join-seq env v))
        (if (and (map? v) query)
          (read-chan-values (p/join (assoc env entity-key v)))
          v))
      ::p/continue)))

;; PARSER READER

(defn parser-error
  "DEPRECATED: use async-plugin"
  [env err]
  (ex-info (str "Parser Error: " (.-message err)) {:path (pr-str (::p/path env))}))

(defn error? [e]
  #?(:clj  (instance? Throwable e)
     :cljs (instance? js/Error e)))

(defn async-pathom-read
  "DEPRECATED: user async-plugin"
  [{::p/keys [reader process-reader] :as env} _ _]
  {:value
   (let [env (p/normalize-env env)]
     (try
       (let [value (p/read-from env (if process-reader (process-reader reader) reader))]
         (if (chan? value)
           (go
             (let [v (<! value)]
               (if (error? v)
                 (parser-error env v)
                 v)))
           value))
       (catch #?(:clj Error :cljs :default) e
         (parser-error env e))))})
