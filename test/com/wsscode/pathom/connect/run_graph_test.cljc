(ns com.wsscode.pathom.connect.run-graph-test
  (:require [clojure.test :refer :all]
            [clojure.walk :as walk]
            [com.wsscode.pathom.connect :as pc]
            [com.wsscode.pathom.connect.run-graph :as pcrg]
            [edn-query-language.core :as eql]))

(defn register-index [resolvers]
  (let [resolvers (walk/postwalk
                    (fn [x]
                      (if (and (map? x) (contains? x ::pc/output))
                        (assoc x ::pc/resolve (fn [_ _]))
                        x))
                    resolvers)]
    (pc/register {} resolvers)))

(defn base-graph-env []
  {::pcrg/id-counter     (atom 0)
   ::pcrg/index-syms     {}
   ::pcrg/available-data {}})

(defn compute-run-graph* [{::keys [resolvers] :as options}]
  (pcrg/compute-run-graph*
    (merge (register-index resolvers)
           (base-graph-env)
           options)))

(deftest test-compute-root-or
  (testing "set root when no root is the current"
    (is (= (pcrg/compute-root-or
             {::pcrg/provides {:a {}}
              ::pcrg/requires {:a {}}
              ::pcrg/nodes    {1 {::pcrg/node-id  1
                                  ::pc/sym        'a
                                  ::pcrg/requires {:a {}}
                                  ::pcrg/provides {:a {}}}}}
             (base-graph-env)
             1)
           {::pcrg/provides {:a {}}
            ::pcrg/requires {:a {}}
            ::pcrg/root     1
            ::pcrg/nodes    {1 {::pcrg/node-id  1
                                ::pc/sym        'a
                                ::pcrg/requires {:a {}}
                                ::pcrg/provides {:a {}}}}})))

  (testing "create new or runner"
    (is (= (pcrg/compute-root-or
             {::pcrg/provides {:a {}}
              ::pcrg/requires {:a {}}
              ::pcrg/root     1
              ::pcrg/nodes    {1 {::pcrg/node-id  1
                                  ::pc/sym        'a
                                  ::pcrg/requires {:a {}}
                                  ::pcrg/provides {:a {}}}
                               2 {::pcrg/node-id  2
                                  ::pc/sym        'a2
                                  ::pcrg/requires {:a {}}
                                  ::pcrg/provides {:a {}}}}}
             (assoc (base-graph-env) ::pcrg/id-counter (atom 2))
             2)
           {::pcrg/provides {:a {}}
            ::pcrg/requires {:a {}}
            ::pcrg/root     3
            ::pcrg/nodes    {1 {::pcrg/node-id  1
                                ::pc/sym        'a
                                ::pcrg/requires {:a {}}
                                ::pcrg/provides {:a {}}}
                             2 {::pcrg/node-id  2
                                ::pc/sym        'a2
                                ::pcrg/requires {:a {}}
                                ::pcrg/provides {:a {}}}
                             3 {::pcrg/node-id  3
                                ::pcrg/run-or   [1 2]
                                ::pcrg/requires {:a {}}}}})))

  (testing "add to the runner"
    (is (= (pcrg/compute-root-or
             {::pcrg/provides {:a {}}
              ::pcrg/requires {:a {}}
              ::pcrg/root     3
              ::pcrg/nodes    {1 {::pcrg/node-id  1
                                  ::pc/sym        'a
                                  ::pcrg/requires {:a {}}
                                  ::pcrg/provides {:a {}}}
                               2 {::pcrg/node-id  2
                                  ::pc/sym        'a2
                                  ::pcrg/requires {:a {}}
                                  ::pcrg/provides {:a {}}}
                               3 {::pcrg/node-id  3
                                  ::pcrg/run-or   [1 2]
                                  ::pcrg/requires {:a {}}}
                               4 {::pcrg/node-id  4
                                  ::pc/sym        'a3
                                  ::pcrg/requires {:a {}}
                                  ::pcrg/provides {:a {}}}}}
             (base-graph-env)
             4)
           {::pcrg/provides {:a {}}
            ::pcrg/requires {:a {}}
            ::pcrg/root     3
            ::pcrg/nodes    {1 {::pcrg/node-id  1
                                ::pc/sym        'a
                                ::pcrg/requires {:a {}}
                                ::pcrg/provides {:a {}}}
                             2 {::pcrg/node-id  2
                                ::pc/sym        'a2
                                ::pcrg/requires {:a {}}
                                ::pcrg/provides {:a {}}}
                             3 {::pcrg/node-id  3
                                ::pcrg/run-or   [1 2 4]
                                ::pcrg/requires {:a {}}}
                             4 {::pcrg/node-id  4
                                ::pc/sym        'a3
                                ::pcrg/requires {:a {}}
                                ::pcrg/provides {:a {}}}}}))))

