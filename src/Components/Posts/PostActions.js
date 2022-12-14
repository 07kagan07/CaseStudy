import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const PostActions = ({ id, likes, comment_count }) => {
  const [likeState, setLikeState] = useState(false);
  const [like, setLike] = useState(likes);

  const navigate = useNavigate();

  const likeButton = () => {
    likeState ? unLiked() : liked();
  };

  useEffect(() => {
    fetch(`http://${process.env.REACT_APP_Localhost}:3004/posts/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        likes: like,
      }),
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [like]);

  const liked = () => {
    setLikeState(true);
    setLike(like + 1);
  };
  const unLiked = () => {
    setLikeState(false);
    setLike(like - 1);
  };

  return (
    <>
      <div className="post-icon">
        <svg
          onClick={likeButton}
          width="20"
          height="19"
          viewBox="0 0 20 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 19L8.55 17.7C6.86667 16.1833 5.475 14.875 4.375 13.775C3.275 12.675 2.4 11.6873 1.75 10.812C1.1 9.93733 0.646 9.13333 0.388 8.39999C0.129333 7.66666 0 6.91666 0 6.14999C0 4.58333 0.525 3.27499 1.575 2.22499C2.625 1.17499 3.93333 0.649994 5.5 0.649994C6.36667 0.649994 7.19167 0.833327 7.975 1.19999C8.75833 1.56666 9.43333 2.08333 10 2.74999C10.5667 2.08333 11.2417 1.56666 12.025 1.19999C12.8083 0.833327 13.6333 0.649994 14.5 0.649994C16.0667 0.649994 17.375 1.17499 18.425 2.22499C19.475 3.27499 20 4.58333 20 6.14999C20 6.91666 19.871 7.66666 19.613 8.39999C19.3543 9.13333 18.9 9.93733 18.25 10.812C17.6 11.6873 16.725 12.675 15.625 13.775C14.525 14.875 13.1333 16.1833 11.45 17.7L10 19ZM10 16.3C11.6 14.8667 12.9167 13.6373 13.95 12.612C14.9833 11.5873 15.8 10.696 16.4 9.93799C17 9.17933 17.4167 8.50399 17.65 7.91199C17.8833 7.32066 18 6.73333 18 6.14999C18 5.14999 17.6667 4.31666 17 3.64999C16.3333 2.98333 15.5 2.64999 14.5 2.64999C13.7167 2.64999 12.9917 2.87066 12.325 3.31199C11.6583 3.75399 11.2 4.31666 10.95 4.99999H9.05C8.8 4.31666 8.34167 3.75399 7.675 3.31199C7.00833 2.87066 6.28333 2.64999 5.5 2.64999C4.5 2.64999 3.66667 2.98333 3 3.64999C2.33333 4.31666 2 5.14999 2 6.14999C2 6.73333 2.11667 7.32066 2.35 7.91199C2.58333 8.50399 3 9.17933 3.6 9.93799C4.2 10.696 5.01667 11.5873 6.05 12.612C7.08333 13.6373 8.4 14.8667 10 16.3Z"
            fill={likeState ? "rgb(165, 40, 40)" : "#FAFAFA"}
          />
        </svg>
        {like}
      </div>
      <div className="post-icon">
        <svg
          onClick={() => navigate(`/post/${id}`)}
          width="21"
          height="20"
          viewBox="0 0 21 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.916687 19.1667V2.66668C0.916687 2.16251 1.10452 1.73076 1.48019 1.37143C1.85521 1.0127 2.30627 0.833344 2.83335 0.833344H18.1667C18.6938 0.833344 19.1451 1.0127 19.5208 1.37143C19.8958 1.73076 20.0834 2.16251 20.0834 2.66668V13.6667C20.0834 14.1708 19.8958 14.6026 19.5208 14.9619C19.1451 15.3206 18.6938 15.5 18.1667 15.5H4.75002L0.916687 19.1667ZM2.83335 14.7438L3.9594 13.6667H18.1667V2.66668H2.83335V14.7438Z"
            fill="#FAFAFA"
          />
        </svg>
        {comment_count}
      </div>
    </>
  );
};

export default PostActions;
