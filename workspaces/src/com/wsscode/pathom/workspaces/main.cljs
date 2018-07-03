(ns com.wsscode.pathom.workspaces.main
  (:require [nubank.workspaces.core :as ws]
            [com.wsscode.pathom.workspaces.graphql.github-demo]
            [com.wsscode.pathom.diplomat.http.fetch-test]))

(defonce init (ws/mount))
