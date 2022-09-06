import { useState } from "react";
import { useTodo } from "../context/TodoContext";

function AddTodoCard() {
  const { addTodo } = useTodo();
  const [content, setContent] = useState("");
  const [showError, setShowError] = useState(false);
  const newTodoContainer = document.querySelector(".add-new-todo-container");

  const handleCancel = () => {
    newTodoContainer.classList.add("v-hidden");
    setContent("");
  };

  const handleAdd = () => {
    if (content) {
      const newTodo = {
        content,
        isCompleted: false,
      };

      addTodo(newTodo);
      setContent("");
      newTodoContainer.classList.add("v-hidden");
    } else {
      setShowError(true);
    }
  };

  return (
    <div className="add-new-todo-container v-hidden">
      <div className="add-todo-card">
        <h2>Add New Todo</h2>
        <div className="input-add">
          <label htmlFor="inputAddTodo">Todo Content</label>
          <textarea
            className="txtarea todo-add-input"
            id="inputAddTodo"
            value={content}
            onChange={(e) => {
              setContent(e.target.value);
              setShowError(false);
            }}
            placeholder="Add new todo"
          />
          {showError ? (
            <p className="error-text">
              To add new todo please fill the text area!
            </p>
          ) : (
            ""
          )}
        </div>
        <div className="buttons-add-todo">
          <button onClick={handleCancel} className="btn btn-outline btn-red">
            Cancel
          </button>
          <button onClick={handleAdd} className="btn btn-outline btn-green">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodoCard;
