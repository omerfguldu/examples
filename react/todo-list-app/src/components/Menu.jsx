import React from "react";
import { FaListUl } from "react-icons/fa";
import { BsCheck2All, BsClock } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import { AiOutlineLogout } from "react-icons/ai";
import logo from "../assets/logo.png";
import { NavLink, useNavigate } from "react-router-dom";
import { useTodo } from "../context/TodoContext";

function Menu() {
  const { setFilter } = useTodo();
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("username");
    navigate("/login");
  };

  return (
    <div className="menu-container">
      <img src={logo} alt="" />
      <NavLink
        onClick={() => setFilter("alltodos")}
        to={"/alltodos"}
        className={"menu-links"}
      >
        <FaListUl />
        <p>All Todos</p>
      </NavLink>
      <NavLink
        onClick={() => setFilter("completed")}
        to={"/completed"}
        className={"menu-links"}
      >
        <BsCheck2All />
        <p>Completed</p>
      </NavLink>
      <NavLink
        onClick={() => setFilter("inprogress")}
        to={"/inprogress"}
        className={"menu-links"}
      >
        <BsClock />
        <p>In Progress</p>
      </NavLink>
      <NavLink
        onClick={() => setFilter("alltodos")}
        to={"/settings"}
        className={"menu-links"}
      >
        <FiSettings></FiSettings>
        <p>Settings</p>
      </NavLink>
      <div onClick={handleLogout} className="logout">
        <AiOutlineLogout />
        <p>Logout</p>
      </div>
    </div>
  );
}

export default Menu;
