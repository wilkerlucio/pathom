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

(fm/defmutation update-todo-item [todo]
  (action [{:keys [state ref]}]
    (swap! state update-in ref merge todo))
  (remote [{:keys [ast state]}]
    (-> ast
        (fm/returning state TodoItem))))

(fp/defsc TodoItem
  [this {:todo/keys [id title completed]}]
  {:initial-state (fn [_]
                    {:todo/id        (fp/tempid)
                     :todo/title     ""
                     :todo/completed false})
   :ident         [:todo/id :todo/id]
   :query         [:todo/id :todo/title :todo/completed]
   :css           [[:.completed {:text-decoration "line-through"}]
                   [:.creating {:color "#ccc"}]]
   :css-include   []}
  (dom/div {:classes [(if completed :.completed)
                      (if (fp/tempid? id) :.creating)]}
    (dom/label
      (dom/input {:type    "checkbox"
                  :checked completed
                  :onClick #(fp/transact! this [`(update-todo-item ~{:todo/id id :todo/completed (not completed)})])})
      (str title))))

(def todo-item (fp/factory TodoItem {:keyfn :todo/id}))

(fp/defsc NewTodo
  [this {:todo/keys [title]} {::keys [on-save-todo]}]
  {:initial-state (fn [_]
                    {:todo/id        (fp/tempid)
                     :todo/title     ""
                     :todo/completed false})
   :ident         [:todo/id :todo/id]
   :query         [:todo/id :todo/title :todo/completed]
   :css           []
   :css-include   []}
  (dom/div
    (dom/input {:type     "text"
                :value    title
                :onChange #(fm/set-string! this :todo/title :event %)})
    (dom/button {:onClick #(on-save-todo (fp/props this))} "Add")))

(fm/defmutation create-todo-item [todo]
  (action [env]
    (db.h/swap-entity! env update :all-todo-items conj (fp/get-ident TodoItem todo))
    (db.h/create-entity! env NewTodo {} :replace :ui/new-todo))
  (remote [_]
    true))

(def new-todo-ui (fp/factory NewTodo {:keyfn :todo/id}))

(fp/defsc TodoSimpleDemo
  [this {:keys [all-todo-items] :ui/keys [new-todo]}]
  {:initial-state (fn [_]
                    {:ui/new-todo (fp/get-initial-state NewTodo {})})
   :ident         (fn [] [::root "singleton"])
   :query         [{:all-todo-items (fp/get-query TodoItem)}
                   {:ui/new-todo (fp/get-query NewTodo)}]
   :css           []
   :css-include   [TodoItem]}
  (dom/div
    (new-todo-ui (fp/computed new-todo {::on-save-todo #(fp/transact! this [`(create-todo-item ~%)])}))
    (mapv todo-item all-todo-items)))

(ws/defcard todo-simple-demo
  (ct.fulcro/fulcro-card
    {::f.portal/root TodoSimpleDemo
     ::f.portal/app  {:started-callback
                      (fn [app]
                        (df/load app :all-todo-items TodoItem {:target [::root "singleton" :all-todo-items]}))

                      :networking
                      {:remote (-> (pfn/graphql-network "https://api.graph.cool/simple/v1/cjjkw3slu0ui40186ml4jocgk"))}}}))
