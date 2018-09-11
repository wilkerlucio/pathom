(ns com.wsscode.pathom.trace
  #?(:cljs (:require-macros [com.wsscode.pathom.trace]))
  (:require [clojure.spec.alpha :as s]
            [#?(:clj  com.wsscode.common.async-clj
                :cljs com.wsscode.common.async-cljs)
             :refer [let-chan]]
            [clojure.walk :as walk]))

(defn now []
  (inst-ms
    #?(:clj  (java.util.Date.)
       :cljs (js/Date.))))

(defn trace [env event]
  (if-let [event-trace (get env ::trace*)]
    (swap! event-trace conj
      (assoc event
        :com.wsscode.pathom.core/path (:com.wsscode.pathom.core/path env [])
        ::timestamp (now)))))

(s/fdef trace
  :args (s/cat :env map? :event (s/keys :opt [::event])))

(defn trace-enter
  ([env event]
   (let [id (gensym "pathom-trace-")]
     (trace env (assoc event ::direction ::enter ::id id))
     id))
  ([env event trace-id]
   (trace env (assoc event ::direction ::enter ::id trace-id))
   trace-id))

(defn trace-leave
  ([env trace-id]
   (trace env {::direction ::leave ::id trace-id}))
  ([env trace-id event]
   (trace env (assoc event ::direction ::leave ::id trace-id))
   trace-id))

