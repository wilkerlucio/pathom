(ns com.wsscode.pathom.connect.gen
  (:require [clojure.test.check.generators :as gen]
            [com.wsscode.pathom.core :as p]
            [com.wsscode.pathom.connect :as pc]
            [com.wsscode.pathom.specs.query :as s.query]))

(defn gen-connect-index [attrs]
  {::attrs
   attrs

   ::s.query/gen-property
   (fn gen-property [{::keys [attrs]}] (gen/elements attrs))

   ::s.query/gen-params
   (fn gen-params [_]
     (gen/map gen/keyword-ns gen/simple-type-printable))

   ::s.query/gen-query-expr
   (fn gen-query-expr [{::s.query/keys [gen-property gen-join]
                        :as            env}]
     (gen/frequency [[20 (gen-property env)]
                     [6 (gen-join env)]]))

   ::s.query/gen-join-key
   (fn gen-join-key [{::s.query/keys [gen-property] :as env}]
     (gen-property env))

   ::s.query/gen-join-query
   (fn gen-join-query [{::s.query/keys [gen-query] :as env}]
     (gen-query env))

   ::s.query/gen-query
   (fn gen-query [{::s.query/keys [gen-property gen-query-expr gen-max-depth] :as env}]
     (gen/not-empty
       (if (> gen-max-depth 0)
         (gen/vector (gen-query-expr (update env ::s.query/gen-max-depth dec)))
         (gen/vector-distinct (gen-property env)))))

   ::gen-resolver
   (fn gen-resolver [{::s.query/keys [gen-query gen-property]
                      :as            env}]
     (gen/let [sym    gen/symbol-ns
               input  (gen/frequency [[100 (gen/fmap hash-set (gen-property env))]
                                      [10 (gen/return #{})]
                                      [5 (gen/set (gen-property env) {:min-elements 2
                                                                      :max-elements 4})]])
               output (gen-query env)]
       {::pc/sym    sym
        ::pc/input  input
        ::pc/output output}))

   ::gen-index
   (fn gen-index [{::keys [gen-resolver] :as env}]
     (gen/let [resolvers (gen/vector (gen-resolver env))]
       (reduce #(pc/add % (::pc/sym %2) %2) {} resolvers)))})

(defn gen-connect-query [{::pc/keys [indexes]}]
  {::pc/indexes
   indexes

   ::pc/cache
   (atom {})

   ::p/path
   []

   ::s.query/gen-property
   (fn gen-property [{::p/keys  [path]
                      ::pc/keys [indexes]}]
     (if-let [ks (seq (keys (pc/discover-attrs indexes path)))]
       (gen/elements ks)
       (gen/return '*)))

   ::s.query/gen-ident-key
   (fn [env]
     (gen/elements (-> env ::pc/indexes ::pc/idents)))

   ::s.query/gen-query-expr
   (fn gen-query-expr [{::s.query/keys [gen-property gen-join gen-ident gen-special-property]
                        ::p/keys       [path]
                        ::pc/keys      [indexes]
                        :as            env}]
     (if (seq (keys (pc/discover-attrs indexes path)))
       (gen/frequency [[20 (gen-property env)]
                       [6 (gen-join env)]
                       [1 (gen-ident env)]
                       [1 (gen-special-property env)]])
       (gen/frequency [[6 (gen-join env)]
                       [1 (gen-ident env)]
                       [1 (gen-special-property env)]])))

   ::s.query/gen-join-key
   (fn gen-join-key [{::s.query/keys [gen-ident]
                      ::p/keys       [path]
                      ::pc/keys      [indexes]
                      :as            env}]
     (let [nestable-keys (->> (pc/discover-attrs indexes path)
                              (keep (fn [[k v]] (if (seq v) k))))]
       (if (seq nestable-keys)
         (if (seq path)
           (gen/frequency [[100 (gen/elements nestable-keys)]
                           [1 (gen-ident env)]])
           (gen/frequency [[10 (gen-ident env)]
                           [7 (gen/elements nestable-keys)]]))
         (gen-ident env))))

   ::s.query/gen-join
   (fn gen-join [{::s.query/keys [gen-join-key gen-query] :as env}]
     (gen/let [key   (gen-join-key env)
               query (gen-query (update env ::p/path #(if (vector? key)
                                                        [(first key)]
                                                        (conj % key))))]
       {key query}))

   ::s.query/gen-query
   (fn gen-query [{::s.query/keys [gen-property gen-query-expr gen-max-depth] :as env}]
     (if (> gen-max-depth 0)
       (gen/vector-distinct (gen-query-expr (update env ::s.query/gen-max-depth dec)))
       (gen/vector-distinct (gen-property env))))})
