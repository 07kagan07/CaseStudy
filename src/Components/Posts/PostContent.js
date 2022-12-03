import React from "react";

const PostContent = ({ textContent, imageContentsrc }) => {
  return (
    <>
      <div className="post-text">{textContent}</div>
      <div className="post-img">
        <img
          alt=""
          src={
            imageContentsrc
              ? imageContentsrc
              : require("../../Constant/placeholder.png")
          }
        />
      </div>
    </>
  );
};

export default PostContent;
