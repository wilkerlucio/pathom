(ns pathom-docs.request-cache
  (:require [com.wsscode.pathom.core :as p]))

(defn my-expensive-operation [env]
  ; the cache key can be anything; if we were had an extra
  ; variable here, like some id, a good cache key would be
  ; like: [::my-expensive-operation id]
  (p/cached env :my-key
    ; we are going to send an atom with an int so that we can count
    ; how many times this was called
    (let [counter (:counter env)]
      ; a secondary sign if cache is working, let's make a delay
      (Thread/sleep 1000)
      ; increment and return
      (swap! counter inc))))

(def computed
  {:cached my-expensive-operation})

; a reader that just flows, until it reaches a leaf
(defn flow-reader [{:keys [query] :as env}]
  (if query
    (p/join env)
    :leaf))

(def parser
  (p/parser {::p/plugins [(p/env-plugin {::p/reader [computed
                                                     flow-reader]})
                          ; add the request cache plugin for cache initialization
                          p/request-cache-plugin]}))

(time
  (parser {:counter (atom 0)}
          [:x :y :cached
           {:z [:foo {:bar [:cached]} :cached]}]))
; "Elapsed time: 1006.760165 msecs"
; =>
; {:x      :leaf
;  :y      :leaf
;  :cached 1
;  :z      {:foo    :leaf
;           :bar    {:cached 1}
;           :cached 1}}
