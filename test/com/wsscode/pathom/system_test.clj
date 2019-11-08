(ns com.wsscode.pathom.system-test
  (:require [clojure.core.async :refer [go <! <!!]]
            [clojure.spec.alpha :as s]
            [clojure.spec.test.alpha :as s.test]
            [clojure.test :refer :all]
            [clojure.test.check :as tc]
            [clojure.test.check.clojure-test :as test]
            [clojure.test.check.generators :as gen]
            [clojure.test.check.properties :as props]
            [clojure.walk :as walk]
            [com.wsscode.common.async-clj :as casync :refer [go-catch]]
            [com.wsscode.pathom.connect :as pc]
            [com.wsscode.pathom.connect.gen :as pcg]
            [com.wsscode.pathom.connect.test :as pct]
            [com.wsscode.pathom.core :as p]
            [com.wsscode.pathom.profile :as pp]
            [com.wsscode.pathom.test :as pt]
            [edn-query-language.core :as eql]
            [fulcro.client.primitives :as fp])
  (:import (clojure.lang ExceptionInfo)))

; (s.test/instrument)

(defn valid-queries-props []
  (props/for-all [query (eql/make-gen
                          {::eql/gen-params
                           (fn [_]
                             (gen/map gen/keyword-ns gen/simple-type-printable))}
                          ::eql/gen-query)]
    (s/valid? ::eql/query query)))

(test/defspec generator-makes-valid-queries {:max-size 12 :num-tests 50} (valid-queries-props))

(comment
  (tc/quick-check 50 (valid-queries-props) :max-size 12))

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
   (gen/let [query         (eql/make-gen {::eql/gen-property
                                              (fn [_] (gen/elements props))

                                              ::eql/gen-params
                                              (fn [_] (gen/map gen/keyword gen/simple-type-printable {:max-elements 3}))}
                             ::eql/gen-query)
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
    (let [plugins       (mapv (comp deref resolve) plugins)
          parser        (p/parser {::p/plugins plugins
                                   :mutate     pt/mutate-fn})

          async-parser  (p/async-parser {::p/plugins plugins
                                         :mutate     pt/mutate-fn})

          {:keys [async-reader] :as env} (cond-> env errors? (assoc ::pt/throw-errors? true))]
      (= (catch-run-parser parser env query)
         (catch-run-parser (comp <!! async-parser) (assoc env ::p/reader async-reader) query)))))

(test/defspec parser-system {:max-size 12 :num-tests 100} (parser-test-props pct/parser-env))

(comment
  (tc/quick-check 100 (parser-test-props pct/parser-env) :max-size 12))

(defn connect-read-props [env]
  (let [props (gen/generate (gen/vector-distinct gen/keyword-ns {:min-elements 8
                                                                 :max-elements 50})
                4)]
    (props/for-all [{:keys [index query]}
                    (gen/let [index (eql/make-gen (pcg/gen-connect-index props)
                                      ::pcg/gen-index)
                              query (->> (eql/make-gen (pcg/gen-connect-query {::pc/indexes index})
                                           ::eql/gen-query)
                                         (gen/fmap p/remove-query-wildcard))]
                      {:index index :query query})]
      (let [plugins      [p/error-handler-plugin]
            parser       (p/parser {::p/plugins plugins})

            async-parser (p/async-parser {::p/plugins plugins})

            env          (assoc env ::p/reader [p/map-reader pc/all-readers]
                                    ::pc/indexes index
                                    ::pc/resolver-dispatch pct/resolve-fn)]
        (= (parser env query)
           (<!! (async-parser (assoc env ::p/reader [p/map-reader pc/all-async-readers]
                                         ::pc/resolver-dispatch pct/async-resolve-fn) query)))))))

#_
(test/defspec connect-read {:max-size 10 :num-tests 100} (connect-read-props pct/parser-env))

(comment
  (tc/quick-check 100 (connect-read-props pct/parser-env) :max-size 10))

