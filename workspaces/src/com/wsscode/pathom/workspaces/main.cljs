(ns com.wsscode.pathom.workspaces.main
  (:require [nubank.cljs.workspaces.core :as ws]
            [nubank.cljs.workspaces.cards]))

(defonce init (ws/mount))
