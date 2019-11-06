(ns com.wsscode.pathom.connect.planner-test
  (:require [clojure.edn :as edn]
            [clojure.java.io :as io]
            [clojure.test :refer :all]
            [clojure.walk :as walk]
            [com.wsscode.pathom.connect :as pc]
            [com.wsscode.pathom.connect.planner :as pcp]
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
  {::pcp/id-counter         (atom 0)
   ::pcp/available-data     {}
   ::p/placeholder-prefixes #{">"}})

(defn render-graph [{::pcp/keys [nodes root] :as graph} env]
  #?(:clj
     (if (not (System/getenv "PATHOM_TEST"))
       (let [edges (into []
                         (mapcat
                           (fn [{::pcp/keys [run-next node-id] :as node}]
                             (let [branches (pcp/node-branches node)]
                               (cond-> (into []
                                             (map #(vector node-id % {:color "orange"}))
                                             branches)
                                 run-next
                                 (conj [node-id run-next])))))
                         (vals nodes))
             dot   (tangle/graph->dot (mapv ::pcp/node-id (vals nodes)) edges
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
                                                                  (if (::pcp/run-and node) "AND")
                                                                  (if (::pcp/run-or node) "OR")))}
                                              (get-in env [::pc/index-resolvers (::pc/sym node) ::pc/dynamic-resolver?])
                                              (assoc
                                                :fontcolor "white"
                                                :fillcolor "black")

                                              (::pcp/run-and node)
                                              (assoc
                                                :fillcolor "yellow")

                                              (::pcp/run-or node)
                                              (assoc
                                                :fillcolor "cyan"))))})]
         (io/copy (tangle/dot->image dot "png") (io/file "out.png")))))
  graph)

(defn compute-run-graph* [{::keys [out env]}]
  (pcp/compute-run-graph
    (merge (pcp/base-out) out)
    env))

(defn compute-run-graph
  [{::keys     [resolvers render-graphviz? time?]
    ::eql/keys [query]
    :or        {render-graphviz? true
                time?            false}
    :as        options}]
  (let [env     (cond-> (merge (base-graph-env)
                               (-> options
                                   (dissoc ::eql/query)
                                   (assoc :edn-query-language.ast/node
                                     (eql/query->ast (p/lift-placeholders (base-graph-env) query)))))
                  resolvers
                  (pc/merge-indexes (register-index resolvers)))
        options (assoc options ::env env)]
    (cond->
      (if time?
        (time (compute-run-graph* options))
        (compute-run-graph* options))

      render-graphviz?
      (render-graph env))))

