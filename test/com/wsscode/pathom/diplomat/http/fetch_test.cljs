(ns com.wsscode.pathom.diplomat.http.fetch-test
  (:require [clojure.test :refer [is are testing async]]
            [nubank.workspaces.core :as ws]
            [com.wsscode.pathom.diplomat.http :as p.http]
            [com.wsscode.pathom.diplomat.http.fetch :as fetch]
            [com.wsscode.common.async-cljs :refer [let-chan <!p go-catch <? <?maybe]]))

(ws/deftest test-build-request-map
  (are [req out] (= (fetch/build-request-map req) out)
    {::p.http/url "/foo"}
    {:method "get"}

    {::p.http/url    "/foo"
     ::p.http/method ::p.http/post}
    {:method "post"}

    {::p.http/headers {:content-type "application/json"}}
    {:method  "get"
     :headers {:content-type "application/json"}}

    {::p.http/form-params  {:foo "bar"}
     ::p.http/content-type ::p.http/json}
    {:method  "post"
     :headers {:content-type "application/json"}
     :body    "{\"foo\":\"bar\"}"}

    {::p.http/form-params {:foo "bar"}
     ::p.http/as          ::p.http/json}
    {:method  "post"
     :headers {:content-type "application/json"}
     :body    "{\"foo\":\"bar\"}"}))

(ws/deftest test-request-async
  (async done
    (go-catch
      (try
        (is (= (<? (fetch/request-async {::p.http/url "/others/sample.json"
                                         ::p.http/as  ::p.http/json}))
               {::p.http/status 200
                ::p.http/body   {:json "data"}}))
        (done)
        (catch :default e (done e))))))
