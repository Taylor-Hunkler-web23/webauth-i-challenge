import React, {useState, useEffect} from 'react';
import axios from 'axios'

const Login = (props) => {


    const credentials = {
        username: '',
        password: ''
    }

    const [newLogin, setNewLogin] = useState(credentials)

    const handleChange = event => {
        setNewLogin({
            ...newLogin,
            [event.target.name]: event.target.value
        });

    }


    const handleLogin = event => {
        event.preventDefault();

 
axios.post('http://localhost:5000/auth/login', newLogin)            
            .then(response => console.log(response))
              
            

            
            .catch(err =>{
                console.log("Incorrect username or password")});



    }


    return (
        <>
           
            <form className="login-form" onSubmit={handleLogin}>
                <h1>Login</h1>
                <input
                    type="text"
                    name="username"
                    value={newLogin.username}
                    onChange={handleChange}
                    placeholder="Username"
                />
                <input
                    type="password"
                    name="password"
                    value={newLogin.password}
                    onChange={handleChange}
                    placeholder="Password"
                />

                <button>Log in</button>

              
            </form>
        </>
    );
};

export default Login;