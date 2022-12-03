import React, { useEffect, useState } from "react";
import PostCard from "../Posts/PostCard";
import "./Admin.css";

const Admin = () => {
  const [posts, setPosts] = useState();
  const [postDetail, setPostDetail] = useState();

  const getPostDetail = (post) => {
    setPostDetail(post);
    // window.scrollTo(0, 1600);
    window.scrollTo({
      top: 1800,
      behavior: "smooth",
    });
  };

  const [statusChanged, setStatusChanged] = useState(false);

  const chPostStatus = (postStatus, id) => {
    postStatus < 2 ? (postStatus += 1) : (postStatus = 1);
    statusChanged ? setStatusChanged(false) : setStatusChanged(true);
    fetch(`http://localhost:3004/posts/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        status: postStatus,
      }),
    });
  };

  useEffect(() => {
    fetch("http://localhost:3004/posts")
      .then((req) => req.json())
      .then((data) => setPosts(data));
  }, [statusChanged]);

  return (
    <div>
      <div className="admin-table">
        <table className="container">
          <thead>
            <tr>
              <th>
                <h1>Post ID</h1>
              </th>
              <th>
                <h1>Status</h1>
              </th>
              <th>
                <h1>ACTIONS</h1>
              </th>
            </tr>
          </thead>
          <tbody>
            {posts?.map((post, index) => (
              <tr key={index}>
                <td>
                  <h3>#{post.id}</h3>
                </td>
                <td>
                  {
                    {
                      0: "Pending",
                      1: <div className="green">Approved</div>,
                      2: <div className="red">Cancelled</div>,
                    }[post.status]
                  }
                </td>
                <td className="action-buttons">
                  {
                    {
                      0: (
                        <button
                          onClick={() => chPostStatus(post.status, post.id)}
                          className="action-approve"
                        >
                          Approve
                        </button>
                      ),
                      1: (
                        <button
                          onClick={() => chPostStatus(post.status, post.id)}
                          className="action-cancelle"
                        >
                          Cancelle
                        </button>
                      ),
                      2: (
                        <button
                          onClick={() => chPostStatus(post.status, post.id)}
                          className="action-approve"
                        >
                          Approve
                        </button>
                      ),
                    }[post.status]
                  }

                  <h4 className="examine" onClick={() => getPostDetail(post)}>
                    İncele
                  </h4>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <h2>Önizleme - {postDetail?.id}</h2>
      <div>{postDetail && <PostCard id="postCard" post={postDetail} />}</div>
      {!postDetail && <h1>Önizlemeyi Görmek İçin İnceleye Basınız</h1>}
    </div>
  );
};

export default Admin;
