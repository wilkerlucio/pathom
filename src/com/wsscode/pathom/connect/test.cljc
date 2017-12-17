(ns com.wsscode.pathom.connect.test
  (:require [com.wsscode.pathom.connect :as p.connect]
            [clojure.math.combinatorics :as combo]
            [clojure.set :as set]
            [clojure.spec.alpha :as s])
  #?(:clj
     (:import (java.util Date))))

(s/def ::values set?)
(s/def ::error any?)
(s/def ::depth nat-int?)
(s/def ::error-box (s/keys :req [::error]))
(s/def ::data-bank (s/map-of ::p.connect/attribute ::values))
(s/def ::input-arguments (s/map-of ::p.connect/attribute any?))
(s/def ::call-result (s/or :error (s/keys :req [::error]) :value any?))
(s/def ::call-event (s/map-of ::input-arguments ::call-result))
(s/def ::call-history (s/map-of symbol? ::call-event))
(s/def ::calls (s/coll-of map? :kind set?))
(s/def ::log (s/tuple inst? symbol? map? map?))
(s/def ::call-log (s/coll-of ::log :kind vector?))
(s/def ::multi-args (s/coll-of ::p.connect/attributes-set :kind set?))

(s/def ::event-type #{::report-seek
                      ::report-seek-try-resolver
                      ::report-resolver-discover
                      ::report-resolver-call})
(s/def ::report-fn (s/fspec :args (s/cat :env map?
                                         :event ::event-type
                                         :info map?)))

(declare test-resolver discover-data)

