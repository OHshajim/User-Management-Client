import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [users, setUsers] = useState([])
  useEffect(()=>{
    fetch('http://localhost:5000/users')
    .then(res=>res.json())
    .then(data=>{
      setUsers(data)
    })
  },[])
 const handleSubmit=e=>{
  e.preventDefault();
  const form = e.target;
   const name = form.name.value ;
  const email = form.email.value ;
  const user = {name,email}
  console.log(user);

 }
  return (
    <>
      <h1>Users Management Client</h1>
      <p>Users : {users.length}</p>
      {
        users.map(user=><p key={user.id}>{user.id}. {user.name} ---- {user.email} </p>)
      }
      <br />
      <h2>New user</h2>
      <form onSubmit={handleSubmit}>
      <label>Name</label> <br />
        <input type="text" name='name' placeholder='enter your name' /> <br />
        <label>Email</label> <br />
        <input type="email" name='email' placeholder='enter your email' /> <br />
        <input type="submit" value="Submit" />
      </form>
    </>
  )
}

export default App
