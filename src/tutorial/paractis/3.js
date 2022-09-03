import React, { useState } from "react";

const RandomThing = () => {
  const [texto, setTexto] = useState("random title 1");
  return (
    <React.Fragment>
      <h2>{texto}</h2>
    </React.Fragment>
  );
};

export default RandomThing;
