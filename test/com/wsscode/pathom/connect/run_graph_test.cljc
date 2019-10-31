(ns com.wsscode.pathom.connect.run-graph-test
  (:require [clojure.edn :as edn]
            [clojure.java.io :as io]
            [clojure.test :refer :all]
            [clojure.walk :as walk]
            [com.wsscode.pathom.connect :as pc]
            [com.wsscode.pathom.connect.run-graph :as pcrg]
            [com.wsscode.pathom.core :as p]
            [edn-query-language.core :as eql]
            [tangle.core :as tangle]))

(defn register-index [resolvers]
  (let [resolvers (walk/postwalk
                    (fn [x]
                      (if (and (map? x) (contains? x ::pc/output))
                        (assoc x ::pc/resolve (fn [_ _]))
                        x))
                    resolvers)]
    (pc/register {} resolvers)))

(defn base-graph-env []
  {::pcrg/id-counter        (atom 0)
   ::pcrg/available-data    {}
   ::p/placeholder-prefixes #{">"}})

(defn render-graph [{::pcrg/keys [nodes root] :as graph} env]
  (let [edges (into []
                    (mapcat
                      (fn [{::pcrg/keys [run-next node-id] :as node}]
                        (let [branches (pcrg/node-branches node)]
                          (cond-> (into []
                                        (map #(vector node-id % {:color "orange"}))
                                        branches)
                            run-next
                            (conj [node-id run-next])))))
                    (vals nodes))
        dot   (tangle/graph->dot (mapv ::pcrg/node-id (vals nodes)) edges
                {:node             {:shape :circle}
                 :directed?        true
                 :node->id         identity
                 :node->descriptor (fn [node-id]
                                     (let [node (get nodes node-id)]
                                       (cond-> {:id    (str node-id)
                                                :style "filled"
                                                :color (if (= node-id root) "blue" "#F3F3F3")
                                                :label (str
                                                         (or (::pc/sym node)
                                                             (if (::pcrg/run-and node) "AND")
                                                             (if (::pcrg/run-or node) "OR")))}
                                         (get-in env [::pc/index-resolvers (::pc/sym node) ::pc/dynamic-resolver?])
                                         (assoc
                                           :fontcolor "white"
                                           :fillcolor "black")

                                         (::pcrg/run-and node)
                                         (assoc
                                           :fillcolor "yellow")

                                         (::pcrg/run-or node)
                                         (assoc
                                           :fillcolor "cyan"))))})]
    (io/copy (tangle/dot->image dot "png") (io/file "out.png"))
    graph))

(defn compute-run-graph* [{::keys [out env]}]
  (pcrg/compute-run-graph
    (merge (pcrg/base-out) out)
    env))

(defn compute-run-graph [{::keys     [resolvers render-graphviz? time?]
                          ::eql/keys [query]
                          :or        {render-graphviz? true
                                      time?            false}
                          :as        options}]
  (let [env     (cond-> (merge (base-graph-env)
                               (-> options
                                   (dissoc ::eql/query)
                                   (assoc :edn-query-language.ast/node (eql/query->ast query))))
                  resolvers
                  (pc/merge-indexes (register-index resolvers)))
        options (assoc options ::env env)]
    (cond->
      (if time?
        (time (compute-run-graph* options))
        (compute-run-graph* options))

      render-graphviz?
      (render-graph env))))

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
             (assoc (base-graph-env) ::pcrg/id-counter (atom 2)
               ::pc/attribute :a)
             {::pcrg/node-id 2})
           {::pcrg/provides {:a {}}
            ::pcrg/requires {:a {}}
            ::pcrg/root     3
            ::pcrg/nodes    {1 {::pcrg/node-id    1
                                ::pcrg/after-node 3
                                ::pc/sym          'a
                                ::pcrg/requires   {:a {}}
                                ::pcrg/provides   {:a {}}}
                             2 {::pcrg/node-id    2
                                ::pcrg/after-node 3
                                ::pc/sym          'a2
                                ::pcrg/requires   {:a {}}
                                ::pcrg/provides   {:a {}}}
                             3 {::pcrg/node-id  3
                                ::pcrg/provides {:a {}}
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
               (assoc (base-graph-env) ::pcrg/id-counter (atom 3)
                 ::pc/attribute :a
                 ::pc/index-resolvers {'a  {::pc/provides {:a {}}}
                                       'a2 {::pc/provides {:a {}}}})
               {::pcrg/node-id 3})
             {::pcrg/provides {:a {}}
              ::pcrg/requires {:a {}}
              ::pcrg/root     4
              ::pcrg/nodes    {1 {::pcrg/after-node 4}
                               2 {::pcrg/node-id    2
                                  ::pc/sym          'a
                                  ::pcrg/after-node 4
                                  ::pcrg/requires   {:a {}}
                                  ::pcrg/provides   {:a {}}}
                               3 {::pcrg/node-id    3
                                  ::pcrg/after-node 4
                                  ::pc/sym          'a2
                                  ::pcrg/requires   {:a {}}
                                  ::pcrg/provides   {:a {}}}
                               4 {::pcrg/node-id  4
                                  ::pcrg/run-or   [2 3]
                                  ::pcrg/requires {:a {}}
                                  ::pcrg/provides {:a {}}
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
                 (assoc (base-graph-env) ::pcrg/id-counter (atom 3)
                   ::pc/attribute :a)
                 {::pcrg/node-id 3})
               {::pcrg/provides {:a {}}
                ::pcrg/requires {:a {}}
                ::pcrg/root     4
                ::pcrg/nodes    {2 {::pcrg/node-id    2
                                    ::pcrg/after-node 4
                                    ::pc/sym          'a
                                    ::pcrg/requires   {:a {}}
                                    ::pcrg/provides   {:a {}}
                                    ::pcrg/run-next   1}
                                 3 {::pcrg/node-id    3
                                    ::pcrg/after-node 4
                                    ::pc/sym          'a2
                                    ::pcrg/requires   {:a {}}
                                    ::pcrg/provides   {:a {}}
                                    ::pcrg/run-next   10}
                                 4 {::pcrg/node-id  4
                                    ::pcrg/run-or   [2 3]
                                    ::pcrg/provides {:a {}}
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
                                ::pcrg/provides {:a {}}
                                ::pcrg/run-or   [1 2 4]
                                ::pcrg/requires {:a {}}}
                             4 {::pcrg/node-id    4
                                ::pcrg/after-node 3
                                ::pc/sym          'a3
                                ::pcrg/requires   {:a {}}
                                ::pcrg/provides   {:a {}}}}}))

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
               (assoc (base-graph-env)
                 ::pc/index-resolvers {'a3 {::pc/provides {:a {}}}})
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
                                  ::pcrg/provides {:a {}}
                                  ::pcrg/run-or   [1 2 4]
                                  ::pcrg/requires {:a {}}
                                  ::pcrg/run-next 10}
                               4 {::pcrg/node-id    4
                                  ::pcrg/after-node 3
                                  ::pc/sym          'a3
                                  ::pcrg/requires   {:a {}}
                                  ::pcrg/provides   {:a {}}}}})))))

