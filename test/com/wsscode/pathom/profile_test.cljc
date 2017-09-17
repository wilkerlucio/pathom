(ns com.wsscode.pathom.profile-test
  (:require [clojure.test :refer :all]
            [om.next :as om]
            [clojure.core.async :refer [go <!]]
            [com.wsscode.pathom.core :as p]
            [com.wsscode.pathom.async :as pa]
            [com.wsscode.pathom.profile :as pp]
            [com.wsscode.pathom.test :as pt]))

(def flame-parser-plugin
  (p/parser {::p/plugins [(p/env-plugin {::p/reader [pt/repeat-reader
                                                     pt/sleep-reader
                                                     pt/self-reader]})
                          pp/profile-plugin]}))

(comment
  (->> (flame-parser-plugin {}
                        [:hello
                         {[:some 300] [:value :path]}
                         {:quick [[:slow 1200]
                                  {[:deep 400] [[:nest 100]]}]}
                         {[:repeat.collection 30] [[:name 3] [:id 20]]}

                         ::pp/profile])
       (def flame-sample))

  (-> flame-sample ::pp/profile
      (pp/profile->flame-graph)
      #_ (clojure.data.json/write-str)
      #_ println))
