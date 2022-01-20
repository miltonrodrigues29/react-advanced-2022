import React, { useState, useEffect } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';
const MultipleReturns = () => {
  const [loading,setIsLoading] = useState(true)
  const [isError,setIsError] = useState(false)
  const [user,setUser] = useState('default user')

  useEffect(()=>{

    {console.log("inside condition of loading")}

    fetch(url)
    .then((resp)=>{
      if(resp.status>=200 && resp.status<=299){
        return resp.json()
      }
      else
      {
        setIsLoading(false)
        setIsError(true);
        throw new Error(resp.statusText); 
      }
    })
    .then((user)=>{
      const {login} = user;
      setUser(login);
      setIsLoading(false);
      
    })
    .catch((error)=>{
      console.log(error)
    })
  },[])

  if(loading){
    return <div>
      <h2>Loading...</h2>
      {console.log("inside condition of loading")}
    </div>
  }

  if(isError) {
    return <div>
      <h2>Error...</h2>
    </div> 
  }





  if(user) {
    return <h2>   </h2>
  }
  
  return <h2>multiple returns</h2>;
};

export default MultipleReturns;
