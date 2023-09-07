import React from "react";
import Todo from "./modal";
import Singletodo from "./Singletodo";

import "./input.css";
interface list {
  todos: Todo[];
  settodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

export default function Todoslist({ todos, settodos }: list) {
  return (
    <div className="todo">
      {todos.map((todo) => (
        <Singletodo
          key={todo.id.toString()}
          todos={todos}
          settodos={settodos}
        ></Singletodo>
      ))}
    </div>
  );
}
