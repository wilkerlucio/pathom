(ns com.wsscode.pathom.core-test
  (:require [clojure.test :refer :all]
            [om.next :as om]
            [com.wsscode.pathom.core :as p]))

(defn q [q] (-> (om/query->ast q) :children first))

(def parser (om/parser {:read p/pathom-read}))

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

(deftest test-pathom-continue
  (let [parser (fn [_ query] {:q query})
        env    {:parser parser ::p/entity-key ::p/entity}]
    (are [e res] (= (p/continue e) res)
      (assoc env ::p/entity {:a 42}) {:a 42}
      (assoc env :query [] ::p/entity {:a 42}) {:q []}
      (assoc env :query '[*] ::p/entity {:a 42}) {:a 42 :q []}
      (assoc env :query '[* :name] ::p/entity {:a 42}) {:a 42 :q [:name]})))

(deftest test-pathom-continue-seq
  (is (= (p/continue-seq {::p/entity-key ::p/entity
                          :query         []
                          :parser        (fn [{::p/keys [entity]} _] (inc entity))}
                         [1 2 3])
         [2 3 4])))

(deftest ast-key-id
  (are [ast res] (is (= (p/ast-key-id ast) res))
    {} nil
    {:key :sample} nil
    {:key [:item/by-id 123]} 123))

(deftest test-ident-value
  (are [ast res] (is (= (p/ident-value ast) res))
    {} nil
    {:ast {:key :sample}} nil
    {:ast {:key [:item/by-id 123]}} 123))

(deftest test-ensure-attrs
  (is (= (p/ensure-attrs {:parser    parser
                          ::p/entity {:a 1}
                          ::p/reader [p/map-reader (constantly "extra")]}
                         [:a :b])
         {:a 1 :b "extra"})))

(deftest test-entity-dispatch
  (is (= (p/entity-dispatch {:ast {:key [:user/by-id 10]}})
         :user/by-id)))

(deftest test-placeholder-node
  (is (= (parser {::p/reader [{:a (constantly 42)} p/placeholder-node]}
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

#?(:cljs
   (deftest test-js-obj-reader
     (are [entity query res] (is (= (parser {::p/reader p/js-obj-reader
                                             ::p/js-key-transform name
                                             ::p/entity entity} query)
                                    res))
       #js {:simple 42} [:simple] {:simple 42}
       #js {:simple 42} [:namespaced/simple] {:namespaced/simple 42}

       #js [:simple] {:simple ::p/not-found}

       (clj->js {:coll [{:a 1 :b 2} {:a 2 :c 3}]}) [{:coll [:a :b]}]
       {:coll [{:a 1 :b 2}
               {:a 2 :b :com.wsscode.pathom.core/not-found}]}

       (clj->js {:nested {:value 3}}) [{:nested [:value]}]
       {:nested {:value 3}})))

(deftest pathom-read
  (testing "path accumulation"
    (is (= (parser {::p/reader [p/map-reader (fn [{::p/keys [path]}] path)]
                    ::p/entity {:going {:deep [{}]}}}
                   [{:going [{:deep [:off]}]}])
           {:going {:deep [{:off [:going :deep :off]}]}}))))
