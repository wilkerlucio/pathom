(ns com.wsscode.pathom.parser-test
  (:require [clojure.test :refer :all]
            [clojure.core.async :as async :refer [go <! <!!]]
            [#?(:clj  com.wsscode.common.async-clj
                :cljs com.wsscode.common.async-cljs) :refer [go-promise]]
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
  {:a (fn [_]
        {::pp/provides        #{:a :b}
         ::pp/response-stream (let [chan (async/chan 10)]
                                (go
                                  (<! (async/timeout 200))
                                  (async/put! chan
                                    {::pp/provides       #{:a}
                                     ::pp/response-value {:a "aaa"}})

                                  (<! (async/timeout 400))

                                  (async/put! chan
                                    {::pp/provides       #{:b}
                                     ::pp/response-value {:b {:d 10 :e 40}}})

                                  (async/close! chan))
                                chan)})
   :c (fn [env] (p/join {:foo "cfoo"} env))
   :y (fn [env]
        {::pp/provides        #{:y}
         ::pp/response-stream (go
                                (let [b (<! (p/entity-attr env :b))]
                                  {::pp/provides       #{:y}
                                   ::pp/response-value {:y (str "res - " b)}}))})
   :z (fn [env]
        {::pp/provides        #{:z}
         ::pp/response-stream (go
                                (let [a (<! (p/entity-attr env :a))]
                                  (<! (async/timeout 300))
                                  {::pp/provides       #{:z}
                                   ::pp/response-value {:z (str "res - " a)}}))})})

(comment
  (doseq [n [[1 2] [3 4 5] nil [4 5]]
          m n]
    (println n m))

  (time
    (let [parser (p/parallel-parser {::p/env {::p/reader [p/map-reader
                                                          preader]}})]
      (async/<!! (parser {} [:a :b {:c [:a]} :z :y])))))
