(defproject com.wsscode/pathom "2.0.11"
  :description "A Clojure library designed to provide a collection of helper functions to support Clojure(script) graph parsers using\nom.next graph syntax."
  :url "https://github.com/wilkerlucio/pathom"
  :license {:name "Eclipse Public License"
            :url  "http://www.eclipse.org/legal/epl-v10.html"}

  :source-paths ["src"]

  :dependencies [[org.clojure/clojure "1.9.0" :scope "provided"]
                 [org.clojure/clojurescript "1.9.946" :scope "provided"]
                 [org.clojure/core.async "0.4.474" :scope "provided"]
                 [org.clojure/data.json "0.2.6"]
                 [org.clojure/math.combinatorics "0.1.4"]
                 [com.wsscode/spec-inspec "1.0.0-alpha2"]
                 [fulcrologic/fulcro "2.5.5" :scope "provided"]
                 [org.clojure/test.check "0.10.0-alpha3" :scope "provided"]
                 [camel-snake-kebab "0.4.0"]]

  :plugins [[lein-cljsbuild "1.1.7"]]

  :cljsbuild {:builds [{:id           "sanity"
                        :source-paths ["src"]
                        :compiler     {:optimizations :whitespace
                                       :verbose       true
                                       :main          com.wsscode.pathom.connect}}]}

  :jar-exclusions [#"src-docs/.*" #"docs/.+" #"node-modules/.+"]

  :profiles {:dev {:source-paths ["src" "src-docs"]
                   :dependencies [[criterium "0.4.4"]]}})
