(ns com.wsscode.pathom.book.intro.demo
  (:require [com.wsscode.pathom.core :as p]
            [com.wsscode.pathom.connect :as pc]))

(pc/defresolver answer [_ _]
  {::pc/output [:answer-to-everything]}
  {:answer-to-everything 42})

(pc/defresolver answer-plus-one [_ {:keys [answer-to-everything]}]
  {::pc/input  #{:answer-to-everything}
   ::pc/output [:answer-plus-one]}
  {:answer-plus-one (inc answer-to-everything)})

(def registry
  [answer answer-plus-one])

(def parser
  (p/parser
    {::p/env     {::p/reader               [p/map-reader
                                            pc/reader2
                                            pc/open-ident-reader
                                            p/env-placeholder-reader]
                  ::p/placeholder-prefixes #{">"}}
     ::p/mutate  pc/mutate
     ::p/plugins [(pc/connect-plugin {::pc/register registry})
                  p/error-handler-plugin
                  p/trace-plugin]}))

(comment
  ; to call the parser and get some data out of it, run:
  (parser {} [:answer-to-everything]))
