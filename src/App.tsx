import React, { useState } from "react";
import Input from "./component/input";

import "./App.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <span className="heading">taskify</span>
      <Input />
    </div>
  );
};

export default App;
