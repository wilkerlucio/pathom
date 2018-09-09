(ns com.wsscode.pathom.connect-test
  (:require [clojure.test :refer [is are testing]]
            #?(:clj [com.wsscode.common.async-clj :refer [go-promise <!maybe]])
            [nubank.workspaces.core :refer [deftest]]
            [clojure.spec.alpha :as s]
            [clojure.core.async :as async :refer [go]]
            [com.wsscode.pathom.core :as p]
            [com.wsscode.pathom.connect :as pc]
            [com.wsscode.pathom.connect.test :as pct]
            [com.wsscode.pathom.parser :as pp]
            [com.wsscode.pathom.trace :as pt]))

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

(defn inc-counter [{::keys [counters]} key]
  (if counters (swap! counters update key (fnil inc 0))))

(defresolver `user-by-id
  {::pc/input  #{:user/id}
   ::pc/output [:user/name :user/id :user/login :user/age]}
  (fn [env {:keys [user/id] :as input}]
    (inc-counter env ::user-by-id)
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

(defresolver `nil-value
  {::pc/output [:nil-value]}
  (fn [_ _] {:nil-value nil}))

(defresolver `nil-dependent
  {::pc/input  #{:nil-value}
   ::pc/output [:nil-dep]}
  (fn [_ _] {:nil-dep "nil-dep-value"}))

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

(defresolver `n+1-list-filtering
  {::pc/output [{:list-of-things-with-missing
                 [:thing-id
                  :other]}]}
  (fn [_ _]
    {:list-of-things-with-missing [{:thing-id 1
                                    :other    "x"}
                                   {:thing-id 2}
                                   {:thing-id 3}
                                   {:filter-me "bar"}
                                   {:thing-id 4}]}))

(defresolver `n+1-batchable
  {::pc/input  #{:thing-id}
   ::pc/output [:thing-value]
   ::pc/batch? true}
  (pc/batch-resolver
    (fn [{::keys [batch-counter]} {:keys [thing-id]}]
      (swap! batch-counter inc)
      {:thing-value (get thing-values thing-id ::p/continue)})
    (fn [{::keys [batch-counter]} many]
      (swap! batch-counter inc)
      (mapv (fn [v] {:thing-value (get thing-values (:thing-id v))}) many))))

(defresolver `n+1-batchable-over-with-chain-deps
  {::pc/input  #{:thing-id :color}
   ::pc/output [:thing-value2]
   ::pc/batch? true}
  (pc/batch-resolver
    (fn [{::keys [batch-counter]} {:keys [thing-id]}]
      (swap! batch-counter inc)
      {:thing-value2 (get thing-values thing-id ::p/continue)})
    (fn [{::keys [batch-counter]} many]
      (swap! batch-counter inc)
      (mapv (fn [v] {:thing-value2 (get thing-values (:thing-id v))}) many))))

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

