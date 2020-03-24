import React, { createContext } from "react";

import useTodoState from "../hooks/useTodoState";

const defaultTodos = [
  { id: 1, task: "Learn ReactJS", completed: false },
  { id: 2, task: "Learn Typescript", completed: true }
];

export const TodosContext = createContext();

export function TodosProvider(props) {
  const todo = useTodoState(defaultTodos);

  return (
    <TodosContext.Provider value={todo}>{props.children}</TodosContext.Provider>
  );
}
