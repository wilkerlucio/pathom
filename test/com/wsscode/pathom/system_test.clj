(ns com.wsscode.pathom.system-test
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
            [com.wsscode.pathom.connect :as pc]
            [com.wsscode.pathom.connect.gen :as pcg]
            [com.wsscode.pathom.specs.query :as s.query]
            [com.wsscode.pathom.profile :as pp]
            [com.wsscode.pathom.test :as pt]
            [fulcro.client.primitives :as fp])
  (:import (clojure.lang ExceptionInfo)))

(test/defspec generator-makes-valid-queries {:max-size 18 :num-tests 50}
  (props/for-all [query (s.query/make-gen
                          {::s.query/gen-params
                           (fn [_]
                             (gen/map gen/keyword-ns gen/simple-type-printable))}
                          ::s.query/gen-query)]
    (s/valid? ::s.query/query query)))

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
                         :keys    [mutate]}]
  (-> (fp/parser {:read   (-> p/pathom-read'
                              (p/apply-plugins plugins ::p/wrap-read)
                              p/wrap-add-path
                              p/wrap-reduce-params)
                  :mutate (p/apply-plugins mutate plugins ::p/wrap-mutate)})
      (p/apply-plugins plugins ::p/wrap-parser)
      p/wrap-normalize-env))

(def fulcro-parser (mk-fulcro-parser {::p/plugins [p/raise-mutation-result-plugin]
                                      :mutate     pt/mutate-fn}))

(def parser-with-err (p/parser {::p/plugins [p/error-handler-plugin]
                                :mutate     pt/mutate-fn}))

(def async-parser-with-err (p/async-parser {::p/plugins [p/error-handler-plugin]
                                            :mutate     pt/mutate-fn}))

(def fulcro-parser-with-err (mk-fulcro-parser {::p/plugins [p/error-handler-plugin p/raise-mutation-result-plugin]
                                               :mutate     pt/mutate-fn}))

(def parser-env
  {:depth-limit   10
   :async-reader  pt/async-reader
   ::p/reader     pt/reader
   ::p/union-path pt/union-test-path})

(def available-plugins #{`p/error-handler-plugin `p/request-cache-plugin `pp/profile-plugin})

(def gen-plugins
  (gen/vector-distinct (gen/elements available-plugins)
    {:max-elements (count available-plugins)}))

(defn base-gen
  ([]
   (base-gen (gen/generate (gen/vector-distinct gen/keyword-ns {:min-elements 8
                                                                :max-elements 100})
               4)))
  ([props]
   (gen/let [query         (s.query/make-gen {::s.query/gen-property
                                              (fn [_] (gen/elements props))

                                              ::s.query/gen-params
                                              (fn [_] (gen/map gen/keyword gen/simple-type-printable {:max-elements 3}))}
                             ::s.query/gen-query)
             throw-errors? (gen/frequency [[8 (gen/return false)]
                                           [1 (gen/return true)]])
             plugins       gen-plugins]
     {:query   query
      :errors? throw-errors?
      :plugins plugins})))

(defn catch-run-parser [parser env query]
  (normalize-mutation-error
    (try
      (casync/throw-err (parser env query))
      (catch ExceptionInfo e
        (if (= (.getMessage e) "Demo error")
          (str e)
          (throw e))))))

(defn parser-test-props [env]
  (props/for-all [{:keys [query errors? plugins]} (->> (base-gen)
                                                       (gen/fmap #(update % :query p/remove-query-wildcard)))]
    (let [parser        (p/parser {::p/plugins plugins
                                   :mutate     pt/mutate-fn})

          async-parser  (p/async-parser {::p/plugins plugins
                                         :mutate     pt/mutate-fn})

          fulcro-parser (mk-fulcro-parser {::p/plugins (conj plugins p/raise-mutation-result-plugin)
                                           :mutate     pt/mutate-fn})

          {:keys [async-reader] :as env} (cond-> env errors? (assoc ::pt/throw-errors? true))]
      (= (catch-run-parser parser env query)
         (catch-run-parser (comp <!! async-parser) (assoc env ::p/reader async-reader) query)
         (catch-run-parser fulcro-parser env query)))))

(test/defspec parser-system {:max-size 18 :num-tests 500} (parser-test-props parser-env))

(defn resolve-fn
  [{{::pc/keys [sym output]
     :as       resolver} ::pc/resolver-data
    :as                  env}
   entity]
  )

(comment
  (def indexes

    (gen/sample
      (s.query/make-gen (gen-connect-index (gen/generate (gen/vector-distinct gen/keyword-ns {:min-elements 8
                                                                                              :max-elements 100})
                                             4))
        ::gen-index)))

  (def simple-index
    (-> {}
        (pc/add 'name {::pc/output [:name]})
        (pc/add 'by-id {::pc/input #{:id} ::pc/output [:color]})))


  (pc/discover-attrs simple-index [:id])

  (gen/sample
    (s.query/make-gen (pcg/gen-connect-query {::pc/indexes simple-index})
      ::s.query/gen-query))

  (tc/quick-check 100
    (props/for-all [query ((s.query/default-gen ::s.query/gen-query))]
      (s/valid? ::s.query/query query))
    :max-size 18)

  (def temp-q '[{:pq5?1:k-YZt:i3!:T:Z76:+! ...}])

  (take 20 (gen/sample-seq (base-gen) 18))

  (parser parser-env (gen/generate (base-gen) 20))
  (fulcro-parser parser-env temp-q)
  (casync/throw-err (<!! (async-parser (assoc parser-env ::p/reader pt/async-reader) temp-q)))

  (catch-run-parser (comp <!! async-parser) (assoc parser-env ::pt/throw-errors? true
                                                              ::p/reader async-reader)
    '[(.?* {})])

  (normalize-mutation-error
    (catch-run-parser parser (assoc parser-env ::pt/throw-errors? true)
      '[(+- {})]))

  (normalize-mutation-error
    (catch-run-parser fulcro-parser (assoc parser-env ::pt/throw-errors? true)
      '[(+- {})]))

  (casync/throw-err (<!! (async-parser-with-err (assoc parser-env ::pt/throw-errors? true
                                                                  ::p/reader async-reader) '[(call/maybe {})])))
  (parser-with-err (assoc parser-env ::pt/throw-errors? true) [:b])
  (fulcro-parser-with-err (assoc parser-env ::pt/throw-errors? true) [:b])

  (let [k :b]
    [(mod (hash k) 2)
     (mod (hash k) 10)])

  (gen/generate (base-gen) 18)

  (time
    (tc/quick-check 300 (parser-test-props parser-env) :max-size 18))

  (let [env   (assoc parser-env ::pt/throw-errors? true)
        query '[(+- {})]
        res   [(catch-run-parser parser env query)
               (catch-run-parser (comp <!! async-parser) (assoc env ::p/reader async-reader) query)
               (catch-run-parser fulcro-parser env query)]]
    (conj res (apply = res)))

  (last (gen/sample (base-gen) 20)))
