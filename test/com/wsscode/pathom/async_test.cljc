(ns com.wsscode.pathom.async-test
  (:require [clojure.test :refer :all]
            [om.next :as om]
            [clojure.core.async :refer [go <!!]]
            [com.wsscode.pathom.core :as p]
            [com.wsscode.pathom.async :as pa]))

(def parser (om/parser {:read pa/async-pathom-read}))

(def global-reader
  {:sync       (constantly "Sync value")
   :async      (fn [_] (go "Async value"))
   :async-list (fn [env]
                 (->> (p/join-seq env [{:x 1 :y (go 2)}
                                       {:x 3 :y (go 4)}])
                      (pa/read-chan-seq pa/read-chan-values)))})

(defn parse [env tx]
  (-> (parser (assoc env ::p/reader [global-reader p/map-reader]) tx)
      (pa/read-chan-values)
      <!!))

(deftest test-parse-async
  (is (= (parse {} [:sync :async {:async-list [:x :y]}])
         {:sync "Sync value"
          :async "Async value"
          :async-list [{:x 1, :y 2} {:x 3, :y 4}]})))
