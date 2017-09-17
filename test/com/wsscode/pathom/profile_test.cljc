(ns com.wsscode.pathom.profile-test
  (:require [clojure.test :refer :all]
            [om.next :as om]
            [clojure.core.async :refer [go <!]]
            [com.wsscode.pathom.core :as p]
            [com.wsscode.pathom.async :as pa]
            [com.wsscode.pathom.profile :as pp]
            [com.wsscode.pathom.test :as pt]))

(comment
  (do
    (def flame-parser (om/parser {:read (-> pa/async-pathom-read
                                            pp/async-wrap-profile)}))

    (def delay-reader
      {:delay-value (fn [_] (go
                              (Thread/sleep 500)
                              "done"))})

    (defn flame-parse [env tx]
      (-> (flame-parser
            (assoc env
              ::p/reader [delay-reader
                          pt/repeat-reader
                          (pa/wrap-reader pt/sleep-reader)
                          (pa/wrap-reader pt/self-reader)])
            tx)
          (pa/read-chan-values)))

    (go
      (time
        (let [flame (atom {})
              res   (<! (flame-parse {::pp/profile flame}
                                     [:hello
                                      {[:some 300] [:value :path
                                                    [:delay-value]]}
                                      {:quick [[:slow 1200]
                                               {[:deep 400] [[:nest 100]]}]}
                                      {[:repeat.collection 30] [[:name 3] [:id 20]]}]))]

          (def flame-sample @flame)
          (println "RES" res)))))

  (def flame-parser-plugin (p/parser {::p/plugins [(p/env-plugin {})
                                                   ]}))

  (-> (pp/profile->flame-graph flame-sample)
      (clojure.data.json/write-str)
      println))
