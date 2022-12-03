import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
// import { MainContext, useContext } from "../../MainContext";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handlerSubmit = async (e) => {
    e.preventDefault();
    await fetch("http://localhost:3004/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });
    navigate("/home");
  };

  return (
    <div className="login-wrapper">
      <div className="login-logo">
        <img
          src={require("../../Constant/logo.png")}
          alt=""
          width="175"
          height="155"
        />
      </div>
      <div>
        <form className="login-form" onSubmit={handlerSubmit}>
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
          <input type={"submit"} value="LOGIN" />
          <Link to="/register">Register</Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
