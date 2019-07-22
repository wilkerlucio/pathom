(ns com.wsscode.pathom.book.tracing.demo
  (:require [com.wsscode.pathom.core :as p]
            [com.wsscode.pathom.connect :as pc]
            [com.wsscode.pathom.trace :as pt]
            [clojure.core.async :as async]
            [com.wsscode.common.async-cljs :refer [go-catch <?]]))

(pc/defresolver slow-root [env _]
  {::pc/output [::slow-root]}
  (go-catch
    ; here we use the tracing macro to compute the time for the timeout
    (pt/tracing env {::pt/event ::my-event
                     ::pt/style {:fill "rgba(255, 255, 0, 0.5)"}}
      (<? (async/timeout 200)))
    {::slow-root "foo"}))

(pc/defresolver slow-root-dep [env _]
  {::pc/input #{::slow-root}
   ::pc/output [::root-dep]}
  (go-catch
    (pt/tracing env {::pt/event ::my-event}
      (<? (async/timeout 200)))
    {::root-dep "nah"}))

(pc/defresolver error-root-dep [env _]
  {::pc/input #{::slow-root}
   ::pc/output [::root-dep-err]}
  (go-catch
    (pt/tracing env {::pt/event ::my-event
                     ::data "Error message"
                     ::pt/style {:fill "rgba(255, 0, 0, 0.5)"}}
      (<? (async/timeout 200)))
    (throw (ex-info "Meh" {}))))

(def app-registry [slow-root slow-root-dep error-root-dep])

; to display the tracing with the results you must register the event type
(defmethod pt/trace-tree-collect ::my-event [x row]
  (-> row
      ; the sequence at the end is a list with the keys to display in the trace when
      ; user mouses over the event
      (pt/tree-assoc-detail x [::data])))

(def parser
  (p/parallel-parser
    {::p/env     {::p/reader               [p/map-reader
                                            pc/parallel-reader
                                            pc/open-ident-reader
                                            p/env-placeholder-reader]
                  ::p/placeholder-prefixes #{">"}}
     ::p/mutate  pc/mutate-async
     ::p/plugins [(pc/connect-plugin {::pc/register app-registry})
                  p/error-handler-plugin
                  p/request-cache-plugin
                  p/trace-plugin]}))

; to get raw tracing results, include the :com.wsscode.pathom/trace key in your query
(parser {} [:a :b
            :com.wsscode.pathom/trace])

;=>
;{:com.wsscode.pathom/trace
; {:start 0,
;  :path [],
;  :duration 5049,
;  :details [{:event "process-pending",
;             :duration 0,
;             :start 1,
;             :provides #{:com.wsscode.pathom/trace},
;             :merge-result? false}
;            {:event "flush-watchers-loop", :duration 0, :start 1}
;            {:event "reset-loop",
;             :duration 0,
;             :start 1,
;             :loop-keys [:com.wsscode.pathom/trace]}
; ...


