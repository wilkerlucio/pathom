(ns com.wsscode.pathom.parser
  (:require [clojure.core.async :refer [go <!]]
            [#?(:clj  com.wsscode.common.async-clj
                :cljs com.wsscode.common.async-cljs) :refer [<? go-catch go-promise chan?]]
            [clojure.core.async :as async]
            [com.wsscode.pathom.trace :as pt :refer [trace tracing]])
  #?(:clj (:import (clojure.lang IDeref))))

(declare expr->ast)

(defn- atom? [x]
  #?(:clj  (instance? IDeref x)
     :cljs (satisfies? IDeref x)))

(defn- mark-meta [source target]
  (cond-> target
    (meta source) (assoc :meta (meta source))))

(defn symbol->ast [k]
  {:dispatch-key k
   :key          k})

(defn keyword->ast [k]
  {:type         :prop
   :dispatch-key k
   :key          k})

(defn union-entry->ast [[k v]]
  (let [component (-> v meta :component)]
    (merge
      {:type      :union-entry
       :union-key k
       :query     v
       :children  (into [] (map expr->ast) v)}
      (when-not (nil? component)
        {:component component}))))

(defn union->ast [m]
  {:type     :union
   :query    m
   :children (into [] (map union-entry->ast) m)})

(defn call->ast [[f args :as call]]
  (if (= 'quote f)
    (assoc (expr->ast args) :target (or (-> call meta :target) :remote))
    (let [ast (update-in (expr->ast f) [:params] merge (or args {}))]
      (cond-> (mark-meta call ast)
        (symbol? (:dispatch-key ast)) (assoc :type :call)))))

(defn query->ast
  "Convert a query to its AST representation."
  [query]
  (let [component (-> query meta :component)]
    (merge
      (mark-meta query
        {:type     :root
         :children (into [] (map expr->ast) query)})
      (when-not (nil? component)
        {:component component}))))

(defn join->ast [join]
  (let [query-root? (-> join meta :query-root)
        [k v] (first join)
        ast         (expr->ast k)
        type        (if (= :call (:type ast)) :call :join)
        component   (-> v meta :component)]
    (merge ast
           (mark-meta join {:type type :query v})
           (when-not (nil? component)
             {:component component})
           (when query-root?
             {:query-root true})
           (when-not (or (number? v) (= '... v))
             (cond
               (vector? v) {:children (into [] (map expr->ast) v)}
               (map? v) {:children [(union->ast v)]}
               :else (throw
                       (ex-info (str "Invalid join, " join)
                         {:type :error/invalid-join})))))))

(defn ident->ast [[k id :as ref]]
  {:type         :prop
   :dispatch-key k
   :key          ref})

(defn expr->ast
  "Given a query expression convert it into an AST."
  [x]
  (cond
    (symbol? x) (symbol->ast x)
    (keyword? x) (keyword->ast x)
    (map? x) (join->ast x)
    (vector? x) (ident->ast x)
    (seq? x) (call->ast x)
    :else (throw
            (ex-info (str "Invalid expression " x)
              {:type :error/invalid-expression}))))

(defn wrap-expr [root? expr]
  (if root?
    (with-meta
      (cond-> expr (keyword? expr) list)
      {:query-root true})
    expr))

(defn parameterize [expr params]
  (if-not (empty? params)
    (list expr params)
    (list expr)))

(defn ast->expr
  "Given a query expression AST convert it back into a query expression."
  ([ast]
   (ast->expr ast false))
  ([{:keys [type component] ast-meta :meta :as ast} unparse?]
   (if (= :root type)
     (cond-> (into (with-meta [] ast-meta) (map #(ast->expr % unparse?)) (:children ast))
       (not (nil? component)) (vary-meta assoc :component component))
     (let [{:keys [key query query-root params]} ast]
       (wrap-expr query-root
         (if (and params (not= :call type))
           (let [expr (ast->expr (dissoc ast :params) unparse?)]
             (parameterize expr params))
           (let [key (if (= :call type) (parameterize key params) key)]
             (if (or (= :join type)
                     (and (= :call type) (:children ast)))
               (if (and (not= '... query) (not (number? query))
                        (or (true? unparse?)
                            (= :call type)))
                 (let [{:keys [children]} ast
                       query-meta (meta query)]
                   (if (and (== 1 (count children))
                            (= :union (:type (first children)))) ;; UNION
                     (with-meta
                       {key (into (cond-> (with-meta {} ast-meta)
                                    component (vary-meta assoc :component component))
                                  (map (fn [{:keys [union-key children component]}]
                                         [union-key
                                          (cond-> (into [] (map #(ast->expr % unparse?)) children)
                                            (not (nil? component)) (vary-meta assoc :component component))]))
                                  (:children (first children)))}
                       ast-meta)
                     (with-meta
                       {key (cond-> (into (with-meta [] query-meta) (map #(ast->expr % unparse?)) children)
                              (not (nil? component)) (vary-meta assoc :component component))}
                       ast-meta)))
                 (with-meta {key query} ast-meta))
               key))))))))

(declare focus-subquery*)

(defn- focus-subquery-union*
  [query-ast sub-ast]
  (let [s-index (into {} (map #(vector (:union-key %) %)) (:children sub-ast))]
    (assoc query-ast
      :children
      (reduce
        (fn [children {:keys [union-key] :as union-entry}]
          (if-let [sub (get s-index union-key)]
            (conj children (focus-subquery* union-entry sub))
            (conj children union-entry)))
        []
        (:children query-ast)))))

(defn- focus-subquery*
  [query-ast sub-ast]
  (let [q-index (into {} (map #(vector (:key %) %)) (:children query-ast))]
    (assoc query-ast
      :children
      (reduce
        (fn [children {:keys [key type] :as focus}]
          (if-let [source (get q-index key)]
            (cond
              (= :join type (:type source))
              (conj children (focus-subquery* source focus))

              (= :union type (:type source))
              (conj children (focus-subquery-union* source focus))

              :else
              (conj children source))
            children))
        []
        (:children sub-ast)))))

(defn focus-subquery
  "Given a query, focus it along the specified query expression.

  Examples:
    (focus-query [:foo :bar :baz] [:foo])
    => [:foo]

    (fulcro.client.primitives/focus-query [{:foo [:bar :baz]} :woz] [{:foo [:bar]} :woz])
    => [{:foo [:bar]} :woz]"
  [query sub-query]
  (let [query-ast (query->ast query)
        sub-ast   (query->ast sub-query)]
    (ast->expr (focus-subquery* query-ast sub-ast) true)))

(defn normalize-atom [x] (if (atom? x) x (atom x)))

(defn parser [{:keys [read mutate]}]
  (fn self [env tx]
    (let [{:keys [children] :as tx-ast} (or (::ast tx) (query->ast tx))
          tx  (vary-meta tx assoc ::ast tx-ast)
          env (-> env
                  (assoc :parser self)
                  (update :com.wsscode.pathom.core/entity normalize-atom))]
      (loop [res {}
             [{:keys [query key type params] :as ast} & tail] children]
        (if ast
          (let [query (cond-> query (vector? query) (vary-meta assoc ::ast tx-ast))
                env   (cond-> (merge env {:ast ast :query query})
                        (nil? query) (dissoc :query)
                        (= '... query) (assoc :query tx))
                value (case type
                        :call
                        (do
                          (assert mutate "Parse mutation attempted but no :mutate function supplied")
                          (let [{:keys [action]} (mutate env key params)]
                            (if action
                              (try
                                (action)
                                (catch #?(:clj Throwable :cljs :default) e
                                  {::error e})))))

                        (:prop :join :union)
                        (do
                          (assert read "Parse read attempted but no :read function supplied")
                          (read env))

                        nil)]
            (recur (assoc res key value) tail))
          res)))))

(defn async-parser [{:keys [read mutate]}]
  (fn self [env tx]
    (go-catch
      (let [{:keys [children] :as tx-ast} (or (::ast tx) (query->ast tx))
            tx  (vary-meta tx assoc ::ast tx-ast)
            env (-> env
                    (assoc :parser self)
                    (update :com.wsscode.pathom.core/entity normalize-atom))]
        (loop [res {}
               [{:keys [query key type params] :as ast} & tail] children]
          (if ast
            (let [query (cond-> query (vector? query) (vary-meta assoc ::ast tx-ast))
                  env   (cond-> (merge env {:ast ast :query query})
                          (nil? query) (dissoc :query)
                          (= '... query) (assoc :query tx))
                  value (case type
                          :call
                          (do
                            (assert mutate "Parse mutation attempted but no :mutate function supplied")
                            (let [{:keys [action]} (mutate env key params)]
                              (if action
                                (try
                                  (action)
                                  (catch #?(:clj Throwable :cljs :default) e
                                    {::error e})))))

                          (:prop :join :union)
                          (do
                            (assert read "Parse read attempted but no :read function supplied")
                            (read env))

                          nil)
                  value (if (chan? value) (<? value) value)]
              (recur (assoc res key value) tail))
            res))))))

(defn watch-pending-key [{::keys [key-watchers]} key]
  (let [ch (async/chan)]
    (swap! key-watchers update key conj ch)
    ch))

(defn parallel-parser [{:keys [read mutate]}]
  (fn self [{::keys [waiting key-watchers] :as env} tx]
    (go-catch
      (let [{:keys [children] :as tx-ast} (query->ast tx)
            key-watchers (or key-watchers (atom {}))
            env          (-> env
                             (assoc :parser self ::parallel? true)
                             (update :com.wsscode.pathom.core/entity normalize-atom))]
        (loop [res        {}
               waiting    (or waiting #{})
               processing #{}
               [{:keys [query key type params] :as ast} & tail] children]
          (if ast
            (cond
              ; external wait
              (and (::key-watchers env)
                   (contains? waiting key))
              (do
                (trace env {::pt/event ::external-wait-key :key key})
                (recur res waiting
                  (conj processing (watch-pending-key env key))
                  tail))

              (contains? waiting key)
              (do
                (trace env {::pt/event ::skip-wait-key :key key})
                (recur res waiting processing tail))

              (contains? res key)
              (do
                (trace env {::pt/event ::skip-resolved-key :key key})
                (recur res waiting processing tail))

              :else
              (let [query (cond-> query (vector? query) (vary-meta assoc ::ast tx-ast))
                    env   (cond-> (merge env {:ast           ast
                                              :query         query
                                              ::waiting      waiting
                                              ::key-watchers key-watchers})
                            (nil? query) (dissoc :query)
                            (= '... query) (assoc :query tx))
                    value (case type
                            :call
                            (do
                              (assert mutate "Parse mutation attempted but no :mutate function supplied")
                              (let [{:keys [action]} (mutate env key params)]
                                (if action
                                  (try
                                    (trace env {::pt/event ::call-mutation
                                                :mutation  key})
                                    (action)
                                    (catch #?(:clj Throwable :cljs :default) e
                                      {::error e})))))

                            (:prop :join :union)
                            (do
                              (assert read "Parse read attempted but no :read function supplied")
                              (trace env {::pt/event ::call-read :key key})
                              (read env))

                            nil)]
                (cond
                  (chan? value)
                  (let [provides #{key}
                        stream   (go
                                   {::provides       provides
                                    ::merge-result?  true
                                    ::response-value {key (<! value)}})]
                    (trace env {::pt/event ::async-return
                                :key       key})
                    (recur res
                      (into waiting provides)
                      (conj processing stream)
                      tail))

                  (::provides value)
                  (let [provides (::provides value)
                        stream   (::response-stream value)]
                    (trace env {::pt/event ::provided-return
                                ::provides provides})
                    (recur res
                      (into waiting provides)
                      (conj processing stream)
                      tail))

                  :else
                  (recur (assoc res key value) waiting processing tail))))

            (if (seq processing)
              (let [[{::keys [response-value provides merge-result?] :as msg} p] (async/alts! (vec processing))]
                (if msg
                  (do
                    (trace env {::pt/event       ::process-pending
                                ::provides       provides
                                ::response-value response-value})
                    (swap! (:com.wsscode.pathom.core/entity env) merge response-value)
                    (when (seq @key-watchers)
                      (doseq [pkey provides]
                        (trace env {::pt/event      ::flush-watchers
                                    :key            pkey
                                    ::watcher-count (count (get @key-watchers pkey))})
                        (doseq [out (get @key-watchers pkey)]
                          (async/put! out {::provides #{pkey}})
                          (async/close! out))
                        (swap! key-watchers dissoc pkey)))
                    (recur (cond-> res
                             merge-result?
                             (merge response-value))
                      (into #{} (remove provides) waiting)
                      processing
                      (:children (query->ast (focus-subquery tx (vec provides))))))
                  (recur res waiting (disj processing p) [])))
              res)))))))

(defn unique-ident?
  #?(:cljs {:tag boolean})
  [x]
  (and (ident? x) (= '_ (second x))))
