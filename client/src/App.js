import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { getPosts } from "./Actions/Posts";
import Header from "./components/Header/Header";
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
import "./App.css";

const App = () => {
  const [currentId, setCurrentId] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <div className="container">
      <Header />
      <div className="app-body">
        <Posts setCurrentId={setCurrentId} />
        <Form currentId={currentId} setCurrentId={setCurrentId} />
      </div>
    </div>
  );
};

export default App;
