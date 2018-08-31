(ns com.wsscode.pathom.trace
  #?(:cljs (:require-macros [com.wsscode.pathom.trace]))
  (:require [clojure.spec.alpha :as s]))

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
  (let [leave-items
        (into {} (comp (filter (comp #(= ::leave %) ::direction))
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
