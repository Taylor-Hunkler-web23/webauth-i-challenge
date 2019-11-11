import React, { useState } from "react";
import axios from 'axios'

const SignUp = (props) => {

    const credentials = {
      username: '',
      password: ''
    }
    const [signUp, setSignUp] = useState(credentials)
  
    const handleChange = event => {
      event.persist()
      setSignUp({
        ...signUp,
        [event.target.name]: event.target.value
      });
    }
  
    const handleLogin = event => {
      event.preventDefault();
      axios
        .post('http://localhost:5000/auth/register', signUp)
        .then(response => console.log(response))
              
            

            
        .catch(err =>{
            console.log("Incorrect username or password")});



}

    return (
      <>
     
        <form className="signup-form" onSubmit={handleLogin}>
          <h1>Sign up</h1>
          <input
            type="text"
            name="username"
            value={signUp.username}
            onChange={handleChange}
            placeholder="Username"
          />
          <input
            type="password"
            name="password"
            value={signUp.password}
            onChange={handleChange}
            placeholder="Password"
          />
   
          <button>Sign up</button>
      
        </form>
      </>
    );
  };
  
  export default SignUp;
  