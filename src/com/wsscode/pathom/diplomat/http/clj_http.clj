(ns com.wsscode.pathom.diplomat.http.clj-http
  (:require [clj-http.client :as client]
            [clojure.core.async :as async]
            [clojure.spec.alpha :as s]
            [com.wsscode.async.async-clj :refer [go-catch go-promise]]
            [com.wsscode.pathom.diplomat.http :as http]
            [com.wsscode.pathom.misc :as p.misc]))

;; TODO: ::http/debug?
(defn build-request-map
  [{::http/keys [url content-type accept as body headers form-params] :as req}]
  (let [q? (partial contains? req)]
    (cond-> {:url    url
             :method (keyword (http/request-method req))}
            (q? ::http/headers) (assoc :headers headers)
            (q? ::http/content-type) (assoc :content-type (keyword (name content-type)))
            (q? ::http/accept) (assoc :accept (http/encode-type->header accept))
            (q? ::http/as) (assoc :as (keyword (name as)))
            (q? ::http/form-params) (assoc :form-params form-params)
            (q? ::http/body) (assoc :body body))))

(defn build-response-map
  [{:keys [status body headers]
    :as   response}]
  (with-meta {::http/status  status
              ::http/body    body
              ::http/headers headers}
             response))

(defn request [req]
  (s/assert ::http/request req)
  (-> req
      build-request-map
      client/request
      build-response-map))

(defn request-async
  [req]
  (s/assert ::http/request req)
  (let [chan (async/promise-chan)
        raise (fn request-async-raise [ex]
                (async/put! chan ex))
        respond (fn request-async-respond [response]
                  (try
                    (async/put! chan (build-response-map response))
                    (catch Throwable e
                      (raise e))))]
    (-> req
        build-request-map
        (assoc :async? true)
        (client/request respond raise))
    chan))

(when p.misc/INCLUDE_SPECS
  (s/fdef request
    :args (s/cat :request ::http/request)
    :ret ::http/response))
