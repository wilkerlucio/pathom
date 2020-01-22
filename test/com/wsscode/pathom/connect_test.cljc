(ns com.wsscode.pathom.connect-test
  (:require [clojure.test :refer [is are testing]]
            #?(:clj
               [com.wsscode.common.async-clj :refer [go-catch go-promise <!maybe <?]])
            [nubank.workspaces.core :refer [deftest]]
            #?(:clj [clojure.core.async :as async :refer [go <! <!!]]
               :cljs [cljs.core.async :as async :refer-macros [go] :refer [<!]])
            [com.wsscode.pathom.core :as p]
            [com.wsscode.pathom.connect :as pc]
            [com.wsscode.pathom.connect.test :as pct]
            [com.wsscode.pathom.parser :as pp]
            [com.wsscode.pathom.trace :as pt]
            [com.wsscode.pathom.sugar :as ps]
            [clojure.walk :as walk])
  #?(:clj
     (:import (clojure.lang ExceptionInfo))))

(declare quick-parser)

(def base-indexes (atom {}))

(defmulti resolver-fn pc/resolver-dispatch)
(def defresolver (pc/resolver-factory resolver-fn base-indexes))

(defmulti mutate-fn pc/mutation-dispatch)
(def defmutation (pc/mutation-factory mutate-fn base-indexes))

(def users
  {1 {:user/id 1 :user/name "Mel" :user/age 26 :user/login "meel"}
   2 {:user/id 2 :user/name "Gin" :user/age 22 :user/login "gin"}})

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

(defresolver `multi-input
  {::pc/input  #{:need-a :need-b :need-c}
   ::pc/output [:need-combined]}
  (fn [_ {:keys [need-a need-b need-c]}]
    {:need-combined (+ need-a need-b need-c)}))

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

(defresolver `n+1-list-nested
  {::pc/output [{:list-of-things-nested
                 [{:items [:thing-id
                           :other]}]}]}
  (fn [_ _]
    {:list-of-things-nested
     {:items [{:thing-id 1
               :other    "x"}
              {:thing-id 2}
              {:thing-id 3}]}}))

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

(defresolver `batch-serial-after-dep
  {::pc/input  #{:thing-value}
   ::pc/output [:thing-value3]}
  (fn [_ {:keys [thing-value]}]
    {:thing-value3 (str "3-" thing-value)}))

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

(pc/defresolver sample-resolver-test
  "documentation here"
  [_ _]
  {::pc/output [:hello]}
  {})

(deftest test-defresolver
  (is (= (::pc/docstring sample-resolver-test)
         (-> #'sample-resolver-test meta :doc)
         "documentation here")))

(deftest test-resolver-data
  (is (= (dissoc (pc/resolver-data indexes `user-by-id) ::pc/resolve)
         #::pc{:input  #{:user/id}
               :output [:user/name
                        :user/id
                        :user/login
                        :user/age]
               :sym    `user-by-id}))
  (is (= (dissoc (pc/resolver-data {::pc/indexes indexes} `user-by-id) ::pc/resolve)
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

