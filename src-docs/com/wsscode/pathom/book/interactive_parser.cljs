(ns com.wsscode.pathom.book.interactive-parser
  (:require [clojure.string :as str]
            [com.wsscode.common.async-cljs :refer [go-catch <?]]
            [com.wsscode.pathom.book.app-types :as app-types]
            [com.wsscode.pathom.book.async.error-propagation]
            [com.wsscode.pathom.book.async.intro]
            [com.wsscode.pathom.book.async.js-promises]
            [com.wsscode.pathom.book.connect.batch]
            [com.wsscode.pathom.book.connect.batch2]
            [com.wsscode.pathom.book.connect.getting-started]
            [com.wsscode.pathom.book.connect.getting-started2]
            [com.wsscode.pathom.book.connect.mutation-async]
            [com.wsscode.pathom.book.connect.mutation-join-globals]
            [com.wsscode.pathom.book.connect.mutation-join]
            [com.wsscode.pathom.book.connect.mutations]
            [com.wsscode.pathom.book.tracing.demo]
            [com.wsscode.pathom.fulcro.network :as network]
            [com.wsscode.pathom.viz.query-editor :as pv.query-editor]
            [fulcro.client :as fulcro]
            [fulcro.client.localized-dom :as dom]
            [fulcro.client.primitives :as fp]))

(def parsers
  {"async.intro"                   {::parser com.wsscode.pathom.book.async.intro/parser}
   "async.error-propagation"       {::parser com.wsscode.pathom.book.async.error-propagation/parser}
   "async.js-promises"             {::parser com.wsscode.pathom.book.async.js-promises/parser}
   "connect.batch"                 {::parser com.wsscode.pathom.book.connect.batch/parser}
   "connect.batch2"                {::parser com.wsscode.pathom.book.connect.batch2/parser}
   "connect.getting-started"       {::parser com.wsscode.pathom.book.connect.getting-started/parser
                                    ::ns     "com.wsscode.pathom.book.connect.getting-started"}
   "connect.getting-started2"      {::parser com.wsscode.pathom.book.connect.getting-started2/parser
                                    ::ns     "com.wsscode.pathom.book.connect.getting-started2"}
   "connect.mutations"             {::parser com.wsscode.pathom.book.connect.mutations/parser
                                    ::ns     "com.wsscode.pathom.book.connect.mutations"}
   "connect.mutation-join"         {::parser com.wsscode.pathom.book.connect.mutation-join/parser
                                    ::ns     "com.wsscode.pathom.book.connect.mutation-join"}
   "connect.mutation-join-globals" {::parser com.wsscode.pathom.book.connect.mutation-join-globals/parser
                                    ::ns     "com.wsscode.pathom.book.connect.mutation-join-globals"}
   "connect.mutation-async"        {::parser com.wsscode.pathom.book.connect.mutation-async/parser
                                    ::ns     "com.wsscode.pathom.book.connect.mutation-async"}
   "tracing.demo1"                 {::parser com.wsscode.pathom.book.tracing.demo/parser
                                    ::ns     "com.wsscode.pathom.book.tracing.demo"}})

(defn expand-keywords [s ns]
  (if ns
    (str/replace s #"::(\w+)" (str ":" ns "/$1"))
    s))

(defn compact-keywords [s ns]
  (if ns
    (str/replace s (js/RegExp (str ":" ns "\\/")) "::")
    s))

(defn get-app-uuid [component]
  (-> component (fp/get-reconciler) fp/app-state deref :fulcro.inspect.core/app-uuid))

(fp/defsc QueryEditorWrapper
  [this {:ui/keys [root]}]
  {:initial-state (fn [query]
                    {:ui/root (-> (fp/get-initial-state pv.query-editor/QueryEditor {})
                                  (assoc ::pv.query-editor/query query))})
   :query         [{:ui/root (fp/get-query pv.query-editor/QueryEditor)}]
   :css           [[:.container {:height  "500px"
                                 :display "flex"}]]
   :css-include   [pv.query-editor/QueryEditor]}
  (dom/div :.container
    (pv.query-editor/query-editor root {::pv.query-editor/default-trace-size 200})))

(def query-editor-wrapper (fp/factory QueryEditorWrapper {:keyfn ::id}))

(app-types/register-app "interactive-parser"
  (fn [{::app-types/keys [node]}]
    (let [parser-name   (.getAttribute node "data-parser")
          initial-query (.-innerText node)]
      (let [{::keys [parser ns] :as iparser} (get parsers parser-name)
            app-id (str "query-editor-" parser-name)]
        (assert iparser (str "parser " parser-name " not foud"))
        {::app-types/app
         (fulcro/new-fulcro-client
           :initial-state (-> (fp/get-initial-state QueryEditorWrapper initial-query)
                              (assoc :fulcro.inspect.core/app-id app-id))

           :started-callback pv.query-editor/load-indexes

           :networking {pv.query-editor/remote-key
                        (network/pathom-remote
                          (pv.query-editor/client-card-parser parser
                            {::pv.query-editor/wrap-run-query
                             (fn [run-query]
                               (fn [env input]
                                 (go-catch
                                   (-> (run-query env (update input ::pv.query-editor/query #(expand-keywords % ns))) <?
                                       (update ::pv.query-editor/result #(compact-keywords % ns))))))}))})

         ::app-types/root
         QueryEditorWrapper}))))
