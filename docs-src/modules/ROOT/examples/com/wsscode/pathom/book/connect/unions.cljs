(ns com.wsscode.pathom.book.connect.unions
  (:require
    [com.wsscode.pathom.connect :as pc]
    [com.wsscode.pathom.core :as p]))

(pc/defresolver feed [_ _]
  {::pc/output
   [{:app/feed
     {:app.post/id
      [:app.post/id :app.post/text]

      :app.video/id
      [:app.video/id :app.video/stream-url]

      :app.image/id
      [:app.image/id :app.image/source-url]}}]}
  {:app/feed [{:app.post/id 1 :app.post/text "foo"}
              {:app.video/id 2 :app.video/stream-url "http://my-site/video.mp4"}
              {:app.image/id 3 :app.image/source-url "http://my-site/image.png"}]})

(def duration-db
  {2 42143880})

(defn type-from-extension [^string source-url]
  (let [ext (subs source-url (inc (.lastIndexOf source-url ".")))]
    (keyword "app.image.type" ext)))

(def app-registry
  [feed
   (pc/single-attr-resolver :app.video/id :app.video/duration-ms duration-db)
   (pc/single-attr-resolver :app.image/source-url :app.image/type type-from-extension)])

(def parser
  (p/parallel-parser
    {::p/env     {::p/reader [p/map-reader
                              pc/parallel-reader
                              pc/open-ident-reader]}
     ::p/mutate  pc/mutate-async
     ::p/plugins [(pc/connect-plugin {::pc/register app-registry})
                  p/error-handler-plugin
                  p/trace-plugin]}))
