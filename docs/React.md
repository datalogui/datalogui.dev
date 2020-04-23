---
id: react
title: React + Datalog
sidebar_label: React + Datalog
---

## How to use in React

There's a helper package called `@datalogui/react` that includes a couple helpful hooks.

At the time of this writing there's just one:

## useQuery

This hook returns all the data gathered from the query and will request a re-render when one of the query dependencies change.


Here's a typescript example:
```tsx
interface TodoInterface {
  id: string;
  text: string;
  isCompleted: boolean;
}

// Our main Todos table
const Todos = datalog.newTable<TodoInterface>({
  id: datalog.StringType,
  text: datalog.StringType,
  isCompleted: datalog.BoolType
})


function AllTodos() {
  // A simple query to return all the todos not completed
  const todos = useQuery(({id, text}: TodoInterface) => {
    Todos({id, text, isCompleted: false})
  })

  <div>
    <h2>Your todos are:</h2>
    {todos.map(todo => (<p key={todo.id}>{todo.text}</p>))}
  </div>

}
```
