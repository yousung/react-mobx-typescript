import React from "react";
import { Todo } from "./components/Todo";
import { TodoCount } from "./components/TodoCount";
import TodoList from "./components/TodoList";

function App() {
  return (
    <>
      <TodoCount />
      <Todo />
      <TodoList />
    </>
  );
}

export default App;
