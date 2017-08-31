(ns com.wsscode.pathom.fulcro.network
  (:require [fulcro.client.network :as fulcro.network]
            [com.wsscode.pathom.merge :refer [merge-queries]]))

(defn debounce [f interval]
  (let [timer (atom 0)
        calls (atom [])]
    (fn [& args]
      (js/clearTimeout @timer)
      (swap! calls conj args)
      (reset! timer (js/setTimeout #(do
                                      (f @calls)
                                      (reset! calls []))
                                   interval)))))

(defn group-mergeable-requests [requests]
  (loop [[head & tail] requests]
    ))

(defn batch-send* [callback requests]
  (let [edn (->> requests (map first) (reduce merge-queries))]
    (callback [[edn
                #(doseq [[_ ok _] requests] (ok %))
                #(doseq [[_ _ err] requests] (err %))]])))

(defn batch-send
  ([f] (batch-send f 10))
  ([f delay] (debounce (partial batch-send* f) delay)))

(defrecord BatchNetwork [send-fn]
  fulcro.network/NetworkBehavior
  (serialize-requests? [_] true)

  fulcro.network/FulcroNetwork
  (send [_ edn ok error] (send-fn edn ok error))
  (start [_]))

(defn batch-network [network]
  (let [send-fn (batch-send (fn [reqs]
                              (doseq [[edn ok error] reqs]
                                (fulcro.network/send network edn ok error))))]
    (map->BatchNetwork {:send-fn send-fn})))
