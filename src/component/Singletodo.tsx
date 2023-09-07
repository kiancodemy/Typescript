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
  return (
    <form className="sing-from">
      <span className="single-text">{todo.todo}</span>
      <div className="icon-container">
        <span className="icon">
          <AiFillDelete />
        </span>
        <span className="icon">
          <AiFillEdit />
        </span>
        <span className="icon">
          <AiOutlineCheck />
        </span>
      </div>
    </form>
  );
}
