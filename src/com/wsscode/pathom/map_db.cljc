(ns com.wsscode.pathom.map-db
  (:require
    [clojure.spec.alpha :as s]
    [com.fulcrologic.guardrails.core :refer [>def >defn >fdef => | <- ?]]
    [com.wsscode.pathom.core :as p]
    [com.wsscode.pathom.misc :as p.misc]
    [edn-query-language.core :as eql]))

(>def ::sort-by-expr
  (s/cat :attr keyword? :direction (s/? #{::asc ::desc})))

(>def ::sort-by
  (s/or :single keyword?
        :directed ::sort-by-expr))

(defn map-db-ident-reader
  [{:keys    [ast]
    ::keys   [refs]
    ::p/keys [path]
    :as      env}]
  (let [k (:key ast)]
    (if (p/ident? k)
      (let [[_ v] k
            path' path]
        (when-let [res (get-in refs (if (= '_ v) (take 1 k) k))]
          (p/join res (assoc env ::p/union-path (fn [{::p/keys [path]}]
                                                  (if (= (count path') (count path))
                                                    (first k)))))))
      ::p/continue)))

(defn map-db-reader
  [{:keys  [ast query]
    ::keys [refs ident-track]
    :as    env}]
  (let [entity (p/entity env)]
    (if-let [[_ v] (and (map? entity) (find entity (:key ast)))]
      (cond
        (p/ident? v)
        (if (contains? ident-track v)
          v
          (p/join (get-in refs v) (assoc env ::p/union-path (constantly (first v))
                                    ::ident-track (conj (or ident-track #{}) v))))

        (sequential? v)
        (mapv #(if (p/ident? %)
                 (if (contains? ident-track %)
                   %
                   (p/join (get-in refs %)
                           (-> env
                               (assoc ::ident-track (conj (or ident-track #{}) v)
                                 ::p/union-path (constantly (first %)))
                               (update ::p/path conj %2))))
                 (p/join % env))
          v (range))

        (and (map? v) query)
        (p/join v env)

        :else
        v)
      ::p/continue)))

(def readers [map-db-ident-reader map-db-reader])

(def direction-compare
  {::asc  compare
   ::desc #(compare %2 %)})

(defn sort-results [sort items]
  (let [c (s/conform ::sort-by sort)]
    (if (= ::s/invalid c)
      items
      (let [[type sort] c]
        (vec
          (case type
            :single
            (sort-by sort items)

            :directed
            (sort-by (:attr sort) (direction-compare (:direction sort)) items)))))))

(defn sort-plugin []
  {::p/wrap-read
   (fn sorting-plugin-external [reader]
     (fn sorting-plugin-internal [env]
       (let [sort (get-in env [:ast :params ::sort-by])]
         (cond->> (reader env)
           sort (sort-results sort)))))})

(def prepare-input
  {::p/wrap-parser
   (fn [parser]
     (fn [{:keys [state] :as env} tx]
       (let [env' (cond-> env
                    state
                    (assoc ::p/entity @state ::refs @state))]
         (parser env' tx))))})

(def parser-config
  {::p/env     {::p/reader     readers
                ::p/union-path (fn [_] nil)}
   ::p/plugins [prepare-input
                (p/post-process-parser-plugin p/elide-not-found)]})

(def parser
  (p/parser parser-config))

(defn db->tree [query data refs]
  (parser {::p/entity data ::refs refs} (p/remove-query-wildcard query)))
