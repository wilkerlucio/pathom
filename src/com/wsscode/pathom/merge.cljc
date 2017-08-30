(ns com.wsscode.pathom.merge
  (:require [om.next :as om]))

(defn merge-queries* [qa qb]
  (reduce (fn [ast {:keys [key type params] :as item-b}]
            (if-let [[idx item] (->> ast :children
                                     (keep-indexed #(if (-> %2 :key (= key)) [%1 %2]))
                                     first)]
              (cond
                (and (= :join (:type item) type))
                (if (= (:params item) params)
                  (update-in ast [:children idx] merge-queries* item-b)
                  (reduced nil))

                (= :call type)
                (reduced nil)

                :else ast)
              (update ast :children conj item-b)))
          qa
          (:children qb)))

(defn merge-queries [qa qb]
  (-> (merge-queries* (om/query->ast qa) (om/query->ast qb))
      (om/ast->query)))
