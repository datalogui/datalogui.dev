---
id: querying-queries
title: Querying queries
---
import '../../src/globalDatalog'

Queries can be queried themselves. This is a useful for composing queries
together.

For example, imagine we are building a Twitter clone using datalog. We can
build a User's timeline by querying `Posts` and `Follows`. But what if we also
wanted to keep track of the number of unseen posts in the timeline? We could
copy paste the original query and tweak it, or we could query our original
query!

Here's how it looks in practice:

```ts live noInline
// Define our tables and add some data into them.
const Follows = datalog.intoTable([
  { username: "marco", follows: "daiyi" },
  { username: "marco", follows: "noah" },
  // ...
])

const Posts = datalog.intoTable([
  { username: "daiyi", content: "sourdough is a great buttermilk substitute! here's some sourdough cheddar cornbread", id: 0 },
  { username: "noah", content: "the earliest glitch art is Renaissance humanists thinking that colorless paint statues were cool", id: 1 },
  // ...
])

const UnreadPosts = datalog.intoTable([
  { messageID: 0 },
  // ...
])

// Define our timeline query. Find every post from users I follow
const TimelineQueryFn = (username) => ({content, follows, messageID}) => {
  Follows({username, follows})
  Posts({username: follows, content, id: messageID})
}

const Timeline = ({username, posts}) => {
  return <>
    <h3> {username}'s Timeline: </h3>
    {posts}
  </>
}

const Home = ({username}) => {
  const TimelineQuery = TimelineQueryFn(username)
  const posts = useQuery(TimelineQuery).map(({follows, content, messageID}) => {
      return <p key={messageID}> {follows}: {content}</p>
  })

  const unreadCount = useQuery(({messageID}) => {
    TimelineQuery({messageID})
    UnreadPosts({messageID})
  }).length
  const pluralized = unreadCount === 1 ? 'post' : 'posts'


  return <>
    {unreadCount > 0 ? <h4>{unreadCount} new {pluralized}</h4> : null}
    <Timeline username={username} posts={posts} />
  </>

}

render(<Home username="marco" />)
```

