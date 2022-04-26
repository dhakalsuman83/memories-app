import React from "react";
import "./styles.css";

function Post({ post }) {
  return (
    <div className="card-item">
      <img src={post.selectedFile} alt="" />
      <h5>{post.creator}</h5>
      <p>{post.createdAt}</p>
      <p>{post.tags[0]}</p>
      <h4>{post.title}</h4>
      <p>{post.message}</p>
      <button>likeCount</button>
      <button>delete</button>
    </div>
  );
}

export default Post;
