(ns com.wsscode.pathom.core-test
  (:require [clojure.test :refer :all]
            [om.next :as om]
            [com.wsscode.pathom.core :as p]))

(defn q [q] (-> (om/query->ast q) :children first))

(def parser' (om/parser {:read p/pathom-read}))
(def parser (p/parser {}))

(deftest test-union-children?
  (are [ast res] (is (= (p/union-children? ast) res))
    {} false
    {:children []} false
    {:children [{:type :union}]} true))

(deftest test-read-key
  (let [c (fn [_] ::p/continue)
        m (fn [_] 42)]
    (are [env reader result] (= (p/read-from env reader) result)
      {:ast (q [:name])} (fn [_] "value")
      "value"

      {:ast (q [:name])} (fn [_] nil)
      nil

      {:ast (q [:name]) :x 42} (fn [env] (:x env))
      42

      {:ast (q [:name]) :x 42} [(fn [env] (:x env))]
      42

      {:ast (q [:name]) :x 42} [{} {:name (fn [env] (:x env))}]
      42

      {:ast (q [:name])} {}
      ::p/not-found

      {:ast (q [:name])} {:name (fn [_] (str "value"))}
      "value"

      {:ast (q [:name])} {:name (fn [_] (str "value"))}
      "value"

      {:ast (q [:name])} []
      ::p/not-found

      {:ast (q [:name])} [c]
      ::p/not-found

      {:ast (q [:name])} [m]
      42

      {:ast (q [:name])} [c m]
      42

      {:ast (q [:name])} [c {:no #(str "value")} [c c] {:name (fn [_] "Bil")}]
      "Bil"

      {:ast (q [:name])} [(fn [_] nil)]
      nil)))

(deftest test-pathom-join
  (let [parser (fn [_ query] {:q query})
        env    {:parser parser ::p/entity-key ::p/entity}]
    (are [e res] (= (p/join e) res)
      (assoc env ::p/entity {:a 42}) {:a 42}
      (assoc env :query [] ::p/entity {:a 42}) {:q []}
      (assoc env :query '[*] ::p/entity {:a 42}) {:a 42 :q []}
      (assoc env :query '[* :name] ::p/entity {:a 42}) {:a 42 :q [:name]}))

  (testing "join sending entity"
    (let [reader [p/map-reader
                  (fn [env] (p/join {:a 1} env))]]
      (is (= (parser {::p/reader reader} [{:any [:a]}])
             {:any {:a 1}}))))

  (testing "join * with acc data"
    (let [reader [p/map-reader
                  {:any #(p/join (atom {:id 123}) %)
                   :load (fn [env]
                           (p/swap-entity! env merge {:load :foo
                                                      :name "bla"})
                           :foo)}]]
      (is (= (parser {::p/reader reader} [{:any [:load '*]}])
             {:any {:id 123 :load :foo :name "bla"}}))))

  (testing "join with union keyword"
    (let [reader [p/map-reader
                  (fn [env] (p/join {:type :x :a 1} (assoc env ::p/union-path :type)))]]
      (is (= (parser {::p/reader reader} [{:any {:x [:a]}}])
             {:any {:a 1}}))))

  (testing "join with union keyword computed"
    (let [reader [{:type-c (fn [env] (get (p/entity env) :type))}
                  p/map-reader
                  (fn [env] (p/join {:type :x :a 1} (assoc env ::p/union-path :type-c)))]]
      (is (= (parser {::p/reader reader} [{:any {:x [:a]}}])
             {:any {:a 1}}))))

  (testing "join with union keyword fn"
    (let [reader [p/map-reader
                  (fn [env] (p/join {:type :x :a 1} (assoc env ::p/union-path #(get (p/entity %) :type))))]]
      (is (= (parser {::p/reader reader} [{:any {:x [:a]}}])
             {:any {:a 1}})))))

(deftest test-pathom-join-seq
  (is (= (p/join-seq {::p/entity-key ::p/entity
                      :query         []
                      :parser        (fn [{::p/keys [entity]} _] (inc entity))}
           [1 2 3])
         [2 3 4])))

(deftest test-ident-value
  (are [ast res] (is (= (p/ident-value ast) res))
    {} nil
    {:ast {:key :sample}} nil
    {:ast {:key [:item/by-id 123]}} 123))

(deftest test-entity
  (is (= (p/entity {::p/entity     {:foo "bar"}
                    ::p/entity-key ::p/entity})
         {:foo "bar"}))
  (is (= (p/entity {:parser    parser
                    ::p/entity {:a 1}
                    ::p/reader [p/map-reader {:b (constantly "extra")}]}
           [:a :b])
         {:a 1 :b "extra"}))
  (is (= (p/entity {:parser    parser
                    ::p/entity (atom {:a 1})
                    ::p/reader [p/map-reader {:b (constantly "extra")}]}
           [:a :b])
         {:a 1 :b "extra"})))

(deftest test-elide-not-found
  (is (= (p/elide-not-found {:a 1
                             :b :com.wsscode.pathom.core/not-found
                             :c "extra"
                             :d :com.wsscode.pathom.core/not-found})
         {:a 1
          :c "extra"})))

(deftest test-entity!
  (is (= (p/entity! {:parser    parser
                     ::p/entity {:a 1}
                     ::p/reader [p/map-reader {:b (constantly "extra")}]}
           [:a :b])
         {:a 1 :b "extra"}))

  (is (thrown-with-msg? clojure.lang.ExceptionInfo #"Entity attributes #\{:b :d} could not be realized"
        (p/entity! {:parser    parser
                    ::p/entity {:a 1}
                    ::p/reader [p/map-reader {:c (constantly "extra")}]}
          [:a :b :c :d]))))

(deftest test-entity-attr!
  (is (= (p/entity-attr! {:parser    parser
                          ::p/entity {:a 1}
                          ::p/reader [p/map-reader {:b (constantly "extra")}]}
                         :b)
         "extra"))

  (is (thrown-with-msg? clojure.lang.ExceptionInfo #"Entity attributes #\{:b} could not be realized"
        (p/entity-attr! {:parser    parser
                         ::p/entity {:a 1}
                         ::p/reader [p/map-reader {:c (constantly "extra")}]}
                        :b))))

(deftest test-update-entity!
  (let [e (atom {:a 1})]
    (is (= (p/swap-entity! {::p/entity e} assoc :foo "bar")
           {:a 1 :foo "bar"})
        (= @e {:a 1 :foo "bar"})))

  (is (= (p/swap-entity! {::p/entity {}} assoc :foo "bar")
         nil)))

(deftest elide-ast-nodes-test
  (is (= (-> [:a :b {:c [:d]}]
             om/query->ast
             (p/elide-ast-nodes #{:b :d})
             om/ast->query)
         [:a {:c []}])))

(deftest test-entity-dispatch
  (is (= (p/entity-dispatch {:ast {:key [:user/by-id 10]}})
         :user/by-id)))

(deftest test-placeholder-node
  (is (= (parser {::p/reader [{:a (constantly 42)} (p/placeholder-reader)]}
           [:a {:>/sub [:a]}])
         {:a 42 :>/sub {:a 42}}))

  (is (= (parser {::p/reader [{:a (constantly 42)} (p/placeholder-reader "ph")]}
           [:a {:ph/sub [:a]}])
         {:a 42 :ph/sub {:a 42}})))

(deftest test-map-reader
  (are [entity query res] (is (= (parser {::p/reader p/map-reader
                                          ::p/entity entity} query)
                                 res))
    {:simple 42} [:simple] {:simple 42}

    {} [:simple] {:simple ::p/not-found}

    {:coll [{:a 1 :b 2} {:a 2 :c 3}]} [{:coll [:a :b]}]
    {:coll [{:a 1 :b 2}
            {:a 2 :b :com.wsscode.pathom.core/not-found}]}

    {:nested {:value 3}} [{:nested [:value]}] {:nested {:value 3}}))

(deftest test-map-reader*
  (are [entity query res] (is (= (parser {::p/reader (p/map-reader* {::p/map-key-transform name})
                                          ::p/entity entity} query)
                                 res))
    {"simple" 42} [:some/simple] {:some/simple 42}

    {} [:simple] {:simple ::p/not-found}

    {"coll" [{"a" 1 "b" 2} {"a" 2 "c" 3}]} [{:my/coll [:a :b]}]
    {:my/coll [{:a 1 :b 2}
               {:a 2 :b :com.wsscode.pathom.core/not-found}]}

    {"nested" {"value" 3}} [{:nested [:value]}] {:nested {:value 3}}))

#?(:cljs
   (deftest test-js-obj-reader
     (are [entity query res] (is (= (parser {::p/reader           p/js-obj-reader
                                             ::p/js-key-transform name
                                             ::p/entity           entity} query)
                                    res))
       #js {:simple 42} [:simple] {:simple 42}
       #js {:simple 42} [:namespaced/simple] {:namespaced/simple 42}

       #js [:simple] {:simple ::p/not-found}

       (clj->js {:coll [{:a 1 :b 2} {:a 2 :c 3}]}) [{:coll [:a :b]}]
       {:coll [{:a 1 :b 2}
               {:a 2 :b :com.wsscode.pathom.core/not-found}]}

       (clj->js {:nested {:value 3}}) [{:nested [:value]}]
       {:nested {:value 3}})))

(deftest test-global-readers
  (is (= (parser' {::p/reader         p/map-reader
                   ::p/process-reader #(vector % (p/placeholder-reader "ph"))
                   ::p/entity         {:foo "bar" :bar "baz"}}
           [:foo {:ph/sample [:bar [:bar 123]]}])
         {:foo       "bar"
          :ph/sample {:bar       "baz"
                      [:bar 123] ::p/not-found}})))

(def error-parser (p/parser {::p/plugins [p/error-handler-plugin]}))

(def error-reader
  {:bar (fn [{:keys [ast]}]
          (let [params (-> ast :params)]
            (throw (ex-info (:message params) params))))})

(deftest test-wrap-handle-exception
  (let [errors* (atom {})]
    (is (= (error-parser {::p/reader        [error-reader p/map-reader]
                          ::p/entity        {:name "bla"
                                             :one  {:foo "bar"}
                                             :many [{:foo "dah"} {:foo "meh"}]}
                          ::p/process-error #(.getMessage %2)
                          ::p/errors*       errors*}
             [:name {:one ['(:bar {:message "Booooom"}) :foo]}])
           {:name      "bla"
            :one       {:bar ::p/reader-error
                        :foo "bar"}
            ::p/errors {[:one :bar] "Booooom"}}))))

(deftest test-env-plugin
  (let [parser (p/parser {::p/plugins [(p/env-plugin {:foo "bar"})]})]
    (is (= (parser {::p/reader {:gimme-foo :foo}} [:gimme-foo])
           {:gimme-foo "bar"}))))

(deftest test-env-wrap-plugin
  (let [parser (p/parser {::p/plugins [(p/env-wrap-plugin (fn [env]
                                                            (assoc env :foo "bar")))]})]
    (is (= (parser {::p/reader {:gimme-foo :foo}} [:gimme-foo])
           {:gimme-foo "bar"}))))

(def cached-parser (p/parser {::p/plugins [p/request-cache-plugin]}))

(deftest test-request-cache
  (testing "basic cache"
    (is (= (cached-parser {::p/reader [{:cached (fn [e]
                                                  (p/cached e :sample
                                                    (swap! (:counter e) inc)))}
                                       (p/placeholder-reader "ph")]
                           :counter   (atom 0)}
             [:cached {:ph/inside [:cached]}])
           {:cached 1 :ph/inside {:cached 1}})))

  (testing "ensure cache is not living between requests"
    (is (= (cached-parser {::p/reader [{:cached (fn [e]
                                                  (p/cached e :sample
                                                    (swap! (:counter e) inc)))}
                                       (p/placeholder-reader "ph")]
                           :counter   (atom 2)}
             [:cached {:ph/inside [:cached]}])
           {:cached 3 :ph/inside {:cached 3}})))

  (testing "cache-hit stores value"
    (is (= (cached-parser {::p/reader [{:hit    (fn [e] (p/cache-hit e :sample 10))
                                        :cached (fn [e]
                                                  (p/cached e :sample
                                                    (swap! (:counter e) inc)))}
                                       (p/placeholder-reader "ph")]
                           :counter   (atom 2)}
             [:hit :cached])
           {:hit 10 :cached 10}))))

;;;;;;;;;;;

(deftest pathom-read
  (testing "path accumulation"
    (is (= (parser {::p/reader [p/map-reader (fn [{::p/keys [path]}] path)]
                    ::p/entity {:going {:deep [{}]}}}
             [{:going [{:deep [:off]}]}])
           {:going {:deep [{:off [:going :deep 0 :off]}]}}))))
