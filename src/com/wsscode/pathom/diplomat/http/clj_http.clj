(ns com.wsscode.pathom.diplomat.http.clj-http
  (:require [clj-http.client :as client]
            [com.wsscode.pathom.diplomat.http :as http]
            [clojure.spec.alpha :as s]))

(defn encode-type->header [encode-type]
  (cond
    (string? encode-type)
    encode-type

    (keyword encode-type)
    (keyword (name encode-type))))

(defn build-request-map
  [{::http/keys [url content-type accept as body headers query-params] :as req}]
  (let [q? (partial contains? req)]
    (cond-> {:url           url
             :cookie-policy :standard
             :method        (keyword (http/request-method req))}
      (q? ::http/headers) (assoc :headers headers)
      (q? ::http/content-type) (assoc :content-type (encode-type->header content-type))
      (q? ::http/accept) (assoc :accept (encode-type->header accept))
      (q? ::http/query-params) (assoc :query-params query-params)
      (q? ::http/as) (assoc :as (encode-type->header as))
      (q? ::http/body) (assoc :body body))))

(defn request [req]
  (s/assert ::http/request req)
  (let [response (-> req
                     build-request-map
                     client/request)]
    (assoc response ::http/body (:body response))))

(s/fdef request
  :args (s/cat :request ::http/request)
  :ret ::http/response)
