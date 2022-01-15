import React from "react";

const ErrorExample = () => {
  let title = "random title";
  const handleClick = () => {
    console.log(`Before click:${title}`);
    title = "random people";
    console.log(`after click:${title}`);
  };
  return (
    <React.Fragment>
      <h2>{title}</h2>
      <button type="button" className="btn" onClick={handleClick}>
        Change Title
      </button>
    </React.Fragment>
  );
};

export default ErrorExample;
