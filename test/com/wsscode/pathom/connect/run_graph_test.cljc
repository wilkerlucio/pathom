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
             {::pcrg/node-id 1})
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
             {::pcrg/node-id 2})
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
                                ::pcrg/requires {:a {}}}}}))

    (testing "with run-next"
      (is (= (pcrg/compute-root-or
               {::pcrg/provides {:a {}}
                ::pcrg/requires {:a {}}
                ::pcrg/root     2
                ::pcrg/nodes    {2 {::pcrg/node-id  2
                                    ::pc/sym        'a
                                    ::pcrg/requires {:a {}}
                                    ::pcrg/provides {:a {}}
                                    ::pcrg/run-next 1}
                                 3 {::pcrg/node-id  3
                                    ::pc/sym        'a2
                                    ::pcrg/requires {:a {}}
                                    ::pcrg/provides {:a {}}
                                    ::pcrg/run-next 1}}}
               (assoc (base-graph-env) ::pcrg/id-counter (atom 3))
               {::pcrg/node-id 3})
             {::pcrg/provides {:a {}}
              ::pcrg/requires {:a {}}
              ::pcrg/root     4
              ::pcrg/nodes    {2 {::pcrg/node-id  2
                                  ::pc/sym        'a
                                  ::pcrg/requires {:a {}}
                                  ::pcrg/provides {:a {}}}
                               3 {::pcrg/node-id  3
                                  ::pc/sym        'a2
                                  ::pcrg/requires {:a {}}
                                  ::pcrg/provides {:a {}}}
                               4 {::pcrg/node-id  4
                                  ::pcrg/run-or   [2 3]
                                  ::pcrg/requires {:a {}}
                                  ::pcrg/run-next 1}}}))

      (testing "don't optimize when run next is different"
        (is (= (pcrg/compute-root-or
                 {::pcrg/provides {:a {}}
                  ::pcrg/requires {:a {}}
                  ::pcrg/root     2
                  ::pcrg/nodes    {2 {::pcrg/node-id  2
                                      ::pc/sym        'a
                                      ::pcrg/requires {:a {}}
                                      ::pcrg/provides {:a {}}
                                      ::pcrg/run-next 1}
                                   3 {::pcrg/node-id  3
                                      ::pc/sym        'a2
                                      ::pcrg/requires {:a {}}
                                      ::pcrg/provides {:a {}}
                                      ::pcrg/run-next 10}}}
                 (assoc (base-graph-env) ::pcrg/id-counter (atom 3))
                 {::pcrg/node-id 3})
               {::pcrg/provides {:a {}}
                ::pcrg/requires {:a {}}
                ::pcrg/root     4
                ::pcrg/nodes    {2 {::pcrg/node-id  2
                                    ::pc/sym        'a
                                    ::pcrg/requires {:a {}}
                                    ::pcrg/provides {:a {}}
                                    ::pcrg/run-next 1}
                                 3 {::pcrg/node-id  3
                                    ::pc/sym        'a2
                                    ::pcrg/requires {:a {}}
                                    ::pcrg/provides {:a {}}
                                    ::pcrg/run-next 10}
                                 4 {::pcrg/node-id  4
                                    ::pcrg/run-or   [2 3]
                                    ::pcrg/requires {:a {}}}}})))))

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
             {::pcrg/node-id 4})
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
                                ::pcrg/provides {:a {}}}}}))

    (testing "with run context"
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
                                    ::pcrg/requires {:a {}}
                                    ::pcrg/run-next 10}
                                 4 {::pcrg/node-id  4
                                    ::pc/sym        'a3
                                    ::pcrg/requires {:a {}}
                                    ::pcrg/provides {:a {}}
                                    ::pcrg/run-next 10}}}
               (base-graph-env)
               {::pcrg/node-id 4})
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
                                  ::pcrg/requires {:a {}}
                                  ::pcrg/run-next 10}
                               4 {::pcrg/node-id  4
                                  ::pc/sym        'a3
                                  ::pcrg/requires {:a {}}
                                  ::pcrg/provides {:a {}}}}})))))

