(ns com.wsscode.pathom.profile
  #?(:cljs (:require-macros [cljs.core.async.macros :refer [go]]))
  (:require #?(:clj [clojure.core.async :refer [<! go chan put! thread]])
    #?(:cljs [cljs.core.async :refer [<! chan put!]])
                    [com.wsscode.pathom.core :as p]
                    [com.wsscode.pathom.async :as pa]))

(declare profile->flame-graph)

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
   (fn [parser]
     (fn [env tx]
       (parser (assoc env ::profile* (atom {})) tx)))

   ::p/wrap-read
   (fn [reader]
     (fn [{::keys [profile*] ::p/keys [path] :as env}]
       (if (= ::profile (p/key-dispatch env))
         (profile->flame-graph @profile*)
         (let [start-time (current-time-ms)
               res        (reader env)]
           (swap! profile* update-in path append-at
                  (- (current-time-ms) start-time))
           res))))})

(defn process-pending? [m]
  (if (map? m)
    (->> m
         (filter (fn [[k v]] (and (not= k ::self) (= ::processing v))))
         first)))

#?(:clj
   (defn sleep [ms]
     (go
       (Thread/sleep ms)
       ::done))

   :cljs
   (defn sleep [ms]
     (let [c (chan)]
       (js/setTimeout #(put! c ::done) ms)
       c)))

(defn async-wrap-profile [f]
  (fn [{::keys [profile]
        :as    env} k p]
    (let [{::p/keys [path]} (p/normalize-env env)
          start-time (current-time-ms)
          res        (f env k p)]
      (if profile
        (if (pa/chan? (:value res))
          (do
            (swap! profile update-in path append-at ::processing)
            (go
              (let [v (<! (:value res))]
                (while (process-pending? (get-in @profile path))
                  (<! (sleep 1)))
                (swap! profile update-in path append-at
                       (- (current-time-ms) start-time))
                (assoc res :value v))))
          (do
            (swap! profile update-in path append-at
                   (- (current-time-ms) start-time))
            res))
        res))))

;; Flame graph conversion

(defn fg-name [x]
  (cond
    (vector? x) (clojure.string/join "_" (map fg-name x))
    :else (str x)))

(defn fg-value [x]
  (if (map? x)
    (or (::self x) (apply + (map fg-value (vals x))))
    x))

(defn profile->flame-graph* [m]
  (->> m
       (into [] (comp (remove #(= ::self (first %)))
                      (map (fn [[k v]]
                             (cond-> {:name (fg-name k) :value (fg-value v)}
                               (map? v) (assoc :children (profile->flame-graph* v)))))))))

(defn profile->flame-graph [data]
  "Convert data into format digestible by most flamegraph apis."
  (let [total (apply + (map fg-value (vals data)))]
    {:name     "Root"
     :value    total
     :children (profile->flame-graph* data)}))
