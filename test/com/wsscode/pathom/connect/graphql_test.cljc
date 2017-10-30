(ns com.wsscode.pathom.connect.graphql-test
  (:require [clojure.test :refer :all]
            [com.wsscode.pathom.core :as p]
            [com.wsscode.pathom.connect :as p.connect]
            [com.wsscode.pathom.connect.graphql :as p.connect.graphql]
            [om.next :as om]
            [com.wsscode.pathom.graphql :as p.graphql]))

(def query-roots
  [{:name "banks" :args [] :type {:kind "LIST" :name nil :ofType {:kind "OBJECT" :name "Bank"}}}
   {:name "creditCardAccount"
    :args [{:name "customerId" :defaultValue nil :type {:kind "SCALAR" :name "ID"}}]
    :type {:kind "OBJECT" :name "CreditCardAccount" :ofType nil}}
   {:name "customer"
    :args [{:name "customerId" :defaultValue nil :type {:kind "SCALAR" :name "ID"}}]
    :type {:kind "OBJECT" :name "Customer" :ofType nil}}
   {:name "nubankInfo" :args [] :type {:kind "OBJECT" :name "NubankInfo" :ofType nil}}
   {:name "savingsAccount"
    :args [{:name "customerId" :defaultValue nil :type {:kind "SCALAR" :name "ID"}}]
    :type {:kind "OBJECT" :name "SavingsAccount" :ofType nil}}
   {:name "viewer" :args [] :type {:kind "OBJECT" :name "Customer" :ofType nil}}])

(def customer-type
  {:name       "Customer"
   :kind       "OBJECT"
   :interfaces []
   :fields     [{:name "id" :args [] :type {:kind "NON_NULL" :name nil :ofType {:kind "SCALAR" :name "ID"}}}
                {:name "cpf" :args [] :type {:kind "NON_NULL" :name nil :ofType {:kind "SCALAR" :name "String"}}}
                {:name "creditCardAccount" :args [] :type {:kind "OBJECT" :name "CreditCardAccount" :ofType nil}}
                {:name "name" :args [] :type {:kind "NON_NULL" :name nil :ofType {:kind "SCALAR" :name "String"}}}
                {:name "preferredName" :args [] :type {:kind "SCALAR" :name "String" :ofType nil}}
                {:name "savingsAccount" :args [] :type {:kind "OBJECT" :name "SavingsAccount" :ofType nil}}]})

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

(def types
  [{:name       "CreditCardBalances"
    :kind       "OBJECT"
    :interfaces []
    :fields     [{:name "available" :args [] :type {:kind "SCALAR" :name "Float" :ofType nil}}
                 {:name "due" :args [] :type {:kind "NON_NULL" :name nil :ofType {:kind "SCALAR" :name "Float"}}}
                 {:name "future" :args [] :type {:kind "NON_NULL" :name nil :ofType {:kind "SCALAR" :name "Float"}}}
                 {:name "open" :args [] :type {:kind "NON_NULL" :name nil :ofType {:kind "SCALAR" :name "Float"}}}
                 {:name "prepaid" :args [] :type {:kind "SCALAR" :name "Float" :ofType nil}}]}
   customer-type
   feed-event-interface
   onboarding-event-type])

(def schema
  {:__schema
   {:queryType {:name   "QueryRoot"
                :kind   "OBJECT"
                :fields query-roots}
    :types     types}})

(def prefix "service")

(deftest test-kebab-key
  (is (= (p.connect.graphql/kebab-key "FeedEvent") :feed-event)))

(deftest test-index-key
  (is (= (p.connect.graphql/index-key "FeedEvent") "feed-event")))

(deftest test-type-key
  (is (= (p.connect.graphql/type-key prefix "CreditCardBalances")
         :service.types/credit-card-balances)))

(deftest test-interface-key
  (is (= (p.connect.graphql/interface-key prefix "FeedEvent")
         :service.interfaces/feed-event)))

(deftest test-type->field-entry
  (is (= (p.connect.graphql/type->field-entry prefix {:kind "SCALAR" :name "Float" :ofType nil})
         {}))
  (is (= (p.connect.graphql/type->field-entry prefix {:kind "OBJECT" :name "CreditCardAccount" :ofType nil})
         {:service.types/credit-card-account {}}))
  (is (= (p.connect.graphql/type->field-entry prefix {:kind "NON_NULL" :name nil :ofType {:kind "SCALAR" :name "String"}})
         {}))
  (is (= (p.connect.graphql/type->field-entry prefix {:kind "NON_NULL" :name nil :ofType {:kind "OBJECT" :name "CreditCardAccount" :ofType nil}})
         {:service.types/credit-card-account {}}))
  (is (= (p.connect.graphql/type->field-entry prefix {:kind "LIST" :name nil :ofType {:kind "OBJECT" :name "Bank"}})
         {:service.types/bank {}})))

