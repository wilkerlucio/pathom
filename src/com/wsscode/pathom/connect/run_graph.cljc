(ns com.wsscode.pathom.connect.run-graph
  (:require [clojure.spec.alpha :as s]
            [edn-query-language.core :as eql]))

(def pc-sym :com.wsscode.pathom.connect/sym)

(s/def ::node-id pos-int?)
(s/def ::root ::node-id)
(s/def ::run-next ::node-id)
(s/def ::run-and (s/coll-of ::node-id :kind vector?))
(s/def ::run-or (s/coll-of ::node-id :kind vector?))
(s/def ::nodes (s/map-of ::node-id (s/keys :req [::node-id])))
(s/def ::provides :com.wsscode.pathom.connect/io-map)
(s/def ::requires :com.wsscode.pathom.connect/io-map)
(s/def ::dead-keys (s/coll-of :com.wsscode.pathom.connect/attribute :kind set?))
(s/def ::available-data :com.wsscode.pathom.connect/io-map)
(s/def ::index-syms (s/map-of :com.wsscode.pathom.connect/sym (s/keys :req [::node-id])))

(defn next-node-id [{::keys [id-counter]}]
  (swap! id-counter inc))

(defn compute-root-or [out env node-id]
  (let [root-node (get-in out [::nodes (::root out)])]

    (cond
      (not root-node)
      (assoc out ::root node-id)

      (::run-or root-node)
      (update-in out [::nodes (::root out) ::run-or] conj node-id)

      :else
      (let [or-node-id (next-node-id env)
            or-node    {::node-id  or-node-id
                        ::requires (::requires out)
                        ::run-or   [(::root out) node-id]}]
        (-> out
            (assoc-in [::nodes or-node-id] or-node)
            (assoc ::root or-node-id))))))

(defn compute-run-graph*
  [{::keys                           [available-data index-syms]
    ::eql/keys                       [query]
    :edn-query-language.ast/keys     [node]
    :com.wsscode.pathom.connect/keys [index-oir index-resolvers]
    :as                              env}]
  (let [attr (first query)]
    (if (contains? index-oir attr)
      (reduce-kv
        (fn [out inputs resolvers]
          (let [missing inputs]
            (as-> out <>
              (reduce
                (fn [out resolver]
                  (let [node-id  (next-node-id env)
                        provides (get-in index-resolvers [resolver :com.wsscode.pathom.connect/provides])
                        node     {::node-id  node-id
                                  pc-sym     resolver
                                  ::requires {attr {}}
                                  ::provides provides}]
                    (-> out
                        (assoc-in [::nodes node-id] node)
                        (update ::provides com.wsscode.pathom.connect/merge-io provides)
                        (compute-root-or env node-id))))
                <>
                resolvers)
              #_
              (reduce
                (fn [out resolver]
                  (let [node-id  (next-node-id env)
                        provides (get-in index-resolvers [resolver :com.wsscode.pathom.connect/provides])
                        node     {::node-id  node-id
                                  pc-sym     resolver
                                  ::requires {attr {}}
                                  ::provides provides}]
                    (-> out
                        (assoc-in [::nodes node-id] node)
                        (assoc ::root node-id)
                        (update ::provides com.wsscode.pathom.connect/merge-io provides))))
                <>
                missing))))
        {::nodes    {}
         ::provides {}
         ::requires {attr {}}}
        (get index-oir attr))
      {})))

(defn compute-run-graph [{}]
  )
