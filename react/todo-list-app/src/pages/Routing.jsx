import { useState } from "react";
import Login from "./Login";
import Home from "./Home";
import AddTodoCard from "../components/AddTodoCard";
import Pages from "./Pages";
import { Route, Routes, useLocation, Navigate } from "react-router-dom";
import { useTodo } from "../context/TodoContext";
import Todos from "../components/Todos";

function Routing() {
  const { username } = useTodo();

  return (
    <div className="main-container">
      <AddTodoCard />
      <Routes>
        <Route
          exact
          path="/"
          element={
            username ? <Navigate to="/alltodos" /> : <Navigate to="/login" />
          }
        ></Route>
        <Route path={"login"} element={<Login />} />
      </Routes>
      <Home>
        <Pages />
      </Home>
    </div>
  );
}

export default Routing;
