import React, { Component, useState } from "react";
import "./../styles/App.css";

function App() {
  const [show, setShow] = useState(false);

  const showFn = () => {
    setShow(true);
  };

  return (
    <div id="main">
      <button id="click" onClick={showFn}>
        Click
      </button>

      {show && (
        <p id="para">
          Hello, I've learnt to use the full-stack evaluation tool. This makes
          me so happy
        </p>
      )}
    </div>
  );
}

export default App;
