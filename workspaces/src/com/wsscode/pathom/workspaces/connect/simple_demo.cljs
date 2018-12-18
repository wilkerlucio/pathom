(ns com.wsscode.pathom.workspaces.connect.simple-demo
  (:require [com.wsscode.pathom.connect :as pc]
            [com.wsscode.pathom.core :as p]
            [com.wsscode.pathom.fulcro.network :as pfn]
            [fulcro.client.data-fetch :as fetch]
            [fulcro.client.localized-dom :as dom]
            [fulcro.client.mutations :as fm]
            [fulcro.client.primitives :as fp]
            [nubank.workspaces.card-types.fulcro :as ct.fulcro]
            [nubank.workspaces.core :as ws]
            [nubank.workspaces.lib.fulcro-portal :as f.portal]))

(declare ItemsContainer)

(fm/defmutation add-item-local [_]
  (action [{:keys [ref state]}]
    (swap! state update-in ref assoc :ui/input-value ""))
  (remote [{:keys [ast state]}]
    (-> ast
        (assoc :key 'list/add-item)
        (fm/returning state ItemsContainer))))

(fp/defsc Item
  [this {::keys [message]}]
  {:pre-merge (fn [c n] (merge {} c n))
   :ident     [::item-id ::item-id]
   :query     [::item-id ::message]}
  (dom/div
    (dom/div message)
    (dom/hr)))

(def item (fp/factory Item {:keyfn ::item-id}))

(fp/defsc ItemsContainer
  [this {:ui/keys [input-value]
         ::keys   [items]}]
  {:ident (fn [] [::container-id "singleton"])
   :query [::container-id :ui/input-value
           {::items (fp/get-query Item)}]}
  (dom/div
    (dom/input {:value    (or input-value "")
                :onChange #(fm/set-string! this :ui/input-value :event %)})
    (dom/button {:onClick #(fp/transact! this [`(add-item-local {::message ~input-value})])} "Add")
    (dom/div
      (mapv item items))))

(def items-container (fp/factory ItemsContainer))

(pc/defresolver items [{::keys [records]} _]
  {::pc/output [{::items [::item-id ::message]}]}
  {::items @records})

(pc/defmutation add-item [{::keys [records]} {::keys [message]}]
  {::pc/sym 'list/add-item}
  (swap! records conj {::item-id (random-uuid) ::message message})
  {})

(def app-registry [items add-item])

(defonce records (atom []))

(def parser
  (p/parallel-parser
    {::p/env     {::p/reader               [p/map-reader
                                            pc/parallel-reader
                                            pc/open-ident-reader
                                            p/env-placeholder-reader]
                  ::p/placeholder-prefixes #{">"}
                  ::records                records}
     ::p/mutate  pc/mutate-async
     ::p/plugins [(pc/connect-plugin {::pc/register app-registry})
                  p/error-handler-plugin
                  p/request-cache-plugin
                  p/trace-plugin]}))

(ws/defcard simple-full-demo
  (ct.fulcro/fulcro-card
    {::f.portal/root ItemsContainer
     ::f.portal/app  {:started-callback
                      (fn [app]
                        (fetch/load app [::container-id "singleton"] ItemsContainer {:target [:ui/root]}))

                      :networking
                      {:remote (pfn/pathom-remote parser)}}}))
