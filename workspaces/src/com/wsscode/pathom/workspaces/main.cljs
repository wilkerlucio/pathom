(ns com.wsscode.pathom.workspaces.main
  (:require
    [nubank.workspaces.core :as ws]
    [com.wsscode.pathom.workspaces.connect.simple-demo]
    [com.wsscode.pathom.workspaces.connect.union-query]
    [com.wsscode.pathom.workspaces.graphql.github-demo]
    [com.wsscode.pathom.workspaces.graphql.simple-todo-demo]
    [com.wsscode.pathom.workspaces.parallel-parser-cards]

    ; tests

    [com.wsscode.pathom.connect-test]
    [com.wsscode.pathom.connect.graphql-test]
    [com.wsscode.pathom.connect.test-test]
    [com.wsscode.pathom.core-test]
    [com.wsscode.pathom.diplomat.http.fetch-test]
    [com.wsscode.pathom.fulcro.network-test]
    [com.wsscode.pathom.gen-test]
    [com.wsscode.pathom.graphql-test]
    [com.wsscode.pathom.map-db-test]))

(defonce init (ws/mount))
