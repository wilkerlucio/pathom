(ns com.wsscode.pathom.fulcro.network
  (:require [clojure.core.async :refer [go <! >! put! promise-chan close!]]
            [com.wsscode.common.async-cljs :refer [<? go-catch <!p]]
            [com.wsscode.pathom.core :as p]
            [com.wsscode.pathom.profile :as pp]
            [com.wsscode.pathom.graphql :as pg]
            [com.wsscode.pathom.diplomat.http :as http]
            [com.wsscode.pathom.diplomat.http.fetch :as fetch]
            [fulcro.client.network :as fulcro.network]
            [fulcro.client.primitives :as fp])
  (:import [goog.net XhrIo EventType]))

;; EXPERIMENTAL - all features here are experimental and subject to API changes and breakages

;; Local Network

(defrecord PathomRemote [parser]
  fulcro.network/NetworkBehavior
  (serialize-requests? [_] true)

  fulcro.network/FulcroRemoteI
  (transmit [this {::fulcro.network/keys [edn ok-handler error-handler progress-handler]}]
    (go
      (try
        (ok-handler {:transaction edn :body (<? (parser {} edn))})
        (catch :default e
          (js/console.error "PathomRemote error:" e)
          (error-handler {:body e}))))))

(defn pathom-remote
  "Create a Fulcro remote that will use a Pathom async parser to process the query."
  [parser]
  (map->PathomRemote {:parser parser}))

;; FN Network, create a network from a simple function

(defrecord FnNetwork [f serialize?]
  fulcro.network/NetworkBehavior
  (serialize-requests? [_] serialize?)

  fulcro.network/FulcroNetwork
  (send [this edn ok error] (f this edn ok error))

  (start [_]))

(defn fn-network
  "Creates a simple Fulcro network out a function, the function will reeive the params:
  [network edn ok-callback error-callback]"
  ([f] (fn-network f true))
  ([f serialize?]
   (map->FnNetwork {:f          f
                    :serialize? serialize?})))

;; Transform Network

