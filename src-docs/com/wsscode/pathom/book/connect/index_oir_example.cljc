(ns com.wsscode.pathom.book.connect.index-oir-example
  (:require [com.wsscode.pathom.connect :as pc]))

(def indexes
  (-> {}
      (pc/add 'thing-by-id {::pc/input  #{:id}
                            ::pc/output [:id :name :color]})
      (pc/add 'thing-by-name {::pc/input  #{:name}
                              ::pc/output [:id :name :color]})))

; index-oir:
'{:name  {#{:id} #{thing-by-id}}
  :color {#{:id}   #{thing-by-id}
          #{:name} #{thing-by-name}}
  :id    {#{:name} #{thing-by-name}}}

