import "./App.css";
import { useEffect } from "react";
import Routing from "./pages/Routing";
import { TodoProvider } from "./context/TodoContext";
import { BrowserRouter } from "react-router-dom";

function App() {
  useEffect(() => {
    document.title = "todoist";
  });

  return (
    <div className="App">
      <BrowserRouter>
        <TodoProvider>
          <Routing />
        </TodoProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
