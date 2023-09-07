import React from "react";
import Todo from "./modal";
import "./input.css";
import { AiFillDelete, AiFillEdit, AiOutlineCheck } from "react-icons/ai";
interface list {
  todos: Todo;
  settodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

export default function Singletodo({ todos, settodos }: list) {
  return (
    <form className="sing-from">
      <span className="single-text">{todos.todo}</span>
    </form>
  );
}
