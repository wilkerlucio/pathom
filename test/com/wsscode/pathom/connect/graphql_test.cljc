(ns com.wsscode.pathom.connect.graphql-test
  (:require [clojure.test :refer :all]
            [com.wsscode.pathom.connect.graphql :as p.connect.graphql]))

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

(deftest test-index-schema
  (is (= (p.connect.graphql/index-schema #::p.connect.graphql{:prefix    prefix :schema schema
                                                              :ident-map {"customerId" ["Customer" "id"]}
                                                              :resolver  `supposed-resolver})
         `#:com.wsscode.pathom.connect{:index-io            {#{:service.types/credit-card-balances} #:service.credit-card-balances{:available {}
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
                                                             :service.customer/id                   #:service.types{:credit-card-account {}
                                                                                                                    :customer            {}
                                                                                                                    :savings-account     {}}}
                                       :index-oif           #:service{:banks               {#{} #{supposed-resolver}}
                                                                      :credit-card-account {#{:service.customer/id} #{supposed-resolver}}
                                                                      :customer            {#{:service.customer/id} #{supposed-resolver}}
                                                                      :nubank-info         {#{} #{supposed-resolver}}
                                                                      :savings-account     {#{:service.customer/id} #{supposed-resolver}}
                                                                      :viewer              {#{} #{supposed-resolver}}}
                                       :autocomplete-ignore #{:service.types/onboarding-event
                                                              :service.interfaces/feed-event
                                                              :service.types/customer
                                                              :service.types/credit-card-balances}})))
