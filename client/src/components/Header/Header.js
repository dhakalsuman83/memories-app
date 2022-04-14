import React from "react";
import "./styles.css";

function Header() {
  return (
    <div className="nav">
      <div className="nav-left">
        <h1>MEMORIES</h1>
        <img
          src={require("../../images/memories.png")}
          alt=""
          className="logo"
        />
      </div>
      <div className="nav-right">
        <button className="btn">Sign In</button>
        <button className="btn">Register</button>
      </div>
    </div>
  );
}

export default Header;
