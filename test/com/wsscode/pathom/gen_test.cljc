(ns com.wsscode.pathom.gen-test
  (:require [com.wsscode.pathom.gen :as sgen]
            [com.wsscode.pathom.specs.query :as spec.query]
            [clojure.test :refer :all]
            [clojure.test.check :as tc]
            [clojure.test.check.properties :as props]
            [clojure.test.check.clojure-test :as test]
            [clojure.spec.alpha :as s]
            [fulcro.client.primitives :as fp]
            [clojure.test.check.generators :as gen]))

(def gen-env
  {::sgen/silent?  true
   ::sgen/settings {:id               {::sgen/gen (s/gen string?)}
                    :name             {::sgen/gen (s/gen string?)}
                    :title            {::sgen/gen (s/gen string?)}
                    :foo              {::sgen/gen (s/gen string?)}
                    :bar              {::sgen/gen (s/gen string?)}
                    :other            {::sgen/gen (s/gen string?)}
                    :price            {::sgen/gen (s/gen string?)}
                    :namespaced/value {::sgen/gen (s/gen string?)}
                    'mutation         {::sgen/fn (fn [env]
                                                   {:mutation "response"})}}})

(s/def ::coll (s/coll-of int?))
(s/def ::not-coll int?)
(s/def ::fixed-number #{42})
(s/def ::fixed-str #{"bla"})
(s/def ::some-id uuid?)

(fp/defsc Component [_ _ _]
  {:ident (fn [] [:fixed "here"])
   :query [::fixed-number ::fixed-str]}
  (identity nil))

(deftest test-coll-spec?
  (is (true? (sgen/coll-spec? ::coll)))
  (is (false? (sgen/coll-spec? ::not-coll)))
  (is (false? (sgen/coll-spec? ::invalid))))

(deftest test-query->props
  (is (= (sgen/query->props gen-env [::fixed-number ::fixed-str ::undefined])
         {::fixed-number 42 ::fixed-str "bla"}))

  (is (= (sgen/query->props {::sgen/settings {::number-list {::sgen/coll 10}}}
           [{::number-list [::fixed-number]}])
         {::number-list (repeat 10 {::fixed-number 42})}))

  (is (= (sgen/query->props {::sgen/settings {::fixed-number {::sgen/gen (s/gen #{43})}}}
           [::fixed-number])
         {::fixed-number 43}))

  (is (= (sgen/query->props [[::fixed-number '_]])
         {::fixed-number 42}))

  (is (= (sgen/query->props [{[::some-id 123]
                              [::some-id ::fixed-str]}])
         {[:com.wsscode.pathom.gen-test/some-id 123]
          {:com.wsscode.pathom.gen-test/some-id   123
           :com.wsscode.pathom.gen-test/fixed-str "bla"}}))

  (is (= (sgen/query->props gen-env ['(mutation {:foo "bar"})])
         {'mutation {:mutation "response"}})))

(defn generate-props []
  (let [props (->> (keys (::sgen/settings gen-env))
                   (filter keyword?))]
    (props/for-all [query (spec.query/make-gen
                            {::spec.query/gen-property
                             (fn [_] (gen/elements props))

                             ::spec.query/gen-ident-key
                             (fn [_] (gen/elements props))

                             ::spec.query/gen-union-key
                             (fn [_] (gen/elements props))

                             ::spec.query/gen-params
                             (fn [_] (gen/return {}))}

                            ::spec.query/gen-query)]
      (sgen/query->props gen-env query))))

(test/defspec generate-props-test {:max-size 18 :num-tests 100} (generate-props))

(deftest test-comp->props
  (is (= (sgen/comp->props Component)
         {::fixed-number 42 ::fixed-str "bla"})))

(deftest test-comp->db
  (is (= (sgen/comp->db Component)
         {::fixed-number 42 ::fixed-str "bla"})))
