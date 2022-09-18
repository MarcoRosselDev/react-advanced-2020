import React, { useState } from "react";
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState("");
  const firstValue = text || "hello world";
  const secondValue = text && "hello world";

  return (
    <>
      <h1>{text || "marco rossel"}</h1>
      {text && <h1>hola mundo</h1>}
      {!text && <h1>hola mundo</h1>}
    </>
  );
};

export default ShortCircuit;
