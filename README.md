# pathom

A Clojure library designed to provide a collection of helper functions to support Om.next parser implementation.

## Usage

The main entry-point for this library is the `com.wsscode.pathom.core/pathom-read`, you can use that directly
as your `read` function on the `Om` parser, or wrap it with your own if you want futher customization (usually not needed).

The usage should look like this:

```clojure
(def parser (om/parser {:read p/pathom-read}))

(defn parse [env query]
  (parser (assoc env ::p/reader my-reader) query))
```

### Dynamic Readers



### Map readers

### Composed readers

### Entities

### Join nodes

### Path detection

### Union query handler

### Placeholder nodes

### Dispatch helpers

### Reading from maps

### Reading from javascript objects

### GraphQL helpers

### Async Reader

## License

Copyright © 2017 Wilker Lúcio

Distributed under the Eclipse Public License either version 1.0 or (at
your option) any later version.
