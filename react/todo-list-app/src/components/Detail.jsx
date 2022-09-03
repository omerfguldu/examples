import { useTodo } from "../context/TodoContext";

function Detail() {
  const { username, todos, selectedTodo } = useTodo();

  return (
    <div className="detail-container">
      <p className="username">{username}</p>
      <h2>Todo Detail</h2>
      <div className="todo-details">
        <div>
          <h3>Todo ID</h3>
          <p className="todo-id">
            {selectedTodo ? selectedTodo.id : todos[0]?.id}
          </p>
        </div>
        <div>
          <h3>Todo Content</h3>
          <textarea
            value={selectedTodo ? selectedTodo.content : todos[0]?.content}
            className="todo-detail-input"
            name=""
            id=""
          ></textarea>
        </div>
        <div>
          <h3>Todo Status</h3>
          <select
            value={`${selectedTodo?.isCompleted ? "completed" : "incompleted"}`}
            className="todo-status-select"
            name=""
            id=""
          >
            <option value="completed">completed</option>
            <option value="incompleted">incompleted</option>
          </select>
        </div>
        <div className="btn-detail-container">
          <button className="btn-outline btn-red">Delete</button>
          <button className="btn-outline btn-green">Update</button>
        </div>
      </div>
    </div>
  );
}

export default Detail;
