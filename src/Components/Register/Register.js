import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Register.css";

const Register = () => {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handlerSubmit = (e) => {
    e.preventDefault();
    alert(username, password);
  };
  // const userRegister = (username, password) => {};

  return (
    <div className="register-wrapper">
      <div className="register-logo">
        <img
          src={require("../../Constant/logo.png")}
          alt=""
          width="175"
          height="155"
        />
      </div>
      <div>
        <form className="register-form" onSubmit={handlerSubmit}>
          <input readOnly placeholder="Upload Profile Picture" />

          <label htmlFor="username">Username</label>
          <input
            type={"text"}
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
          />

          <label htmlFor="password">Password</label>
          <input
            type={"password"}
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <input type={"submit"} value="REGISTER" />
          <Link to={"/login"}>LOGIN</Link>
        </form>
      </div>
    </div>
  );
};

export default Register;
