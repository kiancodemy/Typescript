import React from "react";
import { useState, useRef, useEffect } from "react";
import Todo from "./modal";
import "./input.css";
import { AiFillDelete, AiFillEdit, AiOutlineCheck } from "react-icons/ai";
interface lists {
  todo: Todo;
  todos: Todo[];
  settodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

export default function Singletodo({ todo, todos, settodos }: lists) {
  const refe = useRef<HTMLInputElement>();

  const [edit, setedit] = useState<boolean>(false);
  const [edited, setedited] = useState<string>("");
  const handledit = () => {
    if (!todo.isdone && !edit) {
      setedit(!edit);
    }
  };
  useEffect(() => {
    refe.current?.focus();
  }, [edit]);
  const handlesubmit = (e: React.FormEvent, id: Number) => {
    e.preventDefault();
    const edit = todos.map((element) =>
      element.id === id ? { ...todo, todo: edited } : todo
    );
    settodos(edit);
    setedit(false);
  };

  const handledone = (id: Number) => {
    const map = todos.map((element) =>
      element.id === id ? { ...todo, isdone: !element.isdone } : todo
    );
    settodos(map);
  };
  const handledelete = (id: Number) => {
    const filtered = todos.filter((element) => element.id !== id);
    settodos(filtered);
  };
  return (
    <form
      onSubmit={(e) => {
        handlesubmit(e, todo.id);
      }}
      className="sing-from"
    >
      {edit ? (
        <input
          ref={refe}
          className="edit"
          value={edited}
          onChange={(e) => setedited(e.target.value)}
        ></input>
      ) : todo.isdone ? (
        <s className="single-text">{todo.todo}</s>
      ) : (
        <span className="single-text">{todo.todo}</span>
      )}

      <div className="icon-container">
        <span className="icon" onClick={() => handledelete(todo.id)}>
          <AiFillDelete />
        </span>
        <span onClick={handledit} className="icon">
          <AiFillEdit />
        </span>
        <span onClick={() => handledone(todo.id)} className="icon">
          <AiOutlineCheck />
        </span>
      </div>
    </form>
  );
}
