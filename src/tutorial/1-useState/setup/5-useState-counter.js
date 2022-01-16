import React, { useState } from "react";

const UseStateCounter = () => {
  const [value, setValue] = useState(0);
  const iCounter = () => {
    setValue(value + 1);
  };
  const dCounter = () => {
    setValue(value - 1);
  };
  const rCounter = () => {
    setValue(0);
  };

  const complexCounter = () => {
    setTimeout(() => {
      setValue((prevState) => {
        console.log(prevState);
        return prevState + 1;
      });
    }, 2000);
  };
  return (
    <>
      <section style={{ margin: "4rem 0" }}>
        <h2>Regular Counter</h2>
        <h1>{value}</h1>
        <button type="button" className="btn" onClick={dCounter}>
          Decrease
        </button>
        <button type="button" className="btn" onClick={rCounter}>
          Reset
        </button>
        <button type="button" className="btn" onClick={iCounter}>
          Increase
        </button>
      </section>
      <section style={{ margin: "4rem 0" }}>
        <h2>More Complex Counter</h2>
        <h1>{value}</h1>
        <button type="button" className="btn" onClick={complexCounter}>
          Increase Later
        </button>
      </section>
    </>
  );
};

export default UseStateCounter;
