(ns com.wsscode.pathom.book.ui.codemirror
  (:require ["codemirror-graphql/mode"]
            [com.wsscode.pathom.viz.codemirror :as pcm]
            [fulcro.client.primitives :as fp]))

(defn prop-call [comp name & args]
  (when-let [f (-> comp fp/props name)]
    (apply f args)))

(defn html-props [props]
  (->> props
       (remove (fn [[k _]] (namespace k)))
       (into {})
       (clj->js)))

(defn graphql [props]
  (let [options {::pcm/lineNumbers true
                 ::pcm/mode        "graphql"}]
    (pcm/editor (-> props
                    (update ::options #(merge options %))))))

(defn clojure [props]
  (pcm/clojure props))

