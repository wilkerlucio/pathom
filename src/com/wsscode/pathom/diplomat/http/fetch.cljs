(ns com.wsscode.pathom.diplomat.http.fetch
  (:require [com.wsscode.pathom.diplomat.http :as http]
            [com.wsscode.common.async-cljs :refer [let-chan <!p go-catch <? <?maybe]]
            [goog.object :as gobj]
            [cljs.spec.alpha :as s]))

(defn request-method [{::http/keys [method form-params]}]
  (or (some-> method name)
      (if form-params "post" "get")))

(defn content-type-header [content-type]
  (cond
    (string? content-type)
    content-type

    (keyword? content-type)
    (case content-type
      ::http/json "application/json"
      ::http/edn "application/edn"
      ::http/transit+json "application/transit+json")))

(defn build-headers [{::http/keys [headers content-type]}]
  (let [base-headers
        (cond-> nil
          content-type (assoc :content-type (content-type-header content-type)))]
    (merge base-headers headers)))

(defn build-body [{::http/keys [form-params content-type]}]
  (case content-type
    ::http/json (js/JSON.stringify (clj->js form-params))
    (str form-params)))

(defn normalize-as [{::http/keys [as] :as req}]
  (cond-> req
    as (assoc ::http/content-type as ::http/accept as)))

(defn build-request-map [{::http/keys [form-params] :as req}]
  (let [req     (normalize-as req)
        headers (build-headers req)]
    (cond-> {:method (request-method req)}
      headers (assoc :headers headers)
      form-params (assoc :body (build-body req)))))

(defn request-async [{::http/keys [url] :as req}]
  (s/assert ::http/request req)
  (go-catch
    (let [{::http/keys [accept]} (normalize-as req)
          response (<!p (js/fetch url (build-request-map req)))]
      {::http/status (gobj/get response "status")
       ::http/body   (case accept
                       ::http/json (js->clj (<!p (.json response)) :keywordize-keys true)
                       (<!p (.text response)))})))

(s/fdef request-async
  :args (s/cat :request ::http/request))