(deftest compute-run-graph*-test
  (testing "no path"
    (is (= (compute-run-graph*
             {::resolvers []
              ::eql/query [:a]})
           {::pcrg/nodes    {}
            ::pcrg/provides {}
            ::pcrg/requires {}})))

  (testing "simplest path"
    (is (= (compute-run-graph*
             {::resolvers [{::pc/sym    'a
                            ::pc/output [:a]}]
              ::eql/query [:a]})
           {::pcrg/provides {:a {}}
            ::pcrg/requires {:a {}}
            ::pcrg/root     1
            ::pcrg/nodes    {1 {::pcrg/node-id  1
                                ::pc/sym        'a
                                ::pcrg/requires {:a {}}
                                ::pcrg/provides {:a {}}}}})))

  (testing "extra provides"
    (is (= (compute-run-graph*
             {::resolvers [{::pc/sym    'a
                            ::pc/output [:a :b :c]}]
              ::eql/query [:a]})
           {::pcrg/provides {:a {}
                             :b {}
                             :c {}}
            ::pcrg/requires {:a {}}
            ::pcrg/root     1
            ::pcrg/nodes    {1 {::pcrg/node-id  1
                                ::pc/sym        'a
                                ::pcrg/requires {:a {}}
                                ::pcrg/provides {:a {}
                                                 :b {}
                                                 :c {}}}}})))

  (testing "multiple paths"
    (is (= (compute-run-graph*
             {::resolvers [{::pc/sym    'a
                            ::pc/output [:a]}
                           {::pc/sym    'a2
                            ::pc/output [:a]}]
              ::eql/query [:a]})
           '#::pcrg{:nodes    {1 {::pcrg/node-id  1
                                  ::pcrg/provides {:a {}}
                                  ::pcrg/requires {:a {}}
                                  ::pc/sym        a}
                               2 {::pcrg/node-id  2
                                  ::pcrg/provides {:a {}}
                                  ::pcrg/requires {:a {}}
                                  ::pc/sym        a2}
                               3 #::pcrg{:node-id  3
                                         :requires {:a {}}
                                         :run-or   [1
                                                    2]}}
                    :provides {:a {}}
                    :requires {:a {}}
                    :root     3})))

  (testing "multiple attribute request"
    (is (= (compute-run-graph*
             {::resolvers [{::pc/sym    'a
                            ::pc/output [:a]}
                           {::pc/sym    'b
                            ::pc/output [:b]}]
              ::eql/query [:a :b]})
           {::pcrg/provides {:a {}
                             :b {}}
            ::pcrg/requires {:a {}
                             :b {}}
            ::pcrg/root     3
            ::pcrg/nodes    {1 {::pcrg/node-id  1
                                ::pc/sym        'a
                                ::pcrg/requires {:a {}}
                                ::pcrg/provides {:a {}}}
                             2 {::pcrg/node-id  2
                                ::pc/sym        'b
                                ::pcrg/requires {:b {}}
                                ::pcrg/provides {:b {}}}
                             3 {::pcrg/node-id  3
                                ::pcrg/run-and  [1 2]
                                ::pcrg/requires {:a {}
                                                 :b {}}}}})))

  (testing "single dependency"
    (is (= (compute-run-graph*
             {::resolvers [{::pc/sym    'a
                            ::pc/output [:a]}
                           {::pc/sym    'b
                            ::pc/input  #{:a}
                            ::pc/output [:b]}]
              ::eql/query [:b]})
           {::pcrg/provides {:a {}
                             :b {}}
            ::pcrg/requires {:a {}
                             :b {}}
            ::pcrg/root     2
            ::pcrg/nodes    {1 {::pcrg/node-id  1
                                ::pc/sym        'a
                                ::pcrg/requires {:a {}
                                                 :b {}}
                                ::pcrg/provides {:a {}
                                                 :b {}}
                                ::pcrg/run-next 2}
                             2 {::pcrg/node-id  2
                                ::pc/sym        'b
                                ::pcrg/requires {:b {}}
                                ::pcrg/provides {:b {}}}}}))))
