import React from "react";
import moment from "moment";
import { FaBars } from "react-icons/fa";
import { AiOutlineDelete, AiOutlineLike } from "react-icons/ai";

import "./styles.css";

function Post({ post, setCurrentId }) {
  return (
    <div className="card-item">
      <div className="overlay-container">
        <img src={post.selectedFile} alt="" />
        <div className="card-item-overlay">
          <h3>{post.creator}</h3>
          <p>{moment(post.createdAt).fromNow()}</p>
        </div>
        <FaBars className="fa-bars" onClick={() => setCurrentId(post._id)} />
      </div>
      <div className="card-item-description">
        <p>{post.tags[0]}</p>
        <h4>{post.title}</h4>
        <p>{post.message}</p>
        <div className="card-buttom">
          <a href="#">
            {post.likeCount != 0 && post.likeCount}
            <AiOutlineLike className="like-btn" />
          </a>
          <AiOutlineDelete className="delete-btn" />
        </div>
      </div>
    </div>
  );
}

export default Post;
