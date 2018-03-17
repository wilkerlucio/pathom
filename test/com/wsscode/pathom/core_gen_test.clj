(ns com.wsscode.pathom.core-gen-test
  (:require [clojure.test :refer :all]
            [clojure.core.async :refer [go <! <!!]]
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

(defn async-reader [{:keys [ast query depth-limit] :as env}]
  (if (and query (> depth-limit 0))
    (p/join (update env :depth-limit dec))
    (go (-> ast :key str))))

(def parser (p/parser {:mutate (fn [_ k _] (str k))}))
(def async-parser (p/async-parser {:mutate (fn [_ k _] (str k))}))

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

(defn base-gen []
  (let [props (gen/sample gen/keyword 10)]
    (s.query/make-gen {::s.query/gen-property
                       (fn [_] (gen/elements props))

                       ::s.query/gen-params
                       (fn [_] (gen/map gen/keyword gen/simple-type-printable))}
      ::s.query/gen-query)))

(defn fulcro-match-prop []
  (props/for-all [query (->> (base-gen)
                             (gen/fmap p/remove-query-wildcard))]
    (= (parser parser-env query)
       (fulcro-parser parser-env query))))

(defn async-parser-match-sync-prop []
  (props/for-all [query (base-gen)]
    (= (parser parser-env query)
       (<!! (async-parser (assoc parser-env ::p/reader async-reader) query)))))

(test/defspec works-same-as-fulcro-parser 20 (fulcro-match-prop))
(test/defspec async-sync-sync 20 (async-parser-match-sync-prop))

(comment
  (<!! (async-parser parser-env [:a {:b [:c '*]}]))

  (tc/quick-check 20 (fulcro-match-prop))
  (tc/quick-check 20 (async-parser-match-sync-prop))

  (last (gen/sample (base-gen) 20)))
