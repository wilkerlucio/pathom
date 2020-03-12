(ns com.wsscode.pathom.pagination
  "Pagination support"
  (:require [clojure.spec.alpha :as s]))


(s/def ::items vector?)  ;TODO: should this be sequential? ?
(s/def ::size pos-int?)
(s/def ::cursor string?)

;TODO: any benefit in making these
; com.wsscode.pathom.pagination.page-info/after, etc
(s/def ::after ::cursor)
(s/def ::before ::cursor)
(s/def ::first pos-int?)
(s/def ::last pos-int?)
(s/def ::has-next? boolean?)
(s/def ::has-prev? boolean?)


