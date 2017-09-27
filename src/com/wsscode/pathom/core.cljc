(ns com.wsscode.pathom.core
  (:require
    [om.next :as om]
    [clojure.spec.alpha :as s]
    [clojure.set :as set]
    #?(:cljs [goog.object :as gobj])
    [clojure.walk :as walk])
  #?(:clj
     (:import (clojure.lang IAtom))))

(s/def ::env map?)
(s/def ::attribute keyword?)

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

(s/def ::error
  (s/spec #?(:clj  #(instance? Throwable %)
             :cljs #(instance? js/Error %))
    :gen #(s/gen #{(ex-info "Generated sample error" {:some "data"})})))

(s/def ::errors (s/map-of vector? any?))

(s/def ::errors* #(instance? IAtom %))

(s/def ::process-error
  (s/fspec :args (s/cat :env ::env :error ::error)
           :ret any?))

(s/def ::entity any?)
(s/def ::entity-key keyword?)

(s/def ::fail-fast? boolean?)

(s/def ::map-key-transform
  (s/fspec :args (s/cat :key any?)
           :ret string?))

(s/def ::map-value-transform
  (s/fspec :args (s/cat :key any? :value any?)
           :ret any?))

(s/def ::js-key-transform ::map-key-transform)

(s/def ::js-value-transform ::map-value-transform)

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

(defn union-children?
  "Given an AST point, check if the children is a union query type."
  [ast]
  (= :union (some-> ast :children first :type)))

(defn read-from* [{:keys [ast] :as env} reader]
  (cond
    (map? reader) (let [k (:key ast)]
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

(defn read-from
  "Runs the read process for the reading, the reader can be a function, a vector or a map:

  function: will receive the environment as argument
  map: will dispatch from the ast key to a reader on the map value
  vector: will try to run each reader in sequence, when a reader returns ::p/continue it will try the next"
  [env reader]
  (let [res (read-from* env reader)]
    (if (= res ::continue) ::not-found res)))

(defn elide-not-found
  "Convert all ::p/not-found values of maps to nil"
  [input]
  (walk/prewalk
    (fn [x]
      (if (map? x)
        (into {} (remove (fn [[_ v]] (= v ::not-found))) x)
        x))
    input))

(defn entity
  "Fetch the entity according to the ::entity-key.
  If a second argument is sent, calls the parser against current element to guarantee that some fields are loaded. This
  is useful when you need to ensure some values are loaded in order to fetch some more complex data. NOTE: When using
  this call with an explicit vector of attributes the parser
  will not be invoked for attributes that already exist in the current value of the current entity."
  ([{::keys [entity-key] :as env}]
   (get env entity-key))
  ([{:keys [parser] :as env} attributes]
   (let [e (entity env)]
     ; FIXME: the filterv here seems questionable to me. I called entity with a list of things I want, I'm not convinced that
     ; you should prevent from triggering a computation for a prop just because I already have it (even then, you could
     ; just swap the merge to cause the current to take priority). But perhaps my computation
     ; is meant to correct/update it somehow? Perhaps this is a convenience so I can re-use the subquery without having
     ; to worry about errors? It should at least be documented, as I've done above.
     (merge e (elide-not-found (parser env (filterv (-> e keys set complement) attributes)))))))

(s/fdef entity
  :args (s/cat :env ::env :attributes (s/? (s/coll-of ::attribute)))
  :ret (s/nilable ::entity))

(defn entity! [{::keys [path] :as env} attributes]
  (let [e       (entity env attributes)
        missing (set/difference (set attributes)
                                (set (keys e)))]
    (if (seq missing)
      (throw (ex-info (str "Entity attributes " (pr-str missing) " could not be realized")
                      {::entity             e
                       ::path               path
                       ::missing-attributes missing})))
    e))

(s/fdef entity!
  :args (s/cat :env ::env :attributes (s/? (s/coll-of ::attribute)))
  :ret (s/nilable ::entity))

(defn entity-attr! [env attr]
  "Helper function to fetch a single attribute from current entity. Raises an exception
  if the property can't be retrieved."
  (get (entity! env [attr]) attr))

(s/fdef entity-attr!
  :args (s/cat :env ::env :attribute ::attribute)
  :ret any?)

(defn join
  "Runs a parser with current sub-query. When run with an `entity` argument, that entity is set as the new environment
  value of `::entity`, and the subquery is parsered with that new environment. When run wihtout an `entity` it
  parses the current subquery in the context of whatever entity was already in `::entity` of the env."
  ([entity {::keys [entity-key] :as env}] (join (assoc env entity-key entity)))
  ([{:keys  [parser ast query]
     ::keys [union-path]
     :as    env}]
   (let [e     (entity env)
         query (if (union-children? ast)
                 (let [_    (assert union-path "You need to set :com.wsscode.pathom.core/union-path to handle union queries.")
                       path (cond
                              (fn? union-path) (union-path env)
                              (keyword? union-path) (get (entity! env [union-path]) union-path))]
                   (or (get query path) (throw (ex-info "No query for union path" {:union-path path
                                                                                   :path       (::path env)}))))
                 query)]
     (cond
       (nil? query) e

       (first (filter #{'*} query))
       (merge e (parser env (filterv (complement #{'*}) query)))

       :else
       (parser env query)))))

(defn join-seq
  "Runs the current subquery against the items of the given collection."
  [{::keys [entity-key] :as env} coll]
  (mapv #(join (-> env
                 ;; FIXME: Perhaps ::entity? Isn't entity-key a map? Do you really want a map as your key?
                   (assoc entity-key %)
                   (update ::path conj %2))) coll (range)))

(defn ident-key
  "The first element of an ident."
  [{:keys [ast]}]
  (let [key (some-> ast :key)]
    (if (vector? key) (first key))))

(defn ident-value
  "The second element of an ident"
  [{:keys [ast]}]
  (let [key (some-> ast :key)]
    (if (sequential? key) (second key))))

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
  (:key ast))

(defn entity-dispatch
  "Dispatch on the first element (type) of an incoming ident."
  [{:keys [ast]}]
  (if (vector? (:key ast))
    (first (:key ast))))

;; NODE HELPERS

(defn placeholder-reader
  "Produces a reader that will respond to any keyword with the namespace ns. The join node logical level stays the same
  as the parent where the placeholder node is requested."
  [ns]
  (fn [{:keys [ast] :as env}]
    (if (= ns (namespace (:dispatch-key ast)))
      (join env)
      ::continue)))

;; BUILT-IN READERS

(defn map-reader
  "A reader that can read the current entity based on `dispatch-key`. This reader can also process joins if the entity
  has the same tree shape as the query."
  [{:keys  [ast query]
                   ::keys [entity-key]
                   :as    env}]
  (let [entity (entity env)]
    (if-let [[_ v] (find entity (:key ast))]
      (if (sequential? v)
        (join-seq env v)
        (if (and (map? v) query)
          (join (assoc env entity-key v))
          v))
      ::continue)))

(defn map-reader* [{::keys [map-key-transform map-value-transform]}]
  (fn [{:keys  [ast query]
        ::keys [entity-key]
        :as    env}]
    (let [key    (cond-> (:key ast) map-key-transform map-key-transform)
          entity (entity env)]
      (if-let [[_ v] (find entity key)]
        (if (sequential? v)
          (join-seq env v)
          (if (and (map? v) query)
            (join (assoc env entity-key v))
            (cond->> v
              map-value-transform
              (map-value-transform (:key ast)))))
        ::continue))))

#?(:cljs
   (defn js-obj-reader [{:keys  [query ast]
                         ::keys [js-key-transform js-value-transform entity-key]
                         :as    env
                         :or    {js-key-transform   name
                                 js-value-transform (fn [_ v] v)}}]
     (let [js-key (js-key-transform (:key ast))
           entity (entity env)]
       (if (gobj/containsKey entity js-key)
         (let [v (gobj/get entity js-key)]
           (if (js/Array.isArray v)
             (join-seq env v)
             (if (and query (= (type v) js/Object))
               (join (assoc env entity-key v))
               (js-value-transform (:key ast) v))))
         ::continue))))

;; PLUGINS

; Exception

(defn error-str [err]
  (let [msg (.getMessage err)
        data (ex-data err)]
    (cond-> (class err)
      msg (str ": " msg)
      data (str " - " (pr-str data)))))

(defn wrap-handle-exception [reader]
  (fn [{::keys [errors* path process-error fail-fast?] :as env}]
    (if fail-fast?
      (reader env)
      (try
        (reader env)
        (catch #?(:clj Throwable :cljs :default) e
          (swap! errors* assoc path (if process-error (process-error env e)
                                                      (error-str e)))
          ::reader-error)))))

(defn wrap-parser-exception [parser]
  (fn [env tx]
    (let [errors (atom {})]
      (cond-> (parser (assoc env ::errors* errors) tx)
        (seq @errors) (assoc ::errors @errors)))))

(def error-handler-plugin
  {::wrap-read   wrap-handle-exception
   ::wrap-parser wrap-parser-exception})

; Enviroment

(defn env-plugin [extra-env]
  {::wrap-parser (fn [parser]
                   (fn [env tx]
                     (parser (merge env extra-env) tx)))})

(defn env-wrap-plugin
  "This plugin receives a function that will be called to wrap the current
  enviroment each time the main parser is called (parser level)."
  [extra-env-wrapper]
  {::wrap-parser (fn [parser]
                   (fn [env tx]
                     (parser (extra-env-wrapper env) tx)))})

; Request cache

(def request-cache-plugin
  {::wrap-parser
   (fn [parser]
     (fn [env tx]
       (parser (assoc env ::request-cache (atom {})) tx)))})

(defmacro cached [env key body]
  `(if-let [cache# (get ~env ::request-cache)]
     (if-let [hit# (get @cache# ~key)]
       hit#
       (let [hit# ~body]
         (swap! cache# assoc ~key hit#)
         hit#))
     ~body))

(defn cache-hit [{::keys [request-cache]} key value]
  (swap! request-cache assoc key value)
  value)

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

;;;; DEPRECATED

;; old names for join and join-seq
(def continue join)
(def continue-seq join-seq)

; keep old name for compatibility
(def placeholder-node placeholder-reader)

(defn pathom-read
  "DEPRECATED: use p/parser to create your parser"
  [{::keys [reader process-reader] :as env} _ _]
  {:value
   (let [env (normalize-env env)]
     (read-from env (if process-reader (process-reader reader) reader)))})

(defn ast-key-id
  "DEPRECATED: use ident-value instead"
  [ast]
  (let [key (some-> ast :key)]
    (if (sequential? key) (second key))))

(defn ensure-attrs [env attributes]
  "DEPRECATED: use p/entity
  Runs the parser against current element to garantee that some fields are loaded.
  This is useful when you need to ensure some values are loaded in order to fetch some
  more complex data."
  (entity env attributes))
