(ns com.wsscode.pathom.workspaces.graphql.simple-todo-demo
  (:require [fulcro.client.primitives :as fp]
            [fulcro.client.localized-dom :as dom]
            [nubank.workspaces.card-types.fulcro :as ct.fulcro]
            [nubank.workspaces.lib.fulcro-portal :as f.portal]
            [nubank.workspaces.core :as ws]
            [fulcro.client.data-fetch :as df]
            [com.wsscode.pathom.fulcro.network :as pfn]
            [fulcro.client.mutations :as fm]
            [com.wsscode.fulcro.db-helpers :as db.h]))

(declare TodoItem)

(fm/defmutation update-todo [todo]
  (action [{:keys [state ref]}]
    (swap! state update-in ref merge todo))
  (remote [{:keys [ast state]}]
    (-> ast
        (fm/returning state TodoItem)
        (assoc :key 'update-todo-item))))

(fm/defmutation create-todo-item [_]
  (remote [_]
    true))

(fp/defsc TodoItem
  [this {:todo/keys [id title completed]}]
  {:initial-state (fn [_]
                    {:todo/id        (fp/tempid)
                     :todo/title     ""
                     :todo/completed false})
   :ident         [:todo/id :todo/id]
   :query         [:todo/id :todo/title :todo/completed]
   :css           [[:.completed {:text-decoration "line-through"}]
                   [:.creating {}]]
   :css-include   []}
  (let [creating? (fp/tempid? id)]
    (dom/div {:classes [(if completed :.completed)
                        (if creating? :.creating)]}
      (dom/label
        (dom/input {:type    "checkbox"
                    :checked completed
                    :onClick #(fp/transact! this [`(update-todo ~{:todo/id id :todo/completed (not completed)})])})
        (if-not creating?
          (str title)))

      (if creating?
        (dom/div
          (dom/input {:type     "text"
                      :value    title
                      :onChange #(fm/set-string! this :todo/title :event %)})
          (dom/button {:onClick #(fp/transact! this [`(create-todo-item ~(fp/props this))])} "Save"))))))

(def todo-item (fp/factory TodoItem {:keyfn :todo/id}))

(fm/defmutation add-new-todo [{}]
  (action [env]
    (db.h/create-entity! env TodoItem {} :append :all-todo-items)))

(fp/defsc TodoSimpleDemo
  [this {:keys [all-todo-items]}]
  {:initial-state (fn [_]
                    {})
   :ident         (fn [] [::root "singleton"])
   :query         [{:all-todo-items (fp/get-query TodoItem)}]
   :css           []
   :css-include   [TodoItem]}
  (dom/div
    (mapv todo-item all-todo-items)
    (dom/button {:onClick #(fp/transact! this [`(add-new-todo {})])} "Add item")))

(ws/defcard todo-simple-demo
  (ct.fulcro/fulcro-card
    {::f.portal/root TodoSimpleDemo
     ::f.portal/app  {:started-callback
                      (fn [app]
                        (df/load app :all-todo-items TodoItem {:target [::root "singleton" :all-todo-items]}))

                      :networking
                      {:remote (-> (pfn/graphql-network "https://api.graph.cool/simple/v1/cjjkw3slu0ui40186ml4jocgk"))}}}))
