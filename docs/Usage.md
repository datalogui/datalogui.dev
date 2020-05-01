---
id: usage
title: Usage
sidebar_label: Usage
---

## Creating a Table to store data

This is analogous to a database table. To create a table call `datalog.newTable<T>(schema: Schema)`. Bonus points for adding types to your schema.

```ts
import datalog from '@datalogui/datalog'

const People = datalog.newTable<{id: number, name: string}>({
  id: datalog.NumberType,
  name: datalog.StringType,
})
```

## Adding data

Add data to the table with `table.assert(datum: T)`.
```ts
People.assert({id: 0, name: "Alice"})
People.assert({id: 1, name: "Bob"})
```

## Removing data

Remove data from the table with `table.retract(datum: T)`.
```ts
People.retract({id: 1, name: "Bob"})
```

## Querying data

Query data from the table with the `datalog.query` function:
```ts

// Builds the structure of the query
const Query = datalog.query<{name: string}>(({name}) => {
  People({name})
})

// Read the values of the query by creating a view into it
Query.view().readAllData()
// => [{ name: "Alice" }]

```

## Querying data – With Joins

Let's try a more complex example. How about listing every person's name and their manager's name.

```ts
// ... People table is same as before

type ID = number
const Manages = datalog.newTable<{manager: ID, managee: ID}>({
  manager: datalog.NumberType,
  managee: datalog.NumberType,
})

// Find everyone who has a manager, and return their name and their manager's name
datalog.query<{
  managerName: string,
  personName: string,
  personID: number,
  managerID: number
}>(({managerName, personName, managerID, personID}) => {
  People({id: personID, name: personName})
  Manages({managee: personID, manager: managerID})
  People({id: managerID, name: managerName})
})

Query.view().readAllData()
// =>
/*
  [{
      managerID: 0,
      managerName: "Alice",
      personID: 1,
      personName: "Bob",
  }]
*/

```

## Querying data with Anti-Joins

It's also possible to say that something should not exist. This is declared with the `.not` method on tables inside queries. For example, let's find out who does not have a manager.

```ts
const Query = datalog.query<{ personID: number, personName: string }>(
  ({ personName, personID }) => {
    People({ id: personID })
    // Here we say: Only find personID for which this condition does `not`
    // hold. i.e. Find a personID such that there is
    // not a {managee: personID} datum inside the Manages table.
    Manages.not({ managee: personID })
})

Query.view().readAllData()
/*
[{
    personID: 0,
    personName: "Alice",
}]
*/
```

## Differential Updates

This Datalog implementation works off of differences. When you run a query, it doesn't run the query over the whole dataset every time. It only runs the query on new data. Let's see an example

```ts
// Create our People table as before
const People = datalog.newTable<{ id: number, name: string }>({
    id: datalog.NumberType,
    name: datalog.StringType,
})

People.assert({ id: 0, name: "Alice" })
const Query = datalog.query<{ name: string }>(({ name }) => {
    People({ name })
})

const queryView = Query.view()

// Ask only for recent data
queryView.recentData()
// =>
/*
    [{
        kind: datalog.Added,
        datum: { name: "Alice" }
    }]
*/

// Nothing has changed so we get nothing back
queryView.recentData()
// => null
```

`recentData` returns either null or any changes that happened on this view
since the last time you called `recentData`. Changes are either an addition of
a datum (represented by the `datalog.Added` symbol) or a removal of a datum
(represented by the `datalog.Removed` symbol).

Let's continue the example:
```ts
People.assert({ id: 2, name: "Eve" })
queryView.recentData()
// => null
```

Huh? What gives? Why did we get back null? It's because queries are a kind of
lazy. Much like me, they won't do anything unless you ask them to. In this
case, we have to ask it to run the query again because we know the dependencies
(The `People` table) have changed. Let's try that again.
```ts
// People.assert({ id: 2, name: "Eve" }) // We did this already
// Hey Query! go ahead and run yourself
Query.runQuery()
queryView.recentData()
/* =>
[{
    kind: datalog.Added,
    datum: { name: "Eve" }
}]
*/
```

That's better. We see the effect of our assertion in the People table reflected
in the output of the query. But remembering to call `runQuery()` every time can
be annoying. Thankfully we can add a small change to have the query
automatically run when any of its dependencies change.

```ts
Query.onDependencyChange(() => Query.runQuery())
```

Now what happens when we remove something from the People table?

```ts
People.retract({ id: 2, name: "Eve" })
// Note: runQuery is omitted here because it's happening
// automatically because we ran
// Query.onDependencyChange(() => Query.runQuery())

queryView.recentData()
// =>
/*
[{
    kind: datalog.Removed,
    datum: { name: "Eve" }
}]
*/

```


UIs don't change the whole state of the world very often. So it's much faster
to run queries on differences rather than the full dataset every time. With DatalogUI, you get
expressive query syntax and good performance.