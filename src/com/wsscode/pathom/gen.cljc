(ns com.wsscode.pathom.gen
  (:require [clojure.spec.alpha :as s]
            [com.wsscode.pathom.core :as p]
            [com.wsscode.spec-inspec :as si]
            [clojure.test.check.generators :as gen]
            [fulcro.client.primitives :as fp]
            [clojure.walk :as walk]
            [clojure.string :as str]))

(defn coll-spec?
  "Check if a given spec is a `coll-of` spec."
  [k]
  (try
    (= (-> k si/spec->root-sym first) `s/coll-of)
    (catch #?(:clj Throwable :cljs :default) _ false)))

(s/fdef coll-spec?
  :args (s/cat :k keyword?)
  :ret boolean?)

(s/def ::range
  (s/and (s/tuple nat-int? nat-int?)
         (fn [[a b]]
           (>= b a))))

(s/def ::denorm-range (s/or :int nat-int? :range ::range))

(defn normalize-range [x]
  (if (integer? x)
    [x x]
    x))

(s/fdef normalize-range
  :args (s/cat :x ::denorm-range)
  :ret ::range)

(defn pick-range-value [range]
  (let [[a b] (normalize-range range)]
    (+ (rand-int (- (inc b) a)) a)))

(s/fdef pick-range-value
  :args (s/cat :range ::denorm-range)
  :ret nat-int?)

(defn info [{::keys [silent?]} & msg]
  (if-not silent? (print (str (str/join msg) "\n"))))

(defn spec-gen-reader [{:keys  [ast query]
                        ::keys [settings]
                        :as    env}]
  (let [k (:dispatch-key ast)
        s (get settings k)]
    (if query
      (if-let [r (or (::coll s)
                     (if (coll-spec? k) [0 5]))]
        (p/join-seq env (range (pick-range-value r)))
        (p/join env))
      (try
        (gen/generate (or (::gen s) (s/gen k)))
        (catch #?(:clj Throwable :cljs :default) _
          (info env "Failed to generate attribute " k)
          nil)))))

(s/def spec-gen-reader ::p/reader-fn)

(def parser
  (p/parser {::p/plugins [(p/env-plugin {::p/reader spec-gen-reader})]
             :mutate     (fn [env k params]
                           (info env "Gen mutation called" k params))}))

(defn bound-unbounded-recursions [query n]
  (walk/postwalk
    (fn [x]
      (if (= x '...) n x))
    query))

(defn query->props
  "Generates data from a given query using the spec generators for the attributes."
  ([query] (query->props {} query))
  ([env query]
   (parser (merge {::p/union-path (fn [env] (-> env :ast :query ffirst))} env)
     (-> query
         (p/remove-query-wildcard)
         (bound-unbounded-recursions (get env ::unbounded-recursion-gen-size 3))))))

(defn comp->props
  "Generates from a given component using spec generators for the attributes."
  ([comp]
   (query->props (fp/get-query comp)))
  ([env comp]
   (query->props env (fp/get-query comp))))

(defn comp->db
  "Generates the query from component and convert into Fulcro db format."
  ([comp]
   (comp->db {} comp))
  ([env comp]
   (as-> (query->props env (fp/get-query comp)) <>
     (fp/tree->db comp <> true))))
