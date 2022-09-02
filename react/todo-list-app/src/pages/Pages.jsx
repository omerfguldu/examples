import { useState } from "react";
import Login from "./Login";
import Home from "./Home";
import { Route, Routes, useLocation } from "react-router-dom";
import { useTodo } from "../context/TodoContext";

function Pages() {
  const { username } = useTodo();
  const location = useLocation();
  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={username ? <Login /> : <Home />} />
    </Routes>
  );
}

export default Pages;
