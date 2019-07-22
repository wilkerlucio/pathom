(ns com.wsscode.pathom.book.entities.atom-entities
  (:require [com.wsscode.pathom.core :as p]))

(def parser (p/parser {}))

(def sample-item
  {:id 42
   :name "Some Product"
   :description "This should be a cool product."})

(defn item-reader [{:keys [ast] :as env}]
  #?(:clj (Thread/sleep 1000))
  (-> (p/swap-entity! env merge sample-item)
      (get (:key ast))))

(comment
  (time
    (parser {::p/entity (atom {})
             ::p/reader {:id item-reader :name item-reader :description item-reader}}
      [:id :name :description]))
  ; since we are always hitting the expensive reader, each entry has to spend a second

  ; "Elapsed time: 3013.386195 msecs"
  ; => {:id 42, :name "Some Product", :description "This should be a cool product."}

  (time
    (parser {::p/entity (atom {})
             ::p/reader [p/map-reader
                         {:id item-reader :name item-reader :description item-reader}]}
      [:id :name :description]))
  ; now, adding the map-reader to the game will allow it to check on the entity first,
  ; making the cached entity effective.

  ;"Elapsed time: 1006.479409 msecs"
  ;=> {:id 42, :name "Some Product", :description "This should be a cool product."}
  )