(defn reduce-first [col] (reduce #(reduced %2) nil col))

(defn add-subsets [{::keys [multi-args] :as a} b]
  (let [b-keys (set (keys b))]
    (reduce
      (fn [m args]
        (if (set/subset? args b-keys)
          (update m args (fnil conj #{}) (select-keys b (set/intersection args b-keys)))
          m))
      a
      multi-args)))

(defn bank-add
  "Adds new information to a data bank, the data bank is feed by resolver outputs
  and is used to feed in as input to call other resolvers."
  [a b]
  (if (map? b)
    (-> (reduce-kv
          (fn [m k v]
            (if v
              (cond-> (if (= v :com.wsscode.pathom.core/not-found)
                        m
                        (update m k (fnil conj #{}) v))
                (map? v) (bank-add v)
                (sequential? v) (as-> <> (reduce bank-add <> v)))
              m))
          a
          (dissoc b ::p.connect/env))
        (add-subsets b))
    a))

(defn unreachable
  "Mark attribute k as unreachable on db. Returns ::unreachable."
  [{::keys [data-bank]} k]
  (swap! data-bank update ::unreachable (fnil conj #{}) k)
  {::error ::unreachable})

(s/fdef unreachable
  :args (s/cat :env (s/keys :req [::data-bank]) :k ::p.connect/attribute)
  :ret ::error-box)

(defn report [{::keys [report-fn] :as env} event data]
  (if report-fn
    (let [env' (update env ::depth #(or % 0))]
      (report-fn env' event data))))

(defn seek-attr
  "Try to run more resolvers to get more attributes of type `attr`."
  [{::keys           [data-bank resolver-trace depth]
    ::p.connect/keys [indexes]
    :or              {depth 0}
    :as              env}
   attr]
  (let [db      @data-bank
        db-keys (set (keys db))
        {::p.connect/keys [index-oir index-resolvers]} indexes]
    (report env ::report-seek {::p.connect/attribute attr})
    (if-let [attr-resolvers (get index-oir attr)]
      (or (->> attr-resolvers
               (mapcat (fn [[attrs syms]]
                         (let [missing (set/difference attrs db-keys)]
                           (for [s syms]
                             {:sym     s
                              :data    (get index-resolvers s)
                              :attrs   attrs
                              :missing missing}))))
               (sort-by (comp count :missing))
               (eduction
                 (remove (comp (or resolver-trace #{}) :sym))
                 (keep (fn [{:keys [sym data] :as resolver}]
                         (report env ::report-seek-try-resolver resolver)
                         (test-resolver (-> env
                                            (assoc ::depth (inc depth))
                                            (update ::resolver-trace (fnil conj #{}) sym)) data)
                         (when (not= (get db attr) (get @data-bank attr))
                           (get @data-bank attr)))))
               (reduce-first))
          (unreachable env attr))
      (unreachable env attr))))

(s/fdef seek-attr
  :args (s/cat :env (s/keys :req [::data-bank ::p.connect/indexes]
                            :opt [::resolver-trace])
               :attr ::p.connect/attribute)
  :ret (s/or :err ::error-box :inputs ::values))

(defn resolve-attr
  "Find a value for an attribute."
  [{::keys [data-bank] :as env} attr]
  (let [db @data-bank]
    (or (get db attr)
        (if (contains? (::unreachable db) attr)
          {::error ::unreachable}
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

(defn log!
  [{::keys [data-bank]}
   {::p.connect/keys [sym]}
   {:keys [in out]}]
  (swap! data-bank update ::call-log (fnil conj []) [(now) sym in out])
  nil)

(defn collect-multi-args
  "Collect inputs with more than one attribute from the index."
  [indexes]
  (->> indexes ::p.connect/index-resolvers vals
       (map ::p.connect/input)
       (filter #(> (count %) 1))
       (set)))

(s/fdef collect-multi-args
  :args (s/cat :idx (s/keys :req [::p.connect/index-resolvers]))
  :ret ::multi-args)

(defn expand-output-tree
  "Connect normaly only indexes the direct root attributes for scan fetching.
  But for test discovery we also want the nested to be available as options
  during parsing. This function brings the nested items to top level."
  [indexes]
  (let [resolvers (->> indexes ::p.connect/index-resolvers)]
    (reduce-kv
      (fn add-output [idx _ {::p.connect/keys [sym output input] :as res}]
        (reduce
          (fn [idx attr]
            (let [attr' (if (map? attr) (ffirst attr) attr)]
              (cond-> (update-in idx [::p.connect/index-oir attr' input] (fnil conj #{}) sym)
                (map? attr)
                (add-output nil (assoc res ::p.connect/output (first (vals attr)))))))
          idx
          output))
      indexes
      resolvers)))

(s/fdef expand-output-tree
  :args (s/cat :idx (s/keys :req [::p.connect/index-resolvers]))
  :ret (s/keys :req [::p.connect/index-resolvers ::p.connect/index-oir]))

(defn input-list
  [{::keys [data-bank]} {::p.connect/keys [input]} in-data]
  (let [db @data-bank]
    (if (= 1 (count input))
      (let [[k inputs] (first in-data)]
        (map #(hash-map k %) inputs))
      (concat (get db input)
              (->> (apply combo/cartesian-product (vals in-data))
                   (map #(zipmap (keys in-data) %))
                   (remove (get db input #{})))))))

(s/fdef input-list
  :args (s/cat :env (s/keys :req [::data-bank])
               :resolver (s/keys :req [::p.connect/input])
               :in-data (s/map-of keyword? set?))
  :ret (s/coll-of (s/map-of ::p.connect/attribute any?)))

(defn test-resolver
  "Test a resolver."
  ([{::keys [data-bank] :as env} {::p.connect/keys [sym] :as resolver}]
   (let [db      @data-bank
         in-data (discover-data env resolver)]
     (report env ::report-resolver-discover (assoc resolver ::data-bank in-data))
     (if (some ::error (vals in-data))
       (log! env resolver {:in in-data :out ::unreachable})
       (if-let [input' (->> (input-list env resolver in-data)
                            (remove (get-in db [::call-history sym] {}))
                            (first))]
         (test-resolver env resolver input')
         (log! env resolver {:in in-data :out ::end-of-input})))))

  ([{::keys [data-bank] :as env}
    {::p.connect/keys [sym] :as resolver}
    input]
   (report env ::report-resolver-call (assoc resolver ::input-arguments input))
   (let [f (resolve sym)]
     (let [out (try
                 (some-> (f env input)
                         (dissoc ::p.connect/env))
                 (catch Throwable e
                   {::error e}))]
       (swap! data-bank update-in [::call-history sym] assoc input out)
       (log! env resolver {:in input :out out})
       (if-not (::error out)
         (swap! data-bank bank-add out)))
     env)))

(defn test-index
  [{::keys           [data-bank]
    ::p.connect/keys [indexes] :as env}]
  (let [resolvers (-> indexes ::p.connect/index-resolvers)
        res-keys  (set (keys resolvers))]
    (loop [missing res-keys]
      (if (seq missing)
        (let [sym (first missing)]
          (if-not (test-resolver env (p.connect/resolver-data env sym))
            (swap! data-bank update-in [::call-history sym] assoc ::error ::none))
          (recur (set/difference res-keys (->> (get @data-bank ::call-history) (keys) (set)))))
        env))))
