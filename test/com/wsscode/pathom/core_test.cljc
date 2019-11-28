(ns com.wsscode.pathom.core-test
  (:require [clojure.test :refer [is are testing]]
            [nubank.workspaces.core :refer [deftest]]
            [clojure.core.async :as async :refer [go]]
            [com.wsscode.pathom.core :as p]
            [com.wsscode.pathom.parser :as pp]
            [fulcro.client.primitives :as fp]
            [com.wsscode.pathom.test-helpers :refer [mock]]))

(defn q [q] (-> (fp/query->ast q) :children first))

(def parser' (fp/parser {:read p/pathom-read}))
(def parser (p/parser {}))

(def parser-mutation-exception
  (p/parser {::p/mutate (fn [_ _ _]
                          {:action (fn []
                                     (throw (ex-info "Mutation error" {})))})}))

(deftest test-update-attribute-param
  (is (= (p/update-attribute-param :keyword assoc :foo "bar")
         '(:keyword {:foo "bar"})))
  (is (= (p/update-attribute-param '(:keyword {:other "bla"}) assoc :foo "bar")
         '(:keyword {:foo   "bar"
                     :other "bla"}))))

(deftest test-filter-ast
  (is (= (fp/ast->query (p/filter-ast
                          (comp namespace :key)
                          (fp/query->ast [:a/a :b {:a/c [:a/x :d]} :r])))
         [:a/a #:a{:c [:a/x]}])))

(deftest test-union-children?
  (are [ast res] (is (= (p/union-children? ast) res))
    {} false
    {:children []} false
    {:children [{:type :union}]} true))

(deftest test-read-key
  (let [c (fn [_] ::p/continue)
        m (fn [_] 42)]
    (are [env reader result] (= (p/read-from env reader) result)
      {:ast (q [:name])} (fn [_] "value")
      "value"

      {:ast (q [:name])} (fn [_] nil)
      nil

      {:ast (q [:name]) :x 42} (fn [env] (:x env))
      42

      {:ast (q [:name]) :x 42} [(fn [env] (:x env))]
      42

      {:ast (q [:name]) :x 42} [{} {:name (fn [env] (:x env))}]
      42

      {:ast (q [:name])} {}
      ::p/not-found

      {:ast (q [:name])} {:name (fn [_] (str "value"))}
      "value"

      {:ast (q [:name])} {:name (fn [_] (str "value"))}
      "value"

      {:ast (q [:name])} []
      ::p/not-found

      {:ast (q [:name])} [c]
      ::p/not-found

      {:ast (q [:name])} [m]
      42

      {:ast (q [:name])} [c m]
      42

      {:ast (q [:name])} [c {:no #(str "value")} [c c] {:name (fn [_] "Bil")}]
      "Bil"

      {:ast (q [:name])} [(fn [_] nil)]
      nil)))

(deftest test-update-child
  (is (= (p/update-child {:children [{:dispatch-key :id :key :id :type :prop}
                                     {:dispatch-key :parent :key :parent :query 3 :type :join}]
                          :type     :root}
           :parent update :query dec)
         {:children [{:dispatch-key :id :key :id :type :prop}
                     {:dispatch-key :parent :key :parent :query 2 :type :join}]
          :type     :root})))

(deftest test-default-union-path
  (is (= (p/default-union-path {::p/entity {:friend/id 123}
                                :query     {:friend/id  [:friend/id :friend/name]
                                            :place/id   [:place/id :place/title :place/location]
                                            :address/id [:address/id :address/street :address/number]}})
         :friend/id))
  (is (= (p/default-union-path {::p/entity {:other/id 123}
                                :query     {:friend/id  [:friend/id :friend/name]
                                            :place/id   [:place/id :place/title :place/location]
                                            :address/id [:address/id :address/street :address/number]}})
         nil)))

(deftest test-swap-entity!
  (is (= (p/swap-entity! {::p/entity (atom 10)} inc)
         11))
  (is (= (p/swap-entity! {::p/entity 10} inc)
         11)))

(deftest test-ast-properties
  (is (= (p/ast-properties (p/query->ast [])) #{}))
  (is (= (p/ast-properties (p/query->ast [:foo])) #{:foo}))
  (is (= (p/ast-properties (p/query->ast [:foo {:bar [:baz]}])) #{:foo :bar :baz})))

(deftest test-pathom-join
  (let [parser (fn [_ query] {:q query})
        env    {:parser parser ::p/entity-key ::p/entity}]
    (are [e res] (= (p/join e) res)
      (assoc env ::p/entity {:a 42}) {:a 42}
      (assoc env :query [] ::p/entity {:a 42}) {:q []}
      (assoc env :query '[*] ::p/entity {:a 42}) {:a 42 :q []}
      (assoc env :query '[* :name] ::p/entity {:a 42}) {:a 42 :q [:name]}))

  (testing "join sending entity"
    (let [reader [p/map-reader
                  (fn [env] (p/join {:a 1} env))]]
      (is (= (parser {::p/reader reader} [{:any [:a]}])
             {:any {:a 1}}))))

  (testing "ensure entity is an atom"
    (let [reader [p/map-reader
                  {:raw-entity #(p/raw-entity %)}
                  (fn [env] (p/join {:a 1} env))]]
      (is (#'p/atom? (-> (parser {::p/reader reader} [{:any [:raw-entity]}])
                         :any :raw-entity)))))

  (testing "join * with acc data"
    (let [reader [p/map-reader
                  {:any  #(p/join (atom {:id 123}) %)
                   :load (fn [env]
                           (p/swap-entity! env merge {:load :foo
                                                      :name "bla"})
                           :foo)}]]
      (is (= (parser {::p/reader reader} [{:any [:load '*]}])
             {:any {:id 123 :load :foo :name "bla"}}))))

  (testing "join with union keyword"
    (let [reader [p/map-reader
                  (fn [env] (p/join {:type :x :a 1} (assoc env ::p/union-path :type)))]]
      (is (= (parser {::p/reader reader} [{:any {:x [:a]}}])
             {:any {:a 1}})))
    (testing "append union branch into ::p/path"
     (let [reader [p/map-reader
                   {:path ::p/path}
                   (fn [env] (p/join {:type :x :a 1} (assoc env ::p/union-path :type)))]]
       (is (= (parser {::p/reader reader} [{:any {:x [:path]}}])
              {:any {:path [:any :x :path]}})))))

  (testing "join with union keyword computed"
    (let [reader [{:type-c (fn [env] (get (p/entity env) :type))}
                  p/map-reader
                  (fn [env] (p/join {:type :x :a 1} (assoc env ::p/union-path :type-c)))]]
      (is (= (parser {::p/reader reader} [{:any {:x [:a]}}])
             {:any {:a 1}}))))

  (testing "join with union keyword fn"
    (let [reader [p/map-reader
                  (fn [env] (p/join {:type :x :a 1} (assoc env ::p/union-path #(get (p/entity %) :type))))]]
      (is (= (parser {::p/reader reader} [{:any {:x [:a]}}])
             {:any {:a 1}}))))

  (testing "join provides parent query"
    (is (= (parser {::p/reader [p/map-reader {:y ::p/parent-query}]
                    ::p/entity {:x 1 :z {:a 2 :b 3}}}
             [{:z [:y :a :b]}])
           {:z {:y [:y :a :b] :a 2 :b 3}})))

  (testing "join provides parent query at root"
    (is (= (parser {::p/reader [p/map-reader {:y ::p/parent-query}]
                    ::p/entity {:a 2 :b 3}}
             [:a :y :b])
           {:a 2 :b 3 :y [:a :y :b]})))

  (testing "join provides parent query join"
    (is (= (parser {::p/reader [p/map-reader {:y ::p/parent-query}]
                    ::p/entity {:a {:x 1}}}
             [{:a [:x :y]}])
           {:a {:x 1 :y [:x :y]}})))

  (testing "join provides parent query sequence joins"
    (is (= (parser {::p/reader [p/map-reader {:y ::p/parent-query}]
                    ::p/entity {:a [{:x 1} {:x 2}]}}
             [{:a [:x :y]}])
           {:a [{:x 1 :y [:x :y]} {:x 2 :y [:x :y]}]})))

  (testing "join works on unbounded recursive queries"
    (is (= (parser {::p/reader [p/map-reader]
                    ::p/entity {:x {:id     1
                                    :parent {:id     2
                                             :parent {:id 3}}}}}
             '[{:x [:id {:parent ...}]}])
           {:x {:id     1
                :parent {:id     2
                         :parent {:id     3
                                  :parent ::p/not-found}}}})))

  (testing "join works on bounded recursive queries"
    (is (= (parser {::p/reader [p/map-reader]
                    ::p/entity {:x {:id     1
                                    :parent {:id     2
                                             :parent {:id     3
                                                      :parent {:id     4
                                                               :parent {:id     5
                                                                        :parent {:id 6}}}}}}}}
             '[{:x [:id {:parent 3}]}])
           {:x {:id     1
                :parent {:id     2
                         :parent {:id     3
                                  :parent {:id     4
                                           :parent nil}}}}})))

  (testing "override environment from entity data"
    (is (= (parser {::p/reader [p/map-reader
                                {:data (fn [env] (p/join {:label  "value"
                                                          ::p/env (assoc env ::x 42)} env))}
                                {::x (fn [env] (::x env))}]}
             '[{:data [:label ::x]}])
           {:data {:label "value" ::x 42}}))

    (testing "when data item is an atom"
      (is (= (parser {::p/reader [p/map-reader
                                  {:data (fn [env] (p/join (atom {:label  "value"
                                                                  ::p/env (assoc env ::x 42)}) env))}
                                  {::x (fn [env] (::x env))}]}
               '[{:data [:label ::x]}])
             {:data {:label "value" ::x 42}}))))

  (testing "optimized final return for values"
    (is (= (parser {::p/reader [p/map-reader]
                    ::p/entity {:x ^::p/final {:id "1" :name "one"}}}
             [{:x [:name]}])
           {:x {:id "1", :name "one"}}))

    (is (= (parser {::p/reader [p/map-reader]
                    ::p/entity {:x ^::p/final [{:id "1" :name "one"}
                                               {:id "2" :name "two"}]}}
             [{:x [:name]}])
           {:x [{:id "1", :name "one"} {:id "2", :name "two"}]}))))

(deftest test-parser-mutation
  (testing "throw exception on mutation error"
    (is (thrown-with-msg? #?(:clj clojure.lang.ExceptionInfo :cljs ExceptionInfo) #"Mutation error"
          (parser-mutation-exception {} ['(mutate {})])))))

(deftest test-pathom-join-seq
  (is (= (p/join-seq {::p/entity-key ::p/entity
                      :query         []
                      :parser        (fn [env _] (inc (p/entity env)))}
           [1 2 3])
         [2 3 4]))

  (is (= (p/join-seq {::p/entity-key ::p/entity
                      :query         []
                      :parser        (fn [{::p/keys [processing-sequence]} _] processing-sequence)}
           [1 2])
         [[1 2] [1 2]]))

  (is (= (parser {::p/entity {:items [{:a {:b 3}}]}
                  ::p/reader [p/map-reader
                              (fn [{::p/keys [processing-sequence]}] processing-sequence)]}
           [{:items [{:a [:b :c]} :d]}])
         {:items [{:a {:b 3 :c nil}, :d [{:a {:b 3}}]}]})))

#?(:clj
   (deftest test-error-str
     (let [ex (try (swap! nil inc) (catch Throwable e e))]
       (is (= (p/error-str ex) "class java.lang.NullPointerException")))

     (is (= (p/error-str (ex-info "Message" {:foo 42})) "class clojure.lang.ExceptionInfo: Message - {:foo 42}"))))

(deftest test-ident-value
  (are [ast res] (is (= (p/ident-value ast) res))
    {} nil
    {:ast {:key :sample}} nil
    {:ast {:key [:item/by-id 123]}} 123))

(deftest test-entity
  (is (= (p/entity {::p/entity     {:foo "bar"}
                    ::p/entity-key ::p/entity})
         {:foo "bar"}))
  (is (= (p/entity {:parser    parser
                    ::p/entity {:a 1}
                    ::p/reader [p/map-reader {:b (constantly "extra")}]}
                   [:a :b])
         {:a 1 :b "extra"}))
  (is (= (p/entity {:parser    parser
                    ::p/entity (atom {:a 1})
                    ::p/reader [p/map-reader {:b (constantly "extra")}]}
                   [:a :b])
         {:a 1 :b "extra"})))

(deftest test-elide-not-found
  (testing "Removes fields marked not found"
    (is (= (p/elide-not-found {:a 1
                               :b :com.wsscode.pathom.core/not-found
                               :c "extra"
                               :d :com.wsscode.pathom.core/not-found})
           {:a 1
            :c "extra"})))

  (testing "Preserves metadata"
    (is (= (meta (p/elide-not-found (with-meta
                                      {:a 1
                                       :b :com.wsscode.pathom.core/not-found
                                       :c "extra"
                                       :d :com.wsscode.pathom.core/not-found}
                                      {:x 1})))
           {:x 1})))

  (testing "Keep fulcro tempids"
    (let [id (fp/tempid)]
      (is (= (p/elide-not-found {:foo id})
             {:foo id})))))

(deftest test-transduce-items
  (is (= (p/transduce-maps
           (map (fn [[k v]] (if (= ::p/not-found v) [k nil] [k v])))
           {:a 1
            :b ::p/not-found
            :c "extra"
            :d ::p/not-found})
         {:a 1
          :b nil
          :c "extra"
          :d nil})))

(deftest test-transduce-children
  (is (= (->> [:a {:b [:c :d]} :e]
              (p/query->ast)
              (p/transduce-children (remove (comp #{:a :c} :key)))
              (p/ast->query))
         [{:b [:d]} :e]))

  (is (= (->> [:a
               '(:b {:elide true})
               :c
               {:d
                [{'(:e {:elide true})
                  [:f :g]}
                 :h]}]
              (p/query->ast)
              (p/transduce-children (remove (fn [{:keys [params]}] (:elide params))))
              (p/ast->query))
         [:a :c {:d [:h]}])))

(comment
  (p/ast->query
    (p/transduce-children
      (remove (fn [{:keys [params]}] (:elide params)))
      (p/query->ast
        [:a '(:b {:elide true}) :c
         {:d [{'(:e {:elide true}) [:f :g]} :h]}]))
    ))

(deftest test-entity-attr
  (is (= (p/entity-attr {:parser    parser
                         ::p/entity {:a 1}
                         ::p/reader [p/map-reader {:b (constantly "extra")}]}
           :b)
         "extra"))

  (is (= ::p/not-found (p/entity-attr {:parser    parser
                                       ::p/entity {:a 1}
                                       ::p/reader [p/map-reader {:c (constantly "extra")}]}
                         :b)))

  (is (= (p/entity-attr {:parser    parser
                         ::p/entity {:a 1}
                         ::p/reader [p/map-reader {:c (constantly "extra")}]}
           :b "default")
         "default")))

(deftest test-entity!
  (is (= (p/entity! {:parser    parser
                     ::p/entity {:a 1}
                     ::p/reader [p/map-reader {:b (constantly "extra")}]}
           [:a :b])
         {:a 1 :b "extra"}))

  (is (thrown-with-msg? #?(:clj clojure.lang.ExceptionInfo :cljs ExceptionInfo) #"Entity attributes #\{:b :d} could not be realized"
        (p/entity! {:parser    parser
                    ::p/entity {:a 1}
                    ::p/reader [p/map-reader {:c (constantly "extra")}]}
          [:a :b :c :d]))))

(deftest test-entity-attr!
  (is (= (p/entity-attr! {:parser    parser
                          ::p/entity {:a 1}
                          ::p/reader [p/map-reader {:b (constantly "extra")}]}
                         :b)
         "extra"))

  (is (thrown-with-msg? #?(:clj clojure.lang.ExceptionInfo :cljs ExceptionInfo) #"Entity attributes #\{:b} could not be realized"
        (p/entity-attr! {:parser    parser
                         ::p/entity {:a 1}
                         ::p/reader [p/map-reader {:c (constantly "extra")}]}
                        :b))))

(deftest test-update-entity!
  (let [e (atom {:a 1})]
    (is (= (p/swap-entity! {::p/entity e} assoc :foo "bar")
           {:a 1 :foo "bar"})
        (= @e {:a 1 :foo "bar"})))

  (is (= (p/swap-entity! {::p/entity {}} assoc :foo "bar")
         {:foo "bar"})))

(deftest elide-ast-nodes-test
  (is (= (-> [:a :b {:c [:d]}]
             fp/query->ast
             (p/elide-ast-nodes #{:b :d})
             fp/ast->query)
         [:a {:c []}])))

(deftest test-merge-queries
  (is (= (p/merge-queries nil nil)
         []))

  (is (= (p/merge-queries [:a] nil)
         [:a]))

  (is (= (p/merge-queries [] [])
         []))

  (is (= (p/merge-queries [:a] [])
         [:a]))

  (is (= (p/merge-queries [:a] [:a])
         [:a]))

  (is (= (p/merge-queries [:a] [:b])
         [:a :b]))

  (is (= (p/merge-queries [:a] [:b :c :d])
         [:a :b :c :d]))

  (is (= (p/merge-queries [[:u/id 1]] [[:u/id 2]])
         [[:u/id 1] [:u/id 2]]))

  (is (= (p/merge-queries [{:user [:name]}] [{:user [:email]}])
         [{:user [:name :email]}]))

  (is (= (p/merge-queries [:a] [{:a [:x]}])
         [{:a [:x]}]))

  (is (= (p/merge-queries [{:a [:x]}] [:a])
         [{:a [:x]}]))

  (testing "don't merge queries with different params"
    (is (= (p/merge-queries ['({:user [:name]} {:login "u1"})]
             ['({:user [:email]} {:login "u2"})])
           nil)))

  (testing "don't merge queries with different params"
    (is (= (p/merge-queries ['(:user {:login "u1"})]
             ['(:user {:login "u2"})])
           nil)))

  (testing "merge when params are same"
    (is (= (p/merge-queries ['({:user [:name]} {:login "u1"})]
             ['({:user [:email]} {:login "u1"})])
           ['({:user [:name :email]} {:login "u1"})])))

  (testing "calls can't be merged when same name occurs"
    (is (= (p/merge-queries ['(hello {:login "u1"})]
             ['(hello {:bla "2"})])
           nil)))

  (testing "even when parameters are the same"
    (is (= (p/merge-queries ['(hello {:login "u1"})]
             ['(hello {:login "u1"})])
           nil))))

(deftest test-normalize-query-variables
  (testing "blank query"
    (is (= (p/normalize-query-variables [])
           [])))

  (testing "simple query"
    (is (= (p/normalize-query-variables [:a :b :c])
           [:a :b :c])))

  (testing "normalize ident values"
    (is (= (p/normalize-query-variables [[:foo "bar"]])
           [[:foo ::p/var]])))

  (testing "normalize params"
    (is (= (p/normalize-query-variables ['(:foo {:x 1 :y 2})])
           ['(:foo {:x ::p/var :y ::p/var})])))

  (testing "all together"
    (is (= (p/normalize-query-variables '[:a :b {[:join "val"] [{(:c {:page 10}) [:d]}]}])
           '[:a :b
             {[:join ::p/var]
              [({:c [:d]}
                 {:page ::p/var})]}]))))

(deftest test-query-id
  (is (= (p/query-id '[:a :b {[:join "val"] [{(:c {:page 10}) [:d]}]}])
         481025832)))

(deftest test-entity-dispatch
  (is (= (p/entity-dispatch {:ast {:key [:user/by-id 10]}})
         :user/by-id)))

(deftest test-env-placeholder-node
  (is (= (parser {::p/placeholder-prefixes #{">" "ph"}
                  ::p/reader               [{:a (constantly 42)} p/env-placeholder-reader]}
           [:a {:>/sub [:a]}])
         {:a 42 :>/sub {:a 42}}))

  (is (= (parser {::p/placeholder-prefixes #{">" "ph"}
                  ::p/reader               [{:a (constantly 42)} p/env-placeholder-reader]}
           [:a {:ph/sub [:a]} {:>/sub [:a]}])
         {:a 42 :ph/sub {:a 42} :>/sub {:a 42}}))

  (is (thrown-with-msg? #?(:clj java.lang.AssertionError :cljs js/Error) #"To use env-placeholder-reader please add ::p/placeholder-prefixes to your environment."
        (parser {::p/reader [{:a (constantly 42)} p/env-placeholder-reader]}
          [:a {:ph/sub [:a]} {:>/sub [:a]}]))))

(deftest test-lift-placeholders
  (is (= (p/lift-placeholders {::p/placeholder-prefixes #{">"}} [])
         []))
  (is (= (p/lift-placeholders {::p/placeholder-prefixes #{">"}} [:x])
         [:x]))
  (is (= (p/lift-placeholders {::p/placeholder-prefixes #{">"}} [{:>/foo [:x]}])
         [:x]))
  (is (= (p/lift-placeholders {::p/placeholder-prefixes #{">"}} '[{:>/foo [(:x {:foo "bar"})]}])
         '[(:x {:foo "bar"})]))
  (is (= (p/lift-placeholders {::p/placeholder-prefixes #{">"}} [{:join [:x {:>/thing [:y]}]}])
         [{:join [:x :y]}]))
  (is (= (p/lift-placeholders {::p/placeholder-prefixes #{">"}} [{:join [{:x [:buz]} {:>/thing [:y {:x [:geez]}]}]}])
         [{:join [{:x [:buz :geez]} :y]}]))
  (is (= (p/lift-placeholders {::p/placeholder-prefixes #{">"}} [{:join [:x {:>/thing [{:>/more [:y]}]}]}])
         [{:join [:x :y]}])))

(comment
  (p/lift-placeholders {::p/placeholder-prefixes #{">"}} '[:x {:>/join [(:x {:foo "bar"})]}]))

(deftest test-placeholder-node
  (is (= (parser {::p/reader [{:a (constantly 42)} (p/placeholder-reader)]}
           [:a {:>/sub [:a]}])
         {:a 42 :>/sub {:a 42}}))

  (is (= (parser {::p/reader [{:a (constantly 42)} (p/placeholder-reader "ph")]}
           [:a {:ph/sub [:a]}])
         {:a 42 :ph/sub {:a 42}})))

(deftest test-map-reader
  (are [entity query res] (= (parser {::p/reader p/map-reader
                                      ::p/entity entity} query)
                             res)
    {:simple 42} [:simple] {:simple 42}

    {} [:simple] {:simple ::p/not-found}

    {:coll [{:a 1 :b 2} {:a 2 :c 3}]} [{:coll [:a :b]}]
    {:coll [{:a 1 :b 2}
            {:a 2 :b :com.wsscode.pathom.core/not-found}]}

    {:nested {:value 3}} [{:nested [:value]}] {:nested {:value 3}}))

(deftest test-map-reader*
  (are [entity query res] (= (parser {::p/reader (p/map-reader* {::p/map-key-transform name})
                                      ::p/entity entity} query)
                             res)
    {"simple" 42} [:some/simple] {:some/simple 42}

    {} [:simple] {:simple ::p/not-found}

    {"coll" [{"a" 1 "b" 2} {"a" 2 "c" 3}]} [{:my/coll [:a :b]}]
    {:my/coll [{:a 1 :b 2}
               {:a 2 :b :com.wsscode.pathom.core/not-found}]}

    {"nested" {"value" 3}} [{:nested [:value]}] {:nested {:value 3}}))

#?(:cljs
   (deftest test-js-obj-reader
     (are [entity query res] (= (parser {::p/reader           p/js-obj-reader
                                         ::p/js-key-transform name
                                         ::p/entity           entity} query)
                                res)
       #js {:simple 42} [:simple] {:simple 42}
       #js {:simple 42} [:namespaced/simple] {:namespaced/simple 42}

       #js {} [:simple] {:simple ::p/not-found}

       (clj->js {:coll [{:a 1 :b 2} {:a 2 :c 3}]}) [{:coll [:a :b]}]
       {:coll [{:a 1 :b 2}
               {:a 2 :b ::p/not-found}]}

       (clj->js {:nested {:value 3}}) [{:nested [:value]}]
       {:nested {:value 3}})))

(deftest test-global-readers
  (is (= (parser' {::p/reader         p/map-reader
                   ::p/process-reader #(vector % (p/placeholder-reader "ph"))
                   ::p/entity         {:foo "bar" :bar "baz"}}
           [:foo {:ph/sample [:bar [:bar 123]]}])
         {:foo       "bar"
          :ph/sample {:bar       "baz"
                      [:bar 123] ::p/not-found}})))

(def error-parser (p/parser {::p/plugins [p/error-handler-plugin]
                             :mutate     (fn [_ k _]
                                           {:action (fn []
                                                      (if (= k 'success)
                                                        "Success!"
                                                        (throw (ex-info "error" {}))))})}))

; triggers error on action call
(def error-reader
  {:bar (fn [{:keys [ast]}]
          (let [params (-> ast :params)]
            (throw (ex-info (:message params) params))))})

(deftest test-wrap-handle-exception
  (let [errors* (atom {})]
    (is (= (error-parser {::p/reader        [error-reader p/map-reader]
                          ::p/entity        {:name "bla"
                                             :one  {:foo "bar"}
                                             :many [{:foo "dah"} {:foo "meh"}]}
                          ::p/process-error #(p/error-message %2)
                          ::p/errors*       errors*}
             [:name {:one ['(:bar {:message "Booooom"}) :foo]}])
           {:name      "bla"
            :one       {:bar ::p/reader-error
                        :foo "bar"}
            ::p/errors {[:one :bar] "Booooom"}}))))

(deftest test-wrap-mutate-handle-exception
  (is (= (error-parser {::p/process-error #(p/error-message %2)}
           ['(call-op {})])
         {'call-op "error"})))

(deftest test-wrap-mutate-no-error
  (is (= (error-parser {::p/process-error #(p/error-message %2)}
           ['(success {})])
         {'success "Success!"})))

; triggers error on mutate call
(def error-parser2
  (p/parser {::p/plugins [p/error-handler-plugin]
             :mutate     (fn [_ k _]
                           {:action
                            (fn []
                              (throw (ex-info "error2" {})))})}))

(deftest test-wrap-mutate-handle-exception2
  (is (= (error-parser2 {::p/process-error #(p/error-message %2)}
           ['(call-op {})])
         {'call-op "error2"})))

(deftest collapse-error-path-test
  (let [m {:x {:y {:z :com.wsscode.pathom.core/reader-error}}}]
    (testing "Return exact path when matches"
      (is (= (p/collapse-error-path m [:x :y :z]))
          [:x :y :z]))

    (testing "Removes extra paths"
      (is (= (p/collapse-error-path m [:x :y :z :s :x]))
          [:x :y :z]))

    (testing "Handles blank paths"
      (is (= (p/collapse-error-path m []))
          []))

    (testing "Return single item on error path"
      (is (= (p/collapse-error-path m [:bar :foo]))
          [:bar]))))

(deftest raise-errors-test
  (is (= (p/raise-errors {:query
                          {:item ::p/reader-error}
                          ::p/errors
                          {[:query :item] {:error "some error"}}})
         {:query {:item      ::p/reader-error
                  ::p/errors {:item {:error "some error"}}}}))

  (is (= (p/raise-errors {:query
                          {:item ::p/reader-error}

                          ::p/errors
                          {[:query :item]       {:error "some error"}
                           [:query :item :more] {:error "nested error"}}})
         {:query {:item      ::p/reader-error
                  ::p/errors {:item {:error "some error"}}}})))

(def parser2 (p/parser {::p/plugins [p/raise-mutation-result-plugin]
                        :mutate     (fn [_ _ _] {:action (fn [] :done)})}))

(deftest test-raise-mutation-result-plugin
  (is (= (parser2 {} ['(call/something {:a 1})])
         {'call/something :done})))

(deftest test-env-plugin
  (let [parser (p/parser {::p/plugins [(p/env-plugin {:foo "bar"})]})]
    (is (= (parser {::p/reader {:gimme-foo :foo}} [:gimme-foo])
           {:gimme-foo "bar"}))))

(deftest test-env-plugin-easy
  (let [parser (p/parser {::p/env {:foo "bar"}})]
    (is (= (parser {::p/reader {:gimme-foo :foo}} [:gimme-foo])
           {:gimme-foo "bar"}))))

(deftest test-env-wrap-plugin
  (let [parser (p/parser {::p/plugins [(p/env-wrap-plugin (fn [env]
                                                            (assoc env :foo "bar")))]})]
    (is (= (parser {::p/reader {:gimme-foo :foo}} [:gimme-foo])
           {:gimme-foo "bar"}))))

(deftest test-env-wrap-plugin-easy
  (let [parser (p/parser {::p/env (fn [env]
                                    (assoc env :foo "bar"))})]
    (is (= (parser {::p/reader {:gimme-foo :foo}} [:gimme-foo])
           {:gimme-foo "bar"}))))

(def cached-parser (p/parser {::p/plugins [p/request-cache-plugin]}))
(def async-cached-parser (p/async-parser {::p/plugins [p/request-cache-plugin]}))

(deftest test-request-cache
  (testing "basic cache"
    (is (= (cached-parser {::p/reader [{:cached (fn [e]
                                                  (p/cached e :sample
                                                    (swap! (:counter e) inc)))}
                                       (p/placeholder-reader "ph")]
                           :counter   (atom 0)}
             [:cached {:ph/inside [:cached]}])
           {:cached 1 :ph/inside {:cached 1}})))

  (testing "basic cache with nil"
    (let [counter (atom 0)]
      (is (= (cached-parser {::p/reader [{:cached (fn [e]
                                                    (p/cached e :sample
                                                      (do
                                                        (swap! (:counter e) inc)
                                                        nil)))}
                                         (p/placeholder-reader "ph")]
                             :counter   counter}
               [:cached {:ph/inside [:cached]}])
             {:cached nil :ph/inside {:cached nil}}))
      (is (= 1 @counter))))

  #?(:clj
     (testing "basic cache async"
       (is (= (async/<!! (async-cached-parser {::p/reader [{:cached (fn [e]
                                                                      (p/cached e :sample
                                                                        (go
                                                                          (swap! (:counter e) inc))))}
                                                           (p/placeholder-reader "ph")]
                                               :counter   (atom 0)}
                           [:cached {:ph/inside [:cached]}]))
              {:cached 1 :ph/inside {:cached 1}}))))

  (testing "ensure cache is not living between requests"
    (is (= (cached-parser {::p/reader [{:cached (fn [e]
                                                  (p/cached e :sample
                                                    (swap! (:counter e) inc)))}
                                       (p/placeholder-reader "ph")]
                           :counter   (atom 2)}
             [:cached {:ph/inside [:cached]}])
           {:cached 3 :ph/inside {:cached 3}})))

  (testing "cache-hit stores value"
    (is (= (cached-parser {::p/reader [{:hit    (fn [e] (p/cache-hit e :sample 10))
                                        :cached (fn [e]
                                                  (p/cached e :sample
                                                    (swap! (:counter e) inc)))}
                                       (p/placeholder-reader "ph")]
                           :counter   (atom 2)}
             [:hit :cached])
           {:hit 10 :cached 10}))))

(deftest test-env-plugins-data
  (testing "no plugins"
    (let [parser (p/parser {})]
      (is (= (select-keys (get (parser {::p/reader {:env (fn [env] env)}} [:env]) :env) [::p/plugin-actions ::p/plugins])
             {::p/plugin-actions {},
              ::p/plugins        nil}))))

  (let [parser (p/parser {::p/plugins [{:some-fn "x"}]})]
    (is (= (select-keys (get (parser {::p/reader {:env (fn [env] env)}} [:env]) :env) [::p/plugin-actions ::p/plugins])
           {::p/plugin-actions {:some-fn ["x"]},
            ::p/plugins        [{:some-fn "x"}]}))))

(deftest test-exec-plugin-actions
  (testing "does the same when there are no plugins"
    (is (= (p/exec-plugin-actions {}
             :some-fn
             #(+ 5 %)
             2)
           7)))
  (testing "run the plugin actions"
    (is (= (p/exec-plugin-actions {::p/plugin-actions {:some-fn [(fn [orig]
                                                                   (fn [x]
                                                                     (inc (orig x))))
                                                                 (fn [orig]
                                                                   (fn [x]
                                                                     (- (orig x) 2)))]}}
             :some-fn
             #(+ 5 %)
             2)
           6))))

(def parallel-reader
  {:a (fn [_] {::pp/provides #{:a :b}
               ::pp/response (go
                               {:a "aaa" :b {:d 10 :e 40}})})
   :b (fn [env] "foo")
   :c (fn [env] "cfoo")})

(def parallel-parser (p/parallel-parser {::p/env {::p/reader [p/map-reader parallel-reader]}}))

;;;;;;;;;;;

(deftest pathom-read
  (testing "path accumulation"
    (is (= (parser2 {::p/reader [p/map-reader (fn [{::p/keys [path]}] path)]
                     ::p/entity {:going {:deep [{}]}}}
             [{:going [{:deep [:off]}]}])
           {:going {:deep [{:off [:going :deep 0 :off]}]}}))))

(deftest test-map-select
  (is (= (p/map-select {} []) {}))
  (is (= (p/map-select {:foo "bar"} []) {}))
  (is (= (p/map-select {:foo "bar"} [:foo]) {:foo "bar"}))
  (is (= (p/map-select {:foo "bar" :deep {:a 1 :b 2}} [{:deep [:a]}]) {:deep {:a 1}})))

(deftest test-pre-process-parser-plugin
  (testing "can modify input"
    (let [parser  (mock)
          p       (-> (p/pre-process-parser-plugin #(-> %
                                                        (update :env assoc :add "item")
                                                        (update :tx conj :new)))
                      ::p/wrap-parser)
          wrapped (p parser)]
      (wrapped {:base "data"} [:query])
      (is (= @parser [[{:add  "item"
                        :base "data"}
                       [:query
                        :new]]]))))

  (testing "can prune call"
    (let [parser  (mock)
          p       (-> (p/pre-process-parser-plugin (fn [_]))
                      ::p/wrap-parser)
          wrapped (p parser)]
      (wrapped {:base "data"} [:query])
      (is (= @parser [])))))

(deftest test-post-process-parser-plugin
  (testing "can modify output"
    (let [parser (p/parser {::p/env     {::p/reader (constantly 42)}
                            ::p/plugins [(p/post-process-parser-plugin (fn [x] (assoc x :extra "data")))]})]
      (is (= (parser {} [:foo])
             {:foo   42
              :extra "data"}))))

  (testing "only runs once"
    (let [parser (p/parser {::p/env     {::p/reader p/map-reader}
                            ::p/plugins [(p/post-process-parser-plugin (fn [x] (assoc x :extra "data")))]})]
      (is (= (parser {::p/entity {:foo {:bar "baz"}}} [{:foo [:bar]}])
             {:foo   {:bar "baz"}
              :extra "data"})))))

(deftest test-elide-special-outputs-plugin
  (testing "elide pathom specials"
    (let [parser (p/parser {::p/env     {::p/reader [{:err (fn [_] (throw (ex-info "Error" {})))}
                                                     p/map-reader]}
                            ::p/plugins [p/elide-special-outputs-plugin
                                         p/error-handler-plugin]})]
      (is (= (parser {::p/entity {:foo {:bar "baz"}}} [{:foo [:bar]}
                                                       :off
                                                       :err])
             {:com.wsscode.pathom.core/errors {[:err] "class clojure.lang.ExceptionInfo: Error - {}"}
              :foo                            {:bar "baz"}})))))
