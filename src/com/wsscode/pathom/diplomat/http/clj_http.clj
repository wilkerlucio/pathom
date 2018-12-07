(ns com.wsscode.pathom.diplomat.http.clj-http
  (:require [clj-http.client :as client]
            [com.wsscode.pathom.diplomat.http :as http]
            [clojure.spec.alpha :as s]))

;; TODO: ::http/debug?
(defn build-request-map
  [{::http/keys [url content-type accept as body headers form-params] :as req}]
  (let [q? (partial contains? req)]
    (cond-> {:url    url
             :method (keyword (http/request-method req))}
            (q? ::http/headers) (assoc :headers headers)
            (q? ::http/content-type) (assoc :content-type (http/encode-type->header content-type))
            (q? ::http/accept) (assoc :accept (http/encode-type->header accept))
            (q? ::http/as) (assoc :as (http/encode-type->header as))
            (q? ::http/form-params) (assoc :form-params form-params)
            (q? ::http/body) (assoc :body body))))

(defn request [req]
  (s/assert ::http/request req)
  (-> req
      build-request-map
      client/request))

(s/fdef request
  :args (s/cat :request ::http/request)
  :ret ::http/response)
