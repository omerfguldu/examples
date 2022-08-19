import "./App.css";
import Form from "./forms/Form";
import { Routes, Route, Link } from "react-router-dom";
import FormValidate from "./forms/FormValidate";

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <Link to="/form">Form 1</Link>
          <Link to="/formvalidate">Form 2</Link>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/form" element={<Form />} />
        <Route path="/formvalidate" element={<FormValidate />} />
      </Routes>
    </div>
  );
}

export default App;
