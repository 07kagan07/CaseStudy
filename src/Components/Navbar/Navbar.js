import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { MainContext, useContext } from "../../MainContext";

const Navbar = () => {
  const { user, setUser } = useContext(MainContext);

  return (
    <div className="nav-wrapper">
      <div className="nav-logo">
        <img
          src={require("../../Constant/logo.png")}
          alt=""
          width="102"
          height="89"
        />
      </div>
      <div className="nav-menu">
        <Link to={"/home"}>Mainpage</Link>
        <Link to={"/admin"}>Admin Panel</Link>
      </div>
      <div className="nav-button">
        <div className="profile-badge">
          <div>
            <img
              className="pp-image"
              src={
                user[0]?.pp_src
                  ? user[0].pp_src
                  : require("../../Constant/defaultPp.png")
              }
              alt="profileimage"
              width="45"
              height="43"
            />
          </div>
          <div>
            {user[0]?.username ? (
              user[0].username
            ) : (
              <Link to={"/login"}>Login</Link>
            )}
          </div>
        </div>
        <div>
          {user[0] ? (
            <Link onClick={async () => await setUser("")} to={"/login"}>
              Logout
            </Link>
          ) : (
            <Link to={"/register"}>Register</Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
