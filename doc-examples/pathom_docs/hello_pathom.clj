(ns pathom-docs.hello-pathom
  (:require [com.wsscode.pathom.core :as p]))

; this is our first reader
; a clojure map represents a reader that will dispatch from the om dispatch key to the map key
(def computed
  ; here we define that for the dispatch-key :hello we are going to return "World"
  {:hello (fn [env] "World")})

(def parser
  ; initialize a pathom parser
  (p/parser {}))

; call the parser, we set the reader function
(parser {::p/reader computed} [:hello])
; => {:hello "World"}
