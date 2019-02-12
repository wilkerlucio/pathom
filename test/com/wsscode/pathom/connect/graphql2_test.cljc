(ns com.wsscode.pathom.connect.graphql2-test
  (:require [clojure.test :refer [is are testing]]
            [nubank.workspaces.core :refer [deftest]]
            [com.wsscode.pathom.core :as p]
            [com.wsscode.pathom.connect :as pc]
            [com.wsscode.pathom.connect.graphql2 :as pcg]
            [com.wsscode.pathom.graphql :as pg]))

(def query-root-type
  (pcg/normalize-schema
    {:name   "QueryRoot"
     :fields [{:name "banks" :args [] :type {:kind "LIST" :name nil :ofType {:kind "OBJECT" :name "Bank"}}}
              {:name "creditCardAccount"
               :args [{:name "customerId" :defaultValue nil :type {:kind "SCALAR" :name "ID"}}]
               :type {:kind "OBJECT" :name "CreditCardAccount" :ofType nil}}
              {:name "customer"
               :args [{:name "customerId" :defaultValue nil :type {:kind "SCALAR" :name "ID"}}]
               :type {:kind :OBJECT :name "Customer" :ofType nil}}
              {:name "repository"
               :args [{:name "owner" :defaultValue nil :type {:kind "SCALAR" :name "String"}}
                      {:name "name" :defaultValue nil :type {:kind "SCALAR" :name "String"}}]
               :type {:kind "OBJECT" :name "Repository" :ofType nil}}
              {:name "savingsAccount"
               :args [{:name "customerId" :defaultValue nil :type {:kind "SCALAR" :name "ID"}}]
               :type {:kind "OBJECT" :name "SavingsAccount" :ofType nil}}
              {:name "viewer" :args [] :type {:kind "OBJECT" :name "Customer" :ofType nil}}]}))

(def customer-type
  {:name       "Customer"
   :kind       "OBJECT"
   :interfaces []
   :fields     [{:name "id" :args [] :type {:kind "NON_NULL" :name nil :ofType {:kind "SCALAR" :name "ID"}}}
                {:name "cpf" :args [] :type {:kind "NON_NULL" :name nil :ofType {:kind "SCALAR" :name "String"}}}
                {:name "creditCardAccount" :args [] :type {:kind "OBJECT" :name "CreditCardAccount" :ofType nil}}
                {:name "feed" :args [] :type {:kind "LIST" :name nil :ofType {:kind "NON_NULL" :name nil :ofType {:kind "INTERFACE" :name "FeedEvent"}}}}
                {:name "name" :args [] :type {:kind "NON_NULL" :name nil :ofType {:kind "SCALAR" :name "String"}}}
                {:name "preferredName" :args [] :type {:kind "SCALAR" :name "String" :ofType nil}}
                {:name "savingsAccount" :args [] :type {:kind "OBJECT" :name "SavingsAccount" :ofType nil}}]})

(def repository-type
  {:name       "Repository"
   :kind       "OBJECT"
   :interfaces []
   :fields     [{:name "id" :args [] :type {:kind "NON_NULL" :name nil :ofType {:kind "SCALAR" :name "ID"}}}
                {:name "name" :args [] :type {:kind "NON_NULL" :name nil :ofType {:kind "SCALAR" :name "String"}}}]})

(def feed-event-interface
  {:name       "FeedEvent"
   :kind       "INTERFACE"
   :interfaces []
   :fields     [{:name "detail" :args [] :type {:kind "NON_NULL" :name nil :ofType {:kind "SCALAR" :name "String"}}}
                {:name "id" :args [] :type {:kind "NON_NULL" :name nil :ofType {:kind "SCALAR" :name "ID"}}}
                {:name "postDate" :args [] :type {:kind "NON_NULL" :name nil :ofType {:kind "SCALAR" :name "Date"}}}
                {:name "title" :args [] :type {:kind "NON_NULL" :name nil :ofType {:kind "SCALAR" :name "String"}}}]})

(def onboarding-event-type
  {:name       "OnboardingEvent"
   :kind       "OBJECT"
   :interfaces [{:name "FeedEvent" :kind "INTERFACE"}]
   :fields     [{:name "detail" :args [] :type {:kind "NON_NULL" :name nil :ofType {:kind "SCALAR" :name "String"}}}
                {:name "id" :args [] :type {:kind "NON_NULL" :name nil :ofType {:kind "SCALAR" :name "ID"}}}
                {:name "postDate" :args [] :type {:kind "NON_NULL" :name nil :ofType {:kind "SCALAR" :name "Date"}}}
                {:name "title" :args [] :type {:kind "NON_NULL" :name nil :ofType {:kind "SCALAR" :name "String"}}}]})

