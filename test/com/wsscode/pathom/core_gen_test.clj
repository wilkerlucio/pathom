(ns com.wsscode.pathom.core-gen-test
  (:require [clojure.test :refer :all]
            [com.wsscode.pathom.core :as p]
            [com.wsscode.pathom.specs.query :as s.query]
            [clojure.test.check :as tc]
            [clojure.test.check.generators :as gen]
            [clojure.test.check.properties :as props]
            [clojure.test.check.clojure-test :as test]
            [clojure.spec.alpha :as s]
            [fulcro.client.primitives :as fp]))

(defn reader [{:keys [ast query depth-limit] :as env}]
  (if (and query (> depth-limit 0))
    (p/join (update env :depth-limit dec))
    (-> ast :key str)))

(def parser (p/parser {:mutate (fn [_ k _] (str k))}))

(def fulcro-parser
  (-> (fp/parser {:read   (-> p/pathom-read'
                              p/wrap-add-path
                              p/wrap-reduce-params)
                  :mutate (fn [_ k _] (str k))})
      p/wrap-normalize-env))

(def parser-env
  {:depth-limit   10
   ::p/reader     reader
   ::p/union-path (fn [env] (-> env :ast :children first :children first :union-key))})

(defn process-parser-queries []
  (let [props (gen/sample gen/keyword 10)]
    (props/for-all [query (->> (s.query/make-gen {::s.query/gen-property
                                                  (fn [_] (gen/elements props))

                                                  ::s.query/gen-params
                                                  (fn [_] (gen/map gen/keyword gen/simple-type-printable))}
                                 ::s.query/gen-query)
                               (gen/fmap p/remove-query-wildcard))]
      (= (parser parser-env query)
         (fulcro-parser parser-env query)))))

(test/defspec works-same-as-fulcro-parser 20 (process-parser-queries))

(comment
  (tc/quick-check 20 (process-parser-queries)))
