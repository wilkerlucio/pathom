(ns pathom-docs.profile
  (:require [com.wsscode.pathom.core :as p]
            [com.wsscode.pathom.profile :as p.profile]))

(def computed
  ; to demo delays, this property will take some time
  {:expensive (fn [{:keys [query] :as env}]
                (Thread/sleep (+ 200 (rand-int 400)))
                (if query
                  (p/join env)
                  :done))})

(defn flow-reader [{:keys [query] :as env}]
  (if query
    (p/join env)
    :leaf))

; starting the parser as usual
(def parser
  (p/parser {::p/plugins [(p/env-plugin {::p/reader [computed flow-reader]})
                          ; include the profile plugin
                          p.profile/profile-plugin]}))

(parser {}
        ; run the things
        [:a :b {:expensive [:c :d {:e [:expensive]}]}
         ; profile plugin provide this key, when you ask for it you get the
         ; information, be sure to request this as the last item on your query
         ::p.profile/profile])
; =>
; {:a                  :leaf
;  :b                  :leaf
;  :expensive          {:c :leaf
;                       :d :leaf
;                       :e {:expensive :done}}
;  ::p.profile/profile {:a         0
;                       :b         0
;                       :expensive {:c               1
;                                   :d               0
;                                   :e               {:expensive 304
;                                                     ::p.profile/self 304}
;                                   ::p.profile/self 611}}}

(-> (parser {}
            ; let's add more things this time
            [:a {:b [:g {:expensive [:f]}]}
             {:expensive [:c :d {:e [:expensive]}]}
             ::p.profile/profile])
    ; get the profile
    ::p.profile/profile
    ; generate the name/value/children format
    p.profile/profile->nvc)
; =>
; {:name     "Root"
;  :value    910
;  :children [{:name ":a" :value 0}
;             {:name     ":b"
;              :value    305
;              :children [{:name ":g" :value 0} {:name ":expensive" :value 304 :children [{:name ":f" :value 1}]}]}
;             {:name     ":expensive"
;              :value    605
;              :children [{:name ":c" :value 0}
;                         {:name ":d" :value 1}
;                         {:name ":e" :value 301 :children [{:name ":expensive" :value 300}]}]}]}