(deftest compute-run-graph*-test
  (testing "no path"
    (is (= (compute-run-graph*
             {::resolvers []
              ::eql/query [:a]})
           {::pcrg/nodes       {}
            ::pcrg/index-syms  {}
            ::pcrg/unreachable #{:a}})))

  (testing "simplest path"
    (is (= (compute-run-graph*
             {::resolvers [{::pc/sym    'a
                            ::pc/output [:a]}]
              ::eql/query [:a]})
           {::pcrg/unreachable #{}
            ::pcrg/root        1
            ::pcrg/index-syms  {'a #{1}}
            ::pcrg/nodes       {1 {::pcrg/node-id  1
                                   ::pc/sym        'a
                                   ::pcrg/requires {:a {}}
                                   ::pcrg/provides {:a {}}}}})))

  (testing "broken chain"
    (is (= (compute-run-graph*
             {::resolvers [{::pc/sym    'b
                            ::pc/input  #{:a}
                            ::pc/output [:b]}
                           {::pc/sym    'c
                            ::pc/input  #{:b}
                            ::pc/output [:c]}]
              ::eql/query [:c]})
           '#::pcrg{:nodes       {}
                    :index-syms  {}
                    :root        nil
                    :unreachable #{:a}})))

  (testing "extra provides"
    (is (= (compute-run-graph*
             {::resolvers [{::pc/sym    'a
                            ::pc/output [:a :b :c]}]
              ::eql/query [:a]})
           {::pcrg/unreachable #{}
            ::pcrg/root        1
            ::pcrg/index-syms  {'a #{1}}
            ::pcrg/nodes       {1 {::pcrg/node-id  1
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
           '#::pcrg{:unreachable #{}
                    :index-syms  {a #{1} a2 #{2}}
                    :nodes       {1 {::pcrg/node-id  1
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
                    :root        3})))

  (testing "multiple attribute request"
    (is (= (compute-run-graph*
             {::resolvers [{::pc/sym    'a
                            ::pc/output [:a]}
                           {::pc/sym    'b
                            ::pc/output [:b]}]
              ::eql/query [:a :b]})
           {::pcrg/unreachable #{}
            ::pcrg/root        3
            ::pcrg/index-syms  '{a #{1}
                                 b #{2}}
            ::pcrg/nodes       {1 {::pcrg/node-id  1
                                   ::pc/sym        'a
                                   ::pcrg/requires {:a {}}
                                   ::pcrg/provides {:a {}}}
                                2 {::pcrg/node-id  2
                                   ::pc/sym        'b
                                   ::pcrg/requires {:b {}}
                                   ::pcrg/provides {:b {}}}
                                3 {::pcrg/node-id  3
                                   ::pcrg/run-and  [2 1]
                                   ::pcrg/requires {:a {}
                                                    :b {}}}}})))

  (testing "multiple attribute request on a single resolver"
    (is (= (compute-run-graph*
             {::resolvers [{::pc/sym    'a
                            ::pc/output [:a :b]}]
              ::eql/query [:a :b]})
           {::pcrg/unreachable #{}
            ::pcrg/root        1
            ::pcrg/index-syms  {'a #{1}}
            ::pcrg/nodes       {1 {::pcrg/node-id  1
                                   ::pc/sym        'a
                                   ::pcrg/requires {:a {}
                                                    :b {}}
                                   ::pcrg/provides {:a {}
                                                    :b {}}}}})))

  (testing "single dependency"
    (is (= (compute-run-graph*
             {::resolvers [{::pc/sym    'a
                            ::pc/output [:a]}
                           {::pc/sym    'b
                            ::pc/input  #{:a}
                            ::pc/output [:b]}]
              ::eql/query [:b]})
           {::pcrg/unreachable #{}
            ::pcrg/root        2
            ::pcrg/index-syms  '{a #{2}
                                 b #{1}}
            ::pcrg/nodes       {1 {::pcrg/node-id  1
                                   ::pc/sym        'b
                                   ::pcrg/requires {:b {}}
                                   ::pcrg/provides {:b {}}}
                                2 {::pcrg/node-id  2
                                   ::pc/sym        'a
                                   ::pcrg/run-next 1
                                   ::pcrg/requires {:a {}
                                                    :b {}}
                                   ::pcrg/provides {:a {}
                                                    :b {}}}}})))

  (testing "optimize multiple resolver calls"
    (is (= (compute-run-graph*
             {::resolvers [{::pc/sym    'a
                            ::pc/output [:a]}
                           {::pc/sym    'a2
                            ::pc/input #{:b}
                            ::pc/output [:a]}
                           {::pc/sym    'b
                            ::pc/output [:b]}]
              ::eql/query [:a]})
           '#::pcrg{:nodes       {1 {::pc/sym        a
                                     ::pcrg/node-id  1
                                     ::pcrg/requires {:a {}}
                                     ::pcrg/provides {:a {}}}
                                  2 {::pc/sym        a2
                                     ::pcrg/node-id  2
                                     ::pcrg/requires {:a {}}
                                     ::pcrg/provides {:a {}}}
                                  3 {::pc/sym        b
                                     ::pcrg/node-id  3
                                     ::pcrg/requires {:a {}
                                                      :b {}}
                                     ::pcrg/provides {:a {}
                                                      :b {}}
                                     ::pcrg/run-next 2}
                                  4 #::pcrg{:node-id  4
                                            :requires {:a {}
                                                       :b {}}
                                            :run-or   [3
                                                       1]}}
                    :index-syms  {a #{1} a2 #{2} b #{3}}
                    :unreachable #{}
                    :root        4})))


  (testing "single dependency with extra provides"
    (is (= (compute-run-graph*
             {::resolvers [{::pc/sym    'a
                            ::pc/output [:a]}
                           {::pc/sym    'b
                            ::pc/input  #{:a}
                            ::pc/output [:b :b2 :b3]}]
              ::eql/query [:b]})
           {::pcrg/unreachable #{}
            ::pcrg/root        2
            ::pcrg/index-syms  '{a #{2}
                                 b #{1}}
            ::pcrg/nodes       {1 {::pcrg/node-id  1
                                   ::pc/sym        'b
                                   ::pcrg/requires {:b {}}
                                   ::pcrg/provides {:b  {}
                                                    :b2 {}
                                                    :b3 {}}}
                                2 {::pcrg/node-id  2
                                   ::pc/sym        'a
                                   ::pcrg/run-next 1
                                   ::pcrg/requires {:a {}
                                                    :b {}}
                                   ::pcrg/provides {:b  {}
                                                    :b2 {}
                                                    :b3 {}
                                                    :a  {}}}}})))

  (testing "dependency chain"
    (is (= (compute-run-graph*
             {::resolvers [{::pc/sym    'a
                            ::pc/output [:a]}
                           {::pc/sym    'b
                            ::pc/input  #{:a}
                            ::pc/output [:b]}
                           {::pc/sym    'c
                            ::pc/input  #{:b}
                            ::pc/output [:c]}]
              ::eql/query [:c]})
           '#::pcrg{:unreachable #{}
                    :index-syms  {a #{3}
                                  b #{2}
                                  c #{1}}
                    :nodes       {1 {::pcrg/node-id  1
                                     ::pcrg/provides {:c {}}
                                     ::pcrg/requires {:c {}}
                                     ::pc/sym        c}
                                  2 {::pcrg/node-id  2
                                     ::pcrg/provides {:b {}
                                                      :c {}}
                                     ::pcrg/requires {:b {}
                                                      :c {}}
                                     ::pcrg/run-next 1
                                     ::pc/sym        b}
                                  3 {::pcrg/node-id  3
                                     ::pcrg/provides {:a {}
                                                      :b {}
                                                      :c {}}
                                     ::pcrg/requires {:a {}
                                                      :b {}
                                                      :c {}}
                                     ::pcrg/run-next 2
                                     ::pc/sym        a}}
                    :root        3})))

  (testing "dependency chain with available data"
    (is (= (compute-run-graph*
             {::resolvers           [{::pc/sym    'b
                                      ::pc/input  #{:a}
                                      ::pc/output [:b]}
                                     {::pc/sym    'c
                                      ::pc/input  #{:b}
                                      ::pc/output [:c]}]
              ::eql/query           [:c]
              ::pcrg/available-data {:a {}}})
           '#::pcrg{:unreachable #{}
                    :index-syms  {b #{2}
                                  c #{1}}
                    :nodes       {1 {::pcrg/node-id  1
                                     ::pcrg/provides {:c {}}
                                     ::pcrg/requires {:c {}}
                                     ::pc/sym        c}
                                  2 {::pcrg/node-id  2
                                     ::pcrg/provides {:b {}
                                                      :c {}}
                                     ::pcrg/requires {:b {}
                                                      :c {}}
                                     ::pcrg/run-next 1
                                     ::pc/sym        b}}
                    :root        2})))

  (testing "multiple paths chain at root"
    (is (= (compute-run-graph*
             {::resolvers [{::pc/sym    'a
                            ::pc/output [:a]}
                           {::pc/sym    'a2
                            ::pc/output [:a]}
                           {::pc/sym    'b
                            ::pc/input  #{:a}
                            ::pc/output [:b]}]
              ::eql/query [:b]})
           '{::pcrg/nodes       {1 {::pc/sym        b
                                    ::pcrg/node-id  1
                                    ::pcrg/requires {:b {}}
                                    ::pcrg/provides {:b {}}}
                                 2 {::pc/sym        a
                                    ::pcrg/node-id  2
                                    ::pcrg/requires {:b {} :a {}}
                                    ::pcrg/provides {:b {} :a {}}}
                                 3 {::pc/sym        a2
                                    ::pcrg/node-id  3
                                    ::pcrg/requires {:b {} :a {}}
                                    ::pcrg/provides {:b {} :a {}}}
                                 4 {::pcrg/node-id  4
                                    ::pcrg/requires {:b {} :a {}}
                                    ::pcrg/run-next 1
                                    ::pcrg/run-or   [2 3]}}
             ::pcrg/index-syms  {a  #{2}
                                 a2 #{3}
                                 b  #{1}}
             ::pcrg/unreachable #{}
             ::pcrg/root        4})))

  (testing "multiple paths chain at edge"
    (is (= (compute-run-graph*
             {::resolvers [{::pc/sym    'a
                            ::pc/output [:a]}
                           {::pc/sym    'b
                            ::pc/input  #{:a}
                            ::pc/output [:b]}
                           {::pc/sym    'b2
                            ::pc/input  #{:a}
                            ::pc/output [:b]}]
              ::eql/query [:b]})
           '{::pcrg/nodes       {1 {::pc/sym        b2
                                    ::pcrg/node-id  1
                                    ::pcrg/requires {:b {}}
                                    ::pcrg/provides {:b {}}}
                                 2 {::pc/sym        b
                                    ::pcrg/node-id  2
                                    ::pcrg/requires {:b {}}
                                    ::pcrg/provides {:b {}}}
                                 3 {::pcrg/node-id  3
                                    ::pcrg/requires {:b {}}
                                    ::pcrg/run-or   [1 2]}
                                 4 {::pc/sym        a
                                    ::pcrg/node-id  4
                                    ::pcrg/requires {:b {} :a {}}
                                    ::pcrg/provides {:a {}}
                                    ::pcrg/run-next 3}}
             ::pcrg/unreachable #{}
             ::pcrg/index-syms  {a  #{4}
                                 b  #{2}
                                 b2 #{1}}
             ::pcrg/root        4})))

  (testing "multiple inputs"
    (is (= (compute-run-graph*
             {::resolvers [{::pc/sym    'a
                            ::pc/output [:a]}
                           {::pc/sym    'b
                            ::pc/output [:b]}
                           {::pc/sym    'c
                            ::pc/input  #{:a :b}
                            ::pc/output [:c]}]
              ::eql/query [:c]})
           '#::pcrg{:nodes       {1 {:com.wsscode.pathom.connect/sym c
                                     ::pcrg/node-id                  1
                                     ::pcrg/requires                 {:c {}}
                                     ::pcrg/provides                 {:c {}}}
                                  2 {:com.wsscode.pathom.connect/sym b
                                     ::pcrg/node-id                  2
                                     ::pcrg/requires                 {:c {}
                                                                      :b {}}
                                     ::pcrg/provides                 {:c {}
                                                                      :b {}}}
                                  3 {:com.wsscode.pathom.connect/sym a
                                     ::pcrg/node-id                  3
                                     ::pcrg/requires                 {:c {}
                                                                      :a {}}
                                     ::pcrg/provides                 {:c {}
                                                                      :a {}}}
                                  4 #::pcrg{:node-id        4
                                            :requires       {:c {}
                                                             :b {}
                                                             :a {}}
                                            :run-and        [3
                                                             2]
                                            ::pcrg/run-next 1}}
                    :index-syms  {a #{3}
                                  b #{2}
                                  c #{1}}
                    :unreachable #{}
                    :root        4})))

  (testing "diamond shape deps"
    (is (= (compute-run-graph*
             {::resolvers [{::pc/sym    'a
                            ::pc/output [:a]}
                           {::pc/sym    'b
                            ::pc/input  #{:a}
                            ::pc/output [:b]}
                           {::pc/sym    'c
                            ::pc/input  #{:a}
                            ::pc/output [:c]}
                           {::pc/sym    'd
                            ::pc/input  #{:b :c}
                            ::pc/output [:d]}]
              ::eql/query [:d]})
           '#::pcrg{:nodes       {1 {::pc/sym        d
                                     ::pcrg/node-id  1
                                     ::pcrg/requires {:d {}}
                                     ::pcrg/provides {:d {}}}
                                  2 {::pc/sym        c
                                     ::pcrg/node-id  2
                                     ::pcrg/requires {:d {}
                                                      :c {}}
                                     ::pcrg/provides {:d {}
                                                      :c {}}}
                                  3 {::pc/sym        a
                                     ::pcrg/node-id  3
                                     ::pcrg/requires {:d {}
                                                      :c {}
                                                      :b {}
                                                      :a {}}
                                     ::pcrg/provides {:d {}
                                                      :c {}
                                                      :b {}
                                                      :a {}}
                                     ::pcrg/run-next 5}
                                  4 {::pc/sym        b
                                     ::pcrg/node-id  4
                                     ::pcrg/requires {:d {}
                                                      :b {}}
                                     ::pcrg/provides {:d {}
                                                      :b {}}}
                                  5 #::pcrg{:node-id  5
                                            :requires {:d {}
                                                       :c {}
                                                       :b {}}
                                            :run-and  [2
                                                       4]
                                            :run-next 1}}
                    :index-syms  {d #{1} c #{2} a #{3} b #{4}}
                    :unreachable #{}
                    :root        3}))))
