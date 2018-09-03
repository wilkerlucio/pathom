(ns com.wsscode.pathom.trace
  #?(:cljs (:require-macros [com.wsscode.pathom.trace]))
  (:require [clojure.spec.alpha :as s]
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
  :args (s/cat :env map? :event (s/keys :req [::event])))

(defn trace-enter
  ([env event]
   (let [id (gensym "pathom-trace-")]
     (trace env (assoc event ::direction ::enter ::id id))
     id))
  ([env event trace-id]
   (trace env (assoc event ::direction ::enter ::id trace-id))
   trace-id))

(defn trace-leave [env event trace-id]
  (trace env (assoc event ::direction ::leave ::id trace-id))
  trace-id)

(defmacro tracing [env event & body]
  `(if (get ~env ::trace*)
     (let [trace-id# (trace-enter ~env ~event)
           res#      (do ~@body)]
       (trace-leave ~env ~event trace-id#)
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
                    (assoc-in [:response ::children key]
                      (-> (merge (trace->tree* paths next-path) (select-keys row [::relative-timestamp :key]))
                          (assoc :com.wsscode.pathom.core/path next-path)))
                    (update :visited conj next-path))))

            (:com.wsscode.pathom.parser/async-return :com.wsscode.pathom.parser/skip-wait-key
              :com.wsscode.pathom.parser/skip-resolved-key :com.wsscode.pathom.parser/external-wait-key)
            (update-in x [:response ::children key ::details] (fnil conj []) (select-keys row [::event ::relative-timestamp]))

            :com.wsscode.pathom.parser/max-iterations-reached
            (update-in x [:response ::children key ::details] (fnil conj []) (select-keys row [::event ::relative-timestamp :com.wsscode.pathom.parser/max-key-iterations]))

            (:com.wsscode.pathom.parser/process-pending :com.wsscode.pathom.parser/merge-result :com.wsscode.pathom.parser/reset-loop)
            (update-in x [:response ::details] (fnil conj []) (select-keys row [::event ::relative-timestamp :com.wsscode.pathom.parser/provides :com.wsscode.pathom.parser/merge-result?
                                                                                :com.wsscode.pathom.parser/loop-keys]))

            (:com.wsscode.pathom.connect/compute-plan :com.wsscode.pathom.connect/waiting-resolver
              :com.wsscode.pathom.connect/call-resolver-with-cache :com.wsscode.pathom.connect/call-resolver
              :com.wsscode.pathom.connect/call-resolver-batch :com.wsscode.pathom.connect/batch-items-ready :com.wsscode.pathom.connect/batch-result-error :com.wsscode.pathom.connect/batch-result-ready
              :com.wsscode.pathom.connect/merge-resolver-response :com.wsscode.pathom.connect/resolver-error :com.wsscode.pathom.connect/invalid-resolve-response)
            (update-in x [:response ::details] (fnil conj []) (select-keys row [::event ::relative-timestamp ::duration :com.wsscode.pathom.connect/waiting-key
                                                                                :com.wsscode.pathom.connect/sym :error :com.wsscode.pathom.connect/items-count :com.wsscode.pathom.connect/plan]))

            :com.wsscode.pathom.parser/value-return
            (-> x
                (update-in [:response ::children key ::details] (fnil conj []) (select-keys row [::event ::relative-timestamp]))
                (update-in [:response ::children key] assoc ::duration (- relative-timestamp (get-in x [:response ::children key ::relative-timestamp]))))

            x))
        {:visited  #{}
         :response {}}
        (get paths path))
      :response))

(defn trace->tree [trace]
  (let [paths (->> trace compute-durations (group-by :com.wsscode.pathom.core/path))]
    (trace->tree* paths [])))

(defn normalize-tree-details [trace-tree]
  (walk/postwalk
    (fn [x]
      (if (and (map? x) (contains? x ::details))
        (let [res         (update x ::details #(vec (sort-by ::relative-timestamp %)))
              last-detail (peek (::details res))
              last-ts     (+ (::duration last-detail 0) (::relative-timestamp last-detail 0))]
          (update res ::duration #(max (or % 0) (- last-ts (::relative-timestamp res 0)))))
        x))
    trace-tree))

(defn compute-d3-tree [{::keys [relative-timestamp duration children details]
                        :keys  [key]}]
  (cond-> {:start    relative-timestamp
           :duration (or duration 0)
           :details  (mapv (fn [{::keys                           [relative-timestamp duration event]
                                 :com.wsscode.pathom.connect/keys [plan sym]}]
                             (cond-> {:event    (name event)
                                      :duration (or duration 0)
                                      :start    relative-timestamp}
                               plan (assoc :plan plan)
                               sym (assoc :sym sym))) details)}
    key (assoc :name (str key))
    children (assoc :children
                    (into [] (map (comp compute-d3-tree second) children)))))

(defn trace->viz [trace]
  (-> trace trace->tree normalize-tree-details compute-d3-tree))
