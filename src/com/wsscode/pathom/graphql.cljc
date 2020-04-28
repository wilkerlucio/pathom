(ns com.wsscode.pathom.graphql
  (:require
    #?(:clj [clojure.data.json :as json])
    [camel-snake-kebab.core :as csk]
    [clojure.string :as str]
    [com.wsscode.pathom.misc :as p.misc]
    [clojure.spec.alpha :as s]
    [com.wsscode.pathom.core :as p]))

(def ^:dynamic *unbounded-recursion-count* 5)

(defn camel-case [s]
  (csk/->camelCase s))

(defn kebab-case [s]
  (csk/->kebab-case s))

(defn pad-depth [depth]
  (str/join (repeat depth "  ")))

(defn has-call? [children]
  (->> children
       (filter (fn [{:keys [type]}] (= :call type)))
       first boolean))

(defn find-id [m tempid?]
  (->> m
       (filter (fn [[_ v]] (tempid? v)))
       first))

(defn stringify [x]
  #?(:clj  (json/write-str (cond-> x
                             (uuid? x) str))
     :cljs (js/JSON.stringify (cond-> (clj->js x)
                                (uuid? x) str))))

(defn params->graphql
  ([x js-name tempid?] (params->graphql x js-name tempid? true))
  ([x js-name tempid? root?]
   (cond
     (map? x)
     (let [params (->> (into [] (comp
                                  (remove (fn [[_ v]] (tempid? v)))
                                  (map (fn [[k v]] (str (js-name k) ": " (params->graphql v js-name tempid? false))))) x)
                       (str/join ", "))]
       (if root?
         (str "(" params ")")
         (str "{" params "}")))

     (sequential? x)
     (str "[" (str/join ", " (mapv #(params->graphql % js-name tempid? false) x)) "]")

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
                 (str/split field-part #"-and-|And") ["id"])
        value  (if (vector? value) value [value])]
    (if-not (= (count fields) (count value))
      (throw (ex-info "The number of fields on value needs to match the entries" {:key key :value value})))
    {::selector (-> (namespace key) (str/split #"\.") last)
     ::params   (zipmap fields value)}))

(defn group-inline-unions [children]
  (let [{general nil :as groups} (group-by #(get-in % [:params ::on]) children)
        groups (->> (dissoc groups nil)
                    (into [] (map (fn [[k v]] {:type      :union-entry
                                               :union-key k
                                               :children  (mapv #(update % :params dissoc ::on) v)}))))]
    (concat general groups)))

(def special-params #{::on ::alias})

(defn node->graphql [{:keys  [type children key dispatch-key params union-key query]
                      ::keys [js-name depth ident-transform parent-children tempid?]
                      :or    {depth   0
                              tempid? (constantly false)}}]
  (letfn [(continue
            ([x] (continue x inc))
            ([x depth-iterate]
             (node->graphql (assoc x ::depth (depth-iterate depth)
                                     ::parent-children (or (::parent-children x) children)
                                     ::js-name js-name
                                     ::tempid? tempid?
                                     ::ident-transform ident-transform))))]
    (let [{::keys [alias]} params
          params (apply dissoc params special-params)]
      (case type
        :root
        (str (if (has-call? children) "mutation " "query ")
          "{\n" (str/join (map continue (group-inline-unions children))) "}\n")

        :join
        (if (= 0 query)
          ""
          (let [header   (if (vector? key)
                           (assoc (ident-transform key)
                             ::index (ident->alias key))
                           {::index    alias
                            ::selector dispatch-key
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
              (js-name (::selector header)) (if (seq params) (params->graphql params js-name tempid?)) " {\n"
              (str/join (map continue (group-inline-unions children)))
              (pad-depth depth) "}\n")))

        :call
        (let [{::keys [mutate-join]} params
              children (->> (or (some-> mutate-join p/query->ast :children)
                                children)
                            (remove (comp #{'*} :key)))]
          (str (pad-depth depth) (js-name dispatch-key)
            (params->graphql (dissoc params ::mutate-join) js-name tempid?)
            (if (seq children)
              (str
                " {\n"
                (str/join (map continue (group-inline-unions children)))
                (pad-depth depth)
                "}\n")
              (if-let [[k _] (find-id params tempid?)]
                (str
                  " {\n"
                  (pad-depth (inc depth))
                  (js-name k)
                  "}\n")))))

        :union
        (str (pad-depth depth) "__typename\n"
          (str/join (map #(continue % identity) children)))

        :union-entry
        (str (pad-depth depth) "... on " (if (string? union-key) union-key (js-name union-key)) " {\n"
          (str/join (map continue children))
          (pad-depth depth) "}\n")

        :prop
        (str (pad-depth depth)
          (if alias (str alias ": "))
          (js-name dispatch-key)
          (if (seq params) (params->graphql params js-name tempid?))
          "\n")))))

(defn query->graphql
  "Convert query from EDN format to GraphQL string."
  ([query] (query->graphql query {}))
  ([query options]
   (let [ast (p/query->ast query)]
     (node->graphql (merge
                      ast
                      {::js-name         name
                       ::ident-transform ident-transform
                       ::parent-children (:children ast)}
                      options)))))

(when p.misc/INCLUDE_SPECS
  (s/fdef node->graphql
    :args (s/cat :input (s/keys :req [::js-name]
                          :opt [::ident-transform]))))

(comment
  (str/join (repeat 1 "  "))
  (println (query->graphql '[({:all [:id :name]}
                               {:last "csaa"})] {}))

  (params->graphql {:a 1 :b {:c 3}} name)
  (p/query->ast '[(call-something {:a 1 :b {:c 3}})])
  (ident-transform [:Counter/by-id 123])
  (println (query->graphql [{[:Counter/by-id 123] [:a :b]}])))
