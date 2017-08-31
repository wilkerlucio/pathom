(ns com.wsscode.pathom.fulcro.network
  (:require [fulcro.client.network :as fulcro.network]
            [com.wsscode.pathom.merge :refer [merge-queries]]))

#?(:cljs
   (defn debounce [f interval]
     (let [timer (atom 0)
           calls (atom [])]
       (fn [& args]
         (js/clearTimeout @timer)
         (swap! calls conj args)
         (reset! timer (js/setTimeout #(do
                                         (f @calls)
                                         (reset! calls []))
                                      interval))))))

#?(:clj (defn debounce [f _] f))

(defn group-mergeable-requests [requests]
  "Given a list of requests [query ok-callback error-callback], reduces the number of requests to the minimum by merging
  the requests. Not all requests are mergeable, so this still might output multiple requests."
  (if (seq requests)
    (let [[[q ok err] & tail] requests
          groups [{::query q ::ok [ok] ::err [err]}]]
      (loop [left       tail
             groups     groups
             current    0
             next-cycle []]
        (if-let [[query ok err :as req] (first left)]
          (let [cur-group (get groups current)
                merged    (merge-queries (::query cur-group) query)]
            (if merged
              (recur (next left)
                     (-> groups
                         (assoc-in [current ::query] merged)
                         (update-in [current ::ok] conj ok)
                         (update-in [current ::err] conj err))
                     current
                     next-cycle)
              (recur (next left)
                     groups
                     current
                     (conj next-cycle req))))
          (if (seq next-cycle)
            (let [[[q ok err] & tail] next-cycle]
              (recur tail
                     (conj groups {::query q ::ok [ok] ::err [err]})
                     (inc current)
                     []))
            groups))))
    []))

(defn batch-send [f delay]
  "Setup a debounce to batch network requests. The callback function f will be called with a list of requests to be made
  after merging as max as possible."
  (debounce #(f (group-mergeable-requests %)) delay))

(defrecord BatchNetwork [send-fn]
  fulcro.network/NetworkBehavior
  (serialize-requests? [_] true)

  fulcro.network/FulcroNetwork
  (send [_ edn ok error] (send-fn edn ok error))
  (start [_]))

(defn batch-network
  "Wraps a network send calls with a debounce that will accumulate, merge and batch send requests in a time frame
  interval."
  ([network] (batch-network network 10))
  ([network delay]
    (let [send-fn (batch-send (fn [reqs]
                                (doseq [{::keys [query ok err]} reqs]
                                  (fulcro.network/send network query ok err)))
                              delay)]
      (map->BatchNetwork {:send-fn send-fn}))))
