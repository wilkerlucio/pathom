(ns com.wsscode.pathom.graphql
  (:require
    #?(:clj [clojure.data.json :as json])
    [clojure.string :as str]

    [om.next :as om]))

(defn pad-depth [depth]
  (str/join (repeat depth "  ")))

(defn has-call? [children]
  (boolean (first (filter (fn [{:keys [type dispatch-key]}]
                            (or (= :call type)
                                (and (= :join type)
                                     (symbol? dispatch-key)))) children))))

(defn stringify [x]
  #?(:clj (json/write-str x)
     :cljs (js/JSON.stringify (clj->js x))))

(defn params->graphql
  ([x js-name] (params->graphql x js-name true))
  ([x js-name root?]
   (cond
     (map? x)
     (let [params (->> (into [] (map (fn [[k v]] (str (js-name k) ": " (params->graphql v js-name false)))) x)
                       (str/join ", "))]
       (if root?
         (str "(" params ")")
         (str "{" params "}")))

     :else
     (stringify x))))

(defn node->graphql [{:keys  [type children dispatch-key params]
                      ::keys [js-name depth]
                      :or    {depth 0}}]
  (letfn [(continue [x]
            (node->graphql (assoc x ::depth (inc depth) ::js-name js-name)))]
    (case type
      :root
      (str (if (has-call? children) "mutation " "")
           "{\n" (str/join (map continue children)) "}\n")

      :join
      (cond
        (keyword? dispatch-key)
        (str (pad-depth depth) (js-name dispatch-key) (some-> params (params->graphql js-name)) " {\n"
             (str/join (map continue children))
             (pad-depth depth) "}\n")

        (symbol? dispatch-key)
        (str (pad-depth depth) (js-name dispatch-key)
             (params->graphql params js-name)
             " {\n"
             (str/join (map continue children))
             (pad-depth depth) "}\n"))

      :call
      (str (pad-depth depth) (js-name dispatch-key)
           (params->graphql params js-name)
           " { id }\n")

      :prop
      (str (pad-depth depth)
           (js-name dispatch-key) "\n"))))

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
