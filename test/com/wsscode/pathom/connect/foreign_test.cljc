(ns com.wsscode.pathom.connect.foreign-test
  (:require [clojure.test :refer [deftest is are run-tests testing]]
            [com.wsscode.pathom.connect :as pc]
            [com.wsscode.pathom.connect.foreign :as pcf]
            [com.wsscode.pathom.connect.planner :as pcp]
            [com.wsscode.pathom.core :as p]
            [edn-query-language.core :as eql]))

(deftest remove-internal-keys-test
  (is (= (pcf/remove-internal-keys {:foo                   "bar"
                                    :com.wsscode/me        "value"
                                    :com.wsscode.pathom/me "value"})
         {:foo            "bar"
          :com.wsscode/me "value"})))

(deftest parser-indexes-test
  (let [idx {::pc/index-oir       {::pc/indexes {}
                                   :user/thing  {}}
             ::pc/index-resolvers {`pc/indexes-resolver {}}}]
    (is (= (pcf/parser-indexes (fn [_ _] {::pc/indexes idx}))
           {::pc/index-oir       {:user/thing {}}
            ::pc/index-resolvers {}
            ::pc/index-mutations {}}))))

(deftest compute-foreign-query-test
  (testing "no inputs"
    (is (= (pcf/compute-foreign-query {::pcp/node {::pcp/foreign-ast (eql/query->ast [:a])}})
           {::pcf/base-query [:a]
            ::pcf/query      [:a]})))

  (testing "inputs, but no parent ident, single attribute always goes as ident"
    (is (= (pcf/compute-foreign-query {::pcp/node {::pcp/foreign-ast (eql/query->ast [:a])
                                                   ::pcp/input       {:z {}}}
                                       ::p/entity {:z "bar"}})
           {::pcf/base-query [:a]
            ::pcf/query      '[{([:z "bar"] {:pathom/context {}}) [:a]}]
            ::pcf/join-node  [:z "bar"]})))

  (testing "inputs, with parent ident"
    (is (= (pcf/compute-foreign-query {::pcp/node {::pcp/foreign-ast (eql/query->ast [:a])
                                                   ::pcp/input       {:z {}}}
                                       ::p/path   [[:z "bar"] :a]
                                       ::p/entity {:z "bar"}})
           {::pcf/base-query [:a]
            ::pcf/query      '[{([:z "bar"] {:pathom/context {}}) [:a]}]
            ::pcf/join-node  [:z "bar"]})))

  (testing "inputs, with parent ident"
    (is (= (pcf/compute-foreign-query {::pcp/node {::pcp/foreign-ast (eql/query->ast [:a])
                                                   ::pcp/input       {:z {}}}
                                       ::p/path   [[:z "bar"] :a]
                                       ::p/entity {:z "bar"}})
           {::pcf/base-query [:a]
            ::pcf/query      '[{([:z "bar"] {:pathom/context {}}) [:a]}]
            ::pcf/join-node  [:z "bar"]}))

    (testing "with multiple inputs"
      (is (= (pcf/compute-foreign-query {::pcp/node {::pcp/foreign-ast (eql/query->ast [:a])
                                                     ::pcp/input       {:x {}
                                                                        :z {}}}
                                         ::p/path   [[:z "bar"] :a]
                                         ::p/entity {:x "foo"
                                                     :z "bar"}})
             {::pcf/base-query [:a]
              ::pcf/query      '[{([:z "bar"] {:pathom/context {:x "foo"}}) [:a]}]
              ::pcf/join-node  [:z "bar"]})))))

(deftest internalize-foreign-errors-test
  (is (= (pcf/internalize-foreign-errors {::p/path [:a]}
                                         {[:a] "error"})
         {[:a] "error"}))

  (is (= (pcf/internalize-foreign-errors {::p/path [:x :y :a]}
                                         {[:a]    "error"
                                          [:b :c] "error 2"})
         {[:x :y :a]    "error"
          [:x :y :b :c] "error 2"}))

  (is (= (pcf/internalize-foreign-errors {::p/path        [:x :y :a]
                                          ::pcf/join-node [:z "foo"]}
                                         {[[:z "foo"] :a]    "error"
                                          [[:z "foo"] :b :c] "error 2"})
         {[:x :y :a]    "error"
          [:x :y :b :c] "error 2"})))