(deftest compute-run-graph-test
  (testing "no path"
    (is (= (compute-run-graph
             {::resolvers []
              ::eql/query [:a]})
           {::pcrg/nodes             {}
            ::pcrg/index-syms        {}
            ::pcrg/unreachable-attrs #{:a}
            ::pcrg/unreachable-syms  #{}}))

    (testing "broken chain"
      (is (= (compute-run-graph
               {::resolvers [{::pc/sym    'b
                              ::pc/input  #{:a}
                              ::pc/output [:b]}]
                ::eql/query [:b]})
             '#::pcrg{:nodes             {}
                      :index-syms        {}
                      :root              nil
                      :unreachable-attrs #{:a :b}
                      :unreachable-syms  #{b}}))

      (is (= (compute-run-graph
               {::resolvers [{::pc/sym    'b
                              ::pc/input  #{:a}
                              ::pc/output [:b]}
                             {::pc/sym    'b1
                              ::pc/input  #{:a}
                              ::pc/output [:b]}]
                ::eql/query [:b]})
             '#::pcrg{:nodes             {}
                      :index-syms        {}
                      :root              nil
                      :unreachable-attrs #{:a :b}
                      :unreachable-syms  #{b b1}}))

      (is (= (compute-run-graph
               {::resolvers [{::pc/sym    'a
                              ::pc/output [:a]}
                             {::pc/sym    'b
                              ::pc/input  #{:a}
                              ::pc/output [:b]}]
                ::eql/query [:b]
                ::out       {::pcrg/unreachable-attrs #{:a}}})
             '#::pcrg{:nodes             {}
                      :index-syms        {}
                      :root              nil
                      :unreachable-attrs #{:a :b}
                      :unreachable-syms  #{b}}))

      (is (= (compute-run-graph
               {::resolvers [{::pc/sym    'b
                              ::pc/input  #{:a}
                              ::pc/output [:b]}
                             {::pc/sym    'c
                              ::pc/input  #{:b}
                              ::pc/output [:c]}]
                ::eql/query [:c]})
             '#::pcrg{:nodes             {}
                      :index-syms        {}
                      :root              nil
                      :unreachable-attrs #{:a :b :c}
                      :unreachable-syms  #{b c}}))

      (is (= (compute-run-graph
               {::resolvers [{::pc/sym    'b
                              ::pc/input  #{:a}
                              ::pc/output [:b]}
                             {::pc/sym    'd
                              ::pc/output [:d]}
                             {::pc/sym    'c
                              ::pc/input  #{:b :d}
                              ::pc/output [:c]}]
                ::eql/query [:c]})
             '#::pcrg{:nodes             {}
                      :index-syms        {}
                      :root              nil
                      :unreachable-attrs #{:a :b :c}
                      :unreachable-syms  #{b c}}))

      (is (= (compute-run-graph
               {::resolvers [{::pc/sym    'b
                              ::pc/input  #{:a}
                              ::pc/output [:b]}
                             {::pc/sym    'd
                              ::pc/output [:d]}
                             {::pc/sym    'c
                              ::pc/input  #{:b :d}
                              ::pc/output [:c]}]
                ::eql/query [:c :d]})
             '#::pcrg{:nodes             {4 {::pc/sym        d
                                             ::pcrg/node-id  4
                                             ::pcrg/requires {:d {}}
                                             ::pcrg/provides {:d {}}}}
                      :index-syms        {d #{4}}
                      :unreachable-attrs #{:c :b :a}
                      :unreachable-syms  #{b c}
                      :root              4}))))

  (testing "simplest path"
    (is (= (compute-run-graph
             {::resolvers [{::pc/sym    'a
                            ::pc/output [:a]}]
              ::eql/query [:a]})
           {::pcrg/unreachable-attrs #{}
            ::pcrg/unreachable-syms  #{}
            ::pcrg/root              1
            ::pcrg/index-syms        {'a #{1}}
            ::pcrg/nodes             {1 {::pcrg/node-id  1
                                         ::pc/sym        'a
                                         ::pcrg/requires {:a {}}
                                         ::pcrg/provides {:a {}}}}}))

    (testing "ignore idents"
      (is (= (compute-run-graph
               {::resolvers [{::pc/sym    'a
                              ::pc/output [:a]}]
                ::eql/query [:a [:foo "bar"]]})
             {::pcrg/unreachable-attrs #{}
              ::pcrg/unreachable-syms  #{}
              ::pcrg/root              1
              ::pcrg/index-syms        {'a #{1}}
              ::pcrg/nodes             {1 {::pcrg/node-id  1
                                           ::pc/sym        'a
                                           ::pcrg/requires {:a {}}
                                           ::pcrg/provides {:a {}}}}}))))

  (testing "cycles"
    (is (= (compute-run-graph
             {::resolvers [{::pc/sym    'a
                            ::pc/input  #{:b}
                            ::pc/output [:a]}
                           {::pc/sym    'b
                            ::pc/input  #{:a}
                            ::pc/output [:b]}]
              ::eql/query [:a]})
           '#::pcrg{:nodes             {}
                    :index-syms        {}
                    :unreachable-attrs #{:b :a}
                    :unreachable-syms  #{a b}
                    :root              nil}))

    (is (= (compute-run-graph
             {::resolvers [{::pc/sym    'a
                            ::pc/input  #{:c}
                            ::pc/output [:a]}
                           {::pc/sym    'b
                            ::pc/input  #{:a}
                            ::pc/output [:b]}
                           {::pc/sym    'c
                            ::pc/input  #{:b}
                            ::pc/output [:c]}]
              ::eql/query [:a]})
           '#::pcrg{:nodes             {}
                    :index-syms        {}
                    :unreachable-attrs #{:c :b :a}
                    :unreachable-syms  #{a b c}
                    :root              nil}))

    (testing "partial cycle"
      (is (= (compute-run-graph
               {::resolvers [{::pc/sym    'a
                              ::pc/input  #{:c}
                              ::pc/output [:a]}
                             {::pc/sym    'a1
                              ::pc/output [:a]}
                             {::pc/sym    'b
                              ::pc/input  #{:a}
                              ::pc/output [:b]}
                             {::pc/sym    'c
                              ::pc/input  #{:b}
                              ::pc/output [:c]}
                             {::pc/sym    'd
                              ::pc/output [:d]}]
                ::eql/query [:c :a]})
             '#::pcrg{:index-syms        {a1 #{4}
                                          b  #{2}
                                          c  #{1}}
                      :nodes             {1 {::pcrg/after-node 2
                                             ::pcrg/node-id    1
                                             ::pcrg/provides   {:c {}}
                                             ::pcrg/requires   {:c {}}
                                             ::pc/sym          c}
                                          2 {::pcrg/after-node 4
                                             ::pcrg/node-id    2
                                             ::pcrg/provides   {:b {}
                                                                :c {}}
                                             ::pcrg/requires   {:b {}}
                                             ::pcrg/run-next   1
                                             ::pc/sym          b}
                                          4 {::pcrg/node-id  4
                                             ::pcrg/provides {:a {}
                                                              :b {}
                                                              :c {}}
                                             ::pcrg/requires {:a {}}
                                             ::pcrg/run-next 2
                                             ::pc/sym        a1}}
                      :root              4
                      :unreachable-attrs #{}
                      :unreachable-syms  #{a}}))))

  (testing "extra provides"
    (is (= (compute-run-graph
             {::resolvers [{::pc/sym    'a
                            ::pc/output [:a :b :c]}]
              ::eql/query [:a]})
           {::pcrg/unreachable-attrs #{}
            ::pcrg/root              1
            ::pcrg/index-syms        {'a #{1}}
            ::pcrg/unreachable-syms  #{}
            ::pcrg/nodes             {1 {::pcrg/node-id  1
                                         ::pc/sym        'a
                                         ::pcrg/requires {:a {}}
                                         ::pcrg/provides {:a {}
                                                          :b {}
                                                          :c {}}}}})))

  (testing "multiple paths"
    (is (= (compute-run-graph
             {::resolvers [{::pc/sym    'a
                            ::pc/output [:a]}
                           {::pc/sym    'a2
                            ::pc/output [:a]}]
              ::eql/query [:a]})
           '#::pcrg{:unreachable-attrs #{}
                    :unreachable-syms  #{}
                    :index-syms        {a #{1} a2 #{2}}
                    :nodes             {1 {::pcrg/node-id    1
                                           ::pcrg/after-node 3
                                           ::pcrg/provides   {:a {}}
                                           ::pcrg/requires   {:a {}}
                                           ::pc/sym          a}
                                        2 {::pcrg/node-id    2
                                           ::pcrg/after-node 3
                                           ::pcrg/provides   {:a {}}
                                           ::pcrg/requires   {:a {}}
                                           ::pc/sym          a2}
                                        3 #::pcrg{:node-id  3
                                                  :provides {:a {}}
                                                  :requires {:a {}}
                                                  :run-or   [1
                                                             2]}}
                    :root              3})))

  (testing "multiple attribute request"
    (is (= (compute-run-graph
             {::resolvers [{::pc/sym    'a
                            ::pc/output [:a]}
                           {::pc/sym    'b
                            ::pc/output [:b]}]
              ::eql/query [:a :b]})
           {::pcrg/unreachable-attrs #{}
            ::pcrg/unreachable-syms  #{}
            ::pcrg/root              3
            ::pcrg/index-syms        '{a #{1}
                                       b #{2}}
            ::pcrg/nodes             {1 {::pcrg/node-id    1
                                         ::pc/sym          'a
                                         ::pcrg/after-node 3
                                         ::pcrg/requires   {:a {}}
                                         ::pcrg/provides   {:a {}}}
                                      2 {::pcrg/node-id    2
                                         ::pc/sym          'b
                                         ::pcrg/after-node 3
                                         ::pcrg/requires   {:b {}}
                                         ::pcrg/provides   {:b {}}}
                                      3 {::pcrg/node-id  3
                                         ::pcrg/run-and  [2 1]
                                         ::pcrg/provides {:a {}
                                                          :b {}}
                                         ::pcrg/requires {:a {}
                                                          :b {}}}}}))

    (is (= (compute-run-graph
             {::resolvers [{::pc/sym    'a
                            ::pc/output [:a]}
                           {::pc/sym    'b
                            ::pc/output [:b]}
                           {::pc/sym    'c
                            ::pc/output [:c]}]
              ::eql/query [:a :b :c]})
           {::pcrg/unreachable-attrs #{}
            ::pcrg/unreachable-syms  #{}
            ::pcrg/root              3
            ::pcrg/index-syms        '{a #{1}
                                       b #{2}
                                       c #{4}}
            ::pcrg/nodes             {1 {::pcrg/node-id    1
                                         ::pc/sym          'a
                                         ::pcrg/after-node 3
                                         ::pcrg/requires   {:a {}}
                                         ::pcrg/provides   {:a {}}}
                                      2 {::pcrg/node-id    2
                                         ::pc/sym          'b
                                         ::pcrg/after-node 3
                                         ::pcrg/requires   {:b {}}
                                         ::pcrg/provides   {:b {}}}
                                      3 {::pcrg/node-id  3
                                         ::pcrg/run-and  [2 1 4]
                                         ::pcrg/provides {:a {}
                                                          :b {}
                                                          :c {}}
                                         ::pcrg/requires {:a {}
                                                          :b {}
                                                          :c {}}}
                                      4 {::pc/sym          'c
                                         ::pcrg/node-id    4
                                         ::pcrg/requires   {:c {}}
                                         ::pcrg/provides   {:c {}}
                                         ::pcrg/after-node 3}}})))

  (testing "multiple attribute request on a single resolver"
    (is (= (compute-run-graph
             {::resolvers [{::pc/sym    'a
                            ::pc/output [:a :b]}]
              ::eql/query [:a :b]})
           {::pcrg/unreachable-attrs #{}
            ::pcrg/unreachable-syms  #{}
            ::pcrg/root              1
            ::pcrg/index-syms        {'a #{1}}
            ::pcrg/nodes             {1 {::pcrg/node-id  1
                                         ::pc/sym        'a
                                         ::pcrg/requires {:a {}
                                                          :b {}}
                                         ::pcrg/provides {:a {}
                                                          :b {}}}}}))

    (testing "missing provides"
      (is (= (compute-run-graph
               {::pc/index-oir {:a {#{} #{'a}}
                                :b {#{} #{'a}}}
                ::eql/query    [:a :b]})
             '#::pcrg{:nodes             {1 {::pc/sym        a
                                             ::pcrg/node-id  1
                                             ::pcrg/requires {:a {}
                                                              :b {}}
                                             ::pcrg/provides {:a {}
                                                              :b {}}}}
                      :index-syms        {a #{1}}
                      :unreachable-syms  #{}
                      :unreachable-attrs #{}
                      :root              1}))))

  (testing "single dependency"
    (is (= (compute-run-graph
             {::resolvers [{::pc/sym    'a
                            ::pc/output [:a]}
                           {::pc/sym    'b
                            ::pc/input  #{:a}
                            ::pc/output [:b]}]
              ::eql/query [:b]})
           {::pcrg/unreachable-attrs #{}
            ::pcrg/unreachable-syms  #{}
            ::pcrg/root              2
            ::pcrg/index-syms        '{a #{2}
                                       b #{1}}
            ::pcrg/nodes             {1 {::pcrg/node-id    1
                                         ::pc/sym          'b
                                         ::pcrg/requires   {:b {}}
                                         ::pcrg/provides   {:b {}}
                                         ::pcrg/after-node 2}
                                      2 {::pcrg/node-id  2
                                         ::pc/sym        'a
                                         ::pcrg/run-next 1
                                         ::pcrg/requires {:a {}}
                                         ::pcrg/provides {:a {}
                                                          :b {}}}}})))

  (testing "optimize multiple resolver calls"
    (is (= (compute-run-graph
             {::resolvers [{::pc/sym    'a
                            ::pc/output [:a]}
                           {::pc/sym    'a2
                            ::pc/input  #{:b}
                            ::pc/output [:a]}
                           {::pc/sym    'b
                            ::pc/output [:b]}]
              ::eql/query [:a]})
           '#::pcrg{:index-syms        {a  #{1}
                                        a2 #{2}
                                        b  #{3}}
                    :nodes             {1 {::pcrg/node-id    1
                                           ::pcrg/after-node 4
                                           ::pcrg/provides   {:a {}}
                                           ::pcrg/requires   {:a {}}
                                           ::pc/sym          a}
                                        2 {::pcrg/node-id    2
                                           ::pcrg/after-node 3
                                           ::pcrg/provides   {:a {}}
                                           ::pcrg/requires   {:a {}}
                                           ::pc/sym          a2}
                                        3 {::pcrg/node-id    3
                                           ::pcrg/after-node 4
                                           ::pcrg/provides   {:a {}
                                                              :b {}}
                                           ::pcrg/requires   {:b {}}
                                           ::pcrg/run-next   2
                                           ::pc/sym          b}
                                        4 #::pcrg{:node-id  4
                                                  :provides {:a {}
                                                             :b {}}
                                                  :requires {:a {}}
                                                  :run-or   [3
                                                             1]}}
                    :root              4
                    :unreachable-attrs #{}
                    :unreachable-syms  #{}})))


  (testing "single dependency with extra provides"
    (is (= (compute-run-graph
             {::resolvers [{::pc/sym    'a
                            ::pc/output [:a]}
                           {::pc/sym    'b
                            ::pc/input  #{:a}
                            ::pc/output [:b :b2 :b3]}]
              ::eql/query [:b]})
           {::pcrg/unreachable-attrs #{}
            ::pcrg/unreachable-syms  #{}
            ::pcrg/root              2
            ::pcrg/index-syms        '{a #{2}
                                       b #{1}}
            ::pcrg/nodes             {1 {::pcrg/node-id    1
                                         ::pcrg/after-node 2
                                         ::pc/sym          'b
                                         ::pcrg/requires   {:b {}}
                                         ::pcrg/provides   {:b  {}
                                                            :b2 {}
                                                            :b3 {}}}
                                      2 {::pcrg/node-id  2
                                         ::pc/sym        'a
                                         ::pcrg/run-next 1
                                         ::pcrg/requires {:a {}}
                                         ::pcrg/provides {:b  {}
                                                          :b2 {}
                                                          :b3 {}
                                                          :a  {}}}}})))

  (testing "dependency chain"
    (is (= (compute-run-graph
             {::resolvers [{::pc/sym    'a
                            ::pc/output [:a]}
                           {::pc/sym    'b
                            ::pc/input  #{:a}
                            ::pc/output [:b]}
                           {::pc/sym    'c
                            ::pc/input  #{:b}
                            ::pc/output [:c]}]
              ::eql/query [:c]})
           '#::pcrg{:unreachable-attrs      #{}
                    ::pcrg/unreachable-syms #{}
                    :index-syms             {a #{3}
                                             b #{2}
                                             c #{1}}
                    :nodes                  {1 {::pcrg/node-id    1
                                                ::pcrg/after-node 2
                                                ::pcrg/provides   {:c {}}
                                                ::pcrg/requires   {:c {}}
                                                ::pc/sym          c}
                                             2 {::pcrg/node-id    2
                                                ::pcrg/after-node 3
                                                ::pcrg/provides   {:b {}
                                                                   :c {}}
                                                ::pcrg/requires   {:b {}}
                                                ::pcrg/run-next   1
                                                ::pc/sym          b}
                                             3 {::pcrg/node-id  3
                                                ::pcrg/provides {:a {}
                                                                 :b {}
                                                                 :c {}}
                                                ::pcrg/requires {:a {}}
                                                ::pcrg/run-next 2
                                                ::pc/sym        a}}
                    :root                   3})))

  (testing "dependency chain with available data"
    (is (= (compute-run-graph
             {::resolvers           [{::pc/sym    'b
                                      ::pc/input  #{:a}
                                      ::pc/output [:b]}
                                     {::pc/sym    'c
                                      ::pc/input  #{:b}
                                      ::pc/output [:c]}]
              ::eql/query           [:c]
              ::pcrg/available-data {:a {}}})
           '#::pcrg{:unreachable-attrs #{}
                    :unreachable-syms  #{}
                    :index-syms        {b #{2}
                                        c #{1}}
                    :nodes             {1 {::pcrg/node-id    1
                                           ::pcrg/after-node 2
                                           ::pcrg/provides   {:c {}}
                                           ::pcrg/requires   {:c {}}
                                           ::pc/sym          c}
                                        2 {::pcrg/node-id  2
                                           ::pcrg/provides {:b {}
                                                            :c {}}
                                           ::pcrg/requires {:b {}}
                                           ::pcrg/run-next 1
                                           ::pc/sym        b}}
                    :root              2})))

  (testing "multiple paths chain at root"
    (is (= (compute-run-graph
             {::resolvers [{::pc/sym    'a
                            ::pc/output [:a]}
                           {::pc/sym    'a2
                            ::pc/output [:a]}
                           {::pc/sym    'b
                            ::pc/input  #{:a}
                            ::pc/output [:b]}]
              ::eql/query [:b]})
           '{::pcrg/nodes             {1 {::pc/sym          b
                                          ::pcrg/node-id    1
                                          ::pcrg/after-node 4
                                          ::pcrg/requires   {:b {}}
                                          ::pcrg/provides   {:b {}}}
                                       2 {::pc/sym          a
                                          ::pcrg/node-id    2
                                          ::pcrg/after-node 4
                                          ::pcrg/requires   {:a {}}
                                          ::pcrg/provides   {:a {}}}
                                       3 {::pc/sym          a2
                                          ::pcrg/node-id    3
                                          ::pcrg/after-node 4
                                          ::pcrg/requires   {:a {}}
                                          ::pcrg/provides   {:a {}}}
                                       4 {::pcrg/node-id  4
                                          ::pcrg/provides {:a {}
                                                           :b {}}
                                          ::pcrg/requires {:a {}}
                                          ::pcrg/run-next 1
                                          ::pcrg/run-or   [2 3]}}
             ::pcrg/index-syms        {a  #{2}
                                       a2 #{3}
                                       b  #{1}}
             ::pcrg/unreachable-attrs #{}
             ::pcrg/unreachable-syms  #{}
             ::pcrg/root              4})))

  (testing "multiple paths chain at edge"
    (is (= (compute-run-graph
             {::resolvers [{::pc/sym    'a
                            ::pc/output [:a]}
                           {::pc/sym    'b
                            ::pc/input  #{:a}
                            ::pc/output [:b]}
                           {::pc/sym    'b2
                            ::pc/input  #{:a}
                            ::pc/output [:b]}]
              ::eql/query [:b]})
           '{::pcrg/nodes             {1 {::pc/sym          b2
                                          ::pcrg/node-id    1
                                          ::pcrg/after-node 3
                                          ::pcrg/requires   {:b {}}
                                          ::pcrg/provides   {:b {}}}
                                       2 {::pc/sym          b
                                          ::pcrg/node-id    2
                                          ::pcrg/after-node 3
                                          ::pcrg/requires   {:b {}}
                                          ::pcrg/provides   {:b {}}}
                                       3 {::pcrg/node-id    3
                                          ::pcrg/after-node 4
                                          ::pcrg/requires   {:b {}}
                                          ::pcrg/provides   {:b {}}
                                          ::pcrg/run-or     [1 2]}
                                       4 {::pc/sym        a
                                          ::pcrg/node-id  4
                                          ::pcrg/requires {:a {}}
                                          ::pcrg/provides {:a {} :b {}}
                                          ::pcrg/run-next 3}}
             ::pcrg/unreachable-attrs #{}
             ::pcrg/unreachable-syms  #{}
             ::pcrg/index-syms        {a  #{4}
                                       b  #{2}
                                       b2 #{1}}
             ::pcrg/root              4})))

  (testing "multiple inputs"
    (is (= (compute-run-graph
             {::resolvers [{::pc/sym    'a
                            ::pc/output [:a]}
                           {::pc/sym    'b
                            ::pc/output [:b]}
                           {::pc/sym    'c
                            ::pc/input  #{:a :b}
                            ::pc/output [:c]}]
              ::eql/query [:c]})
           '#::pcrg{:nodes             {1 {::pc/sym          c
                                           ::pcrg/node-id    1
                                           ::pcrg/after-node 4
                                           ::pcrg/requires   {:c {}}
                                           ::pcrg/provides   {:c {}}}
                                        2 {::pc/sym          b
                                           ::pcrg/node-id    2
                                           ::pcrg/after-node 4
                                           ::pcrg/requires   {:b {}}
                                           ::pcrg/provides   {:b {}}}
                                        3 {::pc/sym          a
                                           ::pcrg/node-id    3
                                           ::pcrg/after-node 4
                                           ::pcrg/requires   {:a {}}
                                           ::pcrg/provides   {:a {}}}
                                        4 #::pcrg{:node-id        4
                                                  :requires       {:b {}
                                                                   :a {}}
                                                  :provides       {:a {}
                                                                   :b {}
                                                                   :c {}}
                                                  :run-and        [3
                                                                   2]
                                                  ::pcrg/run-next 1}}
                    :index-syms        {a #{3}
                                        b #{2}
                                        c #{1}}
                    :unreachable-attrs #{}
                    :unreachable-syms  #{}
                    :root              4})))

  (testing "skip resolves that have self dependency"
    (is (= (compute-run-graph
             {::resolvers [{::pc/sym    'a
                            ::pc/output [:a]}
                           {::pc/sym    'c
                            ::pc/input  #{:a :c}
                            ::pc/output [:c]}
                           {::pc/sym    'c2
                            ::pc/input  #{:a}
                            ::pc/output [:c]}]
              ::eql/query [:c]})
           '#::pcrg{:nodes             {1 {::pc/sym          c2
                                           ::pcrg/node-id    1
                                           ::pcrg/requires   {:c {}}
                                           ::pcrg/provides   {:c {}}
                                           ::pcrg/after-node 2}
                                        2 {::pc/sym        a
                                           ::pcrg/node-id  2
                                           ::pcrg/requires {:a {}}
                                           ::pcrg/provides {:c {}
                                                            :a {}}
                                           ::pcrg/run-next 1}}
                    :index-syms        {c2 #{1} a #{2}}
                    :unreachable-syms  #{}
                    :unreachable-attrs #{}
                    :root              2})))

  (testing "multiple inputs with different tail sizes"
    (is (= (compute-run-graph
             {::resolvers [{::pc/sym    'a
                            ::pc/output [:a]}
                           {::pc/sym    'a1
                            ::pc/output [:a]}
                           {::pc/sym    'b
                            ::pc/output [:b]}
                           {::pc/sym    'c
                            ::pc/input  #{:a :b}
                            ::pc/output [:c]}]
              ::eql/query [:c]})
           '#::pcrg{:nodes             {1 {::pc/sym          c
                                           ::pcrg/node-id    1
                                           ::pcrg/after-node 6
                                           ::pcrg/requires   {:c {}}
                                           ::pcrg/provides   {:c {}}}
                                        2 {::pc/sym          b
                                           ::pcrg/node-id    2
                                           ::pcrg/after-node 6
                                           ::pcrg/requires   {:b {}}
                                           ::pcrg/provides   {:b {}}}
                                        3 {::pc/sym          a
                                           ::pcrg/node-id    3
                                           ::pcrg/after-node 5
                                           ::pcrg/requires   {:a {}}
                                           ::pcrg/provides   {:a {}}}
                                        4 {::pc/sym          a1
                                           ::pcrg/node-id    4
                                           ::pcrg/after-node 5
                                           ::pcrg/requires   {:a {}}
                                           ::pcrg/provides   {:a {}}}
                                        5 #::pcrg{:node-id    5
                                                  :after-node 6
                                                  :requires   {:a {}}
                                                  :provides   {:c {}
                                                               :a {}}
                                                  :run-or     [3
                                                               4]}
                                        6 #::pcrg{:node-id  6
                                                  :requires {:a {}
                                                             :b {}}
                                                  :provides {:c {}
                                                             :a {}
                                                             :b {}}
                                                  :run-and  [5
                                                             2]
                                                  :run-next 1}}
                    :index-syms        {c #{1} b #{2} a #{3} a1 #{4}}
                    :unreachable-attrs #{}
                    :unreachable-syms  #{}
                    :root              6})))

  (testing "diamond shape deps"
    (is (= (compute-run-graph
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
           '#::pcrg{:nodes             {1 {::pc/sym          d
                                           ::pcrg/node-id    1
                                           ::pcrg/after-node 5
                                           ::pcrg/requires   {:d {}}
                                           ::pcrg/provides   {:d {}}}
                                        2 {::pc/sym          c
                                           ::pcrg/node-id    2
                                           ::pcrg/after-node 5
                                           ::pcrg/requires   {:c {}}
                                           ::pcrg/provides   {:c {}}}
                                        3 {::pc/sym        a
                                           ::pcrg/node-id  3
                                           ::pcrg/requires {:a {}}
                                           ::pcrg/provides {:d {}
                                                            :c {}
                                                            :b {}
                                                            :a {}}
                                           ::pcrg/run-next 5}
                                        4 {::pc/sym          b
                                           ::pcrg/node-id    4
                                           ::pcrg/after-node 5
                                           ::pcrg/requires   {:b {}}
                                           ::pcrg/provides   {:b {}}}
                                        5 #::pcrg{:node-id    5
                                                  :after-node 3
                                                  :requires   {:c {}
                                                               :b {}}
                                                  :provides   {:d {}
                                                               :c {}
                                                               :b {}}
                                                  :run-and    [2
                                                               4]
                                                  :run-next   1}}
                    :extended-nodes    #{3}
                    :index-syms        {d #{1} c #{2} a #{3} b #{4}}
                    :unreachable-attrs #{}
                    :unreachable-syms  #{}
                    :root              3})))

  (testing "diamond shape deps with tail"
    (is (= (compute-run-graph
             {::resolvers [{::pc/sym    'z
                            ::pc/output [:z]}
                           {::pc/sym    'a
                            ::pc/input  #{:z}
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
           '#::pcrg{:nodes             {1 {::pc/sym          d
                                           ::pcrg/after-node 6
                                           ::pcrg/node-id    1
                                           ::pcrg/requires   {:d {}}
                                           ::pcrg/provides   {:d {}}}
                                        2 {::pc/sym          c
                                           ::pcrg/node-id    2
                                           ::pcrg/after-node 6
                                           ::pcrg/requires   {:c {}}
                                           ::pcrg/provides   {:c {}}}
                                        3 {::pc/sym          a
                                           ::pcrg/node-id    3
                                           ::pcrg/requires   {:a {}}
                                           ::pcrg/provides   {:d {}
                                                              :c {}
                                                              :a {}
                                                              :b {}}
                                           ::pcrg/run-next   6
                                           ::pcrg/after-node 4}
                                        4 {::pc/sym        z
                                           ::pcrg/node-id  4
                                           ::pcrg/requires {:z {}}
                                           ::pcrg/provides {:d {}
                                                            :c {}
                                                            :b {}
                                                            :a {}
                                                            :z {}}
                                           ::pcrg/run-next 3}
                                        5 {::pc/sym          b
                                           ::pcrg/node-id    5
                                           ::pcrg/after-node 6
                                           ::pcrg/requires   {:b {}}
                                           ::pcrg/provides   {:b {}}}
                                        6 #::pcrg{:node-id    6
                                                  :after-node 3
                                                  :requires   {:c {}
                                                               :b {}}
                                                  :provides   {:d {}
                                                               :c {}
                                                               :b {}}
                                                  :run-and    [2
                                                               5]
                                                  :run-next   1}}
                    :extended-nodes    #{3}
                    :index-syms        {d #{1}
                                        c #{2}
                                        a #{3}
                                        z #{4}
                                        b #{5}}
                    :unreachable-attrs #{}
                    :unreachable-syms  #{}
                    :root              4})))

  (testing "deep recurring dependency"
    (is (= (compute-run-graph
             (-> {::eql/query [:release/script :recur-dep]
                  ::resolvers [{::pc/sym    'id
                                ::pc/output [:db/id]}
                               {::pc/sym    'label-type
                                ::pc/input  #{:db/id}
                                ::pc/output [:label/type]}
                               {::pc/sym    'release-script
                                ::pc/input  #{:db/id}
                                ::pc/output [:release/script]}
                               {::pc/sym    'recur-dep
                                ::pc/input  #{:label/type}
                                ::pc/output [:recur-dep]}]}))
           '#::pcrg{:nodes             {1 {::pc/sym          release-script
                                           ::pcrg/node-id    1
                                           ::pcrg/requires   #:release{:script {}}
                                           ::pcrg/provides   #:release{:script {}}
                                           ::pcrg/after-node 5}
                                        2 {::pc/sym        id
                                           ::pcrg/node-id  2
                                           ::pcrg/requires #:db{:id {}}
                                           ::pcrg/provides {:release/script {}
                                                            :db/id          {}
                                                            :recur-dep      {}
                                                            :label/type     {}}
                                           ::pcrg/run-next 5}
                                        3 {::pc/sym          recur-dep
                                           ::pcrg/node-id    3
                                           ::pcrg/requires   {:recur-dep {}}
                                           ::pcrg/provides   {:recur-dep {}}
                                           ::pcrg/after-node 4}
                                        4 {::pc/sym          label-type
                                           ::pcrg/node-id    4
                                           ::pcrg/requires   #:label{:type {}}
                                           ::pcrg/provides   {:recur-dep  {}
                                                              :label/type {}}
                                           ::pcrg/run-next   3
                                           ::pcrg/after-node 5}
                                        5 #::pcrg{:node-id    5
                                                  :requires   {:release/script {}
                                                               :label/type     {}}
                                                  :provides   {:release/script {}
                                                               :recur-dep      {}
                                                               :label/type     {}}
                                                  :run-and    [1
                                                               4]
                                                  :after-node 2}}
                    :index-syms        {release-script #{1}
                                        id             #{2}
                                        recur-dep      #{3}
                                        label-type     #{4}}
                    :unreachable-attrs #{}
                    :unreachable-syms  #{}
                    :extended-nodes    #{2}
                    :root              2}))))

(deftest test-compute-run-graph-placeholders
  (is (= (compute-run-graph
           {::resolvers              [{::pc/sym    'a
                                       ::pc/output [:a]}]
            ::p/placeholder-prefixes #{">"}
            ::eql/query              [{:>/go [:a]}]})
         '#::pcrg{:nodes             {1 {::pc/sym        a
                                         ::pcrg/node-id  1
                                         ::pcrg/requires {:a {}}
                                         ::pcrg/provides {:a {}}}}
                  :index-syms        {a #{1}}
                  :unreachable-syms  #{}
                  :unreachable-attrs #{}
                  :root              1}))

  (is (= (compute-run-graph
           {::resolvers              [{::pc/sym    'a
                                       ::pc/output [:a]}]
            ::p/placeholder-prefixes #{">"}
            ::eql/query              [{:>/go [:a]}
                                      {:>/go2 [:a]}]})
         '#::pcrg{:nodes             {1 {::pc/sym        a
                                         ::pcrg/node-id  1
                                         ::pcrg/requires {:a {}}
                                         ::pcrg/provides {:a {}}}}
                  :index-syms        {a #{1}}
                  :unreachable-syms  #{}
                  :unreachable-attrs #{}
                  :root              1}))

  (is (= (compute-run-graph
           {::resolvers              [{::pc/sym    'a
                                       ::pc/output [:a]}
                                      {::pc/sym    'b
                                       ::pc/output [:b]}]
            ::p/placeholder-prefixes #{">"}
            ::eql/query              [{:>/go [:a]}
                                      {:>/go2 [:b]}]})
         '#::pcrg{:nodes             {1 {::pc/sym          a
                                         ::pcrg/node-id    1
                                         ::pcrg/requires   {:a {}}
                                         ::pcrg/provides   {:a {}}
                                         ::pcrg/after-node 3}
                                      2 {::pc/sym          b
                                         ::pcrg/node-id    2
                                         ::pcrg/requires   {:b {}}
                                         ::pcrg/provides   {:b {}}
                                         ::pcrg/after-node 3}
                                      3 #::pcrg{:node-id  3
                                                :requires {:b {}
                                                           :a {}}
                                                :provides {:b {}
                                                           :a {}}
                                                :run-and  [2
                                                           1]}}
                  :index-syms        {a #{1} b #{2}}
                  :unreachable-syms  #{}
                  :unreachable-attrs #{}
                  :root              3})))

