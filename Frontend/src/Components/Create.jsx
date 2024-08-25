import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Create() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState(0);
  const [error, seterror] = useState("");
  const navigate=useNavigate();
 
 
 
  async function handleSubmit(e) {
    e.preventDefault();
    const addUser = { name, email, age }
    const response = await fetch("http://localhost:3000", {
      method: "POST",
      body: JSON.stringify(addUser),
      headers: {
        "Content-Type": "application/json",
      }
    })
    const result = await response.json();
    if (!response.ok) {
      console.log(result.error)
      seterror(result.error);
    }
    if (response.ok) {
     
      seterror("");
      setName("");
      setEmail("");
      setAge(0);
      navigate("/all");
      
     

    }


  }


  return (
    <div className='container my-2'>
      {error && <div className="alert alert-danger" >
        {error}
      </div>}
     

      <h2 className='text-center'>Enter The Data</h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Enter Name</label>
          <input type="text" value={name} onChange={(e) => { setName(e.target.value) }} className="form-control" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label className="form-label">Enter Email</label>
          <input type="email" value={email} onChange={(e) => { setEmail(e.target.value) }} className="form-control" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label className="form-label">Enter Age</label>
          <input type="number" value={age} onChange={(e) => { setAge(e.target.value) }} className="form-control" aria-describedby="emailHelp" />
        </div>


        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default Create
