(ns com.wsscode.pathom.profile
  (:require
    [clojure.string :as str]
    [clojure.core.async :refer [<! go chan put!]]
    [#?(:clj  com.wsscode.common.async-clj
        :cljs com.wsscode.common.async-cljs) :refer [let-chan]]
    [com.wsscode.pathom.core :as p]))

(defn- append-at [cur v]
  (cond
    (map? cur)
    (assoc cur ::self v)

    :else
    v))

(defn current-time-ms []
  #?(:clj  (System/currentTimeMillis)
     :cljs (.getTime (js/Date.))))

(def profile-plugin
  {::p/wrap-parser
   (fn profile-plugin-wrap-parser [parser]
     (fn profile-plugin-wrap-parser-internal [env tx]
       (parser (assoc env ::profile* (atom {})) tx)))

   ::p/wrap-read
   (fn profile-plugin-wrap-read [reader]
     (fn profile-plugin-wrap-read-internal
       [{::keys [profile*] ::p/keys [path] :as env}]
       (if (= ::profile (p/key-dispatch env))
         @profile*
         (let [start-time (current-time-ms)]
           (let-chan [res (reader env)]
             (try
               (swap! profile* update-in path append-at
                 (- (current-time-ms) start-time))
               (catch #?(:clj Throwable :cljs :default) _))
             res)))))

   ::p/wrap-mutate
   (fn profile-plugin-wrap-mutate [mutate]
     (fn profile-plugin-wrap-mutate-internal
       [{::keys [profile*] :as env} k params]
       (let [out (mutate env k params)]
         (cond-> out
           (:action out)
           (update :action
             (fn [action]
               (fn []
                 (let [start-time (current-time-ms)
                       res        (action)]
                   (swap! profile* assoc k (- (current-time-ms) start-time))
                   res))))))))})

;; Helper computing functions

(defn node-name [x]
  (cond
    (vector? x) (str/join "_" (map node-name x))
    :else (str x)))

(defn node-value [x]
  (if (map? x)
    (or (::self x) (apply + (map node-value (vals x))))
    x))

;; Flame graph conversion

(defn profile->nvc* [m]
  (->> m
       (into [] (comp (remove #(= ::self (first %)))
                      (map (fn [[k v]]
                             (cond-> {:name (node-name k) :value (node-value v)}
                               (map? v) (assoc :children (profile->nvc* v)))))))))

(defn profile->nvc
  "Convert data into format of maps containg the keys:
    name: the current attribute name
    value: the total time spent on the node + children
    children: the children elements (recursive)

   This for is suitable for some d3 flamegraph plugins on the browser"
  [data]
  (let [total (apply + (map node-value (vals data)))]
    {:name     "Root"
     :value    total
     :children (profile->nvc* data)}))

;; DEPRECATED

; old name, kept for compatibility
(def profile->flame-graph profile->nvc)
