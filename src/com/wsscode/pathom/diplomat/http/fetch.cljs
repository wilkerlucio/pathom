(ns com.wsscode.pathom.diplomat.http.fetch
  (:require
    [cljs.spec.alpha :as s]
    [clojure.string :as str]
    [com.wsscode.async.async-cljs :refer [let-chan <!p go-catch <? <?maybe]]
    [com.wsscode.pathom.core :as p]
    [com.wsscode.pathom.diplomat.http :as http]
    [com.wsscode.pathom.misc :as p.misc]
    [com.wsscode.pathom.trace :as pt]
    [goog.object :as gobj]))

(defn build-headers [{::http/keys [headers content-type]}]
  (let [base-headers
        (cond-> nil
          content-type (assoc :content-type (http/encode-type->header content-type)))]
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
    (cond-> {:method (http/request-method req)}
      headers (assoc :headers headers)
      form-params (assoc :body (build-body req)))))

(defn request-async [{::http/keys [url] :as req}]
  (s/assert ::http/request req)
  (go-catch
    (let [{::http/keys [accept]} (normalize-as req)
          method   (http/request-method req)
          tid      (pt/trace-enter req {::pt/event ::http-request
                                        ::pt/label (str (str/upper-case (name method)) " " url)
                                        ::url      url
                                        ::method   method})
          response (<!p (js/fetch url (clj->js (build-request-map req))))
          status   (gobj/get response "status")
          out      {::http/status status
                    ::http/body   (case accept
                                    ::http/json (js->clj (<!p (.json response)) :keywordize-keys true)
                                    (<!p (.text response)))}]
      (pt/trace-leave req tid
                      (cond-> {} (not (< 199 status 300)) (assoc ::p/error {:status status})))
      out)))

(defmethod pt/trace-tree-collect ::http-request [x row]
  (-> row
      (pt/trace-style {:fill (if (::p/error row) "#ff8181" "#73abff")})
      (pt/tree-assoc-detail x [::url ::method ::p/error])))

(when p.misc/INCLUDE_SPECS
  (s/fdef request-async
    :args (s/cat :request ::http/request)))
