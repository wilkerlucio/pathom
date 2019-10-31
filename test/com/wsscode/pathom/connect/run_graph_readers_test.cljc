(ns com.wsscode.pathom.connect.run-graph-readers-test
  (:require [clojure.test :refer :all]
            [com.wsscode.pathom.connect :as pc]
            [com.wsscode.pathom.sugar :as ps]
            [com.wsscode.pathom.core :as p]))

(defn run-parser [{::keys [resolvers query]}]
  (let [parser (ps/connect-serial-parser
                 {::ps/connect-reader pc/reader3}
                 resolvers)]
    (parser {} query)))

(deftest test-runner3
  (testing "simple resolver"
    (is (= (run-parser
             {::resolvers [(pc/resolver 'a
                             {::pc/output [:a]}
                             (fn [_ _] {:a 42}))]
              ::query     [:a]})
           {:a 42}))

    (is (= (run-parser
             {::resolvers [(pc/resolver 'a
                             {::pc/output [:a :b]}
                             (fn [_ _] {:a 42 :b "foo"}))]
              ::query     [:a :b]})
           {:a 42
            :b "foo"})))

  (testing "missed output"
    (is (= (run-parser
             {::resolvers [(pc/resolver 'a
                             {::pc/output [:a]}
                             (fn [_ _] {}))]
              ::query     [:a]})
           {:a ::p/not-found}))))
