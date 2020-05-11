---
id: follows-in-common
title: Follows in common
sidebar_label: Follows in common
---
import '../../src/globalDatalog'

On Twitter and many other social networks there's a useful feature of showing
you which follows you have in common with another user. In this example we'll
show how to implement this as a simple Datalog query.

:::note
You can play along inside your browser's console!
:::

First we'll create the tables that hold our data. Notice that the data is not
nested. This is a feature! Data is laid out flat, or normalized. This gives us
greater flexibility in querying data and prevents us from having to duplicate
information across different parts of a deeply nested data structure since each
row in a table only holds the data that *it* cares about.

```ts
// Already in the browser's scope
// import * as datalog from '@datalogui/datalog'

// Not actually needed for this example
const Users = datalog.intoTable([
  { username: "daiyi" },
  { username: "marco" },
  { username: "noah" },
  { username: "paul" }
  // ...
])

const Follows = datalog.intoTable([
  { username: "marco", follows: "daiyi" },
  { username: "noah",  follows: "daiyi" },
  { username: "marco", follows: "paul" },
  { username: "noah",  follows: "paul" },
  { username: "marco", follows: "noah" },
  { username: "noah",  follows: "marco" },
  { username: "paul",  follows: "noah" },
  // ...
])
```

Simple enough. We have a table that defines the Users in this network, and
another table that defines who follows whom. Let's write a query that
will ask for myself (`"marco"`) and `"noah"`, who do we both follow?

``` ts
const Query = datalog.query(({commonFollow}) => {
  Follows({username: "marco", follows: commonFollow})
  Follows({username: "noah", follows: commonFollow})
})

// The Query variable represents the query, but if we want to see that data we
// need to use the `.view()` method. The follow `.readAllData()` call returns
// all the data from the query instead of just the recent results from any
// recent changes.
Query.view().readAllData()

// => [{"commonFollow":"daiyi"},{"commonFollow":"paul"}]
```

4 lines of code for a common followers query! not bad.
