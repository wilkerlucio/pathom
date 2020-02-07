(ns com.wsscode.pathom.connect.planner-readers-test
  (:require [clojure.test :refer :all]
            [com.wsscode.pathom.connect :as pc]
            [com.wsscode.pathom.connect.foreign :as pcf]
            [com.wsscode.pathom.connect.planner :as pcp]
            [com.wsscode.pathom.core :as p]
            [com.wsscode.pathom.sugar :as ps]
            [com.wsscode.pathom.test-helpers :as th]
            [com.wsscode.pathom.misc :as p.misc]
            [clojure.core.async :as async :refer [go]]))

(defn run-parser [{::keys [resolvers query entity foreign error-stack? plugins]}]
  (let [foreign-calls (atom {})
        pplugins      (or plugins identity)
        parser        (ps/connect-serial-parser
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
                                  (ps/connect-serial-parser
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
              ::p/errors {[:a] "class clojure.lang.ExceptionInfo: Error - {:error \"detail\"}"}})))

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
             {:b 45})))

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
           {:a 43 :b "boo"})))

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
           {:users [{:name ::p/not-found}]}))))

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
                                         (:param-value2 {:param-x "foo"})]]}})))))

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
              {:>/foo {:x 3}, :y 2})))))