(defn connect-read-planned-props [env]
  (let [props (gen/generate (gen/vector-distinct gen/keyword-ns {:min-elements 8
                                                                 :max-elements 50})
                4)]
    (props/for-all [{:keys [index query]}
                    (gen/let [index (eql/make-gen (pcg/gen-connect-index props)
                                      ::pcg/gen-index)
                              query (->> (eql/make-gen (pcg/gen-connect-query {::pc/indexes index})
                                           ::eql/gen-query)
                                         (gen/fmap p/remove-query-wildcard))]
                      {:index index :query query})]
      (let [plugins         [p/error-handler-plugin]
            parser          (p/parser {::p/plugins plugins})
            async-parser    (p/async-parser {::p/plugins plugins})
            parallel-parser (p/parallel-parser {::p/plugins plugins})

            env             (assoc env ::p/reader [p/map-reader pc/all-readers]
                                       ::pc/indexes index
                                       ::pc/resolver-dispatch pct/resolve-fn)]
        (= (parser (assoc env ::p/reader [p/map-reader pc/reader2 pc/ident-reader]) query)

           (<!! (async-parser (assoc env ::p/reader [p/map-reader pc/async-reader2 pc/ident-reader]
                                         ::pc/resolver-dispatch pct/async-resolve-fn) query))

           (<!! (parallel-parser (assoc env ::p/reader [p/map-reader pc/all-parallel-readers]
                                            ::pc/resolver-dispatch pct/async-resolve-fn) query)))))))

#_(test/defspec connect-read-planned {:max-size 10 :num-tests 100} (connect-read-planned-props pct/parser-env))

(comment
  (tc/quick-check 100 (connect-read-planned-props pct/parser-env) :max-size 10))

