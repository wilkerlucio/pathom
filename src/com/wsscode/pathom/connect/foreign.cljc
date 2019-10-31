(ns com.wsscode.pathom.connect.foreign
  (:require [com.wsscode.pathom.core :as p]
            [com.wsscode.pathom.connect :as pc]
            [com.wsscode.pathom.connect.run-graph :as pcrg]))

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

(defn compute-foreign-query [{::pcrg/keys [node]}]
  ; TODO very naive
  (into [] (keys (::pcrg/requires node))))

(defn compute-foreign-input [{::pcrg/keys [node] :as env}]
  (let [input  (::pcrg/input node)
        entity (p/entity env)]
    (select-keys entity (keys input))))

(defn call-foreign-parser [env parser]
  (let [inputs (compute-foreign-input env)
        query  (compute-foreign-query env)]
    (if (seq inputs)
      (let [query' [{(list [::foreign-call nil] {:pathom/context inputs}) query}]]
        (-> (parser {} query') (get [::foreign-call nil])))
      (parser {} query))))

(defn internalize-parser-index [parser]
  (let [{::pc/keys [index-source-id] :as indexes} (parser-indexes parser)
        index-source-id (or index-source-id (gensym "dynamic-parser-"))]
    (-> indexes
        (update ::pc/index-resolvers
          (fn [resolvers]
            (into {}
                  (map (fn [[r v]] [r (assoc v ::pc/source-resolver index-source-id)]))
                  resolvers)))
        (assoc-in [::pc/index-resolvers index-source-id]
          {::pc/sym               index-source-id
           ::pc/cache?            false
           ::pc/dynamic-resolver? true
           ::pc/resolve           (fn [env _] (call-foreign-parser env parser))})
        (update ::pc/index-oir
          (fn [oir]
            (into {}
                  (map (fn [[attr paths]]
                         [attr
                          (into {}
                                (map (fn [[inputs _]]
                                       [inputs #{index-source-id}]))
                                paths)]))
                  oir)))
        (dissoc ::pc/index-source-id))))

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
