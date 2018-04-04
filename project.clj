(defproject com.wsscode/pathom "2.0.0-beta3-SNAPSHOT"
  :description "A Clojure library designed to provide a collection of helper functions to support Clojure(script) graph parsers using\nom.next graph syntax."
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}

  :source-paths ["src"]

  :dependencies [[org.clojure/clojure "1.9.0" :scope "provided"]
                 [org.clojure/clojurescript "1.9.946" :scope "provided"]
                 [org.clojure/core.async "0.4.474" :scope "provided"]
                 [org.clojure/math.combinatorics "0.1.4"]
                 [com.wsscode/spec-inspec "1.0.0-alpha2"]
                 [fulcrologic/fulcro "2.4.4" :scope "provided"]
                 [org.clojure/test.check "0.9.0"]
                 [camel-snake-kebab "0.4.0"]]

  :jar-exclusions [#"src-docs/.*" #"docs/.+" #"node-modules/.+"]

  :profiles {:dev {:source-paths ["src" "src-docs"]}})
