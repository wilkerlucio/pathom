(ns com.wsscode.pathom.diplomat.http.clj-http-test
  (:require [clojure.test :refer [deftest is are]]
            [com.wsscode.pathom.diplomat.http :as p.http]
            [com.wsscode.pathom.diplomat.http.clj-http :as clj-http]))

(deftest test-build-request-map
  (are [req out] (= (clj-http/build-request-map req) out)
                 {::p.http/url "/foo"}
                 {:url    "/foo"
                  :method "get"}

                 {::p.http/url    "/foo"
                  ::p.http/method ::p.http/post}
                 {:url    "/foo"
                  :method "post"}

                 {::p.http/url          "/foo"
                  ::p.http/content-type ::p.http/json}
                 {:url          "/foo"
                  :method       "get"
                  :content-type "application/json"}))
