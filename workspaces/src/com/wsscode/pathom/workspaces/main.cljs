(ns com.wsscode.pathom.workspaces.main
  (:require [nubank.cljs.workspaces.core :as ws]
            [com.wsscode.pathom.workspaces.graphql.github-demo]))

(defonce init (ws/mount))
