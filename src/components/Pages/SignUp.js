import React, { useState } from "react";
import classes from './SignUp.module.css'
import { Link, NavLink } from "react-router-dom";
import Login from "./Login";
const SignUp = () => {
  const[username,setUsername]=useState("")
  const[email,setEmail]=useState("")
  const[password,setPassword]=useState("")
  const[confirmpassword,setConfirmpassword]=useState("")
   const usernameHandler=(event)=>{
    setUsername(event.target.value);

   }
   const emailHandler=(event)=>{
    setEmail(event.target.value);

   }
   const passwordHandler=(event)=>{
    setPassword(event.target.value);

   }
   const confirmpassHandler=(event)=>{
    setConfirmpassword(event.target.value);

   }
   const submit=(event)=>{
    event.preventDefault();
    const usersignedup={
      username:username,
      email:email,
      password:password,
      confirmpassword:confirmpassword,
   }
   setUsername("");
   setEmail("");
   setPassword("");
   setConfirmpassword("");

   userSignedIn(usersignedup)

   }
   const userSignedIn=async(usersignedup)=>{
    const response=await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBeMKC3JVQQRqJtvlEAPGNx9o2FM6FEE74',{
      method:"POST",
      body:JSON.stringify(usersignedup),
       headers:{
          'Content-Type':'Application/json'
        },
    })
    const data=await response.json();
    console.log(data);
   }
  return (
    <section className={classes.section}>
      <form onSubmit={submit} className={classes.form}>
        <div>
        <span className={classes.lable}>
          <label htmlFor="Name">Name</label>
          </span>
          <input
           className={classes.input}
            type="text"
            value={username}
            onChange={usernameHandler}
            required
          />
          
        </div>
        <div>
        <span className={classes.label}>
          <label htmlFor="Email">Email</label>
          </span>
          <input type="email"  className={classes.input} value={email} onChange={emailHandler} required />
        </div>
        <div>
        <span className={classes.label}>
          <label htmlFor="Password">Password</label>
          </span>
          <input

            type="password"
            className={classes.input}
            value={password}
            onChange={passwordHandler}
            required
          />
        </div>
        <div>
        <span className={classes.label}>
          <label htmlFor="ConfirmPassword">ConfirmPassword</label>
          </span>
          <input
            type="password"
            className={classes.input}
            value={confirmpassword}
            onChange={confirmpassHandler}
            required
          />
        </div>
        <button className={classes.button}>SignIn</button>
        If you have an account?<NavLink to='/login'>Login</NavLink>
      </form>
    </section>
  );
};

export default SignUp;
