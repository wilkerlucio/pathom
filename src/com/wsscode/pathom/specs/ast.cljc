(ns com.wsscode.pathom.specs.ast
  (:require [clojure.spec.alpha :as s]
            [com.wsscode.pathom.specs.query :as q]
            [clojure.test.check.generators :as gen]))

(s/def ::query ::q/join-query)
(s/def ::key (s/or :prop ::q/property :ident ::q/ident :mutation ::q/mutation-key))
(s/def ::dispatch-key (s/or :prop ::q/property :mutation ::q/mutation-key))
(s/def ::union-key ::q/property)

(s/def ::children
  (s/coll-of ::node :kind vector?
    :gen #(let [g (s/gen (s/coll-of ::node :kind vector? :max-count 5))]
            (gen/->Generator
              (fn [rdn size]
                (if (> q/*query-gen-max-depth* 0)
                  (binding [q/*query-gen-max-depth* (dec q/*query-gen-max-depth*)]
                    (gen/call-gen g rdn size))
                  (gen/call-gen (gen/return []) rdn size)))))))

(s/def ::root
  (s/and (s/keys :req-un [::type ::children])
         #(= :root (:type %))
         #(every? (comp #{:prop :join :call} :type) (:children %))))

(defmulti node-type :type)

(defmethod node-type :prop [_]
  (s/keys :req-un [::type ::key ::dispatch-key]))

(defmethod node-type :join [_]
  (s/and (s/keys :req-un [::type ::key ::dispatch-key ::query] :opt-un [::children])
         #(if (-> % :query first (= :recursion)) % (if (contains? % :children) % false))
         #(every? (comp #{:prop :join :union} :type) (:children %))))

(defmethod node-type :union [_]
  (s/and (s/keys :req-un [::type ::query ::children])
         #(every? (comp #{:union-entry} :type) (:children %))))

(defmethod node-type :union-entry [_]
  (s/and (s/keys :req-un [::type ::union-key ::query ::children])
         #(every? (comp #{:prop :join} :type) (:children %))))

(defmethod node-type :call [_]
  (s/and (s/keys :req-un [::type ::key ::dispatch-key ::q/params] :opt-un [::query ::children])
         #(every? (comp #{:prop :join} :type) (:children %))))

(defmethod node-type :root [_]
  (s/spec ::root))

(s/def ::type (set (keys (methods node-type))))
(s/def ::node (s/multi-spec node-type :type))
