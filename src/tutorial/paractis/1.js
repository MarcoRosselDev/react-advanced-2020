import React, { useState } from "react";

const RandomTitle = () => {
  const [texto, setTexto] = useState("random text from useState");
  const change = () => {
    if (texto === "random text from useState") {
      setTexto("another random title");
    } else {
      setTexto("random text from useState");
    }
  };
  return (
    <React.Fragment>
      <h2>{texto}</h2>
      <button type="button" className="btn" onClick={change}>
        click
      </button>
    </React.Fragment>
  );
};

export default RandomTitle;
