(ns com.wsscode.pathom.graphql-test
  (:require
    [clojure.test :refer :all]
    [com.wsscode.pathom.graphql :as graphql]
    [clojure.string :as str]
    [om.next :as om]))

(deftest test-query->graphql
  (are [query out] (= (-> (graphql/query->graphql query)
                          (str/replace #"\s+" " ")
                          (str/trim))
                      out)
    [] "query { }"
    [:property] "query { property }"
    [:qualified/property] "query { property }"
    '[(:parameterized {:foo "bar"})] "query { parameterized(foo: \"bar\") }"

    [{[:Item/by-id 123] [:id :name]}]
    "query { _Item_by_id_123: Item(id: 123) { id name } }"

    [{[:service.Item/by-id 123] [:id :name]}]
    "query { _service_Item_by_id_123: Item(id: 123) { id name } }"

    [{[:item/by-name-and-owner ["NAM" "OWN"]] [:id :name]}]
    "query { _item_by_name_and_owner_NAM_OWN: item(name: \"NAM\", owner: \"OWN\") { id name } }"

    [{[:Item/by-slug "some-post"] [:id :slug]}]
    "query { _Item_by_slug_some_post: Item(slug: \"some-post\") { id slug } }"

    [{[:Item/by-id "123,45"] [:id :name]}]
    "query { _Item_by_id_123_45: Item(id: \"123,45\") { id name } }"

    [{[:Item/by-id 123] [:id :name]}
     {[:Item/by-id 321] [:id :name]}]
    "query { _Item_by_id_123: Item(id: 123) { id name } _Item_by_id_321: Item(id: 321) { id name } }"

    '[({[:Item/by-id 123] [:id :name]} {:name "bla"})]
    "query { _Item_by_id_123: Item(id: 123, name: \"bla\") { id name } }"

    [{:all-items [:id :name]}]
    "query { all-items { id name } }"

    '[({:nodes [:id :user/name]} {:last 10})]
    "query { nodes(last: 10) { id name } }"

    [{:search
      {:User  [:username]
       :Movie [:director]
       :Book  [:author]}}]
    "query { search { __typename ... on User { username } ... on Movie { director } ... on Book { author } } }"

    '[(call {:param "value"})]
    "mutation { call(param: \"value\") { } }"

    '[(call {:enum HEY})]
    "mutation { call(enum: HEY) { } }"

    `[(~'call {:id ~(om/tempid) :param "value"})]
    "mutation { call(param: \"value\") { id } }"

    `[(~'call {:id ~(om/tempid) :param "value" ::graphql/mutate-join []})]
    "mutation { call(param: \"value\") { id } }"

    ; May work after https://github.com/omcljs/om/issues/885
    ;'[{(call {:param "value" :item/value 42}) [:id :foo]}]
    ;"mutation { call(param: \"value\", value: 42) { id foo } }"

    '[(call {:param {:nested "value"}})]
    "mutation { call(param: {nested: \"value\"}) { } }"

    '[(call {:param "value" :item/value 42 ::graphql/mutate-join [:id :foo]})]
    "mutation { call(param: \"value\", value: 42) { id foo } }"))

(comment
  (-> '[{(call {:param "value" :item/value 42}) [:id :foo]}]
      (graphql/query->graphql)
      #_(str/replace #"\s+" " ")
      #_(str/trim))

  (-> (graphql/query->graphql [{:search
                                ^{::graphql/union-query [:__typename]}
                                {:User  [:username]
                                 :Movie [:director]
                                 :Book  [:author]}}])

      (println ))

  (-> (om/query->ast [{:search
                       ^{::graphql/union-query [:__typename]}
                       {:User  [:username]
                        :Movie [:director]
                        :Book  [:author]}}]))

  (om/query->ast [{:search
                   {:User  [:username]
                    :Movie [:director]
                    :Book  [:author]}}])
  (om/ast->query (om/query->ast '[{(call {:param "value" :item/value 42}) [:id :foo]}]))
  (graphql/query->graphql `[(call {:id ~(om/tempid) :param "value"})]))