(comment
  (let [props     (gen/generate (gen/vector-distinct gen/keyword-ns {:min-elements 8
                                                                     :max-elements 100})
                    4)
        query-gen (eql/make-gen {::eql/gen-property
                                     (fn [_] (gen/elements props))

                                     ::eql/gen-params
                                     (fn [_] (gen/map gen/keyword gen/simple-type-printable {:max-elements 3}))}
                    ::eql/gen-query)
        queries   (take 20 (gen/sample-seq query-gen 16))]
    (def queries queries))

  (let [env          pct/parser-env
        plugins      [pp/profile-plugin]
        parser       (p/parser {::p/plugins plugins
                                :mutate     pt/mutate-fn})

        async-parser (p/async-parser {::p/plugins plugins
                                      :mutate     pt/mutate-fn})
        {:keys [async-reader] :as env} env]

    (doseq [query queries]
      (parser env query))

    #_(criterium/with-progress-reporting
        (criterium/bench
          (doseq [query queries]
            #_(parser env query)
            ((comp <!! async-parser) (assoc env ::p/reader async-reader) query)))))

  (time
    (clojure.test/test-vars [#'profile-speed]))

  (criterium/with-progress-reporting
    (criterium/bench
      (clojure.test/test-vars [#'profile-speed]))))

(comment
  (tc/quick-check 100 (connect-read-props-planned pct/parser-env) :max-size 10))

(comment

  (gen/sample
    (eql/make-gen (pcg/gen-connect-query {::pc/indexes indexes})
      ::eql/gen-query))

  (gen/sample
    (eql/make-gen (pcg/gen-connect-query {::pc/indexes simple-index})
      ::eql/gen-query))

  (def temp-q '[{:pq5?1:k-YZt:i3!:T:Z76:+! ...}])

  (take 20 (gen/sample-seq (base-gen) 18))

  (tc/quick-check 50 (valid-queries-props) :max-size 15)

  (time
    (tc/quick-check 100 (parser-test-props pct/parser-env) :max-size 12))

  (binding [*print-namespace-maps* false]
    (clojure.pprint/pprint
      (let [parser (p/parser {::p/plugins []
                              :mutate     pt/mutate-fn})]
        (parser pct/parser-env '[{:UZ+8
                                  [{[:A 0] 1}
                                   {(* {}) [(A {})]}]}]))))

  (let [{:keys [query plugins errors?]} '{:query [#:Z{:h 1} #:Z{:h []}], :errors? false, :plugins []}
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
    (tc/quick-check 300 (connect-smart-read-props pct/parser-env) :max-size 10))

  (let [{:keys [index query]} '{:index
                                       {:com.wsscode.pathom.connect/index-resolvers
                                                                           {A/*
                                                                            {:com.wsscode.pathom.connect/sym A/*,
                                                                             :com.wsscode.pathom.connect/input #{:y3/M},
                                                                             :com.wsscode.pathom.connect/output [:!lC/Or]},
                                                                            A0/*
                                                                            {:com.wsscode.pathom.connect/sym A0/*,
                                                                             :com.wsscode.pathom.connect/input #{:N/e.},
                                                                             :com.wsscode.pathom.connect/output [{:!lC/Or [:-YD/*?]}]},
                                                                            A/A
                                                                            {:com.wsscode.pathom.connect/sym A/A,
                                                                             :com.wsscode.pathom.connect/input #{:-YD/*?},
                                                                             :com.wsscode.pathom.connect/output [:y3/M :N/e.]}},
                                        :com.wsscode.pathom.connect/index-io
                                                                           {#{:y3/M} {:!lC/Or {}},
                                                                            #{:N/e.} {:!lC/Or {:-YD/*? {}}},
                                                                            #{:-YD/*?} {:y3/M {}, :N/e. {}}},
                                        :com.wsscode.pathom.connect/index-oir
                                                                           {:!lC/Or {#{:y3/M} #{A/*}, #{:N/e.} #{A0/*}},
                                                                            :y3/M {#{:-YD/*?} #{A/A}},
                                                                            :N/e. {#{:-YD/*?} #{A/A}}},
                                        :com.wsscode.pathom.connect/idents #{:N/e. :-YD/*? :y3/M}},
                                :query [{[:N/e. 0] [{:!lC/Or [{[:-YD/*? 0] [{:!lC/Or [*]}]}]}]}]}
        env pct/parser-env
        plugins      [p/error-handler-plugin]
        parser       (p/parser {::p/plugins plugins})
        async-parser (p/async-parser {::p/plugins plugins})
        parallel-parser (p/parallel-parser {::p/plugins plugins})

        env          (assoc env ::p/reader [p/map-reader pc/all-readers]
                                ::pc/indexes index
                                ::pc/resolver-dispatch pct/resolve-fn)

        res [(parser env query)
             (<!! (async-parser (assoc env ::p/reader [p/map-reader pc/all-async-readers]
                                           ::pc/resolver-dispatch pct/async-resolve-fn) query))

             (parser (assoc env ::p/reader [p/map-reader pc/reader2 pc/ident-reader]) query)

             (<!! (async-parser (assoc env ::p/reader [p/map-reader pc/async-reader2 pc/ident-reader]
                                           ::pc/resolver-dispatch pct/async-resolve-fn) query))

             (<!! (parallel-parser (assoc env ::p/reader [p/map-reader pc/all-parallel-readers]
                                              ::pc/resolver-dispatch pct/async-resolve-fn) query))]]
    [(apply = res) (map vector
                     res
                     ["reader" "async-reader" "reader2" "async-reader2" "parallel-reader"])])

  (pt/key-ex-value :CE?/W27 pct/parser-env)
  (let [props   (gen/generate (gen/vector-distinct gen/keyword-ns {:min-elements 8
                                                                   :max-elements 50})
                  4)
        indexes (-> (eql/make-gen (pcg/gen-connect-index props) ::pcg/gen-index)
                    (gen/sample-seq 14)
                    (->> (take 100)))]
    indexes)

  (let [props (gen/generate (gen/vector-distinct gen/keyword-ns {:min-elements 8
                                                                 :max-elements 50})
                4)]
    (gen/sample (eql/make-gen (pcg/gen-connect-index props)
                  ::eql/gen-query) 20)))

(comment
  (def debug-index
    (pc/reprocess-index '{::pc/index-resolvers {}})))
