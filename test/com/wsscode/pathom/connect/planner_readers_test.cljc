(ns com.wsscode.pathom.connect.planner-readers-test
  (:require [clojure.test :refer :all]
            [com.wsscode.pathom.connect :as pc]
            [com.wsscode.pathom.connect.foreign :as pcf]
            [com.wsscode.pathom.connect.planner :as pcp]
            [com.wsscode.pathom.core :as p]
            [com.wsscode.pathom.sugar :as ps]
            [com.wsscode.pathom.test-helpers :as th]))

(defn run-parser [{::keys [resolvers query entity foreign]}]
  (let [parser (ps/connect-serial-parser
                 (cond-> {::ps/connect-reader pc/reader3}
                   foreign
                   (assoc ::ps/foreign-parsers
                     (mapv
                       (fn [{::keys [resolvers]}]
                         (ps/connect-serial-parser {::ps/connect-reader pc/reader3} resolvers))
                       foreign)))
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

  (testing "ident query"
    (is (= (run-parser
             {::resolvers [(pc/single-attr-resolver :b :c #(str % "-C"))]
              ::query     [{[:b "boo"] [:c]}]})
           {[:b "boo"] {:c "boo-C"}})))

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
  (testing "integration with local parser"
    (testing "local dependency first"
      (is (= (run-parser
               {::resolvers [(pc/constantly-resolver :b "boo")]
                ::foreign   [{::resolvers [(pc/single-attr-resolver :b :c #(str % "-C"))]}]
                ::query     [:c]})
             {:c "boo-C"}))

      (is (= (run-parser
               {::resolvers [(pc/constantly-resolver :b "boo")]
                ::foreign   [{::resolvers [(pc/single-attr-resolver :b :c #(str % "-C"))]}
                             {::resolvers [(pc/single-attr-resolver :c :d #(str % "-D"))]}]
                ::query     [:d]})
             {:d "boo-C-D"})))

    (testing "foreign dependency first"
      (is (= (run-parser
               {::resolvers [(pc/single-attr-resolver :b :c #(str % "-C"))]
                ::foreign   [{::resolvers [(pc/constantly-resolver :b "boo")]}]
                ::query     [:c]})
             {:c "boo-C"})))))

(deftest test-compute-foreign-query
  (testing "no inputs"
    (is (= (pcf/compute-foreign-query {::pcp/node {::pcp/requires {:a {}}}})
           {::pcf/base-query [:a]
            ::pcf/query      [:a]})))

  (testing "inputs, but no parent ident"
    (is (= (pcf/compute-foreign-query {::pcp/node {::pcp/requires {:a {}}
                                                   ::pcp/input    {:z {}}}
                                       ::p/entity {:z "bar"}})
           {::pcf/base-query [:a]
            ::pcf/query      '[{([::pcf/foreign-call nil] {:pathom/context {:z "bar"}}) [:a]}]
            ::pcf/join-node  [::pcf/foreign-call nil]})))

  (testing "inputs, with parent ident"
    (is (= (pcf/compute-foreign-query {::pcp/node {::pcp/requires {:a {}}
                                                   ::pcp/input    {:z {}}}
                                       ::p/path   [[:z "bar"] :a]
                                       ::p/entity {:z "bar"}})
           {::pcf/base-query [:a]
            ::pcf/query      '[{([:z "bar"] {:pathom/context {}}) [:a]}]
            ::pcf/join-node  [:z "bar"]}))))
