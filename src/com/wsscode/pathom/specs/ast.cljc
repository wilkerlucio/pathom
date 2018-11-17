(ns com.wsscode.pathom.specs.ast
  (:require [clojure.spec.alpha :as s]
            [clojure.test.check.generators :as gen]
            [com.wsscode.pathom.specs.query :as q]))

; DEPRECATED, please use from EQL instead http://edn-query-language.org

(s/def ::query ::q/join-query)
(s/def ::key (s/or :prop ::q/property :ident ::q/ident :sym symbol?))
(s/def ::dispatch-key (s/or :prop ::q/property :sym symbol?))
(s/def ::union-key ::q/property)

(s/def ::children
  (s/coll-of ::node))

(s/def ::root
  (s/and (s/keys :req-un [::type ::children])
         #(= :root (:type %))
         (fn [x] (every? (comp #(contains? #{:prop :join :call nil} %) :type) (:children x)))))

(defmulti node-type :type)

(defmethod node-type nil [_]
  (s/keys :req-un [::key ::dispatch-key]))

(defmethod node-type :prop [_]
  (s/keys :req-un [::type ::key ::dispatch-key]))

(defmethod node-type :join [_]
  (s/and (s/keys :req-un [::type ::key ::dispatch-key ::query] :opt-un [::children])
         #(if (-> % :query first (= :recursion)) % (if (contains? % :children) % false))
         (fn [x] (every? (comp #(contains? #{:prop :join :union :call nil} %) :type) (:children x)))))

(defmethod node-type :union [_]
  (s/and (s/keys :req-un [::type ::query ::children])
         #(every? (comp #{:union-entry} :type) (:children %))))

(defmethod node-type :union-entry [_]
  (s/and (s/keys :req-un [::type ::union-key ::query ::children])
         (fn [x] (every? (comp #(contains? #{:prop :join :call nil} %) :type) (:children x)))))

(defmethod node-type :call [_]
  (s/and (s/keys :req-un [::type ::key ::dispatch-key ::q/params] :opt-un [::query ::children])
         (fn [x] (every? (comp #(contains? #{:prop :join :call nil} %) :type) (:children x)))))

(defmethod node-type :root [_]
  (s/spec ::root))

(s/def ::type (set (keys (methods node-type))))
(s/def ::node (s/multi-spec node-type :type))
