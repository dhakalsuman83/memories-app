import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import Header from "./components/Header/Header";
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
import { getPosts } from "./actions/posts";
import "./App.css";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <div className="container">
      <Header />
      <div className="app-body">
        <Posts />
        <Form />
      </div>
    </div>
  );
};

export default App;
