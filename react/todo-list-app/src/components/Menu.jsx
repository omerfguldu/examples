import React from "react";
import { FaListUl } from "react-icons/fa";
import { BsCheck2All, BsClock } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import { AiOutlineLogout } from "react-icons/ai";
import logo from "../assets/logo.png";
import { NavLink, useNavigate } from "react-router-dom";

function Menu() {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("username");
    navigate("/login");
  };

  return (
    <div className="menu-container">
      <img src={logo} alt="" />
      <NavLink to={"/alltodos"} className={"menu-links"}>
        <FaListUl />
        <p>All Todos</p>
      </NavLink>
      <NavLink to={"/completed"} className={"menu-links"}>
        <BsCheck2All />
        <p>Completed</p>
      </NavLink>
      <NavLink to={"/inprogress"} className={"menu-links"}>
        <BsClock />
        <p>In Progress</p>
      </NavLink>
      <NavLink to={"/settings"} className={"menu-links"}>
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
