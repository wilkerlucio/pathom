(ns com.wsscode.pathom.connect.indexes-test
  (:require [clojure.test :refer :all]
            [com.wsscode.pathom.connect.indexes :as pci]
            [com.wsscode.pathom.connect :as pc]
            [edn-query-language.core :as eql]))

(deftest test-resolver-provides
  (is (= (pci/resolver-provides {})
         nil))

  (is (= (pci/resolver-provides {::pc/provides {:foo {}}})
         {:foo {}}))

  (is (= (pci/resolver-provides {::pc/output [:foo]})
         {:foo {}})))

(deftest test-io->query
  (is (= (pci/io->query {})
         []))

  (is (= (pci/io->query {:a {}})
         [:a]))

  (is (= (pci/io->query {:a {} :b {}})
         [:a :b]))

  (is (= (pci/io->query {:a {:b {}}})
         [{:a [:b]}])))

(defn query->ast->io [query]
  (-> query eql/query->ast pci/ast->io))

(deftest test-ast->io
  (is (= (query->ast->io [])
         {}))

  (is (= (query->ast->io [:a])
         {:a {}}))

  (is (= (query->ast->io [:a :b])
         {:a {} :b {}}))

  (is (= (query->ast->io [{:a [:b]}])
         {:a {:b {}}}))

  (is (= (query->ast->io '[{(:a {:param "value"}) [:b]}])
         {:a {:b {}}})))

(deftest test-sub-select-io
  (is (= (pci/sub-select-io {} {})
         {}))

  (is (= (pci/sub-select-io {} {:a {}})
         {}))

  (is (= (pci/sub-select-io {:a {}} {})
         {}))

  (is (= (pci/sub-select-io {:a {}} {:a {}})
         {:a {}}))

  (is (= (pci/sub-select-io {:a {} :b {}} {:a {}})
         {:a {}}))

  (is (= (pci/sub-select-io {:a {} :b {:c {}}} {:b {}})
         {:b {}}))

  (is (= (pci/sub-select-io {:a {} :b {:c {}}} {:b {:c {}}})
         {:b {:c {}}}))

  (is (= (pci/sub-select-io {:a {} :b {}} {:b {:c {}}})
         {:b {}})))

(defn sub-select-ast [eql mask]
  (-> eql
      eql/query->ast
      (pci/sub-select-ast mask)
      eql/ast->query))

(deftest test-sub-select-ast
  (is (= (sub-select-ast [] {})
         []))

  (is (= (sub-select-ast [:foo] {})
         []))

  (is (= (sub-select-ast [] {:foo {}})
         []))

  (is (= (sub-select-ast [:foo] {:foo {}})
         [:foo]))

  (is (= (sub-select-ast '[(:foo {:param "value"})] {:foo {}})
         '[(:foo {:param "value"})]))

  (is (= (sub-select-ast [:foo :bar] {:foo {}})
         [:foo]))

  (is (= (sub-select-ast [{:foo [:baz]} :bar] {:foo {}})
         [:foo]))

  (is (= (sub-select-ast [{:foo [:baz]} :bar] {:foo {:baz {}}})
         [{:foo [:baz]}]))

  (is (= (sub-select-ast [{:foo [:baz :maz]} :bar] {:foo {:baz {}}})
         [{:foo [:baz]}]))

  (is (= (sub-select-ast [{:a1 [:b1 {:b2 [:c1 :c2 {:c3 [:d1 :d2]}]} :b3]} :a2 :a3]
           {:a1 {:b1 {:z {}}
                 :b2 {:c3 {:d2 {}}}}})
         [{:a1 [:b1 {:b2 [{:c3 [:d2]}]}]}])))

(deftest normalize-io-test
  (is (= (pci/normalize-io [])
         {}))

  (is (= (pci/normalize-io [:a])
         {:a {}}))

  (is (= (pci/normalize-io [:a :b])
         {:a {}
          :b {}}))

  (is (= (pci/normalize-io [{:a [:b]}])
         {:a {:b {}}}))

  (is (= (pci/normalize-io [{:a {:x [:b]
                                 :y [:c]}}])
         {:a
          {:b {}
           :c {}
           :com.wsscode.pathom.connect/unions
              {:x {:b {}}
               :y {:c {}}}}})))
