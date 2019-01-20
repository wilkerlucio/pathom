(ns com.wsscode.pathom.book.connect.parameters
  (:require [com.wsscode.pathom.core :as p]
            [com.wsscode.pathom.connect :as pc]))

(def instruments
  [{:instrument/id 1
    :instrument/brand "Fender"
    :instrument/type :instrument.type/guitar
    :instrument/price 300}
   {:instrument/id 2
    :instrument/brand "Tajima"
    :instrument/type :instrument.type/ukulele
    :instrument/price 50}
   {:instrument/id 3
    :instrument/brand "Ibanez"
    :instrument/type :instrument.type/bass
    :instrument/price 270}
   {:instrument/id 4
    :instrument/brand "Cassio"
    :instrument/type :instrument.type/piano
    :instrument/price 160}])

(pc/defresolver instruments-list [env _]
  {::pc/output [{::instruments [:instrument/id :instrument/brand
                                :instrument/type :instrument/price]}]}
  (let [{:keys [sort]} (-> env :ast :params)]
    {::instruments (cond->> instruments
                     (keyword? sort) (sort-by sort))}))

(def parser
  (p/parallel-parser
    {::p/env     {::p/reader               [p/map-reader
                                            pc/parallel-reader
                                            pc/open-ident-reader
                                            p/env-placeholder-reader]
                  ::p/placeholder-prefixes #{">"}}
     ::p/mutate  pc/mutate-async
     ::p/plugins [(pc/connect-plugin {::pc/register instruments-list})
                  p/error-handler-plugin
                  p/request-cache-plugin
                  p/trace-plugin]}))

(comment
  (clojure.core.async/<!! (parser {} [(::instruments {:sort :instrument/brand})])))
