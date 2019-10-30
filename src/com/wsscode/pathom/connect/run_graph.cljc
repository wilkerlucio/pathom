(ns com.wsscode.pathom.connect.run-graph
  (:require [clojure.spec.alpha :as s]
            [edn-query-language.core :as eql]))

(def pc-sym :com.wsscode.pathom.connect/sym)
(def pc-attr :com.wsscode.pathom.connect/attribute)

(defn merge-io
  ([a] a)
  ([a b]
   (com.wsscode.pathom.connect/merge-io a b)))

(declare compute-run-graph*)

(s/def ::node-id pos-int?)
(s/def ::root ::node-id)
(s/def ::last-root ::node-id)
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

(defn get-node
  [out node-id]
  (get-in out [::nodes node-id]))

(defn get-root-node [{::keys [root] :as out}]
  (get-node out root))

(defn attribute-provided?
  "Check if the given attr is provided by the out root."
  [{::keys [root] :as out} attr]
  (and root (contains? (::provides (get-root-node out)) attr)))

(defn all-attributes-provided?
  "Check if all attrs are provided at the root."
  [out attrs]
  (every? #(attribute-provided? out %) attrs))

(defn add-unreachable
  "Add attribute to unreachable list"
  [out attr]
  (update out ::unreachable conj attr))

(defn optimize-merge? [out {::keys [node-id]}]
  (let [root-next (get-in out [::nodes (::root out) ::run-next])
        node-next (get-in out [::nodes node-id ::run-next])]
    (and root-next (= root-next node-next))))

(defn reset-provides
  "Reset the node provides to the original resolver value. This is used when merging
  nodes with and, the accumulated provides goes into the new and node while the nodes
  have their provides reset."
  [node {:com.wsscode.pathom.connect/keys [index-resolvers]}]
  (cond-> node
    (pc-sym node)
    (assoc ::provides
      (get-in index-resolvers [(pc-sym node) :com.wsscode.pathom.connect/provides]))))

(defn find-dynamic-node-to-merge
  [{::keys [root] :as out}
   {::keys                           [branch-type]
    :com.wsscode.pathom.connect/keys [index-resolvers]}
   {::keys [node-id]}]
  (let [node     (get-in out [::nodes node-id])
        node-sym (pc-sym node)]
    (if (get-in index-resolvers [node-sym :com.wsscode.pathom.connect/dynamic-resolver?])
      (some #(if (= node-sym (get-in out [::nodes % pc-sym])) %) (get-in out [::nodes root branch-type])))))

(defn simplify-branch
  [{::keys [root] :as out}
   {::keys [branch-type]}]
  (let [items (get-in out [::nodes root branch-type])]
    (if (= 1 (count items))
      (-> out
          (update ::nodes dissoc root)
          (update-in [::nodes (first items)] dissoc ::after-node)
          (assoc ::root (first items)))
      out)))

(defn propagate-provides
  "This function is used to propagate back new provides after extending a node."
  [out {::keys [node-id]}]
  (loop [out     out
         node-id node-id
         visited #{}]
    (if (contains? visited node-id)
      (do
        ; TODO double check if need this detection here once unreachable is properly implemented
        (println "Cycle detected" visited node-id)
        out)
      (let [{::keys [after-node provides]} (get-in out [::nodes node-id])]
        (if after-node
          (recur
            (update-in out [::nodes after-node ::provides] merge-io (or provides {}))
            after-node
            (conj visited node-id))
          out)))))

(defn add-branch-node
  [{::keys [root] :as out}
   {::keys [branch-type] :as env}
   {::keys [node-id] :as node}]
  (let [merge-node-id (find-dynamic-node-to-merge out env node)]
    (if merge-node-id
      (let [{::keys [requires provides] :as node} (get-in out [::nodes node-id])]
        (-> out
            (update-in [::nodes merge-node-id ::requires] merge-io requires)
            (update-in [::nodes merge-node-id ::provides] merge-io provides)
            (update-in [::nodes root ::requires] merge-io requires)
            (update-in [::index-syms (pc-sym node)] disj node-id)
            (update ::nodes dissoc node-id)
            (propagate-provides {::node-id merge-node-id})
            (simplify-branch env)))
      (let [optimize-next? (optimize-merge? out node)]
        (-> out
            (update-in [::nodes root branch-type] conj node-id)
            (update-in [::nodes root ::provides] merge-io (get-in out [::nodes node-id ::provides]))
            (update-in [::nodes node-id] assoc ::after-node root)
            (cond->
              (= branch-type ::run-and)
              (-> (update-in [::nodes root ::requires] merge-io (get-in out [::nodes node-id ::requires])))

              optimize-next?
              (-> (update-in [::nodes node-id] dissoc ::run-next)
                  (update-in [::nodes node-id] reset-provides env)))
            (simplify-branch env))))))

(defn create-branch-node
  [{::keys [root] :as out} env node branch-node]
  (let [root-next      (get-in out [::nodes root ::run-next])
        optimize-next? (optimize-merge? out node)
        or-node        (cond-> branch-node
                         optimize-next?
                         (assoc ::run-next root-next))
        or-node-id     (::node-id or-node)]
    (-> out
        (assoc-in [::nodes or-node-id] or-node)
        (update-in [::nodes root] assoc ::after-node or-node-id)
        (cond-> optimize-next?
                (-> (update-in [::nodes root] dissoc ::run-next)
                    (update-in [::nodes root] reset-provides env)
                    (update-in [::nodes root-next] assoc ::after-node or-node-id)))
        (assoc ::root or-node-id)
        (add-branch-node env node))))

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
        (add-branch-node out env node)

        :else
        (create-branch-node out env node (branch-node))))
    out))

(defn compute-root-or
  [out
   {:com.wsscode.pathom.connect/keys [attribute] :as env}
   node]
  (compute-root-branch out (assoc env ::branch-type ::run-or) node
    (fn []
      {::node-id  (next-node-id env)
       ::requires {attribute {}}
       ::provides (-> out get-root-node ::provides)
       ::run-or   [(::root out)]})))

(defn compute-root-and [out env node]
  (compute-root-branch out (assoc env ::branch-type ::run-and) node
    (fn []
      (let [{::keys [requires provides]} (get-root-node out)]
        {::node-id  (next-node-id env)
         ::requires requires
         ::provides provides
         ::run-and  [(::root out)]}))))

(defn create-sym-node
  [{::keys                           [run-next provides]
    :com.wsscode.pathom.connect/keys [attribute sym index-resolvers]
    :as                              env}]
  (let [requires     {attribute {}}
        sym-provides (get-in index-resolvers [sym :com.wsscode.pathom.connect/provides]
                       requires)]
    (cond->
      {pc-sym     sym
       ::node-id  (next-node-id env)
       ::requires requires
       ::provides (merge-io provides sym-provides)}

      run-next
      (assoc ::run-next run-next))))

(def sconj (fnil conj #{}))
(def vconj (fnil conj []))

(defn extend-node-run-next [{::keys [index-syms] :as out} {::keys [run-next run-next-stack] :as env}]
  ; TODO handle graph here
  (if run-next
    (if-let [node-ids (seq (get index-syms (pc-sym env)))]
      (reduce
        (fn [out node-id]
          (if (contains? run-next-stack node-id)
            out
            (let [node      (get-in out [::nodes node-id])
                  new-out   (compute-root-and (assoc out ::root (::run-next node)) env {::node-id run-next})
                  next-node (or (get-in new-out [::nodes run-next])
                                (get-in out [::nodes run-next]))]
              (-> out
                  (assoc ::nodes (::nodes new-out))
                  (assoc ::index-syms (::index-syms new-out))
                  (assoc-in [::nodes node-id ::run-next] (::root new-out))
                  (assoc-in [::nodes (::root new-out) ::after-node] node-id)
                  (update-in [::nodes node-id ::provides] merge-io (::provides next-node))
                  (propagate-provides node)
                  (update ::extended-nodes sconj node-id)))))
        out
        node-ids)
      out)
    out))

(defn include-node [out {::keys [node-id] :as node}]
  (let [sym (pc-sym node)]
    (-> out
        (assoc-in [::nodes node-id] node)
        (cond-> sym (update-in [::index-syms sym] (fnil conj #{}) node-id)))))

(defn merge-nodes-provides [out nodes]
  (transduce
    (keep #(get-in out [::nodes % ::provides]))
    merge-io
    {}
    nodes))

(defn compute-missing [out {::keys [previous-out] :as env} missing]
  (if (seq missing)
    (let [root-node (get-root-node out)

          {::keys [unreachable extended-nodes] :as graph}
          (compute-run-graph*
            (dissoc out ::root)
            (-> env
                (dissoc pc-attr)
                (update ::run-next-stack sconj (::root out))
                (assoc ::eql/query (into [] missing)
                  ::run-next (::root out)
                  ::provides (::provides root-node))))]

      (if (or (and
                (::root graph)
                (all-attributes-provided? graph missing))
              (let [all-provides (merge-nodes-provides graph (conj extended-nodes (::last-root out)))]
                (every? #(contains? all-provides %) missing)))
        graph
        (do
          (println "UNREEACH" (pc-attr env))
         (update previous-out ::unreachable into (conj unreachable (pc-attr env))))))
    out))

(defn resolver-input-paths
  [out
   {::keys                           [available-data run-next]
    :com.wsscode.pathom.connect/keys [attribute index-resolvers]
    :as                              env}
   inputs resolvers]
  (let [missing (into #{} (remove #(contains? available-data %)) inputs)]
    (as-> out <>
      (dissoc out ::root)
      ; resolvers loop
      (reduce
        (fn [out resolver]
          (if (and (contains? (::index-syms out) resolver)
                   (not (get-in index-resolvers [resolver :com.wsscode.pathom.connect/dynamic-resolver?])))
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

(defn base-out []
  {::nodes       {}
   ::index-syms  {}
   ::unreachable #{}})

(defn compute-run-graph*
  ([{::keys [unreachable] :as out}
    {::eql/keys                       [query]
     :com.wsscode.pathom.connect/keys [index-oir]
     :as                              env}]
   (-> (reduce
         (fn [{::keys [root] :as out} attr]
           (let [env (assoc env pc-attr attr)]
             (if (contains? index-oir attr)
               (if (contains? unreachable attr)
                 out
                 (if (attribute-provided? out attr)
                   (update-in out [::nodes root ::requires] merge-io {attr {}})
                   (let [new-out
                         (as-> out <>
                           (dissoc <> ::root)
                           (assoc <> ::last-root root)
                           (reduce-kv
                             (fn [out inputs resolvers]
                               (resolver-input-paths out env inputs resolvers))
                             <>
                             (get index-oir attr)))]
                     (if (::root new-out)
                       (compute-root-and new-out env {::node-id root})
                       (assoc new-out ::root root)))))
               ; attr unreachable
               (add-unreachable out attr))))
         out
         query)
       (dissoc ::last-root)))

  ([env]
   (compute-run-graph* (base-out) env)))

(defn compute-run-graph [{}]
  )
