import { BsCheck2All, BsClock } from "react-icons/bs";
import { useTodo } from "../context/TodoContext";

function TodoItem({ todo }) {
  const { setSelectedTodo } = useTodo();
  const onTodoClick = (e, item) => {
    const allTodoContainer = document.querySelectorAll(".todo-item-container");
    allTodoContainer.forEach((container) =>
      container.classList.remove("active-todo")
    );
    setSelectedTodo(item);
    e.target.classList.add("active-todo");
  };

  return (
    <div
      onClick={(e) => onTodoClick(e, todo)}
      className="todo-item-container"
      style={{ backgroundColor: `${todo.isCompleted ? "#0f7070" : "#252835"}` }}
    >
      <div className="todo-icon">
        {todo.isCompleted ? <BsCheck2All /> : <BsClock />}
      </div>
      <p className="todo-text">{todo.content}</p>
    </div>
  );
}

export default TodoItem;
