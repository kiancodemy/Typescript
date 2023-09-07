import React, { useState } from "react";
import Input from "./component/input";
import Todoslist from "./component/Todoslist";
import "./App.css";
import Todo from "./component/modal";

const App: React.FC = () => {
  const [todo, settodo] = useState("");
  const [todos, settodos] = useState<Todo[]>([]);
  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      settodos([...todos, { id: Date.now(), todo: todo, isdone: false }]);

      settodo("");
    }
  };
  return (
    <div className="App">
      <span className="heading">taskify</span>
      <Input handleAdd={handleAdd} todo={todo} settodo={settodo} />
      <Todoslist todos={todos} settodos={settodos}></Todoslist>
    </div>
  );
};

export default App;
