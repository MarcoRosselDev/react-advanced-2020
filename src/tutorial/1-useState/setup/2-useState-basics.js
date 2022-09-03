import React, { useState } from "react";

const UseStateBasics = () => {
  const [text, setText] = useState("random text for the example");
  return <h2>{text}</h2>;
};

export default UseStateBasics;
