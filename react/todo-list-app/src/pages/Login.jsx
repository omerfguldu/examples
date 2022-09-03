import { useState } from "react";
import { Route, Routes, NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import bro from "../assets/bro.png";
import { useTodo } from "../context/TodoContext";

function Login() {
  const navigate = useNavigate();
  const { setUsername } = useTodo();
  const [inputUsername, setInputUsername] = useState();

  const handleContinue = (e) => {
    e.preventDefault();
    if (inputUsername !== "") {
      localStorage.setItem("username", inputUsername);
      setUsername(inputUsername);
      navigate("/alltodos");
    }
  };

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
          <form className="username-input-container" onSubmit={handleContinue}>
            <label htmlFor="userNameInput">Username</label>
            <input
              value={inputUsername || ""}
              onChange={(e) => {
                setInputUsername(e.target.value);
              }}
              type="text"
              id="userNameInput"
              placeholder="Enter a username"
            />
          </form>
          <NavLink
            to={"/alltodos"}
            className={`${inputUsername ? "btn-continue" : "disabled"}`}
            onClick={handleContinue}
          >
            Continue
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Login;
