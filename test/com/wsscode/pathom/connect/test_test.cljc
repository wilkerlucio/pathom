(ns com.wsscode.pathom.connect.test-test
  (:require [clojure.test :refer :all]
            [com.wsscode.pathom.core :as p]
            [com.wsscode.pathom.connect :as p.connect]
            [com.wsscode.pathom.connect.test :as test]))

(deftest test-bank-add
  (is (= (test/bank-add {} {} {}) {}))
  (is (= (test/bank-add {} {} {:x 1}) {:x #{1}}))
  (is (= (test/bank-add {} {:x #{1}} {:x 2}) {:x #{1 2}}))
  (is (= (test/bank-add {} {:x #{1}} {:x ::p/not-found}) {:x #{1}}))
  (is (= (test/bank-add {::test/bank-ignore #{}} {:x #{1}} {:x ::p/not-found}) {:x #{1 ::p/not-found}}))

  (is (= (test/bank-add {} {} {:container {:x 4 :y 9}})
         {:container #{{:x 4 :y 9}} :x #{4} :y #{9}}))

  (is (= (test/bank-add {} {} {:container [{:x 4 :y 9} {:x 3 :y 5}]})
         {:container #{[{:x 4 :y 9} {:x 3 :y 5}]} :x #{3 4} :y #{5 9}}))

  (is (= (test/bank-add {} {} {:container [1 2]})
         {:container #{[1 2]}}))

  (is (= (test/bank-add {} {::test/multi-args #{#{:x :y}}} {:x 1 :y 2 :z 3})
         {::test/multi-args #{#{:x :y}}
          :x                #{1} :y #{2} :z #{3} #{:x :y} #{{:x 1 :y 2}}}))

  (is (= (test/bank-add {} {::test/multi-args #{#{:x :y}}}
           {:container [{:x 4 :y 9} {:x 3 :y 5}]})
         {::test/multi-args #{#{:x :y}}
          :container        #{[{:x 4 :y 9} {:x 3 :y 5}]} :x #{3 4} :y #{5 9}
          #{:x :y}          #{{:x 4 :y 9} {:x 3 :y 5}}})))

(deftest test-call-add
  (is (= (test/call-add {} {} {:x 2})
         {:x #{2}, ::test/calls #{{:x 2}}})))

(defn greet [_ _]
  {:greet "Hello"})

(defn greet-stranger [_ {:keys [greet]}]
  {:stranger (str greet " Stranger!")})

(defn impossible [_ {:keys [unavailable]}]
  {:impossible "value"})

(defn real-honey [_ {:keys [greet stranger]}]
  {:honey (str stranger " " greet)})

(defn honey-dep [_ {:keys [honey]}]
  {:sweet (str honey " happy")})

(defn cycle-go [_ {:keys [loop-a]}]
  {:loop-b loop-a})

(defn cycle-back [_ {:keys [loop-b]}]
  {:loop-a loop-b})

(defn cycle-enter [_ {:keys [loop-a]}]
  {:cycle-out "done"})

(def indexes
  (-> {}
      (p.connect/add `greet {::p.connect/output [:greet]})
      (p.connect/add `greet-stranger {::p.connect/input  #{:greet}
                                      ::p.connect/output [:stranger]})
      (p.connect/add `impossible {::p.connect/input  #{:not-here}
                                  ::p.connect/output [:impossible]})
      (p.connect/add 'honey-pot {::p.connect/input  #{:impossible}
                                 ::p.connect/output [:honey :honey-pot]})
      (p.connect/add 'honey-pot2 {::p.connect/input  #{:not-again}
                                  ::p.connect/output [:honey-pot]})
      (p.connect/add `real-honey {::p.connect/input  #{:greet :stranger}
                                  ::p.connect/output [:honey]})
      (p.connect/add `honey-dep {::p.connect/input  #{:honey}
                                 ::p.connect/output [:sweet]})
      (p.connect/add `cycle-go {::p.connect/input  #{:loop-a}
                                ::p.connect/output [:loop-b]})
      (p.connect/add `cycle-back {::p.connect/input  #{:loop-b}
                                  ::p.connect/output [:loop-a]})
      (p.connect/add `cycle-enter {::p.connect/input  #{:loop-a}
                                   ::p.connect/output [:cycle-out]})))

(defn test-env [env]
  (test/prepare-environment
    (merge {::test/data-bank    (atom {})
            ::p.connect/indexes indexes}
           env)))

(deftest test-resolve-attr
  (testing "pull value when available on data bank"
    (is (= (test/resolve-attr (test-env {::test/data-bank (atom {:greet #{"Hi"}})})
             :greet)
           #{"Hi"})))

  (testing "navigate to discover attribute on a valid path"
    (is (= (test/resolve-attr (test-env {}) :greet)
           #{"Hello"})))

  (testing "return unreachable when there is no possible path"
    (is (= (test/resolve-attr (test-env {}) :not-here)
           {::test/error ::test/unreachable}))

    (is (= (test/resolve-attr (test-env {}) :impossible)
           {::test/error ::test/unreachable})))

  (testing "try next path if current one drops on middle"
    (is (= (test/resolve-attr (test-env {}) :honey)
           #{"Hello Stranger! Hello"})))

  (testing "return unreachable if all possible paths miss ways"
    (is (= (test/resolve-attr (test-env {}) :honey-pot)
           {::test/error ::test/unreachable})))

  (testing "cycle"
    (is (= (test/resolve-attr (test-env {}) :cycle-out)
           {::test/error ::test/unreachable}))))

(deftest test-collect-multi-args
  (is (= (test/collect-multi-args {::p.connect/index-resolvers {'a {::p.connect/input #{}}
                                                                'b {::p.connect/input #{:x}}
                                                                'c {::p.connect/input #{:x :y}}}})
         #{#{:x :y}})))

(deftest test-expand-output-tree
  (is (= (-> (test/expand-output-tree (-> {}
                                          (p.connect/add 'a {::p.connect/output [:p]})
                                          (p.connect/add 'b {::p.connect/input  #{:x}
                                                             ::p.connect/output [{:y [:z]}]})
                                          (p.connect/add 'c {::p.connect/input  #{:z}
                                                             ::p.connect/output [{:a [:b {:c [:d]}]}]})))
             ::p.connect/index-oir)
         '{:p {#{} #{a}}
           :y {#{:x} #{b}}
           :z {#{:x} #{b}}
           :a {#{:z} #{c}}
           :b {#{:z} #{c}}
           :c {#{:z} #{c}}
           :d {#{:z} #{c}}})))

(deftest test-input-list
  (is (= (test/input-list (test-env {}) {::p.connect/input #{:x}}
           {:x #{1 2 3 4}})
         [{:x 1} {:x 4} {:x 3} {:x 2}]))

  (is (= (test/input-list (test-env {}) {::p.connect/input #{}}
           {})
         [{}]))

  (is (= (test/input-list (test-env {::test/data-bank (atom {::test/multi-args #{#{:x :y}}
                                                             :container        #{[{:x 4 :y 9} {:x 3 :y 5}]} :x #{3 4} :y #{5 9}
                                                             #{:x :y}          #{{:x 4 :y 9} {:x 3 :y 5}}})})
           {::p.connect/input #{:x :y}}
           {:x #{3 4} :y #{5 9}})
         [{:x 4, :y 9} {:x 3, :y 5} {:x 4, :y 5} {:x 3, :y 9}])))

(deftest test-vector->set
  (is (= (test/vector->set [:x :y {:join [:a :b :c]} :z])
         #{:x :y {:join #{:a :b :c}} :z})))

(deftest test-diff-data-shapes
  (testing "nil when no new data"
    (is (= (test/diff-data-shapes [:a :b] [:a :b])
           nil))
    (is (= (test/diff-data-shapes [:a :b] [:a :b :c])
           nil)))

  (testing "pulls root diffs"
    (is (= (test/diff-data-shapes [:a :b :c] [:a :b])
           [:c])))

  (testing "pulls nested diffs"
    (is (= (test/diff-data-shapes [:a {:b [:c :d]}] [:a {:b [:c]}])
           [{:b [:d]}])))

  (testing "ignore difference from right side"
    (is (= (test/diff-data-shapes [:a {:b [:c]}] [:a {:b [:c :d]}])
           nil))

    (is (= (test/diff-data-shapes [:a {:b [:c]} :x] [:a {:b [:c :d]}])
           [:x]))

    (is (= (test/diff-data-shapes [:x] [{:x [:a]}])
           nil))

    (is (= (test/diff-data-shapes [{:x [:y]}] [{:x [{:y [:z]}]}])
           nil))))

(deftest test-merge-mismatch
  (is (= (test/merge-mismatch nil {::p.connect/output [:a]} {:a "foo" :b "bar"})
         #::test{:out-base       [:a]
                 :out-cumulative [:a :b]
                 :out-missing    [:b]}))

  (is (= (test/merge-mismatch #::test{:out-base       [:a]
                                      :out-cumulative [:a :b]
                                      :out-missing    [:b]}
           {::p.connect/output [:a]} {:a "foo" :c "bar"})
         #::test{:out-base       [:a]
                 :out-cumulative [:a :b :c]
                 :out-missing    [:c :b]})))

(defn test-resolver [env sym]
  (let [env (-> (test-env env)
                (test/prepare-environment))
        res (test/test-resolver* env (p.connect/resolver-data env sym))]
    (if (::test/data-bank res)
      (-> (update res ::test/data-bank #(if % (deref %)))
          (dissoc ::test/report-fn))
      res)))

(deftest test-test-resolver*
  (with-redefs [test/now (fn [] "NOW")]
    (is (= (-> (test-resolver {} `greet)
               ::test/data-bank)
           {::test/call-history {`greet {{} {:greet "Hello"}}}
            ::test/call-log     [["NOW" `greet {} {:greet "Hello"}]]
            :com.wsscode.pathom.connect.test/multi-args   #{#{:greet :stranger}}
            :greet              #{"Hello"}}))

    (is (= (-> (test-resolver {} `greet-stranger)
               ::test/data-bank)
           {::test/call-history {`greet          {{} {:greet "Hello"}}
                                 `greet-stranger {{:greet "Hello"} {:stranger "Hello Stranger!"}}}
            ::test/call-log     [["NOW" `greet {} {:greet "Hello"}]
                                 ["NOW" `greet-stranger {:greet "Hello"} {:stranger "Hello Stranger!"}]]
            :com.wsscode.pathom.connect.test/multi-args   #{#{:greet :stranger}}
            :greet              #{"Hello"}
            :stranger           #{"Hello Stranger!"}}))

    (is (= ::test/unreachable
           (-> (test-resolver
                 {::p.connect/indexes (p.connect/add indexes `impossible
                                        {::p.connect/input  #{:unavailable}
                                         ::p.connect/output [:impossible]})}
                 `impossible))))))

(defn open-ids-3 [_ _]
  {:items [{:id 1} {:id 2} {:id 3}]})

(defn open-ids-6 [_ _]
  {:items [{:id 1} {:id 2} {:id 3} {:id 4} {:id 5} {:id 6}]})

(defn id-operation [_ {:keys [id]}]
  {:id-changed (str id "-changed")})

(defn id-changed-dep [_ {:keys [id-changed]}]
  {:more-id (str id-changed "-more")})

(defn id-changed-dep2 [_ {:keys [id-changed]}]
  {:more-id-2 (str id-changed "-more")})

(defn id-changed-dep3 [_ {:keys [id-changed]}]
  {:more-id-3 (str id-changed "-more")})

(defn error-operation [_ {:keys [id]}]
  (throw (ex-info "Wrong" {})))

(def res-data
  `{open-ids-3      {::p.connect/output [{:items [:id]}]}
    open-ids-6      {::p.connect/output [{:items [:id]}]}
    id-operation    {::p.connect/input  #{:id}
                     ::p.connect/output [:id-changed]}
    id-changed-dep  {::p.connect/input  #{:id-changed}
                     ::p.connect/output [:more-id]}
    id-changed-dep2 {::p.connect/input  #{:id-changed}
                     ::p.connect/output [:more-id-2]}
    id-changed-dep3 {::p.connect/input  #{:id-changed}
                     ::p.connect/output [:more-id-3]}
    error-operation {::p.connect/input  #{:id}
                     ::p.connect/output [:error-not-happening]}})

(defn make-index [resolvers]
  (reduce
    #(p.connect/add % %2 (get res-data %2))
    {}
    resolvers))

(defn test-resolver-call-count
  ([resolvers resolver] (test-resolver-call-count {} resolvers resolver))
  ([env resolvers resolver-sym]
   (let [env (merge {::p.connect/indexes (make-index resolvers)} env)
         res (test/test-resolver env (p.connect/resolver-data env resolver-sym))]
     (some->> res
              ::test/data-bank deref ::test/call-history
              (into {} (map (fn [[k v]] [k (->> v (filter (comp map? first)) (count))])))))))

(deftest test-test-resolver-many
  (testing "respect number of calls"
    (is (= (test-resolver-call-count [`open-ids-6] `open-ids-6)
           `{open-ids-6 1}))

    (is (= (test-resolver-call-count [`id-operation `open-ids-6] `id-operation)
           `{id-operation 5
             open-ids-6   1}))

    (is (= (test-resolver-call-count [`id-operation `open-ids-3] `id-operation)
           `{id-operation 3
             open-ids-3   1}))

    (is (= (test-resolver-call-count [`error-operation `open-ids-6] `error-operation)
           `{error-operation 6
             open-ids-6      1}))

    (is (= (test-resolver-call-count {::test/max-error-retry 4}
             [`error-operation `open-ids-6] `error-operation)
           `{error-operation 4
             open-ids-6      1}))))

(defn test-call-count
  ([resolvers] (test-call-count {} resolvers))
  ([env resolvers]
   (let [res (test/test-index (merge {::p.connect/indexes (make-index resolvers)}
                                     env))]
     (->> res
          ::test/data-bank deref ::test/call-history
          (into {} (map (fn [[k v]] [k (->> v (filter (comp map? first)) (count))])))))))

(deftest test-test-index
  (testing "respect number of calls"
    (is (= (test-call-count [`open-ids-6])
           `{open-ids-6 1}))

    (is (= (test-call-count [`id-operation `open-ids-6])
           `{id-operation 5
             open-ids-6   1}))

    (is (= (test-call-count [`id-operation `open-ids-3])
           `{id-operation 3
             open-ids-3   1}))

    (is (= (test-call-count [`error-operation `open-ids-6])
           `{error-operation 6
             open-ids-6      1}))

    (is (= (test-call-count {::test/max-error-retry 4}
             [`error-operation `open-ids-6])
           `{error-operation 4
             open-ids-6      1}))))
