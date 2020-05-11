---
id: simple-join
title: Simple Join
sidebar_label: Simple Join
---
<!-- import RKCodeBlock from '../../src/RunKitCodeBlock' -->
import '../../src/globalDatalog'

Datalog allows you to express joins clearly and simply. You specify a join by
referencing the same variable in multiple places in a query. Let's look at the
hello world join as an example.

```ts live noInline
// Already in the browser's scope
// import * as datalog from '@datalogui/datalog'
// import { useQuery } from '@datalogui/react'

const Greetings = datalog.intoTable([
  { language: "en", greeting: "Hello" },
  { language: "es", greeting: "Hola" }
  // ...
])
const Nouns = datalog.intoTable([
  { language: "en", noun: "world" },
  { language: "es", noun: "todos" }
  // ...
])

const Greeting = () => {
  const results = useQuery(({ greeting, noun }) => {
    Greetings({ language: "en", greeting })
    Nouns({ language: "en", noun })
  })
  return results.map(({greeting, noun}) => `${greeting} ${noun}`)
}

render(<Greeting />)
```

:::note
The examples here use React, but they would work equally well with most other UI
frameworks.
:::

A full working example above is nice, but let's zoom into the actual query part.
```ts
datalog.query(({ greeting, noun }) => {
  Greetings({ language: "en", greeting })
  Nouns({ language: "en", noun })
})
```

In this query we are joining the datums from `Greetings` and `Nouns` when their
language are both `"en"`. In case you're more familiar with SQL, this is
analogous to joining with a `where` clause. For reference, here's [The equivalent SQL query](https://www.db-fiddle.com/f/5S2eqc65JYPNv6w1YL3HXS/1).

We can take this a step forward and have it return every `greeting-noun` pair
in the same language just by removing the given constrain of `"en"`.

```ts
const Query = datalog.query(({ language, greeting, noun }) => {
  Greetings({ language, greeting })
  Nouns({ language, noun })
})

Query.view().readAllData()
// =>
/*
[
  {
    "language": "en",
    "greeting": "Hello",
    "noun": "world"
  },
  {
    "language": "es",
    "greeting": "Hola",
    "noun": "todos"
  }
]
*/
```

Notice we had to introduce a new `language` variable into the query function.
This is how Datalog knows which variable is a free variable whose value will be
determined by the query and which one is already known.

That's all there is to joins! Pretty straightforward if I do say so myself.