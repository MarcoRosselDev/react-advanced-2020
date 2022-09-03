import React, { useState } from "react";

const RandomThing = () => {
  const [texto, setTexto] = useState("random title 1");
  const changeTitle = () => {
    if (texto === "random title 1") {
      setTexto("anoter title");
    } else {
      setTexto("random title 1");
    }
  };
  return (
    <React.Fragment>
      <h2>{texto}</h2>
      <button type="button" className="btn" onClick={changeTitle}>
        click
      </button>
    </React.Fragment>
  );
};

export default RandomThing;
