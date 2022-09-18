import React, { useState } from "react";
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState("");
  const [isError, setIsError] = useState(false);

  return (
    <>
      <h1>{text || "marco rossel"}</h1>
      <button className="btn">toggle error</button>
      {isError && <h1>Error...</h1>}
    </>
  );
};

export default ShortCircuit;