(deftest compute-run-graph-test
  (testing "no path"
    (is (= (compute-run-graph
             {::resolvers []
              ::eql/query [:a]})
           {::pcp/nodes             {}
            ::pcp/index-syms        {}
            ::pcp/unreachable-attrs #{:a}
            ::pcp/unreachable-syms  #{}}))

    (testing "broken chain"
      (is (= (compute-run-graph
               {::resolvers [{::pc/sym    'b
                              ::pc/input  #{:a}
                              ::pc/output [:b]}]
                ::eql/query [:b]})
             '#::pcp{:nodes             {}
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
             '#::pcp{:nodes             {}
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
                ::out       {::pcp/unreachable-attrs #{:a}}})
             '#::pcp{:nodes             {}
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
             '#::pcp{:nodes             {}
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
             '#::pcp{:nodes             {}
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
             '#::pcp{:nodes             {4 {::pc/sym       d
                                            ::pcp/node-id  4
                                            ::pcp/input    {}
                                            ::pcp/requires {:d {}}
                                            ::pcp/provides {:d {}}}}
                     :index-syms        {d #{4}}
                     :unreachable-attrs #{:c :b :a}
                     :unreachable-syms  #{b c}
                     :root              4}))))

  (testing "simplest path"
    (is (= (compute-run-graph
             {::resolvers [{::pc/sym    'a
                            ::pc/output [:a]}]
              ::eql/query [:a]})
           {::pcp/unreachable-attrs #{}
            ::pcp/unreachable-syms  #{}
            ::pcp/root              1
            ::pcp/index-syms        {'a #{1}}
            ::pcp/nodes             {1 {::pcp/node-id  1
                                        ::pc/sym       'a
                                        ::pcp/input    {}
                                        ::pcp/requires {:a {}}
                                        ::pcp/provides {:a {}}}}}))

    (testing "ignore idents"
      (is (= (compute-run-graph
               {::resolvers [{::pc/sym    'a
                              ::pc/output [:a]}]
                ::eql/query [:a [:foo "bar"]]})
             {::pcp/unreachable-attrs #{}
              ::pcp/unreachable-syms  #{}
              ::pcp/root              1
              ::pcp/index-syms        {'a #{1}}
              ::pcp/nodes             {1 {::pcp/node-id  1
                                          ::pc/sym       'a
                                          ::pcp/input    {}
                                          ::pcp/requires {:a {}}
                                          ::pcp/provides {:a {}}}}}))))

  (testing "cycles"
    (is (= (compute-run-graph
             {::resolvers [{::pc/sym    'a
                            ::pc/input  #{:b}
                            ::pc/output [:a]}
                           {::pc/sym    'b
                            ::pc/input  #{:a}
                            ::pc/output [:b]}]
              ::eql/query [:a]})
           '#::pcp{:nodes             {}
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
           '#::pcp{:nodes             {}
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
             '#::pcp{:index-syms        {a1 #{4}
                                         b  #{2}
                                         c  #{1}}
                     :nodes             {1 {::pcp/after-node 2
                                            ::pcp/node-id    1
                                            ::pcp/input      {:b {}}
                                            ::pcp/provides   {:c {}}
                                            ::pcp/requires   {:c {}}
                                            ::pc/sym         c}
                                         2 {::pcp/after-node 4
                                            ::pcp/node-id    2
                                            ::pcp/input      {:a {}}
                                            ::pcp/provides   {:b {}
                                                              :c {}}
                                            ::pcp/requires   {:b {}}
                                            ::pcp/run-next   1
                                            ::pc/sym         b}
                                         4 {::pcp/node-id  4
                                            ::pcp/input    {}
                                            ::pcp/provides {:a {}
                                                            :b {}
                                                            :c {}}
                                            ::pcp/requires {:a {}}
                                            ::pcp/run-next 2
                                            ::pc/sym       a1}}
                     :root              4
                     :unreachable-attrs #{}
                     :unreachable-syms  #{a}}))))

  (testing "extra provides"
    (is (= (compute-run-graph
             {::resolvers [{::pc/sym    'a
                            ::pc/output [:a :b :c]}]
              ::eql/query [:a]})
           {::pcp/unreachable-attrs #{}
            ::pcp/root              1
            ::pcp/index-syms        {'a #{1}}
            ::pcp/unreachable-syms  #{}
            ::pcp/nodes             {1 {::pcp/node-id  1
                                        ::pc/sym       'a
                                        ::pcp/input    {}
                                        ::pcp/requires {:a {}}
                                        ::pcp/provides {:a {}
                                                        :b {}
                                                        :c {}}}}})))

  (testing "multiple paths"
    (is (= (compute-run-graph
             {::resolvers [{::pc/sym    'a
                            ::pc/output [:a]}
                           {::pc/sym    'a2
                            ::pc/output [:a]}]
              ::eql/query [:a]})
           '#::pcp{:unreachable-attrs #{}
                   :unreachable-syms  #{}
                   :index-syms        {a #{1} a2 #{2}}
                   :nodes             {1 {::pcp/node-id    1
                                          ::pcp/after-node 3
                                          ::pcp/input      {}
                                          ::pcp/provides   {:a {}}
                                          ::pcp/requires   {:a {}}
                                          ::pc/sym         a}
                                       2 {::pcp/node-id    2
                                          ::pcp/after-node 3
                                          ::pcp/input      {}
                                          ::pcp/provides   {:a {}}
                                          ::pcp/requires   {:a {}}
                                          ::pc/sym         a2}
                                       3 #::pcp{:node-id  3
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
           {::pcp/unreachable-attrs #{}
            ::pcp/unreachable-syms  #{}
            ::pcp/root              3
            ::pcp/index-syms        '{a #{1}
                                      b #{2}}
            ::pcp/nodes             {1 {::pcp/node-id    1
                                        ::pc/sym         'a
                                        ::pcp/after-node 3
                                        ::pcp/input      {}
                                        ::pcp/requires   {:a {}}
                                        ::pcp/provides   {:a {}}}
                                     2 {::pcp/node-id    2
                                        ::pc/sym         'b
                                        ::pcp/after-node 3
                                        ::pcp/input      {}
                                        ::pcp/requires   {:b {}}
                                        ::pcp/provides   {:b {}}}
                                     3 {::pcp/node-id  3
                                        ::pcp/run-and  [2 1]
                                        ::pcp/provides {:a {}
                                                        :b {}}
                                        ::pcp/requires {:a {}
                                                        :b {}}}}}))

    (is (= (compute-run-graph
             {::resolvers [{::pc/sym    'a
                            ::pc/output [:a]}
                           {::pc/sym    'b
                            ::pc/output [:b]}
                           {::pc/sym    'c
                            ::pc/output [:c]}]
              ::eql/query [:a :b :c]})
           {::pcp/unreachable-attrs #{}
            ::pcp/unreachable-syms  #{}
            ::pcp/root              3
            ::pcp/index-syms        '{a #{1}
                                      b #{2}
                                      c #{4}}
            ::pcp/nodes             {1 {::pcp/node-id    1
                                        ::pc/sym         'a
                                        ::pcp/after-node 3
                                        ::pcp/input      {}
                                        ::pcp/requires   {:a {}}
                                        ::pcp/provides   {:a {}}}
                                     2 {::pcp/node-id    2
                                        ::pc/sym         'b
                                        ::pcp/after-node 3
                                        ::pcp/input      {}
                                        ::pcp/requires   {:b {}}
                                        ::pcp/provides   {:b {}}}
                                     3 {::pcp/node-id  3
                                        ::pcp/run-and  [2 1 4]
                                        ::pcp/provides {:a {}
                                                        :b {}
                                                        :c {}}
                                        ::pcp/requires {:a {}
                                                        :b {}
                                                        :c {}}}
                                     4 {::pc/sym         'c
                                        ::pcp/node-id    4
                                        ::pcp/input      {}
                                        ::pcp/requires   {:c {}}
                                        ::pcp/provides   {:c {}}
                                        ::pcp/after-node 3}}})))

  (testing "multiple attribute request on a single resolver"
    (is (= (compute-run-graph
             {::resolvers [{::pc/sym    'a
                            ::pc/output [:a :b]}]
              ::eql/query [:a :b]})
           {::pcp/unreachable-attrs #{}
            ::pcp/unreachable-syms  #{}
            ::pcp/root              1
            ::pcp/index-syms        {'a #{1}}
            ::pcp/nodes             {1 {::pcp/node-id  1
                                        ::pc/sym       'a
                                        ::pcp/input    {}
                                        ::pcp/requires {:a {}
                                                        :b {}}
                                        ::pcp/provides {:a {}
                                                        :b {}}}}}))

    (testing "missing provides"
      (is (= (compute-run-graph
               {::pc/index-oir {:a {#{} #{'a}}
                                :b {#{} #{'a}}}
                ::eql/query    [:a :b]})
             '#::pcp{:nodes             {1 {::pc/sym       a
                                            ::pcp/node-id  1
                                            ::pcp/input    {}
                                            ::pcp/requires {:a {}
                                                            :b {}}
                                            ::pcp/provides {:a {}
                                                            :b {}}}}
                     :index-syms        {a #{1}}
                     :unreachable-syms  #{}
                     :unreachable-attrs #{}
                     :root              1}))))

  (testing "add requires to appropriated node"
    (is (= (compute-run-graph
             {::resolvers [{::pc/sym    'z
                            ::pc/output [:z]}
                           {::pc/sym    'a
                            ::pc/input  #{:z}
                            ::pc/output [:a :b]}]
              ::eql/query [:a :b]})
           '#::pcp{:nodes             {1 {::pc/sym         a
                                          ::pcp/node-id    1
                                          ::pcp/requires   {:a {}
                                                            :b {}}
                                          ::pcp/input      {:z {}}
                                          ::pcp/provides   {:a {}
                                                            :b {}}
                                          ::pcp/after-node 2}
                                       2 {::pc/sym       z
                                          ::pcp/node-id  2
                                          ::pcp/requires {:z {}}
                                          ::pcp/input    {}
                                          ::pcp/provides {:a {}
                                                          :b {}
                                                          :z {}}
                                          ::pcp/run-next 1}}
                   :index-syms        {a #{1} z #{2}}
                   :unreachable-syms  #{}
                   :unreachable-attrs #{}
                   :root              2}))

    (is (= (compute-run-graph
             {::resolvers [{::pc/sym    'z
                            ::pc/output [:z]}
                           {::pc/sym    'a
                            ::pc/input  #{:z}
                            ::pc/output [:a :b]}
                           {::pc/sym    'c
                            ::pc/input  #{:b}
                            ::pc/output [:c]}]
              ::eql/query [:c :a]})
           '#::pcp{:index-syms        {a #{2}
                                       c #{1}
                                       z #{3}}
                   :nodes             {1 {::pcp/after-node 2
                                          ::pcp/input      {:b {}}
                                          ::pcp/node-id    1
                                          ::pcp/provides   {:c {}}
                                          ::pcp/requires   {:c {}}
                                          ::pc/sym         c}
                                       2 {::pcp/after-node 3
                                          ::pcp/input      {:z {}}
                                          ::pcp/node-id    2
                                          ::pcp/provides   {:a {}
                                                            :b {}
                                                            :c {}}
                                          ::pcp/requires   {:a {}
                                                            :b {}}
                                          ::pcp/run-next   1
                                          ::pc/sym         a}
                                       3 {::pcp/input    {}
                                          ::pcp/node-id  3
                                          ::pcp/provides {:a {}
                                                          :b {}
                                                          :c {}
                                                          :z {}}
                                          ::pcp/requires {:z {}}
                                          ::pcp/run-next 2
                                          ::pc/sym       z}}
                   :root              3
                   :unreachable-attrs #{}
                   :unreachable-syms  #{}})))

  (testing "single dependency"
    (is (= (compute-run-graph
             {::resolvers [{::pc/sym    'a
                            ::pc/output [:a]}
                           {::pc/sym    'b
                            ::pc/input  #{:a}
                            ::pc/output [:b]}]
              ::eql/query [:b]})
           {::pcp/unreachable-attrs #{}
            ::pcp/unreachable-syms  #{}
            ::pcp/root              2
            ::pcp/index-syms        '{a #{2}
                                      b #{1}}
            ::pcp/nodes             {1 {::pcp/node-id    1
                                        ::pc/sym         'b
                                        ::pcp/input      {:a {}}
                                        ::pcp/requires   {:b {}}
                                        ::pcp/provides   {:b {}}
                                        ::pcp/after-node 2}
                                     2 {::pcp/node-id  2
                                        ::pc/sym       'a
                                        ::pcp/run-next 1
                                        ::pcp/input    {}
                                        ::pcp/requires {:a {}}
                                        ::pcp/provides {:a {}
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
           '#::pcp{:index-syms        {a  #{1}
                                       a2 #{2}
                                       b  #{3}}
                   :nodes             {1 {::pcp/node-id    1
                                          ::pcp/after-node 4
                                          ::pcp/input      {}
                                          ::pcp/provides   {:a {}}
                                          ::pcp/requires   {:a {}}
                                          ::pc/sym         a}
                                       2 {::pcp/node-id    2
                                          ::pcp/after-node 3
                                          ::pcp/input      {:b {}}
                                          ::pcp/provides   {:a {}}
                                          ::pcp/requires   {:a {}}
                                          ::pc/sym         a2}
                                       3 {::pcp/node-id    3
                                          ::pcp/after-node 4
                                          ::pcp/input      {}
                                          ::pcp/provides   {:a {}
                                                            :b {}}
                                          ::pcp/requires   {:b {}}
                                          ::pcp/run-next   2
                                          ::pc/sym         b}
                                       4 #::pcp{:node-id  4
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
           {::pcp/unreachable-attrs #{}
            ::pcp/unreachable-syms  #{}
            ::pcp/root              2
            ::pcp/index-syms        '{a #{2}
                                      b #{1}}
            ::pcp/nodes             {1 {::pcp/node-id    1
                                        ::pcp/after-node 2
                                        ::pc/sym         'b
                                        ::pcp/input      {:a {}}
                                        ::pcp/requires   {:b {}}
                                        ::pcp/provides   {:b  {}
                                                          :b2 {}
                                                          :b3 {}}}
                                     2 {::pcp/node-id  2
                                        ::pc/sym       'a
                                        ::pcp/run-next 1
                                        ::pcp/input    {}
                                        ::pcp/requires {:a {}}
                                        ::pcp/provides {:b  {}
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
           '#::pcp{:unreachable-attrs     #{}
                   ::pcp/unreachable-syms #{}
                   :index-syms            {a #{3}
                                           b #{2}
                                           c #{1}}
                   :nodes                 {1 {::pcp/node-id    1
                                              ::pcp/after-node 2
                                              ::pcp/input      {:b {}}
                                              ::pcp/provides   {:c {}}
                                              ::pcp/requires   {:c {}}
                                              ::pc/sym         c}
                                           2 {::pcp/node-id    2
                                              ::pcp/after-node 3
                                              ::pcp/input      {:a {}}
                                              ::pcp/provides   {:b {}
                                                                :c {}}
                                              ::pcp/requires   {:b {}}
                                              ::pcp/run-next   1
                                              ::pc/sym         b}
                                           3 {::pcp/node-id  3
                                              ::pcp/input    {}
                                              ::pcp/provides {:a {}
                                                              :b {}
                                                              :c {}}
                                              ::pcp/requires {:a {}}
                                              ::pcp/run-next 2
                                              ::pc/sym       a}}
                   :root                  3})))

  (testing "dependency chain with available data"
    (is (= (compute-run-graph
             {::resolvers          [{::pc/sym    'b
                                     ::pc/input  #{:a}
                                     ::pc/output [:b]}
                                    {::pc/sym    'c
                                     ::pc/input  #{:b}
                                     ::pc/output [:c]}]
              ::eql/query          [:c]
              ::pcp/available-data {:a {}}})
           '#::pcp{:unreachable-attrs #{}
                   :unreachable-syms  #{}
                   :index-syms        {b #{2}
                                       c #{1}}
                   :nodes             {1 {::pcp/node-id    1
                                          ::pcp/after-node 2
                                          ::pcp/input      {:b {}}
                                          ::pcp/provides   {:c {}}
                                          ::pcp/requires   {:c {}}
                                          ::pc/sym         c}
                                       2 {::pcp/node-id  2
                                          ::pcp/input    {:a {}}
                                          ::pcp/provides {:b {}
                                                          :c {}}
                                          ::pcp/requires {:b {}}
                                          ::pcp/run-next 1
                                          ::pc/sym       b}}
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
           '{::pcp/nodes             {1 {::pc/sym         b
                                         ::pcp/node-id    1
                                         ::pcp/after-node 4
                                         ::pcp/input      {:a {}}
                                         ::pcp/requires   {:b {}}
                                         ::pcp/provides   {:b {}}}
                                      2 {::pc/sym         a
                                         ::pcp/node-id    2
                                         ::pcp/after-node 4
                                         ::pcp/input      {}
                                         ::pcp/requires   {:a {}}
                                         ::pcp/provides   {:a {}}}
                                      3 {::pc/sym         a2
                                         ::pcp/node-id    3
                                         ::pcp/after-node 4
                                         ::pcp/input      {}
                                         ::pcp/requires   {:a {}}
                                         ::pcp/provides   {:a {}}}
                                      4 {::pcp/node-id  4
                                         ::pcp/provides {:a {}
                                                         :b {}}
                                         ::pcp/requires {:a {}}
                                         ::pcp/run-next 1
                                         ::pcp/run-or   [2 3]}}
             ::pcp/index-syms        {a  #{2}
                                      a2 #{3}
                                      b  #{1}}
             ::pcp/unreachable-attrs #{}
             ::pcp/unreachable-syms  #{}
             ::pcp/root              4})))

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
           '{::pcp/nodes             {1 {::pc/sym         b2
                                         ::pcp/node-id    1
                                         ::pcp/after-node 3
                                         ::pcp/input      {:a {}}
                                         ::pcp/requires   {:b {}}
                                         ::pcp/provides   {:b {}}}
                                      2 {::pc/sym         b
                                         ::pcp/node-id    2
                                         ::pcp/after-node 3
                                         ::pcp/input      {:a {}}
                                         ::pcp/requires   {:b {}}
                                         ::pcp/provides   {:b {}}}
                                      3 {::pcp/node-id    3
                                         ::pcp/after-node 4
                                         ::pcp/requires   {:b {}}
                                         ::pcp/provides   {:b {}}
                                         ::pcp/run-or     [1 2]}
                                      4 {::pc/sym       a
                                         ::pcp/node-id  4
                                         ::pcp/input    {}
                                         ::pcp/requires {:a {}}
                                         ::pcp/provides {:a {} :b {}}
                                         ::pcp/run-next 3}}
             ::pcp/unreachable-attrs #{}
             ::pcp/unreachable-syms  #{}
             ::pcp/index-syms        {a  #{4}
                                      b  #{2}
                                      b2 #{1}}
             ::pcp/root              4})))

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
           '#::pcp{:nodes             {1 {::pc/sym         c
                                          ::pcp/node-id    1
                                          ::pcp/after-node 4
                                          ::pcp/input      {:a {}
                                                            :b {}}
                                          ::pcp/requires   {:c {}}
                                          ::pcp/provides   {:c {}}}
                                       2 {::pc/sym         b
                                          ::pcp/node-id    2
                                          ::pcp/after-node 4
                                          ::pcp/input      {}
                                          ::pcp/requires   {:b {}}
                                          ::pcp/provides   {:b {}}}
                                       3 {::pc/sym         a
                                          ::pcp/node-id    3
                                          ::pcp/after-node 4
                                          ::pcp/input      {}
                                          ::pcp/requires   {:a {}}
                                          ::pcp/provides   {:a {}}}
                                       4 #::pcp{:node-id       4
                                                :requires      {:b {}
                                                                :a {}}
                                                :provides      {:a {}
                                                                :b {}
                                                                :c {}}
                                                :run-and       [3
                                                                2]
                                                ::pcp/run-next 1}}
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
           '#::pcp{:nodes             {1 {::pc/sym         c2
                                          ::pcp/node-id    1
                                          ::pcp/input      {:a {}}
                                          ::pcp/requires   {:c {}}
                                          ::pcp/provides   {:c {}}
                                          ::pcp/after-node 2}
                                       2 {::pc/sym       a
                                          ::pcp/node-id  2
                                          ::pcp/input    {}
                                          ::pcp/requires {:a {}}
                                          ::pcp/provides {:c {}
                                                          :a {}}
                                          ::pcp/run-next 1}}
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
           '#::pcp{:nodes             {1 {::pc/sym         c
                                          ::pcp/node-id    1
                                          ::pcp/after-node 6
                                          ::pcp/input      {:a {}
                                                            :b {}}
                                          ::pcp/requires   {:c {}}
                                          ::pcp/provides   {:c {}}}
                                       2 {::pc/sym         b
                                          ::pcp/node-id    2
                                          ::pcp/after-node 6
                                          ::pcp/input      {}
                                          ::pcp/requires   {:b {}}
                                          ::pcp/provides   {:b {}}}
                                       3 {::pc/sym         a
                                          ::pcp/node-id    3
                                          ::pcp/after-node 5
                                          ::pcp/input      {}
                                          ::pcp/requires   {:a {}}
                                          ::pcp/provides   {:a {}}}
                                       4 {::pc/sym         a1
                                          ::pcp/node-id    4
                                          ::pcp/after-node 5
                                          ::pcp/input      {}
                                          ::pcp/requires   {:a {}}
                                          ::pcp/provides   {:a {}}}
                                       5 #::pcp{:node-id    5
                                                :after-node 6
                                                :requires   {:a {}}
                                                :provides   {:c {}
                                                             :a {}}
                                                :run-or     [3
                                                             4]}
                                       6 #::pcp{:node-id  6
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
           '#::pcp{:nodes             {1 {::pc/sym         d
                                          ::pcp/node-id    1
                                          ::pcp/after-node 5
                                          ::pcp/input      {:b {}
                                                            :c {}}
                                          ::pcp/requires   {:d {}}
                                          ::pcp/provides   {:d {}}}
                                       2 {::pc/sym         c
                                          ::pcp/node-id    2
                                          ::pcp/after-node 5
                                          ::pcp/input      {:a {}}
                                          ::pcp/requires   {:c {}}
                                          ::pcp/provides   {:c {}}}
                                       3 {::pc/sym       a
                                          ::pcp/node-id  3
                                          ::pcp/input    {}
                                          ::pcp/requires {:a {}}
                                          ::pcp/provides {:d {}
                                                          :c {}
                                                          :b {}
                                                          :a {}}
                                          ::pcp/run-next 5}
                                       4 {::pc/sym         b
                                          ::pcp/node-id    4
                                          ::pcp/after-node 5
                                          ::pcp/input      {:a {}}
                                          ::pcp/requires   {:b {}}
                                          ::pcp/provides   {:b {}}}
                                       5 #::pcp{:node-id    5
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
           '#::pcp{:nodes             {1 {::pc/sym         d
                                          ::pcp/after-node 6
                                          ::pcp/node-id    1
                                          ::pcp/input      {:b {}
                                                            :c {}}
                                          ::pcp/requires   {:d {}}
                                          ::pcp/provides   {:d {}}}
                                       2 {::pc/sym         c
                                          ::pcp/node-id    2
                                          ::pcp/after-node 6
                                          ::pcp/input      {:a {}}
                                          ::pcp/requires   {:c {}}
                                          ::pcp/provides   {:c {}}}
                                       3 {::pc/sym         a
                                          ::pcp/node-id    3
                                          ::pcp/input      {:z {}}
                                          ::pcp/requires   {:a {}}
                                          ::pcp/provides   {:d {}
                                                            :c {}
                                                            :a {}
                                                            :b {}}
                                          ::pcp/run-next   6
                                          ::pcp/after-node 4}
                                       4 {::pc/sym       z
                                          ::pcp/node-id  4
                                          ::pcp/input    {}
                                          ::pcp/requires {:z {}}
                                          ::pcp/provides {:d {}
                                                          :c {}
                                                          :b {}
                                                          :a {}
                                                          :z {}}
                                          ::pcp/run-next 3}
                                       5 {::pc/sym         b
                                          ::pcp/node-id    5
                                          ::pcp/after-node 6
                                          ::pcp/input      {:a {}}
                                          ::pcp/requires   {:b {}}
                                          ::pcp/provides   {:b {}}}
                                       6 #::pcp{:node-id    6
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
           '#::pcp{:nodes             {1 {::pc/sym         release-script
                                          ::pcp/node-id    1
                                          ::pcp/input      {:db/id {}}
                                          ::pcp/requires   #:release{:script {}}
                                          ::pcp/provides   #:release{:script {}}
                                          ::pcp/after-node 5}
                                       2 {::pc/sym       id
                                          ::pcp/node-id  2
                                          ::pcp/input    {}
                                          ::pcp/requires #:db{:id {}}
                                          ::pcp/provides {:release/script {}
                                                          :db/id          {}
                                                          :recur-dep      {}
                                                          :label/type     {}}
                                          ::pcp/run-next 5}
                                       3 {::pc/sym         recur-dep
                                          ::pcp/node-id    3
                                          ::pcp/input      {:label/type {}}
                                          ::pcp/requires   {:recur-dep {}}
                                          ::pcp/provides   {:recur-dep {}}
                                          ::pcp/after-node 4}
                                       4 {::pc/sym         label-type
                                          ::pcp/node-id    4
                                          ::pcp/input      {:db/id {}}
                                          ::pcp/requires   #:label{:type {}}
                                          ::pcp/provides   {:recur-dep  {}
                                                            :label/type {}}
                                          ::pcp/run-next   3
                                          ::pcp/after-node 5}
                                       5 #::pcp{:node-id    5
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

(deftest test-compute-run-graph-dynamic-nested-queries
  (is (= (compute-run-graph
           {::pc/index-resolvers {'dyn {::pc/sym               'dyn
                                        ::pc/cache?            false
                                        ::pc/dynamic-resolver? true
                                        ::pc/resolve           (fn [_ _])}
                                  'a   {::pc/sym         'a
                                        ::pc/dynamic-sym 'dyn
                                        ::pc/output      [{:a [:b :c]}]
                                        ::pc/provides    {:a {:b {}
                                                              :c {}}}
                                        ::pc/resolve     (fn [_ _])}}
            ::pc/index-oir       {:a {#{} #{'a}}}
            ::eql/query          [{:a [:b]}]})
         '#::pcp{:nodes             {1 {::pc/sym         dyn
                                        ::pcp/node-id    1
                                        ::pcp/requires   {:a {:b {}}}
                                        ::pcp/input      {}
                                        ::pcp/provides   {:a {:b {}
                                                              :c {}}}
                                        ::pcp/source-sym a}}
                 :index-syms        {dyn #{1}}
                 :unreachable-syms  #{}
                 :unreachable-attrs #{}
                 :root              1}))

  (is (= (compute-run-graph
           {::pc/index-resolvers {'dyn {::pc/sym               'dyn
                                        ::pc/cache?            false
                                        ::pc/dynamic-resolver? true
                                        ::pc/resolve           (fn [_ _])}
                                  'a   {::pc/sym         'a
                                        ::pc/dynamic-sym 'dyn
                                        ::pc/output      [{:a [:b]}]
                                        ::pc/resolve     (fn [_ _])}}
            ::pc/index-oir       {:a {#{} #{'a}}}
            ::resolvers          [{::pc/sym    'c
                                   ::pc/input  #{:b}
                                   ::pc/output [:c]}]
            ::eql/query          [{:a [:c]}]})
         '#::pcp{:nodes             {1 {::pc/sym         dyn
                                        ::pcp/node-id    1
                                        ::pcp/requires   {:a {:b {}}}
                                        ::pcp/provides   {:a {:b {}}}
                                        ::pcp/input      {}
                                        ::pcp/source-sym a}}
                 :index-syms        {dyn #{1}}
                 :unreachable-syms  #{}
                 :unreachable-attrs #{}
                 :root              1}))

  ; TODO optimize to get only what user asked for
  #_(is (= (compute-run-graph
             {::pc/index-resolvers {'dyn {::pc/sym               'dyn
                                          ::pc/cache?            false
                                          ::pc/dynamic-resolver? true
                                          ::pc/resolve           (fn [_ _])}
                                    'a   {::pc/sym         'a
                                          ::pc/dynamic-sym 'dyn
                                          ::pc/output      [{:a [:b]}]
                                          ::pc/resolve     (fn [_ _])}
                                    'c   {::pc/sym         'c
                                          ::pc/dynamic-sym 'dyn
                                          ::pc/input       #{:b}
                                          ::pc/output      [:c]
                                          ::pc/resolve     (fn [_ _])}}
              ::pc/index-oir       {:a {#{} #{'a}}
                                    :c {#{:b} #{'c}}}
              ::eql/query          [{:a [:c]}]})
           '#::pcp{:nodes             {1 {::pc/sym         dyn
                                          ::pcp/node-id    1
                                          ::pcp/requires   {:a {:c {}}}
                                          ::pcp/provides   {:a {:b {}
                                                                :c {}}}
                                          ::pcp/input      {}
                                          ::pcp/source-sym a}}
                   :index-syms        {dyn #{1}}
                   :unreachable-syms  #{}
                   :unreachable-attrs #{}
                   :root              1})))

