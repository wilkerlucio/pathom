(ns com.wsscode.pathom.test
  (:require [com.wsscode.pathom.core :as p]
            [#?(:clj  com.wsscode.common.async-clj
                :cljs com.wsscode.common.async-cljs) :refer [go-catch]]
            [com.wsscode.pathom.specs.query :as query]
            [clojure.string :as str]
            [clojure.spec.alpha :as s]))

(s/def ::throw-errors? boolean?)
(s/def ::include-nils? boolean?)
(s/def ::depth-limit int?)

(defn hash-mod?
  "Check if the mod of the hash of x is zero. This is useful to call against some random value.
  It will have a chance of 1/n to be true."
  [x n]
  (-> x hash (mod n) zero?))

(s/fdef hash-mod?
  :args (s/cat :x any? :n pos-int?)
  :ret nat-int?)

(defn key-ex-value
  "Generate a random value for a key, uses hash-mod to pick what type of value will be returned."
  [key {::keys [throw-errors? include-nils?]
        :or {include-nils? true}
        :as env}]
  (cond
    (hash-mod? key 11)
    false

    (and include-nils? (hash-mod? key 9))
    nil

    (hash-mod? key 8)
    true

    (hash-mod? key 7)
    (p/cached env key (str key))

    (and throw-errors? (hash-mod? key 5))
    (throw (ex-info "Demo error" {:x key}))

    (hash-mod? key 3)
    (hash key)

    :else
    (str key)))

(s/fdef key-ex-value
  :args (s/cat :key ::query/key :env (s/keys :opt [::throw-errors?
                                                   ::include-nils?])))

(defn union-test-path
  "Picks a union path based on the hash-mod of key."
  [env]
  (if-let [entries (-> env :ast :children first :children seq)]
    (-> entries (nth (-> env :ast :key hash (mod (count entries)))) :union-key)))

(defn reader
  "Reader suited for random testing."
  [{:keys  [ast query]
    ::keys [depth-limit]
    :or    {depth-limit 5}
    :as    env}]
  (if query
    (if (> depth-limit 0)
      (if (-> ast :key (hash-mod? 5))
        (p/join-seq (assoc env ::depth-limit (- depth-limit 3)) (-> ast :key hash (mod 4) (repeat {}) vec))
        (p/join (assoc env ::depth-limit (dec depth-limit))))
      (if (-> ast :key (hash-mod? 5))
        []
        {}))
    (-> ast :key (key-ex-value env))))

(defn async-reader
  "Like reader, but have a chance to return channels."
  [{:keys  [ast query]
    ::keys [depth-limit]
    :or    {depth-limit 5}
    :as    env}]
  (if query
    (if (> depth-limit 0)
      (if (-> ast :key (hash-mod? 5))
        (p/join-seq (assoc env ::depth-limit (- depth-limit 3)) (-> ast :key hash (mod 4) (repeat {}) vec))
        (p/join (assoc env ::depth-limit (dec depth-limit))))
      (if (-> ast :key (hash-mod? 5))
        []
        {}))
    (if (-> ast :key (hash-mod? 2))
      (go-catch (-> ast :key (key-ex-value env)))
      (-> ast :key (key-ex-value env)))))

(defn mutate-fn
  "Mutation function suited for random testing."
  [{::keys [throw-errors?]} k _]
  {:action
   (fn []
     (if (and throw-errors? (hash-mod? k 5))
       (throw (ex-info "Demo error" {:x k}))
       (str k)))})

#?(:clj
   (defn sleep-reader
     "This reader looks for ident queries starting with :sleep., and sleep for the ident value amount of time."
     [{:keys [ast query] :as env}]
     (if-let [key (p/ident-key env)]
       (if (some-> key name (str/starts-with? "sleep."))
         (do
           (Thread/sleep (p/ident-value env))
           (if query
             (p/join env)
             (name (first (:key ast)))))
         ::p/continue)
       ::p/continue)))

(defn repeat-reader
  "This reader looks for ident queries starting with :repeat., and repeat for the ident value amount of times."
  [env]
  (if-let [key (p/ident-key env)]
    (if (some-> key name (str/starts-with? "repeat."))
      (p/join-seq env (map (constantly {}) (range (p/ident-value env))))
      ::p/continue)
    ::p/continue))