(defrecord TransformNetwork [network options]
  fulcro.network/NetworkBehavior
  (serialize-requests? [_]
    (try
      (fulcro.network/serialize-requests? network)
      (catch :default _ true)))

  fulcro.network/FulcroNetwork
  (send [_ edn ok error]
    (let [{::keys [transform-query transform-response transform-error transform-transmission app*]
           :or    {transform-query    (fn [_ x] x)
                   transform-response (fn [_ x] x)
                   transform-error    (fn [_ x] x)}} options
          req-id (random-uuid)
          env    {::request-id req-id
                  ::app        @app*}]
      (if-let [edn' (transform-query env edn)]
        (if transform-transmission
          (transform-transmission edn'
            (fn [edn']
              (fulcro.network/send network edn'
                #(->> % (transform-response env) ok)
                #(->> % (transform-error env) error))))
          (fulcro.network/send network edn'
            #(->> % (transform-response env) ok)
            #(->> % (transform-error env) error)))
        (ok nil))))

  (start [this]
    (fulcro.network/start network)
    this))

(defrecord TransformRemoteI [network options]
  fulcro.network/NetworkBehavior
  (serialize-requests? [_]
    (try
      (fulcro.network/serialize-requests? network)
      (catch :default _ true)))

  fulcro.network/FulcroRemoteI
  (transmit [this {::fulcro.network/keys [edn ok-handler error-handler progress-handler]}]
    (let [{::keys [transform-query transform-response transform-error
                   transform-progress transform-transmission app*]
           :or    {transform-query    (fn [_ x] x)
                   transform-response (fn [_ x] x)
                   transform-error    (fn [_ x] x)
                   transform-progress (fn [_ x] x)}} options
          req-id (random-uuid)
          env    {::request-id req-id
                  ::app        @app*}]
      (if-let [edn' (transform-query env edn)]
        (if transform-transmission
          (transform-transmission env edn'
            (fn [edn']
              (fulcro.network/transmit network
                {::fulcro.network/edn              edn'
                 ::fulcro.network/ok-handler       (fn [response] (ok-handler (update response :body #(transform-response env %))))
                 ::fulcro.network/error-handler    (fn [error] (error-handler (update error :body #(transform-error env %))))
                 ::fulcro.network/progress-handler (fn [progress] (progress-handler (transform-progress env progress)))})))
          (fulcro.network/transmit network
            {::fulcro.network/edn              edn'
             ::fulcro.network/ok-handler       (fn [response] (ok-handler (update response :body #(transform-response env %))))
             ::fulcro.network/error-handler    (fn [error] (error-handler (update error :body #(transform-error env %))))
             ::fulcro.network/progress-handler (fn [progress] (progress-handler (transform-progress env progress)))}))
        (ok-handler nil))))

  (abort [this abort-id]
    (fulcro.network/abort network abort-id)))

(defn transform-remote
  "Given a network, provides some hooks to modify the network behavior.

  ::transform-query [env edn] -> edn
  Receives the EDN query so you can modify before it's transmited. If you return nil the send will be cancelled, and the
  network ok handler will be triggered with nil.

  ::transform-response [env response] -> response
  ::transform-error [env error] -> error
  ::transform-progress [env progress] -> progress (for FulcroRemoteI only)

  ::transform-transmission [env transmit]
  Transmit is a function with zero arguments, this can be used to wrap some operation around the data
  transmission entirely, but you can't affect the parameters from here.

  env is a map with the keys `::request-id` and `::app`

  `::request-id` is a uuid generated on the request, it will
  be the same during all transform hooks, you can use this to correlate the hook steps.

  The `::app` is an atom with the app, to have this you must initialize it during the Fulcro :started-callback using
  the following code:

  (fn [app] (pathom.network/transform-remote-init remote app))

  This helper is compatible with both fulcro network work interfaces FulcroNetwork and FulcroRemoteI."
  [remote options]
  (let [options (assoc options ::app* (atom nil))]
    (cond
      (implements? fulcro.network/FulcroRemoteI remote)
      (->TransformRemoteI remote options)

      (implements? fulcro.network/FulcroNetwork remote)
      (->TransformNetwork remote options))))

(defn transform-remote-init
  "Set the transform remote app reference, this is needed if your remote needs access to the app."
  [network app]
  (some-> network :options ::app* (reset! app)))

;; Profile network

(defn trace-remote
  "Wrap a Remote so it always ask for the pathom profile."
  [network]
  (transform-remote network
    {::transform-query (fn [_ query] (conj query :com.wsscode.pathom/trace))}))

(defn profile-remote
  "Wrap a Remote so it always ask for the pathom profile."
  [network]
  (transform-remote network
    {::transform-query (fn [_ query] (conj query :com.wsscode.pathom.profile/profile))}))

;; GraphQL Simple Network

(def graphql-response-key (comp keyword pg/camel-case name))

(def graphql-response-parser
  (p/parser {::p/env    {::p/reader (p/map-reader* {::p/map-key-transform graphql-response-key})}
             ::p/mutate (fn [env k _]
                          {:action
                           (fn []
                             (let [response (-> (p/entity env) (get (graphql-response-key k)))
                                   id-param (pg/find-id (get-in env [:ast :params]) fp/tempid?)]
                               (cond-> response
                                 id-param (assoc ::fp/tempids {(val id-param) (get response (graphql-response-key (key id-param)))}))))})}))

(defn graphql-network
      ([url]
        (graphql-network url {}))
      ([url {update-http-request ::update-http-request}]
        (fn-network
          (fn [this edn ok error]
              (go
                (try
                  (let [edn (-> edn
                                p/query->ast
                                (p/elide-ast-nodes #{::pp/profile})
                                p/ast->query)
                        query (pg/query->graphql edn {::pg/js-name (comp pg/camel-case name)})
                        response (<? (fetch/request-async
                                       (cond-> {::http/url         url
                                                ::http/method      ::http/post
                                                ::http/as          ::http/json
                                                ::http/form-params {:query query}}
                                               update-http-request update-http-request)))
                        {:keys [data errors]} (::http/body response)]
                       (ok (graphql-response-parser {::p/entity data} edn)))
                  (catch :default e
                    (error e))))))))

(def graphql-response-parser2
  (let [simple-keyword (comp keyword name)]
    (p/parser {::p/env    {::p/reader (p/map-reader* {::p/map-key-transform simple-keyword})}
               ::p/mutate (fn [env k _]
                            {:action
                             (fn []
                               (let [response (-> (p/entity env) (get (simple-keyword k)))
                                     id-param (pg/find-id (get-in env [:ast :params]) fp/tempid?)]
                                 (js/console.log "VOLTA" id-param (p/entity env) response)
                                 (cond-> response
                                   id-param (assoc ::fp/tempids {(val id-param) (get response (simple-keyword (key id-param)))}))))})})))

(defn graphql-network2
  ([url] (graphql-network2 url {}))
  ([url config]
   (fn-network
     (fn [this edn ok error]
       (go
         (try
           (let [edn      (-> edn
                              p/query->ast
                              (p/elide-ast-nodes #{::pp/profile})
                              p/ast->query)
                 query    (pg/query->graphql edn (merge {::pg/tempid? fp/tempid?} config))
                 response (<? (fetch/request-async {::http/url         url
                                                    ::http/method      ::http/post
                                                    ::http/as          ::http/json
                                                    ::http/form-params {:query query}}))
                 {:keys [data errors]} (::http/body response)]
             (ok (graphql-response-parser2 {::p/entity data} edn)))
           (catch :default e
             (error e))))))))

;; Batch Networking

(defn debounce
  "Debounce calls, all the call inputs will be stored and the final call will receive a vector with every
  collected input during the debounce."
  [f interval]
  (let [timer (atom 0)
        calls (atom [])]
    (fn [& args]
      (js/clearTimeout @timer)
      (swap! calls conj args)
      (reset! timer (js/setTimeout #(do
                                      (f @calls)
                                      (reset! calls []))
                      interval)))))

(defn group-mergeable-requests
  "Given a list of requests [query ok-callback error-callback], reduces the number of requests to the minimum by merging
  the requests. Not all requests are mergeable, so this still might output multiple requests."
  [requests]
  (if (seq requests)
    (let [[[q ok err] & tail] requests
          groups [{::query q ::ok [ok] ::err [err]}]]
      (loop [left       tail
             groups     groups
             current    0
             next-cycle []]
        (if-let [[query ok err :as req] (first left)]
          (let [cur-group (get groups current)
                merged    (p/merge-queries (::query cur-group) query)]
            (if merged
              (recur (next left)
                (-> groups
                    (assoc-in [current ::query] merged)
                    (update-in [current ::ok] conj ok)
                    (update-in [current ::err] conj err))
                current
                next-cycle)
              (recur (next left)
                groups
                current
                (conj next-cycle req))))
          (if (seq next-cycle)
            (let [[[q ok err] & tail] next-cycle]
              (recur tail
                (conj groups {::query q ::ok [ok] ::err [err]})
                (inc current)
                []))
            groups))))
    []))

(defn batch-send
  "Setup a debounce to batch network requests. The callback function f will be called with a list of requests to be made
  after merging as max as possible."
  [f delay]
  (debounce #(f (group-mergeable-requests %)) delay))

(defrecord BatchNetwork [send-fn]
  fulcro.network/NetworkBehavior
  (serialize-requests? [_] true)

  fulcro.network/FulcroNetwork
  (send [_ edn ok error] (send-fn edn ok error))
  (start [_]))

(defn batch-network
  "Wraps a network send calls with a debounce that will accumulate, merge and batch send requests in a time frame
  interval."
  ([network] (batch-network network 10))
  ([network delay]
   (let [send-fn (batch-send (fn [reqs]
                               (doseq [{::keys [query ok err]} reqs]
                                 (fulcro.network/send network query #(doseq [f ok] (f %)) #(doseq [f err] (f %)))))
                   delay)]
     (map->BatchNetwork {:send-fn send-fn}))))

(defn fulcro-union-path
  "Decide the union branch based on the Fulcro union component ident dispatch. This is
  useful if you are using a parser in the Clojurescript side living in the same process
  as the client app, this makes the union picking automatic on those cases."
  [{:keys [ast] :as env}]
  (let [component (:component ast)
        props     (p/entity env)
        [type _]  (fp/get-ident component props)]
    type))
