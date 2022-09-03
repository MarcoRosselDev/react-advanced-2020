import React, { useState } from "react";

const RandomTitle = () => {
  let title = "random title";
  const [texto, setTexto] = useState("random text from useState");
  return (
    <React.Fragment>
      <h2>{title}</h2>
    </React.Fragment>
  );
};

export default RandomTitle;
