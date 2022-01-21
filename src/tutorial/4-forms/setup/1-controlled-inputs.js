import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {

  const [firstName,setFirstName] = useState('')
  const [email,setEmail] = useState('')
  const [people,setPeople] = useState([])

  const handleSubmit = (e)=>{
    e.preventDefault();

    if(firstName && email)
    {
      // const person = {firstName:firstName,email:email}
      const person = { 
        id:new Date().getTime().toString(),
        firstName,
        email} //ES6 format, both works fine
      setPeople((people)=>{
        return [...people,person]
      });
      console.log(person)
      setFirstName('')
      setEmail('')
    }
    else{
      console.log("Empty Values")
    }
    
  }
  return <>
  <article>
    <form className='form' onSubmit={handleSubmit}>
      <div className="form-control">
        <label htmlFor="firstName">Name: </label>
        <input type='text' id="firstName" name='firstName' value={firstName} onChange={(e)=>{

          setFirstName(e.target.value)
        }}></input>
      </div>
      <div className="form-control">
        <label htmlFor="email">Email: </label>
        <input type='email' id="email" name='email' value={email} onChange={(e)=>{
          setEmail(e.target.value)
        }}></input>
      </div>
      <button type='submit' onAuxClick={handleSubmit}> Add Person</button>
    </form>

    {
      people.map((person)=>{
        const {id,firstName,email} = person
        return  <div className='item' key={id}>
          <h4>{firstName}</h4>
          <p>{email}</p>
        </div>
      })
    }

  </article>
  </>
};

export default ControlledInputs;
