import React, { useState } from "react";

const UseStateObject = () => {
  const [person, usePerson] = useState({
    name: "marco",
    age: 29,
    message: "random message",
  });
  console.log(person);
  return <h2>useState object example</h2>;
};

export default UseStateObject;
