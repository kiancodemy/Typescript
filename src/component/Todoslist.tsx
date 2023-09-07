import React from "react";
import Todo from "./modal";
import Singletodo from "./Singletodo";

import "./input.css";
interface list {
  todos: Todo[];
  settodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

export default function Todoslist({ todos, settodos }: list) {
  let final = todos.map((todo) => {
    return (
      <Singletodo
        key={todo.id.toString()}
        todo={todo}
        todos={todos}
        settodos={settodos}
      />
    );
  });
  return <div className="todo">{final}</div>;
}
