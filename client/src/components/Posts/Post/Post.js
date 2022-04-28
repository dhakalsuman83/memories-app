import React from "react";
import moment from "moment";
import { FaBars } from "react-icons/fa";
import { AiOutlineDelete, AiOutlineLike, AiFillLike } from "react-icons/ai";
import { useDispatch } from "react-redux";

import "./styles.css";
import { deletePost, likePost } from "../../../Actions/Posts";

function Post({ post, setCurrentId }) {
  const dispatch = useDispatch();
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
        <p
          style={{
            marginBottom: "8px",
            color: "rgb(92,92,92)",
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          {post.tags.map((tag) => {
            return `#${tag}`;
          })}
        </p>
        <h4 style={{ marginBottom: "8px" }}>{post.title}</h4>
        <p style={{ color: "rgb(92,92,92)" }}>{post.message}</p>
      </div>
      <div className="card-buttom">
        <a href="#" onClick={() => dispatch(likePost(post._id))}>
          <AiFillLike className="like-btn" />
          {post.likeCount != 0 && (
            <div className="like-container">
              <p style={{ padding: "5px", fontSize: "18px" }}>
                {post.likeCount === 1 ? "Like" : "Likes"}
              </p>
              <p style={{ fontSize: "18px" }}>{post.likeCount}</p>
            </div>
          )}
        </a>
        <AiOutlineDelete
          className="delete-btn"
          onClick={() => dispatch(deletePost(post._id))}
        />
      </div>
    </div>
  );
}

export default Post;
