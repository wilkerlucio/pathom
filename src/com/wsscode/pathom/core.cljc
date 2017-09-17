(ns com.wsscode.pathom.core
  (:require
    [om.next :as om]
    [clojure.spec.alpha :as s]
    #?(:cljs [goog.object :as gobj]))
  #?(:clj
     (:import (clojure.lang IAtom))))

(s/def ::env map?)

(s/def ::reader-map (s/map-of keyword? ::reader))
(s/def ::reader-seq (s/coll-of ::reader :kind vector? :into []))
(s/def ::reader-fn (s/fspec :args (s/cat :env ::env)
                            :ret any?))

(s/def ::reader
  (s/or :fn ::reader-fn
        :map ::reader-map
        :list ::reader-seq))

(s/def ::process-reader
  (s/fspec :args (s/cat :reader ::reader)
           :ret ::reader))

(s/def ::errors (s/map-of vector? any?))

(s/def ::errors* #(instance? IAtom %))

(s/def ::process-error
  (s/fspec :args (s/cat :env ::env :error any?)
           :ret any?))

(s/def ::entity any?)
(s/def ::entity-key keyword?)

(s/def ::js-key-transform
  (s/fspec :args (s/cat :key any?)
           :ret string?))

(s/def ::js-value-transform
  (s/fspec :args (s/cat :key any? :value any?)
           :ret any?))

(s/def ::om-parser
  (s/fspec :args (s/cat :env map? :tx vector?)
           :ret map?))

(s/def ::wrap-read
  (s/fspec :args (s/cat :reader ::reader-fn)
           :ret ::reader-fn))

(s/def ::wrap-parser
  (s/fspec :args (s/cat :parser ::om-parser)
           :ret ::om-parser))

(s/def ::plugin (s/keys :opt [::wrap-read ::wrap-parser]))

(s/def ::plugins
  (s/coll-of ::plugin :kind vector?))

;; SUPPORT FUNCTIONS

(defn union-children? [ast]
  "Given an AST point, check if the children is a union query type."
  (= :union (some-> ast :children first :type)))

(defn read-from* [{:keys [ast] :as env} reader]
  (cond
    (map? reader) (let [k (:dispatch-key ast)]
                    (if-let [[_ v] (find reader k)]
                      (read-from* env v)
                      ::continue))
    (vector? reader) (let [res (into [] (comp (map #(read-from* env %))
                                              (drop-while #(= % ::continue))
                                              (take 1))
                                     reader)]
                       (if (seq res)
                         (first res)
                         ::continue))
    (ifn? reader) (reader env)
    :else (throw (ex-info "Can't process reader" {:reader reader}))))

(defn read-from [env reader]
  "Runs the read process for the reading, the reader can be a function, a vector or a map:

  function: will receive the environment as argument
  map: will dispatch from the ast dispatch-key to a reader on the map value
  vector: will try to run each reader in sequence, when a reader returns ::p/continue it will try the next"
  (let [res (read-from* env reader)]
    (if (= res ::continue) ::not-found res)))

#_(s/fdef read-from
    :args (s/cat :env ::env :reader ::reader)
    :ret any?)

(defn entity [{::keys [entity-key] :as env}]
  "Fetch the entity according to the ::entity-key."
  (get env entity-key))

#_(s/fdef entity
    :args (s/cat :env ::env)
    :ret (s/nilable ::entity))

(defn join
  "Runs a parser with current sub-query."
  ([entity {::keys [entity-key] :as env}] (join (assoc env entity-key entity)))
  ([{:keys  [parser ast query]
     ::keys [union-path]
     :as    env}]
   (let [entity (entity env)
         query  (if (union-children? ast)
                  (let [_    (assert union-path "You need to set :com.wsscode.pathom.core/union-path to handle union queries.")
                        path (union-path entity)]
                    (or (get query path) (throw (ex-info "No query for union path" {:union-path path
                                                                                    :path       (::path env)}))))
                  query)]
     (cond
       (nil? query)
       entity

       (first (filter #{'*} query))
       (merge entity
              (parser env (filterv (complement #{'*}) query)))

       :else
       (parser env query)))))

(defn join-seq [{::keys [entity-key] :as env} coll]
  (mapv #(join (-> env
                   (assoc entity-key %)
                   (update ::path conj %2))) coll (range)))

;; old names for join and join-seq
(def continue join)
(def continue-seq join-seq)

(defn ast-key-id [ast]
  (let [key (some-> ast :key)]
    (if (sequential? key) (second key))))

(defn ident-key [{:keys [ast]}]
  (let [key (some-> ast :key)]
    (if (vector? key) (first key))))

(defn ident-value [{:keys [ast]}]
  (ast-key-id ast))

(defn ensure-attrs [{:keys [parser] :as env} attributes]
  "Runs the parser against current element to garantee that some fields are loaded.
  This is useful when you need to ensure some values are loaded in order to fetch some
  more complex data."
  (let [e (entity env)]
    (merge e (parser env (filterv (-> e keys set complement) attributes)))))

(defn elide-ast-nodes
  "Remove items from a query (AST) that have a key listed in the elision-set"
  [{:keys [key union-key] :as ast} elision-set]
  (let [union-elision? (contains? elision-set union-key)]
    (when-not (or union-elision? (contains? elision-set key))
      (update ast :children (fn [c] (if c (vec (keep #(elide-ast-nodes % elision-set) c))))))))

(defn normalize-env [{:keys [ast] :as env}]
  (cond-> (update env ::path (fnil conj []) (:key ast))
    (nil? (::entity-key env)) (assoc ::entity-key ::entity)))

;; DISPATCH HELPERS

(defn key-dispatch [{:keys [ast]}]
  (:dispatch-key ast))

(defn entity-dispatch [{:keys [ast]}]
  (if (vector? (:key ast))
    (first (:key ast))))

;; NODE HELPERS

(defn placeholder-node [ns]
  "Produces a reader that will respond to any keyword with the namespace ns. The join node logical level stays the same
  as the parent where the placeholder node is requested."
  (fn [{:keys [ast] :as env}]
    (if (= ns (namespace (:dispatch-key ast)))
      (join env)
      ::continue)))

;; BUILT-IN READERS

(defn map-reader [{:keys  [ast query]
                   ::keys [entity-key]
                   :as    env}]
  (let [entity (entity env)]
    (if-let [[_ v] (find entity (:dispatch-key ast))]
      (if (sequential? v)
        (join-seq env v)
        (if (and (map? v) query)
          (join (assoc env entity-key v))
          v))
      ::continue)))

#?(:cljs
   (defn js-obj-reader [{:keys  [query ast]
                         ::keys [js-key-transform js-value-transform entity-key]
                         :as    env
                         :or    {js-key-transform   name
                                 js-value-transform (fn [_ v] v)}}]
     (let [js-key (js-key-transform (:dispatch-key ast))
           entity (entity env)]
       (if (gobj/containsKey entity js-key)
         (let [v (gobj/get entity js-key)]
           (if (js/Array.isArray v)
             (join-seq env v)
             (if (and query (= (type v) js/Object))
               (join (assoc env entity-key v))
               (js-value-transform (:dispatch-key ast) v))))
         ::continue))))

;; PLUGINS

(defn wrap-handle-exception [reader]
  (fn [{::keys [errors* path process-error] :as env}]
    (try
      (reader env)
      (catch Exception e
        (swap! errors* assoc path (if process-error (process-error env e)
                                                    (Throwable->map e)))
        ::reader-error))))

(defn wrap-parser-exception [parser]
  (fn [env tx]
    (let [errors (atom {})]
      (cond-> (parser (assoc env ::errors* errors) tx)
        (seq @errors) (assoc ::errors @errors)))))

(def error-handler-plugin
  {::wrap-read   wrap-handle-exception
   ::wrap-parser wrap-parser-exception})

(defn env-plugin [extra-env]
  {::wrap-parser (fn [parser]
                   (fn [env tx]
                     (parser (merge env extra-env) tx)))})

(defn env-wrap-plugin [extra-env-wrapper]
  "This plugin receives a function that will be called to wrap the current
  enviroment each time the main parser is called (parser level)."
  {::wrap-parser (fn [parser]
                   (fn [env tx]
                     (parser (extra-env-wrapper env) tx)))})

;; PARSER READER

(defn wrap-add-path [reader]
  (fn [{:keys [ast] :as env}]
    (reader (update env ::path (fnil conj []) (:key ast)))))

(defn wrap-normalize-env [parser]
  (fn [env tx]
    (parser (assoc env ::entity-key ::entity) tx)))

(defn wrap-reduce-params [reader]
  (fn [env _ _]
    {:value (reader env)}))

(defn pathom-read' [{::keys [reader] :as env}]
  (read-from env reader))

(defn apply-plugins [v plugins key]
  (reduce (fn [x plugin]
            (let [f (get plugin key)]
              (if f (f x) x)))
          v plugins))

(defn parser [{:keys  [mutate]
               ::keys [plugins]}]
  (-> (om/parser {:read   (-> pathom-read'
                              (apply-plugins plugins ::wrap-read)
                              wrap-add-path
                              wrap-reduce-params)
                  :mutate mutate})
      (apply-plugins plugins ::wrap-parser)
      wrap-normalize-env))

(defn pathom-read [{::keys [reader process-reader] :as env} _ _]
  "DEPRECATED: use p/parser to create your parser"
  {:value
   (let [env (normalize-env env)]
     (read-from env (if process-reader (process-reader reader) reader)))})
