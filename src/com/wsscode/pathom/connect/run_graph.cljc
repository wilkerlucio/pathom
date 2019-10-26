(ns com.wsscode.pathom.connect.run-graph
  (:require [clojure.spec.alpha :as s]
            [edn-query-language.core :as eql]))

(def pc-sym :com.wsscode.pathom.connect/sym)
(def pc-attr :com.wsscode.pathom.connect/attribute)

(defn merge-io [a b]
  (com.wsscode.pathom.connect/merge-io a b))

(declare compute-run-graph*)

(s/def ::node-id pos-int?)
(s/def ::root ::node-id)
(s/def ::run-next ::node-id)
(s/def ::run-and (s/coll-of ::node-id :kind vector?))
(s/def ::run-or (s/coll-of ::node-id :kind vector?))
(s/def ::nodes (s/map-of ::node-id (s/keys :req [::node-id])))
(s/def ::provides :com.wsscode.pathom.connect/io-map)
(s/def ::requires :com.wsscode.pathom.connect/io-map)
(s/def ::unreachable (s/coll-of :com.wsscode.pathom.connect/attribute :kind set?))
(s/def ::available-data :com.wsscode.pathom.connect/io-map)
(s/def ::index-syms (s/map-of :com.wsscode.pathom.connect/sym (s/keys :req [::node-id])))

(defn next-node-id [{::keys [id-counter]}]
  (swap! id-counter inc))

(defn get-node [out node-id]
  (get-in out [::nodes node-id]))

(defn get-root-node [{::keys [root] :as out}]
  (get-node out root))

(defn compute-root-or [out env {::keys [node-id]}]
  (if node-id
    (let [root-node (get-root-node out)]
      (cond
        (not root-node)
        (assoc out ::root node-id)

        (::run-or root-node)
        (let [root-next      (get-in out [::nodes (::root out) ::run-next])
              node-next      (get-in out [::nodes node-id ::run-next])
              optimize-next? (and root-next (= root-next node-next))]
          (-> out
              (update-in [::nodes (::root out) ::run-or] conj node-id)
              (cond-> optimize-next? (update-in [::nodes node-id] dissoc ::run-next))))

        :else
        (let [root-next      (get-in out [::nodes (::root out) ::run-next])
              node-next      (get-in out [::nodes node-id ::run-next])
              optimize-next? (and root-next (= root-next node-next))
              or-node-id     (next-node-id env)
              or-node        (cond-> {::node-id  or-node-id
                                      ::requires (::requires (get-root-node out))
                                      ::run-or   [(::root out) node-id]}
                               optimize-next?
                               (assoc ::run-next root-next))]
          (-> out
              (assoc-in [::nodes or-node-id] or-node)
              (cond-> optimize-next? (update-in [::nodes (::root out)] dissoc ::run-next))
              (cond-> optimize-next? (update-in [::nodes node-id] dissoc ::run-next))
              (assoc ::root or-node-id)))))
    out))

(defn compute-root-and [out env {::keys [node-id]}]
  (if node-id
    (let [root-node (get-in out [::nodes (::root out)])]
      (cond
        (not root-node)
        (assoc out ::root node-id)

        (::run-and root-node)
        (let [root-next      (get-in out [::nodes (::root out) ::run-next])
              node-next      (get-in out [::nodes node-id ::run-next])
              optimize-next? (and root-next (= root-next node-next))]
          (-> out
              (update-in [::nodes (::root out) ::run-and] conj node-id)
              (cond-> optimize-next? (update-in [::nodes node-id] dissoc ::run-next))))

        :else
        (let [root-next      (get-in out [::nodes (::root out) ::run-next])
              node-next      (get-in out [::nodes node-id ::run-next])
              optimize-next? (and root-next (= root-next node-next))
              or-node-id     (next-node-id env)
              or-node        (cond-> {::node-id  or-node-id
                                      ::requires (merge-io
                                                   (::requires (get-root-node out))
                                                   (get-in out [::nodes node-id ::requires]))
                                      ::run-and  [(::root out) node-id]}
                               optimize-next?
                               (assoc ::run-next root-next))]
          (-> out
              (assoc-in [::nodes or-node-id] or-node)
              (cond-> optimize-next? (update-in [::nodes (::root out)] dissoc ::run-next))
              (cond-> optimize-next? (update-in [::nodes node-id] dissoc ::run-next))
              (assoc ::root or-node-id)))))
    out))

