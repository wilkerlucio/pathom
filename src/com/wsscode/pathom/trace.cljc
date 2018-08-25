(ns com.wsscode.pathom.trace)

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

(defmacro tracing [env event & body]
  `(if (get ~env ::trace*)
     (let [trace-id# (gensym "pathom-trace-")]
       (trace ~env (assoc ~event ::direction ::enter ::id trace-id#))
       (let [res# (do ~@body)]
         (trace ~env {::direction ::leave ::id trace-id#})
         res#))))

(defn live-trace! [trace-atom]
  (add-watch trace-atom :live
    (fn [k r o n]
      (let [evt (peek n)]
        (print (str (pr-str [(::event evt) (dissoc evt ::event)]) "\n"))))))

(defn compute-durations [trace]
  (let [end-times
        (into {} (comp (filter (comp #(identical? ::leave %) ::direction))
                       (map (fn [{::keys [id timestamp]}] [id timestamp])))
              trace)]
    (into [] (comp (map (fn [e] (if-let [et (get end-times (::id e))]
                                  (-> e
                                      (assoc ::duration (- et (::timestamp e)))
                                      (dissoc ::direction))
                                  e)))
                   (remove (fn [e] (identical? ::leave (::direction e)))))
          trace)))
