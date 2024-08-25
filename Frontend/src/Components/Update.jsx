import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

function Update() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState(0);
  const [error, seterror] = useState("");
  const {id}=useParams();
  const navigate = useNavigate();
 

  async function getSingleUser(){
    
    const response=await fetch(`http://localhost:3000/${id}`)
    const result=await response.json();
    if (!response.ok) {
      console.log(result.error)
      seterror(result.error);
    }
    if (response.ok) {
     seterror("");
     setName(result.name);
     setEmail(result.email);
     setAge(result.age);

    }

  }

  useEffect(()=>{
    getSingleUser();
  },[])
async function handleUpdate(e) {
  e.preventDefault();
  const updatedUser = { name, email, age }
  const response = await fetch(`http://localhost:3000/${id}`, {
    method: "PATCH",
    body: JSON.stringify(updatedUser),
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
    navigate("/all");
   
    
  }



}


  return (
    <div className='container my-2'>
    {error && <div className="alert alert-danger" >
      {error}
    </div>}
   

    <h2 className='text-center'>Edit The Data</h2>

    <form onSubmit={handleUpdate} >
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


      <button type="submit" className="btn btn-primary">Update</button>
    </form>
  </div>
  )
}

export default Update
