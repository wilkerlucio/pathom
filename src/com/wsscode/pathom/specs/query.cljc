(ns com.wsscode.pathom.specs.query
  (:require [clojure.spec.alpha :as s]
            [clojure.test.check]
            [clojure.test.check.generators :as gen #?@(:cljs [:include-macros true])]
            [clojure.test.check.properties]))

(def ^:dynamic *query-gen-max-depth* 4)

(s/def ::property (s/with-gen keyword? #(s/gen #{:user/id :user/name :product/title :name :other})))
(s/def ::special-property #{'*})
(s/def ::ident-value (s/with-gen any? #(s/gen #{123 "123" [:a "b"]})))
(s/def ::ident (s/with-gen
                 (s/and vector? (s/cat :ident ::property :value ::ident-value))
                 #(gen/let [s (s/gen (s/cat :ident ::property :value ::ident-value))]
                    (vec s))))
(s/def ::join-key (s/or :prop ::property :ident ::ident))
(s/def ::join (s/map-of ::join-key ::join-query :count 1))
(s/def ::union (s/map-of ::property ::query :min-count 1))
(s/def ::recursion (s/or :depth (s/with-gen nat-int? #(s/gen (s/int-in 1 5)))
                         :unbounded #{'...}))

(s/def ::join-query
  (s/with-gen
    (s/or :query ::query
          :union ::union
          :recursion ::recursion)
    #(gen/frequency [[10 (s/gen ::query)]
                     [2 (s/gen ::union)]
                     [1 (s/gen ::recursion)]])))

(s/def ::params
  (s/with-gen map?
    (fn [] (gen/map (s/gen #{:param/random :param/foo :param/bar}) gen/string-alphanumeric))))

(s/def ::param-expr-key
  (s/with-gen
    (s/or :prop ::property
          :join ::join
          :ident ::ident)
    #(gen/frequency [[20 (s/gen ::property)]
                     [8 (s/gen ::join)]
                     [4 (s/gen ::ident)]])))

(s/def ::param-expr
  (s/with-gen
    (s/and list? (s/cat :expr ::param-expr-key :params ::params))
    #(gen/let [q (s/gen ::param-expr-key)
               p (s/gen ::params)]
       (list q p))))

(s/def ::query-expr
  (s/or :prop ::property
        :join ::join
        :ident ::ident
        :param-exp ::param-expr
        :special ::special-property))

(s/def ::query
  (s/coll-of ::query-expr :kind vector?
    :gen #(let [g (s/gen (s/coll-of ::query-expr :kind vector? :max-count 5))]
            (gen/->Generator
              (fn [rdn size]
                (if (> *query-gen-max-depth* 0)
                  (binding [*query-gen-max-depth* (dec *query-gen-max-depth*)]
                    (gen/call-gen g rdn size))
                  (gen/call-gen (gen/return []) rdn size)))))))

; those symbol set examples have to writen outside of the with-gen, otherwise CLJS doesn't compiles
(def sample-mutations '#{do-something create/this-thing operation.on/space})

(s/def ::mutation-key (s/with-gen symbol? #(s/gen sample-mutations)))

(s/def ::mutation-expr
  (s/with-gen
    (s/and list? (s/cat :mutate-key ::mutation-key :params (s/? ::params)))
    #(gen/let [key (s/gen ::mutation-key)
               val (s/gen ::params)]
       (list key val))))

(s/def ::mutation-join
  (s/map-of ::mutation-expr ::query :count 1))

(s/def ::mutation
  (s/or :mutation ::mutation-expr
        :mutation-join ::mutation-join))

(s/def ::mutation-tx
  (s/with-gen
    (s/and vector? (s/cat :mutations (s/+ ::mutation) :reads (s/* ::property)))
    #(gen/fmap vec (s/gen (s/cat :mutations (s/+ ::mutation) :reads (s/* ::property))))))

(s/def ::transaction
  (s/with-gen
    (s/or :query ::query
          :mutation ::mutation-tx)
    #(gen/frequency [[5 (s/gen ::query)] [1 (s/gen ::mutation-tx)]])))