(ns com.wsscode.pathom.book.connect.mutations
  (:require [com.wsscode.pathom.connect :as pc]
            [com.wsscode.pathom.core :as p]))

(pc/defmutation send-message [env {:keys [message/text]}]
  {::pc/sym    'send-message
   ::pc/params [:message/text]
   ::pc/output [:message/id :message/text]}
  {:message/id   123
   :message/text text})

(def parser
  (p/parser
    {::p/env     {::p/reader [p/map-reader
                              pc/reader2
                              pc/open-ident-reader]}
     ::p/mutate  pc/mutate
     ::p/plugins [(pc/connect-plugin {::pc/register send-message})
                  p/error-handler-plugin
                  p/trace-plugin]}))
