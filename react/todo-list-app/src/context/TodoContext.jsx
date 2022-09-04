import { createContext, useContext, useState, useEffect } from "react";

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [username, setUsername] = useState(localStorage.getItem("username"));
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("alltodos");
  const [selectedTodo, setSelectedTodo] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getAllTodos();
    console.log(filter);
  }, [filter]);

  const getAllTodos = async () => {
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
    console.log(updatedItem);
  };

  const values = {
    username,
    todos,
    isLoading,
    selectedTodo,
    setUsername,
    setTodos,
    setSelectedTodo,
    deleteTodo,
    updateTodo,
    addTodo,
    setFilter,
  };

  return <TodoContext.Provider value={values}>{children}</TodoContext.Provider>;
};

export const useTodo = () => useContext(TodoContext);
