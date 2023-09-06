import React from "react";
import "./input.css";
const input: React.FC = () => {
  return (
    <form className="input">
      <input type="text" placeholder="Enter a task" className="input-box" />
      <button className="input-submit">Go</button>
    </form>
  );
};

export default input;
