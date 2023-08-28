import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';

const Login = () => {
  const [token, setToken] = useState(false); 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const emailChange = (event) => {
    setEmail(event.target.value);
  };

  const passwordChange = (event) => {
    setPassword(event.target.value);
  };

  const submitOfLogin = (event) => {
    event.preventDefault(); 
    const loginuser = {
      email: email,
      password: password,
    };
    setEmail('');
    setPassword('');
    UserLogin(loginuser);
  };

  const UserLogin = async (loginuser) => {
    const response = await fetch(
      'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBeMKC3JVQQRqJtvlEAPGNx9o2FM6FEE74',
      {
        method: 'POST',
        body: JSON.stringify(loginuser),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    const data = await response.json();
    if (data.idToken) {
      setToken(true); 
      console.log("hh")
    } else {
      console.log('error');
    }
  };

  return (
    <section>
   
      <form onSubmit={submitOfLogin}>
        <div>
          <span>
            <label htmlFor='email'>Email</label>
          </span>
          <input type='email' value={email} onChange={emailChange} />
        </div>
        <div>
          <span>
            <label htmlFor='Password'>Password</label>
          </span>
          <input type='password' value={password} onChange={passwordChange} />
        </div>
        <button type='submit'>Login</button> 
      </form>
      
      {token &&(<Navigate to="/home">Home</Navigate>)}
    </section>
  );
};

export default Login;
