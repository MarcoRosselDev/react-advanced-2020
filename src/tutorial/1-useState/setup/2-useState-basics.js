import React, { useState } from "react";

const UseStateBasics = () => {
  const [text, setText] = useState("random text for the example");
  const changedTitle = () => {
    setText("another random title");
  };
  return (
    <React.Fragment>
      <h2>{text}</h2>
      <button type="button" className="btn" onClick={changedTitle}>
        click me
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
