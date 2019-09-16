(ns com.wsscode.pathom.sugar
  (:require [com.wsscode.pathom.core :as p]
            [com.wsscode.pathom.connect :as pc]))

(defn connect-serial-parser
  "Create a standard connect parser using the serial parser.

  This parser recommended for handling small and simple queries, like
  resolvers to process missing configuration options."
  [register]
  (p/parser
    {::p/env     {::p/reader               [p/map-reader
                                            pc/reader2
                                            pc/open-ident-reader
                                            p/env-placeholder-reader]
                  ::p/placeholder-prefixes #{">"}}
     ::p/mutate  pc/mutate
     ::p/plugins [(pc/connect-plugin {::pc/register register})
                  p/error-handler-plugin
                  p/trace-plugin]}))

(defn context-parser
  "Transforms the signature of a regular parser to one that takes
  some initial context to run the query. This returns a fn with
  the following arities:

  [context query] => runs query using context as initial data.
  [env context query] => same as before but accepts initial environment."
  [parser]
  (fn context-parser-internal
    ([context query]
     (parser {::p/entity (atom context)} query))
    ([env context query]
     (parser (assoc env ::p/entity (atom context)) query))))
