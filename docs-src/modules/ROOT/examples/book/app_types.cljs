(ns com.wsscode.pathom.book.app-types
  (:require [fulcro.client.primitives :as fp]
            [fulcro.client :as fulcro]
            [fulcro-css.css-protocols :as css]
            [fulcro-css.css-injection :as css-injection]
            [com.wsscode.pathom.core :as p]
            [com.wsscode.pathom.map-db :as map-db]))

(defn make-root [Root app-id]
  (fp/ui
    static fp/InitialAppState
    (initial-state [_ params] {:fulcro.inspect.core/app-id app-id
                               :ui/root (fp/get-initial-state Root params)})

    static fp/IQuery
    (query [_] [{:ui/root (fp/get-query Root)}])

    static css/CSS
    (local-rules [_] [])
    (include-children [_] [Root])

    Object
    (render [this]
      (let [{:ui/keys [root]} (fp/props this)
            factory (fp/factory Root)]
        (factory root)))))

(defonce apps (atom {}))
(defonce app-types (atom {}))

(defn register-app [name f]
  (swap! app-types assoc name f))

(defn update-apps []
  (doseq [[id {::keys [root node]}] @apps]
    (swap! apps update-in [id ::app] fulcro/mount root node)
    (.. node -classList (remove "loader"))))

(defn mount-app [name node]
  (if-let [app-factory (get @app-types name)]
    (let [id  (random-uuid)
          {::keys [root app]} (app-factory {::node node})
          app (or app (fulcro/new-fulcro-client
                        :parser
                        (p/parser (-> map-db/parser-config
                                      (assoc :mutate fulcro/mutate)))))]
      (css-injection/upsert-css id {:component root})
      (swap! apps assoc id {::app app ::root root ::node node}))
    (js/console.warn "App type" name "is not registered")))
