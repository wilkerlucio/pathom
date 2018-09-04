(ns com.wsscode.pathom.workspaces.parallel-parser-cards
  (:require [com.wsscode.pathom.connect :as pc]
            [com.wsscode.common.async-cljs :refer [go-catch <?]]
            [nubank.workspaces.card-types.react :as ct.react]
            [com.wsscode.pathom.core :as p]
            [cljs.core.async :as async :refer [<!]]
            [nubank.workspaces.core :as ws]
            [com.wsscode.fulcro.ui.reakit :as rk]
            [com.wsscode.pathom.trace :as pt]
            [fulcro.client.primitives :as fp]
            [fulcro.client.localized-dom :as dom]))

(def indexes (atom {}))

(defmulti resolver-fn pc/resolver-dispatch)
(def defresolver (pc/resolver-factory resolver-fn indexes))

(defmulti mutation-fn pc/mutation-dispatch)
(def defmutation (pc/mutation-factory mutation-fn indexes))

(def color-map
  {1 "red"
   2 "green"
   3 "blue"})

(defresolver `color
  {::pc/input  #{::id}
   ::pc/output [::color]
   ::pc/batch? true}
  (pc/batch-resolver
    (fn [env {::keys [id]}]
      (go-catch
        (<! (async/timeout 300))
        {::color
         (get color-map id "black")}))
    (fn [env ids]
      (go-catch
        (<! (async/timeout 300))
        (mapv
          #(hash-map ::color (get color-map (::id %) "black"))
          ids)))))

(defresolver `weight
  {::pc/input  #{::id}
   ::pc/output [::weight ::size]}
  (fn [env {::keys [id]}]
    (go-catch
      (<! (async/timeout 200))
      {::weight
       (case id
         1 30
         2 80
         3 200
         0)

       ::size
       (case id
         1 1
         2 3
         3 9
         0)})))

(defresolver `rel
  {::pc/input  #{::id}
   ::pc/output [::relation]}
  (fn [env {::keys [id]}]
    (go-catch
      (<! (async/timeout 50))
      {::relation
       {::id
        (case id
          1 2
          2 3
          3 1
          1)}})))

(defresolver `all
  {::pc/output [{::all [::id]}]}
  (fn [env _]
    {::all [{::id 1} {::id 2} {::id 3} {::id 2}]}))

(defresolver `error
  {::pc/input  #{}
   ::pc/output [::error]}
  (fn [env {::keys [id]}]
    (throw (ex-info "Error" {:ex "data"}))))

(defresolver `darken-color
  {::pc/input  #{::color}
   ::pc/output [::color-darken]}
  (fn [env {::keys [color]}]
    (go-catch
      (<! (async/timeout 20))
      {::color-darken (str color "-darken")})))

(defresolver `lighter-color
  {::pc/input  #{::color}
   ::pc/output [::color-lighter]}
  (fn [env {::keys [color]}]
    {::color-lighter (str color "-lighter")}))

(def demo-parser
  (p/parallel-parser {::p/env     {::p/reader               [p/map-reader
                                                             pc/all-parallel-readers
                                                             p/env-placeholder-reader]
                                   ::pc/resolver-dispatch   resolver-fn
                                   ::pc/mutate-dispatch     mutation-fn
                                   ::pc/indexes             @indexes
                                   ::p/process-error        (fn [_ e]
                                                              (p/error-str e))
                                   ::p/placeholder-prefixes #{">"}}
                      ::p/mutate  pc/mutate-async
                      ::p/plugins [p/error-handler-plugin
                                   p/request-cache-plugin
                                   p/trace-plugin]}))

(defn run-query []
  (go-catch
    (let [res (<! (demo-parser {} [{::all [::id ::color]} :com.wsscode.pathom/trace]))]
      (-> res :com.wsscode.pathom/trace))))

(fp/defsc TraceViz [this {::keys [trace]}]
  {:componentDidMount
   (fn []
     )}
  (js/console.log "TRACE" trace)
  (dom/div))

(def trace-viz (fp/factory TraceViz))

(ws/defcard parallel-run
  (let [trace (atom nil)]
    (ct.react/react-card
      trace
      (rk/block
        (rk/button {:onClick #(go-catch (reset! trace (<! (run-query))))}
          "Run query")
        (if @trace (trace-viz {::trace @trace}))))))