(def mutation-type
  {:name   "Mutation"
   :fields [{:name "addStar"}
            {:name "removeStar"}
            {:name "requestReviews"}]})

(def types
  [{:name       "CreditCardBalances"
    :kind       "OBJECT"
    :interfaces []
    :fields     [{:name "available" :args [] :type {:kind "SCALAR" :name "Float" :ofType nil}}
                 {:name "due" :args [] :type {:kind "NON_NULL" :name nil :ofType {:kind "SCALAR" :name "Float"}}}
                 {:name "future" :args [] :type {:kind "NON_NULL" :name nil :ofType {:kind "SCALAR" :name "Float"}}}
                 {:name "open" :args [] :type {:kind "NON_NULL" :name nil :ofType {:kind "SCALAR" :name "Float"}}}
                 {:name "prepaid" :args [] :type {:kind "SCALAR" :name "Float" :ofType nil}}]}
   query-root-type
   customer-type
   repository-type
   feed-event-interface
   onboarding-event-type
   mutation-type])

(def schema
  {:__schema
   {:queryType    {:name "QueryRoot"}
    :mutationType {:name "Mutation"}
    :types        types}})

(def prefix "service")
(def env {::pcg/prefix "service" ::pcg/mung pg/kebab-case})

(deftest test-type-key
  (is (= (pcg/type-key env "CreditCardBalances")
         :service.types/credit-card-balances)))

(deftest test-interface-key
  (is (= (pcg/interface-key env "FeedEvent")
         :service.interfaces/feed-event)))

(deftest test-type->field-entry
  (is (= (pcg/type->field-entry env {:kind "SCALAR" :name "Float" :ofType nil})
         {}))
  (is (= (pcg/type->field-entry env {:kind "OBJECT" :name "CreditCardAccount" :ofType nil})
         {:service.types/credit-card-account {}}))
  (is (= (pcg/type->field-entry env {:kind "INTERFACE" :name "FeedEvent" :ofType nil})
         {:service.interfaces/feed-event {}}))
  (is (= (pcg/type->field-entry env {:kind "NON_NULL" :name nil :ofType {:kind "SCALAR" :name "String"}})
         {}))
  (is (= (pcg/type->field-entry env {:kind "NON_NULL" :name nil :ofType {:kind "OBJECT" :name "CreditCardAccount" :ofType nil}})
         {:service.types/credit-card-account {}}))
  (is (= (pcg/type->field-entry env {:kind "LIST" :name nil :ofType {:kind "OBJECT" :name "Bank"}})
         {:service.types/bank {}})))

