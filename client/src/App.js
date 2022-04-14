import React from "react";
import Header from "./components/Header/Header";
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
import "./App.css";

const App = () => {
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
