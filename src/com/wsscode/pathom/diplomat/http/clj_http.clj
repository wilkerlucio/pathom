(ns com.wsscode.pathom.diplomat.http.clj-http
  (:require [clj-http.client :as client]
            [com.wsscode.pathom.diplomat.http :as http]
            [cljs.spec.alpha :as s]))

(defn request [req]
  (s/assert ::http/request req)
  (client/request req))

(s/fdef request
  :args (s/cat :request ::http/request)
  :ret ::http/response)
