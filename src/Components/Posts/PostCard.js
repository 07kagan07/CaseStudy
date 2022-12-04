import React from "react";
import "./Post.css";
import PostActions from "./PostActions";
import PostContent from "./PostContent";
import PostUser from "./PostUser";

const PostCard = ({ post, actionstatus }) => {
  return (
    <div className="post-wrapper">
      <div className="post-user">
        <PostUser id={post?.userId} />
      </div>
      <div className="post-detail">
        <PostContent
          textContent={post?.textContent}
          imageContentsrc={post?.imageContentsrc}
        />
        {actionstatus && (
          <div className="post-actions">
            <PostActions
              id={post?.id}
              likes={post?.likes}
              comment_count={post?.comment_count}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default PostCard;
