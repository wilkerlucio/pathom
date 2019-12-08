(ns com.wsscode.pathom.connect.planner
  (:require [clojure.set :as set]
            [clojure.spec.alpha :as s]
            [com.fulcrologic.guardrails.core :refer [>def >defn >fdef => | <- ?]]
            [com.wsscode.pathom.connect.indexes :as pci]
            [com.wsscode.pathom.core :as p]
            [com.wsscode.pathom.misc :as p.misc]
            [edn-query-language.core :as eql]))

(>def ::node-id pos-int?)
(>def ::node-id-set (s/coll-of ::node-id :kind set?))
(>def ::graph (s/keys :req [::nodes]))
(>def ::available-data :com.wsscode.pathom.connect/io-map)
(>def ::after-nodes ::node-id-set)
(>def ::attr-deps-trail :com.wsscode.pathom.connect/attributes-set)
(>def ::branch-type #{::run-or ::run-and})
(>def ::node-type #{::node-resolver ::node-and ::node-or ::node-unknown})
(>def ::input :com.wsscode.pathom.connect/io-map)
(>def ::index-attrs (s/map-of :com.wsscode.pathom.connect/attribute ::node-id))
(>def ::index-syms (s/map-of :com.wsscode.pathom.connect/sym ::node-id-set))
(>def ::nodes (s/map-of ::node-id (s/keys)))
(>def ::previous-graph ::graph)
(>def ::requires :com.wsscode.pathom.connect/io-map)
(>def ::root ::node-id)
(>def ::run-and ::node-id-set)
(>def ::run-next ::node-id)
(>def ::run-next-trail (s/coll-of :com.wsscode.pathom.connect/sym :kind set?))
(>def ::run-or ::node-id-set)
(>def ::source-for-attrs :com.wsscode.pathom.connect/attributes-set)
(>def ::source-sym :com.wsscode.pathom.connect/sym)
(>def ::unreachable-attrs :com.wsscode.pathom.connect/attributes-set)
(>def ::unreachable-syms (s/coll-of :com.wsscode.pathom.connect/sym :kind set?))

(p.misc/spec-doc ::after-nodes "A node-id that points to the node before the current node. In regular execution nodes, this is the reverse of ::run-next, but in case of immediate children of branch nodes, this points to the branch node.")
(p.misc/spec-doc ::available-data "An IO-MAP style declaring which data is already available when the planner starts.")
(p.misc/spec-doc ::attr-deps-trail "A set containing attributes already in consideration when computing dependencies.")
(p.misc/spec-doc ::branch-type "A set containing attributes already in consideration when computing dependencies.")
(p.misc/spec-doc ::id-counter "An atom with a number, used to get the next node-id when creating new nodes.")
(p.misc/spec-doc ::input "An IO-MAP description of required inputs to run the node.")
(p.misc/spec-doc ::index-attrs "A index pointing from attribute to the node that provides its value.")
(p.misc/spec-doc ::index-syms "An index from resolver symbol to a set of execution nodes where its used.")
(p.misc/spec-doc ::node-id "ID for a execution node in the planner graph.")
(p.misc/spec-doc ::nodes "The nodes index.")
(p.misc/spec-doc ::node-type "Type of the nde, can be resolver, AND, OR or unknown.")
(p.misc/spec-doc ::previous-graph "Graph before modifications, this is used to restore previous graph when some path ends up being unreachable.")
(p.misc/spec-doc ::requires "An IO-MAP description of what is required from this execution node to returns.")
(p.misc/spec-doc ::root "A node-id that defines the root in the planner graph.")
(p.misc/spec-doc ::run-and "Vector containing nodes ids to run in a AND branch.")
(p.misc/spec-doc ::run-next "A node-id that points to the next node to run.")
(p.misc/spec-doc ::run-next-trail "A set containing node ids already in consideration when computing dependencies.")
(p.misc/spec-doc ::run-or "Vector containing nodes ids to run in a AND branch.")
(p.misc/spec-doc ::source-for-attrs "Set of attributes that are provided by this node.")
(p.misc/spec-doc ::source-sym "On dynamic resolvers, this points to the original source resolver in the foreign parser.")
(p.misc/spec-doc ::unreachable-attrs "A set containing the attributes that can't be reached considering current graph and available data.")
(p.misc/spec-doc ::unreachable-syms "A set containing the resolvers that can't be reached considering current graph and available data.")

(def pc-sym :com.wsscode.pathom.connect/sym)
(def pc-dyn-sym :com.wsscode.pathom.connect/dynamic-sym)
(def pc-output :com.wsscode.pathom.connect/output)
(def pc-provides :com.wsscode.pathom.connect/provides)
(def pc-attr :com.wsscode.pathom.connect/attribute)
(def pc-input :com.wsscode.pathom.connect/input)

(def ast-node :edn-query-language.ast/node)

(defn merge-io
  ([a] a)
  ([a b]
   (pci/merge-io a b)))

(declare compute-run-graph* compute-root-and collapse-nodes-chain node-ancestors)

(defn base-graph []
  {::nodes             {}
   ::index-syms        {}
   ::unreachable-syms  #{}
   ::unreachable-attrs #{}})

(defn base-env []
  {::id-counter     (atom 0)
   ::available-data {}})

(defn next-node-id
  "Return the next node ID in the system, its an incremental number"
  [{::keys [id-counter]}]
  (swap! id-counter inc))

(>defn get-node
  [graph node-id]
  [(s/keys :req [::nodes]) (? ::node-id)
   => (? (s/keys))]
  (get-in graph [::nodes node-id]))

(defn assoc-node
  "Set property k about node-id. Only assoc when node exists, otherwise its a noop."
  [graph node-id k v]
  (if (get-node graph node-id)
    (assoc-in graph [::nodes node-id k] v)
    graph))

(defn update-node
  ([graph node-id k f]
   (if (get-node graph node-id)
     (update-in graph [::nodes node-id k] f)
     graph))
  ([graph node-id k f v]
   (if (get-node graph node-id)
     (update-in graph [::nodes node-id k] f v)
     graph))
  ([graph node-id k f v v2]
   (if (get-node graph node-id)
     (update-in graph [::nodes node-id k] f v v2)
     graph))
  ([graph node-id k f v v2 v3]
   (if (get-node graph node-id)
     (update-in graph [::nodes node-id k] f v v2 v3)
     graph))
  ([graph node-id k f v v2 v3 & args]
   (if (get-node graph node-id)
     (apply update-in graph [::nodes node-id k] f v v2 v3 args)
     graph)))

(defn get-root-node
  [{::keys [root] :as graph}]
  (get-node graph root))

(>defn set-root-node
  [graph node-id]
  [(s/keys :req [::nodes]) (? ::node-id)
   => (s/keys :req [::nodes])]
  (if node-id
    (assoc graph ::root node-id)
    (dissoc graph ::root)))

(defn node-branches [node]
  (or (::run-and node)
      (::run-or node)))

(defn branch-node? [node]
  (boolean (node-branches node)))

(>defn node-kind
  "Return a keyword describing the type of the node."
  [node]
  [(? (s/keys)) => ::node-type]
  (cond
    (pc-sym node)
    ::node-resolver

    (::run-and node)
    ::node-and

    (::run-or node)
    ::node-or

    :else
    ::node-unknown))

(defn dynamic-resolver?
  [{:com.wsscode.pathom.connect/keys [index-resolvers]} sym]
  (get-in index-resolvers [sym :com.wsscode.pathom.connect/dynamic-resolver?]))

(defn add-unreachable-attr
  "Add attribute to unreachable list"
  [graph attr]
  (update graph ::unreachable-attrs conj attr))

(defn optimize-merge?
  "Check if node and graph point to same run-next."
  [graph {::keys [node-id]}]
  (let [root-next (get-in graph [::nodes (::root graph) ::run-next])
        node-next (get-in graph [::nodes node-id ::run-next])]
    (and root-next (= root-next node-next))))

(defn resolver-provides
  "Get resolver provides from environment source symbol."
  [{:com.wsscode.pathom.connect/keys [index-resolvers]
    ::keys                           [source-sym]}]
  (pci/resolver-provides (get index-resolvers source-sym)))

(defn find-branch-node-to-merge
  "Given some branch node, tries to find a node with a dynamic resolver that's the
  same sym as the node in node-id."
  [{::keys [root] :as graph}
   {::keys [branch-type]}
   {::keys [node-id]}]
  (let [node     (get-in graph [::nodes node-id])
        node-sym (pc-sym node)]
    (if node-sym
      (some #(if (= node-sym (get-in graph [::nodes % pc-sym])) %)
        (get-in graph [::nodes root branch-type])))))

(defn add-after-node [graph node-id after-node-id]
  (assert after-node-id "Tried to add after node with nil value")
  (update-node graph node-id ::after-nodes p.misc/sconj after-node-id))

(defn set-after-node [graph node-id after-node-id]
  (assert after-node-id "Tried to set after node with nil value")
  (assoc-node graph node-id ::after-nodes #{after-node-id}))

(defn remove-after-node [graph node-id after-node-id]
  (let [node         (get-node graph node-id)
        after-nodes' (disj (::after-nodes node #{}) after-node-id)]
    (if (seq after-nodes')
      (assoc-node graph node-id ::after-nodes after-nodes')
      (if node
        (update-in graph [::nodes node-id] dissoc ::after-nodes)
        graph))))

(>defn same-resolver?
  "Check if node1 and node2 have the same resolver name."
  [node1 node2]
  [(? map?) (? map?) => boolean?]
  (boolean
    (and (pc-sym node1)
         (= (pc-sym node1) (pc-sym node2)))))

(defn set-node-run-next*
  "Update the node-id run-next value, if run-next is nil the property
  will be removed from the map."
  [graph node-id run-next]
  (if run-next
    (assoc-node graph node-id ::run-next run-next)
    (update-in graph [::nodes node-id] dissoc ::run-next)))

(defn set-node-run-next
  "Set the node run next value and add the after-node counter part. Noop if target
  and run next are the same node."
  [graph target-node-id run-next]
  (let [{target-run-next ::run-next} (get-node graph target-node-id)
        graph (if target-run-next
                (remove-after-node graph target-run-next target-node-id)
                graph)]
    (cond
      (not run-next)
      (set-node-run-next* graph target-node-id run-next)

      (and run-next (not= target-node-id run-next))
      (-> graph
          (set-node-run-next* target-node-id run-next)
          (add-after-node run-next target-node-id))

      :else
      graph)))

(defn collapse-set-node-run-next
  "Like set-node-run-next, but also checks if the target and next node are the same
  resolver, if so, this fn will collapse those nodes."
  [graph target-node-id run-next]
  (let [target-node (get-node graph target-node-id)
        next-node   (get-node graph run-next)]
    (if (same-resolver? target-node next-node)
      (-> graph
          (collapse-nodes-chain target-node-id run-next))

      (set-node-run-next graph target-node-id run-next))))

(defn remove-branch-node-after-nodes
  "When node-id is a branch node, remove all after-nodes associated from its children."
  [graph node-id]
  (let [node (get-node graph node-id)]
    (if-let [branches (node-branches node)]
      (reduce
        (fn [g n-id]
          (remove-after-node g n-id node-id))
        graph
        branches)
      graph)))

(defn remove-node
  "Remove a node from the graph. In case of resolver nodes it also removes them
  from the ::index-syms and after node references."
  [graph node-id]
  (let [{::keys [run-next after-nodes] :as node} (get-node graph node-id)]
    (assert (if after-nodes
              (every? #(not= node-id (-> (get-node graph %) ::run-next))
                after-nodes)
              true)
      "Tried to remove node that still contains references pointing to it. Move
      the run-next references from the pointer nodes before removing it.")
    (-> graph
        (cond->
          (pc-sym node)
          (update-in [::index-syms (pc-sym node)] disj node-id))
        (remove-branch-node-after-nodes node-id)
        (remove-after-node run-next node-id)
        (update ::nodes dissoc node-id))))

(defn merge-node-requires
  "Merge requires from node into target-node-id."
  [graph target-node-id {::keys [requires]}]
  (if requires
    (update-in graph [::nodes target-node-id ::requires] merge-io requires)
    graph))

(defn merge-node-input
  "Merge input from node into target-node-id."
  [graph target-node-id {::keys [input]}]
  (if input
    (update-in graph [::nodes target-node-id ::input] merge-io input)
    graph))

(defn merge-nodes-run-next
  "Updates node-id run-next with the run-next of the last element. This will do an AND
  branch operation with node-id run-next and run-next, updating the reference of node-id
  run-next."
  [{::keys [root] :as graph} env target-node-id {::keys [run-next]}]
  (let [merge-into-node (get-node graph target-node-id)]
    (-> graph
        (set-root-node (::run-next merge-into-node))
        (compute-root-and env {::node-id run-next})
        (as-> <> (collapse-set-node-run-next <> target-node-id (::root <>)))
        (set-root-node root))))

(defn transfer-node-source-attrs
  "Pulls source for attributes from node to target-node-id, also updates the attributes
  index to respect the transfer."
  [graph target-node-id {::keys [source-for-attrs]}]
  (if source-for-attrs
    (-> (update-in graph [::nodes target-node-id ::source-for-attrs] (fnil into #{}) source-for-attrs)
        (as-> <>
          (reduce
            #(assoc-in % [::index-attrs %2] target-node-id)
            <>
            source-for-attrs)))
    graph))

(defn transfer-node-after-nodes
  "Set the run next for each after node to be target-node-id."
  [graph target-node-id {::keys [after-nodes]}]
  (if (seq after-nodes)
    (reduce
      #(set-node-run-next % %2 target-node-id)
      graph
      after-nodes)
    graph))

(defn collapse-nodes-branch
  [graph env target-node-id node-id]
  (if (= target-node-id node-id)
    graph
    (let [node (get-node graph node-id)]
      (-> graph
          (merge-node-requires target-node-id node)
          (merge-node-input target-node-id node)
          (merge-nodes-run-next env target-node-id node)
          (transfer-node-source-attrs target-node-id node)
          (transfer-node-after-nodes target-node-id node)
          (remove-node node-id)))))

(defn collapse-nodes-chain
  [graph target-node-id node-id]
  (if (= target-node-id node-id)
    graph
    (let [node (get-node graph node-id)]
      (-> graph
          (merge-node-requires target-node-id node)
          (set-node-run-next target-node-id (::run-next node))
          (transfer-node-after-nodes target-node-id node)
          (transfer-node-source-attrs target-node-id node)
          (remove-node node-id)))))

(defn add-branch-node
  "Given a branch node is the root, this function will add the new node as part
  of that branch node. If the node is a repeating dynamic node it will cause the new node
  to be collapsed into the already existent dynamic node."
  [{::keys [root] :as graph}
   {::keys [branch-type] :as env}
   {::keys [node-id]}]
  (let [node      (get-node graph node-id)
        root-node (get-node graph root)]
    (if-let [collapse-node-id (find-branch-node-to-merge graph env node)]
      (cond-> (collapse-nodes-branch graph env collapse-node-id node-id)
        (= branch-type ::run-and)
        (merge-node-requires root (get-node graph node-id)))
      (if (and (= branch-type ::run-and)
               (::run-and node)
               (= (::run-next node)
                  (::run-next root-node)))
        (-> (reduce
              (fn [g node-id]
                (add-branch-node g env {::node-id node-id}))
              graph
              (::run-and node))
            (remove-node node-id))
        (-> graph
            (update-in [::nodes root branch-type] p.misc/sconj node-id)
            (add-after-node node-id root)
            (cond->
              (= branch-type ::run-and)
              (merge-node-requires root node)

              (optimize-merge? graph node)
              (update-in [::nodes node-id] dissoc ::run-next)))))))

(defn create-branch-node
  [{::keys [root] :as graph} env node branch-node]
  (let [root-next      (get-in graph [::nodes root ::run-next])
        optimize-next? (optimize-merge? graph node)
        branch-node    (cond-> branch-node
                         optimize-next?
                         (assoc ::run-next root-next))
        branch-node-id (::node-id branch-node)]
    (-> graph
        (assoc-in [::nodes branch-node-id] branch-node)
        (add-after-node root branch-node-id)
        (cond-> optimize-next?
                (-> (update-in [::nodes root] dissoc ::run-next)
                    (set-after-node root-next branch-node-id)))
        (set-root-node branch-node-id)
        (add-branch-node env node))))

(defn branch-add-and-node [graph branch-node-id node-id]
  (-> (update-in graph [::nodes branch-node-id ::run-and] p.misc/sconj node-id)
      (add-after-node node-id branch-node-id)))

(defn can-merge-and-nodes? [n1 n2]
  (or (nil? (::run-next n1)) (nil? (::run-next n2))
      (= (::run-next n1) (::run-next n2))))

(defn collapse-and-nodes
  "Collapse AND node next-node into AND node target-node-id."
  [graph target-node-id node-id]
  (let [{::keys [run-and run-next] :as node} (get-node graph node-id)
        target-node (get-node graph target-node-id)]
    (assert (can-merge-and-nodes? target-node node)
      "Can't collapse AND nodes with different run-next values.")
    (if (and (::run-and target-node) run-and)
      (-> (reduce
            (fn [graph loop-node-id]
              (branch-add-and-node graph target-node-id loop-node-id))
            graph
            run-and)
          (set-node-run-next* target-node-id (or run-next (::run-next target-node)))
          (transfer-node-after-nodes target-node-id node)
          (remove-node node-id))
      graph)))

(defn compute-root-branch
  [{::keys [root] :as graph}
   {::keys [branch-type] :as env}
   {::keys [node-id]}
   branch-node-factory]
  (if node-id
    (let [root-node (get-root-node graph)
          next-node (get-node graph node-id)
          root-sym  (pc-sym root-node)
          next-sym  (pc-sym next-node)]
      (cond
        ; skip, no next node
        (not next-node)
        graph

        (not root-node)
        (set-root-node graph node-id)

        (and root-sym
             (= root-sym next-sym))
        (-> (collapse-nodes-branch graph env node-id root)
            (set-root-node node-id))

        ; merge ands
        (and (::run-and root-node)
             (::run-and next-node)
             (can-merge-and-nodes? root-node next-node))
        (collapse-and-nodes graph root node-id)

        (and (get next-node branch-type)
             root-sym)
        (add-branch-node (set-root-node graph node-id) env root-node)

        (and (get root-node branch-type)
             next-sym)
        (add-branch-node graph env next-node)

        :else
        (create-branch-node graph env next-node (branch-node-factory))))
    graph))

(defn compute-root-or
  [{::keys [root] :as graph}
   {:com.wsscode.pathom.connect/keys [attribute] :as env}
   {::keys [node-id] :as node}]
  (if (= root node-id)
    graph
    (compute-root-branch graph (assoc env ::branch-type ::run-or) node
      (fn []
        {::node-id  (next-node-id env)
         ::requires {attribute {}}
         ::run-or   #{(::root graph)}}))))

(defn compute-root-and
  [{::keys [root] :as graph} env {::keys [node-id] :as node}]
  (if (= root node-id)
    graph
    (compute-root-branch graph (assoc env ::branch-type ::run-and) node
      (fn []
        (let [{::keys [requires]} (get-root-node graph)]
          {::node-id  (next-node-id env)
           ::requires requires
           ::run-and  #{(::root graph)}})))))

(def dynamic-base-provider-sym `run-graph-base-provider)

(defn inject-index-nested-provides
  [indexes
   {:com.wsscode.pathom.connect/keys [attribute sym]
    :as                              env}]
  (let [sym-provides    (or (resolver-provides env) {attribute {}})
        nested-provides (get sym-provides attribute)]
    (-> indexes
        (assoc-in [:com.wsscode.pathom.connect/index-resolvers
                   dynamic-base-provider-sym]
          {pc-sym      dynamic-base-provider-sym
           pc-dyn-sym  sym
           pc-provides nested-provides})
        (update :com.wsscode.pathom.connect/index-oir
          (fn [oir]
            (reduce
              (fn [oir attr]
                (update-in oir [attr #{}] p.misc/sconj dynamic-base-provider-sym))
              oir
              (keys nested-provides)))))))

(>defn root-execution-node?
  "A node is a root execution is a node without any ancestors, or all ancestors
  are branch nodes."
  [graph node-id]
  [(s/keys :req [::nodes]) (? ::node-id)
   => boolean?]
  (let [ancestors (node-ancestors graph node-id)
        nodes     (mapv #(get-node graph %) (rest ancestors))]
    (zero? (count (remove branch-node? nodes)))))

(defn compute-nested-requires
  "Use AST children nodes and resolver provides data to compute the nested requirements
  for dynamic nodes."
  [{ast :edn-query-language.ast/node
    :as env}]
  (let [sub-graph      (compute-run-graph*
                         (base-graph)
                         (-> (base-env)
                             (merge (select-keys env [:com.wsscode.pathom.connect/index-resolvers
                                                      :com.wsscode.pathom.connect/index-oir]))
                             (inject-index-nested-provides env)
                             (assoc ast-node ast)))
        sym            (pc-sym env)
        root-dyn-nodes (into []
                             (comp (filter #(root-execution-node? sub-graph %))
                                   (map #(get-node sub-graph %)))
                             (get-in sub-graph [::index-syms sym]))
        nodes-inputs   (into []
                             (comp (keep ::run-next)
                                   (map #(get-node sub-graph %))
                                   (keep ::input))
                             root-dyn-nodes)
        dyn-requires   (reduce pci/merge-io (keep ::requires root-dyn-nodes))
        final-deps     (reduce pci/merge-io (pci/ast->io ast) nodes-inputs)]
    (select-keys dyn-requires (keys final-deps))))

(defn create-resolver-node
  "Create a new node representative to run a given resolver."
  [graph
   {::keys                           [run-next input source-sym]
    :com.wsscode.pathom.connect/keys [attribute sym]
    ast                              :edn-query-language.ast/node
    :as                              env}]
  (let [requires     (if (and (seq (:children ast))
                              (dynamic-resolver? env sym))
                       {attribute (compute-nested-requires env)}
                       {attribute {}})
        next-node    (get-node graph run-next)]
    (if (= sym (pc-sym next-node))
      (-> next-node
          (update ::requires merge-io requires)
          (assoc ::input input))
      (cond->
        {pc-sym     sym
         ::node-id  (next-node-id env)
         ::requires requires
         ::input    input}

        (not= sym source-sym)
        (assoc ::source-sym source-sym)))))

(defn include-node [graph env {::keys [node-id] :as node}]
  (let [sym (pc-sym node)]
    (-> graph
        (assoc-in [::nodes node-id] node)
        (cond->
          sym
          (update-in [::index-syms sym] p.misc/sconj node-id)))))

(defn collect-syms
  ([graph env node] (collect-syms graph env node #{}))
  ([graph
    env
    {::keys [node-id]} syms]
   (let [node (get-in graph [::nodes node-id])]
     (if-let [sym (pc-sym node)]
       (if (dynamic-resolver? env sym)
         syms
         (conj syms sym))
       (into syms (mapcat #(collect-syms graph env {::node-id %}) (node-branches node)))))))

(defn all-attribute-resolvers
  [{:com.wsscode.pathom.connect/keys [index-oir]}
   attr]
  (if-let [ir (get index-oir attr)]
    (into #{} cat (vals ir))
    #{}))

(defn mark-node-unreachable
  [previous-graph
   graph
   {::keys [unreachable-syms
            unreachable-attrs]}
   env]
  (let [syms (->> (collect-syms graph env (get-root-node graph))
                  (into unreachable-syms)
                  (into (::unreachable-syms previous-graph)))]
    (cond-> (assoc previous-graph
              ::unreachable-syms syms
              ::unreachable-attrs unreachable-attrs)
      (set/subset? (all-attribute-resolvers env (pc-attr env)) syms)
      (update ::unreachable-attrs conj (pc-attr env)))))

(defn node-ancestors
  "Return all ancestor nodes that are AND nodes."
  [graph node-id]
  (loop [node-queue (p.misc/queue [node-id])
         ancestors  []]
    (if-let [node-id' (peek node-queue)]
      (let [{::keys [after-nodes]} (get-node graph node-id')]
        (recur
          (into (pop node-queue) after-nodes)
          (conj ancestors node-id')))
      ancestors)))

(defn first-common-ancestor
  "Find first common AND node ancestor given a list of node ids."
  [graph nodes]
  (if (= 1 (count nodes))
    (first nodes)
    (let [ancestors     (mapv #(node-ancestors graph %) nodes)
          and-ancestors (mapv (fn [items] (filterv (comp ::run-and #(get-node graph %)) items)) ancestors)]
      (or (->> (reduce
                 (fn [node-chain new-chain]
                   (let [chain-set (set node-chain)]
                     (filter chain-set new-chain)))
                 and-ancestors)
               first)
          (->> (reduce
                 (fn [node-chain new-chain]
                   (let [chain-set (set node-chain)]
                     (filter chain-set new-chain)))
                 ancestors)
               first)))))

(defn find-missing-ancestor
  "Find the first common AND node ancestors from missing list, missing is a list
  of attributes"
  [graph missing]
  (if (= 1 (count missing))
    (get-in graph [::index-attrs (first missing)])
    (first-common-ancestor graph
      (into #{} (map #(get-in graph [::index-attrs %])) missing))))

(defn compute-missing-chain
  "Start a recursive call to process the dependencies required by the resolver. It
  sets the ::run-next data at the env, it will be used to link the nodes after they
  are created in the process."
  [graph {::keys [previous-graph] :as env} missing]
  (if (seq missing)
    (let [{::keys [index-attrs] :as graph'}
          (compute-run-graph*
            (dissoc graph ::root)
            (-> env
                (dissoc pc-attr)
                (update ::run-next-trail p.misc/sconj (::root graph))
                (update ::attr-deps-trail p.misc/sconj (pc-attr env))
                (assoc ast-node (eql/query->ast (vec missing)))))]

      (let [still-missing (remove (or index-attrs {}) missing)
            all-provided? (not (seq still-missing))]
        (if all-provided?
          (let [ancestor (find-missing-ancestor graph' missing)]
            (assert ancestor "Error finding ancestor during missing chain computation")
            (-> graph'
                (merge-nodes-run-next env ancestor {::run-next (::root graph)})))
          (let [{::keys [unreachable-syms] :as out'} (mark-node-unreachable previous-graph graph graph' env)
                unreachable-attrs (filter #(set/subset? (all-attribute-resolvers env %) unreachable-syms) still-missing)]
            (update out' ::unreachable-attrs into unreachable-attrs)))))
    graph))

(defn runner-node-sym
  "Find the runner symbol for a resolver, on normal resolvers that is the resolver symbol,
  but for foreign resolvers it uses its ::pc/dynamic-sym."
  [{:com.wsscode.pathom.connect/keys [index-resolvers]}
   sym]
  (let [resolver (get index-resolvers sym)]
    (or (pc-dyn-sym resolver)
        sym)))

(defn compute-resolver-graph
  [{::keys [unreachable-syms] :as graph}
   env
   resolver]
  (let [resolver' (runner-node-sym env resolver)]
    (cond
      (contains? unreachable-syms resolver')
      graph

      :else
      (let [env  (assoc env pc-sym resolver' ::source-sym resolver)
            node (create-resolver-node graph env)]
        (-> graph
            (include-node env node)
            (compute-root-or env node))))))

(defn compute-input-resolvers-graph
  [graph
   {::keys [available-data]
    :as    env}
   inputs resolvers]
  (let [missing (into #{} (remove #(contains? available-data %)) inputs)
        env     (assoc env ::input (into {} (map #(hash-map % {})) inputs))]
    (if (contains? inputs (pc-attr env))
      graph
      (as-> graph <>
        (dissoc <> ::root)
        ; resolvers loop
        (reduce
          (fn [graph resolver] (compute-resolver-graph graph env resolver))
          <>
          resolvers)

        (if (::root <>)
          (-> <>
              (compute-missing-chain (assoc env ::previous-graph graph) missing)
              (compute-root-or env {::node-id (::root graph)}))
          (set-root-node <> (::root graph)))))))

(defn node-for-attribute-in-chain
  "Walks the graph run next chain until it finds the node that's providing the
  attribute."
  [graph
   {:com.wsscode.pathom.connect/keys [attribute] :as env}
   root]
  (loop [node-id root]
    (let [{::keys [run-next requires run-and]} (get-node graph node-id)]
      (cond
        run-and
        (some #(node-for-attribute-in-chain graph env %)
          (cond->> run-and
            run-next
            (into [run-next])))

        (contains? requires attribute)
        node-id

        run-next
        (recur run-next)))))

(defn set-node-source-for-attrs
  [graph {:com.wsscode.pathom.connect/keys [attribute] :as env}]
  (if-let [node-id (node-for-attribute-in-chain graph env (::root graph))]
    (-> graph
        (update-in [::nodes node-id ::source-for-attrs] p.misc/sconj attribute)
        (update ::index-attrs assoc attribute node-id))
    graph))

(defn node-direct-ancestor-chain
  "Computes ancestor chain for a given node, it only walks as long as there is a single
  parent on the node, if there is a fork (multiple after-nodes) it will stop."
  [graph node-id]
  (loop [node-id' node-id
         visited  #{}
         chain    (list)]
    (if (contains? visited node-id')
      (do
        (println "Ancestors Cycle detected" visited node-id')
        chain)
      (let [{::keys [after-nodes]} (get-node graph node-id')
            next-id (first after-nodes)]
        (if (= 1 (count after-nodes))
          (recur
            next-id
            (conj visited node-id')
            (conj chain node-id'))
          (conj chain node-id'))))))

(defn find-first-ancestor
  "Traverse node after-node chain and returns the most distant resolver ancestor node id."
  [graph node-id]
  (->> (node-direct-ancestor-chain graph node-id)
       (remove (comp ::run-and #(get-node graph %)))
       first))

(defn push-root-to-ancestor [graph node-id]
  (set-root-node graph (find-first-ancestor graph node-id)))

(defn compute-attribute-graph*
  [{::keys [root index-attrs] :as graph}
   {:com.wsscode.pathom.connect/keys [index-oir attribute]
    :as                              env}]
  (cond
    (get index-attrs attribute)
    (if-let [node-id (get index-attrs attribute)]
      (-> graph
          (merge-node-requires node-id {attribute {}})
          (push-root-to-ancestor node-id)
          (compute-root-and env {::node-id root}))
      graph)

    :else
    (let [graph'
          (as-> graph <>
            (dissoc <> ::root)
            (reduce-kv
              (fn [graph inputs resolvers]
                (compute-input-resolvers-graph graph env inputs resolvers))
              <>
              (get index-oir attribute))
            (set-node-source-for-attrs <> env))]
      (if (::root graph')
        (compute-root-and graph' env {::node-id root})
        (set-root-node graph' root)))))

(defn compute-attribute-graph
  "Compute the run graph for a given attribute."
  [{::keys [unreachable-attrs] :as graph}
   {::keys                           [available-data attr-deps-trail]
    :com.wsscode.pathom.connect/keys [index-oir]
    {attr :key}                      :edn-query-language.ast/node
    :as                              env}]
  (let [env (assoc env pc-attr attr)]
    (cond
      (or (contains? available-data attr)
          (contains? unreachable-attrs attr)
          (contains? attr-deps-trail attr))
      graph

      (contains? index-oir attr)
      (compute-attribute-graph* graph env)

      :else
      (add-unreachable-attr graph attr))))

(defn compute-run-graph*
  [graph env]
  (reduce
    (fn [graph ast]
      (compute-attribute-graph graph
        (assoc env :edn-query-language.ast/node ast)))
    graph
    (remove (comp eql/ident? :key) (:children (ast-node env)))))

(>defn compute-run-graph
  "Generates a run plan for a given environment, the environment should contain the
  indexes in it (::pc/index-oir and ::pc/index-resolvers). It computes a plan to execute
  one level of an AST, the AST must be provided via the key :edn-query-language.ast/node.

       (compute-run-graph (assoc indexes :edn-query-language.ast/node ...))"
  ([graph env]
   [(? (s/keys))
    (s/keys
      :req [:edn-query-language.ast/node]
      :opt [::available-data])
    => (s/keys)]
   (-> (compute-run-graph* (merge (base-graph) graph) (merge (base-env) env))))

  ([env]
   [(s/keys
      :req [:edn-query-language.ast/node]
      :opt [::available-data])
    => (s/keys)]
   (compute-run-graph* (base-graph)
     (merge
       (base-env)
       env))))

(>defn prepare-ast
  "Prepare AST from query. This will lift placeholder nodes, convert
  query to AST and remove children keys that are already present in the current
  entity."
  [env ast]
  [(s/keys :opt [::p/entity ::p/placeholder-prefixes])
   :edn-query-language.ast/node
   => :edn-query-language.ast/node]
  (let [entity (p/entity env)]
    (-> (p/lift-placeholders-ast env ast)
        (update :children
          (fn [children]
            (into []
                  (remove #(contains? entity (:key %)))
                  children))))))
