(ns com.wsscode.pathom.map-db-test
  (:require [clojure.test :refer :all]
            [com.wsscode.pathom.map-db :as map-db]
            [fulcro.client.primitives :as fp]
            [com.wsscode.pathom.specs.query :as spec.query]
            [com.wsscode.pathom.gen :as pgen]
            [clojure.test.check :as tc]
            [clojure.test.check.properties :as props]
            [clojure.spec.alpha :as s]
            [clojure.spec.gen.alpha :as gen]
            [com.wsscode.pathom.gen :as sgen]
            [com.wsscode.pathom.core :as p]))

(deftest db-tree-sanity-checks
  (are [q m r o] (= (map-db/db->tree q m r) o)
    ; simple
    [:a] {:a 1} nil, {:a 1}

    ; join
    [{:b [:foo]}]
    {:b [:x 1]}
    {:x {1 {:foo "bar"}}}
    , {:b {:foo "bar"}}

    ; deep join
    [{:b [:foo {:bar [:baz]}]}]
    {:b [:x 1]}
    {:x {1 {:foo "bar"
            :bar [:x 2]}
         2 {:baz "zzz"}}}
    , {:b {:foo "bar" :bar {:baz "zzz"}}}

    ; ident queries
    [[:x 1]]
    {}
    {:x {1 {:foo "bar" :buz "baz"}}}
    , {[:x 1] {:foo "bar" :buz "baz"}}

    [{[:x 1] [:foo]}]
    {}
    {:x {1 {:foo "bar" :buz "baz"}}}
    , {[:x 1] {:foo "bar"}}

    ; root links
    [[:x '_]]
    {}
    {:x {1 {:foo "bar" :buz "baz"}}}
    , {:x {1 {:foo "bar" :buz "baz"}}}

    ; union
    [{:x {:a [:aa]
          :b [:bb]}}]
    {:x [:a 1]}
    {:a {1 {:aa "aaa"}}
     :b {1 {:bb "bbb"}}}
    , {:x {:aa "aaa"}}

    ; union sequence
    [{:x {:a [:aa]
          :b [:bb]}}]
    {:x [[:a 1]
         [:b 1]]}
    {:a {1 {:aa "aaa"}}
     :b {1 {:bb "bbb"}}}
    , {:x [{:aa "aaa"} {:bb "bbb"}]}

    ; recursion unbounded
    '[{:x [:id {:parent ...}]}]
    {:x [:a 1]}
    {:a {1 {:id 1 :parent [:a 2]}
         2 {:id 2 :parent [:a 3]}
         3 {:id 3}}}
    , {:x {:id         1
               :parent {:id     2
                        :parent {:id 3}}}}

    ; recursion bounded
    '[{:x [:id {:parent 3}]}]
    {:x [:a 1]}
    {:a {1 {:id 1 :parent [:a 2]}
         2 {:id 2 :parent [:a 3]}
         3 {:id 3 :parent [:a 4]}
         4 {:id 4 :parent [:a 5]}
         5 {:id 5 :parent [:a 6]}
         6 {:id 6}}}
    , {:x {:id         1
               :parent {:id     2
                        :parent {:id     3
                                 :parent {:id 4}}}}}

    ; recursive loop
    '[{:x [:id {:parent ...}]}]
    {:x [:a 1]}
    {:a {1 {:id 1 :parent [:a 2]}
         2 {:id 2 :parent [:a 3]}
         3 {:id 3 :parent [:a 1]}}}
    , {:x {:id         1
               :parent {:id     2
                        :parent {:id     3
                                 :parent [:a 1]}}}}

    ; recursive loop sequence
    '[{:x [:id {:parent ...}]}]
    {:x [:a 1]}
    {:a {1 {:id 1 :parent [[:a 2]]}
         2 {:id 2 :parent [[:a 3]]}
         3 {:id 3 :parent [[:a 1]]}}}
    , {:x {:id 1
               :parent [{:id 2
                         :parent [{:id 3
                                   :parent [[:a 1]]}]}]}}))

(def gen-env
  {::pgen/settings
   {:id               {::pgen/gen (s/gen string?)}
    :name             {::pgen/gen (s/gen string?)}
    :title            {::pgen/gen (s/gen string?)}
    :foo              {::pgen/gen (s/gen string?)}
    :bar              {::pgen/gen (s/gen string?)}
    :other            {::pgen/gen (s/gen string?)}
    :price            {::pgen/gen (s/gen string?)}
    :namespaced/value {::pgen/gen (s/gen string?)}}})

(defn data-refs [data]
  (->> data
       (filter (comp p/ident? first))
       (reduce (fn [r [k v]] (assoc-in r k v)) {})))

(defn catch-error [f & args]
  (try
    (apply f args)
    (catch Throwable _ ::exception)))

(deftest test-sorting-plugin
  (let [parser (p/parser {::p/plugins [(p/env-plugin {::p/reader p/map-reader})
                                       (map-db/sort-plugin)]})
        env    {::p/entity {:items [{:id 1 :name "Z"}
                                    {:id 2 :name "A"}
                                    {:id 3 :name "M"}]}}]
    (is (= (parser env '[{(:items {::map-db/sort-by :name})
                          [:id :name]}])
           {:items [{:id 2 :name "A"}
                    {:id 3 :name "M"}
                    {:id 1 :name "Z"}]}))

    (is (= (parser env '[{(:items {::map-db/sort-by [:name ::map-db/desc]})
                          [:id :name]}])
           {:items [{:id 1 :name "Z"}
                    {:id 3 :name "M"}
                    {:id 2 :name "A"}]}))))

(comment
  ; can leave out, requires manual spec changes for compat run
  (tc/quick-check 300
    (props/for-all [query (s/gen ::spec.query/query)]
      (let [data (pgen/query->props gen-env query)
            refs (data-refs data)
            fres (catch-error fp/db->tree query data refs)
            dres (catch-error map-db/db->tree query data refs)]
        (or
          (= fres dres)
          (and (map? dres) (= ::exception fres)))))))
