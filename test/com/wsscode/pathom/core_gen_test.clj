(ns com.wsscode.pathom.core-gen-test
  (:require [clojure.core.async :refer [go <! <!!]]
            [clojure.test :refer :all]
            [clojure.test.check :as tc]
            [clojure.test.check.generators :as gen]
            [clojure.test.check.properties :as props]
            [clojure.test.check.clojure-test :as test]
            [clojure.spec.alpha :as s]
            [clojure.walk :as walk]
            [com.wsscode.common.async :as casync :refer [go-catch]]
            [com.wsscode.pathom.core :as p]
            [com.wsscode.pathom.specs.query :as s.query]
            [com.wsscode.pathom.test :as pt]
            [fulcro.client.primitives :as fp])
  (:import (clojure.lang ExceptionInfo)))

(defn normalize-mutation-error [x]
  (walk/prewalk
    (fn [x]
      (cond
        (= ::fp/error x)
        :com.wsscode.pathom.parser/error

        (casync/error? x)
        (.getMessage x)

        :else
        x))
    x))

(def parser (p/parser {:mutate pt/mutate-fn}))
(def async-parser (p/async-parser {:mutate pt/mutate-fn}))

(defn mk-fulcro-parser [{::p/keys [plugins]
                         :keys [mutate]}]
  (-> (fp/parser {:read   (-> p/pathom-read'
                              (p/apply-plugins plugins ::p/wrap-read)
                              p/wrap-add-path
                              p/wrap-reduce-params)
                  :mutate (p/apply-plugins mutate plugins ::p/wrap-mutate)})
      (p/apply-plugins plugins ::p/wrap-parser)
      p/wrap-normalize-env))

(def fulcro-parser (mk-fulcro-parser {::p/plugins [p/raise-mutation-result-plugin]
                                      :mutate pt/mutate-fn}))

(def parser-with-err (p/parser {::p/plugins [p/error-handler-plugin]
                                :mutate pt/mutate-fn}))

(def async-parser-with-err (p/async-parser {::p/plugins [p/error-handler-plugin]
                                            :mutate pt/mutate-fn}))

(def fulcro-parser-with-err (mk-fulcro-parser {::p/plugins [p/error-handler-plugin p/raise-mutation-result-plugin]
                                               :mutate pt/mutate-fn}))

(def parser-env
  {:depth-limit   10
   ::p/reader     pt/reader
   ::p/union-path (fn [env] (-> env :ast :children first :children first :union-key))})

(defn base-gen []
  (let [props (gen/generate (gen/vector-distinct gen/keyword {:min-elements 8
                                                              :max-elements 20})
                8)]
    (s.query/make-gen {::s.query/gen-property
                       (fn [_] (gen/elements props))

                       ::s.query/gen-params
                       (fn [_] (gen/map gen/keyword gen/simple-type-printable {:max-elements 3}))}
      ::s.query/gen-query)))

(defn catch-run-parser [parser env query]
  (normalize-mutation-error
    (try
      (casync/throw-err (parser env query))
      (catch ExceptionInfo e
        (if (= (.getMessage e) "Demo error")
          (str e)
          (throw e))))))

(defn props-handle-matches []
  (props/for-all [query (->> (base-gen)
                             (gen/fmap p/remove-query-wildcard))]
    (= (parser parser-env query)
       (casync/throw-err (<!! (async-parser (assoc parser-env ::p/reader pt/async-reader) query)))
       (fulcro-parser parser-env query))))

(defn props-handle-matches-errors []
  (let [env (assoc parser-env ::throw-errors? true)]
    (props/for-all [query (->> (base-gen)
                               (gen/fmap p/remove-query-wildcard))]
      (= (catch-run-parser parser env query)
         (catch-run-parser (comp <!! async-parser) (assoc env ::p/reader pt/async-reader) query)
         (catch-run-parser fulcro-parser env query)))))

(defn props-handle-matches-errors-with-plugin []
  (let [env (assoc parser-env ::throw-errors? true)]
    (props/for-all [query (->> (base-gen)
                               (gen/fmap p/remove-query-wildcard))]
      (= (catch-run-parser parser-with-err env query)
         (catch-run-parser (comp <!! async-parser-with-err) (assoc env ::p/reader pt/async-reader) query)
         (catch-run-parser fulcro-parser-with-err env query)))))

(test/defspec prop-handle 20 (props-handle-matches))
(test/defspec prop-handle-errors 20 (props-handle-matches-errors))
(test/defspec prop-handle-errors-with-plugin 20 (props-handle-matches-errors-with-plugin))

(comment
  (def temp-q '[{:pq5?1:k-YZt:i3!:T:Z76:+! ...}])

  (pt/hash-mod :ql!-S?sr-:9!?1_2!+ 5)

  (parser parser-env temp-q)
  (fulcro-parser parser-env temp-q)
  (casync/throw-err (<!! (async-parser (assoc parser-env ::p/reader pt/async-reader) temp-q)))

  (catch-run-parser (comp <!! async-parser) (assoc parser-env ::throw-errors? true
                                                              ::p/reader async-reader)
    '[(.?* {})])

  (normalize-mutation-error
    (catch-run-parser parser (assoc parser-env ::throw-errors? true)
      '[(+- {})]))

  (normalize-mutation-error
    (catch-run-parser fulcro-parser (assoc parser-env ::throw-errors? true)
      '[(+- {})]))

  (casync/throw-err (<!! (async-parser-with-err (assoc parser-env ::throw-errors? true
                                                                  ::p/reader async-reader) '[(call/maybe {})])))
  (parser-with-err (assoc parser-env ::throw-errors? true) [:b])
  (fulcro-parser-with-err (assoc parser-env ::throw-errors? true) [:b])

  (let [k :b]
    [(mod (hash k) 2)
     (mod (hash k) 10)])

  (gen/sample (base-gen) 20)

  (tc/quick-check 20 (props-handle-matches))
  (tc/quick-check 20 (props-handle-matches-errors))
  (tc/quick-check 20 (props-handle-matches-errors-with-plugin))

  (let [env (assoc parser-env ::throw-errors? true)
        query '[(+- {})]
        res [(catch-run-parser parser env query)
             (catch-run-parser (comp <!! async-parser) (assoc env ::p/reader async-reader) query)
             (catch-run-parser fulcro-parser env query)]]
    (conj res (apply = res)))

  (last (gen/sample (base-gen) 20)))
