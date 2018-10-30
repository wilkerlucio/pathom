(ns com.wsscode.pathom.book.tracing.demo-parallel-reader
  (:require [com.wsscode.pathom.core :as p]
            [com.wsscode.pathom.connect :as pc]
            [clojure.core.async :as async]
            [com.wsscode.common.async-cljs :refer [go-catch <?]]))

(pc/defresolver movie-details [env {:movie/keys [id]}]
  {::pc/input  #{:movie/id}
   ::pc/output [:movie/id :movie/title :movie/release-date]}
  (go-catch
    (<? (async/timeout 100))
    {:movie/id           id
     :movie/title        "Title"
     :movie/release-date #inst "2018-10-30"}))

(pc/defresolver movie-rating [env input]
  {::pc/input  #{:movie/id}
   ::pc/output [:movie/rating]}
  (go-catch
    (<? (async/timeout 100))
    {:movie/rating "PG"}))

(pc/defresolver movie-title-prefixed [env {:movie/keys [title]}]
  {::pc/input  #{:movie/title}
   ::pc/output [:movie/title-prefixed]}
  (go-catch
    (<? (async/timeout 100))
    {:movie/title-prefixed (str "Prefix " title)}))

(def app-registry [movie-details movie-rating movie-title-prefixed])

(def parser
  (p/parallel-parser
    {::p/env     {::p/reader               [p/map-reader
                                            pc/parallel-reader
                                            pc/open-ident-reader
                                            p/env-placeholder-reader]
                  ::p/placeholder-prefixes #{">"}}
     ::p/mutate  pc/mutate-async
     ::p/plugins [(pc/connect-plugin {::pc/register app-registry})
                  p/error-handler-plugin
                  p/request-cache-plugin
                  p/trace-plugin]}))