(defmacro tracing [env event & body]
  `(if (get ~env ::trace*)
     (let [trace-id# (trace-enter ~env ~event)
           res#      (do ~@body)]
       (trace-leave ~env trace-id# ~event)
       res#)
     (do ~@body)))

(defn live-trace! [trace-atom]
  (add-watch trace-atom :live
    (fn [_ _ _ n]
      (let [evt (peek n)]
        (print (str (pr-str [(::event evt) (dissoc evt ::event)]) "\n"))))))

(defn compute-durations [trace]
  (let [leave-items  (into {} (comp (filter (comp #(= ::leave %) ::direction))
                                    (map (juxt ::id identity)))
                           trace)

        initial-time (::timestamp (first trace))]

    (into []
          (comp (remove (fn [e] e (= ::leave (::direction e))))
                (map (fn [{::keys [id timestamp] :as e}]
                       (let [e (assoc e ::relative-timestamp (- timestamp initial-time))]
                         (if-let [{et ::timestamp :as leave} (get leave-items id)]
                           (-> e
                               (assoc
                                 ::timestamp-leave et
                                 ::duration (- et timestamp))
                               (merge (dissoc leave ::timestamp))
                               (dissoc ::id ::direction))
                           e)))))
          trace)))

(defmulti trace-tree-collect (fn [_x row] (::event row)))

(defmethod trace-tree-collect :default [x _] x)

(defn tree-assoc-detail [x row keys]
  (update-in x [:response ::details] (fnil conj [])
    (select-keys row (into [::event ::relative-timestamp ::duration] keys))))

(defn tree-assoc-key-detail [x {:keys [key] :as row} keys]
  (update-in x [:response ::children key ::details] (fnil conj [])
    (select-keys row (into [::event ::relative-timestamp ::duration] keys))))

(defn trace->tree* [paths path]
  (-> (reduce
        (fn [x {::keys [event relative-timestamp]
                :keys  [key]
                :as    row}]
          (case event
            (:com.wsscode.pathom.parser/parse-loop :com.wsscode.pathom.core/trace-plugin)
            (update x :response #(merge (select-keys row [::relative-timestamp ::duration :com.wsscode.pathom.core/path]) %))

            :com.wsscode.pathom.parser/process-key
            (let [next-path (conj path key)]
              (if (contains? (:visited x) next-path)
                x
                (-> x
                    (assoc-in [:response :com.wsscode.pathom.core/path] path)
                    (assoc-in [:response ::children key]
                      (-> (merge (trace->tree* paths next-path) (select-keys row [::relative-timestamp :key]))
                          (assoc :com.wsscode.pathom.core/path next-path)))
                    (update :visited conj next-path))))

            :com.wsscode.pathom.core/join-seq
            (let [count (:com.wsscode.pathom.core/seq-count row)]
              (reduce
                (fn [x i]
                  (let [next-path (conj path i)]
                    (assoc-in x [:response ::children i]
                      (-> (merge (trace->tree* paths next-path) (select-keys row [::relative-timestamp :key]) {:key i})
                          (assoc :com.wsscode.pathom.core/path next-path)))))
                x
                (range count)))

            (:com.wsscode.pathom.parser/async-return :com.wsscode.pathom.parser/skip-wait-key :com.wsscode.pathom.parser/call-read
              :com.wsscode.pathom.parser/skip-resolved-key :com.wsscode.pathom.parser/external-wait-key)
            (update-in x [:response ::children key ::details] (fnil conj []) (select-keys row [::event ::relative-timestamp]))

            :com.wsscode.pathom.parser/max-iterations-reached
            (update-in x [:response ::children key ::details] (fnil conj []) (select-keys row [::event ::relative-timestamp :com.wsscode.pathom.parser/max-key-iterations]))

            (:com.wsscode.pathom.parser/process-pending :com.wsscode.pathom.parser/reset-loop)
            (update-in x [:response ::details] (fnil conj []) (select-keys row [::event ::relative-timestamp :com.wsscode.pathom.parser/provides :com.wsscode.pathom.parser/merge-result?
                                                                                :com.wsscode.pathom.parser/loop-keys]))

            :com.wsscode.pathom.parser/merge-result
            (reduce
              (fn [x key]
                (update-in x [:response ::children key ::details] (fnil conj []) (select-keys row [::event ::relative-timestamp])))
              x
              (keys (:com.wsscode.pathom.parser/response-value row)))

            (:com.wsscode.pathom.connect/compute-plan :com.wsscode.pathom.connect/waiting-resolver :com.wsscode.pathom.connect/schedule-resolver
              :com.wsscode.pathom.connect/call-resolver-with-cache :com.wsscode.pathom.connect/call-resolver
              :com.wsscode.pathom.connect/call-resolver-batch :com.wsscode.pathom.connect/batch-items-ready :com.wsscode.pathom.connect/batch-result-error :com.wsscode.pathom.connect/batch-result-ready
              :com.wsscode.pathom.connect/merge-resolver-response :com.wsscode.pathom.connect/resolver-error :com.wsscode.pathom.connect/invalid-resolve-response)
            (update-in x [:response ::details] (fnil conj []) (select-keys row [::event ::relative-timestamp ::duration :com.wsscode.pathom.connect/waiting-key :com.wsscode.pathom.connect/input-data
                                                                                :com.wsscode.pathom.connect/sym :com.wsscode.pathom.core/error :com.wsscode.pathom.connect/items-count :com.wsscode.pathom.connect/plan :key]))

            :com.wsscode.pathom.parser/value-return
            (-> x
                (update-in [:response ::children key ::details] (fnil conj []) (select-keys row [::event ::relative-timestamp]))
                (update-in [:response ::children key] assoc ::duration (- relative-timestamp (get-in x [:response ::children key ::relative-timestamp]))))

            (trace-tree-collect x row)))
        {:visited  #{}
         :response {}}
        (get paths path))
      :response))

(defn trace->tree [trace]
  (let [paths (->> trace compute-durations (group-by :com.wsscode.pathom.core/path))]
    (trace->tree* paths [])))

(defn compute-details-duration [x]
  (let [res         (update x ::details #(vec (sort-by ::relative-timestamp %)))
        last-detail (peek (::details res))
        last-ts     (+ (::duration last-detail 0) (::relative-timestamp last-detail 0))]
    (update res ::duration #(max (or % 0) (- last-ts (::relative-timestamp res 0))))))

(defn normalize-tree-details [trace-tree]
  (walk/postwalk
    (fn [x]
      (cond-> x
        (and (map? x) (contains? x ::details))
        (compute-details-duration)))
    trace-tree))

(defn compute-d3-tree [{::keys                        [relative-timestamp duration children details]
                        :com.wsscode.pathom.core/keys [path]
                        :keys                         [key]}]
  (cond-> {:start    relative-timestamp
           :path     path
           :duration (or duration 0)
           :details  (mapv (fn [{::keys [relative-timestamp duration event]
                                 :as    row}]
                             (let [details (->> (dissoc row ::relative-timestamp ::timestamp ::duration ::event)
                                                (into {} (map (fn [[k v]] [(keyword (name k)) v]))))]
                               (merge {:event    (name event)
                                       :duration (or duration 0)
                                       :start    relative-timestamp}
                                      details)))
                       details)}
    key (assoc :name (str key))
    children (assoc :children
                    (into [] (map (comp compute-d3-tree second) children)))))

(defn trace->viz [trace]
  (-> trace trace->tree normalize-tree-details compute-d3-tree
      (assoc :hint "Query")))

(defn wrap-parser-trace [parser]
  (fn wrap-parser-trace-internal [env tx]
    (if (some #{:com.wsscode.pathom/trace} tx)
      (let [trace*       (or (::trace* env) (atom []))
            env'         (assoc env ::trace* trace*)
            parser-trace (trace-enter env' {::event ::trace-plugin})]
        (let-chan [res (parser env' tx)]
          (trace-leave env' parser-trace {::event ::trace-plugin})
          (assoc res :com.wsscode.pathom/trace (trace->viz @trace*))))
      (parser env tx))))

(def trace-plugin
  {:com.wsscode.pathom.core/wrap-parser wrap-parser-trace})
