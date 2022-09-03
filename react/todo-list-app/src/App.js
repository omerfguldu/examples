import "./App.css";
import Routing from "./pages/Routing";
import { TodoProvider } from "./context/TodoContext";
import { BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";

function App() {
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