(deftest test-compute-run-graph-dynamic-resolvers
  (testing "unreachable"
    (is (= (compute-run-graph
             {::pc/index-resolvers {'dynamic-resolver {::pc/sym               'dynamic-resolver
                                                       ::pc/cache?            false
                                                       ::pc/dynamic-resolver? true
                                                       ::pc/resolve           (fn [_ _])}}
              ::pc/index-oir       {:release/script {#{:db/id} #{'dynamic-resolver}}}
              ::eql/query          [:release/script]})
           #::pcrg{:nodes             {}
                   :index-syms        {}
                   :root              nil
                   :unreachable-syms  #{}
                   :unreachable-attrs #{:db/id}})))

  (testing "simple dynamic call"
    (is (= (compute-run-graph
             {::pc/index-resolvers  {'dynamic-resolver {::pc/sym               'dynamic-resolver
                                                        ::pc/cache?            false
                                                        ::pc/dynamic-resolver? true
                                                        ::pc/resolve           (fn [_ _])}}
              ::pc/index-oir        {:release/script {#{:db/id} #{'dynamic-resolver}}}
              ::pcrg/available-data {:db/id {}}
              ::eql/query           [:release/script]})

           '#::pcrg{:nodes             {1 {::pc/sym        dynamic-resolver
                                           ::pcrg/input    {:db/id {}}
                                           ::pcrg/node-id  1
                                           ::pcrg/requires {:release/script {}}
                                           ::pcrg/provides {:release/script {}}}}
                    :index-syms        {dynamic-resolver #{1}}
                    :unreachable-attrs #{}
                    :unreachable-syms  #{}
                    :root              1})))

  (testing "optimize multiple calls"
    (is (= (compute-run-graph
             (-> {::pc/index-resolvers  {'dynamic-resolver {::pc/sym               'dynamic-resolver
                                                            ::pc/cache?            false
                                                            ::pc/dynamic-resolver? true
                                                            ::pc/resolve           (fn [_ _])}}
                  ::pc/index-oir        {:release/script {#{:db/id} #{'dynamic-resolver}}
                                         :label/type     {#{:db/id} #{'dynamic-resolver}}}
                  ::eql/query           [:release/script :label/type]
                  ::pcrg/available-data {:db/id {}}}))

           '#::pcrg{:nodes             {2 {::pc/sym        dynamic-resolver
                                           ::pcrg/input    {:db/id {}}
                                           ::pcrg/node-id  2
                                           ::pcrg/requires {:release/script {}
                                                            :label/type     {}}
                                           ::pcrg/provides {:release/script {}
                                                            :label/type     {}}}}
                    :index-syms        {dynamic-resolver #{2}}
                    :unreachable-attrs #{}
                    :unreachable-syms  #{}
                    :root              2})))

  (testing "optimized with dependencies"
    (is (= (compute-run-graph
             (-> {::pc/index-resolvers {'dynamic-resolver {::pc/sym               'dynamic-resolver
                                                           ::pc/cache?            false
                                                           ::pc/dynamic-resolver? true
                                                           ::pc/resolve           (fn [_ _])}}
                  ::pc/index-oir       {:release/script {#{:db/id} #{'dynamic-resolver}}
                                        :label/type     {#{:db/id} #{'dynamic-resolver}}}
                  ::eql/query          [:release/script :label/type]
                  ::resolvers          [{::pc/sym    'id
                                         ::pc/output [:db/id]}]}))

           '#::pcrg{:nodes             {1 {::pc/sym          dynamic-resolver
                                           ::pcrg/input      {:db/id {}}
                                           ::pcrg/node-id    1
                                           ::pcrg/requires   {:release/script {}
                                                              :label/type     {}}
                                           ::pcrg/provides   {:release/script {}
                                                              :label/type     {}}
                                           ::pcrg/after-node 2}
                                        2 {::pc/sym        id
                                           ::pcrg/node-id  2
                                           ::pcrg/requires #:db{:id {}}
                                           ::pcrg/provides {:release/script {}
                                                            :db/id          {}
                                                            :label/type     {}}
                                           ::pcrg/run-next 1}}
                    :index-syms        {dynamic-resolver #{1} id #{2}}
                    :unreachable-attrs #{}
                    :unreachable-syms  #{}
                    :extended-nodes    #{2}
                    :root              2})))

  (testing "chained calls"
    (is (= (compute-run-graph
             (-> {::pc/index-resolvers {'dynamic-resolver {::pc/sym               'dynamic-resolver
                                                           ::pc/cache?            false
                                                           ::pc/dynamic-resolver? true
                                                           ::pc/resolve           (fn [_ _])}}
                  ::pc/index-oir       {:a {#{} #{'dynamic-resolver}}
                                        :b {#{:a} #{'dynamic-resolver}}}
                  ::eql/query          [:b]}))

           '#::pcrg{:nodes             {1 {::pc/sym        dynamic-resolver
                                           ::pcrg/node-id  1
                                           ::pcrg/input    {}
                                           ::pcrg/requires {:a {}
                                                            :b {}}
                                           ::pcrg/provides {:a {}
                                                            :b {}}}}
                    :index-syms        {dynamic-resolver #{1}}
                    :unreachable-syms  #{}
                    :unreachable-attrs #{}
                    :root              1}))

    (is (= (compute-run-graph
             (-> {::pc/index-resolvers {'dynamic-resolver {::pc/sym               'dynamic-resolver
                                                           ::pc/cache?            false
                                                           ::pc/dynamic-resolver? true
                                                           ::pc/resolve           (fn [_ _])}}
                  ::pc/index-oir       {:a {#{} #{'dynamic-resolver}}
                                        :b {#{:a} #{'dynamic-resolver}}
                                        :c {#{:b} #{'dynamic-resolver}}}
                  ::eql/query          [:c]}))

           '#::pcrg{:nodes             {1 {::pc/sym        dynamic-resolver
                                           ::pcrg/node-id  1
                                           ::pcrg/input    {}
                                           ::pcrg/requires {:a {}
                                                            :b {}
                                                            :c {}}
                                           ::pcrg/provides {:a {}
                                                            :b {}
                                                            :c {}}}}
                    :index-syms        {dynamic-resolver #{1}}
                    :unreachable-syms  #{}
                    :unreachable-attrs #{}
                    :root              1}))

    (is (= (compute-run-graph
             (-> {::pc/index-resolvers {'dynamic-resolver {::pc/sym               'dynamic-resolver
                                                           ::pc/cache?            false
                                                           ::pc/dynamic-resolver? true
                                                           ::pc/resolve           (fn [_ _])}}
                  ::resolvers          [{::pc/sym    'z
                                         ::pc/output [:z]}]
                  ::pc/index-oir       {:a {#{:z} #{'dynamic-resolver}}
                                        :b {#{:a} #{'dynamic-resolver}}}
                  ::eql/query          [:b]}))

           '#::pcrg{:nodes             {1 {::pc/sym          dynamic-resolver
                                           ::pcrg/input      {:z {}}
                                           ::pcrg/node-id    1
                                           ::pcrg/requires   {:b {}
                                                              :a {}}
                                           ::pcrg/provides   {:b {}
                                                              :a {}}
                                           ::pcrg/after-node 2}
                                        2 {::pc/sym        z
                                           ::pcrg/node-id  2
                                           ::pcrg/requires {:z {}}
                                           ::pcrg/provides {:b {}
                                                            :a {}
                                                            :z {}}
                                           ::pcrg/run-next 1}}
                    :index-syms        {dynamic-resolver #{1} z #{2}}
                    :unreachable-syms  #{}
                    :unreachable-attrs #{}
                    :root              2}))

    (is (= (compute-run-graph
             (-> {::pc/index-resolvers {'dynamic-resolver {::pc/sym               'dynamic-resolver
                                                           ::pc/cache?            false
                                                           ::pc/dynamic-resolver? true
                                                           ::pc/resolve           (fn [_ _])}}
                  ::resolvers          [{::pc/sym    'z
                                         ::pc/input  #{:b}
                                         ::pc/output [:z]}]
                  ::pc/index-oir       {:a {#{} #{'dynamic-resolver}}
                                        :b {#{:a} #{'dynamic-resolver}}}
                  ::eql/query          [:z]}))

           '#::pcrg{:nodes             {1 {::pc/sym          z
                                           ::pcrg/node-id    1
                                           ::pcrg/requires   {:z {}}
                                           ::pcrg/provides   {:z {}}
                                           ::pcrg/after-node 2}
                                        2 {::pc/sym        dynamic-resolver
                                           ::pcrg/input    {}
                                           ::pcrg/node-id  2
                                           ::pcrg/requires {:b {}
                                                            :a {}}
                                           ::pcrg/provides {:z {}
                                                            :b {}
                                                            :a {}}
                                           ::pcrg/run-next 1}}
                    :index-syms        {z #{1} dynamic-resolver #{2}}
                    :unreachable-syms  #{}
                    :unreachable-attrs #{}
                    :root              2})))

  (testing "multiple calls to dynamic resolver"
    (is (= (compute-run-graph
             (-> {::pc/index-resolvers {'dynamic-resolver {::pc/sym               'dynamic-resolver
                                                           ::pc/cache?            false
                                                           ::pc/dynamic-resolver? true
                                                           ::pc/resolve           (fn [_ _])}}
                  ::resolvers          [{::pc/sym    'b
                                         ::pc/input #{:a}
                                         ::pc/output [:b]}]
                  ::pc/index-oir       {:a {#{} #{'dynamic-resolver}}
                                        :c {#{:b} #{'dynamic-resolver}}}
                  ::eql/query          [:c]}))

           '#::pcrg{:nodes             {1 {::pc/sym          dynamic-resolver
                                           ::pcrg/input      {:b {}}
                                           ::pcrg/node-id    1
                                           ::pcrg/requires   {:c {}}
                                           ::pcrg/provides   {:c {}}
                                           ::pcrg/after-node 2}
                                        2 {::pc/sym          b
                                           ::pcrg/node-id    2
                                           ::pcrg/requires   {:b {}}
                                           ::pcrg/provides   {:c {}
                                                              :b {}}
                                           ::pcrg/run-next   1
                                           ::pcrg/after-node 3}
                                        3 {::pc/sym        dynamic-resolver
                                           ::pcrg/input    {}
                                           ::pcrg/node-id  3
                                           ::pcrg/requires {:a {}}
                                           ::pcrg/provides {:c {}
                                                            :b {}
                                                            :a {}}
                                           ::pcrg/run-next 2}}
                    :index-syms        {dynamic-resolver #{1 3} b #{2}}
                    :unreachable-syms  #{}
                    :unreachable-attrs #{}
                    :root              3})))

  (testing "inner repeated dependencies"
    (is (= (compute-run-graph
             (-> {::pc/index-resolvers {'dynamic-resolver {::pc/sym               'dynamic-resolver
                                                           ::pc/cache?            false
                                                           ::pc/dynamic-resolver? true
                                                           ::pc/resolve           (fn [_ _])}}
                  ::pc/index-oir       {:release/script {#{:db/id} #{'dynamic-resolver}}
                                        :label/type     {#{:db/id} #{'dynamic-resolver}}}
                  ::eql/query          [:release/script :complex]
                  ::resolvers          [{::pc/sym    'id
                                         ::pc/output [:db/id]}
                                        {::pc/sym    'complex
                                         ::pc/input  #{:db/id :label/type}
                                         ::pc/output [:complex]}]}))

           '#::pcrg{:nodes             {1 {::pc/sym          dynamic-resolver
                                           ::pcrg/node-id    1
                                           ::pcrg/input      {:db/id {}}
                                           ::pcrg/requires   {:release/script {}
                                                              :label/type     {}}
                                           ::pcrg/provides   {:release/script {}
                                                              :complex        {}
                                                              :label/type     {}}
                                           ::pcrg/after-node 6}
                                        2 {::pc/sym        id
                                           ::pcrg/node-id  2
                                           ::pcrg/requires #:db{:id {}}
                                           ::pcrg/provides {:release/script {}
                                                            :db/id          {}
                                                            :complex        {}
                                                            :label/type     {}}
                                           ::pcrg/run-next 6}
                                        3 {::pc/sym          complex
                                           ::pcrg/node-id    3
                                           ::pcrg/requires   {:complex {}}
                                           ::pcrg/provides   {:complex {}}
                                           ::pcrg/after-node 6}
                                        6 #::pcrg{:node-id    6
                                                  :requires   {:release/script {}
                                                               :label/type     {}
                                                               :complex        {}}
                                                  :provides   {:release/script {}
                                                               :complex        {}
                                                               :label/type     {}}
                                                  :run-and    [1
                                                               3]
                                                  :after-node 2}}
                    :index-syms        {dynamic-resolver #{1}
                                        id               #{2}
                                        complex          #{3}}
                    :unreachable-attrs #{}
                    :unreachable-syms  #{}
                    :extended-nodes    #{2}
                    :root              2}))))

(defn internalize-remote-index [{::pc/keys [index-source-id] :as indexes}]
  (-> indexes
      (update ::pc/index-resolvers
        (fn [resolvers]
          (into {}
                (map (fn [[r v]] [r (assoc v ::pc/source-resolver index-source-id)]))
                resolvers)))
      (assoc-in [::pc/index-resolvers index-source-id]
        {::pc/sym               index-source-id
         ::pc/cache?            false
         ::pc/dynamic-resolver? true
         ::pc/resolve           (fn [_ _] (println "CALL REMOTE"))})
      (update ::pc/index-oir
        (fn [oir]
          (into {}
                (map (fn [[attr paths]]
                       [attr
                        (into {}
                              (map (fn [[inputs _]]
                                     [inputs #{index-source-id}]))
                              paths)]))
                oir)))
      (dissoc ::pc/index-source-id)))

(comment
  (compute-run-graph
    (-> {::eql/query           [:customer/id :customer/name :customer/dob
                                :customer/cpf :account/interest-rate]
         ::pcrg/available-data {:customer/cpf {}}
         ::resolvers           [{::pc/sym    'customer-by-id
                                 ::pc/input  #{:customer/id}
                                 ::pc/output [:customer/id
                                              :customer/name
                                              :customer/dob
                                              :customer/cpf]}
                                {::pc/sym    'customer-by-cpf
                                 ::pc/input  #{:customer/cpf}
                                 ::pc/output [:customer/id
                                              :customer/name
                                              :customer/cpf]}
                                {::pc/sym    'interest-rate
                                 ::pc/input  #{:account/id}
                                 ::pc/output [:account/interest-rate]}
                                {::pc/sym    'customer-account-id
                                 ::pc/input  #{:customer/id}
                                 ::pc/output [:account/id]}]}))

  (compute-run-graph
    {::eql/query           [:customer/id :customer/name :customer/dob
                            :customer/cpf :account/interest-rate]
     ::pcrg/available-data {:customer/id {}}
     ::render-graphviz?    true
     ::resolvers           [{::pc/sym    'customer-by-id
                             ::pc/input  #{:customer/id}
                             ::pc/output [:customer/id
                                          :customer/name
                                          :customer/dob
                                          :customer/cpf]}
                            {::pc/sym    'customer-by-cpf
                             ::pc/input  #{:customer/cpf}
                             ::pc/output [:customer/id
                                          :customer/name
                                          :customer/cpf]}
                            {::pc/sym    'interest-rate
                             ::pc/input  #{:account/id}
                             ::pc/output [:account/interest-rate]}
                            {::pc/sym    'customer-account-id
                             ::pc/input  #{:customer/id}
                             ::pc/output [:account/id]}]})

  (render-graph
    data)

  ; index query
  [{:com.wsscode.pathom.connect/indexes
    [:com.wsscode.pathom.connect/index-attributes
     :com.wsscode.pathom.connect/index-io
     :com.wsscode.pathom.connect/index-oir
     :com.wsscode.pathom.connect/idents
     :com.wsscode.pathom.connect/autocomplete-ignore
     :com.wsscode.pathom.connect/index-resolvers
     :com.wsscode.pathom.connect/index-mutations]}]

  (def internal-index
    (-> (slurp (str (System/getenv "HOME") "/index.edn"))
        (edn/read-string)
        (assoc ::pc/index-source-id 'dynamic-source)
        internalize-remote-index))

  (def index
    (-> (slurp (str (System/getenv "HOME") "/index.edn"))
        (edn/read-string)
        (assoc ::pc/index-source-id 'dynamic-source)))

  (defn stored-query [path]
    (-> (slurp (str (System/getenv "HOME") "/queries/" path))
        (edn/read-string)))

  (time
    (compute-run-graph
      (-> {::eql/query           (stored-query "acc.edn")
           ::pcrg/available-data {:account/id                     {}
                                  :customer/id                    {}
                                  :account/status                 {}
                                  :account/precise-credit-limit   {}
                                  :account/current-interest-rate  {}
                                  :account/interest-rate          {}
                                  :account/next-due-date          {}
                                  :account/limit-range-max        {}
                                  :account/due-day                {}
                                  :account/limit-range-min        {}
                                  :account/temporary-limit-amount {}
                                  :account/interest-product       {}}
           ::render-graphviz?    false}
          (pc/merge-indexes index))))

  (compute-run-graph
    (-> {::eql/query           (stored-query "all.edn")
         ::pcrg/available-data {:customer/id {}}
         ::render-graphviz?    true
         ::time?               true}
        (pc/merge-indexes index))))
