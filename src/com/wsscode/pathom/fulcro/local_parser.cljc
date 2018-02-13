(ns com.wsscode.pathom.fulcro.local-parser
  (:require [com.wsscode.pathom.core :as p]
            [com.wsscode.pathom.specs.query :as spec.query]
            [clojure.spec.alpha :as s]
            [clojure.spec.gen.alpha :as gen]))

(defn local-graph-reader [{:keys    [ast query]
                           ::keys   [refs]
                           ::p/keys [entity-key]
                           :as      env}]
  (let [entity (p/entity env)]
    (if-let [[_ v] (find entity (:key ast))]
      (cond
        (p/ident? v)
        (p/join (get-in refs v) (assoc env ::p/union-path (constantly (first v))))

        (sequential? v)
        (if (every? p/ident? v)
          (p/join-seq (assoc env ::p/union-path #(-> % p/entity meta ::union-key))
            (mapv #(vary-meta (get-in refs %) assoc ::union-key (first %)) v))
          (p/join-seq env v))

        (and (map? v) query)
        (p/join (assoc env entity-key v))

        :else
        v)
      ::p/continue)))

(def readers [local-graph-reader])

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
