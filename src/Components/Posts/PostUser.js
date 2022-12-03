import React, { useEffect, useState } from "react";

const PostUser = ({ id }) => {
  const [user, setUser] = useState();
  useEffect(() => {
    fetch(`http://localhost:3004/users?id=${id}`)
      .then((req) => req.json())
      .then((data) => setUser(data[0]));
  }, [id]);

  return (
    <>
      <div className="user-photo">
        <img
          className="user-pp"
          alt=""
          src={
            user?.pp_src
              ? user?.pp_src
              : require("../../Constant/defaultPp.png")
          }
        ></img>
      </div>
      <div className="user-info">
        <div className="user-info-username">
          {user?.username ? user.username : "UnknownUser"}
        </div>
        <div className="user-info-tag">
          @{user?.username ? user.username : "UnknownUser"}
        </div>
      </div>
    </>
  );
};

export default PostUser;
