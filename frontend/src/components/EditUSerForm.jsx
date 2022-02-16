import React, { useState } from 'react'
import * as UsersServer from './usersServer'
const EditUSerForm = () => {


  const initialstate = {id:7, name: "", last_name: "", username: "", email : "",   status : "", created_at: "", updated_at: ""}
  const [user, setUsers] = useState(initialstate)
  const handleInputChange = (e) => {
    // console.log(e.tartget.name)
    setUsers({ ...user, [e.target.name]: e.target.value});
  };

  const handleSubmit= async (e) => {
    e.preventDefault();
    console.log(user)
    try{
      let res;
       res =  UsersServer.edituser(user, user.id);
       const data =  res.json();
       console.log(data)
    }catch(error){
      console.log(error)

    }

  }
  return (

    <form onSubmit={handleSubmit}>
      <label>ID</label>
      <input type="text" name="id" value = {user.id} onChange={handleInputChange}/>
      <label>Name</label>
      <input type="text" name="name" value = {user.name} onChange={handleInputChange}/>
      <label>Last Name</label>
      <input type="text" name="last_name" value = {user.last_name} onChange={handleInputChange}/>
      <label>Username</label>
      <input type="text" name="username" value = {user.username} onChange={handleInputChange}/>
      <label>email</label>
      <input type="text" name="email"  value = {user.email} onChange={handleInputChange}/>
      <label>Status</label>
      <input type="text" name="status" value = {user.status} onChange={handleInputChange}/>
      <button>Edit user</button>
    </form>
  )
}
export default EditUSerForm