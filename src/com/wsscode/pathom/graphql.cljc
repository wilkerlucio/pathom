(ns com.wsscode.pathom.graphql
  (:require
    #?(:clj [clojure.data.json :as json])
    [clojure.string :as str]
    [clojure.spec.alpha :as s]

    [om.next :as om]))

(defn pad-depth [depth]
  (str/join (repeat depth "  ")))

(defn has-call? [children]
  (->> children
       (filter (fn [{:keys [type]}] (= :call type)) )
       first boolean))

(defn find-id [m]
  (->> m
       (filter (fn [[_ v]] (om/tempid? v)))
       first))

(defn stringify [x]
  #?(:clj (json/write-str x)
     :cljs (js/JSON.stringify (clj->js x))))

(defn params->graphql
  ([x js-name] (params->graphql x js-name true))
  ([x js-name root?]
   (cond
     (map? x)
     (let [params (->> (into [] (comp
                                  (remove (fn [[_ v]] (om/tempid? v)))
                                  (map (fn [[k v]] (str (js-name k) ": " (params->graphql v js-name false))))) x)
                       (str/join ", "))]
       (if root?
         (str "(" params ")")
         (str "{" params "}")))

     :else
     (stringify x))))

(defn node->graphql [{:keys  [type children dispatch-key params union-key]
                      ::keys [js-name depth]
                      :or    {depth 0}}]
  (letfn [(continue
            ([x] (continue x inc))
            ([x depth-iterate]
             (node->graphql (assoc x ::depth (depth-iterate depth) ::js-name js-name))))]
    (case type
      :root
      (str (if (has-call? children) "mutation " "")
           "{\n" (str/join (map continue children)) "}\n")

      :join
      (str (pad-depth depth) (js-name dispatch-key) (some-> params (params->graphql js-name)) " {\n"
           (str/join (map continue children))
           (pad-depth depth) "}\n")

      :call
      (let [{::keys [mutate-join]} params
            children (or children
                         (some-> mutate-join om/query->ast :children))]
        (str (pad-depth depth) (js-name dispatch-key)
             (params->graphql (dissoc params ::mutate-join) js-name)
             " {\n"
             (if children
               (str/join (map continue children))
               (if-let [[k _] (find-id params)]
                 (str (pad-depth (inc depth))
                      (js-name k) "\n")))
             (pad-depth depth) "}\n"))

      :union
      (str/join (map #(continue % identity) children))

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
  :args (s/cat :input (s/keys :req [::js-name])))

(defn query->graphql
  ([query] (query->graphql query {::js-name name}))
  ([query options]
   (node->graphql (merge
                    (om/query->ast query)
                    options))))

(comment
  (str/join (repeat 1 "  "))
  (println (query->graphql '[({:all [:id :name]}
                               {:last "csaa"})] {}))

  (params->graphql {:a 1 :b {:c 3}} name)
  (om/query->ast '[(call-something {:a 1 :b {:c 3}})])
  (println (query->graphql '[(call-something {:a 1 :b {:c 3}})])))
