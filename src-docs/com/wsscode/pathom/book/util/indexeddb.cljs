(ns com.wsscode.pathom.book.util.indexeddb
  (:require [cljs.spec.alpha :as s]
            [goog.object :as gobj]
            [cljs.core.async :as async :refer [go <! put! chan]]
            [com.wsscode.common.async-cljs :refer [go-catch <?]]))

(s/def ::db any?)
(s/def ::db-name string?)
(s/def ::unique boolean?)
(s/def ::store (s/keys :req [::key] :opt [::indexes]))
(s/def ::store-name string?)
(s/def ::stores (s/map-of ::store-name ::store))
(s/def ::schema (s/keys :req [::stores]))
(s/def ::migrations (s/coll-of ::schema))
(s/def ::key (s/or :path string? :auto #{::auto-increment}))
(s/def ::index (s/keys :opt [::unique]))
(s/def ::index-name string?)
(s/def ::indexes (s/map-of ::index-name ::index))

(defn indexeddb [] js/indexedDB)

(defn event-result [e] (gobj/getValueByKeys e #js ["target" "result"]))

(defn setup-db [{::keys [db-name migrations]}]
  (let [c        (async/promise-chan)
        open-req (.open (indexeddb) db-name (count migrations))]
    (doto open-req
      (gobj/set "onerror" #(put! c %))
      (gobj/set "onsuccess" #(put! c (gobj/get open-req "result")))
      (gobj/set "onupgradeneeded"
        (fn [e]
          (let [db (event-result e)]
            (doseq [{::keys [stores]} migrations]
              (doseq [[store-name {::keys [key indexes]}] stores
                      :let [{:keys [path]} (s/conform ::key key)
                            store (.createObjectStore db store-name
                                    (cond
                                      path
                                      #js {:keyPath path}

                                      :else
                                      #js {:autoIncrement true}))]]
                (doseq [[index-name options] indexes]
                  (.createIndex store index-name index-name (clj->js options)))))))))
    c))

(s/fdef setup-db
  :args (s/cat :settings (s/keys :req [::db-name ::migrations]))
  :ret ::db)

(defn create! [{::keys [db store-name]} entity]
  (let [c     (async/promise-chan)
        tx    (.transaction db #js [store-name] "readwrite")
        store (.objectStore tx store-name)
        req   (.add store (clj->js entity))]
    (gobj/set req "onsuccess"
      (fn [e]
        (put! c (event-result e))))
    c))

(defn convert-back [x]
  (js->clj x :keywordize-keys true))

(defn scan-store [{::keys [db store-name]}]
  (let [c     (async/chan 50)
        tx    (.transaction db #js [store-name] "readonly")
        store (.objectStore tx store-name)]
    (doto (.openCursor store)
      (gobj/set "onsuccess"
        (fn [e]
          (if-let [cursor (event-result e)]
            (do
              (put! c (-> (convert-back (gobj/get cursor "value"))
                          (assoc ::key (gobj/get cursor "key"))))
              (.continue cursor))
            (async/close! c)))))
    c))

(defn read-object [{::keys [db store-name]} id]
  (let [c     (async/promise-chan)
        tx    (.transaction db #js [store-name] "readonly")
        store (.objectStore tx store-name)]
    (-> (.get store id)
        (gobj/set "onsuccess" #(put! c (or (some-> (convert-back (event-result %))
                                                   (assoc ::key id))
                                           ::not-found))))
    c))

(comment
  setup-db

  (defn make-db []
    (setup-db {::db-name    "connectAsyncDemo"
               ::migrations [{::stores {"users" {::key     ::auto-increment
                                                 ::indexes {"name" {::unique false}}}}}]}))

  (go
    (let [db (<? (make-db))
          id (<? (create! {::db         db
                           ::store-name "users"}
                   {:name "Strangeeeer"}))]
      (js/console.log "CREATED ITEM" id)))

  (go
    (let [db (<? (make-db))]
      (js/console.log "users" (<? (async/into [] (scan-store {::db db ::store-name "users"}))))))

  (go
    (let [db (<? (make-db))]
      (js/console.log "user" (<? (read-object {::db db ::store-name "users"} 4))))))
