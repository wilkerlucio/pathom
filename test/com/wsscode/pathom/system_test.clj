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
            [com.wsscode.pathom.connect.test :as pct]
            [fulcro.client.primitives :as fp])
  (:import (clojure.lang ExceptionInfo)))

(test/defspec generator-makes-valid-queries {:max-size 15 :num-tests 50}
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

(test/defspec parser-system {:max-size 18 :num-tests 500} (parser-test-props pct/parser-env))

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
      (let [plugins       [p/error-handler-plugin]
            parser        (p/parser {::p/plugins plugins})

            async-parser  (p/async-parser {::p/plugins plugins})

            env           (assoc env ::p/reader [p/map-reader pc/all-readers]
                                     ::pc/indexes index
                                     ::pc/resolver-dispatch resolve-fn)]
        (= (parser env query)
           (<!! (async-parser (assoc env ::p/reader [p/map-reader pc/all-async-readers]
                                         ::pc/resolver-dispatch async-resolve-fn) query)))))))

(test/defspec connect-read {:max-size 10 :num-tests 300} (connect-read-props pct/parser-env))

(comment
  (def indexes

    (gen/generate
      (s.query/make-gen (pcg/gen-connect-index (gen/generate (gen/vector-distinct gen/keyword-ns {:min-elements 8
                                                                                                  :max-elements 50})
                                                 4))
        ::pcg/gen-index)
      15))

  (-> indexes ::pc/index-io (get #{}))

  (def simple-index
    (-> {}
        (pc/add 'name {::pc/output [:name]})
        (pc/add 'by-id {::pc/input #{:id} ::pc/output [:color :height :age :birth]})))

  (pc/discover-attrs simple-index [:id])

  (let [index simple-index]
    (->>
      (gen/sample
        (s.query/make-gen (pcg/gen-connect-query {::pc/indexes index})
          ::s.query/gen-query)
        8)
      (map #(pct/parser (assoc pct/parser-env ::p/reader [p/map-reader pc/all-readers]
                                              ::pc/indexes index
                                              ::pc/resolver-dispatch resolve-fn) %))))

  (gen/sample
    (s.query/make-gen (pcg/gen-connect-query {::pc/indexes indexes})
      ::s.query/gen-query))

  (gen/sample
    (s.query/make-gen (pcg/gen-connect-query {::pc/indexes simple-index})
      ::s.query/gen-query))

  (def temp-q '[{:pq5?1:k-YZt:i3!:T:Z76:+! ...}])

  (take 20 (gen/sample-seq (base-gen) 18))

  (pct/parser pct/parser-env (gen/generate (base-gen) 20))
  (fulcro-parser pct/parser-env temp-q)
  (casync/throw-err (<!! (async-parser (assoc pct/parser-env ::p/reader pt/async-reader) temp-q)))

  (catch-run-parser (comp <!! async-parser) (assoc pct/parser-env ::pt/throw-errors? true
                                                                  ::p/reader async-reader)
    '[(.?* {})])

  (normalize-mutation-error
    (catch-run-parser pct/parser (assoc pct/parser-env ::pt/throw-errors? true)
      '[(+- {})]))

  (normalize-mutation-error
    (catch-run-parser fulcro-parser (assoc pct/parser-env ::pt/throw-errors? true)
      '[(+- {})]))

  (casync/throw-err (<!! (async-parser-with-err (assoc pct/parser-env ::pt/throw-errors? true
                                                                      ::p/reader async-reader) '[(call/maybe {})])))
  (parser-with-err (assoc pct/parser-env ::pt/throw-errors? true) [:b])
  (fulcro-parser-with-err (assoc pct/parser-env ::pt/throw-errors? true) [:b])

  (time
    (tc/quick-check 100 (parser-test-props pct/parser-env) :max-size 18))

  (time
    (tc/quick-check 300 (connect-read-props pct/parser-env) :max-size 10))

  (let [props   (gen/generate (gen/vector-distinct gen/keyword-ns {:min-elements 8
                                                                   :max-elements 50})
                  4)
        indexes (-> (s.query/make-gen (pcg/gen-connect-index props) ::pcg/gen-index)
                    (gen/sample-seq 14)
                    (->> (take 100)))]
    indexes)

  (time
    (let [props (gen/generate (gen/vector-distinct gen/keyword-ns {:min-elements 8
                                                                   :max-elements 50})
                  4)]
      (tc/quick-check 100
        (props/for-all [{:keys [index query]}
                        (gen/let [index (s.query/make-gen (pcg/gen-connect-index props)
                                          ::pcg/gen-index)
                                  query (s.query/make-gen (pcg/gen-connect-query {::pc/indexes index})
                                          ::s.query/gen-query)]
                          {:index index :query query})]
          (let [errors (-> (pct/parser (assoc pct/parser-env ::p/reader [p/map-reader pc/all-readers]
                                                             ::pc/indexes index
                                                             ::pc/resolver-dispatch resolve-fn) query)
                           ::p/errors)]
            (if errors
              (throw (ex-info "Errors on result" {:errors errors}))
              true)))
        :max-size 10)))

  (parser-tolerant (assoc pct/parser-env ::p/reader [p/map-reader pc/all-readers]
                                         ::pc/indexes debug-index,
                                         ::pc/resolver-dispatch resolve-fn)
    '[{[:?0.U._1jwS.l___-/E 0]
       [:*ks
        {:?0.U._1jwS.l___-/E
         [:*ks]}]}])

  (-> debug-index ::pc/index-oir :+*NHO)
  (-> debug-index ::pc/index-oir :cr+3_.aY4.ShA-S.I/oi?PH)

  (binding [*print-namespace-maps* false]
    (clojure.pprint/pprint
      (pc/discover-attrs debug-index [:?0.U._1jwS.l___-/E :*ks :?0.U._1jwS.l___-/E])))

  (binding [*print-namespace-maps* false]
    (clojure.pprint/pprint
      '[#:-B.!6{:!7 [#:-B.!6{:!7 [#:-B.!6{:!7 [:Y*Z4.B-4ci/_]}]}]}]))

  (let [env   (assoc pct/parser-env ::pt/throw-errors? true)
        query '[(+- {})]
        res   [(catch-run-parser pct/parser env query)
               (catch-run-parser (comp <!! async-parser) (assoc env ::p/reader async-reader) query)
               (catch-run-parser fulcro-parser env query)]]
    (conj res (apply = res)))

  (pt/key-ex-value :cr+3_.aY4.ShA-S.I/oi?PH {})

  (let [props (gen/generate (gen/vector-distinct gen/keyword-ns {:min-elements 8
                                                                 :max-elements 50})
                4)]
    (gen/sample (s.query/make-gen (pcg/gen-connect-index props)
                  ::s.query/gen-query) 20)))

(comment
  (def debug-index
    (pc/reprocess-index '{::pc/index-resolvers {+!.+.G/?.!f!         #:com.wsscode.pathom.connect{:sym    +!.+.G/?.!f!,
                                                                                                  :input  #{:?-5_.CF6f/x2tz},
                                                                                                  :output [{:v_-w [:H8+UG.G0.X/O
                                                                                                                   :Bt?.F9.Jm.eM_*1/w
                                                                                                                   :v_-w
                                                                                                                   #:+.L9-I5{:N*8 [:R/fd
                                                                                                                                   :Ao1w/s
                                                                                                                                   :?-5_.CF6f/x2tz
                                                                                                                                   :Bt?.F9.Jm.eM_*1/w]}]}
                                                                                                           :Bt?.F9.Jm.eM_*1/w]},
                                                V2g1.Tj2.sAW.PZ?1/K0 #:com.wsscode.pathom.connect{:sym    V2g1.Tj2.sAW.PZ?1/K0,
                                                                                                  :input  #{:H8+UG.G0.X/O},
                                                                                                  :output [:Ao1w/s
                                                                                                           :Ao1w/s
                                                                                                           :?-5_.CF6f/x2tz]}}})))
