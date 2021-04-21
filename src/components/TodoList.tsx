import { observer } from "mobx-react";
import * as React from "react";
import useStores from "../stores/useStores";
import CSS from "csstype";

export interface ITodoListProps {}

const TodoList = (props: ITodoListProps) => {
  const { todo } = useStores();
  const toggle = (id: number) => {
    todo.toggleTodo(id);
  };

  const del = (id: number) => {
    todo.removeTodo(id);
  };

  return (
    <div>
      <ul>
        {todo.todoData.map((todoData) => (
          <li key={todoData.id}>
            <div style={todoData.checked ? none : lineThrough}>
              {todoData.content}
            </div>
            <button
              onClick={() => {
                toggle(todoData.id);
              }}
            >
              Toggle
            </button>
            <button onClick={() => del(todoData.id)}>DEL</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const lineThrough: CSS.Properties = {
  textDecorationLine: "line-through",
};

const none: CSS.Properties = {
  textDecorationLine: "none",
};

export default observer(TodoList);
