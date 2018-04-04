(ns com.wsscode.pathom.parser-test
  (:require [clojure.test :refer :all]
            [clojure.core.async :as async]
            [com.wsscode.pathom.parser :as pp]
            [com.wsscode.pathom.core :as p]))

(deftest test-parser
  (let [parser (pp/async-parser {:read (fn [{:keys [ast]}]
                                   (case (:key ast)
                                     :foo "bar"
                                     :async (async/go "future-value")
                                     :not-found))})
        parser (fn [env tx]
                 (async/<!! (parser env tx)))]
    (is (= (parser {} [:foo])
           {:foo "bar"}))

    (is (= (parser {} [:foo :async :aa])
           {:foo "bar"
            :async "future-value"
            :aa :not-found}))))

(comment
  [(pp/query->ast (:query (p/query->ast1 [{:foo [:bar]}])))
   (:children (p/query->ast1 [{:foo [:bar]}]))])
