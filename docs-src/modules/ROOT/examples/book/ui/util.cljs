(ns com.wsscode.pathom.book.ui.util
  (:require [fulcro.client.data-fetch :as df]
            [fulcro.client.primitives :as fp]))

(defn loading? [c marker]
  (-> c fp/props (get [df/marker-table marker]) df/loading?))
