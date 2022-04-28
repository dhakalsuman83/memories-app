import React from "react";
import { useSelector } from "react-redux";

import Post from "./Post/Post";
import "./styles.css";

function Posts({ setCurrentId }) {
  const posts = useSelector((state) => state.posts);
  console.log(posts);
  return (
    <div className="posts-container">
      {posts.map((post) => (
        <Post key={post._id} post={post} setCurrentId={setCurrentId} />
      ))}
    </div>
  );
}

export default Posts;
