(ns com.wsscode.pathom.diplomat.http
  (:require [clojure.spec.alpha :as s]))

(s/def ::url string?)
(s/def ::method #{::get ::head ::post ::put ::patch ::delete ::connect ::options})
(s/def ::headers (s/map-of string? string?))
(s/def ::content-type string?)
(s/def ::accept string?)
(s/def ::as (s/with-gen keyword? #(s/gen #{::transit ::edn ::json})))
(s/def ::debug? boolean?)

(s/def ::request (s/keys :req [::url]
                         :opt [::method
                               ::headers
                               ::content-type
                               ::accept
                               ::as
                               ::debug?]))

(s/def ::response (s/keys :req [::headers]))
