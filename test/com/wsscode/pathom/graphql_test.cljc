(ns com.wsscode.pathom.graphql-test
  (:require
    [clojure.test :refer :all]
    [com.wsscode.pathom.graphql :as graphql]
    [clojure.string :as str]))

(deftest test-query->graphql
  (are [query out] (= (-> (graphql/query->graphql query)
                          (str/replace #"\s+" " ")
                          (str/trim))
                      out)
    [] "{ }"
    [:property] "{ property }"
    [:qualified/property] "{ property }"

    [{:all-items [:id :name]}]
    "{ all-items { id name } }"

    '[({:nodes [:id :user/name]} {:last 10})]
    "{ nodes(last: 10) { id name } }"

    '[(call {:param "value"})]
    "mutation { call(param: \"value\") { id } }"

    '[{(call {:param "value" :item/value 42}) [:id :foo]}]
    "mutation { call(param: \"value\", value: 42) { id foo } }"

    '[(call {:param {:nested "value"}})]
    "mutation { call(param: {nested: \"value\"}) { id } }"))

(comment
  (graphql/query->graphql '[(call {:param {:nested "value"}})]))
