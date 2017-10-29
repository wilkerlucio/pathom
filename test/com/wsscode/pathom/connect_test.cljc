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

(defn dont-cache-me [_ _]
  {:value 42})

(defn global-attr [_ _]
  {:color "purple"})

(defn change-env [env _]
  {::i-update-env  {:foo "bar"}
   ::p.connect/env (assoc env :new-info "vish")})

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
        #::p.connect{:output [:color]})
      (p.connect/add `dont-cache-me
        #::p.connect{:output [:value]
                     :cache? false})
      (p.connect/add `change-env
        {::p.connect/output [{::i-update-env [:foo]}]})))

(def parser
  (p/parser {::p/plugins
             [(p/env-plugin {::p/reader          [{:cache (comp deref ::p/request-cache)}
                                                  p/map-reader
                                                  {::env #(p/join % %)}
                                                  p.connect/all-readers
                                                  (p/placeholder-reader ">")]
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
  (is (= (p.connect/merge-io {:user/name {}}
                             {:user/name {}})
         {:user/name {}}))
  (is (= (p.connect/merge-io {:user/name {}}
                             {:user/email {}})
         {:user/name  {}
          :user/email {}}))
  (is (= (p.connect/merge-io {:user/address {}}
                             {:user/address {:address/name {}}})
         {:user/address {:address/name {}}}))
  (is (= (p.connect/merge-io {:user/address {:address/street {}}}
                             {:user/address {:address/name {}}})
         {:user/address {:address/name   {}
                         :address/street {}}})))

(deftest test-merge-oir
  (is (= (p.connect/merge-oir {}
                              {})
         {}))
  (is (= (p.connect/merge-oir {:user/name {#{:user/id} #{'resolver}}}
                              {})
         {:user/name {#{:user/id} #{'resolver}}}))
  (is (= (p.connect/merge-oir {:user/name {#{:user/id} #{'resolver}}}
                              {:user/cpf {#{:user/id} #{'resolver}}})
         {:user/name {#{:user/id} #{'resolver}}
          :user/cpf  {#{:user/id} #{'resolver}}}))
  (is (= (p.connect/merge-oir {:user/name {#{:user/id} #{'resolver}}}
                              {:user/name {#{:user/cpf} #{'resolver2}}})
         {:user/name {#{:user/id}  #{'resolver}
                      #{:user/cpf} #{'resolver2}}}))
  (is (= (p.connect/merge-oir {:user/name {#{:user/id} #{'resolver}}}
                              {:user/name {#{:user/id} #{'resolver2}}})
         {:user/name {#{:user/id} #{'resolver
                                    'resolver2}}})))

(deftest test-merge-indexes
  (is (= (p.connect/merge-indexes
           {::p.connect/index-oir {:user/name {#{:user/id} #{'resolver}}}
            ::p.connect/index-io  {:user/address {:address/street {}}}
            ::p.connect/idents    #{:customer/id}
            :a-map {:a 1 :z 0}}
           {::p.connect/index-oir {:user/name {#{:user/id} #{'resolver2}}}
            ::p.connect/index-io  {:user/address {:address/name {}}}
            ::p.connect/idents    #{:customer/cpf}
            :a-map {:a 2 :c 3}
            :other "bla"})
         {::p.connect/index-oir {:user/name {#{:user/id} #{'resolver
                                                           'resolver2}}}
          ::p.connect/index-io  {:user/address {:address/street {}
                                                :address/name {}}}
          ::p.connect/idents    #{:customer/id :customer/cpf}
          :a-map {:a 2 :c 3 :z 0}
          :other "bla"})))

(deftest test-add
  (is (= (p.connect/add {} `user-by-login)
         #::p.connect{:idents          #{:user/login}
                      :index-resolvers {`user-by-login #::p.connect{:input  #{:user/login}
                                                                    :output [:user/name
                                                                             :user/id
                                                                             :user/login
                                                                             :user/age]}}
                      :index-io        {#{:user/login} {:user/age   {}
                                                        :user/id    {}
                                                        :user/login {}
                                                        :user/name  {}}}
                      :index-oir       #:user{:age  {#{:user/login} #{`user-by-login}}
                                              :id   {#{:user/login} #{`user-by-login}}
                                              :name {#{:user/login} #{`user-by-login}}}}))

  (is (= (-> {}
             (p.connect/add `user-by-id)
             (p.connect/add `user-network
               {::p.connect/output [{:user/network [:network/id :network/name]}]}))
         `#::p.connect{:idents          #{:user/id}
                       :index-resolvers {user-by-id   #::p.connect{:input  #{:user/id}
                                                                   :output [:user/name
                                                                            :user/id
                                                                            :user/login
                                                                            :user/age]}
                                         user-network #::p.connect{:input  #{:user/id}
                                                                   :output [#:user{:network [:network/id
                                                                                             :network/name]}]}}
                       :index-io        {#{:user/id} #:user{:age     {}
                                                            :id      {}
                                                            :login   {}
                                                            :name    {}
                                                            :network {:network/id   {}
                                                                      :network/name {}}}}
                       :index-oir       #:user{:age     {#{:user/id} #{user-by-id}}
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

  (testing "doesn't cache if asked to cache? is false"
    (is (= (parser {} [:value :cache])
           {:value 42
            :cache {}})))

  (testing "can update the environment from the return"
    (is (= (parser {} [{::i-update-env [:foo {::env [:new-info]}]}])
           {::i-update-env {:foo  "bar"
                            ::env {:new-info "vish"}}})))

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
           {[:user/id 1] {:user/name "Mel"}})))

  (testing "read allows for flow"
    (is (= (parser {} [{[:user/id 1] [{:>/alias [:user/name]}]}])
           {[:user/id 1] {:>/alias {:user/name "Mel"}}})))

  (testing "read index"
    (is (= (parser {} [::p.connect/indexes])
           '#:com.wsscode.pathom.connect{:indexes #:com.wsscode.pathom.connect{:idents          #{:user/email
                                                                                                  :user/id
                                                                                                  :user/login}
                                                                               :index-resolvers #:com.wsscode.pathom.connect-test{change-env            #:com.wsscode.pathom.connect{:input  #{}
                                                                                                                                                                                     :output [#:com.wsscode.pathom.connect-test{:i-update-env [:foo]}]}
                                                                                                                                  dont-cache-me         #:com.wsscode.pathom.connect{:cache? false
                                                                                                                                                                                     :input  #{}
                                                                                                                                                                                     :output [:value]}
                                                                                                                                  global-attr           #:com.wsscode.pathom.connect{:input  #{}
                                                                                                                                                                                     :output [:color]}
                                                                                                                                  user-address          #:com.wsscode.pathom.connect{:input  #{:user/id}
                                                                                                                                                                                     :output [:user/address]}
                                                                                                                                  user-by-id            #:com.wsscode.pathom.connect{:input  #{:user/id}
                                                                                                                                                                                     :output [:user/name
                                                                                                                                                                                              :user/id
                                                                                                                                                                                              :user/login
                                                                                                                                                                                              :user/age]}
                                                                                                                                  user-by-login         #:com.wsscode.pathom.connect{:input  #{:user/login}
                                                                                                                                                                                     :output [:user/name
                                                                                                                                                                                              :user/id
                                                                                                                                                                                              :user/login
                                                                                                                                                                                              :user/age]}
                                                                                                                                  user-login-from-email #:com.wsscode.pathom.connect{:input  #{:user/email}
                                                                                                                                                                                     :output [:user/login]}
                                                                                                                                  user-network          #:com.wsscode.pathom.connect{:input  #{:user/id}
                                                                                                                                                                                     :output [#:user{:network [:network/id
                                                                                                                                                                                                               :network/name]}]}}
                                                                               :index-io        {#{:user/email} #:user{:login {}}
                                                                                                 #{:user/id}    #:user{:address {}
                                                                                                                       :age     {}
                                                                                                                       :id      {}
                                                                                                                       :login   {}
                                                                                                                       :name    {}
                                                                                                                       :network #:network{:id   {}
                                                                                                                                          :name {}}}
                                                                                                 #{:user/login} #:user{:age   {}
                                                                                                                       :id    {}
                                                                                                                       :login {}
                                                                                                                       :name  {}}
                                                                                                 #{}            {:color                                        {}
                                                                                                                 :com.wsscode.pathom.connect-test/i-update-env {:foo {}}
                                                                                                                 :value                                        {}}}
                                                                               :index-oir       {:color                                        {#{} #{com.wsscode.pathom.connect-test/global-attr}}
                                                                                                 :com.wsscode.pathom.connect-test/i-update-env {#{} #{com.wsscode.pathom.connect-test/change-env}}
                                                                                                 :user/address                                 {#{:user/id} #{com.wsscode.pathom.connect-test/user-address}}
                                                                                                 :user/age                                     {#{:user/id}    #{com.wsscode.pathom.connect-test/user-by-id}
                                                                                                                                                #{:user/login} #{com.wsscode.pathom.connect-test/user-by-login}}
                                                                                                 :user/id                                      {#{:user/login} #{com.wsscode.pathom.connect-test/user-by-login}}
                                                                                                 :user/login                                   {#{:user/email} #{com.wsscode.pathom.connect-test/user-login-from-email}
                                                                                                                                                #{:user/id}    #{com.wsscode.pathom.connect-test/user-by-id}}
                                                                                                 :user/name                                    {#{:user/id}    #{com.wsscode.pathom.connect-test/user-by-id}
                                                                                                                                                #{:user/login} #{com.wsscode.pathom.connect-test/user-by-login}}
                                                                                                 :user/network                                 {#{:user/id} #{com.wsscode.pathom.connect-test/user-network}}
                                                                                                 :value                                        {#{} #{com.wsscode.pathom.connect-test/dont-cache-me}}}}}))))

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
           #:beneficiary{:branch-number {} :account-number {} :document {} :bank {} :id {}})))

  (testing "process that has an io-index but isn't the root"
    (is (= (p.connect/discover-attrs #::p.connect{:index-io {#{:customer/prospects} #:customer{:approved-prospect #:prospect{:tags {} :cpf {}}}
                                                             #{:customer/cpf}       #:customer{:prospects #:prospect{:tags {} :cpf {}}}}
                                                  :idents   #{:customer/cpf}}
             [:customer/prospects :customer/cpf])
           {:prospect/tags {}
            :prospect/cpf  {}}))))

(comment
  (p.connect/discover-attrs #::p.connect{:index-io {#{:customer/prospects} #:customer{:approved-prospect #:prospect{:tags {}
                                                                                                                    :cpf  {}}}
                                                    #{:customer/cpf}       #:customer{:prospects #:prospect{:tags {}
                                                                                                            :cpf  {}}}}
                                         :idents   #{:customer/cpf}}
    [:customer/prospects :customer/cpf]))

(deftest test-reprocess-index
  (let [dirty-index (-> {}
                        (p.connect/add 'abc #::p.connect{:input #{:customer/wrong} :output [:customer/name]})
                        (p.connect/add 'abc #::p.connect{:input #{:customer/id} :output [:customer/name]}))]
    (is (= (p.connect/reprocess-index dirty-index)
           '#::p.connect{:idents          #{:customer/id}
                         :index-resolvers {abc #::p.connect{:input  #{:customer/id}
                                                            :output [:customer/name]}}
                         :index-io        {#{:customer/id} #:customer{:name {}}}
                         :index-oir       #:customer{:name {#{:customer/id} #{abc}}}}))))

(deftest test-data->shape
  (is (= (p.connect/data->shape {}) []))
  (is (= (p.connect/data->shape {:foo "bar"}) [:foo]))
  (is (= (p.connect/data->shape {:foo {:buz "bar"}}) [{:foo [:buz]}]))
  (is (= (p.connect/data->shape {:foo [{:buz "bar"}]}) [{:foo [:buz]}]))
  (is (= (p.connect/data->shape {:foo ["abc"]}) [:foo]))
  (is (= (p.connect/data->shape {:foo [{:buz "baz"} {:it "nih"}]}) [{:foo [:buz :it]}]))
  (is (= (p.connect/data->shape {:foo [{:buz "baz"} "abc" {:it "nih"}]}) [{:foo [:buz :it]}])))
