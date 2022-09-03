import { createContext, useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const params = useParams();
  const [username, setUsername] = useState(localStorage.getItem("username"));
  const [todos, setTodos] = useState([]);
  const [selectedTodo, setSelectedTodo] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getAllTodos();
  }, []);

  const getAllTodos = async () => {
    const data = await fetch(
      `https://${process.env.REACT_APP_API_KEY}.mockapi.io/todos`
    );
    const todoList = await data.json();

    setTodos(todoList.reverse());
    setIsLoading(false);
  };

  const deleteTodo = async (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      await fetch("");
    }
  };

  const values = {
    username,
    setUsername,
    todos,
    setTodos,
    isLoading,
    selectedTodo,
    setSelectedTodo,
  };

  return <TodoContext.Provider value={values}>{children}</TodoContext.Provider>;
};

export const useTodo = () => useContext(TodoContext);
