(ns com.wsscode.pathom.connect.gen
  (:require [clojure.test.check.generators :as gen]
            [com.wsscode.pathom.core :as p]
            [com.wsscode.pathom.connect :as pc]
            [com.wsscode.pathom.specs.query :as s.query]))

(defn gen-connect-index [attrs]
  {::attrs
   attrs

   ::p/path
   []

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
   (fn gen-join-key [{::s.query/keys [gen-property]
                      ::p/keys       [path]
                      :as            env}]
     (gen-property (update env ::attrs #(remove (set path) %))))

   ::s.query/gen-join-query
   (fn gen-join-query [{::s.query/keys [gen-query] :as env}]
     (gen-query env))

   ::s.query/gen-join
   (fn gen-join [{::s.query/keys [gen-join-key gen-query] :as env}]
     (gen/let [key   (gen-join-key env)
               query (gen-query (update env ::p/path conj key))]
       {key query}))

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
       (reduce (fn [index {::pc/keys [sym] :as resolver}]
                 (if (contains? (::pc/index-resolvers index) sym)
                   index
                   (pc/add index sym resolver))) {} resolvers)))})

(defn merge-resolvers [resolvers]
  (reduce (fn [index {::pc/keys [sym] :as resolver}]
            (if (contains? (::pc/index-resolvers index) sym)
              index
              (pc/add index sym resolver))) {} resolvers))

(defn clean-nil [s]
  (into [] (filter identity) s))

(defn gen-connect-query [{::pc/keys [indexes]}]
  {::pc/indexes
   (assoc indexes ::pc/cache (atom {}))

   ::p/path
   []

   ::attrs
   (fn attrs [{::p/keys  [path]
               ::pc/keys [indexes]}]
     (-> (pc/discover-attrs indexes path) keys seq))

   ::idents
   (fn idents [{::pc/keys [indexes]}]
     (-> indexes ::pc/idents))

   ::nestable-keys
   (fn nestable-keys [{::pc/keys [indexes]
                       ::p/keys  [path]}]
     (->> (pc/discover-attrs indexes path)
          (keep (fn [[k v]] (if (seq v) k)))
          seq))

   ::s.query/gen-property
   (fn gen-property [{::keys [attrs] :as env}]
     (if-let [ks (attrs env)]
       (gen/elements ks)
       (gen/return '*)))

   ::s.query/gen-ident-key
   (fn gen-ident-key [env]
     (gen/elements (-> env ::pc/indexes ::pc/idents)))

   ::s.query/gen-query-expr
   (fn gen-query-expr [{::s.query/keys [gen-property gen-join gen-ident gen-special-property]
                        ::keys         [attrs idents nestable-keys]
                        :as            env}]
     (if (attrs env)
       (gen/frequency (clean-nil
                        [[20 (gen-property env)]
                         (if (or (idents env) (nestable-keys env)) [6 (gen-join env)])
                         (if (idents env) [1 (gen-ident env)])
                         [1 (gen-special-property env)]]))
       (gen/frequency (clean-nil
                        [(if (or (idents env) (nestable-keys env)) [6 (gen-join env)])
                         (if (idents env) [1 (gen-ident env)])
                         [1 (gen-special-property env)]]))))

   ::s.query/gen-join-key
   (fn gen-join-key [{::s.query/keys [gen-ident]
                      ::keys         [idents nestable-keys]
                      ::p/keys       [path]
                      :as            env}]
     (let [nestable-keys (nestable-keys env)]
       (if nestable-keys
         (if (seq path)
           (gen/frequency (clean-nil
                            [[100 (gen/elements nestable-keys)]
                             (if (idents env) [1 (gen-ident env)])]))
           (gen/frequency (clean-nil
                            [(if (idents env) [10 (gen-ident env)])
                             [7 (gen/elements nestable-keys)]])))
         (gen-ident env))))

   ::s.query/gen-join
   (fn gen-join [{::s.query/keys [gen-join-key gen-query] :as env}]
     (gen/let [key   (gen-join-key env)
               query (gen-query (update env ::p/path #(if (vector? key)
                                                        [(first key)]
                                                        (conj % key))))]
       {key query}))

   ::s.query/gen-query
   (fn gen-query [{::keys         [attrs]
                   ::pc/keys      [indexes]
                   ::s.query/keys [gen-property gen-query-expr gen-max-depth]
                   :as            env}]
     (if (or (attrs env) (-> indexes ::pc/idents seq))
       (if (> gen-max-depth 0)
         (gen/vector-distinct (gen-query-expr (update env ::s.query/gen-max-depth dec)))
         (gen/vector-distinct (gen-property env)))
       (gen/return [])))})
