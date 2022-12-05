import React, { useEffect, useState } from "react";
import PostCard from "./PostCard";

const PostMain = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(`http://${process.env.REACT_APP_Localhost}:3004/posts?status=1`)
      .then((req) => req.json())
      .then((data) => setPosts(data));
  }, []);
  return (
    <>
      {posts.map((post, index) => (
        <PostCard post={post} key={index} actionstatus={true} />
      ))}
    </>
  );
};

export default PostMain;
