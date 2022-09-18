import React, { useState } from "react";
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState("");
  const [isError, setIsError] = useState(false);

  return (
    <>
      <h1>{text || "marco rossel"}</h1>
      <button className="btn" onClick={() => setIsError(!isError)}>
        toggle error
      </button>
      {isError && <h1>Error...</h1>}
      {isError ? (
        <h1>puede ser una estructura más compleja</h1>
      ) : (
        <div>
          <h1>el cielo es el limite</h1>
          <h1>el cielo es el limite</h1>
          <button className="btn">el cielo es el limite</button>
        </div>
      )}
    </>
  );
};

export default ShortCircuit;
