(ns com.wsscode.pathom.test-helpers)

(defn mock []
  (let [calls (atom [])]
    #?(:clj
       (reify
         clojure.lang.IDeref
         (deref [_] @calls)

         clojure.lang.IFn
         (invoke [_ v1] (swap! calls conj [v1]))
         (invoke [_ v1 v2] (swap! calls conj [v1 v2]))
         (invoke [_ v1 v2 v3] (swap! calls conj [v1 v2 v3]))
         (invoke [_ v1 v2 v3 v4] (swap! calls conj [v1 v2 v3 v4]))
         (invoke [_ v1 v2 v3 v4 v5] (swap! calls conj [v1 v2 v3 v4 v5]))
         (invoke [_ v1 v2 v3 v4 v5 v6] (swap! calls conj [v1 v2 v3 v4 v5 v6]))
         (invoke [_ v1 v2 v3 v4 v5 v6 v7] (swap! calls conj [v1 v2 v3 v4 v5 v6 v7]))
         (invoke [_ v1 v2 v3 v4 v5 v6 v7 v8] (swap! calls conj [v1 v2 v3 v4 v5 v6 v7 v8]))
         (invoke [_ v1 v2 v3 v4 v5 v6 v7 v8 v9] (swap! calls conj [v1 v2 v3 v4 v5 v6 v7 v8 v9]))
         (invoke [_ v1 v2 v3 v4 v5 v6 v7 v8 v9 v10] (swap! calls conj [v1 v2 v3 v4 v5 v6 v7 v8 v9 v10]))
         (invoke [_ v1 v2 v3 v4 v5 v6 v7 v8 v9 v10 v11] (swap! calls conj [v1 v2 v3 v4 v5 v6 v7 v8 v9 v10 v11]))
         (invoke [_ v1 v2 v3 v4 v5 v6 v7 v8 v9 v10 v11 v12] (swap! calls conj [v1 v2 v3 v4 v5 v6 v7 v8 v9 v10 v11 v12]))
         (invoke [_ v1 v2 v3 v4 v5 v6 v7 v8 v9 v10 v11 v12 v13] (swap! calls conj [v1 v2 v3 v4 v5 v6 v7 v8 v9 v10 v11 v12 v13]))
         (invoke [_ v1 v2 v3 v4 v5 v6 v7 v8 v9 v10 v11 v12 v13 v14] (swap! calls conj [v1 v2 v3 v4 v5 v6 v7 v8 v9 v10 v11 v12 v13 v14]))
         (invoke [_ v1 v2 v3 v4 v5 v6 v7 v8 v9 v10 v11 v12 v13 v14 v15] (swap! calls conj [v1 v2 v3 v4 v5 v6 v7 v8 v9 v10 v11 v12 v13 v14 v15]))
         (invoke [_ v1 v2 v3 v4 v5 v6 v7 v8 v9 v10 v11 v12 v13 v14 v15 v16] (swap! calls conj [v1 v2 v3 v4 v5 v6 v7 v8 v9 v10 v11 v12 v13 v14 v15 v16]))
         (invoke [_ v1 v2 v3 v4 v5 v6 v7 v8 v9 v10 v11 v12 v13 v14 v15 v16 v17] (swap! calls conj [v1 v2 v3 v4 v5 v6 v7 v8 v9 v10 v11 v12 v13 v14 v15 v16 v17]))
         (invoke [_ v1 v2 v3 v4 v5 v6 v7 v8 v9 v10 v11 v12 v13 v14 v15 v16 v17 v18] (swap! calls conj [v1 v2 v3 v4 v5 v6 v7 v8 v9 v10 v11 v12 v13 v14 v15 v16 v17 v18]))
         (invoke [_ v1 v2 v3 v4 v5 v6 v7 v8 v9 v10 v11 v12 v13 v14 v15 v16 v17 v18 v19] (swap! calls conj [v1 v2 v3 v4 v5 v6 v7 v8 v9 v10 v11 v12 v13 v14 v15 v16 v17 v18 v19]))
         (invoke [_ v1 v2 v3 v4 v5 v6 v7 v8 v9 v10 v11 v12 v13 v14 v15 v16 v17 v18 v19 v20] (swap! calls conj [v1 v2 v3 v4 v5 v6 v7 v8 v9 v10 v11 v12 v13 v14 v15 v16 v17 v18 v19 v20])))

       :cljs
       (reify
         IDeref
         (-deref [_] @calls)

         IFn
         (-invoke [_ v1] (swap! calls conj [v1]))
         (-invoke [_ v1 v2] (swap! calls conj [v1 v2]))
         (-invoke [_ v1 v2 v3] (swap! calls conj [v1 v2 v3]))
         (-invoke [_ v1 v2 v3 v4] (swap! calls conj [v1 v2 v3 v4]))
         (-invoke [_ v1 v2 v3 v4 v5] (swap! calls conj [v1 v2 v3 v4 v5]))
         (-invoke [_ v1 v2 v3 v4 v5 v6] (swap! calls conj [v1 v2 v3 v4 v5 v6]))
         (-invoke [_ v1 v2 v3 v4 v5 v6 v7] (swap! calls conj [v1 v2 v3 v4 v5 v6 v7]))
         (-invoke [_ v1 v2 v3 v4 v5 v6 v7 v8] (swap! calls conj [v1 v2 v3 v4 v5 v6 v7 v8]))
         (-invoke [_ v1 v2 v3 v4 v5 v6 v7 v8 v9] (swap! calls conj [v1 v2 v3 v4 v5 v6 v7 v8 v9]))
         (-invoke [_ v1 v2 v3 v4 v5 v6 v7 v8 v9 v10] (swap! calls conj [v1 v2 v3 v4 v5 v6 v7 v8 v9 v10]))
         (-invoke [_ v1 v2 v3 v4 v5 v6 v7 v8 v9 v10 v11] (swap! calls conj [v1 v2 v3 v4 v5 v6 v7 v8 v9 v10 v11]))
         (-invoke [_ v1 v2 v3 v4 v5 v6 v7 v8 v9 v10 v11 v12] (swap! calls conj [v1 v2 v3 v4 v5 v6 v7 v8 v9 v10 v11 v12]))
         (-invoke [_ v1 v2 v3 v4 v5 v6 v7 v8 v9 v10 v11 v12 v13] (swap! calls conj [v1 v2 v3 v4 v5 v6 v7 v8 v9 v10 v11 v12 v13]))
         (-invoke [_ v1 v2 v3 v4 v5 v6 v7 v8 v9 v10 v11 v12 v13 v14] (swap! calls conj [v1 v2 v3 v4 v5 v6 v7 v8 v9 v10 v11 v12 v13 v14]))
         (-invoke [_ v1 v2 v3 v4 v5 v6 v7 v8 v9 v10 v11 v12 v13 v14 v15] (swap! calls conj [v1 v2 v3 v4 v5 v6 v7 v8 v9 v10 v11 v12 v13 v14 v15]))
         (-invoke [_ v1 v2 v3 v4 v5 v6 v7 v8 v9 v10 v11 v12 v13 v14 v15 v16] (swap! calls conj [v1 v2 v3 v4 v5 v6 v7 v8 v9 v10 v11 v12 v13 v14 v15 v16]))
         (-invoke [_ v1 v2 v3 v4 v5 v6 v7 v8 v9 v10 v11 v12 v13 v14 v15 v16 v17] (swap! calls conj [v1 v2 v3 v4 v5 v6 v7 v8 v9 v10 v11 v12 v13 v14 v15 v16 v17]))
         (-invoke [_ v1 v2 v3 v4 v5 v6 v7 v8 v9 v10 v11 v12 v13 v14 v15 v16 v17 v18] (swap! calls conj [v1 v2 v3 v4 v5 v6 v7 v8 v9 v10 v11 v12 v13 v14 v15 v16 v17 v18]))
         (-invoke [_ v1 v2 v3 v4 v5 v6 v7 v8 v9 v10 v11 v12 v13 v14 v15 v16 v17 v18 v19] (swap! calls conj [v1 v2 v3 v4 v5 v6 v7 v8 v9 v10 v11 v12 v13 v14 v15 v16 v17 v18 v19]))
         (-invoke [_ v1 v2 v3 v4 v5 v6 v7 v8 v9 v10 v11 v12 v13 v14 v15 v16 v17 v18 v19 v20] (swap! calls conj [v1 v2 v3 v4 v5 v6 v7 v8 v9 v10 v11 v12 v13 v14 v15 v16 v17 v18 v19 v20]))))))