(deftest test-index-type
  (is (= (p.connect.graphql/index-type prefix customer-type)
         {#{:service.types/customer} #:service.customer{:cpf                 {}
                                                        :credit-card-account #:service.types{:credit-card-account {}}
                                                        :id                  {}
                                                        :name                {}
                                                        :preferred-name      {}
                                                        :savings-account     #:service.types{:savings-account {}}}}))

  (is (= (p.connect.graphql/index-type prefix feed-event-interface)
         {#{:service.interfaces/feed-event} #:service.feed-event{:detail    {}
                                                                 :id        {}
                                                                 :post-date {}
                                                                 :title     {}}}))

  (is (= (p.connect.graphql/index-type prefix onboarding-event-type)
         {#{:service.types/onboarding-event} {:service.interfaces/feed-event      {}
                                              :service.onboarding-event/detail    {}
                                              :service.onboarding-event/id        {}
                                              :service.onboarding-event/post-date {}
                                              :service.onboarding-event/title     {}}})))


(def supposed-resolver nil)

(def indexes
  `{::p.connect/index-resolvers                      #:com.wsscode.pathom.connect.graphql-test{supposed-resolver #:com.wsscode.pathom.connect{:cache? false}}
    :com.wsscode.pathom.connect/index-io             {#{:service.types/credit-card-balances} #:service.credit-card-balances{:available {}
                                                                                                                            :due       {}
                                                                                                                            :future    {}
                                                                                                                            :open      {}
                                                                                                                            :prepaid   {}}
                                                      #{:service.types/customer}             #:service.customer{:id                  {}
                                                                                                                :cpf                 {}
                                                                                                                :credit-card-account #:service.types{:credit-card-account {}}
                                                                                                                :name                {}
                                                                                                                :preferred-name      {}
                                                                                                                :savings-account     #:service.types{:savings-account {}}}
                                                      #{:service.interfaces/feed-event}      #:service.feed-event{:detail    {}
                                                                                                                  :id        {}
                                                                                                                  :post-date {}
                                                                                                                  :title     {}}
                                                      #{:service.types/onboarding-event}     {:service.onboarding-event/detail    {}
                                                                                              :service.onboarding-event/id        {}
                                                                                              :service.onboarding-event/post-date {}
                                                                                              :service.onboarding-event/title     {}
                                                                                              :service.interfaces/feed-event      {}}
                                                      #{}                                    #:service{:banks       #:service.types{:bank {}}
                                                                                                       :nubank-info #:service.types{:nubank-info {}}
                                                                                                       :viewer      #:service.types{:customer {}}}
                                                      #{:service.customer/id}                #:service.types{:credit-card-account {}
                                                                                                             :customer            {}
                                                                                                             :savings-account     {}}}
    ::p.connect/index-oir                            {:service.customer/savings-account     {#{:service.customer/id} #{com.wsscode.pathom.connect.graphql-test/supposed-resolver}}
                                                      :service/nubank-info                  {#{} #{com.wsscode.pathom.connect.graphql-test/supposed-resolver}}
                                                      :service/banks                        {#{} #{com.wsscode.pathom.connect.graphql-test/supposed-resolver}}
                                                      :service.customer/credit-card-account {#{:service.customer/id} #{com.wsscode.pathom.connect.graphql-test/supposed-resolver}}
                                                      :service.customer/cpf                 {#{:service.customer/id} #{com.wsscode.pathom.connect.graphql-test/supposed-resolver}}
                                                      :service/viewer                       {#{} #{com.wsscode.pathom.connect.graphql-test/supposed-resolver}}
                                                      :service.customer/name                {#{:service.customer/id} #{com.wsscode.pathom.connect.graphql-test/supposed-resolver}}
                                                      :service.customer/preferred-name      {#{:service.customer/id} #{com.wsscode.pathom.connect.graphql-test/supposed-resolver}}
                                                      :service.customer/id                  {#{:service.customer/id} #{com.wsscode.pathom.connect.graphql-test/supposed-resolver}}}
    :com.wsscode.pathom.connect/autocomplete-ignore  #{:service.types/onboarding-event
                                                       :service.interfaces/feed-event
                                                       :service.types/customer
                                                       :service.types/credit-card-balances}
    :com.wsscode.pathom.connect/idents               #{:service.customer/id}
    :com.wsscode.pathom.connect.graphql/field->ident #:service.customer{:id                  #:com.wsscode.pathom.connect.graphql{:entity-field :service.customer/id
                                                                                                                                  :ident-key    :customer/customer-id}
                                                                        :cpf                 #:com.wsscode.pathom.connect.graphql{:entity-field :service.customer/id
                                                                                                                                  :ident-key    :customer/customer-id}
                                                                        :credit-card-account #:com.wsscode.pathom.connect.graphql{:entity-field :service.customer/id
                                                                                                                                  :ident-key    :customer/customer-id}
                                                                        :name                #:com.wsscode.pathom.connect.graphql{:entity-field :service.customer/id
                                                                                                                                  :ident-key    :customer/customer-id}
                                                                        :preferred-name      #:com.wsscode.pathom.connect.graphql{:entity-field :service.customer/id
                                                                                                                                  :ident-key    :customer/customer-id}
                                                                        :savings-account     #:com.wsscode.pathom.connect.graphql{:entity-field :service.customer/id
                                                                                                                                  :ident-key    :customer/customer-id}}})

(deftest test-index-schema
  (is (= (p.connect.graphql/index-schema #::p.connect.graphql{:prefix    prefix :schema schema
                                                              :ident-map {"customerId" ["Customer" "id"]}
                                                              :resolver  `supposed-resolver})
         indexes)))

