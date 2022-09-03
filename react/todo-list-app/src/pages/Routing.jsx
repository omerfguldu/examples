import { useState } from "react";
import Login from "./Login";
import Home from "./Home";
import Todos from "../components/Todos";
import Pages from "./Pages";
import { Route, Routes, useLocation, Navigate } from "react-router-dom";
import { useTodo } from "../context/TodoContext";

function Routing() {
  const { username } = useTodo();
  const handleCancel = () => {
    const newTodoContainer = document.querySelector(".add-new-todo-container");
    newTodoContainer.classList.add("hidden");
  };
  return (
    <div className="main-container">
      <div className="add-new-todo-container hidden">
        <div className="add-todo-card">
          <h2>Add New Todo</h2>
          <div className="input-add">
            <label htmlFor="inputAddTodo">Todo Content</label>
            <input type="text" id="inputAddTodo" placeholder="Add new todo" />
          </div>
          <div className="buttons-add-todo">
            <button onClick={handleCancel} className="btn-outline btn-red">
              Cancel
            </button>
            <button className="btn-outline btn-green">Add</button>
          </div>
        </div>
      </div>
      <Routes>
        <Route
          exact
          path="/"
          element={
            username ? <Navigate to="/alltodos" /> : <Navigate to="/login" />
          }
        />
        <Route path={"login"} element={<Login />} />
      </Routes>
      <Home>
        <Pages />
      </Home>
    </div>
  );
}

export default Routing;
