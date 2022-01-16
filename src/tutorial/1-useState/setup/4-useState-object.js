import React, { useState } from "react";

const UseStateObject = () => {
  // const [person, setPerson] = useState({
  //   name: "Milton",
  //   age: 24,
  //   message: "random message",
  // });

  const [name, setName] = useState("Milton");
  const [age, setAge] = useState(24);
  const [message, setMessage] = useState("Random title");
  const changeMessage = () => {
    setMessage("Hello World");
    // setPerson({ ...person, message: "Hello World" });
  };

  return (
    <>
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h3>{message}</h3>
      <button type="button" className="btn" onClick={changeMessage}>
        Change Message
      </button>
    </>
  );
};

export default UseStateObject;
