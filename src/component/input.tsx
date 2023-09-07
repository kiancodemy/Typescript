import React, { useRef } from "react";

import "./input.css";

interface prop {
  todo: string;
  settodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const input = ({ todo, settodo, handleAdd }: prop) => {
  const reff = useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(e) => {
        handleAdd(e);
        reff.current?.blur();
      }}
      className="input"
    >
      <input
        ref={reff}
        type="text"
        onChange={(e) => {
          settodo(e.target.value);
        }}
        value={todo}
        placeholder="Enter a task"
        className="input-box"
      />
      <button className="input-submit">Go</button>
    </form>
  );
};

export default input;
