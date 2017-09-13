(ns com.wsscode.pathom.test
  (:require [com.wsscode.pathom.core :as p]))

(defn self-reader [{:keys [ast query] :as env}]
  (if query
    (p/join env)
    (name (:key ast))))

#?(:clj
   (defn sleep-reader [{:keys [ast query] :as env}]
     (if-let [time (p/ident-value env)]
       (do
         (Thread/sleep time)
         (if query
           (p/join env)
           (name (first (:key ast)))))
       ::p/continue)))

(defn repeat-reader [env]
  (if-let [key (p/ident-key env)]
    (if (some-> (name key) (.startsWith "repeat."))
      (p/join-seq env (map (constantly {}) (range (p/ident-value env))))
      ::p/continue)
    ::p/continue))