(defn create-sym-node
  [{::keys                           [run-next provides requires]
    :com.wsscode.pathom.connect/keys [attribute sym index-resolvers]
    :as                              env}]
  (let [sym-provides (get-in index-resolvers [sym :com.wsscode.pathom.connect/provides])
        node         (cond->
                       {pc-sym     sym
                        ::node-id  (next-node-id env)
                        ::requires (merge-io requires {attribute {}})
                        ::provides (merge-io provides sym-provides)}

                       run-next
                       (assoc ::run-next run-next))]
    node))

(defn extend-node-run-next [{::keys [index-syms] :as out} {::keys [run-next] :as env}]
  ; TODO handle graph here
  (if run-next
    (if-let [node-ids (seq (get index-syms (pc-sym env)))]
      (reduce
        (fn [out node-id]
          (let [node      (get-in out [::nodes node-id])
                new-out   (compute-root-and (assoc out ::root (::run-next node)) env {::node-id run-next})
                next-node (get-in new-out [::nodes run-next])]
            (-> out
                (update ::nodes merge (::nodes new-out))
                (update-in [::nodes node-id ::requires] merge-io (::requires next-node))
                (update-in [::nodes node-id ::provides] merge-io (::provides next-node))
                (assoc-in [::nodes node-id ::run-next] (::root new-out)))))
        out
        node-ids)
      out)
    out))

(defn merge-dep-chain [out {::keys [root nodes unreachable index-syms]}]
  (-> out
      (update ::nodes merge nodes)
      (update ::unreachable into unreachable)
      (update ::index-syms #(merge-with into index-syms %))
      (assoc ::root root)))

(defn include-node [out {::keys [node-id] :as node}]
  (let [sym (pc-sym node)]
    (-> out
        (assoc-in [::nodes node-id] node)
        (cond-> sym (update-in [::index-syms sym] (fnil conj #{}) node-id)))))

(defn compute-missing [out {::keys [previous-out] :as env} missing]
  (if (seq missing)
    (let [root-node (get-root-node out)

          {::keys [unreachable] :as graph}
          (compute-run-graph*
            (select-keys out [::index-syms ::nodes ::unreachable])
            (assoc env ::eql/query missing
              ::run-next (::root out)
              ::provides (::provides root-node)
              ::requires (::requires root-node)))]
      (if (seq unreachable)
        (update previous-out ::unreachable into unreachable)
        (merge-dep-chain out graph)))
    out))

(defn make-root-node [out {::keys [node-id]}]
  (assoc out ::root node-id))

(defn make-or-root [{::keys [root] :as out} env]
  (let [or-node {::node-id (next-node-id env)
                 ::run-or  [root]}]
    (-> out
        (include-node or-node)
        (make-root-node or-node))))

(defn resolver-input-paths
  [out
   {::keys                           [available-data]
    :com.wsscode.pathom.connect/keys [attribute]
    :as                              env}
   inputs resolvers]
  (let [missing (into #{} (remove #(contains? available-data %)) inputs)]
    (as-> out <>
      (dissoc out ::root)
      ; resolvers loop
      (reduce
        (fn [out resolver]
          (if (contains? (::index-syms out) resolver)
            (extend-node-run-next out (assoc env pc-sym resolver pc-attr attribute))
            (let [node (create-sym-node (assoc env pc-sym resolver pc-attr attribute))]
              (-> out
                  (include-node node)
                  (compute-root-or env node)))))
        <>
        resolvers)

      (if (::root <>)
        (-> <>
            (compute-missing (assoc env ::previous-out out) missing)
            (compute-root-or env {::node-id (::root out)}))
        <>))))

(defn compute-run-graph*
  ([out
    {::eql/keys                       [query]
     :com.wsscode.pathom.connect/keys [index-oir]
     :as                              env}]
   (-> (reduce
         (fn [{::keys [root] :as out} attr]
           (let [env (assoc env pc-attr attr)]
             (if (contains? index-oir attr)
               ; inputs loop
               (if (and root (contains? (::provides (get-root-node out)) attr))
                 (update-in out [::nodes root ::requires] merge-io {attr {}})
                 (let [new-node (as-> (dissoc out ::root) <>
                                  (reduce-kv
                                    (fn [out inputs resolvers]
                                      (resolver-input-paths out env inputs resolvers))
                                    <>
                                    (get index-oir attr)))]
                   (if (::root new-node)
                     (compute-root-and new-node env {::node-id root})
                     (assoc new-node ::root root))))
               ; attr unreachable
               (update out ::unreachable conj attr))))
         out
         query)
       (dissoc ::new-entry?)))

  ([env]
   (compute-run-graph*
     {::nodes       {}
      ::index-syms  {}
      ::unreachable #{}} env)))

(defn compute-run-graph [{}]
  )
