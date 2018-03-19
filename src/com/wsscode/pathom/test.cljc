(ns com.wsscode.pathom.test
  (:require [com.wsscode.pathom.core :as p]
            [com.wsscode.common.async :refer [go-catch]]
            [clojure.string :as str]))

(defn hash-mod [x n]
  (-> x hash (mod n) zero?))

(defn key-ex-value [key {::keys [throw-errors?] :as env}]
  (cond
    (and throw-errors? (hash-mod key 5))
    (throw (ex-info "Demo error" {:x key}))

    (hash-mod key 9)
    nil

    (hash-mod key 6)
    (p/cached env key (str key))

    :else
    (str key)))

(defn reader [{:keys [ast query depth-limit]
               :or {depth-limit 5}
               :as env}]
  (if (and query (> depth-limit 0))
    (if (-> ast :key (hash-mod 5))
      (p/join-seq (assoc env :depth-limit (- depth-limit 3)) (-> ast :key hash (mod 4) (repeat {}) vec))
      (p/join (assoc env :depth-limit (dec depth-limit))))
    (-> ast :key (key-ex-value env))))

(defn async-reader [{:keys [ast query depth-limit]
                     :or {depth-limit 5}
                     :as env}]
  (if (and query (> depth-limit 0))
    (if (-> ast :key (hash-mod 5))
      (p/join-seq (assoc env :depth-limit (- depth-limit 3)) (-> ast :key hash (mod 4) (repeat {}) vec))
      (p/join (assoc env :depth-limit (dec depth-limit))))
    (if (-> ast :key (hash-mod 2))
      (go-catch (-> ast :key (key-ex-value env)))
      (-> ast :key (key-ex-value env)))))

(defn mutate-fn [{::keys [throw-errors?]} k _]
  {:action
   (fn []
     (if (and throw-errors? (hash-mod k 5))
       (throw (ex-info "Demo error" {:x k}))
       (str k)))})

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
    (if (some-> (name key) (str/starts-with? "repeat."))
      (p/join-seq env (map (constantly {}) (range (p/ident-value env))))
      ::p/continue)
    ::p/continue))
