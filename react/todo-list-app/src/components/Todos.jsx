import React from "react";
import TodoItem from "./TodoItem";
import Spinner from "../components/Spinner";
import { motion, AnimatePresence } from "framer-motion";
import { AiOutlinePlus } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { useTodo } from "../context/TodoContext";
import { useEffect, useState } from "react";

function Todos() {
  const { todos, isLoading, setSelectedTodo, title, selectedTodo } = useTodo();
  let clicked = false;
  const handleNewTodo = () => {
    const newTodoContainer = document.querySelector(".add-new-todo-container");
    newTodoContainer.classList.remove("v-hidden");
  };

  const handleHamburger = () => {
    const detailContainer = document.querySelector(".detail-container");
    const menuContainer = document.querySelector(".menu-container");
    if (clicked && menuContainer.classList.contains("v-hidden"))
      clicked = false;
    if (window.screen.width <= 600) detailContainer.classList.add("d-none");
    const navMenu = document.querySelector(".menu-container");
    clicked = !clicked;
    if (clicked) {
      navMenu.classList.remove("v-hidden");
      navMenu.classList.add("v-visible");
    } else {
      navMenu.classList.remove("v-visible");
      navMenu.classList.add("v-hidden");
    }
  };

  useEffect(() => {
    const detailContainer = document.querySelector(".detail-container");
    if (window.screen.width <= 600) detailContainer.classList.add("d-none");
    const allTodoContainer = document.querySelectorAll(".todo-item-container");
    setSelectedTodo(todos[0]);
    allTodoContainer.forEach((container) => {
      container.classList.remove("active-todo");
      if (container.id === todos[0].id) container.classList.add("active-todo");
    });
  }, [todos]);

  if (!isLoading && (!todos || todos.length === 0)) {
    return <p>No Todos Yet</p>;
  }

  return isLoading ? (
    <Spinner />
  ) : (
    <div className="content-container">
      <div className="hamburger">
        <GiHamburgerMenu onClick={handleHamburger} />
      </div>
      <div className="content-header">
        <h1>{title ? title : "All Todos"}</h1>
        <button onClick={handleNewTodo} className="btn-new-todo">
          {" "}
          <span>
            <AiOutlinePlus />
          </span>{" "}
          New Todo
        </button>
      </div>
      <div className="content-todo">
        <AnimatePresence>
          {todos.map((todoItem) => (
            <motion.div
              key={todoItem.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              layout
            >
              <TodoItem index={todoItem.id} todo={todoItem} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default Todos;
