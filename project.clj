(defproject com.wsscode/pathom "2.0.15-SNAPSHOT"
  :description "A Clojure library designed to provide a collection of helper functions to support Clojure(script) graph parsers using\nom.next graph syntax."
  :url "https://github.com/wilkerlucio/pathom"
  :license {:name "Eclipse Public License"
            :url  "http://www.eclipse.org/legal/epl-v10.html"}

  :plugins [[lein-tools-deps "0.4.1"]
            [lein-cljsbuild "1.1.7"]]

  :middleware [lein-tools-deps.plugin/resolve-dependencies-with-deps-edn]
  :lein-tools-deps/config {:config-files [:install :user :project]
                           :aliases      [:dev]}

  :cljsbuild {:builds [{:id           "sanity"
                        :source-paths ["src"]
                        :compiler     {:optimizations :whitespace
                                       :verbose       true
                                       :main          com.wsscode.pathom.connect}}]}

  :jar-exclusions [#"src-docs/.*" #"docs/.+" #"node-modules/.+"]

  :profiles {:dev {:source-paths           ["src" "src-docs" "workspaces/src"]
                   :lein-tools-deps/config {:aliases [:dev :http-drivers :profile :workspaces-dev]}}})
