(ns com.wsscode.pathom.misc
  #?(:clj (:import (java.util UUID))))

#?(:clj  (def INCLUDE_SPECS true)
   :cljs (goog-define INCLUDE_SPECS true))

(defn pathom-random-uuid []
  #?(:clj  (UUID/randomUUID)
     :cljs (random-uuid)))
