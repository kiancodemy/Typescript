import React from "react";
import Todo from "./modal";
import "./input.css";
import { AiFillDelete, AiFillEdit, AiOutlineCheck } from "react-icons/ai";
interface lists {
  todo: Todo;
  todos: Todo[];
  settodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

export default function Singletodo({ todo, todos, settodos }: lists) {
  const handledone = (id: number) => {
    const map = todos.map((element) =>
      element.id === id ? { ...todo, isdone: !element.isdone } : todo
    );
    settodos(map);
  };
  const handledelete = (id: number) => {
    const filtered = todos.filter((element) => element.id !== id);
    settodos(filtered);
  };
  return (
    <form className="sing-from">
      {todo.isdone ? (
        <s className="single-text">{todo.todo}</s>
      ) : (
        <span className="single-text">{todo.todo}</span>
      )}

      <div className="icon-container">
        <span className="icon" onClick={() => handledelete(todo.id)}>
          <AiFillDelete />
        </span>
        <span className="icon">
          <AiFillEdit />
        </span>
        <span onClick={() => handledone(todo.id)} className="icon">
          <AiOutlineCheck />
        </span>
      </div>
    </form>
  );
}