(deftest test-alias-for-line
  (is (= (p.connect.graphql/alias-for-line "query { \ncustomer(customerId: \"123\") {\n}}" 2)
         nil))

  (is (= (p.connect.graphql/alias-for-line "query { \n_customer_customer_id_123: customer(customerId: \"123\") {\n}}" 2)
         "_customer_customer_id_123"))

  (is (= (p.connect.graphql/alias-for-line "query { \n_customer_customer_id_123: customer(customerId: \"123\") {\n}}" 10)
         nil)))

(deftest test-parse-item
  (is (= (p.connect.graphql/parser-item {::p/entity {}} [])
         {}))
  (is (= (p.connect.graphql/parser-item {::p/entity {:itemValue 42}}
           [:ns/item-value])
         {:ns/item-value 42}))
  (is (= (p.connect.graphql/parser-item {::p/entity                 {:didWrong nil}
                                         ::p.connect.graphql/errors (p.connect.graphql/index-graphql-errors
                                                                      [{:message    "Forbidden"
                                                                        :query-path [:didWrong]}])}
           [{:did-wrong [:anything]}])
         {:did-wrong ::p.connect.graphql/error}))
  (testing "capture error"
    (let [errors* (atom {})]
      (is (= (p.connect.graphql/parser-item {::p/entity                        {:_customer_customer_id_123 {:creditCardAccount nil}}
                                             ::p/errors*                       errors*
                                             ::p.connect.graphql/base-path     [[:service.customer/id "123"]]
                                             ::p.connect.graphql/graphql-query "query \n{_customer_customer_id_123: customer(customerId: \"123\") \n{}}"
                                             ::p.connect.graphql/errors        (p.connect.graphql/index-graphql-errors [{:locations  [{:column 123 :line 2}]
                                                                                                                         :message    "Forbidden"
                                                                                                                         :query-path [:customer :creditCardAccount]
                                                                                                                         :type       :forbidden}])}
               [{[:customer/customer-id "123"] [{:service.customer/credit-card-account [:service.credit-card-balances/available]}]}])
             {[:customer/customer-id "123"] {:service.customer/credit-card-account ::p.connect.graphql/error}}))
      (is (= @errors*
             {[[:service.customer/id "123"] :service.customer/credit-card-account] {:locations  [{:column 123 :line 2}]
                                                                                     :message    "Forbidden"
                                                                                     :query-path [:customer :creditCardAccount]
                                                                                     :type       :forbidden}})))))

(deftest test-query->graphql
  (is (= (p.connect.graphql/query->graphql [{:credit-card [:number]}])
         "query {\n  creditCard {\n    number\n  }\n}\n")))

(defn q [query]
  (-> (om/query->ast [query]) :children first))

(deftest test-ast->graphql
  (is (= (p.connect.graphql/ast->graphql {:ast                (q :service/banks)
                                          ::p.connect/indexes indexes} {})
         [:service/banks]))
  (is (= (p.connect.graphql/ast->graphql {:ast                (q {:service/banks [:service.bank/name]})
                                          ::p.connect/indexes indexes} {})
         [{:service/banks [:service.bank/name]}]))
  (is (= (p.connect.graphql/ast->graphql {:ast                (q :service.customer/cpf)
                                          ::p.connect/indexes indexes}
           {:service.customer/id "123"})
         [{[:customer/customer-id "123"] [:service.customer/cpf]}])))

(deftest test-build-query
  (is (= (p.connect.graphql/build-query {:ast                       (q :service.customer/id)
                                         ::p/parent-query           [:service.customer/id
                                                                     :service.customer/cpf
                                                                     :service/banks
                                                                     {[:service.customer/id "123"] [:service.customer/name]}
                                                                     :service.customer/name
                                                                     :other/thing]
                                         ::p.connect.graphql/prefix prefix
                                         ::p.connect/indexes        indexes}
           {:service.customer/id "123"})
         [{[:customer/customer-id "123"] [:service.customer/cpf :service.customer/name]}
          :service/banks])))

(deftest test-pull-idents
  (is (= (p.connect.graphql/pull-idents {:service/banks                [{:service.bank/name "Dino"}]
                                         [:customer/customer-id "123"] {:service.customer/name "Missy"}})
         {:service/banks         [{:service.bank/name "Dino"}]
          :service.customer/name "Missy"})))

(comment
  (q :a)
  (p.connect.graphql/ast->graphql {:ast                (q :service.customer/cpf)
                                   ::p.connect/indexes indexes}
    {:service.customer/id "123"}))
