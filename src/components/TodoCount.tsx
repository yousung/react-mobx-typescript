import * as React from "react";
import useStores from "../stores/useStores";

export interface ITodoCountProps {}

export function TodoCount(props: ITodoCountProps) {
  const { todo } = useStores();
  return <div>{todo.totalCount}</div>;
}
