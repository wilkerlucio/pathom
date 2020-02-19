(ns com.wsscode.pathom.connect.foreign
  (:require [#?(:clj  com.wsscode.async.async-clj
                :cljs com.wsscode.async.async-cljs)
             :refer [let-chan go-promise <? <?maybe <!maybe]]
            [com.wsscode.pathom.connect :as pc]
            [com.wsscode.pathom.connect.indexes :as pci]
            [com.wsscode.pathom.connect.planner :as pcp]
            [com.wsscode.pathom.core :as p]
            [com.wsscode.pathom.misc :as p.misc]
            [com.wsscode.pathom.trace :as pt]
            [clojure.string :as str]
            [edn-query-language.core :as eql]))

(def index-query
  [{:com.wsscode.pathom.connect/indexes
    [:com.wsscode.pathom.connect/index-oir
     :com.wsscode.pathom.connect/idents
     :com.wsscode.pathom.connect/autocomplete-ignore
     :com.wsscode.pathom.connect/index-resolvers
     :com.wsscode.pathom.connect/index-mutations]}])

(defn remove-internal-keys [m]
  (into {} (remove (fn [[k _]] (str/starts-with? (or (namespace k) "") "com.wsscode.pathom"))) m))

(defn parser-indexes [parser]
  (let-chan [idx-raw (parser {} index-query)]
    (as-> idx-raw <>
      (::pc/indexes <>)
      (p/elide-items p/special-outputs <>)
      (update <> ::pc/index-oir remove-internal-keys)
      (update <> ::pc/index-resolvers remove-internal-keys)
      (update <> ::pc/index-mutations remove-internal-keys)
      (update <> ::pc/index-resolvers #(p.misc/map-vals (fn [x] (assoc x ::pc/resolve (fn [_ _]))) %))
      (update <> ::pc/index-mutations #(p.misc/map-vals (fn [x] (assoc x ::pc/mutate (fn [_ _]))) %)))))

(defn compute-foreign-input [{::pcp/keys [node] :as env}]
  (let [input  (::pcp/input node)
        entity (p/entity env)]
    (select-keys entity (keys input))))

(defn compute-foreign-query
  [{::pcp/keys [node] :as env}]
  (let [inputs     (compute-foreign-input env)
        base-query (eql/ast->query (::pcp/foreign-ast node))]
    (if (seq inputs)
      (let [ident-join-key (if (= 1 (count inputs))
                             (first (keys inputs))
                             (-> (p/find-closest-non-placeholder-parent-join-key env)
                                 p/ident-key*))
            join-node      (if (contains? inputs ident-join-key)
                             [ident-join-key (get inputs ident-join-key)]
                             [::foreign-call nil])]
        {::base-query base-query
         ::query      [{(list join-node {:pathom/context (dissoc inputs ident-join-key)}) base-query}]
         ::join-node  join-node})
      {::base-query base-query
       ::query      base-query})))

(defn internalize-foreign-errors
  [{::p/keys [path]
    ::keys [join-node]} errors]
  (p.misc/map-keys #(into (pop path) (cond-> % join-node next)) errors))

(defn call-foreign-parser [env parser]
  (let [{::keys [query join-node] :as foreign-call} (compute-foreign-query env)]
    (pt/trace env {::pt/event     ::foreign-call
                   ::foreign-call foreign-call})
    (let-chan [response (parser {} query)]
      (if-let [errors (::p/errors response)]
        (->> (internalize-foreign-errors (merge env foreign-call) errors)
             (swap! (::p/errors* env) merge)))
      (cond-> response join-node (get join-node)))))

(defn internalize-parser-index*
  ([indexes] (internalize-parser-index* indexes nil))
  ([{::pc/keys [index-source-id] :as indexes} parser]
   (let [index-source-id (or index-source-id (gensym "dynamic-parser-"))]
     (-> indexes
         (update ::pc/index-resolvers
           (fn [resolvers]
             (into {}
                   (map (fn [[r v]] [r (assoc v ::pc/dynamic-sym index-source-id)]))
                   resolvers)))
         (assoc-in [::pc/index-resolvers index-source-id]
           {::pc/sym               index-source-id
            ::pc/cache?            false
            ::pc/dynamic-resolver? true
            ::pc/resolve           (fn [env _] (call-foreign-parser env parser))})
         (dissoc ::pc/index-source-id)))))

(defn internalize-parser-index
  "This function calls the the parser to return its index and them modify this index
  to be in a shape that enables it to be used as a dynamic foreign resolver. This
  function returns an index that you can just merge into your index to get the foreign
  parser integrated."
  [parser]
  (let-chan [indexes (parser-indexes parser)]
    (internalize-parser-index* indexes parser)))

(defn foreign-parser-plugin [{::keys [parsers]}]
  {::p/wrap-parser2
   (fn connect-wrap-parser [parser {::p/keys [plugins]}]
     (let [indexes (some ::pc/indexes plugins)]
       (if indexes
         (swap! indexes
           (fn [idx]
             (reduce
               pc/merge-indexes
               idx
               (map internalize-parser-index parsers))))
         (println "Can't register foreign parsers, index not found."))
       parser))})
