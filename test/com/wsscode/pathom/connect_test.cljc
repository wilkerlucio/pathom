(ns com.wsscode.pathom.connect-test
  (:require [clojure.test :refer :all]
            [clojure.spec.alpha :as s]
            [clojure.core.async :refer [go #?(:clj <!!)]]
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

(defn user-by-login [_ {:keys [user/login]}]
  (or (get users-login login) (throw (ex-info "user not found" {}))))

(defn user-address [_ {:keys [user/id]}]
  {:user/address (get user-addresses id)})

(defn user-login-from-email [_ {:user/keys [email]}]
  (if (= email "a@b.c")
    {:user/login "meel"}))

(defn user-network [_ {:user/keys [id]}]
  (if (= 1 id)
    {:user/network {:network/id "twitter" :network/name "mell"}}))

(defn error-value [_ _]
  {:some-error ::p/reader-error})

(defn error-dependent [_ {:keys [some-error]}]
  ; ignore error, this should not run
  {:error-dep :value})

(defn dont-cache-me [_ _]
  {:value 42})

(defn global-attr [_ _]
  {:color "purple"})

(defn change-env [env _]
  {::i-update-env  {:foo "bar"}
   ::p.connect/env (assoc env :new-info "vish")})

(def indexes
  (-> {}
      (p.connect/add `user-by-id
        {::p.connect/input  #{:user/id}
         ::p.connect/output [:user/name :user/id :user/login :user/age]})
      (p.connect/add `user-by-login
        {::p.connect/input  #{:user/login}
         ::p.connect/output [:user/name :user/id :user/login :user/age]})
      (p.connect/add `user-login-from-email
        {::p.connect/input  #{:user/email}
         ::p.connect/output [:user/login]})
      (p.connect/add `user-address
        {::p.connect/input  #{:user/id}
         ::p.connect/output [:user/address]})
      (p.connect/add `user-network
        #::p.connect{:input  #{:user/id}
                     :output [{:user/network [:network/id :network/name]}]})
      (p.connect/add `global-attr
        #::p.connect{:output [:color]})
      (p.connect/add `dont-cache-me
        #::p.connect{:output [:value]
                     :cache? false})
      (p.connect/add `change-env
        {::p.connect/output [{::i-update-env [:foo]}]})
      (p.connect/add `error-value
        {::p.connect/output [:some-error]})
      (p.connect/add `error-dependent
        {::p.connect/input  #{:some-error}
         ::p.connect/output [:error-dep]})))

(deftest test-resolver-data
  (is (= (p.connect/resolver-data indexes `user-by-id)
         #::p.connect{:input  #{:user/id}
                      :output [:user/name
                               :user/id
                               :user/login
                               :user/age]
                      :sym    `user-by-id}))
  (is (= (p.connect/resolver-data {::p.connect/indexes indexes} `user-by-id)
         #::p.connect{:input  #{:user/id}
                      :output [:user/name
                               :user/id
                               :user/login
                               :user/age]
                      :sym    `user-by-id})))

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
            :a-map                {:a 1 :z 0}}
           {::p.connect/index-oir {:user/name {#{:user/id} #{'resolver2}}}
            ::p.connect/index-io  {:user/address {:address/name {}}}
            ::p.connect/idents    #{:customer/cpf}
            :a-map                {:a 2 :c 3}
            :other                "bla"})
         {::p.connect/index-oir {:user/name {#{:user/id} #{'resolver
                                                           'resolver2}}}
          ::p.connect/index-io  {:user/address {:address/street {}
                                                :address/name   {}}}
          ::p.connect/idents    #{:customer/id :customer/cpf}
          :a-map                {:a 2 :c 3 :z 0}
          :other                "bla"})))

(deftest test-add
  (is (= (p.connect/add {} `user-by-login
           {::p.connect/input  #{:user/login}
            ::p.connect/output [:user/name :user/id :user/login :user/age]})
         #::p.connect{:idents          #{:user/login}
                      :index-resolvers {`user-by-login #::p.connect{:input  #{:user/login}
                                                                    :output [:user/name
                                                                             :user/id
                                                                             :user/login
                                                                             :user/age]
                                                                    :sym    `user-by-login}}
                      :index-io        {#{:user/login} {:user/age   {}
                                                        :user/id    {}
                                                        :user/login {}
                                                        :user/name  {}}}
                      :index-oir       #:user{:age  {#{:user/login} #{`user-by-login}}
                                              :id   {#{:user/login} #{`user-by-login}}
                                              :name {#{:user/login} #{`user-by-login}}}}))

  (is (= (-> {}
             (p.connect/add `user-by-id
               {::p.connect/input  #{:user/id}
                ::p.connect/output [:user/name :user/id :user/login :user/age]})
             (p.connect/add `user-network
               {::p.connect/input  #{:user/id}
                ::p.connect/output [{:user/network [:network/id :network/name]}]}))
         `#::p.connect{:idents          #{:user/id}
                       :index-resolvers {user-by-id   #::p.connect{:input  #{:user/id}
                                                                   :output [:user/name
                                                                            :user/id
                                                                            :user/login
                                                                            :user/age]
                                                                   :sym    user-by-id}
                                         user-network #::p.connect{:input  #{:user/id}
                                                                   :output [#:user{:network [:network/id
                                                                                             :network/name]}]
                                                                   :sym    user-network}}
                       :index-io        {#{:user/id} #:user{:age     {}
                                                            :id      {}
                                                            :login   {}
                                                            :name    {}
                                                            :network {:network/id   {}
                                                                      :network/name {}}}}
                       :index-oir       #:user{:age     {#{:user/id} #{user-by-id}}
                                               :login   {#{:user/id} #{user-by-id}}
                                               :name    {#{:user/id} #{user-by-id}}
                                               :network {#{:user/id} #{user-network}}}}))

  ; disregards the resolver symbol, just testing nesting adding
  (testing "adding resolver derived from global item should be global"
    (is (= (-> {}
               (p.connect/add `user-by-id
                 {::p.connect/input  #{}
                  ::p.connect/output [{:global-item [:x :y]}]})
               (p.connect/add `user-network
                 {::p.connect/input  #{:global-item}
                  ::p.connect/output [{:sub-global [:x :y]}]})
               ::p.connect/index-io)
           {#{} {:global-item {:x {} :y {}}
                 :sub-global  {:x {} :y {}}}}))))

(def parser
  (p/parser {::p/plugins
             [(p/env-plugin {::p/reader          [{:cache (comp deref ::p/request-cache)}
                                                  p/map-reader
                                                  {::env #(p/join % %)}
                                                  p.connect/all-readers
                                                  (p/placeholder-reader ">")]
                             ::p.connect/indexes indexes})
              p/request-cache-plugin]}))

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
          (parser {::p/entity (atom {})}
            [:user/name]))))

  (testing "error when an error happens"
    (is (thrown-with-msg? clojure.lang.ExceptionInfo #"user not found"
          (parser {::p/entity (atom {:user/id 2})}
            [:user/name]))))

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

  (testing "stops processing if entity is nil"
    (is (= (parser {::p/entity (atom {:user/id 2})}
             [{:user/network [:network/id]}])
           {})))

  (testing "short circuit error "
    (is (thrown-with-msg? clojure.lang.ExceptionInfo #"requirements could not be met."
          (parser {}
            [:error-dep]))))

  (testing "read index"
    (is (= (parser {} [::p.connect/indexes])
           {::p.connect/indexes indexes}))))

(defn global-async-reader [_ _]
  {:color-async (go "blue")})

(defn from-color-async [_ {:keys [color-async]}]
  {:color-async2 (str color-async "-derived")})

(def async-indexes
  (-> indexes
      (p.connect/add `global-async-reader
        {::p.connect/output [:color-async]})
      (p.connect/add `from-color-async
        {::p.connect/input  #{:color-async}
         ::p.connect/output [:color-async2]})))

(def async-parser
  (p/async-parser {::p/plugins
                   [(p/env-plugin {::p/reader          [{:cache (comp deref ::p/request-cache)}
                                                        p/map-reader
                                                        {::env #(p/join % %)}
                                                        p.connect/all-async-readers
                                                        (p/placeholder-reader ">")]
                                   ::p.connect/indexes async-indexes})
                    p/request-cache-plugin]}))

#?(:clj
   (deftest test-reader-async
     (testing "read async"
       (is (= (<!! (async-parser {} [:color-async]))
              {:color-async "blue"}))
       (is (= (<!! (async-parser {} [:color-async2]))
              {:color-async2 "blue-derived"})))))

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
                                                            :output [:customer/name]
                                                            :sym    abc}}
                         :index-io        {#{:customer/id} #:customer{:name {}}}
                         :index-oir       #:customer{:name {#{:customer/id} #{abc}}}}))))

(deftest test-custom-dispatch
  (let [index  (-> {}
                   (p.connect/add 'foo {::p.connect/output [:foo]})
                   (p.connect/add 'bar {::p.connect/input  #{:foo}
                                        ::p.connect/output [:bar]}))
        parser (p/parser {::p/plugins
                          [(p/env-plugin {::p/reader                    [p/map-reader
                                                                         p.connect/all-readers]
                                          ::p.connect/indexes           index
                                          ::p.connect/resolver-dispatch (fn [env entity]
                                                                          (condp = (p.connect/resolver-dispatch env {})
                                                                            'foo {:foo "FOO"}
                                                                            'bar {:bar (str "BAR - " (:foo entity))}))})]})]
    (is (= (parser {} [:bar :foo])
           {:bar "BAR - FOO", :foo "FOO"}))))

(deftest test-data->shape
  (is (= (p.connect/data->shape {}) []))
  (is (= (p.connect/data->shape {:foo "bar"}) [:foo]))
  (is (= (p.connect/data->shape {:foo {:buz "bar"}}) [{:foo [:buz]}]))
  (is (= (p.connect/data->shape {:foo [{:buz "bar"}]}) [{:foo [:buz]}]))
  (is (= (p.connect/data->shape {:foo ["abc"]}) [:foo]))
  (is (= (p.connect/data->shape {:foo [{:buz "baz"} {:it "nih"}]}) [{:foo [:buz :it]}]))
  (is (= (p.connect/data->shape {:foo [{:buz "baz"} "abc" {:it "nih"}]}) [{:foo [:buz :it]}])))
