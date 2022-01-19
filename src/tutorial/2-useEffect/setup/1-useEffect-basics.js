import React, { useState, useEffect } from "react";
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {

  
  const [value,setValue] = useState(0)


  const increaseCounter = ()=>
  {
    setValue(value+1)
  }

  useEffect(()=>
  {
    
    console.log("Render Use Effect")
    if(value>=1){
      document.title = `New Messages(${value})`

 
    }
    
  },[value])

  
  return <>
  <h1>{value}</h1>
  <button type="button" className="btn" onClick={increaseCounter}>Increase</button>
  </>;
};

export default UseEffectBasics;
