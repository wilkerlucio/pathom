(ns com.wsscode.pathom.parser-test
  (:require [clojure.test :refer :all]
            [clojure.core.async :as async :refer [go <! <!!]]
            [com.wsscode.common.async-clj :refer [go-promise]]
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
           {:foo   "bar"
            :async "future-value"
            :aa    :not-found}))))

(def preader
  {:a (fn [_] {::pp/provides #{:a :b}
               ::pp/response (go-promise
                               {:a "aaa" :b {:d 10 :e 40}})})
   :b (fn [env] "foo")
   :c (fn [env] "cfoo")})

(comment
  (let [parser (p/parallel-parser {::p/env {::p/reader [p/map-reader
                                                        preader]}})]
    (async/<!! (parser {} [:a {:b [:d]} :c]))))
