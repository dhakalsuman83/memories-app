import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FileBase64 from "react-file-base64";

import "./styles.css";
import { createPost, updatePost } from "../../Actions/Posts";

function Form({ currentId, setCurrentId }) {
  const [postData, setPostData] = React.useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });
  const post = useSelector((state) =>
    currentId ? state.posts.find((p) => p._id === currentId) : null
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentId) {
      dispatch(updatePost(currentId, postData));
    } else {
      dispatch(createPost(postData));
    }
    clearForm();
  };
  const clearForm = (e) => {
    setPostData({
      creator: "",
      title: "",
      message: "",
      tags: "",
      selectedFile: "",
    });
    setCurrentId(null);
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
      <h3>{currentId ? "Editing" : "Creating"} a memory</h3>
      <div className="form-control">
        <label htmlFor="creator">Creator:</label>
        <input
          type="text"
          name="creator"
          value={postData.creator}
          onChange={(e) => {
            setPostData({ ...postData, creator: e.target.value });
          }}
        />
      </div>
      <div className="form-control">
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          name="title"
          value={postData.title}
          onChange={(e) => {
            setPostData({ ...postData, title: e.target.value });
          }}
        />
      </div>
      <div className="form-control">
        <label htmlFor="message">Message:</label>
        <input
          name="message"
          value={postData.message}
          onChange={(e) => {
            setPostData({ ...postData, message: e.target.value });
          }}
        />
      </div>
      <div className="form-control">
        <label htmlFor="tags">Tags:</label>
        <input
          type="text"
          name="tags"
          value={postData.tags}
          onChange={(e) => {
            setPostData({
              ...postData,
              tags: e.target.value.split(","),
            });
          }}
        />
      </div>
      <div className="form-control">
        {/* <input
          type="file"
          name="selectedFile"
          value={postData.selectedFile}
          onChange={(e) => {
            setPostData({ ...postData, selectedFile: e.target.value });
          }}
        /> */}
        <FileBase64
          multiple={false}
          onDone={({ base64 }) => {
            setPostData({ ...postData, selectedFile: base64 });
          }}
        />
      </div>
      <div className="form-control">
        <button type="submit">Submit</button>
      </div>
      <div className="form-control">
        <a href="#" onClick={clearForm} className="clear-btn">
          Clear form
        </a>
      </div>
    </form>
  );
}

export default Form;
