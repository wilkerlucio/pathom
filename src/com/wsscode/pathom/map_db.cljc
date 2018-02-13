(ns com.wsscode.pathom.map-db
  (:require [com.wsscode.pathom.core :as p]
            [com.wsscode.pathom.specs.query :as spec.query]
            [clojure.spec.alpha :as s]))

(defn map-db-ident-reader
  [{:keys  [ast]
    ::keys [refs]
    :as    env}]
  (let [k (:key ast)]
    (if (p/ident? k)
      (let [[_ v] k]
        (p/join (get-in refs (if (= '_ v) (take 1 k) k)) env))
      ::p/continue)))

(defn map-db-reader
  [{:keys  [ast query]
    ::keys [refs ident-track]
    :as    env}]
  (let [entity (p/entity env)]
    (if-let [[_ v] (find entity (:key ast))]
      (cond
        (p/ident? v)
        (if (contains? ident-track v)
          v
          (p/join (get-in refs v) (assoc env ::p/union-path (constantly (first v))
                                             ::ident-track (conj (or ident-track #{}) v))))

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

(def readers [map-db-ident-reader map-db-reader])

(def parser
  (p/parser
    {::p/plugins [(p/env-plugin
                    {::p/reader readers})
                  (p/post-process-parser-plugin p/elide-not-found)]}))

(defn db->tree [query data refs]
  (parser {::p/entity data ::refs refs} query))

(s/def ::db-tree-args
  (s/cat :query ::spec.query/query :data map? :refs (s/nilable map?)))

(s/fdef db->tree
  :args ::db-tree-args
  :ret map?)
