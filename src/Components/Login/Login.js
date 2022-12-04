import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { MainContext, useContext } from "../../MainContext";

const Login = () => {
    const navigate = useNavigate();
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const { setUser } = useContext(MainContext);

  const handlerSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:3004/users", {
      method: "GET",
    });
    let responseBody;
    try {
      responseBody = await response.json();
    } catch (e) {
      console.error(e);
      responseBody = null;
    }
    if ((await response).ok) {
      // setUser(responseBody);
      let responseUser = responseBody.filter(
        (item) => item.username === username && item.password === password
      );

      if ((await responseUser.length) === 0) {
        alert("Kullanıcı adı veya şifre yalnış");
      } else {
        setUser(responseUser);
        navigate("/home");
      }
    }
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
