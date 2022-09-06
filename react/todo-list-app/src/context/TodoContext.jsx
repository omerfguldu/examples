import { createContext, useContext, useState, useEffect } from "react";

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [username, setUsername] = useState(localStorage.getItem("username"));
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("alltodos");
  const [title, setTitle] = useState("All Todos");
  const [selectedTodo, setSelectedTodo] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [updateTodos, setUpdateTodos] = useState(false);

  useEffect(() => {
    getAllTodos();
  }, [title, updateTodos]);

  const getAllTodos = async () => {
    const detailContainer = document.querySelector(".detail-container");
    const data = await fetch(
      `https://${process.env.REACT_APP_API_KEY}.mockapi.io/todos`
    );
    const todoList = await data.json();

    if (filter === "alltodos") {
      setTodos(todoList.reverse());
    }
    if (filter === "completed") {
      setTodos(todoList.filter((todoItem) => todoItem.isCompleted).reverse());
    }
    if (filter === "inprogress") {
      setTodos(todoList.filter((todoItem) => !todoItem.isCompleted).reverse());
    }
    if (window.screen.width <= 600) {
      detailContainer.classList.remove("d-block");
      detailContainer.classList.add("d-none");
    }
    setIsLoading(false);
  };

  const addTodo = async (newTodo) => {
    const response = await fetch(
      `https://${process.env.REACT_APP_API_KEY}.mockapi.io/todos`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTodo),
      }
    );
    const data = await response.json();

    setTodos([data, ...todos]);
    setUpdateTodos((prev) => !prev);
    setFilter("alltodos");
  };

  const deleteTodo = async (id) => {
    await fetch(
      `https://${process.env.REACT_APP_API_KEY}.mockapi.io/todos/${id}`,
      { method: "DELETE" }
    );

    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const updateTodo = async (id, updatedItem) => {
    const response = await fetch(
      `https://${process.env.REACT_APP_API_KEY}.mockapi.io/todos/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedItem),
      }
    );
    const data = await response.json();

    setTodos(
      todos.map((todo) => {
        return todo.id === id ? data : todo;
      })
    );
    setUpdateTodos((prev) => !prev);
  };

  const values = {
    username,
    todos,
    isLoading,
    selectedTodo,
    title,
    setUsername,
    setTodos,
    setSelectedTodo,
    deleteTodo,
    updateTodo,
    addTodo,
    setFilter,
    setTitle,
  };

  return <TodoContext.Provider value={values}>{children}</TodoContext.Provider>;
};

export const useTodo = () => useContext(TodoContext);
