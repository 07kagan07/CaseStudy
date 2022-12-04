import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Register.css";

const Register = () => {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const [pp_src, setPp_src] = useState();

  const handlerSubmit = async (e) => {
    e.preventDefault();
    await fetch("http://localhost:3004/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: username,
        password: password,
        pp_src: pp_src ? pp_src : "",
      }),
    });

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
          <input
            readOnly
            placeholder="Upload Profile Picture"
            onChange={(e) => setPp_src(e.target.value)}
          />

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
