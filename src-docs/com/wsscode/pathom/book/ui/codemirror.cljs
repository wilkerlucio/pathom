(ns com.wsscode.pathom.book.ui.codemirror
  (:require [cljs.spec.alpha :as s]
            [fulcro.client.primitives :as fp]
            [fulcro.client.dom :as dom]
            [goog.object :as gobj]
            [goog.functions :as gfun]
            ["codemirror/lib/codemirror" :as cm]
            ["codemirror/mode/clojure/clojure"]
            ["codemirror-graphql/mode"]
            ["parinfer"]
            ["parinfer-codemirror" :as pcm]))

(s/def ::mode (s/or :string string? :obj map?))
(s/def ::theme string?)
(s/def ::indentUnit pos-int?)
(s/def ::smartIndent boolean?)
(s/def ::lineNumbers boolean?)
(s/def ::readOnly boolean?)

(s/def ::value string?)
(s/def ::onChange (s/fspec :args (s/cat :code string?)))

(s/def ::options (s/keys :opt [::mode
                               ::theme
                               ::indentUnit
                               ::smartIndent
                               ::lineNumbers]))

(s/def ::props (s/keys :req-un [::value]
                 :opt [::options]))

(defn prop-call [comp name & args]
  (when-let [f (-> comp fp/props name)]
    (apply f args)))

(defn html-props [props]
  (->> props
       (remove (fn [[k _]] (namespace k)))
       (into {})
       (clj->js)))

(fp/defsc Editor [this props]
  {:componentWillMount
   (fn []
     (let [f (gobj/get this "componentWillReceiveProps")]
       (gobj/set this "componentWillReceiveProps"
         (gfun/debounce #(.call f this %) 0))))

   :componentWillReceiveProps
   (fn [{:keys [value]}]
     (let [cm        (gobj/get this "codemirror")
           cur-value (.getValue cm)]
       (if (and cm value (not= value cur-value))
         (.setValue cm value))))

   :componentDidMount
   (fn []
     (let [textarea   (gobj/get this "textNode")
           options    (-> this fp/props ::options (or {}) clj->js)
           process    (-> this fp/props ::process)
           codemirror (cm/fromTextArea textarea options)]
       ; avoid running transaction on mount
       (js/setTimeout
         (fn []
           (try
             (.on codemirror "change" #(if (not= (gobj/get % "origin") "setValue")
                                         (prop-call this :onChange (.getValue %))))
             (.setValue codemirror (-> this fp/props :value))
             (if process (process codemirror))
             (catch :default e (js/console.warn "Error setting up CodeMirror" e))))
         10)
       (gobj/set this "codemirror" codemirror)))

   :componentWillUnmount
   (fn []
     (if-let [cm (gobj/get this "codemirror")]
       (.toTextArea cm)))}

  (dom/div (-> props (dissoc :value :onChange) (html-props))
    (dom/create-element "textarea"
      #js {:ref #(gobj/set this "textNode" %)})))

(def editor (fp/factory Editor))

(defn graphql [props]
  (let [options {::lineNumbers true
                 ::mode        "graphql"}]
    (editor (-> props
                (update ::options #(merge options %))))))

(defn clojure [props]
  (let [options {::lineNumbers true
                 ::mode        "clojure"}]
    (editor (-> props
                (assoc ::process (fn [cm] (pcm/init cm "smart" #js {:forceBalance true})))
                (update ::options #(merge options %))))))

