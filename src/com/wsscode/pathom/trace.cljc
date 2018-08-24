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
  `(do
     (trace ~env (assoc ~event ::direction ::enter))
     (let [res# (do ~@body)]
       (trace ~env (assoc ~event ::direction ::leave))
       res#)))

(defn live-trace! [trace-atom]
  (add-watch trace-atom :live
    (fn [k r o n]
      (let [evt (peek n)]
        (print (str (pr-str [(::event evt) (dissoc evt ::event)]) "\n"))))))
