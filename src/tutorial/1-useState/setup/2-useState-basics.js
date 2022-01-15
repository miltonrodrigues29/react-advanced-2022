import React, { useState } from "react";

const UseStateBasics = () => {
  // const value = useState(1)[0];
  // const handler = useState(1)[1];
  // console.log(value, handler);

  const [text, setText] = useState(1);
  const handleClick = () => {
    setText(text + 1);
  };

  const handleClear = () => {
    setText(0);
  };
  return (
    <React.Fragment>
      <h2>{text}</h2>
      <button type="button" className="btn" onClick={handleClick}>
        Change Title
      </button>
      <button type="button" className="btn" onClick={handleClear}>
        Clear
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
