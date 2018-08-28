(ns com.wsscode.pathom.parser-test
  (:require [clojure.test :refer [deftest is testing]]
            [clojure.core.async :as async :refer [go <! <!!]]
            [com.wsscode.common.async-clj :refer [go-promise]]
            [com.wsscode.pathom.parser :as pp]
            [com.wsscode.pathom.core :as p]
            [com.wsscode.pathom.connect :as pc]
            [com.wsscode.pathom.trace :as pt]))

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

(defn r-ab-quick [_]
  {::pp/provides        #{:a :b}
   ::pp/response-stream (go
                          {::pp/provides       #{:a :b}
                           ::pp/response-value {:a 1 :b 2}})})

(defn r-provide-miss [_]
  {::pp/provides        #{:a}
   ::pp/response-stream (go
                          {::pp/provides       #{:a}
                           ::pp/response-value {}})})

(defn r-async [_]
  (go :done))

(def pparser (p/parallel-parser {}))

(defn quick-reader
  ([reader] (quick-reader {} reader))
  ([env reader] (assoc env ::p/reader [p/map-reader reader])))

(defn comparable-trace [trace]
  (mapv #(dissoc % ::pt/timestamp ::pt/id) trace))

(defonce trace (atom []))

(comment
  (comparable-trace @trace))

(deftest test-parallel-parser
  (testing "returns blank channel on response"
    (is (= (<!! (pparser {} [])) {})))

  (testing "simple return"
    (reset! trace [])
    (is (= (<!! (pparser (quick-reader {::pt/trace* trace} (constantly "HO!"))
                  [:a]))
           {:a "HO!"}))
    (is (= (comparable-trace @trace)
           [{:com.wsscode.pathom.core/path       []
             :com.wsscode.pathom.trace/direction :com.wsscode.pathom.trace/enter
             :com.wsscode.pathom.trace/event     :com.wsscode.pathom.parser/parse-loop}
            {:com.wsscode.pathom.core/path   []
             :com.wsscode.pathom.trace/event :com.wsscode.pathom.parser/process-key
             :key                            :a}
            {:com.wsscode.pathom.core/path   []
             :com.wsscode.pathom.trace/event :com.wsscode.pathom.parser/call-read
             :key                            :a}
            {:com.wsscode.pathom.core/path   []
             :com.wsscode.pathom.trace/event :com.wsscode.pathom.parser/value-return
             :key                            :a}
            {:com.wsscode.pathom.core/path       []
             :com.wsscode.pathom.trace/direction :com.wsscode.pathom.trace/leave
             :com.wsscode.pathom.trace/event     :com.wsscode.pathom.parser/parse-loop}])))

  (testing "async return"
    (reset! trace [])
    (is (= (<!! (pparser (quick-reader {::pt/trace* trace} {:a r-async})
                  [:a]))
           {:a :done}))
    (is (= (comparable-trace @trace)
           [{:com.wsscode.pathom.core/path       []
             :com.wsscode.pathom.trace/direction :com.wsscode.pathom.trace/enter
             :com.wsscode.pathom.trace/event     :com.wsscode.pathom.parser/parse-loop}
            {:com.wsscode.pathom.core/path   []
             :com.wsscode.pathom.trace/event :com.wsscode.pathom.parser/process-key
             :key                            :a}
            {:com.wsscode.pathom.core/path   []
             :com.wsscode.pathom.trace/event :com.wsscode.pathom.parser/call-read
             :key                            :a}
            {:com.wsscode.pathom.core/path   []
             :com.wsscode.pathom.trace/event :com.wsscode.pathom.parser/async-return
             :key                            :a}
            {:com.wsscode.pathom.core/path             []
             :com.wsscode.pathom.parser/merge-result?  true
             :com.wsscode.pathom.parser/provides       #{:a}
             :com.wsscode.pathom.parser/response-value {:a :done}
             :com.wsscode.pathom.trace/event           :com.wsscode.pathom.parser/process-pending}
            {:com.wsscode.pathom.core/path       []
             :com.wsscode.pathom.trace/direction :com.wsscode.pathom.trace/leave
             :com.wsscode.pathom.trace/event     :com.wsscode.pathom.parser/parse-loop}])))

  (testing "provides return"
    (reset! trace [])
    (is (= (<!! (pparser (quick-reader {::pt/trace* trace} {:a r-ab-quick :b r-ab-quick})
                  [:a :b]))
           {:a 1 :b 2}))
    (is (= (comparable-trace @trace)
           [{:com.wsscode.pathom.trace/event     :com.wsscode.pathom.parser/parse-loop
             :com.wsscode.pathom.trace/direction :com.wsscode.pathom.trace/enter
             :com.wsscode.pathom.core/path       []}
            {:key :a :com.wsscode.pathom.trace/event :com.wsscode.pathom.parser/process-key :com.wsscode.pathom.core/path []}
            {:key :a :com.wsscode.pathom.trace/event :com.wsscode.pathom.parser/call-read :com.wsscode.pathom.core/path []}
            {:com.wsscode.pathom.trace/event     :com.wsscode.pathom.parser/provided-return
             :com.wsscode.pathom.parser/provides #{:b :a}
             :com.wsscode.pathom.core/path       []}
            {:key :b :com.wsscode.pathom.trace/event :com.wsscode.pathom.parser/process-key :com.wsscode.pathom.core/path []}
            {:key :b :com.wsscode.pathom.trace/event :com.wsscode.pathom.parser/skip-wait-key :com.wsscode.pathom.core/path []}
            {:com.wsscode.pathom.trace/event           :com.wsscode.pathom.parser/process-pending
             :com.wsscode.pathom.parser/provides       #{:b :a}
             :com.wsscode.pathom.parser/merge-result?  false
             :com.wsscode.pathom.core/path             []
             :com.wsscode.pathom.parser/response-value {:a 1 :b 2}}
            {:key :b :com.wsscode.pathom.trace/event :com.wsscode.pathom.parser/process-key :com.wsscode.pathom.core/path []}
            {:key :b :com.wsscode.pathom.trace/event :com.wsscode.pathom.parser/call-read :com.wsscode.pathom.core/path []}
            {:key :b :com.wsscode.pathom.trace/event :com.wsscode.pathom.parser/value-return :com.wsscode.pathom.core/path []}
            {:key :a :com.wsscode.pathom.trace/event :com.wsscode.pathom.parser/process-key :com.wsscode.pathom.core/path []}
            {:key :a :com.wsscode.pathom.trace/event :com.wsscode.pathom.parser/call-read :com.wsscode.pathom.core/path []}
            {:key :a :com.wsscode.pathom.trace/event :com.wsscode.pathom.parser/value-return :com.wsscode.pathom.core/path []}
            {:com.wsscode.pathom.trace/event     :com.wsscode.pathom.parser/parse-loop
             :com.wsscode.pathom.trace/direction :com.wsscode.pathom.trace/leave
             :com.wsscode.pathom.core/path       []}])))

  (testing "max key iterations"
    (reset! trace [])
    (is (= (<!! (pparser (quick-reader {::pt/trace* trace} {:a r-provide-miss})
                  [:a]))
           {:a ::p/reader-error}))
    (is (= (comparable-trace @trace)
           [{:com.wsscode.pathom.core/path       []
             :com.wsscode.pathom.trace/direction :com.wsscode.pathom.trace/enter
             :com.wsscode.pathom.trace/event     :com.wsscode.pathom.parser/parse-loop}
            {:com.wsscode.pathom.core/path   []
             :com.wsscode.pathom.trace/event :com.wsscode.pathom.parser/process-key
             :key                            :a}
            {:com.wsscode.pathom.core/path   []
             :com.wsscode.pathom.trace/event :com.wsscode.pathom.parser/call-read
             :key                            :a}
            {:com.wsscode.pathom.core/path       []
             :com.wsscode.pathom.parser/provides #{:a}
             :com.wsscode.pathom.trace/event     :com.wsscode.pathom.parser/provided-return}
            {:com.wsscode.pathom.core/path             []
             :com.wsscode.pathom.parser/merge-result?  false
             :com.wsscode.pathom.parser/provides       #{:a}
             :com.wsscode.pathom.parser/response-value {}
             :com.wsscode.pathom.trace/event           :com.wsscode.pathom.parser/process-pending}
            {:com.wsscode.pathom.core/path   []
             :com.wsscode.pathom.trace/event :com.wsscode.pathom.parser/process-key
             :key                            :a}
            {:com.wsscode.pathom.core/path   []
             :com.wsscode.pathom.trace/event :com.wsscode.pathom.parser/call-read
             :key                            :a}
            {:com.wsscode.pathom.core/path       []
             :com.wsscode.pathom.parser/provides #{:a}
             :com.wsscode.pathom.trace/event     :com.wsscode.pathom.parser/provided-return}
            {:com.wsscode.pathom.core/path             []
             :com.wsscode.pathom.parser/merge-result?  false
             :com.wsscode.pathom.parser/provides       #{:a}
             :com.wsscode.pathom.parser/response-value {}
             :com.wsscode.pathom.trace/event           :com.wsscode.pathom.parser/process-pending}
            {:com.wsscode.pathom.core/path   []
             :com.wsscode.pathom.trace/event :com.wsscode.pathom.parser/process-key
             :key                            :a}
            {:com.wsscode.pathom.core/path   []
             :com.wsscode.pathom.trace/event :com.wsscode.pathom.parser/call-read
             :key                            :a}
            {:com.wsscode.pathom.core/path       []
             :com.wsscode.pathom.parser/provides #{:a}
             :com.wsscode.pathom.trace/event     :com.wsscode.pathom.parser/provided-return}
            {:com.wsscode.pathom.core/path             []
             :com.wsscode.pathom.parser/merge-result?  false
             :com.wsscode.pathom.parser/provides       #{:a}
             :com.wsscode.pathom.parser/response-value {}
             :com.wsscode.pathom.trace/event           :com.wsscode.pathom.parser/process-pending}
            {:com.wsscode.pathom.core/path   []
             :com.wsscode.pathom.trace/event :com.wsscode.pathom.parser/process-key
             :key                            :a}
            {:com.wsscode.pathom.core/path   []
             :com.wsscode.pathom.trace/event :com.wsscode.pathom.parser/call-read
             :key                            :a}
            {:com.wsscode.pathom.core/path       []
             :com.wsscode.pathom.parser/provides #{:a}
             :com.wsscode.pathom.trace/event     :com.wsscode.pathom.parser/provided-return}
            {:com.wsscode.pathom.core/path             []
             :com.wsscode.pathom.parser/merge-result?  false
             :com.wsscode.pathom.parser/provides       #{:a}
             :com.wsscode.pathom.parser/response-value {}
             :com.wsscode.pathom.trace/event           :com.wsscode.pathom.parser/process-pending}
            {:com.wsscode.pathom.core/path   []
             :com.wsscode.pathom.trace/event :com.wsscode.pathom.parser/process-key
             :key                            :a}
            {:com.wsscode.pathom.core/path   []
             :com.wsscode.pathom.trace/event :com.wsscode.pathom.parser/call-read
             :key                            :a}
            {:com.wsscode.pathom.core/path       []
             :com.wsscode.pathom.parser/provides #{:a}
             :com.wsscode.pathom.trace/event     :com.wsscode.pathom.parser/provided-return}
            {:com.wsscode.pathom.core/path             []
             :com.wsscode.pathom.parser/merge-result?  false
             :com.wsscode.pathom.parser/provides       #{:a}
             :com.wsscode.pathom.parser/response-value {}
             :com.wsscode.pathom.trace/event           :com.wsscode.pathom.parser/process-pending}
            {:com.wsscode.pathom.core/path   []
             :com.wsscode.pathom.trace/event :com.wsscode.pathom.parser/process-key
             :key                            :a}
            {:com.wsscode.pathom.core/path                 []
             :com.wsscode.pathom.parser/max-key-iterations 5
             :com.wsscode.pathom.trace/event               :com.wsscode.pathom.parser/max-iterations-reached
             :key                                          :a}
            {:com.wsscode.pathom.core/path       []
             :com.wsscode.pathom.trace/direction :com.wsscode.pathom.trace/leave
             :com.wsscode.pathom.trace/event     :com.wsscode.pathom.parser/parse-loop}]))))

(comment
  (doseq [n [[1 2] [3 4 5] nil [4 5]]
          m n]
    (println n m))

  (time
    (let [parser (p/parallel-parser {::p/env {::p/reader [p/map-reader
                                                          preader]}})]
      (async/<!! (parser {} [:a :b {:c [:a]} :z :y])))))
