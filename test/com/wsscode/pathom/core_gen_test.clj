(ns com.wsscode.pathom.core-gen-test
  (:require [clojure.test :refer :all]
            [clojure.core.async :refer [go <! <!!]]
            [com.wsscode.common.async :as casync]
            [com.wsscode.pathom.core :as p]
            [com.wsscode.pathom.specs.query :as s.query]
            [clojure.test.check :as tc]
            [clojure.test.check.generators :as gen]
            [clojure.test.check.properties :as props]
            [clojure.test.check.clojure-test :as test]
            [clojure.spec.alpha :as s]
            [fulcro.client.primitives :as fp])
  (:import (clojure.lang ExceptionInfo)))

(defn key-ex-value [x {::keys [throw-errors?]}]
  (if (and throw-errors? (zero? (mod (hash x) 10)))
    (throw (ex-info "Demo error" {:x x}))
    (str x)))

(defn reader [{:keys [ast query depth-limit] :as env}]
  (if (and query (> depth-limit 0))
    (p/join (update env :depth-limit dec))
    (-> ast :key (key-ex-value env))))

(defn async-reader [{:keys [ast query depth-limit] :as env}]
  (if (and query (> depth-limit 0))
    (p/join (update env :depth-limit dec))
    (if (zero? (mod (hash key) 2))
      (go (-> ast :key (key-ex-value env)))
      (-> ast :key (key-ex-value env)))))

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
                       (fn [_] (gen/map gen/keyword gen/simple-type-printable {:max-elements 3}))}
      ::s.query/gen-query)))

(defn catch-run-parser [parser env query]
  (try
    (casync/throw-err (parser env query))
    (catch ExceptionInfo e
      (if (= (.getMessage e) "Demo error")
        (str e)
        (throw e)))))

(defn props-handle-matches []
  (props/for-all [query (->> (base-gen)
                             (gen/fmap p/remove-query-wildcard))]
    (= (parser parser-env query)
       (<!! (async-parser (assoc parser-env ::p/reader async-reader) query))
       (fulcro-parser parser-env query))))

(defn props-handle-matches-errors []
  (let [env (assoc parser-env ::throw-errors? true)]
    (props/for-all [query (->> (base-gen)
                               (gen/fmap p/remove-query-wildcard))]
      (= (catch-run-parser parser env query)
         (catch-run-parser (comp <!! async-parser) (assoc env ::p/reader async-reader) query)
         (catch-run-parser fulcro-parser env query)))))

(test/defspec prop-handle 20 (props-handle-matches))
(test/defspec prop-handle-errors 20 (props-handle-matches-errors))

(comment
  (<!! (async-parser parser-env [:a {:b [:c '*]}]))

  (catch-run-parser (comp <!! async-parser) (assoc parser-env ::throw-errors? true)
    '[{[:A 0] [* ({:h [:h]} {})]}])
  (casync/throw-err (<!! (async-parser (assoc parser-env ::throw-errors? true) [:b])))

  (tc/quick-check 20 (props-handle-matches))
  (tc/quick-check 20 (props-handle-matches-errors))

  (last (gen/sample (base-gen) 20)))
