import React, { useState } from 'react'

const Profile = () => {
    const[fullname,setFullname]=useState("");
    const[photo,setPhoto]=useState("");
    const nameChangehandler=(event)=>{
        setFullname(event.current.value);
    }
    const photoChangeHandler=(event)=>{
        setPhoto(event.current.value);
    }
    const submit=(event)=>{
        event.preventdefault();
        const profile={
            fullname:fullname,
            photo:photo,
        }
        updateProfile(profile);
        setFullname("");
        setPhoto("");
    }
    const updateProfile=async (profile)=>{
      const response=await fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyBeMKC3JVQQRqJtvlEAPGNx9o2FM6FEE74',{
        method:"POST",
        body:JSON.stringify(profile),
        headers: {
            'Content-Type': 'application/json',
          },
      })
      const data=await(response.json());
      if(response.ok){
        console.log(data);
      }
      else{
        console.log("error");
      }
    }
  return (
    <div>
      <form onSubmit={submit}>
      <h3>Contact Deatails</h3>
      <label htmlFor='fullName'>Full Name</label>
      <input type='text' value={fullname} onChange={nameChangehandler} />

      <label htmlFor='profilephotourl'>Profile Photo url</label>
      <input type='url' value={photo} onChange={photoChangeHandler} />
       <button type='submit'>Update</button>
      </form>
    </div>
  )
}

export default Profile
