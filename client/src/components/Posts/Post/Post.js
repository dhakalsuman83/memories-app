import React from "react";
import "./styles.css";

function Post({ post }) {
  return (
    <div className="card-item">
      <div className="overlay-container">
        <img src={post.selectedFile} alt="" />
        <div className="card-item-overlay">
          <h3>{post.creator}</h3>
          <p>{post.createdAt}</p>
        </div>
      </div>
      <div className="card-item-description">
        <p>{post.tags[0]}</p>
        <h4>{post.title}</h4>
        <p>{post.message}</p>
        <button>likeCount</button>
        <button>delete</button>
      </div>
    </div>
  );
}

export default Post;
