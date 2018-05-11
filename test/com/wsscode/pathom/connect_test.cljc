(ns com.wsscode.pathom.connect-test
  (:require [clojure.test :refer :all]
            [clojure.spec.alpha :as s]
            [clojure.core.async :refer [go #?(:clj <!!)]]
            [com.wsscode.pathom.core :as p]
            [com.wsscode.pathom.connect :as pc]
            [com.wsscode.pathom.connect.test :as pct]))

(def base-indexes (atom {}))

(defmulti resolver-fn pc/resolver-dispatch)
(def defresolver (pc/resolver-factory resolver-fn base-indexes))

(defmulti mutate-fn pc/mutation-dispatch)
(def defmutation (pc/mutation-factory mutate-fn base-indexes))

(def users
  {1 {:user/id 1 :user/name "Mel" :user/age 26 :user/login "meel"}})

(def users-login
  {"meel" (get users 1)})

(def user-addresses
  {1 "Live here somewhere"})

(defresolver `user-by-id
  {::pc/input  #{:user/id}
   ::pc/output [:user/name :user/id :user/login :user/age]}
  (fn [_ {:keys [user/id] :as input}]
    (or (get users id) (throw (ex-info "user not found" {:input input})))))

(defresolver `user-by-login
  {::pc/input  #{:user/login}
   ::pc/output [:user/name :user/id :user/login :user/age]}
  (fn [_ {:keys [user/login]}]
    (or (get users-login login) (throw (ex-info "user not found" {})))))

(defresolver `user-login-from-email
  {::pc/input  #{:user/email}
   ::pc/output [:user/login]}
  (fn [_ {:user/keys [email]}]
    (if (= email "a@b.c")
      {:user/login "meel"})))

(defresolver `user-address
  {::pc/input  #{:user/id}
   ::pc/output [:user/address]}
  (fn [_ {:keys [user/id]}]
    {:user/address (get user-addresses id)}))

(defresolver `user-network
  {::pc/input  #{:user/id}
   ::pc/output [{:user/network [:network/id :network/name]}]}
  (fn [_ {:user/keys [id]}]
    (if (= 1 id)
      {:user/network {:network/id "twitter" :network/name "mell"}})))

(defresolver `global-attr
  {::pc/output [:color]}
  (fn [_ _]
    {:color "purple"}))

(defresolver `dont-cache-me
  {::pc/output [:value]
   ::pc/cache? false}
  (fn [_ _]
    {:value 42}))

(defresolver `change-env
  {::pc/output [{::i-update-env [:foo]}]}
  (fn [env _]
    {::i-update-env {:foo "bar"}
     ::pc/env       (assoc env :new-info "vish")}))

(defresolver `error-value
  {::pc/output [:some-error]}
  (fn [_ _]
    {:some-error ::p/reader-error}))

(defresolver `error-dependent
  {::pc/input  #{:some-error}
   ::pc/output [:error-dep]}
  (fn [_ {:keys [some-error]}]
    ; ignore error, this should not run
    {:error-dep :value}))

(def thing-values
  {1 "a"
   2 "b"
   3 "c"
   4 "d"
   5 "e"})

(defresolver `n+1-list
  {::pc/output [{:list-of-things [:thing-id
                                  :other]}]}
  (fn [_ _]
    {:list-of-things [{:thing-id 1
                       :other    "x"}
                      {:thing-id 2}
                      {:thing-id 3}]}))

(defresolver `n+1-batchable
  {::pc/input  #{:thing-id}
   ::pc/output [:thing-value]
   ::pc/batch? true}
  (fn [{::keys [batch-counter]} input]
    (swap! batch-counter inc)
    (if (sequential? input)
      (mapv (fn [v] {:thing-value (get thing-values (:thing-id v))}) input)
      {:thing-value (get thing-values (:thing-id input) ::p/continue)})))

(defresolver `n+1-list-async
  {::pc/output [{:async-list-of-things [:thing-id
                                        :other]}]}
  (fn [_ _]
    (go
      {:async-list-of-things [{:thing-id 1
                               :other    "x"}
                              {:thing-id 2}
                              {:thing-id 3}]})))

(defresolver `n+1-batchable-async
  {::pc/input  #{:thing-id}
   ::pc/output [:async-thing-value]
   ::pc/batch? true}
  (fn [{::keys [batch-counter]} input]
    (swap! batch-counter inc)
    (go
      (if (sequential? input)
        (mapv (fn [v] {:async-thing-value (get thing-values (:thing-id v))}) input)
        {:async-thing-value (get thing-values (:thing-id input) ::p/continue)}))))

(def indexes @base-indexes)

(deftest test-resolver-data
  (is (= (pc/resolver-data indexes `user-by-id)
         #::pc{:input  #{:user/id}
               :output [:user/name
                        :user/id
                        :user/login
                        :user/age]
               :sym    `user-by-id}))
  (is (= (pc/resolver-data {::pc/indexes indexes} `user-by-id)
         #::pc{:input  #{:user/id}
               :output [:user/name
                        :user/id
                        :user/login
                        :user/age]
               :sym    `user-by-id})))

(deftest test-merge-io
  (is (= (pc/merge-io {:user/name {}}
                      {:user/name {}})
         {:user/name {}}))
  (is (= (pc/merge-io {:user/name {}}
                      {:user/email {}})
         {:user/name  {}
          :user/email {}}))
  (is (= (pc/merge-io {:user/address {}}
                      {:user/address {:address/name {}}})
         {:user/address {:address/name {}}}))
  (is (= (pc/merge-io {:user/address {:address/street {}}}
                      {:user/address {:address/name {}}})
         {:user/address {:address/name   {}
                         :address/street {}}})))

(deftest test-merge-oir
  (is (= (pc/merge-oir {}
                       {})
         {}))
  (is (= (pc/merge-oir {:user/name {#{:user/id} #{'resolver}}}
                       {})
         {:user/name {#{:user/id} #{'resolver}}}))
  (is (= (pc/merge-oir {:user/name {#{:user/id} #{'resolver}}}
                       {:user/cpf {#{:user/id} #{'resolver}}})
         {:user/name {#{:user/id} #{'resolver}}
          :user/cpf  {#{:user/id} #{'resolver}}}))
  (is (= (pc/merge-oir {:user/name {#{:user/id} #{'resolver}}}
                       {:user/name {#{:user/cpf} #{'resolver2}}})
         {:user/name {#{:user/id}  #{'resolver}
                      #{:user/cpf} #{'resolver2}}}))
  (is (= (pc/merge-oir {:user/name {#{:user/id} #{'resolver}}}
                       {:user/name {#{:user/id} #{'resolver2}}})
         {:user/name {#{:user/id} #{'resolver
                                    'resolver2}}})))

(deftest test-merge-indexes
  (is (= (pc/merge-indexes
           {::pc/index-oir {:user/name {#{:user/id} #{'resolver}}}
            ::pc/index-io  {:user/address {:address/street {}}}
            ::pc/idents    #{:customer/id}
            :a-map         {:a 1 :z 0}}
           {::pc/index-oir {:user/name {#{:user/id} #{'resolver2}}}
            ::pc/index-io  {:user/address {:address/name {}}}
            ::pc/idents    #{:customer/cpf}
            :a-map         {:a 2 :c 3}
            :other         "bla"})
         {::pc/index-oir {:user/name {#{:user/id} #{'resolver
                                                    'resolver2}}}
          ::pc/index-io  {:user/address {:address/street {}
                                         :address/name   {}}}
          ::pc/idents    #{:customer/id :customer/cpf}
          :a-map         {:a 2 :c 3 :z 0}
          :other         "bla"})))

(deftest test-add
  (is (= (pc/add {} `user-by-login
           {::pc/input  #{:user/login}
            ::pc/output [:user/name :user/id :user/login :user/age]})
         #::pc{:idents          #{:user/login}
               :index-resolvers {`user-by-login #::pc{:input  #{:user/login}
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
             (pc/add `user-by-id
               {::pc/input  #{:user/id}
                ::pc/output [:user/name :user/id :user/login :user/age]})
             (pc/add `user-network
               {::pc/input  #{:user/id}
                ::pc/output [{:user/network [:network/id :network/name]}]}))
         `#::pc{:idents          #{:user/id}
                :index-resolvers {user-by-id   #::pc{:input  #{:user/id}
                                                     :output [:user/name
                                                              :user/id
                                                              :user/login
                                                              :user/age]
                                                     :sym    user-by-id}
                                  user-network #::pc{:input  #{:user/id}
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
               (pc/add `user-by-id
                 {::pc/input  #{}
                  ::pc/output [{:global-item [:x :y]}]})
               (pc/add `user-network
                 {::pc/input  #{:global-item}
                  ::pc/output [{:sub-global [:x :y]}]})
               ::pc/index-io)
           {#{} {:global-item {:x {} :y {}}
                 :sub-global  {:x {} :y {}}}}))))

(def parser
  (p/parser {:mutate pc/mutate
             ::p/plugins
                     [(p/env-wrap-plugin #(assoc % ::pc/indexes @base-indexes))
                      (p/env-plugin {::p/reader             [{:cache (comp deref ::p/request-cache)}
                                                             p/map-reader
                                                             {::env #(p/join % %)}
                                                             pc/all-readers
                                                             (p/placeholder-reader ">")]
                                     ::pc/resolver-dispatch resolver-fn
                                     ::pc/mutate-dispatch   mutate-fn})
                      p/request-cache-plugin]}))

(deftest test-reader
  (testing "reading root entity"
    (is (= (parser {} [:color])
           {:color "purple"})))

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
           {:user/network :com.wsscode.pathom.core/not-found})))

  (testing "short circuit error "
    (is (thrown-with-msg? clojure.lang.ExceptionInfo #"requirements could not be met."
          (parser {}
            [:error-dep]))))

  (testing "read index"
    (is (= (parser {} [::pc/indexes])
           {::pc/indexes @base-indexes})))

  (testing "n+1 batching"
    (let [counter (atom 0)]
      (is (= (parser {::batch-counter counter} [{:list-of-things [:thing-value]}])
             {:list-of-things [{:thing-value "a"}
                               {:thing-value "b"}
                               {:thing-value "c"}]}))
      (is (= 1 @counter)))))

(defmutation 'call/op
  {::pc/output [:user/id]}
  (fn [env input]
    {:user/id 1}))

(defmutation 'call/op-tmpids
  {::pc/output [:user/id]}
  (fn [env {:keys [user/id]}]
    {:user/id 1
     :fulcro.client.primitives/tempids {id 1}}))

(deftest test-mutate
  (testing "calling simple operation"
    (is (= (parser {} ['(call/op {})])
           {'call/op {:user/id 1}})))

  (testing "navigating on the mutation result"
    (is (= (parser {} [{'(call/op {}) [:user/id :user/name]}])
           {'call/op {:user/id 1, :user/name "Mel"}})))

  (testing "throw error on not found"
    (is (thrown-with-msg? clojure.lang.ExceptionInfo #"Mutation not found"
          (parser {} ['(call/non-op {})]))))

  (testing "global mutation keys"
    (is (= (parser {::pc/mutation-join-globals [:fulcro.client.primitives/tempids]}
             [{'(call/op-tmpids {:user/id 333})
               [:user/id]}])
           '{call/op-tmpids {:fulcro.client.primitives/tempids {333 1}, :user/id 1}}))))

(defresolver `global-async-reader
  {::pc/output [:color-async]}
  (fn [_ _]
    (go
      {:color-async "blue"})))

(defresolver `from-color-async
  {::pc/input  #{:color-async}
   ::pc/output [:color-async2]}
  (fn [_ {:keys [color-async]}]
    {:color-async2 (str color-async "-derived")}))

(defmutation 'call/op-async
  {::pc/output [:user/id]}
  (fn [env input]
    (go
      {:user/id 1})))

(def async-parser
  (p/async-parser {:mutate
                   pc/mutate

                   ::p/plugins
                   [(p/env-wrap-plugin #(assoc % ::pc/indexes @base-indexes))
                    (p/env-plugin {::p/reader             [p/map-reader pc/all-async-readers]
                                   ::pc/resolver-dispatch resolver-fn
                                   ::pc/mutate-dispatch   mutate-fn})
                    p/request-cache-plugin]}))

#?(:clj
   (deftest test-reader-async
     (testing "read async"
       (is (= (<!! (async-parser {} [:color-async]))
              {:color-async "blue"}))
       (is (= (<!! (async-parser {} [:color-async2]))
              {:color-async2 "blue-derived"})))
     (testing "n+1 batching"
       (let [counter (atom 0)]
         (is (= (<!! (async-parser {::batch-counter counter} [{:async-list-of-things [:async-thing-value]}]))
                {:async-list-of-things [{:async-thing-value "a"}
                                        {:async-thing-value "b"}
                                        {:async-thing-value "c"}]}))
         (is (= 1 @counter))))))

#?(:clj
   (deftest test-mutate-async
     (testing "call mutation and parse response"
       (is (= (<!! (async-parser {} [{'(call/op {}) [:user/id :user/name]}]))
              {'call/op {:user/id 1, :user/name "Mel"}})))))

(def index
  #::pc{:index-io {#{:customer/id}                                         #:customer{:external-ids  {}
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
  (assoc-in index [::pc/index-io #{}]
    {:color       {}
     :random-dude {:dude/address {:address/id {}}}}))

(deftest test-discover
  (testing "blank search"
    (is (= (pc/discover-attrs index+globals [])
           {:color       {}
            :random-dude {:dude/address {:address/id {}}}})))

  (testing "root sub-search"
    (is (= (pc/discover-attrs index+globals [:random-dude])
           {:color        {}
            :random-dude  {:dude/address {:address/id {}}}
            :dude/address {:address/id {}}})))

  (testing "root sub-search nesting"
    (is (= (pc/discover-attrs index+globals [:dude/address :random-dude])
           {:color       {}
            :random-dude {:dude/address {:address/id {}}}
            :address/id  {}})))

  (testing "not found, return globals"
    (is (= (pc/discover-attrs index+globals [:noop])
           {:color       {}
            :random-dude {:dude/address {:address/id {}}}})))

  (testing "expand from dependencies"
    (is (= (pc/discover-attrs index [:customer/cpf])
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
    (is (= (pc/discover-attrs index [:boleto/beneficiary :customer/boletos :customer/cpf])
           #:beneficiary{:branch-number  {}
                         :account-number {}
                         :document       {}
                         :bank           {}
                         :id             {}})))

  (testing "attributes with multiple inputs"
    (is (= (pc/discover-attrs index [:customer/boletos :customer/cpf])
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
    (is (= (pc/discover-attrs index [:customer/boletos :boleto/customer :boleto/customer-id])
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
    (is (= (pc/discover-attrs index [:boleto/beneficiary :customer/boletos :boleto/customer :boleto/customer-id])
           #:beneficiary{:branch-number {} :account-number {} :document {} :bank {} :id {}})))

  (testing "process that has an io-index but isn't the root"
    (is (= (pc/discover-attrs #::pc{:index-io {#{:customer/prospects} #:customer{:approved-prospect #:prospect{:tags {} :cpf {}}}
                                               #{:customer/cpf}       #:customer{:prospects #:prospect{:tags {} :cpf {}}}}
                                    :idents   #{:customer/cpf}}
             [:customer/prospects :customer/cpf])
           {:prospect/tags {}
            :prospect/cpf  {}}))))

(comment
  (pc/discover-attrs #::pc{:index-io {#{:customer/prospects} #:customer{:approved-prospect #:prospect{:tags {}
                                                                                                      :cpf  {}}}
                                      #{:customer/cpf}       #:customer{:prospects #:prospect{:tags {}
                                                                                              :cpf  {}}}}
                           :idents   #{:customer/cpf}}
    [:customer/prospects :customer/cpf]))

(deftest test-reprocess-index
  (let [dirty-index (-> {}
                        (pc/add 'abc #::pc{:input #{:customer/wrong} :output [:customer/name]})
                        (pc/add 'abc #::pc{:input #{:customer/id} :output [:customer/name]}))]
    (is (= (pc/reprocess-index dirty-index)
           '#::pc{:idents          #{:customer/id}
                  :index-resolvers {abc #::pc{:input  #{:customer/id}
                                              :output [:customer/name]
                                              :sym    abc}}
                  :index-io        {#{:customer/id} #:customer{:name {}}}
                  :index-oir       #:customer{:name {#{:customer/id} #{abc}}}}))))

(deftest test-custom-dispatch
  (let [index  (-> {}
                   (pc/add 'foo {::pc/output [:foo]})
                   (pc/add 'bar {::pc/input  #{:foo}
                                 ::pc/output [:bar]}))
        parser (p/parser {::p/plugins
                          [(p/env-plugin {::p/reader             [p/map-reader
                                                                  pc/all-readers]
                                          ::pc/indexes           index
                                          ::pc/resolver-dispatch (fn [env entity]
                                                                   (condp = (pc/resolver-dispatch env {})
                                                                     'foo {:foo "FOO"}
                                                                     'bar {:bar (str "BAR - " (:foo entity))}))})]})]
    (is (= (parser {} [:bar :foo])
           {:bar "BAR - FOO", :foo "FOO"}))))

(deftest test-data->shape
  (is (= (pc/data->shape {}) []))
  (is (= (pc/data->shape {:foo "bar"}) [:foo]))
  (is (= (pc/data->shape {:foo {:buz "bar"}}) [{:foo [:buz]}]))
  (is (= (pc/data->shape {:foo [{:buz "bar"}]}) [{:foo [:buz]}]))
  (is (= (pc/data->shape {:foo ["abc"]}) [:foo]))
  (is (= (pc/data->shape {:foo [{:buz "baz"} {:it "nih"}]}) [{:foo [:buz :it]}]))
  (is (= (pc/data->shape {:foo [{:buz "baz"} "abc" {:it "nih"}]}) [{:foo [:buz :it]}])))

(def regression-async-parser (p/async-parser {::p/plugins [p/error-handler-plugin]}))

(def async-env
  (assoc pct/parser-env
    ::p/reader [p/map-reader pc/all-async-readers]
    ::pc/resolver-dispatch pct/async-resolve-fn))

(defn connect-async [resolvers query]
  (let [index (pc/reprocess-index {::pc/index-resolvers resolvers})]
    (regression-async-parser (assoc async-env ::pc/indexes index) query)))

#?(:clj
   (deftest test-parser-async
     (is (= (<!! (connect-async '{A #:com.wsscode.pathom.connect{:sym    A,
                                                                 :input  #{:*.t?+e?/!-!},
                                                                 :output [:*.t?+e?/!-!]}}
                   [{[:*.t?+e?/!-! 0] []}]))
            {[:*.t?+e?/!-! 0] {}}))

     (is (= (<!! (connect-async '{/                 #:com.wsscode.pathom.connect{:sym    /,
                                                                                 :input  #{:I.-/q},
                                                                                 :output [:ND._.z!f6-/LEl
                                                                                          :Kg_f-.m4V!.*/S+*
                                                                                          :lSA0n
                                                                                          :+*-]},
                                  !oc1.g?4.!i13/Mut #:com.wsscode.pathom.connect{:sym    !oc1.g?4.!i13/Mut,
                                                                                 :input  #{:ND._.z!f6-/LEl},
                                                                                 :output [:ND._.z!f6-/LEl
                                                                                          {:lSA0n [:Oi4
                                                                                                   :h.p4a/-
                                                                                                   :ND._.z!f6-/LEl
                                                                                                   :ap!D1.Z!.pF.*G6/AM]}
                                                                                          #:HHH?.N.OdG8{:k!i [:ap!D1.Z!.pF.*G6/AM
                                                                                                              :I.-/q
                                                                                                              :?2iDW._!Z!/V
                                                                                                              :S7N0._?3s.e.dP/HB9]}
                                                                                          :c?Q_.pNxb.d0.Y6?DH/D_
                                                                                          :lSA0n]}}
                   '[{[:I.-/q -2.0] []}
                     {[:ND._.z!f6-/LEl GlP] [:HHH?.N.OdG8/k!i :lSA0n]}
                     {[:ND._.z!f6-/LEl false] [:ND._.z!f6-/LEl :c?Q_.pNxb.d0.Y6?DH/D_ :HHH?.N.OdG8/k!i :lSA0n]}
                     [:ND._.z!f6-/LEl \Q]]))
            '{[:I.-/q
               -2.0]  {}
              [:ND._.z!f6-/LEl
               GlP]   {:HHH?.N.OdG8/k!i {:?2iDW._!Z!/V       true
                                         :I.-/q              688925337
                                         :S7N0._?3s.e.dP/HB9 1631875107
                                         :ap!D1.Z!.pF.*G6/AM ":ap!D1.Z!.pF.*G6/AM"}
                       :lSA0n           1476869571}
              [:ND._.z!f6-/LEl
               \Q]    #:ND._.z!f6-{:LEl \Q}
              [:ND._.z!f6-/LEl
               false] {:HHH?.N.OdG8/k!i       {:?2iDW._!Z!/V       true
                                               :I.-/q              688925337
                                               :S7N0._?3s.e.dP/HB9 1631875107
                                               :ap!D1.Z!.pF.*G6/AM ":ap!D1.Z!.pF.*G6/AM"}
                       :ND._.z!f6-/LEl        false
                       :c?Q_.pNxb.d0.Y6?DH/D_ ":c?Q_.pNxb.d0.Y6?DH/D_"
                       :lSA0n                 1476869571}}))))
