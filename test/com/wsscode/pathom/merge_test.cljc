(ns com.wsscode.pathom.merge-test
  (:require [clojure.test :refer :all]
            [com.wsscode.pathom.merge :as pm]))

(deftest test-merge-queries
  (is (= (pm/merge-queries [] [])
         []))

  (is (= (pm/merge-queries [:a] [])
         [:a]))

  (is (= (pm/merge-queries [:a] [:a])
         [:a]))

  (is (= (pm/merge-queries [:a] [:b])
         [:a :b]))

  (is (= (pm/merge-queries [:a] [:b :c :d])
         [:a :b :c :d]))

  (is (= (pm/merge-queries [[:u/id 1]] [[:u/id 2]])
         [[:u/id 1] [:u/id 2]]))

  (is (= (pm/merge-queries [{:user [:name]}] [{:user [:email]}])
         [{:user [:name :email]}]))

  (testing "don't merge queries with different params"
    (is (= (pm/merge-queries ['({:user [:name]} {:login "u1"})]
                             ['({:user [:email]} {:login "u2"})])
           nil)))

  (testing "merge when params are same"
    (is (= (pm/merge-queries ['({:user [:name]} {:login "u1"})]
                             ['({:user [:email]} {:login "u1"})])
           ['({:user [:name :email]} {:login "u1"})])))

  (testing "calls can't be merged when same name occurs"
    (is (= (pm/merge-queries ['(hello {:login "u1"})]
                             ['(hello {:bla "2"})])
           nil)))

  (testing "even when parameters are the same"
    (is (= (pm/merge-queries ['(hello {:login "u1"})]
                             ['(hello {:login "u1"})])
           nil))))
