(ns com.wsscode.pathom.parser-test
  (:require [clojure.test :refer [deftest is testing]]
            [clojure.core.async :as async :refer [go <! <!!]]
            [com.wsscode.common.async-clj :refer [let-chan go-promise go-catch]]
            [com.wsscode.pathom.parser :as pp]
            [com.wsscode.pathom.core :as p]
            [com.wsscode.pathom.trace :as pt]
            [com.wsscode.pathom.connect :as pc]))

(defn insist
  ([f] (insist f 10))
  ([f n]
   (loop [n n]
     (if (pos? n)
       (if-let [res (f)]
         res
         (recur (dec n)))
       false))))

(deftest test-parser
  (let [parser (pp/parser {:read (fn [{:keys [ast] :as env}]
                                   (case (:dispatch-key ast)
                                     :foo "bar"
                                     :pq (::p/parent-query env)
                                     :not-found))})]
    (is (= (parser {} [:foo])
           {:foo "bar"}))

    (is (= (parser {} [:foo :aa])
           {:foo "bar"
            :aa  :not-found}))

    (testing "can rename output"
      (is (= (parser {} ['(:foo {:pathom/as :baz})])
             {:baz "bar"}))
      (is (= (parser {} ['(:foo {:pathom/as :baz})
                         '(:foo {:pathom/as :foo2})])
             {:baz  "bar"
              :foo2 "bar"})))

    (testing "can rename ident"
      (is (= (parser {} ['([:foo "value"] {:pathom/as :baz})])
             {:baz "bar"})))

    (testing "sets parent-query"
      (is (= (parser {} [:pq :foo])
             {:pq  [:pq :foo]
              :foo "bar"})))))

(deftest test-async-parser
  (let [parser (pp/async-parser {:read (fn [{:keys [ast] :as env}]
                                         (case (:dispatch-key ast)
                                           :foo "bar"
                                           :pq (::p/parent-query env)
                                           :async (async/go "future-value")
                                           :not-found))})
        parser (fn [env tx]
                 (async/<!! (parser env tx)))]
    (is (= (parser {} [:foo])
           {:foo "bar"}))

    (is (= (parser {} [:foo :async :aa])
           {:foo   "bar"
            :async "future-value"
            :aa    :not-found}))

    (testing "can rename output"
      (is (= (parser {} ['(:foo {:pathom/as :baz})])
             {:baz "bar"})))

    (testing "can rename ident"
      (is (= (parser {} ['([:foo "value"] {:pathom/as :baz})])
             {:baz "bar"})))

    (testing "sets parent-query"
      (is (= (parser {} [:pq :foo])
             {:pq  [:pq :foo]
              :foo "bar"})))))

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
                          (<! (async/timeout 10))
                          {::pp/provides       #{:a :b}
                           ::pp/response-value {:a 1 :b 2}})})

(defn r-provide-miss [_]
  {::pp/provides        #{:a}
   ::pp/response-stream (go
                          {::pp/provides       #{:a}
                           ::pp/response-value {}})})

(defn r-provide-waiting [_]
  {::pp/provides        #{:a :b :c :d}
   ::pp/response-stream (let [chan (async/chan 10)]
                          (go
                            (<! (async/timeout 10))

                            (async/put! chan
                              {::pp/provides       #{:a}
                               ::pp/response-value {:a "aaa"}})

                            (<! (async/timeout 20))

                            (async/put! chan
                              {::pp/provides       #{:a :b :c :d}
                               ::pp/response-value {}
                               ::pp/waiting        #{:b :d}})

                            (<! (async/timeout 10))

                            (async/put! chan
                              {::pp/provides       #{:b :d}
                               ::pp/response-value {:b "bbb" :d "ddd"}})

                            (async/close! chan))
                          chan)})

(defn r-b-dep [env]
  (let-chan [b (p/entity-attr! env :b)]
    (+ 10 b)))

(defn r-async [_]
  (go :done))

(defn mutation-value [{::keys [error?]}]
  (if error?
    (throw (ex-info "Error" {}))
    {:value "return"}))

(defn mutate [{::keys [async?] :as env} k p]
  {:action
   (fn []
     (if async?
       (go-catch
         (mutation-value env))
       (mutation-value env)))})

(def pparser (p/parallel-parser {:mutate mutate}))

(defn comparable-trace [trace]
  (mapv #(dissoc % ::pt/timestamp ::pt/id) trace))

(defn comparable-trace-in-any-order [trace]
  (frequencies (comparable-trace trace)))

(defn quick-reader
  ([reader] (quick-reader {} reader))
  ([env reader] (assoc env ::p/reader [p/map-reader reader])))

(defonce trace (atom []))

(deftest test-parallel-parser
  (testing "returns blank channel on response"
    (is (= (<!! (pparser {} [])) {})))

  (testing "simple return"
    (reset! trace [])
    (is (= (<!! (pparser (quick-reader {::pt/trace* trace} (constantly "HO!"))
                  [:a]))
           {:a "HO!"}))
    (is (= (comparable-trace @trace)
           [{:com.wsscode.pathom.core/path                  []
             :com.wsscode.pathom.parser/key-process-timeout 59000
             :com.wsscode.pathom.trace/direction            :com.wsscode.pathom.trace/enter
             :com.wsscode.pathom.trace/event                :com.wsscode.pathom.parser/parse-loop}
            {:com.wsscode.pathom.core/path   []
             :com.wsscode.pathom.trace/event :com.wsscode.pathom.parser/process-key
             :key                            :a}
            {:com.wsscode.pathom.core/path       []
             :com.wsscode.pathom.trace/direction :com.wsscode.pathom.trace/enter
             :com.wsscode.pathom.trace/event     :com.wsscode.pathom.parser/call-read
             :key                                :a}
            {:com.wsscode.pathom.core/path       []
             :com.wsscode.pathom.trace/direction :com.wsscode.pathom.trace/leave
             :com.wsscode.pathom.trace/event     :com.wsscode.pathom.parser/call-read
             :key                                :a}
            {:com.wsscode.pathom.core/path   []
             :com.wsscode.pathom.trace/event :com.wsscode.pathom.parser/value-return
             :key                            :a}
            {:com.wsscode.pathom.core/path                  []
             :com.wsscode.pathom.parser/key-process-timeout 59000
             :com.wsscode.pathom.trace/direction            :com.wsscode.pathom.trace/leave
             :com.wsscode.pathom.trace/event                :com.wsscode.pathom.parser/parse-loop}])))

  (testing "simple return renamed"
    (reset! trace [])
    (is (= (<!! (pparser (quick-reader {::pt/trace* trace} (constantly "HO!"))
                  ['(:a {:pathom/as :b})]))
           {:b "HO!"})))

  (testing "provides return"
    (reset! trace [])
    (is (= (<!! (pparser (quick-reader {::pt/trace* trace} {:a r-ab-quick :b r-ab-quick})
                  [:a :b]))
           {:a 1 :b 2}))
    (is (= (comparable-trace @trace)
           [{:com.wsscode.pathom.core/path                  []
             :com.wsscode.pathom.parser/key-process-timeout 59000
             :com.wsscode.pathom.trace/direction            :com.wsscode.pathom.trace/enter
             :com.wsscode.pathom.trace/event                :com.wsscode.pathom.parser/parse-loop}
            {:com.wsscode.pathom.core/path   []
             :com.wsscode.pathom.trace/event :com.wsscode.pathom.parser/process-key
             :key                            :a}
            {:com.wsscode.pathom.core/path       []
             :com.wsscode.pathom.trace/direction :com.wsscode.pathom.trace/enter
             :com.wsscode.pathom.trace/event     :com.wsscode.pathom.parser/call-read
             :key                                :a}
            {:com.wsscode.pathom.core/path       []
             :com.wsscode.pathom.trace/direction :com.wsscode.pathom.trace/leave
             :com.wsscode.pathom.trace/event     :com.wsscode.pathom.parser/call-read
             :key                                :a}
            {:com.wsscode.pathom.core/path       []
             :com.wsscode.pathom.parser/provides #{:a
                                                   :b}
             :com.wsscode.pathom.trace/event     :com.wsscode.pathom.parser/provided-return}
            {:com.wsscode.pathom.core/path   []
             :com.wsscode.pathom.trace/event :com.wsscode.pathom.parser/process-key
             :key                            :b}
            {:com.wsscode.pathom.core/path   []
             :com.wsscode.pathom.trace/event :com.wsscode.pathom.parser/skip-wait-key
             :key                            :b}
            {:com.wsscode.pathom.core/path               []
             :com.wsscode.pathom.parser/processing-count 1
             :com.wsscode.pathom.trace/event             :com.wsscode.pathom.parser/processing-wait-next}
            {:com.wsscode.pathom.core/path             []
             :com.wsscode.pathom.parser/merge-result?  false
             :com.wsscode.pathom.parser/provides       #{:a
                                                         :b}
             :com.wsscode.pathom.parser/response-value {:a 1
                                                        :b 2}
             :com.wsscode.pathom.trace/event           :com.wsscode.pathom.parser/process-pending}
            {:com.wsscode.pathom.core/path       []
             :com.wsscode.pathom.trace/direction :com.wsscode.pathom.trace/enter
             :com.wsscode.pathom.trace/event     :com.wsscode.pathom.parser/flush-watchers-loop}
            {:com.wsscode.pathom.core/path       []
             :com.wsscode.pathom.trace/direction :com.wsscode.pathom.trace/leave
             :com.wsscode.pathom.trace/event     :com.wsscode.pathom.parser/flush-watchers-loop}
            {:com.wsscode.pathom.core/path        []
             :com.wsscode.pathom.parser/loop-keys [:b
                                                   :a]
             :com.wsscode.pathom.trace/event      :com.wsscode.pathom.parser/reset-loop}
            {:com.wsscode.pathom.core/path   []
             :com.wsscode.pathom.trace/event :com.wsscode.pathom.parser/process-key
             :key                            :b}
            {:com.wsscode.pathom.core/path       []
             :com.wsscode.pathom.trace/direction :com.wsscode.pathom.trace/enter
             :com.wsscode.pathom.trace/event     :com.wsscode.pathom.parser/call-read
             :key                                :b}
            {:com.wsscode.pathom.core/path       []
             :com.wsscode.pathom.trace/direction :com.wsscode.pathom.trace/leave
             :com.wsscode.pathom.trace/event     :com.wsscode.pathom.parser/call-read
             :key                                :b}
            {:com.wsscode.pathom.core/path   []
             :com.wsscode.pathom.trace/event :com.wsscode.pathom.parser/value-return
             :key                            :b}
            {:com.wsscode.pathom.core/path   []
             :com.wsscode.pathom.trace/event :com.wsscode.pathom.parser/process-key
             :key                            :a}
            {:com.wsscode.pathom.core/path       []
             :com.wsscode.pathom.trace/direction :com.wsscode.pathom.trace/enter
             :com.wsscode.pathom.trace/event     :com.wsscode.pathom.parser/call-read
             :key                                :a}
            {:com.wsscode.pathom.core/path       []
             :com.wsscode.pathom.trace/direction :com.wsscode.pathom.trace/leave
             :com.wsscode.pathom.trace/event     :com.wsscode.pathom.parser/call-read
             :key                                :a}
            {:com.wsscode.pathom.core/path   []
             :com.wsscode.pathom.trace/event :com.wsscode.pathom.parser/value-return
             :key                            :a}
            {:com.wsscode.pathom.core/path               []
             :com.wsscode.pathom.parser/processing-count 1
             :com.wsscode.pathom.trace/event             :com.wsscode.pathom.parser/processing-wait-next}
            {:com.wsscode.pathom.core/path                  []
             :com.wsscode.pathom.parser/key-process-timeout 59000
             :com.wsscode.pathom.trace/direction            :com.wsscode.pathom.trace/leave
             :com.wsscode.pathom.trace/event                :com.wsscode.pathom.parser/parse-loop}])))

  (testing "async return"
    (reset! trace [])
    (is (= (<!! (pparser (quick-reader {::pt/trace* trace} {:a r-async})
                  [:a]))
           {:a :done}))
    (is (= (comparable-trace @trace)
           [{:com.wsscode.pathom.core/path                  []
             :com.wsscode.pathom.parser/key-process-timeout 59000
             :com.wsscode.pathom.trace/direction            :com.wsscode.pathom.trace/enter
             :com.wsscode.pathom.trace/event                :com.wsscode.pathom.parser/parse-loop}
            {:com.wsscode.pathom.core/path   []
             :com.wsscode.pathom.trace/event :com.wsscode.pathom.parser/process-key
             :key                            :a}
            {:com.wsscode.pathom.core/path       []
             :com.wsscode.pathom.trace/direction :com.wsscode.pathom.trace/enter
             :com.wsscode.pathom.trace/event     :com.wsscode.pathom.parser/call-read
             :key                                :a}
            {:com.wsscode.pathom.core/path       []
             :com.wsscode.pathom.trace/direction :com.wsscode.pathom.trace/leave
             :com.wsscode.pathom.trace/event     :com.wsscode.pathom.parser/call-read
             :key                                :a}
            {:com.wsscode.pathom.core/path   []
             :com.wsscode.pathom.trace/event :com.wsscode.pathom.parser/async-return
             :key                            :a}
            {:com.wsscode.pathom.core/path               []
             :com.wsscode.pathom.parser/processing-count 1
             :com.wsscode.pathom.trace/event             :com.wsscode.pathom.parser/processing-wait-next}
            {:com.wsscode.pathom.core/path             []
             :com.wsscode.pathom.parser/merge-result?  true
             :com.wsscode.pathom.parser/provides       #{:a}
             :com.wsscode.pathom.parser/response-value {:a :done}
             :com.wsscode.pathom.trace/event           :com.wsscode.pathom.parser/process-pending}
            {:com.wsscode.pathom.core/path       []
             :com.wsscode.pathom.trace/direction :com.wsscode.pathom.trace/enter
             :com.wsscode.pathom.trace/event     :com.wsscode.pathom.parser/flush-watchers-loop}
            {:com.wsscode.pathom.core/path       []
             :com.wsscode.pathom.trace/direction :com.wsscode.pathom.trace/leave
             :com.wsscode.pathom.trace/event     :com.wsscode.pathom.parser/flush-watchers-loop}
            {:com.wsscode.pathom.core/path             []
             :com.wsscode.pathom.parser/response-value {:a :done}
             :com.wsscode.pathom.trace/event           :com.wsscode.pathom.parser/merge-result}
            {:com.wsscode.pathom.core/path               []
             :com.wsscode.pathom.parser/processing-count 1
             :com.wsscode.pathom.trace/event             :com.wsscode.pathom.parser/processing-wait-next}
            {:com.wsscode.pathom.core/path                  []
             :com.wsscode.pathom.parser/key-process-timeout 59000
             :com.wsscode.pathom.trace/direction            :com.wsscode.pathom.trace/leave
             :com.wsscode.pathom.trace/event                :com.wsscode.pathom.parser/parse-loop}])))

  (testing "skip-resolved-key"
    (is (= (<!! (pparser (quick-reader {::pt/trace* trace} {:a (constantly "HO!")})
                  [:a :a]))
           {:a "HO!"}))
    (is (insist
          (fn []
            (reset! trace [])
            (<!! (pparser (quick-reader {::pt/trace* trace} {:a (constantly "HO!")})
                   [:a :a]))
            (= (comparable-trace @trace)
               [{:com.wsscode.pathom.core/path                  []
                 :com.wsscode.pathom.parser/key-process-timeout 59000
                 :com.wsscode.pathom.trace/direction            :com.wsscode.pathom.trace/enter
                 :com.wsscode.pathom.trace/event                :com.wsscode.pathom.parser/parse-loop}
                {:com.wsscode.pathom.core/path   []
                 :com.wsscode.pathom.trace/event :com.wsscode.pathom.parser/process-key
                 :key                            :a}
                {:com.wsscode.pathom.core/path       []
                 :com.wsscode.pathom.trace/direction :com.wsscode.pathom.trace/enter
                 :com.wsscode.pathom.trace/event     :com.wsscode.pathom.parser/call-read
                 :key                                :a}
                {:com.wsscode.pathom.core/path       []
                 :com.wsscode.pathom.trace/direction :com.wsscode.pathom.trace/leave
                 :com.wsscode.pathom.trace/event     :com.wsscode.pathom.parser/call-read
                 :key                                :a}
                {:com.wsscode.pathom.core/path   []
                 :com.wsscode.pathom.trace/event :com.wsscode.pathom.parser/value-return
                 :key                            :a}
                {:com.wsscode.pathom.core/path   []
                 :com.wsscode.pathom.trace/event :com.wsscode.pathom.parser/process-key
                 :key                            :a}
                {:com.wsscode.pathom.core/path   []
                 :com.wsscode.pathom.trace/event :com.wsscode.pathom.parser/skip-resolved-key
                 :key                            :a}
                {:com.wsscode.pathom.core/path                  []
                 :com.wsscode.pathom.parser/key-process-timeout 59000
                 :com.wsscode.pathom.trace/direction            :com.wsscode.pathom.trace/leave
                 :com.wsscode.pathom.trace/event                :com.wsscode.pathom.parser/parse-loop}])))))

  (testing "external wait"
    (is (= (<!! (pparser (quick-reader {::pt/trace* trace} {:b r-ab-quick :c r-b-dep})
                  [:b :c]))
           {:b 2 :c 12}))
    (is (insist (fn []
                  (reset! trace [])
                  (<!! (pparser (quick-reader {::pt/trace* trace} {:b r-ab-quick :c r-b-dep})
                         [:b :c]))
                  (= (comparable-trace-in-any-order @trace)
                     '{{:com.wsscode.pathom.core/path                  [:c]
                        :com.wsscode.pathom.parser/key-process-timeout 58000
                        :com.wsscode.pathom.trace/direction            :com.wsscode.pathom.trace/enter
                        :com.wsscode.pathom.trace/event                :com.wsscode.pathom.parser/parse-loop}        1
                       {:com.wsscode.pathom.core/path                  [:c]
                        :com.wsscode.pathom.parser/key-process-timeout 58000
                        :com.wsscode.pathom.trace/direction            :com.wsscode.pathom.trace/leave
                        :com.wsscode.pathom.trace/event                :com.wsscode.pathom.parser/parse-loop}        1
                       {:com.wsscode.pathom.core/path        [:c]
                        :com.wsscode.pathom.parser/loop-keys [:b]
                        :com.wsscode.pathom.trace/event      :com.wsscode.pathom.parser/reset-loop}                  1
                       {:com.wsscode.pathom.core/path             [:c]
                        :com.wsscode.pathom.parser/merge-result?  false
                        :com.wsscode.pathom.parser/provides       #{:a :b}
                        :com.wsscode.pathom.parser/response-value nil
                        :com.wsscode.pathom.trace/event           :com.wsscode.pathom.parser/process-pending}        1
                       {:com.wsscode.pathom.core/path               [:c]
                        :com.wsscode.pathom.parser/processing-count 1
                        :com.wsscode.pathom.trace/event             :com.wsscode.pathom.parser/processing-wait-next} 2
                       {:com.wsscode.pathom.core/path       [:c]
                        :com.wsscode.pathom.trace/direction :com.wsscode.pathom.trace/enter
                        :com.wsscode.pathom.trace/event     :com.wsscode.pathom.parser/call-read
                        :key                                :b}                                                      1
                       {:com.wsscode.pathom.core/path       [:c]
                        :com.wsscode.pathom.trace/direction :com.wsscode.pathom.trace/enter
                        :com.wsscode.pathom.trace/event     :com.wsscode.pathom.parser/flush-watchers-loop}          1
                       {:com.wsscode.pathom.core/path       [:c]
                        :com.wsscode.pathom.trace/direction :com.wsscode.pathom.trace/leave
                        :com.wsscode.pathom.trace/event     :com.wsscode.pathom.parser/call-read
                        :key                                :b}                                                      1
                       {:com.wsscode.pathom.core/path       [:c]
                        :com.wsscode.pathom.trace/direction :com.wsscode.pathom.trace/leave
                        :com.wsscode.pathom.trace/event     :com.wsscode.pathom.parser/flush-watchers-loop}          1
                       {:com.wsscode.pathom.core/path   [:c]
                        :com.wsscode.pathom.trace/event :com.wsscode.pathom.parser/external-wait-key
                        :key                            :b}                                                          1
                       {:com.wsscode.pathom.core/path   [:c]
                        :com.wsscode.pathom.trace/event :com.wsscode.pathom.parser/process-key
                        :key                            :b}                                                          2
                       {:com.wsscode.pathom.core/path   [:c]
                        :com.wsscode.pathom.trace/event :com.wsscode.pathom.parser/value-return
                        :key                            :b}                                                          1
                       {:com.wsscode.pathom.core/path                  []
                        :com.wsscode.pathom.parser/key-process-timeout 59000
                        :com.wsscode.pathom.trace/direction            :com.wsscode.pathom.trace/enter
                        :com.wsscode.pathom.trace/event                :com.wsscode.pathom.parser/parse-loop}        1
                       {:com.wsscode.pathom.core/path                  []
                        :com.wsscode.pathom.parser/key-process-timeout 59000
                        :com.wsscode.pathom.trace/direction            :com.wsscode.pathom.trace/leave
                        :com.wsscode.pathom.trace/event                :com.wsscode.pathom.parser/parse-loop}        1
                       {:com.wsscode.pathom.core/path        []
                        :com.wsscode.pathom.parser/loop-keys [:b]
                        :com.wsscode.pathom.trace/event      :com.wsscode.pathom.parser/reset-loop}                  1
                       {:com.wsscode.pathom.core/path             []
                        :com.wsscode.pathom.parser/merge-result?  false
                        :com.wsscode.pathom.parser/provides       #{:a
                                                                    :b}
                        :com.wsscode.pathom.parser/response-value {:a 1
                                                                   :b 2}
                        :com.wsscode.pathom.trace/event           :com.wsscode.pathom.parser/process-pending}        1
                       {:com.wsscode.pathom.core/path             []
                        :com.wsscode.pathom.parser/merge-result?  true
                        :com.wsscode.pathom.parser/provides       #{:c}
                        :com.wsscode.pathom.parser/response-value {:c 12}
                        :com.wsscode.pathom.trace/event           :com.wsscode.pathom.parser/process-pending}        1
                       {:com.wsscode.pathom.core/path               []
                        :com.wsscode.pathom.parser/processing-count 1
                        :com.wsscode.pathom.trace/event             :com.wsscode.pathom.parser/processing-wait-next} 2
                       {:com.wsscode.pathom.core/path               []
                        :com.wsscode.pathom.parser/processing-count 2
                        :com.wsscode.pathom.trace/event             :com.wsscode.pathom.parser/processing-wait-next} 2
                       {:com.wsscode.pathom.core/path       []
                        :com.wsscode.pathom.parser/provides #{:a
                                                              :b}
                        :com.wsscode.pathom.trace/event     :com.wsscode.pathom.parser/provided-return}              1
                       {:com.wsscode.pathom.core/path             []
                        :com.wsscode.pathom.parser/response-value {:c 12}
                        :com.wsscode.pathom.trace/event           :com.wsscode.pathom.parser/merge-result}           1
                       {:com.wsscode.pathom.core/path            []
                        :com.wsscode.pathom.parser/watcher-count 1
                        :com.wsscode.pathom.trace/event          :com.wsscode.pathom.parser/flush-watchers
                        :key                                     :b}                                                 1
                       {:com.wsscode.pathom.core/path       []
                        :com.wsscode.pathom.trace/direction :com.wsscode.pathom.trace/enter
                        :com.wsscode.pathom.trace/event     :com.wsscode.pathom.parser/call-read
                        :key                                :b}                                                      2
                       {:com.wsscode.pathom.core/path       []
                        :com.wsscode.pathom.trace/direction :com.wsscode.pathom.trace/enter
                        :com.wsscode.pathom.trace/event     :com.wsscode.pathom.parser/call-read
                        :key                                :c}                                                      1
                       {:com.wsscode.pathom.core/path       []
                        :com.wsscode.pathom.trace/direction :com.wsscode.pathom.trace/enter
                        :com.wsscode.pathom.trace/event     :com.wsscode.pathom.parser/flush-watchers-loop}          2
                       {:com.wsscode.pathom.core/path       []
                        :com.wsscode.pathom.trace/direction :com.wsscode.pathom.trace/leave
                        :com.wsscode.pathom.trace/event     :com.wsscode.pathom.parser/call-read
                        :key                                :b}                                                      2
                       {:com.wsscode.pathom.core/path       []
                        :com.wsscode.pathom.trace/direction :com.wsscode.pathom.trace/leave
                        :com.wsscode.pathom.trace/event     :com.wsscode.pathom.parser/call-read
                        :key                                :c}                                                      1
                       {:com.wsscode.pathom.core/path       []
                        :com.wsscode.pathom.trace/direction :com.wsscode.pathom.trace/leave
                        :com.wsscode.pathom.trace/event     :com.wsscode.pathom.parser/flush-watchers-loop}          2
                       {:com.wsscode.pathom.core/path   []
                        :com.wsscode.pathom.trace/event :com.wsscode.pathom.parser/async-return
                        :key                            :c}                                                          1
                       {:com.wsscode.pathom.core/path   []
                        :com.wsscode.pathom.trace/event :com.wsscode.pathom.parser/process-key
                        :key                            :b}                                                          2
                       {:com.wsscode.pathom.core/path   []
                        :com.wsscode.pathom.trace/event :com.wsscode.pathom.parser/process-key
                        :key                            :c}                                                          1
                       {:com.wsscode.pathom.core/path   []
                        :com.wsscode.pathom.trace/event :com.wsscode.pathom.parser/value-return
                        :key                            :b}                                                          1})))))

  (testing "max key iterations"
    (reset! trace [])
    (is (= (<!! (pparser (quick-reader {::pt/trace* trace
                                        ::pp/max-key-iterations 5} {:a r-provide-miss})
                  [:a]))
           {:a ::p/not-found}))
    (is (= (remove (comp #{::pp/processing-wait-next} ::pt/event) (comparable-trace @trace))
           '[{:com.wsscode.pathom.core/path                 []
             :com.wsscode.pathom.parser/key-process-timeout 59000
             :com.wsscode.pathom.trace/direction            :com.wsscode.pathom.trace/enter
             :com.wsscode.pathom.trace/event                :com.wsscode.pathom.parser/parse-loop}
            {:com.wsscode.pathom.core/path   []
             :com.wsscode.pathom.trace/event :com.wsscode.pathom.parser/process-key
             :key                            :a}
            {:com.wsscode.pathom.core/path       []
             :com.wsscode.pathom.trace/direction :com.wsscode.pathom.trace/enter
             :com.wsscode.pathom.trace/event     :com.wsscode.pathom.parser/call-read
             :key                                :a}
            {:com.wsscode.pathom.core/path       []
             :com.wsscode.pathom.trace/direction :com.wsscode.pathom.trace/leave
             :com.wsscode.pathom.trace/event     :com.wsscode.pathom.parser/call-read
             :key                                :a}
            {:com.wsscode.pathom.core/path       []
             :com.wsscode.pathom.parser/provides #{:a}
             :com.wsscode.pathom.trace/event     :com.wsscode.pathom.parser/provided-return}
            {:com.wsscode.pathom.core/path             []
             :com.wsscode.pathom.parser/merge-result?  false
             :com.wsscode.pathom.parser/provides       #{:a}
             :com.wsscode.pathom.parser/response-value {}
             :com.wsscode.pathom.trace/event           :com.wsscode.pathom.parser/process-pending}
            {:com.wsscode.pathom.core/path       []
             :com.wsscode.pathom.trace/direction :com.wsscode.pathom.trace/enter
             :com.wsscode.pathom.trace/event     :com.wsscode.pathom.parser/flush-watchers-loop}
            {:com.wsscode.pathom.core/path       []
             :com.wsscode.pathom.trace/direction :com.wsscode.pathom.trace/leave
             :com.wsscode.pathom.trace/event     :com.wsscode.pathom.parser/flush-watchers-loop}
            {:com.wsscode.pathom.core/path        []
             :com.wsscode.pathom.parser/loop-keys [:a]
             :com.wsscode.pathom.trace/event      :com.wsscode.pathom.parser/reset-loop}
            {:com.wsscode.pathom.core/path   []
             :com.wsscode.pathom.trace/event :com.wsscode.pathom.parser/process-key
             :key                            :a}
            {:com.wsscode.pathom.core/path       []
             :com.wsscode.pathom.trace/direction :com.wsscode.pathom.trace/enter
             :com.wsscode.pathom.trace/event     :com.wsscode.pathom.parser/call-read
             :key                                :a}
            {:com.wsscode.pathom.core/path       []
             :com.wsscode.pathom.trace/direction :com.wsscode.pathom.trace/leave
             :com.wsscode.pathom.trace/event     :com.wsscode.pathom.parser/call-read
             :key                                :a}
            {:com.wsscode.pathom.core/path       []
             :com.wsscode.pathom.parser/provides #{:a}
             :com.wsscode.pathom.trace/event     :com.wsscode.pathom.parser/provided-return}
            {:com.wsscode.pathom.core/path             []
             :com.wsscode.pathom.parser/merge-result?  false
             :com.wsscode.pathom.parser/provides       #{:a}
             :com.wsscode.pathom.parser/response-value {}
             :com.wsscode.pathom.trace/event           :com.wsscode.pathom.parser/process-pending}
            {:com.wsscode.pathom.core/path       []
             :com.wsscode.pathom.trace/direction :com.wsscode.pathom.trace/enter
             :com.wsscode.pathom.trace/event     :com.wsscode.pathom.parser/flush-watchers-loop}
            {:com.wsscode.pathom.core/path       []
             :com.wsscode.pathom.trace/direction :com.wsscode.pathom.trace/leave
             :com.wsscode.pathom.trace/event     :com.wsscode.pathom.parser/flush-watchers-loop}
            {:com.wsscode.pathom.core/path        []
             :com.wsscode.pathom.parser/loop-keys [:a]
             :com.wsscode.pathom.trace/event      :com.wsscode.pathom.parser/reset-loop}
            {:com.wsscode.pathom.core/path   []
             :com.wsscode.pathom.trace/event :com.wsscode.pathom.parser/process-key
             :key                            :a}
            {:com.wsscode.pathom.core/path       []
             :com.wsscode.pathom.trace/direction :com.wsscode.pathom.trace/enter
             :com.wsscode.pathom.trace/event     :com.wsscode.pathom.parser/call-read
             :key                                :a}
            {:com.wsscode.pathom.core/path       []
             :com.wsscode.pathom.trace/direction :com.wsscode.pathom.trace/leave
             :com.wsscode.pathom.trace/event     :com.wsscode.pathom.parser/call-read
             :key                                :a}
            {:com.wsscode.pathom.core/path       []
             :com.wsscode.pathom.parser/provides #{:a}
             :com.wsscode.pathom.trace/event     :com.wsscode.pathom.parser/provided-return}
            {:com.wsscode.pathom.core/path             []
             :com.wsscode.pathom.parser/merge-result?  false
             :com.wsscode.pathom.parser/provides       #{:a}
             :com.wsscode.pathom.parser/response-value {}
             :com.wsscode.pathom.trace/event           :com.wsscode.pathom.parser/process-pending}
            {:com.wsscode.pathom.core/path       []
             :com.wsscode.pathom.trace/direction :com.wsscode.pathom.trace/enter
             :com.wsscode.pathom.trace/event     :com.wsscode.pathom.parser/flush-watchers-loop}
            {:com.wsscode.pathom.core/path       []
             :com.wsscode.pathom.trace/direction :com.wsscode.pathom.trace/leave
             :com.wsscode.pathom.trace/event     :com.wsscode.pathom.parser/flush-watchers-loop}
            {:com.wsscode.pathom.core/path        []
             :com.wsscode.pathom.parser/loop-keys [:a]
             :com.wsscode.pathom.trace/event      :com.wsscode.pathom.parser/reset-loop}
            {:com.wsscode.pathom.core/path   []
             :com.wsscode.pathom.trace/event :com.wsscode.pathom.parser/process-key
             :key                            :a}
            {:com.wsscode.pathom.core/path       []
             :com.wsscode.pathom.trace/direction :com.wsscode.pathom.trace/enter
             :com.wsscode.pathom.trace/event     :com.wsscode.pathom.parser/call-read
             :key                                :a}
            {:com.wsscode.pathom.core/path       []
             :com.wsscode.pathom.trace/direction :com.wsscode.pathom.trace/leave
             :com.wsscode.pathom.trace/event     :com.wsscode.pathom.parser/call-read
             :key                                :a}
            {:com.wsscode.pathom.core/path       []
             :com.wsscode.pathom.parser/provides #{:a}
             :com.wsscode.pathom.trace/event     :com.wsscode.pathom.parser/provided-return}
            {:com.wsscode.pathom.core/path             []
             :com.wsscode.pathom.parser/merge-result?  false
             :com.wsscode.pathom.parser/provides       #{:a}
             :com.wsscode.pathom.parser/response-value {}
             :com.wsscode.pathom.trace/event           :com.wsscode.pathom.parser/process-pending}
            {:com.wsscode.pathom.core/path       []
             :com.wsscode.pathom.trace/direction :com.wsscode.pathom.trace/enter
             :com.wsscode.pathom.trace/event     :com.wsscode.pathom.parser/flush-watchers-loop}
            {:com.wsscode.pathom.core/path       []
             :com.wsscode.pathom.trace/direction :com.wsscode.pathom.trace/leave
             :com.wsscode.pathom.trace/event     :com.wsscode.pathom.parser/flush-watchers-loop}
            {:com.wsscode.pathom.core/path        []
             :com.wsscode.pathom.parser/loop-keys [:a]
             :com.wsscode.pathom.trace/event      :com.wsscode.pathom.parser/reset-loop}
            {:com.wsscode.pathom.core/path   []
             :com.wsscode.pathom.trace/event :com.wsscode.pathom.parser/process-key
             :key                            :a}
            {:com.wsscode.pathom.core/path       []
             :com.wsscode.pathom.trace/direction :com.wsscode.pathom.trace/enter
             :com.wsscode.pathom.trace/event     :com.wsscode.pathom.parser/call-read
             :key                                :a}
            {:com.wsscode.pathom.core/path       []
             :com.wsscode.pathom.trace/direction :com.wsscode.pathom.trace/leave
             :com.wsscode.pathom.trace/event     :com.wsscode.pathom.parser/call-read
             :key                                :a}
            {:com.wsscode.pathom.core/path       []
             :com.wsscode.pathom.parser/provides #{:a}
             :com.wsscode.pathom.trace/event     :com.wsscode.pathom.parser/provided-return}
            {:com.wsscode.pathom.core/path             []
             :com.wsscode.pathom.parser/merge-result?  false
             :com.wsscode.pathom.parser/provides       #{:a}
             :com.wsscode.pathom.parser/response-value {}
             :com.wsscode.pathom.trace/event           :com.wsscode.pathom.parser/process-pending}
            {:com.wsscode.pathom.core/path       []
             :com.wsscode.pathom.trace/direction :com.wsscode.pathom.trace/enter
             :com.wsscode.pathom.trace/event     :com.wsscode.pathom.parser/flush-watchers-loop}
            {:com.wsscode.pathom.core/path       []
             :com.wsscode.pathom.trace/direction :com.wsscode.pathom.trace/leave
             :com.wsscode.pathom.trace/event     :com.wsscode.pathom.parser/flush-watchers-loop}
            {:com.wsscode.pathom.core/path        []
             :com.wsscode.pathom.parser/loop-keys [:a]
             :com.wsscode.pathom.trace/event      :com.wsscode.pathom.parser/reset-loop}
            {:com.wsscode.pathom.core/path   []
             :com.wsscode.pathom.trace/event :com.wsscode.pathom.parser/process-key
             :key                            :a}
            {:com.wsscode.pathom.core/path                 []
             :com.wsscode.pathom.parser/max-key-iterations 5
             :com.wsscode.pathom.trace/event               :com.wsscode.pathom.parser/max-iterations-reached
             :key                                          :a}
            {:com.wsscode.pathom.core/path                  []
             :com.wsscode.pathom.parser/key-process-timeout 59000
             :com.wsscode.pathom.trace/direction            :com.wsscode.pathom.trace/leave
             :com.wsscode.pathom.trace/event                :com.wsscode.pathom.parser/parse-loop}])))

  (testing "call sync mutation"
    (is (= (<!! (pparser {::pt/trace* trace} '[(operation {:foo "bar"})]))
           '{operation {:value "return"}}))
    (is (insist (fn []
                  (reset! trace [])
                  (<!! (pparser {::pt/trace* trace} '[(operation {:foo "bar"})]))
                  (= (comparable-trace @trace)
                     '[{:com.wsscode.pathom.core/path                  []
                        :com.wsscode.pathom.parser/key-process-timeout 59000
                        :com.wsscode.pathom.trace/direction            :com.wsscode.pathom.trace/enter
                        :com.wsscode.pathom.trace/event                :com.wsscode.pathom.parser/parse-loop}
                       {:com.wsscode.pathom.core/path   []
                        :com.wsscode.pathom.trace/event :com.wsscode.pathom.parser/process-key
                        :key                            operation}
                       {:com.wsscode.pathom.core/path   []
                        :com.wsscode.pathom.trace/event :com.wsscode.pathom.parser/async-return
                        :key                            operation}
                       {:com.wsscode.pathom.core/path   []
                        :com.wsscode.pathom.trace/event :com.wsscode.pathom.parser/call-mutation
                        :mutation                       operation}
                       {:com.wsscode.pathom.core/path               []
                        :com.wsscode.pathom.parser/processing-count 1
                        :com.wsscode.pathom.trace/event             :com.wsscode.pathom.parser/processing-wait-next}
                       {:com.wsscode.pathom.core/path             []
                        :com.wsscode.pathom.parser/merge-result?  true
                        :com.wsscode.pathom.parser/provides       #{operation}
                        :com.wsscode.pathom.parser/response-value {operation {:value "return"}}
                        :com.wsscode.pathom.trace/event           :com.wsscode.pathom.parser/process-pending}
                       {:com.wsscode.pathom.core/path       []
                        :com.wsscode.pathom.trace/direction :com.wsscode.pathom.trace/enter
                        :com.wsscode.pathom.trace/event     :com.wsscode.pathom.parser/flush-watchers-loop}
                       {:com.wsscode.pathom.core/path       []
                        :com.wsscode.pathom.trace/direction :com.wsscode.pathom.trace/leave
                        :com.wsscode.pathom.trace/event     :com.wsscode.pathom.parser/flush-watchers-loop}
                       {:com.wsscode.pathom.core/path             []
                        :com.wsscode.pathom.parser/response-value {operation {:value "return"}}
                        :com.wsscode.pathom.trace/event           :com.wsscode.pathom.parser/merge-result}
                       {:com.wsscode.pathom.core/path               []
                        :com.wsscode.pathom.parser/processing-count 1
                        :com.wsscode.pathom.trace/event             :com.wsscode.pathom.parser/processing-wait-next}
                       {:com.wsscode.pathom.core/path                  []
                        :com.wsscode.pathom.parser/key-process-timeout 59000
                        :com.wsscode.pathom.trace/direction            :com.wsscode.pathom.trace/leave
                        :com.wsscode.pathom.trace/event                :com.wsscode.pathom.parser/parse-loop}])))))

  #_
  (testing "call async mutation"
    (reset! trace [])
    (is (= (<!! (pparser {::pt/trace* trace ::async? true} '[(operation {:foo "bar"})]))
           '{operation {:value "return"}}))
    (is (= (comparable-trace @trace)
           '[{:com.wsscode.pathom.core/path                  []
              :com.wsscode.pathom.parser/key-process-timeout 59000
              :com.wsscode.pathom.trace/direction            :com.wsscode.pathom.trace/enter
              :com.wsscode.pathom.trace/event                :com.wsscode.pathom.parser/parse-loop}
             {:com.wsscode.pathom.core/path   []
              :com.wsscode.pathom.trace/event :com.wsscode.pathom.parser/process-key
              :key                            operation}
             {:com.wsscode.pathom.core/path   []
              :com.wsscode.pathom.trace/event :com.wsscode.pathom.parser/async-return
              :key                            operation}
             {:com.wsscode.pathom.core/path   []
              :com.wsscode.pathom.trace/event :com.wsscode.pathom.parser/call-mutation
              :mutation                       operation}
             {:com.wsscode.pathom.core/path               []
              :com.wsscode.pathom.parser/processing-count 1
              :com.wsscode.pathom.trace/event             :com.wsscode.pathom.parser/processing-wait-next}
             {:com.wsscode.pathom.core/path             []
              :com.wsscode.pathom.parser/merge-result?  true
              :com.wsscode.pathom.parser/provides       #{operation}
              :com.wsscode.pathom.parser/response-value {operation {:value "return"}}
              :com.wsscode.pathom.trace/event           :com.wsscode.pathom.parser/process-pending}
             {:com.wsscode.pathom.core/path       []
              :com.wsscode.pathom.trace/direction :com.wsscode.pathom.trace/enter
              :com.wsscode.pathom.trace/event     :com.wsscode.pathom.parser/flush-watchers-loop}
             {:com.wsscode.pathom.core/path       []
              :com.wsscode.pathom.trace/direction :com.wsscode.pathom.trace/leave
              :com.wsscode.pathom.trace/event     :com.wsscode.pathom.parser/flush-watchers-loop}
             {:com.wsscode.pathom.core/path             []
              :com.wsscode.pathom.parser/response-value {operation {:value "return"}}
              :com.wsscode.pathom.trace/event           :com.wsscode.pathom.parser/merge-result}
             {:com.wsscode.pathom.core/path               []
              :com.wsscode.pathom.parser/processing-count 1
              :com.wsscode.pathom.trace/event             :com.wsscode.pathom.parser/processing-wait-next}
             {:com.wsscode.pathom.core/path                  []
              :com.wsscode.pathom.parser/key-process-timeout 59000
              :com.wsscode.pathom.trace/direction            :com.wsscode.pathom.trace/leave
              :com.wsscode.pathom.trace/event                :com.wsscode.pathom.parser/parse-loop}])))

  (testing "call sync mutation error"
    (is (= (<!! (pparser {::pt/trace*       trace
                          ::error?          true
                          ::p/process-error #(.getMessage %2)}
                  '[(operation {:foo "bar"})]))
           '{operation #:com.wsscode.pathom.parser{:error "Error"}}))
    (is (fn []
          (reset! trace [])
          (<!! (pparser {::pt/trace*       trace
                         ::error?          true
                         ::p/process-error #(.getMessage %2)}
                 '[(operation {:foo "bar"})]))
          (= (comparable-trace @trace)
             '[{:com.wsscode.pathom.core/path                  []
                :com.wsscode.pathom.parser/key-process-timeout 59000
                :com.wsscode.pathom.trace/direction            :com.wsscode.pathom.trace/enter
                :com.wsscode.pathom.trace/event                :com.wsscode.pathom.parser/parse-loop}
               {:com.wsscode.pathom.core/path   []
                :com.wsscode.pathom.trace/event :com.wsscode.pathom.parser/process-key
                :key                            operation}
               {:com.wsscode.pathom.core/path   []
                :com.wsscode.pathom.trace/event :com.wsscode.pathom.parser/async-return
                :key                            operation}
               {:com.wsscode.pathom.core/path   []
                :com.wsscode.pathom.trace/event :com.wsscode.pathom.parser/call-mutation
                :mutation                       operation}
               {:com.wsscode.pathom.core/path               []
                :com.wsscode.pathom.parser/processing-count 1
                :com.wsscode.pathom.trace/event             :com.wsscode.pathom.parser/processing-wait-next}
               {:com.wsscode.pathom.core/path             []
                :com.wsscode.pathom.parser/merge-result?  true
                :com.wsscode.pathom.parser/provides       #{operation}
                :com.wsscode.pathom.parser/response-value {operation #:com.wsscode.pathom.parser{:error "Error"}}
                :com.wsscode.pathom.trace/event           :com.wsscode.pathom.parser/process-pending}
               {:com.wsscode.pathom.core/path       []
                :com.wsscode.pathom.trace/direction :com.wsscode.pathom.trace/enter
                :com.wsscode.pathom.trace/event     :com.wsscode.pathom.parser/flush-watchers-loop}
               {:com.wsscode.pathom.core/path       []
                :com.wsscode.pathom.trace/direction :com.wsscode.pathom.trace/leave
                :com.wsscode.pathom.trace/event     :com.wsscode.pathom.parser/flush-watchers-loop}
               {:com.wsscode.pathom.core/path             []
                :com.wsscode.pathom.parser/response-value {operation #:com.wsscode.pathom.parser{:error "Error"}}
                :com.wsscode.pathom.trace/event           :com.wsscode.pathom.parser/merge-result}
               {:com.wsscode.pathom.core/path               []
                :com.wsscode.pathom.parser/processing-count 1
                :com.wsscode.pathom.trace/event             :com.wsscode.pathom.parser/processing-wait-next}
               {:com.wsscode.pathom.core/path                  []
                :com.wsscode.pathom.parser/key-process-timeout 59000
                :com.wsscode.pathom.trace/direction            :com.wsscode.pathom.trace/leave
                :com.wsscode.pathom.trace/event                :com.wsscode.pathom.parser/parse-loop}]))))

  (testing "call async mutation error"
    (is (= (<!! (pparser {::pt/trace*       trace
                          ::error?          true
                          ::async?          true
                          ::p/process-error #(.getMessage %2)}
                  '[(operation {:foo "bar"})]))
           '{operation #:com.wsscode.pathom.parser{:error "Error"}}))
    (is (fn []
          (reset! trace [])
          (<!! (pparser {::pt/trace*       trace
                         ::error?          true
                         ::async?          true
                         ::p/process-error #(.getMessage %2)}
                 '[(operation {:foo "bar"})]))
          (= (comparable-trace @trace)
            '[{:com.wsscode.pathom.core/path                  []
               :com.wsscode.pathom.parser/key-process-timeout 59000
               :com.wsscode.pathom.trace/direction            :com.wsscode.pathom.trace/enter
               :com.wsscode.pathom.trace/event                :com.wsscode.pathom.parser/parse-loop}
              {:com.wsscode.pathom.core/path   []
               :com.wsscode.pathom.trace/event :com.wsscode.pathom.parser/process-key
               :key                            operation}
              {:com.wsscode.pathom.core/path   []
               :com.wsscode.pathom.trace/event :com.wsscode.pathom.parser/async-return
               :key                            operation}
              {:com.wsscode.pathom.core/path   []
               :com.wsscode.pathom.trace/event :com.wsscode.pathom.parser/call-mutation
               :mutation                       operation}
              {:com.wsscode.pathom.core/path               []
               :com.wsscode.pathom.parser/processing-count 1
               :com.wsscode.pathom.trace/event             :com.wsscode.pathom.parser/processing-wait-next}
              {:com.wsscode.pathom.core/path             []
               :com.wsscode.pathom.parser/merge-result?  true
               :com.wsscode.pathom.parser/provides       #{operation}
               :com.wsscode.pathom.parser/response-value {operation #:com.wsscode.pathom.parser{:error "Error"}}
               :com.wsscode.pathom.trace/event           :com.wsscode.pathom.parser/process-pending}
              {:com.wsscode.pathom.core/path       []
               :com.wsscode.pathom.trace/direction :com.wsscode.pathom.trace/enter
               :com.wsscode.pathom.trace/event     :com.wsscode.pathom.parser/flush-watchers-loop}
              {:com.wsscode.pathom.core/path       []
               :com.wsscode.pathom.trace/direction :com.wsscode.pathom.trace/leave
               :com.wsscode.pathom.trace/event     :com.wsscode.pathom.parser/flush-watchers-loop}
              {:com.wsscode.pathom.core/path             []
               :com.wsscode.pathom.parser/response-value {operation #:com.wsscode.pathom.parser{:error "Error"}}
               :com.wsscode.pathom.trace/event           :com.wsscode.pathom.parser/merge-result}
              {:com.wsscode.pathom.core/path               []
               :com.wsscode.pathom.parser/processing-count 1
               :com.wsscode.pathom.trace/event             :com.wsscode.pathom.parser/processing-wait-next}
              {:com.wsscode.pathom.core/path                  []
               :com.wsscode.pathom.parser/key-process-timeout 59000
               :com.wsscode.pathom.trace/direction            :com.wsscode.pathom.trace/leave
               :com.wsscode.pathom.trace/event                :com.wsscode.pathom.parser/parse-loop}]))))

  (testing "provides waiting"
    (reset! trace [])
    (is (= (<!! (pparser (quick-reader {::pt/trace* trace} r-provide-waiting)
                  [:d]))
           {:d "ddd"}))
    (is (insist (fn []
                  (reset! trace [])
                  (<!! (pparser (quick-reader {::pt/trace* trace} r-provide-waiting)
                         [:d]))
                  (= (comparable-trace @trace)
                    [{:com.wsscode.pathom.core/path                  []
                      :com.wsscode.pathom.parser/key-process-timeout 59000
                      :com.wsscode.pathom.trace/direction            :com.wsscode.pathom.trace/enter
                      :com.wsscode.pathom.trace/event                :com.wsscode.pathom.parser/parse-loop}
                     {:com.wsscode.pathom.core/path   []
                      :com.wsscode.pathom.trace/event :com.wsscode.pathom.parser/process-key
                      :key                            :d}
                     {:com.wsscode.pathom.core/path       []
                      :com.wsscode.pathom.trace/direction :com.wsscode.pathom.trace/enter
                      :com.wsscode.pathom.trace/event     :com.wsscode.pathom.parser/call-read
                      :key                                :d}
                     {:com.wsscode.pathom.core/path       []
                      :com.wsscode.pathom.trace/direction :com.wsscode.pathom.trace/leave
                      :com.wsscode.pathom.trace/event     :com.wsscode.pathom.parser/call-read
                      :key                                :d}
                     {:com.wsscode.pathom.core/path       []
                      :com.wsscode.pathom.parser/provides #{:a
                                                            :b
                                                            :c
                                                            :d}
                      :com.wsscode.pathom.trace/event     :com.wsscode.pathom.parser/provided-return}
                     {:com.wsscode.pathom.core/path               []
                      :com.wsscode.pathom.parser/processing-count 1
                      :com.wsscode.pathom.trace/event             :com.wsscode.pathom.parser/processing-wait-next}
                     {:com.wsscode.pathom.core/path             []
                      :com.wsscode.pathom.parser/merge-result?  false
                      :com.wsscode.pathom.parser/provides       #{:a}
                      :com.wsscode.pathom.parser/response-value {:a "aaa"}
                      :com.wsscode.pathom.trace/event           :com.wsscode.pathom.parser/process-pending}
                     {:com.wsscode.pathom.core/path       []
                      :com.wsscode.pathom.trace/direction :com.wsscode.pathom.trace/enter
                      :com.wsscode.pathom.trace/event     :com.wsscode.pathom.parser/flush-watchers-loop}
                     {:com.wsscode.pathom.core/path       []
                      :com.wsscode.pathom.trace/direction :com.wsscode.pathom.trace/leave
                      :com.wsscode.pathom.trace/event     :com.wsscode.pathom.parser/flush-watchers-loop}
                     {:com.wsscode.pathom.core/path        []
                      :com.wsscode.pathom.parser/loop-keys []
                      :com.wsscode.pathom.trace/event      :com.wsscode.pathom.parser/reset-loop}
                     {:com.wsscode.pathom.core/path               []
                      :com.wsscode.pathom.parser/processing-count 1
                      :com.wsscode.pathom.trace/event             :com.wsscode.pathom.parser/processing-wait-next}
                     {:com.wsscode.pathom.core/path             []
                      :com.wsscode.pathom.parser/merge-result?  false
                      :com.wsscode.pathom.parser/provides       #{:a
                                                                  :b
                                                                  :c
                                                                  :d}
                      :com.wsscode.pathom.parser/response-value {}
                      :com.wsscode.pathom.parser/waiting        #{:b
                                                                  :d}
                      :com.wsscode.pathom.trace/event           :com.wsscode.pathom.parser/process-pending}
                     {:com.wsscode.pathom.core/path       []
                      :com.wsscode.pathom.trace/direction :com.wsscode.pathom.trace/enter
                      :com.wsscode.pathom.trace/event     :com.wsscode.pathom.parser/flush-watchers-loop}
                     {:com.wsscode.pathom.core/path       []
                      :com.wsscode.pathom.trace/direction :com.wsscode.pathom.trace/leave
                      :com.wsscode.pathom.trace/event     :com.wsscode.pathom.parser/flush-watchers-loop}
                     {:com.wsscode.pathom.core/path        []
                      :com.wsscode.pathom.parser/loop-keys []
                      :com.wsscode.pathom.trace/event      :com.wsscode.pathom.parser/reset-loop}
                     {:com.wsscode.pathom.core/path               []
                      :com.wsscode.pathom.parser/processing-count 1
                      :com.wsscode.pathom.trace/event             :com.wsscode.pathom.parser/processing-wait-next}
                     {:com.wsscode.pathom.core/path             []
                      :com.wsscode.pathom.parser/merge-result?  false
                      :com.wsscode.pathom.parser/provides       #{:b
                                                                  :d}
                      :com.wsscode.pathom.parser/response-value {:b "bbb"
                                                                 :d "ddd"}
                      :com.wsscode.pathom.trace/event           :com.wsscode.pathom.parser/process-pending}
                     {:com.wsscode.pathom.core/path       []
                      :com.wsscode.pathom.trace/direction :com.wsscode.pathom.trace/enter
                      :com.wsscode.pathom.trace/event     :com.wsscode.pathom.parser/flush-watchers-loop}
                     {:com.wsscode.pathom.core/path       []
                      :com.wsscode.pathom.trace/direction :com.wsscode.pathom.trace/leave
                      :com.wsscode.pathom.trace/event     :com.wsscode.pathom.parser/flush-watchers-loop}
                     {:com.wsscode.pathom.core/path        []
                      :com.wsscode.pathom.parser/loop-keys [:d]
                      :com.wsscode.pathom.trace/event      :com.wsscode.pathom.parser/reset-loop}
                     {:com.wsscode.pathom.core/path   []
                      :com.wsscode.pathom.trace/event :com.wsscode.pathom.parser/process-key
                      :key                            :d}
                     {:com.wsscode.pathom.core/path       []
                      :com.wsscode.pathom.trace/direction :com.wsscode.pathom.trace/enter
                      :com.wsscode.pathom.trace/event     :com.wsscode.pathom.parser/call-read
                      :key                                :d}
                     {:com.wsscode.pathom.core/path       []
                      :com.wsscode.pathom.trace/direction :com.wsscode.pathom.trace/leave
                      :com.wsscode.pathom.trace/event     :com.wsscode.pathom.parser/call-read
                      :key                                :d}
                     {:com.wsscode.pathom.core/path   []
                      :com.wsscode.pathom.trace/event :com.wsscode.pathom.parser/value-return
                      :key                            :d}
                     {:com.wsscode.pathom.core/path               []
                      :com.wsscode.pathom.parser/processing-count 1
                      :com.wsscode.pathom.trace/event             :com.wsscode.pathom.parser/processing-wait-next}
                     {:com.wsscode.pathom.core/path                  []
                      :com.wsscode.pathom.parser/key-process-timeout 59000
                      :com.wsscode.pathom.trace/direction            :com.wsscode.pathom.trace/leave
                      :com.wsscode.pathom.trace/event                :com.wsscode.pathom.parser/parse-loop}])))))

  (testing "read timeout"
    (is (= (<!! (pparser (quick-reader {::pp/key-process-timeout 2000
                                        ::pt/trace* trace
                                        ::p/entity (atom {:sub {}})}
                           {:long (fn [_] {::pp/provides        #{:long}
                                           ::pp/response-stream (go
                                                                  (<! (async/timeout 5000))
                                                                  {::pp/provides       #{:long}
                                                                   ::pp/response-value {:long "cant reach"}})})})
                  [{:sub [:long]}]))
           {:sub {}}))
    (is (fn []
          (reset! trace [])
          (<!! (pparser (quick-reader {::pp/key-process-timeout 2000
                                       ::pt/trace* trace
                                       ::p/entity (atom {:sub {}})}
                          {:long (fn [_] {::pp/provides        #{:long}
                                          ::pp/response-stream (go
                                                                 (<! (async/timeout 5000))
                                                                 {::pp/provides       #{:long}
                                                                  ::pp/response-value {:long "cant reach"}})})})
                 [{:sub [:long]}]))
          (= (comparable-trace-in-any-order @trace)
            {{:com.wsscode.pathom.core/path                  [:sub]
              :com.wsscode.pathom.parser/key-process-timeout 1000
              :com.wsscode.pathom.trace/direction            :com.wsscode.pathom.trace/enter
              :com.wsscode.pathom.trace/event                :com.wsscode.pathom.parser/parse-loop}        1
             {:com.wsscode.pathom.core/path                  [:sub]
              :com.wsscode.pathom.parser/key-process-timeout 1000
              :com.wsscode.pathom.trace/event                :com.wsscode.pathom.parser/timeout-reach}     1
             {:com.wsscode.pathom.core/path               [:sub]
              :com.wsscode.pathom.parser/processing-count 1
              :com.wsscode.pathom.trace/event             :com.wsscode.pathom.parser/processing-wait-next} 1
             {:com.wsscode.pathom.core/path       [:sub]
              :com.wsscode.pathom.parser/provides #{:long}
              :com.wsscode.pathom.trace/event     :com.wsscode.pathom.parser/provided-return}              1
             {:com.wsscode.pathom.core/path       [:sub]
              :com.wsscode.pathom.trace/direction :com.wsscode.pathom.trace/enter
              :com.wsscode.pathom.trace/event     :com.wsscode.pathom.parser/call-read
              :key                                :long}                                                   1
             {:com.wsscode.pathom.core/path       [:sub]
              :com.wsscode.pathom.trace/direction :com.wsscode.pathom.trace/leave
              :com.wsscode.pathom.trace/event     :com.wsscode.pathom.parser/call-read
              :key                                :long}                                                   1
             {:com.wsscode.pathom.core/path   [:sub]
              :com.wsscode.pathom.trace/event :com.wsscode.pathom.parser/process-key
              :key                            :long}                                                       1
             {:com.wsscode.pathom.core/path                  []
              :com.wsscode.pathom.parser/key-process-timeout 1000
              :com.wsscode.pathom.trace/direction            :com.wsscode.pathom.trace/enter
              :com.wsscode.pathom.trace/event                :com.wsscode.pathom.parser/parse-loop}        1
             {:com.wsscode.pathom.core/path                  []
              :com.wsscode.pathom.parser/key-process-timeout 1000
              :com.wsscode.pathom.trace/direction            :com.wsscode.pathom.trace/leave
              :com.wsscode.pathom.trace/event                :com.wsscode.pathom.parser/parse-loop}        1
             {:com.wsscode.pathom.core/path             []
              :com.wsscode.pathom.parser/merge-result?  true
              :com.wsscode.pathom.parser/provides       #{:sub}
              :com.wsscode.pathom.parser/response-value {:sub {}}
              :com.wsscode.pathom.trace/event           :com.wsscode.pathom.parser/process-pending}        1
             {:com.wsscode.pathom.core/path               []
              :com.wsscode.pathom.parser/processing-count 1
              :com.wsscode.pathom.trace/event             :com.wsscode.pathom.parser/processing-wait-next} 2
             {:com.wsscode.pathom.core/path             []
              :com.wsscode.pathom.parser/response-value {:sub {}}
              :com.wsscode.pathom.trace/event           :com.wsscode.pathom.parser/merge-result}           1
             {:com.wsscode.pathom.core/path       []
              :com.wsscode.pathom.trace/direction :com.wsscode.pathom.trace/enter
              :com.wsscode.pathom.trace/event     :com.wsscode.pathom.parser/call-read
              :key                                :sub}                                                    1
             {:com.wsscode.pathom.core/path       []
              :com.wsscode.pathom.trace/direction :com.wsscode.pathom.trace/enter
              :com.wsscode.pathom.trace/event     :com.wsscode.pathom.parser/flush-watchers-loop}          1
             {:com.wsscode.pathom.core/path       []
              :com.wsscode.pathom.trace/direction :com.wsscode.pathom.trace/leave
              :com.wsscode.pathom.trace/event     :com.wsscode.pathom.parser/call-read
              :key                                :sub}                                                    1
             {:com.wsscode.pathom.core/path       []
              :com.wsscode.pathom.trace/direction :com.wsscode.pathom.trace/leave
              :com.wsscode.pathom.trace/event     :com.wsscode.pathom.parser/flush-watchers-loop}          1
             {:com.wsscode.pathom.core/path   []
              :com.wsscode.pathom.trace/event :com.wsscode.pathom.parser/async-return
              :key                            :sub}                                                        1
             {:com.wsscode.pathom.core/path   []
              :com.wsscode.pathom.trace/event :com.wsscode.pathom.parser/process-key
              :key                            :sub}                                                        1})))))

(comment
  @trace

  (do
    (reset! trace [])
    (<!! (pparser (quick-reader {::pp/key-process-timeout 3000
                                 ::pt/trace*              trace
                                 ::p/entity               (atom {:sub {:deep {}}})}
                    {:base (fn [_] 42)
                     :long (fn [_] {::pp/provides        #{:long}
                                    ::pp/response-stream (go
                                                           (<! (async/timeout 1000))
                                                           {::pp/provides       #{:long}
                                                            ::pp/response-value {:long "cant reach"}})})})
           [:base {:sub [{:deep [:long]}]}]))))
