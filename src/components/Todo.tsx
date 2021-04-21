import * as React from "react";
import useStores from "../stores/useStores";

export interface ITodoProps {}

export function Todo(props: ITodoProps) {
  const { todo } = useStores();
  const [content, setContent] = React.useState<string>("");

  const addTodo = () => {
    if (!!content.trim()) {
      todo.addTodo(content);
    }

    setContent("");
  };

  return (
    <div>
      <input
        type="text"
        onChange={(e) => setContent(e.target.value)}
        value={content}
      />

      <button onClick={addTodo}>확인</button>
    </div>
  );
}
