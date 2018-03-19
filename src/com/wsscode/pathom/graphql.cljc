(ns com.wsscode.pathom.graphql
  (:require
    #?(:clj [clojure.data.json :as json])
            [clojure.string :as str]
            [clojure.spec.alpha :as s]
            [com.wsscode.pathom.core :as p]
            [fulcro.client.primitives :as fp]))

(def ^:dynamic *unbounded-recursion-count* 5)

(defn pad-depth [depth]
  (str/join (repeat depth "  ")))

(defn has-call? [children]
  (->> children
       (filter (fn [{:keys [type]}] (= :call type)))
       first boolean))

(defn find-id [m]
  (->> m
       (filter (fn [[_ v]] (fp/tempid? v)))
       first))

(defn stringify [x]
  #?(:clj  (json/write-str (cond-> x
                             (uuid? x) str))
     :cljs (js/JSON.stringify (clj->js x))))

(defn params->graphql
  ([x js-name] (params->graphql x js-name true))
  ([x js-name root?]
   (cond
     (map? x)
     (let [params (->> (into [] (comp
                                  (remove (fn [[_ v]] (fp/tempid? v)))
                                  (map (fn [[k v]] (str (js-name k) ": " (params->graphql v js-name false))))) x)
                       (str/join ", "))]
       (if root?
         (str "(" params ")")
         (str "{" params "}")))

     (symbol? x)
     (name x)

     :else
     (stringify x))))

(defn ident->alias
  "Convert ident like [:Contact/by-id 123] to an usable GraphQL alias (eg: _COLON_Contact_SLASH_by_id_123)."
  [[base value]]
  (let [value (if (vector? value) (str/join "_" value) value)]
    (-> (str base "_" value) (str/replace #"[^a-zA-Z0-9_]" "_"))))

(defn ident-transform [[key value]]
  (let [fields (if-let [field-part (name key)]
                 (str/split field-part #"-and-") ["id"])
        value (if (vector? value) value [value])]
    (if-not (= (count fields) (count value))
      (throw (ex-info "The number of fields on value needs to match the entries" {:key key :value value})))
    {::selector (-> (namespace key) (str/split #"\.") last)
     ::params   (zipmap fields value)}))

(defn node->graphql [{:keys  [type children key dispatch-key params union-key query]
                      ::keys [js-name depth ident-transform parent-children]
                      :or    {depth 0}}]
  (letfn [(continue
            ([x] (continue x inc))
            ([x depth-iterate]
             (node->graphql (assoc x ::depth (depth-iterate depth)
                                     ::parent-children (or (::parent-children x) children)
                                     ::js-name js-name
                                     ::ident-transform ident-transform))))]
    (case type
      :root
      (str (if (has-call? children) "mutation " "query ")
           "{\n" (str/join (map continue children)) "}\n")

      :join
      (if (= 0 query)
        ""
        (let [header   (if (vector? key)
                         (assoc (ident-transform key)
                           ::index (ident->alias key))
                         {::selector dispatch-key
                          ::params   nil})
              params   (merge (::params header) params)
              children (cond
                         (= '... query)
                         (let [parent (-> (p/update-child {:children parent-children} key assoc :query (dec *unbounded-recursion-count*))
                                          :children)]
                           (mapv #(assoc % ::parent-children parent) parent))

                         (pos-int? query)
                         (let [parent (-> (p/update-recursive-depth {:children parent-children} key dec)
                                          :children)]
                           (mapv #(assoc % ::parent-children parent) parent))

                         :else
                         children)]
          (str (pad-depth depth)
               (if (::index header) (str (::index header) ": "))
               (js-name (::selector header)) (some-> params (params->graphql js-name)) " {\n"
               (str/join (map continue children))
               (pad-depth depth) "}\n")))

      :call
      (let [{::keys [mutate-join]} params
            children (or (some-> mutate-join p/query->ast :children)
                         children)]
        (str (pad-depth depth) (js-name dispatch-key)
             (params->graphql (dissoc params ::mutate-join) js-name)
             " {\n"
             (if (seq children)
               (str/join (map continue children))
               (if-let [[k _] (find-id params)]
                 (str (pad-depth (inc depth))
                      (js-name k) "\n")))
             (pad-depth depth) "}\n"))

      :union
      (str (pad-depth depth) "__typename\n"
           (str/join (map #(continue % identity) children)))

      :union-entry
      (str (pad-depth depth) "... on " (js-name union-key) " {\n"
           (str/join (map continue children))
           (pad-depth depth) "}\n")

      :prop
      (str (pad-depth depth)
           (js-name dispatch-key)
           (if params (params->graphql params js-name))
           "\n"))))

(s/fdef node->graphql
  :args (s/cat :input (s/keys :req [::js-name]
                              :opt [::ident-transform])))

(defn query->graphql
  ([query] (query->graphql query {}))
  ([query options]
   (let [ast (p/query->ast query)]
     (node->graphql (merge
                      ast
                      {::js-name         name
                       ::ident-transform ident-transform
                       ::parent-children (:children ast)}
                      options)))))

(comment
  (str/join (repeat 1 "  "))
  (println (query->graphql '[({:all [:id :name]}
                               {:last "csaa"})] {}))

  (params->graphql {:a 1 :b {:c 3}} name)
  (p/query->ast '[(call-something {:a 1 :b {:c 3}})])
  (ident-transform [:Counter/by-id 123])
  (println (query->graphql [{[:Counter/by-id 123] [:a :b]}])))
