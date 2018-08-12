(ns com.wsscode.pathom.workspaces.connect.union-query
  (:require [com.wsscode.pathom.connect :as pc]
            [com.wsscode.pathom.core :as p]
            [com.wsscode.pathom.profile :as pp]
            [fulcro.client.localized-dom :as dom]
            [fulcro.client.primitives :as fp]
            [nubank.workspaces.card-types.fulcro :as ct.fulcro]
            [nubank.workspaces.core :as ws]
            [nubank.workspaces.lib.fulcro-portal :as f.portal]
            [com.wsscode.pathom.fulcro.network :as pfn]
            [fulcro.client.data-fetch :as fetch]))

;; union helpers

(defn union-ident* [ids props]
  (if-let [key (some->> ids
                        (filter #(and (contains? props %)
                                      (not= ::fp/not-found (get props %))))
                        first)]
    [key (get props key)]
    [::unknown nil]))

(defn union-ident [comp props]
  (union-ident* (keys (fp/get-query comp)) props))

(defn union-render [comp]
  (let [union-path (first (fp/get-ident comp))
        component  (-> (get (fp/get-query comp) union-path) meta :component)]
    (if component
      ((fp/factory component {:keyfn union-path}) (fp/props comp)))))

(defn union-key-fn [comp]
  (fn [props]
    (second (union-ident comp props))))

;; parser

(def indexes (atom {}))

(defmulti resolver-fn pc/resolver-dispatch)
(def defresolver (pc/resolver-factory resolver-fn indexes))

(defmulti mutation-fn pc/mutation-dispatch)
(def defmutation (pc/mutation-factory mutation-fn indexes))

(defresolver `root
  {::pc/input  #{::root}
   ::pc/output []}
  (fn [_ _] {}))

(def entities-db
  {1 {:friend/id 1 :friend/name "Hulk"}
   2 {:place/id 2 :place/title "The Strip"}
   3 {:friend/id 3 :friend/name "Batman"}
   4 {:address/id 4 :address/street "The Strip"}})

(defn eid [x] (or (:friend/id x) (:place/id x) (:address/id x)))

(defresolver `items
  {::pc/output [{::items {:friend/id  [:friend/id :friend/name]
                          :place/id   [:place/id :place/title]
                          :address/id [:address/id :address/street :address/number]}}]}
  (fn [_ _]
    {::items (->> entities-db vals (sort-by eid) vec)}))

(def places
  {2 {:place/id 2 :place/title "The Strip" :place/location "Las Vegas"}})

(defresolver `place-data
  {::pc/input  #{:place/id}
   ::pc/output [:place/id :place/title :place/location]}
  (fn [_ {:keys [place/id]}]
    (get places id)))

(defn create-parser []
  (p/async-parser {::p/env     {::p/reader             [p/map-reader pc/all-async-readers]
                                ::pc/resolver-dispatch resolver-fn
                                ::pc/mutate-dispatch   mutation-fn
                                ::pc/indexes           @indexes}
                   ::p/mutate  pc/mutate-async
                   ::p/plugins [p/error-handler-plugin
                                p/request-cache-plugin
                                pp/profile-plugin]}))

(js/console.log @indexes)

;; ui

(fp/defsc Friend
  [this {::keys []}]
  {:initial-state (fn [_]
                    {})
   :ident         [:friend/id :friend/id]
   :query         [:friend/id :friend/name]}
  (dom/div "Friend"))

(def friend (fp/factory Friend {:keyfn :friend/id}))

(fp/defsc Place
  [this props]
  {:initial-state (fn [_]
                    {})
   :ident         [:place/id :place/id]
   :query         [:place/id :place/title :place/location]}
  (dom/div "Place"))

(def place (fp/factory Place {:keyfn :place/id}))

(fp/defsc Address
  [this {::keys []}]
  {:initial-state (fn [_]
                    {})
   :ident         [:address/id :address/id]
   :query         [:address/id :address/street :address/number]}
  (dom/div "Address"))

(def address (fp/factory Address {:keyfn :address/id}))

(fp/defsc Morpher
  [this props]
  {:ident (fn [] (union-ident this props))
   :query (fn []
            {:friend/id  (fp/get-query Friend)
             :place/id   (fp/get-query Place)
             :address/id (fp/get-query Address)})}
  (union-render this))

(def morpher (fp/factory Morpher {:keyfn (union-key-fn Morpher)}))

(fp/defsc UnionQueryDemo
  [this {::keys [items]}]
  {:initial-state (fn [_]
                    {::items []})
   :ident         (fn [] [::root "singleton"])
   :query         [{::items (fp/get-query Morpher)}]}
  (dom/div
    (mapv morpher items)))

(def union-query-demo (fp/factory UnionQueryDemo))

(ws/defcard query-union-demo
  (ct.fulcro/fulcro-card
    {::f.portal/root UnionQueryDemo
     ::f.portal/app  {:started-callback
                      (fn [app]
                        (fetch/load app [::root "singleton"] UnionQueryDemo))

                      :networking
                      {:remote (-> (create-parser)
                                   (pfn/pathom-remote)
                                   (pfn/profile-remote))}}}))
