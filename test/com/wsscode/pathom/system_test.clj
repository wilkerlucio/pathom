(ns com.wsscode.pathom.system-test
  (:require [clojure.core.async :refer [go <! <!!]]
            [clojure.test :refer :all]
            [clojure.test.check :as tc]
            [clojure.test.check.generators :as gen]
            [clojure.test.check.properties :as props]
            [clojure.test.check.clojure-test :as test]
            [clojure.spec.alpha :as s]
            [clojure.spec.test.alpha :as s.test]
            [clojure.walk :as walk]
            [com.wsscode.common.async-clj :as casync :refer [go-catch]]
            [com.wsscode.pathom.core :as p]
            [com.wsscode.pathom.connect :as pc]
            [com.wsscode.pathom.connect.gen :as pcg]
            [com.wsscode.pathom.specs.query :as s.query]
            [com.wsscode.pathom.profile :as pp]
            [com.wsscode.pathom.test :as pt]
            [com.wsscode.pathom.connect.test :as pct]
            [fulcro.client.primitives :as fp])
  (:import (clojure.lang ExceptionInfo)))

(s.test/instrument)

(defn valid-queries-props []
  (props/for-all [query (s.query/make-gen
                          {::s.query/gen-params
                           (fn [_]
                             (gen/map gen/keyword-ns gen/simple-type-printable))}
                          ::s.query/gen-query)]
    (s/valid? ::s.query/query query)))

(test/defspec generator-makes-valid-queries {:max-size 15 :num-tests 50} (valid-queries-props))

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

(defn mk-fulcro-parser [{::p/keys [plugins]
                         :keys    [mutate]}]
  (-> (fp/parser {:read   (-> p/pathom-read'
                              (p/apply-plugins plugins ::p/wrap-read)
                              p/wrap-add-path
                              p/wrap-reduce-params)
                  :mutate (p/apply-plugins mutate plugins ::p/wrap-mutate)})
      (p/apply-plugins plugins ::p/wrap-parser)
      p/wrap-normalize-env))

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

(test/defspec parser-system {:max-size 16 :num-tests 500} (parser-test-props pct/parser-env))

(defn resolve-fn
  [{{::pc/keys [output]} ::pc/resolver-data} _]
  (pct/parser (assoc pct/parser-env ::pt/include-nils? false) output))

(defn async-resolve-fn
  [{{::pc/keys [output]} ::pc/resolver-data :as env} _]
  (if (-> env :ast :key (pt/hash-mod? 3))
    (go-catch
      (pct/parser (assoc pct/parser-env ::pt/include-nils? false) output))
    (pct/parser (assoc pct/parser-env ::pt/include-nils? false) output)))

(defn connect-read-props [env]
  (let [props (gen/generate (gen/vector-distinct gen/keyword-ns {:min-elements 8
                                                                 :max-elements 50})
                4)]
    (props/for-all [{:keys [index query]}
                    (gen/let [index (s.query/make-gen (pcg/gen-connect-index props)
                                      ::pcg/gen-index)
                              query (->> (s.query/make-gen (pcg/gen-connect-query {::pc/indexes index})
                                           ::s.query/gen-query)
                                         (gen/fmap p/remove-query-wildcard))]
                      {:index index :query query})]
      (let [plugins      [p/error-handler-plugin]
            parser       (p/parser {::p/plugins plugins})

            async-parser (p/async-parser {::p/plugins plugins})

            env          (assoc env ::p/reader [p/map-reader pc/all-readers]
                                    ::pc/indexes index
                                    ::pc/resolver-dispatch resolve-fn)]
        (= (parser env query)
           (<!! (async-parser (assoc env ::p/reader [p/map-reader pc/all-async-readers]
                                         ::pc/resolver-dispatch async-resolve-fn) query)))))))

(test/defspec connect-read {:max-size 10 :num-tests 300} (connect-read-props pct/parser-env))

(comment
  (gen/sample
    (s.query/make-gen (pcg/gen-connect-query {::pc/indexes indexes})
      ::s.query/gen-query))

  (gen/sample
    (s.query/make-gen (pcg/gen-connect-query {::pc/indexes simple-index})
      ::s.query/gen-query))

  (def temp-q '[{:pq5?1:k-YZt:i3!:T:Z76:+! ...}])

  (take 20 (gen/sample-seq (base-gen) 18))

  (tc/quick-check 50 (valid-queries-props) :max-size 15)

  (time
    (tc/quick-check 300 (parser-test-props pct/parser-env) :max-size 13))

  (binding [*print-namespace-maps* false]
    (clojure.pprint/pprint
      (let [parser (p/parser {::p/plugins []
                              :mutate     pt/mutate-fn})]
        (parser pct/parser-env '[{:NS._U*4*.wu4._K!/z
                                  [{:NS._U*4*.wu4._K!/z {:* [(A {})]}}]}
                                 {:NS._U*4*.wu4._K!/z 1}]))))

  (s/explain :com.wsscode.pathom.specs.ast/node
    '{:children  [{:dispatch-key A
                   :key          A
                   :meta         {:column 62
                                  :line   163}
                   :params       {}
                   :type         :call}]
      :query     [(A {})]
      :type      :union-entry
      :union-key :*})

  (let [{:keys [query plugins errors?]} {:query [#:N3Sq!.+!w?0.j+?_.lG+{:x?d? [:hP0*/dN04E]}], :errors? false, :plugins []}
        env pct/parser-env]
    (let [parser        (p/parser {::p/plugins plugins
                                   :mutate     pt/mutate-fn})

          async-parser  (p/async-parser {::p/plugins plugins
                                         :mutate     pt/mutate-fn})

          fulcro-parser (mk-fulcro-parser {::p/plugins (conj plugins p/raise-mutation-result-plugin)
                                           :mutate     pt/mutate-fn})

          {:keys [async-reader] :as env} (cond-> env errors? (assoc ::pt/throw-errors? true))]
      [(catch-run-parser parser env query)
       (catch-run-parser (comp <!! async-parser) (assoc env ::p/reader async-reader) query)
       (catch-run-parser fulcro-parser env query)]))

  (pt/key-ex-value :hP0*/dN04E {})

  (time
    (tc/quick-check 300 (connect-read-props pct/parser-env) :max-size 10))

  (let [props   (gen/generate (gen/vector-distinct gen/keyword-ns {:min-elements 8
                                                                   :max-elements 50})
                  4)
        indexes (-> (s.query/make-gen (pcg/gen-connect-index props) ::pcg/gen-index)
                    (gen/sample-seq 14)
                    (->> (take 100)))]
    indexes)

  (let [props (gen/generate (gen/vector-distinct gen/keyword-ns {:min-elements 8
                                                                 :max-elements 50})
                4)]
    (gen/sample (s.query/make-gen (pcg/gen-connect-index props)
                  ::s.query/gen-query) 20)))

(comment
  (def debug-index
    (pc/reprocess-index '{::pc/index-resolvers {}})))
