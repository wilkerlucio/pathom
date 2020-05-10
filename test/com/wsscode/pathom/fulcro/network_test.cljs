(ns com.wsscode.pathom.fulcro.network-test
  (:require
    [clojure.test :refer [is are testing]]
    [com.wsscode.pathom.fulcro.network :as pfn]
    [nubank.workspaces.core :refer [deftest]]))

(deftest group-mergeable-requests-test
  (is (= (pfn/group-mergeable-requests [])
         []))

  (is (= (pfn/group-mergeable-requests [[[:a] :ok :err]])
         [{::pfn/query [:a] ::pfn/ok [:ok] ::pfn/err [:err]}]))

  (is (= (pfn/group-mergeable-requests [[[:a] :ok1 :err1]
                                        [[:b] :ok2 :err2]])
         [{::pfn/query [:a :b] ::pfn/ok [:ok1 :ok2] ::pfn/err [:err1 :err2]}]))

  (is (= (pfn/group-mergeable-requests [[[:a] :ok1 :err1]
                                        [['(:b {:x 0})] :ok2 :err2]
                                        [['(:b {:x 1})] :ok3 :err3]
                                        [[:c] :ok4 :err4]])
         [{::pfn/query [:a '(:b {:x 0}) :c] ::pfn/ok [:ok1 :ok2 :ok4] ::pfn/err [:err1 :err2 :err4]}
          {::pfn/query ['(:b {:x 1})] ::pfn/ok [:ok3] ::pfn/err [:err3]}])))
