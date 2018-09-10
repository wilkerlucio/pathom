(ns com.wsscode.pathom.graphql-test
  (:require
    [clojure.test :refer [is are testing]]
    [nubank.workspaces.core :refer [deftest]]
    [com.wsscode.pathom.graphql :as graphql]
    [clojure.string :as str]
    [fulcro.client.primitives :as fp]))

(deftest test-query->graphql
  (are [query out] (= (-> (graphql/query->graphql query {::graphql/tempid? fp/tempid?})
                          (str/replace #"\s+" " ")
                          (str/trim))
                      out)
    [] "query { }"
    [:property] "query { property }"
    [:qualified/property] "query { property }"
    '[:hello (:other {::graphql/on "User"})] "query { hello ... on User { other } }"
    '[(:parameterized {:foo "bar"})] "query { parameterized(foo: \"bar\") }"

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
                   (:other {::graphql/on "User"})
                   (:foo {::graphql/on "User"})
                   (:location {::graphql/on "Place"})]}]
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
    "mutation { call(param: \"value\") { } }"

    '[(call {:enum HEY})]
    "mutation { call(enum: HEY) { } }"

    [(list 'call {:id (fp/tempid) :param "value"})]
    "mutation { call(param: \"value\") { id } }"

    [(list 'call {:id (fp/tempid) :param "value" ::graphql/mutate-join []})]
    "mutation { call(param: \"value\") { id } }"

    ; May work after https://github.com/omcljs/om/issues/885
    ;'[{(call {:param "value" :item/value 42}) [:id :foo]}]
    ;"mutation { call(param: \"value\", value: 42) { id foo } }"

    '[(call {:param {:nested "value"}})]
    "mutation { call(param: {nested: \"value\"}) { } }"

    '[(call {:param "value" :item/value 42 ::graphql/mutate-join [:id :foo]})]
    "mutation { call(param: \"value\", value: 42) { id foo } }"))

(comment
  (-> [(list 'call {:id (fp/tempid) :param "value"})]
      (graphql/query->graphql {::graphql/tempid? fp/tempid?})
      (str/replace #"\s+" " ")
      (str/trim))

  (-> '[{:app/timeline
         [:entity/id
          (:user/name {::graphql/on :app/User})
          {(:activity/user {::graphql/on :app/User})
           [:user/name]}]}]
      (graphql/query->graphql)
      (println))

  (-> (graphql/query->graphql [{:search
                                ^{::graphql/union-query [:__typename]}
                                {:User  [:username]
                                 :Movie [:director]
                                 :Book  [:author]}}])

      (println ))

  (-> (graphql/query->graphql [{[:customer/customer-id "123"]
                                [:stormshield.customer/cpf]}])

      (println ))

  (-> (fp/query->ast [{:search
                       ^{::graphql/union-query [:__typename]}
                       {:User  [:username]
                        :Movie [:director]
                        :Book  [:author]}}]))

  (fp/query->ast [{:search
                   {:User  [:username]
                    :Movie [:director]
                    :Book  [:author]}}])
  (fp/ast->query (fp/query->ast '[{(call {:param "value" :item/value 42}) [:id :foo]}]))
  (graphql/query->graphql `[(call {:id ~(fp/tempid) :param "value"})]))
