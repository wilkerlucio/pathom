(ns com.wsscode.pathom.connect-test
  (:require [clojure.test :refer :all]
            [clojure.spec.alpha :as s]
            [com.wsscode.pathom.connect :as p.connect]
            [com.wsscode.pathom.core :as p]))

(def users
  {1 {:user/id 1 :user/name "Mel" :user/age 26 :user/login "meel"}})

(def users-login
  {"meel" (get users 1)})

(def user-addresses
  {1 "Live here somewhere"})

(defn user-by-id [_ {:keys [user/id] :as input}]
  (or (get users id) (throw (ex-info "user not found" {:input input}))))

(s/fdef user-by-id
  :args (s/cat :env ::p/env :user (s/keys :req [:user/id]))
  :ret (s/keys :req [:user/id :user/name :user/age :user/login]))

(defn user-by-login [_ {:keys [user/login]}]
  (or (get users-login login) (throw (ex-info "user not found" {}))))

(s/fdef user-by-login
  :args (s/cat :env ::p/env :user (s/keys :req [:user/login]))
  :ret (s/keys :req [:user/id :user/name :user/age :user/login]))

(defn user-address [_ {:keys [user/id]}]
  {:user/address (get user-addresses id)})

(s/fdef user-address
  :args (s/cat :env ::p/env :user (s/keys :req [:user/id]))
  :ret (s/keys :req [:user/address] :gen #(s/gen #{{:user/address "bla"}})))

(defn user-login-from-email [_ {:user/keys [email]}]
  (if (= email "a@b.c")
    {:user/login "meel"}))

(s/fdef user-login-from-email
  :args (s/cat :env ::env :user (s/keys :req [:user/email]))
  :ret (s/keys :req [:user/login]))

(defn user-network [_ {:user/keys [id]}]
  (if (= 1 id)
    {:user/network {:network/id "twitter" :network/name "mell"}}))

(s/fdef user-network
  :args (s/cat :env ::env :user (s/keys :req [:user/id]))
  :ret (s/keys :req [:user/network]))

(defn global-attr [_ _]
  {:color "purple"})

(def indexes
  (-> {}
      (p.connect/add `user-by-id)
      (p.connect/add `user-by-login)
      (p.connect/add `user-login-from-email)
      (p.connect/add `user-address)
      (p.connect/add `user-network
        #::p.connect{:input  #{:user/id}
                     :output [{:user/network [:network/id :network/name]}]})
      (p.connect/add `global-attr
        #::p.connect{:output [:color]})))

(def parser
  (p/parser {::p/plugins
             [(p/env-plugin {::p/reader          [{:cache (comp deref ::p/request-cache)}
                                                  p/map-reader
                                                  p.connect/reader
                                                  p.connect/ident-reader]
                             ::p.connect/indexes indexes})
              p/request-cache-plugin]}))

(deftest test-resolver->in-out
  (is (= (p.connect/resolver->in-out `user-by-id)
         #::p.connect{:input #{:user/id} :output [:user/name :user/id :user/login :user/age]}))

  (is (= (p.connect/resolver->in-out `user-by-id)
         #::p.connect{:input #{:user/id} :output [:user/name :user/id :user/login :user/age]}))

  (is (= (p.connect/resolver->in-out 'invalid)
         #::p.connect{:input #{} :output []})))

(deftest test-merge-io
  (is (= (p.connect/merge-io {:user/name :user/name}
                             {:user/name :user/name})
         {:user/name :user/name}))
  (is (= (p.connect/merge-io {:user/name :user/name}
                             {:user/email :user/email})
         {:user/name  :user/name
          :user/email :user/email}))
  (is (= (p.connect/merge-io {:user/address :user/address}
                             {:user/address {:address/name :address/name}})
         {:user/address {:address/name :address/name}}))
  (is (= (p.connect/merge-io {:user/address {:address/street :address/street}}
                             {:user/address {:address/name :address/name}})
         {:user/address {:address/name   :address/name
                         :address/street :address/street}})))

(deftest test-add
  (is (= (p.connect/add {} `user-by-login)
         #::p.connect{:idents    #{:user/login}
                      :index-fio {`user-by-login #::p.connect{:input  #{:user/login}
                                                              :output [:user/name
                                                                       :user/id
                                                                       :user/login
                                                                       :user/age]}}
                      :index-io  {#{:user/login} {:user/age   {}
                                                  :user/id    {}
                                                  :user/login {}
                                                  :user/name  {}}}
                      :index-oif #:user{:age  {#{:user/login} #{`user-by-login}}
                                        :id   {#{:user/login} #{`user-by-login}}
                                        :name {#{:user/login} #{`user-by-login}}}}))

  (is (= (-> {}
             (p.connect/add `user-by-id)
             (p.connect/add `user-network
               {::p.connect/output [{:user/network [:network/id :network/name]}]}))
         `#::p.connect{:idents    #{:user/id}
                       :index-fio {user-by-id   #::p.connect{:input  #{:user/id}
                                                             :output [:user/name
                                                                      :user/id
                                                                      :user/login
                                                                      :user/age]}
                                   user-network #::p.connect{:input  #{:user/id}
                                                             :output [#:user{:network [:network/id
                                                                                       :network/name]}]}}
                       :index-io  {#{:user/id} #:user{:age     {}
                                                      :id      {}
                                                      :login   {}
                                                      :name    {}
                                                      :network {:network/id   {}
                                                                :network/name {}}}}
                       :index-oif #:user{:age     {#{:user/id} #{user-by-id}}
                                         :login   {#{:user/id} #{user-by-id}}
                                         :name    {#{:user/id} #{user-by-id}}
                                         :network {#{:user/id} #{user-network}}}})))

(deftest test-reader
  (testing "reading root entity"
    (is (= (parser {} [:color]))
        {:color "purple"}))

  (testing "follows a basic attribute"
    (is (= (parser {::p/entity (atom {:user/id 1})}
             [:user/name])
           {:user/name "Mel"})))

  (testing "follows a basic attribute"
    (is (= (parser {::p/entity (atom {:user/id 1 :user/foo "bar"})}
             [:user/name :cache])
           {:user/name "Mel"
            :cache     {[`user-by-id {:user/id 1}] {:user/age   26
                                                    :user/id    1
                                                    :user/login "meel"
                                                    :user/name  "Mel"}}})))

  (testing "not found when there is no attribute"
    (is (= (parser {::p/entity (atom {:user/id 1})}
             [:user/not-here])
           {:user/not-here ::p/not-found})))

  (testing "not found if requirements aren't met"
    (is (thrown-with-msg? clojure.lang.ExceptionInfo #"requirements could not be met."
          (= (parser {::p/entity (atom {})}
               [:user/name])))))

  (testing "error when an error happens"
    (is (thrown-with-msg? clojure.lang.ExceptionInfo #"user not found"
          (= (parser {::p/entity (atom {:user/id 2})}
               [:user/name])))))

  (testing "read dependend attributes when neeeded"
    (is (= (parser {::p/entity (atom {:user/login "meel"})}
             [:user/address])
           {:user/address "Live here somewhere"})))

  (testing "deeper level deps"
    (is (= (parser {::p/entity (atom {:user/email "a@b.c"})}
             [:user/address])
           {:user/address "Live here somewhere"})))

  (testing "nested resource"
    (is (= (parser {::p/entity (atom {:user/login "meel"})}
             [{:user/network [:network/id]}])
           {:user/network {:network/id "twitter"}})))

  (testing "ident read"
    (is (= (parser {} [{[:user/id 1] [:user/name]}])
           {[:user/id 1] {:user/name "Mel"}}))))

(def index
  #::p.connect{:index-io {#{:customer/id}                                         #:customer{:external-ids  {}
                                                                                             :cpf           {}
                                                                                             :email         {}
                                                                                             :boletos       #:boleto{:customer-id  {}
                                                                                                                     :beneficiary  #:beneficiary{:branch-number  {}
                                                                                                                                                 :account-number {}
                                                                                                                                                 :document       {}
                                                                                                                                                 :bank           {}
                                                                                                                                                 :id             {}}
                                                                                                                     :id           {}
                                                                                                                     :seu-numero   {}
                                                                                                                     :nosso-numero {}
                                                                                                                     :bank         {}}
                                                                                             :address-line1 {}
                                                                                             :id            {}
                                                                                             :printed-name  {}
                                                                                             :account-id    {}}
                          #{:customer/account-id}                                 #:customer{:beneficiary #:beneficiary{:id             {}
                                                                                                                        :bank           {}
                                                                                                                        :branch-number  {}
                                                                                                                        :account-number {}
                                                                                                                        :document       {}}}
                          #{:boleto/seu-numero :boleto/nosso-numero :boleto/bank} #:boleto{:registration {}}
                          #{:boleto/customer-id}                                  #:boleto{:customer #:customer{:id {}}}
                          #{:customer/cpf}                                        #:customer{:cpf   {}
                                                                                             :email {}
                                                                                             :name  {}
                                                                                             :id    {}}}
               :idents   #{:customer/cpf :customer/account-id :customer/id :boleto/customer-id}})

(def index+globals
  (assoc-in index [::p.connect/index-io #{}]
    {:color       {}
     :random-dude {:dude/address {:address/id {}}}}))

(deftest test-discover
  (testing "blank search"
    (is (= (p.connect/discover-attrs index+globals [])
           {:color       {}
            :random-dude {:dude/address {:address/id {}}}})))

  (testing "root sub-search"
    (is (= (p.connect/discover-attrs index+globals [:random-dude])
           {:color        {}
            :random-dude  {:dude/address {:address/id {}}}
            :dude/address {:address/id {}}})))

  (testing "root sub-search nesting"
    (is (= (p.connect/discover-attrs index+globals [:dude/address :random-dude])
           {:color       {}
            :random-dude {:dude/address {:address/id {}}}
            :address/id  {}})))

  (testing "not found, return globals"
    (is (= (p.connect/discover-attrs index+globals [:noop])
           {:color       {}
            :random-dude {:dude/address {:address/id {}}}})))

  (testing "expand from dependencies"
    (is (= (p.connect/discover-attrs index [:customer/cpf])
           #:customer{:account-id    {}
                      :cpf           {}
                      :email         {}
                      :beneficiary   #:beneficiary{:account-number {}
                                                   :bank           {}
                                                   :branch-number  {}
                                                   :document       {}
                                                   :id             {}}
                      :name          {}
                      :id            {}
                      :external-ids  {}
                      :boletos       #:boleto{:customer-id  {}
                                              :beneficiary  #:beneficiary{:branch-number  {}
                                                                          :account-number {}
                                                                          :document       {}
                                                                          :bank           {}
                                                                          :id             {}}
                                              :id           {}
                                              :seu-numero   {}
                                              :nosso-numero {}
                                              :bank         {}}
                      :address-line1 {}
                      :printed-name  {}})))

  (testing "children level lookup"
    (is (= (p.connect/discover-attrs index [:boleto/beneficiary :customer/boletos :customer/cpf])
           #:beneficiary{:branch-number  {}
                         :account-number {}
                         :document       {}
                         :bank           {}
                         :id             {}}))

    (is (= (p.connect/discover-attrs index [:boleto/beneficiary :customer/boletos :customer/cpf :ignore-me])
           #:beneficiary{:branch-number  {}
                         :account-number {}
                         :document       {}
                         :bank           {}
                         :id             {}})))

  (testing "attributes with multiple inputs"
    (is (= (p.connect/discover-attrs index [:customer/boletos :customer/cpf])
           #:boleto{:customer-id  {}
                    :beneficiary  #:beneficiary{:branch-number  {}
                                                :account-number {}
                                                :document       {}
                                                :bank           {}
                                                :id             {}}
                    :id           {}
                    :seu-numero   {}
                    :nosso-numero {}
                    :bank         {}
                    :registration {}
                    :customer     #:customer{:id {}}})))

  (testing "crazy nestings"
    (is (= (p.connect/discover-attrs index [:customer/boletos :boleto/customer :boleto/customer-id])
           #:boleto{:customer-id  {}
                    :beneficiary  #:beneficiary{:branch-number  {}
                                                :account-number {}
                                                :document       {}
                                                :bank           {}
                                                :id             {}}
                    :id           {}
                    :seu-numero   {}
                    :nosso-numero {}
                    :bank         {}
                    :registration {}
                    :customer     #:customer{:id {}}}))
    (is (= (p.connect/discover-attrs index [:boleto/beneficiary :customer/boletos :boleto/customer :boleto/customer-id])
           #:beneficiary{:branch-number {} :account-number {} :document {} :bank {} :id {}}))))

(deftest test-reprocess-index
  (let [dirty-index (-> {}
                        (p.connect/add 'abc #::p.connect{:input #{:customer/wrong} :output [:customer/name]})
                        (p.connect/add 'abc #::p.connect{:input #{:customer/id} :output [:customer/name]}))]
    (is (= (p.connect/reprocess-index dirty-index)
           '#::p.connect{:idents    #{:customer/id}
                         :index-fio {abc #::p.connect{:input  #{:customer/id}
                                                      :output [:customer/name]}}
                         :index-io  {#{:customer/id} #:customer{:name {}}}
                         :index-oif #:customer{:name {#{:customer/id} #{abc}}}}))))
