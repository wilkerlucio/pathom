(ns com.wsscode.pathom.connect.indexes
  (:require [com.fulcrologic.guardrails.core :refer [>def >defn >fdef => | <- ?]]
            [com.wsscode.pathom.core :as p]
            [clojure.spec.alpha :as s]))

(>def :com.wsscode.pathom.connect/sym symbol?)
(>def :com.wsscode.pathom.connect/attribute (s/or :attribute ::p/attribute :set :com.wsscode.pathom.connect/attributes-set))
(>def :com.wsscode.pathom.connect/attributes-set (s/coll-of ::p/attribute :kind set?))
(>def :com.wsscode.pathom.connect/io-map (s/map-of :com.wsscode.pathom.connect/attribute :com.wsscode.pathom.connect/io-map))

(declare normalize-io)

(defn resolver-data
  "Get resolver map information in env from the resolver sym."
  [env-or-indexes sym]
  (let [idx (cond-> env-or-indexes
              (contains? env-or-indexes :com.wsscode.pathom.connect/indexes)
              :com.wsscode.pathom.connect/indexes)]
    (get-in idx [:com.wsscode.pathom.connect/index-resolvers sym])))

(defn resolver-provides
  [{:com.wsscode.pathom.connect/keys [provides output]}]
  (or provides
      (if output (normalize-io output))))

; region io map

(defn merge-io-attrs [a b]
  (cond
    (and (map? a) (map? b))
    (merge-with merge-io-attrs a b)

    (map? a) a
    (map? b) b

    :else b))

(defn normalize-io [output]
  (if (map? output) ; union
    (let [unions (into {} (map (fn [[k v]]
                                 [k (normalize-io v)]))
                       output)
          merged (reduce merge-io-attrs (vals unions))]
      (assoc merged :com.wsscode.pathom.connect/unions unions))
    (into {} (map (fn [x] (if (map? x)
                            (let [[k v] (first x)]
                              [k (normalize-io v)])
                            [x {}])))
          output)))

(defn merge-io
  "Merge ::pc/index-io maps."
  ([] {})
  ([a] a)
  ([a b]
   (merge-with merge-io-attrs a b)))

(defn io->query
  "Converts IO format to query format."
  [io]
  (into []
        (map (fn [[k v]]
               (if (seq v)
                 {k (io->query v)}
                 k)))
        io))

(defn merge-oir
  "Merge ::index-oir maps."
  [a b]
  (merge-with #(merge-with into % %2) a b))

(>defn ast->io
  "Convert AST to IO-map format"
  [ast]
  [:edn-query-language.ast/node => :com.wsscode.pathom.connect/io-map]
  (reduce
    (fn [m {:keys [key] :as node}]
      (assoc m key (ast->io node)))
    {}
    (:children ast)))

(>defn sub-select-io
  "Given io-map, filters the parts of it that are also contained in mask."
  [io-map mask]
  [:com.wsscode.pathom.connect/io-map :com.wsscode.pathom.connect/io-map
   => :com.wsscode.pathom.connect/io-map]
  (reduce-kv
    (fn [m k v]
      (if (contains? io-map k)
        (assoc m k (if (seq v) (sub-select-io (get io-map k) v) v))
        m))
    {}
    mask))

; endregion

