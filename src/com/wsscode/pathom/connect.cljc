(ns com.wsscode.pathom.connect
  (:require [clojure.spec.alpha :as s]
            [com.wsscode.pathom.core :as p]
            [com.wsscode.pathom.merge :refer [merge-queries]]
            [com.wsscode.spec-inspec :as si]
            [clojure.set :as set]
            [om.next :as om]))

(defn spec-keys [form]
  (let [select-keys' #(select-keys %2 %1)]
    (->> form (drop 1) (apply hash-map) (select-keys' [:req :opt]) vals (apply concat)
         (into #{}) vec)))

(defn resolver->in-out [sym]
  (let [fspec (->> (s/form sym) (drop 1) (apply hash-map))
        in    (->> fspec :args (drop 4) first si/spec->root-sym spec-keys)
        out   (->> fspec :ret si/spec->root-sym spec-keys)]
    {:input  in
     :output out}))

(defn- flat-query [query]
  (->> query om/query->ast :children (mapv :key)))

(defn add
  ([indexes sym] (add indexes sym {}))
  ([indexes sym sym-data]
   (let [{:keys [input output] :as sym-data} (merge (resolver->in-out sym)
                                                    sym-data)]
     (-> indexes
         (assoc-in [:index-fio sym] sym-data)
         (update-in [:index-io (set input)] #(-> % vec (merge-queries output) set))
         (cond-> (= 1 (count input)) (update :idents (fnil conj #{}) (first input)))
         (as-> <>
           (reduce (fn [indexes out-attr]
                     (cond-> indexes
                       (not= [out-attr] input)
                       (update-in [:index-oif out-attr] assoc input sym)))
             <>
             (flat-query output)))))))

(defn pick-resolver [{::keys [indexes dependency-track] :as env}]
  (let [k (-> env :ast :key)
        e (p/entity env)]
    (if-let [attr-resolvers (get-in indexes [:index-oif k])]
      (or
        (->> attr-resolvers
             (map (fn [[attrs sym]]
                    (let [missing (set/difference (set attrs) (set (keys e)))]
                      {:sym     sym
                       :attrs   attrs
                       :missing missing})))
             (sort-by (comp count :missing))
             (reduce (fn [_ {:keys [sym attrs]}]
                       (if-not (contains? dependency-track [sym attrs])
                         (let [e       (try
                                         (p/entity (update env ::dependency-track (fnil conj #{}) [sym attrs]) attrs)
                                         (catch Throwable _ {}))
                               missing (set/difference (set attrs) (set (keys e)))]
                           (when-not (seq missing)
                             (reduced {:e (select-keys e attrs) :f sym})))))
               nil))
        (throw (ex-info (str "Attribute " k " is defined but requirements could not be met.")
                 {:attr k :entity e :requirements (keys attr-resolvers)}))))))

(defn reader [env]
  (let [k (-> env :ast :key)]
    (if-let [{:keys [e f]} (pick-resolver env)]
      (let [response (p/cached env [f e] ((resolve f) env e))]
        (if-not (or (nil? response) (map? response))
          (throw (ex-info "Response from reader must be a map." {:sym f :response response})))
        (p/swap-entity! env #(merge % response))
        (let [x (get response k)]
          (if (sequential? x)
            (->> x (map atom) (p/join-seq env))
            (p/join (atom (get response k)) env))))
      ::p/continue)))

(defn indexed-ident [{::keys [indexes] :as env}]
  (if-let [attr (p/ident-key env)]
    (if (contains? (:idents indexes) attr)
      {attr (p/ident-value env)}
      false)
    false))

(defn ident-reader [env]
  (if-let [ent (indexed-ident env)]
    (p/join (atom ent) env)
    ::p/continue))
