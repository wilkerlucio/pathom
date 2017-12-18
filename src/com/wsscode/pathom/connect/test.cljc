(ns com.wsscode.pathom.connect.test
  (:require
    [clojure.data :as data]
    [clojure.math.combinatorics :as combo]
    [clojure.set :as set]
    [clojure.spec.alpha :as s]
    [clojure.walk :as walk]
    [com.wsscode.pathom.connect :as p.connect]
    [com.wsscode.pathom.core :as p])
  #?(:clj
     (:import (java.util Date))))

(s/def ::values set?)
(s/def ::error any?)
(s/def ::depth nat-int?)
(s/def ::error-box (s/keys :req [::error]))
(s/def ::data-bank any?)
(s/def ::data-bank-raw (s/map-of ::p.connect/attribute ::values))
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

(declare test-resolver* discover-data)

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
  [{::keys [bank-ignore] :as env
    :or    {bank-ignore #{::p/not-found}}} a b]
  (let [bank-add' (partial bank-add env)]
    (if (map? b)
      (-> (reduce-kv
            (fn [m k v]
              (if v
                (cond-> (if (contains? bank-ignore v)
                          m
                          (update m k (fnil conj #{}) v))
                  (map? v) (bank-add' v)
                  (sequential? v) (as-> <> (reduce bank-add' <> v)))
                m))
            a
            (dissoc b ::p.connect/env))
          (add-subsets b))
      a)))

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
                         (test-resolver* (-> env
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

(defn call-add [env a b]
  (-> (bank-add env a b)
      (update ::calls (fnil conj #{}) b)))

(defn now []
  #?(:clj  (Date.)
     :cljs (js/Date.)))

(defn log!
  [{::keys [data-bank]}
   {::p.connect/keys [sym]}
   {:keys [in out]}]
  (swap! data-bank update ::call-log (fnil conj []) [(now) sym in out])
  out)

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

(defn vector->set
  "Recursively converts all vectors in sets."
  [x]
  (walk/prewalk
    (fn [x]
      (if (and (vector? x) (not (map-entry? x)))
        (set x)
        x))
    x))

(defn find-join-value [q k]
  (some (fn [i]
          (if (and (map? i)
                   (= k (ffirst i)))
            (-> i first second))) q))

(defn diff-data-shapes
  "Return the query shape differece."
  [a b]
  (let [a (->> (vector->set a)
               (into #{} (remove #(and (keyword? %)
                                       (find-join-value b %)))))
        b (vector->set b)
        [missing] (data/diff a b)
        post-missing
          (some->> missing
                   (into []
                         (keep (fn [x]
                                 (if (map? x)
                                   (let [[k v] (first x)
                                         val-diff (diff-data-shapes v (find-join-value b k))]
                                     (if val-diff
                                       {k val-diff}))
                                   x)))))]
    (if (seq post-missing)
      post-missing)))

(defn return-extra-attributes [{::p.connect/keys [output]} out]
  (-> (p.connect/data->shape out)
      (diff-data-shapes output)))

(defn merge-mismatch
  [{::keys [out-cumulative]}
   {::p.connect/keys [output]}
   out]
  (let [out-shape (p.connect/data->shape out)
        out-c     (p/merge-queries (or out-cumulative output) out-shape)]
    {::out-base       output
     ::out-cumulative out-c
     ::out-missing    (diff-data-shapes out-c output)}))

(defn test-resolver*
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
         (test-resolver* env resolver input')
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
         (do
           (when (return-extra-attributes resolver out)
             (swap! data-bank update-in [::out-shape-mismatch sym]
               merge-mismatch resolver out))
           (swap! data-bank (partial bank-add env) out)
           env)
         out)))))

(s/def ::resolver-out
  (s/or :failed (s/or :simple #{::unreachable ::end-of-input}
                      :error (s/keys :req [::error]))
        :success map?))

(s/fdef test-resolver*
  :args (s/cat :env (s/keys :req [::data-bank])
               :resolver (s/keys))
  :ret ::resolver-out)

(defn success-call? [x] (not (contains? x ::error)))

(defn resolver-calls [{::keys [data-bank]} s]
  (get-in @data-bank [::call-history s]))

(defn count-success-calls [env s]
  (->> (resolver-calls env s) vals (filter success-call?) count))

(defn test-index*
  [{::keys           [data-bank target-call-count]
    ::p.connect/keys [indexes] :as env}]
  (let [resolvers (-> indexes ::p.connect/index-resolvers)
        res-keys  (set (keys resolvers))
        sym-calls #(resolver-calls env %)]
    (loop []
      (let [missing (->> res-keys
                         (remove (comp ::resolver-finished-by sym-calls))
                         (sort-by #(count-success-calls env %)))]
        (if (seq missing)
          (let [sym (first missing)
                {::p.connect/keys [input]} (p.connect/resolver-data env sym)
                [kind res] (->> (test-resolver* env (p.connect/resolver-data env sym))
                                (s/conform ::resolver-out))]
            (case kind
              :success
              (if (seq input)
                (if (>= (count-success-calls env sym) target-call-count)
                  (swap! data-bank assoc-in [::call-history sym ::resolver-finished-by]
                    ::resolver-done))
                (swap! data-bank assoc-in [::call-history sym ::resolver-finished-by]
                  ::resolver-done))

              :failed
              nil)
            (recur))
          env)))))

(s/fdef test-index*
  :args (s/cat :env (s/keys :req [::data-bank ::p.connect/indexes]))
  :ret map?)

(declare console-print-reporter)

(defn prepare-environment [env]
  (assert (s/valid? (s/keys :req [::p.connect/indexes]) env)
    (s/explain-str (s/keys :req [::p.connect/indexes]) env))
  (-> (merge {::data-bank (atom {})
              ::report-fn console-print-reporter} env)
      (update ::p.connect/indexes expand-output-tree)))

(s/fdef prepare-environment
  :args (s/cat :env (s/keys :req [::p.connect/indexes]))
  :ret map?)

(defn test-resolver
  "Test a single resolver."
  [env resolver]
  (test-resolver* (prepare-environment env) resolver))

(defn test-index [env]
  (test-index* (prepare-environment env)))

;; reporter

(defn depth-print [{::keys [depth]} & more]
  (apply println
    (apply str (repeat depth "  "))
    "- " more))

(defmulti console-print-reporter (fn [env event data] event))

(defmethod console-print-reporter ::report-seek
  [env _ {:keys [::p.connect/attribute]}]
  (depth-print env "seeking" attribute))

(defmethod console-print-reporter ::report-seek-try-resolver
  [env _ {:keys [sym]}]
  (depth-print env "trying to read from" sym))

(defmethod console-print-reporter ::report-resolver-discover
  [env _ {:keys [::p.connect/sym ::data-bank]}]
  (depth-print env "discovered input" sym (pr-str data-bank)))

(defmethod console-print-reporter ::report-resolver-call
  [env _ {:keys [::p.connect/sym ::input-arguments]}]
  (depth-print env "call resolver" (pr-str sym) (pr-str input-arguments)))

(defmethod console-print-reporter :default
  [_ _ _] nil)

(defn silent-reporter "I report nothing!" [_ _ _])
