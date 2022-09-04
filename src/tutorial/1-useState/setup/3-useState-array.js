import React from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  // usar React.useState funciona = pero evita importarlo from react
  const [people, setPeople] = React.useState(data);
  const removeItem = (id) => {
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };
  return (
    <>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button className="btn" onClick={() => removeItem(id)}>
              remove item
            </button>
          </div>
        );
      })}
      <button className="btn" onClick={() => setPeople([])}>
        clean
      </button>
    </>
  );
};

export default UseStateArray;
