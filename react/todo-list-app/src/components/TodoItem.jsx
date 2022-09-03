import { BsCheck2All, BsClock } from "react-icons/bs";
import { useTodo } from "../context/TodoContext";

function TodoItem({ todo }) {
  const { setSelectedTodo } = useTodo();
  const onTodoClick = (item) => {
    setSelectedTodo(item);
  };

  return (
    <div onClick={() => onTodoClick(todo)} className="todo-item-container">
      <div className="todo-icon">
        <BsCheck2All />
      </div>
      <p className="todo-text">{todo.content}</p>
    </div>
  );
}

export default TodoItem;
