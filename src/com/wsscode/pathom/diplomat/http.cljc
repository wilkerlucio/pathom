(ns com.wsscode.pathom.diplomat.http
  (:require [clojure.spec.alpha :as s]))

(s/def ::encode-type (s/with-gen keyword? #(s/gen #{::transit+json ::edn ::json})))

(s/def ::url (s/or :string string? :uri uri?))

(s/def ::method #{::get ::head ::post ::put ::patch ::delete ::connect ::options})

;; HTTP driver should always normalize the header name from HTTP-Case to :lower-case-keyword.
;; HTTP1.1 use HTTP-Case, HTTP2 use lower-case. Always normalize it a good aproach used by
;; pedestal and many others.
;; A header can be sent multiple times. So it should be a coll-of values.
;; Multiple values are supported both in java.net.http(req/res) and js/fetch(res).
(s/def ::headers (s/map-of keyword? (s/coll-of string?)))

;; content-type will generate a header on request. it can be overwriten by passing a explicit content-type
;; key on headers map. The driver will use this to convert ::form-params into ::body
;; If absent, the driver should use ::body with no transformation and ::form-params will be ignored
;; If it's a raw string, it will generate the header, but the driver should use raw ::body
(s/def ::content-type (s/or :pre-defined ::encode-type :raw string?))

;; accept will generate a header on request.  it can be overwriten by passing a explicit accept
;; key on headers map. The driver will use this to convert the response from server into ::body
;; If it's a raw string, it will just generate the header.
;; If absent or a raw string, the driver can (or not) use the content-type from response-header to convert.
(s/def ::accept (s/or :pre-defined ::encode-type :raw string?))

;; Will say how to turn ::form-params into body on request and how to parse the response body.
;; If content-type and/or accept are specifieds as :pre-defined, they will be preferred.
(s/def ::as ::encode-type)

;; Used to generate ::body basead on ::content-type on request.
;; Usualy a clojure data-structure
(s/def ::form-params any?)

;; enable/disable tracing
(s/def ::debug? boolean?)

;; On request, usually string, bytes, buffer or a writer.
;; On response, should be a clojure data-structure.
(s/def ::body any?)

(s/def ::request (s/keys :req [::url]
                         :opt [::method
                               ::headers
                               ::content-type
                               ::accept
                               ::as
                               ::form-params
                               ::debug?
                               ::body]))

(s/def ::response (s/keys :req [::status]
                          :opt [::headers
                                ::body]))

(s/def ::driver fn?)

(defn request
  ([{::keys [driver] :as request}]
   (driver request))
  ([{::keys [driver] :as request} url]
   (driver (assoc request ::url url)))
  ([{::keys [driver] :as request} url config]
   (driver (merge request {::url url} config))))

(s/fdef request
        :args (s/cat :req ::request)
        :ret ::response)

(defn request-method [{::keys [method form-params]}]
  (or (some-> method name)
      (if form-params "post" "get")))

(defn encode-type->header [encode-type]
  (cond
    (string? encode-type)
    encode-type

    (keyword? encode-type)
    (str "application/" (name encode-type))))
