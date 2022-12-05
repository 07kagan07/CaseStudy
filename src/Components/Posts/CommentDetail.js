import React, { useEffect, useState } from "react";
import PostUser from "./PostUser";

const CommentDetail = ({ postId }) => {
  const [comment, setComment] = useState();

  useEffect(() => {
    fetch(
      `http://${process.env.REACT_APP_Localhost}:3004/comments?postId=${postId}`
    )
      .then((req) => req.json())
      .then((data) => setComment(data));
  }, [postId]);

  return (
    <div className="comment-detail-wrapper">
      {comment?.map((comment) => (
        <div key={comment.id} className="comment-detail">
          <PostUser id={comment.userId} tag={false} />
          <p className="comment-p">{comment.comment}</p>
        </div>
      ))}
    </div>
  );
};

export default CommentDetail;
