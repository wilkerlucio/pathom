(ns com.wsscode.pathom.connect.indexes)

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
  [a b]
  (merge-with merge-io-attrs a b))

(defn merge-oir
  "Merge ::index-oir maps."
  [a b]
  (merge-with #(merge-with into % %2) a b))
