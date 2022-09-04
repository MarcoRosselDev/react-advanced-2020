import React, { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "marco",
    age: 29,
    message: "random message",
  });

  const [name, setName] = useState("marcus");
  const [age, setAge] = useState(30);
  const [message, setMessage] = useState("mensaje random de ejemplo");

  const changeMessage = () => {
    // setPerson({ ...person, message: "another message" });
  };
  return (
    <>
      {/* <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.message}</h3> */}
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h3>{message}</h3>
      <button className="btn" onClick={changeMessage}>
        change message
      </button>
    </>
  );
};

export default UseStateObject;
