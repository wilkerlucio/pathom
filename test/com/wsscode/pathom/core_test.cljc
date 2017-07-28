(ns com.wsscode.pathom.core-test
  (:require [clojure.test :refer :all]
            [om.next :as om]
            [com.wsscode.pathom.core :as p]))

(defn q [q] (-> (om/query->ast q) :children first))

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
                          :query []
                          :parser (fn [{::p/keys [entity]} _] (inc entity))}
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
  (is (= (p/ensure-attrs ))))

(comment
  (p/read-from {:ast (q [:name])} {:name (fn [_] (str "value"))})

  (p/ident-value {:key [:item/by-id 123]})

  (p/continue {:parser    (fn [env query] [env query])
               :query     []
               ::p/entity {}}))
