(ns com.wsscode.pathom.graphql-test
  (:require
    [clojure.string :as str]
    [clojure.test :refer [is are testing]]
    [com.wsscode.pathom.graphql :as pg]
    [edn-query-language.core :as eql]
    [fulcro.client.primitives :as fp]
    [nubank.workspaces.core :refer [deftest]])
  #?(:clj
     (:import
       (java.util
         UUID))))

(defn query->graphql [query]
  (-> (pg/query->graphql query {::pg/tempid? fp/tempid?})
      (str/replace #"\s+" " ")
      (str/trim)))

(defn aliased [alias key]
  (eql/update-property-param key assoc ::pg/alias alias))

(defn uuid* [s]
  #?(:clj (UUID/fromString s)
     :cljs (uuid s)))

(deftest test-query->graphql
  (are [query out] (= (query->graphql query) out)
    ; properties
    [] "query { }"
    [:property] "query { property }"
    [:qualified/property] "query { property }"

    ; on
    '[:hello (:other {::pg/on "User"})] "query { hello ... on User { other } }"

    ; params
    '[(:parameterized {:foo "bar"})] "query { parameterized(foo: \"bar\") }"

    '[(:parameterized {:foo [a b]})] "query { parameterized(foo: [a, b]) }"

    `[(:parameterized {:foo ~(uuid* "ead34300-0ef6-4c31-9626-90bf18fa22c0")})]
    "query { parameterized(foo: \"ead34300-0ef6-4c31-9626-90bf18fa22c0\") }"

    ; aliasing
    '[(:property {::pg/alias "aliased"})] "query { aliased: property }"
    '[{(:property {::pg/alias "aliased" :another "param"})
       [:subquery]}] "query { aliased: property(another: \"param\") { subquery } }"

    ; ident

    [{[:Item/id 123] [:id :name]}]
    "query { _Item_id_123: Item(id: 123) { id name } }"

    [{[:service.Item/id 123] [:id :name]}]
    "query { _service_Item_id_123: Item(id: 123) { id name } }"

    [{[:item/name-and-owner ["NAM" "OWN"]] [:id :name]}]
    "query { _item_name_and_owner_NAM_OWN: item(name: \"NAM\", owner: \"OWN\") { id name } }"

    [{[:Item/slug "some-post"] [:id :slug]}]
    "query { _Item_slug_some_post: Item(slug: \"some-post\") { id slug } }"

    [{[:Item/id "123,45"] [:id :name]}]
    "query { _Item_id_123_45: Item(id: \"123,45\") { id name } }"

    [{[:Item/id 123] [:id :name]}
     {[:Item/id 321] [:id :name]}]
    "query { _Item_id_123: Item(id: 123) { id name } _Item_id_321: Item(id: 321) { id name } }"

    '[({[:Item/id 123] [:id :name]} {:name "bla"})]
    "query { _Item_id_123: Item(id: 123, name: \"bla\") { id name } }"

    [{:all-items [:id :name]}]
    "query { all-items { id name } }"

    '[{:all-items [:hello
                   (:other {::pg/on "User"})
                   (:foo {::pg/on "User"})
                   (:location {::pg/on "Place"})]}]
    "query { all-items { hello ... on User { other foo } ... on Place { location } } }"

    '[({:nodes [:id :user/name]} {:last 10})]
    "query { nodes(last: 10) { id name } }"

    [{:search
      {:User  [:username]
       :Movie [:director]
       :Book  [:author]}}]
    "query { search { __typename ... on User { username } ... on Movie { director } ... on Book { author } } }"

    [:id {:parent 3}]
    "query { id parent { id parent { id parent { id } } } }"

    [:id {:parent '...}]
    "query { id parent { id parent { id parent { id parent { id parent { id } } } } } }"

    '[(call {:param "value"})]
    "mutation { call(param: \"value\")}"

    '[(call {:enum HEY})]
    "mutation { call(enum: HEY)}"

    [(list 'call {:id (fp/tempid) :param "value"})]
    "mutation { call(param: \"value\") { id} }"

    [(list 'call {:id (fp/tempid) :param "value" ::pg/mutate-join []})]
    "mutation { call(param: \"value\") { id} }"

    '[{(call {:param "value" :item/value 42}) [:id :foo]}]
    "mutation { call(param: \"value\", value: 42) { id foo } }"

    '[{(call {:param "value" :item/value 42}) [*]}]
    "mutation { call(param: \"value\", value: 42)}"

    '[(call {:param {:nested "value"}})]
    "mutation { call(param: {nested: \"value\"})}"

    '[(call {:param "value" :item/value 42 ::pg/mutate-join [:id :foo]})]
    "mutation { call(param: \"value\", value: 42) { id foo } }"

    '[{(call {:param "value" :item/value 42}) [:id :foo (:other {::pg/on "User"})]}]
    "mutation { call(param: \\\"value\\\", value: 42) { id foo ... on User { other } } }"))

(comment
  (query->graphql '[(:property {::pg/alias "aliased"})])
  (query->graphql '[{(:property {::pg/alias "aliased" :another "param"})
                     [:subquery]}])

  (-> '[{(call {:param "value" :item/value 42}) [*]}]
      (pg/query->graphql {::pg/tempid? fp/tempid?})
      (str/replace #"\s+" " ")
      (str/trim))

  (-> '[{:app/timeline
         [:entity/id
          (:user/name {::pg/on :app/User})
          {(:activity/user {::pg/on :app/User})
           [:user/name]}]}]
      (pg/query->graphql)
      (println))

  (-> (pg/query->graphql [{:search
                                ^{::pg/union-query [:__typename]}
                                {:User  [:username]
                                 :Movie [:director]
                                 :Book  [:author]}}])

      (println ))

  (-> (pg/query->graphql [{[:customer/customer-id "123"]
                                [:stormshield.customer/cpf]}])

      (println ))

  (-> (fp/query->ast [{:search
                       ^{::pg/union-query [:__typename]}
                       {:User  [:username]
                        :Movie [:director]
                        :Book  [:author]}}]))

  (fp/query->ast [{:search
                   {:User  [:username]
                    :Movie [:director]
                    :Book  [:author]}}])
  (fp/ast->query (fp/query->ast '[{(call {:param "value" :item/value 42}) [:id :foo]}]))
  (pg/query->graphql `[(call {:id ~(fp/tempid) :param "value"})]))
