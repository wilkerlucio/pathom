(ns com.wsscode.pathom.connect.run-graph-readers-test
  (:require [clojure.test :refer :all]
            [com.wsscode.pathom.connect :as pc]
            [com.wsscode.pathom.sugar :as ps]
            [com.wsscode.pathom.core :as p]
            [com.wsscode.pathom.test-helpers :as th]))

(defn run-parser [{::keys [resolvers query entity]}]
  (let [parser (ps/connect-serial-parser
                 {::ps/connect-reader pc/reader3}
                 resolvers)]
    (parser (cond-> {}
              entity (assoc ::p/entity (atom entity)))
      query)))

(deftest test-runner3
  (testing "single attribute"
    (is (= (run-parser
             {::resolvers [(pc/constantly-resolver :a 42)]
              ::query     [:a]})
           {:a 42}))

    (testing "missed output"
      (is (= (run-parser
               {::resolvers [(pc/resolver 'a
                               {::pc/output [:a]}
                               (fn [_ _] {}))]
                ::query     [:a]})
             {:a ::p/not-found})))

    (testing "don't call when data is already available"
      (is (= (run-parser
               {::resolvers [(pc/constantly-resolver :a 42)]
                ::entity    {:a "value"}
                ::query     [:a]})
             {:a "value"})))

    (testing "resolver error"
      (is (= (run-parser
               {::resolvers [(pc/resolver 'a
                               {::pc/output [:a]}
                               (fn [_ _] (throw (ex-info "Error" {:error "detail"}))))]
                ::query     [:a]})
             {:a                              :com.wsscode.pathom.core/reader-error
              :com.wsscode.pathom.core/errors {[:a] "class clojure.lang.ExceptionInfo: Error - {:error \"detail\"}"}})))

    (testing "invalid response"
      (is (= (run-parser
               {::resolvers [(pc/resolver 'a
                               {::pc/output [:a]}
                               (fn [_ _] 42))]
                ::query     [:a]})
             {:a                              :com.wsscode.pathom.core/reader-error,
              :com.wsscode.pathom.core/errors {[:a] "class clojure.lang.ExceptionInfo: Invalid resolve response - #:com.wsscode.pathom.parser{:response-value 42}"}}))))

  (testing "multiple attributes on the same resolver"
    (is (= (run-parser
             {::resolvers [(pc/resolver 'a
                             {::pc/output [:a :b]}
                             (fn [_ _] {:a 42 :b "foo"}))]
              ::query     [:a :b]})
           {:a 42
            :b "foo"})))

  (testing "and branches"
    (is (= (run-parser
             {::resolvers [(pc/constantly-resolver :a 42)
                           (pc/constantly-resolver :b "boo")]
              ::query     [:a :b]})
           {:a 42
            :b "boo"})))

  (testing "or branches"
    (is (= (run-parser
             {::resolvers [(assoc (pc/constantly-resolver :a 42)
                             ::pc/sym 'a)
                           (assoc (pc/constantly-resolver :a 44)
                             ::pc/sym 'a2)]
              ::query     [:a]})
           {:a 42}))

    (testing "missed output"
      (is (= (run-parser
               {::resolvers [[(pc/resolver 'a
                                {::pc/output [:a]}
                                (fn [_ _] {}))]
                             (assoc (pc/constantly-resolver :a 44)
                               ::pc/sym 'a2)]
                ::query     [:a]})
             {:a 44}))))

  (testing "chained call"
    (is (= (run-parser
             {::resolvers [(pc/constantly-resolver :a 42)
                           (pc/single-attr-resolver :a :b str)]
              ::query     [:b]})
           {:b "42"}))

    (testing "skip resolver call when all require attributes are available"
      (let [mock (th/mock)]
        (is (= (run-parser
                 {::resolvers [(pc/resolver 'a
                                 {::pc/output [:a]}
                                 (fn [_ _] {:a "ready" :b "foo"}))
                               (pc/resolver 'ab
                                 {::pc/input  #{:a}
                                  ::pc/output [:b]}
                                 (comp (constantly {:b "bar"}) mock))]
                  ::query     [:b]})
               {:b "foo"}))
        (is (= @mock [])))

      (let [mock (th/mock)]
        (is (= (run-parser
                 {::resolvers [(pc/resolver 'a
                                 {::pc/output [:a]}
                                 (fn [_ _] {:a "ready" :b "foo"}))
                               (pc/resolver 'b
                                 {::pc/input  #{:a}
                                  ::pc/output [:b]}
                                 (comp (constantly {}) mock))
                               (pc/single-attr-resolver :b :c #(str % "-C"))]
                  ::query     [:c]})
               {:c "foo-C"}))
        (is (= @mock []))))))

(deftest test-runner3-dynamic-resolvers
  (testing ""
    (is (= (run-parser
             {::resolvers [(pc/constantly-resolver :a 42)
                           (pc/single-attr-resolver :b :c #(str % "-C"))]
              ::query     [:c]})))))
