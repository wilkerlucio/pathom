(ns com.wsscode.pathom.connect.foreign
  (:require [com.wsscode.pathom.core :as p]
            [com.wsscode.pathom.connect :as pc]
            [com.wsscode.pathom.connect.indexes :as pci]
            [com.wsscode.pathom.connect.planner :as pcp]
            [com.wsscode.pathom.trace :as pt]))

(def index-query
  [{:com.wsscode.pathom.connect/indexes
    [:com.wsscode.pathom.connect/index-io
     :com.wsscode.pathom.connect/index-oir
     :com.wsscode.pathom.connect/idents
     :com.wsscode.pathom.connect/autocomplete-ignore
     :com.wsscode.pathom.connect/index-resolvers
     :com.wsscode.pathom.connect/index-mutations]}])

(defn parser-indexes [parser]
  (-> (parser {} index-query) ::pc/indexes))

(defn compute-foreign-input [{::pcp/keys [node] :as env}]
  (let [input  (::pcp/input node)
        entity (p/entity env)]
    (select-keys entity (keys input))))

(defn compute-foreign-query
  [{::pcp/keys [node] :as env}]
  (let [inputs     (compute-foreign-input env)
        base-query (pci/io->query (::pcp/requires node))]
    (if (seq inputs)
      (let [ident-join-key (-> (p/find-closest-non-placeholder-parent-join-key env)
                               p/ident-key*)
            join-node      (if (contains? inputs ident-join-key)
                             [ident-join-key (get inputs ident-join-key)]
                             [::foreign-call nil])]
        {::base-query base-query
         ::query      [{(list join-node {:pathom/context (dissoc inputs ident-join-key)}) base-query}]
         ::join-node  join-node})
      {::base-query base-query
       ::query      base-query})))

(defn call-foreign-parser [env parser]
  (let [{::keys [query join-node] :as call} (compute-foreign-query env)]
    (pt/trace env {::pt/event     ::foreign-call
                   ::foreign-call call})
    (cond-> (parser {} query) join-node (get join-node))))

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
  (internalize-parser-index* (parser-indexes parser) parser))

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
