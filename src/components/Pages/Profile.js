import React, { useState } from "react";

const Profile = () => {
  const [fullname, setFullname] = useState("");
  const [photo, setPhoto] = useState("");
  const nameChangehandler = (event) => {
    setFullname(event.target.value);
  };
  const photoChangeHandler = (event) => {
    setPhoto(event.target.value);
  };
  const submit = (event) => {
    event.preventDefault();
    const profile = {
      fullname: fullname,
      photo: photo,
    };
    updateProfile();
    setFullname("");
    setPhoto("");
  };
  const updateProfile = async () => {
    const response = await fetch(
      'https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyBeMKC3JVQQRqJtvlEAPGNx9o2FM6FEE74',
      {
        method: 'POST',
        body: JSON.stringify({
            idToken:'ID_TOKEN',
            fullname:"fullname",
            photo:'photo',
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    if (response.ok) {
      console.log(data);
    } else {
      console.log("error");
    }
  };
  return (
    <div>
      <form onSubmit={submit}>
        <h3>Contact Deatails</h3>
        <label htmlFor="fullName">Full Name</label>
        <input type="text" value={fullname} onChange={nameChangehandler} />

        <label htmlFor="profilephotourl">Profile Photo url</label>
        <input type="text" value={photo} onChange={photoChangeHandler} />
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default Profile;
