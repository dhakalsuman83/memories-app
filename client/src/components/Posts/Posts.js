import React from "react";
import { useSelector } from "react-redux";

import Post from "./Post/Post";
import "./styles.css";

function Posts() {
  const posts = useSelector((state) => state.posts);
  console.log(posts);
  return (
    <div className="posts-container">
      {posts.map((post) => (
        <Post key={post._id} post={post} />
      ))}
    </div>
  );
}

export default Posts;
