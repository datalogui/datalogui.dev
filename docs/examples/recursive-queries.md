---
id: recursive-queries
title: Recursive Queries
---
import '../../src/globalDatalog'

Recursive queries are a way of using a query to add data back into a query. It's
a tool that let's you define complex logic in a simple way.

A classic problem in computer science is figuring out if a given graph of nodes
is connected or not. We say a graph is connected if you can reach every node
from every other node. We'll solve this problem to demonstrate recursive
queries.

```ts live noInline
// Build our tables
// This represents the nodes we've seen in our traversal so far.
// We know if a graph is connected if every node is present in this table
const Nodes = datalog.newTable({
    node: datalog.NumberType,
})

// This represents the edges between nodes
// For example {from: 1, to: 2} represents an edge from node 1 to node 2
const Edges = datalog.newTable({
    from: datalog.NumberType,
    to: datalog.NumberType,
})

// Some initial Edges data
const initialEdgesData = [
    [1, 2],
    [2, 3],
    [3, 4],
    [4, 5]
]
initialEdgesData.forEach(([from, to]) => {
    Edges.assert({ from, to })
})

// We'll start the search at node 1. This could be any node
const initialNodesData = [
    [1],
]
initialNodesData.forEach(([node]) => {
    Nodes.assert({ node })
})

const Query = datalog.query(({ node, to }) => {
    Nodes({ node })
    Edges({ from: node, to })
})

Query.viewExt().mapEffect(({kind, datum}) => {
  // Because this datalog is differential we have to handle the cases
  // where datum is Added, Removed, or Modified
  if (kind === datalog.Added) {
    Nodes.assert({node: datum.to})
  } else if (kind === datalog.Removed) {
    // We do the opposite of what we did above
    Nodes.retract({node: datum.to})
  } else {
    // Here for completeness, but We don't get a modification kind from queries.
    throw new Error("Unexpected modification. Shouldn't happen")

  }
}).onChange(() => Query.runQuery()) // Rerun the query when the inputs change


const NodesConnectedTo1 = () => (
  <pre>
    {JSON.stringify(Nodes.view().readAllData().map(({node}) => node))}
  </pre>
)

render(<NodesConnectedTo1 />)
```

Most of the code above is boilerplate setup code, the real meat is this query:
```ts
const Query = datalog.query(({ node, to }) => {
    Nodes({ node })
    Edges({ from: node, to })
})

Query.viewExt().mapEffect(({kind, datum}) => {
  // Because this datalog is differential we have to handle the cases
  // where datum is Added, Removed, or Modified
  if (kind === datalog.Added) {
    Nodes.assert({node: datum.to})
  } else {
    Nodes.retract({node: datum.to})
  }
  //...
}).onChange(() => Query.runQuery()) // Rerun the query when the inputs change
```

The trick is that we assert new data on the table whenever the query gives us
new data. We are essentially feeding data from a query back into the table.

This pattern is common enough that we added a shortcut:

```ts
const Query = datalog.query(({ node, to }) => {
    Nodes({ node })
    Edges({ from: node, to })
}).implies(({ to }) => {
    Nodes({ node: to })
})
```

Is the same thing, but much more concise. Note that the `implies` method is very
limited, and if you do anything more complicated you will probably want the
`mapEffect` method instead. Next we'll look at an even more complex example:
Bacon Numbers!