(deftest test-compute-run-graph-dynamic-resolvers
  (testing "unreachable"
    (is (= (compute-run-graph
             {::pc/index-resolvers {'dynamic-resolver {::pc/sym               'dynamic-resolver
                                                       ::pc/cache?            false
                                                       ::pc/dynamic-resolver? true
                                                       ::pc/resolve           (fn [_ _])}}
              ::pc/index-oir       {:release/script {#{:db/id} #{'dynamic-resolver}}}
              ::eql/query          [:release/script]})
           #::pcp{:nodes             {}
                  :index-syms        {}
                  :root              nil
                  :unreachable-syms  #{}
                  :unreachable-attrs #{:db/id}})))

  (testing "simple dynamic call"
    (is (= (compute-run-graph
             {::pc/index-resolvers {'dynamic-resolver {::pc/sym               'dynamic-resolver
                                                       ::pc/cache?            false
                                                       ::pc/dynamic-resolver? true
                                                       ::pc/resolve           (fn [_ _])}}
              ::pc/index-oir       {:release/script {#{:db/id} #{'dynamic-resolver}}}
              ::pcp/available-data {:db/id {}}
              ::eql/query          [:release/script]})

           '#::pcp{:nodes             {1 {::pc/sym       dynamic-resolver
                                          ::pcp/input    {:db/id {}}
                                          ::pcp/node-id  1
                                          ::pcp/requires {:release/script {}}
                                          ::pcp/provides {:release/script {}}}}
                   :index-syms        {dynamic-resolver #{1}}
                   :unreachable-attrs #{}
                   :unreachable-syms  #{}
                   :root              1})))

  (testing "optimize multiple calls"
    (is (= (compute-run-graph
             (-> {::pc/index-resolvers {'dynamic-resolver {::pc/sym               'dynamic-resolver
                                                           ::pc/cache?            false
                                                           ::pc/dynamic-resolver? true
                                                           ::pc/resolve           (fn [_ _])}}
                  ::pc/index-oir       {:release/script {#{:db/id} #{'dynamic-resolver}}
                                        :label/type     {#{:db/id} #{'dynamic-resolver}}}
                  ::eql/query          [:release/script :label/type]
                  ::pcp/available-data {:db/id {}}}))

           '#::pcp{:nodes             {2 {::pc/sym       dynamic-resolver
                                          ::pcp/input    {:db/id {}}
                                          ::pcp/node-id  2
                                          ::pcp/requires {:release/script {}
                                                          :label/type     {}}
                                          ::pcp/provides {:release/script {}
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

           '#::pcp{:nodes             {1 {::pc/sym         dynamic-resolver
                                          ::pcp/input      {:db/id {}}
                                          ::pcp/node-id    1
                                          ::pcp/requires   {:release/script {}
                                                            :label/type     {}}
                                          ::pcp/provides   {:release/script {}
                                                            :label/type     {}}
                                          ::pcp/after-node 2}
                                       2 {::pc/sym       id
                                          ::pcp/node-id  2
                                          ::pcp/input    {}
                                          ::pcp/requires #:db{:id {}}
                                          ::pcp/provides {:release/script {}
                                                          :db/id          {}
                                                          :label/type     {}}
                                          ::pcp/run-next 1}}
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

           '#::pcp{:nodes             {1 {::pc/sym       dynamic-resolver
                                          ::pcp/node-id  1
                                          ::pcp/input    {}
                                          ::pcp/requires {:a {}
                                                          :b {}}
                                          ::pcp/provides {:a {}
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

           '#::pcp{:nodes             {1 {::pc/sym       dynamic-resolver
                                          ::pcp/node-id  1
                                          ::pcp/input    {}
                                          ::pcp/requires {:a {}
                                                          :b {}
                                                          :c {}}
                                          ::pcp/provides {:a {}
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

           '#::pcp{:nodes             {1 {::pc/sym         dynamic-resolver
                                          ::pcp/input      {:z {}}
                                          ::pcp/node-id    1
                                          ::pcp/requires   {:b {}
                                                            :a {}}
                                          ::pcp/provides   {:b {}
                                                            :a {}}
                                          ::pcp/after-node 2}
                                       2 {::pc/sym       z
                                          ::pcp/node-id  2
                                          ::pcp/input    {}
                                          ::pcp/requires {:z {}}
                                          ::pcp/provides {:b {}
                                                          :a {}
                                                          :z {}}
                                          ::pcp/run-next 1}}
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

           '#::pcp{:nodes             {1 {::pc/sym         z
                                          ::pcp/node-id    1
                                          ::pcp/input      {:b {}}
                                          ::pcp/requires   {:z {}}
                                          ::pcp/provides   {:z {}}
                                          ::pcp/after-node 2}
                                       2 {::pc/sym       dynamic-resolver
                                          ::pcp/input    {}
                                          ::pcp/node-id  2
                                          ::pcp/requires {:b {}
                                                          :a {}}
                                          ::pcp/provides {:z {}
                                                          :b {}
                                                          :a {}}
                                          ::pcp/run-next 1}}
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
                                         ::pc/input  #{:a}
                                         ::pc/output [:b]}]
                  ::pc/index-oir       {:a {#{} #{'dynamic-resolver}}
                                        :c {#{:b} #{'dynamic-resolver}}}
                  ::eql/query          [:c]}))

           '#::pcp{:nodes             {1 {::pc/sym         dynamic-resolver
                                          ::pcp/input      {:b {}}
                                          ::pcp/node-id    1
                                          ::pcp/requires   {:c {}}
                                          ::pcp/provides   {:c {}}
                                          ::pcp/after-node 2}
                                       2 {::pc/sym         b
                                          ::pcp/node-id    2
                                          ::pcp/input      {:a {}}
                                          ::pcp/requires   {:b {}}
                                          ::pcp/provides   {:c {}
                                                            :b {}}
                                          ::pcp/run-next   1
                                          ::pcp/after-node 3}
                                       3 {::pc/sym       dynamic-resolver
                                          ::pcp/input    {}
                                          ::pcp/node-id  3
                                          ::pcp/requires {:a {}}
                                          ::pcp/provides {:c {}
                                                          :b {}
                                                          :a {}}
                                          ::pcp/run-next 2}}
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

           '#::pcp{:nodes             {1 {::pc/sym         dynamic-resolver
                                          ::pcp/node-id    1
                                          ::pcp/input      {:db/id {}}
                                          ::pcp/requires   {:release/script {}
                                                            :label/type     {}}
                                          ::pcp/provides   {:release/script {}
                                                            :complex        {}
                                                            :label/type     {}}
                                          ::pcp/after-node 6}
                                       2 {::pc/sym       id
                                          ::pcp/node-id  2
                                          ::pcp/input    {}
                                          ::pcp/requires #:db{:id {}}
                                          ::pcp/provides {:release/script {}
                                                          :db/id          {}
                                                          :complex        {}
                                                          :label/type     {}}
                                          ::pcp/run-next 6}
                                       3 {::pc/sym         complex
                                          ::pcp/node-id    3
                                          ::pcp/input      {:db/id      {}
                                                            :label/type {}}
                                          ::pcp/requires   {:complex {}}
                                          ::pcp/provides   {:complex {}}
                                          ::pcp/after-node 6}
                                       6 #::pcp{:node-id    6
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

(deftest test-compute-root-or
  (testing "set root when no root is the current"
    (is (= (pcp/compute-root-or
             {::pcp/provides {:a {}}
              ::pcp/requires {:a {}}
              ::pcp/nodes    {1 {::pcp/node-id  1
                                 ::pc/sym       'a
                                 ::pcp/requires {:a {}}
                                 ::pcp/provides {:a {}}}}}
             (base-graph-env)
             {::pcp/node-id 1})
           {::pcp/provides {:a {}}
            ::pcp/requires {:a {}}
            ::pcp/root     1
            ::pcp/nodes    {1 {::pcp/node-id  1
                               ::pc/sym       'a
                               ::pcp/requires {:a {}}
                               ::pcp/provides {:a {}}}}})))

  (testing "create new or runner"
    (is (= (pcp/compute-root-or
             {::pcp/provides {:a {}}
              ::pcp/requires {:a {}}
              ::pcp/root     1
              ::pcp/nodes    {1 {::pcp/node-id  1
                                 ::pc/sym       'a
                                 ::pcp/requires {:a {}}
                                 ::pcp/provides {:a {}}}
                              2 {::pcp/node-id  2
                                 ::pc/sym       'a2
                                 ::pcp/requires {:a {}}
                                 ::pcp/provides {:a {}}}}}
             (assoc (base-graph-env) ::pcp/id-counter (atom 2)
               ::pc/attribute :a)
             {::pcp/node-id 2})
           {::pcp/provides {:a {}}
            ::pcp/requires {:a {}}
            ::pcp/root     3
            ::pcp/nodes    {1 {::pcp/node-id    1
                               ::pcp/after-node 3
                               ::pc/sym         'a
                               ::pcp/requires   {:a {}}
                               ::pcp/provides   {:a {}}}
                            2 {::pcp/node-id    2
                               ::pcp/after-node 3
                               ::pc/sym         'a2
                               ::pcp/requires   {:a {}}
                               ::pcp/provides   {:a {}}}
                            3 {::pcp/node-id  3
                               ::pcp/provides {:a {}}
                               ::pcp/run-or   [1 2]
                               ::pcp/requires {:a {}}}}}))

    (testing "with run-next"
      (is (= (pcp/compute-root-or
               {::pcp/provides {:a {}}
                ::pcp/requires {:a {}}
                ::pcp/root     2
                ::pcp/nodes    {2 {::pcp/node-id  2
                                   ::pc/sym       'a
                                   ::pcp/requires {:a {}}
                                   ::pcp/provides {:a {}}
                                   ::pcp/run-next 1}
                                3 {::pcp/node-id  3
                                   ::pc/sym       'a2
                                   ::pcp/requires {:a {}}
                                   ::pcp/provides {:a {}}
                                   ::pcp/run-next 1}}}
               (assoc (base-graph-env) ::pcp/id-counter (atom 3)
                 ::pc/attribute :a
                 ::pc/index-resolvers {'a  {::pc/provides {:a {}}}
                                       'a2 {::pc/provides {:a {}}}})
               {::pcp/node-id 3})
             {::pcp/provides {:a {}}
              ::pcp/requires {:a {}}
              ::pcp/root     4
              ::pcp/nodes    {1 {::pcp/after-node 4}
                              2 {::pcp/node-id    2
                                 ::pc/sym         'a
                                 ::pcp/after-node 4
                                 ::pcp/requires   {:a {}}
                                 ::pcp/provides   {:a {}}}
                              3 {::pcp/node-id    3
                                 ::pcp/after-node 4
                                 ::pc/sym         'a2
                                 ::pcp/requires   {:a {}}
                                 ::pcp/provides   {:a {}}}
                              4 {::pcp/node-id  4
                                 ::pcp/run-or   [2 3]
                                 ::pcp/requires {:a {}}
                                 ::pcp/provides {:a {}}
                                 ::pcp/run-next 1}}}))

      (testing "don't optimize when run next is different"
        (is (= (pcp/compute-root-or
                 {::pcp/provides {:a {}}
                  ::pcp/requires {:a {}}
                  ::pcp/root     2
                  ::pcp/nodes    {2 {::pcp/node-id  2
                                     ::pc/sym       'a
                                     ::pcp/requires {:a {}}
                                     ::pcp/provides {:a {}}
                                     ::pcp/run-next 1}
                                  3 {::pcp/node-id  3
                                     ::pc/sym       'a2
                                     ::pcp/requires {:a {}}
                                     ::pcp/provides {:a {}}
                                     ::pcp/run-next 10}}}
                 (assoc (base-graph-env) ::pcp/id-counter (atom 3)
                   ::pc/attribute :a)
                 {::pcp/node-id 3})
               {::pcp/provides {:a {}}
                ::pcp/requires {:a {}}
                ::pcp/root     4
                ::pcp/nodes    {2 {::pcp/node-id    2
                                   ::pcp/after-node 4
                                   ::pc/sym         'a
                                   ::pcp/requires   {:a {}}
                                   ::pcp/provides   {:a {}}
                                   ::pcp/run-next   1}
                                3 {::pcp/node-id    3
                                   ::pcp/after-node 4
                                   ::pc/sym         'a2
                                   ::pcp/requires   {:a {}}
                                   ::pcp/provides   {:a {}}
                                   ::pcp/run-next   10}
                                4 {::pcp/node-id  4
                                   ::pcp/run-or   [2 3]
                                   ::pcp/provides {:a {}}
                                   ::pcp/requires {:a {}}}}})))))

  (testing "add to the runner"
    (is (= (pcp/compute-root-or
             {::pcp/provides {:a {}}
              ::pcp/requires {:a {}}
              ::pcp/root     3
              ::pcp/nodes    {1 {::pcp/node-id  1
                                 ::pc/sym       'a
                                 ::pcp/requires {:a {}}
                                 ::pcp/provides {:a {}}}
                              2 {::pcp/node-id  2
                                 ::pc/sym       'a2
                                 ::pcp/requires {:a {}}
                                 ::pcp/provides {:a {}}}
                              3 {::pcp/node-id  3
                                 ::pcp/run-or   [1 2]
                                 ::pcp/requires {:a {}}}
                              4 {::pcp/node-id  4
                                 ::pc/sym       'a3
                                 ::pcp/requires {:a {}}
                                 ::pcp/provides {:a {}}}}}
             (base-graph-env)
             {::pcp/node-id 4})
           {::pcp/provides {:a {}}
            ::pcp/requires {:a {}}
            ::pcp/root     3
            ::pcp/nodes    {1 {::pcp/node-id  1
                               ::pc/sym       'a
                               ::pcp/requires {:a {}}
                               ::pcp/provides {:a {}}}
                            2 {::pcp/node-id  2
                               ::pc/sym       'a2
                               ::pcp/requires {:a {}}
                               ::pcp/provides {:a {}}}
                            3 {::pcp/node-id  3
                               ::pcp/provides {:a {}}
                               ::pcp/run-or   [1 2 4]
                               ::pcp/requires {:a {}}}
                            4 {::pcp/node-id    4
                               ::pcp/after-node 3
                               ::pc/sym         'a3
                               ::pcp/requires   {:a {}}
                               ::pcp/provides   {:a {}}}}}))

    (testing "with run context"
      (is (= (pcp/compute-root-or
               {::pcp/provides {:a {}}
                ::pcp/requires {:a {}}
                ::pcp/root     3
                ::pcp/nodes    {1 {::pcp/node-id  1
                                   ::pc/sym       'a
                                   ::pcp/requires {:a {}}
                                   ::pcp/provides {:a {}}}
                                2 {::pcp/node-id  2
                                   ::pc/sym       'a2
                                   ::pcp/requires {:a {}}
                                   ::pcp/provides {:a {}}}
                                3 {::pcp/node-id  3
                                   ::pcp/run-or   [1 2]
                                   ::pcp/requires {:a {}}
                                   ::pcp/run-next 10}
                                4 {::pcp/node-id  4
                                   ::pc/sym       'a3
                                   ::pcp/requires {:a {}}
                                   ::pcp/provides {:a {}}
                                   ::pcp/run-next 10}}}
               (assoc (base-graph-env)
                 ::pc/index-resolvers {'a3 {::pc/provides {:a {}}}})
               {::pcp/node-id 4})
             {::pcp/provides {:a {}}
              ::pcp/requires {:a {}}
              ::pcp/root     3
              ::pcp/nodes    {1 {::pcp/node-id  1
                                 ::pc/sym       'a
                                 ::pcp/requires {:a {}}
                                 ::pcp/provides {:a {}}}
                              2 {::pcp/node-id  2
                                 ::pc/sym       'a2
                                 ::pcp/requires {:a {}}
                                 ::pcp/provides {:a {}}}
                              3 {::pcp/node-id  3
                                 ::pcp/provides {:a {}}
                                 ::pcp/run-or   [1 2 4]
                                 ::pcp/requires {:a {}}
                                 ::pcp/run-next 10}
                              4 {::pcp/node-id    4
                                 ::pcp/after-node 3
                                 ::pc/sym         'a3
                                 ::pcp/requires   {:a {}}
                                 ::pcp/provides   {:a {}}}}})))))

(deftest test-prepare-ast
  (testing "returns parent query ast"
    (is (= (pcp/prepare-ast {::p/entity {}}
             (p/query->ast [:foo]))
           {:type     :root
            :children [{:type :prop :dispatch-key :foo :key :foo}]})))

  (testing "lift placeholders"
    (is (= (pcp/prepare-ast {::p/entity {}}
             (p/query->ast [:foo
                            {:>/placeholder [:bar]}]))
           {:type     :root
            :children [{:type :prop :dispatch-key :foo :key :foo}
                       {:type :prop :dispatch-key :bar :key :bar}]})))

  (testing "remove keys already present in entity"
    (is (= (pcp/prepare-ast {::p/entity {:foo 123}}
             (p/query->ast [:foo
                            {:>/placeholder [:bar]}]))
           {:type     :root
            :children [{:type :prop :dispatch-key :bar :key :bar}]}))))

(deftest test-find-latest-providing-node
  (is (= (pcp/find-latest-providing-node
           '#::pcp{:nodes             {1 {::pc/sym         a
                                          ::pcp/node-id    1
                                          ::pcp/requires   {:a {}
                                                            :b {}}
                                          ::pcp/input      {:z {}}
                                          ::pcp/provides   {:a {}
                                                            :b {}
                                                            :c {}}
                                          ::pcp/after-node 2
                                          ::pcp/run-next   3}
                                       2 {::pc/sym       z
                                          ::pcp/node-id  2
                                          ::pcp/requires {:z {}}
                                          ::pcp/input    {}
                                          ::pcp/provides {:a {}
                                                          :b {}
                                                          :z {}
                                                          :c {}}
                                          ::pcp/run-next 1}
                                       3 {::pc/sym         c
                                          ::pcp/node-id    3
                                          ::pcp/requires   {:c {}}
                                          ::pcp/input      {:b {}}
                                          ::pcp/provides   {:c {}}
                                          ::pcp/after-node 1}}
                   :index-syms        {a #{1} z #{2} c #{3}}
                   :unreachable-syms  #{}
                   :unreachable-attrs #{}
                   :extended-nodes    #{1}
                   :root              2}
           {::pc/attribute :a})
         1)))