(deftest test-merge-grow
  (is (= (pc/merge-grow 2 3) 3))
  (is (= (pc/merge-grow 2 nil) 2))
  (is (= (pc/merge-grow {:a 2} nil) {:a 2}))
  (is (= (pc/merge-grow nil {:a 2}) {:a 2}))
  (is (= (pc/merge-grow #{1} #{2}) #{1 2}))
  (is (= (pc/merge-grow {:a 1} {:b 2}) {:a 1 :b 2}))
  (is (= (pc/merge-grow {:a {:b {:c 3}}} {:a {:b {:d 4}}}) {:a {:b {:c 3 :d 4}}})))

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

(deftest test-output-provides
  (is (= (pc/output-provides [:hello]) [:hello]))
  (is (= (pc/output-provides [{:nested [:hello]}])
         [:nested [:nested :hello]]))
  (is (= (pc/output-provides [{:deep [{:nested [:hello]}]}])
         [:deep
          [:deep :nested]
          [:deep :nested :hello]]))
  (is (= (pc/output-provides {:friend/id  [:friend/id :friend/name]
                              :place/id   [:place/id :place/title]
                              :address/id [:address/id :address/street :address/number]})
         [:friend/id :friend/name
          :place/id :place/title
          :address/id :address/street :address/number]))
  (is (= (pc/output-provides [{:items {:friend/id  [:friend/id :friend/name]
                                       :place/id   [:place/id :place/title]
                                       :address/id [:address/id :address/street :address/number]}}])
         [:items
          [:items :friend/id]
          [:items :friend/name]
          [:items :place/id]
          [:items :place/title]
          [:items :address/id]
          [:items :address/street]
          [:items :address/number]])))

(deftest test-add
  (testing "simple add"
    (is (= (pc/add {} 'user-by-login
             {::pc/input  #{:user/login}
              ::pc/output [:user/name :user/id :user/login :user/age]})
           '#:com.wsscode.pathom.connect{:idents           #{:user/login}
                                         :index-attributes #:user{:age   #:com.wsscode.pathom.connect{:attr-leaf-in   #{user-by-login}
                                                                                                      :attr-output-in #{user-by-login}
                                                                                                      :attr-reach-via {#{:user/login} #{user-by-login}}
                                                                                                      :attribute      :user/age}
                                                                  :id    #:com.wsscode.pathom.connect{:attr-leaf-in   #{user-by-login}
                                                                                                      :attr-output-in #{user-by-login}
                                                                                                      :attr-reach-via {#{:user/login} #{user-by-login}}
                                                                                                      :attribute      :user/id}
                                                                  :login #:com.wsscode.pathom.connect{:attr-input-in #{user-by-login}
                                                                                                      :attr-leaf-in  #{user-by-login}
                                                                                                      :attr-provides #:user{:age  #{user-by-login}
                                                                                                                            :id   #{user-by-login}
                                                                                                                            :name #{user-by-login}}
                                                                                                      :attribute     :user/login}
                                                                  :name  #:com.wsscode.pathom.connect{:attr-leaf-in   #{user-by-login}
                                                                                                      :attr-output-in #{user-by-login}
                                                                                                      :attr-reach-via {#{:user/login} #{user-by-login}}
                                                                                                      :attribute      :user/name}}
                                         :index-io         {#{:user/login} #:user{:age   {}
                                                                                  :id    {}
                                                                                  :login {}
                                                                                  :name  {}}}
                                         :index-oir        #:user{:age  {#{:user/login} #{user-by-login}}
                                                                  :id   {#{:user/login} #{user-by-login}}
                                                                  :name {#{:user/login} #{user-by-login}}}
                                         :index-resolvers  {user-by-login #:com.wsscode.pathom.connect{:input  #{:user/login}
                                                                                                       :output [:user/name
                                                                                                                :user/id
                                                                                                                :user/login
                                                                                                                :user/age]
                                                                                                       :sym    user-by-login}}})))

  (testing "multiple inputs"
    (is (= (pc/add {} 'user-by-login
             {::pc/input  #{:user/login :user/group}
              ::pc/output [:user/name :user/id :user/login :user/age]})
           '#:com.wsscode.pathom.connect{:index-attributes {#{:user/group
                                                              :user/login} #:com.wsscode.pathom.connect{:attr-input-in #{user-by-login}
                                                                                                        :attr-provides #:user{:age  #{user-by-login}
                                                                                                                              :id   #{user-by-login}
                                                                                                                              :name #{user-by-login}}
                                                                                                        :attribute     #{:user/group
                                                                                                                         :user/login}}
                                                            :user/age      #:com.wsscode.pathom.connect{:attr-leaf-in   #{user-by-login}
                                                                                                        :attr-output-in #{user-by-login}
                                                                                                        :attr-reach-via {#{:user/group
                                                                                                                           :user/login} #{user-by-login}}
                                                                                                        :attribute      :user/age}
                                                            :user/group    #:com.wsscode.pathom.connect{:attr-combinations #{#{:user/group
                                                                                                                               :user/login}}
                                                                                                        :attr-input-in     #{user-by-login}
                                                                                                        :attribute         :user/group}
                                                            :user/id       #:com.wsscode.pathom.connect{:attr-leaf-in   #{user-by-login}
                                                                                                        :attr-output-in #{user-by-login}
                                                                                                        :attr-reach-via {#{:user/group
                                                                                                                           :user/login} #{user-by-login}}
                                                                                                        :attribute      :user/id}
                                                            :user/login    #:com.wsscode.pathom.connect{:attr-combinations #{#{:user/group
                                                                                                                               :user/login}}
                                                                                                        :attr-input-in     #{user-by-login}
                                                                                                        :attr-leaf-in      #{user-by-login}
                                                                                                        :attribute         :user/login}
                                                            :user/name     #:com.wsscode.pathom.connect{:attr-leaf-in   #{user-by-login}
                                                                                                        :attr-output-in #{user-by-login}
                                                                                                        :attr-reach-via {#{:user/group
                                                                                                                           :user/login} #{user-by-login}}
                                                                                                        :attribute      :user/name}}
                                         :index-io         {#{:user/group
                                                              :user/login} #:user{:age   {}
                                                                                  :id    {}
                                                                                  :login {}
                                                                                  :name  {}}}
                                         :index-oir        #:user{:age   {#{:user/group
                                                                            :user/login} #{user-by-login}}
                                                                  :id    {#{:user/group
                                                                            :user/login} #{user-by-login}}
                                                                  :login {#{:user/group
                                                                            :user/login} #{user-by-login}}
                                                                  :name  {#{:user/group
                                                                            :user/login} #{user-by-login}}}
                                         :index-resolvers  {user-by-login #:com.wsscode.pathom.connect{:input  #{:user/group
                                                                                                                 :user/login}
                                                                                                       :output [:user/name
                                                                                                                :user/id
                                                                                                                :user/login
                                                                                                                :user/age]
                                                                                                       :sym    user-by-login}}})))

  (testing "accumulating and nesting"
    (is (= (-> {}
               (pc/add 'user-by-id
                 {::pc/input  #{:user/id}
                  ::pc/output [:user/name :user/id :user/login :user/age]})
               (pc/add 'user-network
                 {::pc/input  #{:user/id}
                  ::pc/output [{:user/network [:network/id :network/name]}]}))
           '#:com.wsscode.pathom.connect{:idents           #{:user/id}
                                         :index-attributes {:network/id   #:com.wsscode.pathom.connect{:attr-leaf-in   #{user-network}
                                                                                                       :attr-output-in #{user-network}
                                                                                                       :attr-reach-via {[#{:user/id}
                                                                                                                         :user/network] #{user-network}}
                                                                                                       :attribute      :network/id}
                                                            :network/name #:com.wsscode.pathom.connect{:attr-leaf-in   #{user-network}
                                                                                                       :attr-output-in #{user-network}
                                                                                                       :attr-reach-via {[#{:user/id}
                                                                                                                         :user/network] #{user-network}}
                                                                                                       :attribute      :network/name}
                                                            :user/age     #:com.wsscode.pathom.connect{:attr-leaf-in   #{user-by-id}
                                                                                                       :attr-output-in #{user-by-id}
                                                                                                       :attr-reach-via {#{:user/id} #{user-by-id}}
                                                                                                       :attribute      :user/age}
                                                            :user/id      #:com.wsscode.pathom.connect{:attr-input-in #{user-by-id
                                                                                                                        user-network}
                                                                                                       :attr-leaf-in  #{user-by-id}
                                                                                                       :attr-provides {:user/age       #{user-by-id}
                                                                                                                       :user/login     #{user-by-id}
                                                                                                                       :user/name      #{user-by-id}
                                                                                                                       :user/network   #{user-network}
                                                                                                                       [:user/network
                                                                                                                        :network/id]   #{user-network}
                                                                                                                       [:user/network
                                                                                                                        :network/name] #{user-network}}
                                                                                                       :attribute     :user/id}
                                                            :user/login   #:com.wsscode.pathom.connect{:attr-leaf-in   #{user-by-id}
                                                                                                       :attr-output-in #{user-by-id}
                                                                                                       :attr-reach-via {#{:user/id} #{user-by-id}}
                                                                                                       :attribute      :user/login}
                                                            :user/name    #:com.wsscode.pathom.connect{:attr-leaf-in   #{user-by-id}
                                                                                                       :attr-output-in #{user-by-id}
                                                                                                       :attr-reach-via {#{:user/id} #{user-by-id}}
                                                                                                       :attribute      :user/name}
                                                            :user/network #:com.wsscode.pathom.connect{:attr-branch-in #{user-network}
                                                                                                       :attr-output-in #{user-network}
                                                                                                       :attr-reach-via {#{:user/id} #{user-network}}
                                                                                                       :attribute      :user/network}}
                                         :index-io         {#{:user/id} #:user{:age     {}
                                                                               :id      {}
                                                                               :login   {}
                                                                               :name    {}
                                                                               :network #:network{:id   {}
                                                                                                  :name {}}}}
                                         :index-oir        #:user{:age     {#{:user/id} #{user-by-id}}
                                                                  :login   {#{:user/id} #{user-by-id}}
                                                                  :name    {#{:user/id} #{user-by-id}}
                                                                  :network {#{:user/id} #{user-network}}}
                                         :index-resolvers  {user-by-id   #:com.wsscode.pathom.connect{:input  #{:user/id}
                                                                                                      :output [:user/name
                                                                                                               :user/id
                                                                                                               :user/login
                                                                                                               :user/age]
                                                                                                      :sym    user-by-id}
                                                            user-network #:com.wsscode.pathom.connect{:input  #{:user/id}
                                                                                                      :output [#:user{:network [:network/id
                                                                                                                                :network/name]}]
                                                                                                      :sym    user-network}}})))

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

  (testing "adding global attributes"
    (is (= (-> {}
               (pc/add 'globals
                 {::pc/input  #{}
                  ::pc/output [:global-value]}))
           '{::pc/index-resolvers  {globals #::pc{:sym    globals
                                                  :input  #{}
                                                  :output [:global-value]}}
             ::pc/index-attributes {#{}           #::pc{:attribute     #{}
                                                        :attr-provides {:global-value #{globals}}
                                                        :attr-input-in #{globals}}
                                    :global-value #::pc{:attr-leaf-in   #{globals}
                                                        :attribute      :global-value
                                                        :attr-reach-via {#{} #{globals}}
                                                        :attr-output-in #{globals}}}
             ::pc/index-io         {#{} {:global-value {}}}
             ::pc/index-oir        {:global-value {#{} #{globals}}}})))

  (testing "adding union at resolver root"
    (is (= (-> {}
               (pc/add `union-root
                 {::pc/input  #{:entity/id}
                  ::pc/output {:friend/id  [:friend/id :friend/name]
                               :place/id   [:place/id :place/title]
                               :address/id [:address/id :address/street :address/number]}}))
           '{:com.wsscode.pathom.connect/idents #{:entity/id},
             :com.wsscode.pathom.connect/index-attributes
                                                {:address/id
                                                 {:com.wsscode.pathom.connect/attr-leaf-in
                                                                                        #{com.wsscode.pathom.connect-test/union-root},
                                                  :com.wsscode.pathom.connect/attr-output-in
                                                                                        #{com.wsscode.pathom.connect-test/union-root},
                                                  :com.wsscode.pathom.connect/attr-reach-via
                                                                                        {#{:entity/id} #{com.wsscode.pathom.connect-test/union-root}},
                                                  :com.wsscode.pathom.connect/attribute :address/id},
                                                 :address/number
                                                 {:com.wsscode.pathom.connect/attr-leaf-in
                                                                                        #{com.wsscode.pathom.connect-test/union-root},
                                                  :com.wsscode.pathom.connect/attr-output-in
                                                                                        #{com.wsscode.pathom.connect-test/union-root},
                                                  :com.wsscode.pathom.connect/attr-reach-via
                                                                                        {#{:entity/id} #{com.wsscode.pathom.connect-test/union-root}},
                                                  :com.wsscode.pathom.connect/attribute :address/number},
                                                 :address/street
                                                 {:com.wsscode.pathom.connect/attr-leaf-in
                                                                                        #{com.wsscode.pathom.connect-test/union-root},
                                                  :com.wsscode.pathom.connect/attr-output-in
                                                                                        #{com.wsscode.pathom.connect-test/union-root},
                                                  :com.wsscode.pathom.connect/attr-reach-via
                                                                                        {#{:entity/id} #{com.wsscode.pathom.connect-test/union-root}},
                                                  :com.wsscode.pathom.connect/attribute :address/street},
                                                 :entity/id
                                                 {:com.wsscode.pathom.connect/attr-input-in
                                                                                        #{com.wsscode.pathom.connect-test/union-root},
                                                  :com.wsscode.pathom.connect/attr-provides
                                                                                        {:address/id     #{com.wsscode.pathom.connect-test/union-root},
                                                                                         :address/number #{com.wsscode.pathom.connect-test/union-root},
                                                                                         :address/street #{com.wsscode.pathom.connect-test/union-root},
                                                                                         :friend/id      #{com.wsscode.pathom.connect-test/union-root},
                                                                                         :friend/name    #{com.wsscode.pathom.connect-test/union-root},
                                                                                         :place/id       #{com.wsscode.pathom.connect-test/union-root},
                                                                                         :place/title    #{com.wsscode.pathom.connect-test/union-root}},
                                                  :com.wsscode.pathom.connect/attribute :entity/id},
                                                 :friend/id
                                                 {:com.wsscode.pathom.connect/attr-leaf-in
                                                                                        #{com.wsscode.pathom.connect-test/union-root},
                                                  :com.wsscode.pathom.connect/attr-output-in
                                                                                        #{com.wsscode.pathom.connect-test/union-root},
                                                  :com.wsscode.pathom.connect/attr-reach-via
                                                                                        {#{:entity/id} #{com.wsscode.pathom.connect-test/union-root}},
                                                  :com.wsscode.pathom.connect/attribute :friend/id},
                                                 :friend/name
                                                 {:com.wsscode.pathom.connect/attr-leaf-in
                                                                                        #{com.wsscode.pathom.connect-test/union-root},
                                                  :com.wsscode.pathom.connect/attr-output-in
                                                                                        #{com.wsscode.pathom.connect-test/union-root},
                                                  :com.wsscode.pathom.connect/attr-reach-via
                                                                                        {#{:entity/id} #{com.wsscode.pathom.connect-test/union-root}},
                                                  :com.wsscode.pathom.connect/attribute :friend/name},
                                                 :place/id
                                                 {:com.wsscode.pathom.connect/attr-leaf-in
                                                                                        #{com.wsscode.pathom.connect-test/union-root},
                                                  :com.wsscode.pathom.connect/attr-output-in
                                                                                        #{com.wsscode.pathom.connect-test/union-root},
                                                  :com.wsscode.pathom.connect/attr-reach-via
                                                                                        {#{:entity/id} #{com.wsscode.pathom.connect-test/union-root}},
                                                  :com.wsscode.pathom.connect/attribute :place/id},
                                                 :place/title
                                                 {:com.wsscode.pathom.connect/attr-leaf-in
                                                                                        #{com.wsscode.pathom.connect-test/union-root},
                                                  :com.wsscode.pathom.connect/attr-output-in
                                                                                        #{com.wsscode.pathom.connect-test/union-root},
                                                  :com.wsscode.pathom.connect/attr-reach-via
                                                                                        {#{:entity/id} #{com.wsscode.pathom.connect-test/union-root}},
                                                  :com.wsscode.pathom.connect/attribute :place/title}},
             :com.wsscode.pathom.connect/index-io
                                                {#{:entity/id}
                                                 {:address/id     {},
                                                  :address/number {},
                                                  :address/street {},
                                                  :com.wsscode.pathom.connect/unions
                                                                  {:address/id
                                                                              {:address/id {}, :address/number {}, :address/street {}},
                                                                   :friend/id {:friend/id {}, :friend/name {}},
                                                                   :place/id  {:place/id {}, :place/title {}}},
                                                  :friend/id      {},
                                                  :friend/name    {},
                                                  :place/id       {},
                                                  :place/title    {}}},
             :com.wsscode.pathom.connect/index-oir
                                                {:address/id
                                                 {#{:entity/id} #{com.wsscode.pathom.connect-test/union-root}},
                                                 :address/number
                                                 {#{:entity/id} #{com.wsscode.pathom.connect-test/union-root}},
                                                 :address/street
                                                 {#{:entity/id} #{com.wsscode.pathom.connect-test/union-root}},
                                                 :friend/id
                                                 {#{:entity/id} #{com.wsscode.pathom.connect-test/union-root}},
                                                 :friend/name
                                                 {#{:entity/id} #{com.wsscode.pathom.connect-test/union-root}},
                                                 :place/id
                                                 {#{:entity/id} #{com.wsscode.pathom.connect-test/union-root}},
                                                 :place/title
                                                 {#{:entity/id} #{com.wsscode.pathom.connect-test/union-root}}},
             :com.wsscode.pathom.connect/index-resolvers
                                                {com.wsscode.pathom.connect-test/union-root
                                                 {:com.wsscode.pathom.connect/input #{:entity/id},
                                                  :com.wsscode.pathom.connect/output
                                                                                    {:address/id [:address/id :address/street :address/number],
                                                                                     :friend/id  [:friend/id :friend/name],
                                                                                     :place/id   [:place/id :place/title]},
                                                  :com.wsscode.pathom.connect/sym
                                                                                    com.wsscode.pathom.connect-test/union-root}}})))

  (testing "adding union child"
    (is (= (-> {}
               (pc/add 'union-child
                 {::pc/input  #{:entity/id}
                  ::pc/output [{:items {:friend/id  [:friend/id :friend/name]
                                        :place/id   [:place/id :place/title]
                                        :address/id [:address/id :address/street :address/number]}}]}))
           '#:com.wsscode.pathom.connect{:idents           #{:entity/id}
                                         :index-attributes {:address/id     #:com.wsscode.pathom.connect{:attr-leaf-in   #{union-child}
                                                                                                         :attr-output-in #{union-child}
                                                                                                         :attr-reach-via {[#{:entity/id}
                                                                                                                           :items] #{union-child}}
                                                                                                         :attribute      :address/id}
                                                            :address/number #:com.wsscode.pathom.connect{:attr-leaf-in   #{union-child}
                                                                                                         :attr-output-in #{union-child}
                                                                                                         :attr-reach-via {[#{:entity/id}
                                                                                                                           :items] #{union-child}}
                                                                                                         :attribute      :address/number}
                                                            :address/street #:com.wsscode.pathom.connect{:attr-leaf-in   #{union-child}
                                                                                                         :attr-output-in #{union-child}
                                                                                                         :attr-reach-via {[#{:entity/id}
                                                                                                                           :items] #{union-child}}
                                                                                                         :attribute      :address/street}
                                                            :entity/id      #:com.wsscode.pathom.connect{:attr-input-in #{union-child}
                                                                                                         :attr-provides {:items            #{union-child}
                                                                                                                         [:items
                                                                                                                          :address/id]     #{union-child}
                                                                                                                         [:items
                                                                                                                          :address/number] #{union-child}
                                                                                                                         [:items
                                                                                                                          :address/street] #{union-child}
                                                                                                                         [:items
                                                                                                                          :friend/id]      #{union-child}
                                                                                                                         [:items
                                                                                                                          :friend/name]    #{union-child}
                                                                                                                         [:items
                                                                                                                          :place/id]       #{union-child}
                                                                                                                         [:items
                                                                                                                          :place/title]    #{union-child}}
                                                                                                         :attribute     :entity/id}
                                                            :friend/id      #:com.wsscode.pathom.connect{:attr-leaf-in   #{union-child}
                                                                                                         :attr-output-in #{union-child}
                                                                                                         :attr-reach-via {[#{:entity/id}
                                                                                                                           :items] #{union-child}}
                                                                                                         :attribute      :friend/id}
                                                            :friend/name    #:com.wsscode.pathom.connect{:attr-leaf-in   #{union-child}
                                                                                                         :attr-output-in #{union-child}
                                                                                                         :attr-reach-via {[#{:entity/id}
                                                                                                                           :items] #{union-child}}
                                                                                                         :attribute      :friend/name}
                                                            :items          #:com.wsscode.pathom.connect{:attr-branch-in #{union-child}
                                                                                                         :attr-output-in #{union-child}
                                                                                                         :attr-reach-via {#{:entity/id} #{union-child}}
                                                                                                         :attribute      :items}
                                                            :place/id       #:com.wsscode.pathom.connect{:attr-leaf-in   #{union-child}
                                                                                                         :attr-output-in #{union-child}
                                                                                                         :attr-reach-via {[#{:entity/id}
                                                                                                                           :items] #{union-child}}
                                                                                                         :attribute      :place/id}
                                                            :place/title    #:com.wsscode.pathom.connect{:attr-leaf-in   #{union-child}
                                                                                                         :attr-output-in #{union-child}
                                                                                                         :attr-reach-via {[#{:entity/id}
                                                                                                                           :items] #{union-child}}
                                                                                                         :attribute      :place/title}}
                                         :index-io         {#{:entity/id} {:items {:address/id                        {}
                                                                                   :address/number                    {}
                                                                                   :address/street                    {}
                                                                                   :com.wsscode.pathom.connect/unions {:address/id #:address{:id     {}
                                                                                                                                             :number {}
                                                                                                                                             :street {}}
                                                                                                                       :friend/id  #:friend{:id   {}
                                                                                                                                            :name {}}
                                                                                                                       :place/id   #:place{:id    {}
                                                                                                                                           :title {}}}
                                                                                   :friend/id                         {}
                                                                                   :friend/name                       {}
                                                                                   :place/id                          {}
                                                                                   :place/title                       {}}}}
                                         :index-oir        {:items {#{:entity/id} #{union-child}}}
                                         :index-resolvers  {union-child #:com.wsscode.pathom.connect{:input  #{:entity/id}
                                                                                                     :output [{:items {:address/id [:address/id
                                                                                                                                    :address/street
                                                                                                                                    :address/number]
                                                                                                                       :friend/id  [:friend/id
                                                                                                                                    :friend/name]
                                                                                                                       :place/id   [:place/id
                                                                                                                                    :place/title]}}]
                                                                                                     :sym    union-child}}})))

  (testing "adding mutation"
    (is (= (pc/add-mutation {} 'do-it {})
           {::pc/index-mutations  {'do-it {::pc/sym 'do-it}}
            ::pc/index-attributes {}}))

    (is (= (pc/add-mutation {} 'do-it
             {::pc/params [:thing/id]})
           {::pc/index-mutations  {'do-it {::pc/sym    'do-it
                                           ::pc/params [:thing/id]}}
            ::pc/index-attributes {:thing/id {::pc/attribute              :thing/id
                                              ::pc/attr-mutation-param-in #{'do-it}}}}))

    (is (= (pc/add-mutation {} 'do-it
             {::pc/output [:thing/id]})
           {::pc/index-mutations  {'do-it {::pc/sym    'do-it
                                           ::pc/output [:thing/id]}}
            ::pc/index-attributes {:thing/id {::pc/attribute               :thing/id
                                              ::pc/attr-mutation-output-in #{'do-it}}}}))

    (is (= (pc/add-mutation {} 'customer/update
             {::pc/params [:customer/id {:customer/address [:address/street]}]
              ::pc/output [:customer/id {:customer/address [:address/id]}]})
           {::pc/index-mutations  {'customer/update {::pc/sym    'customer/update
                                                     ::pc/params [:customer/id {:customer/address [:address/street]}]
                                                     ::pc/output [:customer/id {:customer/address [:address/id]}]}}
            ::pc/index-attributes {:customer/id      {::pc/attribute               :customer/id
                                                      ::pc/attr-mutation-param-in  #{'customer/update}
                                                      ::pc/attr-mutation-output-in #{'customer/update}}
                                   :customer/address {::pc/attribute               :customer/address
                                                      ::pc/attr-mutation-param-in  #{'customer/update}
                                                      ::pc/attr-mutation-output-in #{'customer/update}}
                                   :address/id       {::pc/attribute               :address/id
                                                      ::pc/attr-mutation-output-in #{'customer/update}}
                                   :address/street   {::pc/attribute              :address/street
                                                      ::pc/attr-mutation-param-in #{'customer/update}}}}))))

(deftest test-project-query-attributes
  (is (= (pc/project-query-attributes
           {::p/entity   {:user/email ""}
            ::pc/indexes indexes
            :ast         {:key :user/email}}
           [:user/name])
         #{:user/email :user/name :user/login}))

  (is (= (pc/project-query-attributes
           {::p/placeholder-prefixes #{">"}
            ::p/entity               {:user/email ""}
            ::pc/indexes             indexes
            :ast                     {:key :user/email}}
           [{:>/ph [:user/name]}])
         #{:user/email :user/name :user/login})))

(deftest test-project-parent-query-attributes
  (is (= (pc/project-parent-query-attributes
           {::pc/plan        []
            ::p/parent-query [:user/name]
            ::p/entity       {:user/email ""}
            ::pc/indexes     indexes
            :ast             {:key :user/email}})
         #{:user/email :user/name :user/login}))

  (is (= (pc/project-parent-query-attributes
           {::pc/plan                []
            ::p/parent-query         [{:>/ph [:user/name]}]
            ::p/placeholder-prefixes #{">"}
            ::p/entity               {:user/email ""}
            ::pc/indexes             indexes
            :ast                     {:key :user/email}})
         #{:user/email :user/name :user/login})))

(deftest test-attr-alias-name
  (is (= (pc/attr-alias-name :foo :bar)
         'foo->bar))
  (is (= (pc/attr-alias-name :user/id :user/by-id)
         'user_SLASH_id->user_SLASH_by_id)))

(deftest test-alias-resolver
  (let [resolver (pc/alias-resolver :foo :bar)]
    (is (= (dissoc resolver ::pc/resolve)
           {::pc/sym    'foo->bar
            ::pc/input  #{:foo}
            ::pc/output [:bar]}))
    (is (= ((::pc/resolve resolver) {} {:foo "value"})
           {:bar "value"}))))

(deftest test-constantly-resolver
  (let [parser (ps/connect-serial-parser [(pc/constantly-resolver :foo "bar")])]
    (is (= (parser {} [:foo])
           {:foo "bar"}))))

(deftest test-single-attr-resolver
  (let [parser (ps/context-parser (ps/connect-serial-parser [(pc/single-attr-resolver :n :x inc)]))]
    (is (= (parser {:n 10} [:x])
           {:x 11}))))

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
            :cache     {[`user-by-id {:user/id 1} {}] {:user/age   26
                                                       :user/id    1
                                                       :user/login "meel"
                                                       :user/name  "Mel"}}})))

  (testing "follows a basic attribute with params"
    (is (= (parser {::p/entity (atom {:user/id 1 :user/foo "bar"})}
             [(list :user/name {:some "attr"}) :cache])
           {:user/name "Mel"
            :cache     {[`user-by-id {:user/id 1} {:some "attr"}]
                        {:user/age   26
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
          (parser {::p/entity (atom {:user/id 999})}
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

  (testing "ident read with extra context"
    (is (= (parser {} [{'([:user/id 1] {:pathom/context {:need-a 1
                                                         :need-b 2
                                                         :need-c 3}})
                        [:need-combined]}])
           {[:user/id 1] {:need-combined 6}})))

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
      (is (= 1 @counter))))

  (testing "n+1 batching with serial dep"
    (let [counter (atom 0)]
      (is (= (parser {::batch-counter counter} [{:list-of-things-nested [{:items [:thing-value3]}]}])
             {:list-of-things-nested
              {:items [{:thing-value3 "3-a"}
                       {:thing-value3 "3-b"}
                       {:thing-value3 "3-c"}]}}))
      (is (= 1 @counter)))))

(def parser2
  (p/parser {:mutate pc/mutate
             ::p/plugins
                     [(p/env-wrap-plugin #(assoc % ::pc/indexes @base-indexes))
                      (p/env-plugin {::p/reader               [{:cache (comp deref ::p/request-cache)}
                                                               p/map-reader
                                                               {::env #(p/join % %)}
                                                               pc/reader2
                                                               pc/ident-reader
                                                               pc/index-reader
                                                               (p/placeholder-reader ">")]
                                     ::p/placeholder-prefixes #{">"}
                                     ::pc/resolver-dispatch   resolver-fn
                                     ::pc/mutate-dispatch     mutate-fn})
                      p/request-cache-plugin]}))

(deftest test-reader2
  (testing "reading root entity"
    (is (= (parser2 {} [:color])
           {:color "purple"})))

  (testing "follows a basic attribute"
    (is (= (parser2 {::p/entity (atom {:user/id 1})}
             [:user/name])
           {:user/name "Mel"})))

  (testing "follows a basic attribute"
    (is (= (parser2 {::p/entity (atom {:user/id 1 :user/foo "bar"})}
             [:user/name :cache])
           {:user/name "Mel"
            :cache     {[`user-by-id {:user/id 1} {}] {:user/age   26
                                                       :user/id    1
                                                       :user/login "meel"
                                                       :user/name  "Mel"}}})))

  (testing "doesn't cache if asked to cache? is false"
    (is (= (parser2 {} [:value :cache])
           {:value 42
            :cache {}})))

  (testing "can update the environment from the return"
    (is (= (parser2 {} [{::i-update-env [:foo {::env [:new-info]}]}])
           {::i-update-env {:foo  "bar"
                            ::env {:new-info "vish"}}})))

  (testing "not found when there is no attribute"
    (is (= (parser2 {::p/entity (atom {:user/id 1})}
             [:user/not-here])
           {:user/not-here ::p/not-found})))

  (testing "not found if requirements aren't met"
    (is (= (parser2 {::p/entity (atom {})} [:user/name])
           {:user/name ::p/not-found})))

  (testing "error when an error happens"
    (is (thrown-with-msg? #?(:clj clojure.lang.ExceptionInfo :cljs ExceptionInfo) #"user not found"
          (parser2 {::p/entity (atom {:user/id 999})}
            [:user/name]))))

  (testing "read dependend attributes when neeeded"
    (is (= (parser2 {::p/entity (atom {:user/login "meel"})}
             [:user/address])
           {:user/address "Live here somewhere"})))

  (testing "deeper level deps"
    (is (= (parser2 {::p/entity (atom {:user/email "a@b.c"})}
             [:user/address])
           {:user/address "Live here somewhere"})))

  (testing "nested resource"
    (is (= (parser2 {::p/entity (atom {:user/login "meel"})}
             [{:user/network [:network/id]}])
           {:user/network {:network/id "twitter"}})))

  (testing "ident read"
    (is (= (parser2 {} [{[:user/id 1] [:user/name]}])
           {[:user/id 1] {:user/name "Mel"}})))

  (testing "ident read with extra context"
    (is (= (parser2 {} [{'([:user/id 1] {:pathom/context {:need-a 1
                                                          :need-b 2
                                                          :need-c 3}})
                         [:need-combined]}])
           {[:user/id 1] {:need-combined 6}})))

  (testing "read allows for flow"
    (is (= (parser2 {} [{[:user/id 1] [{:>/alias [:user/name]}]}])
           {[:user/id 1] {:>/alias {:user/name "Mel"}}})))

  (testing "stops processing if entity is nil"
    (is (= (parser2 {::p/entity (atom {:user/id 2})}
             [{:user/network [:network/id]}])
           {:user/network ::p/not-found})))

  (testing "short circuit error "
    (is (thrown-with-msg? #?(:clj clojure.lang.ExceptionInfo :cljs ExceptionInfo) #"Insufficient resolver output"
          (parser2 {} [:error-dep]))))

  (testing "read index"
    (is (= (parser2 {} [::pc/indexes])
           {::pc/indexes @base-indexes})))

  (testing "depending on value with nil return"
    (is (= (parser2 {} [:nil-dep])
           {:nil-dep "nil-dep-value"})))

  (testing "n+1 batching"
    (let [counter (atom 0)]
      (is (= (parser2 {::batch-counter counter} [{:list-of-things [:thing-value]}])
             {:list-of-things [{:thing-value "a"}
                               {:thing-value "b"}
                               {:thing-value "c"}]}))
      (is (= 1 @counter))))

  (testing "n+1 batching filtering"
    (let [counter (atom 0)]
      (is (= (parser2 {::batch-counter counter} [{:list-of-things-with-missing [:thing-value]}])
             {:list-of-things-with-missing [{:thing-value "a"}
                                            {:thing-value "b"}
                                            {:thing-value "c"}
                                            {:thing-value :com.wsscode.pathom.core/not-found}
                                            {:thing-value "d"}]}))
      (is (= 1 @counter))))

  (testing "n+1 batching on placeholders"
    (let [counter (atom 0)]
      (is (= (parser2 {::batch-counter counter} [{:list-of-things [{:>/pn [:thing-value]}]}])
             {:list-of-things [{:>/pn {:thing-value "a"}}
                               {:>/pn {:thing-value "b"}}
                               {:>/pn {:thing-value "c"}}]}))
      (is (= 1 @counter))))

  (testing "n+1 batching on placeholders deep"
    (let [counter (atom 0)]
      (is (= (parser2 {::batch-counter counter} [{:list-of-things [{:>/pn [{:>/more [:thing-value]}]}]}])
             {:list-of-things [{:>/pn {:>/more {:thing-value "a"}}}
                               {:>/pn {:>/more {:thing-value "b"}}}
                               {:>/pn {:>/more {:thing-value "c"}}}]}))
      (is (= 1 @counter))))

  (testing "n+1 batching repeated"
    (let [counter (atom 0)]
      (is (= (parser2 {::batch-counter counter} [{:list-of-things [:thing-value]}])
             {:list-of-things [{:thing-value "a"}
                               {:thing-value "b"}
                               {:thing-value "c"}]}))
      (is (= 1 @counter))))

  (testing "n+1 batching with linked dep"
    (let [counter (atom 0)]
      (is (= (parser2 {::batch-counter counter} [{:list-of-things [:thing-value2]}])
             {:list-of-things [{:thing-value2 "a"}
                               {:thing-value2 "b"}
                               {:thing-value2 "c"}]}))
      (is (= 1 @counter))))

  (testing "n+1 batching with serial dep"
    (let [counter (atom 0)]
      (is (= (parser2 {::batch-counter counter} [{:list-of-things-nested [{:items [:thing-value3]}]}])
             {:list-of-things-nested
              {:items [{:thing-value3 "3-a"}
                       {:thing-value3 "3-b"}
                       {:thing-value3 "3-c"}]}}))
      (is (= 1 @counter)))))

(comment
  (parser2 {::batch-counter (atom 0)} [{:list-of-things-nested [{:items [:thing-value3]}]}]))

(defmutation 'call/op
  {::pc/output [:user/id]}
  (fn [env input]
    (with-meta {:user/id 1} {:x 1})))

(defmutation 'call/op-tmpids
  {::pc/output [:user/id]}
  (fn [env {:keys [user/id]}]
    {:user/id                          1
     :fulcro.client.primitives/tempids {id 1}}))

(swap! base-indexes assoc-in
  [::pc/index-mutations 'call/op-alias] {::pc/sym    'call/op
                                         ::pc/output [:user/id]})

(deftest test-resolver->output
  (testing "uses compute-output when available"
    (is (= (pc/resolver->output {:foo         [:bar]
                                 ::pc/indexes {::pc/index-resolvers {'a {::pc/compute-output (fn [env] (:foo env))}}}} 'a)
           [:bar])))
  (testing "uses output when available"
    (is (= (pc/resolver->output {::pc/indexes {::pc/index-resolvers {'a {::pc/output [:a :b]}}}} 'a)
           [:a :b]))))

(deftest test-mutate
  (testing "calling simple operation"
    (is (= (parser {} ['(call/op {})])
           {'call/op {:user/id 1}})))

  (testing "operation metadata is preserved"
    (is (= (meta ('call/op (parser {} ['(call/op {})])))
           {:x 1})))

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
           '{call/op-tmpids {:fulcro.client.primitives/tempids {333 1}, :user/id 1}})))

  (testing "pathom output context"
    (is (= (parser {} ['(call/op {:pathom/context {:some/info "data"}})])
           '{call/op {:user/id 1 :some/info "data"}}))

    (is (= (parser {} '[{(call/op {:pathom/context {:user/id 2}})
                         [:user/name]}])
           '{call/op {:user/name "Gin"}}))))

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

(defresolver `env-data
  {::pc/output [:env-data]}
  (fn [{:keys [env-x]} _]
    {:env-data env-x}))

(defmutation 'call/op-async
  {::pc/output [:user/id]}
  (fn [env input]
    (go
      {:user/id 1})))

(defmutation 'call/augment-env
  {}
  (fn [env _]
    {:user/id 1
     ::p/env  (assoc env :env-x 42)}))

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
              {'call/op-async {:user/id 1, :user/name "Mel"}}))

       (testing "augmenting env"
         (is (= (async/<!! (async-parser {} [{'(call/augment-env {}) [:env-data :user/name]}]))
                '{call/augment-env {:env-data 42, :user/name "Mel"}}))))

     (testing "pathom output context"
       (is (= (async/<!! (async-parser {} ['(call/op {:pathom/context {:some/info "data"}})]))
              '{call/op {:user/id 1 :some/info "data"}})))

     (testing "mutation ast is available in the env"
       (is (= (quick-parser
                {::pc/register [(pc/resolver 'my-example
                                  {::pc/output [:x]}
                                  (fn [env _]
                                    {:x (-> env ::pc/mutation-ast :key)}))

                                (pc/mutation 'change
                                  {}
                                  (fn [_ _]
                                    {:y 46}))]}
                '[{(change {}) [:x]}])
              '{change {:x change}})))))

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

(deftest test-batch-restore-sort
  (is (= (pc/batch-restore-sort {::pc/inputs [{:my.entity/id 1} {:my.entity/id 2}]
                                 ::pc/key    :my.entity/id}
           [{:my.entity/id    2
             :my.entity/color :my.entity.color/green}
            {:my.entity/id    1
             :my.entity/color :my.entity.color/purple}])
         [{:my.entity/id    1
           :my.entity/color :my.entity.color/purple}
          {:my.entity/id    2
           :my.entity/color :my.entity.color/green}]))
  (is (= (pc/batch-restore-sort {::pc/inputs [{:my.entity/id 1}
                                              {:my.entity/id 2}
                                              {:my.entity/id 3}]
                                 ::pc/key    :my.entity/id}
           [{:my.entity/id    3
             :my.entity/color :my.entity.color/green}
            {:my.entity/id    1
             :my.entity/color :my.entity.color/purple}])
         [{:my.entity/id    1
           :my.entity/color :my.entity.color/purple}
          {:my.entity/id 2}
          {:my.entity/id    3
           :my.entity/color :my.entity.color/green}]))
  (is (= (pc/batch-restore-sort {::pc/inputs        [{:my.entity/id 1}
                                                     {:my.entity/id 2}
                                                     {:my.entity/id 3}]
                                 ::pc/key           :my.entity/id
                                 ::pc/batch-default (fn [x] (assoc x :my.entity/color nil))}
           [{:my.entity/id    3
             :my.entity/color :my.entity.color/green}
            {:my.entity/id    1
             :my.entity/color :my.entity.color/purple}])
         [{:my.entity/id    1
           :my.entity/color :my.entity.color/purple}
          {:my.entity/id    2
           :my.entity/color nil}
          {:my.entity/id    3
           :my.entity/color :my.entity.color/green}])))

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
           '#:com.wsscode.pathom.connect{:index-attributes {#{:customer/id
                                                              :customer/wrong} #:com.wsscode.pathom.connect{:attr-input-in #{abc}
                                                                                                            :attr-provides #:customer{:name #{abc}}
                                                                                                            :attribute     #{:customer/id
                                                                                                                             :customer/wrong}}
                                                            :customer/id       #:com.wsscode.pathom.connect{:attr-combinations #{#{:customer/id
                                                                                                                                   :customer/wrong}}
                                                                                                            :attr-input-in     #{abc}
                                                                                                            :attribute         :customer/id}
                                                            :customer/name     #:com.wsscode.pathom.connect{:attr-leaf-in   #{abc}
                                                                                                            :attr-output-in #{abc}
                                                                                                            :attr-reach-via {#{:customer/id
                                                                                                                               :customer/wrong} #{abc}}
                                                                                                            :attribute      :customer/name}
                                                            :customer/wrong    #:com.wsscode.pathom.connect{:attr-combinations #{#{:customer/id
                                                                                                                                   :customer/wrong}}
                                                                                                            :attr-input-in     #{abc}
                                                                                                            :attribute         :customer/wrong}}
                                         :index-io         {#{:customer/id
                                                              :customer/wrong} #:customer{:name {}}}
                                         :index-oir        #:customer{:name {#{:customer/id
                                                                               :customer/wrong} #{abc}}}
                                         :index-resolvers  {abc #:com.wsscode.pathom.connect{:input  #{:customer/id
                                                                                                       :customer/wrong}
                                                                                             :output [:customer/name]
                                                                                             :sym    abc}}}))))

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
  (is (= (pc/data->shape {:other "key" [:complex "key"] "value"}) [:other [:complex "key"]]))
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

(defresolver-p 'computed-out
  {::pc/output         [:computed-out]
   ::pc/compute-output (fn [_] [:computed-out :more])}
  (fn [_ _] {:computed-out 42}))

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

(defresolver-p 'multi-path-error-error
  {::pc/output [:multi-path-error]}
  (fn [_ _] (throw (ex-info "Error 1" {}))))

(defresolver-p 'multi-path-error-blank
  {::pc/output [:multi-path-error]}
  (fn [_ _] {}))

(defresolver-p 'error-trail-dep
  {::pc/output [:error-trail-dep]}
  (fn [_ _] {:error-trail-dep ::p/reader-error}))

(defresolver-p 'error-trail
  {::pc/input  #{:error-trail-dep}
   ::pc/output [:error-trail-final]}
  (fn [_ p] {:error-trail-final (str (:error-trail-dep p))}))

(defresolver-p 'env-exporter
  {::pc/output [:provide-env]}
  (fn [env p] {:provide-env "x" ::pc/env (assoc env :foo "bar")}))

(defresolver-p 'deadlock-seq-list
  {::pc/output [:deadlock-items]}
  (fn [_ _] {:deadlock-items [{:deadlock-1 1}]}))

(defresolver-p 'deadlock-seq1
  {::pc/input  #{:deadlock-1}
   ::pc/output [:deadlock-2]}
  (fn [_ _]
    {:deadlock-2 2}))

(defresolver-p 'deadlock-seq2
  {::pc/input  #{:deadlock-2}
   ::pc/output [:deadlock-3]
   ::pc/batch? true}
  (pc/batch-resolver
    (fn [_ _] {:deadlock-3 3})
    (fn [_ inputs] (repeat (count inputs) {:deadlock-3 3}))))

(defresolver-p 'not-found-error-reg1
  {::pc/output [:reg-nf1-a :reg-nf1-b]}
  (fn [_ _] {:reg-nf1-a 42}))

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
   ::p/entity-path-cache  (atom {})
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
         (-> res
             (update ::pp/response-stream (fn [x] (async/<!! (async/into [] x))))
             (update ::pp/response-stream (fn [x] (mapv #(dissoc % ::pp/error) x))))
         res))))

(defn comparable-trace [trace]
  (into [] (comp (map #(dissoc % ::pt/timestamp ::pt/id))
                 (remove (comp #{:com.wsscode.pathom.parser/flush-watcher-safeguard}
                               ::pt/event))) trace))

(deftest test-path-cost
  (is (= (pc/path-cost {} ['a 'b 'c])
         3))

  (is (= (pc/path-cost {::pc/resolver-weights (atom {'a 3 'b 10 'c 4})} ['a 'b 'c])
         17))

  (is (= (pc/path-cost {::pc/resolver-weights (atom {'a 42})} ['a])
         42))

  (is (= (pc/path-cost {::pc/resolver-weights (atom {'a 42})} ['a 'a])
         42))

  (is (= (pc/path-cost {::pc/resolver-weights (atom {'a 42})
                        ::p/entity            {:x 30 :y 40}
                        ::pc/indexes          {::pc/index-resolvers {'a {::pc/input #{:x}}}}
                        ::p/request-cache     (atom {['a {:x 30}] {}})} ['a])
         1))

  (is (= (pc/path-cost {::pc/resolver-weights (atom {'a 42})
                        ::p/entity            {:x 30 :y 40}
                        ::pc/indexes          {::pc/index-resolvers {'a {::pc/input #{:x}}}}
                        ::p/request-cache     (atom {['a {:x 30}] {}})}
           ['a 'b])
         2)))

(deftest test-decrease-path-costs
  (let [weights (atom {'a 50 'b 400 'c 200})]
    (pc/decrease-path-costs {::pc/resolver-weights weights} [[[:a 'a] [:b 'b]]
                                                             [[:d 'e]]])
    (is (= @weights '{a 49 b 399 c 200 e 1}))))

#?(:clj
   (deftest test-call-resolver*
     (testing "return value"
       (is (= (pc/call-resolver* {::pc/resolver-data     {::pc/sym 'foo}
                                  ::pc/resolver-dispatch (fn [_ _] "foo")} {})
              "foo")))

     (testing "return value async"
       (is (= (async/<!! (pc/call-resolver* {::pc/resolver-data     {::pc/sym 'foo}
                                             ::pc/resolver-dispatch (fn [_ _] (go "foo"))} {}))
              "foo")))

     (testing "throw sync error"
       (let [trace (atom [])]
         (is (thrown? ExceptionInfo
               (pc/call-resolver* {::pc/resolver-data     {::pc/sym 'foo}
                                   ::pc/resolver-dispatch (fn [_ _] (throw (ex-info "Error" {})))
                                   ::pt/trace*            trace} {})))
         (is (= (comparable-trace @trace)
                '[{:com.wsscode.pathom.connect/input-data {}
                   :com.wsscode.pathom.connect/sym        foo
                   :com.wsscode.pathom.core/path          []
                   :com.wsscode.pathom.trace/direction    :com.wsscode.pathom.trace/enter
                   :com.wsscode.pathom.trace/event        :com.wsscode.pathom.connect/call-resolver
                   :com.wsscode.pathom.trace/label        foo
                   :key                                   nil}
                  {:com.wsscode.pathom.core/error      "class clojure.lang.ExceptionInfo: Error - {}"
                   :com.wsscode.pathom.core/path       []
                   :com.wsscode.pathom.trace/direction :com.wsscode.pathom.trace/leave
                   :com.wsscode.pathom.trace/event     :com.wsscode.pathom.connect/call-resolver}]))))))

(deftest test-group-input-indexes
  (is (= (pc/group-input-indexes [[0 {:id "a"}]
                                  [1 {:id "b"}]
                                  [2 {:id "a"}]])
         {{:id "a"} #{0 2}
          {:id "b"} #{1}})))

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
                 :com.wsscode.pathom.parser/provides #{:a}
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
                 :com.wsscode.pathom.trace/label        a
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
                   :com.wsscode.pathom.parser/provides #{:a}
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
                   :com.wsscode.pathom.trace/label        a
                   :key                                   :a}
                  {:com.wsscode.pathom.core/path       [:a]
                   :com.wsscode.pathom.trace/direction :com.wsscode.pathom.trace/leave
                   :com.wsscode.pathom.trace/event     :com.wsscode.pathom.connect/schedule-resolver}
                  {:com.wsscode.pathom.connect/input-data {}
                   :com.wsscode.pathom.connect/sym        a
                   :com.wsscode.pathom.core/path          [:a]
                   :com.wsscode.pathom.trace/direction    :com.wsscode.pathom.trace/enter
                   :com.wsscode.pathom.trace/event        :com.wsscode.pathom.connect/call-resolver
                   :com.wsscode.pathom.trace/label        a
                   :key                                   :a}
                  {:com.wsscode.pathom.core/path       [:a]
                   :com.wsscode.pathom.trace/direction :com.wsscode.pathom.trace/leave
                   :com.wsscode.pathom.trace/event     :com.wsscode.pathom.connect/call-resolver}
                  {:com.wsscode.pathom.connect/sym a
                   :com.wsscode.pathom.core/path   [:a]
                   :com.wsscode.pathom.trace/event :com.wsscode.pathom.connect/merge-resolver-response
                   :key                            :a}]))

         (async/close! pool)))

     (testing "using thread with dynamic size"
       (let [pool (pc/create-thread-pool (async/chan 10))]
         (is (= (call-parallel-reader {::pc/pool-chan pool} :a)
                #:com.wsscode.pathom.parser{:provides        #{:a}
                                            :response-stream [#:com.wsscode.pathom.parser{:provides       #{:a}
                                                                                          :response-value {:a 1}}]}))

         (async/close! pool)))

     (testing "decrease resolver weight"
       (with-redefs [pt/now (fn [] 0)]
         (let [weights (atom {'a 52})]
           (is (= (call-parallel-reader {::pc/resolver-weights weights} :a)
                  #:com.wsscode.pathom.parser{:provides        #{:a}
                                              :response-stream [#:com.wsscode.pathom.parser{:provides       #{:a}
                                                                                            :response-value {:a 1}}]}))
           (is (= @weights '{a 25.5})))))

     (testing "using computed-output"
       (is (= (call-parallel-reader {} :computed-out)
              #:com.wsscode.pathom.parser{:provides        #{:computed-out :more}
                                          :response-stream [#:com.wsscode.pathom.parser{:provides       #{:computed-out :more}
                                                                                        :response-value {:computed-out 42}}]}))
       (is (= (comparable-trace @trace)
              '[{:com.wsscode.pathom.core/path       [:computed-out]
                 :com.wsscode.pathom.trace/direction :com.wsscode.pathom.trace/enter
                 :com.wsscode.pathom.trace/event     :com.wsscode.pathom.connect/compute-plan}
                {:com.wsscode.pathom.connect/plan    (([:computed-out
                                                        computed-out]))
                 :com.wsscode.pathom.core/path       [:computed-out]
                 :com.wsscode.pathom.parser/provides #{:computed-out
                                                       :more}
                 :com.wsscode.pathom.trace/direction :com.wsscode.pathom.trace/leave
                 :com.wsscode.pathom.trace/event     :com.wsscode.pathom.connect/compute-plan}
                {:com.wsscode.pathom.connect/input-data {}
                 :com.wsscode.pathom.connect/sym        computed-out
                 :com.wsscode.pathom.core/path          [:computed-out]
                 :com.wsscode.pathom.trace/event        :com.wsscode.pathom.connect/call-resolver-with-cache
                 :key                                   :computed-out}
                {:com.wsscode.pathom.connect/input-data {}
                 :com.wsscode.pathom.connect/sym        computed-out
                 :com.wsscode.pathom.core/path          [:computed-out]
                 :com.wsscode.pathom.trace/direction    :com.wsscode.pathom.trace/enter
                 :com.wsscode.pathom.trace/event        :com.wsscode.pathom.connect/call-resolver
                 :com.wsscode.pathom.trace/label        computed-out
                 :key                                   :computed-out}
                {:com.wsscode.pathom.core/path       [:computed-out]
                 :com.wsscode.pathom.trace/direction :com.wsscode.pathom.trace/leave
                 :com.wsscode.pathom.trace/event     :com.wsscode.pathom.connect/call-resolver}
                {:com.wsscode.pathom.connect/sym computed-out
                 :com.wsscode.pathom.core/path   [:computed-out]
                 :com.wsscode.pathom.trace/event :com.wsscode.pathom.connect/merge-resolver-response
                 :key                            :computed-out}])))

     (testing "supports custom sort plan function"
       (with-redefs [pt/now (fn [] 0)]
         (let [errors  (atom {})
               weights (atom {'multi-path-blank 100
                              'multi-path-value 50
                              'multi-path-error 1})]
           (is (= (call-parallel-reader {::pc/resolver-weights weights
                                         ::p/errors*           errors
                                         ::pc/sort-plan        (fn [_ plan] (sort-by (comp second first) plan))} :multi-path)
                  #:com.wsscode.pathom.parser{:provides        #{:multi-path}
                                              :response-stream [#:com.wsscode.pathom.parser{:provides       #{:multi-path}
                                                                                            :response-value {}
                                                                                            :waiting        #{:multi-path}}
                                                                #:com.wsscode.pathom.parser{:provides       #{:multi-path}
                                                                                            :response-value {}
                                                                                            :waiting        #{:multi-path}}
                                                                #:com.wsscode.pathom.parser{:provides       #{:multi-path}
                                                                                            :response-value {:multi-path "X"}}]}))
           (is (= (comparable-trace @trace)
                  '[{:com.wsscode.pathom.core/path       [:multi-path]
                     :com.wsscode.pathom.trace/direction :com.wsscode.pathom.trace/enter
                     :com.wsscode.pathom.trace/event     :com.wsscode.pathom.connect/compute-plan}
                    {:com.wsscode.pathom.connect/plan    (([:multi-path
                                                            multi-path-blank])
                                                           ([:multi-path
                                                             multi-path-error])
                                                           ([:multi-path
                                                             multi-path-value]))
                     :com.wsscode.pathom.core/path       [:multi-path]
                     :com.wsscode.pathom.parser/provides #{:multi-path}
                     :com.wsscode.pathom.trace/direction :com.wsscode.pathom.trace/leave
                     :com.wsscode.pathom.trace/event     :com.wsscode.pathom.connect/compute-plan}
                    {:com.wsscode.pathom.connect/input-data {}
                     :com.wsscode.pathom.connect/sym        multi-path-blank
                     :com.wsscode.pathom.core/path          [:multi-path]
                     :com.wsscode.pathom.trace/event        :com.wsscode.pathom.connect/call-resolver-with-cache
                     :key                                   :multi-path}
                    {:com.wsscode.pathom.connect/input-data {}
                     :com.wsscode.pathom.connect/sym        multi-path-blank
                     :com.wsscode.pathom.core/path          [:multi-path]
                     :com.wsscode.pathom.trace/direction    :com.wsscode.pathom.trace/enter
                     :com.wsscode.pathom.trace/event        :com.wsscode.pathom.connect/call-resolver
                     :com.wsscode.pathom.trace/label        multi-path-blank
                     :key                                   :multi-path}
                    {:com.wsscode.pathom.core/path       [:multi-path]
                     :com.wsscode.pathom.trace/direction :com.wsscode.pathom.trace/leave
                     :com.wsscode.pathom.trace/event     :com.wsscode.pathom.connect/call-resolver}
                    {:com.wsscode.pathom.core/path       [:multi-path]
                     :com.wsscode.pathom.trace/direction :com.wsscode.pathom.trace/enter
                     :com.wsscode.pathom.trace/event     :com.wsscode.pathom.connect/compute-plan}
                    {:com.wsscode.pathom.connect/plan    (([:multi-path
                                                            multi-path-error])
                                                           ([:multi-path
                                                             multi-path-value]))
                     :com.wsscode.pathom.core/path       [:multi-path]
                     :com.wsscode.pathom.parser/provides #{:multi-path}
                     :com.wsscode.pathom.trace/direction :com.wsscode.pathom.trace/leave
                     :com.wsscode.pathom.trace/event     :com.wsscode.pathom.connect/compute-plan}
                    {:com.wsscode.pathom.connect/input-data {}
                     :com.wsscode.pathom.connect/sym        multi-path-error
                     :com.wsscode.pathom.core/path          [:multi-path]
                     :com.wsscode.pathom.trace/event        :com.wsscode.pathom.connect/call-resolver-with-cache
                     :key                                   :multi-path}
                    {:com.wsscode.pathom.connect/input-data {}
                     :com.wsscode.pathom.connect/sym        multi-path-error
                     :com.wsscode.pathom.core/path          [:multi-path]
                     :com.wsscode.pathom.trace/direction    :com.wsscode.pathom.trace/enter
                     :com.wsscode.pathom.trace/event        :com.wsscode.pathom.connect/call-resolver
                     :com.wsscode.pathom.trace/label        multi-path-error
                     :key                                   :multi-path}
                    {:com.wsscode.pathom.core/error      "class clojure.lang.ExceptionInfo: Error - {}"
                     :com.wsscode.pathom.core/path       [:multi-path]
                     :com.wsscode.pathom.trace/direction :com.wsscode.pathom.trace/leave
                     :com.wsscode.pathom.trace/event     :com.wsscode.pathom.connect/call-resolver}
                    {:com.wsscode.pathom.core/path       [:multi-path]
                     :com.wsscode.pathom.trace/direction :com.wsscode.pathom.trace/enter
                     :com.wsscode.pathom.trace/event     :com.wsscode.pathom.connect/compute-plan}
                    {:com.wsscode.pathom.connect/plan    (([:multi-path
                                                            multi-path-value]))
                     :com.wsscode.pathom.core/path       [:multi-path]
                     :com.wsscode.pathom.parser/provides #{:multi-path}
                     :com.wsscode.pathom.trace/direction :com.wsscode.pathom.trace/leave
                     :com.wsscode.pathom.trace/event     :com.wsscode.pathom.connect/compute-plan}
                    {:com.wsscode.pathom.connect/input-data {}
                     :com.wsscode.pathom.connect/sym        multi-path-value
                     :com.wsscode.pathom.core/path          [:multi-path]
                     :com.wsscode.pathom.trace/event        :com.wsscode.pathom.connect/call-resolver-with-cache
                     :key                                   :multi-path}
                    {:com.wsscode.pathom.connect/input-data {}
                     :com.wsscode.pathom.connect/sym        multi-path-value
                     :com.wsscode.pathom.core/path          [:multi-path]
                     :com.wsscode.pathom.trace/direction    :com.wsscode.pathom.trace/enter
                     :com.wsscode.pathom.trace/event        :com.wsscode.pathom.connect/call-resolver
                     :com.wsscode.pathom.trace/label        multi-path-value
                     :key                                   :multi-path}
                    {:com.wsscode.pathom.core/path       [:multi-path]
                     :com.wsscode.pathom.trace/direction :com.wsscode.pathom.trace/leave
                     :com.wsscode.pathom.trace/event     :com.wsscode.pathom.connect/call-resolver}
                    {:com.wsscode.pathom.connect/sym multi-path-value
                     :com.wsscode.pathom.core/path   [:multi-path]
                     :com.wsscode.pathom.trace/event :com.wsscode.pathom.connect/merge-resolver-response
                     :key                            :multi-path}])))))

     (testing "pick alternative path from value"
       (with-redefs [pt/now (fn [] 0)]
         (let [errors  (atom {})
               weights (atom {'multi-path-blank 10
                              'multi-path-value 50
                              'multi-path-error 100})]
           (is (= (call-parallel-reader {::pc/resolver-weights weights
                                         ::p/errors*           errors} :multi-path)
                  #:com.wsscode.pathom.parser{:provides        #{:multi-path}
                                              :response-stream [#:com.wsscode.pathom.parser{:provides       #{:multi-path}
                                                                                            :response-value {}
                                                                                            :waiting        #{:multi-path}}
                                                                #:com.wsscode.pathom.parser{:provides       #{:multi-path}
                                                                                            :response-value {:multi-path "X"}}]}))
           (is (= @weights '{multi-path-blank 9.0
                             multi-path-error 98
                             multi-path-value 24.0}))
           (is (= @errors '{}))
           (is (= (comparable-trace @trace)
                  '[{:com.wsscode.pathom.core/path       [:multi-path]
                     :com.wsscode.pathom.trace/direction :com.wsscode.pathom.trace/enter
                     :com.wsscode.pathom.trace/event     :com.wsscode.pathom.connect/compute-plan}
                    {:com.wsscode.pathom.connect/plan    (([:multi-path
                                                            multi-path-blank])
                                                           ([:multi-path
                                                             multi-path-value])
                                                           ([:multi-path
                                                             multi-path-error]))
                     :com.wsscode.pathom.core/path       [:multi-path]
                     :com.wsscode.pathom.parser/provides #{:multi-path}
                     :com.wsscode.pathom.trace/direction :com.wsscode.pathom.trace/leave
                     :com.wsscode.pathom.trace/event     :com.wsscode.pathom.connect/compute-plan}
                    {:com.wsscode.pathom.connect/input-data {}
                     :com.wsscode.pathom.connect/sym        multi-path-blank
                     :com.wsscode.pathom.core/path          [:multi-path]
                     :com.wsscode.pathom.trace/event        :com.wsscode.pathom.connect/call-resolver-with-cache
                     :key                                   :multi-path}
                    {:com.wsscode.pathom.connect/input-data {}
                     :com.wsscode.pathom.connect/sym        multi-path-blank
                     :com.wsscode.pathom.core/path          [:multi-path]
                     :com.wsscode.pathom.trace/direction    :com.wsscode.pathom.trace/enter
                     :com.wsscode.pathom.trace/event        :com.wsscode.pathom.connect/call-resolver
                     :com.wsscode.pathom.trace/label        multi-path-blank
                     :key                                   :multi-path}
                    {:com.wsscode.pathom.core/path       [:multi-path]
                     :com.wsscode.pathom.trace/direction :com.wsscode.pathom.trace/leave
                     :com.wsscode.pathom.trace/event     :com.wsscode.pathom.connect/call-resolver}
                    {:com.wsscode.pathom.core/path       [:multi-path]
                     :com.wsscode.pathom.trace/direction :com.wsscode.pathom.trace/enter
                     :com.wsscode.pathom.trace/event     :com.wsscode.pathom.connect/compute-plan}
                    {:com.wsscode.pathom.connect/plan    (([:multi-path
                                                            multi-path-value])
                                                           ([:multi-path
                                                             multi-path-error]))
                     :com.wsscode.pathom.core/path       [:multi-path]
                     :com.wsscode.pathom.parser/provides #{:multi-path}
                     :com.wsscode.pathom.trace/direction :com.wsscode.pathom.trace/leave
                     :com.wsscode.pathom.trace/event     :com.wsscode.pathom.connect/compute-plan}
                    {:com.wsscode.pathom.connect/input-data {}
                     :com.wsscode.pathom.connect/sym        multi-path-value
                     :com.wsscode.pathom.core/path          [:multi-path]
                     :com.wsscode.pathom.trace/event        :com.wsscode.pathom.connect/call-resolver-with-cache
                     :key                                   :multi-path}
                    {:com.wsscode.pathom.connect/input-data {}
                     :com.wsscode.pathom.connect/sym        multi-path-value
                     :com.wsscode.pathom.core/path          [:multi-path]
                     :com.wsscode.pathom.trace/direction    :com.wsscode.pathom.trace/enter
                     :com.wsscode.pathom.trace/event        :com.wsscode.pathom.connect/call-resolver
                     :com.wsscode.pathom.trace/label        multi-path-value
                     :key                                   :multi-path}
                    {:com.wsscode.pathom.core/path       [:multi-path]
                     :com.wsscode.pathom.trace/direction :com.wsscode.pathom.trace/leave
                     :com.wsscode.pathom.trace/event     :com.wsscode.pathom.connect/call-resolver}
                    {:com.wsscode.pathom.connect/sym multi-path-value
                     :com.wsscode.pathom.core/path   [:multi-path]
                     :com.wsscode.pathom.trace/event :com.wsscode.pathom.connect/merge-resolver-response
                     :key                            :multi-path}])))))

     (testing "pick alternative path from error"
       (with-redefs [pt/now (fn [] 0)]
         (let [errors  (atom {})
               weights (atom {'multi-path-error 5
                              'multi-path-blank 10
                              'multi-path-value 50})]
           (is (= (call-parallel-reader {::pc/resolver-weights weights
                                         ::p/errors*           errors} :multi-path)
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
           (is (= @errors '{}))
           (call-parallel-reader {::pc/resolver-weights weights} :multi-path)
           (call-parallel-reader {::pc/resolver-weights weights} :multi-path)
           (call-parallel-reader {::pc/resolver-weights weights} :multi-path)
           (is (= @weights '{multi-path-blank 2.0
                             multi-path-error 1.0
                             multi-path-value 0.8125})))))

     (testing "can't get attribute due to multiple failures"
       (with-redefs [pt/now (fn [] 0)]
         (let [errors  (atom {})
               weights (atom {'multi-path-error-error 5
                              'multi-path-error-blank 10})]
           (is (= (call-parallel-reader {::pc/resolver-weights weights
                                         ::p/errors*           errors} :multi-path-error)
                  #:com.wsscode.pathom.parser{:provides        #{:multi-path-error}
                                              :response-stream [#:com.wsscode.pathom.parser{:provides       #{:multi-path-error}
                                                                                            :response-value {}
                                                                                            :waiting        #{:multi-path-error}}
                                                                #:com.wsscode.pathom.parser{:provides       #{:multi-path-error}
                                                                                            :response-value {:multi-path-error :com.wsscode.pathom.core/not-found}}]}))
           (is (= @weights '{multi-path-error-blank 8.0
                             multi-path-error-error 4.0}))
           (is (= @errors '{}))
           (is (= (comparable-trace @trace)
                  '[{:com.wsscode.pathom.core/path       [:multi-path-error]
                     :com.wsscode.pathom.trace/direction :com.wsscode.pathom.trace/enter
                     :com.wsscode.pathom.trace/event     :com.wsscode.pathom.connect/compute-plan}
                    {:com.wsscode.pathom.connect/plan    (([:multi-path-error
                                                            multi-path-error-error])
                                                           ([:multi-path-error
                                                             multi-path-error-blank]))
                     :com.wsscode.pathom.core/path       [:multi-path-error]
                     :com.wsscode.pathom.parser/provides #{:multi-path-error}
                     :com.wsscode.pathom.trace/direction :com.wsscode.pathom.trace/leave
                     :com.wsscode.pathom.trace/event     :com.wsscode.pathom.connect/compute-plan}
                    {:com.wsscode.pathom.connect/input-data {}
                     :com.wsscode.pathom.connect/sym        multi-path-error-error
                     :com.wsscode.pathom.core/path          [:multi-path-error]
                     :com.wsscode.pathom.trace/event        :com.wsscode.pathom.connect/call-resolver-with-cache
                     :key                                   :multi-path-error}
                    {:com.wsscode.pathom.connect/input-data {}
                     :com.wsscode.pathom.connect/sym        multi-path-error-error
                     :com.wsscode.pathom.core/path          [:multi-path-error]
                     :com.wsscode.pathom.trace/direction    :com.wsscode.pathom.trace/enter
                     :com.wsscode.pathom.trace/event        :com.wsscode.pathom.connect/call-resolver
                     :com.wsscode.pathom.trace/label        multi-path-error-error
                     :key                                   :multi-path-error}
                    {:com.wsscode.pathom.core/error      "class clojure.lang.ExceptionInfo: Error 1 - {}"
                     :com.wsscode.pathom.core/path       [:multi-path-error]
                     :com.wsscode.pathom.trace/direction :com.wsscode.pathom.trace/leave
                     :com.wsscode.pathom.trace/event     :com.wsscode.pathom.connect/call-resolver}
                    {:com.wsscode.pathom.core/path       [:multi-path-error]
                     :com.wsscode.pathom.trace/direction :com.wsscode.pathom.trace/enter
                     :com.wsscode.pathom.trace/event     :com.wsscode.pathom.connect/compute-plan}
                    {:com.wsscode.pathom.connect/plan    (([:multi-path-error
                                                            multi-path-error-blank]))
                     :com.wsscode.pathom.core/path       [:multi-path-error]
                     :com.wsscode.pathom.parser/provides #{:multi-path-error}
                     :com.wsscode.pathom.trace/direction :com.wsscode.pathom.trace/leave
                     :com.wsscode.pathom.trace/event     :com.wsscode.pathom.connect/compute-plan}
                    {:com.wsscode.pathom.connect/input-data {}
                     :com.wsscode.pathom.connect/sym        multi-path-error-blank
                     :com.wsscode.pathom.core/path          [:multi-path-error]
                     :com.wsscode.pathom.trace/event        :com.wsscode.pathom.connect/call-resolver-with-cache
                     :key                                   :multi-path-error}
                    {:com.wsscode.pathom.connect/input-data {}
                     :com.wsscode.pathom.connect/sym        multi-path-error-blank
                     :com.wsscode.pathom.core/path          [:multi-path-error]
                     :com.wsscode.pathom.trace/direction    :com.wsscode.pathom.trace/enter
                     :com.wsscode.pathom.trace/event        :com.wsscode.pathom.connect/call-resolver
                     :com.wsscode.pathom.trace/label        multi-path-error-blank
                     :key                                   :multi-path-error}
                    {:com.wsscode.pathom.core/path       [:multi-path-error]
                     :com.wsscode.pathom.trace/direction :com.wsscode.pathom.trace/leave
                     :com.wsscode.pathom.trace/event     :com.wsscode.pathom.connect/call-resolver}
                    {:com.wsscode.pathom.core/path       [:multi-path-error]
                     :com.wsscode.pathom.trace/direction :com.wsscode.pathom.trace/enter
                     :com.wsscode.pathom.trace/event     :com.wsscode.pathom.connect/compute-plan}
                    {:com.wsscode.pathom.core/path       [:multi-path-error]
                     :com.wsscode.pathom.trace/direction :com.wsscode.pathom.trace/leave
                     :com.wsscode.pathom.trace/event     :com.wsscode.pathom.connect/compute-plan}])))))

     (testing "can't get attribute due to multiple failures: end in error"
       (with-redefs [pt/now (fn [] 0)]
         (let [errors  (atom {})
               weights (atom {'multi-path-error-error 10
                              'multi-path-error-blank 5})]
           (is (= (call-parallel-reader {::pc/resolver-weights weights
                                         ::p/errors*           errors} :multi-path-error)
                  #:com.wsscode.pathom.parser{:provides        #{:multi-path-error}
                                              :response-stream [#:com.wsscode.pathom.parser{:provides       #{:multi-path-error}
                                                                                            :response-value {}
                                                                                            :waiting        #{:multi-path-error}}
                                                                #:com.wsscode.pathom.parser{:provides       #{:multi-path-error}
                                                                                            :response-value {:multi-path-error ::p/reader-error}}]}))
           (is (= @weights '{multi-path-error-blank 4.0
                             multi-path-error-error 8.0}))
           (is (= @errors '{[:multi-path-error] "class clojure.lang.ExceptionInfo: Error 1 - {}"}))
           (is (= (comparable-trace @trace)
                  '[{:com.wsscode.pathom.core/path       [:multi-path-error]
                     :com.wsscode.pathom.trace/direction :com.wsscode.pathom.trace/enter
                     :com.wsscode.pathom.trace/event     :com.wsscode.pathom.connect/compute-plan}
                    {:com.wsscode.pathom.connect/plan    (([:multi-path-error
                                                            multi-path-error-blank])
                                                           ([:multi-path-error
                                                             multi-path-error-error]))
                     :com.wsscode.pathom.core/path       [:multi-path-error]
                     :com.wsscode.pathom.parser/provides #{:multi-path-error}
                     :com.wsscode.pathom.trace/direction :com.wsscode.pathom.trace/leave
                     :com.wsscode.pathom.trace/event     :com.wsscode.pathom.connect/compute-plan}
                    {:com.wsscode.pathom.connect/input-data {}
                     :com.wsscode.pathom.connect/sym        multi-path-error-blank
                     :com.wsscode.pathom.core/path          [:multi-path-error]
                     :com.wsscode.pathom.trace/event        :com.wsscode.pathom.connect/call-resolver-with-cache
                     :key                                   :multi-path-error}
                    {:com.wsscode.pathom.connect/input-data {}
                     :com.wsscode.pathom.connect/sym        multi-path-error-blank
                     :com.wsscode.pathom.core/path          [:multi-path-error]
                     :com.wsscode.pathom.trace/direction    :com.wsscode.pathom.trace/enter
                     :com.wsscode.pathom.trace/event        :com.wsscode.pathom.connect/call-resolver
                     :com.wsscode.pathom.trace/label        multi-path-error-blank
                     :key                                   :multi-path-error}
                    {:com.wsscode.pathom.core/path       [:multi-path-error]
                     :com.wsscode.pathom.trace/direction :com.wsscode.pathom.trace/leave
                     :com.wsscode.pathom.trace/event     :com.wsscode.pathom.connect/call-resolver}
                    {:com.wsscode.pathom.core/path       [:multi-path-error]
                     :com.wsscode.pathom.trace/direction :com.wsscode.pathom.trace/enter
                     :com.wsscode.pathom.trace/event     :com.wsscode.pathom.connect/compute-plan}
                    {:com.wsscode.pathom.connect/plan    (([:multi-path-error
                                                            multi-path-error-error]))
                     :com.wsscode.pathom.core/path       [:multi-path-error]
                     :com.wsscode.pathom.parser/provides #{:multi-path-error}
                     :com.wsscode.pathom.trace/direction :com.wsscode.pathom.trace/leave
                     :com.wsscode.pathom.trace/event     :com.wsscode.pathom.connect/compute-plan}
                    {:com.wsscode.pathom.connect/input-data {}
                     :com.wsscode.pathom.connect/sym        multi-path-error-error
                     :com.wsscode.pathom.core/path          [:multi-path-error]
                     :com.wsscode.pathom.trace/event        :com.wsscode.pathom.connect/call-resolver-with-cache
                     :key                                   :multi-path-error}
                    {:com.wsscode.pathom.connect/input-data {}
                     :com.wsscode.pathom.connect/sym        multi-path-error-error
                     :com.wsscode.pathom.core/path          [:multi-path-error]
                     :com.wsscode.pathom.trace/direction    :com.wsscode.pathom.trace/enter
                     :com.wsscode.pathom.trace/event        :com.wsscode.pathom.connect/call-resolver
                     :com.wsscode.pathom.trace/label        multi-path-error-error
                     :key                                   :multi-path-error}
                    {:com.wsscode.pathom.core/error      "class clojure.lang.ExceptionInfo: Error 1 - {}"
                     :com.wsscode.pathom.core/path       [:multi-path-error]
                     :com.wsscode.pathom.trace/direction :com.wsscode.pathom.trace/leave
                     :com.wsscode.pathom.trace/event     :com.wsscode.pathom.connect/call-resolver}
                    {:com.wsscode.pathom.core/path       [:multi-path-error]
                     :com.wsscode.pathom.trace/direction :com.wsscode.pathom.trace/enter
                     :com.wsscode.pathom.trace/event     :com.wsscode.pathom.connect/compute-plan}
                    {:com.wsscode.pathom.core/path       [:multi-path-error]
                     :com.wsscode.pathom.trace/direction :com.wsscode.pathom.trace/leave
                     :com.wsscode.pathom.trace/event     :com.wsscode.pathom.connect/compute-plan}
                    {:com.wsscode.pathom.connect/sym multi-path-error-error
                     :com.wsscode.pathom.core/path   [:multi-path-error]
                     :com.wsscode.pathom.trace/event :com.wsscode.pathom.connect/resolver-error
                     :key                            :multi-path-error}])))))

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
                 :com.wsscode.pathom.parser/provides #{:a
                                                       :b}
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
                 :com.wsscode.pathom.trace/label        a
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
                 :com.wsscode.pathom.trace/label        a->b
                 :key                                   :b}
                {:com.wsscode.pathom.core/path       [:b]
                 :com.wsscode.pathom.trace/direction :com.wsscode.pathom.trace/leave
                 :com.wsscode.pathom.trace/event     :com.wsscode.pathom.connect/call-resolver}
                {:com.wsscode.pathom.connect/sym a->b
                 :com.wsscode.pathom.core/path   [:b]
                 :com.wsscode.pathom.trace/event :com.wsscode.pathom.connect/merge-resolver-response
                 :key                            :b}])))

     #_
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
                   :com.wsscode.pathom.parser/provides #{:a
                                                         :b}
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
                   :com.wsscode.pathom.trace/label        a->b
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
                 :com.wsscode.pathom.parser/provides #{:b}
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
                 :com.wsscode.pathom.trace/label        a->b
                 :key                                   :b}
                {:com.wsscode.pathom.core/path       [:b]
                 :com.wsscode.pathom.trace/direction :com.wsscode.pathom.trace/leave
                 :com.wsscode.pathom.trace/event     :com.wsscode.pathom.connect/call-resolver}
                {:com.wsscode.pathom.connect/sym a->b
                 :com.wsscode.pathom.core/path   [:b]
                 :com.wsscode.pathom.trace/event :com.wsscode.pathom.connect/merge-resolver-response
                 :key                            :b}])))

     (testing "multi step resolver when previous value is not available"
       (let [errors (atom {})]
         (is (= (call-parallel-reader {::p/entity  (atom {:z1 5})
                                       ::p/errors* errors} :z3)
                #:com.wsscode.pathom.parser{:provides        #{:z2
                                                               :z3}
                                            :response-stream [#:com.wsscode.pathom.parser{:provides       #{:z2
                                                                                                            :z3}
                                                                                          :response-value {:z2 :com.wsscode.pathom.core/reader-error}}]}))
         (is (= @errors '{[:z3] "class clojure.lang.ExceptionInfo: Insufficient resolver output - {:com.wsscode.pathom.parser/response-value {}, :key :z2}"}))
         (is (= (comparable-trace @trace)
                '[{:com.wsscode.pathom.core/path       [:z3]
                   :com.wsscode.pathom.trace/direction :com.wsscode.pathom.trace/enter
                   :com.wsscode.pathom.trace/event     :com.wsscode.pathom.connect/compute-plan}
                  {:com.wsscode.pathom.connect/plan    (([:z2
                                                          no-path-z]
                                                          [:z3
                                                           no-path-z1]))
                   :com.wsscode.pathom.core/path       [:z3]
                   :com.wsscode.pathom.parser/provides #{:z2
                                                         :z3}
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
                   :com.wsscode.pathom.trace/label        no-path-z
                   :key                                   :z3}
                  {:com.wsscode.pathom.core/path       [:z3]
                   :com.wsscode.pathom.trace/direction :com.wsscode.pathom.trace/leave
                   :com.wsscode.pathom.trace/event     :com.wsscode.pathom.connect/call-resolver}
                  {:com.wsscode.pathom.core/path       [:z3]
                   :com.wsscode.pathom.trace/direction :com.wsscode.pathom.trace/enter
                   :com.wsscode.pathom.trace/event     :com.wsscode.pathom.connect/compute-plan}
                  {:com.wsscode.pathom.core/path       [:z3]
                   :com.wsscode.pathom.trace/direction :com.wsscode.pathom.trace/leave
                   :com.wsscode.pathom.trace/event     :com.wsscode.pathom.connect/compute-plan}]))))

     (testing "use cache when available"
       (is (= (call-parallel-reader {::p/request-cache (atom {['a {} {}] (go-promise {:a 3})})} :b)
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
                 :com.wsscode.pathom.parser/provides #{:a
                                                       :b}
                 :com.wsscode.pathom.trace/direction :com.wsscode.pathom.trace/leave
                 :com.wsscode.pathom.trace/event     :com.wsscode.pathom.connect/compute-plan}
                {:com.wsscode.pathom.connect/input-data {}
                 :com.wsscode.pathom.connect/sym        a
                 :com.wsscode.pathom.core/path          [:b]
                 :com.wsscode.pathom.trace/event        :com.wsscode.pathom.connect/call-resolver-with-cache
                 :key                                   :b}
                {:com.wsscode.pathom.core/cache-key [a
                                                     {}
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
                                                     {:a 3}
                                                     {}]
                 :com.wsscode.pathom.core/path      [:b]
                 :com.wsscode.pathom.trace/event    :com.wsscode.pathom.core/cache-miss}
                {:com.wsscode.pathom.connect/input-data {:a 3}
                 :com.wsscode.pathom.connect/sym        a->b
                 :com.wsscode.pathom.core/path          [:b]
                 :com.wsscode.pathom.trace/direction    :com.wsscode.pathom.trace/enter
                 :com.wsscode.pathom.trace/event        :com.wsscode.pathom.connect/call-resolver
                 :com.wsscode.pathom.trace/label        a->b
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
                   {:i 1}
                   {}] {:l "a"}
                  [i->l
                   {:i 2}
                   {}] {:l "b"}
                  [i->l
                   {:i 3}
                   {}] {:l "c"}}))

         (is (= (comparable-trace @trace)
                '[{:com.wsscode.pathom.core/path       [:l]
                   :com.wsscode.pathom.trace/direction :com.wsscode.pathom.trace/enter
                   :com.wsscode.pathom.trace/event     :com.wsscode.pathom.connect/compute-plan}
                  {:com.wsscode.pathom.connect/plan    (([:l
                                                          i->l]))
                   :com.wsscode.pathom.core/path       [:l]
                   :com.wsscode.pathom.parser/provides #{:l}
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
                  {:com.wsscode.pathom.core/cache-key [i->l
                                                       {:i 1}
                                                       {}]
                   :com.wsscode.pathom.core/path      [:l]
                   :com.wsscode.pathom.trace/event    :com.wsscode.pathom.core/cache-miss}
                  {:com.wsscode.pathom.core/cache-key [i->l
                                                       {:i 2}
                                                       {}]
                   :com.wsscode.pathom.core/path      [:l]
                   :com.wsscode.pathom.trace/event    :com.wsscode.pathom.core/cache-miss}
                  {:com.wsscode.pathom.core/cache-key [i->l
                                                       {:i 3}
                                                       {}]
                   :com.wsscode.pathom.core/path      [:l]
                   :com.wsscode.pathom.trace/event    :com.wsscode.pathom.core/cache-miss}
                  {:com.wsscode.pathom.connect/input-data [{:i 1}
                                                           {:i 2}
                                                           {:i 3}]
                   :com.wsscode.pathom.connect/sym        i->l
                   :com.wsscode.pathom.core/path          [:l]
                   :com.wsscode.pathom.trace/direction    :com.wsscode.pathom.trace/enter
                   :com.wsscode.pathom.trace/event        :com.wsscode.pathom.connect/call-resolver
                   :com.wsscode.pathom.trace/label        i->l
                   :key                                   :l}
                  {:com.wsscode.pathom.core/path       [:l]
                   :com.wsscode.pathom.trace/direction :com.wsscode.pathom.trace/leave
                   :com.wsscode.pathom.trace/event     :com.wsscode.pathom.connect/call-resolver}
                  {:com.wsscode.pathom.connect/items-count 3
                   :com.wsscode.pathom.core/path           [:l]
                   :com.wsscode.pathom.trace/event         :com.wsscode.pathom.connect/batch-result-ready}
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
                   :com.wsscode.pathom.parser/provides #{:error}
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
                   :com.wsscode.pathom.trace/label        error
                   :key                                   :error}
                  {:com.wsscode.pathom.core/error      "class clojure.lang.ExceptionInfo: Error - {}"
                   :com.wsscode.pathom.core/path       [:error]
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
                                                                                          :response-value {:d :com.wsscode.pathom.core/reader-error}}]}))
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
                   :com.wsscode.pathom.parser/provides #{:d
                                                         :error}
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
                   :com.wsscode.pathom.trace/label        error
                   :key                                   :d}
                  {:com.wsscode.pathom.core/error      "class clojure.lang.ExceptionInfo: Error - {}"
                   :com.wsscode.pathom.core/path       [:d]
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

     (testing "attribute with dependency can't be resolved because of an on the way"
       (let [errors (atom {})]
         (is (= (call-parallel-reader {::p/errors* errors} :error-trail-final)
                #:com.wsscode.pathom.parser{:provides        #{:error-trail-dep
                                                               :error-trail-final}
                                            :response-stream [#:com.wsscode.pathom.parser{:provides       #{:error-trail-dep
                                                                                                            :error-trail-final}
                                                                                          :response-value {:error-trail-dep :com.wsscode.pathom.core/reader-error}}]}))
         (is (= @errors {[:error-trail-final] "class clojure.lang.ExceptionInfo: Insufficient resolver output - {:com.wsscode.pathom.parser/response-value {:error-trail-dep :com.wsscode.pathom.core/reader-error}, :key :error-trail-dep}"}))
         (is (= (comparable-trace @trace)
                '[{:com.wsscode.pathom.core/path       [:error-trail-final]
                   :com.wsscode.pathom.trace/direction :com.wsscode.pathom.trace/enter
                   :com.wsscode.pathom.trace/event     :com.wsscode.pathom.connect/compute-plan}
                  {:com.wsscode.pathom.connect/plan    (([:error-trail-dep
                                                          error-trail-dep]
                                                          [:error-trail-final
                                                           error-trail]))
                   :com.wsscode.pathom.core/path       [:error-trail-final]
                   :com.wsscode.pathom.parser/provides #{:error-trail-dep
                                                         :error-trail-final}
                   :com.wsscode.pathom.trace/direction :com.wsscode.pathom.trace/leave
                   :com.wsscode.pathom.trace/event     :com.wsscode.pathom.connect/compute-plan}
                  {:com.wsscode.pathom.connect/input-data {}
                   :com.wsscode.pathom.connect/sym        error-trail-dep
                   :com.wsscode.pathom.core/path          [:error-trail-final]
                   :com.wsscode.pathom.trace/event        :com.wsscode.pathom.connect/call-resolver-with-cache
                   :key                                   :error-trail-final}
                  {:com.wsscode.pathom.connect/input-data {}
                   :com.wsscode.pathom.connect/sym        error-trail-dep
                   :com.wsscode.pathom.core/path          [:error-trail-final]
                   :com.wsscode.pathom.trace/direction    :com.wsscode.pathom.trace/enter
                   :com.wsscode.pathom.trace/event        :com.wsscode.pathom.connect/call-resolver
                   :com.wsscode.pathom.trace/label        error-trail-dep
                   :key                                   :error-trail-final}
                  {:com.wsscode.pathom.core/path       [:error-trail-final]
                   :com.wsscode.pathom.trace/direction :com.wsscode.pathom.trace/leave
                   :com.wsscode.pathom.trace/event     :com.wsscode.pathom.connect/call-resolver}
                  {:com.wsscode.pathom.core/path       [:error-trail-final]
                   :com.wsscode.pathom.trace/direction :com.wsscode.pathom.trace/enter
                   :com.wsscode.pathom.trace/event     :com.wsscode.pathom.connect/compute-plan}
                  {:com.wsscode.pathom.core/path       [:error-trail-final]
                   :com.wsscode.pathom.trace/direction :com.wsscode.pathom.trace/leave
                   :com.wsscode.pathom.trace/event     :com.wsscode.pathom.connect/compute-plan}]))))

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
                   :com.wsscode.pathom.parser/provides #{:invalid}
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
                   :com.wsscode.pathom.trace/label        invalid
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
                   {:i 1}
                   {}] {:error-batch :com.wsscode.pathom.core/reader-error}
                  [error-batch
                   {:i 2}
                   {}] {:error-batch :com.wsscode.pathom.core/reader-error}
                  [error-batch
                   {:i 3}
                   {}] {:error-batch :com.wsscode.pathom.core/reader-error}}))

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
                   :com.wsscode.pathom.parser/provides #{:error-batch}
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
                  {:com.wsscode.pathom.core/cache-key [error-batch
                                                       {:i 1}
                                                       {}]
                   :com.wsscode.pathom.core/path      [:list
                                                       0
                                                       :error-batch]
                   :com.wsscode.pathom.trace/event    :com.wsscode.pathom.core/cache-miss}
                  {:com.wsscode.pathom.core/cache-key [error-batch
                                                       {:i 2}
                                                       {}]
                   :com.wsscode.pathom.core/path      [:list
                                                       0
                                                       :error-batch]
                   :com.wsscode.pathom.trace/event    :com.wsscode.pathom.core/cache-miss}
                  {:com.wsscode.pathom.core/cache-key [error-batch
                                                       {:i 3}
                                                       {}]
                   :com.wsscode.pathom.core/path      [:list
                                                       0
                                                       :error-batch]
                   :com.wsscode.pathom.trace/event    :com.wsscode.pathom.core/cache-miss}
                  {:com.wsscode.pathom.connect/input-data [{:i 1}
                                                           {:i 2}
                                                           {:i 3}]
                   :com.wsscode.pathom.connect/sym        error-batch
                   :com.wsscode.pathom.core/path          [:list
                                                           0
                                                           :error-batch]
                   :com.wsscode.pathom.trace/direction    :com.wsscode.pathom.trace/enter
                   :com.wsscode.pathom.trace/event        :com.wsscode.pathom.connect/call-resolver
                   :com.wsscode.pathom.trace/label        error-batch
                   :key                                   :error-batch}
                  {:com.wsscode.pathom.core/error      "class clojure.lang.ExceptionInfo: Error - {}"
                   :com.wsscode.pathom.core/path       [:list
                                                        0
                                                        :error-batch]
                   :com.wsscode.pathom.trace/direction :com.wsscode.pathom.trace/leave
                   :com.wsscode.pathom.trace/event     :com.wsscode.pathom.connect/call-resolver}
                  {:com.wsscode.pathom.core/error  "class clojure.lang.ExceptionInfo: Error - {}"
                   :com.wsscode.pathom.core/path   [:list
                                                    0
                                                    :error-batch]
                   :com.wsscode.pathom.trace/event :com.wsscode.pathom.connect/batch-result-error}
                  {:com.wsscode.pathom.connect/items-count 3
                   :com.wsscode.pathom.core/path           [:list
                                                            0
                                                            :error-batch]
                   :com.wsscode.pathom.trace/event         :com.wsscode.pathom.connect/batch-result-ready}
                  {:com.wsscode.pathom.connect/input-data {:i 1}
                   :com.wsscode.pathom.connect/sym        error-batch
                   :com.wsscode.pathom.core/path          [:list
                                                           0
                                                           :error-batch]
                   :com.wsscode.pathom.trace/direction    :com.wsscode.pathom.trace/leave
                   :com.wsscode.pathom.trace/event        :com.wsscode.pathom.connect/call-resolver-batch
                   :key                                   :error-batch}
                  {:com.wsscode.pathom.core/path       [:list
                                                        0
                                                        :error-batch]
                   :com.wsscode.pathom.trace/direction :com.wsscode.pathom.trace/enter
                   :com.wsscode.pathom.trace/event     :com.wsscode.pathom.connect/compute-plan}
                  {:com.wsscode.pathom.core/path       [:list
                                                        0
                                                        :error-batch]
                   :com.wsscode.pathom.trace/direction :com.wsscode.pathom.trace/leave
                   :com.wsscode.pathom.trace/event     :com.wsscode.pathom.connect/compute-plan}]))))))

(def parser-p
  (p/parallel-parser {::p/env     {::p/reader             [p/map-reader pc/parallel-reader pc/open-ident-reader pc/index-reader]
                                   ::pc/resolver-dispatch resolver-fn-p
                                   ::pc/indexes           @pindexes}
                      ::p/mutate  pc/mutate-async
                      ::p/plugins [p/error-handler-plugin
                                   p/request-cache-plugin
                                   p/trace-plugin]}))

(pc/defresolver thing->dep [_ _]
  {::pc/output [:dep]}
  (go
    {:dep "x"}))

(pc/defresolver provide-nothing [_ _]
  {::pc/input  #{:dep}
   ::pc/output [:a :b]}
  (go
    {}))

(pc/defresolver require-a-b-from-nothing [_ {:keys [a]}]
  {::pc/input  #{:a :b}
   ::pc/output [:c]}
  (go
    {:c a}))

(defn custom-pparser [registry env tx]
  (let [parser (p/parallel-parser {::p/env     {::p/reader [p/map-reader pc/parallel-reader pc/open-ident-reader]}
                                   ::p/mutate  pc/mutate-async
                                   ::p/plugins [(pc/connect-plugin {::pc/register registry})
                                                p/error-handler-plugin
                                                p/request-cache-plugin
                                                p/trace-plugin]})]
    (parser env tx)))

(defn register-oir [resolvers]
  (let [resolvers (walk/postwalk
                    (fn [x]
                      (if (and (map? x) (contains? x ::pc/output))
                        (assoc x ::pc/resolve (fn [_ _]))
                        x))
                    resolvers)]
    (::pc/index-oir (pc/register {} resolvers))))

(defn compute-paths
  ([attr resolvers] (compute-paths attr #{} #{} resolvers))
  ([attr good-keys resolvers] (compute-paths attr good-keys #{} resolvers))
  ([attr good-keys bad-keys resolvers]
   (let [index (if (map? resolvers) resolvers (register-oir resolvers))]
     (pc/compute-paths index good-keys bad-keys attr))))

(deftest test-compute-paths
  (is (= (compute-paths :global
           [{::pc/sym    'global
             ::pc/output [:global]}])
         '#{([:global global])}))

  (is (= (compute-paths :global-1
           [{::pc/sym    'global
             ::pc/output [:global]}
            {::pc/sym    'global-1
             ::pc/input  #{:global}
             ::pc/output [:global-1]}])
         '#{([:global global]
              [:global-1 global-1])}))

  (is (= (compute-paths :global-2
           [{::pc/sym    'global
             ::pc/output [:global]}
            {::pc/sym    'global-1
             ::pc/input  #{:global}
             ::pc/output [:global-1]}
            {::pc/sym    'global-2
             ::pc/input  #{:global-1}
             ::pc/output [:global-2]}])
         '#{([:global global]
              [:global-1 global-1]
              [:global-2 global-2])}))

  (is (= (compute-paths :b
           #{:a}
           [{::pc/sym    'x
             ::pc/input  #{:a}
             ::pc/output [:b]}])
         '#{([:b x])}))

  (is (= (compute-paths :b
           #{:c}
           [{::pc/sym    'x
             ::pc/input  #{:a}
             ::pc/output [:b]}])
         '#{}))

  (is (= (compute-paths :multi
           [{::pc/sym    'global-a
             ::pc/output [:global-a]}
            {::pc/sym    'global-b
             ::pc/output [:global-b]}
            {::pc/sym    'multi
             ::pc/input  #{:global-a :global-b}
             ::pc/output [:multi]}])
         '#{([:global-a global-a]
              [:global-b global-b]
              [:multi multi])}))

  (is (= (compute-paths :multi
           #{:id}
           [{::pc/sym    'from-id
             ::pc/input  #{:id}
             ::pc/output [:a :b]}
            {::pc/sym    'multi
             ::pc/input  #{:a :b}
             ::pc/output [:multi]}])
         '#{([:b from-id]
              [:multi multi])}))

  (is (= (compute-paths :multi
           #{:id}
           #{:a}
           [{::pc/sym    'from-id
             ::pc/input  #{:id}
             ::pc/output [:a :b]}
            {::pc/sym    'multi
             ::pc/input  #{:a :b}
             ::pc/output [:multi]}])
         '#{}))

  (is (= (compute-paths :c
           [{::pc/sym    'dep
             ::pc/output [:dep]}
            {::pc/sym    'ab
             ::pc/input  #{:dep}
             ::pc/output [:a :b]}
            {::pc/sym    'c
             ::pc/input  #{:a :b}
             ::pc/output [:c]}])
         '#{([:dep dep]
              [:a ab]
              [:c c])}))

  (is (= (compute-paths :complex-out
           #{:provided-a
             :provided-b
             :provided-c}
           [{::pc/sym    'global-dep
             ::pc/output [:global-dep]}
            {::pc/sym    'res-dep-a
             ::pc/input  #{:provided-c}
             ::pc/output [:single-dep-a]}
            {::pc/sym    'res-dep-b
             ::pc/input  #{:provided-c}
             ::pc/output [:single-dep-b]}
            {::pc/sym    'res-multi-dep
             ::pc/input  #{:provided-b :provided-a}
             ::pc/output [:multi-dep]}
            {::pc/sym    'complex
             ::pc/input  #{:global-dep
                           :multi-dep
                           :single-dep-a
                           :single-dep-b}
             ::pc/output [:complex-out]}])
         '#{([:single-dep-a res-dep-a]
              [:multi-dep res-multi-dep]
              [:single-dep-b res-dep-b]
              [:global-dep global-dep]
              [:complex-out complex])}))

  (is (= (compute-paths :account/next-close-date
           #{:customer/id}
           [{::pc/sym    'customer
             ::pc/input  #{:customer/id}
             ::pc/output [:account/id]}
            {::pc/sym    'account
             ::pc/input  #{:account/id}
             ::pc/output [:account/precise-credit-limit :account/id :account/next-due-date]}
            {::pc/sym    'balances
             ::pc/input  #{:account/precise-credit-limit :account/id :account/next-due-date}
             ::pc/output [:account/next-close-date]}])
         '#{([:account/id customer]
              [:account/precise-credit-limit account]
              [:account/next-close-date balances])}))

  (is (= (compute-paths :account/id
           #{}
           '{:account/id {#{:card/id} #{card}},
             :card/id    {#{:card/id} #{card-item}}})
         '#{}))

  (is (= (compute-paths :customer/id
           #{}
           '{:customer/id  {#{:customer/cpf} #{account}},
             :customer/cpf {#{:customer/id} #{card}}})
         '#{}))

  (is (= (compute-paths :account/id
           #{:customer/id}
           '{:purchase/id {#{:customer/id :purchase/id} #{purchase}}
             :account/id  {#{:purchase/id} #{account}}})
         '#{})))

(defonce quick-parser-trace* (atom []))

#?(:clj
   (defn quick-parser [{::p/keys  [env]
                        ::pc/keys [register]} query]
     (let [trace  (atom [])
           parser (p/parallel-parser {::p/env     (merge {::p/reader               [p/map-reader
                                                                                    pc/parallel-reader
                                                                                    pc/open-ident-reader
                                                                                    p/env-placeholder-reader]
                                                          ::pt/trace*              trace
                                                          ::p/placeholder-prefixes #{">"}}
                                                         env)
                                      ::p/mutate  pc/mutate-async
                                      ::p/plugins [(pc/connect-plugin {::pc/register register})
                                                   p/error-handler-plugin
                                                   p/request-cache-plugin
                                                   p/trace-plugin]})
           res (async/<!! (parser {} query))]
       (reset! quick-parser-trace* @trace)
       res)))

#?(:clj
   (defn quick-parser-async [{::p/keys  [env]
                              ::pc/keys [register]} query]
     (let [trace  (atom [])
           parser (p/async-parser {::p/env     (merge {::p/reader               [p/map-reader
                                                                                 pc/async-reader2
                                                                                 pc/open-ident-reader
                                                                                 p/env-placeholder-reader]
                                                       ::pt/trace*              trace
                                                       ::p/placeholder-prefixes #{">"}}
                                                      env)
                                   ::p/mutate  pc/mutate-async
                                   ::p/plugins [(pc/connect-plugin {::pc/register register})
                                                p/error-handler-plugin
                                                p/request-cache-plugin
                                                p/trace-plugin]})
           res    (async/<!! (parser {} query))]
       (reset! quick-parser-trace* @trace)
       res)))

(defn quick-parser-serial [{::p/keys  [env]
                            ::pc/keys [register]} query]
  (let [trace  (atom [])
        parser (p/parser {::p/env     (merge {::p/reader               [p/map-reader
                                                                        pc/reader2
                                                                        pc/open-ident-reader
                                                                        p/env-placeholder-reader]
                                              ::pt/trace*              trace
                                              ::p/placeholder-prefixes #{">"}}
                                             env)
                          ::p/mutate  pc/mutate
                          ::p/plugins [(pc/connect-plugin {::pc/register register})
                                       p/error-handler-plugin
                                       p/request-cache-plugin
                                       p/trace-plugin]})
        res    (parser {} query)]
    (reset! quick-parser-trace* @trace)
    res))

(deftest test-serial-parser-reader2
  (is (= (quick-parser-serial {::pc/register [(pc/resolver 'x
                                                {::pc/output [:x]}
                                                (fn [_ _] {}))
                                              (pc/resolver 'y
                                                {::pc/input  #{:x}
                                                 ::pc/output [:y]}
                                                (fn [_ _] {:y true}))]}
           [:y])
         {:y ::p/not-found}))

  (testing "elide env from mutation when user sends no query"
    (is (= (quick-parser-serial {::pc/register [(pc/mutation 'x
                                                  {}
                                                  (fn [env _] {::p/env env}))]}
             '[(x {})])
           '{x {}}))))

#?(:clj
   (deftest test-parallel-parser-with-connect
     (testing "skip resolver if value is resolved"
       (let [c      (atom 0)
             config {::p/env       {:counter c}
                     ::pc/register [(pc/resolver 'a
                                      {::pc/output [:a]}
                                      (fn [env _]
                                        {:a 1 :b 3}))

                                    (pc/resolver 'base
                                      {::pc/input  #{:a}
                                       ::pc/output [:b :z]}
                                      (fn [{:keys [counter]} _]
                                        (swap! counter inc)
                                        {:b 2 :z 10}))]}
             check  (fn [parser]
                      (reset! c 0)
                      (parser config [:b])
                      (let [cs @c]
                        (parser config [:b :z])
                        [cs @c]))]
         (is (= [0 1] (check quick-parser)))
         (is (= [0 1] (check quick-parser-serial)))
         (is (= [0 1] (check quick-parser-async))))

       (let [c (atom 0)]
         (quick-parser {::p/env       {:counter c}
                        ::pc/register [(pc/resolver 'a
                                         {::pc/output [:a]}
                                         (fn [env _]
                                           {:a 1 :b 3}))

                                       (pc/resolver 'base
                                         {::pc/input  #{:a}
                                          ::pc/output [:b :z]}
                                         (fn [{:keys [counter]} _]
                                           (swap! counter inc)
                                           {:b 2 :z 10}))]}
           '[:b :z])
         (is (= 1 @c))))

     (testing "using root-query"
       (is (= (quick-parser {::pc/register [(pc/resolver 'base
                                              {::pc/output [{:base [{:deep [:data]}]}]}
                                              (fn [env _]
                                                {:base {:deep {:data "value"}}}))

                                            (pc/resolver 'root-query
                                              {::pc/output [:root-query]}
                                              (fn [{::p/keys [root-query]} _]
                                                {:root-query root-query}))]}
                '[{:base [{:deep [:root-query]}]}])
              {:base {:deep {:root-query [{:base [{:deep [:root-query]}]}]}}})))

     (testing "parallel mutation join with environment override"
       (is (= (quick-parser {::pc/register [(pc/resolver 'token-value
                                              {::pc/output [:nada
                                                            {:token-complex [:id]}]}
                                              (fn [env _]
                                                (let [token 123]
                                                  {:nada          nil
                                                   :token-complex {:id     token
                                                                   ::p/env (assoc env :extra (str token " - data"))}})))

                                            (pc/resolver 'env-data
                                              {::pc/output [:extra]}
                                              (fn [{:keys [extra]} _]
                                                {:extra extra}))]}
                '[:nada
                  {:token-complex [:id
                                   :extra]}])
              {:nada nil, :token-complex {:id 123, :extra "123 - data"}})))

     (testing "error from uncached resolver"
       (is (= (quick-parser {::p/env       {}
                             ::pc/register [(pc/resolver 'a
                                              {::pc/input  #{:id}
                                               ::pc/output [:certificates]
                                               ::pc/cache? false}
                                              (fn [_ _]
                                                (throw (ex-info "Error" {}))))]}
                [{[:id 123]
                  [:certificates]}])
              {[:id 123]                       {:certificates :com.wsscode.pathom.core/reader-error},
               :com.wsscode.pathom.core/errors {[[:id 123] :certificates] "class clojure.lang.ExceptionInfo: Error - {}"}})))

     (testing "error during nested processing with error"
       (is (= (quick-parser {::p/env       {::pp/key-process-timeout 2000}
                             ::pc/register [(pc/resolver 'a
                                              {::pc/input  #{:id}
                                               ::pc/output [:certificates]}
                                              (fn [_ _]
                                                (throw (ex-info "Deu Ruim" {}))))
                                            (pc/resolver 'b
                                              {::pc/input  #{:certificates}
                                               ::pc/output [:whatever]}
                                              (fn [_ _]
                                                {:whatever "bla"}))
                                            (pc/resolver 'c
                                              {::pc/input  #{:whatever}
                                               ::pc/output [:c]}
                                              (fn [_ _]
                                                {:c 1}))
                                            (pc/resolver 'd
                                              {::pc/input  #{:certificates}
                                               ::pc/output [:d]}
                                              (fn [_ _]
                                                {:d 1}))]}
                [{[:id 123]
                  [:c :d]}])
              {[:id 123]                       {:c :com.wsscode.pathom.core/reader-error,
                                                :d :com.wsscode.pathom.core/reader-error},
               :com.wsscode.pathom.core/errors {[[:id 123] :c] "class clojure.lang.ExceptionInfo: Deu Ruim - {}",
                                                [[:id 123] :d] "class clojure.lang.ExceptionInfo: Deu Ruim - {}"}}))
       (is (= (quick-parser {::p/env       {::pp/key-process-timeout 2000}
                             ::pc/register [(pc/resolver 'a
                                              {::pc/input  #{:id}
                                               ::pc/output [:certificates]}
                                              (fn [_ _]
                                                (throw (ex-info "Deu Ruim" {}))))
                                            (pc/resolver 'b
                                              {::pc/input  #{:certificates}
                                               ::pc/output [:whatever]}
                                              (fn [_ _]
                                                {:whatever "bla"}))
                                            (pc/resolver 'c
                                              {::pc/input  #{:whatever}
                                               ::pc/output [:c]}
                                              (fn [_ _]
                                                {:c 1}))
                                            (pc/resolver 'd
                                              {::pc/input  #{:whatever}
                                               ::pc/output [:d]}
                                              (fn [_ _]
                                                {:d 1}))]}
                [{[:id 123]
                  [:c :d]}])
              {[:id 123]                       {:c :com.wsscode.pathom.core/reader-error,
                                                :d :com.wsscode.pathom.core/reader-error},
               :com.wsscode.pathom.core/errors {[[:id 123] :c] "class clojure.lang.ExceptionInfo: Deu Ruim - {}",
                                                [[:id 123] :d] "class clojure.lang.ExceptionInfo: Deu Ruim - {}"}}))

       (is (= (quick-parser {::p/env       {::pp/key-process-timeout 2000}
                             ::pc/register [(pc/resolver 'a
                                              {::pc/input  #{:id}
                                               ::pc/output [:certificates]
                                               ::pc/cache? false}
                                              (fn [_ _]
                                                (throw (ex-info "Deu Ruim" {}))))
                                            (pc/resolver 'b
                                              {::pc/input  #{:certificates}
                                               ::pc/output [:whatever]}
                                              (fn [_ _]
                                                {:whatever "bla"}))
                                            (pc/resolver 'c
                                              {::pc/input  #{:whatever}
                                               ::pc/output [:c]}
                                              (fn [_ _]
                                                {:c 1}))
                                            (pc/resolver 'd
                                              {::pc/input  #{:whatever}
                                               ::pc/output [:d]}
                                              (fn [_ _]
                                                {:d 1}))]}
                [{[:id 123]
                  [:c :d]}]))))

     (testing "global resolver times out"
       (is (= {:com.wsscode.pathom.core/errors {[] "class clojure.lang.ExceptionInfo: Parallel read timeout - {:timeout 200}"}}
              (quick-parser {::p/env       {::pp/key-process-timeout 200}
                             ::pc/register [(pc/resolver 'a
                                                         {::pc/input  #{}
                                                          ::pc/output [:whatever]}
                                                         (fn [_ _]
                                                           {:whatever (Thread/sleep 210)}))]}
                            [:whatever]))))

     (testing "rename ident reads"
       (is (= (async/<!!
                (parser-p {}
                  [{'([:a 3] {:pathom/as :c}) [:b]}]))
              {:c {:b 13}}))
       (is (= (async/<!!
                (parser-p {}
                  ['(:a {:pathom/as :c})
                   '(:a {:pathom/as :d})]))
              {:c 1
               :d 1}))
       (is (= (quick-parser
                {::pc/register [(pc/resolver 'foo-resolver
                                  {::pc/input  #{}
                                   ::pc/output [{:foos [:foo-id]}]}
                                  (fn [_ _]
                                    {:foos (map #(hash-map :foo-id %) (range 3))}))

                                (pc/resolver 'param-resolver
                                  {::pc/input  #{:foo-id}
                                   ::pc/output [:n]
                                   ::pc/batch? true}
                                  (fn [env input]
                                    (let [n (-> env p/params :n)]
                                      (mapv (constantly {:n n}) input))))]}
                `[{:foos [(:n {:pathom/as :a :n 5})]}])
              {:foos [{:a 5} {:a 5} {:a 5}]})))

     (testing "env not accessible"
       (is (= (async/<!!
                (parser-p {}
                  [:provide-env ::pc/env]))
              {:provide-env "x" ::pc/env ::p/not-found})))

     (testing "elide env from mutation when user sends no query"
       (is (= (quick-parser {::pc/register [(pc/mutation 'x
                                              {}
                                              (fn [env _] {::p/env env}))]}
                '[(x {})])
              '{x {}})))

     (testing "reported issues"
       (testing "issue #136 - sorted maps"
         (is (= (quick-parser
                  {::p/env       {::p/process-error
                                  (fn [_ e]
                                    (.printStackTrace e)
                                    e)}
                   ::pc/register [(pc/resolver 'person-resolver
                                    {::pc/input  #{:person/id}
                                     ::pc/output [:person/name :person/foo]}
                                    (fn [env {:keys [person/id] :as params}]
                                      {:person/name "Tom"
                                       :person/foo  (->> {123 :a
                                                          456 :b}
                                                         (into (sorted-map)))}))]}
                  '[{[:person/id 1] [:person/name :person/foo]}])
                {[:person/id 1] {:person/foo  {123 :a, 456 :b}
                                 :person/name "Tom"}}))))

     (testing "regressions"
       (testing "parallel bounded recursions"
         (is (= (quick-parser
                  {::p/env       {::p/process-error
                                  (fn [_ e]
                                    (.printStackTrace e)
                                    e)}
                   ::pc/register [(pc/resolver 'my-example
                                    {::pc/input  #{:r}
                                     ::pc/output [:r {:x [:r]}]}
                                    (fn [_ {r :r}]
                                      (if (< r 5)
                                        {:r r
                                         :x [{:r (inc r)}]}
                                        {:r r})))]}
                  '[{[:r 0] [:r {:x 2}]}])
                {[:r 0] {:r 0 :x [{:r 1 :x [{:r 2 :x []}]}]}})))

       (testing "edge deadlock on parallel + batch + multi-step resolver requirements"
         (is (= (async/<!!
                  (parser-p {::p/entity  (atom {:deadlock-1 1})
                             ::pt/trace* trace}
                    [{:deadlock-items [:deadlock-2 :deadlock-3]}]))
                {:deadlock-items [{:deadlock-2 2, :deadlock-3 3}]})))

       (testing "edge deadlock on multi-input from the same resolver"
         (is (= (async/<!!
                  (custom-pparser [thing->dep provide-nothing require-a-b-from-nothing]
                    {} [:a :c]))
                {:a                              ::p/not-found
                 :c                              ::p/not-found
                 :com.wsscode.pathom.core/errors {[:c] "class clojure.lang.ExceptionInfo: Insufficient resolver output - {:com.wsscode.pathom.parser/response-value {}, :key :a}"}})))

       (testing "when a response has an error value but a later resolver gets a good one, the later must be used."
         (is (= (quick-parser {::pc/register [(pc/resolver 'not
                                                {::pc/output [:not :works]}
                                                (fn [_ _]
                                                  (Thread/sleep 10)
                                                  (throw (ex-info "Deu ruim" {}))))

                                              (pc/resolver 'works
                                                {::pc/output [:works]}
                                                (fn [env _]
                                                  (Thread/sleep 50)
                                                  {:works 42}))]}
                  '[:works :not])
                {:not :com.wsscode.pathom.core/reader-error,
                 :works 42,
                 :com.wsscode.pathom.core/errors {[:not] "class clojure.lang.ExceptionInfo: Deu ruim - {}"}})))

       (testing "partial resolver data, request fully"
         (is (= (async/<!!
                  (parser-p {::p/entity  (atom {})
                             ::pt/trace* trace}
                    [:reg-nf1-a
                     :reg-nf1-b
                     ]))
                {:reg-nf1-a 42 :reg-nf1-b ::p/not-found})))

       (testing "external wait get notification when waiting for something in middle path"
         (is (= (quick-parser {::pc/register [(pc/resolver 'a
                                                {::pc/output [:a]}
                                                (fn [env _]
                                                  (go-catch
                                                    (<! (async/timeout 200))
                                                    (throw (ex-info "Er" {})))))

                                              (pc/resolver 'b
                                                {::pc/input  #{:a}
                                                 ::pc/output [:b]}
                                                (fn [env {:keys [a]}]
                                                  {:b (inc a)}))

                                              (pc/resolver 'c
                                                {::pc/input  #{:b}
                                                 ::pc/output [:c]}
                                                (fn [env {:keys [b]}]
                                                  {:c (inc b)}))]
                               ::p/env       {::pp/external-wait-ignore-timeout 1000}}
                  '[:c
                    {:>/b [:b]}])
                {:>/b                            {:b :com.wsscode.pathom.core/reader-error}
                 :c                              :com.wsscode.pathom.core/reader-error
                 :com.wsscode.pathom.core/errors {[:>/b
                                                   :b] "class clojure.lang.ExceptionInfo: Er - {}"
                                                  [:c] "class clojure.lang.ExceptionInfo: Er - {}"}})))

       (testing "fix empty provides from external wait ignore timeout"
         (is (= (quick-parser {::pc/register [(pc/resolver 'multi-input
                                                {::pc/output [:b :c]}
                                                (fn [env {:keys [a]}]
                                                  (Thread/sleep 500)
                                                  {:b 1
                                                   :c 2}))]
                               ::p/env       {::pp/external-wait-ignore-timeout 200}}
                  '[{:>/bla [:b :c]}])
                #:>{:bla {:c 2, :b 1}}))))))
