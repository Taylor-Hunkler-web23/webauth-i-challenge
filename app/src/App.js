import React, {useState, useEffect} from 'react';

import './App.css';
import axios from 'axios'
import Login from './components/login.js'
import SignUp from './components/signup.js'

function App() {
const [users, setUsers] =useState([]);

useEffect(() =>{
  axios.get('http://localhost:5000/auth/users', {
    withCredentials: true
  })
  .then (res => {
    console.log(res.data);
    setUsers(res.data)
  })
  .catch( error=> console.log(error))
}, [])

  return (
    <div className="App">
      <SignUp/>
   <Login/>

   <div>

   </div>
   <h1>Users</h1>
   {
     users.map(user => <div> <h1>Username: {user.username}</h1></div>)
   }
    </div>
  );
}

export default App;