(deftest test-index-type
  (is (= (pcg/index-type env customer-type)
         {#{:service.types/customer} #:service.customer{:cpf                 {}
                                                        :credit-card-account #:service.types{:credit-card-account {}}
                                                        :id                  {}
                                                        :feed                #:service.interfaces{:feed-event {}}
                                                        :name                {}
                                                        :preferred-name      {}
                                                        :savings-account     #:service.types{:savings-account {}}}}))

  (is (= (pcg/index-type env feed-event-interface)
         {#{:service.interfaces/feed-event} #:service.feed-event{:detail    {}
                                                                 :id        {}
                                                                 :post-date {}
                                                                 :title     {}}}))

  (is (= (pcg/index-type env onboarding-event-type)
         {#{:service.types/onboarding-event} {:service.interfaces/feed-event      {}
                                              :service.onboarding-event/detail    {}
                                              :service.onboarding-event/id        {}
                                              :service.onboarding-event/post-date {}
                                              :service.onboarding-event/title     {}}})))


(def supposed-resolver nil)

(def indexes
  `{::pc/index-resolvers     {com.wsscode.pathom.connect.graphql2-test/supposed-resolver
                              {::pc/sym       com.wsscode.pathom.connect.graphql2-test/supposed-resolver
                               ::pc/cache?    false
                               ::pcg/graphql? true}}
    ::pc/index-io            {#{:service.types/credit-card-balances}
                              {:service.credit-card-balances/available {}
                               :service.credit-card-balances/due       {}
                               :service.credit-card-balances/future    {}
                               :service.credit-card-balances/open      {}
                               :service.credit-card-balances/prepaid   {}}
                              #{:service.types/customer}
                              {:service.customer/id             {}
                               :service.customer/cpf            {}
                               :service.customer/credit-card-account
                                                                {:service.types/credit-card-account {}}
                               :service.customer/feed           {:service.interfaces/feed-event {}}
                               :service.customer/name           {}
                               :service.customer/preferred-name {}
                               :service.customer/savings-account
                                                                {:service.types/savings-account {}}}
                              #{:service.interfaces/feed-event}
                              {:service.feed-event/detail    {}
                               :service.feed-event/id        {}
                               :service.feed-event/post-date {}
                               :service.feed-event/title     {}}
                              #{:service.types/onboarding-event}
                              {:service.onboarding-event/detail    {}
                               :service.onboarding-event/id        {}
                               :service.onboarding-event/post-date {}
                               :service.onboarding-event/title     {}
                               :service.interfaces/feed-event      {}}
                              #{:service.types/repository}
                              {:service.repository/id   {}
                               :service.repository/name {}}
                              #{}
                              {:service/banks               {:service.types/bank {}},
                               :service/credit-card-account {:service.types/credit-card-account {}},
                               :service/customer            {:service.types/customer {}},
                               :service/repository          {:service.types/repository {}},
                               :service/savings-account     {:service.types/savings-account {}},
                               :service/viewer              {:service.types/customer {}}}
                              #{:service.customer/id}
                              {:service.types/credit-card-account {}
                               :service.types/customer            {}
                               :service.types/savings-account     {}}
                              #{:service.customer/name :service.repository/name}
                              {:service.types/repository {}}}
    ::pc/index-oir           {:service.customer/cpf                 {#{:service.customer/id} #{com.wsscode.pathom.connect.graphql2-test/supposed-resolver}}
                              :service.customer/credit-card-account {#{:service.customer/id} #{com.wsscode.pathom.connect.graphql2-test/supposed-resolver}}
                              :service.customer/feed                {#{:service.customer/id} #{com.wsscode.pathom.connect.graphql2-test/supposed-resolver}}
                              :service.customer/id                  {#{:service.customer/id} #{com.wsscode.pathom.connect.graphql2-test/supposed-resolver}}
                              :service.customer/name                {#{:service.customer/id} #{com.wsscode.pathom.connect.graphql2-test/supposed-resolver}}
                              :service.customer/preferred-name      {#{:service.customer/id} #{com.wsscode.pathom.connect.graphql2-test/supposed-resolver}}
                              :service.customer/savings-account     {#{:service.customer/id} #{com.wsscode.pathom.connect.graphql2-test/supposed-resolver}}
                              :service.repository/id                {#{:service.customer/name :service.repository/name} #{com.wsscode.pathom.connect.graphql2-test/supposed-resolver}}
                              :service.repository/name              {#{:service.customer/name :service.repository/name} #{com.wsscode.pathom.connect.graphql2-test/supposed-resolver}}
                              :service/banks                        {#{} #{com.wsscode.pathom.connect.graphql2-test/supposed-resolver}}
                              :service/credit-card-account          {#{} #{com.wsscode.pathom.connect.graphql2-test/supposed-resolver}}
                              :service/customer                     {#{} #{com.wsscode.pathom.connect.graphql2-test/supposed-resolver}}
                              :service/repository                   {#{} #{com.wsscode.pathom.connect.graphql2-test/supposed-resolver}}
                              :service/savings-account              {#{} #{com.wsscode.pathom.connect.graphql2-test/supposed-resolver}}
                              :service/viewer                       {#{} #{com.wsscode.pathom.connect.graphql2-test/supposed-resolver}}}
    ::pc/autocomplete-ignore #{:service.types/onboarding-event :service.interfaces/feed-event :service.types/repository
                               :service.types/customer :service.types/credit-card-balances}
    ::pc/idents              #{:service.customer/id}
    ::pc/index-mutations     {com.wsscode.pathom.connect.graphql.service-mutations/service #:com.wsscode.pathom.connect{:sym com.wsscode.pathom.connect.graphql.service-mutations/service}
                              service/add-star                                             {::pc/sym com.wsscode.pathom.connect.graphql.service-mutations/service}
                              service/remove-star                                          {::pc/sym com.wsscode.pathom.connect.graphql.service-mutations/service}
                              service/request-reviews                                      {::pc/sym com.wsscode.pathom.connect.graphql.service-mutations/service}}
    ::pcg/field->ident       {:service.customer/id
                              {::pcg/entity-field :service.customer/id
                               ::pcg/ident-key    :customer/customer-id}
                              :service.customer/cpf
                              {::pcg/entity-field :service.customer/id
                               ::pcg/ident-key    :customer/customer-id}
                              :service.customer/credit-card-account
                              {::pcg/entity-field :service.customer/id
                               ::pcg/ident-key    :customer/customer-id}
                              :service.customer/feed
                              {::pcg/entity-field :service.customer/id
                               ::pcg/ident-key    :customer/customer-id}
                              :service.customer/name
                              {::pcg/entity-field :service.customer/id
                               ::pcg/ident-key    :customer/customer-id}
                              :service.customer/preferred-name
                              {::pcg/entity-field :service.customer/id
                               ::pcg/ident-key    :customer/customer-id}
                              :service.customer/savings-account
                              {::pcg/entity-field :service.customer/id
                               ::pcg/ident-key    :customer/customer-id}
                              :service.repository/id
                              {::pcg/entity-field [:service.customer/name :service.repository/name]
                               ::pcg/ident-key    :repository/owner-and-name}
                              :service.repository/name
                              {::pcg/entity-field [:service.customer/name :service.repository/name]
                               ::pcg/ident-key    :repository/owner-and-name}}})

(deftest test-index-schema
  (is (= (-> (pcg/index-schema {::pcg/prefix    prefix ::pcg/schema schema
                                ::pcg/mung      pg/kebab-case
                                ::pcg/ident-map {"customer"          {"customerId" ["Customer" "id"]}
                                                 "creditCardAccount" {"customerId" ["Customer" "id"]}
                                                 "savingsAccount"    {"customerId" ["Customer" "id"]}
                                                 "repository"        {"owner" ["Customer" "name"]
                                                                      "name"  ["Repository" "name"]}}
                                ::pcg/resolver  `supposed-resolver})
             (update-in [::pc/index-resolvers `supposed-resolver] dissoc ::pc/compute-output ::pc/resolve)
             (update-in [::pc/index-mutations 'com.wsscode.pathom.connect.graphql.service-mutations/service] dissoc ::pc/mutate))
         indexes)))

(deftest test-alias-for-line
  (is (= (pcg/alias-for-line "query { \ncustomer(customerId: \"123\") {\n}}" 2)
         nil))

  (is (= (pcg/alias-for-line "query { \n_customer_customer_id_123: customer(customerId: \"123\") {\n}}" 2)
         "_customer_customer_id_123"))

  (is (= (pcg/alias-for-line "query { \n_customer_customer_id_123: customer(customerId: \"123\") {\n}}" 10)
         nil)))

(comment
  (pcg/parser-item {::p/entity               {:itemValue {:x 1 :y 2}}
                    ::p/placeholder-prefixes #{">"}}
    [{:itemValue [:x {:>/sub [:y]}]}]))

(deftest test-parse-item
  (is (= (pcg/parser-item {::p/entity {}} [])
         {}))
  (is (= (pcg/parser-item {::p/entity {:itemValue 42}
                           ::pcg/demung pg/camel-case}
           [:ns/item-value])
         {:ns/item-value 42}))
  (is (= (pcg/parser-item {::p/entity               {:itemValue {:x 1 :y 2}}
                           ::p/placeholder-prefixes #{">"}}
           [{:itemValue [:x {:>/sub [:y]}]}])
         {:itemValue {:x 1 :>/sub {:y 2}}}))
  (is (= (pcg/parser-item {::p/entity   {:didWrong nil}
                           ::pcg/demung pg/camel-case
                           ::pcg/errors (pcg/index-graphql-errors
                                          [{:message "Forbidden"
                                            :path    ["didWrong"]}])}
           [{:did-wrong [:anything]}])
         {:did-wrong ::pcg/error}))
  (testing "capture error"
    (let [errors* (atom {})]
      (is (= (pcg/parser-item {::p/entity          {:_customer_customer_id_123 {:creditCardAccount nil}}
                               ::p/errors*         errors*
                               ::pcg/demung pg/camel-case
                               ::pcg/base-path     [[:service.customer/id "123"]]
                               ::pcg/graphql-query "query \n{_customer_customer_id_123: customer(customerId: \"123\") \n{}}"
                               ::pcg/errors        (pcg/index-graphql-errors [{:locations [{:column 123 :line 2}]
                                                                               :message   "Forbidden"
                                                                               :path      ["customer" "creditCardAccount"]
                                                                               :type      "forbidden"}])}
               [{[:customer/customer-id "123"] [{:service.customer/credit-card-account [:service.credit-card-balances/available]}]}])
             {[:customer/customer-id "123"] {:service.customer/credit-card-account ::pcg/error}}))
      (is (= @errors*
             {[[:service.customer/id "123"] :service.customer/credit-card-account] {:locations [{:column 123 :line 2}]
                                                                                    :message   "Forbidden"
                                                                                    :path      ["customer" "creditCardAccount"]
                                                                                    :type      "forbidden"}})))))

(deftest test-query->graphql
  (is (= (pcg/query->graphql [{:credit-card [:number]}] {::pcg/demung pg/camel-case})
         "query {\n  creditCard {\n    number\n  }\n}\n")))

(defn q [query]
  (p/query->ast1 [query]))

(deftest test-ast->graphql
  (is (= (pcg/ast->graphql {:ast         (q :service/banks)
                            ::pc/indexes indexes} {})
         [:service/banks]))
  (is (= (pcg/ast->graphql {:ast         (q {:service/banks [:service.bank/name]})
                            ::pc/indexes indexes} {})
         [{:service/banks [:service.bank/name]}]))
  (is (= (pcg/ast->graphql {:ast         (q :service.customer/cpf)
                            ::pc/indexes indexes}
           {:service.customer/id "123"})
         [{[:customer/customer-id "123"] [:service.customer/cpf]}])))

(defn query-env [query-attribute entity]
  {:ast                     (q query-attribute)
   ::p/entity               entity
   ::p/placeholder-prefixes #{">"}
   ::p/parent-query         [query-attribute]
   ::pcg/prefix             prefix
   ::pc/indexes             indexes})

(deftest test-build-query
  (testing "build global attribute"
    (is (= (pcg/build-query (query-env :service/banks
                              {:service.customer/id "123"}))
           [:service/banks])))

  (testing "remove pathom params"
    (is (= (pcg/build-query (query-env '(:service/banks {:pathom/as :banks})
                              {:service.customer/id "123"}))
           ['(:service/banks)])))

  (testing "ident join"
    (is (= (pcg/build-query (query-env :service.customer/cpf
                              {:service.customer/id "123"}))
           [{[:customer/customer-id "123"] [:service.customer/cpf]}])))

  (testing "ident join on multi param input"
    (is (= (pcg/build-query (query-env :service.repository/id
                              {:service.customer/name   "customer"
                               :service.repository/name "repository"}))
           [{[:repository/owner-and-name ["customer" "repository"]] [:service.repository/id]}])))

  (testing "ignores ident queries"
    (is (= (pcg/build-query (query-env {[:service.customer/id "123"] [:service.customer/name]}
                              {:service.customer/id "123"}))
           [])))

  (testing "merge sibling queries"
    (is (= (pcg/build-query (assoc (query-env :service.customer/id {:service.customer/id "123"})
                              ::p/parent-query [:service.customer/id
                                                :service.customer/cpf
                                                :service/banks
                                                :service.customer/name
                                                :other/thing]))
           [{[:customer/customer-id "123"] [:service.customer/cpf :service.customer/name]}
            :service/banks])))

  (testing "placeholder queries"
    (is (= (pcg/build-query (assoc (query-env :service.customer/id {:service.customer/id "123"})
                              ::p/parent-query [:service.customer/id
                                                {:>/thing [:service.customer/cpf]}
                                                :service/banks
                                                :service.customer/name
                                                :other/thing]))
           [:service/banks
            {[:customer/customer-id "123"] [:service.customer/name :service.customer/cpf]}]))))

(deftest test-pull-idents
  (is (= (pcg/pull-idents {:service/banks                [{:service.bank/name "Dino"}]
                           [:customer/customer-id "123"] {:service.customer/name "Missy"}})
         {:service/banks         [{:service.bank/name "Dino"}]
          :service.customer/name "Missy"})))

