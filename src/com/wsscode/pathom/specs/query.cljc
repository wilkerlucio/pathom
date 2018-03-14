(ns com.wsscode.pathom.specs.query
  (:require [clojure.spec.alpha :as s]
            [clojure.test.check]
            [clojure.test.check.generators :as gen #?@(:cljs [:include-macros true])]
            [clojure.test.check.properties]
            [fulcro.client.primitives :as fp]))

(def generators
  {::gen-max-depth
   4

   ::gen-property
   (fn gen-property [_] gen/keyword)

   ::gen-special-property
   (fn gen-special-property [_] (gen/return '*))

   ::gen-ident-key
   (fn gen-ident-key [_] gen/keyword)

   ::gen-ident-value
   (fn gen-ident-value [_] gen/any-printable)

   ::gen-ident
   (fn gen-ident [{::keys [gen-ident-key gen-ident-value] :as env}]
     (gen/tuple
       (gen-ident-key env)
       (gen-ident-value env)))

   ::gen-params
   (fn gen-params [_] (gen/map gen/any-printable gen/any-printable))

   ::gen-join-key
   (fn gen-join-key [{::keys [gen-property gen-ident gen-join-key-param-expr] :as env}]
     (gen/one-of [(gen-property env)
                  (gen-ident env)
                  (gen-join-key-param-expr env)]))

   ::gen-join-key-param-key
   (fn gen-join-key-param-key [{::keys [gen-property gen-ident] :as env}]
     (gen/one-of [(gen-property env) (gen-ident env)]))

   ::gen-join-key-param-expr
   (fn gen-join-key-param-expr [{::keys [gen-join-key-param-key gen-params] :as env}]
     (gen/let [q (gen-join-key-param-key env)
               p (gen-params env)]
       (list q p)))

   ::gen-join
   (fn gen-join [{::keys [gen-join-key gen-join-query] :as env}]
     (gen/map (gen-join-key env) (gen-join-query env) {:num-elements 1}))

   ::gen-join-query
   (fn gen-join-query [{::keys [gen-query gen-union gen-recursion] :as env}]
     (gen/frequency [[10 (gen-query env)
                      2 (gen-union env)
                      1 (gen-recursion env)]]))

   ::gen-union-key
   (fn gen-union-key [_] gen/keyword)

   ::gen-union
   (fn gen-union [{::keys [gen-union-key gen-query] :as env}]
     (gen/map (gen-union-key env) (gen-query env)))

   ::gen-depth
   (fn gen-depth [_] (gen/large-integer* {:min 1 :max 5}))

   ::gen-recursion
   (fn gen-recursion [{::keys [gen-depth] :as env}]
     (gen/one-of [(gen-depth env) (gen/return '...)]))

   ::gen-param-expr-key
   (fn gen-param-expr-key [{::keys [gen-property gen-join gen-ident] :as env}]
     (gen/frequency [[20 (gen-property env)]
                     [8 (gen-join env)]
                     [4 (gen-ident env)]]))

   ::gen-param-expr
   (fn gen-param-expr [{::keys [gen-param-expr-key gen-params] :as env}]
     (gen/let [q (gen-param-expr-key env)
               p (gen-params env)]
       (list q p)))

   ::gen-query-expr
   (fn gen-query-expr [{::keys [gen-property gen-join gen-ident gen-param-expr gen-special-property]
                        :as    env}]
     (gen/one-of [(gen-property env)
                  (gen-join env)
                  (gen-ident env)
                  (gen-param-expr env)
                  (gen-special-property env)]))

   ::gen-query
   (fn gen-query [{::keys [gen-query-expr gen-max-depth] :as env}]
     (if (> gen-max-depth 0)
       (gen/vector (gen-query-expr (update env ::gen-max-depth dec)))
       (gen/return [])))

   ::gen-mutation-key
   (fn gen-mutation-key [_] gen/symbol)

   ::gen-mutation-expr
   (fn gen-mutation-expr [{::keys [gen-mutation-key gen-params] :as env}]
     (gen/let [key (gen-mutation-key env)
               val (gen-params env)]
       (list key val)))

   ::gen-mutation-join
   (fn mutation-join [{::keys [gen-mutation-expr gen-query] :as env}]
     (gen/map (gen-mutation-expr env) (gen-query env) {:num-elements 1}))

   ::gen-mutation
   (fn gen-mutation [{::keys [gen-mutation-expr gen-mutation-join] :as env}]
     (gen/frequency [[5 (gen-mutation-expr env)]
                     [1 (gen-mutation-join env)]]))

   ::gen-mutation-tx
   (fn gen-mutation-tx [{::keys [gen-mutation gen-property] :as env}]
     (gen/fmap vec
       (s/gen (s/cat :mutations (s/+ (s/with-gen ::mutation #(gen-mutation env)))
                     :reads (s/* (s/with-gen ::property #(gen-property env)))))))

   ::gen-transaction
   (fn gen-transaction [{::keys [gen-query gen-mutation-tx] :as env}]
     (gen/frequency [[5 (gen-query env)]
                     [1 (gen-mutation-tx env)]]))})

(defn default-gen [name]
  #((get generators name) generators))

(s/def ::property keyword?)
(s/def ::special-property #{'*})
(s/def ::ident-value (s/with-gen any? (default-gen ::gen-ident-value)))
(s/def ::ident (s/with-gen (s/tuple ::property ::ident-value) (default-gen ::gen-ident)))
(s/def ::join-key (s/or :prop ::property :ident ::ident :param-exp ::join-key-param-expr))
(s/def ::join (s/map-of ::join-key ::join-query :count 1 :conform-keys true))
(s/def ::union (s/map-of ::property ::query :min-count 1 :conform-keys true))
(s/def ::recursion (s/or :depth (s/with-gen nat-int? (default-gen ::gen-depth))
                         :unbounded #{'...}))

(s/def ::join-query
  (s/with-gen
    (s/or :query ::query
          :union ::union
          :recursion ::recursion)
    (default-gen ::gen-join-query)))

(s/def ::params
  (s/with-gen map? (default-gen ::gen-params)))

(s/def ::param-expr-key
  (s/with-gen
    (s/or :prop ::property
          :join ::join
          :ident ::ident)
    (default-gen ::gen-param-expr-key)))

(s/def ::param-expr
  (s/with-gen
    (s/and list? (s/cat :expr ::param-expr-key :params ::params))
    (default-gen ::gen-param-expr)))

(s/def ::join-key-param-key (s/or :prop ::property :ident ::ident))

(s/def ::join-key-param-expr
  (s/with-gen
    (s/and list? (s/cat :expr ::join-key-param-key :params ::params))
    (default-gen ::gen-join-key-param-expr)))

(s/def ::query-expr
  (s/or :prop ::property
        :join ::join
        :ident ::ident
        :param-exp ::param-expr
        :special ::special-property))

(defn unique-keys? [query]
  (let [ast (fp/query->ast (s/unform ::query query))]
    (if (reduce
          (fn [keys {:keys [key]}]
            (if (contains? keys key)
              (reduced false)
              (conj keys (if (and (vector? key)
                                  (= 2 (count key))
                                  (= '_ (second key)))
                           (first key)
                           key))))
          #{}
          (:children ast))
      query
      false)))

(s/fdef unique-keys?
  :args (s/cat :query ::query)
  :ret (s/or :query ::query :not-unique false?))

(s/def ::query
  (s/coll-of ::query-expr :kind vector? :gen (default-gen ::gen-query)))

(s/def ::mutation-key (s/with-gen symbol? (default-gen ::gen-mutation-key)))

(s/def ::mutation-expr
  (s/with-gen
    (s/and list? (s/cat :mutate-key ::mutation-key :params (s/? ::params)))
    (default-gen ::gen-mutation-expr)))

(s/def ::mutation-join
  (s/map-of ::mutation-expr ::query :count 1 :conform-keys true))

(s/def ::mutation
  (s/or :mutation ::mutation-expr
        :mutation-join ::mutation-join))

(s/def ::mutation-tx
  (s/with-gen
    (s/and vector? (s/cat :mutations (s/+ ::mutation) :reads (s/* ::property)))
    (default-gen ::gen-mutation-tx)))

(s/def ::transaction
  (s/with-gen
    (s/or :query ::query
          :mutation ::mutation-tx)
    (default-gen ::gen-transaction)))

(comment
  (gen/sample (s/gen ::query))

  (let [system (assoc generators
                 ::gen-params
                 (fn [_] (gen/map (gen/elements [:param :foo/param]) gen/string-ascii))

                 ::gen-property
                 (fn [_] (gen/elements [:id :name :title :foo :bar :other :price :namespaced/value]))

                 ::gen-ident-key
                 (fn [_] (gen/elements [:user/by-id :other/by-id]))

                 ::gen-ident-value
                 (fn [_] gen/string-ascii)

                 ::gen-mutation-key
                 (fn [_] (gen/elements '[do-something create/this-thing operation.on/space])))]
    (gen/sample ((::gen-transaction system) system))))
