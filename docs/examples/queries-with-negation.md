---
id: queries-with-negation
title: Queries with negation
---
import '../../src/globalDatalog'

Sometimes it's useful to say find results for which there is no matching data
in a table. That's where the `.not` method becomes useful.

For example, if I wanted to find the actors who were in the movie _The Grand
Budapest Hotel_ but not in the movie _Moonrise Kingdom_ the query would be:

:::caution
Negation in queries can be tricky and error prone. Use with caution.
:::

```ts
// Create the InMovie Table with a schema
const InMovie = datalog.newTable({
  actor: datalog.StringType,
  movie: datalog.StringType,
});


// Load some data into the table
[ "Ralph Fiennes",
"F. Murray Abraham",
"Mathieu Amalric",
"Adrien Brody",
"Willem Dafoe",
"Jeff Goldblum",
"Harvey Keitel",
"Jude Law",
"Bill Murray",
"Edward Norton",
"Saoirse Ronan",
"Jason Schwartzman",
"Léa Seydoux",
"Tilda Swinton",
"Tom Wilkinson",
"Owen Wilson",
"Tony Revolori",
"Larry Pine",
].map(actor => ({actor, movie: "The Grand Budapest Hotel"})).forEach(datum => {
  InMovie.assert(datum)
});

[
"Bruce Willis",
"Edward Norton",
"Bill Murray",
"Frances McDormand",
"Tilda Swinton",
"Jared Gilman",
"Kara Hayward",
"Jason Schwartzman",
"Bob Balaban",
"Lucas Hedges",
"Charlie Kilgore",
"Andreas Sheikh",
"Chandler Frantz",
"Rob H. Campbell",
"L.J. Foley",
].map(actor => ({actor, movie: "Moonrise Kingdom"})).forEach(datum => {
  InMovie.assert(datum)
});


// Our query: find actors who were in _The Grand Budapest Hotel_ but not
// _Moonrise Kingdom_
const Query = datalog.query(({actor}) => {
  InMovie({actor, movie: "The Grand Budapest Hotel"})
  InMovie.not({actor, movie: "Moonrise Kingdom"})
})

Query.view().readAllData()
// => 
/*
[{"actor":"Adrien Brody"},{"actor":"F. Murray Abraham"},{"actor":"Harvey Keitel"},{"actor":"Jeff Goldblum"}, ...]
*/
```

