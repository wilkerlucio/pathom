(ns com.wsscode.pathom.connect.planner-readers-test
  (:require [clojure.test :refer [deftest is are run-tests testing]]
            [com.wsscode.pathom.connect :as pc]
            [com.wsscode.pathom.connect.foreign :as pcf]
            [com.wsscode.pathom.connect.planner :as pcp]
            [com.wsscode.pathom.core :as p]
            [com.wsscode.pathom.sugar :as ps]
            [com.wsscode.pathom.test-helpers :as th]
            [com.wsscode.pathom.misc :as p.misc]
            [clojure.core.async :as async :refer [go]]))

(defn index-query? [tx]
  (try
    (= (first (ffirst tx)) ::pc/indexes)
    (catch #?(:clj Throwable :cljs :default) _ false)))

(defn run-parser [{::keys [resolvers query entity foreign error-stack? plugins]}]
  (let [foreign-calls (atom {})
        plugins'      (or plugins identity)
        parser        (ps/connect-serial-parser
                        (cond-> {::ps/connect-reader [pc/reader3
                                                      {::foreign-calls (fn [_] @foreign-calls)}]
                                 ::ps/plugins        (fn [p]
                                                       (plugins'
                                                         (conj p
                                                           {::p/wrap-parser
                                                            (fn [parser]
                                                              (fn [env tx]
                                                                (reset! foreign-calls {})
                                                                (parser env tx)))})))}
                          foreign
                          (assoc ::ps/foreign-parsers
                            (mapv
                              (fn [{::keys [resolvers foreign-id fatal-error?]}]
                                (let [source-id (or foreign-id (gensym "foreign-source-"))]
                                  (ps/connect-serial-parser
                                    {::ps/connect-reader pc/reader3
                                     ::ps/plugins        (fn [p]
                                                           (conj p
                                                             {::p/wrap-parser
                                                              (fn [parser]
                                                                (fn [env tx]
                                                                  (if (and fatal-error? (not (index-query? tx)))
                                                                    (throw (ex-info "Parser Error" {:foo "bar"})))
                                                                  (swap! foreign-calls update source-id p.misc/vconj tx)
                                                                  (parser env tx)))}))}
                                    resolvers)))
                              foreign)))
                        resolvers)]
    (parser (cond-> {}
              entity (assoc ::p/entity (atom entity))
              error-stack? (assoc ::p/process-error (fn [_ e] (.printStackTrace e) (p/error-str e))))
      query)))

#?(:clj
   (defn run-parser-async [{::keys [resolvers query entity foreign error-stack? plugins]}]
     (let [foreign-calls (atom {})
           pplugins      (or plugins identity)
           parser        (ps/connect-async-parser
                           (cond-> {::ps/connect-reader [pc/reader3
                                                         {::foreign-calls (fn [_] @foreign-calls)}]
                                    ::ps/plugins        (fn [p]
                                                          (pplugins
                                                            (conj p
                                                              {::p/wrap-parser
                                                               (fn [parser]
                                                                 (fn [env tx]
                                                                   (reset! foreign-calls {})
                                                                   (parser env tx)))})))}
                             foreign
                             (assoc ::ps/foreign-parsers
                               (mapv
                                 (fn [{::keys [resolvers foreign-id]}]
                                   (let [source-id (or foreign-id (gensym "foreign-source-"))]
                                     (ps/connect-async-parser
                                       {::ps/connect-reader pc/reader3
                                        ::ps/plugins        (fn [p]
                                                              (conj p
                                                                {::p/wrap-parser
                                                                 (fn [parser]
                                                                   (fn [env tx]
                                                                     (swap! foreign-calls update source-id p.misc/vconj tx)
                                                                     (parser env tx)))}))}
                                       resolvers)))
                                 foreign)))
                           resolvers)]
       (async/<!!
         (parser (cond-> {}
                   entity (assoc ::p/entity (atom entity))
                   error-stack? (assoc ::p/process-error (fn [_ e] (.printStackTrace e) (p/error-str e))))
           query)))))

(deftest test-reader3
  (testing "single attribute"
    (is (= (run-parser
             {::resolvers [(pc/constantly-resolver :a 42)]
              ::query     [:a]})
           {:a 42}))

    (testing "params"
      (is (= (run-parser
               {::resolvers [(pc/resolver 'a
                               {::pc/output [:a]}
                               (fn [env _]
                                 {:a (p/params env)}))]
                ::query     '[(:a {:x 42})]})
             {:a {:x 42}}))

      (is (= (run-parser
               {::resolvers [(pc/resolver 'a
                               {::pc/output [:a :b]}
                               (fn [env _]
                                 {:a (p/params env)
                                  :b "foo"}))]
                ::query     '[:b (:a {:x 42})]})
             {:a {:x 42} :b "foo"}))

      (is (= (run-parser
               {::resolvers [(pc/resolver 'a
                               {::pc/output [:a]}
                               (fn [env _]
                                 {:a (p/params env)}))]
                ::query     '[{:>/ph [(:a {:x 42})]}]})
             {:>/ph {:a {:x 42}}})))

    (testing "missed output"
      (is (= (run-parser
               {::resolvers [(pc/resolver 'a
                               {::pc/output [:a]}
                               (fn [_ _] {}))]
                ::query     [:a]})
             {:a ::p/not-found})))

    (testing "don't call when data is already available"
      (is (= (run-parser
               {::resolvers [(pc/constantly-resolver :a 42)]
                ::entity    {:a "value"}
                ::query     [:a]})
             {:a "value"})))

    (testing "resolver error"
      (is (= (run-parser
               {::resolvers [(pc/resolver 'a
                               {::pc/output [:a]}
                               (fn [_ _] (throw (ex-info "Error" {:error "detail"}))))]
                ::query     [:a]})
             {:a         ::p/reader-error
              ::p/errors {[:a] #?(:clj  "class clojure.lang.ExceptionInfo: Error - {:error \"detail\"}"
                                  :cljs "Error - {:error \"detail\"}")}})))

    (testing "invalid response"
      (is (= (run-parser
               {::resolvers [(pc/resolver 'a
                               {::pc/output [:a]}
                               (fn [_ _] 42))]
                ::query     [:a]})
             {:a ::p/not-found}))))

  (testing "multiple attributes on the same resolver"
    (is (= (run-parser
             {::resolvers [(pc/resolver 'a
                             {::pc/output [:a :b]}
                             (fn [_ _] {:a 42 :b "foo"}))]
              ::query     [:a :b]})
           {:a 42
            :b "foo"})))

  (testing "and branches"
    (is (= (run-parser
             {::resolvers [(pc/constantly-resolver :a 42)
                           (pc/constantly-resolver :b "boo")]
              ::query     [:a :b]})
           {:a 42
            :b "boo"}))

    (is (= (run-parser
             {::resolvers [(pc/constantly-resolver :a 42)
                           (pc/constantly-resolver :b "boo")
                           (pc/resolver 'a-b-dep
                             {::pc/input  #{:a :b}
                              ::pc/output [:c]}
                             (fn [_ {:keys [a b]}] {:c [a b]}))]
              ::query     [:c]})
           {:c [42 "boo"]})))

  (testing "or branches"
    (is (= (run-parser
             {::resolvers [(assoc (pc/constantly-resolver :a 42)
                             ::pc/sym 'a)
                           (assoc (pc/constantly-resolver :a 44)
                             ::pc/sym 'a2)]
              ::query     [:a]})
           {:a 42}))

    (testing "run next node"
      (is (= (run-parser
               {::resolvers [(assoc (pc/constantly-resolver :a 42)
                               ::pc/sym 'a)
                             (assoc (pc/constantly-resolver :a 44)
                               ::pc/sym 'a2)
                             (pc/single-attr-resolver :a :b inc)]
                ::query     [:b]})
             #?(:clj  {:b 45}
                :cljs {:b 43}))))

    (testing "missed output"
      (is (= (run-parser
               {::resolvers [[(pc/resolver 'a
                                {::pc/output [:a]}
                                (fn [_ _] {}))]
                             (assoc (pc/constantly-resolver :a 44)
                               ::pc/sym 'a2)]
                ::query     [:a]})
             {:a 44}))))

  (testing "mixed or and"
    (is (= (run-parser
             {::resolvers [(pc/constantly-resolver :a 42)
                           (assoc (pc/constantly-resolver :a 43) ::pc/sym 'a2)
                           (pc/constantly-resolver :b "boo")]
              ::query     [:a :b]})
           #?(:clj  {:a 43 :b "boo"}
              :cljs {:a 42 :b "boo"}))))

  (testing "ident query"
    (is (= (run-parser
             {::resolvers [(pc/single-attr-resolver :b :c #(str % "-C"))]
              ::query     [{[:b "boo"] [:c]}]})
           {[:b "boo"] {:c "boo-C"}})))

  (testing "chained call"
    (is (= (run-parser
             {::resolvers [(pc/constantly-resolver :a 42)
                           (pc/single-attr-resolver :a :b str)]
              ::query     [:b]})
           {:b "42"}))

    (testing "skip resolver call when all require attributes are available"
      (let [mock (th/mock)]
        (is (= (run-parser
                 {::resolvers [(pc/resolver 'a
                                 {::pc/output [:a]}
                                 (fn [_ _] {:a "ready" :b "foo"}))
                               (pc/resolver 'ab
                                 {::pc/input  #{:a}
                                  ::pc/output [:b]}
                                 (comp (constantly {:b "bar"}) mock))]
                  ::query     [:b]})
               {:b "foo"}))
        (is (= @mock [])))

      (let [mock (th/mock)]
        (is (= (run-parser
                 {::resolvers [(pc/resolver 'a
                                 {::pc/output [:a]}
                                 (fn [_ _] {:a "ready" :b "foo"}))
                               (pc/resolver 'b
                                 {::pc/input  #{:a}
                                  ::pc/output [:b]}
                                 (comp (constantly {}) mock))
                               (pc/single-attr-resolver :b :c #(str % "-C"))]
                  ::query     [:c]})
               {:c "foo-C"}))
        (is (= @mock [])))))

  (testing "resolver cache"
    (testing "reads from cache"
      (is (= (run-parser
               {::resolvers    [(assoc (pc/constantly-resolver :a 42) ::pc/sym 'a)]
                ::query        [:a]
                ::plugins      #(conj %
                                  (p/env-wrap-plugin
                                    (fn [e]
                                      (assoc e ::p/request-cache (atom '{[a {} {}] {:a 44}})))))})
             {:a 44}))))

  (testing "batching"
    (is (= (run-parser
             {::resolvers    [(pc/resolver 'users
                                {::pc/output [{:users [:id]}]}
                                (fn [_ _] {:users [{:id 1}
                                                   {:id 2}
                                                   {:id 3}]}))
                              (pc/resolver 'batcher
                                {::pc/input  #{:id}
                                 ::pc/output [:name]
                                 ::pc/batch? true}
                                (fn [_ ids]
                                  (if (sequential? ids)
                                    (mapv #(hash-map :name (str (:id %))) ids)
                                    {:name (str (:id ids))})))]
              ::error-stack? true
              ::query        [{:users [:name]}]})
           {:users [{:name "1"} {:name "2"} {:name "3"}]}))

    (is (= (run-parser
             {::resolvers    [(pc/resolver 'users
                                {::pc/output [{:users [:id]}]}
                                (fn [_ _] {:users [{:id ::p/not-found}]}))
                              (pc/resolver 'batcher
                                {::pc/input  #{:id}
                                 ::pc/output [:name]
                                 ::pc/batch? true}
                                (fn [_ ids]
                                  (if (sequential? ids)
                                    (mapv #(hash-map :name (str (:id %))) ids)
                                    {:name (str (:id ids))})))]
              ::error-stack? true
              ::query        [{:users [:name]}]})
           {:users [{:name ::p/not-found}]})))

  (testing "placeholders"
    (is (= (run-parser
             {::resolvers [(pc/resolver 'y
                             {::pc/output [:y]}
                             (fn [_ _] {:y 2}))]
              ::entity    {:x 3}
              ::query     [{:>/foo [:x]} :y]})
           {:>/foo {:x 3}, :y 2}))

    (is (= (run-parser
             {::resolvers [(pc/resolver 'y
                             {::pc/output [:y]}
                             (fn [_ _] {:y 2}))]
              ::entity    {:x 3}
              ::query     [:y {:>/foo [:x]}]})
           {:>/foo {:x 3}, :y 2}))

    (is (= (run-parser
             {::resolvers [(pc/resolver 'y
                             {::pc/output [:y]}
                             (fn [_ _] {:y 2}))]
              ::query     [{[:x 3] [:y {:>/foo [:x :y]}]}]})
           {[:x 3] {:y 2 :>/foo {:x 3 :y 2}}}))))

(deftest test-runner3-dynamic-resolvers
  (testing "integration with local parser"
    (testing "local dependency first"
      (is (= (run-parser
               {::resolvers [(pc/constantly-resolver :b "boo")]
                ::foreign   [{::foreign-id 'remote
                              ::resolvers  [(pc/single-attr-resolver :b :c #(str % "-C"))]}]
                ::query     [:c ::foreign-calls]})
             {:c              "boo-C"
              ::foreign-calls '{remote [[{([:b "boo"] #:pathom{:context {}}) [:c]}]]}}))

      (is (= (run-parser
               {::resolvers [(pc/constantly-resolver :b "boo")]
                ::foreign   [{::foreign-id 'remote-b
                              ::resolvers  [(pc/single-attr-resolver :b :c #(str % "-C"))]}
                             {::foreign-id 'remote-c
                              ::resolvers  [(pc/single-attr-resolver :c :d #(str % "-D"))]}]
                ::query     [:d ::foreign-calls]})
             '{:d              "boo-C-D"
               ::foreign-calls {remote-b [[{([:b "boo"] {:pathom/context {}}) [:c]}]]
                                remote-c [[{([:c "boo-C"] {:pathom/context {}}) [:d]}]]}})))

    (testing "nested dependency with local and remote things depending on it"
      (is (= (run-parser
               {::resolvers [(pc/alias-resolver :list-provided :local-name)]
                ::foreign   [{::foreign-id 'remote
                              ::resolvers  [(pc/resolver 'list-of-things
                                              {::pc/output [{:list [:list-provided]}]}
                                              (fn [_ _]
                                                {:list {:list-provided 10}}))
                                            (pc/alias-resolver :list-provided :remote-name)]}]
                ::query     [{:list [:local-name :remote-name]} ::foreign-calls]})
             {:list           {:remote-name 10, :local-name 10}
              ::foreign-calls '{remote [[{:list [:list-provided :remote-name]}]]}})))

    (testing "foreign dependency first"
      (is (= (run-parser
               {::resolvers [(pc/single-attr-resolver :b :c #(str % "-C"))]
                ::foreign   [{::foreign-id 'remote
                              ::resolvers  [(pc/constantly-resolver :b "boo")]}]
                ::query     [:c ::foreign-calls]})
             {:c              "boo-C"
              ::foreign-calls '{remote [[:b]]}})))

    (testing "with multiple local dependencies"
      (is (= (run-parser
               {::resolvers [(pc/constantly-resolver :a "baa")
                             (pc/constantly-resolver :b "boo")]
                ::foreign   [{::foreign-id 'remote
                              ::resolvers  [(pc/resolver 'remote/c
                                              {::pc/input  #{:a :b}
                                               ::pc/output [:c]}
                                              (fn [_ input]
                                                {:c (str (:a input) "-" (:b input) "-C")}))]}]
                ::query     [:c ::foreign-calls]})
             '{:c
               "baa-boo-C"

               ::foreign-calls
               {remote [[{([::pcf/foreign-call nil] {:pathom/context {:b "boo" :a "baa"}})
                          [:c]}]]}})))

    #_(testing "with multiple foreign dependencies"
        (is (= (run-parser
                 {::resolvers [(pc/single-attr-resolver :b :D #(str % "-DD"))]
                  ::foreign   [{::foreign-id 'remote
                                ::resolvers  [(pc/constantly-resolver :a "foo")
                                              (pc/single-attr-resolver :a :b #(str % "-B"))
                                              (pc/constantly-resolver :c "CCC")]}]
                  ::query     [:D ::foreign-calls]})
               '{:D
                 "foo-B-DD"

                 ::foreign-calls
                 {remote [[:b]]}})))

    #_(testing "batch - test not ready"
        (is (= (run-parser
                 {::resolvers [(pc/constantly-resolver :items [{:item/id 1} {:item/id 2}])]
                  ::foreign   [{::foreign-id 'remote
                                ::resolvers  [(pc/resolver 'item-by-id
                                                {::pc/input  #{:item/id}
                                                 ::pc/output [:item/prop]}
                                                (fn [_ {:keys [item/id]}]
                                                  {:item/prop (str "x-" id)}))]}]
                  ::query     [{:items [:item/prop]} ::foreign-calls]})
               '{:c
                 "baa-boo-C"

                 ::foreign-calls
                 {remote [[{([::pcf/foreign-call nil] {:pathom/context {:b "boo" :a "baa"}})
                            [:c]}]]}})))

    (testing "distribution"
      (is (= (run-parser
               {::resolvers [(pc/alias-resolver :video/id :great-video-service.video/id)
                             (pc/alias-resolver :video/id :other-video-thing.video/id)]
                ::foreign   [{::foreign-id 'great-video-service
                              ::resolvers  [(pc/resolver 'great-video-service/video-by-id
                                              {::pc/input  #{:great-video-service.video/id}
                                               ::pc/output [:great-video-service.video/title
                                                            :great-video-service.video/duration
                                                            :great-video-service.video/like-count
                                                            :great-video-service.video/channel-title]}
                                              (fn [_ _]
                                                {:great-video-service.video/title         "Great Video Title"
                                                 :great-video-service.video/duration      420
                                                 :great-video-service.video/like-count    42
                                                 :great-video-service.video/channel-title "Channel"}))]}
                             {::foreign-id 'other-video-thing
                              ::resolvers  [(pc/resolver 'other-video-thing/video-by-id
                                              {::pc/input  #{:other-video-thing.video/id}
                                               ::pc/output [:other-video-thing.video/title
                                                            :other-video-thing.video/duration
                                                            :other-video-thing.video/like-count
                                                            :other-video-thing.video/channel-title]}
                                              (fn [_ _]
                                                {:other-video-thing.video/title         "Other Video Thing Title"
                                                 :other-video-thing.video/duration      860
                                                 :other-video-thing.video/like-count    88
                                                 :other-video-thing.video/channel-title "VChannel"}))]}]
                ::query     [{[:video/id 123]
                              [:great-video-service.video/title
                               :other-video-thing.video/like-count
                               :great-video-service.video/duration
                               :other-video-thing.video/title]}

                             ::foreign-calls]})
             '{[:video/id 123] {:great-video-service.video/title    "Great Video Title"
                                :other-video-thing.video/like-count 88
                                :great-video-service.video/duration 420
                                :other-video-thing.video/title      "Other Video Thing Title"}
               ::foreign-calls {other-video-thing   [[{([:other-video-thing.video/id 123] {:pathom/context {}})
                                                       [:other-video-thing.video/title
                                                        :other-video-thing.video/like-count]}]]
                                great-video-service [[{([:great-video-service.video/id 123] {:pathom/context {}})
                                                       [:great-video-service.video/duration
                                                        :great-video-service.video/title]}]]}})))

    (testing "error propagation"
      (is (= (run-parser
               {::foreign [{::foreign-id 'remote
                            ::resolvers  [(pc/resolver 'a
                                            {::pc/output [:a]}
                                            (fn [_ _] (throw (ex-info "Error" {:error "detail"}))))]}]
                ::query   [:a ::foreign-calls]})
             {:a              ::p/reader-error
              ::p/errors      {[:a] #?(:clj  "class clojure.lang.ExceptionInfo: Error - {:error \"detail\"}"
                                       :cljs "Error - {:error \"detail\"}")}
              ::foreign-calls {'remote [[:a]]}}))

      (testing "ident request"
        (is (= (run-parser
                 {::foreign [{::foreign-id 'remote
                              ::resolvers  [(pc/resolver 'a
                                              {::pc/input  #{:x}
                                               ::pc/output [:a]}
                                              (fn [_ _] (throw (ex-info "Error" {:error "detail"}))))]}]
                  ::entity  {:x 5}
                  ::query   [:a ::foreign-calls]})
               {:a              ::p/reader-error
                ::p/errors      {[:a] #?(:clj  "class clojure.lang.ExceptionInfo: Error - {:error \"detail\"}"
                                         :cljs "Error - {:error \"detail\"}")}
                ::foreign-calls '{remote [[{([:x 5] {:pathom/context {}}) [:a]}]]}})))

      (testing "error on nested path"
        (is (= (run-parser
                 {::foreign [{::foreign-id 'remote
                              ::resolvers  [(pc/resolver 'a
                                              {::pc/output [:a]}
                                              (fn [_ _] (throw (ex-info "Error" {:error "detail"}))))]}]
                  ::query   [{[:x 5] [:a]} ::foreign-calls]})
               {[:x 5]          {:a ::p/reader-error}
                ::p/errors      {[[:x 5] :a] #?(:clj  "class clojure.lang.ExceptionInfo: Error - {:error \"detail\"}"
                                                :cljs "Error - {:error \"detail\"}")}
                ::foreign-calls {'remote [[:a]]}})))

      (testing "fatal error on remote parser"
        (is (= (run-parser
                 {::foreign [{::foreign-id   'remote
                              ::resolvers    [(pc/resolver 'a
                                                {::pc/output [:critical-error]}
                                                (fn [_ _] {:critical-error 4}))]
                              ::fatal-error? true}]
                  ::query   [:critical-error]})
               {:critical-error                 :com.wsscode.pathom.core/reader-error,
                :com.wsscode.pathom.core/errors {[:critical-error] #?(:clj  "class clojure.lang.ExceptionInfo: Parser Error - {:foo \"bar\"}"
                                                                      :cljs "Parser Error - {:foo \"bar\"}")}}))

        (testing "in ident request"
          (is (= (run-parser
                   {::foreign [{::foreign-id   'remote
                                ::resolvers    [(pc/resolver 'a
                                                  {::pc/input  #{:id}
                                                   ::pc/output [:critical-error]}
                                                  (fn [_ _] {:critical-error 4}))]
                                ::fatal-error? true}]
                    ::query   [{[:id 123] [:critical-error]}]})
                 {[:id 123]                       {:critical-error :com.wsscode.pathom.core/reader-error},
                  :com.wsscode.pathom.core/errors {[[:id 123] :critical-error] #?(:clj  "class clojure.lang.ExceptionInfo: Parser Error - {:foo \"bar\"}"
                                                                                  :cljs "Parser Error - {:foo \"bar\"}")}})))))

    (testing "nested queries"
      (is (= (run-parser
               {::resolvers [(pc/single-attr-resolver :user/id :user/name str)]
                ::foreign   [{::foreign-id 'remote
                              ::resolvers  [(pc/resolver 'users
                                              {::pc/output [{:users [:user/id]}]}
                                              (fn [_ _] {:users {:user/id 1}}))]}]
                ::query     [{:users [:user/name]} ::foreign-calls]})
             {:users          {:user/name "1"}
              ::foreign-calls {'remote [[{:users [:user/id]}]]}}))

      (is (= (run-parser
               {::resolvers [(pc/single-attr-resolver :user/id :user/name str)]
                ::foreign   [{::foreign-id 'remote
                              ::resolvers  [(pc/resolver 'users
                                             {::pc/output [{:users [:user/id]}]}
                                             (fn [_ _] {:users [{:user/id 1}
                                                                {:user/id 2}
                                                                {:user/id 3}]}))]}]
                ::query     [{:users [:user/name]} ::foreign-calls]})
             {:users          [{:user/name "1"}
                               {:user/name "2"}
                               {:user/name "3"}]
              ::foreign-calls {'remote [[{:users [:user/id]}]]}}))

      (testing "deep nesting"
        (is (= (run-parser
                 {::resolvers [(pc/single-attr-resolver :user/id :user/name str)]
                  ::foreign   [{::foreign-id 'remote
                                ::resolvers  [(pc/resolver 'users
                                                {::pc/output [{:nest [{:users [:user/id
                                                                               :user/email]}]}]}
                                                (fn [_ _] {:nest {:users {:user/id 1}}}))]}]
                  ::query     [{:nest [{:users [:user/name]}]} ::foreign-calls]})
               {:nest           {:users {:user/name "1"}}
                ::foreign-calls {'remote [[{:nest [{:users [:user/id]}]}]]}}))))

    (testing "delegating params"
      (is (= (run-parser
               {::resolvers []
                ::foreign   [{::foreign-id 'remote
                              ::resolvers  [(pc/resolver 'users
                                              {::pc/output [:param-value]}
                                              (fn [env _] {:param-value (-> env :ast :params :param-x)}))]}]
                ::query     '[(:param-value {:param-x 42}) ::foreign-calls]})
             {:param-value    42
              ::foreign-calls '{remote [[(:param-value {:param-x 42})]]}}))

      (is (= (run-parser
               {::resolvers []
                ::foreign   [{::foreign-id 'remote
                              ::resolvers  [(pc/resolver 'param1
                                              {::pc/output [:param-value]}
                                              (fn [env _] {:param-value (-> env :ast :params :param-x)}))
                                            (pc/resolver 'param2
                                              {::pc/output [:param-value2]}
                                              (fn [env _] {:param-value2 (-> env :ast :params :param-x)}))]}]
                ::query     '[(:param-value {:param-x 42})
                              (:param-value2 {:param-x "foo"}) ::foreign-calls]})
             {:param-value    42
              :param-value2   "foo"
              ::foreign-calls '{remote [[(:param-value {:param-x 42})
                                         (:param-value2 {:param-x "foo"})]]}})))

    (testing "union queries"
      (is (= (run-parser
               {::resolvers []
                ::foreign   [{::foreign-id 'remote
                              ::resolvers  [(pc/resolver 'users
                                              {::pc/output [{:joined-item [:id :id2 :name :age]}]}
                                              (fn [env _] {:joined-item [{:id 1 :name "name" :age 24}
                                                                         {:id2 2 :name "other" :age 42}]}))]}]
                ::query     '[{:joined-item {:id  [:id :name]
                                             :id2 [:id2 :age]}}
                              ::foreign-calls]})
             {:joined-item    [{:id 1 :name "name"}
                               {:id2 2 :age 42}]
              ::foreign-calls '{remote [[{:joined-item [:id
                                                        :name
                                                        :id2
                                                        :age]}]]}})))))

(defn constantly-resolver-async
  "Like pc/constantly-resolver, but returns an async response."
  ([attribute value]
   (constantly-resolver-async {::attribute attribute
                               :value      value}))
  ([{::keys [attribute sym] :keys [value]}]
   (let [sym (or sym (symbol (str (munge (subs (str attribute) 1)) "-constant")))]
     (pc/resolver sym
       {::pc/output [attribute]}
       (fn [_ _] (go {attribute value}))))))

#?(:clj
   (deftest test-reader3-async
     (testing "single attribute"
       (is (= (run-parser-async
                {::resolvers [(pc/constantly-resolver :a 42)]
                 ::query     [:a]})
              {:a 42}))

       (is (= (run-parser-async
                {::resolvers [(constantly-resolver-async :a 42)]
                 ::query     [:a]})
              {:a 42}))

       (testing "missed output"
         (is (= (run-parser-async
                  {::resolvers [(pc/resolver 'a
                                  {::pc/output [:a]}
                                  (fn [_ _] {}))]
                   ::query     [:a]})
                {:a ::p/not-found})))

       (testing "don't call when data is already available"
         (is (= (run-parser-async
                  {::resolvers [(pc/constantly-resolver :a 42)]
                   ::entity    {:a "value"}
                   ::query     [:a]})
                {:a "value"})))

       (testing "resolver error"
         (is (= (run-parser-async
                  {::resolvers [(pc/resolver 'a
                                  {::pc/output [:a]}
                                  (fn [_ _] (throw (ex-info "Error" {:error "detail"}))))]
                   ::query     [:a]})
                {:a         ::p/reader-error
                 ::p/errors {[:a] "class clojure.lang.ExceptionInfo: Error - {:error \"detail\"}"}})))

       (testing "invalid response"
         (is (= (run-parser-async
                  {::resolvers [(pc/resolver 'a
                                  {::pc/output [:a]}
                                  (fn [_ _] 42))]
                   ::query     [:a]})
                {:a ::p/not-found}))))

     (testing "multiple attributes on the same resolver"
       (is (= (run-parser-async
                {::resolvers [(pc/resolver 'a
                                {::pc/output [:a :b]}
                                (fn [_ _] {:a 42 :b "foo"}))]
                 ::query     [:a :b]})
              {:a 42
               :b "foo"})))

     (testing "and branches"
       (is (= (run-parser-async
                {::resolvers [(pc/constantly-resolver :a 42)
                              (pc/constantly-resolver :b "boo")]
                 ::query     [:a :b]})
              {:a 42
               :b "boo"}))

       (is (= (run-parser-async
                {::resolvers [(constantly-resolver-async :a 42)
                              (constantly-resolver-async :b "boo")]
                 ::query     [:a :b]})
              {:a 42
               :b "boo"}))

       (is (= (run-parser-async
                {::resolvers [(constantly-resolver-async :a 42)
                              (constantly-resolver-async :b "boo")
                              (pc/resolver 'a-b-dep
                                {::pc/input  #{:a :b}
                                 ::pc/output [:c]}
                                (fn [_ {:keys [a b]}] (go {:c [a b]})))]
                 ::query     [:c]})
              {:c [42 "boo"]})))

     (testing "or branches"
       (is (= (run-parser-async
                {::resolvers [(assoc (pc/constantly-resolver :a 42)
                                ::pc/sym 'a)
                              (assoc (pc/constantly-resolver :a 44)
                                ::pc/sym 'a2)]
                 ::query     [:a]})
              {:a 42}))

       (is (= (run-parser-async
                {::resolvers [(assoc (constantly-resolver-async :a 42)
                                ::pc/sym 'a)
                              (assoc (constantly-resolver-async :a 44)
                                ::pc/sym 'a2)]
                 ::query     [:a]})
              {:a 42}))

       (testing "run next node"
         (is (= (run-parser-async
                  {::resolvers [(assoc (constantly-resolver-async :a 42)
                                  ::pc/sym 'a)
                                (assoc (constantly-resolver-async :a 44)
                                  ::pc/sym 'a2)
                                (pc/single-attr-resolver :a :b inc)]
                   ::query     [:b]})
                {:b 45})))

       (testing "missed output"
         (is (= (run-parser-async
                  {::resolvers [[(pc/resolver 'a
                                   {::pc/output [:a]}
                                   (fn [_ _] {}))]
                                (assoc (pc/constantly-resolver :a 44)
                                  ::pc/sym 'a2)]
                   ::query     [:a]})
                {:a 44}))

         (is (= (run-parser-async
                  {::resolvers [(assoc (constantly-resolver-async :a 44)
                                  ::pc/sym 'a)
                                [(pc/resolver 'a2
                                   {::pc/output [:a]}
                                   (fn [_ _] (go {})))]]
                   ::query     [:a]})
                {:a 44}))))

     (testing "mixed or and"
       (is (= (run-parser-async
                {::resolvers [(pc/constantly-resolver :a 42)
                              (assoc (pc/constantly-resolver :a 43) ::pc/sym 'a2)
                              (pc/constantly-resolver :b "boo")]
                 ::query     [:a :b]})
              {:a 43 :b "boo"}))

       (is (= (run-parser-async
                {::resolvers [(constantly-resolver-async :a 42)
                              (assoc (constantly-resolver-async :a 43) ::pc/sym 'a2)
                              (constantly-resolver-async :b "boo")]
                 ::query     [:a :b]})
              {:a 43 :b "boo"})))

     (testing "ident query"
       (is (= (run-parser-async
                {::resolvers [(pc/single-attr-resolver :b :c #(str % "-C"))]
                 ::query     [{[:b "boo"] [:c]}]})
              {[:b "boo"] {:c "boo-C"}})))

     (testing "chained call"
       (is (= (run-parser-async
                {::resolvers [(pc/constantly-resolver :a 42)
                              (pc/single-attr-resolver :a :b str)]
                 ::query     [:b]})
              {:b "42"}))

       (is (= (run-parser-async
                {::resolvers [(constantly-resolver-async :a 42)
                              (pc/single-attr-resolver :a :b str)]
                 ::query     [:b]})
              {:b "42"}))

       (testing "skip resolver call when all require attributes are available"
         (let [mock (th/mock)]
           (is (= (run-parser-async
                    {::resolvers [(pc/resolver 'a
                                    {::pc/output [:a]}
                                    (fn [_ _] {:a "ready" :b "foo"}))
                                  (pc/resolver 'ab
                                    {::pc/input  #{:a}
                                     ::pc/output [:b]}
                                    (comp (constantly {:b "bar"}) mock))]
                     ::query     [:b]})
                  {:b "foo"}))
           (is (= @mock [])))

         (let [mock (th/mock)]
           (is (= (run-parser-async
                    {::resolvers [(pc/resolver 'a
                                    {::pc/output [:a]}
                                    (fn [_ _] {:a "ready" :b "foo"}))
                                  (pc/resolver 'b
                                    {::pc/input  #{:a}
                                     ::pc/output [:b]}
                                    (comp (constantly {}) mock))
                                  (pc/single-attr-resolver :b :c #(str % "-C"))]
                     ::query     [:c]})
                  {:c "foo-C"}))
           (is (= @mock [])))))

     (testing "resolver cache"
       (testing "reads from cache"
         (is (= (run-parser-async
                  {::resolvers [(assoc (pc/constantly-resolver :a 42) ::pc/sym 'a)]
                   ::query     [:a]
                   ::plugins   #(conj %
                                  (p/env-wrap-plugin
                                    (fn [e]
                                      (assoc e ::p/request-cache (atom '{[a {} {}] {:a 44}})))))})
                {:a 44}))))

     (testing "batching"
       (is (= (run-parser-async
                {::resolvers    [(pc/resolver 'users
                                   {::pc/output [{:users [:id]}]}
                                   (fn [_ _] {:users [{:id 1}
                                                      {:id 2}
                                                      {:id 3}]}))
                                 (pc/resolver 'batcher
                                   {::pc/input  #{:id}
                                    ::pc/output [:name]
                                    ::pc/batch? true}
                                   (fn [_ ids]
                                     (if (sequential? ids)
                                       (mapv #(hash-map :name (str (:id %))) ids)
                                       {:name (str (:id ids))})))]
                 ::error-stack? true
                 ::query        [{:users [:name]}]})
              {:users [{:name "1"} {:name "2"} {:name "3"}]}))

       (is (= (run-parser-async
                {::resolvers    [(pc/resolver 'users
                                   {::pc/output [{:users [:id]}]}
                                   (fn [_ _] {:users [{:id ::p/not-found}]}))
                                 (pc/resolver 'batcher
                                   {::pc/input  #{:id}
                                    ::pc/output [:name]
                                    ::pc/batch? true}
                                   (fn [_ ids]
                                     (if (sequential? ids)
                                       (mapv #(hash-map :name (str (:id %))) ids)
                                       {:name (str (:id ids))})))]
                 ::error-stack? true
                 ::query        [{:users [:name]}]})
              {:users [{:name ::p/not-found}]})))

     (testing "placeholders"
       (is (= (run-parser-async
                {::resolvers [(pc/resolver 'y
                                {::pc/output [:y]}
                                (fn [_ _] {:y 2}))]
                 ::entity    {:x 3}
                 ::query     [{:>/foo [:x]} :y]})
              {:>/foo {:x 3}, :y 2}))

       (is (= (run-parser-async
                {::resolvers [(pc/resolver 'y
                                {::pc/output [:y]}
                                (fn [_ _] {:y 2}))]
                 ::entity    {:x 3}
                 ::query     [:y {:>/foo [:x]}]})
              {:>/foo {:x 3}, :y 2}))

       (is (= (run-parser-async
                {::resolvers [(pc/resolver 'y
                                {::pc/output [:y]}
                                (fn [_ _] {:y 2}))]
                 ::query     [{[:x 3] [:y {:>/foo [:x :y]}]}]})
              {[:x 3] {:y 2 :>/foo {:x 3 :y 2}}})))))
