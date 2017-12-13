(defproject com.wsscode/pathom "1.0.0-beta13-SNAPSHOT"
  :description "A Clojure library designed to provide a collection of helper functions to support Clojure(script) graph parsers using\nom.next graph syntax."
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}

  :source-paths ["src"]

  :dependencies [[org.clojure/clojure "1.9.0" :scope "provided"]
                 [org.clojure/clojurescript "1.9.671" :scope "provided"]
                 [org.clojure/core.async "0.3.443" :scope "provided"]
                 [org.omcljs/om "1.0.0-beta1" :scope "provided"]
                 [org.clojure/math.combinatorics "0.1.4"]
                 [com.wsscode/spec-inspec "1.0.0-alpha2"]
                 [fulcrologic/fulcro "2.0.0-beta7" :scope "provided"]
                 [org.clojure/test.check "0.9.0" :scope "provided"]
                 [camel-snake-kebab "0.4.0"]]

  :profiles {:dev {:source-paths ["src" "doc-examples"]}})
