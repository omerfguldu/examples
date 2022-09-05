import { useState, useEffect } from "react";
import { useTodo } from "../context/TodoContext";
import { AiOutlineClose } from "react-icons/ai";

function Detail() {
  const {
    username,
    todos,
    selectedTodo,
    setSelectedTodo,
    deleteTodo,
    updateTodo,
  } = useTodo();
  const [status, setStatus] = useState("incompleted");
  const [todoText, setTodoText] = useState(todos[0]?.content);

  const handleDelete = () => {
    if (selectedTodo) {
      const deleteItem = selectedTodo;
      if (window.confirm("Are you sure you want to delete?")) {
        deleteTodo(deleteItem.id);
        setStatus("incompleted");
        setTodoText("");
        setSelectedTodo(null);
      }
    } else {
      alert("Please select a todo before delete an item");
    }
    if (window.screen.width <= 600) {
      const detailContainer = document.querySelector(".detail-container");
      detailContainer.classList.remove("d-block");
      detailContainer.classList.add("d-none");
    }
  };

  const handleUpdate = () => {
    if (selectedTodo) {
      const updatedTodo = {
        id: selectedTodo.id,
        content: todoText,
        isCompleted: status === "completed" ? true : false,
      };
      updateTodo(selectedTodo.id, updatedTodo);
    } else {
      alert("Please select a todo before update an item");
    }
    if (window.screen.width <= 600) {
      const detailContainer = document.querySelector(".detail-container");
      detailContainer.classList.remove("d-block");
      detailContainer.classList.add("d-none");
    }
  };

  const handleCloseDetail = () => {
    const detailContainer = document.querySelector(".detail-container");
    detailContainer.classList.remove("d-block");
    detailContainer.classList.add("d-none");
  };

  useEffect(() => {
    setTodoText(selectedTodo?.content);
    setStatus(selectedTodo?.isCompleted ? "completed" : "incompleted");
  }, [selectedTodo]);

  return (
    <div className="detail-container">
      <p className="username">{username}</p>
      <h2>Todo Detail</h2>
      <div className="todo-details">
        <div className="todo-detail-header">
          <div>
            <h3>Todo ID</h3>
            <p className="todo-id">{selectedTodo ? selectedTodo.id : "-"}</p>
          </div>
          <AiOutlineClose
            onClick={handleCloseDetail}
            className="detail-close"
          />
        </div>
        <div>
          <h3>Todo Content</h3>
          <textarea
            value={todoText}
            className="txtarea"
            name=""
            id=""
            onChange={(e) => setTodoText(e.target.value)}
          ></textarea>
        </div>
        <div>
          <h3>Todo Status</h3>
          <select
            value={status}
            className="todo-status-select"
            name=""
            id=""
            onChange={(e) => {
              setStatus(e.target.value);
            }}
          >
            <option value="completed">completed</option>
            <option value="incompleted">incompleted</option>
          </select>
        </div>
        <div className="btn-detail-container">
          <button className="btn-outline btn-red" onClick={handleDelete}>
            Delete
          </button>
          <button className="btn-outline btn-green" onClick={handleUpdate}>
            Update
          </button>
        </div>
      </div>
    </div>
  );
}

export default Detail;
