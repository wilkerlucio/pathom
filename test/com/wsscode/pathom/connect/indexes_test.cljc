(ns com.wsscode.pathom.connect.indexes-test
  (:require [clojure.test :refer :all]
            [com.wsscode.pathom.connect.indexes :as pci]
            [com.wsscode.pathom.connect :as pc]))

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
