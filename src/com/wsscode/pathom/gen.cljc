(ns com.wsscode.pathom.gen
  (:require [clojure.spec.alpha :as s]
            [com.wsscode.pathom.core :as p]
            [com.wsscode.spec-inspec :as si]
            [clojure.test.check.generators :as gen]
            [om.next :as om]))

(defn coll-spec?
  "Check if a given spec is a `coll-of` spec."
  [k]
  (try
    (= (-> k si/spec->root-sym first) `s/coll-of)
    (catch #?(:clj Throwable :cljs :default) _ false)))

(s/fdef coll-spec?
  :args (s/cat :k keyword?)
  :ret boolean?)

(defn spec-gen-reader [{:keys [ast query] :as env}]
  (let [k (:key ast)]
    (if query
      (if (coll-spec? k)
        (p/join-seq env (range (rand-int 5)))
        (p/join env))
      (try
        (gen/generate (s/gen k))
        (catch #?(:clj Throwable :cljs :default) _
          (print (str "Failed to generate attribute " k "\n"))
          nil)))))

(s/def spec-gen-reader ::p/reader-fn)

(def parser
  (p/parser {::p/plugins [(p/env-plugin {::p/reader spec-gen-reader})]}))

(defn query->props
  "Generates data from a given query using the spec generators for the attributes."
  [query]
  (parser {} query))

(defn comp->props
  "Generates from a given component using spec generators for the attributes."
  ([comp]
   (query->props (om/get-query comp)))
  ([comp props]
   (merge (comp->props comp) props)))

(defn comp->db
  "Generates the query from component and convert into Fulcro db format."
  [comp]
  (as-> (parser {} (om/get-query comp)) <>
    (om/tree->db comp <> true)))