(defresolver `n+1-batchable-async-with-chain-deps
  {::pc/input  #{:thing-id :color-async}
   ::pc/output [:async-thing-value2]
   ::pc/batch? true}
  (fn [{::keys [batch-counter]} input]
    (swap! batch-counter inc)
    (go
      (if (sequential? input)
        (mapv (fn [v] {:async-thing-value2 (get thing-values (:thing-id v))}) input)
        {:async-thing-value2 (get thing-values (:thing-id input) ::p/continue)}))))

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
  (testing "simple add"
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
                                         :name {#{:user/login} #{`user-by-login}}}})))

  (testing "accumulating"
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
                                          :network {#{:user/id} #{user-network}}}})))

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
                 :sub-global  {:x {} :y {}}}})))

  (testing "adding union at resolver root"
    (is (= (-> {}
               (pc/add `union-root
                 {::pc/input  #{:entity/id}
                  ::pc/output {:friend/id  [:friend/id :friend/name]
                               :place/id   [:place/id :place/title]
                               :address/id [:address/id :address/street :address/number]}}))
           `{:com.wsscode.pathom.connect/index-resolvers
             {union-root
              {:com.wsscode.pathom.connect/sym    union-root
               :com.wsscode.pathom.connect/input  #{:entity/id}
               :com.wsscode.pathom.connect/output {:friend/id  [:friend/id :friend/name]
                                                   :place/id   [:place/id :place/title]
                                                   :address/id [:address/id :address/street :address/number]}}}

             :com.wsscode.pathom.connect/index-io
             {#{:entity/id}
              {::pc/unions     {:friend/id  {:friend/id {} :friend/name {}}
                                :place/id   {:place/id {} :place/title {}}
                                :address/id {:address/id {} :address/street {} :address/number {}}}
               :friend/id      {}
               :friend/name    {}
               :place/id       {}
               :place/title    {}
               :address/id     {}
               :address/street {}
               :address/number {}}}

             :com.wsscode.pathom.connect/index-oir
             {:friend/id      {#{:entity/id} #{union-root}}
              :friend/name    {#{:entity/id} #{union-root}}
              :place/id       {#{:entity/id} #{union-root}}
              :place/title    {#{:entity/id} #{union-root}}
              :address/id     {#{:entity/id} #{union-root}}
              :address/street {#{:entity/id} #{union-root}}
              :address/number {#{:entity/id} #{union-root}}}

             :com.wsscode.pathom.connect/idents
             #{:entity/id}}))))

(def parser
  (p/parser {:mutate pc/mutate
             ::p/plugins
                     [(p/env-wrap-plugin #(assoc % ::pc/indexes @base-indexes))
                      (p/env-plugin {::p/reader               [{:cache (comp deref ::p/request-cache)}
                                                               p/map-reader
                                                               {::env #(p/join % %)}
                                                               pc/all-readers
                                                               (p/placeholder-reader ">")]
                                     ::p/placeholder-prefixes #{">"}
                                     ::pc/resolver-dispatch   resolver-fn
                                     ::pc/mutate-dispatch     mutate-fn})
                      p/request-cache-plugin]}))

(def parser-error-catch
  (p/parser {:mutate pc/mutate
             ::p/plugins
                     [(p/env-wrap-plugin #(assoc % ::pc/indexes @base-indexes))
                      (p/env-plugin {::p/reader               [p/map-reader
                                                               pc/all-readers
                                                               (p/placeholder-reader ">")]

                                     ::p/placeholder-prefixes #{">"}
                                     ::pc/resolver-dispatch   resolver-fn
                                     ::pc/mutate-dispatch     mutate-fn})
                      p/error-handler-plugin
                      p/request-cache-plugin]}))

(deftest test-connect-error-cache
  (let [counters (atom {})]
    (parser-error-catch {::counters counters}
      [{[:user/id "invalid"] [:user/name :user/login]}])

    (is (= 1 (::user-by-id @counters)))))

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
    (is (= (parser {::p/entity (atom {})} [:user/name])
           {:user/name ::p/not-found})))

  (testing "error when an error happens"
    (is (thrown-with-msg? #?(:clj clojure.lang.ExceptionInfo :cljs ExceptionInfo) #"user not found"
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
           {:user/network ::p/not-found})))

  (testing "short circuit error "
    (is (= (parser {} [:error-dep])
           {:error-dep ::p/not-found})))

  (testing "read index"
    (is (= (parser {} [::pc/indexes])
           {::pc/indexes @base-indexes})))

  (testing "depending on value with nil return"
    (is (= (parser {} [:nil-dep])
           {:nil-dep "nil-dep-value"})))

  (testing "n+1 batching"
    (let [counter (atom 0)]
      (is (= (parser {::batch-counter counter} [{:list-of-things [:thing-value]}])
             {:list-of-things [{:thing-value "a"}
                               {:thing-value "b"}
                               {:thing-value "c"}]}))
      (is (= 1 @counter))))

  (testing "n+1 batching filtering"
    (let [counter (atom 0)]
      (is (= (parser {::batch-counter counter} [{:list-of-things-with-missing [(p/? :thing-value)]}])
             {:list-of-things-with-missing [{:thing-value "a"}
                                            {:thing-value "b"}
                                            {:thing-value "c"}
                                            {:thing-value :com.wsscode.pathom.core/not-found}
                                            {:thing-value "d"}]}))
      (is (= 1 @counter))))

  (testing "n+1 batching on placeholders"
    (let [counter (atom 0)]
      (is (= (parser {::batch-counter counter} [{:list-of-things [{:>/pn [:thing-value]}]}])
             {:list-of-things [{:>/pn {:thing-value "a"}}
                               {:>/pn {:thing-value "b"}}
                               {:>/pn {:thing-value "c"}}]}))
      (is (= 1 @counter))))

  (testing "n+1 batching on placeholders deep"
    (let [counter (atom 0)]
      (is (= (parser {::batch-counter counter} [{:list-of-things [{:>/pn [{:>/more [:thing-value]}]}]}])
             {:list-of-things [{:>/pn {:>/more {:thing-value "a"}}}
                               {:>/pn {:>/more {:thing-value "b"}}}
                               {:>/pn {:>/more {:thing-value "c"}}}]}))
      (is (= 1 @counter))))

  (testing "n+1 batching repeated"
    (let [counter (atom 0)]
      (is (= (parser {::batch-counter counter} [{:list-of-things [:thing-value]}])
             {:list-of-things [{:thing-value "a"}
                               {:thing-value "b"}
                               {:thing-value "c"}]}))
      (is (= 1 @counter))))

  (testing "n+1 batching with linked dep"
    (let [counter (atom 0)]
      (is (= (parser {::batch-counter counter} [{:list-of-things [:thing-value2]}])
             {:list-of-things [{:thing-value2 "a"}
                               {:thing-value2 "b"}
                               {:thing-value2 "c"}]}))
      (is (= 1 @counter)))))

(defmutation 'call/op
  {::pc/output [:user/id]}
  (fn [env input]
    {:user/id 1}))

(defmutation 'call/op-tmpids
  {::pc/output [:user/id]}
  (fn [env {:keys [user/id]}]
    {:user/id                          1
     :fulcro.client.primitives/tempids {id 1}}))

(swap! base-indexes assoc-in [::pc/mutations 'call/op-alias] {::pc/sym    'call/op
                                                              ::pc/output [:user/id]})

(deftest test-mutate
  (testing "calling simple operation"
    (is (= (parser {} ['(call/op {})])
           {'call/op {:user/id 1}})))

  (testing "calling simple operation aliased"
    (is (= (parser {} ['(call/op-alias {})])
           {'call/op-alias {:user/id 1}})))

  (testing "navigating on the mutation result"
    (is (= (parser {} [{'(call/op {}) [:user/id :user/name]}])
           {'call/op {:user/id 1, :user/name "Mel"}})))

  (testing "throw error on not found"
    (is (thrown-with-msg? #?(:clj clojure.lang.ExceptionInfo :cljs ExceptionInfo) #"Mutation not found"
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
                   pc/mutate-async

                   ::p/plugins
                   [(p/env-wrap-plugin #(assoc % ::pc/indexes @base-indexes))
                    (p/env-plugin {::p/reader             [p/map-reader pc/all-async-readers]
                                   ::pc/resolver-dispatch resolver-fn
                                   ::pc/mutate-dispatch   mutate-fn})
                    p/request-cache-plugin]}))

#?(:clj
   (deftest test-reader-async
     (testing "read async"
       (is (= (async/<!! (async-parser {} [:color-async]))
              {:color-async "blue"}))
       (is (= (async/<!! (async-parser {} [:color-async2]))
              {:color-async2 "blue-derived"})))
     (testing "n+1 batching"
       (let [counter (atom 0)]
         (is (= (async/<!! (async-parser {::batch-counter counter} [{:async-list-of-things [:async-thing-value]}]))
                {:async-list-of-things [{:async-thing-value "a"}
                                        {:async-thing-value "b"}
                                        {:async-thing-value "c"}]}))
         (is (= 1 @counter))))

     (testing "n+1 batching with chain deps"
       (let [counter (atom 0)]
         (is (= (async/<!! (async-parser {::batch-counter counter} [{:async-list-of-things [:async-thing-value2]}]))
                {:async-list-of-things [{:async-thing-value2 "a"}
                                        {:async-thing-value2 "b"}
                                        {:async-thing-value2 "c"}]}))
         (is (= 1 @counter))))))

#?(:clj
   (deftest test-mutate-async
     (testing "call mutation and parse response"
       (is (= (async/<!! (async-parser {} [{'(call/op-async {}) [:user/id :user/name]}]))
              {'call/op-async {:user/id 1, :user/name "Mel"}})))))

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
  (is (= (pc/data->shape {:foo [{:buz "baz"} "abc" {:it "nih"}]}) [{:foo [:buz :it]}]))
  (is (= (pc/data->shape {:z 10 :a 1 :b {:d 3 :e 4}}) [:a {:b [:d :e]} :z])))

(deftest test-output->provides
  (is (= (pc/output->provides []) #{}))
  (is (= (pc/output->provides [:a]) #{:a}))
  (is (= (pc/output->provides [:a {:b [:c]}]) #{:a :b}))
  (is (= (pc/output->provides ['(:a {:foo "bar"})]) #{:a})))

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
     (is (= (async/<!! (connect-async '{A #:com.wsscode.pathom.connect{:sym    A,
                                                                       :input  #{:*.t?+e?/!-!},
                                                                       :output [:*.t?+e?/!-!]}}
                         [{[:*.t?+e?/!-! 0] []}]))
            {[:*.t?+e?/!-! 0] {}}))

     (is (= (async/<!! (connect-async '{/                 #:com.wsscode.pathom.connect{:sym    /,
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

(def pindexes (atom {}))

(defmulti resolver-fn-p pc/resolver-dispatch)
(def defresolver-p (pc/resolver-factory resolver-fn-p pindexes))

(defresolver-p 'a
  {::pc/output [:a]}
  (fn [_ _] {:a 1}))

(defresolver-p 'a->b
  {::pc/input  #{:a}
   ::pc/output [:b]}
  (fn [_ {:keys [a]}] {:b (+ a 10)}))

(defresolver-p 'no-path-z
  {::pc/input  #{:z1}
   ::pc/output [:z2]}
  (fn [_ _] {}))

(defresolver-p 'no-path-z1
  {::pc/input  #{:z2}
   ::pc/output [:z3]}
  (fn [_ {:keys [z2]}] {:z3 (+ z2 10)}))

(defresolver-p 'coisas
  {::pc/output [{:c [:i]}]}
  (fn [_ _]
    {:c [{:i 1} {:i 2} {:i 3}]}))

(defresolver-p 'multi-path-blank
  {::pc/output [:multi-path]}
  (fn [_ _] {}))

(defresolver-p 'multi-path-error
  {::pc/output [:multi-path]}
  (fn [_ _] (throw (ex-info "Error" {}))))

(defresolver-p 'multi-path-value
  {::pc/output [:multi-path]}
  (fn [_ _] {:multi-path "X"}))

(comment
  (let [weights (atom {'multi-path-error 5
                       'multi-path-blank 10
                       'multi-path-value 50})]
    (call-parallel-reader {::pc/resolver-weights weights} :multi-path)))

(def i->l
  {1 "a"
   2 "b"
   3 "c"})

(defresolver-p 'i->l
  {::pc/input  #{:i}
   ::pc/output [:l]
   ::pc/batch? true}
  (pc/batch-resolver
    (fn [_ {:keys [i]}]
      {:l (get i->l i)})
    (fn [_ i-values]
      (mapv #(hash-map :l (get i->l (:i %))) i-values))))

(defresolver-p 'error
  {::pc/output [:error]}
  (fn [_ _]
    (throw (ex-info "Error" {}))))

(defresolver-p 'error-batch
  {::pc/input  #{:i}
   ::pc/output [:error-batch]
   ::pc/batch? true}
  (fn [_ _]
    (throw (ex-info "Error" {}))))

(defresolver-p 'error->d
  {::pc/input  #{:error}
   ::pc/output [:d]}
  (fn [_ _]
    {:d 3}))

(defresolver-p 'invalid
  {::pc/output [:invalid]}
  (fn [_ _]
    42))

(defonce trace (atom []))

(defn parallel-env-base []
  {::pc/indexes           @pindexes
   ::pc/resolver-dispatch resolver-fn-p
   ::pt/trace*            trace
   ::p/entity             (atom {})
   ::pp/key-watchers      (atom {})
   ::p/errors*            (atom {})})

(defn parallel-env [key]
  (assoc (parallel-env-base) :ast (p/query->ast1 [key])))

#?(:clj
   (defn call-parallel-reader [env key]
     (reset! trace [])
     (let [res (pc/parallel-reader (merge (parallel-env key) {::p/path [key]} env))]
       (if (::pp/response-stream res)
         (update res ::pp/response-stream (fn [x] (async/<!! (async/into [] x))))
         res))))

(defn comparable-trace [trace]
  (mapv #(dissoc % ::pt/timestamp ::pt/id) trace))

(deftest test-path-cost
  (is (= (pc/path-cost {} ['a 'b 'c])
         3))

  (is (= (pc/path-cost {::pc/resolver-weights (atom {'a 3 'b 10 'c 4})} ['a 'b 'c])
         17))

  (is (= (pc/path-cost {::pc/resolver-weights (atom {'a 42})} ['a])
         42))

  (is (= (pc/path-cost {::pc/resolver-weights (atom {'a 42})
                        ::p/entity            {:x 30 :y 40}
                        ::pc/indexes          {::pc/index-resolvers {'a {::pc/input #{:x}}}}
                        ::p/request-cache     (atom {['a {:x 30}] {}})} ['a])
         1)))

(deftest test-decrease-path-costs
  (let [weights (atom {'a 50 'b 400 'c 200})]
    (pc/decrease-path-costs {::pc/resolver-weights weights} [[[:a 'a] [:b 'b]]
                                                             [[:d 'e]]])
    (is (= @weights '{a 40, b 390, c 200, e 1}))))

#?(:clj
   (deftest test-parallel
     (testing "attribute not available"
       (is (= (pc/parallel-reader (parallel-env :not-available))
              ::p/continue)))

     (testing "simple attribute"
       (is (= (call-parallel-reader {} :a)
              #:com.wsscode.pathom.parser{:provides        #{:a}
                                          :response-stream [#:com.wsscode.pathom.parser{:provides       #{:a}
                                                                                        :response-value {:a 1}}]}))
       (is (= (comparable-trace @trace)
              '[{:com.wsscode.pathom.core/path       [:a]
                 :com.wsscode.pathom.trace/direction :com.wsscode.pathom.trace/enter
                 :com.wsscode.pathom.trace/event     :com.wsscode.pathom.connect/compute-plan}
                {:com.wsscode.pathom.connect/plan    (([:a
                                                        a]))
                 :com.wsscode.pathom.core/path       [:a]
                 :com.wsscode.pathom.trace/direction :com.wsscode.pathom.trace/leave
                 :com.wsscode.pathom.trace/event     :com.wsscode.pathom.connect/compute-plan}
                {:com.wsscode.pathom.connect/input-data {}
                 :com.wsscode.pathom.connect/sym        a
                 :com.wsscode.pathom.core/path          [:a]
                 :com.wsscode.pathom.trace/event        :com.wsscode.pathom.connect/call-resolver-with-cache
                 :key                                   :a}
                {:com.wsscode.pathom.connect/input-data {}
                 :com.wsscode.pathom.connect/sym        a
                 :com.wsscode.pathom.core/path          [:a]
                 :com.wsscode.pathom.trace/direction    :com.wsscode.pathom.trace/enter
                 :com.wsscode.pathom.trace/event        :com.wsscode.pathom.connect/call-resolver
                 :key                                   :a}
                {:com.wsscode.pathom.core/path       [:a]
                 :com.wsscode.pathom.trace/direction :com.wsscode.pathom.trace/leave
                 :com.wsscode.pathom.trace/event     :com.wsscode.pathom.connect/call-resolver}
                {:com.wsscode.pathom.connect/sym a
                 :com.wsscode.pathom.core/path   [:a]
                 :com.wsscode.pathom.trace/event :com.wsscode.pathom.connect/merge-resolver-response
                 :key                            :a}])))

     (testing "using thread pool"
       (let [pool (pc/create-thread-pool 1 (async/chan 10))]
         (is (= (call-parallel-reader {::pc/pool-chan pool} :a)
                #:com.wsscode.pathom.parser{:provides        #{:a}
                                            :response-stream [#:com.wsscode.pathom.parser{:provides       #{:a}
                                                                                          :response-value {:a 1}}]}))
         (is (= (comparable-trace @trace)
                '[{:com.wsscode.pathom.core/path       [:a]
                   :com.wsscode.pathom.trace/direction :com.wsscode.pathom.trace/enter
                   :com.wsscode.pathom.trace/event     :com.wsscode.pathom.connect/compute-plan}
                  {:com.wsscode.pathom.connect/plan    (([:a
                                                          a]))
                   :com.wsscode.pathom.core/path       [:a]
                   :com.wsscode.pathom.trace/direction :com.wsscode.pathom.trace/leave
                   :com.wsscode.pathom.trace/event     :com.wsscode.pathom.connect/compute-plan}
                  {:com.wsscode.pathom.connect/input-data {}
                   :com.wsscode.pathom.connect/sym        a
                   :com.wsscode.pathom.core/path          [:a]
                   :com.wsscode.pathom.trace/event        :com.wsscode.pathom.connect/call-resolver-with-cache
                   :key                                   :a}
                  {:com.wsscode.pathom.connect/input-data {}
                   :com.wsscode.pathom.connect/sym        a
                   :com.wsscode.pathom.core/path          [:a]
                   :com.wsscode.pathom.trace/direction    :com.wsscode.pathom.trace/enter
                   :com.wsscode.pathom.trace/event        :com.wsscode.pathom.connect/schedule-resolver
                   :key                                   :a}
                  {:com.wsscode.pathom.core/path       [:a]
                   :com.wsscode.pathom.trace/direction :com.wsscode.pathom.trace/leave
                   :com.wsscode.pathom.trace/event     :com.wsscode.pathom.connect/schedule-resolver}
                  {:com.wsscode.pathom.connect/input-data {}
                   :com.wsscode.pathom.connect/sym        a
                   :com.wsscode.pathom.core/path          [:a]
                   :com.wsscode.pathom.trace/direction    :com.wsscode.pathom.trace/enter
                   :com.wsscode.pathom.trace/event        :com.wsscode.pathom.connect/call-resolver
                   :key                                   :a}
                  {:com.wsscode.pathom.core/path       [:a]
                   :com.wsscode.pathom.trace/direction :com.wsscode.pathom.trace/leave
                   :com.wsscode.pathom.trace/event     :com.wsscode.pathom.connect/call-resolver}
                  {:com.wsscode.pathom.connect/sym a
                   :com.wsscode.pathom.core/path   [:a]
                   :com.wsscode.pathom.trace/event :com.wsscode.pathom.connect/merge-resolver-response
                   :key                            :a}]))

         (async/close! pool)))

     (testing "decrease resolver weight"
       (with-redefs [pt/now (fn [] 0)]
         (let [weights (atom {'a 52})]
           (is (= (call-parallel-reader {::pc/resolver-weights weights} :a)
                  #:com.wsscode.pathom.parser{:provides        #{:a}
                                              :response-stream [#:com.wsscode.pathom.parser{:provides       #{:a}
                                                                                            :response-value {:a 1}}]}))
           (is (= @weights '{a 25.5})))))

     (testing "pick alternative path from value"
       (with-redefs [pt/now (fn [] 0)]
         (let [weights (atom {'multi-path-blank 10
                              'multi-path-value 50
                              'multi-path-error 100})]
           (is (= (call-parallel-reader {::pc/resolver-weights weights} :multi-path)
                  #:com.wsscode.pathom.parser{:provides        #{:multi-path}
                                              :response-stream [#:com.wsscode.pathom.parser{:provides       #{:multi-path}
                                                                                            :response-value {}
                                                                                            :waiting        #{:multi-path}}
                                                                #:com.wsscode.pathom.parser{:provides       #{:multi-path}
                                                                                            :response-value {:multi-path "X"}}]}))
           (is (= @weights '{multi-path-blank 9.0
                             multi-path-error 98
                             multi-path-value 24.0})))))

     (testing "pick alternative path from error"
       (with-redefs [pt/now (fn [] 0)]
         (let [weights (atom {'multi-path-error 5
                              'multi-path-blank 10
                              'multi-path-value 50})]
           (is (= (call-parallel-reader {::pc/resolver-weights weights} :multi-path)
                  #:com.wsscode.pathom.parser{:provides        #{:multi-path}
                                              :response-stream [#:com.wsscode.pathom.parser{:provides       #{:multi-path}
                                                                                            :response-value {}
                                                                                            :waiting        #{:multi-path}}
                                                                #:com.wsscode.pathom.parser{:provides       #{:multi-path}
                                                                                            :response-value {}
                                                                                            :waiting        #{:multi-path}}
                                                                #:com.wsscode.pathom.parser{:provides       #{:multi-path}
                                                                                            :response-value {:multi-path "X"}}]}))
           (is (= @weights '{multi-path-blank 8.0
                             multi-path-error 4.0
                             multi-path-value 23.5}))
           (call-parallel-reader {::pc/resolver-weights weights} :multi-path)
           (call-parallel-reader {::pc/resolver-weights weights} :multi-path)
           (call-parallel-reader {::pc/resolver-weights weights} :multi-path)
           (is (= @weights '{multi-path-blank 2.0
                             multi-path-error 1.0
                             multi-path-value 0.8125})))))

     (testing "multi step resolver"
       (is (= (call-parallel-reader {} :b)
              #:com.wsscode.pathom.parser{:provides        #{:a
                                                             :b}
                                          :response-stream [#:com.wsscode.pathom.parser{:provides       #{:a}
                                                                                        :response-value {:a 1}}
                                                            #:com.wsscode.pathom.parser{:provides       #{:b}
                                                                                        :response-value {:b 11}}]}))
       (is (= (comparable-trace @trace)
              '[{:com.wsscode.pathom.core/path       [:b]
                 :com.wsscode.pathom.trace/direction :com.wsscode.pathom.trace/enter
                 :com.wsscode.pathom.trace/event     :com.wsscode.pathom.connect/compute-plan}
                {:com.wsscode.pathom.connect/plan    (([:a
                                                        a]
                                                        [:b
                                                         a->b]))
                 :com.wsscode.pathom.core/path       [:b]
                 :com.wsscode.pathom.trace/direction :com.wsscode.pathom.trace/leave
                 :com.wsscode.pathom.trace/event     :com.wsscode.pathom.connect/compute-plan}
                {:com.wsscode.pathom.connect/input-data {}
                 :com.wsscode.pathom.connect/sym        a
                 :com.wsscode.pathom.core/path          [:b]
                 :com.wsscode.pathom.trace/event        :com.wsscode.pathom.connect/call-resolver-with-cache
                 :key                                   :b}
                {:com.wsscode.pathom.connect/input-data {}
                 :com.wsscode.pathom.connect/sym        a
                 :com.wsscode.pathom.core/path          [:b]
                 :com.wsscode.pathom.trace/direction    :com.wsscode.pathom.trace/enter
                 :com.wsscode.pathom.trace/event        :com.wsscode.pathom.connect/call-resolver
                 :key                                   :b}
                {:com.wsscode.pathom.core/path       [:b]
                 :com.wsscode.pathom.trace/direction :com.wsscode.pathom.trace/leave
                 :com.wsscode.pathom.trace/event     :com.wsscode.pathom.connect/call-resolver}
                {:com.wsscode.pathom.connect/sym a
                 :com.wsscode.pathom.core/path   [:b]
                 :com.wsscode.pathom.trace/event :com.wsscode.pathom.connect/merge-resolver-response
                 :key                            :b}
                {:com.wsscode.pathom.connect/input-data {:a 1}
                 :com.wsscode.pathom.connect/sym        a->b
                 :com.wsscode.pathom.core/path          [:b]
                 :com.wsscode.pathom.trace/event        :com.wsscode.pathom.connect/call-resolver-with-cache
                 :key                                   :b}
                {:com.wsscode.pathom.connect/input-data {:a 1}
                 :com.wsscode.pathom.connect/sym        a->b
                 :com.wsscode.pathom.core/path          [:b]
                 :com.wsscode.pathom.trace/direction    :com.wsscode.pathom.trace/enter
                 :com.wsscode.pathom.trace/event        :com.wsscode.pathom.connect/call-resolver
                 :key                                   :b}
                {:com.wsscode.pathom.core/path       [:b]
                 :com.wsscode.pathom.trace/direction :com.wsscode.pathom.trace/leave
                 :com.wsscode.pathom.trace/event     :com.wsscode.pathom.connect/call-resolver}
                {:com.wsscode.pathom.connect/sym a->b
                 :com.wsscode.pathom.core/path   [:b]
                 :com.wsscode.pathom.trace/event :com.wsscode.pathom.connect/merge-resolver-response
                 :key                            :b}])))

     (testing "multi step resolver waiting"
       (let [kw (atom {})
             e  (atom {})]
         (go
           (async/<! (async/timeout 10))
           (swap! e assoc :a 2)
           (async/>! (-> @kw :a first) {}))

         (is (= (call-parallel-reader {::pp/waiting      #{:a}
                                       ::pp/key-watchers kw
                                       ::p/entity        e} :b)
                #:com.wsscode.pathom.parser{:provides        #{:a
                                                               :b}
                                            :response-stream [#:com.wsscode.pathom.parser{:provides       #{:b}
                                                                                          :response-value {:b 12}}]}))

         (is (= (comparable-trace @trace)
                '[{:com.wsscode.pathom.core/path       [:b]
                   :com.wsscode.pathom.trace/direction :com.wsscode.pathom.trace/enter
                   :com.wsscode.pathom.trace/event     :com.wsscode.pathom.connect/compute-plan}
                  {:com.wsscode.pathom.connect/plan    (([:a
                                                          a]
                                                          [:b
                                                           a->b]))
                   :com.wsscode.pathom.core/path       [:b]
                   :com.wsscode.pathom.trace/direction :com.wsscode.pathom.trace/leave
                   :com.wsscode.pathom.trace/event     :com.wsscode.pathom.connect/compute-plan}
                  {:com.wsscode.pathom.connect/input-data  {}
                   :com.wsscode.pathom.connect/sym         a
                   :com.wsscode.pathom.connect/waiting-key :a
                   :com.wsscode.pathom.core/path           [:b]
                   :com.wsscode.pathom.trace/event         :com.wsscode.pathom.connect/waiting-resolver
                   :key                                    :b}
                  {:com.wsscode.pathom.connect/input-data {:a 2}
                   :com.wsscode.pathom.connect/sym        a->b
                   :com.wsscode.pathom.core/path          [:b]
                   :com.wsscode.pathom.trace/event        :com.wsscode.pathom.connect/call-resolver-with-cache
                   :key                                   :b}
                  {:com.wsscode.pathom.connect/input-data {:a 2}
                   :com.wsscode.pathom.connect/sym        a->b
                   :com.wsscode.pathom.core/path          [:b]
                   :com.wsscode.pathom.trace/direction    :com.wsscode.pathom.trace/enter
                   :com.wsscode.pathom.trace/event        :com.wsscode.pathom.connect/call-resolver
                   :key                                   :b}
                  {:com.wsscode.pathom.core/path       [:b]
                   :com.wsscode.pathom.trace/direction :com.wsscode.pathom.trace/leave
                   :com.wsscode.pathom.trace/event     :com.wsscode.pathom.connect/call-resolver}
                  {:com.wsscode.pathom.connect/sym a->b
                   :com.wsscode.pathom.core/path   [:b]
                   :com.wsscode.pathom.trace/event :com.wsscode.pathom.connect/merge-resolver-response
                   :key                            :b}]))))

     (testing "multi step resolver when previous value is available"
       (is (= (call-parallel-reader {::pp/waiting #{:a}
                                     ::p/entity   (atom {:a 2})} :b)
              #:com.wsscode.pathom.parser{:provides        #{:b}
                                          :response-stream [#:com.wsscode.pathom.parser{:provides       #{:b}
                                                                                        :response-value {:b 12}}]}))
       (is (= (comparable-trace @trace)
              '[{:com.wsscode.pathom.core/path       [:b]
                 :com.wsscode.pathom.trace/direction :com.wsscode.pathom.trace/enter
                 :com.wsscode.pathom.trace/event     :com.wsscode.pathom.connect/compute-plan}
                {:com.wsscode.pathom.connect/plan    (([:b
                                                        a->b]))
                 :com.wsscode.pathom.core/path       [:b]
                 :com.wsscode.pathom.trace/direction :com.wsscode.pathom.trace/leave
                 :com.wsscode.pathom.trace/event     :com.wsscode.pathom.connect/compute-plan}
                {:com.wsscode.pathom.connect/input-data {:a 2}
                 :com.wsscode.pathom.connect/sym        a->b
                 :com.wsscode.pathom.core/path          [:b]
                 :com.wsscode.pathom.trace/event        :com.wsscode.pathom.connect/call-resolver-with-cache
                 :key                                   :b}
                {:com.wsscode.pathom.connect/input-data {:a 2}
                 :com.wsscode.pathom.connect/sym        a->b
                 :com.wsscode.pathom.core/path          [:b]
                 :com.wsscode.pathom.trace/direction    :com.wsscode.pathom.trace/enter
                 :com.wsscode.pathom.trace/event        :com.wsscode.pathom.connect/call-resolver
                 :key                                   :b}
                {:com.wsscode.pathom.core/path       [:b]
                 :com.wsscode.pathom.trace/direction :com.wsscode.pathom.trace/leave
                 :com.wsscode.pathom.trace/event     :com.wsscode.pathom.connect/call-resolver}
                {:com.wsscode.pathom.connect/sym a->b
                 :com.wsscode.pathom.core/path   [:b]
                 :com.wsscode.pathom.trace/event :com.wsscode.pathom.connect/merge-resolver-response
                 :key                            :b}])))

     (testing "multi step resolver when previous value is not available"
       (is (= (call-parallel-reader {::p/entity (atom {:z1 5})} :z3)
              #:com.wsscode.pathom.parser{:provides        #{:z2
                                                             :z3}
                                          :response-stream [#:com.wsscode.pathom.parser{:provides       #{:z2
                                                                                                          :z3}
                                                                                        :response-value {}}]}))
       (is (= (comparable-trace @trace)
              '[{:com.wsscode.pathom.core/path       [:z3]
                 :com.wsscode.pathom.trace/direction :com.wsscode.pathom.trace/enter
                 :com.wsscode.pathom.trace/event     :com.wsscode.pathom.connect/compute-plan}
                {:com.wsscode.pathom.connect/plan    (([:z2
                                                        no-path-z]
                                                        [:z3
                                                         no-path-z1]))
                 :com.wsscode.pathom.core/path       [:z3]
                 :com.wsscode.pathom.trace/direction :com.wsscode.pathom.trace/leave
                 :com.wsscode.pathom.trace/event     :com.wsscode.pathom.connect/compute-plan}
                {:com.wsscode.pathom.connect/input-data {:z1 5}
                 :com.wsscode.pathom.connect/sym        no-path-z
                 :com.wsscode.pathom.core/path          [:z3]
                 :com.wsscode.pathom.trace/event        :com.wsscode.pathom.connect/call-resolver-with-cache
                 :key                                   :z3}
                {:com.wsscode.pathom.connect/input-data {:z1 5}
                 :com.wsscode.pathom.connect/sym        no-path-z
                 :com.wsscode.pathom.core/path          [:z3]
                 :com.wsscode.pathom.trace/direction    :com.wsscode.pathom.trace/enter
                 :com.wsscode.pathom.trace/event        :com.wsscode.pathom.connect/call-resolver
                 :key                                   :z3}
                {:com.wsscode.pathom.core/path       [:z3]
                 :com.wsscode.pathom.trace/direction :com.wsscode.pathom.trace/leave
                 :com.wsscode.pathom.trace/event     :com.wsscode.pathom.connect/call-resolver}
                {:com.wsscode.pathom.core/path       [:z3]
                 :com.wsscode.pathom.trace/direction :com.wsscode.pathom.trace/enter
                 :com.wsscode.pathom.trace/event     :com.wsscode.pathom.connect/compute-plan}
                {:com.wsscode.pathom.core/path       [:z3]
                 :com.wsscode.pathom.trace/direction :com.wsscode.pathom.trace/leave
                 :com.wsscode.pathom.trace/event     :com.wsscode.pathom.connect/compute-plan}])))

     (testing "use cache when available"
       (is (= (call-parallel-reader {::p/request-cache (atom {['a {}] (go-promise {:a 3})})} :b)
              #:com.wsscode.pathom.parser{:provides        #{:a :b}
                                          :response-stream [#:com.wsscode.pathom.parser{:provides       #{:a}
                                                                                        :response-value {:a 3}}
                                                            #:com.wsscode.pathom.parser{:provides       #{:b}
                                                                                        :response-value {:b 13}}]}))

       (is (= (comparable-trace @trace)
              '[{:com.wsscode.pathom.core/path       [:b]
                 :com.wsscode.pathom.trace/direction :com.wsscode.pathom.trace/enter
                 :com.wsscode.pathom.trace/event     :com.wsscode.pathom.connect/compute-plan}
                {:com.wsscode.pathom.connect/plan    (([:a
                                                        a]
                                                        [:b
                                                         a->b]))
                 :com.wsscode.pathom.core/path       [:b]
                 :com.wsscode.pathom.trace/direction :com.wsscode.pathom.trace/leave
                 :com.wsscode.pathom.trace/event     :com.wsscode.pathom.connect/compute-plan}
                {:com.wsscode.pathom.connect/input-data {}
                 :com.wsscode.pathom.connect/sym        a
                 :com.wsscode.pathom.core/path          [:b]
                 :com.wsscode.pathom.trace/event        :com.wsscode.pathom.connect/call-resolver-with-cache
                 :key                                   :b}
                {:com.wsscode.pathom.core/cache-key [a
                                                     {}]
                 :com.wsscode.pathom.core/path      [:b]
                 :com.wsscode.pathom.trace/event    :com.wsscode.pathom.core/cache-hit}
                {:com.wsscode.pathom.connect/sym a
                 :com.wsscode.pathom.core/path   [:b]
                 :com.wsscode.pathom.trace/event :com.wsscode.pathom.connect/merge-resolver-response
                 :key                            :b}
                {:com.wsscode.pathom.connect/input-data {:a 3}
                 :com.wsscode.pathom.connect/sym        a->b
                 :com.wsscode.pathom.core/path          [:b]
                 :com.wsscode.pathom.trace/event        :com.wsscode.pathom.connect/call-resolver-with-cache
                 :key                                   :b}
                {:com.wsscode.pathom.core/cache-key [a->b
                                                     {:a 3}]
                 :com.wsscode.pathom.core/path      [:b]
                 :com.wsscode.pathom.trace/event    :com.wsscode.pathom.core/cache-miss}
                {:com.wsscode.pathom.connect/input-data {:a 3}
                 :com.wsscode.pathom.connect/sym        a->b
                 :com.wsscode.pathom.core/path          [:b]
                 :com.wsscode.pathom.trace/direction    :com.wsscode.pathom.trace/enter
                 :com.wsscode.pathom.trace/event        :com.wsscode.pathom.connect/call-resolver
                 :key                                   :b}
                {:com.wsscode.pathom.core/path       [:b]
                 :com.wsscode.pathom.trace/direction :com.wsscode.pathom.trace/leave
                 :com.wsscode.pathom.trace/event     :com.wsscode.pathom.connect/call-resolver}
                {:com.wsscode.pathom.connect/sym a->b
                 :com.wsscode.pathom.core/path   [:b]
                 :com.wsscode.pathom.trace/event :com.wsscode.pathom.connect/merge-resolver-response
                 :key                            :b}])))

     (testing "use cache with batch"
       (let [cache (atom {})]
         (is (= (call-parallel-reader {::p/request-cache       cache
                                       ::p/entity              (atom {:i 1})
                                       ::p/processing-sequence [{:i 1} {:i 2} {:i 3}]} :l)
                #:com.wsscode.pathom.parser{:provides        #{:l}
                                            :response-stream [#:com.wsscode.pathom.parser{:provides       #{:l}
                                                                                          :response-value {:l "a"}}]}))
         (is (= (into {} (map (fn [[k v]] [k (async/<!! v)])) @cache)
                '{[i->l
                   {:i 1}] {:l "a"}
                  [i->l
                   {:i 2}] {:l "b"}
                  [i->l
                   {:i 3}] {:l "c"}}))

         (is (= (comparable-trace @trace)
                '[{:com.wsscode.pathom.core/path       [:l]
                   :com.wsscode.pathom.trace/direction :com.wsscode.pathom.trace/enter
                   :com.wsscode.pathom.trace/event     :com.wsscode.pathom.connect/compute-plan}
                  {:com.wsscode.pathom.connect/plan    (([:l
                                                          i->l]))
                   :com.wsscode.pathom.core/path       [:l]
                   :com.wsscode.pathom.trace/direction :com.wsscode.pathom.trace/leave
                   :com.wsscode.pathom.trace/event     :com.wsscode.pathom.connect/compute-plan}
                  {:com.wsscode.pathom.connect/input-data {:i 1}
                   :com.wsscode.pathom.connect/sym        i->l
                   :com.wsscode.pathom.core/path          [:l]
                   :com.wsscode.pathom.trace/direction    :com.wsscode.pathom.trace/enter
                   :com.wsscode.pathom.trace/event        :com.wsscode.pathom.connect/call-resolver-batch
                   :key                                   :l}
                  {:com.wsscode.pathom.connect/items [{:i 1}
                                                      {:i 2}
                                                      {:i 3}]
                   :com.wsscode.pathom.core/path     [:l]
                   :com.wsscode.pathom.trace/event   :com.wsscode.pathom.connect/batch-items-ready}
                  {:com.wsscode.pathom.connect/input-data [{:i 1}
                                                           {:i 2}
                                                           {:i 3}]
                   :com.wsscode.pathom.connect/sym        i->l
                   :com.wsscode.pathom.core/path          [:l]
                   :com.wsscode.pathom.trace/direction    :com.wsscode.pathom.trace/enter
                   :com.wsscode.pathom.trace/event        :com.wsscode.pathom.connect/call-resolver
                   :key                                   :l}
                  {:com.wsscode.pathom.core/path       [:l]
                   :com.wsscode.pathom.trace/direction :com.wsscode.pathom.trace/leave
                   :com.wsscode.pathom.trace/event     :com.wsscode.pathom.connect/call-resolver}
                  {:com.wsscode.pathom.connect/items-count 3
                   :com.wsscode.pathom.core/path           [:l]
                   :com.wsscode.pathom.trace/event         :com.wsscode.pathom.connect/batch-result-ready}
                  {:com.wsscode.pathom.core/cache-key [i->l
                                                       {:i 1}]
                   :com.wsscode.pathom.core/path      [:l]
                   :com.wsscode.pathom.trace/event    :com.wsscode.pathom.core/cache-miss}
                  {:com.wsscode.pathom.core/cache-key [i->l
                                                       {:i 2}]
                   :com.wsscode.pathom.core/path      [:l]
                   :com.wsscode.pathom.trace/event    :com.wsscode.pathom.core/cache-miss}
                  {:com.wsscode.pathom.core/cache-key [i->l
                                                       {:i 3}]
                   :com.wsscode.pathom.core/path      [:l]
                   :com.wsscode.pathom.trace/event    :com.wsscode.pathom.core/cache-miss}
                  {:com.wsscode.pathom.connect/input-data {:i 1}
                   :com.wsscode.pathom.connect/sym        i->l
                   :com.wsscode.pathom.core/path          [:l]
                   :com.wsscode.pathom.trace/direction    :com.wsscode.pathom.trace/leave
                   :com.wsscode.pathom.trace/event        :com.wsscode.pathom.connect/call-resolver-batch
                   :key                                   :l}
                  {:com.wsscode.pathom.connect/sym i->l
                   :com.wsscode.pathom.core/path   [:l]
                   :com.wsscode.pathom.trace/event :com.wsscode.pathom.connect/merge-resolver-response
                   :key                            :l}]))))

     (testing "attribute can't be resolved because of an error"
       (let [errors (atom {})]
         (is (= (call-parallel-reader {::p/errors* errors} :error)
                #:com.wsscode.pathom.parser{:provides        #{:error}
                                            :response-stream [#:com.wsscode.pathom.parser{:provides       #{:error}
                                                                                          :response-value {:error :com.wsscode.pathom.core/reader-error}}]}))
         (is (= @errors {[:error] "class clojure.lang.ExceptionInfo: Error - {}"}))
         (is (= (comparable-trace @trace)
                '[{:com.wsscode.pathom.core/path       [:error]
                   :com.wsscode.pathom.trace/direction :com.wsscode.pathom.trace/enter
                   :com.wsscode.pathom.trace/event     :com.wsscode.pathom.connect/compute-plan}
                  {:com.wsscode.pathom.connect/plan    (([:error
                                                          error]))
                   :com.wsscode.pathom.core/path       [:error]
                   :com.wsscode.pathom.trace/direction :com.wsscode.pathom.trace/leave
                   :com.wsscode.pathom.trace/event     :com.wsscode.pathom.connect/compute-plan}
                  {:com.wsscode.pathom.connect/input-data {}
                   :com.wsscode.pathom.connect/sym        error
                   :com.wsscode.pathom.core/path          [:error]
                   :com.wsscode.pathom.trace/event        :com.wsscode.pathom.connect/call-resolver-with-cache
                   :key                                   :error}
                  {:com.wsscode.pathom.connect/input-data {}
                   :com.wsscode.pathom.connect/sym        error
                   :com.wsscode.pathom.core/path          [:error]
                   :com.wsscode.pathom.trace/direction    :com.wsscode.pathom.trace/enter
                   :com.wsscode.pathom.trace/event        :com.wsscode.pathom.connect/call-resolver
                   :key                                   :error}
                  {:com.wsscode.pathom.core/path       [:error]
                   :com.wsscode.pathom.trace/direction :com.wsscode.pathom.trace/leave
                   :com.wsscode.pathom.trace/event     :com.wsscode.pathom.connect/call-resolver}
                  {:com.wsscode.pathom.core/path       [:error]
                   :com.wsscode.pathom.trace/direction :com.wsscode.pathom.trace/enter
                   :com.wsscode.pathom.trace/event     :com.wsscode.pathom.connect/compute-plan}
                  {:com.wsscode.pathom.core/path       [:error]
                   :com.wsscode.pathom.trace/direction :com.wsscode.pathom.trace/leave
                   :com.wsscode.pathom.trace/event     :com.wsscode.pathom.connect/compute-plan}
                  {:com.wsscode.pathom.connect/sym error
                   :com.wsscode.pathom.core/path   [:error]
                   :com.wsscode.pathom.trace/event :com.wsscode.pathom.connect/resolver-error
                   :key                            :error}]))))

     (testing "attribute with dependency can't be resolved because of an error"
       (let [errors (atom {})]
         (is (= (call-parallel-reader {::p/errors* errors} :d)
                #:com.wsscode.pathom.parser{:provides        #{:d :error}
                                            :response-stream [#:com.wsscode.pathom.parser{:provides       #{:d :error}
                                                                                          :response-value {:d     :com.wsscode.pathom.core/reader-error
                                                                                                           :error :com.wsscode.pathom.core/reader-error}}]}))
         (is (= @errors {[:d] "class clojure.lang.ExceptionInfo: Error - {}"}))
         (is (= (comparable-trace @trace)
                '[{:com.wsscode.pathom.core/path       [:d]
                   :com.wsscode.pathom.trace/direction :com.wsscode.pathom.trace/enter
                   :com.wsscode.pathom.trace/event     :com.wsscode.pathom.connect/compute-plan}
                  {:com.wsscode.pathom.connect/plan    (([:error
                                                          error]
                                                          [:d
                                                           error->d]))
                   :com.wsscode.pathom.core/path       [:d]
                   :com.wsscode.pathom.trace/direction :com.wsscode.pathom.trace/leave
                   :com.wsscode.pathom.trace/event     :com.wsscode.pathom.connect/compute-plan}
                  {:com.wsscode.pathom.connect/input-data {}
                   :com.wsscode.pathom.connect/sym        error
                   :com.wsscode.pathom.core/path          [:d]
                   :com.wsscode.pathom.trace/event        :com.wsscode.pathom.connect/call-resolver-with-cache
                   :key                                   :d}
                  {:com.wsscode.pathom.connect/input-data {}
                   :com.wsscode.pathom.connect/sym        error
                   :com.wsscode.pathom.core/path          [:d]
                   :com.wsscode.pathom.trace/direction    :com.wsscode.pathom.trace/enter
                   :com.wsscode.pathom.trace/event        :com.wsscode.pathom.connect/call-resolver
                   :key                                   :d}
                  {:com.wsscode.pathom.core/path       [:d]
                   :com.wsscode.pathom.trace/direction :com.wsscode.pathom.trace/leave
                   :com.wsscode.pathom.trace/event     :com.wsscode.pathom.connect/call-resolver}
                  {:com.wsscode.pathom.core/path       [:d]
                   :com.wsscode.pathom.trace/direction :com.wsscode.pathom.trace/enter
                   :com.wsscode.pathom.trace/event     :com.wsscode.pathom.connect/compute-plan}
                  {:com.wsscode.pathom.core/path       [:d]
                   :com.wsscode.pathom.trace/direction :com.wsscode.pathom.trace/leave
                   :com.wsscode.pathom.trace/event     :com.wsscode.pathom.connect/compute-plan}
                  {:com.wsscode.pathom.connect/sym error
                   :com.wsscode.pathom.core/path   [:d]
                   :com.wsscode.pathom.trace/event :com.wsscode.pathom.connect/resolver-error
                   :key                            :d}]))))

     (testing "attribute with a dependency of a previously fetched error"
       (let [errors (atom {})]
         (is (= (call-parallel-reader {::p/errors* errors
                                       ::p/entity  (atom {:a ::p/reader-error})} :b)
                :com.wsscode.pathom.core/continue))
         (is (= @errors {}))
         (is (= (comparable-trace @trace)
                '[{:com.wsscode.pathom.core/path       [:b]
                   :com.wsscode.pathom.trace/direction :com.wsscode.pathom.trace/enter
                   :com.wsscode.pathom.trace/event     :com.wsscode.pathom.connect/compute-plan}
                  {:com.wsscode.pathom.core/path       [:b]
                   :com.wsscode.pathom.trace/direction :com.wsscode.pathom.trace/leave
                   :com.wsscode.pathom.trace/event     :com.wsscode.pathom.connect/compute-plan}]))))

     (testing "invalid response"
       (let [errors (atom {})]
         (is (= (call-parallel-reader {::p/errors* errors} :invalid)
                #:com.wsscode.pathom.parser{:provides        #{:invalid}
                                            :response-stream [#:com.wsscode.pathom.parser{:provides       #{:invalid}
                                                                                          :response-value {:invalid :com.wsscode.pathom.core/reader-error}}]}))
         (is (= @errors {[:invalid] "class clojure.lang.ExceptionInfo: Invalid resolve response - #:com.wsscode.pathom.parser{:response-value 42}"}))
         (is (= (comparable-trace @trace)
                '[{:com.wsscode.pathom.core/path       [:invalid]
                   :com.wsscode.pathom.trace/direction :com.wsscode.pathom.trace/enter
                   :com.wsscode.pathom.trace/event     :com.wsscode.pathom.connect/compute-plan}
                  {:com.wsscode.pathom.connect/plan    (([:invalid
                                                          invalid]))
                   :com.wsscode.pathom.core/path       [:invalid]
                   :com.wsscode.pathom.trace/direction :com.wsscode.pathom.trace/leave
                   :com.wsscode.pathom.trace/event     :com.wsscode.pathom.connect/compute-plan}
                  {:com.wsscode.pathom.connect/input-data {}
                   :com.wsscode.pathom.connect/sym        invalid
                   :com.wsscode.pathom.core/path          [:invalid]
                   :com.wsscode.pathom.trace/event        :com.wsscode.pathom.connect/call-resolver-with-cache
                   :key                                   :invalid}
                  {:com.wsscode.pathom.connect/input-data {}
                   :com.wsscode.pathom.connect/sym        invalid
                   :com.wsscode.pathom.core/path          [:invalid]
                   :com.wsscode.pathom.trace/direction    :com.wsscode.pathom.trace/enter
                   :com.wsscode.pathom.trace/event        :com.wsscode.pathom.connect/call-resolver
                   :key                                   :invalid}
                  {:com.wsscode.pathom.core/path       [:invalid]
                   :com.wsscode.pathom.trace/direction :com.wsscode.pathom.trace/leave
                   :com.wsscode.pathom.trace/event     :com.wsscode.pathom.connect/call-resolver}
                  {:com.wsscode.pathom.core/path       [:invalid]
                   :com.wsscode.pathom.trace/direction :com.wsscode.pathom.trace/enter
                   :com.wsscode.pathom.trace/event     :com.wsscode.pathom.connect/compute-plan}
                  {:com.wsscode.pathom.core/path       [:invalid]
                   :com.wsscode.pathom.trace/direction :com.wsscode.pathom.trace/leave
                   :com.wsscode.pathom.trace/event     :com.wsscode.pathom.connect/compute-plan}
                  {:com.wsscode.pathom.connect/sym           invalid
                   :com.wsscode.pathom.core/path             [:invalid]
                   :com.wsscode.pathom.parser/response-value 42
                   :com.wsscode.pathom.trace/event           :com.wsscode.pathom.connect/invalid-resolve-response
                   :key                                      :invalid}]))))

     (testing "error in batch"
       (let [cache  (atom {})
             errors (atom {})]
         (is (= (call-parallel-reader {::p/request-cache       cache
                                       ::p/path                [:list 0 :error-batch]
                                       ::p/entity              (atom {:i 1})
                                       ::p/errors*             errors
                                       ::p/processing-sequence [{:i 1} {:i 2} {:i 3}]} :error-batch)
                #:com.wsscode.pathom.parser{:provides        #{:error-batch}
                                            :response-stream [#:com.wsscode.pathom.parser{:provides       #{:error-batch}
                                                                                          :response-value {:error-batch :com.wsscode.pathom.core/reader-error}}]}))
         (is (= (into {} (map (fn [[k v]] [k (async/<!! v)])) @cache)
                '{[error-batch
                   {:i 1}] {:error-batch :com.wsscode.pathom.core/reader-error}
                  [error-batch
                   {:i 2}] {:error-batch :com.wsscode.pathom.core/reader-error}
                  [error-batch
                   {:i 3}] {:error-batch :com.wsscode.pathom.core/reader-error}}))

         (is (= @errors {[:list
                          0
                          :error-batch] "class clojure.lang.ExceptionInfo: Error - {}"
                         [:list
                          1
                          :error-batch] "class clojure.lang.ExceptionInfo: Error - {}"
                         [:list
                          2
                          :error-batch] "class clojure.lang.ExceptionInfo: Error - {}"}))

         (is (= (comparable-trace @trace)
                '[{:com.wsscode.pathom.core/path       [:list
                                                        0
                                                        :error-batch]
                   :com.wsscode.pathom.trace/direction :com.wsscode.pathom.trace/enter
                   :com.wsscode.pathom.trace/event     :com.wsscode.pathom.connect/compute-plan}
                  {:com.wsscode.pathom.connect/plan    (([:error-batch
                                                          error-batch]))
                   :com.wsscode.pathom.core/path       [:list
                                                        0
                                                        :error-batch]
                   :com.wsscode.pathom.trace/direction :com.wsscode.pathom.trace/leave
                   :com.wsscode.pathom.trace/event     :com.wsscode.pathom.connect/compute-plan}
                  {:com.wsscode.pathom.connect/input-data {:i 1}
                   :com.wsscode.pathom.connect/sym        error-batch
                   :com.wsscode.pathom.core/path          [:list
                                                           0
                                                           :error-batch]
                   :com.wsscode.pathom.trace/direction    :com.wsscode.pathom.trace/enter
                   :com.wsscode.pathom.trace/event        :com.wsscode.pathom.connect/call-resolver-batch
                   :key                                   :error-batch}
                  {:com.wsscode.pathom.connect/items [{:i 1}
                                                      {:i 2}
                                                      {:i 3}]
                   :com.wsscode.pathom.core/path     [:list
                                                      0
                                                      :error-batch]
                   :com.wsscode.pathom.trace/event   :com.wsscode.pathom.connect/batch-items-ready}
                  {:com.wsscode.pathom.connect/input-data [{:i 1}
                                                           {:i 2}
                                                           {:i 3}]
                   :com.wsscode.pathom.connect/sym        error-batch
                   :com.wsscode.pathom.core/path          [:list
                                                           0
                                                           :error-batch]
                   :com.wsscode.pathom.trace/direction    :com.wsscode.pathom.trace/enter
                   :com.wsscode.pathom.trace/event        :com.wsscode.pathom.connect/call-resolver
                   :key                                   :error-batch}
                  {:com.wsscode.pathom.core/path       [:list
                                                        0
                                                        :error-batch]
                   :com.wsscode.pathom.trace/direction :com.wsscode.pathom.trace/leave
                   :com.wsscode.pathom.trace/event     :com.wsscode.pathom.connect/call-resolver}
                  {:com.wsscode.pathom.core/path   [:list
                                                    0
                                                    :error-batch]
                   :com.wsscode.pathom.trace/event :com.wsscode.pathom.connect/batch-result-error
                   :error                          "class clojure.lang.ExceptionInfo: Error - {}"}
                  {:com.wsscode.pathom.connect/items-count 3
                   :com.wsscode.pathom.core/path           [:list
                                                            0
                                                            :error-batch]
                   :com.wsscode.pathom.trace/event         :com.wsscode.pathom.connect/batch-result-ready}
                  {:com.wsscode.pathom.core/cache-key [error-batch
                                                       {:i 1}]
                   :com.wsscode.pathom.core/path      [:list
                                                       0
                                                       :error-batch]
                   :com.wsscode.pathom.trace/event    :com.wsscode.pathom.core/cache-miss}
                  {:com.wsscode.pathom.core/cache-key [error-batch
                                                       {:i 2}]
                   :com.wsscode.pathom.core/path      [:list
                                                       0
                                                       :error-batch]
                   :com.wsscode.pathom.trace/event    :com.wsscode.pathom.core/cache-miss}
                  {:com.wsscode.pathom.core/cache-key [error-batch
                                                       {:i 3}]
                   :com.wsscode.pathom.core/path      [:list
                                                       0
                                                       :error-batch]
                   :com.wsscode.pathom.trace/event    :com.wsscode.pathom.core/cache-miss}
                  {:com.wsscode.pathom.connect/input-data {:i 1}
                   :com.wsscode.pathom.connect/sym        error-batch
                   :com.wsscode.pathom.core/path          [:list
                                                           0
                                                           :error-batch]
                   :com.wsscode.pathom.trace/direction    :com.wsscode.pathom.trace/leave
                   :com.wsscode.pathom.trace/event        :com.wsscode.pathom.connect/call-resolver-batch
                   :key                                   :error-batch}
                  {:com.wsscode.pathom.connect/sym error-batch
                   :com.wsscode.pathom.core/path   [:list
                                                    0
                                                    :error-batch]
                   :com.wsscode.pathom.trace/event :com.wsscode.pathom.connect/merge-resolver-response
                   :key                            :error-batch}]))))))
