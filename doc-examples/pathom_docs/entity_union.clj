(ns pathom-docs.entity-union
  (:require [com.wsscode.pathom.core :as p]))

(def search-results
  [{:type :user
    :user/name "Jack Sparrow"}
   {:type :movie
    :movie/title "Ted"
    :movie/year 2012}
   {:type :book
    :book/title "The Joy of Clojure"}])

(def parser
  (p/parser {::p/plugins [(p/env-plugin {::p/reader [p/map-reader]})]}))

(parser {::p/entity {:search search-results}
         ; here we set where pathom should look on the entity to determine the union path
         ::p/union-path :type}
        [{:search {:user [:user/name]
                   :movie [:movie/title]
                   :book [:book/title]}}])
