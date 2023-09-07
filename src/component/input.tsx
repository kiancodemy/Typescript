import React from "react";
import "./input.css";
interface prop {
  todo: string;
  settodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}
const input = ({ todo, settodo, handleAdd }: prop) => {
  return (
    <form className="input">
      <input
        type="text"
        value={todo}
        onChange={(e) => {
          settodo(e.target.value);
        }}
        placeholder="Enter a task"
        className="input-box"
      />
      <button className="input-submit">Go</button>
    </form>
  );
};

export default input;
