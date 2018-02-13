(ns com.wsscode.pathom.fulcro.local-parser
  (:require [com.wsscode.pathom.core :as p]
            [com.wsscode.pathom.specs.query :as spec.query]
            [clojure.spec.alpha :as s]))

(defn local-graph-ident-reader
  [{:keys  [ast]
    ::keys [refs]
    :as    env}]
  (let [k (:key ast)]
    (if (p/ident? k)
      (let [[_ v] k]
        (p/join (get-in refs (if (= '_ v) (take 1 k) k)) env))
      ::p/continue)))

(defn local-graph-reader [{:keys  [ast query]
                           ::keys [refs]
                           :as    env}]
  (let [entity (p/entity env)]
    (if-let [[_ v] (find entity (:key ast))]
      (cond
        (p/ident? v)
        (p/join (get-in refs v) (assoc env ::p/union-path (constantly (first v))))

        (sequential? v)
        (p/join-seq (assoc env ::p/union-path #(-> % p/entity meta ::union-key))
          (mapv #(if (p/ident? %)
                   (vary-meta (get-in refs %) assoc ::union-key (first %))
                   %) v))

        (and (map? v) query)
        (p/join v env)

        :else
        v)
      ::p/continue)))

(def readers [local-graph-ident-reader local-graph-reader])

(def parser
  (p/parser
    {::p/plugins [(p/env-plugin
                    {::p/reader readers})
                  {::p/wrap-parser
                   (fn [parser]
                     (fn [env tx]
                       (-> (parser env tx)
                           p/elide-not-found)))}]}))

(defn db->tree [query data refs]
  (parser {::p/entity data ::refs refs} query))

(s/def ::db-tree-args
  (s/cat :query ::spec.query/query :data map? :refs (s/nilable map?)))

(s/fdef db->tree
  :args ::db-tree-args
  :ret map?)
