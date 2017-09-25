(ns pathom-docs.entity-rick-morty
  (:require [com.wsscode.pathom.core :as p]
            [clojure.data.json :as json]))

(def rick-and-morty
  (-> "http://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes"
      (slurp) (json/read-str)))

(def virtuals
  {:show/episodes
   (fn [env]
     (let [show (p/entity env)]
       (p/join-seq env (get-in show ["_embedded" "episodes"]))))})

(def parser
  (p/parser {::p/plugins [(p/env-plugin {::p/reader [(p/map-reader* {::p/map-key-transform name})
                                                     virtuals]})]}))

(comment
  (parser {::p/entity rick-and-morty}
          [:show/name
           :show/status
           {:show/episodes [:episode/name
                              :episode/season
                            :episode/number]}]))
