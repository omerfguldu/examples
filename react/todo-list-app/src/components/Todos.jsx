import React from "react";
import TodoItem from "./TodoItem";
import Spinner from "../components/Spinner";
import { AiOutlinePlus } from "react-icons/ai";
import { useTodo } from "../context/TodoContext";
import { useEffect } from "react";

function Todos() {
  const { todos, isLoading } = useTodo();
  const handleNewTodo = () => {
    const newTodoContainer = document.querySelector(".add-new-todo-container");
    newTodoContainer.classList.remove("hidden");
  };

  if (!isLoading && (!todos || todos.length === 0)) {
    return <p>No Todos Yet</p>;
  }

  return isLoading ? (
    <Spinner />
  ) : (
    <div className="content-container">
      <div className="content-header">
        <h1>All Todos</h1>
        <button onClick={handleNewTodo} className="btn-new-todo">
          {" "}
          <span>
            <AiOutlinePlus />
          </span>{" "}
          New Todo
        </button>
      </div>
      <div className="content-todo">
        {todos.map((todoItem) => (
          <TodoItem key={todoItem.id} todo={todoItem} />
        ))}
      </div>
    </div>
  );
}

export default Todos;
