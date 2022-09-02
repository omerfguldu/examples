import "./App.css";
import Pages from "./pages/Pages";
import { TodoProvider } from "./context/TodoContext";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <TodoProvider>
          <div className="main-container">
            <Pages />
          </div>
        </TodoProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
