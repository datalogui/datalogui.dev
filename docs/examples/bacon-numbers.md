---
id: bacon-numbers
title: Bacon Numbers
---
import '../../src/globalDatalog'

Now for a more practical example. Bacon Numbers are the degrees of separation
from a given actor to Kevin Bacon. For example, if Elvis Presley was in "Change
of Habit" with Edward Asner who was in "JFK" with Kevin Bacon, then Elvis
Presley has a Bacon Number of 2. Let's see how we would use datalog to solve
this problem:

```ts live noInline
const InMovie = datalog.intoTable([
  { MovieName: "Change of Habit", Actor: "Elvis Presley" },
  { MovieName: "Change of Habit", Actor: "Edward Asner" },
  { MovieName: "Change of Habit", Actor: "Mary Tyler Moore" },
  { MovieName: "Wild Things", Actor: "Robert Wagner" },
  { MovieName: "JFK", Actor: "Edward Asner" },
  { MovieName: "JFK", Actor: "Kevin Bacon" },
  { MovieName: "Wild Things", Actor: "Kevin Bacon" },
  // ... More Movies
])
const BaconNumbers = datalog.intoTable([
  { Actor: "Kevin Bacon", number: 0 },
])

// Initialize all actors with a bacon number of infinity
datalog.query(({ BaconNumber, Actor, NextActor, MovieName }) => {
  InMovie({ Actor })
  BaconNumbers.not({ Actor })
}).view().readAllData().map(({ Actor }) => {
  BaconNumbers.assert({ Actor, number: Infinity })
})

const BaconNumberQuery = datalog.query(({ BaconNumber, Actor, NextActor, CurrentBaconNumber, MovieName }) => {
  InMovie({ Actor, MovieName })
  InMovie({ MovieName, Actor: NextActor })
  BaconNumbers({ Actor, number: BaconNumber })
  BaconNumbers({ Actor: NextActor, number: CurrentBaconNumber })
})

BaconNumberQuery.viewExt()
  .mapEffect((recentDatum) => {
    // If it's a join on the same actor, we'll pass
    if (recentDatum.datum.Actor === recentDatum.datum.NextActor) {
      return
    }
    switch (recentDatum.kind) {
      case datalog.Added: {
        const {
          NextActor: Actor,
          BaconNumber,
          CurrentBaconNumber,
        } = recentDatum.datum

        if (CurrentBaconNumber > BaconNumber + 1) {
          // We found a smaller bacon number. Let's swap out the datum
          BaconNumbers.retract({ Actor, number: CurrentBaconNumber })
          BaconNumbers.assert({ Actor, number: BaconNumber + 1 })
        }
        break
      }
      // Ignoring this for now
      case datalog.Removed:
        break;
      case datalog.Modified:
        throw new Error(
          "Unhandled. We don't expect queries to give us a modified change."
        )
    }
  })
  .onChange(() => {
    // After we've mapped the effect, we'll run the query again to
    // update our results
    BaconNumberQuery.runQuery()
  })

// A simple component to show off our data
const BaconNumbersComponent = () => {
  const baconNumbersView = useMemo(() => BaconNumbers.view(), [])
  const [baconNumbers, updateBaconNumbers] = useState(baconNumbersView.readAllData())

  // Update our local react state if the query changes
  useEffect(() => {
    return baconNumbersView.onChange(() => updateBaconNumbers(baconNumbersView.readAllData()))
  }, [baconNumbersView])

  return <pre>
    {JSON.stringify(baconNumbers, null, 2)}
  </pre>
 }

render(<BaconNumbersComponent />)
```

The gist is that we use this query:
```ts
const BaconNumberQuery = datalog.query(({ BaconNumber, Actor, NextActor, CurrentBaconNumber, MovieName }) => {
  InMovie({ Actor, MovieName })
  InMovie({ MovieName, Actor: NextActor })
  BaconNumbers({ Actor, number: BaconNumber })
  BaconNumbers({ Actor: NextActor, number: CurrentBaconNumber })
})
```

to find a link between an `Actor` and a `NextActor`. We also pull in their Bacon
Numbers so we can compare if using the link to `Actor` is better than using the
`NextActor`'s `CurrentBaconNumber`. The comparison is done in `mapEffect`. If
the link through `Actor` is a better Bacon Number then we change `NextActor`'s
Bacon Number to be that.

As an exercise for the reader, try changing this so that it shows the trail of
movies too.