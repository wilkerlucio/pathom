(ns pathom-docs.plugin-example
  (:require [com.wsscode.pathom.core :as p]))

(def my-plugin
  ; the ::p/wrap-parser entry point wraps the entire parser,
  ; this means it wraps the operation that runs once on each
  ; query that runs with the parser
  {::p/wrap-parser
   (fn [parser]
     ; here you can initialize stuff that runs only once per
     ; parser, like a durable cache across requests
     (fn [env tx]
       ; here you could initialize per-request items, things
       ; that needs to be set up once per query as we do on
       ; request cache, or the error atom to accumulate errors

       ; in this case, we are doing nothing, just calling the
       ; previous parser, a pass-through wrapper if you may
       (parser env tx)))

   ; this wraps the read function, meaning it will run once for
   ; each recursive parser call that happens during your query
   ::p/wrap-read
   (fn [reader]
     (fn [env]
       ; here you can wrap the parse read, in pathom we use this
       ; on the error handler to do the try/catch per node, also
       ; the profiler use this point to calculate the time spent
       ; on a given node

       ; this is also a good point to inject custom read keys if
       ; you need to, the profile plugin, for example, can capture
       ; the key ::p.profile/profile and export the current profile
       ; information
       (reader env)))})
