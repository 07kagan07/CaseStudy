import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PostCard from "./PostCard";
import "./Post.css";

const PostComments = () => {
  const [post, setPost] = useState();
  const [userComment, setUserComment] = useState();
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3004/posts/${id}`)
      .then((req) => req.json())
      .then((data) => setPost(data));
  }, [id]);

  return (
    <>
      <PostCard post={post} actionstatus={null} />
      <div className="comment-wrapper">
        <div className="comment-section">
          <div>
            <div>Comment</div>
            <div className="comment-inputs">
              <input
                type={"text"}
                value={userComment}
                onChange={(e) => setUserComment(e.target.value)}
              />
              <button type={"submit"}>{">"}</button>
            </div>
          </div>
          <div>comments</div>
        </div>
      </div>
    </>
  );
};

export default PostComments;
