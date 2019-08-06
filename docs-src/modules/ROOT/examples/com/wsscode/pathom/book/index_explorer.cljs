(ns com.wsscode.pathom.book.index-explorer
  (:require [clojure.reader :refer [read-string]]
            [clojure.string :as str]
            [com.wsscode.common.async-cljs :refer [go-catch <?]]
            [com.wsscode.pathom.book.app-types :as app-types]
            [com.wsscode.pathom.book.interactive-parser :as iparsers]
            [com.wsscode.pathom.connect :as pc]
            [com.wsscode.pathom.core :as p]
            [com.wsscode.pathom.fulcro.network :as network]
            [com.wsscode.pathom.viz.index-explorer :as iex]
            [fulcro.client :as fulcro]
            [fulcro.client.data-fetch :as df]
            [fulcro.client.localized-dom :as dom]
            [fulcro.client.mutations :as fm]
            [fulcro.client.primitives :as fp]))

(fp/defsc IndexExplorerWrapper
  [this {:ui/keys [root]}]
  {:initial-state (fn [_]
                    {:ui/root {::iex/id "singleton"}})
   :query         [{:ui/root (fp/get-query iex/IndexExplorer)}]
   :css           [[:.container {:height  "800px"
                                 :display "flex"}]]}
  (dom/div :.container
    (iex/index-explorer root)))

(fp/defsc AttributeGraphPanelWrapper
  [this {:ui/keys [root] ::keys [index]}]
  {:initial-state (fn [{::keys [index] :as data}]
                    {:ui/root data
                     ::index  index})
   :query         [{:ui/root (fp/get-query iex/AttributeGraphPanel)}
                   {::index
                    [{::iex/attributes (fp/get-query iex/AttributeIndex)}
                     {::iex/resolvers (fp/get-query iex/ResolverIndex)}
                     {::iex/mutations (fp/get-query iex/MutationIndex)}]}]
   :css           [[:.container {}]]}
  (dom/div :.container
    (iex/attribute-graph-panel root index)))

(fm/defmutation force-refresh [_]
  (action [{:keys [reconciler]}]
    (js/setTimeout
      #(fp/force-root-render! reconciler)
      300)))

(pc/defresolver index-resolver [{::keys [indexes]} _]
  {::pc/output [:com.wsscode.pathom.viz.index-explorer/index]}
  {:com.wsscode.pathom.viz.index-explorer/index indexes})

(def parser
  (p/parser
    {::p/env     {::p/reader [p/map-reader
                              pc/reader2
                              pc/open-ident-reader]}
     ::p/plugins [(pc/connect-plugin {::pc/register [index-resolver]})
                  p/error-handler-plugin
                  p/elide-special-outputs-plugin]}))

(defn index-parsers [resolvers]
  (fn [env tx]
    (parser (assoc env ::indexes (reduce #(pc/add % (::pc/sym %2) %2) {} resolvers)) tx)))

(def parsers iparsers/parsers)

(app-types/register-app "index-explorer"
  (fn [{::app-types/keys [node]}]
    (let [parser-name (.getAttribute node "data-parser")

          {::iparsers/keys [parser] :as iparser} (get parsers parser-name)
          app-id      (str "index-explorer-" parser-name)]
      (assert iparser (str "parser " parser-name " not found"))
      {::app-types/app
       (fulcro/make-fulcro-client
         {:initial-state    (-> (fp/get-initial-state IndexExplorerWrapper {})
                                (assoc :fulcro.inspect.core/app-id app-id))

          :client-did-mount #(df/load % [::iex/id "singleton"] iex/IndexExplorer
                               {:refresh       [:ui/root]
                                :target        [:ui/root]
                                :post-mutation `force-refresh})

          :networking       (network/pathom-remote parser)})

       ::app-types/root
       IndexExplorerWrapper})))

(defn prepare-index [registry]
  (as-> (pc/register {} (mapv #(assoc % ::pc/resolve (fn [_ _])) registry)) <>
    (assoc (iex/process-index <>) ::iex/index <>)))

(def graph-demos
  {"index-explorer.user"
   {::index
    [{::pc/sym    'user-by-id
      ::pc/input  #{:user/id}
      ::pc/output [:user/name]}]}

   "index-explorer.user2"
   {::index
    [{::pc/sym    'user-by-id
      ::pc/input  #{:user/id}
      ::pc/output [:user/name
                   :user/email
                   :user/dob
                   :twitter/url]}]}

   "index-explorer.user3"
   {::index
    [{::pc/sym    'user-by-id
      ::pc/input  #{:user/id}
      ::pc/output [:user/name
                   :user/email
                   :user/dob
                   :twitter/url]}

     {::pc/sym    'user-by-email
      ::pc/input  #{:user/email}
      ::pc/output [:user/name
                   :user/id
                   :user/dob
                   :twitter/url]}]}

   "index-explorer.user4"
   {::index
    [{::pc/sym    'user-by-id
      ::pc/input  #{:user/id}
      ::pc/output [:user/name
                   :user/email
                   :user/dob
                   :twitter/url]}

     {::pc/sym    'user-by-email
      ::pc/input  #{:user/email}
      ::pc/output [:user/name
                   :user/id
                   :user/dob
                   :twitter/url]}

     {::pc/sym    'user-groups
      ::pc/input  #{:user/id}
      ::pc/output [{:user/groups
                    [:group/id :group/name]}]}]}

   "index-explorer.sizes"
   {::index
    [{::pc/sym    'user-by-id
      ::pc/input  #{:user/id}
      ::pc/output [:user/name
                   :user/email
                   :user/dob
                   :twitter/url
                   :youtube/url
                   :linked-in/url
                   :user/attr1
                   :user/attr2
                   :user/attr3
                   :user/attr4
                   :user/attr5]}

     {::pc/sym    'email-by-twitter
      ::pc/input  #{:twitter/url}
      ::pc/output [:user/email]}

     {::pc/sym    'email-by-youtube
      ::pc/input  #{:youtube/url}
      ::pc/output [:user/email]}

     {::pc/sym    'email-by-linkedin
      ::pc/input  #{:linked-in/url}
      ::pc/output [:user/email]}]}

   "index-explorer.groups"
   {::index
    [{::pc/sym    'user-by-id
      ::pc/input  #{:github.repository/name :github.repository/owner}
      ::pc/output [:github.repository/id
                   :github.repository/url
                   :github.repository/name-with-owner]}]}

   "index-explorer.globals"
   {::index
    [{::pc/sym    'time
      ::pc/output [:time/now]}
     {::pc/sym    'pi
      ::pc/output [:math/pi]}]}})

(defn parse-attribute [str]
  (if (str/starts-with? str "#")
    (read-string str)
    (keyword str)))

(app-types/register-app "index-explorer-attr-graph"
  (fn [{::app-types/keys [node]}]
    (let [index-group (.getAttribute node "data-index-group")
          attribute   (parse-attribute (.getAttribute node "data-attribute"))

          {::keys [index]} (get graph-demos index-group)
          app-id      (str "attribute-graph-" index-group)]
      (assert index (str "no index found for group  " index-group))
      (let [index (prepare-index index)]
        {::app-types/app
         (fulcro/make-fulcro-client
           {:initial-state (-> (fp/get-initial-state AttributeGraphPanelWrapper {::pc/attribute attribute
                                                                                 ::index        index})
                               (assoc :fulcro.inspect.core/app-id app-id))

            :networking    (network/pathom-remote parser)})

         ::app-types/root
         AttributeGraphPanelWrapper}))))
