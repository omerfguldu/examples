import Todos from "../components/Todos";
import { Route, Routes } from "react-router-dom";

function Pages() {
  return (
    <Routes>
      <Route path={"/:filter"} element={<Todos />} />
    </Routes>
  );
}

export default Pages;
