import React, { useState } from "react";

const ControlledForms2 = () => {
  let [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
  });

  function handleChange(e) {
    let { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  }

  function formSubmit(e) {
    e.preventDefault();
    console.log(userData);

    // clearing input fields
    setUserData({
      username: "",
      email: "",
      password: "",
    });
  }

  return (
    <div>
      <h1>Controlled Forms 2</h1>
      <form onSubmit={formSubmit}>
        <label>Username</label>
        <input
          type="text"
          name="username"
          value={userData.username}
          onChange={handleChange}
        />
        <br /> <br />
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={userData.email}
          onChange={handleChange}
        />
        <br /> <br />
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={userData.password}
          onChange={handleChange}
        />
        <br /> <br />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default ControlledForms2;
