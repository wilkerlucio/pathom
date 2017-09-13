(ns com.wsscode.pathom.profile-test
  (:require [clojure.test :refer :all]
            [om.next :as om]
            [com.wsscode.pathom.core :as p]
            [com.wsscode.pathom.profile :as pp]
            [com.wsscode.pathom.test :as pt]))

(comment
  (do
    (def flame-parser (om/parser {:read (-> p/pathom-read
                                            pp/flame-wrap)}))

    (defn flame-parse [env tx]
      (flame-parser
        (assoc env
          ::p/reader [pt/repeat-reader pt/sleep-reader pt/self-reader])
        tx)))

  (time
    (let [flame (atom {})]
      (flame-parse {::pp/flame-history flame}
                   [:hello {[:some 300] [:value :path]}
                    {:quick [[:slow 1200]
                             {[:deep 400] [[:nest 100]]}]}
                    {[:repeat.collection 30] [[:name 3] [:id 20]]}])
      (def flame-sample @flame)))

  (pp/->flame flame-sample))
