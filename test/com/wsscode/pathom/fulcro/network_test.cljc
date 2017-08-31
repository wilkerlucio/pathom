(ns com.wsscode.pathom.fulcro.network-test
  (:require [clojure.test :refer :all]
            [com.wsscode.pathom.fulcro.network :as pfn]))

(deftest group-mergeable-requests-test
  (is (= (pfn/group-mergeable-requests [[[:a] :ok :err]])
         [[[:a] [:ok] [:err]]])))
