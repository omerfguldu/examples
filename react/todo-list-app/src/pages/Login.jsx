import React from "react";
import { Route, Routes, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import bro from "../assets/bro.png";
import { useTodo } from "../context/TodoContext";

function Login() {
  const { username } = useTodo();

  return (
    <div className="login-container">
      <div className="login-left-container">
        <img className="img-logo" src={logo} alt="" />
        <div className="img-text-container">
          <img className="img-bro" src={bro} alt="" />
          <p className="login-left-text">
            Organize your things <br /> to do easily for free.
          </p>
        </div>
      </div>
      <div className="login-right-container">
        <div className="login-right">
          <h4 style={{ fontSize: "4rem" }}>Get started.</h4>
          <div className="username-input-container">
            <label htmlFor="userNameInput">Username</label>
            <input type="text" id="userNameInput" />
          </div>
          <button className="btn-continue">Continue</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
