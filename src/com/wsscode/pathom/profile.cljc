(ns com.wsscode.pathom.profile
  (:require [com.wsscode.pathom.core :as p]))

(defn- append-at [cur v]
  (cond
    (map? cur)
    (assoc cur ::self v)

    :else
    v))

(defn flame-wrap [f]
  "Wraps an Om.next reader and measure the time on each recursive call. You must send a ::flame-history key, which
  should be an atom with a blank map, this will be filled during the parsing."
  (fn [{::keys [flame-history]
        :as    env} k p]
    (let [{::p/keys [path]} (p/normalize-env env)
          start-time (System/currentTimeMillis)
          res        (f env k p)]
      (if flame-history
        (swap! flame-history update-in path append-at
               (- (System/currentTimeMillis) start-time)))
      res)))

(defn fname [x]
  (cond
    (vector? x) (clojure.string/join "_" (map fname x))
    :else (str x)))

(defn fvalue [x]
  (if (map? x)
    (or (::self x) (apply + (map fvalue (vals x))))
    x))

(defn ->flame* [m]
  (->> m
       (into [] (comp (remove #(= ::self (first %)))
                      (map (fn [[k v]]
                             (cond-> {:name (fname k) :value (fvalue v)}
                               (map? v) (assoc :children (->flame* v))))
                           )))))

(defn ->flame [data]
  "Convert data into format digestible by most flamegraph apis."
  (let [total (apply + (map fvalue (vals data)))]
    {:name     "Root"
     :value    total
     :children (->flame* data)}))
