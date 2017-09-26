(ns pathom-docs.path-tracking
  (:require [com.wsscode.pathom.core :as p]))

(def where-i-am-reader
  {:where-am-i (fn [{::p/keys [path]}] path)})

; a reader that just flows, until it reaches a leaf
(defn flow-reader [{:keys [query] :as env}]
  (if query
    (p/join env)
    :leaf))

(def parser (p/parser {::p/plugins [(p/env-plugin {::p/reader [where-i-am-reader
                                                               flow-reader]})]}))

(parser {} [{:hello [:some {:friend [:place :where-am-i]}]}])
;=>
;{:hello {:some   :leaf
;         :friend {:place      :leaf
;                  :where-am-i [:hello :friend :where-am-i]}}}
