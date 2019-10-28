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
(s/def ::after-node ::node-id)
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

(defn optimize-merge? [out {::keys [node-id]}]
  (let [root-next (get-in out [::nodes (::root out) ::run-next])
        node-next (get-in out [::nodes node-id ::run-next])]
    (and root-next (= root-next node-next))))

(defn add-runner [out {::keys [node-id] :as node} k]
  (let [optimize-next? (optimize-merge? out node)]
    (-> out
        (update-in [::nodes (::root out) k] conj node-id)
        (update-in [::nodes (::root out) ::provides] merge-io (get-in out [::nodes node-id ::provides]))
        (cond->
          (= k ::run-and) (update-in [::nodes (::root out) ::requires] merge-io (get-in out [::nodes node-id ::requires]))
          optimize-next? (update-in [::nodes node-id] dissoc ::run-next)))))

(defn reset-provides
  "Reset the node provides to the original resolver value. This is used when merging
  nodes with and, the accumulated provides goes into the new and node while the nodes
  have their provides reset."
  [node {:com.wsscode.pathom.connect/keys [index-resolvers]}]
  (cond-> node
    (pc-sym node)
    (assoc ::provides
      (get-in index-resolvers [(pc-sym node) :com.wsscode.pathom.connect/provides]))))

(defn add-branch-node
  [out env {::keys [node-id] :as node} or-node]
  (let [root-next      (get-in out [::nodes (::root out) ::run-next])
        optimize-next? (optimize-merge? out node)
        or-node        (cond-> or-node
                         optimize-next?
                         (assoc ::run-next root-next))
        or-node-id     (::node-id or-node)]
    (-> out
        (assoc-in [::nodes or-node-id] or-node)
        (update-in [::nodes (::root out)] assoc ::after-node or-node-id)
        (update-in [::nodes node-id] assoc ::after-node or-node-id)
        (cond-> optimize-next?
          (-> (update-in [::nodes (::root out)] dissoc ::run-next)
              (update-in [::nodes (::root out)] reset-provides env)
              (update-in [::nodes node-id] dissoc ::run-next)
              (update-in [::nodes node-id] reset-provides env)
              (update-in [::nodes root-next] assoc ::after-node or-node-id)))
        (assoc ::root or-node-id))))

(defn compute-root-branch
  [out
   {::keys [branch-type] :as env}
   {::keys [node-id] :as node}
   branch-node]
  (if node-id
    (let [root-node (get-root-node out)]
      (cond
        (not root-node)
        (assoc out ::root node-id)

        (get root-node branch-type)
        (add-runner out node branch-type)

        :else
        (add-branch-node out env node (branch-node))))
    out))

(defn compute-root-or
  [out
   {:com.wsscode.pathom.connect/keys [attribute] :as env}
   {::keys [node-id] :as node}]
  (compute-root-branch out (assoc env ::branch-type ::run-or) node
    (fn []
      {::node-id  (next-node-id env)
       ::requires {attribute {}}
       ::provides (merge-io
                    (-> out get-root-node ::provides)
                    (get-in out [::nodes node-id ::provides]))
       ::run-or   [(::root out) node-id]})))

(defn compute-root-and [out env {::keys [node-id] :as node}]
  (compute-root-branch out (assoc env ::branch-type ::run-and) node
    (fn []
      {::node-id  (next-node-id env)
       ::requires (merge-io
                    (::requires (get-root-node out))
                    (get-in out [::nodes node-id ::requires]))
       ::provides (merge-io
                    (::provides (get-root-node out))
                    (get-in out [::nodes node-id ::provides]))
       ::run-and  [(::root out) node-id]})))

(defn create-sym-node
  [{::keys                           [run-next provides]
    :com.wsscode.pathom.connect/keys [attribute sym index-resolvers]
    :as                              env}]
  (let [sym-provides (get-in index-resolvers [sym :com.wsscode.pathom.connect/provides])]
    (cond->
      {pc-sym     sym
       ::node-id  (next-node-id env)
       ::requires {attribute {}}
       ::provides (merge-io provides sym-provides)}

      run-next
      (assoc ::run-next run-next))))

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
                (update-in [::nodes node-id ::provides] merge-io (::provides next-node))
                (assoc-in [::nodes node-id ::run-next] (::root new-out))
                (assoc-in [::nodes (::root new-out) ::after-node] node-id))))
        out
        node-ids)
      out)
    out))

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
            (dissoc out ::root)
            (-> env
                (dissoc pc-attr)
                (assoc ::eql/query (into [] missing)
                  ::run-next (::root out)
                  ::provides (::provides root-node))))]
      (if (seq unreachable)
        (update previous-out ::unreachable into unreachable)
        graph))
    out))

(defn resolver-input-paths
  [out
   {::keys                           [available-data run-next]
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
                  (cond-> run-next
                          (assoc-in [::nodes run-next ::after-node] (::node-id node)))
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
   (reduce
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
     query))

  ([env]
   (compute-run-graph*
     {::nodes       {}
      ::index-syms  {}
      ::unreachable #{}} env)))

(defn compute-run-graph [{}]
  )
