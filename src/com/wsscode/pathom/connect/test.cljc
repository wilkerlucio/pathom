(ns com.wsscode.pathom.connect.test
  (:require [com.wsscode.pathom.connect :as p.connect]
            [clojure.set :as set]
            [clojure.spec.alpha :as s])
  #?(:clj
     (:import (java.util Date))))

(s/def ::values set?)
(s/def ::data-bank (s/map-of keyword? ::values))
(s/def ::call-history (s/map-of symbol? ::data-bank))
(s/def ::calls (s/coll-of map? :kind set?))
(s/def ::log (s/tuple inst? symbol? map? map?))
(s/def ::call-log (s/coll-of ::log :kind vector?))

(declare test-resolver discover-data)

(defn bank-add
  "Adds new information to a data bank, the data bank is feed by resolver outputs
  and is used to feed in as input to call other resolvers."
  [a b]
  (if (map? b)
    (reduce-kv
      (fn [m k v]
        (if v
          (cond-> (update m k (fnil conj #{}) v)
            (map? v) (bank-add v)
            (sequential? v) (as-> <> (reduce bank-add <> v)))
          m))
      a
      (dissoc b ::p.connect/env))
    a))

(defn unreachable [{::keys [data-bank]} k]
  (swap! data-bank update ::unreachable (fnil conj #{}) k)
  ::unreachable)

(defn seek-attr
  [{::keys           [data-bank]
    ::p.connect/keys [indexes]
    :as              env}
   attr]
  (let [db      @data-bank
        db-keys (set (keys db))
        {::p.connect/keys [index-oir index-resolvers]} indexes]
    (if-let [attr-resolvers (get index-oir attr)]
      (if-let [vs (->> attr-resolvers
                       (mapcat (fn [[attrs syms]]
                                 (let [missing (set/difference attrs db-keys)]
                                   (for [s syms]
                                     {:sym     s
                                      :data    (get index-resolvers s)
                                      :attrs   attrs
                                      :missing missing}))))
                       (sort-by (comp count :missing))
                       (eduction (keep (fn [{:keys [data]}]
                                         (if (and (test-resolver env data)
                                                  (not= (get db attr) (get @data-bank attr)))
                                           (get @data-bank attr)))))
                       (first))]
        vs
        (unreachable env attr))
      (unreachable env attr))))

(defn resolve-attr
  "Find a value for an attribute."
  [{::keys [data-bank] :as env} attr]
  (let [db @data-bank]
    (or (get db attr)
        (if (contains? (::unreachable db) attr)
          ::unreachable
          (seek-attr env attr)))))

(defn discover-data
  "Pick a new input for a resolver from the data bank."
  [env {::p.connect/keys [input]}]
  (zipmap input (map #(resolve-attr env %) input)))

(defn call-add [a b]
  (-> (bank-add a b)
      (update ::calls (fnil conj #{}) b)))

(defn now []
  #?(:clj  (Date.)
     :cljs (js/Date.)))

(defn test-resolver
  "Test a resolver."
  ([env resolver]
   (let [input (discover-data env resolver)]
     (if-not (some (fn [[_ v]] (= v ::unreachable)) input)
       (test-resolver env resolver (into {} (map (fn [[k v]] [k (first v)])) input)))))
  ([{::keys [data-bank] :as env}
    {::p.connect/keys [sym]}
    input]
   (let [f (resolve sym)]
     (swap! data-bank update-in [::call-history sym] call-add input)
     (let [out (try
                 (f env input)
                 (catch Throwable _
                   ::resolver-error))]
       (swap! data-bank update ::call-log (fnil conj []) [(now) sym input out])
       (if (not= ::resolver-error out)
         (swap! data-bank bank-add out)))
     env)))
