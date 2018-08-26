(ns com.wsscode.pathom.trace
  #?(:cljs (:require-macros [com.wsscode.pathom.trace])))

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
       res#)))

(defn live-trace! [trace-atom]
  (add-watch trace-atom :live
    (fn [_ _ _ n]
      (let [evt (peek n)]
        (print (str (pr-str [(::event evt) (dissoc evt ::event)]) "\n"))))))

(defn compute-durations [trace]
  (let [end-times
        (into {} (comp (filter (comp #(identical? ::leave %) ::direction))
                       (map (juxt ::id ::timestamp)))
              trace)]
    (into []
          (comp (remove (fn [e] e (identical? ::leave (::direction e))))
                (map (fn [{::keys [id timestamp] :as e}]
                       (if-let [et (get end-times id)]
                         (-> e
                             (assoc
                               ::timestamp-leave et
                               ::duration (- et timestamp))
                             (dissoc ::id ::direction))
                         e))))
          trace)))
