import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PostCard from "./PostCard";
import "./Post.css";
import CommentDetail from "./CommentDetail";
import { MainContext, useContext } from "../../MainContext";

const PostComments = () => {
  const { user } = useContext(MainContext);
  const [post, setPost] = useState();
  const [userComment, setUserComment] = useState();
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://${process.env.REACT_APP_Localhost}:3004/posts/${id}`)
      .then((req) => req.json())
      .then((data) => setPost(data));
  }, [id]);

  const handleSubmit = async (e) => {
    // e.preventDefault();
    await fetch(`http://${process.env.REACT_APP_Localhost}:3004/comments`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userId: user[0].id,
        postId: id,
        comment: userComment,
      }),
    });
  };

  return (
    <>
      <PostCard post={post} actionstatus={null} />
      <div className="comment-wrapper">
        <div className="comment-section">
          <div>
            <div>Comment</div>
            <form className="comment-inputs" onSubmit={handleSubmit}>
              <textarea
                placeholder="type here ..."
                rows={5}
                value={userComment}
                onChange={(e) => setUserComment(e.target.value)}
              />
              <button type={"submit"}>{">"}</button>
            </form>
          </div>
          <div>
            <CommentDetail postId={id} userId={post?.userId} />
          </div>
        </div>
      </div>
    </>
  );
};

export default PostComments;
