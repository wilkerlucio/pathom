(ns com.wsscode.pathom.workspaces.graphql.simple-todo-demo
  (:require [fulcro.client.primitives :as fp]
            [nubank.workspaces.card-types.fulcro :as ct.fulcro]
            [nubank.workspaces.lib.fulcro-portal :as f.portal]
            [nubank.workspaces.core :as ws]
            [fulcro.client.data-fetch :as df]
            [com.wsscode.pathom.fulcro.network :as pfn]
            [fulcro.client.mutations :as fm]
            [com.wsscode.fulcro.db-helpers :as db.h]
            [com.wsscode.fulcro.ui.reakit :as rk]
            [com.wsscode.fulcro.ui.icons.font-awesome :as fa]))

(declare TodoItem)

(fm/defmutation updateTodoItem [todo]
  (action [{:keys [state ref]}]
    (swap! state update-in ref merge todo))
  (remote [{:keys [ast state]}]
    (-> ast
        (fm/returning state TodoItem))))

(fm/defmutation deleteTodoItem [{:todo/keys [id]}]
  (action [env]
    (db.h/swap-entity! env update :allTodoItems #(into [] (remove (comp #{id} second)) %)))
  (remote [{:keys [ast state]}]
    (-> ast
        (update :params select-keys [:todo/id])
        (fm/returning state TodoItem))))

(fp/defsc TodoItem
  [this {:todo/keys [id title completed]} {::keys [on-delete-todo]}]
  {:initial-state (fn [_]
                    {:todo/id        (fp/tempid)
                     :todo/title     ""
                     :todo/completed false})
   :ident         [:todo/id :todo/id]
   :query         [:todo/id :todo/title :todo/completed]
   :css           [[:.completed [:label {:text-decoration "line-through"}]]
                   [:.creating {:color "#ccc"}]]
   :css-include   []}
  (rk/flex {:classes    [(if completed :.completed)
                         (if (fp/tempid? id) :.creating)]
            :alignItems "center"}
    (rk/label
      (rk/input {:type        "checkbox"
                 :checked     completed
                 :marginRight 5
                 :onChange    #(fp/transact! this [`(updateTodoItem ~{:todo/id id :todo/completed (not completed)})])})
      (str title))
    (rk/inline-block {:cursor  "pointer"
                      :onClick on-delete-todo}
      (fa/close))))

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
  (rk/group {:marginBottom 10}
    (with-redefs [fulcro.client.dom/form-elements? (fn [_] false)]
      (rk/input {:type     "text"
                 :value    title
                 :onChange #(let [value (.. % -target -value)] (fm/set-value! this :todo/title value))}))
    (rk/button {:onClick #(on-save-todo (fp/props this))}
      "Add"
      (fa/plus-square))))

(fm/defmutation createTodoItem [todo]
  (action [env]
    (db.h/swap-entity! env update :allTodoItems conj (fp/get-ident TodoItem todo))
    (db.h/create-entity! env NewTodo {} :replace :ui/new-todo))
  (remote [{:keys [ast]}]
    (update ast :params select-keys [:todo/id :todo/title])))

(def new-todo-ui (fp/factory NewTodo {:keyfn :todo/id}))

(fp/defsc TodoSimpleDemo
  [this {:keys [allTodoItems] :ui/keys [new-todo]}]
  {:initial-state (fn [_]
                    {:ui/new-todo (fp/get-initial-state NewTodo {})})
   :ident         (fn [] [::root "singleton"])
   :query         [{:ui/new-todo (fp/get-query NewTodo)}
                   {:allTodoItems (fp/get-query TodoItem)}]
   :css           []
   :css-include   [TodoItem NewTodo]}
  (rk/block
    (new-todo-ui (fp/computed new-todo {::on-save-todo #(fp/transact! this [`(createTodoItem ~%)])}))
    (for [todo allTodoItems]
      (todo-item (fp/computed todo {::on-delete-todo #(fp/transact! this [`(deleteTodoItem ~todo)])})))))

(ws/defcard todo-simple-demo
  (ct.fulcro/fulcro-card
    {::f.portal/root TodoSimpleDemo
     ::f.portal/app  {:started-callback
                      (fn [app]
                        (df/load app :allTodoItems TodoItem {:target [::root "singleton" :allTodoItems]}))

                      :networking
                      {:remote (-> (pfn/graphql-network2 "https://api.graph.cool/simple/v1/cjjkw3slu0ui40186ml4jocgk"))}}}))
