(ns com.wsscode.pathom.diplomat.http
  (:require [clojure.spec.alpha :as s]))

(s/def ::encode-type (s/with-gen keyword? #(s/gen #{::transit+json ::edn ::json})))

(s/def ::url string?)
(s/def ::method #{::get ::head ::post ::put ::patch ::delete ::connect ::options})
(s/def ::headers (s/map-of string? string?))
(s/def ::content-type (s/or :pre-defined ::encode-type :raw string?))
(s/def ::accept (s/or :pre-defined ::encode-type :raw string?))
(s/def ::as ::encode-type)
(s/def ::form-params any?)
(s/def ::debug? boolean?)

(s/def ::request (s/keys :req [::url]
                         :opt [::method
                               ::headers
                               ::content-type
                               ::accept
                               ::as
                               ::debug?]))

(s/def ::response (s/keys :req [::headers]))

(defn request [req])

(s/fdef request
  :args (s/cat :req ::request)
  :ret ::response)
