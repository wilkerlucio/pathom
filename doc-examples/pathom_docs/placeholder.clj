(ns pathom-docs.placeholder
  (:require [com.wsscode.pathom.core :as p]))

(def user
  {:user/name      "Walter White"
   :user/photo-url "http://retalhoclub.com.br/wp-content/uploads/2016/07/1-3.jpg"})

(def computed
  {:app/current-user
   (fn [env]
     (p/join user env))})

(def parser (p/parser {::p/plugins [(p/env-plugin {::p/reader [p/map-reader
                                                               computed
                                                               ; placeholder reader
                                                               (p/placeholder-reader "ph")]})]}))

(parser {} [{:app/current-user [{:ph/text-view [:user/name]}
                                {:ph/image-view [:user/photo-url]}]}])
; #:app{:current-user #:ph{:text-view #:user{:name "Walter White"},
;                          :image-view #:user{:photo-url "http://retalhoclub.com.br/wp-content/uploads/2016/07/1-3.jpg"}}}
