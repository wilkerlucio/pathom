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
