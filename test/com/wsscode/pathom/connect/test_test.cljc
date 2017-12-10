(ns com.wsscode.pathom.connect.test-test
  (:require [clojure.test :refer :all]
            [com.wsscode.pathom.connect :as p.connect]
            [com.wsscode.pathom.connect.test :as test]))

(deftest test-bank-add
  (is (= (test/bank-add {} {}) {}))
  (is (= (test/bank-add {} {:x 1}) {:x #{1}}))
  (is (= (test/bank-add {:x #{1}} {:x 2}) {:x #{1 2}}))

  (is (= (test/bank-add {} {:container {:x 4 :y 9}})
         {:container #{{:x 4 :y 9}} :x #{4} :y #{9}}))

  (is (= (test/bank-add {} {:container [{:x 4 :y 9} {:x 3 :y 5}]})
         {:container #{[{:x 4 :y 9} {:x 3 :y 5}]} :x #{3 4} :y #{5 9}}))

  (is (= (test/bank-add {} {:container [1 2]})
         {:container #{[1 2]}}))

  (is (= (test/bank-add {::test/multi-args #{#{:x :y}}} {:x 1 :y 2 :z 3})
         {::test/multi-args #{#{:x :y}}
          :x #{1} :y #{2} :z #{3} #{:x :y} #{{:x 1 :y 2}}}))

  (is (= (test/bank-add {::test/multi-args #{#{:x :y}}}
           {:container [{:x 4 :y 9} {:x 3 :y 5}]})
         {::test/multi-args #{#{:x :y}}
          :container #{[{:x 4 :y 9} {:x 3 :y 5}]} :x #{3 4} :y #{5 9}
          #{:x :y} #{{:x 4 :y 9} {:x 3 :y 5}}})))

(deftest test-call-add
  (is (= (test/call-add {} {:x 2})
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
  (merge {::test/data-bank    (atom {})
          ::p.connect/indexes indexes}
         env))

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
           ::test/unreachable))

    (is (= (test/resolve-attr (test-env {}) :impossible)
           ::test/unreachable)))

  (testing "try next path if current one drops on middle"
    (is (= (test/resolve-attr (test-env {}) :honey)
           #{"Hello Stranger! Hello"})))

  (testing "return unreachable if all possible paths miss ways"
    (is (= (test/resolve-attr (test-env {}) :honey-pot)
           ::test/unreachable)))

  (testing "cycle"
    (is (= (test/resolve-attr (test-env {}) :cycle-out)
           ::test/unreachable))))

(defn test-resolver [env sym]
  (let [env (test-env env)]
    (some-> (test/test-resolver env (p.connect/resolver-data env sym))
            (update ::test/data-bank deref))))

(deftest test-test-resolver
  (with-redefs [test/now (fn [] "NOW")]
    (is (= (test-resolver {} `greet)
           {::p.connect/indexes indexes
            ::test/data-bank    {::test/call-history {`greet {::test/calls #{{}}}},
                                 ::test/call-log     [["NOW" `greet {} {:greet "Hello"}]],
                                 :greet              #{"Hello"}}}))


    (is (= (test-resolver {} `greet-stranger)
           {::p.connect/indexes indexes
            ::test/data-bank    {::test/call-history {`greet          {::test/calls #{{}}}
                                                      `greet-stranger {:greet       #{"Hello"}
                                                                       ::test/calls #{{:greet "Hello"}}}},
                                 ::test/call-log     [["NOW" `greet {} {:greet "Hello"}]
                                                      ["NOW" `greet-stranger {:greet "Hello"} {:stranger "Hello Stranger!"}]],
                                 :greet              #{"Hello"}
                                 :stranger           #{"Hello Stranger!"}}}))

    (is (nil? (test-resolver
                {::p.connect/indexes (p.connect/add indexes `impossible
                                       {::p.connect/input  #{:unavailable}
                                        ::p.connect/output [:impossible]})}
                `impossible)))))
