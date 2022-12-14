import React, { useState, useEffect } from "react";
const url = "https://api.github.com/users/QuincyLarson";
const MultipleReturns = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(true);
  const [user, setUser] = useState("default user");

  useEffect(() => {}, []);

  if (isLoading) {
    return (
      <div>
        <h2>Loading...</h2>;
      </div>
    );
  }
  if (isError) {
    return (
      <div>
        <h2>Error...</h2>
      </div>
    );
  return (
      <div>
        <h2> ${user}</h2>
      </div>
  }
  return <h2>multiple returns</h2>;
};

export default MultipleReturns;
